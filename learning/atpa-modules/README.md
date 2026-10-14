# SOA ATPA 官方 Modules｜私人雙語電子教科書

版本：2026-10-12 · batch 5（1.3.1–1.3.8）
狀態：**五批共 60/60 個小節已有私人 Drive 教材及 GitHub 閱讀器路由；來源文字與結構已靜態核對。GitHub Pages live、真實 OAuth／iPhone Safari E2E 待驗收。**

## 1. 網站與路徑

- 學習首頁：https://wesleychen310.github.io/osaka2026/learning/
- Module 閱讀入口：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/
- 第一批深連結：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/?module=1&part=1#s111
- GitHub shell：`learning/atpa-modules/index.html`
- UI：`learning/atpa-modules/reader.css`
- OAuth／內容載入及模式切換：`learning/atpa-modules/reader.js`
- **Google Drive 授權儲存的原始內容**：`ATPA_Module_1_Part_01_1.1.1-1.1.12_雙語私人教材_DATA`（Google Docs；內文儲存為 HTML 純文字），File ID：`1TTzOcWZ24Z0IpjcFcXrl723FC3gUUC-H6ATG0OoXuNA`。
- Drive 原稿資料夾：https://drive.google.com/drive/folders/1uLenu319fQEQwltPasYv1HH_EL6Swk4q
- PDF 權威來源：SOA ATPA Module 1 — Data and Model Ethics，created 2023-04-06，source pages 1–73，Google Drive `ATPA_Official_Modules_1-4_Combined.pdf`；已對照 Project 上傳 PDF。

## 2. 固定架構與安全邊界

```text
Google Drive 授權 Google Doc（Part 01）／原始 HTML（Part 02–03）
          ↓ OAuth drive.readonly
Drive REST files.export?mimeType=text/plain（Part 01）／files.get?alt=media（Part 02–03）
          ↓ JavaScript DOMParser
GitHub Pages 公開 shell（不含教材正文／英文原文／繁體翻譯）
          ↓ CSS / JS 四模式
使用者私人瀏覽器閱讀
```

**注意：Part 01 使用原生 Google Docs 儲存 HTML 純文字；Part 02、03 使用私人原生 .html 檔案。** 瀏覽器以 Google Drive export text/plain 取得 HTML，方便 connector 直接更新內容，避免將受限教材推到公開 GitHub。後續新增批次建議直接採 Drive HTML raw 檔，但須維持原始 File ID／授權策略的可追溯性。

只有 GitHub 公開：HTML shell、CSS、JS、README。不得將來源全文、已翻譯的完整正文、Token 或私人圖片推到 GitHub。

## 3. 已完成範圍

- 1.1 Ethical Framework 下 **1.1.1–1.1.12，共 12 小節，源 PDF p.4–18**。
- 第一批私人文件內有 **50 個 .pair**（英文原文對繁體中文）、12 個 `details.tutor`、12 個 `details.phrases`。
- 1.1.4 Amazon 案例原有三個 Tab 已完整轉成 HTML details，保留三段教訓及跨頁原文。
- 1.1.6 四個 Tab 已轉成 HTML details，記錄原 PDF Tab Title 的異常序號。
- 1.1.9 四張 Flip Cards 已轉成 HTML details。
- 1.1.2 原 PDF 誤標「Module 4 Learning Objectives」已明確註記。
- 1.1.4 原 PDF 非本案例的 BreastCancerWisconsinDataSet.csv 連結已註記。
- 已用 PyMuPDF 原文核對 50 段，除 1.1.4 跨頁段落需將 PDF 頁眉頁腳分隔後人工核對外，其餘 49 個 paragraph/list-item 英文文字能對應 PDF。

## 4. 閱讀器功能

- `zh`：全中文，原 Section 號及中譯標題保留。
- `en`：全英文，隱藏繁中段落與教學卡。
- `parallel`：同一 `.pair` 英文左、繁中右；手機同樣維持兩欄。
- `swipe`：大字橫滑，單段英文與繁中左右滑動。
- 於 `localStorage` 單獨記錄 `atpa-official-module-language-v1`，不干擾 ISLP 閱讀器。
- 導航根據私人 HTML 內容動態建立，可用 `#s111` 到 `#s1112` 深連結。
- 教材中的外部連結限制 HTTP(S)，載入內容清除 script、iframe、inline event handlers。

## 5. 接續製作 SOP（下一批 1.1.13–1.1.24）

1. 以原 PDF p.19–30 順序擷取全部標題、段落、Tab、List、Figure、Footnote；按原稿頁碼標記。
2. 逐段英中翻譯，為每節補一張「核心概念／精算例子／類比記憶」教師卡，3–5 個 Reusable English。
3. 只將私人教材正文寫入 Drive；可新建 Part 02 Google Drive 授權 Google Doc，並在 `reader.js` 的 `SOURCE` 新增 `1:2` 對應資料（擴充 Module 1 Part URL）。
4. GitHub 資源變更前先抓 blob SHA；完畢更新 `?v=`，避免 Safari cache。
5. 測試來源段落數、雙語配對、Tab 卡片、深連結、320/390/768/1130px × 4 模式。
6. 完成 Google 帳號私人 OAuth／實機 Safari 檢查後，才從 `CONTENT` 升級 `PRIVATE-E2E`，並記錄於此。

