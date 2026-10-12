/* Public UI shell only. Full copyrighted Japanese/English text and translations stay in restricted Google Drive. */
(()=>{'use strict';
const CLIENT_ID='57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com';
const FILE_ID='1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_';
const SCOPE='https://www.googleapis.com/auth/drive.readonly';
const TOKEN_KEY='hanami-kyoto-google-token-v3';
const MODE_KEY='yamada-speaking-language-mode-v1';
const MODES=['ja','zh','vertical','parallel'];
const $=id=>document.getElementById(id);
let tokenClient=null,ready=false,chapters=[];
function getSaved(){try{const s=JSON.parse(sessionStorage.getItem(TOKEN_KEY)||'null');return s?.access_token&&Number(s.expires_at)>Date.now()+90000?s.access_token:null}catch(_){return null}}
function saveToken(t){sessionStorage.setItem(TOKEN_KEY,JSON.stringify({access_token:t.access_token,expires_at:Date.now()+1000*Number(t.expires_in||3600)}));return t.access_token}
function status(s){$('gate-status').textContent=s}
function mode(m){if(!MODES.includes(m))m='zh';document.documentElement.dataset.readingMode=m;document.querySelectorAll('button[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===m)));try{localStorage.setItem(MODE_KEY,m)}catch(_){}}
function sanitize(src){const root=src.querySelector('#yamada-source');if(!root)throw Error('教材資料缺少必要的章節容器。');root.querySelectorAll('script,style,iframe,object,embed,form,button,input,link,meta').forEach(n=>n.remove());root.querySelectorAll('*').forEach(el=>{for(const a of [...el.attributes]){const k=a.name.toLowerCase();if(k.startsWith('on')||k==='style'||k==='srcset')el.removeAttribute(a.name)}if(el.tagName==='IMG'&&!/^data:image\/jpeg;base64,[a-z0-9+/=]+$/i.test(el.getAttribute('src')||''))el.remove();if(el.tagName==='A'&&!/^https:\/\//.test(el.getAttribute('href')||''))el.removeAttribute('href')});return root}
function buildToc(){const list=$('toc-items');list.replaceChildren();chapters.forEach(ch=>{const a=document.createElement('a');a.className='toc-link'+(ch.dataset.status==='pending'?' pending':'');a.href='#'+ch.id;a.textContent=ch.querySelector('h2')?.textContent||ch.id;a.addEventListener('click',()=>{$('toc').classList.remove('open');$('toc-open').setAttribute('aria-expanded','false')});list.appendChild(a)});}
function enhanceEnglish(){document.querySelectorAll('.keyphrase>p[lang="en"],.english-block[data-kind="dialogue"]>p[lang="en"]').forEach(p=>{const text=p.textContent;const b=document.createElement('button');b.type='button';b.className='speak';b.setAttribute('aria-label','朗讀這一句英文');b.textContent='🔊 英文';b.addEventListener('click',()=>{if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text.replace(/^(Passenger|Traveler|Officer|CA|Staff|Guest):\s*/,''));u.lang='en-US';u.rate=.88;window.speechSynthesis.speak(u)});p.appendChild(b)})}

/* Taiwan/official prompt UI: public behavior only; full prompt bodies arrive from private Drive. */
const PROMPT_MODE_KEY='yamada-speaking-prompt-mode-v1';
function preferredPromptMode(){try{return localStorage.getItem(PROMPT_MODE_KEY)==='official'?'official':'tw'}catch(_){return 'tw'}}
function makePromptButton(label,className,onClick){
  const b=document.createElement('button');b.type='button';b.className=className;b.textContent=label;b.addEventListener('click',onClick);return b;
}
async function copyPromptText(txt){
  if(!txt)return false;
  try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(txt);return true}}catch(_){}
  const ta=document.createElement('textarea');
  ta.value=txt;ta.readOnly=true;ta.style.cssText='position:fixed;top:0;left:-9999px;opacity:0';
  document.body.appendChild(ta);ta.focus();ta.select();
  let ok=false;try{ok=document.execCommand('copy')}catch(_){}ta.remove();return ok;
}
function enhancePromptLabs(){
  document.querySelectorAll('#book-content section.prompt-lab[data-prompt-scene]').forEach(lab=>{
    const scene=lab.closest('section.chapter');if(!scene)return;
    const allSteps=[...lab.querySelectorAll(':scope > section.prompt-step[data-step]')];
    if(allSteps.length!==3||allSteps.some(s=>!s.querySelector('.prompt-pane[data-variant=tw] .prompt-body')||!s.querySelector('.prompt-pane[data-variant=official]')))return;
    const lessonHeadings=[...scene.children].filter(x=>x.tagName==='H3'&&/^STEP\s*[123]/.test(x.textContent.trim()));
    if(lessonHeadings.length!==3)return;
    const allbar=document.createElement('div');allbar.className='prompt-all-actions';
    const allStatus=document.createElement('span');allStatus.className='prompt-action-status';allStatus.setAttribute('role','status');
    const allCopy=makePromptButton('複製本課台灣版 STEP 1–3','prompt-copy-all',async()=>{
      const text=allSteps.map(s=>s.querySelector('.prompt-pane[data-variant=tw] .prompt-body').textContent.trim()).join('\n\n────────────\n\n');
      allStatus.textContent=(await copyPromptText(text))?'已複製本課完整三步驟 Prompt':'複製失敗，請改為個別選取文字';
    });
    allbar.append(allCopy,allStatus);lab.appendChild(allbar);
    lessonHeadings[0].before(lab);
    allSteps.forEach((block,index)=>{
      const heading=lessonHeadings[index];let last=heading;let cursor=heading.nextElementSibling;
      while(cursor && cursor.tagName!=='H3' && cursor!==lab && !cursor.classList.contains('prompt-step')){
        last=cursor;cursor=cursor.nextElementSibling;
      }
      last.after(block);
      const controls=block.querySelector('.prompt-controls');const official=block.querySelector('.prompt-pane[data-variant=official]');const tw=block.querySelector('.prompt-pane[data-variant=tw]');
      const prompt=tw.querySelector('.prompt-body').textContent.trim();
      const isOfficialReady=official.dataset.officialStatus==='verified'&&!!official.querySelector('.prompt-body')?.textContent.trim();
      const tabs=document.createElement('div');tabs.className='prompt-variant-tabs';tabs.setAttribute('role','group');tabs.setAttribute('aria-label','Prompt 版本');
      const officialTab=makePromptButton('日本官方原版','prompt-variant-tab',()=>select('official'));
      const twTab=makePromptButton('台灣在地化版','prompt-variant-tab',()=>select('tw'));
      const actions=document.createElement('div');actions.className='prompt-step-actions';
      const copy=makePromptButton('複製完整 Prompt','prompt-copy',async()=>{
        if(active==='official'&&!isOfficialReady)return;
        const txt=active==='official'?official.querySelector('.prompt-body').textContent.trim():prompt;
        stat.textContent=(await copyPromptText(txt))?'已複製完整 STEP '+block.dataset.step+' Prompt':'複製失敗，請手動選取文字';
      });
      const launch=makePromptButton('複製並開啟 ChatGPT ↗','prompt-launch',()=>{
        if(active==='official'&&!isOfficialReady)return;
        const txt=active==='official'?official.querySelector('.prompt-body').textContent.trim():prompt;
        // Call both operations synchronously in the direct user gesture, to avoid popup blockers.
        const copying=copyPromptText(txt);
        const tab=window.open('https://chatgpt.com/','_blank','noopener,noreferrer');
        Promise.resolve(copying).then(ok=>{stat.textContent=ok?'已複製 Prompt；請切換到 ChatGPT 貼上開始練習':'請選取 Prompt 文字複製後，貼到 ChatGPT';});
        if(!tab)stat.textContent='如果未開啟 ChatGPT，請先複製，再手動開啟 chatgpt.com';
      });
      const stat=document.createElement('span');stat.className='prompt-action-status';stat.setAttribute('role','status');
      actions.append(copy,launch,stat);tabs.append(officialTab,twTab);controls.append(tabs,actions);
      let active='tw';
      function select(value){
        active=value;official.hidden=value!=='official';tw.hidden=value!=='tw';
        officialTab.setAttribute('aria-pressed',String(value==='official'));twTab.setAttribute('aria-pressed',String(value==='tw'));
        const disabled=value==='official'&&!isOfficialReady;
        copy.disabled=disabled;launch.disabled=disabled;
        copy.title=disabled?'官方 Prompt 原文尚未取得，待核實後開放複製':'複製此 STEP 全部內容';
        launch.title=copy.title;stat.textContent=disabled?'官方 Prompt 尚未取得；可開啟上方 QR 對應的出版社頁面':'';
      }
      select(preferredPromptMode());
      officialTab.addEventListener('click',()=>{try{localStorage.setItem(PROMPT_MODE_KEY,'official')}catch(_){}});
      twTab.addEventListener('click',()=>{try{localStorage.setItem(PROMPT_MODE_KEY,'tw')}catch(_){}});
    });
  });
}

function mount(raw){const doc=new DOMParser().parseFromString(raw,'text/html');const source=sanitize(doc);const all=[...source.querySelectorAll(':scope>section.chapter')];if(all.length!==21||!all.some(x=>x.id==='preface')||!all.some(x=>x.id==='scene-012'))throw Error('教材內容或章節數不符，為避免漏頁已停止顯示。');for(const c of all){if(c.querySelector('img,details.scan'))throw Error(c.id+' 含有掃描影像，已停止顯示以維持純電子文字版。');if(c.dataset.status==='verified'){if(!c.querySelector('.pair'))throw Error(c.id+' 缺少翻譯');for(const p of c.querySelectorAll('.pair'))if(!p.querySelector('.original')||!p.querySelector('.translation'))throw Error(c.id+' 的原文與翻譯未配對')}}const frag=document.createDocumentFragment();all.forEach(c=>frag.appendChild(document.importNode(c,true)));$('book-content').replaceChildren(frag);chapters=[...$('book-content').querySelectorAll('section.chapter')];buildToc();enhanceEnglish();enhancePromptLabs();const count=chapters.filter(x=>x.dataset.kind==='scene').length;$('coverage').textContent=' · 已收錄 '+count+'／100 個 SCENE';$('gate').hidden=true;$('reader').hidden=false;ready=true;let saved='zh';try{saved=localStorage.getItem(MODE_KEY)||'zh'}catch(_){}mode(saved);if(location.hash){const id=decodeURIComponent(location.hash.slice(1));requestAnimationFrame(()=>$(id)?.scrollIntoView({block:'start'}))}}
async function load(token){status('正在從私人 Google Drive 讀取教材…');const resp=await fetch('https://www.googleapis.com/drive/v3/files/'+FILE_ID+'?alt=media',{headers:{Authorization:'Bearer '+token},cache:'no-store'});if(resp.status===401){sessionStorage.removeItem(TOKEN_KEY);throw Error('授權已過期，請重新登入。')}if(resp.status===403)throw Error('目前 Google 帳號沒有這本私人教材的讀取權限。');if(!resp.ok)throw Error('Google Drive 下載錯誤：HTTP '+resp.status);mount(await resp.text())}
function init(){if(tokenClient)return true;const g=window.google?.accounts?.oauth2;if(!g)return false;tokenClient=g.initTokenClient({client_id:CLIENT_ID,scope:SCOPE,callback:async r=>{if(r.error){status('Google 授權未完成。');return}try{const t=saveToken(r);await window.HanamiAuth?.remember?.(t);await load(t)}catch(e){status(e.message||'教材載入失敗。');$('login').disabled=false}},error_callback:()=>{status('請按一下「使用 Google 帳號閱讀」。');$('login').disabled=false}});return true}
function signIn(switchAccount=false){if(!init()){status('Google 授權元件尚未就緒，請稍後重試。');return}try{if(window.HanamiAuth)window.HanamiAuth.request(tokenClient,switchAccount);else tokenClient.requestAccessToken({prompt:switchAccount?'select_account':''})}catch(_){status('授權未完成，請再按一次登入。')}}
$('login').addEventListener('click',()=>{status('正在開啟 Google 授權…');signIn(false)});
$('switch').addEventListener('click',()=>{sessionStorage.removeItem(TOKEN_KEY);window.HanamiAuth?.forget?.();signIn(true)});
document.querySelector('.mode-buttons').addEventListener('click',e=>{const b=e.target.closest('button[data-mode]');if(b)mode(b.dataset.mode)});
$('toc-open').addEventListener('click',()=>{$('toc').classList.toggle('open');$('toc-open').setAttribute('aria-expanded',String($('toc').classList.contains('open')))});
$('toc-close').addEventListener('click',()=>{$('toc').classList.remove('open');$('toc-open').setAttribute('aria-expanded','false')});
$('find-text').addEventListener('input',()=>{const q=$('find-text').value.trim().toLowerCase();let count=0;chapters.forEach((c,i)=>{const ok=!q||c.textContent.toLowerCase().includes(q);c.classList.toggle('filtered-out',!ok);$('toc-items').children[i]?.classList.toggle('filtered-out',!ok);if(ok)count++});$('search-status').textContent=q?'符合搜尋條件的章節：'+count+' 個':''});
$('clear-search').addEventListener('click',()=>{$('find-text').value='';$('find-text').dispatchEvent(new Event('input'))});
(async()=>{const token=getSaved();if(token){try{await load(token);return}catch(e){status('先前授權不可用：'+e.message)}}status('請使用有權限的 Google 帳號授權讀取私人教材。');if(!init()){window.addEventListener('load',()=>init(),{once:true})}})();
})();
