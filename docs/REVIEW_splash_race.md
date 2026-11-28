
---

## Phase 2D — Egypt anchor + Batch C fix: «جولة مياه مصر / Egypt Waters Tour» (2026-11-27)

**What was wrong:** (1) an elimination tour — finish outside the
qualifying places and the run was a dead end: no stars, no unlock, a
"lose" card, even though the child had finished the course; (2) a
generic "Swim Race" whose first two rounds were theme parks.

**What changed:**
- **Elimination is gone — every finisher is stamped.** Finishing any
  round now records a finisher's stamp (new `stamps` field in the
  save, cleaned by normalizeSave), unlocks the next round, and the
  results card shows "🏅 Finisher's stamp! The next round is open"
  with a Next button. Qualifying places still earn the stars exactly
  as before (stars stay achievement-based), and the non-qualifying
  card keeps its gentle "So close!" line — it just isn't a dead end
  any more. The harsh 'lose' sound on finishing was replaced with a
  splash.
- Title: «سباق السباحة / Swim Race» → **«جولة مياه مصر / Egypt Waters
  Tour»**; the tour now runs Nile Pool → Faiyum Pool → Qarun Lake →
  Moses Springs → Aswan Island → **Red Sea Final** (rounds 3–5 were
  already Egyptian). Swimmers, courses and qualify numbers unchanged.

**Tested:** `npm test` 7/7 (+1: tour anchor + stamp-unlock semantics,
including that stamps alone open round 3). Build green. Real
click-flow verify PASS — tour menu with the new round names, race HUD
with the field of 12 swimmers, frames at 3 sizes, 0 page errors.

**Not done (Batch F):** per-round water dressing (Nile reeds at the
pool, Red Sea coral at the final) is not built; the stamp is shown on
the results card but not yet collected on the menu as a stamp album.
Not tested on a real device.

---

## Phase 2H — Stamp collection album (save-derived) (2026-11-27)

**What was missing:** the finisher's stamp from Phase 2D was shown on the
results card and then vanished — there was nowhere to collect it.

**What changed (collection layer only — no new races, no sim changes):**
- **`STAMPS` + `stampEntries(save)` in sim.js** (sky_jumper passport /
  ocean_defense album pattern): one stamp per tour round, each with an
  icon and one true, simple fact about its real Egyptian water (ar+en,
  display-only). The derivation is a **pure function of the existing
  save — no new persistence**: a round counts as finished when its
  finisher's stamp is recorded (`stamps[id]`, written on every finish
  since Phase 2D) **or** when it holds stars (`stars[id] > 0`) — stars
  are only ever awarded in the results step of a finished, qualifying
  race, so a pre-stamp save still shows the stamps it earned (old-save
  migration is free and pinned by test).
- **No leak by construction:** earned entries return
  `{ round, icon, fact }`; locked entries return only
  `{ roundId, unlocked:false, hint }` — the fact and icon are not in the
  returned object at all, so an unearned place's fact cannot leak.
- **Menu-reachable album:** the menu gains a «🏅 ألبوم أختام المياه /
  Water Stamps Album (n/6)» button and the results card gains an album
  button. Earned stamps show icon + place name + fact + «اتختم! ✓»;
  locked stamps are grey silhouette cards (🔒 + ؟؟؟) with a hint naming
  the race to finish. Stamps reward **finishing/collecting only** —
  never speed, place or beating anyone (kind rules; the Phase 2D
  elimination fix is untouched).
- **Facts are screen-only** until the owner's clips land; the 12 lines
  (6 facts × ar/en, Puck) are listed in the Phase 2H log fragment under
  "Add to instinct" — no voice was generated or wired.

**Frozen, pinned by tests:** all six rounds (names, swimmer counts,
qualify numbers, lengths, bpm, obstacle counts) are byte-identical,
asserted field-by-field; `normalizeSave` output is unchanged.

