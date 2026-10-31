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
- Chapter 1–3 印刷 p.3–257：1,588 組雙語研讀單元；過場 p.258–260：保留 3 張原頁影像及 5 組 Study Break 文字／標題對譯；Chapter 4 印刷 p.261–274：新增 75 組（含補入註腳與圖說）。全站目前涵蓋 **p.3–274／1,668 組／42 份私人 HTML**。新內容仍待公式、表格、註腳及文字精校；不可冒稱已完成全書逐字校訂或真實 iPhone Safari E2E。
- 下一批從上冊 PDF 實體 p.313（原書印刷 p.281）接續 Chapter 4 §4.1.3；延續 GLM deviance、Pearson residuals、deviance residuals 與模型診斷。跨頁練習必須連續處理，禁止遺漏原文、圖表、數學、例題、習題、解答及其繁中翻譯。
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


## 2026-10-30｜第 8 批：Data Validation、PII、Proxy variables 與 Target Leakage
- 上線原書印刷 **p.23–28**（第一冊 PDF p.55–60）；私人 HTML `ch01_p023-p028.html`，Drive ID `1426dW78KmuTNaPFV7CrcFfgxpmiZPYpK`，共 **57 組英中對譯**。已按原書影像校正 OCR，保持完整原文；繁中以流暢、達意、符合精算專業用語為準，不省略原意。
- 本批依原書順序涵蓋：Exercise 1.2.3「月份與季度粒度」及解答；Reasonableness、Consistency、Sufficient documentation 三項資料品質原則；Exercise 1.2.4 地址 join；文件說明五項要素；五列、三欄的完整保單 Data dictionary；個資 PII、匿名化／資料安全／使用條款；Exercise 1.2.5 社群媒體資料的三項考量；受保護類別、代理變數；Target leakage 的定義、理賠件數／損失嚴重度的例子；2020/6/16、6/19 PA Task 3（醫療檢驗次數與住院天數）；Stage 3 Exploratory Data Analysis 導論。
- 跨 p.26–27 的 proxy variable 定義以完整段落合併，不因換頁拆成不完整句子。原書五列保單資料字典改成雙語 HTML 表格，手機可在表格區塊橫向捲動。
- 累積 **原書 p.3–28，共 26 頁／288 組英中對譯**，八份 owner-only Drive HTML；`reader.js` 新增第四類關鍵議題的目錄錨點 `#b8-data-quality`、`#b8-other-data-issues`、`#b8-target-leakage`、`#b8-stage3`，智慧單欄 EN／中及單段展開功能不變。
- 本地 Chromium 320／390／768／1130px × 英文／繁中 **8／8 整頁無水平溢出**；57／57 英中有內容、資料表可滾動、單段翻譯切換通過。原始 PDF 未修改；私人 HTML 上傳後已從 Drive 讀回確認 57 組及 owner-only 權限。正式 GitHub Pages CDN、真實 Google OAuth 與 iPhone Safari 端對端測試未完成；仍標記 `NEEDS_FINAL_PROOF`，不代表人工逐字審定。
- manifest 原 ID `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN`，更新前先於 `_backup` 備份，備份 ID `16-AIl2bAjMqnWXmrhlhh-5A6c1vkVR-R`，原檔原位更新；新 HTML SHA256：`e07c924ee9522f265a4d91718159a6d34b0fcdca499090fc54299711e9da42ab`。
- 下一批：原書 **p.29 起**（上冊 PDF p.61），Stage 4 的訓練集／測試集、模型構建與評估；英文原文與流暢繁體中文必須同批上線。


