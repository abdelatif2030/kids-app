
---

## Phase 2D — Egypt anchor: «عالم نور / Nour's World» (2026-11-27)

**What changed (names only, in the shared girls_games package):**
- The hub title «عالم الأميرة / Princess world» → **«عالم نور / Nour's
  world»** — the princess is Nour, the app's own girl. The dress door
  and the dress-up stage title now say "Dress up Nour / ألبسي نور".
- Two of the six dress-up places became Egyptian, per the plan:
  Garden tea party → **Nile garden party**, Beach party →
  **Alexandria beach party**. The other four (castle room, ice castle,
  magic forest, rainbow ballroom) are unchanged, as are all items,
  saves and the BAG meta-loop.

**Tested:** package `npm test` 26/26 (+2 anchor tests across world and
dress suites); hub and dress builds green; real click-flow verify
PASS — hub shows «عالم نور» and its six doors, tapping the dress door
opens the dress-up stage titled «ألبسي نور» (frame inspected), 0 page
errors.

**Not done (Batch F):** the party integrator sailing on a Nile felucca
at sunset, second layers behind each door, and the 43-webp compression
pass are not built. The sister games keep their own titles inside the
hub (salon, baby & pet, cupcake, garden) — only the hub and the dress
door followed this row, as the plan scopes it. Not tested on a real
device.

## Phase 2H — second layers behind the doors (2026-11-27)

**What changed (world only — `src/world/main.js`; no sister game was
touched or rebuilt):** every one of the six doors now has a second
layer, reached by a real tap inside the room itself: a pulsing
«فيه أكتر جوه / More inside» pill at the bottom of the open room opens
the world's own overlay room; its back arrow (and the app back hook,
which closes the layer before the room) returns to the room exactly as
it was left — the sister game stays mounted underneath.

