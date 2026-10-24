# 山田優《今日からはじめる 新AI時代の超独学スピーキングブック》私人雙語網站

## 2026-10-24｜SCENE 053–062 上傳失敗的復原紀錄（最新）

- SCENE 053–062 雙語課文已存入私人 Google Drive，網站閱讀入口已加入。日文 STEP 1–3 共 30 份、5,179 行原稿保留。
- 本輪檢查時，30 份中文 _ZH.txt 在實際工作目錄均不存在，僅留日文原稿與翻譯 QA 雜湊紀錄。SHA-256 無法用來復原譯文檔。先前嘗試上傳 12 份均回報 container_path was not found，未成功。
- 新增私人 Drive 復原清單 SCENE053-062_recovery_audit_20261024.csv，檔案 ID 1VMNV9fW771_MnxUUh-oNkA4wCou07Noq，包含逐份原稿 SHA-256、行數與記憶比對。
- 原稿共 5,179 行；先前已驗證譯文庫可逐字匹配 2,466 行（含重複），含日文假名 2,181 行中可精確重用 1,105 行，其餘須重建與人工校訂。
- 實際進度：雙語課文 62/100 課；含 STEP 1–3 已交付完整 Prompt 的課程 52/100 課。SCENE 053–062 尚未能開放完整三 STEP 中文 Prompt。
- 下一步：重建遺失的 30 份譯稿，保留英文及 IPA，完成逐行 QA；確保有可讀取的實體檔及導出 file_ snapshot，再上傳私人 Drive 並下載讀回，最後接入 GitHub 練習控制器。
- 原有 SCENE 001–052 保持不變；版權教材及 Prompt 內容只留私人 Google Drive。

---

## 2026-10-14｜第 7 批結案：SCENE 043–052 完整教材與三 STEP Prompt（最新）

**完整課程：52／100；本批 10／10 課完成檔案交付和程式靜態驗收。**

- 私人雙語課文：`Yamada_Speaking_SCENE043-052_TEXT_ONLY_v2.html`，Google Drive ID `1HO-aSqALcN0ZmIfAASLD-Yk0DCM5X0Y-`；原始增量教材及既有 SCENE 001–042 正本保留，不在公開 GitHub 暴露教材全文。網站從私人 Google Drive 登入後讀取英日、英中內容；上下與左右對照各自完整保留英文。
- **30 份日文 Prompt + 30 份繁中直譯**：SCENE 043–052 每課 STEP 1／2／3，來源資料夾 `1PFLmOmRKod2E6Quc_X9aN-SsJpb6xzuB`。前 15 份（043–047）已在 Drive 並以先前 QA 檔 SHA-256 再比對；本次重建後五課（048–052）缺少的 15 份譯稿，並全部新增到同一私人資料夾。
- QA：**30／30 份在 Drive 讀回與本地成品逐位元一致**；逐份日中行數相同，合計 **5,312 行**；2,760 行不含日文字元的原文行未更改；253 行含 IPA 發音符號的原文與譯稿對應檢查通過；0 筆漏譯假名及格式違規。練習觸發詞 `レッツスタート` 按原文保留。2026-10-14 本次 QA 紀錄 Drive ID `10avRboMA70qUHLU8F0K4a98DMhFHjuN3`（`SCENE043-052_Final_QA_20261014.csv`）。
- 網站：新增公開控制器 `scene-batch07.js`，僅儲存 60 個受限 Drive 原稿／譯稿 ID，不存放 Prompt 內容。支援 STEP 1–3 切換、完整 Prompt 複製、日中逐行對照、ChatGPT 開啟方式；`index.html` 已載入新控制器並更新版本；`reader.js` 完成度顯示 SCENE 001–052。
- 本地來源驗證：私人 HTML 五份合併後，共 52 個連續、不重複的場景 ID；本批十課皆有原文英文、繁體中文說明和三 STEP 內容。GitHub JavaScript 語法與 Manifest 資料配置待讀回最終確認。
- **驗收限制**：Google OAuth 正式登入、GitHub Pages CDN 實際載入、iPhone/iPad/Mac Safari 及朗讀互動尚未端到端測試；不將其列為已通過。
- **下一批**：SCENE 053–062，十課英文原文／日文與繁體中文、30 份完整 Prompt，來源與譯稿均須留存私人 Drive，完成 QA 再更新網站。

---


## 2026-10-14｜第 6 批完全結案：SCENE 033–042 三 STEP Prompt（最新）

**完成情形：完整課程達 42／100，雙語課文與完整 STEP 1–3 口說練習及對照，皆至 SCENE 042。**

- 原始日文 30 份：SCENE 033–042 每課 STEP 1／2／3，私人 Drive 原稿不變，合計 **5,322 行**。
- 繁體中文直譯 30 份已上傳至私人 Drive 原 Prompt 資料夾 `1PFLmOmRKod2E6Quc_X9aN-SsJpb6xzuB`；**SCENE 033、034 使用經校正的 `_ZH_v2.txt`**，網站 manifest 指向 v2；其餘 035–042 為 `_ZH.txt`。既存舊檔保留不覆寫。
- 驗收：逐檔行數完全相同；原文純英文 2,777 行逐字不改；237 行 IPA 符號核對通過；沒有缺譯標記或非預期日文假名（練習觸發口令 `レッツスタート` 按原文保留）；**30／30 份翻譯上傳後重新下載，SHA-256 與本地成品逐位元一致**。抽查檔案權限 owner-only、父資料夾正確。
- QA 追蹤 `SCENE033-042_translation_QA_20261014.csv`，私人 Drive ID `1nuhqNcu_20gFqfwzKRSxvAVCdjQre7RJ`；逐筆記錄原文／譯稿行數、英文行數、IPA 行數、譯稿 SHA-256。
- GitHub UI 更新：新增 `learning/english/yamada-speaking/scene-batch06.js`，內含 SCENE 033–042 的 30 組日文與 30 組譯稿私人 Drive ID，提供課文閱讀、口說練習、全文複製，以及逐行日文／繁中對照；`index.html` 增加腳本及版本 cache-bust，`reader.js` 進度至 042。**公開 GitHub 僅程式及檔案 ID，沒有教材全文。**
- 四模式規格延續：英＋日、英＋中、上下對照、左右對照；上下／左右顯示兩個完整版本時英文在各版本皆保留，不合併共用。
- 已完成 GitHub commit 寫入及 JavaScript 靜態語法檢查；**正式 GitHub Pages Google OAuth、iPhone/iPad/Mac Safari 與英文朗讀互動等真實瀏覽器端到端測試尚未執行**。
- 下一批 **SCENE 043–052**：先核對原書及 30 份日文來源，再一次完成十課雙語課文、三 STEP 中文直譯、私人 Drive 讀回驗證及網站整合。目標 **52／100**。

---


## 2026-10-14｜第 6 批 SCENE 033–042 雙語課文已完成（Prompt 尚待驗收）

- **原始依據**：私人原書 PDF `1sGQoKXyXvAWflI6iucbOl0x1qliTW6St`，SCENE 033–042 印刷 pp.090–109；原始日文 Prompt 皆自私人 Google Drive `1PFLmOmRKod2E6Quc_X9aN-SsJpb6xzuB` 讀取，共 **30 份、5,322 行（本地 splitlines 計數）**。
- **新增私人教材**：`Yamada_Speaking_SCENE033-042_TEXT_ONLY.html`，Google Drive file ID `1bqd7gB0XJFS_9OIhaq970GFX3IW-Pfps`，parent `1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`。建立 10 個依序編號場景、30 個英文關鍵句型、96 句英文模型對話及 141 組日文／繁中配對段落，含 STEP3 參照資料。英文模型對話以各課原始 STEP2 TXT 的編號對話為來源。
- **正本不變**：未覆寫原有私人教材 HTML，另以增量檔加入第三個私有教材來源；原日文 Prompt 完全不變，私人檔案仍 owner-only。
- **完整性 QA**：上傳後重新下載增量 HTML，逐位元 SHA-256 完全相同 `c197e1284f38b8a065f91fbaf7ffde5228efa1226ec87d8068758944263bb02c`；10 個 chapter ID、關鍵句型、模型對話及日中 pair 結構均通過本地解析。
- **網站更新**：`reader.js` 加入第三個私有補充檔並驗證 SCENE 033–042；`reader-localization.js` 套用已定版四模式（英日、英中、上下、左右，對照模式英文兩側皆完整）；`reader.css` 新增 033–042 專注閱讀；`index.html` 加入十課入口及 cache-bust。
- **未完成**：SCENE 033–042 的 30 份 Prompt 仍需翻譯新場景專屬規則、角色台詞、IPA 註解及逐行驗收。原始日文與既有譯稿比對有約 65% 原稿非空白行可以精確重用既有翻譯，剩餘不可自行當成已翻譯。**本批不新增 10 課至完整完成數**，也不在網站呈現尚未驗收的 Prompt。
- **進度**：雙語教材 SCENE 001–042＝**42/100**；包含 STEP1–3 已驗收 Prompt 的完整課程＝**32/100**。瀏覽器端 Google OAuth／實機 iPhone Safari E2E 尚未完成。
- **下一步**：翻譯及驗收 SCENE 033–042 的 30 份 Prompt，儲存在私人 Drive，下載讀回後再更新網站練習控制器；待這 10 課完整結案才開始 SCENE 043–052。

