# Games Rollout Plan — Phase ordering under the owner's Lead-Designer brief (2026-11-27)

Companion to `docs/GAMES_MASTER_PLAN.md` (identity, anchors, level targets per
game — §3 there is the per-game design reference). This document fixes the
**execution order** under the owner's governing brief of 2026-11-27 and gives
every one of the 62 in-scope games a **done criterion defined before work
starts**. Priorities: (1) broken first, (2) most-played / weakest feel,
(3) shared-engine conversion, (4) polish. Sunset Highway is complete and is
the method template (master plan §6 checklist applies to every game).

**Standing exclusions.** The 11 `learn_*` games are externally owned — never
touched. `sky_ace` stays **out of every fun section** by the owner's fixed
decision (he could not play it); it appears below only for engine/manifest
hygiene, never for surfacing. Owner-drawn/chosen art in `assets/` is never
changed or deleted; shipped-but-unused art is wired in, and any removal is
logged as a question in `docs/AI_WORK_LOG.md` instead.

## Testing & performance protocol (applies to every game, every phase)

1. `npm test` in the game's `game_src` package must pass; logic changes get
   new tests. `npm run build` afterwards; the built `game.js` is committed.
2. **Real click-flow test** — the game is started by clicking its actual menu
   buttons with audio unlocked by the gesture (headless Chromium harness,
   `~/tools/recorder/dbg_flow.mjs` pattern). Zero page errors required.
   Programmatic starts alone never count (the ALIVE freeze lesson).
3. **Robot playtest, first level to last** — every stage must unlock, be
   winnable, and be losable gently (no harsh game-over, no abrupt timer
   close). Save/`normalizeSave` migration checked.
4. **Frames at three landscape sizes** — 844×390, 1024×768, 1366×1024 —
   captured and eyeballed: nothing off-screen, no covered buttons, no cut
   text. Touch and keyboard both exercised; exit / return / replay exercised.
5. **Performance** — zero per-frame object/geometry rebuilds (grep + runtime
   counters where a harness exists); draw calls ≤ 200 ceiling / ≤ 150 target
   and triangles ≤ 150k for 3D games (`renderer.info`); fps measured in
   Chromium with CDP CPU throttling at 4× and recorded in the game's REVIEW
   doc. Headless rendering here is SwiftShader (software GL), so fps is
   reported as *throttled-headless fps* alongside draw calls/triangles and
   per-frame script time — the honest, comparable numbers; a real-device fps
   claim is never made from this environment.
6. **Per-game report** — `docs/REVIEW_<game>.md`: what was wrong, what
   changed and why, what was actually tested (fps, test counts, screenshot
   sizes), what was NOT verified. `docs/AI_WORK_LOG.md` updated per batch.
   Small commits, pushed frequently; text files only via the connector.

## Phase 1 — Broken first (code-level breakages)

