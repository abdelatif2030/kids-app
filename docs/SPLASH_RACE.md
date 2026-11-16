# «سباق السباحة العجيب» — Splash Race

Owner request, 2026-11-11: a 3D swimming game on a tropical obstacle course: race as a goggle-wearing otter, time
your strokes to build speed and overtake, dive under obstacles, leap over barriers, ride waves and take slide
shortcuts while managing your breath; avoid bumpers and sweeping pool noodles, qualify through each round and finish
first in the final.

## Where it lives
| What | Where |
| --- | --- |
| Game source (three.js 0.170.0) | `game_src/splash_race/src/` (`sim.js`, `models.js`, `audio.js`, `main.js`) |
| Built game | `assets/games/splash_race/` |
| Flutter side | `kSplashRace` in `lib/games/web_games/web_game.dart` |

## The game
* Like the owner's video: a bright tropical pool course between rainbow float ropes, palm islands, coloured start
  blocks, an inflatable finish arch. The child is the otter in blue goggles and a swim cap from the owner's card;
  rivals are penguins, beavers, seals, ducks and otters in coloured caps.
* Drag left/right to steer (joystick in the corner). STROKE (red) on the coach's whistle: perfect / good / off beat
  give big / small / tiny pushes («ممتاز!», «حلو», «مش على الإيقاع»); a yellow ring closes on the button on every
  beat. DIVE (blue, hold) swims under swinging pool noodles and uses breath (five bubbles; running out brings you
  up). A good stroke just before a floating wall leaps it. Bumpers bounce you, white waves push you, slides at the
  side of the course are shortcuts.
* Four rounds on an island map: Floatstacles, Noodle Spin, Wave Wall and the Final; 12 → 8, 10 → 6, 8 → 4 swimmers
  qualify, the final needs first. The top bar shows your place, everyone's faces along the course and how many have
  qualified. Ages 3-4 cruise a bit faster.

## Sound
Web Audio, made live: a tropical tune on steel drums over ukulele strums, bass, claps and a shaker in the round's
tempo; while racing the coach's whistle marks every beat; diving muffles the music. Splashes (brighter for perfect),
a rubbery bonk, the leap and its splash, a slide "wheee", waves, a breath warning, the start whistle, the crowd at
the finish. iPhone/iPad keep-alive shared with the other games.

## Checked
* `npm test` (6): a robot qualifies through every round and can win the final; off-beat strokes are weak and never
  stroking loses; diving under a noodle uses breath and a stroke leaps a wall (swimming into it stops you); slides,
  bumpers and breath; everyone stays between the ropes; saves.
* Headless Chrome 390x780: island map, start, racing with perfect strokes, diving.

## Saved data
`shared_preferences` key `splash_race`: `{childId: {unlocked, stars, muted}}`, this device only, erased with the child.

## Not verified yet
* Not played on a real phone or tablet; music not listened to by Claude.
