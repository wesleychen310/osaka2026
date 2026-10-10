# ISLP 雙語閱讀器｜FAM-S 樣式試行與擴充指南

> 2026-10-11（Asia/Taipei） · Pilot v2 · 已套用：**Chapter 4 — Classification、Chapter 5 — Resampling Methods**  
> 目標網址：<https://wesleychen310.github.io/osaka2026/learning/islp-reading/?chapter=4#s43>

## 1. 這份 README 的用途

本文件是將 FAM-S 私人雙語電子教科書的 **mobile-first 四模式版型** 套用到 ISLP 閱讀器的可重用 SOP。目前完成 Chapter 4 與 Chapter 5 的分章試行，其他章節仍須逐章驗收。**不要為套版重寫英文、中文、公式、表格或圖片，也不要公開私人教材。**

本次閱讀模式對照：

| 模式 | 共用閱讀器 state | 顯示 |
|---|---|---|
| 全中文 | `zh` | 繁中；保留統計式、圖表、程式 |
| 全英文 | `en` | 英文；保留統計式、圖表、程式 |
| 雙語上下 | `bi` | 同一段英文之後顯示繁中 |
| 左右對照 | `parallel` | **英文左、繁中右，即使 iPhone 320px 也是兩欄** |

重要：左右模式**每欄不再要求至少 280px**；使用 `minmax(0,1fr) minmax(0,1fr)`。共用閱讀器會對同一段的兩種語言指定相同 `--islp-parallel-row`，而公式、圖表、code/output 等應留在完整寬度。

## 2. 架構與現行檔案

- 公開 GitHub Repo：`wesleychen310/osaka2026`。
- 私人閱讀入口：`learning/islp-reading/index.html`（Google OAuth + Drive 下載 + 注入公開 UI 資源）。
- 四模式核心：`learning/islp-reading-mode.js`。此檔是**所有已登記 ISLP 章節的共用 JS**，本次保持原狀；現行 `localStorage` 鍵為 `islp-reading-language-v1`。
- **可重用版型：`learning/islp-reading-fam-layout.css`**。只處理 UI，沒有教材。
- 英文朗讀：`learning/english-us-tts.js`，本次保持原狀。
- Chapter 4 正本：Google Drive `ISLP_CH04_雙語課本.html`，File ID `1fUhbSm_tOL4jnF9zHTEP99y71gYASDJG`；原本的 Folder、名稱及 owner-only 權限均保留。
- Chapter 5 正本：Google Drive `ISLP_CH05_雙語課本.html`，File ID `1JfsQ4Kfdr7TS8v5iTEGTEiZVxmw8a9zT`；原 Folder ID `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`、名稱及 owner-only 權限均保留。
- Chapter 5 獨立修正：`learning/islp-reading-ch05-fixes.css`，專門處理 Chapter 5 的超寬行內 SVG 數學圖片。
- `#s43`、`#s431` 等 deep links 是原書 DOM ID，必須保留，不能重新編號。

內容安全界線：**公開 GitHub 可以存 shell、CSS、閱讀控制器、SOP；完整英中教材與內嵌原書圖片仍只存 Google Drive 私人 HTML。** 不得把 Google access token、session、私人教材或使用者資料寫進 GitHub。

## 3. 如何啟用（Chapter 4、5）

`learning/islp-reading/index.html` 的 `addReadingTools(html,ch)` 在原本兩個 JS 後面追加：

```js
const famLayoutChapters = new Set(['4', '5']);
const layout = famLayoutChapters.has(ch)
  ? '<link rel="stylesheet" href="/osaka2026/learning/islp-reading-fam-layout.css?v=20261010-ch4-pilot-v1">'
  : '';
const chapterFix = ch === '5'
  ? '<link rel="stylesheet" href="/osaka2026/learning/islp-reading-ch05-fixes.css?v=20261011-ch5-v1">'
  : '';
```

