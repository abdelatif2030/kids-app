# «سباق الدراجات النارية» — Motorcycle Racing

Owner request, 2026-11-11: a 3D motorcycle race on a sunny coastal circuit with palm trees, mountains and spectator
stands: two laps, finish ahead of five rival riders; accelerate on the straights, brake before tight corners, lean
through sweeping turns, avoid collisions and stay on the track; ride in a slipstream to gain speed and use nitro to
overtake. First card of the eight-card «ألعاب التسلية» page.

## Where it lives
| What | Where |
| --- | --- |
| Game source (three.js 0.170.0) | `game_src/moto_race/src/` (`track.js`, `sim.js`, `models.js`, `audio.js`, `main.js`) |
| Built game | `assets/games/moto_race/` |
| Flutter side | `kMotoRace` in `lib/games/web_games/web_game.dart` |

## The game
* The child is the fox in a purple suit and star helmet (as on the owner's card), on a red bike (or blue, green,
  purple). Rivals: bear, bunny, raccoon, cat and panda, each on their own colour.
* Five red lights, then green. The bike accelerates by itself. Drag left/right (or hold the left/right side of the
  screen; arrows/A-D on a keyboard) to lean; ✋ brake (S/↓); ⚡ nitro (Space) when the blue ring is full enough.
* Grip limits how sharp a bike can turn at speed: too fast into a corner runs wide onto the grass (slow, dust) or
  into the soft barriers (sparks, speed lost, never a crash). Braking before corners is quicker than scraping walls
  (checked by a test).
* Slipstream: close behind a rider in the same line fills the slipstream (more top speed, nitro fills faster).
  Nitro is a short boost with blue flames, speed lines and a wider view.
* The rivals follow a racing line, brake by real braking distance and go round slower riders. Four rounds
  (Sunny Corniche, Palm Road = reversed, Bay Sunset, Grand Prix = reversed at sunset), rivals faster and more skilled
  each round; a medal (top 3) opens the next round. Stars: 1st 3, podium 2, finish 1.
* Ages 3-4: stronger steering help, an automatic brake before corners and slower rivals; a hands-off race still
  gets round (test).
* HUD: position, lap, time, the rider ahead/behind with gaps, a minimap, speedometer with gear. Podium at the end.

## Sound
Web Audio, made live: a synthesised twin engine (three oscillators at the firing frequency of the current gear's
rpm, soft distortion, a low-pass opening with the throttle, a pulse for the "brap", an intake rasp), a cut and click
on every upshift, revving on the grid, a nitro roar, the nearest rival's engine growing as it comes close, wind that
grows with speed, tyre squeal in hard corners, a driving rock beat (quieter while racing), start-light beeps, bumps,
barrier hits, grass, a crowd cheer at the stands each lap, overtake chimes and the podium tune. iPhone/iPad keep-alive
shared with the other games.

## Checked
* `npm test` (7): the circuit (closed, ~1.7 km, smooth, straight start, reversed version), a robot rider on the
  podium in every round with everyone racing, braking beats never braking, slipstream and nitro, barriers keep
  everybody on the circuit, lights then go and the easy mode, damaged saves.
* Headless Chrome 800x500: menu, grid with lights, racing in the pack, podium.

## Saved data
`shared_preferences` key `moto_race`: `{childId: {unlocked, stars, best, color, muted}}`, this device only, erased
with the child.

## Not verified yet
* Not ridden on a real phone or tablet; engine sound not listened to by Claude.