---


## 2026-10-14｜第 5 批 SCENE 023–032 完成（最新狀態）

**完整完成進度：32／100 課**。本批 10 課均有英日／英中雙語課文、STEP 1–3 日文原始 Prompt 和其繁體中文逐行直譯，以及對照與複製練習功能。先前「023–030 的 24 份譯稿已完成」中途宣告缺少實際檔案；本輪已重新製作、逐行校對，並完成正式交付。下方較舊段落反映歷史進度，應以本段為準。

- **原書與課文**：原書掃描 PDF `1sGQoKXyXvAWflI6iucbOl0x1qliTW6St`；本批原書 pp.068–083（SCENE 023–030）與 pp.086–089（SCENE 031–032）。pp.084–085 為 Part 2 篇章切換頁，因此不能用固定「24+2×scene」公式套用 031 起的頁碼。
- **私人新增教材 HTML**：`Yamada_Speaking_SCENE023-032_TEXT_ONLY_v2.html`，Drive ID `1Pta3E50Aqq8iDei5fL73sOGwc-tPGmp_`，父資料夾 `1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`，owner-only；重新下載確認 69,102 bytes。所有 10 個 `scene-023`～`scene-032` 章節標示 verified，均包含關鍵英文、模型會話、日中 pair 與原書相關 STEP 3 表格／地圖。原 001–012 正本及 013–022 增量教材保持原 ID 與內容，未覆寫，所以不需觸發原地修改前的備份流程。
- **30 份繁中 Prompt**：原日文 TXT 30 份完整保留於私人資料夾 `1PFLmOmRKod2E6Quc_X9aN-SsJpb6xzuB`；新增 `SCENE023-STEP1_ZH.txt` ～ `SCENE032-STEP3_ZH.txt` 各 3 份，共 30 份。全部 **5,324 行**日文來源與中文譯文逐行對應。基於前 22 課既有翻譯建立逐行對照庫，補譯及核對本批各課專屬台詞、角色、地名、數值、評量規則、IPA。原稿 390 行 `EN:` 文字逐行完全一致；IPA 符號保留檢查無遺漏；不含因未翻譯而殘留的日文假名。SCENE 028 曾發現四行上下錯位，已校正後重跑全套 QA。
- **重新下載驗證**：30／30 份 Google Drive 譯稿逐位元與本地核定檔完全相同；30／30 metadata 證實父資料夾正確、`shared=false`、僅 owner 權限。
- **網站修改**：`reader.js` 載入兩份私人增量教材及私人原 HTML；`reader-localization.js` 維持四種閱讀模式（英日、英中、上下、左右）。雙語對照時英文在兩份版本中各出現一次。新增 `scene-batch05.js`，SCENE 023–032 均能透過 `?scene=023` ～ `?scene=032` 使用 STEP1–3 口說 Prompt、全文複製與逐行日中對照，所有 TXT 登入後才自私人 Drive 載入。 `index.html` 已增加程式引用與最新完成狀態，`reader.css` 新增 023–032 聚焦樣式；並修正 SCENE031、032 的頁碼顯示來源。
- **QA 分級**：GitHub create/update 成功，JS 語法檢查通過；私人檔案逐位元、行數、保護的英文、IPA、資料夾與權限驗證通過。正式 GitHub Pages、Google OAuth、iPhone／iPad／Mac Safari、語音與複製按鈕的真實端對端互動仍待實機驗收，**不能宣稱 E2E PASS**。
- **下一批**：SCENE 033–042（10 課、30 份 Prompt）。開始前再檢查私有原書頁碼與既有批次源檔；新增雙語課文時採增量 HTML，維持已完成 001–032 的資料與 GitHub 功能。

---


## 2026-10-13｜10 課批次 SCENE 013–022 全部完成（最新）

**交付結論：SCENE 013–022 共 10 課，完整雙語電子教材 + STEP 1–3 三份繁中 Prompt 直譯全部完成並整合到網站。全書目前 22/100 課。** 本段為最新狀態；下方早期「013–022 翻譯尚待完成」之描述是過往中途紀錄，現已由本節取代。

### 私有來源與網站

- 舊的私人 HTML 正本 `1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_`（SCENE 001–012）**完全不覆寫**，原有檔名/ID/位置/權限保留，故本批無需對該檔建立取代前備份。
- 新私人雙語教材增量 HTML `Yamada_Speaking_SCENE013-022_TEXT_ONLY.html`，Google Drive ID `18FEtT4P16OxKNj5-raxkFFsxvW8Vf2O9`，私人教材子資料夾 `1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`。大小 75,121 bytes，SHA256 `d1ade9dd4fae0e7af05b84e2512f5de017c35eeef678d41703f385512ff1f933`。建立後從 Drive 下載回讀確認位元組完全一致，owner-only 未公開。內容 10 個正式 SCENE `013–022`，**183 組日中翻譯 pair、26 個英文關鍵句型、86 行英文模型對話**。
- 原書 PDF `1sGQoKXyXvAWflI6iucbOl0x1qliTW6St`，本批核對 013–022 對應原書印刷 pp.048–067；SCENE017–022 為新製教材。原書有不尋常的時間記號時保留來源而不擅改。
- 私人根資料夾 `1PFLmOmRKod2E6Quc_X9aN-SsJpb6xzuB` 保存 **10 課 × 3 STEP＝30 份日文原稿與 30 份繁體中文直譯**。共 **5,095 行**日文原稿與譯稿一一對應，原文純英文 1,348 行逐行保持完全相同，日文假名不殘留；逐一校對 IPA 發音 token 需原樣保留，包括 015 STEP1 `/ruːm/` 與 018 STEP1 `/mɪst/`，兩處已補正。
- 13–16 共 12 份中文 TXT 已存私人 Drive；15 STEP1 IPA 勘誤另存新私人 TXT `SCENE015-STEP1_ZH_v2.txt`，ID `1gab7AWp4gn_I5fea9xOjUt2npZakN5mQ`，網站使用此修正版，舊版保留備查。17–22 新增 **18 份中文 TXT**，存放於同一私人資料夾。19 份本輪新建/修正版已由 Drive 再下載，**19/19 和本地成品完全一致**，metadata 驗證 **19/19 owner-only 且父資料夾正確**。先前上傳的其他 11 份 13–16 中文 TXT 已於同輪先前重新下載核對。
- GitHub 公開倉庫只存放界面：`reader.js` 驗證並載入「原 21 個 chapter + 新 10 個 chapter」，修復上一版把增量數錯當 4 課的致命條件；`reader-localization.js` 支援 SCENE001–022 英文在日文/繁中兩種版本各自完整保留；`reader.css` 依單課顯示；`index.html` 新增 017–022 選擇入口與 cache bust；`scene-following.js`（新）提供 SCENE013–022 的完整三個分頁及 STEP1–3 Prompt，私有 Drive OAuth `drive.readonly`，複製/開啟 ChatGPT/日中逐行稽核。任何版權教材/Prompt 文字**沒有**存入公開 GitHub。
- 網址 `https://wesleychen310.github.io/osaka2026/learning/english/yamada-speaking/?scene=022`，可用 `?scene=013` ～ `?scene=022`。
- **驗收層級**：私人 Drive bytes、原/譯文行數、保留純英文/IPA、檔案 owner-only、HTML 結構/成對資料、GitHub 內容/JS 語法可做靜態驗證；**真實 Google OAuth、iPhone Safari/ iPad/ Mac 與 GitHub Pages CDN 即時部署仍待人工 E2E 驗收**，不得標為實機 PASS。

