/* GPT links keep normal navigation; their prompts can also be copied alone. */
(function(){
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function link(url,label,classes){
    const menu=classes.split(' ').includes('menu-action');
    return `<div class="prompt-action${menu?' menu-prompt-action':''}"><a class="${esc(classes)}" href="${esc(url)}" target="_blank" rel="noopener" title="開啟 GPT，並複製提示詞">${esc(label)}</a><button type="button" class="prompt-copy" aria-label="複製${menu?'菜單':'簡介'}提示詞" title="只複製提示詞">複製</button></div>`;
  }
  let toast,timer;
  function announce(message){
    if(!toast){toast=document.createElement('div');toast.className='prompt-toast';toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');document.body.appendChild(toast);}
    clearTimeout(timer);toast.textContent=message;toast.hidden=false;
    timer=setTimeout(()=>{toast.hidden=true;},3000);
  }
  function legacyCopy(text){
    const active=document.activeElement,field=document.createElement('textarea');
    field.value=text;field.readOnly=true;field.style.cssText='position:fixed;top:0;left:0;opacity:0;font-size:16px;pointer-events:none';
    document.body.appendChild(field);field.select();field.setSelectionRange(0,text.length);
    let ok=false;try{ok=!!document.execCommand?.('copy');}catch(_){}
    field.remove();if(active?.isConnected)active.focus({preventScroll:true});return ok;
  }
  function manualCopy(text){
    let panel=document.getElementById('promptCopyDialog');
    if(!panel){
      panel=document.createElement('dialog');panel.id='promptCopyDialog';panel.className='prompt-copy-dialog';
      panel.innerHTML='<h2>複製提示詞</h2><p>瀏覽器未完成自動複製。請長按文字選取並複製。</p><textarea aria-label="完整提示詞" readonly></textarea><div><button type="button" class="prompt-select">選取全部</button><button type="button" class="prompt-close">關閉</button></div>';
      document.body.appendChild(panel);
      panel.querySelector('.prompt-select').addEventListener('click',()=>{const field=panel.querySelector('textarea');field.focus();field.select();field.setSelectionRange(0,field.value.length);});
      panel.querySelector('.prompt-close').addEventListener('click',()=>panel.close());
    }
    panel.querySelector('textarea').value=text;if(!panel.open)panel.showModal();
  }
  function copy(text){
    const success=()=>announce('提示詞已複製，可貼到你選的對話');
    const fallback=()=>{if(legacyCopy(text))success();else manualCopy(text);};
    // Invoke immediately within the click gesture, including on Safari.
    try{if(navigator.clipboard?.writeText){navigator.clipboard.writeText(text).then(success,fallback);}else fallback();}catch(_){fallback();}
  }
  document.addEventListener('click',e=>{
    const target=e.target.closest?.('.prompt-copy, .prompt-action a');if(!target)return;
    const anchor=target.matches('a')?target:target.closest('.prompt-action').querySelector('a');
    const url=new URL(anchor.href);if(url.origin!=='https://chatgpt.com')return;
    const prompt=url.searchParams.get('q');if(prompt)copy(prompt);
    // No preventDefault or delayed window.open: the original GPT link still works.
  });
  window.KYOTO2027_GPT_ACTIONS={link};
})();
