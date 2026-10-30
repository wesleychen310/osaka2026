# 私人學習網站：Google Drive × GitHub Pages 教材架構 SOP

版本：2026-10-11 · v1.0  
用途：供未來 ChatGPT 對話、ChatGPT Work、其他 AI 或前端工程師接手。  
適用：ISLP、ATPA、PA、FAM-S，以及未來雙語精算教材。

## 0. 未來對話先讀這裡

**主入口**：https://wesleychen310.github.io/osaka2026/learning/  
**GitHub repo**：`wesleychen310/osaka2026`，預設 branch `main`。  
**本文件**：`learning/README.md`。  
**ATPA 精華版**：[網站](https://wesleychen310.github.io/osaka2026/learning/atpa-prereq/)／[專案 README](./atpa-prereq/README.md)。  
**ISLP 完整雙語閱讀器**：[網站](https://wesleychen310.github.io/osaka2026/learning/islp-reading/)／[相容性 README](./islp-reading/README.md)。  
**FAM-S 參考**：[Lesson 11](https://wesleychen310.github.io/osaka2026/learning/fam-s-reading/lesson11/)／[WORKFLOW](./fam-s-reading/WORKFLOW.md)。

## 1. 核心架構（Separation of Content and Presentation）

```text
Google Drive：owner-only 原始雙語 HTML（含英文、繁中、原公式、原圖、表格）
   ↓ Google OAuth，瀏覽器 fetch Drive API
GitHub Pages：公開、無教材正文的 index.html 閱讀器
   ↓ JavaScript 解析 DOM、配對語言、選章節及閱讀範圍
   ↓ CSS 控制字體、手機寬度、左右雙欄、公式局部滑動
使用者瀏覽器：私人教材 + 三模式閱讀介面
```

重要：**網站 HTML shell 與教材 HTML 是兩種不同的 HTML**。
- GitHub `learning/atpa-prereq/index.html` 是**登入、提取及篩選程式**，可以公開。
- Google Drive 的 `ISLP_CH04_雙語課本.html` 等是真正教材原稿，**owner-only**；不應直接 push 到公開 GitHub。
- 精華版沒有單獨的 Drive HTML 正本；目前**從 Drive 讀取完整版後在瀏覽器裁剪為 23 小節**。因此便利於維護，但下載量仍按整章計。
- 這個模式可降低重複建置時間；每個新章節仍須核對 DOM 結構、錨點、圖表、OAuth、手機排版。

## 2. 目前專案實作與程式位置

| 範圍 | GitHub 路徑／私人來源 | 作用 |
|---|---|---|
| 學習首頁 | `learning/index.html` | ATPA 精華版連結排第一 |
| SOA ATPA 官方 Modules | `learning/atpa-modules/index.html`、`reader.js`、`reader.css` | Module 1 已建五批：1.1.1–1.3.8；Part 01 Google Doc `1TTzOcWZ24Z0IpjcFcXrl723FC3gUUC-H6ATG0OoXuNA` 由 OAuth `files.export?mimeType=text/plain` 載入；Part 02 HTML `1d9aE2vG8yqOohQvDM6dztCvNaXrqWdR2` 由 OAuth `files.get?alt=media` 載入；四模式，後續可分批擴充；專用 `README.md` 記錄驗收 |
| ATPA 精華版讀取及過濾 | `learning/atpa-prereq/index.html` | OAuth、下載 Drive 原稿、23 小節章節清單、DOM 篩選 |
| ATPA 三模式控制 | `learning/atpa-prereq/reader.js` | 全中文、全英文、左右對照；使用獨立 localStorage key |
| ATPA 手機版 | `learning/atpa-prereq/reader.css` | CSS Grid 英文左／中文右，iPhone 窄螢幕不改上下欄 |
| ISLP 共用語言配對 | `learning/islp-reading-mode.js` | 解析 `.pair`、設定語言 class、段落對位、標題等；完整版仍有四模式 |
| ISLP 共用相容樣式 | `learning/islp-reading-fam-layout.css` | Chapter 4–6 既有雙欄樣式，精華版 CSS 在其後載入 |
| ISLP 章別修正 | `learning/islp-reading-ch05-fixes.css`、`learning/islp-reading-ch06-fixes.css` | 原版數學 SVG 溢位相容 |
| 原始教材 | Google Drive | 完整原文、繁中、Equation、Figure、Table、caption、Python code |

**Google Drive 原始雙語教材資料夾**：https://drive.google.com/drive/folders/1uLenu319fQEQwltPasYv1HH_EL6Swk4q

四章 Drive source File ID（來源與程式配置對照，勿私自改）：
- Ch 4: `1fUhbSm_tOL4jnF9zHTEP99y71gYASDJG`
- Ch 5: `1JfsQ4Kfdr7TS8v5iTEGTEiZVxmw8a9zT`
- Ch 6: `1ORIpJ-VNw8NGpNc_jAg79akwgkttw1FR`
- Ch 8: `1ROu_a2Os338NueAubKuVwWKVBua9YFCk`

不要把 access token、使用者個資或 owner-only HTML 正文提交至公開 repo。

## 3. ATPA 精華版固定閱讀規格

**只有三模式**：
1. `zh`：全中文，原文段落隱藏，但公式、Figure、Table、程式、章節號保留。
2. `en`：全英文，對應繁中段落隱藏。
3. `parallel`：**英文左、繁中右，等寬兩欄；iPhone 320px 直式也需左右對照**。長算式、表格和 code 在所屬容器水平滑動，絕不讓整頁橫向溢出。

**ATPA 精華版 23 個 subsection**：
- Ch 4：4.3.1–4.3.4、4.6.1–4.6.3（7）
- Ch 5：5.1.1、5.1.3、5.1.5（3）
- Ch 6：6.1.1–6.1.3、6.2.1–6.2.3（6）
- Ch 8：8.1.1–8.1.4、8.2.1–8.2.3（7）

這是**針對銜接 ATPA Modules 的自訂先修安排**，不能標成 SOA 官方必讀範圍。

**注意架構**：原完整版 `islp-reading-mode.js` 目前提供四模式。精華版用獨立 `reader.js` 隱藏第四種並使用自己的設定，**不修改完整版通用控制器**。如未來新增大量教材，可重構共用三模式核心，但必須先做回歸測試，避免破壞既有頁面。

## 4. 圖表／公式／精確性

- 每個選定小節必須完整保留英文原文、繁中、Equation／inline math、Figure、Table、caption、footnotes、Code、Output、heading、anchor；不能以教學摘要替代。
- Figure 請用原私人教材的原圖或合法來源截圖，不能用相似圖假冒；保留圖號、圖說、所屬小節。
- 長公式可使用容器 overflow-x:auto，維持可讀性與數學 SVG/LaTeX 精度。
- 數學與數字錯誤必須查原書；如修改 Drive 正本，遵守第 6 節備份。
- 雙語需逐段對位；英文原文與繁中翻譯保留原意；英文專業詞和原始段落不可因版型切換而丟失。
- 若原 HTML 的 table 沒有局部滑動 wrapper，可以在閱讀器 DOM 階段補 wrapper，不要修改表格資料內容。

## 5. 未來新增一本書、一章、一種閱讀介面的工作流程

1. 先讀本 README，再讀最接近的專案 README 和原始教材，核對 Chapter／Section／Subsection、Figure、Equation、Table、Example。
2. 在 Google Drive 的**私人資料夾**保存 source HTML，保留正確的英中 `.pair` 結構與原錨點（`#s431` 等），並記錄實際 File ID、parent、權限。
3. 在 GitHub 建立新的**網站 shell**；沿用 OAuth、語言配對 JS 與現有 CSS，以**獨立專案設定**控制所需顯示模式。新需求能由 CSS 解決時不改原文。
4. 若只需要節選，利用既有 source 以 DOM 過濾；必須以 source 結構判斷小節邊界，保留邊界內圖表和圖說。確認每個原錨點可深連結。
5. 用不同模式與裝置寬度驗收；逐章比對 source 與節選後的 bilingual pair／Figure／Table／Equation 數量與位置。
6. 只有完成真實驗收後才標示 COMPLETE；若只是 GitHub commit 已完成，標記「程式碼已部署／私人實機待驗收」。
7. 把本次變更、檔案位置、決策、待驗收、rollback 指引寫回所屬專案 README；若是跨專案規則，更新**本總 README**。

## 6. 資料安全與變更管控

- GitHub 公開 repo：**只放前端程式、結構規範、公開 UI 資產與 SOP**。原受限教材、完整英中正文、私人內嵌圖表放 Google Drive 受控檔案。
- Google Drive 檔案需保留 owner-only 權限；勿對外公開完整教材來省 OAuth。
- **如需覆寫 Google Drive 既有教材，務必先在原父資料夾 `_backup` 建立帶日期的舊版備份**，驗證備份、保留原 File ID、名稱、父資料夾與權限，更新後讀回確認。
- GitHub 修改採 commits，務必在寫入前 `fetch_file` 取得最新 SHA，並在 CSS／JS URL 的 `?v=` 更新版本避免手機快取。
- 涉及大量原文 / 新圖表 / 公式抽取，應針對原 PDF 逐項驗收，不把排版成功誤認教材校對成功。

## 7. QA 與狀態紀錄

**建議驗收格**：至少 320、390、768、1130 px × `zh`、`en`、`parallel`，每章 12 組，四章 48 組。檢查語言切換、標題、錨點、段落同行雙欄、Figure、Table、公式、跨頁圖說、code、局部捲動、TTS、登入與回退。真實 iPhone Safari／Google OAuth 必須另做 E2E。

截至 2026-10-11 ATPA 精華版：**已有 GitHub shell + 三模式 CSS/JS + 專案 README；未宣稱已通過 48/48 或私人 Drive OAuth 實機 QA**。

狀態定義：
- `SHELL`：網頁入口與程式存在。
- `CONTENT`：原始私人教材可讀、節選內容與深連結可驗證。
- `UI-QA`：已通過指定寬度、三模式和圖表／公式排版。
- `PRIVATE-E2E`：owner 在實機完成 Google 授權、下載、模式切換與導航驗證。
- `COMPLETE`：來源、全文、翻譯、公式與原圖等該項需求全部驗收。

## 8. 未來 ChatGPT 對話可貼的指令

> 先讀 https://github.com/wesleychen310/osaka2026/blob/main/learning/README.md ，以及與本次教材相應的子專案 README。沿用「Google Drive 私人 HTML 儲存教材 + GitHub Pages shell + JS 控制閱讀模式/小節篩選 + CSS 控制手機排版」的架構。ATPA／精華版僅使用「全中文、全英文、英文左中文右」三模式；保留所有原圖、公式、表格及原錨點。不要把私人教材推到公開 GitHub。任何 Drive 覆寫前先在同層 _backup 備份；修改後核對功能、頁面與權限，把結果回寫 README。請區分程式已部署和實機真正驗收。


## 2026-10-12 新增｜SOA ATPA 官方 Module 1

- 新入口：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/
- 第 1 批：Module 1 — Data and Model Ethics §1.1.1–1.1.12，共 12 小節；私人 Google Docs 儲存 HTML 源碼（正文不在 GitHub）。
- 私人 Google Docs File ID：`1TTzOcWZ24Z0IpjcFcXrl723FC3gUUC-H6ATG0OoXuNA`，位於原雙語教材 Drive folder。
- 四模式：全中文／全英文／左右對照／大字橫滑；使用獨立 localStorage key。
- GitHub shell 與私人內容已寫入並靜態核對；**GitHub Pages CDN、真實 Google OAuth 與 iPhone Safari E2E 尚未確認**。完整的分批作業及退回 SOP 見 [ATPA Modules README](./atpa-modules/README.md)。

### 2026-10-12 ATPA 官方 Module 1 第二批
- §1.1.13–§1.1.24，原書 p.19–30；Google Drive 來源 HTML ID `1d9aE2vG8yqOohQvDM6dztCvNaXrqWdR2`；53 組英中對照、49 個 Reusable English。
- 網站 Part 02：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/?module=1&part=2#s1113
- 兩批 source 格式不同：Part 01 是原生 Google Doc 內嵌 HTML 文字；Part 02 是原始 HTML，注意 OAuth API 的不同下載方式。
- 已確認 Part 02 Drive 權限只包含具名帳號，無公開 anyone 權限；已完成原文比對 53/53，真實 OAuth／行動裝置 E2E 待驗收。

### 2026-10-12 ATPA 官方 Module 1 第三批
- §1.2.1–1.2.18，原書 p.32–52；18 小節、91 英中對照、11 原生 Tab、67 English Bank；File ID `1degysT_iLCSdWHtoj9HuZsgQVOOQ4lqc`。
- 網址：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/?module=1&part=3#s121
- Part 01 為 Google Doc export/text；Part 02/03 為 raw .html alt=media，均透過 Google OAuth 讀取，維持原受限權限。第三批與原 PDF 逐段 91/91 核對；現行法規未重新查證，保留 2023 年教材歷史時點。實機 OAuth/E2E 待驗收；見子專案 README。

### 2026-10-12 ATPA 官方 Module 1 第四批
- §1.2.19–1.2.28，原書 p.53–62；10 小節，8 題 Knowledge Checks（共 34 原書選項）；8 組教師推導解答（並非 SOA 官方答案）、逐選項解析、動態單選／複選。
- 私人 HTML ID `14305e_nGudobtCni8F0Q80vh6nK4uXQx`；網址：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/?module=1&part=4#s1219
- 原始題目／選項 42／42 逐字核對，Drive 僅具名使用者權限；已完成 GitHub 靜態程式碼檢查；Google OAuth 和跨裝置 E2E 待驗收。參照子專案 README。

### 2026-10-12 ATPA 官方 Module 1 第五批及章節進度
- §1.3.1–1.3.8（原書 p.63–73），8 個小節，20 個風險分類候選變數，3 個原書 SOA Sample Answers，24 筆原書 bibliography，65 組雙語正文與書目，33 個 English Bank 語塊。
- 私人原始 HTML ID `1EqGTGWeCtvEQHiuJKXhjUdecdSjNol2Z`，text/html，OAuth alt=media，45,631 bytes。
- 網址：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/?module=1&part=5#s131
- **Module 1 全部 60 個編號小節已建（Part 01–05）**；這僅代表教材內容完整到章節層級。請於最後一批完成實際私有 OAuth、GitHub Pages、iPhone/iPad/Mac 四模式、8 題 MCQ 與 3 組 Sample Answers 的端到端驗收，並補檢 PDF 封面／目錄 p.1–3。詳細紀錄見 `learning/atpa-modules/README.md`。


### 2026-10-12 ATPA Module 1 單頁目錄重構

- 網址統一：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/ 。
- 模組 1 已改為 60 個編號小節連續載入；左側按 1.1／1.2／1.3 分組導航、手機抽屜目錄；取消使用者可見的「第幾批」分頁及卡片。
- 5 個原 Google Drive 私人檔案保持原 ID 與 OAuth 權限；四種閱讀模式、8 題知識檢核及 3 個原書 Sample Answers 完整保留。
- 原有 `?module=1&part=N#sXXXX` 可繼續使用，但新首頁不再顯示分檔結構。GitHub Pages / OAuth / 實機 Safari 最終驗收仍未完成。


## 2026-10-12 SOA ATPA Module 2 啟動及 §1.1 完成

- 正式入口：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/
- **Section 1.1 Data Pipeline §1.1.1–§1.1.36 全部完成（PDF p.8–48）**；Module 2 全部仍有 223 小節，後續從 §1.2 Reading and Writing Data 接續製作。
- 已建立 3 個具名授權的 Google Drive HTML：`1D-HUEZGGTor5P5HFZb4vmNm9C9sXS89B`、`1DnflW10dpSj9mys_sHR_3ybcQv_soHKw`、`141OqP4-RikeZXWQO4V3VFzxGtkZ7dWCE`，合計 173 組雙語、36 張教學卡、110 個英文實務語塊、5 題原書 MCQ、原書 p.15 圖及 p.17 表。
- 直接延用 Module 1 的單一頁面、左側目錄、手機抽屜和「英文 → 上中文下英文 → 英文」點按翻譯模式；公開 GitHub 只放空白殼及 CSS/JS，不放私人教材正文。
- QA：Drive metadata + 原始文字/圖片已讀回、部分文字逐段對 PDF 驗證（第一個來源 59/59、第二個 71/71）；HTML / JavaScript 靜態檢查通過。尚待持有者 Google OAuth、CDN Live、裝置實際操作及 7 個原書選項的跨欄逐字版面複核。
- 詳細製作 SOP：`learning/atpa-modules/module2/README.md`。


## 2026-10-12 ATPA Module 1／2 最新固定閱讀版型

- 使用者已將兩個 ATPA 官方 Modules 的閱讀模式**統一為全篇上中文、下英文逐段對照**，不顯示閱讀模式切換按鈕。原本四模式已廢止。
- 章節目錄、Google 授權、Knowledge Checks 與 SOA Sample Answers 保留互動；Google Drive 教材原稿不搬動。
- 入口：Module 1 `learning/atpa-modules/`、Module 2 `learning/atpa-modules/module2/`。未來任何新增單元請遵循此規格。


## 2026-10-12 最新有效規格｜四個全章閱讀模式（取代所有先前語言模式規定）

使用者最新明確指定 Module 1 和 Module 2 的**四個切換按鈕**，按鈕必須依以下順序呈現：

1. **全英文** (`en`)：英文原文、英文標題及原始練習題；對應繁中翻譯隱藏。
2. **全中文** (`zh`)：繁體中文翻譯與中文標題；對應英文原文隱藏。
3. **上中文下英文** (`vertical`)：每個段落的繁體中文在上，對應英文原文在下；預設模式。
4. **左英文右中文** (`parallel`)：每個段落英文左欄，繁中右欄，行文、章節標題及雙語小標題對應；手機維持兩欄。

- 四個模式透過 CSS 和 `document.documentElement.dataset.readingMode` 切換；全部資料仍在同一 DOM，不會重複向 Google Drive 下載，並以 `localStorage` 的 `atpa-modules-reading-mode-v3` 保存使用者目前模式，Module 1／2 共用偏好。首次進入預設上中文下英文。
- **先前「完全取消語言按鈕，固定上中文下英文」的紀錄已作廢**；先前的逐段「點按翻譯」也不是這一版的四種模式。所有後續章節必須遵循以上四按鈕規格。
- 網頁維持單一長頁、固定左側目錄／手機抽屜、SOA Knowledge Checks、SOA 原書 Sample Answers；私人授權與原稿不變。Module 1 顯示 60 小節，Module 2 目前 1.1 顯示 36 小節。
- 程式碼位置：Module 1 `learning/atpa-modules/{index.html,reader.js,reader.css}`；Module 2 `learning/atpa-modules/module2/{index.html,module2.js,module2.css}`，兩者共用 `reader.css` 之四模式排版。
- 更新版次 `20261012-four-modes1`；GitHub 檔案已讀回及 JavaScript 靜態語法驗證，四模式 CSS 選擇器與兩模組按鈕順序已逐項核對。**使用者 Google OAuth、網站即時部署、iPhone／iPad／Mac 真實排版仍待實機驗收。**

## 最新進度｜2026-10-12 ATPA Module 2

- **已完成：50／223 小節**（完整 §1.1.1–§1.1.36，以及 §1.2.1–§1.2.14），目前 §1.2 Reading and Writing Data 已完成 14／38 小節。
- **最新私人 HTML**：Google Drive `1-jBApP08QPdJ6DVdbI0RExnUSm6wre83`，涵蓋原書 p.49–64，14 小節、90 組英中對照。指定父資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`。公開 GitHub 只存閱讀程式。
- **網站**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s121 ，`module2.js` 有第 4 份來源的讀取映射，整頁連續閱讀。
- **下一步**：從 **§1.2.15** 接續製作至 §1.2.38，再進入 §1.3；保留四模式依序「全英文、全中文、上中文下英文、左英文右中文」。
- **詳細交接與 QA**：`learning/atpa-modules/module2/README.md`。內容結構和 Drive 權限已核對，尚待全部原文逐字驗證及實機 OAuth/手機版測試。


## 2026-10-12 ATPA Module 2 §1.2 Reading and Writing Data 完成
- 本輪從 §1.1 的 36 小節推進至 **§1.1 + §1.2 共 74／223 小節（33.2%）**；新完成 §1.2.1–§1.2.38，原書 p.49–93，含 5 題 Exercise、XML/JSON、XPath、R/Python、Excel/SPSS/SAS、Tall/Wide、Text File Read/Write。
- 三份新增私人 Google Drive HTML ID：`1-jBApP08QPdJ6DVdbI0RExnUSm6wre83`、`1L-yLFwsMii4TmnWVtGi4HQ5R8xNr0Xsn`、`1LdOL-zzs8NuK6XNx2vUtXbuO0GanOUNA`。教材仍是授權存取；GitHub 僅程式與導航。
- 正式入口：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/；四模式保持全英文、全中文、上中文下英文、左英文右中文。
- 靜態文本與程式檢查已完成；後 24 節為原頁英文加中文分段解說、待進一步逐段對位校稿，外部 Rmd CHUNK 解答未執行；Google OAuth 與跨裝置 E2E 待驗收。詳細紀錄：`learning/atpa-modules/module2/README.md`。

## 2026-10-14｜ATPA Module 2 下一批已完成：§1.4 Relational Databases

- 網站：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s141
- **目前完成 160／223（71.7%）**：§1.1 36 + §1.2 38 + §1.3 70 + §1.4 16。下次從 **§1.5.1 Data Validation** 製作，共 21 小節，原書起於 p.193。
- 新增具名授權 Google Drive HTML `1tnMUnufssHsrZoen0nio5M3NeitXAgM_`，§1.4.1–§1.4.16，20 英中對譯區塊、16 張教師卡、48 個英文語塊、15 張 SOA 原 PDF 頁面圖；原書 p.173–192 英文 16／16 節逐字比對通過。
- GitHub `learning/atpa-modules/module2/module2.js` 的第 10 個來源和左側 1.4 章節已新增，四種閱讀模式及私有 Google OAuth 保持原樣。README 詳細交接：`learning/atpa-modules/module2/README.md`。


## 2026-10-14｜最新 ATPA Module 2 §1.5 Data Validation 完工

- 進度：**181／223（81.2%）**，§1.1–§1.5 已完成並接上連續閱讀頁。正式網址：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s151
- 新的 §1.5 來源 `1XcX7WF9HE5J32zaTnlsc_LUsHcTOt2Q9`（原書 p.193–214）存於受限 Google Drive `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`；21 節、21 英中配對區塊、21 tutor、63 Reusable English、14 張原書頁圖。metadata owner + named reader。
- GitHub `learning/atpa-modules/module2/module2.js` 新增來源 `2:11`、第 1.5 章導航，驗證 181 unique sections；四模式和隱私權限不變。
- **下一批 §1.6.1–§1.6.29 Missing and Extreme Values**（p.215–244），後續 §1.7.1–§1.7.13 Case Studies（p.245–257），全部完成才是 223／223。
- 詳細 QA 與原稿異常、後續交接請讀 `learning/atpa-modules/module2/README.md`。已核對私人檔內容及 GitHub 靜態原碼；實際使用者 OAuth/iPhone 端對端尚待確認。


## 2026-10-14｜ATPA Module 2 完成 §1.6（最新進度）

- 正式入口：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s161 ，累計 **210／223 小節（94.2%）**，已完成 §1.1–§1.6，**下批 §1.7.1–§1.7.13 Case Studies**。
- 新私人 Drive HTML：`1qQyqkrgtUBSz4AgjhHI1mxp5x7OXm6si`，§1.6.1–§1.6.29，原書 p.215–244（含 p.238 跨頁），29 段官方英文／繁中詳解、29 精算教師卡、87 英文語塊、20 張原書頁圖，SHA256 `41cb331e6275c0d75c4a4ed77414e9d483ec569579a7b7377dff564d03be072f`。只存受限 Drive，不放 GitHub 原文。
- GitHub `learning/atpa-modules/module2/module2.js` 新增第 12 個來源及左側 1.6 目錄，四種閱讀模式保持原樣；實機 OAuth/跨裝置測試尚待完成。
- **交接 SOP 與完整 QA**：`learning/atpa-modules/module2/README.md` 最後一段 2026-10-14 §1.6。


## 2026-10-14｜SOA ATPA Module 2 §1.7 完成，官方主教材 223／223 節接入

- **正式私人閱讀網站**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s171 。§1.1–§1.7 全部 **223／223 個編號小節**，四個閱讀模式與左側目錄保留。
- **最新受限 Google Drive 原稿**：`1eR9g8wl5_ZKxCl5eXrWTtSQmS1OE26tZ`，原書 §1.7.1–§1.7.13、p.245–259；13 小節、15 組英文/中文詳解、13 教師卡、39 英文語塊、9 張原 PDF 頁面圖；SHA256 `e947f83679a29c23fadf103fdf439acd6220e9c96caead6379e621ebb643ff1e`。官方英文 15／15 來源區塊逐頁對照 PDF 一致。
- **未完成的外部來源**：案例原始 ZIP/CSV/XML、SOA CDN 詳細題目與 Sample Report PDF、R/Python Rmd 仍需另取得與實際執行；主 PDF 內的答案及案例敘述已納入，未擅自冒稱外部附件完成。
- 程式 `learning/atpa-modules/module2/module2.js` 已新增第 13 個來源、1.7 導覽與 223 unique section guard，`module2/index.html` 資產版號 `20261014-module2-complete`。**最新完整交接與驗收界線以 `learning/atpa-modules/module2/README.md` 最末 2026-10-14 §1.7 區塊為準。**


## 2026-10-14｜ATPA Module 3 正式啟動：§1.1 Model Accuracy

- **私人閱讀入口**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module3/ 。官方主教材共 211 節，已完成 §1.1.1–§1.1.10 **10／211**；新站左側先呈現七個完整官方章節，其中 §1.2–§1.7 均明示待製作。
- §1.1 原書 p.7–18，合併 PDF 1-based p.339–350，英文逐區塊依 PDF 原始順序核對。含 **10 小節、38 對英中來源、10 張精算教師卡、38 Reusable English、5 張原 PDF 面板／流程圖**（p.7/9/13/14/17）；p.8、15 原書空白。
- 私人教材 `ATPA_Module_3_1.1.1-1.1.10_私人雙語教材.html`：Google Drive fileId `1BIrPuTrxQ7xnxkZQbXoBUwjxKOIkYREb`，父資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，665,987 bytes，SHA256 `95e16bec54e872b978dafe9d5115a2382e75daab4ec75423f83bef030d2eba57`，僅具名 owner/reader，無公開分享。原 §1.1.1 翻譯對位修正前備份位於同層 `_backup`，備份 ID `1LcpVq21ldlG-99cnxkh6YuzJTUi8z-S0`。
- GitHub 公開介面：`learning/atpa-modules/module3/index.html`、`module3.js`、`module3.css`，延用 `../reader.css`。四模式保持全英文／全中文／上中文下英文／左英文右中文（預設第三項，中英文 16px）。
- **下一批 §1.2 Additive Models** 21 小節（原書 p.19–40），新增後應達 **31／211**；完整來源、QA/限制與續接 SOP 以 `learning/atpa-modules/module3/README.md` 為準。正式使用者 Google OAuth、手機端實機尚待驗收。

**2026-10-14 Module 3 首批原圖校正**：§1.1.1–§1.1.10 私人來源 `1BIrPuTrxQ7xnxkZQbXoBUwjxKOIkYREb` 已在更新前備份（`_backup` ID `1sDt59rh11_FAw6ovKiNRktBz-silPWfN`），原書 p.7、14、17 面板擴展裁切避免截掉末列。正本保留原 File ID；最新大小 665,987 bytes，SHA256 `95e16bec54e872b978dafe9d5115a2382e75daab4ec75423f83bef030d2eba57`。詳 `learning/atpa-modules/module3/README.md`。


## 2026-10-14｜ATPA Module 3 完成第二批 §1.2

- 網站：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module3/#s121 ，已完成 **31／211** 小節（§1.1 Model Accuracy 10 節 + §1.2 Additive Models 21 節），左側 1.2 章節可直接切換；四模式按鈕不變。
- **最新私人教材 File ID** `1tNSYwzEgD73jKz56KL5P3nlBO7xIucsP`，官方主 PDF p.19–40，21 小節、94 英中配對、17 張原圖、84 可重複使用英文語塊。Google Drive 仍限具名 owner／reader，公開 GitHub 不含受限原文及譯文。
- **重要限制**：官版 §1.2.8 p.26 三公式為破圖占位符，網站保留原頁並標記教師重建；外部 Rmd/CSV 沒有執行驗算，p.39／40 官方 MSE 數字來自原書。
- **下一批**：§1.3 Linear Mixed Models 共 29 節，印刷 p.41–71；最新完整交接與 QA：`learning/atpa-modules/module3/README.md`。


## 2026-10-14｜ATPA Modules 1／2／3 閱讀模式切換定位修復

- 問題：在長頁點「全英文／全中文／上中文下英文／左英文右中文」會因排版高度變動而跳到不相關段落。
- 已更新 `learning/atpa-modules/reader.js`、`module2/module2.js`、`module3/module3.js` 和三個入口 index.html cache（`20261014-reading-anchor1`），以目前閱讀段落和段內高度作錨點，切換後立即恢復近似閱讀位置。共用 CSS/私人 HTML 不變。
- Chromium 模擬 390px 與 1280px viewport，24／24 次四模式切換維持同一個段落 ID；正式 iPhone Safari / owner Google OAuth 尚未實機驗收。
- **課程進度不變**：Module 1 60 節、Module 2 223 節、Module 3 31／211 節（§1.1 與 §1.2）。Module 3 下一批 §1.3 Linear Mixed Models。

## 2026-10-14｜四種閱讀模式切換不跳頁（Module 1／2／3）

- **使用者要求**：閱讀長頁到某個段落時，按「全英文／全中文／上中文下英文／左英文右中文」，必須停留在**相同教材段落、相近的螢幕位置**，不可因內容長度變化跳到其他段落或小節。
- **正式修正**：`learning/atpa-modules/reader.js`、`learning/atpa-modules/module2/module2.js`、`learning/atpa-modules/module3/module3.js`。四個全頁語言模式及資料來源未變動。
- **技術處理**：在閱讀按鈕 `pointerdown` 時先保存當下可見的穩定雙語 `.pair` 或圖表錨點，避開切成全英文時會隱藏的 `details.tutor` 與 `details.phrases`。切換後依同一元素和垂直閱讀比例補償 scroll，暫停平滑捲動及瀏覽器自動捲動錨定；在重排的連續影格與延遲 110ms 時各做一次校正，支援 iOS Safari 的工具列 focus／viewport 變動。使用跨瀏覽器 `behavior:"auto"`。
- **三個站的 JS cache rev**：`reading-anchor2`（如再次調整程式碼必須更新 query 版本避免手機快取舊程式）。
- **驗證範圍**：三份 JS 已通過靜態語法檢查、四種按鈕仍保留。Chromium 以自建 140 節長文模擬桌面 1280×850 與 iPhone 尺寸 390×844，連續切換 `en → zh → vertical → parallel → en → vertical`，選定的同一段落始終維持在可視範圍。**尚未在使用者真實 Google OAuth 私人教材的 Safari／iPhone 上完成端對端驗收**。
- **下一步若使用者仍見跳頁**：索取實際 Module、節號、切換前後模式及機型；優先檢查被隱藏的教師卡、瀏覽器自動錨定和快取，不要把教材 DOM 拆成每種模式獨立重新載入。

2026-10-14：Module 3 已完成 §1.1 全 10、§1.2 全 21、§1.3 前 10，合計 **41／211**。新私人來源 `1M-jg8CsPSYdN0_aiJEZdGS9IWZ6FHAMO`，閱讀 `/learning/atpa-modules/module3/#s131`；§1.3.11–§1.3.29 待製作。


## 2026-10-14｜ATPA Module 3 §1.3 Linear Mixed Models 已接入（最新）

- **網站**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module3/#s1311 ，§1.1 10 + §1.2 21 + §1.3 29 = **60／211 小節（28.4%）**。後續 **§1.4 Neural Networks（48 節，p.72–126）**。
- §1.3 兩份正式來源：先完成的 §1.3.1–§1.3.10 `1M-jg8CsPSYdN0_aiJEZdGS9IWZ6FHAMO` 維持原樣；新增 §1.3.11–§1.3.29 受限 Drive `13HRUq3wFwJcUlhUtFNrVoI5FgtMqR8RC`，19 節、31 組英中來源、57 英文語塊、16 張 SOA 原 PDF 圖。最新教材 Google Drive 具名 owner/reader；不公開原文。
- 原書 p.53–71 隨機截距／斜率、縱貫資料、GLMM、Bühlmann–Straub 可信度。p.69 原書 175.08×50 與列示 8,574 的乘積矛盾已獨立標示。原稿文字層對照通過 19／19 節。
- GitHub module3.js 維持共用四模式、語言切換不跳頁，新增 `3:4`，總量 guard = 60，`EXPECTED_COUNTS=[10,21,10,19]`；上傳的整章校稿備用稿已移至 Drive `_backup`，不重複顯示。
- **完整交接**：`learning/atpa-modules/module3/README.md` 最末 2026-10-14 §1.3 交接；GitHub 靜態／Drive 權限已核對，真實 OAuth／iPhone 網站顯示未端對端驗收。


## 2026-10-29 新增 ACTEX Exam PA 14th Edition 私人雙語閱讀
- 網址：https://wesleychen310.github.io/osaka2026/learning/actex-pa/
- 原書兩冊 PDF 保留在 `官方參考書` Drive folder `1T_-yGaU53ZKDUuo3MgXKLn3R0pn63KgZ`，教材 HTML 建於其同層子資料夾 `ACTEX_PA14_HTML` id `1ioLk3mRCWF9VcZ8DL3p2_uy-OKK1Bc-V`（owner-only）。
- 第 1–2 批：印刷 p.3–6／上冊 PDF p.35–38，共 54 個英中逐段對譯單元；第二批 HTML `1o2I893Hn9ExOcDQhT-wcumS4GvQjUcna`，私人 HTML id `1KnmXkwNVVynwE9z8fG7rc2stbpm6O1y0`；支援全英文、二段式精讀（中文上英文下）、左右對照（英文左中文右）；正式來源校訂與真實 OAuth／Safari QA 待補。
- GitHub 僅公開 OAuth shell、CSS/JS、維護 README，教材均維持私人存取。詳細見 [ACTEX PA 專案 README](./actex-pa/README.md)。


ACTEX PA 更新（2026-10-29）：已擴充至 Chapter 1 印刷 p.8；全英文、二段式、左右對照。細節見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 智慧雙語閱讀改版：改為單欄 EN／中整頁切換，段落「看中文／看英文」可局部展開、保留原位置與偏好；移除左右、上下對照。既有 74 組中英內容原位保留，已潤飾部分繁中，後續翻譯以自然達意且完整不漏譯為準。詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 14：私人雙語教材已擴充至原書 p.3–10（8 頁、93 組）；本批新增 p.9–10（19 組），含輸入輸出圖、觀測表格、式 (1.1.1) 與腳註。智慧單欄 EN／中切換、單段翻譯；見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 私人雙語教材第 5 批：新增 Chapter 1 印刷 p.11–14（第一冊 PDF p.43–46），私人檔案 ID `1ddz_DGWd5WjcbWl3tDQibSwrJpBTXOvi`；新增 55 組中英逐段翻譯，累積 p.3–14 共 12 頁、148 組。§1.1 已完成並開始 §1.2，智慧單欄 EN／中與單段翻譯保留。進度詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 雙語閱讀第 6 批：Chapter 1 §1.2 印刷 p.15–17（PDF p.47–49），完整英文／繁中 31 組，私人 Drive 檔案 `1KSqgozcWpiG4RyhtsH6gdSgaTD3EU0HC`。累積 p.3–17，共 15 頁、179 組。Stage 1 問題定義完整上線，開始 Stage 2 資料蒐集與驗證。介面維持 EN／中智慧單欄切換與單段翻譯；本地 Chromium 排版 8/8 通過，尚未真實 iPhone Safari OAuth 驗證。詳細見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 14 私人雙語閱讀第 7 批：原書印刷 p.18–22（PDF p.50–54），增加 52 組英文／繁中，涵蓋抽樣代表性、Literary Digest 1936 選舉民調、時間範圍、隨機／分層／系統抽樣、練習 1.2.1／1.2.2 全題與解答、資料粒度。累積原書 p.3–22，20 頁、231 組雙語。新私有 HTML `1wxTMIn8qszoTE5SprlDhFbUp5UjZAjSw`，網站保留智慧單欄 EN／中、單段翻譯。詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 私人智慧雙語教材第 8 批已上線：原書 p.23–28（上冊 PDF p.55–60），57 組英中對譯，涵蓋 Data quality、資料字典、PII、Exercise 1.2.3–1.2.5、Proxy variables、Target Leakage 及 2020 PA Task 3，開始 Stage 3。累積 **p.3–28、26 頁／288 組**。新的私人 Drive HTML `1426dW78KmuTNaPFV7CrcFfgxpmiZPYpK`，智慧單欄 EN／中與單段翻譯維持；詳細見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 私人雙語網站第 9 批：新增原書印刷 p.29–33（第一冊 PDF p.61–65），48 組英文／繁體中文。內容包括訓練／測試切分、70/20/10 三分式驗證、模型選擇偏差、平方／絕對／零一損失，以及 RMSE、MSE、MAE 訓練及測試公式；新的私人 HTML File ID `1MklkHaW3ZMW36JvfoMok7oAg7V5HSqVp`。目前累積 p.3–33 共 31 頁／336 組，EN／中智慧單欄與單段翻譯不變。進度與限制見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 私人雙語教材第 10 批：新增 Chapter 1 印刷 p.34–39（PDF p.66–71），48 組完整英文＋繁中對譯。涵蓋 Exercise 1.2.6–1.2.8、RMSE／MAE 計算、分類錯誤率、超參數與 k-fold CV、模型選擇與 Stage 5 模型驗證導論。累積 **p.3–39 共 37 頁、384 組，10 批**。私人 HTML Drive ID `1cLnah1xyAPlDU_9Jasst1AUh5fFdeNil`，網站保留智慧單欄 EN／中及單段翻譯；詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 雙語第 11 批：原書 p.40–42（PDF p.72–74），新增 31 組英中段落，包含 Stage 5 預測／實際診斷圖、Stage 6 模型維護與 §1.3 偏差—變異數權衡導論。累計 p.3–42 共 40 頁、415 組，私人 HTML `1Ucb0rFKyUI0vOpW_S6RZlK4V4aDsFaN4`，智慧單欄 EN／中與單段翻譯不變。詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 第12批：§1.3 原書 p.43–46（PDF p.75–78），新增 28 組雙語，含原書 Figure 1.3.1、1.3.2 直接從私人 PDF 裁切內嵌；累積 p.3–46，44 頁／443 組。私人 HTML `1FiW3KG2dlbMhZLnQolAp17sRCF4cF8aQ`，後續將合併較大批次處理，按完整小節做品質檢查。詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 雙語第13批：一次新增印刷 p.47–56（PDF p.79–88）共10頁、71組，偏差—變異數分解 (1.3.1)、Figure 1.3.3、Exercise 1.3.1、§1.3.2 多項式迴歸模擬/R CHUNK 1。新增私人 HTML `1mudH3IWqheTTYxyGvYrRQREvlVKNhB_O`、`1WcC32Vm7U-zzu0hFNI6tx54Jbqkc31zJ`，保留各頁來源影像以便逐字校對。累積 p.3–56 共54頁、514組雙語。智慧單欄閱讀不變；真正 Google OAuth/iPhone 實機仍待驗證，英文轉錄及翻譯仍待最終校稿。詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 雙語閱讀第14批：一次擴充原書 p.57–70（PDF p.89–102）共14頁、93組中英研讀單元；涵蓋 §1.3.2 模擬結果與 §1.4 特徵生成／選擇、三道 Exercise 1.4.1–1.4.3。私人 HTML IDs：`1gM2hGKiTc_K1EMNLGKn0Te-_4TA6-maS`、`1SVTB1vmJyYY_MnGM2e_CK1_wnrjeYT0J`。累積 p.3–70／68頁／607組；每頁保留原書完整影像供核對，研讀稿仍需逐字校對，不可視作完整逐字轉錄。下一批 §1.5 Review Problems 自 p.71 開始；詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 私人雙語第 15 批：一次新增原書 p.71–88（PDF p.103–120），**18 頁、144 組雙語研讀稿**；第一章 §1.5 Review Problems 完成，第二章 Data Exploration and Visualization 已開始，包含 persinj 理賠資料、數值型統計、直方圖、偏態及離群值、對數／平方根轉換、密度圖、盒鬚圖與練習 2.1.1–2.1.2。兩份 owner-only Drive HTML：`1qdtRnFPEg_L4UwJCE6V_G5bPN2ZyBRVR`、`1XnVMLUSgD-lTi3Cg4C09US8IFHMU_DzG`。累積 p.3–88＝86 頁／751 組；新設第二章目錄連結，修正 reader.js 原有重複 `const select` 導致的語法問題。內容仍屬需逐頁校稿的研讀草稿，原書完整圖像保留在私有 HTML，詳細見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 私人雙語第 16 批：新增原書 p.89–102（上冊 PDF p.121–134），**14 頁／87 組雙語研讀草稿**。包含 §2.1.2 類別變數頻數／比例與 `geom_bar()`／`geom_col()`；§2.2.1 相關係數、散布圖、零相關不等於獨立、Exercise 2.2.1；§2.2.2 條件平均、分組盒鬚圖、交互作用、Exercise 2.2.2 與堆疊／並列直方圖。新增 owner-only Drive HTML `1ZtjP_FkAyW0kjx_cuX9XaUE8J_Hwi-RV`、`1EMATho6SyW440roXP3xiijVfPEM4m8Py`。累積 p.3–102 共 **100 頁／838 組／20 個私有 HTML 檔**；每頁附原書影像供核對，英中可編輯文字仍須正式逐字校稿。下一批 p.103 起。詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 第18批：原書 p.108–128（上冊 PDF p.140–160）一次推進21頁（其中3頁原書空白），新增99組精算／統計雙語研讀單元。第二章收尾（圓餅與長條圖、配色、chartjunk、§2.3）及第三章線性模型（OLS、矩陣、RSS/TSS/R²、t/F test、AIC/BIC、Exercise 3.1.1/3.1.2、模型診斷導論）。新 owner-only Drive HTML IDs `1lLQLr6vCtU5XY8W7767Sndf-IqTc6SNQ`、`15rQoQb3mbmliMuMF29SEXyPmqK6nzvGm`。累積 p.3–128 共126頁、962組／23個私有檔。**注意：可編輯中英文字為研讀稿，非已完成逐字原文及全文翻譯；每頁保留原書影像供完整核對。** 下批 p.129 起。細節見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 第19批：從 p.129 推進至 p.145（上冊 PDF p.161–177），新增 **17 頁／91 組中英研讀單元**，涵蓋同質變異與標準化／學生化殘差、Residuals vs Fitted、Normal Q-Q、Exercise 3.1.3–3.1.6、§3.1.3 的多項式／分箱／分段線性特徵，以及類別 dummy encoding 和基準水準。新增 owner-only HTML `1GVhPejVmtvmkgy8y4oivnD8Rlifo3t1v`、`1JMzOUZrvexV3y6j7lPNnq8VACMNQM8gv`；累積 **p.3–145、143 頁、1,053 組、25 份**。可編輯文字為雙語研讀稿，尚非原書逐字全文翻譯；每頁保留完整私有來源圖供逐字校稿。下一批 p.146 起；詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 雙語研讀第20批：原書 p.146–168（PDF p.178–200）新增 **23頁／88組**，涵蓋數字編碼類別變數、Exercise 3.1.7–3.1.17、三種 interaction、共線性／VIF、best subset、forward/backward stepwise、AIC 選模及 regularization 導論。新 owner-only 私人 HTML：`1n1Wilrw-WnL9co7DgzOTW-gKSRRPVbHs`、`1erL8oDoR-K4Id9uoXzL_LToIyh_Drfny`，每頁保留來源影像供核對。累積 p.3–168 **166頁、1,141組、27份私有教材**。可編輯英文與繁中為待逐字精校的研讀稿，並非已完成全文直譯。下一批 p.169 起；詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA 雙語第 21 批：原書 p.169–190（PDF p.201–222）新增 **22 頁／97 組英中研讀單元**，完整保留每頁原書影像。§3.1.5 正則化包含 Ridge／Lasso／Elastic Net、λ／α、標準化、CV 與 Exercise 3.1.18–3.1.20；§3.2 Advertising 案例包含 200 筆資料探索、相關係數、Figure 3.2.1–3.2.3、Task 1／Task 2 與 lm／summary／confint／predict、TV 簡單線性模型。新 owner-only 私人 HTML：`1WQ_9tW-O7K8vGx5SMO_u_wYXNlyKhzgQ`、`1CLn25X1-H819dbh-EDNtMnMo8lhoZYyx`。累積原書 p.3–190＝**188 頁／1,238 組／29 份私人 HTML**。**可編輯文字是研讀稿，並非完整逐字英文＋中文直譯；未校細節請展開原頁影像。** 下一批從 p.191 接續 CHUNK 11；詳見 `learning/actex-pa/README.md`。


2026-10-30 ACTEX PA Safari 載入修復與第22批上線：修正舊版 29 份私人教材必須全部順序下載才能顯示的設計，改成一次只載入所選頁碼、18秒逾時與重試、頁碼切換、錯誤提示，保留 EN／中智慧單欄閱讀。手機控制列亦已修正換行。原書 p.191–209 共19頁／91組已接入，累積 **p.3–209／207頁／1,329組／31份私人 HTML**。原 manifest 備份並原地更新，所有教材仍 owner-only。JS 語法及模擬 Drive 請求/403 回應已通過；真實 iPhone Safari Google OAuth E2E 尚待驗證。詳見 `learning/actex-pa/README.md`。


2026-10-31 ACTEX PA 第23批：一次新增 **原書 p.210–233 共24頁／126組**，§3.3 Credit 資料 Task 1–6，包含 400 筆資料／11 變數、敏感屬性公平性、零值與平方根轉換、相關係數與移除 Limit、數值／類別探索、Income×Student 交互作用、分層 train/test、factor 基準組重設與 caret::dummyVars。四份每份六頁的 owner-only Drive HTML IDs：`1TINrEVWXFOwairKNdK8T0jtJESWaT_Vs`、`1NCmolCVFdJ5PiP-QMozRqp_crJoV6UsU`、`17bEmLWh8vVaLs_zGYWggddanJqQJrJkQ`、`1kmBk_-tb1UTTHxlbCqc7iqSWdWQjnY4l`。**累計 p.3–233／231頁／1,455組／35份私人檔**；原始頁面與圖表完整保留，英中可編輯文字仍是非逐字全譯的研讀稿。下一批 p.234 起 Task 7。公開 GitHub 只存頁碼清單、UI 程式及 README；詳細見 `learning/actex-pa/README.md`。


2026-10-31 ACTEX PA 第24批：原書印刷 p.234–257／上冊 PDF p.266–289 **新增24頁、133組雙語研讀單元**，完成第三章 §3.3 的 TASK 7–10（stepAIC forward BIC/backward AIC、test RMSE、殘差診斷、glmnet/elastic net、cv.glmnet、lambda.min 與 lambda.1se）與 §3.4 複習入口。四份每份六頁的新 owner-only Drive HTML：`1VPK6XNv4Q4EcXXXZ2dL5Vq1NbjqRxFhb`、`1lL2uBFmAdUlMRmauiL-_1wpu-uCzvZYA`、`131FkPJ-pzjLfUfYL--dLy60YJOoUwYYm`、`1cl3ZGvfIx4VsIgc_XsqEASEDtJgL9jpU`。累積 **p.3–257／255頁／1,588組／39份私人教材**。每頁完整原圖另保留15處重要表格/圖形裁切。注意可編輯英文與繁中仍為研讀草稿，非逐字全譯；iPhone Safari 實機端到端未驗收。下批從 p.258 起，p.261 進入 Chapter 4。詳見 `learning/actex-pa/README.md`。


2026-10-31 ACTEX PA 章節目錄問題修正：使用者 iPhone 截圖顯示第 4–8 章與附錄灰色未完成項目被排在第 1 章小節前方，造成內容缺失疑慮。核對 manifest **p.3–257／39 私人 HTML／1,588 組雙語研讀單元**且印刷頁碼區間連續；**第 4 章 GLM 從 p.261 起，確實尚未製作**。已逐項檢查既有 **106／106 小節錨點**皆存在。GitHub 閱讀器改為第 1–3 章獨立可收合分組、小節就近歸章、未製作的第 4–8 章／附錄預設收合，且支援小節 URL 的深連結定位。Safari 單檔按需載入保留，實機 OAuth E2E 尚待驗證。詳見 `learning/actex-pa/README.md`。