## 6. 驗收邊界與退回方法

- 已通過：Drive 文件建立、來源目錄移入私人教材資料夾、Docs 文字 fetch/export、50 個 pair 及 12 小節靜態核對、GitHub 程式碼寫入。
- 待完成：Google OAuth owner 實機授權、網頁從 Drive export 加載 E2E、iPhone/iPad/Mac 各自視覺測試、2026 GitHub Pages CDN 部署核實。
- 來源原文屬 2023 年教材；補充的 2026 法規資訊應另列來源，**勿默默改寫原書文字**。
- GitHub 各檔透過 git commit 回復。Google Drive 更動任何已存在的 Part 原稿前，應在原父資料夾 `_backup` 建立帶日期的備份並驗證，再於原 File ID 更新。

## 2026-10-12 第二批交付｜1.1.13–1.1.24

- 閱讀網址：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/?module=1&part=2#s1113
- **SOA 原教材 p.19–30，12 個 section、53 組英中逐段配對、12 組「核心概念／精算例子／類比」教師卡、49 個 Reusable English。**
- Google Drive source：`ATPA_Module_1_Part_02_1.1.13-1.1.24_雙語私人教材.html`；File ID `1d9aE2vG8yqOohQvDM6dztCvNaXrqWdR2`；MIME `text/html`；原始長度 **55,181 bytes**，SHA256 `d3997ceeb1e24496956e04c33678f24613e60b5e1084f17bb1a39f4d0f988320`。
- Google Drive folder：`1uLenu319fQEQwltPasYv1HH_EL6Swk4q`。metadata 已驗證其 permission entries 為明確的 user（無 `anyone` 和 `domain`），保留既有明確指定使用者的私人讀取權限；絕不改成公開連結。
- `reader.js` 現區分 `kind:native`（Part 01 Google Doc，`files.export?mimeType=text/plain`）與 `kind:raw`（Part 02 私人 HTML，`files.get?alt=media`）；二者皆使用 OAuth drive.readonly，並共享四模式、動態小節目錄與相鄰批次導航。
- 源 PDF 所有 12 頁各含同一個 xref=31 的重複版面圖像（為共用裝飾資產）；源章節沒有獨立的統計 Figure 需重建。
- **核對紀錄**：53/53 組英文原文正規化後均可在對應原書 PDF 頁面找到；保留 1.1.13、1.1.14、1.1.19、1.1.23、1.1.24 五組原有 Tabset；1.1.13 Sampling Bias 與 Implicit Bias 各以獨立段落對譯。原書 Component Table 的 Tab Title/Tab Text 錯置已列註記。無省略正文的摘要替代行為。
- **QA 邊界**：Github 內容已提交並讀回，Google Drive 元資料與 bytes 已讀回；尚需真實 owner Google OAuth E2E／iPhone Safari、iPad、Mac 實機視覺驗收；部署連線視使用者 Google 授權結果為準。

### 新增下一批工作範圍
- Part 03：1.2.1–1.2.18 ✅ 原文雙語來源及 GitHub 路由已完成；E2E 待驗收
- Part 04：1.2.19–1.2.28 ✅ Summary + 8 Knowledge Checks，教師推導解答、互動作答（實機待驗收）
- Part 05：1.3.1–1.3.8 ✅（Life Insurance Underwriting Case Study + SOA 原書 Sample Answers + Bibliography）
- Part 06：全 Module 73 頁內容核對與實機完整驗收

## 7. 待續建清單

- Part 02：1.1.13–1.1.24 ✅ Google Drive 原稿、GitHub 路由已建立（私有實機 QA 待驗收）
- Part 03：1.2.1–1.2.18 ✅ 原稿與路由已部署程式碼（E2E 待驗收）
- Part 04：1.2.19–1.2.28 ✅ Drive 內容及 GitHub 路由完成（實機待驗收）
- Part 05：1.3.1–1.3.8 ✅ Drive 私人 HTML、GitHub 網站與相鄰批次導航已建置；OAuth／實機 QA 待驗收
- Part 06：完整 73 頁來源、8 Knowledge Checks、3 Case Study Questions、跨裝置/模式、法規補充與最終驗收。

## 分享權限核驗狀態

連接器能確認原稿位於指定的 Google Drive 資料夾，且要透過 OAuth 才能由網頁請求。其 metadata 回報 `shared=true`、`source_visibility_status=access_not_verified`，未返回可檢視的 permission entries，因此**目前無法確認「一般存取權」是否為「受限」**；請在 Google Drive 分享對話框確認。本專案不得以 `noindex` 代替實際私人權限。

### 2026-10-12 Component Table 欄位精確性修訂
- 發現第二批 HTML 的 `data-component` metadata 把 1.1.19、1.1.23、1.1.24 誤標為 Table15、Table19、Table20；已按原 PDF 更正為 **Component Table11、Table12、Table13**。正文無更動。
- 更新前先在雙語教材原父資料夾建立 `_backup`（ID `1IGm40lPbbVwADj4ffg82gfVdx281YXvv`）並備份舊版（ID `11oncHhj9YtpuCYTBs_st-HMsmiBmESA3`，55,181 bytes，具名權限）；備份讀回驗證通過。
- 已採原 **File ID** `1d9aE2vG8yqOohQvDM6dztCvNaXrqWdR2` 直接覆寫 bytes，不改名稱、父資料夾或分享權限；重新讀回確認 Table11/12/13 均正確。

