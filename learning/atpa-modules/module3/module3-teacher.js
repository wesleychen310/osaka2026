/* Module 3 · dedicated pedagogical comparison view. English source is loaded from private Drive. */
(()=>{"use strict";
const GUIDE={
"s151":{idea:"這一節不是要你背新的公式，而是要知道 Bayesian modeling 在估計什麼：未知參數本身的機率分布。",steps:["先區分三件事：參數 θ、觀測資料 Y，以及我們對 θ 的不確定性。Frequentist 把 θ 當固定但未知；Bayesian 則用分布描述對 θ 的不確定性。","整個 §1.5 的學習主線是：Prior（資料前）→ Likelihood（資料告訴我們什麼）→ Posterior（更新後）→ 用 posterior 預測或決策。"],caseText:"假設你要估計新型醫療險的每人年理賠次數 λ。既有商品經驗可以幫忙設定 prior，新商品實際理賠資料則用來更新估計。",pitfall:"Bayesian 並非把真實的 λ 當成隨時間亂變；機率分布表達的是我們對未知 λ 的不確定性。",exam:"先辨認研究的未知參數、prior 的依據、實際觀測資料與 posterior 的用途。"},
"s152":{idea:"Frequentist 與 Bayesian 的主要分野是「機率如何描述未知參數」，不是哪一派比較精準。",steps:["Frequentist：θ 是固定未知值；重複抽樣會讓估計量改變。95% confidence interval 的涵蓋率指的是建構區間的方法在長期重複抽樣下有 95% 的涵蓋率。","Bayesian：在資料與模型假設已知的條件下，θ 的 posterior 是一個分布。95% credible interval 可說在指定模型、prior 與資料下，θ 落在該區間的 posterior probability 為 95%。","兩種方法都必須檢查資料品質、模型假設與適用情境，並非先驗資訊一加入就必然更好。"],caseText:"壽險新契約的 lapse rate 資料很少時，Bayesian 可把既有業務經驗列入 prior；當有效觀測增加，likelihood 對 posterior 的影響通常更大。",pitfall:"不要把 95% frequentist confidence interval 直接解讀成「參數落在這個已算出區間的機率是 95%」。",exam:"能用自己的話正確區分 confidence interval 與 credible interval。"},
"s153":{idea:"Bayes' Rule 的實質意義：先有看法，再讓資料修正看法。",formula:"p(θ | Y) = p(Y | θ) p(θ) / p(Y)；因此 posterior ∝ likelihood × prior",steps:["p(θ)：prior。尚未看當次資料時，對未知參數 θ 的分布假設。","p(Y | θ)：likelihood。假設參數是 θ，觀察到這批資料的相對可能性。","p(θ | Y)：posterior。看過資料後，重新評估 θ 的分布。","p(Y)：normalizing constant，也叫 marginal likelihood。它不隨 θ 改變，作用是使 posterior 的總機率為 1。"],caseText:"理賠次數偏高時，likelihood 會偏向較大的 λ；但若樣本非常少，prior 仍可能有明顯影響。",pitfall:"Likelihood 不等於「已知資料，參數為某值的機率」；後者是 posterior，二者條件方向不同。",exam:"看到『posterior』立刻寫出 prior × likelihood，再確認分母與所採用的分布參數化方式。"},
"s154":{idea:"Poisson–Gamma 是最適合用精算 Credibility 思維理解的 Bayesian 入門案例。",formula:"Yᵢ | λ ~ Poisson(λ)；λ ~ Gamma(shape=2, scale=4)；E[λ]=2×4=8",steps:["Poisson 適合表達一個期間的理賠次數，母數 λ 必須大於 0。","教材指定 Gamma(2,4)，而且明說採 Loss Models 的參數化：shape=2、scale=4，不是 rate=4。prior mean 因此為 8。","觀察 n 筆 Yᵢ 後，Poisson likelihood 含 λ^(Σyᵢ) exp(−nλ)。Gamma prior 的同類項相乘，仍得到 Gamma posterior；這叫 conjugacy（共軛）。","更新後：shape = 2 + Σyᵢ；scale = 1/(n + 1/4)。n 是觀測數，不是總理賠次數。"],caseText:"新商品有 n 個保單年度的理賠次數。先把 8 視為歷史經驗平均，再用觀測總理賠次數 Σyᵢ 更新 λ。",pitfall:"把 Gamma(2,4) 錯認為 shape=2、rate=4，會得到 prior mean=0.5，完全改變估計結果。",exam:"本教材的 Gamma(2,4) 是 shape–scale；寫公式前先查清楚參數定義。"},
"s155":{idea:"Posterior mean 可以改寫成「觀測平均」與「prior mean」的加權平均，和 Credibility 非常接近。",formula:"E[λ | Y] = (2 + Σyᵢ)/(n + 1/4) = [n/(n+1/4)] × ȳ + [(1/4)/(n+1/4)] × 8",steps:["Posterior 仍為 Gamma，因此平均數 = shape × scale。","實際樣本 ȳ 的權重 n/(n+0.25) 隨 n 增加；prior 平均 8 的權重 0.25/(n+0.25) 隨 n 增加而下降。","例：n=10、觀測總次數=50，ȳ=5。posterior mean=52/10.25≈5.073。這個結果比樣本平均 5 稍高，因 prior mean 是 8。","Posterior mean 在 squared-error loss 下是最佳 Bayes point estimate；若採不同 loss function，最佳點估計可能變成 median 或其他統計量。"],caseText:"這就像 Credibility：新商品自有理賠經驗少時，會較倚賴其他經驗；當 exposure 增加，自有經驗權重提高。",pitfall:"這裡的 0.25 是 prior rate（scale 4 的倒數），不能直接把 Gamma prior 的 shape 2 當成樣本數 2。",exam:"會推導 posterior mean，並能以 credibility-style weighted average 解釋樣本數增加的效果。"},
"s156":{idea:"Bayesian 方法有優勢，但不是任何情境都應一律使用。",steps:["適合：有可辯護的先驗資訊、資料稀少、需要隨資料到來更新估計，或需要完整參數不確定性。","也適合複雜分層模型；但計算可能較慢，且不一定存在 closed-form posterior。","如果 prior 主觀性很強，需要做 prior sensitivity analysis，測試改變 prior 是否明顯改變結論。","實際決策時仍須比較準確性、可解釋性、計算成本及利害關係人是否容易理解。"],caseText:"罕見疾病商品或小型核保分群的資料可能不足；Bayesian 允許引入已有研究，但須清楚揭露先驗假設，不能把經驗判斷偽裝為觀測證據。",pitfall:"不要認為 Bayesian 就不需要 validation；posterior 的可靠性仍受到 likelihood、prior 及資料偏差影響。",exam:"能說出使用 Bayesian 的具體理由與至少一項限制。"},
"s157":{idea:"MCMC 是「無法直接算出 posterior 時，用大量有規則的抽樣來近似」。",steps:["像 Poisson–Gamma 這種簡單共軛模型，可以直接寫出 posterior 的分布形式（closed form）。","多參數、複雜模型通常無法直接計算 posterior 全貌；MCMC 建立 Markov chain，產生近似服從 posterior 的抽樣。","有了足夠可靠的抽樣，就能計算 posterior mean、quantile、credible interval 及不確定性。","MCMC draws 不是獨立樣本，應注意收斂與 mixing；不是抽得越多就無條件正確。"],caseText:"模型若同時估計不同銀行通路的 lapse rate 與彼此間的差異，posterior 可能很複雜，MCMC 可協助取得各項參數的後驗分布。",pitfall:"抽樣數很大，不代表 posterior 已收斂；模型辨識性、鏈間一致性、有效樣本數都很重要。",exam:"先判斷是否有 closed-form posterior，再解釋何時需要 MCMC。"},
"s158":{idea:"Gibbs sampling 的核心是「固定其他參數，一次抽一個；輪流更新」。",steps:["先為全部參數選一組起始值。","輪到 θ₁ 時，使用其他參數最新的值，從 θ₁ 的 full conditional posterior 抽樣；接著輪到 θ₂，依此類推。","這樣循環多次，產生近似 joint posterior 的樣本。它最適合各個 full conditional 都容易抽樣的模型。","嚴格說，教材提及的單一參數「marginal posterior」在此應理解為 full conditional posterior：它條件化於其他參數，與真正積分掉其他參數的 marginal 不同。"],caseText:"同時估計基礎 mortality level 與不同通路的 random effect 時，可想成在固定其中一組值的情況下更新另一組。",pitfall:"不要把 Gibbs 說成每次從 joint posterior 直接獨立抽樣；也不要混淆 full conditional 與 marginal posterior。",exam:"用「一個參數一個參數交替抽樣」的直覺理解即可；教材明說不要求自己實作演算法。"},
"s159":{idea:"Metropolis–Hastings 和 Gibbs 的差別：不必直接從 full conditional 精確抽樣，而是提案、計算接受率。",steps:["由 proposal distribution 提出下一個候選參數值。","依 posterior 的相對密度及 proposal 機制，決定接受或拒絕。拒絕時，Markov chain 停留在前一個狀態。","重複足夠多次並確認抽樣品質後，可利用保留的 draws 近似 posterior。","起始的 burn-in / warmup 可能不代表穩定的 posterior，通常不納入正式推論。"],caseText:"如果 lapse 模型的 posterior 不是標準分布，便可藉 MH 從複雜分布取得估計與 credible intervals。",pitfall:"不能把「拒絕的提案」等同於「樣本不算」：拒絕時鏈的前一個狀態會被重複保留。",exam:"能區分直接抽 full conditional 的 Gibbs 與提案接受／拒絕的 MH。"},
"s1510":{idea:"HMC 的目的是讓抽樣探索 posterior 更有效率，而不是換掉 Bayesian 的基本邏輯。",steps:["一般隨機遊走型 MH 容易走得太小（探索慢），或提案太遠導致拒絕率過高。","Hamiltonian Monte Carlo 使用 posterior 的梯度資訊，沿著有方向的路徑產生候選值，因此在許多高維連續參數模型中更有效率。","NUTS（No-U-Turn Sampler）自動調整軌跡長度，避免走太短或走回頭路，是 Stan 常用的 HMC 方法。","HMC 還是需要有效的模型參數化與診斷；如果出現 divergent transitions，不能忽略。"],caseText:"對多個通路、商品與期間效果建立 Bayesian mixed model，HMC 能比簡單 random-walk MH 更有效率地探索多維參數空間。",pitfall:"『提案接受率很高』不必然等於抽樣效率很高；如果每次只走一點點，樣本高度相關。",exam:"理解 HMC/NUTS 是 MCMC 的較進階抽樣方式，重點在探索 posterior 的效率。"},
"s1511":{idea:"Stan 是做 Bayesian model fitting 的工具；它不是一個新的統計模型。",steps:["你負責定義資料、parameters、prior 與 likelihood；Stan 負責計算和抽樣。","Stan 支援 R、Python 等介面。教材以 R 為主，但概念可直接對應到你常用的 Python。","Stan 常透過 NUTS 進行 MCMC；得到參數樣本後，才進一步做 posterior summary、credible intervals、predictive checks。","應區分兩件事：模型配適完成，以及模型診斷通過。前者不保證後者。"],caseText:"假設以 Bayesian Poisson regression 建立醫療險 claim frequency 模型，Stan 的角色是根據指定的 prior 與 likelihood 求出 posterior draws，而非自動選擇適合的理賠模型。",pitfall:"不要把使用 Stan 本身當作模型有效性的證據；仍須評估收斂、posterior predictive fit 與先驗敏感度。",exam:"能說明 Stan/RStan/Python interface 與 NUTS 的分工，不必背過時的安裝版本。"}
};
function elem(tag,cls,text){const x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=text;return x}
function addText(container,label,value,css){
 if(!value)return;
 const section=elem("section",css||"teacher-chunk");
 section.append(elem("h4","teacher-subheading",label));
 if(Array.isArray(value)){const list=elem("ol","teacher-steps");value.forEach(s=>list.append(elem("li","",s)));section.append(list)}
 else section.append(elem("p","teacher-copy",value));
 container.append(section);
}
function build(lesson){
 if(lesson.querySelector(":scope > .teacher-view"))return;
 const view=elem("div","teacher-view");
 const hint=elem("div","teacher-view-hint","左：SOA 原文（由私人 Google Drive 載入）　｜　右：GPT 教學講義");
 view.append(hint);
 const scroller=elem("div","teacher-scroll");
 scroller.setAttribute("role","region");scroller.setAttribute("aria-label","原文及 GPT 中文講義並排，可左右滑動");
 scroller.tabIndex=0;
 const columns=elem("div","teacher-columns");
 const original=elem("div","teacher-original");
 original.append(elem("div","teacher-column-title","SOA ORIGINAL · 原文"));
 let n=0;
 const candidates=[...lesson.querySelectorAll(".pair,.source-page-figure,.source-figure")];
 candidates.forEach(item=>{
  if(item.closest(".teacher-view,details.tutor,details.phrases,details.gpt-reusable,.chapter-quiz"))return;
  if(item.closest(".pair")!==null && !item.classList.contains("pair"))return;
  if(item.classList.contains("pair")){
    const source=item.querySelector(":scope > .original");
    if(!source)return;
    const wrap=elem("div","teacher-original-item pair");
    const clone=source.cloneNode(true);clone.classList.add("teacher-original-text");
    wrap.append(clone);original.append(wrap);n++;
  }else if(item.classList.contains("source-page-figure")){
    const clone=item.cloneNode(true);clone.removeAttribute("id");clone.classList.add("teacher-source-figure");original.append(clone);
  }else if(!item.closest(".source-page-figure")){
    original.append(item.cloneNode(true));
  }
 });
 if(!n){original.append(elem("p","teacher-copy","本小節的原文格式無法直接抽取，請切換「全英文」檢視原始內容。"))}
 const notes=elem("div","teacher-notes");
 notes.append(elem("div","teacher-column-title","GPT TEACHER · 中文講義"));
 const guide=GUIDE[lesson.id];
 if(guide){
  notes.append(elem("div","teacher-guide-id","精讀講義 · 第一批：§1.5.1–1.5.11"));
  notes.append(elem("h3","teacher-big-idea",guide.idea));
  if(guide.formula)notes.append(elem("div","teacher-formula",guide.formula));
  addText(notes,"一步一步理解",guide.steps);
  addText(notes,"精算案例",guide.caseText,"teacher-chunk teacher-case");
  addText(notes,"最容易搞錯",guide.pitfall,"teacher-chunk teacher-trap");
  addText(notes,"ATPA 怎麼掌握",guide.exam,"teacher-chunk teacher-exam");
 }else{
  const summary=lesson.querySelector(":scope > .gpt-summary .gpt-summary-zh")?.textContent?.trim();
  notes.append(elem("div","teacher-guide-id","第一階段 · 現有精讀摘要"));
  if(summary){
   notes.append(elem("h3","teacher-big-idea",summary));
   const p=lesson.querySelector(".pair > .translation")?.textContent?.trim();
   if(p && p!==summary) addText(notes,"對照原文，補足脈絡",p.slice(0,750));
  }else{
   notes.append(elem("p","teacher-copy","本小節的專屬深入講義尚未完成；目前保留原文檢視。可切換「二段式精讀」閱讀完整繁中翻譯與語塊註解。"));
  }
  notes.append(elem("p","teacher-next-batch","深度版講義會依原章節逐批擴充，不以簡短翻譯冒充完整授課。"));
 }
 columns.append(original,notes);scroller.append(columns);view.append(scroller);
 const jump=elem("div","teacher-jump");
 for(const [label,left] of [["看原文",0],["看講義",1]]){
  const btn=elem("button","teacher-jump-btn",label);btn.type="button";
  btn.addEventListener("click",()=>scroller.scrollTo({left:left?notes.offsetLeft-original.offsetLeft:0,behavior:"smooth"}));
  jump.append(btn);
 }
 view.insertBefore(jump,scroller);
 lesson.append(view);
}
let observer=null,observed=false;
function mount(){
 const article=document.getElementById("study-content");
 const lessons=[...article?.querySelectorAll(":scope > section.lesson")||[]];
 if(!lessons.length||observed)return;
 observed=true;
 const hash=decodeURIComponent(location.hash.slice(1));
 for(const sec of lessons.slice(0,2))if(document.documentElement.dataset.readingMode==="teacher")build(sec);
 const current=hash&&document.getElementById(hash);
 if(current?.matches("section.lesson"))build(current);
 if("IntersectionObserver" in window){
  observer=new IntersectionObserver(entries=>{
   if(document.documentElement.dataset.readingMode!=="teacher")return;
   entries.forEach(entry=>{if(entry.isIntersecting)build(entry.target)});
  },{rootMargin:"650px 0px"});
  lessons.forEach(sec=>observer.observe(sec));
 }else lessons.forEach(build);
}
function ensureVisible(){
 if(document.documentElement.dataset.readingMode!=="teacher")return;
 mount();
 const lessons=[...document.querySelectorAll("#study-content > section.lesson")];
 lessons.filter(sec=>{const b=sec.getBoundingClientRect();return b.bottom> -450 && b.top<innerHeight+650}).forEach(build);
}
const app=document.getElementById("app");
new MutationObserver(()=>{if(!observed)mount();if(document.documentElement.dataset.readingMode==="teacher")ensureVisible()}).observe(app,{childList:true,subtree:true});
new MutationObserver(ensureVisible).observe(document.documentElement,{attributes:true,attributeFilter:["data-reading-mode"]});
window.addEventListener("hashchange",ensureVisible);
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount,{once:true});
else mount();
})();