# 私人記事／財務帳本 — 網站維護與跨對話 SOP

> 此文件為 `records/` 專用維護手冊；入口總表請先參考 Repository 根目錄 [README.md](../README.md)。更新日期：2026-10-08（台灣時間）。
>
> **安全規則：本 GitHub Repository 是公開的。所有個人交易明細、實際收支、姓名、車牌、帳號、付款截圖、憑證及私人 HTML 全文只能存放在具有權限控管的 Google Drive。不得貼進 GitHub 原始碼、README、公開 JSON、commit message 或其他公開資產。**

## 1. 計畫定位與固定入口

**這是一個可長期擴充的私人財務／生活記事系統。** 資料本體是私人 Google Drive HTML，GitHub Pages 只放公開的導覽與 Google OAuth loader。未來可依年份新增 `records/finance/2027/` 等路由或獨立新帳本，維持 `records/` 作為統一目錄。

| 元件 | 永久網址／識別碼 | 職責 |
|---|---|---|
| 私人記事總入口 | <https://wesleychen310.github.io/osaka2026/records/> | `records/index.html`；公開導航，不含交易明細 |
| 2026 財務記事網站 | <https://wesleychen310.github.io/osaka2026/records/finance/> | `records/finance/index.html`；OAuth 門禁與私人 HTML 載入 |
| 私人資料主檔 | [2026記事_私人財務帳本.html](https://drive.google.com/file/d/1iW_TBvC_NO6s0PlAPLbRspfD_xYqQs_4/view) | **固定 Drive File ID：`1iW_TBvC_NO6s0PlAPLbRspfD_xYqQs_4`**；MIME `text/html`；網站唯一現行資料正本 |
| 2026 原始文件 | [2026記事.docx](https://docs.google.com/document/d/14_-8w1bTsxsKoj-wDWanL_L0bxYBV-qu/edit) | File ID：`14_-8w1bTsxsKoj-wDWanL_L0bxYBV-qu`；資料匯入時的來源快照，原檔保留 |
| 主資料夾 | [Google Drive／文件／記事](https://drive.google.com/drive/folders/1ngQ4Tv0CrbCNDBItbAJqJLBhmmnJkUfU) | Folder ID：`1ngQ4Tv0CrbCNDBItbAJqJLBhmmnJkUfU`；**HTML 與 Word 在同一資料夾** |
| 備份資料夾 | [記事／_backup](https://drive.google.com/drive/folders/1st72qB2XA4sq7ZGzg-_i3FUDClrxKMNB) | Folder ID：`1st72qB2XA4sq7ZGzg-_i3FUDClrxKMNB`；任何更新原 HTML 前先備份 |
| 共用登入輔助 | `private-auth-hint.js` | 記住上次 Google 帳號提示，不延長 token；各私人站共用 |

### 架構

```text
使用者 Safari / Desktop
  └─ GitHub Pages /records/
       └─ /records/finance/（OAuth shell）
           ├─ Google Identity Services / drive.readonly
           ├─ sessionStorage：短期 Access Token
           ├─ private-auth-hint.js：localStorage 上次帳號 login_hint
           └─ Google Drive files.get?alt=media
                └─ 私人「2026記事_私人財務帳本.html」（含 CSS、HTML、JSON、JS）
                     ├─ 年度儀表板／月度與分類圖
                     ├─ 交易明細、搜尋、類別／狀態／月份篩選
                     ├─ 房貸月度與週期性備註
                     └─ 篩選匯出 CSV／複製「新增紀錄」格式
```

**重要實作差異：** 財務記事 shell 取回私人 HTML 後以 `document.open();document.write(html);document.close();` 替換登入畫面，因此私人 HTML 中的原生前端 JS 可執行。ISLP 視覺筆記是另一路徑的 `DOMParser + manifest + shell-owned blob image loader`，兩者不可混成同一種渲染流程。

## 2. 資料格式（private HTML 內）

資料區塊：`<script type="application/json" id="ledger-data"> ... </script>`。JSON 屬於**私人 HTML 的一部分**，不能拆出另放 GitHub。

| Key | 型態與意義 |
|---|---|
| `schemaVersion` | number；目前為 `1`，更動 schema 須同步更新前端 renderer |
| `year`、`title`、`sourceUpdatedAt` | 年份、顯示標題及最後記帳日期（`YYYY-MM-DD`） |
| `sourceFileName`、`sourceFileId` | 初始 DOCX 的來源追溯資訊 |
| `transactions` | array；唯一交易明細正本；UI 的實付／待確認、月度、類別圖均據此計算 |
| `mortgageMonths` | array；個別月份付款日期、金額與原始備註；修改房貸交易須同步維護 |
| `summaryOriginal` | array；來源摘要／目前核對總額的控制數，新增或更正交易須同步更新 |
| `categorySummaryOriginal` | array；按類別的核對總表；新增或更正交易須同步更新 |
| `mortgageNote`、`mortgageTotalNote`、`recurringNotes`、`statusNote` | 來源註記及持續追蹤的提醒 |

每筆 `transactions[]` 目前具下列欄位：

```json
{
  "id": "2026-030",
  "no": 30,
  "date": "2026/10/08 14:30",
  "item": "【交易名稱】",
  "amountText": "TWD 1000／900",
  "billed": 1000,
  "paid": 900,
  "pendingAmount": 0,
  "status": "confirmed",
  "method": "【實際付款方式】",
  "note": "【原始文字備註／憑證資訊】",
  "category": "【分類】",
  "year": 2026,
  "month": 10
}
```

以上是**欄位示例**，不能直接當成真實新交易上傳。未收到使用者明確資料時，絕不自行填入交易、金額或付款成功狀態。

**認列規則：**

- `status='confirmed'`：已確認繳款或以點數全額折抵；`paid` 是「實際支付」金額，**點數全額折抵可為 0**；`pendingAmount=0`。
- `status='pending'`：仍只有查詢或待繳畫面；`paid=0`；`pendingAmount` 保存待確認帳面金額，**絕不混入已確認實付**。
- `billed` 保留原訂單／應繳金額；`amountText` 原樣保留「訂單／實付」紀錄，勿把優惠折扣、點數折抵混成現金支出。
- `id` 與 `no` 一律唯一、不可回收；新增 2026 交易從現存最大編號 +1 起，年份改變時先決定採跨年資料模型或獨立年度網站，避免同 ID。
- 原文可能有交易日期與文件編排順序不同的狀況，應保留原始 `no` 並允許 UI 依日期檢視，勿靜默重排原始記錄的來源順序。
- 對於付款狀態更正，必須有使用者提供的成功付款證據或明確指示；更正後修改原交易、`statusNote` 及摘要，避免兩次計入。
- 任何版本新增交易，都要重新核算：`confirmedPaid = sum(transactions.paid)`，`pending = sum(transactions.pendingAmount)`，`ledgerTotal = confirmedPaid + pending`；付款筆數與各類別須一致。前端會檢查 `summaryOriginal` 控制總額是否一致，若不一致將使儀表板初始化中斷，故務必同步維護。

## 3. 每次新對話新增一筆財務紀錄 — 固定 SOP

1. 讀根目錄 [README.md](../README.md) 與本頁；即時讀 `records/finance/index.html`、Google Drive 私人 HTML 正本、Drive metadata、既有交易 JSON 與備份資料夾。**先核對最新資料，不依賴上次對話的過期數值**。
2. 從使用者提供的文字、交易明細或付款憑證提取**日期／項目／應付金額／實付／付款方式／分類／狀態／備註**。有不確定資訊就標示待確認；不可推定查詢畫面等於繳費成功。
3. 查重（日期＋項目＋金額＋付款來源／憑證）；有可能重複就先辨識，再新增，避免重複支出。
4. 在同一個 Drive「記事」資料夾的 `_backup`，**先備份目前 HTML 正本**，檔名例 `2026記事_私人財務帳本_YYYYMMDD-HHMM_before-add-transaction.html`。使用 Drive copy 建立備份；備份成功才動正式檔。
5. 編輯 HTML 內 `#ledger-data`，**保留全部歷史交易、原始備註及其他 HTML/CSS/JS**，新增資料並調整摘要、分類彙總、房貸月表、更新日期、狀態註記。
6. 以 Google Drive `files.update`／相容 Connector 的**raw-file 原位 bytes replacement** 更新正式 HTML；**必須保持 File ID、檔名、parent folder、私人權限不變**。若目前工具只支援「上傳新檔」，停止並回報限制，不可自行建立替身新檔造成 GitHub FILE_ID 指向舊資料。
7. 重新讀取同一個 Drive File ID，驗證所有 JSON、原始筆數、各筆金額、核對摘要與新交易，讀 metadata 確認私人權限。查第一筆與最新筆；在可用的瀏覽器驗證搜尋、篩選、圖表、CSV；iPhone Safari 實機驗收另行註記。
8. 只有登入 shell、UI 框架、跨年份導覽需要修改時，才更新 GitHub；提交 Git commit，檢查 Pages 部署成功。更新本 README 的「現況與版本」，並回報更新內容、原檔 ID、備份連結、核對結果。

**網站本身目前是唯讀查詢。** 「複製新增紀錄格式」只將輸入模板放到剪貼簿；CSV 匯出也只下載當下資料，兩者都**不會自動寫回 Google Drive**。使用者提供新紀錄後，由 ChatGPT／Work 依 SOP 寫入正式檔。不要把編輯結果只存放在 browser localStorage。

## 4. 新年度／更多財務領域的擴充

- `records/index.html` 是總導航；2026 的資料只在私人 Drive HTML；不要將交易明細複製到新站的公開 JS。
- 若是**同年度新增交易**，只更新既有原 HTML 的 JSON 及摘要；網址與原 File ID 不變。
- 若是**新年度（例如 2027）**，建議建立新的私人 HTML 檔於同一「記事」資料夾或該年度子資料夾，取得新的 Drive File ID，再新增專用 shell、總導航卡與 README 索引；也可先與使用者確認是否希望建立跨年綜合報表。
- 若是**其他財務主題**（資產、負債、保單、稅務、支出、定期繳費），可在 `records/` 新增卡片與對應私人 HTML／shell，與現有 2026 財務記事相同的 OAuth 架構，但各自保留清晰的資料模型與備份。
- 原 Word 檔為匯入來源快照。**現行網站以私人 HTML 為主要維護正本**；除非使用者要求，不必每次同步修改原 Word，避免多重版本互相衝突。

## 5. 現況與驗收邊界（2026-10-08）

- 原始 Word 的 5 個表格完整解構，其中交易明細、月度房貸和分類總表均保留於私人 HTML；來源是原始檔案，未把交易明細放進 GitHub。
- 私人 HTML：`2026記事_私人財務帳本.html`，現存 Drive ID 由第 1 節固定。
- 2026 主頁包括摘要、支出圖、交易搜尋／月度與狀態篩選、原始金額與備註、房貸月表、週期事項、CSV 匯出。
- 已以程式核對來源筆數、已確認／待確認合計、房貸累計，並做 Desktop / Mobile 模擬畫面與過濾條件測試；真實 Google OAuth 登入、iPhone Safari 實機體驗須在使用者已授權環境再驗證。
- GitHub 公開程式只包含 OAuth shell、入口導覽、README。勿將私人資料或測試截圖（含個人帳務內容）提交公開 GitHub。

最後更新：2026-10-08。若更新筆數、帳本 schema、年度網址或實際驗收狀態，應同步維護本文件。
