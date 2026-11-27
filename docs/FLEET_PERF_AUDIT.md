# Fleet performance audit — Rehlaty built games

Generated 2026-11-27 on branch `ai/moss-work`. Raw data: `fleet_perf_raw.json` (same folder).
All sizes are on-disk KB of `assets/games/<folder>/` as shipped in the app bundle.

## Headline numbers

- **85 built folders** under `assets/games/` (78 games + shared/support folders such as `art`, `clips`, `sections`, `learn_voice`).
- **Total weight of all game folders: 451,309 KB (~441 MB).**
- Audio is the fleet's biggest weight: **287,012 KB (~280 MB)**, of which `learn_voice` alone is **231 MB** (9,479 lesson mp3s: ar 119 MB, fr 65 MB, en 44 MB, de 3.5 MB).
- Images: **119,162 KB (~116 MB)**, of which the drawing app's `art` folder is 39 MB (1,067 webp).
- JavaScript (`game.js`): **36,328 KB (~35.5 MB)** across all folders.
- **47 built folders** come from the 35 source packages that actually import three.js; their `game.js` files total **32,737 KB**, and each one bundles its own private copy of three@0.170.0 (~600 KB of engine per game). This supersedes the earlier ~24 MB estimate — the measured figure is ~32 MB of three-game bundles.
- 14 source packages declare a `three` dependency in package.json but never import it (their games are 2D canvas): card_battle, chomp_maze, creator_tycoon, frost_coil, gem_quarry, hero_tower, honey_farm, ice_rink, marble_dozer, pearl_divers, pin_puzzle, rug_cleaning, sky_ace, sky_capy. Their bundles are already small (47–200 KB) and need no engine work.

## Top 15 heaviest built folders

| # | Folder | Total KB | game.js KB | Images KB | Audio KB | Source package | Engine |
|---|--------|---------:|-----------:|----------:|---------:|----------------|--------|
| 1 | learn_voice | 237,227 | 0 | 0 | 236,765 | learn_voice | canvas/2D or content |
| 2 | art | 39,445 | 0 | 39,443 | 0 | art | canvas/2D or content |
| 3 | coastal_drive | 8,099 | 868 | 3,316 | 1,569 | coastal_drive | three.js (bundled) |
| 4 | sunset_highway | 7,174 | 810 | 2,430 | 1,361 | highway_race | three.js (bundled) |
| 5 | carnival_race | 6,982 | 889 | 3,162 | 1,760 | carnival_race | three.js (bundled) |
| 6 | jungle_adventure | 6,229 | 153 | 4,591 | 1,480 | jungle_adventure | canvas/2D or content |
| 7 | dune_titans | 5,516 | 904 | 2,537 | 1,707 | dune_titans | three.js (bundled) |
| 8 | rain_circuit | 5,370 | 867 | 2,503 | 1,660 | rain_circuit | three.js (bundled) |
| 9 | moto_race | 5,328 | 829 | 2,685 | 1,806 | moto_race | three.js (bundled) |
| 10 | splash_race | 4,825 | 626 | 2,871 | 1,320 | splash_race | three.js (bundled) |
| 11 | air_race | 4,605 | 803 | 2,350 | 1,446 | air_race | three.js (bundled) |
| 12 | ocean_defense | 4,339 | 825 | 2,009 | 1,418 | ocean_defense | three.js (bundled) |
| 13 | samurai | 4,284 | 816 | 2,316 | 1,146 | samurai | three.js (bundled) |
| 14 | little_princess_dress | 4,179 | 112 | 4,063 | 0 | little_princess_dress | canvas/2D or content |
| 15 | summit_rush | 3,948 | 648 | 1,546 | 1,750 | summit_rush | three.js (bundled) |

## Optimization backlog (biggest wins first)

1. **Shared three.js engine (JS weight, ~25 MB saving).** Convert the 47 three-bundling built folders to load one shared `assets/games/three_shared.js` (685 KB) instead of a private engine copy each. Projected: three-game `game.js` total falls from ~32 MB to ~6–7 MB including the shared file. Validated plan: `shared_three_plan.md`. Pilot in progress (sunset_highway + 2 games).
2. **`learn_voice` audio (231 MB) — owner decision needed.** 9,479 recorded lesson clips dominate the entire app weight (more than half of all game content). Options: audit mp3 bitrates and re-encode speech at a lower mono bitrate (likely 30–50% saving with no audible loss for speech), and/or move non-Arabic languages to on-demand download. Do NOT change without owner sign-off — this is approved lesson content in 4 languages.
3. **`art` folder images (39 MB).** 1,067 webp for the drawing app. Audit dimensions vs. display size; recompress oversized pieces. Owner content — review before touching.
4. **Racing-game panoramas (images 2.0–3.3 MB per game).** coastal_drive, carnival_race, sunset_highway, moto_race, rain_circuit, dune_titans each carry 2.5–3.3 MB of background art. After the engine pass these become the heaviest per-game items; a panorama resolution/quality pass could save ~1–1.5 MB per racing game (~8 MB fleet-wide).
5. **Per-game audio (~1.0–1.8 MB per game).** Every game ships a 200 KB `music.mp3` plus ~1–1.6 MB of voice clips. A shared music/voice strategy is a design decision; at minimum, verify no game ships voice folders for languages it never plays.
6. **`learn_letters` bundle (1.7 MB game.js).** The largest single game.js — it bundles three plus heavy letter data. It converts with the learn_games batch in the rollout; verify its post-conversion size separately.
7. **Dead `three` dependencies.** Remove the unused `three` dependency from the 14 canvas packages listed above — no size change today, but it prevents accidental engine bundling later and makes audits truthful.

