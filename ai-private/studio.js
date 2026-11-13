/* SMCT AI 인테리어 스튜디오 본체 — 이용코드·관리자 확인 후에만 서버가 내려줍니다 (직접 주소로는 열리지 않음) */
const __smctReady = fn => setTimeout(fn, 0);
/* 실제 판매 제품 목록 — 조사일 2026-11-10 · 순서는 각 목록의 인기 근거(공식 조회수·BEST·다나와 인기순) 기준
   색상(c)은 제조사 공개값이 없는 경우 제품명 기준 근사색입니다. 주문 전 실물 샘플로 확인합니다. */
const PRODUCTS = {"filmP":[{"n":"데니쉬 티크","c":"#a8784e","t":"wood","b":"LX 베니프","code":"PW132","mat":{"type":"veneer"},"fin":"","u":"https://www.lxzin.com/zin/product/13572"},{"n":"브라이튼 월넛","c":"#6e4c35","t":"dark","b":"LX 베니프","code":"PW125","mat":{"type":"veneer"},"fin":"","u":"https://www.lxzin.com/zin/product/13565"},{"n":"빅 그라나이트 베이지","c":"#d9c8ad","t":"beige","b":"LX 베니프","code":"BM013","mat":{"type":"tile","tw":1.2,"th":1.2,"vein":1},"fin":"","u":"https://www.lxzin.com/zin/product/100800"},{"n":"포실화이트","c":"#f2f0eb","t":"white","b":"LX 베니프","code":"RS130","fin":"","u":"https://www.lxzin.com/zin/product/10867"},{"n":"크림","c":"#efe7d6","t":"warm","b":"LX 베니프","code":"RS171","fin":"","u":"https://www.lxzin.com/zin/product/13418"},{"n":"베네토 티크","c":"#a8784e","t":"wood","b":"LX 베니프","code":"PW134","mat":{"type":"veneer"},"fin":"","u":"https://www.lxzin.com/zin/product/13574"},{"n":"캄프뉴우 월넛","c":"#6e4c35","t":"dark","b":"LX 베니프","code":"PW123","mat":{"type":"veneer"},"fin":"","u":"https://www.lxzin.com/zin/product/13563"},{"n":"모던 그레이","c":"#a9a8a5","t":"gray","b":"LX 베니프","code":"RS57","fin":"","u":"https://www.lxzin.com/zin/product/5769"},{"n":"마일드 화이트","c":"#f2f0eb","t":"white","b":"LX 베니프","code":"RS181","fin":"","u":"https://www.lxzin.com/zin/product/100906"},{"n":"세이블 그리스","c":"#a9a8a5","t":"gray","b":"LX 베니프","code":"ML89","mat":{"type":"tile","tw":1.2,"th":1.2,"vein":1},"fin":"","u":"https://www.lxzin.com/zin/product/100839"},{"n":"빅 그라나이트 그레이","c":"#a9a8a5","t":"gray","b":"LX 베니프","code":"BM015","mat":{"type":"tile","tw":1.2,"th":1.2,"vein":1},"fin":"","u":"https://www.lxzin.com/zin/product/100801"},{"n":"리즈 애쉬","c":"#d8cbb3","t":"white","b":"LX 베니프","code":"PW139","mat":{"type":"veneer"},"fin":"","u":"https://www.lxzin.com/zin/product/13579"},{"n":"인텐소 브라운월넛","c":"#5f412f","t":"dark","b":"LX 베니프","code":"NW100","mat":{"type":"veneer"},"fin":"","u":"https://www.lxzin.com/zin/product/9805"},{"n":"브레시아 오크","c":"#c19a6b","t":"wood","b":"LX 베니프","code":"PW130","mat":{"type":"veneer"},"fin":"","u":"https://www.lxzin.com/zin/product/13570"},{"n":"아라베스카토","c":"#d9d5cf","t":"gray","b":"LX 베니프","code":"BM007","mat":{"type":"tile","tw":1.2,"th":1.2,"vein":1},"fin":"","u":"https://www.lxzin.com/zin/product/12608"},{"n":"리알토 오크","c":"#c19a6b","t":"wood","b":"LX 베니프","code":"BW004","mat":{"type":"veneer"},"fin":"","u":"https://www.lxzin.com/zin/product/12636"},{"n":"브러시드 화이트","c":"#d9d5cf","t":"gray","b":"LX 베니프","code":"MLS03","mat":{"type":"tile","tw":1.2,"th":1.2,"vein":1},"fin":"","u":"https://www.lxzin.com/zin/product/100852"},{"n":"카리스 월넛","c":"#6e4c35","t":"dark","b":"LX 베니프","code":"BW003","mat":{"type":"veneer"},"fin":"","u":"https://www.lxzin.com/zin/product/12635"},{"n":"소프트 크림","c":"#efe4cc","t":"warm","b":"LX 베니프","code":"RS179","fin":"","u":"https://www.lxzin.com/zin/product/100905"},{"n":"스트라이프 메탈 블랙","c":"#2b2b2c","t":"black","b":"LX 베니프","code":"RP56","fin":"","u":"https://www.lxzin.com/zin/product/100884"},{"n":"솔리드 · 화이트","c":"#e8e4dc","t":"white","b":"현대L&C 보닥","code":"S115","fin":"무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1816"},{"n":"슈퍼 매트 · 다크 블루","c":"#2e3a54","t":"navy","b":"현대L&C 보닥","code":"SMT11","fin":"극무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1892"},{"n":"오크 · 다크 그레이","c":"#a89f93","t":"gray","b":"현대L&C 보닥","code":"SPW44","mat":{"type":"veneer"},"fin":"극무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1912"},{"n":"오닉스 · 라이트 베이지","c":"#e6dac6","t":"beige","b":"현대L&C 보닥","code":"PM003","mat":{"type":"tile","tw":1.2,"th":1.2,"vein":1},"fin":"극무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1734"},{"n":"리얼 메탈 · 블랙","c":"#2b2b2c","t":"black","b":"현대L&C 보닥","code":"RM009","fin":"반광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1808"},{"n":"리얼 패브릭 · 라이트 그레이","c":"#d2d1ce","t":"gray","b":"현대L&C 보닥","code":"RF001","fin":"무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1792"},{"n":"오크 · 다크 브라운","c":"#7d5a40","t":"dark","b":"현대L&C 보닥","code":"SPW69","mat":{"type":"veneer"},"fin":"극무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1929"},{"n":"솔리드 · 아이보리","c":"#efe7d6","t":"warm","b":"현대L&C 보닥","code":"S126","fin":"무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1817"},{"n":"트라버틴 · 베이지","c":"#d9c8ad","t":"beige","b":"현대L&C 보닥","code":"NS806","mat":{"type":"tile","tw":1.2,"th":1.2,"vein":1},"fin":"무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1724"},{"n":"슈퍼 매트 · 다크 그린","c":"#3f5446","t":"deepgreen","b":"현대L&C 보닥","code":"SMT10","fin":"극무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1891"},{"n":"페인티드 우드 · 미디엄 그레이","c":"#a9a8a5","t":"gray","b":"현대L&C 보닥","code":"PTW06","fin":"무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1775"},{"n":"오크 · 아이보리","c":"#e2d5bc","t":"wood","b":"현대L&C 보닥","code":"W012","mat":{"type":"veneer"},"fin":"무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1955"},{"n":"솔리드 · 다크 그린","c":"#3f5446","t":"deepgreen","b":"현대L&C 보닥","code":"S201","fin":"무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1852"},{"n":"피에트라 · 다크 그레이","c":"#a9a8a5","t":"gray","b":"현대L&C 보닥","code":"PM007","mat":{"type":"tile","tw":1.2,"th":1.2,"vein":1},"fin":"극무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1738"},{"n":"페인티드 우드 · 다크 브라운","c":"#4d3a2e","t":"dark","b":"현대L&C 보닥","code":"PTW12","fin":"무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1781"},{"n":"프리미엄 페인티드 우드 · 라이트 그레이","c":"#d2d1ce","t":"gray","b":"현대L&C 보닥","code":"PNT02","fin":"극무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1761"},{"n":"솔리드 · 핑크","c":"#e8cfcb","t":"pink","b":"현대L&C 보닥","code":"S232","fin":"무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1871"},{"n":"이체 · 브라운","c":"#b88f64","t":"wood","b":"현대L&C 보닥","code":"SPW96","mat":{"type":"veneer"},"fin":"극무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1940"},{"n":"솔리드 · 옐로우","c":"#efdca0","t":"butter","b":"현대L&C 보닥","code":"S146","fin":"무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1824"},{"n":"솔리드 · 라이트 그레이","c":"#d2d1ce","t":"gray","b":"현대L&C 보닥","code":"S158","fin":"무광","u":"https://www.ebodaq.com/Product/Product/Detail?pattern=&gloss=&color=&listType=0&searchText=&sortOrder=2&currentPage=1&pageSize=10000&idProduct=1831"}],"filmPrice":{"door":170000,"kit":260000,"furn":95000,"trim":12000},"ctrAcrylic":[{"n":"오로라 블랑","c":"#f2f0eb","t":"white","b":"LX 하이막스","code":"M617","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/12321"},{"n":"오로라 웜블랑","c":"#f2f0eb","t":"white","b":"LX 하이막스","code":"M622","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/101424"},{"n":"오로라 프로스트","c":"#ebe8e2","t":"white","b":"LX 하이막스","code":"M702","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/13090"},{"n":"오로라 리넨크림","c":"#efe4cc","t":"warm","b":"LX 하이막스","code":"M623","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/100161"},{"n":"오로라 모던그레이","c":"#a9a8a5","t":"gray","b":"LX 하이막스","code":"M626","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/100169"},{"n":"오로라 비스크","c":"#e6dac6","t":"beige","b":"LX 하이막스","code":"M612","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/12316"},{"n":"오로라 그레이","c":"#a9a8a5","t":"gray","b":"LX 하이막스","code":"M608","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/12126"},{"n":"오로라 에크루","c":"#efe7d6","t":"warm","b":"LX 하이막스","code":"M701","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/13089"},{"n":"캔디 화이트","c":"#f2f0eb","t":"white","b":"LX 하이막스","code":"G235","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":1,"rough":0.3},"u":"https://www.lxzin.com/zin/product/101100"},{"n":"그라빌라 크림","c":"#efe4cc","t":"warm","b":"LX 하이막스","code":"GM02","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":1,"rough":0.3},"u":"https://www.lxzin.com/zin/product/100603"},{"n":"크리스탈 베이지","c":"#d9c8ad","t":"beige","b":"LX 하이막스","code":"G101","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":1,"rough":0.3},"u":"https://www.lxzin.com/zin/product/1675"},{"n":"스노우 콘크리트","c":"#f2f0eb","t":"white","b":"LX 하이막스","code":"G556","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/12247"},{"n":"오로라 비앙코","c":"#f2f0eb","t":"white","b":"LX 하이막스","code":"M606","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/12124"},{"n":"그라빌라 스노우","c":"#f2f0eb","t":"white","b":"LX 하이막스","code":"GM01","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":1,"rough":0.3},"u":"https://www.lxzin.com/zin/product/100602"},{"n":"소프트 화이트","c":"#f2f0eb","t":"white","b":"LX 하이막스","code":"G185","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":1,"rough":0.3},"u":"https://www.lxzin.com/zin/product/101427"},{"n":"칼라카타 글로리","c":"#b8b0a5","t":"gray","b":"현대 하넥스","code":"CS-501","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=01320B6C"},{"n":"코튼 블랑","c":"#f2f0eb","t":"white","b":"현대 하넥스","code":"T-522","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":1,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=01320B6C"},{"n":"화이트","c":"#ebe8e2","t":"white","b":"현대 하넥스","code":"S-002","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":0,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=01320B6C"},{"n":"코튼 콘크리트","c":"#ebe8e2","t":"white","b":"현대 하넥스","code":"CT-004","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":1,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=01320B6C"}],"ctrQuartz":[{"n":"레이스 스완","c":"#ebe8e2","t":"white","b":"LX 비아테라","code":"LU101","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/13099"},{"n":"로열 마르퀴나","c":"#2b2b2c","t":"black","b":"LX 비아테라","code":"RO523","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/12312"},{"n":"스털링 실버","c":"#d2d1ce","t":"gray","b":"LX 비아테라","code":"LU103","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/13101"},{"n":"스완 레이크","c":"#f2f0eb","t":"white","b":"LX 비아테라","code":"FL502","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/11152"},{"n":"화이트 마카우바스","c":"#ebe8e2","t":"white","b":"현대 칸스톤","code":"CC604","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=47453481"},{"n":"스타투아리오 골드","c":"#ebe8e2","t":"white","b":"현대 칸스톤","code":"CC603","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=47453481"},{"n":"에덴 그레이","c":"#a9a8a5","t":"gray","b":"현대 칸스톤","code":"K4512","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=47453481"},{"n":"루나 화이트","c":"#ebe8e2","t":"white","b":"현대 칸스톤","code":"WI763","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=47453481"},{"n":"윈터 워킹","c":"#ebe8e2","t":"white","b":"현대 칸스톤","code":"RU657","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":0,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=47453481"}],"ctrCeramic":[{"n":"트레버티노 세토소","c":"#d9c8ad","t":"beige","b":"LX 포세린","code":"ST105","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/102333"},{"n":"아이보리 콘크리트","c":"#efe7d6","t":"warm","b":"LX 포세린","code":"CC101","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/102332"},{"n":"칼라카타 비앙코","c":"#f2f0eb","t":"white","b":"LX 포세린","code":"WM101","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.lxzin.com/zin/product/102303"},{"n":"칼라카타 프레스티지오","c":"#ebe8e2","t":"white","b":"현대 세라톤","code":"S-01","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=8AFF954F"},{"n":"알래스카 화이트","c":"#ebe8e2","t":"white","b":"현대 세라톤","code":"A-15","mat":{"type":"tile","tw":3,"th":3,"vein":0,"terrazzo":0,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=8AFF954F"},{"n":"로마 베이지 트라버틴","c":"#d9c8ad","t":"beige","b":"현대 세라톤","code":"A-05","mat":{"type":"tile","tw":3,"th":3,"vein":1,"terrazzo":0,"rough":0.3},"u":"https://www.hyundailnc.com/product/contents?mng_cd=8AFF954F"}],"ctrPrice":{"acrylic":60000,"quartz":250000,"ceramic":420000},"bathCab":[{"b":"닥터바스","n":"수납 슬라이드 욕실장 블랙","code":"","p":170000,"led":false,"size":"W1000×H800×D170","type":"슬라이딩 거울장(상부장+거울, 미닫이)","u":"https://prod.danawa.com/info/?pcode=31100246"},{"b":"모아시스템즈","n":"모던 알루미늄 욕실장 A타입","code":"","p":210000,"led":false,"size":"W1000×H570×D150","type":"슬라이딩 거울장(상부장+거울)","u":"https://prod.danawa.com/info/?pcode=101134898"},{"b":"모아시스템즈","n":"밀러 700 PS 욕실장","code":"","p":130000,"led":false,"size":"W700 (상품명 기준, H·D 미기재)","type":"거울장(상부장)","u":"https://prod.danawa.com/info/?pcode=101127179"},{"b":"미노아","n":"블랙밀러 욕실수납장 500/600x800","code":"","p":100000,"led":false,"size":"W500 또는 W600 × H800 × D150","type":"여닫이 거울장(벽부착)","u":"https://prod.danawa.com/info/?pcode=61835603"},{"b":"미노아","n":"첼로 화이트 오픈장 500x800","code":"","p":120000,"led":false,"size":"W500×H800×D150","type":"여닫이 상부장(오픈선반 결합)","u":"https://prod.danawa.com/info/?pcode=8418525"},{"b":"욕실플러스","n":"누드장 500","code":"","p":110000,"led":false,"size":"W500×H800 (D 미기재)","type":"여닫이 거울장","u":"https://prod.danawa.com/info/?pcode=101134214"},{"b":"파랑","n":"전면거울 누드장","code":"","p":120000,"led":false,"size":"W600×H800×D170","type":"여닫이 전면거울장","u":"https://prod.danawa.com/info/?pcode=15869423"},{"b":"모아시스템즈","n":"모던 욕실장 800","code":"","p":100000,"led":false,"size":"W500×H800×D180","type":"여닫이 상부장","u":"https://prod.danawa.com/info/?pcode=101135174"},{"b":"두진바스","n":"DW-H301","code":"","p":140000,"led":false,"size":"W600×H300×D170","type":"플랩장(상부)","u":"https://prod.danawa.com/info/?pcode=65212388"},{"b":"파랑","n":"2도어 전면거울 슬라이드장 1200x800","code":"","p":190000,"led":false,"size":"W1200×H800×D170","type":"슬라이딩 거울장(2도어 미닫이)","u":"https://prod.danawa.com/info/?pcode=16960691"},{"b":"미노아","n":"첼로 선반경","code":"","p":110000,"led":false,"size":"미기재","type":"선반 거울(선반경)","u":"https://prod.danawa.com/info/?pcode=101124320"},{"b":"닥터바스","n":"수납 슬라이드 욕실장(1500)","code":"","p":250000,"led":false,"size":"W1500×H600×D170","type":"슬라이딩 거울장(상부장+거울, 미닫이)","u":"https://prod.danawa.com/info/?pcode=101133434"},{"b":"동해산업","n":"엑센트 욕실장 중형 D630","code":"","p":80000,"led":false,"size":"W485×H625×D175","type":"여닫이 상부장","u":"https://prod.danawa.com/info/?pcode=8422167"},{"b":"파랑","n":"플랩830 전면 거울장 블랙","code":"","p":120000,"led":false,"size":"W830×H410×D170","type":"플랩장(전면거울)","u":"https://prod.danawa.com/info/?pcode=101134691"},{"b":"로얄앤컴퍼니","n":"93182W","code":"","p":260000,"led":false,"size":"미기재","type":"상부장","u":"https://prod.danawa.com/info/?pcode=104328743"},{"b":"카비원","n":"CB7000","code":"","p":500000,"led":false,"size":"미기재","type":"하부장","u":"https://prod.danawa.com/info/?pcode=42767339"}],"bathTile":[{"n":"프리미엄 포세린 DL88P402 600×1200","c":"#a9a8a5","t":"gray","b":"대림바스","code":"DL88P402","tw":0.6,"th":1.2,"vein":1,"terrazzo":0,"use":"both","u":"https://www.daelimbath.com/product/product_view?idx=1188"},{"n":"프리미엄 포세린 DL88P401 600×1200","c":"#b8b0a5","t":"gray","b":"대림바스","code":"DL88P401","tw":0.6,"th":1.2,"vein":1,"terrazzo":0,"use":"both","u":"https://www.daelimbath.com/product/product_view?idx=1187"},{"n":"프리미엄 포세린 DL88P403 600×1200","c":"#e6dac6","t":"beige","b":"대림바스","code":"DL88P403","tw":0.6,"th":1.2,"vein":0,"terrazzo":0,"use":"both","u":"https://www.daelimbath.com/product/product_view?idx=1189"},{"n":"프리미엄 포세린 DL88P404 600×1200","c":"#efe7d6","t":"warm","b":"대림바스","code":"DL88P404","tw":0.6,"th":1.2,"vein":1,"terrazzo":0,"use":"both","u":"https://www.daelimbath.com/product/product_view?idx=1190"},{"n":"프리미엄 포세린 DL88P405 600×1200","c":"#2b2b2c","t":"black","b":"대림바스","code":"DL88P405","tw":0.6,"th":1.2,"vein":1,"terrazzo":0,"use":"both","u":"https://www.daelimbath.com/product/product_view?idx=1191"},{"n":"프리미엄 포세린 DL88P400 600×1200","c":"#a9a8a5","t":"gray","b":"대림바스","code":"DL88P400","tw":0.6,"th":1.2,"vein":1,"terrazzo":0,"use":"wall","u":"https://www.daelimbath.com/product/product_view?idx=1186"},{"n":"아크인 포쉐린 타일 OKEAH IVORY 무광 600x1200 600×1200","c":"#efe7d6","t":"warm","b":"아크인","code":"OKEAH IVORY","tw":0.6,"th":1.2,"vein":0,"terrazzo":0,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=3194"},{"n":"아크인 포쉐린 타일 ALBA SILVER 무광 600x1200 600×1200","c":"#d2d1ce","t":"gray","b":"아크인","code":"ALBA SILVER","tw":0.6,"th":1.2,"vein":0,"terrazzo":0,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=3195"},{"n":"까사로마 포쉐린 타일 넵튠 WH 무광 600x1200 600×1200","c":"#a9a8a5","t":"gray","b":"까사로마","code":"넵튠 WH","tw":0.6,"th":1.2,"vein":0,"terrazzo":0,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=3181"},{"n":"국내유통 포쉐린 타일 SN 시리즈 화이트 무광 600x1200 600×1200","c":"#d9c8ad","t":"beige","b":"국내유통","code":"SONA WHITE (SN 시리즈)","tw":0.6,"th":1.2,"vein":0,"terrazzo":0,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=3199"},{"n":"국내유통 포쉐린 타일 ZORO 베이지 무광 600x1200 600×1200","c":"#d9c8ad","t":"beige","b":"국내유통","code":"ZORO BEIGE","tw":0.6,"th":1.2,"vein":0,"terrazzo":0,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=3185"},{"n":"까사로마 포쉐린 타일 루나 IV 무광 600x600 600×600","c":"#efe7d6","t":"warm","b":"까사로마","code":"루나 IV","tw":0.6,"th":0.6,"vein":0,"terrazzo":0,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=3206"},{"n":"까사로마 포쉐린 타일 넵튠 GR 무광 600x600 600×600","c":"#a9a8a5","t":"gray","b":"까사로마","code":"넵튠 GR","tw":0.6,"th":0.6,"vein":0,"terrazzo":0,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=3207"},{"n":"국내유통 포쉐린 타일 MOON 03 베이지 무광 600x600 600×600","c":"#d9c8ad","t":"beige","b":"국내유통","code":"MOON 03","tw":0.6,"th":0.6,"vein":0,"terrazzo":0,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=3170"},{"n":"국내유통 포쉐린 타일 LAKE 03 라이트 그레이 무광 600x600 600×600","c":"#d2d1ce","t":"gray","b":"국내유통","code":"LAKE 03","tw":0.6,"th":0.6,"vein":0,"terrazzo":0,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=3171"},{"n":"모던 테라조 타일 MOT6007 600×600","c":"#ece9e3","t":"terrazzo","b":"오드바스","code":"MOT6007","tw":0.6,"th":0.6,"vein":0,"terrazzo":1,"use":"both","u":"https://prod.danawa.com/info/?pcode=90111173"},{"n":"화신 포세린 타일 HS테라조 그레이 무광 600X600 600×600","c":"#efe7d6","t":"terrazzo","b":"화신","code":"HS테라조 그레이","tw":0.6,"th":0.6,"vein":0,"terrazzo":1,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=2684"},{"n":"화신 포세린 타일 HS테라조 본 무광 600X600 600×600","c":"#efe7d6","t":"terrazzo","b":"화신","code":"HS테라조 본","tw":0.6,"th":0.6,"vein":0,"terrazzo":1,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=2734"},{"n":"국내유통 포쉐린 타일 FO 시리즈 01 라이트 그레이 테라조 무광 600x600 600×600","c":"#d2d1ce","t":"terrazzo","b":"국내유통","code":"FOND 01 (FO 시리즈 01)","tw":0.6,"th":0.6,"vein":0,"terrazzo":1,"use":"both","u":"https://www.thetile.co.kr/product/detail.html?product_no=2860"},{"n":"벽타일 OZ700 300×600","c":"#ece9e3","t":"white","b":"대림바스","code":"OZ700","tw":0.3,"th":0.6,"vein":0,"terrazzo":0,"use":"wall","u":"https://www.daelimbath.com/product/product_view?idx=1143"},{"n":"벽타일 OZ787 300×600","c":"#ece9e3","t":"white","b":"대림바스","code":"OZ787","tw":0.3,"th":0.6,"vein":0,"terrazzo":0,"use":"wall","u":"https://www.daelimbath.com/product/product_view?idx=1146"},{"n":"벽타일 OZ882 300×600","c":"#a9a8a5","t":"gray","b":"대림바스","code":"OZ882","tw":0.3,"th":0.6,"vein":0,"terrazzo":0,"use":"wall","u":"https://www.daelimbath.com/product/product_view?idx=1155"},{"n":"바닥타일 IK504 300×300","c":"#d2d1ce","t":"gray","b":"대림바스","code":"IK504","tw":0.3,"th":0.3,"vein":0,"terrazzo":0,"use":"floor","u":"https://www.daelimbath.com/product/product_view?idx=1166"},{"n":"바닥타일 IK074 300×300","c":"#efe7d6","t":"warm","b":"대림바스","code":"IK074","tw":0.3,"th":0.3,"vein":1,"terrazzo":0,"use":"floor","u":"https://www.daelimbath.com/product/product_view?idx=1203"}],"toiletM":[{"b":"대림바스","n":"BC-401","full":"대림바스 바트라 BC-401 양변기","p":0,"fin":"화이트","u":"https://www.daelimbath.com/product/product_view?idx=848"},{"b":"대림바스","n":"CC-282","full":"대림바스 CC-282 원피스 양변기","p":100000,"fin":"화이트","u":"https://www.daelimbath.com/product/product_view?idx=678"},{"b":"아메리칸스탠다드","n":"C338000B","full":"아메리칸스탠다드 스탠리(신형) 직수형 양변기","p":180000,"fin":"화이트","u":"https://www.americanstandard.co.kr/main/product.do?proc_type=view&v_product=337&v_cate1=1&v_cate2=12"},{"b":"대림바스","n":"CC-214","full":"대림바스 CC-214 원피스 양변기","p":210000,"fin":"화이트","u":"https://www.daelimbath.com/product/product_view?idx=50"},{"b":"대림바스","n":"CC-766","full":"대림바스 CC-766 투피스 양변기","p":0,"fin":"화이트","u":"https://www.daelimbath.com/product/product_view?idx=71"},{"b":"대림바스","n":"BC-201 / CC-201","full":"대림바스 바트라 BC-201 양변기","p":0,"fin":"화이트","u":"https://www.daelimbath.com/product/product_view?idx=55"},{"b":"대림바스","n":"CC-730","full":"대림바스 CC-730 투피스 양변기","p":140000,"fin":"화이트","u":"https://www.daelimbath.com/product/product_view?idx=65"},{"b":"아메리칸스탠다드","n":"C209600C","full":"아메리칸스탠다드 웨이브 S 원피스 양변기","p":170000,"fin":"화이트","u":"https://www.americanstandard.co.kr/main/product.do?proc_type=view&v_product=4&v_cate1=1&v_cate2=10"}],"basinM":[{"b":"아메리칸스탠다드","n":"CCASF551","full":"아메리칸스탠다드 컨셉 큐브 1홀 세면기","p":50000,"fin":"화이트","u":"https://www.americanstandard.co.kr/main/product.do?proc_type=view&v_product=32&v_cate1=3&v_cate2=14"},{"b":"대림바스","n":"CL-332","full":"대림바스 CL-332 세면기","p":0,"fin":"화이트","u":"https://www.daelimbath.com/product/product_view?idx=103"},{"b":"아메리칸스탠다드","n":"CCASF515","full":"아메리칸스탠다드 플랫 라운드 반다리 일체형 세면기","p":80000,"fin":"화이트","u":"https://www.americanstandard.co.kr/main/product.do?proc_type=view&v_product=44&v_cate1=3&v_cate2=16"},{"b":"아메리칸스탠다드","n":"CCASF516","full":"아메리칸스탠다드 플랫 반다리 일체형 세면기","p":90000,"fin":"화이트","u":"https://www.americanstandard.co.kr/main/product.do?proc_type=view&v_product=43&v_cate1=3&v_cate2=16"},{"b":"대림바스","n":"CL-359","full":"대림바스 CL-359 세면기","p":0,"fin":"화이트","u":"https://www.daelimbath.com/product/product_view?idx=127"},{"b":"아메리칸스탠다드","n":"CCASF513","full":"아메리칸스탠다드 씬 엣지 언더카운터 세면기","p":30000,"fin":"화이트","u":"https://www.americanstandard.co.kr/main/product.do?proc_type=view&v_product=534&v_cate1=3&v_cate2=19"},{"b":"대림바스","n":"CL-384","full":"대림바스 아르노 라운드 세면기 CL-384","p":40000,"fin":"화이트","u":"https://www.daelimbath.com/product/product_view?idx=630"},{"b":"아메리칸스탠다드","n":"CCASF412","full":"아메리칸스탠다드 아카시아 슈파슬릭 탑볼 세면기","p":100000,"fin":"화이트","u":"https://www.americanstandard.co.kr/main/product.do?proc_type=view&v_product=359&v_cate1=3&v_cate2=17"}],"faucetM":[{"b":"대림바스","n":"DL-YL6A10","full":"대림바스 1홀 세면 수전 DL-YL6A10","p":0,"fin":"크롬","u":"https://prod.danawa.com/info/?pcode=13478810"},{"b":"대림바스","n":"DL-L3010","full":"대림바스 디바 1홀 세면 수전 DL-L3010","p":10000,"fin":"크롬","u":"https://www.daelimbath.com/product/product_view?idx=231"},{"b":"대림바스","n":"DL-L3210","full":"대림바스 댄디 1홀 세면 수전 DL-L3210","p":10000,"fin":"크롬","u":"https://www.daelimbath.com/product/product_view?idx=241"},{"b":"대림바스","n":"BFL-611","full":"대림바스 바트라600 4\" 세면 수전 BFL-611","p":0,"fin":"크롬","u":"https://www.daelimbath.com/product/product_view?idx=280"},{"b":"대림바스","n":"DL-L7310","full":"대림바스 포르테 1홀 세면 수전 DL-L7310","p":60000,"fin":"크롬","u":"https://www.daelimbath.com/product/product_view?idx=187"},{"b":"아메리칸스탠다드","n":"FA1611-0GAK111AA","full":"아메리칸스탠다드 큐브 P 세면수전","p":10000,"fin":"크롬","u":"https://www.americanstandard.co.kr/main/product.do?proc_type=view&v_product=162&v_cate1=4&v_cate2=20"},{"b":"아메리칸스탠다드","n":"FA1614","full":"아메리칸스탠다드 리비어 1H 세면수전","p":20000,"fin":"크롬 / 그라파이트(건메탈 계열) / 사틴 무광","u":"https://www.americanstandard.co.kr/main/product.do?proc_type=view&v_product=379&v_cate1=4&v_cate2=20"},{"b":"아메리칸스탠다드","n":"FA1612","full":"아메리칸스탠다드 호라이즌 1H 세면수전","p":30000,"fin":"크롬 / 그라파이트 / 사틴 헤어라인","u":"https://www.americanstandard.co.kr/main/product.do?proc_type=view&v_product=392&v_cate1=4&v_cate2=20"}],"kangP":[{"n":"진 오리진 퓨어 크림","c":"#ddc9a6","t":"light","b":"동화자연마루","code":"JP011","line":"진 오리진","u":"https://www.greendongwha.com/product/detail/2079"},{"n":"진 테라 바닐라","c":"#ddc9a6","t":"light","b":"동화자연마루","code":"JE5001","line":"진 테라","u":"https://www.greendongwha.com/product/detail/2100"},{"n":"강 텍스쳐 프렌치 오크","c":"#c19a6b","t":"natural","b":"동화자연마루","code":"KT707","line":"강 텍스쳐","u":"https://www.greendongwha.com/product/detail/2539"},{"n":"스웨디쉬 화이트","c":"#e4dccd","t":"white","b":"구정마루","line":"구정강","u":"https://www.kujungmaru.com/product/detail?id=37"},{"n":"오크","c":"#c49b6c","t":"natural","b":"구정마루","line":"구정강"},{"n":"그랜드 스테디 165","c":"#c19a6b","t":"natural","b":"구정마루","line":"그랜드 텍스쳐 165","u":"https://www.kujungmaru.com/product/detail?id=122"},{"n":"모던 오크","c":"#cfb38c","t":"natural","b":"구정마루","line":"모던강 115"},{"n":"진 그란데 이모션 블랑","c":"#f2f0eb","t":"white","b":"동화자연마루","code":"JG2012","line":"진 그란데","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":1,"rough":0.35},"u":"https://www.greendongwha.com/product/detail/2085"},{"n":"진 그란데 사하라 라이트","c":"#d9c8ad","t":"beige","b":"동화자연마루","code":"JG2006","line":"진 그란데","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.greendongwha.com/product/detail/2083"},{"n":"진 그란데 솔트 베이지","c":"#d9c8ad","t":"beige","b":"동화자연마루","code":"JG2009","line":"진 그란데","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.greendongwha.com/product/detail/2084"},{"n":"진 그란데 레이크 그레이","c":"#a9a8a5","t":"gray","b":"동화자연마루","code":"JG2010","line":"진 그란데","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.greendongwha.com/product/detail/2080"},{"n":"진 그란데 코지 그레이","c":"#a9a8a5","t":"gray","b":"동화자연마루","code":"JG2014","line":"진 그란데","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.greendongwha.com/product/detail/2086"},{"n":"진 그란데 콰이엇 웨이브","c":"#e6e2dc","t":"white","b":"동화자연마루","code":"JG2011","line":"진 그란데","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":1,"rough":0.35},"u":"https://www.greendongwha.com/product/detail/2088"},{"n":"진 그란데 코지 쉐도우","c":"#a9a8a5","t":"gray","b":"동화자연마루","code":"JG2015","line":"진 그란데","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.greendongwha.com/product/detail/2087"},{"n":"진 그란데 스퀘어 이모션 블랑","c":"#f2f0eb","t":"white","b":"동화자연마루","code":"JS9004","line":"진 그란데 스퀘어","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":1,"rough":0.35},"u":"https://www.greendongwha.com/product/detail/2602"},{"n":"진 그란데 스퀘어 사하라 라이트","c":"#d9c8ad","t":"beige","b":"동화자연마루","code":"JS9005","line":"진 그란데 스퀘어","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.greendongwha.com/product/detail/2603"},{"n":"진 오리진 퓨어 아이보리","c":"#e2d5bc","t":"light","b":"동화자연마루","code":"JP002","line":"진 오리진","u":"https://www.greendongwha.com/product/detail/2076"},{"n":"진 오리진 퓨어 베이지","c":"#cfb38c","t":"natural","b":"동화자연마루","code":"JP005","line":"진 오리진","u":"https://www.greendongwha.com/product/detail/2071"},{"n":"진 오리진 퓨어 샌디","c":"#d6c09c","t":"light","b":"동화자연마루","code":"JP008","line":"진 오리진","u":"https://www.greendongwha.com/product/detail/2073"},{"n":"진 오리진 퓨어 그레이","c":"#a9a197","t":"gray","b":"동화자연마루","code":"JP004","line":"진 오리진","u":"https://www.greendongwha.com/product/detail/2070"}],"woodP":[{"n":"오크 브러쉬 내츄럴","c":"#c49b6c","t":"natural","b":"구정마루","line":"노블레스 디 앤티크","u":"https://www.kujungmaru.com/product/detail?id=263"},{"n":"오크 브러쉬 라이트","c":"#c19a6b","t":"natural","b":"구정마루","line":"노블레스 디 앤티크","u":"https://www.kujungmaru.com/product/detail?id=264"},{"n":"화이트 오크","c":"#d8c6a8","t":"light","b":"구정마루","line":"노블레스 디 앤티크"},{"n":"루체 내추럴","c":"#c19a6b","t":"natural","b":"동화자연마루","line":"바움 루체","u":"https://www.greendongwha.com/product/detail/2935"},{"n":"테린 내추럴","c":"#c19a6b","t":"natural","b":"동화자연마루","line":"바움 테린","u":"https://www.greendongwha.com/product/detail/2930"},{"n":"테린 크레마","c":"#ddc9a6","t":"light","b":"동화자연마루","line":"바움 테린","u":"https://www.greendongwha.com/product/detail/2931"},{"n":"에테 클래식","c":"#c19a6b","t":"natural","b":"동화자연마루","line":"바움 에테","u":"https://www.greendongwha.com/product/detail/2936"}],"lamP":[{"n":"클릭 워시오크 스트립","c":"#cfc2ad","t":"light","b":"동화자연마루","code":"CL301","line":"클릭","u":"https://www.greendongwha.com/product/detail/2185"},{"n":"클릭 내추럴 오크","c":"#c49b6c","t":"natural","b":"동화자연마루","code":"CL305","line":"클릭","u":"https://www.greendongwha.com/product/detail/2182"},{"n":"클릭 스위트 오크","c":"#c19a6b","t":"natural","b":"동화자연마루","code":"CL306","line":"클릭","u":"https://www.greendongwha.com/product/detail/2183"},{"n":"클릭 그레이 쏘컷","c":"#a9a197","t":"gray","b":"동화자연마루","code":"CL303","line":"클릭","u":"https://www.greendongwha.com/product/detail/2181"},{"n":"클릭S 오크1","c":"#c19a6b","t":"natural","b":"동화자연마루","code":"CS103","line":"클릭S","u":"https://www.greendongwha.com/product/detail/2564"},{"n":"클릭S 애쉬1","c":"#d8cbb3","t":"white","b":"동화자연마루","code":"CS104","line":"클릭S","u":"https://www.greendongwha.com/product/detail/2565"},{"n":"아이온 스노우","c":"#e4dccd","t":"white","b":"동화자연마루","code":"EY201","line":"아이온","u":"https://www.greendongwha.com/product/detail/2198"},{"n":"아이온 샌드","c":"#d6c09c","t":"light","b":"동화자연마루","code":"EY203","line":"아이온","u":"https://www.greendongwha.com/product/detail/2197"},{"n":"크로젠 오크1","c":"#c19a6b","t":"natural","b":"동화자연마루","code":"CO402","line":"크로젠","u":"https://www.greendongwha.com/product/detail/2188"},{"n":"스톤 웨이브","c":"#e6e2dc","t":"white","b":"동화자연마루","code":"ST501","line":"스톤","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":1,"rough":0.35},"u":"https://www.greendongwha.com/product/detail/2590"}],"vinylP":[{"n":"베이지 포세린","c":"#d9c8ad","t":"beige","b":"LX Z:IN","code":"ZJ43841-22","line":"시트 프리미엄 2.2","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.lxzin.com/zin/product/13080"},{"n":"리버그레이","c":"#a9a197","t":"gray","b":"KCC글라스","code":"MN22-5091","line":"숲 옥 2.2T","u":"https://zzro.kr/product-flooring-kcc-22t"},{"n":"화이트 오크","c":"#d8c6a8","t":"light","b":"LX Z:IN","code":"ZJ32981-11","line":"시트 프리미엄 2.2","u":"https://www.lxzin.com/zin/product/10474"},{"n":"모던 오크","c":"#c19a6b","t":"natural","b":"LX Z:IN","code":"ZJ33871-11","line":"시트 프리미엄 2.2","u":"https://www.lxzin.com/zin/product/13083"},{"n":"베이지 오크","c":"#cfb38c","t":"natural","b":"LX Z:IN","code":"ZJ33872-11","line":"시트 프리미엄 2.2","u":"https://www.lxzin.com/zin/product/13084"},{"n":"뉴트럴애쉬","c":"#d8cbb3","t":"white","b":"KCC글라스","code":"MN22-4151","line":"숲 옥 2.2T","u":"https://zzro.kr/product-flooring-kcc-22t"},{"n":"마일드오크","c":"#c19a6b","t":"natural","b":"KCC글라스","code":"MN22-4162","line":"숲 옥 2.2T","u":"https://zzro.kr/product-flooring-kcc-22t"},{"n":"미엘오크","c":"#c3925a","t":"natural","b":"KCC글라스","code":"MN22-4383","line":"숲 옥 2.2T","u":"https://zzro.kr/product-flooring-kcc-22t"},{"n":"[3.2] 바닐라 / 브라운","c":"#ddc9a6","t":"light","b":"LX Z:IN","code":"ZH60161-12","line":"시트 프리미엄 3.2/2.7","u":"https://www.lxzin.com/zin/product/100423"},{"n":"세라믹 스톤","c":"#e6e2dc","t":"white","b":"LX Z:IN","code":"CM24741","line":"시트 스탠다드 1.8","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.lxzin.com/zin/product/102242"},{"n":"소프트콘크리트","c":"#d3c9bb","t":"greige","b":"LX Z:IN","code":"ZJ43601-22","line":"시트 프리미엄 2.2","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.lxzin.com/zin/product/11688"},{"n":"그레이 콘크리트","c":"#a9a8a5","t":"gray","b":"LX Z:IN","code":"ZJ44351-22","line":"시트 프리미엄 2.2","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.lxzin.com/zin/product/100781"},{"n":"아이보리 오크","c":"#e2d5bc","t":"light","b":"LX Z:IN","code":"ZJ34841-11","line":"시트 프리미엄 2.2","u":"https://www.lxzin.com/zin/product/103130"},{"n":"뉴실버 마블","c":"#d2d1ce","t":"gray","b":"LX Z:IN","code":"ZJ43893-22","line":"시트 프리미엄 2.2","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":1,"rough":0.35},"u":"https://www.lxzin.com/zin/product/103140"},{"n":"[4.5] 내츄럴 오크","c":"#c49b6c","t":"natural","b":"LX Z:IN","code":"ZS84011-11","line":"엑스컴포트 4.5","u":"https://www.lxzin.com/zin/product/13517"},{"n":"[4.5] 소프트 포세린","c":"#e6e2dc","t":"white","b":"LX Z:IN","code":"ZS84031-11","line":"엑스컴포트 4.5","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.lxzin.com/zin/product/13533"},{"n":"스탠다드 오크","c":"#c19a6b","t":"natural","b":"LX Z:IN","code":"XCF4043","line":"엑스컴포트 5.0","u":"https://www.lxzin.com/zin/product/101622"},{"n":"스노우 우드","c":"#e4dccd","t":"white","b":"LX Z:IN","code":"XCFW011","line":"엑스컴포트 5.0","u":"https://www.lxzin.com/zin/product/101620"},{"n":"솔티 화이트","c":"#e6e2dc","t":"white","b":"LX Z:IN","code":"XCFS011","line":"엑스컴포트 5.0","mat":{"type":"tile","tw":0.6,"th":0.6,"vein":0,"rough":0.35},"u":"https://www.lxzin.com/zin/product/101627"},{"n":"크리미오크","c":"#ddc9a6","t":"light","b":"KCC글라스","code":"NC45-4761","line":"숲 휴가온 4.5T","u":"https://zzro.kr/product-flooring-kcc-45t"}],"porcP":[{"n":"시그니쳐 베이지","c":"#d9c8ad","t":"beige","b":"이즈세라믹(유통)","line":"포세린 600×1200 무광","mat":{"type":"tile","tw":0.6,"th":1.2,"vein":0,"rough":0.35},"u":"https://isceramic.kr/product/detail.html?product_no=28184"},{"n":"시그니쳐 라이트그레이","c":"#d2d1ce","t":"gray","b":"이즈세라믹(유통)","line":"포세린 600×1200 무광","mat":{"type":"tile","tw":0.6,"th":1.2,"vein":0,"rough":0.35},"u":"https://isceramic.kr/product/detail.html?product_no=28182"},{"n":"시그니쳐 그레이","c":"#a9a8a5","t":"gray","b":"이즈세라믹(유통)","line":"포세린 600×1200 무광","mat":{"type":"tile","tw":0.6,"th":1.2,"vein":0,"rough":0.35},"u":"https://isceramic.kr/product/detail.html?product_no=28179"},{"n":"제니스 베이지","c":"#d9c8ad","t":"beige","b":"이즈세라믹(유통)","line":"포세린 600×1200 무광","mat":{"type":"tile","tw":0.6,"th":1.2,"vein":0,"rough":0.35},"u":"https://isceramic.kr/product/detail.html?product_no=28131"},{"n":"제니스 라이트그레이","c":"#d2d1ce","t":"gray","b":"이즈세라믹(유통)","line":"포세린 600×1200 무광","mat":{"type":"tile","tw":0.6,"th":1.2,"vein":0,"rough":0.35},"u":"https://isceramic.kr/product/detail.html?product_no=28133"},{"n":"클라우드 베이지","c":"#d9c8ad","t":"beige","b":"이즈세라믹(유통)","line":"포세린 600×1200 무광","mat":{"type":"tile","tw":0.6,"th":1.2,"vein":0,"rough":0.35},"u":"https://isceramic.kr/product/detail.html?product_no=28134"},{"n":"그리지오 라이트그레이","c":"#d2d1ce","t":"gray","b":"이즈세라믹(유통)","line":"포세린 600×1200 무광","mat":{"type":"tile","tw":0.6,"th":1.2,"vein":0,"rough":0.35},"u":"https://isceramic.kr/product/detail.html?product_no=28225"},{"n":"시그니쳐 베이지(600각)","c":"#d9c8ad","t":"beige","b":"이즈세라믹(유통)","line":"포세린 600×600 무광","mat":{"type":"tile","tw":0.6,"th":1.2,"vein":0,"rough":0.35},"u":"https://isceramic.kr/product/detail.html?product_no=28221"},{"n":"제니스 그레이(600각)","c":"#a9a8a5","t":"gray","b":"이즈세라믹(유통)","line":"포세린 600×600 무광","mat":{"type":"tile","tw":0.6,"th":1.2,"vein":0,"rough":0.35},"u":"https://isceramic.kr/product/detail.html?product_no=28137"}],"herrP":[{"n":"스웨디쉬 화이트(헤링본)","c":"#e4dccd","t":"white","b":"구정마루","line":"프라하","u":"https://www.kujungmaru.com/product/detail?id=219"},{"n":"오크(헤링본)","c":"#c49b6c","t":"natural","b":"구정마루","line":"프라하","u":"https://www.kujungmaru.com/product/detail?id=222"},{"n":"브러쉬 골드 오크 클래식(헤링본)","c":"#c3925a","t":"natural","b":"구정마루","line":"프라하","u":"https://www.kujungmaru.com/product/detail?id=216"},{"n":"아이보리 화이트(헤링본)","c":"#ddc9a6","t":"light","b":"구정마루","line":"프라하","u":"https://www.kujungmaru.com/product/detail?id=220"}],"wpSilk":[{"n":"모던회벽/화이트","c":"#f0eee9","t":"white","b":"LX Z:IN","code":"PR028-01","line":"디아망 (LX Z:IN DIAMANT)","u":"https://www.lxzin.com/zin/product/13396"},{"n":"회벽/퓨어화이트","c":"#f2f0eb","t":"white","b":"LX Z:IN","code":"PR002-10","line":"디아망 (LX Z:IN DIAMANT)","u":"https://www.lxzin.com/zin/product/100709"},{"n":"회벽/화이트","c":"#f0eee9","t":"white","b":"LX Z:IN","code":"PR002-01","line":"디아망 (LX Z:IN DIAMANT)","u":"https://www.lxzin.com/zin/product/11441"},{"n":"내추럴회벽/크림 화이트","c":"#efe4cc","t":"warm","b":"LX Z:IN","code":"PR031-02","line":"디아망 (LX Z:IN DIAMANT)","u":"https://www.lxzin.com/zin/product/100691"},{"n":"회벽/크림 화이트","c":"#efe4cc","t":"warm","b":"LX Z:IN","code":"PR002-12","line":"디아망 (LX Z:IN DIAMANT)","u":"https://www.lxzin.com/zin/product/102540"},{"n":"회벽/크림","c":"#efe7d6","t":"warm","b":"LX Z:IN","code":"PR002-11","line":"디아망 (LX Z:IN DIAMANT)","u":"https://www.lxzin.com/zin/product/100708"},{"n":"내추럴 페인팅/화이트","c":"#f0eee9","t":"white","b":"LX Z:IN","code":"82483-01","line":"실크벽지 베스트(베스띠)","u":"https://www.lxzin.com/zin/product/12382"},{"n":"더 리얼 페인트/미닛 화이트아이보리","c":"#efe7d6","t":"warm","b":"LX Z:IN","code":"82539-02","line":"실크벽지 베스트(베스띠)","u":"https://www.lxzin.com/zin/product/100478"},{"n":"모던회벽/라이트 그레이","c":"#d2d1ce","t":"gray","b":"LX Z:IN","code":"PR028-02","line":"디아망 (LX Z:IN DIAMANT)","u":"https://www.lxzin.com/zin/product/13397"},{"n":"내추럴회벽/화이트","c":"#f0eee9","t":"white","b":"LX Z:IN","code":"PR031-01","line":"디아망 (LX Z:IN DIAMANT)","u":"https://www.lxzin.com/zin/product/100690"},{"n":"디아 회벽/크림화이트","c":"#efe4cc","t":"warm","b":"LX Z:IN","code":"82601-05","line":"실크벽지 베스트(베스띠)","u":"https://www.lxzin.com/zin/product/103064"},{"n":"빈티지 회벽/화이트","c":"#f0eee9","t":"white","b":"LX Z:IN","code":"82476-01","line":"실크벽지 베스트(베스띠)","u":"https://www.lxzin.com/zin/product/12342"},{"n":"회벽/라이트그레이","c":"#d2d1ce","t":"gray","b":"LX Z:IN","code":"PR002-03","line":"디아망 (LX Z:IN DIAMANT)","u":"https://www.lxzin.com/zin/product/11446"},{"n":"리얼 페인팅/화이트","c":"#f0eee9","t":"white","b":"LX Z:IN","code":"82458-01","line":"실크벽지 베스트(베스띠)","u":"https://www.lxzin.com/zin/product/11821"},{"n":"회벽/블랑 그레이","c":"#e6e5e1","t":"gray","b":"LX Z:IN","code":"PR002-13","line":"디아망 (LX Z:IN DIAMANT)","u":"https://www.lxzin.com/zin/product/102541"},{"n":"회벽/베이지","c":"#d9c8ad","t":"beige","b":"LX Z:IN","code":"PR002-02","line":"디아망 (LX Z:IN DIAMANT)","u":"https://www.lxzin.com/zin/product/11445"},{"n":"마티스 플러스 (화이트)","c":"#f0eee9","t":"white","b":"KCC신한","code":"2023-1","line":"파사드 (실크)","u":"https://shinhanwall.co.kr/brands/products-view.html?uid=6344&depth1=1&depth2=59"},{"n":"샤갈 플러스 (화이트)","c":"#f0eee9","t":"white","b":"KCC신한","code":"2022-1","line":"파사드 (실크)","u":"https://shinhanwall.co.kr/brands/products-view.html?uid=6341&depth1=1&depth2=59"},{"n":"마티스 플러스 (베이지)","c":"#d9c8ad","t":"beige","b":"KCC신한","code":"2023-3","line":"파사드 (실크)","u":"https://shinhanwall.co.kr/brands/products-view.html?uid=6342&depth1=1&depth2=59"},{"n":"샤갈 플러스 (아이보리)","c":"#efe7d6","t":"warm","b":"KCC신한","code":"2022-3","line":"파사드 (실크)","u":"https://shinhanwall.co.kr/brands/products-view.html?uid=6339&depth1=1&depth2=59"}],"wpHapji":[{"n":"페인팅/화이트 크림","c":"#efe4cc","t":"warm","b":"LX Z:IN","code":"49605-01","line":"합지벽지 (구 휘앙세93)","u":"https://www.lxzin.com/zin/product/101019"},{"n":"코지/화이트","c":"#f0eee9","t":"white","b":"LX Z:IN","code":"49576-01","line":"합지벽지 (구 휘앙세93)","u":"https://www.lxzin.com/zin/product/13773"},{"n":"클린 니트/웜 화이트","c":"#efe9de","t":"warm","b":"LX Z:IN","code":"49601-01","line":"합지벽지 (구 휘앙세93)","u":"https://www.lxzin.com/zin/product/100989"},{"n":"코지/라이트 그레이","c":"#d2d1ce","t":"gray","b":"LX Z:IN","code":"49576-02","line":"합지벽지 (구 휘앙세93)","u":"https://www.lxzin.com/zin/product/13774"},{"n":"베이직/페일 아이보리","c":"#efe7d6","t":"warm","b":"LX Z:IN","code":"49581-02","line":"합지벽지 (구 휘앙세93)","u":"https://www.lxzin.com/zin/product/13807"},{"n":"고운샌드/펄화이트","c":"#e6dac6","t":"beige","b":"LX Z:IN","code":"49211-10","line":"합지벽지 (구 휘앙세93)","u":"https://www.lxzin.com/zin/product/101036"},{"n":"클린 페인팅/페일 화이트","c":"#f0eee9","t":"white","b":"LX Z:IN","code":"49563-04","line":"합지벽지 (구 휘앙세93)","u":"https://www.lxzin.com/zin/product/13766"},{"n":"샌드/펄화이트","c":"#e6dac6","t":"beige","b":"LX Z:IN","code":"49146-10","line":"합지벽지 (구 휘앙세93)","u":"https://www.lxzin.com/zin/product/101035"}],"paintP":[{"n":"Whisper (위스퍼)","c":"#fdfaf1","t":"white","b":"던에드워드","code":"DEW340","u":"https://paintgonggam.com/product/%EC%B4%88%EB%B3%B4%EC%9E%90-%EB%B2%BD%EC%A7%80-%ED%8E%98%EC%9D%B8%ED%8C%85/270/"},{"n":"Swiss Coffee (스위스 커피)","c":"#f8f5e9","t":"white","b":"던에드워드","code":"DEW341","u":"https://paintgonggam.com/product/%EC%B4%88%EB%B3%B4%EC%9E%90-%EB%B2%BD%EC%A7%80-%ED%8E%98%EC%9D%B8%ED%8C%85/270/"},{"n":"White (화이트)","c":"#ffffff","t":"white","b":"던에드워드","code":"DEW380","u":"https://paintgonggam.com/product/%EC%B4%88%EB%B3%B4%EC%9E%90-%EB%B2%BD%EC%A7%80-%ED%8E%98%EC%9D%B8%ED%8C%85/270/"},{"n":"White Dove (화이트 도브)","c":"#efeee5","t":"white","b":"벤자민무어","code":"OC-17","u":"https://www.benjaminmoore.com/en-us/paint-colors/color/oc-17/white-dove"},{"n":"Simply White (심플리 화이트)","c":"#f6f6ed","t":"white","b":"벤자민무어","code":"OC-117","u":"https://www.benjaminmoore.com/en-us/paint-colors/color/oc-117/simply-white"},{"n":"Chantilly Lace (샹티이 레이스)","c":"#f4f6f1","t":"white","b":"벤자민무어","code":"OC-65","u":"https://www.benjaminmoore.com/en-us/paint-colors/color/oc-65/chantilly-lace"},{"n":"Swiss Coffee (스위스 커피)","c":"#eeece1","t":"white","b":"벤자민무어","code":"OC-45","u":"https://www.benjaminmoore.com/en-us/paint-colors/color/oc-45/swiss-coffee"},{"n":"Snow White (스노우 화이트)","c":"#f0ede7","t":"white","b":"노루 팬톤","code":"PANTONE 11-0602","u":"https://www.pantonepaint.co.kr/color/2018/best_color_tab_01.asp"},{"n":"Whisper White (위스퍼 화이트)","c":"#efe8dd","t":"white","b":"노루 팬톤","code":"PANTONE 11-0701","u":"https://www.pantonepaint.co.kr/color/2018/best_color_tab_01.asp"},{"n":"Blanc de Blanc (블랑 드 블랑)","c":"#e9e9e7","t":"white","b":"노루 팬톤","code":"PANTONE 11-4800","u":"https://www.pantonepaint.co.kr/color/2018/best_color_tab_01.asp"},{"n":"Bright White (브라이트 화이트)","c":"#f5f7f6","t":"white","b":"노루 팬톤","code":"PANTONE 11-0601","u":"https://www.pantonepaint.co.kr/color/2018/best_color_tab_01.asp"},{"n":"Antique White (앤티크 화이트)","c":"#eee7d4","t":"white","b":"노루 팬톤","code":"PANTONE 11-0105","u":"https://www.pantonepaint.co.kr/color/2018/best_color_tab_01.asp"},{"n":"Cloud White (클라우드 화이트)","c":"#f2f1e6","t":"white","b":"벤자민무어","code":"OC-130","u":"https://www.benjaminmoore.com/en-us/paint-colors/color/oc-130/cloud-white"},{"n":"Pale Oak (페일 오크)","c":"#ddd9ce","t":"white","b":"벤자민무어","code":"OC-20","u":"https://www.benjaminmoore.com/en-us/paint-colors/color/oc-20/pale-oak"},{"n":"Revere Pewter (리비어 퓨터)","c":"#cbc6b8","t":"white","b":"벤자민무어","code":"HC-172","u":"https://www.benjaminmoore.com/en-us/paint-colors/color/hc-172/revere-pewter"},{"n":"Classic Gray (클래식 그레이)","c":"#e3e0d7","t":"gray","b":"벤자민무어","code":"OC-23","u":"https://www.benjaminmoore.com/en-us/paint-colors/color/oc-23/classic-gray"},{"n":"Edgecomb Gray (엣지콤 그레이)","c":"#d9d3c4","t":"gray","b":"벤자민무어","code":"HC-173","u":"https://www.benjaminmoore.com/en-us/paint-colors/color/hc-173/edgecomb-gray"},{"n":"Balboa Mist (발보아 미스트)","c":"#dad6cc","t":"white","b":"벤자민무어","code":"OC-27","u":"https://www.benjaminmoore.com/en-us/paint-colors/color/oc-27/balboa-mist"},{"n":"Gray Owl (그레이 아울)","c":"#d3d4cc","t":"gray","b":"벤자민무어","code":"OC-52","u":"https://www.benjaminmoore.com/en-us/paint-colors/color/oc-52/gray-owl"},{"n":"Moonbeam (문빔)","c":"#d6cfc7","t":"white","b":"노루 팬톤","code":"PANTONE 13-0000","u":"https://www.pantonepaint.co.kr/color/2018/best_color_tab_01.asp"}]};
/* =====================================================================
   SMCT AI 인테리어 스튜디오  ·  interior.html
   (주)에스엠씨티건설  ·  www.smct00.co.kr
   ---------------------------------------------------------------------
   ▣ 단가 수정: 아래 "CATALOG" 의 price 숫자(원, VAT 별도, 재료+시공)만 바꾸면 됩니다.
   ▣ 접수 주소: CFG.FORM_ENDPOINT (홈페이지 문의폼과 같은 Formspree)
   ===================================================================== */
'use strict';
const CFG = {
  VERSION: 'v0.1 · 2026.11',
  FORM_ENDPOINT: 'https://formspree.io/f/mgodbdnk',
  PHONE: '062-522-1212',
  EMAIL: 'smct00@naver.com',
  CODE_EPOCH: Date.UTC(2026, 0, 1),
  CEIL_H: 2.3,          // 아파트 천장고(m)
  OVERHEAD: 0.06,       // 현장관리·공과잡비 비율
  VAT: 0.10,
  RANGE: [0.92, 1.12],  // 견적 범위(하한/상한 배율)
  PRICE_DATE: '2026.11 기준',
};

/* ---------- 유틸 ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const r2 = v => Math.round(v * 100) / 100;
const r1 = v => Math.round(v * 10) / 10;
const won = v => Math.round(v).toLocaleString('ko-KR') + '원';
const man = v => {
  const m = Math.round(v / 10000);
  if (m >= 10000) { const e = Math.floor(m / 10000), r = m % 10000; return e + '억' + (r ? ' ' + r.toLocaleString('ko-KR') + '만' : '') + '원'; }
  return m.toLocaleString('ko-KR') + '만원';
};
const pyeong = m2 => m2 / 3.3058;
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }
function toast(msg, ms = 2600) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), ms); }
function lsGet(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }
function ga(ev, p) { try { if (window.gtag) gtag('event', ev, Object.assign({ event_category: 'ai_interior' }, p || {})); } catch (e) { } }
function cyrb53(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) { ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

/* ---------- 이용코드 (SMCT 발급) ----------
   형식: SMCT-XXXX-XXXX  (만료일 12bit + 일련 12bit + 검증 16bit, Crockford Base32) */
/* 이용코드 발급·검증은 서버(/api/ai)에서 처리합니다 */

/* ---------- 평형 프리셋 ---------- */
const SIZES = [
  { id: 's18', label: '18평형', A: 46, bays: 2, rooms: 2, baths: 1 },
  { id: 's24', label: '24평형', A: 59, bays: 3, rooms: 3, baths: 2 },
  { id: 's28', label: '28평형', A: 72, bays: 3, rooms: 3, baths: 2 },
  { id: 's34', label: '34평형', A: 84, bays: 4, rooms: 3, baths: 2 },
  { id: 's40', label: '40평형', A: 101, bays: 4, rooms: 4, baths: 2 },
  { id: 's45', label: '45평형', A: 114, bays: 4, rooms: 4, baths: 2 },
  { id: 's50', label: '50평형', A: 135, bays: 4, rooms: 4, baths: 2 },
  { id: 'custom', label: '직접 입력', A: 84, bays: 4, rooms: 3, baths: 2 },
];

/* ---------- 색상 팔레트 (tone 은 스타일 프리셋 매칭용) ---------- */
const C = {
  woodF: [
    { n: '라이트 오크', c: '#d8c3a0', t: 'light' }, { n: '내추럴 오크', c: '#c39d6e', t: 'natural' },
    { n: '화이트 애쉬', c: '#e6ddcc', t: 'white' }, { n: '웜 그레이', c: '#aba49a', t: 'gray' },
    { n: '월넛', c: '#7b5438', t: 'dark' }],
  stoneF: [
    { n: '화이트 마블', c: '#ebe8e3', t: 'white' }, { n: '라이트 그레이', c: '#cfccc6', t: 'gray' },
    { n: '베이지 스톤', c: '#d7c9b5', t: 'natural' }, { n: '다크 그레이', c: '#6f6d69', t: 'dark' }],
  wall: [
    { n: '화이트', c: '#f3f1ec', t: 'white' }, { n: '웜 화이트', c: '#efe8dc', t: 'warm' },
    { n: '그레이지', c: '#d9d1c5', t: 'greige' }, { n: '라이트 그레이', c: '#dcdcda', t: 'gray' },
    { n: '세이지', c: '#c8cfbd', t: 'green' }, { n: '베이지', c: '#e5d8c4', t: 'beige' },
    { n: '더스티 핑크', c: '#e9d4cf', t: 'pink' }, { n: '민트', c: '#d4e6dc', t: 'mint' }, { n: '스카이', c: '#d6e2ec', t: 'sky' },
    { n: '버터', c: '#f1e7c6', t: 'butter' }, { n: '테라코타', c: '#dbb8a3', t: 'terra' }, { n: '딥 그린', c: '#7f907b', t: 'deepgreen' }],
  door: [
    { n: '화이트', c: '#f1efea', t: 'white' }, { n: '라이트 그레이', c: '#cecdca', t: 'gray' },
    { n: '오크 우드', c: '#b88d60', t: 'wood' }, { n: '다크 그레이', c: '#5b5b5b', t: 'dark' }],
  kitchen: [
    { n: '화이트', c: '#f0eee9', t: 'white' }, { n: '웜 그레이', c: '#bdb7ad', t: 'warmgray' },
    { n: '오크 우드', c: '#b98e62', t: 'wood' }, { n: '딥 그린', c: '#47594c', t: 'green' },
    { n: '네이비', c: '#34405a', t: 'navy' }, { n: '버터 크림', c: '#ece0bd', t: 'butter' }, { n: '세이지', c: '#a8b49a', t: 'sage' },
    { n: '월넛', c: '#6b4a33', t: 'walnut' }, { n: '매트 블랙', c: '#2e2e30', t: 'black' }],
  bath: [
    { n: '화이트', c: '#eeeeeb', t: 'white' }, { n: '라이트 그레이', c: '#c9c9c5', t: 'gray' },
    { n: '베이지', c: '#d9cdb9', t: 'beige' }, { n: '테라조', c: '#dcd5c9', t: 'terrazzo' },
    { n: '다크 그레이', c: '#5f5f5c', t: 'dark' }],
  frame: [
    { n: '화이트', c: '#f2f2f0', t: 'white' }, { n: '그레이', c: '#8d8f92', t: 'gray' }, { n: '블랙', c: '#2b2c2e', t: 'black' }],
  mid: [
    { n: '블랙', c: '#2a2a2a', t: 'black' }, { n: '화이트', c: '#efefec', t: 'white' }, { n: '브론즈', c: '#6d5a45', t: 'bronze' }],
  art: [
    { n: '화이트 마블', c: '#ece9e4', t: 'white' }, { n: '웜 그레이', c: '#b9b2a7', t: 'gray' },
    { n: '오크', c: '#b88a5c', t: 'wood' }, { n: '월넛', c: '#6e4a31', t: 'dark' }, { n: '트래버틴', c: '#d8c8ae', t: 'natural' }],
};

/* ---------- 마감재 카탈로그 ----------
   q: 수량 키 (계산식은 calcQty 참조) / unit: 표기 단위 / price: 원(재료+시공, VAT 별도)
   grade: 1 실속 · 2 표준 · 3 고급 · 4 프리미엄 (0 = 자동선택 안 함)
   mat: 3D 표현 / tags: 배지 / pros·cons: AI 해설용 */
const CATALOG = [
  { id: 'demo', name: '철거·폐기물', icon: '🔨', group: '기초 공사', desc: '기존 마감 철거와 폐기물 처리, 공용부 보양',
    options: [
      { id: 'keep', name: '철거 없음 (부분 공사)', grade: 0, price: 0, q: 'area', unit: '㎡' },
      { id: 'partial', name: '부분 철거 (바닥·도배·몰딩·조명)', grade: 1, price: 16000, q: 'area', unit: '㎡', note: '주방·욕실은 유지하는 경우' },
      { id: 'full', name: '전체 철거 (주방·욕실·바닥·문틀 포함)', grade: 2, price: 38000, q: 'area', unit: '㎡', note: '올수리 기준, 폐기물 반출 포함' },
    ] },
  { id: 'window', name: '창호(샷시)', icon: '🪟', group: '기초 공사', desc: 'SMCT 금속창호 면허 직시공 — 단열·결로·소음에 가장 큰 영향', colorKey: 'frame',
    options: [
      { id: 'keep', name: '기존 창호 유지', grade: 1, price: 0, q: 'win', unit: '㎡' },
      { id: 'film', name: '창호 필름 + 실리콘·하드웨어 보수', grade: 0, price: 45000, q: 'win', unit: '㎡', note: '프레임 색만 바꾸는 저비용 리폼' },
      { id: 'pvc', name: '고단열 PVC 이중창 (LX·KCC 동급)', grade: 2, price: 420000, q: 'win', unit: '㎡', tags: ['SMCT 직시공'],
        pros: '단열·기밀 성능이 크게 좋아져 냉난방비와 결로가 줄어듭니다', cons: '공사 당일 소음과 분진이 있어 이웃 공지가 필요합니다' },
      { id: 'system', name: '알루미늄 시스템창호 (슬림 프레임)', grade: 4, price: 780000, q: 'win', unit: '㎡', tags: ['SMCT 직시공', '신자재'],
        pros: '프레임이 얇아 조망이 넓고 기밀·수밀 성능이 최상급입니다', cons: 'PVC 대비 비용이 높고 제작 기간이 2~3주 필요합니다' },
    ] },
  { id: 'floor', name: '바닥재', icon: '🟫', group: '바닥·벽·천장', desc: '거실·주방·방·복도 바닥', colorKey: 'byOption',
    options: [
      { id: 'keep', name: '기존 바닥 유지', grade: 0, price: 0, q: 'floor', unit: '㎡', colors: 'woodF', mat: { type: 'wood', plank: 0.19 } },
      { id: 'vinyl', name: '장판 2.2T (LX·KCC)', grade: 1, price: 26000, q: 'floor', unit: '㎡', colors: 'woodF', mat: { type: 'vinyl', plank: 0.2, rough: 0.7 },
        pros: '가격이 가장 합리적이고 충격 흡수가 좋아 아이 있는 집에 무난합니다', cons: '가구 자국과 찍힘에 약하고 고급감은 낮습니다' },
      { id: 'laminate', name: '강화마루', grade: 0, price: 39000, q: 'floor', unit: '㎡', colors: 'woodF', mat: { type: 'wood', plank: 0.19, rough: 0.6 },
        pros: '긁힘에 강하고 시공이 빠릅니다', cons: '걸을 때 울림이 있고 물에 약합니다' },
      { id: 'engineered', name: '강마루 (동화·LX·구정 동급)', grade: 2, price: 52000, q: 'floor', unit: '㎡', colors: 'woodF', mat: { type: 'wood', plank: 0.19, rough: 0.5 },
        pros: '접착식이라 울림이 적고 바닥난방 열전도가 좋아 아파트 표준으로 많이 씁니다', cons: '물이 오래 고이면 들뜰 수 있습니다' },
      { id: 'spc', name: 'SPC 마루 (방수·고내구 신자재)', grade: 3, price: 58000, q: 'floor', unit: '㎡', colors: 'woodF', tags: ['신자재'], mat: { type: 'wood', plank: 0.22, rough: 0.45 },
        pros: '돌가루 코어라 물·긁힘·반려동물 발톱에 강하고 치수 변형이 거의 없습니다', cons: '원목 대비 촉감이 단단하고 차갑게 느껴질 수 있습니다' },
      { id: 'herring', name: '헤링본 강마루 (지그재그 패턴)', grade: 0, price: 78000, q: 'floor', unit: '㎡', colors: 'woodF', tags: ['트렌드'], mat: { type: 'herring', rough: 0.5 },
        pros: '사선 패턴으로 공간이 넓어 보이고 클래식한 개성이 생깁니다', cons: '로스율이 커서 일반 마루보다 자재·인건비가 높습니다' },
      { id: 'stone', name: '석재 무늬 SPC (스톤 타일형 마루)', grade: 0, price: 64000, q: 'floor', unit: '㎡', colors: 'stoneF', tags: ['신자재'], mat: { type: 'tile', tw: 0.45, th: 0.9, vein: 1, rough: 0.4 },
        pros: '타일 같은 석재 질감에 마루처럼 따뜻하고, 물·스크래치에 강합니다', cons: '실제 타일보다 광택감은 적습니다' },
      { id: 'wood', name: '원목마루 (천연 무늬목 3T)', grade: 4, price: 105000, q: 'floor', unit: '㎡', colors: 'woodF', mat: { type: 'wood', plank: 0.16, rough: 0.42, grain: 1 },
        pros: '천연 나뭇결과 따뜻한 촉감으로 공간 품격이 확실히 올라갑니다', cons: '찍힘·수분 관리가 필요하고 비용이 높습니다' },
      { id: 'porcelain', name: '포세린 타일 600×1200', grade: 4, price: 118000, q: 'floor', unit: '㎡', colors: 'stoneF', tags: ['호텔식'], mat: { type: 'tile', tw: 0.6, th: 1.2, vein: 1, rough: 0.25 },
        pros: '대리석 같은 고급감, 오염·긁힘에 매우 강하고 수명이 깁니다', cons: '바닥이 차갑고 딱딱하며 레벨 시공 난도가 높습니다' },
    ] },
  { id: 'wall', name: '벽 마감', icon: '🧱', group: '바닥·벽·천장', desc: '거실·방·복도 벽', colorKey: 'wall',
    options: [
      { id: 'keep', name: '기존 벽지 유지', grade: 0, price: 0, q: 'wall', unit: '㎡', mat: { type: 'paper' } },
      { id: 'paper', name: '합지 도배', grade: 1, price: 9000, q: 'wall', unit: '㎡', mat: { type: 'paper', rough: 0.95 },
        pros: '저렴하고 교체가 쉽습니다', cons: '이음매가 보이고 오염에 약합니다' },
      { id: 'silk', name: '실크 도배 (LX 디아망 동급)', grade: 2, price: 15000, q: 'wall', unit: '㎡', mat: { type: 'paper', rough: 0.75, sheen: 1 },
        pros: '표면이 매끈하고 물걸레 청소가 가능합니다', cons: '초배 시공이 필요해 합지보다 비용·기간이 늘어납니다' },
      { id: 'fabric', name: '패브릭 텍스처 실크벽지 (프리미엄)', grade: 3, price: 19000, q: 'wall', unit: '㎡', mat: { type: 'paper', rough: 0.9, sheen: 1 },
        pros: '천 같은 질감으로 은은하고 고급스럽습니다', cons: '일반 실크보다 단가가 조금 높습니다' },
      { id: 'paint', name: '친환경 도장 (벤자민무어 동급, 퍼티 포함)', grade: 4, price: 32000, q: 'wall', unit: '㎡', tags: ['친환경'], mat: { type: 'paint', rough: 0.85 },
        pros: '이음매 없는 갤러리 같은 벽면, 부분 보수와 색 변경이 쉽습니다', cons: '퍼티·샌딩 공정이 길어 공기가 3~4일 늘어납니다' },
      { id: 'limewash', name: '라임워시·석회 텍스처 도장', grade: 0, price: 46000, q: 'wall', unit: '㎡', tags: ['트렌드'], mat: { type: 'lime', rough: 0.95 },
        pros: '붓 자국이 남는 자연스러운 질감으로 갤러리·카페 같은 분위기를 냅니다', cons: '숙련 시공이 필요하고 오염 시 부분 보수가 어렵습니다' },
    ] },
  { id: 'artwall', name: '거실 아트월', icon: '🖼️', group: '바닥·벽·천장', desc: 'TV가 놓이는 거실 대표 벽면', colorKey: 'art',
    options: [
      { id: 'none', name: '벽과 동일 마감', grade: 1, price: 0, q: 'art', unit: '㎡' },
      { id: 'tambour', name: '템바보드 (우드 루버) 아트월', grade: 2, price: 125000, q: 'art', unit: '㎡', tags: ['트렌드'], mat: { type: 'slat' },
        pros: '세로 리듬감으로 천장이 높아 보이고 따뜻한 분위기를 줍니다', cons: '홈 사이 먼지 관리가 필요합니다' },
      { id: 'acoustic', name: '흡음 어쿠스틱 패널 (방음 겸용)', grade: 0, price: 135000, q: 'art', unit: '㎡', tags: ['신자재'], mat: { type: 'slat', felt: 1 },
        pros: '거실 울림과 TV 소리 반사를 줄여 홈시어터·층간소음 체감에 유리합니다', cons: '패브릭 면은 오염 관리가 필요합니다' },
      { id: 'veneer', name: '무늬목 패널 아트월', grade: 3, price: 145000, q: 'art', unit: '㎡', mat: { type: 'veneer' },
        pros: '천연 무늬목으로 차분하고 고급스러운 인상을 줍니다', cons: '직사광선에 장기간 노출되면 변색될 수 있습니다' },
      { id: 'porcelain', name: '포세린 대형 타일 아트월', grade: 3, price: 160000, q: 'art', unit: '㎡', mat: { type: 'tile', tw: 0.6, th: 1.2, vein: 1, rough: 0.2 },
        pros: '석재 느낌의 고급감과 내구성을 갖췄습니다', cons: '벽걸이 TV 앵커 위치를 미리 정해야 합니다' },
      { id: 'slab', name: '세라믹 슬랩 통장 (1600×3200)', grade: 4, price: 260000, q: 'art', unit: '㎡', tags: ['프리미엄', '신자재'], mat: { type: 'tile', tw: 1.6, th: 3.2, vein: 2, rough: 0.15 },
        pros: '이음매가 거의 없는 한 장 마감으로 호텔 로비 같은 존재감을 줍니다', cons: '대형 판재 양중·재단 비용이 들고 엘리베이터 크기 확인이 필요합니다' },
    ] },
  { id: 'ceiling', name: '천장 마감', icon: '⬜', group: '바닥·벽·천장', desc: '거실·방 천장',
    options: [
      { id: 'keep', name: '기존 유지', grade: 0, price: 0, q: 'ceil', unit: '㎡' },
      { id: 'paper', name: '천장 도배 (벽과 같은 등급)', grade: 1, price: 11000, q: 'ceil', unit: '㎡' },
      { id: 'paint', name: '천장 도장 (무광 화이트)', grade: 4, price: 30000, q: 'ceil', unit: '㎡', pros: '조명 반사가 고르고 이음매 없이 깔끔합니다' },
    ] },
  { id: 'ceilDesign', name: '거실 천장 디자인', icon: '💡', group: '바닥·벽·천장', desc: '우물천장·간접조명·커튼박스 (목공·석고보드)',
    options: [
      { id: 'keep', name: '기존 유지', grade: 1, price: 0, q: 'livCeil', unit: '㎡' },
      { id: 'flat', name: '우물천장 평탄화 (석고보드 2겹)', grade: 2, price: 48000, q: 'livCeil', unit: '㎡', pros: '천장이 넓고 높아 보이며 요즘 스타일과 잘 맞습니다' },
      { id: 'line', name: '평탄화 + 라인조명 매립', grade: 3, price: 72000, q: 'livCeil', unit: '㎡', tags: ['트렌드'], pros: '라인 조명이 공간의 축을 만들어 세련된 인상을 줍니다' },
      { id: 'cove', name: '간접조명 우물 + 커튼박스', grade: 4, price: 88000, q: 'livCeil', unit: '㎡', tags: ['호텔식'], pros: '은은한 빛이 천장 윤곽을 띄워 호텔 같은 분위기를 만듭니다' },
    ] },
  { id: 'molding', name: '몰딩·걸레받이', icon: '📏', group: '바닥·벽·천장', desc: '천장 몰딩과 바닥 걸레받이',
    options: [
      { id: 'keep', name: '기존 유지', grade: 0, price: 0, q: 'mold', unit: 'm' },
      { id: 'basic', name: '평몰딩 + PVC 걸레받이 교체', grade: 1, price: 9000, q: 'mold', unit: 'm' },
      { id: 'minus', name: '마이너스 몰딩 + 알루미늄 걸레받이', grade: 2, price: 32000, q: 'mold', unit: 'm', tags: ['트렌드'], pros: '천장과 벽 사이에 그림자 라인이 생겨 깔끔하고 높아 보입니다' },
      { id: 'none', name: '무몰딩(히든) + 히든 걸레받이', grade: 4, price: 46000, q: 'mold', unit: 'm', tags: ['신공법'], pros: '선이 사라진 미니멀 마감으로 벽면이 한 덩어리처럼 보입니다', cons: '석고보드·퍼티 정밀 시공이 필요해 비용이 높습니다' },
    ] },
  { id: 'door', name: '실내 문 (목문)', icon: '🚪', group: '목공·도어', desc: '방·욕실 문, 문틀 포함 — 브랜드를 고른 뒤 등급 선택', colorKey: 'door',
    brands: [{ id: 'yl', n: '영림' }, { id: 'yr', n: '예림' }, { id: 'hs', n: '한샘' }, { id: 'wd', n: '우딘' }],
    options: [
      { id: 'keep', name: '기존 유지', grade: 0, price: 0, q: 'doors', unit: 'EA' },
      { id: 'film', name: '기존 문·문틀 필름 리폼', grade: 1, price: 190000, q: 'doors', unit: 'EA' },
      { id: 'abs', name: 'ABS 민자 도어 + 문틀', grade: 2, price: 390000, q: 'doors', unit: 'EA', brand: 1, pros: '습기에 강하고 문틀까지 새것으로 바뀌어 수명이 깁니다' },
      { id: 'design', name: 'ABS 디자인 도어 (슬림 문선·유리 포인트)', grade: 3, price: 480000, q: 'doors', unit: 'EA', brand: 1 },
      { id: 'paint', name: '도장 도어 (무광 도장 마감)', grade: 0, price: 620000, q: 'doors', unit: 'EA', brand: 1, tags: ['트렌드'], pros: '필름 대신 도장이라 벽과 같은 색으로 맞춰 미니멀하게 보입니다' },
      { id: 'pocket', name: '슬라이딩 포켓도어 (벽 속 미닫이)', grade: 0, price: 1250000, q: 'doors', unit: 'EA', brand: 1, tags: ['신공법'], pros: '문이 벽 안으로 들어가 동선이 넓어집니다', cons: '벽체 공사가 필요합니다' },
      { id: 'hidden', name: '히든 도어 (무문선·천장고 도어)', grade: 4, price: 1350000, q: 'doors', unit: 'EA', brand: 1, tags: ['신공법'], pros: '문선이 없어 벽처럼 보이는 미니멀 도어입니다', cons: '벽체 보강과 정밀 시공이 필요합니다' },
    ] },
  { id: 'middoor', name: '현관 중문', icon: '🚪', group: '목공·도어', desc: '현관 단열·소음·냄새 차단 — 종류·유리·프레임을 고르세요', colorKey: 'mid',
    variants: { key: 'glass', label: '유리', list: [{ id: 'clear', n: '투명', p: 0 }, { id: 'bronze', n: '브론즈', p: 90000 }, { id: 'satin', n: '샤틴(반투명)', p: 70000 }, { id: 'pattern', n: '모루 패턴', p: 120000 }, { id: 'wire', n: '망입 유리', p: 110000 }] },
    options: [
      { id: 'none', name: '중문 없음', grade: 1, price: 0, q: 'one', unit: '식' },
      { id: 'easy', name: '무타공 중문 (벽 타공 없이 · 전세집)', grade: 0, price: 380000, q: 'one', unit: '식', tags: ['가성비'], pros: '벽에 구멍을 내지 않아 원상복구가 쉽습니다', cons: '단열·차음 효과는 일반 중문보다 낮습니다' },
      { id: 'fold', name: '폴딩 중문 (접이식)', grade: 0, price: 720000, q: 'one', unit: '식' },
      { id: 'swing', name: '스윙 여닫이 중문 (슬림 프레임)', grade: 0, price: 980000, q: 'one', unit: '식' },
      { id: 'swing2', name: '양개 스윙 중문 (두 짝)', grade: 0, price: 1150000, q: 'one', unit: '식' },
      { id: 'slide2', name: '2연동 미닫이 중문', grade: 0, price: 900000, q: 'one', unit: '식' },
      { id: 'slide3', name: '3연동 슬림 중문', grade: 2, price: 1000000, q: 'one', unit: '식', pros: '좁은 현관에서도 넓게 열리고 겨울 외풍을 막아줍니다' },
      { id: 'one', name: '원슬라이딩 초슬림 중문 (대형 유리)', grade: 4, price: 1100000, q: 'one', unit: '식', tags: ['트렌드'], pros: '프레임이 얇고 한 장 유리라 현관이 넓고 고급스러워 보입니다' },
      { id: 'arch', name: '아치형 스윙 중문', grade: 0, price: 1350000, q: 'one', unit: '식', tags: ['트렌드'], pros: '곡선 프레임이 현관에 포인트가 됩니다' },
      { id: 'auto', name: '자동 중문 (센서 개폐 · 전원공사 포함)', grade: 0, price: 2700000, q: 'one', unit: '식', tags: ['신기술'], pros: '양손에 짐이 있어도 자동으로 열립니다', cons: '전기 배선 공사가 필요합니다' },
    ] },
  { id: 'entry', name: '현관', icon: '👟', group: '목공·도어', desc: '현관 바닥과 신발장',
    options: [
      { id: 'keep', name: '기존 유지', grade: 0, price: 0, q: 'entry', unit: '㎡' },
      { id: 'tile', name: '현관 바닥 포세린 타일', grade: 1, price: 160000, q: 'entry', unit: '㎡' },
      { id: 'full', name: '바닥 타일 + 천장형 신발장 교체', grade: 2, q: 'entry', unit: '㎡',
        lines: [{ name: '현관 바닥 포세린 타일', q: 'entry', unit: '㎡', price: 160000 }, { name: '천장형 신발장 + 벤치', q: 'one', unit: '식', price: 1300000 }] },
    ] },
  { id: 'kitchen', name: '주방 가구', icon: '🍳', group: '주방·욕실', desc: '싱크대 상·하부장과 상판', colorKey: 'kitchen',
    options: [
      { id: 'keep', name: '기존 유지', grade: 0, price: 0, q: 'kit', unit: 'm' },
      { id: 'film', name: '주방 필름 리폼 (상판 유지)', grade: 1, price: 140000, q: 'kit', unit: 'm' },
      { id: 'basic', name: 'PET 도어 + 인조대리석 상판', grade: 2, price: 780000, q: 'kit', unit: 'm', top: '#f2f0ec', pros: '가성비 좋은 표준 사양으로 관리가 쉽습니다' },
      { id: 'mid', name: '무광 PET + 세라믹 상판', grade: 3, price: 1150000, q: 'kit', unit: 'm', top: '#e7e4df', pros: '세라믹 상판은 열·칼자국·오염에 강합니다' },
      { id: 'handle', name: '핸들리스 무광 + 엔지니어드스톤', grade: 0, price: 1350000, q: 'kit', unit: 'm', top: '#e9e6e1', tags: ['트렌드'], pros: '손잡이 없이 홈 그립으로 열어 가구처럼 매끈합니다' },
      { id: 'premium', name: '도장 도어 + 엔지니어드스톤 + 빌트인 가전장', grade: 4, q: 'kit', unit: 'm', top: '#dedbd6', tags: ['프리미엄'],
        lines: [{ name: '싱크대 (도장·엔지니어드스톤)', q: 'kit', unit: 'm', price: 1650000 }, { name: '빌트인 키큰장(냉장고장)', q: 'one', unit: '식', price: 1500000 }],
        pros: '빌트인 라인으로 가전이 숨겨져 주방이 가구처럼 정돈됩니다' },
    ] },
  { id: 'island', name: '아일랜드', icon: '🏝️', group: '주방·욕실', desc: '식탁 겸용 아일랜드',
    options: [
      { id: 'none', name: '없음', grade: 1, price: 0, q: 'one', unit: '식' },
      { id: 'island', name: '아일랜드 식탁 1.8m (상판 동일)', grade: 3, price: 1900000, q: 'one', unit: '식', pros: '조리·식사·아이 숙제까지 가족이 모이는 중심이 됩니다' },
    ] },
  { id: 'kwall', name: '주방 벽', icon: '🧩', group: '주방·욕실', desc: '싱크대 뒤 벽 마감',
    options: [
      { id: 'keep', name: '기존 유지 / 벽지', grade: 1, price: 0, q: 'kitWall', unit: '㎡' },
      { id: 'tile', name: '유광 화이트 타일 300×600', grade: 2, price: 120000, q: 'kitWall', unit: '㎡', splash: { tw: 0.3, th: 0.15, color: '#f3f2ee' } },
      { id: 'subway', name: '서브웨이 타일 (벽돌 쌓기)', grade: 0, price: 135000, q: 'kitWall', unit: '㎡', tags: ['트렌드'], splash: { tw: 0.15, th: 0.075, color: '#f1f0ec' } },
      { id: 'porcelain', name: '무광 포세린 600×1200', grade: 3, price: 150000, q: 'kitWall', unit: '㎡', splash: { tw: 0.6, th: 1.2, color: '#e3dfd8', vein: 1 } },
      { id: 'slab', name: '세라믹 슬랩 (상판과 같은 무늬)', grade: 4, price: 230000, q: 'kitWall', unit: '㎡', tags: ['프리미엄'], splash: { tw: 1.6, th: 3.2, color: '#e6e2dc', vein: 2 } },
      { id: 'glass', name: '백페인트 유리 (청소 쉬움)', grade: 0, price: 140000, q: 'kitWall', unit: '㎡', splash: { tw: 2, th: 2, color: '#e9ece9' } },
    ] },
  { id: 'upper', name: '상부장', icon: '🗃️', group: '주방·욕실', desc: '싱크대 위 수납',
    options: [
      { id: 'cab', name: '상부장 (기본)', grade: 1, price: 0, q: 'one', unit: '식' },
      { id: 'open', name: '오픈 선반 (상부장 없이 개방감)', grade: 0, price: 0, q: 'one', unit: '식', tags: ['트렌드'], pros: '주방이 넓어 보이고 그릇을 진열할 수 있습니다', cons: '먼지 관리가 필요합니다' },
      { id: 'none', name: '상부장 없음 (창 쪽 개방)', grade: 0, price: 0, q: 'one', unit: '식' },
    ] },
  { id: 'pendant', name: '식탁 조명', icon: '🏮', group: '주방·욕실', desc: '식탁·아일랜드 위 펜던트',
    options: [
      { id: 'none', name: '없음 (다운라이트만)', grade: 1, price: 0, q: 'one', unit: '식' },
      { id: 'black', name: '블랙 펜던트 2구', grade: 2, price: 260000, q: 'one', unit: '식' },
      { id: 'gold', name: '골드 펜던트 2구', grade: 3, price: 380000, q: 'one', unit: '식', tags: ['트렌드'] },
    ] },
  { id: 'lighting', name: '조명', icon: '🔆', group: '전기·조명', desc: '방마다 다르게 고를 수 있습니다 (공간별 꾸미기)',
    options: [
      { id: 'keep', name: '기존 유지', grade: 0, price: 0, q: 'floor', unit: '㎡' },
      { id: 'basic', name: 'LED 방등·거실등 교체', grade: 1, price: 9000, q: 'floor', unit: '㎡' },
      { id: 'edge', name: '슬림 엣지등 (얇은 사각 평판)', grade: 0, price: 13000, q: 'floor', unit: '㎡' },
      { id: 'down', name: '다운라이트 플랜 (매립)', grade: 2, price: 19000, q: 'floor', unit: '㎡', pros: '천장이 깔끔해지고 공간별로 빛을 조절할 수 있습니다' },
      { id: 'line', name: '라인조명 + 다운라이트', grade: 3, price: 32000, q: 'floor', unit: '㎡', tags: ['트렌드'] },
      { id: 'magnetic', name: '마그네틱 레일 조명', grade: 0, price: 38000, q: 'floor', unit: '㎡', tags: ['트렌드'], pros: '레일 위 조명을 자유롭게 옮기고 바꿀 수 있습니다' },
      { id: 'smart', name: '스마트 조명 (밝기·색온도 앱 제어)', grade: 4, price: 45000, q: 'floor', unit: '㎡', tags: ['신기술'], pros: '시간대·분위기에 맞춰 빛을 바꾸고 휴대폰으로 켜고 끕니다' },
    ] },
  { id: 'electric', name: '스위치·콘센트', icon: '🔌', group: '전기·조명', desc: '배선기구 교체',
    options: [
      { id: 'keep', name: '기존 유지', grade: 1, price: 0, q: 'sw', unit: 'EA' },
      { id: 'basic', name: '스위치·콘센트 교체 (일반형)', grade: 2, price: 14000, q: 'sw', unit: 'EA' },
      { id: 'design', name: '디자인 스위치·콘센트 (르그랑 동급)', grade: 3, price: 26000, q: 'sw', unit: 'EA' },
    ] },
  { id: 'balcony', name: '발코니·다용도실', icon: '🌿', group: '기타', desc: '남은 발코니와 다용도실 마감',
    options: [
      { id: 'keep', name: '기존 유지', grade: 1, price: 0, q: 'balc', unit: '㎡' },
      { id: 'coat', name: '탄성코트', grade: 2, price: 42000, q: 'balc', unit: '㎡', note: '바닥면적 기준(벽·천장 포함 환산)' },
      { id: 'tile', name: '탄성코트 + 바닥 타일', grade: 3, price: 125000, q: 'balc', unit: '㎡' },
      { id: 'deck', name: '탄성코트 + 합성데크', grade: 4, price: 135000, q: 'balc', unit: '㎡', mat: { type: 'deck' } },
    ] },
  { id: 'energy', name: '에너지·쾌적', icon: '♨️', group: '에너지·스마트', multi: true, desc: 'SMCT 신재생·냉난방 전문 — 관리비를 줄이는 선택',
    options: [
      { id: 'sysac', name: '시스템에어컨 (천장 매립형)', price: 1550000, q: 'ac', unit: '대', tags: ['SMCT 추천'], pros: '천장 매립으로 공간을 차지하지 않고 냉방 효율이 높습니다' },
      { id: 'insul', name: '내단열 보강 (이보드·결로 방지)', price: 48000, q: 'extWall', unit: '㎡', tags: ['신자재'], pros: '외벽 쪽 결로·곰팡이를 막고 난방 손실을 줄입니다' },
      { id: 'erv', name: '전열교환 환기장치', price: 2600000, q: 'one', unit: '식', pros: '창문을 열지 않고도 미세먼지를 거른 바깥 공기를 들입니다' },
      { id: 'boiler', name: '고효율 콘덴싱 보일러 교체', price: 1350000, q: 'one', unit: '식' },
      { id: 'solar', name: '베란다형 미니 태양광 (보조금 대상)', price: 650000, q: 'one', unit: '식', tags: ['SMCT 신재생'], pros: '지자체 보조금으로 부담을 낮추고 전기요금을 줄입니다' },
      { id: 'heatpump', name: '히트펌프 냉난방 연계 (별도 상담)', price: 0, q: 'one', unit: '식', tags: ['SMCT 신재생'], consult: true, pros: '공기열 히트펌프로 냉난방·급탕 에너지를 크게 줄이는 방식으로, 세대 조건 확인 후 설계합니다' },
      { id: 'smart', name: '스마트홈 IoT (조명·도어락·홈캠 연동)', price: 1600000, q: 'one', unit: '식' },
      { id: 'sound', name: '방음 보강 1실 (차음석고보드 + 흡음재)', price: 1900000, q: 'one', unit: '식', tags: ['신자재'], pros: '차음석고보드와 흡음재로 벽체 차음 성능을 높입니다' },
    ] },
];
const CAT = Object.fromEntries(CATALOG.map(c => [c.id, c]));
function optOf(catId, optId) { const c = CAT[catId]; return c && c.options.find(o => o.id === optId); }
function colorsFor(catId, optId) {
  const c = CAT[catId]; if (!c) return null;
  if (c.colorKey === 'byOption') { const o = optOf(catId, optId); return o && o.colors ? C[o.colors] : null; }
  return c.colorKey ? C[c.colorKey] : null;
}

/* ---------- 스타일 프리셋 ---------- */
const STYLES = [
  { id: 'modern', name: '모던 화이트', desc: '밝은 화이트 + 그레이 우드, 깔끔하고 넓어 보이는 기본기', sw: ['#f3f1ec', '#aba49a', '#2b2c2e'],
    tone: { floor: 'gray', wall: 'white', door: 'white', kitchen: 'white', bath: 'white', frame: 'white', mid: 'black', art: 'white' }, prefer: { artwall: 'porcelain', molding: 'minus' } },
  { id: 'natural', name: '내추럴 우드', desc: '오크 우드와 웜톤 벽, 편안하고 따뜻한 집', sw: ['#efe8dc', '#c39d6e', '#b98e62'],
    tone: { floor: 'natural', wall: 'warm', door: 'wood', kitchen: 'wood', bath: 'beige', frame: 'white', mid: 'bronze', art: 'wood' }, prefer: { artwall: 'tambour' } },
  { id: 'hotel', name: '호텔식 프리미엄', desc: '포세린·무몰딩·간접조명, 호텔 스위트 같은 완성도', sw: ['#d9d1c5', '#cfccc6', '#6f6d69'],
    tone: { floor: 'gray', wall: 'greige', door: 'gray', kitchen: 'warmgray', bath: 'dark', frame: 'black', mid: 'black', art: 'gray' }, prefer: { floor: 'porcelain', artwall: 'slab', ceilDesign: 'cove', molding: 'none', lighting: 'line' }, minGrade: 3 },
  { id: 'minimal', name: '미니멀 그레이', desc: '톤 다운 그레이와 선을 없앤 절제된 공간', sw: ['#dcdcda', '#aba49a', '#5b5b5b'],
    tone: { floor: 'gray', wall: 'gray', door: 'gray', kitchen: 'warmgray', bath: 'gray', frame: 'gray', mid: 'black', art: 'gray' }, prefer: { molding: 'none', artwall: 'none', ceilDesign: 'flat' } },
  { id: 'nordic', name: '북유럽 내추럴', desc: '화이트 애쉬 바닥과 그린 포인트, 산뜻한 감성', sw: ['#f3f1ec', '#e6ddcc', '#47594c'],
    tone: { floor: 'white', wall: 'white', door: 'white', kitchen: 'green', bath: 'terrazzo', frame: 'white', mid: 'white', art: 'natural' }, prefer: { artwall: 'veneer' } },
  { id: 'value', name: '실속형 (매매·임대 준비)', desc: '꼭 필요한 곳만, 비용 대비 효과가 큰 리폼 중심', sw: ['#f3f1ec', '#d8c3a0', '#f1efea'],
    tone: { floor: 'light', wall: 'white', door: 'white', kitchen: 'white', bath: 'white', frame: 'white', mid: 'black', art: 'white' }, prefer: {}, maxGrade: 2 },
];
const GRADES = [
  { g: 1, name: '실속', desc: '꼭 필요한 공정 위주' },
  { g: 2, name: '표준', desc: '가장 많이 선택하는 구성' },
  { g: 3, name: '고급', desc: '마감·자재 업그레이드' },
  { g: 4, name: '프리미엄', desc: '신자재·디자인 최상급' },
];
const PURPOSES = ['입주 전 리모델링', '노후 개선(올수리)', '매매 가치 상승', '임대용 실속 수리', '아이 방·성장 맞춤', '부모님 맞춤(안전)', '에너지·관리비 절감', '부분 수리', '반려동물 맞춤'];

/* ---------- 창호 브랜드 × 등급 (단가: 원/㎡, 재료+시공) ---------- */
const WIN_BRANDS = [
  { id: 'kcc', n: 'KCC글라스', lines: [
    { g: 2, n: '홈씨씨 윈도우 5i (보급형 이중창)', p: 350000 },
    { g: 3, n: '홈씨씨 윈도우 5n (고단열 로이 이중창)', p: 410000, tags: ['인기'] },
    { g: 4, n: '클렌체 Z300 (Al.Cap+PVC 발코니 확장용)', p: 620000 } ] },
  { id: 'eagon', n: '이건창호', lines: [
    { g: 2, n: '이건 PVC 발코니 이중창', p: 460000, note: '모델은 실측 때 확정' },
    { g: 3, n: 'PSS 185 LS (PVC 리프트&슬라이딩)', p: 550000 },
    { g: 4, n: 'ESS 240 PS (알루미늄 시스템창)', p: 850000 } ] },
  { id: 'lx', n: 'LX Z:IN', lines: [
    { g: 2, n: '수퍼세이브 (기본형 이중창)', p: 360000, note: '후속 모델로 대체될 수 있음' },
    { g: 3, n: '뷰프레임 (베젤리스 · 로이 1장 1등급)', p: 450000, tags: ['신제품'] },
    { g: 4, n: '알루미늄 시스템창호 (기밀 1등급)', p: 700000 } ] },
];
(function buildWindowOptions() {
  const cat = CAT.window; if (!cat) return;
  cat.brands = WIN_BRANDS.map(b => ({ id: b.id, n: b.n }));
  const base = cat.options.filter(o => o.id === 'keep' || o.id === 'film');
  const gradeTag = { 2: '표준', 3: '고급', 4: '프리미엄' };
  WIN_BRANDS.forEach(b => b.lines.forEach(l => base.push({
    id: b.id + '-' + l.g, brand: b.id, name: l.n, grade: l.g, price: l.p, q: 'win', unit: '㎡', tags: ['SMCT 직시공', gradeTag[l.g]].concat(l.tags || []), note: l.note,
    pros: l.pros || (l.g >= 4 ? '프레임이 얇고 기밀·단열 성능이 최상급이라 조망과 냉난방비 모두 좋아집니다' : '단열·기밀 성능이 좋아져 결로와 냉난방비가 줄어듭니다'),
    cons: l.g >= 4 ? '제작 기간이 2~3주 걸리고 비용이 높습니다' : '공사 당일 소음·분진이 있어 이웃 공지가 필요합니다' })));
  cat.options = base;
  cat.desc = 'SMCT 금속창호 면허 직시공 — KCC·이건·LX 중 브랜드를 고른 뒤 등급 선택';
})();

/* ---------- 욕실 세부 (개소별) — 공사 범위 기본가 + 업그레이드 추가금 ---------- */
const BATH = [
  { key: 'scope', label: '공사 범위', list: [
    { id: 'keep', n: '기존 유지', p: 0 },
    { id: 'partial', n: '도기·수전만 교체', p: 1700000, g: 1 },
    { id: 'overlay', n: '덧방 리모델링 (기존 타일 위 시공)', p: 3200000, g: 2, pros: '철거 없이 시공해 공기가 짧고 경제적입니다', cons: '방수층을 새로 만들지 않아 20년 이상 된 욕실엔 권하지 않습니다' },
    { id: 'full', n: '전체 철거 리모델링 (방수 2회·배관)', p: 4800000, g: 3, pros: '방수·배관까지 새로 해서 누수 걱정을 근본적으로 없앱니다' } ] },
  { key: 'wall', label: '벽 타일', needs: 'tile', colors: 'bath', list: [
    { id: 'w300', n: '300×600 유광 화이트', p: 0, g: 1, tile: { tw: 0.3, th: 0.6 } },
    { id: 'w600', n: '600×600 무광 포세린', p: 350000, g: 2, tile: { tw: 0.6, th: 0.6 } },
    { id: 'w1200', n: '600×1200 대형 포세린', p: 850000, g: 3, tile: { tw: 0.6, th: 1.2, vein: 1 }, tags: ['트렌드'] },
    { id: 'terrazzo', n: '테라조 포인트 + 무광 타일', p: 650000, tile: { tw: 0.6, th: 0.6, terrazzo: 1 }, tags: ['트렌드'] },
    { id: 'zellige', n: '젤리지(수제풍) 포인트 타일', p: 550000, tile: { tw: 0.1, th: 0.1 }, tags: ['트렌드'] },
    { id: 'ribbed', n: '리브드(골지) 포인트 벽 + 무광 타일', p: 480000, tile: { tw: 0.075, th: 0.6 }, tags: ['2026 트렌드'] },
    { id: 'slab', n: '세라믹 슬랩 통장', p: 1600000, g: 4, tile: { tw: 1.2, th: 2.4, vein: 2 }, tags: ['프리미엄'] } ] },
  { key: 'floor', label: '바닥 타일', needs: 'tile', list: [
    { id: 'f300', n: '300×300 논슬립', p: 0, g: 1, tile: { tw: 0.3, th: 0.3 } },
    { id: 'f600', n: '600×600 무광 포세린', p: 180000, g: 2, tile: { tw: 0.6, th: 0.6 } },
    { id: 'fterr', n: '테라조 패턴', p: 260000, tile: { tw: 0.6, th: 0.6, terrazzo: 1 }, tags: ['트렌드'] },
    { id: 'f1200', n: '600×1200 포세린', p: 320000, g: 4, tile: { tw: 0.6, th: 1.2 } } ] },
  { key: 'shower', label: '샤워 / 욕조', needs: 'tile', list: [
    { id: 'keep', n: '기존 형태 유지', p: 0, g: 1 },
    { id: 'tub', n: '매립 욕조', p: 450000 },
    { id: 'walkin', n: '워크인 샤워 (고정 유리 파티션)', p: 650000, g: 3, tags: ['트렌드'] },
    { id: 'booth', n: '슬라이딩 샤워부스 (천장 매립 레일)', p: 650000, g: 2 },
    { id: 'tub2shower', n: '욕조 철거 → 샤워부스 전환', p: 1100000, tags: ['인기'] } ] },
  { key: 'toilet', label: '양변기', list: [
    { id: 'basic', n: '투피스 양변기', p: 0, g: 1 },
    { id: 'one', n: '원피스 양변기 + 비데', p: 450000, g: 2 },
    { id: 'smart', n: '일체형 스마트 비데', p: 1200000, g: 3, tags: ['인기'] },
    { id: 'wall', n: '벽걸이 양변기', p: 1800000, g: 4, tags: ['호텔식'] } ] },
  { key: 'basin', label: '세면대', list: [
    { id: 'pedestal', n: '반다리 세면대', p: 0, g: 1 },
    { id: 'cabinet', n: '하부장 일체형 세면대', p: 350000, g: 2 },
    { id: 'topbowl', n: '탑볼 세면대 + 우드 하부장', p: 550000, g: 3, tags: ['트렌드'] },
    { id: 'jendai', n: '젠다이 + 언더카운터 세면대', p: 850000, g: 4, tags: ['호텔식'] },
    { id: 'dry', n: '건식 세면대 분리 (욕실 밖 파우더)', p: 1500000, tags: ['트렌드'] } ] },
  { key: 'faucet', label: '수전', list: [
    { id: 'chrome', n: '크롬', p: 0, g: 1, c: '#c9cbcd' },
    { id: 'black', n: '무광 블랙', p: 250000, g: 2, c: '#262628', tags: ['트렌드'] },
    { id: 'gunmetal', n: '건메탈', p: 300000, g: 3, c: '#5b5d60' },
    { id: 'gold', n: '브러시드 골드', p: 400000, c: '#b59a63' },
    { id: 'built', n: '매립 수전 세트 (설비 이동 포함)', p: 950000, g: 4, c: '#c9cbcd', tags: ['호텔식'] } ] },
  { key: 'storage', label: '수납·거울', list: [
    { id: 'slide', n: '기본 슬라이드 거울장', p: 0, g: 1 },
    { id: 'led', n: 'LED 거울 + 수납장', p: 350000, g: 2 },
    { id: 'round', n: '원형 거울 + 하부 수납', p: 300000, tags: ['트렌드'] },
    { id: 'niche', n: '벽 니치 선반 + 매립 수납장', p: 550000, g: 3, tags: ['트렌드'] } ] },
  { key: 'ceiling', label: '천장', needs: 'tile', list: [
    { id: 'smc', n: 'SMC 돔 천장', p: 0, g: 1 },
    { id: 'al', n: 'AL 평천장', p: 250000, g: 2 },
    { id: 'inno', n: '이노솔 평판 천장 (돔 없는 고급 천장재)', p: 400000, g: 3, tags: ['트렌드'] },
    { id: 'paint', n: '평천장 도장', p: 400000, g: 4, tags: ['호텔식'] } ] },
  { key: 'drain', label: '배수구', needs: 'tile', list: [
    { id: 'basic', n: '일반 배수구', p: 0, g: 1 },
    { id: 'line', n: '라인(슬림) 배수구', p: 90000, g: 3, tags: ['트렌드'] },
    { id: 'trench', n: '트렌치 배수구 (넓은 배수)', p: 220000 } ] },
  { key: 'extra', label: '추가 옵션', multi: true, list: [
    { id: 'heater', n: '욕실 난방기·환풍기', p: 450000 },
    { id: 'warmer', n: '수건 워머', p: 280000 },
    { id: 'safety', n: '안전 손잡이·미끄럼 방지', p: 180000 } ] },
];
const BATH_ITEM = Object.fromEntries(BATH.map(b => [b.key, b]));
const BATH_TRENDS = [
  { n: '호텔 그레이', d: '대형 포세린·젠다이·건메탈', v: { scope: 'full', wall: 'w1200', floor: 'f1200', shower: 'walkin', toilet: 'wall', basin: 'jendai', faucet: 'gunmetal', storage: 'niche', ceiling: 'inno', drain: 'line' }, tone: 'dark' },
  { n: '테라조 캐주얼', d: '테라조·탑볼·골드 수전', v: { scope: 'full', wall: 'terrazzo', floor: 'fterr', shower: 'walkin', toilet: 'smart', basin: 'topbowl', faucet: 'gold', storage: 'round', ceiling: 'al', drain: 'basic' }, tone: 'terrazzo' },
  { n: '화이트 클린', d: '무광 화이트·하부장·LED 거울', v: { scope: 'overlay', wall: 'w600', floor: 'f600', shower: 'booth', toilet: 'one', basin: 'cabinet', faucet: 'chrome', storage: 'led', ceiling: 'al', drain: 'basic' }, tone: 'white' },
  { n: '블랙 포인트', d: '라이트 그레이·블랙 수전·트렌치', v: { scope: 'full', wall: 'w1200', floor: 'f600', shower: 'walkin', toilet: 'smart', basin: 'topbowl', faucet: 'black', storage: 'led', ceiling: 'inno', drain: 'line' }, tone: 'gray' },
];
/* ---------- 방별 수납 ---------- */
const CLOSET = { label: '붙박이장·수납', colors: 'closet', list: [
  { id: 'none', n: '없음', p: 0 },
  { id: 'closet', n: '여닫이 붙박이장', p: 520000, g: 2 },
  { id: 'slide', n: '슬라이딩 붙박이장', p: 600000, g: 3 },
  { id: 'system', n: '오픈 시스템 옷장', p: 380000, tags: ['트렌드'] },
  { id: 'glass', n: '유리 도어 붙박이장 (브론즈)', p: 780000, g: 4, tags: ['프리미엄'] } ] };
C.closet = [{ n: '화이트', c: '#efede8', t: 'white' }, { n: '웜 그레이', c: '#c3bcb2', t: 'gray' }, { n: '오크', c: '#b78d62', t: 'wood' }, { n: '월넛', c: '#6c4b34', t: 'dark' }, { n: '브론즈 유리', c: '#7a6a58', t: 'bronze' }];
const DRESS = { label: '드레스룸', list: [{ id: 'none', n: '기존 유지', p: 0 }, { id: 'shelf', n: '시스템 선반', p: 380000, g: 2 }, { id: 'premium', n: '프리미엄 시스템 + 조명', p: 560000, g: 4 }] };
/* ---------- 가구 선택 ---------- */
const FURN_CHOICE = {
  living: [{ key: 'sofa', label: '소파', list: ['sofa2', 'sofa3', 'sofa4', 'sofaL', 'modular'] }, { key: 'chair', label: '라운지체어', toggle: 1 }, { key: 'plant', label: '대형 화분', toggle: 1, def: true }],
  kitchen: [{ key: 'table', label: '식탁', list: ['dining4', 'dining6', 'round4', 'none'] }, { key: 'fridge', label: '냉장고 자리', toggle: 1, def: true }],
  master: [{ key: 'bed', label: '침대', list: ['bedQ', 'bedK', 'bedF', 'none'] }, { key: 'dresser', label: '화장대', toggle: 1 }],
  bed: [{ key: 'bed', label: '침대', list: ['bedS', 'bedSS', 'bedQ', 'bunk', 'none'] }, { key: 'desk', label: '책상', toggle: 1, def: true }],
};
/* ---------- 공간별 추천 조합 (원클릭) ---------- */
const TRENDS = {
  living: [
    { n: '호텔 라운지', d: '세라믹 슬랩 · 간접조명 · 포세린', g: { artwall: ['slab', 'gray'], ceilDesign: ['cove'] }, r: { floor: ['porcelain', 'gray'], wall: ['paint', 'greige'], lighting: ['line'] } },
    { n: '우드 갤러리', d: '템바보드 · 라인조명 · 오크', g: { artwall: ['tambour', 'wood'], ceilDesign: ['line'] }, r: { floor: ['engineered', 'natural'], wall: ['silk', 'warm'], lighting: ['line'] } },
    { n: '미니멀 화이트', d: '평탄화 · 다운라이트 · 화이트 애쉬', g: { artwall: ['none'], ceilDesign: ['flat'] }, r: { floor: ['engineered', 'white'], wall: ['paint', 'white'], lighting: ['down'] } },
    { n: '헤링본 클래식', d: '헤링본 · 무늬목 · 레일조명', g: { artwall: ['veneer', 'natural'], ceilDesign: ['flat'] }, r: { floor: ['herring', 'natural'], wall: ['fabric', 'beige'], lighting: ['magnetic'] } },
    { n: '라임워시 카페', d: '석회 도장 · 트래버틴 · 웜톤', g: { artwall: ['porcelain', 'natural'], ceilDesign: ['line'] }, r: { floor: ['stone', 'natural'], wall: ['limewash', 'warm'], lighting: ['down'] } },
  ],
  kitchen: [
    { n: '버터 크림', d: '핸들리스 무광 · 서브웨이 · 오픈 선반', g: { kitchen: ['handle', 'butter'], kwall: ['subway'], upper: ['open'], pendant: ['gold'] } },
    { n: '딥그린 포인트', d: '딥 그린 · 포세린 벽 · 블랙 펜던트', g: { kitchen: ['mid', 'green'], kwall: ['porcelain'], upper: ['cab'], pendant: ['black'] } },
    { n: '올화이트 빌트인', d: '도장 도어 · 슬랩 벽 · 빌트인', g: { kitchen: ['premium', 'white'], kwall: ['slab'], upper: ['cab'], pendant: ['none'] } },
    { n: '월넛 모던', d: '월넛 · 무광 포세린 · 블랙', g: { kitchen: ['handle', 'walnut'], kwall: ['porcelain'], upper: ['cab'], pendant: ['black'] } },
  ],
  master: [
    { n: '호텔 스위트', d: '패브릭 벽 · 원목 월넛 · 스마트 조명', r: { floor: ['wood', 'dark'], wall: ['fabric', 'greige'], lighting: ['smart'] } },
    { n: '내추럴 휴식', d: '라임워시 · 내추럴 오크 · 다운라이트', r: { floor: ['engineered', 'natural'], wall: ['limewash', 'warm'], lighting: ['down'] } },
    { n: '그레이 미니멀', d: '그레이 실크 · 웜 그레이 마루 · 엣지등', r: { floor: ['engineered', 'gray'], wall: ['silk', 'gray'], lighting: ['edge'] } },
  ],
  bed: [
    { n: '파스텔 키즈', d: '더스티 핑크 · 라이트 오크', r: { wall: ['silk', 'pink'], floor: ['engineered', 'light'], lighting: ['down'] } },
    { n: '민트 스터디', d: '민트 · 화이트 애쉬', r: { wall: ['silk', 'mint'], floor: ['engineered', 'white'], lighting: ['edge'] } },
    { n: '스카이 블루', d: '스카이 · 내추럴 오크', r: { wall: ['silk', 'sky'], floor: ['engineered', 'natural'], lighting: ['down'] } },
    { n: '차분한 그레이지', d: '그레이지 · 웜 그레이', r: { wall: ['silk', 'greige'], floor: ['engineered', 'gray'], lighting: ['down'] } },
  ],
};
const ROOM_KIND = t => ({ living: 'living', kitchen: 'kitchen', dining: 'kitchen', master: 'master', bed: 'bed', study: 'bed', bath: 'bath', bath2: 'bath', mbath: 'bath', entry: 'entry', dress: 'dress', balcony: 'balcony', util: 'balcony' })[t] || null;
/* =====================================================================
   v0.3 자재 카탈로그 확장 — 실제 판매 제품(인기순) · 필름 리폼 · 주방 상판
   PRODUCTS 는 products.js (조사 자료에서 생성) 에서 온다
   ===================================================================== */
(function extendCatalog() {
  const P = (typeof PRODUCTS !== 'undefined') ? PRODUCTS : {};
  const pal = (key, fb) => { if (P[key] && P[key].length) { C[key] = P[key]; return key; } return fb; };
  const set = (catId, optId, key) => { const o = optOf(catId, optId); if (o) o.colors = key; };
  // 바닥 — 옵션별 실제 제품
  set('floor', 'keep', 'woodF');
  set('floor', 'vinyl', pal('vinylP', 'woodF'));
  set('floor', 'laminate', pal('lamP', 'woodF'));
  set('floor', 'engineered', pal('kangP', 'woodF'));
  set('floor', 'spc', pal('spcP', 'woodF'));
  set('floor', 'herring', pal('herrP', pal('kangP', 'woodF')));
  set('floor', 'wood', pal('woodP', 'woodF'));
  set('floor', 'stone', pal('stoneP', 'stoneF'));
  set('floor', 'porcelain', pal('porcP', 'stoneF'));
  // 벽 — 합지·실크·도장 각각 실제 품번
  CAT.wall.colorKey = 'byOption';
  set('wall', 'keep', 'wall');
  set('wall', 'paper', pal('wpHapji', 'wall'));
  set('wall', 'silk', pal('wpSilk', 'wall'));
  set('wall', 'fabric', pal('wpFabric', pal('wpSilk', 'wall')));
  set('wall', 'paint', pal('paintP', 'wall'));
  set('wall', 'limewash', 'wall');
  // 실내 문 — 필름 리폼은 실제 필름 품번
  CAT.door.colorKey = 'byOption';
  CAT.door.options.forEach(o => { if (!o.colors) o.colors = 'door'; });
  set('door', 'film', pal('filmP', 'door'));
  // 주방 — 필름 리폼은 실제 필름 품번
  CAT.kitchen.colorKey = 'byOption';
  CAT.kitchen.options.forEach(o => { if (!o.colors) o.colors = 'kitchen'; });
  set('kitchen', 'film', pal('filmP', 'kitchen'));
  const filmKey = pal('filmP', 'door');
  // 새 품목: 필름 리폼 (붙박이장·신발장·몰딩·창틀)
  const film = { id: 'film', name: '인테리어 필름 리폼', icon: '🎞️', group: '목공·도어', colorKey: 'byOption',
    desc: '철거 없이 붙박이장·신발장·몰딩·창틀을 새것처럼 — LX 베니프 · 현대L&C 보닥 실제 품번',
    options: [
      { id: 'none', name: '필름 시공 안 함', grade: 1, price: 0, q: 'one', unit: '식' },
      { id: 'furn', name: '붙박이장·신발장 문짝 필름', grade: 0, colors: filmKey, lines: [{ name: '붙박이장·신발장 문짝 필름', q: 'filmFurn', unit: 'm', price: (P.filmPrice || {}).furn || 95000 }], pros: '가구를 바꾸지 않고 색만 바꿔 비용이 1/3 수준입니다', cons: '모서리·손잡이 주변은 오래 쓰면 들뜰 수 있습니다' },
      { id: 'trim', name: '몰딩·창틀·걸레받이 필름', grade: 0, colors: filmKey, lines: [{ name: '몰딩·창틀·걸레받이 필름', q: 'filmTrim', unit: 'm', price: (P.filmPrice || {}).trim || 12000 }] },
      { id: 'all', name: '붙박이장·신발장 + 몰딩·창틀 전체', grade: 0, colors: filmKey, tags: ['리폼 패키지'], lines: [{ name: '붙박이장·신발장 문짝 필름', q: 'filmFurn', unit: 'm', price: (P.filmPrice || {}).furn || 95000 }, { name: '몰딩·창틀·걸레받이 필름', q: 'filmTrim', unit: 'm', price: (P.filmPrice || {}).trim || 12000 }] },
    ] };
  // 새 품목: 주방 상판 지정
  const ktop = { id: 'ktop', name: '주방 상판', icon: '🪨', group: '주방·욕실', colorKey: 'byOption',
    desc: '주방 가구 기본 상판에서 재질·색을 바꿀 때 — 금액은 추가분(1m 기준)',
    options: [
      { id: 'incl', name: '주방 가구에 포함된 상판 그대로', grade: 1, price: 0, q: 'kit', unit: 'm' },
      { id: 'acrylic', name: '인조대리석 상판 지정', grade: 0, price: (P.ctrPrice || {}).acrylic || 60000, q: 'kit', unit: 'm', colors: pal('ctrAcrylic', 'stoneF'), mat: { type: 'tile', tw: 3, th: 3, rough: 0.35 } },
      { id: 'quartz', name: '엔지니어드 스톤 (쿼츠) 상판', grade: 0, price: (P.ctrPrice || {}).quartz || 220000, q: 'kit', unit: 'm', colors: pal('ctrQuartz', 'stoneF'), tags: ['인기'], mat: { type: 'tile', tw: 3, th: 3, vein: 1, rough: 0.25 } },
      { id: 'ceramic', name: '세라믹 (포세린 슬랩) 상판', grade: 0, price: (P.ctrPrice || {}).ceramic || 380000, q: 'kit', unit: 'm', colors: pal('ctrCeramic', 'stoneF'), tags: ['프리미엄'], mat: { type: 'tile', tw: 3, th: 3, vein: 1, rough: 0.2 } },
    ] };
  const ins = (cat, after) => { const i = CATALOG.findIndex(c => c.id === after); CATALOG.splice(i + 1, 0, cat); CAT[cat.id] = cat; };
  ins(film, 'door'); ins(ktop, 'kitchen');
  // 욕실 — 실제 모델(인기순)을 일반형 앞에 둔다. as = 3D 모양용 일반형
  const FIN = { '크롬': '#c9cbcd', '블랙': '#2a2a2b', '골드': '#c9a65a', '라이트골드': '#d2b679', '니켈': '#b9b4a8', '건메탈': '#5b5d60', '그라파이트': '#4a4b4d', '화이트': '#efefec' };
  const finC = f => { for (const k of Object.keys(FIN).sort((a, b) => b.length - a.length)) if ((f || '').includes(k)) return FIN[k]; return '#c9cbcd'; };
  const addModels = (key, list, asOf) => { const it = BATH_ITEM[key]; if (!it || !list || !list.length) return; it.list = it.list.slice(0, 1).concat(list.map((x, i) => ({ id: key[0] + 'm' + i, n: `${x.b} ${x.n}`, p: x.p, g: 2, rank: i + 1, as: asOf(x), c: key === 'faucet' ? finC(x.fin) : undefined, full: x.full, u: x.u })), it.list.slice(1)); };
  addModels('toilet', P.toiletM, x => /직수|탱크리스/.test(x.full + x.n) ? 'smart' : /비데|스마트/.test(x.full) ? 'smart' : /벽걸이/.test(x.full) ? 'wall' : 'one');
  addModels('basin', P.basinM, x => /탑볼|볼/.test(x.full) ? 'topbowl' : /하부장|일체/.test(x.full) ? 'cabinet' : 'pedestal');
  addModels('faucet', P.faucetM, x => 'chrome');
  if (P.bathTile && P.bathTile.length) {
    BATH.splice(BATH.findIndex(b => b.key === 'wall') + 1, 0, { key: 'tileP', label: '타일 제품 지정 (실제 품번)', needs: 'tile', list: [{ id: 'auto', n: '위에서 고른 타일 종류·색상으로', p: 0 }].concat(P.bathTile.map((t, i) => Object.assign({ id: 'tp' + i, p: 0 }, t))) });
    BATH_ITEM.tileP = BATH.find(b => b.key === 'tileP');
  }
  if (P.bathCab && P.bathCab.length) {
    const st = BATH_ITEM.storage;
    if (st) { st.label = '욕실장 (실제 모델 · 인기순)'; st.list = P.bathCab.map((x, i) => ({ id: 'cab' + i, n: `${x.b} ${x.n}`, code: x.code, p: x.p, g: x.g || 2, led: x.led, rank: i + 1, u: x.u })).concat(st.list.map(x => Object.assign({}, x, { n: '일반형 · ' + x.n }))); }
  }
})();
/* =====================================================================
   평면 자동 생성 · 벽/문/창 계산 · 가구 배치 · SVG 도면 · 물량 산출
   좌표: x = 좌→우(m), y = 뒤(북, 현관쪽)→앞(남, 발코니쪽)(m)
   ===================================================================== */
const ROOM_NAME = { living: '거실', dining: '식당', hall: '복도', kitchen: '주방', master: '안방', bed: '침실', study: '알파룸', bath: '공용욕실', bath2: '욕실 2', mbath: '안방욕실', dress: '드레스룸', entry: '현관', balcony: '발코니', util: '다용도실' };
const GROUP = { living: 'ldk', dining: 'ldk', hall: 'ldk', kitchen: 'ldk', balcony: 'bal' };
const LIVE = ['living', 'dining', 'hall', 'kitchen', 'bed', 'study', 'master', 'dress'];
const BATHS = ['bath', 'bath2', 'mbath'];
const BAL_D = 1.4;

function genPlan(p) {
  const A = clamp(+p.A || 84, 30, 250);
  const B = clamp(+p.bays || 3, 2, 4);
  const R = clamp(+p.rooms || 3, 1, 5);
  const BA = clamp(+p.baths || 1, 1, 2);
  const balc = p.balcony || 'ext';
  const aspect = { 2: 1.05, 3: 1.45, 4: 1.8 }[B];
  const W = Math.sqrt(A * aspect), Dt = A / W;
  const Dc = 1.2, Df = (Dt - Dc) * 0.55, Db = Dt - Dc - Df;
  const yC = Db, yF = Db + Dc;
  const front = (B === 2 ? [['living', 3.9], ['master', 3.4]] : B === 3 ? [['bed', 2.9], ['living', 4.1], ['master', 3.5]] : [['bed', 2.8], ['bed', 2.8], ['living', 4.2], ['master', 3.6]]).map(f => f.slice());
  let extra = R - 1 - front.filter(f => f[0] === 'bed').length;
  if (extra < 0) { let k = -extra; for (const f of front) if (k > 0 && f[0] === 'bed') { f[0] = 'study'; k--; } extra = 0; }
  const sc = W / front.reduce((s, f) => s + f[1], 0);
  let xx = 0;
  const fr = front.map(f => { const w = f[1] * sc, o = { type: f[0], x0: xx, x1: xx + w }; xx += w; return o; });
  const master = fr.find(f => f.type === 'master');
  const mw = master.x1 - master.x0;
  const suiteItems = [];
  if (BA === 2) suiteItems.push('mbath');
  if (A >= 75) suiteItems.push('dress');
  const extraBeds = Array(extra).fill('bed');
  const MIN = { bed: 2.3, bath: 1.5, entry: 1.3, kitchen: 2.3, mbath: 1.5, dress: 0.9, bath2: 1.5 };
  const PREF = { bed: 2.8, bath: 2.0, entry: 1.6, kitchen: 3.4, mbath: 2.0, dress: 1.8, bath2: 1.9 };
  const sum = (a, t) => a.reduce((s, i) => s + t[i], 0);
  let mode = suiteItems.length ? 'suite' : 'shared';
  const leftItems = [...extraBeds, 'bath', 'entry', 'kitchen'];
  if (mode === 'suite' && sum(leftItems, MIN) > master.x0 + 0.01) mode = 'shared';
  const distribute = (items, x0, L) => {
    const sMin = sum(items, MIN), sPref = sum(items, PREF);
    let ws = items.map(i => PREF[i]);
    if (L >= sPref) {
      const ex = L - sPref, k = items.indexOf('kitchen');
      if (k >= 0 && items.length > 1) ws = ws.map((w, j) => j === k ? w + ex * 0.6 : w + ex * 0.4 / (items.length - 1));
      else ws = ws.map(w => w + ex / items.length);
    } else if (L >= sMin) { const t = (L - sMin) / (sPref - sMin); ws = items.map(i => MIN[i] + t * (PREF[i] - MIN[i])); }
    else ws = items.map(i => MIN[i] * L / sMin);
    let x = x0;
    return items.map((it, j) => { const o = { type: it, x0: x, x1: x + ws[j] }; x += ws[j]; return o; });
  };
  let back;
  if (mode === 'suite') {
    back = distribute(leftItems, 0, master.x0);
    let s;
    if (suiteItems.length === 2) { const mb = clamp(mw * 0.5, 1.5, 2.2); s = [{ type: 'dress', x0: master.x0, x1: master.x1 - mb }, { type: 'mbath', x0: master.x1 - mb, x1: master.x1 }]; }
    else if (suiteItems[0] === 'mbath') s = mw > 2.9 ? [{ type: 'dress', x0: master.x0, x1: master.x1 - 2.1 }, { type: 'mbath', x0: master.x1 - 2.1, x1: master.x1 }] : [{ type: 'mbath', x0: master.x0, x1: master.x1 }];
    else s = [{ type: 'dress', x0: master.x0, x1: master.x1 }];
    back = back.concat(s);
  } else {
    const b2 = BA === 2 ? ['bath2'] : [];
    let items;
    if (B === 2) items = ['kitchen', 'entry', 'bath', ...b2, ...extraBeds];
    else if (B === 3) items = ['bath', 'entry', 'kitchen', ...b2, ...extraBeds];
    else { const n = extraBeds.length; items = [...extraBeds.slice(0, Math.max(0, n - 1)), 'bath', 'entry', 'kitchen', ...b2, ...extraBeds.slice(Math.max(0, n - 1))]; }
    back = distribute(items, 0, W);
  }
  const rooms = []; let id = 0;
  const add = (type, x0, y0, x1, y1) => { const r = { id: 'r' + (id++), type, x0, y0, x1, y1 }; rooms.push(r); return r; };
  const extAll = balc === 'ext' || balc === 'newAll';
  const extLiving = extAll || balc === 'newLiving';
  fr.forEach(f => {
    const extended = f.type === 'living' ? extLiving : extAll;
    const r = add(f.type, f.x0, (f.type === 'master' && mode === 'suite') ? yC : yF, f.x1, Dt + (extended ? BAL_D : 0));
    r.extended = extended;
    r.newExt = extended && balc !== 'ext';
    if (!extended) add('balcony', f.x0, Dt, f.x1, Dt + BAL_D);
  });
  fr.forEach(f => { if (!(f.type === 'master' && mode === 'suite')) add(f.type === 'living' ? 'dining' : 'hall', f.x0, yC, f.x1, yF); });
  back.forEach(b => add(b.type, b.x0, 0, b.x1, Db));
  const k = rooms.find(r => r.type === 'kitchen');
  add('util', k.x0, -1.3, k.x1, 0);
  // 이어진 발코니 합치기
  const bals = rooms.filter(r => r.type === 'balcony').sort((a, b) => a.x0 - b.x0);
  for (let i = 1; i < bals.length; i++) { const p0 = bals[i - 1], p1 = bals[i]; if (Math.abs(p0.x1 - p1.x0) < 1e-6) { p1.x0 = p0.x0; rooms.splice(rooms.indexOf(p0), 1); } }
  // 이름 붙이기
  let bn = 2;
  rooms.filter(r => r.type === 'bed').sort((a, b) => (b.y0 - a.y0) || (a.x0 - b.x0)).forEach(r => r.name = '침실 ' + (bn++));
  rooms.forEach(r => { if (!r.name) r.name = ROOM_NAME[r.type]; });
  if (p.mirror) rooms.forEach(r => { const a = W - r.x1, b = W - r.x0; r.x0 = a; r.x1 = b; });
  rooms.forEach(r => { r.w = r.x1 - r.x0; r.h = r.y1 - r.y0; r.area = r.w * r.h; r.cx = (r.x0 + r.x1) / 2; r.cy = (r.y0 + r.y1) / 2; });
  const plan = { A, W, Dt, Db, Dc, yC, yF, B, R, BA, mode, balc, rooms, params: Object.assign({}, p) };
  buildSegs(plan); placeDoors(plan); placeWindows(plan); pickArtWall(plan); placeFurniture(plan, {}, {});
  return plan;
}

function roomAt(rooms, x, y) { for (const r of rooms) if (x > r.x0 + 1e-6 && x < r.x1 - 1e-6 && y > r.y0 + 1e-6 && y < r.y1 - 1e-6) return r; return null; }
function uniqSorted(a) { const s = a.map(v => Math.round(v * 1e5) / 1e5).sort((x, y) => x - y); return s.filter((v, i) => i === 0 || v - s[i - 1] > 1e-4); }
function buildSegs(plan) {
  const R = plan.rooms, e = 0.02;
  const xs = uniqSorted(R.flatMap(r => [r.x0, r.x1])), ys = uniqSorted(R.flatMap(r => [r.y0, r.y1]));
  const raw = [];
  const kind = (a, b) => {
    if (a === b || (!a && !b)) return null;
    if (a && b && GROUP[a.type] && GROUP[a.type] === GROUP[b.type]) return null;
    if (a && b && ((a.type === 'entry' && (b.type === 'hall' || b.type === 'dining')) || (b.type === 'entry' && (a.type === 'hall' || a.type === 'dining')))) return 'open';
    return 'wall';
  };
  for (const y of ys) for (let i = 0; i < xs.length - 1; i++) {
    const s0 = xs[i], s1 = xs[i + 1], m = (s0 + s1) / 2;
    const a = roomAt(R, m, y - e), b = roomAt(R, m, y + e), k = kind(a, b);
    if (k) raw.push({ o: 'h', c: y, s0, s1, a, b, kind: k });
  }
  for (const x of xs) for (let i = 0; i < ys.length - 1; i++) {
    const s0 = ys[i], s1 = ys[i + 1], m = (s0 + s1) / 2;
    const a = roomAt(R, x - e, m), b = roomAt(R, x + e, m), k = kind(a, b);
    if (k) raw.push({ o: 'v', c: x, s0, s1, a, b, kind: k });
  }
  raw.sort((p, q) => (p.o > q.o ? 1 : p.o < q.o ? -1 : 0) || (p.c - q.c) || (p.s0 - q.s0));
  const segs = [];
  for (const s of raw) {
    const last = segs[segs.length - 1];
    if (last && last.o === s.o && Math.abs(last.c - s.c) < 1e-4 && last.a === s.a && last.b === s.b && last.kind === s.kind && Math.abs(last.s1 - s.s0) < 1e-4) last.s1 = s.s1;
    else segs.push(Object.assign({}, s));
  }
  const outerish = r => !r || r.type === 'balcony' || r.type === 'util';
  segs.forEach((s, i) => { s.id = i; s.L = s.s1 - s.s0; s.ext = !s.a || !s.b; s.t = s.ext ? 0.2 : (outerish(s.a) || outerish(s.b)) ? 0.18 : 0.11; s.open = []; });
  plan.segs = segs;
}
function sharedSeg(plan, r, pred) {
  let best = null;
  for (const s of plan.segs) {
    if (s.kind !== 'wall') continue;
    const other = s.a === r ? s.b : s.b === r ? s.a : undefined;
    if (other === undefined || !pred(other)) continue;
    const free = s.L - s.open.reduce((t, o) => t + o.w, 0);
    if (!best || free > best.free) best = { s, other, free };
  }
  return best;
}
function placeDoors(plan) {
  plan.doors = [];
  const corr = o => o && (o.type === 'hall' || o.type === 'dining');
  const ldk = o => o && GROUP[o.type] === 'ldk';
  const DW = { bath: 0.75, bath2: 0.75, mbath: 0.75, dress: 0.8, util: 0.8, entry: 0.95 };
  const order = ['entry', 'master', 'bed', 'study', 'bath', 'bath2', 'mbath', 'dress', 'util'];
  plan.rooms.slice().sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type)).forEach(r => {
    let prefs;
    switch (r.type) {
      case 'bed': case 'study': case 'bath': case 'bath2': prefs = [corr, ldk]; break;
      case 'master': prefs = [corr, o => o && o.type === 'living']; break;
      case 'mbath': case 'dress': prefs = [o => o && o.type === 'master', o => o && o.type === 'dress', corr]; break;
      case 'util': prefs = [o => o && o.type === 'kitchen']; break;
      case 'entry': prefs = [o => o === null]; break;
      default: return;
    }
    for (const pr of prefs) {
      const f = sharedSeg(plan, r, pr);
      if (!f || f.free < 0.75) continue;
      const s = f.s;
      let w = Math.min(DW[r.type] || 0.85, s.L - 0.12);
      // 다른 개구부와 겹치지 않는 위치 찾기
      let cands = [s.s0 + 0.15 + w / 2, s.s1 - 0.15 - w / 2, (s.s0 + s.s1) / 2];
      if (r.type === 'util') cands = [cands[1], cands[0], cands[2]];
      let c = null;
      for (const cc of cands) {
        if (cc - w / 2 < s.s0 + 0.03 || cc + w / 2 > s.s1 - 0.03) continue;
        if (s.open.some(o => Math.abs(o.c - cc) < (o.w + w) / 2 + 0.1)) continue;
        c = cc; break;
      }
      if (c == null) continue;
      const d = { seg: s, c, w, room: r, other: f.other, kind: r.type === 'entry' ? 'front' : 'door', head: 2.1 };
      // 문이 열리는 방향(방 안쪽): a 쪽이면 -1, b 쪽이면 +1
      d.into = s.a === r ? -1 : 1;
      s.open.push({ type: 'door', c, w, bottom: 0, top: 2.1, ref: d });
      plan.doors.push(d); r.door = d;
      break;
    }
  });
}
function placeWindows(plan) {
  plan.windows = [];
  for (const s of plan.segs) {
    if (s.kind !== 'wall' || s.o !== 'h') continue;
    let rr, spec = null, L = s.L;
    if (!s.a || !s.b) {
      rr = s.a || s.b;
      switch (rr.type) {
        case 'living': spec = { sill: 0.05, head: 2.15, w: L - 0.3, big: 1 }; break;
        case 'bed': case 'study': case 'master': spec = { sill: 0.85, head: 2.1, w: Math.min(L - 0.5, L * 0.78) }; break;
        case 'kitchen': spec = { sill: 1.0, head: 2.0, w: Math.min(1.6, L - 0.6) }; break;
        case 'bath': case 'bath2': case 'mbath': spec = L >= 1.2 ? { sill: 1.5, head: 2.0, w: 0.6 } : null; break;
        case 'util': spec = { sill: 0.9, head: 2.1, w: L - 0.4 }; break;
        case 'balcony': spec = { sill: 0.9, head: 2.2, w: L - 0.3, outerBal: 1 }; break;
      }
    } else {
      const bal = s.a.type === 'balcony' ? s.a : s.b.type === 'balcony' ? s.b : null;
      if (!bal) continue;
      rr = bal === s.a ? s.b : s.a;
      spec = rr.type === 'living' ? { sill: 0.02, head: 2.1, w: L - 0.4, big: 1, inner: 1 } : { sill: 0.45, head: 2.1, w: Math.min(L - 0.5, L * 0.7), inner: 1 };
    }
    if (!spec || spec.w < 0.4) continue;
    let c = (s.s0 + s.s1) / 2;
    const clash = s.open.find(o => Math.abs(o.c - c) < (o.w + spec.w) / 2 + 0.1);
    if (clash) { spec.w = Math.min(spec.w, L - clash.w - 0.6); if (spec.w < 0.4) continue; c = clash.c < c ? s.s1 - 0.2 - spec.w / 2 : s.s0 + 0.2 + spec.w / 2; }
    const win = Object.assign({ seg: s, c, room: rr }, spec);
    s.open.push({ type: 'win', c, w: spec.w, bottom: spec.sill, top: spec.head, ref: win });
    plan.windows.push(win);
  }
}
function pickArtWall(plan) {
  const lv = plan.rooms.find(r => r.type === 'living');
  let best = null;
  for (const s of plan.segs) {
    if (s.kind !== 'wall' || s.o !== 'v') continue;
    const other = s.a === lv ? s.b : s.b === lv ? s.a : undefined;
    if (other === undefined) continue;
    const score = (other && (other.type === 'bed' || other.type === 'study') ? 2 : 1) + s.L * 0.1 - s.open.length;
    if (!best || score > best.score) best = { seg: s, score, side: s.a === lv ? -1 : 1 };
  }
  plan.art = best ? { seg: best.seg, side: best.side, L: best.seg.L, x: best.seg.c } : null;
}

/* ---------- 가구 (도면·3D 공통) ----------
   w = 정면 폭, d = 깊이 (rot 0 일 때 뒤쪽이 북쪽(-y)), rot = 0/90/180/270 (90 = 뒤쪽이 동쪽(+x)) */
const FURN = {
  sofa2: { n: '2인 소파', w: 1.6, d: 0.88, h: 0.82, g: 'sofa' }, sofa3: { n: '3인 소파', w: 2.1, d: 0.92, h: 0.82, g: 'sofa' },
  sofa4: { n: '4인 소파', w: 2.6, d: 0.95, h: 0.82, g: 'sofa' }, sofaL: { n: 'L형 카우치 소파', w: 2.6, d: 1.6, h: 0.82, g: 'sofa' },
  modular: { n: '모듈 소파(ㄷ자)', w: 2.8, d: 1.9, h: 0.75, g: 'sofa' },
  armchair: { n: '1인 라운지체어', w: 0.8, d: 0.82, h: 0.8, g: 'chair' }, ctable: { n: '소파 테이블', w: 1.1, d: 0.6, h: 0.38, g: 'table' },
  tvset: { n: 'TV장 + TV', w: 1.8, d: 0.42, h: 0.42, g: 'tv' }, rug: { n: '러그', w: 2.0, d: 1.6, h: 0.01, g: 'rug' },
  dining4: { n: '4인 식탁', w: 1.4, d: 0.8, h: 0.73, g: 'dining' }, dining6: { n: '6인 식탁', w: 1.8, d: 0.9, h: 0.73, g: 'dining' },
  round4: { n: '원형 식탁', w: 1.1, d: 1.1, h: 0.73, g: 'dining' },
  bedS: { n: '싱글 침대', w: 1.0, d: 2.0, h: 0.45, g: 'bed' }, bedSS: { n: '슈퍼싱글 침대', w: 1.1, d: 2.0, h: 0.45, g: 'bed' },
  bedQ: { n: '퀸 침대', w: 1.5, d: 2.0, h: 0.45, g: 'bed' }, bedK: { n: '킹 침대', w: 1.6, d: 2.0, h: 0.45, g: 'bed' },
  bedF: { n: '패밀리 침대(K+SS)', w: 2.7, d: 2.0, h: 0.45, g: 'bed' }, bunk: { n: '2층 침대', w: 1.05, d: 2.05, h: 1.6, g: 'bed' },
  night: { n: '협탁', w: 0.45, d: 0.4, h: 0.5, g: 'box' }, desk: { n: '책상 + 의자', w: 1.2, d: 0.6, h: 0.73, g: 'desk' },
  shelf: { n: '책장', w: 0.8, d: 0.35, h: 1.9, g: 'box' }, dresser: { n: '화장대', w: 1.0, d: 0.45, h: 0.75, g: 'box' },
  wardrobe: { n: '옷장(이동식)', w: 1.2, d: 0.6, h: 2.0, g: 'box' }, plant: { n: '대형 화분', w: 0.5, d: 0.5, h: 1.3, g: 'plant' },
  piano: { n: '업라이트 피아노', w: 1.5, d: 0.6, h: 1.25, g: 'box' }, massage: { n: '안마의자', w: 0.8, d: 1.6, h: 1.1, g: 'box' },
  fridge: { n: '양문형 냉장고', w: 0.92, d: 0.9, h: 1.85, g: 'box' }, kimchi: { n: '김치냉장고', w: 0.7, d: 0.7, h: 0.9, g: 'box' },
  washer: { n: '세탁기', w: 0.68, d: 0.68, h: 0.95, g: 'box' }, dryer: { n: '건조기', w: 0.68, d: 0.68, h: 0.95, g: 'box' },
  island: { n: '아일랜드', w: 1.8, d: 0.9, h: 0.9, g: 'island' },
  // 고정 설비 (욕실·드레스룸 — 편집 불가)
  toilet: { n: '양변기', w: 0.42, d: 0.68, h: 0.42, g: 'fixed' }, vanity: { n: '세면대', w: 0.8, d: 0.5, h: 0.82, g: 'fixed' },
  tub: { n: '욕조', w: 0.75, d: 1.5, h: 0.55, g: 'fixed' }, shower: { n: '샤워부스', w: 0.9, d: 1.2, h: 2.0, g: 'fixed' },
  dsys: { n: '드레스 시스템 선반', w: 1.6, d: 0.5, h: 2.1, g: 'fixed' },
};
const FURN_ADDABLE = ['armchair', 'plant', 'shelf', 'desk', 'dresser', 'wardrobe', 'piano', 'massage', 'kimchi', 'rug', 'ctable', 'night', 'bedSS', 'dining4'];
function fp(f) { const s = (f.rot || 0) % 180 === 0; return { fw: s ? f.w : f.d, fd: s ? f.d : f.w }; }
function placeFurniture(plan, fsel, fx, opt) {
  fsel = fsel || {}; fx = fx || {}; opt = opt || {};
  const F = [], R = plan.rooms;
  const mk = (id, k, room, x, y, rot, extra) => { const L = FURN[k]; if (!L) return null; const f = Object.assign({ id, k, room, x, y, rot: rot || 0, w: L.w, d: L.d, h: L.h }, extra || {}); F.push(f); return f; };
  const fs = key => fsel[key] || {};
  const lv = R.find(r => r.type === 'living'), dn = R.find(r => r.type === 'dining'), kt = R.find(r => r.type === 'kitchen');
  plan.closets = {};
  // 거실
  if (lv) {
    const y0 = plan.yF, y1 = lv.y1, cy = (y0 + y1) / 2, s = fs(lv.name);
    const tvLeft = plan.art ? plan.art.x <= lv.cx : true;
    const sk = s.sofa || 'sofa3', SL = FURN[sk];
    mk(lv.name + ':tv', 'tvset', lv.name, tvLeft ? lv.x0 + 0.23 : lv.x1 - 0.23, cy, tvLeft ? 270 : 90);
    const sx = tvLeft ? lv.x1 - SL.d / 2 - 0.05 : lv.x0 + SL.d / 2 + 0.05;
    mk(lv.name + ':sofa', sk, lv.name, sx, cy, tvLeft ? 90 : 270);
    const tvFront = tvLeft ? lv.x0 + 0.44 : lv.x1 - 0.44, sofaFront = tvLeft ? sx - SL.d / 2 : sx + SL.d / 2;
    const mid = (tvFront + sofaFront) / 2 + (tvLeft ? 0.15 : -0.15);
    if (s.rug !== false) mk(lv.name + ':rug', 'rug', lv.name, mid, cy, 90);
    if (s.ctable !== false) mk(lv.name + ':ctable', 'ctable', lv.name, mid + (tvLeft ? 0.1 : -0.1), cy, 90);
    if (s.chair) mk(lv.name + ':chair', 'armchair', lv.name, mid, Math.min(y1 - 0.55, cy + 1.25), 180);
    if (s.plant !== false) mk(lv.name + ':plant', 'plant', lv.name, tvLeft ? lv.x0 + 0.35 : lv.x1 - 0.35, y1 - 0.4, 0);
  }
  // 주방 · 식탁
  if (kt) {
    const util = R.find(r => r.type === 'util');
    let a = kt.x0 + 0.05, b = kt.x1 - 0.05;
    if (util && util.door) { const dc = util.door.c, dw = util.door.w / 2 + 0.08; if (dc - kt.cx < 0) a = Math.max(a, dc + dw); else b = Math.min(b, dc - dw); }
    const s = fs(kt.name);
    if (s.fridge !== false && b - a > 2.4) { mk(kt.name + ':fridge', 'fridge', kt.name, a + 0.46, kt.y0 + 0.46, 0); a += 0.96; }
    plan.kitchenRun = { x0: a, x1: b, y0: kt.y0, depth: 0.6 };
    let leg = 0;
    const rightWall = plan.segs.find(sg => sg.o === 'v' && sg.kind === 'wall' && Math.abs(sg.c - kt.x1) < 1e-3 && sg.s0 <= kt.y0 + 0.6 && sg.s1 >= kt.y1 - 0.01);
    if (kt.h >= 2.2 && rightWall) leg = Math.min(1.3, kt.h - 1.0);
    plan.kitchenLeg = leg;
    plan.kitLen = (b - a) + leg + (s.fridge !== false ? 0 : 0);
    const isl = opt.island;
    const tk = s.table || 'dining4';
    const dx = clamp(dn ? dn.cx : kt.cx, kt.x0 + 0.9, kt.x1 - 0.9);
    if (isl) {
      mk(kt.name + ':island', 'island', kt.name, clamp(kt.cx, kt.x0 + 1.0, kt.x1 - 1.0), kt.y1 - 0.5, 0, { fixedKitchen: 1 });
      if (s.table !== 'none') mk(kt.name + ':table', tk, kt.name, dn ? dn.cx : dx, (dn ? dn.cy : plan.yC + 0.6), 0);
    } else if (s.table !== 'none') mk(kt.name + ':table', tk, kt.name, dx, plan.yC + 0.05, 0);
  }
  // 침실 · 안방 · 알파룸
  R.filter(r => r.type === 'master' || r.type === 'bed' || r.type === 'study').forEach(r => {
    const s = fs(r.name);
    const fy0 = r.type === 'master' && plan.mode === 'suite' ? plan.yF : r.y0;
    const cy = (Math.max(fy0, r.y0) + r.y1) / 2;
    let headRight = true;
    if (r.door) headRight = r.door.seg.o === 'v' ? r.door.seg.c < r.cx : r.door.c < r.cx;
    const backRoom = r.y1 <= plan.yC + 1e-3;
    const winY = backRoom ? r.y0 + 0.32 : r.y1 - 0.32, deskRot = backRoom ? 0 : 180;
    if (r.type === 'study') {
      mk(r.name + ':desk', 'desk', r.name, headRight ? r.x1 - 0.65 : r.x0 + 0.65, winY, deskRot);
      mk(r.name + ':shelf', 'shelf', r.name, headRight ? r.x0 + 0.19 : r.x1 - 0.19, cy, headRight ? 270 : 90);
      return;
    }
    const bk = s.bed || (r.type === 'master' ? 'bedQ' : 'bedSS');
    if (bk !== 'none') {
      const BL = FURN[bk];
      const bx = headRight ? r.x1 - BL.d / 2 - 0.03 : r.x0 + BL.d / 2 + 0.03;
      mk(r.name + ':bed', bk, r.name, bx, cy, headRight ? 90 : 270);
      if (r.type === 'master' && s.night !== false) {
        mk(r.name + ':night1', 'night', r.name, headRight ? r.x1 - 0.24 : r.x0 + 0.24, cy - BL.w / 2 - 0.3, headRight ? 90 : 270);
        mk(r.name + ':night2', 'night', r.name, headRight ? r.x1 - 0.24 : r.x0 + 0.24, cy + BL.w / 2 + 0.3, headRight ? 90 : 270);
      }
    }
    if (r.type === 'bed' && s.desk !== false) mk(r.name + ':desk', 'desk', r.name, headRight ? r.x0 + 0.65 : r.x1 - 0.65, winY, deskRot);
    if (r.type === 'master' && s.dresser) mk(r.name + ':dresser', 'dresser', r.name, headRight ? r.x0 + 0.24 : r.x1 - 0.24, r.y1 - 0.75, headRight ? 270 : 90);
    // 붙박이장 자리 (안쪽 벽, 창 반대쪽 끝)
    const len = clamp((r.y1 - Math.max(fy0, r.y0)) - 1.4, 1.2, r.type === 'master' ? 2.4 : 1.8);
    plan.closets[r.name] = { x: headRight ? r.x0 + 0.3 : r.x1 - 0.3, y: backRoom ? r.y1 - 0.1 - len / 2 : Math.max(fy0, r.y0) + 0.1 + len / 2, len, rot: headRight ? 270 : 90 };
  });
  // 욕실 (고정)
  R.filter(r => BATHS.includes(r.type)).forEach(r => {
    const b = fs(r.name);
    const toFront = r.door && r.door.seg.o === 'h' && Math.abs(r.door.seg.c - r.y1) < 1e-3;
    const wy = toFront ? r.y0 : r.y1, sg = toFront ? 1 : -1, rot = toFront ? 0 : 180;
    mk(r.name + ':toilet', 'toilet', r.name, r.x0 + 0.35, wy + sg * 0.36, rot, { w: 0.42, d: 0.68, h: 0.42, fixed: 1, v: b.toilet });
    if (r.w >= 1.85) mk(r.name + ':vanity', 'vanity', r.name, r.cx + 0.12, wy + sg * 0.26, rot, { w: Math.min(0.9, r.w - 1.25), d: 0.5, h: 0.82, fixed: 1, v: b.basin });
    else mk(r.name + ':vanity', 'vanity', r.name, r.x0 + 0.24, wy + sg * 1.12, 270, { w: 0.62, d: 0.46, h: 0.82, fixed: 1, v: b.basin }); // 좁은 욕실: 옆벽 세면대
    const tub = b.shower === 'tub' || b.shower === 'keep';
    mk(r.name + ':shower', tub ? 'tub' : 'shower', r.name, r.x1 - (tub ? 0.4 : 0.47), r.cy, 0, { w: tub ? 0.75 : 0.9, d: Math.min(tub ? 1.5 : 1.2, r.h - 0.35), h: tub ? 0.55 : 2.0, fixed: 1, v: b.shower });
  });
  R.filter(r => r.type === 'dress').forEach(r => { mk(r.name + ':sys1', 'dsys', r.name, r.cx, r.y0 + 0.28, 0, { w: r.w - 0.2, d: 0.5, h: 2.1, fixed: 1 }); if (r.w > 1.4) mk(r.name + ':sys2', 'dsys', r.name, r.x0 + 0.28, r.cy + 0.25, 270, { w: r.h - 0.9, d: 0.5, h: 2.1, fixed: 1 }); });
  R.filter(r => r.type === 'entry').forEach(r => { plan.shoeSpot = { x: r.x0 + 0.2, y: r.cy, len: Math.min(r.h - 0.3, 1.8) }; });
  R.filter(r => r.type === 'util').forEach(r => { mk(r.name + ':washer', 'washer', r.name, r.x1 - 0.45, r.cy, 0); mk(r.name + ':dryer', 'dryer', r.name, r.x1 - 1.18, r.cy, 0); });
  // 사용자 편집 반영
  const del = new Set(fx.del || []);
  let out = F.filter(f => !del.has(f.id));
  (fx.add || []).forEach(a => { const L = FURN[a.k]; if (L && R.some(r => r.name === a.room)) out.push(Object.assign({ w: L.w, d: L.d, h: L.h }, a)); });
  const mv = fx.mv || {};
  out.forEach(f => { const m = mv[f.id]; if (m && !f.fixed) { f.x = m.x; f.y = m.y; f.rot = m.rot != null ? m.rot : f.rot; } });
  plan.furn = out;
  if (kt && !plan.dineSpot) plan.dineSpot = { x: kt.cx, y: plan.yC };
  return out;
}
function planTypes(A, base) {
  // 같은 평형에서 고를 수 있는 평면 타입들
  const t = [];
  const add = (id, name, desc, p) => t.push({ id, name, desc, p: Object.assign({ A }, p) });
  if (A >= 70) {
    add('A', '판상형 4Bay', '앞쪽 4칸, 가장 많은 구조', { bays: 4, rooms: base.rooms || 3, baths: 2 });
    add('B', '판상형 3Bay', '거실·안방이 넓은 구조', { bays: 3, rooms: base.rooms || 3, baths: 2 });
    add('C', '4Bay 알파룸형', '방 하나를 서재·알파룸으로', { bays: 4, rooms: Math.max(2, (base.rooms || 3) - 1), baths: 2 });
    add('D', '4Bay 반전형', 'A형 좌우 반대 배치', { bays: 4, rooms: base.rooms || 3, baths: 2, mirror: true });
  } else if (A >= 55) {
    add('A', '판상형 3Bay', '24평형 대표 구조', { bays: 3, rooms: 3, baths: 2 });
    add('B', '3Bay 욕실 1개', '욕실 하나, 주방이 넓은 구조', { bays: 3, rooms: 3, baths: 1 });
    add('C', '3Bay 2룸형', '방 2개 + 넓은 거실', { bays: 3, rooms: 2, baths: 1 });
    add('D', '3Bay 반전형', 'A형 좌우 반대 배치', { bays: 3, rooms: 3, baths: 2, mirror: true });
  } else {
    add('A', '2Bay 2룸', '소형 대표 구조', { bays: 2, rooms: 2, baths: 1 });
    add('B', '3Bay 2룸', '앞쪽에 방 2개', { bays: 3, rooms: 2, baths: 1 });
    add('C', '2Bay 1룸', '거실 중심 원룸형', { bays: 2, rooms: 1, baths: 1 });
    add('D', '2Bay 반전형', 'A형 좌우 반대 배치', { bays: 2, rooms: 2, baths: 1, mirror: true });
  }
  return t;
}

/* ---------- 물량 산출 ---------- */
function calcQty(plan) {
  const H = CFG.CEIL_H, R = plan.rooms;
  const area = t => R.filter(r => t.includes(r.type)).reduce((s, r) => s + r.area, 0);
  const Q = {};
  Q.area = R.filter(r => r.type !== 'balcony' && r.type !== 'util').reduce((s, r) => s + r.area, 0);
  Q.floor = area(LIVE);
  Q.entry = area(['entry']);
  Q.ceil = Q.floor + Q.entry;
  Q.livCeil = area(['living', 'dining']);
  Q.balc = area(['balcony', 'util']);
  let mold = 0, wall = 0, ext = 0;
  Q.wallBy = {}; Q.floorBy = {}; Q.bathWall = {};
  R.forEach(r => { Q.floorBy[r.name] = r.area; });
  for (const s of plan.segs) {
    if (s.kind !== 'wall') continue;
    const openA = s.open.reduce((t, o) => t + o.w * (o.top - o.bottom), 0);
    for (const side of [s.a, s.b]) {
      if (!side) continue;
      if (BATHS.includes(side.type)) { Q.bathWall[side.name] = (Q.bathWall[side.name] || 0) + s.L * H - openA; continue; }
      if (!LIVE.includes(side.type)) continue;
      mold += s.L; wall += s.L * H - openA;
      const isArt = plan.art && s === plan.art.seg && side.type === 'living';
      if (!isArt) Q.wallBy[side.name] = (Q.wallBy[side.name] || 0) + s.L * H - openA;
      const other = side === s.a ? s.b : s.a;
      if (!other || other.type === 'balcony' || other.type === 'util') ext += s.L * H - openA;
    }
  }
  Q.art = plan.art ? plan.art.L * H : 0;
  Q.mold = mold;
  Q.wall = Math.max(0, wall - Q.art);
  Q.wallAll = wall;
  Q.extWall = ext;
  Q.doors = plan.doors.filter(d => d.kind === 'door').length;
  Q.win = plan.windows.reduce((t, w) => t + w.w * (w.head - w.sill), 0);
  Q.kit = plan.kitLen || 3;
  Q.kitWall = Q.kit * 0.62;
  Q.baths = R.filter(r => BATHS.includes(r.type)).length;
  Q.closetBy = {}; Object.entries(plan.closets || {}).forEach(([k, v]) => Q.closetBy[k] = v.len);
  const mr = R.find(r => r.type === 'master');
  Q.closetM = mr && plan.closets && plan.closets[mr.name] ? plan.closets[mr.name].len : 2.4;
  Q.closetB = R.filter(r => r.type === 'bed').reduce((t, r) => t + ((plan.closets || {})[r.name] || { len: 1.8 }).len, 0);
  const dr = R.find(r => r.type === 'dress');
  Q.dressM = dr ? dr.w + dr.h : 0;
  Q.filmFurn = r1((Q.closetM || 0) + (Q.closetB || 0) + (plan.shoeSpot ? plan.shoeSpot.len : 1.2));
  Q.filmTrim = Math.round(Q.mold + plan.windows.reduce((t, w) => t + 2 * (w.w + (w.head - w.sill)), 0));
  Q.ac = 1 + R.filter(r => r.type === 'bed' || r.type === 'master').length;
  Q.sw = Math.round(Q.area * 0.45);
  Q.extAdd = R.filter(r => r.newExt).reduce((s, r) => s + r.w * BAL_D, 0);
  Q.one = 1;
  Q.rooms = R.filter(r => r.type === 'bed' || r.type === 'master').length;
  return Q;
}

/* ---------- SVG 도면 ---------- */
function lighten(hex, k) { const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255; r = Math.round(r + (255 - r) * k); g = Math.round(g + (255 - g) * k); b = Math.round(b + (255 - b) * k); return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); }
function planSVG(plan, look, opt) {
  opt = opt || {};
  const S = 50, pad = 1.3;
  const minY = Math.min(...plan.rooms.map(r => r.y0)), maxY = Math.max(...plan.rooms.map(r => r.y1));
  const X = x => ((x + pad) * S), Y = y => ((y - minY + pad) * S);
  const vw = (plan.W + pad * 2) * S, vh = (maxY - minY + pad * 2) * S;
  const fill = r => {
    if (look) {
      if (look.roomFill) { const c = look.roomFill(r); if (c) return c; }
      if (LIVE.includes(r.type)) return lighten(look.floor, 0.45);
      if (BATHS.includes(r.type)) return lighten(look.bath, 0.35);
      if (r.type === 'entry') return '#dcd8d2';
    }
    return { balcony: '#e8ece4', util: '#e6e6e2', entry: '#e3dfd9', bath: '#dbe5ea', bath2: '#dbe5ea', mbath: '#dbe5ea' }[r.type] || '#f3eee6';
  };
  let g = '';
  g += `<defs><pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#c8cdc2" stroke-width="2"/></pattern></defs>`;
  g += `<rect x="0" y="0" width="${vw}" height="${vh}" fill="#fbfaf7"/>`;
  for (const r of plan.rooms) {
    g += `<rect x="${X(r.x0)}" y="${Y(r.y0)}" width="${r.w * S}" height="${r.h * S}" fill="${fill(r)}" data-room="${r.id}" class="pr"/>`;
    if (r.type === 'balcony' || r.type === 'util') g += `<rect x="${X(r.x0)}" y="${Y(r.y0)}" width="${r.w * S}" height="${r.h * S}" fill="url(#hatch)" opacity=".55" pointer-events="none"/>`;
  }
  // 주방 상판 (ㄱ자 포함)
  if (plan.kitchenRun) {
    const k = plan.kitchenRun, kt = plan.rooms.find(r => r.type === 'kitchen');
    g += `<rect x="${X(k.x0)}" y="${Y(k.y0)}" width="${(k.x1 - k.x0) * S}" height="${k.depth * S}" fill="#efe9de" stroke="#9c8f7c" stroke-width="1" pointer-events="none"/>`;
    g += `<line x1="${X(k.x0)}" y1="${Y(k.y0 + k.depth - 0.04)}" x2="${X(k.x1)}" y2="${Y(k.y0 + k.depth - 0.04)}" stroke="#9c8f7c" stroke-width=".6" pointer-events="none"/>`;
    if (plan.kitchenLeg > 0 && kt) g += `<rect x="${X(kt.x1 - 0.65)}" y="${Y(kt.y0 + 0.6)}" width="${0.6 * S}" height="${plan.kitchenLeg * S}" fill="#efe9de" stroke="#9c8f7c" stroke-width="1" pointer-events="none"/>`;
    const sx = X((k.x0 + k.x1) / 2), sy = Y(k.y0 + 0.3);
    g += `<rect x="${sx - 0.36 * S}" y="${sy - 0.2 * S}" width="${0.72 * S}" height="${0.4 * S}" rx="4" fill="#fff" stroke="#9c8f7c" stroke-width=".8" pointer-events="none"/>`;
    g += `<circle cx="${X(k.x0 + 0.45)}" cy="${sy - 0.1 * S}" r="${0.1 * S}" fill="none" stroke="#9c8f7c" stroke-width=".8" pointer-events="none"/><circle cx="${X(k.x0 + 0.45)}" cy="${sy + 0.12 * S}" r="${0.08 * S}" fill="none" stroke="#9c8f7c" stroke-width=".8" pointer-events="none"/>`;
  }
  // 가구
  if (!opt.noFurn) for (const f of plan.furn) {
    const { fw, fd } = fp(f), x0 = X(f.x - fw / 2), y0 = Y(f.y - fd / 2), sel = opt.selFid === f.id, ed = opt.edit && !f.fixed && !f.fixedKitchen;
    const st = f.k === 'rug' ? 'fill="#e9e1d4" stroke="none" opacity=".75"' : (f.k === 'shower') ? 'fill="none" stroke="#8fb1c4" stroke-width="1.5" stroke-dasharray="4 3"' : `fill="${sel ? '#fff3cf' : '#fff'}" fill-opacity="${sel ? 1 : .6}" stroke="${sel ? '#b8952a' : '#b6ab9b'}" stroke-width="${sel ? 2.5 : 1}"`;
    g += `<g ${ed ? `class="fz" data-fid="${esc(f.id)}" style="cursor:move"` : 'pointer-events="none"'}><rect x="${x0}" y="${y0}" width="${fw * S}" height="${fd * S}" rx="${f.k === 'toilet' ? 8 : 3}" ${st}/>`;
    if (f.k !== 'rug' && f.k !== 'shower') {
      const r = f.rot || 0, t = 3; // 등받이·헤드 쪽 표시
      const bx = r === 90 ? x0 + fw * S - t : x0, by = r === 0 ? y0 : r === 180 ? y0 + fd * S - t : y0;
      if (['sofa', 'bed', 'tv'].includes((FURN[f.k] || {}).g)) g += `<rect x="${r % 180 === 0 ? x0 : bx}" y="${r % 180 === 0 ? by : y0}" width="${r % 180 === 0 ? fw * S : t}" height="${r % 180 === 0 ? t : fd * S}" fill="#a8977e"/>`;
      if (opt.edit && fw * S > 46 && fd * S > 22 && FURN[f.k]) g += `<text x="${X(f.x)}" y="${Y(f.y) + 4}" text-anchor="middle" font-size="10" fill="#7d7264" pointer-events="none">${esc(FURN[f.k].n.split('(')[0].replace(' + ', '·'))}</text>`;
    }
    g += `</g>`;
  }
  // 벽
  for (const s of plan.segs) {
    if (s.kind !== 'wall') continue;
    const pieces = solidPieces(s);
    for (const [a, b] of pieces) {
      const ea = Math.abs(a - s.s0) < 1e-4 ? s.t / 2 : 0, eb = Math.abs(b - s.s1) < 1e-4 ? s.t / 2 : 0;
      const col = s.ext ? '#2e2f33' : '#4a4b50';
      if (s.o === 'h') g += `<rect x="${X(a - ea)}" y="${Y(s.c - s.t / 2)}" width="${(b - a + ea + eb) * S}" height="${s.t * S}" fill="${col}" pointer-events="none"/>`;
      else g += `<rect x="${X(s.c - s.t / 2)}" y="${Y(a - ea)}" width="${s.t * S}" height="${(b - a + ea + eb) * S}" fill="${col}" pointer-events="none"/>`;
    }
    for (const o of s.open) {
      if (o.type !== 'win') continue;
      const a = o.c - o.w / 2, b = o.c + o.w / 2;
      if (s.o === 'h') g += `<rect x="${X(a)}" y="${Y(s.c - s.t / 2)}" width="${o.w * S}" height="${s.t * S}" fill="#fff" stroke="#2e2f33" stroke-width="1.2"/><line x1="${X(a)}" y1="${Y(s.c)}" x2="${X(b)}" y2="${Y(s.c)}" stroke="#5aa0c8" stroke-width="2"/>`;
      else g += `<rect x="${X(s.c - s.t / 2)}" y="${Y(a)}" width="${s.t * S}" height="${o.w * S}" fill="#fff" stroke="#2e2f33" stroke-width="1.2"/>`;
    }
  }
  // 문 (여닫이 호)
  for (const d of plan.doors) {
    const s = d.seg, a = d.c - d.w / 2, sg = d.kind === 'front' ? -d.into : d.into;
    const R = d.w * S;
    if (s.o === 'h') {
      const hx = X(a), hy = Y(s.c), ey = hy + sg * R;
      g += `<line x1="${hx}" y1="${hy}" x2="${hx}" y2="${ey}" stroke="#7a6a55" stroke-width="2"/><path d="M ${hx} ${ey} A ${R} ${R} 0 0 ${sg > 0 ? 0 : 1} ${hx + R} ${hy}" fill="none" stroke="#a8977e" stroke-width="1" stroke-dasharray="3 2"/>`;
    } else {
      const hx = X(s.c), hy = Y(a), ex = hx + sg * R;
      g += `<line x1="${hx}" y1="${hy}" x2="${ex}" y2="${hy}" stroke="#7a6a55" stroke-width="2"/><path d="M ${ex} ${hy} A ${R} ${R} 0 0 ${sg > 0 ? 1 : 0} ${hx} ${hy + R}" fill="none" stroke="#a8977e" stroke-width="1" stroke-dasharray="3 2"/>`;
    }
  }
  // 현관-복도 개방부(중문 위치)
  for (const s of plan.segs) if (s.kind === 'open') {
    if (s.o === 'h') g += `<line x1="${X(s.s0)}" y1="${Y(s.c)}" x2="${X(s.s1)}" y2="${Y(s.c)}" stroke="#b8952a" stroke-width="2" stroke-dasharray="6 4"/>`;
    else g += `<line x1="${X(s.c)}" y1="${Y(s.s0)}" x2="${X(s.c)}" y2="${Y(s.s1)}" stroke="#b8952a" stroke-width="2" stroke-dasharray="6 4"/>`;
  }
  // 아트월 표시
  if (plan.art && look && look.artOn) { const s = plan.art.seg; g += `<rect x="${X(s.c + plan.art.side * 0.06) - 3}" y="${Y(s.s0)}" width="6" height="${s.L * S}" fill="#b8952a" opacity=".8" pointer-events="none"/>`; }
  if (opt.hl) for (const r of plan.rooms) if (opt.hl.includes(r.name)) g += `<rect x="${X(r.x0) + 3}" y="${Y(r.y0) + 3}" width="${r.w * S - 6}" height="${r.h * S - 6}" fill="rgba(184,149,42,.12)" stroke="#b8952a" stroke-width="4" pointer-events="none"/>`;
  // 라벨
  for (const r of plan.rooms) {
    if (r.type === 'hall' && r.area < 4) continue;
    const big = r.area >= 6 ? 15 : 12, sm = r.area >= 6 ? 11 : 9.5;
    const showA = !['hall', 'dining'].includes(r.type) && r.area >= 1.8;
    const ly = r.type === 'living' ? Y(r.y0 + r.h * 0.35) : Y(r.cy);
    g += `<text x="${X(r.cx)}" y="${ly - (showA ? 4 : -4)}" text-anchor="middle" font-size="${big}" font-weight="700" fill="#2b2a28" pointer-events="none">${esc(r.name)}</text>`;
    if (showA) g += `<text x="${X(r.cx)}" y="${ly + sm + 2}" text-anchor="middle" font-size="${sm}" fill="#7a746b" pointer-events="none">${r1(r.area)}㎡ · ${r1(pyeong(r.area))}평</text>`;
  }
  // 치수
  const ty = Y(minY) - 0.75 * S;
  g += `<line x1="${X(0)}" y1="${ty}" x2="${X(plan.W)}" y2="${ty}" stroke="#9a8f80" stroke-width="1"/><line x1="${X(0)}" y1="${ty - 6}" x2="${X(0)}" y2="${ty + 6}" stroke="#9a8f80"/><line x1="${X(plan.W)}" y1="${ty - 6}" x2="${X(plan.W)}" y2="${ty + 6}" stroke="#9a8f80"/>`;
  g += `<text x="${X(plan.W / 2)}" y="${ty - 6}" text-anchor="middle" font-size="12" fill="#6d665c">${(plan.W * 1000).toFixed(0)}</text>`;
  const lx = X(0) - 0.75 * S;
  g += `<line x1="${lx}" y1="${Y(0)}" x2="${lx}" y2="${Y(plan.Dt)}" stroke="#9a8f80" stroke-width="1"/><line x1="${lx - 6}" y1="${Y(0)}" x2="${lx + 6}" y2="${Y(0)}" stroke="#9a8f80"/><line x1="${lx - 6}" y1="${Y(plan.Dt)}" x2="${lx + 6}" y2="${Y(plan.Dt)}" stroke="#9a8f80"/>`;
  g += `<text x="${lx - 8}" y="${Y(plan.Dt / 2)}" text-anchor="middle" font-size="12" fill="#6d665c" transform="rotate(-90 ${lx - 8} ${Y(plan.Dt / 2)})">${(plan.Dt * 1000).toFixed(0)}</text>`;
  // 방위
  const nx = vw - 0.8 * S, ny = 0.75 * S;
  g += `<g transform="translate(${nx} ${ny})"><circle r="15" fill="#fff" stroke="#b8952a"/><path d="M0 -11 L5 5 L0 2 L-5 5 Z" fill="#b8952a"/><text y="27" text-anchor="middle" font-size="10" fill="#8a7a50">N</text></g>`;
  g += `<text x="${vw / 2}" y="${vh - 10}" text-anchor="middle" font-size="11" fill="#8a8277">▼ 남향(발코니)  ·  표준 평면 — 실측 후 확정</text>`;
  plan._svg = { S, pad, minY };
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vw.toFixed(0)} ${vh.toFixed(0)}" class="plan-svg" font-family="Noto Sans KR, sans-serif">${g}</svg>`;
}
function solidPieces(s) {
  const ops = s.open.slice().sort((a, b) => a.c - b.c);
  const out = []; let cur = s.s0;
  for (const o of ops) { const a = o.c - o.w / 2, b = o.c + o.w / 2; if (a > cur + 1e-4) out.push([cur, a]); cur = Math.max(cur, b); }
  if (s.s1 > cur + 1e-4) out.push([cur, s.s1]);
  return out;
}
/* =====================================================================
   3D 뷰어 — Three.js (필요할 때만 불러옴)
   렌더 모드 / 스케치업 모드, 전체 보기 / 방별 실내 시점
   ===================================================================== */
const V = { T: null, mode: 'render', view: 'overview', ceil: false, cut: false, roomId: null, meshes: [], ready: false };
async function loadThree() {
  if (V.T) return V.T;
  if (!V.loading) V.loading = (async () => {
    const T = await import('three');
    const oc = await import('three/addons/controls/OrbitControls.js');
    const re = await import('three/addons/environments/RoomEnvironment.js');
    try { V.RBox = (await import('three/addons/geometries/RoundedBoxGeometry.js')).RoundedBoxGeometry; } catch (e) { V.RBox = null; }
    try { const [ec, rp, ga, op] = await Promise.all([import('three/addons/postprocessing/EffectComposer.js'), import('three/addons/postprocessing/RenderPass.js'), import('three/addons/postprocessing/GTAOPass.js'), import('three/addons/postprocessing/OutputPass.js')]); V.FX = { EffectComposer: ec.EffectComposer, RenderPass: rp.RenderPass, GTAOPass: ga.GTAOPass, OutputPass: op.OutputPass }; } catch (e) { V.FX = null; }
    V.Orbit = oc.OrbitControls; V.RoomEnv = re.RoomEnvironment; V.T = T;
    return T;
  })();
  return V.loading;
}
async function initViewer(host) {
  const T = await loadThree();
  if (V.renderer) { if (V.renderer.domElement.parentNode !== host) host.appendChild(V.renderer.domElement); V.host = host; resizeViewer(); return; }
  const renderer = new T.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;
  renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = T.SRGBColorSpace;
  host.appendChild(renderer.domElement);
  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(48, 1, 0.03, 300);
  const controls = new V.Orbit(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  {
    // 방 안 시점은 카메라가 제자리라서 휠·두 손가락 확대가 안 되던 문제 → 화각으로 확대·축소
    const el = renderer.domElement, zoomFov = k => { camera.fov = Math.max(24, Math.min(84, camera.fov * k)); camera.updateProjectionMatrix(); };
    el.addEventListener('wheel', e => { if (V.view !== 'room') return; e.preventDefault(); e.stopPropagation(); zoomFov(e.deltaY > 0 ? 1.09 : 1 / 1.09); }, { passive: false, capture: true });
    const tp = new Map(); let td = 0;
    el.addEventListener('pointerdown', e => { if (e.pointerType !== 'touch') return; tp.set(e.pointerId, [e.clientX, e.clientY]); if (tp.size === 2) { const a = [...tp.values()]; td = Math.hypot(a[0][0] - a[1][0], a[0][1] - a[1][1]); } });
    el.addEventListener('pointermove', e => { if (!tp.has(e.pointerId)) return; tp.set(e.pointerId, [e.clientX, e.clientY]); if (tp.size === 2 && V.view === 'room') { const a = [...tp.values()], d = Math.hypot(a[0][0] - a[1][0], a[0][1] - a[1][1]); if (td > 0 && d > 0) zoomFov(td / d); td = d; } });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(n => el.addEventListener(n, e => { tp.delete(e.pointerId); td = 0; }));
    // 그래픽 장치가 끊기면(메모리 부족 등) 화면이 멈춘다 → 복구되면 다시 그린다
    el.addEventListener('webglcontextlost', e => { e.preventDefault(); V.ctxLost = true; });
    el.addEventListener('webglcontextrestored', () => { V.ctxLost = false; V.composer = null; V.fxFail = false; V.sig = null; try { for (const k in MATS) delete MATS[k]; } catch (e) { } try { rebuild3D(); } catch (e) { } });
  }
  const pmrem = new T.PMREMGenerator(renderer);
  V.envTex = pmrem.fromScene(new V.RoomEnv(), 0.04).texture;
  Object.assign(V, { renderer, scene, camera, controls, host, ready: true });
  if (window.ResizeObserver) new ResizeObserver(() => resizeViewer()).observe(host);
  window.addEventListener('resize', resizeViewer);
  const loop = () => {
    requestAnimationFrame(loop);
    if (!V.renderer.domElement.offsetParent || (typeof PT !== 'undefined' && PT.running)) return;
    controls.update(); renderFrame();
  };
  loop();
  resizeViewer();
}
/* 화면 그리기 — 렌더 모드에서는 틈새 그늘(AO)을 더해 물체가 바닥·벽에 붙어 보이게 한다 */
function fxOn() { return !!(V.FX && V.mode === 'render' && !V.noFX && (window.innerWidth >= 900 || V.view === 'room')); }
function ensureFX() {
  if (V.composer || !V.FX || V.fxFail) return;
  try {
    const T = V.T, r = V.renderer, sz = r.getDrawingBufferSize(new T.Vector2());
    const rt = new T.WebGLRenderTarget(sz.x, sz.y, { type: T.HalfFloatType, samples: 4 });
    const c = new V.FX.EffectComposer(r, rt); c.addPass(new V.FX.RenderPass(V.scene, V.camera));
    const ao = new V.FX.GTAOPass(V.scene, V.camera, sz.x, sz.y); ao.updateGtaoMaterial({ radius: 0.38, distanceExponent: 1.2, thickness: 1.2, scale: 1.15, samples: 16 }); ao.blendIntensity = 1; c.addPass(ao);
    c.addPass(new V.FX.OutputPass()); V.composer = c; V.ao = ao;
  } catch (e) { V.fxFail = true; console.warn('fx', e); }
}
function renderFrame() {
  if (fxOn()) { ensureFX(); if (V.composer) { try { V.composer.render(); return; } catch (e) { V.fxFail = true; V.composer = null; } } }
  V.renderer.render(V.scene, V.camera);
}
function resizeViewer() {
  if (!V.renderer || !V.host) return;
  const w = V.host.clientWidth || 600, h = V.host.clientHeight || 400;
  V.renderer.setSize(w, h); V.camera.aspect = w / h; V.camera.updateProjectionMatrix();
  if (V.composer) { V.composer.setSize(w, h); }
}

/* ---------- 절차적 텍스처 ---------- */
const TEX = {};
function prng(seed) { let s = seed % 2147483647; if (s <= 0) s += 2147483646; return () => (s = s * 16807 % 2147483647) / 2147483647; }
function rgb(hex) { const n = parseInt(hex.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; }
function shade(hex, k) { let [r, g, b] = rgb(hex); if (k < 0) { r *= 1 + k; g *= 1 + k; b *= 1 + k; } else { r += (255 - r) * k; g += (255 - g) * k; b += (255 - b) * k; } return `rgb(${r | 0},${g | 0},${b | 0})`; }
function canvasTex(key, size, draw) {
  if (TEX[key]) return TEX[key];
  const c = document.createElement('canvas'); c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new V.T.CanvasTexture(c);
  t.wrapS = t.wrapT = V.T.RepeatWrapping; t.colorSpace = V.T.SRGBColorSpace; t.anisotropy = 8;
  return (TEX[key] = t);
}
function woodTex(col, plank, grain, seed) {
  return canvasTex('w' + col + plank + grain + seed, 1024, (g, S) => {
    const rand = prng(seed || 7), unit = 1.2, ph = S * plank / unit, rows = Math.ceil(S / ph);
    for (let i = 0; i < rows; i++) {
      const y = i * ph, seamX = rand() * S;
      for (const [x0, x1] of [[0, seamX], [seamX, S]]) {
        g.fillStyle = shade(col, (rand() - 0.5) * 0.16); g.fillRect(x0, y, x1 - x0, ph);
        const n = grain ? 26 : 14;
        for (let k = 0; k < n; k++) {
          g.strokeStyle = `rgba(60,40,20,${0.03 + rand() * (grain ? 0.08 : 0.05)})`; g.lineWidth = 0.6 + rand() * 1.4;
          const yy = y + rand() * ph; g.beginPath(); g.moveTo(x0, yy);
          for (let x = x0; x <= x1; x += 40) g.lineTo(x, yy + Math.sin(x * 0.01 + k) * (grain ? 3 : 1.5));
          g.stroke();
        }
      }
      g.fillStyle = 'rgba(40,25,10,.35)'; g.fillRect(0, y, S, 1.5); g.fillRect(seamX, y, 1.5, ph);
    }
  });
}
function tileTex(col, tw, th, vein, seed, grout, terr) {
  const unit = Math.max(tw * 2, th, 1.2);
  return { unit, tex: canvasTex('t' + col + tw + th + vein + (grout || '') + (terr ? 'T' : ''), 1024, (g, S) => {
    const rand = prng(seed || 11), px = S / unit, cw = tw * px, chh = th * px;
    for (let y = 0; y < S - 1; y += chh) for (let x = 0; x < S - 1; x += cw) {
      g.fillStyle = shade(col, (rand() - 0.5) * 0.05); g.fillRect(x, y, cw, chh);
      if (terr) terrazzoDots(g, x, y, cw, chh, rand);
      if (vein) {
        const n = vein > 1 ? 5 : 3;
        for (let k = 0; k < n; k++) {
          g.strokeStyle = `rgba(${vein > 1 ? '120,110,100' : '150,145,140'},${0.10 + rand() * 0.18})`; g.lineWidth = 0.8 + rand() * 2.2;
          g.beginPath(); let vx = x + rand() * cw, vy = y; g.moveTo(vx, vy);
          for (let s = 0; s < 6; s++) { vx += (rand() - 0.5) * cw * 0.5; vy += chh / 6; g.lineTo(vx, vy); }
          g.stroke();
        }
      }
    }
    g.strokeStyle = grout || 'rgba(110,105,98,.55)'; g.lineWidth = 2;
    for (let y = 0; y <= S; y += chh) { g.beginPath(); g.moveTo(0, y); g.lineTo(S, y); g.stroke(); }
    for (let x = 0; x <= S; x += cw) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, S); g.stroke(); }
  }) };
}
function paperTex(col, sheen) {
  return canvasTex('p' + col + sheen, 256, (g, S) => {
    const rand = prng(3); g.fillStyle = col; g.fillRect(0, 0, S, S);
    for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${rand() < 0.5 ? '0,0,0' : '255,255,255'},${0.025 + rand() * 0.03})`; g.fillRect(rand() * S, rand() * S, 1.5, 1.5); }
    if (sheen) { g.strokeStyle = 'rgba(255,255,255,.05)'; for (let i = -S; i < S; i += 6) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + S, S); g.stroke(); } }
  });
}
function slatTex(col, felt) {
  return canvasTex('s' + col + felt, 512, (g, S) => {
    const rand = prng(5), n = 20, w = S / n;
    for (let i = 0; i < n; i++) {
      g.fillStyle = shade(col, (rand() - 0.5) * 0.08); g.fillRect(i * w, 0, w * 0.72, S);
      g.fillStyle = felt ? shade(col, -0.45) : shade(col, -0.38); g.fillRect(i * w + w * 0.72, 0, w * 0.28, S);
      if (!felt) for (let k = 0; k < 6; k++) { g.strokeStyle = `rgba(60,40,20,${0.05 + rand() * 0.05})`; g.beginPath(); const xx = i * w + rand() * w * 0.7; g.moveTo(xx, 0); g.lineTo(xx + (rand() - 0.5) * 6, S); g.stroke(); }
    }
  });
}
function veneerTex(col) {
  return canvasTex('v' + col, 1024, (g, S) => {
    const rand = prng(9); g.fillStyle = col; g.fillRect(0, 0, S, S);
    for (let k = 0; k < 90; k++) { g.strokeStyle = `rgba(70,45,25,${0.04 + rand() * 0.07})`; g.lineWidth = 1 + rand() * 2; g.beginPath(); let x = rand() * S; g.moveTo(x, 0); for (let y = 0; y <= S; y += 64) { x += Math.sin(y * 0.01 + k) * 3; g.lineTo(x, y); } g.stroke(); }
    g.fillStyle = 'rgba(40,25,10,.25)'; for (let x = 0; x < S; x += S / 2) g.fillRect(x, 0, 2, S);
  });
}

function herringTex(col) {
  return canvasTex('h' + col, 1024, (g, S) => {
    const rand = prng(17); g.fillStyle = shade(col, -0.1); g.fillRect(0, 0, S, S);
    const pw = S / 12, pl = S / 3;
    g.save();
    for (let row = -2; row < 9; row++) for (let i = -2; i < 9; i++) {
      for (const dir of [1, -1]) {
        g.save(); g.translate(i * pl * 0.7071 * 2 + (dir > 0 ? 0 : pl * 0.7071), row * pw * 2 * 0.7071 * 2 + (dir > 0 ? 0 : 0));
        g.rotate(dir * Math.PI / 4); g.fillStyle = shade(col, (rand() - 0.5) * 0.18); g.fillRect(0, 0, pl, pw);
        g.strokeStyle = 'rgba(40,25,10,.35)'; g.lineWidth = 1.5; g.strokeRect(0, 0, pl, pw);
        for (let k = 0; k < 5; k++) { g.strokeStyle = `rgba(60,40,20,${0.04 + rand() * 0.05})`; g.beginPath(); const yy = rand() * pw; g.moveTo(0, yy); g.lineTo(pl, yy + (rand() - 0.5) * 3); g.stroke(); }
        g.restore();
      }
    }
    g.restore();
  });
}
function limeTex(col) {
  return canvasTex('l' + col, 512, (g, S) => {
    const rand = prng(23); g.fillStyle = col; g.fillRect(0, 0, S, S);
    for (let i = 0; i < 260; i++) { const x = rand() * S, y = rand() * S, r = 20 + rand() * 70; const gr = g.createRadialGradient(x, y, 0, x, y, r); const k = rand() < 0.5 ? '0,0,0' : '255,255,255'; gr.addColorStop(0, `rgba(${k},${0.035 + rand() * 0.03})`); gr.addColorStop(1, `rgba(${k},0)`); g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); }
  });
}
function terrazzoDots(g, x, y, w, h, rand) {
  const cols = ['#b9b1a6', '#8f8a84', '#d7c3a5', '#a7b2ad', '#cfcac2', '#7d756c'];
  for (let i = 0; i < w * h / 260; i++) { g.fillStyle = cols[Math.floor(rand() * cols.length)]; g.beginPath(); const r = 1.5 + rand() * 5; g.ellipse(x + rand() * w, y + rand() * h, r, r * (0.5 + rand() * 0.6), rand() * 3, 0, 7); g.fill(); }
}
/* ---------- 재질 ---------- */
const MATS = {};
function mat(spec) {
  // spec: {type, color, ...}
  const sketch = V.mode === 'sketch';
  const key = (sketch ? 'S' : 'R') + JSON.stringify(spec);
  if (MATS[key]) return MATS[key];
  const T = V.T; let m;
  const col = spec.color || '#dddddd';
  if (sketch) {
    m = spec.glass ? new T.MeshLambertMaterial({ color: '#cfe3ee', transparent: true, opacity: 0.35, depthWrite: false }) : new T.MeshLambertMaterial({ color: col, emissive: spec.emit ? col : '#000000' });
    m.userData.unit = 1;
  } else if (spec.glass) {
    m = new T.MeshStandardMaterial({ color: '#dfeaf0', transparent: true, opacity: spec.win ? 0.1 : 0.2, roughness: 0.05, metalness: 0.1, envMapIntensity: spec.win ? 0.5 : 1, depthWrite: false });
    m.userData.glass = 1; if (spec.win) m.userData.win = 1;
  } else if (spec.emit) {
    m = new T.MeshBasicMaterial({ color: col });
  } else {
    let map = null, unit = 1, rough = spec.rough != null ? spec.rough : 0.8;
    switch (spec.type) {
      case 'wood': case 'vinyl': map = woodTex(col, spec.plank || 0.19, spec.grain, 7); unit = 1.2; if (spec.rough == null) rough = 0.5; break;
      case 'deck': map = woodTex(col, 0.14, 1, 13); unit = 1.2; rough = 0.8; break;
      case 'tile': { const t = tileTex(col, spec.tw || 0.6, spec.th || 0.6, spec.vein, 11, spec.grout, spec.terrazzo); map = t.tex; unit = t.unit; break; }
      case 'herring': map = herringTex(col); unit = 1.2; break;
      case 'lime': map = limeTex(col); unit = 1.5; rough = 0.95; break;
      case 'paper': map = paperTex(col, spec.sheen); unit = 1; break;
      case 'slat': map = slatTex(col, spec.felt); unit = 0.6; rough = 0.7; break;
      case 'veneer': map = veneerTex(col); unit = 1.2; rough = 0.55; break;
      case 'photo': map = photoTex(spec.pid); unit = spec.unit || 1; rough = 0.6; break;
    }
    m = new T.MeshStandardMaterial({ color: map ? '#ffffff' : col, map, roughness: rough, metalness: spec.metal || 0 });
    m.userData.unit = unit;
  }
  if (!m.userData.unit) m.userData.unit = 1;
  return (MATS[key] = m);
}
function scaleBoxUV(geo, w, h, d, mats) {
  const uv = geo.attributes.uv, dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) {
    const u = (mats[f] && mats[f].userData.unit) || 1;
    for (let i = 0; i < 4; i++) { const k = f * 4 + i; uv.setXY(k, uv.getX(k) * dims[f][0] / u, uv.getY(k) * dims[f][1] / u); }
  }
  uv.needsUpdate = true;
}
function addMesh(geo, m, parent, opts) {
  const T = V.T, mesh = new T.Mesh(geo, m);
  mesh.castShadow = !(opts && opts.noCast) && !(m && m.userData && m.userData.glass); mesh.receiveShadow = true;
  parent.add(mesh); V.meshes.push(geo);
  if (V.mode === 'sketch' && !(opts && opts.noEdge)) {
    const eg = new T.EdgesGeometry(geo, 25); V.meshes.push(eg);
    const line = new T.LineSegments(eg, V.lineMat || (V.lineMat = new T.LineBasicMaterial({ color: '#202020' })));
    mesh.add(line);
  }
  return mesh;
}
function box(parent, cx, cy, cz, sx, sy, sz, m, opts) {
  const T = V.T, ms = Array.isArray(m) ? m : [m, m, m, m, m, m];
  const g = new T.BoxGeometry(sx, sy, sz); scaleBoxUV(g, sx, sy, sz, ms);
  const mesh = addMesh(g, Array.isArray(m) ? m : m, parent, opts); mesh.position.set(cx, cy, cz); return mesh;
}
function plane(parent, x, y, z, w, d, m, up, opts) {
  const T = V.T, g = new T.PlaneGeometry(w, d), u = (m.userData && m.userData.unit) || 1;
  const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / u, uv.getY(i) * d / u);
  g.rotateX(up ? -Math.PI / 2 : Math.PI / 2);
  const mesh = addMesh(g, m, parent, Object.assign({ noCast: true }, opts)); mesh.position.set(x, y, z); return mesh;
}

/* ---------- 장면 구성 ---------- */
function build3D(plan, look) {
  if (!V.ready) return;
  const T = V.T, H = CFG.CEIL_H, scene = V.scene;
  // 정리
  if (V.root) scene.remove(V.root);
  V.meshes.forEach(g => g.dispose()); V.meshes = [];
  if (V.lights) V.lights.forEach(l => { scene.remove(l); try { if (l.shadow && l.shadow.map) { l.shadow.map.dispose(); l.shadow.map = null; } if (l.dispose) l.dispose(); } catch (e) { } });
  const root = new T.Group(); V.root = root; scene.add(root);
  const walls = new T.Group(); root.add(walls); V.walls = walls;
  const ceilG = new T.Group(); root.add(ceilG); V.ceilG = ceilG;
  const sketch = V.mode === 'sketch';
  scene.background = new T.Color(sketch ? '#f7f6f3' : '#e9e6e0');
  scene.environment = sketch ? null : V.envTex;
  if ('environmentIntensity' in scene) scene.environmentIntensity = 0.38;
  // 재질
  const M = {
    floor: mat(Object.assign({ color: look.floor }, look.floorMat)),
    wall: mat(Object.assign({ color: look.wall }, look.wallMat)),
    art: look.artOn ? mat(Object.assign({ color: look.art }, look.artMat)) : null,
    bathF: mat({ type: 'tile', color: shade2(look.bath, -0.1), tw: 0.3, th: 0.3, rough: 0.35 }),
    bathW: mat({ type: 'tile', color: look.bath, tw: 0.3, th: 0.6, vein: look.bathVein, rough: 0.3 }),
    entry: mat({ type: 'tile', color: '#c9c3ba', tw: 0.6, th: 0.6, vein: 1, rough: 0.35 }),
    balc: look.balcMat ? mat(look.balcMat) : mat({ type: 'flat', color: '#d9d8d4' }),
    coat: mat({ type: 'paper', color: '#ecebe7' }),
    ext: mat({ type: 'flat', color: '#cfcbc4' }),
    core: mat({ type: 'flat', color: '#efede8' }),
    ceil: mat({ type: 'flat', color: '#f6f5f2' }),
    frame: mat({ type: 'flat', color: look.frame, rough: 0.4 }),
    glass: mat({ glass: 1 }),
    glassW: mat({ glass: 1, win: 1 }),
    door: mat({ type: 'flat', color: look.door, rough: 0.5 }),
    front: mat({ type: 'flat', color: '#3c3d40', rough: 0.5 }),
    kit: mat({ type: 'flat', color: look.kitchen, rough: 0.45 }),
    top: mat({ type: 'flat', color: look.kitTop || '#f2f0ec', rough: 0.25 }),
    splash: mat({ type: 'tile', color: look.kitSplash || '#f1f0ec', tw: 0.15, th: 0.075, rough: 0.2, grout: 'rgba(160,155,148,.6)' }),
    mid: mat({ type: 'flat', color: look.mid }),
    glow: mat({ emit: 1, color: '#fff4dc' }),
  };
  const F = {
    fab: mat({ type: 'flat', color: look.fabric || '#9a9792', rough: 0.95 }), fab2: mat({ type: 'flat', color: shade2(look.fabric || '#9a9792', -0.12), rough: 0.95 }),
    wood: mat({ type: 'veneer', color: look.woodFurn || '#a8825c', rough: 0.55 }), wood2: mat({ type: 'flat', color: shade2(look.woodFurn || '#a8825c', -0.25) }), kit: M.kit,
    kit2: mat({ type: 'flat', color: '#e7e3db' }), bed: mat({ type: 'flat', color: '#f1eee8', rough: 0.95 }), duvet: mat({ type: 'flat', color: look.duvet || '#e3dccf', rough: 0.95 }),
    head: mat({ type: 'flat', color: look.headboard || '#cbbba6', rough: 0.9 }), white: mat({ type: 'flat', color: '#f6f6f4', rough: 0.25 }),
    black: mat({ type: 'flat', color: '#18181a', rough: 0.3 }), rug: mat({ type: 'flat', color: look.rug || '#d6ccbc', rough: 1 }), tv: mat({ type: 'flat', color: look.tvStand || '#d9d3c9', rough: 0.5 }),
    chair: mat({ type: 'flat', color: look.chair || '#6f655c', rough: 0.8 }), metal: mat({ type: 'flat', color: '#cfd2d5', rough: 0.25, metal: 0.4 }),
    green: mat({ type: 'flat', color: '#5f7d4e', rough: 0.9 }), pot: mat({ type: 'flat', color: '#d4c8b8', rough: 0.8 }),
    accent: mat({ type: 'flat', color: look.accent || shade2(look.fabric || '#9a9792', -0.3), rough: 0.95 }), accent2: mat({ type: 'flat', color: look.accent2 || '#c9b79c', rough: 0.95 }),
    screen: mat({ type: 'flat', color: '#0b0c0e', rough: 0.08, metal: 0.3 }), shade: mat({ type: 'flat', color: '#f3ead8', rough: 0.9 }), soil: mat({ type: 'flat', color: '#4a3d31', rough: 1 }),
    trunk: mat({ type: 'flat', color: '#6b5440', rough: 0.9 }), green2: mat({ type: 'flat', color: '#4c6b40', rough: 0.9 }), panel: mat({ type: 'flat', color: '#3a3d42', rough: 0.3 }),
    basin: mat({ type: 'flat', color: '#e6eaec', rough: 0.12 }), steel: mat({ type: 'flat', color: '#b9bdc1', rough: 0.3, metal: 0.85 }),
    mirror: mat({ type: 'flat', color: '#dfe7ea', rough: 0.05, metal: 0.8 }), faucet: mat({ type: 'flat', color: look.faucet || '#c9cbcd', rough: 0.2, metal: 0.8 }), glass: M.glass,
  };
  const floorM = r => {
    if (look.floorFor) { const sp = look.floorFor(r); if (sp) return mat(sp); }
    return LIVE.includes(r.type) ? M.floor : BATHS.includes(r.type) ? M.bathF : r.type === 'entry' ? M.entry : M.balc;
  };
  const wallM = (r, s) => {
    if (!r) return M.ext;
    if (M.art && plan.art && s === plan.art.seg && r.type === 'living') return M.art;
    if (BATHS.includes(r.type)) { if (look.bathWallFor) { const sp = look.bathWallFor(r); if (sp) return mat(sp); } return M.bathW; }
    if (r.type === 'balcony' || r.type === 'util') return M.coat;
    if (look.wallFor) { const sp = look.wallFor(r); if (sp) return mat(sp); }
    return M.wall;
  };
  // 바닥 · 천장
  for (const r of plan.rooms) {
    plane(root, r.cx, (r.type === 'balcony' || r.type === 'util' || r.type === 'entry') ? -0.03 : 0, r.cy, r.w, r.h, floorM(r), true);
    if (r.type !== 'balcony') plane(ceilG, r.cx, H, r.cy, r.w, r.h, M.ceil, false);
  }
  // 바깥 바닥
  const minY = Math.min(...plan.rooms.map(r => r.y0)), maxY = Math.max(...plan.rooms.map(r => r.y1));
  const gnd = plane(root, plan.W / 2, -0.06, (minY + maxY) / 2, 60, 60, mat({ type: 'flat', color: sketch ? '#efeeea' : '#d9d5cd' }), true, { noEdge: 1 });
  gnd.receiveShadow = true; V.gnd = gnd;
  // 벽
  for (const s of plan.segs) {
    if (s.kind !== 'wall') continue;
    const mA = wallM(s.a, s), mB = wallM(s.b, s), t = s.t;
    const faces = s.o === 'h' ? [M.core, M.core, M.core, M.core, mB, mA] : [mB, mA, M.core, M.core, M.core, M.core];
    const piece = (a, b, z0, z1) => {
      if (b - a < 0.005 || z1 - z0 < 0.005) return;
      const ea = Math.abs(a - s.s0) < 1e-4 ? t / 2 : 0, eb = Math.abs(b - s.s1) < 1e-4 ? t / 2 : 0;
      const L = b - a + ea + eb, mid = (a - ea + b + eb) / 2, zc = (z0 + z1) / 2, hh = z1 - z0;
      if (s.o === 'h') box(walls, mid, zc, s.c, L, hh, t, faces);
      else box(walls, s.c, zc, mid, t, hh, L, faces);
    };
    for (const [a, b] of solidPieces(s)) piece(a, b, 0, H);
    for (const o of s.open) {
      const a = o.c - o.w / 2, b = o.c + o.w / 2;
      if (o.bottom > 0.01) piece(a, b, 0, o.bottom);
      if (H - o.top > 0.01) piece(a, b, o.top, H);
      if (o.type === 'win') addWindow(walls, s, o, M);
      else addDoor(walls, s, o, M, look);
    }
    // 주방 벽 타일
  }
  // 중문
  for (const s of plan.segs) if (s.kind === 'open' && look.midOn) {
    const L = s.L, n = look.midOn === 'one' ? 2 : look.midOn === 'swing' ? 2 : 3;
    const fr = M.mid, th = 0.05;
    const along = (u, z0, z1, w, mm, depth) => { if (s.o === 'h') box(walls, u, (z0 + z1) / 2, s.c, w, z1 - z0, depth || th, mm); else box(walls, s.c, (z0 + z1) / 2, u, depth || th, z1 - z0, w, mm); };
    along((s.s0 + s.s1) / 2, H - 0.06, H, L, fr);
    for (let i = 0; i <= n; i++) along(s.s0 + L * i / n, 0, H - 0.06, 0.04, fr);
    along((s.s0 + s.s1) / 2, 0.02, H - 0.06, L - 0.04, M.glassW, 0.012);
  }
  // 주방 (카운터·상부장·벽)
  if (plan.kitchenRun) {
    const k = plan.kitchenRun, kt = plan.rooms.find(r => r.type === 'kitchen');
    const cw = k.x1 - k.x0, cxk = (k.x0 + k.x1) / 2;
    if (cw > 0.3) {
      const NLk = { noCast: 1, noEdge: 1 }, zf = k.y0 + 0.6, nd = Math.max(2, Math.round(cw / 0.6));
      box(root, cxk, 0.475, k.y0 + 0.3, cw, 0.75, 0.6, M.kit); box(root, cxk, 0.05, k.y0 + 0.27, cw, 0.1, 0.5, F.black, NLk); // 하부장 + 걸레받이
      box(root, cxk, 0.865, k.y0 + 0.305, cw + 0.02, 0.03, 0.63, M.top);
      for (let i = 1; i < nd; i++) box(root, k.x0 + cw * i / nd, 0.475, zf + 0.001, 0.004, 0.72, 0.002, F.black, NLk);
      for (let i = 0; i < nd; i++) box(root, k.x0 + cw * (i + 0.5) / nd, 0.8, zf + 0.012, Math.min(0.2, cw / nd * 0.4), 0.012, 0.014, F.faucet, NLk);
      const ckx = cxk + Math.min(0.5, cw / 4), skx = cxk - Math.min(0.55, cw / 4);
      box(root, ckx, 0.882, k.y0 + 0.29, 0.58, 0.006, 0.4, F.screen, NLk); // 인덕션
      for (const [dx, dz, rr] of [[-0.14, 0.06, 0.095], [0.15, -0.07, 0.075], [0.15, 0.1, 0.06]]) { const tg = new T.RingGeometry(rr - 0.004, rr, 32); tg.rotateX(-Math.PI / 2); const tm = addMesh(tg, F.steel, root, NLk); tm.position.set(ckx + dx, 0.886, k.y0 + 0.29 + dz); }
      if (cw > 1.5) { // 싱크볼 + 수전
        box(root, skx, 0.882, k.y0 + 0.31, 0.62, 0.004, 0.42, F.steel, NLk); box(root, skx, 0.884, k.y0 + 0.31, 0.54, 0.004, 0.34, mat({ type: 'flat', color: '#7d8185', rough: 0.35, metal: 0.8 }), NLk);
        cyl(root, skx, 1.02, k.y0 + 0.09, 0.012, 0.014, 0.28, F.faucet, { seg: 12 }); cyl(root, skx, 1.155, k.y0 + 0.17, 0.011, 0.011, 0.18, F.faucet, { seg: 10, rx: Math.PI / 2 }); cyl(root, skx, 1.13, k.y0 + 0.255, 0.011, 0.011, 0.05, F.faucet, { seg: 10 });
      }
      if (look.upper !== 'none') {
        if (look.upper === 'open') { for (const yy of [1.55, 1.9]) box(root, cxk, yy, k.y0 + 0.13, cw, 0.03, 0.26, F.wood); box(root, ckx, 1.62, k.y0 + 0.2, 0.6, 0.06, 0.4, F.steel); }
        else { box(root, cxk, 1.85, k.y0 + 0.18, cw, 0.7, 0.35, M.kit); for (let i = 1; i < nd; i++) box(root, k.x0 + cw * i / nd, 1.85, k.y0 + 0.356, 0.004, 0.68, 0.002, F.black, NLk); box(root, cxk, 1.495, k.y0 + 0.3, cw - 0.1, 0.006, 0.02, M.glow, NLk); }
      } else box(root, ckx, 1.62, k.y0 + 0.2, 0.6, 0.06, 0.4, F.steel);
      if (look.kitSplash) box(walls, cxk, 1.17, k.y0 + 0.07, cw, 0.6, 0.012, M.splash, { noCast: 1 });
    }
    if (plan.kitchenLeg > 0 && kt) { box(root, kt.x1 - 0.35, 0.43, kt.y0 + 0.6 + plan.kitchenLeg / 2, 0.6, 0.83, plan.kitchenLeg, M.kit); box(root, kt.x1 - 0.35, 0.865, kt.y0 + 0.6 + plan.kitchenLeg / 2, 0.62, 0.03, plan.kitchenLeg + 0.02, M.top); }
    if (look.pendant && kt) { const tbl = plan.furn.find(f => f.k === 'island' || /dining|round4/.test(f.k)); if (tbl) for (const dx of [-0.35, 0.35]) { box(ceilG, tbl.x + dx, H - 0.5, tbl.y, 0.01, 1.0, 0.01, F.black, { noCast: 1, noEdge: 1 }); box(ceilG, tbl.x + dx, H - 1.02, tbl.y, 0.22, 0.12, 0.22, look.pendant === 'gold' ? F.faucet : F.black); box(ceilG, tbl.x + dx, H - 1.09, tbl.y, 0.16, 0.01, 0.16, M.glow, { noCast: 1, noEdge: 1 }); } }
  }
  // 가구
  for (const f of plan.furn) drawFurn(root, f, F, M, look);
  if (!sketch) {
    // 커튼 (거실·방 창 양옆) — 주름은 가는 원기둥을 겹쳐 표현
    const curtM = mat({ type: 'flat', color: look.curtain || '#ece7dd', rough: 0.95 }), railM = mat({ type: 'flat', color: '#cfc8bb', rough: 0.6 });
    for (const wn of plan.windows) {
      if (!['living', 'master', 'bed', 'study'].includes(wn.room.type) || wn.w < 1.2) continue;
      const zc = wn.seg.c, dir = Math.sign(wn.room.cy - zc) || 1, z = zc + dir * 0.17, top = H - 0.06, pw = Math.min(0.5, wn.w * 0.16);
      box(root, wn.c, top + 0.012, z, wn.w + 0.5, 0.018, 0.018, railM, { noCast: 1, noEdge: 1 });
      for (const sd of [-1, 1]) for (let i = 0; i < 3; i++) { const cm = rbox(root, wn.c + sd * (wn.w / 2 + 0.18 - pw * (i + 0.5) / 3), top / 2 + 0.01, z + (i % 2 ? 0.012 : -0.012), pw / 3 + 0.03, top - 0.02, 0.06, curtM, 0.028, { noCast: 1 }); if (cm) cm.receiveShadow = false; }
    }
    // 소파 뒤 벽 액자 (소파가 벽에 붙어 있을 때만)
    for (const f of plan.furn) {
      if (!/^sofa/.test(f.k)) continue; const r = plan.rooms.find(x => x.name === f.room); if (!r) continue;
      const a = -(f.rot || 0) * Math.PI / 180, px = f.x - (f.d / 2) * Math.sin(a), pz = f.y - (f.d / 2) * Math.cos(a);
      const gap = Math.min(Math.abs(px - r.x0), Math.abs(px - r.x1), Math.abs(pz - r.y0), Math.abs(pz - r.y1)); if (gap > 0.5) continue;
      const g = new T.Group(); g.position.set(f.x, 0, f.y); g.rotation.y = a; root.add(g);
      const zw = -(f.d / 2) - gap + 0.11, fm = mat({ type: 'flat', color: '#2a2724', rough: 0.5 }), pm = mat({ type: 'flat', color: '#f3efe6', rough: 0.9 });
      [[-0.42, 0.62, 0.86, '#b9a98f'], [0.42, 0.62, 0.86, '#8f9a8c']].forEach(([x, w2, h2, tone]) => { box(g, x, 1.52, zw, w2, h2, 0.022, fm, { noCast: 1, noEdge: 1 }); box(g, x, 1.52, zw + 0.008, w2 - 0.05, h2 - 0.05, 0.012, pm, { noCast: 1, noEdge: 1 }); box(g, x, 1.5, zw + 0.012, w2 * 0.42, h2 * 0.4, 0.008, mat({ type: 'flat', color: tone, rough: 0.9 }), { noCast: 1, noEdge: 1 }); });
    }
  }
  // 붙박이장 / 신발장
  if (look.closetFor && plan.closets) for (const [name, c] of Object.entries(plan.closets)) {
    const col = look.closetFor(name); if (!col) continue;
    const g = new T.Group(); g.position.set(c.x, 0, c.y); g.rotation.y = -(c.rot || 0) * Math.PI / 180; root.add(g);
    box(g, 0, 1.14, 0, c.len, 2.28, 0.6, mat({ type: 'flat', color: col, rough: 0.5 }));
    const n = Math.max(2, Math.round(c.len / 0.6)); for (let i = 1; i < n; i++) box(g, -c.len / 2 + c.len * i / n, 1.14, 0.301, 0.006, 2.2, 0.004, F.black, { noCast: 1, noEdge: 1 });
    for (let i = 0; i < n; i++) cyl(g, -c.len / 2 + c.len * (i + (i % 2 ? 0.14 : 0.86)) / n, 1.1, 0.318, 0.007, 0.007, 0.26, F.faucet, { seg: 8, noCast: 1 });
    box(g, 0, 0.04, 0.29, c.len, 0.08, 0.03, F.black, { noCast: 1, noEdge: 1 });
  }
  if (plan.shoeSpot) { const c = plan.shoeSpot; const hh = look.shoeTall ? 2.28 : 1.05; box(root, c.x, -0.03 + hh / 2, c.y, 0.36, hh, c.len, look.shoeTall ? M.door : F.kit2); }
  // 조명 · 에어컨 (천장 그룹)
  const mainRooms = plan.rooms.filter(r => ['living', 'dining', 'kitchen', 'master', 'bed', 'study'].includes(r.type));
  const lightOf = r => (look.lightFor ? look.lightFor(r) : look.light) || 'basic';
  V.ptL = []; // 포토 렌더(경로추적)용 실제 광원 목록
  const ptAdd = (x, z, w, d, circ, k, y, up) => V.ptL.push({ x, z, w, d, circ, k, y: y || H - 0.012, up: !!up });
  for (const r of plan.rooms.filter(x => BATHS.includes(x.type) || ['entry', 'dress', 'util', 'hall'].includes(x.type))) ptAdd(r.cx, r.cy, Math.max(0.3, r.w * 0.45), Math.max(0.3, r.h * 0.45), false, BATHS.includes(r.type) ? 1.5 : 0.9);
  for (const r of mainRooms) {
    const lt = lightOf(r);
    if (['down', 'line', 'magnetic', 'smart'].includes(lt)) {
      const nx = Math.max(1, Math.round(r.w / 1.3)), ny = Math.max(1, Math.round(r.h / 1.3));
      for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) {
        const g = new T.CircleGeometry(0.055, 20); g.rotateX(Math.PI / 2); V.meshes.push(g);
        const mm = new T.Mesh(g, M.glow); mm.position.set(r.x0 + r.w * (i + 0.5) / nx, H - 0.004, r.y0 + r.h * (j + 0.5) / ny); ceilG.add(mm);
      }
      // 경로추적용: 다운라이트 여러 개 대신 같은 밝기의 큰 면광원 하나 (노이즈가 훨씬 빨리 사라짐)
      ptAdd(r.cx, r.cy, r.w * 0.55, r.h * 0.55, false, 0.3 * nx * ny);
      if ((lt === 'line' || lt === 'smart') && r.h > 2) ptAdd(r.cx, r.cy, 0.04, r.h * 0.75, false, 1);
      if ((lt === 'line' || lt === 'smart') && r.h > 2) box(ceilG, r.cx, H - 0.005, r.cy, 0.04, 0.008, r.h * 0.75, M.glow, { noCast: 1, noEdge: 1 });
      if (lt === 'magnetic') { box(ceilG, r.cx, H - 0.02, r.cy, 0.05, 0.03, r.h * 0.8, F.black, { noCast: 1 }); for (const t of [-0.3, 0, 0.3]) box(ceilG, r.cx, H - 0.09, r.cy + r.h * t, 0.07, 0.12, 0.07, F.black, { noCast: 1 }); }
    } else if (lt === 'edge') {
      box(ceilG, r.cx, H - 0.015, r.cy, Math.min(1.2, r.w * 0.45), 0.03, Math.min(1.2, r.h * 0.45), M.glow, { noCast: 1 });
      ptAdd(r.cx, r.cy, Math.min(1.2, r.w * 0.45), Math.min(1.2, r.h * 0.45), false, 0.9);
    } else {
      const g = new T.BoxGeometry(Math.min(0.9, r.w * 0.35), 0.06, Math.min(0.9, r.h * 0.35)); V.meshes.push(g);
      const mm = new T.Mesh(g, M.glow); mm.position.set(r.cx, H - 0.04, r.cy); ceilG.add(mm);
      ptAdd(r.cx, r.cy, Math.min(0.9, r.w * 0.35), Math.min(0.9, r.h * 0.35), false, 0.9);
    }
    if (look.sysac && ['living', 'master', 'bed'].includes(r.type)) box(ceilG, r.cx + r.w * 0.22, H - 0.025, r.cy - r.h * 0.2, 0.84, 0.05, 0.84, F.white, { noCast: 1 });
  }
  if (look.cove) {
    const lv = plan.rooms.find(r => r.type === 'living');
    if (lv) { const i = 0.45; ptAdd(lv.cx, lv.y0 + i - 0.12, lv.w - 2 * i, 0.06, false, 0.6, H - 0.14, 1); ptAdd(lv.cx, lv.y1 - i + 0.12, lv.w - 2 * i, 0.06, false, 0.6, H - 0.14, 1); box(ceilG, lv.cx, H - 0.14, lv.y0 + i, lv.w - 2 * i, 0.02, 0.03, M.glow, { noCast: 1, noEdge: 1 }); box(ceilG, lv.cx, H - 0.14, lv.y1 - i, lv.w - 2 * i, 0.02, 0.03, M.glow, { noCast: 1, noEdge: 1 }); box(ceilG, lv.x0 + i, H - 0.14, lv.cy, 0.03, 0.02, lv.h - 2 * i, M.glow, { noCast: 1, noEdge: 1 }); box(ceilG, lv.x1 - i, H - 0.14, lv.cy, 0.03, 0.02, lv.h - 2 * i, M.glow, { noCast: 1, noEdge: 1 }); box(ceilG, lv.cx, H - 0.13, lv.cy, lv.w - 2 * i + 0.1, 0.012, lv.h - 2 * i + 0.1, M.ceil, { noCast: 1, noEdge: 1 }); }
  }
  // 빛
  const lights = [];
  const hemi = new T.HemisphereLight('#ffffff', '#b8ab98', sketch ? 2.6 : 0.9); lights.push(hemi);
  if (!sketch) hemi.userData = { k: 0.9, room: 1.45 };
  const sun = new T.DirectionalLight('#fff1dc', sketch ? 1.8 : 2.4);
  const cx = plan.W / 2, cz = (minY + maxY) / 2, ext = Math.max(plan.W, maxY - minY);
  sun.position.set(cx - ext * 0.45, ext * 0.85, maxY + ext * 1.0); sun.target.position.set(cx, 0, cz);
  sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); sun.shadow.radius = 2.5;
  const sc = sun.shadow.camera; sc.left = -ext; sc.right = ext; sc.top = ext; sc.bottom = -ext; sc.near = 0.5; sc.far = ext * 4; sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02;
  lights.push(sun, sun.target);
  if (!sketch) for (const r of mainRooms) { const lt = lightOf(r); const pl = new T.PointLight(lt === 'smart' ? '#fff1dd' : '#ffe7c4', lt === 'basic' || lt === 'keep' ? 1.0 : 1.3, 0, 2); pl.position.set(r.cx, H - 0.35, r.cy); pl.userData = { k: pl.intensity, room: 1.5 }; lights.push(pl); }
  lights.forEach(l => scene.add(l)); V.lights = lights;
  V.plan = plan; V.bounds = { cx, cz, ext, minY, maxY };
  applyViewState();
}
function shade2(hex, k) { const s = shade(hex, k).match(/\d+/g).map(Number); return '#' + s.map(v => v.toString(16).padStart(2, '0')).join(''); }
function addWindow(parent, s, o, M) {
  const a = o.c - o.w / 2, b = o.c + o.w / 2, z0 = o.bottom, z1 = o.top, f = 0.05, d = 0.08;
  const n = Math.max(1, Math.round(o.w / 1.6));
  const along = (u, zc, w, hh, m, dep) => { if (s.o === 'h') box(parent, u, zc, s.c, w, hh, dep, m); else box(parent, s.c, zc, u, dep, hh, w, m); };
  along(o.c, z0 + f / 2, o.w, f, M.frame, d); along(o.c, z1 - f / 2, o.w, f, M.frame, d);
  for (let i = 0; i <= n; i++) along(a + (b - a) * i / n, (z0 + z1) / 2, f, z1 - z0, M.frame, d);
  along(o.c, (z0 + z1) / 2, o.w - f, z1 - z0 - f, M.glassW, 0.012);
}
function addDoor(parent, s, o, M, look) {
  const T = V.T, d = o.ref, w = o.w, hh = 2.08, a = o.c - w / 2, front = d.kind === 'front';
  const leafM = front ? M.front : (look.hiddenDoor ? mat({ type: 'flat', color: look.wall }) : M.door);
  // 문틀
  if (!look.hiddenDoor || front) {
    const along = (u, zc, ww, h2, dep) => { if (s.o === 'h') box(parent, u, zc, s.c, ww, h2, dep, leafM); else box(parent, s.c, zc, u, dep, h2, ww, leafM); };
    along(a + 0.02, 1.05, 0.04, 2.1, s.t + 0.04); along(a + w - 0.02, 1.05, 0.04, 2.1, s.t + 0.04); along(o.c, 2.08, w, 0.04, s.t + 0.04);
  }
  const g = new T.Group(); parent.add(g);
  const into = front ? -d.into : d.into, ang = (front ? 0.15 : 1.25);
  const lw = w - 0.08;
  if (s.o === 'h') { g.position.set(a + 0.04, 0, s.c); g.rotation.y = -into * ang; box(g, lw / 2, hh / 2, 0, lw, hh, 0.04, leafM); }
  else { g.position.set(s.c, 0, a + 0.04); g.rotation.y = into * ang; box(g, 0, hh / 2, lw / 2, 0.04, hh, lw, leafM); }
}

/* ---------- 시점 ---------- */
function skyDome() {
  if (V.sky) return V.sky;
  const T = V.T, c = document.createElement('canvas'); c.width = 2048; c.height = 1024; const g = c.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, 1024);
  [[0, '#2f6fb8'], [0.3, '#5d97d4'], [0.5, '#a9c9e6'], [0.585, '#dbe6ec'], [0.5851, '#93a096'], [0.7, '#7f8a80'], [1, '#6f786f']].forEach(([t, col]) => gr.addColorStop(t, col)); g.fillStyle = gr; g.fillRect(0, 0, 2048, 1024);
  // 멀리 보이는 도시 윤곽 (고층에서 내다보는 느낌)
  const rnd = prng(31); for (const [al, hmax, col] of [[0.55, 46, '#9fb2c2'], [0.8, 30, '#8496a6'], [1, 16, '#73838f']]) { g.globalAlpha = al; g.fillStyle = col; for (let x = 0; x < 2048;) { const w = 10 + rnd() * 34, h = 4 + rnd() * hmax; g.fillRect(x, 600 - h, w, h + 8); x += w + rnd() * 10; } } g.globalAlpha = 1;
  g.fillStyle = '#8b968c'; g.fillRect(0, 604, 2048, 6);
  const tx = new T.CanvasTexture(c); tx.colorSpace = T.SRGBColorSpace;
  const m = new T.Mesh(new T.SphereGeometry(140, 32, 24), new T.MeshBasicMaterial({ map: tx, side: T.BackSide, fog: false, depthWrite: false }));
  m.userData.sky = 1; return (V.sky = m);
}
function applyViewState() {
  if (!V.ready || !V.plan) return;
  const room = V.view === 'room';
  // 방 안: 천장이 햇빛을 막아 창으로 들어온 빛만 바닥에 떨어지고, 창밖에는 하늘이 보인다
  V.ceilG.traverse(o => { if (o.isMesh && o.geometry.type === 'PlaneGeometry') o.castShadow = room; });
  if (V.mode === 'render') { const sk = skyDome(); if (room) { if (sk.parent !== V.scene) V.scene.add(sk); sk.position.set(V.bounds.cx, 0, V.bounds.cz); } else if (sk.parent) sk.parent.remove(sk); } else if (V.sky && V.sky.parent) V.sky.parent.remove(V.sky);
  (V.lights || []).forEach(l => { if (l.userData.k != null) l.intensity = l.userData.k * (room ? l.userData.room : 1); });
  if (V.gnd) V.gnd.visible = !room;
  V.ceilG.visible = room || V.ceil;
  V.walls.scale.y = (!room && V.cut) ? 0.42 : 1;
}
function setOverview() {
  V.view = 'overview'; V.roomId = null;
  const { cx, cz, minY, maxY } = V.bounds, c = V.controls, cam = V.camera;
  resizeViewer();
  cam.fov = 45; cam.updateProjectionMatrix();
  const vf = cam.fov * Math.PI / 180, hf = 2 * Math.atan(Math.tan(vf / 2) * cam.aspect), el = 0.96, az = 0.2;
  const W = V.plan.W, D = maxY - minY;
  const needV = (D * Math.sin(el) + CFG.CEIL_H * Math.cos(el)) / (2 * Math.tan(vf / 2));
  const needH = W / (2 * Math.tan(hf / 2));
  const dist = Math.max(needV, needH) * 1.15 + D * Math.cos(el) * 0.45;
  cam.position.set(cx + dist * Math.cos(el) * Math.sin(az), dist * Math.sin(el), cz + dist * Math.cos(el) * Math.cos(az));
  c.target.set(cx, 0.3, cz);
  Object.assign(c, { enableZoom: true, enablePan: true, rotateSpeed: 0.8, minDistance: 2, maxDistance: dist * 2.5, maxPolarAngle: Math.PI * 0.49, minPolarAngle: 0 });
  applyViewState(); c.update();
}
function setRoomView(id) {
  const r = V.plan.rooms.find(x => x.id === id); if (!r) return;
  V.view = 'room'; V.roomId = id;
  const c = V.controls, cam = V.camera;
  const frontWin = V.plan.windows.find(w => w.room === r && Math.abs(w.seg.c - r.y1) < 1e-3);
  const backWin = V.plan.windows.find(w => w.room === r && Math.abs(w.seg.c - r.y0) < 1e-3);
  let ey, ty;
  if (r.type === 'living') { ey = r.y0 + 0.35; ty = r.y1; }
  else if (frontWin) { ey = r.y0 + Math.min(0.6, r.h * 0.2); ty = r.y1; }
  else if (backWin) { ey = r.y1 - Math.min(0.6, r.h * 0.2); ty = r.y0; }
  else { ey = r.y1 - 0.4; ty = r.y0; }
  const dir = Math.sign(ty - ey) || 1;
  const small = BATHS.includes(r.type) || r.area < 7;
  if (small) {
    // 욕실·작은 방: 입구 쪽 모서리에서 대각선으로 내려다봐서 도기·세면대가 보이게
    const tf = (V.plan.furn || []).find(f => f.room === r.name && f.k === 'toilet');
    const d2 = tf ? (Math.sign(tf.y - r.cy) || dir) : dir, ez = d2 > 0 ? r.y0 + 0.14 : r.y1 - 0.14;
    cam.fov = 70; cam.updateProjectionMatrix();
    const ez2 = ez + d2 * Math.max(0, r.h - 2.4) * 0.55; // 긴 욕실은 도기 쪽으로 다가간다
    cam.position.set(r.cx, 1.48, ez2);
    c.target.set(r.cx, 1.45, ez2 + d2 * 0.12);
  } else {
    // 가구에 가리지 않는 자리까지 앞으로 이동 (주방: 식탁 의자가 카메라 앞을 막던 문제)
    const blocked = y => (V.plan.furn || []).some(f => { if (f.k === 'rug') return false; const fw = (f.rot || 0) % 180 === 0 ? f.w : f.d, fd = (f.rot || 0) % 180 === 0 ? f.d : f.w; return Math.abs(f.x - r.cx) < fw / 2 + 0.45 && (dir > 0 ? (f.y + fd / 2 > y - 0.25 && f.y - fd / 2 < y + 0.9) : (f.y - fd / 2 < y + 0.25 && f.y + fd / 2 > y - 0.9)) && (FURN[f.k] || {}).h < 1.3; });
    if (r.type !== 'living') for (let i = 0; i < 12 && blocked(ey) && Math.abs(ty - (ey + dir * 0.2)) > 1.45; i++) ey += dir * 0.2;
    cam.fov = 70; cam.updateProjectionMatrix();
    cam.position.set(r.cx, 1.45, ey);
    c.target.set(r.cx, 1.43, ey + dir * 0.12);
  }
  Object.assign(c, { enableZoom: false, enablePan: false, rotateSpeed: -0.35, minDistance: 0.01, maxDistance: 0.2, maxPolarAngle: Math.PI * 0.85, minPolarAngle: Math.PI * 0.15 });
  applyViewState(); c.update();
}
function snapshot() { if (!V.ready) return null; renderFrame(); try { return V.renderer.domElement.toDataURL('image/jpeg', 0.86); } catch (e) { return null; } }

/* ---------- 가구 3D ---------- */
/* ---------- v0.4 형태 도우미: 둥근 상자 · 원기둥 · 회전체 ---------- */
function rbox(parent, cx, cy, cz, sx, sy, sz, m, r, opts) {
  if (!V.RBox || V.mode === 'sketch') return box(parent, cx, cy, cz, sx, sy, sz, m, opts);
  const rr = Math.min(r || 0.03, sx / 2 - 0.002, sy / 2 - 0.002, sz / 2 - 0.002);
  if (rr < 0.004) return box(parent, cx, cy, cz, sx, sy, sz, m, opts);
  const rg = new V.RBox(sx, sy, sz, 3, rr); rg.clearGroups(); if (!rg.index) { const n = rg.attributes.position.count, ix = new (n > 65535 ? Uint32Array : Uint16Array)(n); for (let i = 0; i < n; i++) ix[i] = i; rg.setIndex(new V.T.BufferAttribute(ix, 1)); } // 경로추적용: 다른 도형과 같은 형식(인덱스 있음·그룹 없음)으로 맞춘다
  const mesh = addMesh(rg, m, parent, Object.assign({ noEdge: 1 }, opts)); mesh.position.set(cx, cy, cz); return mesh;
}
function cyl(parent, cx, cy, cz, rt, rb, h, m, opts) {
  opts = opts || {};
  const mesh = addMesh(new V.T.CylinderGeometry(rt, rb, h, opts.seg || 24), m, parent, Object.assign({ noEdge: 1 }, opts));
  mesh.position.set(cx, cy, cz); if (opts.rx) mesh.rotation.x = opts.rx; if (opts.rz) mesh.rotation.z = opts.rz;
  mesh.scale.set(opts.kx || 1, 1, opts.kz || 1); return mesh;
}
function lathe(parent, cx, cy, cz, pts, m, opts) {
  opts = opts || {}; const T = V.T;
  const geo = new T.LatheGeometry(pts.map(p => new T.Vector2(p[0], p[1])), opts.seg || 36);
  const mesh = addMesh(geo, m, parent, Object.assign({ noEdge: 1 }, opts)); mesh.position.set(cx, cy, cz); mesh.scale.set(opts.kx || 1, 1, opts.kz || 1); return mesh;
}
function ball(parent, cx, cy, cz, r, m, opts) {
  opts = opts || {};
  const mesh = addMesh(new V.T.SphereGeometry(r, 18, 14), m, parent, Object.assign({ noEdge: 1 }, opts));
  mesh.position.set(cx, cy, cz); mesh.scale.set(opts.kx || 1, opts.ky || 1, opts.kz || 1); return mesh;
}
/* ---------- 가구·설비 ---------- */
function drawFurn(root, f, F, M, look) {
  const T = V.T, g = new T.Group(); g.position.set(f.x, 0, f.y); g.rotation.y = -(f.rot || 0) * Math.PI / 180; root.add(g);
  const w = f.w, d = f.d, NL = { noCast: 1, noEdge: 1 };
  const B = (x, y, z, sx, sy, sz, m, o) => box(g, x, y, z, sx, sy, sz, m, o);
  const R = (x, y, z, sx, sy, sz, m, r, o) => rbox(g, x, y, z, sx, sy, sz, m, r, o);
  const C = (x, y, z, rt, rb, h, m, o) => cyl(g, x, y, z, rt, rb, h, m, o);
  const legs = (W, D, h, m, r, inset) => { const i = inset == null ? 0.05 : inset; for (const sx of [-1, 1]) for (const sz of [-1, 1]) C(sx * (W / 2 - i), h / 2, sz * (D / 2 - i), r || 0.018, (r || 0.018) * 0.8, h, m, { seg: 10 }); };
  // 소파: 낮은 다리 + 좌방석 + 등쿠션 + 팔걸이
  const sofa = (W, D, arms, z0) => {
    z0 = z0 || 0; const aw = arms ? 0.16 : 0, inner = W - aw * 2, n = Math.max(1, Math.round(inner / 0.72)), cw = inner / n;
    R(0, 0.19, z0, W, 0.2, D, F.fab2, 0.04);
    for (let i = 0; i < n; i++) {
      const x = -inner / 2 + cw * (i + 0.5);
      R(x, 0.37, z0 + 0.09, cw - 0.015, 0.17, D - 0.26, F.fab, 0.06);
      R(x, 0.62, z0 - (D / 2 - 0.2), cw - 0.03, 0.4, 0.2, F.fab, 0.085).rotation.x = -0.14;
    }
    R(0, 0.5, z0 - (D / 2 - 0.07), W, 0.6, 0.14, F.fab2, 0.05);
    if (arms) for (const s of [-1, 1]) R(s * (W / 2 - aw / 2), 0.4, z0, aw, 0.44, D, F.fab2, 0.06);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) C(sx * (W / 2 - 0.08), 0.045, z0 + sz * (D / 2 - 0.08), 0.02, 0.016, 0.09, F.black, { seg: 10 });
  };
  const chair = (x, z, face) => { // face: 등받이가 있는 쪽 (+1: +z)
    const c = new T.Group(); c.position.set(x, 0, z); c.rotation.y = face > 0 ? 0 : Math.PI; g.add(c);
    rbox(c, 0, 0.45, 0, 0.42, 0.06, 0.42, F.chair, 0.025); rbox(c, 0, 0.72, 0.19, 0.4, 0.4, 0.045, F.chair, 0.02).rotation.x = 0.1;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(c, sx * 0.17, 0.21, sz * 0.17, 0.016, 0.012, 0.42, F.wood2, { seg: 8 });
  };
  const stool = (x, z) => { C(x, 0.66, z, 0.17, 0.17, 0.05, F.chair, { seg: 28 }); C(x, 0.32, z, 0.018, 0.018, 0.64, F.black, { seg: 10 }); C(x, 0.012, z, 0.16, 0.17, 0.024, F.black, { seg: 28 }); };
  const book = (x, y, z, n, W) => { const cols = ['#7c8a8f', '#b9a58a', '#3f4a52', '#c9c2b4', '#8e6f5a', '#dcd6cb', '#59645a']; let px = x - W / 2; for (let i = 0; i < n; i++) { const bw = 0.025 + ((i * 37) % 5) * 0.006, bh = 0.2 + ((i * 53) % 6) * 0.012; if (px + bw > x + W / 2) break; B(px + bw / 2, y + bh / 2, z, bw, bh, 0.15, mat({ type: 'flat', color: cols[(i * 3 + n) % cols.length], rough: 0.85 }), NL); px += bw + 0.002; } };
  switch (f.k) {
    case 'sofa2': case 'sofa3': case 'sofa4': case 'armchair': sofa(w, d, true);
      if (f.k !== 'armchair') { R(-(w / 2 - 0.42), 0.6, -(d / 2 - 0.36), 0.4, 0.4, 0.13, F.accent, 0.06).rotation.set(-0.3, 0.25, 0); R(w / 2 - 0.44, 0.59, -(d / 2 - 0.37), 0.36, 0.36, 0.12, F.accent2, 0.055).rotation.set(-0.3, -0.3, 0); }
      break;
    case 'sofaL': {
      sofa(w, 0.96, true, -(d / 2 - 0.48));
      R(w / 2 - 0.47, 0.19, 0.48, 0.92, 0.2, d - 0.96, F.fab2, 0.04); R(w / 2 - 0.47, 0.37, 0.47, 0.9, 0.17, d - 1.0, F.fab, 0.06);
      break; }
    case 'modular': {
      sofa(w, 0.9, false, -(d / 2 - 0.45));
      for (const s of [-1, 1]) { R(s * (w / 2 - 0.45), 0.19, 0.45, 0.9, 0.2, d - 0.9, F.fab2, 0.04); R(s * (w / 2 - 0.45), 0.37, 0.45, 0.88, 0.17, d - 0.94, F.fab, 0.06); R(s * (w / 2 - 0.08), 0.5, 0.45, 0.14, 0.5, d - 0.92, F.fab2, 0.05); }
      break; }
    case 'ctable': R(0, 0.37, 0, w, 0.035, d, F.wood, 0.012); B(0, 0.14, 0, w - 0.16, 0.02, d - 0.14, F.wood2, NL); legs(w, d, 0.355, F.black, 0.014, 0.07);
      lathe(g, w * 0.22, 0.388, -d * 0.1, [[0, 0], [0.045, 0], [0.065, 0.06], [0.05, 0.15], [0.028, 0.2], [0.034, 0.22], [0, 0.22]], F.pot); for (const [dx, dy, dz] of [[0, 0.33, 0], [0.04, 0.3, 0.02], [-0.035, 0.29, -0.02]]) ball(g, w * 0.22 + dx, 0.388 + dy, -d * 0.1 + dz, 0.05, F.green, { ky: 1.5 });
      R(-w * 0.2, 0.4, d * 0.08, 0.26, 0.025, 0.19, F.accent2, 0.006, NL); R(-w * 0.19, 0.424, d * 0.07, 0.22, 0.022, 0.16, F.white, 0.006, NL);
      break;
    case 'tvset': {
      B(0, 0.27, 0, w, 0.3, d, F.tv); legs(w, d, 0.12, F.black, 0.015, 0.08);
      const n = Math.max(2, Math.round(w / 0.6)); for (let i = 1; i < n; i++) B(-w / 2 + w * i / n, 0.27, d / 2 + 0.001, 0.004, 0.28, 0.002, F.black, NL);
      R(0, 1.28, -(d / 2) + 0.04, 1.45, 0.83, 0.03, F.black, 0.012); B(0, 1.28, -(d / 2) + 0.057, 1.41, 0.79, 0.002, F.screen, NL);
      break; }
    case 'rug': R(0, 0.008, 0, w, 0.016, d, F.rug, 0.007, NL); break;
    case 'dining4': case 'dining6': {
      R(0, 0.73, 0, w, 0.04, d, F.wood, 0.012);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) C(sx * (w / 2 - 0.09), 0.355, sz * (d / 2 - 0.09), 0.028, 0.02, 0.71, F.wood2, { seg: 12 });
      const n = f.k === 'dining6' ? 3 : 2; for (let i = 0; i < n; i++) { const x = -w / 2 + w * (i + 0.5) / n; chair(x, d / 2 + 0.12, 1); chair(x, -(d / 2 + 0.12), -1); }
      break; }
    case 'round4': {
      C(0, 0.73, 0, w / 2, w / 2, 0.04, F.wood, { seg: 48 }); C(0, 0.37, 0, 0.05, 0.07, 0.68, F.wood2, { seg: 16 }); C(0, 0.015, 0, 0.3, 0.32, 0.03, F.wood2, { seg: 32 });
      for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2, r = w / 2 + 0.12; const c = new T.Group(); c.position.set(Math.sin(a) * r, 0, Math.cos(a) * r); c.rotation.y = a; g.add(c);
        rbox(c, 0, 0.45, 0, 0.42, 0.06, 0.42, F.chair, 0.025); rbox(c, 0, 0.72, 0.19, 0.4, 0.4, 0.045, F.chair, 0.02).rotation.x = 0.1; for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(c, sx * 0.17, 0.21, sz * 0.17, 0.016, 0.012, 0.42, F.wood2, { seg: 8 }); }
      break; }
    case 'bedS': case 'bedSS': case 'bedQ': case 'bedK': case 'bedF': {
      R(0, 0.2, 0.02, w + 0.04, 0.2, d + 0.02, F.head, 0.03); legs(w, d, 0.1, F.wood2, 0.025, 0.08);
      R(0, 0.41, 0.03, w - 0.03, 0.24, d - 0.08, F.bed, 0.07);
      R(0, 0.5, 0.36, w + 0.05, 0.11, d * 0.62, F.duvet, 0.05); R(0, 0.535, -0.02, w + 0.03, 0.05, 0.2, F.bed, 0.025);
      R(0, 0.62, -(d / 2) + 0.05, w + 0.1, 1.05, 0.1, F.head, 0.04);
      const np = w > 2.2 ? 3 : w > 1.3 ? 2 : 1, pw = Math.min(0.68, (w - 0.1) / np - 0.05);
      for (let i = 0; i < np; i++) { const x = (i - (np - 1) / 2) * (w / np); R(x, 0.6, -(d / 2) + 0.36, pw, 0.13, 0.4, F.white, 0.06).rotation.x = -0.12; }
      break; }
    case 'bunk': for (const yy of [0.3, 1.25]) { B(0, yy, 0, w, 0.08, d, F.wood); R(0, yy + 0.13, 0, w - 0.08, 0.16, d - 0.08, F.bed, 0.05); R(0, yy + 0.25, -(d / 2) + 0.3, w - 0.3, 0.1, 0.36, F.white, 0.045); } for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) B(x * (w / 2 - 0.03), 0.85, z * (d / 2 - 0.03), 0.06, 1.7, 0.06, F.wood2); for (const z of [-1, 1]) B(0, 1.55, z * (d / 2 - 0.03), w, 0.05, 0.03, F.wood2, NL); break;
    case 'night': B(0, 0.3, 0, w, 0.36, d, F.wood); legs(w, d, 0.12, F.wood2, 0.016, 0.05); B(0, 0.3, d / 2 + 0.001, w - 0.04, 0.004, 0.002, F.black, NL);
      C(0, 0.5, 0, 0.06, 0.07, 0.03, F.faucet, { seg: 20 }); C(0, 0.62, 0, 0.008, 0.008, 0.22, F.faucet, { seg: 8 }); C(0, 0.78, 0, 0.09, 0.12, 0.16, F.shade, { seg: 24, noCast: 1 }); break;
    case 'desk': {
      R(0, 0.73, 0, w, 0.03, d, F.wood, 0.01); for (const sx of [-1, 1]) { B(sx * (w / 2 - 0.04), 0.36, 0, 0.03, 0.71, d - 0.08, F.wood2); }
      B(w / 2 - 0.22, 0.56, 0, 0.36, 0.3, d - 0.1, F.wood, NL);
      R(-w * 0.12, 0.98, -(d / 2) + 0.1, 0.56, 0.33, 0.02, F.black, 0.008); C(-w * 0.12, 0.79, -(d / 2) + 0.12, 0.012, 0.012, 0.1, F.black, { seg: 8 }); C(-w * 0.12, 0.75, -(d / 2) + 0.12, 0.09, 0.09, 0.008, F.black, { seg: 20 });
      const c = new T.Group(); c.position.set(-0.05, 0, d / 2 + 0.22); g.add(c);
      rbox(c, 0, 0.46, 0, 0.46, 0.08, 0.44, F.chair, 0.035); rbox(c, 0, 0.8, 0.2, 0.42, 0.46, 0.06, F.chair, 0.03).rotation.x = 0.12; cyl(c, 0, 0.24, 0, 0.022, 0.022, 0.38, F.black, { seg: 10 });
      for (let i = 0; i < 5; i++) { const a = i * Math.PI * 2 / 5; const l = box(c, Math.sin(a) * 0.13, 0.04, Math.cos(a) * 0.13, 0.03, 0.025, 0.28, F.black, NL); l.rotation.y = a; }
      break; }
    case 'shelf': {
      const hh = f.h || 1.9; B(0, hh / 2, -(d / 2) + 0.008, w, hh, 0.015, F.wood2, NL); for (const sx of [-1, 1]) B(sx * (w / 2 - 0.011), hh / 2, 0, 0.022, hh, d, F.wood);
      const n = 5; for (let i = 0; i <= n; i++) { const y = 0.04 + (hh - 0.06) * i / n; B(0, y, 0, w - 0.04, 0.022, d - 0.01, F.wood, { noEdge: 1 }); if (i < n && i > 0) book(((i % 2) ? -1 : 1) * w * 0.08, y + 0.011, 0, 7 + i * 2, w * 0.7); }
      break; }
    case 'plant': {
      lathe(g, 0, 0, 0, [[0, 0], [0.13, 0], [0.15, 0.03], [0.19, 0.4], [0.2, 0.42], [0.17, 0.42], [0.16, 0.36], [0, 0.36]], F.pot); C(0, 0.37, 0, 0.16, 0.16, 0.01, F.soil, { noCast: 1 });
      C(0, 0.7, 0, 0.018, 0.026, 0.66, F.trunk, { seg: 8 });
      const L = [[0, 1.12, 0, 0.26, 1.25], [0.17, 0.95, 0.06, 0.2, 1.1], [-0.16, 0.98, -0.07, 0.21, 1.15], [0.03, 0.88, -0.17, 0.18, 1], [-0.05, 1.3, 0.1, 0.17, 1.2], [0.1, 1.27, -0.09, 0.15, 1.1]];
      L.forEach((p, i) => ball(g, p[0], p[1], p[2], p[3], i % 2 ? F.green2 : F.green, { ky: p[4], kx: 0.92 }));
      break; }
    case 'island': {
      B(0, 0.49, 0, w - 0.04, 0.78, d - 0.04, M.kit); B(0, 0.05, 0, w - 0.12, 0.1, d - 0.12, F.black, NL); R(0, 0.895, 0, w + 0.06, 0.035, d + 0.06, M.top, 0.008);
      const n = Math.max(2, Math.round(w / 0.6)); for (let i = 1; i < n; i++) B(-w / 2 + w * i / n, 0.49, -(d / 2) + 0.019, 0.004, 0.74, 0.002, F.black, NL);
      for (const x of [-0.55, 0, 0.55]) if (Math.abs(x) < w / 2 - 0.2) stool(x, d / 2 + 0.3);
      break; }
    case 'fridge': {
      const hh = f.h || 1.85; R(0, hh / 2 + 0.01, 0, w, hh - 0.02, d, F.metal, 0.02); B(0, hh / 2, d / 2 + 0.002, 0.006, hh - 0.08, 0.004, F.black, NL); B(0, hh * 0.38, d / 2 + 0.002, w - 0.04, 0.006, 0.004, F.black, NL);
      for (const s of [-1, 1]) C(s * 0.05, hh * 0.68, d / 2 + 0.025, 0.011, 0.011, 0.6, F.faucet, { seg: 10 });
      break; }
    case 'kimchi': { const hh = f.h || 0.9; R(0, hh / 2 + 0.01, 0, w, hh - 0.02, d, F.metal, 0.02); B(0, hh * 0.52, d / 2 + 0.002, w - 0.04, 0.006, 0.004, F.black, NL); for (const y of [0.3, 0.72]) C(0, hh * y, d / 2 + 0.022, 0.01, 0.01, w * 0.5, F.faucet, { seg: 10, rz: Math.PI / 2 }); break; }
    case 'washer': case 'dryer': {
      const hh = f.h || 0.95; R(0, hh / 2, 0, w, hh, d, F.white, 0.025); B(0, hh - 0.09, d / 2 + 0.002, w - 0.06, 0.1, 0.004, F.panel, NL);
      const tg = new T.TorusGeometry(0.2, 0.028, 10, 32); const tm = addMesh(tg, F.metal, g, NL); tm.position.set(0, hh * 0.45, d / 2 + 0.01);
      const dg = new T.CircleGeometry(0.19, 28); const dm = addMesh(dg, F.screen, g, NL); dm.position.set(0, hh * 0.45, d / 2 + 0.012);
      break; }
    case 'toilet': {
      const v = f.v || 'basic', zb = 0.07, bowl = [[0, 0], [0.12, 0], [0.135, 0.03], [0.14, 0.2], [0.175, 0.34], [0.19, 0.385], [0.185, 0.4], [0, 0.4]];
      if (v === 'wall') {
        lathe(g, 0, 0.1, zb, [[0, 0], [0.09, 0.02], [0.16, 0.14], [0.185, 0.27], [0.18, 0.3], [0, 0.3]], F.white, { kz: 1.3 });
        C(0, 0.415, zb, 0.185, 0.185, 0.03, F.white, { seg: 36, kz: 1.3 }); R(0, 0.6, -(d / 2) + 0.07, 0.62, 1.2, 0.14, F.white, 0.01); R(0, 0.98, -(d / 2) + 0.145, 0.22, 0.14, 0.012, F.faucet, 0.005, NL);
      } else {
        lathe(g, 0, 0, zb, bowl, F.white, { kz: 1.32 }); C(0, 0.41, zb, 0.19, 0.19, 0.022, F.white, { seg: 36, kz: 1.32 }); C(0, 0.43, zb, 0.185, 0.19, 0.018, F.white, { seg: 36, kz: 1.3 });
        if (v === 'smart') { R(0, 0.44, -(d / 2) + 0.12, 0.4, 0.12, 0.22, F.white, 0.04); B(0.21, 0.47, 0.02, 0.03, 0.03, 0.2, F.panel, NL); }
        else { R(0, 0.6, -(d / 2) + 0.1, 0.4, 0.38, 0.18, F.white, 0.035); R(0, 0.795, -(d / 2) + 0.1, 0.42, 0.025, 0.2, F.white, 0.01); C(0, 0.812, -(d / 2) + 0.1, 0.022, 0.022, 0.012, F.faucet, { seg: 14, noCast: 1 }); }
      }
      break; }
    case 'vanity': {
      const v = f.v || 'pedestal', zb = -(d / 2), mw = Math.min(0.74, w);
      const faucet = y => { C(0, y + 0.09, zb + 0.08, 0.014, 0.016, 0.18, F.faucet, { seg: 12 }); C(0, y + 0.165, zb + 0.14, 0.011, 0.011, 0.13, F.faucet, { seg: 10, rx: Math.PI / 2 }); B(0.045, y + 0.03, zb + 0.08, 0.06, 0.012, 0.016, F.faucet, NL); };
      if (v === 'pedestal') {
        lathe(g, 0, 0.66, 0.02, [[0, 0], [0.1, 0.01], [0.25, 0.13], [0.275, 0.19], [0.265, 0.2], [0.235, 0.16], [0.1, 0.06], [0, 0.05]], F.white, { kx: Math.min(1, w * 0.7 / 0.55), kz: 0.8 });
        C(0, 0.34, -0.03, 0.07, 0.09, 0.68, F.white, { seg: 20 }); faucet(0.84);
      } else {
        const ch = v === 'jendai' ? 0.5 : 0.42, cm = v === 'jendai' ? M.top : F.wood;
        B(0, 0.83 - ch / 2, 0.01, w, ch, d - 0.02, cm); R(0, 0.85, 0, w + 0.02, 0.04, d + 0.02, M.top, 0.01);
        const n = Math.max(2, Math.round(w / 0.45)); for (let i = 1; i < n; i++) B(-w / 2 + w * i / n, 0.83 - ch / 2, d / 2 + 0.001, 0.004, ch - 0.03, 0.002, F.black, NL);
        if (v === 'topbowl' || v === 'dry') { lathe(g, 0, 0.87, 0.04, [[0, 0], [0.13, 0], [0.19, 0.11], [0.2, 0.13], [0.185, 0.13], [0.12, 0.03], [0, 0.03]], F.white); faucet(0.87 + 0.08); }
        else { C(0, 0.872, 0.04, 0.2, 0.2, 0.006, F.basin, { seg: 36, kz: 0.72, noCast: 1 }); C(0, 0.876, 0.04, 0.02, 0.02, 0.004, F.faucet, { seg: 14, noCast: 1 }); faucet(0.87); }
      }
      if (look.ledMirror) R(0, 1.55, zb + 0.008, mw + 0.05, 0.85, 0.012, M.glow, 0.02, NL);
      R(0, 1.55, zb + 0.018, mw, 0.8, 0.016, F.mirror, 0.012, NL);
      break; }
    case 'tub': R(0, 0.28, 0, w, 0.56, d, F.white, 0.09); R(0, 0.553, 0, w - 0.13, 0.02, d - 0.13, F.basin, 0.008, NL); C(0, 0.6, -(d / 2) + 0.1, 0.012, 0.014, 0.1, F.faucet, { seg: 10 }); C(0, 0.645, -(d / 2) + 0.15, 0.01, 0.01, 0.11, F.faucet, { seg: 10, rx: Math.PI / 2 }); break;
    case 'shower': {
      B(-(w / 2), 1.0, 0, 0.012, 2.0, d, M.glass, NL); B(-(w / 2), 2.005, 0, 0.02, 0.012, d, F.faucet, NL);
      if (f.v === 'booth') { B(0, 1.0, d / 2, w, 2.0, 0.012, M.glass, NL); C(-0.05, 1.0, d / 2 + 0.03, 0.01, 0.01, 0.4, F.faucet, { seg: 8 }); }
      C(w / 2 - 0.05, 1.45, -(d / 2) + 0.06, 0.011, 0.011, 1.3, F.faucet, { seg: 10 }); C(w / 2 - 0.05, 2.09, -(d / 2) + 0.2, 0.01, 0.01, 0.3, F.faucet, { seg: 8, rx: Math.PI / 2 });
      C(w / 2 - 0.05, 2.07, -(d / 2) + 0.34, 0.12, 0.12, 0.012, F.faucet, { seg: 28, noCast: 1 }); B(w / 2 - 0.05, 1.05, -(d / 2) + 0.045, 0.2, 0.05, 0.05, F.faucet, NL);
      C(0, 0.003, 0.1, 0.05, 0.05, 0.004, F.faucet, { seg: 18, noCast: 1 });
      break; }
    case 'dsys': {
      const hh = f.h || 2.1; B(0, hh / 2, -(d / 2) + 0.02, w, hh, 0.03, F.kit2); for (const yy of [0.35, 1.0, 1.65, 2.05]) B(0, yy, 0, w, 0.025, d, F.wood, { noEdge: 1 });
      C(0, 1.56, 0.05, 0.012, 0.012, w - 0.1, F.faucet, { seg: 10, rz: Math.PI / 2, noCast: 1 });
      const cols = ['#e9e4da', '#b7b0a4', '#6f7780', '#d8c7b0', '#3f4347', '#f1eee8', '#9aa59a']; const n = Math.floor((w - 0.3) / 0.075);
      for (let i = 0; i < n; i++) { if (i % 7 === 5) continue; R(-w / 2 + 0.16 + i * 0.075, 1.24, 0.05, 0.05, 0.58 - (i % 3) * 0.06, 0.36, mat({ type: 'flat', color: cols[(i * 5) % cols.length], rough: 0.95 }), 0.02, NL); }
      for (let i = 0; i < 3; i++) R(-w / 2 + 0.3 + i * 0.42, 0.44, 0.02, 0.34, 0.15, 0.36, mat({ type: 'flat', color: cols[(i * 2 + 1) % cols.length], rough: 0.9 }), 0.03, NL);
      break; }
    case 'dresser': { const hh = f.h || 0.75; B(0, hh / 2 + 0.05, 0, w, hh - 0.1, d, F.wood); legs(w, d, 0.1, F.wood2, 0.016, 0.05); for (const y of [0.33, 0.56]) B(0, y, d / 2 + 0.001, w - 0.04, 0.004, 0.002, F.black, NL); C(0, 1.25, -(d / 2) + 0.03, 0.28, 0.28, 0.016, F.mirror, { seg: 40, rx: Math.PI / 2, noCast: 1 }); break; }
    case 'wardrobe': { const hh = f.h || 2.0; B(0, hh / 2 + 0.03, 0, w, hh - 0.06, d, F.wood); B(0, 0.03, 0, w - 0.06, 0.06, d - 0.06, F.black, NL); const n = Math.max(2, Math.round(w / 0.5)); for (let i = 1; i < n; i++) B(-w / 2 + w * i / n, hh / 2 + 0.03, d / 2 + 0.001, 0.004, hh - 0.1, 0.002, F.black, NL); for (let i = 0; i < n; i++) C(-w / 2 + w * (i + (i % 2 ? 0.15 : 0.85)) / n, 1.05, d / 2 + 0.018, 0.007, 0.007, 0.22, F.faucet, { seg: 8 }); break; }
    case 'piano': { const hh = f.h || 1.25; R(0, hh / 2, -0.08, w, hh, d - 0.2, F.black, 0.015); B(0, 0.66, d / 2 - 0.13, w - 0.04, 0.06, 0.26, F.black); B(0, 0.695, d / 2 - 0.1, w - 0.16, 0.012, 0.15, F.white, NL); for (const s of [-1, 1]) B(s * (w / 2 - 0.05), 0.32, d / 2 - 0.1, 0.06, 0.64, 0.08, F.black); R(0, 0.24, d / 2 + 0.3, 0.6, 0.06, 0.32, F.black, 0.02); for (const sx of [-1, 1]) for (const sz of [-1, 1]) C(sx * 0.26, 0.11, d / 2 + 0.3 + sz * 0.12, 0.016, 0.014, 0.22, F.black, { seg: 8 }); break; }
    case 'massage': { R(0, 0.3, 0.1, w, 0.5, d - 0.5, F.chair, 0.1); R(0, 0.75, -(d / 2) + 0.3, w - 0.1, 0.9, 0.34, F.chair, 0.12).rotation.x = -0.35; R(0, 0.32, d / 2 - 0.2, w - 0.2, 0.36, 0.4, F.chair, 0.1); for (const s of [-1, 1]) R(s * (w / 2 - 0.08), 0.5, 0, 0.16, 0.4, d - 0.7, F.black, 0.06); break; }
    default: B(0, (f.h || 0.8) / 2, 0, w, f.h || 0.8, d, F.wood);
  }
  return g;
}
/* 고화질 렌더 (화면 크기의 2~3배로 바로 렌더링) */
function renderHQ(mult) {
  if (!V.ready) return null;
  const r = V.renderer, pr = r.getPixelRatio(), sz = r.getSize(new V.T.Vector2());
  const target = Math.min(3, (mult || 2.5));
  r.setPixelRatio(target);
  r.setSize(sz.x, sz.y, false);
  r.shadowMap.needsUpdate = true;
  r.render(V.scene, V.camera);
  let url = null; try { url = r.domElement.toDataURL('image/jpeg', 0.92); } catch (e) { }
  r.setPixelRatio(pr); r.setSize(sz.x, sz.y, false); r.render(V.scene, V.camera);
  return url;
}

/* =====================================================================
   포토 렌더 — 경로추적(Path Tracing) 방식 · V-Ray와 같은 원리
   빛이 실제로 튀는 경로를 수백 번 계산해 간접광·부드러운 그림자·반사를 만든다
   ===================================================================== */
const PT = { lib: null, running: false, stop: false, LI: 1.6, SUN: 2.6, ENV: 1.0, EXP: 0.9, ENVR: 0.25, SUNR: 1.6, WIN: 5, LIR: 2.0 }; // ...R: 방 안에서 볼 때 쓰는 값
function ptSupported() {
  try { const r = V.renderer; return !!(r && r.capabilities.isWebGL2 && r.extensions.has('EXT_color_buffer_float')); } catch (e) { return false; }
}
function loadPT() {
  if (!PT.lib) PT.lib = Promise.all([import('three-gpu-pathtracer'), import('three/addons/postprocessing/Pass.js')])
    .then(([a, b]) => Object.assign({}, a, { FSQ: b.FullScreenQuad }));
  return PT.lib;
}
function ptMaterial(m, L, cache) {
  if (Array.isArray(m)) return m.map(x => ptMaterial(x, L, cache));
  if (cache.has(m)) return cache.get(m);
  const T = V.T; let n = m;
  if (m.userData && m.userData.glass) n = new T.MeshPhysicalMaterial({ color: '#ffffff', transmission: 1, roughness: 0.02, ior: 1.5, thickness: 0.006, metalness: 0 });
  else if (m.isMeshBasicMaterial) n = new T.MeshStandardMaterial({ color: '#111111', emissive: m.color, emissiveIntensity: 1.0, roughness: 1 });
  else if (m.isMeshLambertMaterial) n = new T.MeshStandardMaterial({ color: m.color, roughness: 0.85 });
  cache.set(m, n); return n;
}
/* 경로추적 장면을 만들어 canvas에 점점 선명하게 그린다.
   opt: { host(element), width, height, samples, onProgress(s, total, sec), onDone(dataURL) } */
async function photoRender(opt) {
  const T = V.T, L = await loadPT();
  if (V.mode !== 'render') { V.mode = 'render'; build3D(V.plan, resolveLook()); }
  const H = CFG.CEIL_H;
  const sc = new T.Scene();
  const sky = new L.GradientEquirectTexture(256);
  sky.topColor.set('#e8f0fa'); sky.bottomColor.set('#a49a8a'); sky.exponent = 1.6; sky.update();
  sc.environment = sky; sc.background = sky;
  const inRoom = V.view === 'room';
  sc.environmentIntensity = inRoom ? PT.ENVR : PT.ENV; sc.backgroundIntensity = 1.3;
  const root = V.root.clone(true), cache = new Map();
  // 창유리는 경로추적에서 뺀다 — 유리가 있으면 햇빛·하늘빛을 직접 계산하지 못해 실내가 어둡고 거칠어진다
  const panes = [];
  root.traverse(o => { if (o.isLine || o.isLineSegments) o.visible = false; else if (o.isMesh) { if (o.material && o.material.userData && o.material.userData.win) panes.push(o); else o.material = ptMaterial(o.material, L, cache); } });
  panes.forEach(o => o.parent && o.parent.remove(o));
  // 면마다 재질이 다른 물체(벽)는 면별로 나눈다 — 경로추적 엔진은 물체 하나에 재질 하나만 맞게 처리한다
  const multi = []; root.traverse(o => { if (o.isMesh && Array.isArray(o.material)) multi.push(o); });
  const splitGeos = [];
  for (const o of multi) {
    const g = o.geometry, idx = g.index, by = new Map();
    for (const gr of (g.groups.length ? g.groups : [{ start: 0, count: idx ? idx.count : g.attributes.position.count, materialIndex: 0 }])) {
      const m = o.material[gr.materialIndex] || o.material[0]; if (!by.has(m)) by.set(m, []);
      const arr = by.get(m); for (let i = gr.start; i < gr.start + gr.count; i++) arr.push(idx ? idx.getX(i) : i);
    }
    by.forEach((arr, m) => {
      const g2 = new T.BufferGeometry(); for (const k of Object.keys(g.attributes)) g2.setAttribute(k, g.attributes[k]);
      g2.setIndex(arr); splitGeos.push(g2);
      const part = new T.Mesh(g2, m); part.position.copy(o.position); part.quaternion.copy(o.quaternion); part.scale.copy(o.scale); o.parent.add(part);
    });
    o.parent.remove(o);
  }
  // 숨겨진 물체(선, 가려 둔 천장 등)는 아예 떼어낸다 — 숨김 상태로 두면 경로추적에서 재질 번호가 어긋날 수 있다
  const hidden = []; root.traverse(o => { if (!o.visible && o !== root) hidden.push(o); }); hidden.forEach(o => o.parent && o.parent.remove(o));
  sc.add(root);
  if (V.view !== 'room') {
    // 전체 보기: 스튜디오 바닥과 깨끗한 배경 (모형 사진처럼)
    const gnd = new T.Mesh(new T.PlaneGeometry(200, 200), new T.MeshStandardMaterial({ color: '#e6e2db', roughness: 1 }));
    gnd.rotation.x = -Math.PI / 2; gnd.position.set(V.bounds.cx, -0.052, V.bounds.cz); // 원래 바깥 바닥(-0.06)과 같은 높이면 두 면이 겹쳐 얼룩이 생긴다 sc.add(gnd); cache.set(gnd.material, gnd.material);
    const bg = new L.GradientEquirectTexture(64); bg.topColor.set('#f1eee8'); bg.bottomColor.set('#e2ded6'); bg.update(); sc.background = bg; sc.backgroundIntensity = 1.0;
  }
  // 햇빛 (창으로 들어오는 직사광)
  const s0 = V.lights.find(l => l.isDirectionalLight);
  if (s0) { const sun = new T.DirectionalLight('#fff0d8', inRoom ? PT.SUNR : PT.SUN); sun.position.copy(s0.position); sun.target.position.copy(s0.target.position); sc.add(sun, sun.target); }
  // 실내 조명 → 실제 면광원
  const roomView = V.view === 'room';
  // 방 안에서 볼 때는 카메라 가까운 조명만 켠다 — 보이지 않는 방의 조명은 노이즈만 늘린다
  // 방 안에서 볼 때는 그 방(거실·주방·식당은 이어진 공간까지)의 조명만 켠다.
  // 경로추적은 조명을 하나씩 뽑아 계산하므로, 벽 뒤 다른 방 조명이 많으면 계산이 헛돌아 화면이 거칠어진다.
  const cp = V.camera.position, vr = roomView ? V.plan.rooms.find(x => x.id === V.roomId) : null;
  const pad = vr && ['living', 'dining', 'kitchen'].includes(vr.type) ? 2.2 : 0.15;
  const inView = (x, z) => !vr || (x > vr.x0 - pad && x < vr.x1 + pad && z > vr.y0 - pad && z < vr.y1 + pad);
  // 전체 보기는 천장이 열려 있어 하늘빛·햇빛만으로 충분히 밝다 — 수십 개 조명을 켜면 오히려 거칠어진다
  const near = roomView ? (V.ptL || []).filter(p => inView(p.x, p.z)) : [];
  for (const p of near) {
    const w = Math.max(0.04, p.w), d = Math.max(0.04, p.d);
    const area = p.circ ? Math.PI * w * d / 4 : w * d;
    const al = new L.ShapedAreaLight('#fff0dc', Math.min(400, p.k * (roomView ? PT.LIR : PT.LI) / area), w, d);
    al.isCircular = !!p.circ;
    al.position.set(p.x, p.y, p.z);
    al.lookAt(p.x, p.up ? H + 5 : -5, p.z);
    sc.add(al);
  }
  // 창으로 들어오는 하늘빛 — 창 크기의 면광원으로 직접 계산한다 (하늘을 우연히 찾게 두면 수천 번을 계산해도 거칠다)
  if (roomView) for (const wn of (V.plan.windows || [])) {
    const zc = wn.seg.c, dir = Math.sign(wn.room.cy - zc) || 1;
    if (vr && wn.room !== vr && !(pad > 1 && inView(wn.c, zc + dir * 0.3))) continue;
    const hh = wn.head - wn.sill, wl = new L.ShapedAreaLight('#eef3ff', PT.WIN, Math.max(0.3, wn.w - 0.1), Math.max(0.3, hh - 0.1));
    wl.position.set(wn.c, (wn.sill + wn.head) / 2, zc + dir * 0.14); wl.lookAt(wn.c, (wn.sill + wn.head) / 2, zc + dir * 5); sc.add(wl);
  }
  const W = opt.width, Hh = opt.height;
  const cam = new T.PerspectiveCamera(V.camera.fov, W / Hh, 0.03, 300);
  cam.position.copy(V.camera.position); cam.quaternion.copy(V.camera.quaternion); cam.updateMatrixWorld();
  const r = new T.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
  r.setPixelRatio(1); r.setSize(W, Hh, false);
  r.toneMapping = T.NeutralToneMapping || T.ACESFilmicToneMapping; r.toneMappingExposure = PT.EXP;
  r.outputColorSpace = T.SRGBColorSpace;
  r.domElement.style.width = '100%'; r.domElement.style.height = '100%'; r.domElement.style.objectFit = 'contain';
  opt.host.innerHTML = ''; opt.host.appendChild(r.domElement);
  const pt = new L.WebGLPathTracer(r);
  pt.bounces = 6; pt.filterGlossyFactor = 0.5; pt.minSamples = 1; pt.fadeDuration = 0; pt.renderDelay = 0;
  pt.tiles.set(W > 1200 ? 3 : 2, W > 1200 ? 3 : 2); pt.rasterizeScene = true;
  pt.setScene(sc, cam);
  PT.last = { pt, sc };
  PT.running = true; PT.stop = false; PT.discard = false;
  const t0 = performance.now(), total = opt.samples;
  const finish = () => {
    PT.running = false;
    // 마지막에 노이즈 제거 필터를 한 번 적용
    if (PT.DN !== 0) try {
      const dm = new L.DenoiseMaterial({ map: pt.target.texture, sigma: Math.max(1.8, Math.min(roomView ? 4.5 : 3.5, W / 240)), threshold: roomView ? 0.12 : 0.1, kSigma: 1.0, opacity: 1 });
      const q = new L.FSQ(dm); r.autoClear = true; q.render(r); q.dispose(); dm.dispose();
    } catch (e) { console.warn('denoise', e); }
    const url = r.domElement.toDataURL('image/jpeg', 0.92);
    const out = { url, samples: pt.samples, sec: (performance.now() - t0) / 1000 };
    setTimeout(() => { [() => pt.dispose(), () => r.dispose(), () => sky.dispose(), () => splitGeos.forEach(x => x.dispose()), () => cache.forEach((v, k) => { if (v !== k && v && v.dispose) v.dispose(); })].forEach(f => { try { f(); } catch (e) { } }); }, 50);
    if (!PT.discard) opt.onDone && opt.onDone(out);
  };
  const step = () => {
    if (PT.stop || pt.samples >= total) return finish();
    pt.renderSample();
    opt.onProgress && opt.onProgress(Math.floor(pt.samples), total, (performance.now() - t0) / 1000);
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
// 견적서·발주용 제품 표기 — 브랜드 + 제품명 + 품번 (품번이 이름에 이미 있으면 생략)
const pLabel = c => !c ? '' : `${c.b ? c.b + ' ' : ''}${c.n}${c.code && !String(c.n).includes(c.code) ? ' (' + c.code + ')' : ''}`;
/* =====================================================================
   상태 · 기본값 · 방별 선택 · 3D 모양 · 견적 · AI 해설
   ===================================================================== */
const LS_KEY = 'smct_ai_v2', LS_ACCESS = 'smct_ai_access';
const BALC_LABEL = { ext: '확장형 (이미 확장됨)', none: '비확장 (발코니 유지)', newLiving: '거실만 신규 확장', newAll: '전체 신규 확장' };
const ST = Object.assign({
  info: { complex: '', complexCode: '', region: '', sizeId: 's34', A: 84, bays: 4, rooms: 3, baths: 2, balcony: 'ext', mirror: false, year: 2008, style: 'modern', grade: 2, ptype: 'A' },
  sel: {}, room: {}, bath: {}, furn: {}, fx: {}, custom: [], step: 1, visited: 1, submitted: false, leadId: null, tab: '_common',
}, lsGet(LS_KEY, {}) || {});
['room', 'bath', 'furn', 'fx'].forEach(k => { if (!ST[k]) ST[k] = {}; });
if (!Array.isArray(ST.custom)) ST.custom = [];
let PLAN = null, QTY = null, EST = null;
const SNAPS = [];
const isAdmin = () => window.__SMCT_ROLE === 'admin';
const unlocked = () => ST.submitted || isAdmin();
const save = debounce(() => lsSet(LS_KEY, ST), 300);
const sizeLabel = () => { const s = SIZES.find(x => x.id === ST.info.sizeId); return s && s.id !== 'custom' ? s.label : '전용 ' + ST.info.A + '㎡'; };
const supplyPy = () => { const s = SIZES.find(x => x.id === ST.info.sizeId); return s && s.id !== 'custom' ? parseInt(s.label, 10) : ST.info.A * 1.33 / 3.3058; };
const styleOf = () => STYLES.find(s => s.id === ST.info.style) || STYLES[0];
const projTitle = () => (ST.info.complex ? ST.info.complex + ' ' : '') + sizeLabel();
const gradeC = () => Math.min(ST.info.grade, styleOf().maxGrade || 4);
const ageOf = () => 2026 - (+ST.info.year || 2008);
const toneIdx = (list, t) => { const i = (list || []).findIndex(x => x.t === t); return i >= 0 ? i : 0; };

/* ---------- 방 키 (식당은 주방과 같이) ---------- */
function roomKey(r) {
  if (!r) return '';
  if (r.type === 'dining') { const k = PLAN && PLAN.rooms.find(x => x.type === 'kitchen'); return k ? k.name : r.name; }
  return r.name;
}

/* ---------- 프리셋 (스타일 × 등급 × 연식) ---------- */
function applyPreset() {
  const st = styleOf(), Gc = gradeC(), age = ageOf();
  const toneKey = { floor: 'floor', wall: 'wall', door: 'door', kitchen: 'kitchen', window: 'frame', middoor: 'mid', artwall: 'art' };
  for (const cat of CATALOG) {
    if (cat.multi) continue;
    let opt = st.prefer[cat.id] && !(st.maxGrade && (optOf(cat.id, st.prefer[cat.id]) || {}).grade > st.maxGrade) ? optOf(cat.id, st.prefer[cat.id]) : null;
    if (!opt) { const c = cat.options.filter(o => o.grade > 0 && o.grade <= Gc && !o.brand).sort((a, b) => b.grade - a.grade); opt = c[0] || cat.options.find(o => o.grade === 1) || cat.options[0]; }
    if (cat.brands && cat.id === 'door') { const c = cat.options.filter(o => o.grade > 0 && o.grade <= Gc).sort((a, b) => b.grade - a.grade); opt = c[0] || opt; }
    if (cat.id === 'demo') opt = optOf('demo', (age >= 12 || Gc >= 2) ? 'full' : 'partial');
    if (cat.id === 'window') opt = optOf('window', age >= 15 ? 'kcc-' + clamp(Gc >= 4 ? 4 : Gc >= 3 ? 3 : 2, 2, 4) : (Gc >= 4 ? 'kcc-3' : 'keep'));
    if (cat.id === 'kwall') opt = optOf('kwall', ['keep', 'keep', 'tile', 'porcelain', 'slab'][Gc]);
    if (cat.id === 'pendant') opt = optOf('pendant', Gc >= 3 ? (st.id === 'natural' || st.id === 'nordic' ? 'gold' : 'black') : 'none');
    let c = 0; const cl = colorsFor(cat.id, opt.id), tk = toneKey[cat.id];
    if (cl && tk) c = toneIdx(cl, st.tone[tk]);
    const sel = { o: opt.id, c };
    if (cat.id === 'window') sel.b = opt.brand || 'kcc';
    if (cat.id === 'door') sel.b = 'yl';
    if (cat.id === 'middoor') sel.v = 'clear';
    ST.sel[cat.id] = sel;
  }
  const en = [];
  if (Gc >= 3) en.push('sysac');
  if (age >= 15 && Gc >= 2) en.push('insul');
  ST.sel.energy = { list: en };
  ST.room = {}; ST.bath = {};
  save();
}
function ensureSel() { if (!ST.sel || !ST.sel.floor || !ST.sel.kwall) { ST.sel = {}; applyPreset(); } }

/* ---------- 방별 선택 (개별 지정 없으면 공통값) ---------- */
function rsel(r, catId) { const k = roomKey(r); const o = ST.room[k] && ST.room[k][catId]; return o || ST.sel[catId] || {}; }
function roomOverride(key, catId) { return ST.room[key] && ST.room[key][catId]; }
function closetDefault(r) { const G = gradeC(); return r.type === 'master' ? ['none', 'none', 'closet', 'slide', 'glass'][G] : ['none', 'none', 'none', 'closet', 'slide'][G]; }
function closetSel(r) { const o = ST.room[r.name] && ST.room[r.name].closet; return o || { o: closetDefault(r), c: toneIdx(C.closet, ({ natural: 'wood', hotel: 'gray', minimal: 'gray' })[styleOf().id] || 'white') }; }
function dressSel(r) { const o = ST.room[r.name] && ST.room[r.name].dress; return o || { o: ['none', 'none', 'shelf', 'shelf', 'premium'][gradeC()] }; }
function bathDefault() {
  const G = gradeC(), st = styleOf(), age = ageOf();
  const base = [null,
    { scope: 'partial', wall: 'w300', floor: 'f300', shower: 'keep', toilet: 'one', basin: 'cabinet', faucet: 'chrome', storage: 'slide', ceiling: 'smc', drain: 'basic' },
    { scope: 'overlay', wall: 'w600', floor: 'f300', shower: 'booth', toilet: 'one', basin: 'cabinet', faucet: 'chrome', storage: 'led', ceiling: 'al', drain: 'basic' },
    { scope: 'full', wall: 'w1200', floor: 'f600', shower: 'walkin', toilet: 'smart', basin: 'topbowl', faucet: 'black', storage: 'niche', ceiling: 'al', drain: 'line' },
    { scope: 'full', wall: 'w1200', floor: 'f1200', shower: 'walkin', toilet: 'wall', basin: 'jendai', faucet: 'built', storage: 'niche', ceiling: 'inno', drain: 'line' }][G];
  const v = Object.assign({}, base, { extra: G >= 3 ? ['heater'] : [] });
  if (age >= 20 && G >= 2) v.scope = 'full';
  if (st.id === 'hotel') v.faucet = G >= 4 ? 'built' : 'gunmetal';
  if (st.id === 'nordic' && G >= 2) { v.wall = 'terrazzo'; v.floor = 'fterr'; v.faucet = 'gold'; v.storage = 'round'; }
  if (st.id === 'natural' && G >= 2) v.basin = G >= 3 ? 'topbowl' : 'cabinet';
  const tone = { modern: 'white', natural: 'beige', hotel: 'dark', minimal: 'gray', nordic: 'terrazzo', value: 'white' }[st.id] || 'white';
  v.c = toneIdx(C.bath, tone); v.fc = toneIdx(C.bath, tone === 'dark' ? 'dark' : tone === 'white' ? 'gray' : tone);
  return v;
}
function bathCfg(name) { return Object.assign(bathDefault(), ST.bath[name] || {}); }
const SCOPE_RANK = { keep: 0, partial: 1, overlay: 2, full: 3 };
function bathAllowed(cfg, item) { const rk = SCOPE_RANK[cfg.scope] || 0; if (rk === 0) return false; if (BATH_ITEM[item].needs === 'tile') return rk >= 2; return true; }
function bItem(key, id) { return (BATH_ITEM[key].list.find(x => x.id === id)) || BATH_ITEM[key].list[0]; }

/* ---------- 재생성 ---------- */
function furnSel() {
  const fs = JSON.parse(JSON.stringify(ST.furn || {}));
  if (PLAN) PLAN.rooms.filter(r => BATHS.includes(r.type)).forEach(r => { const c = bathCfg(r.name); fs[r.name] = { toilet: bItem('toilet', c.toilet).as || c.toilet, basin: bItem('basin', c.basin).as || c.basin, shower: c.shower === 'tub2shower' ? 'booth' : (c.shower === 'tub' || c.shower === 'keep') ? (r.type === 'mbath' ? 'booth' : 'tub') : c.shower }; });
  return fs;
}
function regen() {
  const i = ST.info;
  PLAN = genPlan({ A: i.A, bays: i.bays, rooms: i.rooms, baths: i.baths, balcony: i.balcony, mirror: i.mirror });
  refurnish();
}
function refurnish() { placeFurniture(PLAN, furnSel(), ST.fx, { island: (ST.sel.island || {}).o === 'island' }); recalc(); }
function recalc() { QTY = calcQty(PLAN); EST = estimate(); updateBottom(); }
function colorOf(catId, s) {
  s = s || ST.sel[catId]; if (!s) return null;
  const cl = colorsFor(catId, s.o); return cl ? cl[clamp(s.c || 0, 0, cl.length - 1)] : null;
}

/* ---------- 3D 모양 ---------- */
function specFor(catId, s, fallback) {
  const o = optOf(catId, (s || {}).o) || {};
  const col = colorOf(catId, s);
  return Object.assign({ color: col ? col.c : fallback }, (col && col.mat) || o.mat || { type: catId === 'floor' ? 'wood' : 'paper' });
}
function resolveLook() {
  const o = id => optOf(id, (ST.sel[id] || {}).o) || {};
  const cc = (id, d) => (colorOf(id) || { c: d }).c;
  const st = styleOf();
  const L = {
    floor: cc('floor', '#c39d6e'), floorMat: o('floor').mat || { type: 'wood', plank: 0.19 },
    wall: cc('wall', '#f3f1ec'), wallMat: o('wall').mat || { type: 'paper' },
    artOn: !!o('artwall').mat, art: cc('artwall', '#ece9e4'), artMat: o('artwall').mat,
    bath: C.bath[bathDefault().c].c, frame: cc('window', '#f2f2f0'), door: cc('door', '#f1efea'), hiddenDoor: o('door').id === 'hidden',
    kitchen: cc('kitchen', '#f0eee9'), kitTop: o('kitchen').top || '#efede8',
    kitSplash: o('kwall').splash ? o('kwall').splash.color : null, upper: (ST.sel.upper || {}).o || 'cab', pendant: (ST.sel.pendant || {}).o !== 'none' ? (ST.sel.pendant || {}).o : null,
    mid: cc('middoor', '#2a2a2a'), midOn: o('middoor').id && o('middoor').id !== 'none' ? o('middoor').id : null,
    island: o('island').id === 'island', shoeTall: o('entry').id === 'full',
    light: o('lighting').id || 'basic', cove: o('ceilDesign').id === 'cove',
    sysac: ((ST.sel.energy || {}).list || []).includes('sysac'),
    balcMat: o('balcony').id === 'deck' ? { type: 'deck', color: '#6e5039' } : o('balcony').id === 'tile' ? { type: 'tile', color: '#cdc7be', tw: 0.3, th: 0.3 } : null,
    fabric: { modern: '#9a9792', natural: '#cbbda8', hotel: '#6f6a64', minimal: '#8a8a88', nordic: '#d6d0c4', value: '#a29d96' }[st.id],
    rug: { natural: '#d9cbb5', nordic: '#e4ddd0', hotel: '#9f978c' }[st.id], woodFurn: { hotel: '#5d4535', minimal: '#8b7b6a' }[st.id],
  };
  const ks = o('kwall').splash; if (ks) L.kitSplashSpec = ks;
  const kt = o('ktop'); if (kt.id && kt.id !== 'incl') { const tc = colorOf('ktop'); if (tc) L.kitTop = tc.c; }
  const fm = o('film'); if (fm.id && fm.id !== 'none') { const fc = colorOf('film'); if (fc) { L.filmColor = fc.c; if (fm.id === 'furn' || fm.id === 'all') L.closetFilm = fc.c; } }
  L.floorFor = r => {
    if (LIVE.includes(r.type)) return specFor('floor', rsel(r, 'floor'), L.floor);
    if (BATHS.includes(r.type)) { const c = bathCfg(r.name), t = bItem('floor', c.floor).tile || { tw: 0.3, th: 0.3 }; return { type: 'tile', color: shade2(C.bath[clamp(c.fc != null ? c.fc : c.c, 0, C.bath.length - 1)].c, -0.06), tw: t.tw, th: t.th, terrazzo: t.terrazzo, rough: 0.35 }; }
    return null;
  };
  L.wallFor = r => LIVE.includes(r.type) || r.type === 'entry' ? specFor('wall', rsel(r, 'wall'), L.wall) : null;
  L.bathWallFor = r => { const c = bathCfg(r.name), tp = BATH_ITEM.tileP && c.tileP && c.tileP !== 'auto' && bathAllowed(c, 'tileP') ? bItem('tileP', c.tileP) : null; if (tp && tp.c) return { type: 'tile', color: tp.c, tw: tp.tw || 0.6, th: tp.th || 1.2, vein: tp.vein, terrazzo: tp.terrazzo, rough: 0.3 }; const t = bItem('wall', c.wall).tile || { tw: 0.3, th: 0.6 }; return { type: 'tile', color: C.bath[clamp(c.c, 0, C.bath.length - 1)].c, tw: t.tw, th: t.th, vein: t.vein, terrazzo: t.terrazzo, rough: 0.3 }; };
  L.lightFor = r => (rsel(r, 'lighting').o) || L.light;
  L.closetFor = name => { const r = PLAN && PLAN.rooms.find(x => x.name === name); if (!r) return null; const s = closetSel(r); if (!s.o || s.o === 'none') return L.closetFilm || null; return C.closet[clamp(s.c || 0, 0, C.closet.length - 1)].c; };
  L.roomFill = r => { if (LIVE.includes(r.type)) { const sp = L.floorFor(r); return lighten(sp.color, 0.45); } if (BATHS.includes(r.type)) return lighten(L.bathWallFor(r).color, 0.3); return null; };
  if (typeof photoSpec === 'function') {
    const f0 = L.floorFor, w0 = L.wallFor;
    L.floorFor = r => (LIVE.includes(r.type) && photoSpec('floor', r)) || f0(r);
    L.wallFor = r => ((LIVE.includes(r.type) || r.type === 'entry') && photoSpec('wall', r)) || w0(r);
    const ap = photoSpec('artwall', null); if (ap) { L.artOn = true; L.artMat = ap; L.art = '#ffffff'; }
  }
  const mb = PLAN && PLAN.rooms.find(r => BATHS.includes(r.type));
  if (mb) { const c = bathCfg(mb.name); L.faucet = bItem('faucet', c.faucet).c; L.ledMirror = c.storage === 'led' || !!(bItem('storage', c.storage) || {}).led; }
  return L;
}

/* ---------- 견적 ---------- */
function estimate() {
  const lines = [];
  const push = (cat, name, unit, qty, price, extra) => {
    const q = unit === 'EA' || unit === '대' || unit === '식' || unit === '개소' ? Math.round(qty) : r1(qty);
    if (q <= 0 && !(extra && (extra.consult || extra.free))) return;
    lines.push(Object.assign({ cat: cat.id || cat, catName: cat.name || cat, icon: cat.icon || '•', name, unit, qty: q, price, amt: Math.round(q * price / 100) * 100 }, extra || {}));
  };
  const brandName = (cat, s) => { const b = (cat.brands || []).find(x => x.id === (s.b || (optOf(cat.id, s.o) || {}).brand)); return b ? b.n + ' ' : ''; };
  const ROOMWISE = ['floor', 'wall', 'lighting'];
  for (const cat of CATALOG) {
    const s = ST.sel[cat.id]; if (!s) continue;
    if (ROOMWISE.includes(cat.id)) continue;
    const opts = cat.multi ? (s.list || []).map(id => optOf(cat.id, id)).filter(Boolean) : [optOf(cat.id, s.o)].filter(Boolean);
    for (const opt of opts) {
      const col = colorOf(cat.id);
      let nm = (cat.id === 'window' && opt.brand ? ((WIN_BRANDS.find(x => x.id === opt.brand) || {}).n || '') + ' ' : '') + (cat.id === 'door' && opt.brand ? brandName(cat, s) : '') + opt.name + (col && !cat.multi ? ` · ${pLabel(col)}` : '');
      if (cat.variants && opt.id !== 'none') { const v = cat.variants.list.find(x => x.id === s.v) || cat.variants.list[0]; nm += ` · ${v.n} 유리`; }
      if (opt.lines) opt.lines.forEach(l => push(cat, l.name + (col ? ` · ${pLabel(col)}` : ''), l.unit, QTY[l.q] || 0, l.price));
      else if (opt.price > 0) push(cat, nm, opt.unit, QTY[opt.q] || 0, opt.price + (cat.variants && opt.id !== 'none' ? ((cat.variants.list.find(x => x.id === s.v) || {}).p || 0) : 0));
      else if (opt.consult) push(cat, opt.name, '식', 1, 0, { consult: true });
    }
  }
  // 방별: 바닥·벽·조명 (같은 자재끼리 묶음)
  const groupBy = (catId, rooms, qtyOf) => {
    const cat = CAT[catId], m = new Map();
    for (const r of rooms) {
      const s = rsel(r, catId), opt = optOf(catId, s.o); if (!opt || !opt.price) continue;
      const col = colorOf(catId, s), key = opt.id + '|' + (col ? pLabel(col) : '');
      const e = m.get(key) || { opt, col, q: 0, names: [] }; e.q += qtyOf(r); if (!e.names.includes(roomKey(r))) e.names.push(roomKey(r)); m.set(key, e);
    }
    for (const e of m.values()) push(cat, `${e.opt.name}${e.col ? ' · ' + pLabel(e.col) : ''} (${e.names.length > 3 ? e.names.slice(0, 3).join('·') + ' 외' : e.names.join('·')})`, e.opt.unit, e.q, e.opt.price);
  };
  const live = PLAN.rooms.filter(r => LIVE.includes(r.type));
  groupBy('floor', live, r => r.area);
  groupBy('wall', live.concat(PLAN.rooms.filter(r => r.type === 'entry')), r => QTY.wallBy[r.name] || 0);
  groupBy('lighting', live, r => r.area);
  // 수납
  const cz = { id: 'closet', name: '붙박이장·수납', icon: '🗄️' };
  PLAN.rooms.filter(r => r.type === 'master' || r.type === 'bed').forEach(r => { const s = closetSel(r), it = CLOSET.list.find(x => x.id === s.o); if (it && it.p) push(cz, `${r.name} ${it.n} · ${C.closet[clamp(s.c || 0, 0, 4)].n}`, 'm', QTY.closetBy[r.name] || 1.8, it.p); });
  PLAN.rooms.filter(r => r.type === 'dress').forEach(r => { const it = DRESS.list.find(x => x.id === dressSel(r).o); if (it && it.p) push(cz, `드레스룸 ${it.n}`, 'm', QTY.dressM, it.p); });
  // 욕실
  PLAN.rooms.filter(r => BATHS.includes(r.type)).forEach(r => {
    const c = bathCfg(r.name), bz = { id: 'bath', name: '욕실', icon: '🛁' };
    const sc = bItem('scope', c.scope); if (!sc.p) return;
    push(bz, `${r.name} ${sc.n}`, '개소', 1, sc.p);
    for (const b of BATH) {
      if (b.key === 'scope') continue;
      if (b.multi) { (c[b.key] || []).forEach(id => { const it = b.list.find(x => x.id === id); if (it && it.p) push(bz, `${r.name} ${it.n}`, '식', 1, it.p); }); continue; }
      if (!bathAllowed(c, b.key)) continue;
      const it = bItem(b.key, c[b.key]);
      const tp = b.key === 'wall' && c.tileP && c.tileP !== 'auto' && BATH_ITEM.tileP ? bItem('tileP', c.tileP) : null;
      if (it && (it.p || it.rank)) push(bz, `${r.name} ${b.label.replace(/\s*\(.*?\)\s*$/, '')}: ${it.full || it.n}${b.key === 'wall' ? ' · ' + (tp ? `${tp.b || ''} ${tp.code && !tp.n.includes(tp.code) ? tp.code + ' ' : ''}${tp.n}` : C.bath[clamp(c.c, 0, C.bath.length - 1)].n) : ''}`, '식', 1, it.p || 0, it.p ? undefined : { incl: true });
    }
  });
  if (typeof customLines === 'function') customLines(push);
  if (QTY.extAdd > 0) push({ id: 'expand', name: '발코니 확장', icon: '📐' }, '발코니 확장 공사 (단열·난방 배관·마감, 행위허가 대행)', '㎡', QTY.extAdd, 600000);
  const cm = { id: 'common', name: '공통·가설', icon: '🧰' };
  push(cm, '공용부 보양 · 엘리베이터 사용 · 공사 신고', '식', 1, 450000);
  push(cm, '입주 청소', '㎡', QTY.area + QTY.balc, 5000);
  push(cm, '설계 · 3D 디자인 (SMCT 시공 시 무료)', '식', 1, 0, { free: true });
  const sub = lines.reduce((t, l) => t + l.amt, 0);
  const overhead = Math.round(sub * CFG.OVERHEAD / 1000) * 1000;
  const total = sub + overhead;
  const groups = {};
  lines.forEach(l => { (groups[l.catName] = groups[l.catName] || { name: l.catName, icon: l.icon, amt: 0 }).amt += l.amt; });
  return { lines, sub, overhead, total, vat: Math.round(total * CFG.VAT), low: total * CFG.RANGE[0], high: total * CFG.RANGE[1], perPy: total / supplyPy(), groups: Object.values(groups).sort((a, b) => b.amt - a.amt) };
}
function roomCost(key) {
  if (!EST) return 0;
  return EST.lines.filter(l => l.name.startsWith(key + ' ') || l.name.includes('(' + key) || l.name.includes('·' + key + ')') || l.name.includes('·' + key + '·')).reduce((t, l) => t + l.amt, 0);
}
function updateBottom() {
  if (!EST) return;
  $('#bbTotal').textContent = `${man(EST.low)} ~ ${man(EST.high)}`;
  $('#projName').textContent = projTitle();
}

/* ---------- AI 설계 해설 ---------- */
function aiSections() {
  const i = ST.info, st = styleOf(), o = id => optOf(id, (ST.sel[id] || {}).o) || {}, col = id => (colorOf(id) || {}).n || '';
  const age = ageOf(), en = (ST.sel.energy || {}).list || [];
  const short = n => String(n || '').replace(/\s*\(.*?\)\s*/g, ' ').trim();
  const S = [];
  const winBrand = ((CAT.window.brands || []).find(b => b.id === (ST.sel.window || {}).b) || {}).n || '';
  const art = o('artwall').id && o('artwall').id !== 'none' ? `거실 TV 벽은 ${col('artwall')} ${short(o('artwall').name)}로 포인트를 주고, ` : '거실은 벽과 같은 마감으로 넓게 쓰고, ';
  const ceil = { keep: '천장은 기존 형태를 살렸습니다', flat: '우물천장을 평탄화해 천장을 넓고 높게 보이게 했습니다', line: '천장을 평탄화하고 라인 조명으로 공간의 축을 만들었습니다', cove: '간접조명 우물천장과 커튼박스로 호텔 같은 은은한 빛을 연출했습니다' }[o('ceilDesign').id] || '';
  const ovRooms = Object.keys(ST.room).filter(k => ST.room[k] && (ST.room[k].floor || ST.room[k].wall || ST.room[k].lighting));
  S.push({ t: '설계 컨셉', open: 1, h: `<p class="concept">「${esc(projTitle())}」 — <b>${st.name}</b></p>
    <p>${st.desc}. 집 전체 바닥은 <b>${col('floor')} ${short(o('floor').name)}</b>, 벽은 <b>${col('wall')} ${short(o('wall').name)}</b>를 기본으로 하고, ${art}${ceil}.${ovRooms.length ? ` 특히 <b>${ovRooms.join('·')}</b>은(는) 방 성격에 맞게 마감을 따로 골랐습니다.` : ''} 창호는 <b>${winBrand} ${short(o('window').name)}</b>, 실내 문은 ${col('door')} ${short(o('door').name)}입니다.</p>
    <div class="palette">${['floor', 'wall', 'artwall', 'door', 'kitchen'].map(id => colorOf(id) ? `<span><i style="background:${colorOf(id).c}"></i>${CAT[id].name.replace(' 마감', '').replace('거실 ', '').replace(' (목문)', '')}<small>${colorOf(id).n}</small></span>` : '').join('')}</div>
    <div class="kpis"><div><b>${r1(QTY.area)}㎡</b><small>실사용 면적</small></div><div><b>${i.rooms}룸 · ${i.baths}욕실</b><small>${i.bays}Bay ${({ A: '', B: '', C: '', D: '' })[i.ptype] || ''}판상형</small></div><div><b>${r1(QTY.win)}㎡</b><small>창호 면적</small></div><div><b>${age}년차</b><small>${i.year}년 준공</small></div></div>` });
  const rooms = [];
  const lv = PLAN.rooms.find(r => r.type === 'living'), kt = PLAN.rooms.find(r => r.type === 'kitchen');
  const rn = (r, cat) => { const s = rsel(r, cat), op = optOf(cat, s.o) || {}, c = colorOf(cat, s); return `${c ? c.n + ' ' : ''}${short(op.name)}`; };
  if (lv) rooms.push(`<li><b>거실</b> — 바닥 ${rn(lv, 'floor')}, ${o('artwall').id !== 'none' ? short(o('artwall').name).replace(/\s*아트월\s*$/, '') + ' 아트월, ' : ''}${short(o('ceilDesign').name)}, 조명 ${rn(lv, 'lighting')}. 소파는 ${(FURN[(ST.furn[lv.name] || {}).sofa || 'sofa3'] || {}).n} 배치입니다.</li>`);
  if (kt) rooms.push(`<li><b>주방·식당</b> — ${col('kitchen')} ${short(o('kitchen').name)}, 벽은 ${short(o('kwall').name)}, ${({ cab: '상부장', open: '오픈 선반', none: '상부장 없이 개방' })[(ST.sel.upper || {}).o || 'cab']}${o('island').id === 'island' ? ', 아일랜드 식탁' : ''}${o('pendant').id && o('pendant').id !== 'none' ? ', ' + short(o('pendant').name) : ''}.</li>`);
  PLAN.rooms.filter(r => r.type === 'master' || r.type === 'bed' || r.type === 'study').forEach(r => { const cs = closetSel(r), ci = CLOSET.list.find(x => x.id === cs.o); rooms.push(`<li><b>${r.name}</b> — 벽 ${rn(r, 'wall')}, 바닥 ${rn(r, 'floor')}, 조명 ${rn(r, 'lighting')}${ci && ci.p ? ', ' + ci.n : ''}.</li>`); });
  PLAN.rooms.filter(r => BATHS.includes(r.type)).forEach(r => { const c = bathCfg(r.name); rooms.push(`<li><b>${r.name}</b> — ${bItem('scope', c.scope).n}${bathAllowed(c, 'wall') ? `, ${C.bath[clamp(c.c, 0, 4)].n} ${bItem('wall', c.wall).n}, ${bItem('shower', c.shower).n}` : ''}, ${bItem('toilet', c.toilet).n}, ${bItem('basin', c.basin).n}, ${bItem('faucet', c.faucet).n} 수전.${age >= 20 && SCOPE_RANK[c.scope] < 3 ? ' <em>20년 이상 된 욕실은 방수층을 새로 만드는 전체 철거를 권합니다.</em>' : ''}</li>`); });
  rooms.push(`<li><b>현관</b> — ${short(o('entry').name)}${o('middoor').id !== 'none' ? ` + ${col('middoor')} ${short(o('middoor').name)}` : ''}.</li>`);
  S.push({ t: '공간별 제안', open: 1, h: `<ul class="ul">${rooms.join('')}</ul>` });
  const mats = ['floor', 'wall', 'artwall', 'window', 'door', 'molding', 'ceilDesign', 'kitchen', 'kwall', 'middoor', 'lighting'].map(id => o(id)).filter(x => x && (x.pros || x.cons));
  const b0 = PLAN.rooms.find(r => BATHS.includes(r.type)); if (b0) { const sc = bItem('scope', bathCfg(b0.name).scope); if (sc.pros) mats.push({ name: '욕실 ' + sc.n, pros: sc.pros, cons: sc.cons }); }
  en.forEach(id => { const x = optOf('energy', id); if (x && x.pros) mats.push(x); });
  S.push({ t: '자재 해설 — 장점과 주의점', h: `<div class="mats">${mats.map(m => `<div><b>${esc(m.name)}</b>${m.pros ? `<p>👍 ${m.pros}</p>` : ''}${m.cons ? `<p>⚠️ ${m.cons}</p>` : ''}</div>`).join('')}</div>` });
  const rec = [];
  if (age >= 15 && o('window').id === 'keep') rec.push(`<b>창호 교체</b> — ${age}년 된 창호는 냉난방비가 새는 가장 큰 원인입니다. SMCT는 금속창호 면허 직시공사로 KCC·이건·LX 창호를 모두 시공합니다.`);
  if (age >= 15) rec.push(`<b>설비·전기 점검</b> — 15년 이상이면 급수·난방 배관과 분전반 점검을 권합니다.`);
  if (!en.includes('insul') && QTY.extWall > 15) rec.push(`<b>내단열 보강</b> — 외벽에 접한 벽(약 ${Math.round(QTY.extWall)}㎡)에 이보드 단열을 더하면 결로·곰팡이를 크게 줄입니다.`);
  if (!en.includes('sysac')) rec.push(`<b>시스템에어컨</b> — 천장 공사 때 함께 매립해야 배관이 깔끔합니다.`);
  rec.push(`<b>에너지 절감 (SMCT 신재생)</b> — 베란다형 태양광은 보조금 대상이고, 개별난방 세대는 공기열 히트펌프 설계를 상담해 드립니다.`);
  if (QTY.extAdd > 0) rec.push(`<b>발코니 확장</b> — 행위허가(신고)가 필요하며 SMCT가 대행합니다.`);
  S.push({ t: 'SMCT 추천 — 신자재·에너지', h: `<ul class="ul">${rec.map(x => `<li>${x}</li>`).join('')}</ul>` });
  const g = id => (ST.sel[id] || {}).o, stg = [];
  const bathFull = PLAN.rooms.some(r => BATHS.includes(r.type) && bathCfg(r.name).scope === 'full');
  const bathTile = PLAN.rooms.filter(r => BATHS.includes(r.type) && SCOPE_RANK[bathCfg(r.name).scope] >= 2).length;
  if (g('demo') !== 'keep') stg.push(['철거·폐기물', g('demo') === 'full' ? 3 : 2]);
  if (QTY.extAdd > 0) stg.push(['발코니 확장·단열', 4]);
  if (bathFull || g('demo') === 'full') stg.push(['설비·방수', 3]);
  if (g('window') && g('window') !== 'keep' && g('window') !== 'film') stg.push(['창호(샷시) 교체', 2]);
  if (g('ceilDesign') !== 'keep' || ['minus', 'none'].includes(g('molding')) || ['abs', 'design', 'hidden', 'paint', 'pocket'].includes(g('door'))) stg.push(['목공 (천장·몰딩·문틀)', g('ceilDesign') === 'cove' || g('molding') === 'none' ? 8 : 5]);
  stg.push(['전기·조명·설비', 2]);
  const tileDays = bathTile * 2 + (PLAN.rooms.some(r => LIVE.includes(r.type) && rsel(r, 'floor').o === 'porcelain') ? 4 : 0) + (g('entry') !== 'keep' ? 1 : 0) + (['porcelain', 'slab'].includes(g('artwall')) ? 1 : 0) + (g('kwall') !== 'keep' ? 1 : 0);
  if (tileDays) stg.push(['타일', tileDays]);
  if (PLAN.rooms.some(r => LIVE.includes(r.type) && ['paint', 'limewash'].includes(rsel(r, 'wall').o)) || g('ceiling') === 'paint') stg.push(['도장 (퍼티·샌딩)', 5]);
  if (g('door') === 'film' || g('kitchen') === 'film' || g('window') === 'film') stg.push(['인테리어 필름', 2]);
  if (PLAN.rooms.some(r => LIVE.includes(r.type) && ['paper', 'silk', 'fabric'].includes(rsel(r, 'wall').o))) stg.push(['도배', 2]);
  if (PLAN.rooms.some(r => LIVE.includes(r.type) && !['keep', 'porcelain'].includes(rsel(r, 'floor').o))) stg.push(['바닥재', 2]);
  stg.push(['가구 (주방·붙박이장·신발장)', 3]);
  if (g('middoor') !== 'none') stg.push(['중문', 1]);
  stg.push(['입주 청소·마감 점검', 2]);
  const tot = stg.reduce((t, x) => t + x[1], 0), cal = Math.ceil(tot * 0.82);
  let acc = 0;
  S.push({ t: `공정 계획 — 약 ${Math.ceil(cal / 7)}주 (${cal}일 내외)`, h: `<div class="gantt">${stg.map(([n, d]) => { const l = acc / tot * 100, w = d / tot * 100; acc += d * 0.82; return `<div class="gr"><span>${n}</span><div><i style="left:${Math.min(l, 96)}%;width:${Math.max(w, 3)}%"></i></div><em>${d}일</em></div>`; }).join('')}</div><p class="tiny">공정은 일부 겹쳐 진행합니다. 자재 수급·관리사무소 공사 가능 시간에 따라 달라질 수 있습니다.</p>` });
  const top = EST.groups.slice(0, 3), tips = [];
  const alt = (cat, from, to) => { if (g(cat) !== from) return; const a = optOf(cat, from), b = optOf(cat, to); if (!a || !b) return; const q = QTY[a.q] || 0; const d = ((a.price || (a.lines ? a.lines[0].price : 0)) - (b.price || (b.lines ? b.lines[0].price : 0))) * q; if (d > 0) tips.push(`${short(a.name)} → ${short(b.name)}: 약 <b>${man(d)}</b> 절감`); };
  alt('floor', 'wood', 'engineered'); alt('floor', 'porcelain', 'spc'); alt('artwall', 'slab', 'porcelain'); alt('door', 'hidden', 'design'); alt('molding', 'none', 'minus'); alt('wall', 'paint', 'silk'); alt('kitchen', 'premium', 'mid');
  const win = o('window'); if (win.brand && win.grade >= 4) tips.push(`창호를 프리미엄 → 고급 등급으로: 약 <b>${man((win.price - ((WIN_BRANDS.find(b => b.id === win.brand).lines.find(l => l.g === 3) || {}).p || win.price)) * QTY.win)}</b> 절감`);
  S.push({ t: '예산 분석', h: `<p>공사비의 큰 비중은 ${top.map(x => `<b>${x.name}</b>(${Math.round(x.amt / EST.sub * 100)}%)`).join(', ')}입니다.</p>${tips.length ? `<p class="lbl2">아끼고 싶다면</p><ul class="ul">${tips.map(t => `<li>${t}</li>`).join('')}</ul>` : '<p>이미 비용 대비 효율이 좋은 구성입니다.</p>'}<p class="lbl2">투자 가치가 큰 곳</p><ul class="ul"><li>창호·단열 — 매년 냉난방비로 돌아옵니다.</li><li>욕실 방수 — 누수는 아래층 배상까지 이어질 수 있어 가장 확실한 투자입니다.</li></ul>` });
  S.push({ t: '공사 전 체크리스트', h: `<ul class="ul check"><li>관리사무소 공사 신고 · 엘리베이터 사용 예약</li><li>관리규약에 따른 이웃 동의서</li>${QTY.extAdd > 0 ? '<li>발코니 확장 행위허가 신고 (SMCT 대행)</li>' : ''}<li>소음 작업 가능 시간 확인 (보통 평일 09~17시)</li><li>타일·마루·도어 실물 샘플 확인 후 발주</li><li>이사·입주 일정과 공정 마감일 맞추기</li></ul>` });
  return S;
}
/* 광주·나주·화순·장성·담양 아파트 단지 목록 (국토교통부 공동주택 단지 목록 기반) */
const aptArea = a => (/[시군]$/.test(a.g) ? a.g : '광주 ' + a.g);
const APTS = [{"c":"A10021323","n":"영무파라드도시형생활주택","g":"동구","d":"대인동"},{"c":"A50171301","n":"금남로AM-CITY하이클래스","g":"동구","d":"금남로5가"},{"c":"A10022977","n":"로머스파크 헤리티지","g":"동구","d":"충장로5가"},{"c":"A10020483","n":"아르티엠더퍼플아파트","g":"동구","d":"수기동"},{"c":"A10019874","n":"교대역 모아엘가그랑데 아파트","g":"동구","d":"계림동"},{"c":"A10023646","n":"계림아이파크SK뷰","g":"동구","d":"계림동"},{"c":"A10024284","n":"두산위브더파크","g":"동구","d":"계림동"},{"c":"A10024623","n":"그랜드센트럴","g":"동구","d":"계림동"},{"c":"A10026283","n":"푸른길 두산위브","g":"동구","d":"계림동"},{"c":"A50108001","n":"금호주상복합아파트","g":"동구","d":"계림동"},{"c":"A50175101","n":"계림금호1차","g":"동구","d":"계림동"},{"c":"A50180001","n":"두산위브","g":"동구","d":"계림동"},{"c":"A10021088","n":"산수무등파크맨션","g":"동구","d":"산수동"},{"c":"A10024241","n":"무등산 명지로드힐포레","g":"동구","d":"산수동"},{"c":"A10025576","n":"무등산 그린웰 로제비앙","g":"동구","d":"산수동"},{"c":"A10026438","n":"무등산 광신프로그레스","g":"동구","d":"산수동"},{"c":"A50010009","n":"두암그린파크","g":"동구","d":"산수동"},{"c":"A50109001","n":"광명아파트","g":"동구","d":"산수동"},{"c":"A50109002","n":"두암타운","g":"동구","d":"산수동"},{"c":"A50115001","n":"삼성아파트","g":"동구","d":"지산동"},{"c":"A50183801","n":"지산휴먼시아","g":"동구","d":"지산동"},{"c":"A10023619","n":"e편한세상무등산아파트","g":"동구","d":"소태동"},{"c":"A10025942","n":"무등산골드클래스","g":"동구","d":"소태동"},{"c":"A10026884","n":"소태한국아델리움아파트","g":"동구","d":"소태동"},{"c":"A50182601","n":"소태진아2차하이빌","g":"동구","d":"소태동"},{"c":"A50182602","n":"온세계아이조움","g":"동구","d":"소태동"},{"c":"A50182801","n":"대아아파트","g":"동구","d":"소태동"},{"c":"A50182802","n":"지원동 모아미래도","g":"동구","d":"소태동"},{"c":"A50183301","n":"무등파크2차","g":"동구","d":"운림동"},{"c":"A50183302","n":"운림동라인1차아파트","g":"동구","d":"운림동"},{"c":"A50183303","n":"무등1차","g":"동구","d":"운림동"},{"c":"A50183304","n":"운림라인광명","g":"동구","d":"운림동"},{"c":"A50183305","n":"무등스위트맨션","g":"동구","d":"운림동"},{"c":"A50183405","n":"라인2차","g":"동구","d":"운림동"},{"c":"A10020833","n":"학동 무등파크맨션","g":"동구","d":"학동"},{"c":"A10025352","n":"학동남해오네뜨 아파트","g":"동구","d":"학동"},{"c":"A10027191","n":"무등산 아이파크","g":"동구","d":"학동"},{"c":"A50119007","n":"삼익세라믹","g":"동구","d":"학동"},{"c":"A50174501","n":"무등산리버파크","g":"동구","d":"학동"},{"c":"A50184004","n":"학1마을","g":"동구","d":"학동"},{"c":"A50184203","n":"학동금호베스트빌","g":"동구","d":"학동"},{"c":"A50184302","n":"현대아파트","g":"동구","d":"학동"},{"c":"A50184605","n":"아남","g":"동구","d":"학동"},{"c":"A50184706","n":"평화맨션","g":"동구","d":"학동"},{"c":"A50184901","n":"학동백화아파트","g":"동구","d":"학동"},{"c":"A10027559","n":"월남2차 호반베르디움","g":"동구","d":"월남동"},{"c":"A10028017","n":"월남호반베르디움1차","g":"동구","d":"월남동"},{"c":"A10022930","n":"선교2차 우방아이유쉘리포레","g":"동구","d":"선교동"},{"c":"A10023337","n":"선교1지구 우방아이유쉘아파트","g":"동구","d":"선교동"},{"c":"A10024893","n":"내남지구2차진아리채","g":"동구","d":"내남동"},{"c":"A10025477","n":"내남지구 진아리채","g":"동구","d":"내남동"},{"c":"A10023775","n":"무등산골드클래스2차","g":"동구","d":"용산동"},{"c":"A10025385","n":"용산 리슈빌아파트","g":"동구","d":"용산동"},{"c":"A10025417","n":"광주 용산LH 1단지","g":"동구","d":"용산동"},{"c":"A10025453","n":"용산모아엘가에듀파크","g":"동구","d":"용산동"},{"c":"A10025470","n":"용산대성베르힐","g":"동구","d":"용산동"},{"c":"A50183101","n":"한국아파트","g":"동구","d":"용산동"},{"c":"A50183102","n":"동산타워","g":"동구","d":"용산동"},{"c":"A50183103","n":"호반3차아파트","g":"동구","d":"용산동"},{"c":"A10021682","n":"광주충장고운라피네","g":"동구","d":"충장로4가"},{"c":"A50172501","n":"충장아트원","g":"동구","d":"충장로4가"},{"c":"A50222001","n":"양동금호1차","g":"서구","d":"양동"},{"c":"A50222002","n":"양동삼익맨션","g":"서구","d":"양동"},{"c":"A50222003","n":"그린파크","g":"서구","d":"양동"},{"c":"A50222004","n":"우진아파트","g":"서구","d":"양동"},{"c":"A50222005","n":"양동금호2차","g":"서구","d":"양동"},{"c":"A50222006","n":"양동휴먼시아","g":"서구","d":"양동"},{"c":"A10020001","n":"농성제일파크맨션","g":"서구","d":"농성동"},{"c":"A10020633","n":"빌리브트레비체 아파트","g":"서구","d":"농성동"},{"c":"A10022440","n":"농성역 광신프로그레스","g":"서구","d":"농성동"},{"c":"A10023901","n":"광천 중해마루힐 센텀","g":"서구","d":"농성동"},{"c":"A10025295","n":"농성 SK뷰 센트럴 아파트","g":"서구","d":"농성동"},{"c":"A10025536","n":"광천프라임아너팰리스","g":"서구","d":"농성동"},{"c":"A10026601","n":"농성빛여울채아파트","g":"서구","d":"농성동"},{"c":"A50220001","n":"중흥파크맨션","g":"서구","d":"농성동"},{"c":"A50220002","n":"삼익맨션","g":"서구","d":"농성동"},{"c":"A50273601","n":"농성동산","g":"서구","d":"농성동"},{"c":"A50274001","n":"유탑유블레스","g":"서구","d":"농성동"},{"c":"A10022822","n":"힐스테이트 광천","g":"서구","d":"광천동"},{"c":"A10025081","n":"호반써밋 광주","g":"서구","d":"광천동"},{"c":"A50271202","n":"광천e편한세상아파트","g":"서구","d":"광천동"},{"c":"A50286201","n":"상무2차호반리젠시빌","g":"서구","d":"유촌동"},{"c":"A50286202","n":"상무버들1단지","g":"서구","d":"유촌동"},{"c":"A50286303","n":"상무버들마을주공2단지","g":"서구","d":"유촌동"},{"c":"A10020673","n":"상무센트럴자이","g":"서구","d":"쌍촌동"},{"c":"A10024181","n":"광천모아엘가","g":"서구","d":"쌍촌동"},{"c":"A10024361","n":"성우행복한집 아파트","g":"서구","d":"쌍촌동"},{"c":"A10025496","n":"상무한국아델리움아파트","g":"서구","d":"쌍촌동"},{"c":"A10025949","n":"상무엘리체 아파트","g":"서구","d":"쌍촌동"},{"c":"A10028004","n":"성우","g":"서구","d":"쌍촌동"},{"c":"A50226001","n":"동남","g":"서구","d":"쌍촌동"},{"c":"A50226002","n":"대주아파트","g":"서구","d":"쌍촌동"},{"c":"A50226004","n":"상무우미아트빌","g":"서구","d":"쌍촌동"},{"c":"A50226005","n":"쌍촌동현대아파트","g":"서구","d":"쌍촌동"},{"c":"A50226006","n":"광명하이츠타운","g":"서구","d":"쌍촌동"},{"c":"A50275202","n":"쌍촌일신","g":"서구","d":"쌍촌동"},{"c":"A50275203","n":"상무모아제일아파트","g":"서구","d":"쌍촌동"},{"c":"A50275207","n":"상무힐스테이트","g":"서구","d":"쌍촌동"},{"c":"A50275208","n":"쌍촌시영3단지아파트","g":"서구","d":"쌍촌동"},{"c":"A50275209","n":"신천힐탑맨션","g":"서구","d":"쌍촌동"},{"c":"A50275210","n":"상무푸르지오","g":"서구","d":"쌍촌동"},{"c":"A50275212","n":"명지맨션","g":"서구","d":"쌍촌동"},{"c":"A50275213","n":"가도스타디움2차","g":"서구","d":"쌍촌동"},{"c":"A50275301","n":"상무중흥S-클래스","g":"서구","d":"쌍촌동"},{"c":"A50282101","n":"중흥광명아파트","g":"서구","d":"쌍촌동"},{"c":"A50282103","n":"빛고을파크2단지","g":"서구","d":"쌍촌동"},{"c":"A50282104","n":"빛고을파크1차","g":"서구","d":"쌍촌동"},{"c":"A50282105","n":"쌍촌주공임대","g":"서구","d":"쌍촌동"},{"c":"A50285602","n":"쌍촌 명지아파트","g":"서구","d":"쌍촌동"},{"c":"A50286002","n":"상무3차호반리젠시빌","g":"서구","d":"쌍촌동"},{"c":"A10020874","n":"화정2차 골드클래스","g":"서구","d":"화정동"},{"c":"A10021605","n":"화정영무예다음","g":"서구","d":"화정동"},{"c":"A10021818","n":"더브이테라스","g":"서구","d":"화정동"},{"c":"A10022059","n":"화정남화아파트","g":"서구","d":"화정동"},{"c":"A10022386","n":"해피투모루","g":"서구","d":"화정동"},{"c":"A10023522","n":"광주화정동골드클래스주상복합 아파트","g":"서구","d":"화정동"},{"c":"A10023703","n":"더샵염주센트럴파크","g":"서구","d":"화정동"},{"c":"A10025111","n":"화정동 도나우프리 아파트","g":"서구","d":"화정동"},{"c":"A10025427","n":"화정엘리체퍼스티지","g":"서구","d":"화정동"},{"c":"A10026795","n":"화정동 해광샹그릴라 센트럴337","g":"서구","d":"화정동"},{"c":"A10027573","n":"유니버시아드힐스테이트2단지","g":"서구","d":"화정동"},{"c":"A10027604","n":"유니버시아드 힐스테이트3단지 아파트","g":"서구","d":"화정동"},{"c":"A10027615","n":"광주유니버시아드힐스테이트1단지","g":"서구","d":"화정동"},{"c":"A50224004","n":"럭키아파트","g":"서구","d":"화정동"},{"c":"A50224005","n":"화정동유탑유블레스","g":"서구","d":"화정동"},{"c":"A50224006","n":"화정고운하이플러스","g":"서구","d":"화정동"},{"c":"A50224101","n":"중흥파크","g":"서구","d":"화정동"},{"c":"A50224102","n":"현대아파트","g":"서구","d":"화정동"},{"c":"A50224401","n":"화정금호1차","g":"서구","d":"화정동"},{"c":"A50224406","n":"화정우미","g":"서구","d":"화정동"},{"c":"A50224407","n":"화정태영","g":"서구","d":"화정동"},{"c":"A50224409","n":"화정동모아맨션","g":"서구","d":"화정동"},{"c":"A50270405","n":"화정신동아","g":"서구","d":"화정동"},{"c":"A50270406","n":"화정광명","g":"서구","d":"화정동"},{"c":"A50273305","n":"삼익맨션","g":"서구","d":"화정동"},{"c":"A50273306","n":"무등파크","g":"서구","d":"화정동"},{"c":"A50279911","n":"화정라인동산","g":"서구","d":"화정동"},{"c":"A50283701","n":"화정대주피오레","g":"서구","d":"화정동"},{"c":"A50283802","n":"화정금호3차","g":"서구","d":"화정동"},{"c":"A50283803","n":"꽃담마을e-편한세상","g":"서구","d":"화정동"},{"c":"A50283905","n":"화정호반","g":"서구","d":"화정동"},{"c":"A50284201","n":"화정대주","g":"서구","d":"화정동"},{"c":"A50284202","n":"화정한양아파트","g":"서구","d":"화정동"},{"c":"A50284204","n":"화정2동금호타운","g":"서구","d":"화정동"},{"c":"A50284410","n":"화정우성2차","g":"서구","d":"화정동"},{"c":"A50284503","n":"화정모아타워","g":"서구","d":"화정동"},{"c":"A50284504","n":"중흥아파트","g":"서구","d":"화정동"},{"c":"A50284508","n":"화정금호2차","g":"서구","d":"화정동"},{"c":"A50287004","n":"염주현대","g":"서구","d":"화정동"},{"c":"A50287005","n":"염주우미","g":"서구","d":"화정동"},{"c":"A10020711","n":"광주 상무퍼스티넘스위첸","g":"서구","d":"치평동"},{"c":"A10024630","n":"상무영무예다음아파트","g":"서구","d":"치평동"},{"c":"A10027152","n":"상무광명메이루즈아파트","g":"서구","d":"치평동"},{"c":"A10027685","n":"상무 sk view 아파트","g":"서구","d":"치평동"},{"c":"A10027907","n":"상무e-다움골드","g":"서구","d":"치평동"},{"c":"A10028109","n":"상무리채1차","g":"서구","d":"치평동"},{"c":"A50271501","n":"금호갤러리303","g":"서구","d":"치평동"},{"c":"A50271502","n":"상무리채2차","g":"서구","d":"치평동"},{"c":"A50277119","n":"금호대우","g":"서구","d":"치평동"},{"c":"A50282813","n":"상무1차 우미아파트","g":"서구","d":"치평동"},{"c":"A50282817","n":"상무1차라인동산","g":"서구","d":"치평동"},{"c":"A50282902","n":"상무한국아파트","g":"서구","d":"치평동"},{"c":"A50282904","n":"상무호반1차 아파트","g":"서구","d":"치평동"},{"c":"A50282909","n":"현대아파트","g":"서구","d":"치평동"},{"c":"A50282910","n":"상무금호4차","g":"서구","d":"치평동"},{"c":"A50283006","n":"상무중흥파크1단지","g":"서구","d":"치평동"},{"c":"A50283007","n":"대주1차아파트","g":"서구","d":"치평동"},{"c":"A50283011","n":"상무3단지금호타운","g":"서구","d":"치평동"},{"c":"A50283012","n":"해광한신","g":"서구","d":"치평동"},{"c":"A50283015","n":"상무2차라인대주","g":"서구","d":"치평동"},{"c":"A50283016","n":"금호쌍용","g":"서구","d":"치평동"},{"c":"A50283018","n":"중흥파크2차","g":"서구","d":"치평동"},{"c":"A50280801","n":"내방동 해태아파트","g":"서구","d":"내방동"},{"c":"A50280802","n":"솔뫼타운아파트","g":"서구","d":"내방동"},{"c":"A50280803","n":"화정센트럴파크","g":"서구","d":"내방동"},{"c":"A10019927","n":"위파크 더 센트럴","g":"서구","d":"풍암동"},{"c":"A50277620","n":"풍암한신","g":"서구","d":"풍암동"},{"c":"A50277621","n":"풍암2차한국아델리움","g":"서구","d":"풍암동"},{"c":"A50277622","n":"풍암2단지대주파크빌","g":"서구","d":"풍암동"},{"c":"A50277623","n":"풍암광명메이루즈","g":"서구","d":"풍암동"},{"c":"A50283101","n":"풍암4차대주파크빌","g":"서구","d":"풍암동"},{"c":"A50283107","n":"풍암동에스케이뷰","g":"서구","d":"풍암동"},{"c":"A50283116","n":"풍암동부센트레빌","g":"서구","d":"풍암동"},{"c":"A50283210","n":"풍암1차호반아파트","g":"서구","d":"풍암동"},{"c":"A50283211","n":"삼능남양","g":"서구","d":"풍암동"},{"c":"A50283213","n":"풍암중흥2차아파트","g":"서구","d":"풍암동"},{"c":"A50283214","n":"현대아파트","g":"서구","d":"풍암동"},{"c":"A50283215","n":"새한센시빌","g":"서구","d":"풍암동"},{"c":"A50283302","n":"풍암중흥3차","g":"서구","d":"풍암동"},{"c":"A50283303","n":"풍암3차대주파크빌아파트","g":"서구","d":"풍암동"},{"c":"A50283305","n":"금호2차","g":"서구","d":"풍암동"},{"c":"A50283306","n":"풍암모아아파트","g":"서구","d":"풍암동"},{"c":"A50283308","n":"현대삼환아파트","g":"서구","d":"풍암동"},{"c":"A50283309","n":"한국1차아파트","g":"서구","d":"풍암동"},{"c":"A50283312","n":"풍암금호타운1차","g":"서구","d":"풍암동"},{"c":"A50283317","n":"주은모아","g":"서구","d":"풍암동"},{"c":"A50283318","n":"풍암부영2차","g":"서구","d":"풍암동"},{"c":"A50283319","n":"우미광장아파트","g":"서구","d":"풍암동"},{"c":"A10020265","n":"위파크마륵공원아파트","g":"서구","d":"금호동"},{"c":"A10021519","n":"EG THE 1 아파트","g":"서구","d":"금호동"},{"c":"A10023869","n":"금호지구대광로제비앙아파트","g":"서구","d":"금호동"},{"c":"A50215411","n":"금호동쌍용예가","g":"서구","d":"금호동"},{"c":"A50274701","n":"마재마을송촌파인힐","g":"서구","d":"금호동"},{"c":"A50274702","n":"금호베스트빌","g":"서구","d":"금호동"},{"c":"A50274703","n":"금호2차진흥더루벤스","g":"서구","d":"금호동"},{"c":"A50276216","n":"마재마을주은","g":"서구","d":"금호동"},{"c":"A50280303","n":"코아루아파트","g":"서구","d":"금호동"},{"c":"A50280305","n":"금호동로렌시아아파트","g":"서구","d":"금호동"},{"c":"A50280307","n":"진흥더블파크","g":"서구","d":"금호동"},{"c":"A50280328","n":"금호동종원팰리스빌","g":"서구","d":"금호동"},{"c":"A50280401","n":"명지아파트","g":"서구","d":"금호동"},{"c":"A50280402","n":"금호일신아파트","g":"서구","d":"금호동"},{"c":"A50280404","n":"한국아파트","g":"서구","d":"금호동"},{"c":"A50280410","n":"우미호반","g":"서구","d":"금호동"},{"c":"A50280418","n":"라인아파트","g":"서구","d":"금호동"},{"c":"A50280506","n":"해광대덕무지개","g":"서구","d":"금호동"},{"c":"A50280508","n":"삼능공간","g":"서구","d":"금호동"},{"c":"A50280520","n":"시영분양","g":"서구","d":"금호동"},{"c":"A50280524","n":"시영1단지","g":"서구","d":"금호동"},{"c":"A50280609","n":"금호2지구한국아파트","g":"서구","d":"금호동"},{"c":"A50280613","n":"모아아파트","g":"서구","d":"금호동"},{"c":"A50280615","n":"금호도담채아파트","g":"서구","d":"금호동"},{"c":"A50280617","n":"도시공사1단지","g":"서구","d":"금호동"},{"c":"A50280619","n":"금호3차호반리젠시빌","g":"서구","d":"금호동"},{"c":"A50280626","n":"금호동 중흥아파트","g":"서구","d":"금호동"},{"c":"A50280627","n":"금호빛여울채","g":"서구","d":"금호동"},{"c":"A50283304","n":"마재대주파크빌","g":"서구","d":"금호동"},{"c":"A50285812","n":"남양파크","g":"서구","d":"금호동"},{"c":"A50285821","n":"금호2차호반","g":"서구","d":"금호동"},{"c":"A50285822","n":"금호5차호반리젠시빌","g":"서구","d":"금호동"},{"c":"A50285823","n":"금호동부영1차아파트","g":"서구","d":"금호동"},{"c":"A10020091","n":"상무양우내안애퍼스트힐","g":"서구","d":"마륵동"},{"c":"A10022726","n":"효성해링턴 플레이스 상무역 아파트","g":"서구","d":"마륵동"},{"c":"A10022852","n":"상무역 골드클래스","g":"서구","d":"마륵동"},{"c":"A10024958","n":"상무양우내안애","g":"서구","d":"마륵동"},{"c":"A50215701","n":"상무자이","g":"서구","d":"마륵동"},{"c":"A50275001","n":"상무한신휴플러스","g":"서구","d":"마륵동"},{"c":"A10027027","n":"금호동 아델리움&로제비앙 아파트","g":"서구","d":"매월동"},{"c":"A50215301","n":"매월EG스위트밸리","g":"서구","d":"매월동"},{"c":"A50017021","n":"동천마을6단지주공","g":"서구","d":"동천동"},{"c":"A50080405","n":"동천 센트럴파크","g":"서구","d":"동천동"},{"c":"A50080406","n":"동천호반베르디움아파트","g":"서구","d":"동천동"},{"c":"A50080408","n":"동천우미린","g":"서구","d":"동천동"},{"c":"A50080410","n":"동천 리버팰리스","g":"서구","d":"동천동"},{"c":"A50090715","n":"동천마을 1단지","g":"서구","d":"동천동"},{"c":"A10027100","n":"서동 영무예다음 아파트","g":"남구","d":"서동"},{"c":"A50301101","n":"아남프라자","g":"남구","d":"서동"},{"c":"A10020451","n":"더 퍼스트 데시앙","g":"남구","d":"월산동"},{"c":"A10020913","n":"힐스테이트 월산아파트","g":"남구","d":"월산동"},{"c":"A10021101","n":"진아리채리센츠","g":"남구","d":"월산동"},{"c":"A10021613","n":"제일맨션","g":"남구","d":"월산동"},{"c":"A10024138","n":"반도 유보라 더 퍼스트 아파트","g":"남구","d":"월산동"},{"c":"A10026876","n":"월산동이스토리","g":"남구","d":"월산동"},{"c":"A50323001","n":"제일파크","g":"남구","d":"월산동"},{"c":"A50323002","n":"월산라인","g":"남구","d":"월산동"},{"c":"A50323003","n":"덕림제일파크","g":"남구","d":"월산동"},{"c":"A50323004","n":"월산신우","g":"남구","d":"월산동"},{"c":"A50323005","n":"월산우방아이유쉘","g":"남구","d":"월산동"},{"c":"A10020174","n":"백운송촌파인힐아파트","g":"남구","d":"백운동"},{"c":"A10022151","n":"목우아파트","g":"남구","d":"백운동"},{"c":"A10023073","n":"백운대라수어썸브릿지","g":"남구","d":"백운동"},{"c":"A10024469","n":"백운코아루아팰리스힐","g":"남구","d":"백운동"},{"c":"A10027348","n":"힐스테이트 백운","g":"남구","d":"백운동"},{"c":"A50330002","n":"제일파크","g":"남구","d":"백운동"},{"c":"A50330003","n":"대흥백운스카이2차","g":"남구","d":"백운동"},{"c":"A50330004","n":"사직스카이","g":"남구","d":"백운동"},{"c":"A50330006","n":"벽산아파트","g":"남구","d":"백운동"},{"c":"A50330007","n":"대흥백운스카이1차","g":"남구","d":"백운동"},{"c":"A50330008","n":"백운3휴먼시아","g":"남구","d":"백운동"},{"c":"A50330009","n":"백운우방아이유쉘","g":"남구","d":"백운동"},{"c":"A50380601","n":"백운현대아파트(현대아파트)","g":"남구","d":"백운동"},{"c":"A50380602","n":"백운2휴먼시아","g":"남구","d":"백운동"},{"c":"A50380603","n":"루엔시티","g":"남구","d":"백운동"},{"c":"A50380901","n":"대주아파트","g":"남구","d":"백운동"},{"c":"A10020309","n":"봉선주월대라수어썸브릿지","g":"남구","d":"주월동"},{"c":"A10021826","n":"주월마이다스빌1차","g":"남구","d":"주월동"},{"c":"A10022210","n":"주월영무예다음1차아파트","g":"남구","d":"주월동"},{"c":"A10022664","n":"금영푸르미아파트관리사무소","g":"남구","d":"주월동"},{"c":"A10023251","n":"주월무등파크아파트","g":"남구","d":"주월동"},{"c":"A10024298","n":"주월동 골드클래스 어반시티","g":"남구","d":"주월동"},{"c":"A10024376","n":"주월양우내안애 아파트","g":"남구","d":"주월동"},{"c":"A10025575","n":"주월빛여울채아파트","g":"남구","d":"주월동"},{"c":"A10026263","n":"봉선로 남해오네뜨","g":"남구","d":"주월동"},{"c":"A50331002","n":"해태2차","g":"남구","d":"주월동"},{"c":"A50331003","n":"라인가든1차","g":"남구","d":"주월동"},{"c":"A50331004","n":"한양아파트","g":"남구","d":"주월동"},{"c":"A50331005","n":"현대1차","g":"남구","d":"주월동"},{"c":"A50331007","n":"스카이맨션","g":"남구","d":"주월동"},{"c":"A50331008","n":"덕산아파트","g":"남구","d":"주월동"},{"c":"A50331011","n":"주월1단지이지더원","g":"남구","d":"주월동"},{"c":"A50331012","n":"금영푸르미","g":"남구","d":"주월동"},{"c":"A50331013","n":"제석산호반힐하임","g":"남구","d":"주월동"},{"c":"A50331014","n":"봉선로광명메이루즈","g":"남구","d":"주월동"},{"c":"A50331101","n":"주월동호반베르디움2차","g":"남구","d":"주월동"},{"c":"A50331103","n":"주월현대2차","g":"남구","d":"주월동"},{"c":"A50376104","n":"신천그린","g":"남구","d":"주월동"},{"c":"A50376105","n":"신영루체빌 아파트","g":"남구","d":"주월동"},{"c":"A50376106","n":"주월호반베르디움1단지","g":"남구","d":"주월동"},{"c":"A50383301","n":"명지맨션","g":"남구","d":"주월동"},{"c":"A50383302","n":"주월해태1차","g":"남구","d":"주월동"},{"c":"A50383802","n":"경남아파트","g":"남구","d":"주월동"},{"c":"A10025878","n":"진월LH송화마을8단지","g":"남구","d":"노대동"},{"c":"A50332001","n":"진월남양휴튼","g":"남구","d":"노대동"},{"c":"A50332002","n":"송화레이크힐","g":"남구","d":"노대동"},{"c":"A50387101","n":"송화마을휴먼시아1단지","g":"남구","d":"노대동"},{"c":"A50387102","n":"송화마을휴먼시아2단지","g":"남구","d":"노대동"},{"c":"A50387103","n":"송화마을휴먼시아3단지","g":"남구","d":"노대동"},{"c":"A50387104","n":"송화마을휴먼시아4단지","g":"남구","d":"노대동"},{"c":"A50387105","n":"골드레이크","g":"남구","d":"노대동"},{"c":"A50387106","n":"송화레이크포레","g":"남구","d":"노대동"},{"c":"A10021617","n":"대덕훼미리8차아파트","g":"남구","d":"진월동"},{"c":"A10022115","n":"진월1차진아하이빌","g":"남구","d":"진월동"},{"c":"A10024220","n":"진월 한국아델리움2차아파트","g":"남구","d":"진월동"},{"c":"A10028194","n":"브라운스톤진월","g":"남구","d":"진월동"},{"c":"A50333015","n":"중흥파크","g":"남구","d":"진월동"},{"c":"A50333017","n":"삼익세라믹","g":"남구","d":"진월동"},{"c":"A50333023","n":"진월아남","g":"남구","d":"진월동"},{"c":"A50370327","n":"대주파크빌","g":"남구","d":"진월동"},{"c":"A50384001","n":"진월동호반리젠시빌 스위트","g":"남구","d":"진월동"},{"c":"A50384002","n":"현대3차","g":"남구","d":"진월동"},{"c":"A50384005","n":"진월2차진아하이빌","g":"남구","d":"진월동"},{"c":"A50384006","n":"진월3차진아리채","g":"남구","d":"진월동"},{"c":"A50384007","n":"고운하이플러스1차","g":"남구","d":"진월동"},{"c":"A50384008","n":"대주2차아파트","g":"남구","d":"진월동"},{"c":"A50384010","n":"진월2차고운하이플러스","g":"남구","d":"진월동"},{"c":"A50384012","n":"진월새한","g":"남구","d":"진월동"},{"c":"A50384016","n":"진월현대2차아파트","g":"남구","d":"진월동"},{"c":"A50384019","n":"한신1차","g":"남구","d":"진월동"},{"c":"A50384024","n":"한신2차","g":"남구","d":"진월동"},{"c":"A50384025","n":"진월동대주1차","g":"남구","d":"진월동"},{"c":"A50384103","n":"광명아파트","g":"남구","d":"진월동"},{"c":"A50384104","n":"협진훼미리","g":"남구","d":"진월동"},{"c":"A50384213","n":"진월동호반리젠시빌","g":"남구","d":"진월동"},{"c":"A50384220","n":"금광하늘연가","g":"남구","d":"진월동"},{"c":"A50384309","n":"진월신흥3차","g":"남구","d":"진월동"},{"c":"A50384314","n":"삼익세라믹3차","g":"남구","d":"진월동"},{"c":"A50384321","n":"진월동한국아델리움","g":"남구","d":"진월동"},{"c":"A50384322","n":"진월현대","g":"남구","d":"진월동"},{"c":"A50384326","n":"진월풍림","g":"남구","d":"진월동"},{"c":"A50384411","n":"진월삼익세라믹2차","g":"남구","d":"진월동"},{"c":"A10026645","n":"효천LH천년나무7단지","g":"남구","d":"행암동"},{"c":"A10026841","n":"브라운스톤 효천 아파트","g":"남구","d":"행암동"},{"c":"A10027544","n":"광주효천LH천년나무 6단지","g":"남구","d":"행암동"},{"c":"A10027835","n":"효천2지구 중흥S-클래스아파트","g":"남구","d":"행암동"},{"c":"A10028123","n":"효천2지구 제일풍경채 에듀파크1차","g":"남구","d":"행암동"},{"c":"A10028124","n":"효천2지구 제일풍경채 에듀파크2차","g":"남구","d":"행암동"},{"c":"A50385501","n":"효천남해오네뜨1단지","g":"남구","d":"행암동"},{"c":"A50385502","n":"효천남해오네뜨2단지아파트","g":"남구","d":"행암동"},{"c":"A50385503","n":"효천 하우스디 아파트","g":"남구","d":"행암동"},{"c":"A50385504","n":"효천LH천년나무1단지","g":"남구","d":"행암동"},{"c":"A10024238","n":"광주효천1 LH1단지","g":"남구","d":"임암동"},{"c":"A10024994","n":"광주효천1 LH3단지 아파트","g":"남구","d":"임암동"},{"c":"A10025199","n":"효천1지구 중흥에스클래스 리버티","g":"남구","d":"임암동"},{"c":"A10025485","n":"효천시티프라디움아파트","g":"남구","d":"임암동"},{"c":"A10025731","n":"효천1중흥S클래스에코파크아파트","g":"남구","d":"임암동"},{"c":"A10025732","n":"효천1 중흥s-클래스 에코시티","g":"남구","d":"임암동"},{"c":"A10024563","n":"효천지구 코오롱하늘채","g":"남구","d":"송하동"},{"c":"A10028010","n":"송하동진아리채5차1단지아파트","g":"남구","d":"송하동"},{"c":"A50377201","n":"진아리채5차2단지","g":"남구","d":"송하동"},{"c":"A50381901","n":"송하동금호타운","g":"남구","d":"송하동"},{"c":"A50381902","n":"송하삼익아파트","g":"남구","d":"송하동"},{"c":"A50304002","n":"양림더힐","g":"남구","d":"양림동"},{"c":"A50304003","n":"양림2단지휴먼시아","g":"남구","d":"양림동"},{"c":"A10020773","n":"방림오네뜨하이브","g":"남구","d":"방림동"},{"c":"A10022815","n":"방림 더 퍼스트 골드클래스","g":"남구","d":"방림동"},{"c":"A10023549","n":"봉선중길한국아델리움5차","g":"남구","d":"방림동"},{"c":"A10024533","n":"광명그린아파트","g":"남구","d":"방림동"},{"c":"A10027831","n":"광주 방림 명지로드힐 아파트","g":"남구","d":"방림동"},{"c":"A50305002","n":"금호맨션","g":"남구","d":"방림동"},{"c":"A50305004","n":"라인효친1차","g":"남구","d":"방림동"},{"c":"A50305005","n":"모아2-2차3차","g":"남구","d":"방림동"},{"c":"A50377401","n":"광신프로그레스","g":"남구","d":"방림동"},{"c":"A50380201","n":"무등산센트럴파크아파트","g":"남구","d":"방림동"},{"c":"A50380501","n":"라인효친2차","g":"남구","d":"방림동"},{"c":"A10019868","n":"봉선시그니처 휴튼아파트","g":"남구","d":"봉선동"},{"c":"A10021879","n":"송림아파트","g":"남구","d":"봉선동"},{"c":"A10022006","n":"e편한세상 봉선 셀레스티지","g":"남구","d":"봉선동"},{"c":"A10022105","n":"봉선이지더원3단지","g":"남구","d":"봉선동"},{"c":"A10022247","n":"무등프라자주월2차 아파트","g":"남구","d":"봉선동"},{"c":"A10023031","n":"봉선동 르오네뜨","g":"남구","d":"봉선동"},{"c":"A10023147","n":"솔뫼렉스K-1아파트","g":"남구","d":"봉선동"},{"c":"A10023937","n":"봉선동한국아델리움2단지","g":"남구","d":"봉선동"},{"c":"A10026325","n":"봉선동모아엘가아파트","g":"남구","d":"봉선동"},{"c":"A10027004","n":"봉선동 골든뜨레빌","g":"남구","d":"봉선동"},{"c":"A10027211","n":"봉선동 제일풍경채 아파트","g":"남구","d":"봉선동"},{"c":"A10027650","n":"봉선지웰아파트","g":"남구","d":"봉선동"},{"c":"A10028101","n":"봉선3차한국아델리움","g":"남구","d":"봉선동"},{"c":"A50306001","n":"봉선남양휴튼1차","g":"남구","d":"봉선동"},{"c":"A50306002","n":"모아1-1차","g":"남구","d":"봉선동"},{"c":"A50306003","n":"무등파크1차","g":"남구","d":"봉선동"},{"c":"A50306004","n":"대화아파트","g":"남구","d":"봉선동"},{"c":"A50306005","n":"라인아파트","g":"남구","d":"봉선동"},{"c":"A50306006","n":"봉선모아1단지2차","g":"남구","d":"봉선동"},{"c":"A50306007","n":"라인광장1차","g":"남구","d":"봉선동"},{"c":"A50306008","n":"봉선동 삼익2차아파트","g":"남구","d":"봉선동"},{"c":"A50306009","n":"봉선동한국아델리움1단지","g":"남구","d":"봉선동"},{"c":"A50306010","n":"라인광장2,3차","g":"남구","d":"봉선동"},{"c":"A50306012","n":"무등파크봉선3차1단지","g":"남구","d":"봉선동"},{"c":"A50306013","n":"금호1차","g":"남구","d":"봉선동"},{"c":"A50306014","n":"금호2차","g":"남구","d":"봉선동"},{"c":"A50306015","n":"삼익1차","g":"남구","d":"봉선동"},{"c":"A50306016","n":"봉선동무등파크2차 아파트","g":"남구","d":"봉선동"},{"c":"A50306017","n":"라인하이츠","g":"남구","d":"봉선동"},{"c":"A50306018","n":"포스코더샵아파트","g":"남구","d":"봉선동"},{"c":"A50306201","n":"라인2.3차","g":"남구","d":"봉선동"},{"c":"A50306204","n":"무등3차2단지","g":"남구","d":"봉선동"},{"c":"A50370202","n":"봉선더쉴아파트","g":"남구","d":"봉선동"},{"c":"A50370203","n":"봉선2차남양휴튼","g":"남구","d":"봉선동"},{"c":"A50376301","n":"봉선모아2단지1차","g":"남구","d":"봉선동"},{"c":"A50381002","n":"명지맨션","g":"남구","d":"봉선동"},{"c":"A50381003","n":"쌍용스윗닷홈","g":"남구","d":"봉선동"},{"c":"A10021111","n":"힐스테이트 지석","g":"남구","d":"지석동"},{"c":"A10024570","n":"일진스위트포레","g":"남구","d":"지석동"},{"c":"A50320001","n":"한일베라체","g":"남구","d":"지석동"},{"c":"A10023805","n":"에너지밸리풍경채퍼스트파크","g":"남구","d":"압촌동"},{"c":"A10023824","n":"남구도시첨단 남해오네뜨 아파트","g":"남구","d":"압촌동"},{"c":"A10020723","n":"중흥프라임베르가 아파트","g":"북구","d":"중흥동"},{"c":"A10022790","n":"전남대모아미래도에듀파크아파트","g":"북구","d":"중흥동"},{"c":"A10023935","n":"제일풍경채 센트럴파크 2단지","g":"북구","d":"중흥동"},{"c":"A10023936","n":"제일풍경채 센트럴파크 1단지","g":"북구","d":"중흥동"},{"c":"A10025129","n":"중흥동 동우아스트로아파트","g":"북구","d":"중흥동"},{"c":"A10025325","n":"광주역다사로움아파트","g":"북구","d":"중흥동"},{"c":"A10026420","n":"중흥 프라임 아너팰리스","g":"북구","d":"중흥동"},{"c":"A10027860","n":"중흥영무예다음아파트","g":"북구","d":"중흥동"},{"c":"A50004002","n":"모아타운","g":"북구","d":"중흥동"},{"c":"A10023911","n":"금남로 대광로제비앙","g":"북구","d":"유동"},{"c":"A10022731","n":"에스클래스더제니스 아파트","g":"북구","d":"임동"},{"c":"A10024090","n":"임동중흥S클래스센텀파크","g":"북구","d":"임동"},{"c":"A10024455","n":"서림마을다사로움아파트","g":"북구","d":"임동"},{"c":"A10026315","n":"국제미소래2차아파트","g":"북구","d":"임동"},{"c":"A50001002","n":"임동리버파크","g":"북구","d":"임동"},{"c":"A50074104","n":"임동1차한국아델리움","g":"북구","d":"임동"},{"c":"A50074105","n":"국제미소래","g":"북구","d":"임동"},{"c":"A50086901","n":"평화맨션","g":"북구","d":"임동"},{"c":"A50086903","n":"임동2단지한국아델리움","g":"북구","d":"임동"},{"c":"A10020759","n":"산이고운신용파크","g":"북구","d":"신안동"},{"c":"A10021458","n":"신안국제미소래아파트","g":"북구","d":"신안동"},{"c":"A10021864","n":"신안중도다이아빌","g":"북구","d":"신안동"},{"c":"A10024765","n":"신안동 모아엘가 더스카이","g":"북구","d":"신안동"},{"c":"A10025064","n":"신안 고운하이플러스아파트","g":"북구","d":"신안동"},{"c":"A50006001","n":"모아타운","g":"북구","d":"신안동"},{"c":"A50006002","n":"삼익아파트","g":"북구","d":"신안동"},{"c":"A50072104","n":"신안한국아델리움","g":"북구","d":"신안동"},{"c":"A50083003","n":"신안중흥파크맨션","g":"북구","d":"신안동"},{"c":"A10020692","n":"용봉동한국아델리움비엔날레2차","g":"북구","d":"용봉동"},{"c":"A10022531","n":"용봉동 도나우 270","g":"북구","d":"용봉동"},{"c":"A10024599","n":"용봉동지에이그린웰","g":"북구","d":"용봉동"},{"c":"A10026859","n":"용봉동 아델리움 인 비엔날레 아파트","g":"북구","d":"용봉동"},{"c":"A10027409","n":"용봉동 도나우타운 아파트","g":"북구","d":"용봉동"},{"c":"A50007001","n":"한신아파트","g":"북구","d":"용봉동"},{"c":"A50007003","n":"유창하이리빙1차","g":"북구","d":"용봉동"},{"c":"A50007004","n":"광주용봉2휴먼시아","g":"북구","d":"용봉동"},{"c":"A50007006","n":"호반아파트","g":"북구","d":"용봉동"},{"c":"A50007008","n":"현대3차","g":"북구","d":"용봉동"},{"c":"A50007010","n":"중흥아파트","g":"북구","d":"용봉동"},{"c":"A50007011","n":"용봉삼성아파트","g":"북구","d":"용봉동"},{"c":"A50007012","n":"용봉동한화꿈에그린","g":"북구","d":"용봉동"},{"c":"A50073815","n":"용봉동3차대주파크빌","g":"북구","d":"용봉동"},{"c":"A50073816","n":"용봉대주2차아파트","g":"북구","d":"용봉동"},{"c":"A50073817","n":"용봉동1차대주파크빌","g":"북구","d":"용봉동"},{"c":"A50073818","n":"중흥S클래스","g":"북구","d":"용봉동"},{"c":"A50073820","n":"용봉동금호어울림","g":"북구","d":"용봉동"},{"c":"A50073821","n":"용봉아이파크","g":"북구","d":"용봉동"},{"c":"A50073822","n":"유창하이리빙2차","g":"북구","d":"용봉동"},{"c":"A50073823","n":"용봉주공","g":"북구","d":"용봉동"},{"c":"A50073824","n":"용봉엘리체","g":"북구","d":"용봉동"},{"c":"A50084502","n":"용봉금호","g":"북구","d":"용봉동"},{"c":"A50084509","n":"현대아파트","g":"북구","d":"용봉동"},{"c":"A50084514","n":"쌍용예가","g":"북구","d":"용봉동"},{"c":"A50084607","n":"용봉신동아아파트","g":"북구","d":"용봉동"},{"c":"A50084613","n":"용봉모아미래도","g":"북구","d":"용봉동"},{"c":"A10023172","n":"동림2차 우방아이유쉘아파트","g":"북구","d":"동림동"},{"c":"A10024652","n":"동림한국아델리움더숲1,2단지","g":"북구","d":"동림동"},{"c":"A10025009","n":"운암산 대광로제비앙아파트","g":"북구","d":"동림동"},{"c":"A10026123","n":"운암산코오롱하늘채","g":"북구","d":"동림동"},{"c":"A10026669","n":"동림 광신프로그레스아파트","g":"북구","d":"동림동"},{"c":"A50018002","n":"유일가든","g":"북구","d":"동림동"},{"c":"A50018003","n":"동림우미","g":"북구","d":"동림동"},{"c":"A50018004","n":"삼호가든","g":"북구","d":"동림동"},{"c":"A50076316","n":"광주동림2","g":"북구","d":"동림동"},{"c":"A50080307","n":"죽림마을주공","g":"북구","d":"동림동"},{"c":"A50080312","n":"동림삼익","g":"북구","d":"동림동"},{"c":"A50080501","n":"푸른마을1단지","g":"북구","d":"동림동"},{"c":"A50080511","n":"동림주공푸른마을3단지","g":"북구","d":"동림동"},{"c":"A50090713","n":"푸른마을주공4단지","g":"북구","d":"동림동"},{"c":"A50090714","n":"삼라마이다스","g":"북구","d":"동림동"},{"c":"A10020163","n":"운암자이포레나퍼스티체2단지","g":"북구","d":"운암동"},{"c":"A10020164","n":"운암자이포레나퍼스티체 3단지","g":"북구","d":"운암동"},{"c":"A10020165","n":"운암자이포레나퍼스티체1단지","g":"북구","d":"운암동"},{"c":"A10020785","n":"센트럴운암모아엘가트레뷰","g":"북구","d":"운암동"},{"c":"A10021904","n":"블루시안2차","g":"북구","d":"운암동"},{"c":"A10023572","n":"중외공원 모아미래도아파트","g":"북구","d":"운암동"},{"c":"A10025664","n":"운암2차 남양휴튼","g":"북구","d":"운암동"},{"c":"A10027218","n":"신성포레힐아파트","g":"북구","d":"운암동"},{"c":"A10028096","n":"블루시안1차","g":"북구","d":"운암동"},{"c":"A50017001","n":"유탑하늘세움아파트","g":"북구","d":"운암동"},{"c":"A50017002","n":"중흥파크2차","g":"북구","d":"운암동"},{"c":"A50017003","n":"우미3차","g":"북구","d":"운암동"},{"c":"A50017004","n":"운암프라자","g":"북구","d":"운암동"},{"c":"A50017005","n":"미라보2차","g":"북구","d":"운암동"},{"c":"A50017006","n":"삼호아파트","g":"북구","d":"운암동"},{"c":"A50017007","n":"중흥파크1차","g":"북구","d":"운암동"},{"c":"A50017008","n":"운암남양휴튼","g":"북구","d":"운암동"},{"c":"A50017009","n":"금호타운","g":"북구","d":"운암동"},{"c":"A50017010","n":"우미1차","g":"북구","d":"운암동"},{"c":"A50017011","n":"우성아파트","g":"북구","d":"운암동"},{"c":"A50017012","n":"한국아파트","g":"북구","d":"운암동"},{"c":"A50017013","n":"나산아파트","g":"북구","d":"운암동"},{"c":"A50017014","n":"대주아파트","g":"북구","d":"운암동"},{"c":"A50017015","n":"현대아파트","g":"북구","d":"운암동"},{"c":"A50017017","n":"운암산IPARK","g":"북구","d":"운암동"},{"c":"A50017018","n":"운암벽산블루밍메가시티2단지","g":"북구","d":"운암동"},{"c":"A50017019","n":"운암일신2차아파트","g":"북구","d":"운암동"},{"c":"A50017020","n":"벽산블루밍운암메가시티3단지","g":"북구","d":"운암동"},{"c":"A50017022","n":"운암동롯데캐슬","g":"북구","d":"운암동"},{"c":"A50017023","n":"벽산블루밍메가시티1단지","g":"북구","d":"운암동"},{"c":"A50017024","n":"운암산코아루렉시안","g":"북구","d":"운암동"},{"c":"A50085601","n":"미라보3차","g":"북구","d":"운암동"},{"c":"A10023601","n":"무등산 자이앤어울림","g":"북구","d":"우산동"},{"c":"A50078302","n":"광주우산3","g":"북구","d":"우산동"},{"c":"A50085101","n":"우산동현대","g":"북구","d":"우산동"},{"c":"A10027082","n":"교대 금호어울림","g":"북구","d":"풍향동"},{"c":"A50011001","n":"문흥라인3","g":"북구","d":"문흥동"},{"c":"A50011002","n":"문흥명지아파트","g":"북구","d":"문흥동"},{"c":"A50011003","n":"문흥우미호반","g":"북구","d":"문흥동"},{"c":"A50011004","n":"문흥모아아파트","g":"북구","d":"문흥동"},{"c":"A50011007","n":"문흥해광한신아파트","g":"북구","d":"문흥동"},{"c":"A50011008","n":"공간아파트","g":"북구","d":"문흥동"},{"c":"A50011009","n":"문흥라인동산","g":"북구","d":"문흥동"},{"c":"A50011010","n":"제일파크","g":"북구","d":"문흥동"},{"c":"A50011011","n":"광명아파트","g":"북구","d":"문흥동"},{"c":"A50011012","n":"일신","g":"북구","d":"문흥동"},{"c":"A50011013","n":"중흥파크3차","g":"북구","d":"문흥동"},{"c":"A50011014","n":"우성아파트","g":"북구","d":"문흥동"},{"c":"A50011015","n":"중흥파크1차","g":"북구","d":"문흥동"},{"c":"A50011016","n":"문흥동중흥2단지 아파트","g":"북구","d":"문흥동"},{"c":"A50011017","n":"우산주공1단지","g":"북구","d":"문흥동"},{"c":"A50011018","n":"현대2","g":"북구","d":"문흥동"},{"c":"A50011020","n":"문흥금호타운","g":"북구","d":"문흥동"},{"c":"A50011021","n":"문흥라인1차","g":"북구","d":"문흥동"},{"c":"A50011022","n":"대주2차","g":"북구","d":"문흥동"},{"c":"A50011023","n":"상록아파트","g":"북구","d":"문흥동"},{"c":"A50011024","n":"문흥우산주공2차","g":"북구","d":"문흥동"},{"c":"A50070401","n":"문흥우미1차아파트","g":"북구","d":"문흥동"},{"c":"A50075319","n":"대주1차","g":"북구","d":"문흥동"},{"c":"A50078801","n":"대주문흥3차","g":"북구","d":"문흥동"},{"c":"A10021983","n":"무등산한국아델리움어반센트럴","g":"북구","d":"각화동"},{"c":"A10023013","n":"각화 센트럴파크 3차 서희스타힐스","g":"북구","d":"각화동"},{"c":"A10023080","n":"더샵광주포레스트아파트","g":"북구","d":"각화동"},{"c":"A10024493","n":"각화 센트럴파크 서희스타힐스","g":"북구","d":"각화동"},{"c":"A10026071","n":"각화힐스테이트","g":"북구","d":"각화동"},{"c":"A10026588","n":"휴먼파크 서희스타힐스아파트","g":"북구","d":"각화동"},{"c":"A10026921","n":"각화동골드클래스","g":"북구","d":"각화동"},{"c":"A50012001","n":"무등파크","g":"북구","d":"각화동"},{"c":"A50076203","n":"각화동글로벌아파트","g":"북구","d":"각화동"},{"c":"A50076504","n":"광주각화","g":"북구","d":"각화동"},{"c":"A50080102","n":"각화금호타운","g":"북구","d":"각화동"},{"c":"A50010001","n":"두암중흥S-클래스","g":"북구","d":"두암동"},{"c":"A50010002","n":"무등파크2차","g":"북구","d":"두암동"},{"c":"A50010003","n":"미라보4차","g":"북구","d":"두암동"},{"c":"A50010004","n":"무등파크맨션","g":"북구","d":"두암동"},{"c":"A50010006","n":"현대1차아파트","g":"북구","d":"두암동"},{"c":"A50010007","n":"주공3단지","g":"북구","d":"두암동"},{"c":"A50010010","n":"두암부영아파트","g":"북구","d":"두암동"},{"c":"A50010012","n":"광주두암2","g":"북구","d":"두암동"},{"c":"A50010015","n":"반석힐라아파트","g":"북구","d":"두암동"},{"c":"A50010201","n":"무등3차","g":"북구","d":"두암동"},{"c":"A50079804","n":"광주두암4","g":"북구","d":"두암동"},{"c":"A50080702","n":"라인동산","g":"북구","d":"두암동"},{"c":"A50080901","n":"두암2차현대아파트","g":"북구","d":"두암동"},{"c":"A50081401","n":"모아미래도","g":"북구","d":"두암동"},{"c":"A50089402","n":"율곡타운","g":"북구","d":"두암동"},{"c":"A10023035","n":"오치동광신프로그레스아파트","g":"북구","d":"오치동"},{"c":"A50013001","n":"오치삼익2차","g":"북구","d":"오치동"},{"c":"A50013002","n":"오치무등파크맨션","g":"북구","d":"오치동"},{"c":"A50013003","n":"로얄타운","g":"북구","d":"오치동"},{"c":"A50013004","n":"오치청암아파트","g":"북구","d":"오치동"},{"c":"A50013005","n":"럭키아파트","g":"북구","d":"오치동"},{"c":"A50013006","n":"우미아파트","g":"북구","d":"오치동"},{"c":"A50013007","n":"금호타운","g":"북구","d":"오치동"},{"c":"A50013008","n":"오치공간아파트","g":"북구","d":"오치동"},{"c":"A50013009","n":"삼익1차","g":"북구","d":"오치동"},{"c":"A50013010","n":"우성아파트","g":"북구","d":"오치동"},{"c":"A50013011","n":"오치주공2단지","g":"북구","d":"오치동"},{"c":"A50013012","n":"한국아델리움","g":"북구","d":"오치동"},{"c":"A50077602","n":"광주오치1","g":"북구","d":"오치동"},{"c":"A50083901","n":"대웅아파트","g":"북구","d":"오치동"},{"c":"A10026381","n":"신일곡 골드클래스 아파트","g":"북구","d":"삼각동"},{"c":"A10027451","n":"일곡엘리체프라임","g":"북구","d":"삼각동"},{"c":"A50014001","n":"삼각동삼익아파트","g":"북구","d":"삼각동"},{"c":"A50014002","n":"혁신타운","g":"북구","d":"삼각동"},{"c":"A50014004","n":"삼각동우미타운","g":"북구","d":"삼각동"},{"c":"A50014005","n":"삼각동모아호반","g":"북구","d":"삼각동"},{"c":"A50079001","n":"삼각그린타운","g":"북구","d":"삼각동"},{"c":"A50079002","n":"삼각호반1차","g":"북구","d":"삼각동"},{"c":"A50082503","n":"서라아파트","g":"북구","d":"삼각동"},{"c":"A10021773","n":"매곡동해광샹그릴라아파트","g":"북구","d":"매곡동"},{"c":"A10026827","n":"매곡대광로제비앙아파트","g":"북구","d":"매곡동"},{"c":"A50015002","n":"호반1차","g":"북구","d":"매곡동"},{"c":"A50015010","n":"매곡아남아파트","g":"북구","d":"매곡동"},{"c":"A50015011","n":"매곡삼익아파트","g":"북구","d":"매곡동"},{"c":"A50015013","n":"매곡대주피오레","g":"북구","d":"매곡동"},{"c":"A50081501","n":"공간아파트","g":"북구","d":"매곡동"},{"c":"A50081506","n":"호반2차아파트","g":"북구","d":"매곡동"},{"c":"A50081507","n":"대화아파트","g":"북구","d":"매곡동"},{"c":"A50081604","n":"부림2차아파트","g":"북구","d":"매곡동"},{"c":"A50081609","n":"부림1차아파트","g":"북구","d":"매곡동"},{"c":"A50081612","n":"매곡동금호아파트","g":"북구","d":"매곡동"},{"c":"A50081614","n":"서광인텔파크","g":"북구","d":"매곡동"},{"c":"A50089115","n":"매곡_대성베르힐","g":"북구","d":"매곡동"},{"c":"A10025293","n":"힐스테이트본촌","g":"북구","d":"본촌동"},{"c":"A50021001","n":"양산사랑으로부영","g":"북구","d":"본촌동"},{"c":"A50021002","n":"현진에버빌","g":"북구","d":"본촌동"},{"c":"A50016002","n":"삼호아파트","g":"북구","d":"일곡동"},{"c":"A50016003","n":"일곡현대3차","g":"북구","d":"일곡동"},{"c":"A50016008","n":"일곡한국아파트","g":"북구","d":"일곡동"},{"c":"A50016009","n":"벽산아파트","g":"북구","d":"일곡동"},{"c":"A50016011","n":"청솔2차아파트","g":"북구","d":"일곡동"},{"c":"A50016013","n":"일곡2차현대아파트","g":"북구","d":"일곡동"},{"c":"A50074917","n":"대림1차","g":"북구","d":"일곡동"},{"c":"A50074918","n":"진로","g":"북구","d":"일곡동"},{"c":"A50074919","n":"일곡청솔3차","g":"북구","d":"일곡동"},{"c":"A50079415","n":"일곡1차 현대","g":"북구","d":"일곡동"},{"c":"A50079418","n":"청솔4차","g":"북구","d":"일곡동"},{"c":"A50079501","n":"동아아파트","g":"북구","d":"일곡동"},{"c":"A50086506","n":"대림2차","g":"북구","d":"일곡동"},{"c":"A50086507","n":"쌍용아파트","g":"북구","d":"일곡동"},{"c":"A50086510","n":"금호아파트","g":"북구","d":"일곡동"},{"c":"A50086516","n":"롯데아파트","g":"북구","d":"일곡동"},{"c":"A50086604","n":"호반일신","g":"북구","d":"일곡동"},{"c":"A50086705","n":"일곡대우아파트","g":"북구","d":"일곡동"},{"c":"A50086712","n":"한일아파트","g":"북구","d":"일곡동"},{"c":"A50086714","n":"일곡청솔1차아파트","g":"북구","d":"일곡동"},{"c":"A10019928","n":"양산유탑유블레스스카이뷰","g":"북구","d":"양산동"},{"c":"A10020282","n":"양산고운하이플러스 아파트","g":"북구","d":"양산동"},{"c":"A10021853","n":"양산명지써밋 주상복합","g":"북구","d":"양산동"},{"c":"A50020004","n":"새봄아파트","g":"북구","d":"양산동"},{"c":"A50020005","n":"동남3차아파트","g":"북구","d":"양산동"},{"c":"A50020007","n":"양산1차일신아파트","g":"북구","d":"양산동"},{"c":"A50020010","n":"청암아파트","g":"북구","d":"양산동"},{"c":"A50020014","n":"양산1차호반리젠시빌","g":"북구","d":"양산동"},{"c":"A50088703","n":"양산동남2차","g":"북구","d":"양산동"},{"c":"A50088708","n":"우미아파트","g":"북구","d":"양산동"},{"c":"A50088713","n":"양산일신2차","g":"북구","d":"양산동"},{"c":"A50088801","n":"한양아파트","g":"북구","d":"양산동"},{"c":"A50088802","n":"양산동 금광아파트","g":"북구","d":"양산동"},{"c":"A50088806","n":"양산동한국","g":"북구","d":"양산동"},{"c":"A50088811","n":"양산주공아파트","g":"북구","d":"양산동"},{"c":"A50089509","n":"GS그린자이1차","g":"북구","d":"양산동"},{"c":"A50089612","n":"GS그린자이2차","g":"북구","d":"양산동"},{"c":"A50090315","n":"양산동영무예다음","g":"북구","d":"양산동"},{"c":"A50090316","n":"양산2차호반리젠시빌","g":"북구","d":"양산동"},{"c":"A50090317","n":"송지트리뷰아파트","g":"북구","d":"양산동"},{"c":"A10020047","n":"연제첨단광신프로그레스아파트","g":"북구","d":"연제동"},{"c":"A10024873","n":"힐스테이트 연제 아파트","g":"북구","d":"연제동"},{"c":"A10026424","n":"연제 골드클래스","g":"북구","d":"연제동"},{"c":"A10026771","n":"첨단 연제고운하이플러스","g":"북구","d":"연제동"},{"c":"A50019002","n":"연제2차대주피오레","g":"북구","d":"연제동"},{"c":"A50019005","n":"현대아파트","g":"북구","d":"연제동"},{"c":"A50078001","n":"연제1차대주피오레","g":"북구","d":"연제동"},{"c":"A50078002","n":"연제한국아델리움","g":"북구","d":"연제동"},{"c":"A50078003","n":"연제주공아파트","g":"북구","d":"연제동"},{"c":"A50078004","n":"연제대광로제비앙","g":"북구","d":"연제동"},{"c":"A50083401","n":"광명1차","g":"북구","d":"연제동"},{"c":"A50083403","n":"연제동 광명2차아파트","g":"북구","d":"연제동"},{"c":"A50083404","n":"연제동새한아파트","g":"북구","d":"연제동"},{"c":"A10022635","n":"힐스테이트신용더리버아파트","g":"북구","d":"신용동"},{"c":"A10028074","n":"첨단2지구 중흥S-클래스 아파트","g":"북구","d":"신용동"},{"c":"A50079101","n":"신용주공아파트","g":"북구","d":"신용동"},{"c":"A50079102","n":"첨단자이1차아파트","g":"북구","d":"신용동"},{"c":"A50079103","n":"광주첨단2휴먼시아","g":"북구","d":"신용동"},{"c":"A50079104","n":"첨단1단지휴먼시아","g":"북구","d":"신용동"},{"c":"A50079105","n":"첨단자이2단지","g":"북구","d":"신용동"},{"c":"A50079106","n":"광주첨단2지구부영","g":"북구","d":"신용동"},{"c":"A50079107","n":"첨단2지구호반2차","g":"북구","d":"신용동"},{"c":"A50079109","n":"첨단2지구제일풍경채","g":"북구","d":"신용동"},{"c":"A50079110","n":"한양수자인","g":"북구","d":"신용동"},{"c":"A50079111","n":"호반베르디움1단지","g":"북구","d":"신용동"},{"c":"A50083301","n":"용두주공아파트1차","g":"북구","d":"신용동"},{"c":"A10022479","n":"첨단프라임시티 서희스타힐스아파트","g":"북구","d":"용두동"},{"c":"A10022608","n":"첨단센트럴시티 서희스타힐스","g":"북구","d":"용두동"},{"c":"A10025016","n":"첨단진아리채아파트","g":"북구","d":"용두동"},{"c":"A10026468","n":"첨단우방아이유쉘","g":"북구","d":"용두동"},{"c":"A10026513","n":"첨단용두 산이고운 아파트","g":"북구","d":"용두동"},{"c":"A10026747","n":"첨단대우이안아파트","g":"북구","d":"용두동"},{"c":"A10027470","n":"양산진아리채아파트","g":"북구","d":"용두동"},{"c":"A50022001","n":"양산타운","g":"북구","d":"용두동"},{"c":"A50022002","n":"용두2주공아파트","g":"북구","d":"용두동"},{"c":"A10019878","n":"첨단 풍경채 어바니티","g":"북구","d":"월출동"},{"c":"A10021998","n":"광주과학기술원 교수아파트","g":"북구","d":"오룡동"},{"c":"A10021571","n":"송정동 펠릭스골드","g":"광산구","d":"송정동"},{"c":"A10021956","n":"송정동 마이다스빌","g":"광산구","d":"송정동"},{"c":"A10022120","n":"송정역숲안애2차아파트","g":"광산구","d":"송정동"},{"c":"A10026190","n":"광주송정역모아엘가아파트","g":"광산구","d":"송정동"},{"c":"A50601001","n":"광신프로그레스","g":"광산구","d":"송정동"},{"c":"A50601003","n":"상아아파트","g":"광산구","d":"송정동"},{"c":"A50601004","n":"온세계아이조움","g":"광산구","d":"송정동"},{"c":"A50601005","n":"대덕9차","g":"광산구","d":"송정동"},{"c":"A50601007","n":"송정라인1차아파트","g":"광산구","d":"송정동"},{"c":"A50601008","n":"모아아파트","g":"광산구","d":"송정동"},{"c":"A50601009","n":"송정동대화아파트","g":"광산구","d":"송정동"},{"c":"A50601010","n":"송정라인2차","g":"광산구","d":"송정동"},{"c":"A50601012","n":"송정금강아파트","g":"광산구","d":"송정동"},{"c":"A50601013","n":"송정명지아파트","g":"광산구","d":"송정동"},{"c":"A50672201","n":"송정신한화아파트","g":"광산구","d":"송정동"},{"c":"A10021909","n":"보경해피드림아파트","g":"광산구","d":"도산동"},{"c":"A10022031","n":"삼라극동마이다스","g":"광산구","d":"도산동"},{"c":"A10025617","n":"송정우방아이유쉘아파트","g":"광산구","d":"도산동"},{"c":"A10026889","n":"도산 우방 아이유쉘 아파트","g":"광산구","d":"도산동"},{"c":"A50602001","n":"무등파크","g":"광산구","d":"도산동"},{"c":"A50602004","n":"삼라미주.도산청암통합주공아파트","g":"광산구","d":"도산동"},{"c":"A50602005","n":"도산서경","g":"광산구","d":"도산동"},{"c":"A50602006","n":"도산2차호반","g":"광산구","d":"도산동"},{"c":"A50602007","n":"도산우미","g":"광산구","d":"도산동"},{"c":"A50679901","n":"카이스트빌2차","g":"광산구","d":"도산동"},{"c":"A50679904","n":"도산금강2차","g":"광산구","d":"도산동"},{"c":"A50679905","n":"대덕1차","g":"광산구","d":"도산동"},{"c":"A50679906","n":"호반청암빌라트","g":"광산구","d":"도산동"},{"c":"A50680008","n":"도산대주1차파크빌","g":"광산구","d":"도산동"},{"c":"A50680009","n":"도산호반1차아파트","g":"광산구","d":"도산동"},{"c":"A50680103","n":"도산동대주2차파크빌","g":"광산구","d":"도산동"},{"c":"A50680110","n":"카이스트빌1차","g":"광산구","d":"도산동"},{"c":"A50679304","n":"신촌대주파크빌","g":"광산구","d":"신촌동"},{"c":"A50679305","n":"신촌명지","g":"광산구","d":"신촌동"},{"c":"A50681001","n":"신촌동중도다이아빌","g":"광산구","d":"신촌동"},{"c":"A10019984","n":"예다음퍼스티지","g":"광산구","d":"운수동"},{"c":"A10020677","n":"광주 선운2 레니체 아파트","g":"광산구","d":"운수동"},{"c":"A10020678","n":"광주선운2 포리에","g":"광산구","d":"운수동"},{"c":"A10022557","n":"광주선운희망타운2단지","g":"광산구","d":"운수동"},{"c":"A50611001","n":"가천아파트","g":"광산구","d":"운수동"},{"c":"A10020791","n":"어등산진아리채리버필드","g":"광산구","d":"선암동"},{"c":"A10021690","n":"선운더브이레브리티","g":"광산구","d":"선암동"},{"c":"A10026899","n":"선운리버프라임","g":"광산구","d":"선암동"},{"c":"A10027580","n":"선운이지더원3단지","g":"광산구","d":"선암동"},{"c":"A10028119","n":"해광샹그릴라","g":"광산구","d":"선암동"},{"c":"A10028163","n":"선운지구다사로움","g":"광산구","d":"선암동"},{"c":"A50610001","n":"광주선운휴먼시아","g":"광산구","d":"선암동"},{"c":"A50610002","n":"선운지구이지더원1단지","g":"광산구","d":"선암동"},{"c":"A50610003","n":"선운 모아엘가","g":"광산구","d":"선암동"},{"c":"A50610004","n":"선운이지더원2단지","g":"광산구","d":"선암동"},{"c":"A50610005","n":"선운진아리채","g":"광산구","d":"선암동"},{"c":"A10020531","n":"송광맨션 3차 아파트 301동","g":"광산구","d":"소촌동"},{"c":"A10023667","n":"힐스테이트 광산","g":"광산구","d":"소촌동"},{"c":"A10024096","n":"소촌3차국제미소래아파트","g":"광산구","d":"소촌동"},{"c":"A10024405","n":"소촌2차 국제미소래아파트","g":"광산구","d":"소촌동"},{"c":"A10026966","n":"소촌동 모아엘가에듀퍼스트","g":"광산구","d":"소촌동"},{"c":"A50604008","n":"서라1차","g":"광산구","d":"소촌동"},{"c":"A50604012","n":"EG스위트밸리1,2차","g":"광산구","d":"소촌동"},{"c":"A50671701","n":"소촌모아2차드림타운","g":"광산구","d":"소촌동"},{"c":"A50671702","n":"소촌동대성베르힐","g":"광산구","d":"소촌동"},{"c":"A50676116","n":"소촌라인1차","g":"광산구","d":"소촌동"},{"c":"A50679715","n":"모아드림타운1차","g":"광산구","d":"소촌동"},{"c":"A50680201","n":"대화아파트","g":"광산구","d":"소촌동"},{"c":"A50680204","n":"온세계아파트(소촌동)","g":"광산구","d":"소촌동"},{"c":"A50680205","n":"금호훼미리","g":"광산구","d":"소촌동"},{"c":"A50680206","n":"소촌 성화파인빌","g":"광산구","d":"소촌동"},{"c":"A50680209","n":"대덕6차 무지개","g":"광산구","d":"소촌동"},{"c":"A50680211","n":"EG스위트밸리3차","g":"광산구","d":"소촌동"},{"c":"A50680213","n":"소촌라인2차","g":"광산구","d":"소촌동"},{"c":"A50680303","n":"소촌동2차서라아파트","g":"광산구","d":"소촌동"},{"c":"A50680307","n":"송광파크맨션","g":"광산구","d":"소촌동"},{"c":"A10023284","n":"무진로 더브이 벨라코트","g":"광산구","d":"우산동"},{"c":"A10023889","n":"무진로진아리채리버뷰","g":"광산구","d":"우산동"},{"c":"A10024454","n":"쌍용 더 플래티넘 광산 아파트","g":"광산구","d":"우산동"},{"c":"A10024990","n":"세계수영선수촌 중흥S-클래스 센트럴","g":"광산구","d":"우산동"},{"c":"A10025138","n":"우산동 동부센트레빌","g":"광산구","d":"우산동"},{"c":"A10025254","n":"광주 우산LH1단지","g":"광산구","d":"우산동"},{"c":"A10025707","n":"하남LH천년나무","g":"광산구","d":"우산동"},{"c":"A10026398","n":"우산동 한국아델리움&중해마루힐","g":"광산구","d":"우산동"},{"c":"A10026925","n":"우산동 국제미소래아파트","g":"광산구","d":"우산동"},{"c":"A10027781","n":"우산동중흥S클래스리버티","g":"광산구","d":"우산동"},{"c":"A50605002","n":"우산제일파크","g":"광산구","d":"우산동"},{"c":"A50605003","n":"우산동 동산아파트","g":"광산구","d":"우산동"},{"c":"A50605004","n":"우미","g":"광산구","d":"우산동"},{"c":"A50605007","n":"리버힐","g":"광산구","d":"우산동"},{"c":"A50605008","n":"대광로제비앙","g":"광산구","d":"우산동"},{"c":"A50605009","n":"우산빛여울채","g":"광산구","d":"우산동"},{"c":"A50675212","n":"하남주공1단지","g":"광산구","d":"우산동"},{"c":"A50681301","n":"우산대덕2차","g":"광산구","d":"우산동"},{"c":"A50681505","n":"어등하이빌","g":"광산구","d":"우산동"},{"c":"A50681508","n":"하남주공2단지","g":"광산구","d":"우산동"},{"c":"A10025308","n":"첨단금호어울림더테라스","g":"광산구","d":"비아동"},{"c":"A50676002","n":"비아호반","g":"광산구","d":"비아동"},{"c":"A50630101","n":"도천중흥파크1단지","g":"광산구","d":"도천동"},{"c":"A50630102","n":"도천중흥파크2단지","g":"광산구","d":"도천동"},{"c":"A10020287","n":"수완산이고운더테라스","g":"광산구","d":"수완동"},{"c":"A10021804","n":"수완한국아델리움57 트리니티 1단지, 2단지","g":"광산구","d":"수완동"},{"c":"A10021850","n":"수완대라수어썸테라스","g":"광산구","d":"수완동"},{"c":"A10027489","n":"수완진아리채2차","g":"광산구","d":"수완동"},{"c":"A50630401","n":"수완지구우미린1차","g":"광산구","d":"수완동"},{"c":"A50630402","n":"수완모아엘가","g":"광산구","d":"수완동"},{"c":"A50630403","n":"수완해솔마을현진에버빌1단지","g":"광산구","d":"수완동"},{"c":"A50630404","n":"수완코오롱하늘채","g":"광산구","d":"수완동"},{"c":"A50630405","n":"수완지구우미린2차","g":"광산구","d":"수완동"},{"c":"A50630406","n":"현대아미스위탁(수완피오레6단지)","g":"광산구","d":"수완동"},{"c":"A50630407","n":"대방노블랜드2차","g":"광산구","d":"수완동"},{"c":"A50630408","n":"수완영무예다음2차","g":"광산구","d":"수완동"},{"c":"A50630409","n":"수완6차대방노블랜드","g":"광산구","d":"수완동"},{"c":"A10020777","n":"첨단동아아파트","g":"광산구","d":"월계동"},{"c":"A10021032","n":"첨단6차라인아파트","g":"광산구","d":"월계동"},{"c":"A10021488","n":"기산아파트","g":"광산구","d":"월계동"},{"c":"A10021510","n":"첨단 AM-CITY스카이하이1차","g":"광산구","d":"월계동"},{"c":"A10021837","n":"두산2차아파트","g":"광산구","d":"월계동"},{"c":"A10021900","n":"첨단라인8차아파트","g":"광산구","d":"월계동"},{"c":"A10024961","n":"광주첨단 LH 1.2.3단지","g":"광산구","d":"월계동"},{"c":"A10026356","n":"첨단라인2차아파트","g":"광산구","d":"월계동"},{"c":"A10026390","n":"첨단삼능아파트","g":"광산구","d":"월계동"},{"c":"A10027006","n":"첨단라인3차아파트","g":"광산구","d":"월계동"},{"c":"A10027010","n":"첨단삼성아파트","g":"광산구","d":"월계동"},{"c":"A10027545","n":"첨단라인7차아파트","g":"광산구","d":"월계동"},{"c":"A50630203","n":"첨단우미1차","g":"광산구","d":"월계동"},{"c":"A50630208","n":"신동아","g":"광산구","d":"월계동"},{"c":"A50630212","n":"성원아파트","g":"광산구","d":"월계동"},{"c":"A50630214","n":"일신아파트","g":"광산구","d":"월계동"},{"c":"A50630215","n":"건영아파트","g":"광산구","d":"월계동"},{"c":"A50630216","n":"첨단우미3차아파트","g":"광산구","d":"월계동"},{"c":"A50670801","n":"첨단모아미래도","g":"광산구","d":"월계동"},{"c":"A50670802","n":"무들에코클래스","g":"광산구","d":"월계동"},{"c":"A50677124","n":"라인1차","g":"광산구","d":"월계동"},{"c":"A50681901","n":"첨단대주","g":"광산구","d":"월계동"},{"c":"A50681921","n":"첨단대우아파트","g":"광산구","d":"월계동"},{"c":"A50682013","n":"라인5차","g":"광산구","d":"월계동"},{"c":"A50682019","n":"선경아파트","g":"광산구","d":"월계동"},{"c":"A50682020","n":"금호아파트","g":"광산구","d":"월계동"},{"c":"A50682104","n":"첨단모아아파트","g":"광산구","d":"월계동"},{"c":"A50682105","n":"벽산아파트","g":"광산구","d":"월계동"},{"c":"A50682110","n":"금광아파트","g":"광산구","d":"월계동"},{"c":"A50682118","n":"첨단동부아파트","g":"광산구","d":"월계동"},{"c":"A50682222","n":"호반2차","g":"광산구","d":"월계동"},{"c":"A50682309","n":"첨단호반1차","g":"광산구","d":"월계동"},{"c":"A50682311","n":"첨단서라아파트","g":"광산구","d":"월계동"},{"c":"A50682317","n":"첨단남양파크","g":"광산구","d":"월계동"},{"c":"A50682323","n":"첨단두산1차","g":"광산구","d":"월계동"},{"c":"A10020765","n":"한양에드가 3차 303동","g":"광산구","d":"쌍암동"},{"c":"A10020766","n":"한양에드가 3차 302동","g":"광산구","d":"쌍암동"},{"c":"A10020778","n":"한양에드가3차301동","g":"광산구","d":"쌍암동"},{"c":"A10021697","n":"첨단AM-City 5차","g":"광산구","d":"쌍암동"},{"c":"A10022617","n":"힐스테이트 첨단","g":"광산구","d":"쌍암동"},{"c":"A10023211","n":"첨단 중해마루힐2차","g":"광산구","d":"쌍암동"},{"c":"A10024744","n":"첨단대라수어썸시티주상복합","g":"광산구","d":"쌍암동"},{"c":"A10024940","n":"첨단중해마루힐1차","g":"광산구","d":"쌍암동"},{"c":"A10025168","n":"첨단대라수3차 주상복합","g":"광산구","d":"쌍암동"},{"c":"A10025209","n":"첨단 대라수2차 주상복합","g":"광산구","d":"쌍암동"},{"c":"A10025663","n":"광주 쌍암힐스테이트리버파크아파트","g":"광산구","d":"쌍암동"},{"c":"A10025940","n":"첨단대라수1차 아파트","g":"광산구","d":"쌍암동"},{"c":"A10026297","n":"첨단AM-City센트럴파크2차","g":"광산구","d":"쌍암동"},{"c":"A10026853","n":"쌍암 중흥 S 클래스 리버시티 주상복합아파트","g":"광산구","d":"쌍암동"},{"c":"A10027828","n":"첨단도휘에드가","g":"광산구","d":"쌍암동"},{"c":"A10027876","n":"첨단AM-City센트럴파크","g":"광산구","d":"쌍암동"},{"c":"A50630501","n":"첨단부영e그린타운1차","g":"광산구","d":"산월동"},{"c":"A50630502","n":"첨단3차부영","g":"광산구","d":"산월동"},{"c":"A50630503","n":"첨단3-5차호반리젠시빌","g":"광산구","d":"산월동"},{"c":"A50630504","n":"첨단3-2차호반리젠시빌","g":"광산구","d":"산월동"},{"c":"A50630505","n":"첨단사랑으로7차부영","g":"광산구","d":"산월동"},{"c":"A50630506","n":"첨단호반3-3차","g":"광산구","d":"산월동"},{"c":"A50630507","n":"첨단6차부영아파트","g":"광산구","d":"산월동"},{"c":"A50630508","n":"첨단부영1차","g":"광산구","d":"산월동"},{"c":"A50670501","n":"첨단부영2차","g":"광산구","d":"산월동"},{"c":"A50670502","n":"첨단3-1차호반리젠시빌","g":"광산구","d":"산월동"},{"c":"A10024939","n":"신창유탑유블레스","g":"광산구","d":"신창동"},{"c":"A10026620","n":"신창대라수아파트","g":"광산구","d":"신창동"},{"c":"A10027313","n":"신창 대광로제비앙아파트","g":"광산구","d":"신창동"},{"c":"A50630601","n":"신창2차남양휴튼","g":"광산구","d":"신창동"},{"c":"A50630602","n":"신가삼능","g":"광산구","d":"신창동"},{"c":"A50630603","n":"신창1차남양휴튼","g":"광산구","d":"신창동"},{"c":"A50630604","n":"신가1차중흥파크맨션","g":"광산구","d":"신창동"},{"c":"A50630605","n":"신창해광샹그릴라","g":"광산구","d":"신창동"},{"c":"A50630606","n":"신창5차부영사랑으로","g":"광산구","d":"신창동"},{"c":"A50630607","n":"신창5차호반베르디움","g":"광산구","d":"신창동"},{"c":"A50630608","n":"풍영리버빌아파트","g":"광산구","d":"신창동"},{"c":"A50630609","n":"신창3차부영","g":"광산구","d":"신창동"},{"c":"A50674301","n":"신창3차호반베르디움","g":"광산구","d":"신창동"},{"c":"A50674302","n":"신창부영2차","g":"광산구","d":"신창동"},{"c":"A50674304","n":"신창부영1차","g":"광산구","d":"신창동"},{"c":"A50674305","n":"신창도시공사국민임대","g":"광산구","d":"신창동"},{"c":"A50679306","n":"신창모아미래도","g":"광산구","d":"신창동"},{"c":"A10023830","n":"모아엘가 더 수완","g":"광산구","d":"신가동"},{"c":"A50630702","n":"수완한양수자인","g":"광산구","d":"신가동"},{"c":"A50630703","n":"신창6차부영","g":"광산구","d":"신가동"},{"c":"A50630705","n":"신가2차중흥아파트","g":"광산구","d":"신가동"},{"c":"A50630707","n":"수등리안아파트","g":"광산구","d":"신가동"},{"c":"A50630714","n":"광주신가주공","g":"광산구","d":"신가동"},{"c":"A50630715","n":"광주아름마을1","g":"광산구","d":"신가동"},{"c":"A50670408","n":"아름마을 대방노블랜드(수완대방노블랜드1차)","g":"광산구","d":"신가동"},{"c":"A50670409","n":"신창6차호반베르디움","g":"광산구","d":"신가동"},{"c":"A50670410","n":"수완1단지중흥S클래스","g":"광산구","d":"신가동"},{"c":"A50670411","n":"신가우미이노스빌","g":"광산구","d":"신가동"},{"c":"A50670413","n":"수완아름마을휴먼시아2단지","g":"광산구","d":"신가동"},{"c":"A50670414","n":"수완아름마을휴먼시아3단지","g":"광산구","d":"신가동"},{"c":"A50670415","n":"수완호반베르디움1차","g":"광산구","d":"신가동"},{"c":"A50670416","n":"수완진아리채1차","g":"광산구","d":"신가동"},{"c":"A50670417","n":"수완대성베르힐","g":"광산구","d":"신가동"},{"c":"A50674303","n":"신창사랑으로부영7차","g":"광산구","d":"신가동"},{"c":"A50690101","n":"호반리젠시빌2차","g":"광산구","d":"신가동"},{"c":"A50690104","n":"신가1차호반리젠시빌","g":"광산구","d":"신가동"},{"c":"A10025067","n":"운남진아리채리버힐즈","g":"광산구","d":"운남동"},{"c":"A10027693","n":"운남우방아이유쉘","g":"광산구","d":"운남동"},{"c":"A50630806","n":"운남주공6단지","g":"광산구","d":"운남동"},{"c":"A50630807","n":"운남주공8단지","g":"광산구","d":"운남동"},{"c":"A50678109","n":"운남주공7단지","g":"광산구","d":"운남동"},{"c":"A50681601","n":"남양아파트","g":"광산구","d":"운남동"},{"c":"A50681610","n":"운남삼성","g":"광산구","d":"운남동"},{"c":"A50681705","n":"운남주공5단지","g":"광산구","d":"운남동"},{"c":"A50681802","n":"운남주공1단지","g":"광산구","d":"운남동"},{"c":"A50681803","n":"운남주공2단지","g":"광산구","d":"운남동"},{"c":"A50681804","n":"운남주공3단지","g":"광산구","d":"운남동"},{"c":"A50681808","n":"운남주공4단지","g":"광산구","d":"운남동"},{"c":"A10027891","n":"수완2차 골드클래스","g":"광산구","d":"장덕동"},{"c":"A50625101","n":"수완영무예다음","g":"광산구","d":"장덕동"},{"c":"A50625102","n":"수완양우내안애아파트","g":"광산구","d":"장덕동"},{"c":"A50625103","n":"수완새한포유","g":"광산구","d":"장덕동"},{"c":"A50625104","n":"수완수아리움","g":"광산구","d":"장덕동"},{"c":"A50625105","n":"수완GS자이","g":"광산구","d":"장덕동"},{"c":"A50625106","n":"수완진흥더루벤스","g":"광산구","d":"장덕동"},{"c":"A50625107","n":"수완루아채","g":"광산구","d":"장덕동"},{"c":"A50625108","n":"수완현진에버빌2단지","g":"광산구","d":"장덕동"},{"c":"A50672701","n":"신안실크밸리","g":"광산구","d":"장덕동"},{"c":"A50672702","n":"수완피오레1단지","g":"광산구","d":"장덕동"},{"c":"A50672703","n":"고실마을 휴먼시아8단지","g":"광산구","d":"장덕동"},{"c":"A50672704","n":"신완마을휴먼시아6단지","g":"광산구","d":"장덕동"},{"c":"A50672705","n":"신완마을휴먼시아7단지","g":"광산구","d":"장덕동"},{"c":"A50672706","n":"수완대방노블랜드5차","g":"광산구","d":"장덕동"},{"c":"A50672707","n":"성덕마을 대방노블랜드3차","g":"광산구","d":"장덕동"},{"c":"A50672708","n":"수완2차호반베르디움","g":"광산구","d":"장덕동"},{"c":"A50672709","n":"수완골드클래스아파트","g":"광산구","d":"장덕동"},{"c":"A50672710","n":"수완세영리첼","g":"광산구","d":"장덕동"},{"c":"A10024169","n":"수완센트럴시티 서희스타힐스","g":"광산구","d":"흑석동"},{"c":"A50625201","n":"수완지구3단지중흥S클래스","g":"광산구","d":"흑석동"},{"c":"A50625202","n":"중흥에스-클래스2단지","g":"광산구","d":"흑석동"},{"c":"A50625203","n":"수완휴먼시아4단지","g":"광산구","d":"흑석동"},{"c":"A50625204","n":"수완휴먼시아5단지","g":"광산구","d":"흑석동"},{"c":"A50625205","n":"수완이지더원","g":"광산구","d":"흑석동"},{"c":"A10025917","n":"하남3모아엘가더퍼스트","g":"광산구","d":"하남동"},{"c":"A10028099","n":"다사로움3차아파트","g":"광산구","d":"하남동"},{"c":"A50673401","n":"위더스하임","g":"광산구","d":"하남동"},{"c":"A10022943","n":"어등산 대광로제비앙 퍼스트뷰 아파트","g":"광산구","d":"산정동"},{"c":"A10024442","n":"어등산한양수자인테라스플러스","g":"광산구","d":"산정동"},{"c":"A10026402","n":"어등산한국아델리움2단지","g":"광산구","d":"산정동"},{"c":"A10026425","n":"어등산한국아델리움1단지","g":"광산구","d":"산정동"},{"c":"A10026690","n":"산정빛여울채아파트","g":"광산구","d":"산정동"},{"c":"A50605301","n":"산정대덕7차","g":"광산구","d":"산정동"},{"c":"A50605302","n":"산정태양","g":"광산구","d":"산정동"},{"c":"A50605303","n":"산정 셀트리움","g":"광산구","d":"산정동"},{"c":"A50605304","n":"하남부영애시앙2차","g":"광산구","d":"산정동"},{"c":"A50671301","n":"하남다사로움국민임대","g":"광산구","d":"산정동"},{"c":"A50671302","n":"하남2지구 다사로움2단지","g":"광산구","d":"산정동"},{"c":"A50671303","n":"어등산대방노블랜드","g":"광산구","d":"산정동"},{"c":"A50671304","n":"하남2지구중흥S클래스","g":"광산구","d":"산정동"},{"c":"A50605401","n":"일신아파트","g":"광산구","d":"월곡동"},{"c":"A50605403","n":"하남금호타운","g":"광산구","d":"월곡동"},{"c":"A50677502","n":"한성2차","g":"광산구","d":"월곡동"},{"c":"A50677602","n":"영천마을주공10단지","g":"광산구","d":"월곡동"},{"c":"A50677603","n":"영천마을주공9단지","g":"광산구","d":"월곡동"},{"c":"A50677604","n":"월곡부영아파트","g":"광산구","d":"월곡동"},{"c":"A50682501","n":"광주한성1차아파트","g":"광산구","d":"월곡동"},{"c":"A10023687","n":"평동역 광신프로그레스","g":"광산구","d":"옥동"},{"c":"A10020892","n":"나주역자이리버파크","g":"나주시","d":"송월동"},{"c":"A10021997","n":"남양휴튼 더퍼스트 아파트","g":"나주시","d":"송월동"},{"c":"A10025863","n":"나주달빛마을세움트리","g":"나주시","d":"송월동"},{"c":"A10026466","n":"양우내안애센텀시티아파트","g":"나주시","d":"송월동"},{"c":"A10026802","n":"나주 힐데스하임","g":"나주시","d":"송월동"},{"c":"A52013002","n":"송월주공아파트","g":"나주시","d":"송월동"},{"c":"A52070101","n":"나주송월부영2차","g":"나주시","d":"송월동"},{"c":"A52075101","n":"나주1차부영아파트","g":"나주시","d":"삼영동"},{"c":"A52002001","n":"금계 우영타워","g":"나주시","d":"금계동"},{"c":"A52075502","n":"성북주공아파트","g":"나주시","d":"성북동"},{"c":"A10027519","n":"나주대호2차대방노블랜드","g":"나주시","d":"대호동"},{"c":"A52018001","n":"나주성북현대아파트","g":"나주시","d":"대호동"},{"c":"A52018002","n":"나주대방노블랜드","g":"나주시","d":"대호동"},{"c":"A52075601","n":"나주호반1차","g":"나주시","d":"대호동"},{"c":"A52075602","n":"호반2차리젠시빌","g":"나주시","d":"대호동"},{"c":"A52009001","n":"나주 삼성아파트","g":"나주시","d":"죽림동"},{"c":"A52025003","n":"나주용산주공1","g":"나주시","d":"용산동"},{"c":"A52075402","n":"나주용산주공2차","g":"나주시","d":"용산동"},{"c":"A10023511","n":"나주이창 LH1단지","g":"나주시","d":"이창동"},{"c":"A10028054","n":"나주사랑가아파트","g":"나주시","d":"이창동"},{"c":"A10022255","n":"세왕아파트","g":"나주시","d":"대기동"},{"c":"A10024610","n":"광주전남혁신이노시티애시앙1단지","g":"나주시","d":"빛가람동"},{"c":"A10026166","n":"대방엘리움 로얄카운티 2차","g":"나주시","d":"빛가람동"},{"c":"A10026246","n":"대방엘리움 로얄카운티 1차","g":"나주시","d":"빛가람동"},{"c":"A10026536","n":"광주전남혁신3단지 부영아파트","g":"나주시","d":"빛가람동"},{"c":"A10027060","n":"빛가람 이지더원아파트","g":"나주시","d":"빛가람동"},{"c":"A10027219","n":"혁신도시 빛가람중흥S-CLASS리버티","g":"나주시","d":"빛가람동"},{"c":"A10027302","n":"나주 빛가람 중흥S클래스 센트럴 2차 아파트","g":"나주시","d":"빛가람동"},{"c":"A10027377","n":"빛가람 중흥S클래스센트럴1차아파트","g":"나주시","d":"빛가람동"},{"c":"A10027384","n":"나주혁신 빛가람로제비앙","g":"나주시","d":"빛가람동"},{"c":"A10027397","n":"빛가람LH6단지","g":"나주시","d":"빛가람동"},{"c":"A10027485","n":"나주 혁신도시 영무 예다음아파트","g":"나주시","d":"빛가람동"},{"c":"A10027719","n":"나주혁신부영2차","g":"나주시","d":"빛가람동"},{"c":"A10027809","n":"나주빛가람LH5단지","g":"나주시","d":"빛가람동"},{"c":"A10027874","n":"루멘하임아파트","g":"나주시","d":"빛가람동"},{"c":"A10028045","n":"빛가람우미린","g":"나주시","d":"빛가람동"},{"c":"A10028060","n":"빛가람엘에이치1단지","g":"나주시","d":"빛가람동"},{"c":"A52071501","n":"에듀캐슬아파트","g":"나주시","d":"빛가람동"},{"c":"A52071503","n":"센트럴레이크","g":"나주시","d":"빛가람동"},{"c":"A52082101","n":"빛가람엘에이치3단지","g":"나주시","d":"빛가람동"},{"c":"A10025995","n":"양우내안애리버시티2차아파트","g":"나주시","d":"남평읍"},{"c":"A10026137","n":"양우내안애리버시티1차아파트","g":"나주시","d":"남평읍"},{"c":"A10027155","n":"STX KAN 중우하나린 아파트","g":"나주시","d":"남평읍"},{"c":"A52071002","n":"남평유성그린","g":"나주시","d":"남평읍"},{"c":"A52071001","n":"팔마코이스","g":"나주시","d":"남평읍"},{"c":"A10023574","n":"빛가람코오롱하늘채아파트","g":"나주시","d":"금천면"},{"c":"A10021209","n":"화순한국아델리움더숲","g":"화순군","d":"화순읍"},{"c":"A10024232","n":"힐스테이트 화순","g":"화순군","d":"화순읍"},{"c":"A51975106","n":"공간아파트","g":"화순군","d":"화순읍"},{"c":"A51975117","n":"서라2차","g":"화순군","d":"화순읍"},{"c":"A51975109","n":"금호아파트","g":"화순군","d":"화순읍"},{"c":"A51975110","n":"화순부영1차아파트","g":"화순군","d":"화순읍"},{"c":"A51975112","n":"화순부영3차아파트","g":"화순군","d":"화순읍"},{"c":"A51975115","n":"화순부영5차","g":"화순군","d":"화순읍"},{"c":"A51980602","n":"유창2차","g":"화순군","d":"화순읍"},{"c":"A51975111","n":"화순부영6차","g":"화순군","d":"화순읍"},{"c":"A51975113","n":"화순청전아파트","g":"화순군","d":"화순읍"},{"c":"A51980910","n":"서라4차","g":"화순군","d":"화순읍"},{"c":"A51975101","n":"유창3차아파트","g":"화순군","d":"화순읍"},{"c":"A51975108","n":"화순부영2차아파트","g":"화순군","d":"화순읍"},{"c":"A51980304","n":"미륭타운","g":"화순군","d":"화순읍"},{"c":"A10020286","n":"화순 센템 모아엘가 트레뷰 아파트","g":"화순군","d":"화순읍"},{"c":"A10022697","n":"힐스테이트 화순2차 아파트","g":"화순군","d":"화순읍"},{"c":"A10024936","n":"화순 한양립스 아파트","g":"화순군","d":"화순읍"},{"c":"A10027201","n":"화순산이고운아파트","g":"화순군","d":"화순읍"},{"c":"A10025631","n":"화순청미래아파트","g":"화순군","d":"화순읍"},{"c":"A10027637","n":"화순 광신프로그레스아파트","g":"화순군","d":"화순읍"},{"c":"A51975114","n":"대광로제비앙2차","g":"화순군","d":"화순읍"},{"c":"A51975116","n":"대광로제비앙","g":"화순군","d":"화순읍"},{"c":"A51975118","n":"대성베르힐","g":"화순군","d":"화순읍"},{"c":"A51975119","n":"흥용한고을","g":"화순군","d":"화순읍"},{"c":"A51975120","n":"화순한국아델리움","g":"화순군","d":"화순읍"},{"c":"A10024148","n":"화순 삼일파라뷰 에듀시티","g":"화순군","d":"화순읍"},{"c":"A51980107","n":"화순서라3차아파트","g":"화순군","d":"화순읍"},{"c":"A51980205","n":"화순오성2차아파트","g":"화순군","d":"화순읍"},{"c":"A51981101","n":"잠정햇살마을","g":"화순군","d":"능주면"},{"c":"A10023175","n":"장성수산LH1단지","g":"장성군","d":"장성읍"},{"c":"A10028015","n":"부강2차아트빌","g":"장성군","d":"장성읍"},{"c":"A10020798","n":"대광로제비앙 장성 센텀 스카이","g":"장성군","d":"장성읍"},{"c":"A10021634","n":"장성 엘리젠아파트","g":"장성군","d":"장성읍"},{"c":"A10022026","n":"해주그린아파트","g":"장성군","d":"장성읍"},{"c":"A10022048","n":"부강아트빌","g":"장성군","d":"장성읍"},{"c":"A10022250","n":"장성청담웰피아아파트","g":"장성군","d":"장성읍"},{"c":"A10025234","n":"장성해광샹그릴라아파트","g":"장성군","d":"장성읍"},{"c":"A10025777","n":"장성영천지구 공공실버주택","g":"장성군","d":"장성읍"},{"c":"A51580001","n":"영천주공아파트","g":"장성군","d":"장성읍"},{"c":"A51580002","n":"영천휴먼시아2단지","g":"장성군","d":"장성읍"},{"c":"A51580003","n":"지아이장성나빌래","g":"장성군","d":"장성읍"},{"c":"A10019986","n":"장성남양휴튼리버파크","g":"장성군","d":"장성읍"},{"c":"A10019856","n":"힐스테이트첨단센트럴","g":"장성군","d":"진원면"},{"c":"A10019886","n":"첨단3제일풍경채 그랑포레","g":"장성군","d":"진원면"},{"c":"A10024459","n":"장성삼계LH1단지","g":"장성군","d":"삼계면"},{"c":"A51575101","n":"금광아파트","g":"장성군","d":"삼계면"},{"c":"X12840001","n":"장성청담웰피아2차","g":"장성군","d":"장성읍"},{"c":"X12840002","n":"신일아파트","g":"장성군","d":"장성읍"},{"c":"A10022218","n":"금강래인보우아파트","g":"담양군","d":"담양읍"},{"c":"A10020636","n":"담양센트럴파크","g":"담양군","d":"담양읍"},{"c":"A10027203","n":"담양백동LH2단지","g":"담양군","d":"담양읍"},{"c":"A10028089","n":"별해리아파트","g":"담양군","d":"담양읍"},{"c":"A51780001","n":"담양백동주공","g":"담양군","d":"담양읍"},{"c":"A51780601","n":"청전아파트","g":"담양군","d":"담양읍"},{"c":"A10024526","n":"담양양우내안애퍼스트힐1단지","g":"담양군","d":"담양읍"},{"c":"A10024534","n":"담양양우내안애퍼스트힐 2단지","g":"담양군","d":"담양읍"}];
/* HERO_IMG: 공개 화면(interior.html)으로 이동 */
/* =====================================================================
   화면 흐름 — 시작 · 스튜디오 6단계 · 공간별 꾸미기 · 가구 편집 · 단지 검색 · 접수 · 관리자
   ===================================================================== */

/* ---------- 시작(이용 허가) ---------- */
function initGate() { }
function showTab() { }
function tryCode() { }
async function sendApply() {
  const name = $('#apName').value.trim(), phone = $('#apPhone').value.trim(), complex = $('#apComplex').value.trim();
  if (!name || !phone) return applyMsg('성함과 연락처를 입력해 주세요.', 1);
  if (!/\d{2,3}-?\d{3,4}-?\d{4}/.test(phone)) return applyMsg('연락처 형식을 확인해 주세요.', 1);
  if (!$('#apAgree').checked) return applyMsg('개인정보 수집·이용에 동의해 주세요.', 1);
  const btn = $('#applyBtn'); btn.disabled = true; btn.textContent = '보내는 중…';
  const ok = await postForm({ _subject: `[SMCT AI인테리어] 이용 신청 — ${name} (${complex || '단지 미입력'})`, 구분: 'AI 인테리어 이용 신청', 성함: name, 연락처: phone, 단지명: complex, 평형: $('#apSize').selectedOptions[0].textContent, 지역: $('#apRegion').value.trim(), 신청시각: new Date().toLocaleString('ko-KR') });
  btn.disabled = false; btn.textContent = '이용 신청 보내기';
  if (ok) { applyMsg(`✓ 신청이 접수되었습니다. 확인 후 <b>${esc(phone)}</b>로 이용코드를 보내드립니다. 급하시면 <a href="tel:${CFG.PHONE}">${CFG.PHONE}</a>로 전화 주세요.`); ga('apply_sent'); }
  else applyMsg(`전송에 실패했습니다. <a href="tel:${CFG.PHONE}">${CFG.PHONE}</a> 또는 <a href="mailto:${CFG.EMAIL}">${CFG.EMAIL}</a>로 연락 주세요.`, 1);
}
function applyMsg(h, err) { $('#applyMsg').innerHTML = `<span class="${err ? 'err' : 'ok'}">${h}</span>`; }
async function postLead(data) {
  // 사진이 있으면 첨부 파일로 먼저 보내 보고(유료 요금제), 안 되면 사진 없이 다시 보낸다
  const pids = [].concat(...(ST.custom || []).map(r => (r.photos || []).map(p => ({ p, r })))).filter(x => PHOTOS[x.p]).slice(0, 10);
  if (pids.length) {
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => fd.append(k, v));
      pids.forEach((x, i) => fd.append('사진' + (i + 1), dataURLtoBlob(PHOTOS[x.p]), `요청${i + 1}_${x.r.catName}.jpg`));
      const r = await fetch(CFG.FORM_ENDPOINT, { method: 'POST', headers: { 'Accept': 'application/json' }, body: fd });
      if (r.ok) return true;
    } catch (e) { }
    data = Object.assign({}, data, { 사진첨부: `고객이 사진 ${pids.length}장을 올렸습니다 (현재 접수 방식은 사진 첨부 불가 — 고객 PDF 리포트에 포함, 상담 시 문자로 받기)` });
  }
  return postForm(data);
}
async function postForm(data) {
  try { const r = await fetch(CFG.FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) }); return r.ok; } catch (e) { return false; }
}

/* ---------- 스튜디오 ---------- */
function openStudio() {
  ensureSel(); regen();
  loadThree().catch(() => { }); // 3D 엔진 미리 불러오기 → 렌더링 바로 표시
  $('#gate').hidden = true; $('#studio').hidden = false; document.body.classList.add('in-studio');
  $$('#stepper li').forEach(li => li.onclick = () => { const n = +li.dataset.step; if (n <= ST.visited || isAdmin()) goStep(n); });
  $('#prevBtn').onclick = () => goStep(ST.step - 1);
  $('#nextBtn').onclick = () => goStep(ST.step + 1);
  initViewerUI();
  goStep(ST.step || 1);
  window.scrollTo(0, 0);
}
function goStep(n) {
  n = clamp(n, 1, 6);
  ST.step = n; ST.visited = Math.max(ST.visited || 1, n); save();
  parkViewer();
  for (let i = 1; i <= 6; i++) $('#step' + i).hidden = i !== n;
  $$('#stepper li').forEach(li => { const k = +li.dataset.step; li.classList.toggle('on', k === n); li.classList.toggle('done', k < n || k <= ST.visited); });
  $('#prevBtn').style.visibility = n === 1 ? 'hidden' : 'visible';
  $('#nextBtn').hidden = n === 6;
  const narrow = window.innerWidth < 520;
  $('#nextBtn').textContent = n === 5 ? '결과물 받기 →' : n === 4 ? (narrow ? '해설·견적 →' : 'AI 해설·견적 보기 →') : n === 3 ? (narrow ? '3D 전체 →' : '3D 전체 보기 →') : '다음 →';
  document.body.dataset.step = n;
  ({ 1: renderStep1, 2: renderStep2, 3: renderStep3, 4: renderStep4, 5: renderStep5, 6: renderStep6 })[n]();
  ga('step_' + n);
  const li = $(`#stepper li[data-step="${n}"]`); if (li && li.scrollIntoView) li.scrollIntoView({ block: 'nearest', inline: 'center' });
  window.scrollTo(0, 0);
}
const rebuild3D = debounce(() => {
  if (!V.ready || !PLAN) return;
  const sig = sig3D(); if (V.sig === sig && V.plan === PLAN) return;
  try { build3D(PLAN, resolveLook()); V.sig = sig; }
  catch (e) { V.sig = null; console.error('build3D', e); if (!rebuild3D.retried) { rebuild3D.retried = 1; setTimeout(() => { try { rebuild3D(); } finally { setTimeout(() => { rebuild3D.retried = 0; }, 800); } }, 300); } else toast('3D 화면을 다시 그리지 못했습니다. 다른 항목을 한 번 눌러 보거나 새로고침해 주세요.'); return; }
  if (V.view === 'room' && !PLAN.rooms.some(r => r.id === V.roomId)) { setOverview(); V.mkey = null; }
}, 120);
// 3D 뷰어는 단계 화면을 다시 그릴 때 지워지지 않도록 잠시 body로 옮겨 둔다
function parkViewer() { const vw = $('#viewer'); if (vw && vw.parentNode !== document.body) { vw.hidden = true; document.body.appendChild(vw); } }
const sig3D = () => JSON.stringify([ST.info, ST.sel, ST.room, ST.bath, ST.furn, ST.fx, V.mode, (ST.custom || []).map(r => [r.id, r.cat, r.room, r.apply, r.photos]), typeof PHOTOS !== 'undefined' ? Object.keys(PHOTOS).length : 0]);

/* ---------- 1단계: 우리집 정보 + 단지 검색 + 평면 타입 ---------- */
function searchApts(q) {
  const n = s => String(s).replace(/\s|아파트|APT/gi, '').toLowerCase();
  const k = n(q); if (k.length < 1) return [];
  const out = [];
  for (const a of APTS) { const t = n(a.n), full = n(a.g + a.d + a.n); if (t.includes(k) || full.includes(k)) out.push(a); if (out.length >= 40) break; }
  return out.sort((a, b) => (n(a.n).startsWith(k) ? 0 : 1) - (n(b.n).startsWith(k) ? 0 : 1));
}
function renderStep1() {
  const i = ST.info;
  const types = planTypes(i.A, { rooms: SIZES.find(s => s.id === i.sizeId) ? SIZES.find(s => s.id === i.sizeId).rooms : i.rooms });
  $('#step1').innerHTML = `
  <div class="grid2">
    <div class="card">
      <h2><span class="num">01</span> 우리집 찾기</h2>
      <div class="apt-search">
        <input class="inp" id="aptQ" placeholder="단지명 또는 동네 (예: 상무 센트럴자이, 수완동, 화순읍)" value="" autocomplete="off">
        <div class="apt-res" id="aptRes" hidden></div>
      </div>
      <div class="picked" id="picked">${i.complex ? `<b>📍 ${esc(i.complex)}</b><small>${esc(i.region || '')}</small><button class="lnk" id="clearApt">변경</button>` : `<small>광주·나주·화순·장성·담양 ${APTS.length.toLocaleString()}개 단지에서 찾을 수 있어요. 목록에 없는 소형 단지·빌라는 <button class="lnk" id="manualApt">직접 입력</button></small>`}</div>
      <div id="manualBox" ${i.complex && !i.complexCode ? '' : 'hidden'} class="f2"><label>단지명<input class="inp" id="iComplex" value="${esc(i.complex)}" placeholder="예) ○○아파트"></label><label>지역<input class="inp" id="iRegion" value="${esc(i.region)}" placeholder="예) 광주 서구 치평동"></label></div>
      <div class="lbl">평형</div>
      <div class="chips" id="iSizes">${SIZES.map(s => `<button class="chip ${s.id === i.sizeId ? 'on' : ''}" data-size="${s.id}">${s.label}${s.id !== 'custom' ? `<small>전용 ${s.A}㎡</small>` : ''}</button>`).join('')}</div>
      <label id="customA" ${i.sizeId === 'custom' ? '' : 'hidden'}>전용면적(㎡)<input class="inp" type="number" id="iA" min="30" max="250" value="${i.A}"></label>
      <div class="lbl">평면 타입 <small class="muted">— 우리 집과 가장 비슷한 구조를 고르세요</small></div>
      <div class="ptypes">${types.map(t => { const p = genPlan(Object.assign({ balcony: i.balcony }, t.p)); return `<button class="ptype ${i.ptype === t.id ? 'on' : ''}" data-pt="${t.id}"><div class="pt-svg">${planSVG(p, null, { noFurn: 1, mini: 1 })}</div><b>${t.id}형 · ${t.name}</b><small>${t.desc}</small></button>`; }).join('')}</div>
      <p class="tiny">찾는 구조가 없나요? <button class="lnk" id="reqPlan">우리 단지 평면 등록 요청</button> — 분양 평면도를 보내주시면 SMCT가 그려 드립니다.</p>
      <div class="f2">
        <label>발코니<select class="inp" id="iBalc">${Object.entries(BALC_LABEL).map(([k, v]) => `<option value="${k}" ${k === i.balcony ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
        <label>준공연도<input class="inp" type="number" id="iYear" min="1975" max="2026" value="${i.year}"></label>
      </div>
    </div>
    <div class="card">
      <h2><span class="num">02</span> 원하는 스타일</h2>
      <div class="styles">${STYLES.map(s => `<button class="style ${s.id === i.style ? 'on' : ''}" data-style="${s.id}"><span class="sw">${s.sw.map(c => `<i style="background:${c}"></i>`).join('')}</span><b>${s.name}</b><small>${s.desc}</small></button>`).join('')}</div>
      <div class="lbl">공사 등급</div>
      <div class="seg4">${GRADES.map(g => `<button class="${g.g === i.grade ? 'on' : ''}" data-grade="${g.g}"><b>${g.name}</b><small>${g.desc}</small></button>`).join('')}</div>
      <p class="tiny">스타일과 등급을 고르면 집 전체 마감재가 채워집니다. 3단계 「공간별 꾸미기」에서 방마다 바꿀 수 있어요.</p>
      <div class="est-mini" id="s1est"></div>
    </div>
  </div>`;
  const s1est = () => { $('#s1est').innerHTML = `현재 구성 예상 공사비 <b>${man(EST.low)} ~ ${man(EST.high)}</b> <span>(VAT 별도 · 평당 약 ${man(EST.perPy)})</span>`; };
  s1est();
  const q = $('#aptQ'), res = $('#aptRes');
  const showRes = () => {
    const list = searchApts(q.value);
    if (!q.value.trim()) { res.hidden = true; return; }
    res.hidden = false;
    res.innerHTML = list.length ? list.map(a => `<button data-apt="${a.c}"><b>${esc(a.n)}</b><small>${aptArea(a)} ${esc(a.d)}</small></button>`).join('') : `<div class="none">목록에 없는 단지예요. 소형 단지·빌라도 <button class="lnk" id="manualApt2">「${esc(q.value.trim())}」 그대로 직접 입력</button>하면 진행할 수 있어요.</div>`;
    $$('[data-apt]', res).forEach(b => b.onclick = () => { const a = APTS.find(x => x.c === b.dataset.apt); Object.assign(ST.info, { complex: a.n, complexCode: a.c, region: aptArea(a) + ' ' + a.d }); save(); updateBottom(); renderStep1(); toast('📍 ' + a.n + ' — 평형과 평면 타입을 골라주세요'); ga('apt_pick'); });
    const m2 = $('#manualApt2'); if (m2) m2.onclick = () => { ST.info.complex = q.value.trim(); ST.info.complexCode = ''; save(); renderStep1(); };
  };
  q.oninput = debounce(showRes, 120);
  q.onfocus = showRes;
  if ($('#clearApt')) $('#clearApt').onclick = () => { Object.assign(ST.info, { complex: '', complexCode: '', region: '' }); save(); renderStep1(); setTimeout(() => $('#aptQ').focus(), 50); };
  if ($('#manualApt')) $('#manualApt').onclick = () => { $('#manualBox').hidden = false; };
  if ($('#iComplex')) $('#iComplex').oninput = e => { ST.info.complex = e.target.value; ST.info.complexCode = ''; save(); updateBottom(); };
  if ($('#iRegion')) $('#iRegion').oninput = e => { ST.info.region = e.target.value; save(); };
  $$('#iSizes .chip').forEach(b => b.onclick = () => {
    const s = SIZES.find(x => x.id === b.dataset.size);
    Object.assign(ST.info, { sizeId: s.id, bays: s.bays, rooms: s.rooms, baths: s.baths, mirror: false, ptype: 'A' }); if (s.id !== 'custom') ST.info.A = s.A;
    const t = planTypes(ST.info.A, { rooms: s.rooms })[0]; Object.assign(ST.info, { bays: t.p.bays, rooms: t.p.rooms, baths: t.p.baths, mirror: !!t.p.mirror });
    ST.fx = {}; save(); regen(); renderStep1();
  });
  if ($('#iA')) $('#iA').onchange = e => { ST.info.A = clamp(+e.target.value || 84, 30, 250); ST.fx = {}; save(); regen(); renderStep1(); };
  $$('[data-pt]').forEach(b => b.onclick = () => { const t = types.find(x => x.id === b.dataset.pt); Object.assign(ST.info, { ptype: t.id, bays: t.p.bays, rooms: t.p.rooms, baths: t.p.baths, mirror: !!t.p.mirror }); ST.fx = {}; save(); regen(); renderStep1(); toast(t.id + '형 평면으로 바꿨습니다'); });
  $('#reqPlan').onclick = openPlanRequest;
  $('#iBalc').onchange = e => { ST.info.balcony = e.target.value; save(); regen(); s1est(); renderStep1(); };
  $('#iYear').onchange = e => { ST.info.year = clamp(+e.target.value || 2008, 1975, 2026); applyPreset(); refurnish(); renderStep1(); };
  $$('[data-style]').forEach(b => b.onclick = () => { ST.info.style = b.dataset.style; applyPreset(); refurnish(); renderStep1(); toast('스타일에 맞춰 마감재를 다시 채웠습니다'); });
  $$('[data-grade]').forEach(b => b.onclick = () => { ST.info.grade = +b.dataset.grade; applyPreset(); refurnish(); renderStep1(); toast(GRADES[ST.info.grade - 1].name + ' 등급으로 마감재를 채웠습니다'); });
}
function openPlanRequest() {
  $('#regModal').hidden = false;
  $('#rgComplex').value = ST.info.complex || ''; $('#rgSize').value = sizeLabel();
  $('#rgSend').onclick = async () => {
    const phone = $('#rgPhone').value.trim(); if (!/\d{2,3}-?\d{3,4}-?\d{4}/.test(phone)) { $('#rgMsg').innerHTML = '<span class="err">연락처를 확인해 주세요.</span>'; return; }
    $('#rgSend').disabled = true;
    const ok = await postForm({ _subject: `[SMCT AI인테리어] 평면 등록 요청 — ${$('#rgComplex').value}`, 구분: '평면 등록 요청', 단지명: $('#rgComplex').value, 단지코드: ST.info.complexCode, 지역: ST.info.region, 평형: $('#rgSize').value, 연락처: phone, 메모: $('#rgMemo').value, 이용코드: (lsGet(LS_ACCESS, {}) || {}).code || '' });
    $('#rgSend').disabled = false;
    $('#rgMsg').innerHTML = ok ? '<span class="ok">✓ 요청이 접수되었습니다. 분양 평면도 사진은 문자(062-522-1212 문의)로 보내주시면 반영해 드립니다.</span>' : '<span class="err">전송 실패 — 062-522-1212로 연락 주세요.</span>';
  };
}

/* ---------- 2단계: 평면도 + 가구 배치 + 3D ---------- */
const EDIT = { on: false, sel: null, room: null };
function renderStep2() {
  const i = ST.info, look = resolveLook();
  const rows = PLAN.rooms.filter(r => r.type !== 'hall').map(r => `<tr><td>${esc(r.name)}</td><td>${r1(r.area)}㎡</td><td>${r1(pyeong(r.area))}평</td></tr>`).join('');
  const roomsF = PLAN.rooms.filter(r => !['hall', 'balcony', 'util', 'dining'].includes(r.type) && !BATHS.includes(r.type));
  if (!EDIT.room || !roomsF.some(r => r.name === EDIT.room)) EDIT.room = (roomsF.find(r => r.type === 'living') || roomsF[0]).name;
  const sf = EDIT.sel && PLAN.furn.find(f => f.id === EDIT.sel);
  parkViewer();
  $('#step2').innerHTML = `
  <div class="p2">
    <div class="card plan-card">
      <div class="plan-head"><h2>${esc(projTitle())} · ${i.ptype || 'A'}형 평면</h2>
        <div class="row"><button class="btn sm ${EDIT.on ? 'gold' : 'line'}" id="editBtn">✋ 가구 배치 ${EDIT.on ? '끝내기' : '편집'}</button><label class="btn sm line">🖼 우리 집 평면도 사진<input type="file" id="photoIn" accept="image/*" hidden></label></div></div>
      ${EDIT.on ? `<div class="edit-bar">
        <div class="eb-sel">${sf ? `<b>${esc((FURN[sf.k] || {}).n || sf.k)}</b> <button class="btn sm line" id="fRot">⟳ 90° 회전</button> <button class="btn sm line" id="fDel">🗑 삭제</button>` : '<span class="muted">가구를 끌어서 옮기고, 눌러서 선택하세요</span>'}</div>
        <div class="eb-add"><span>가구 추가 →</span><select class="inp sm" id="fRoom">${roomsF.map(r => `<option ${r.name === EDIT.room ? 'selected' : ''}>${esc(r.name)}</option>`).join('')}</select>${FURN_ADDABLE.map(k => `<button class="chip sm" data-add="${k}">${FURN[k].n.split('(')[0]}</button>`).join('')}</div>
        <button class="lnk" id="fReset">자동 배치로 되돌리기</button>
      </div>` : ''}
      <div id="planBox" class="${EDIT.on ? 'editing' : ''}">${planSVG(PLAN, look, { edit: EDIT.on, selFid: EDIT.sel })}</div>
      <div id="photoBox" ${PHOTO.url ? '' : 'hidden'}><div class="lbl">우리 집 평면도 (비교용 · 서버에 올라가지 않아요)</div><img src="${PHOTO.url || ''}" alt="업로드한 평면도"></div>
    </div>
    <div class="p2-side">
      <div class="card tight"><div id="viewHost2" class="view-host mid"></div><div class="side-cap">평면을 바꾸면 3D도 바로 바뀝니다</div></div>
      <div class="card">
        <h3>평면 조정</h3>
        <div class="f2">
          <label>베이<select class="inp" id="pBays">${[2, 3, 4].map(v => `<option ${v == i.bays ? 'selected' : ''} value="${v}">${v}Bay</option>`).join('')}</select></label>
          <label>방<select class="inp" id="pRooms">${[1, 2, 3, 4, 5].map(v => `<option ${v == i.rooms ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
          <label>욕실<select class="inp" id="pBaths">${[1, 2].map(v => `<option ${v == i.baths ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
          <label>발코니<select class="inp" id="pBalc">${Object.entries(BALC_LABEL).map(([k, v]) => `<option value="${k}" ${k === i.balcony ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
        </div>
        <label class="chk"><input type="checkbox" id="pMirror" ${i.mirror ? 'checked' : ''}> 좌우 반전</label>
        <table class="rtab"><thead><tr><th>공간</th><th>면적</th><th>평</th></tr></thead><tbody>${rows}</tbody>
        <tfoot><tr><td>실사용 면적</td><td>${r1(QTY.area)}㎡</td><td>${r1(pyeong(QTY.area))}평</td></tr>${QTY.extAdd > 0 ? `<tr><td>신규 확장 면적</td><td>${r1(QTY.extAdd)}㎡</td><td></td></tr>` : ''}</tfoot></table>
        <p class="tiny">표준 평면입니다. 실제 구조는 현장 실측 때 정확히 반영합니다.</p>
      </div>
    </div>
  </div>`;
  const upd = (k, v) => { ST.info[k] = v; ST.fx = {}; save(); regen(); renderStep2(); rebuild3D(); };
  $('#pBays').onchange = e => upd('bays', +e.target.value);
  $('#pRooms').onchange = e => upd('rooms', +e.target.value);
  $('#pBaths').onchange = e => upd('baths', +e.target.value);
  $('#pBalc').onchange = e => upd('balcony', e.target.value);
  $('#pMirror').onchange = e => upd('mirror', e.target.checked);
  $('#editBtn').onclick = () => { EDIT.on = !EDIT.on; EDIT.sel = null; renderStep2(); };
  $('#photoIn').onchange = e => { const f = e.target.files[0]; if (!f) return; const rd = new FileReader(); rd.onload = () => { PHOTO.url = rd.result; renderStep2(); toast('평면도 사진을 아래에 띄웠습니다 — 비교해 보세요'); }; rd.readAsDataURL(f); };
  if (EDIT.on) bindPlanEdit();
  mountViewer('#viewHost2', null);
}
const PHOTO = { url: null };
function toPlan(svg, e) { const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY; const p = pt.matrixTransform(svg.getScreenCTM().inverse()); const { S, pad, minY } = PLAN._svg; return { x: p.x / S - pad, y: p.y / S - pad + minY }; }
function commitFurn(f, x, y, rot) {
  const snap = v => Math.round(v * 20) / 20;
  const minY = Math.min(...PLAN.rooms.map(r => r.y0)), maxY = Math.max(...PLAN.rooms.map(r => r.y1));
  x = clamp(snap(x), 0.2, PLAN.W - 0.2); y = clamp(snap(y), minY + 0.2, maxY - 0.2);
  const add = (ST.fx.add || []).find(a => a.id === f.id);
  if (add) Object.assign(add, { x, y, rot });
  else { ST.fx.mv = ST.fx.mv || {}; ST.fx.mv[f.id] = { x, y, rot }; }
  save(); refurnish(); renderStep2(); rebuild3D();
}
function bindPlanEdit() {
  const svg = $('#planBox svg'); if (!svg) return;
  const S = PLAN._svg.S;
  $$('.fz', svg).forEach(gEl => {
    gEl.addEventListener('pointerdown', e => {
      e.preventDefault();
      const f = PLAN.furn.find(x => x.id === gEl.dataset.fid); if (!f) return;
      const p0 = toPlan(svg, e); let d = { dx: 0, dy: 0 }, moved = false;
      gEl.setPointerCapture(e.pointerId);
      const mv = ev => { const p = toPlan(svg, ev); d = { dx: p.x - p0.x, dy: p.y - p0.y }; if (Math.abs(d.dx) + Math.abs(d.dy) > 0.03) moved = true; gEl.setAttribute('transform', `translate(${d.dx * S} ${d.dy * S})`); };
      const up = () => { gEl.removeEventListener('pointermove', mv); gEl.removeEventListener('pointerup', up); EDIT.sel = f.id; if (moved) commitFurn(f, f.x + d.dx, f.y + d.dy, f.rot || 0); else renderStep2(); };
      gEl.addEventListener('pointermove', mv); gEl.addEventListener('pointerup', up);
    });
  });
  const sf = EDIT.sel && PLAN.furn.find(f => f.id === EDIT.sel);
  if ($('#fRot') && sf) $('#fRot').onclick = () => commitFurn(sf, sf.x, sf.y, ((sf.rot || 0) + 90) % 360);
  if ($('#fDel') && sf) $('#fDel').onclick = () => {
    const ai = (ST.fx.add || []).findIndex(a => a.id === sf.id);
    if (ai >= 0) ST.fx.add.splice(ai, 1); else { ST.fx.del = ST.fx.del || []; ST.fx.del.push(sf.id); }
    EDIT.sel = null; save(); refurnish(); renderStep2(); rebuild3D();
  };
  $('#fRoom').onchange = e => { EDIT.room = e.target.value; };
  $$('[data-add]').forEach(b => b.onclick = () => {
    const r = PLAN.rooms.find(x => x.name === EDIT.room); if (!r) return;
    const id = 'add' + Date.now().toString(36);
    ST.fx.add = ST.fx.add || []; ST.fx.add.push({ id, k: b.dataset.add, room: r.name, x: r1(r.cx), y: r1(r.cy), rot: 0 });
    EDIT.sel = id; save(); refurnish(); renderStep2(); rebuild3D(); toast(FURN[b.dataset.add].n + ' 추가 — 끌어서 위치를 옮기세요');
  });
  $('#fReset').onclick = () => { ST.fx = {}; EDIT.sel = null; save(); refurnish(); renderStep2(); rebuild3D(); };
}

/* ---------- 3단계: 공간별 꾸미기 ---------- */
function studioTabs() {
  const R = PLAN.rooms, t = [{ key: '_common', name: '집 전체 공통', kind: 'common', icon: '🏠' }];
  const add = (r, kind, name, icon) => t.push({ key: r.name, name: name || r.name, kind, room: r, icon });
  R.filter(r => r.type === 'living').forEach(r => add(r, 'living', '거실', '🛋️'));
  R.filter(r => r.type === 'kitchen').forEach(r => add(r, 'kitchen', '주방·식당', '🍳'));
  R.filter(r => r.type === 'master').forEach(r => add(r, 'master', '안방', '🛏️'));
  R.filter(r => r.type === 'bed' || r.type === 'study').sort((a, b) => a.name.localeCompare(b.name, 'ko')).forEach(r => add(r, 'bed', r.name, r.type === 'study' ? '📚' : '🧸'));
  R.filter(r => BATHS.includes(r.type)).forEach(r => add(r, 'bath', r.name, '🛁'));
  R.filter(r => r.type === 'dress').forEach(r => add(r, 'dress', '드레스룸', '👗'));
  R.filter(r => r.type === 'entry').forEach(r => add(r, 'entry', '현관', '👟'));
  const bal = R.find(r => r.type === 'balcony') || R.find(r => r.type === 'util'); if (bal) add(bal, 'balcony', '발코니·다용도실', '🌿');
  return t;
}
function roomCostCalc(tab) {
  if (tab.kind === 'common') return 0;
  const r = tab.room, sum = (cat, s, q) => { const o = optOf(cat, (s || {}).o); return o && o.price ? o.price * q : 0; };
  let t = 0;
  const rs = tab.kind === 'kitchen' ? PLAN.rooms.filter(x => x.type === 'kitchen' || x.type === 'dining') : [r];
  if (['living', 'kitchen', 'master', 'bed'].includes(tab.kind)) rs.forEach(x => { t += sum('floor', rsel(x, 'floor'), x.area) + sum('wall', rsel(x, 'wall'), QTY.wallBy[x.name] || 0) + sum('lighting', rsel(x, 'lighting'), x.area); });
  if (tab.kind === 'living') { t += sum('artwall', ST.sel.artwall, QTY.art) + sum('ceilDesign', ST.sel.ceilDesign, QTY.livCeil); }
  if (tab.kind === 'kitchen') { const k = optOf('kitchen', ST.sel.kitchen.o); t += k ? (k.lines ? k.lines.reduce((a, l) => a + l.price * (QTY[l.q] || 0), 0) : k.price * QTY.kit) : 0; t += sum('kwall', ST.sel.kwall, QTY.kitWall) + sum('island', ST.sel.island, 1) + sum('pendant', ST.sel.pendant, 1); }
  if (tab.kind === 'master' || tab.kind === 'bed') { const s = closetSel(r), it = CLOSET.list.find(x => x.id === s.o); if (it) t += it.p * (QTY.closetBy[r.name] || 1.8); }
  if (tab.kind === 'bath') { const c = bathCfg(r.name); t += bItem('scope', c.scope).p; BATH.forEach(b => { if (b.key === 'scope') return; if (b.multi) (c[b.key] || []).forEach(id => { const it = b.list.find(x => x.id === id); if (it) t += it.p; }); else if (bathAllowed(c, b.key)) t += bItem(b.key, c[b.key]).p; }); }
  if (tab.kind === 'entry') { const e = optOf('entry', ST.sel.entry.o); if (e) t += e.lines ? e.lines.reduce((a, l) => a + l.price * (QTY[l.q] || 0), 0) : e.price * QTY.entry; const m = optOf('middoor', ST.sel.middoor.o); if (m && m.price) t += m.price + ((CAT.middoor.variants.list.find(x => x.id === ST.sel.middoor.v) || {}).p || 0); }
  if (tab.kind === 'dress') { const it = DRESS.list.find(x => x.id === dressSel(r).o); if (it) t += it.p * QTY.dressM; }
  if (tab.kind === 'balcony') t += sum('balcony', ST.sel.balcony, QTY.balc);
  return t * (1 + CFG.OVERHEAD);
}
function optCards(cat, s, onPick, opt) {
  // 공통 카드 마크업 (브랜드·변형·색상 포함)
  opt = opt || {};
  s = s || {};
  const brands = cat.brands, curB = s.b || (optOf(cat.id, s.o) || {}).brand || (brands ? brands[0].id : null);
  const list = cat.options.filter(o => !brands || cat.id === 'door' || !o.brand || o.brand === curB);
  const cl = !cat.multi ? colorsFor(cat.id, s.o) : null;
  return `<div class="mcat" data-cat="${cat.id}">
    <div class="mhead"><span class="mic">${cat.icon}</span><div><b>${opt.title || cat.name}${cat.multi ? ' <small style="display:inline;color:#8a6d16">(복수 선택)</small>' : ''}</b><small>${opt.desc || cat.desc}</small></div></div>
    ${brands ? `<div class="brands">${brands.map(b => `<button class="chip ${b.id === curB ? 'on' : ''}" data-brand="${b.id}">${b.n}</button>`).join('')}</div>` : ''}
    <div class="opts">${opt.same ? `<button class="opt ${opt.isSame ? 'on' : ''}" data-opt="__same"><span class="ck">${opt.isSame ? '●' : '○'}</span><span class="on-t"><b>집 전체와 같게</b><small>${esc(opt.same)}</small></span></button>` : ''}${list.map(o => {
      const on = cat.multi ? (s.list || []).includes(o.id) : (!opt.isSame && s.o === o.id);
      const pr = o.lines ? o.lines.map(l => `${l.price.toLocaleString()}원/${l.unit}`).join(' + ') : o.consult ? '별도 상담' : o.price ? `${o.price.toLocaleString()}원/${o.unit}` : (cat.id === 'upper' ? '주방 가구 가격에 포함 (추가 비용 없음)' : '추가 비용 없음');
      const bn = cat.id === 'door' && o.brand ? (brands.find(b => b.id === curB) || {}).n + ' ' : '';
      return `<button class="opt ${on ? 'on' : ''}" data-opt="${o.id}"><span class="ck">${cat.multi ? (on ? '☑' : '☐') : (on ? '●' : '○')}</span><span class="on-t"><b>${bn}${o.name}</b><small>${pr}${o.note ? ' · ' + o.note : ''}</small>${(o.tags || []).map(t => `<i class="tag">${t}</i>`).join('')}</span></button>`;
    }).join('')}</div>
    ${cat.variants && s.o && s.o !== 'none' && !opt.isSame ? `<div class="lbl2">${cat.variants.label}</div><div class="chips">${cat.variants.list.map(v => `<button class="chip sm ${v.id === (s.v || cat.variants.list[0].id) ? 'on' : ''}" data-var="${v.id}">${v.n}${v.p ? ` +${(v.p / 10000)}만` : ''}</button>`).join('')}</div>` : ''}
    ${cl && !opt.isSame ? swatchHTML(cl, s.c || 0, (optOf(cat.id, s.o) || {}).mat) : ''}
    ${opt.noReq ? '' : reqBlock(cat.id, CUR_ROOM)}
  </div>`;
}
function bindOptCards(root, getSel, setSel) {
  (root.classList && root.classList.contains('mcat') ? [root] : $$('.mcat', root)).forEach(el => {
    const cat = CAT[el.dataset.cat]; if (!cat) return;
    $$('.opt', el).forEach(b => b.onclick = () => {
      if (b.dataset.opt === '__same') { setSel(cat.id, null); return; }
      const s = Object.assign({}, getSel(cat.id) || {});
      if (cat.multi) { s.list = (s.list || []).slice(); const k = s.list.indexOf(b.dataset.opt); if (k >= 0) s.list.splice(k, 1); else s.list.push(b.dataset.opt); }
      else { const prev = colorsFor(cat.id, s.o); s.o = b.dataset.opt; if (colorsFor(cat.id, s.o) !== prev) s.c = 0; const o = optOf(cat.id, s.o); if (o && o.brand && cat.id === 'window') s.b = o.brand; }
      setSel(cat.id, s);
    });
    $$('[data-brand]', el).forEach(b => b.onclick = () => {
      const s = Object.assign({}, getSel(cat.id) || {}); s.b = b.dataset.brand;
      if (cat.id === 'window') { const cur = optOf('window', s.o); if (cur && cur.brand) { const nid = s.b + '-' + clamp(cur.grade || 3, 2, 4); if (optOf('window', nid)) s.o = nid; } }
      setSel(cat.id, s);
    });
    $$('[data-var]', el).forEach(b => b.onclick = () => { const s = Object.assign({}, getSel(cat.id) || {}); s.v = b.dataset.var; setSel(cat.id, s); });
    $$('.cdot,.psw', el).forEach(b => b.onclick = () => { const s = Object.assign({}, getSel(cat.id) || {}); s.c = +b.dataset.color; setSel(cat.id, s); });
    bindReqButtons(el);
  });
}
function renderStep3() {
  const tabs = studioTabs();
  let tab = tabs.find(t => t.key === ST.tab) || tabs[0]; ST.tab = tab.key; CUR_ROOM = tab.key;
  const k = tab.kind, r = tab.room;
  const gSel = id => ST.sel[id], gSet = (id, s) => { ST.sel[id] = s; afterChange(); };
  const rSet = (id, s) => { ST.room[tab.key] = ST.room[tab.key] || {}; if (s === null) delete ST.room[tab.key][id]; else ST.room[tab.key][id] = s; afterChange(); };
  const rGet = id => roomOverride(tab.key, id) || ST.sel[id];
  const ov = (id, title) => { const isSame = !roomOverride(tab.key, id); const gs = ST.sel[id] || {}, go = optOf(id, gs.o) || {}, gc = colorOf(id, gs); return optCards(CAT[id], rGet(id), null, { same: `${go.name || ''}${gc ? ' · ' + gc.n : ''}`, isSame, title: title || CAT[id].name + ' — ' + tab.name }); };
  let body = '';
  const trends = TRENDS[k === 'bed' ? 'bed' : k] || [];
  if (trends.length) body += `<div class="trend"><div class="lbl">✨ 추천 조합 — 한 번에 적용</div><div class="tr-list">${trends.map((t, i) => `<button class="tr" data-tr="${i}"><b>${t.n}</b><small>${t.d}</small></button>`).join('')}</div></div>`;
  if (k === 'common') {
    body += `<p class="tiny">여기서 고른 바닥·벽·조명은 모든 방의 기본값입니다. 방 탭에서 그 방만 따로 바꿀 수 있어요.</p>`;
    ['floor', 'wall', 'lighting'].forEach(id => body += optCards(CAT[id], gSel(id), null, { title: CAT[id].name + ' — 집 전체 기본' }));
    ['window', 'door', 'film', 'molding', 'ceiling', 'demo', 'electric', 'energy'].forEach(id => body += optCards(CAT[id], gSel(id)));
  } else if (k === 'living') {
    body += ov('floor') + ov('wall') + optCards(CAT.artwall, gSel('artwall')) + optCards(CAT.ceilDesign, gSel('ceilDesign')) + ov('lighting') + furnCard(tab);
  } else if (k === 'kitchen') {
    ['kitchen', 'ktop', 'kwall', 'upper', 'island', 'pendant'].forEach(id => body += optCards(CAT[id], gSel(id)));
    body += ov('floor') + ov('lighting') + furnCard(tab);
  } else if (k === 'master' || k === 'bed') {
    body += ov('wall') + ov('floor') + ov('lighting') + closetCard(r) + furnCard(tab);
  } else if (k === 'bath') {
    body += bathPanel(r);
  } else if (k === 'entry') {
    body += optCards(CAT.entry, gSel('entry')) + optCards(CAT.middoor, gSel('middoor')) + ov('wall');
  } else if (k === 'dress') {
    body += `<div class="mcat"><div class="mhead"><span class="mic">👗</span><div><b>${DRESS.label}</b><small>드레스룸 벽면 시스템 선반</small></div></div><div class="opts">${DRESS.list.map(o => `<button class="opt ${dressSel(r).o === o.id ? 'on' : ''}" data-dress="${o.id}"><span class="ck">${dressSel(r).o === o.id ? '●' : '○'}</span><span class="on-t"><b>${o.n}</b><small>${o.p ? o.p.toLocaleString() + '원/m' : '0원'}</small></span></button>`).join('')}</div>${reqBlock('dress', r.name)}</div>`;
  } else if (k === 'balcony') {
    body += optCards(CAT.balcony, gSel('balcony'));
  }
  const cost = roomCostCalc(tab);
  parkViewer();
  $('#step3').innerHTML = `
  <div class="rs">
    <div class="rs-tabs" id="rsTabs">${tabs.map(t => `<button class="rt ${t.key === tab.key ? 'on' : ''}" data-tab-room="${esc(t.key)}"><span>${t.icon}</span>${esc(t.name)}</button>`).join('')}</div>
    <div class="rs-grid">
      <div class="rs-left">
        <div class="rs-head"><div><h2>${tab.icon} ${esc(tab.name)}</h2><small>${r ? `${r1(k === 'kitchen' ? PLAN.rooms.filter(x => x.type === 'kitchen' || x.type === 'dining').reduce((a, x) => a + x.area, 0) : r.area)}㎡ · 오른쪽 3D가 이 공간 안을 보여줍니다` : '집 전체에 적용되는 공통 항목'}</small></div>${cost ? `<div class="rs-cost"><small>이 공간 공사비</small><b>${man(cost)}</b></div>` : ''}</div>
        <div class="rs-nav">${(() => { const i = tabs.indexOf(tab), pv = tabs[i - 1], nx = tabs[i + 1]; return (pv ? `<button class="btn line" data-tab-room="${esc(pv.key)}">← ${pv.icon} ${esc(pv.name)}</button>` : '<span></span>') + `<small>${i + 1} / ${tabs.length}</small>` + (nx ? `<button class="btn gold" data-tab-room="${esc(nx.key)}">다음: ${nx.icon} ${esc(nx.name)} →</button>` : `<button class="btn gold" data-go="4">3D 전체 보기 →</button>`); })()}</div>
        <div id="rsBody">${body}</div>
        <div class="rs-next">${(() => { const i = tabs.indexOf(tab); const nx = tabs[i + 1]; return nx ? `<button class="btn line" data-tab-room="${esc(nx.key)}">다음 공간: ${nx.icon} ${esc(nx.name)} →</button>` : `<button class="btn gold" data-go="4">3D 전체 보기 →</button>`; })()}</div>
      </div>
      <aside class="rs-right"><button type="button" class="v3-tog" id="v3Tog" aria-label="3D 화면 접기·펼치기"></button><button type="button" class="v3-big" id="v3Big" aria-label="3D 화면 크게 보기·닫기"></button><div id="viewHost3" class="view-host"></div><div class="mini-plan">${planSVG(PLAN, resolveLook(), { noFurn: 0, hl: r ? (k === 'kitchen' ? PLAN.rooms.filter(x => x.type === 'kitchen' || x.type === 'dining').map(x => x.name) : k === 'balcony' ? PLAN.rooms.filter(x => x.type === 'balcony' || x.type === 'util').map(x => x.name) : [r.name]) : [] })}</div></aside>
    </div>
  </div>`;
  $$('[data-tab-room]').forEach(b => b.onclick = () => { ST.tab = b.dataset.tabRoom; save(); renderStep3(); const rs = $('#rsTabs .on'); if (rs && rs.scrollIntoView) rs.scrollIntoView({ block: 'nearest', inline: 'center' }); if (window.innerWidth < 1080) window.scrollTo(0, 0); });
  $$('[data-go]', $('#step3')).forEach(b => b.onclick = () => goStep(+b.dataset.go));
  $$('.mini-plan .pr').forEach(el => el.onclick = () => { const rr = PLAN.rooms.find(x => x.id === el.dataset.room); if (!rr) return; const t = tabs.find(x => x.room && (x.room === rr || (x.kind === 'kitchen' && rr.type === 'dining') || (x.kind === 'balcony' && (rr.type === 'balcony' || rr.type === 'util')))); if (t) { ST.tab = t.key; renderStep3(); } });
  const body3 = $('#rsBody');
  // 공통 / 방별 카드 바인딩
  if (k === 'common') bindOptCards(body3, gSel, gSet);
  else {
    const roomCats = ['floor', 'wall', 'lighting'];
    $$('.mcat', body3).forEach(el => {
      const id = el.dataset.cat; if (!id || !CAT[id]) return;
      const isRoom = roomCats.includes(id) && k !== 'common';
      bindOptCards(el, isRoom ? rGet : gSel, isRoom ? rSet : gSet);
    });
  }
  $$('[data-tr]').forEach(b => b.onclick = () => applyTrend(tab, trends[+b.dataset.tr]));
  bindCloset(r); bindFurn(tab); bindBath(r); bindReqButtons($('#step3'));
  $$('[data-dress]').forEach(b => b.onclick = () => { ST.room[r.name] = ST.room[r.name] || {}; ST.room[r.name].dress = { o: b.dataset.dress }; afterChange(); });
  // 3D: 이 공간 안으로
  const focus = k === 'common' ? null : k === 'kitchen' ? (PLAN.rooms.find(x => x.type === 'kitchen') || r).id : r.id;
  mountViewer('#viewHost3', focus);
}
function afterChange() {
  save(); refurnish();
  const y = window.scrollY; renderStep3(); window.scrollTo(0, y);
  rebuild3D();
}
function applyTrend(tab, t) {
  const tone = (cat, s) => { const cl = colorsFor(cat, s.o); if (cl && s.t) { s.c = toneIdx(cl, s.t); } delete s.t; return s; };
  if (t.g) Object.entries(t.g).forEach(([cat, [o, tn]]) => { const s = Object.assign({}, ST.sel[cat] || {}, { o, t: tn }); ST.sel[cat] = tone(cat, s); });
  if (t.r) { ST.room[tab.key] = ST.room[tab.key] || {}; Object.entries(t.r).forEach(([cat, [o, tn]]) => { ST.room[tab.key][cat] = tone(cat, { o, t: tn }); }); }
  toast(`✨ ${t.n} 조합을 ${tab.name}에 적용했습니다`); ga('trend', { name: t.n });
  afterChange();
}
function closetCard(r) {
  const s = closetSel(r);
  return `<div class="mcat" data-closet="1"><div class="mhead"><span class="mic">🗄️</span><div><b>${CLOSET.label} — ${esc(r.name)}</b><small>안쪽 벽 약 ${r1(QTY.closetBy[r.name] || 1.8)}m</small></div></div>
  <div class="opts">${CLOSET.list.map(o => `<button class="opt ${s.o === o.id ? 'on' : ''}" data-cl="${o.id}"><span class="ck">${s.o === o.id ? '●' : '○'}</span><span class="on-t"><b>${o.n}</b><small>${o.p ? o.p.toLocaleString() + '원/m' : '0원'}</small>${(o.tags || []).map(t => `<i class="tag">${t}</i>`).join('')}</span></button>`).join('')}</div>
  ${s.o !== 'none' ? `<div class="colors">${C.closet.map((c, i) => `<button class="cdot ${i === (s.c || 0) ? 'on' : ''}" data-clc="${i}"><i style="background:${c.c}"></i><small>${c.n}</small></button>`).join('')}</div>` : ''}${reqBlock('closet', r.name)}</div>`;
}
function bindCloset(r) {
  if (!r) return;
  const set = v => { ST.room[r.name] = ST.room[r.name] || {}; ST.room[r.name].closet = Object.assign({}, closetSel(r), v); afterChange(); };
  $$('[data-cl]').forEach(b => b.onclick = () => set({ o: b.dataset.cl }));
  $$('[data-clc]').forEach(b => b.onclick = () => set({ c: +b.dataset.clc }));
}
function furnCard(tab) {
  const kind = tab.kind === 'bed' && tab.room.type === 'study' ? null : tab.kind;
  const ch = FURN_CHOICE[kind]; if (!ch) return '';
  const s = ST.furn[tab.key] || {};
  return `<div class="mcat"><div class="mhead"><span class="mic">🪑</span><div><b>가구 (배치 미리보기)</b><small>견적에는 포함되지 않아요 · 2단계 평면도에서 끌어서 옮길 수 있어요</small></div></div>
  ${ch.map(c => c.toggle ? `<label class="chk"><input type="checkbox" data-ft="${c.key}" ${(s[c.key] != null ? s[c.key] : c.def) ? 'checked' : ''}> ${c.label}</label>` : `<div class="lbl2">${c.label}</div><div class="chips">${c.list.map(f => `<button class="chip sm ${(s[c.key] || c.list[tab.kind === 'master' ? 0 : c.key === 'bed' ? 1 : c.key === 'sofa' ? 1 : 0]) === f ? 'on' : ''}" data-fc="${c.key}" data-fv="${f}">${f === 'none' ? '없음' : FURN[f].n}</button>`).join('')}</div>`).join('')}${reqBlock('furniture', tab.key)}</div>`;
}
function bindFurn(tab) {
  const set = (k, v) => { ST.furn[tab.key] = Object.assign({}, ST.furn[tab.key] || {}, { [k]: v }); afterChange(); };
  $$('[data-fc]').forEach(b => b.onclick = () => set(b.dataset.fc, b.dataset.fv));
  $$('[data-ft]').forEach(b => b.onchange = () => set(b.dataset.ft, b.checked));
}
function bathPanel(r) {
  const c = bathCfg(r.name);
  let h = `<div class="trend"><div class="lbl">✨ 욕실 추천 조합</div><div class="tr-list">${BATH_TRENDS.map((t, i) => `<button class="tr" data-btr="${i}"><b>${t.n}</b><small>${t.d}</small></button>`).join('')}</div></div>`;
  h += `<div class="bath">`;
  for (const b of BATH) {
    const allowed = b.key === 'scope' || bathAllowed(c, b.key);
    h += `<div class="bi ${allowed ? '' : 'off'}"><div class="bl">${b.label}${!allowed ? ` <small>${SCOPE_RANK[c.scope] === 0 ? '공사 범위를 먼저 고르세요' : '덧방·전체 철거일 때 선택'}</small>` : ''}</div><div class="chips">${b.list.map(it => { const on = b.multi ? (c[b.key] || []).includes(it.id) : c[b.key] === it.id; return `<button class="chip sm ${on ? 'on' : ''}" data-bk="${b.key}" data-bv="${it.id}" ${allowed ? '' : 'disabled'}>${it.c ? `<i class="dot" style="background:${it.c}"></i>` : ''}${it.n}${it.p ? `<small>${b.key === 'scope' ? man(it.p) : '+' + Math.round(it.p / 10000) + '만'}</small>` : ''}</button>`; }).join('')}</div>${allowed && !b.multi && b.key !== 'tileP' ? prodLink(b.list.find(x => x.id === c[b.key]), 'plink blk') : ''}`;
    if (b.key === 'tileP') { const cur = Math.max(0, b.list.findIndex(x => x.id === c.tileP)); h = h.slice(0, h.lastIndexOf('<div class="chips">')); if (allowed) h += `<div class="chips"><button class="chip sm ${cur === 0 ? 'on' : ''}" data-bk="tileP" data-bv="auto">${b.list[0].n}</button></div>` + swatchHTML(b.list.slice(1), cur - 1, { type: 'tile' }).replace(/data-color="(\d+)"/g, (m, k) => `data-bk="tileP" data-bv="${b.list[+k + 1].id}"`); }
    if (b.key === 'wall' && allowed) h += `<div class="colors">${C.bath.map((cc, i) => `<button class="cdot ${i === c.c ? 'on' : ''}" data-bc="c" data-bci="${i}"><i style="background:${cc.c}"></i><small>${cc.n}</small></button>`).join('')}</div>`;
    if (b.key === 'floor' && allowed) h += `<div class="colors">${C.bath.map((cc, i) => `<button class="cdot ${i === (c.fc != null ? c.fc : c.c) ? 'on' : ''}" data-bc="fc" data-bci="${i}"><i style="background:${shade2(cc.c, -0.06)}"></i><small>${cc.n}</small></button>`).join('')}</div>`;
    h += `</div>`;
  }
  return h + reqBlock('bath', r.name) + `</div>`;
}
function bindBath(r) {
  if (!r || !BATHS.includes(r.type)) return;
  const set = v => { ST.bath[r.name] = Object.assign({}, ST.bath[r.name] || {}, v); afterChange(); };
  $$('[data-bk]').forEach(b => b.onclick = () => { const key = b.dataset.bk, v = b.dataset.bv; if (BATH_ITEM[key].multi) { const cur = (bathCfg(r.name)[key] || []).slice(); const i = cur.indexOf(v); if (i >= 0) cur.splice(i, 1); else cur.push(v); set({ [key]: cur }); } else set({ [key]: v }); });
  $$('[data-bc]').forEach(b => b.onclick = () => set({ [b.dataset.bc]: +b.dataset.bci }));
  $$('[data-btr]').forEach(b => b.onclick = () => { const t = BATH_TRENDS[+b.dataset.btr]; set(Object.assign({}, t.v, { c: toneIdx(C.bath, t.tone), fc: toneIdx(C.bath, t.tone) })); toast(`✨ ${t.n} 조합을 ${r.name}에 적용했습니다`); });
}

/* ---------- 4단계: 3D 전체 ---------- */
function renderStep4() { mountViewer('#viewHost4', null); }
function initViewerUI() {
  $$('[data-vmode]').forEach(b => b.onclick = () => { V.mode = b.dataset.vmode; $$('[data-vmode]').forEach(x => x.classList.toggle('on', x === b)); rebuild3D(); ga('view_mode', { mode: V.mode }); });
  $('#vCeil').onchange = e => { V.ceil = e.target.checked; applyViewState(); };
  $('#vCut').onchange = e => { V.cut = e.target.checked; applyViewState(); };
  $('#vRoom').onchange = e => { if (e.target.value === 'all') setOverview(); else setRoomView(e.target.value); applyViewState(); };
  $('#vSnap').onclick = () => { const d = snapshot(); if (!d) return; SNAPS.unshift({ d, t: $('#vRoom').selectedOptions[0].textContent }); if (SNAPS.length > 6) SNAPS.pop(); toast('📸 장면을 저장했습니다 — 결과물 리포트에 들어갑니다'); };
  $('#vHQ').onclick = () => openPhotoRender();
}
async function mountViewer(sel, focusRoomId) {
  const host = $(sel); if (!host) return;
  const vw = $('#viewer');
  if (vw.parentNode !== host) host.appendChild(vw);
  vw.hidden = false;
  const roomsSel = PLAN.rooms.filter(r => r.type !== 'hall');
  $('#vRoom').innerHTML = `<option value="all">전체 보기</option>` + roomsSel.map(r => `<option value="${r.id}">${esc(r.name)} 실내</option>`).join('');
  try {
    await initViewer($('#vCanvas'));
    $('#vLoading').hidden = true;
    const sig = sig3D(); let built = false;
    if (V.sig !== sig || !V.plan || V.plan !== PLAN) { try { build3D(PLAN, resolveLook()); V.sig = sig; built = true; } catch (e2) { V.sig = null; console.error('build3D', e2); setTimeout(() => { try { rebuild3D(); } catch (e3) { } }, 300); } }
    resizeViewer();
    const fid = focusRoomId !== undefined ? focusRoomId : V.roomId;
    const key = sel + '|' + (fid || '') + '|' + PLAN.rooms.length + PLAN.W;
    if (key !== V.mkey || (built && V.planRef !== PLAN)) {
      V.mkey = key; V.planRef = PLAN;
      if (fid && PLAN.rooms.some(r => r.id === fid)) setRoomView(fid); else setOverview();
    }
    $('#vRoom').value = V.view === 'room' && V.roomId ? V.roomId : 'all';
  } catch (e) {
    console.error(e);
    $('#vLoading').hidden = false; $('#vLoading').innerHTML = '3D 엔진을 불러오지 못했습니다.<br><small>인터넷 연결을 확인하거나 최신 브라우저(크롬·사파리·엣지)로 열어 주세요.</small>';
  }
}

/* ---------- 5단계 ---------- */
function renderStep5() {
  const S = aiSections(), un = unlocked();
  const maxG = EST.groups[0] ? EST.groups[0].amt : 1;
  $('#step5').innerHTML = `
  <div class="r-layout">
    <div class="card ai">
      <div class="ai-head"><span class="ai-badge">AI</span><div><h2>설계 해설</h2><small>SMCT 설계 엔진이 선택하신 평면·마감을 분석해 작성했습니다</small></div></div>
      ${S.map(s => `<section class="ai-sec ${!s.open && !un ? 'locked' : ''}"><h3>${s.t}</h3><div class="ai-body">${s.h}</div>${!s.open && !un ? `<div class="lock-ov"><span>🔒</span><b>결과물 받기에서 공개됩니다</b><button class="btn sm gold" data-go="6">정보 입력하고 전체 보기</button></div>` : ''}</section>`).join('')}
    </div>
    <div class="card est">
      <h2>예상 공사비</h2>
      <div class="big">${man(EST.low)} <span>~</span> ${man(EST.high)}</div>
      <div class="sub">VAT 별도 · 중간값 ${man(EST.total)} · 평당 약 ${man(EST.perPy)} (${Math.round(supplyPy())}평 기준)</div>
      <div class="bars">${EST.groups.filter(x => x.amt > 0).map(x => `<div class="bar"><span>${x.icon} ${x.name}</span><div><i style="width:${Math.max(3, x.amt / maxG * 100)}%"></i></div><b>${un ? man(x.amt) : '••••만원'}</b></div>`).join('')}</div>
      <div class="note2">현장관리·공과잡비 ${Math.round(CFG.OVERHEAD * 100)}% 포함 · 설계·3D 무료(SMCT 시공 시)<br>표준 평면 기준 개략 금액이며, 실측 후 확정 견적을 드립니다.</div>
      ${un ? '' : `<div class="cta-box"><b>상세 견적서 · 설계 리포트(PDF)</b><p>공종별·방별 금액과 품목별 수량·단가, 3D 장면이 담긴 리포트를 받아보세요.</p><button class="btn gold full" data-go="6">결과물 받기 →</button></div>`}
    </div>
  </div>`;
  $$('[data-go]', $('#step5')).forEach(b => b.onclick = () => goStep(+b.dataset.go));
}

/* ---------- 6단계 ---------- */
function renderStep6() { if (!unlocked()) return renderLeadForm(); renderResults(); }
function renderLeadForm() {
  const i = ST.info, L = ST.lead || {};
  $('#step6').innerHTML = `
  <div class="lead card">
    <h2><span class="num">06</span> 결과물 받기</h2>
    <p class="muted">아래 정보를 보내주시면 <b>상세 견적서·설계 리포트(PDF)·포토 렌더 이미지 다운로드</b>가 바로 열리고, SMCT 담당자가 연락드려 현장 실측과 확정 견적을 안내합니다. <b>*</b> 항목은 필수입니다.</p>
    <div class="fgrid">
      <label>성함 *<input class="inp" id="lName" value="${esc(L.name || '')}"></label>
      <label>연락처 *<input class="inp" id="lPhone" inputmode="tel" placeholder="010-0000-0000" value="${esc(L.phone || '')}"></label>
      <label>이메일<input class="inp" id="lEmail" type="email" value="${esc(L.email || '')}"></label>
      <label>단지명 *<input class="inp" id="lComplex" value="${esc(L.complex || i.complex)}"></label>
      <label>동·호수 *<input class="inp" id="lDong" placeholder="예) 103동 1204호" value="${esc(L.dong || '')}"></label>
      <label>주소(시·구·동) *<input class="inp" id="lAddr" placeholder="예) 광주 서구 치평동" value="${esc(L.addr || i.region)}"></label>
      <label>거주 상태 *<select class="inp" id="lLiving">${['', '거주 중 (살면서 공사)', '공실', '입주 전 (매매·분양)', '매매 예정', '임대 예정'].map(v => `<option ${v === L.living ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
      <label>희망 착공 시기 *<select class="inp" id="lStart">${['', '1개월 이내', '1~3개월', '3~6개월', '6개월 이후', '미정'].map(v => `<option ${v === L.start ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
      <label>예산 범위 *<select class="inp" id="lBudget">${['', '3천만원 이하', '3천~5천만원', '5천~8천만원', '8천만~1.2억', '1.2억 이상', '견적 보고 결정'].map(v => `<option ${v === L.budget ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
      <label>가족 구성 *<input class="inp" id="lFamily" placeholder="예) 부부+초등 자녀 2" value="${esc(L.family || '')}"></label>
      <label>반려동물<input class="inp" id="lPets" placeholder="예) 소형견 1" value="${esc(L.pets || '')}"></label>
      <label>현장 실측 방문 *<select class="inp" id="lVisit">${['', '방문 희망', '전화 상담 먼저', '방문 불필요'].map(v => `<option ${v === L.visit ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
      <label>상담 가능 시간<input class="inp" id="lTime" placeholder="예) 평일 저녁 6시 이후" value="${esc(L.time || '')}"></label>
      <label>알게 된 경로<select class="inp" id="lSource">${(() => { const opts = ['', '포털 검색 (네이버·다음·구글)', '인스타그램', '유튜브', '블로그', '지인 소개', '현수막·전단', 'SMCT 홈페이지', '직접 입력']; const cur = !L.source ? '' : opts.includes(L.source) ? L.source : '직접 입력'; return opts.map(v => `<option ${v === cur ? 'selected' : ''}>${v}</option>`).join(''); })()}</select><input class="inp" id="lSourceEtc" style="margin-top:6px" placeholder="어떻게 알게 되셨는지 적어 주세요" value="${esc(L.sourceEtc || '')}" ${L.sourceEtc ? '' : 'hidden'}></label>
    </div>
    <div class="lbl">공사 목적 * (여러 개 선택)</div>
    <div class="chips" id="lPurp">${PURPOSES.map(p => `<button class="chip ${(L.purposes || []).includes(p) ? 'on' : ''}" data-p="${p}">${p}</button>`).join('')}</div>
    <label>원하시는 점 · 의도 *<textarea class="inp" id="lIntent" rows="4" placeholder="예) 아이들이 커서 방 2개를 공부방으로, 거실은 호텔처럼 깔끔하게. 겨울 결로가 심해 창호 교체를 고민 중입니다.">${esc(L.intent || '')}</textarea></label>
    <div class="agree">
      <label class="chk"><input type="checkbox" id="lAgree" ${L.agree ? 'checked' : ''}> [필수] 개인정보 수집·이용에 동의합니다. <a href="#" data-priv>내용 보기</a></label>
      <label class="chk"><input type="checkbox" id="lMkt" ${L.mkt ? 'checked' : ''}> [선택] 시공 사례·이벤트 소식을 받겠습니다.</label>
    </div>
    <button class="btn gold full lg" id="leadBtn">정보 보내고 결과물 받기</button>
    <div class="msg" id="leadMsg"></div>
  </div>`;
  $$('#lPurp .chip').forEach(b => b.onclick = () => b.classList.toggle('on'));
  $('#lSource').onchange = () => { const e = $('#lSourceEtc'); e.hidden = $('#lSource').value !== '직접 입력'; if (!e.hidden) e.focus(); };
  $('#leadBtn').onclick = submitLead;
  bindPriv();
}
function collectLead() {
  const v = id => ($('#' + id) || {}).value ? $('#' + id).value.trim() : '';
  return { name: v('lName'), phone: v('lPhone'), email: v('lEmail'), complex: v('lComplex'), dong: v('lDong'), addr: v('lAddr'), living: v('lLiving'), start: v('lStart'), budget: v('lBudget'), family: v('lFamily'), pets: v('lPets'), visit: v('lVisit'), time: v('lTime'), source: (v('lSource') === '직접 입력' ? (v('lSourceEtc') || '직접 입력') : v('lSource')), sourceEtc: (v('lSource') === '직접 입력' ? v('lSourceEtc') : ''), intent: v('lIntent'), purposes: $$('#lPurp .chip.on').map(b => b.dataset.p), agree: $('#lAgree').checked, mkt: $('#lMkt').checked };
}
function leadMsg(h, err) { $('#leadMsg').innerHTML = `<span class="${err ? 'err' : 'ok'}">${h}</span>`; }
function estText() { return EST.lines.map(l => `[${l.catName}] ${l.name} — ${l.qty}${l.unit} × ${l.price.toLocaleString()} = ${l.amt.toLocaleString()}원${l.consult ? ' (별도 상담)' : ''}${l.incl ? ' (기본 포함)' : ''}`).join('\n') + `\n소계 ${EST.sub.toLocaleString()}원 / 현장관리·공과잡비 ${EST.overhead.toLocaleString()}원 / 합계 ${EST.total.toLocaleString()}원 (VAT 별도)`; }
const designData = () => JSON.stringify({ v: 3, info: ST.info, sel: ST.sel, room: ST.room, bath: ST.bath, furn: ST.furn, fx: ST.fx, custom: (ST.custom || []).map(r => Object.assign({}, r, { photos: r.photos.length })) });
async function submitLead() {
  const L = collectLead(); ST.lead = L; save();
  const miss = [];
  if (!L.name) miss.push('성함'); if (!L.phone) miss.push('연락처'); if (!L.complex) miss.push('단지명'); if (!L.dong) miss.push('동·호수'); if (!L.addr) miss.push('주소');
  if (!L.living) miss.push('거주 상태'); if (!L.start) miss.push('착공 시기'); if (!L.budget) miss.push('예산'); if (!L.family) miss.push('가족 구성'); if (!L.visit) miss.push('실측 방문');
  if (!L.purposes.length) miss.push('공사 목적'); if (!L.intent) miss.push('원하시는 점');
  if (miss.length) return leadMsg('다음 항목을 입력해 주세요: ' + miss.join(', '), 1);
  if (!/\d{2,3}-?\d{3,4}-?\d{4}/.test(L.phone)) return leadMsg('연락처 형식을 확인해 주세요.', 1);
  if (!L.agree) return leadMsg('개인정보 수집·이용 동의가 필요합니다.', 1);
  const d = new Date(), id = 'AI' + String(d.getFullYear()).slice(2) + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0') + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
  const i = ST.info, btn = $('#leadBtn'); btn.disabled = true; btn.textContent = '보내는 중…';
  const payload = {
    _subject: `[SMCT AI인테리어] 결과물 요청 — ${L.name} / ${L.complex} ${sizeLabel()} / ${man(EST.total)}`,
    구분: 'AI 인테리어 결과물 요청', 접수번호: id, 성함: L.name, 연락처: L.phone, 이메일: L.email, 단지명: L.complex, 단지코드: i.complexCode || '', 동호수: L.dong, 주소: L.addr,
    거주상태: L.living, 공사목적: L.purposes.join(', '), 원하시는점: L.intent, 착공희망: L.start, 예산: L.budget, 가족구성: L.family, 반려동물: L.pets, 실측방문: L.visit, 상담가능시간: L.time, 유입경로: L.source, 마케팅수신: L.mkt ? '동의' : '미동의',
    평면정보: `${sizeLabel()} · 전용 ${i.A}㎡ · ${i.ptype || 'A'}형 ${i.bays}Bay · 방${i.rooms} · 욕실${i.baths} · ${BALC_LABEL[i.balcony]} · ${i.year}년 준공${i.mirror ? ' · 좌우반전' : ''}`,
    스타일등급: `${styleOf().name} / ${GRADES[i.grade - 1].name}`,
    예상공사비: `${man(EST.low)} ~ ${man(EST.high)} (중간 ${man(EST.total)}, VAT 별도)`,
    견적상세: estText(), 이용코드: (lsGet(LS_ACCESS, {}) || {}).code || '', 설계데이터: designData(),
  };
  if ((ST.custom || []).length) payload.고객요청품목 = customText();
  const ok = await postLead(payload);
  btn.disabled = false; btn.textContent = '정보 보내고 결과물 받기';
  if (!ok) {
    leadMsg(`전송에 실패했습니다. 잠시 후 다시 시도하시거나 <a href="tel:${CFG.PHONE}">${CFG.PHONE}</a>로 연락 주세요. <button class="btn sm line" id="mailFallback">메일로 보내기</button>`, 1);
    $('#mailFallback').onclick = () => { location.href = `mailto:${CFG.EMAIL}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(Object.entries(payload).filter(([k]) => k !== '_subject' && k !== '견적상세').map(([k, v]) => k + ': ' + v).join('\n'))}`; ST.submitted = true; ST.leadId = id; save(); setTimeout(() => renderStep6(), 800); };
    return;
  }
  ST.submitted = true; ST.leadId = id; save(); ga('lead_submit', { value: Math.round(EST.total / 10000) });
  toast('✓ 접수되었습니다. 결과물이 열렸습니다'); renderStep6();
}
function estTableHTML() {
  let cur = '', h = '';
  for (const l of EST.lines) {
    if (l.catName !== cur) { cur = l.catName; const g = EST.groups.find(x => x.name === cur); h += `<tr class="gh"><td colspan="4">${l.icon} ${esc(cur)}</td><td>${won(g.amt)}</td></tr>`; }
    h += `<tr><td>${esc(l.name)}</td><td>${l.qty}${l.unit}</td><td>${l.consult ? '상담' : l.incl ? '기본 포함' : l.price.toLocaleString()}</td><td></td><td>${l.free ? '무료' : l.incl ? '포함' : l.consult ? '별도' : won(l.amt)}</td></tr>`;
  }
  return `<table class="etab"><thead><tr><th>품목</th><th>수량</th><th>단가(원)</th><th></th><th>금액</th></tr></thead><tbody>${h}</tbody>
  <tfoot><tr><td colspan="4">소계</td><td>${won(EST.sub)}</td></tr><tr><td colspan="4">현장관리·공과잡비 (${Math.round(CFG.OVERHEAD * 100)}%)</td><td>${won(EST.overhead)}</td></tr><tr class="tot"><td colspan="4">합계 (VAT 별도)</td><td>${won(EST.total)}</td></tr><tr><td colspan="4">부가세 10%</td><td>${won(EST.vat)}</td></tr><tr class="tot"><td colspan="4">총액 (VAT 포함)</td><td>${won(EST.total + EST.vat)}</td></tr></tfoot></table>`;
}
function renderResults() {
  const S = aiSections(), adm = isAdmin() && !ST.submitted;
  $('#step6').innerHTML = `
  <div class="res-head card">
    <div><h2>${adm ? '관리자 미리보기' : '접수가 완료되었습니다'}</h2><p class="muted">${adm ? '관리자 모드라 정보 입력 없이 결과물이 열려 있습니다.' : `접수번호 <b>${esc(ST.leadId || '')}</b> · SMCT 담당자가 영업일 기준 1일 이내 연락드립니다.`}</p></div>
    <div class="res-btns"><button class="btn gold" id="printBtn">📄 리포트 PDF 저장 / 인쇄</button><button class="btn line" id="mailBtn">📧 메일로 받기</button><button class="btn line" id="toView">3D 다시 보기</button>${ST.submitted ? '<button class="btn line" id="resetLead">정보 다시 입력</button>' : ''}</div>
    <div class="res-info">
      <b>결과물은 어디에 있나요?</b>
      <ul>
        <li>견적서와 설계 리포트는 <b>이 화면</b>에 있습니다. 같은 휴대폰·PC의 같은 브라우저로 다시 들어오면 그대로 보입니다.</li>
        <li><b>파일로 보관</b>하려면 「리포트 PDF 저장 / 인쇄」를 누르고, 인쇄 화면에서 <b>PDF로 저장</b>을 고르세요.</li>
        <li>PDF 저장이 어렵거나 휴대폰이라 불편하면 <b>「메일로 받기」</b>를 누르세요. 바로 자동으로 가는 메일이 아니라, 담당자가 확인한 뒤 견적서와 리포트를 보내드립니다. (발송 08:00~17:00)</li>
        <li>3D 사진은 아래 「저장한 3D 장면」에서 사진마다 <b>저장</b>을 누르면 됩니다.</li>
      </ul>
      <div class="msg" id="mailMsg"></div>
    </div>
  </div>
  <div class="card"><h3>상세 견적서</h3><p class="tiny">${esc(projTitle())} · ${styleOf().name} · ${GRADES[ST.info.grade - 1].name} · ${CFG.PRICE_DATE} 단가 · 표준 평면 기준 개략 견적</p>${estTableHTML()}</div>
  <div class="card ai"><div class="ai-head"><span class="ai-badge">AI</span><div><h2>설계 리포트</h2><small>전체 공개</small></div></div>${S.map(s => `<section class="ai-sec"><h3>${s.t}</h3><div class="ai-body">${s.h}</div></section>`).join('')}</div>
  ${(ST.custom || []).length ? `<div class="card"><h3>고객 요청 품목 <small class="muted">— 상담 후 같은 제품 또는 가장 가까운 정품으로 확정</small></h3>${customHTML()}</div>` : ''}
  <div class="card"><h3>저장한 3D 장면</h3>${SNAPS.length ? `<div class="snaps">${SNAPS.map((s, n) => `<figure><img src="${s.d}" alt=""><figcaption>${esc(s.t)} <button class="lnk" data-snap-save="${n}">저장</button></figcaption></figure>`).join('')}</div>` : '<p class="tiny">3D 화면에서 「📸 장면 저장」이나 「📷 포토 렌더」를 누르면 이곳과 PDF 리포트에 들어갑니다.</p>'}</div>`;
  $('#printBtn').onclick = printReport;
  $$('[data-snap-save]', $('#step6')).forEach(b => b.onclick = () => { const s = SNAPS[+b.dataset.snapSave]; if (s) saveImage(s.d, `SMCT_AI인테리어_${String(s.t || '장면').replace(/\s/g, '')}.jpg`); });
  $('#mailBtn').onclick = async () => {
    const L = ST.lead || {}, msg = (h, err) => { $('#mailMsg').innerHTML = `<span class="${err ? 'err' : 'ok'}">${h}</span>`; };
    const email = (prompt('결과물을 받을 메일 주소를 입력해 주세요.', L.email || '') || '').trim();
    if (!email) return;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return msg('메일 주소 형식을 확인해 주세요.', 1);
    const btn = $('#mailBtn'); btn.disabled = true; btn.textContent = '요청 보내는 중…';
    const ok = await postForm({ _subject: `[SMCT AI인테리어] 결과물 메일 발송 요청 — ${L.name || '관리자 미리보기'} / ${email}`, 구분: 'AI 인테리어 결과물 메일 발송 요청', 접수번호: ST.leadId || '', 성함: L.name || '', 연락처: L.phone || '', 보낼메일: email, 단지명: L.complex || ST.info.complex || '', 평형: sizeLabel(), 예상공사비: man(EST.total), 견적내역: estText(), 설계데이터: designData(), 요청시각: new Date().toLocaleString('ko-KR') });
    btn.disabled = false; btn.textContent = '📧 메일로 받기';
    if (ok) { ST.lead = Object.assign({}, L, { email }); save(); msg(`✓ 요청이 접수되었습니다. 자동 발송이 아니라 <b>담당자가 확인한 뒤</b> <b>${esc(email)}</b>로 견적서와 리포트를 보내드립니다. 발송 시간은 08:00~17:00이며, 그 외 시간 요청은 다음 발송 시간에 보내드립니다. 급하시면 <a href="tel:${CFG.PHONE}">${CFG.PHONE}</a>로 연락 주세요.`); ga('mail_request'); }
    else msg(`요청을 보내지 못했습니다. <a href="tel:${CFG.PHONE}">${CFG.PHONE}</a>로 연락 주시면 바로 보내드립니다.`, 1);
  };
  $('#toView').onclick = () => goStep(4);
  if ($('#resetLead')) $('#resetLead').onclick = () => { ST.submitted = false; save(); renderStep6(); };
}
function printReport() {
  const S = aiSections(), i = ST.info;
  $('#printArea').innerHTML = `
  <div class="p-head"><img src="icon-192.png" alt=""><div><b>주식회사 에스엠씨티건설</b><span>SMCT AI 인테리어 설계 리포트</span></div><div class="p-meta">${ST.leadId ? '접수번호 ' + esc(ST.leadId) + '<br>' : ''}${new Date().toLocaleDateString('ko-KR')}</div></div>
  <h1>${esc(projTitle())}</h1>
  <p class="p-sub">${styleOf().name} · ${GRADES[i.grade - 1].name} 등급 · ${i.ptype || 'A'}형 ${i.bays}Bay · 방 ${i.rooms} · 욕실 ${i.baths} · ${BALC_LABEL[i.balcony]} · ${i.year}년 준공</p>
  <div class="p-sum"><div><small>예상 공사비 (VAT 별도)</small><b>${man(EST.low)} ~ ${man(EST.high)}</b></div><div><small>중간값</small><b>${man(EST.total)}</b></div><div><small>평당</small><b>${man(EST.perPy)}</b></div></div>
  <div class="p-plan">${planSVG(PLAN, resolveLook())}</div>
  ${SNAPS.length ? `<div class="p-snaps">${SNAPS.slice(0, 4).map(s => `<figure><img src="${s.d}"><figcaption>${esc(s.t)}</figcaption></figure>`).join('')}</div>` : ''}
  ${S.map(s => `<section><h2>${s.t}</h2>${s.h}</section>`).join('')}
  ${(ST.custom || []).length ? `<section><h2>고객 요청 품목</h2>${customHTML(1)}</section>` : ''}
  <section class="p-break"><h2>상세 견적서</h2>${estTableHTML()}</section>
  <p class="p-foot">본 자료는 입력 정보와 표준 평면을 바탕으로 한 개략 설계·견적이며 현장 실측 후 확정됩니다. · 주식회사 에스엠씨티건설 · 사업자 217-81-51159 · ${CFG.PHONE} · ${CFG.EMAIL} · www.smct00.co.kr</p>`;
  ga('print_report'); setTimeout(() => window.print(), 250);
}

/* ---------- 관리자 ---------- */
function initAdmin() {
  $('#adminBtn').onclick = () => { if (isAdmin()) { $('#adminModal').hidden = false; return; } if (window.__smctAdminLogin) window.__smctAdminLogin(); };
  $$('[data-close]').forEach(b => b.onclick = () => b.closest('.modal').hidden = true);
  $$('.modal').forEach(m => m.addEventListener('click', e => { if (e.target === m) m.hidden = true; }));
  if (isAdmin()) { $('#adminStart').hidden = false; document.body.classList.add('is-admin'); }
  const admApi = async body => { const r = await fetch('/api/ai', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }); const d = await r.json(); if (!r.ok || !d.ok) throw new Error(d.why || '요청 실패'); return d; };
  const admShow = (code, note, line) => {
    const name = $('#admName').value.trim(), phone = $('#admPhone').value.trim();
    const msg = `[SMCT건설] ${name ? name + '님, ' : ''}AI 인테리어 스튜디오 승인코드입니다.\n코드: ${code}\n${line}\n접속: https://www.smct00.co.kr/interior.html`;
    const iOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    $('#admOut').hidden = false;
    $('#admOut').innerHTML = `<div class="code-big">${esc(code)}</div><small>${esc(note)}</small><textarea class="inp" rows="4" readonly>${esc(msg)}</textarea><div class="row"><button class="btn sm gold" id="admCopy">문구 복사</button>${phone ? `<a class="btn sm line" href="sms:${esc(phone.replace(/[^0-9]/g, ''))}${iOS ? '&' : '?'}body=${encodeURIComponent(msg)}">휴대폰 문자로 보내기</a>` : ''}</div>`;
    $('#admCopy').onclick = () => { navigator.clipboard && navigator.clipboard.writeText(msg).then(() => toast('복사했습니다')); };
  };
  let admCommonCode = null;
  const admLoadCommon = async () => { if (admCommonCode) return admCommonCode; const d = await admApi({ action: 'common' }); admCommonCode = d; if ($('#admCommon')) $('#admCommon').textContent = d.code; return d; };
  if (isAdmin()) admLoadCommon().catch(() => { });
  $('#admMake').onclick = async () => {
    try { const d = await admLoadCommon(); admShow(d.code, `처음 입력한 때부터 ${d.days}일간 사용 가능`, `이용기간: 처음 입력한 때부터 ${d.days}일`); }
    catch (e) { toast(e.message || '승인코드를 불러오지 못했습니다. 관리자 로그인을 다시 해 주세요.'); }
  };
  if ($('#admMakeOne')) $('#admMakeOne').onclick = async () => {
    try { const d = await admApi({ action: 'make' }); const exp = new Date(d.exp).toLocaleDateString('ko-KR'); admShow(d.code, `${exp}까지 사용 가능 (재발급용)`, `이용기간: ${exp}까지`); }
    catch (e) { toast(e.message || '코드 발급에 실패했습니다. 관리자 로그인을 다시 해 주세요.'); }
  };
  $('#admLoad').onclick = () => {
    try {
      let t = $('#admJson').value.trim(); t = t.slice(t.indexOf('{'));
      const d = JSON.parse(t); if (!d.info || !d.sel) throw 0;
      ST.info = Object.assign(ST.info, d.info); ST.sel = d.sel; ST.room = d.room || {}; ST.bath = d.bath || {}; ST.furn = d.furn || {}; ST.fx = d.fx || {};
      ST.custom = (d.custom || []).map(r => Object.assign({}, r, { photos: [] }));
      ST.step = 5; ST.visited = 6; save();
      $('#adminModal').hidden = true; if ($('#studio').hidden) openStudio(); else { regen(); goStep(5); }
      toast('고객 설계를 불러왔습니다');
    } catch (e) { toast('설계데이터 형식이 올바르지 않습니다'); }
  };
}
function bindPriv() { $$('[data-priv]').forEach(a => a.onclick = e => { e.preventDefault(); $('#privModal').hidden = false; }); }

/* ---------- 시작 ---------- */
__smctReady(() => {
  initAdmin(); bindPriv();
  loadAllPhotos().then(n => { if (n && V.ready) { V.sig = null; rebuild3D(); } });
  openStudio();
  if (window.__smctOpenAdminAfter && isAdmin()) { window.__smctOpenAdminAfter = false; $('#adminModal').hidden = false; }
});
/* =====================================================================
   v0.3 — 포토 렌더(경로추적) 화면 · 고객 요청 품목(직접 입력·사진) · 자재 샘플칩
   ===================================================================== */

/* ---------- 포토 렌더 ---------- */
const PTQ = { fast: { s: 160, n: '빠르게' }, std: { s: 420, n: '선명하게' }, max: { s: 1000, n: '최고 품질' } };
function openPhotoRender() {
  if (PT.running) return;
  const roomTxt = $('#vRoom').selectedOptions[0] ? $('#vRoom').selectedOptions[0].textContent : '전체';
  const mobile = window.innerWidth < 760 || /iPhone|Android/i.test(navigator.userAgent);
  let q = mobile ? 'fast' : 'std';
  const m = $('#hqModal'); m.hidden = false;
  $('#hqImg').hidden = true; $('#ptLive').hidden = false; $('#hqSave').disabled = true;
  $('#hqDown').hidden = true; $('#hqLock').hidden = true;
  $$('#ptQ button').forEach(b => b.classList.toggle('on', b.dataset.q === q));
  let result = null;
  const done = o => {
    result = o.url;
    $('#hqImg').src = o.url; $('#hqImg').hidden = false; $('#ptLive').hidden = true; $('#ptLive').innerHTML = '';
    $('#ptFill').style.width = '100%';
    $('#ptTxt').textContent = `완성 · ${o.samples}회 빛 계산 · ${Math.round(o.sec)}초`;
    $('#hqSave').disabled = false; $('#ptStop').hidden = true;
    $('#hqDown').hidden = !unlocked(); $('#hqLock').hidden = unlocked();
    ga('photo_render', { samples: o.samples, sec: Math.round(o.sec) });
  };
  const start = () => {
    result = null; $('#ptStop').hidden = false; $('#hqSave').disabled = true; $('#hqImg').hidden = true; $('#ptLive').hidden = false;
    const host = $('#ptLive');
    const asp = (V.host && V.host.clientWidth && V.host.clientHeight) ? V.host.clientWidth / V.host.clientHeight : 16 / 10;
    const W = mobile ? 1080 : 1600, H = Math.round(W / Math.max(0.6, Math.min(2.2, asp)));
    $('#ptTxt').textContent = '장면을 분석하는 중… (처음 한 번은 몇 초 걸려요)'; $('#ptFill').style.width = '2%';
    photoRender({
      host, width: W, height: H, samples: PTQ[q].s,
      onProgress: (s, total, sec) => {
        const pct = Math.max(2, Math.round(s / total * 100));
        $('#ptFill').style.width = pct + '%';
        const eta = s > 3 ? Math.max(0, Math.round(sec / s * (total - s))) : null;
        $('#ptTxt').textContent = `${s} / ${total} · ${Math.round(sec)}초${eta != null ? ` · 약 ${eta}초 남음` : ''}`;
      },
      onDone: done,
    }).catch(e => { console.warn(e); window.__ptErr = String(e && e.stack || e); PT.running = false; fallbackHQ(); });
  };
  const fallbackHQ = () => {
    // 경로추적을 지원하지 않는 기기 → 고해상도 실시간 렌더
    const d = renderHQ(window.devicePixelRatio > 1.5 ? 2 : 2.5); if (!d) return;
    $('#ptNote').innerHTML = '이 기기는 경로추적을 지원하지 않아 <b>고해상도 실시간 렌더</b>로 만들었습니다. PC 크롬·엣지에서 열면 포토 렌더가 됩니다.';
    done({ url: d, samples: 1, sec: 0 });
  };
  $$('#ptQ button').forEach(b => b.onclick = () => { if (PT.running) { PT.stop = true; PT.discard = true; } q = b.dataset.q; $$('#ptQ button').forEach(x => x.classList.toggle('on', x === b)); setTimeout(start, 120); });
  $('#ptStop').onclick = () => { PT.stop = true; };
  $('#hqSave').onclick = () => { if (!result) return; SNAPS.unshift({ d: result, t: roomTxt + ' (포토 렌더)' }); if (SNAPS.length > 6) SNAPS.pop(); toast('리포트에 담았습니다'); closePT(); };
  $('#hqDown').onclick = () => { if (!result) return; saveImage(result, `SMCT_AI인테리어_${roomTxt.replace(/\s/g, '')}.jpg`); };
  const closePT = () => { if (PT.running) { PT.stop = true; PT.discard = true; } m.hidden = true; };
  $$('[data-close]', m).forEach(b => b.onclick = closePT);
  m.onclick = e => { if (e.target === m) closePT(); };
  if (!ptSupported()) return fallbackHQ();
  start();
}

/* ---------- 사진 저장소 (브라우저 IndexedDB — 서버로 가지 않음) ---------- */
const PHOTOS = {};
const IDB = { p: null };
function idb() {
  if (!IDB.p) IDB.p = new Promise((res, rej) => { try { const r = indexedDB.open('smct_ai_photos', 1); r.onupgradeneeded = () => r.result.createObjectStore('p'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); } catch (e) { rej(e); } });
  return IDB.p;
}
async function photoPut(id, url) { PHOTOS[id] = url; try { const db = await idb(); db.transaction('p', 'readwrite').objectStore('p').put(url, id); } catch (e) { } }
async function photoGet(id) {
  if (PHOTOS[id]) return PHOTOS[id];
  try { const db = await idb(); return await new Promise(res => { const q = db.transaction('p').objectStore('p').get(id); q.onsuccess = () => { if (q.result) PHOTOS[id] = q.result; res(q.result || null); }; q.onerror = () => res(null); }); } catch (e) { return null; }
}
function photoDel(id) { delete PHOTOS[id]; idb().then(db => db.transaction('p', 'readwrite').objectStore('p').delete(id)).catch(() => { }); }
function compressImage(file, max, q) {
  max = max || 1280; q = q || 0.82;
  return new Promise((res, rej) => {
    const rd = new FileReader();
    rd.onload = () => {
      const img = new Image();
      img.onload = () => {
        const k = Math.min(1, max / Math.max(img.width, img.height)), w = Math.round(img.width * k), h = Math.round(img.height * k);
        const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); g.drawImage(img, 0, 0, w, h);
        // 평균색 (평면도·3D 미리보기용)
        const s = document.createElement('canvas'); s.width = s.height = 8; s.getContext('2d').drawImage(c, 0, 0, 8, 8);
        const d = s.getContext('2d').getImageData(0, 0, 8, 8).data; let r = 0, gg = 0, b = 0; for (let i = 0; i < d.length; i += 4) { r += d[i]; gg += d[i + 1]; b += d[i + 2]; }
        const n = d.length / 4, hex = '#' + [r, gg, b].map(v => Math.round(v / n).toString(16).padStart(2, '0')).join('');
        res({ url: c.toDataURL('image/jpeg', q), avg: hex });
      };
      img.onerror = rej; img.src = rd.result;
    };
    rd.onerror = rej; rd.readAsDataURL(file);
  });
}
/* 이미지 저장 — PC는 바로 내려받기, 휴대폰은 공유(사진 앱에 저장) → 안 되면 길게 눌러 저장하는 화면 */
async function saveImage(url, name) {
  const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!mobile) { const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); return; }
  try {
    const f = new File([dataURLtoBlob(url)], name, { type: 'image/jpeg' });
    if (navigator.canShare && navigator.canShare({ files: [f] })) { await navigator.share({ files: [f], title: name }); return; }
  } catch (e) { if (e && e.name === 'AbortError') return; }
  let sh = document.getElementById('saveSheet');
  if (!sh) {
    sh = document.createElement('div'); sh.id = 'saveSheet';
    sh.style.cssText = 'position:fixed;inset:0;z-index:9998;background:rgba(10,10,9,.94);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:18px';
    document.body.appendChild(sh);
  }
  sh.innerHTML = `<p style="color:#f5f1e8;font-size:15px;line-height:1.7;text-align:center;margin:0;word-break:keep-all"><b style="color:#D9B768">사진을 길게 눌러 「이미지 저장」</b>을 선택하세요.<br><span style="font-size:13px;color:rgba(245,241,232,.66)">카카오톡·네이버 앱 안에서 열었다면 오른쪽 위 ⋮(또는 ⋯) → 「다른 브라우저로 열기」에서 다시 하면 저장이 잘 됩니다.</span></p><img src="${url}" alt="" style="max-width:100%;max-height:62vh;border:1px solid rgba(245,241,232,.2)"><button class="btn gold" style="min-width:160px">닫기</button>`;
  sh.hidden = false; sh.style.display = 'flex';
  sh.querySelector('button').onclick = () => { sh.style.display = 'none'; };
}
function dataURLtoBlob(u) { const [h, b] = u.split(','), m = h.match(/:(.*?);/)[1], s = atob(b), a = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return new Blob([a], { type: m }); }

/* ---------- 고객 요청 품목 ---------- */
const APPLY3D = ['floor', 'wall', 'artwall', 'film'];
let CUR_ROOM = '_common', RQ = null;
const roomLabel = k => k === '_common' ? '집 전체' : k;
const reqsFor = (cat, room) => (ST.custom || []).filter(r => r.cat === cat && (room == null || r.room === room));
function reqBlock(catId, room) {
  const list = reqsFor(catId, room);
  return `<div class="rq-row">${list.map(r => `<button class="rq-chip" data-req-edit="${r.id}">${r.photos && r.photos.length ? `<img src="${PHOTOS[r.photos[0]] || ''}" alt="">` : '<i>✎</i>'}<span><b>고객 요청</b> ${esc(r.name || r.desc.slice(0, 18) || '사진 요청')}${r.apply && r.photos && r.photos.length ? ' · 3D 적용' : ''}</span></button>`).join('')}<button class="rq-add" data-req="${catId}" data-room="${esc(room)}">＋ 원하는 제품이 없어요 · 직접 입력 / 사진 올리기</button></div>`;
}
function bindReqButtons(root) {
  $$('[data-req]', root).forEach(b => b.onclick = e => { e.stopPropagation(); openReq(b.dataset.req, b.dataset.room); });
  $$('[data-req-edit]', root).forEach(b => b.onclick = e => { e.stopPropagation(); const r = (ST.custom || []).find(x => x.id === b.dataset.reqEdit); if (r) openReq(r.cat, r.room, r.id); });
}
function openReq(catId, room, id) {
  const cat = CAT[catId] || { id: catId, name: catId === 'bath' ? '욕실 제품' : catId === 'furniture' ? '가구·가전' : '기타 자재' };
  RQ = id ? JSON.parse(JSON.stringify(ST.custom.find(x => x.id === id))) : { id: 'rq' + Date.now().toString(36), cat: catId, catName: cat.name, room: room || '_common', name: '', code: '', desc: '', photos: [], avg: null, apply: APPLY3D.includes(catId) };
  $('#rqCat').value = RQ.catName;
  const rooms = ['_common'].concat(PLAN.rooms.filter(r => !['hall'].includes(r.type)).map(r => roomKey(r))).filter((v, i, a) => a.indexOf(v) === i);
  $('#rqRoom').innerHTML = rooms.map(k => `<option value="${esc(k)}" ${k === RQ.room ? 'selected' : ''}>${esc(roomLabel(k))}</option>`).join('');
  $('#rqName').value = RQ.name; $('#rqCode').value = RQ.code; $('#rqDesc').value = RQ.desc;
  $('#rqApplyWrap').hidden = !APPLY3D.includes(catId); $('#rqApply').checked = RQ.apply !== false;
  $('#rqDel').hidden = !id; $('#rqMsg').innerHTML = '';
  renderReqPhotos();
  $('#reqModal').hidden = false;
  $('#rqSave').onclick = saveReq;
  $('#rqDel').onclick = () => { ST.custom = ST.custom.filter(x => x.id !== RQ.id); (RQ.photos || []).forEach(photoDel); afterReq(); toast('요청을 지웠습니다'); };
}
function renderReqPhotos() {
  const box = $('#rqPhotos');
  box.innerHTML = RQ.photos.map((pid, i) => `<div class="rq-ph"><img src="${PHOTOS[pid] || ''}" alt=""><button data-rm="${i}" title="삭제">×</button></div>`).join('') +
    (RQ.photos.length < 3 ? `<label class="rq-ph add"><input type="file" accept="image/*" multiple hidden id="rqFile"><span>＋<br><small>사진 추가</small></span></label>` : '');
  $$('[data-rm]', box).forEach(b => b.onclick = () => { RQ.photos.splice(+b.dataset.rm, 1); renderReqPhotos(); });
  const f = $('#rqFile');
  if (f) f.onchange = async () => {
    for (const file of [...f.files].slice(0, 3 - RQ.photos.length)) {
      try { const { url, avg } = await compressImage(file); const pid = 'ph' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5); await photoPut(pid, url); RQ.photos.push(pid); if (!RQ.avg) RQ.avg = avg; }
      catch (e) { $('#rqMsg').innerHTML = '<span class="err">사진을 읽지 못했습니다. JPG·PNG 사진으로 올려 주세요.</span>'; }
    }
    renderReqPhotos();
  };
}
function saveReq() {
  RQ.room = $('#rqRoom').value; RQ.name = $('#rqName').value.trim(); RQ.code = $('#rqCode').value.trim(); RQ.desc = $('#rqDesc').value.trim(); RQ.apply = $('#rqApply').checked;
  if (!RQ.name && !RQ.desc && !RQ.photos.length) { $('#rqMsg').innerHTML = '<span class="err">제품명·설명·사진 중 하나는 넣어 주세요.</span>'; return; }
  ST.custom = (ST.custom || []).filter(x => x.id !== RQ.id).concat([RQ]);
  afterReq(); toast('✓ 요청을 저장했습니다 — 견적서에 「상담 후 확정」 품목으로 들어갑니다'); ga('custom_req', { cat: RQ.cat });
}
function afterReq() {
  $('#reqModal').hidden = true; save(); recalc();
  if (ST.step === 3) { const y = window.scrollY; renderStep3(); window.scrollTo(0, y); }
  rebuild3D();
}
function customLines(push) {
  for (const r of (ST.custom || [])) {
    const cat = CAT[r.cat] || { id: r.cat, name: r.catName, icon: '📎' };
    push({ id: 'custom', name: '고객 요청 품목', icon: '📎' }, `${roomLabel(r.room)} ${r.catName}: ${r.name || '사진·설명 요청'}${r.code ? ' (' + r.code + ')' : ''}${r.photos && r.photos.length ? ` · 사진 ${r.photos.length}장` : ''}`, '식', 1, 0, { consult: true, req: r.id });
  }
}
function photoSpec(cat, r) {
  // 사진을 3D에 입힌 고객 요청 (방 지정 > 집 전체)
  const ok = x => x.apply && x.photos && x.photos.length && PHOTOS[x.photos[0]];
  const list = (ST.custom || []).filter(x => x.cat === cat && ok(x));
  if (!list.length) return null;
  const k = r ? roomKey(r) : null;
  const hit = (k && list.find(x => x.room === k)) || list.find(x => x.room === '_common');
  if (!hit) return null;
  return { type: 'photo', pid: hit.photos[0], color: hit.avg || '#cccccc', unit: cat === 'floor' ? 0.9 : 1.2 };
}
function photoTex(pid) {
  const key = 'p' + pid; if (TEX[key]) return TEX[key];
  const T = V.T, img = new Image(), t = new T.Texture(img);
  img.onload = () => { t.needsUpdate = true; };
  img.src = PHOTOS[pid] || '';
  t.wrapS = t.wrapT = T.RepeatWrapping; t.colorSpace = T.SRGBColorSpace; t.anisotropy = 8;
  return (TEX[key] = t);
}
async function loadAllPhotos() {
  let n = 0;
  for (const r of (ST.custom || [])) for (const id of (r.photos || [])) { if (await photoGet(id)) n++; }
  return n;
}
function customText() {
  return (ST.custom || []).map((r, i) => `${i + 1}. [${roomLabel(r.room)} · ${r.catName}] ${r.name || '-'}${r.code ? ' / 코드: ' + r.code : ''}${r.desc ? ' / 설명: ' + r.desc : ''}${r.photos.length ? ' / 사진 ' + r.photos.length + '장' : ''}`).join('\n');
}
function customHTML(print) {
  const list = ST.custom || []; if (!list.length) return '';
  return `<div class="rq-report">${list.map(r => `<div class="rq-item">${(r.photos || []).slice(0, print ? 3 : 3).map(p => PHOTOS[p] ? `<img src="${PHOTOS[p]}" alt="">` : '').join('')}<div><b>${esc(roomLabel(r.room))} · ${esc(r.catName)}</b><p>${esc(r.name || '사진·설명 요청')}${r.code ? ` <small>(${esc(r.code)})</small>` : ''}</p>${r.desc ? `<small>${esc(r.desc)}</small>` : ''}</div></div>`).join('')}</div>`;
}

/* ---------- 자재 샘플칩 (실제 무늬를 작게 그려서 보여줌) ---------- */
const SWATCH = {};
function swatchURL(matSpec, hex, seed) {
  const type = (matSpec && matSpec.type) || 'flat', key = type + (matSpec && matSpec.vein ? 'v' : '') + (matSpec && matSpec.terrazzo ? 't' : '') + hex + (seed || 0);
  if (SWATCH[key]) return SWATCH[key];
  const S = 96, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d');
  const rand = prng(7 + (seed || 0) * 13);
  const sh = (k) => { const n = parseInt(hex.slice(1), 16); let r = n >> 16, gg = (n >> 8) & 255, b = n & 255; if (k < 0) { r *= 1 + k; gg *= 1 + k; b *= 1 + k; } else { r += (255 - r) * k; gg += (255 - gg) * k; b += (255 - b) * k; } return `rgb(${r | 0},${gg | 0},${b | 0})`; };
  g.fillStyle = hex; g.fillRect(0, 0, S, S);
  if (['wood', 'vinyl', 'deck', 'veneer'].includes(type)) {
    const pw = S / 3.2;
    for (let y = 0; y < S; y += pw) {
      g.fillStyle = sh((rand() - 0.5) * 0.12); g.fillRect(0, y, S, pw);
      for (let i = 0; i < 14; i++) { g.strokeStyle = `rgba(${rand() < 0.5 ? '60,35,15' : '255,240,220'},${0.08 + rand() * 0.12})`; g.lineWidth = 0.6 + rand(); g.beginPath(); const yy = y + rand() * pw; g.moveTo(0, yy); g.bezierCurveTo(S * 0.3, yy + (rand() - 0.5) * 6, S * 0.6, yy + (rand() - 0.5) * 6, S, yy + (rand() - 0.5) * 4); g.stroke(); }
      g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(0, y, S, 0.8); const jx = rand() * S; g.fillRect(jx, y, 0.8, pw);
    }
  } else if (type === 'herring') {
    g.save(); g.translate(S / 2, S / 2); g.rotate(Math.PI / 4);
    for (let i = -6; i < 6; i++) for (let j = -6; j < 6; j++) { g.fillStyle = sh((rand() - 0.5) * 0.16); const x = i * 18, y = j * 18; if ((i + j) % 2) g.fillRect(x, y, 36, 9); else g.fillRect(x, y, 9, 36); g.strokeStyle = 'rgba(0,0,0,.15)'; g.strokeRect(x, y, (i + j) % 2 ? 36 : 9, (i + j) % 2 ? 9 : 36); }
    g.restore();
  } else if (type === 'tile' && matSpec && matSpec.terrazzo) {
    terrazzoDots(g, 0, 0, S, S, rand);
  } else if (type === 'tile' && matSpec && matSpec.vein) {
    for (let i = 0; i < 6; i++) { g.strokeStyle = `rgba(${rand() < 0.7 ? '90,90,95' : '160,140,110'},${0.12 + rand() * 0.2})`; g.lineWidth = 0.6 + rand() * 1.6; g.beginPath(); let x = rand() * S, y = 0; g.moveTo(x, y); for (let k = 0; k < 6; k++) { x += (rand() - 0.45) * 30; y += S / 5; g.lineTo(x, y); } g.stroke(); }
  } else if (type === 'tile') {
    const tw = S / 2; g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 1.5; for (let x = 0; x <= S; x += tw) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, S); g.stroke(); } for (let y = 0; y <= S; y += tw) { g.beginPath(); g.moveTo(0, y); g.lineTo(S, y); g.stroke(); }
  } else if (type === 'slat') {
    for (let x = 0; x < S; x += 8) { g.fillStyle = sh(-0.18); g.fillRect(x + 6, 0, 2, S); }
  } else if (type === 'lime') {
    for (let i = 0; i < 40; i++) { const x = rand() * S, y = rand() * S, r = 8 + rand() * 22, gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(${rand() < 0.5 ? '0,0,0' : '255,255,255'},.06)`); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, S, S); }
  } else {
    // 벽지·필름·도장: 은은한 질감
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${rand() < 0.5 ? '0,0,0' : '255,255,255'},${0.025 + rand() * 0.03})`; g.fillRect(rand() * S, rand() * S, 1.2, 1.2); }
  }
  const gl = g.createLinearGradient(0, 0, S, S); gl.addColorStop(0, 'rgba(255,255,255,.10)'); gl.addColorStop(1, 'rgba(0,0,0,.08)'); g.fillStyle = gl; g.fillRect(0, 0, S, S);
  return (SWATCH[key] = c.toDataURL('image/png'));
}
/* 제품 페이지 링크 — 조사에서 제품별로 확인된 주소만 (없으면 표시 안 함) */
const OFFICIAL_HOSTS = /lxzin\.com|ebodaq\.com|hyundailnc\.com|greendongwha\.com|kujungmaru\.com|daelimbath\.com|americanstandard\.co\.kr|isceramic\.kr|shinhanwall\.co\.kr|benjaminmoore\.com|pantonepaint\.co\.kr/;
function prodLink(c, cls) {
  if (!c || !c.u || !/^https:\/\//.test(c.u)) return '';
  const off = OFFICIAL_HOSTS.test(c.u);
  return `<a class="${cls || 'plink'}" href="${esc(c.u)}" target="_blank" rel="noopener noreferrer" title="${off ? '제조사 공식 제품 페이지' : '판매처 제품 페이지'}에서 실물 사진 보기">${off ? '공식 페이지에서 실물 보기' : '판매처에서 실물 보기'} ↗</a>`;
}
function swatchHTML(cl, cur, matSpec) {
  const rich = cl.length > 6 || cl.some(c => c.b || c.code);
  if (!rich) return `<div class="colors">${cl.map((c, k) => `<button class="cdot ${k === cur ? 'on' : ''}" data-color="${k}" title="${esc(c.n)}"><i style="background:${c.c}"></i><small>${esc(c.n)}</small></button>`).join('')}</div><div class="cl-note">색 계열 선택 · 정확한 제품·품번은 상담 때 함께 정합니다</div>`;
  const sel = cur >= 0 ? cl[clamp(cur, 0, cl.length - 1)] : null;
  return `<div class="sw-head"><span>실제 판매 제품 ${cl.length}종 <em>인기·대표순</em></span>${sel ? `<b>선택: ${esc(sel.b ? sel.b + ' ' : '')}${esc(sel.n)}${sel.code ? ' · ' + esc(sel.code) : ''}</b>` : ''}</div>${sel ? `<div class="sw-sel"><span style="background-image:url(${swatchURL(sel.mat || matSpec, sel.c, clamp(cur, 0, cl.length - 1))})"></span><div><b>${esc(sel.n)}</b><small>${esc([sel.b, sel.code, sel.line].filter(Boolean).join(' · '))}</small>${prodLink(sel)}</div></div>` : ''}
  <div class="swatches">${cl.map((c, k) => `<button class="psw ${k === cur ? 'on' : ''}" data-color="${k}" title="${esc((c.b ? c.b + ' ' : '') + c.n + (c.code ? ' ' + c.code : ''))}"><span class="psw-img" style="background-image:url(${swatchURL(c.mat || matSpec, c.c, k)})"><em>${k + 1}</em></span><b>${esc(c.n)}</b><small>${esc([c.b, c.code].filter(Boolean).join(' · '))}</small></button>`).join('')}</div><div class="sw-note">화면 색은 제품명 기준 근사색입니다 · 품번으로 발주하며 실물 샘플로 최종 확인합니다</div>`;
}
/* =====================================================================
   v0.4 단가 편집 (관리자)
   - 사이트는 서버가 없으므로, 고친 단가는 「단가 파일(ai-prices.json)」로 내려받아
     GitHub 저장소 data 폴더에 올리면 모든 고객에게 적용된다.
   - 올리기 전에는 이 PC(관리자 브라우저)에서만 미리보기로 적용된다.
   ===================================================================== */
const PRICE = { rows: null, file: {}, draft: {}, fileInfo: null, URL: 'data/ai-prices.json', LS: 'smct_ai_price_draft' };
function priceRows() {
  if (PRICE.rows) return PRICE.rows;
  const rows = [];
  CATALOG.forEach(cat => (cat.options || []).forEach(o => {
    if (Array.isArray(o.lines)) o.lines.forEach((l, i) => { if (typeof l.price === 'number') rows.push({ key: `c.${cat.id}.${o.id}.${i}`, group: cat.name, label: `${o.name} — ${l.name}`, unit: l.unit || '', base: l.price, set: v => { l.price = v; } }); });
    else if (typeof o.price === 'number' && (o.price > 0 || o.q)) rows.push({ key: `c.${cat.id}.${o.id}`, group: cat.name, label: o.name, unit: o.unit || '', base: o.price, set: v => { o.price = v; } });
  }));
  BATH.forEach(b => (b.list || []).forEach(it => {
    if (typeof it.p === 'number' && it.id !== 'auto' && b.key !== 'tileP') rows.push({ key: `b.${b.key}.${it.id}`, group: '욕실 · ' + b.label.replace(/\s*\(.*?\)\s*$/, ''), label: it.full || it.n, unit: '식', base: it.p, set: v => { it.p = v; } });
  }));
  return (PRICE.rows = rows);
}
function priceApply() {
  const ov = Object.assign({}, PRICE.file, isAdmin() ? PRICE.draft : {});
  priceRows().forEach(r => { const v = ov[r.key]; r.cur = (typeof v === 'number' && isFinite(v) && v >= 0) ? Math.round(v) : r.base; r.set(r.cur); });
  try { if (typeof PLAN !== 'undefined' && PLAN && !$('#studio').hidden) recalc(); } catch (e) { }
}
function priceInit() {
  try { PRICE.draft = JSON.parse(localStorage.getItem(PRICE.LS) || '{}') || {}; } catch (e) { PRICE.draft = {}; }
  priceRows(); priceApply();
  fetch(PRICE.URL + '?t=' + Date.now(), { cache: 'no-store' }).then(r => r.ok ? r.json() : null).then(j => {
    if (j && j.prices && typeof j.prices === 'object') { PRICE.file = j.prices; PRICE.fileInfo = j.updated || ''; priceApply(); }
  }).catch(() => { });
}
function priceCollect() { // 화면 입력값 → 기본값과 다른 것만
  const out = {};
  document.querySelectorAll('#prBody input[data-pk]').forEach(inp => {
    const r = priceRows().find(x => x.key === inp.dataset.pk); if (!r) return;
    const v = parseInt(String(inp.value).replace(/[^\d]/g, ''), 10);
    if (isFinite(v) && v !== r.base) out[r.key] = v;
  });
  return out;
}
function priceRender() {
  const q = ($('#prQ').value || '').trim(), rows = priceRows().filter(r => !q || (r.group + ' ' + r.label).includes(q));
  let h = '', g = '';
  rows.forEach(r => {
    if (r.group !== g) { g = r.group; h += `<tr class="pr-g"><td colspan="4">${esc(g)}</td></tr>`; }
    const ch = r.cur !== r.base;
    h += `<tr class="${ch ? 'ch' : ''}"><td>${esc(r.label)}</td><td class="u">${esc(r.unit)}</td><td class="n">${r.base.toLocaleString()}</td><td><input class="inp pr-in" data-pk="${r.key}" inputmode="numeric" value="${r.cur.toLocaleString()}"></td></tr>`;
  });
  $('#prBody').innerHTML = h || '<tr><td colspan="4" class="tiny">찾는 항목이 없습니다.</td></tr>';
  const nf = Object.keys(PRICE.file).length, nd = Object.keys(PRICE.draft).length;
  $('#prState').textContent = `전체 ${priceRows().length}개 항목 · 사이트에 올라간 단가 파일: ${nf ? nf + '개 항목 변경' + (PRICE.fileInfo ? ' (' + PRICE.fileInfo + ')' : '') : '없음(기본 단가)'} · 이 PC 미리보기: ${nd ? nd + '개 항목' : '없음'}`;
  document.querySelectorAll('#prBody .pr-in').forEach(inp => {
    inp.onchange = () => { const v = parseInt(String(inp.value).replace(/[^\d]/g, ''), 10); inp.value = isFinite(v) ? v.toLocaleString() : ''; const r = priceRows().find(x => x.key === inp.dataset.pk); inp.closest('tr').classList.toggle('ch', isFinite(v) && v !== r.base); };
  });
}
function priceSaveDraft() {
  // 검색으로 가려진 항목의 기존 미리보기 값은 유지
  const shown = new Set([...document.querySelectorAll('#prBody input[data-pk]')].map(i => i.dataset.pk));
  const keep = {}; Object.keys(Object.assign({}, PRICE.file, PRICE.draft)).forEach(k => { if (!shown.has(k)) keep[k] = (k in PRICE.draft) ? PRICE.draft[k] : PRICE.file[k]; });
  PRICE.draft = Object.assign(keep, priceCollect());
  // 파일 값과 다르게 '기본값으로 되돌린' 항목은 기본값을 명시
  Object.keys(PRICE.file).forEach(k => { if (shown.has(k) && !(k in PRICE.draft)) { const r = priceRows().find(x => x.key === k); if (r) PRICE.draft[k] = r.base; } });
  try { localStorage.setItem(PRICE.LS, JSON.stringify(PRICE.draft)); } catch (e) { }
  priceApply(); priceRender();
}
function priceExport() {
  priceSaveDraft();
  const prices = {}; priceRows().forEach(r => { if (r.cur !== r.base) prices[r.key] = r.cur; });
  const d = new Date(), pad = n => String(n).padStart(2, '0');
  const j = { v: 1, updated: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`, note: 'SMCT AI 인테리어 단가 — 기본 단가와 다른 항목만 들어 있습니다. 저장소 data 폴더에 ai-prices.json 이름으로 올리세요.', prices };
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(j, null, 1)], { type: 'application/json' })); a.download = 'ai-prices.json';
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  $('#prMsg').textContent = `ai-prices.json 내려받기 완료 (${Object.keys(prices).length}개 항목 변경). GitHub 저장소의 data 폴더에 올리면 모든 고객에게 적용됩니다.`;
}
function priceReset() {
  if (!confirm('이 PC의 미리보기 단가를 모두 지우고, 사이트에 올라간 단가(없으면 기본 단가)로 되돌릴까요?')) return;
  PRICE.draft = {}; try { localStorage.removeItem(PRICE.LS); } catch (e) { }
  priceApply(); priceRender(); $('#prMsg').textContent = '미리보기 단가를 지웠습니다.';
}
function openPriceEditor() {
  if (!isAdmin()) return;
  $('#adminModal').hidden = true; $('#priceModal').hidden = false; $('#prMsg').textContent = ''; $('#prQ').value = ''; priceRender();
}
__smctReady( () => {
  priceInit();
  const b = $('#admPrice'); if (b) b.onclick = openPriceEditor;
  if ($('#prQ')) { $('#prQ').oninput = () => priceSaveDraft(); $('#prSave').onclick = () => { priceSaveDraft(); $('#prMsg').textContent = '이 PC에 미리보기로 적용했습니다. 견적 화면에서 바로 확인할 수 있습니다.'; }; $('#prExport').onclick = priceExport; $('#prReset').onclick = priceReset; }
});

/* 휴대폰: 공간별 꾸미기에서 3D 화면 접기·펼치기 (자재를 넓게 보며 고를 수 있게) */
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('#v3Tog'); if (!b) return;
  document.body.classList.remove('v3-full');
  document.body.classList.toggle('v3-min');
  if (!document.body.classList.contains('v3-min')) setTimeout(() => { try { resizeViewer(); } catch (err) { } }, 60);
});



/* 휴대폰: 평면도 확대 보기 — 평면도마다 「🔍 확대」 버튼, 누르면 전체 화면에서 두 손가락 확대·끌어서 이동 */
__smctReady(() => {
  const st = document.createElement('style');
  st.textContent = `
  .zv-chip{position:absolute;right:8px;top:8px;z-index:3;border:1px solid rgba(184,149,42,.7);background:rgba(12,12,12,.82);color:#f1dc9a;font:600 12px/1 'Noto Sans KR',sans-serif;padding:8px 11px;border-radius:999px;cursor:pointer;-webkit-tap-highlight-color:transparent}
  .pt-svg .zv-chip{right:4px;top:4px;padding:6px 8px;font-size:11px}
  .zv-host{position:relative}
  #zoomView{position:fixed;inset:0;z-index:9999;background:#f6f3ec;touch-action:none;overflow:hidden;user-select:none;-webkit-user-select:none}
  #zoomView[hidden]{display:none}
  #zoomView .zv-stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;cursor:grab}
  #zoomView .zv-stage svg{width:100vw;height:auto;max-height:none;max-width:none;transform-origin:0 0;will-change:transform;pointer-events:none;display:block}
  #zoomView .zv-bar{position:absolute;left:50%;bottom:calc(16px + env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;gap:8px;background:rgba(12,12,12,.9);padding:8px;border-radius:999px;box-shadow:0 8px 30px rgba(0,0,0,.35)}
  #zoomView .zv-bar button{min-width:48px;height:44px;border:0;border-radius:999px;background:#2a2a2a;color:#f5f1e8;font:600 15px 'Noto Sans KR',sans-serif;padding:0 14px}
  #zoomView .zv-bar button.x{background:#b8952a;color:#0a0a0a}
  #zoomView .zv-tip{position:absolute;left:0;right:0;top:calc(12px + env(safe-area-inset-top));text-align:center;pointer-events:none}
  #zoomView .zv-tip span{display:inline-block;background:rgba(12,12,12,.78);color:#f5f1e8;font:500 12px 'Noto Sans KR',sans-serif;padding:7px 12px;border-radius:999px}`;
  document.head.appendChild(st);
  const view = document.createElement('div');
  view.id = 'zoomView'; view.hidden = true;
  view.innerHTML = '<div class="zv-stage"></div><div class="zv-tip"><span>두 손가락으로 확대 · 끌어서 이동</span></div><div class="zv-bar"><button data-z="out" aria-label="축소">－</button><button data-z="fit">맞춤</button><button data-z="in" aria-label="확대">＋</button><button class="x" data-z="close">닫기</button></div>';
  document.body.appendChild(view);
  const stage = view.querySelector('.zv-stage');
  let svg = null, s = 1, x = 0, y = 0, base = { w: 0, h: 0 };
  const apply = () => { if (svg) svg.style.transform = `translate(${x}px,${y}px) scale(${s})`; };
  const clampAll = () => {
    s = Math.max(.6, Math.min(8, s));
    const W = innerWidth, H = innerHeight, w = base.w * s, h = base.h * s, m = 60;
    x = Math.min(W - m, Math.max(m - w, x)); y = Math.min(H - m, Math.max(m - h, y));
  };
  const fit = () => { const W = innerWidth, H = innerHeight; s = Math.min(1, (H - 150) / base.h); x = (W - base.w * s) / 2; y = Math.max(40, (H - 80 - base.h * s) / 2); apply(); };
  const zoomAt = (cx, cy, k) => { const ns = Math.max(.6, Math.min(8, s * k)); k = ns / s; x = cx - (cx - x) * k; y = cy - (cy - y) * k; s = ns; clampAll(); apply(); };
  function open(src) {
    stage.innerHTML = ''; svg = src.cloneNode(true); svg.removeAttribute('style');
    svg.querySelectorAll('.zv-chip').forEach(n => n.remove());
    stage.style.display = 'block'; stage.appendChild(svg);
    view.hidden = false; document.documentElement.style.overflow = 'hidden';
    const vb = (svg.getAttribute('viewBox') || '0 0 100 100').split(/\s+/).map(Number);
    base.w = innerWidth; base.h = innerWidth * (vb[3] / vb[2]);
    svg.style.width = base.w + 'px'; svg.style.height = base.h + 'px'; svg.style.position = 'absolute'; svg.style.left = '0'; svg.style.top = '0';
    fit();
  }
  function close() { view.hidden = true; stage.innerHTML = ''; svg = null; document.documentElement.style.overflow = ''; }
  view.querySelector('.zv-bar').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const z = b.dataset.z, cx = innerWidth / 2, cy = innerHeight / 2;
    if (z === 'close') close(); else if (z === 'fit') fit(); else zoomAt(cx, cy, z === 'in' ? 1.5 : 1 / 1.5);
  });
  const pts = new Map(); let last = null, tapT = 0, moved = 0;
  stage.addEventListener('pointerdown', e => { stage.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY }); moved = 0; last = null; });
  stage.addEventListener('pointermove', e => {
    if (!pts.has(e.pointerId)) return;
    const prev = pts.get(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const a = [...pts.values()];
    if (a.length === 1) { x += e.clientX - prev.x; y += e.clientY - prev.y; moved += Math.abs(e.clientX - prev.x) + Math.abs(e.clientY - prev.y); clampAll(); apply(); }
    else if (a.length >= 2) {
      const d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y), cx = (a[0].x + a[1].x) / 2, cy = (a[0].y + a[1].y) / 2;
      if (last) { x += cx - last.cx; y += cy - last.cy; zoomAt(cx, cy, d / (last.d || d)); }
      last = { d, cx, cy }; moved += 10;
    }
  });
  const up = e => {
    pts.delete(e.pointerId); last = null;
    if (e.type === 'pointerup' && moved < 8 && pts.size === 0) { const now = Date.now(); if (now - tapT < 320) { if (s > 1.6) fit(); else zoomAt(e.clientX, e.clientY, 2.5); tapT = 0; } else tapT = now; }
  };
  stage.addEventListener('pointerup', up); stage.addEventListener('pointercancel', up);
  stage.addEventListener('wheel', e => { e.preventDefault(); zoomAt(e.clientX, e.clientY, e.deltaY < 0 ? 1.15 : 1 / 1.15); }, { passive: false });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !view.hidden) close(); });
  addEventListener('resize', () => { if (!view.hidden && svg) { const vb = (svg.getAttribute('viewBox') || '0 0 100 100').split(/\s+/).map(Number); base.w = innerWidth; base.h = innerWidth * (vb[3] / vb[2]); svg.style.width = base.w + 'px'; svg.style.height = base.h + 'px'; fit(); } });
  // 평면도마다 확대 버튼 달기 (화면이 다시 그려져도 자동으로 다시 붙는다)
  const tag = () => {
    document.querySelectorAll('svg.plan-svg').forEach(sv => {
      const host = sv.parentElement; if (!host || host.closest('#zoomView')) return;
      if (host.querySelector(':scope > .zv-chip')) return;
      host.classList.add('zv-host');
      const b = document.createElement('span'); b.className = 'zv-chip'; b.setAttribute('role', 'button'); b.textContent = '🔍 확대';
      host.appendChild(b);
    });
  };
  document.addEventListener('click', e => {
    const b = e.target.closest && e.target.closest('.zv-chip'); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    const sv = b.parentElement.querySelector('svg.plan-svg'); if (sv) open(sv);
  }, true);
  let pend = 0;
  new MutationObserver(() => { if (pend) return; pend = setTimeout(() => { pend = 0; tag(); }, 80); }).observe(document.body, { childList: true, subtree: true });
  tag();
});


/* 휴대폰: 3D 크게 보기(전체 화면) + 큰 화면 안내 */
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('#v3Big'); if (!b) return;
  document.body.classList.remove('v3-min');
  document.body.classList.toggle('v3-full');
  [60, 260].forEach(ms => setTimeout(() => { try { resizeViewer(); } catch (err) { } }, ms));
});
__smctReady(() => {
  // 단계가 바뀌면 전체 화면 3D는 닫는다
  const st = document.getElementById('studio');
  if (st) new MutationObserver(() => { const s3 = document.getElementById('step3'); if (document.body.classList.contains('v3-full') && (!s3 || s3.hidden)) document.body.classList.remove('v3-full'); }).observe(st, { attributes: true, subtree: true, attributeFilter: ['hidden'] });
  // 휴대폰 안내 (한 번 닫으면 다시 안 뜸)
  try {
    if (innerWidth <= 760 && !localStorage.getItem('smct_ai_mtip')) {
      const tip = document.createElement('div'); tip.className = 'm-tip';
      tip.innerHTML = '<div><b>휴대폰에서도 이용할 수 있습니다</b><span>3D와 견적표는 PC·태블릿의 큰 화면에서 더 자세히 보입니다. 휴대폰에서는 3D 화면의 「⤢ 크게」, 평면도의 「🔍 확대」를 눌러 크게 보세요.</span></div><button type="button" aria-label="안내 닫기">확인</button>';
      const body = document.querySelector('#studio .studio-body') || st;
      if (body) body.insertBefore(tip, body.firstChild);
      tip.querySelector('button').onclick = () => { tip.remove(); try { localStorage.setItem('smct_ai_mtip', '1'); } catch (e) { } };
    }
  } catch (e) { }
});


/* 상단 머리띠 높이를 재서, 공간 탭·3D 화면이 그 바로 아래에 붙게 한다 (노트북에서 탭이 머리띠 밑으로 들어가던 문제) */
__smctReady(() => {
  const head = document.querySelector('header.top'); if (!head) return;
  const set = () => document.documentElement.style.setProperty('--top-h', Math.round(head.getBoundingClientRect().height) + 'px');
  set(); addEventListener('resize', set);
  if (window.ResizeObserver) new ResizeObserver(set).observe(head);
});
