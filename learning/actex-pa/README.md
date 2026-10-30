# ACTEX Exam PA 14th Edition｜私人雙語閱讀器

上線日期：2026-10-29（Asia/Taipei）

## 網址與架構
- 正式網址：https://wesleychen310.github.io/osaka2026/learning/actex-pa/
- GitHub 公開資料：index.html、reader.js、reader.css、README.md；不包含教材原文或翻譯。
- 兩份原 PDF 在 Google Drive「官方參考書」folder ID `1T_-yGaU53ZKDUuo3MgXKLn3R0pn63KgZ`；上冊 ID `1s0P1Ix3PZG7uOpH4EyFUcJywY74TZAo5`；下冊 ID `1N8xPcboUpxRnQ5au3dgb_jeJUsyJGflw`，均維持原位。
- 私人教材資料夾：`ACTEX_PA14_HTML`，ID `1ioLk3mRCWF9VcZ8DL3p2_uy-OKK1Bc-V`（owner only）。
- 第一批：`ch01_p003-p004.html` ID `1KnmXkwNVVynwE9z8fG7rc2stbpm6O1y0`，印刷 p.3–4 = 上冊 PDF p.35–36；35 個英文＋繁中逐段配對單元。第二批 `ch01_p005-p006.html` ID `1o2I893Hn9ExOcDQhT-wcumS4GvQjUcna`，印刷 p.5–6 = 上冊 PDF p.37–38；19 個英中對照單元。兩批合計 54 組／4 頁。含 PA syllabus、Chapter overview、A Word of Caution。

## 使用者指定閱讀規格
每批上線前，**英文原文和繁體中文完整對譯必須同時具備**。目前僅保留智慧單欄閱讀：全頁 EN／中即時切換、單段點選看另一語言、保留閱讀位置，不再使用上下或左右對照。僅 Google OAuth 登入後從 owner-only Drive alt=media 載入 HTML；不公開教材或 access token。

## 進度與驗收
- Chapter 1 印刷 p.3–22 已轉錄並翻譯 231/231 單元，儲存於私人 Drive；仍列 `TRANSLATED / NEEDS_FINAL_PROOF`，不可冒稱全文人工逐字或真實 iPhone Safari E2E 已驗收。
- 下一批從上冊 PDF p.55（原書印刷 p.23）接續，完成資料粒度的討論，再進入資料品質與驗證。禁止遺漏原文、圖表、數學、例題、習題、解答及其繁中翻譯。
- 新增私人 HTML 後更新 `reader.js` 的 `PARTS` 清單；根 README、`learning/README.md` 與本 README 同步記錄來源和進度。
- 更新任何既有私人 HTML：先於同層 `_backup` 建立時間＋原因備份，更新原 File ID 而不變動父資料夾、名稱及權限，下載回讀驗證。
- QA 分開：內容完整性／公式及表格逐頁校對、HTML JS 靜態檢查、320/390/768/1130px × EN／中智慧單欄及單段展開、GitHub Pages 正式部署、真實 Google OAuth、iOS Safari 實機。


## 第三批（2026-10-29）
§1.1 印刷 p.7–8 已新增私人中英對照。累計 p.3–8、74 組。下一批 p.9 起。三種模式、四種寬度本地檢查通過；Google OAuth 與 Safari 尚未實機驗收。


