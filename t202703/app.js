(function(){
  const d = window.KYOTO2027_DATA;
  const app = document.getElementById('app');
  const esc = s => String(s ?? '').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
  const mapUrl = p => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.mapQuery || p.jp || p.name);
  const CAT = {food:'餐廳',drinks:'咖啡／茶／甜點',shops:'商店／百貨／伴手禮',books:'書店／古書店'};
  const CAT_ORDER = ['food','drinks','shops','books'];
  const allowed = new Set(CAT_ORDER);
  const REGION_ORDER = [
    '四條河原町・高島屋・BAL','寺町・新京極・河原町','木屋町・先斗町・鴨川','四條烏丸・錦市場','烏丸御池・三條通','寺町・二條・三條',
    '祇園・八坂・白川','清水寺・二三年坂・東山','南禪寺・岡崎・平安神宮','哲學之道・銀閣寺・吉田山','京都御所・神宮丸太町',
    '出町柳・下鴨・京大','一乘寺・修學院','大德寺・今宮神社','大原','貴船・鞍馬','洛北其他',
    '金閣寺・龍安寺・仁和寺','嵐山・嵯峨','京都站・八條口','伏見稻荷・伏見酒藏','東福寺・泉涌寺','山科・醍醐','宇治',
    '奈良公園・奈良町','奈良西之京・斑鳩・遠郊'
  ];
  const QUICK_REGIONS = [
    '四條河原町・高島屋・BAL','寺町・新京極・河原町','木屋町・先斗町・鴨川','祇園・八坂・白川',
    '南禪寺・岡崎・平安神宮','哲學之道・銀閣寺・吉田山','嵐山・嵯峨','宇治'
  ];

  function textOf(p){ return `${p.name||''} ${p.typeLabel||''} ${p.description||p.summary||''} ${p.bookSection||''}`; }
  function regionFor(p){
    const t = textOf(p);
    const b = p.bookSection;
    if(b==='teramachi-shijo') return '寺町・新京極・河原町';
    if(b==='kawaramachi') return '寺町・二條・三條';
    if(b==='kyoto-station') return '京都站・八條口';
    if(b==='okazaki') return '南禪寺・岡崎・平安神宮';
    if(b==='gosho') return '京都御所・神宮丸太町';
    if(b==='ginkaku') return '哲學之道・銀閣寺・吉田山';
    if(b==='demachiyanagi') return '出町柳・下鴨・京大';
    if(b==='ichijoji') return '一乘寺・修學院';
    if(b==='gion-higashiyama') return '清水寺・二三年坂・東山';
    if(b==='arashiyama') return '嵐山・嵯峨';
    if(p.area==='karasuma') return '四條烏丸・錦市場';
    if(p.area==='sanjo') return /寺町|一保堂|柳桜園|鳩居堂|宮脇|本家尾張屋/.test(t) ? '寺町・二條・三條' : '烏丸御池・三條通';
    if(p.area==='kawaramachi') return /高島屋|髙島屋|T8|BAL|藤井大丸|丸善|蔦屋/.test(t) ? '四條河原町・高島屋・BAL' : '寺町・新京極・河原町';
    if(p.area==='pontocho') return '木屋町・先斗町・鴨川';
    if(p.area==='gion') return /清水|二寧|二年|三年|東山|八坂之塔|阿古屋|おかべ家|奥丹 清水|SODOH/.test(t) ? '清水寺・二三年坂・東山' : '祇園・八坂・白川';
    if(p.area==='okazaki') return /銀閣|哲学|哲學|浄土寺|GOSPEL|よーじやカフェ|おめん|茂庵|吉田/.test(t) ? '哲學之道・銀閣寺・吉田山' : '南禪寺・岡崎・平安神宮';
    if(p.area==='rakuhoku'){
      if(/一乗寺|一乘寺|恵文|マヤルカ|石川古本|アリバイ|詩仙堂|圓光寺|円光寺|曼殊院|修學院/.test(t)) return '一乘寺・修學院';
      if(/下鴨|出町|百万遍|宝泉|寶泉|みたらし|WIFE&HUSBAND/.test(t)) return '出町柳・下鴨・京大';
      if(/大德寺|大徳寺|今宮|一文字屋|かざりや|大仙院|龍源院|瑞峯院|高桐院/.test(t)) return '大德寺・今宮神社';
      if(/大原|三千院|寶泉院|宝泉院|寂光院|芹生/.test(t)) return '大原';
      if(/貴船|鞍馬|川床|右源太|ひろ文|べにや/.test(t)) return '貴船・鞍馬';
      return '洛北其他';
    }
    if(p.area==='rakusai') return /嵐山|嵯峨|天龍寺|渡月|竹林|老松|廣川|広川|HANANA|八翠|MUNI|昇龍苑/.test(t) ? '嵐山・嵯峨' : '金閣寺・龍安寺・仁和寺';
    if(p.area==='rakunan'){
      if(/京都駅|京都站|ヨドバシ|イオンモール|八条|八條/.test(t)) return '京都站・八條口';
      if(/伏見|稲荷|稻荷|酒藏|酒蔵|鳥せい|月桂冠|黄桜|黃櫻/.test(t)) return '伏見稻荷・伏見酒藏';
      if(/東福寺|泉涌寺|雲龍院/.test(t)) return '東福寺・泉涌寺';
      return '山科・醍醐';
    }
    if(p.area==='uji') return '宇治';
    if(p.area==='nara') return '奈良公園・奈良町';
    if(p.area==='nara_far') return '奈良西之京・斑鳩・遠郊';
    return p.areaLabel || '其他';
  }

  function regionScore(p){
    if(p.bookSection) return 5;
    const t=textOf(p);
    if(/寺町|清水|銀閣|哲学|哲學|下鴨|一乗寺|一乘寺|大德寺|大徳寺|大原|貴船|嵐山|京都駅|京都站|伏見|東福寺|山科|醍醐/.test(t)) return 4;
    return 2;
  }

  function buildCatalog(){
    const raw = (window.KYOTO_PLACES && window.KYOTO_PLACES.places) || [];
    const m = new Map();
    raw.filter(p=>allowed.has(p.category)).forEach(p=>{
      const key = String(p.name||'').trim().toLowerCase();
      if(!key) return;
      const cat = p.category;
      const region = regionFor(p);
      const score = regionScore(p);
      const desc = p.description || p.summary || '';
      if(!m.has(key)) m.set(key,{name:p.name,mapQuery:p.mapQuery||p.name,categories:new Set([cat]),typeLabels:new Set([p.typeLabel||CAT[cat]]),description:desc,region,regionScore:score});
      else {
        const x=m.get(key); x.categories.add(cat); x.typeLabels.add(p.typeLabel||CAT[cat]);
        if(desc.length > x.description.length) x.description=desc;
        if(score > x.regionScore){x.region=region;x.regionScore=score;}
      }
    });
    return [...m.values()].map((x,i)=>({...x,categories:[...x.categories],typeLabels:[...x.typeLabels],idx:i}));
  }

  const catalog = buildCatalog();
  let viewMode='region';
  let query='';

  function gptPrompt(p){
    const cats = p.categories ? p.categories.map(c=>CAT[c]||c).join('、') : (p.type||'地點');
    const region = p.region ? `地區：${p.region}。` : '';
    const known = p.description || p.intro || p.note || '';
    return `請用台灣繁體中文介紹「${p.jp||p.name}」。背景：2027/3/27–4/5 京都賞櫻旅行，4人同行，住宿基地四條河原町。${region}分類：${cats}。目前筆記：${known}。請先查證最新公開資料，整理：1.核心特色 2.歷史／建築／庭園或店家背景 3.櫻花季適合的造訪時段（如適用）4.建議停留時間 5.周邊順遊 6.餐廳請補招牌、價位與訂位；商店請補值得買的品項。`;
  }
  const gptUrl = p => 'https://chatgpt.com/?q=' + encodeURIComponent(gptPrompt(p));

  function manualCard(p){
    return `<article class="card locked-card"><div class="type">${esc(p.type)}</div><h3>${esc(p.jp||p.name)}</h3><p class="note">${esc(p.note)}</p><div class="tags">${(p.tags||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="actions"><a class="gpt" href="${gptUrl(p)}" target="_blank" rel="noopener">✨ GPT 簡介</a><a class="map" href="${mapUrl(p)}" target="_blank" rel="noopener">📍 Google Maps</a></div></article>`;
  }

  function cardHtml(p){
    const cats=p.categories.map(c=>CAT[c]||c).join('・');
    const type=[...p.typeLabels].slice(0,2).join('／');
    return `<article class="card catalog-card"><div class="type">${esc(cats)}</div><h3>${esc(p.name)}</h3><div class="subtype">${esc(type)}</div><p class="note">${esc(p.description||'既有收錄點。')}</p><div class="actions"><a class="gpt" href="${gptUrl(p)}" target="_blank" rel="noopener">✨ GPT 簡介</a><a class="map" href="${mapUrl(p)}" target="_blank" rel="noopener">📍 Google Maps</a></div></article>`;
  }

  app.innerHTML = `
    <header class="hero">
      <div class="eyebrow">KYOTO · SAKURA 2027</div>
      <h1>${esc(d.trip.title)}</h1>
      <p>${esc(d.trip.dates)} · ${esc(d.trip.people)} 人 · 基地 ${esc(d.trip.base)}</p>
      <div class="pills"><span>🌸 賞櫻主線</span><span>🏨 ${esc(d.trip.hotelCandidates.join(' / '))}</span><span>🚶 哲學之道・木屋町・鴨川可多訪</span></div>
    </header>

    <details class="transport-block">
      <summary><span>🚆 交通</span><small>去程 ${esc(d.outboundFlight.airline)} ${esc(d.outboundFlight.flight)} · ${esc(d.outboundFlight.departure)} TPE → ${esc(d.outboundFlight.arrival)} KIX</small></summary>
      <div class="transport-body"><b>${esc(d.outboundFlight.date)}｜${esc(d.outboundFlight.airline)} ${esc(d.outboundFlight.flight)}</b><br>${esc(d.outboundFlight.from)} ${esc(d.outboundFlight.departure)} → ${esc(d.outboundFlight.to)} ${esc(d.outboundFlight.arrival)}<br>${esc(d.outboundFlight.fareFamily)}｜託運 ${esc(d.outboundFlight.checkedBaggage)}｜座位 ${esc(d.outboundFlight.seats)}</div>
    </details>

    <section><div class="section-title"><h2>每日骨架</h2><small>依花況逐日填入</small></div><div class="days">${d.days.map((x,i)=>`<div class="day"><b>${x}</b><small>Day ${i+1} · 待排</small></div>`).join('')}</div></section>

    <section><div class="section-title"><h2>2027 已鎖定</h2><small>每個點都有 GPT / Google Maps</small></div><div class="grid locked-grid">${d.places.map(manualCard).join('')}</div></section>

    <section class="quick-index"><div class="section-title"><h2>快速入口</h2><small>常用大區與類型直接進</small></div>
      <div class="quick-block"><div class="quick-label">地區</div><div class="quick-buttons">${QUICK_REGIONS.map(r=>`<button data-quick-region="${esc(r)}">${esc(r)}</button>`).join('')}</div></div>
      <div class="quick-block"><div class="quick-label">類型</div><div class="quick-buttons">${CAT_ORDER.map(c=>`<button data-quick-cat="${c}">${esc(CAT[c])}</button>`).join('')}</div></div>
    </section>

    <section id="catalog"><div class="section-title"><h2>店家・商店索引</h2><small id="resultCount"></small></div>
      <div class="catalog-tools">
        <input id="placeSearch" type="search" placeholder="搜尋店名、類型、地區…" autocomplete="off">
        <div class="index-tabs" role="tablist"><button class="index-tab active" data-mode="region">地區 → 類型 → 店家</button><button class="index-tab" data-mode="type">類型 → 地區 → 店家</button></div>
      </div>
      <div id="catalogGroups"></div>
    </section>

    <section><div class="section-title"><h2>待確認</h2></div>${d.pending.map(x=>`<div class="pending">${esc(x)}</div>`).join('')}</section>
  `;

  document.getElementById('placeSearch').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();renderCatalog();});
  document.querySelectorAll('.index-tab').forEach(b=>b.addEventListener('click',()=>{viewMode=b.dataset.mode;document.querySelectorAll('.index-tab').forEach(x=>x.classList.toggle('active',x===b));renderCatalog();}));

  function filteredCatalog(){
    if(!query) return catalog;
    return catalog.filter(p=>`${p.name} ${p.description} ${p.region} ${p.typeLabels.join(' ')} ${p.categories.map(c=>CAT[c]).join(' ')}`.toLowerCase().includes(query));
  }

  function regionAnchor(region){const i=REGION_ORDER.indexOf(region);return `region-${i>=0?i:'x'}`;}
  function regionOrderFor(items){
    const present=[...new Set(items.map(x=>x.region))];
    return [...REGION_ORDER,...present.filter(x=>!REGION_ORDER.includes(x))].filter(x=>present.includes(x));
  }

  function renderRegionFirst(items){
    return regionOrderFor(items).map((region,ri)=>{
      const list=items.filter(p=>p.region===region);
      const sections=CAT_ORDER.map(cat=>{
        const catItems=list.filter(p=>p.categories.includes(cat)).sort((a,b)=>a.name.localeCompare(b.name,'ja'));
        if(!catItems.length) return '';
        return `<section class="subgroup"><h4>${esc(CAT[cat])}<span>${catItems.length}</span></h4><div class="grid region-grid">${catItems.map(cardHtml).join('')}</div></section>`;
      }).join('');
      const open=!query && ri<3;
      return `<details class="index-group" id="${regionAnchor(region)}" ${open?'open':''}><summary><span>${esc(region)}</span><b>${list.length}</b></summary>${sections}</details>`;
    }).join('');
  }

  function renderTypeFirst(items){
    return CAT_ORDER.map((cat,ci)=>{
      const catAll=items.filter(p=>p.categories.includes(cat));
      if(!catAll.length) return '';
      const regions=regionOrderFor(catAll);
      const sections=regions.map(region=>{
        const regionItems=catAll.filter(p=>p.region===region).sort((a,b)=>a.name.localeCompare(b.name,'ja'));
        return `<section class="subgroup"><h4>${esc(region)}<span>${regionItems.length}</span></h4><div class="grid region-grid">${regionItems.map(cardHtml).join('')}</div></section>`;
      }).join('');
      const open=!query && ci<2;
      return `<details class="index-group" id="type-${cat}" ${open?'open':''}><summary><span>${esc(CAT[cat])}</span><b>${catAll.length}</b></summary>${sections}</details>`;
    }).join('');
  }

  function renderCatalog(){
    const items=filteredCatalog();
    document.getElementById('resultCount').textContent=`共 ${items.length} 個店家／地點`;
    document.getElementById('catalogGroups').innerHTML=(viewMode==='region'?renderRegionFirst(items):renderTypeFirst(items)) || '<div class="empty">沒有符合條件的項目。</div>';
  }

  function setMode(mode){
    viewMode=mode;
    document.querySelectorAll('.index-tab').forEach(x=>x.classList.toggle('active',x.dataset.mode===mode));
    renderCatalog();
  }
  function jumpTo(id){
    requestAnimationFrame(()=>{const e=document.getElementById(id);if(!e)return;e.open=true;e.scrollIntoView({behavior:'smooth',block:'start'});});
  }
  document.querySelectorAll('[data-quick-region]').forEach(b=>b.addEventListener('click',()=>{const r=b.dataset.quickRegion;setMode('region');jumpTo(regionAnchor(r));}));
  document.querySelectorAll('[data-quick-cat]').forEach(b=>b.addEventListener('click',()=>{const c=b.dataset.quickCat;setMode('type');jumpTo(`type-${c}`);}));

  renderCatalog();
})();
