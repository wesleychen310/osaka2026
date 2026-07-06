const AREA_META=[
 ['karasuma','四條烏丸'],['sanjo','烏丸御池'],['kawaramachi','河原町'],['pontocho','先斗町'],['gion','祇園清水'],['okazaki','岡崎銀閣'],['rakuhoku','洛北大原'],['rakusai','洛西嵐山'],['rakunan','洛南伏見'],['uji','宇治'],['nara','奈良公園'],['nara_far','奈良遠郊']
];
const CATEGORY_META={books:{label:'書店／古書店',rank:1},food:{label:'餐廳',rank:2},drinks:{label:'飲料／咖啡／茶點',rank:3},shops:{label:'商店',rank:4},shinise:{label:'老舖',rank:5},heritage:{label:'古蹟／近代建築／老屋',rank:6},sights:{label:'景點',rank:7}};
const TEA_EXTRA={
 karasuma:['丸久小山園 西洞院店|和風茶店・抹茶|離飯店近，適合喝茶或買抹茶伴手禮。','虎屋菓寮 京都四条南座店|和菓子・喫茶|若往四条大橋方向，可排和菓子與茶。','仙太郎 大丸京都店|和菓子・外帶|百貨地下好買，適合回飯店。'],
 sanjo:['一保堂茶舗 京都本店|老舖茶店・喫茶|買茶與喝茶都適合，Day 4 老舖線核心。','柳桜園茶舗|老舖茶店・抹茶|寺町二條附近，適合買茶葉。','然花抄院 京都室町本店|老屋・和菓子喫茶|町家感強，可當老屋甜點備案。'],
 kawaramachi:['福寿園 京都本店|日本茶・四条河原町|茶、甜點、茶器都方便，離高島屋近。','無碍山房 Salon de Muge 京都髙島屋店|料亭系甘味・百貨|高島屋內休息用，抹茶甜點穩。','祇園辻利 京都高島屋店|茶甜點・百貨|高島屋內，行程中途休息方便。'],
 pontocho:['鍵善良房 四条本店|老舖甘味・祇園四条|葛切名店，先斗町、祇園前後都可接。','祇園小石|甘味・四条祇園|和風甜點備案，適合晚間前後。','甘党茶屋 梅園 河原町店|和風甘味・河原町|好找、好坐，適合臨時休息。'],
 gion:['鍵善良房 四条本店|老舖甘味・葛切|祇園主力甘味，適合清水寺下來後休息。','ぎをん小森|町家甘味・祇園白川|町家空間與白川氣氛，適合你喜歡的老屋感。','祇園辻利 祇園本店|茶甜點・祇園|觀光動線上最方便的茶甜點。','茶寮都路里 祇園本店|茶甜點・祇園|抹茶甜點選擇多，排隊時視情況。'],
 okazaki:['よーじやカフェ 銀閣寺店|和風咖啡・銀閣寺|銀閣寺周邊休息用。','茂庵|老屋喫茶・吉田山|老屋、山上、安靜，適合你喜歡的氣氛。','京都生ショコラ オーガニックティーハウス|老屋甜點・岡崎近|小店感、老屋感，適合作為甜點備案。'],
 rakuhoku:['一文字屋和輔|老舖甘味・今宮神社|炙年糕老舖，洛北必留。','かざりや|老舖甘味・今宮神社|與一文字屋並列，可二選一。','茶寮 宝泉|和風甘味・下鴨|庭園與甘味都穩，適合洛北線。','加茂みたらし茶屋|老舖甘味・下鴨|みたらし団子發源感，適合下鴨方向。'],
 rakusai:['老松 嵐山店|老舖和菓子・嵐山|和菓子老舖，嵐山散策適合。','大河內山莊 茶席|庭園茶席・嵐山|看完山莊庭園後喝茶。','茶寮 八翠|高級茶寮・嵐山|景觀與氣氛強，適合休息。'],
 rakunan:['稲荷茶寮|和風茶寮・伏見稻荷|伏見稻荷後休息。','伏見稻荷參道茶店|門前茶店・伏見|輕食、甜點、冷飲備案。','東福寺周邊茶店|寺院茶店・東福寺|東福寺散策後休息。'],
 uji:['中村藤吉本店 宇治本店|宇治茶老舖・主力|宇治茶店主攻。','伊藤久右衛門 JR宇治駅前店|宇治茶甜點・車站近|交通方便，甜點與伴手禮都好用。','辻利 宇治本店|宇治茶名店・茶甜點|宇治茶巡禮可排。','三星園上林三入本店|宇治茶老舖・茶文化|更偏茶文化與老舖感。','福寿園 宇治茶工房|茶體驗・宇治|想做茶體驗時使用。'],
 nara:['春日荷茶屋|和風茶屋・春日大社|春日大社周邊，萬葉粥與茶屋感。','中谷堂|和菓子・外帶|路過買艾草麻糬。','萬御菓子誂處 樫舎|和菓子・奈良町|奈良町和菓子，適合慢慢坐。','ほうせき箱|刨冰・奈良|熱天甜點備案。'],
 nara_far:['法隆寺參道茶店|門前茶店・斑鳩|法隆寺後休息。','長谷寺門前草餅店|門前甘味・長谷寺|長谷寺線適合。','室生寺門前茶屋|山寺茶屋・室生寺|室生寺後休息。','當麻寺門前茶店|門前茶店・當麻寺|遠郊古寺線備案。']
};
const BOOK_SECTION_AREA={kawaramachi:'kawaramachi','teramachi-shijo':'kawaramachi','kyoto-station':'rakunan',okazaki:'okazaki',gosho:'sanjo',ginkaku:'okazaki',demachiyanagi:'rakuhoku',ichijoji:'rakuhoku','gion-higashiyama':'gion',arashiyama:'rakusai'};
const SUPPLEMENTAL_PLACES=[
 {name:'新風館',typeLabel:'洋風近代・舊京都中央電話局・複合施設',description:'三条通近代建築線的主力點，舊京都中央電話局改修成商店、餐飲與飯店複合空間。適合排在烏丸御池、京都文化博物館、中京郵便局同一段看。',area:'sanjo',category:'sights',source:'supplemental',priority:'high'},
 {name:'立誠ガーデン ヒューリック京都（元立誠小学校）',typeLabel:'舊小學・近代建築・複合施設',description:'原立誠小學校校地再利用，現在是飯店、商店、餐飲與活動空間。位置在木屋町、河原町、先斗町之間，晚餐前後順路看建築很合理。',area:'kawaramachi',category:'sights',source:'supplemental',priority:'high'},
 {name:'舊京都市役所 本廳舍',typeLabel:'昭和近代建築・市政建築',description:'京都市役所本廳舍是市中心重要近代公共建築。適合接本能寺、寺町通、新風館與三条通近代建築線，不必單獨拉一段交通。',area:'sanjo',category:'sights',source:'supplemental',priority:'high'},
 {name:'相國寺',typeLabel:'禪寺・古寺・御所北',description:'京都御所北側的大寺院，適合放在洛北或出町柳、同志社、京都御苑一帶。比清水寺、金閣寺安靜，適合補一段寺院與歷史感。',area:'rakuhoku',category:'sights',source:'supplemental',priority:'high'},
 {name:'渉成園',typeLabel:'庭園・東本願寺飛地境内',description:'東本願寺附近的庭園景點，距京都站與五条不遠。適合排在回程前、雨天微調，或第五天不想跑太遠時使用。',area:'rakunan',category:'sights',source:'supplemental',priority:'high'}
];
function splitLegacy(s){const [name='',typeLabel='地點',description='']=(s||'').split('|');return {name,typeLabel,description};}
function mkid(s){return String(s||'').toLowerCase().replace(/[^a-z0-9\u3040-\u30ff\u3400-\u9fff]+/g,'-').replace(/^-|-$/g,'').slice(0,80);}
function tagsFrom(text){return [...new Set(String(text||'').split(/[・／\/、,｜|\s]+/).filter(Boolean))];}
function hasAny(text,words){return words.some(w=>String(text||'').includes(w));}
function flagFor(typeLabel,description,category){const text=`${typeLabel} ${description}`;return {shinise:hasAny(text,['老舖','老店','老咖啡','老茶','老派','創業','伝統','傳統','百年','寛延','老古書店'])||category==='books'&&hasAny(text,['古典籍','老舖']),heritage:hasAny(text,['古寺','神社','庭園','洋風','近代','昭和','大正','明治','舊','旧','老屋','町家','水路','塔頭','門跡','文化財','建築','古蹟','古都','老街','古典籍','木版畫','浮世繪'])};}
function areaLabel(area){return AREA_META.find(x=>x[0]===area)?.[1]||area;}
function normalizeCategory(category){return CATEGORY_META[category]?category:(category==='hotel'?'shops':'food');}
function makePlace({name,typeLabel,description,area,category,source='legacy',bookSection=null,priority='normal',themeIds=[],themeLabels=[]}){const cat=normalizeCategory(category);const flags=flagFor(typeLabel,description,cat);return {id:`${area}-${cat}-${mkid(name)}`,name,typeLabel,summary:description,description,area,areaLabel:areaLabel(area),category:cat,categoryLabel:CATEGORY_META[cat]?.label||cat,tags:tagsFrom(typeLabel),mapQuery:name,source,bookSection,priority,themeIds:[...new Set(themeIds)],themeLabels:[...new Set(themeLabels)],flags};}
function mergePlaces(list){const byKey=new Map();list.forEach(p=>{const key=[p.name,p.area,p.category,p.bookSection||''].join('|');if(!byKey.has(key)){byKey.set(key,{...p});return;}const old=byKey.get(key);old.themeIds=[...new Set([...(old.themeIds||[]),...(p.themeIds||[])])];old.themeLabels=[...new Set([...(old.themeLabels||[]),...(p.themeLabels||[])])];old.tags=[...new Set([...(old.tags||[]),...(p.tags||[])])];old.source=[old.source,p.source].filter(Boolean).join('+');if((p.description||'').length>(old.description||'').length){old.description=p.description;old.summary=p.summary;}old.priority=old.priority==='high'||p.priority==='high'?'high':'normal';old.flags={shinise:old.flags?.shinise||p.flags?.shinise,heritage:old.flags?.heritage||p.flags?.heritage};});return [...byKey.values()];}
function buildPlaces(){const places=[];const areas=AREA_META.map(([id,label])=>({id,label,title:window.KYOTO_AREAS?.[id]?.title||label,lead:window.KYOTO_AREAS?.[id]?.lead||''}));
 areas.forEach(a=>{const raw=window.KYOTO_AREAS?.[a.id]||{};[['food','food'],['shop','shops'],['spots','sights']].forEach(([legacy,category])=>(raw[legacy]||[]).forEach(s=>{const x=splitLegacy(s);places.push(makePlace({...x,area:a.id,category,source:'areas'}));}));[...(raw.cafe||[]),...(raw.tea||[]),...(TEA_EXTRA[a.id]||[])].forEach(s=>{const x=splitLegacy(s);places.push(makePlace({...x,area:a.id,category:'drinks',source:'areas'}));});});
 SUPPLEMENTAL_PLACES.forEach(x=>places.push(makePlace(x)));
 const bookSections=(window.KYOTO_BOOKS?.sections||[]).map(sec=>{const mapped=BOOK_SECTION_AREA[sec.id]||'kawaramachi';sec.items.forEach(x=>places.push(makePlace({name:x.name,typeLabel:x.type,description:x.note,area:mapped,category:'books',source:'books',bookSection:sec.id,priority:/必放|代表|老舖|京都代表|核心/.test(`${x.type} ${x.note}`)?'high':'normal'})));return {id:sec.id,title:sec.title,lead:sec.lead,area:mapped};});
 const themes=window.KYOTO_THEMES||{};Object.values(themes).forEach(theme=>{(theme.sections||[]).forEach(sec=>{(sec.items||[]).forEach(x=>{places.push(makePlace({name:x.name,typeLabel:x.typeLabel||'主題地點',description:x.note||'',area:x.area||'karasuma',category:x.category||'food',source:'themes',priority:/第1名|第2名|第3名|第4名|第5名|主打|必/.test(`${x.typeLabel||''} ${x.note||''}`)?'high':'normal',themeIds:[theme.id],themeLabels:[theme.title]}));});});});
 const dedup=mergePlaces(places);return {version:'places-clean3',areas,categories:CATEGORY_META,places:dedup,bookSections,bookPriority:window.KYOTO_BOOKS?.priority||{title:'優先',groups:[]},bookRoutes:window.KYOTO_BOOKS?.routes||[],themes,sourceFiles:['t202607-data.js','t202607-books-data.js','t202607-themes-data.js','t202607-places-data.js']};}
window.KYOTO_PLACES=buildPlaces();