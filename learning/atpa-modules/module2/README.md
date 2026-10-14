# SOA ATPA Module 2 — Working with Data｜私人雙語教材

版本：2026-10-14 · 最新完成進度 **223／223（100% 編號小節均已接入）**；§1.1–§1.7 的官方主 PDF 內容均已納入網站。外部案例附件仍待取得與執行。

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


## 2026-10-13 共用閱讀 CSS 字級調整
- Module 2 共用 `../reader.css` 已改成「上中文下英文」中英正文均 16px，手機亦相同；移除舊英文字級 14px 的縮小排版，英文小節標題正常化。
- `module2/index.html` 之共用樣式表快取版本更新為 `20261013-normal-font1`；四個閱讀模式和私人教材來源無變更。原先偏小字級的問題來自共用 CSS，因此同步修正 Module 1 與 2。


## 2026-10-14｜最新交接：§1.4 Relational Databases 全 16 小節完成

**此段優先於上方的歷史進度說明。** 本次新增 SOA ATPA Module 2 原書 §1.4.1–§1.4.16（印刷頁 p.173–192；合併 PDF 全檔 0-based index 245–264）。

- **正式入口**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s141
- **累計進度**：§1.1 36 + §1.2 38 + §1.3 70 + §1.4 16 = **160／223（71.7%）**。§1.5–§1.7 尚未製作完畢，不得標示完成。
- **新私人來源檔**：`ATPA_Module_2_1.4.1-1.4.16_私人雙語教材.html`，Google Drive `1tnMUnufssHsrZoen0nio5M3NeitXAgM_`，資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`；`text/html`，1,481,342 bytes，SHA256 `045637d995cec457597991b94d9cf41a52cff138ea42dc42424159d4e5366e80`。權限：owner + 具名 reader（無 anyone/domain）。
- **教材範圍**：RDBMS、primary／foreign key、left/right/inner/full joins、multi-column composite keys、duplicate foreign keys、column/row binds、Exercise 2.4.1（五份虛構電影／總經資料）。包含 **16 節、20 個英中來源對應區塊、16 張精算教師卡、48 個 Reusable English 語塊、15 張由原 PDF 頁面直接擷取的原始表格與程式截圖**。
- **原書驗證**：本地腳本以 PyMuPDF 擷取 p.173–192 的文字，逐一與 HTML 中 `.original` 比對，**16／16 節全部完全吻合**；16 個原書編號、每節 3 英文語塊及成對原文／翻譯均通過結構檢查。來源正文中繼續保留原書 Component Table、CHUNK、程式與英文原樣。中文版含逐節原文解說及所有範例表格／Exercise 指令的完整繁中說明；遇跨頁表格延續時，原圖與來源文字完整保留。
- **忠於原稿的問題註記**：p.177 `AMNZ` vs `AMZN`；p.181 full join 的 Table_4／Table_5；p.182 原書 row-count 邊界未充分考慮 duplicate keys；p.183 R inner vs Python outer；p.186 R inner vs Python left。未在原文中擅自改寫，於獨立教師卡／Source discrepancy 提醒。
- **原書練習**：Exercise 2.4.1 五道 joins 實務題完整保留；CHUNK 10／11 所需 Rmd、CSV 需另行取得並執行，這次沒有聲稱完成外部 Rmd 的實機計算。
- **GitHub 網站更新**：`learning/atpa-modules/module2/module2.js` 新增 `SOURCE["2:10"]`，`CHAPTERS["1.4"]`；`EXPECTED_COUNTS=[12,19,5,14,14,10,20,20,30,16]`、`FIRST_IDS` 新增 `s141`、總量 160 unique IDs；`module2/index.html` 使用 `20261014-sec14-complete` 刷新快取。四個按鈕固定 **全英文、全中文、上中文下英文、左英文右中文**；不顯示私下製作批次。教材原文與圖片不放公開 GitHub。
- **待驗收界線**：Owner 實際 Google OAuth、GitHub Pages CDN 發布時間、iPhone/iPad/Mac 四模式、15 張原圖的客戶端顯示與外部 Rmd 執行尚待正式端對端測試。靜態檔驗證不可冒充這些測試。
- **下次製作**：**§1.5 Data Validation，共 21 小節，原書起於 p.193**。先讀清原書每頁，依順序製作英中／原圖／teacher note／3–5 英文語塊，存入同一受限 Drive 目錄；再增加來源路由、校驗總數 181 小節，最後同步更新本 README、上層 README 和根目錄 README。



## 2026-10-14 最新交接｜§1.5 Data Validation 全 21 小節完成

**以本段作為最新完成範圍；README 其他較早進度敘述均屬歷史紀錄。**

- **正式站點**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s151
- **累計進度**：§1.1 36 + §1.2 38 + §1.3 70 + §1.4 16 + **§1.5 21** = **181／223（81.2%）**。待完成：§1.6 29 節與 §1.7 13 節，共 42 節。
- **官方來源**：`/mnt/data/ATPA_Official_Modules_1-4_Combined(1).pdf`，Module 2 原書印刷 p.193–214（合併 PDF 0-based pages 265–286），§1.5.9 的 Table 197 跨 p.201–202，完整保留於同一小節。
- **私人教材檔**：`ATPA_Module_2_1.5.1-1.5.21_私人雙語教材.html`，Google Drive `1XcX7WF9HE5J32zaTnlsc_LUsHcTOt2Q9`；父目錄 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，MIME `text/html`，897,774 bytes；SHA256 `7b59468c250f4f0cdc01aa9d9ada08f36d0e63485f95c769cbecc714db83bd9b`。
- **權限已核對**：Google Drive metadata 僅回傳 `user` owner 與具名 `user` reader，沒有 `anyone` 或 `domain`；檔案不在公開 GitHub。GitHub 只保留原稿的 fileId 參照及閱讀器程式。
- **教材結構已驗證**：21／21 `section.lesson`、21／21 英中配對區塊、21 張 teacher notes、21 份 Reusable English 卡（共 63 個語塊）、**14 張原 SOA PDF 頁面截圖**；首錨點 `s151`、末錨點 `s1521`。原文從官方 PDF 文字層直接擷取（頁首頁尾由網站標題／頁碼承接），保留源頭 Component Tables、R/Python 函數、資料列、官方 exercise 題幹與 source links；中文對應是逐節詳解與重要原文內容翻譯，日後可加密化成更多逐段對位區塊。
- **教學涵蓋**：accuracy = correct value / consistency / unambiguity；initial entry errors / system changes / misaligned data / null；資料校驗 10 筆保戶記錄（缺失、跳號、重複、過大年齡、格式錯）；data reconciliation、manual inspection、algorithmic duplicate detection；R `unique(directory)`、`filter(!duplicated(Name))`、`fromLast=TRUE`、Python `drop_duplicates()`、`drop_duplicates("Name",keep="last")`、轉置去重欄位；internal consistency；pre-outcome 和 algorithmic target leakage；domain/value check；Exercise 2.5.1 `flights.csv` 時間 HHMM、Exercise 2.5.2 `youth_risk.csv` 的重複值、Data_Value 上下界與跨州分群相關檢驗。
- **來源差異與驗證界線**：原書 p.193 表頭意外寫「Module 4 Learning Objectives」、p.196 Tab Title = R/Python 但內文為品質原因等均保留；來源每節 PDF 英文直接原字串擷取，QA 檢查有 21 個原始小節識別符、英文與繁中、14 圖、63 語塊。**外部 Rmd、CSV 不曾在本批直接執行；Exercise 2.5.2 沒有編造數值答案。**
- **網站更新**：`learning/atpa-modules/module2/module2.js` 新增 `SOURCE["2:11"]`（`part="11"` 僅為內部分檔，UI 無批次選單）、`CHAPTERS["1.5"]`，`EXPECTED_COUNTS=[12,19,5,14,14,10,20,20,30,16,21]`、`FIRST_IDS` 末項 `s151`，合計 181 個不同錨點；`module2/index.html` CSS/JS 版本 `20261014-sec15-complete`。保留原有 **全英文／全中文／上中文下英文／左英文右中文** 四模式、左側章節目錄與單一長頁。
- **正式端對端待驗收**：GitHub Pages CDN 發布、使用者 Google OAuth、手機／iPad／Mac 實際排版、圖像放大、21 節全部載入及練習互動；單靠 GitHub JS 靜態檢查不得宣稱已完成真實瀏覽器驗收。
- **下一批從 §1.6.1 開始**：§1.6 Missing and Extreme Values 共 29 節，原書 p.215–244（§1.6.23 前後有跨頁），完成後應更新總量為 210／223；再製作 §1.7 Case Studies 13 節，原書 p.245–257，完工為 223／223。每批新增前查 PDF 並保留原文、圖表、R/Python 原始 code、Exercises、3–5 英文語塊及精算說明，存入同一受限 Google Drive 資料夾，網站的 SOURCE/CHAPTERS/EXPECTED_COUNTS/FIRST_IDS 依序補充。
- **每次交接規則**：完成後更新此 README、`learning/README.md`、`learning/atpa-modules/README.md` 及根目錄 `README.md`。如需修改任何已存在的 Google Drive 私人教材，先備份進原資料夾下 `_backup`，保留原檔 ID、名稱、位置及權限。

## 2026-10-14 最新交接｜§1.6 Missing and Extreme Values 全部 29 小節完成

**本段為最新有效進度。** README 上方其他完成節數仍保留作為歷史記錄。

- **網站**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s161 ，站內左側新增「1.6 缺失值與極端值」29 節。
- **累計進度**：1.1(36) + 1.2(38) + 1.3(70) + 1.4(16) + 1.5(21) + 1.6(29) = **210／223（94.2%）**。下一批 §1.7 Case Studies 13 節；未完成前不可對使用者聲稱全章已完成。
- **官方來源**：本 Project 上傳 `ATPA_Official_Modules_1-4_Combined(1).pdf`，Module 2 印刷 p.215–244（合併 PDF 0-based pages 287–316）。§1.6.23 跨 p.237–238，p.238 是 Component Table219 的續頁，沒有獨立的 §1.6.n 標題；製作時必須隸屬同一節。
- **新受限 Google Drive 教材**：`ATPA_Module_2_1.6.1-1.6.29_私人雙語教材.html`，fileId **`1qQyqkrgtUBSz4AgjhHI1mxp5x7OXm6si`**，父目錄 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，1,189,690 bytes（text/html），SHA256 `41cb331e6275c0d75c4a4ed77414e9d483ec569579a7b7377dff564d03be072f`。Google Drive metadata 已驗證 owner + 具名 reader、無 anyone/domain。
- **內容品質**：29／29 個獨立編號 `section.lesson`、29 個 `.pair`（含完整官方英文來源文字與逐節繁中詳細解說）、29 張精算教師卡、87 個 Reusable English 語塊、20 張官方 PDF 原頁截圖（含 p.223 PDF 文字層遺漏的 permutation variance 公式、p.238 跨頁 Callout）。原書 29／29 節英文字元與 PDF `get_text(sort=True)` 直接擷取對照相符；中文內容為逐節翻譯與教學解說，部分長段為合併式翻譯，尚需人工逐句語意校對，不可誤稱完成逐句校對。
- **核心涵蓋**：MCAR、MAR、MNAR、置換檢定七步驟與 T=90.8、重排近似變異數、mean/median regression/KNN/CART/mice/autoimpute 插補、missing target 的資料處理、Exercise 2.6.1（automobile.csv 六項任務）、z-score/LOO、三組 cutoff 對應刪除率、轉換/移除/截尾/百分位/保留、DBSCAN ε/minPts 參數及18筆離群示例。
- **忠於原書**：保留原本的 Source Links、R/Python CHUNK 編號和 PDF 原圖。官方 CSV／Rmd 並未在此批執行，**沒有製造 permutation test p-value 或 Exercise 2.6.1 數值解答**；實務應在下一階段補驗算與真正可執行程式。
- **GitHub 變更**：`module2.js` 新增 `SOURCE["2:12"]`、`CHAPTERS["1.6"]`，`EXPECTED_COUNTS=[12,19,5,14,14,10,20,20,30,16,21,29]`，`FIRST_IDS` 新增 `s161`，驗證 210 unique IDs；`module2/index.html` 使用 `module2.js?v=20261014-sec16-complete` 刷新快取。四個按鈕仍依序 **全英文、全中文、上中文下英文、左英文右中文**；持續維持單一長頁、Google OAuth 私人載入。
- **尚待端對端驗收**：GitHub Pages CDN 立即可用性、使用者 Google OAuth、iPhone/iPad/Mac 四模式渲染及滾動效能（新增約 1.2 MB 原稿）、各圖像放大效果、複選/單選題與可展開區塊。静態校驗不等於真正使用者裝置驗收。
- **下一批**：§1.7 Case Studies，原書 p.245–257，共 **13 個編號小節**；製作後更新網站 `SOURCE["2:13"]`、`CHAPTERS["1.7"]`、`EXPECTED_COUNTS` 和 `FIRST_IDS`，合計應 **223 個**。請完整保留兩個原書 Case Studies、所有官方題幹與 Sample Answers，並清楚區分原書解答與另外提供的精算教師解析。
- **交接紀律**：每次完成同步修改此檔、`learning/atpa-modules/README.md`、`learning/README.md`、根 `README.md`。修改既有 Drive 私人 HTML 前先建立 `_backup` 時間戳備份、保留原 file ID 與權限。新來源繼續只放 Google Drive。


## 2026-10-14 最新交接｜§1.7 Case Studies 完成；Module 2 共 223／223 編號小節

**本段為目前最新有效的進度紀錄。** 先前出現的 50／74／144／160／181／210 節進度為歷史記錄，皆已由本批 223 節狀態取代。

### 正式網址、進度與來源

- **私人雙語閱讀網址**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s171 。維持單一長頁、固定左側／手機章節目錄。
- **SOA ATPA Module 2 官方 2023-04-06 主 PDF**：原書總 259 頁。§1.7 Case Studies 位於印刷 p.245–259（其中 §1.7.13 Bibliography 跨 p.257–259），在本專案 `ATPA_Official_Modules_1-4_Combined(1).pdf` 中為 0-based pages **317–331**（Module 2 p.1=combined index 73）。
- **最終合計**：§1.1 36 + §1.2 38 + §1.3 70 + §1.4 16 + §1.5 21 + §1.6 29 + §1.7 13 = **223／223 個編號小節**。此數字指官版主教材的小節已納入網站，**不等於案例附件 ZIP／PDF／Rmd 已全數取得、實際運算或中文逐句校對完成**。
- **本批新私人檔案**：Google Drive `1eR9g8wl5_ZKxCl5eXrWTtSQmS1OE26tZ`，檔名 `ATPA_Module_2_1.7.1-1.7.13_私人雙語教材.html`，parent `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`；`text/html`；**1,324,402 bytes**；SHA256 `e947f83679a29c23fadf103fdf439acd6220e9c96caead6379e621ebb643ff1e`。Google Drive metadata 讀回為 owner 與具名 reader 權限，沒有 anyone/domain。
- **內容驗收**：13／13 `section.lesson` 與連續 `s171`–`s1713`；15 組 `.pair`（13 節，其中最後 Bibliography 3 頁）；13 張 teacher notes；39 個精算實務英文語塊（每節 3 個）；9 張直接從使用者上傳原 SOA PDF 擷取的原頁 JPG，內嵌私有 HTML；8 組原書外部連結。PyMuPDF `get_text(sort=True)` 在移除每頁統一頁眉與頁碼後，與存入 HTML 的全部 **15／15 英文來源區塊完全一致**，其中含 bibliography p.257／258／259 三頁。
- **網站程式**：`learning/atpa-modules/module2/module2.js` 的 `SOURCE["2:13"]` 指向新 Drive ID，`CHAPTERS["1.7"] = Case Studies／案例研究`，`EXPECTED_COUNTS=[12,19,5,14,14,10,20,20,30,16,21,29,13]`，`FIRST_IDS` 最末為 `s171`，總節數 guard = 223 unique section IDs。 `module2/index.html` 的 JS/CSS cache rev `20261014-module2-complete`。保留 4 模式（全英文、全中文、上中文下英文、左英文右中文），預設上中文下英文，使用者模式記錄共用 `localStorage`。
- **GitHub 公開倉庫保護**：主 PDF 英文全文、翻譯、練習及官方截圖僅儲存於具名授權 Drive HTML；公開倉庫只更新來源 fileId、HTML shell、JS/CSS 和這份 README。

### 案例及官方答案的完整性界線

- **案例 1｜Website Visit Duration (§1.7.3–1.7.6)**：原書主 PDF 的案例敘述與 §1.7.4 提供的 **3 項官方解答** 已完整保留：重現可能性對 outliers 的影響、target leakage、依用途考量 fairness；§1.7.5 的資料準備溝通任務完整保留。原書附檔 `atpa_2_7_cs11.pdf` 詳細題目、`atpa_2_7_cs12.pdf` Sample Report，以及 `atpa_2_7_1_r.rmd`／Python Rmd **尚未取得**。
- **案例 2｜Chiropractic Visits (§1.7.7–1.7.12)**：§1.7.7 的 NSC 完整情境（questionnaire.csv、visits.xml、2015–2018 年逐次訪次、2018 年 target）、§1.7.8 官方 A–G 七項資料問題，以及 §1.7.10 **6 項官方資料處理決定**（延長／重新預約比例、以 2017 年訪次作前期特徵、340 人中 5 人約 1.4% 年分不一致、surgery 缺值補否、why_visit 多個 0/1、how_heard 合併為 referral/radio ad/internet search/other）均保留原文與繁中詳解。原書 `atpa_2_7_2_r.rmd`／Python Rmd、`atpa_2_7_cs23.pdf` Sample Report、個案 CSV/XML 原始檔 **尚未取得及執行**。
- **官方 source link 限制**：原書 §1.7.2 明載 `2.7_case_studies.zip`，但合併 PDF 的該段 [BEGIN LINK] 不合邏輯地指向前一節 DBSCAN 部落格；網站以註記明確揭露，不虛構 ZIP 的正確下載網址。其他 SOA CDN 連結依 PDF 原文保留，但目前網路讀取未成功，**不得宣稱那些外部附件已被併入網站或完成外部 Rmd 的計算結果**。
- **§1.7.13** 原書 bibliography 的 p.257–259 全部引文與排版文字保留在原文，中文另外按原書順序逐筆說明用途。原書誤植 `Module 4 Learning Objectives` 仍原樣保留，並於教師卡註記。
- **考試作答價值**：對觀測單位、資料年度、前期 predictor、資料內部一致性、imputation、類別變數重新編碼、outliers、target leakage，以及以 actuarial memo 表達資料清理理由，均有逐節中文教學卡與 3 組可直接套用的英文語塊。
- **驗收限制**：已核對原書英文文字層、HTML 章節結構、Drive metadata 權限與 GitHub 程式碼靜態語法。Google OAuth 以擁有存取權的真實使用者登入後完整載入、手機／桌面四模式實際版面、9 張原書截圖呈現、原書外部資料實際程式運行、英文附件完整內容與中文逐句人工複校 **仍待完成**。

### 後續維護次序（核心工作）

1. **實機驗收**：請使用者持有 Drive 讀取權的 Google 帳號開啟正式網頁，驗證 223 段、左側目錄 §1.7.1–§1.7.13、四模式，尤其 `#s171`、`#s178`、`#s1713`。若 Google 授權失效、載入時間過長、iPhone 字太小，按實際反饋修復。
2. **取得未隨 PDF 附上的 SOA 官方案例資料／範例報告／Rmd**，逐筆確認原書連結現況後保存在受限 Drive，不擅自上傳 GitHub。取得後可擴充 §1.7.3/§1.7.4/§1.7.6/§1.7.7/§1.7.10/§1.7.12，區分官方來源和教師分析。任何原私有檔案修改先做 `_backup` 時間戳備份並保留原 ID、路徑、權限。
3. **深度翻譯校稿／可執行程式**：本批英文原文逐頁驗證通過；中文已逐節詳解但尚可進一步改成逐段更細的原文－譯文對位。官方附件未取得前不編造結果；原書及範例實作獨立版本控制。
4. 更新本 README 及 `learning/atpa-modules/README.md`、`learning/README.md`、根 `README.md`。凡與上方歷史紀錄有衝突，以最新本段及 GitHub／Drive 即時狀態為準。