## 2026-10-30｜第 9 批：Stage 4 Model Construction / Evaluation
- 本批上線原書印刷 **p.29–33**＝上冊 PDF 第 **61–65 頁**，私人 HTML `ch01_p029-p033.html`，Drive File ID `1MklkHaW3ZMW36JvfoMok7oAg7V5HSqVp`，**48 組英中完整對譯**。2026 版英文依原 PDF 可見文字轉錄並訂正抽取噪音，繁中採流利、達意的專業用語；仍為 `TRANSLATED-NEEDS-FINAL-PROOF`。
- 內容：Stage 4、Training/test set split 原書雙分圖（以可存取 HTML 重建）、70–80% 訓練集／20–30% 測試集、out-of-time validation、資料切分的取捨、70/20/10 三分式 Training/validation/test 與 validation 選模偏差、原書對 PA 考題「test」「validation」混用的說明、損失函數（square/absolute/zero-one）、殘差與預測誤差、RMSE／MSE／MAE 完整訓練與測試公式，以及原書註腳 7、8、9。原書跨 p.30–31 與 p.31–32 的句子合併成完整雙語段落。
- 累計原書 **p.3–33，31 頁、336 組英中對譯、9 個私人 HTML 批次**。新版 reader.js 新增 ID 與 `#b9-stage4`、`#b9-three-way-split`、`#b9-metrics` 目錄錨點；CSS 支援手機流程圖、損失表、長公式水平局部捲動，智慧單欄 EN／中整頁切換與單段翻譯維持不變。
- 驗收：私人 Drive 上傳與 fetch 讀回 48/48、owner-only；本地 Chromium 320／390／768／1130px × EN／中 **8/8 整頁無橫向溢出**；原 PDF 五頁影像校核重大版式與公式。不宣稱已完成逐字人工校稿，亦未完成真實 Google OAuth、GitHub Pages CDN、iPhone Safari 的端到端實測。
- manifest 原檔 `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 在更新前已備份至私人 `_backup`：`16pjdoJFrND8lbYosRSim_zxr2xhyacrl`。新增 HTML SHA-256 `e289266bfabb6257e009ea132b2ec6c4fcd5c4ab5fae02fedd75cd359e49a172`。
- 下一批從上冊 PDF 第 66 頁（印刷 p.34）開始，保留 Exercise 1.2.6 各數值／答案、分類問題的 0-1 loss、classification error rate 及 Cross-validation 的全部公式和腳註。


## 2026-10-30｜第 10 批：Classification Error、Cross-validation、Model Selection
- 已上線原書印刷 **p.34–39**（上冊 PDF 物理頁 **66–71**），私人 HTML `ch01_p034-p039.html`，Drive ID `1cLnah1xyAPlDU_9Jasst1AUh5fFdeNil`，共 **48 組完整英中對譯**；每段都有英文原文及流利達意的繁中。仍列 `TRANSLATED-NEEDS-FINAL-PROOF`，最終逐字校稿未完成。
- 内容：損失函數的配適／評估區別、Exercise 1.2.6 五筆觀測值與 RMSE = 3.0332／MAE = 2.8、0–1 loss 與訓練／測試分類錯誤率完整定義、訓練誤差與測試誤差、重要 Cross-validation／Hyperparameters、Exercise 1.2.7 正則化目標函數與 λ 超參數、註腳 10、k-fold CV 步驟與 k = 3 原書示意圖的 HTML 重建、Exercise 1.2.8 10 折 CV 得 45 筆、CV 優缺點、預測表現／可解釋性／實作容易程度的選模取捨、Stage 5 Model Validation 導言。
- 原書 p.36–37 超參數訓練資料段落以及 p.38–39 預測績效跨頁敘述，分別以完整語意的雙語段落呈現；原書圖片以語義清楚的 HTML 表格重建，手機表格可局部水平捲動。
- 累積 **原書 p.3–39，37 頁／384 組英中對照／10 批私人 HTML**。章節入口新增 `#b10-ex126`、`#b10-cv`、`#b10-best-model`、`#b10-stage5`。維持智慧單欄 EN／中整頁切換、單段看翻譯、保存閱讀位置；不恢復左右或上下雙欄。
- 本地 Chromium 模擬檢查 320／390／768／1130px × 英文／繁中 **8/8 無整頁水平溢出**，48/48 內容可見，單段展開及 CV 流程圖已核對；私人 Drive fetch 讀回 48 單元，權限為僅擁有者。**未執行**正式 GitHub Pages CDN、實際 OAuth 或 iPhone Safari 端到端驗證；不可冒稱已實機測試。
- 先備份 manifest 至 `_backup`，備份檔案 ID `14X9FoCk1IEVNsUgVYy3y2Ar8faWviWbd`；原 manifest ID `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 原位更新。新 HTML SHA256：`8066e933113b23c9a2e5d1978491a199cdd5609836283f905217fef257fc0543`。
- **下一批原書 p.40 起（PDF 第 72 頁）**：Stage 5 Model Validation 之模型診斷、預測／實際散布圖；以及接續內容，必須全文中英同批處理，確保圖、公式及考題無遺漏。


## 2026-10-30｜第 11 批：Model Validation / Maintenance / §1.3 opening
- 新增私人 HTML `ch01_p040-p042.html`，原書印刷 p.40–42＝第一冊 PDF p.72–74；Drive ID `1Ucb0rFKyUI0vOpW_S6RZlK4V4aDsFaN4`，共 31 組英中段落，累計 **p.3–42、40 頁、415 組**。
- 內容包括 Stage 5 模型驗證：訓練／測試集診斷、兩張 Predicted vs Actual 比較圖（以明確標示的示意點位重建，原 PDF 是精確圖形依據）、系統性高估與低估、baseline model 比較；Stage 6 模型維護：業務問題調整、領域專家、補充資料、模型精進、實地測試、考試提醒；以及 §1.3 與 §1.3.1 的理論導論「模型越複雜，不保證預測越好」。
- 智慧單欄 EN／中切換和單段翻譯不變。新資料儲於 owner-only Drive，公開 GitHub 只有程式碼及維護紀錄；manifest 更新前已備份至私人 _backup，備份 ID `19DC52VYPgB5t_-xbUz1BPi40g2Pm1dv8`。
- 文件完整性仍列 `TRANSLATED-NEEDS-FINAL-PROOF`；未完成實際 iPhone Safari + Google OAuth 端到端驗收。下一批印刷 p.43 起（上冊 PDF p.75）。


## 2026-10-30｜第 12 批：§1.3 Training / Test Error, Underfitting / Overfitting
- 私人 HTML `ch01_p043-p046.html`，Drive File ID `1FiW3KG2dlbMhZLnQolAp17sRCF4cF8aQ`，印刷 p.43–46／PDF p.75–78；**28 組英中單元**，累計 p.3–46、44 頁、443 組、12 批。
- 原書 Figure 1.3.1「訓練／測試誤差」及 Figure 1.3.2「欠擬合／過度擬合／Goldilocks model」直接從原 PDF 裁切、以 WebP 內嵌私人 HTML，非重畫示意點位，保持原有曲線與數據點；搭配完整中文圖說。原文段落、2×2 誤差診斷表、原書例子及註腳 11、12 同批翻譯。
- 說明：僅將原書私有內容儲存在擁有者的 Google Drive，GitHub 公開倉庫僅含閱讀器程式、樣式與進度。沿用智慧單欄 EN／中整頁切換、單段翻譯及位置記憶。英文需持續依原 PDF 最終逐字校稿（`TRANSLATED-NEEDS-FINAL-PROOF`），不能冒稱人工完整校訂或實際 Google OAuth/iPhone Safari 已實測。
- manifest 更新前已在私人 `_backup` 建立副本 `1jeAsS9l7sosDeTIptl0pL2B8e5VKfAti`，原 manifest ID 不變。SHA256 `8c2345b6402dfd3dd9f8dfd02cb0c041a72adef6538b4844eaaf0207527007b8`。
- **提速工作法**：下一批以完整論述單元規劃約 10–15 頁，但以 PDF 密度與圖表完整性調整；批次萃取 PDF 文本、只校核重點圖表、原圖以私有內嵌方式保真、一次 QA、一次更新 Drive + GitHub，不以人工手動分開做每兩頁；不得以加速為由刪節原文或翻譯。
- 下一批 p.47 起，進入偏差－變異數分解公式與 Bias / Variance / irreducible error；圖說、公式、註腳均應核對。


## 2026-10-30｜第 13 批：Bias–Variance Decomposition + Polynomial Simulation（批次處理）
- 已一次製作原書**印刷 p.47–56**（第一冊 PDF p.79–88），拆為兩份新的私人 HTML：
  - `ch01_p047-p052.html`，Drive ID `1mudH3IWqheTTYxyGvYrRQREvlVKNhB_O`；6 頁／45 組。涵蓋預期測試 MSE 的分解式 (1.3.1)、偏差／變異數／不可約誤差、Figure 1.3.3 靶心圖、欠擬合與過度擬合、Exercise 1.3.1 全題與解答、原書腳註 13–17。
  - `ch01_p053-p056.html`，Drive ID `1WcC32Vm7U-zzu0hFNI6tx54Jbqkc31zJ`；4 頁／26 組。涵蓋 §1.3.2 多項式迴歸模擬、0／1／2／4／8 次模型、n＝50、X₀＝0.8、3,000 輪模擬、R 程式碼 CHUNK 1、TASK 1 箱形圖解讀。
- **累計原書 p.3–56，共 54 頁、514 組雙語單元、14 份私人 HTML 檔案**（本次一次發布兩份）。
- 重大圖表與公式不採 OCR 近似重畫，而在 owner-only 私人 HTML 內保留原書影像；**每一頁另設可展開的完整來源頁影像**，方便核對任何未能精確轉錄的文字／上下標／腳註／程式碼。英中閱讀稿需要正式逐段、逐字校對，仍列 `BILINGUAL-DRAFT-NEEDS-SOURCE-PROOF`，不可稱已完成書籍原文精確轉錄。中文以完整、流利、達意之台灣繁體中文為標準。
- 使用者指定的智慧單欄 EN／中整頁切換、單段翻譯及閱讀位置記憶全部保留，無左右或上下對照。站內目錄新增 §1.3.1 decomposition、Exercise 1.3.1、§1.3.2 simulation 入口。
- 本地 Chromium：320／390／768／1130px × 英文／繁中 8/8 無整頁橫向溢出，71 組配對均非空；單段翻譯展開測試通過。**正式 GitHub Pages CDN、真實 Google OAuth 與 iPhone Safari 仍未完成端到端驗收**。
- 更新 manifest `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 前先備份到 `_backup`，備份 Drive ID `1A1I8yj3ETWsTfWTLa9dXAGJCxFXv_aHA`。兩批 SHA-256 分別 `75daa1033b91429185c83788329b8cd0ce65da91eb1ec58cb397cbf98d5a4e74`、`c7adf8b9c345ca64b95c708e4cad17abe8bad3cf23e35cb8ebf51b555e866f07`。
- 下一批：**印刷 p.57 起（第一冊 PDF p.89）**，完成模擬 CHUNK 2、TASK 2、Figure 1.3.4／1.3.5 的原圖、R 輸出數據，再開始 §1.4 Feature Generation and Selection；持續爭取 10–15 頁／批，不能為了速度遺漏任何原意。


