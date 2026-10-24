## 2026-10-24｜批次 001 已上線（日中雙語目次）

- 正式入口：<https://wesleychen310.github.io/osaka2026/learning/shadowing-reading/>，Google OAuth 登入後預設載入私人 Batch 001（日文原文、繁中翻譯、左右對照）。
- 第一批以原書實際 PDF 1–5 頁製作五頁全目錄，包含 80 個項目；原書第一頁即是目次。
- 私人 HTML 檔案 ID：`1M9-IoCUbyvxFHEp9EjoD22NR60lkQaNG`，原來源 PDF ID：`1Zi-K01V8ZKP1DzjmrpszZmP9KGNdii53`。上述私人檔案保持 owner-only；來源掃描經該檔 Google Drive 連結開啟。
- 舊版 STEP 01–07 使用 `?book=steps#step-1`，繼續保留。目次項目連結由公開登入殼層補上切換路由。
- 通過 Chromium 8 種寬度 × 3 模式基本渲染檢查；真人 iOS Safari OAuth 待驗證。下批 PDF 6–8 前言。
- 本次新規格為「從書第 1 頁起，原文校對＋繁中翻譯＋網站發布同步」，以 `PLAN.md` v3 為準。後續版本以完整雙語小批次發布。

---

# Shadowing 私人互動閱讀｜架構、校對與維護 README

> 2026-10-11（Asia/Taipei） · Pilot 0.1 · 第 2 章 STEP 01–07  
> 正式入口：https://wesleychen310.github.io/osaka2026/learning/shadowing-reading/

## 1. 目標與範圍

將《TOEICリスニング満点コーチが教える 3ヶ月で英語耳を作るシャドーイング 改訂2版》逐章轉成適合 iPhone／iPad／Mac 的私人互動電子書。

* 所有日文說明保留語義與原順序，忠實轉成台灣繁體中文；原有英文 script、例句、片語不得改成中文。
* 三種閱讀模式：`zh`（全中文 + 原書英文）、`jp`（日文原文 + 原書英文）、`parallel`（日文左、繁中右，同屏雙欄）。原 `bi`（雙語上下）已取消；先前儲存 `bi` 的使用者會自動轉換為 `parallel`。
* 標題、目的、實踐方法、重點、練習、英文 script、注記、圖解／符號及來源頁碼都需可追溯。
* 優先完成來源原文與譯文完整性，再逐段校對配對。尚未驗收的內容須明確標示狀態，不得自行省略或推定完成。
* 目前只交付：**第 2 章 STEP 01–07**，其餘章節未上線。

## 2. 檔案與權限

| 類型 | 路徑／File ID | 權限 |
|---|---|---|
| GitHub Pages Shell | `learning/shadowing-reading/index.html` | 公開原始碼，只有登入程式、介面描述和 Drive ID |
| 私人完整 HTML | `Shadowing_STEP01-07_私人互動閱讀.html`, ID `10JdhNj1ynPOTVEe5Nr9OwkkQfnqmlzfk` | Google Drive owner-only |
| 私人來源原書 | `谷口惠子_原書含OCR文字層.pdf`, ID `1Zi-K01V8ZKP1DzjmrpszZmP9KGNdii53` | Google Drive owner-only |
| 已翻譯 PDF | `3個月打造英語耳_Shadowing_STEP01-07_繁中翻譯.pdf`, ID `1F6Cs6B5yv_T6rJapE6wHuBltIQ0CeW4r` | Google Drive owner-only |
| 存放資料夾 | `英文學`，ID `1BD27TNmiMPGiQlWEDxSE_lYrDBYLbzPj` | 以當下 Drive metadata 為準 |
| 站點清單 | `learning/index.html`、根目錄 `README.md` | 公開，但沒有書籍全文 |

**安全界線：任何原書文字、日文 OCR、翻譯、掃描影像、HTML 正文只能保留在私人 Drive 檔內。** 公開 GitHub Repo 不可放正文，也不可放 OAuth token、工作階段資訊、私人掃描影像。GitHub Pages URL 本身公開，透過使用者的 Google Drive 權限控制閱讀。

## 3. 三模式語言規則

- `zh`：顯示台灣繁體中文解說；英文 Script、完整英文例句仍顯示英文。
- `jp`：顯示日文 OCR 原文；英文 Script、完整英文例句仍顯示英文。
- `parallel`：同一小節日文左、繁中右。320px 手機依然是真正兩欄，不能退回上下排列；英文 Script 占完整寬度，以確保可讀性。

