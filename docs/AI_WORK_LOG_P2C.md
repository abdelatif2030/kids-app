# AI Work Log — Phase 2C (Batch D clone separation + Batch E Egypt identity)

Coordinator: Phase 2C. Scope: D clone separation (racing trio, lane_shooter
pair, course_race pair, space_store vs pumpkin_pie) · E Egypt identity
flagships (temple_army, samurai, tomb_puzzle, dino_grow, deep_sea).
Rules: owner's art never deleted or replaced — wire unused art IN; learn_* /
book_stories / Firebase never touched; kind rules everywhere (no fail clocks,
no lives, no harsh game-over, stars only for real achievement); pushes are
text-only snapshot pushes, at most one attempt, and never block local work.
Verify harness: ~/tools/recorder/phase2c_verify.mjs (real menu clicks, audio
unlocked, 3 landscape sizes, zero page errors); frames in
~/workspace/projects/audit/shots_phase2c/.

Pre-existing working-tree state (not mine, left untouched): modified built
game.js for gem_quarry, hero_tower, ice_rink, pin_puzzle, rug_cleaning,
sky_ace (Phase 2A stamp diffs) and the owner's untracked book_stories voice
folder + BOOK_STORY_PILOT_VOICE_REQUEST.csv.

---

## D1 racing trio — the shared track.js era ends (2026-11-27)

Before: one byte-identical track.js (md5 6f5ec8a1…) and near-identical sims
in moto_race / dune_titans / rain_circuit; the same five rivals (Salim, Laila,
Omar, Mariam, Youssef) in all three; dune's sim header still described "two
laps of the coastal circuit. The bikes…".

### moto_race — heritage GP, kept and sharpened
- track.js: its own circuit now — tightened harbour hairpin + a chicane on
  the back straight (21 control points, ≈1.65 km). Header names it as Moto
  Race's alone.
- sim.js: ACCEL 15→16 and a per-game STEER_RATE 10 (light bikes flick side
  to side faster than trucks or wet cars). Cast, rounds, GRIP 16 unchanged —
  it is the heritage original the other two were cloned from.
- Tests 7/7; build ok; click-flow verify PASS (title, race starts, cast).

### dune_titans → «رالي الواحات / Oasis Rally»
- track.js REWRITTEN: a 4.0 km Western Desert loop (scale ×2.0), HALF_W
  6.5→9 (trucks side by side), broad sweepers, and a sand grip profile —
  `gripAt()` dips to ≈0.6 in four soft-sand drift fields.
- sim.js REWRITTEN physics: LAPS 3→1 (a rally leg is point-to-point, camp
  to camp), GRIP 16→11.5 (packed dirt), ACCEL 10.5, STEER_RATE 6 (heavy
  trucks), off-road factor 0.5→0.32 (deep sand bogs a truck down). Grip is
  sampled live via gripAt in riding, AI braking and the easy-mode brake.
  Rounds are now the six oasis legs Siwa → Great Sand Sea → Bahariya →
  White Desert → Black Desert → Farafra → Oasis Cup: Dakhla. New rival
  cast: Hassan, Nadia, Tarek, Salma, Bilal (the shared RIDERS are retired
  here). 'grass' event renamed 'sand' through sim/main/audio. Stale
  MotoRace header comment in main.js replaced with the rally's own.
- HUD: the lap pill now shows leg progress ٪ (a leg has no laps).
- i18n: title رالي الواحات / Oasis Rally; round strings now مرحلة / Leg.
- Tests 9/9 (incl. visual_fixes): new track test asserts >3.5 km, drift
  dips <0.72, firm start; robot podiums all 6 legs (~95 s each).
- Click-flow verify PASS: menu title, race starts, leg ٪ HUD, cast, 0 errors.
- Honest gap: 6 legs × ~95 s ≈ 10 min total vs the plan's ≈25–30 min
  rally — right-sized for ages 3–6 attention; lengthening legs is a Batch F
  content decision, not a separation blocker.