## 2026-10-12 第三批交付｜Regulations and Standards of Practice

- **範圍**：§1.2.1–1.2.18，原書 Module 1 PDF p.32–52。18 個小節、91 組英中配對、11 組原書 Tab（Component Table15:4、Table16:5、Table17:2）、18 組再解說一次、67 個 Reusable English。
- **Drive 私人 HTML**：`ATPA_Module_1_Part_03_1.2.1-1.2.18_雙語私人教材.html`；File ID `1degysT_iLCSdWHtoj9HuZsgQVOOQ4lqc`，MIME `text/html`，大小 86,476 bytes；SHA256 `e121c87682d50d1c7978e845085b0bb33dc1aa56161a64547e7216eb35bd2f5f`。
- **深連結**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/?module=1&part=3#s121
- **原始資料**：`ATPA_Official_Modules_1-4_Combined(1).pdf` Module 1 p.32–52，作者來源 Created 2023-04-06。讀者介面保留原文，繁中譯文由私人教學製作；原文與教師補充層分開。
- **文本核對**：91／91 英文內容均可對回 PDF（其中 1 組跨 p.51–52，先除去跨頁頁眉及 Component Table 續頁 `Content` 欄名後核對）。ASOP 12／23／41／56、GDPR、HIPAA、PIPEDA、NAIC、FACTS、歷史州法比較與原始法規引用保留。
- **小節 1.2.13 與 1.2.14 的法規條列及 1.2.18 FACTS**：新增加上原始 bullet markup，並在 GitHub `reader.css` 加入 bullet 顯示；保持英中雙語同列。已保留原稿可能有問題的標題序號與法規敘述，並以獨立編輯註解標示來源時間性。
- **嚴格區分法律狀態**：原稿的各州數字出自 Avraham et al. (2013)，教材作成日為 2023；不應視為 2026 年有效法律；其他法規摘錄亦需以主管機關現行規範重新核對。本批未進行獨立現行法規法律研究，維持原文忠實轉錄。
- **權限**：Drive `get_file_metadata` 返回 `source_visibility_status=permission_metadata_available`，僅 2 組 `user` permission（owner / named reader），無 `anyone` 或 `domain`；父資料夾仍 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`。
- **備份／修訂**：第一次上傳 85,720 bytes。調整 bullet markup 前先在原父資料夾的 `_backup` (`1IGm40lPbbVwADj4ffg82gfVdx281YXvv`) 備份為 `1iPt_DSi4XL6z2t7z6WCn4RDr83ym59bL`，原父資料夾、檔案權限與 Part 03 File ID 未變。更新後現有 86,476 bytes。
- **網站**：`reader.js` 新增 `1:3` raw HTML 載入，前／後批次導航依 SOURCE 動態產生；`index.html` 新增第三批，進度 42/60；`reader.css` 增列 bullet styling。獨立閱讀模式 `zh/en/parallel/swipe` 延用。
- **QA 邊界**：Drive 已成功上傳與讀回 metadata；GitHub 原始碼已提交與讀回。尚未完成登入者 Google OAuth、Chrome／Safari 真實視窗布局測試及 iPhone Safari E2E；GitHub Pages URL 工具無法直接存取，不能把 Github commit 等同 CDN live 驗收。

### 下一批

Part 04：§1.2.19–1.2.28（原書 p.53–62）：Module Summary、Ethical Principles and Framework 與 8 題 Knowledge Checks，須保留題目所有選項並區分原題與教師解答。

## 2026-10-12 第四批交付｜Module Summary 與 8 題 Knowledge Checks

- **原始教材範圍**：SOA ATPA Module 1 §1.2.19–1.2.28，原書 p.53–62；10 個小節，前 2 節為總結，後 8 節為各一題 `Component Table18–25` Multiple Choice Question。
- **私人來源**：`ATPA_Module_1_Part_04_1.2.19-1.2.28_雙語私人教材.html`；File ID `14305e_nGudobtCni8F0Q80vh6nK4uXQx`；MIME `text/html`；53,352 bytes；SHA256 `ba17dfb5f9dc18c91c5b8e10f1ee52f55eb3e3704bd9e2b10ea5062681917298`。
- **目錄與閱讀深連結**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/?module=1&part=4#s1219
- **數量核對**：10／10 個完整編號小節；原書 8／8 題幹，選項共 34／34 項（每題選項數依原書 4、5、5、4、4、4、4、4）；全 HTML 有 90 個雙語 pair（含原文正文、題幹選項、教師答案與逐選項講解），10 個 tutor 卡、38 個 Reusable English 語塊。
- **原文忠實性**：原書題幹／選項共 42／42 筆已與 PDF p.55–62 正規化逐字比對一致；保留 1.2.23 原稿標點 `dignity ,`、`against,.`，並標為原稿來源。
- **原書與教師補充界線**：Source 欄位全屬原始題目；`data-correct` 與 `teacher-answer` 為**私人教授從教材推導的答案**，屬編輯補充，並非 SOA 官方提供的標準解答。選項 1.2.27 的受保護群體問題依題目條件「one or more federal laws in certain situations」解讀，不能誤用為跨所有保險險種／司法管轄區的普遍判定。
- **教師推導答案**：1.2.21 → 2；1.2.22 → 1,2,3,4；1.2.23 → 1；1.2.24 → 1,2；1.2.25 → 2,3；1.2.26 → 1,2；1.2.27 → 1,2,4；1.2.28 → 1,3,4。
- **互動性**：Google OAuth 讀入 HTML 後執行 `activateQuizzes()`，各題自動生成 radio（單選）／checkbox（複選），可檢查答案、標記正確選項、展開逐選項解析、重新作答。讀原始 HTML 時不需要外掛；動態作答由公開 JS 提供，但**題目、答案內容只留在私人 Drive**。全中文／全英文／左右對照／大字橫滑四模式沿用。
- **靜態驗收**：Drive 已成功上傳、metadata 檢查檔案位於 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，權限只有 2 個 user（owner＋具名 reader），無 `anyone`／`domain`；Github `reader.js` 使用 V8 `new Function` 完成 JavaScript 語法檢查，`reader.css` 與 `index.html` 已提交。
- **尚未驗收**：GitHub Pages CDN 部署後的實際網頁顯示、私人使用者 OAuth、iPhone/iPad/Mac 顯示測試、作答表單在真實 Google 授權環境的 end-to-end 操作，需依序完成，驗收前不得標示為已通過。

### 下一批（Part 05）

§1.3.1–1.3.8，原書 p.63–73（含跨頁 bibliography）：保留壽險核保案例全部背景、3 題 Question 的原題、變數選項、教材原有 Sample Answers 以及 Bibliography，並將「SOA 原有 Sample Answers」與新增教師講解清楚區分。

## 2026-10-12 第五批交付｜Case Study + Original Sample Answers + Bibliography

- **範圍**：SOA ATPA Module 1 §1.3.1–1.3.8；原始教材第 63–73 頁，合計 8 個編號小節。
- **原始資料**：`ATPA_Official_Modules_1-4_Combined(1).pdf`（Module 1 Created 2023-04-06），來源 PDF p.63–73，逐頁以 PyMuPDF 擷取文字區塊並搭配頁面渲染核對。
- **Google Drive 授權檔**：`ATPA_Module_1_Part_05_1.3.1-1.3.8_雙語私人教材.html`，raw `text/html`，File ID `1EqGTGWeCtvEQHiuJKXhjUdecdSjNol2Z`，**45,631 bytes**，SHA256 `1951b28ae1fecce3bbc8e3090ac5001fd728d3156234cd485c1eb5ad9bb79a4c`；父資料夾 `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`。
- **讀取權限核對**：Google Drive `get_file_metadata` 返回 `permission_metadata_available`；2 個明確指定 `user` grant（owner 及指定 reader），沒有 `anyone` 或 `domain`，沒有為此次發佈改動分享設定。
- **網站入口**：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/?module=1&part=5#s131
- **內容精確性**：8/8 原書小節；65 個英文原文／繁體中文 paired blocks；20/20 個原書建議候選變數（Component Table27）；3/3 個原書 Sample Answer panels（Table28–30）；24/24 個原書 Bibliography entries（Table31）。65/65 個英文字區塊按所在原書 PDF 頁面正規化後均可查得；分頁 67–68 的跨頁 Table28 已合併回同一題解答。
- **原書來源與個人分析分層**：`soa-sample-answer` 放原書英文 Sample Answers + 忠實繁中翻譯，使用原生 `details` 預設收合（先自行解題再展開）；`tutor` 和 `phrases` 是私人教師額外補充，8 節各 1 組教學卡，合計 33 個 English Reusable Phrases。不可把額外評論誤標為 SOA 官方解答。
- **書目**：保留 24 筆原文引文與原書次序，中文補譯標題／引用主旨。保留原書提供的 `atpa_m1_bibliography.pdf` 外部連結；2023 年所引用的法規與檔案網址不保證 2026 年仍有效。
- **忠實性與編輯註記**：保留 1.3.1 來源 Panel Header 誤寫「Module 4 Learning Objectives」；保留 1.3.4 原文 `If your model can predicting…` 文法錯誤；Q2 之「數千棵決策樹平均」未自行升格為原書明言「Random Forest」；其餘技術延伸已明標「教師補充」。
- **GitHub**：`reader.js` SOURCE 新增 `1:5` raw `?alt=media` 私人載入，前後導覽新增 `5 → #s131`；`index.html` 五批導覽，標明 **60/60 個編號小節均有教材**；`reader.css` 為原書 Panel、Sample Answers 展開、手機長文獻列表增加樣式。公開 GitHub 程式不包含私有教材正文。
- **仍需處理的品質邊界**：Google OAuth 的登入用戶操作、GitHub Pages CDN 可用性、iPhone/iPad/Mac 上四種模式之實際互動及視覺品質，尚未完成實機端對端驗收；不能將程式碼提交等同實機通過。另外，原始 PDF 第 1–3 頁封面／目錄在本五批章節內容之外，後續正式整課驗收可另行補足。
- **後續**：第六批只做整合品質驗收：全部五批段落完整性、原書 Figure／Tables、四模式、Google Auth、導航、知識檢核互動、Sample Answers 展開、Safari 顯示及版型回歸，並修正任何已確認問題。



