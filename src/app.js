(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const LANGUAGE_KEY = "gps-track-studio-language";
  let language = "zh-TW";
  try { const savedLanguage = localStorage.getItem(LANGUAGE_KEY); if (savedLanguage === "en" || savedLanguage === "zh-TW") language = savedLanguage; } catch (_) {}
  const translations = {"zh-TW":{"brandSubtitle":"GPS 軌跡檢視與整理工具","betaTitle":"測試版本","fitAll":"縮放至全部","export":"匯出","exportHelp":"有選取軌跡時只匯出選取項目；否則匯出全部。","exportGpx":"匯出 GPX","exportKml":"匯出 KML","printMap":"列印地圖","language":"語言","languageLabel":"繁體中文","languageZh":"繁體中文","languageEn":"English","github":"GitHub 專案","clearAll":"清除全部","importTracks":"匯入航跡","multiFileDrop":"支援多檔案拖放","offlineParsing":"離線解析","dropSelect":"選擇檔案或拖放到這裡","uploadFormats":"NMEA / GPX / KML","noDataLoaded":"尚未匯入資料","trackList":"軌跡清單","trackCount":"{count} 條軌跡","merge":"合併","mergeCount":"合併 {count} 條","mergeButtonTitle":"合併已選取的軌跡（Ctrl／⌘ 點選多選，Shift 點選範圍選取）","emptyTracks":"尚未匯入軌跡，請拖放檔案至上方區域。","trackTools":"軌跡工具","reverse":"反轉方向","adjustTime":"調整時間","split":"分割軌跡","normalHint":"先選取一條軌跡即可使用工具。分割模式下，點選軌跡上的節點可從該點分割。","utcStorage":"時間資料以 UTC 儲存","timeZone":"顯示時區","mapAria":"GPS 軌跡地圖","basemap":"底圖","grid":"經緯網格","dialogShiftTitle":"調整軌跡時間","dialogShiftHelp":"輸入正數代表延後，負數代表提前。時間戳仍以 UTC 儲存。","minutes":"平移分鐘數","cancel":"取消","apply":"套用","dialogSplitTitle":"分割軌跡","splitQuestion":"是否從選取節點分割軌跡？","confirmSplit":"分割","systemTimeZone":"系統時區","timeZoneAuto":"系統自動","commonTimeZones":"常用時區","allTimeZones":"所有支援時區","timeZoneAutoSummary":"系統自動：{zone}","timeZoneCurrentSummary":"目前顯示：{zone}","timezoneUnsupported":"所選時區不受此瀏覽器支援，已改回系統自動。","nmeaNoValid":"找不到有效的 NMEA 定位資料（RMC/GGA）","nmeaNoDateWarning":"此檔案沒有日期資訊，暫以目前 UTC 日期補值，請先核對日期。","gpxXmlError":"GPX XML 格式錯誤","gpxNoTrack":"GPX 中沒有可讀取的軌跡點","kmlXmlError":"KML XML 格式錯誤","kmlNoLine":"KML 中找不到可用的 LineString","noValidTrack":"軌跡沒有有效座標","importResult":"已匯入 {count} 條軌跡","fileWarning":"{name}：{message}","fileError":"{name}：{message}","importFailed":"匯入失敗：","timeNotProvided":"時間未提供","selectedCount":" · 已選取 {count}","pointDistance":"{count} 點 · {distance} NM","startTime":"起 {time}","endTime":"迄 {time}","timeRangeMissing":"起訖時間未提供","deleteTrack":"刪除這條軌跡","deleteAria":"刪除 {name}","delete":"刪除","confirmDelete":"確定刪除軌跡「{name}」？","deletedTrack":"已刪除軌跡：「{name}」。","splitModeEnd":"結束分割模式","splitModeHint":"移到節點可預覽時間與座標；點擊節點即可分割，分割點會保留在兩段。","trackSelectionHint":"點選軌跡列可設為目前軌跡；Ctrl／⌘ 點選多選或 Shift 範圍選取，再按「合併」。","selectTwoTracks":"請先使用 Ctrl／⌘ 點選至少兩條軌跡，或 Shift 點選一段範圍。","mergedTrackName":"合併軌跡","mergeSuccessChronological":"已合併 {count} 條軌跡，共 {points} 點。依各軌跡起始時間排序，並保留每條軌跡內部點序。","mergeSuccessList":"已合併 {count} 條軌跡，共 {points} 點。依軌跡清單順序串接，保留每條軌跡內部點序；時間不完整或有重疊，未將各軌跡點位交錯排序。","selectMiddlePoint":"請選擇軌跡中間的點進行分割。","splitDialogDescription":"將在第 {index} 點分割「{name}」。分割點會保留在兩段軌跡中。","pointTitle":"{name} · 第 {index} 點","pointNotSplittable":" · 起訖點不可分割","timeLabel":"時間：{time}","latitudeLabel":"緯度：{coordinate}","longitudeLabel":"經度：{coordinate}","splitSuccess":"軌跡已分割為兩段。","shiftSuccess":"已平移 {minutes} 分鐘；座標與點位順序未變更。","mapNotReady":"地圖尚未準備完成，請稍後再試。","mapCaptureError":"無法擷取目前地圖畫面，請重新整理後再試。","mapImageError":"地圖列印影像載入失敗，請再試一次。","mapLibraryError":"地圖程式載入失敗；請確認網路連線後重新整理。","confirmClear":"確定要清除所有軌跡嗎？","clearSuccess":"已清除所有軌跡。","reverseAsc":"方向與時間已反轉；保留原始起訖時間及總時長，並讓新方向的時間維持遞增。","reverseDesc":"方向已反轉；原始時間本來是倒序，反轉點位後已恢復為遞增順序。","reverseSame":"方向已反轉；所有點的時間相同，因此時間值不需變更。","reverseNoTime":"方向已反轉；這條軌跡沒有時間資料可調整。","reverseFewTimes":"方向已反轉；有效時間資料不足兩筆，因此保留原時間值。","reverseIrregular":"方向已反轉；原始時間點並非依序排列，為避免破壞資料，保留各點原時間值。","splitModeStatus":"分割模式：移到節點可預覽座標與時間，點擊即可分割。","splitModeExited":"已離開分割模式。","splitMarkerLabel":"GPS 軌跡地圖列印畫面","pageDescription":"GPS Track Studio — 輕量、以瀏覽器為基礎的 GPS 軌跡檢視與編輯工具。","trackRowTitle":"點選設為目前軌跡；Ctrl／⌘ 點選可多選，Shift 點選可範圍選取","visibility":"顯示／隱藏軌跡","visibilityAria":"顯示或隱藏 {name}","trackColors":"軌跡顏色","setColor":"設定顏色 {color}","customRgb":"自訂 RGB／HEX 顏色","customTrackColor":"自訂軌跡顏色"},"en":{"brandSubtitle":"GPS Track Viewer & Editor","betaTitle":"Beta release","fitAll":"Fit All Tracks","export":"Export","exportHelp":"When tracks are selected, only selected tracks are exported. Otherwise, all tracks are exported.","exportGpx":"Export GPX","exportKml":"Export KML","printMap":"Print Map","language":"Language","languageLabel":"English","languageZh":"繁體中文","languageEn":"English","github":"GitHub Repository","clearAll":"Clear All","importTracks":"Import Tracks","multiFileDrop":"Drag and drop multiple files","offlineParsing":"Local Processing","dropSelect":"Choose files or drop them here","uploadFormats":"NMEA / GPX / KML","noDataLoaded":"No tracks imported","trackList":"Track List","trackCount":"{count} track(s)","merge":"Merge","mergeCount":"Merge {count}","mergeButtonTitle":"Merge selected tracks (Ctrl/⌘-click to select multiple; Shift-click to select a range)","emptyTracks":"No tracks imported yet. Drop files in the area above.","trackTools":"Track Tools","reverse":"Reverse Direction","adjustTime":"Adjust Time","split":"Split Track","normalHint":"Select a track to use the tools. In split mode, click a point on the track to split it.","utcStorage":"Timestamps are stored in UTC","timeZone":"Display Time Zone","mapAria":"GPS track map","basemap":"Basemap","grid":"Coordinate Grid","dialogShiftTitle":"Adjust Track Time","dialogShiftHelp":"Positive values move timestamps forward; negative values move them backward. Timestamps remain stored in UTC.","minutes":"Offset in minutes","cancel":"Cancel","apply":"Apply","dialogSplitTitle":"Split Track","splitQuestion":"Split the track at the selected point?","confirmSplit":"Split","systemTimeZone":"System time zone","timeZoneAuto":"System Default","commonTimeZones":"Common Time Zones","allTimeZones":"All Supported Time Zones","timeZoneAutoSummary":"System default: {zone}","timeZoneCurrentSummary":"Displaying: {zone}","timezoneUnsupported":"This time zone is not supported by your browser. The system default has been restored.","nmeaNoValid":"No valid NMEA positioning data found (RMC/GGA).","nmeaNoDateWarning":"This file has no date information. The current UTC date was used as a fallback; please verify the date.","gpxXmlError":"Invalid GPX XML.","gpxNoTrack":"No readable track points found in the GPX file.","kmlXmlError":"Invalid KML XML.","kmlNoLine":"No usable LineString found in the KML file.","noValidTrack":"The track contains no valid coordinates.","importResult":"Imported {count} track(s)","fileWarning":"{name}: {message}","fileError":"{name}: {message}","importFailed":"Import errors:","timeNotProvided":"Time not provided","selectedCount":" · {count} selected","pointDistance":"{count} points · {distance} NM","startTime":"Start {time}","endTime":"End {time}","timeRangeMissing":"Start/end time not provided","deleteTrack":"Delete this track","deleteAria":"Delete {name}","delete":"Delete","confirmDelete":"Delete track “{name}”?","deletedTrack":"Deleted track: “{name}”.","splitModeEnd":"Exit Split Mode","splitModeHint":"Hover over a point to preview its coordinates and time. Click a point to split; the split point is kept in both tracks.","trackSelectionHint":"Click a track row to make it active. Ctrl/⌘-click to select multiple tracks or Shift-click for a range, then choose Merge.","selectTwoTracks":"Use Ctrl/⌘-click to select at least two tracks, or Shift-click to select a range.","mergedTrackName":"Merged Tracks","mergeSuccessChronological":"Merged {count} track(s), {points} points total. Tracks were ordered by start time, preserving each track's internal point order.","mergeSuccessList":"Merged {count} track(s), {points} points total. Tracks were concatenated in list order, preserving each track's internal point order. Timestamps were incomplete or overlapping, so individual points were not interleaved.","selectMiddlePoint":"Select a point inside the track to split it.","splitDialogDescription":"Split “{name}” at point {index}. The split point will be kept in both tracks.","pointTitle":"{name} · Point {index}","pointNotSplittable":" · Start and end points cannot be split","timeLabel":"Time: {time}","latitudeLabel":"Latitude: {coordinate}","longitudeLabel":"Longitude: {coordinate}","splitSuccess":"The track has been split into two tracks.","shiftSuccess":"Shifted timestamps by {minutes} minute(s). Coordinates and point order are unchanged.","mapNotReady":"The map is not ready yet. Please try again in a moment.","mapCaptureError":"Unable to capture the current map. Please refresh and try again.","mapImageError":"The map print image failed to load. Please try again.","mapLibraryError":"The map library failed to load. Check your internet connection and refresh the page.","confirmClear":"Clear all tracks?","clearSuccess":"All tracks have been cleared.","reverseAsc":"Direction and timestamps were reversed. The original start/end time and duration were preserved, with timestamps increasing along the new direction.","reverseDesc":"Direction reversed. The original timestamps were descending and are now increasing along the reversed track.","reverseSame":"Direction reversed. All points share the same timestamp, so no timestamp changes were needed.","reverseNoTime":"Direction reversed. This track has no timestamps to adjust.","reverseFewTimes":"Direction reversed. Fewer than two valid timestamps were available, so the original values were kept.","reverseIrregular":"Direction reversed. The original timestamps were not sequential, so their values were kept to avoid altering the data.","splitModeStatus":"Split mode: hover over a point to preview its coordinates and time; click a point to split the track.","splitModeExited":"Split mode ended.","splitMarkerLabel":"GPS track map print image","pageDescription":"GPS Track Studio — a lightweight, browser-based GPS track viewer and editor.","trackRowTitle":"Click to make this the active track. Ctrl/⌘-click selects multiple tracks; Shift-click selects a range.","visibility":"Show/hide track","visibilityAria":"Show or hide {name}","trackColors":"Track colors","setColor":"Set color {color}","customRgb":"Custom RGB/HEX color","customTrackColor":"Custom track color"}};
  function t(key, values) {
    const dictionary = translations[language] || translations["zh-TW"];
    let message = dictionary[key] || translations["zh-TW"][key] || key;
    if (values) Object.entries(values).forEach(([name, value]) => { message = message.replaceAll("{" + name + "}", String(value)); });
    return message;
  }
  let lastStatus = null;
  function applyLanguage(nextLanguage, persist) {
    language = nextLanguage === "en" ? "en" : "zh-TW";
    if (persist !== false) { try { localStorage.setItem(LANGUAGE_KEY, language); } catch (_) {} }
    document.documentElement.lang = language === "en" ? "en" : "zh-Hant";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = t("pageDescription");
    document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = t(node.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-title]").forEach((node) => { node.title = t(node.getAttribute("data-i18n-title")); });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => { node.setAttribute("aria-label", t(node.getAttribute("data-i18n-aria-label"))); });
    $("languageLabel").textContent = t("languageLabel");
    $("languageButton").setAttribute("aria-label", t("language"));
    $("languageZhBtn").setAttribute("aria-pressed", language === "zh-TW" ? "true" : "false");
    $("languageEnBtn").setAttribute("aria-pressed", language === "en" ? "true" : "false");
    timeFormatter = createTimeFormatter();
    initializeTimeZones();
    if (lastStatus) renderStatus();

    if ($("trackList")) render();
  }
  function setLanguage(nextLanguage) {
    applyLanguage(nextLanguage, true);
    $("languageDropdown").open = false;
  }

  const colors = ["#e45757", "#2878b8", "#169b76", "#d99427", "#8a63ba", "#cf6096", "#0f8b8d", "#7a8f30"];
  const styles = {
    liberty: "https://tiles.openfreemap.org/styles/liberty",
    bright: "https://tiles.openfreemap.org/styles/bright",
    positron: "https://tiles.openfreemap.org/styles/positron"
  };
  const DAY = 86400000;
  let map = null;
  let tracks = [];
  let activeId = null;
  let splitMode = false;
  let splitTarget = null;
  let colorIndex = 0;

  const TIMEZONE_KEY = "gps-track-studio-timezone";
  let displayTimeZone = "auto";
  try {
    displayTimeZone = localStorage.getItem(TIMEZONE_KEY) || "auto";
  } catch (_) {
    // Storage may be unavailable in private or restricted browsing contexts.
  }

  function createTimeFormatter() {
    const options = {
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: false
    };
    if (displayTimeZone !== "auto") options.timeZone = displayTimeZone;
    return new Intl.DateTimeFormat(language === "en" ? "en-US" : "zh-TW", options);
  }

  let timeFormatter;
  try {
    timeFormatter = createTimeFormatter();
  } catch (_) {
    displayTimeZone = "auto";
    timeFormatter = createTimeFormatter();
  }

  function currentSystemTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || t("systemTimeZone");
  }

  function updateTimeZoneSummary() {
    $("timezoneSummary").textContent = displayTimeZone === "auto"
      ? t("timeZoneAutoSummary", { zone: currentSystemTimeZone() })
      : t("timeZoneCurrentSummary", { zone: displayTimeZone });
  }

  function initializeTimeZones() {
    const select = $("timeZoneSelect");
    const common = ["UTC", "Asia/Taipei", "Asia/Tokyo", "Asia/Singapore", "Europe/London", "America/Los_Angeles", "America/New_York"];
    let supported = [];
    try {
      if (typeof Intl.supportedValuesOf === "function") supported = Intl.supportedValuesOf("timeZone");
    } catch (_) {
      supported = [];
    }

    select.replaceChildren();
    const automatic = document.createElement("option");
    automatic.value = "auto";
    automatic.textContent = t("timeZoneAuto");
    select.append(automatic);

    const commonGroup = document.createElement("optgroup");
    commonGroup.label = t("commonTimeZones");
    const allGroup = document.createElement("optgroup");
    allGroup.label = t("allTimeZones");
    const added = new Set();
    common.forEach((zone) => {
      const option = document.createElement("option");
      option.value = zone;
      option.textContent = zone;
      commonGroup.append(option);
      added.add(zone);
    });
    supported.filter((zone) => !added.has(zone)).forEach((zone) => {
      const option = document.createElement("option");
      option.value = zone;
      option.textContent = zone;
      allGroup.append(option);
    });
    select.append(commonGroup);
    if (allGroup.children.length) select.append(allGroup);

    const allowed = new Set(["auto", ...common, ...supported]);
    if (!allowed.has(displayTimeZone)) displayTimeZone = "auto";
    select.value = displayTimeZone;
    try {
      timeFormatter = createTimeFormatter();
    } catch (_) {
      displayTimeZone = "auto";
      select.value = "auto";
      timeFormatter = createTimeFormatter();
    }
    updateTimeZoneSummary();
  }

  function setDisplayTimeZone(value) {
    displayTimeZone = value || "auto";
    try {
      timeFormatter = createTimeFormatter();
    } catch (_) {
      displayTimeZone = "auto";
      timeFormatter = createTimeFormatter();
      $("timeZoneSelect").value = "auto";
      status("timezoneUnsupported", true);
    }
    try {
      localStorage.setItem(TIMEZONE_KEY, displayTimeZone);
    } catch (_) {
      // The setting still applies for this page session.
    }
    updateTimeZoneSummary();
    render();
  }

  function renderStatus() {
    if (!lastStatus) return;
    let message;
    if (lastStatus.key === "importSummary") {
      const values = lastStatus.values;
      message = t("importResult", { count: values.count });
      if (values.warnings.length) {
        message += "\\n" + values.warnings.map((item) =>
          t("fileWarning", { name: item.name, message: item.key ? t(item.key) : item.message })
        ).join("\\n");
      }
      if (values.errors.length) {
        message += "\\n" + t("importFailed") + "\\n" + values.errors.map((item) =>
          t("fileError", { name: item.name, message: item.key ? t(item.key) : item.message })
        ).join("\\n");
      }
    } else {
      message = t(lastStatus.key, lastStatus.values);
    }
    $("statusMessage").textContent = message;
    $("statusMessage").style.color = lastStatus.bad ? "#a63d3d" : "";
  }

  function status(key, bad, values) {
    lastStatus = { key, bad: Boolean(bad), values: values || null };
    renderStatus();
  }

  function localizedError(key) {
    const error = new Error(t(key));
    error.translationKey = key;
    return error;
  }

  function makeId() {
    return (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random());
  }

  function validPoint(p) {
    return p && Number.isFinite(p.lat) && Number.isFinite(p.lon) &&
      Math.abs(p.lat) <= 90 && Math.abs(p.lon) <= 180;
  }

  function coordinate(value, direction) {
    if (!value || !direction) return null;
    const raw = Number(value);
    if (!Number.isFinite(raw)) return null;
    const degrees = Math.floor(raw / 100);
    const minutes = raw - degrees * 100;
    if (minutes < 0 || minutes >= 60) return null;
    let result = degrees + minutes / 60;
    if (direction === "S" || direction === "W") result *= -1;
    return result;
  }

  function nmeaDate(value) {
    if (!/^\d{6}$/.test(value || "")) return null;
    const day = Number(value.slice(0, 2));
    const month = Number(value.slice(2, 4));
    let year = Number(value.slice(4, 6));
    year += year >= 80 ? 1900 : 2000;
    const test = new Date(Date.UTC(year, month - 1, day));
    if (test.getUTCFullYear() !== year || test.getUTCMonth() !== month - 1 || test.getUTCDate() !== day) return null;
    return [year, month, day];
  }

  function nmeaTime(value) {
    const match = /^(\d{2})(\d{2})(\d{2})(?:\.(\d+))?$/.exec(value || "");
    if (!match) return null;
    const hour = Number(match[1]), minute = Number(match[2]), second = Number(match[3]);
    if (hour > 23 || minute > 59 || second > 59) return null;
    const fraction = Number(("0." + (match[4] || "0"))) * 1000;
    return hour * 3600000 + minute * 60000 + second * 1000 + Math.round(fraction);
  }

  function parseNmea(text) {
    const lines = text.split(/\r?\n/);
    const now = new Date();
    let date = [now.getUTCFullYear(), now.getUTCMonth() + 1, now.getUTCDate()];
    let rollover = 0;
    let previousTod = null;
    const points = new Map();
    let usedFallbackDate = true;

    for (const line of lines) {
      const fields = line.trim().split(",");
      if (!fields[0]) continue;
      const type = fields[0].slice(-3);

      if (type === "ZDA" && fields.length >= 5) {
        const next = [Number(fields[4]), Number(fields[3]), Number(fields[2])];
        const check = new Date(Date.UTC(next[0], next[1] - 1, next[2]));
        if (next.every(Number.isFinite) && check.getUTCFullYear() === next[0] &&
            check.getUTCMonth() === next[1] - 1 && check.getUTCDate() === next[2]) {
          date = next;
          rollover = 0;
          previousTod = null;
          usedFallbackDate = false;
        }
        continue;
      }

      let timeText, lat, lon, ele = null;
      if (type === "RMC" && fields.length >= 10) {
        const nextDate = nmeaDate(fields[9]);
        if (nextDate) {
          if (nextDate.join("-") !== date.join("-")) {
            date = nextDate;
            rollover = 0;
            previousTod = null;
          }
          usedFallbackDate = false;
        }
        if (fields[2] !== "A") continue;
        timeText = fields[1];
        lat = coordinate(fields[3], fields[4]);
        lon = coordinate(fields[5], fields[6]);
      } else if (type === "GGA" && fields.length >= 10) {
        if (Number(fields[6]) <= 0) continue;
        timeText = fields[1];
        lat = coordinate(fields[2], fields[3]);
        lon = coordinate(fields[4], fields[5]);
        ele = Number.isFinite(Number(fields[9])) ? Number(fields[9]) : null;
      } else {
        continue;
      }

      const tod = nmeaTime(timeText);
      if (tod === null || lat === null || lon === null) continue;
      if (previousTod !== null && previousTod - tod > 12 * 3600000) rollover += 1;
      previousTod = tod;

      const timestamp = Date.UTC(date[0], date[1] - 1, date[2]) + rollover * DAY + tod;
      const key = String(timestamp);
      const existing = points.get(key);
      if (!existing) points.set(key, { lat, lon, time: timestamp, ele });
      else if (ele !== null) existing.ele = ele;
    }

    const result = Array.from(points.values()).sort((a, b) => a.time - b.time);
    if (!result.length) throw localizedError("nmeaNoValid");
    return { points: result, warning: usedFallbackDate ? "nmeaNoDateWarning" : "" };
  }

  function parseGpx(text, filename) {
    const doc = new DOMParser().parseFromString(text, "application/xml");
    if (doc.querySelector("parsererror")) throw localizedError("gpxXmlError");
    const toPoint = (node) => {
      const lat = Number(node.getAttribute("lat"));
      const lon = Number(node.getAttribute("lon"));
      const eleNode = node.getElementsByTagNameNS("*", "ele")[0];
      const timeNode = node.getElementsByTagNameNS("*", "time")[0];
      const ele = eleNode && eleNode.textContent.trim() !== "" ? Number(eleNode.textContent) : null;
      const time = timeNode ? Date.parse(timeNode.textContent) : null;
      return { lat, lon, ele: Number.isFinite(ele) ? ele : null, time: Number.isFinite(time) ? time : null };
    };
    const segments = Array.from(doc.getElementsByTagNameNS("*", "trkseg"));
    const result = [];
    if (segments.length) {
      segments.forEach((segment, index) => {
        const points = Array.from(segment.getElementsByTagNameNS("*", "trkpt")).map(toPoint).filter(validPoint);
        if (points.length) result.push({ name: segments.length > 1 ? filename + " (" + (index + 1) + ")" : filename, points });
      });
    } else {
      const nodes = [
        ...Array.from(doc.getElementsByTagNameNS("*", "trkpt")),
        ...Array.from(doc.getElementsByTagNameNS("*", "rtept"))
      ];
      const points = nodes.map(toPoint).filter(validPoint);
      if (points.length) result.push({ name: filename, points });
    }
    if (!result.length) throw localizedError("gpxNoTrack");
    return result;
  }

  function parseKml(text, filename) {
    const doc = new DOMParser().parseFromString(text, "application/xml");
    if (doc.querySelector("parsererror")) throw localizedError("kmlXmlError");
    const lines = Array.from(doc.getElementsByTagNameNS("*", "LineString"));
    const result = [];
    lines.forEach((line, index) => {
      const node = line.getElementsByTagNameNS("*", "coordinates")[0];
      if (!node) return;
      const points = node.textContent.trim().split(/\s+/).map((item) => {
        const values = item.split(",").map(Number);
        return { lon: values[0], lat: values[1], ele: Number.isFinite(values[2]) ? values[2] : null, time: null };
      }).filter(validPoint);
      if (points.length) result.push({ name: lines.length > 1 ? filename + " (" + (index + 1) + ")" : filename, points });
    });
    if (!result.length) throw localizedError("kmlNoLine");
    return result;
  }

  function addTrack(name, points) {
    const clean = points.filter(validPoint);
    if (!clean.length) throw localizedError("noValidTrack");
    tracks.push({
      id: makeId(), name: name, points: clean,
      color: colors[colorIndex++ % colors.length],
      visible: true, selected: false
    });
  }

  async function loadFiles(files) {
    let imported = 0;
    const errors = [];
    const warnings = [];
    for (const file of files) {
      try {
        const text = await file.text();
        const ext = file.name.split(".").pop().toLowerCase();
        let parsed;
        if (ext === "gpx") parsed = parseGpx(text, file.name);
        else if (ext === "kml") parsed = parseKml(text, file.name);
        else {
          const result = parseNmea(text);
          parsed = [{ name: file.name, points: result.points }];
          if (result.warning) warnings.push({ name: file.name, key: result.warning });
        }
        parsed.forEach((item) => { addTrack(item.name, item.points); imported += 1; });
      } catch (error) {
        errors.push({ name: file.name, key: error.translationKey || null, message: error.message });
      }
    }
    render();
    fitAll();
    status("importSummary", errors.length > 0, { count: imported, warnings, errors });
  }

  function geojson() {
    const features = [];
    tracks.filter((track) => track.visible).forEach((track) => {
      const coords = track.points.map((p) => [p.lon, p.lat]);
      features.push({
        type: "Feature",
        properties: { kind: "line", trackId: track.id, color: track.color },
        geometry: { type: "LineString", coordinates: coords }
      });
      track.points.forEach((p, index) => {
        features.push({
          type: "Feature",
          properties: { kind: "point", trackId: track.id, index: index, color: track.color },
          geometry: { type: "Point", coordinates: [p.lon, p.lat] }
        });
      });
      ["start", "end"].forEach((kind) => {
        const p = kind === "start" ? track.points[0] : track.points[track.points.length - 1];
        features.push({
          type: "Feature",
          properties: { kind: kind, trackId: track.id },
          geometry: { type: "Point", coordinates: [p.lon, p.lat] }
        });
      });
    });
    return { type: "FeatureCollection", features: features };
  }

  function setupLayers() {
    // style.load is the safe boundary for rebuilding app-owned layers after setStyle().
    if (!map || !map.getStyle()) return;

    if (!map.getSource("tracks")) {
      map.addSource("tracks", { type: "geojson", data: geojson() });
    } else {
      map.getSource("tracks").setData(geojson());
    }

    if (!map.getLayer("track-lines")) {
      map.addLayer({
        id: "track-lines", type: "line", source: "tracks",
        filter: ["==", ["get", "kind"], "line"],
        paint: { "line-color": ["get", "color"], "line-width": 3, "line-opacity": 0.92 }
      });
    }

    if (!map.getLayer("track-points")) {
      map.addLayer({
        id: "track-points", type: "circle", source: "tracks",
        filter: ["==", ["get", "kind"], "point"],
        layout: { visibility: splitMode ? "visible" : "none" },
        paint: { "circle-radius": 4, "circle-color": ["get", "color"], "circle-stroke-color": "#fff", "circle-stroke-width": 1.2 }
      });
    } else {
      map.setLayoutProperty("track-points", "visibility", splitMode ? "visible" : "none");
    }

    if (!map.getLayer("track-ends")) {
      map.addLayer({
        id: "track-ends", type: "circle", source: "tracks",
        filter: ["any", ["==", ["get", "kind"], "start"], ["==", ["get", "kind"], "end"]],
        paint: {
          "circle-radius": 7,
          "circle-color": ["match", ["get", "kind"], "start", "#159b61", "#d34d4d"],
          "circle-stroke-color": "#fff",
          "circle-stroke-width": 2
        }
      });
    }
  }

  function makeGrid() {
    if (!map || !map.getStyle()) return;
    const bounds = map.getBounds();
    const zoom = map.getZoom();
    const step = zoom > 13 ? 0.1 : zoom > 10 ? 0.25 : zoom > 8 ? 0.5 : zoom > 6 ? 1 : 2;
    const features = [];
    for (let lon = Math.floor(bounds.getWest() / step) * step; lon <= bounds.getEast(); lon += step) {
      features.push({ type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: [[lon, bounds.getSouth()], [lon, bounds.getNorth()]] } });
    }
    for (let lat = Math.floor(bounds.getSouth() / step) * step; lat <= bounds.getNorth(); lat += step) {
      features.push({ type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: [[bounds.getWest(), lat], [bounds.getEast(), lat]] } });
    }
    const data = { type: "FeatureCollection", features: features };
    if (!map.getSource("grid")) {
      map.addSource("grid", { type: "geojson", data: data });
    } else {
      map.getSource("grid").setData(data);
    }
    if (!map.getLayer("coordinate-grid")) {
      map.addLayer({ id: "coordinate-grid", type: "line", source: "grid", paint: { "line-color": "#526a7b", "line-width": 0.7, "line-opacity": 0.32, "line-dasharray": [2, 3] } });
    }
    map.setLayoutProperty("coordinate-grid", "visibility", $("gridToggle").checked ? "visible" : "none");
  }

  function draw() {
    if (map && map.isStyleLoaded()) {
      setupLayers();
      makeGrid();
    }
  }

  function haversine(points) {
    let total = 0;
    for (let i = 1; i < points.length; i += 1) {
      const a = points[i - 1], b = points[i], rad = Math.PI / 180;
      const dLat = (b.lat - a.lat) * rad;
      const dLon = (b.lon - a.lon) * rad;
      const x = Math.sin(dLat / 2) ** 2 +
        Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
      total += 2 * 6371008.8 * Math.asin(Math.sqrt(Math.min(1, x)));
    }
    return total;
  }

  function formatTime(value) {
    return Number.isFinite(value) ? timeFormatter.format(new Date(value)) : t("timeNotProvided");
  }

  function activateTrack(track, event) {
    const previousId = activeId;
    if (event && event.shiftKey && previousId) {
      const start = tracks.findIndex((item) => item.id === previousId);
      const end = tracks.findIndex((item) => item.id === track.id);
      if (start >= 0 && end >= 0) {
        tracks.forEach((item) => { item.selected = false; });
        tracks.slice(Math.min(start, end), Math.max(start, end) + 1)
          .forEach((item) => { item.selected = true; });
      }
    } else if (event && (event.ctrlKey || event.metaKey)) {
      track.selected = !track.selected;
    } else {
      tracks.forEach((item) => { item.selected = item.id === track.id; });
    }
    activeId = track.id;
    render();
    fit(track);
  }

  function render() {
    const root = $("trackList");
    root.replaceChildren();
    const selectedCount = tracks.filter((track) => track.selected).length;
    $("trackCount").textContent = t("trackCount", { count: tracks.length }) +
      (selectedCount ? t("selectedCount", { count: selectedCount }) : "");
    $("mergeBtn").disabled = selectedCount < 2;
    $("mergeBtn").textContent = selectedCount >= 2 ? t("mergeCount", { count: selectedCount }) : t("merge");
    $("mergeBtn").title = t("mergeButtonTitle");
    const activeTrack = getActive();
    ["reverseBtn", "shiftTimeBtn", "splitModeBtn"].forEach((id) => { $(id).disabled = !activeTrack; });
    ["exportGpxBtn", "exportKmlBtn"].forEach((id) => { $(id).disabled = tracks.length === 0; });

    if (!tracks.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = t("emptyTracks");
      root.append(empty);
    }

    tracks.forEach((track) => {
      const row = document.createElement("div");
      row.className = "track-row" +
        (activeId === track.id ? " active" : "") +
        (track.selected ? " selected" : "");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.setAttribute("aria-pressed", track.selected ? "true" : "false");
      row.setAttribute("aria-current", activeId === track.id ? "true" : "false");
      row.title = t("trackRowTitle");

      const visible = document.createElement("input");
      visible.type = "checkbox";
      visible.checked = track.visible;
      visible.title = t("visibility");
      visible.setAttribute("aria-label", t("visibilityAria", { name: track.name }));
      visible.addEventListener("click", (event) => event.stopPropagation());
      visible.onchange = () => { track.visible = visible.checked; draw(); };

      const palette = document.createElement("div");
      palette.className = "track-colors";
      palette.setAttribute("aria-label", t("trackColors"));
      colors.forEach((hex) => {
        const swatch = document.createElement("button");
        swatch.type = "button";
        swatch.className = "color-swatch" + (track.color.toLowerCase() === hex ? " active" : "");
        swatch.style.backgroundColor = hex;
        swatch.title = t("setColor", { color: hex });
        swatch.setAttribute("aria-label", t("setColor", { color: hex }));
        swatch.onclick = (event) => {
          event.stopPropagation();
          track.color = hex;
          render();
        };
        palette.append(swatch);
      });

      const customColor = document.createElement("input");
      customColor.type = "color";
      customColor.className = "track-color";
      customColor.value = track.color;
      customColor.title = t("customRgb");
      customColor.setAttribute("aria-label", t("customTrackColor"));
      customColor.addEventListener("click", (event) => event.stopPropagation());
      customColor.oninput = () => {
        track.color = customColor.value;
        draw();
        palette.querySelectorAll(".color-swatch").forEach((swatch) => swatch.classList.remove("active"));
      };
      palette.append(customColor);

      const meta = document.createElement("div");
      meta.className = "track-meta";
      const name = document.createElement("div");
      name.className = "track-name";
      name.textContent = track.name;
      const detail = document.createElement("div");
      detail.className = "track-detail";
      detail.textContent = t("pointDistance", { count: track.points.length, distance: (haversine(track.points) / 1852).toFixed(2) });
      const timeRange = document.createElement("div");
      timeRange.className = "track-time-range";
      const times = track.points.map((point) => point.time).filter(Number.isFinite);
      timeRange.textContent = times.length
        ? t("startTime", { time: formatTime(Math.min(...times)) }) + "\n" + t("endTime", { time: formatTime(Math.max(...times)) })
        : t("timeRangeMissing");
      meta.append(name, detail, timeRange);

      const remove = document.createElement("button");
      remove.className = "track-action";
      remove.type = "button";
      remove.title = t("deleteTrack");
      remove.setAttribute("aria-label", t("deleteAria", { name: track.name }));
      remove.textContent = t("delete");
      remove.onclick = (event) => {
        event.stopPropagation();
        if (!confirm(t("confirmDelete", { name: track.name }))) return;
        tracks = tracks.filter((item) => item.id !== track.id);
        if (activeId === track.id) activeId = tracks[0] ? tracks[0].id : null;
        render();
        draw();
        fitAll();
        status("deletedTrack", false, { name: track.name });
      };

      row.addEventListener("click", (event) => {
        if (event.target.closest("button, input, select")) return;
        activateTrack(track, event);
      });
      row.addEventListener("keydown", (event) => {
        if (event.target !== row || (event.key !== "Enter" && event.key !== " ")) return;
        event.preventDefault();
        activateTrack(track, event);
      });

      row.append(visible, meta, palette, remove);
      root.append(row);
    });

    $("splitModeBtn").classList.toggle("active", splitMode);
    $("splitModeBtn").textContent = splitMode ? t("splitModeEnd") : t("split");
    $("toolHint").textContent = splitMode
      ? t("splitModeHint")
      : t("trackSelectionHint");
    draw();
  }

  function fit(track) {
    if (!map || !track || !track.points.length) return;
    const coords = track.points.map((p) => [p.lon, p.lat]);
    map.fitBounds(coords.reduce((b, p) => b.extend(p), new maplibregl.LngLatBounds(coords[0], coords[0])), { padding: 60, maxZoom: 15 });
  }

  function fitAll() {
    const points = tracks.filter((track) => track.visible).flatMap((track) => track.points);
    if (!map || !points.length) return;
    const bounds = new maplibregl.LngLatBounds([points[0].lon, points[0].lat], [points[0].lon, points[0].lat]);
    points.forEach((p) => bounds.extend([p.lon, p.lat]));
    map.fitBounds(bounds, { padding: 60, maxZoom: 15 });
  }

  function download(name, content, mime) {
    const url = URL.createObjectURL(new Blob([content], { type: mime }));
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function escapeXml(value) {
    return String(value).replace(/[<>&'"]/g, (ch) => ({
      "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;"
    })[ch]);
  }

  function exportGpx() {
    const selected = tracks.filter((track) => track.selected);
    const chosen = selected.length ? selected : tracks;
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<gpx version="1.1" creator="GPS Track Studio" xmlns="http://www.topografix.com/GPX/1/1">\n';
    chosen.forEach((track) => {
      xml += "<trk><name>" + escapeXml(track.name) + "</name><trkseg>\n";
      track.points.forEach((p) => {
        xml += '<trkpt lat="' + p.lat + '" lon="' + p.lon + '">';
        if (Number.isFinite(p.ele)) xml += "<ele>" + p.ele + "</ele>";
        if (Number.isFinite(p.time)) xml += "<time>" + new Date(p.time).toISOString() + "</time>";
        xml += "</trkpt>\n";
      });
      xml += "</trkseg></trk>\n";
    });
    xml += "</gpx>";
    download("gps-tracks.gpx", xml, "application/gpx+xml");
  }

  function exportKml() {
    const selected = tracks.filter((track) => track.selected);
    const chosen = selected.length ? selected : tracks;
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<kml xmlns="http://www.opengis.net/kml/2.2"><Document>\n';
    chosen.forEach((track) => {
      xml += "<Placemark><name>" + escapeXml(track.name) + "</name><LineString><tessellate>1</tessellate><coordinates>";
      xml += track.points.map((p) => p.lon + "," + p.lat + "," + (Number.isFinite(p.ele) ? p.ele : 0)).join(" ");
      xml += "</coordinates></LineString></Placemark>\n";
    });
    xml += "</Document></kml>";
    download("gps-tracks.kml", xml, "application/vnd.google-earth.kml+xml");
  }

  function mergeSelected() {
    const selected = tracks.filter((track) => track.selected);
    if (selected.length < 2) {
      status("selectTwoTracks", true);
      return;
    }

    const hasOrderedTimes = (track) => {
      if (!track.points.length || !track.points.every((point) => Number.isFinite(point.time))) return false;
      return track.points.every((point, index) => index === 0 || point.time >= track.points[index - 1].time);
    };
    const allTimed = selected.every(hasOrderedTimes);
    const chronological = allTimed
      ? selected.slice().sort((a, b) => a.points[0].time - b.points[0].time)
      : selected.slice();

    const noTimeOverlap = allTimed && chronological.every((track, index) =>
      index === 0 || chronological[index - 1].points[chronological[index - 1].points.length - 1].time <= track.points[0].time
    );
    const orderedTracks = noTimeOverlap ? chronological : selected;
    const mergedPoints = orderedTracks.flatMap((track) => track.points);
    const mergedColor = orderedTracks[0].color;
    const mergedVisible = orderedTracks.some((track) => track.visible);
    const mergedPointCount = mergedPoints.length;
    const usedChronologicalOrder = noTimeOverlap;

    tracks = tracks.filter((track) => !track.selected);
    addTrack(t("mergedTrackName"), mergedPoints);
    const merged = tracks[tracks.length - 1];
    merged.color = mergedColor;
    merged.visible = mergedVisible;
    merged.selected = true;
    activeId = merged.id;

    render();
    fit(merged);
    status(
      usedChronologicalOrder
        ? t("mergeSuccessChronological", { count: selected.length, points: mergedPointCount })
        : t("mergeSuccessList", { count: selected.length, points: mergedPointCount })
    );
  }

  function getActive() {
    return tracks.find((track) => track.id === activeId) || tracks.find((track) => track.selected) || null;
  }

  function beginSplit(trackId, index) {
    const track = tracks.find((item) => item.id === trackId);
    if (!track || index < 1 || index >= track.points.length - 1) {
      status("selectMiddlePoint", true);
      return;
    }
    splitTarget = { id: trackId, index: index };
    hideSplitHover();
    $("splitDescription").textContent = t("splitDialogDescription", { index: index + 1, name: track.name });
    $("pointDialog").showModal();
  }

  function hideSplitHover() {
    const tooltip = $("splitHoverTooltip");
    if (tooltip) tooltip.hidden = true;
  }

  function updateSplitHover(event) {
    const tooltip = $("splitHoverTooltip");
    if (!tooltip || !splitMode || !map || !map.getLayer("track-points")) {
      hideSplitHover();
      return;
    }

    const features = map.queryRenderedFeatures(event.point, { layers: ["track-points"] });
    if (!features.length) {
      hideSplitHover();
      return;
    }

    const props = features[0].properties || {};
    const track = tracks.find((item) => item.id === props.trackId);
    const index = Number(props.index);
    const point = track && track.points[index];
    if (!track || !point) {
      hideSplitHover();
      return;
    }

    const canSplit = index > 0 && index < track.points.length - 1;
    $("splitHoverTitle").textContent = t("pointTitle", { name: track.name, index: index + 1 }) +
      (canSplit ? "" : t("pointNotSplittable"));
    $("splitHoverTime").textContent = t("timeLabel", { time: formatTime(point.time) });
    $("splitHoverLatitude").textContent = t("latitudeLabel", { coordinate: point.lat.toFixed(6) + "° (" + formatDmm(point.lat, "N", "S") + ")" });
    $("splitHoverLongitude").textContent = t("longitudeLabel", { coordinate: point.lon.toFixed(6) + "° (" + formatDmm(point.lon, "E", "W") + ")" });

    tooltip.hidden = false;
    const mapRect = map.getContainer().getBoundingClientRect();
    const left = Math.max(8, Math.min(event.point.x + 16, mapRect.width - tooltip.offsetWidth - 8));
    const top = Math.max(8, Math.min(event.point.y + 16, mapRect.height - tooltip.offsetHeight - 8));
    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
  }

  function splitTrack() {
    if (!splitTarget) return;
    const track = tracks.find((item) => item.id === splitTarget.id);
    if (!track) return;
    const index = splitTarget.index;
    const first = track.points.slice(0, index + 1);
    const second = track.points.slice(index);
    const originalName = track.name;
    tracks = tracks.filter((item) => item.id !== track.id);
    addTrack(originalName + " A", first);
    addTrack(originalName + " B", second);
    activeId = tracks[tracks.length - 1].id;
    splitTarget = null;
    splitMode = false;
    $("pointDialog").close();
    render();
    fit(getActive());
    status("splitSuccess");
  }

  function updateTimeShift(event) {
    event.preventDefault();
    if (event.submitter && event.submitter.value === "cancel") {
      $("timeDialog").close();
      return;
    }
    const minutes = Number($("shiftMinutes").value);
    const active = getActive();
    if (!active || !Number.isFinite(minutes)) return;
    const offset = minutes * 60000;
    active.points.forEach((point) => {
      if (Number.isFinite(point.time)) point.time += offset;
    });
    $("timeDialog").close();
    render();
    status("shiftSuccess", false, { minutes });
  }

  function formatDmm(value, positive, negative) {
    const abs = Math.abs(value);
    const deg = Math.floor(abs);
    const min = ((abs - deg) * 60).toFixed(3).padStart(6, "0");
    return (value >= 0 ? positive : negative) + " " + deg + "° " + min + "'";
  }

  // Print an exact snapshot of the currently rendered map. This avoids
  // changing MapLibre's viewport to fit a different paper aspect ratio.
  let activePrintSheet = null;

  function removePrintSheet() {
    if (activePrintSheet) {
      activePrintSheet.remove();
      activePrintSheet = null;
    }
  }

  function printMap() {
    if (!map) {
      status("mapNotReady", true);
      return;
    }

    removePrintSheet();
    let completed = false;
    let fallbackTimer = null;

    const captureAndPrint = () => {
      if (completed) return;
      completed = true;
      if (fallbackTimer !== null) window.clearTimeout(fallbackTimer);
      map.off("idle", captureAndPrint);

      let imageUrl;
      try {
        imageUrl = map.getCanvas().toDataURL("image/png");
      } catch (error) {
        status("mapCaptureError", true);
        return;
      }

      const sheet = document.createElement("section");
      sheet.id = "printSheet";
      const image = document.createElement("img");
      image.alt = t("splitMarkerLabel");
      const attribution = document.createElement("div");
      attribution.className = "print-attribution";
      attribution.textContent = $("mapNote").textContent || "© OpenStreetMap contributors";
      sheet.append(image, attribution);
      document.body.append(sheet);
      activePrintSheet = sheet;

      const cleanup = () => {
        if (activePrintSheet === sheet) removePrintSheet();
        window.removeEventListener("afterprint", cleanup);
      };
      window.addEventListener("afterprint", cleanup);

      image.addEventListener("load", () => {
        requestAnimationFrame(() => window.print());
      }, { once: true });
      image.addEventListener("error", () => {
        cleanup();
        status("mapImageError", true);
      }, { once: true });
      image.src = imageUrl;
    };

    // Wait for the current map frame to finish before capturing the canvas.
    map.once("idle", captureAndPrint);
    fallbackTimer = window.setTimeout(captureAndPrint, 2000);
    map.triggerRepaint();
  }

  function initMap() {
    if (!window.maplibregl) {
      status("mapLibraryError", true);
      return;
    }
    map = new maplibregl.Map({
      container: "map",
      style: styles.liberty,
      center: [121, 23.5],
      zoom: 6,
      attributionControl: true,
      cooperativeGestures: true,
      preserveDrawingBuffer: true
    });
    map.addControl(new maplibregl.NavigationControl(), "top-left");
    map.addControl(new maplibregl.ScaleControl({ unit: "nautical" }), "bottom-left");
    const canvasContainer = map.getCanvasContainer();
    map.on("dragstart", () => canvasContainer.classList.add("is-dragging"));
    map.on("dragend", () => canvasContainer.classList.remove("is-dragging"));
    map.on("load", () => { setupLayers(); makeGrid(); });
    map.on("style.load", () => {
      setupLayers();
      makeGrid();
      hideSplitHover();
      canvasContainer.classList.remove("is-dragging");
    });
    map.on("moveend", makeGrid);
    map.on("zoomend", makeGrid);
    map.on("mousemove", (event) => {
      $("coordinateReadout").textContent =
        formatDmm(event.lngLat.lat, "N", "S") + "  " +
        formatDmm(event.lngLat.lng, "E", "W");
      updateSplitHover(event);
    });
    canvasContainer.addEventListener("mouseleave", hideSplitHover);
    map.on("click", (event) => {
      if (!splitMode) return;
      const features = map.queryRenderedFeatures(event.point, { layers: ["track-points"] });
      if (!features.length) return;
      const props = features[0].properties;
      beginSplit(props.trackId, Number(props.index));
    });
  }

  function bindEvents() {
    const fileInput = $("fileInput");
    const drop = $("dropZone");
    fileInput.onchange = () => {
      if (fileInput.files.length) loadFiles(Array.from(fileInput.files));
      fileInput.value = "";
    };
    ["dragenter", "dragover"].forEach((eventName) => drop.addEventListener(eventName, (event) => {
      event.preventDefault();
      drop.classList.add("dragover");
    }));
    ["dragleave", "drop"].forEach((eventName) => drop.addEventListener(eventName, (event) => {
      event.preventDefault();
      drop.classList.remove("dragover");
    }));
    drop.addEventListener("drop", (event) => {
      if (event.dataTransfer.files.length) loadFiles(Array.from(event.dataTransfer.files));
    });

    document.addEventListener("click", (event) => {
      const dropdown = $("languageDropdown");
      if (dropdown.open && !dropdown.contains(event.target)) dropdown.open = false;
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && $("languageDropdown").open) {
        $("languageDropdown").open = false;
        $("languageButton").focus();
      }
    });
    $("fitAllBtn").onclick = fitAll;
    $("languageZhBtn").onclick = () => setLanguage("zh-TW");
    $("languageEnBtn").onclick = () => setLanguage("en");
    $("printBtn").onclick = printMap;
    $("clearAllBtn").onclick = () => {
      if (tracks.length && confirm(t("confirmClear"))) {
        tracks = [];
        activeId = null;
        splitMode = false;
        render();
        status("clearSuccess");
      }
    };
    $("mergeBtn").onclick = mergeSelected;
    $("reverseBtn").onclick = () => {
      const active = getActive();
      if (!active) return;

      const originalTimes = active.points
        .map((point) => point.time)
        .filter(Number.isFinite);
      const ascending = originalTimes.every((time, index) =>
        index === 0 || time >= originalTimes[index - 1]
      );
      const descending = originalTimes.every((time, index) =>
        index === 0 || time <= originalTimes[index - 1]
      );

      active.points.reverse();

      let message;
      if (originalTimes.length >= 2 && ascending && !descending) {
        const startTime = originalTimes[0];
        const endTime = originalTimes[originalTimes.length - 1];
        const timeSum = startTime + endTime;
        active.points.forEach((point) => {
          if (Number.isFinite(point.time)) point.time = timeSum - point.time;
        });
        message = "reverseAsc";
      } else if (originalTimes.length >= 2 && descending && !ascending) {
        message = "reverseDesc";
      } else if (originalTimes.length >= 2 && ascending && descending) {
        message = "reverseSame";
      } else if (originalTimes.length === 0) {
        message = "reverseNoTime";
      } else if (originalTimes.length < 2) {
        message = "reverseFewTimes";
      } else {
        message = "reverseIrregular";
      }

      render();
      fit(active);
      status(message, !ascending && !descending && originalTimes.length >= 2);
    };
    $("shiftTimeBtn").onclick = () => {
      if (!getActive()) return;
      $("shiftMinutes").value = 0;
      $("timeDialog").showModal();
    };
    $("timeForm").onsubmit = updateTimeShift;
    $("splitModeBtn").onclick = () => {
      if (!getActive()) return;
      splitMode = !splitMode;
      render();
      if (!splitMode) hideSplitHover();
      status(splitMode ? "splitModeStatus" : "splitModeExited");
    };
    $("pointDialog").querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      if (event.submitter && event.submitter.id === "confirmSplitBtn") splitTrack();
      else {
        splitTarget = null;
        $("pointDialog").close();
      }
    });
    $("exportGpxBtn").onclick = () => {
      exportGpx();
      $("exportDropdown").open = false;
    };
    $("exportKmlBtn").onclick = () => {
      exportKml();
      $("exportDropdown").open = false;
    };
    $("timeZoneSelect").onchange = (event) => setDisplayTimeZone(event.target.value);
    $("mapStyleSelect").onchange = (event) => map && map.setStyle(styles[event.target.value] || styles.liberty);
    $("gridToggle").onchange = makeGrid;
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(language, false);
    initializeTimeZones();
    bindEvents();
    initMap();
    render();
  }, { once: true });
})();