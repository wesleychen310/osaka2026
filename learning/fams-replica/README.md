# ASM FAM-S 原書復刻｜README

更新：2026-11-06（Asia/Taipei）。狀態：**Lesson 10 DRAFT，未達正式原版復刻驗收**。

## 目的與介面
- 網站：https://wesleychen310.github.io/osaka2026/learning/fams-replica/
- Lesson 10：https://wesleychen310.github.io/osaka2026/learning/fams-replica/lesson10/
- 白色背景、黑色字、以英文原書為主；可選文字與 LaTeX/MathJax 數學公式，原圖依原 PDF 裁切；Table 最終要為 HTML table。
- 此專案與 `learning/fam-s-reading/` 既有雙語教科書分開，不可覆蓋或改寫其私人資料。

## 機密內容架構
- GitHub：只存 OAuth shell、導航與技術 README；**不得提交教材全文、掃描頁、Figure 或受限解答**。
- 私人 Google Drive 資料夾：[`html`](https://drive.google.com/drive/folders/1Nj8MvBoz2RF7oRTJSUROXgT2pwmPudyO)，資料夾只有 owner 權限。
- Lesson 10 私人教材：`ASM_FAMS_Lesson10_REPLICA_DRAFT.html`；Drive file ID `1vDJAs5rKcdWIdbgCCobOoyAkHZQir71s`。
- OAuth：沿用全站既有 GIS client、`drive.readonly`、sessionStorage token key `hanami-kyoto-google-token-v3`；前端下載 `files/{id}?alt=media`，將私人 HTML `document.write` 呈現。不得更改共享權限為 anyone。

## 來源與範圍
- 原檔：使用者提供 `ASM_FAM-S_searchable.pdf`，738 PDF pages。
- Lesson 10：印刷 p.135–150 = PDF physical p.148–163（16 pages）。
- **已製作：** p.135 英文 HTML 文字與 8 個 LaTeX 公式（含公式編號 10.1–10.6）。
- **尚未完成：** p.136–150 逐字逐式轉寫與 Table 正式重建，目前是私人來源頁影像，另附可展開的 **UNVERIFIED OCR** 選取文字，不得標示已完成原生復刻。
- 已保留每一頁的完整原始頁面影像，供公式和圖表視覺校對，不可將 OCR 值直接用於精算解答。

## 必須遵循的分批製作 SOP
1. 先讀根目錄 `README.md`、`learning/README.md`、`learning/fam-s-reading/README.md`、`WORKFLOW.md`，以及本 README。
2. 確認完整 PDF 印刷頁與 PDF physical page 一一對應，逐頁盤點 heading、正文、formula、Figure、Table、Example、Exercise、Solution、Quiz、footer。
3. 原始英文保留段落與 source wording；逐個公式以 LaTeX 作主來源，核對 MathJax 顯示與 PDF。不能以 OCR 亂碼充當公式。
4. Table 必須 HTML <table>，保留 row/column、合併格與數值；Figure/圖形依來源裁圖並保留 caption。
5. 每頁逐字、逐式、逐圖簽核；首頁顯示 Draft/Complete，不得以「有原書圖片」冒稱原生 HTML 已完工。
6. 更新私人 Drive 正本前：在同一 parent 的 `_backup` 建立附時間及原因的備份，驗證 owner-only 與 bytes，再保留原 Drive file ID 原位更新。
7. 私有 Google OAuth、320/390/768/1130px、長公式局部捲動、表格、深連結、iPhone/iPad/Mac Safari 分別驗收；記錄本機、正式網站與實機的差異。
8. 回讀 Drive file ID、permissions、file bytes/SHA256；確認 GitHub Pages 已部署後更新本 README。

## 此輪檢查紀錄
- Drive folder metadata 確認 owner-only，owner `cyc690310@gmail.com`；private HTML 已 upload 成功。
- 原始 PDF 檢查 16 頁；本輪 HTML 本地解析應有 16 個 page section、8 個獨立 LaTeX formula block、15 個頁面 facsimile。
- 私人 HTML 生成 SHA-256：`927e9d836c32b50079df773a7338b6658c91e0180d69c2b03b094b03d1d8ab0a`。
- 尚未完成真實 Google OAuth / GitHub Pages CDN / iPhone Safari／MathJax MathML 端到端檢查；這些項目狀態是 **UNVERIFIED**。

## 維護路徑
- `learning/fams-replica/index.html`：全站入口
- `learning/fams-replica/lesson10/index.html`：私人 OAuth shell
- `learning/fams-replica/README.md`：本文件
- 內容正本只在上列 Google Drive file ID，無教材全文公開複製。