**Tested:** `npm test` 9/9 (7 before + 2 new: content freeze +
derivation/migration/no-leak, including garbage-field saves and
input-purity). `npm run build` green — game.js 145,987 B (~143 KB,
was 138,130 B; ≤ ~200 KB budget). Real click-flow verify
(`phase2h_verify.mjs splash_race`) PASS, 0 page errors, frames at
844×390 / 1024×768 / 1366×1024. Seeded album captures (fresh save →
6 locked hint cards; seeded save `stamps{1,3}` + `stars{5}` → 3/6
earned incl. round 5 via the pre-stamp stars path, facts only on
earned cards) in `audit/shots_phase2h/splash_race_album_*.png`, 0 page
errors. The album panel scrolls on shorter screens (existing
`.sp-panel` overflow), so the second row is reached by scrolling.

**Playtime (honest):** this is a collection layer over existing
content — it adds no races and no minutes of racing. The existing
6-round campaign, measured by the game's own robot in `npm test`,
takes ≈24–33 s per round (≈2.8–3.1 min of pure robot racing for the
full tour, excluding countdowns/menus); a child will take longer.

**Not tested:** on a real device; the album in English (strings exist,
ar verified by capture); a full human playthrough to the final stamp.

---

## Director Protocol — full cycle pass (2026-11-28) — ✅ PASS

**Inherited-state audit (finisher, 2026-11-28):** the original protocol
worker was killed by a runtime restart mid-pass. What it left, verified
by the finisher before trusting any of it: (1) cycle 1 ❌ with 4 findings
and three fix commits — `b004edc8` (round 4 distinct obstacle mix +
freeze-pin update + distinct-mix test), `d73c530c` (per-round code-drawn
Egyptian dressing + light themes, HUD final label only on round 6, tour
map widened), `c7c5f8e4` (tweak: isle name pill inside the circle, felucca
sails basic-white + closer, Red Sea corals shallower/bigger/emissive).
The finisher diffed `c7c5f8e4` line by line: **presentation-only**
(ui.js CSS pill position, models.js sail material + coral emissive,
main.js felucca/coral placement) — no sim, save or content change; the
Phase 2H freeze tests pass unchanged. (2) A fragment with the level
table and the cycle-1 record, but its "Cycles 2–3 + fps" section was an
empty placeholder. (3) Cycle-2 frames: complete (72 race frames + menu +
album + partial play r1–r3) and timestamped *after* the tweak commit,
i.e. on the final build — but with **no written verdict, no complete
play record and no fps**, so cycle 2 is **not counted** toward the pass
bar. The bar was therefore met by two fresh finisher cycles (3 and 4)
run from scratch on the final build, below.

### Level table (all 6 rounds; mixes are [bumpers/noodles/walls/waves/slides])

| # | Round | Real water | Swimmers → qualify | Len / bpm | Mix | Backdrop (pano) | In-scene dressing (code-drawn) | Stamp fact theme |
|---|-------|-----------|--------------------|-----------|-----|------------------|--------------------------------|------------------|
| 1 | حمّام النيل / Nile Pool | the Nile | 12 → 8 | 250 m / 100 | 10/1/1/1/1 | water park + sphinx | reed banks + 2 feluccas, morning theme | Nile flows south→north |
| 2 | بركة الفيوم / Faiyum Pool | Faiyum / Wadi El Rayan | 10 → 6 | 280 m / 104 | 10/3/2/1/1 | theme park (owner art, untouched) | **waterwheels** + rocks, bright theme | Faiyum oasis, Wadi El Rayan falls |
| 3 | بحيرة قارون / Qarun Lake | Lake Qarun, Faiyum | 8 → 4 | 300 m / 108 | 12/3/3/2/2 | waterwheels + falls + flamingos | **flamingos** in shallows + reeds, golden theme | oldest natural lake, flamingos |
| 4 | عيون موسى / Moses Springs | Moses Springs, Sinai | 8 → 4 | 310 m / 110 | **10/4/2/3/1** | desert falls + palms + tents | **spring pools** among Sinai rocks, clear-green theme | springs among palms near Suez |
| 5 | جزيرة أسوان / Aswan Island | Aswan, Nile | 7 → 3 | 320 m / 112 | 14/4/3/2/2 | sunset feluccas + Nubian houses | pink granite + 3 feluccas, sunset theme | islands + white sailboats |
| 6 | نهائي البحر الأحمر / Red Sea Final | Red Sea | 6 → 1 (win) | 340 m / 114 | 14/4/3/3/2 | night stadium final + fireworks | **coral gardens** on the floor inside the ropes, dusk theme | coral reefs + colourful fish |

