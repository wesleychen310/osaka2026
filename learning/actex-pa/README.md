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
- Chapter 1 開頭印刷 p.3–6 已轉錄並翻譯 54/54 單元，儲存於私人 Drive；仍列 `TRANSLATED / NEEDS_FINAL_PROOF`，不可冒稱全文人工逐字或真實 iPhone Safari E2E 已驗收。
- 下一批從上冊 PDF p.39（印刷 p.7）接續，進入 §1.1 Basic Terminology。禁止遺漏原文、圖表、數學、例題、習題、解答及其繁中翻譯。
- 新增私人 HTML 後更新 `reader.js` 的 `PARTS` 清單；根 README、`learning/README.md` 與本 README 同步記錄來源和進度。
- 更新任何既有私人 HTML：先於同層 `_backup` 建立時間＋原因備份，更新原 File ID 而不變動父資料夾、名稱及權限，下載回讀驗證。
- QA 分開：內容完整性／公式及表格逐頁校對、HTML JS 靜態檢查、320/390/768/1130px × 三模式、GitHub Pages 正式部署、真實 Google OAuth、iOS Safari 實機。


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
