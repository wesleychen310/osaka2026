# SOA ATPA Module 3 — Advanced Models｜私人雙語教科書

> 最新交接：**2026-10-14**。已完成 §1.1 Model Accuracy（10 節）與 §1.2 Additive Models（21 節），累計 **31／211 小節（14.7%）**。下次接續 **§1.3 Linear Mixed Models（29 小節，p.41–71）**。較早進度數字是歷史紀錄。

## 使用者正式入口

- **Module 3 私人閱讀**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module3/
- **第一批 §1.1.1**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module3/#s111
- **流程圖 §1.1.6**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module3/#s116
- **§1.1.10 Bias–Variance**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module3/#s1110
- 學習首頁：https://wesleychen310.github.io/osaka2026/learning/

## 官方教材定位與頁碼

唯一權威來源為使用者提供的 `ATPA_Official_Modules_1-4_Combined(1).pdf`。**Module 3** 共 242 頁，標示 `Created: Mon Apr 18, 2022`；位於合併 PDF **1-based 第 333–574 頁**（0-based index 332–573）。Module 3 的印刷頁 p.`N` 對應合併 PDF **0-based index = 331+N**、**1-based 頁碼 = 332+N**。

### 211 小節完整章節地圖

| 章節 | 原書名稱 | 小節數 | 頁碼 | 狀態 |
| --- | --- | ---: | --- | --- |
| 1.1 | Model Accuracy | 10 | 7–18 | **全部 10 節已製作** |
| 1.2 | Additive Models | 21 | 19–40 | **全部 21 節已製作** |
| 1.3 | Linear Mixed Models | 29 | 41–71 | 待製作 |
| 1.4 | Neural Networks | 48 | 72–126 | 待製作 |
| 1.5 | Bayesian Models and Analysis | 44 | 127–176 | 待製作 |
| 1.6 | Stacking | 9 | 177–185 | 待製作 |
| 1.7 | Further Modeling Topics | 50 | 186–242 | 待製作 |
| **合計** | | **211** | **242 頁** | **31／211** |

網站左欄展示七個正式章節；第 1.1 可點選已完成的 10 個小節，其餘六章標示「待製作」與精確小節數，不導向未存在的教材錨點。

## §1.1 第一批正式來源與權限

- **檔名**：`ATPA_Module_3_1.1.1-1.1.10_私人雙語教材.html`
- **私人 Google Drive File ID**：`1BIrPuTrxQ7xnxkZQbXoBUwjxKOIkYREb`
- **資料夾**：`1uLenu319fQEQwltPasYv1HH_EL6Swk4q`（所有 Module 1／2 的私人雙語教材同層）。
- **MIME**：`text/html`；**665,987 bytes**；**SHA256：`95e16bec54e872b978dafe9d5115a2382e75daab4ec75423f83bef030d2eba57`**。
- **已核對存取權**：Google Drive metadata 返回 2 組 `user` 權限（owner + 具名 reader），無 `anyone` 或 `domain`。GitHub 僅保存公開 HTML shell、JS/CSS、來源識別碼與 SOP，**不得上傳官方教材原文、翻譯或原圖至公開 GitHub**。
- **更新備份**：首次上傳後發現 §1.1.1 學習目標表的中文標題對位需要修正，**已先建立備份，再更新原檔且保留 File ID**。備份 File ID `1LcpVq21ldlG-99cnxkh6YuzJTUi8z-S0`，位於 `_backup` 資料夾 `1IGm40lPbbVwADj4ffg82gfVdx281YXvv`。最新正本為 665,987 bytes，舊備份為 652,549 bytes。

## §1.1 的製作與實際驗收數字

