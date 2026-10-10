# Shadowing 私人互動閱讀｜架構、校對與維護 README

> 2026-10-11（Asia/Taipei） · Pilot 0.1 · 第 2 章 STEP 01–07  
> 正式入口：https://wesleychen310.github.io/osaka2026/learning/shadowing-reading/

## 1. 目標與範圍

將《TOEICリスニング満点コーチが教える 3ヶ月で英語耳を作るシャドーイング 改訂2版》逐章轉成適合 iPhone／iPad／Mac 的私人互動電子書。

* 所有日文說明保留語義與原順序，忠實轉成台灣繁體中文；原有英文 script、例句、片語不得改成中文。
* 四種閱讀模式：`zh`（全中文 + 原書英文）、`jp`（日文原文 + 原書英文）、`bi`（日文／繁中上下）、`parallel`（日文左、繁中右，同屏雙欄）。
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

## 3. 四模式語言規則

- `zh`：顯示台灣繁體中文解說；英文 Script、完整英文例句仍顯示英文。
- `jp`：顯示日文 OCR 原文；英文 Script、完整英文例句仍顯示英文。
- `bi`：在同一小節先日文、後繁中；英文 Script 單獨完整寬度展示。
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
6. 驗收：逐節數量、原始圖片、英文原文、選單錨點、閱讀模式、原書掃描；320/375/390/430/710/768/1024/1280px x 四模式；全文不能水平溢出（超寬圖片/英文 code 可局部滑動）。
7. 最後讀回 Drive metadata 確認 File ID、parent、owner-only；讀回 GitHub 所有變更與 commit。真人 iPhone Safari OAuth 測試須獨立註明。

## 6. 本地版面測試

2026-10-11 本地 Chromium `page.set_content` 採用實際 1.9 MB 私人 HTML，於 320/390/768/1280px x zh/jp/bi/parallel **16/16** 通過：7 STEP、5 個英文 script、35 張原書掃描圖片都存在，兩欄模式同屏，日本文左／中文右，沒有整頁水平溢出。尚未使用真人裝置進行 Google OAuth E2E。

## 7. 後續章節

以原書完整章節順序逐章建立私人檔案，分章下載，不把整本書打包到單一龐大 HTML。可使用與 ISLP 相同的 `?chapter=` 路由，保留 `#step-1` 到 `#step-7` 深連結；每章完成來源完整性與四模式 QA 才公開於目錄（公開的只是章名／路由，內容始終私有）。

總站交接與入口索引：`/README.md`。