Difficulty rises monotonically: field shrinks 12→6, qualify tightens
8→1, length 250→340 m, tempo 100→114 bpm, obstacle totals 14→26. Every
round's obstacle mix is pairwise distinct (pinned by test). Album: the
Phase 2H save-derived stamp album above (one stamp per round, finishing
only).

**Background-differentiation verdict:** every round now reads as its own
water — distinct pano composition, distinct code-drawn in-scene dressing
the child races past, and a distinct light/water theme (morning → bright
→ golden → clear-green → sunset → dusk). Rounds 3 and 4 remain the
closest pair (both falls-family panos, owner art — not touchable); they
are differentiated by pano composition, dressing (flamingos+reeds vs
spring pools+rocks), obstacle mix and theme. Faiyum's pano is a theme
park (owner art); its identity is carried by the foreground waterwheels.

### Cycles

- **Cycle 1 (inherited) — ❌** (pre-fix build): C1-1 shared in-scene look
  + pano sameness, C1-2 rounds 3/4 identical mixes, C1-3 tour-map label
  collisions at 1024×768, C1-4 round 4 HUD labelled «النهائي». Fixed by
  `b004edc8` + `d73c530c` + `c7c5f8e4` (above). Frames:
  `audit/protocol_frames/splash_race/cycle1/`.
- **Cycle 2 (inherited) — not counted:** complete frame set on the final
  build, partial play (r1–r3), but no recorded verdict/fps; the worker
  died before writing it up. Frames: `.../cycle2/` (87 files).
