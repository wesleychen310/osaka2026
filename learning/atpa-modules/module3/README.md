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

Last updated: 2026-10-29.