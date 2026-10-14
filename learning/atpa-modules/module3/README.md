# SOA ATPA Module 3 — Advanced Models｜私人雙語教科書

> 最新交接：**2026-10-14**。目前完成 **§1.1 Model Accuracy 全 10／10 小節**；Module 3 全書共 **211 個編號小節**，完成率 4.7%。下一批 **§1.2 Additive Models（21 小節，p.19–40）**。歷史摘要或其他模組進度不得套用到本章。

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
| 1.2 | Additive Models | 21 | 19–40 | 待製作 |
| 1.3 | Linear Mixed Models | 29 | 41–71 | 待製作 |
| 1.4 | Neural Networks | 48 | 72–126 | 待製作 |
| 1.5 | Bayesian Models and Analysis | 44 | 127–176 | 待製作 |
| 1.6 | Stacking | 9 | 177–185 | 待製作 |
| 1.7 | Further Modeling Topics | 50 | 186–242 | 待製作 |
| **合計** | | **211** | **242 頁** | **10／211** |

網站左欄展示七個正式章節；第 1.1 可點選已完成的 10 個小節，其餘六章標示「待製作」與精確小節數，不導向未存在的教材錨點。

## §1.1 第一批正式來源與權限

- **檔名**：`ATPA_Module_3_1.1.1-1.1.10_私人雙語教材.html`
- **私人 Google Drive File ID**：`1BIrPuTrxQ7xnxkZQbXoBUwjxKOIkYREb`
- **資料夾**：`1uLenu319fQEQwltPasYv1HH_EL6Swk4q`（所有 Module 1／2 的私人雙語教材同層）。
- **MIME**：`text/html`；**652,483 bytes**；**SHA256：`06a8f9b47b466b1e00a89a29bf4f440240335fa24d58f516897b4d94d85de1fd`**。
- **已核對存取權**：Google Drive metadata 返回 2 組 `user` 權限（owner + 具名 reader），無 `anyone` 或 `domain`。GitHub 僅保存公開 HTML shell、JS/CSS、來源識別碼與 SOP，**不得上傳官方教材原文、翻譯或原圖至公開 GitHub**。
- **更新備份**：首次上傳後發現 §1.1.1 學習目標表的中文標題對位需要修正，**已先建立備份，再更新原檔且保留 File ID**。備份 File ID `1LcpVq21ldlG-99cnxkh6YuzJTUi8z-S0`，位於 `_backup` 資料夾 `1IGm40lPbbVwADj4ffg82gfVdx281YXvv`。最新正本為 652,483 bytes，舊備份為 652,549 bytes。

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
