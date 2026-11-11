# «أم الثعلب ومغامرات العيور» — Fox Family Rescue

Owner request, 2026-11-11: a cute 3D lane-hopping game. Guide a fox mother one hop at a time across roads, rivers
and railway tracks by tapping, swiping or pressing four arrow buttons; lost cubs join a little parade that follows
her path; three short levels (summer meadow, autumn woods, winter hills); a top bar shows cubs found, the level and
berries; a "play again" card after the final den.

## Where it lives
| What | Where |
| --- | --- |
| Game source (three.js 0.170.0) | `game_src/fox_family/src/` (`sim.js`, `models.js`, `audio.js`, `main.js`) |
| Built game | `assets/games/fox_family/` (`npm run build`) |
| Tests | `game_src/fox_family/test/sim.test.js` (`npm test`; a robot brings every cub home on every level) |
| Flutter side | `kFoxFamily` in `lib/games/web_games/web_game.dart`, card `fun_fox_family` |

## The game
* A tilted top-down board of grass, road, river (logs), lily-pad and railway rows, with low-poly trees beside it;
  summer is green, autumn orange and red, winter snowy with ice floes and snowy pines. A tree-stump den at the end.
* Tap = hop forward, swipe = hop that way, four big arrow buttons (forward is green), keyboard arrows/WASD.
* Lost cubs wait on the board with a little glowing call. Touch one and it joins the parade and steps exactly where
  the mother stepped. Cars slow down and stop for cubs; the train waits while a cub is on the tracks.
* A car or the water gives a soft «خبطة!» / «طرطشة!» and sends her back to the last safe grass; the cubs come back
  with her. Nothing is lost; there are no lives or timers.
* Stars: reach the den, bring every cub home, no bumps. Age 3-4 = easier traffic.
* Progress per child in `fox_family` (unlocked level, stars, berries, mute), erased with the child.

## Sound
Web Audio, made live: a cheerful plucked countryside tune (banjo-like rolls, bass, soft snare), mellower in autumn,
sleigh bells in winter, birds in summer. Hops, lily-pad plops, berry pops, a cub's yip and chime, brakes squeaking,
honks, bumps, splashes, the crossing bell, the train horn and chugging, marching steps into the den, star chimes.
Shares the iPhone/iPad keep-alive (`src/ios_audio.js`).

## Not verified
Not played on a real phone or tablet; sound not listened to by a person.
