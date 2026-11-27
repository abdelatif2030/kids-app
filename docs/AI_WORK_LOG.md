# AI work log — branch ai/moss-work

Owner review flow: compare `git diff feature/rehlaty...origin/ai/moss-work`, test, then merge or roll back.
Baseline: feature/rehlaty at cc12d94b (snapshot commit 4898b7f locally; identical tree).

## 2026-11-27 — audit + baselines (no code changes)

- Full inventory: 61 game_src packages → 77 registered web games + native educational games. No orphaned sources (highway_race→sunset_highway, lane_shooter→squad_shooter+archer_bridge, course_race→alien_sky+rhino_summit, learn_games→11 learn games, girls_games→girls_world).
- Code-signal scan of all 61 packages: voice encouragement in 11/61, particles 13/61, music hooks 50/61, camera shake 38/61.
- Test baseline at cc12d94b (Flutter 3.50.1 / Dart 3.14, Node 24):
  - JS: 61/61 packages `npm test` green.
  - flutter analyze: 0 errors, 1 warning (known `_round`, where_animal_game.dart:26), 277 info (mostly Flutter 3.50 material.dart deprecation notices).
  - flutter test: 1608 passed, 1 pre-existing failure — `sky_ace` has a card but is in no fun section (test/fun_sections_test.dart), i.e. unreachable from the sections UI. NOT fixed yet; flagged for a later batch.
- Environment note: sandbox blocked Dart raw TCP; owner enabled it 2026-11-27 morning. An offline pub-cache (curl + SHA-verified archives from the lockfile) also works as a fallback.

## 2026-11-27 — design system

- `docs/AI_DESIGN_SYSTEM.md`: owner's pillars, shared systems, driving model, camera language, per-game identity + verification bar.

## 2026-11-27 — batch 1: shared voice + Sunset Highway prototype

Commits:
- `e32a7d9` cozy_kit/voice.js — VoiceCoach: local mp3 clips first (`voice/<lang>/<event>_<n>.mp3`), speechSynthesis fallback, variant rotation, per-event cooldown 3 s, global gap 1.4 s, girl-aware Arabic, mute-aware.
- `73f8057` highway_race (سباق الغروب / Sunset Highway):
  - sim: spring-damper lateral dynamics (weight, slight overshoot), 5-gear longitudinal model (gear + rpm exposed), firm engine braking, bump = brief scrub with rising target, near-miss events on clean close passes, bump shove has lateral velocity.
  - render: speed FOV (+7, +5 on nitro), bump camera shake, body roll from lateral velocity, pitch from acceleration, pooled particles (nitro flames, bump sparks, win confetti).
  - audio: engine note follows gear + rpm (audible shifts).
  - voice: VoiceCoach wired to go/nitro/overtake/overtaken/near/bump/charge/win/lose/count.
  - BUG FIX: stage progression capped unlock at 3 (`Math.min(3, …)`) although the game has 6 stages — stages 4–6 could never unlock. Now caps at STAGES.length; end screen "last stage" check fixed likewise.
  - Tests: npm test 6/6 (robot still wins all 6 stages; speed test green after tuning). Built game.js committed.
- `812bf7a` voice clips: 22 AR + 22 EN generated clips in assets/games/sunset_highway/voice/ (1.7 MB total).

Identity — Sunset Highway: hero = the child's red racer vs the blue rival; world = Egyptian coastal highway at sunset (Rayan Waterfalls, Sokhna Mountains, Alamein Night, White Desert, Port Said Light, Gouna Lagoons); verb = weave + nitro; voice = excitable racing companion.

Delivery: playable zip sent to owner in chat 2026-11-27 09:18. Gameplay video pending a Chromium download approval on the owner's side (the sandbox's bundled browser refuses standalone CDP: "Hatch WebGL domain policy"); recorder script ready at ~/tools/recorder/record_cdp.mjs (canvas captureStream + in-page autopilot).

## 2026-11-27 — sky_ace reachability fix

- `184a839` fun_sections.dart: `sky_ace` (طيار السحاب / Sky Ace) added to the Racing section. The pre-existing baseline failure is gone: fun_sections_test 3/3 green, no new analyze issues. This also fixes a real product bug — the game was unreachable from the sections UI.

## 2026-11-27 — batch 2: circuit racers get a voice (moto / dune / rain)

The three circuit racers share one sim family (grip-limited steering, lean/skid, slipstream, soft-barrier crashes) and already had gear/RPM engine synths, sparks and camera shake. Their missing pillar was the living voice.