## 2026-10-12 正式閱讀器排版重構｜單一長頁 + 三組側邊小節目錄

**需求**：使用者要求閱讀時一整頁呈現 Module 1 全文，導覽由左側選擇節次；停止在使用者網站上顯示「第 N 批」卡片、分開的閱讀頁面及批次切換鈕。

### 正式使用方式（適用於全部 60 小節）

- 網址：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/ ，或舊網址 `?module=1`。
- 登入一次 Google OAuth 後，`reader.js` 從原私人 Drive **5 個原本已建立的來源文件**併行讀取、各別解析並以固定原書順序合併成一個 DOM 文章；**不搬動、不公開、不修改** Drive 資料本身。
- 在任一小節直接以 `#s111`、`#s1124`、`#s1219`、`#s138` 等原來已建立的錨點跳轉，不需要 `part` 參數。舊版 `?module=1&part=3#s121` 仍能載入統一頁並跳到原小節。僅有 `part` 而沒有 hash 的舊連結會自動使用原版相同範圍的第一個節次。
- 側欄依三大節：**1.1 Ethical Framework（24 小節）、1.2 Regulations and Standards of Practice（28 小節）、1.3 Case Study（8 小節）**。在桌面版固定於左側，目錄可展開、收合、滾動、顯示目前所在小節；手機／平板 800px 以下改由工具列「章節目錄」開啟左側抽屜，點任一小節自動收回。
- 保留全中文、全英文、左右對照與大字橫滑 4 種閱讀模式，以及 8 題 Knowledge Checks（單選／複選／解析）和 3 個 SOA 原書 Sample Answer 面板。
- 採嚴格完整性檢查：個別來源的小節數必須是 **12、12、18、10、8**，第一錨點必須依序為 `s111`、`s1113`、`s121`、`s1219`、`s131`，合併後必須有 60 個不同 ID；任一檔缺失則顯示錯誤，避免以漏頁的部分資料冒充完整教材。
- GitHub 公開的僅有 CSS、JS、空白 shell 和製作紀錄。英文全文、中文翻譯、Teacher Answer Keys 及附錄仍只保存在 Google Drive 具名權限資料中。
- **維持的待驗收項目**：GitHub Pages CDN 即時發布、實際私人使用者 Google OAuth、iPhone／iPad／Mac 4 模式視覺及 8 題作答端對端測試。無法以程式原始碼與 API 讀回取代這些實機確認。

