# Module 3 — Advanced Models

## 2026-10-30 第 12 批第一階段：§1.4.19–§1.4.22

- 自英文原稿 `1D11HFGZIPxHuSAq2qTgGEjiRwfC_1qIe`（p.90–94）重新翻譯 4 節、5 組段落；**累計 82/211 節、196 組，尚餘 129 節**。舊版仍不算重譯完成。
- 私人 Google Docs：§1.4.19–20 `1XesAYAuO-yBtqXUgpRcse2LPtzeoInFhe7EHGyVD28k`；§1.4.21 `1GWf8NlGal325UszuorsoELOBV_jgNRg_Dcr01UBcJSY`；§1.4.22 `1kM_NaEaKscnZOMLEpyf3vWKKahpHYWak4d0wxxP4U0w`。已逐份讀回確認 JSON、段落、父資料夾與私人權限；原英文與公式圖像未修改。
- GitHub loader、checkpoint、快取版本已更新；**下一節 §1.4.23**。§1.4.23–24 的英文已讀，但私人重譯尚未完成，不能計入進度。Google OAuth 真實登入、iPhone Safari 及 PDF 圖像逐字校對仍未驗證。

---


## 2026-10-30 第 11 批｜Neural Networks §1.4.13–§1.4.18

- **本批完整重譯 6 節、6 組原文對位段落，累計 78/211 節、191 組，剩餘 133 節。** 來源 Part 06 私人英文 HTML `1D11HFGZIPxHuSAq2qTgGEjiRwfC_1qIe`，原書 p.84–89；包含 Sigmoid、tanh、Softmax 啟動函數、損失函數及二元交叉熵，保留 p=0.7→0.357、p=0.9→0.105 的例子、圖像與原書公式位置。
- 兩份新版私人 Google Docs：§1.4.13–1.4.15 `1rjArmG3PNAIblp870M2Dh3jW76TQf2YK1c5sNEH2EKM`；§1.4.16–1.4.18 `1Nt82Kx__W8cVo9bG_KDHCBI9sP_dWRnyOZyEXmARLQ0`，均位於原教材父資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`。已用 Google Docs 讀回確認每份三個 section ID、JSON 可解析、每節對應英文恰好一段、原書圖像存在、具名授權無公眾分享。原稿或舊譯均未覆寫。
- 公開 repo 只保存私人檔案 ID 與段落數，更新 `module3-retranslation.js` 的 `part:5`、`progress.json` 與 `index.html` `natural11`。**唯一接續斷點：§1.4.19**，同一 Part 06 私人來源 p.90 起。舊版 211 節不能充當已重譯進度。
- GitHub CI/Pages 部署應以最新這次提交結果為準；本批沒有完成 Google OAuth／iPhone Safari 實際登入和原書圖片逐字校驗。

---


## 2026-10-30 第 10 批｜Neural Networks §1.4.1–§1.4.12

- **已從原英文重新翻譯 12 節、12 組對應段落，累計 72/211 節、185 組，尚餘 139 節。** 原始私人 HTML `1ivOBsbEcwDaWBeUZsQGJ8Pl0UYx-4nI5`，原書 p.72–83；12 張原頁圖片及英文、公式、既有 GPT 補充均保留不變。
- 新自然繁中私人 Google Docs：§1.4.1–1.4.6 `1yOT_n31PkpwhafeK8TyX2Jfhsg4ZgnZQbZmeEt7zwMw`；§1.4.7–1.4.12 `1Hd3U9p5C3jLPLVK8f0VG_TG006KpZDVE6YCdRS55z80`。因新建 Docs 介面一度被阻擋，改為複製既有私人譯稿成新檔再替換正文；**沒有更動既有譯稿與英文原稿**。兩個新檔均已逐份 Google Docs 讀回並通過 JSON 解析、6/6 章節對位、來源影像計數與具名 ACL 驗證。
- 本批涵蓋神經網路定義、普遍近似性、保險案例、招聘分類（250 筆、錯分 8 與 11 筆）、神經元、權重與偏差、隱藏層、建模流程、前饋式、RNN／CNN／GAN、啟動函數與 ReLU，保留註腳、作者與年份。
- 公開 `module3-retranslation.js` 只新增兩個私有來源 ID 與段落數（`part:4`）；`progress.json` 及 `index.html` 快取標籤更新至 `natural10`。**下一小節 §1.4.13**（Part 06 原始私檔 `1D11HFGZIPxHuSAq2qTgGEjiRwfC_1qIe`）。請勿將舊版中文計入自然重譯進度。
- 真實 Google OAuth / iPhone Safari 整頁切換與 PDF 原頁逐字視覺校對仍未執行，靜態測試不等於 E2E。

---


## 2026-10-30 第 9 批｜Part 04 全部重新翻譯完成：§1.3.21–§1.3.29

- **本批由英文原稿重新翻譯 9 個完整小節、13 組段落**（來源原書 p.63–71），包含重複測量／縱貫資料、GLMM、練習 3.3.2、Bühlmann–Straub 信賴度、三業務別共 9 筆曝險／損失資料、信賴度保費範例、Gamma/log 模型與練習 3.3.3。原表九筆數值逐項保留。
- 原稿 §1.3.27 文字同時出現「175.08 每曝險」及「50 曝險的信賴度保費 8,574.00」，乘積應為 **8,754.00**；翻譯忠實保留原稿 **8,574.00**，另標示獨立「譯註」說明算術疑義，不悄悄改原作數字。來源 PDF 圖像仍由私人 HTML 提供，未公開。
- 新譯稿 Google Doc ID `1GIXYTzMw9hokM1tehbtqCDVS3-lWG_fiuzr6O-gpNu8`，來源原 HTML ID `13HRUq3wFwJcUlhUtFNrVoI5FgtMqR8RC`；已完成 JSON 讀回 9/9 節、13/13 組，並置於既有私人資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，權限只有具名使用者，原教材未覆寫。
- **Part 04 §1.3.11–§1.3.29：19/19 節、31 組全文自然繁中重譯已完成；全章累計 60/211 節、173 組；尚餘 151 節。** 舊版 211/211 仍一律不視為合格新譯。唯一接續位置：**§1.4.1（Neural Networks；Part 05）**。
- 已更新 `module3-retranslation.js`、`progress.json`、`index.html`、README。請以 GitHub Action 自動測試通過確認版本索引，實際 OAuth、211 節登入後渲染與 iPhone Safari 操作仍須獨立 E2E 實測；未完成 PDF 圖像逐張核校。

---


## 2026-10-30 第 8 批｜§1.3.16–§1.3.20 已由英文重新翻譯

- 第 8 批處理 Part 04 原始教材 p.58–62，完整小節 **5 節、8 組**（s1316:2, s1317:1, s1318:2, s1319:2, s1320:1）。主題：隨機斜率模型、固定效果及兩個隨機效果變異數 21.03 與 0.30、Exercise 3.3.1／解答、重複測量與縱貫資料 12 筆病患資料。
- 直接從英文原稿重譯，自然臺灣繁體中文，不照舊版過度簡化的摘要。保留原書公式所在原圖；對 §1.3.19 來源出現的「Exercise 3.3.2 Solution」標題按原稿註記，不擅自訂正。12 筆 Patient／Time／Dosage／Response 資料全數核對。
- 新譯稿私人 Google Doc `1OMpfjX9SFWZVwH1U0HBTnghD-SYGZExAVbJYIpMP4wM`，父資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，原始 Part 04 HTML `13HRUq3wFwJcUlhUtFNrVoI5FgtMqR8RC` 未修改；新檔 JSON 讀回驗證 5/5 節、8/8 組，原資料夾具名權限沿用。
- **本次後新版翻譯進度 51/211 節、160 組段落，尚餘 160 節**；Part 04 累計 10/19 節。下一節 **§1.3.21**。此數字是新譯全文的段落對位數，不代表 PDF 公式視覺逐張驗證或 iPhone Safari OAuth E2E 已完成。
- 公開 GitHub 只更新私有資料索引、快取版本、進度與 README；GPT 講義與單欄閱讀模式不變。

---


## 最新重譯原則與接續進度｜2026-10-30（第 7 批）

- **使用者最新要求**：舊版繁中翻譯品質不符期待，**全部視為待重新翻譯**；舊版 211/211 雙語資料只作為既有內容與回退參考，**不得視為已驗收、不得沿用舊譯當作新譯完成**。依每個私人原始英文段落完整重譯成自然、流利、符合臺灣習慣的繁體中文，忠實保留作者意思，不以 GPT 摘要代替全文，也不混入新寫的精算範例；圖片、公式、R 代碼、圖表、題目、答案、重複回饋與小字皆不可刪除或無聲忽略。
- 本批 **§1.3.11–§1.3.15**（Part 04，原書 p.53–57）完成 **5 小節、10 組原文／新譯段落**。逐節原文段落計數為 2/2/2/2/2；逐段從私人原文重譯，不沿用舊版教學式中文。公式圖像在來源 HTML 中留存，純文字缺漏的公式不臆測。新增私人 Google Doc `194uH8Ia6tVtQJvzH9MUS5uoy5ck-GPd_VC55WTsGt0U`、原 HTML `13HRUq3wFwJcUlhUtFNrVoI5FgtMqR8RC`，同位於原教材私人資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，新檔讀回 JSON、5 節／10 組、私人權限已檢查。
- **重譯累計：46/211 節、152 組原文／新譯段落，尚餘 165 節。** 讀取器應由 `progress.json` 與 `module3-retranslation.js` 交叉檢查最新數字。另註：逐字 PDF 原圖視覺驗收及真實 Google OAuth／iPhone Safari E2E 仍未完成，靜態檢查不能代替。
- 網站程式本批僅增新私有來源索引、更新快取版本；沒有動原始私人 HTML、沒有把中英正文上傳 GitHub、沒有修改其他章節的介面。**下一批從 §1.3.16 開始**，保持每批完整小節、原文段落數配對、新譯回讀驗證、CI 綠燈才宣告完成。

---


## 2026-10-30 接續批次：§1.3.10 測驗（自然繁中第 6 批；Part 03 完成）

- **最新新版自然繁中累計 41/211 小節、142 組段落，尚餘 170 節。** 來源 17 份、原有 211/211 節完整雙語仍原封不動。
- Part 03 原書 **p.41–52** 的 §1.3.1–§1.3.10 現已 **10/10 節、10/10 組**自然繁中校譯。這批 §1.3.10 Knowledge Check 涵蓋國家、作者、肥料、教育程度、汽車品牌五個例題，保留全部選項順序、五個正確答案、三種回饋情境的重複回饋文字及錯誤／部分正確紀錄標籤；原圖三頁由原有私人 HTML 提供，不置入公開 repo。
- 本批新增私人 Google Doc `1RMUzpYJeKhQBlunEqWmr5xoCnWeYEUq-Ini18kUquSY`（`ATPA_Module3_自然繁中重譯_1.3.10_網站資料`），與原 Part 03 HTML `1M-jg8CsPSYdN0_aiJEZdGS9IWZ6FHAMO` 同在父資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`；JSON 讀回驗證 1/1 段、5 題與 3 組回饋文字完整，權限僅具名使用者、沒有 `anyone`。未覆寫原始教材，無既有 Drive 檔案需要再備份。
- 公開 `module3-retranslation.js` 增加 `part:2` 的第二份譯稿，依 `section.id` 合併，不互相覆蓋。同步更新 `progress.json`、`index.html` 快取標籤及本 README。**Google OAuth 實機、iPhone Safari、211 節完整渲染及三張 PDF 原頁逐字目視核對仍 E2E_UNVERIFIED**。
- **下一批從 §1.3.11 開始**，切換至 Part 04 的私人原文，先核對該小節內完整英文段落、來源頁碼及圖像，再產生新譯 JSON。不要重做 Part 03 已校譯小節。

