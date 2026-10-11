# ASM FAM-S 私人雙語互動教科書

更新：2026-10-11（UTC）。Lesson 11 狀態：**DRAFT / 修復已發布，正式驗收未完成**。

這份 README 是專案現況與技術手冊；[WORKFLOW.md](WORKFLOW.md) 是執行 SOP 與 QA 清單。後續 Work 必須先讀兩份文件。舊文件中的公式數量、檔案大小及「12 組測試通過」不能作為本版本的證據。

## A. 專案與入口

目標是把使用者合法持有的 ASM FAM-S 教材製作為可選取、搜尋、複製的英／繁中私人電子教科書，供 iPhone、iPad、Mac 閱讀。一課一網址、一課一份私人 HTML。共用程式與驗收流程供 31 課沿用；**本次僅修改 Lesson 11，未開始 Lesson 12–31**。

| 項目 | 位置 |
|---|---|
| 31 課目錄 | https://wesleychen310.github.io/osaka2026/learning/fam-s-reading/ |
| Lesson 11 | https://wesleychen310.github.io/osaka2026/learning/fam-s-reading/lesson11/ |
| 習題直達 | https://wesleychen310.github.io/osaka2026/learning/fam-s-reading/lesson11/#exercises |
| Repository | https://github.com/wesleychen310/osaka2026 |
| 私人教材資料夾 | https://drive.google.com/drive/folders/1uiYt_Ce2UNFSr9C9YISh6f1BBnhnDUwe |
| 原書拆分資料夾 | https://drive.google.com/drive/folders/1oO8TXoMNP5Ef3JiWNEDNmrT1mI_WE-D0 |
| 私人 Lesson 11 | https://drive.google.com/file/d/14nCKA8VCu2nwzWw7qVqPZcBzrkDs-hW1/view |
| 完整私人 QA | [ASM_FAM-S_Lesson_11_QA_20261011.md](https://drive.google.com/file/d/1YY0fUWyTPMod9KBBgpZoPfKc7oO_qLLm/view)，同一私人資料夾另存交接 ZIP，含公式清單、逐題驗算與靜態證據 |
| 公開驗收摘要 | [QA_SUMMARY.md](QA_SUMMARY.md)（不含原書正文、原題或圖片） |

原 HTML 名稱仍為 `ASM_FAM-S_Lesson_11_BILINGUAL_3MODES_DRAFT.html`。不得改用新 ID 取代原檔。GitHub 只存放登入殼、程式、技術文件與不含教材的校對摘要；原文、譯文、全部題解及裁圖保持私人。

## B. 技術架構

### 檔案與責任

| 檔案 | 責任 |
|---|---|
| `learning/fam-s-reading/index.html` | 31 課目錄；本次未修改 |
| `lesson11/index.html` | 公開 Google OAuth 登入殼、固定 Drive file ID、載入內容、README/SOP 入口 |
| 私人 Drive HTML | 正文、逐段雙語、LaTeX、MathML、題解、表格、原圖、來源頁碼 |
| `reader.css` | 共用響應式排版、語言欄位、卡片、公式／表格內捲動、原圖放大視窗 |
| `reader.js` | 三模式、保存偏好、錨點展開與定位、搜尋、複製、圖片放大 |

私人 HTML 用相對路徑 `../reader.css?v=版本` 與 `../reader.js?v=版本`；它由 Lesson 網址的登入殼載入，因此解析基準是正式 Lesson URL。直接使用 Drive 預覽不等於網站閱讀。發版同步更新 cache-busting 版本，但不得複製整份 CSS/JS 到每課。

### 語義 HTML

- 每段 `<div class="pair"><div class="en" lang="en">…</div><div class="zh" lang="zh-Hant-TW">…</div></div>`，兩欄必須一一配對。
- 正文小節以唯一 heading ID 標識；Example 用 `example-11-A`，例題解答用 `solution-11-A`。
- 習題 `article#exercise-11-38[data-source-page]`；解答 `details#solution-11-38[data-source-pages]`，預設不帶 `open`。
- Quiz：`#quiz-11-1`、`#quiz-11-1-solution`。習題區 `#exercises`；舊 `#typed-exercises` 由 reader.js 導向習題區。
- 解答內分別標示 Original textbook solution、Teaching supplement。教材可能的錯誤、語義歧義及高精度差異用獨立 `.calc-check`，不能悄悄改掉原書結果。

### LaTeX 與渲染

LaTeX 是主來源，放在 `data-tex`；區塊複製按鈕以 `data-copy` 存同一字串。用 Python `latex2mathml` 從該字串生成原生 MathML，嵌入同一容器。每次改式先改 LaTeX，再重新生成 MathML；禁止只改渲染內容。保留完整 JSON 公式清單於私人交接包，不能把原書公式清單整份放到公開 repo。

目前不需線上 MathJax/KaTeX 才能顯示數學；仍須在目標 Safari/Chromium 實測原生 MathML。轉換成功、XML 可解析，不代表符號／數學或視覺排版已通過原書驗收。

區塊公式按 LaTeX；行內公式可點擊或用鍵盤 Enter/Space 複製，會顯示成功／失敗通知。正文仍可選取，選字時不應觸發複製。Clipboard API 不可用時有舊式複製備援；這兩條路徑本次尚未瀏覽器實測。

### 三模式與手機規則

前端僅三個模式按鈕：全英文 `en`、全中文 `zh`、左右對照 `side`。`body[data-mode]` 控制顯示；localStorage `fams-reading-mode-v1` 保存偏好，並讀取舊 `fams11-mode`。不同裝置不會自動同步 localStorage，但同一瀏覽器換尺寸或重新整理應保留。

左右對照一律使用 `minmax(0,1fr) minmax(0,1fr)`，320px 也不改成上下欄。長公式、表格與跳題列只能在自身容器水平捲動；不得以剪掉整頁溢出掩飾錯誤。所有格線／flex 子項設 `min-width:0`。選項採逐項雙語行，左右模式同時顯示兩種語言。導覽列高度由 ResizeObserver 回寫 CSS 變數，以便錨點不被黏附導覽遮住。

### 私人存取與深層連結

登入殼沿用 Google Identity Services、`drive.readonly` scope。存取權杖僅在 sessionStorage 的 `hanami-kyoto-google-token-v3` 暫存；過期重新授權，403 顯示無權限。不得記錄 token／OAuth URL／密碼到 QA。不得把權限改成 anyone 或繞過私人登入。

Drive `alt=media` 以 Bearer token、`cache:no-store` 讀取原 HTML。內容基本驗證後 document.write 替換登入殼；先保存目前 fragment，再還原 fragment。reader.js 開啟目標 details 與祖先 details，清除可能隱藏目標的搜尋，等字型就緒再定位。`#exercises`、`#exercise-11-N`、`#solution-11-N` 都須經真實登入／重新整理驗收；目前程式已修復，端到端登入定位未通過。

### Figure／Table

表格用 HTML table，保留原欄列、數字、編號與公式。共用題幹資料可在各題重複，以便深層連結獨立閱讀；清點時區分「原書實體表格」與「HTML 表格實例」。原圖只裁切圖形區域、保留雙軸標籤，不以整頁截圖代替正文。圖片嵌入私人 HTML 的 data URI；共用 JS 的 dialog 放大，避免瀏覽器禁止頂層 data URI 導航。圖片保持比例。

## C. Lesson 11 本次實作與證據

### 已核對頁碼

| 範圍 | 印刷頁 | 完整 PDF 頁（1 起算） |
|---|---|---|
| 正文、Example、Table11.1 | 151–158 | 164–171 |
| Exercises | 159–170 | 172–183 |
| Exercise solutions | 170–177 | 183–190 |
| Quiz solution | 178 | 191 |
| 非本課教學內容 | 179 Study Break、後續空頁 | 192–193 |

主要來源 `ASM_FAM-S_searchable.pdf`；拆分 PDF 同步檢查。Quiz 放回題目旁的收合解答，仍標示原解答 p178。Example A/I/K 的題目與答案跨頁，需分別記錄；不能把題目頁當成解答頁。

### 最終檔案實際清點

| 項目 | 數量 | 這個數字代表什麼 |
|---|---:|---|
| Example | 11 | 11A–11K，有對應收合解答 |
| Quiz | 1 | 11-1，有原書解答 |
| Exercise／Solution | 45／45 | 11.1–11.45，連續且一一對應 |
| 選擇題／選項 | 37／185 | 每題五個；八題原書非選擇題不另造選項 |
| 收合解答 | 57 | 45 習題 +11 例題 +1 Quiz |
| HTML 表格 | 13 | 含 27/28 重複共用表、39 解答表；原書位置12個 |
| 原書視覺圖 | 1 | Exercise11.38 p168，原裁圖1500×711 |
| LaTeX／MathML實例 | 829／829 | 含英中重複、公式表與補充內容 |
| 不同 LaTeX 字串 | 351 | 不等同於原書公式數量 |
| 區塊複製按鈕 | 138 | 其他行內公式由共用 JS 提供點擊／鍵盤複製 |
| 雙語配對 | 839 | 包括表頭、介面與補充；不等同原書段落數 |
| 私人 HTML | 883,433 bytes | SHA256 `a68fc4eaacb839a058eb55901febfd05962682144b1fcf979118bf8bbbf9e26c` |

靜態驗收1,847項通過：題解對位、唯一 ID、內部錨點、三模式控制、原頁標示、五選項、預設收合、LaTeX/MathML 存在且 XML 可解析、無未解析指令／控制字元、無 SVG 公式／OCR 正文、表11.1十四列三欄、裁圖可解碼。這些是結構驗證，不是瀏覽器測試或英文逐字簽核。

全部45題建立獨立數學檢查（含符號／值域題，不稱為45個數值題），11個Example與Quiz另外計算。使用從原 PDF 重新讀取的參數，以 SciPy 積分、離散期望、根求解、常態反函數等，若可行用第二方法交叉比對。逐題結果與方法在私人 `math-verification.json`；不抄舊 HTML 數字。TI-30XB 路徑參照 TI 官方指南，採 CLASSIC/FLOAT；尚未實體逐鍵驗證。

### 修復／數學紀錄

- 11.2 的 Burr 尺度根號已依原書復原；11.15 恢復原問題及截頂變數與閉端點條件；11.20 完整保留原條件，另註原解答未知參數誤寫。
- 11.31 原書結果與獨立完整精度結果分列，常態表與中間 rounding 差異詳記私人 QA。11.41 同樣保留原書近似並分列完整精度。
- 11.38 恢復原密度圖、全部選項與兩種解法，說明原 wording 的每損失／每給付歧義。
- 正文條件給付支持集、Example K 的支持集、11.43 條件符號、11.44 積分評值／語義歧義另作校註。
- Table11.1 重建十四列三欄；末尾兩個 franchise 關係式保留在原表後。Quiz完整復原題幹與原解答。
- 撤除過時 OCR 正文／備查頁及洩露在題目區的答案來源，修復英文選項在 side 模式被隱藏。

英文與繁中已逐段重建並做一次對頁檢查；**未建立可簽核的全部逐字／逐式差異表，完整翻譯與原書忠實度門檻仍待最終驗收**。不要把上述重建或結構計數改稱全面校對完成。


### 2026-10-11 第二次原書複核

本輪再次視覺讀取完整PDF164–191的28頁，重新檢查45題原題及解答、全部高風險條件、表格／選項與保留的舊補充。修復遺漏配分、引用、貨幣單位、解答缺式、prime上標、英文欄中文殘留、繁中摘要及計算機括號。詳細差異及頁碼台帳保存在私人QA／交接包的 `SECOND_REVIEW_20261011.md`；這次對頁複核仍不等於完整逐字／逐式簽核。

新增33組實際顯示按法的運算解析驗證，全部與獨立目標一致；驗證算式及括號，不冒充TI實體逐鍵測試。私人生成流程增加 `review_corrections.py` 與 `verify_calculator.py`。發版前必須把題目模型驗算、按法算式驗證、實體按鍵驗證三者分別記錄。

第二次修改前備份：[原位HTML備份](https://drive.google.com/file/d/1qtALOyBqvtJTr8wysbnOMlW4ISDrKHkx/view)，同一 `_backup`，816539bytes，owner-only。實際建立時間2026-10-11T12:33:10.133Z，名稱含 `20261011_203310+0800_第二次內容複核前備份`。新私人HTML modifiedTime為2026-10-11T12:48:18.963Z，回讀bytes完全一致。版本 `20261011-source-repair-v3`。

## D. 可重複製作流程

詳細步驟、使用元件、常見錯誤、驗收及結果位置請看 [WORKFLOW.md](WORKFLOW.md)。固定順序是來源／頁碼 → 備份 → 英文 → LaTeX → 圖表 → 繁中 → 題解與獨立驗算 → 共用閱讀器 → 12組與登入測試 → 完整性簽核 → 原位發布及回讀 → 交接。Lesson11 的結構可沿用，其驗收未通過部分必須補驗，不得當成已驗證範本。

## E. Change log

| UTC 時間 | Lesson | 更新 | GitHub | 私人備份／QA | 狀態 |
|---|---|---|---|---|---|
| 2026-10-11 07:57 前後 | 11 | 修改前 Drive 複製備份；核實頁碼 | 原始 `513e5d0e8acdedd14d6f66737320fa6bcbb38e6a` | `_backup` / 備份 ID `1DalWncPQtEzMGB5ZvKPyXxkVso8H4XAM`；owner-only | DRAFT |
| 2026-10-11 08:34:26 | 11 | 原位更新私人內容、原圖、題解、翻譯、LaTeX | [reader修復 `720be00`](https://github.com/wesleychen310/osaka2026/commit/720be00f073cab034461a128f7838c8de57777b2) | 原 ID／父資料夾／權限保持；回讀SHA256一致 | DRAFT |
| 2026-10-11 12:48:18 | 11 | 第二次對頁複核、補式／單位／翻譯／按法；原位更新v3 | [本輪文件歷史](https://github.com/wesleychen310/osaka2026/commits/main/learning/fam-s-reading/README.md) | 第二備份ID `1qtALOyBqvtJTr8wysbnOMlW4ISDrKHkx`；回讀一致、33算式PASS | DRAFT |
| 2026-10-11 | 11 | 建立 README、取代衝突的舊 SOP、保存 QA與交接包 | [文件變更記錄](https://github.com/wesleychen310/osaka2026/commits/main/learning/fam-s-reading/README.md) | 同一私人資料夾 QA／修復交接 ZIP | DRAFT；未標 COMPLETE |

備份檔名：`ASM_FAM-S_Lesson_11_BILINGUAL_3MODES_DRAFT.html_20261011_1557+0800_完整修復前備份`，原內容620,795bytes；[備份檔](https://drive.google.com/file/d/1DalWncPQtEzMGB5ZvKPyXxkVso8H4XAM/view)。還原需要把該檔的 bytes 覆回原 ID；不能把登入殼改指向備份。

## F. Known issues 與 COMPLETE 限制

1. 全部英文逐字／數學逐式／繁中逐段的最終差異表及簽核尚未完成。私人 QA 明列頁碼範圍與修正方法。
2. 本機缺可執行瀏覽器與受支援的本機瀏覽器介面；雲端介面不提供viewport resize。320/390/768/1130 × 三模式12組**全未驗證**，舊測試結果不可移用。
3. 正式 Google OAuth 視窗到登入畫面，未取得網站登入成功證據。登入後 `#exercises`、特定題解、重新整理／權杖過期仍待端到端實測。Drive connector 回讀成功不代表網站授權成功。
4. 複製、放大、模式保存、長公式與全頁不溢出：程式／結構修復已完成，真實瀏覽器操作待驗證。
5. iPhone Safari、iPad Safari、Mac Safari **未實機驗證**；Chromium也不能冒充它們。
6. TI-30XB 算式數值驗算與實體按鍵是不同驗收；實體按鍵尚未驗證。

COMPLETE要求 WORKFLOW 所列全部門檻均有本版本證據。任一未通過就保持DRAFT；不能刪去問題讓報告看起來完工。

## G. 新 Work 啟動指令

> 請先讀 `learning/fam-s-reading/README.md`、`WORKFLOW.md` 及私人 Lesson11 QA／交接包，再處理我指定的 ASM FAM-S Lesson。只處理指定課，不擴張到其他課。沿用既有登入殼、reader.css、reader.js、雙語pair、LaTeX主來源及收合解答結構。先核對完整PDF與拆分PDF頁碼、清點所有內容，修改前先在原私人資料夾的_backup備份。逐頁復原英文與繁中、逐式LaTeX、逐圖表、逐題原書解答及獨立驗算；另列原書錯誤和教學補充。執行本版本12組瀏覽器矩陣、私人登入／深層連結及實機測試；未通過的Lesson11門檻不得沿用成已驗證。原位更新Drive原ID且維持私人權限，GitHub只提交程式與不含原書內容的紀錄。回讀bytes驗證並更新README、SOP、私人QA。全部正式門檻通過才標COMPLETE。