## Source package types (game_src/)

| Package | Type (by actual import) | package.json declares |
|---------|------------------------|----------------------|
| air_race | three.js 0.170.0 | three.js (0.170.0) |
| ball_scoop | three.js 0.170.0 | three.js (0.170.0) |
| barrel_knights | three.js 0.170.0 | three.js (0.170.0) |
| card_battle | canvas/2D | three.js (0.170.0) |
| carnival_race | three.js 0.170.0 | three.js (0.170.0) |
| castaway_raft | canvas/2D | canvas/2D |
| chomp_maze | canvas/2D | three.js (0.170.0) |
| cloud_dash | three.js 0.170.0 | three.js (0.170.0) |
| coastal_drive | three.js 0.170.0 | three.js (0.170.0) |
| course_race | three.js 0.170.0 | three.js (0.170.0) |
| cozy_kit | canvas/2D | no package.json (collection/other) |
| creator_tycoon | canvas/2D | three.js (0.170.0) |
| deep_sea | three.js 0.170.0 | three.js (0.170.0) |
| dino_grow | three.js 0.170.0 | three.js (0.170.0) |
| dune_titans | three.js 0.170.0 | three.js (0.170.0) |
| fashion_queen | canvas/2D | canvas/2D |
| fizz_runner | three.js 0.170.0 | three.js (0.170.0) |
| fox_family | three.js 0.170.0 | three.js (0.170.0) |
| frost_coil | canvas/2D | three.js (0.170.0) |
| gem_quarry | canvas/2D | three.js (0.170.0) |
| girls_games | canvas/2D | canvas/2D |
| golden_tail | three.js 0.170.0 | three.js (0.170.0) |
| gum_ball | three.js 0.170.0 | three.js (0.170.0) |
| gummy_squad | three.js 0.170.0 | three.js (0.170.0) |
| hamster_warrior | three.js 0.170.0 | three.js (0.170.0) |
| happy_farm | three.js 0.170.0 | three.js (0.170.0) |
| hero_tower | canvas/2D | three.js (0.170.0) |
| highway_race | three.js 0.170.0 | three.js (0.170.0) |
| honey_farm | canvas/2D | three.js (0.170.0) |
| hop_world | canvas/2D | canvas/2D |
| hot_spring | canvas/2D | canvas/2D |
| hungry_frog | three.js 0.170.0 | three.js (0.170.0) |
| ice_dragon | three.js 0.170.0 | three.js (0.170.0) |
| ice_rink | canvas/2D | three.js (0.170.0) |
| jungle_adventure | canvas/2D | canvas/2D |
| lane_shooter | three.js 0.170.0 | three.js (0.170.0) |
| learn_games | three.js 0.170.0 | three.js (0.170.0) |
| marble_dozer | canvas/2D | three.js (0.170.0) |
| mars_farm | canvas/2D | canvas/2D |
| moto_race | three.js 0.170.0 | three.js (0.170.0) |
| nutmeg_rush | three.js 0.170.0 | three.js (0.170.0) |
| ocean_defense | three.js 0.170.0 | three.js (0.170.0) |
| pearl_divers | canvas/2D | three.js (0.170.0) |
| pin_puzzle | canvas/2D | three.js (0.170.0) |
| pumpkin_pie | three.js 0.170.0 | three.js (0.170.0) |
| rain_circuit | three.js 0.170.0 | three.js (0.170.0) |
| rhythm | three.js 0.170.0 | three.js (0.170.0) |
| rug_cleaning | canvas/2D | three.js (0.170.0) |
| samurai | three.js 0.170.0 | three.js (0.170.0) |
| sky_ace | canvas/2D | three.js (0.170.0) |
| sky_capy | canvas/2D | three.js (0.170.0) |
| sky_jumper | canvas/2D | canvas/2D |
| space_store | three.js 0.170.0 | three.js (0.170.0) |
| splash_race | three.js 0.170.0 | three.js (0.170.0) |
| summit_rush | three.js 0.170.0 | three.js (0.170.0) |
| sweet_tray | canvas/2D | canvas/2D |
| temple_army | three.js 0.170.0 | three.js (0.170.0) |
| tomb_puzzle | three.js 0.170.0 | three.js (0.170.0) |
| trick_or_treat | canvas/2D | canvas/2D |
| viking_sling | canvas/2D | canvas/2D |
| winter_camp | canvas/2D | canvas/2D |
| zombie_rooftop | three.js 0.170.0 | three.js (0.170.0) |

