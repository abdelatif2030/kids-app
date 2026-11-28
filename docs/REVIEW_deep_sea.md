# REVIEW — deep_sea «بُوري في البحر الأحمر / Bouri of the Red Sea»

## Phase 2C Batch E — Egypt identity + pressure removal (2026-11-27)

### What changed
- **Timer deleted.** `Sea.left`, the per-level `time` field, the step() countdown/timeout branch, the HUD timer
  pill (`.ds-timer`, CSS removed), the low-time tick sound trigger, and the intro card's seconds line are all gone.
  The intro card now shows a "🌊 swim at your own pace — no timer, no losing" line (`noRush` string, ar/en).
- **Lives deleted.** `Sea.lives`/`maxLives`, the HUD lives pill (`.ds-lives`, CSS removed), and the lose-by-bites
  branch are gone. The sim has no `lost` state at all (`play -> boss -> won` only).
- **What replaced them:** a predator bite is a bump — knockback + invulnerability window (unchanged) + a small
  growth cost (×0.94 of current size, floored at the starting size). Bites are counted (`s.bites`, shown in the
  result data) but can never end a run or lose progress. Stars are now a pure bonus: 1 star for finishing at any
  pace, +1/+1 for finishing under the old `star2`/`star3` second thresholds. Results screen is win-only and its
  first stat box now shows time *taken* instead of time left.
- **Age-4 easy mode, re-based:** easy used to grant +1 life and +25% time; it now grants a bigger starting size
  (×1.25 of the level start, also the bite floor) and a smaller bite cost (×0.97 instead of ×0.94).
- **Red Sea identity.** In-game title (i18n + standalone page `<title>`) → «بُوري في البحر الأحمر / Bouri of the
  Red Sea». The hero model was recoloured from the blue/yellow fusilier to a silvery grey mullet (Bouri).
  Level-name mapping (count, goals, mixes, tasks, bosses unchanged):
  | # | Before | Now | World / plate |
  |---|--------|-----|----------------|
  | 1 | Sunlit Reef | شعاب الغردقة / Hurghada Reef | reef / bg_reef |
  | 2 | Kelp Forest | رأس محمد / Ras Mohammed | kelp / bg_kelp |
  | 3 | Deep Trench | الثقب الأزرق / The Blue Hole | trench / bg_trench |
  | 4 | Night Reef | بيت الدلافين / Dolphin House | reef, night look / bg_night |
  | 5 | Sunken Ship | السفينة الغارقة / The Great Wreck | kelp, wreck look / bg_wreck |
  | 6 | Abyss Fortress | إلفينستون / Elphinstone | trench, abyss look / bg_abyss |
  The wreck plate was already wired (stop 5), so per the batch rule the trench dive took the Blue Hole name
  (a real deep sinkhole — fits the trench palette and the shark finale). Display-name-only species renames (sim
  ids unchanged): damsel → Anthias «سمكة الأنثياس», butterfly → Red Sea Butterflyfish «فراشة البحر الأحمر»,
  tuna → Red Sea Tuna «تونة البحر الأحمر», shark → Reef Shark «قرش الشعاب». Grouper stays «الهامور».
- **Aquarium look.** Bait-ball swarms already spawn in every level (sim `baitT`, all levels have a `bait` kind).
  God-rays were previously skipped for trench-biome levels; they are now built in **every** world, with opacity
  scaled by the palette's sun value (reef ≈0.07, trench ≈0.035, abyss ≈0.034) — static planes created once per
  sea build, zero per-frame cost, no new assets. All six shipped plates (bg_reef, bg_kelp, bg_night, bg_wreck,
  bg_trench, bg_abyss) are wired to a level; none was unused and none was deleted or replaced.

### Tests
- Baseline before changes: **6 tests, all pass** (robot won 32/36 sampled runs).
- After: **9 tests, all pass** (`npm test`, ~22 s — longer because of the idle/dawdle proofs). Robot clears all
  six stops and wins 36/36 sampled runs. The old "time runs out when idle" test was rewritten as "idle 200 sim-s
  forever — still playing, no result, and the sim object has no `lives`/`left` fields at all". New tests: 31
  forced bites never end a run and growth never drops below the start size; easy mode starts bigger and loses
  less per bite; a 160 s dawdle followed by robot play still wins with exactly 1 star.