## 2026-10-30｜第 14 批：§1.3.2 模擬結果＋§1.4 特徵工程（加大批次）
- 已新建並掛載兩份 owner-only HTML：
  - `ch01_p057-p063.html`：上冊 PDF p.89–95／印刷 p.57–63，47 組雙語研讀單元，Drive ID `1gM2hGKiTc_K1EMNLGKn0Te-_4TA6-maS`；涵蓋原書 R CHUNK 2／3、Figure 1.3.4 模擬預測盒鬚圖、TASK 2、五種多項式的訓練誤差／預期測試誤差／偏差平方／變異數、最小 MSE＝0.25 的理論說明、§1.4 及 §1.4.1 特徵生成、歐氏距離特徵圓形分類案例與原書 CHUNK 4／5。
  - `ch01_p064-p070.html`：上冊 PDF p.96–102／印刷 p.64–70，46 組雙語研讀單元，Drive ID `1SVTB1vmJyYY_MnGM2e_CK1_wnrjeYT0J`；涵蓋 Table 1.1 保險經過期間等六項特徵例子、§1.4.2 特徵選擇、三項類別水準合併策略、2019／2020 PA 考題、Exercise 1.4.1–1.4.3 與解答、維度和資料粒度的辨別。
- **累積原書 p.3–70：68 頁、607 組雙語研讀單元、16 份私人 HTML。** 下一批原書印刷 p.71（上冊 PDF 第 103 頁）開始 §1.5 Review Problems。
- 以上為**雙語研讀草稿**，不是已完成逐字對照的出版級英文轉錄或中文翻譯。尤其原 PDF 的 R 程式碼、數學上下標、圖表和題目敘述可能有 OCR 雜訊，**每一頁均已附原書完整影像**，不得將頁面摘要視為完整轉錄；後續仍需依原頁逐段補足及逐字校稿。源圖與教材僅存於 private Google Drive，公開 GitHub 沒有原文或頁面圖。
- 本地 Chromium 320／390／768／1130px × EN／中 **8/8 全頁無水平溢出**，93 組皆有雙語、14 頁來源圖皆可顯示，測試段落展開翻譯可用；Google OAuth 真實登入、iOS Safari 實機及 GitHub Pages CDN 端對端尚未實測。
- Manifest 原 ID `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 更新前，備份檔 `1CBxJYezTiynX2L-be6tMwQ9xX1wFM3EW` 已保存於私人 `_backup` 並驗證 owner-only。兩份 HTML SHA256：`ed42680268ccd53561a3d77a5c1da105371ec986474c7724e302834d8a070285`、`c884230353d0cf9c7ee49f34ef51a9f5832c6743ce3840342fb3b845ca968743`。


## 2026-10-30｜第 15 批：第一章結束＋第二章數值型 EDA（18 頁）
- **上線原書印刷 p.71–88＝上冊 PDF 物理 p.103–120，新增 144 組英中研讀單元。** 原書 p.3–88 合計 **86 頁、751 組、18 份私人 HTML**。
- 私人 HTML 1：`ch01_p071-p078.html`（80 組），Google Drive ID `1qdtRnFPEg_L4UwJCE6V_G5bPN2ZyBRVR`，主題：§1.5 Review Problems（GOAL 外部平台上的觀念題與整合題使用指引）、Chapter 2 考試大綱、EDA 的兩個目的、摘要統計與圖形優缺點、2024–2025 年 PA 考題摘錄、個人傷害理賠資料字典、CHUNK 1–3、Exercise 2.1.1 法律代理人分組與答案。
- 私人 HTML 2：`ch01_p079-p088.html`（64 組），Google Drive ID `1XnVMLUSgD-lTi3Cg4C09US8IFHMU_DzG`，主題：直方圖 CHUNK 4–5 與 Figure 2.1.1、右偏／左偏／對稱分布及 Figure 2.1.2、離群值處理、MSE/MAE 穩健性、對數／平方根轉換與 Figure 2.1.3、密度圖 Figure 2.1.4、盒鬚圖 Figure 2.1.5、Exercise 2.1.2 與完整答案。
- **來源保真方式**：18 頁均內嵌原書完整頁面影像（私人 Drive），重要圖形另以頁面局部影像呈現，兩種閱讀語言都看得到；R 程式碼另以可閱讀的文字重建，但原始 Rmd 和 PDF 原圖為準。此版仍屬 `BILINGUAL-DRAFT-NEEDS-SOURCE-PROOF`，**不能聲稱英文逐字完整轉錄、每個註腳都已校完或全部中文逐句核證**。外部 GOAL 複習題本身未印在 p.71–72，未憑空補造題目。
- **本地測試**：144/144 英文及繁中均非空；18/18 頁完整原圖、12 處局部圖像；Chromium 320／390／768／1130px × EN／中 8/8 沒有全頁水平溢出，局部展開翻譯可用，展開原書圖像可載入。正式 Google OAuth／GitHub Pages CDN／iPhone Safari 端到端仍待實測。
- **重大 JS 修復**：原有 `reader.js` 的目錄組裝函式重複使用 `const select`，可能造成 SyntaxError，已更名為 `featureSelect` 並通過 JavaScript 語法檢查；Chapter 2 已解除「待上線」標示，改為可點擊章節及 2.1／2.1.1／各圖表與練習入口，維持智慧單欄 EN／中與單段看翻譯。
- Manifest 原 ID `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 更新前，先建立私人 `_backup` 副本 `1FwERGeJB4Lc70iQ4Uh_WmcZueLzkLS8z` 並驗證 owner-only。兩份 HTML SHA256：`0551c0d44e1ca1c584b1095569ae096930c62e11ff5e076aafd1d42d0503f153`、`fd65537d81a0acf82386f3d8bffdd00142ba6b9e7ac60d67263c6eba8c3a6c81`。
- **下一批印刷 p.89 起（上冊 PDF p.121）**：§2.1.2 Categorical Variables，進入頻數表、長條圖及雙變數探索；延續每批約 15–20 頁的目標，但以完整題目、表格、圖說、公式和原文核對為優先。


