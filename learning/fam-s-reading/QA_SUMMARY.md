# Lesson11 QA公開摘要

更新2026-10-11。**DRAFT：修復已發布，正式驗收未完成。** 完整教材、驗算、公式清單及QA在README所列私人Drive；本摘要不含原題、正文或原圖。

- 來源界線重新確認：印刷151–178、完整PDF164–191；後接Study Break/空頁不當成Deductibles正文。
- 本版實測清點：45題／45解答、11例題、1Quiz；37選擇題／185選項；57收合解答；13HTML表格、1原圖；829LaTeX實例／351不同字串、829MathML、839雙語配對。
- 1847項靜態結構檢查PASS；45題獨立數學檢查（含符號題）、11Example／Quiz另算。這不等於全面原文／翻譯簽核或UI實測。
- 私人原ID、資料夾、owner-only維持；更新前有備份，更新後重新下載bytes比對一致，SHA256 `a68fc4eaacb839a058eb55901febfd05962682144b1fcf979118bf8bbbf9e26c`。
- reader修復commit：[720be00](https://github.com/wesleychen310/osaka2026/commit/720be00f073cab034461a128f7838c8de57777b2)。
- **尚未通過**：全量逐字／逐式／翻譯簽核；本機12組viewport×模式（0PASS）；正式登入後12組與互動；iPhone/iPad/Mac Safari實機；TI-30XB實體逐鍵。
- 第二輪28頁重新對頁，修復配分／單位／解答缺式／prime／翻譯／英文欄及按法括號；33組按法算式PASS，實體按鍵未驗證。新備份見README。
- 現有正式OAuth到Google登入畫面，沒有私人閱讀器登入成功證據；Drive回讀成功不能當網站登入通過。

項目標準及接續方法見[README](README.md)與[WORKFLOW](WORKFLOW.md)。未通過的驗收不得刪除、不得把舊版本測試結果套入本版。

## 2026-10-11 接手複核（新增紀錄；仍為 DRAFT）

- 已重新取得並核對目前 Drive 原位 HTML，883,433 bytes、SHA-256 `a68fc4eaacb839a058eb55901febfd05962682144b1fcf979118bf8bbbf9e26c`；原檔 ID、parent 及 owner-only 權限未改。
- 已讀取私人交接 ZIP、CONTINUE、SECOND_REVIEW、私人 QA，以及完整 ASM PDF；本輪重新確認完整 PDF 164–191 為 Lesson 11 來源範圍，194 開始 Lesson 12。
- 在獨立工作目錄重新執行既有 `static_qa.py`：1,847 PASS；`verify_calculator.py`：33 算式數值一致；`verify_math.py`：45 題及 11 Examples／Quiz 的原有計算流程可重跑。沒有因此提高原書逐字、瀏覽器或 TI 實機驗收狀態。
- 新建立工作用英文／繁中 `bilingual_fidelity_ledger.csv`（839 筆）和 `latex_fidelity_ledger.csv`（829 筆）；現階段全部人工來源簽核標記 `PENDING`，有四筆雙語標題缺直接頁碼標記。尚未把此工作台帳當成簽核或發布新版私人 HTML。
- 新環境雖偵測到 Chromium 與 Playwright，但瀏覽器對本機 HTTP 及 `file://` 導覽回傳 `ERR_BLOCKED_BY_ADMINISTRATOR`；未產生有效的 320／390／768／1130 × 三模式畫面證據。正式 OAuth／Safari／TI 實機仍待驗證。
- 本輪未修改私人 HTML、私人 QA 或交接 ZIP，因此沒有觸發對這些原檔的覆寫／新備份；下一次覆寫之前仍需重新備份當時最新版本。不得把本文視為 COMPLETE。

## 2026-10-11 21:39（台灣時間）MathML 多行公式實際修復

- 在私人 HTML 發現 24 個 `aligned` 算式的 MathML 將對齊符號 `&` 顯示為文字；已轉換成原生 MathML `<mtable>`，總計 80 個公式 row。原 `data-tex` 未修改，未改動原書／繁中正文。
- 覆寫前的新備份：`15uWk9F-5AJ7BxEU00yltnS4cCx8iQ8el`（883,433 bytes，位於既有 `_backup`，owner-only）。
- 原位發布至私人原 ID `14nCKA8VCu2nwzWw7qVqPZcBzrkDs-hW1`，更新後 888,877 bytes；重新下載與本機逐位相符。新 SHA-256 `ebe15b82081b71b43389ad60cba24fdb96313243e690c0f3813d029b48a1ba21`；原 name/parent/owner-only 保持。
- 全量 829 個 MathML 均可 XML 解析，24 處對齊符號不再是 `<mi>&amp;</mi>`；重跑既有 1,847 項靜態 QA PASS，45 Exercises／45 Solutions、839 雙語配對、57 收合解答保持。
- 現有 HTML 的內部 `data-version` 仍為 `20261011-source-repair-v3`，但實際發版位元組已變更；以以上 SHA 辨識此修補版。正式網頁 Safari 及 12 組視覺驗收仍為 PENDING；正式狀態 DRAFT。
