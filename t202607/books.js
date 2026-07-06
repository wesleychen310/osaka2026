const map=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
function mlink(label,q,cls='map'){return `<a class="${cls}" target="_blank" rel="noopener" href="${map(q||label)}">${label}</a>`;}
function itemCard(x){return `<div class="card"><span class="tag old">${x.type}</span><h3>${x.name}</h3><p class="note">${x.note}</p>${mlink('📍 Google Maps',x.name)}</div>`;}
function routeCard(r){return `<div class="card"><span class="tag">實用路線</span><h3>${r.title}</h3><div>${r.items.map((x,i)=>`<span class="pill">${i+1}. ${x}</span>`).join('')}</div><p class="note">可用作方向順序，不代表每一站都必進。</p></div>`;}
function priorityCard(g){return `<div class="card"><span class="tag">優先</span><h3>${g.title}</h3><div>${g.items.map(x=>mlink(x,x)).join('')}</div></div>`;}
function renderBooks(){const data=KYOTO_BOOKS;document.body.insertAdjacentHTML('afterbegin',`<header class="top"><h1>📚 ${data.title}</h1><div class="small">獨立書店頁｜依地區分段，含新書、古書、選書店與地圖連結</div><div class="nav"><a class="btn" href="index.html">總目錄</a><a class="btn primary" href="type-books.html">書店</a><a class="btn" href="itinerary.html">每日行程</a></div></header>`);
const nav=`<div class="nav">${data.sections.map(s=>`<a class="btn" href="#${s.id}">${s.title}</a>`).join('')}</div>`;
const priority=`<h2>${data.priority.title}</h2><div class="grid">${data.priority.groups.map(priorityCard).join('')}</div>`;
const routes=`<h2>你的實用路線</h2><div class="grid">${data.routes.map(routeCard).join('')}</div>`;
const sections=data.sections.map(s=>`<section id="${s.id}" class="typeblock"><h2>${s.title} <span class="small">${s.items.length} 筆</span></h2><div class="card"><p class="note">${s.lead}</p></div><div class="grid">${s.items.map(itemCard).join('')}</div></section>`).join('');
document.querySelector('main').innerHTML=`<div class="card"><span class="tag">書店正本資料</span><p class="note">${data.lead}</p></div>${nav}${priority}${routes}${sections}<a class="back" href="#">↑ 上方</a>`;}
document.addEventListener('DOMContentLoaded',renderBooks);