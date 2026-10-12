# SOA ATPA Module 2 — Working with Data｜私人雙語教材

版本：2026-10-12 · 最新完成進度 **50／223 小節**（§1.1.1–1.1.36 全部，以及 §1.2.1–1.2.14）

## 官方使用入口

- [Module 2 連續閱讀](https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/)
- [學習首頁](https://wesleychen310.github.io/osaka2026/learning/)
- [Module 1](https://wesleychen310.github.io/osaka2026/learning/atpa-modules/)

### 工作界線
原書 Module 2 為 259 頁／223 編號小節。**目前已完成 §1.1.1–§1.2.14（原書第 8–64 頁），累計 50／223 小節；§1.2 尚餘 §1.2.15–1.2.38 共 24 小節。** §1.3–§1.7 仍待製作。網站對使用者只顯示「一整頁連續閱讀」與左側小節目錄，不呈現分批文件結構。

## 來源追溯與權限

唯一權威原教材：本專案上傳 `ATPA_Official_Modules_1-4_Combined(1).pdf`；Module 2 由綜合 PDF 第 74 頁開始（PyMuPDF 0-based index 73），Created Thu Apr 6, 2023。

中文逐段翻譯與精算教學保存在 **Google Drive 指定資料夾** `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，四份私人 HTML：

1. `1D-HUEZGGTor5P5HFZb4vmNm9C9sXS89B` — §1.1.1–§1.1.12，p.8–20，12 小節、59 英中對照、38 Reusable English、原書 p.15 ETL 流程圖裁切版、p.17 原書資料表重建；121,195 bytes；SHA256 `1a3bdfe6fd2d5baa4b71f03ea598f004766e33476548b79a50a5994dc6c6a6c8`。
2. `1DnflW10dpSj9mys_sHR_3ybcQv_soHKw` — §1.1.13–§1.1.31，p.21–39，19 小節、71 英中對照、57 Reusable English、完整來源英文與逐段繁中、精算教師卡；76,943 bytes；SHA256 `84ff1f0a14f05b7d4389e3d09adc508263f4d2f934c9ca4278169ece0e852739`。
3. `141OqP4-RikeZXWQO4V3VFzxGtkZ7dWCE` — §1.1.32–§1.1.36，p.40–48，5 題 SOA Knowledge Checks、共 19 個選項，5 張教師卡、15 Reusable English，保存原書 Correct/Incorrect Popup 重複文字與原始英文，另附繁中講解；42,288 bytes；SHA256 `19dd8ba6259cb3ba867850fbad16e09c0b0d9b9d7ff2a6dec2886e723e150b45`。
4. `1-jBApP08QPdJ6DVdbI0RExnUSm6wre83` — **§1.2.1–§1.2.14**，p.49–64，14 小節、90 組英中對照、14 張私人教師卡、14 組 Reusable English 小節卡；含 Tidy Data、CSV、R/Python 資料操作及原教材的示例圖像／表格資訊。檔名 `ATPA_Module_2_1.2.1-1.2.14_私人雙語教材.html`，139,495 bytes，MIME `text/html`。來源已上傳至與前三份相同的 Google Drive 私人資料夾。

**權限與隱私**：已使用 Google Drive metadata 核對以上四個來源都為原指定資料夾的 `text/html` 檔案；每份均有具名 owner 與 reader 權限，沒有 anyone/domain 公開權限。Google OAuth scope `drive.readonly`。GitHub 只存公開的 HTML shell、CSS、JS 和本 README，不存受版權限制的原文／中文翻譯／SOA 題目。

## §1.1 已完成時的驗收數字（歷史保留）

- 36／36 小節。
- **173 組**英中對照（59 + 71 + 43）。
- **36 張**「再解說一次」精算教師卡。
- **110 個**可用於 actuarial memo／PA／ATPA／再保溝通的英文語塊。
- 原書 1 張 ETL 圖、1 個 Data Frame 資料表（逐項重建）。
- 5／5 題 SOA Knowledge Checks；19／19 個選項；答案由原書 Correct Popup 得出，與非官方教師補充清楚區分。
- 第一份 59／59、第二份 71／71 source English 正規化逐段對照 PDF；第三份 17／24 個題幹／選項正規化直接連續匹配，另外 7 個選項因 PDF `Option N` 文字插入句子中間而無法用純連續字串比對，已依 PDF 原稿內容人工編寫，正式文字驗收仍需進行逐項版面審查。
- HTML 結構、段落對譯、GitHub JavaScript 語法已靜態檢查。

## 使用者介面與操作

- 獨立網址 `learning/atpa-modules/module2/`，共用 Module 1 `reader.css`，新增局部 `module2.css` 只處理原書圖、表與原書考題回饋。
- `module2.js` 從四個受限 Google Drive HTML 檔案載入內容，嚴格要求各有 **12、19、5、14** 小節，合併後 **50** 個 unique anchors；左側依來源順序選擇任何小節，手機開抽屜目錄。
- 四種模式依固定規格：全中文／全英文／左右對照／點按翻譯（英文 → 中文在上英文在下 → 英文）。
- Knowledge Checks 用原 SOA 回饋得出的答案進行單選／複選、檢查答案、重設。考題及答案內容只存於 Google Drive。

## 待完成的實機 QA

**未執行成功者不能宣告通過**：GitHub Pages CDN 發布後實際訪問、連結者 Google OAuth、iPhone／iPad／Mac 四模式版面與 5 題作答、圖表視覺驗收、題目 7 個跨 Option 欄位的 PDF 逐字驗收。

## 後續章節製作順序

1. §1.2 Reading and Writing Data **已完成 1.2.1–1.2.14，接續 §1.2.15–§1.2.38（剩餘 24 小節）**。
2. §1.3 Data Transformation and Cleaning（70 小節），含 R／Python 與練習。
3. §1.4 Relational Databases（16 小節）。
4. §1.5 Data Validation（21 小節）。
5. §1.6 Missing and Extreme Values（29 小節）。
6. §1.7 Case Studies（13 小節）。

總量 36+38+70+16+21+29+13=223；每節在 Drive 準備內容，GitHub 增加資料來源映射，使用者始終在相同網址連續閱讀。


## 2026-10-12 閱讀格式定版（與 Module 1 共用）

- Module 2 使用者介面 **固定繁中在上、英文在下**，移除四個閱讀模式選擇按鈕與每段點按翻譯。小節內文章和標題按上下雙語對照閱讀。
- `module2/index.html` 不再出現 `data-mode` 工具列；`module2.js` 使用 `applyBilingualLayout()`；共享 `../reader.css?v=20261012-vertical1`。既有 `module2.css` 保留原書圖、表額外排版。
- 不影響左側／手機章節目錄、5 題 Knowledge Checks、Google Drive 私人載入；三份來源維持原 ID 和具名授權。
- 後續 §1.2–§1.7 新增時直接依此上中下英規格，不再復原語言切換按鈕。
- 已做 GitHub 靜態讀回及 JS 語法檢查；Google OAuth 與跨裝置實際渲染待確認。


## 2026-10-12 最新有效規格｜四個全章閱讀模式（取代所有先前語言模式規定）

使用者最新明確指定 Module 1 和 Module 2 的**四個切換按鈕**，按鈕必須依以下順序呈現：

1. **全英文** (`en`)：英文原文、英文標題及原始練習題；對應繁中翻譯隱藏。
2. **全中文** (`zh`)：繁體中文翻譯與中文標題；對應英文原文隱藏。
3. **上中文下英文** (`vertical`)：每個段落的繁體中文在上，對應英文原文在下；預設模式。
4. **左英文右中文** (`parallel`)：每個段落英文左欄，繁中右欄，行文、章節標題及雙語小標題對應；手機維持兩欄。

- 四個模式透過 CSS 和 `document.documentElement.dataset.readingMode` 切換；全部資料仍在同一 DOM，不會重複向 Google Drive 下載，並以 `localStorage` 的 `atpa-modules-reading-mode-v3` 保存使用者目前模式，Module 1／2 共用偏好。首次進入預設上中文下英文。
- **先前「完全取消語言按鈕，固定上中文下英文」的紀錄已作廢**；先前的逐段「點按翻譯」也不是這一版的四種模式。所有後續章節必須遵循以上四按鈕規格。
- 網頁維持單一長頁、固定左側目錄／手機抽屜、SOA Knowledge Checks、SOA 原書 Sample Answers；私人授權與原稿不變。Module 1 顯示 60 小節，Module 2 目前顯示 50 小節，涵蓋 §1.1 與部分 §1.2。
- 程式碼位置：Module 1 `learning/atpa-modules/{index.html,reader.js,reader.css}`；Module 2 `learning/atpa-modules/module2/{index.html,module2.js,module2.css}`，兩者共用 `reader.css` 之四模式排版。
- 更新版次 `20261012-four-modes1`；GitHub 檔案已讀回及 JavaScript 靜態語法驗證，四模式 CSS 選擇器與兩模組按鈕順序已逐項核對。**使用者 Google OAuth、網站即時部署、iPhone／iPad／Mac 真實排版仍待實機驗收。**


## 2026-10-12 最新工作交接｜§1.2.1–1.2.14（接續點 §1.2.15）

**本段為最新有效進度與交接說明；上方歷史 SOP 保留各階段製作紀錄。**

- **學習站正式入口**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/ ，§1.2.1 直達網址：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s121 。
- **最新來源檔**：Google Drive 受限 HTML `1-jBApP08QPdJ6DVdbI0RExnUSm6wre83`；存放資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，139,495 bytes。驗證僅兩組具名 `user` 存取權（owner、reader），沒有 `anyone` 或 `domain`。
- **本段內容**：原書 p.49–64 的 `§1.2.1–1.2.14`，14 個完整編號小節、90 個英中配對區塊、14 個 `tutor` 教師卡、14 個 `phrases` 教學卡。連同 §1.1 原有 173 個雙語配對，**目前合計 263 個配對、50 個小節**。
- **GitHub 實作**：`learning/atpa-modules/module2/module2.js` 的 `SOURCE["2:4"]` 對應上述 Google Drive fileId；來源總數 4，`EXPECTED_COUNTS=[12,19,5,14]`，`FIRST_IDS=["s111","s1113","s1132","s121"]`，50 個小節合併；`module2/index.html` 的 JS cache revision 更新至 `20261012-sec12-14`。**公開 GitHub 沒有上傳教材正文。**
- **目前最終語言模式**：依使用者明示，保留 **全英文 → 全中文 → 上中文下英文 → 左英文右中文** 4 個模式（預設上中文下英文）；適用 Module 1 和 Module 2。不要根據較早記錄移除按鈕。
- **已核對**：Drive 真實 metadata（檔名、大小、資料夾、明確存取權）及其文字內容結構（14／14 section、90 個 .pair、首頁錨點 `s121`、末頁錨點 `s1214`），GitHub JS 有來源路由、HTML 有 §1.2.14 進度說明。
- **尚未核對**：本段所有英文字句逐字對照原 PDF、網站正式 OAuth 動態載入、手機/平板/桌面的真實顯示及附圖效果。實機和逐段來源 QA 不得誤報已通過。
- **下一個交接任務**：依同一 PDF 從 **§1.2.15** 接著逐節製作到 **§1.2.38**（原節共 38 小節，尚餘 24）；先查準每節 PDF 頁碼，再保留 **XML、JSON、CSV、R/Python、表格、練習題和解答** 的原書結構、原碼與翻譯。每節 3–5 組精算英文語塊，增加獨立的 tutor 區塊。新教材一律上傳同一受限 Google Drive 目錄，**新增 `SOURCE` 映射、依原書順序增加 `EXPECTED_COUNTS/FIRST_IDS`，維持單一長頁與四模式**。
- **每次工作結束的交接 SOP**：更新此 README 的累計節數、原書頁碼、新增私人 File ID、精確區塊數、驗收／待驗收清單及下次起始節號；同時在 `learning/README.md` 寫一行最新進度供其他對話搜尋；保持 Source File ID 和 GitHub commit 可追查。若改動既有受限 Drive 原稿，先備份到同層 `_backup`，保留原 ID、檔名、位置與權限。


## 2026-10-12 第二章節交付｜§1.2 Reading and Writing Data 全 38 小節

**完成範圍**：§1.2.1–§1.2.38，Module 2 原書第 49–93 頁；含 5 個 Exercise 題目（2.2.1–2.2.5）、Tidy Data、CSV、R/Python、XML/XPath、JSON nested arrays、Excel/SPSS/SAS、Tall/Wide、寫檔及 Appending。

- **來源 A**：`1-jBApP08QPdJ6DVdbI0RExnUSm6wre83`，§1.2.1–§1.2.14，p.49–64，14 小節、90 組英中對照、14 個 tutor、42 英文語塊、2 張原 PDF 頁面擷取（Data Frame 續表）、139,495 bytes；SHA256 `655e6ae09106d33db7c4d621a75107f6e8a5cb492d0c1682777a9c2a6406acd0`。
- **來源 B**：`1L-yLFwsMii4TmnWVtGi4HQ5R8xNr0Xsn`，§1.2.15–§1.2.28，p.65–83，14 小節、14 個**整頁來源文字／對應繁中解說**配對、14 個 tutor、42 英文語塊，XML／JSON 等13張原 PDF 頁面擷取以保留結構與程式行列，1,399,741 bytes；SHA256 `75705c5f2acd735d0bd3d09a53f678a5ff3544e3222aa424ec5e424c48b3a8d9`。
- **來源 C**：`1LdOL-zzs8NuK6XNx2vUtXbuO0GanOUNA`，§1.2.29–§1.2.38，p.84–93，10 小節、10 個**整頁來源文字／對應繁中解說**配對、10 個 tutor、30 英文語塊、4 張含表格與範例的原 PDF 頁面擷取，420,963 bytes；SHA256 `a3984ed44b87e130a57645c24ca6dc4dc718989184f00f0523ab99380c76ba33`。
- **Module 2 累計**：§1.1 的36節 + §1.2 的38節 = **74／223 小節（33.2%）**；在同一網址 https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/ 左欄依 1.1／1.2 導覽；未顯示公開批次介面。
- **資料完整性檢查**：本節三份 HTML 的章節編號逐一核對為1.2.1–1.2.38連續，14+14+10=38個獨立錨點；各組皆有來源英文與繁中內容。1.2.1–1.2.14 採來源文字區塊對譯，1.2.15–1.2.38 採原頁英文全文與中文分段說明配對，重要技術原稿版面加上原 PDF 擷取。後 24 節仍可再做更細的段落對位校稿，不宣稱已達逐句翻譯驗收。
- **原書忠實性**：保留 R/Python/JSON/XML 的原始語法、練習資料列、選項及參照的檔案名稱。原教材當中 `Df[0,:]`、`food[0]`、`books_nested.json/Topics`、`pd.json_normalize(books,...)` 等有疑慮的範例，沒有覆寫原文；於教師卡標出並用獨立說明提出檢核方法。
- **Exercise 負責任的界線**：官方 PDF 所指 CHUNK 9–33、外部 Rmd 中的解答並未在本次直接執行；原書題幹、所要求檔案及解答 CHUNK 位置均列於教材。部分題目提供依原書數據可推導的說明，但不得聲稱有執行完全部官方 Rmd 或通過程式結果比對。
- **原稿保護**：三個來源檔案 `text/html` 位於 Google Drive 資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，metadata 已確認每份僅 2 組 `user`（owner、具名 reader）權限，沒有 `anyone`／`domain`。GitHub 只新增檔案 ID、程式與公開 SOP。
- **網站變更**：`module2.js` SOURCE 增加3個 raw HTML 檔，`EXPECTED_COUNTS=[12,19,5,14,14,10]`，合計74個唯一小節，左側新增 1.2「讀取與寫入資料」，前後衔接既有1.1，四按鈕保持 **全英文／全中文／上中文下英文／左英文右中文**。新增 `.pdf-source-original` 保留原書 XML／JSON 程式碼換行，局部 `module2.css` 確保手機橫幅表格可讀。
- **尚待正式端對端測試**：GitHub Pages CDN即時發布、Google OAuth 授權後載入 1.4MB 私人檔案、手機／桌面四模式、原圖放大顯示、Exercise 外部文件連結與程式碼執行；不得把 GitHub 靜態提交當成真實瀏覽器測試。

### 下個製作範圍

§1.3 Data Transformation and Cleaning（原書70個編號小節），逐節依 PDF 內容繼續製作，保持同一模組長頁和四個閱讀模式。
