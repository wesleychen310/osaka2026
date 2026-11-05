# ASM FAM-S 原書復刻｜README

更新：2026-11-06（Asia/Taipei）。狀態：**Lesson 10 DRAFT，未達正式原版復刻驗收**。

## 目的與介面
- 網站：https://wesleychen310.github.io/osaka2026/learning/fams-replica/
- Lesson 10：https://wesleychen310.github.io/osaka2026/learning/fams-replica/lesson10/
- 白色背景、黑色字、以英文原書為主；可選取的 HTML 英文文字、LaTeX 主來源轉成瀏覽器原生 MathML、真正 HTML table；只有 Figure 等非文字圖形才依原 PDF 局部裁圖。
- 此專案與 `learning/fam-s-reading/` 既有雙語教科書分開，不可覆蓋或改寫其私人資料。

## 機密內容架構
- GitHub：只存 OAuth shell、導航與技術 README；**不得提交教材全文、掃描頁、Figure 或受限解答**。
- 私人 Google Drive 資料夾：[`html`](https://drive.google.com/drive/folders/1Nj8MvBoz2RF7oRTJSUROXgT2pwmPudyO)，資料夾只有 owner 權限。
- Lesson 10 私人教材：`ASM_FAMS_Lesson10_REPLICA_DRAFT.html`；Drive file ID `1vDJAs5rKcdWIdbgCCobOoyAkHZQir71s`。
- OAuth：沿用全站既有 GIS client、`drive.readonly`、sessionStorage token key `hanami-kyoto-google-token-v3`；前端下載 `files/{id}?alt=media`，將私人 HTML `document.write` 呈現。不得更改共享權限為 anyone。

## 來源與範圍（Lesson 10｜文字復刻版）
- 原檔：使用者提供 `ASM_FAM-S_searchable.pdf`，738 PDF pages。
- Lesson 10：印刷 p.135–150 = PDF physical p.148–163（16 pages）。
- 2026-11-06 已將先前「整頁截圖 + 收合 OCR」版**整體替換**為文字優先的 HTML。16/16 頁都是可選取文字，**全頁 PDF 截圖 0**；原書真正的 Figure 10.1 保留局部截圖 **1** 張。
- **HTML table 13 張**，含 p.137 三表、p.139 Table 10.1、p.141–143 習題分組資料表；保留 row/column。
- **原生 MathML 數學元素 124 個**（含 inline/display，非 124 個不同的原書公式）；LaTeX 字串保存在各 `data-tex`，不依賴外部 MathJax CDN。
- p.135–139 已逐段重建正文、主要公式與表格；p.142–143 習題表格已對來源頁視覺校對。p.140–141、144–150 雖已改成文字／公式顯示，但仍含 OCR 轉錄誤差風險，**英文逐字、題目選項、數字與每個計算式尚待全面核校**，不可標 COMPLETE。

## 必須遵循的分批製作 SOP
1. 先讀根目錄 `README.md`、`learning/README.md`、`learning/fam-s-reading/README.md`、`WORKFLOW.md`，以及本 README。
2. 確認完整 PDF 印刷頁與 PDF physical page 一一對應，逐頁盤點 heading、正文、formula、Figure、Table、Example、Exercise、Solution、Quiz、footer。
3. 原始英文保留段落與 source wording；逐個公式以 LaTeX 作主來源，轉成 MathML，逐式核對原 PDF 和目標 Safari 顯示。不能以 OCR 亂碼充當公式。
4. Table 必須 HTML <table>，保留 row/column、合併格與數值；Figure/圖形依來源裁圖並保留 caption。
5. 每頁逐字、逐式、逐圖簽核；首頁顯示 Draft/Complete，不得以「有原書圖片」冒稱原生 HTML 已完工。
6. 更新私人 Drive 正本前：在同一 parent 的 `_backup` 建立附時間及原因的備份，驗證 owner-only 與 bytes，再保留原 Drive file ID 原位更新。
7. 私有 Google OAuth、320/390/768/1130px、長公式局部捲動、表格、深連結、iPhone/iPad/Mac Safari 分別驗收；記錄本機、正式網站與實機的差異。
8. 回讀 Drive file ID、permissions、file bytes/SHA256；確認 GitHub Pages 已部署後更新本 README。

## 2026-11-06 Lesson 10 文字版修復與 QA
- 目標私人教材仍是 `ASM_FAMS_Lesson10_REPLICA_DRAFT.html`，File ID **`1vDJAs5rKcdWIdbgCCobOoyAkHZQir71s`**；原名稱、父資料夾及 owner-only 權限不變。
- 更新前先在原父資料夾 `_backup` 建立備份：ID `1Vb8vvXS_0WM-psIk_0X9UQ1aNk08WS3V`，名稱含 `20261106_011259+0800_text_first_rebuild_backup`，原檔 2,736,329 bytes；已核對父資料夾與 owner-only 權限。
- 新 HTML：**192,492 bytes**，本地 SHA-256 `8697421c8afda30d63d70a312a085f5f2d36900f4637405056f6f9a1f9614829`。Drive files.update 已成功，讀回 size、File ID、父資料夾、owner-only 與 16 pages / 124 MathML / 13 tables / 1 graphic / 0 page scans 一致。
- 生成來源（Python + MathJax TeX→原生 MathML + Chromium QA）：私人 ZIP `ASM_FAMS_Lesson10_TEXT_FIRST_SOURCES_20261106.zip`，ID `1Fn6bvAwj3HYc2qApLcm2EN1bg_cEJ0E3`，放在同一 Drive 資料夾，**不放 GitHub 公開 repo**。
- 本地 Chromium `page.set_content` 真實渲染測試：320 / 390 / 768 / 1130px **4/4**，16 頁、124 MathML、13 tables、1 image，JS pageerror 0、全頁 scrollWidth 不超過 clientWidth。
- **尚未測試**：正式 GitHub Pages CDN 下的 owner Google OAuth 端到端、iPhone/iPad/Mac 實際 Safari、長公式逐式視覺精校、原文與來源 PDF 100% 逐字 diff。故仍是 **DRAFT**。

## 維護路徑
- `learning/fams-replica/index.html`：全站入口
- `learning/fams-replica/lesson10/index.html`：私人 OAuth shell
- `learning/fams-replica/README.md`：本文件
- 內容正本只在上列 Google Drive file ID，無教材全文公開複製。

## Lesson 11｜2026-11-06
- 原書 p.151–153（PDF physical p.164–166），英文轉錄初稿，**尚未完成數學公式校對、原生 LaTeX 與正式驗收**。
- 私人 Drive folder `1Nj8MvBoz2RF7oRTJSUROXgT2pwmPudyO`，教材 `ASM_FAMS_Lesson11_REPLICA_DRAFT.html`，File ID `10z9pIUSjAwQvJ7Y53jxp5kmurTwyodMq`。
- GitHub `learning/fams-replica/lesson11/index.html` 僅 OAuth shell，不含教材。
- 後續須逐頁核對 p151–153，重建 (11.1)–(11.6)、Example 11A–11D 及離散分布表格，完成手機驗收。
