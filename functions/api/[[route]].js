/* SMCT AI 인테리어 — 서버 쪽 권한 확인 공통 모듈
   Cloudflare Pages 환경변수(비밀):
     AI_CODE_SECRET : 이용코드 서명용 비밀 문자열 (길고 무작위로)
     AI_ADMIN_PW    : 관리자 비밀번호 */
const enc = new TextEncoder();
const B32 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
const EPOCH = Date.UTC(2026, 0, 1), DAY = 864e5;
const COOKIE = 'smct_ai', COOKIE0 = 'smct_ai_c0';
const PASS_DAYS = 3; // 승인코드 이용 기간(일) — 고정

const configured = env => !!(env.AI_CODE_SECRET && env.AI_ADMIN_PW && String(env.AI_CODE_SECRET).length >= 16 && String(env.AI_ADMIN_PW).length >= 8);

async function hmac(keyStr, msg) {
  const key = await crypto.subtle.importKey('raw', enc.encode(keyStr), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC', key, enc.encode(msg)));
}
const b64u = bytes => btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const sessKey = env => 'sess|' + env.AI_CODE_SECRET + '|' + env.AI_ADMIN_PW;
function sameBytes(a, b) { if (a.length !== b.length) return false; let d = 0; for (let i = 0; i < a.length; i++) d |= a[i] ^ b[i]; return d === 0; }

/* ---------- 이용코드: SMCT-XXXX-XXXX = 만료일 12bit + 일련 8bit + 서명 20bit ---------- */
async function codeSig(env, payload) { const h = await hmac('code|' + env.AI_CODE_SECRET, String(payload)); return ((h[0] << 12) | (h[1] << 4) | (h[2] >> 4)) >>> 0; }
async function makeCode(env, days) {
  const today = Math.floor((Date.now() - EPOCH) / DAY);
  const exp = Math.max(0, Math.min(4095, today + days));
  const ser = crypto.getRandomValues(new Uint8Array(1))[0];
  const payload = exp * 256 + ser;
  let n = payload * 1048576 + await codeSig(env, payload), s = '';
  for (let i = 0; i < 8; i++) { s = B32[n % 32] + s; n = Math.floor(n / 32); }
  return { code: 'SMCT-' + s.slice(0, 4) + '-' + s.slice(4), exp: EPOCH + exp * DAY + DAY - 1 };
}
/* ---------- 공통 승인코드: 신청이 오면 이 코드 하나를 보낸다 (비밀값에서 계산되므로 소스에는 드러나지 않는다) ---------- */
const COMMON_PAYLOAD = 4095 * 256;
async function commonCode(env) {
  let n = COMMON_PAYLOAD * 1048576 + await codeSig(env, COMMON_PAYLOAD), s = '';
  for (let i = 0; i < 8; i++) { s = B32[n % 32] + s; n = Math.floor(n / 32); }
  return 'SMCT-' + s.slice(0, 4) + '-' + s.slice(4);
}
/* 공통 코드를 이 브라우저에서 처음 쓴 시각 (서명된 쿠키) */
async function firstUseCookie(env, t0) { return `${COOKIE0}=${t0}.${b64u(await hmac('c0|' + sessKey(env), String(t0)))}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${400 * 86400}`; }
async function readFirstUse(env, request) {
  const m = (request.headers.get('Cookie') || '').match(new RegExp('(?:^|;\\s*)' + COOKIE0 + '=(\\d+)\\.([^;]+)'));
  if (!m) return 0;
  if (!sameBytes(enc.encode(b64u(await hmac('c0|' + sessKey(env), m[1]))), enc.encode(m[2]))) return 0;
  const t = +m[1]; return t > 0 && t <= Date.now() ? t : 0;
}
async function checkCode(env, input) {
  let s = String(input || '').toUpperCase().replace(/[^0-9A-Z]/g, '');
  if (s.startsWith('SMCT')) s = s.slice(4);
  s = s.replace(/[IL]/g, '1').replace(/O/g, '0');
  if (s.length !== 8) return { ok: false, why: '코드 자릿수가 맞지 않습니다.' };
  let n = 0;
  for (const c of s) { const i = B32.indexOf(c); if (i < 0) return { ok: false, why: '사용할 수 없는 문자가 있습니다.' }; n = n * 32 + i; }
  const sig = n % 1048576, payload = Math.floor(n / 1048576);
  if (await codeSig(env, payload) !== sig) return { ok: false, why: '유효하지 않은 코드입니다.' };
  if (payload === COMMON_PAYLOAD) return { ok: true, common: true, code: 'SMCT-' + s.slice(0, 4) + '-' + s.slice(4) };
  const exp = EPOCH + Math.floor(payload / 256) * DAY + DAY - 1;
  if (Date.now() > exp) return { ok: false, why: '사용 기간이 끝난 코드입니다. 재발급을 요청해 주세요.' };
  return { ok: true, exp, code: 'SMCT-' + s.slice(0, 4) + '-' + s.slice(4) };
}

/* ---------- 관리자 비밀번호 ---------- */
async function checkAdminPw(env, pw) {
  const a = await hmac('pw|' + env.AI_CODE_SECRET, String(pw || '')), b = await hmac('pw|' + env.AI_CODE_SECRET, String(env.AI_ADMIN_PW));
  return sameBytes(a, b);
}

/* ---------- 세션 쿠키 (서명된 토큰) ---------- */
async function sessionCookie(env, role, exp) {
  const body = b64u(enc.encode(JSON.stringify({ r: role, e: exp })));
  const tok = body + '.' + b64u(await hmac(sessKey(env), body));
  let c = `${COOKIE}=${tok}; Path=/; HttpOnly; Secure; SameSite=Lax`;
  if (role !== 'admin') c += `; Max-Age=${Math.max(60, Math.floor((exp - Date.now()) / 1000))}`;
  return c;
}
const clearCookie = () => `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
async function readSession(env, request) {
  if (!configured(env)) return null;
  const m = (request.headers.get('Cookie') || '').match(new RegExp('(?:^|;\\s*)' + COOKIE + '=([^;]+)'));
  if (!m) return null;
  const [body, sig] = m[1].split('.');
  if (!body || !sig) return null;
  if (!sameBytes(enc.encode(b64u(await hmac(sessKey(env), body))), enc.encode(sig))) return null;
  try {
    const d = JSON.parse(atob(body.replace(/-/g, '+').replace(/_/g, '/')));
    if (!d || !d.r || !(d.e > Date.now())) return null;
    return { role: d.r, exp: d.e };
  } catch (e) { return null; }
}

const json = (data, status = 200, cookie) => {
  const h = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' };
  const hs = new Headers(h);
  [].concat(cookie || []).forEach(c => hs.append('Set-Cookie', c));
  return new Response(JSON.stringify(data), { status, headers: hs });
};
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function handleApi(request, env) {
  // 다른 사이트에서 보낸 요청은 받지 않는다
  const origin = request.headers.get('Origin');
  if (origin) { try { if (new URL(origin).host !== new URL(request.url).host) return json({ ok: false, why: '허용되지 않은 요청입니다.' }, 403); } catch (e) { return json({ ok: false }, 403); } }
  let body = {};
  try { body = await request.json(); } catch (e) { return json({ ok: false, why: '잘못된 요청입니다.' }, 400); }
  const action = String(body.action || '');

  if (action === 'logout') return json({ ok: true }, 200, clearCookie());
  if (!configured(env)) return json({ ok: false, why: '서버 설정이 아직 끝나지 않았습니다. 관리자에게 문의해 주세요. (062-522-1212)' }, 503);
  const sess = await readSession(env, request);

  if (action === 'me') return json({ ok: true, role: sess ? sess.role : null, exp: sess ? sess.exp : null });

  if (action === 'code') {
    const r = await checkCode(env, body.code);
    if (!r.ok) { await sleep(500); return json(r, 200); }
    if (r.common) {
      // 공통 승인코드: 이 브라우저에서 처음 입력한 때부터 PASS_DAYS일
      if (sess && sess.role === 'admin') return json({ ok: true, exp: Date.now() + PASS_DAYS * DAY, code: r.code });
      const t0 = (await readFirstUse(env, request)) || Date.now(), exp = t0 + PASS_DAYS * DAY;
      if (Date.now() > exp) { await sleep(500); return json({ ok: false, why: `이용 기간(${PASS_DAYS}일)이 끝났습니다. 연장은 062-522-1212로 문의해 주세요.` }, 200); }
      return json({ ok: true, exp, code: r.code }, 200, [await sessionCookie(env, 'code', exp), await firstUseCookie(env, t0)]);
    }
    if (sess && sess.role === 'admin') return json({ ok: true, exp: r.exp, code: r.code });
    return json({ ok: true, exp: r.exp, code: r.code }, 200, await sessionCookie(env, 'code', r.exp));
  }

  if (action === 'admin') {
    if (!(await checkAdminPw(env, body.pw))) { await sleep(1000); return json({ ok: false, why: '비밀번호가 맞지 않습니다.' }, 200); }
    const exp = Date.now() + 12 * 3600 * 1000; // 12시간, 브라우저를 닫으면 로그아웃
    return json({ ok: true, role: 'admin', exp }, 200, await sessionCookie(env, 'admin', exp));
  }

  if (action === 'make') {
    if (!sess || sess.role !== 'admin') return json({ ok: false, why: '관리자 로그인이 필요합니다.' }, 403);
    const c = await makeCode(env, PASS_DAYS); // 유효기간은 항상 PASS_DAYS일
    return json({ ok: true, code: c.code, exp: c.exp });
  }

  if (action === 'common') {
    if (!sess || sess.role !== 'admin') return json({ ok: false, why: '관리자 로그인이 필요합니다.' }, 403);
    return json({ ok: true, code: await commonCode(env), days: PASS_DAYS });
  }
  return json({ ok: false, why: '알 수 없는 요청입니다.' }, 400);
}

async function handleApp(request, env) {
  const sess = await readSession(env, request);
  const h = { 'Content-Type': 'application/javascript; charset=utf-8', 'Cache-Control': 'private, no-store', 'X-Content-Type-Options': 'nosniff' };
  if (!sess) return new Response('/* 이용 권한이 없습니다 */', { status: 403, headers: h });
  const res = await env.ASSETS.fetch(new URL('/ai-private/studio.js', request.url));
  if (!res.ok) return new Response('/* 스튜디오 파일을 찾을 수 없습니다 */', { status: 500, headers: h });
  const code = await res.text();
  return new Response(`window.__SMCT_ROLE=${JSON.stringify(sess.role)};\n` + code, { status: 200, headers: h });
}

/* 주소 분기: POST /api/ai (권한 확인) · GET /api/ai-app (스튜디오 본체) */
export async function onRequest({ request, env }) {
  const path = new URL(request.url).pathname.replace(/\/+$/, '');
  if (path === '/api/ai' && request.method === 'POST') return handleApi(request, env);
  if (path === '/api/ai-app' && request.method === 'GET') return handleApp(request, env);
  return new Response('Not Found', { status: 404 });
}