### 後續新增 Module 2、3、4

每個模組沿用此單頁閱讀器：章節資料分檔可供維護，使用者只看到整頁目錄和連續正文，不再顯示批次或半成品入口。


## 2026-10-12 使用者指定第四種閱讀模式改版：點按翻譯

- **使用者可見閱讀模式**（保持順序）：全中文（`zh`）、全英文（`en`）、左右對照（`parallel`）、**點按翻譯（`tap`）**。
- `tap` 取代原來的 `swipe` 大字橫滑。每個 bilingual `.pair` 預設顯示較大的英文，點按一次顯示「**上中文、下英文**」的垂直雙語對照，再點一次只顯示英文。每段互相獨立，切換模式時重置為英文。原稿完整英中內容仍在 Drive，無資料異動。
- 小節標題與 1.1／1.2／1.3 章標題同樣是英文 → 中文在上／英文在下 → 英文的切換；原書的展開式 Panel summary 保留雙語標籤及原本的展開功能，避免觸發互動衝突。
- `tap` 支援鍵盤 Enter／Space 切換、tab focus 和 `aria-label`；Knowledge Checks 的 radio／checkbox 仍正常選取，點其內文可同步翻譯，不影響按鈕。
- 舊 `localStorage` 記錄為 `swipe` 時，載入將自動對映 `tap`。其餘三種模式操作不變，`reader.css` 已移除水平滑動專用樣式。
- GitHub `reader.js`、`reader.css`、`index.html` 已更新並以 `20261012-tap2` cache-busting；Google Drive 私人來源檔及授權設定未變。
- 本次已做原始碼靜態檢查；Google OAuth 私人實際瀏覽器與 iPhone Safari 端對端測試仍待使用者實機確認。

### 2026-10-12 點按翻譯第二次修訂

- 使用者明確指定循環：**英文原文 → 中文在上、英文在下（垂直對照）→ 英文原文**。此規格取代初版的「英文 ↔ 純中文」。
- JS 的 `data-tap-lang` 狀態採 `en` 和 `bi`；雙語配對 HTML 結構順序不變，CSS 使用 flex `order:1` 繁中、`order:2` 英文實現中文在上。
- 本模式小節、章節及可翻譯的小標題同步遵循中上英下；Knowledge Check 題目文字點按翻譯時避免意外選取 checkbox/radio；仍可直接點表單進行作答。
- 其他 `zh`、`en`、`parallel` 模式、原始 Drive 私人教材、60 節完整閱讀與 8 題考題保留。
- CSS/JS 版本 `20261012-tap2`；正式 OAuth 與 Safari 端到端測試仍需以使用者實際裝置確認。


