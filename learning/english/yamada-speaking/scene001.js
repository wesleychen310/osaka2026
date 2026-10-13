/* SCENE 001 public controller. Private textbook and Japanese prompts remain on Google Drive. */
(()=>{'use strict';
const IDS=['1IWtKMTOjQhX0LuMXoUE4UnRe1i7JSCv1','1a9josI4bwp6wjDzmjSAtrZ1usQRRax96','1sm72ObNm0j2eytSaLTG0E8K27WK-9mDL'];
const $=id=>document.getElementById(id);
const node=(tag,cls,str)=>{let x=document.createElement(tag);if(cls)x.className=cls;if(str!==undefined)x.textContent=str;return x};
const stepRules={
  2:[
    '【STEP 2 對話流程（優先適用，取代其他章節關於逐句糾錯的共通敘述）】',
    'AI 是 CA；使用者是 Passenger。嚴守八句原書順序：1、3、5、7 由 CA 說，2、4、6、8 由 Passenger 說；每次僅說一行 CA 台詞並等待。必要時用 Your line. Please say: “(目標乘客台詞)” 提示。',
    '整段對話進行期間禁止 Exact／Almost／Retry 判定、糾音、要求重說或其他形式中斷。只有無法理解而無法繼續時，才自然確認一次並維持輪次。語音辨識失敗不可認定為學生犯錯。',
    '第 8 句完成後才進入 Post。引用四句實際 Passenger 發話逐句評估；無法可靠引用時註明「目標句」，不得杜撰學生說過的字句。每一回合至少一項具體回饋，提供事後 Exact／Almost／Retry、合格／合格但需改善／待加強及簡短原因。',
    '等待學生完整說完；如能確認沉默過久再簡短鼓勵。沒有音訊時不得宣稱直接聽出弱讀、連音、字尾 /s/ 或語調；只能評估內容。全程使用台灣繁體中文操作與回饋。',
    '開始與重置口令：Let’s start／開始練習；Slow／再慢一點調整下一句速度；End practice／結束練習直接進 Post。對話後主動帶領 Can I have 禮貌語氣複習。'
  ].join('\n'),
  3:[
    '【STEP 3 自由對話流程（優先適用，取代固定句逐次重試的共通敘述）】',
    'AI 扮演空服員，先說 Would you like rice or pasta?；接著自然問 Would you like something to drink?、Anything else?；必要時可問 What kind of drink would you like?、Hot or cold?。原書 Rice／Pasta 與飲料菜單不得修改。',
    '每回合只問一題並等待學生回覆。自由對話時不糾錯、不給 Exact／Almost／Retry 分數；只有溝通中斷時才用角色內自然澄清維持會話。語音轉錄失敗應請重說，不能算發音錯誤。',
    '明確結束：Feedback please.／Feedback.／Let’s do feedback.／請給我回饋／結束練習，立即進 Post。自然結束：That’s all.／Thank you.／No, thanks.，進 Post；若學生仍要補充，最多額外兩個問答回合。',
    'Post 至少給三項具體、可追溯至實際回答的回饋，總評先短英文後繁體中文；明確宣告合格、不合格或合格但需改善。音訊不可得時不能精確評分連音或語調；最後安排一句 Can I have 的簡短複習。',
    '口令 Let’s start／開始練習才開始；從台灣桃園出發，目的地未預設；只使用自然美式英語示範。'
  ].join('\n')
};
let loaded=false,active='1',sourceText={};
function correctedPrompt(step,raw){
 if(!stepRules[step]||raw.includes('【已校訂｜SCENE 001 STEP '+step+'｜'))return raw;
 let txt=raw;
 txt=txt.replace('15. 本 STEP 所有任務完成、第三次重試上限用盡，或學生說「結束練習」時，直接進入「與 AI 一起回顧」；無須請學生翻書朗讀日文回顧問題。','15. 本 STEP 完成全部對話或學習者明確結束時，立即進入繁體中文課後回顧；不用請學習者翻書朗讀原書回顧問題。');
 const a=txt.indexOf('【聽取輸入、分級與重試演算法】');
 const b=txt.indexOf('【結束練習與繁中 Feedback】',a);
 if(a>=0&&b>a)txt=txt.slice(0,a)+stepRules[step]+'\n\n'+txt.slice(b);
 if(step===2){
 const old='針對每一行 Passenger 進行 Exact／Almost／Retry 三級判定；自然且意思相同的禮貌變化容許 Almost，避免背誦僵化。Retry 時示範當前一句的必要片語，最多共三次；不要為了學生漏一個音而打斷整課節奏。ASR 失敗不得算 Retry。可以 Slow 短語訓練，但回歸整句自然語速。';
 txt=txt.replace(old,'八句對話完整結束後，才依序評估學習者四句台詞；途中不糾錯、不要求重試。');
 }
 if(step===3){
 txt=txt.replace('對話必須由 AI 使用原書指定的第一句「Rice or pasta?」開始。只問一個問題、等待我回答，再根據回答自然追問飲料與其他需求。','對話由 AI 說 Would you like rice or pasta? 開始，一次一問並等待。原書印刷的 Rice or pasta? 保留於「課文閱讀」頁。');
 txt=txt.replace('4. 進行自然自由對話，容許不同但同樣禮貌且能理解的英文句子。若我的回答影響溝通，用簡短英文澄清；Exact／Almost／Retry 適用溝通任務完成度，無固定台詞時不可拿逐字背誦判分。Retry 最多三次；需要時 Slow 示範。','4. 自由對話時不評分、不糾錯；若無法理解，只用簡短英文澄清，合格評判留到 Post。');
 }
 return txt;
}
function setTab(tab){
 document.documentElement.dataset.yamadaTab=tab;
 document.querySelectorAll('[data-main-tab]').forEach(b=>{let v=b.dataset.mainTab===tab;b.setAttribute('aria-selected',String(v));b.tabIndex=v?0:-1});
 ['read','speak','audit'].forEach(k=>{const x=$('scene-panel-'+k);if(x)x.hidden=tab!==k});
 document.querySelectorAll('.scene-read-toolbar').forEach(x=>x.hidden=tab!=='read');
 if(tab==='audit')renderAudit();
}
function setStep(s){
 active=s;
 document.querySelectorAll('[data-scene-step]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.sceneStep===s)));
 document.querySelectorAll('[data-training-step]').forEach(x=>x.hidden=x.dataset.trainingStep!==s);
 renderAudit();
}
function renderAudit(){
 const left=$('audit-source'),right=$('audit-taiwan');if(!left||!right)return;
 const card=$('scene-practice-step-'+active);
 left.textContent=sourceText[active]||'原稿尚未從私人 Google Drive 載入。';
 right.textContent=card?.querySelector('.prompt-pane[data-variant="tw"] .prompt-body')?.textContent.trim()||'等待載入台灣版 Prompt。';
 $('audit-link').href='https://drive.google.com/file/d/'+IDS[Number(active)-1]+'/view';
 const list=$('audit-differences');list.replaceChildren();
 const items=[['忠實翻譯','英文句型及原書模型對話保留；角色維持 CA／Passenger。'],['台灣在地化','從台灣國際航班出發；原日文操作說明改為台灣繁體中文；不設定日本為目的地。'],['指令調整','Let’s start／開始練習、Slow、課後自動繁中回顧。'],['教學改善','尊重學習者思考時間；ASR 失敗不當作發音錯誤；缺乏音訊不可假稱精確評定連音。']];
 if(active==='2')items.push(['STEP 2 流程修正','八句模型對話完成後才統一糾錯並作合格判定；原日文底稿禁止中途糾錯。']);
 if(active==='3')items.push(['STEP 3 結束條件','保留明確結束、自然結束、最多額外兩回合、課後至少三項具體回饋與三種合格判定。']);
 for(const [tag,desc] of items){let x=node('div','audit-difference');x.append(node('strong','',tag),node('span','',desc));list.append(x)}
 $('audit-status').textContent=sourceText[active]?'已載入私人日文 TXT 全文；兩欄顯示完整內容。':'來源尚未載入，請確認 Google Drive 權限。';
}
async function fetchOriginal(i){
 const saved=JSON.parse(sessionStorage.getItem('hanami-kyoto-google-token-v3')||'null');
 if(!saved?.access_token||saved.expires_at<Date.now()+30000)throw Error('OAuth token 不可用');
 const response=await fetch('https://www.googleapis.com/drive/v3/files/'+IDS[i]+'?alt=media',{headers:{Authorization:'Bearer '+saved.access_token},cache:'no-store'});
 if(!response.ok)throw Error('HTTP '+response.status);
 return response.text();
}
async function loadOriginals(){
 // Prefer the complete user-saved TXT archive embedded in the owner-only Drive HTML.
 // Fallback to the same private Drive TXT files only for older HTML versions.
 for(const i of [1,2,3]){
  const pre=document.querySelector('#scene-001 .saved-japanese-prompt[data-step="'+i+'"]');
  if(pre)sourceText[String(i)]=pre.textContent;
 }
 if([1,2,3].every(i=>sourceText[String(i)]?.trim())){renderAudit();return}
 const results=await Promise.allSettled([0,1,2].map(fetchOriginal));
 results.forEach((r,i)=>{if(r.status==='fulfilled'&&!sourceText[String(i+1)])sourceText[String(i+1)]=r.value});
 const errors=results.flatMap((r,i)=>r.status==='rejected'?['STEP '+(i+1)+'：'+r.reason.message]:[]);
 renderAudit();if(errors.length)$('audit-status').textContent='部分 TXT 無法讀取：'+errors.join('；');
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
 if(loaded||!$('scene-001')||$('reader')?.hidden)return;
 const chapter=$('scene-001'),cards=[...chapter.querySelectorAll('details.prompt-step[data-step]')];
 if(cards.length!==3)return;
 loaded=true;
 addPronunciationToReading(chapter);
 rebuildSceneMenu(chapter);
 markModelDialogue(chapter);
 const main=document.querySelector('.content-pane'),book=$('book-content');
 const nav=node('nav','scene-main-tabs');nav.setAttribute('role','tablist');nav.setAttribute('aria-label','SCENE 001 主分頁');
 for(const [id,label] of [['read','課文閱讀'],['speak','AI 口說練習'],['audit','日文原文／台灣版 Prompt 對照']]){
 const b=node('button','scene-main-tab',label);b.type='button';b.dataset.mainTab=id;b.setAttribute('role','tab');b.addEventListener('click',()=>setTab(id));nav.appendChild(b)
 }
 $('toolbar').before(nav);
 $('toolbar').classList.add('scene-read-toolbar');
 const reading=node('section','scene-read-panel');reading.id='scene-panel-read';book.before(reading);reading.append(book);
 const speaking=node('section','scene-workspace');speaking.id='scene-panel-speak';main.appendChild(speaking);
 const audit=node('section','scene-workspace');audit.id='scene-panel-audit';main.appendChild(audit);
 document.querySelectorAll('.reader-status,.scene-review-nav,.reader-jumps,.lookup,.results').forEach(x=>x.classList.add('scene-read-toolbar'));
 chapter.querySelector('.prompt-lab')?.setAttribute('hidden','');
 chapter.querySelector('.prompt-translation-audit')?.setAttribute('hidden','');
 speaking.append(node('h2','workspace-title','AI 口說練習'),node('p','workspace-lead','每個 STEP 都有完整獨立的台灣版 Prompt。展開後複製並開啟 ChatGPT，再切換語音模式，說 Let’s start 或「開始練習」。'));
 const navSteps=node('div','scene-step-tabs');speaking.append(navSteps);
 const aSteps=node('div','scene-step-tabs');
 for(const [step,label] of [['1','STEP 1 · 關鍵句型'],['2','STEP 2 · 模型對話'],['3','STEP 3 · 自由角色扮演']]){
  for(const dest of [navSteps,aSteps]){const b=node('button','scene-step-tab',label);b.type='button';b.dataset.sceneStep=step;b.addEventListener('click',()=>setStep(step));dest.append(b);}
 }
 cards.forEach((card,i)=>{
  let step=String(i+1),wrapper=node('section','scene-training-card');wrapper.dataset.trainingStep=step;wrapper.id='scene-practice-step-'+step;
  wrapper.append(node('p','step-goal',['關鍵句型、發音與 Exact／Almost／Retry，最多三次有效嘗試。','八句依序角色扮演，對話全程不糾錯；完成後回饋。','按照原書菜單自由點餐，結束後至少三項具體回饋。'][i]));
  const body=card.querySelector('.prompt-pane[data-variant="tw"] .prompt-body');
  if(body)body.textContent=correctedPrompt(i+1,body.textContent);
  let subt=card.querySelector('.prompt-summary-sub');if(subt)subt.textContent='完整台灣版 · 點擊展開';
  const versionButtons=card.querySelectorAll('.prompt-variant-tab');if(versionButtons[0])versionButtons[0].click();
  wrapper.append(card);speaking.append(wrapper);
 });
 speaking.append(node('p','practice-qualifier','SCENE 001 STEP 1–3 的完整台灣版 Prompt 由登入後的私人 Google Drive HTML 供應；STEP 2/3 已直接校訂並保存在正本。出版社官方 Prompt 來源同一性尚待確認。'));
 audit.append(node('h2','workspace-title','日文底稿 × 台灣版 Prompt 全文'),node('p','workspace-lead','左側為私人教材保存的日文 Prompt 原始 TXT 全文；右側為完整繁體中文 Taiwan Edition Prompt。英文句型保留。兩欄皆須 Google 授權後方可讀取；日文 TXT 尚未與出版社官方 ZIP 逐位元比對。'));
 audit.append(aSteps);
 const status=node('p','source-status');status.id='audit-status';status.setAttribute('role','status');audit.append(status);
 const grid=node('div','audit-grid');
 const col1=node('section','audit-col'),col2=node('section','audit-col');
 col1.append(node('h3','','日文底稿原文'));col2.append(node('h3','','繁體中文 Taiwan Edition'));
 const pre1=node('pre','audit-raw');pre1.id='audit-source';
 const pre2=node('pre','audit-raw');pre2.id='audit-taiwan';
 col1.append(pre1);col2.append(pre2);grid.append(col1,col2);audit.append(grid);
 const link=node('a','audit-origin','開啟原始 TXT（Google Drive） ↗');link.id='audit-link';link.rel='noopener noreferrer';link.target='_blank';audit.append(link);
 audit.append(node('h3','audit-title','差異與修改理由'));
 const differences=node('div','audit-differences');differences.id='audit-differences';audit.append(differences);
 audit.append(node('p','audit-caveat','驗收註記：三份使用者保存的日文底稿與完整 Taiwan Edition Prompt 已儲存於私人 HTML，可全文並列閱讀；正式逐條句對句的忠實譯文配對及出版社 ZIP 同一性尚未完成，不能標記全數驗收通過。'));
 setStep('1');setTab('read');loadOriginals();
}
const watch=new MutationObserver(init);watch.observe(document.documentElement,{childList:true,subtree:true});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();