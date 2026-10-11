# ATPA 先備精華版｜私人 ISLP 雙語閱讀器 README

版本：2026-10-11 · 3-mode reader + 補充教學／數學排版 v2 · 狀態：**GitHub 程式碼已更新；Google 私人內容 E2E／實機 QA 待驗收**。

## 1. 網址與範圍

- 精華版：https://wesleychen310.github.io/osaka2026/learning/atpa-prereq/
- 完整版：https://wesleychen310.github.io/osaka2026/learning/islp-reading/
- 私人學習入口：https://wesleychen310.github.io/osaka2026/learning/
- 參考的版型與規範：[ASM FAM-S Lesson 11](https://wesleychen310.github.io/osaka2026/learning/fam-s-reading/lesson11/)／[`WORKFLOW.md`](../fam-s-reading/WORKFLOW.md)
- 本頁只納入原 ISLP 四章的 **23 個指定 subsection**，按原教材的次序呈現。此數量是本次先修計畫；與 SOA 官方 syllabus 的必讀項目區分。

| Chapter | 原書 subsection |
|---|---|
| 4 Classification | 4.3.1–4.3.4；4.6.1–4.6.3 |
| 5 Resampling Methods | 5.1.1、5.1.3、5.1.5 |
| 6 Linear Model Selection | 6.1.1–6.1.3；6.2.1–6.2.3 |
| 8 Tree-Based Methods | 8.1.1–8.1.4；8.2.1–8.2.3 |

未選小節不得冒稱已學會。精華版只做**裁剪式視圖**，不應重寫原英文或繁中。

## 2. 結構／保密

| 檔案 | 用途 |
|---|---|
| `learning/atpa-prereq/index.html` | GitHub Pages 目錄、Google OAuth 及從私人 Drive 載入章節後按 subsection 過濾；公開 shell |
| `learning/atpa-prereq/reader.js` | 精華版獨立三模式控制適配器，使用 `atpa-prereq-language-v1` 存放閱讀偏好 |
| `learning/atpa-prereq/reader.css` | 精華版專用手機與雙欄版型，數學／圖表／表格排版及局部捲動 |
| `learning/islp-reading-mode.js` | 原先完整版共用雙語配對及語言 DOM 標記；**不要為精華版修改它** |
| `learning/islp-reading-fam-layout.css` | Chapter 4–6 的既有相容排版，載入後由精華版 CSS 覆蓋必要設定 |
| `learning/islp-reading-ch05-fixes.css`、`learning/islp-reading-ch06-fixes.css` | 原本 Chapter 5、6 數學 SVG 局部橫向捲動修正 |

來源 HTML、私人 Figures、Tables、公式、內嵌圖片，仍只存在 Google Drive；GitHub **僅存 shell / CSS / JS / README**。不能複製完整受限制教材到公開儲存庫，不寫入 access token。原文件權限與 File ID 不變。

## 3. 只有三種閱讀模式

1. **全中文** (`zh`)：顯示完整台灣繁中翻譯，保留原小節編號、方程式、圖表、程式碼。
2. **全英文** (`en`)：顯示英文原文；中譯與中文 gloss 不干擾主閱讀欄。
3. **左右對照** (`parallel`)：英文在左、繁中在右；同一 `.pair` 配成同一 row，**即使 iPhone 320px 直式亦是等寬雙欄**。

禁用第四種「雙語上下」。切換必須同步更新 `aria-pressed`，偏好獨立保存，不破壞原版四模式共用設定。全中文首選預設（若曾選過三模式則沿用選擇）。原共用 JS 先建立雙語節點／標題與 Figure，精華版 adapter 最後接管三模式按鈕。

## 4. Figure / Table / Equation 的不可退讓條件

- **不得刪減任何選定小節內的原英文、繁中、公式、Table、Figure、caption、source page、程式、output 或 footnotes**。如跨 subsection 邊界有 Figure/caption，需人工驗證歸屬並一起保留。
- 頁內獨立 Figure、equation、code／output 適用雙欄的**完整寬度**；段內公式若過長，讓個別數學容器水平滑動，避免整頁變寬。
- 原數學 SVG / raster 圖不得為縮版任意裁斷或重繪。需要更清晰時須基於原 PDF 重新輸出，記錄 Figure 及來源頁碼，不能拿網路近似圖替換。
- Table 保留 row／column 結構，資料、表頭與註腳；寬表必須可在表格容器內滑動。若原 HTML 沒有 table wrapper，下次 QA 加局部 wrapper，但不得更動單元格資料。
- 直接保留來源錨點 `#s431` 等；原小節導覽所刪的項目不能出現在精華版導覽。

## 4.1 補充教學／數學排版（2026-10-11）

- `explainers.js` / `explainers.css`：對 23 個先備小節加上可展開的「再解說一次」教學卡，§4.3.1 和 §4.3.2 各有第二張針對性卡，共 **25 張**。三部分固定依次為「① 核心概念 → ② 簡單例子 → ③ 類比記憶」。每張卡預設收合，位於當前概念段落旁；屬於教師補充，不冒稱原書內容。全部私人來源雙語段落保留。
- `math-fix.js` / `math-fix.css`：Chapter 4 選定的 Eq. (4.1)–(4.9) 中核心 Logistic 方程式及 Eq. (4.35)–(4.37) Poisson 方程式用原生 MathML 精排。**原始公式仍在 DOM 內，以「查看原始公式」展開**，保留原編號、原文與補充註解，不需要第三方 MathJax／KaTeX。
- Chapter 5／6／8 原書嵌入的 PNG／SVG 數學圖片不假冒可編輯公式；在原圖基礎上取消手機過度壓縮、允許公式容器內左右滑動及點圖放大。SVG 仍保持向量精度；PNG 像素解析度以原始來源為限。**這屬於顯示改善，並非宣稱全部圖片公式已逐式重建**。
- 四個 Chapter 的 Source、Figure、Table、公式與註腳仍由原 Google Drive HTML 透過 OAuth 載入，不移動檔案也不變更授權。GitHub 上僅放獨立外掛工具，不複製原教材全文。
- 目前已檢查四個 Drive 來源的章節 heading IDs、方程式類別及規範化排版需求；新增 JS 語法已檢查。尚未以使用者 Google OAuth 在 Safari/Chrome 對原生公式、卡片對位做完整 E2E／逐頁人工驗收。

## 5. 手機／功能驗收清單

測試尺寸：**320 / 390 / 768 / 1130 px × 全中文 / 全英文 / 左右對照 = 12 組／Chapter**；四章共 48 組基本版型測試。至少核對：
- 閱讀模式只有 3 按鈕，並且原文／中譯隱藏狀態正確；
- 中文標題可見原始 subsection number（例如 `4.6.3`）；
- 左右模式確實同一 row、英文左中文右、iPhone 窄寬不退化成上下模式；
- 無 document-level horizontal overflow；長公式、表格、code 各自可滑；
- 每章全數指定 subsection 各自可點入，不包含其他小節；錨點與返回連結可用；
- Figure/Chart/Table/Equation/caption/footnotes 在選定 subsection 對應位置存在，尺寸、文字及圖片清楚；
- 範例、練習題、`details`、TTS 在存在時不失效；
- Google OAuth 存取原私人 Drive，未授權不得取得教材。

**當前驗證邊界**：此版僅完成 GitHub 內容寫入及程式碼檢查。尚未完成透過 owner 的 Google OAuth 拿到真正 4 份私人 HTML 並檢查每個 Figure 的數量／對位；沒有宣稱 48/48 模擬或 iPhone Safari E2E 通過。必須執行後才可將狀態升為 `UI-QA`。

## 6. 維護／備份

- 只修改本資料夾 `index.html`、`reader.js`、`reader.css` 時，GitHub commits 可回復。**不要改 ISLP 完整版共用控制器**；為修正個別章節改本資料夾。
- 若要變動私人 Google Drive 正本，在其同一父資料夾的 `_backup` 建立帶備份時間與原因的副本，再更新**原 File ID／名稱／父資料夾**，完成權限與內容驗收。
- 記錄變更時更新本 README 的日期、改動項、驗收結果與待辦，區分「已寫入程式碼」、「已部署」、「已登入測試」、「逐頁校對」。
- 修改 CSS／JS 後務必同步更新 `index.html` 的 `?v=` 版本參數，防止 iPhone Safari 快取舊版。

## 7. 新對話 / Work 接續指令

> 請先閱讀 `learning/atpa-prereq/README.md` 及 FAM-S `WORKFLOW.md`。沿用原版 Google Drive 私人教材，精華版僅顯示指定 23 個 subsection。保持全中文／全英文／左右對照三模式，手機直式仍雙欄；逐一查驗所有 Figure、Table、Equation、caption、source anchors，並執行 48 組 viewport/mode QA 與私人 Google OAuth E2E。改 GitHub UI 不需動 Drive；如需修改任何 Drive 正本，先同層 `_backup` 備份，再原位更新，保留名稱、權限與 file ID。