### 全書進度與下一步
- **完成課程：SCENE 001–022＝22/100，尚有 78 課。** 「完成」指原書雙語教材與三 STEP 繁體中文 Prompt 均已建立並與 GitHub UI 整合；實機 E2E 屬另一驗收層級。
- **下一批：SCENE 023–032，共 10 課／30 份 Prompt**。依相同來源核對、保留兩份英文、逐行忠實翻譯、保護私人 Drive、上線 GitHub 與完成進度回報的標準處理。

---


## 2026-10-13｜已上線 SCENE 001–011 四模式雙語閱讀修復（最新）
- **需求定版**：英文是原書教材的一部分，與日文原文及日文的繁中翻譯各自組成一個完整閱讀版本。日文版＝原書英文＋日文；中文版＝同一份英文＋繁體中文；上下對照＝上英文＋中文、下英文＋日文；左右對照＝左英文＋日文、右相同英文＋中文。不可抽出英文共用，也不可改寫英語。
- **修正位置**：只更新 GitHub 公開 UI：`reader-localization.js`（新）、`reader.js`、`scene001.js`、`reader.css`、`index.html`。私人 Google Drive HTML `1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_`、11 課日文 Prompt 和繁中直譯原稿均維持原 ID／檔名／權限／內容，**這批未覆寫私人原檔，故未執行備份動作**。
- **處理方式**：登入後先將既有私人教材的每個英文關鍵句型、英文模型對話、菜單／地圖／表格／檢查清單、SCENE 001 書末英語對照列拆為獨立原文及翻譯展示版本，各版均保有英文。原始日文與既有中文由 DOM 複製與依語言顯示，沒有另存至公開 GitHub。原有 TTS、Prompt 複製和 Google Drive OAuth 資料讀取保持原邏輯；SCENE 001 菜單與 SCENE 002–003 原書表單的雙版本動態重建同步修正。
- **語言清理**：章節標題、STEP 標題、回顧標題在四模式下分開顯示原文／翻譯；英文 `Task` 保留不翻；SCENE 005 一處中文說明漏顯示的 `city center` 已在顯示層補回，未擅自覆寫私人 HTML 原稿。
- **結構 QA**：正式私人 HTML 的 SCENE 001–011 逐課核查，**29 組英文關鍵句型、22 個英文內容區塊、8 行書末對照，共 162 個原始獨立英文元素**，每項都有原文／翻譯兩個顯示版本；上下／左右模式計 324 個英文呈現位置（動態生成後），兩份英文文字應相同。對照卡內部已取消重複的 50/50 嵌套網格，手機版仍保留完整雙欄。這是來源結構與程式碼靜態驗收，並未以實際登入畫面逐一點擊查驗。
- **尚待實機驗收**：GitHub Pages 上線 CDN 狀態、Google 登入、TTS／複製、iPhone 直式四模式及 iPad/Mac Safari，尚未完成真實端對端檢查；不可標註 PASS。
- **累積進度**：SCENE 001–011 已完成雙語閱讀程式修正；12 未列為正式上線完成；全書計數仍 **11／100 課**。**下一步**：待實機確認後接續第 3 批 SCENE 012–016；新增教材前先依 SOP 備份並維持私人正本的 file ID、名稱與位置。

---


## 2026-10-13｜第 2 批完成：SCENE 007–011（目前最新）

已接續第 1 批製作五課，採用使用者保存的日文 Prompt TXT 逐行譯成繁體中文，僅翻譯日文；原英語句型、讀音符號、原始操作規則及序號照原檔保存。課文與原圖/圖表以私人原書 PDF 印刷 p.036–045（PDF 第 20–24 張）核對，沿用既有私人 HTML `1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_` 的 SCENE 007–011 完整課文、四閱讀模式與原樣重建圖表，無需覆寫原 HTML，故此批沒有執行既存 HTML 檔修改／備份。

### 本批交付與品質校驗

| SCENE | 主題 | STEP 1／2／3 原文＝譯文行數 | 私人繁中譯稿 Google Drive File ID（按 STEP 1／2／3） |
|---|---|---|---|
| 007 | 購買交通 IC 卡 | 199／169／137 | `1mxZJZJK0Z0rV39nTfbsoaPXyEAztIxiz`、`1SQvhh1WMViCZImXLh3H9U_ru5enAYCzu`、`1a53iMi8nd3eDsTdSMpLQ7PAdchNot9Og` |
| 008 | 詢問應搭哪班電車 | 417／148／181 | `1t58Ja8wFyTpvkCVK0IHCGJGJ1SF2Tj7R`、`1cGeNrhsSpuBGsIp_n-sNyjtMz-PU8wPD`、`1d1BkZdFK_Ts2Cr3oQQ7AHaQbhUxfSE4_` |
| 009 | 詢問電車延誤 | 186／165／149 | `1Wd0I4rOTKq5qNe3FHLj7y6uAZK_b0M0d`、`1zEN2wHH2-TQVWgaYtuvK72Bop4NAhuPW`、`13iBopI2BbtgLuHzQ_bMK1IvR_mJsvbbn` |
| 010 | 購買 SIM 卡 | 177／170／142 | `1VaS4nN34GGRMzqN_0AoFJcD7sbS_V6Li`、`1ve841iDV8B4D-eBYZRmSDhGUGFb2vwB7`、`1rHbZzViJ_5uxyFedRwTEbanfxmRh2Zxd` |
| 011 | 飯店辦理入住 | 195／173／147 | `1nNVxpwbWZlrrSsU7_0kl8O4UhHrxVQYz`、`1ir7U4UAqYKspog-vUyAJAUfX2xWFK2i9`、`1jnlNMTJNVdvP24ex7SUYNkhGdl224O8Z` |

- 全部 **15 份原日文 TXT 與 15 份中文 TXT** 對應，**2,755 行**原文與譯文行數完全一致；254 行純英文檢查保留，無日文假名殘留。保留原檔中混排 `JP:` 與 `EN:` 標籤，標籤後的日文已翻成中文。
- 15 份繁中譯稿已上傳至私人山田優 Google Drive 根目錄（folder `1PFLmOmRKod2E6Quc_X9aN-SsJpb6xzuB`），另下載一次，逐位元核對 **15/15 相同**；metadata 讀回確認 **15/15 owner-only、沒有 any/domain 分享、父資料夾正確**。原日文 15 份完全不改。
- 嚴格遵循原稿包含不一致與重複資訊。例如 **SCENE 008 STEP 1 日文原始 TXT 有 417 行，含重複片段**，忠實譯稿保留 417 行；若未來要清理須另外取得授權，不得視為翻譯完成後可自行刪除。
- 原書 PDF 第 20–24 張影像核對：007 押金 $5／卡費 $20／實戰儲值 $35；008 Platform 1–6、Ticket Gates 及 Platform 5 方向；009 10:10／10:15 Delayed 電子看板；010 三 SIM 方案 3GB 7 days／10GB 14 days／Unlimited 30 days；011 飯店入住 5 項 checklist。上述既有 HTML 已電子化，英語原文沒有轉寫至公開 GitHub。
- 公開 UI 控制器 `scene001.js` 延伸至 SCENE 001–011，依 `?scene=007` 等參數登入後讀取私人 Drive 的原文及直譯；原舊「台灣在地化版」版本切換鈕在練習卡中移除，保留唯一中文直譯；日中逐行全文另在對照頁。CSS 隱藏原舊改編 Prompt，新增 007–011 聚焦與 iPhone 兩欄支援；首頁課程入口、版本 cache-bust 更新。
- **驗收分級**：GitHub 寫入成功，腳本語法核對完成、15 份 Drive 譯文下載回讀與 owner-only 權限確認完成。外部 GitHub Pages live、Google OAuth 與 iPhone/iPad/Mac Safari 互動尚未實測；目前不可標記 E2E 通過。
- **全書進度：11/100 課（001–011）；第 2 批 5/5 完成。下一批 SCENE 012–016**：012 已有私有 HTML 初稿；013–016 須由 PDF 正式製作新課文與內容頁，更新私人 HTML 前應先在同資料夾 `_backup` 備份，維持原檔 ID、名稱及位置。

---


## 2026-10-13｜第 1 批完成：SCENE 002–006（正式生效）

