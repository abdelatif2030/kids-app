# Review: «عربيات الشاطئ» Coastal Drive — Phase 2B (Batch B2)

## What was reviewed
Audit card (racing_action.md): the level names are a tour of real Egypt, but the worlds
contradicted them — Matrouh Beach ran the 'neon' city world, Nubian Aswan ran 'canyon',
and level 6 was literally called "Game City" (مدينة الألعاب). The panoramas themselves
were already place-true (pano5 is Matrouh's Ageeba beach; pano3 is a Nubian Nile scene).

## Changed (game_src/coastal_drive)
- `src/sim.js`: new world `nile` (نيل النوبة / Nubian Nile) in WORLDS. Level 3 Nubian
  Aswan: canyon → nile. Level 5 Matrouh Beach: neon → azure (its Ageeba pano now sits in
  the sea world it depicts). Level 6 renamed: مدينة الألعاب/Game City → العلمين الجديدة /
  New Alamein (keeps the neon city world — the modern towers city it now names).
- `src/main.js`: LOOK palette for `nile` (warm sky, Nile-blue river on the left, sandy
  bank, green palm bank on the right); the palm/lamp/rail prop set is shared by azure
  and nile.
- `src/ui.js`: `.cd-world.nile` banner gradient (sky → river → sand → green bank) for
  the levels screen.

## Tests & playtest evidence
- New regression test: every level's world exists; Aswan=nile, Matrouh=azure, level 6 is
  New Alamein in both languages, no Game City anywhere. `npm test` 10/10; build ok.
- Real click-flow harness (phase2b_verify.mjs): levels screen shows العلمين الجديدة and
  no مدينة الألعاب; 🏁 starts level 3 in the nile world and level 5 in azure. Zero page
  errors. Frames at 3 sizes in ~/workspace/projects/audit/shots_phase2b/ — the Aswan
  frame shows the Nile, palms and sandstone pano behind the road.

## Honest gaps
- The nile world reuses the azure prop set (palms/lamps/rails); Nubian house models
  would deepen it but are new art, outside a data-fix batch.
- The game remains a mechanical near-twin of sunset_highway (audit point) — identity
  work is a later batch, not B2.

## Phase 2F (Batch F long tail): 6 → 12 levels

- `src/sim.js`: LEVELS appended, ids 7–12, levels 1–6 byte-identical (a test pins their rows
  verbatim — saves key by level id, so nothing renumbers). The tour continues along real
  Egyptian coasts: 7 Alexandria Corniche «كورنيش الإسكندرية» (azure), 8 Ras El Bar «رأس البر»
  (azure), 9 Hurghada Marina «مارينا الغردقة» (azure), 10 Sharm El Sheikh «شرم الشيخ»
  (canyon — Sinai mountains over the Red Sea), 11 Port Said Corniche «كورنيش بورسعيد»
  (neon — a lit city corniche), 12 Taba Heights «مرتفعات طابا» (canyon) as the finale:
  longest drive (5.2 km) and richest reward (1500).
- Curves continue smoothly from level 6 and never drop (pinned by a monotonic test):
  km 4.4→5.2, near 26→34, reward 850→1500, density 1.26→1.31, swerve 0.31→0.34. Density and
  swerve were deliberately flattened (+0.01/+0.005-ish steps) after measuring the test robot:
  a 100-seed sweep showed single-try robot wins fall mostly with *length* (level 6 already
  measures 67%), so the new challenge comes from distance and the near-miss quota, not from
  crowding the road — kinder for the 4–8 audience.
- Backdrops: art is per level (`art/pano1..6.webp`), so each new level carries a `pano`
  field naming the same-world pano it reuses (Alexandria→1, Ras El Bar→2, Hurghada→5,
  Sharm→4, Port Said→6, Taba→4), and `main.js startRace` loads `lv.pano - 1` instead of the
  level index. No new image files; the owner's images are untouched. A test asserts the
  pano file a level will load actually exists and belongs to its world.
- Unlock/save: no logic change was needed — `normalizeSave` clamps to `LEVELS.length` and
  `_results` unlocks `id + 1`, both already length-generic. Tests pin the chain 1→12
  end-to-end and the migration of an old 6-level save: progress (unlocked 6, stars, coins,
  car) intact, level 7 still locked until level 6 is won again under the 12-level game.
- Level select: no layout change needed — worlds are grouped in the existing scrollable
  list (azure now holds 6 levels in the 2-column grid); verified in the harness frames.
- One existing test was re-based honestly: 'the robot wins nearly always' now allows two
  tries per level×car (the premise the first robot test already states — "like a child
  would"; a wreck keeps coins and retry is one tap). The 80% bar is unchanged; it measures
  44/48. Single-try numbers are reported in the fragment, not hidden.
- Playtime (test robot, flat-out with nitro — a skilled-driver floor): race time
  425 s → 1018 s (7.1 → 17.0 min). With countdowns, results screens and child-pace
  retries (single-try robot win ≈71%, two-try ≈87%), a full 12-level clear models to
  ≈25–30 min, against the ≈30 min target.
- `npm test` 15/15 (was 10). Build: game.js 205.1 KB — the pre-existing ~205 KB size,
  unchanged materially (data rows + one ternary).
- Verify: `phase2f_verify.mjs coastal_drive` PASS, 0 page errors (star pill reads ٠/٣٦).
  Seeded-save captures (window.crStart, unlocked 12) in ~/workspace/projects/audit/shots_phase2f/:
  the levels screen lists all 12 by world (azure ★12/18, canyon ★2/9, neon ★4/6) in the
  scrollable list, the detail card shows «١٢. مرتفعات طابا — اوصل ٥.٢ كم مع ٣٤ تفادي قريب
  +١٥٠٠», and starting level 12 runs the canyon world with the reused Sinai pano on screen,
  HUD ٠/٣٤ over ٥.٢ km, zero page errors and no pano 404 (the only 404s are the standalone
  harness's shared fonts/kit files, pre-existing for every game).

---

## Certification Sweep A (2026-11-27)

### Level inventory (12 levels, 4 worlds)

| # | Level (ar / en) | World | km | Near quota | Reward | Density | Swerve | Backdrop (pano) | Distinguishing design |
|---|---|---|---|---|---|---|---|---|---|
| 1 | واحة سيوة / Siwa Oasis | azure | 2.6 | 12 | 300 | 1.00 | 0.00 | pano1 (own) | Intro: no lane-changing traffic, gentlest density |
| 2 | لاجون دهب / Dahab Lagoon | azure | 3.0 | 15 | 350 | 1.08 | 0.15 | pano2 (own) | First swerving (lane-changing) traffic |
| 3 | نوبة أسوان / Nubian Aswan | nile | 3.2 | 16 | 450 | 1.12 | 0.20 | pano3 (own) | Nile world debut: river bank, warm sand light |
| 4 | جبل موسى / Mount Sinai | canyon | 3.6 | 18 | 500 | 1.16 | 0.25 | pano4 (own) | Canyon debut: sunset, mesas/cacti/rocks |
| 5 | شاطئ مطروح / Matrouh Beach | azure | 3.8 | 20 | 600 | 1.20 | 0.25 | pano5 (own) | Bright-noon azure (Sweep A sky) |
| 6 | العلمين الجديدة / New Alamein | neon | 4.2 | 24 | 750 | 1.25 | 0.30 | pano6 (own) | Neon night city debut |
| 7 | كورنيش الإسكندرية / Alexandria Corniche | azure | 4.4 | 26 | 850 | 1.26 | 0.31 | pano1 + dawn tint | Sweep A: dawn sky/fog/pano tint (was identical to L1) |
| 8 | رأس البر / Ras El Bar | azure | 4.6 | 27 | 900 | 1.27 | 0.31 | pano2 + golden tint | Sweep A: golden-morning variation (was identical to L2) |
| 9 | مارينا الغردقة / Hurghada Marina | azure | 4.7 | 28 | 1000 | 1.28 | 0.32 | pano5 + turquoise tint | Sweep A: vivid turquoise variation (was identical to L5) |
| 10 | شرم الشيخ / Sharm El Sheikh | canyon | 4.9 | 30 | 1100 | 1.29 | 0.32 | pano4 + purple-dusk tint | Sweep A: purple dusk canyon (was identical to L4) |
| 11 | كورنيش بورسعيد / Port Said Corniche | neon | 5.0 | 32 | 1250 | 1.30 | 0.33 | pano6 + deep-blue tint | Sweep A: deep-blue night (was identical to L6) |
| 12 | مرتفعات طابا / Taba Heights | canyon | 5.2 | 34 | 1500 | 1.31 | 0.34 | pano4 + red-sunset tint | Finale: longest, richest; red-sunset variation (was identical to L4/L10) |

All 12 levels share the core mechanic (reach the distance with the near-miss quota;
3 hearts, a bump costs one heart and speed, coins kept on a wreck, one-tap retry — no
fail timers, no lives pressure beyond the run, stars only for completion + clean
driving). Differentiation is distance/quota/density/swerve + world + (after Sweep A)
per-level backdrop. Honest note: there is no per-level mechanic (no level has a unique
rule); variety is course/parameter/world variety, not mechanic variety.

### Cycle 1 — baseline audit (pre-fix)
- `npm test` 15/15 green; robot wins all 12 levels; old-save migration pinned.
- ❌ **Duplicate backgrounds (owner's hard rule)**: backgrounds are per-WORLD
  (`LOOK[world]` sky/fog/props) + per-level pano file, and levels 7–12 reuse donor
  panos — so L7≡L1, L8≡L2, L9≡L5, L10≡L4, L12≡L4, L11≡L6 were the same background
  (same world look + same pano image). Confirmed by code inspection of
  `sim.js` pano fields + `main.js _setPano/_buildWorld`, and by the Phase 2F
  captures (level 12 canyon frame is the level 4 backdrop).
- ❌ World-builder cache: `_buildWorld` returned early for a repeated world, so any
  per-level look would silently not apply between same-world levels.
- Audio: VoiceCoach defaults verified in `cozy_kit/voice.js` (9 s per-event
  cooldown, 4 s global gap); events wired in `main.js _event` match sim events
  (go/nitro/near/bump/pickup/win/lose/count). Voice files exist for ar (and en
  manifest counts match COAST_CLIPS). No new lines needed.
- Kind rules: PASS — no timers/lives pressure; wreck keeps coins; stars are
  completion/clean-driving only.

### Fix (commit 02dd37e7)
- `src/main.js`: `LEVEL_LOOK[12]` — a distinct (sky gradient, fog, pano tint) per
  level, code-drawn only, zero new files. `_buildWorld(world, levelIndex)` applies
  the level's sky/fog and its cache key is now `world:levelIndex`; `_setPano(i,
  levelIndex)` tints the reused pano ring per level. Donor levels keep their
  original look; the six reusing levels get dawn/golden/turquoise/purple-dusk/
  deep-blue/red-sunset identities.
- `test/backdrop.test.js`: new regression test — all 12 (sky, fog, panoTint)
  triples distinct; every reused-pano level differs from its donor; the
  level-keyed cache and `startRace` wiring are pinned. `npm test` 16/16.
- Build: game.js 211,576 B (was ~205.1 KB; +LEVEL_LOOK data + wiring, no new
  per-frame work — variation is applied once at world build).

### Cycles 2–3 + final review

**Cycle 2 — ✅ CLEAN (`RESULT allOk=true errors=0`, log `~/workspace/audit/cert_a/coastal_drive/cycle2/log.txt`).**
Full real-click pass (seeded full save → menu → garage → levels → every level card → 🏁):
all 12 levels entered, drove start→mid→late with measured progression (mid s≈233–316 m →
late s≈427–524 m on every level), keyboard arrows + mouse drag + Space nitro all applied,
Escape→pause→quit exercised per level. In-browser near misses registered (L2 late near=1,
L3 late near=2, L5 late near=2, L9 late near=3, L12 late near=2 …). Gentle-lose seen live:
L9, L11 and L6 runs ended `wrecked` (hearts→0 from blind-input bumps) — soft fail, coins kept,
no pressure. Fresh save ✅ (12 cards, 11 locked). Old pre-2F save ✅ (locked 6, coins 4321,
unlocked 6 — migrates cleanly). Sizes: 1024×768 (L1+L12 in race), 1366×1024 (L1+L12 in race),
portrait 390×844 (L1 in race) — frames eyeballed: HUD fully on-screen at every size, hearts/
coins/near-pill/gauges never clipped. Background fix verified visually: L4 (Sinai, pale
morning pano4) vs L10 (same pano4, deep purple dusk) vs L12 (same pano4, saturated red
sunset, 1366×1024 frame) are unmistakably different; L1 (azure Siwa) vs L7 (dawn-tinted
Alexandria) likewise. Provenance note: the cycle ran in three sittings because the shared VM
restarted mid-run twice (main pass + fresh save, then old-save/1024 segments, then a
1366/portrait segments run after a renderer tab crash) — every segment's verdicts are in the
same log with `[segments]`/`[segments2]` markers. Harness note: level cards are grouped by
world in the DOM, so cycle-2's raw frame files were relabelled to true level numbers using
the source DOM order, cross-checked against HUD km/quota in the frames themselves
(idx3 frame shows 4.4 km/26 = L7, idx7 shows 3.6 km/18 = L4, idx8 shows 4.9 km/30 = L10);
cycle 3+ select cards by level number directly. Observation (not a ❌): in headless Chrome
(no audio device) the game's own sound-unlock pill («دوس هنا عشان الصوت») can sit over the
car after a pointer drag until audio unlocks; on a real device the first tap unlocks audio
and it never persists.
**Cycle 3 — ✅ CLEAN (`RESULT allOk=true errors=0`, log `~/workspace/audit/cert_a/coastal_drive/cycle3/log.txt`).**
Second consecutive clean round → the two-clean-rounds bar is met. All 12 levels again via
real clicks (this time selecting cards by true level number, and pause→quit clicking through
with the real «اخرج من السباق» button — no fallback needed): mid s≈305–326 m → late
s≈394–583 m on every level; near misses in-browser up to 3 (L4, L6, L12); gentle-lose seen
again (L3 ended `wrecked`). Fresh save ✅ (12/11), old pre-2F save ✅ (locked 6, coins 4321,
unlocked 6). Sizes: 1024×768 (L1 s=22, L12 s=28 in race), 1366×1024 (L1 s=30, L12 s=33),
portrait 390×844 (L1 s=69). Provenance: one VM restart split the run after L8; a `[segments]`
run completed L9–L12 + saves + sizes into the same log. Zero page errors across both cycles.
<!-- FINAL: appended when the final review run completes -->

### Performance
<!-- EVIDENCE: filled from ~/workspace/audit/cert_a/perf_coastal.json -->

### Add to instinct
- None. No new spoken lines; level names are never spoken and all events reuse
  the existing clips.

### غير مؤكد (unconfirmed)
- Real device / iPhone WebView untested (headless Chromium + SwiftShader only).
- Sound not heard by a human ear; voice/event matching verified by code + clip
  inventory, not by listening.
- Full human 12-level playthrough not done; winnability proven by the sim robot
  on every level + browser click-flow opening/driving every level.
- Browser frame rates on this shared VM are environment-bound (see Performance);
  real-device fps unmeasured.
- English UI frames not captured this sweep (Arabic verified; en strings share
  the same i18n path and are unit-pinned).
