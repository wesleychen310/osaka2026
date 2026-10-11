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

## 2026-10-11 22:02（台灣時間）Lesson 11 新增 ISLP 式「再解說一次」

- 參考既有 ISLP ATPA-prereq `explainers.js`/`.css` 的 native `<details>` 展開互動，直接在**私人 HTML**插入 26 張獨立編者補充卡；內容為核心概念、精算例子、FAM 英文 wording／常見陷阱，並在 Example 11A 及公式積分處提供 TI-30XB MultiView 計算提示。
- 覆寫前建立私人備份 ID `1Fr64xPic2csR3068ZWOScDb9TajQXZXa`（888,877 bytes、owner-only、位於原 `_backup`）。原位更新原私人檔案 ID `14nCKA8VCu2nwzWw7qVqPZcBzrkDs-hW1`，更新後 922,097 bytes，SHA-256 `b8f606ab933f462b774804b866d95dd70338d7bd349089891c97512667cbe273`；重新下載逐位相符；name／parent／owner-only 不變。
- Python DOM 修訂前後比對：原 839 對雙語 `.pair` HTML 完全相等、原 829 筆 `data-tex` 與 MathML 完全相等、所有原解答文字及 45 題題幹／選項文字保持；26 張卡皆預設收合；重跑既有 1,847 項靜態 QA 全通過。
- 使用 Chromium `page.set_content`（about:blank）、注入現有 shared CSS/JS，在 390×844、768×1024、1440×900 三種尺寸各自操作 en／zh／side，總計 **9 組本機按鈕展開與收合 PASS**，均無頁面水平溢出；這是**本機渲染驗收**，不代表正式 OAuth、Safari 實機或正式網站 12 組完整驗收。正式狀態仍 DRAFT。
- 新增補充全部存於原 owner-only HTML；公開 GitHub 僅保留功能製作規格、QA 摘要，不提交受著作權保護的 ASM 內容。

## 2026-10-11 22:22 (+08) Lesson 12 bilingual draft deployment

- Source: ASM FAM-S PDF pp. 194–209 / printed pp. 181–196. Two textbook examples 12A–B; 28 exercises 12.1–12.28 and the original solutions.
- Existing private Drive OCR draft (47,580 bytes) was upgraded in place to a 1,415,175-byte interactive bilingual **DRAFT**. Includes bilingual core lesson and worked examples, 28 bilingual problem summaries with editorial explanations/keystrokes, 14 on-demand tutoring cards, all 16 source-page facsimiles, and a cropped original Exercise 12.21 graph.
- Original 28 English statements/options and original solution paragraphs are **not yet fully transcribed and bilingual-line-verified**. Source images are the authoritative originals, OCR text flagged; editorial explanations are separated. DRAFT must not be marked COMPLETE.
- Pre-update owner-only backup 19OGWTpYu5mNIQPQZMrGc5tIjRPO66f5y stored in existing _backup folder. Original private file ID 19t-c5kwapBUsLD78QesoIuVrl_g1Q7bF, original filename/location and owner-only permissions preserved.
- Drive readback SHA256: 6cd6c423b15d162831881e4d7df43bc0ec6011dd4e98ee8ec40eccc38aa1d594, 1,415,175 bytes; matches local authoring file.
- Local Chromium page.set_content + exact shared reader CSS/JS: 320/390/768/1130 px × en/zh/side = 12/12 interactions PASS. 14 tutor cards and 28 solution details open/close; no page-level horizontal overflow. Actual owner Google OAuth, iPhone/iPad/Mac Safari and calculator physical keys remain unverified.
- Public landing lesson12/index.html updated; no copyrighted book contents published to GitHub.

## 2026-10-11 22:51 (+08) Lesson 2 + Front Matter bilingual tutoring updates — DRAFT

