# 私人記事｜財務與所得 — 網站維護與跨對話 SOP

> 此文件為 `records/` 專用維護手冊；入口總表請先參考 Repository 根目錄 [README.md](../README.md)。更新日期：2026-10-08（台灣時間）。
>
> **安全規則：本 GitHub Repository 是公開的。所有個人交易明細、實際收支、姓名、車牌、帳號、付款截圖、憑證及私人 HTML 全文只能存放在具有權限控管的 Google Drive。不得貼進 GitHub 原始碼、README、公開 JSON、commit message 或其他公開資產。**

## 1. 計畫定位與固定入口

**這是一個可長期擴充的私人財務、所得／生活記事系統。** 資料本體是私人 Google Drive HTML，GitHub Pages 只放公開的導覽與 Google OAuth loader。未來可依年份新增 `records/finance/2027/` 等路由或獨立新帳本，維持 `records/` 作為統一目錄。

| 元件 | 永久網址／識別碼 | 職責 |
|---|---|---|
| 私人記事總入口 | <https://wesleychen310.github.io/osaka2026/records/> | `records/index.html`；公開導航，不含交易明細 |
| 2026 財務記事網站 | <https://wesleychen310.github.io/osaka2026/records/finance/> | `records/finance/index.html`；OAuth 門禁與私人 HTML 載入 |
| 私人資料主檔 | [2026記事_私人財務帳本.html](https://drive.google.com/file/d/1iW_TBvC_NO6s0PlAPLbRspfD_xYqQs_4/view) | **固定 Drive File ID：`1iW_TBvC_NO6s0PlAPLbRspfD_xYqQs_4`**；MIME `text/html`；網站唯一現行資料正本 |
| 2026 原始文件 | [2026記事.docx](https://docs.google.com/document/d/14_-8w1bTsxsKoj-wDWanL_L0bxYBV-qu/edit) | File ID：`14_-8w1bTsxsKoj-wDWanL_L0bxYBV-qu`；資料匯入時的來源快照，原檔保留 |
| 主資料夾 | [Google Drive／文件／記事](https://drive.google.com/drive/folders/1ngQ4Tv0CrbCNDBItbAJqJLBhmmnJkUfU) | Folder ID：`1ngQ4Tv0CrbCNDBItbAJqJLBhmmnJkUfU`；**HTML 與 Word 在同一資料夾** |
| 備份資料夾 | [記事／_backup](https://drive.google.com/drive/folders/1st72qB2XA4sq7ZGzg-_i3FUDClrxKMNB) | Folder ID：`1st72qB2XA4sq7ZGzg-_i3FUDClrxKMNB`；任何更新原 HTML 前先備份 |
| 共用登入輔助 | `private-auth-hint.js` | 記住上次 Google 帳號提示，不延長 token；各私人站共用 |
| 所得記事網站 | <https://wesleychen310.github.io/osaka2026/records/income/> | `records/income/index.html`；同一組 OAuth Client／共用帳號提示 |
| 所得記事私人 HTML | [2026所得記事_私人薪資紀錄.html](https://drive.google.com/file/d/12WhesQ3XEkxR9B7DhSs_wJXJUDIUKYMl/view) | Drive File ID：`12WhesQ3XEkxR9B7DhSs_wJXJUDIUKYMl`；MIME `text/html`；同一「記事」資料夾，**長期更新正本** |
| 薪資單原始存證 | [2026-10_薪資單_原始截圖.jpeg](https://drive.google.com/file/d/1_q6DSXfGTFKHoYewJ0Xp4px6FYyELSO4/view) | Drive File ID：`1_q6DSXfGTFKHoYewJ0Xp4px6FYyELSO4`；私人圖片，完整保留原始照片；目前只有螢幕截圖，尚未取得原 PDF |

### 架構（財務與所得兩個私人站）

```text
使用者 Safari / Desktop
  └─ GitHub Pages /records/
       ├─ /records/finance/（支出財務，OAuth shell）
       └─ /records/income/（所得薪資，OAuth shell）
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

## 4. 所得記事（Income Ledger）— 薪資單與月度所得交接 SOP

### 正式入口與資料邊界

- 入口網址：<https://wesleychen310.github.io/osaka2026/records/income/>；公開 GitHub shell：`records/income/index.html`。
- 私人 HTML 正本：`2026所得記事_私人薪資紀錄.html`，**固定 Drive File ID `12WhesQ3XEkxR9B7DhSs_wJXJUDIUKYMl`**。與現有支出財務 HTML 和原 Word 同放 `文件／記事`（folder ID `1ngQ4Tv0CrbCNDBItbAJqJLBhmmnJkUfU`）。
- 原始薪資單影像：`2026-10_薪資單_原始截圖.jpeg`，File ID `1_q6DSXfGTFKHoYewJ0Xp4px6FYyELSO4`；來源是**螢幕照片**，目前無原生薪資 PDF。私人 HTML 內另嵌入 WebP 預覽，登入後即能展開查看；保留原圖可直接打開 Drive 比對。
- HTML 裡私人資料區塊：`<script type="application/json" id="income-data">...</script>`。CSS、JS 和完整私人薪資資料均只存放在 Drive HTML。**公開 GitHub 僅儲存登入程式、Drive File ID、無個資的入口文案和本交接 SOP。**
- 目前建檔月份：**2026 年 10 月**，共 1 張薪資單；薪資單上標記 10 月 10 日發薪。文件上的發薪日期只表示雇主的列示日期，`depositStatus='unconfirmed'`，待核對真實銀行入帳才可更改為 `confirmed`。其餘月份均為「未建檔」，不可自動當成零薪資。

### JSON schemaVersion 1

頂層：

| 欄位 | 用途 |
|---|---|
| `schemaVersion`、`year`、`currency`、`lastUpdated` | 版本、年份、TWD 與最近資料變更日期 |
| `entries[]` | 唯一所得資料集合；每筆薪資單依月份、類型與來源編號，UI 由此自動顯示 |

每筆 `entries[]`：

| 欄位 | 用途 |
|---|---|
| `id` | 唯一鍵（例：`2026-10-salary`）；不得重複上傳同月同類型 |
| `type`、`period`、`salaryMonth`、`payDate` | 所得類別、`YYYY-MM`、月份顯示及**薪資單列示發薪日期** |
| `depositStatus` | `unconfirmed` 或 `confirmed`；必須根據銀行入帳證明或使用者明確指示更新 |
| `employer`、`department`、`jobTitle` | 工作資訊；屬私人資料，禁止公開 GitHub |
| `payItems[]` | 給付項目的 `name/amount/category`，包含本薪、津貼、公司獎勵 |
| `deductionItems[]` | 員工薪資扣除項目的 `name/amount/category`，包含保費、預扣稅、信託、自提等 |
| `gross`、`deductions`、`net` | 給付、扣除與薪資單實領的控制數 |
| `taxableIncome`、`taxExemptIncome`、`withheldIncomeTax` | 薪資單列示的應稅／免稅／預扣稅；預扣不等於年度實際所得稅 |
| `employeeRetirementContribution` | 員工勞退自提金額：**已包含在 deductions 中** |
| `employerRetirementContribution`、`employerRetirementLabel` | 雇主公提：**另行揭露，不計入給付或扣除，也不重複影響 net** |
| `bankName`、`bankAccountMasked` | 銀行與遮蔽後入帳帳號；不把身分證字號或帳號全文複製進結構欄位 |
| `originalScreenshotFileId`、`sourceType`、`sourceDate` | 私人來源影像 Google Drive file ID、來源類型、存證日期，保留來源可查性 |
| `memo` | 付款確認狀態、勞退、例外及補充說明 |

**核算規則（必驗）：** `sum(payItems.amount) === gross`；`sum(deductionItems.amount) === deductions`；`gross - deductions === net`。另需核對 `withheldIncomeTax` 與薪資所得稅扣款、員工自提與其扣款明細一致。當前 HTML 會在頁面渲染時檢查三項總額關係。

### 以後每月新增薪資單：固定操作流程

1. 讀根目錄 README、本 `records/README.md`、現行 GitHub `records/income/index.html` 和私人 Drive HTML 現行版本（`income-data`），確認月分、現有 `entries[]` 和 Drive metadata。
2. 讀使用者的新薪資單原件／照片，逐項核對給付、扣除、應稅、免稅、預扣稅、雇主公提／個人自提。**依記載日期與付款證據區分「薪資單已開立」與「銀行已入帳」**。
3. 查重 `period + type + source`，必要時核對雇主和同月第二張薪資單。已存在的記錄若屬更正，更新該筆並保留原來資訊備份，不重複追加。
4. 將新原圖以私人圖片格式存入同一 `文件／記事` 資料夾；核對 image file ID、MIME、parent、permissions。若是圖片預覽，留在**私人 HTML 裡**的 base64 WebP，勿放在公開 GitHub。
5. **對現行所得 HTML 先備份**：Drive `_backup`（folder ID `1st72qB2XA4sq7ZGzg-_i3FUDClrxKMNB`），例如 `2026所得記事_YYYYMMDD-HHMM_before-add-salary.html`；備份成功後才修改原檔。
6. 解析並更新 **相同原檔 ID** 的 `#income-data.entries[]`，維持現有資料、CSS、JS、證明資料與預覽；增補年份／月份資料並重核算所有總額。
7. 使用 Google Drive 原位 raw bytes update 保留**同一 File ID、檔名、parent、私人權限**；重新抓取檔案、解析 JSON、逐月核對、檢查網頁與圖片顯示。沒有原位寫入能力就停止並回報，勿刪除重上傳或產生失效新路徑。
8. 若只是新增薪資單，GitHub `records/income/index.html` 和 URL 均**無須變更**；只有新增年度入口／架構變更時才修改 GitHub。新增新年度時同步更新本 README 和根 README。

網站提供年／月份選擇、已建檔所得累積與兩側給付／扣除明細、稅務／退休金資訊、原始憑證預覽；**目前為唯讀**。未來若設計跨年所得彙總，需明確標註「已建檔」統計，不把未記錄月份視為零。

---

## 5. 新年度／更多財務領域的擴充

- `records/index.html` 是總導航；2026 的資料只在私人 Drive HTML；不要將交易明細複製到新站的公開 JS。
- 若是**同年度新增交易**，只更新既有原 HTML 的 JSON 及摘要；網址與原 File ID 不變。
- 若是**新年度（例如 2027）**，建議建立新的私人 HTML 檔於同一「記事」資料夾或該年度子資料夾，取得新的 Drive File ID，再新增專用 shell、總導航卡與 README 索引；也可先與使用者確認是否希望建立跨年綜合報表。
- 若是**其他財務主題**（資產、負債、保單、稅務、支出、定期繳費），可在 `records/` 新增卡片與對應私人 HTML／shell，與現有 2026 財務記事相同的 OAuth 架構，但各自保留清晰的資料模型與備份。
- 原 Word 檔為匯入來源快照。**現行網站以私人 HTML 為主要維護正本**；除非使用者要求，不必每次同步修改原 Word，避免多重版本互相衝突。

## 6. 現況與驗收邊界（2026-10-08）

- 原始 Word 的 5 個表格完整解構，其中交易明細、月度房貸和分類總表均保留於私人 HTML；來源是原始檔案，未把交易明細放進 GitHub。
- 私人 HTML：`2026記事_私人財務帳本.html`，現存 Drive ID 由第 1 節固定。
- 所得 HTML：`2026所得記事_私人薪資紀錄.html`，原始薪資單截圖另存同資料夾，兩者均 owner-only；有 Google 登入的私人 shell 路徑為 `records/income/`。
- 2026 主頁包括摘要、支出圖、交易搜尋／月度與狀態篩選、原始金額與備註、房貸月表、週期事項、CSV 匯出。
- 已以程式核對來源筆數、已確認／待確認合計、房貸累計，並做 Desktop / Mobile 模擬畫面與過濾條件測試；真實 Google OAuth 登入、iPhone Safari 實機體驗須在使用者已授權環境再驗證。
- GitHub 公開程式只包含 OAuth shell、入口導覽、README。勿將私人資料或測試截圖（含個人帳務內容）提交公開 GitHub。

最後更新：2026-10-08。若更新筆數、帳本 schema、年度網址或實際驗收狀態，應同步維護本文件。
