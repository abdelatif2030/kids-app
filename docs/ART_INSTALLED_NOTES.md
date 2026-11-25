# Pictures from the owner's zips (installed 2026-11-26) — what went where

Zips: dune_titans, rain_circuit, ball_scoop, summit_rush, rhino_summit, alien_sky, fizz_runner, happy_farm, jungle_adventure.
(Duplicates found and skipped: `batch5_2001-2500 (2).zip` = same md5 as `batch5_2001-2500.zip` (voices, already installed); the zips
`alien_sky.zip` and `rhino_summit.zip` that sit INSIDE dune_titans.zip are byte-identical to the separate ones; happy_farm.zip also carries a nested copy of
`fizz_runner.zip`/`batch5`.) File numbers follow ChatGPT's order: -01 key art, -02 UI skin sheet (4x2), -03 pills (3x2), -04 hero sheet,
-05 cast sheet, then backdrops, then props/objects/win/icons.

| Game | Installed | Not used yet |
|---|---|---|
| dune_titans | 6 backdrops → `art/pano1..6.webp` (ring around the circuit, same code as moto_race); rounds 3/4/5/6 renamed after the pictures | (no skin sheet in the zip; skin already existed) |
| rain_circuit | 6 backdrops → `art/pano1..6.webp` | |
| ball_scoop | skin (panel with checkerboard fixed, ribbon, levels, pills) + `skin.css`; 6 backdrops → `art/pano1..6` (one per 5 levels, ring follows the camera) | key art/hero/cast/track kit/podium/objects sheets were not in the zip |
| summit_rush | skin + `skin.css` (ribbon title, pill buttons); `art/` added to pubspec (the 3 panos were not bundled before) | |
| rhino_summit | skin + `skin.css`; 3 backdrops (race 1-3 use them, 4-5 repeat) | backdrops 4-5 (Cloud Bridge, Sky Summit) |
| alien_sky | skin + `skin.css`; 1 backdrop used for every race | backdrops 2-6 |
| fizz_runner | skin + `skin.css`; 6 backdrops (one per environment) | |
| happy_farm | key art → poster + card; skin + `skin.css` (panel, ribbon, level circles, buttons) | 8 farm backdrops (the top-down camera never sees the horizon: needs a different use), hero/cast sheets, props, win screen, icons |
| jungle_adventure | key art → poster + card; 6 backdrops (`art/pano1..6`), levels use 1, 5, 6 as `sky_jungle/ruins/temple`; ribbon title (`skin.css`) | hero/girl/monkey/parrot sheets, obstacles, props, win screen, HUD icons, 3 spare backdrops |

Tools added: `tools/fix_checker.py` (removes a baked-in checkerboard from a skin panel), `tools/make_skin_css.py` (writes skin.css for games built on the cozy
menu classes `.P-card/.P-logo/.P-btn/.P-lv`, links it, lists skin/art in pubspec). Gotcha fixed: an apostrophe in `'Amoora's Truck'` broke the ball_scoop build.
