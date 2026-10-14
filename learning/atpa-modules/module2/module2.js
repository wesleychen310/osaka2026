/* SOA ATPA private bilingual reader. Public UI only; all source text remains in restricted Google Drive. */
(()=>{"use strict";
const CLIENT_ID="57818954523-lfovhnonguj7nkq6hh030fs50lrmrouu.apps.googleusercontent.com";
const SCOPE="https://www.googleapis.com/auth/drive.readonly";
const SESSION_KEY="hanami-kyoto-google-token-v3";
const SOURCE={
 "2:1":{fileId:"1D-HUEZGGTor5P5HFZb4vmNm9C9sXS89B",module:"2",part:"1",label:"1.1.1–1.1.12",sourcePages:"8–20",kind:"raw"},
 "2:2":{fileId:"1DnflW10dpSj9mys_sHR_3ybcQv_soHKw",module:"2",part:"2",label:"1.1.13–1.1.31",sourcePages:"21–39",kind:"raw"},
 "2:3":{fileId:"141OqP4-RikeZXWQO4V3VFzxGtkZ7dWCE",module:"2",part:"3",label:"1.1.32–1.1.36",sourcePages:"40–48",kind:"raw"},
 "2:4":{fileId:"1-jBApP08QPdJ6DVdbI0RExnUSm6wre83",module:"2",part:"4",label:"1.2.1–1.2.14",sourcePages:"49–64",kind:"raw"},
 "2:5":{fileId:"1L-yLFwsMii4TmnWVtGi4HQ5R8xNr0Xsn",module:"2",part:"5",label:"1.2.15–1.2.28",sourcePages:"65–83",kind:"raw"},
 "2:6":{fileId:"1LdOL-zzs8NuK6XNx2vUtXbuO0GanOUNA",module:"2",part:"6",label:"1.2.29–1.2.38",sourcePages:"84–93",kind:"raw"},
 "2:7":{fileId:"1M-Wdr-NI3X2NejPBDPCY6PAMquOQzLtI",module:"2",part:"7",label:"1.3.1–1.3.20",sourcePages:"94–115",kind:"raw"},
 "2:8":{fileId:"1enbe4mpIPmADyXbHggazv57ug8Yz04A9",module:"2",part:"8",label:"1.3.21–1.3.40",sourcePages:"116–137",kind:"raw"},
 "2:9":{fileId:"1ZzB8zn5r57n1ShmTUivd-23XOfiF3igV",module:"2",part:"9",label:"1.3.41–1.3.70",sourcePages:"138–172",kind:"raw"},
 "2:10":{fileId:"1tnMUnufssHsrZoen0nio5M3NeitXAgM_",module:"2",part:"10",label:"1.4.1–1.4.16",sourcePages:"173–192",kind:"raw"},
 "2:11":{fileId:"1XcX7WF9HE5J32zaTnlsc_LUsHcTOt2Q9",module:"2",part:"11",label:"1.5.1–1.5.21",sourcePages:"193–214",kind:"raw"},
 "2:12":{fileId:"1qQyqkrgtUBSz4AgjhHI1mxp5x7OXm6si",module:"2",part:"12",label:"1.6.1–1.6.29",sourcePages:"215–244",kind:"raw"},
 "2:13":{fileId:"1eR9g8wl5_ZKxCl5eXrWTtSQmS1OE26tZ",module:"2",part:"13",label:"1.7.1–1.7.13",sourcePages:"245–259",kind:"raw"}
};
const $=id=>document.getElementById(id);
document.body.dataset.atpaModule="2";
const params=new URLSearchParams(location.search);
const requestedModule=params.get("module");
const selected=!requestedModule||requestedModule==="2";
const SOURCES=Object.values(SOURCE).sort((a,b)=>Number(a.part)-Number(b.part));
const CHAPTERS={"1.1":{title:"Data Pipeline",zh:"資料管線"},"1.2":{title:"Reading and Writing Data",zh:"讀取與寫入資料"},"1.3":{title:"Data Transformation and Cleaning",zh:"資料轉換與清理"},"1.4":{title:"Relational Databases",zh:"關聯式資料庫"},"1.5":{title:"Data Validation",zh:"資料驗證"},"1.6":{title:"Missing and Extreme Values",zh:"缺失值與極端值"},"1.7":{title:"Case Studies",zh:"案例研究"}};
const EXPECTED_COUNTS=[12,19,5,14,14,10,20,20,30,16,21,29,13];
const FIRST_IDS=["s111","s1113","s1132","s121","s1215","s1229","s131","s1321","s1341","s141","s151","s161","s171"];
const SESSION_PREFIX="hanami-kyoto-google-token-v3";
let tokenClient=null,loaded=false,allLessons=[],scrollScheduled=false;
const show=(id,visible)=>{const n=$(id);if(n)n.hidden=!visible};
function status(message){const n=$("gate-status");if(n)n.textContent=message}
function loadSaved(){
 try{const o=JSON.parse(sessionStorage.getItem(SESSION_KEY)||"null");
 if(o?.access_token&&Number(o.expires_at)>Date.now()+90000)return o.access_token;
 }catch(_){}
 return null;
}
function remember(t){
 const expiry=Number(t.expires_in)||3500;
 sessionStorage.setItem(SESSION_KEY,JSON.stringify({access_token:t.access_token,expires_at:Date.now()+expiry*1000}));
 return t.access_token;
}
function clearToken(){sessionStorage.removeItem(SESSION_KEY);try{window.HanamiAuth?.forget?.()}catch(_){}}
function cleanSource(doc){
 const main=doc.querySelector("#atpa-source");
 if(!main)throw new Error("找不到私人教材內容，請檢查原始檔。");
 main.querySelectorAll("script,style,iframe,object,embed,form,input,button").forEach(n=>n.remove());
 main.querySelectorAll("*").forEach(n=>{
   [...n.attributes].forEach(a=>{if(a.name.toLowerCase().startsWith("on")||a.name.toLowerCase()==="style")n.removeAttribute(a.name)});
   if(n.tagName==="A"){
     const url=n.getAttribute("href")||"";
     if(!/^https:\/\//i.test(url))n.removeAttribute("href");
     else{n.setAttribute("target","_blank");n.setAttribute("rel","noopener noreferrer")}
   }
 });
 const lessons=[...main.querySelectorAll("section.lesson")];
 if(!lessons.length)throw new Error("來源沒有可閱讀的小節。");
 for(const sec of lessons){
   if(!sec.dataset.num||!sec.id)throw new Error("來源缺少原書編號或小節識別碼。");
   const pairs=sec.querySelectorAll(".pair");
   if(!pairs.length)throw new Error("§"+sec.dataset.num+" 缺少雙語配對。");
   pairs.forEach(p=>{
     if(!p.querySelector(":scope>.original")||!p.querySelector(":scope>.translation"))
       throw new Error("§"+sec.dataset.num+" 有未配對的英文或中文段落。");
   });
 }
 return{main,lessons};
}
/* Tap-to-translate: English by default; touching one paragraph swaps only that paragraph. */
/* One-time private-source enhancement: bilingual source labels remain intact in all views. */
const DISPLAY_MODES=["en","annotated","vertical","triple"];
const DISPLAY_KEY="atpa-modules-reading-mode-v3";

/* PRIVATE-SOURCE READING LAYERS: All English and translated Chinese remain
   in the original Google Drive HTML. These are display-only, reversible
   derivatives generated after the existing source-pair QA succeeds. */
const STUDY_GLOSSARY=[["extract, transform, and load","擷取、轉換、載入"],["exploratory data analysis","探索性資料分析"],["data validation","資料驗證"],["data transformation","資料轉換"],["data cleaning","資料清理"],["data pipeline","資料管線"],["data warehouse","資料倉儲"],["data lake","資料湖泊"],["relational database","關聯式資料庫"],["database management","資料庫管理"],["data quality","資料品質"],["data integrity","資料完整性"],["data dictionary","資料字典"],["data structure","資料結構"],["data frame","資料框架"],["data types","資料型別"],["structured data","結構化資料"],["unstructured data","非結構化資料"],["semi-structured data","半結構化資料"],["nested data","巢狀資料"],["primary key","主鍵"],["foreign key","外鍵"],["unique identifier","唯一識別碼"],["key variables","鍵值變數"],["data source","資料來源"],["missing completely at random","完全隨機缺失"],["missing not at random","非隨機缺失"],["missing at random","隨機缺失"],["missing values","缺失值"],["missing value","缺失值"],["missingness","缺失機制"],["imputation","缺失值插補"],["multiple imputation","多重插補"],["mean imputation","平均值插補"],["median imputation","中位數插補"],["reasonability checks","合理性檢查"],["reasonableness checks","合理性檢查"],["reasonability check","合理性檢查"],["outlier detection","離群值偵測"],["outliers","離群值"],["extreme values","極端值"],["multicollinearity","多重共線性"],["target leakage","目標洩漏"],["data leakage","資料洩漏"],["sampling bias","抽樣偏差"],["selection bias","選擇偏差"],["feature engineering","特徵工程"],["dimension reduction","維度縮減"],["predictor variables","預測變數"],["predictor variable","預測變數"],["target variable","目標變數"],["response variable","反應變數"],["categorical variables","類別變數"],["numeric variables","數值變數"],["continuous variables","連續變數"],["binary variables","二元變數"],["logical variables","邏輯變數"],["factor variables","因子變數"],["duplicate records","重複紀錄"],["duplicate observations","重複觀測"],["data merging","資料合併"],["merge datasets","合併資料集"],["left outer join","左外部連接"],["right outer join","右外部連接"],["full outer join","完全外部連接"],["left join","左連接"],["right join","右連接"],["inner join","內連接"],["outer join","外連接"],["cross join","交叉連接"],["many-to-many","多對多"],["one-to-many","一對多"],["one-to-one","一對一"],["join key","連接鍵值"],["join method","連接方法"],["SQL query","SQL 查詢"],["query results","查詢結果"],["aggregation","彙總"],["group by","依群組彙整"],["filtering","篩選"],["sorting","排序"],["transformation","轉換"],["normalization","正規化"],["standardization","標準化"],["one-hot encoding","獨熱編碼"],["dummy variables","虛擬變數"],["training data","訓練資料"],["test data","測試資料"],["train-test split","訓練／測試資料切分"],["cross-validation","交叉驗證"],["predictive modeling","預測建模"],["predictive model","預測模型"],["statistical model","統計模型"],["observations","觀測值"],["variables","變數"],["distribution","分布"],["quantiles","分位數"],["percentiles","百分位數"],["median","中位數"],["mean","平均數"],["variance","變異數"],["standard deviation","標準差"],["interquartile range","四分位距"],["frequency table","次數分配表"],["contingency table","列聯表"],["conditional probability","條件機率"],["conditional distribution","條件分布"],["data collection","資料蒐集"],["data preparation","資料準備"],["data manipulation","資料操作"],["data extraction","資料擷取"],["raw data","原始資料"],["business objective","商業目標"],["business problem","商業問題"],["domain knowledge","領域知識"],["model performance","模型表現"],["model accuracy","模型準確度"],["policyholders","保戶"],["policyholder","保戶"],["underwriting","核保"],["mortality","死亡率"],["lapse rates","脫退率"],["claim frequency","理賠頻率"],["claim severity","理賠金額嚴重度"],["claims data","理賠資料"],["character encoding","字元編碼"],["file format","檔案格式"],["delimiter","分隔符號"],["comma-separated values","逗號分隔值"],["working directory","工作目錄"],["relative path","相對路徑"],["absolute path","絕對路徑"],["read the data","讀取資料"],["load the data","載入資料"],["convert the data","轉換資料"],["check the data","檢查資料"],["data types","資料型別"],["tidy data","整齊資料"],["missing observations","缺失觀測值"],["random sampling","隨機抽樣"],["potential bias","潛在偏差"],["is associated with","與……相關"],["holding other variables constant","其他變數固定下"],["subject to","受……限制"],["with respect to","就……而言"],["take into account","納入考量"],["based on","根據"],["in order to","為了"],["result in","導致"],["consists of","由……組成"],["is likely to","可能會"],["should be considered","應予考量"],["could be used to","可用於"],["may indicate","可能顯示"],["be used to predict","用來預測"],["different from","與……不同"],["in contrast","相較之下"]];
const STUDY_MAP=new Map(STUDY_GLOSSARY.map(([en,zh])=>[en.toLowerCase(),zh]));
const STUDY_RX=new RegExp(STUDY_GLOSSARY.map(x=>x[0]).sort((a,b)=>b.length-a.length).map(x=>x.replace(/[.*+?^$\{\}()|[\]\\]/g,"\\$&")).join("|"),"gi");
function annotateTextInto(node,text){
 if(!text)return;
 STUDY_RX.lastIndex=0;
 let i=0,m,count=0;
 while((m=STUDY_RX.exec(text))&&count<20){
   const j=m.index, k=j+m[0].length, left=j>0?text[j-1]:"",right=k<text.length?text[k]:"";
   if((left&&/[A-Za-z]/.test(left))||(right&&/[A-Za-z]/.test(right)))continue;
   node.appendChild(document.createTextNode(text.slice(i,j)));
   const mark=document.createElement("strong");mark.className="learning-mark";mark.textContent=m[0];node.appendChild(mark);
   const gloss=document.createElement("span");gloss.className="learning-gloss";gloss.lang="zh-Hant";gloss.textContent="（"+STUDY_MAP.get(m[0].toLowerCase())+"）";node.appendChild(gloss);
   i=k;count++;
 }
 node.appendChild(document.createTextNode(text.slice(i)));
}
function annotatedClone(original){
 const clone=original.cloneNode(true);
 clone.className="reading-view reading-annotated"+(original.classList.contains("pdf-source-original")?" pdf-source-original":"");
 clone.removeAttribute("id");
 clone.setAttribute("lang","en");
 const walker=document.createTreeWalker(clone,NodeFilter.SHOW_TEXT),nodes=[];
 while(walker.nextNode())nodes.push(walker.currentNode);
 for(const textNode of nodes){
   const p=textNode.parentElement;
   if(!p||p.closest("pre,code,a,script,style,svg,math,textarea"))continue;
   if(!textNode.nodeValue.trim())continue;
   const before=textNode.nodeValue,frag=document.createDocumentFragment();
   annotateTextInto(frag,before);
   textNode.replaceWith(frag);
 }
 return clone;
}
/* Delimiters are retained verbatim. Prefix whitespace is never normalized,
   so concatenating all semantic chunks restores original.textContent. */
function semanticSegments(text){
 if(!text)return [""];
 const result=[];let last=0;
 for(let i=0;i<text.length;i++){
   const c=text[i], next=text[i+1]||"",len=i-last;
   const boundary=(c==="\n"&&next==="\n"&&len>25)||
      (/[.!?;:]/.test(c)&&/[ \n\t]/.test(next)&&len>52)||
      (c===","&&/[ \n\t]/.test(next)&&len>95);
   if(boundary&&result.length<140){
     let end=i+1;
     while(end<text.length&&/[ \t]/.test(text[end]))end++;
     result.push(text.slice(last,end));last=end;i=end-1;
   }
 }
 if(last<text.length)result.push(text.slice(last));
 return result.length?result:[text];
}
function diagonalClone(original){
 const el=document.createElement("div");
 el.className="reading-view reading-diagonal";
 el.lang="en";
 el.setAttribute("aria-label","完整英文原文，語義模塊階梯式排版");
 const raw=original.textContent;
 const lines=raw.split("\n");
 const codeLines=lines.filter(line=>/^\s*(?:library\(|(?:print|head|summary)\(|def |import |from \w+ import |<\?xml|<\/?[\w-]+>|(?:[\w.]+\s*(?:<-|=)\s*(?:function|\w+\())|\{\s*$)/.test(line)).length;
 // Preserve visually sensitive code blocks as one preformatted chunk.
 const preserveCode=original.classList.contains("pdf-source-original")&&
                    codeLines>Math.max(7,Math.floor(lines.length*.35));
 const chunks=preserveCode?[raw]:semanticSegments(raw);
 chunks.forEach((chunk,i)=>{
   const span=document.createElement("span");
   span.className="semantic-chunk depth-"+Math.min(4,i%5);
   annotateTextInto(span,chunk);
   el.appendChild(span);
 });
 return el;
}
function extractSentence(text,limit=210,lang="en"){
 let raw=text.replace(/\r/g,"");
 // SOA PDF source sometimes contains printer-layer component labels. Strip
 // these only from the derived summary, never from the original manuscript.
 if(lang==="en"){
   raw=raw.replace(/\bComponent Table\d+\b/gi," ")
     .replace(/^\s*(?:Type|Title|Header|Footer)\s+(?:Panel|Callout|Panel Footer|Module \d+ Learning Objectives)?\s*$/gmi," ")
     .replace(/^\s*Content\s*$/gmi," ")
     .replace(/^\s*(?:Section\s+\d+(?:\.\d+)?\s+Learning Objective|Case Studies)\s*$/gmi," ")
     .replace(/^\s*\[BEGIN LINK[^\n]*/gmi," ")
     .replace(/^\s*\[END LINK\]\s*$/gmi," ")
     .replace(/[●•]/g," ");
 }
 const cleaned=raw.replace(/\s+/g," ").trim();
 if(!cleaned)return "";
 const segments=cleaned.split(/(?<=[.!?。！？])\s+/);
 const good=segments.map((value,index)=>({value:value.trim(),index}))
   .filter(x=>x.value.length>=12&&!/^(?:[\[<]|(?:Content|Footer|Header|Title|Type)\b|[=#{}])/i.test(x.value));
 const score=x=>{
   const v=x.value;
   let pts=0;
   if(v.length>35&&v.length<limit+75)pts+=4;
   if(v.length>limit+120)pts-=5;
   if(/\b(?:data|dataset|model|variable|predict|database|record|join|missing|imput|table|file|quality|validation|value|sample|coding|structure|workflow|filter)\b/i.test(v))pts+=3;
   if(/\b(?:is|are|can|should|could|allows|need|used|using|contains|provide|requires|define|applied|identify|calculate|helps)\b/i.test(v))pts+=2;
   if(/\b(?:Component Table|Panel|CHUNK \d+|BEGIN LINK|END LINK|Footer|Header)\b/i.test(v))pts-=12;
   if(/(?:https?:\/\/|\.csv\b|www\.|\{|\}|\[\[)/i.test(v))pts-=3;
   if(/^\d+(?:\.\d+){1,3}\s/.test(v))pts-=3;
   pts-=Math.min(4,x.index*.2);
   return pts;
 };
 good.sort((a,b)=>score(b)-score(a)||a.index-b.index);
 const chosen=(good[0]?.value||segments.find(x=>x.trim())||"").trim();
 if(chosen.length<=limit)return chosen;
 const breaker=lang==="zh"?/[。！？；]/:/[.!?;]/;
 const ix=chosen.slice(0,limit+35).search(breaker);
 if(ix>=35)return chosen.slice(0,ix+1);
 const end=chosen.slice(0,limit+10).lastIndexOf(lang==="zh"?"，":" ");
 return chosen.slice(0,end>70?end:limit).trim()+"…";
}
function makeSummary(original,translation,section){
 const pane=document.createElement("aside");pane.className="reading-view reading-summary";
 pane.setAttribute("aria-label","英文重點摘錄與既有中文譯文摘錄");
 pane.dataset.method="source-extractive";
 const en=document.createElement("p");en.className="summary-en";en.lang="en";
 const zh=document.createElement("p");zh.className="summary-zh";zh.lang="zh-Hant";
 const raw=original.textContent;
 const english=extractSentence(raw,240,"en");
 const chinese=extractSentence(translation.textContent,130,"zh");
 en.textContent=english||section.querySelector("header h2")?.textContent||"";
 zh.textContent=chinese||section.querySelector("header .zh-heading")?.textContent||"";
 pane.append(en,zh);return pane;
}
function prepareEnhancedViews(){
 const article=$("study-content");
 const pairs=[...article.querySelectorAll(".pair")];
 if(!pairs.length)throw new Error("無法建立精讀檢視：找不到雙語段落。");
 let enhanced=0;
 for(const pair of pairs){
   const original=pair.querySelector(":scope>.original"),
         translation=pair.querySelector(":scope>.translation");
   if(!original||!translation)throw new Error("原文或 Work 譯文缺失。");
   if(pair.querySelector(":scope>.reading-annotated"))continue;
   const anot=annotatedClone(original);
   const diag=diagonalClone(original);
   const summary=makeSummary(original,translation,pair.closest(".lesson"));
   // Test unaltered source text, preserving all whitespace and original punctuation.
   const withoutGloss=el=>{
     const c=el.cloneNode(true);c.querySelectorAll(".learning-gloss").forEach(g=>g.remove());return c.textContent;
   };
   if(withoutGloss(anot)!==original.textContent||withoutGloss(diag)!==original.textContent)
     throw new Error("英文完整性驗證失敗："+(pair.closest(".lesson")?.dataset.num||"未知"));
   pair.append(anot,diag,summary);enhanced++;
 }
 for(const section of article.querySelectorAll("section.lesson")){
   const header=section.querySelector(":scope>header");
   const h2=header?.querySelector(":scope>h2");
   if(h2&&!header.querySelector(".reading-heading")){
     const heading=document.createElement("h2");
     heading.className="reading-view reading-heading";heading.lang="en";
     annotateTextInto(heading,h2.textContent);
     h2.after(heading);h2.classList.add("replaced-by-reading");
   }
 }
 for(const heading of article.querySelectorAll("h3,h4")){
   if(heading.classList.contains("reading-view")||
      heading.closest(".translation,.original,.reading-annotated,.reading-diagonal,.reading-summary"))continue;
   if(heading.nextElementSibling?.classList.contains("reading-heading"))continue;
   if(!heading.textContent.includes("／"))continue;
   const clone=document.createElement(heading.tagName.toLowerCase());
   clone.className="reading-view reading-heading";clone.lang="en";
   annotateTextInto(clone,heading.textContent.split("／")[0].trim());
   heading.after(clone);heading.classList.add("replaced-by-reading");
 }
 // Enrich source tab summaries without altering their original content.
 for(const summary of article.querySelectorAll(".source-tabs > details > summary")){
   if(summary.querySelector(".reading-tab-label"))continue;
   const base=document.createElement("span");base.className="source-tab-base";
   while(summary.firstChild)base.appendChild(summary.firstChild);
   const english=document.createElement("span");english.className="reading-view reading-tab-label";
   english.lang="en";english.textContent=base.textContent.split("／")[0].trim();
   summary.append(base,english);
 }
 // Only derivatives are unhidden; original pair data are never rewritten.
 article.querySelectorAll(".reading-view").forEach(el=>el.removeAttribute("hidden"));
 article.dataset.enhancedPairs=String(pairs.length);
}

function prepareBilingualLabels(){
 document.querySelectorAll("#study-content .source-tabs summary,#study-content .lesson h3").forEach(node=>{
   if(node.classList.contains("reading-view")||node.querySelector(".reading-tab-label"))return;
   const original=node.dataset.origFull||node.textContent;
   if(!node.dataset.origFull)node.dataset.origFull=original;
   if(node.classList.contains("stacked-bilingual-label")||!original.includes("／"))return;
   const parts=original.split("／");
   if(parts.length<2)return;
   const en=parts.shift().trim(),zh=parts.join("／").trim();
   if(!en||!zh)return;
   const chinese=document.createElement("span");
   chinese.lang="zh-Hant";chinese.className="bilingual-label-zh";chinese.textContent=zh;
   const english=document.createElement("span");
   english.lang="en";english.className="bilingual-label-en";english.textContent=en;
   node.replaceChildren(chinese,english);
   node.classList.add("stacked-bilingual-label");
 });
}
function preferredReadingMode(){
 try{const saved=localStorage.getItem(DISPLAY_KEY);const legacy={zh:"annotated",parallel:"triple",tap:"vertical"};const next=legacy[saved]||saved;return DISPLAY_MODES.includes(next)?next:"vertical"}
 catch(_){return "vertical"}
}
/* Keep the SAME source paragraph in view when a reading mode changes page height.
   Store the anchor on pointerdown (before iOS/Safari focuses the toolbar),
   and anchor to stable bilingual pairs rather than notes hidden in English-only. */
let readingSwitchRevision=0;
let readingScrollStyles=null;
let pendingModeAnchor=null;
function captureReadingPosition(){
 const article=$("study-content");
 if(!loaded||!article)return null;
 const viewport=window.innerHeight;
 const barBottom=Math.max(0,$("mode-bar")?.getBoundingClientRect().bottom||0);
 const page=article.getBoundingClientRect();
 if(page.bottom<=barBottom||page.top>=viewport)return null;
 const y=Math.min(viewport-24,Math.max(barBottom+32,viewport*.43));
 const x=Math.max(8,Math.min(window.innerWidth-8,page.left+page.width*.5));
 const stable=".pair,.lesson header,.chapter-heading,.source-figure,.source-page-figure";
 const unstable="details.tutor,details.phrases,.teacher-answer";
 let node=null;
 // The same .pair exists in all four modes, even if either language is hidden.
 for(const dy of [0,-30,30,-75,75,-120,120]){
   const py=Math.max(barBottom+8,Math.min(viewport-8,y+dy));
   const hit=document.elementFromPoint(x,py);
   const candidate=hit?.closest(stable);
   if(!candidate||!article.contains(candidate)||candidate.closest(unstable))continue;
   const rect=candidate.getBoundingClientRect();
   if(rect.width&&rect.height){node=candidate;break}
 }
 if(!node){
   // When the reader is inside a Chinese-only tutor note, choose the closest
   // surviving paragraph, not the chapter heading hundreds of lines away.
   let best=Infinity;
   article.querySelectorAll(stable).forEach(candidate=>{
     if(candidate.closest(unstable))return;
     const rect=candidate.getBoundingClientRect();
     if(!rect.width||!rect.height)return;
     const distance=Math.max(0,rect.top-y,y-rect.bottom);
     if(distance<best){best=distance;node=candidate}
   });
 }
 if(!node)return null;
 const rect=node.getBoundingClientRect();
 return {
   node,
   y,
   fraction:Math.max(0,Math.min(1,(y-rect.top)/Math.max(1,rect.height)))
 };
}
function restoreReadingPosition(saved){
 if(!saved?.node?.isConnected)return;
 const rect=saved.node.getBoundingClientRect();
 if(!rect.height)return;
 const delta=rect.top+saved.fraction*rect.height-saved.y;
 if(Math.abs(delta)>.6){
   const root=document.scrollingElement||document.documentElement;
   const limit=Math.max(0,root.scrollHeight-window.innerHeight);
   window.scrollTo({top:Math.min(limit,Math.max(0,window.scrollY+delta)),behavior:"auto"});
 }
}
function applyReadingMode(mode,preservePosition=true,anchorOverride=null){
 const selected=DISPLAY_MODES.includes(mode)?mode:"vertical";
 if(preservePosition&&document.documentElement.dataset.readingMode===selected)return;
 const saved=preservePosition?(anchorOverride||captureReadingPosition()):null;
 const root=document.documentElement;
 const revision=++readingSwitchRevision;
 if(saved){
   if(!readingScrollStyles)readingScrollStyles={
     behavior:root.style.scrollBehavior,
     rootAnchor:root.style.overflowAnchor,
     bodyAnchor:document.body.style.overflowAnchor
   };
   root.style.scrollBehavior="auto";
   root.style.overflowAnchor="none";
   document.body.style.overflowAnchor="none";
 }
 root.dataset.readingMode=selected;
 $("mode-bar")?.querySelectorAll("button[data-mode]").forEach(button=>{
   button.setAttribute("aria-pressed",String(button.dataset.mode===selected));
 });
 document.querySelectorAll("#toc .toc-link").forEach(link=>{
   const title=link.querySelector(".toc-label");
   if(title)title.textContent=(selected==="en"||selected==="annotated")?(link.dataset.en||link.dataset.zh||""):(link.dataset.zh||link.dataset.en||"");
 });
 try{localStorage.setItem(DISPLAY_KEY,selected)}catch(_){}
 function finish(){
   if(revision!==readingSwitchRevision)return;
   if(saved)restoreReadingPosition(saved);
   if(readingScrollStyles){
     root.style.scrollBehavior=readingScrollStyles.behavior;
     root.style.overflowAnchor=readingScrollStyles.rootAnchor;
     document.body.style.overflowAnchor=readingScrollStyles.bodyAnchor;
     readingScrollStyles=null;
   }
 }
 if(saved){
   // One correction before painting, two after reflow, and a delayed Safari
   // correction after toolbar focus / dynamic viewport settles.
   restoreReadingPosition(saved);
   requestAnimationFrame(()=>{
     if(revision!==readingSwitchRevision)return;
     restoreReadingPosition(saved);
     requestAnimationFrame(()=>{
       if(revision!==readingSwitchRevision)return;
       restoreReadingPosition(saved);
     });
   });
   setTimeout(finish,110);
 }else{
   finish();
 }
}
$("mode-bar")?.addEventListener("pointerdown",event=>{
 const button=event.target.closest("button[data-mode]");
 if(button)pendingModeAnchor={
   mode:button.dataset.mode,
   anchor:captureReadingPosition(),
   time:Date.now()
 };
},{passive:true});
$("mode-bar")?.addEventListener("click",event=>{
 const button=event.target.closest("button[data-mode]");
 if(!button)return;
 const captured=pendingModeAnchor;
 pendingModeAnchor=null;
 const anchor=captured&&captured.mode===button.dataset.mode&&Date.now()-captured.time<2500
   ?captured.anchor:null;
 applyReadingMode(button.dataset.mode,true,anchor);
});

function toggleMenu(open){
 document.body.classList.toggle("toc-open",open);
 $("toc-trigger")?.setAttribute("aria-expanded",String(open));
 show("toc-backdrop",open);
 if(!open)$("toc-trigger")?.blur();
}
$("toc-trigger")?.addEventListener("click",()=>toggleMenu(!document.body.classList.contains("toc-open")));
$("toc-close")?.addEventListener("click",()=>toggleMenu(false));
$("toc-backdrop")?.addEventListener("click",()=>toggleMenu(false));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&document.body.classList.contains("toc-open")){toggleMenu(false);$("toc-trigger")?.focus()}});
window.addEventListener("resize",()=>{if(window.innerWidth>800&&document.body.classList.contains("toc-open"))toggleMenu(false)});

/* Knowledge Check UI is created after sanitization; no questions/answers live in the public repository. */
function activateQuizzes(){
 const isEnglish=()=>["en","annotated"].includes(document.documentElement.dataset.readingMode);
 document.querySelectorAll("#study-content .knowledge-check").forEach((quiz,qIndex)=>{
   if(quiz.dataset.enhanced==="true")return;
   quiz.dataset.enhanced="true";
   const multi=quiz.dataset.multiple==="true";
   const key=(quiz.dataset.correct||"").split(",").map(Number).filter(Number.isInteger).sort((a,b)=>a-b);
   const options=[...quiz.querySelectorAll(".quiz-option")];
   const controls=quiz.querySelector(".quiz-controls");
   const feedback=quiz.querySelector(".quiz-feedback");
   const solution=quiz.querySelector(".teacher-answer");
   if(!controls||!feedback||!solution||!options.length||!key.length)return;
   const inputs=[];
   options.forEach((opt,index)=>{
     const id="atpa-q"+qIndex+"-o"+index;
     const label=document.createElement("label");
     label.className="choice-row";
     const input=document.createElement("input");
     input.type=multi?"checkbox":"radio";
     input.name="atpa-quiz-"+qIndex;
     input.value=String(index+1);
     input.id=id;
     input.setAttribute("aria-label",(multi?"複選選項 ":"單選選項 ")+(index+1));
     const mark=document.createElement("span");mark.className="choice-indicator";mark.textContent=multi?"□":"○";
     const body=document.createElement("div");body.className="choice-body";
     while(opt.firstChild)body.appendChild(opt.firstChild);
     label.append(input,mark,body);opt.append(label);
     inputs.push(input);
   });
   const check=document.createElement("button");check.type="button";check.className="quiz-check";check.textContent="檢查答案／Check answers";
   const clear=document.createElement("button");clear.type="button";clear.className="quiz-reset";clear.textContent="重新作答／Reset";
   controls.append(check,clear);
   check.addEventListener("click",()=>{
     const selected=inputs.filter(i=>i.checked).map(i=>Number(i.value)).sort((a,b)=>a-b);
     if(!selected.length){
       feedback.textContent=isEnglish()?"Select at least one option.":"請先選擇至少一個選項。";
       feedback.dataset.status="hint";return;
     }
     const correct=selected.length===key.length&&selected.every((x,i)=>x===key[i]);
     feedback.textContent=correct?(isEnglish()?"Correct. The teacher's explanations are displayed below.":"答對了。下方已展開逐選項解析。"):
       (isEnglish()?"Review your selection and the teacher's explanations below.":"本次選答與教師推導答案不同，請參考下方逐選項解析。");
     feedback.dataset.status=correct?"correct":"review";
     options.forEach((opt,i)=>{
       opt.classList.toggle("answer-key",key.includes(i+1));
       opt.classList.toggle("answer-wrong",selected.includes(i+1)&&!key.includes(i+1));
     });
     solution.hidden=false;solution.open=true;
   });
   clear.addEventListener("click",()=>{
     inputs.forEach(i=>i.checked=false);
     feedback.textContent="";delete feedback.dataset.status;
     options.forEach(opt=>opt.classList.remove("answer-key","answer-wrong"));
     solution.hidden=true;solution.open=false;
   });
 });
}

function makeChapter(id,key){
 const chapter=CHAPTERS[key],block=document.createElement("div");
 block.id=id;block.className="chapter-heading";
 const tag=document.createElement("span");tag.className="chapter-code";tag.textContent="SECTION "+key;
 const zh=document.createElement("h2");zh.className="chapter-heading-zh";zh.textContent=chapter.zh;
 const en=document.createElement("div");en.className="chapter-heading-en";en.textContent=chapter.title;
 block.append(tag,zh,en);return block;
}
function makeNavigation(lessons){
 const toc=$("toc");toc.replaceChildren();
 const count=document.createElement("p");count.className="toc-summary";count.textContent="按原書順序 · 已完成 223 小節";toc.append(count);
 for(const [chapter,meta] of Object.entries(CHAPTERS)){
   const details=document.createElement("details");details.className="toc-group";details.open=true;
   const summary=document.createElement("summary");
   const num=document.createElement("span");num.className="group-num";num.textContent=chapter;
   const label=document.createElement("span");label.className="group-label";label.textContent=meta.zh;
   summary.append(num,label);
   const links=document.createElement("div");links.className="toc-links";
   const sectionHead=document.createElement("a");sectionHead.className="toc-chapter-link";
   sectionHead.href="#chapter"+chapter.replace(".","");
   sectionHead.textContent="↳ "+meta.zh;
   links.append(sectionHead);
   lessons.filter(s=>s.dataset.num.startsWith(chapter+".")).forEach(sec=>{
     const a=document.createElement("a");a.href="#"+sec.id;a.className="toc-link";a.dataset.id=sec.id;
     a.dataset.en=sec.querySelector("header h2")?.textContent||"";
     a.dataset.zh=sec.querySelector(".zh-heading")?.textContent||a.dataset.en;
     const n=document.createElement("span");n.className="toc-num";n.textContent=sec.dataset.num;
     const title=document.createElement("span");title.className="toc-label";title.textContent=a.dataset.zh;
     a.append(n,title);links.append(a);
   });
   details.append(summary,links);toc.append(details);
 }
 toc.addEventListener("click",e=>{
   const a=e.target.closest("a[href^='#']");
   if(!a)return;
   toggleMenu(false);
   if(a.dataset.id)activateSection(a.dataset.id);
 });
}
function activateSection(id){
 const section=allLessons.find(x=>x.id===id);
 if(!section)return;
 $("toc")?.querySelectorAll(".toc-link").forEach(a=>{
   const active=a.dataset.id===id;
   a.classList.toggle("active",active);
   if(active)a.setAttribute("aria-current","location");
   else a.removeAttribute("aria-current");
 });
 const current=$("current-section");
 if(current)current.textContent="§"+section.dataset.num;
 const sidebar=$("chapter-sidebar"),link=$("toc")?.querySelector('.toc-link[data-id="'+id+'"]');
 if(link&&sidebar&&window.innerWidth>800){
   const b=link.getBoundingClientRect(),p=sidebar.getBoundingClientRect();
   if(b.top<p.top+65||b.bottom>p.bottom-25)sidebar.scrollTop+=b.top-p.top-sidebar.clientHeight/2;
 }
}
function syncCurrentSection(){
 scrollScheduled=false;
 if(!loaded||document.body.classList.contains("toc-open"))return;
 let target=allLessons[0];
 for(const sec of allLessons){
   if(sec.getBoundingClientRect().top<=185)target=sec;
   else break;
 }
 if(target&&target.id!==document.querySelector("#toc .toc-link.active")?.dataset.id)activateSection(target.id);
}
window.addEventListener("scroll",()=>{
 if(loaded&&!scrollScheduled){scrollScheduled=true;requestAnimationFrame(syncCurrentSection)}
},{passive:true});
function mountAll(texts){
 const sections=[];
 for(let i=0;i<texts.length;i++){
   const doc=new DOMParser().parseFromString(texts[i].replace(/^\uFEFF/,""),"text/html");
   const parsed=cleanSource(doc);
   if(parsed.lessons.length!==EXPECTED_COUNTS[i]||parsed.lessons[0].id!==FIRST_IDS[i])
     throw new Error("教材 §"+SOURCES[i].label+" 的小節數量或順序不符，暫停顯示以避免漏頁。");
   sections.push(...parsed.lessons.map(s=>document.importNode(s,true)));
 }
 if(sections.length!==223||new Set(sections.map(s=>s.id)).size!==223)
   throw new Error("223 個小節未完整載入，請重新整理後再試。");
 const article=$("study-content"),frag=document.createDocumentFragment();let lastChapter="";
 for(const sec of sections){
   const group=sec.dataset.num.split(".").slice(0,2).join(".");
   if(group!==lastChapter){
     frag.appendChild(makeChapter("chapter"+group.replace(".",""),group));
     lastChapter=group;
   }
   frag.appendChild(sec);
 }
 article.replaceChildren(frag);
 allLessons=[...article.querySelectorAll("section.lesson")];
 prepareBilingualLabels();
 prepareEnhancedViews();
 makeNavigation(allLessons);
 show("gate",false);show("reader-wrap",true);
 loaded=true;
 
 applyReadingMode(preferredReadingMode(),false);
 activateQuizzes();
 // Old bookmarked ?part= links remain valid. A hash always wins.
 const legacyPart=params.get("part");
 const targetId=location.hash?decodeURIComponent(location.hash.slice(1)):(FIRST_IDS[Number(legacyPart)-1]||"s111");
 if(targetId&&document.getElementById(targetId))
   requestAnimationFrame(()=>requestAnimationFrame(()=>{
     document.getElementById(targetId)?.scrollIntoView({block:"start",behavior:"instant"});
     activateSection(targetId);
   }));
 else activateSection(allLessons[0].id);
}
async function fetchOneSource(source,token){
 const endpoint="https://www.googleapis.com/drive/v3/files/"+encodeURIComponent(source.fileId)+
   (source.kind==="raw"?"?alt=media":"/export?mimeType="+encodeURIComponent("text/plain"));
 let res;
 try{res=await fetch(endpoint,{headers:{"Authorization":"Bearer "+token},cache:"no-store"})}
 catch(e){throw new Error("下載 §"+source.label+" 時網路連線失敗。")}
 if(res.status===401){clearToken();throw new Error("Google 授權已過期，請重新登入。")}
 if(res.status===403)throw new Error("目前帳號無法讀取 §"+source.label+"，請切換 Google 帳號。");
 if(!res.ok)throw new Error("讀取 §"+source.label+" 時 Google Drive 回應 HTTP "+res.status);
 return res.text();
}
async function fetchPrivate(token){
 if(loaded||!selected)return;
 status("正在載入 Module 2 全部 223 個小節…");
 const texts=await Promise.all(SOURCES.map(source=>fetchOneSource(source,token)));
 mountAll(texts);
}

function initClient(){
 if(tokenClient||!window.google?.accounts?.oauth2)return !!tokenClient;
 tokenClient=google.accounts.oauth2.initTokenClient({
   client_id:CLIENT_ID,scope:SCOPE,
   callback:async response=>{
     if(response?.error){status("Google 授權未完成："+response.error);return}
     try{
       const t=remember(response);
       try{await window.HanamiAuth?.remember?.(t)}catch(_){}
       await fetchPrivate(t)
     }catch(e){status(e?.message||"教材載入失敗，請再試一次。")}
   }
 });
 return true;
}
function requestLogin(switchAccount=false){
 if(!initClient()){status("Google 登入元件尚未就緒，請稍候重試。");return}
 status("正在等待 Google 帳號授權…");
 try{
  if(window.HanamiAuth?.request){window.HanamiAuth.request(tokenClient,switchAccount)}
  else tokenClient.requestAccessToken({prompt:switchAccount?"select_account":"consent"});
 }catch(e){status("無法開啟 Google 授權視窗，請重新整理網頁。")}
}
$("sign-in")?.addEventListener("click",()=>requestLogin(false));
$("switch-account")?.addEventListener("click",()=>{clearToken();requestLogin(true)});
async function main(){
 show("reader-wrap",false);show("gate",true);
 if(!selected){status("請由 Module 2 的閱讀入口開啟本章。");return}
 const saved=loadSaved();
 if(saved){
  try{await fetchPrivate(saved);return}
  catch(e){status(e?.message||"已有 Google 授權，但教材無法載入；請重新登入。");return}
 }
 status("請使用擁有私人教材存取權的 Google 帳號登入。");
}

main();
})();