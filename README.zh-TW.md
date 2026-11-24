# GPS Track Studio

**版本：** `v0.1.0` · **狀態：** BETA

**繁體中文** | [English](README.md)

GPS Track Studio 是一款輕量、以瀏覽器為基礎的 GPS 軌跡檢視與編輯工具。可以匯入、檢視、整理、編輯及匯出 GPS 軌跡，不需要將定位檔案上傳至應用程式伺服器。

**線上使用：** <https://x1ngz-dev.github.io/gps-track-studio/>  
**GitHub 專案：** <https://github.com/x1ngz-dev/gps-track-studio>

## 功能特色

- 匯入 NMEA（`.nmea`、`.log`、`.txt`）、GPX 與 KML 檔案
- 使用 MapLibre 互動式地圖檢視多條 GPS 軌跡
- 個別顯示或隱藏軌跡，並支援單選及多選
- 使用預設色票或 RGB／HEX 色彩選擇器自訂軌跡顏色
- 顯示起點、終點標記、點位數量、距離及時間範圍
- 合併選取的軌跡，保留每條軌跡內部的點位順序
- 反轉軌跡方向，並在條件允許時同步維持時間順序
- 在地圖上選取節點以分割軌跡
- 依指定分鐘數平移軌跡時間
- 匯出 GPX 與 KML
- 選擇顯示時區，底層時間資料仍以 UTC 儲存
- 依目前地圖畫面擷取快照並列印
- 顯示經緯網格、游標座標及海里比例尺
- 支援繁體中文與英文介面即時切換

## 快速開始

使用現代瀏覽器開啟 [GPS Track Studio 網頁](https://x1ngz-dev.github.io/gps-track-studio/)，選擇檔案或將 NMEA、GPX、KML 檔案拖放到匯入區域即可開始使用。

若要在本機執行，可以直接開啟 `index.html`，或啟動靜態伺服器：

```bash
python -m http.server 8000
```

接著瀏覽 <http://localhost:8000>。地圖樣式及 MapLibre 程式庫需要網際網路連線；軌跡解析與編輯則在瀏覽器本機完成。

## 支援格式

| 格式 | 匯入 | 匯出 | 說明 |
|---|---:|---:|---|
| NMEA | 支援 | 不支援 | 支援常見 RMC／GGA 記錄；沒有日期的檔案會暫以目前 UTC 日期補值 |
| GPX | 支援 | 支援 | 讀取軌跡點與路線點 |
| KML | 支援 | 支援 | 目前匯入常見的 `LineString` 軌跡 |

## 操作說明

- 點選軌跡列，可將該軌跡設為目前作用中的軌跡。
- 使用 Ctrl／⌘ 加點選可多選；使用 Shift 加點選可選取連續範圍。
- 使用軌跡旁的核取方塊控制顯示或隱藏，不會改變目前作用中的軌跡。
- 匯出時，若有選取軌跡則只匯出選取項目；否則匯出全部軌跡。
- 顯示時區只影響畫面呈現，時間資料仍以 UTC 儲存。
- 列印功能會擷取當下地圖畫面，並以等比例方式放入列印頁面。

## 底圖與資料來源標示

地圖使用 [MapLibre GL JS](https://maplibre.org/)，並載入 [OpenFreeMap](https://openfreemap.org/) 提供的公開底圖樣式。OpenFreeMap 為社群營運的公開服務，採盡力提供方式運作，無法保證服務可用性或效能。

請保留地圖上的資料來源標示。OpenStreetMap 資料採用 Open Database License（ODbL）。

- [OpenFreeMap](https://openfreemap.org/)
- [OpenStreetMap 版權與授權](https://www.openstreetmap.org/copyright)
- [OpenStreetMap Tile 使用政策](https://operations.osmfoundation.org/policies/tiles/)

## 資料與隱私

選取的檔案會在使用者瀏覽器中解析與編輯。本專案不提供應用程式檔案上傳端點、帳號系統或雲端專案儲存功能。請勿將私人 GPS 軌跡或敏感位置資訊提交至公開儲存庫。底圖圖磚與樣式會由公開第三方服務載入。

## 目前限制

- 尚未實作單點拖曳、新增／刪除點位及依範圍裁切軌跡。
- 尚未實作復原／重做及專案儲存／載入。
- 沒有日期的 NMEA 記錄會使用目前 UTC 日期補值；正式使用前請先確認日期。
- KML 匯入目前以常見的 `LineString` 軌跡為主。
- OpenFreeMap 是第三方服務，地圖功能需要網際網路連線。

## GitHub Pages 部署

本專案使用 `.github/workflows/deploy.yml` 中的 GitHub Actions 工作流程部署。完成 GitHub Pages 設定並選擇 **GitHub Actions** 作為來源後，推送至 `main` 分支即可自動部署靜態網站。

**線上使用：** <https://x1ngz-dev.github.io/gps-track-studio/>

## 開發規劃

1. 編輯個別點位、依範圍裁切軌跡，以及加入復原／重做
2. 加入軌跡統計、異常偵測及時間軸播放
3. 加入專案儲存／載入並強化匯入／匯出驗證
4. 改善大量點位檔案的處理效能

## 授權

本儲存庫尚未選定軟體授權。在新增授權檔案之前，原始碼仍受預設著作權規則保護。地圖資料與第三方函式庫則各自適用其授權條款。
