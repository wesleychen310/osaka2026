(function(){
  const app=document.getElementById('nearbyApp'),data=window.KYOTO2027_CATALOG,d=window.KYOTO2027_NEARBY;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  if(!data){app.innerHTML='<p>資料尚未載入，請重新整理。</p>';return;}
  const I18N=window.KYOTO_NAME_I18N;
  const items=data.items.filter(p=>(p.nearby||p.cafeThemes.length)&&p.status!=='closed');
  const geographies=[...data.geographies,...data.cafeGeographies],geoMap=Object.fromEntries(geographies.map(g=>[g.id,g]));
  const placeGeos=p=>p.geos.length?p.geos:(p.cafeGeo?[p.cafeGeo]:[]);
  const themed=()=>data.cafeThemes.some(t=>t.id===state.cat);
  const cats=[['all','🧭','全部周邊'],['kiyamachi-picks','⭐','木屋町精選'],['daily','🏠','日常生活'],['food','🍽️','餐廳'],['drinks','☕','咖啡／茶／甜點'],...data.cafeThemes.map(t=>[t.id,t.id==='old-tea'?'🍵':'🏛️',t.label]),['shops','🛍️','商店／百貨'],['books','📚','書店／古書店'],['sights','🌸','景點／散步'],['convenience','🏪','便利商店'],['supermarket','🛒','超市／補貨']];
  const legacyMap={'center-dining':'food','center-cafe':'drinks'};
  const circles=[['all','不限距離'],['10','10 分內'],['20','20 分內'],['30','30 分內'],['far','30 分以上'],['unknown','待確認']];
  let state;
  function readState(){const q=new URLSearchParams(location.search),cat=q.get('cat')||'all';return {cat:legacyMap[cat]||cat,scope:q.get('scope')==='nearby'?'nearby':'all',geo:geoMap[q.get('geo')]?q.get('geo'):'all',walk:circles.some(([id])=>id===q.get('walk'))?q.get('walk'):'all',kind:q.get('kind')||'all',meal:['daily','destination'].includes(q.get('meal'))?q.get('meal'):'all',mode:q.get('mode')==='type'?'type':'geo',q:q.get('q')||''};}
  state=readState();
  const dailyMap=Object.fromEntries(d.categories.map(c=>[c.id,c.label]));
  if(!cats.some(([id])=>id===state.cat)&&!dailyMap[state.cat])state.cat='all';
  const byCategory=p=>state.cat==='kiyamachi-picks'?!!p.kiyamachiPick:themed()?p.cafeThemes.includes(state.cat):p.nearby&&(state.cat==='all'||(state.cat==='daily'?p.daily:(dailyMap[state.cat]?p.dailyCategories.includes(state.cat):p.categories.includes(state.cat))));
  const circleMatch=p=>state.walk==='all'||(state.walk==='unknown'?!p.walkMeta:state.walk==='far'?p.walkMeta?.max>30:p.walkMeta&&p.walkMeta.max<=Number(state.walk));
  function filtered(ignoreKind=false){return items.filter(p=>byCategory(p)&&(!themed()||state.scope==='all'||p.nearby)&&(state.geo==='all'||placeGeos(p).includes(state.geo))&&circleMatch(p)&&(state.meal==='all'||p.mealTier===state.meal)&&(ignoreKind||state.kind==='all'||p.kind===state.kind)&&(!state.q||I18N.normalize([I18N.searchText(p),p.description,p.kind,...p.typeLabels,...placeGeos(p).map(g=>geoMap[g].label)].join(' ')).includes(I18N.normalize(state.q))));}
  const route=p=>data.routeUrl(p);
  const map=p=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.mapQuery||p.name);
  const gpt=p=>'https://chatgpt.com/?q='+encodeURIComponent(data.introPrompt(p));
  const menu=p=>'https://chatgpt.com/?q='+encodeURIComponent(`請查詢「${p.name}」目前最新公開菜單，以官方或較新資料優先。\n\n輸出手機友善 2 欄 Markdown 表格：\n| 原文＋價格 | 繁中＋約 TWD |\n|---|---|\n\n保留原文品名與原始價格，翻成自然台灣繁中。台幣用最新合理匯率粗估，四捨五入到整數。不確定價格不要猜。文末推薦。`);
  function card(p){const n=I18N.names(p);return `<article class="card nearby-card" data-place="${esc(p.name)}"><div class="nearby-card-top"><div><div class="type">${esc(p.kind)}</div><h3>${esc(n.zh)}</h3>${n.zh!==n.original?`<div class="map-name place-original" lang="ja">${esc(n.original)}</div>`:''}</div>${p.locked?'<span class="nearby-status warning-status">已鎖定</span>':p.status==='warning'?'<span class="nearby-status warning-status">待確認</span>':''}</div><div class="walk-origin">🚶 ARU 出發：${esc(data.walkText(p))}</div><div class="nearby-meta">${placeGeos(p).map(g=>`<button type="button" data-geo="${g}" title="篩選這個區域">${esc(geoMap[g].label)}</button>`).join('')}${p.kiyamachiPick?'<span>⭐ 木屋町精選</span>':''}${p.cafeThemes.map(id=>`<span>${esc(data.cafeThemes.find(t=>t.id===id).label)}</span>`).join('')}${!p.nearby?'<span>飯店生活圈外</span>':''}${p.daily?'<span>日常生活</span>':''}${p.budget?`<span>💴 ${esc(p.budget)}</span>`:''}${p.hours?`<span>🕒 ${esc(p.hours)}</span>`:''}</div><p class="note">${esc(p.description)}</p>${p.kiyamachiPick?`<p class="filter-hint">${esc(p.address)}<br>資料核對：${esc(p.checkedAt)}；營業與訂位以店家最新公告為準。</p>`:''}<div class="nearby-actions">${window.KYOTO2027_GPT_ACTIONS.link(gpt(p),'✨ GPT 簡介','gpt')}<a class="map" href="${map(p)}" target="_blank" rel="noopener">📍 Google Maps</a><a class="walk-action route-action" data-route-mode="${data.routeMode(p)}" href="${route(p)}" target="_blank" rel="noopener">${data.routeLabel(p)}</a>${p.dining?window.KYOTO2027_GPT_ACTIONS.link(menu(p),'📋 最新菜單','menu-action'):''}${p.officialUrl?`<a class="official-action" href="${esc(p.officialUrl)}" target="_blank" rel="noopener">🌐 官方網站</a>`:''}${p.referenceUrl?`<a class="official-action" href="${esc(p.referenceUrl)}" target="_blank" rel="noopener">🔎 查證資料</a>`:''}</div></article>`;}
  function buttons(list,key){return list.map(([id,label])=>`<button type="button" data-${key}="${esc(id)}" aria-pressed="${state[key]===id}" class="${state[key]===id?'active':''}">${esc(label)}</button>`).join('');}
  app.innerHTML=`<header class="hero nearby-hero"><a class="back-link" href="index.html?v=20261008-names1">← 返回花見京旅</a><div class="eyebrow">HOTEL ARU · KYOTO 2027</div><h1>飯店周邊</h1><p>河原町到烏丸，都是飯店生活圈。<br>ARU 步行 30 分內走路，超過自動切大眾運輸。</p><div class="sakura-entry-actions"><a href="sakura.html?v=20261008-names1">🌸 櫻花景點大集合</a></div></header><nav class="nearby-tabs" id="categoryButtons" aria-label="店家類型"></nav><section id="cafeScopeSection" class="quick-block" hidden><div class="quick-label">咖啡與茶寮收藏範圍</div><div id="cafeScopeButtons" class="quick-buttons"></div></section><section class="quick-block"><div class="quick-label">地理區域</div><div class="quick-buttons" id="geoButtons"></div></section><section class="quick-block"><div class="quick-label">ARU 步行圈</div><div class="quick-buttons walk-buttons" id="walkButtons"></div><p class="filter-hint">距離與時間為概估，分界採時間上限；超過 30 分或距離待確認，交通按鈕預設大眾運輸。</p></section><section id="nearbyCatalog"><div class="catalog-tools nearby-tools"><label class="sr-only" for="nearbySearch">搜尋周邊店家</label><input id="nearbySearch" type="search" placeholder="搜尋店名、料理、街區…" autocomplete="off"><section class="quick-block button-filter"><div class="quick-label">主力類型</div><div class="quick-buttons" id="kindButtons" role="group" aria-label="主力類型"></div></section><section class="quick-block button-filter"><div class="quick-label">用餐情境</div><div class="quick-buttons" id="mealButtons" role="group" aria-label="用餐情境"></div></section><div class="filter-reset"><button class="reset-filters" id="resetFilters" type="button">清除篩選</button></div><div class="index-tabs"><button class="index-tab" data-mode="geo">按地理瀏覽</button><button class="index-tab" data-mode="type">按類型瀏覽</button></div></div><div class="section-title result-title"><h2 id="resultTitle"></h2><small id="resultCount" role="status" aria-live="polite"></small></div><p id="cafeThemeHint" class="filter-hint" hidden></p><div id="activeFilters" class="active-filters"></div><div id="nearbyGroups"></div></section>`;
  document.getElementById('nearbySearch').value=state.q;
  const openGroups=new Map();
  function groups(rows){
    const entries=state.mode==='geo'?geographies.filter(g=>state.geo==='all'||state.geo===g.id).map(g=>[g.id,g.label,rows.filter(p=>placeGeos(p).includes(g.id))]):[...new Set(rows.map(p=>p.kind))].sort((a,b)=>a.localeCompare(b,'zh-Hant')).map(k=>[k,k,rows.filter(p=>p.kind===k)]);
    if(state.mode==='geo'){const other=rows.filter(p=>!placeGeos(p).length);if(other.length)entries.push(['other','其他周邊',other]);}
    let index=0;return entries.filter(([, ,list])=>list.length).map(([id,label,list])=>{
      const key=state.mode+':'+id,isOpen=themed()||state.q||state.geo!=='all'||state.kind!=='all'||(openGroups.get(key)??(index<2));index++;
      const ordered=[...list].sort((a,b)=>(a.walkMeta?.max??999)-(b.walkMeta?.max??999)||a.name.localeCompare(b.name,'ja'));
      const sub=state.mode==='geo'?[...new Set(ordered.map(p=>p.kind))].map(k=>`<section class="subgroup"><h4>${esc(k)} <span>${ordered.filter(p=>p.kind===k).length}</span></h4><div class="grid nearby-grid">${ordered.filter(p=>p.kind===k).map(card).join('')}</div></section>`).join(''):`<div class="subgroup"><div class="grid nearby-grid">${ordered.map(card).join('')}</div></div>`;
      return `<details class="index-group" data-group-key="${esc(key)}" ${isOpen?'open':''}><summary><span>${esc(label)}</span><b>${list.length}</b></summary>${sub}</details>`;
    }).join('');
  }
  function saveUrl(){const params=new URLSearchParams({v:'20261008-names1'});for(const k of ['cat','scope','geo','walk','kind','meal','mode','q'])if(state[k]&&state[k]!==({cat:'all',scope:'all',geo:'all',walk:'all',kind:'all',meal:'all',mode:'geo',q:''}[k]))params.set(k,state[k]);history.replaceState(null,'',location.pathname+(params.size?'?'+params:'')+location.hash);}
  function render(){
    document.querySelectorAll('[data-group-key]').forEach(e=>openGroups.set(e.dataset.groupKey,e.open));
    document.getElementById('cafeScopeSection').hidden=!themed();
    document.getElementById('cafeScopeButtons').innerHTML=buttons([['all','全部京都收藏'],['nearby','飯店生活圈：河原町到烏丸']],'scope');
    document.getElementById('categoryButtons').innerHTML=buttons(cats.map(([id,icon,label])=>[id,icon+' '+label]),'cat');
    document.getElementById('geoButtons').innerHTML=buttons([['all','全部街區'],...geographies.filter(g=>!g.area||themed()).map(g=>[g.id,g.label])],'geo');
    document.getElementById('walkButtons').innerHTML=buttons(circles,'walk');
    document.getElementById('mealButtons').innerHTML=buttons([['all','全部用餐情境'],['daily','日常餐／輕食'],['destination','正式餐／特地安排']],'meal');
    const kinds=[...new Set(filtered(true).map(p=>p.kind))].sort((a,b)=>a.localeCompare(b,'zh-Hant'));
    if(state.kind!=='all'&&!kinds.includes(state.kind))kinds.unshift(state.kind);
    document.getElementById('kindButtons').innerHTML=buttons([['all','全部主力類型'],...kinds.map(k=>[k,k])],'kind');
    document.querySelectorAll('[data-mode]').forEach(e=>{e.classList.toggle('active',e.dataset.mode===state.mode);e.setAttribute('aria-pressed',e.dataset.mode===state.mode);});
    const rows=filtered(),hint=document.getElementById('cafeThemeHint');hint.hidden=!themed();hint.textContent='完整保留原本的京都咖啡與老茶舖收藏。河原町到烏丸按生活圈街區分類；較遠的店標為「延伸」，仍可搭配 ARU 步行圈篩選。';document.getElementById('resultTitle').textContent=cats.find(([id])=>id===state.cat)?.[2]||dailyMap[state.cat];
    document.getElementById('resultCount').textContent=`${rows.length} 個地點 · 街區可交叉標籤`;
    const active=[];if(themed()&&state.scope==='nearby')active.push('飯店生活圈');if(state.geo!=='all')active.push(geoMap[state.geo].label);if(state.walk!=='all')active.push('步行 '+circles.find(([id])=>id===state.walk)[1]);if(state.kind!=='all')active.push(state.kind);if(state.meal!=='all')active.push(state.meal==='daily'?'日常餐／輕食':'正式餐／特地安排');if(state.q)active.push('搜尋：'+state.q);
    document.getElementById('activeFilters').textContent=active.join(' · ');
    document.getElementById('nearbyGroups').innerHTML=rows.length?groups(rows):'<div class="empty">沒有符合這組條件的地點。可清除步行圈、街區或類型篩選。</div>';
    saveUrl();
  }
  app.addEventListener('click',e=>{const button=e.target.closest('button');if(!button)return;for(const key of ['cat','scope','geo','walk','kind','meal','mode'])if(button.dataset[key]!==undefined){state[key]=button.dataset[key];if(key==='cat'&&!themed()&&geoMap[state.geo]?.area)state.geo='all';render();return;}if(button.id==='resetFilters'){state={cat:'all',scope:'all',geo:'all',walk:'all',kind:'all',meal:'all',mode:state.mode,q:''};document.getElementById('nearbySearch').value='';render();}});
  document.getElementById('nearbySearch').addEventListener('input',e=>{state.q=e.target.value.trim();render();});
  window.addEventListener('popstate',()=>{state=readState();document.getElementById('nearbySearch').value=state.q;render();});
  render();
})();
