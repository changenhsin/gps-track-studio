# GPS Track Studio

A browser-based GPS track viewer for NMEA, GPX and KML workflows.

## Current scope

- Import NMEA log/text files
- Display multiple GPS tracks on an interactive map
- Toggle track visibility and customize track colors
- Show start/end markers
- Export GPX and KML
- Print or export the map view as an image
- Display coordinate grid, cursor coordinates and nautical scale

## Map

The application uses [OpenFreeMap](https://openfreemap.org/) with MapLibre-compatible styles for its public basemap. OpenFreeMap is a community service; availability and performance are best-effort and may change. Please keep map attribution visible.

OpenFreeMap map data is based on OpenStreetMap. OpenStreetMap data is available under the Open Database License (ODbL). Map data licensing is separate from the terms governing any particular tile service.

## Development

This is a static browser application. No backend or API key is required for the initial prototype.

Open `index.html` in a modern browser, or serve the repository with any static web server.

## Deployment

GitHub Pages is configured to publish the repository root from the `main` branch. After enabling Pages in repository settings, the site will be available at:

`https://changenhsin.github.io/gps-track-studio/`

## Data and privacy

Track files are processed in the browser. Do not publish sensitive GPS data, personal information, or private recordings in this public repository.

## Planned improvements

- GPX/KML import
- Preserve timestamp and elevation on every point
- Split, trim, merge and reverse tracks
- Add, move and delete track points
- Shift and edit timestamps
- Undo and redo
- Distance, speed and stop statistics
- Project save/load
- Better validation and large-track performance

## License

No project license has been selected yet. Until a license is added, the source code remains subject to the default copyright rules.