- **10／10 節**，錨點連續 `s111`–`s1110`，編號 `1.1.1`–`1.1.10`。
- **38 組** `.pair`：各組皆有原 PDF 英文來源文字與相對應繁體中文翻譯／詳解。
- **10 張**獨立精算教師解說卡，包含模型限制、考試易錯處、壽險定價／lapse／核保的專業應用。
- **38 個** Reusable English（每節 3–4 個），包含 actuarial memo／PA／ATPA 可用語塊。
- **5 張原 SOA PDF 擷取圖**：原書印刷 p.7（Module Objectives）、p.9（Section Objective）、**p.13（Model Workflow 原始流程圖）**、p.14（Model Safety 原面板）、p.17（In-sample／Out-of-sample Validation 原始表格）。
- 本批來源原書 p.7–18，**p.8 與 p.15 為空白頁**，已在相應小節註記。所有來源英文字串取自原 PDF 可擷取文字層，38 個來源區塊各自核對為原頁文字序列，不憑空添加官方英文。來源圖片由 PyMuPDF 直接裁切／內嵌原頁；補充公式／教師數值例子獨立標示。
- §1.1.8 **Accuracy / Sensitivity / Specificity** 的公式忠於 p.16；另加 1000 保單 TP=32、TN=900、FP=60、FN=8 例子，清楚標示為教師自編。
- §1.1.10 官方原文對 **Bias** 的定義為平均預測與實際目標值絕對差、Variance 為預測變化，另設 **MSE = Bias² + Variance + Irreducible Error** 為教師延伸，不能混成原書圖示。
- §1.1.3 對 `statsmodels`、`pygam`、`mgcv` 的評述**明確限於 2022 年 3 月**；2026 年版本功能需要另行查證，不能直接照搬作現況。

## GitHub 公開閱讀器與 UX

- `learning/atpa-modules/module3/index.html` — 新網址、Google OAuth 登入、四模式按鈕、章節目錄、內容容器。
- `learning/atpa-modules/module3/module3.js` — 保留 Module 1／2 經過驗證的 OAuth 載入與 DOM 清理邏輯，`SOURCE["3:1"]` 指向私有 `1BIrPuTrxQ7xnxkZQbXoBUwjxKOIkYREb`。嚴格檢查每批 `EXPECTED_COUNTS=[10]`、`FIRST_IDS=["s111"]`、**10 個 unique IDs**。未來新增批次依序加來源，更新三項核對資訊。
- `learning/atpa-modules/module3/module3.css` — 原書圖片、雙語長段落、公式與待製作章節標籤。
- **共用** `learning/atpa-modules/reader.css?v=20261013-normal-font1`，手機「上中文下英文」中英文正文均 16px，iPhone 左右模式兩欄較小字級。
- **四個完整頁面切換模式，順序不可更動**：①全英文 `en`、②全中文 `zh`、③上中文下英文 `vertical`（預設）、④左英文右中文 `parallel`；使用者選擇保存於既有 `atpa-modules-reading-mode-v3`。左側目錄、手機章節抽屜與 OAuth 都維持原先網站操作體驗。
- 私有來源 HTML 使用 `<main id="atpa-source">` 和 `<section class="lesson" ...>`；段落 `.pair>.original/.translation`，教師 `details.tutor`，英文語塊 `details.phrases`。所有新的 Module 3 分批 HTML **必須遵守此結構**。

## 需誠實列出的驗收限制

1. **靜態與來源驗證已執行**：官方 PDF 原文／原圖、10 節結構、來源 Google Drive 上傳／讀回、owner + reader 權限、GitHub 程式語法與連結。
2. **動態尚待真正使用者登入後驗收**：GitHub Pages 部署、Google OAuth 真正啟動並讀取 652 KB 私有 HTML、iPhone/iPad/Mac 四模式切換、圖片呈現、使用者裝置的閱讀效能。不要以靜態檢查代替實機證據。
3. 繁中內容逐節對應原文主段落，**尚未有人工作為第三方逐字逐句翻譯複校**。未製作的 §1.2–§1.7 僅呈現章節狀態。
4. Module 3 後續的 Rmd／CSV／Stan 等外部附件，應依原 PDF 的文字與連結另外查證、取得及執行。任何新程式結果都必須區分為原書數據或獨立教學示例。

## 下一批指令（§1.2）

1. 從官方 Module 3 **§1.2.1 Additive Models，p.19（合併 PDF 第 351 頁，0-based index 350）**開始，按原書編號完成 §1.2.1–§1.2.21；總節數應由 10 增為 **31／211**。
2. 保留 GAM、Spline、smoothing、Model fitting 的所有公式、可執行 R 程式和對應圖表；須把原書報表及外部 Rmd 擷取到受限 Drive，而非公開 GitHub。
3. 中文教授須逐段對位，保留原英文，解釋公式用途、成立條件、視覺座標／曲線、模型診斷及 PA／ATPA 作答。每節增加 3–5 組 Reusable English 及壽險精算實務例子。
4. 依來源尺寸可在 **同一章中拆多份私有 HTML**，但網站永遠連續顯示；將新 Drive 檔 ID 加入 `module3.js SOURCE`、擴充 `EXPECTED_COUNTS`、`FIRST_IDS` 與已完成章節子目錄、總量 guard。保持四模式與私人權限。
5. 每批完成請核對 GitHub 靜態 JS、來源 HTML 結構與 Drive metadata，更新**本 README**、`learning/atpa-modules/README.md`、`learning/README.md` 及根 `README.md`；保留可交接的來源頁碼、Drive File ID、GitHub commit 及未驗收項目。修改任何現有 Drive HTML 前先建立同層 `_backup` 時間戳備份，保留原始 ID 和位置。

