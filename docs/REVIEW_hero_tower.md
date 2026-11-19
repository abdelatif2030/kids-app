# Review: «برج الأبطال» Hero Tower vs the owner's original video (brief #16)

Video: `20261118-1756-33.2358567.mp4` (322x624 portrait screen recording, 3.5 min of a "Spire Breaker"-style tower game). Checked by extracting frames with ffmpeg and playing the current build in headless Chrome (844x390, 390x780) with real mouse input.

## What the original does
- A tower cross-section, narrow, three to four floors on screen at once. The hero's floor is in the lower half, the cleared floor below it, two floors above it. The camera scrolls up when the hero climbs.
- Floors above: the next floors show their real foes with numbers; later floors are dark silhouettes (the unknown).
- Ladders ZIG-ZAG: each floor's ladder is on the opposite side from the one the hero climbed up. A hatch in the floor shows where he arrives. An orange up-arrow shows on the ladder when the floor is clear.
- The hero starts at the left of floor 1 with the castle gate and green grass underneath. He stands next to the foes, small number with a sword icon over his head.
- Tap a foe: the hero walks to it, slashes (blue crescent), absorbs its power ("+N" floats). He does NOT walk back home; he walks from foe to foe. Green number = weaker, red/pink = stronger. A stronger foe ends the try (card "Almost there! That foe was stronger than you", Power / Floors, Try again).
- Items: purple crystal "+N", gold coin "x2/x3" (the multiplier), sword, potion, key and chest.
- HUD: ONE purple pill (sword + power | "FLOOR n/N" + green progress bar), sound button; bottom pills "TAP A GREEN FOE" and the goal "REACH THE STONE TROLL"; a gold banner "DEFEAT WEAKER FOES / absorb their power" at the start; "BOSS!" for the big foe; "STAGE CLEAR!" after a boss; "VICTORY!" at the end; the dragon on the roof of the tower.

## Differences found in the previous build
1. Tower too wide and too tall for the screen: only ~1.5 floors visible, huge sprites; no sense of a tower.
2. Hero always walked back to the left home position after every tap; ladders always on the right.
3. No view of the next floors (no preview, no silhouettes), no ground base or gate.
4. The crystal was the multiplier; in the video the CRYSTAL ADDS and a gold COIN multiplies.
5. Foes were flipped to face away from the hero (weapon on the wrong side).
6. HUD was two separate pills; no persistent goal pill; no "defeat weaker foes" banner; no stage-clear / victory banner.
7. The win/lose cards overflowed a landscape phone (390 px high); the win card had a scrollbar.

## What was fixed (game_src/hero_tower, rebuilt to assets/games/hero_tower/game.js)
- New geometry: narrow tower (3:1 floor ratio), hero's floor in the lower half, floor below + two above visible, works in landscape and portrait.
- Zig-zag ladders with a hatch on the arrival floor, orange arrow when the floor is clear, stone base with the castle gate and grass under floor 1.
- Previews: the next floor shows its foes and numbers, the one after is a dark silhouette, further floors dark.
- Hero stays where he fought, faces the target, walks foe to foe, slash crescent effect; runs to the ladder on the side of that floor.
- Foes face the hero. Tap hit area at least 5.5 units so small foes stay easy to tap.
- Crystal = additive (+N, purple), new gold coin = multiplier (x2/x3). `sim.js` has a new item type `mult`; roof uses a coin; tests updated and extended (13 pass).
- One purple HUD pill, persistent goal pill (troll / sorcerer / dragon / "beat the boss"), start banner with sub line, STAGE CLEAR and VICTORY banners.
- Compact win/lose cards for landscape.

## Verified
- `npm test`: 13 pass. Played a whole chapter by the planned order in headless Chrome: reaches the win card, 3 stars, no console errors; wrong tap shows the "Almost there" card without overflow (English and Arabic); portrait 390x780 checked.

## Still different (not done)
- Characters are still drawn in code (not the video's pixel-art knight/orc/skeleton sprites); pictures could be added through the art loader later.
- The original restarts the whole run after a loss; ours retries the floor (kinder for children, intended).
- The original has bombs, a "level up" armor change for the hero (gold sword after the troll) and an endless "the spire rises higher" loop; ours has 3 fixed chapters and a "Chapter complete" screen with Replay (as the brief says).
- Not tested on a real phone; sound not heard by a person. `docs/HERO_TOWER.md` still says the crystal multiplies (outside the allowed files; update it to "gold coin multiplies, crystal adds").
