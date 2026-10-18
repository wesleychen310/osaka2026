# Private English original reader

Release: 2026-10-18. Public entry label: 短期原文.

This independent route preserves the existing bilingual reader and uses the same Google Identity Services account, readonly Drive scope, and shared session-token key. Only the shell, generic CSS/JavaScript, and this technical record are public. Restricted source text, formulas, visual crops, section names, search index, and generated HTML stay in the user's designated private Drive folder.

## Source and coverage

- The user selected the searchable PDF as the final source. The earlier image-only source was superseded before publication.
- All 738 physical PDF pages are represented exactly once across 59 private reading units: front matter, 31 lessons, practice introduction, 12 practice exams, appendix introduction, 12 practice solution sets, and closing references/pages.
- Original chapter boundaries were checked against headings in the selected PDF, rather than applying a single printed-page offset. Physical PDF page numbers are used consistently by the reader.
- The default English view reflows source-layer prose. Mathematical tokens, formulas, tables, diagrams, and low-confidence/non-prose regions are represented by original raster crops. A complete original-page view is retained for every page. Raster output is resized and gray-level optimized for transfer; it is not a pixel-identical archive of the PDF.
- There is no translation in this release. The inherited PDF text layer is OCR and has not received exhaustive manual word-by-word proofreading. Mathematical crops have not been retyped as LaTeX. Structural counts do not certify full source-language proofreading.

## Reader behavior

- English/original-page views; adjustable text size or page zoom; locally scrollable wide formulas/tables.
- Chapter drawer; direct physical-page links; exercise/solution page shortcuts; previous/next navigation.
- Full-book search from the restricted PDF text-layer index, and per-unit reading-position persistence.
- One unit is downloaded at a time. Original-page images are hydrated near the viewport and released at a distance. No copyrighted images or prose are embedded in public assets.
- The original Google account remains responsible for authorizing restricted files. The source PDF and existing bilingual HTML are unchanged. The one temporary image-only HTML created during preparation was backed up in the destination folder before being replaced in place.

## Validation

Completed on this release: all unit HTML parses; unique element IDs; contiguous page ranges 1–738; all 738 embedded page images decoded and byte-matched to their generated source render; all math/visual crop images decoded; source-page dimensions and navigation anchors checked; both public JavaScript files pass Node syntax validation. There are 4,208 reflow prose blocks and 15,972 math/visual images in the English view.

Production publication is verified separately using the GitHub Pages workflow and public shell/assets readback. Signed-in Google OAuth end-to-end tests and actual iPhone Safari visual tests must be recorded separately; do not treat structural validation as a claim that those device tests passed.

Full private source mapping, extraction/build scripts, hashes, upload IDs, and QA records are retained with the private deliverables for the later translation phase. Future changes to existing Drive HTML require a timestamped backup in its sibling `_backup` folder before in-place updates, preserving the original IDs and locations.
