# Osaka2026 私人網站維護指南（GitHub Pages + Google Drive）

> 供新對話中的 ChatGPT / Codex / 其他維護者使用。更新／核對日期：2026-10-08。  
> **這個 GitHub repository 是公開的。** 網站的登入 shell 可公開存取；實際私人 HTML、學習內容和私人圖片位於 Google Drive，受 Google 檔案權限保護。

## 0. 新對話請先讀這裡

使用者只要交代「更新 https://wesleychen310.github.io/osaka2026/learning/ 」或其他下列私人網站，就應循以下順序主動調查，而非要求使用者重述檔案 ID、系統架構、網址或既有操作流程：

1. 由網址推回此 repository `wesleychen310/osaka2026` 和對應的 GitHub shell 路徑（見下一節）。
2. **即時讀取**此 README、對應的 `index.html`，從 `FILE_ID` 或 `CHAPTERS` 設定找出真正的 Google Drive 私人 HTML 原檔。
3. 使用已連接且已授權的 Google Drive 工具讀取原檔 metadata（檔名、ID、parent IDs、權限）、內容及相關資料夾／SOP，核對最新版本。存取權以當下連線及原檔權限為準。
4. 依使用者指示完成工作：修改 Google Drive 原檔前先備份；只有 shell／路由／入口需要改時才提交 GitHub；維持原網址及原有功能。
5. 重新讀取更新結果，確認檔案／連結／數量／部署狀態，回報實際已通過的驗證與尚未驗證項目。

**使用者已連接的 GitHub、Google Drive 可直接使用時，毋須每次再詢問是否有權限。** 若連接器缺失、權限遭拒或登入過期，應準確指出需要重新授權的部分。不可將「有 connector」誤認為無條件可寫入。

## 1. 私人網站索引與原始碼對照表

下表記錄目前已核實的同一種架構：**公開 GitHub Pages shell → Google OAuth 登入 → 以使用者授權讀取 Google Drive 私人 HTML**。頁面內容以 Google Drive 現行原檔為準，不能只改 GitHub shell 就當作更新完成。

