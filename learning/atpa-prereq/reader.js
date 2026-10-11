/* ATPA prereq three-mode adapter. Load AFTER original shared reading-mode controller. */
(()=>{'use strict';
const KEY='atpa-prereq-language-v1';
const root=document.documentElement;
const bar=document.getElementById('islp-reading-mode');
if(!bar)return;
bar.querySelector('button[data-mode="bi"]')?.remove();
const opts=bar.querySelector('.islp-mode-options');
if(opts){opts.setAttribute('aria-label','ATPA 先備教材閱讀模式');}
const names={zh:'全中文',en:'全英文',parallel:'左右對照'};
bar.querySelectorAll('button[data-mode]').forEach(b=>{if(names[b.dataset.mode]){b.textContent=names[b.dataset.mode];b.removeAttribute('title')}});
const valid=x=>Object.prototype.hasOwnProperty.call(names,x);
let saved='zh';try{const s=localStorage.getItem(KEY);if(valid(s))saved=s}catch(_){}
function apply(v){if(!valid(v))return;root.dataset.islpReadingMode=v;bar.querySelectorAll('button[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===v)));if(v==='zh'&&'speechSynthesis'in window)window.speechSynthesis.cancel()}
apply(saved);
bar.addEventListener('click',e=>{const b=e.target.closest('button[data-mode]');if(!b||!valid(b.dataset.mode))return;apply(b.dataset.mode);try{localStorage.setItem(KEY,b.dataset.mode)}catch(_){}});
window.addEventListener('storage',e=>{if(e.key===KEY&&valid(e.newValue))apply(e.newValue)});
const topbar=document.querySelector('body > .topbar');
if(topbar){const sync=()=>{let h=0;try{let s=getComputedStyle(topbar);if(['fixed','sticky'].includes(s.position))h=topbar.getBoundingClientRect().height}catch(_){}root.style.setProperty('--islp-mode-top',h+'px')};sync();window.addEventListener('resize',sync,{passive:true})}
})();
