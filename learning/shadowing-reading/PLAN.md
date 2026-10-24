# 《3 個月打造英語耳》私人雙語電子書｜最新分批上線計畫

> **2026-10-24｜v3.0｜現行版本**。舊版計畫「先原文、整本再翻譯」已由使用者取消。每批從原書起始頁依序完成原文校對、繁中翻譯、日中對照及網站上線，讓已完成內容立即可讀。

## 發布規格

1. 按私人原書 PDF 從第 1 頁依序前進；每批約 3–5 頁，遇完整章節邊界可調整。
2. 每批日文 OCR 逐頁校對，完整保留原有英文 Script、例句、標題、表格、註腳、音標與原頁順序。
3. 台灣繁體中文忠實完整翻譯，與日文逐項／逐段配對。全中文／日文原文／左右對照三模式同批發布；預設左右對照。
4. 每批先寫成獨立私人 HTML；正式 GitHub Pages 入口載入 Google Drive owner-only 的內容。GitHub 僅放公開程式、路由、批次狀態。
5. 原書掃描須能由對應 PDF 頁連結核對；後續優化為直接內嵌私人掃描，不犧牲快速上線。
6. 全頁排版檢查 320、375、390、430、710、768、1024、1280px × 三種模式，並標記真人 Safari/OAuth 尚未驗收的部分。
7. 修改既有 Drive 檔之前建立同資料夾 `_backup` 時間戳備份，維持原始 File ID、父資料夾、名稱、私人權限；GitHub 透過 commit 記錄可復原。

## 目前進度

| 批次 | 來源頁 | 內容 | 網站狀態 | QA |
|---|---|---|---|---|
| **001** | **PDF 1–5** | **全書目次五頁：80 項原日文＋逐項完整繁中，原書章節層級** | **已接入正式入口；登入後預設載入** | Drive 80 項／5 頁讀回，HTML 24 種響應式模式通過；Safari 實機 OAuth 待確認 |
| **002** | **PDF 6 起** | **前言「はじめに」，先做 PDF 6–8 頁** | 待製作 | 待校對 |
| 003 以後 | 由 PDF 9 頁續接 | 前言其餘與使用方法，再逐頁往後推進 | 待製作 | 待校對 |
| 舊版 STEP 01–07 | PDF 46–80 | 已有獨立完整試行版，仍有 OCR／翻譯待修 | 保留，從網站切換 | 尚未達完整驗收 |

## 已接入的私有檔案

- 書本來源：Google Drive `1Zi-K01V8ZKP1DzjmrpszZmP9KGNdii53`（327 頁，第一頁為目次）。
- Batch 001：Google Drive `1M9-IoCUbyvxFHEp9EjoD22NR60lkQaNG`，`Shadowing_Batch001_目次_PDF001-005_日中對照.html`，位於原來源資料夾 `1BD27TNmiMPGiQlWEDxSE_lYrDBYLbzPj`，僅 owner 有權限。
- 原有 STEP 01–07：Google Drive `10JdhNj1ynPOTVEe5Nr9OwkkQfnqmlzfk`，保留原 ID 及權限。
- 新備份資料夾：`1cokwOOxvnNIAFfgWF5cIxlEA6J5pSO1A`。
- 正式入口：<https://wesleychen310.github.io/osaka2026/learning/shadowing-reading/>；舊版七步驟使用 `?book=steps#step-1` 等路由。

## 上線後需注意

- 目次各項原書掃描目前提供私人原書 PDF 開啟連結；尚未直接內嵌五張掃描圖。
- 第 1 批完全對照掃描圖、逐項檢查了五頁目錄；沒有額外創建不存在的封面。
- 24 組版型驗收為 Chromium 模擬；真人 Safari 的 Google OAuth 和私人 PDF 內頁定位仍待實機確認。
- 每個新增批次需在同一入口顯示可讀列表，並以更新後的讀回及權限檢查為發布依據。


## 2026-10-24 同日補充｜Batch 002 已完成

- 第 2 批已從原書 PDF 第 6–8 頁完成前言 1–3／7 頁的日中雙語私人 HTML，已發布至網站的前言閱讀入口。
- 第 2 批原始檔案位於私人 Drive，File ID `1G4adCcGVMl8DcHrrvsQuZ7agQ9QsygNl`，不存放於 GitHub。
- 包含 22 組日中對照段落；Chromium 8 種畫面寬度、3 種模式共 24 組測試通過。
- 下一批從 PDF 第 9 頁起，完成前言剩餘 PDF 9–12 頁。真人 Safari OAuth 尚待驗證。


