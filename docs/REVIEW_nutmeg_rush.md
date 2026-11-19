# Review: Nutmeg Rush (سكة الكورة) against the owner's original video (brief #25)

Video: Recordings\20261118-2133-36.1231974.mp4 (104 s, portrait). Checked frame by frame with contact sheets.

## What the original does
- Portrait 3D football, camera high behind the ball (about 55 degrees), pitch fills the screen, stands only along the top edge, floodlit night.
- You ARE the ball. A floating stick (circle + white knob) appears where you touch. **The ball only moves while you drag**; released = stops (frames without the stick show a still world).
- HUD: round pause button, pill "LV 1 WARM UP", **three ball icons (lives)**, coin counter, and a **red-to-orange progress bar with a white knob** that travels to a little goal icon.
- Gold coin lines on the grass (the first line leads the way, text "LEVEL 1" on the pitch), **yellow training dummies**, red defenders crouching with arms out and a **yellow disc between their legs**, text "THROUGH THE LEGS!" then "NUTMEG!".
- Slide tackle: a red flashing lane with chevrons shows first; "STOLEN!" costs one ball; with no balls: card "FULL TIME - They took every ball. Again?" with TRY AGAIN / MENU.
- Level 2 "ONE-TWO": light-blue teammate with a cyan ring, text "PASS TO YOUR MATE!", "DODGE!".
- At the box the camera swings behind the ball, a coloured red/green band shows over the goal, text "TAP TO SHOOT!" with a hand. A tap that the keeper reaches: "SAVED!" then a white card "The keeper stopped it. Play the level again!" with TRY AGAIN / MENU (**a save ends the level**).
- Menu: dark stadium, big "NUTMEG RUSH" logo, red ribbon "YOU ARE THE BALL", "LEVEL 1 - WARM UP", big red PLAY, three tiles LEVELS / BALLS / SETTINGS, coin pill. Balls shop: Classic, Ember (120), Frost (200), Gold (320).

## Differences found (before)
1. The ball rolled forward by itself all the time (stick only steered). Original: moves only while dragging.
2. No lives: a steal cost nothing, a save sent you back to play. Original: 3 balls, "FULL TIME"; a save ends the level.
3. No coins on the pitch, no yellow dummies, no progress bar, no coin counter; the HUD showed score and heat.
4. Camera was low and wide (stands filled the left side); pitch was 100 m long.
5. Menu was a blue card with a green PLAY and a QUIT button; a tips screen came before every level; result cards were the old blue style.
6. Level names, 7 balls with different names and prices; level 1 had a teammate.
7. Lane was a plain red rectangle (no chevrons); no yellow disc between defender legs; no "TAP TO SHOOT!", "PASS TO YOUR MATE!", "THROUGH THE LEGS!", "BLOCKED!" texts.

## Changed
- `src/sim.js`: ball moves only with the stick (analog speed, rolls to a stop); pitch 78 long (box at 58); `LIVES = 3` (steal takes one, none left = `lost` / reason `lives`); a save = `lost` / reason `saved` (level ends); coin lines, yellow dummies (ball bounces, `blocked` event), `progress`, `mateHint` event; coins collected are kept even when you fail; level 1 "Warm Up" (no mate), level 2 "One-Two" (1 mate); 4 balls (Classic 0, Ember 120, Frost 200, Gold 320).
- `src/main.js`: new HUD (pause, LV pill, three balls, coin pill, red progress bar with knob and goal icon, thin heat bar), higher and closer camera, new menu (logo, ribbon, red PLAY, three tiles, coin pill), no tips screen (level starts at once with "LEVEL N" on the pitch and "DRAG TO MOVE"), coins and dummies in 3D, chevron lanes, yellow disc between defender legs, green safe band over the goal, white result cards (SAVED! / FULL TIME / GOAL), texts in the original's colours.
- Tests: `test/sim.test.js` updated and extended (15 tests incl. no input = no movement, 3 lives, coins, dummies, progress, mate hint).

## Verified
- `npm test`: all pass. Headless Chrome (390x780): menu, level 1 play (coins, defenders, dummy), nutmeg, shoot, goal card, saved card, level 5 steal + dodge + one-two + goal. No page errors (WebGL "context lost" lines only appear in the software renderer when the page is closed/screenshotted heavily).

## Still different
- The original's character models, crowd and ball art are nicer (our figures are drawn from shapes in code).
- I could not tell what exactly triggers the original's red "BLOCKED" text; we show it when the ball hits a yellow dummy.
- The original goal band is a coloured strip with the moving marker; ours is a ring marker over a green band with a red keeper-reach zone, plus the SHOOT/WAIT button (tapping anywhere works).
- No full-time (timer) rule: the only end conditions are goal, save, or losing all three balls.
- Sound not listened to by a person; not tested on a real phone.