- **Cycle 3 (finisher, final build) — ✅ clean.** Frames 72/72 (every
  round start/mid/end at 844×390, 1024×768, 1366×1024, portrait 390×844)
  + menu, 0 page errors at every size; eyeballed by the finisher: menu
  pills inside the circles with no star-row collision (C1-3 gone), R4
  HUD reads «الجولة ٤» and only R6 reads «النهائي» (C1-4 gone), nothing
  off-screen, no covered buttons, no cut text at any size. Play
  (burst-driven `_raceFrame`, the identical code path rAF uses — this VM
  renders SwiftShader at ~0.05–0.1× real time): all 6 rounds place 1,
  qualified, 3 stars, stamps accumulate 1→6 in the posted saves, replay
  returns to `race` after every round, persistence reload shows 0 locked
  isles and album 6/6 stamped, 0 page errors. Input probe: keyboard
  steer (x −5.50→−5.16), Space stroke registers, touch drag input.x=1,
  pause/resume ✅, exit-to-menu via the pause panel and return to a race
  ✅, `sound.on=true`, `voice.unlocked=true` after real touches. Gentle
  loss (no input, fresh save): place 12, unqualified, 0 stars — **and
  the finisher stamp is still awarded with round 2 unlocked**
  (Phase 2D kind rule intact, frame `loss_r1_results_1024x768`).
  Album at all 4 sizes: fresh = 6 locked hint cards; seeded
  (stamps{1,3} + stars{5}) = 3 earned, **zero locked-fact leaks**.
  Voice clip path (dedicated probe): a real pointer gesture unlocks the
  coach; `say('go')`/`say('win')` fire requests `ar/go_1.mp3` /
  `ar/win_1.mp3`, both HTTP 200, no failed clips. (The play runs log
  `voice requests: []` because their synthetic `el.click()` entry never
  fires pointerdown, so the coach stays locked — an instrument artifact,
  not a game fault; the probe above is the true unlock path. The loss
  run's posted save shows `muted:true` for the same reason: the probe's
  pre-start click landed on the menu's mute toggle.) Frames:
  `.../cycle3/` (96 files).
- **Cycle 4 (finisher, final build, from scratch) — ✅ clean.** Same
  full matrix repeated: frames 72/72 + menu, 0 page errors at every
  size; play 6/6 rounds place 1 / qualified / 3 stars (race times
  22–29 s), replay ✅ ×6, persistence reload 0 locked / album 6/6, 0
  errors; input probe identical PASS (steer −5.50→−5.16, stroke, drag
  input.x=1, pause/resume, exit/return, audio unlocked); gentle loss
  identical (place 12, unqualified, 0 stars, stamp + unlock posted);
  album at all 4 sizes identical (6 locked fresh / 3 earned seeded / no
  leaks). Spot-eyeball by the finisher: R4 start at 1366×1024 (start
  blocks, spring rocks, «الجولة ٤»), R2 end in portrait (finish arch),
  R3 results card, R1 start at 844×390 (12 swimmers, reed banks). Frames:
  `.../cycle4/` (96 files).

**Pass bar:** two consecutive clean rounds (cycles 3 and 4) with zero
❌, 4 cycles total (≥3 minimum) — **met. PASS.**

### Performance (environment caveat)

Headless rAF frame times (SwiftShader on a shared 1.5-CPU cell with
sibling agents running; 60 s windows inside a live race,
`protocol_splash_fps.mjs`): cycle 3 — R1 1× median 3400 ms / p90
4900 ms, R1 4× (CDP) 6566/7483 ms, R6 4× 3317/4183 ms; cycle 4 — R1 1×
5467/6700 ms, R1 4× 4233/5700 ms, R6 4× 3283/5500 ms. The spread across
identical builds (a 4× run reading *faster* than a 1× run) proves these
numbers track host contention, not the game — same method and magnitude
family as the deep_sea / fox_family sweeps. **No device fps claim is
made** (see غير مؤكد). Scene load recorded as evidence: draw calls
550–644, triangles ~150–165 k per frame (12→6 multi-part swimmers +
obstacles + dressing); no per-frame rebuilds in the protocol changes
(dressing is built once per round build). Bundle: game.js 146.7 KB
(≤ ~200 KB budget). `npm test` **10/10** (incl. the Phase 2H freeze,
album derivation/no-leak, distinct-mix and stamp-unlock tests);
`npm run build` green. Robot campaign ≈22–33 s per round (≈2.8 min for
the tour; a child will take longer).

### Decisions (finisher)

- Inherited cycle 2 not counted: evidence without a recorded verdict
  does not meet the protocol's evidence rules; two fresh cycles were run
  instead of trusting it.
- No code changes in the finisher pass — the inherited fixes were
  verified, not altered; the clean-round count therefore stands on the
  shipped build (`c7c5f8e4`). New probe scripts only:
  `~/tools/recorder/protocol_splash_input.mjs`,
  `protocol_splash_fps.mjs`, `protocol_splash_voice.mjs`.
- Rounds 3/4 pano closeness and Faiyum's theme-park pano: owner art,
  left untouched per the owner-art rule; identity is carried by
  code-drawn foreground dressing (recorded above for the owner's eye).

### غير مؤكد

- Not tested on a real device or a real iPhone WebView (fps, touch feel,
  audio unlock on iOS) — all performance numbers are headless-host only.
- No human (child) playthrough; robot + burst-driven play only, and the
  burst path steps `_raceFrame(1/30)` directly rather than rAF.
- Voice *audibility* (as opposed to clip requests returning HTTP 200 and
  the coach unlocking) was not ear-verified in the headless runs; the
  album facts remain screen-only until the owner's clips land (Phase 2H).
- The album in English (strings exist; Arabic verified by capture and
  the persistence reload ran in English with album 6/6 stamped).
- Draw-call count (550–644) was recorded, not optimised; whether it
  matters can only be judged on a real low-end device.
