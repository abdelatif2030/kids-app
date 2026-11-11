# «مزرعتي السعيدة» — Happy Farm (relaxing 3D harvester)

Owner request, 2026-11-11: a relaxing farming game — drive a little combine harvester through golden wheat, corn and
sunflower fields, crops cut row by row in a satisfying way, the harvest fills a trailer that is unloaded at the barn
(hay bales and flour), each level a new farm with bigger fields, rocks to avoid and animals to herd, coins buy a
bigger cutter and a faster tractor, at least eight levels, smooth juicy harvesting effects. Third card of the
«ألعاب للتسلية» page.

## Where it lives
| What | Where |
| --- | --- |
| Game source (three.js 0.170.0) | `game_src/happy_farm/src/` (`data.js`, `sim.js`, `models.js`, `world.js`, `audio.js`, `main.js`) |
| Built game | `assets/games/happy_farm/` (`index.html`, `boot.js`, `game.js`) |
| Flutter side | `kHappyFarm` in `lib/games/web_games/web_game.dart` (shared screen, view and per-child store) |

```bash
cd game_src/happy_farm && npm install && npm run build && npm test
```

## The game
* Touch anywhere and drag: a joystick appears and the combine drives that way (keyboard: arrows / WASD). The cutter
  in front cuts every crop it passes over; each crop squashes and tips over into stubble, chaff flies, and grain
  arcs from the spout into the trailer, whose heap grows. A label over the trailer shows the load («١٢٠/٤٠٠»).
* When the trailer is full it stops taking crop, a horn sounds and an arrow bounces over the grate by the barn.
  Driving onto the grate pours the grain out for coins; hay bales and sacks pile up by the barn.
* A farm is finished at 95% harvested with an empty trailer. Rocks only give a soft bump (a small rocky patch
  around each one never has to be cut). Animals step away from the tractor; guiding them through the open side of
  their pen brings them home.
* Stars: 1 for finishing, +1 for every animal home (or none on the farm), +1 for at most two rock bumps. There is
  no timer and nothing can be lost.
* 8 farms (Golden Valley ... Grand Farm): bigger and mixed fields, more rocks, sheep, cows and chickens.
* «مخزن العدة» (tool shed): cutter width, engine speed, trailer size, barn prices, 6 levels each, paid with coins
  from selling the harvest. No money; nothing is ever taken away.

## Art and sound
* Every model is built from shapes in code; crops are one instanced draw per kind and sway in the wind (a small
  shader bend), so large fields stay fast on phones.
* Sound made live with Web Audio: a gentle fingerpicked country tune (plucked guitar computed with the
  Karplus-Strong method), soft bass, shaker and birds; the tractor's putt-putt, crunchy cutting that follows how
  much is cut, the "full" horn, grain pouring, coin chimes, a rock thunk, baa / moo / cluck. Mute button, and the
  same phone sound safeguards as the other games («🔊 دوس هنا عشان الصوت»).

## Checked
* `npm test`: all 8 farms fit inside the fence and are finished by a robot farmer (78-151 s each with a few
  upgrades, 0-3 rock bumps); the trailer stops when full and the grate empties it for coins; rocks never let the
  tractor through; animals step away and can be penned; damaged saves load safely.
* Headless Chrome at phone and wide sizes: map, harvesting, tool shed, results.

## Saved data
`shared_preferences` key `happy_farm`: `{childId: {coins, unlocked, stars, up, store, muted}}`, this device only,
erased with the child.

## Not verified yet
* Not played on a real phone or tablet; sound not listened to by Claude.