### Click-flow verification
Own harness `~/tools/recorder/phase2cE_deep_sea.mjs` (pattern copied from phase2c_verify.mjs, shared file
untouched): **10/10 checks pass, zero page errors.** Real clicks: menu (title «بُوري في البحر الأحمر») → Play →
intro card (شعاب الغردقة + no-rush line) → Start dive → level 1 playing. HUD assertions in-page: no `.ds-timer`,
no `.ds-lives`, goal pill present, sim has no `lives`/`left` fields, 15 god-ray planes in the level-1 sea.
Idle check: ~20 s untouched in-level — mode/state still `play`, no results overlay, sim clock advancing
(SwiftShader runs ~1 fps with dt clamped, so sim-seconds lag real-seconds; the 200 s no-fail proof is in the
node tests). Frames captured at 844×390, 1024×768, 1366×1024 into `~/workspace/projects/audit/shots_phase2c/`
and eyeballed: goal pill only, silvery Bouri centre-frame, god-ray bands visible, dash button and pause present.

### Honest gaps
- Not played on a real phone/tablet; SwiftShader headless only. Sound not listened to by a person.
- The 'lose' VoiceCoach clip and the `lostTime`/`lostBit`/`eatenTitle` strings and the synth 'lost' sound are now
  unreachable leftovers (kept, harmless) — the lose voice clips in assets stay on disk untouched.
- Batch F scope remains: more Red Sea stops (master plan lists 8), the reef album, and Dart-side display names in
  the app registry were not touched (lib/ is out of bounds for this batch).
- No new voice lines were needed: all existing clips (go/pickup/trick/nitro/charge/near/bump/win) still map to
  live events; `lose` is simply no longer triggered.

## Phase 2F — Batch F long tail: 8 stops + reef album (2026-11-27)

