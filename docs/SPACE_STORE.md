# «متجر الفضاء الذكي» — Space Store Manager

Owner request, 2026-11-11: a 3D shop management game: run a small grocery store on a space station, serving astronauts
and alien shoppers against planets and stars; collect floating shopping baskets, stack them on the entrance rack,
serve customers at the checkout, gather the star coins they leave; spend earnings on a second basket rack and robot
cashiers, then build the hyper checkout to complete the expansion.

## Where it lives
| What | Where |
| --- | --- |
| Game source (three.js 0.170.0) | `game_src/space_store/src/` (`sim.js`, `models.js`, `audio.js`, `main.js`) |
| Built game | `assets/games/space_store/` |
| Flutter side | `kSpaceStore` in `lib/games/web_games/web_game.dart` |

## The game
* Like the owner's video: a lavender station deck with teal rails, a big orange ringed planet below, stars; the
  basket dispenser on yellow/navy hazard stripes, the basket rack, glowing shelf pods with fruit, checkouts, star
  coins, purple shuttle pads with a landing shuttle, a yellow guide arrow and an objective banner («خد السلال
  الطايرة!», «حط السلال على الرف!», «قف عند الكاشير…», «لمّ العملات النجمة!», «ابني: …»).
* The child is the kid astronaut with a headset from the owner's card. Drag to walk. Walk over the dispenser to pick
  hover-baskets (6, or 10 with the upgrade), stand at the rack to stock it. Shoppers (astronauts and green, blue,
  purple and pink aliens) take a basket, fill it at the shelves and queue; standing at the till serves them (scanner
  beeps); they leave star coins on the pile.
* Seven expansions paid by standing on their circle: second rack, carry more, robot cashier, more shelves (and +1
  coin per shopper), second shuttle (more shoppers), second robot, and the hyper checkout (golden arch, very fast),
  which completes the space supermarket («شطوووووور! بقيت سوبرماركت فضاء كبير»). Nothing is ever lost.

## Sound
Web Audio, made live: a bright space-lounge tune (sparkly synth arpeggio, airy pads, bass, electro drums); basket
bloops that climb with the stack, rack clacks, shuttle whooshes, the scanner beep and a "ka-ching", star-coin
chimes, pad ticks, a robot bleep-bloop, unlock and completion fanfares. iPhone/iPad keep-alive shared.

## Checked
* `npm test` (5): a robot manager (grid path-finding round the counters) builds everything including the hyper
  checkout in under 7 minutes; baskets flow from the dispenser to the rack to the shoppers; the main till only works
  with the child there while robots work alone; coins pile up and are gathered; pads keep partial payments; saves.
* Headless Chrome 390x780: menu, picking baskets, the fully built store.

## Saved data
`shared_preferences` key `space_store`: `{childId: {coins, unlocked, paid, served, complete, muted}}`, this device
only, erased with the child.

## Not verified yet
* Not played on a real phone or tablet; sound not listened to by Claude.
