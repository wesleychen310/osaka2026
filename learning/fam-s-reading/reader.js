/* Shared FAM-S reader v2. Private content is loaded by the authenticated shell. */
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
const copyStatus=document.createElement('div');copyStatus.className='copy-status';copyStatus.setAttribute('role','status');copyStatus.hidden=true;body.append(copyStatus);
let copyTimer;
function reportCopy(ok){copyStatus.textContent=ok?'LaTeX 已複製 / Copied':'無法複製，請重試 / Copy failed';copyStatus.hidden=false;clearTimeout(copyTimer);copyTimer=setTimeout(()=>copyStatus.hidden=true,1800)}
async function copyTex(el){
 const tex=el.dataset.copy||el.dataset.tex||el.closest('[data-tex]')?.dataset.tex||'';if(!tex)return;
 try{
  if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(tex);
  else{const area=document.createElement('textarea');area.value=tex;area.style.cssText='position:fixed;left:-9999px';body.append(area);area.select();const ok=document.execCommand('copy');area.remove();if(!ok)throw new Error('copy');}
  reportCopy(true);
 }catch{reportCopy(false)}
}
document.querySelectorAll('.inline-math[data-tex]').forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');el.title='複製 LaTeX / Copy LaTeX';el.setAttribute('aria-label','複製公式 LaTeX / Copy formula LaTeX')});
document.addEventListener('click',e=>{const el=e.target.closest('button[data-copy],.inline-math[data-tex]');if(el&&!window.getSelection()?.toString())copyTex(el)});
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.inline-math[data-tex]')){e.preventDefault();copyTex(e.target)}});
document.addEventListener('click',e=>{
 const link=e.target.closest('a.figure-zoom');if(!link||!window.HTMLDialogElement)return;
 e.preventDefault();const dialog=document.createElement('dialog');dialog.className='figure-dialog';
 const close=document.createElement('button');close.type='button';close.className='btn';close.textContent='關閉 / Close';
 const scroll=document.createElement('div');scroll.className='figure-full';const img=link.querySelector('img')?.cloneNode();
 if(!img)return;scroll.append(img);dialog.append(close,scroll);body.append(dialog);
 close.addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>dialog.remove());dialog.showModal();
});
const box=document.getElementById('search-text'),counter=document.getElementById('search-count');
if(box){
 const exercises=[...document.querySelectorAll('.typed-exercise')],refs=[...document.querySelectorAll('.sourcepage')];
 const update=()=>{
 const q=box.value.trim().toLowerCase();let hits=0;
 [...exercises,...refs].forEach(e=>{const found=!q||e.textContent.toLowerCase().includes(q);e.hidden=!found;e.style.display=found?'':'none';if(q&&found)hits++});
 if(counter)counter.textContent=q?hits+' 個符合的題目':exercises.length+' 題';
 };box.addEventListener('input',update);update();
}
function openHash(){
 if(!location.hash)return;
 let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}
 const target=document.getElementById(id==='typed-exercises'?'exercises':id);if(!target)return;
 if(box?.value){box.value='';box.dispatchEvent(new Event('input'))}
 for(let d=target.closest('details');d;d=d.parentElement?.closest('details'))d.open=true;
 requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}));
}
function navHeight(){root.style.setProperty('--reader-nav-height',Math.ceil(document.querySelector('nav.top')?.getBoundingClientRect().height||90)+12+'px')}
navHeight();if(window.ResizeObserver&&document.querySelector('nav.top'))new ResizeObserver(navHeight).observe(document.querySelector('nav.top'));
window.addEventListener('hashchange',openHash);
setTimeout(openHash,150);
document.fonts?.ready.then(openHash);
window.FAMReader={version:'2.0',mode:()=>mode,activate,openHash};
})();