本批依使用者核准的標準，一次完成五課，延續 SCENE 001 的日文原文／繁體中文逐行直譯、AI 練習與閱讀模式。**本文頂部此節為最新狀態**；下方「002–012 台灣在地化」等內容為歷史紀錄，已由此次 Drive 直譯 TXT 與網站新控制器取代。

### 來源、直譯與完整性

- 私人原書 PDF：`1sGQoKXyXvAWflI6iucbOl0x1qliTW6St`；已比對 PDF 第 15–19 張雙頁，對應原書印刷 p.026–035（002–006 五課）。
- 使用者的私人 Drive 資料夾 `1PFLmOmRKod2E6Quc_X9aN-SsJpb6xzuB` 保留 **15 份日文原始 TXT**，並新增 **15 份繁體中文逐行譯稿**（每課 3 STEP）；原文完全保留。
- 逐行程式檢查：五課共 **2,467 行**，日中逐行數量吻合；源文純英語行逐行保留，中文譯稿無日文假名；15 份繁中 TXT 在 Google Drive 建立後另行下載，15/15 逐位元與本地成品完全一致。
- STEP 行數：002＝141／129／176；003＝184／152／173；004＝148／164／148；005＝185／176／172；006＝185／156／178。
- 私人譯稿 ID 按 STEP1／2／3：  
  - 002：`18KA9BmcvDwgLD3DBwCpOqKmXcvp9M73_`、`1efcTBEjV6NV9oy9vLkOUK1GzISHrsuVF`、`1t6LoRcu0OlcUaMgkTCoFXDIOwKHr-ljE`  
  - 003：`11I1szQ8E2SHgGO36Thbt4lnGGJhaGKl4`、`1HXU0GYzH8ga40Cwnxm7EV6x0NLRPGvb8`、`1cBC--LirKB9voZbVZ7e3Sz0aGHKuKkNr`  
  - 004：`1VYhRfIdXn0wBz9P0COzaOW00Uq1Yxriv`、`1_s36B73Ogmi6WtULov5s2cSyMDz0cUpN`、`1lKNXLd3wA5I07T8UIJbhJ4PyMYjBbIEL`  
  - 005：`1mZBLYV5HvoNRXuIZPyQQ7UbdfvOCBYyH`、`157i_6k3XRg_atid6REPcHEGI23Nz7-Qu`、`1JEM9oVZy5NfprbraqszkBhz4QQ5sQkg7`  
  - 006：`19eQ7KAJL-MbFkMM1hI3SmvG-lgrj3d9G`、`16LBlYsVpOr4Kxw3VC3G4z0ZKnWH3P6JW`、`1Zk_L1KmWPVvH4nCIOCtmb_8elMjYlr6t`

### 網站實作（公開 repo 僅含程式，不含原書）

- 網站：`https://wesleychen310.github.io/osaka2026/learning/english/yamada-speaking/`，可用 `?scene=002`～`?scene=006` 直接切換；原 `?scene=001` 保持可用。
- `scene001.js` 改為六課共用的 Prompt 閱讀／練習控制器；登入後才從私人 Drive 讀取正確課別的完整日文與中文 TXT，支持三分頁、STEP1–3、全文複製及逐行比較。JS 不包含原書文本。
- `reader.js` 支持 SCENE 個別路由；`reader.css` 擋掉私人舊 HTML 的改編 Prompt，避免舊文混入本次嚴格直譯。
- SCENE 002 入境卡恢復原書三欄勾選項；SCENE 003 行李說明備忘錄恢復表格布局；SCENE 004 原書匯率板數值全部保留；005 筆記區、006 A–E 路線地圖沿用電子化原件。
- 私人 HTML 正本 `1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_` 原檔名與 ID **未修改**，本批只修改 GitHub 公開介面並新增私有 TXT。原書、日文 TXT、繁中 TXT 仍為 Google Drive owner-only。

### 驗收狀態與待辦

- 已完成：五課的 TXT 逐行翻譯與 15／15 Drive 獨立下載驗證；GitHub 實際提交；公開 JS 靜態語法檢查；原書 p.026–035 圖像核對。
- 尚未完成：實際 OAuth 登入、Google Drive API 在 Safari 上的載入、iPhone/iPad/Mac 動態 UI、剪貼簿及 GitHub Pages 真實部署瀏覽器端到端驗收。靜態測試不能冒稱實機測試。
- 下一批：**SCENE 007–011**，仍用每批五課、原書雙頁核對＋15 份原文及直譯＋私有 Drive＋GitHub UI＋README 驗收。長期缺檔追蹤：SCENE 092–100 的 STEP1 共 9 份在本次 Drive 日文源檔盤點中未找到。

---


## 2026-10-13｜SCENE 001 Prompt 嚴格日文直譯回復（目前優先生效）

使用者要求取消前一版「Taiwan Edition」重新設計。SCENE 001 STEP 1–3 的 **網站顯示與複製內容** 改為直接讀取私人 Google Drive 新存的三份繁體中文直譯文字檔。只翻譯使用者保存的日文文字，不增刪任何流程或改寫英語句型。原稿中的 Gemini-specific 英文、3 秒沉默要求、ASR 視為 Retry、回顧需依課本提示、STEP 2 對話結束後回饋、STEP 3 明確／自然結束條件全部保留。日文原稿不做更動。

| STEP | 私人日文原稿 ID | 私人繁體中文直譯 ID | 行數（原稿＝譯稿） |
|---|---|---|---|
| 1 | `1IWtKMTOjQhX0LuMXoUE4UnRe1i7JSCv1` | `17FbLFtPGIof7br3tGkThSCqHth76h0-z` | 142＝142 |
| 2 | `1a9josI4bwp6wjDzmjSAtrZ1usQRRax96` | `1C-96VaGUXcFryvr-lw5mkTq0IX1c4Ojg` | 124＝124 |
| 3 | `1sm72ObNm0j2eytSaLTG0E8K27WK-9mDL` | `1qEyhxq-n1dRN0vU1FWcSGOkfxaavTy5m` | 130＝130 |

- 所有六份 TXT 均置於私人專案根資料夾「山田優」：`1PFLmOmRKod2E6Quc_X9aN-SsJpb6xzuB`，Google Drive metadata 讀回確認中文三份未公開（owner-only）。
- 讀者在 Google OAuth 登入後，`scene001.js` 讀取相對應的原文／直譯 TXT；口說練習使用中文完整原稿，展開／複製按鈕取用當下最新文本。直譯讀取失敗時隱藏舊的改寫 Prompt，避免使用者複製錯誤版本。
- 「日文／繁體中文對照」分頁以每一來源行對應一個譯文行，保留所有英語、IPA、編號與空白段落。iPhone 直式保留左右雙欄。
- 自動校驗：STEP 1/2/3 分別 142／124／130 行一致；純英文行逐一完整保存 20/20、21/21、23/23；所有 IPA 斜線片段數量不變；STEP 2 原書八句對話英語維持完全相同；繁體中文稿沒有日文假名殘留。
- **重要**：舊 Google Drive 教材 HTML 正本 `1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_` 尚包含舊版改編 Prompt 內容，本次不覆寫，以免破壞其他 SCENE；SCENE 001 網頁已改由上述新的私有中文 TXT 作為唯一執行與複製來源。原備份 `1QJ6LdLR2EVAigYYKiKKzeUR6KDW-F6FN` 保留。
- GitHub Pages 網站、真實 Google OAuth/Clipboard、iPhone/iPad/Mac Safari 端到端測試尚未完成；GitHub 寫入與靜態測試不得誤稱為實機驗收。

---

## 2026-10-13｜SCENE 001 三分頁及私人教材原地更新（靜態驗收完成；實機驗收待完成）

