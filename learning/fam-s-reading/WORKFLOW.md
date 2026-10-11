# ASM FAM-S｜私人雙語電子教科書製作與校對 SOP
版本：2026-10-11｜維護對象：ChatGPT 對話與 Work

## 專案入口
- [31 課獨立目錄](https://wesleychen310.github.io/osaka2026/learning/fam-s-reading/)
- [Lesson 11 試作網頁](https://wesleychen310.github.io/osaka2026/learning/fam-s-reading/lesson11/)
- [原書拆分資料夾](https://drive.google.com/drive/folders/1oO8TXoMNP5Ef3JiWNEDNmrT1mI_WE-D0)（需使用者存取授權）
- [私人工作資料夾](https://drive.google.com/drive/folders/1uiYt_Ce2UNFSr9C9YISh6f1BBnhnDUwe)（需使用者存取授權）
- GitHub 本資料夾的 `lessonN/index.html` 是登入 Google Drive 的**公開網站殼**，教材正文與截圖僅放私人 Google Drive HTML；不得公開上傳到 GitHub。

## 固定規格
1. **一課一網址，一課一份私人 HTML**。Lesson 1–31 在目錄逐課展示；全部例題、習題、解答同屬於原課網頁。不要合併數課為一頁，也不要改變既有網址。
2. **只有三種顯示模式**：`English`（全英文）、`全中文`（繁體中文）、`左右對照`（同一段英文在左、繁中在右）。即使 iPhone 直式仍採雙欄。可讓長公式水平滑動。介面不要標註「無上下對照」等無效敘述。
3. **原文忠實保留且可選取／搜尋**：逐頁完整保留 headings、sections、Examples、Exercises、Solutions、Figures、Tables、notes、頁碼、公式編號、選項及原文句型；不得以摘要代替。
4. **數學全部人工重打**為有來源的 LaTeX，轉成清楚的排版，保留 `data-tex` 等可編輯內容與複製按鈕。檢查分數、根號、指數、積分上下限、符號、括號、參數化及數字，不得直接把錯誤 OCR 當數學式。
5. **所有 Figure / Chart / Table** 要放回原位置：表格優先 HTML `<table>`；複雜原圖裁切嵌入，保留編號、圖說與頁碼。數學符號不可用整頁截圖代替。
6. **雙語逐段配對**：以 `<div class="pair"><div class="en">英文</div><div class="zh">中文</div></div>` 一組一組產生。翻譯使用台灣繁中，特別保留 `payment per loss`、`payment per payment`、`conditional on a payment being made` 等會改變公式選擇的英文。
7. **題目與解答對位**：每題原英文、中文、數學式、選項／圖表、原題號及完整推導；解答設 `details/summary` 預設收合。不要讓答案在展開之前洩漏。
8. **來源優先級**：ASM 原書 PDF 和原解答為該教材直接依據。OCR 僅做初步擷取，必須對照原頁。SOA FAM Tables 只作交叉檢查；不得未聲明就更換原書分配參數化或自行篡改答案。
9. **章節完成標記要證據**：`DRAFT`＝網頁初稿；`EN-QA`＝原文與全部數學／圖表／解答逐式核對；`ZH-QA`＝完整譯文與英文對照；`UI-QA`＝排版／互動驗收；`COMPLETE`＝全課全部完成。數字「45 題已網頁化」不等於「45 題校對完成」。
10. **只有修改指明的一課**；其他課次不受影響。

## 每次工作流程
**1. 取得來源並建立頁碼對照**：先讀本 SOP、原書該 Lesson PDF、完整來源 PDF 對應頁、對應 Solutions，以及私人現有 HTML；核對課號、印刷頁、章節、題號、圖表和 Equation 編號。

**2. 逐頁校對英文**：將 OCR 與原頁核對。逐題檢查每一條件、數字、小數點、根號、積分、選項、題源。英文必須是原文，不要擅自意譯；有疑問註明來源位置。

**3. 重新編輯數學／表格／Figure**：以 LaTeX 寫分式、根號、積分等；先符號再代入。檢查數值、rounding 與原書答案是否一致。Tables 轉 HTML，Figure 裁局部原圖，與所屬題目並排放置。

**4. 編寫繁中並校對三模式**：每英文段落必須有精準繁中對位。多義英文 wording 需解釋對公式選擇的意義。三模式切換不能遺失內容；不用上下排列。

**5. 題解互動驗收**：每題確認編號唯一且連續、對應可展開解答、答案隱藏、表格／Figure 沒有錯位。核對 Quiz 和原書附解。教學附註與原書正文須分開。

**6. 排版測試**：至少 `320 / 390 / 768 / 1130px` × `English / 中文 / 左右對照` 共 12 組；確認主文、複雜公式、含 Figure 的 Exercise、Solution 展開、連結、導覽、搜尋。

**7. 先備份再原位更新**：在私人 Drive 原資料夾內的 `_backup` 新增帶時間及原因的舊版備份，核實檔案內容與權限後，用 Google Drive **files.update** 覆寫原 HTML，**保留相同 file ID／檔名／父資料夾與 owner-only 權限**。不要另建新檔造成網站斷鏈。更新後再讀回 bytes、驗證權限及原網址開啟情況。

**8. 紀錄與交接**：註明課號、完成的印刷頁／題號、改動／驗證的數學式／圖表、待修項目、備份、Drive 檔案 ID 是否維持、12 組測試證據。更新此 SOP 時必須保持同步。

## Lesson 11 當前交接
- **Deductibles**：原書印刷頁 **151–179**，完整 PDF 頁 **164–193** 左右（末頁空白），以原書頁腳再核。
- **主文** 11.1 Ordinary and franchise deductibles；11.2 Payment per loss with deductible；11.3 Payment per payment with deductible。
- **目前已有** Example 11A–11K、Table 11.1、Exercise 11.1–11.45 的三模式 HTML 與展開解答，以及圖表／部分重新編輯的數學式。
- **仍是 DRAFT**：全部英文精確性、逐題公式、圖表與翻譯尚待完整核對。留意可能殘存的 OCR 備查區或過期進度文字。重點檢查 11.2 的 Burr 參數根號與 11.20 的條件 `e_X(100) = (5/3)e_X(50)`，且核對 Quiz 11-1。
- **Lesson 11 私人工作檔**：在上述私人資料夾內搜尋 `ASM_FAM-S_Lesson_11_BILINGUAL_3MODES_DRAFT.html`；不要重新建一個 Drive 檔取代它。
- **當前優先任務**：Lesson 11 英文逐頁／公式數字／題解 QA、補全繁中與刪除重複 OCR，完成後再依此樣板推進其他課。

## 新對話／Work 直接使用
> 請先讀這份 SOP，再處理我指定的 ASM FAM-S Lesson。從私人 Google Drive 取得該課原稿和原書 PDF，對照正文、數學、圖表、題目、解答，維持一課一網址、三種閱讀模式、可展開解答。嚴格區分 DRAFT 與 COMPLETE。更新前先到 _backup 備份，然後原位更新原 Drive file ID，交付逐頁 QA 紀錄。