| # | Game(s) | Done criterion |
|---|---|---|
| 1.1 | alien_sky + rhino_summit (course_race) | The unlock cap is gone: rounds 4–6 of BOTH games unlock, play, and can be won/lost in the robot playtest; npm test green incl. a regression test on the unlock rule |
| 1.2 | creator_tycoon | Career/rank persists across sessions (save round-trip test); no reference to the 2 nonexistent office backgrounds remains (code alternative or owner's existing art wired); npm test green |
| 1.3 | honey_farm | Progress persists across sessions (save round-trip test); npm test green |
| 1.4 | pearl_divers | "Best" records the FASTEST win, with a unit test proving slowest no longer wins the label; npm test green |
| 1.5 | castaway_raft | `_girl()` no longer dead-coded by `&& false`: girl players get the girl path/lines; unit test covers both genders |
| 1.6 | trick_or_treat | The gender ternary returns 'f' for girls: feminine win text reachable; unit test covers both branches |
| 1.7 | sky_jumper | Power-ups render from the game's own art hooks (no 🚀/🚁 emoji anywhere on screen — verified in captured frames at 3 sizes); npm test green |

## Phase 2 — Weakest feel: kind-rules sweep, clone separation, silent games, dead art

Ordered by how much a child feels it today. Each done criterion includes the
master-plan §6 checklist gates (tests, click-flow, playtest, REVIEW doc).

| # | Game(s) | Done criterion |
|---|---|---|
| 2.1 | summit_rush | 60 s fail-clock replaced by the lantern story goal; no run can end by timeout |
| 2.2 | card_battle | 150 s match clock removed; duels are untimed; campaign structure from master plan §3 |
| 2.3 | barrel_knights | 60 s matches → first-to-2 untimed outside cup finals |
| 2.4 | marble_dozer | Countdown and timeout-loss deleted; stars for completion only |
| 2.5 | frost_coil | Move limit and fail state deleted; the dragon waits |
| 2.6 | deep_sea | Per-level timers and lives deleted; a lunge costs growth, never progress |
| 2.7 | chomp_maze | Lives → sweet-count; a music track exists and plays; hero/poster art wired from existing assets (or gap logged) |
| 2.8 | hungry_frog | Hearts → splashes; progress is never lost on a catch |
| 2.9 | fizz_runner | One-hit death → stumble + hearts, matching its neighbours |
| 2.10 | splash_race | Elimination ladder → every finisher is stamped |
| 2.11 | pin_puzzle, sweet_tray, gum_ball, gem_quarry, nutmeg_rush, happy_farm, pumpkin_pie, space_store, fashion_queen | Par/combo/diameter/efficiency/bump grades and fixed ⭐⭐⭐ all converted: stars for completion only (sparkles/collections may remain as non-star rewards) |
| 2.12 | dune_titans, rain_circuit (+ moto_race untouched as heritage GP) | The byte-identical shared track era ends: dune_titans runs its own dune track (Oasis Rally); rain_circuit gets wet-grip physics + its own cast (Alexandria Storm GP); a diff of the three sims shows three different games |
| 2.13 | squad_shooter, archer_bridge | Music tracks exist for both; clone separation per master plan Batch D (Rescue Squad / Qasr El Nil) at least at identity+verb level in this phase |
| 2.14 | ice_dragon, hamster_warrior | Music tracks exist and play (both ship silent today) |
| 2.15 | rhythm, golden_tail | Their shipped-but-unused panoramas (7 + 6) are loaded by the games and visible in captured frames |
| 2.16 | coastal_drive, air_race, ball_scoop | Place↔art mismatches fixed: every level's label matches the panorama actually shown (frame-verified) |
| 2.17 | samurai | The ~5 MB of shipped-but-unreferenced panoramas are dealt with per the no-delete rule: wired in or logged as an owner question in AI_WORK_LOG (never silently deleted) |
| 2.18 | hop_world | The IP-adjacent hills tune is replaced with an original cozy_kit-style bed |

## Phase 3 — Shared-engine conversion (remaining three.js packages)

Mechanism and Flutter-side steps: `docs/SHARED_THREE_ROLLOUT.md`. Pilots done:
sunset_highway, deep_sea, gum_ball. Remaining: the 32 three-using packages
(44 built folders), incl. multi-output course_race and lane_shooter;
`learn_games` excluded (owner's area).

**Done criterion (per package):** build via `build_game.mjs`, `index.html`
loads `../three_shared.js` first, game.js ≤ 200 KB, `npm test` green,
Chromium boot-smoke of every built folder clean, fps/draw-call numbers in the
game's REVIEW doc. Plus: the 14 canvas packages that declare but never import
`three` lose the dead dependency.

## Phase 4 — Polish: Egypt identity + longer worlds (master plan Batches E/F)

Flagships first, then the long list. Per-game identity, anchor, reuse list and
level target are in master plan §3; the done criterion for every game in this
phase is: **its §3 row fully landed** (name pair, anchor, reused art wired,
level target reached and robot-verified, signature upgrade present) with the
§6 checklist green and a REVIEW doc on file.

Order: temple_army → samurai → tomb_puzzle → dino_grow → deep_sea (identity
pass; engine already converted) → zombie_rooftop → hero_tower → gummy_squad →
ocean_defense → barrel_knights → ice_dragon → ice_rink → cloud_dash →
fox_family → hop_world → happy_farm → pumpkin_pie → space_store →
honey_farm → pearl_divers → winter_camp → castaway_raft → creator_tycoon →
hot_spring → gem_quarry → marble_dozer → frost_coil → chomp_maze → gum_ball →
hungry_frog → pin_puzzle → sweet_tray → fashion_queen → girls_world (+ its 5
sister folders) → ball_scoop → summit_rush → splash_race → carnival_race →
coastal_drive → air_race → moto_race → sky_capy → jungle_adventure →
golden_tail → rhythm → viking_sling → mars_farm → rug_cleaning →
sunset_highway (Season 2, last — the benchmark gets its victory lap).

## Coverage check — all 62 in-scope games

Racing (10): moto_race 4 · dune_titans 2.12/4 · rain_circuit 2.12/4 ·
carnival_race 4 · sunset_highway done/4 · coastal_drive 2.16/4 · air_race
2.16/4 · sky_ace 3 (engine hygiene only — stays unsectioned) · splash_race
2.10/4 · summit_rush 2.1/4.
Action (16): samurai 2.17/4 · squad_shooter 2.13/4 · archer_bridge 2.13/4 ·
zombie_rooftop 4 · ice_dragon 2.14/4 · hero_tower 4 · hamster_warrior 2.14/4 ·
ocean_defense 4 · nutmeg_rush 2.11/4 · viking_sling 4 · card_battle 2.2/4 ·
dino_grow 4 · ice_rink 4 · barrel_knights 2.3/4 · gummy_squad 4 ·
temple_army 4.
Runners (13): jungle_adventure 4 · cloud_dash 4 · alien_sky 1.1/4 ·
rhino_summit 1.1/4 · fizz_runner 2.9/4 · ball_scoop 2.16/4 · sky_capy 4 ·
golden_tail 2.15/4 · rhythm 2.15/4 · fox_family 4 · hop_world 2.18/4 ·
trick_or_treat 1.6/4 · sky_jumper 1.7/4.
Build (12): happy_farm 2.11/4 · pumpkin_pie 2.11/4 · space_store 2.11/4 ·
honey_farm 1.3/4 · pearl_divers 1.4/4 · winter_camp 4 · castaway_raft 1.5/4 ·
creator_tycoon 1.2/4 · hot_spring 4 · mars_farm 4 · gem_quarry 2.11/4 ·
rug_cleaning 4.
Puzzle (9): marble_dozer 2.4/4 · frost_coil 2.5/4 · chomp_maze 2.7/4 ·
gum_ball 2.11/3/4 · hungry_frog 2.8/4 · deep_sea 2.6/4 · pin_puzzle 2.11/4 ·
tomb_puzzle 3/4 · sweet_tray 2.11/4.
Girls (2): fashion_queen 2.11/4 · girls_world 4.
