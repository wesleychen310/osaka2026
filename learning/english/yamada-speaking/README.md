# 山田優《今日からはじめる 新AI時代の超独学スピーキングブック》私人雙語網站

**最新版本：2026-10-13，SCENE 001–009 純電子版；正式網站採用 Drive 檔案 `1FYnzqrTmPi8SWd_qVxz_dRariDS03eAy`。**

## 讀者與架構
- 網站（GitHub Pages）：`https://wesleychen310.github.io/osaka2026/learning/english/yamada-speaking/`
- GitHub UI：`learning/english/yamada-speaking/{index.html,reader.css,reader.js,README.md}`。本 repo 為公開 shell，嚴禁放入受版權保護的原書文字、翻譯正文、原頁掃描、Google OAuth access token。
- Google Drive 私人資料：`Yamada_Speaking_FrontMatter_Scenes001-006_TEXT_ONLY.html`，File ID `1_HAX_tNh-8eI7A3ufDBGS7ZSFnm0MaEn`，folder ID `1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`，父資料夾是原 PDF 所在的 `AI` folder。
- 原 PDF：`ChatGPT英會話_山田優.pdf`，ID `1sGQoKXyXvAWflI6iucbOl0x1qliTW6St`，128 個雙頁影像；此 PDF 是排印權威來源。
- Web 透過原有 OAuth client 與 `drive.readonly` 以 Google Drive API `files.get?alt=media` 載入。**Google Drive 檔案權限 owner-only，絕不設為 anyone**。

## 四種閱讀模式（固定規格）
| 模式 | 日文 | 台灣繁中 | 英文 |
|---|---|---|---|
| 全原文 `ja` | 顯示 | 隱藏 | 顯示 |
| 全中文 `zh` | 隱藏 | 顯示 | 顯示 |
| 上中文下原文 `vertical` | 下 | 上 | 顯示 |
| 左右對照 `parallel` | 左 | 右 | 顯示 |

模式以 `yamada-speaking-language-mode-v1` 保存，不干擾其他教材，iPhone 狹窄 viewport 仍保留左右 50% 網格。

## 本批內容與完成狀態（2026-10-12）
- `cover`：書籍封面、扉頁，PDF 1–2，來源書影 + 書籍資訊。
- `preface`：原書印刷 002–003，日文與繁中全文，PDF 3，完成編輯轉錄及譯文。
- `toc`：PDF 4–6 原頁影像，**100 個場景的目錄全文仍待逐項 OCR 校訂，不標示完成**。
- `intro-why`：印刷 010–011，PDF 7，日中配對；`intro-goals`：印刷 012–013，PDF 8，日中配對；`intro-prep`：印刷 014–015，PDF 9，日中配對。
- `intro-page10`–`intro-page13`：PDF 10–13，已保留原頁圖片，**全文日文轉錄及譯文仍待校對**。
- `scene-001`，`scene-002`，`scene-003`：原書印刷頁 024–029，來源 PDF 14–16。三階段練習、全部英語鍵句、原書模型對話、情境、訓練重點、課後回饋以及供練習的原文菜單／卡片／備忘錄均收錄。
- 目前 SCENE **3／100** 完成編輯初稿。原書 004–100、其他前置頁面與附錄仍需批次建置，絕不因 OCR 有文字層就標記完成。
- 原書頁面圖片以私有 HTML 中嵌入 base64 JPEG 的方式保存，公開 GitHub 不會洩漏原圖；所有可見章節含原頁核對。
- Google Drive 讀回確認：`1cMjd--G7ZJwZyWEHrY35oezW18vUsMRz` owner-only，無 any/domain grant，約 4.20 MB；每批新增或覆寫需再次核對。


## 2026-10-13 電子版更新（目前正式使用來源）
- **新的私人教材**：`Yamada_Speaking_FrontMatter_Scenes001-006_TEXT_ONLY.html`，Google Drive File ID `1_HAX_tNh-8eI7A3ufDBGS7ZSFnm0MaEn`，父資料夾 `1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`。原先含掃描圖的 `1cMjd--G7ZJwZyWEHrY35oezW18vUsMRz` 保留為舊版本，閱讀器不再引用。
- **純文字排版**：來源 HTML 64,182 bytes，15 個 chapter、6 個 SCENE、104 個日中 pair、**0 個 img／0 個 scan**。保留源書 PDF 在 Drive 僅供編修者核對；閱讀網站不再出現整頁影像。
- **新增**：SCENE 004 両替をする（30–31，原始匯率板依原數據重建為 HTML table）；SCENE 005 市内への行き方を尋ねる（32–33，原書 memo 欄位）；SCENE 006 目的地への道順を尋ねる（34–35，原書 A–E 地標路線概念以純 HTML/CSS 重建）。三課各保留 STEP 1–3、全英文句型、模型對話、日中文段對應。
- **原始前置資料範圍**：完整前言及既有三組前置章節的文字保留；`toc` 和 `intro-page10` 至 `intro-page13` 仍為 `pending`、無掃描圖／無以 OCR 草稿替代的內容。標示待校訂，下一階段須補全。
- **修復重大載入問題**：舊 `reader.js` 將實際 12 個 chapter 誤驗證成 13 個，本次改為預期 15 個，含 `preface` 至 `scene-006`，並移除「每章必須有 .scan」舊條件，禁止含掃描圖的新版來源載入。
- **安全**：Google Drive 新檔 metadata 讀回 `mime_type=text/html`、`size=64182`、owner-only、無 anyone/domain、父資料夾保持；僅公開 shell/CSS/JS，無教材全文。
- **本批程式化核對**：15 個 chapters、10 個標記 verified、5 個明確 pending、104 組日中 pair、6 個 scene 全有 STEP 1/2/3、0 圖片。私有內容讀回可包含 SCENE 001–006。實際 Google OAuth／Safari iPhone E2E 與 CDN 生效仍待真人授權及裝置實測，不能宣稱通過。
- **回退**：上一版本 Google Drive source File ID `1cMjd--G7ZJwZyWEHrY35oezW18vUsMRz` 未覆寫；GitHub commit 歷史可回復 UI。再次修改現有 Google Drive 正本仍須先備份到同資料夾 `_backup`，保留 ID、父資料夾、分享權限。

