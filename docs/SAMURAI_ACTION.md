# «سيف الساموراي» — Samurai Action

Owner request, 2026-11-11: a samurai defends a cherry-blossom courtyard from waves of ninjas: drag to move, the
sword slashes by itself, swipe to dash with a glowing trail and a slow-motion finishing cut, dodge attacks, combos,
petals, and a giant oni with a spiked club and a huge final cut. Fifth card of the «ألعاب للتسلية» page (ages 4+).

## Where it lives
| What | Where |
| --- | --- |
| Game source (three.js 0.170.0) | `game_src/samurai/src/` (`sim.js`, `models.js`, `audio.js`, `i18n.js`, `ui.js`, `main.js`) |
| Built game | `assets/games/samurai/` (`index.html`, `boot.js`, `game.js`) |
| Flutter side | `kSamuraiAction` in `lib/games/web_games/web_game.dart` |

```bash
cd game_src/samurai && npm install && npm run build && npm test
```

## The game
* Play as Adam or Nour (first pick follows the child's profile). Drag anywhere to move; the sword swings by itself
  at a ninja in reach (a white crescent); a quick flick at the end of a drag, the ⚡ button or Space dashes: a fast
  glowing cut that hits everything on its path and dodges attacks.
* Ninjas come in through the torii gates. Before a swing a red marker bounces over a ninja and a red patch shows
  where it will hit; a cut interrupts the swing. Big ninjas take 3 cuts; star throwers keep their distance (a star
  can be cut out of the air).
* Three stages (morning, sunset, lantern night), each 4 waves then the giant red oni: club slam (red circle on the
  floor), sweep (red circle around him), charge (red lane). After each attack he is tired and takes more from a
  dash. The last ninja of the last wave and the oni end in slow motion with a white flash and a big cut across the
  screen; the oni topples and pops into a storm of petals.
* No blood: beaten ninjas turn into a puff of petals. Hearts: 5 (8 for age 4); losing them all only says «ولا يهمك!
  جرّب تاني». Stars: 1 for winning, +1 for losing at most 2 hearts, +1 for a combo of 8.

## Sound
Made live with Web Audio: taiko drums, a koto in the miyako-bushi scale (Karplus-Strong strings) and a breathy
bamboo flute; calm theme on the menu, battle rhythm, heavier rhythm with flute for the oni. Effects: swooshes, the
dash shing, petal poofs with chimes that climb with the combo, a clang for a cut star, a soft bonk when hurt, the
oni's growl, club slam boom, wave gongs, the finishing cut. Mute button and the phone sound safeguards.

## Checked
* `npm test` (10): a robot wins all 3 stages; a swing costs a heart and a dash dodges it; the auto-slash and combos;
  a dash cuts every ninja on its path; nobody leaves the courtyard; easy mode; standing still loses; damaged saves.
* Headless Chrome 800x500: menu, waves, dash trail, oni slam warning, finishing cut, win screen.

## Saved data
`shared_preferences` key `samurai`: `{childId: {unlocked, stars, best, muted, hero}}`, this device only, erased with
the child.

## Not verified yet
* Not played on a real phone or tablet; sound not listened to by Claude.
