(function(){
  const D=window.KYOTO2027_MODERN, app=document.getElementById('modernApp');
  const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const mapUrl=p=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.mapQuery||p.name);
  const routeUrl=p=>'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(D.origin)+'&destination='+encodeURIComponent(p.mapQuery||p.name)+'&travelmode=walking';
  const chatUrl=prompt=>'https://chatgpt.com/?q='+encodeURIComponent(prompt);
  const gptPrompt=p=>`請用台灣繁體中文深入介紹「${p.name}」（京都洋館／近代建築）。背景：2027/3/27–4/5 京都賞櫻旅行，4人同行，住宿 HOTEL ARU KYOTO 三条木屋町通り。請先查證最新公開資料。

請「圖文並茂」：介紹中請搭配這棟建築的外觀、室內、代表性建築細節或歷史影像等合適圖片／視覺資料；不要只給純文字。

內容請包括：
1. 正式名稱、建築年代、設計者／建築師（可確認時）
2. 建築樣式、外觀、室內、材料與值得看的細節
3. 建築歷史、原始用途、改建／保存脈絡
4. 現在用途與是否可以入內
5. 若現在是咖啡廳、餐廳、商店、飯店、銀行等，介紹其目前營業內容、招牌與適合造訪情境
6. 從 HOTEL ARU KYOTO 三条木屋町通り出發的步行距離（km）與時間（分鐘）；即使較遠也先提供步行資訊
7. 2027/3/27–4/5 若有櫻花、庭園或周邊可順遊，也補充
8. 最新營業時間、費用、預約／公開日資訊
9. 附資料來源；未確認內容明確標示

本站目前記錄：年代「${p.year}」、分類「${p.kind}」、現況「${p.status}」、摘要「${p.note}」。請以最新公開資料核對，不要因本站筆記而省略查證。`;
  const gptLink=p=>window.KYOTO2027_GPT_ACTIONS?window.KYOTO2027_GPT_ACTIONS.link(chatUrl(gptPrompt(p)),'✨ GPT 圖文介紹','gpt'): `<a class="gpt" href="${chatUrl(gptPrompt(p))}" target="_blank">✨ GPT 圖文介紹</a>`;
  const groupOrder=["清水寺・祇園・東山","木屋町・河原町・寺町","三條河原町・飯店近旁","三條通・烏丸御池","寺町二條・市役所","四條烏丸","京都站・七條","御所・同志社・西陣","京都御所・神宮丸太町","南禪寺・岡崎","哲學之道・銀閣寺・吉田山","出町柳・下鴨・京大","金閣寺・龍安寺・仁和寺","洛北其他","伏見稻荷・伏見酒藏","山科・醍醐","京都府近郊・大山崎","京都府近郊・舞鶴"];
  const initial=new URLSearchParams(location.search);
  let q=initial.get('q')||'',mode=initial.get('mode')||'all',area=initial.get('area')||'all',use=initial.get('use')||'all';
  const isOpen=p=>/營業|公開|現役|使用|校園參觀|活動使用|預約參觀/.test(p.status)&&!/私宅|通常非公開/.test(p.status);
  const showa=p=>p.showaCafe;
  function card(p){
    return `<article class="card modern-card ${p.priority==='top'?'modern-top':''}">
      <div class="modern-card-head"><div><div class="type">${esc(p.kind)}</div><h3>${esc(p.name)}</h3></div>${p.showaCafe?'<span class="modern-badge showa">昭和咖啡線</span>':''}</div>
      <div class="modern-meta"><span>🗓️ ${esc(p.year)}</span><span>📍 ${esc(p.area)}</span><span>🏷️ ${esc(D.typeLabels[p.use]||p.use)}</span><span>🚪 ${esc(p.status)}</span></div>
      <p class="note">${esc(p.note)}</p>
      <div class="modern-actions">
        ${gptLink(p)}
        <a class="map" href="${mapUrl(p)}" target="_blank" rel="noopener">📍 Google Maps</a>
        <a class="walk" href="${routeUrl(p)}" target="_blank" rel="noopener">🚶 ARU 步行路線</a>
        ${p.sourceUrl?`<a class="official-action" href="${esc(p.sourceUrl)}" target="_blank" rel="noopener">🔎 查證資料</a>`:''}
      </div>
    </article>`;
  }
  function filter(){
    const needle=q.trim().toLowerCase();
    return D.places.filter(p=>{
      if(mode==='open'&&!isOpen(p))return false;
      if(mode==='showa'&&!showa(p))return false;
      if(mode==='strict'&&!/洋館|西洋|洋風|Gothic|Tudor|Spanish|Baroque|Colonial|Art Deco/.test(p.kind))return false;
      if(area!=='all'&&p.area!==area)return false;
      if(use!=='all'&&p.use!==use)return false;
      if(needle&&!([p.name,p.year,p.area,p.kind,p.note,p.status,D.typeLabels[p.use]].join(' ').toLowerCase().includes(needle)))return false;
      return true;
    });
  }
  function btns(key,opts,current){return `<div class="quick-buttons">${opts.map(([v,l])=>`<button data-key="${key}" data-value="${esc(v)}" class="${v===current?'active':''}">${esc(l)}</button>`).join('')}</div>`;}
  function render(){
    const list=filter(), areas=[...new Set(D.places.map(p=>p.area))];
    const ordered=[...groupOrder.filter(a=>areas.includes(a)),...areas.filter(a=>!groupOrder.includes(a))];
    const grouped=ordered.map(a=>[a,list.filter(p=>p.area===a)]).filter(([,x])=>x.length);
    app.innerHTML=`
      <header class="hero modern-hero">
        <a class="back-link" href="index.html?v=20261006-modern1">← 花見京旅首頁</a>
        <div class="eyebrow">KYOTO · WESTERN & MODERN ARCHITECTURE</div>
        <h1>京都洋館・近代建築大全</h1>
        <p>${esc(D.intro)}</p>
        <div class="pills"><span>🏛️ ${D.places.length} 筆</span><span>☕ 昭和洋館／老喫茶 ${D.places.filter(p=>p.showaCafe).length} 筆</span><span>🏨 基地：HOTEL ARU KYOTO</span></div>
      </header>
      <section class="modern-special">
        <div class="section-title"><h2>昭和洋館／レトロ喫茶</h2><small>把「真正洋館」與「昭和喫茶空間」都保留，但卡片會分清楚建築類型</small></div>
        <div class="sakura-entry-actions"><button data-special="showa">☕ 顯示全部昭和洋館／老喫茶</button></div>
      </section>
      <section class="modern-tools">
        <input id="modernSearch" type="search" placeholder="搜尋建築、年代、用途、地區…" value="${esc(q)}">
        <div class="quick-block"><div class="quick-label">範圍</div>${btns('mode',[['all','全部'],['strict','洋館／西洋式為主'],['open','目前可入內／使用中'],['showa','昭和洋館／老喫茶']],mode)}</div>
        <div class="quick-block"><div class="quick-label">現在用途</div>${btns('use',[['all','全部用途'],['cafe','咖啡／喫茶'],['restaurant','餐廳'],['hotel','飯店'],['shop','商店／商業'],['bank','銀行'],['post','郵局'],['museum','博物館／公開設施'],['university','學校／大學'],['church','教會'],['office','官署／辦公'],['industrial','產業建築'],['theater','劇場'],['private','私人建築']],use)}</div>
        <div class="quick-block"><div class="quick-label">地區</div>${btns('area',[['all','全部地區'],...ordered.map(a=>[a,a])],area)}</div>
      </section>
      <div class="section-title result-title"><h2>清單</h2><small>${list.length} / ${D.places.length}</small></div>
      ${grouped.map(([a,items])=>`<details class="index-group modern-group" open><summary><span>${esc(a)}</span><b>${items.length}</b></summary><div class="grid region-grid">${items.map(card).join('')}</div></details>`).join('')||'<div class="empty">沒有符合條件的建築。</div>'}
      <div class="modern-note">Google Maps 按鈕開啟單點；「ARU 步行路線」固定以 HOTEL ARU KYOTO 三条木屋町通り為起點。GPT 按鈕會開啟完整介紹提示，並要求<strong>圖文並茂</strong>；旁邊的複製按鈕沿用本站既有功能。</div>`;
    const s=document.getElementById('modernSearch');
    s.addEventListener('input',e=>{q=e.target.value;render();setTimeout(()=>{const n=document.getElementById('modernSearch');n.focus();n.setSelectionRange(q.length,q.length);},0);});
    app.querySelectorAll('button[data-key]').forEach(b=>b.addEventListener('click',()=>{const k=b.dataset.key,v=b.dataset.value;if(k==='mode')mode=v;if(k==='use')use=v;if(k==='area')area=v;render();}));
    app.querySelector('[data-special="showa"]')?.addEventListener('click',()=>{mode='showa';use='all';area='all';q='';render();});
  }
  render();
})();