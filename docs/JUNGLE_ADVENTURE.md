# «مغامرة الأدغال» — Jungle Adventure (2D auto-runner)

Owner request, 2026-11-10: a jungle adventure auto-runner platformer where a young explorer girl runs by herself
through ancient ruins; tap to jump, hold to jump higher; stomp beetles, dodge bats, leap pits and spikes, wall-jump
up stone shafts; three short levels; coins, three hidden jade relics per level, power-ups; race the clock to the
totem and finally the sun altar. Bright cel-shaded 2D look with bold outlines, painted parallax jungle backdrops,
mossy grey-green temple stone, warm sunset light, a minimal panel-less HUD and a frosted dark glass victory screen.
Professional-sounding sound. It opens from the second card of the «ألعاب للتسلية» page (owner's picture).

## Where it lives
| What | Where |
| --- | --- |
| Game source (plain JavaScript, 2D canvas, no libraries) | `game_src/jungle_adventure/src/` |
| Built game (bundled with the app, ~65 KB) | `assets/games/jungle_adventure/` (`index.html`, `boot.js`, `game.js`) |
| Flutter side (shared with the race) | `lib/games/web_games/` (`web_game.dart` = the list of web games) |
| Fun page | `FunGamesScreen` in `lib/games/games_choice.dart`, picture `assets/games/fun_games_scene.webp` |

```bash
cd game_src/jungle_adventure && npm install && npm run build && npm test
```

## The game
* Levels: درب الأدغال (Jungle Trail), الأطلال الغارقة (Sunken Ruins, two wall-kick shafts), معبد الشمس (Sun Temple,
  ends at the sun altar). Built with a small builder in `levels.js`. The next level opens when a level is finished.
* Controls: tap anywhere to jump, keep holding for a higher jump (keyboard: space / up / W). In a shaft she slides
  down the wall; tap again to kick off it. On the ground she always runs on to the right.
* Coins, three jade relics per level (a toast and +10 coins for all three), power-ups: shield (12 s or one hit),
  coin magnet (9 s), speed boots (6 s), hourglass (+10 s). Checkpoint flags; a fall returns her to the last flag.
* The clock: 60-70 s per level; the seconds left are a coin bonus at the totem. Owner asked to "race the clock";
  for small children running out of time ends nothing (the bonus is just 0).
* Hearts: 3. Bats, spikes and walking into a beetle cost one (with a blink); stomping a beetle is fine. Losing all
  three shows a kind «قربتِ خالص!» card with "try again". **Easy mode** (age 3): nothing costs a heart.
* Results card (frosted dark glass): coins, relics x/3, level x/3, time bonus, reward counting up; next level /
  try again / menu. Coins are always kept, also after a lost try. Nothing is ever taken away.

## Heroes, shop and words (owner request, 2026-11-11)
* Two heroes, the app's own children drawn as explorers: **آدم** (curly brown hair, purple hoodie with a yellow star)
  and **نور** (long wavy hair, pink bow, pink top with a yellow star). The menu asks «مين هيلعب؟». The first time,
  the game starts as the child's gender when the parent gave one (`ChildProfile.gender`), otherwise Nour.
* «المحل»: coins collected in the levels buy clothes (`src/shop.js`): hats (helmet free, red cap, flower crown, gold
  crown), tops (the two star tops free, explorer blue/green, orange, super hero), shorts, shoes. Prices 20-150 coins.
  Bought items are shared by both heroes; each hero wears their own outfit. No money, nothing is ever taken away;
  a tampered save cannot wear what it did not buy.
* The words follow the hero: «دوس / دوسي», «انط / انطي», and the level-end title «شطوووووور!» / «شطووووورة!».
* Stomping: any landing from the air squashes a beetle (only running into it hurts), and each squashed beetle pops
  out a coin.

## Checked
* `npm test` (node): every level is finished by a simple robot player before the clock runs out; every relic is
  within a high jump of a floor or next to a wall; holding jumps clearly higher than tapping; easy mode never loses
  a heart; damaged saved data loads safely.
* In a browser at phone, tablet and wide sizes: menu, all three levels, wall-kick shaft, shield, victory card.
* All 23 sound effects and both music modes play without errors. **Not listened to** by Claude.

## Art and sound
* Everything is drawn in code (`art.js`, `backdrop.js`): the explorer girl (pith helmet, ponytail, backpack, red
  scarf), beetles, bats, coins, jade relics, power-up bubbles, flags, the totem and the sun altar, grass/dirt and
  mossy stone tiles (pre-drawn once per screen size), painted parallax layers per level.
* Sound (`audio.js`, Web Audio, no files): an original adventure tune — marimba melody, kalimba, flute on long notes,
  congas, bongos, shaker and a plucked bass — a little faster in each level; soft footsteps; coin chimes that climb
  in a run; effects for jump, wall-kick, land, stomp, hurt, fall, relic, all relics, every power-up, checkpoint,
  low-time ticks, win fanfare and a gentle "try again". Mute button, remembered per child.

## Saved data
`shared_preferences` key `jungle_adventure`: `{childId: {unlocked, coins, best: {level: {relics, coins, done}}, hero, owned, looks, muted}}`,
on this device only, erased by `deleteOneChild` and `deleteChildData`.

## Not verified yet
* Not played on a real phone or tablet; the Android build was not run (no Android SDK on this computer).
* Sound not listened to.
* Touch was tested with simulated input only.