## 2026-10-30｜改版：智慧單欄雙語閱讀（使用者指定）
- 已從介面移除「二段式精讀」與「左右對照」。唯一主要操作為 EN 英文／中 中文，單欄整頁瞬間切換。
- 每段附「看中文」或「看英文」輕量按鈕，只有指定段落臨時展開另一語言；再按收起。標題由整頁語言控制。
- 語言偏好與閱讀段落寫入本機 localStorage；以段落 ID 固定切換位置；明確頁內連結優先於上次閱讀位置。隱藏語言仍可被站內搜尋找到。
- 新增公開 `smart.js` 作為展示層，不改動原有 Google OAuth 驗證及私人 Drive 取文機制。三批私人 HTML 總共 74 組英文／繁中，均保留原 Google Drive ID。
- 已挑選九處原譯文調整成更自然的台灣繁體中文（p.3–4 兩處、p.5–6 三處、p.7–8 四處），英文原文未改；先備份至私人 `_backup`：`1l5cAwpGnbPN_pwbS1N8GYWephaVOHUOD`、`18imuHNsk0cNsbEjKWxz73MjXO9l7n5-a`、`11eMx9Or3AXtzSzZ0TtD8PuYc1ZektxcL`。
- **未來翻譯規範：以流利、達意、自然的台灣繁體中文轉達作者意思，不要生硬逐字直譯；不得省略任何原意、條件、數字、公式、腳註、例題或專業細節，並保持保險精算術語前後一致。** 英文原文不任意改寫，原始 PDF 仍是最終參照。
- 模擬私人 Google Drive 資料於本地 Chromium 測試：320／390／768／1130px，74 組均可切換與單段翻譯；藏語搜尋通過、水平溢出 0、測試段落切換位移 0px、JavaScript 頁面錯誤 0。**真實 Google OAuth、iPhone Safari 及 GitHub Pages CDN 端到端測試仍待實機確認。**


## 2026-10-30｜第四批已上線
- 已接入 Chapter 1 §1.1 印刷 p.9–10，第一冊 PDF p.41–42。私人 Drive HTML：`1Mo79NSDmCVTPxk4GUUiiLP4Tf7AaGVG-`。
- 19 組英中對譯，包括輸入／輸出關係圖、觀測值 × 變數資料表、公式 `Y_i = f(X_i) + ε_i`、三則原書腳註。中文採流暢達意、忠於原意的台灣繁體中文。
- 累積原書 p.3–10，8 頁／93 組雙語；`reader.js` 已掛載四個私人檔案，智慧單欄 EN／中與單段翻譯維持不變。
- 更新 manifest 前已備份到 Drive `_backup`：`1QxZP4FUL0MsaC8d4a41nqmKmcnYSb45l`，manifest 保留 ID `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN`。
- HTML 配對檢查 19／19，Chromium 本地 320／390／768／1130px × EN／中顯示 8／8 通過且整頁不橫向溢出。來源 PDF 頁面影像已確認圖表與公式。真實 Google OAuth、GitHub Pages CDN、iOS Safari 尚未完成端到端驗收；持續標示待最終逐字校稿。
- 下一批從第一冊 PDF p.43（原書印刷 p.11）繼續。