## 2026-10-30｜第 16 批：Categorical Variables / Bivariate EDA（14 頁）
- 本批推進原書印刷 **p.89–102**（上冊 PDF p.121–134），新增 **87 組英中研讀單元**，累計 **p.3–102 共 100 頁、838 組、20 份私人 HTML**。
- 私人檔 A：`ch02_p089-p092.html`（26 組），Drive ID `1ZtjP_FkAyW0kjx_cuX9XaUE8J_Hwi-RV`，涵蓋 §2.1.2 Categorical Variables、raw vs summarized data、次數與比例表、R CHUNK 9–12、`geom_bar()` 與 `geom_col()` 的用途差異、Figure 2.1.6，以及原書腳註對 `..prop..` 的解釋。
- 私人檔 B：`ch02_p093-p102.html`（61 組），Drive ID `1EMATho6SyW440roXP3xiijVfPEM4m8Py`，涵蓋 §2.2 Bivariate EDA、2.2.1 Numeric×Numeric 的相關係數、正負相關與零相關、Exercise 2.2.1 的 `Y=X²` 零相關但完全依存示例、R CHUNK 13–16、Figure 2.2.1–2.2.2 散布圖及交互作用；2.2.2 Numeric×Categorical 的條件平均、分組盒鬚圖、Exercise 2.2.2 三個完整答案、R CHUNK 17–20、堆疊／並列直方圖。
- **重要數字**：傷害代碼 1／2／3／4／5／6／9 的件數、原始金額與時間相關 r＝0.346114、對數金額與時間相關 r＝0.6070667、有無法律代理人分組均值／中位數等依來源核對。圖形以來源 PDF 的裁切 WebP 私有內嵌，另保留 **14/14 個完整原書頁面影像**。
- **品質範圍與限制**：本批是可閱讀、逐段對應主題的**雙語研讀草稿**，可編輯英文內容係依原文整理與重建，並非原文完整逐字轉錄；不能誤稱已完成所有文字、腳註或 R 程式碼逐字校訂。精確引用仍應以每頁原書完整影像為準；中文採專業而通順的台灣繁體中文，需後續正式逐段精校。原 PDF 未修改。
- 本地 Chromium **320／390／768／1130px × EN／中 8/8** 無全頁橫向溢出，87/87 中英非空、24/24 圖像載入、單段展開翻譯可用。真實 Google OAuth、GitHub Pages CDN 與 iPhone Safari 實機端到端未完成。
- Manifest 在更新前先備份到私人 `_backup`，備份 Drive ID `1BBSz3OImB62IvjExtSbahUvKN_UBMmih`；原 manifest ID `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 原位更新。兩份新 HTML SHA256：`84fee1ab724d70175b37d9e681a6f4f5f69bf6f38b305e3bda545b555eda84a4`、`046911f513b4b58de5089947ebaed24434f605508c647270873c5e001c70c1eb`。
- **下一批 p.103 起（上冊 PDF p.135）**：§2.2.3 Categorical vs Categorical、堆疊／並列／填滿長條圖、圖形設計原則與後續練習。


## 2026-10-30｜第17批：p.103–107
- 新增私人 HTML `ch02_p103-p107.html`，Drive ID `1yWXJZ7GEYmD44x_IPToWhftKWs0p1tr4`，原書 p.103–107（PDF p.135–139），5頁／25組英中研讀單元，累積 **p.3–107、105頁、863組、21份私人HTML**。
- 主題：§2.2.3 類別×類別雙向次數表、堆疊／並列／填滿長條圖、跨類別比例和同類別內比較、圖形設計的視覺元素有效性排序。保留五頁完整原書影像；內容仍為待逐字校訂的雙語研讀稿，精確 R 程式與原圖以 PDF 為準。
- manifest 原 ID 更新前已備份 `1l6NyA12qBIiCA-hU0Avspu5D6RJ4O6Oa`，僅 owner 可存取；下一批 **p.108 起**，繼續圖形設計、§2.3 Review Problems，然後進入 Chapter 3。


## 2026-10-30｜第 18 批：第二章收尾＋第三章線性模型（一次 21 頁）
- **新增原書印刷 p.108–128，上冊 PDF p.140–160，共 21 個實體頁、99 組英中研讀對應單元**。本段包括原書空白頁 p.112、p.114、p.116、學習休息頁 p.113、Part II 扉頁 p.115，均如實保留。累積 **p.3–128、126 頁、962 組雙語研讀單元、23 個私人 HTML**。
- 私有檔案 A：`ch02_ch03_p108-p116.html`，Drive ID `1lLQLr6vCtU5XY8W7767Sndf-IqTc6SNQ`，9 頁／23 組。§2.2 Exercise 2.2.3 比較圓餅圖和長條圖、色彩、避免 chartjunk、3D 長條圖的判讀陷阱、座標軸與標題、§2.3 GOAL 複習題指引、Study Break、Part II 扉頁。
- 私有檔案 B：`ch02_ch03_p117-p128.html`，Drive ID `15rQoQb3mbmliMuMF29SEXyPmqK6nzvGm`，12 頁／76 組。Chapter 3 Linear Models、§3.1 和 §3.1.1 的模型公式 (3.1.1)–(3.1.4)、簡單／多元線性迴歸、OLS、誤差常態性、矩陣設計、§3.1.2 模型評估、RSS／TSS／R²、Exercise 3.1.1、t 與 F 檢定、p 值、AIC (3.1.5)／BIC (3.1.6)、Exercise 3.1.2 五模型計算與選擇，以及模型殘差診斷導論。
- **內容誠實標示**：這次可編輯 EN／繁中是挑選核心原書內容、以流利中文說明的**雙語研讀稿**，**不是原文逐字完整轉錄或出版級全文翻譯**。原書每一頁完整影像均內嵌在 owner-only 私人 HTML 中，對於公式符號、圖表、註腳及未列於文字稿的次要文字必須展開來源頁核對。需要依原始 PDF 逐字補全和終稿校正。尤其不要將研讀摘要的英文當成完全一致的逐字引文。
- **本地 QA**：99/99 配對英中非空、21/21 原書頁面影像可解碼；Chromium 320／390／768／1130px × EN／中 **8/8 整頁無橫向溢出**。已對含數學符號的重要敘述進行來源比對。真實 Google OAuth、iPhone Safari 與正式 Pages CDN 仍**未作完整端到端驗證**。
- Private manifest `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 先備份至 owner-only `_backup`：ID `1PuS9CDdq5QyDTX4AAz-6NnRvSY_DaWX6`，再原位更新。新 HTML SHA256：`b67bdf202aae3579d9abb3fea2e16cfaa60d31b713a68a500e96ef78f482cee3`、`8017342ec11564119198d9566162aaa7b05629e5dc431b39ac4a4283bec3a77c`。
- GitHub 閱讀器新增兩個私人 HTML、第三章可點目錄、§3.1.1／3.1.2 與 AIC/BIC 習題跳轉及數學樣式，智慧單欄 EN／中與逐段翻譯、閱讀位置記憶保持原狀。
- **下一批印刷 p.129 起／PDF p.161 起**，完成殘差診斷各種圖形、實際與預測關係與後續章節；批次擴張但不把摘要冒稱完整翻譯。