## 2026-10-12 SOA ATPA Module 2 啟動及 §1.1 完成

- 正式入口：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/
- **Section 1.1 Data Pipeline §1.1.1–§1.1.36 全部完成（PDF p.8–48）**；Module 2 全部仍有 223 小節，後續從 §1.2 Reading and Writing Data 接續製作。
- 已建立 3 個具名授權的 Google Drive HTML：`1D-HUEZGGTor5P5HFZb4vmNm9C9sXS89B`、`1DnflW10dpSj9mys_sHR_3ybcQv_soHKw`、`141OqP4-RikeZXWQO4V3VFzxGtkZ7dWCE`，合計 173 組雙語、36 張教學卡、110 個英文實務語塊、5 題原書 MCQ、原書 p.15 圖及 p.17 表。
- 直接延用 Module 1 的單一頁面、左側目錄、手機抽屜和「英文 → 上中文下英文 → 英文」點按翻譯模式；公開 GitHub 只放空白殼及 CSS/JS，不放私人教材正文。
- QA：Drive metadata + 原始文字/圖片已讀回、部分文字逐段對 PDF 驗證（第一個來源 59/59、第二個 71/71）；HTML / JavaScript 靜態檢查通過。尚待持有者 Google OAuth、CDN Live、裝置實際操作及 7 個原書選項的跨欄逐字版面複核。
- 詳細製作 SOP：`learning/atpa-modules/module2/README.md`。


## 2026-10-12 最終定版｜固定「上中文、下英文」，取消閱讀模式按鈕

- 使用者要求：**Module 1 與 Module 2 一律使用繁體中文在上、英文原文在下的逐段垂直對照**。取消「全中文／全英文／左右對照／點按翻譯」四個切換按鈕，取消點按翻譯切換機制；不再記憶舊 localStorage 閱讀模式。
- Module 1 程式：`learning/atpa-modules/index.html`、`reader.js`、`reader.css`。使用 `document.documentElement.dataset.readingMode="vertical"`，固定 `.pair>.translation` 排在第一行、`.pair>.original` 排在其下；章節與小節標題也中文優先。資訊卡標題若同時有中英，以兩行顯示。
- Google OAuth 授權按鈕、手機章節目錄按鈕、Knowledge Check 檢查答案／重新作答按鈕及原書 Sample Answers 展開功能均保留；「不要按鈕」只針對切換閱讀語言的按鈕。
- 資產版本：`20261012-vertical1`；私人 Google Drive 原始五份教材的檔案、內容及權限完全不變。
- 使用者正式指定規格以**本節為準**，先前 `swipe`、`tap` 與四模式 SOP 視為舊版歷史，不可在後續教材重新套用。Module 2 使用相同固定版面。
- GitHub 程式靜態語法、資料來源設定及介面結構已檢查；正式使用者 OAuth/跨裝置實機操作仍需檢查。


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

## 最新 Module 2 交接指標（2026-10-12）

- §1.1 全 36 小節及 §1.2.1–§1.2.14 已製作，累計 **50／223 小節**。§1.2 後續接 **§1.2.15**，最終接到 §1.2.38。
- 新增私人 HTML Google Drive ID：`1-jBApP08QPdJ6DVdbI0RExnUSm6wre83`（原書 p.49–64，14 小節、90 英中配對）。受限具名使用者權限已驗證。
- 網站：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/ ，程式 `module2/module2.js` 新增 `SOURCE["2:4"]` 及 50 小節驗證。
- 最新四種閱讀模式：全英文、全中文、上中文下英文、左英文右中文。舊「沒有按鈕」與點按模式的紀錄已失效。
- **完整且優先的製作規範及驗收紀錄**：`learning/atpa-modules/module2/README.md`。


## 2026-10-13 字級修復｜上中文下英文模式（§1.1.8 等）
- 使用者回報 Module 1 `#s118` 的「上中文下英文」模式字級偏小。實際核對 `reader.css`：英文原始正文桌面 15px、手機 14px；英文小節標題桌面 17px、手機 15px；與單語模式的正文 16px 有落差。
- 已修復：上中文下英文的**繁中與英文正文均為 16px（桌面與手機）**，Knowledge Check 題目中英文同為 16px；英文小節標題桌面 `clamp(20px,2.2vw,23px)`、手機 20px。保留繁中在上、英文在下。
- GitHub 共用 CSS `learning/atpa-modules/reader.css` 更新，Module 1 `index.html` 以 `20261013-normal-font1` 刷新快取；Module 2 也引用同一份更新版 CSS，因此上下雙語正文在兩個 Module 的標準一致。
- 四模式按鈕（全英文、全中文、上中文下英文、左英文右中文）、目錄、私人 Google OAuth 載入和 Knowledge Checks 均保留。已完成 GitHub 原始碼核對；私人授權後的手機實機顯示仍待使用者確認。

## 2026-10-14｜Module 2 完成 §1.4 全 16 小節

