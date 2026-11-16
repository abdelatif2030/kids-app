# «دفاع القلعة البحرية» — Ocean Defense

Owner request, 2026-11-11: a colourful underwater defense game: a small fish guards a coral fortress against waves of
hostile fish and jellyfish advancing through a reef corridor; stop them before they reach the wall, defeat a giant
octopus boss; aim streams of glowing projectiles, gain experience, and at each level up choose a power: repair the
fortress, a spinning shell that bounces off walls, or a whirlpool that pulls enemies together and damages them.

## Where it lives
| What | Where |
| --- | --- |
| Game source (three.js 0.170.0) | `game_src/ocean_defense/src/` (`sim.js`, `models.js`, `audio.js`, `main.js`) |
| Built game | `assets/games/ocean_defense/` |
| Flutter side | `kOceanDefense` in `lib/games/web_games/web_game.dart` |

## The game
* The hero is a clownfish with a little gold crown (as on the owner's card) on the middle tower of the coral wall.
  Touch and drag anywhere to aim (arrow keys too); it shoots a stream of glowing bubbles by itself, with a gentle
  pull towards a fish just ahead so small hands still hit.
* Enemies: grumpy purple fish, fast yellow fish, zig-zagging pink jellyfish, big spiky pufferfish; at the wall they
  take away wall (the bar at the bottom). Beaten ones give pearls (experience) and shells (coins).
* Level up pauses the game and offers three powers (repair is always offered when the wall is hurt): repair (+35),
  spinning shell (bounces off the coral walls, more shells with each pick), whirlpool (pulls enemies together and
  hurts them, stronger and more often with each pick), more bubbles (an extra stream), faster.
* Five levels, three waves each; the third wave ends with the giant purple octopus: it sways, spits ink balls (they
  can be shot) and calls small fish. Stars from the wall left (70%+ 3, 35%+ 2).
* «دكان الشعاب» (reef shop): stronger bubbles, stronger wall, more pearls (5 steps each), paid with shells.
  Ages 3-4: slower enemies and a stronger wall. Losing only says «ولا يهمك! جرّب تاني».

## Sound
Web Audio, made live: a slowly breathing underwater pad, a bubbly music-box arpeggio, soft bass, a muffled kick and
brushes while defending, a darker progression for the octopus, rising bubbles. Effects: soft bloops for the stream,
pops and chimes, a thud on the wall, a sparkling level-up, power shimmer, repair tones, shell tinks, the whirlpool
swirl, the octopus's bubbly growl and ink, win and try-again tunes. iPhone/iPad keep-alive shared (`ios_audio.js`).

## Checked
* `npm test` (8): a human-like robot (aim wobble, slow looks) wins every level with the upgrades a child would have
  by then; with no shooting the fortress falls; the level-up choice pauses and offers repair when hurt; the shell
  bounces and hits; the whirlpool pulls together and hurts; wall damage by kind; aim and corridor limits; saves.
* Headless Chrome at 800x500 and 390x780: waves, power choice, shell, whirlpool, octopus.

## Saved data
`shared_preferences` key `ocean_defense`: `{childId: {unlocked, stars, coins, up, muted}}`, this device only, erased
with the child.

## Not verified yet
* Not played on a real phone or tablet; sound not listened to by Claude.
