# Review: «مغامرة الذيل الذهبي» Golden Tail Chase — Phase 2B (Batch B1)

## What was reviewed
Audit card (racing_action.md) + GAMES_MASTER_PLAN item 2.15: the game shipped 6 painted
panoramas, 14 reward icons and a win illustration (assets/games/golden_tail/art/) that no
code loaded. The playground floated on a flat sky colour.

## Changed (game_src/golden_tail)
- `src/main.js`: new `_setPano(n)` / `_followPano()` (the ball_scoop pattern): a mirrored
  panorama ring (radius 58, `fog:false`, renderOrder −10, visible only once its texture
  has loaded) around the playground, following the camera. `startLevel(i)` shows
  pano i+1 (6 levels ↔ pano1..6); `showMenu()` shows pano1.
- Results card: the owner's `art/win.webp` now heads the win panel, and the earned stars
  use `art/icon_star.webp` (the existing `.off` greyscale style dims unearned stars).
- `src/ui.js`: sizing CSS for the star icons and the win art.

## Tests & playtest evidence
- New regression test: every level has a shipped `art/pano<level+1>.webp`, plus win.webp
  and icon_star.webp exist. `npm test` 11/11 pass; `npm run build` ok.
- Real click-flow harness (phase2b_verify.mjs): menu shows the pano ring visible;
  clicking the level-1 node starts play with the ring visible. Zero page errors.
- Frames at 844×390 / 1024×768 / 1366×1024 in ~/workspace/projects/audit/shots_phase2b/;
  pixel check of the play frame's sky strip: 12,647 unique colours (painted art, not the
  old flat sky colour).

## Honest gaps
- The other 12 icons (coin, gem, chest, crown, gift, heart, key, magnet, medal, shield,
  boost) are a generic reward set with no natural slot in this game's HUD/results —
  left unused rather than forced in; noted in docs/AI_WORK_LOG_P2B.md.
- The game's own 60 s hold-the-tail round timer is a scoring window, not a fail clock
  (the round always completes and reports held-time/grabs) — not a Batch C item.

---

## Phase 2D — Egypt anchor: «الذيل الذهبي في الواحة / Golden Tail Oasis» (2026-11-27)

**What changed (names only):** the golden-tail dino's playground moves
from a generic forest to an oasis palm grove. Title «مغامرة الذيل
الذهبي / Golden Tail Chase» → **«الذيل الذهبي في الواحة / Golden Tail
Oasis»**; the six rounds are Palm Plaza → Oasis Bridges → Oasis
Bouncers → Sand Slides → Oasis Lookout → **Oasis Cup**. The keep-away
mechanics, round clocks (a match clock that ends the round, not the
game), rivals and saves are untouched. The 12 unused icon files noted
in Phase 2C remain an owner question, not deleted.

**Tested:** `npm test` 12/12 (+1 anchor test); build green; real
click-flow verify PASS — menu title, round-1 HUD naming Palm Plaza
with the match clock, frames at 3 sizes, 0 page errors.

**Not done (Batch F):** palm-grove dressing of the playground geometry
is not built. Not tested on a real device.

---

## Phase 2F — six genuinely different arenas (2026-11-27)

**What changed:** the six rounds no longer share one playground. `src/data.js` now builds a
per-level arena (`ARENAS` / `getArena(i)`: platforms, strips, mushrooms, trunks) from a small
declarative link table; `floorAt`/`buildGraph` take an arena (default = level 1, behaviour
identical); `src/sim.js` keeps a per-level graph cache and reads all geometry from its own
arena; `src/main.js` rebuilds the visible playground (`_buildPlayground(i)`, old geometries
disposed) on `startLevel`/`showMenu`. The Phase 2B panorama ring and win-card wiring are
untouched, as are the owner's images — including the 12 unused icons (owner question, left
exactly as they were).

**The six arenas (Siwa):**
1. **Palm Plaza** — the original shared arena, byte-for-byte (pinned by a snapshot test
   against the pre-2F geometry): the opening experience and bot expectations are unchanged.
