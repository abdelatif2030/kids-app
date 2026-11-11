# «سباق القمة» — Summit Rush

Owner request (2026-11-11, recording 20:17, with a prompt): a 3D race on a snowy mountain slope lined with trees and
flags, the child against three rivals; reach the finish first before the timer runs out, keep 3 hearts, collect
crystals; switch lanes to dodge giant snowballs and boulders rolling down red warning paths; ice boost pads and
glowing orbs give speed; a hit knocks you down and costs a heart and some ground. "Same as the video".

## What the video shows, and how the game matches it

| In the video | In the game |
| --- | --- |
| Portrait phone, camera behind and above the runner, the slope climbing away ("RACE TO THE TOP") | Same camera (portrait first; landscape works too). The run goes **up** the mountain, as in the video; things roll down at you. |
| Logo "SUMMIT RUSH" with a snowy peak and a red flag, "DRAG TO RUN" pill with a hand | «سباق القمة» logo in the same icy style with a peak and flag, «اسحب عشان تجري» pill with a moving hand. The race starts on the first drag. |
| 3-2-1 countdown, green "GO!" | Same (Arabic digits in Arabic), with beeps and a horn. |
| Top: sound button, three red hearts, thin progress line with orange checkpoint ticks and the racers' dots, orange clock ring (60) | Same. |
| Bottom: four tall rounded racer cards (rank badge 1ST-4TH, portrait, score); red-jacket man (you), teal girl in white beanie, mustard-jacket bearded man, purple girl; a fallen racer's card goes dark | Same four racers drawn in code (portraits are rendered from the 3D models), badges «الأول / التاني / التالت / الرابع», your card outlined in orange with «أنت», a card goes grey while that racer is down. Cards reorder by place. In landscape the cards stand in a column at the side. |
| Trampled snow with long tracks and round footprints, pines with snow, yellow pennants, rocks, faint yellow lines across | Same, all from code (canvas textures, cones, pennants); far snowy mountains and falling snow. |
| Boulders, snowballs and logs (with snow on top) rolling down red ladder paths | Same; the red ladder shows the path ahead of each rolling thing; logs bounce with a wooden knock; a low rumble grows as one comes close. |
| Gold crystals in lines, "+10" | Same, with white star sparkles and a climbing chime. |
| Blue chevron ice pads | Same; speed burst, wider view, blue sparkles, whoosh. |
| Glowing orbs: "TAILWIND!" (white cloud puffs) and "SHIELD!" (bubble) | Same: tailwind = 4 s faster with cloud puffs; shield = a bubble that takes one hit ("الدرع حماك!"). |
| "NICE DODGE!", "OVERTAKE!" | «تفادي حلو!» (+5), «سبقته!» (+20). |
| "WIPEOUT": the runner falls on their back, a heart goes | «وقعة!»: falls on the back, loses a heart and 7 m, gets up after 1.3 s and blinks (safe) for a moment. |
| When the hearts run out the race ends and restarts | A kind card «خلصت القلوب — ولا يهمك! قوم وجرّب تاني». |

Added for the app (not in the short video): a summit arch with a checkered banner and a result card (medal by place,
score, crystals, next race / again / races), three races (Pine Slope, Ice Ridge, High Summit — longer, faster, more logs),
a "time's up" card, and **age 4 = easy mode** (15 s more, slower and fewer rolling things, hits cost no heart).

## Sound (all synthesised with Web Audio, no files)
Upbeat 128 bpm race tune (kick, claps, hats, rolling synth bass, plucks, a soaring lead, pad; softer on the start line),
cold wind that rises with speed, footsteps crunching in time with the run, the boulder rumble, log knocks, crystal
chimes, ice-pad whoosh, tailwind swirl, shield shimmer and pop, wipeout thud with an "oof", heart lost, 3-2-1 beeps and
GO horn, overtake and dodge swooshes, summit fanfare with a cheering crowd, a kind "try again" tune. iPhone keep-alive and
the «🔊 دوس هنا عشان الصوت» button like every web game.

## Files
- `game_src/summit_rush/src`: `sim.js` (rules), `models.js` (runners, rolling things, pick-ups, scenery, textures),
  `audio.js`, `ui.js` (HUD styles, logo), `i18n.js`, `main.js`, `ios_audio.js`. `npm run build` → `assets/games/summit_rush/game.js`.
- `npm test`: 9 tests (countdown, a careful robot reaches the summit in the top two on every race, wipeouts, shield,
  boosts, easy mode, the course layout, save cleaning).
- App: `kSummitRush` in `lib/games/web_games/web_game.dart` (store key `summit_rush`, erased with the child), the fourth
  card on the second fun page (`assets/games/fun_games_more.webp` is now two rows of two; the Summit Rush card is made in
  code from a picture of the game, in the style of the owner's cards).

## Not verified
Not played on a real phone or tablet; the sound was not listened to by a person (checked only that it runs).
