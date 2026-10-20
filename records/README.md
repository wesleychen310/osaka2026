# 小記事｜現行架構與跨對話更新 SOP（2026-10-20）

> **現行標準：公開 GitHub Pages OAuth 門禁 + Google Drive 單一私人 `小記事.html`。**
> 本 Repo 為公開程式庫。**不得提交私人原文、姓名、車牌、VIN、汽車維修細節、交易金額、薪資、持股、個人 JSON、截圖或完整私人 HTML**。下方 2026-10-12 文件僅作歷史參考，不得照舊版流程更新。

## 一、現行唯一入口、權限與檔案位置

| 功能 | 現行正本與用途 |
|---|---|
| 私人網站 | <https://wesleychen310.github.io/osaka2026/records/> |
| GitHub 公開登入程式 | `records/index.html` + `records/app.js`，使用 Google OAuth 2.0 `drive.readonly`；`private-auth-hint.js` 是共用登入提示 |
| Google Drive 私人主檔 | `小記事.html`，固定 File ID `1Va1OoRS1-gC6Qu5SA6_q3vfd82W7HDhA`（MIME `text/html`） |
| 私人記事父資料夾 | <https://drive.google.com/drive/folders/1ngQ4Tv0CrbCNDBItbAJqJLBhmmnJkUfU> |
| **現行** `_backup` | <https://drive.google.com/drive/folders/1WGqjPu-z2d2evUdMzxymqLYxiieCRnjd>；**勿使用已失效的舊備份資料夾 ID** |
| 汽車 Word 原始紀錄 | 另存於使用者的私人汽車資料夾；其 File ID 在私人 HTML 的 `bundle.car.sourceId` 中，不能向公開 GitHub 寫入原始內容 |
| 版本與部署 | 修改 GitHub shell／README 提交至 `main`，GitHub Pages 發布；私人記事日常增加紀錄只需更新同一個 Drive File ID |

目前 Drive 父資料夾的頂層只保留 `小記事.html` 與 `_backup`。備份內含更新前主檔；正式正本只有 **一個 HTML**。

## 二、五個私人記事主題（同一份 HTML）

| URL 參數 | 導覽名稱 | `bundle` 欄位 | 內容呈現 |
|---|---|---|---|
| `?tab=finance` | 財務記事 | `finance` | 完整嵌入舊財務 HTML，內含 `#ledger-data`、已付款／待付款、分類、總額與 CSV |
| `?tab=income` | 所得記事 | `income` | 完整嵌入舊薪資 HTML，含薪資、扣除、稅務、退休金與私有憑證 |
| `?tab=trust` | 信託股票 | `trust` | 私有 JSON，信託持股／市值歷史／提存／管理費，在私有 HTML 中用 JS 渲染 |
| `?tab=contacts` | 隱形眼鏡 | `contacts` | 私有來源文字及更換時間線 |
| **`?tab=car`** | **汽車** | **`car`** | 汽車 Word 來源全文、維修保養 14 筆、維修明細、車險稅費、輪胎、加油與待補項目 |

直接入口：<https://wesleychen310.github.io/osaka2026/records/?tab=car>。站內切換分頁不用重新登入；`records/app.js` 的 `allowed` 陣列必須同步維護。舊 `/records/finance/`、`/records/income/` 只是導向同一站對應分頁的相容網址。

## 三、技術結構與資料模型

瀏覽器載入 GitHub Pages `records/index.html` → `records/app.js` 透過 Google OAuth 取得 `drive.readonly` access token → Google Drive v3 `files/{FILE_ID}?alt=media` 取得私人 HTML bytes → `iframe.srcdoc` 嵌入私人單頁 → 內部讀取 `<script id="bundle" type="application/json">`，渲染五個分頁。

