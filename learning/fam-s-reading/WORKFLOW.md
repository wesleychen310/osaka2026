# ASM FAM-S 製作與驗收 SOP

版本：2026-10-11。專案入口、技術結構、當前實際數量與版本唯一來源：[README.md](README.md)。本文件不維護另一套數量。Lesson11目前DRAFT，後續課僅可沿用結構，不能沿用未通過的驗收結論。

## 每課固定產物

公開：`lessonN/index.html`登入殼、共用`reader.css`／`reader.js`、README/SOP與不含教材的QA摘要。

私人：原位HTML、來源頁碼清單、逐頁／逐式差異表、LaTeX清單、Figure裁圖、表格清單、逐題驗算程式與JSON、完整QA、發版回讀SHA256、備份記錄。所有原題、翻譯與完整解答均不得放公開repo。

## 12步執行流程

| 步驟 | 操作檔案／共用元件 | 常見錯誤 | 驗收方法 | 結果位置 |
|---|---|---|---|---|
| 1 找到原書Lesson | 完整ASM PDF、原書拆分PDF、既有私人HTML；先讀README | 只取正文，漏末尾解答／Quiz | 視覺檢查課首、末題、末解答、下一課起點 | 私人source-map及QA |
| 2 確認頁碼與備份 | PDF頁腳；原Drive檔與_backup；Git起始commit | 以舊範圍當真、混0/1起算；改完才備份 | 每頁印刷／PDF頁對照；備份bytes、parent、owner-only核實 | 私人頁碼表、備份ID／時間／原因；README摘要 |
| 3 擷取校對英文 | 私人HTML的pair/en；OCR只當助手 | 摘要取代原句、跨頁漏句、漏條件／選項、誤把原答案洩露在題目 | 逐頁比原PDF視覺；逐行差異表，涵蓋heading、note、question、solution | 私人fidelity-ledger；HTML來源頁標記 |
| 4 數學轉LaTeX | data-tex；latex2mathml生成math；data-copy | Python/JS反斜線跳脫、貨幣$與公式混淆、漏根號／負號／範圍、只改MathML | 每式LaTeX↔原圖↔MathML三方校對；XML／指令檢查；保留字串清單 | 私人formula-manifest及逐式QA |
| 5 圖表 | HTML table、tblscroll、figure、原PDF局部裁圖；reader.css/dialog | 裁掉軸、用OCR數字、整頁截圖代正文、重複表計成不同原圖 | 原欄列／表頭／數值／註記逐格比；看裁圖四邊；解碼及放大測試 | 私人assets與table/figure-ledger；私人HTML嵌圖 |
| 6 繁中 | 每pair/zh，lang=zh-Hant-TW | 簡體、漏段、perloss/perpayment互換、把大於譯為至少 | 逐段回譯含義；專門檢查conditional、ordinary、franchise、meanexcess、截斷／設限 | 私人translation-ledger；原位HTML |
| 7 逐題Solution | details/summary、原書solution、teaching-supplement、calc-check | 複製舊數字、混合分配直接平均條件均值、提前顯答案、靜默改原書 | 每題先符號後代入、獨立積分／離散／根求解；有第二方法時交叉比；原結果／驗算／差異分列 | 私人verify_math.py、math-verification.json及QA |
| 8 套共用閱讀器 | lessonN登入殼；../reader.css/js?v=版本；pair、data-mode、唯一ID | 每課複製CSS、相對路徑以Drive預覽當基準、ID碰撞、舊bookmark失效 | 靜態查ID／hash／模式控制／預設details；Node語法；本機HTML載入共用檔案 | 私人static-qa；公開程式commit |
| 9 三模式與操作 | reader.js，localStorage；CSS grid及局部overflow | 手機改上下欄、side隱藏英文、用overflowclip遮掉問題 | 下方12組全跑；模式保存、長式、Table、圖、題解、clipboard、放大、搜尋、重新整理 | 私人browser-local及browser-production分開 |
| 10 原書完整性 | 來源清單與全頁PDF、數學／翻譯／題解ledger | 元素數量當完整證明、轉換成功當正確、漏原題選項 | 每頁每項簽核；所有未通過項寫頁碼／原因／修正；對照正式門檻 | 私人完整QA；公開僅摘要 |
| 11 備份後原位發布 | 確認已有舊版backup；files.update原ID；Git commit/ref及Pages | 新建HTML換ID、放開權限、只有repo提交沒部署；readback未確認 | 發布前清點；原parent/name/permissions保持；重新fetch bytes相等及SHA；正式網址HTTP與UI | 私人publication-qa；README changelog |
| 12 更新交接 | README現況／WORKFLOW步驟／私人QA／公開摘要 | 數量不同、舊通過結果留著、用漂亮版面標COMPLETE | 同一manifest產生數量；所有links可用；備份／commit／版本／未決問題明列 | GitHub文件commit、私人交接ZIP及QA |

