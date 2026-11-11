# «البقاء على الإيقاع» — Rhythm Survival

Owner request, 2026-11-11: a 3D rhythm survival game on a giant spinning record player: guide a plush animal around
the vinyl, jumping over low bars and ducking beneath high ones in time with the music; avoid opening gaps, sudden
changes of direction and the sweeping tonearm; bump rivals without losing your footing and stay on the record until
the track ends.

## Where it lives
| What | Where |
| --- | --- |
| Game source (three.js 0.170.0) | `game_src/rhythm/src/` (`sim.js`, `models.js`, `audio.js`, `main.js`) |
| Built game | `assets/games/rhythm/` |
| Flutter side | `kRhythmSurvival` in `lib/games/web_games/web_game.dart` |

## The game
* Seen from above like the owner's video: a retro diner (teal and cream tiles, red booths, a jukebox), a cream and
  red turntable, a black record with grooves and a red label. Twelve plush animals; the child is the bear with
  headphones from the owner's card.
* Drag to walk (a joystick waits in the corner), ⬆ to hop, ⬇ to duck (keys: arrows/A-D, Space/W/↑, Shift/S/↓).
  The record carries everybody round; feet push where you want; in the air you keep your speed.
* Candy-striped bars sweep round from the spindle on the song's beat: red and white low bars (hop), blue and white
  high bars (duck). A bar that hits you pushes you along and outwards (once; then you are safe for a second).
* Gaps in the vinyl flash yellow and white for two beats, then open (deep blue) for four; the record suddenly spins
  the other way (warning beeps, a scratch); the silver tonearm lifts, then swings across the outer part (hop it or
  move away). Animals bump each other; a bumped animal slides for a moment. Off the edge or into a gap = out.
* The «باقي» counter with everyone's faces, the song ring, the beat dots. Five tracks of a world tour (Jukebox Diner,
  Record Shop, Sunday Loft, Velvet Lounge, Music Box), each adding something. Ages 3-4 have three lives.
* Stars: survive, hit at most once, six or fewer animals left. Knocked off: «وقعت من الأسطوانة!» with the place and
  retry.

## Sound
Web Audio, made live in each track's own tempo (the bars follow its beat): walking bass, swung drums, piano stabs and
a breathy sax melody, soft vinyl crackle; a needle drop at the start, count-in clicks, hop/duck sounds, a whoosh as a
bar passes close, a bonk when hit, a boing for bumps, a falling whistle, a record scratch on direction changes, gap and
tonearm warnings, and a sax fanfare. iPhone/iPad keep-alive shared with the other games.

## Checked
* `npm test` (6): a robot survives every track most of the time; standing still is knocked off; low bar cleared by a
  hop and high bar by ducking (hit otherwise); the record carries you, flips, gaps and the edge drop you; bumps and
  extra lives; saves.
* Headless Chrome 390x780: menu, track 1, track 5 with bars, a gap and the tonearm.

## Saved data
`shared_preferences` key `rhythm`: `{childId: {unlocked, stars, muted}}`, this device only, erased with the child.

## Not verified yet
* Not played on a real phone or tablet; music not listened to by Claude.