- 👗 dress → **🎀 ممر العرض / The runway** — five gift boxes hide the
  party things (balloon, teddy, confetti, cake, Nour's friends).
- 💇‍♀️ salon → **🪞 غرفة المرايات / The mirror room** — five sparkles
  hide hair treasures (bow, flower, crown, bouquet, butterfly).
- 🍼 pet → **🧸 ركن اللعب / The play corner** — five gifts hide toys
  (ball, kite, balloon, puzzle, paw prints).
- 🧁 cupcake → **🫖 طاولة الشاي / The tea table** — set the table:
  teapot, cup, cake slice, strawberry, milk.
- 🦋 garden → **🌷 مواسم الجنينة / Garden seasons** — the one two-tap
  layer: each seed needs a second tap to bloom (tulip, sunflower,
  baladi rose, daisy, Nile lotus).
- 🎉 party → **⛵ فلوكة النيل / The Nile felucca** — the plan's party
  integrator: five guests board at sunset (Nour, kitten, bunny, puppy,
  baby); boarding everyone "sails" the felucca.

Each layer is five big spots (≥64px), code-drawn gradient dressing and
emoji only — no new art, no per-frame work. Finishing a layer follows
the world's own rules: ONE completion star for that door, the visit
counted in the save, and one BAG gift where the theme fits (runway →
a look, mirror room → a hairdo, play corner → a friend, tea table → a
cupcake, seasons → a flower), so the layers feed the big party exactly
like the first rooms do. The felucca's gift is the sail itself. No
timers, no losing, a found spot can never be lost; re-entering a layer
starts a fresh visit.

**Saves:** append-only `deep: {door: completions}` in `normalizeSave`.
Old saves (no `deep` at all) migrate to zeros and keep their stars and
bag untouched — pinned by test. Damaged `deep` values are cleaned like
stars are.

**Tests:** package `npm test` 32/32 green (26 before + 6 new in
`test/world.test.js`): a freeze test pinning all six LEVELS
(id/folder/ar/en) byte-for-byte, one-second-layer-per-door shape,
DeepRoom rules (spot counts once, completion needs all five, garden
two-tap growth), old-save migration, and the overlay wiring.

**Build:** `npm run build:world` only — built
`assets/games/girls_world/game.js` 192,037 bytes (was 182,846;
+9,191 for all six layers, inside the ~200KB budget). No sister build
was run or staged.

**Verify:** `node phase2h_verify.mjs girls_world` PASS, 0 page errors,
frames at 844×390 / 1024×768 / 1366×1024 in
`audit/shots_phase2h/`. A dedicated real-click capture
(`~/tools/recorder/p2h_girls_capture.mjs`) drove three doors end to
end — dress → runway, garden → seasons (two taps per seed), party →
felucca: each layer completed 5/5 with its star banner, the back arrow
returned to the still-live room, and the hub came back with all six
doors; frames `girls_world_deep_*` eyeballed (the in-room pill sits
cleanly in the dress room; the felucca opens on its sunset gradient).

**Playtime (model, not a measurement):** a layer visit is 5 spots
(garden 10 taps) at a toddler's tap-and-delight pace of ~4–8 s per
spot ≈ 0.5–1 min per layer; one full sweep of all six ≈ +4–6 min of
directed content on top of the plan's ≈30 min + free play, repeatable
per visit.

**Not tested:** the salon, pet and cupcake layers were completed in
the unit model and their entry pill is the same world code path proven
by click for dress/garden/party, but they were not individually
click-driven; no real device; the new layer lines are screen-only
until Instinct clips land (list in the Phase 2H fragment). The 43-webp
compression pass from the plan row is still not done.

## Director Protocol — full certification pass (2026-11-27)

Driver: `~/tools/recorder/protocol_girls.mjs` (real clicks hub → door →
in-room «فيه أكتر جوه» pill → second layer → back; per-cycle results +
95 frames each in `~/workspace/projects/audit/protocol_frames/girls_world/cycle<N>/`).
The Phase 2H work above counts as cycle 1 only where it meets the protocol;
this pass re-did everything from scratch, at four sizes, all six layers
click-driven individually.

### Level table — 13 spaces (hub + 6 rooms + 6 second layers)

| # | Space | Design / activity | Background | Difficulty / elements |
|---|-------|-------------------|------------|-----------------------|
| 0 | Hub «عالم نور» | 6 door cards + stars, bag note, grow-up gate | `bg_world.webp` castle/rainbow scene (own art) | none — all doors open |
| 1 | 👗 Dress up Nour | dress-up: 4 categories × 4 items per place, 3 looks = 1 star; 6 places (castle, Nile garden, ice castle, Alexandria beach, magic forest, rainbow ballroom — each its own `bgp_1..6` art) | place art, all 6 distinct (picker frames) | gentle; no fail |
| 2 | 💇‍♀️ Hair salon | 5 tools on a seated girl, 3 girls = 1 star; 6 salon places, own `bgp_1..6` | distinct per place | gentle; no fail |
| 3 | 🍼 Baby & pet | care steps (feed/bath/brush/sleep) × 4 friends = 1 star; 6 places, own `bgp_1..6` | distinct per place | gentle; no fail |
| 4 | 🧁 Cupcake shop | 5-step baking, orders of 1–6 guests, 3 orders = 1 star; 6 bakeries, own `bgp_1..6` | distinct per place | gentle counting; no fail |
| 5 | 🦋 Butterfly garden | plant → water ×3 → bloom + catch butterflies, 6 pots = 1 star; 6 gardens, own `bgp_1..6` | distinct per place | gentle; no fail |
| 6 | 🎉 The big party | spend the BAG (flowers/cupcakes/looks/hairdos/friends) into vases/plates/guests; party grows per completion | stage bg `bg_garden.webp` fountain-garden scene (own art, distinct from room 5's meadow) | gentle; empty slots route back to maker rooms; no fail |
| 7 | 🎀 The runway (dress layer) | find 5 hidden party things in gift boxes | pink sky `#ff9ac8→#ffd8ec` + bow/disco garland + heels/dress floor row | 5 taps |
| 8 | 🪞 The mirror room (salon layer) | find 5 hair treasures in sparkles | lavender sky `#c8a0ff→#ffe8f8` + mirror garland + lipstick/scissors floor row | 5 taps |
| 9 | 🧸 The play corner (pet layer) | find 5 toys in gift boxes | **sky-blue** `#6ac8e8→#e8fff4` + teddy/ball garland + paw/kite floor row | 5 taps |
| 10 | 🫖 The tea table (cupcake layer) | set 5 tea things from gift boxes | **warm cream** `#ffca7a→#fff6da` + teapot garland + cupcake/strawberry floor row | 5 taps |
| 11 | 🌷 Garden seasons (garden layer) | grow 5 flowers, **two taps each** (seed → bloom) | green sky `#8ad8a8→#e8ffd8` + flower garland + butterfly floor row | 10 taps (the one harder layer) |
| 12 | ⛵ The Nile felucca (party layer) | board 5 guests at sunset; boarding all sails the boat | sunset orange `#ff9a5a→#ffd8a8` + sunset/sail garland + waves/shells floor row | 5 taps |

**Background-differentiation verdict:** rooms — every room and every
in-room place has its own painted art (picker frames, cycles 3–5) ✅.
Second layers — cycle 1 found them differentiated **only by gradient
hue**, with pet (mint) ≈ garden (green) and cupcake (peach) ≈ party
(orange) close, and large dead gradient areas ❌ → fixed (below): all
six skies now pairwise-distinct colours AND each layer carries its own
code-drawn decor garland + floor row; frame comparison cycles 3–5 shows
six unmistakably different scenes ✅. One sister-side note: inside the
party room, the stage background stays the fountain-garden scene for
all six party places (its picker cards do show six different scenes) —
party is a sister game; changing its stage backgrounds is outside the
world's scope and is flagged for the party game's own protocol pass.

### Cycles (evidence: per-cycle `results.json` + frames in the audit dir)

- **Cycle 1 ❌ (driver + dressing).** All 6 layers completed 5/5 at
  1024×768 and 0 page errors, BUT the save log exposed a driver fault:
  completions were credited to dress/garden only. Root cause found in
  the driver, not the game: it returned via the hub's hidden back
  button (which posts `exit` to the app), so rooms stacked and the
  first stale «more inside» pill was re-clicked. Also ❌: deep-layer
  backgrounds hue-only/dead (above), and fps 4x hub 14 / dress room 3 /
  deep 13 (SwiftShader). Fixes: driver rewritten to return via the app
  back hook with a true at-hub check and per-door pill waits; game fix
  = per-layer sky + decor (commit `6b70480a`).
- **Cycle 2 ❌ (two world visual faults).** With the corrected driver:
  every door's layer completed individually, save exact — stars
  {dress 2, others 1}, deep {dress 2, others 1}, bag gifts per door
  (looks 2, hairdo 1, cupcake 1, flower, kitten) — reload with that save
  reproduced the same hub stars ✅; back hook closes layer before room
  ✅; replay starts fresh and re-completes ✅; keyboard Enter (dress
  spot) and touch tap (salon spot) both register ✅. ❌ found by eye:
  (a) at 844×390 the completion banner was cut at the bottom edge for
  every layer; (b) at 1024×768 the world's deep pill covered the places
  card's «تمام» button, and the card itself (≈782px) clipped its title
  at the top. Fixes (world only): compact deep-layer layout under
  `max-height:520px`; pill hides while a room card (`.gk-dim`) is open
  via a MutationObserver disconnected on close (commit `afce6306`).
- **Cycle 3 ❌→fixed (card clip).** Banner fully on-screen at 844×390
  ✅, pill no longer covers «تمام» ✅, all functional evidence repeated
  exactly. Remaining ❌: the places/finish card still clipped ~14px at
  1024×768 (shared-kit card height). Fixed world-side only: the world's
  own stylesheet (never loaded by sister games standalone) caps
  `.gw-root .gk-card` at 96% height with internal scroll (commit
  `1c6e46fc`). Tests 34/34.
- **Cycle 4 ✅ CLEAN.** 95 frames, 0 page errors; all 6 layers 5/5 with
  exact save + reload persistence; places cards fully on-screen at all
  sizes; no world-scope overflow (only flag: pet room's portrait
  character carousel peeks ±7px at the edges — its own by-design
  carousel, eyeballed, all friends reachable). fps 4x: hub 7, dress
  room 12, deep 12.
- **Cycle 5 ✅ CLEAN (second consecutive).** Identical functional
  evidence (stars/deep/bag/reload/replay/back-hook all exact), 0 page
  errors, 95 frames eyeballed via contact sheets at all four sizes.
  fps 4x: hub 3, dress room 12, deep 6 (see performance note).

**Performance note (honest):** fps was measured by rAF under CDP 4× CPU
throttling in headless SwiftShader on a shared 1.5-CPU VM while other
agents worked in parallel; across cycles 1–5 the same scenes read
hub 3–14, dress room 3–12, deep 6–13 at 4× (and dress room 2–24 at 1×) —
the spread is environment noise, not a game signal. Source-verified:
no per-frame object rebuilds anywhere in the world or kit (only CSS
animations and a 200ms music scheduler); the world adds no rAF work at
all. Real-device fps stays in غير مؤكد.

**Audio:** request log shows the lullaby (`girls_world/snd/lullaby.mp3`)
loads and room voice clips fire (cycle 1 log: dress `voice/ar/trick_1/2.mp3`);
the world itself is music-only by design (Web Audio music box + samples,
unlocks on first touch — the driver's first click is that touch). Heard-
by-ear quality is غير مؤكد.

**Tests:** package `npm test` 34/34 green (32 before + 2 protocol tests
pinning per-layer sky/decor uniqueness and the compact/pill/card fixes).
Build: `npm run build:world` only, `game.js` 194,587 bytes (≤ ~200KB).
No new image/audio files; no sister build run or staged.

### Decisions / changes (world only, 3 local commits)
1. `6b70480a` — each second layer gets a pairwise-distinct sky (pet →
   sky blue, cupcake → warm cream) plus its own code-drawn decor
   garland + floor dressing row, rendered in the world overlay.
2. `afce6306` — compact deep-layer layout on short screens (banner
   visible at 844×390); deep pill hides while a room modal card is open.
3. `1c6e46fc` — world-stylesheet-only card height guard (96% + internal
   scroll) so room cards never clip off-screen inside the world;
   sister games standalone never load this stylesheet.
No sister game source or behaviour was changed; no shared file was
touched (the card guard lives in the world's own CSS block).

### Final review (as if new, on cycle-5 frames)
Hub reads instantly: castle scene, six numbered doors with names and
stars, bag note after play. Every room is a different painted world
with a different job; every second layer is now a different *scene*,
not a different colour. Nothing off-screen, no covered buttons, no cut
text at 844×390 / 1024×768 / 1366×1024 / 390×844. Portrait deep layers
are airier (spots centred, dressing at top/bottom) but complete and
legible. **Verdict: PASS — two consecutive clean cycles (4 and 5),
minimum three cycles run (five).**

### غير مؤكد
- Real-device behaviour and fps (iPhone/Android WebView, GPU compositing) — all numbers here are headless SwiftShader.
- Audio heard by ear (lullaby level, voice-clip intelligibility) — only request/instrumentation evidence.
- The party room's six internal places share one stage background (sister-owned; flagged for the party game's own protocol pass).
- Full sister-room *activities* were driven at the places level (picker + place switch + alive stage) and their completions are covered by the package unit tests; a full click-through of every sister activity (e.g. 3 dress looks) inside the world was not repeated in this pass.
- The 43-webp compression pass remains out of scope (demo file budget unchanged by this pass: zero new files).