## 2026-10-14 原書圖片裁切品質修正（最新來源版本）

- 第二次來源檢查發現 p.7 與 p.14 的官方 Component Table 截圖最後一行被裁掉（來源文字層已完整保留）；p.17 原面板上方標籤也太貼邊。已改以更寬的 PyMuPDF Clip 重新擷取，確保 **完整表格列、Footer 與 Component Table 標題**出現在私人教材圖片中。
- 更新前先備份 Drive 原檔至 `_backup`：備份 ID **`1sDt59rh11_FAw6ovKiNRktBz-silPWfN`**，備份名 `ATPA_Module_3_1.1.1-1.1.10_私人雙語教材__backup_20261014_原圖擴充前.html`。原檔保持同一 ID `1BIrPuTrxQ7xnxkZQbXoBUwjxKOIkYREb`、原檔名、原目錄與權限，最新版本大小 **665,987 bytes**，SHA256 `95e16bec54e872b978dafe9d5115a2382e75daab4ec75423f83bef030d2eba57`。
- 上述修正僅擴展三張官方圖片的裁切範圍，10 小節／38 組英中對照／38 個實務語塊與原文順序均未變動。已在本地打開 p.7、p.13、p.14 的輸出圖目視檢查；用戶 Google OAuth 實機端尚未驗收。

## 2026-10-14 最新進度｜§1.2 Additive Models 全 21 節已完成

**本節為最新權威交接。** 已完成 **31／211（14.7%）**，可於同一網址連續閱讀 §1.1–§1.2。下一批從 **§1.3.1 Linear Mixed Models** 開始。

### 本批正式來源與內容品質

