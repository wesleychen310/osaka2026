/* ATPA prereq on-demand tutoring cards v1.  Additive only: no source text, tables,
   captions, equations, or bilingual pairs are replaced or removed. */
(() => {
  "use strict";

  /* Each note is editorial supplementary teaching, never an ISLP quotation.
     [subsection ID, paragraph anchor (regex string), title, concept, example, analogy] */
  const notes = [
    ["s431","probabilit|linear regression|p\\(X\\)","為什麼 Logistic Function 能拿來預測機率？",
      "訓練資料的 Y 是實際違約（1）或未違約（0）。模型先把 X 算成線性分數 z，再把 z 轉成 0～1 的預測機率 p̂。介於 0～1 只是必要條件；還要靠資料估計係數並驗證。",
      "欠款 1,000 元，模型算出 z＝−1；轉換後 p̂≈0.269，意思是模型預測違約機率約 26.9%，實際 Y 仍可能是 0 或 1。",
      "溫度計顯示溫度前要校準；Logistic Function 是「刻度轉換」，歷史資料才讓刻度有預測意義。"],
    ["s431","log.odds|logit|odds","Y、z、p̂ 到底誰是誰？",
      "Y 是資料中實際發生的 0／1；z＝β̂₀＋β̂₁X 是線性預測值，也是模型給出的 log-odds；p̂＝1／(1＋e⁻ᶻ) 才是預測機率。訓練時用 X、Y 估計係數；預測新客戶只需要 X 與已估係數。",
      "若 z＝0，p̂＝50%；若 z＝2，p̂≈88.1%。即使 p̂ 是 88.1%，事後觀察到的 Y 仍可能等於 0。",
      "Y 像考試的實際對錯；z 像答題能力分數；p̂ 像預估答對的機率。"],
    ["s432","maximum likelihood|likelihood function|coefficients","Fit Model 為何要用 Y？殘差去哪裡了？",
      "在簡單線性迴歸，我們調整係數讓殘差平方和小；在 Logistic Regression，我們利用 X 與實際 Y（0／1），選擇讓這批觀察結果的 likelihood 最大的係數。仍可看 Y－p̂ 這種殘差，但配適目標通常是最大概似。",
      "若某客戶 Y＝1，模型給 p̂＝0.9，這筆資料的 likelihood 貢獻是 0.9；若 Y＝0、p̂＝0.2，貢獻是 1－0.2＝0.8。各筆貢獻相乘，調係數讓乘積最大。",
      "線性迴歸比的是「距離錯多少」；Logistic Regression 比的是「模型有多相信實際發生的結果」。"],
    ["s432","standard errors|z-statistic|p-value","表 4.1 的 Coefficient、SE、z、p-value 怎麼看？",
      "Coefficient 是估出的係數；SE 表示係數估計的不確定程度；z-statistic 大致等於係數除以 SE；p-value 用來衡量資料對「係數為 0」假設的反對證據。顯著不等於效果一定很大。",
      "balance 係數為正，表示欠款增加與違約的 log-odds 增加有關；不能直接說違約率增加同樣的百分點。",
      "Coefficient 像方向與力度，SE 像測量的不確定性，p-value 像證據強度。"],
    ["s433","predict|threshold|probabilit","預測機率和預測類別有何不同？",
      "Logistic Model 的第一個輸出是 p̂（發生機率）。要把人分成 Yes／No，還得額外選擇 threshold（分類門檻）。門檻是商業決策的一部分，不是模型自行保證的真理。",
      "預測違約機率 30%，用 50% 門檻判 No；若為了早期提醒，把門檻降到 20%，同一客戶就會判 Yes。",
      "天氣預報先說降雨機率 30%；帶不帶傘，是你依成本選的決策門檻。"],
    ["s434","multiple|holding|predictors","Multiple Logistic Regression 增加什麼？",
      "把多個 Predictor 一起放進 z＝β₀＋β₁X₁＋β₂X₂＋…。解釋某個係數時，要說「其他變數固定下」，該變數增加一單位對 log-odds 的關係。",
      "同時考慮信用卡欠款與收入，才較容易區分「欠款高」和「收入較高」各自的關聯。",
      "同時旋轉幾個控制旋鈕；要看某個旋鈕的作用，就先固定其他旋鈕。"],
    ["s461","linear regression|bikeshare|least squares","為何這裡先用 Linear Regression？",
      "在 Bikeshare 例子中，Response 是租車數量。作者先用線性迴歸作比較基準；但計數資料非負且變異可能隨平均數改變，線性模型可能產生不合理的負數預測。",
      "某時段實際租車 10 次，線性模型預測 12 次還可以理解；若模型預測 −4 次，則不符合計數的意義。",
      "先拿普通直尺量弧線，看看哪裡不貼合，才知道為何需要其他工具。"],
    ["s462","poisson|log.link|count","Poisson Regression 為何適合計數？",
      "Poisson Regression 用來建模一定觀察期間內的事件次數。常見形式是 log(μ)＝β₀＋β₁X；因此 μ＝exp(…) 一定大於 0。",
      "用時段與天氣預測每小時租車次數，模型可能給出平均 15.2 次；實際觀察值仍會是 0、1、2 等整數。",
      "預測的是「平均每小時幾次」，像預估餐廳每小時平均來客數，而非每次必須剛好那個數字。"],
    ["s463","exponential family|link function|generalized linear","GLM 和一般 Linear Regression 的共同骨架",
      "GLM 包含 Response 的機率分布、線性預測值（β₀＋βX）與 Link Function。Linear Regression、Logistic Regression、Poisson Regression 都可放進這個框架，主要差在分布與 link。",
      "預測保費金額可考慮連續 Response；預測是否解約選二元 Response；預測每年理賠件數選計數 Response。",
      "同一台機器換三種不同規格的接頭，才能處理三種不同型態的輸出。"],
    ["s511","validation set|training|test","為什麼要把資料分成訓練與驗證？",
      "模型在訓練資料表現好，可能只是在記住資料。把一部分資料留到最後，才能估計它對未見資料的預測能力。",
      "有 1,000 張保單，可先拿 800 張訓練，200 張驗證；比例僅是示例，還要考量樣本量與時間順序。",
      "練習題拿來學習，模擬考才真正測你有沒有學會。"],
    ["s513","fold|cross.validation|k-fold","k-Fold Cross-Validation 在輪流做什麼？",
      "把訓練資料分成 k 份，輪流以其中一份驗證、其餘 k−1 份訓練，最後彙總 k 次的表現。它能減少單一切分造成的偶然性。",
      "5-fold：每次用約 80% 的資料配適、20% 評估，共輪流做五次。",
      "像五組同學輪流當考官，每組都得到一次被公平考核的機會。"],
    ["s515","classification|accuracy|error","分類模型應看哪一種誤差？",
      "分類問題不能只看預測對了幾筆；還要考慮類別不平衡、不同錯誤的成本，以及分類門檻。Accuracy、Sensitivity、Specificity、AUC 分別回答不同問題。",
      "如果 99% 保戶都不解約，全部預測「不解約」就有 99% accuracy，但完全抓不到解約者。",
      "安檢全放行看似很快，卻失去抓出高風險事件的目的。"],
    ["s611","best subset|subset selection|predictors","Best Subset Selection 在挑什麼？",
      "從所有候選 Predictor 組合中尋找適合的模型。變數愈多，通常能讓訓練資料配適更好，但未必更能預測新資料。",
      "候選變數是年齡、性別、保單年度，就要比較不同的變數組合；再依驗證或模型選擇準則決定。",
      "收行李時逐一比較所有可帶物品的組合，找出最適合旅程的一組。"],
    ["s612","forward|backward|stepwise","Stepwise Selection 和 Best Subset 有何不同？",
      "Stepwise 用逐步加變數或刪變數搜尋模型，計算量通常比窮舉所有組合小，但可能錯過整體最佳組合。",
      "Forward selection 從沒有 Predictor 開始，每次加入最有幫助的一個。",
      "找隊員時一個一個招募很有效率，但不保證最後是所有可能組合中的最佳團隊。"],
    ["s613","cross.validation|aic|bic|optimal model","變數愈多，模型一定愈好嗎？",
      "訓練誤差通常會隨模型複雜度降低，因此選模型要納入對複雜度的懲罰，或用交叉驗證評估未知資料的誤差。",
      "十個 Predictor 的訓練誤差較低，但五個 Predictor 在交叉驗證中表現更穩定，可能選五個。",
      "背下所有練習題答案能拿高分，但遇到新題不一定會作答。"],
    ["s621","ridge|l2|shrink","Ridge Regression 是怎麼防止 Overfitting？",
      "Ridge 在原本的誤差之外，加上係數平方和的懲罰，迫使迴歸係數縮小；一般不會把係數直接縮成 0。",
      "若十個高度相關的財務指標導致係數不穩定，Ridge 可以讓模型不那麼依賴極端係數。",
      "為每個迴歸係數加阻尼，避免控制旋鈕被轉得太劇烈。"],
    ["s622","lasso|l1|variable selection","Lasso 跟 Ridge 差在哪？",
      "Lasso 用係數絕對值總和做懲罰，能把部分係數壓到剛好 0，所以同時具備模型收縮與變數選擇效果。",
      "十個 Predictor 中，Lasso 可能讓三個係數成為 0，最後只保留七個非零係數。",
      "整理書包時，Ridge 讓每件物品變輕；Lasso 可能直接把部分物品拿掉。"],
    ["s623","lambda|cross.validation|tuning parameter","λ（Lambda）到底在控制什麼？",
      "λ 是懲罰強度；越大代表越重視係數收縮。通常用 Cross-Validation 比較候選 λ，選出較佳的預測效果，最後再用獨立測試資料驗收。",
      "λ 太小可能 overfit；λ 太大可能 underfit。找到中間適當的位置才重要。",
      "調音量：太小聽不清，太大會失真；要依實際聽感調整。"],
    ["s811","regression tree|splitting|rss","Regression Tree 怎麼預測一個數字？",
      "Regression Tree 逐次以 Predictor 切分資料，把特徵相似的觀察值分在同一葉節點；常用葉節點的平均 Response 作預測。",
      "預測理賠金額：先用車齡切，再依保額切；落在相同葉節點的保單得到同一平均預測值。",
      "像按條件把客戶分到不同櫃檯，每個櫃檯提供自己的平均估計。"],
    ["s812","classification tree|gini|entropy","Classification Tree 怎麼預測 0／1？",
      "Classification Tree 透過分割資料，讓每個節點的類別比例更一致。葉節點裡 Y＝1 的比例可當作該葉的預測機率，再依門檻判類別。",
      "某葉有 20 位客戶，其中 15 位違約，可估該葉違約機率為 75%（僅示例，實務仍須驗證）。",
      "先按症狀分診；每個分診區裡高風險病人的比例，幫助判斷新病人。"],
    ["s813","linear model|tree|boundary","Tree 和 Linear Model 的思考方式差在哪？",
      "Linear Model 以單一方程式描述 Predictor 與 Response 的關係；Tree 用一連串 if/else 規則，把資料切成不同區域。",
      "線性模型可能預測「年齡每增加一歲有固定係數」；Tree 可能先分成 40 歲以下與以上兩組。",
      "Linear Model 像斜坡；Tree 像依門檻分層的階梯。"],
    ["s814","interpret|unstable|advantages","為什麼單棵 Tree 好懂卻可能不穩？",
      "單棵樹可直接畫成分支規則、容易溝通，但資料略為改動時，最佳切分點可能改變，整棵樹也可能大幅不同。",
      "同一份解約資料增加少數新保單，就可能讓根節點從年齡改成保單年度。",
      "用少數關鍵規則管理很透明，但決策門檻可能因幾個案例而改變。"],
    ["s821","bagging|bootstrap|averaging","Bagging 為什麼能讓 Tree 更穩？",
      "Bagging 對訓練資料重複做 Bootstrap 抽樣，配適許多棵樹，再平均數值預測或整合分類預測。平均有助降低不穩定模型的變異。",
      "抽 100 組不同的訓練樣本，得到 100 棵 Tree；把它們的預測平均，而非只信單棵樹。",
      "問很多位各自看過不同題目的分析師，通常比只聽一人更穩。"],
    ["s822","random forest|predictor|bagging","Random Forest 比 Bagging 多做什麼？",
      "Random Forest 在每個分裂點只讓模型從隨機抽出的一部分 Predictor 中挑選。這能降低樹與樹之間的相關性，讓集成平均更有效。",
      "就算「年齡」很強，某些切分點仍暫時不讓它參選，其他變數也就有機會形成不同的樹。",
      "讓不同評審看不同線索，避免所有人都依賴同一個訊號。"],
    ["s823","boosting|learning rate|sequential","Boosting 和 Bagging 最重要的差別",
      "Bagging 主要平行訓練許多模型再整合；Boosting 依序訓練，每一步著重改善前一步仍沒解決的預測問題，並用 learning rate 控制修正幅度。",
      "第一棵樹預測解約還不夠好，第二棵協助修正剩餘誤差，後續樹繼續補強。",
      "Bagging 像多人獨立評分後取平均；Boosting 像老師逐題批改、持續修正錯誤。"]
  ];

  const escapeHtml = s => s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
  const findParagraphs = heading => {
    const found = [];
    let n = heading.nextElementSibling;
    while(n) {
      if (/^H[23]$/.test(n.tagName)) break;
      if (/^H[23]$/.test(n.tagName) && /^\s*\d+\.\d+/.test(n.textContent)) break;
      if (n.matches?.(".pair")) found.push(n);
      else if(n.querySelectorAll) found.push(...n.querySelectorAll(".pair"));
      n=n.nextElementSibling;
    }
    return found;
  };
  const createCard = (row, index) => {
    const [id,,title,concept,example,analogy] = row;
    const details = document.createElement("details");
    details.className = "atpa-tutor-note";
    details.id = "atpa-help-" + id + "-" + index;
    details.dataset.subsection = id;
    details.innerHTML =
      '<summary><span class="atpa-help-mark" aria-hidden="true">?</span><span class="atpa-help-label">再解說一次 <span class="atpa-help-title">｜'+escapeHtml(title)+'</span></span><span class="atpa-help-chevron" aria-hidden="true">⌄</span></summary>'+
      '<div class="atpa-help-body"><p class="atpa-help-intro">補充教學（基礎程度），不取代上方 ISLP 原文與翻譯。</p>'+
      '<div class="atpa-help-part"><h4>① 核心概念</h4><p>'+escapeHtml(concept)+'</p></div>'+
      '<div class="atpa-help-part"><h4>② 簡單例子</h4><p>'+escapeHtml(example)+'</p></div>'+
      '<div class="atpa-help-part"><h4>③ 類比記憶</h4><p>'+escapeHtml(analogy)+'</p></div></div>';
    return details;
  };

  function init() {
    let inserted = 0;
    const tails = new Map();
    const used = new Set();
    notes.forEach((row, i) => {
      const [id,anchor] = row;
      const h = document.getElementById(id);
      if (!h) return;
      const pairs = findParagraphs(h);
      const matcher = new RegExp(anchor,"i");
      const candidate = pairs.find(p=>!used.has(p)&&matcher.test(p.textContent||""))
        || pairs.find(p=>!used.has(p)) || pairs[0];
      const before = candidate || h;
      const tail = tails.get(before) || before;
      const card = createCard(row,i);
      tail.insertAdjacentElement("afterend",card);
      tails.set(before,card);
      if(candidate) used.add(candidate);
      inserted++;
    });
    document.documentElement.dataset.atpaTutorNotes = String(inserted);
  }
  if (document.readyState==="loading") document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();