此順序不授權製作其他課。任務已授權原位發布時直接執行；不額外創造核准流程。若缺授權，只中斷依賴該授權的測試，先保存全部已完成工作。

## 私人HTML與公式規約

1. en/zh直接子欄，段落一對一，英文原書與中文均可選字／搜尋。
2. 公式以LaTeX字串為唯一編輯來源，重新生成MathML；上下標、分數、根號、分段、條件機率、積分、括號逐項核對。程式成功不等於原書正確。
3. 公式／表格有自己捲動容器；整頁不可溢出或剪裁。320px仍左右雙欄。
4. Figure只使用局部原裁圖；原圖與完整教材維持私人。保留original caption；補充中文圖說另標明。
5. 每題有`exercise-N-i`，每解答`solution-N-i`。原書解答與教學補充分區；預設closed。不讀答案也能讀完題幹與選項。
6. 逐鍵操作寫明計算機模式、負號鍵、指數／根號範圍、查表方式。TI-30XB不能直接假設有normalCDF/invNorm。數值重算與實體按鍵驗收分開。

## 瀏覽器矩陣：每一版本重新跑

| 寬度 | 全英文 | 全中文 | 左右對照 |
|---:|---|---|---|
| 320px | 記錄結果／證據 | 記錄結果／證據 | 記錄結果／證據 |
| 390px | 同上 | 同上 | 同上 |
| 768px | 同上 | 同上 | 同上 |
| 1130px | 同上 | 同上 | 同上 |

每格記錄時間、瀏覽器與版本、viewport、content-version及SHA、主頁scrollWidth/clientWidth、雙欄computed grid、最長公式、Table11.1、原圖、長題幹、五選項與解答展開的實際畫面。CSS有grid不等於實測PASS。

另外逐項測：

- 點三模式，再重新整理與改尺寸；按鈕aria-pressed、正文語言、localStorage一致。
- `#exercises`未登入直接開 → Google登入 → 原錨點；重整、既有權杖、重新授權及切帳號分開記。
- 題目／例題／Quiz／solution直接hash可達，所有祖先details展開，導覽不遮住目標；搜尋後深層連結能解除篩選。
- 未展開解答不顯答案；展開、再收合；37題各五選項，非選擇題不造選項。
- LaTeX按鈕與行內鍵盤複製，實際讀剪貼簿核對原字串；失敗有通知。
- 圖無破圖、原圖比例／標籤完整、dialog可放大／捲動／關閉；表格局部滑動。
- iPhone Safari、iPad Safari、Mac Safari設備／OS／版本另記。桌面Chromium縮成390px不能稱iPhone實機。

本機與正式網站結果分兩份。本機瀏覽器不存在或工具無resize能力時寫BLOCKED，不能承接舊紀錄或假造12組結果。恢復有可用瀏覽器後接續同版本，不重新製作教材。

## 第二次複核新增的必要檢查

- 全部原書配分／引用／表格貨幣符號也列入來源台帳；題幹存在不能代表資料完整。
- 檢查解答符號公式與數值代入兩者，不能省掉原書第一個符號式。LaTeX prime必須上標；Python字串的反斜線警告必須排除。
- 英文文字節點掃描中文殘留，英文題意判讀和預期畫面需實際翻譯；舊補充的繁中摘要需補成完整對應。
- 按顯示的計算機步驟解析函數自動括號、兩次enter的中間值及數字運算，與獨立模型結果比對；此檢查仍不能取代實體TI按鍵驗收。
- 修正純文字公式後重新生成公式清單與全量結構QA；公式實例增加不代表原書新增內容。重新計數、備份、原位更新、回讀，並保留本輪完整台帳。

## COMPLETE 正式清單

所有勾選都需指向本版本私人QA證據；未勾選需列印刷頁／PDF頁、原因與修正建議。

- [ ] 原書全部正文完整
- [ ] 英文逐字核對原書
- [ ] 繁中完整且逐段忠實
- [ ] 所有數學公式有正確LaTeX原始碼
- [ ] 所有公式已核對原書
- [ ] 全部Figure完整
- [ ] 全部Table完整
- [ ] Example11A–11K完整
- [ ] Quiz11-1完整
- [ ] Exercises11.1–11.45完整
- [ ] 每題原書選項完整
- [ ] 每題Solution與教學推導完整
- [ ] 數值結果重新驗算
- [ ] 三種閱讀模式正常
- [ ] iPhone直式左右雙欄正常
- [ ] 所有章節與解答連結正常
- [ ] 私人存取及原網址正常
- [ ] 正式發布成功
- [ ] README已建立並更新
- [ ] WORKFLOW已更新
- [ ] 完整QA紀錄已保存

