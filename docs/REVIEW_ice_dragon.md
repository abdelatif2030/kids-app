
---

## Phase 2D — Egypt anchor: «تنين الواحة / Oasis Dragon» (2026-11-27)

**What was wrong:** a generic "Ice Dragon" hunting generic places (Frost
Cave, Ghost Lake, Mountain Heart), with a "Dragon defeated!" win line —
and an outdated audit note claiming the game ships silent.

**What changed (names/framing only — ids, segment counts, speeds, saves
untouched):**
- Title: «تنين الجليد / Ice Dragon» → **«تنين الواحة / Oasis Dragon»**.
- The story is now kind: the snow dragon's ice armour traps the oasis
  spring — crack the armour to **free the water and befriend the dragon**.
  The win line is «حرّرت الواحة! / You freed the oasis!» and the how-to
  carries the same framing. The hero was never hurtable and the dragon
  only ever roared; that design already fit the house rules.
- The six hunts are oasis places now: Snow Oasis → Turquoise Lake →
  Oasis Dragon Lair → Oasis Bridge → Calm Oasis Lake (was "Ghost Lake")
  → Heart of Mount Catherine.

**Sound check (correcting the old audit note):** the game is NOT silent —
it has a synth music tune + wind bed (started on play via setMode) and the
installed ar/en voice clips are present in its voice folder. No music
work was needed.

**Tested:** `npm test` 5/5 (+1 anchor test: six oasis hunts, ids and
dragon sizes unchanged); build green; real click-flow verify PASS with
0 page errors. Harness note: the generic verifier's second click hit the
in-game ☰ (menu) button and bounced back to the level list, so gameplay
was additionally confirmed with a single-click check — HUD shows segments
left (11), allies, pause and the shrine hint, 0 errors, frame captured.

**Not done (Batch F):** the 12-hunt target with 3 maze layouts and the
dragon mood arc (grumpy → friend) as staged story beats are not built;
the befriend framing lives in the text. Not tested on a real device.

## Phase 2F — 3 maze layouts × serpent variants (2026-11-27)

**Before:** all 6 hunts shared ONE ice maze (7 blocks) and one serpent
look; only seg/hp/speed grew per level.

**Now — `LAYOUTS` in sim.js, assigned by journey leg (levels 1–2 / 3–4 /
5–6 via a new `layout` field on each LEVELS entry):**
1. **Fayoum oasis** — the original maze, byte-equivalent (guarded by a
   deep-equal test; `WALLS` still exports it), original teal serpent,
   scale 1.0, speed ×1.0 — levels 1–2 unchanged in feel.
2. **Nile bend** — three staggered vertical bars (the river bends left,
   right, left) plus two edge bars; slim green Nile serpent
   (tint 0x27c878, scale 0.85, speed ×1.07).
3. **Red Sea lagoon** — a broken coral ring around a centre block with
   diagonal gaps; big slow royal-blue lagoon serpent (tint 0x4a6ae8,
   scale 1.15, speed ×0.93).

Variants are parameters only (tint/scale/speedMul on the layout, consumed
by the sim's pace and the renderer's segment meshes) — no new serpent
mechanics, and the befriend/taming ending flow is untouched. No timers
or lives added; difficulty rises via lane structure only. Walls are now
built per level in `start()` (they were rendered once from the global
maze); layouts are build-time data, so per-frame cost is unchanged.

**Traversability, proven:** a BFS test walks the exact grid the sim
defines (`blockedIn`, hero radius 0.4) from hero start to every shrine
and barrel of every level on all 3 layouts. Two early layout drafts
failed the *play robot* (not BFS): corner pockets wedged diagonal
steering, so the lagoon corner accents moved out to ±4.9 (real ~0.95
lanes) and the Nile caps became edge bars. The robot now completes all
6 levels on all 3 layouts and actually sweeps the shrines (allies 4–8
on the new layouts vs 0–2 before).

**Also fixed (found by the new migration test):** `normalizeSave` read
stars only for levels 1–3, silently dropping stars earned on hunts 4–6
on reload; the loop now runs to `LEVELS.length`. Old saves migrate with
progress preserved (tested).

