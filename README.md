# GPS Track Studio

**Version:** `v0.1.0` · **Status:** BETA

[繁體中文](README.zh-TW.md) | **English**

A lightweight, browser-based GPS track viewer and editor. Import, inspect, organize, edit, and export GPS tracks without uploading your location files to an application server.

**Live app:** <https://x1ngz-dev.github.io/gps-track-studio/>  
**Source code:** <https://github.com/x1ngz-dev/gps-track-studio>

## Features

- Import NMEA (`.nmea`, `.log`, `.txt`), GPX, and KML files
- View multiple tracks on an interactive MapLibre map
- Show or hide individual tracks and select one or multiple tracks
- Customize track colors with a palette or RGB/HEX color picker
- Display start/end markers, point counts, distance, and time ranges
- Merge selected tracks while preserving each track's internal point order
- Reverse track direction and maintain chronological timestamps when possible
- Split a track at a selected map point
- Shift track timestamps by a chosen number of minutes
- Export tracks to GPX and KML
- Choose a display time zone while keeping timestamps stored as UTC
- Print an exact snapshot of the current map view
- Display a coordinate grid, cursor coordinates, and a nautical-mile scale
- Switch the interface between Traditional Chinese and English

## Quick start

Open the [GPS Track Studio web app](https://x1ngz-dev.github.io/gps-track-studio/) in a modern browser. Choose files or drag NMEA, GPX, or KML files into the import area.

To run locally, open `index.html` in a browser or start a local static server:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>. An internet connection is required for MapLibre and the public basemap styles. Track parsing and editing run locally in the browser.

## Supported formats

| Format | Import | Export | Notes |
|---|---:|---:|---|
| NMEA | Yes | No | Supports common RMC/GGA records; date-less logs use the current UTC date as a fallback |
| GPX | Yes | Yes | Reads track points and route points |
| KML | Yes | Yes | Imports common `LineString` tracks |

## Usage notes

- Click a track row to make it active.
- Use Ctrl/⌘-click to select multiple tracks, or Shift-click to select a range.
- Use the visibility checkbox to show or hide a track without changing the active selection.
- When exporting, selected tracks are exported if any are selected; otherwise, all tracks are exported.
- The display time zone affects presentation only. Timestamps remain stored as UTC.
- The print command captures the map as currently displayed and fits the image proportionally on the printed page.

## Basemap and attribution

The map uses [MapLibre GL JS](https://maplibre.org/) with public styles from [OpenFreeMap](https://openfreemap.org/). OpenFreeMap is a community-operated public service provided on a best-effort basis; availability and performance are not guaranteed.

Keep map attribution visible. OpenStreetMap data is licensed under the Open Database License (ODbL).

- [OpenFreeMap](https://openfreemap.org/)
- [OpenStreetMap copyright and license](https://www.openstreetmap.org/copyright)
- [OpenStreetMap Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/)

## Data and privacy

Selected files are parsed and edited in your browser. This project does not provide an application upload endpoint, account system, or cloud project storage. Do not commit private GPS tracks or sensitive location information to this public repository. Map tiles and styles are loaded from public third-party services.

## Current limitations

- Point drag/add/delete editing and trim-by-range are not implemented.
- Undo/redo and project save/load are not implemented.
- Date-less NMEA logs use the current UTC date as a fallback; verify the date before relying on the imported timestamps.
- KML import currently focuses on common `LineString` tracks.
- OpenFreeMap is a third-party service and requires an internet connection.

## Deploy with GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. Once GitHub Pages is configured to use **GitHub Actions**, pushes to `main` automatically deploy the static app.

**Live app:** <https://x1ngz-dev.github.io/gps-track-studio/>

## Roadmap

1. Edit individual points, trim/crop by range, and add undo/redo
2. Add track statistics, anomaly detection, and timeline playback
3. Add project save/load and improve import/export validation
4. Improve performance with very large files

## License

No software license has been selected for this repository yet. Until one is added, the source code remains subject to the default copyright rules. Map data and third-party libraries retain their respective licenses.
