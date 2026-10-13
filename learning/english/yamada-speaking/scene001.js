/* SCENE 001: interface only. Original and strictly translated prompts stay private on Drive. */
(()=>{'use strict';
const ORIGINAL_IDS=['1IWtKMTOjQhX0LuMXoUE4UnRe1i7JSCv1','1a9josI4bwp6wjDzmjSAtrZ1usQRRax96','1sm72ObNm0j2eytSaLTG0E8K27WK-9mDL'];
const TRANSLATION_IDS=['17FbLFtPGIof7br3tGkThSCqHth76h0-z','1C-96VaGUXcFryvr-lw5mkTq0IX1c4Ojg','1qEyhxq-n1dRN0vU1FWcSGOkfxaavTy5m'];
const $=id=>document.getElementById(id);
const node=(tag,cls,str)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(str!==undefined)e.textContent=str;return e;};
let initialized=false,active='1',originals={},translations={};
function setTab(tab){
 document.documentElement.dataset.yamadaTab=tab;
 document.querySelectorAll('[data-main-tab]').forEach(b=>{const on=b.dataset.mainTab===tab;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;});
 ['read','speak','audit'].forEach(k=>{const x=$('scene-panel-'+k);if(x)x.hidden=k!==tab;});
 document.querySelectorAll('.scene-read-toolbar').forEach(x=>x.hidden=tab!=='read');
 if(tab==='audit')renderComparison();
}
function setStep(step){
 active=step;
 document.querySelectorAll('[data-scene-step]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.sceneStep===step)));
 document.querySelectorAll('[data-training-step]').forEach(x=>x.hidden=x.dataset.trainingStep!==step);
 renderComparison();
}
function renderComparison(){
 const pane=$('audit-comparison'),status=$('audit-status');
 if(!pane||!status)return;
 pane.replaceChildren();
 $('audit-link').href='https://drive.google.com/file/d/'+ORIGINAL_IDS[Number(active)-1]+'/view';
 const ja=originals[active],zh=translations[active];
 if(!ja||!zh){status.textContent='STEP '+active+'：等待從私人 Google Drive 讀取原文與譯文。';return;}
 const a=ja.replace(/\r\n/g,'\n').trimEnd().split('\n'),b=zh.replace(/\r\n/g,'\n').trimEnd().split('\n');
 status.textContent='STEP '+active+'｜日文 '+a.length+' 行｜中文 '+b.length+' 行';
 if(a.length!==b.length){status.textContent+='｜行數不同，暫停逐行對照。';const x=node('pre','audit-raw',ja+'\n\n──────────\n\n'+zh);pane.append(x);return;}
 for(let i=0;i<a.length;i++){
  const row=node('div','audit-line');
  const jp=node('div','audit-ja',a[i]||'\u00a0');
  const cn=node('div','audit-zh',b[i]||'\u00a0');
  jp.lang='ja';cn.lang='zh-Hant-TW';
  row.append(jp,cn);pane.append(row);
 }
}
async function fetchPrivate(id,token){
 const r=await fetch('https://www.googleapis.com/drive/v3/files/'+id+'?alt=media',{headers:{Authorization:'Bearer '+token},cache:'no-store'});
 if(!r.ok)throw Error('HTTP '+r.status);
 return r.text();
}
async function loadAll(){
 let session;try{session=JSON.parse(sessionStorage.getItem('hanami-kyoto-google-token-v3')||'null');}catch(_){}
 const status=$('practice-load-status');
 if(!session?.access_token||Number(session.expires_at)<Date.now()+30000){status.textContent='登入權杖已過期，請重新使用 Google 帳號閱讀。';renderComparison();return;}
 const req=[];
 for(let i=0;i<3;i++){req.push(fetchPrivate(ORIGINAL_IDS[i],session.access_token));req.push(fetchPrivate(TRANSLATION_IDS[i],session.access_token));}
 const results=await Promise.allSettled(req);const failures=[];
 for(let i=0;i<3;i++){
  const step=String(i+1),orig=results[i*2],trans=results[i*2+1];
  if(orig.status==='fulfilled')originals[step]=orig.value;else failures.push('STEP '+step+' 日文：'+orig.reason.message);
  if(trans.status==='fulfilled'){
   translations[step]=trans.value;
   const card=$('scene-practice-step-'+step),body=card?.querySelector('.prompt-pane[data-variant="tw"] .prompt-body');
   if(body)body.textContent=trans.value;
   const lbl=card?.querySelector('.prompt-tw-label');if(lbl)lbl.textContent='STEP '+step+'｜繁體中文直譯';
   if(card)card.hidden=false;
  }else failures.push('STEP '+step+' 中文：'+trans.reason.message);
 }
 status.textContent=failures.length?'Google Drive 檔案未全部載入：'+failures.join('；'):'三份完整 Prompt 已載入，可展開、複製。';
 renderComparison();
}
function rebuildSceneMenu(chapter){
 const menu=chapter.querySelector('.english-block[data-kind="menu"]');
 if(!menu||menu.dataset.structured)return;
 const ps=[...menu.querySelectorAll(':scope>p[lang="en"]')];
 const mainIndex=ps.findIndex(p=>p.textContent.trim().toUpperCase()==='MAIN');
 const drinkIndex=ps.findIndex(p=>p.textContent.trim().toUpperCase()==='DRINK');
 if(mainIndex<0||drinkIndex<=mainIndex)return;
 const grid=node('div','scene-menu-grid');
 const main=node('div','scene-menu-column'),drinks=node('div','scene-menu-column');
 ps.slice(mainIndex,drinkIndex).forEach(p=>{if(p===ps[mainIndex])p.classList.add('scene-menu-heading');main.appendChild(p)});
 ps.slice(drinkIndex).forEach(p=>{if(p===ps[drinkIndex])p.classList.add('scene-menu-heading');drinks.appendChild(p)});
 grid.append(main,drinks);menu.append(grid);menu.dataset.structured='true';
}
function markModelDialogue(chapter){
 chapter.querySelectorAll('.english-block[data-kind="dialogue"]>p[lang="en"]').forEach(p=>{
  if(p.textContent.trim().startsWith('CA:'))p.classList.add('scene-dialogue-ca');
  if(p.textContent.trim().startsWith('Passenger:'))p.classList.add('scene-dialogue-passenger');
 });
}
function addPronunciationToReading(chapter){
 const list=chapter.querySelector('.keyphrase-list');if(!list||chapter.querySelector('.scene-pronunciation'))return;
 const wrap=node('section','scene-pronunciation');
 const heading=node('h3','bilingual-heading');const hJa=node('span','heading-ja','発音のポイント（保存された練習プロンプトより）');const hZh=node('span','heading-zh','發音補充｜依私人日文練習底稿整理');hJa.lang='ja';hZh.lang='zh-Hant-TW';heading.append(hJa,hZh);wrap.append(heading);
 const rows=[
  ['/wʌt kaɪndz əv/ · /drɪŋks/','kinds of の連結と弱形。drinks の語尾 /s/。','kinds of 的連音與弱讀；注意 drinks 字尾 /s/；do you have 自然連接。'],
  ['/kən aɪ/ · /ə kʌp əv/ · /aɪst/','Can I の弱形、a cup of の連結、iced の /t/。','Can I 的弱讀與連音、a cup of 的順暢銜接，以及 iced 字尾 /t/；請求句尾自然下降。']
 ];
 rows.forEach(([ipa,ja,zh])=>{
  const row=node('div','scene-phonetic-item');row.append(node('div','scene-ipa',ipa));
  const pair=node('div','pair'),original=node('div','original',ja),translated=node('div','translation',zh);
  original.lang='ja';translated.lang='zh-Hant-TW';pair.append(original,translated);row.append(pair);wrap.append(row);
 });
 list.after(wrap);
 const pairs=[...chapter.querySelectorAll('.pair')];
 const outdated=pairs.find(p=>p.querySelector('.translation')?.textContent.includes('該附錄將在後續批次納入連結'));
 if(outdated)outdated.querySelector('.translation').textContent='原書第 236 頁的模型對話日文譯文已收錄於本課末段，可直接向下閱讀。';
}

function init(){
 if(initialized||!$('scene-001')||$('reader')?.hidden)return;
 const scene=$('scene-001'),cards=[...scene.querySelectorAll('details.prompt-step[data-step]')];
 if(cards.length!==3)return;
 initialized=true;
 addPronunciationToReading(scene);rebuildSceneMenu(scene);markModelDialogue(scene);
 const main=document.querySelector('.content-pane'),book=$('book-content');
 const nav=node('nav','scene-main-tabs');nav.setAttribute('role','tablist');
 for(const [tab,title] of [['read','課文閱讀'],['speak','AI 口說練習'],['audit','日文／繁體中文對照']]){
  const btn=node('button','scene-main-tab',title);btn.type='button';btn.dataset.mainTab=tab;btn.setAttribute('role','tab');btn.addEventListener('click',()=>setTab(tab));nav.append(btn);
 }
 $('toolbar').before(nav);$('toolbar').classList.add('scene-read-toolbar');
 const reading=node('section','scene-read-panel');reading.id='scene-panel-read';book.before(reading);reading.append(book);
 const practice=node('section','scene-workspace');practice.id='scene-panel-speak';main.append(practice);
 const audit=node('section','scene-workspace');audit.id='scene-panel-audit';main.append(audit);
 document.querySelectorAll('.reader-status,.scene-review-nav,.reader-jumps,.lookup,.results').forEach(x=>x.classList.add('scene-read-toolbar'));
 scene.querySelector('.prompt-lab')?.setAttribute('hidden','');
 scene.querySelector('.prompt-translation-audit')?.setAttribute('hidden','');
 const info=$('reader-mode-info');if(info)info.textContent='原書 p.024–025 ＋ p.236 · STEP 1–3 · 日文 Prompt 繁體中文直譯';
 practice.append(node('h2','workspace-title','AI 口說練習'),node('p','workspace-lead','各 STEP 完整保留原稿的規則與英文，只把日文翻成繁體中文。'));
 const steps=node('div','scene-step-tabs'),auditSteps=node('div','scene-step-tabs');practice.append(steps);
 for(let i=1;i<=3;i++){
  const step=String(i);
  for(const dest of [steps,auditSteps]){const b=node('button','scene-step-tab','STEP '+step);b.type='button';b.dataset.sceneStep=step;b.addEventListener('click',()=>setStep(step));dest.append(b);}
 }
 cards.forEach((card,i)=>{
  const step=String(i+1),wrapper=node('section','scene-training-card');wrapper.dataset.trainingStep=step;wrapper.id='scene-practice-step-'+step;wrapper.hidden=true;
  const body=card.querySelector('.prompt-pane[data-variant="tw"] .prompt-body');
  if(body)body.textContent='正在載入原稿直譯…';
  const sub=card.querySelector('.prompt-summary-sub');if(sub)sub.textContent='完整直譯 · 點擊展開';
  const btn=card.querySelector('.prompt-variant-tab');if(btn)btn.click();
  wrapper.append(card);practice.append(wrapper);
 });
 const practiceStatus=node('p','source-status','正在從私人 Google Drive 載入全文…');practiceStatus.id='practice-load-status';practiceStatus.setAttribute('role','status');practice.append(practiceStatus);
 audit.append(node('h2','workspace-title','日文原稿／繁體中文逐行對照'),node('p','workspace-lead','保留相同的段落、編號、英語、發音符號與規則。'));
 audit.append(auditSteps);
 const auditStatus=node('p','source-status');auditStatus.id='audit-status';auditStatus.setAttribute('role','status');audit.append(auditStatus);
 const header=node('div','audit-line audit-line-header');header.append(node('strong','audit-ja','日文原稿'),node('strong','audit-zh','繁體中文直譯'));audit.append(header);
 const comparison=node('div','audit-comparison');comparison.id='audit-comparison';audit.append(comparison);
 const link=node('a','audit-origin','日文原稿 TXT（Google Drive） ↗');link.id='audit-link';link.rel='noopener noreferrer';link.target='_blank';audit.append(link);
 setStep('1');setTab('read');loadAll();
}
const observer=new MutationObserver(init);observer.observe(document.documentElement,{childList:true,subtree:true});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();