---


## 2026-10-30 接續批次：§1.3.1–§1.3.9（自然繁中第 5 批）

- **新版自然繁中累計 40/211 編號小節、141 組原文／譯文段落，尚餘 171 節**。211/211 舊版完整雙語繼續存在，不能計入新譯進度。
- 本批翻譯 Part 03（Linear Mixed Models）原始印刷頁 **p.41–49** 的九個完整小節：§1.3.1–§1.3.9，每節各 1 組完整原文與新譯對位，合計 **9 節／9 組**。涵蓋官方學習目標、模型引言、固定與隨機效果、使用時機、四個變數的比較、混合模型與群聚相關性；未把精算教學建議混入來源翻譯。
- 原始私人 HTML ID `1M-jg8CsPSYdN0_aiJEZdGS9IWZ6FHAMO`，原有英文本體與 9 張來源頁影像、既有數據／表格、測驗均未覆寫。自然繁中譯稿存於具名權限私人 Google Doc ID `1f0k3vQjoFJ53VMmo1lnRO3zsWx9LuIljdGkR7VA_A7Y`，名稱 `ATPA_Module3_自然繁中重譯_1.3.1-1.3.9_網站資料`，父資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`；JSON 完整讀回、9/9 小節 ID 對位與段落數驗證通過，來源每節至少含一張原書頁影像。Google Doc 確認僅原資料夾具名授權，無 `anyone`。
- 新的 overlay 來源以 `part:2` 對應原始 17 份資料的第 3 份；網站維持單欄 EN／中、單段看另一語、單欄 GPT 補充、目錄、搜尋、題目。公開 GitHub 僅含必要 Google Doc ID 與索引，不包含原文或中文翻譯內容。
- `progress.json`、`module3-retranslation.js`、`index.html`、本 README 同步更新；`check-module3.mjs` 自動檢核之靜態 QA 需驗證 40 小節／141 組。**本批尚未經真實 Google OAuth、211 節私人渲染及 iPhone Safari 完整 E2E 驗收，也未逐張人工目視檢查原 PDF 影像。**
- **下批**：§1.3.10 Knowledge Check（原書 p.50），包含題目、選項、正解與三種回饋情境，必須獨立逐字校譯並保留原有測驗互動。避免將第 5 批的 9/9 對位檢查誤當作第 10 節已完成。

---


## 2026-10-30 穩定性修復｜EN／中 切換入口＋可恢復工作流程

- **讀者回報**：「找不到按鈕切換英文」。已定位一個具體成因：舊版 `#mode-bar` 位於 `#reader-wrap[hidden]` 內，只有 17 份私人來源／重譯稿成功載入後才會出現。**修正**：將唯一的 EN／中 兩個語言按鈕所屬工具列移出登入閘門與私人內容容器，登入前亦可切換／儲存偏好；只有章節目錄需等原稿載入後才顯示。小螢幕維持二選一，未恢復任何左右或上下雙語對照。
- **變更**：`index.html`、`smart-reader.css`、`module3.js`；加入 `progress.json`（機器可讀斷點）與 `check-module3.mjs`（靜態回歸測試）、`.github/workflows/module3-qa.yml`（僅公開前端 QA，不觸及私有教材，也不重複啟動 Pages 部署）。
- **QA**：GitHub Actions [Module 3 static QA](https://github.com/wesleychen310/osaka2026/actions/runs/41005590344) 已通過；核對 EN／中按鈕在登入閘門前、17 個來源 ID、211 個原始小節、31 節／132 組新版翻譯索引與進度檔一致。這是**靜態驗證**，並非 17 份原稿的 Google OAuth 實機 E2E。切換後的 iPhone Safari 實際網頁渲染仍為 **E2E_UNVERIFIED**；如果載入來源失敗，應顯示 Google 錯誤，不能謊稱已讀入教材。
- **續作唯一斷點**：從 **§1.3.1** 開始；新版自然校譯 **31／211 節、132 組段落**，其餘 **180 節**未完成新版校譯。**請先讀 `progress.json`，再讀本 README 頂部與 `module3-retranslation.js` 實際索引，不能以本文件中的歷史 10/211、13/211、19/211 紀錄覆蓋最新進度。**
- **每一批 SOP**：核對來源 Part 和原文 → 私人重譯 JSON 逐段與原文一對一校對 → Drive 新檔讀回／既有檔先在 `_backup` 備份 → 更新 `module3-retranslation.js` → 更新 `progress.json` → 跑 `node learning/atpa-modules/module3/check-module3.mjs` → CI 通過 → 更新本 README。確保每批各有可還原的 Git commit；遇錯只從最新成功 SHA 續作，**不重做已核對段落**。
- **回復點**：`backup/module3-before-visible-language-switch-20261030` 指向此修復前提交 `3cd108a0a4b9523b1775cd7cdd0907b6a8d96a0c`，舊私人 Drive 原稿未修改。禁止覆寫其他教材的閱讀器。
- **當前驗收階段**：`GITHUB_COMMITTED / STATIC_QA_PASSED / PAGES_DEPLOY_CHECK_PENDING / PRIVATE_E2E_UNVERIFIED`。未登入時語言按鈕可見不代表已取得私有教材讀取權。

---


## 2026-10-30 接續批次：§1.2.10–§1.2.21（自然繁中第 4 批；Part 02 完成）

- **最新校譯累計 31/211 編號小節、132 組段落（約 14.7%），尚餘 180 節。** 舊版 211/211 雙語小節仍完整保留，不能當作新版自然校譯數量。
- Part 02 `§1.2.1–§1.2.21` 目前 **21/21 節、94/94 組段落**皆已製作新版繁中：第二批 3 節／10 段、第三批 6 節／25 段、第四批 12 節／59 段；本批範圍 §1.2.10–1.2.21、原書 p.28–40。此計數指來源 HTML 的一對一原文／譯文段落，原圖、圖說、練習與補充內容仍由原始私人教材提供。
- 第四批私人譯稿 Google Doc ID：`1gGLNj-68ed4JOZpApIHvglkfFbOuqroYXyw2e2gu2Fg`，檔名 `ATPA_Module3_自然繁中重譯_1.2.10-1.2.21_網站資料`。新建後移入原教材父資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`；Google Docs JSON 讀回成功，逐節來源原文段落與新譯段落數全部相符。
- 含 GAM 摘要輸出、GCV、k-index、平滑參數診斷、變數選擇，以及飯店訂房資料來源、20 條欄位說明／表格項目、8 個練習步驟與所有模型 MSE 結果。公式缺損處不自行虛構，保留原始私人 HTML／PDF 原圖／R 程式碼與既有題目操作。
- GitHub `module3-retranslation.js` 引用第四批來源；沿用前一批已修正的同一 Part 多檔合併機制（依 `section.id` 合併，不互相覆蓋），`index.html` 更新快取標籤 `20261030-natural4`，頁尾同步更新至 §1.2.21。**公開 GitHub 不包含任何原書英文或私人中文正文。**
- **QA 狀態**：Google Docs JSON 讀回／59 組逐節對數 **PASSED**；GitHub 版本提交完成。簽入後的完整 17 份來源渲染、實際 Google OAuth、手機 Safari 操作及 Pages CDN 最新版本 **E2E_UNVERIFIED**；不應把靜態驗證誤作實機驗收。
- **下一批**：從私人 Part 03 的 **§1.3.1** 開始（Linear Mixed Models），依原始英文順序逐節校譯；每批保持私人儲存、可回退與完整來源對照。

---

## 2026-10-30 接續批次：§1.2.4–§1.2.9（自然繁中第 3 批）

- **新版自然繁中累計 19/211 小節、73 組段落（約 9.0%），尚餘 192 小節。** 原有私人雙語教材仍是 211/211 節，不能計入新版自然校譯。
- 第 3 批直接依原始私人 Part 02 `ATPA_Module_3_1.2.1-1.2.21_私人雙語教材.html` 原文校譯 §1.2.4（2 組）、§1.2.5（3）、§1.2.6（2）、§1.2.7（4）、§1.2.8（5）、§1.2.9（9），合計 **6 節、25 組**，來源頁 p.22–27；透過 Google Docs 讀回 JSON 並與原 HTML 逐節段落計數核對。
- 第 3 批私人 Google Doc ID：`1c9m4Tq-LpvnkEG16dtuBpL9wcuUz5NtEZVf3GzC_LPw`（`ATPA_Module3_自然繁中重譯_1.2.4-1.2.9_網站資料`），已移至原 Part 02 的父資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`。經 metadata 讀回，僅保有原教材相同的具名授權，沒有任何 `anyone` 分享權。原始私人 HTML **未修改**，不需覆寫備份。
- §1.2.8 原始 HTML 的 PDF 公式位置仍有缺損（原文只有標點和說明）；新譯保持來源可見文字的缺口，沒有憑空宣稱復原官方公式。來源圖片／公式、表格、R 指令、原始數據、考題和獨立 GPT 補充欄位均未刪除或覆寫。本批尚未完成原 PDF 圖像的完整視覺逐字校驗。
- **技術修正**：`module3-retranslation.js` 現在允許多份私有譯稿對應到同一 Part 02，依小節 ID 合併；驗證每份資料的 `schema/chapter/sourceFileId`、小節 ID 與逐節段落數，先整批校驗再套用，避免不完整套用。保留前 13 節、48 組舊批次結果。更新 `index.html` 靜態快取版本至 `20261030-natural3`。
- **驗收狀態**：Google Doc JSON 讀回／段落對數 **PASSED**；GitHub 三批載入介面程式已提交；真實 Google OAuth、GitHub Pages CDN 與 iPhone Safari **E2E_UNVERIFIED**。下一批自 **§1.2.10** 接續，按原文完整小節處理。

---

## 2026-10-30 接續批次：§1.2.1–§1.2.3（自然繁中第 2 批）

- 目前新版自然繁中累計 **13/211 小節、48 段**；舊版雙語來源 211/211 完整保留，尚待自然校譯 198 節。
- 第 2 批逐段對照私人 Part 02 原文，完成 §1.2.1（6 段）、§1.2.2（1 段）、§1.2.3（3 段），共 10 段，涵蓋來源原書 p.19–21；保留英文、PDF 圖表與公式，將舊譯夾雜的 GPT 解讀從忠實翻譯中分離。第 1 批仍為 §1.1.1–§1.1.10（38 段）。
- 第 2 批私人翻譯 Google Doc ID：\`19JbZ6IsfTBdmwas1k0OZxVxC4nFfJ2vRSkUAYuk-fxA\`；其父資料夾 ID 與原 Part 02 一致：\`1uLenu319fQEQwltPasYv1HH_EL6Swk4q\`，已核對原資料夾具名權限，公開 GitHub 不含私人譯文。
- 網站的 `module3-retranslation.js` 增加第 2 批來源及各節段落數驗證，\`index.html\` 換快取標籤。**尚未完成實際 Google OAuth／iPhone Safari 的 E2E 驗收**；此輪僅能確認連接器讀取、GitHub 提交、靜態驗證。若 OAuth 或新檔案下載失敗，網站會回退舊譯並顯示警告。
- 下一批應為 §1.2.4 起，分完整小節處理，需逐段忠實重譯、核對原圖並記錄新的私人譯稿；勿把 211 節舊版雙語計作自然校譯完成。

---


## 最新有效規格｜2026-10-30 智慧單欄雙語閱讀改版（第 1 批）

**本節優先於以下舊版四模式紀錄。** 唯一主要閱讀體裁為「智慧單欄」：整頁只顯示一種語言，提供 `EN 英文`／`中 中文` 兩個按鈕；每組原文與譯文仍在同一個私有來源段落中，點按「看中文／看英文」才只展開該段另一語言。不再對使用者提供上下雙語、左右雙欄、GPT 並排講義或三欄模式。

- **正式入口**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module3/
- **已修改 GitHub**：`index.html`（兩語入口、搜尋）、`module3.js`（兩語切換／錨點／恢復閱讀位置）、`module3-teacher.js`（保留 53 節 GPT 深入內容，改為可收合單欄補充講義）、`README.md`。新建 `smart-reader.js`、`smart-reader.css`，並在 `index.html` 載入；舊 `module3-teacher.css`、共享的比較／二段式樣式不再於本頁載入。
- **原有內容與功能保留**：17 份 Google Drive 私人 HTML（211 個編號小節、原圖、表格、公式、題目）、原始 `sourceFileId`、OAuth read-only 授權、私人自然重譯 overlay、章節目錄和深連結、答題選項及教師答案、PDF 原頁影像、原有精讀附註與 English 語塊。其他舊版程式／樣式的未引用檔案暫留 Git 歷史及 repo 中，供 rollback；不是仍開放的閱讀模式。
- **新增**：單段展開／收合、段落穩定 `id`（既有 ID 不覆蓋）、英中雙語段落搜尋、每書獨立的語言與閱讀位置 localStorage keys、整頁切語時原段落位置補償；URL `#anchor` 優先於上次閱讀位置，舊 `?part=N` 仍可用。
- **翻譯進度需分開認列**：原有雙語 `211/211`；`2026-10-29` 起逐段重新校譯，目前自然流利繁中 **10/211 節、38/38 段（§1.1.1–1.1.10）**，仍有 **201 節**未完成新版逐段重譯。本次是閱讀體裁改版，**沒有宣稱舊譯其餘 201 節已達自然流利標準**。後續依來源 Part 02（§1.2.1–1.2.21，原書 p.19–40，共 21 節）起逐批改譯、原文校對後才記為新版完成；不可用 GPT 摘要代替全文。
- **安全回復**：改版前從 `main` 建立保留分支 `backup/module3-before-smart-reader-20261030`；Google Drive 私人原檔本批未改動，故不需要額外覆寫備份。若後續修改既有私人 Drive 原檔，必須先在原父資料夾 `_backup` 複製保留舊版，再維持原 ID 就地更新。
- **已實測**：從 GitHub 讀回更新後程式、確認只有 `data-mode=en`／`data-mode=zh`、不再引用各舊模式樣式；三個主要 JavaScript 檔通過 V8 語法解析；核對 GPT 指南 53 個唯一 section key；第一份私有來源 metadata 顯示僅具名授權。
- **尚未通過**：實際 Google OAuth、17 份來源同時下載、211 節登入後渲染、iPhone Safari 捲動位置／點按／搜索、320／390／768／1130px 的端到端互動測試、GitHub Pages CDN 最新頁面驗證（公開網站讀取工具出現 cache miss／無法 DNS 解析）。因此狀態為 **GITHUB_COMMITTED / STATIC_QA_PASSED / E2E_UNVERIFIED**，不等同真人實機驗收完成。

### 後續分批計畫

1. 對新版 iPhone Safari 進行實際 Google OAuth 與高密度小節切換驗收，修復任何現場問題。
2. Part 02：§1.2.1–1.2.21 的 94 組既有雙語段落逐項檢查、自然繁中重譯及對原書圖表校對；每一批同時有完整英文與中文再發布。
3. 其後依原 `SOURCE` 的 Part 03–17 順序處理，先完成連續完整小節，按書頁核對，持續更新私有新譯 Doc 與此 README 的精確進度。

---


**Content progress: 211/211 numbered sections complete.**

- The public repository provides only the reading interface (HTML, CSS, JavaScript).
- Original English content, Traditional Chinese translation, summary, annotations, official PDF page facsimiles, and study phrases are stored on access-controlled Google Drive.
- Section 1.7.38–1.7.50 now has 13 distinct lesson nodes and covers the complete official printed pages 225–242.
- The source English count is 211/211 and bilingual study count is 211/211; no English-only sections remain.
- The original 60 bilingual lessons in sections 1.1–1.3 remain in place.
- The 151 enhanced lessons in sections 1.4–1.7 include GPT-authored Traditional Chinese explanations, paired summaries and semantic English phrases.
- Google Drive named-user access remains the source authorization mechanism.
- GitHub Pages deployment alone does not establish a passed signed-in iPhone Safari test; mobile OAuth and layout acceptance remain pending.

## GPT 講義對照（2026-10-29）

- Historical reading modes before 2026-10-30: `en` / `stacked` / `compare` / `teacher`. The smart single-column mode above supersedes them.
- Historical implementation mounted `module3-teacher.js` and `module3-teacher.css`. As of 2026-10-30, GPT notes are single-column collapsible and the old teacher.css is not loaded.
- `module3-teacher.js` currently has 53 unique guided lessons: Bayesian Models and Analysis §1.5.1–1.5.44 (44), and Stacking §1.6.1–1.6.9 (9). Others retain existing first-stage bilingual summaries until their own guides are authored.
- Each completed tutor lesson includes the concept, step-by-step explanation, practical insurance/actuarial example, common trap, ATPA exam application, and a self-check. Original English remains fetched from the owner's private Google Drive files at runtime.
- In Stacking, maintain the official hotel regression metrics (null 51.16, LM 45.92, RT 45.63, NN 44.87, Meta1 44.74, Meta2 44.77 RMSE) and the classification exercise log loss metrics (null 0.65977, logistic 0.60249, tree 0.60199, NN 0.59828, Meta1 0.587318, Meta2 0.58832).
- Critical teaching issue: stage-1 must be trained on stage-0 out-of-fold predictions, while final stage-0 models may be refit on all training data for deployment; do not refit the stage-1 model on those in-sample predictions.
- Static JavaScript validation and GitHub commit checks are possible through connected GitHub; an authenticated browser acceptance test is still pending (signed-in content cannot be viewed in public-only browsing tools).

## 自然繁體中文全章重譯計畫（2026-10-29 啟動）

**目前完成：10/211 編號小節（§1.1.1–1.1.10），對應 38/38 原始雙語段落。尚餘 201 小節。**
此處「雙語 211/211」代表舊版仍完整存在，**不代表新版自然重譯已完成**。

- 原書英文來源：私人 Google Drive 的 17 份 HTML；禁止將全文或譯文直接提交到公開 GitHub。
- 新譯文：以私人 Google Docs JSON 存放，每份按原始 `section.id` 配對與原文段落索引，存於原教材同一資料夾。
- 第一份新譯稿：[§1.1.1–1.1.10 38 段](https://docs.google.com/document/d/1cgpK6EjNMrKs2roTLF0htk4RWfZiwuhNka2PtFMo1Gk/edit)，結構為 `{schema:1,chapter:"1.1",sourceFileId,translations:{s111:[...],...}}`。
- 原始 HTML 已備份在原資料夾 `_backup`，備份檔 ID `14BrjMQG_xAzu7Py80u-JHwc0Cl2-kM3J`；原文 HTML **未修改**。
- 網站的 `module3-retranslation.js` 在 Google OAuth 驗證後才從私有 Doc 匯出文字，再按原文段落覆蓋中文欄位；若載入失敗，保留原中文並顯示警告。
- `module3.js` 保留原本完整校驗（211 小節、各個來源計數、英文影像及雙語），先套用重譯後再 mount，確保圖表與既有閱讀模式不變。
- **翻譯標準**：台灣繁體中文、自然專業語氣、逐段一對一、零內容省略、保留公式/數值/標題/引用/重要原文統計術語；不得把翻譯寫成教學心得。原文的異常或疑似錯誤須忠實保留，必要時另加獨立「譯註」；精算延伸教學放 GPT 講義欄。
- **接續順序**：下一批為 `SOURCE["3:2"]` 的 §1.2.1–1.2.21，共 21 節；後續依原書與 SOURCE 的 17 份分批逐一完成。若建立額外私有翻譯 Doc，需將檔案移入原資料夾，並在網站覆蓋層 SOURCES 加入 `{id,chapter,part,expectedSections,expectedPairs}` 和精確段落計數驗證。
- 目前僅完成 GitHub JavaScript 語法／GitHub 版本確認、私有 Google Docs JSON 讀回驗證；**私人 OAuth 實機畫面尚未驗收**。

Last updated: 2026-10-30.