### 版本與實際修改
- GitHub 只修改 `learning/english/yamada-speaking/` 公開 UI 程式（`index.html`、`reader.js`、`reader.css`，新增 `scene001.js`）。**原書、私人教材 HTML、三份日文 Prompt 全文均未放入 GitHub**。Google Drive 私人 HTML 正本已原地覆寫並由 SHA-256 讀回驗證。
- 介面新增 3 主分頁：**課文閱讀**（原有 4 閱讀模式，手機保留左右對照）、**AI 口說練習**（STEP 1–3、全文預設收合、複製與 ChatGPT 入口）、**日文原文／台灣版 Prompt 對照**（左側 Google Drive TXT 全文；右側私人 HTML 台灣版全文，含差異與理由）。
- 保留原有 `reader.js` 的 Google OAuth `drive.readonly` 與 `files.get?alt=media`、sessionStorage token；新增 `scene001.js` 在教材掛載後優先讀取同一份登入後的私人 HTML 所內嵌的三份日文 TXT；舊版 HTML 也可使用 OAuth 從三個 Drive File ID 讀取原始 TXT，但舊版台灣 Prompt 已停用客戶端全文修補；**不另存 access token，不將 TXT 寫入公開 repo**。
- GitHub 檔案 `reader.js` 的每份 Prompt 複製／開啟 ChatGPT 按鈕，改成點擊時讀取最新 `.prompt-body`，因此會讀取 SCENE 001 私人 HTML 已原地校訂的完整台灣版 Prompt。完整教學規則與修正內容不存放在公開 JS，網站只負責顯示、導覽和複製。
- **STEP 2** 將「對話中逐句 Retry」調整為原日文底稿規則：八句對話嚴守 CA／Passenger 輪次，結束後再一次提供四個乘客台詞的回饋／合格判定。
- **STEP 3** 移除自由會話進行中重試與評分，補明確及自然結束、最多額外兩回合、至少三項具體回饋與三種合格判定。依使用者指定的美式表達以 `Would you like rice or pasta?` 作為台灣版開場；原書印刷的 `Rice or pasta?` 留在課文閱讀。
- **Google Drive 原地更新已完成**：原始 HTML File ID `1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_` 保留原檔名、父資料夾及 owner-only 權限；更新前 296,282 bytes，更新後 311,566 bytes。已獨立重新從 Drive materialize 讀回，與送出版本以 SHA-256 完全吻合：`8af563d0281b63308d9b84d93077ec26c5ab0193c4603775a7b67c8b43bac9ee`。
- **日中校訂狀態**：雙欄目前可並列日文與台灣版的各自**完整 Prompt**，並顯示忠實翻譯、在地化、操作指令、教學改善之差異原因；**尚未建成每句一一對應的逐條翻譯表**。使用者保存日文 TXT 有 Gemini-specific 條文，尚未與出版社官方 ZIP 逐位元驗證，標記為「使用者保存的日文底稿」。

### Drive 檔案與備份
- 私人 HTML 正本：`1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_`，`Yamada_Speaking_FrontMatter_Scenes001-012_TEXT_ONLY.html`；父資料夾：`1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`，僅 owner 授權。
- 校對 PDF：`1sGQoKXyXvAWflI6iucbOl0x1qliTW6St`；PDF 文字層含辨識錯字，正式原文須以頁面影像核對。
- SCENE 001 日文：STEP 1 `1IWtKMTOjQhX0LuMXoUE4UnRe1i7JSCv1`；STEP 2 `1a9josI4bwp6wjDzmjSAtrZ1usQRRax96`；STEP 3 `1sm72ObNm0j2eytSaLTG0E8K27WK-9mDL`。
- 更新前備份已建立：`_backup/Yamada_Speaking_FrontMatter_Scenes001-012_TEXT_ONLY_20261013_1016_before-SCENE001-tabs-translation.html`，File ID `1QJ6LdLR2EVAigYYKiKKzeUR6KDW-F6FN`；`_backup` ID `1msKZUfeUDD2AviiIlogXWg1eXbzBUbPw`。**備份已完成，隨後正本亦已原地更新並獨立讀回比對**。另外保留更新後版本快照：`1TEMO9TGK5g8lTx9HIhKtw22bOzXSRxwr`。 正式最後一輪清除 STEP 3 Taiwan Prompt 中殘留的日文操作文字前，已另備份：`1YSnfT_0hotKe4lK4n3aQAeNueQqy1kaL`（`20261013_104706_before-JP-text-cleanup`）。最終 Drive 檔案大小 311,566 bytes、SHA-256 已再度讀回確認。

- 完整性自動核對：原 HTML 新舊皆有 21 章、12 SCENE，三個 STEP 新 Prompt 均存在、三份日文 TXT 檔全內嵌為私人來源，SCENE 002–012 DOM 結構未改；原書八句模型會話、Rice／Pasta 與飲料菜單全部保留。完整未授權公開，僅在 OAuth 後載入。

### 維護 SOP 與驗收門檻
1. 任何編修先以 Drive metadata 確認原檔 ID、檔名、父資料夾及權限；在同 folder 的 `_backup` 以時間戳＋原因建立備份，驗證 copy 成功再更新原檔。
2. 依 PDF 原頁 → 日文 TXT 底稿 → 出版社原始 ZIP（核實時）建立來源紀錄；逐條翻譯、標記差異類型，英文原句／IPA／菜單不改動。
3. 私人 HTML 保留 `#yamada-source`、21 個 `section.chapter` 的既有載入約束；正本經安全 raw-file 更新通道原地覆寫，保持 File ID、名稱、位置與 owner-only；讀回核對位元組、hash、section／pair 數量、STEP 1–3 的全部文字與下載後剪貼簿一致性。
4. GitHub CSS／JS 更新後提交 commit，確認 GitHub Pages 靜態回傳新檔、無 404；用 Google OAuth 登入驗證私人 HTML 與三個 TXT 均可取得，不記錄任何 access token。
5. 實測 iPhone 直式左右 50% 格、四閱讀模式；iPad/Mac；三主分頁與三 STEP；全文展開／複製／開啟 ChatGPT；音標、菜單、長文字、返回導覽、語音啟動與回顧流程。不可將靜態檢查視為 Safari 實機 E2E。
6. SCENE 001 取得使用者正式確認後，才將資料模型及檢查腳本套用於 SCENE 002–100；批次仍須逐課 PDF 對頁＋三 STEP 完整性審核。

### 尚未完成的正式驗收項目（Google Drive 原地更新及原始備份已驗證完成）
- 原稿日文與繁體中文**逐句、逐條逐字一一對應翻譯**；目前只有完整左右全文與變更類別標註。
- PDF 原頁圖片與印刷目錄的完整重建（目前菜單已使用保留英文原文的雙欄 HTML 重建，原書掃描圖像仍留在私人 PDF）。
- 出版社 ZIP 的逐位元比對，以及四個 PART ZIP／ZIP 外所有 Prompt 全量完整性重新檢查（已保留前次 291 份 ZIP 盤點紀錄）。
- 部署 CDN 即時生效、Google OAuth 真正登入、Safari iPhone/iPad/Mac E2E、Clipboard 語音模式與實機視覺驗收。未執行者不可標記通過。

---

## 2026-10-13｜Google Drive 專案集中管理（已搬移與驗證）

- 統一專案根資料夾「山田優」：https://drive.google.com/drive/folders/1PFLmOmRKod2E6Quc_X9aN-SsJpb6xzuB，owner-only。父資料夾為「英文學」。
- 根資料夾包含 SCENE001-STEP1.txt 等日文 Prompt 原始文字檔，並保留 PART1_SCENE001-030_PROMPT.zip、PART2_SCENE031-050_PROMPT.zip、PART3_SCENE051-082_PROMPT.zip、PART4_SCENE083-100_PROMPT.zip。
- 初次 Google Drive 根目錄清單為部分擷取，先前 176 個 txt／SCENE058 STEP2 缺漏的結論不具備全量證據，已撤回。**四個 PART ZIP 已在本地做壓縮檔 CRC 完整性與檔名交叉檢查**：PART1 90、PART2 60、PART3 96、PART4 45，合計 **291 份不同 SCENE/STEP**；對預期 100 課 × 3 STEP＝300，ZIP 確認缺 **SCENE092–100 的 STEP1 共 9 份**。ZIP 之外的單獨 TXT 可再清點，不能擅自推定遺漏是官方缺檔，須確認原書該課 STEP1 設計及另存版本。
- 子資料夾「山田優_新AI時代英會話_私人教材」原 ID 1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3 從 AI 資料夾原地移入統一根資料夾，未複製，保持檔案樹與 _backup。
- 正本 HTML Yamada_Speaking_FrontMatter_Scenes001-012_TEXT_ONLY.html，原 ID 1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_，當下大小 296,282 bytes，仍在上述子資料夾；GitHub reader.js 仍使用原 ID，無須變更 OAuth 路徑。
- 課本 PDF ChatGPT英會話_山田優.pdf，原 ID 1sGQoKXyXvAWflI6iucbOl0x1qliTW6St，40,838,035 bytes，從 AI 資料夾搬入教材子資料夾。
- 原 PDF 編修前備份 ChatGPT英會話_山田優_20261012_220804_before-OCR.pdf，原 ID 1F2o6883Y65Mib8x_7csmAidcv-AIOfG9，從 AI/_backup 搬入教材子資料夾內 _backup（ID 1msKZUfeUDD2AviiIlogXWg1eXbzBUbPw），原 ID 保留。
- Google Drive metadata 確認根資料夾／子資料夾／正本 HTML／PDF 均僅 owner grant。此輪僅移動父資料夾 metadata、無覆寫教材內容或私有 Prompt。
- **來源分級提醒**：統一根資料夾已能讀取日文語音 Prompt，例如 SCENE001 STEP1/2/3；其中出現 Gemini-specific 音訊操作條文，因此現有日文檔應標記「使用者保存的日文 Prompt 底稿」。在逐字比對アルク官方下載檔以前，不能直接認定所有文字都是出版社官方不變原稿。
- **下一步先驗收 SCENE 001**：將 3 個原日文 Prompt 的全部條件、流程、IPA、英文句型逐條映射至台灣繁體中文；左原文／右完整台灣版，教學及 Prompt 切換分層，正常閱讀預設收合長 Prompt。經使用者確認版面後再擴充 002–100。


