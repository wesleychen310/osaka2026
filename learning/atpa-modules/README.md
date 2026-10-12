# SOA ATPA 官方 Modules｜私人雙語電子教科書

版本：2026-10-12 · batch 1（1.1.1–1.1.12）
狀態：**原始私人內容已存 Google Drive、GitHub 閱讀器程式已建立；真實 OAuth／iPhone Safari E2E 待驗收。**

## 1. 網站與路徑

- 學習首頁：https://wesleychen310.github.io/osaka2026/learning/
- Module 閱讀入口：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/
- 第一批深連結：https://wesleychen310.github.io/osaka2026/learning/atpa-modules/?module=1&part=1#s111
- GitHub shell：`learning/atpa-modules/index.html`
- UI：`learning/atpa-modules/reader.css`
- OAuth／內容載入及模式切換：`learning/atpa-modules/reader.js`
- **Google Drive owner-only 原始內容**：`ATPA_Module_1_Part_01_1.1.1-1.1.12_雙語私人教材_DATA`（Google Docs；內文儲存為 HTML 純文字），File ID：`1TTzOcWZ24Z0IpjcFcXrl723FC3gUUC-H6ATG0OoXuNA`。
- Drive 原稿資料夾：https://drive.google.com/drive/folders/1uLenu319fQEQwltPasYv1HH_EL6Swk4q
- PDF 權威來源：SOA ATPA Module 1 — Data and Model Ethics，created 2023-04-06，source pages 1–73，Google Drive `ATPA_Official_Modules_1-4_Combined.pdf`；已對照 Project 上傳 PDF。

## 2. 固定架構與安全邊界

```text
Google Drive owner-only Google Doc（HTML 純文字）
          ↓ OAuth drive.readonly
Drive REST files.export?mimeType=text/plain
          ↓ JavaScript DOMParser
GitHub Pages 公開 shell（不含教材正文／英文原文／繁體翻譯）
          ↓ CSS / JS 四模式
使用者私人瀏覽器閱讀
```

**注意：此版本使用原生 Google Docs 作為私人 HTML 純文字儲存體，而非 .html 檔案。** 瀏覽器以 Google Drive export text/plain 取得 HTML，方便 connector 直接更新內容，避免將受限教材推到公開 GitHub。之後可以將不同批次改成 Drive HTML raw 檔，但須維持原始 File ID／授權策略的可追溯性。

只有 GitHub 公開：HTML shell、CSS、JS、README。不得將來源全文、已翻譯的完整正文、Token 或私人圖片推到 GitHub。

## 3. 已完成範圍

- 1.1 Ethical Framework 下 **1.1.1–1.1.12，共 12 小節，源 PDF p.4–18**。
- 第一批私人文件內有 **50 個 .pair**（英文原文對繁體中文）、12 個 `details.tutor`、12 個 `details.phrases`。
- 1.1.4 Amazon 案例原有三個 Tab 已完整轉成 HTML details，保留三段教訓及跨頁原文。
- 1.1.6 四個 Tab 已轉成 HTML details，記錄原 PDF Tab Title 的異常序號。
- 1.1.9 四張 Flip Cards 已轉成 HTML details。
- 1.1.2 原 PDF 誤標「Module 4 Learning Objectives」已明確註記。
- 1.1.4 原 PDF 非本案例的 BreastCancerWisconsinDataSet.csv 連結已註記。
- 已用 PyMuPDF 原文核對 50 段，除 1.1.4 跨頁段落需將 PDF 頁眉頁腳分隔後人工核對外，其餘 49 個 paragraph/list-item 英文文字能對應 PDF。

## 4. 閱讀器功能

- `zh`：全中文，原 Section 號及中譯標題保留。
- `en`：全英文，隱藏繁中段落與教學卡。
- `parallel`：同一 `.pair` 英文左、繁中右；手機同樣維持兩欄。
- `swipe`：大字橫滑，單段英文與繁中左右滑動。
- 於 `localStorage` 單獨記錄 `atpa-official-module-language-v1`，不干擾 ISLP 閱讀器。
- 導航根據私人 HTML 內容動態建立，可用 `#s111` 到 `#s1112` 深連結。
- 教材中的外部連結限制 HTTP(S)，載入內容清除 script、iframe、inline event handlers。

## 5. 接續製作 SOP（下一批 1.1.13–1.1.24）

1. 以原 PDF p.19–30 順序擷取全部標題、段落、Tab、List、Figure、Footnote；按原稿頁碼標記。
2. 逐段英中翻譯，為每節補一張「核心概念／精算例子／類比記憶」教師卡，3–5 個 Reusable English。
3. 只將私人教材正文寫入 Drive；可新建 Part 02 owner-only Google Doc，並在 `reader.js` 的 `SOURCE` 新增 `1:2` 對應資料（擴充 Module 1 Part URL）。
4. GitHub 資源變更前先抓 blob SHA；完畢更新 `?v=`，避免 Safari cache。
5. 測試來源段落數、雙語配對、Tab 卡片、深連結、320/390/768/1130px × 4 模式。
6. 完成 Google 帳號私人 OAuth／實機 Safari 檢查後，才從 `CONTENT` 升級 `PRIVATE-E2E`，並記錄於此。

## 6. 驗收邊界與退回方法

- 已通過：Drive 文件建立、來源目錄移入私人教材資料夾、Docs 文字 fetch/export、50 個 pair 及 12 小節靜態核對、GitHub 程式碼寫入。
- 待完成：Google OAuth owner 實機授權、網頁從 Drive export 加載 E2E、iPhone/iPad/Mac 各自視覺測試、2026 GitHub Pages CDN 部署核實。
- 來源原文屬 2023 年教材；補充的 2026 法規資訊應另列來源，**勿默默改寫原書文字**。
- GitHub 各檔透過 git commit 回復。Google Drive 更動任何已存在的 Part 原稿前，應在原父資料夾 `_backup` 建立帶日期的備份並驗證，再於原 File ID 更新。

## 7. 待續建清單

- Part 02：1.1.13–1.1.24
- Part 03：1.2.1–1.2.18
- Part 04：1.2.19–1.2.28
- Part 05：1.3.1–1.3.8
- Part 06：完整 73 頁來源、8 Knowledge Checks、3 Case Study Questions、跨裝置/模式、法規補充與最終驗收。