## 2026-10-30｜第 19 批：殘差診斷、非線性特徵、Dummy Encoding（17 頁）
- 發布原書印刷 **p.129–145**（上冊 PDF 實體 p.161–177），**91 組中英研讀單元**；全站累積 **p.3–145 共 143 頁、1,053 組、25 份私人 HTML**。
- 私有檔案 A：`ch03_p129-p136.html`（8 頁／42 組），Drive ID `1GVhPejVmtvmkgy8y4oivnD8Rlifo3t1v`，包含標準化殘差、studentized residual 與 leverage、同質變異、Residuals vs Fitted／Figure 3.1.1、Exercise 3.1.3 與 3.1.4 含解答、Normal Q–Q／Figure 3.1.2、§3.1.3 特徵生成與 Figure 3.1.3。
- 私有檔案 B：`ch03_p137-p145.html`（9 頁／49 組），Drive ID `1JMzOUZrvexV3y6j7lPNnq8VACMNQM8gv`，包含多項式迴歸、Exercise 3.1.5 完整 (a)–(c) 問答、Binning 分段常數函數、piecewise linear functions 與 hinge basis／Figure 3.1.4、類別型特徵 binarization、Smoker／Non-smoker／Unknown 虛擬變數、r−1 基準組、係數解讀、Exercise 3.1.6 及 East／South／West 數值答案。
- **翻譯完整度明確界定**：目前提供依原書重編的英文主題研讀稿及流暢繁中對應說明，**不是原文逐字完整轉錄，也不是已經逐句對譯的出版級全文翻譯**。所有 17 頁完整原書影像皆內嵌於 owner-only HTML，逐頁可展開確認精確英文、圖形、註腳、各練習的原始完整選項與數學上下標；這些尚需逐頁與可編輯文字核對補齊。尤其 3.1.3、3.1.4 的完整原始 (A)–(E) 選項目前必須以原頁影像查看，不能冒稱已完整輸入到 EN 段落。
- **本地 QA**：91/91 單元均有 EN 與繁中內容、17/17 個原書影像；測試用 Chromium 320／390／768／1130px × EN／繁中 **8/8 無整頁橫向溢出**。真實 Google OAuth、iPhone Safari、正式 GitHub Pages CDN 端對端仍未驗證。
- 維持公開倉庫僅存閱讀程式與進度資訊、不存教材原文及原圖。私人 manifest ID `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 更新前已於私人 `_backup` 建立 owner-only 備份 `1kWTs78zr4isBxU6FJUnztuaJ8VtMNJwI`。
- 本批 HTML SHA256：`f72c64594baa84894851966b74550b0ab76bfaace0aebfd8197e8ded80a8a429`、`1650bd1b40c434741b1ca76cc54d6155a8cc67a9e2a1200233ac1da96f33e6da`。
- 下一批自**原書 p.146（上冊 PDF p.178）**繼續。先處理 numeric codes 當作 factor、基準組重設，接續 interaction terms 與 Exercise 3.1.7 等題目。後續仍以 15–25 頁批次推進，但必須保留原圖與翻譯精校狀態。


## 2026-10-30｜第 20 批：Interactions、Multicollinearity、AIC Feature Selection（23 頁）
- 新增原書印刷 **p.146–168（上冊 PDF p.178–200）**，共 **23 頁、88 組英中研讀單元**。全站累積 **p.3–168、166 頁、1,141 組雙語研讀單元、27 份私人 HTML**。
- 私人檔 A：`ch03_p146-p157.html`，Drive ID `1n1Wilrw-WnL9co7DgzOTW-gKSRRPVbHs`，**12 頁／47 組**。包含數值代碼是否應轉 factor、weathersit 天氣與曆年編碼、Exercise 3.1.7–3.1.11、數值×數值／數值×類別／類別×類別交互作用、Figure 3.1.5–3.1.6、GPA×性別起薪題、共線性和 rank deficiency。
- 私人檔 B：`ch03_p158-p168.html`，Drive ID `1erL8oDoR-K4Id9uoXzL_LToIyh_Drfny`，**11 頁／41 組**。包含 VIF＝1／(1－R²)、Exercise 3.1.12–3.1.17、best subset／forward／backward stepwise、三位精算師比較 AIC 的全套步驟與結果（向前 Model 13／13 fits；向後 Model 14／15 fits；最佳子集合 Model 10／32 fits），及 §3.1.5 Regularization 開頭。
- **來源與品質區分**：可編輯英文是以原文為基礎整理的英語研讀段落，繁中提供流暢對應解釋，**並非全文逐字完整原文轉錄或逐句精校翻譯**；考題所有原始選項、細節、圖表、註腳與上下標必須依原書影像核對，尤其 Exercise 3.1.9、3.1.13、3.1.17 的細節。每頁均有原書完整 WebP 頁面影像，在 owner-only Drive 內保存；公開 GitHub 未儲存書籍內容。
- **本地 QA**：88/88 組英中非空，23/23 頁原書影像齊全；Chromium 模擬 320／390／768／1130px × EN／繁中 **8/8 無整頁水平溢出**。新閱讀器 JavaScript 語法檢查通過，27 份私人檔案載入清單、目錄錨點、智慧單欄 EN／中與單段翻譯、閱讀位置記憶維持不變。真實 Google OAuth、iPhone Safari 與正式 GitHub Pages CDN 尚未完成端到端測試。
- 更新原 manifest `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 前，已備份至私人 `_backup`，備份 ID `1c-UBNIUewCJIpWG5LEdMhYECsElwCrPC`，確認 owner-only。兩份 HTML SHA256 分別 `728838612ba9ef4a9c656cfe437faa17054b105123861293b1fd221750073179` 與 `3f1980a7095c3b2970bf47144f44c3380ec6ec3d6d5b37c581060328a5de0102`。
- **下一批原書 p.169 起（PDF p.201）**，完成 §3.1.5 regularization 正則化的懲罰式、ridge／lasso／elastic net、λ、交叉驗證與相關考題，並持續按完整小節大批處理。


