(function(){
  const d = window.KYOTO2027_DATA;
  const app = document.getElementById('app');
  const esc = s => String(s ?? '').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
  const mapUrl = p => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.mapQuery || p.jp || p.name);
  const CAT = {food:'餐廳',drinks:'咖啡／茶／甜點',shops:'商店／百貨／伴手禮',books:'書店／古書店'};
  const allowed = new Set(Object.keys(CAT));
  const REGION_ORDER = [
    '四條河原町・高島屋・BAL','寺町・新京極・河原町','木屋町・先斗町・鴨川','四條烏丸・錦市場','烏丸御池・三條通','寺町・二條・三條',
    '祇園・八坂・白川','清水寺・二三年坂・東山','南禪寺・岡崎・平安神宮','哲學之道・銀閣寺・吉田山','京都御所・神宮丸太町',
    '出町柳・下鴨・京大','一乘寺・修學院','大德寺・今宮神社','大原','貴船・鞍馬','洛北其他',
    '金閣寺・龍安寺・仁和寺','嵐山・嵯峨','京都站・八條口','伏見稻荷・伏見酒藏','東福寺・泉涌寺','山科・醍醐','宇治',
    '奈良公園・奈良町','奈良西之京・斑鳩・遠郊'
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
  let activeCat='all';
  let query='';

  function geminiPrompt(p){
    const cats = p.categories ? p.categories.map(c=>CAT[c]||c).join('、') : (p.type||'地點');
    const region = p.region ? `地區：${p.region}。` : '';
    const known = p.description || p.intro || p.note || '';
    return `請用台灣繁體中文介紹「${p.jp||p.name}」。背景：2027/3/27–4/5 京都賞櫻旅行，4人同行，住宿基地四條河原町。${region}分類：${cats}。目前筆記：${known}。請先查證最新公開資料，整理：1.核心特色 2.歷史／建築／庭園或店家背景 3.櫻花季適合的造訪時段（如適用）4.建議停留時間 5.周邊順遊 6.餐廳請補招牌、價位與訂位；商店請補值得買的品項。`;
  }

  function copyText(s){
    if(navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(s);
    const ta=document.createElement('textarea'); ta.value=s; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select();
    try{document.execCommand('copy');}catch(e){} ta.remove(); return Promise.resolve();
  }
  function toast(msg){
    let e=document.getElementById('toast'); if(!e){e=document.createElement('div');e.id='toast';document.body.appendChild(e);} e.textContent=msg;e.classList.add('show');
    clearTimeout(window.__toast);window.__toast=setTimeout(()=>e.classList.remove('show'),2400);
  }
  function openGemini(p){
    const prompt=geminiPrompt(p); window.open('https://gemini.google.com/app','_blank','noopener');
    copyText(prompt).then(()=>toast('已開啟 Gemini；介紹提示詞已複製，貼上即可')).catch(()=>toast('已開啟 Gemini'));
  }

  function manualCard(p,i){
    return `<article class="card locked-card"><div class="type">${esc(p.type)}</div><h3>${esc(p.jp||p.name)}</h3><p class="note">${esc(p.note)}</p><div class="tags">${(p.tags||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="actions"><button class="gemini manual-gemini" data-i="${i}">✨ Gemini 簡介</button><a class="map" href="${mapUrl(p)}" target="_blank" rel="noopener">📍 Google Maps</a></div></article>`;
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

    <section><div class="section-title"><h2>2027 已鎖定</h2><small>每個點都有 Gemini / Google Maps</small></div><div class="grid locked-grid">${d.places.map(manualCard).join('')}</div></section>

    <section id="catalog"><div class="section-title"><h2>樂京都店家資料庫</h2><small id="resultCount">整批自 2026 樂京都正本載入</small></div>
      <div class="catalog-tools"><input id="placeSearch" type="search" placeholder="搜尋店名、類型、地區…" autocomplete="off"><div class="filters" id="filters"></div></div>
      <div id="catalogGroups"></div>
    </section>

    <section><div class="section-title"><h2>待確認</h2></div>${d.pending.map(x=>`<div class="pending">${esc(x)}</div>`).join('')}</section>
  `;

  document.querySelectorAll('.manual-gemini').forEach(b=>b.addEventListener('click',()=>openGemini(d.places[Number(b.dataset.i)])));

  const filtersEl=document.getElementById('filters');
  filtersEl.innerHTML=[['all','全部'],...Object.entries(CAT)].map(([k,v])=>`<button class="filter ${k==='all'?'active':''}" data-cat="${k}">${v}</button>`).join('');
  filtersEl.addEventListener('click',e=>{const b=e.target.closest('[data-cat]');if(!b)return;activeCat=b.dataset.cat;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));renderCatalog();});
  document.getElementById('placeSearch').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();renderCatalog();});

  function cardHtml(p){
    const cats=p.categories.map(c=>CAT[c]||c).join('・');
    const type=[...p.typeLabels].slice(0,2).join('／');
    return `<article class="card catalog-card"><div class="type">${esc(cats)}</div><h3>${esc(p.name)}</h3><div class="subtype">${esc(type)}</div><p class="note">${esc(p.description||'樂京都既有收錄點。')}</p><div class="actions"><button class="gemini catalog-gemini" data-i="${p.idx}">✨ Gemini 簡介</button><a class="map" href="${mapUrl(p)}" target="_blank" rel="noopener">📍 Google Maps</a></div></article>`;
  }

  function renderCatalog(){
    const filtered=catalog.filter(p=>{
      if(activeCat!=='all'&&!p.categories.includes(activeCat)) return false;
      if(!query) return true;
      return `${p.name} ${p.description} ${p.region} ${p.typeLabels.join(' ')}`.toLowerCase().includes(query);
    });
    const groups=new Map(); filtered.forEach(p=>{if(!groups.has(p.region))groups.set(p.region,[]);groups.get(p.region).push(p);});
    const order=[...REGION_ORDER,...[...groups.keys()].filter(x=>!REGION_ORDER.includes(x))];
    document.getElementById('resultCount').textContent=`${filtered.length} 個店家／地點`;
    document.getElementById('catalogGroups').innerHTML=order.filter(r=>groups.has(r)).map((r,ri)=>{
      const items=groups.get(r).sort((a,b)=>a.name.localeCompare(b.name,'ja'));
      const open=/四條河原町|寺町・新京極|木屋町/.test(r)&&!query&&activeCat==='all';
      return `<details class="region" ${open?'open':''}><summary><span>${esc(r)}</span><b>${items.length}</b></summary><div class="grid region-grid">${items.map(cardHtml).join('')}</div></details>`;
    }).join('') || '<div class="empty">沒有符合條件的項目。</div>';
    document.querySelectorAll('.catalog-gemini').forEach(b=>b.addEventListener('click',()=>openGemini(catalog[Number(b.dataset.i)])));
  }
  renderCatalog();
})();