與 ISLP 不同：這是**日文原著的英語教材**，不把英文 script 當成應翻譯的日文；不將英文腳本翻成繁中。原書第 2 章 7 STEP 原有 5 個重複 English Script 區塊保留，STEP 05 的 slash 與發音標記用原頁影像供核對。

## 4. 檔案狀態與驗收誠實界線

- 已由既有中文譯本 DOCX 匯入 STEP 01–07：每 STEP 的條款、標題、英文 script 與完整段落。
- 已從私人 OCR PDF 提取日文原文，依**小節層級**與繁中對照；個別日文 OCR 字可能有辨識誤差。
- 已嵌入原書 PDF 頁 **46–80（35 頁）**作為可展開的掃描參考，來源頁影像可彌補文字層對 accent／intonation／linking 標記辨識不全的問題。
- **逐段日中 sentence-level 精確對齊、OCR 全人工校訂、原始音檔整合均尚未完成。** 不可把目前 Pilot 宣稱為全書完成。
- 書中音訊 01／02 的原音訊未隨這次 PDF 提供；網站的「美式朗讀」只使用裝置 en-US SpeechSynthesis，明確標示為合成聲音，不能說是原書音檔。

## 5. 建構／更新 SOP

1. 從本 README 與根 README 找到現行 shell、Drive File ID、父資料夾，確認原始權限與當前版本。
2. 確認使用最新原書 OCR PDF 和已校訂翻譯來源。比對各 STEP 的標題、完整日文、繁中、英文 script、圖片和頁碼。
3. 新增範圍先產出單獨來源紀錄，記錄可辨識／不可辨識文字與校訂狀態，不可跳過缺失。
4. 修改現有私有 HTML 前，先在同層 `_backup` 建立日期備份；使用 Drive `update_file` 取代同一 File ID，不移動、不公開、不重命名。
5. 必要時修改 shell 的章節索引（大量教材按章節分獨立私人 HTML）；保持既有 Google OAuth／session 流程。
6. 驗收：逐節數量、原始圖片、英文原文、選單錨點、閱讀模式、原書掃描；320/375/390/430/710/768/1024/1280px x 三模式；全文不能水平溢出（超寬圖片/英文 code 可局部滑動）。
7. 最後讀回 Drive metadata 確認 File ID、parent、owner-only；讀回 GitHub 所有變更與 commit。真人 iPhone Safari OAuth 測試須獨立註明。

## 6. 本地版面測試

原先 Pilot 曾對四模式完成 16/16 測試；**2026-10-11 改為三模式後**，本地 Chromium 用現行 1.9 MB 私人 HTML 對 320/375/390/430/710/768/1024/1280px × zh/jp/parallel 完成 **24/24** 排版驗收：7 STEP、35 張原書掃描、三種模式切換、左右同屏，均無整頁水平溢出。原始圖片與英文 script 保持不變。未使用真人 iPhone Safari 完成 OAuth 登入驗收。

## 7. 全書製作計畫與後續章節

完整製作順序、單批上限、每次驗收門檻與當前進度詳見 [`PLAN.md`](PLAN.md)。以原書完整章節順序逐章建立私人檔案，分章下載，不把整本書打包到單一龐大 HTML。可使用與 ISLP 相同的 `?chapter=` 路由，保留 `#step-1` 到 `#step-7` 深連結；每章完成來源完整性與四模式 QA 才公開於目錄（公開的只是章名／路由，內容始終私有）。

總站交接與入口索引：`/README.md`。

## 8. 導覽調整、備份（2026-10-11）

- 新增 `learning/english/index.html` 為「英文學習」書目層；總入口 `learning/index.html` 只顯示「英文學習」，再由該層連入本書。原本的 Shadowing URL 保持不變。
- 移除「雙語上下」按鈕，保留全中文／日文原文／左右對照；預設平行對照，舊的 `localStorage` `bi` 會轉到 `parallel`。
- 私人 HTML 修改前備份於同層 `_backup` ID `1cokwOOxvnNIAFfgWF5cIxlEA6J5pSO1A`（2026-10-24 重建，原舊 ID 已失效）；本次備份檔 ID `1ZugDdvIkdYR2V8fod7A-krsenLbS9g9n`，更新沿用原始私人 HTML ID `10JdhNj1ynPOTVEe5Nr9OwkkQfnqmlzfk`。
- GitHub 站點殼層只修改導航／描述；私人原文與翻譯未被加入公開 Repo。

