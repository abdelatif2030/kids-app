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
