# «سباق ملاهي الأبطال» — Glowfair Rally (3D carnival race)

Owner request, 2026-11-10: a 3D racing game where cute animals drive glowing bumper cars through a carnival at sunset,
in the «ألعاب للتسلية» page, working well on phones, tablets and the web, with professional-sounding sound.

## Where it lives
| What | Where |
| --- | --- |
| Game source (JavaScript, three.js 0.170.0) | `game_src/carnival_race/src/` |
| Built game (bundled with the app) | `assets/games/carnival_race/` (`index.html`, `boot.js`, `game.js`) |
| Flutter screen | `lib/games/carnival_race/` (`carnival_race_screen.dart`, `race_view_*.dart`, `carnival_race_store.dart`) |
| Entry | «ألعاب للتسلية» page (`FunGamesScreen` in `lib/games/games_choice.dart`), ages 3-6 |

Rebuild the game after changing its source:
```bash
cd game_src/carnival_race && npm install && npm run build && node --test test/race.test.js
```

## How it runs
* **Web:** the game's script is loaded from the app's own files and runs in a `<div>` inside the page
  (`race_view_web.dart`). The demo site's `script-src 'self'` already allows it; nothing else is loaded.
* **Android / iOS:** a built-in browser view (package `webview_flutter`, owner approved "all free packages",
  2026-11-10) shows only the bundled page. Every other address is refused (`NavigationDelegate`), so there is no
  internet and no link out. Messages come back on the `RehlatyRace` channel (`save`, `exit`).
* **Desktop builds** show a short note (phones, tablets and the web only).

## The game
* 3 tracks: رصيف الغروب (easy), طريق الفوانيس (tunnel, hammers), قمة النجوم (loop-the-loop, tunnels, swinging boats).
  2 laps, about 65-90 seconds a race. The next track opens with a top-3 finish (any finish in easy mode).
* Controls: hold to drive, drag left/right to steer (keyboard: arrows/WASD, space for the item). Drifting into a
  bend builds a mini-turbo (blue, orange, pink sparks); spinning in the air off a ramp gives a trick boost.
* Items from the gift boxes: rocket (boost), shield (blocks one hit), bumper blast (spins cars nearby).
* Rides on the track: spinning teacups, giant toy hammers, swinging boats. A hit only spins the car for a moment.
  Nobody crashes out, walls are soft, every car finishes.
* Age 3 = easy mode: the car drives itself and the child only steers (with gentle help).
* Garage (owner chose "full garage like the video"): Engine / Grip / Turbo, 5 levels each (40-120 tickets), and
  5 more animals to unlock (150-650 tickets). Tickets are only won by driving (collected on the track + a prize for
  every place). Nothing is bought with money; nothing earned is ever lost.
* Results: podium with the top three, 1-3 stars (3 for the winner, 2 for the podium, 1 for every finish), tickets
  won. These are the race's own stars, not Rehlaty learning stars (it is a fun game).

## Art and sound
* Every model is built from simple shapes in code (`models.js`, `world.js`): bumper cars, the six animals, Ferris
  wheels, tents, lamp posts, arches, tunnels, rides, fireworks. No downloaded models, no copied characters.
* All sound is synthesized live with Web Audio (`audio.js`): an original carnival tune (calliope organ, oom-pah
  bass and drums in the race, a music box in the menus), a motor that follows the speed, and effects for every
  event (countdown, go, tickets, items, boost, shield, blast, bump "boing", spin, jump, trick, laps, finish fanfare
  with a cheering crowd, fireworks). Gentle volumes behind a limiter; a mute button on the menu and in the race
  (remembered per child). Sound pauses with the race and when the app goes to the background.

## Speed
Measured in a browser on an Intel Iris Xe laptop, phone-sized window: 0.7-2.3 ms GPU time per frame, 100-160 draw
calls. Pixel ratio is capped at 1.5 (1.25 on low-memory devices) and drops by itself when frames get slow.
Physics runs in fixed 1/60 s steps, so a slow phone plays exactly like a fast one.

## Saved data
`shared_preferences` key `carnival_race`: `{childId: {tickets, upgrades, owned, selected, unlocked, best, muted}}`,
on this device only. Erased by `deleteOneChild` and `deleteChildData`. Damaged data loads as a fresh start.

## Not verified yet (owner, please check)
* **Not played on a real phone or tablet.** WebGL in the Android built-in browser view and on older phones is
  untested; the Android build was not run here.
* **The sound was checked for errors only, not listened to.** The owner should listen and say what to change.
* Touch steering was tested with simulated input, not with fingers.