- Module 2 累計 **160／223**；從原書第 173–192 頁 `§1.4 Relational Databases` 完成 16 小節後，下一批 **§1.5 Data Validation（21 小節）**。
- 新私人 Drive ID `1tnMUnufssHsrZoen0nio5M3NeitXAgM_`（受限 owner/reader），20 對來源英中區塊、16 教師卡、48 語塊、15 原書 PDF 頁面圖。GitHub 公開網頁只存 CSS/JS/file ID。
- 正式入口：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s141 ，四個模式仍依序為全英文、全中文、上中文下英文、左英文右中文。
- 詳細校稿與下一步 SOP：`learning/atpa-modules/module2/README.md`。


## 2026-10-14｜Module 2 已完成 §1.5 Data Validation

- **完成 181／223 小節（81.2%）**，§1.1–§1.5 完成；下個製作起點 **§1.6.1**，29 節，原書 p.215–244。
- 新增 Google Drive 受限 HTML `1XcX7WF9HE5J32zaTnlsc_LUsHcTOt2Q9`，§1.5.1–§1.5.21／印刷 p.193–214，21 英中配對、21 teacher notes、63 英文語塊、14 張原書截圖；兩道官方 Exercises 的題幹和參照來源均保留。
- 網址：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s151 ，四模式順序「全英文、全中文、上中文下英文、左英文右中文」不變；GitHub 僅留空白 shell 和 fileId。
- 詳細交接與待驗收清單請以 `module2/README.md` **最尾的 2026-10-14 最新交接段**為準。


## 2026-10-14｜Module 2 §1.6 已完成，下一步 §1.7

- 已製作 **210／223 個小節**。§1.6.1–1.6.29（p.215–244）使用私人 Google Drive 檔案 `1qQyqkrgtUBSz4AgjhHI1mxp5x7OXm6si`，包含 29 英中配對區塊、87 語塊、20 官方原頁圖。
- 正式閱讀：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s161 。GitHub `module2/module2.js` 已新增第 12 來源並更新總驗證 210。四按鈕：全英文、全中文、上中文下英文、左英文右中文。
- **後續從 §1.7.1 Case Studies（13 小節）接續**；細節及仍未完成的端對端驗收請讀 `module2/README.md` 的最新交接段。


## 2026-10-14｜Module 2 全部 223 小節已接入（最新狀態）

- 章節總量：§1.1 36 + §1.2 38 + §1.3 70 + §1.4 16 + §1.5 21 + §1.6 29 + §1.7 13 = **223／223**，指官方 Module 2 主 PDF 內的編號小節全文與中文教學已在私人網站上，不代表 SOA 個案外部附件已全部取得。
- 最新 §1.7 Case Studies Google Drive HTML：`1eR9g8wl5_ZKxCl5eXrWTtSQmS1OE26tZ`，印刷 p.245–259，包含網站停留時間與 Chiropractic Visits 兩案例、主 PDF 的解答、外部 Sample Report 連結、完整 bibliography；13 節、15 英中來源對照區塊、39 英文語塊、9 原書頁圖，受限具名帳號。
- 正式網址：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/#s171；4 模式「全英文、全中文、上中文下英文、左英文右中文」，單頁連續閱讀。
- **遺留任務**：Owner OAuth 和各裝置端對端驗證、無法從主 PDF 內取得的官方 `2.7_case_studies.zip`、`atpa_2_7_cs11.pdf`、`atpa_2_7_cs12.pdf`、`atpa_2_7_cs23.pdf` 以及官方 Rmd／個案 CSV XML，及下一輪逐段中文翻譯語意複校。詳細以 `module2/README.md` 最後 2026-10-14 §1.7 交接為準。


## 2026-10-14｜Module 3 Advanced Models 啟動與正式交接

- 新站 https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module3/ ，目前完成 **§1.1 Model Accuracy 10／211 小節**。原書 Module 3 全 242 頁（合併官方 PDF 第333–574頁），七章共 211 節。
- 新的 10 小節私人原稿 Drive ID `1BIrPuTrxQ7xnxkZQbXoBUwjxKOIkYREb`，原書 p.7–18；38 英中對照，10 教師卡，38 實用英文語塊，5 官方原圖。
- 網站沿用 Module 1/2 的 CSS、OAuth 與「全英文、全中文、上中文下英文、左英文右中文」四模式。GitHub `module3/index.html`／`module3.js`／`module3.css`；公開 repo 沒有教材原文與個人私密資料正文。
- §1.1 原始 R 與 Python 軟體敘述來自 2022 年教材，並已保留來源年份。**下一批從 §1.2.1 Additive Models（p.19）開始，21 節**。
- 詳細私有 Drive、備份、驗證與下階段工作指令見 **`module3/README.md`**。Module 2 的 223／223 是另一套獨立課程進度，不可與 Module 3 混算。

**2026-10-14 Module 3 首批原圖校正**：§1.1.1–§1.1.10 私人來源 `1BIrPuTrxQ7xnxkZQbXoBUwjxKOIkYREb` 已在更新前備份（`_backup` ID `1sDt59rh11_FAw6ovKiNRktBz-silPWfN`），原書 p.7、14、17 面板擴展裁切避免截掉末列。正本保留原 File ID；最新大小 665,987 bytes，SHA256 `95e16bec54e872b978dafe9d5115a2382e75daab4ec75423f83bef030d2eba57`。詳 `learning/atpa-modules/module3/README.md`。


