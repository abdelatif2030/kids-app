# Review: Jungle Adventure («مغامرة الأدغال») against brief #2

Video: the recording path in docs/ORIGINAL_BRIEFS.md does not exist on this machine, so the review used the prompt text only.

## What the brief asks for vs the game
Auto-runner (tap = jump, hold = higher), stomp beetles, dodge bats, pits, spikes, wall-jump shafts, 3 levels (Jungle Trail, Sunken Ruins, Sun Temple), coins, 3 jade relics per level, shield / magnet / boots / hourglass, clock, totem then sun altar, cel-shaded 2D with outlines, parallax backdrops, mossy stone blocks, warm sunset light, panel-less HUD, frosted dark glass victory screen, professional sound.
Played in headless Edge (menu, level 1 run with keyboard jumps, ruins shaft, temple altar win): every item above is present and looked right; no console errors.

## Differences found
1. Victory/pause panel was clipped top and bottom on short landscape screens (about 300 px high): the title and the last button were cut off. FIXED in src/ui.js: the overlay scrolls and centres safely, and in landscape the portrait is hidden and spacing/buttons are compacted so the whole card fits.
2. The card picture ("after the game works") is handled by the Flutter side (not in this folder).

## Still different / not verified
- The original video was not available, so exact art details (colours, enemy shapes, HUD placement) are from the prompt only.
- Sound was not listened to by a person; real touch on a phone not tested.

Tests: `npm test` passes (12). Rebuilt with `npm run build`.

## 2026-11-20: generated pictures
Added with the free AI Horde generator (tools/art_jobs/jungle_adventure.json, files in assets/games/jungle_adventure/art, 208 KB, WebP):
- sky_jungle, sky_ruins, sky_temple: painted sky/valley backdrops (misty teal valley, overgrown ruins, sunset pyramids). They replace the code-drawn sky (gradient, sun, rays, clouds) in src/backdrop.js; the code-drawn far/mid/near parallax layers still scroll in front. A soft dark band at the top keeps the HUD readable.
- beetle: cartoon beetle (cut out by a custom flood-fill script because the generator's background was a pink gradient, then mirrored to face left), drawn in place of the code beetle with a small waddle; squash, flip and hitbox unchanged.
- relic: smiling jade gem, drawn over the same green glow and bob as before.
All loaded optionally with cozy_kit/art.js (loadArt); a missing file falls back to the code drawing (setPics in src/art.js, Backdrop.setPics).
Not used: the bat (generator ignored the white background twice; code bat kept), hero and coins (animated limb cycle / spinning coin need frames), tiles, totem/altar.
Checked in headless Edge (CDP, own http server): menu, level 1 (jungle), level 2 (ruins), level 3 (temple) screenshots; beetle faces the hero and reads clearly; HUD, coins and hero remain visible; no console errors apart from 404 for missing optional files before they existed; rAF rate 60 with and without the pictures (headless vsync-capped, so only a rough check). `npm test` 12 pass; rebuilt.
Still off: the ruins backdrop has heavy stone pillars at both edges (busy behind the HUD); relic has small feet (cute rather than ancient); sound/real device not tested.

## Phase 2E — Batch F: 12 real maps + relic album (2026-11-27)

Levels 4–6 were `remix()` copies of maps 1–3 (same rows, extra beetles). They are now real maps, and six
more follow them — LEVELS is 12 authored maps, the `remix()` function is deleted, and a test pins all 12
row-signatures distinct. The journey: maps 1–6 = Fayoum (the original trail/ruins/temple, then Wadi El
Rayan Falls — a terrace climb with a wall-kick falls shaft; Qasr Qarun Gate — a fast gate run with two
shafts; Wadi El Hitan Terraces — dig terraces stepping down then one shaft out), maps 7–12 = Siwa island
(Siwa Oasis palm-ledge maze, Salt Lake Flats, Shali Fortress with two tall shafts, Cleopatra Spring
island-hop ponds, Palm Groves ledge loops, and the Great Oracle Temple finale ending at the sun altar).
Every map keeps the proven grammar (gaps 2–3 tiles, steps ≤3 rows, shafts in the exact ruins proportions —
climb of 7 with the column ending 3 rows above the floor — exactly 3 jade relics, ≥2 flags, ≥40 coins);
gap/bat/verticality load grows across the 12. Three design traps were found by the robot and fixed:
a short shaft lets the runner fly over the column top, a bat at a shaft mouth makes her jump into the
column face, and a relic ledge feeding a shaft traps her against it.

Relic album: each map now names one special relic (in its level def). It is earned by finding all 3
hidden jade relics of that map in a single run (the existing placed pickups — `best[id].relics` already
tracked the best run), recorded in `save.album`, shown in a new menu-reachable album screen (found =
name + 💎, missing = ❔ "still hidden"), and announced on the win card when newly earned. A relic is
never required to finish or unlock anything. Old saves migrate: `unlocked` is a count, so a 6-level save
keeps maps 1–6 open (the new maps 4–6 sit at the same indices 3–5); stars for trail/ruins/temple survive
by id; the remix-era ids (trail2/ruins2/temple2) are dropped, and any map whose best already had 3 relics
gets its album relic for free.

Backdrop: a new `oasis` theme (tile palette in art.js + sky/dune/palm palette in backdrop.js) carries the
Siwa maps 7, 8, 10, 11; Shali and the Oracle finale use the sandy `temple` theme — so island 2 looks
different from island 1 without new art files. The level-select card area now scrolls (12 cards no longer
clip the logo/hero row), and the progress-bar end icon follows the goal kind (altar vs totem) instead of
hard-coding level 3.

Playtime (robot wins, from the test log): before ≈ 3.4 min of sim time for 6 levels, half of it replays;
after = 416 s ≈ 6.9 min of sim time for 12 distinct maps → an estimated ≈15–20 min for a child playing
slowly and hunting relics (the plan's ≈20 min target). Tests: 34/34 (`npm test`), including new pins for
LEVELS=12, distinct signatures, the full unlock chain, the 6-level save migration, and the album rules;
the existing robot proves every map start-to-goal. Build: game.js 164.9 KB. Click-flow verify
(phase2e_verify, 3 landscape sizes): PASS, 0 page errors; menu, album and gameplay eyeballed from
screenshots. Not tested: a full human playthrough of maps 4–12, real-device touch, sound.
