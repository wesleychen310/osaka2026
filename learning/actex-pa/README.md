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
- Chapter 1–2 印刷 p.3–102 已製成雙語研讀稿 838/838 單元，儲存於私人 Drive；仍列 `TRANSLATED / NEEDS_FINAL_PROOF`，不可冒稱全文人工逐字或真實 iPhone Safari E2E 已驗收。
- 下一批從上冊 PDF p.135（原書印刷 p.103）接續，進入 §2.2.3 Categorical vs Categorical 及資料視覺化原則。禁止遺漏原文、圖表、數學、例題、習題、解答及其繁中翻譯。
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
