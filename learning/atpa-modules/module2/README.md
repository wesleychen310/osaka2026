# SOA ATPA Module 2 — Working with Data｜私人雙語教材

版本：2026-10-12 · Implementation milestone: **§1.1 Data Pipeline 全 36 個小節**

## 官方使用入口

- [Module 2 連續閱讀](https://wesleychen310.github.io/osaka2026/learning/atpa-modules/module2/)
- [學習首頁](https://wesleychen310.github.io/osaka2026/learning/)
- [Module 1](https://wesleychen310.github.io/osaka2026/learning/atpa-modules/)

### 工作界線
原書 Module 2 為 259 頁／223 編號小節。**目前實作完成 §1.1.1–§1.1.36（原書第 8–48 頁）；尚未完成整個 Module 2。** 其餘 §1.2–§1.7 待依原書順序補充。網站對使用者只顯示「一整頁連續閱讀」與左側小節目錄，不呈現分批文件結構。

## 來源追溯與權限

唯一權威原教材：本專案上傳 `ATPA_Official_Modules_1-4_Combined(1).pdf`；Module 2 由綜合 PDF 第 74 頁開始（PyMuPDF 0-based index 73），Created Thu Apr 6, 2023。

中文逐段翻譯與精算教學保存在 **Google Drive 指定資料夾** `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`，三份私人 HTML：

1. `1D-HUEZGGTor5P5HFZb4vmNm9C9sXS89B` — §1.1.1–§1.1.12，p.8–20，12 小節、59 英中對照、38 Reusable English、原書 p.15 ETL 流程圖裁切版、p.17 原書資料表重建；121,195 bytes；SHA256 `1a3bdfe6fd2d5baa4b71f03ea598f004766e33476548b79a50a5994dc6c6a6c8`。
2. `1DnflW10dpSj9mys_sHR_3ybcQv_soHKw` — §1.1.13–§1.1.31，p.21–39，19 小節、71 英中對照、57 Reusable English、完整來源英文與逐段繁中、精算教師卡；76,943 bytes；SHA256 `84ff1f0a14f05b7d4389e3d09adc508263f4d2f934c9ca4278169ece0e852739`。
3. `141OqP4-RikeZXWQO4V3VFzxGtkZ7dWCE` — §1.1.32–§1.1.36，p.40–48，5 題 SOA Knowledge Checks、共 19 個選項，5 張教師卡、15 Reusable English，保存原書 Correct/Incorrect Popup 重複文字與原始英文，另附繁中講解；42,288 bytes；SHA256 `19dd8ba6259cb3ba867850fbad16e09c0b0d9b9d7ff2a6dec2886e723e150b45`。

**權限與隱私**：已使用 Google Drive metadata 核對以上三個來源都為原指定資料夾的 `text/html` 檔案；每份均有具名 owner 與 reader 權限，沒有 anyone/domain 公開權限。Google OAuth scope `drive.readonly`。GitHub 只存公開的 HTML shell、CSS、JS 和本 README，不存受版權限制的原文／中文翻譯／SOA 題目。

## 驗收數字

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
- `module2.js` 從三個受限 Google Drive HTML 檔案載入內容，嚴格要求各有 12、19、5 小節，合併後 36 個 unique anchors；左側依來源順序選擇任何小節，手機開抽屜目錄。
- 四種模式依固定規格：全中文／全英文／左右對照／點按翻譯（英文 → 中文在上英文在下 → 英文）。
- Knowledge Checks 用原 SOA 回饋得出的答案進行單選／複選、檢查答案、重設。考題及答案內容只存於 Google Drive。

## 待完成的實機 QA

**未執行成功者不能宣告通過**：GitHub Pages CDN 發布後實際訪問、連結者 Google OAuth、iPhone／iPad／Mac 四模式版面與 5 題作答、圖表視覺驗收、題目 7 個跨 Option 欄位的 PDF 逐字驗收。

## 後續章節製作順序

1. §1.2 Reading and Writing Data（38 小節）。
2. §1.3 Data Transformation and Cleaning（70 小節），含 R／Python 與練習。
3. §1.4 Relational Databases（16 小節）。
4. §1.5 Data Validation（21 小節）。
5. §1.6 Missing and Extreme Values（29 小節）。
6. §1.7 Case Studies（13 小節）。

總量 36+38+70+16+21+29+13=223；每節在 Drive 準備內容，GitHub 增加資料來源映射，使用者始終在相同網址連續閱讀。
