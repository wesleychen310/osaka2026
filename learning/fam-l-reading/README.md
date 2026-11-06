# ASM FAM-L · Original English Reading Site

Updated: 2026-11-06 (Asia/Taipei)

## Objective
Restore the supplied 2022 ASM FAM-L manual as a private, original-English HTML book. White background, black text, serif typography, LaTeX mathematics, author’s source figures, and one lesson per URL. No translation or editorial teaching.

## Locations
- Public directory and OAuth shell: https://wesleychen310.github.io/osaka2026/learning/fam-l-reading/
- GitHub: learning/fam-l-reading/
- Private Drive folder: https://drive.google.com/drive/folders/1jOyYCL_kV_IA_8Dgrss2bin2G1RF0vdM
- Original PDF ID: 1LhE1TOxeinf8xwwOCbb7luJAB2KqOCb_ (ASM_FAM-L_searchable.pdf; 1,149 pages)
- Original PDF parent: 1-1H5GLmzOzYpPD1Rz3-vXXh71GAhEgzg
- Site owner access: only authenticated Google Drive file readers; public repo MUST NOT include copyrighted pages.

## Batch 01 · Source coverage and current status

| Work | PDF page (1-based) | Private Google Drive content ID | State |
|---|---|---|---|
| Front Matter | 1–21 | 12_U61PQK8LEgGUiP-FbKvpxoZeWQnYVm | OCR DRAFT |
| Lesson 1 · Probability Review | 22–37 (printed 1–16) | 1o2pVgn4ZS_cCdLxVRdhxE8dSwW_YMQDN | OCR DRAFT; p22 manually HTML/LaTeX |
| Lesson 2 · Introduction to Long Term Insurance | 38–45 (printed 17–24) | 1-w566HefkfCGfsOjdqWdWfSjxngPweL8 | OCR DRAFT |

Original-source full-page webp scans are embedded privately behind collapsed 'View original PDF page' controls as fidelity fallbacks (45 scans total). The main surface contains selectable/searchable text extracted from the OCR layer; a scanned excerpt for Table 1.1 is also shown. This is **not** yet a fully source-verified book. All math not manually transcribed remains flagged as OCR/unverified; users should check PDF facsimile for authoritative notation. Do not mark COMPLETE or imply 45 pages' formulas have been typeset. New lessons should be source-corrected in batches.

## Reader structure
- index.html = full 42 lesson directory, only ready entries clickable; Practice Exams / Appendices placeholders.
- preface/index.html, lesson1/index.html, lesson2/index.html = Google OAuth shells
- reader.js = Google OAuth and private source loading, using the existing `hanami-kyoto-google-token-v3` short-term session key and shared `private-auth-hint.js`
- reader.css = minimal white-and-black login state. Actual book typography inside private HTML.
- Source HTML files are owner-only in Google Drive and not committed to this repository.
- Each lesson loads alone (not the whole book); MathJax can typeset source LaTeX where available.

## QA gate and incomplete work
- Correct physical-page mapping for 1–45 from source PDF.
- Each drafted page contains a separate PDF-page section and original-page image for comparison.
- OCR paragraphs and especially formulas contain artifacts. Lesson 1 printed p1 was manually reconstructed; all remaining pages require line-by-line review.
- No live authenticated Google OAuth, iPhone/iPad/Mac Safari E2E acceptance has been completed. GitHub deployment verification must be recorded separately.
- No confidential/privately licensed original text, images, or math source content is committed to GitHub.
- Future workflow: inventory source pages -> batch OCR -> source-image review -> verified LaTeX -> screenshot actual Figures -> Example/Exercise/Solution check -> responsive QA -> private Drive backup if changing an existing file -> in-place update original Drive file -> readback SHA -> GitHub commit and README update.
- If changing private Drive files: create timestamped backup in `_backup` in the same parent folder BEFORE updating existing file; keep its ID/name/parent.
- The web reader is separate from the existing FAM-S site and does not modify its content.

## Next work
Batch 01 source OCR should be systematically verified (especially printed pp. 2–16 formulas and exercises) before marking complete. Then move to Lesson 3 (PDF 48–64) and later lessons after a source page inventory. For possible source-page boundary discrepancy, treat the original PDF as authoritative.

## 2026-11-06 follow-up: Native MathML and local layout test
- For Lesson 1 printed p1 / PDF p22, five display equations and nine inline mathematical expressions are rendered with native MathML, retaining their LaTeX sources in `data-tex`. No MathJax CDN needed for this corrected page.
- Original Lesson 1 private file ID `1o2pVgn4ZS_cCdLxVRdhxE8dSwW_YMQDN` was updated in place after backup into `_backup`, backup ID `1CYYnWQ7nThVHhwnmJR4E8bPimutMLJU8`; parent/title/owner-only preserved. Original file readback size: 1,144,883 bytes; 14 MathML elements; 16 source-page scans.
- Chromium offline rendering / responsive testing of Preface, Lesson 1, Lesson 2 at 320, 390, 768, 1130px = **12/12** tests with expected page and source-scan counts and no horizontal overflow. This intentionally excludes OAuth and live MathJax/network test; iPhone/iPad/Mac Safari live E2E remains unverified.
- Next lesson navigation from Lesson 2 reaches a clear unbuilt Lesson 3 placeholder, not a 404. Lesson 3 content remains PENDING.