然後以 `script+layout+chapterFix` 插入私人 HTML 的 `</body>` 前。順序非常重要：

1. `english-us-tts.js`
2. `islp-reading-mode.js`（建立 .islp-parallel-pair / rows / toolbar）
3. **`islp-reading-fam-layout.css`**（調整既有 class 的視覺，不動原始內容）
4. 僅 Chapter 5 載入 **`islp-reading-ch05-fixes.css`**，避免超寬 SVG 造成整頁橫向捲動，公式維持原始解析度，可在各語言區塊內滑動。

共用 CSS 已在 Chapter 4、5 啟用，其他章節不受此 Pilot 影響。Chapter 4 可用 `?chapter=4#s43`，Chapter 5 可用 `?chapter=5#s51` 直達章節內容並切換四種模式。原本 mode 設定跨章節存於 localStorage，所以使用者先前選的模式會沿用。

## 4. 套用到其他章節（先 QA、再放行）

先用 Github fetch 讀取現行 shell / mode JS / CSS；再檢查候選章節的私人 HTML 的結構（常見 selector 為 `.pair > .en-text + .zh-text` 或 `.pair > .original + .translation`）。**先建立版本／備份，再把候選章節加入開啟樣式名單**，例如：

```js
const famLayoutChapters = new Set(['4', '5']);
const layout = famLayoutChapters.has(ch)
  ? '<link rel="stylesheet" href="/osaka2026/learning/islp-reading-fam-layout.css?v=20261010-ch4-pilot-v1">'
  : '';
```

如果某章 DOM 結構不同（如有 `.caption-en/.caption-zh`、多對語言段落、`figure` 或 `pre` 夾在語言組之間），先做該章專屬測試與小幅樣式覆寫，不要為了一章去破壞共用的 `islp-reading-mode.js`。

擴展前必測：

- 對照原 HTML 的雙語組數、Figure、Table、Equation、Python code/output 數量及 ID，前後不變。
- 對 `chapter=對應編號` 的每節及重要深連結（如 `#s43`）做導航測試。
- 320、375、390、430、710、768、1024、1280px 檢查四種模式（至少 32 cases）。parallel 英文左中文右，同一 row；沒有整頁 horizontal overflow；長公式與程式可以在**自己的容器內**橫向滑動。
- 全中、全英模式確實隱藏另一語言，標題與節號仍顯示，並且圖表、原始 PDF/ISLP images、Tables、code 保留。
- `details`、Exercises、英語朗讀與 Google OAuth 私人讀取功能不能失效。
- 真實 iPhone Safari：須登入成功、實際切換、閱讀同一節，獨立記錄。Chromium 模擬測試不能代替此步。

## 5. Chapter 4 本地 QA（2026-10-10）

- 使用從私人 Drive 原位下載之 **4,309,284 bytes Chapter 4 HTML**。
- 原始內容包括 **233 .pair、48 .equation、25 figure、29 table**；CSS 層處理，沒有改寫這些正文或原始 DOM ID。
- 本地 Chromium 使用 Chapter 4 真實 HTML，套用共用模式的 row/class 機制及新 CSS；**320/375/390/430/710/768/1024/1280 × 四模式 = 32/32** DOM／排版檢查通過，平行欄同一 row，無整頁水平溢出。
- 本地畫面檢查已確認 iPhone 390px 真正同屏雙欄，Figure、公式及程式容器保留完整寬度。
- **限制**：本地模擬共用 mode class/row；尚未用真實 Google OAuth 取得私人站內的執行狀態，也沒有真人 iPhone Safari 實機驗收；GitHub Pages 部署/快取狀態須另外確認。QA 成功不代表網站所有互動都已實機驗證。

## 5A. Chapter 5 本地 QA 與數學公式保護（2026-10-11）

