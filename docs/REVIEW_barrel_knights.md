# Review: Barrel Knights (brief #27, video 20261118-2139)

## What the video does
Portrait, high 3/4 camera that follows the barrel and the player. Plaque "MATCH 1 / Opening Day / FIRST TO 2", then READY? 3-2-1. 60 s clock, first to 2 goals. Stone castle end walls with a big archway as each gate. HUD: match badge, green shield + score + orange sun shield, clock under the score, round pause. A fixed joystick bottom-left (green gem) and a big orange DASH bottom-right that turns grey with a ring while recharging. Barrel is about three knights wide. Tip ribbon "Shove it through their gate!", green "GOAL!" ribbon with dust, quick reset to kickoff.

## Differences found (before)
Match was 120 s / first to 5 on a 52-unit pitch; floating joystick only (nothing visible); barrel only 1.4x a knight; camera far away (whole pitch in view); white-post gates, no castle wall; no plaque; no tip ribbon; plain HUD with colour dots; dash button without grey/ring cooldown look; goal banner was plain text.

## Fixed (game_src/barrel_knights, bundle rebuilt)
- Rules: MATCH_TIME 60, GOAL_LIMIT 2 (golden-goal overtime kept), pitch shortened to 40 units so goals happen in a minute, barrel radius 1.6, knights slightly smaller, stars by goals conceded.
- Plaque "MATCH n / cup name / FIRST TO 2" before kickoff (clock waits), READY? above the countdown, tip ribbon on the first kickoff.
- Camera closer in portrait (17 x 21 units) and landscape.
- Stone castle end walls, brick gate pillars and lintel, dark opening, end-stands removed.
- HUD: match badge, team shields, green score plate, grey clock pill, round pause; fixed visible joystick at bottom-left (touches on it use its centre, touches elsewhere still float); DASH button orange when ready, grey with a teal recharge ring when cooling; green GOAL ribbon.
- Tests updated (first to 2); `npm test`: 14 pass. Easy bot wins 9/12.

## Checked
Headless Chrome (SwiftShader) 390x780 and 844x390: plaque, kickoff, real touch on joystick (input x/z updated), forced goal shows ribbon and score 1-0, no console errors.

## Still different
Characters are chunky code-drawn knights, not the video's thin armoured figures; no dust cloud inside the gate; no camera pan toward the scoring gate; the pitch has crowd stands and torches the video lacks; hazards (trapdoors, mud, boulders) exist from round 3 on but were not in the video's match 1. Sound not heard by a person; no real device test.
