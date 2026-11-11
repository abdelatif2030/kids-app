# «سباق الطائرات الجوي» — Airplane Racing

Owner request, 2026-11-11 (video + prompt): a 3D airplane race above tropical islands, blue lagoons and green
cliffs; two laps of an aerial course; finish ahead of three rival planes; fly through floating checkpoint rings,
bank around islands, pass beneath bridges, keep clear of the terrain; bursts of boost in open stretches; engine sound
that follows the speed.

## Where it lives
| What | Where |
| --- | --- |
| Game source (three.js 0.170.0) | `game_src/air_race/src/` (`sim.js`, `models.js`, `audio.js`, `main.js`) |
| Built game | `assets/games/air_race/` (`npm run build`) |
| Tests | `game_src/air_race/test/sim.test.js` (`npm test`; a robot pilot wins every course with no bumps, a child who never steers still finishes) |
| Flutter side | `kAirRace` in `lib/games/web_games/web_game.dart`, card `fun_airplane` |

## The game
* Like the owner's video: a chase camera behind the plane, a course list («01 جزر اللاجون — دورتين ★★★»), a big
  position number «٤/٤» with a lap chip at the top left, a timer pill, pause and a round course map at the top right,
  the speed in km/h at the bottom, a round BOOST button that fills as rings charge it, «اسحب عشان توجّه الطيارة»
  and «طير جوه الحلقات عشان تشحن التيربو», segmented rings with a glowing next ring, a dashed light guide, stone
  arches, rock pillars, a canyon with lights, clouds.
* Planes: the child's red racer with white stripes and a pilot in goggles (from the owner's card), and the video's
  three rivals: the white racer with red stripes, the blue jet and the yellow biplane.
* Three courses, two laps each: Lagoon Loop (tropical islands, lagoons, palm cliffs with waterfalls, wooden rope
  bridges), Glacier Pass (the video's snowy mountains, pines, stone arches, a tall pillar, a canyon), Coral Cliffs
  (sunset islands and red cliffs, more bridges).
* Drag to steer (or arrows/WASD); rings charge the boost (golden rings more); BOOST (or space) spends it. Touching a
  pillar, arch or bridge deck is a soft bump: the plane slows and wobbles and is pushed clear. No crashes, no lives.
  Ages 3-4: slower rivals and a stronger pull toward the rings.
* Stars: finish, top two, first place. Best times, stars and unlocked courses per child in `air_race`, erased with
  the child.

## Sound
Web Audio, made live: a sunny steel-drum island tune with bouncy bass, kick, snare and shakers (bell pads on the
glacier). The engine is continuous: propeller buzz whose pitch, blade chop and brightness follow the speed, wind that
rises with speed, an afterburner roar while boosting, a wider camera view during boost. Countdown beeps, ring chimes
that climb with each ring in a row, golden-ring sparkles, soft bumps, rival fly-bys, lap and finish fanfares.
Shares the iPhone/iPad keep-alive (`src/ios_audio.js`).

## Not verified
Not played on a real phone or tablet; sound not listened to by a person.
