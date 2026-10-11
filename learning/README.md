# 私人學習網站：Google Drive × GitHub Pages 教材架構 SOP

版本：2026-10-11 · v1.0  
用途：供未來 ChatGPT 對話、ChatGPT Work、其他 AI 或前端工程師接手。  
適用：ISLP、ATPA、PA、FAM-S，以及未來雙語精算教材。

## 0. 未來對話先讀這裡

**主入口**：https://wesleychen310.github.io/osaka2026/learning/  
**GitHub repo**：`wesleychen310/osaka2026`，預設 branch `main`。  
**本文件**：`learning/README.md`。  
**ATPA 精華版**：[網站](https://wesleychen310.github.io/osaka2026/learning/atpa-prereq/)／[專案 README](./atpa-prereq/README.md)。  
**ISLP 完整雙語閱讀器**：[網站](https://wesleychen310.github.io/osaka2026/learning/islp-reading/)／[相容性 README](./islp-reading/README.md)。  
**FAM-S 參考**：[Lesson 11](https://wesleychen310.github.io/osaka2026/learning/fam-s-reading/lesson11/)／[WORKFLOW](./fam-s-reading/WORKFLOW.md)。

## 1. 核心架構（Separation of Content and Presentation）

```text
Google Drive：owner-only 原始雙語 HTML（含英文、繁中、原公式、原圖、表格）
   ↓ Google OAuth，瀏覽器 fetch Drive API
GitHub Pages：公開、無教材正文的 index.html 閱讀器
   ↓ JavaScript 解析 DOM、配對語言、選章節及閱讀範圍
   ↓ CSS 控制字體、手機寬度、左右雙欄、公式局部滑動
使用者瀏覽器：私人教材 + 三模式閱讀介面
```

重要：**網站 HTML shell 與教材 HTML 是兩種不同的 HTML**。
- GitHub `learning/atpa-prereq/index.html` 是**登入、提取及篩選程式**，可以公開。
- Google Drive 的 `ISLP_CH04_雙語課本.html` 等是真正教材原稿，**owner-only**；不應直接 push 到公開 GitHub。
- 精華版沒有單獨的 Drive HTML 正本；目前**從 Drive 讀取完整版後在瀏覽器裁剪為 23 小節**。因此便利於維護，但下載量仍按整章計。
- 這個模式可降低重複建置時間；每個新章節仍須核對 DOM 結構、錨點、圖表、OAuth、手機排版。

## 2. 目前專案實作與程式位置

| 範圍 | GitHub 路徑／私人來源 | 作用 |
|---|---|---|
| 學習首頁 | `learning/index.html` | ATPA 精華版連結排第一 |
| ATPA 精華版讀取及過濾 | `learning/atpa-prereq/index.html` | OAuth、下載 Drive 原稿、23 小節章節清單、DOM 篩選 |
| ATPA 三模式控制 | `learning/atpa-prereq/reader.js` | 全中文、全英文、左右對照；使用獨立 localStorage key |
| ATPA 手機版 | `learning/atpa-prereq/reader.css` | CSS Grid 英文左／中文右，iPhone 窄螢幕不改上下欄 |
| ISLP 共用語言配對 | `learning/islp-reading-mode.js` | 解析 `.pair`、設定語言 class、段落對位、標題等；完整版仍有四模式 |
| ISLP 共用相容樣式 | `learning/islp-reading-fam-layout.css` | Chapter 4–6 既有雙欄樣式，精華版 CSS 在其後載入 |
| ISLP 章別修正 | `learning/islp-reading-ch05-fixes.css`、`learning/islp-reading-ch06-fixes.css` | 原版數學 SVG 溢位相容 |
| 原始教材 | Google Drive | 完整原文、繁中、Equation、Figure、Table、caption、Python code |

**Google Drive 原始雙語教材資料夾**：https://drive.google.com/drive/folders/1uLenu319fQEQwltPasYv1HH_EL6Swk4q

四章 Drive source File ID（來源與程式配置對照，勿私自改）：
- Ch 4: `1fUhbSm_tOL4jnF9zHTEP99y71gYASDJG`
- Ch 5: `1JfsQ4Kfdr7TS8v5iTEGTEiZVxmw8a9zT`
- Ch 6: `1ORIpJ-VNw8NGpNc_jAg79akwgkttw1FR`
- Ch 8: `1ROu_a2Os338NueAubKuVwWKVBua9YFCk`

不要把 access token、使用者個資或 owner-only HTML 正文提交至公開 repo。

## 3. ATPA 精華版固定閱讀規格

**只有三模式**：
1. `zh`：全中文，原文段落隱藏，但公式、Figure、Table、程式、章節號保留。
2. `en`：全英文，對應繁中段落隱藏。
3. `parallel`：**英文左、繁中右，等寬兩欄；iPhone 320px 直式也需左右對照**。長算式、表格和 code 在所屬容器水平滑動，絕不讓整頁橫向溢出。

**ATPA 精華版 23 個 subsection**：
- Ch 4：4.3.1–4.3.4、4.6.1–4.6.3（7）
- Ch 5：5.1.1、5.1.3、5.1.5（3）
- Ch 6：6.1.1–6.1.3、6.2.1–6.2.3（6）
- Ch 8：8.1.1–8.1.4、8.2.1–8.2.3（7）

這是**針對銜接 ATPA Modules 的自訂先修安排**，不能標成 SOA 官方必讀範圍。

**注意架構**：原完整版 `islp-reading-mode.js` 目前提供四模式。精華版用獨立 `reader.js` 隱藏第四種並使用自己的設定，**不修改完整版通用控制器**。如未來新增大量教材，可重構共用三模式核心，但必須先做回歸測試，避免破壞既有頁面。

## 4. 圖表／公式／精確性

- 每個選定小節必須完整保留英文原文、繁中、Equation／inline math、Figure、Table、caption、footnotes、Code、Output、heading、anchor；不能以教學摘要替代。
- Figure 請用原私人教材的原圖或合法來源截圖，不能用相似圖假冒；保留圖號、圖說、所屬小節。
- 長公式可使用容器 overflow-x:auto，維持可讀性與數學 SVG/LaTeX 精度。
- 數學與數字錯誤必須查原書；如修改 Drive 正本，遵守第 6 節備份。
- 雙語需逐段對位；英文原文與繁中翻譯保留原意；英文專業詞和原始段落不可因版型切換而丟失。
- 若原 HTML 的 table 沒有局部滑動 wrapper，可以在閱讀器 DOM 階段補 wrapper，不要修改表格資料內容。

## 5. 未來新增一本書、一章、一種閱讀介面的工作流程

1. 先讀本 README，再讀最接近的專案 README 和原始教材，核對 Chapter／Section／Subsection、Figure、Equation、Table、Example。
2. 在 Google Drive 的**私人資料夾**保存 source HTML，保留正確的英中 `.pair` 結構與原錨點（`#s431` 等），並記錄實際 File ID、parent、權限。
3. 在 GitHub 建立新的**網站 shell**；沿用 OAuth、語言配對 JS 與現有 CSS，以**獨立專案設定**控制所需顯示模式。新需求能由 CSS 解決時不改原文。
4. 若只需要節選，利用既有 source 以 DOM 過濾；必須以 source 結構判斷小節邊界，保留邊界內圖表和圖說。確認每個原錨點可深連結。
5. 用不同模式與裝置寬度驗收；逐章比對 source 與節選後的 bilingual pair／Figure／Table／Equation 數量與位置。
6. 只有完成真實驗收後才標示 COMPLETE；若只是 GitHub commit 已完成，標記「程式碼已部署／私人實機待驗收」。
7. 把本次變更、檔案位置、決策、待驗收、rollback 指引寫回所屬專案 README；若是跨專案規則，更新**本總 README**。

## 6. 資料安全與變更管控

- GitHub 公開 repo：**只放前端程式、結構規範、公開 UI 資產與 SOP**。原受限教材、完整英中正文、私人內嵌圖表放 Google Drive 受控檔案。
- Google Drive 檔案需保留 owner-only 權限；勿對外公開完整教材來省 OAuth。
- **如需覆寫 Google Drive 既有教材，務必先在原父資料夾 `_backup` 建立帶日期的舊版備份**，驗證備份、保留原 File ID、名稱、父資料夾與權限，更新後讀回確認。
- GitHub 修改採 commits，務必在寫入前 `fetch_file` 取得最新 SHA，並在 CSS／JS URL 的 `?v=` 更新版本避免手機快取。
- 涉及大量原文 / 新圖表 / 公式抽取，應針對原 PDF 逐項驗收，不把排版成功誤認教材校對成功。

## 7. QA 與狀態紀錄

**建議驗收格**：至少 320、390、768、1130 px × `zh`、`en`、`parallel`，每章 12 組，四章 48 組。檢查語言切換、標題、錨點、段落同行雙欄、Figure、Table、公式、跨頁圖說、code、局部捲動、TTS、登入與回退。真實 iPhone Safari／Google OAuth 必須另做 E2E。

截至 2026-10-11 ATPA 精華版：**已有 GitHub shell + 三模式 CSS/JS + 專案 README；未宣稱已通過 48/48 或私人 Drive OAuth 實機 QA**。

狀態定義：
- `SHELL`：網頁入口與程式存在。
- `CONTENT`：原始私人教材可讀、節選內容與深連結可驗證。
- `UI-QA`：已通過指定寬度、三模式和圖表／公式排版。
- `PRIVATE-E2E`：owner 在實機完成 Google 授權、下載、模式切換與導航驗證。
- `COMPLETE`：來源、全文、翻譯、公式與原圖等該項需求全部驗收。

## 8. 未來 ChatGPT 對話可貼的指令

> 先讀 https://github.com/wesleychen310/osaka2026/blob/main/learning/README.md ，以及與本次教材相應的子專案 README。沿用「Google Drive 私人 HTML 儲存教材 + GitHub Pages shell + JS 控制閱讀模式/小節篩選 + CSS 控制手機排版」的架構。ATPA／精華版僅使用「全中文、全英文、英文左中文右」三模式；保留所有原圖、公式、表格及原錨點。不要把私人教材推到公開 GitHub。任何 Drive 覆寫前先在同層 _backup 備份；修改後核對功能、頁面與權限，把結果回寫 README。請區分程式已部署和實機真正驗收。
