# Web offline check (2026-10-30)

What the web build does with no internet, from actually running it. Nothing below is assumed: each line says **Ran** (done, with the result) or **Not run** (not checked).
Environment: Flutter 3.47 `flutter build web --release`, served from a local static server, driven by the Chromium that is installed in the cloud session (Playwright, phone-size window). Scripts: `tools/web_offline_check.js`, `tools/web_offline_midsession.js` (`node` with `playwright`; serve `build/web` on port 8099 first).

## Results

| # | Check | Status | Result |
|---|---|---|---|
| 1 | Default build (`flutter build web`): does the first load work? | **Ran** | The app **did not start** in the cloud session: the page asked `www.gstatic.com/flutter-canvaskit/<revision>/canvaskit.wasm` and the session blocks that host. So a default web build needs Google's CDN on every load (CanvasKit is about 7 MB). On a normal internet connection this works; with no internet it cannot start. |
| 2 | Build with `--no-web-resources-cdn` (CanvasKit copied into `build/web/canvaskit`): first load online | **Ran** | The app starts and draws the first screen (the new logo, language choice). Build folder 47 MB (`main.dart.js` 5.7 MB, `canvaskit.wasm` 7.3 MB). |
| 3 | Is a service worker registered, and is anything cached for offline? | **Ran** | **No.** After the first load: no service worker registration, no Cache Storage entries. Flutter 3.47 writes a `flutter_service_worker.js` that only unregisters itself; the app does not ship its own. |
| 4 | Go offline, reload the page | **Ran** | **Fails**: `net::ERR_INTERNET_DISCONNECTED`, the page does not load. So the web app is **not** installable/usable offline from a cold start. |
| 5 | Load online, go offline without reloading, keep using the app | **Ran (one tap)** | Works for what is local: tapping the language button offline moved to the next screen (welcome). Only one tap was tried, not a full walk-through. |
| 6 | Whole app walk-through offline (games, letters, stories, drawing, parent area) | **Not run** | Expected to work because all of it is local code and local storage, but not checked. |
| 7 | Emoji and rare characters offline | **Not run** | `main.dart.js` contains Flutter's fallback-font address on `fonts.gstatic.com`; on the web, emoji and glyphs missing from the bundled font may be fetched from Google at run time. Offline they might show as empty boxes. Several screens (map badges, stories, games) use emoji. |
| 8 | Videos, Firebase (teachers, family chat, calls), printing/sharing | **Not run** (cannot work offline) | YouTube and Firebase always need a connection. The family chat queue (`docs/FAMILY_CHAT_DESIGN.md`) keeps text messages until the connection is back, but only while the app is open. |
| 9 | Android app offline | **Not run** | No Android build has been run. By design assets, fonts, sounds and data are bundled or on the device, so lessons, games and stories should work offline; only videos, Firebase and the AI feature need internet. |

## What this means
- **Today the web version needs internet every time it is opened.** The Android app is the offline one (once built and tested).
- To make the web version work offline we would need (a) the `--no-web-resources-cdn` build, (b) our own service worker that stores the app files, and (c) the emoji/fallback font bundled. This is a decision for you: a caching service worker can make people (and you, in the 8080 preview) keep seeing an old version after an update. Nothing of this was added.

## How to repeat
```bash
flutter build web --release --no-web-resources-cdn
cd build/web && python3 -m http.server 8099 &
NODE_PATH=$(npm root -g) node tools/web_offline_check.js          # checks 2, 3, 4
NODE_PATH=$(npm root -g) node tools/web_offline_midsession.js     # check 5 (writes screenshots to /tmp)
```