### rain_circuit → «عاصفة إسكندرية / Alexandria Storm GP»
- track.js REWRITTEN: a 1.88 km Alexandria Corniche loop (harbour straight,
  beach sweepers, citadel hairpin; min corner radius 65 m after fixing two
  Catmull-Rom closure kinks) and a wet profile — `wetAt()` dips to 0.55 in
  four standing-water puddle bands.
- sim.js REWRITTEN physics: wet GRIP 12.5 scaled per round by `rain`
  (0.3→1.0, gripBase down to 9.0 in the finale), DECEL 24→15 (wet braking),
  STEER_RATE 5.5 (slow, slippery steering), skid from 24 m/s, puddles bite
  live via wetAt in riding/AI/easy-brake. The hero car wears the good wet
  tyres (+5% grip) so a good driver can still podium in the finale (robot
  evidence: without it the AI's skill-scaled grip wins every wet corner).
  Rounds are Alexandria places with escalating storm: Sidi Gaber → Raml
  Station → El Mansheya → Stanley Bridge → Montazah → Qaitbey Citadel
  Final. New cast: Farida, Ziad, Hana, Rami, Dina. LAPS 3→2.
- main.js: fog closes in and rain opacity rises with rd.rain; the puddles
  are VISIBLE — shining ellipse decals placed exactly where wetAt < 0.8.
  Stale MotoRace header replaced with the storm GP's own.
- i18n: title عاصفة إسكندرية / Alexandria Storm GP.
- Tests 7/7: corniche + puddle profile assertions; robot podiums all 6
  rounds (~90 s each). Click-flow verify PASS (cast, fog 376 @ rain 0.3,
  rain opacity 0.57, 0 errors).
- Note: the app-side Dart registry names (web_game.dart) still say the old
  names for dune/rain — renaming there is a coordination item for the
  owner's diff review (logged as a question below, work not blocked).

## Open questions for the owner (work continues regardless)
1. Dart registry display names for renamed games (dune_titans → Oasis
   Rally, rain_circuit → Alexandria Storm GP, and Batch E renames): update
   lib/games/web_games/web_game.dart names in the same diff, or keep the
   store-facing names as they are?

## D2 — lane_shooter pair (commits: see git log "lane_shooter")
- **squad_shooter → «فرقة الإنقاذ / Rescue Squad»**: the gun game is gone. Lifeboat crew throws life
  rings; swimmers are rescued (by ring or by reaching the boat), logs + the sunken wreck are the
  hazards, the Nile current pushes the boat, ducklings in a net replace the prisoner cage, 16 Nile
  reaches replace 8 industrial levels, daylight/palms/huts replace the night yard. Crew model lost
  its gun, carries a ring.
- **archer_bridge → «رماة جسر قصر النيل / Qasr El Nil Archers»**: skeletons-over-lava is gone.
  Wooden target dummies (never advance, cost nothing), arrows arc under gravity, per-level wind
  bends them, the grand target blocks the bridge. 8 real bridges; lamps replace flame cones; the
  lava plane is the Nile now.
- One package still builds both (shared gate/crate skeleton), but sim behaviour, physics, verbs,
  worlds and level counts genuinely differ per theme (`Run.opts.theme`, `buildRoad(level, seed, theme)`).
- Tests 9/9 (3 new). Harness 5/5 per game, zero errors, frames eyeballed at 3 sizes.
- Caught by the real-click harness: `theme: th.id` ReferenceError in start() — fixed to `this.th.id`
  before commit (the programmatic tests could not see it; the menu click could).

## D3 — course_race pair (commits: see git log "course_race")
- **rhino_summit → «كركوز وقمم مصر / Karkoz Climbs Egypt»**: new exclusive **head-charge** (metered
  burst; charged gate smash = boost, ground walk-in = gentle bump, dive-through = free), pads refill
  the meter, Egypt peaks ladder (Galala → Red Sea Mtns → Wadi Feiran → Saint Catherine → Mount Moses
  → Mount Catherine), summit-journal line on the end card.
- **alien_sky** keeps the jetpack exclusively; specials dispatch through one `_special()`.
- Tests 7/7 (1 new). Harness 5/5 per game, zero errors, frames eyeballed.

## D4 — tycoon pair (commits: see git log "space_store"/"pumpkin_pie")
- **space_store → «متجر النيل الفضائي / Nile Space Store»**: station-wing renames (save ids stable),
  delivery-rocket events, **shopper patience fix** (nobody waits forever at an empty rack), earned stars.
- **pumpkin_pie**: fixed ⭐⭐⭐ replaced by earned `starsFor(served)`; identity note (production chain
  vs space_store's logistics) recorded in both REVIEW docs.
- Tests: space_store 6/6, pumpkin_pie 9/9 (both +1 new). Harness 5/5 and 4/4, zero errors.

## BATCH D COMPLETE — all four clone groups separated (trio, lane pair, course pair, tycoon pair).

---

## E1 temple_army → «حرّاس الكرنك / Guardians of Karnak» (b1c01b86)
- Naming + hieroglyph art pass, ZERO sim change (git diff on sim.js/crowd.js/
  bot.js is empty). The 6 levels map 1-to-1 onto real temples: Karnak,
  Philae, Edfu, Abu Simbel, Luxor, Dendera (names + theme tints only).
- Glyph pass in src/art.js, all code-drawn canvas, pre-rendered into cached
  textures (zero per-frame cost): glyph frieze (sun disc, ankh, Eye of
  Horus, scarab, feather, water, was) on every gate lintel + exit lintel,
  faint carved glyphs on ~16% of floor slabs, scarab emblem on the captain's
  shield; wall caps take the level's sandstone tint instead of green moss.
- Kind-rule check PASSED with no changes: − and ÷ gates floor the army at
  1, every fork offers a growing gate, a lost run keeps half its coins and
  never reduces unlocks/stars, gentle tip card + one-tap restart. Locked in
  by a new test. Tests 17→19. Click-flow verify ALL PASS, 0 page errors.

## E2 samurai → «حارس المعبد / Guardian of the Temple» (f4da86f1)
- Full reskin on the proven wave/boss sim; sim.js diff is comments/wording
  only, hitboxes/timings/balance identical. Hero = temple guardian with a
  true curved khopesh, white/teal linen, nemes headcloth + sun disc;
  ninjas → shadow raiders (tomb robbers, dark linen wraps, bronze daggers);
  shuriken → spinning scarabs; oni → giant stone golem (stone + gold,
  amber eyes, no demon features); petals → golden sand sparkles.
- Stage names fixed for all 6 stages (courtyard/hypostyle/roof × morning/
  sunset/dawn/night/torchlight/sunrise) — stages 4–6 previously rendered
  the literal keys s4/s5/s6.
- Audio: SCALE retuned D miyako-bushi → D Hijaz (one constant), KOTO→OUD,
  FLUTE→NAY naming, battle drums softened toward duff.
- PANORAMAS: all 5 shipped panos were viewed — every one is an explicitly
  Japanese scene (torii/Fuji/cherry blossom, bamboo pavilion, Himeji-style
  castle, shrine, dojo). They are NOT wired and NOT deleted: the master
  plan suggested deleting the ~5 MB, the owner's no-delete rule wins.
  Stage backdrops are code-drawn instead (pylons, colonnade, obelisks,
  palms, sun-disc arena). The painted cut-outs (hero/slash/dash/win/
  ninja_*/oni.webp — literal samurai/ninja/oni pictures that replaced the
  3D models at runtime) are likewise no longer loaded, so the reskinned
  code models always render; the files stay on disk untouched. OWNER
  DECISION PENDING: delete the Japanese panos + old cut-outs (~5 MB) or
  keep them in the folder unused? (Folder stays over the ≤5 MB target
  until he rules.)
- Tests 13→13. Click-flow verify 9/9, 0 page errors.

## E3 tomb_puzzle → «سليم وكنوز الفراعنة / Salim and the Pharaohs' Treasure» (83c18e8f)
- Tombs re-sited (ids unchanged, saves safe): sand → Saqqara, gold →
  Valley of the Kings, moon → Abu Simbel. Hero named Salim the explorer.
- Pool art wired: desert_pano.webp (assets/games/art/, via ../art/) is
  now the menu + tomb-select backdrop through a new loadExteriorTex with
  a graceful fallback (verified with /art/ requests blocked: menu still
  renders, 0 errors). d_pyramid2.webp was tried and rejected on visual
  evidence — it is a black-background icon cutout, not a backdrop.
- Kind rules: par no longer gates stars. starsFor is now completion +
  collection only (exit / ≥1 ankh key / all keys, at any speed); par
  survives as a non-star "✨ best-moves sparkle". Tests 17→19 incl. a
  moves=999 all-keys solve = 3 stars. Click-flow verify 20/20, 0 errors.
- Not done (Batch F): 5 tombs/20 rooms, museum book, free-explore.

## E4 dino_grow → «سبينو الصغير / Little Spino» (dd98f81e)
- Display-only renames (ids/powers/thresholds untouched): L1 Bahariya
  Oasis (Spino bones subtitle), L2 Wadi El Hitan, L3 Black Desert; stages
  Hatchling Spino → Brave Spino → Spino Hunter → Spinosaurus; alphas →
  Bahariya Fang (36) / Whale Valley Fang (80).
- Hero model: Spinosaurus sail (one rounded plate built once with the
  model, sailK 0.45→1.3 across stages) + longer snout by stage. One true
  fact per stage (AR+EN) on the EVOLVED! banner + Spino-album line on
  the end card; the sail fact is hedged "Scientists think…".
- Palette: LOOK constants only per site. Tests 12→13. Click-flow 9/9.

## E5 deep_sea → «بُوري في البحر الأحمر / Bouri of the Red Sea» (54acd495)
- PRESSURE MECHANICS DELETED: no timer (Sea.left gone), no lives, no
  `lost` state at all — the sim runs play → boss → won. A bite = knockback
  bump + 2.2 s invulnerability + small growth cost (×0.94, floored at
  start size); bites can never end a run. Stars are pure bonus (finish at
  any pace ≥ 1 star). HUD timer/lives pills removed; results are win-only
  (first stat = time taken). Age-4 easy re-based: starts ×1.25 bigger,
  bite cost ×0.97.
- Six stops renamed (count/goals/bosses unchanged): Hurghada Reef, Ras
  Mohammed, The Blue Hole, Dolphin House, The Great Wreck, Elphinstone.
  All six shipped bg plates were already wired 1-to-1 — none unused.
  God-rays now build in EVERY world (opacity scaled by palette sun;
  static planes, zero per-frame cost). Hero recoloured to a grey mullet;
  species display names → Red Sea species (ids stable).
- Tests 6→9: idle 200 sim-s = still playing; 31 forced bites = still
  playing, growth never below start; robot wins 36/36 sampled runs (was
  32/36). Click-flow verify 10/10 incl. ~20 s idle-no-fail, 0 errors.
- Leftovers kept harmless: `lose` voice clip + lost strings/synth are now
  unreachable. No new voice lines needed.

## BATCH E COMPLETE — all five Egypt-identity flagships anchored.

## Add to instinct — new voice lines wanted (do NOT generate here)
1. dino_grow — spoken Spino facts (narrator/Spino guide), 4 facts × ar/en,
   texts exactly as in game_src/dino_grow STAGES[].fact:
   ar: «سبينوسورس عاش في مصر من زمان أوي!» / «سبينوسورس كان أكبر من تي
   ريكس!» / «سبينو بيحب المية وبياكل السمك!» / «العلماء فاكرين إن شراعه
   كان بيبرّده ويلفت النظر!» (+ the EN equivalents in STAGES[].fact).
   Note: wiring a spoken fact needs a small code change when clips arrive
   (VoiceCoach clips are event-based today).
2. samurai — optional: ar voice/ar/near_3.mp3 «التمثال العملاق صحي! خلي
   بالك!» (the `near` event has only 2 clips), VoiceCoach narrator voice.

## Open questions for the owner (work continues regardless)
2. samurai's Japanese panoramas + old painted cut-outs (~5 MB): delete,
   or keep in the folder unused? (See E2 — nothing deleted without his
   word; the game no longer loads them.)
