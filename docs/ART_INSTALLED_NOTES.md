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

## Second pass (same day)
- jungle_adventure: the 3 spare backdrops are now second skies for the 3 levels (one of the two is picked at random each run); the owner's scarab replaces the beetle,
  his bat is the bat, the emerald is the jade relic and the scarab coin is the coin (`art/beetle, bat, relic, coin`); the old `hero.webp` was removed (the key art already shows the hero).
  Still unused: hero/girl/monkey/parrot sheets (the game keeps its own Adam run frames), totems, spikes, rope bridge, icons other than gem and coin, win screen.
- happy_farm: `hero.webp` removed (the key art has the hero). Backdrops, hero/cast/props/win/icons sheets still unused (top-down camera; the HUD uses emoji).
- alien_sky backdrops 2-6 and rhino_summit backdrops 4-5 are waiting for the owner's pictures (only one and three arrived).

## Third pass (same day)
- happy_farm: shed upgrade icons are the owner's props (wheat, combine, trailer, barn), the coin and star icons replace the CSS coin and the star emoji on the results screen, and the
  results screen has the owner's win picture behind the panel (`.hf-win`). `art/` is listed in pubspec. Not wired: the 8 backdrops (top-down camera), the hero/cast sheets, the other props and icons.
- jungle_adventure: stone spikes picture (`art/spikes.webp`), owner's heart and coin icons in the HUD, win picture behind the "you won" screen (CSS `:has(.ja-win)`).
  Not wired: hero/girl/monkey/parrot sheets (the game keeps its own Adam/Nour run frames), totems, rope bridge, other icons.
- `game_src/_shot_seq.mjs` accepts `INJECT="<js>"` to run JS before the screenshot (to preview a screen that needs a finished game).

## Fourth pass (2026-11-26): packs for pumpkin pie, rhythm, samurai, golden tail, ocean defense; alien/rhino backdrops; English + German worlds
Tools: `tools/install_pack.py <game> <zips dir> <panel RGB> <win#> <icons#> <backdrops>` (key art -> poster + card, skin pieces, win picture, coin/star icons, backdrops),
`tools/install_en_images.py` + the cut jobs (252 word pictures `assets/games/art/x_<word>.webp`, sizes added to `src/kit/art_dims.json`), `tools/make_english_data.py`, `tools/make_german_data.py`.
| Game | Installed | Not wired |
|---|---|---|
| pumpkin_pie, rhythm, samurai, golden_tail, ocean_defense | key art (poster + card), skin (panel, ribbon, pills, level circles, play, sound) + `skin.css` linked, win picture behind the results screen (`<p>-win` class), owner's coin and star icons | the 3D/top-down cameras never show a horizon, so the 4-7 painted backdrops, hero/cast sheets, props, other icons stay in the zips (same reason as happy farm); ocean defense's `bg_reef1-7` were replaced by the owner's 7 backdrops (not visible from the top-down camera) |
| alien_sky | backdrops 2-6 (`art/pano2..6`): race 1 picks pano 1-2, race 2 picks 3-5, the final shows the star arch (6) | |
| rhino_summit | backdrops 4-5: race 1 picks 1 or 4, race 2 picks 2 or 5, race 3 shows 3 | |
| happy_farm | (zips part1-3 checked: everything usable was already installed) | 8 backdrops, hero/cast sheets |
| learn_letters (English + German) | map picture behind the level list, round badges on the level tiles, win picture behind the end card; language cards on the chooser (`assets/games/learn_lang`) | the level backdrops (en_l01-09, de_l01-10): the 3D world's ground and sky cover them, so they were not kept; LANG-01/03..11 (island map, dog/hedgehog poses, medallions, seasons, stickers, album) are not used yet |
| English words | 252 new word pictures; new levels Around me, My home, My city and places, Where is the ball?, Beads; the routine level uses the owner's routine pictures; 12 shapes with the owner's pictures | no pictures missing |

## Fifth pass (2026-11-27): space_store (14 pictures from the owner's two zips)
- Installed with `tools/install_pack.py space_store ... 12 13 6,7,8,9` + `tools/make_skin_css.py`: key art -> poster + card (menu background and the card of the fun page), skin pieces (`skin/`), win picture (`art/win.webp`), 12 icons (`art/icon_*.webp`), 4 backdrops (`art/pano1..4.webp`, NOT wired: the store is seen from above like the farm).
- The game's menu/pause/win panels are `.ss-panel` (not the shared `.ss-card`), so `skin.css` styles `.ss-root .ss-panel` (the owner's frame with the cart and awning) and the ribbon title.
- Not used yet: hero sheet (04), cast sheet (05: robot cashiers, alien customers, cats), props/shelves/baskets sheets (10, 11), picture 14 (level-complete frame). The old `hero.webp` was removed (the key art shows the hero).
