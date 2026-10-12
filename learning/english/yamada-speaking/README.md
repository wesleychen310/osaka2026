# 山田優《今日からはじめる 新AI時代の超独学スピーキングブック》私人雙語網站

## 讀者與架構
- 網站（GitHub Pages）：`https://wesleychen310.github.io/osaka2026/learning/english/yamada-speaking/`
- GitHub UI：`learning/english/yamada-speaking/{index.html,reader.css,reader.js,README.md}`。本 repo 為公開 shell，嚴禁放入受版權保護的原書文字、翻譯正文、原頁掃描、Google OAuth access token。
- Google Drive 私人資料：`Yamada_Speaking_FrontMatter_Scenes001-003_PRIVATE.html`，File ID `1cMjd--G7ZJwZyWEHrY35oezW18vUsMRz`，folder ID `1rlZNQIExCmmN1CkaV3IyCehlzDAnJ8x3`，父資料夾是原 PDF 所在的 `AI` folder。
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