- Lesson 2 source full ASM FAM-S PDF p45–63 = printed pp29–47, 19 pages. Private HTML in Drive ID `1DK53kU1MouC3pSiI3wmVEyA6YE_xwZUM` updated in place from 201,864-byte English OCR pilot to **1,745,311 bytes**, SHA256 `da7279d4fe60357478c0f0d3aed9f0601ddab3495d17c5136b47c40344252270`; download readback hash matched. Pre-edit 201,864B owner-only backup ID `1MUX7UlRX5UNiRH0lYrTVyoQePZY9xu0k`, existing _backup. Drive ID, original filename, parent and owner-only ACL preserved.
- Lesson 2 now provides five core bilingual teaching sections (overview, scaling, common distributions, exponential family, limiting), four worked source Examples 2A–2D, fifteen separately expandable **editorial** Exercise 2.1–2.15 analyses (English short question summaries, Chinese model/working, answer when verified), 16 independently authored ISLP-like explanatory cards, all original 19 page scans as expandable owner-only images, and complete earlier OCR in clearly labeled searchable (unverified) accordion. Formula source semantics prioritized over OCR.
- This does **not yet supply full exact English/Chinese paragraph-by-paragraph transcription of all 19 pages** or all original question choices/original solution text; scans remain the authoritative material; mark DRAFT. Example 2B numerical OCR is particularly suspect and not asserted as verified. Extra original figure panel/table can be viewed via scanned pages.
- Front matter source PDF pp1–18 already had 57 English/Chinese paired blocks, full 221-entry TOC, 18 images, historical study schedule, and preface. Original private Drive ID `1BtnQBME26WxS7cx3CJKo50viwfiRDKqR` preserved; appended seven collapsible tutoring cards and Lesson 2 link; bytes 1,295,353→1,305,499; SHA256 `d2c0ef0b24eebb2c5e53fd1d1965bc42cc60800f3a7fb8b846b24bd008735da1` verified after Drive readback. Pre-edit private backup ID `1IRphowmTi-fFSxQzhJy8TFEbE6RGpOlr` in same _backup.
- Browser local interactive Chromium: 320/390/768/1130px × (Lesson2 en/zh/side =12, Front Matter en/zh/side/stack =16) → **28 of 28 passes**: read modes switch, all tutor cards initially collapsed/toggle, exercise solution details open, source page images counted, no document-level overflow. Testing injects actual shared reader CSS/JS on about:blank, **not an authenticated real Google session or physical Safari**. Front matter uses its own four-mode script.
- Site navigation now links `/learning/fam-s-reading/preface/` from 31 lesson index; new GitHub page is **OAuth-only shell**, no copyrighted source. Original Lesson2 public shell updated to correct DRAFT coverage. Real Google login, iPhone/iPad/Mac Safari, actual TI-30XB hardware, source complete text/fidelity all pending; do not declare COMPLETE.


## 2026-10-11 Lesson 3 — Variance (private DRAFT)

- Original ASM FAM-S PDF physical pages 65–71 (printed pages 49–55); Lesson 4 starts physical page 72.
- Owner-only HTML: `ASM_FAM-S_Lesson_03_BILINGUAL_3MODES_TUTOR_DRAFT.html` (Google Drive file ID `1sUjTnqxvRxGDq_NsZozgf1awHQ0CDCOo`), 607,686 bytes; SHA256 `f01727b83f43483e2c27458c51760b2d8e060a8d01e4cdbd8b22c39c101f5b41`. Remains inside private folder `1uiYt_Ce2UNFSr9C9YISh6f1BBnhnDUwe`.
- 37 English/Traditional Chinese pairs, 4 original Examples (3A–3D), 7 Exercises (3.1–3.7), 11 collapsible solution panels, 10 optional editorial tutoring cards, 7 full-source private PDF page facsimiles, 3 native MathML formula blocks.
- Local Chromium QA: 320/390/768/1130 px × en/zh/side = 12/12 PASSED; lesson exercise solution and three-part tutoring cards expand/collapse; no viewport horizontal overflow. Google OAuth end-to-end and actual Safari devices not yet tested.
- Important source fidelity note: Example 3C on PDF page 67 appears to conflate the z-score 0.77567 with Φ(z): normal CDF ≈ 0.78103; original preserved, discrepancy labeled as editorial note.
- Historic Lesson 3–10 ZIP (`1k82qHR0hd-YhAL9hIq7uDVy80Zs7JkkI`) preserved unchanged; public `lesson3/index.html` now fetches owner-only HTML directly, and never stores copyrighted textbook contents on GitHub.
- DRAFT scope: core concepts, English question meanings, solution derivations and key steps reconstructed; exhaustive verbatim bilingual source/solutions transcription and TI/Safari hardware validation pending. Do not label COMPLETE.


## 2026-10-12 · Lesson 4 — DRAFT

Source: ASM FAM-S PDF pages 72–90, printed 59–77. Content: 6 Examples, 24 Exercises, Quiz 4-1, 11 editorial explainer cards, 53 bilingual study-text pairs, 31 expanded solutions and all 19 source-page images. Private Drive file ID: `1a6zN3YPzOwdfwWPjaefral__M6hB1Twk` (owner-only); SHA256: `e58007e14962945ca03fbda6f2428e2892495b299dc63bedbe25fccdb08e2229`; size 1,487,752 bytes. Chromium local QA 12/12 at 320/390/768/1130px and EN/ZH/side modes. Actual OAuth/Safari testing and full verbatim mathematical/source QA pending. Original ZIP for Lessons 3–10 preserved. Website OAuth shell updated to load private dedicated HTML, no textbook on public GitHub.

2026-10-12 QA revision: Corrected nested section containers to preserve the mobile reading column; re-ran all 12 Chromium checks (pass). Backup before overwriting private HTML: Drive `1RgJ8a3r-1bxa5cLpHdt5SV_A9dUYeLEL` under `_backup`. Current same Drive ID as above.


