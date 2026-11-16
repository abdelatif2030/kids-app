# «مغامرة الذيل الذهبي» — Golden Tail Chase

Owner request, 2026-11-11: a 3D chase in a treetop playground with rope bridges, slides and wooden platforms: play
as a plush dinosaur, chase the animal carrying a golden tail, grab it, then run and jump away from rivals trying to
steal it back; use shortcuts to escape and keep the tail until the countdown reaches zero. Sixth card (ages 3+).

## Where it lives
| What | Where |
| --- | --- |
| Game source (three.js 0.170.0) | `game_src/golden_tail/src/` (`data.js` map + walking graph, `sim.js`, `models.js`, `audio.js`, `main.js`) |
| Built game | `assets/games/golden_tail/` |
| Flutter side | `kGoldenTail` in `lib/games/web_games/web_game.dart` |

## The game
* The playground: seven round tree-house decks at different heights, rope bridges with rails, ramps to the forest
  floor, three slides (fast, one way down), four big red bouncy mushrooms that throw you onto a high deck, and one
  broken bridge only a jump can cross. Walking off a deck is a soft fall, never a loss.
* The dino (green plush, red bandana with a paw print, as on the owner's card): drag to run, JUMP to hop (onto the
  low deck, over the broken bridge), GRAB near the animal wearing the tail. Ages 3-4 grab just by touching, and the
  animals are slower.
* The rivals (راكون، دبدوب، ثعلوب، أرنوبة، قطقوطة) find their way with a walking graph. They chase the tail and also
  steal it from each other; whoever wears it runs to the place farthest from the dino. They cannot jump, so the
  broken bridge, the low deck and the mushrooms are the dino's shortcuts. A grab makes the loser dizzy for a moment
  and the new wearer safe for 1.6 s.
* 3-2-1 «استعد!», a round clock (red and ticking in the last 10 s), the wearer's name plate, an «أنا» arrow over
  the dino, a golden arrow over the wearer and an edge pointer with the distance when the tail is off screen.
* 6 levels: 40-60 s, 2-5 rivals, a little faster each time. Stars: win, wear it at least 40% of the round, lose it
  at most twice. Losing a round only says «قرّبت! جرّب تاني».

## Sound
Web Audio, made live: a bouncy marimba tune over plucked bass, bongos and a shaker, faster in the last ten seconds;
birds on the menu; wooden footsteps, jump and land, a spring "boing" on the mushrooms, a slide whistle, a snatch with
a sparkle on a grab, an "aww" when the tail is taken, countdown beeps, clock ticks, win and try-again tunes. The
iPhone/iPad keep-alive (`ios_audio.js`) is shared with the other games.

## Checked
* `npm test` (9): a robot dino wins rounds at every level; the animals take the tail from a dino that stands still;
  the walking graph is connected; ramps, falling off a deck, the broken bridge (falls without a jump, crosses with
  one), every mushroom lands on its deck, slides are fast, nobody leaves the playground, easy mode, damaged saves.
* Headless Chrome at 800x500 and 390x780: menu, countdown, chase, grab, results.

## Saved data
`shared_preferences` key `golden_tail`: `{childId: {unlocked, stars, muted}}`, this device only, erased with the
child.

## Not verified yet
* Not played on a real phone or tablet; sound not listened to by Claude.
