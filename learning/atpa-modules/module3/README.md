# Module 3 — Advanced Models

**Content progress: 211/211 numbered sections complete.**

- The public repository provides only the reading interface (HTML, CSS, JavaScript).
- Original English content, Traditional Chinese translation, summary, annotations, official PDF page facsimiles, and study phrases are stored on access-controlled Google Drive.
- Section 1.7.38–1.7.50 now has 13 distinct lesson nodes and covers the complete official printed pages 225–242.
- The source English count is 211/211 and bilingual study count is 211/211; no English-only sections remain.
- The original 60 bilingual lessons in sections 1.1–1.3 remain in place.
- The 151 enhanced lessons in sections 1.4–1.7 include GPT-authored Traditional Chinese explanations, paired summaries and semantic English phrases.
- Google Drive named-user access remains the source authorization mechanism.
- GitHub Pages deployment alone does not establish a passed signed-in iPhone Safari test; mobile OAuth and layout acceptance remain pending.

## GPT 講義對照（2026-10-29）

- Current reading modes: `en` / `stacked` / `compare` / `teacher` (fourth is independently authored instructional notes, not a translation).
- `index.html` mounts `module3-teacher.js` and `module3-teacher.css` after the base reader; never change the private OAuth loading or overwrite existing bilingual views to add tutor notes.
- `module3-teacher.js` currently has 53 unique guided lessons: Bayesian Models and Analysis §1.5.1–1.5.44 (44), and Stacking §1.6.1–1.6.9 (9). Others retain existing first-stage bilingual summaries until their own guides are authored.
- Each completed tutor lesson includes the concept, step-by-step explanation, practical insurance/actuarial example, common trap, ATPA exam application, and a self-check. Original English remains fetched from the owner's private Google Drive files at runtime.
- In Stacking, maintain the official hotel regression metrics (null 51.16, LM 45.92, RT 45.63, NN 44.87, Meta1 44.74, Meta2 44.77 RMSE) and the classification exercise log loss metrics (null 0.65977, logistic 0.60249, tree 0.60199, NN 0.59828, Meta1 0.587318, Meta2 0.58832).
- Critical teaching issue: stage-1 must be trained on stage-0 out-of-fold predictions, while final stage-0 models may be refit on all training data for deployment; do not refit the stage-1 model on those in-sample predictions.
- Static JavaScript validation and GitHub commit checks are possible through connected GitHub; an authenticated browser acceptance test is still pending (signed-in content cannot be viewed in public-only browsing tools).

## 自然繁體中文全章重譯計畫（2026-10-29 啟動）

**目前完成：10/211 編號小節（§1.1.1–1.1.10），對應 38/38 原始雙語段落。尚餘 201 小節。**
此處「雙語 211/211」代表舊版仍完整存在，**不代表新版自然重譯已完成**。

- 原書英文來源：私人 Google Drive 的 17 份 HTML；禁止將全文或譯文直接提交到公開 GitHub。
- 新譯文：以私人 Google Docs JSON 存放，每份按原始 `section.id` 配對與原文段落索引，存於原教材同一資料夾。
- 第一份新譯稿：[§1.1.1–1.1.10 38 段](https://docs.google.com/document/d/1cgpK6EjNMrKs2roTLF0htk4RWfZiwuhNka2PtFMo1Gk/edit)，結構為 `{schema:1,chapter:"1.1",sourceFileId,translations:{s111:[...],...}}`。
- 原始 HTML 已備份在原資料夾 `_backup`，備份檔 ID `14BrjMQG_xAzu7Py80u-JHwc0Cl2-kM3J`；原文 HTML **未修改**。
- 網站的 `module3-retranslation.js` 在 Google OAuth 驗證後才從私有 Doc 匯出文字，再按原文段落覆蓋中文欄位；若載入失敗，保留原中文並顯示警告。
- `module3.js` 保留原本完整校驗（211 小節、各個來源計數、英文影像及雙語），先套用重譯後再 mount，確保圖表與既有閱讀模式不變。
- **翻譯標準**：台灣繁體中文、自然專業語氣、逐段一對一、零內容省略、保留公式/數值/標題/引用/重要原文統計術語；不得把翻譯寫成教學心得。原文的異常或疑似錯誤須忠實保留，必要時另加獨立「譯註」；精算延伸教學放 GPT 講義欄。
- **接續順序**：下一批為 `SOURCE["3:2"]` 的 §1.2.1–1.2.21，共 21 節；後續依原書與 SOURCE 的 17 份分批逐一完成。若建立額外私有翻譯 Doc，需將檔案移入原資料夾，並在網站覆蓋層 SOURCES 加入 `{id,chapter,part,expectedSections,expectedPairs}` 和精確段落計數驗證。
- 目前僅完成 GitHub JavaScript 語法／GitHub 版本確認、私有 Google Docs JSON 讀回驗證；**私人 OAuth 實機畫面尚未驗收**。

Last updated: 2026-10-29.