## 2026-10-13 第二次延伸｜SCENE 007–009 純電子教材
- **目前網站使用的私人 Google Drive HTML**：`Yamada_Speaking_FrontMatter_Scenes001-009_TEXT_ONLY.html`，File ID `1FYnzqrTmPi8SWd_qVxz_dRariDS03eAy`；parent folder `1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`，MIME `text/html`，大小 **86,160 bytes**。
- **來源**：原書印刷 pp.036–041（PDF 雙頁掃描第 20–22 張），逐頁直接對照頁面影像，與既有 SCENE 001–006 合併。
- **SCENE 007** 交通系ICカードを入手する：完整情境、重點、3 個英文關鍵句型、9 句雙角色英文模型對話、STEP 1/2/3、5 項購卡任務清單；包含原書 $20 卡價、$5 可退押金、實戰儲值 $35，區分模型示範 $10。
- **SCENE 008** 乗るべき電車を尋ねる：3 句關鍵句型、7 句模型對話、原書 Platform 1–6、Ticket Gates、Elevator、Information、You Are Here **純 HTML/CSS 車站配置示意**；保留 Platform No. 5 與 express／local。
- **SCENE 009** 電車の遅延状況を尋ねる：3 句關鍵句型、9 句模型對話、純 HTML 電光看板，原始表格 **Central 10:10 Delayed／Bay Area 10:15 Delayed**；保留轉車地點 Parkside Station、20 分鐘、10:25 a.m. 及信號問題。
- **資料完整性抽核**：前置資料與 SCENE 001–009 合計 **18 個 chapter／9 個 scene／150 個日中 pair／0 個圖片**，新 3 場景皆有 3 個練習步驟及原英文；6 個已完成場景擴至 9 個，目錄及 4 組前置圖解仍標示 pending，未冒稱完成。部分 QR Code 連結未轉錄，原 PDF 保留供後續核對。
- **權限／版本**：Drive metadata 顯示 owner-only、無 `anyone`／`domain`、位置不變。舊版 `1_HAX_tNh-8eI7A3ufDBGS7ZSFnm0MaEn` 與最早的 `1cMjd--G7ZJwZyWEHrY35oezW18vUsMRz` 均保留，未覆寫；GitHub 閱讀器 `reader.js` 已切換到新 File ID，驗證 18 chapters、前言及 SCENE 009。網頁 `index.html` cache bust 已更新到 `20261013-yamada3`。
- **網站**：`https://wesleychen310.github.io/osaka2026/learning/english/yamada-speaking/`，從 `learning/english/` 進入。四模式：`ja`、`zh`、`vertical`、`parallel`；英文原文在所有模式固定可見，狹窄 iPhone 仍有等寬左右配對欄。
- **QA 分級**：已核對 Drive 新檔 bytes、章節/成對數與 GitHub 程式碼提交及讀回；真實 Safari Google OAuth、GitHub Pages CDN live 及 iPhone/iPad/Mac 點擊互動仍待端到端驗收，不能宣稱 E2E PASS。
- **下一步**：先補全目錄及前置說明 `intro-page10`–`intro-page13`，並從原書印刷 p.042 起繼續 SCENE 010；任何既存 HTML 修改前先照既有 SOP 建立 `_backup`。

## 本地首批 UI 測試
- 無外網 Playwright Chromium 模擬授權後，320/390/768/1130px × ja/zh/vertical/parallel：16/16 通過；英文固定可見，搜尋及 CSS 無全頁橫向溢出。這是**本地模擬測試**，正式 Google OAuth、GitHub Pages live 與 iPhone Safari E2E 尚待驗證。

## 編修/備份 SOP
1. 先核對 PDF 頁影像；逐字確認英文（尤其 `I/l`, `'`, `?`, `.`）與日文段落。絕不直接把不可靠 OCR 當成完成稿。
2. 日文 100% 對應台灣繁體中文；英文教學語句固定用英語，置於獨立 `.english-block` 或 `.keyphrase>p[lang=en]`。
3. 對原日文說明用 `<div class="pair"><div class="original" lang="ja">…</div><div class="translation" lang="zh-Hant-TW">…</div></div>`。條件式排版由公開 CSS/JS 負責。
4. 修改既存 Drive HTML **之前**，在同一父資料夾 `_backup` 建立含時間與理由的原檔副本，確認備份後對原 ID 進行 `files.update`；最後讀回 bytes、權限、parent、ID 與結構。
5. 如須增加圖片或不同批次，維持 Drive 私有；`reader.js` 內加入來源 File ID 或擴充 manifest，勿把圖片複製進公開 repo。
6. GitHub 更新現有檔案先讀 SHA，依版本控制更新；UI CSS JS 每次更新 query cache-bust。
7. 本地驗收：320/390/768/1130px × 四模式，前言、三段正文與所有英文固定保留；確認 `.pair` 完整、頁影像可展開、章節導航與搜尋/TTS 均正常。真實 iPhone Safari/OAuth E2E 需另在登入環境實測後才標示完成。
