# Overhaul ledger (branch instinct-test)
Layer 1 (shared, game_src/_shared/polish.js): bloom, filmic tone map, colour grade, vignette, light motes, tap SFX, encouragement voice hook (assets/games/_voice, Puck/Leda). `?nopolish=1`, `?nocheer=1`, `?voice=leda`, `?look=warm|fresh|night|candy|epic` to compare.
Applied to (32): air_race ball_scoop barrel_knights carnival_race cloud_dash coastal_drive deep_sea dino_grow dune_titans fox_family golden_tail gum_ball gummy_squad hamster_warrior happy_farm highway_race hungry_frog ice_dragon moto_race nutmeg_rush ocean_defense pumpkin_pie rain_circuit rhythm samurai space_store splash_race summit_rush temple_army tomb_puzzle zombie_rooftop
Not yet: fizz_runner (other agent), course_race, lane_shooter (renderer in game.js), cozy_kit, 2D canvas games (~29).
Videos: moto_race (before/after) done; coastal_drive, deep_sea in progress.
Layer 2 (per-game deep pass, fx.js): cloud_dash DONE (video sent). ball_scoop: FX bursts + truck outline + dust trail pushed, effect subtle at gameplay framing (no video sent). Next: dino_grow, highway_race, hamster_warrior, ice_dragon.
dino_grow DONE (outlines, halo ring on hero, flowers+grass, closer camera) video sent
highway_race (assets/games/sunset_highway) DONE: race gantries, sun glow, bigger car, wind streaks, nitro flames, finish confetti; video sent

## QA / design pass (user directive 9:27): issues found -> fixed, per game
- fox_family: hero was a static painted sprite (no run, tail, ears) -> real 3D fox with leg gait, tail wag, head nod/tilt, body bob, hop lean; cubs too.
- splash_race: swimmers were animal blobs with no readable faces -> cartoon kids (skin, hair/cap, suit, eyes, smile, goggles); player stroke 2x faster plus splash wake; bloom was washing out the water -> bloom 0.12 / threshold 0.95.
- sky_ace: hero small and flat, bullets faint -> 1.5x hero with glow and trail, bigger enemies, glowing bullets (hitboxes untouched).
- All chase-cam games (rain_circuit, summit_rush, splash_race, deep_sea, air_race, dune_titans, carnival_race, gummy_squad): camera too far, hero small at gameplay distance -> tighter cameras.
- Recording rule: clips are now landscape 960x540, sequential BEFORE then AFTER.

## lane_shooter (squad_shooter / archer_bridge) pass 2
- Fixed: soldiers/enemies were boxes; now rigged 3D characters (faces, helmets, swinging legs, rifle/bow, backpack/quiver). Gates rebuilt as framed arches with number plane on the panel (no longer covers the lane). Houses with windows, trees, cones added. Camera pulled back slightly.
- Open: cages and crates still simple; archer_bridge not yet re-recorded or recoloured.

## Audio pass 1 (cozy_kit/audio.js, all games using it)
- Added hall reverb send on music and SFX buses, detuned twin-oscillator voices with a soft low-pass on saw/square, and a drum/bass groove (kick, snare, hats, sub) under every tune. All 30 games using cozy_kit rebuilt.
- Not verified by ear (no audio capture here); page-error check clean. Open: per-game bespoke SFX/music still to rework.

## course_race obstacles pass
- Fixed: plain slab gates/doors, bare sweeper bar and hammer replaced with striped, capped, spiked models; meteors lumpy with glow. Open: level menu title overlap and stray scrollbar, alien clip not re-recorded.
- course_race menu: tall button list with emoji tofu, banner overlap and stray scrollbar replaced by a 3x2 level-card grid with CSS stars and padlocks (no emoji), readable hint, hidden scrollbar. Verified by screenshot (rhino). Open: in-game HUD icon spans (th.icon, rocket/flag emoji) not yet replaced.

## Menu glyph pass (38 games)
- Found: menu logo emoji rendered as missing-glyph boxes (text-stroke logos); removed emoji from titles in 38 games. Emoji font re-registered after the game's own font so it is not shadowed. Open: menu buttons still use emoji icons (levels, settings, locks) in many games; should become CSS/SVG icons per game, same as course_race menu.
- Icons: lock, star and coin emoji are now swapped for CSS-drawn icons in every polished game (DOM observer in polish.js). Verified golden_tail menu. Open: canvas-drawn text and settings/other emoji icons.

## sky_capy (2D) pass 1 - NOT clip-worthy
- Larger plane/enemies/bullets/pickups, exhaust trail. Still flat 2D canvas: tiny plane, plain islands, weak HUD. Needs a 3D rewrite (three.js renderer over existing sim.js) to meet the bar. Same applies to the other ~28 canvas games.
- sky_capy: rebuilt as three.js (view3d.js): 3D plane, floating islands with houses/windmill, cloud banks, 3D enemies/boss/birds, instanced bubbles, 2D overlay for HUD/texts. Frame-checked; pilot face still small (TODO).
- hop_world: three.js rebuild (view3d.js): 3D fox hero with swinging limbs/tail, 3D bugs, bricks/? blocks with textures, pipes, castle, parallax scenery per world. rec.mjs now supports HOLD/JUMPK env for held-key demos.
- sky_jumper: three.js rebuild (view3d.js): 3D creature w/ propeller hat+jetpack, grass islands/crystal/crumble/spring platforms, horned monsters, height-deepening sky. Drawn heart/pause/up/flag icons added to polish.js (applied to all games' src/polish.js and rebuilt).
- sky_jumper: refined face/single creature pushed (2e5b297e). Not resent: still not a clear leap vs BEFORE hero art (bigger hero + better bot needed). TODO next pass: hero scale up, richer platforms, use existing background images. Next games: card_battle, castaway_raft, chomp_maze.