## 2026-10-30｜第 21 批：Regularization + Advertising R Case Study（22 頁）
- 上線原書印刷 **p.169–190**（上冊實體 PDF p.201–222），新增 **97 組英中研讀段落**，累積 **p.3–190 共 188 頁、1,238 組雙語研讀單元、29 份私人 HTML**。
- 私有檔案 A：`ch03_p169-p176.html`，Drive ID `1WQ_9tW-O7K8vGx5SMO_u_wYXNlyKhzgQ`，8 頁／39 組。§3.1.5 正則化的懲罰最小化 (3.1.9)、Ridge／Lasso／Elastic Net (3.1.10)、α＝0／1、為何不懲罰截距、正則化前的尺度標準化、λ 控制收縮與偏差／變異數權衡、Lasso 精確歸零與特徵選擇、(λ,α) CV 調參、Exercise 3.1.18–3.1.20 題意與分項解答、相對 stepwise 的優缺點。
- 私有檔案 B：`ch03_p177-p190.html`，Drive ID `1CLn25X1-H819dbh-EDNtMnMo8lhoZYyx`，14 頁／58 組。§3.2 Advertising 案例：200 筆觀測、TV／radio／newspaper／sales 變數、CHUNK 1–5 EDA、Task 1、Figure 3.2.1–3.2.3、相關係數矩陣 (sales vs TV 0.78222442、radio 0.57622257、newspaper 0.22829903)、§3.2.2 Task 2、CHUNK 6–11、單變數 TV 模型 `sales-hat=7.03259+0.04754×TV`、`lm()`／`summary()`／`confint()`／`predict()`、TV 斜率 t／F 檢定、R²＝0.6119、TV 信賴區間、TV＝0／100／200／300 之預測值及 radio 迴歸起始輸出。
- **跨頁未完結**：CHUNK 11 的 radio、newspaper 模型完整輸出繼續至原書 p.191；第 22 批必須從此處接續，不可將 p.190 視為 Task 2 已結束。
- **內容真實狀態**：可編輯英文為根據來源整理的研讀文字，中文為對應的流利繁體中文說明，**非原書逐字完整英文轉錄或 100% 全文逐字直譯**。原書 p.169–190 全部 **22/22 頁**清晰影像均內嵌在 owner-only HTML，包含精確公式、原始圖、完整 R 指令、輸出、選項與註腳；所有未逐字轉入的細節須展開來源圖查看，最終逐段補全及校訂仍待執行。
- 本地 QA：97/97 組英文與繁中皆非空，22/22 原書影像；Chromium 320／390／768／1130 px × EN／繁中共 **8/8 無整頁水平溢出**，原圖區塊可展開。實際 Google OAuth、GitHub Pages 正式 CDN 及 iPhone Safari 實機端到端尚未驗證。
- Manifest `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 原位更新前先於私人 `_backup` 建立 `1uBmC_2aDqIQPR_ySFFZDo-HYFLZZq70e` 並驗證 owner-only；原 manifest ID、名稱與位置不變。新 HTML SHA-256：`c477a75ac95f0f267a2517e178d893c81b9b89c46e4c1798bdbbca90e1981476`、`5eba3f1662c8f4c0b05f8e62a40a7ebfc14697efe5ffae4ecc44073433fb0bd0`。
- 網站 `reader.js` 已加入兩份新私人教材、正則化、CV、Advertising Task 1、TV 迴歸、R² 與 predict() 目錄錨點；`reader.js?v=20261030-b21` 迫使閱讀器重新載入，智慧單欄語言切換與 `smart.js` 保留。
- **下一批從印刷 p.191／PDF 實體 p.223** 開始，完成 Advertising 案例 CHUNK 11 後續、§3.2.3 Multiple Linear Regression 及後續實際練習，持續以完整小節大量推進。


## 2026-10-30｜iPhone Safari 載入卡住修復 + 第22批正式接入
- 使用者實機截圖顯示「正在從私人 Google Drive 載入中英教材…」持續未消失。舊版 `reader.js` 先依序下載 **29** 份私人 HTML，全部成功才首次渲染；任何慢速請求或單一錯誤都可能導致整個閱讀介面無法開啟。這是程式中確定存在的**全有或全無載入設計缺陷**，但尚未有 Safari Network log 能斷言當次停滯的唯一直接原因。
- 已在原 `reader.js` **原檔修復**：一次只從私人 Google Drive 下載**一份選定區間**，支援上一段／下一段／選擇印刷頁碼、重新載入、單次 18 秒逾時和暫時錯誤最多重試三次、401／403 分類錯誤、載入失敗保留已讀段落，不再一次下載所有檔案。現有 `smart.js` 的整頁 EN／中切換、逐段翻譯及閱讀位置記憶維持不變；CSS 修正 iPhone 小螢幕控制列橫向溢出。入口 cache busting：`reader.js?v=20261030-loadfix24`、`reader.css?v=20261030-loadfix25`。
- **讀取模擬驗證**：對實際新版 `reader.js` 建立 DOM 與 Drive 回應替身；初次開啟只發出 1 次資料請求並顯示 p.3–4；選至最後一段僅多發出 1 次資料請求且顯示 p.200–209；模擬 403 時原有內容未消失，錯誤訊息可讀。JavaScript `new Function` 語法通過。**尚未取得使用者真實 Google OAuth、iPhone Safari 與 GitHub Pages CDN 的端到端通過證據**，不能宣稱現場驗證完成。
- **第22批正式接入**：原書 p.191–209（上冊 PDF p.223–241），2 份私人 HTML：`ch03_p191-p199.html` Drive ID `184Xx3PQHFcwd3DhMb2jk3_o5PuMH_bHy`（9頁／43組）；`ch03_p200-p209.html` Drive ID `1hOkz2ggsaZkkY2JYBG9NcaY841Va5Ylo`（10頁／48組）。兩份均 owner-only，19/19 原頁影像和 91/91 英中研讀組；Advertising 案例的 radio/newspaper 簡單迴歸、multiple regression、partial correlation、TV×radio 交互作用、三種預算策略、TV² 非線性、train/test RMSE（Model 4 最低 0.547343）。
- **累計 p.3–209：207 頁、1,329 組、31 份私有 HTML。** 原私人 manifest `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 修改前，於同層 `_backup` 建立含時間戳與原因的備份 `1jVombVkapUEVKjNEDbuDdUreJ6ZUsXBE` 並確認 owner-only；後在**原 File ID 原位更新**，名稱 `manifest.json`、位置及權限均維持。
- **重要翻譯狀態**：可編輯英文及中文仍為研究用途的雙語研讀稿，**不等於原書全文逐字完整轉錄或 100% 直譯**。19 頁新內容均保存完整來源圖像供核對；後續須補齊所有原文／練習選項／圖說並作精校，不得將頁面涵蓋量等同於已完成精校的頁數。
- 下一批原書 **p.210 起**（上冊 PDF p.242）進入 §3.3 Feature Selection and Regularization；除內容推進之外，務必優先檢查實機首次 Google 登入、跨頁切換及權限錯誤畫面。


## 2026-10-31｜第 23 批：Credit 案例 Task 1–6（24 頁）
- **本批原書印刷 p.210–233（上冊 PDF p.242–265），新增 24 頁／126 組英中研讀段落；累積 p.3–233 共 231 頁、1,455 組、35 份私人 HTML。**
- 本次刻意分成 **4 份，每份 6 頁**，配合已修復的 Safari「每次只載入一份教材」機制，避免一次下載大量資料。私人 Google Drive 新檔案：
  - `ch03_p210-p215.html`，ID `1TINrEVWXFOwairKNdK8T0jtJESWaT_Vs`，34 組、6 個完整來源頁影像。§3.3 導論、400 筆 Credit 資料、11 變數、Table 3.1 字典、TASK 1 Ethnicity/Gender 公平性、TASK 2 Balance 右偏與 90 筆零值、Exercise 3.3.1 平方根轉換、相關係數矩陣。
  - `ch03_p216-p221.html`，ID `1NCmolCVFdJ5PiP-QMozRqp_crJoV6UsU`，28 組、6 原頁影像。Limit–Rating 相關 0.9969、刪除 Limit、Figure 3.3.2–3.3.4、Income/Rating 散布圖、TASK 3 Student 分組盒鬚圖；學生平均 Balance 876.8250、非學生 480.3694。
  - `ch03_p222-p227.html`，ID `17bEmLWh8vVaLs_zGYWggddanJqQJrJkQ`，32 組、6 原頁影像。TASK 4 Age 與 Student、Income × Student 交互作用圖；§3.3.2、TASK 5 分層切分 p=0.75、CHUNK 10 完整回歸、基準組與迴歸係數解讀、CHUNK 11 透過 relevel() 將最多人水準設基準。
  - `ch03_p228-p233.html`，ID `1kmBk_-tb1UTTHxlbCqc7iqSWdWQjnY4l`，32 組、6 原頁影像。基準組改變解釋與 p 值；TASK 6 類別型特徵二元編碼優缺點、caret::dummyVars(fullRank=TRUE/FALSE)、CHUNK 13–15 合併／移除舊 factor、使用相同 training/test partition 重新配適。