2. **Oasis Bridges** — 9 decks in a ring over the spring pools, 10 rope bridges, 1 broken.
3. **Oasis Bouncers** — palm-canopy climb: few bridges, 5 mushrooms, highest deck y=8.
4. **Sand Slides** — salt-lake terraces: 5 slides, the most of any arena.
5. **Oasis Lookout** — Shali fortress wall-tops: the highest arena (keep y=5, tops to y=9).
6. **Oasis Cup** — the widest final (span 17 vs 13), 9 decks, **two** broken bridges.

Difficulty rises by layout only (span, verticality, broken bridges, rival counts/speeds as
already defined) — round clocks, stars, ids and order are unchanged, so old saves migrate
untouched (pinned by test). One real bug was found and fixed while proving traversability:
arena 6's p4 slide originally ended outside the playground radius (r≈25.7 > GROUND_R 25) and
a sliding dino stuck against the rim clamp; several far slide/ramp endpoints were shortened
so every strip ends inside r≤23.9.

**Traversability & robot:** for every arena, the walking graph connects the start deck to
every deck (forward BFS over the graph's own one-way edges) and every node can walk-reach
every goal (the animals' rule); every mushroom in every arena lands the dino on its deck and
every slide descends (sim-tested). The test robot was also repaired where the bigger arenas
exposed *robot* flaws, not game flaws: its no-jump route table made graph-artifact
'drop'/'edge' nodes unreachable goals (it stood still forever), its chase target flipped
nodes every frame, and it never used the open floor — it now remaps artifact goals, holds a
chase target for 0.75 s, and runs/chases directly on open ground like a child (the dino
outruns every rival there). Robot wins (seeds 1–4): **17/24, at least one win at every
level** — before, on the single shared arena, the same test measured 13/24 with 0/4 at
level 6.

**Playtime (robot-measured, child-modelled):** round clocks are unchanged by design, so a
single pass is 328 s (310 s of rounds + countdowns) before and after. What changed is the
tournament: expected completion (win each level once; expected attempts = 1/robot win-rate
over 8 seeds/level, round time = clock + countdown) ≈ **9.0 min**, and the full 3-star chase
(1/robot 3-star-rate) ≈ **23.9 min** — the ≈20 min master-plan figure sits between the
unlock run and the 3-star completion. Before 2F the sampled robot never won level 6 at all
(0/4 seeds), so no finite completion estimate existed.

**Tests & verify:** `npm test` **18/18** (was 12; +6: L1 snapshot identity, six distinct
arena signatures + themed layout assertions, full-arena reachability, mushrooms/slides in
all arenas, robot completes all 6, ladder 1→6 + save migration). `npm run build` green —
game.js **143,069 bytes (139.7 KB)**, ≤200 KB kept; geometry is build-time data, no
per-frame cost added (playground rebuild happens only on level start/menu).
`phase2f_verify.mjs golden_tail` → **PASS, 0 page errors**. Seeded-save captures
(`phase2f_golden_tail_arenas.mjs`, `?rich` unlock): level 1 / 3 / 6 play frames in
`~/workspace/projects/audit/shots_phase2f/golden_tail_arena_level{1,3,6}.png` — eyeballed:
level 6 shows the wide cup layout with the long high slide and a 17 m tail marker, level 3
shows the sparse bouncer grove with a floor mushroom by the start deck; both visibly differ
from level 1's plaza. Frames at 844×390 / 1024×768 / 1366×1024 from the harness eyeballed
clean (later frames show the harness's known pause-card overlay).

**Not tested:** real device/WebView (headless SwiftShader only); levels 2–6 click-played
only via the seeded captures (levels 1/3/6) and sim robot — not hand-played end-to-end in
the browser. Sound not listened to by a person.

**Owner questions:** unchanged from earlier phases — the 12 unused icon files remain in
`assets/games/golden_tail/art/` untouched, awaiting the owner's call.

---

## Certification Sweep A — «الذيل الذهبي في الواحة / Golden Tail Oasis» (2026-11-28)

Protocol: full inventory, real menu click-flow (`.gt-node` clicks) in the
browser (harness `~/tools/recorder/cert_a_golden_tail_cycle.mjs`, frames in
`~/workspace/audit/cert_a/golden_tail/cycle{1,2,3}/`), joystick driving by
mouse (camera-relative, with mushroom routing when the tail holder is on
another storey), touch buttons, pause/exit/replay, fresh-save gating,
pre-2F old-save and damaged-save handling, VoiceCoach config,
renderer.info + 4× CPU-throttling perf probe.

### Arena table (measured from `src/data.js`)

| # | Arena (ar / en) | Backdrop | Decks | Strips (bridge/ramp/slide) | Broken bridges | Mushrooms | Top height | Clock | Rivals / speed | Design |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ساحة النخيل / Palm Plaza | pano1.webp | 7 | 14 (8/3/3) | 1 | 4 | y=6 | 40 s | 2 / 3.7 | the original shared arena, byte-for-byte (snapshot-pinned) |
| 2 | جسور الواحة / Oasis Bridges | pano2.webp | 9 | 17 (12/3/2) | 1 | 4 | y=5.5 | 45 s | 3 / 3.9 | ring of decks over the spring pools, bridge-rich |
| 3 | نطّاطات الواحة / Oasis Bouncers | pano3.webp | 7 | 12 (7/2/3) | 1 | **5** | y=8 | 50 s | 3 / 4.1 | canopy climb — fewest bridges, mushrooms do the lifting |
| 4 | زحاليق الرمل / Sand Slides | pano4.webp | 9 | 17 (9/3/5) | 1 | 4 | y=7.5 | 55 s | 4 / 4.2 | salt-lake terraces, **5 slides** (most) |
| 5 | برج مراقبة الواحة / Oasis Lookout | pano5.webp | 9 | 17 (12/2/3) | 1 | 5 | **y=9** | 60 s | 4 / 4.25 | Shali fortress wall-tops, highest arena |
| 6 | كأس الواحة / Oasis Cup | pano6.webp | 9 | 20 (14/3/3) | **2** | 5 | y=8 | 60 s | 4 / 4.3 | widest final (span r≈19.4), every route type mixed |

Background rule: each arena wears its **own shipped panorama**
(pano1–6.webp — six distinct files, md5-verified all different) plus its
own geometry; no two arenas share a background or a layout (arena
signatures test-pinned distinct). Difficulty rises by layout (span,
verticality, broken bridges) and the pre-existing rival counts/speeds —
round clocks are match clocks that always end at a results card, never
a fail state; stars are for winning/holding only.

### Inherited work verified
- `295a7af6` (stuck-dino regression test): **sound and genuinely
  exercising the trap** — it asserts every strip endpoint in all six
  arenas ends at r ≤ 23.9 (the 2F bug: arena 6's p4 slide ended at
  r≈25.7 > GROUND_R 25) **and** dynamically places a dino at the top of
  every slide in every arena and steps the sim until it must reach the
  floor. Suite **19/19** with it, re-run at the end of this sweep.

### Cycles

**Cycle 1 — ✅ (with infrastructure scars, all recovered).** Run A died
to a renderer crash during L2 (target closed, VM memory pressure) after
L1 had completed a **full round to the results card**; run B (resume
from L2, per-level crash-retry added) drove L2–L6 for 30 game-seconds
each and finished all size sweeps before a VM restart killed it in the
perf section; the remaining checks were recovered the same day by
`cert_a_golden_tail_checks.mjs` into `report_checks.json`. Totals:
0 page errors across all runs; fresh menu 6 nodes / 5 locked; every
arena start/mid/end frames at 1024×768 + start frames at 844×390 /
1366×1024 / portrait — eyeballed clean (L2 bridge ring + tutorial
toast, L3 mid-chase, L5 lookout heights, portrait L6, gentle lose card
«قرّبت! جرّب تاني» with held/grabs stats and replay/menu). Touch jump
button fired (y 3→4.04, vy 4). Old pre-2F-shaped full save
`{unlocked:6, stars:{1:3,2:2,3:1,4:2,5:1,6:3}}` round-tripped exactly
and L6 played; damaged save `{unlocked:99, stars:{9:5}, muted:'yes'}`
clamped to `{unlocked:6, stars:{}, muted:false}`. VoiceCoach live
config cooldown 9 s / gap 4 s.
- **Youngest-player probe (separate, same cycle):** at age=4 (easy:
  rivals 0.8×, grab-by-touch) the browser driver **grabbed the tail
  (grabs 1) and held it 5.3 game-seconds** in a full L1 round, 0 errors
  (`easy_age4_L1_end.png`).

**Cycle 2 — ✅.** Sampled drives (25 game-seconds per arena, v2 driver),
all sizes, all checks repeated: 0 page errors, 0 crashes; fresh menu
6/5 locked; touch jump y 3→4.2; old save round-trip + L6 play; damaged
save clamped; voice 9/4; renderer 397 calls / 18,554 triangles.

**Cycle 3 — ✅ (second consecutive clean round).** Identical protocol
and results: 0 errors, 0 crashes, same timeLeft pattern per arena
(14/19/24/29/34/34 after 25–26 game-seconds of driving), touch jump
y 3→4.04 vy 4, saves and voice checks identical, renderer 397 calls /
18,554 triangles (413 / 20,942 in the throttled sample).
`npm test` re-run for the sweep: **19/19** (L1 snapshot identity, six
distinct arenas, full traversability, mushrooms/slides in all arenas,
robot completes all 6 rounds, stuck-dino certification regression,
ladder 1→6 + save migration).

### The one honest gameplay caveat
The age-5 free-roam browser driver scored **0 grabs** in every sampled
round: it chases in plan view and cannot keep the narrow bridges the
way the walking-graph robot (sim, wins ≥1 seed at every level, 17/24
overall) or a watching child can; the holder also changes storey,
where a grab is impossible (|Δy| ≥ 1.4 fails `_canGrab`). This is a
driver limitation, not a dead game loop — proven by (a) the sim robot's
wins, (b) the player being *faster* than every rival (5.2 vs ≤4.3),
(c) the age-4 browser probe above actually grabbing and holding.
Recorded here rather than hidden; a human hand-play is the missing
evidence (see unconfirmed).

### Performance
three.js: **397–422 draw calls, 18.5–22.1k triangles**, 548–588
geometries, 2 textures (renderer.info during L6 play). ⚠️ 422 calls is
a lot of small meshes (decks, trunks, trees, animal parts); the game
already auto-degrades pixel ratio under load. I did **not** merge
geometries in this sweep — that is a structural change with regression
risk across all six arenas, flagged here for the owner instead.
rAF frame times in this environment are not device evidence: median
700–1,983 ms across cycles on a VM shared with many agents at load
up to ~40 (in cycle 1 the 4×-throttled median, 1,583 ms, came out
*lower* than the unthrottled 1,983 ms — contention noise dominates
SwiftShader software rendering). Code audit: the playground rebuilds
only on level start/menu (geometries disposed); per-frame allocations
are limited to two `THREE.Vector3` temporaries in `_sync` plus event
arrays — no per-frame object rebuilds. Built `game.js` unchanged this
sweep (no code changes).

### Decisions / changes made this sweep
- **No game code changed.** No ❌ was found in the game itself; every
  failure encountered was infrastructure (renderer crash, two VM
  restarts) or my driver's navigation, each documented above.
- Add-to-instinct: **none** — VoiceCoach events (count/go/trick/bump/
  win/lose) map to existing clips.

### Final review (as a first-time player)
The menu is a storybook board over the oasis art, the next arena glows,
and one big «يلا نلعب!» starts the frontier round. In play, the holder
pill + off-screen ✨ distance pointer always tell you where the tail
is, the tutorial toast teaches the loop in one line, and the results
card is gentle win or lose. The six arenas genuinely feel different —
bridge ring, bouncer grove, slide terraces, fortress heights, the wide
cup. Weakest point: at age 5+ the grab demands real bridge craft from
a small child; the age-4 auto-grab is the safety net, and whether the
5–6 band finds it fun-hard or frustrating needs a real child's hands.

### «غير مؤكد» (unconfirmed)
- Real device / app WebView (headless SwiftShader only); frame times
  above are VM-bound and are not device measurements.
- A human child's hand-play at age 5–6 (browser free-roam bot could
  not grab; graph robot + age-4 probe are the substitutes above).
- Sound and voice clips not listened to by a human; triggering is
  proven via the event wiring + VoiceCoach config, audio unlock via
  the real click flow.
- The 12 unused reward icons in `assets/games/golden_tail/art/`
  (owner question since Phase 2B — untouched).
- Draw-call reduction (geometry merging) — flagged, not attempted.