## 2026-10-30｜第 5 批：Chapter 1 p.11–14
- 私人 HTML `ch01_p011-p014.html`，Google Drive ID `1ddz_DGWd5WjcbWl3tDQibSwrJpBTXOvi`；第一冊 PDF 第 43–46 頁，原書印刷 p.11–14。共 55 個雙語單元，中文採流利、達意且不省略原意的繁體中文。
- 完成 §1.1 後半：訊號／雜訊、數值型與類別型、連續／離散、名目／順序、數字編碼不等於數值型、練習 1.1.1 四題及完整解答、監督／非監督式學習、迴歸／分類；涵蓋 §1.2 開頭的模型生命週期簡介。
- 原書 p.12–13 跨頁的一句話改為同一完整雙語段落，不拆成不完整翻譯。吸菸狀態 0/1/2 三分支公式以可閱讀 HTML 重建；原書第 5 號腳註與其附帶說明保留。
- **累積原書印刷 p.3–14：12 頁、148 組英中段落。** 下一批自印刷 p.15／PDF 第 47 頁開始。
- Chromium 本地模擬 320、390、768、1130px × EN／中 8/8 不溢出，單段展開操作正常；新私有檔案已驗證 owner-only。真實 Google OAuth／iPhone Safari／GitHub Pages CDN 尚未完成端對端驗收。英文轉錄與翻譯仍需正式逐字校稿。
- manifest 原 ID `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 已先備份到 `_backup`：`1b6q6kYdJUAR8EGxVd9i3g5UMYpCNqBpW`，再更新檔案原位。新 HTML SHA-256：`948f3849ff92afeb3d14d2c5fbd4eefe93f591bd2e60ea23bcbaaa8aca8ddf4a`。


## 2026-10-30｜第 6 批：Stage 1 Problem Definition
- **已上線印刷 p.15–17**（第一冊 PDF p.47–49），私人 HTML `ch01_p015-p017.html`，Drive ID `1KSqgozcWpiG4RyhtsH6gdSgaTD3EU0HC`，31 組英中段落，原文與繁中同步。跨 p.15–16 的 Issue 說明保留為完整雙語單元。
- 保留兩個 EXAM NOTE 框、一道 POTENTIAL EXAM QUESTION、六項適用條件 Issue／Questions／Data／Impact／Better solution／Update，以及 Hypotheses、KPIs 與兩個限制因素。p.17 的 Stage 2 資料蒐集與 GIGO 導論亦已上線。
- **累積 p.3–17 共 15 頁、179 組中英對照。** 智慧單欄 EN／中和單段翻譯不變；新增 `#stage1`、`#stage2` 目錄連結。
- 本地 Chromium 320／390／768／1130px × EN／中檢查 8/8 通過，31/31 單元均有雙語，單段查看另一語言成功。新私人 HTML 及 manifest owner-only；正式 GitHub Pages CDN、真實 Google OAuth、iPhone Safari 端到端測試未完成；逐字校稿仍在進行。
- manifest 原檔 ID `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 更新前先備份至 `_backup`，備份 ID `1_C4g-n4APNegLp2RYWPetGZHQrasnFPo`，權限為僅擁有者；新 HTML SHA-256 `9cc9a534ca3d4e79ee545904499d612c2676f685c3677589a57ec0d1737e0c90`。
- **下一批：印刷 p.18 起／PDF p.50 起**，Stage 2 的資料品質、資料設計、母體代表性、時間範圍與抽樣；不得省略案例及習題的原文／譯文。


## 2026-10-30｜第 7 批：Stage 2 Data Design and Sampling
- 印刷 **p.18–22**（上冊 PDF 第 50–54 頁）私人 HTML `ch01_p018-p022.html`，Google Drive ID `1wxTMIn8qszoTE5SprlDhFbUp5UjZAjSw`。全批 **52 組英文＋自然流暢繁體中文**，不省略註腳、題目與解答；已照原書影像校正辨識雜訊。
- 內容：2021 年 12 月兩道 PA 真題範例（data-source pros/cons）、Relevance / Population、1936 年 Literary Digest 錯誤選舉民調與抽樣偏差、Time frame、練習 1.2.1（題目與正反面解答）、Random sampling / respondent bias、Stratified sampling、oversampling / undersampling、Systematic sampling、練習 1.2.2 四題與完整解答、Granularity 六級地理例子及應用；含原書註腳 6。資料粒度繼續於 p.23。
- 累計原書 p.3–22，**20 頁／231 組中英對照**；GitHub `reader.js` 已連接七份私有 HTML，章節目錄增 `#b7-data-design`、`#b7-ex122`，智慧單欄 EN／中＋單段翻譯維持不變。
- HTML 52/52 配對，Chromium 本地 320／390／768／1130px × EN／中 **8／8 無全頁橫向溢出**；單段展開翻譯通過。私人教材 HTML 寫入後經 Drive fetch 讀回，owner-only 權限確認；原 PDF 未變更。真實 Google OAuth、GitHub Pages CDN 和 iPhone Safari 尚未端到端實測，文本仍標記 `NEEDS_FINAL_PROOF`。
- manifest 原 ID `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 已先備份到 `_backup`，備份 File ID `1IHff31M2nfPNTvmkaIGhGsz47evCEY--`，再更新原位；新 HTML SHA256 `86cbc7d8eb0bd493c966621767c6688b18871502879e2e0d59edd09fe67b63a1`。
- **下一批：印刷 p.23 起（PDF p.55）**，先完成粒度說明與 Exercise 1.2.3，再繼續 Data quality issues、變數一致性、資料字典等；英文與繁中同批上線。