- 來源：Google Drive owner-only 原始 `ISLP_CH05_雙語課本.html`（2,799,350 bytes）。HTML 結構檢視結果：**172 個英中 .pair、306 張 inline-math、11 個 Figure、10 個獨立 equation、28 個 Python codeblock、17 個 outputblock、10 個 English phrases，40 個原始 ID**。本次只改 GitHub 的載入方式和 CSS，這些內容、頁序及 `#s51`–`#s54` 深連結均留在原 Drive 檔。
- Chapter 5 頁面採 `.pair > .original + .translation`，與共用閱讀器既有 class 標記及 row 對齊規則相容。它的頁面主結構是 `nav.topbar + header.hero + main`，不同於 Chapter 4 的 `.layout/.section`；共用 CSS 會選取可用元素，不強制引入新容器。
- 在原始 HTML 上，以本地 Chromium 模擬四種閱讀模式與雙欄 class/row：320、375、390、430、710、768、1024、1280px × zh/en/bi/parallel，**32/32 排版與無整頁橫向溢出測試通過**。parallel 的首組段落英文左、繁中右且同一 row。
- 測試先偵測到 **320px 寬時原始 inline-math SVG（實際寬 346px）會撐寬整頁**；加入 Chapter 5 專用 `overflow-x:auto` 後，四模式均恢復無全頁溢出，長公式在英文／中文區塊內滑動查看，不必犧牲原始解析度。
- **驗證範圍**：32/32 是在本地真實 Chapter 5 HTML 上用與共用 JS 相同的主要 mode/row/grid 規則模擬測試；它不是在正式私人網站登入後跑的完整 GitHub JS／OAuth E2E 測試。仍須以 iPhone Safari 登入、實際點選四模式、滑動長公式、圖片放大和檢查 `#s51` 錨點。部署是否完成也應獨立確認。
- GitHub 變更：共用 CSS **未改**，`islp-reading-mode.js` **未改**，Chapter 4 組態保留；僅增加 Chapter 5 opt-in 和本章獨立修正 CSS。恢復舊版時僅移除 Chapter 5 的 opt-in 即可。

## 6. 維護、備份、回復

Chapter 4 試行時新建 `learning/islp-reading-fam-layout.css` 並更新入口；Chapter 5 擴充時沿用該 CSS、新建 `learning/islp-reading-ch05-fixes.css`，並更新同一 GitHub 入口的 opt-in 集合。**Drive 正本沒有修改，故沒有 Drive 寫入／備份需要。** 修改 GitHub 會有 commit history。

- 入口的舊版 blob SHA：`4e2b58d4a13eb3da962c399aed9794564c9531bf`（更新前，可作精確對照）；新套版在後續 GitHub commits。
- 緊急回復 Chapter 5：從 `famLayoutChapters` 的集合移除 `'5'`，同時停用 `chapterFix` 的 `ch === '5'` 載入；Chapter 4 繼續使用 FAM 版型。要回復 Chapter 4，可另從集合移除 `'4'`。**無須碰私人 Google Drive，也無須修改或刪除共用 mode JS**。保留 CSS 檔供其他章節再次使用。
- 新 CSS 若修正，更新 query string 的 `?v=...` 以避免 iOS Safari 舊快取。
- 若改動私人 Drive 教材正文，須遵照中央 `README.md`：同層 `_backup` 先備份、原位更新相同 File ID、重讀／校驗 owner-only 權限。
- 每次套用下一章，要在本 README 增列章節、測試報告、變更檔案、commit SHA 與回復方式。

## 7. 完整入口

- [ISLP 雙語閱讀目錄](https://wesleychen310.github.io/osaka2026/learning/islp-reading/)
- [Chapter 4 · §4.3（FAM-S 同屏雙欄試行）](https://wesleychen310.github.io/osaka2026/learning/islp-reading/?chapter=4#s43)
- [Chapter 5 · Resampling Methods（同屏雙欄與公式滾動）](https://wesleychen310.github.io/osaka2026/learning/islp-reading/?chapter=5#s51)
- [主站中央 README](https://github.com/wesleychen310/osaka2026/blob/main/README.md)
