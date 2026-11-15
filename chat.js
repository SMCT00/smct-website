/* SMCT건설 AI 1:1 상담 채팅창
   - 쉬운 질문은 AI가 답하고, 그 밖의 문의는 상담사(카카오톡 채널·네이버 톡톡·전화·연락처 접수)로 연결한다.
   - 페이지에 <script src="/chat.js" defer></script> 한 줄만 넣으면 오른쪽 아래에 버튼이 생긴다.
   - chat.html 처럼 <body data-smct-chat="page"> 인 페이지에서는 화면 전체가 채팅창이 된다. */
(function () {
  'use strict';
  if (window.__smctChat) return; window.__smctChat = true;

  /* ───────── 설정: 계정이 생기면 주소만 채우면 된다 ───────── */
  var CFG = {
    KAKAO_CHAT_URL: '',   // 카카오톡 채널 1:1 채팅 주소  예) https://pf.kakao.com/_abcde/chat
    NAVER_TALK_URL: '',   // 네이버 톡톡 주소            예) https://talk.naver.com/ct/abcdef
    PHONE: '062-522-1212',
    EMAIL: 'smct00@naver.com',
    FORM: 'https://formspree.io/f/mgodbdnk',
    API: '/api/chat'
  };

  var PAGE = document.body && document.body.getAttribute('data-smct-chat') === 'page';
  var KEY = 'smct_chat_v1', MAXLEN = 500;
  var msgs = [], busy = false, opened = false, root, listEl, inputEl, sendEl, chipsEl, formEl;

  function load() { try { var s = sessionStorage.getItem(KEY); if (s) msgs = JSON.parse(s) || []; } catch (e) { msgs = []; } if (!Array.isArray(msgs)) msgs = []; }
  function save() { try { sessionStorage.setItem(KEY, JSON.stringify(msgs.slice(-30))); } catch (e) { } }
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }

  var CSS = '' +
    '.sc-launch{display:flex;align-items:center;gap:10px;height:44px;padding:0 16px 0 6px;background:#0a0a0a;border:1px solid #B8952A;color:#F0ECE4;font:500 12px/1 "Noto Sans KR",sans-serif;letter-spacing:.5px;box-shadow:0 6px 22px rgba(0,0,0,.45);cursor:pointer;-webkit-tap-highlight-color:transparent}' +
    '.sc-launch:hover{border-color:#E8CC7A;color:#E8CC7A}' +
    '.sc-launch b{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#E8CC7A,#B8952A);color:#0a0a0a}' +
    '.sc-launch b svg{width:17px;height:17px}' +
    '.sc-launch.sc-fixed{position:fixed;right:20px;bottom:20px;z-index:9400}' +
    '.sc-launch .sc-s{display:none}' +
    '@media(max-width:600px){.sc-launch{height:50px;padding:0 12px 0 6px}.sc-launch b{width:36px;height:36px}.sc-launch .sc-l{display:none}.sc-launch .sc-s{display:inline}.sc-launch.sc-fixed{right:16px;bottom:16px}}' +
    '.sc-panel,.sc-panel *{box-sizing:border-box;cursor:auto}' +
    '.sc-panel button,.sc-panel a,.sc-panel label,.sc-panel input[type=checkbox]{cursor:pointer}' +
    '.sc-panel{margin:0;padding:0;text-align:left;letter-spacing:0;position:fixed;right:20px;bottom:20px;z-index:9500;width:380px;max-width:calc(100vw - 24px);height:min(640px,calc(100vh - 40px));height:min(640px,calc(100dvh - 40px));display:none;flex-direction:column;background:#111214;color:#F0ECE4;border:1px solid rgba(184,149,42,.55);box-shadow:0 18px 60px rgba(0,0,0,.6);font:400 14px/1.6 "Noto Sans KR","Apple SD Gothic Neo","Malgun Gothic",sans-serif;font-variant-numeric:lining-nums}' +
    '.sc-panel.sc-open{display:flex}' +
    '.sc-panel.sc-page{position:static;display:flex;width:100%;max-width:720px;height:100vh;height:100dvh;margin:0 auto;border-top:0;border-bottom:0;box-shadow:none}' +
    '@media(max-width:600px){.sc-panel{right:0;bottom:0;width:100%;max-width:100%;height:100vh;height:100dvh;border:0}}' +
    '.sc-head{flex:0 0 auto;display:flex;align-items:center;gap:10px;padding:12px 12px 12px 16px;background:#0a0a0a;border-bottom:1px solid rgba(184,149,42,.35)}' +
    '.sc-head .sc-t{flex:1;min-width:0}' +
    '.sc-head .sc-t strong{display:block;font-size:14px;font-weight:500;color:#F7F4EE;letter-spacing:.3px}' +
    '.sc-head .sc-t span{display:block;font-size:11px;color:#9a968c;margin-top:1px}' +
    '.sc-hbtn{flex:0 0 auto;height:32px;padding:0 10px;background:transparent;border:1px solid rgba(184,149,42,.5);color:#E8CC7A;font:500 12px/1 inherit;font-family:inherit}' +
    '.sc-hbtn:hover{background:rgba(184,149,42,.12)}' +
    '.sc-x{flex:0 0 auto;width:36px;height:36px;background:transparent;border:0;color:#cfcac0;font-size:22px;line-height:1}' +
    '.sc-x:hover{color:#fff}' +
    '.sc-list{flex:1 1 auto;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:16px 14px 8px;display:flex;flex-direction:column;gap:10px}' +
    '.sc-m{max-width:86%;padding:9px 12px;white-space:pre-wrap;word-break:break-word;overflow-wrap:anywhere;font-size:14px;line-height:1.6}' +
    '.sc-m.sc-a{align-self:flex-start;background:#1C1E22;border:1px solid #2A2D34;color:#F0ECE4}' +
    '.sc-m.sc-u{align-self:flex-end;background:#2a2412;border:1px solid rgba(184,149,42,.55);color:#F7F4EE}' +
    '.sc-m.sc-n{align-self:center;max-width:100%;padding:4px 8px;background:transparent;border:0;color:#9a968c;font-size:12px;text-align:center}' +
    '.sc-dots{display:inline-flex;gap:4px;align-items:center;height:20px}' +
    '.sc-dots i{width:6px;height:6px;border-radius:50%;background:#B8952A;opacity:.35;animation:scb 1.1s infinite}' +
    '.sc-dots i:nth-child(2){animation-delay:.18s}.sc-dots i:nth-child(3){animation-delay:.36s}' +
    '@keyframes scb{0%,80%,100%{opacity:.3}40%{opacity:1}}' +
    '@media(prefers-reduced-motion:reduce){.sc-dots i{animation:none;opacity:.7}}' +
    '.sc-acts{align-self:flex-start;display:flex;flex-wrap:wrap;gap:6px;max-width:100%}' +
    '.sc-act{display:inline-flex;align-items:center;min-height:36px;padding:0 12px;background:#B8952A;border:1px solid #B8952A;color:#0a0a0a;font:500 13px/1.2 inherit;font-family:inherit;text-decoration:none}' +
    '.sc-act:hover{background:#D4AF55}' +
    '.sc-act.sc-ghost{background:transparent;color:#E8CC7A;border-color:rgba(184,149,42,.6)}' +
    '.sc-act.sc-ghost:hover{background:rgba(184,149,42,.12)}' +
    '.sc-chips{flex:0 0 auto;display:flex;flex-wrap:wrap;gap:6px;padding:4px 14px 10px}' +
    '.sc-chip{min-height:34px;padding:0 11px;background:transparent;border:1px solid #3a3d44;color:#d8d3c8;font:400 12.5px/1.2 inherit;font-family:inherit}' +
    '.sc-chip:hover{border-color:#B8952A;color:#E8CC7A}' +
    '.sc-foot{flex:0 0 auto;border-top:1px solid #2A2D34;background:#0d0e10;padding:10px 12px calc(10px + env(safe-area-inset-bottom,0px))}' +
    '.sc-row{display:flex;gap:8px;align-items:flex-end}' +
    '.sc-in{flex:1;min-width:0;min-height:42px;max-height:110px;resize:none;padding:10px 11px;background:#17181b;border:1px solid #3a3d44;color:#F7F4EE;font:400 16px/1.4 inherit;font-family:inherit;border-radius:0;outline:0;cursor:text}' +
    '.sc-in:focus{border-color:#B8952A}' +
    '.sc-in::placeholder{color:#7d7a72}' +
    '.sc-send{flex:0 0 auto;height:42px;padding:0 15px;background:#B8952A;border:0;color:#0a0a0a;font:500 14px/1 inherit;font-family:inherit}' +
    '.sc-send:disabled{opacity:.45;cursor:default}' +
    '.sc-note{margin-top:7px;font-size:11px;line-height:1.5;color:#8a867d}' +
    '.sc-form{flex:1 1 auto;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:16px 16px 20px;display:none}' +
    '.sc-form.sc-on{display:block}' +
    '.sc-form h4{margin:0 0 4px;font-size:15px;font-weight:500;color:#F7F4EE}' +
    '.sc-form p{margin:0 0 14px;font-size:12.5px;color:#aaa69c}' +
    '.sc-ways{display:flex;flex-direction:column;gap:8px;margin-bottom:18px}' +
    '.sc-way{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:48px;padding:8px 14px;background:#1C1E22;border:1px solid #3a3d44;color:#F7F4EE;text-decoration:none;font-size:14px}' +
    '.sc-way:hover{border-color:#B8952A}' +
    '.sc-way small{color:#9a968c;font-size:12px;text-align:right}' +
    '.sc-way.sc-kakao{border-color:rgba(254,229,0,.55)}.sc-way.sc-naver{border-color:rgba(3,199,90,.55)}' +
    '.sc-lab{display:block;margin:10px 0 4px;font-size:12px;color:#bdb8ad}' +
    '.sc-f{width:100%;min-height:42px;padding:9px 11px;background:#17181b;border:1px solid #3a3d44;color:#F7F4EE;font:400 16px/1.4 inherit;font-family:inherit;border-radius:0;outline:0;cursor:text}' +
    '.sc-f:focus{border-color:#B8952A}' +
    'textarea.sc-f{min-height:84px;resize:vertical}' +
    '.sc-agree{display:flex;gap:8px;align-items:flex-start;margin:12px 0 4px;font-size:12.5px;color:#cfcac0}' +
    '.sc-agree input{width:18px;height:18px;margin:2px 0 0;accent-color:#B8952A;flex:0 0 auto}' +
    '.sc-priv{margin:0 0 12px 26px;font-size:11.5px;line-height:1.55;color:#8a867d}' +
    '.sc-submit{width:100%;min-height:46px;background:#B8952A;border:0;color:#0a0a0a;font:500 14px/1 inherit;font-family:inherit}' +
    '.sc-submit:disabled{opacity:.5;cursor:default}' +
    '.sc-err{margin:8px 0 0;font-size:12.5px;color:#e6a08f;min-height:18px}' +
    '.sc-back{margin-top:10px;width:100%;min-height:40px;background:transparent;border:1px solid #3a3d44;color:#cfcac0;font:400 13px/1 inherit;font-family:inherit}' +
    'body.sc-lock{overflow:hidden}';

  var ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>';

  function build() {
    var st = el('style'); st.textContent = CSS; document.head.appendChild(st);

    root = el('div', 'sc-panel' + (PAGE ? ' sc-page' : ''));
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'SMCT건설 AI 1:1 상담');

    var head = el('div', 'sc-head');
    var t = el('div', 'sc-t'); t.appendChild(el('strong', null, 'SMCT건설 1:1 상담')); t.appendChild(el('span', null, 'AI가 먼저 답하고, 필요하면 상담사가 이어받습니다'));
    var hb = el('button', 'sc-hbtn', '상담사 연결'); hb.type = 'button'; hb.onclick = function () { showForm(true); };
    head.appendChild(t); head.appendChild(hb);
    if (!PAGE) { var x = el('button', 'sc-x', '×'); x.type = 'button'; x.setAttribute('aria-label', '채팅 닫기'); x.onclick = close; head.appendChild(x); }
    else { var home = el('a', 'sc-hbtn', '홈페이지'); home.href = '/'; home.style.display = 'inline-flex'; home.style.alignItems = 'center'; home.style.textDecoration = 'none'; head.appendChild(home); }
    root.appendChild(head);

    listEl = el('div', 'sc-list'); listEl.setAttribute('aria-live', 'polite'); root.appendChild(listEl);

    chipsEl = el('div', 'sc-chips');
    ['견적은 어떻게 문의하나요?', 'AI 인테리어 이용 방법', '어떤 공사를 하나요?', '회사 위치와 연락처'].forEach(function (q) {
      var c = el('button', 'sc-chip', q); c.type = 'button'; c.onclick = function () { send(q); }; chipsEl.appendChild(c);
    });
    root.appendChild(chipsEl);

    formEl = el('div', 'sc-form'); buildForm(); root.appendChild(formEl);

    var foot = el('div', 'sc-foot'), row = el('div', 'sc-row');
    inputEl = el('textarea', 'sc-in'); inputEl.rows = 1; inputEl.maxLength = MAXLEN; inputEl.placeholder = '궁금한 점을 적어 주세요'; inputEl.setAttribute('aria-label', '질문 입력');
    inputEl.addEventListener('input', grow);
    inputEl.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing && e.keyCode !== 229) { e.preventDefault(); send(); } });
    sendEl = el('button', 'sc-send', '보내기'); sendEl.type = 'button'; sendEl.onclick = function () { send(); };
    row.appendChild(inputEl); row.appendChild(sendEl); foot.appendChild(row);
    foot.appendChild(el('div', 'sc-note', 'AI 답변은 참고용입니다. 견적·일정 등 정확한 내용은 상담사가 안내합니다.'));
    foot.className += ' sc-footbar'; root.appendChild(foot);

    document.body.appendChild(root);

    if (!PAGE) {
      var btn = el('button', 'sc-launch'); btn.type = 'button'; btn.setAttribute('aria-label', 'AI 1:1 상담 열기');
      btn.innerHTML = '<b>' + ICON + '</b><span class="sc-l">AI 1:1 상담</span><span class="sc-s">상담</span>';
      btn.onclick = open;
      var stack = document.querySelector('.floating-contact');
      if (stack) stack.insertBefore(btn, stack.firstChild); else { btn.className += ' sc-fixed'; document.body.appendChild(btn); }
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && opened) close(); });
    }
    render();
    if (PAGE || /[?&#]chat(=1)?\b/.test(location.search + location.hash)) open();
  }

  function buildForm() {
    formEl.appendChild(el('h4', null, '상담사 연결'));
    formEl.appendChild(el('p', null, '편한 방법을 골라 주세요. 담당자가 직접 답해 드립니다.'));
    var ways = el('div', 'sc-ways');
    function way(cls, label, sub, href, blank) { var a = el('a', 'sc-way ' + cls); a.href = href; if (blank) { a.target = '_blank'; a.rel = 'noopener'; } a.appendChild(el('span', null, label)); a.appendChild(el('small', null, sub)); ways.appendChild(a); }
    if (CFG.KAKAO_CHAT_URL) way('sc-kakao', '카카오톡으로 상담', '카카오톡 채팅이 열립니다', CFG.KAKAO_CHAT_URL, true);
    if (CFG.NAVER_TALK_URL) way('sc-naver', '네이버 톡톡으로 상담', '네이버 로그인 후 채팅', CFG.NAVER_TALK_URL, true);
    way('', '전화 상담', CFG.PHONE, 'tel:' + CFG.PHONE.replace(/[^0-9+]/g, ''), false);
    formEl.appendChild(ways);

    formEl.appendChild(el('h4', null, '연락처 남기기'));
    formEl.appendChild(el('p', null, '남겨 주시면 담당자가 확인하고 연락드립니다. 지금까지의 대화 내용도 함께 전달됩니다.'));
    function field(label, node) { var l = el('label', 'sc-lab', label); formEl.appendChild(l); formEl.appendChild(node); return node; }
    var name = field('성함', el('input', 'sc-f')); name.type = 'text'; name.maxLength = 30; name.autocomplete = 'name';
    var tel = field('연락처', el('input', 'sc-f')); tel.type = 'tel'; tel.maxLength = 20; tel.placeholder = '010-0000-0000'; tel.autocomplete = 'tel'; tel.inputMode = 'tel';
    var memo = field('문의 내용', el('textarea', 'sc-f')); memo.maxLength = 1000; memo.placeholder = '공사 종류, 위치, 면적, 원하는 시기 등';
    var ag = el('label', 'sc-agree'), cb = el('input'); cb.type = 'checkbox'; ag.appendChild(cb); ag.appendChild(el('span', null, '개인정보 수집·이용에 동의합니다. (필수)')); formEl.appendChild(ag);
    formEl.appendChild(el('div', 'sc-priv', '수집 항목: 성함, 연락처, 문의·대화 내용 / 목적: 상담과 견적 안내 / 보유: 상담 종료 후 1년. 동의하지 않으실 수 있으나 그 경우 연락처 접수가 되지 않습니다.'));
    var sub = el('button', 'sc-submit', '상담 신청 보내기'); sub.type = 'button'; formEl.appendChild(sub);
    var err = el('div', 'sc-err'); err.setAttribute('role', 'alert'); formEl.appendChild(err);
    var back = el('button', 'sc-back', '← 채팅으로 돌아가기'); back.type = 'button'; back.onclick = function () { showForm(false); }; formEl.appendChild(back);

    sub.onclick = function () {
      err.textContent = '';
      var n = name.value.trim(), p = tel.value.trim(), m = memo.value.trim();
      if (!n) { err.textContent = '성함을 적어 주세요.'; name.focus(); return; }
      if (p.replace(/[^0-9]/g, '').length < 9) { err.textContent = '연락처를 정확히 적어 주세요.'; tel.focus(); return; }
      if (!cb.checked) { err.textContent = '개인정보 수집·이용에 동의해 주세요.'; return; }
      sub.disabled = true; sub.textContent = '보내는 중…';
      var log = msgs.filter(function (x) { return x.role === 'user' || x.role === 'assistant'; }).slice(-20)
        .map(function (x) { return (x.role === 'user' ? '고객: ' : 'AI: ') + x.content; }).join('\n');
      fetch(CFG.FORM, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ 성함: n, 연락처: p, 문의내용: m || '(내용 없음)', 대화내용: log || '(대화 없음)', 접수경로: 'AI 1:1 상담 채팅 — ' + location.pathname, _subject: '[SMCT건설] AI 채팅 상담 신청 — ' + n })
      }).then(function (r) { if (!r.ok) throw new Error('fail'); return r; }).then(function () {
        name.value = ''; tel.value = ''; memo.value = ''; cb.checked = false;
        add('note', '상담 신청이 접수되었습니다. 담당자가 확인하고 연락드리겠습니다.');
        showForm(false);
      }).catch(function () {
        err.textContent = '접수하지 못했습니다. 잠시 뒤 다시 보내시거나 ' + CFG.PHONE + '로 전화해 주세요.';
      }).then(function () { sub.disabled = false; sub.textContent = '상담 신청 보내기'; });
    };
  }

  function showForm(on) {
    if (!opened) open();
    formEl.classList.toggle('sc-on', on);
    listEl.style.display = on ? 'none' : '';
    chipsEl.style.display = on ? 'none' : (hasUser() ? 'none' : '');
    root.querySelector('.sc-footbar').style.display = on ? 'none' : '';
    if (on) formEl.scrollTop = 0; else scroll();
  }
  function hasUser() { return msgs.some(function (m) { return m.role === 'user'; }); }
  function grow() { inputEl.style.height = 'auto'; inputEl.style.height = Math.min(110, inputEl.scrollHeight + 2) + 'px'; }
  function scroll() { listEl.scrollTop = listEl.scrollHeight; }

  function bubble(m) {
    if (m.role === 'note') return el('div', 'sc-m sc-n', m.content);
    var b = el('div', 'sc-m ' + (m.role === 'user' ? 'sc-u' : 'sc-a'), m.content);
    return b;
  }
  function actions() {
    var w = el('div', 'sc-acts');
    var a = el('button', 'sc-act', '상담사 연결'); a.type = 'button'; a.onclick = function () { showForm(true); }; w.appendChild(a);
    var c = el('a', 'sc-act sc-ghost', '전화 ' + CFG.PHONE); c.href = 'tel:' + CFG.PHONE.replace(/[^0-9+]/g, ''); w.appendChild(c);
    return w;
  }
  function render() {
    listEl.textContent = '';
    listEl.appendChild(bubble({ role: 'assistant', content: '안녕하세요. SMCT건설 AI 상담 도우미입니다.\n회사·시공 분야, 견적 문의 방법, AI 인테리어 이용 방법을 안내해 드립니다. 견적이나 일정처럼 확인이 필요한 내용은 상담사에게 연결해 드립니다.' }));
    msgs.forEach(function (m) { listEl.appendChild(bubble(m)); if (m.handoff) listEl.appendChild(actions()); });
    chipsEl.style.display = hasUser() ? 'none' : '';
    scroll();
  }
  function add(role, content, handoff) {
    var m = { role: role, content: content }; if (handoff) m.handoff = 1;
    msgs.push(m); save();
    listEl.appendChild(bubble(m)); if (handoff) listEl.appendChild(actions());
    chipsEl.style.display = hasUser() ? 'none' : '';
    scroll();
  }

  function send(text) {
    if (busy) return;
    var q = (text != null ? text : inputEl.value).trim();
    if (!q) return;
    if (q.length > MAXLEN) q = q.slice(0, MAXLEN);
    if (text == null) { inputEl.value = ''; grow(); }
    add('user', q);
    busy = true; sendEl.disabled = true;
    var wait = el('div', 'sc-m sc-a'); wait.innerHTML = '<span class="sc-dots" aria-label="답변 작성 중"><i></i><i></i><i></i></span>'; listEl.appendChild(wait); scroll();
    var hist = msgs.filter(function (m) { return m.role === 'user' || m.role === 'assistant'; }).slice(-8).map(function (m) { return { role: m.role, content: m.content }; });
    var done = false, timer = setTimeout(function () { finish({ ok: false, reason: 'error' }); }, 30000);
    function finish(d) {
      if (done) return; done = true; clearTimeout(timer);
      if (wait.parentNode) wait.parentNode.removeChild(wait);
      busy = false; sendEl.disabled = false;
      if (d && d.ok && d.reply) add('assistant', d.reply, !!d.handoff);
      else {
        var why = d && d.reason, msg;
        if (why === 'limit') msg = '짧은 시간에 질문이 많아 잠시 쉬어 갑니다. 급하신 내용은 상담사에게 연결해 드리겠습니다.';
        else if (why === 'quota') msg = '오늘 AI 상담 가능 횟수가 모두 찼습니다. 상담사에게 연결해 드리겠습니다.';
        else msg = '지금은 AI 답변을 드리기 어렵습니다. 상담사에게 연결해 드리겠습니다.';
        add('assistant', msg, true);
      }
      if (!matchMedia('(max-width:600px)').matches) inputEl.focus();
    }
    fetch(CFG.API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: hist }) })
      .then(function (r) { return r.json(); }).then(finish).catch(function () { finish({ ok: false, reason: 'error' }); });
  }

  function open() {
    opened = true; root.classList.add('sc-open');
    if (!PAGE && matchMedia('(max-width:600px)').matches) document.body.classList.add('sc-lock');
    scroll();
    if (!matchMedia('(max-width:600px)').matches) setTimeout(function () { try { inputEl.focus(); } catch (e) { } }, 50);
  }
  function close() { opened = false; root.classList.remove('sc-open'); document.body.classList.remove('sc-lock'); showFormSilently(); }
  function showFormSilently() { formEl.classList.remove('sc-on'); listEl.style.display = ''; root.querySelector('.sc-footbar').style.display = ''; chipsEl.style.display = hasUser() ? 'none' : ''; }

  load();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
