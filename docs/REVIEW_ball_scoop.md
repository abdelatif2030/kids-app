# Review: «شاحنة الكور» Ball Scoop vs the original video (brief #31)
Video: 366x590, 84 s (wheel loader on a plank bridge over a teal sea). Compared by ffmpeg frames and headless Chrome play (touch drag).

## What the original does
Higher chase camera on a wide wooden plank bridge with red/white rails over teal water and clouds; yellow wheel loader with a front shovel; piles of coloured balls that spill and stack in the shovel; glass gate frames (+10, +20 blue, x3 green) and walls; a white count bubble with a ball icon over the pile; HUD: orange pause, LEVEL pill, coin pill, truck-to-flag progress bar, GOAL pill (green tick when reached); hint banners; at the end a metal grate and a bank machine, "LEVEL n COMPLETE!" with 3 stars.

## Differences found
1. Level 1 world was a green meadow with trees; original is a bridge over teal sea with clouds.
2. Road colour was pale tan; original is warm orange planks.
3. Count bubble was red; original is white with dark text.
4. Camera is a little lower and flatter than the video; gates are narrower boxes rather than full-width frames.

## Fixed (game_src/ball_scoop)
Meadow theme is now sea blue sky/water, orange planks, red/white rails, white cloud puffs; white count bubble. `npm test` 8/8, build ok, no console errors; played with touch drag, balls scooped, gates multiplied.

## Still different
No ball icon inside the bubble; camera angle and gate frame width not changed; other themes (desert, snow, candy, space) are the game's own extras.

## Phase 2B (Batch B2) — panorama ↔ theme alignment
The backdrop ring was chosen by a 5-level rotation (`floor(level/5)+1`) while themes change
every 6 levels, so backdrops drifted out of their worlds (a candy funfair behind the sea
bridge, the Alexandria coast behind snow…). Now `panoOf(level)` in sim.js keys the painting
to the theme by what it actually depicts: meadow/sea → pano3 (Alexandria, Qaitbay Citadel),
desert → pano2 (Old Cairo bazaar), candy → pano1 (funfair), space → pano5 (rainbow sky
road), finale level 30 → pano6 (treasure vault). Snow has no truthful painting among the
six, so it keeps its code-drawn world with no ring rather than a wrong picture.
Tests: new regression test asserts pano constancy inside a theme, the five mappings, the
finale override and that all six files exist — `npm test` 9/9, build ok. Playtest
(phase2b_verify.mjs, real clicks): level 1 shows pano3 visible; snow level 13 has no ring;
finale shows pano6; zero page errors. Frames in ~/workspace/projects/audit/shots_phase2b/.

---

## Phase 2D — Egypt anchor: «جولة الكورنيش / Corniche Scoop Tour» (2026-11-27)

**What changed (names only):** the title «شاحنة عمورة / Amoora's Truck»
→ **«جولة الكورنيش / Corniche Scoop Tour»**, and the five theme names
now tell the truth about the panoramas Phase 2B matched to them:
meadow → **Qaitbey Coast** (its pano is the Alexandria/Qaitbey sea
bridge), desert → **Khan el-Khalili** (the Old Cairo bazaar pano),
snow → **Catherine Snow** (code-drawn, no pano), candy → **Moulid
Funfair**, space → **Rainbow Sky Road**. Theme keys, pano mapping,
levels, upgrades and saves are unchanged.

**Tested:** `npm test` 10/10 (+1 anchor test; one import fix in the
test file on the way). Build green. Click-flow: menu title via the
harness; gameplay confirmed with a single-click check — level-1 run
HUD with the 150-ball goal, 0 page errors; menu frames at 3 sizes.

**Not done (Batch F):** a named 30-stop tour card (each level a
Corniche stop from Qaitbey to Montazah) is not built. Not tested on a
real device.