- **數值與原圖交叉確認**：Balance 平均 520.01／中位 459.50、90 筆零餘額；Balance 與 Limit 0.8617、與 Rating 0.8636、與 Income 0.4637；Limit 與 Rating 0.9969；Student Yes/No 的組平均 876.8250／480.3694；訓練／測試平均 520.4352／518.7374；完整模型 R² ≈0.952。
- **品質與原文完整性需嚴格區分**：此次可編輯英文和流暢台灣繁中是依原書整理的**雙語研讀段落，不是 100% 逐字英文轉錄與逐句全譯**。每一頁完整原書影像都在 owner-only HTML 中可展開；另外有 10 個原書表格／圖像局部直接裁切。原書的 R 指令、選項、完整輸出和小字仍需逐頁比對及補充，絕對不能以頁碼覆蓋率冒稱翻譯校訂率。
- **本地 QA**：126/126 組中英皆非空，24/24 完整原頁及 10/10 局部原圖均內嵌為 WebP。Chromium 在 320／390／768／1130 px × 英文／繁中 **8/8 無水平溢出**，原頁展開後影像可載入。**真實 iPhone Safari OAuth／正式 GitHub Pages CDN 端到端仍未驗證**。
- 更新原 manifest `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 之前，已於同層 `_backup` 備份 `1MDUd4cKKULBJlockMRhCAlIHZk64hhbM`，含台北時間及 p210–233 原因，確認 owner-only；後原位更新原 File ID、名稱、所在資料夾。
- GitHub `reader.js` 新增 4 份私有檔案、8 個 §3.3 主題／Task 目錄錨點；`reader.css` 增加完整原書影像與草稿提醒樣式；入口 `reader.js?v=20261031-b23`、`reader.css?v=20261031-b23`。**保留單份載入與 EN／中智慧閱讀，不公開原書或譯文。**
- **下一批 p.234 起（上冊 PDF p.266）**：完整執行 TASK 7 Stepwise Selection，接續模型診斷與正則化；勿將原書中途跨頁練習拆斷。


## 2026-10-31｜第24批：Stepwise Selection / Model Validation / glmnet（24頁）
- **原書印刷 p.234–257，上冊 PDF 實體 p.266–289，共24頁、133組雙語研讀段落**。累積 **p.3–257＝255頁、1,588組、39份 owner-only 私人 HTML**。依 iPhone 單區間讀取機制拆為四份六頁檔案：
  - `ch03_p234-p239.html`（34組），Drive ID `1VPK6XNv4Q4EcXXXZ2dL5Vq1NbjqRxFhb`。TASK 7、AIC/BIC 選擇理由、forward/backward 的差異、MASS::stepAIC()、CHUNK 16 向後 AIC、最終六項變數、R² 0.9517。
  - `ch03_p240-p245.html`（32組），Drive ID `1lL2uBFmAdUlMRmauiL-_1wpu-uCzvZYA`。Exercise 3.3.2 非明確虛擬變數編碼下的整組 Ethnicity 刪除、CHUNK 18 向前 BIC（三項變數 Rating/Income/Student.Yes）、TASK 8 測試 RMSE 四模型 453.3665／105.0656／104.2375／102.6785、Figure 3.3.6 四格模型診斷圖。
  - `ch03_p246-p251.html`（34組），Drive ID `131FkPJ-pzjLfUfYL--dLy60YJOoUwYYm`。Residuals vs Fitted 的 U 型、Q–Q 兩端偏離、§3.3.4 正則化、TASK 9、model.matrix()/glmnet()、alpha 0.5 下 lambda 0/10/100/500/1000 的係數路徑、TASK 10。
  - `ch03_p252-p257.html`（33組），Drive ID `1cl3ZGvfIx4VsIgc_XsqEASEDtJgL9jpU`。CHUNK 23–25 的 cv.glmnet、Figure 3.3.7、lambda.min=0.8885539（RMSE 103.9201；11特徵）與 lambda.1se=7.550517（RMSE 102.8241；8特徵），最後推薦三特徵 forward-BIC（102.6785）、alpha 網格調參與 §3.4 Review Problems。
- **品質標示**：編輯後可搜尋的英文／繁中是原書導向的**雙語研讀稿**，並非原書完整逐字英文轉錄或 100% 逐句直譯。題目原始全文、註腳、輸出表格、係數、R 指令與完整圖形，以私人 HTML 內附 **24/24 原書頁面影像**及 **15 處原圖局部裁切**為最終核對依據。正式逐句全譯及精校仍待執行，不能以已涵蓋頁碼替代精校完成率。
- 本地 QA：133/133 組有非空英文與繁體中文、24/24 個來源頁影像；Chromium 模擬 320／390／768／1130px × EN／中 **8/8 無水平溢出**，來源圖展開載入成功。對新 `reader.js` 執行 JavaScript 語法檢查；維持一份私人 HTML 單次載入、切換頁碼、重試及 SMART EN／中切換。正式 GitHub Pages CDN／真實 Google OAuth／iPhone Safari 端到端**仍未實測**。
- 原 manifest `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 修改前先備份至原資料夾下的私人 `_backup`：`1d7iHEgHxofKCfRL0xftwC0grF5xlmGgJ`，備份檔名含台灣時間與 p234–257 原因；確認 only-owner 後再**原位更新**，保留原 ID、`manifest.json` 名稱及資料夾。
- **下一批**：原書 p.258–260 依原頁保留（空白頁及 Study Break），p.261 起進入 **Chapter 4 Generalized Linear Models（GLM）**。第 24 批已完成第三章 §3.4 頁面，外部 GOAL 題庫的題目**沒有在本頁印出**，不自行杜撰。


## 2026-10-31｜目錄缺章節疑問稽核及 iPhone TOC 修復
- 使用者的 iPhone Safari 截圖顯示第 1–3 章可點、4–8 章及附錄灰色「待上線」，接著才出現第 1 章 §1.1、§1.2，造成**已建立小節全部堆在附錄後面**、章節層級不清的誤解。經檢查，舊 `reader.js` 的確是「先 append 全部 10 個章節，然後逐一 append 所有小節」的扁平清單。
- 與 owner-only 原版 `manifest.json` 對照：39 個私人 HTML 區間從原書 **p.3 至 p.257**，區間連續無漏頁，總計 **1,588 組英中研讀段落**；原書 p.258–260 及第 4 章 GLM（p.261 起）**尚未製作**，第 5–8 章／附錄亦尚未製作。不可把尚未開始的章節描述為網站遺失檔案，也不可把已有頁碼等同於已完成逐字全文直譯。
- **來源錨點實查**：從已上線閱讀器擷取 106 個小節／練習 `href="#..."`，以其目錄印刷頁碼對應到 owner-only Google Drive 原始 HTML，逐項比對 HTML `id`。**106／106 個小節目標皆實際存在，未見斷鏈**。另核對章 1 的 `#print-p3`、章 2 的 `#ch2`、章 3 的 `#ch3` 及過場頁 `#print-p112` 均存在。
- **正式程式已修正**：第 1–3 章的原有小節連結按印刷頁碼移入各自的可收合 `details` 群組，標題中文優先、標示研讀稿區間。只有目前閱讀的章節預設展開。第 4–8 章及附錄統一收在預設折疊、明確標示「尚未製作」的區域，不提供假連結。增加 p.112–116 的原書留白／Study Break／Part II 過場入口；所有舊 106 個錨點仍保留。
- **Deep link 修補**：建立 `ANCHOR_PRINT_PAGE`（106 組公開錨點與印刷頁碼）映射，直接開啟例如 `#b24-p252-u1` 時先正確選中 p.252–257 私人檔，而不是使用上次儲存的其他區間。
- **本地單元模擬**：JavaScript 語法通過；首次載入一份私人教材、深連結進入第 39 份檔案（p.252–257）、依目前頁碼展開對應章節、未製作清單維持折疊；110 個章節入口／過場／小節連結全數納入正確分組，無遺留的未分類項。既有單檔載入和智慧單欄 EN／中、逐段翻譯保留。
- 入口快取版本：`reader.js?v=20261031-toc2`、`reader.css?v=20261031-toc2`。原書及譯文只在私人 Drive，公開 GitHub 僅有 UI、公開目錄與開發紀錄。**真實 iPhone Safari Google OAuth 與正式 Pages CDN 的端到端測試尚未完成**，不得將 GitHub commit 成功等同於實機驗收。


