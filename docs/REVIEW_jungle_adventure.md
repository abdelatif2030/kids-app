# Review: Jungle Adventure («مغامرة الأدغال») against brief #2

Video: the recording path in docs/ORIGINAL_BRIEFS.md does not exist on this machine, so the review used the prompt text only.

## What the brief asks for vs the game
Auto-runner (tap = jump, hold = higher), stomp beetles, dodge bats, pits, spikes, wall-jump shafts, 3 levels (Jungle Trail, Sunken Ruins, Sun Temple), coins, 3 jade relics per level, shield / magnet / boots / hourglass, clock, totem then sun altar, cel-shaded 2D with outlines, parallax backdrops, mossy stone blocks, warm sunset light, panel-less HUD, frosted dark glass victory screen, professional sound.
Played in headless Edge (menu, level 1 run with keyboard jumps, ruins shaft, temple altar win): every item above is present and looked right; no console errors.

## Differences found
1. Victory/pause panel was clipped top and bottom on short landscape screens (about 300 px high): the title and the last button were cut off. FIXED in src/ui.js: the overlay scrolls and centres safely, and in landscape the portrait is hidden and spacing/buttons are compacted so the whole card fits.
2. The card picture ("after the game works") is handled by the Flutter side (not in this folder).

## Still different / not verified
- The original video was not available, so exact art details (colours, enemy shapes, HUD placement) are from the prompt only.
- Sound was not listened to by a person; real touch on a phone not tested.

Tests: `npm test` passes (12). Rebuilt with `npm run build`.

## 2026-11-20: generated pictures
Added with the free AI Horde generator (tools/art_jobs/jungle_adventure.json, files in assets/games/jungle_adventure/art, 208 KB, WebP):
- sky_jungle, sky_ruins, sky_temple: painted sky/valley backdrops (misty teal valley, overgrown ruins, sunset pyramids). They replace the code-drawn sky (gradient, sun, rays, clouds) in src/backdrop.js; the code-drawn far/mid/near parallax layers still scroll in front. A soft dark band at the top keeps the HUD readable.
- beetle: cartoon beetle (cut out by a custom flood-fill script because the generator's background was a pink gradient, then mirrored to face left), drawn in place of the code beetle with a small waddle; squash, flip and hitbox unchanged.
- relic: smiling jade gem, drawn over the same green glow and bob as before.
All loaded optionally with cozy_kit/art.js (loadArt); a missing file falls back to the code drawing (setPics in src/art.js, Backdrop.setPics).
Not used: the bat (generator ignored the white background twice; code bat kept), hero and coins (animated limb cycle / spinning coin need frames), tiles, totem/altar.
Checked in headless Edge (CDP, own http server): menu, level 1 (jungle), level 2 (ruins), level 3 (temple) screenshots; beetle faces the hero and reads clearly; HUD, coins and hero remain visible; no console errors apart from 404 for missing optional files before they existed; rAF rate 60 with and without the pictures (headless vsync-capped, so only a rough check). `npm test` 12 pass; rebuilt.
Still off: the ruins backdrop has heavy stone pillars at both edges (busy behind the HUD); relic has small feet (cute rather than ancient); sound/real device not tested.
