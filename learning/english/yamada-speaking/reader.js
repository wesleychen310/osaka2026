/* Public UI shell only. Full copyrighted Japanese/English text and translations stay in restricted Google Drive. */
(()=>{'use strict';
const CLIENT_ID='57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com';
const FILE_ID='1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_';
const SUPPLEMENT_IDS=['18FEtT4P16OxKNj5-raxkFFsxvW8Vf2O9','1Pta3E50Aqq8iDei5fL73sOGwc-tPGmp_'];
const SCOPE='https://www.googleapis.com/auth/drive.readonly';
const TOKEN_KEY='hanami-kyoto-google-token-v3';
const MODE_KEY='yamada-speaking-language-mode-v1';
const MODES=['ja','zh','vertical','parallel'];
const $=id=>document.getElementById(id);
let tokenClient=null,ready=false,chapters=[],chapterSearchIndex=[];
function getSaved(){try{const s=JSON.parse(sessionStorage.getItem(TOKEN_KEY)||'null');return s?.access_token&&Number(s.expires_at)>Date.now()+90000?s.access_token:null}catch(_){return null}}
function saveToken(t){sessionStorage.setItem(TOKEN_KEY,JSON.stringify({access_token:t.access_token,expires_at:Date.now()+1000*Number(t.expires_in||3600)}));return t.access_token}
function status(s){$('gate-status').textContent=s}
function mode(m){if(!MODES.includes(m))m='zh';document.documentElement.dataset.readingMode=m;document.querySelectorAll('button[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===m)));try{localStorage.setItem(MODE_KEY,m)}catch(_){}}
function sanitize(src,containerId='yamada-source'){const root=src.querySelector('#'+containerId);if(!root)throw Error('教材資料缺少必要的章節容器。');root.querySelectorAll('script,style,iframe,object,embed,form,button,input,link,meta').forEach(n=>n.remove());root.querySelectorAll('*').forEach(el=>{for(const a of [...el.attributes]){const k=a.name.toLowerCase();if(k.startsWith('on')||k==='style'||k==='srcset')el.removeAttribute(a.name)}if(el.tagName==='IMG'&&!/^data:image\/jpeg;base64,[a-z0-9+/=]+$/i.test(el.getAttribute('src')||''))el.remove();if(el.tagName==='A'&&!/^https:\/\//.test(el.getAttribute('href')||''))el.removeAttribute('href')});return root}
function buildToc(){const list=$('toc-items');list.replaceChildren();chapters.forEach(ch=>{const a=document.createElement('a');a.className='toc-link'+(ch.dataset.status==='pending'?' pending':'');a.href='#'+ch.id;a.textContent=ch.querySelector('h2')?.textContent||ch.id;a.addEventListener('click',()=>{$('toc').classList.remove('open');$('toc-open').setAttribute('aria-expanded','false')});list.appendChild(a)});}
function enhanceEnglish(){document.querySelectorAll('.keyphrase .reading-keyphrase>p[lang="en"],.english-block[data-kind="dialogue"]>p[lang="en"]').forEach(p=>{const text=p.textContent;const b=document.createElement('button');b.type='button';b.className='speak';b.setAttribute('aria-label','朗讀這一句英文');b.textContent='🔊 英文';b.addEventListener('click',()=>{if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text.replace(/^(Passenger|Traveler|Officer|CA|Staff|Guest):\s*/,''));u.lang='en-US';u.rate=.88;window.speechSynthesis.speak(u)});p.appendChild(b)})}

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
    const steps=[...lab.querySelectorAll(':scope > section.prompt-step[data-step]')];
    const headings=[...scene.children].filter(x=>x.tagName==='H3'&&/^STEP\s*[123]/.test(x.textContent.trim()));
    if(steps.length!==3||headings.length!==3)return;
    if(steps.some(s=>!s.querySelector('.prompt-pane[data-variant=tw] .prompt-body')||!s.querySelector('.prompt-pane[data-variant=official]')))return;
    lab.querySelector('h3').textContent='AI 口說練習 · 3 個 STEP';
    const explain=lab.querySelector('.prompt-explain');
    if(explain)explain.textContent='原書內容照常閱讀；每個 STEP 下方有可展開的練習卡。台灣版已可使用，官方全文仍待取得。';
    const allbar=document.createElement('div');allbar.className='prompt-all-actions';
    const allStatus=document.createElement('span');allStatus.className='prompt-action-status';allStatus.setAttribute('role','status');
    const allCopy=makePromptButton('複製本課 STEP 1–3','prompt-copy-all',async()=>{
      const allText=steps.map(s=>s.querySelector('.prompt-pane[data-variant=tw] .prompt-body').textContent.trim()).join('\n\n────────────\n\n');
      allStatus.textContent=(await copyPromptText(allText))?'已複製本課三份台灣版 Prompt':'複製失敗，請展開 STEP 後選取文字';
    });
    allbar.append(allCopy,allStatus);lab.appendChild(allbar);
    // Keep the full-lesson copy control after textbook STEP 3; show individual exercises under their STEP.
    steps.forEach((step,index)=>{
      const paneTw=step.querySelector('.prompt-pane[data-variant=tw]');
      const paneOfficial=step.querySelector('.prompt-pane[data-variant=official]');
      const textTw=()=>paneTw.querySelector('.prompt-body').textContent.trim();
      const officialReady=paneOfficial.dataset.officialStatus==='verified'&&!!paneOfficial.querySelector('.prompt-body')?.textContent.trim();
      const card=document.createElement('details');card.className='prompt-step';card.dataset.step=step.dataset.step;
      const summary=document.createElement('summary');summary.className='prompt-summary';
      const label=document.createElement('strong');label.textContent='AI 練習｜STEP '+step.dataset.step;
      const sub=document.createElement('span');sub.className='prompt-summary-sub';sub.textContent='台灣版可用 · 官方原文待取得';
      summary.append(label,sub);card.appendChild(summary);
      const expanded=document.createElement('div');expanded.className='prompt-expanded';
      while(step.firstChild)expanded.appendChild(step.firstChild);
      card.appendChild(expanded);
      step.remove();
      const controls=card.querySelector('.prompt-controls');
      if(!controls)return;
      const tabs=document.createElement('div');tabs.className='prompt-variant-tabs';tabs.setAttribute('role','group');tabs.setAttribute('aria-label','STEP '+step.dataset.step+' Prompt 版本');
      const actions=document.createElement('div');actions.className='prompt-step-actions';
      const stat=document.createElement('span');stat.className='prompt-action-status';stat.setAttribute('role','status');
      let active='tw';
      const officialBtn=makePromptButton('日本官方原版','prompt-variant-tab',()=>select('official'));
      const taiwanBtn=makePromptButton('台灣在地化版','prompt-variant-tab',()=>select('tw'));
      const copy=makePromptButton('複製完整 Prompt','prompt-copy',async()=>{
        const txt=active==='official'&&officialReady?paneOfficial.querySelector('.prompt-body').textContent.trim():active==='tw'?textTw():'';
        if(!txt)return;
        stat.textContent=(await copyPromptText(txt))?'已複製完整 STEP '+step.dataset.step+' Prompt':'複製失敗，請直接選取文字';
      });
      const launch=makePromptButton('複製並開啟 ChatGPT ↗','prompt-launch',()=>{
        const txt=active==='official'&&officialReady?paneOfficial.querySelector('.prompt-body').textContent.trim():active==='tw'?textTw():'';
        if(!txt)return;
        const copying=copyPromptText(txt);
        const opened=window.open('https://chatgpt.com/','_blank','noopener,noreferrer');
        Promise.resolve(copying).then(ok=>{stat.textContent=ok?'Prompt 已複製，請貼到 ChatGPT 開始練習':'請選取文字複製並貼到 ChatGPT';});
        if(!opened)stat.textContent='若瀏覽器阻擋新視窗，請自行開啟 chatgpt.com';
      });
      function select(v){
        active=v;paneTw.hidden=v!=='tw';paneOfficial.hidden=v!=='official';
        taiwanBtn.setAttribute('aria-pressed',String(v==='tw'));officialBtn.setAttribute('aria-pressed',String(v==='official'));
        copy.disabled=launch.disabled=v==='official'&&!officialReady;
        stat.textContent=v==='official'&&!officialReady?'官方原文待取得；可使用出版社 QR 對應頁面的連結':'';
        try{localStorage.setItem(PROMPT_MODE_KEY,v)}catch(_){}
      }
      tabs.append(taiwanBtn,officialBtn);actions.append(copy,launch,stat);controls.append(tabs,actions);
      select(preferredPromptMode());
      if(index<2)headings[index+1].before(card);else lab.before(card);
    });
  });
}

function scene001ReviewLayout(){
 const params=new URLSearchParams(location.search),queryScene=params.get('scene')||'001';
 const scene=/^0(?:0[1-9]|[12][0-9]|3[0-2])$/.test(queryScene)?queryScene:'001';
 const chapter=$('scene-'+scene);if(!chapter)return;
 const steps=[...chapter.children].filter(x=>x.tagName==='H3'&&/^STEP\s*[123]/.test(x.textContent.trim()));
 steps.forEach((h,i)=>h.id='scene-'+scene+'-step-'+(i+1));
 const focused=params.get('view')!=='all';
 document.documentElement.dataset.sceneFocus=focused?scene:'all';
 const focusJumps=$('scene-one-jumps'),allLink=$('view-all-link'),focusLink=$('view-scene-link');
 if(focusJumps)focusJumps.hidden=!focused||scene!=='001';
 if(allLink)allLink.hidden=!focused;
 if(focusLink){focusLink.hidden=focused;focusLink.href='?scene='+scene;focusLink.textContent='專注 SCENE '+scene;}
 if(focused){
  const label=$('reader-mode-label');if(label)label.textContent='SCENE '+scene+'｜原書雙語電子版';
  const info=$('reader-mode-info');if(info)info.textContent='原書 p.'+String(24+(Number(scene)-1)*2).padStart(3,'0')+'–'+String(25+(Number(scene)-1)*2).padStart(3,'0')+'｜原書日中對照｜Prompt 完成度依課別顯示';
  const coverage=$('coverage');if(coverage)coverage.textContent='';
  const placeholder=$('toc-items');if(placeholder){[...placeholder.children].forEach(a=>a.hidden=a.getAttribute('href')!=='#scene-'+scene);}
 }
}

function mount(raw,supplementRaw){const doc=new DOMParser().parseFromString(raw,'text/html');const source=sanitize(doc);const legacy=[...source.querySelectorAll(':scope>section.chapter')];if(legacy.length!==21||!legacy.some(x=>x.id==='preface')||!legacy.some(x=>x.id==='scene-012'))throw Error('教材內容或章節數不符，為避免漏頁已停止顯示。');let extra=[];if(supplementRaw){const chunks=Array.isArray(supplementRaw)?supplementRaw:[supplementRaw];chunks.forEach((raw,idx)=>{const supplement=sanitize(new DOMParser().parseFromString(raw,'text/html'),'yamada-supplement');const next=[...supplement.querySelectorAll(':scope>section.chapter')];const start=13+idx*10,exact=Array.from({length:10},(_,i)=>'scene-'+String(i+start).padStart(3,'0'));if(next.length!==10||next.some((c,i)=>c.id!==exact[i]||c.dataset.kind!=='scene'))throw Error('SCENE '+start+'–'+(start+9)+' 的私人增量教材章節驗證失敗。');extra.push(...next)})}const all=[...legacy,...extra];for(const c of all){if(c.querySelector('img,details.scan'))throw Error(c.id+' 含有掃描影像，已停止顯示以維持純電子文字版。');if(c.dataset.status==='verified'){if(!c.querySelector('.pair'))throw Error(c.id+' 缺少翻譯');for(const p of c.querySelectorAll('.pair'))if(!p.querySelector('.original')||!p.querySelector('.translation'))throw Error(c.id+' 的原文與翻譯未配對')}}const frag=document.createDocumentFragment();all.forEach(c=>frag.appendChild(document.importNode(c,true)));$('book-content').replaceChildren(frag);chapters=[...$('book-content').querySelectorAll('section.chapter')];buildToc();window.YamadaLocalize?.($('book-content'));enhanceEnglish();enhancePromptLabs();scene001ReviewLayout();chapterSearchIndex=chapters.map(c=>{const clean=c.cloneNode(true);clean.querySelectorAll('.prompt-lab,.prompt-step').forEach(n=>n.remove());return clean.textContent.toLowerCase()});const count=chapters.filter(x=>x.dataset.kind==='scene').length;$('coverage').textContent=' · 已收錄 '+count+'／100 個 SCENE；目前完整 Prompt 直譯已完成 SCENE 001–022，新課 023–032 原文已取得，譯文校訂中。';$('gate').hidden=true;$('reader').hidden=false;ready=true;let saved='zh';try{saved=localStorage.getItem(MODE_KEY)||'zh'}catch(_){}mode(saved);if(location.hash){const id=decodeURIComponent(location.hash.slice(1));requestAnimationFrame(()=>$(id)?.scrollIntoView({block:'start'}))}}
async function load(token){status('正在從私人 Google Drive 讀取教材…');const get=async id=>{const r=await fetch('https://www.googleapis.com/drive/v3/files/'+id+'?alt=media',{headers:{Authorization:'Bearer '+token},cache:'no-store'});if(r.status===401){sessionStorage.removeItem(TOKEN_KEY);throw Error('授權已過期，請重新登入。')}if(r.status===403)throw Error('目前 Google 帳號沒有這本私人教材的讀取權限。');if(!r.ok)throw Error('Google Drive 下載錯誤：HTTP '+r.status);return r.text()};const [original,...supplements]=await Promise.all([get(FILE_ID),...SUPPLEMENT_IDS.map(get)]);mount(original,supplements)}
function init(){if(tokenClient)return true;const g=window.google?.accounts?.oauth2;if(!g)return false;tokenClient=g.initTokenClient({client_id:CLIENT_ID,scope:SCOPE,callback:async r=>{if(r.error){status('Google 授權未完成。');return}try{const t=saveToken(r);await window.HanamiAuth?.remember?.(t);await load(t)}catch(e){status(e.message||'教材載入失敗。');$('login').disabled=false}},error_callback:()=>{status('請按一下「使用 Google 帳號閱讀」。');$('login').disabled=false}});return true}
function signIn(switchAccount=false){if(!init()){status('Google 授權元件尚未就緒，請稍後重試。');return}try{if(window.HanamiAuth)window.HanamiAuth.request(tokenClient,switchAccount);else tokenClient.requestAccessToken({prompt:switchAccount?'select_account':''})}catch(_){status('授權未完成，請再按一次登入。')}}
$('login').addEventListener('click',()=>{status('正在開啟 Google 授權…');signIn(false)});
$('switch').addEventListener('click',()=>{sessionStorage.removeItem(TOKEN_KEY);window.HanamiAuth?.forget?.();signIn(true)});
document.querySelector('.mode-buttons').addEventListener('click',e=>{const b=e.target.closest('button[data-mode]');if(b)mode(b.dataset.mode)});
$('toc-open').addEventListener('click',()=>{$('toc').classList.toggle('open');$('toc-open').setAttribute('aria-expanded',String($('toc').classList.contains('open')))});
$('toc-close').addEventListener('click',()=>{$('toc').classList.remove('open');$('toc-open').setAttribute('aria-expanded','false')});
$('find-text').addEventListener('input',()=>{const q=$('find-text').value.trim().toLowerCase();let count=0;chapters.forEach((c,i)=>{const ok=!q||chapterSearchIndex[i].includes(q);c.classList.toggle('filtered-out',!ok);$('toc-items').children[i]?.classList.toggle('filtered-out',!ok);if(ok)count++});$('search-status').textContent=q?'符合搜尋條件的章節：'+count+' 個':''});
$('clear-search').addEventListener('click',()=>{$('find-text').value='';$('find-text').dispatchEvent(new Event('input'))});
(async()=>{const token=getSaved();if(token){try{await load(token);return}catch(e){status('先前授權不可用：'+e.message)}}status('請使用有權限的 Google 帳號授權讀取私人教材。');if(!init()){window.addEventListener('load',()=>init(),{once:true})}})();
})();