Note: `girls_games`, `learn_games` are multi-game packages; `course_race` builds alien_sky + rhino_summit; `lane_shooter` builds squad_shooter + archer_bridge; `highway_race` builds sunset_highway.

## Every built folder (sorted by total size)

| Folder | Total KB | game.js KB | Images KB | Audio KB | Other JS KB | Own three copy | Source package |
|--------|---------:|-----------:|----------:|---------:|------------:|:--------------:|----------------|
| learn_voice | 237,227 | 0 | 0 | 236,765 | 103 | no | learn_voice |
| art | 39,445 | 0 | 39,443 | 0 | 0 | no | art |
| coastal_drive | 8,099 | 868 | 3,316 | 1,569 | 3 | yes | coastal_drive |
| sunset_highway | 7,174 | 810 | 2,430 | 1,361 | 3 | yes | highway_race |
| carnival_race | 6,982 | 889 | 3,162 | 1,760 | 3 | yes | carnival_race |
| jungle_adventure | 6,229 | 153 | 4,591 | 1,480 | 3 | no | jungle_adventure |
| dune_titans | 5,516 | 904 | 2,537 | 1,707 | 3 | yes | dune_titans |
| rain_circuit | 5,370 | 867 | 2,503 | 1,660 | 3 | yes | rain_circuit |
| moto_race | 5,328 | 829 | 2,685 | 1,806 | 3 | yes | moto_race |
| splash_race | 4,825 | 626 | 2,871 | 1,320 | 3 | yes | splash_race |
| air_race | 4,605 | 803 | 2,350 | 1,446 | 3 | yes | air_race |
| ocean_defense | 4,339 | 825 | 2,009 | 1,418 | 3 | yes | ocean_defense |
| samurai | 4,284 | 816 | 2,316 | 1,146 | 3 | yes | samurai |
| little_princess_dress | 4,179 | 112 | 4,063 | 0 | 3 | no | little_princess_dress |
| summit_rush | 3,948 | 648 | 1,546 | 1,750 | 3 | yes | summit_rush |
| rhythm | 3,715 | 599 | 1,975 | 1,135 | 3 | yes | rhythm |
| zombie_rooftop | 3,592 | 863 | 430 | 1,557 | 4 | yes | zombie_rooftop |
| clips | 3,451 | 0 | 3,449 | 0 | 0 | no | clips |
| alien_sky | 3,385 | 532 | 1,463 | 1,384 | 3 | yes | course_race |
| pumpkin_pie | 3,253 | 637 | 1,683 | 927 | 3 | yes | pumpkin_pie |
| hamster_warrior | 3,184 | 736 | 1,428 | 1,016 | 3 | yes | hamster_warrior |
| rhino_summit | 3,045 | 532 | 1,268 | 1,239 | 3 | yes | course_race |
| fizz_runner | 3,002 | 534 | 2,134 | 328 | 3 | yes | fizz_runner |
| little_salon | 2,992 | 113 | 2,876 | 0 | 3 | no | little_salon |
| baby_and_pet | 2,905 | 112 | 2,790 | 0 | 3 | no | baby_and_pet |
| golden_tail | 2,790 | 609 | 1,979 | 196 | 3 | yes | golden_tail |
| ball_scoop | 2,680 | 621 | 1,856 | 196 | 3 | yes | ball_scoop |
| cupcake_shop | 2,667 | 114 | 2,549 | 0 | 3 | no | cupcake_shop |
| butterfly_garden | 2,628 | 114 | 2,511 | 0 | 3 | no | butterfly_garden |
| learn_letters | 2,605 | 1,700 | 901 | 0 | 4 | yes | learn_games |
| temple_army | 2,364 | 629 | 228 | 1,502 | 3 | yes | temple_army |
| gummy_squad | 2,362 | 627 | 196 | 1,535 | 3 | yes | gummy_squad |
| cloud_dash | 2,202 | 784 | 175 | 1,239 | 3 | yes | cloud_dash |
| hero_tower | 2,196 | 135 | 771 | 1,286 | 3 | no | hero_tower |
| nutmeg_rush | 2,154 | 632 | 154 | 1,363 | 3 | yes | nutmeg_rush |
| ice_rink | 2,113 | 137 | 616 | 1,356 | 3 | no | ice_rink |
| happy_farm | 2,067 | 662 | 978 | 196 | 3 | yes | happy_farm |
| girls_world | 2,050 | 179 | 1,738 | 130 | 3 | no | girls_world |
| dino_grow | 2,030 | 648 | 167 | 1,211 | 3 | yes | dino_grow |
| barrel_knights | 1,974 | 631 | 171 | 1,168 | 3 | yes | barrel_knights |
| card_battle | 1,818 | 144 | 570 | 1,100 | 3 | no | card_battle |
| viking_sling | 1,792 | 115 | 590 | 1,083 | 3 | no | viking_sling |
| sky_ace | 1,746 | 127 | 159 | 1,456 | 3 | no | sky_ace |
| rug_cleaning | 1,654 | 125 | 639 | 886 | 3 | no | rug_cleaning |
| squad_shooter | 1,559 | 538 | 98 | 919 | 3 | yes | lane_shooter |
| archer_bridge | 1,546 | 538 | 88 | 916 | 3 | yes | lane_shooter |
| deep_sea | 1,462 | 807 | 454 | 196 | 3 | yes | deep_sea |
| space_store | 1,376 | 802 | 205 | 196 | 3 | yes | space_store |
| ice_dragon | 1,357 | 533 | 111 | 708 | 3 | yes | ice_dragon |
| pin_puzzle | 1,265 | 106 | 196 | 960 | 3 | no | pin_puzzle |
| fox_family | 1,201 | 785 | 216 | 196 | 3 | yes | fox_family |
| sky_jumper | 1,152 | 44 | 70 | 1,035 | 3 | no | sky_jumper |
| trick_or_treat | 1,082 | 150 | 731 | 196 | 3 | no | trick_or_treat |
| hungry_frog | 983 | 624 | 158 | 196 | 3 | yes | hungry_frog |
| gum_ball | 960 | 601 | 159 | 196 | 3 | yes | gum_ball |
| sections | 951 | 0 | 951 | 0 | 0 | no | sections |
| tomb_puzzle | 949 | 627 | 122 | 196 | 3 | yes | tomb_puzzle |
| pearl_divers | 801 | 58 | 531 | 208 | 3 | no | pearl_divers |
| fashion_queen | 755 | 195 | 360 | 196 | 3 | no | fashion_queen |
| learn_animals | 689 | 685 | 0 | 0 | 4 | yes | learn_games |
| learn_shapes | 669 | 665 | 0 | 0 | 4 | yes | learn_games |
| learn_day | 668 | 664 | 0 | 0 | 4 | yes | learn_games |
| learn_ladders | 586 | 582 | 0 | 0 | 4 | yes | learn_games |
| learn_ball | 585 | 581 | 0 | 0 | 4 | yes | learn_games |
| learn_sort | 585 | 581 | 0 | 0 | 4 | yes | learn_games |
| learn_counting | 581 | 577 | 0 | 0 | 4 | yes | learn_games |
| learn_maze | 576 | 572 | 0 | 0 | 4 | yes | learn_games |
| sweet_tray | 574 | 118 | 255 | 196 | 3 | no | sweet_tray |
| learn_treasure | 563 | 558 | 0 | 0 | 4 | yes | learn_games |
| learn_pattern | 562 | 558 | 0 | 0 | 4 | yes | learn_games |
| hot_spring | 559 | 128 | 231 | 196 | 3 | no | hot_spring |
| sky_capy | 546 | 138 | 149 | 255 | 3 | no | sky_capy |
| creator_tycoon | 513 | 62 | 447 | 0 | 3 | no | creator_tycoon |
| mars_farm | 511 | 143 | 167 | 196 | 3 | no | mars_farm |
| winter_camp | 509 | 109 | 199 | 196 | 3 | no | winter_camp |
| frost_coil | 496 | 112 | 184 | 196 | 3 | no | frost_coil |
| gem_quarry | 492 | 118 | 173 | 196 | 3 | no | gem_quarry |
| marble_dozer | 473 | 114 | 159 | 196 | 3 | no | marble_dozer |
| hop_world | 448 | 109 | 139 | 196 | 3 | no | hop_world |
| castaway_raft | 419 | 112 | 106 | 196 | 3 | no | castaway_raft |
| learn_lang | 122 | 0 | 122 | 0 | 0 | no | learn_lang |
| honey_farm | 116 | 48 | 64 | 0 | 3 | no | honey_farm |
| chomp_maze | 102 | 47 | 51 | 0 | 3 | no | chomp_maze |
| ar | 0 | 0 | 0 | 0 | 0 | no | ar |
| en | 0 | 0 | 0 | 0 | 0 | no | en |

'Own three copy' is a content heuristic (engine markers in the first 300 KB of game.js); the source-package column is authoritative for engine use.