## 2026-10-13｜SCENE 001 官方 Prompt 來源新增

- 使用者指定官方目錄：https://chatgpt-eikaiwa.alc.co.jp/contents/index.html （頁面標題 Contents）。
- **已發現官方提供文字檔的 Download 頁**：https://chatgpt-eikaiwa.alc.co.jp/downloads/index.html ，頁面明列 PART 1 SCENE 001-030「プロンプトテキストファイル」，另有 PART 2/3/4；官方音訊下載連結為獨立項目。
- **待取得**：上述 Prompt 文字檔的實際下載 URL／內容。一般網頁文字擷取工具讀得到下載品項，但未取到由 JavaScript 提供的 Prompt 檔案及逐課 STEP 原文；本輪仍不能把「下載項目存在」記為「官方原文已取得」，SCENE 001 STEP 1–3 官方全文目前核實 0/3。
- 本輪已將官方 Downloads 入口加至 SCENE 001 的 GitHub 學習網站。正式頁面僅提供來源位置與已核實狀態，台灣版仍標示私人改編；**沒有改動私人 Google Drive 正本，未開啟新備份流程**。
- 官方全日文 Prompt 的正式逐句左右對照，須先在可執行網站 JavaScript 的瀏覽器取得 PART 1 提示詞下載檔（建議用 ChatGPT Work 的 Cloud Browser），或在本人瀏覽器取得原檔後做來源核對。以原書日文課程指令代替官方網站 Prompt 的先前對照，仍僅供「原書 vs 台灣版」參考。


**最新版本：2026-10-13，SCENE 001–012 純電子教材＋36 份台灣版 AI Prompt；正式 Drive 正本 ID 1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_（原地更新）。**

## 讀者與架構
- 網站（GitHub Pages）：`https://wesleychen310.github.io/osaka2026/learning/english/yamada-speaking/`
- GitHub UI：`learning/english/yamada-speaking/{index.html,reader.css,reader.js,README.md}`。本 repo 為公開 shell，嚴禁放入受版權保護的原書文字、翻譯正文、原頁掃描、Google OAuth access token。
- Google Drive 私人資料：`Yamada_Speaking_FrontMatter_Scenes001-006_TEXT_ONLY.html`，File ID `1_HAX_tNh-8eI7A3ufDBGS7ZSFnm0MaEn`，folder ID `1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`，父資料夾是原 PDF 所在的 `AI` folder。
- 原 PDF：`ChatGPT英會話_山田優.pdf`，ID `1sGQoKXyXvAWflI6iucbOl0x1qliTW6St`，128 個雙頁影像；此 PDF 是排印權威來源。
- Web 透過原有 OAuth client 與 `drive.readonly` 以 Google Drive API `files.get?alt=media` 載入。**Google Drive 檔案權限 owner-only，絕不設為 anyone**。

## 四種閱讀模式（固定規格）
| 模式 | 日文 | 台灣繁中 | 英文 |
|---|---|---|---|
| 全原文 `ja` | 顯示 | 隱藏 | 顯示 |
| 全中文 `zh` | 隱藏 | 顯示 | 顯示 |
| 上中文下原文 `vertical` | 下 | 上 | 顯示 |
| 左右對照 `parallel` | 左 | 右 | 顯示 |

模式以 `yamada-speaking-language-mode-v1` 保存，不干擾其他教材，iPhone 狹窄 viewport 仍保留左右 50% 網格。

## 本批內容與完成狀態（2026-10-12）
- `cover`：書籍封面、扉頁，PDF 1–2，來源書影 + 書籍資訊。
- `preface`：原書印刷 002–003，日文與繁中全文，PDF 3，完成編輯轉錄及譯文。
- `toc`：PDF 4–6 原頁影像，**100 個場景的目錄全文仍待逐項 OCR 校訂，不標示完成**。
- `intro-why`：印刷 010–011，PDF 7，日中配對；`intro-goals`：印刷 012–013，PDF 8，日中配對；`intro-prep`：印刷 014–015，PDF 9，日中配對。
- `intro-page10`–`intro-page13`：PDF 10–13，已保留原頁圖片，**全文日文轉錄及譯文仍待校對**。
- `scene-001`，`scene-002`，`scene-003`：原書印刷頁 024–029，來源 PDF 14–16。三階段練習、全部英語鍵句、原書模型對話、情境、訓練重點、課後回饋以及供練習的原文菜單／卡片／備忘錄均收錄。
- 目前 SCENE **3／100** 完成編輯初稿。原書 004–100、其他前置頁面與附錄仍需批次建置，絕不因 OCR 有文字層就標記完成。
- 原書頁面圖片以私有 HTML 中嵌入 base64 JPEG 的方式保存，公開 GitHub 不會洩漏原圖；所有可見章節含原頁核對。
- Google Drive 讀回確認：`1cMjd--G7ZJwZyWEHrY35oezW18vUsMRz` owner-only，無 any/domain grant，約 4.20 MB；每批新增或覆寫需再次核對。


## 2026-10-13 電子版更新（目前正式使用來源）
- **新的私人教材**：`Yamada_Speaking_FrontMatter_Scenes001-006_TEXT_ONLY.html`，Google Drive File ID `1_HAX_tNh-8eI7A3ufDBGS7ZSFnm0MaEn`，父資料夾 `1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`。原先含掃描圖的 `1cMjd--G7ZJwZyWEHrY35oezW18vUsMRz` 保留為舊版本，閱讀器不再引用。
- **純文字排版**：來源 HTML 64,182 bytes，15 個 chapter、6 個 SCENE、104 個日中 pair、**0 個 img／0 個 scan**。保留源書 PDF 在 Drive 僅供編修者核對；閱讀網站不再出現整頁影像。
- **新增**：SCENE 004 両替をする（30–31，原始匯率板依原數據重建為 HTML table）；SCENE 005 市内への行き方を尋ねる（32–33，原書 memo 欄位）；SCENE 006 目的地への道順を尋ねる（34–35，原書 A–E 地標路線概念以純 HTML/CSS 重建）。三課各保留 STEP 1–3、全英文句型、模型對話、日中文段對應。
- **原始前置資料範圍**：完整前言及既有三組前置章節的文字保留；`toc` 和 `intro-page10` 至 `intro-page13` 仍為 `pending`、無掃描圖／無以 OCR 草稿替代的內容。標示待校訂，下一階段須補全。
- **修復重大載入問題**：舊 `reader.js` 將實際 12 個 chapter 誤驗證成 13 個，本次改為預期 15 個，含 `preface` 至 `scene-006`，並移除「每章必須有 .scan」舊條件，禁止含掃描圖的新版來源載入。
- **安全**：Google Drive 新檔 metadata 讀回 `mime_type=text/html`、`size=64182`、owner-only、無 anyone/domain、父資料夾保持；僅公開 shell/CSS/JS，無教材全文。
- **本批程式化核對**：15 個 chapters、10 個標記 verified、5 個明確 pending、104 組日中 pair、6 個 scene 全有 STEP 1/2/3、0 圖片。私有內容讀回可包含 SCENE 001–006。實際 Google OAuth／Safari iPhone E2E 與 CDN 生效仍待真人授權及裝置實測，不能宣稱通過。
- **回退**：上一版本 Google Drive source File ID `1cMjd--G7ZJwZyWEHrY35oezW18vUsMRz` 未覆寫；GitHub commit 歷史可回復 UI。再次修改現有 Google Drive 正本仍須先備份到同資料夾 `_backup`，保留 ID、父資料夾、分享權限。