## 2026-10-31｜第25–26批：Chapter 4 GLM（印刷 p.261–274）
- 本輪新增 **14 頁、73 組英中單元**，涵蓋 Chapter 4 開頭至 §4.1 GLM 係數解讀。原書印刷 p.258–260 仍保留空白頁／Study Break，不將其誤算為教材內容。
- 私人 Drive 新增兩份 owner-only HTML（均位於 `ACTEX_PA14_HTML`，完整來源頁影像直接嵌入）：
  - `ch04_p261-p266.html`，ID `1Ggnk7kinTBActg_8q6qJUY5QLbCzIquw`：6 頁、35 組。含 syllabus／learning outcomes、GLM 定義、指數族、link function、GLM 與 log-transformed linear model 的差異、目標分配選擇、Gamma／Inverse Gaussian。
  - `ch04_p267-p274.html`，ID `1IbZ5hmwBLoXZAzyNaXMlnN_JgU7JmMdn`：8 頁、40 組。含 binary／count／aggregate targets、Poisson／quasi-Poisson／Tweedie、Exercise 4.1.1–4.1.4、log／logit links、Table 4.1、p.268 Tweedie 註腳、p.270 Figure 4.1.2 圖說、numeric／dummy predictor 係數解讀。
- **累計：41 份私人 HTML、1,661 組雙語研讀單元；印刷頁碼 p.3–257 與 p.261–274。** 原書 p.258–260 是保留的 Study Break／過場。
- 修改原 manifest `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 前，先於同層 `_backup` 建立時間及原因備份 `1-U80dm7P-JQJogX3GLgLlQ2-RB034V6Z`，並確認 owner-only；之後以原 File ID 原位更新，名稱、父資料夾及權限均未改變。
- GitHub reader 已接入兩個 Drive HTML ID、Chapter 4 深連結錨點及可收合目錄；Chapter 4 顯示 p.261–274，第 5–8 章及附錄仍明確標示尚未製作。JS 語法編譯通過。CSS 已補 Table 4.1 的窄螢幕橫向捲動樣式；入口快取版本更新為 `reader.js?v=20261031-glmfix1`、`reader.css?v=20261031-b26`。
- **品質標示**：新增頁面已逐頁轉錄英文並製作繁中對譯，且保留 14/14 原書頁面影像；但仍是待精校草稿，特別需核對數學符號、公式、表格跨列、註腳及練習數值。不能把頁面涵蓋量等同於最終翻譯校訂完成率。
- **下一批從上冊 PDF 實體 p.307／印刷 p.275 開始**；延續 logit link、GLM 係數、offsets／weights，避免跨頁習題被拆開。真實 iPhone Safari Google OAuth 與正式 GitHub Pages CDN 端到端測試仍未驗收。


## 2026-10-31｜補齊 Chapter 3／4 之間的 p.258–260 過場
- 新增 `ch03_p258-p260.html`，Drive ID `1ITFFOsOaG1eGxpX0exPVfUsfHMjZT8aW`，放在原 owner-only 資料夾。p.258、p.260 的空白頁及 p.259 的 Study Break 原圖共 3 頁均保留；Study Break 英文文字另附繁中翻譯 1 組。
- reader.js 的 PARTS 順序已改為 p.252–257 → p.258–260 → p.261–266 → p.267–274；Chapter 3 目錄包含過場連結，並在 p.258–260 時保持 Chapter 3 群組展開。深連結 `#b25-study-break` 可直接開啟對應區間。
- 原 manifest 再次修改前，已於同層 `_backup` 備份 `manifest_20261031_1535_before_transition_pages_258-260.json`，ID `1OsMgOg7oYpFuqgDrdHyBq4j8IzmY6-gq`，確認 owner-only；原 manifest ID `1MV4Pfv-CXUr1MR4HG3Yn6QK51IQg9fqN` 再次原位更新。
- **目前累計 42 份私人 HTML／1,662 組雙語單元／印刷 p.3–274 完整連續涵蓋。** p.258–260 不再是頁碼缺口。
- reader.js 語法檢查通過；公開入口的 reader.js cache-busting 更新為 `20261031-transition258`。真實 iPhone Safari Google OAuth 與正式 Pages CDN 端到端仍未驗收。


## 2026-10-31｜Study Break 與 GLM 小字補齊
- 依 p.259 原圖補入全部可見文字：Study Break 標題、投稿提示、自我反思說明、Normal／洗衣機雙關句，以及 ACTEX Learning 標語。該頁共 **5 組**英中單元，3 張原頁影像保留。
- 依 p.268 原圖補入 Tweedie 的兩則腳註；依 p.270 原圖補入 odds 尺度說明及 Figure 4.1.2 圖說。修正 Exercise 4.1.3 的 β₀ = 5、β₁ = −0.65 及答案 5.7546；移除誤提前置於 p.274 的後頁提醒。
- 更新既有 HTML 前，先備份 `ch04_p267-p274.html`（ID `1J27E0f7JHrCm7SvV9FHaVRDrj3A4zLLC`）及 `ch03_p258-p260.html`（ID `1M9OTz3FxsY9ZvqGz16wFQDz6Gt_c8v1b`）至同層 `_backup`，再以原 File ID 原位更新；兩份教材仍 owner-only。
- 更新 manifest 前另備份 `manifest.json` 至 `_backup`：`19BLpzNiQQJAu7Y9jjongBXazPdv7rrPh`，確認 owner-only，再原位更新原 manifest ID。
- 最新累計 **42 份私人 HTML／1,668 組雙語單元／p.3–274 連續涵蓋**。新增腳註與圖說已納入 anchor map，reader.js 語法編譯通過；快取版本 `reader.js?v=20261031-glmfix1`。正式 iPhone Safari OAuth E2E 仍待實測。


## 2026-10-31｜第 27 批：Chapter 4 p.275–280
- 新增私人 HTML `ch04_p275-p280.html`，Drive ID `1cP7IIQIq6aQKGruLymWl1Vvt857Fc4lE`；原書印刷 p.275–280＝上冊 PDF p.307–312，共 6 頁、42 組英中研讀單元。
- 涵蓋 logit link、含交互作用 GLM 係數解讀、weights、分組保險資料、offsets、exposure、Exercise 4.1.5–4.1.7、weights vs offsets，以及 Poisson log-link 下兩種模型等價的特殊情況。每頁均內嵌原書完整頁面影像供逐項校對。
- `reader.js` 已接入新私人 HTML 與 p.275–280 目錄錨點；章節進度延伸至 p.280。智慧單欄 EN／中、單段展開與按需載入架構不變。
- 本批英文轉錄與繁中對譯為研讀草稿，仍需公式、數字、表格與文字逐頁人工校訂；不可視為最終逐字定稿。下一批從原書 p.281（上冊 PDF p.313）開始，進入 §4.1.3 Fitting and Assessing the Performance of a GLM。
