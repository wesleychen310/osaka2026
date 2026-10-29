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
,
"s1512":{"idea":"安裝 Stan 只是建立運算環境；你真正要掌握的是它如何依照模型設定產生 posterior draws。","steps":["SOA 教材 §1.5.12 提供 Stan 的介面安裝網址，示範環境為 R 4.1.1、RStan 2.21.1、RStudio 2021.09.0+351。這是 2022 年教材採用的版本，不是現在必須照裝的版本。","Stan 是計算引擎，RStan 是 R 介面；如果使用 Python，則須安裝對應的 Python 介面。介面不同，不代表 Bayes 模型邏輯不同。","實際工作先建立編譯／執行環境，再提供模型程式、資料、抽樣設定，最後檢查 posterior summary 與 diagnostics。","ATPA 重點是閱讀和解釋模型設定及輸出；不是背 2022 年的安裝步驟，也不是把「程式有跑完」當成配適成功。"],"caseText":"如果公司要用 Bayesian GLMM 比較不同銀保通路的 lapse risk，你可以選 R 或 Python 建立模型；無論哪個介面，都必須定義資料、未知參數、prior 與 likelihood。","pitfall":"不要將 RStan（介面）、Stan（建模與計算系統）以及 Bayesian model（統計方法）當成同一件事。","exam":"看得懂 Stan 的工作角色，以及 2022 教材指定版本屬於歷史示範環境；考題要解釋的是模型與結果。","check":"思考：換成 Python 介面後，prior × likelihood → posterior 的統計邏輯會改變嗎？不會。"},
"s1513":{"idea":"Stan 官方文件分工不同：先找整體建模方式，再查語法，最後才查個別分布函數。","steps":["User’s Guide：查完整建模範例、如何組織模型，以及如何判讀模型。","Language Reference Manual：查 Stan 的語言規則、資料型態、宣告、程式區塊和語法限制。","Functions Reference：查特定分布和函數，例如 gamma_lpdf、poisson_lpmf 的使用方式與參數。","教材 §1.5.13 列出的 2.28 版連結是當時版本；實際查新語法時應以使用中的 Stan 版本文件為準。"],"caseText":"你若看到 gamma_lpdf(lambda | 2, 0.25)，先去 Functions Reference 確認第二個分布參數的意義；不要直接套用壽險精算課本慣用的 Gamma(shape, scale)。","pitfall":"最危險的不是忘記函數名稱，而是函數跑得動、參數卻填成另一種參數化，產生看似合理但錯誤的答案。","exam":"把官方文件當作核對模型假設與程式語意的依據；尤其要查 likelihood 的參數、變數限制及 posterior 的輸出定義。"},
"s1514":{"idea":"Stan 的六個 program blocks，實際上就是把 Bayesian 分析拆成「資料 → 未知參數 → 模型 → 分析結果」。","formula":"data → transformed data → parameters → transformed parameters → model → generated quantities","steps":["① data（必填）：宣告從 R/Python 傳入的 N 和觀測資料 y。這裡放已知量，不是要估計的參數。","② transformed data（選填）：先對已知資料做計算，例如建立已知的 exposure 轉換或標準化所需常數。","③ parameters（必填）：宣告未知、要由 posterior 抽樣的值，例如正數 λ；可使用 lower=0 等限制。","④ transformed parameters（選填）：依參數計算派生量，例如由 log-rate 推回 rate。","⑤ model（必填）：定義 prior 與 likelihood，讓 Stan 形成 joint log density。","⑥ generated quantities（選填）：在抽樣後產生新預測、衍生統計量等，便於 posterior predictive analysis。","教材把 data、parameters、model 列為必要的三個區塊；其他三個視需求選用。教材偏好把程式存成獨立 .stan 檔。"],"caseText":"醫療險 claim frequency：data 放每群 exposure 與 claim counts；parameters 放每群頻率；model 放 Gamma prior 和 Poisson likelihood；generated quantities 可產生未來理賠次數的 posterior predictive draws。","pitfall":"parameters 不是預測變數 X；X 是已知資料，真正進 parameters 的是未知係數、rate、standard deviation 等待估值。","exam":"看到 Stan 程式先找 data／parameters／model 三塊，就能快速判斷估計的是什麼、先驗怎麼給、資料如何進入 likelihood。","check":"自我檢查：如果 N=500、y 是 500 筆觀測，而 λ 未知，應分別放哪裡？N、y 放 data；λ 放 parameters。"},
"s1515":{"idea":"MCMC 模型配適前，要先決定 Prior、Warmup 和 Diagnostics；這三件事共同決定結果能不能信。","steps":["Prior：每個未知參數需要適當 prior。它可能很有資訊，也可能較弱，但「較弱」不代表對 posterior 絕對沒有影響。","Burn-in / warmup：Markov chain 從初始值開始，前段可能尚未進入穩定的 posterior 探索狀態，教材建議捨棄這些初期 draws。","Diagnostics：模型可能沒有報錯，卻仍有混合不佳、未收斂或被 prior 限制等問題。因此教材要求看多條 chains、trace plots、R-hat 與 ESS。","這三件事是不同層次：prior 是模型假設；warmup 是抽樣流程；diagnostics 是事後確認是否能用抽樣結果推論。"],"caseText":"估計新商品 lapse rate，如果強 prior 假設只有 1%–2%，但實際資料反映 5% 以上，先驗設計可能扭曲結果；增加抽樣次數不能修復錯誤的模型假設。","pitfall":"即使把迭代數提高十倍，也無法保證設定錯誤的 prior 或 likelihood 被『跑對』。","exam":"回答 Bayesian model 是否可靠時，不只報 posterior mean；要說明 prior 的依據、warmup 和抽樣診斷。","check":"思考：R-hat 很好但 prior 把真實值完全排除，是否代表估計正確？不是。"},
"s1516":{"idea":"Warmup 的目的不是美化圖表，而是避免鏈的起點污染最終的 posterior 推論。","steps":["Metropolis–Hastings 和相關 MCMC 方法會根據前一步提出下一步。若起始值遠離 posterior 高密度區，前幾次抽樣可能只是慢慢接近合理範圍。","這些初始 draws 不能代表已穩定探索的 posterior，教材稱為 burn-in。保留它們可能讓 posterior mean 與 interval 受到起點影響。","§1.5.16 說明所示 Stan 預設丟棄前半數 draws，可用 warmup 參數調整；此處應理解為教材當時採用的設定。","Warmup 完成之後仍需看 multiple chains、trace plot 等；不能只依『已捨棄前半數』就宣稱收斂。"],"caseText":"假設某通路的 lapse rate λ 實際應在約 4% 附近，某條鏈卻從 40% 開始。剛開始的 draws 可能一連串向 4% 移動；若納入估計，後驗平均可能被拉高。","pitfall":"Warmup 不等同於任意刪除不喜歡的結果；應依抽樣方法的設定與 diagnostics 決定是否可信，不應事後挑數字。","exam":"能解釋為何排除 initial draws，以及『增加迭代數』和『檢查是否收斂』是兩回事。","check":"自我檢查：四條 chains 起點不同但最後仍分成兩群，光丟棄前半段能保證有效嗎？不能。"},
"s1517":{"idea":"這一節真正要練的是閱讀 MCMC 健康檢查報告，而不是背一個 R-hat 數字。","steps":["Chains：使用不同起點跑多條鏈。若都探索到相似的 posterior 區域，是正面訊號；但仍不是充分證明。","Trace plot：橫軸是 iteration、縱軸是參數 draw。理想上上下穿梭、沒有明顯長期趨勢或停在某個區間；若不同鏈分開或慢慢漂移，應懷疑沒有充分探索。","R-hat：衡量鏈間、鏈內變異是否一致；理想值接近 1。§1.5.17 引述當時 Stan 建議不要使用 R-hat > 1.05 的樣本結果；這是教材給的判讀標準。","Effective Sample Size（ESS）：高度自相關的 draws 資訊量比同數量獨立樣本少。教材例子：1,000 個 draws 可能只相當於 500 個獨立樣本。","Bulk_ESS 著重分布主要區域，Tail_ESS 著重尾端。估計平均與觀察極端分位數時，關注的抽樣品質也可能不同。","最後同時看：鏈是否一致、trace 是否合理、R-hat 是否接近 1、ESS 是否足夠。單一數字正常不代表模型有效。"],"caseText":"若公司要為壽險利潤率建立 Bayesian credible interval，尾部虧損風險特別重要；Tail_ESS 低會讓極端分位數不穩，不能只看平均估計漂亮。","pitfall":"R-hat=1 不表示 prior 合理、資料沒有 bias、模型一定預測準確。ESS 也不是保單數或保險事故件數。","exam":"能把「convergence（收斂）」、「mixing（探索效率）」和「predictive validity（預測有效性）」分開描述。","check":"問：4,000 draws、ESS=300，比 2,000 draws、ESS=1,200 更有資訊嗎？未必；就估計精度而言，後者通常更有效率。"},
"s1518":{"idea":"現在把前面計算過的 Poisson–Gamma 模型，真正翻譯成 Stan 程式。","formula":"yᵢ | λ ~ Poisson(λ)；λ ~ Gamma(shape=2, rate=0.25)；E[λ]=2/0.25=8，Var(λ)=2/0.25²=32","steps":["data：N 代表觀測數；y[N] 裝 N 筆非負整數計數，對應 Poisson 的觀測值。","parameters：real<lower=0> lambda 宣告 λ 必須大於或等於 0，因 Poisson mean 不可能是負數。","model 裡的 target += gamma_lpdf(lambda | 2,0.25) 是先驗；target += poisson_lpmf(y | lambda) 是 likelihood。兩者加到 log density，等於機率尺度上的 prior × likelihood。","關鍵參數化：Stan 的 Gamma 第二個參數是 rate=0.25；而前面 SOA 範例採 shape=2、scale=4。兩者是同一個 prior，因為 scale=1/rate。","將先驗與 likelihood 相乘後，這一題有解析解：posterior shape=2+Σyᵢ、posterior rate=0.25+N。Stan 可用抽樣驗證此解析結果。"],"caseText":"壽險精算建模經常要跨工具移轉參數。若既有 Loss Models 文件寫 Gamma(shape=2, scale=4)，轉寫到 Stan 必須填 gamma_lpdf(lambda | 2,0.25)，而不是把 4 原封不動搬過去。","pitfall":"這是整章最容易出錯的地方：相同的 Gamma(2,4) 寫法在不同軟體可能代表不同分布。使用前一定要查參數化。","exam":"會指出 Stan 程式的 data、parameter、prior、likelihood，並正確計算 prior mean=8、variance=32。","check":"快問快答：如果 Stan 寫 gamma_lpdf(lambda | 2,4)，prior mean 會是 8 嗎？不會，是 2/4=0.5。"},
"s1519":{"idea":"這段 R 程式不是在讀真實保險資料，而是在用 500 筆 Poisson(3) 模擬值驗證 Bayesian estimation。","steps":["library(rstan)：載入 RStan。options(mc.cores=parallel::detectCores())：允許使用多核心。","rstan_options(auto_write=TRUE)：儲存可重複利用的編譯成果，避免每次重新編譯。","set.seed(1234) 配合 Pois_data <- rpois(500,3)：固定亂數種子，生成 500 筆母數為 3 的 Poisson 計數。","stan(file='poisson_gamma.stan', data=list(y=Pois_data,N=length(Pois_data)),iter=10000)：把 500 筆資料送進 Stan 模型，指定每條鏈的迭代設定。","traceplot(fit)：檢查 chains 是否穩定探索；print(fit)：取得 posterior mean、sd、quantiles、n_eff 和 Rhat。","因為 Poisson–Gamma 共軛模型有解析解，這是檢查 Stan 抽樣結果是否接近理論值的好練習。"],"caseText":"你若用 Python 產生 500 筆 Poisson(3) claim counts，再送進 Stan，統計目標仍是估計 λ。模擬值只供練習，不能把 λ≈3 當作實際保險商品的理賠率。","pitfall":"set.seed 讓模擬結果可重現，但不保證不同作業系統、套件版本或 MCMC 設定產生完全相同的 posterior draws；教材也提醒不同環境可能有些微差異。","exam":"讀程式先回答四件事：資料從哪裡來、模型檔在哪裡、估計的參數是什麼、診斷輸出怎麼讀。","check":"若 Pois_data 有 500 筆，傳給 Stan 的 N 是多少？500；Poisson 真實生成母數是多少？3。"},
"s1520":{"idea":"第一次真正讀 Stan 輸出：這組模型的 posterior mean 約 3.03，chains 也沒有顯示明顯收斂異常。","formula":"λ：mean=3.03；sd=0.08；2.5%=2.88；97.5%=3.19；n_eff=7320；Rhat=1","steps":["教材觀察 trace plot：四條鏈在大致相同區域內穿梭，沒有明顯的自相關型態。這是正面訊號，仍不等於所有模型假設都正確。","lambda 這一個 row 才是本題關心的未知 Poisson mean。mean=3.03 是 posterior mean，不是單一模擬觀測值。","sd=0.08 反映後驗參數分布的散布；2.5%=2.88 與 97.5%=3.19 可組成約 95% equal-tailed credible interval。","n_eff=7320 是這次 MCMC draws 的有效樣本數估計，不是 500 筆原始資料的樣本數。Rhat=1 則表示鏈間一致性指標理想。","lp__ 是 Stan 輸出的 log density 相關量；SOA 在本節明確表示不深入解讀它。","最重要的統計直覺：prior mean=8，但 500 筆資料來自 Poisson(3)，posterior mean 已靠近 3，因資料對 posterior 的影響遠大於此 prior。"],"caseText":"如果你對董事會報告理賠次數 λ，不能只說『估計值 3.03』；還要清楚說明這是模擬資料下的 posterior mean，區間約 2.88–3.19，並指出診斷結果。","pitfall":"不要混淆：500 是實際模擬觀測的筆數；7320 是 MCMC 有效樣本數；10,000 是 Stan 迭代設定。這三個數字意義完全不同。","exam":"能看懂每一欄，尤其區分 posterior sd、95% credible interval、effective sample size 與 R-hat。","check":"看結果：mean 3.03，95% interval 2.88–3.19，能說『真實 λ 必定在這範圍內』嗎？不能；這是基於模型、prior 與資料的後驗機率陳述。"},
"s1521":{"idea":"Poisson–Gamma 有解析後驗分布，因此可讓 Stan 的 MCMC 結果與數學推導互相驗證。","formula":"λ | y ~ Gamma(shape=2+Σyᵢ, rate=0.25+500)；E[λ|y]=(2+Σyᵢ)/(500.25) ≈ 3.03","steps":["前面已經推導：Poisson likelihood × Gamma prior 仍是 Gamma posterior，這叫 conjugate prior。","本例有 N=500，posterior rate 固定為 500.25；shape 則用實際模擬總次數 Σyᵢ 加上 2。","將實際生成的 500 個 y 值代進公式，直接算出的 posterior mean 與 Stan 的 3.03（四捨五入後）一致。","教材 CHUNK 2 進一步比較 posterior draws 的分布與 exact posterior distribution，指出兩者非常接近。","這是 validation 的好習慣：有解析解就用解析解 cross-check 數值方法；沒有解析解時，至少保留模擬、敏感度分析、diagnostics 等交叉驗證。"],"caseText":"精算工作中若有簡單 benchmark model，就應先驗證新方法是否重現已知結果，再將它擴充到多通路、多變數的 Bayesian GLMM。","pitfall":"『MCMC mean 等於解析 posterior mean』只能支持這個例子的抽樣結果，不表示 Stan 對任何模型都自動可靠。","exam":"能從資料分布和 prior 出發寫出 posterior，並解釋為何 500 筆資料會將 prior mean 8 拉到 posterior mean 約 3.03。","check":"如果 N 增大、樣本平均仍約 3，且 prior 不變，posterior mean 應更靠近 3 還是 8？更靠近 3。"},
"s1522":{"idea":"Prior sensitivity 是 Bayesian 模型的核心品質檢查：如果 prior 一開始排除真實可能值，MCMC 抽得再好也救不了。","steps":["SOA 設計了一個刻意不合理的 prior：λ ~ Uniform(1,2)。但模擬資料來自 Poisson(3)，真實 λ=3 不在 prior 的支撐範圍內。","Bayes 公式 posterior ∝ likelihood × prior。因 Uniform(1,2) 在 λ>2 的密度為 0，posterior 在 λ>2 也永遠是 0；即使資料極度支持 λ≈3，也不能跨過 2。","教材指出此模型仍可能運作、甚至收斂；但 trace plot 顯示 draws 不斷碰到 λ=2 的上界，這是模型假設出錯的重要訊號。","將 prior 改為 Uniform(0,100)，容許 λ=3，便可恢復教材預期的結果。這說明 prior domain 比『抽更多次』更根本。","實務做 sensitivity analysis：選擇幾個有業務理由的 priors，重新配適，檢查 posterior point estimate、credible interval、決策結論是否顯著變動；並揭露假設。","在複雜模型中，Stan 不必由你手工積分 posterior，但你仍必須親自負責 prior、likelihood、診斷與合理性。"],"caseText":"假設新型醫療險的 claim frequency 可能介於每人年 0.1–0.5，但你錯把 prior 限成 0–0.2。即使實際資料強烈支持 0.4，模型也不可能估出 0.4。風險定價決策因此可能錯誤。","pitfall":"最重要陷阱：收斂（convergence）表示抽樣可能忠實反映你指定的 posterior；它不保證你指定的 posterior 合乎現實。尤其不能靠增加 iterations 修復不合理的 prior support。","exam":"能解釋為何 Uniform(1,2) 不可能得到 λ≈3，並建議以更合理的 prior、prior sensitivity 和 posterior predictive checks 驗證模型。","check":"若先驗限制 λ≤2，後驗有任何機會分配機率給 λ=3 嗎？不可能。這和資料筆數或 R-hat 無關。"}
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
  notes.append(elem("div","teacher-guide-id",Number(lesson.dataset.num.split(".").pop())<=11?"GPT 精讀講義 · 第一批 §1.5.1–1.5.11":"GPT 精讀講義 · 第二批 §1.5.12–1.5.22"));
  notes.append(elem("h3","teacher-big-idea",guide.idea));
  if(guide.formula)notes.append(elem("div","teacher-formula",guide.formula));
  addText(notes,"一步一步理解",guide.steps);
  addText(notes,"精算案例",guide.caseText,"teacher-chunk teacher-case");
  addText(notes,"最容易搞錯",guide.pitfall,"teacher-chunk teacher-trap");
  addText(notes,"ATPA 怎麼掌握",guide.exam,"teacher-chunk teacher-exam");
  if(guide.check){const d=elem("details","teacher-self-check");d.append(elem("summary","","自己驗收"));d.append(elem("p","teacher-copy",guide.check));notes.append(d);}
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