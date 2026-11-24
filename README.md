# GPS Track Studio

A lightweight Traditional Chinese, browser-based GPS track viewer and basic editor. The static application reads track files locally in the browser; it does not upload GPS records to an application server.

## Features

- Import NMEA (`.nmea`, `.log`, `.txt`), GPX and KML files
- View multiple tracks on an interactive map
- Toggle track visibility, select tracks and change track colors
- Display start and end markers
- Merge selected tracks
- Reverse point order
- Split a track at a selected point on the map
- Shift timestamps by a chosen number of minutes
- Export tracks to GPX and KML
- Print the map view
- Display a coordinate grid, cursor coordinates and a nautical-mile scale
- Store available timestamps as UTC and show list times in Asia/Taipei (UTC+8)

## Basemap and attribution

The map uses [MapLibre GL JS](https://maplibre.org/) with public styles from [OpenFreeMap](https://openfreemap.org/). The public OpenFreeMap service is free to use without an API key or registration, but is community-operated and provided on a best-effort basis. Availability and performance are not guaranteed.

Keep the map attribution visible. OpenStreetMap data is licensed under the Open Database License (ODbL); this is separate from the usage policy for the OpenStreetMap Foundation's standard `tile.openstreetmap.org` tile service.

- [OpenFreeMap](https://openfreemap.org/)
- [OpenStreetMap copyright and license](https://www.openstreetmap.org/copyright)
- [OpenStreetMap Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/)

## Run locally

Open `index.html` in a modern browser, or start a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. An internet connection is required for the map style and MapLibre library. Track parsing and editing take place in the browser.

## Deploy with GitHub Pages

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push changes to `main`, or run the **Deploy GPS Track Studio to GitHub Pages** workflow from the Actions tab.
4. After the workflow completes successfully, open:

   <https://changenhsin.github.io/gps-track-studio/>

The workflow file is `.github/workflows/deploy.yml`. It publishes the static website after each push to `main`.

## Data and privacy

This prototype processes selected files in the browser. It does not include an application upload endpoint, account system or persistent project storage. Do not commit private GPS tracks or sensitive location information to this public repository.

## Current limitations

- Point drag/add/delete editing and trim-by-range are not implemented yet.
- Undo/redo and project save/load are not implemented yet.
- Date-less NMEA logs fall back to the current UTC date; verify their date before using the result as a record.
- KML import currently focuses on common `LineString` tracks.
- Reverse changes point order but does not rewrite timestamps.
- Merge orders points by time only when all merged points have timestamps; otherwise it keeps selected track order.
- OpenFreeMap is a public third-party service and the map requires an internet connection.

## Roadmap

1. Edit individual points, trim/crop by range and add undo/redo
2. Add track statistics, anomaly detection and timeline playback
3. Add project save/load and improve import/export validation
4. Improve performance with very large files

## License

No software license has been selected for this repository yet. Until one is added, the source code remains subject to the default copyright rules. Map data and third-party libraries retain their respective licenses.