**Playtime (test-robot model, seed 3, summed win times):** before
309 s (43/32/64/62/61/47) → after 208 s (43/32/21/21/45/46). The robot
is an efficient lower bound; at a realistic child pace (×3–6: wandering,
barrel pushing, repositioning) the full game is ≈10–21 min. **The
≈30 min plan target is NOT reachable by layout changes alone at 6
hunts** — it assumed the deferred 12-hunt expansion; no levels were
invented and nothing was padded to fake it.

**Tested:** `npm test` 9/9 (was 5) — layouts exist/pairwise distinct,
layout 1 identical to the original maze, serpent variants parameter-only,
BFS reachability on all layouts, robot wins all levels, unlock chain +
old-save migration, anchor test intact. Build green: game.js 54.2 KB
(≤200 KB target). `phase2f_verify.mjs ice_dragon` PASS, 0 page errors;
frames eyeballed at 844×390 / 1024×768 / 1366×1024, plus seeded-save
(?rich=1) gameplay captures of level 5 (lagoon ring, blue serpent) and
level 3 (Nile bars, green serpent) — mazes visibly differ. Music/voices
untouched (the game was never silent; no lines added, none needed).

**Not tested:** real device / WebView; a child's actual completion time
on layouts 2–3 (robot + BFS are the evidence); portrait sizes.

**Phase 2F fix — level-unlock cap (2026-11-27):** `_won()` in
`src/main.js` capped the in-session unlock at `Math.min(3, lv + 1)` — a
leftover from the 3-level era. Winning level 3 therefore left
`save.unlocked` at 3 and levels 4–6 showed LOCKED in the level-select
menu in-session (the win card's Next button bypassed the lock, and a
reload self-healed via `normalizeSave`'s star-derived unlock, but a
child returning to the menu saw the next level locked). The cap is now
`Math.min(LEVELS.length, lv + 1)`; nothing else in the unlock logic
changed. Sibling-cap audit: no other stale level cap exists in the
game's src — `normalizeSave` already caps at `LEVELS.length` and loops
stars to `LEVELS.length`; the remaining `Math.min(3, …)` in sim.js is
the weapon tier cap (1 single / 2 triple / 3 wide) and `Math.min(8, …)`
is the allies cap, both legitimate. Regression coverage: `_won()` is
DOM/THREE-bound and not importable by the node sim tests, so the new
test pins the sim-level derivation it must agree with (stars on level 3
→ unlocked 4, through 5→6, capped only at 6). The in-session behaviour
itself was verified in the built game with a puppeteer probe: seeded
`unlocked=3`, started level 3, invoked the real `_won()`, returned to
the menu — `save.unlocked` became 4, the Level 4 button rendered
unlocked (🐉, no `dark` class) while Level 5 stayed locked, 0 page
errors, menu frame eyeballed. `npm test` 10/10 (was 9), build green
(54.2 KB), `phase2f_verify.mjs ice_dragon` PASS, 0 page errors.

## Certification Sweep A (2026-11-27) — INCOMPLETE: environment blocker, see status

### Level inventory (all 6 hunts)

| # | Hunt | Maze layout | Serpent variant | Seg / HP / Speed | Shrines / Barrels | Scene look (after fix) |
|---|---|---|---|---|---|---|
| 1 | واحة الثلج / Snow Oasis | Fayoum oasis (original) | teal, scale 1.0, ×1.00 | 11 / 6 / 2.0 | 3 / 3 | Pale dawn (original) |
| 2 | بحيرة الفيروز / Turquoise Lake | Fayoum oasis | teal, 1.0, ×1.00 | 15 / 9 / 2.3 | 4 / 3 | Bright noon blue |
| 3 | عرين تنين الواحة / Oasis Dragon Lair | Nile bend | green slim, 0.85, ×1.07 | 20 / 13 / 2.6 | 4 / 4 | Emerald |
| 4 | جسر الواحة / Oasis Bridge | Nile bend | green slim, 0.85, ×1.07 | 23 / 15 / 2.8 | 5 / 4 | Warm sunset |
| 5 | بحيرة الواحة الهادية / Calm Oasis Lake | Red Sea lagoon | blue big, 1.15, ×0.93 | 26 / 17 / 2.9 | 5 / 5 | Violet dusk |
| 6 | قلب جبل سانت كاترين / Heart of Mount Catherine | Red Sea lagoon | blue big, 1.15, ×0.93 | 29 / 20 / 3.1 | 6 / 5 | Deep night blue |

