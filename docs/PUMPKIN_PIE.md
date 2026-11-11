# «مخبز اليقطين» — Pumpkin Pie Maker (cozy 3D bakery)

Owner request, 2026-11-11: a cozy 3D pumpkin pie farm — harvest pumpkins, carry them to the oven, bake pies, serve
the customers at the striped counter, collect the earnings, build a pumpkin chute, hire a helper and unlock more
fields. Fourth card of the «ألعاب للتسلية» page.

## Where it lives
| What | Where |
| --- | --- |
| Game source (three.js 0.170.0) | `game_src/pumpkin_pie/src/` (`data.js`, `sim.js`, `models.js`, `world.js`, `audio.js`, `main.js`) |
| Built game | `assets/games/pumpkin_pie/` (`index.html`, `boot.js`, `game.js`) |
| Flutter side | `kPumpkinPie` in `lib/games/web_games/web_game.dart` (shared screen, view and per-child store) |

```bash
cd game_src/pumpkin_pie && npm install && npm run build && npm test
```

## The game
* The chef is Nour or Adam in a chef's hat (first pick follows the child's profile; can be changed on the menu).
* Touch and drag to walk (keyboard: arrows / WASD). Walking over ripe pumpkins stacks them on the chef's back
  (5, then 9, then 15 with the basket upgrades); picked pumpkins grow back from a sprout.
* Standing at the oven's crate drops the pumpkins in; the oven bakes one pie every 2.4 s onto its table. Standing
  at the table picks the pies up (one kind at a time); standing at the counter puts them out.
* Animal customers (bear, fox, bunny, cat, raccoon, owl) queue on the street, take 1-3 pies and pay into the cash
  pile; standing on the yellow circle collects the coins.
* Ten expansions, paid a little at a time by standing on their circle (the next two are shown, each with its price):
  bigger basket, second patch, pumpkin chute (drop pumpkins near the field, they roll to the oven), second oven,
  Teddy the helper (carries pies to the counter), tables for guests (+1 tip), Bunny the farmer (picks pumpkins),
  big patch, giant basket, autumn lights. When everything is built: «شطووووورة يا شيفة!» / «شطوووووور يا شيف!»,
  and the bakery keeps running.
* A bouncing arrow and a hint show what to do next for ages 3-4 and until the first two expansions are built.
* No timer, nothing can be lost; coins are only for building the bakery.

## Art and sound
* All models built from shapes in code; pumpkins and pies are single meshes with vertex colours so many of them stay
  fast; falling autumn leaves are one instanced mesh.
* Sound made live with Web Audio: an autumn waltz on plucked strings with a music-box melody; pumpkin pops that rise
  with the stack, wooden thumps, the oven's ding, a slide whistle on the chute, plates, a cash-register "ka-ching",
  rising coin ticks, a fanfare for each expansion and a bigger one at the end. Mute button and the same phone sound
  safeguards as the other games («🔊 دوس هنا عشان الصوت»).

## Checked
* `npm test`: a robot chef builds all ten expansions (about 8.5 minutes of play); pumpkins regrow, ovens bake,
  customers pay; the basket limit; pads keep partial payments; the chef cannot walk through ovens or the counter;
  damaged saves load safely.
* Headless Chrome at 800x500 and 390x780: menu, picking, shop with customers, fully built bakery.

## Saved data
`shared_preferences` key `pumpkin_pie`: `{childId: {coins, unlocked, paid, served, pies, complete, muted, chef}}`,
this device only, erased with the child. Pumpkins and pies in the yard are not saved (a new visit starts with an
empty counter).

## Not verified yet
* Not played on a real phone or tablet; sound not listened to by Claude.
