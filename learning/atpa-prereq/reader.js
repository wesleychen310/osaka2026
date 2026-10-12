/* ATPA prereq four-mode adapter. Original three reading modes remain unchanged. */
(()=>{'use strict';
const KEY='atpa-prereq-language-v1';
const root=document.documentElement;
const bar=document.getElementById('islp-reading-mode');
if(!bar)return;
bar.querySelector('button[data-mode="bi"]')?.remove();
const opts=bar.querySelector('.islp-mode-options');
if(opts){
  opts.setAttribute('aria-label','ATPA 先備教材閱讀模式');
  if(!opts.querySelector('button[data-mode="swipe"]')){
    const button=document.createElement('button');
    button.type='button';
    button.dataset.mode='swipe';
    button.textContent='大字橫滑';
    button.setAttribute('aria-pressed','false');
    button.title='英文與繁體中文以大字左右排列；在段落上左右滑動閱讀';
    opts.appendChild(button);
  }
}
const names={zh:'全中文',en:'全英文',parallel:'左右對照',swipe:'大字橫滑'};
bar.querySelectorAll('button[data-mode]').forEach(b=>{
  if(names[b.dataset.mode]){
    b.textContent=names[b.dataset.mode];
    if(b.dataset.mode!=='swipe')b.removeAttribute('title');
  }
});
const hint=document.createElement('div');
hint.id='atpa-swipe-hint';
hint.textContent='↔ 在每段文字上左右滑動：英文原文 ⇄ 繁體中文（大字）';
hint.setAttribute('aria-live','polite');
bar.appendChild(hint);
const pairs=[...document.querySelectorAll('.islp-parallel-pair')];
const valid=x=>Object.prototype.hasOwnProperty.call(names,x);
let saved='zh';
try{const s=localStorage.getItem(KEY);if(valid(s))saved=s}catch(_){}
function apply(v){
  if(!valid(v))return;
  root.dataset.islpReadingMode=v;
  bar.querySelectorAll('button[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===v)));
  pairs.forEach(pair=>{
    if(v==='swipe'){
      pair.setAttribute('tabindex','0');
      pair.setAttribute('aria-label','大字雙語對照：向左滑動看中文，向右滑動看英文');
      pair.scrollLeft=0;
    }else{
      pair.removeAttribute('tabindex');
      pair.removeAttribute('aria-label');
    }
  });
  if(v==='zh'&&'speechSynthesis'in window)window.speechSynthesis.cancel();
}
apply(saved);
bar.addEventListener('click',e=>{
  const b=e.target.closest('button[data-mode]');
  if(!b||!valid(b.dataset.mode))return;
  apply(b.dataset.mode);
  try{localStorage.setItem(KEY,b.dataset.mode)}catch(_){}
});
window.addEventListener('storage',e=>{if(e.key===KEY&&valid(e.newValue))apply(e.newValue)});
const topbar=document.querySelector('body > .topbar');
if(topbar){
  const sync=()=>{
    let h=0;
    try{let s=getComputedStyle(topbar);if(['fixed','sticky'].includes(s.position))h=topbar.getBoundingClientRect().height}catch(_){}
    root.style.setProperty('--islp-mode-top',h+'px');
  };
  sync();
  window.addEventListener('resize',sync,{passive:true});
}
})();