## 2026-10-13｜SCENE 001 原書逐頁核對與版面驗收（待使用者確認）

### 範圍鎖定：只做 SCENE 001
- 使用者要求先完整呈現 SCENE 001 的原書掃描文字並審核版面，確認滿意後才繼續 SCENE 002 或後續課程。已保留 12 個 SCENE 的原有資料，但閱讀器**預設只顯示 SCENE 001**；網址 query `?view=all` 才顯示先前十二課，禁止宣稱其他章節本輪已通過校訂。
- 原書權威來源：PDF 0-based index 13，印刷右頁 **024**、左頁 **025**；書末日文對話譯文：PDF 0-based index 119，印刷 **236**。
- SCENE 001 原書完整文字：SCENE 001／Part 1 日常会話編／難易度 ★☆☆☆／機内／機内食を頼む／QR Code 練習引導／場面設定／練習のポイント／STEP 1 Key Phrase 2 句及回顧／STEP 2 原英文模型對話 8 句及回顧／STEP 3 原書 Main／Drink 英文菜單及回顧；0 張整頁掃描影像。場景日文原文逐段對照台灣繁中，英文原書保留。
- **本輪補齊書末 p.236**：SCENE001 STEP2 模型對話 8 句的原書日文譯文，另附 8 句台灣繁中譯文；開啟「原書第 236 頁」收合區檢視。
- 針對本課的五個標題，提供符合四模式的日/中標題切換：全日文、全繁中、上繁中下日文、左日文右繁中。其餘章節的標題與前置頁面仍待逐頁驗收。
- 本課三份 Taiwan Edition 已改為完整語音訓練版：原書全部兩句 Key Phrase、八句模型對話、Rice/Pasta 菜單與原文回顧題；啟動口令 Let’s start／開始練習、Slow／短語分段、Exact／Almost／Retry、最多三次、沉默與 ASR 辨識失敗分流、IPA `/wʌt kaɪndz əv/` `/kən aɪ/` `/ə kʌp əv/` `/aɪst/`、中文 Feedback。各 STEP 練習卡預設收合，不再打斷課本。
- **譯文稽核限制**：第二組使用者先前貼過的日本語語音 Prompt 尚未能以完整逐字原稿讀回，所以此回只能依已知規則獨立重寫 Taiwan Edition，**不能宣稱已完成第二組日文 Prompt 全文逐句左右對照**；官方出版社原文也仍是來源頁已知、Prompt 正文 0 份。原書教材兩頁與書末 p.236 的日文原文則可直接依掃描核對。

### 本次 Drive 原地更新與備份
- 正本檔名、File ID **`1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_`**、父資料夾 **`1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`**、owner-only 權限不變；更新後 **296,282 bytes**。
- 更新前完整備份：`_backup/Yamada_Speaking_FrontMatter_Scenes001-012_TEXT_ONLY_20261013_0811_before-SCENE001-FULL-AUDIT.html`，ID **`1meVY3G7dUn0wvXkiBCrU4RMpkrSMA8ip`**。
- Drive 最新正本重新 materialize，與本地生成檔 SHA-256 相同：`100472ffd589adcfc13cf1716a4104f476c628f22a6b1d98002fd1b386b40f28`；21 個 chapter、12 個 scene、211 組 pair（新增 p.236 八組＋QR 日中一組），0 張圖片，SCENE 001 具有 3 個 STEP 與 3 份台灣版語音 Prompt。

### 網頁操作和驗收級別
- 網站 `https://wesleychen310.github.io/osaka2026/learning/english/yamada-speaking/` 預設聚焦 SCENE001。`?view=all` 仍能看既有十二課。可直接跳 STEP1、2、3 及 p.236 模型對話翻譯；每 STEP 下的台灣版練習 Prompt 卡可展開、一鍵複製、開啟 ChatGPT，官方欄位待取得。
- GitHub 只修改前端 HTML / JS / CSS / README；未把原書與 Prompt 正文提交到公開 GitHub。
- 已執行 Drive 讀回雜湊、來源章節與句數計數、原始英日段落保留及 JS 語法解析；**尚未完成真正 Google OAuth iPhone/iPad/Mac Safari 端到端測試與使用者視覺確認**。在使用者明確驗收前，停止製作後續課程。

## 官方 Contents 入口校正｜2026-10-13
- 使用者提供且已核對之**官方全課目錄入口**：https://chatgpt-eikaiwa.alc.co.jp/contents/index.html ，標題為「Contents - ChatGPT英会話」。此頁有「日常会話／インバウンド／ビジネス／雑談・発展」分類。過去只追查官方首頁和 QR 深連結，忽略此 Contents 頁，是流程缺失。
- 目前一般網站文字擷取工具只能取回動態目錄的標題／分類，**尚未真正取得 SCENE 001 STEP 1–3 的逐字日文官方 Prompt**；原書 PDF 日文說明與官方網站日文 Prompt 必須分別標記來源，嚴禁相互替代。
- 先前製作的 SCENE 001 左右對照審稿 HTML，以**原書日文任務**為左欄，不能稱為日本官方網站 AI Prompt 全文校訂。此階段官方欄維持「官方原文待取得」。
- 下一次以能執行 JavaScript 的真實瀏覽器／ChatGPT Work 開啟官方 Contents，再選 SCENE 001，逐 STEP 擷取、核對合法取得的原文，與台灣版逐句對照後才能驗收。

## 2026-10-13｜官方 AI Prompt × Taiwan Edition 工程交付

### 實際產出與來源真實性
- 正式私人教材仍是 Google Drive 的 Yamada_Speaking_FrontMatter_Scenes001-012_TEXT_ONLY.html，原 File ID：1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_；父資料夾 ID：1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3；278,227 bytes。原地替換 bytes，無新建另一份正式版，保留原名稱與存取控制。
- 正本含 21 個 chapter、12 個 SCENE、202 組日中 pair，0 張掃描圖片，所有原書英文關鍵句型與模型對話繼續保留。
- Taiwan Edition 已完成 12 SCENE × STEP 1/2/3＝36 份完整 Prompt，單份包含角色分工、原書任務、自然美式英文、每次一問等待英文回答、情境在地化、原書英語關鍵字與模型對話（STEP 2）、對應振り返り與繁體中文 Feedback；無可用音訊時不可假稱可評估真實發音。
- PDF 原書 SCENE 001–012 的 12 個 QR Code 目標已辨識，URL 共同格式：https://chatgpt-eikaiwa.alc.co.jp/contents/scene/index.html?id=001 至 id=012。各課的私人 HTML 官方分頁保留對應網址與來源註記。官方網站內部 36 筆 Prompt 的文字目前無法由可用網站工具讀取，官方全文已核實數：0/36；全部標記「官方原文待取得」，官方複製/開啟 ChatGPT 按鈕停用。切勿把台灣自編版當成原版。
- GitHub /learning/english/yamada-speaking/ 公開程式只負責載入私人 HTML、渲染 Prompt 卡及互動，完整教材與 Prompt 全文皆在私人 Google Drive。

### 介面與操作
- 每個已整合的 SCENE 在 STEP 1、2、3 內容下方分別顯示 Prompt 區，獨立切換「日本官方原版」與「台灣在地化版」。全原文／全中文／上中文下原文／左右對照仍控制日中教材，不影響 Prompt 模式；英文始終保留。
- 功能：每個 STEP 複製完整 Prompt、複製並開啟 ChatGPT 網站（需用戶自行貼上開始練習），以及每課一次複製台灣版全部 3 個 STEP。缺少官方原文時不可複製空白或佯稱已取得。
- 模式偏好分別使用 localStorage：yamada-speaking-language-mode-v1 與 yamada-speaking-prompt-mode-v1。