Maze layouts are pairwise distinct (test-pinned); hunts differ in maze,
serpent, size/speed curve, shrine/barrel counts — and, after this sweep, in
scene palette too.

### ❌ found and fixed this sweep (commit 6f2d1a30)
1. **Stars were graded by finishing TIME — a kind-rules violation.** `Hunt.step`
   awarded 3 stars only under a time threshold (`time < 70 + level*25`), 2
   under a second one. House rule: stars are completion + collection only,
   never speed. **Fix:** stars = 1 for freeing the oasis + 1 for cracking at
   least one shrine + 1 for cracking every shrine the hunt offers, at any
   speed. Regression tests prove: slow win (time = 100,000 s) with all
   shrines = 3 stars; instant win with no shrines = 1 star; partial shrines
   = 2 stars at any speed. The win card still displays the time as
   information only — it no longer grades anything.
2. **All 6 hunts shared one scene background.** Sky, water, island, wall and
   peak colours were identical on every hunt; only the maze changed every
   two hunts and the serpent tint with it. **Fix:** `LEVEL_LOOKS` in main.js
   — a distinct code-drawn palette per hunt (sky/fog, water + emissive deep,
   island, ice top, maze walls, distant peaks), applied once in `start()`
   via dedicated materials. No new files, no per-frame work. Also hoisted
   the render loop's per-frame `Matrix4`/`Vector3` allocations to shared
   scratch objects.
3. **2F regression re-proven at sim level:** the dropped-stars shape
   (`unlocked: 3, stars: {4:3, 5:2, 6:1}`) now round-trips with stars 4–6
   intact and star-derived unlocked = 6; the unlock-cap derivation
   (win hunt 3 → unlocked 4 … capped only at 6) is pinned by tests. The
   in-browser `_won()` probe is scripted in the cert harness (section E)
   but did not complete before the environment collapse (below).

### Evidence gathered (fixed build)
- `npm test` **12/12** (was 10; +2 Sweep A tests above). The robot still wins
  all 6 hunts on all 3 layouts; BFS reachability intact.
- `npm run build` green; game.js **56.6 KB** (≤200 KB).
- `node phase2f_verify.mjs ice_dragon` → **PASS, 0 page errors** on the fixed
  build (real menu clicks, hunt 1 entered); frames at 844×390 / 1024×768 /
  1366×1024 in `~/workspace/projects/audit/shots_phase2f/` eyeballed — menu
  clean, locks correct. The cert harness's fresh-menu section also passed
  (title ✅, hunts 2–6 locked ✅) before the environment degraded.

### Cycle status — NOT certified yet (honest)
The full 3-cycle protocol (per-hunt frames at 3 sizes + portrait, 14 s of
real keyboard play per hunt, a full in-browser win of hunt 1, the `_won()`
unlock regression and pre-fix-save flows in the real UI, touch drag,
VoiceCoach audit, 4×-throttled perf) could **not** be completed: the shared
VM collapsed under ~a dozen concurrent sweep agents (load average peaked at
174, repeated OOM kills, two runtime restarts). A resumable runner
(`~/workspace/audit/cert_a/runner.sh`; ice chunks: hunts 1–3 / hunts 4–6 /
tail) is left detached and accumulates `checks_*.json` + frames under
`~/workspace/audit/cert_a/ice_dragon/cycle<N>/` — re-drive it when the
machine is calm. **No two consecutive clean rounds are claimed.**

### غير مؤكد (unconfirmed)
- Per-hunt look-distance numbers not yet measured (sampling harness queued
  in the runner); the six palettes are code-reviewed and the menu/hunt-1
  frames eyeballed, but hunts 2–6 looks have not been frame-verified.
- Full in-browser win, `_won()` in-session unlock probe, pre-fix save in the
  real UI, touch drag and VoiceCoach cooldown audit: scripted, unit-proven
  where applicable, browser sections incomplete (environment).
- Perf under 4× CPU throttling NOT measured (no numbers claimed); changed
  code recolours materials once per hunt start and removes two per-frame
  allocations. Real device / WebView untested; composed music + voice clips
  not heard by a human this sweep.

### Add to instinct
- None. No new spoken lines; the star-rule change is silent (the win card's
  spoken line is unchanged).
