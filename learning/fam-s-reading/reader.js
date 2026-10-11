/* Shared FAM-S reader v1. Private textbook is fetched via authenticated Drive shell. */
(()=>{'use strict';
const root=document.documentElement,body=document.body;
if(!body||body.dataset.readerInitialized==='1')return;
body.dataset.readerInitialized='1';
const KEY='fams-reading-mode-v1',legacy='fams11-mode',modes=new Set(['en','zh','side']);
const buttons=[...document.querySelectorAll('nav.top [data-switch]')];
let mode='en';try{mode=localStorage.getItem(KEY)||localStorage.getItem(legacy)||'en'}catch{}
function anchor(){
 const y=(document.querySelector('nav.top')?.getBoundingClientRect().bottom||0)+8;
 return [...document.querySelectorAll('main .pair,main .typed-exercise,main .mbox,main figure')].find(e=>{const r=e.getBoundingClientRect();return r.height>0&&r.bottom>y});
}
function activate(next,persist=true){
 if(!modes.has(next))next='en';
 const current=window.scrollY>180?anchor():null,top=current?.getBoundingClientRect().top;
 mode=next;body.dataset.mode=mode;root.lang=mode==='en'?'en':'zh-Hant-TW';
 buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.switch===mode)));
 if(persist)try{localStorage.setItem(KEY,mode)}catch{}
 if(current&&top!==undefined)requestAnimationFrame(()=>{if(current.isConnected&&current.getBoundingClientRect().height>0)window.scrollBy({top:current.getBoundingClientRect().top-top,behavior:'instant'})});
}
buttons.forEach(b=>b.addEventListener('click',()=>activate(b.dataset.switch)));
activate(mode,false);
window.addEventListener('storage',e=>{if(e.key===KEY&&modes.has(e.newValue))activate(e.newValue,false)});
document.addEventListener('click',async e=>{
 const b=e.target.closest('button[data-copy]');if(!b)return;
 try{await navigator.clipboard.writeText(b.dataset.copy||b.closest('[data-tex]')?.dataset.tex||'');
 const old=b.textContent;b.textContent='Copied ✓';setTimeout(()=>b.textContent=old,1100)}catch{}
});
const box=document.getElementById('search-text'),counter=document.getElementById('search-count');
if(box){
 const exercises=[...document.querySelectorAll('.typed-exercise')],refs=[...document.querySelectorAll('.sourcepage')];
 const update=()=>{
 const q=box.value.trim().toLowerCase();let hits=0;
 [...exercises,...refs].forEach(e=>{const found=!q||e.textContent.toLowerCase().includes(q);e.hidden=!found;e.style.display=found?'':'none';if(q&&found)hits++});
 if(counter)counter.textContent=q?hits+' 個符合的題目／備查頁':exercises.length+' 題 · '+refs.length+' 備查頁';
 };box.addEventListener('input',update);update();
}
function openHash(){
 if(!location.hash)return;
 let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}
 const target=document.getElementById(id);if(!target)return;
 for(let d=target.closest('details');d;d=d.parentElement?.closest('details'))d.open=true;
 requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
}
window.addEventListener('hashchange',openHash);
setTimeout(openHash,150);
window.FAMReader={version:'1.0',mode:()=>mode,activate};
})();