| 網站／用途 | 正式網址 | GitHub 入口檔案 | Google Drive 私人 HTML |
|---|---|---|---|
| 私人學習總入口（公開導航頁） | [`/learning/`](https://wesleychen310.github.io/osaka2026/learning/) | `learning/index.html` | 無單一 Drive HTML；下面各子站各自載入 |
| 超級筆記 PA / ATPA | [`/learning/super-notes/`](https://wesleychen310.github.io/osaka2026/learning/super-notes/) | `learning/super-notes/index.html` | `超級筆記.html`；`FILE_ID = 1Gmf5EKGCxqR0iE-MwLfNrZM6DWNVdxTa` |
| ISLP 精讀 Chapter 3 | [`/learning/islp/ch03/`](https://wesleychen310.github.io/osaka2026/learning/islp/ch03/) | `learning/islp/ch03/index.html` | `ISLP_CH03_精讀.html`；`FILE_ID = 1Pvejd3h2Z2UzkJpmmBLrx0qqtas6rX2S` |
| ISLP 精讀 Chapter 4 | [`/learning/islp/ch04/`](https://wesleychen310.github.io/osaka2026/learning/islp/ch04/) | `learning/islp/ch04/index.html` | `ISLP_CH04_精讀.html`；`FILE_ID = 1jd-CTkx0FNQdnOaHHsB0GljK3T0AIemh` |
| ISLP 精讀章節選擇頁 | [`/learning/islp/`](https://wesleychen310.github.io/osaka2026/learning/islp/) | `learning/islp/index.html` | 本頁為公開章節選擇，依上面 ch03/ch04 讀取 |
| ISLP 課本雙語化 | [`/learning/islp-reading/`](https://wesleychen310.github.io/osaka2026/learning/islp-reading/) | `learning/islp-reading/index.html` | `CHAPTERS` 映射：Chapter 3 `1dGsBY5l6XKuxkpriNDzx3tCmwIXQzS4Q`；Chapter 4 `1fUhbSm_tOL4jnF9zHTEP99y71gYASDJG` |
| ISLP 視覺筆記 | [`/learning/islp-visual/`](https://wesleychen310.github.io/osaka2026/learning/islp-visual/) | `learning/islp-visual/index.html` | `ISLP_視覺筆記.html`；`FILE_ID = 18c6xkniZissK6cF0x3Xr0_D1h-FEUwFd` |
| 京都 2027 旅行前事務本（control） | [`/t202703/control/`](https://wesleychen310.github.io/osaka2026/t202703/control/) | `t202703/control/index.html` | `2027花見京旅行前事務本.html`；`FILE_ID = 1XVIMkPdvqccbW7i-y4_QrW8h8VcGj3lY` |
| 京都 2027 旅帳本（ledger） | [`/t202703/ledger/`](https://wesleychen310.github.io/osaka2026/t202703/ledger/) | `t202703/ledger/index.html` | `2027花見京旅帳本.html`；`FILE_ID = 19iny4GXWrzgZug-ag4z7_5DHamr0T-m1` |

- `/learning/`、`/learning/islp/` 等目錄頁是導航／章節選擇頁，並非各有一份對應的私人 HTML。
- `/t202703/` 京都旅遊主網站由其他檔案（如 `boot.js`）控制；不可將此表中的 control／ledger 專用登入機制，誤認為所有 `t202703` 頁面的實作。
- 若後續擴充 Chapter 5、新的私人站點或改變 Drive 原檔，必須同步更新此索引。**單筆 ID 以當下 GitHub shell 與 Google Drive metadata 核對為準。**

## 2. 技術架構與安全邊界

`瀏覽器 → GitHub Pages（公開 HTML／OAuth shell） → Google Identity Services OAuth → Google Drive API GET /files/{FILE_ID}?alt=media → 私人 HTML / manifest / 圖片`

- GitHub Pages 只能視為**公開程式入口**，其原始碼、頁面路徑及 OAuth client ID 均可被瀏覽；`noindex` 標籤不是存取控制。
- GitHub shell 通常請求 `https://www.googleapis.com/auth/drive.readonly`，使用 Google OAuth access token 向 Drive API 讀取檔案，並用 `sessionStorage` 暫存登入狀態。**後端不存在一個通用管理員密碼**；使用者必須對 Drive 原檔有權限。
- 實際的私人 HTML 不是 repo 裡的 `index.html`，而是 shell 所參照的 Drive 檔。更新內容時，應在 Drive 修改原有 HTML，不可僅在 GitHub 新增一份不會被載入的檔案。
- Google Drive 的 `shared=true` 可能表示分享給**特定使用者**，不等於公開。應檢查實際 `permissions`；不得擅自改成 `anyone` 或公開共用。
- **絕不**把 access token、refresh token、Cookie、機密訂單、私人 HTML 全文、教材圖片原始位元、Base64 圖片或其他非公開文件內容提交到**公開** repository。
- Google Drive 檔案 ID 是定位識別碼，不是授權憑證；仍應只公開維護所必要的 ID，避免在 repo 額外列出私人帳戶或個資。

### 不同子站的載入差異（重要）

| 子站 | 目前實作 | 維護注意 |
|---|---|---|
| `learning/islp-visual/` | GitHub shell 持有 Google OAuth closure；用 `DOMParser` 解析 Drive 私人 HTML 的 `#notes-manifest`，動態建立筆記卡片與私人圖片 loader | 使用 `IntersectionObserver` lazy loading、`Blob`／`URL.createObjectURL` 快取及放大檢視；**不要直接改成 `document.write()`**，以免破壞 shell-owned 圖片授權邏輯 |
| `t202703/control/`、`t202703/ledger/` | 登入後下載整份 Drive HTML，再以 `document.open()`／`document.write()`／`document.close()` 接管頁面 | 修改私人內容主要在 Drive HTML；修改 OAuth／shell 才碰 GitHub。不能假設這兩頁也有 visual notes 的 manifest |
| `learning/super-notes/`、`learning/islp/ch03/`、`learning/islp/ch04/`、`learning/islp-reading/` | 目前也是 GitHub OAuth shell + Drive HTML；各 loader／章節選擇邏輯以原始碼為準 | 改之前逐頁檢查實作，不要以為相同登入架構就有相同渲染機制 |

## 3. Google Drive 編輯與備份 SOP（強制）

**每次修改任何 Google Drive 原檔之前**：

1. 讀取原檔的 `id`、`name`、`mimeType`、`parents`、當前內容、適用權限。
2. 在**原檔所在資料夾**確認 `_backup` 子資料夾存在；若不存在先建立。
3. **先複製原檔到 `_backup`**；例如 `2027花見京旅帳本_20261008-1145_before-add-expense.html`。備份檔名須包括備份時間與簡短原因。
4. 在**原 Drive file ID 上更新內容**，保持**原檔名、File ID、父資料夾、原有私人權限**不變。對 HTML 原檔使用原位 bytes replacement；不得透過「刪除再上傳」替換正式檔。
5. 重新抓取 Drive 原檔，核對新增／修改內容，對照備份確認舊內容保留。
6. 回報備份位置、原檔 ID、變更內容及驗證結果。**GitHub shell 修改時採 Git 版本歷史／commit 追蹤；備份規則並不表示要在公開 repo 上儲存私人 HTML。**

若任務需要新增圖片、附件或 assets：先傳到**正確的私人 assets 資料夾**，核對每個新檔案的 ID、MIME、大小及權限，再修改私人 HTML 或 manifest 引用；禁止把私人 asset 改放 GitHub 公開目錄。

### 已確認的 Drive 位置（可由原檔 metadata 再追查）

- 京都 `control` 與 `ledger` 私人 HTML 位於同一個 Drive 資料夾；該資料夾已有 `_backup`。仍應在每次操作時核對。
- ISLP 精讀、雙語課本與視覺筆記私人 HTML 位於同一個 ISLP 教材資料夾；視覺筆記的 PNG/WebP 有獨立 `ISLP_視覺筆記_assets` 資料夾。
- 超級筆記的私人 HTML 位於其 PA / ATPA 資料夾；對該檔修改時也必須先確認／建立同層 `_backup`。
- 視覺筆記另有 Google Drive 原生文件 **「ISLP 視覺筆記｜系統架構與跨對話交接 SOP（2026-10-08）」**，位於 ISLP 教材資料夾。**變更視覺筆記前務必讀該 SOP**，更新後同步維護圖片清單及現況。

## 4. 各類任務的正確修改位置

| 使用者需求 | 主要修改位置 | 必要檢查 |
|---|---|---|
| 修改 `control` 旅行清單、事務、日期等內容 | 原 Drive `2027花見京旅行前事務本.html` | 備份原檔、內容保留、欄位/互動功能是否符合實際需求 |
| 修改 `ledger` 支出、預算、帳本畫面等 | 原 Drive `2027花見京旅帳本.html` | 備份原檔、不能遺失原帳目、數值/欄位/計算邏輯 |
| 新增 ISLP 視覺筆記 | Drive `ISLP_視覺筆記_assets` 新圖片 + 原 Drive `ISLP_視覺筆記.html` 的 `#notes-manifest` | 先讀專用 SOP；新圖 File ID 及私人權限、舊圖片完整、序號／總數／手機版 lazy loading |
| 更新 ISLP 精讀、雙語教材、超級筆記 | 對應的 Drive 私人 HTML | 逐節保留重要內容、教材圖表、公式、原有資料與瀏覽功能 |
| 調整登入、跳頁、loading、版型 shell 等 | 相應的 GitHub `index.html` | 實作差異、GitHub commit、Pages 部署及真實登入後行為 |
| 私人學習入口新增導航卡 | `learning/index.html` | 指向已存在的路徑；名稱及描述與網站一致 |
| 新增私人網站 | GitHub 新 shell + 獨立 Google Drive 原檔 + README 索引 | Google 權限、OAuth、備份、原始碼路由、可重複維護 SOP |

### 視覺筆記資料規格

`ISLP_視覺筆記.html` 含 `<script type="application/json" id="notes-manifest">`，格式為 `{"schemaVersion":1,"notes":[{"section":"3.2.2","title":"...","zh":"...","fileId":"...","width":1055,"height":1491,"source":"..."}]}`。這裡是**格式示例**，不可拿單張示例覆蓋原陣列；實際要將新筆記追加或依教材順序插入，保留全部既有項目。網站自動按 manifest 建立章節導覽與圖片卡片。

## 5. 更新完成後的驗收

- **內容正確**：讀回 Google Drive 原 HTML；新增內容存在、原內容未遺失、資料結構及 JSON 可解析。
- **位置正確**：原 `fileId`、檔名、parent folder 保持一致；備份已位於原 folder 的 `_backup`。
- **權限正確**：確認 Drive permissions 未變成 `anyone`；圖片、附件及私人文件仍僅限有權帳號。
- **GitHub 正確**：若變更 GitHub，確認 commit 在預期的 branch／路徑、GitHub Pages 部署狀態與正式網址可讀取新 shell。
- **互動正確**：授權登入、手機顯示、章節跳轉、圖像載入／放大、control/ledger 互動及既有功能。
- **分清證據**：GitHub 已 commit ≠ Pages 已部署；Drive 已更新 ≠ 使用者已成功登入；模擬測試 ≠ iPhone Safari 實機驗收。未實測的項目如實寫「尚未驗證」。

驗證失敗先分辨 GitHub shell、Drive 原檔、權限、OAuth token、資源路徑、渲染程式哪一層出問題。必要時用原檔同 folder 的 `_backup` 復原 Drive 內容，並用 GitHub 歷史 commit 復原 shell。

## 6. 未來維護者／新對話工作約定

- 全程使用**台灣繁體中文**，英文專有名詞、實際檔名及程式碼依原文保留。
- 連接器可用就直接調用 GitHub／Google Drive；不要要求使用者自行搜尋或重複貼權限資料。
- 對使用者提供的網址，先做**網址 → repository/path → shell FILE_ID → Drive 原檔 → parent/_backup** 的解析，再開始修改。
- **以當下實際來源為準**。遇到文件、README 與網站現況不一致，先核對，再更新過期的文件；不要把舊 SOP 當成當下真相。
- 不刪既有資料、不改永久網址、不更改私人權限、不擅自整站重寫；工作範圍內必要的修改務求最小且可回復。
- 若真的需要改動資料模型、登入機制或原始碼架構，先評估對其他私人站點／共用 OAuth 登入的影響。
- 每次新增站點或變更 shell 到 Drive 的指向，**同步維護本 README**，避免下次對話無從追查。
- 最終報告務必分別指出 **Drive 已改、GitHub 已改、已備份、已驗證、尚未驗證**，附實際原檔／commit／正式網址；不可宣稱未執行的部署或驗收成功。

## 7. 一句話交接範例

「請更新 `https://wesleychen310.github.io/osaka2026/t202703/ledger/`，依 repo 根目錄 `README.md` 找到 GitHub shell 和 Google Drive 原檔，先在原 folder 的 `_backup` 備份，再修改原檔並驗證。」

> 本檔只記錄維護路徑、已公開 shell 中存在的 file ID 和操作守則；敏感資訊與私人內容必須留在受控 Google Drive。
