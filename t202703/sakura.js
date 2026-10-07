(function(){
  const app=document.getElementById('sakuraApp');
  const collection=window.KYOTO2027_SAKURA;
  const I18N=window.KYOTO_NAME_I18N;
  const C=window.KYOTO2027_CATALOG;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  if(!app||!collection||!C){if(app)app.innerHTML='<p>資料尚未載入，請重新整理。</p>';return;}

  const items=C.items.filter(p=>p.sakura);
  const areaMap=Object.fromEntries(collection.areas.map(a=>[a.id,a.label]));
  const typeMap=Object.fromEntries(collection.types.map(t=>[t.id,t.label]));

  const mapUrl=p=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.mapQuery||p.jp||p.name);
  const gptUrl=p=>'https://chatgpt.com/?q='+encodeURIComponent(C.introPrompt(p));
  const walkText=p=>p.walkMeta?C.walkText(p):(C.routeMode(p)==='walking'?'ARU 步行圈':'從 ARU 建議搭大眾運輸');

  function card(p){
    const s=p.sakura;
    const n=I18N.names(p);
    const map=mapUrl(p);
    return '<article class="sakura-simple-card">'+
      '<div class="sakura-simple-kicker">'+esc(areaMap[s.area]||'')+' · '+esc(s.types.map(t=>typeMap[t]).filter(Boolean).join('・'))+'</div>'+
      '<h3><a href="'+map+'" target="_blank" rel="noopener">'+esc(n.zh)+'</a></h3>'+
      (n.zh!==n.original?'<div class="sakura-simple-jp place-original" lang="ja">'+esc(n.original)+'</div>':'')+
      '<p>'+esc(s.description)+'</p>'+
      '<div class="sakura-simple-meta"><span>🌸 '+esc(s.period)+'</span><span>🏨 '+esc(walkText(p))+'</span></div>'+
      '<div class="sakura-simple-actions">'+
        '<a class="sakura-map-primary" href="'+map+'" target="_blank" rel="noopener">📍 Google Maps</a>'+
        '<a class="sakura-gpt-secondary" href="'+gptUrl(p)+'" target="_blank" rel="noopener">✨ GPT 介紹</a>'+
      '</div>'+
    '</article>';
  }

  app.innerHTML=
    '<header class="hero nearby-hero sakura-simple-hero">'+
      '<a class="back-link" href="index.html?v=20261008-names1">← 返回花見京旅</a>'+
      '<div class="eyebrow">KYOTO · SAKURA 2027</div>'+
      '<h1>京都櫻花景點</h1>'+
      '<p>直接看介紹。想去就按 Google Maps；想深入看歷史、櫻花品種與觀賞重點，就按 GPT 介紹。</p>'+
      '<div class="pills"><span>🌸 '+items.length+' 個景點</span><span>📅 2027/3/27–4/5</span><span>🏨 HOTEL ARU 出發</span></div>'+
    '</header>'+
    '<section class="sakura-simple-search"><input id="sakuraSearch" type="search" placeholder="搜尋景點，例如：龍安寺、哲學之道、垂櫻" autocomplete="off"></section>'+
    '<div id="sakuraSimpleCount" class="sakura-simple-count"></div>'+
    '<div id="sakuraSimpleGroups"></div>';

  const search=document.getElementById('sakuraSearch');
  const count=document.getElementById('sakuraSimpleCount');
  const groups=document.getElementById('sakuraSimpleGroups');

  function render(){
    const q=search.value.trim().toLowerCase();
    const rows=items.filter(p=>{
      const s=p.sakura;
      return !q||I18N.normalize([I18N.searchText(p),s.description,s.period,areaMap[s.area],...s.types.map(t=>typeMap[t])].join(' ')).includes(I18N.normalize(q));
    });
    count.textContent='顯示 '+rows.length+' / '+items.length+' 個景點';
    groups.innerHTML=collection.areas.map(area=>{
      const list=rows.filter(p=>p.sakura.area===area.id);
      if(!list.length)return '';
      return '<section class="sakura-simple-group">'+
        '<div class="section-title"><h2>'+esc(area.label)+'</h2><small>'+list.length+' 個</small></div>'+
        '<div class="sakura-simple-grid">'+list.map(card).join('')+'</div>'+
      '</section>';
    }).join('') || '<div class="empty">沒有符合搜尋條件的景點。</div>';
  }

  search.addEventListener('input',render);
  render();
})();