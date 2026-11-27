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

- chomp_maze: three.js neon-candy board rebuilt (view3d.js). Renders and plays, npm test 0 fail. Chomper and ghosts are too small at gameplay distance, board too wide. TODO: tighter camera following the chomper, bigger chomper, then BEFORE/AFTER clip. Not sent.
- chomp_maze: follow camera + bigger chomper, clip sent (b003c522). Next: card_battle, castaway_raft.
- card_battle: three.js rebuild pushed (3D hex arena, tower, UFO, robots/aliens). Clip NOT sent: units still small in landscape, tower looks off-center, floor bright. TODO: bigger units, centered tower, richer fights (more units on the bot), use existing bg_menu art in menu, bespoke music. Next: castaway_raft.
- card_battle: units scaled up 2x, tower visible; clip recorded (/tmp/out/card_battle_land.mp4) but held: arena is small in landscape and the BEFORE tower art is rich. Candidate to resend after a menu bg_menu pass and richer fights.
- castaway_raft: three.js rebuild pushed (ortho-tilted 3D sea, raft, castaway, items, shark, islands). Clip held: still top-down, hero only readable from above, HUD covers raft. TODO: lower camera pitch (EL 52 -> ~38), face the hero toward camera, verify island/shark/landing screens, richer sea (foam trails, rocks, birds). Next: creator_tycoon, fashion_queen, frost_coil.
- castaway_raft: EL 38deg, hero 1.0. Still marginal (hero face hidden by hat, raft small). Needs bigger raft/hero, visible face, island and shark screens checked before a clip.
- creator_tycoon: tried a procedural 3D office; the existing generated art (3D-rendered creator, CEO, bin, desks, office pictures) is clearly better, so the rebuild was reverted. Keep art-driven; only polish HUD/panels. Same rule for other art-driven DOM games: do not replace good generated renders with procedural 3D.

## frost_coil (three.js rebuild, WIP)
- Ortho tilted camera, snowy valley, 3D ice tubes, wooden board, ice dragon. Fog removed (it washed the board out). Dragon enlarged (reads well now). Clip NOT sent yet. TODO: richer sky/aurora, check travel/win screens, record BEFORE/AFTER.
- frost_coil clip (BEFORE/AFTER) HELD, not a clear leap: BEFORE has cabin, dusk mood and a cute dragon; AFTER is pale/washed, lost the cabin, no motion in idle. TODO: restore dusk sky + cabin + aurora in 3D, darker richer grade, animate idle dragon, fix blank HUD title bars (white strips on top of HUD).
- frost_coil v3: cooler dusk grade + cabin added; cabin roof shape off (use a proper gable), HUD title strips still blank white bars, sky/aurora never visible (ground covers view). Still held; low priority vs other games.

## gem_quarry (three.js rebuild, WIP)
- Custom affine projection matrix keeps main.js's iso P() so taps/fx/HUD unchanged. 3D workers (limbs, pickaxe), trucks, crates, crystals, depot, workshop.
- FIXED existing bug: menubg.js shows the poster when any element with class *-panel is visible; gq-panel (upgrade pads) matched and covered gameplay in landscape. Renamed to gq-pads.
- NOT sent: scene still small in landscape (portrait BBOX), mine cut off at bottom, flat colors. TODO: landscape-specific layout/scale up, richer terrain, shadows, pile/crate polish, replace emoji (hint/!), menu/level select/end screens polish, pad icons as SVG (emoji tofu in pad panel).
- gem_quarry: pad icons now inline SVG (no emoji). Still TODO: scene scale/terrain richness before sending clip.
- gem_quarry: palms + soft shadows added; still small scene in landscape, clip held.
- gem_quarry: diorama island over the game's own poster.webp as 3D backdrop. Clip recorded for sending.
- gem_quarry v2: oasis, grass+flowers, lamps, flag, birds, sparkles, bigger workers/trucks, drawn hand hint, no emoji in fx. BEFORE clip now uses old game.js with the gq-panel->gq-pads fix so real old gameplay shows.
- AUDIT TODO: menubg.js covers gameplay with poster whenever an element with class containing -panel/-tracks is visible. Check in-game panels in: carnival_race coastal_drive dune_titans fashion_queen golden_tail happy_farm moto_race ocean_defense pumpkin_pie rain_circuit rhythm samurai space_store splash_race zombie_rooftop (screenshot gameplay in landscape; rename in-game panel class if poster shows).
- gem_quarry menu: hero beside the card, blurred live 3D backdrop; level select bigger names. (frame-checked; hero size reduced to avoid card overlap, not re-recorded)
- castaway_raft v2: hat brim raised (face visible), front fill light, hero + raft bigger. HUD buttons still cover the lower raft; menu level buttons use emoji palm.
- castaway_raft: landscape HUD moved to the right column (raft uncovered); level-select emoji replaced with drawn SVG icons (not screenshot-verified).
