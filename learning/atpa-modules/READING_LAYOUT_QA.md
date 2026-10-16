# Reader layout repair — 2026-10-16

Scope: all four readers. Keep the persisted `stacked` mode key; display it as 二段式精讀. Preserve `en` and `triple` preferences and navigation.

## Regressions and fixes

- Select the English fallback per paragraph, rather than relying on a section-wide preparation flag. A missing derived view must never hide the sole English node.
- Expose existing private authored annotations during source sanitization, before viewport-triggered enhancement.
- Give the stacked summary-hiding rule sufficient specificity to override Module 3/4 styles.
- Load the supplemental terminology from restricted Drive, alongside source requests. Keep existing editorial annotations; supplement unmarked prose only. Never annotate code or change original English/Chinese nodes.
- Use one shared two-stage stylesheet and refresh all four readers' asset URLs.

## Completed checks

Full authenticated-source downloads were processed locally through the production source-cleaning and enhancement functions using a DOM test harness. No private content is included in this repository or report.

| Module | Sections | Bilingual units |
| --- | ---: | ---: |
| 1 | 60 | 349 |
| 2 | 223 | 506 |
| 3 | 211 | 344 |
| 4 | 95 | 784 |

All 1,983 units retained the exact source English after excluding inserted glosses. The original English and Chinese HTML remained unchanged. Table row counts remained unchanged; code nodes were excluded from supplemental annotation.

CSS cascade checks passed 96 combinations: four modules × three modes × four preparation states × phone/desktop widths (390/1280 px). States cover mounted content, opening lessons, all prepared lessons, and a missing paragraph view within an otherwise prepared section. Bilingual modes expose exactly one English view and one translation; stacked mode hides summaries and orders English before Chinese.

The same regression checks reproduced a missing-English unit and Module 3 summary leakage using the prior release. JavaScript syntax checks passed for all modified scripts.

Verification limit: these are full-source DOM and CSS cascade checks, not a signed-in iPhone hardware test. The cloud browser reaches the live sign-in screen; no account permission changes were made.