這是每課空白門檻；Lesson11實際狀態在私人QA與[公開摘要](QA_SUMMARY.md)，不能把本清單當成已通過。

## 原位更新與還原

原Drive HTML在相同parent下的_backup複製舊bytes；名稱含原檔名、UTC或明確時區時間、原因。核對owner-only後才更新原fileId。Git先保存起始commit，變更只列必要paths；更新ref用expected_sha、force=false保護他人變更。更新後重新fetch原Drive文件、比較bytes／SHA及parent/name/permissions；正式Pages再查新版CSS/JS/登入殼。私人檔bytes與公開程式有獨立版本，兩者都要記。

還原：把backup内容覆回原Drive ID；Git使用可追溯revert commit。不要換ID、改網址或公開教材。

## 接續入口

其他Work先依[README末尾啟動指令](README.md#g-新-work-啟動指令)，讀私人QA的未決列表，再開始指定Lesson。禁止複製舊的「完成數量／12組通過」；每課／每版本自行清點及實測。

## ISLP 式按需解說卡（Lesson 11 既有實作，供後續指定 Lesson 複用）

- 原書正文、雙語 `.pair`、`data-tex`/MathML、圖表、Example/Exercise/Quiz 及原書解答屬**不可變的來源層**；補充教學獨立放在私人 HTML，使用 `<details class="fam-tutor-note" data-editorial="supplement-not-textbook">` 和原生 `<summary>`，預設收合。不要將補充文字混進英文原文、來源翻譯或題目答案。
- 仿照 ISLP ATPA-prereq 的『再解說一次』互動卡：只針對真的有教學價值的段落插入，包含「① 核心概念／② 精算例子／③ FAM 題意判讀／考場提醒」；數值題若適用，明列 TI-30XB MultiView 按鍵、負號與括號陷阱。補充以中文為主，保留關鍵 English wording。
- 將卡片放在關聯 `.pair.prose` 之後、或 Example 結束／Exercise 題幹結束後；**不要**嵌入 bilingual `.pair` 或覆蓋原書解答 `<details>`。樣式 mobile-first、至少 44px 可觸控、三模式均可用、未展開不占閱讀高度。應明確顯示「編者補充教學」，避免混淆原書與推論。
- 發布前從 DOM 比對補充前後所有原 `.pair` 外語段落、`data-tex`+MathML、原題幹選項、原書解答文字，均須 byte-normalized/DOM 相等；原本完整靜態 QA 再跑。現有 v1 26 張卡是 Lesson 11 示例，不應機械地每段加按鈕。
- 瀏覽器局部操作驗收可用 Chromium `page.set_content`，再注入**現行正式的** `reader.css`/`reader.js`，檢查開關與各模式；必須與正式 Google OAuth／GitHub Pages 載入及 Safari 實機驗收分開報告。新增卡片不表示整課變 COMPLETE。
- 原位修改 Drive 前，一律先對**當時最新版**建新的 owner-only `_backup`，確認大小／parent／權限，再使用 file_uri 覆寫原 fileId；重讀比對 SHA。不要將私人 HTML、受著作權保護的段落或原始書本提交到公開 GitHub。

## Lesson 12: Source-facsimile fallback for degraded math OCR

For scanned mathematical textbooks, verify the original PDF page range and printed page numbers. When math OCR is corrupt, keep source-page images within the **owner-only Drive HTML**, behind native expandable details and an image zoom affordance. Keep the imperfect OCR in a distinctly labeled supplementary search panel. Transcribe source formulas and translated paragraphs separately, without silently presenting OCR or editorial summaries as verified original quotes.

For problem work, distinguish readable English problem summaries, Traditional Chinese actuarial interpretation, and independent worked solutions from a complete original textbook transcription. Each problem needs a direct link to the authoritative scan. Prefer 1.5x raster WebP to control iPhone payload size; never upload the copyrighted page images to public GitHub. ISLP-style tutoring cards must remain separate, collapsible, and work in all three language modes. Re-run source checks, 320/390/768/1130 Chromium×three modes, Google private OAuth, Safari real-device and calculator physical keys as separate gates. The initial Lesson 12 remains DRAFT until all content and device gates pass. Back up the current Drive file before any new overwrite.