## 9. 2026-10-24 原文先行整頓（進行中）

- 每批先逐頁核對原書日文 OCR、原有英文 Script、圖片與頁碼；日文原文校訂通過後即可先供閱讀，再分批完成忠實繁中翻譯與逐段對齊。詳細批次及驗收規則見 `PLAN.md`。
- 現有 STEP 01–07 **仍為試行版**，不可標示成來源或翻譯完全驗收。STEP 01「實踐方法」已確定存在繁中漏譯；STEP 07 有日文 OCR 缺段。私人 HTML 本身的修正仍待寫回驗證。
- GitHub Pages 殼層已加入「校訂中」提示，未設定閱讀偏好的新使用者以日文原文模式開啟；若曾儲存其他模式則維持原偏好。所有正文與原頁影像仍僅存於私人 Drive。
- 已確認原來記載的 `_backup` 資料夾 ID 已失效，在同一原資料夾重建新 `_backup`，並完成原版 HTML 的完整備份。私人正本的 ID、名稱與位置未變。
- 現況：**保全備份完成、公開殼層提示已部署、原文比對已啟動；私人 HTML 還未完成第一批內容修補與實機 Safari 驗收。**


### 2026-10-24 同日加開 Batch 002

前言第 1–3／7 頁（原書 PDF 6–8）已完成日文校對與繁中逐段翻譯，獨立私人 HTML 檔案 ID `1G4adCcGVMl8DcHrrvsQuZ7agQ9QsygNl`。從正式入口選「閱讀前言」，網址可加 `?book=preface#preface-p6`。已驗證 22 組段落、3 頁及 24 種模擬版面。下一批 PDF 9–12 頁。原書掃描透過私人 PDF 連結核對，真人 Safari 登入仍待驗收。


### 2026-10-24｜更新：純網站、無原頁掃描

使用者決定**全面網站化與簡潔閱讀**。正式入口保持不變，公開殼層在私人 HTML 下載後於本地瀏覽器完成視覺整理：移除 7 組掃描區塊（35 張）、全部原始 PDF 核對連結和逐頁掃描控制；日中左右對照、全中文、日文原文及英文 Script 均維持。目錄與前言改為連續網頁閱讀，前言跨頁分段在顯示時接回，STEP 01–07 保留獨立七步導覽。

**權限**：所有私人原始資料仍只在 Google Drive。此次因 Drive 原檔內容替換未成功，採用 GitHub Pages 公開殼層的客戶端整理；三個私人 HTML File ID、名稱及位置未修改，原本內嵌的掃描資料仍存在於備份與私人來源檔，不顯示於網站。現有七步驟的部分發音符號尚未完整網頁文字化，等待後續校對。

新的製作批次一律不放原頁掃描、不放 PDF 連結，校對作業內部仍使用原 PDF。


### 2026-10-24｜Batch 003 上線：完整前言七頁

原書 PDF 第 9–12 頁已完成 OCR 校訂與繁中翻譯。新私人 HTML ID `1ZD4vXm5Njer9pUmY4u6NpqsQ-4_zJIf4`，24 組日中對照、私人 Drive owner-only。已更新 GitHub Pages 入口，`?book=preface#preface-p6` 現在自動登入後同時讀取 Batch 002＋Batch 003，顯示原書 PDF 6–12 的連續前言並銜接跨頁的中日斷句。

接下來是 PDF 13–16「この本の使い方」。網站規格維持純網頁無掃描、無 PDF 連結。


### 2026-10-24｜Batch 004：本書使用方法、音訊及特別附錄

原書 PDF 13–17 已完成整批日中雙語校訂與翻譯，獨立私人 HTML ID `1FiKQ2P3iz1gTcxtsZC4izG7Fgkd2ss0F`，owner-only，43 組對照、3 段邏輯結構。正式網站使用 `?book=guide#guide` 直接載入；全書目錄也有「本書使用方法」及「特別附錄」的對應連結。保留出版社原有音訊下載網址，無掃描圖與 PDF 原頁連結。下一批 PDF 18–21 為第 1 章開頭。
