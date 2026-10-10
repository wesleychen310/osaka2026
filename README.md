# Osaka2026 全站總索引與維護交接（Single Source of Truth）

> 更新日期：2026-10-10（Asia/Taipei）。Repository：[`wesleychen310/osaka2026`](https://github.com/wesleychen310/osaka2026)；網站根網址：<https://wesleychen310.github.io/osaka2026/>。
>
> **所有屬於這個 GitHub Repository 的網站，先從本 README 查路由、原始碼、私人資料與維護 SOP。** 本文是索引與操作規則；實際內容、檔案 ID、權限、部署狀態一律以當下 GitHub／Google Drive 現況核實，避免使用過期記錄。

## 0. 新對話／維護者必讀（工作順序）

1. **定位**：由使用者的正式網址或名稱，在下方站點索引找到 GitHub path，讀取入口 HTML、對應 JS 及本 README。
2. **辨識來源**：先分清「GitHub Pages 公開靜態頁／資料檔」與「GitHub OAuth shell + Google Drive 私人 HTML」。只有後者需要依 shell 中 `FILE_ID` 或 `CHAPTERS` 找到 Drive 正本。
3. **讀取最新資料**：需要 Drive 原檔時，查 metadata（ID、檔名、parents、權限）及實際內容；需要新增視覺筆記時先讀專用 Google Drive SOP。
4. **先備份再寫入**：修改任何 Drive 原檔前，先在同層 `_backup` 建立附時間與簡短原因的備份；接著更新**相同 Drive File ID**，保留原檔名、路徑和權限。修改 GitHub 使用現行 blob SHA，留下 commit。
5. **讀回驗證**：檔案內容、正式路徑、引用檔、私人權限、Pages 部署及所需 UI 測試分開檢查；實機／真實 Google OAuth 未測不能說已完成。
6. **同步更新本 README**：新增網站、改名、變更路由、共用資產、登入架構、停用站點或改變 Drive 指向，都更新這份唯一總索引。

已連接的 GitHub、Google Drive 工具可使用時直接執行，無須反覆要求使用者重新提供原檔 ID／網址。使用者偏好台灣繁體中文；不可擅自改公開網址、原檔 ID、私人檔案分享權限或刪減教材。

## 1. 全站索引（以 GitHub 實際檔案為準）

URL 表的相對路徑皆接在 `https://wesleychen310.github.io/osaka2026/` 後。所有 `index.html` 網站均可用相對資料夾網址開啟。

### A. 京都 2027｜現行旅遊專案（`t202703/`）

| 功能／正式 URL | GitHub 檔案 | 資料來源與維護位置 |
|---|---|---|
| [旅遊主站](https://wesleychen310.github.io/osaka2026/t202703/) `t202703/` | `t202703/index.html` → `boot.js` → `app.js` | `t202703/data.js` 等資料模組及部分 `t202607-*.js` 共用資料；**屬公開靜態主站** |
| [賞櫻景點](https://wesleychen310.github.io/osaka2026/t202703/sakura.html) `t202703/sakura.html` | `sakura.html`、`sakura.js` | `sakura-data.js`、`catalog-data.js`、跨年度共用地點資料 |
| [ARU 飯店周邊](https://wesleychen310.github.io/osaka2026/t202703/nearby.html) `t202703/nearby.html` | `nearby.html`、`nearby.js` | `nearby-data.js`、`kiyamachi-data.js`、`catalog-data.js` 等 |
| [京都洋館／近代建築](https://wesleychen310.github.io/osaka2026/t202703/modern.html) `t202703/modern.html` | `modern.html`、`modern.js` | `modern-data.js`、`name-i18n.js`、`gpt-actions.js` |
| [第七代小川治兵衛・京都庭園散策](https://wesleychen310.github.io/osaka2026/t202703/ueji.html) `t202703/ueji.html` | `ueji.html`、`ueji-data.js`、`ueji.js`、`ueji.css` | 公開歷史庭園導覽，22處現存與待考地點；按參觀／餐飲／限制公開／賞櫻篩選；Google Maps、ARU交通、官方來源及 GPT 圖文介紹 |
| [旅行前事務本（私人）](https://wesleychen310.github.io/osaka2026/t202703/control/) `t202703/control/` | `t202703/control/index.html` | Google Drive `2027花見京旅行前事務本.html`；File ID：`1XVIMkPdvqccbW7i-y4_QrW8h8VcGj3lY` |
| [旅帳本（私人）](https://wesleychen310.github.io/osaka2026/t202703/ledger/) `t202703/ledger/` | `t202703/ledger/index.html` | Google Drive `2027花見京旅帳本.html`；File ID：`19iny4GXWrzgZug-ag4z7_5DHamr0T-m1` |

**2027 資產入口：** `t202703/boot.js` 列出主站啟動依賴；`t202703/{sakura,nearby,modern}.html` 各自列出 JS 依賴。`t202703/name-i18n.js` 管理顯示名稱／翻譯；`t202703/style.css` 為主站樣式。更新主站時請辨識是否引用根目錄 `t202607-*.js`，勿把它們誤判為廢檔。

**Drive 編輯：** control／ledger 原檔位於各自 Drive 資料夾，修改前以實際 metadata 找到其 parent 與同層 `_backup`；只修改公開 shell 登入或路由時，不必改 Drive 原 HTML。

### B. 京都 2026｜既有地點與旅行資料專案（`t202607/`）

| 分類 | 正式頁面（均接 `t202607/`） | 維護入口 |
|---|---|---|
| 主頁／行程／交通 | `index.html`、`itinerary.html`、`transport.html` | `boot-clean5.js`／`site-clean6.js`；`boot-itinerary.js`／`itinerary.js`；`boot-transport.js`／`transport.js` |
| 地區頁 | `gion.html`、`karasuma.html`、`kawaramachi.html`、`nara.html`、`nara_far.html`、`okazaki.html`、`pontocho.html`、`rakuhoku.html`、`rakunan.html`、`rakusai.html`、`sanjo.html`、`uji.html` | 地區共用 `t202607/site*.js`、boot loader 與根目錄資料模組；修改前逐頁確認實際 bootstrap |
| 主題頁 | `theme-beef-tongue.html`、`theme-hotel-nearby.html`、`theme-must-go.html`、`theme-old-cafe-tea.html`、`theme-old-coffee-tea.html` | `site-mustgo.js`、`site-clean6.js`、相關主題 JS 與資料 |
| 類型頁 | `type-books.html`、`type-drinks.html`、`type-food.html`、`type-heritage.html`、`type-shinise.html`、`type-shops.html`、`type-sights.html` | 書店採 `boot-books.js`／`site-books9.js`；其餘以各頁實際 loader 為準 |

- 正式首頁：<https://wesleychen310.github.io/osaka2026/t202607/>。上述 27 個 HTML 入口均由 Repository 路徑盤點；歷史頁仍保留，勿誤刪。
- 根目錄 `t202607-data.js`、`t202607-places-data.js`、`t202607-books-data.js`、`t202607-themes-data.js`、`t202607-itinerary-*.js`、`t202607-*-theme-data.js` 等皆可能由 2026/2027 多站引用；只可依引用關係判定是否廢棄。

### C. 私人學習｜ISLP／PA／ATPA／FAM-S（`learning/`）

| 網站／正式 URL | GitHub 入口 | 私人內容位置 |
|---|---|---|
| [私人學習總入口](https://wesleychen310.github.io/osaka2026/learning/) `learning/` | `learning/index.html` | 公開導航頁，本頁不執行 Google OAuth |
| [超級筆記 PA／ATPA](https://wesleychen310.github.io/osaka2026/learning/super-notes/) `learning/super-notes/` | `learning/super-notes/index.html` | Drive `超級筆記.html`；ID `1Gmf5EKGCxqR0iE-MwLfNrZM6DWNVdxTa` |
| [ISLP 精讀目錄](https://wesleychen310.github.io/osaka2026/learning/islp/) `learning/islp/` | `learning/islp/index.html` | 公開章節選擇 |
| [ISLP 精讀 Chapter 3](https://wesleychen310.github.io/osaka2026/learning/islp/ch03/) `learning/islp/ch03/` | `learning/islp/ch03/index.html` | Drive `ISLP_CH03_精讀.html`；ID `1Pvejd3h2Z2UzkJpmmBLrx0qqtas6rX2S` |
| [ISLP 精讀 Chapter 4](https://wesleychen310.github.io/osaka2026/learning/islp/ch04/) `learning/islp/ch04/` | `learning/islp/ch04/index.html` | Drive `ISLP_CH04_精讀.html`；ID `1jd-CTkx0FNQdnOaHHsB0GljK3T0AIemh` |
| [ISLP 課本雙語化](https://wesleychen310.github.io/osaka2026/learning/islp-reading/) `learning/islp-reading/` | `learning/islp-reading/index.html` | 程式中的 `CHAPTERS`：Ch3 `1dGsBY5l6XKuxkpriNDzx3tCmwIXQzS4Q`；Ch4 `1fUhbSm_tOL4jnF9zHTEP99y71gYASDJG`；Ch5 `1JfsQ4Kfdr7TS8v5iTEGTEiZVxmw8a9zT` |
| [ISLP 視覺筆記](https://wesleychen310.github.io/osaka2026/learning/islp-visual/) `learning/islp-visual/` | `learning/islp-visual/index.html` | Drive `ISLP_視覺筆記.html`；ID `18c6xkniZissK6cF0x3Xr0_D1h-FEUwFd`，內含 JSON manifest + 私人圖片 ID |

**視覺筆記專用交接 SOP（應於動手前閱讀）：** [ISLP 視覺筆記｜系統架構與跨對話交接 SOP](https://docs.google.com/document/d/1TGkOWdtOA9_Ag9YEMTk337-Y_QUPZ0a9K_aG2qzRAdA/edit)。截至 2026-10-08，私人 manifest 為 **16 張**、schema v1；後續數量以當下 Drive 文件為準。

- **ISLP Chapter 3 美式朗讀試行（2026-10-08）：** `learning/islp/ch03/index.html` 在讀取私人 Drive HTML 時載入 `learning/islp/ch03/en-us-speech.js`，只對 §3.2.2、§3.3（含 §3.3.1–3.3.3）的 English Bank 加入「🔊 美式朗讀」按鈕，共 22 句。採瀏覽器 Web Speech API、`en-US`，不顯示 IPA 或其他控制項。私人 HTML、Google Drive File ID、OAuth 流程均不變。若要擴大範圍，修改此 UI JS 的 `init()` 篩選邏輯；新增章節時先檢查頁面 DOM 結構。實際 iOS Safari 語音音色取決於裝置可用的 en-US voice，需實機驗收。\n
- 視覺筆記原 HTML 位於 Drive folder ID `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`；私人圖片 assets folder ID `1K89DmVQv3KM38WI7kOpY50n2nLwnYU2e`；_backup folder ID `1PN-En3MOI-GUtJpW7zxn4Gj7HxCAuPA3`。
- 修改視覺筆記：將新 PNG／WebP 存入私人 assets → 核對新 fileId／權限 → 先備份原 HTML → 編輯**同一原檔** `#notes-manifest` 保留所有舊 notes[] → 讀回驗證。只新增圖片通常無須改 GitHub shell。
- 特別注意：視覺筆記 shell 使用 `DOMParser`、`IntersectionObserver` 與私人圖片 Blob/Object URL；其 OAuth closure 必須留在 shell。其他私人站多使用 `document.open/write/close` 接管畫面。不得隨意互換。

**2026-10-08 美式英文朗讀試行：** `ISLP 精讀 Chapter 3`（`learning/islp/ch03/index.html`）載入 `learning/islp/ch03/en-us-speech.js`；`ISLP 課本雙語化 Chapter 3`（`learning/islp-reading/index.html?chapter=3`）載入 `learning/english-us-tts.js`。兩站僅對 §3.2.2 至 §3.3.3 的 `details.phrases .phrase > p[lang="en"]` 加入單鍵美式英文朗讀（瀏覽器 Web Speech API、`en-US`）。無 IPA、速度或腔調切換。語音元件由 GitHub shell 在下載私人 HTML 後注入，**Drive 教材原檔完全不改**。實際發音由裝置可用的 en-US TTS voice 決定；Safari / iOS 需點擊才可朗讀，尚須實機驗證。

**ISLP 課本雙語化｜Chapter 4 FAM-S 同屏雙欄試行（2026-10-10）：** 僅 `?chapter=4` 新增載入 `learning/islp-reading-fam-layout.css`，其餘章節的 `islp-reading-mode.js`、私有 Google Drive HTML、Google OAuth／TTS 保持原狀。新版在 iPhone 左右對照採真實 50%／50% 欄寬，English 左、台灣繁中右；數學公式、圖表、Python code 保留原結構。已用 Chapter 4 原 HTML 在 320/375/390/430/710/768/1024/1280px × 四顯示模式完成 32 組本地排版 QA，保留 233 段、25 figures、29 tables、48 equations；未進行真人 iOS Safari OAuth 實機驗證。套用其他章節**先閱讀 [ISLP FAM 版型專用 README](learning/islp-reading/README.md)**（啟用、DOM 相容性、測試、回復 SOP）。網站直達 [Chapter 4 §4.3](https://wesleychen310.github.io/osaka2026/learning/islp-reading/?chapter=4#s43)。

**ISLP 課本雙語化｜Chapter 5 FAM-S 同屏雙欄擴充（2026-10-11）：** [Chapter 5 — Resampling Methods](https://wesleychen310.github.io/osaka2026/learning/islp-reading/?chapter=5) 已加入 `learning/islp-reading/index.html` 的共用版型套用清單 `['4','5']`，沿用 `learning/islp-reading-fam-layout.css` 與既有四模式核心 `islp-reading-mode.js`。Chapter 5 另載入 `learning/islp-reading-ch05-fixes.css`，只對本章的行內 SVG 數學圖片提供區塊內橫向捲動，避免 320px iPhone 上整頁超寬，保留原解析度。Google Drive 正本 `ISLP_CH05_雙語課本.html` ID `1JfsQ4Kfdr7TS8v5iTEGTEiZVxmw8a9zT`（owner-only、原 parent）**沒有修改**；172 雙語段、306 inline-math、11 figures、10 equations、28 code blocks、17 output blocks 及全部原始錨點保持。用本地原始 HTML 套用主要 mode/row/grid 邏輯之 Chromium 排版 QA：320/375/390/430/710/768/1024/1280px × 四模式 **32/32 通過**。真實 OAuth 與 iPhone Safari 實機尚待驗收，勿將本地 QA 視為 E2E；[完整 SOP、驗證差異與回復方式](learning/islp-reading/README.md)。

#### ASM FAM-S 私人雙語教材｜建置中（2026-10-10）

- 指定私人資料夾：[fam_HTML／ASM_FAM-S](https://drive.google.com/drive/folders/1uiYt_Ce2UNFSr9C9YISh6f1BBnhnDUwe)。[Phase 1 manifest](https://drive.google.com/file/d/1OnupOrFPSj99OURS7beFS6Z3xrm50mro/view)、[盤點報告](https://drive.google.com/file/d/1R_gWz8pv2RdvAcXrM2dk_Z7CMJRemB0F/view)及最新 `progress.json` 存在該私人資料夾；索引與原頁影像備存於子資料夾 `inventory`。
- 本批次已完成全 PDF 738 頁文字／座標擷取及原頁影像保存。Phase 1 狀態為 **NEEDS_REVIEW**；全頁正文、數學、圖表及題解邊界尚未完成視覺驗收，雙語教材驗收通過數為 **0**。
- **第二批盤點（2026-10-10）：** 已實際查看 PDF 第 1–44 頁完整影像，記錄前附資料與 Lesson 1 的題解來源範圍及原圖裁切。逐段英文修訂、數學轉錄與翻譯尚未驗收；44 頁不計為雙語教材完成。詳 [第二批報告](https://drive.google.com/file/d/1CnEKYFS4OVM51Sm8RVOfLu2AFyg0HHcf/view)。第二批證據保留；接續位置以以下最新批次與私人進度檔為準。
- **第三批盤點（2026-10-10）：** 完整原頁影像查看累計 PDF 第 1–64 頁，新增 Lesson 2 題解來源範圍與圖表裁切；英文、數學與雙語驗收仍待完成，驗收通過章節數維持 **0**。詳 [第三批報告](https://drive.google.com/file/d/1BclKcnDqX4ZJJsX03dQ_sR8VB6A8AXFF/view)。完整影像盤點由 PDF 65／Lesson 3 接續。
- **第四批盤點（2026-10-10）：** 完整原頁影像查看累計 PDF 第 1–105 頁，新增 Lessons 3–6 與 Part II 開場的來源紀錄、題解標籤對應及原始裁切。正式段落、英文、數學與雙語驗收仍待完成，驗收通過章節數維持 **0**。詳 [第四批報告](https://drive.google.com/file/d/12gpkX1mpvWuI-31A_Qo1McVYazmalEVL/view)。完整影像盤點由 PDF 106／Lesson 7 接續；先讀最新私人進度與第四批儲存驗證紀錄。
- **第五批盤點（2026-10-10）：** 完整原頁影像查看累計 PDF 第 1–163 頁，新增 Lessons 7–10、Part III 開場、61 道 Exercise 標籤對應、8 個 Examples、7 題 Quiz 及跨頁／共用條件紀錄。原頁辨識不等於正式段落或數學、翻譯驗收；驗收通過章節數仍為 **0**。詳 [第五批報告](https://drive.google.com/file/d/1vkJ_8xbpCa47tyucyq5nSAghc--ArNWE/view)。下一批由 PDF 164／Lesson 11 接續 Phase 1 全書盤點；先讀最新私人進度及第五批儲存驗證紀錄，沿用基礎索引與全部批次證據。
- **本次前附資料 QA 報告：** [Front_Matter_DRAFT_Report.md](https://drive.google.com/file/d/10uGQzeYB6nYqBMxge_c3hPRlpTAM63hi/view)。其狀態是 DRAFT／NEEDS_REVIEW。原 `progress.json`／`manifest.json` 仍以 Work 第五批為基準，讀取時應同時參考本條最新報告；待確認安全的原 File ID 備份與更新機制後再同步 canonical checkpoint。不得以舊進度欄位覆蓋已建立的私人閱讀器。
- **FAM-S Lesson 1 整課來源初稿（2026-10-10）：** 保留私人 Drive HTML 同一 File ID `1MgPm7w_Bj5zwoiQlJlv_q0W8aM1Ug8Y4`，目前納入 PDF 19–43 **25 頁所有原書掃描**、PDF44 空白索引、Examples 1A–1F、全部 **30 道 Exercise 題卡和 30 道 Solution 原書掃描連結及繁中解題方向**，可在 OAuth 網頁以四種閱讀模式閱讀（320/390/768/1130px × 4 模式 16/16 Chromium QA 通過）。正文第 25–28 頁建立重點英中草稿。**逐字英文 OCR 校對、完整繁中逐段翻譯、30 道完整解答文字化與 TI 操作均尚未驗收，整課仍為 DRAFT／NEEDS_REVIEW；COMPLETED Lessons=0**。已於更新前備份 Drive `_backup` `1Tgs6ONwBdOMQB4MNJfN5jRyTCzmUDvJO`；遠端讀回 HTML size 6551602 bytes、SHA-256 `b8ad4d5fc4a825fb7eca33e52b2bb4176cbb96edb999de6413489bd16526aa6d` 與本地一致，私人 owner-only，公開 GitHub 僅 OAuth shell。維持整課一次交付節奏，避免每 2–4 頁更新。
- **FAM-S Lesson 1 第二批（2026-10-10）：** 由 PDF 21–24（印刷 5–8）續製；私人 Lesson 1 HTML 原 Drive ID `1MgPm7w_Bj5zwoiQlJlv_q0W8aM1Ug8Y4` 已就地更新為 **PDF 19–24，6/26 頁**；76 個英中配對單元（含前批）、6 張原頁影像、Figure 1.1/1.2，Examples **1A、1B、1C** 已有「顯示答案」「完整解答」Native details。新頁內容含 variance/skewness/kurtosis、Gamma、Pareto、Percentiles、Conditional Probability/Bayes/Total Probability。Chromium **320/390/768/1130px × 4 模式 16/16 通過**，三題答案/詳解全可展開，無整頁橫向溢出。更新前備份 `_backup` ID `1mwCFQLpl6YG8M1XgU7ZzZMhKV_Gz0m-T`，更新後 Drive 重新下載 SHA-256 `dbf5fa6e68fc4767e2ef79ca20f863d02a9e4ef85bb9693aeb1610915abdfeeb` 和本地相符，原檔仍 owner-only。GitHub Pages 公開 repo 僅放 OAuth 外殼，保持原私人路徑 [`learning/fam-s-reading/lesson1/`](https://wesleychen310.github.io/osaka2026/learning/fam-s-reading/lesson1/)；[本批 QA](https://drive.google.com/file/d/1i7YhTXlx-66g7tNjlnu5ya1p2KZwkFjs/view)。**所有內容仍 DRAFT/NEEDS_REVIEW；Examples 1A 完整代數的文字有濃縮，保留來源圖可核對；PDF 25–44 及全題 Solutions 尚待完成；iPhone Safari/OAuth 實機尚未驗證，已驗收完整 Lessons 為 0。** 下一批 PDF 25–26：Conditional Mean Formula、Example 1D、1E、Empirical Distribution。`progress.json`/`manifest.json` 仍可能落後於此 README，勿用過時快照覆寫。
- **FAM-S Lesson 1 第一批（2026-10-10）：** 已依原書從頭建立 `Lesson 1 — Basic Probability` PDF 19–20（印刷 p3–4）雙語草稿；**32 個英中配對單元、Figure 1.1、原書期望值及動差公式裁切、兩張原頁來源影像**，4 顯示模式於 320/390/768/1130px 合計 16/16 Chromium 測試通過。公開授權入口 [`learning/fam-s-reading/lesson1/`](https://wesleychen310.github.io/osaka2026/learning/fam-s-reading/lesson1/)，私人 HTML 存在 Drive `1MgPm7w_Bj5zwoiQlJlv_q0W8aM1Ug8Y4`，維持 owner-only；前附資料 HTML `1BtnQBME26WxS7cx3CJKo50viwfiRDKqR` 已加入下一課導覽，原檔名及 File ID 維持、先備份 `_backup` `12YDhcZQmV9ovwitiVqh4XzA8boLPsJKc`。詳見 [Lesson 1 第一批 QA 報告](https://drive.google.com/file/d/1N5jWMvA6OCG9KJuSAeoAP57Cf5uxQYS9/view)。**整課 DRAFT／NEEDS_REVIEW；整課尚有 PDF 21–44；Examples、Exercises、Solutions 與題解映射未完成；全書合格 Lessons 仍為 0**。下一步由 PDF 21（Variance/Skewness/Kurtosis/Example 1A）接續，前附資料仍須逐頁正式校對。iPhone Safari 實機 OAuth 尚未完成驗證。後續同一 Drive 檔案更新前務必備份原檔，保留 File ID；`progress.json`／`manifest.json` 可能落後，以本報告作最近作業紀錄。
- **FAM-S Front Matter 第二批（2026-10-10）：** 維持原私人 HTML Drive ID `1BtnQBME26WxS7cx3CJKo50viwfiRDKqR`；依原書 PDF 8–13 頁建立 221 個雙語目錄條目（7 Part、31 Lessons、96 Sections、30 Exercises、30 Solutions、12 Practice Exams、12 Exam Solutions、3 Appendix/Index），附原書印刷頁碼；PDF 4–7 頁新增平台操作步驟／圖說。保留 18 張原 PDF 頁面影像。更新前已備份 `_backup`：`1Ay3CB1zu19HT8eeALtQcGFoCGxAg793X`；Drive 回讀與本地 SHA-256 一致 `e35095e24ff5177a01819b41ca81f04c58765e430e49d4a7ce8858c780336d4a`，owner-only。Chromium 在 320/390/768/1130px 的四模式 16 組測試通過。完整 [第二批 QA 報告](https://drive.google.com/file/d/1aE4GwzbwQyi5e2iBfKe-9S4t7lSnhj5j/view)。**前附資料 DRAFT／NEEDS_REVIEW；完成 Lessons 仍為 0。** 工作繼續原書順序：Front Matter 逐頁全文核對 → Lesson 1。原 `progress.json`／`manifest.json` 尚未同步本次變更，應以此 README 與 QA 為後續最近記錄，不得盲目覆寫。
- **FAM-S 左右對照修正（2026-10-10）：** 私人 `ASM_FAM-S_Front_Matter_DRAFT.html` 保持原 Drive File ID `1BtnQBME26WxS7cx3CJKo50viwfiRDKqR`、檔名、父資料夾及 owner-only 權限。修正小於 710px 時 mobile media query 將 `.mode-parallel .bilingual` 逼回單欄的 CSS 優先序；新增明確雙欄覆寫與 `aria-pressed`。Chromium 已測試 320、375、390、402、710、711、768、1024、1280px：左右對照均為同列雙欄，其餘三種語言模式切換通過，無整頁水平溢出。更新前已備份至同層 `_backup`（Drive ID `1VQM7WymJavGIu2z3vRZAQVFIAQjj-A9n`）；遠端讀回 SHA-256 `8eef4e499f8512ba0a677a8ce759a3efae42824d42c44fe4d2a8d394951c98a4` 與本地完全一致；**iPhone Safari 實機與登入流程仍待驗證**，前附資料內容狀態 DRAFT／NEEDS_REVIEW 不變。
- **私人雙語閱讀入口已建置（2026-10-10）：** [learning/fam-s-reading/](https://wesleychen310.github.io/osaka2026/learning/fam-s-reading/)；GitHub `learning/fam-s-reading/index.html` 僅放 OAuth shell/UI，並已加入 `learning/index.html` 導航。前附資料私人 HTML 草稿 `ASM_FAM-S_Front_Matter_DRAFT.html`（Drive ID `1BtnQBME26WxS7cx3CJKo50viwfiRDKqR`，父資料夾 `1uiYt_Ce2UNFSr9C9YISh6f1BBnhnDUwe`，owner-only），來源 PDF 1–18 影像全保留；PDF 14–17 主要敘述雙語排版、兩表保留，PDF 4–13 圖內細部與 TOC 全子節尚待翻譯。**DRAFT／NEEDS_REVIEW，驗收完成的雙語 Lesson 為 0**。未作真實 iPhone / OAuth 登入驗證，不能宣稱實機完成。
- 後續閱讀器沿用既有 Google OAuth／短期 session token 與私人 Drive File ID 存取方式；教材、翻譯、題目、題解及原頁影像只存私人 Drive。不得將候選題解映射直接投入答案按鈕。
- 新對話先讀私人 `progress.json`、manifest、問題清單與報告，保留已核對證據並接續未驗收工作。更新任何既存 Drive 檔案必須依本 README 備份 SOP；不得以目前程式檢查通過宣稱全書完成。

### D. 私人記事／財務記錄（`records/`）

| 網站／正式 URL | GitHub 路徑 | 私人資料來源 |
|---|---|---|
| [私人記事總入口](https://wesleychen310.github.io/osaka2026/records/) `records/` | `records/index.html` + `records/app.js` | **單一 Google 登入／支出與所得雙分頁**，依需讀取兩個私人 Drive HTML；入口不含交易資料 |
| [2026 財務記事](https://wesleychen310.github.io/osaka2026/records/finance/) `records/finance/` | `records/finance/index.html` | 私人 Drive `2026記事_私人財務帳本.html`；ID `1iW_TBvC_NO6s0PlAPLbRspfD_xYqQs_4` |
| [所得記事](https://wesleychen310.github.io/osaka2026/records/income/) `records/income/` | `records/income/index.html` | 私人 Drive `2026所得記事_私人薪資紀錄.html`；ID `12WhesQ3XEkxR9B7DhSs_wJXJUDIUKYMl` |

**私人記事（支出＋所得）專用 README：[records/README.md](records/README.md)**。該文件詳細記載：

- 來源 Word 文件 `2026記事.docx`（ID `14_-8w1bTsxsKoj-wDWanL_L0bxYBV-qu`），匯入後保留原件；網站**現行正本**是獨立私人 HTML。
- Drive 儲存位置與來源相同：[文件／記事](https://drive.google.com/drive/folders/1ngQ4Tv0CrbCNDBItbAJqJLBhmmnJkUfU)（Folder ID `1ngQ4Tv0CrbCNDBItbAJqJLBhmmnJkUfU`）；備份：[記事／_backup](https://drive.google.com/drive/folders/1st72qB2XA4sq7ZGzg-_i3FUDClrxKMNB)（ID `1st72qB2XA4sq7ZGzg-_i3FUDClrxKMNB`）。
- 日常入口 `records/` 使用共用 Google OAuth（登入一次），可直接切換「支出紀錄」和「所得紀錄」；`records/app.js` 依需求載入既有私人 Drive HTML 並以 `iframe.srcdoc` 呈現、移除重複視覺雜訊。舊的 `records/finance/`、`records/income/` 直接登入 shell 保留向下相容。公開 GitHub 不含交易明細、總額及個人憑證。
- Private HTML 的 `#ledger-data` JSON schema v1；`transactions[]`、已付／明確未付款的狀態、房貸月表、分類核對表及週期備註的相依關係。**交易明細一律預設已付款；只有使用者明確說尚未付，才設為待付款。** 2026-10-08 已依本人確認修正 3 筆公路養管費，詳 `records/README.md`。
- **未來新增任何財務交易，先讀原檔 → 在同層 `_backup` 先備份 → 修改相同 Drive File ID 的私人 HTML → 金額重算與明細驗證 → 維持原檔名、位置、私人權限。** 直接在網站篩選、複製輸入範本、匯出 CSV 均屬唯讀操作，新增要由 ChatGPT／Work 依 SOP 寫回 Drive。
- **所得記事**：薪資明細表與每月薪酬單據另用 `records/income/` 登入讀取；私人 HTML 及來源截圖均位於同一「文件／記事」資料夾，原始圖檔 File ID `1_q6DSXfGTFKHoYewJ0Xp4px6FYyELSO4`；薪資單上發薪日與銀行實際入帳分開標記，雇主勞退公提與薪資扣除亦分開。詳見 `records/README.md`「所得記事」章節。
- 日後新增年度或其他財務主題，由 `records/index.html` 統一導覽；必要時建立獨立私人 HTML 與新 OAuth shell，更新雙層 README。

### E. Repository 根目錄的其他獨立／歷史頁（保留待確認）

| 路徑 | 已識別用途 |
|---|---|
| `index.html` | 網站根首頁，舊京都旅程的獨立靜態頁 |
| `pp.html` | Prompt 資料庫 |
| `vv.html` | My Vocabulary Journal |
| `tt.html`、`tt2.html` | 京都 2026 早期頁面／候選入口 |
| `24-1.html`、`翻譯` | 根目錄既存檔案，尚未確認用途 |

這些檔案不在目前主要導航中，仍可能被外部書籤或使用者直接開啟。**未核實用途前保留**；不因檔名簡短就直接判定可以刪除。相依檔 `kyoto-app.js` 亦保留。

## 2. 技術架構與私人資料安全

### 公開靜態站

`瀏覽器 → GitHub Pages → HTML/CSS/JS → Repo 內公開資料 JS`

2027 主站、2026 地點網站及公開目錄屬此類。Repository **公開**，不應把私人訂單、敏感資料、Google token、完整私人教材或私人圖片放在 Repo。GitHub Pages 部署程序：`.github/workflows/pages.yml`，推送 `main` 後執行。

### Google Drive 私人站

`瀏覽器 → GitHub Pages OAuth shell → Google Identity Services → Google Drive API (drive.readonly) → 有權存取的私人 HTML／圖片`

- Google OAuth Client ID 屬可公開的前端設定；Access Token、Refresh Token、Cookie 屬敏感憑證，不能提交至公開 Repo 或放進 URL。
- 私人入口（含 `records/` 單一登入站、直達 finance/income 舊頁）共用 `private-auth-hint.js`；短期 token 記於 `sessionStorage`（`hanami-kyoto-google-token-v3`）；上次成功授權的帳號 email **僅作為** `login_hint`，存於 `localStorage`（`hanami-google-account-hint-v1`）。兩者用途與生命週期不同，不能把 Bearer Token 移到長期儲存。
- 一般登入採 `prompt:''`，有 hint 時加入 `login_hint`，減少反覆選帳號；使用者主動按「切換 Google 帳號」才採 `prompt:'select_account'`。iPhone Safari 仍可能限制自動 OAuth；無法保證長期免登入。
- Google Drive 的 `shared=true` 可能只代表特定人的共享，**不要只看 shared**；應核對 permission type，私人資料不可改成 `anyone`。
- `noindex` 不是權限控管；Drive 檔案 ID 是定位用而非授權憑證。

## 3. 寫入、備份、驗收（不可跳過）

| 變更類型 | 應編輯的位置 | 驗收重點 |
|---|---|---|
| 2027 主站行程、商店、地名、菜單導覽 | `t202703/` 的對應 data/JS 或所引用 `t202607-*.js` | 查引用與來源、公開頁既有功能、手機視圖 |
| 2026 地區／類型／主題／每日行程 | `t202607/` boot + site + 根目錄對應資料 JS | 不破壞其他共用模組及 2027 引用 |
| 私人 control／ledger 資料 | Drive 對應原 HTML | 先備份；相同 File ID、檔名、parent；內容完整、權限私人 |
| ISLP 精讀／雙語／超級筆記 | Drive 對應原 HTML | 先備份；教材段落、圖表、公式、互動完整 |
| 新增 ISLP 視覺筆記 | Drive assets + 原 HTML manifest；依專用 SOP | 新圖片、既有圖片、章節順序、lazy loading、Viewer、手機版 |
| OAuth、載入、導覽 shell 改版 | GitHub 對應 `index.html` 與 `private-auth-hint.js` | 舊站共用登入、token 安全、GitHub Pages 部署及實機 |
| 新增／刪除站點 | 相關程式檔 + **本 README** | URL 索引、引用、停用記錄與連結 |
| 新增／修正私人財務交易 | Google Drive `2026記事_私人財務帳本.html`，詳 `records/README.md` | 同一 File ID、先備份、交易去重；**使用者提交＝已付款**，明確未付才例外；摘要與分類總額核對 |
| 新增／核對每月薪資單 | Google Drive `2026所得記事_私人薪資紀錄.html`，詳 `records/README.md` | 同一 File ID、先備份、給付／扣除／實領核對、來源影像與銀行入帳狀態 |

**Drive 原檔寫入前：**

1. 查原檔 `id/name/mimeType/parents/permissions`，完整讀取現行內容。
2. 在原檔同層尋找 `_backup`；不存在才建立。
3. 複製原檔進 `_backup`，命名加 `YYYYMMDD-HHMM_before-簡短原因`。備份成功才修改。
4. 原位更新 Drive 檔案（相同 File ID），不可「刪除再上傳」。
5. 重新讀取、核對內容與 ID／parent／私人權限，必要時和備份比較。

**GitHub 寫入：** 先讀現行檔與 SHA；作最小修改、使用 Git commit 留下可追蹤歷史；依 GitHub Actions 確認 Pages `success`，再核對正式頁面。對舊頁面做涉及刪除的清理，必須先檢查所有相依檔及外部入口，不明用途先保留。

**驗收紀律：** 程式碼語法檢查、資料讀回、部署成功、瀏覽器真實 Google OAuth、iPhone Safari 實機操作是**不同層級**，報告必須逐項區分。新對話不得將以往模擬測試冒稱實機驗證。

## 4. 交接時快速定位

- **修改旅行 2027** → `t202703/index.html`、`boot.js`、實際使用的 JS/data；私人帳本另依 `t202703/control/` 與 `ledger/` 的 File ID 找 Drive。
- **修改旅行 2026** → `t202607/` 實際頁面及對應 loader；根目錄 `t202607-*.js` 可能跨年度共用。
- **修改私人學習** → `learning/index.html` 索引 → 各私人 shell → Drive 原檔；ISLP 視覺筆記必讀專用 SOP。
- **維護私人財務／所得記事** → 先讀 `records/index.html`＋`records/app.js`（**日常入口單一 OAuth／雙分頁**）、`records/finance/index.html`、`records/income/index.html`（舊直達入口），再讀各自私人 Drive HTML；依 [records/README.md](records/README.md) 先備份後原位更新。
- **新增站點或系統性變更** → 同步更新本 README 的 URL 表、程式路徑、資料來源與跨站相依關係。

本 README 是 GitHub 管轄網站的**唯一中央總索引**；專用 Google Drive SOP 僅負責需要詳細操作程序的個別專案。**已停用的方案不得從舊文件推測為現役服務。**