## 2026-10-14｜跨模式閱讀位置保持（最新 UX 修復）

- Module 2 完成的 223 節不變，私有資料來源與所有原文未修改。共用閱讀器 `module2.js` 新增 `captureReadingPosition/restoreReadingPosition`，切換四種語言模式時鎖定目前閱讀段落（含大型 PDF 來源 pair），避免滑動到其他小節。
- `module2/index.html` JS 更新到 `?v=20261014-reading-anchor1` 強制刷新舊快取。首次載入及深連結 `#s171` 不強制保留舊 scroll。
- 靜態語法已通過；本地 Chromium 三種長頁定位情境、24 次四模式往返皆維持同段。正式登入與 iOS Safari 尚待確認。

## 2026-10-14｜四種閱讀模式切換不跳頁（Module 1／2／3）

- **使用者要求**：閱讀長頁到某個段落時，按「全英文／全中文／上中文下英文／左英文右中文」，必須停留在**相同教材段落、相近的螢幕位置**，不可因內容長度變化跳到其他段落或小節。
- **正式修正**：`learning/atpa-modules/reader.js`、`learning/atpa-modules/module2/module2.js`、`learning/atpa-modules/module3/module3.js`。四個全頁語言模式及資料來源未變動。
- **技術處理**：在閱讀按鈕 `pointerdown` 時先保存當下可見的穩定雙語 `.pair` 或圖表錨點，避開切成全英文時會隱藏的 `details.tutor` 與 `details.phrases`。切換後依同一元素和垂直閱讀比例補償 scroll，暫停平滑捲動及瀏覽器自動捲動錨定；在重排的連續影格與延遲 110ms 時各做一次校正，支援 iOS Safari 的工具列 focus／viewport 變動。使用跨瀏覽器 `behavior:"auto"`。
- **三個站的 JS cache rev**：`reading-anchor2`（如再次調整程式碼必須更新 query 版本避免手機快取舊程式）。
- **驗證範圍**：三份 JS 已通過靜態語法檢查、四種按鈕仍保留。Chromium 以自建 140 節長文模擬桌面 1280×850 與 iPhone 尺寸 390×844，連續切換 `en → zh → vertical → parallel → en → vertical`，選定的同一段落始終維持在可視範圍。**尚未在使用者真實 Google OAuth 私人教材的 Safari／iPhone 上完成端對端驗收**。
- **下一步若使用者仍見跳頁**：索取實際 Module、節號、切換前後模式及機型；優先檢查被隱藏的教師卡、瀏覽器自動錨定和快取，不要把教材 DOM 拆成每種模式獨立重新載入。