- `5d6ff6d` Moto Race (سباق الدراجات / Egyptian circuits: Alexandria Corniche → Grand Museum Cup): VoiceCoach wired to go/nitro/overtake/crash/wall/draft/lap/win/lose/count. Tests 7/7, build committed. Clips: 20 AR + 20 EN bike-flavoured lines (`…` commit).
- `ebeb173` Dune Titans (desert trucks): same wiring, tests 9/9, build committed. Clips generating (desert-truck lines).
- `cb9ea2a` Rain Circuit (wet racing): same wiring, tests 7/7, build committed. Clips generating (rain lines).
- VoiceCoach phrase banks gained `draft` and `lap` events for all games.

## 2026-11-27 — batch 3: the whole Racing section speaks

Every game in the Racing fun section now has live voice encouragement via VoiceCoach, each with its own flavour of generated AR+EN clips:

- `3f9136c` Coastal Drive (الكورنيش): near-miss/coin/nitro/crash/win voice. Tests 9/9. Clips 18+18 committed in `91fd94f`.
- `1303c15` Carnival Race (Mario-Kart-like): boost/trick/ticket/lead/spin voice; race.js ticket events now carry the collecting car's id so only the child's pickups speak. Tests 10/10.
- `f0e63ca` Air Race (ring flying): rings/boost/bump/laps voice. Tests 7/7.
- `38bbe06` Splash Race (rhythm swimming): perfect-stroke praise, leaps, slides, bonks, qualify win/lose voice. Tests 6/6.
- `91fd94f` Summit Rush (snow climb): crystals/dodges/tailwind/wipeouts/summit voice. Tests 9/9.
- `a39541b` Sky Ace (canvas plane shooter): kills/coins/power-ups/boss-arrival/bomb voice + stage intro. Tests 10/10.
- VoiceCoach banks gained `pickup` and `trick` events.
- Clips for carnival/air/splash/summit generated in one batch (148 files); sky_ace clips next.

Racing section: 10/10 games voiced. Next families: Action & Battles, Runners & Jumpers.

## 2026-11-27 — batch 4: the whole Action & Battles section speaks

All 16 action packages (17 built games) now have VoiceCoach wiring with per-game AR+EN clips:

- `b3d4987` Samurai: kills/deflects/waves/boss voice. Tests 13/13. Clips 15+15.
- `2f5589d` Zombie Rooftop: pops/coins/weapons/king/waves voice. Tests 9/9. Clips 19+19.
- `5aae586` Ice Dragon: segment breaks/chain blasts/new allies voice. Tests 4/4. Clips 10+10.
- `b004777` Hero Tower: fights/loot/keys/victory voice. Tests 19/19. Clips 15+15.
- `7045e92` Hamster Warrior: power cards/absorbs/stronger-warnings voice.
- `627fbf0` Ocean Defense: kills/waves/octopus boss/wall hits voice.
- `2a615a2` Squad Shooter + Archer Bridge (shared lane_shooter source, two built games): kills/good gates/freed teammates/weapon-up voice; each built game gets its own flavour of clips in its own folder.
- `4013ab2` Nutmeg Rush (football): nutmegs/dodges/goals/keeper saves voice — goals use the win bank.
- `573278e` Viking Sling: goblins down/barrel booms/special abilities voice.
- `31f5b4d` Card Battle: enemy-unit defeats (side-aware)/own-base hits/double-time voice.
- `435306e` Dino Grow: eating/evolving/boss bites/alpha defeats voice.
- `ba537c8` Ice Rink: chain hits/special launches/hero KOs/enemy-phase voice.
- `068a899` Barrel Knights: own goals vs conceded (win vs bump), dash barrel hits, boulder warnings voice.
- `55682ca` Gummy Squad: crumbles/candy/bear downs/boss intro voice.
- `36d952e` Temple Army: good/bad gates, freed cages, fight wins, boss voice.

Action section: 17/17 built games voiced. Remaining families: Runners & Jumpers, Build & Collect, Puzzle & Logic, Girls World, Learn games.

## 2026-11-27 — batch 5: the whole Runners & Jumpers section speaks; Action clips complete

Action-section clips finished: `f8c0eb8` adds Hamster Warrior (14+14), Ocean Defense (17+17), Squad Shooter (13+13), Archer Bridge (13+13, bow flavour), Nutmeg Rush (16+16), Viking Sling (12+12). Card Battle, Dino Grow, Ice Rink, Barrel Knights, Gummy Squad and Temple Army clips follow in batch 6.

All 13 Runners & Jumpers games now have VoiceCoach wiring, each with its own event flavour:

