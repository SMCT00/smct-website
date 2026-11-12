/* /ai-private/* 는 주소로 직접 열 수 없다 (스튜디오 본체는 /api/ai-app 으로만 제공) */
export const onRequest = () => new Response('Not Found', { status: 404 });
