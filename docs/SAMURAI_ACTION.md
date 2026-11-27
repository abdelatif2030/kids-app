# «حارس المعبد» — Guardian of the Temple

Owner request, 2026-11-11 (original game); Batch E reskin, 2026-11-27: a young temple guardian defends a
Pharaonic temple arena from waves of shadow raiders (tomb robbers): drag to move, the khopesh slashes by itself,
swipe to dash with a glowing trail and a slow-motion finishing cut, dodge attacks, combos, golden sand sparkles,
and a giant stone golem — a temple guardian statue that wakes up — with a stone pillar club and a huge final
cut. Fifth card of the «ألعاب للتسلية» page (ages 4+).

History: this game shipped as «سيف الساموراي / Samurai Action» (a samurai, ninjas, an oni, cherry blossoms).
Phase 2C Batch E reskinned the identity onto the same proven wave/boss sim — mechanics, waves, balance and the
robot tests are unchanged. The internal sim kind ids (`ninja` / `big` / `thrower`) and the `window.SamuraiAction`
API name (called by `boot.js` and the Flutter shell) deliberately kept their old names.

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
* Play as Adam or Nour (first pick follows the child's profile). Drag anywhere to move; the khopesh swings by
  itself at a raider in reach (a white crescent); a quick flick at the end of a drag, the ⚡ button or Space
  dashes: a fast glowing cut that hits everything on its path and dodges attacks.
* Raiders slip in through the pylon gates. Before a swing a red marker bounces over a raider and a red patch
  shows where it will hit; a cut interrupts the swing. Big raiders take 3 cuts; scarab throwers keep their
  distance (a thrown spinning scarab can be cut out of the air).
* Six stages — temple courtyard at morning, hypostyle hall at sunset, temple roof at dawn, courtyard at night,
  hypostyle hall by torchlight, temple roof at sunrise — each 4 waves then the giant stone golem: club slam
  (red circle on the floor), sweep (red circle around him), charge (red lane). After each attack he is tired
  and takes more from a dash. The last raider of the last wave and the golem end in slow motion with a white
  flash and a big cut across the screen; the golem topples and crumbles into a storm of sand sparkles.
* No blood: beaten raiders turn into a puff of golden sand sparkles. Hearts: 5 (8 for age 4); losing them all
  only says «ولا يهمك! جرّب تاني». Stars: 1 for winning, +1 for losing at most 2 hearts, +1 for a combo of 8.

## Backdrops and the old art
Stage backdrops are code-drawn: sandstone arena with a sun-disc floor, pylon gates, a colonnaded temple with
obelisks, palm trees and braziers, recoloured per stage mood. The shipped panoramas `art/pano1..pano5.webp`
(~5 MB) are explicitly Japanese scenes (torii gates, Mt Fuji, cherry blossom, a pagoda castle, a bamboo grove),
so they are **not** wired in — and they are **not deleted either**: they stay in the folder, unused, until the
owner decides (see `docs/REVIEW_samurai.md`). The same applies to the old painted cut-outs
(`hero/slash/dash/win/ninja_*/oni.webp`): they depict the previous identity, so the game no longer loads them
and always draws its models in code; the files stay on disk untouched.

## Sound
Made live with Web Audio: a soft duff frame drum, an oud in the Hijaz scale (Karplus-Strong strings) and a
breathy nay flute; calm theme on the menu, battle rhythm, heavier rhythm with flute for the golem. Effects:
swooshes, the dash shing, sand-sparkle poofs with chimes that climb with the combo, a clang for a cut scarab,
a soft bonk when hurt, the golem's stone rumble, club slam boom, wave gongs, the finishing cut. Mute button
and the phone sound safeguards.

## Checked
* `npm test` (13): a robot guardian wins all 6 stages; a swing costs a heart and a dash dodges it; the
  auto-slash and combos; a dash cuts every raider on its path; nobody leaves the arena; easy mode; standing
  still loses; damaged saves.
* Real click-flow (headless Chrome, `~/tools/recorder/phase2cE_samurai.mjs`): menu title and stage names
  asserted, stage 1 started by clicking the real stage node with audio unlocked, wave 1 played, frames at
  844×390, 1024×768 and 1366×1024, zero page errors.

## Saved data
`shared_preferences` key `samurai`: `{childId: {unlocked, stars, best, muted, hero}}`, this device only, erased with
the child.

## Not verified yet
* Not played on a real phone or tablet; sound not listened to by Claude.