- **私人來源檔**：`ATPA_Module_3_1.2.1-1.2.21_私人雙語教材.html`。Google Drive fileId **`1tNSYwzEgD73jKz56KL5P3nlBO7xIucsP`**；存於 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，`text/html`，**2,618,055 bytes**，SHA256 **`57045cb5c8a080681505669681a4b64a5d4e6c1d15cc806185f8cdea8f9a8822`**。
- **受限權限**：Google Drive metadata 與實際來源讀回已確認 owner + 一位具名 reader，均為 `user`；未設定 `anyone`／`domain`。所有 SOA 原文、翻譯與內嵌原圖只在此 Drive 私人 HTML，公開 GitHub 僅保存讀取介面與 fileId。
- **範圍**：原書 Module 3 p.19–40（合併 PDF 0-based index 350–371；1-based 第 351–372 頁）。來源 1.2.18 Exercise Data 跨 **p.36–37**，完整容納第二頁的變數字典；後續 §1.2.19 從 p.38 起。
- **結構驗收**：21／21 `section.lesson`，連續錨點 `s121`–`s1221`；**94 組** `.pair.pdf-source-pair`、每對包含來源英文 `.original` 與繁體中文 `.translation`；**21 張 tutor 精算教師卡、84 個 Reusable English 語塊（每節 4 個）**；**17 張直接由 SOA 官方 PDF 擷取的原頁圖**（p.19／21／22／23／24／25／26／27／28／30／31／32／36／37／38／39／40）。
- **官方文字核對**：原書 p.19–40 以 PyMuPDF `get_text(sort=True)` 萃取，移除重複頁眉和印刷頁碼後拆出 94 個原文區塊，並與私有 HTML 中 94 個 `.original` **逐區塊完全一致**。官版 Component Tables、CHUNK 1–14 的參照、R 程式 `lm(Traffic ~ Hour)`、`gam(Traffic ~ s(Hour))`、`k`／`gam.check()`／`select=TRUE`、全部題幹、資料字典及兩組官方 MSE 表格都保留。
- **原始圖形**：交通雙峰散點圖、直線模型、多項式階數 1／2／3／5／8／10、對數轉換、GAM 擬合、三條 smooth 的圖、原書 GAM summary、p.36–37 變數表、p.39–40 飯店訂房官方答案均存於 17 張原圖。圖為原 PDF 頁面裁切，並非重繪。
- **需要特別註記的來源損壞**：p.26 三個公式在原 PDF 實際呈現紅色破圖 icon，`get_text()` 僅擷取到殘留句點。原頁圖已保留這項事實；另以「教師依上下文重建」獨立說明 `y=α+β₁x+ε`、`y=α+f(x)+ε`、`f(x)=ΣγᵢBᵢ(x)`，**不能冒稱這些是官方公式影像或完成原公式忠實復刻**。p.31 的加法 `ŷ=α+Σfⱼ(xⱼ)` 公式則在 PDF 中清楚可見，已直接保留原圖。
- **官方題目與答案**：Exercise 3.2.1 p.36–40 八大題目已完整收錄；p.39 第一組 MSE **2162.86／1814.57／2131.98／1798.51**；p.40 第二組 **1814.57／1798.51／1757.09／1747.82**。包含官方 negative ADR 討論及用 `1+adr` 建 Gamma GLM 的決定。p.40 官方文字出現 `complimentary room`，但題幹四個 predictors 未直接列該欄；已在繁中教師說明中特別註記，待外部 Rmd 核對，不默默修稿。
- **來源版本與外部附件**：原教材標記為 2022-04-18。外部 `atpa_3_2_r.rmd` 與 `hotel_bookings_small.csv` 以原書來源連結保留；PDF 也提到 `traffic_data.csv`。本批只收錄主 PDF 可核對內容，**尚未下載並實際執行外部 CSV／Rmd**，因此不得宣稱 CHUNK 1–14 的 R 程式已跑完、輸出由本次重算。原書 2022 年的套件敘述不應直接冒充 2026 年最新軟體現況。
- **翻譯範圍與界線**：94 段有中文一對一對照，教材重點以中文詳解呈現，涵蓋公式、統計直覺與精算實務。原始表格格線與精確數字另以原書截圖保存；中文尚未經第二人逐句人工審稿，不得虛稱完全人工複校。

### 本批 GitHub 網站更新

- `learning/atpa-modules/module3/module3.js` 新增 `SOURCE["3:2"]`，fileId 如上，`EXPECTED_COUNTS=[10,21]`、`FIRST_IDS=["s111","s121"]`、總量為 **31 unique anchors**，1.2 章目錄由待製作改為可點選 21 節。
- `learning/atpa-modules/module3/index.html` 修正先前從 Module 2 模板殘留的「Working with Data」為「Advanced Models」，網站標示 **31／211**，JS/CSS 快取參數 `20261014-m3-sec12`。
- `learning/index.html` 的 Module 3 卡片同步更新為 31 節；Module 1／2 私人來源與網址均未變動。
- **保留四模式**：①全英文，②全中文，③上中文下英文（預設、正文 16px），④左英文右中文；左側目錄仍列七章及未完成小節數。新增 2.6 MB 私人來源，正式效能需用使用者裝置測試。

### 驗收邊界與下一步

- **靜態檢查**：來源 HTML 21／21、英文 PDF text 94／94、原頁圖 17／17、tutor 21／21、英文語塊 84／84、Drive metadata，GitHub JS 語法及 SOURCE 計數已驗證。
- **端對端未驗收**：使用者 Google OAuth、GitHub Pages CDN 實際發布延遲、iPhone/iPad/Mac 四模式、2.6 MB 原圖載入速度和長頁捲動；Rmd、CSV 與官方模型運算結果的可執行驗證。
- **下一批**：§1.3 **Linear Mixed Models** 共 29 小節，官方印刷 p.41–71，若全部完成則累計應為 **60／211**。先核對原書公式／圖表／R code，再產製逐段英中對照與精算教學；優先說明 fixed effects／random effects、random intercept／slope、credibility、Bühlmann–Straub 及 group-level variation。
- **寫入紀律**：新教材繼續存相同受限 Google Drive 資料夾，GitHub 只存 reader 與 fileId。修改任何既存 Drive 原稿前先備份到 `_backup`；每批完成同步更新本 README、上層 `learning/atpa-modules/README.md`、`learning/README.md` 及根 `README.md`。