- `18a3f9c` Sky Jumper (was one of the 13 zero-audio games): springs/power-ups/monster squashes/new-record voice. Tests 4/4.
- `6877bd6` Jungle Adventure: coins/relics/stomps/checkpoints voice; girl flag follows the chosen hero. Tests 18/18.
- `462b740` Cloud Dash: coins/power-ups/perfect landings voice. Tests 7/7.
- `9a0cef6` Alien Sky + Rhino Summit (shared course_race source): rings/powers/smashes voice; space vs mountain clip flavours per built game. Tests 4/4.
- `7a1127e` Fizz Runner: cans/stunts/shield saves/crashes voice. Tests 5/5.
- `ad4d780` Ball Scoop: scoops/multiply gates/wall hits/banking voice. Tests 8/8.
- `ba7633e` Sky Capy: pops/pearls/rescues/thief-and-boss warnings voice. Tests 9/9.
- `a04b94b` Golden Tail: tail grabs/stolen/falls voice. Tests 10/10.
- `5968d8d` Rhythm Show: rival outs/saved hearts/obstacle hits voice. Tests 6/6.
- `9d8ce41` Fox Family: berries/cubs joining/train warnings/safe-home voice. Tests 6/6.
- `edbebb0` Hop World: coins/stomps/mushroom growth/checkpoints/castle voice. Tests 7/7.
- `cc77ac5` Trick or Treat: candy/friends joining/perfect rings/boss voice. Tests 16/16.

Runners section: 13/13 wired. Runner clips generate in batches 6b/6c. Remaining families: Build & Collect, Puzzle & Logic, Girls World, Learn games.

## 2026-11-27 — batch 6: the whole Build & Collect section speaks

All 12 build/management games now have VoiceCoach wiring, each with its own event flavour:

- `5185caa` Pumpkin Pie: pies baked/customers served/new pads/day complete voice. Tests 7/7.
- `60c95e2` Space Store: shelves stocked/sales/robots and sections unlocked/day complete voice. Tests 5/5.
- `16d676c` Honey Farm: jars/crates packed/customers served/goal reached voice. Tests 4/4.
- `bab032f` Pearl Divers (was zero-audio): pearls found/sold/divers hired/rival beaten voice. Tests 5/5.
- `45ae6e3` Winter Camp: logs delivered/buildings raised/storm warnings/gate opened voice. Tests 5/5.
- `8ceda7e` Castaway Raft: salvage and fish caught/golden bottles/shark warnings and scares/island voice. Tests 6/6.
- `5cc4a6c` Creator Tycoon: masterpieces vs slop/client orders/promotions voice. Tests 9/9.
- `b4ddf41` Hot Spring: guests thawed/tea served/lanterns lit/valley warm voice. Tests 11/11.
- `a6be67b` Mars Farm: harvests/products built/colonists/regions/levels voice. Tests 23/23.
- `62ecebe` Gem Quarry: trucks loaded/deliveries/upgrades/full-pile warnings voice. Tests 8/8.
- `5c3e068` Happy Farm: harvest coins/trailer unloaded/animals penned/upgrades/field done voice. Tests 19/19.
- `11d1f65` Rug Cleaning: halfway praise/rug ready/job stars voice. Tests 12/12.

Build section: 12/12 wired. Clips generate in batch 7 (272 files).

## 2026-11-27 — batch 7: Puzzle & Logic speaks; Girls World speaks; Learn verified

All 9 puzzle games now have VoiceCoach wiring:

- `057e036` Marble Dozer: marbles home/8-streak combos/colours complete/multiplier gates voice. Tests 9/9.
- `067941c` Chomp Maze (was zero-audio): power fruit/ghosts eaten/caught/maze cleared voice. Tests 4/4.
- `621c2fe`+`f705c60` Frost Coil: ice path grows/star reached/frozen tiles/dragon home voice. Tests 8/8.
- `547ea77` Gum Ball: things stick/size goals/too-big bumps voice. Tests 5/5.
- `0761ced`+`14c77e9` Hungry Frog: eating combos/evolving/predator warnings/boss fights voice. Tests 6/6.
- `473ad7a` Deep Sea: eating and growth combos/dashes/predator lunges/shark boss voice. Tests 6/6.
- `3d2bc39` Pin Puzzle: candies jarred/jar goal/lava losses voice. Tests 6/6.
- `8762cbe` Tomb Puzzle: ankh keys/plates and doors/braziers lit/pit falls voice. Tests 17/17.
- `bc89c4e`+`14c77e9` Sweet Tray: matches/combos/magic wand/blocked picks voice. Tests 11/11.

Girls section:
- `84cf694` Fashion Queen: rewards/purchases/mission-ready/runway stars voice (girl forms). Tests 16/16.
- `44caf3f` Girls World kit: all six toddler games (girls_world hub, little_princess_dress, little_salon, baby_and_pet, cupcake_shop, butterfly_garden) now speak the fairy's praise aloud via VoiceCoach in the shared kit say()/finish(), keeping the interactive melody and fairy. This follows the owner's 2026-11-27 spoken-encouragement instruction, superseding the 2026-11-22 melody-only note for these games. Tests 24/24.

Learn games (11 built learn_* games): verified they already speak through their own recorded-voice architecture (kit/voice.js + shell speak()/say()): questions, praise on correct answers, gentle correction, and a spoken finish card. No VoiceCoach wiring added — event clips would talk over the educational sentences.

