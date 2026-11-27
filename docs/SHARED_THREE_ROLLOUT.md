# Shared three.js engine — pilot results & remaining rollout

Companion to `docs/FLEET_PERF_AUDIT.md`. Plan: validated 2026-11-27 (onResolve
plugin → `game_src/cozy_kit/three_shim.js` → `window.__THREE__`; `--alias`
does not work with three addons).

## What is built

- `assets/games/three_shared.js` — **684,920 bytes (685 KB)**, one shared
  three@0.170.0 IIFE bundle that sets `window.__THREE__`. Built from the new
  `game_src/three_shared/` package (`npm run build` there).
- `game_src/cozy_kit/three_shim.js` — resolves the bare `three` import to
  `window.__THREE__`; throws a clear error naming the missing shared engine
  if the shared script did not load.
- `game_src/cozy_kit/build_game.mjs` — shared esbuild JS-API build helper
  (bundle, minify, iife, es2019 — identical settings to the old CLI builds).
  A converted package's build script becomes:
  `node ../cozy_kit/build_game.mjs src/main.js ../../assets/games/<folder>/game.js`
- Each converted game's `assets/games/<folder>/index.html` loads
  `<script src="../three_shared.js"></script>` immediately before `game.js`
  (same mechanism the pages already use for `../nozoom.js`,
  `../shared_controls.js`, `../menubg.js` — so the mobile webview path works
  with no Dart change).

## Pilot results (3 games, 3 different sections)

| Game (folder) | Source package | game.js before | game.js after | Saving | npm test | Chromium boot smoke |
|---|---|---:|---:|---:|---|---|
| sunset_highway | highway_race | 829,834 B | 148,273 B | −82% | 13/13 | PASS — menu, 0 errors |
| deep_sea | deep_sea | 826,760 B | 143,331 B | −83% | 6/6 | PASS — menu, 0 errors |
| gum_ball | gum_ball | 615,714 B | 124,700 B | −80% | 5/5 | PASS — menu, 0 errors |

Pilot `game.js` total: **2,272,308 B → 416,304 B**. The one-time shared
bundle (685 KB) is already paid for by the first converted game alone.
Smoke test: headless Chromium over http, page loads, `window.__THREE__`
revision 170 present, canvas created, game reaches its menu, zero page
errors (harness: `~/tools/recorder/smoke_shared.mjs`).

## Fleet projection (all 47 three-bundling folders)

- Today: three-game `game.js` files total **32,737 KB**.
- Converted (pilot per-game range 125–148 KB, fleet estimate ~120 KB avg):
  ~5.6 MB of game.js + 0.69 MB shared ≈ **6.3 MB total**.
- **Projected saving ≈ 26 MB (~80% of all game JavaScript)**, plus faster
  first load for every game after the first (the shared file is cached by
  the webview/page).

## Remaining rollout steps

1. **Convert the remaining 32 three-using source packages (44 built
   folders)** in small batches by section. Per package: swap the build
   script to `build_game.mjs`, `npm test`, `npm run build`, add the
   `../three_shared.js` tag to each built folder's index.html, Chromium
   boot-smoke every built folder. Multi-output packages: course_race
   (alien_sky, rhino_summit), lane_shooter (squad_shooter, archer_bridge),
   learn_games (11 learn_* folders — build each output with the helper;
   check learn_letters' post-conversion size separately, it carries heavy
   letter data).
2. **Flutter side — NOT done in this pilot, for the owner's diff review:**
   - `pubspec.yaml`: add `- assets/games/three_shared.js` to the flutter
     assets list so the file ships in the app bundle.
   - `lib/games/web_games/web_game_view_web.dart` (`_whenLoaded`, web path
     only): before injecting the game bundle, ensure the shared script has
     loaded — inject a script element with id `rehlaty-three-js` and src
     `assetManager.getAssetUrl('assets/games/three_shared.js')`, wait for
     its load (guard on `globalContext.has('__THREE__')` so repeat game
     opens skip it), then load the game bundle exactly as today.
   - The mobile (Android/iOS webview) path needs no Dart change: the game
     pages already load `../three_shared.js` from their own index.html.
   - After those two changes land: `flutter analyze` + `flutter test`.
3. **Order matters for safety:** land the pubspec + Dart loader changes
   BEFORE (or together with) rolling the conversion beyond the pilot three,
   so no shipped build can contain a converted game whose shared engine is
   missing. If `three_shared.js` fails to load, converted games throw the
   shim's explicit error instead of failing silently.
4. Follow-on backlog (from the fleet audit): learn_voice audio (231 MB,
   owner decision), `art` folder recompression (39 MB), racing panorama
   pass (~8 MB), removing the dead `three` dependency from the 14 canvas
   packages that declare but never import it.