## 2026-10-24｜使用者最新網站化指示（優先）

使用者要求：**完全取消原頁掃描展示，整本以簡潔網站閱讀為唯一閱讀介面**。本規則覆蓋 v3 表格中「每批需提供原書掃描」的舊規格：

- 網站保留完整日文、完整繁中、原有 English Script 和三種閱讀模式。
- **不提供原頁掃描、PDF 核對連結、原圖開啟控制、與 PDF 頁切割相同的網頁段落。** 原始 PDF 僅供後台校訂。
- 目錄 1–5 頁合併成一頁連續清單；前言 6–8 頁合併為連續文章，跨頁分割的語句於渲染時接回。
- 已上線私人 HTML 保留 File ID、檔名及位置；截至此版本，由 GitHub 登入殼層在載入後以 DOM 整理為純網頁顯示，網頁上不呈現舊掃描。原檔仍保留供版本回復。
- 既有 STEP 01–07 的 35 張掃描圖片在閱讀畫面載入前從 HTML 字串移除，維持內容與英文練習。因原檔仍內嵌掃描，初始下載量暫未縮小；待私人檔可安全替換時再縮減檔案本體。
- 原始圖片中尚未完全網頁文字化的語調、重音、連音等標記，標記待校對，不能當成完成。
- GitHub commit: `070923f337b81efd58e3de75b9344875e578e9a9`，後續精簡導航 `cecfa27fc12aa2e1f1d0a44fe2c10cecc75704df`。
- 修改前 3 份私人檔案已分別備份至同層 `_backup`：Batch001 `1KSRWcH8rGW4lzBzpmkqbQalOHXvwyc96`、Batch002 `1rKvGhrrzZOQK5B0iiplkQHwVlc83YjoS`、STEP01–07 `13xMP4qklyfF3ELvUg--PhS10G-EhFYJc`。


## 2026-10-24｜Batch 003 已完成並接入網站

- 已逐頁比對 PDF **9–12** 的原書圖面，校正 OCR 並完整翻成繁體中文。
- Batch 003 私人 HTML：`Shadowing_Batch003_前言結尾_PDF009-012_日中對照.html`，Google Drive ID `1ZD4vXm5Njer9pUmY4u6NpqsQ-4_zJIf4`，維持 owner-only。
- 第 9–12 頁共 **24 組日中對照語塊**，4 個原書來源頁標記；本批 HTML 不包含任何原頁影像或 PDF 查閱連結。
- 網站 `?book=preface` 已升級成從私人 Google Drive 載入 Batch 002＋Batch 003，於瀏覽器以 DOM 串接，整理為**七頁連續前言**；原第 8/9、11/12 頁的斷句在合併時銜接。
- 正式網站 GitHub commit：`918a440679081637c5745032d5e7fdbdeba62c28`。
- 維持全中文／日文原文／左右對照，預設左右對照。真人 Safari OAuth 尚未實機驗證。
- **下一批 Batch 004**：原書 PDF 第 **13–16** 頁，「この本の使い方」（本書使用方法）前四頁，第五頁續於 Batch 005。


## 2026-10-24｜Batch 004 完成（原書 PDF 13–17）

- 完整完成原書〈この本の使い方〉、八章內容說明、〈音声ダウンロード方法〉及〈特別付録 追加練習教材のご案内〉。
- 私人 HTML：`Shadowing_Batch004_本書使用方法_PDF013-017_日中對照.html`，Google Drive ID `1FiKQ2P3iz1gTcxtsZC4izG7Fgkd2ss0F`，父目錄維持 `1BD27TNmiMPGiQlWEDxSE_lYrDBYLbzPj`，owner-only。
- 本批包含 43 組日中完整對照，三大段（本書架構、音訊下載、額外練習教材），保留原書外部音訊網址，不含任何原頁掃描或私人 PDF 連結。
- 網站 GitHub Pages 入口新增加載路由 `?book=guide#guide`；從全書目錄可前往本書使用方法及特別附錄，從前言可接續閱讀。
- 公開 GitHub 僅保存程式及私人檔案 ID；繁中與日文正文保留在私人 Drive。
- GitHub commit `e9197e666484e87095cbe1c114b4fb68b0f220a0`。已完成私人檔案讀回、段落與權限檢查，真人 Safari OAuth 需實際登入測試。
- **下一批 Batch 005**：PDF 18–21，第 1 章開頭（含章首頁、英語學習整體架構與四項要素之圖示改寫為網頁語意結構，不顯示原頁掃描）。