私有 `bundle` 欄位為：`schemaVersion`、`generatedAt`、`finance`、`income`、`trust`、`contacts`、`car`、`sourceIds`。
- `finance`、`income` 是原完整 HTML 的字串，會在內嵌 iframe 展示；不可只改 JSON 總額而忘記來源交易核對。
- `trust` 是 JSON object（快照與動態資料）；`contacts` 是來源文字。
- `car` 是 object：`schemaVersion`、`sourceText`、`sourceId`、`sourceName`、`sourceUpdatedAt`。來源文字採**原始表格的欄位次序與全部文字**，私有渲染函式 `car()` 將維修時間軸、明細、稅費、舊紀錄、分類摘要拆成表格，並保留全文折疊閱讀。
- `sourceIds` 包含歷史來源索引，不代表舊來源仍是網站正本。任何章節更新後，以主檔 `bundle` 為網頁正本。

## 四、更新 SOP（必遵守）

1. 先讀取現行 Google Drive 主檔，核對 File ID、父資料夾與 owner-only 權限；必要時比對該類別原始資料。
2. 在**現行** `_backup` 以 Drive `files.copy` 備份正式 `小記事.html`，檔名後加台灣時間及更新原因。**備份完成前，不覆蓋主檔**。
3. 解析原主檔 `#bundle`，僅修改本次主題欄位，保留其餘四個欄位不動。財務記帳須查重、逐筆重算，核對每個 `summaryOriginal` 與分類 totals；所得／信託依其原格式驗證。
4. 更新汽車時以最新可確認的 Word／工單為依據，保留里程、車牌、廠商、費用及原文；照片無法判讀的金額維持「待補」，不可臆測；**汽車歷年維修總額與財務記事的年度支出分開核算，避免雙重計入**。
5. 若來源時間不同或付款狀態衝突，保留來源原文、標註日期及較新的確認資訊。現有例：汽車文件 2026/10/03 仍將部分 2026/08/01 公路養管費列為待確認，財務記事 2026/10/08 已依本人確認更新。不得把舊記事的待確認覆蓋較新財務狀態。
6. 將修改後 HTML 作為 raw `text/html` 使用 Drive `files.update` **原位更新同一 ID**；不可新建另一個正式 `小記事.html` 或把原本的私人 HTML 放到 GitHub。
7. 回讀重新解析 `bundle`，核對五個主題均在、先前未改的資料 byte/text 一致、交易數與加總正確、汽車維修表及來源全文完整，並核對原檔名、File ID、parent、分享權限。
8. 僅在新增／變更分頁、路由或公開視覺框架時修改 GitHub `index.html`、`app.js`；如有結構調整，同步更新本 README 和 Repository 根 `README.md`。
9. 自動 QA 與真實登入測試分開回報。只有 GitHub commit 不代表 GitHub Pages 已完成部署；未驗證 iOS／Google OAuth 實機，不得宣稱通過。

## 五、現行程式與歷史紀錄

- 現行五頁皆在同一私人 HTML；公開 Repository 不保存任何汽車、財務或所得資料。
- `records/trust.js`、`records/trust.css` 是舊版公開外觀模組，目前信託渲染已打包在私人主 HTML 中，是否仍被其他頁面引用需先查證，勿直接刪除。
- 2026/10/18 完成四主題整合，2026/10/20 新增汽車第五主題。汽車原始 Word 保持原位置，不移入記事資料夾；私人網站的更新來源為單一整合主檔。
- 已失效舊版三檔操作紀錄列在下方，僅作歷史稽核，不可當作現行更新指令。

---

## 以下為 2026-10-12 舊版架構歷史記錄（非現行網站檔案配置）

# 私人記事｜財務、所得與信託股票 — 網站維護與跨對話 SOP

> 此文件為 `records/` 專用維護手冊；入口總表請先參考 Repository 根目錄 [README.md](../README.md)。更新日期：2026-10-12（台灣時間）。
>
> **安全規則：本 GitHub Repository 是公開的。所有個人交易明細、實際收支、姓名、車牌、帳號、付款截圖、憑證及私人 HTML 全文只能存放在具有權限控管的 Google Drive。不得貼進 GitHub 原始碼、README、公開 JSON、commit message 或其他公開資產。**