Every section is now wired: Racing 10/10, Action 17/17, Runners 13/13, Build 12/12, Puzzle 9/9, Girls 7/7, Learn 11/11 (native). Remaining: clip generation batches 6b/6c (runners), 7 (build), 8 (puzzle), 9 (girls), then the shared three.js engine pass and per-game graphics/physics polish.

## 2026-11-27 — master plan: full audit synthesis (docs only)

- `docs/GAMES_MASTER_PLAN.md`: the upgrade program for all 62 in-scope games, synthesised from the day's three section audits (73 game cards) + the fleet performance audit. Contains: cross-fleet findings (441 MB built weight, template clones, stat-change levels, dead/unreachable content, place↔art mismatches, pressure-mechanic drift, wired-but-absent voice, unused Egyptian heritage art); a hard performance budget (game.js ≤200 KB post-conversion, folder ≤5 MB cap, ≤200 draw calls / ≤150k triangles ceilings, zero per-frame rebuilds — the Sunset rule — plus the real click-flow boot test); the shared-engine rollout schedule (Flutter loader first, then 32 packages / 44 folders, ≈26 MB saved); a per-game table for all 62 games (name AR+EN current→new, hero, Egyptian place anchor, in-repo art to reuse first, level-structure target with playtime, signature upgrade, batch); rollout batches A–F ordered by impact-per-effort (foundation → free wins → kind-rules sweep → clone separation → Egypt identity → longer worlds) with voice installation and the 830-image art batch as standing parallel pipelines; the Sunset-method production checklist (incl. playtest first→last level); and the owner's open decisions (learn_voice 237 MB, RC/DS style unification) marked as his alone.
- Learn games (11) appear only as a coordination appendix — externally owned by the owner + Claude Code; no work scheduled on them.
- Arabic executive summary delivered to the owner: ~/workspace/your_files/master_plan_summary_ar.txt.

## 2026-11-27 — Lead-Designer brief: housekeeping, sky_ace alignment, rollout plan

- Snapshot-push backlog finished: built-games chunks C4–C7 pushed (ea94f400, 2ffec98a, a7a67e95, 437fbec3); the durable sync record `rehlaty-moss.muse-github-snapshot-sync.json` was created and now holds all 10 confirmed snapshot entries (156 paths).
- **sky_ace alignment (owner decision)**: my earlier commit 184a839b had re-added sky_ace to the Racing fun section to silence a failing reachability test — the opposite of the owner's decision. Reverted in code (sky_ace is out of `kFunSections` again; it stays a registered web game) and fixed the test instead: `test/fun_sections_test.dart` now carries an explicit `intentionallyUnsectioned = {'sky_ace'}` exclusion with the owner's reason, plus a positive test that owner-removed games stay out of every section. flutter analyze: 278 issues (baseline-identical). Targeted section tests 15/15 pass; full suite re-run with this change (result appended below when it lands).
- `docs/GAMES_ROLLOUT_PLAN.md`: the 62 in-scope games ordered by the owner's priorities (broken → weakest feel → shared-engine conversion → polish), each with a one-line done criterion defined before work starts, plus the testing/fps protocol (real click-flow, robot playtest first→last level, frames at 844×390 / 1024×768 / 1366×1024, fps under 4× CPU throttling reported with the SwiftShader caveat).

## 2026-11-27 — Priority 1.1: course_race unlock cap (alien_sky + rhino_summit)

- The 6-round campaign was capped at round 3 in four places: game.js `_finish` (`unlocked` hard-capped at 3; round 3 treated as the final, so no Next button), sim.js `won` (round index 2), and `normalizeSave` (stars loop `i <= 3` silently dropped rounds 4–6 stars). All now derive from `ROUNDS.length`. Qualify curve eased to 4/3/2/2/2/1 so only the true final demands the win (was: win-only gates on rounds 3–6, against the gentle-losing rule). Stale "three rounds" comments fixed; a no-op setTimeout in the sim removed.
- Tests: npm test 6/6 (2 new regression tests: full-campaign unlock chain for both themes with a driving robot — 1st place in all 12 races; save round-trip keeps rounds 4–6 stars). Builds rebuilt for both games.
- Verified end to end in Chromium through the real shell: menu renders 6 cards; real click starts round 1 with zero page errors; qualifying round 3 moves unlocked 3→4 and offers Next; winning round 6 increments wins and shows the trophy card with no Next. Draw calls 130 (target ≤150), ~15–16k triangles. fps under 4× CPU throttling in headless SwiftShader measured 2.4–2.7 (software-GL artifact, not a device number — recorded honestly in the REVIEW docs).
- Reports: docs/REVIEW_alien_sky.md, docs/REVIEW_rhino_summit.md.
