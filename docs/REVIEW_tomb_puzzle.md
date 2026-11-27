# Review — tomb_puzzle → «سليم وكنوز الفراعنة / Salim and the Pharaohs' Treasure»

## What the game is

A 3/4-view Pharaonic sliding/tile tomb puzzle (three.js, all in-tomb art drawn
in code via canvas textures). The little explorer walks 12 hand-made rooms in
3 tombs: push stone blocks onto sun plates to open doors, fill pits with
blocks, spend ankh keys on locked doors, light braziers to open gates, and
mind the crumbling floor. Undo, reset, solver-backed hints, stars per room.
Pure rules live in `src/sim.js` (BFS solver included), content in
`src/levels.js` — 2 ankh keys per room, 8 per tomb.

## Batch E — Egypt identity + kind stars (2026-11-27)

### Identity: named and placed
- In-game title is now «سليم وكنوز الفراعنة / Salim and the Pharaohs'
  Treasure» (AR/EN pair in the i18n table); the subtitle names the hero:
  «مغامرة سليم المستكشف الصغير / Little Salim the explorer's adventure».
  The built `index.html` `<title>` matches. The hero is Salim, a little
  explorer kid.
- The three tombs are re-sited at real places (tomb **ids unchanged** —
  `'sand'/'gold'/'moon'` — so existing saves keep working):
  | id | before | now |
  |---|---|---|
  | `sand` | Pharaoh Sands | **سقارة / Saqqara** (step pyramid) |
  | `gold` | Golden Treasury | **وادي الملوك / Valley of the Kings** |
  | `moon` | Moonlit Tomb | **أبو سمبل / Abu Simbel** |