## 2026-10-14｜Module 3 §1.2 Additive Models（最新）

- Module 3 `Advanced Models` 已完成 **§1.1（10 節）+ §1.2（21 節）= 31／211 節（14.7%）**。§1.2 原書 p.19–40，練習 3.2.1 的題幹、官方測試 MSE 與 GA(M) 擬合比較已保存。
- 新私人來源：Google Drive `1tNSYwzEgD73jKz56KL5P3nlBO7xIucsP`，`ATPA_Module_3_1.2.1-1.2.21_私人雙語教材.html`，2,618,055 bytes，SHA256 `57045cb5c8a080681505669681a4b64a5d4e6c1d15cc806185f8cdea8f9a8822`。**21 節、94 對官方 PDF 原文／中文、21 教師卡、84 英文語塊、17 張原 PDF 圖**；保留 p.36–37 續表。
- 原書 p.26 三組公式原圖已損壞，保留破圖原頁並將可用公式標記為教師依上下文重建；外部 Rmd／CSV 尚未執行，官方 MSE 僅如實轉錄。
- 正式入口：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module3/#s121 ，私有 Drive 授權、四模式、七章左側導覽不變。下一批 **§1.3 Linear Mixed Models（29 節，p.41–71）**，完成後目標 60／211。
- 本批驗收紀錄與異常：`learning/atpa-modules/module3/README.md` 最新 2026-10-14 §1.2 區段。


## 2026-10-14｜修復四種閱讀模式切換時跳到其他段落（適用 Modules 1／2／3）

- **使用者要求**：正在閱讀某個位置時，按「全英文／全中文／上中文下英文／左英文右中文」應繼續停在**同一段落與接近同一行**，不因文字隱藏或雙欄高度改變而被捲到其他節。
- **根因**：舊版 `applyReadingMode` 僅改 `html.dataset.readingMode`、按鈕狀態與目錄語言。前文排版高度大幅變化，瀏覽器 scroll anchoring/scroll position 會顯示錯的段落。
- **程式修復**：三份閱讀器 JS 的 `captureReadingPosition` 在切換前以工具列下方約 38% 視窗高度，擷取當前 `.pair` 或圖、標題、教師卡作為錨點；對 `.original/.translation` 記錄讀取語言與相對高度。完成切換後 `restoreReadingPosition` 使用即時捲動與兩個 `requestAnimationFrame` 重定位同段，待穩定後還原原本 `scroll-behavior` 與 `overflow-anchor`。首次載入 `applyReadingMode(preferredReadingMode(),false)` 避免阻礙 hash/deep-link 起始位置。支援快速重複切換與缺少可見錨點的情形。
- **程式位置**：`reader.js`、`module2/module2.js`、`module3/module3.js`；對應三個 `index.html` JS cache 改成 `20261014-reading-anchor1`。**四按鈕、字級、Google Drive 私有來源、登入和原始教材一律不變。**
- **本地 Chromium 模擬**：viewport 390×780、1280×900，三個長頁中途位置，四模式往返 **24／24 次在同一 pair ID**；測試是公開閱讀排版的 mock fixture，不代表真實使用者 Google OAuth/iPhone Safari 端對端驗證。其後須使用者確認 iPhone 的實際閱讀焦點與長段落行內定位。

## 2026-10-14｜四種閱讀模式切換不跳頁（Module 1／2／3）

- **使用者要求**：閱讀長頁到某個段落時，按「全英文／全中文／上中文下英文／左英文右中文」，必須停留在**相同教材段落、相近的螢幕位置**，不可因內容長度變化跳到其他段落或小節。
- **正式修正**：`learning/atpa-modules/reader.js`、`learning/atpa-modules/module2/module2.js`、`learning/atpa-modules/module3/module3.js`。四個全頁語言模式及資料來源未變動。
- **技術處理**：在閱讀按鈕 `pointerdown` 時先保存當下可見的穩定雙語 `.pair` 或圖表錨點，避開切成全英文時會隱藏的 `details.tutor` 與 `details.phrases`。切換後依同一元素和垂直閱讀比例補償 scroll，暫停平滑捲動及瀏覽器自動捲動錨定；在重排的連續影格與延遲 110ms 時各做一次校正，支援 iOS Safari 的工具列 focus／viewport 變動。使用跨瀏覽器 `behavior:"auto"`。
- **三個站的 JS cache rev**：`reading-anchor2`（如再次調整程式碼必須更新 query 版本避免手機快取舊程式）。
- **驗證範圍**：三份 JS 已通過靜態語法檢查、四種按鈕仍保留。Chromium 以自建 140 節長文模擬桌面 1280×850 與 iPhone 尺寸 390×844，連續切換 `en → zh → vertical → parallel → en → vertical`，選定的同一段落始終維持在可視範圍。**尚未在使用者真實 Google OAuth 私人教材的 Safari／iPhone 上完成端對端驗收**。
- **下一步若使用者仍見跳頁**：索取實際 Module、節號、切換前後模式及機型；優先檢查被隱藏的教師卡、瀏覽器自動錨定和快取，不要把教材 DOM 拆成每種模式獨立重新載入。