## 1. 計畫定位與固定入口

**這是一個可長期擴充的私人財務、所得／生活記事系統。** 資料本體是私人 Google Drive HTML，GitHub Pages 只放公開的導覽與 Google OAuth loader。未來可依年份新增 `records/finance/2027/` 等路由或獨立新帳本，維持 `records/` 作為統一目錄。

| 元件 | 永久網址／識別碼 | 職責 |
|---|---|---|
| **私人記事單一入口** | <https://wesleychen310.github.io/osaka2026/records/> | `records/index.html` + `records/app.js`；登入一次，切換支出／所得／信託股票三個分頁；GitHub 不含交易明細 |
| 2026 財務記事網站 | <https://wesleychen310.github.io/osaka2026/records/finance/> | `records/finance/index.html`；OAuth 門禁與私人 HTML 載入 |
| 私人資料主檔 | [2026記事_私人財務帳本.html](https://drive.google.com/file/d/1iW_TBvC_NO6s0PlAPLbRspfD_xYqQs_4/view) | **固定 Drive File ID：`1iW_TBvC_NO6s0PlAPLbRspfD_xYqQs_4`**；MIME `text/html`；網站唯一現行資料正本 |
| 2026 原始文件 | [2026記事.docx](https://docs.google.com/document/d/14_-8w1bTsxsKoj-wDWanL_L0bxYBV-qu/edit) | File ID：`14_-8w1bTsxsKoj-wDWanL_L0bxYBV-qu`；資料匯入時的來源快照，原檔保留 |
| 主資料夾 | [Google Drive／文件／記事](https://drive.google.com/drive/folders/1ngQ4Tv0CrbCNDBItbAJqJLBhmmnJkUfU) | Folder ID：`1ngQ4Tv0CrbCNDBItbAJqJLBhmmnJkUfU`；**HTML 與 Word 在同一資料夾** |
| 備份資料夾 | [記事／_backup](https://drive.google.com/drive/folders/1st72qB2XA4sq7ZGzg-_i3FUDClrxKMNB) | Folder ID：`1st72qB2XA4sq7ZGzg-_i3FUDClrxKMNB`；任何更新原 HTML 前先備份 |
| 共用登入輔助 | `private-auth-hint.js` | 記住上次 Google 帳號提示，不延長 token；各私人站共用 |
| 信託股票第三分頁 | <https://wesleychen310.github.io/osaka2026/records/?tab=trust> | `records/trust.js` 與 `records/trust.css` 均位於 GitHub，僅負責呈現／計算；持股明細留在私人 Drive。 |
| 信託股票私人資料 | [2026信託股票_私人資料](https://docs.google.com/document/d/1RgnSpArXb2YWmgLMnp7AGTU8kKYUv9OxWmPxnFvfgms/edit) | Google Docs，File ID `1RgnSpArXb2YWmgLMnp7AGTU8kKYUv9OxWmPxnFvfgms`，私人 JSON 純文字，置於「記事」資料夾，owner-only。 |
| 所得記事網站 | <https://wesleychen310.github.io/osaka2026/records/income/> | `records/income/index.html`；同一組 OAuth Client／共用帳號提示 |
| 所得記事私人 HTML | [2026所得記事_私人薪資紀錄.html](https://drive.google.com/file/d/12WhesQ3XEkxR9B7DhSs_wJXJUDIUKYMl/view) | Drive File ID：`12WhesQ3XEkxR9B7DhSs_wJXJUDIUKYMl`；MIME `text/html`；同一「記事」資料夾，**長期更新正本** |
| 薪資單原始存證 | [2026-10_薪資單_原始截圖.jpeg](https://drive.google.com/file/d/1_q6DSXfGTFKHoYewJ0Xp4px6FYyELSO4/view) | Drive File ID：`1_q6DSXfGTFKHoYewJ0Xp4px6FYyELSO4`；私人圖片，完整保留原始照片；目前只有螢幕截圖，尚未取得原 PDF |

### 架構（單一登入入口＋兩個私人資料來源）

```text
使用者 Safari / Desktop
  └─ GitHub Pages /records/（主要入口：records/index.html + records/app.js）
       ├─ Google OAuth 登入一次 → 私人 iframe 顯示支出／所得 tab
       ├─ 財務私人 HTML（獨立 Drive File ID；切分頁才下載）
       └─ 所得私人 HTML（獨立 Drive File ID；切分頁才下載）
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

**重要實作差異：** 首選的 `records/` 為**單一 Google OAuth 登入＋分頁**，由 `records/app.js` 取得私人 HTML 後放入同源 `iframe.srcdoc`、調整 iframe 高度，保留 CSS／JS 隔離；所得頁在此入口會隱藏只有少數月份時資訊量不高的圖表與重複導覽，完整原資料仍在 Drive。舊的 `records/finance/`、`records/income/` 直接網址仍保留，可從書籤打開，它們取回私人 HTML 後以 `document.open();document.write(html);document.close();` 替換登入畫面。ISLP 視覺筆記是另一路徑的 `DOMParser + manifest + shell-owned blob image loader`，兩者不可混成同一種渲染流程。


### 2026-10-08 簡化入口版

- 正式日常入口固定使用 `/records/`，**支出／所得兩個 tab，共用一次 OAuth**。前端檔案 `records/index.html` + `records/app.js` 均為公開且不含交易內容；Drive 私人 HTML 與來源照片沒有改動。
- 使用 `GET /drive/v3/files/{FILE_ID}?alt=media` 依需求下載所選類別，`cache:no-store`，只在瀏覽器記憶體暫存同次分頁所需 HTML；`iframe.srcdoc` 顯示，靠 `ResizeObserver` 跟隨內容高度。Google 授權與帳號提示延續其他網站相同的 sessionStorage/localStorage 原則。
- 在統一入口中只做**呈現層的簡化**：隱藏來源 HTML 重複的 header/長導言/所得月份圖（原圖表原始碼與每筆所得明細仍保留在私人 Drive），不更動資料結構或記帳計算。直達深層舊網址仍保持向下相容。
- 未來新增所得或財務資料，只需更新各自既有 Drive HTML；首頁與 GitHub loader 無須動。若要永久調整私有 HTML 原版，**先備份同一 `_backup` 再原檔更新**，勿將交易資料寫入公開 GitHub。

## 2. 資料格式（private HTML 內）

資料區塊：`<script type="application/json" id="ledger-data"> ... </script>`。JSON 屬於**私人 HTML 的一部分**，不能拆出另放 GitHub。

| Key | 型態與意義 |
|---|---|
| `schemaVersion` | number；目前為 `1`，更動 schema 須同步更新前端 renderer |
| `year`、`title`、`sourceUpdatedAt` | 年份、顯示標題及最後記帳日期（`YYYY-MM-DD`） |
| `sourceFileName`、`sourceFileId` | 初始 DOCX 的來源追溯資訊 |
| `transactions` | array；唯一交易明細正本；UI 的已付款／明確未付款、月度、類別圖均據此計算 |
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

> **2026-10-08 使用者明確訂正：『交易明細我傳上去就是已付款』。** 這是往後所有財務交易匯入的優先認列規則，不得恢復為「未附付款證明＝待確認」的舊邏輯。所得記事的「薪資單發薪日 vs 實際銀行入帳」仍是另一種資料類型，依使用者的所得記帳指示處理。

- **核心預設：使用者主動提供／要求登錄的交易明細，直接視為已付款。** `status='confirmed'`、`paid` 記載實際金額，`pendingAmount=0`。即使來源附圖只有查詢畫面，也應遵循使用者明確的付款聲明；點數全額折抵的現金實付可為 0，仍是已完成交易。
- **只有使用者明確說「還沒繳／待付款／尚未扣款」才設定 `status='pending'`**：此時 `paid=0`，`pendingAmount` 保存未付款金額。不得因缺少付款成功截圖就擅自標記為待確認。付款日期不詳，可在備註註明「付款日未另附」，但狀態仍為已付款。
- `billed` 保留原訂單／應繳金額；`amountText` 原樣保留「訂單／實付」紀錄，勿把優惠折扣、點數折抵混成現金支出。
- `id` 與 `no` 一律唯一、不可回收；新增 2026 交易從現存最大編號 +1 起，年份改變時先決定採跨年資料模型或獨立年度網站，避免同 ID。
- 原文可能有交易日期與文件編排順序不同的狀況，應保留原始 `no` 並允許 UI 依日期檢視，勿靜默重排原始記錄的來源順序。
- 對於付款狀態更正，**使用者在對話中明確確認已付款即構成記帳依據**；應更新原交易、`statusNote`、摘要與類別總計，避免重複記帳。來源證明類型可留在備註供日後追溯。
- 任何版本新增交易，都要重新核算：`confirmedPaid = sum(transactions.paid)`，`pending = sum(transactions.pendingAmount)`，`ledgerTotal = confirmedPaid + pending`；付款筆數與各類別須一致。前端會檢查 `summaryOriginal` 控制總額是否一致，若不一致將使儀表板初始化中斷，故務必同步維護。

## 3. 每次新對話新增一筆財務紀錄 — 固定 SOP

1. 讀根目錄 [README.md](../README.md) 與本頁；即時讀 `records/finance/index.html`、Google Drive 私人 HTML 正本、Drive metadata、既有交易 JSON 與備份資料夾。**先核對最新資料，不依賴上次對話的過期數值**。
2. 從使用者提供的文字、交易明細或付款憑證提取**日期／項目／應付金額／實付／付款方式／分類／備註**。**交易明細預設已付款**；只有使用者明確註明未付款才採 `pending`。單純缺少付款憑證，或原始圖像顯示查詢畫面，不應覆蓋使用者已付款的說明。缺少日期、方式等欄位可註記未提供，無須把付款狀態改成待確認。
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

網站提供年／月份選擇、給付與扣除逐項明細、稅務／退休金資訊、原始憑證預覽；**目前為唯讀**。從 `records/` 單一入口進入時以簡潔分頁呈現，原有私人 HTML 與原始資料保持完整。未來若設計跨年所得彙總，需明確標註「已建檔」統計，不把未記錄月份視為零。

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
- 2026-10-08 已依使用者確認修正三筆原先誤標 `pending` 的公路養管費；正式 HTML **29 筆已付款、0 筆待付款**，已核對交易總額、分類與房貸累計，原位保留 File ID。原版 Desktop / Mobile 模擬畫面測試屬於初版；此次修正進行 HTML/JS 靜態核對及 Drive 回讀驗證，真實 Google OAuth 與 iPhone Safari 尚待實機測試。
- GitHub 公開程式只包含 OAuth shell、入口導覽、README。勿將私人資料或測試截圖（含個人帳務內容）提交公開 GitHub。

最後更新：2026-10-08。若更新筆數、帳本 schema、年度網址或實際驗收狀態，應同步維護本文件。

## 7. 信託股票（2026-10-12 新增）

- 正式分頁：<https://wesleychen310.github.io/osaka2026/records/?tab=trust>。與支出及所得共用 Google OAuth、sessionStorage token，切換時才取資料；支出、所得的私人 HTML 不變。
- GitHub 公開檔案：`records/index.html` 導覽與 DOM、`records/app.js` Google OAuth／路由、`records/trust.css` 響應式樣式、`records/trust.js` 純呈現及計算程式。**嚴禁把任何持股數量、金額、原始對帳單、姓名、私人資料 JSON 或憑證放到公開 GitHub。**
- 私人正本：Google Docs `2026信託股票_私人資料`；File ID `1RgnSpArXb2YWmgLMnp7AGTU8kKYUv9OxWmPxnFvfgms`。置於 `記事` 資料夾 `1ngQ4Tv0CrbCNDBItbAJqJLBhmmnJkUfU`，繼承本人權限且已核對為 owner-only。此檔**完整正文就是 JSON**；`schemaVersion=1`、`referencePrice`、`asOf`、`statementDate`、`accounts[].holdings[]`、`activity[]`、`fees[]`、`notes[]`、`lastUpdated`。每筆 holdings 包含 id/category/principal/subscription/shares/cash/statementValue。
- 裝置端由 `records/app.js` 使用 Drive v3 `files.export`、`mimeType=text/plain` 讀取私人 Google Docs；UTF-8 BOM 會先移除，再 `JSON.parse`；驗證資料格式與 `round(shares × referencePrice + cash) ≈ statementValue`，由 `trust.js` 計算總市值、本金、股數、現金、帳面增值、參考報酬率，並顯示提存／買入與管理費；輸入的試算股價不儲存或寫回資料。
- 來源是使用者 2026-10-12 提供之 **2026 年 9 月**兩份台新銀行員工福利信託對帳單截圖，基準日 `2026-09-30`，報表製作日 `2026-10-02`。原始截圖仍在使用者對話，尚無已核實的 Drive 原始 PDF ID；不可虛構來源檔案。
- **未來新增每月對帳單**：從 Google Docs 取回完整私人 JSON、比對基準日與分類 id，避免重複或把累計餘額當當月流量；新增或更正 `accounts`、`activity`、`fees`。在同層 `_backup`（ID `1st72qB2XA4sq7ZGzg-_i3FUDClrxKMNB`）先建立含時間＋理由的**完整 Drive 文件副本**，再以 Docs `batchUpdate` 原位更新同一 File ID、原檔名、父資料夾、owner-only 權限。讀回、檢驗 JSON 與數字後才算完成；只有介面改動才需要修改 GitHub。
- **核算與解讀**：參考市值包含剩餘現金；參考報酬率使用報表定義、以累計本金及認購金額為成本基礎，含公司獎勵等來源，不能直接當作個人現金投入的 XIRR；股利另依對帳單註記處理。若持股轉出或來源有異動，必須核對對帳單本身。
- **驗收邊界**：已由 Docs Connector 完成 JSON 寫入、純文字匯出、私人權限與 parent 驗證；公開程式已寫入 GitHub，仍需檢查 GitHub Pages 實際部署及真實 iPhone Safari Google 登入，未測不得宣稱通過。


### 2026-10-12 版面簡化與逐月快照（v2）

- 首屏以兩個信託帳戶獨立顯示股數、市值、本金及剩餘現金；員工提存與公司獎勵可展開，不再使用五項冗餘摘要、占比長條、股價情境試算與大量說明卡片。
- 私人 Google Docs 原檔 ID 不變，已新增 `snapshots[]`，第一期 `2026-09-30`；每期物件存 `asOf`、`statementDate`、`referencePrice`、`accounts[]`，完整保留兩帳戶及 holdings 明細。`accounts` 頂層舊欄位保留相容；渲染以 `snapshots[]` 優先。
- 新月份：先查基準日是否存在；同日期更新該快照，不同日期新增後排序，**禁止覆寫過往快照**。逐期保留原始股數、市值、本金、現金；月度趨勢提供市值／股數／本金切換及明細表；單月不畫虛構趨勢。
- 每次編輯私人 Google Docs 必須先備份到同層 `_backup`，使用 Docs API 原檔更新、讀回確認 JSON、權限與資料完整性。比較市值差額不直接等同報酬率，因為期間有提存與買賣。
- 本次備份 ID `1SyWCLs20CAwMzpG4YRfuf5SahrnoV4lfSaigqwwg6kU`，於 2026-10-12 建立；同一私人正本 File ID `1RgnSpArXb2YWmgLMnp7AGTU8kKYUv9OxWmPxnFvfgms`。GitHub `trust.js`/`trust.css` 更新；iPhone 實機 OAuth 仍待驗收。