### 備份、版本與驗收
- 更新前私人備份資料夾：1msKZUfeUDD2AviiIlogXWg1eXbzBUbPw。
- 原始 108,733 bytes 完整備份：20261013_0741_before-Prompt-Integration，File ID 1BBPlHNbFlDtvOlxIhgZrCAXlF36zXVhd。
- 中間 192,749 bytes 的版本在再次更改前備份：20261013_0750_before-expand-Prompts-007-012，File ID 1oRfBWIFGysNezIE7_CoagDApXFENU7m8。
- 靜態 QA：Drive 元資料、更新後原檔 ID／parents／size／permissions，以及原始章節數、Prompt 配對與 GitHub 檔案 SHA；本地 JS syntax parsing 已執行。
- 未完成：Google OAuth 在真人瀏覽器的讀取、正式 CDN 更新確認、iPhone/iPad/Mac Safari 四模式與 Clipboard E2E。未通過時不可註記 PRIVATE-E2E PASS。
- 長期待辦：SCENE 013–100、官方全文 001–100、完整目錄、前置使用說明四頁與附錄；回填真正官方 Prompt 時仍應先備份，保留原 File ID、父資料夾與權限。

## 2026-10-13 第三次延伸｜SCENE 010–012（已提交）
- 正式 Drive 教材：`Yamada_Speaking_FrontMatter_Scenes001-012_TEXT_ONLY.html`；**File ID `1DZrmlIpac6cl3iEN_UoiSgcKlLsl1Wn_`**、父資料夾 `1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`、MIME `text/html`、**108,733 bytes**；Drive metadata 讀回確認僅 owner grant、無公開分享。
- 原書來源：印刷 **pp.042–047**／PDF 雙頁第 23–25 張（0-based indices 22–24），已依兩頁影像核對。
- SCENE 010「SIMカードを入手する」：兩句英文 Key Phrase、8 句原書英語角色對話、STEP 1–3 完整日中指示與回饋；原書 **ALC Mobile** 方案改用純 HTML：Basic 3GB/7 days、Advanced 10GB/14 days、Unlimited Unlimited/30 days。原書未列這三方案的價錢，未添加虛構價格。
- SCENE 011「チェックインをする」：3 句關鍵句、10 句模型對話、Wi-Fi、早餐 **7 to 10 a.m.**、退房 **before 11 a.m.**、原書 5 項入住檢查清單與 AI 回顧。
- SCENE 012「設備が故障したことを伝える」：3 句 Key Phrase（第 3 句為原書 +α）、7 句模型對話、完整故障備忘選項 **1127／1003／928 號房**與熱水、空調、隔壁房噪音。
- HTML 機械驗收：**21 個 chapter、12 個 scene、202 組日中 pair、0 個 img**；3 個新 Scene 的英文模型對話句數分別 8、10、7。JavaScript 已更新為要求 21 chapter 並檢查首節 `preface` 和末節 `scene-012`；四模式仍只改日中顯示，英文永遠保留。
- 舊版正式 Drive 檔案 `1FYnzqrTmPi8SWd_qVxz_dRariDS03eAy` 仍原樣保存供回退；沒有覆寫既存檔。公開 GitHub 只存 HTML shell、CSS、JS、README，版權正文／翻譯仍只放私人 Drive。
- 靜態驗收已完成：Drive 資料、metadata、GitHub 程式碼提交可驗證；**GitHub Pages live OAuth 與真實 iPhone/iPad/Mac Safari E2E 尚待驗收**，不得混同靜態檢查。
- **待辦**：原書目錄尚未逐項電子化，`intro-page10`–`intro-page13` 四個前置版面待補；模型會話的原書日文譯文附錄 pp.236–251 仍待製作。下一批從 SCENE 013／印刷 p.048 接續。原書整頁影像不用上網站；僅在 Drive 保留原始 PDF 作為核對依據。

## 2026-10-13 第二次延伸｜SCENE 007–009 純電子教材
- **目前網站使用的私人 Google Drive HTML**：`Yamada_Speaking_FrontMatter_Scenes001-009_TEXT_ONLY.html`，File ID `1FYnzqrTmPi8SWd_qVxz_dRariDS03eAy`；parent folder `1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`，MIME `text/html`，大小 **86,160 bytes**。
- **來源**：原書印刷 pp.036–041（PDF 雙頁掃描第 20–22 張），逐頁直接對照頁面影像，與既有 SCENE 001–006 合併。
- **SCENE 007** 交通系ICカードを入手する：完整情境、重點、3 個英文關鍵句型、9 句雙角色英文模型對話、STEP 1/2/3、5 項購卡任務清單；包含原書 $20 卡價、$5 可退押金、實戰儲值 $35，區分模型示範 $10。
- **SCENE 008** 乗るべき電車を尋ねる：3 句關鍵句型、7 句模型對話、原書 Platform 1–6、Ticket Gates、Elevator、Information、You Are Here **純 HTML/CSS 車站配置示意**；保留 Platform No. 5 與 express／local。
- **SCENE 009** 電車の遅延状況を尋ねる：3 句關鍵句型、9 句模型對話、純 HTML 電光看板，原始表格 **Central 10:10 Delayed／Bay Area 10:15 Delayed**；保留轉車地點 Parkside Station、20 分鐘、10:25 a.m. 及信號問題。
- **資料完整性抽核**：前置資料與 SCENE 001–009 合計 **18 個 chapter／9 個 scene／150 個日中 pair／0 個圖片**，新 3 場景皆有 3 個練習步驟及原英文；6 個已完成場景擴至 9 個，目錄及 4 組前置圖解仍標示 pending，未冒稱完成。部分 QR Code 連結未轉錄，原 PDF 保留供後續核對。
- **權限／版本**：Drive metadata 顯示 owner-only、無 `anyone`／`domain`、位置不變。舊版 `1_HAX_tNh-8eI7A3ufDBGS7ZSFnm0MaEn` 與最早的 `1cMjd--G7ZJwZyWEHrY35oezW18vUsMRz` 均保留，未覆寫；GitHub 閱讀器 `reader.js` 已切換到新 File ID，驗證 18 chapters、前言及 SCENE 009。網頁 `index.html` cache bust 已更新到 `20261013-yamada3`。
- **網站**：`https://wesleychen310.github.io/osaka2026/learning/english/yamada-speaking/`，從 `learning/english/` 進入。四模式：`ja`、`zh`、`vertical`、`parallel`；英文原文在所有模式固定可見，狹窄 iPhone 仍有等寬左右配對欄。
- **QA 分級**：已核對 Drive 新檔 bytes、章節/成對數與 GitHub 程式碼提交及讀回；真實 Safari Google OAuth、GitHub Pages CDN live 及 iPhone/iPad/Mac 點擊互動仍待端到端驗收，不能宣稱 E2E PASS。
- **下一步**：先補全目錄及前置說明 `intro-page10`–`intro-page13`，並從原書印刷 p.042 起繼續 SCENE 010；任何既存 HTML 修改前先照既有 SOP 建立 `_backup`。

## 本地首批 UI 測試
- 無外網 Playwright Chromium 模擬授權後，320/390/768/1130px × ja/zh/vertical/parallel：16/16 通過；英文固定可見，搜尋及 CSS 無全頁橫向溢出。這是**本地模擬測試**，正式 Google OAuth、GitHub Pages live 與 iPhone Safari E2E 尚待驗證。

## 編修/備份 SOP
1. 先核對 PDF 頁影像；逐字確認英文（尤其 `I/l`, `'`, `?`, `.`）與日文段落。絕不直接把不可靠 OCR 當成完成稿。
2. 日文 100% 對應台灣繁體中文；英文教學語句固定用英語，置於獨立 `.english-block` 或 `.keyphrase>p[lang=en]`。
3. 對原日文說明用 `<div class="pair"><div class="original" lang="ja">…</div><div class="translation" lang="zh-Hant-TW">…</div></div>`。條件式排版由公開 CSS/JS 負責。
4. 修改既存 Drive HTML **之前**，在同一父資料夾 `_backup` 建立含時間與理由的原檔副本，確認備份後對原 ID 進行 `files.update`；最後讀回 bytes、權限、parent、ID 與結構。
5. 如須增加圖片或不同批次，維持 Drive 私有；`reader.js` 內加入來源 File ID 或擴充 manifest，勿把圖片複製進公開 repo。
6. GitHub 更新現有檔案先讀 SHA，依版本控制更新；UI CSS JS 每次更新 query cache-bust。
7. 本地驗收：320/390/768/1130px × 四模式，前言、三段正文與所有英文固定保留；確認 `.pair` 完整、頁影像可展開、章節導航與搜尋/TTS 均正常。真實 iPhone Safari/OAuth E2E 需另在登入環境實測後才標示完成。