### What changed
- **Two stops APPENDED (ids 7–8; ids 1–6 untouched — pinned by a deep-equal test of every gameplay field).**
  - **Stop 7 «محمية وادي الجمال / Wadi El Gemal»** — a real protected seagrass bay south of Marsa Alam. The calm
    breather of the tour: a wide, shallow reef world (half 140) full of small food (plankton/shrimp/damsel/jelly,
    sardine bait balls), only the grouper hunts, **no task and no boss** — it differs in feel, not just numbers.
    Start 160 → goal 540 cm (the growth curve continues gently past Elphinstone's 450).
  - **Stop 8 «جزر حماطة / Hamata Islands»** — the remote southern-islands finale and the **only stop that
    combines both goal mechanics**: eat 4 squid AND grow to 650 cm, then the reef-shark boss arrives. Kelp
    world, tuna bait balls, barracuda + grouper hunters. Start 200 → goal 650 cm.
  - Chosen over Sataya/Daedalus: Daedalus is an offshore shark reef (would duplicate Elphinstone's boss dive),
    and Sataya is another dolphin house (duplicates stop 4). Wadi El Gemal + Hamata give two new feels —
  lagoon breather and combined-mechanics finale — with the existing goal/boss/task fields only.
- **Backgrounds (honest reuse):** only six bg plates ship, wired 1-to-1 to stops 1–6, and no image files were
  added or modified. Stops 7–8 cycle plates by biome through the existing `BIOME[look || biome]` wiring:
  Wadi El Gemal (reef) reuses bg_reef, Hamata (kelp) reuses bg_kelp. **Owner question: dedicated plates for
  stops 7–8?** (A Wadi El Gemal seagrass/mangrove plate and a Hamata islands plate would finish the tour's look.)
- **Reef album (ألبوم الشعاب), following ocean_defense's reef-guide pattern.** A 📖 button on the main menu
  opens the album: one card per stop featuring a species Bouri actually meets there (in its mix, or its boss) —
  Anthias, Squid, Reef Shark, Jellyfish, Tuna, Anglerfish, Shrimp, Barracuda — each with the species name
  (ar+en), the stop name, one true simple fact (ar+en, stored as `species`/`fish`/`fact` data on LEVELS), and
  the stop's stars. A card unlocks when its stop is completed (stars > 0); locked cards are dark silhouettes
  with «لسه سرّ!» / "Still a secret!". Unlocks are **stop-completion based, not encounter based**: the sim's
  per-run `seen` set is never persisted, while stars are the save — so the pure sim export `albumEntries(save)`
  (same shape as ocean_defense's `guideEntries`) derives everything from existing save fields and **old saves
  migrate for free**: a finished 6-stop save shows stops 1–6 open and 7–8 locked (pinned by a migration test).
- **Kind rules kept:** no timers/lives/fail states touched or reintroduced; stars remain fast-finish bonuses;
  no per-frame work added (the album is a static menu screen); no voices generated.

### Playtime (method: robot medians + child model)
- Method: median robot win time per stop over 6 seeds (sim `robotSwim`, 30 Hz), summed; child estimate =
  robot ×3 + 20 s per stop for menus/intro cards/album, the same model used for ocean_defense in Phase 2E.
- **Before (6 stops):** robot sum 157 s (medians 85/24/18/18/5/7 s) → child model ≈ **9.9 min**.
- **After (8 stops):** robot sum 221 s (+64 s: Wadi El Gemal median 45 s, Hamata 18 s) → child model ≈ **13.7 min**.
- **Honest gap vs the ≈30 min target:** under this model the tour is ~14 min, not 30. The robot is an optimal
  combo-chaining player — it clears stops 3–6 in 5–18 s because growth snowballs — so its medians badly
  understate a young child's real pace (exploring, missing prey, watching bait balls), but no larger factor is
  claimed without evidence. Lengthening stops 1–6 was out of bounds (first-six-unchanged rule); if the owner
  wants a longer tour, the honest lever is rebalancing stops 1–6 or adding stops, both owner decisions.

### Tests / build / verify
- `npm test`: **13/13 pass** (was 9). New: LEVELS.length === 8 with first-6 gameplay fields deep-equal; album
  lock/unlock logic (fresh all locked, partial, full); old-save migration; a scripted campaign sailing
  stop 1 → 8 in order (unlock chain 1→8 asserted at each step, album complete at the end). The robot clears
  all 8 stops and wins **48/48** sampled runs (was 36/36), including Hamata's squid-hunt-then-shark. The old
  'saves are cleaned' anchor moved 6 → 7 unlocked (LEVELS.length grew; stars logic unchanged).
- Build: `npm run build` green, **game.js 145.2 KB** (shared-engine build, ≤200 KB budget kept).
- `phase2f_verify.mjs deep_sea`: **PASS, 0 page errors**; frames at 844×390, 1024×768, 1366×1024 eyeballed —
  goal pill only (no timer/lives), silvery Bouri centre-frame, dash button present.
- Album screenshotted via real menu clicks (own harness `~/tools/recorder/phase2f_deep_sea_album.mjs`) into
  `~/workspace/projects/audit/shots_phase2f/`: fresh save = 8/8 cards locked silhouettes with the secret line;
  seeded save (stars on stops 1–3) = those 3 cards open with species names, facts and stars, 5 locked. Clean
  both ways, 0 page errors.

### Not done / gaps
- Spoken album facts: no voices generated (rule). 16 lines (8 facts × ar/en) are listed as ADD TO INSTINCT in
  the Phase 2F fragment (`voice/<lang>/fact<stop>_1.mp3`); album playback wiring waits for those clips, exactly
  as ocean_defense's album does. Until then the facts are read on screen only.
- Stops 7–8 have no dedicated bg plates (biome-cycle reuse, see above) — owner art decision.
- Not played on a real phone/tablet; SwiftShader headless only. Sound not listened to by a person.
- Dart-side display names for stops 7–8 in the app registry were not touched (lib/ is out of bounds).

## Certification Sweep A — deep_sea (2026-11-27/28)

Harness: `~/tools/recorder/cert_dsfx_run.mjs` + `cert_dsfx_tail.mjs` (real menu click-flow, audio unlocked by
real clicks, seeded saves via the game's own `window.crStart`, frames in `~/workspace/audit_dsfx/deep_sea/c{1,2,3}/`).
A cycle = fresh menu at 844×390 / 1024×768 / 1366×1024 + portrait 390×844, Play→intro→dive click-flow, EVERY stop
entered via the real levels screen, start+mid frames at 1024×768, last stop at all 4 sizes, album fresh + full-save,
old pre-2F save load, keyboard input, rAF perf plain + 4× CPU throttle, `npm test`.

### Level inventory (8 stops)

| # | Stop | Background (look / plate) | World | Start→goal | Mechanic signature |
|---|------|---------------------------|-------|-----------|--------------------|
| 1 | شعاب الغردقة / Hurghada Reef | reef / bg_reef — teal reef, corals | 48×9 | 10→45 cm | learn-to-eat mix, sardine bait balls, grouper |
| 2 | رأس محمد / Ras Mohammed | kelp / bg_kelp — deep green kelp forest | 75×13 | 30→110 | squid hunt ×3, barracuda |
| 3 | الثقب الأزرق / The Blue Hole | trench / bg_trench — dark trench, glow fish | 120×20 | 70→250 | reef-shark boss finale |
| 4 | بيت الدلافين / Dolphin House | night (reef) / bg_night — deep blue night | 60×11 | 60→180 | night mix, 2 barracuda + grouper |
| 5 | السفينة الغارقة / The Great Wreck | wreck (kelp) / bg_wreck — green wreck, anchor dressing | 85×15 | 90→300 | squid hunt ×5 |
| 6 | إلفينستون / Elphinstone | abyss (trench) / bg_abyss — purple abyss fortress | 130×22 | 130→450 | shark boss, anglerfish |
| 7 | محمية وادي الجمال / Wadi El Gemal | **lagoon** / bg_reef plate, emerald palette + seagrass meadows (Sweep A) | 140×23 | 160→540 | calm breather: no task, no boss, small-food mix |
| 8 | جزر حماطة / Hamata Islands | **islands** / bg_kelp plate, bright island-blue palette + coral gardens (Sweep A) | 150×24 | 200→650 | only stop combining squid hunt ×4 AND shark boss |

Difficulty rises by goal size, world size and predator mix only — no timers, no lives, no fail state (a bite is a
bump + small growth cost). Stars are fast-finish bonuses; finishing slowly always wins with 1 star.

### ❌ found in cycle 1 and fixed

1. **Stops 7–8 shared their backgrounds with stops 1–2** (same BIOME palette + plate: 7≡1 reef, 8≡2 kelp).
   Fix (commit `1e53966d`): stops 7/8 gained their own `look`s (`lagoon`, `islands`) — new BIOME palettes
   (emerald shallows / bright island blue: water, fog, sand, rock, light all differ) plus code-drawn dressing
   built once at sea-build (46 seagrass tufts in the lagoon; 30 corals in Hamata's kelp). Zero new image files.
   Verified in cycle-2/3 frames: stop 7 is bright emerald seagrass shallows, stop 8 bright blue with a coral
   garden — unmistakably different from stops 1/2. Regression test pins all 8 `(look||biome)` keys distinct.
2. **The reef album had NO listen buttons** — the 2F wiring premise did not exist in code (cycle-1 full-save
   album: 🔊 count 1 = the mute toggle only; cards were screen-only even though the fact clips are the album's
   spoken content). Fix (same commit): unlocked cards gained a 🔊 «اسمع» button wired exactly like fox_family's
   album — `voice.playClip(factClipName(lv), factText)` with the pure `factClipName` export (`fact<id>_1`) —
   and locked cards keep no button. Cycle-2/3 full-save album: 🔊 count 9 (8 cards + mute); fresh album: 8/8
   locked, no card buttons. The fact clips themselves are still NOT recorded (checked both voice folders: no
   `fact*_1.mp3` in ar/en) — until Instinct's clips land, the kit's spoken fallback reads the fact, which is
   the accepted interim behaviour; the 16 lines stay on the add-to-instinct list below.
3. **Portrait menu title was clipped** at 390×844 («بُوري في البحر الأحمر» ran off both edges; `.ds-logo b`
   used `calc(var(--u)*13)` with `nowrap`). Fix: `font-size:min(calc(var(--u)*13),8.5vw)`. Cycle-2/3 portrait
   menu frame shows the full title inside the screen; landscape sizes unchanged.

### Cycles

- **Cycle 1 ❌** — the three defects above. Everything else passed: fresh Play→intro→dive flow, all 8 stops
  entered via real levels-screen clicks with correct HUD goals (45/110/250/180/300/450/540/650 cm), 0 page
  errors in every session, album fresh 8/8 locked, old pre-2F save (6 stops starred) loads clean.
- **Cycle 2 ✅ zero ❌** — full pass on the fixed build: all 8 stops entered, stop 7 lagoon + stop 8 islands
  frames eyeballed distinct, album full = 8 open cards each with a listen button (frame eyeballed), album
  fresh = 8 locked with none, portrait title fits, old save clean, `npm test` 14/14.
- **Cycle 3 ✅ zero ❌** — full repeat, `failures=0`: all 8 stops entered (stop-8 HUD showed live squid-task
  progress ٢/٤ and combo ×٦ in the harness's own play), album fresh/full identical to cycle 2, old save clean.
  Two consecutive clean cycles (2+3) after a 3-cycle sweep — **CERTIFIED**.

### Final review (as a first-time viewer, cycle-3 frames)

Menu is calm and clear at all sizes; every stop reads as its own place (teal reef → green kelp → dark trench →
night blue → wreck green → purple abyss → emerald lagoon → bright islands). HUD never covers Bouri or the dash
button; goal pill + task pill stay readable mid-action (stop-8 mid frame: tuna school, barracuda, god-rays,
267 cm Bouri). The weakest moment remains stop 3–6 pacing for a skilled player (see length judgement) — a
design/length question already with the owner, not a defect found by play.

### Length — reported judgement (not a ❌, per the owner's logged question)

Re-measured with the 2F method (median robot win time per stop over 6 seeds, sim 30 Hz; child model = robot ×3
+ 20 s/stop): robot medians 87/27.6/18/13.2/14.1/8.4/51.1/18.1 s, sum **237.5 s** → child model ≈ **14.5 min**
(2F measured 221 s → ≈13.7 min; same ballpark, seed variance). Still short of the ≈30 min master-plan target
for the same structural reason logged in 2F: the robot snowballs through stops 3–6 in seconds and stops 1–6
may not be rebalanced without an owner decision. No padding was added to fake the number.

### Performance

- No per-frame rebuilds in changed code: the new dressing is built once in `_buildSea`; the album button is
  static DOM; palettes are data. `npm run build` game.js **150.5 KB** (≤200 KB budget).
- Headless rAF (SwiftShader on a shared 1.5-CPU cell with several sibling agents running): cycle 1 median/p90
  3899.9/10799.5 ms plain, 5133.2/9483 ms at 4× CPU throttle; cycle 3 3683.2/4499.8 ms plain, 4133.2/5483.1 ms
  throttled. These numbers measure the shared headless host, not the game — the same harness on an idle host
  in earlier phases rendered this game interactively. **No device fps claim is made** (see غير مؤكد).
- Tests: `npm test` **14/14 pass** (13 from 2F + 1 new Sweep A regression: distinct looks + clip stems).
  The sim robot clears all 8 stops, 48/48 sampled wins incl. Hamata's squid-hunt-then-shark.

### Voice / audio checks

- VoiceCoach events fire from real play (combo counter visible in HUD during harness play; clips for
  go/pickup/trick/nitro/near/bump/win exist in both languages — 18 files per lang on disk). Cooldown logic is
  the shared kit's (9 s per-event / 4 s global), unchanged by this sweep and not re-timed by ear.
- Album fact clips `fact1–8` (ar/en): **absent** → pending (below). Picnic-style fallback reads the line aloud
  via the kit until they land.

### Add to instinct (unchanged from 2F — still unrecorded, now wired and waiting)

deep_sea, install to `assets/games/deep_sea/voice/<lang>/fact<stop>_1.mp3`:
fact1 ar «الأنثياس بتعوم مع بعضها في سحابة وردية وبرتقالية كبيرة فوق الشعاب المرجانية.» / en "Anthias swim together in one big pink-and-orange cloud above the coral reef." ·
fact2 ar «الحبار بيطلّع سحابة حبر غامقة عشان يختفي، وبعدين يهرب لورا بسرعة!» / en "A squid squirts a cloud of dark ink to hide, then jets away backwards!" ·
fact3 ar «قرش الشعاب خجول وهادي، بيعوم بهدوء حوالين الشعاب ومش بيقرب من الناس.» / en "Reef sharks are shy and calm — they cruise slowly around the reef and stay away from people." ·
fact4 ar «قنديل البحر معندوش مخ ولا قلب، وبيعوم مع الميه زي مظلة صغيرة.» / en "A jellyfish has no brain and no heart — it drifts with the water like a tiny umbrella." ·
fact5 ar «التونة بتعوم بسرعة كبيرة ومش بتقف أبدًا، حتى وهي نايمة بتفضل تتحرك!» / en "Tuna swim very fast and never stop moving — they even keep swimming while they sleep!" ·
fact6 ar «سمكة أبو الشص شايلة لمبة صغيرة بتنوّر في الضلمة عشان تجذب الأكل لعندها.» / en "The anglerfish carries a tiny lamp that glows in the dark to lure its food closer." ·
fact7 ar «قلب الجمبري موجود في راسه!» / en "A shrimp's heart is in its head!" ·
fact8 ar «الباراكودا جسمها طويل زي السهم، وبتندفع في الميه بسرعة كبيرة.» / en "The barracuda is long like an arrow, and it darts through the water super fast."

### غير مؤكد (unconfirmed)

- Real-device / iPhone WebView performance and touch feel — headless SwiftShader only; the rAF numbers above
  are host-contention artefacts, not device measurements.
- No human has listened to the audio in this sweep (VoiceCoach timing/levels by code + kit contract only);
  the album's spoken fallback voice is the kit's interim voice, not a recorded narrator.
- A full human start-to-finish playthrough of stops 7–8 in the browser (sim robot + click-entry + live HUD
  progress only); English album/menu rendering not screenshotted (Arabic was; en strings share the i18n path).
- Draw calls / triangle counts not read from the live renderer (the game does not expose `renderer.info`);
  perf evidence is build-time-only dressing + frame behaviour, not a renderer profile.
