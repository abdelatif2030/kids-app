# Review: «طبق الحلويات» Sweet Tray vs the original video (brief #30)
Video: 370x586, 44 s (match-3 tray game on a pastel bakery counter). Compared by ffmpeg frames and by playing the build in headless Chrome.

## What the original does
A smallish plate (about 60% of width) holding a pile of small stacked sweets (donuts, cupcakes, macarons, cookies, strawberries); tap an uncovered sweet to send it to a 7-slot tray; three equal vanish with +30 floats, "COMBO x2/x3", "SWEET!"; a bonus bar fills with combos; level pill + progress bar, star score pill, sound button; "OUT OF SPACE!" card when the tray fills; bakery shelves with sweets behind the plate; wooden counter.

## Differences found
1. Sweets were ~35% too big and the plate filled the screen; level 1 had 18 sweets (original about 12).
2. Plate too large against the tray.
3. Extra helper buttons (undo, shuffle, extra slot) under the tray: not in the video.
4. The background has bunting and tiles but no shelf with sweets.

## Fixed (game_src/sweet_tray)
Level 1 = 12 sweets (4+level triples), sweet size 15% of the plate shrinking to 11% (was 20 to 12.5), plate 76% of the width. `npm test` 11/11 (solvability proven), build ok, no console errors.

## Still different
Helper buttons kept (an aid for small children, not in the video); no shelf-with-sweets background; no "PLAY NOW" button (that is an ad button, deliberately not copied).

---

## Phase 2D — Egypt anchor: «صينية الكنافة / Kunafa Tray» (2026-11-27)

**What changed (name only):** the title «طبق الحلويات / Sweet Tray» →
**«صينية الكنافة / Kunafa Tray»** — the little tray is a kunafa tray in
a sweet shop now. Levels, helpers and saves untouched.

**Kind-rule check (the plan's "fail-state softening"):** already soft by
design, verified in code — a full tray shows "The tray is full. Try
again, nothing is lost!" and offers Undo / Extra slot, both of which
return the game to play (the sim's slot helper explicitly revives the
'lost' state); with no helpers left it is a gentle replay. A test now
pins the recoverability. The verify HUD shows the helpers (undo ×1,
shuffle ×2, slot ×1) in play.

**Tested:** `npm test` 12/12 (+1 anchor/recoverability test); build
green; real click-flow verify PASS — menu title, level-1 board with
helper bar, frames at 3 sizes, 0 page errors.

**Not done (Batch F):** the 36 formula levels → 4 named chapters
(kunafa → qatayef → basbousa → Eid kahk) restructuring is not built.
Not tested on a real device.

---

## Phase 2E — Batch F: 4 chapters × 9 trays, the board itself changes (2026-11-27)

**What changed:** the 36 formula levels now have chapter structure. `sim.js`
exports `CHAPTERS` (4 × 9) and a pure `chapterOf(level)` helper; level
generation is byte-identical (chapters are presentation + framing only) and
saves are untouched — a test pins that an existing save opens identically.

| # | Chapter | Board (code-drawn in sprites.js) |
|---|---------|| 1 | دكان الحلواني / The Sweet Shop (1–9) | the original round pink porcelain plate on a lace doily, bakery bunting — unchanged |
| 2 | ليالي رمضان / Ramadan Nights (10–18) | round **copper tray** with engraved rings + crescent on a purple patterned cloth; night-indigo wall, stars, crescent moon, glowing lantern string, red diamond Ramadan tablecloth |
| 3 | نصبة المولد / The Mawled Stall (19–27) | rectangular **wooden stall shelf** (planks, corner nails, front lip, worn centre patch); red/white striped festival awning, back shelves with sweet jars |
| 4 | نزهة العيلة / The Family Picnic (28–36) | round **red gingham picnic cloth** with scalloped frill on grass; sky strip with sun and clouds, tiny flowers |

**How:** `drawBackground(..., board)` dispatches per chapter board id; the
background is drawn once into the cached bg canvas at level start / resize —
zero per-frame cost in the move loop. The sweets, positions, tray and helpers
are identical in every chapter; only board/frame/dressing change.

**UI framing:** the level select groups the 9 buttons of each chapter under a
coloured chapter header; starting a level in a new chapter shows a short
banner («الفصل ٢ · ليالي رمضان»); winning level 9/18/27/36 adds a
chapter-complete line («🎉 خلّصت فصل…») to the existing win card. No new
screens, no save changes, the soft fail state (undo / extra slot, "nothing is
lost") is untouched.

**Playtime:** the plan target is ≈60 min. Honest evidence: the constructive
solution taps 2,367 sweets across the 36 levels (243 / 486 / 729 / 909 per
chapter); at a child's ~1.5 s per tap including thinking that is ≈59 min —
on target. (At 1.2 s/tap ≈47 min, at 2 s/tap ≈79 min.)

**Tested:** `npm test` 17/17 (+5: chapter tiling 4×9=36 no gaps/overlaps,
chapterOf boundaries 1/9/10/18/19/27/28/36, constructive top-first win for
every level grouped per chapter, save-opens-identically, board wiring).
The pre-existing solvability test already replays `solve()` + top-first for
all 36 levels. Build green, game.js 127.9 KB. `phase2e_verify.mjs sweet_tray`
PASS, 0 page errors, frames at 3 sizes eyeballed. Cross-chapter frames
captured with a seeded save passed through the game's own `crStart`
config.save channel (`{unlocked: 36}` — this game has no localStorage):
map grouping, ch2 banner + board, ch3 board, ch4 board — all visibly
different, sweets readable everywhere. Level 9 was also won in-browser
through the real tap path (top-first order, 3 stars) and the win card's
chapter-complete line was screenshot-verified.

**Not tested:** a real device / WebView; the chapter-complete lines for
18/27/36 in-browser (same code path as 9, which was verified); English UI
frames (names come from the same ar/en arrays the tests pin).
