const DB=window.KYOTO_PLACES;
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const mapLink=(label,query,cls='map')=>`<a class="${cls}" target="_blank" rel="noopener" href="${mapUrl(query)}">${label}</a>`;
const esc=s=>String(s??'');
function bookQuery(name){return DB.bookMapQueries?.[name]||DB.places.find(p=>p.category==='books'&&p.name===name)?.mapQuery||`${name} 京都`;}
function sortPlaces(list){const rank={high:0,normal:1,low:2};return [...list].sort((a,b)=>(rank[a.priority]??1)-(rank[b.priority]??1)||a.name.localeCompare(b.name,'ja'));}
function header(){return `<header class="top"><h1>🌸 樂京都 2026</h1><div class="small">書店正本：KYOTO_BOOKS → KYOTO_PLACES</div><div class="nav"><a class="btn" href="index.html">總目錄</a><a class="btn" href="itinerary.html">每日行程</a><a class="btn" href="theme-must-go.html">本次必去</a><a class="btn primary" href="type-books.html">書店</a></div></header>`;}
function placeCard(p){return `<article class="place-card card"><div>${p.priority==='high'?'<span class="tag pick">優先</span>':''}<span class="tag">${esc(p.typeLabel)}</span><span class="tag muted">地區：${esc(p.areaLabel)}</span></div><h3>${esc(p.name)}</h3><p class="note">${esc(p.description||p.summary||'順路備案。')}</p><div>${mapLink('📍 Google Maps',p.mapQuery||bookQuery(p.name))}</div></article>`;}
function priorityCard(group){return `<article class="route-card card"><span class="tag pick">優先</span><h3>${esc(group.title)}</h3><div class="routechips">${group.items.map((name,i)=>mapLink(`${i+1}. ${name}`,bookQuery(name),'map')).join('')}</div></article>`;}
function routeCard(route){return `<article class="route-card card"><span class="tag pick">實用路線</span><h3>${esc(route.title)}</h3><div class="routechips">${route.items.map((name,i)=>mapLink(`${i+1}. ${name}`,bookQuery(name),'map')).join('')}</div><p class="note">每一站均可直接開啟 Google Maps。</p></article>`;}
function renderBooks(){
 if(!DB){document.querySelector('main').innerHTML='<section class="card"><h2>資料尚未載入</h2></section>';return;}
 document.body.insertAdjacentHTML('afterbegin',header());
 const themeBookItems=sortPlaces(DB.places.filter(p=>p.category==='books'&&!p.bookSection));
 const nav=`<div class="nav localnav">${DB.bookSections.map(s=>`<a class="btn" href="#${s.id}">${s.title}</a>`).join('')}${themeBookItems.length?`<a class="btn" href="#theme-books">本次必去 ${themeBookItems.length}</a>`:''}</div>`;
 const priority=`<h2>${DB.bookPriority.title}</h2><div class="grid">${DB.bookPriority.groups.map(priorityCard).join('')}</div>`;
 const routes=`<h2>你的實用路線</h2><div class="grid">${DB.bookRoutes.map(routeCard).join('')}</div>`;
 const sections=DB.bookSections.map(section=>{const items=sortPlaces(DB.places.filter(p=>p.category==='books'&&p.bookSection===section.id));return `<section class="typeblock" id="${section.id}"><h2>${section.title} <span class="small">${items.length} 筆</span></h2><div class="card"><p class="note">${section.lead}</p></div><div class="placegrid">${items.map(placeCard).join('')}</div></section>`;}).join('');
 const themeBooks=themeBookItems.length?`<section class="typeblock" id="theme-books"><h2>本次必去書店 <span class="small">${themeBookItems.length} 筆</span></h2><div class="placegrid">${themeBookItems.map(placeCard).join('')}</div></section>`:'';
 document.querySelector('main').innerHTML=`<section class="hero-card card"><span class="tag pick">書店正本資料</span><h2>京都書店／古書店</h2><p class="note">所有書店卡片、優先名單與實用路線均使用統一 mapQuery 開啟 Google Maps。</p><div class="statbar"><span>${DB.places.filter(p=>p.category==='books').length} 筆書店</span><span>${DB.bookSections.length} 個書店區</span></div><a class="map" href="index.html">回總目錄</a></section>${nav}${priority}${routes}${sections}${themeBooks}<a class="back" href="#">↑ 上方</a>`;
}
document.addEventListener('DOMContentLoaded',renderBooks);
