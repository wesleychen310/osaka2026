/* Generic private scan/OCR reader. No textbook text is stored in this file. */
(()=>{'use strict';
const body=document.body,unit=body.dataset.unit;
if(!unit)return;
const pages=[...document.querySelectorAll('.book-page')];
for(const image of document.querySelectorAll('.inline-source')){
 const wrap=document.createElement('span');wrap.className='inline-math-scroll';
 image.replaceWith(wrap);wrap.append(image);
}
const jump=document.getElementById('page-number'),zoom=document.getElementById('size-setting');
const KEY='short-term-reading-v1',RESUME='short-term-last-v1';
const meta=JSON.parse(document.getElementById('book-units').textContent);
const bar=document.querySelector('.book-bar');
function barSize(){document.documentElement.style.setProperty('--bar-height',Math.ceil(bar.getBoundingClientRect().height)+'px')}
if(typeof ResizeObserver==='function')new ResizeObserver(barSize).observe(bar);barSize();
let settings={view:'text',zoom:'100',textSize:'19'},ticking=false;
try{Object.assign(settings,JSON.parse(localStorage.getItem(KEY)||'{}'))}catch{}
const limits=[Number(pages[0]?.dataset.page),Number(pages.at(-1)?.dataset.page)];
function current(){
 const y=Math.max(document.querySelector('.book-bar').getBoundingClientRect().bottom+20,innerHeight*.4);
 let chosen=pages[0],distance=Infinity;
 for(const p of pages){const r=p.getBoundingClientRect();const d=Math.max(0,r.top-y,y-r.bottom);if(d<distance){chosen=p;distance=d;if(!d)break}}
 const r=chosen.getBoundingClientRect();return {node:chosen,page:Number(chosen.dataset.page),fraction:Math.max(0,Math.min(1,(y-r.top)/Math.max(1,r.height))),y};
}
function restore(a){if(!a?.node?.isConnected)return;const r=a.node.getBoundingClientRect();scrollBy({top:r.top+a.fraction*r.height-a.y,behavior:'instant'})}
function targetURL(u,page){return location.protocol==='file:'?u.file+'#p'+page:'./?unit='+encodeURIComponent(u.id)+'#p'+page}
function go(page){
 page=Math.round(Number(page));if(!Number.isFinite(page))return;
 if(page<limits[0]||page>limits[1]){const u=meta.find(u=>page>=u.start&&page<=u.end);if(u)location.assign(targetURL(u,page));return}
 const p=document.getElementById('p'+page);if(p){location.hash='p'+page;p.scrollIntoView({block:'start',behavior:'instant'});loadNear();save()}
}
function save(){const a=current();if(jump&&document.activeElement!==jump)jump.value=a.page;try{localStorage.setItem(RESUME,JSON.stringify({unit,page:a.page,fraction:a.fraction}));localStorage.setItem('short-term-position-'+unit,JSON.stringify({page:a.page,fraction:a.fraction}))}catch{}}
let observer=null;
function hydrate(p){const img=p.querySelector('.scan-image');if(img&&!img.getAttribute('src'))img.src=img.dataset.src;}
function loadNear(){
 if(body.dataset.view!=='scan')return;
 for(const p of pages){const r=p.getBoundingClientRect(),img=p.querySelector('.scan-image');
  if(r.bottom>-1200&&r.top<innerHeight+1400)hydrate(p);
  else if((r.bottom<-5000||r.top>innerHeight+6000)&&img?.getAttribute('src'))img.removeAttribute('src');
 }
}
function apply(view,preserve=true){
 const a=preserve?current():null;settings.view=view==='text'?'text':'scan';body.dataset.view=settings.view;
 document.querySelectorAll('[data-view-button]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.viewButton===settings.view)));
 if(settings.view==='scan')zoom.innerHTML='<option value="100">適合寬度</option><option value="150">放大 150%</option><option value="200">放大 200%</option><option value="260">放大 260%</option>';
 else zoom.innerHTML='<option value="18">字級 18</option><option value="19">字級 19</option><option value="21">字級 21</option><option value="23">字級 23</option>';
 zoom.value=settings.view==='scan'?settings.zoom:settings.textSize;resize(false);loadNear();
 if(a){restore(a);requestAnimationFrame(()=>restore(a))}persist();
}
function persist(){try{localStorage.setItem(KEY,JSON.stringify(settings))}catch{}}
function resize(preserve=true){const a=preserve?current():null;if(body.dataset.view==='scan'){settings.zoom=zoom.value;document.documentElement.style.setProperty('--scan-width',Number(zoom.value)+'%')}else{settings.textSize=zoom.value;document.documentElement.style.setProperty('--text-size',Number(zoom.value)+'px')}if(a)requestAnimationFrame(()=>restore(a));persist()}
document.querySelectorAll('[data-view-button]').forEach(b=>b.addEventListener('click',()=>apply(b.dataset.viewButton)));
zoom.addEventListener('change',()=>resize());jump.addEventListener('change',()=>go(jump.value));jump.addEventListener('keydown',e=>{if(e.key==='Enter'){go(jump.value);jump.blur()}});
document.getElementById('previous-page').addEventListener('click',()=>go(current().page-1));
document.getElementById('next-page').addEventListener('click',()=>go(current().page+1));
const backdrop=document.getElementById('drawer-backdrop'),toc=document.getElementById('toc-drawer'),search=document.getElementById('search-drawer');let opener=null;
function close(){toc.hidden=true;search.hidden=true;backdrop.hidden=true;body.style.overflow='';opener?.focus()}
function open(which,button){opener=button;toc.hidden=which!=='toc';search.hidden=which!=='search';backdrop.hidden=false;body.style.overflow='hidden';(which==='search'?document.getElementById('book-search'):toc.querySelector('button')).focus()}
document.getElementById('open-toc').addEventListener('click',e=>open('toc',e.currentTarget));document.getElementById('open-search').addEventListener('click',e=>open('search',e.currentTarget));document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',close));backdrop.addEventListener('click',close);document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
toc.addEventListener('click',e=>{if(e.target.closest('a'))close()});
for(const a of document.querySelectorAll('[data-unit-link]')){const u=meta.find(u=>u.id===a.dataset.unitLink);if(u)a.href=targetURL(u,Number(a.dataset.page)||u.start);a.addEventListener('click',()=>{if(a.hash&&a.pathname===location.pathname&&new URL(a.href).search===location.search)close()})}
const catalogue=window.ShortBookCatalog;const localPages=pages.map(p=>({page:Number(p.dataset.page),unit,text:p.querySelector('.page-text').textContent}));
const query=document.getElementById('book-search'),results=document.getElementById('search-results'),status=document.getElementById('search-status');let timer;
query.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>{
 const q=query.value.trim().toLowerCase();results.replaceChildren();if(q.length<2){status.textContent='輸入至少兩個字元；搜尋 PDF 文字層。';return}
 const pool=catalogue?.pages||localPages;const found=pool.filter(p=>p.text.toLowerCase().includes(q));status.textContent='找到 '+found.length+' 頁'+(catalogue?'':'（本課）');
 for(const p of found.slice(0,120)){const u=meta.find(u=>u.id===p.unit);if(!u)continue;const a=document.createElement('a');a.className='search-result';a.href=targetURL(u,p.page);const strong=document.createElement('strong');strong.textContent=u.label+' · PDF '+p.page;const span=document.createElement('span');const i=p.text.toLowerCase().indexOf(q);span.textContent=p.text.slice(Math.max(0,i-60),i+140).replace(/\s+/g,' ');a.append(strong,span);results.append(a)}
},160)});
addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{ticking=false;loadNear();save()})},{passive:true});addEventListener('resize',loadNear);addEventListener('beforeprint',()=>pages.forEach(hydrate));
apply(settings.view,false);
let requested=Number(location.hash.match(/^#p(\d+)$/)?.[1]);const explicitPage=!!requested;let saved=null;
try{saved=JSON.parse(localStorage.getItem('short-term-position-'+unit)||'null')}catch{}
if(!requested&&saved)requested=saved.page;
if(requested)requestAnimationFrame(()=>{go(requested);if(saved&&!explicitPage){const node=document.getElementById('p'+saved.page);if(node&&saved.fraction)requestAnimationFrame(()=>{const r=node.getBoundingClientRect();scrollBy({top:r.top+saved.fraction*r.height-Math.max(bar.getBoundingClientRect().bottom+20,innerHeight*.4),behavior:'instant'})})}});
else{loadNear();save()}
})();