## 2026-10-12 · Lesson 5 — Property/Casualty Insurance Coverages (DRAFT)

- Original source: ASM FAM-S searchable PDF physical pages 92–99 / printed 79–86 (8 pages); Lesson 6 starts PDF p100. Chapters 5.1 Auto, 5.2 Homeowners, 5.3 Workers Compensation, 5.4 Business, 5.5 Deductibles and Policy Limits.
- Preserved original source pages 8/8, original disappearing-deductible graph from PDF p94 in context, searchable OCR, source-aligned 74 English/Traditional Chinese teaching pairs, 8 collapsible worked answers (Example 5A and Exercises 5.1–5.7), 8 editorial explainer notes, 2 MathML blocks.
- Independently recalculated numeric exercise answers: 5.1=600 D, 5.2=850, 5.3=239000 E, 5.4: insurer A to Driver A=2250 and to B=30000, insurer B net zero, 5.5=15000 A, 5.6=200000, 5.7=17325 D; Example 5A=150000.
- Build file `ASM_FAM-S_Lesson_05_BILINGUAL_3MODES_TUTOR_DRAFT.html` uploaded owner-only to Google Drive ID `1fc613qbtuorgZugG2DWqFtDDn2WrDt_W`, folder `1uiYt_Ce2UNFSr9C9YISh6f1BBnhnDUwe`. SHA256: `aad28a684a14d39cb323bea8b15c7868317c4b1f10b2e42219c1b8141a212884`; size 1,095,982 bytes.
- Public GitHub Pages shell `lesson5/index.html` now authenticates to Google Drive and fetches dedicated owner-only HTML by file ID (instead of original private ZIP). Public repository contains no copyrighted source page images or source prose from textbook.
- Chromium local QA: 320/390/768/1130 px, 3 modes => 12/12 layout checks pass, no whole-page horizontal scroll; solutions expand/collapse; source image data URLs embedded, source figure displayed. Real authenticated Google OAuth, Safari device QA, and live GitHub Pages deployment are not independently verified. In this draft, study English and traditional Chinese are source-aligned educational paragraphs, **not complete verbatim line-by-line translation**, and full original solution verbatim QA is pending. Status DRAFT.
- Original Drive ZIP `1k82qHR0hd-YhAL9hIq7uDVy80Zs7JkkI` left unchanged.


## 2026-10-12 — Lesson 6 Health Insurance (DRAFT)
- Source ASM FAM-S physical PDF pages 100–103 (printed 87–90), four pages, sections 6.1, 6.1.1–6.1.3, 6.2. Source contains **no numbered Examples, Exercises or Quiz**.
- 50 English–Traditional Chinese source-aligned educational pairs, 2 clearly marked editorial teaching calculations (allowed charges and coinsurance), 4 complete original page scans with OCR, explainer cards, 3 reading modes.
- Privately stored Drive HTML ID `16Uw-1mZOdMYFNY2uMvFk58URA_YoYFPL` in owner-only folder `1uiYt_Ce2UNFSr9C9YISh6f1BBnhnDUwe`; local SHA256 `7167d01e822fa959ac5595cf5045af2102f76d183f2f3ac5f2430ec21e8f1958`, size 474701 bytes.
- Public GitHub Pages shell `lesson6/index.html` loads private Drive HTML directly after OAuth, not the old ZIP. Source textbook content remains private.
- Local Chromium responsive tests passed 12/12 (320/390/768/1130 px x zh/en/side) and expandable teaching calculation. Google OAuth real login, live Pages, Safari device QA and full verbatim bilingual proofreading pending. Statements about ACA follow the 2022 source historical context and must not be treated as 2026 legal verification.


## 2026-10-12 — Lesson 7 Loss Reserving: Basic Methods (DRAFT)
- Original ASM source PDF 106–124 (printed 93–111), 19 scanned pages (including tables, exercises and solutions) plus corresponding page OCR. 33 editorial English/Traditional Chinese study pairs; lesson covers paid/case/IBNR, earned premiums, expected loss ratio, chain ladder, BF and factor-variance logic.
- Original 22 exercises (7.1–7.22) and two Quiz 7 items each have expandable links to original page/solution pages. **This is an index to complete original solutions, not a claim of full independently authored step-by-step Chinese solutions.** The exact PDF scans are authoritative over noisy OCR tables.
- Private HTML Drive ID `1G6bN5RogNMgzJ7XsZarrsAjsPrUMoNEG`, size 1521075 bytes, SHA256 `644132a472df755a9b9fd56819203e637274255eb796bf06f80091c9b23f99b8`. GitHub shell loads private direct HTML after OAuth; no source published in repository.
- Local Chromium 320/390/768/1130 × 3 language modes: 12/12 width QA passed. Safari login / live OAuth, complete original paragraph-by-paragraph translation and all exercise full editorial solutions remain unverified/incomplete.
