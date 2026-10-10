(function(){
  const d=window.KYOTO2027_DATA;
  const app=document.getElementById('app');
  const esc=s=>String(s??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
  const I18N=window.KYOTO_NAME_I18N||{translate:x=>String(x||''),names:p=>({zh:String((p&&p.name)||''),original:String((p&&p.jp)||(p&&p.name)||'')})};
  const displayNames=p=>I18N.names(p||{});
  const originalName=p=>String((p&&p.jp)||(p&&p.name)||'');
  const translatedName=p=>displayNames(p).zh;
  const mapUrl=p=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.mapQuery||p.jp||p.name);
  const WALK_ORIGIN='HOTEL ARU KYOTO 三条木屋町通り';
  const walkUrl=p=>CATALOG.routeUrl(p);

  const CATALOG=window.KYOTO2027_CATALOG;
  const CAT={sights:'景點／建築／散步',convenience:'便利商店',supermarket:'超市／補貨',food:'餐廳',drinks:'咖啡／茶／甜點',shops:'商店／百貨／伴手禮',books:'書店／古書店'};
  const CAT_ORDER=['food','drinks','shops','books','sights','convenience','supermarket'];
  const allowed=new Set(CAT_ORDER);

  const REGION_ORDER=[
    ...CATALOG.geographies.map(g=>g.label),
    '四條河原町・高島屋・BAL','寺町・新京極・河原町','木屋町・先斗町・鴨川','四條烏丸・錦市場','四條烏丸西側・大宮','烏丸御池・三條通','寺町・二條・三條',
    '祇園・八坂・白川','清水寺・二三年坂・東山','南禪寺・岡崎・平安神宮','哲學之道・銀閣寺・吉田山','京都御所・神宮丸太町',
    '出町柳・下鴨・京大','一乘寺・修學院','大德寺・今宮神社','大原','貴船・鞍馬','洛北其他',
    '金閣寺・龍安寺・仁和寺','嵐山・嵯峨','京都站・八條口','伏見稻荷・伏見酒藏','東福寺・泉涌寺','山科・醍醐','宇治',
    '奈良公園・奈良町','奈良西之京・斑鳩・遠郊'
  ];
  const QUICK_REGIONS=[...CATALOG.geographies.map(g=>g.label),'祇園・八坂・白川','南禪寺・岡崎・平安神宮','哲學之道・銀閣寺・吉田山','嵐山・嵯峨','宇治'];

  const TYPE_ORDER=[
    '牛舌','鰻魚','燒肉','壽喜燒／涮涮鍋','牛肉料理','牡蠣','螃蟹','湯豆腐／豆腐','豆腐料理','天婦羅','壽司','海鮮／魚料理','蕎麥','咖哩烏龍','烏龍麵','拉麵','豬排','釜飯','鯛茶漬','雞料理','精進料理','京料理／懷石','中華料理','洋食','法式料理','咖哩','茶泡飯','川床料理','和食','其他餐廳',
    '咖啡／喫茶','日本茶／抹茶','和菓子／甘味','冰品／刨冰','甜點','其他飲品／茶點','商店／百貨／伴手禮','書店／古書店'
  ];
  const QUICK_TYPES=['牛舌','鰻魚','燒肉','壽喜燒／涮涮鍋','湯豆腐／豆腐','牡蠣','螃蟹','咖啡／喫茶','日本茶／抹茶','書店／古書店'];

  function textOf(p){
    return [p.name,p.jp,p.type,p.typeLabel,p.description,p.summary,p.note,p.bookSection,(p.tags||[]).join(' '),(p.typeLabels||[]).join(' ')].filter(Boolean).join(' ');
  }

  function primaryKind(p){
    const t=textOf(p);
    const rules=[
      ['牛舌',/牛舌|牛たん|牛タン/i],
      ['鰻魚',/鰻|うなぎ|ウナギ/i],
      ['燒肉',/燒肉|焼肉|yakiniku/i],
      ['壽喜燒',/壽喜燒|寿喜焼|すき焼|すきやき/i],
      ['牡蠣',/牡蠣|的矢かき|かき專門|かき専門|カキ専門/i],
      ['螃蟹',/螃蟹|蟹料理|かに道楽|かに料理/i],
      ['湯豆腐',/湯豆腐|ゆどうふ|湯どうふ/i],
      ['豆腐料理',/豆腐料理|豆水樓|とうふ料理|豆腐庵/i],
      ['天婦羅',/天婦羅|天ぷら|天麩羅/i],
      ['壽司',/壽司|寿司|鮨|すし/i],
      ['海鮮／魚料理',/海鮮|魚料理|刺身|鯖|魚力/i],
      ['蕎麥',/蕎麥|蕎麦|そば/i],
      ['咖哩烏龍',/咖哩烏龍|カレーうどん/i],
      ['烏龍麵',/烏龍|うどん|饂飩/i],
      ['拉麵',/拉麵|ラーメン/i],
      ['豬排',/豬排|とんかつ|トンカツ/i],
      ['釜飯',/釜飯|釜めし/i],
      ['鯛茶漬',/鯛茶漬|鯛茶漬け/i],
      ['雞料理',/雞料理|鶏料理|鳥料理|焼鳥|やきとり/i],
      ['精進料理',/精進料理|鐵鉢|鉄鉢/i],
      ['京料理／懷石',/京料理|懷石|懐石|会席|會席|料亭/i],
      ['中華料理',/中華|四川|中国料理|中國料理/i],
      ['洋食',/洋食|老洋食/i],
      ['法式料理',/法式|フレンチ|French/i],
      ['咖哩',/咖哩|カレー/i],
      ['茶泡飯',/茶泡飯|茶漬|茶づけ/i],
      ['川床料理',/川床|納涼床/i],
      ['牛肉料理',/牛肉料理|和牛|牛肉|肉亭/i],
      ['冰品／刨冰',/刨冰|かき氷|冰品|アイス|きなな/i],
      ['和菓子／甘味',/和菓子|甘味|葛切|みたらし|草餅|麻糬|餅|あぶり餅|団子|だんご/i],
      ['日本茶／抹茶',/宇治茶|日本茶|抹茶|茶舗|茶舖|茶寮|茶工房|辻利|中村藤吉|伊藤久右衛門|福寿園|一保堂|丸久小山園|岸松園/i],
      ['咖啡／喫茶',/咖啡|珈琲|喫茶|coffee|カフェ|Cafe|Starbucks|Arabica|藍瓶|Blue Bottle/i],
      ['甜點',/甜點|甜品|蛋糕|ケーキ|ショコラ|布丁|プリン|蘋果派|アップルパイ|水果/i]
    ];
    for(const [label,re] of rules){if(re.test(t))return label;}
    const cats=p.categories||[];
    if(cats.includes('food')||p.category==='food'||/餐廳/.test(p.type||''))return /和食/.test(t)?'和食':'其他餐廳';
    if(cats.includes('drinks')||p.category==='drinks')return '其他飲品／茶點';
    if(cats.includes('shops')||p.category==='shops')return '商店／百貨／伴手禮';
    if(cats.includes('books')||p.category==='books')return '書店／古書店';
    return p.type||'地點';
  }

  function regionFor(p){
    if(p.geos?.length)return CATALOG.geoMap[p.geos[0]].label;
    if(p.area==='shijo-west')return p.areaLabel||'四條烏丸西側・大宮';
    const t=textOf(p),b=p.bookSection;
    if(b==='teramachi-shijo')return '寺町・新京極・河原町';
    if(b==='kawaramachi')return '寺町・二條・三條';
    if(b==='kyoto-station')return '京都站・八條口';
    if(b==='okazaki')return '南禪寺・岡崎・平安神宮';
    if(b==='gosho')return '京都御所・神宮丸太町';
    if(b==='ginkaku')return '哲學之道・銀閣寺・吉田山';
    if(b==='demachiyanagi')return '出町柳・下鴨・京大';
    if(b==='ichijoji')return '一乘寺・修學院';
    if(b==='gion-higashiyama')return '清水寺・二三年坂・東山';
    if(b==='arashiyama')return '嵐山・嵯峨';
    if(p.area==='karasuma')return '四條烏丸・錦市場';
    if(p.area==='sanjo')return /寺町|一保堂|柳桜園|鳩居堂|宮脇|本家尾張屋/.test(t)?'寺町・二條・三條':'烏丸御池・三條通';
    if(p.area==='kawaramachi')return /高島屋|髙島屋|T8|BAL|藤井大丸|丸善|蔦屋/.test(t)?'四條河原町・高島屋・BAL':'寺町・新京極・河原町';
    if(p.area==='pontocho')return '木屋町・先斗町・鴨川';
    if(p.area==='gion')return /清水|二寧|二年|三年|東山|八坂之塔|阿古屋|おかべ家|奥丹 清水|SODOH/.test(t)?'清水寺・二三年坂・東山':'祇園・八坂・白川';
    if(p.area==='okazaki')return /銀閣|哲学|哲學|浄土寺|GOSPEL|よーじやカフェ|おめん|茂庵|吉田/.test(t)?'哲學之道・銀閣寺・吉田山':'南禪寺・岡崎・平安神宮';
    if(p.area==='rakuhoku'){
      if(/一乗寺|一乘寺|恵文|マヤルカ|石川古本|アリバイ|詩仙堂|圓光寺|円光寺|曼殊院|修學院/.test(t))return '一乘寺・修學院';
      if(/下鴨|出町|百万遍|宝泉|寶泉|みたらし|WIFE&HUSBAND/.test(t))return '出町柳・下鴨・京大';
      if(/大德寺|大徳寺|今宮|一文字屋|かざりや|大仙院|龍源院|瑞峯院|高桐院/.test(t))return '大德寺・今宮神社';
      if(/大原|三千院|寶泉院|宝泉院|寂光院|芹生/.test(t))return '大原';
      if(/貴船|鞍馬|川床|右源太|ひろ文|べにや/.test(t))return '貴船・鞍馬';
      return '洛北其他';
    }
    if(p.area==='rakusai')return /嵐山|嵯峨|天龍寺|渡月|竹林|老松|廣川|広川|HANANA|八翠|MUNI|昇龍苑/.test(t)?'嵐山・嵯峨':'金閣寺・龍安寺・仁和寺';
    if(p.area==='rakunan'){
      if(/京都駅|京都站|ヨドバシ|イオンモール|八条|八條/.test(t))return '京都站・八條口';
      if(/伏見|稲荷|稻荷|酒藏|酒蔵|鳥せい|月桂冠|黄桜|黃櫻/.test(t))return '伏見稻荷・伏見酒藏';
      if(/東福寺|泉涌寺|雲龍院/.test(t))return '東福寺・泉涌寺';
      return '山科・醍醐';
    }
    if(p.area==='uji')return '宇治';
    if(p.area==='nara')return '奈良公園・奈良町';
    if(p.area==='nara_far')return '奈良西之京・斑鳩・遠郊';
    return p.areaLabel||'其他';
  }

  function regionScore(p){
    if(p.bookSection)return 5;
    return /寺町|清水|銀閣|哲学|哲學|下鴨|一乗寺|一乘寺|大德寺|大徳寺|大原|貴船|嵐山|京都駅|京都站|伏見|東福寺|山科|醍醐/.test(textOf(p))?4:2;
  }

  function buildCatalog(){
    return CATALOG.items.filter(p=>p.categories.some(c=>allowed.has(c))).map((p,i)=>({...p,region:regionFor(p),idx:i}));
  }

  const catalog=buildCatalog();
  catalog.forEach(p=>p.primaryKind=p.kind||primaryKind(p));
  let viewMode='region',query='',nearbyScope='all',geoFilter='all',walkFilter='all',kindFilter='all';

  function filterBlock(key,label,options){
    return `<section class="quick-block button-filter"><div class="quick-label">${esc(label)}</div><div class="quick-buttons" role="group" aria-label="${esc(label)}">${options.map(([value,text])=>`<button type="button" data-filter="${key}" data-value="${esc(value)}" aria-pressed="${value==='all'}" class="${value==='all'?'active':''}">${esc(text)}</button>`).join('')}</div></section>`;
  }

  const gptPrompt=p=>CATALOG.introPrompt(p);

  function menuPrompt(p){
    return `請查詢「${p.jp||p.name}」目前最新公開菜單，以官方或較新資料優先。

輸出手機友善 2 欄 Markdown 表格：
| 原文＋價格 | 繁中＋約 TWD |
|---|---|

規則：
* 保留原文品名與原始價格
* 翻成自然台灣繁中
* 台幣用最新合理匯率粗估，四捨五入到整數
* 以官方或較新資料優先
* 文末推薦

Google Maps 搜尋名稱：${p.mapQuery||p.jp||p.name}。`;
  }

  const chatUrl=prompt=>'https://chatgpt.com/?q='+encodeURIComponent(prompt);
  const gptUrl=p=>chatUrl(gptPrompt(p));
  const menuUrl=p=>chatUrl(menuPrompt(p));
  const isDining=p=>p.categories?p.categories.some(c=>c==='food'||c==='drinks'):/餐廳|咖啡|茶|甜點|甘味|喫茶|飲料|和菓子|冰品/.test(`${p.type||''} ${(p.tags||[]).join(' ')}`);
  const actions=p=>`<div class="actions${isDining(p)?' has-menu':''}">${window.KYOTO2027_GPT_ACTIONS.link(gptUrl(p),'✨ GPT 簡介','gpt')}<a class="map" href="${mapUrl(p)}" target="_blank" rel="noopener">📍 Google Maps</a><a class="walk route-action" data-route-mode="${CATALOG.routeMode(p)}" href="${walkUrl(p)}" target="_blank" rel="noopener">${CATALOG.routeLabel(p)}</a>${isDining(p)?window.KYOTO2027_GPT_ACTIONS.link(menuUrl(p),'📋 最新菜單','gpt menu-action'):''}${p.officialUrl?`<a class="official-action" href="${esc(p.officialUrl)}" target="_blank" rel="noopener">🌐 官方網站</a>`:p.referenceUrl?`<a class="official-action" href="${esc(p.referenceUrl)}" target="_blank" rel="noopener">🔎 查證資料</a>`:''}</div>`;

  function manualCard(p){
    p={...CATALOG.items.find(x=>x.name===CATALOG.canonical(p.jp||p.name)),...p};
    const kind=p.kind||primaryKind(p),n=displayNames(p);
    return `<article class="card locked-card"><div class="type">${esc(kind)}</div><h3>${esc(n.zh)}</h3>${n.zh!==n.original?`<div class="map-name place-original" lang="ja">${esc(n.original)}</div>`:''}<div class="walk-origin">🚶 ARU 出發：${esc(CATALOG.walkText(p))}</div><p class="note">${esc(p.note)}</p><div class="tags">${(p.tags||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div>${actions(p)}</article>`;
  }

  function cardHtml(p){
    const type=[...p.typeLabels].slice(0,2).join('／'),n=displayNames(p);
    return `<article class="card catalog-card"><div class="type">${esc(p.primaryKind||primaryKind(p))}</div><h3>${esc(n.zh)}</h3>${n.zh!==n.original?`<div class="map-name place-original" lang="ja">${esc(n.original)}</div>`:''}<div class="walk-origin">🚶 ARU 出發：${esc(CATALOG.walkText(p))}</div><div class="subtype">${p.kiyamachiPick?'⭐ 木屋町精選 · ':''}${esc(p.geos.map(g=>CATALOG.geoMap[g].label).join(" · ")||p.region)} · ${esc(type)}</div><p class="note">${esc(p.description||'既有收錄點。')}</p>${actions(p)}</article>`;
  }

  function flightCard(f){
    return `<article class="trip-card"><div class="trip-card-head"><div><span class="trip-kicker">${esc(f.direction)}</span><h3>${esc(f.airline)} ${esc(f.flight)}</h3></div><span class="trip-status confirmed">已確認</span></div><div class="trip-route"><b>${esc(f.from)}</b><span>${esc(f.departure)} → ${esc(f.arrival)}</span><b>${esc(f.to)}</b></div><div class="trip-meta"><span>📅 ${esc(f.date)}</span><span>🎫 ${esc(f.fareFamily)}</span></div></article>`;
  }

  function hotelCard(h){
    const statusClass=h.status==='已確認'?'confirmed':'tentative';
    const nearby=(window.KYOTO2027_NEARBY&&window.KYOTO2027_NEARBY.categories)||[];
    const nearbyLinks=`<a href="nearby.html?v=20261008-names1">🧭 全部飯店周邊</a><a href="nearby.html?v=20261008-names1&cat=kiyamachi-picks">⭐ 木屋町精選</a><a href="nearby.html?v=20261008-names1&cat=daily">🏠 日常生活</a><a href="nearby.html?v=20261008-names1&cat=center-dining">🍽️ 市中心餐廳</a><a href="nearby.html?v=20261008-names1&cat=center-cafe">☕ 市中心咖啡／茶</a>`+CATALOG.cafeThemes.map(t=>`<a href="nearby.html?v=20261008-names1&cat=${t.id}">${t.id==='old-tea'?'🍵':'🏛️'} ${esc(t.label)}</a>`).join('')+CATALOG.geographies.filter(g=>['takashimaya','daimaru','teramachi','kiyamachi','bal','karasuma','nishiki'].includes(g.id)).map(g=>`<a href="nearby.html?v=20261008-names1&geo=${g.id}">📍 ${esc(g.label)}</a>`).join('')+nearby.map(c=>`<a href="nearby.html?v=20261008-names1&cat=${encodeURIComponent(c.id)}">${esc(c.icon)} ${esc(c.label)}</a>`).join('');
    const hn=displayNames({name:h.name,jp:h.jp});
    return `<article class="trip-card hotel-card"><div class="trip-card-head"><div><span class="trip-kicker">住宿基地</span><h3>${esc(hn.zh)}</h3>${hn.zh!==hn.original?`<div class="hotel-jp place-original" lang="ja">${esc(hn.original)}</div>`:''}</div><span class="trip-status ${statusClass}">${esc(h.status)}</span></div><div class="trip-meta hotel-meta"><span>📅 ${esc(h.stay)}・${esc(h.nights)} 晚</span><span>👥 ${esc(h.guests)} 人</span></div><div class="hotel-actions"><a class="hotel-map" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.mapQuery||h.name)}" target="_blank" rel="noopener">📍 Google Maps</a><a class="hotel-nearby-main" href="nearby.html?v=20261008-names1">🧭 飯店周邊總覽</a></div><div class="hotel-nearby"><div class="hotel-nearby-title">ARU 生活圈・類型與街區</div><div class="hotel-nearby-links">${nearbyLinks}</div></div></article>`;
  }

  const homeLocked=d.places;

  app.innerHTML=`
    <header class="hero"><div class="eyebrow">KYOTO · SAKURA 2027</div><h1>${esc(d.trip.title)}</h1><p>${esc(d.trip.dates)} · ${esc(d.trip.people)} 人 · 基地 ${esc(d.trip.base)}</p><div class="pills"><span>🌸 賞櫻主線</span><span>🏨 ${esc(d.trip.hotelStatus)}：${esc(I18N.translate(d.accommodation.name))}</span><span>🌸 寺院・庭園・河岸都收錄</span></div><div class="sakura-entry-actions"><a class="sakura-main-link" href="sakura.html?v=20261008-names1">🌸 櫻花景點大集合 · ${window.KYOTO2027_SAKURA.places.length} 個地點</a></div></header>
    <section class="sakura-home-section"><div class="section-title"><h2>櫻花景點大集合</h2><small>清水寺、建仁寺，連小寺院與街邊櫻花也算</small></div><p class="filter-hint">依地區、類型、花期交叉篩選。ARU 步行 30 分內走路，超過自動切大眾運輸。</p><div class="sakura-entry-actions"><a href="sakura.html?v=20261008-names1">🌸 全部櫻花景點</a><a href="sakura.html?v=20261008-names1&route=walking">🚶 飯店步行圈</a><a href="sakura.html?v=20261008-names1&type=temple">🏯 寺院賞櫻</a><a href="sakura.html?v=20261008-names1&type=river">🌊 河岸・疏水</a><a href="sakura.html?v=20261008-names1&area=gion">📍 祇園・清水・東山</a><a href="sakura.html?v=20261008-names1&area=east">📍 岡崎・哲學之道</a></div></section>
    <section class="ueji-home-section" style="margin:22px 0;padding:16px;border:1px solid #e8d5df;border-radius:18px;background:linear-gradient(110deg,#fff6f9,#f5f7ef)">
      <div class="section-title"><h2>🌿 小川治兵衛・京都庭園散策</h2><small>明治庭園・琵琶湖疏水・近代史・花見</small></div>
      <p class="filter-hint">第七代小川治兵衛（1860–1933）專區：「植治」是家族造園屋號。走訪無鄰菴、對龍山莊、平安神宮、圓山公園等名園；精選可入內參觀、庭園餐廳與飯店，並清楚區分七代作品、修景紀錄、八代作品及歸屬待考。</p>
      <div class="sakura-entry-actions">
        <a class="ueji-main-link" href="ueji.html?v=20261010-ueji1" style="background:#75465c;color:#fff;border-color:#75465c">🌿 第七代小川治兵衛・完整專區</a>
        <a href="ueji.html?v=20261010-ueji1&filter=ticket#ueji-list">🎫 可以進去參觀</a>
        <a href="ueji.html?v=20261010-ueji1&filter=eat#ueji-list">🍵 庭園料理・住宿</a>
        <a href="ueji.html?v=20261010-ueji1&filter=sakura#ueji-list">🌸 賞櫻串遊</a>
      </div>
    </section>
    <section class="modern-home-section"><div class="section-title"><h2>京都洋館・近代建築大全</h2><small>明治洋館・昭和 Modernism・現役咖啡／餐廳／銀行／商店</small></div><p class="filter-hint">完整收錄洋館與近代西洋建築；每筆都有 Google Maps、ARU 路線、GPT 圖文介紹。</p><div class="sakura-entry-actions"><a class="modern-main-link" href="modern.html?v=20261008-names1">🏛️ 全部洋館・近代建築</a><a href="modern.html?v=20261008-names1&mode=showa">☕ 昭和洋館／老喫茶</a><a href="modern.html?v=20261008-names1&mode=open">🚪 可入內／使用中</a><a href="modern.html?v=20261008-names1&use=cafe">☕ 咖啡／喫茶建築</a></div></section>
    <section class="booking-section"><div class="section-title"><h2>航班與住宿</h2><small>公開版只保留基本行程；訂單、金額、座位與行李資訊在私人區</small></div><div class="sakura-entry-actions"><a href="control/">🔐 花見京旅私人區</a></div><div class="trip-summary-grid">${flightCard(d.outboundFlight)}${flightCard(d.returnFlight)}${hotelCard(d.accommodation)}</div></section>
    <section><div class="section-title"><h2>每日骨架</h2><small>依花況逐日填入</small></div><div class="days">${d.days.map((x,i)=>`<div class="day"><b>${x}</b><small>Day ${i+1} · 待排</small></div>`).join('')}</div></section>
    <section class="highlights-section"><div class="section-title"><h2>精華區</h2><small>重點探訪｜本次特別值得看的景點、庭園與餐廳</small></div><div class="grid locked-grid">${homeLocked.map(manualCard).join('')}</div></section>
    <section class="quick-index"><div class="section-title"><h2>快速入口</h2><small>常用大區與主力類型直接進</small></div><div class="quick-block"><div class="quick-label">地區</div><div class="quick-buttons">${QUICK_REGIONS.map(r=>`<button data-quick-region="${esc(r)}">${esc(r)}</button>`).join('')}</div></div><div class="quick-block"><div class="quick-label">主力類型</div><div class="quick-buttons">${QUICK_TYPES.filter(t=>catalog.some(p=>p.primaryKind===t)).map(t=>`<button data-quick-type="${esc(t)}">${esc(t)}</button>`).join('')}</div></div></section>
    <section id="catalog"><div class="section-title"><h2>京都全部地點索引</h2><small id="resultCount"></small></div><div class="catalog-tools"><label class="sr-only" for="placeSearch">搜尋京都地點</label><input id="placeSearch" type="search" placeholder="搜尋店名、料理、類型、地區…" autocomplete="off"><div class="catalog-button-filters">${filterBlock('nearbyScope','範圍',[['all','京都全部地點'],['nearby','飯店周邊：河原町到烏丸'],['other','其他地區']])}${filterBlock('geoFilter','地理區域',[['all','全部街區'],...CATALOG.geographies.map(g=>[g.id,g.label])])}${filterBlock('walkFilter','ARU 步行圈',[['all','不限距離'],['10','10 分內'],['20','20 分內'],['30','30 分內'],['far','30 分以上'],['unknown','待確認']])}${filterBlock('kindFilter','主力類型',[['all','全部類型'],...[...new Set(catalog.map(p=>p.primaryKind))].sort((a,b)=>a.localeCompare(b,'zh-Hant')).map(k=>[k,k])])}</div><div class="index-tabs"><button class="index-tab active" data-mode="region">地區 → 主力類型 → 店家</button><button class="index-tab" data-mode="type">主力類型 → 地區 → 店家</button></div></div><p class="filter-hint">從 ARU 出發，概估步行 30 分內提供步行路線；超過或距離待確認時預設大眾運輸。</p><button type="button" class="reset-filters" id="clearCatalogFilters">清除篩選</button><div id="catalogGroups"></div></section>
    <section><div class="section-title"><h2>待確認</h2></div>${d.pending.map(x=>`<div class="pending">${esc(x)}</div>`).join('')}</section>`;

  document.querySelector('.catalog-button-filters').addEventListener('click',e=>{
    const b=e.target.closest('[data-filter]');if(!b)return;
    const key=b.dataset.filter,value=b.dataset.value;
    if(key==='nearbyScope')nearbyScope=value;if(key==='geoFilter')geoFilter=value;
    if(key==='walkFilter')walkFilter=value;if(key==='kindFilter')kindFilter=value;
    renderCatalog();
  });
  document.getElementById('placeSearch').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();renderCatalog();});
  document.querySelectorAll('.index-tab').forEach(b=>b.addEventListener('click',()=>{viewMode=b.dataset.mode;document.querySelectorAll('.index-tab').forEach(x=>x.classList.toggle('active',x===b));renderCatalog();}));

  function filteredCatalog(){
    return catalog.filter(p=>(nearbyScope==='all'||(nearbyScope==='nearby'?p.nearby:!p.nearby))&&(geoFilter==='all'||p.geos.includes(geoFilter))&&(kindFilter==='all'||p.primaryKind===kindFilter)&&(walkFilter==='all'||(walkFilter==='unknown'?!p.walkMeta:walkFilter==='far'?p.walkMeta?.max>30:p.walkMeta&&p.walkMeta.max<=Number(walkFilter)))).filter(p=>I18N.normalize([I18N.searchText(p),p.description,p.region,p.geos.map(g=>CATALOG.geoMap[g].label).join(' '),p.primaryKind,p.typeLabels.join(' '),p.categories.map(c=>CAT[c]).join(' ')].join(' ')).includes(I18N.normalize(query)));
  }

  function regionAnchor(region){const i=REGION_ORDER.indexOf(region);return `region-${i>=0?i:'x'}`;}
  function typeAnchor(type){const i=TYPE_ORDER.indexOf(type);return `type-${i>=0?i:'x'}`;}
  function regionOrderFor(items){const present=[...new Set(items.map(x=>x.region))];return [...REGION_ORDER,...present.filter(x=>!REGION_ORDER.includes(x))].filter(x=>present.includes(x));}
  function typeOrderFor(items){const present=[...new Set(items.map(x=>x.primaryKind))];return [...TYPE_ORDER,...present.filter(x=>!TYPE_ORDER.includes(x))].filter(x=>present.includes(x));}

  function renderRegionFirst(items){
    return regionOrderFor(items).map((region,ri)=>{
      const list=items.filter(p=>p.region===region);
      const sections=typeOrderFor(list).map(kind=>{
        const kindItems=list.filter(p=>p.primaryKind===kind).sort((a,b)=>a.name.localeCompare(b.name,'ja'));
        return `<section class="subgroup"><h4>${esc(kind)}<span>${kindItems.length}</span></h4><div class="grid region-grid">${kindItems.map(cardHtml).join('')}</div></section>`;
      }).join('');
      return `<details class="index-group" id="${regionAnchor(region)}" ${query||geoFilter!=='all'||kindFilter!=='all'||ri<2?'open':''}><summary><span>${esc(region)}</span><b>${list.length}</b></summary>${sections}</details>`;
    }).join('');
  }

  function renderTypeFirst(items){
    return typeOrderFor(items).map((kind,ki)=>{
      const kindAll=items.filter(p=>p.primaryKind===kind);
      const sections=regionOrderFor(kindAll).map(region=>{
        const regionItems=kindAll.filter(p=>p.region===region).sort((a,b)=>a.name.localeCompare(b.name,'ja'));
        return `<section class="subgroup"><h4>${esc(region)}<span>${regionItems.length}</span></h4><div class="grid region-grid">${regionItems.map(cardHtml).join('')}</div></section>`;
      }).join('');
      return `<details class="index-group" id="${typeAnchor(kind)}" ${query||geoFilter!=='all'||kindFilter!=='all'||ki<2?'open':''}><summary><span>${esc(kind)}</span><b>${kindAll.length}</b></summary>${sections}</details>`;
    }).join('');
  }

  function renderCatalog(){
    const state={nearbyScope,geoFilter,walkFilter,kindFilter};
    document.querySelectorAll('[data-filter]').forEach(b=>{const active=state[b.dataset.filter]===b.dataset.value;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    const items=filteredCatalog();
    document.getElementById('resultCount').textContent=`共 ${items.length} 個店家／地點`;
    document.getElementById('catalogGroups').innerHTML=(viewMode==='region'?renderRegionFirst(items):renderTypeFirst(items))||'<div class="empty">沒有符合條件的項目。</div>';
  }

  function clearCatalogFilters(){nearbyScope='all';geoFilter='all';walkFilter='all';kindFilter='all';query='';document.getElementById('placeSearch').value='';}
  document.getElementById('clearCatalogFilters').addEventListener('click',()=>{clearCatalogFilters();renderCatalog();});
  function setMode(mode){viewMode=mode;document.querySelectorAll('.index-tab').forEach(x=>x.classList.toggle('active',x.dataset.mode===mode));renderCatalog();}
  function jumpTo(id){requestAnimationFrame(()=>{const e=document.getElementById(id);if(!e)return;if(e.tagName==='DETAILS')e.open=true;e.scrollIntoView({behavior:'smooth',block:'start'});});}
  document.querySelectorAll('[data-quick-region]').forEach(b=>b.addEventListener('click',()=>{const r=b.dataset.quickRegion;clearCatalogFilters();const geo=CATALOG.geographies.find(g=>g.label===r);if(geo){geoFilter=geo.id;}setMode('region');jumpTo(document.getElementById(regionAnchor(r))?regionAnchor(r):'catalog');}));
  document.querySelectorAll('[data-quick-type]').forEach(b=>b.addEventListener('click',()=>{const t=b.dataset.quickType;clearCatalogFilters();setMode('type');jumpTo(typeAnchor(t));}));

  renderCatalog();
})();