### Pool art wired (shared `assets/games/art/`, read-only — referenced, never modified)
- Menu screen and tomb-select/map screen now use the shared-pool exterior
  **`desert_pano.webp`** as the scene backdrop, loaded via
  `${base}../art/desert_pano.webp` through a new minimal loader,
  `loadExteriorTex`, in `src/textures.js` (the game's texture module style).
- `d_pyramid2.webp` was evaluated first for the menu and **rejected as a
  backdrop**: it is a black-background icon cutout, so as a full-screen
  background it renders as a black field with the pyramid hidden behind the
  menu card (seen in the first Batch E frames). The panorama "as fits the
  layout" serves both exterior screens instead.
- In-tomb screens are untouched: `_build()` still sets the tomb's own colour
  background and canvas textures; starting a room clears the exterior.
- **Fallback is graceful and verified**: if the pool picture fails to load,
  the loader's error path keeps the existing background — the verify script
  blocks all `/art/` requests and the menu still renders with zero page
  errors.

### Kind rules (Batch C item): par no longer grades
- `src/sim.js` `starsFor` previously granted the 3rd star only when
  `moves <= par` — par grading, banned by the house rules. Now stars are
  **completion + collection only**, using the collectible the sim tracks
  (ankh keys): ⭐ reaching the exit, ⭐⭐ + finding at least one ankh key,
  ⭐⭐⭐ + finding **every** key the room offers — at any speed.
- `par` remains only as a displayed best-moves hint (HUD) and a non-star
  "✨ best-moves sparkle" line on the results card; it never gates a star.
  The results rows were updated to the new meanings.
- Tests updated/added accordingly: a slow solve (moves > par, and a solve
  with `moves = 999`) with all keys still earns 3 stars; partial collection
  earns 2; exit-only earns 1; not-won earns 0; a tomb-name test pins the
  Saqqara / Valley of the Kings / Abu Simbel pairs and the unchanged ids.

### Tests
- Baseline: **17/17** (`npm test` before changes).
- Final: **19/19** — count grew, none dropped. `npm run build` done;
  built `game.js` is 145 KB (shared-engine build).

### Real click-flow verification
- Own script: `~/tools/recorder/phase2cE_tomb_puzzle.mjs` (pattern copied
  from `phase2c_verify.mjs`; the shared harness was not edited).
- **20/20 checks passed, zero page errors** in all three flows (AR main, EN,
  art-blocked fallback): menu shows the new title, map shows
  سقارة / وادي الملوك / أبو سمبل (and the EN names), the panorama texture is
  the live scene background on menu and map, room 1 was entered by clicking
  its real map button, the explorer moved 3 moves via keyboard input, and
  the in-tomb background is the tomb colour again.
- Frames in `~/workspace/projects/audit/shots_phase2c/`:
  `tomb_puzzle_menu_*`, `tomb_puzzle_map_*`, `tomb_puzzle_*` at
  844×390, 1024×768, 1366×1024 — eyeballed: panorama visible around the
  menu and map cards, tomb names correct, room renders with Salim on the
  carpet after the moves.

### Honest gaps
- The master plan's level target is 5 tombs / 20 rooms; this batch re-sites
  the existing 3 tombs / 12 rooms only — the 2 extra tombs are Batch F
  content work, not done here. *(Closed by Phase 2F below.)*
- The museum collection book and free-explore in finished tombs (plan §3)
  are not implemented; the map still shows the per-tomb ankh count (n/8).
  *(Museum book closed by Phase 2F below; replaying finished rooms was
  already possible from the map, so no separate explore mode was built.)*

## Phase 2F — 5 tombs / 20 rooms + museum book (2026-11-27)

### Content: 2 appended tombs, 8 new rooms (ids 13–20)
- Appended — never renumbered — two real sites as tombs 4 and 5 (tomb ids
  `'tut'` / `'hat'` appended to `TOMBS`; existing ids and room ids 1–12 are
  untouched, and saves key progress by room id, so old saves are safe):
  **مقبرة توت عنخ آمون / Tomb of Tutankhamun** (rooms 13–16) and
  **معبد حتشبسوت / Temple of Hatshepsut** (rooms 17–20). Tutankhamun's tomb
  sits inside the Valley of the Kings in reality, but as its own exhibit it
  is the most famous tomb in Egypt and earns its own wing; Hatshepsut's
  terraced temple at Deir el-Bahari gives the finale a distinct sunlit
  limestone look.
- Each new room is a hand-made layout in the exact existing format
  (2 ankh keys, one start, one exit, ≤8×10), using only existing mechanics:
  plate/door pairs (incl. a two-plate door in 17 and a two-door chain in
  15), pit-filling (13, 19, 20), a locked door that spends a key (14, 18),
  torch/gate pairs (14, 16, 18, 20) and crumbling floor (14, 16, 18, 20).
  A test proves no room duplicates or horizontally mirrors any other.
- `par` values were computed with the game's own BFS solver exactly like
  the original rooms: optimal all-keys solutions are 16/25/14/20 (Tut) and
  19/19/14/26 (Hatshepsut), and each `par` = optimal + ~25 % slack, inside
  the test's bound. Pars remain a non-star sparkle only — stars are still
  completion + collection.
- New code-drawn palettes in `textures.js` (`tut`: deep gold + teal carpet;
  `hat`: sun-bleached limestone + terracotta), wired via `TOMB_LOOK` /
  `TOMB_BTN`. No owner's images were touched; no new mechanics or art.
- Save change is one number: `normalizeSave`'s `unlocked` cap rose 12 → 20.
  An old save keeps its exact value and maps (migration test pins this).

### Museum book (menu → 🏛️ كتاب المتحف / MUSEUM BOOK)
- Follows the ocean_defense reef-guide pattern: a pure `museumEntries(save)`
  in `sim.js` derives one exhibit per tomb from the existing save only
  (no new persistence). An exhibit opens when **every room of the tomb is
  completed**: it then shows the tomb icon, name (ar+en), collected ankh
  keys (n/8), total stars, and a one-line true fact (ar+en, stored as
  `fact` on each `TOMBS` entry — facts were also added for the 3 old
  tombs). Incomplete tombs render as locked silhouettes with an n/4
  progress count and no fact. The screen is read-only.
- Verified live with real menu clicks: fresh save → all 5 exhibits locked;
  seeded save (tombs 1–3 complete, Tut 2/4 rooms) → 3 open exhibits with
  facts, Tut locked at 2/4, Hatshepsut locked at 0/4; the map shows all
  5 tombs with the correct lock chain. Frames:
  `audit/shots_phase2f/tomb_puzzle_museum_fresh.png`,
  `tomb_puzzle_museum_seeded.png`, `tomb_puzzle_map5_1024x768.png`,
  plus gameplay frames of rooms 13 and 20 in the new palettes
  (`tomb_puzzle_room13_1024x768.png`, `tomb_puzzle_room20_1024x768.png`).

### Playtime (method stated)
- Method: BFS optimal all-keys move totals (solver-measured) × 5 s per
  move (child pace incl. thinking) × 1.75 retry/exploration factor.
  Before: 239 optimal moves → ≈ 35 min. After: 392 optimal moves
  (239 + 153 new) → ≈ 57 min, i.e. ≈ the 60-minute target.

### Tests / build / verify
- `npm test`: **23/23** (was 19). Extended: 5 tombs / 20 rooms structure,
  sequential append-only ids, every room solvable with par achievable
  (the pre-existing solver test now covers all 20), no copy/mirror rooms,
  unlock chain across all 5 tombs, museum lock/unlock logic, old-save
  migration, save cap 20.
- `npm run build`: built `game.js` is **155 KB** (was 145 KB; ≤200 KB
  target holds).
- `node phase2f_verify.mjs tomb_puzzle` → **PASS, 0 page errors**; menu
  shows the new museum button, room 1 entered by real clicks. (The
  harness's second click lands on ⏸, so its still frames show the pause
  card; real gameplay frames of rooms 13/20 were captured separately
  with the seeded-save script `phase2f_tomb_newrooms.mjs`.)

### Honest gaps
- Difficulty inside each new tomb is not strictly monotonic (room 15's
  optimal is 14, shorter than room 14's 25 — its two-door chain still has
  a large state space, 1,630 states); across the 20 rooms the arc rises
  gently and the finale (room 20, optimal 26) is the longest room.
- The museum list scrolls inside the card at small heights (same pattern
  as the level map); all 5 exhibits are reachable by scrolling.
- No new voice lines: room hints and museum strings are text-only reusing
  the existing i18n mechanism; nothing new is spoken, so there is no
  add-to-instinct table for this batch.
- Not tested on a real device/WebView; verification is headless Chromium
  (SwiftShader) as in prior batches.
- `d_pyramid2.webp` remains unused by this game (see above — icon cutout,
  wrong shape for a backdrop). No art was deleted or replaced.
- No new voice lines were needed: all existing VoiceCoach events and clips
  are unchanged, and no displayed text was added beyond the renamed
  title/subtitle/tomb names and the results-row wording, which reuse the
  existing i18n mechanism.
