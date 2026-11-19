# Review: Neon Card Battle (brief 23) against the original video

Video: 20261118-2129-29 (318x566 portrait, 72 s). Source `game_src/card_battle`, bundle `assets/games/card_battle/game.js`.

## What the original does
- Portrait, tilted 3D neon platform: pink alien half on top (UFO), cyan player half at the bottom (small robot base), dashed middle line.
- Top bar: robot avatar + vertical health bar, big timer in the middle, vertical health bar + alien avatar. A round pause button floats inside the arena corner (right).
- Bottom: "NEXT" small card at the left, energy as a round number + 10 pink segments, hand of four hexagon-cost cards (grey when not affordable).
- Holding a card shows an info panel (name, UNIT/BUILDING/SPELL, one-line description). Drag onto your half to deploy.
- "FIGHT!" banner at the start, floating damage numbers (-60, -150), pause menu: Resume, Restart, How to play, Quit to menu, Sound, Music.
- Units walk and fight alone; plasma wave, black hole, repair field, turret.

## Already matching (not touched)
Rules and structure: 2:30 match, energy x2 in the last minute, hand of 4 + next card, own-half drops, spells anywhere, units fight alone, alien AI (slime, bug, brute, spitter), Easy/Normal/Hard, UFO destroyed or more base health = win, up to 3 stars, damage numbers, hex arena with magenta/cyan halves.

## Differences found and fixed
1. HUD layout was two horizontal bars under a timer row: now avatars + vertical bars flank the timer like the video; the pause button floats at the arena corner.
2. No card info panel: added (name, UNIT / SPELL / BUILDING, one line, Arabic and English) while a card is pressed or dragged.
3. Start banner said "Go": now "FIGHT!" / «قتال!» in an italic outlined style.
4. Pause menu lacked Restart and a sound switch: added both (sound moved there from the top bar).

## Still different
- The arena is a 2D canvas drawn in perspective, not real 3D; the player base is larger than in the video.
- The video has separate Sound and Music toggles (there is only one sound switch here) and different card names (Jet Striker, Laser, Hammer, Mine, Shield...). The brief only names Plasma Wave, Black Hole, Repair Field and a turret, so the card set was kept.
- Avatars are emoji-style (robot/alien), not the video's portraits.

## Checks
`npm test` 12 pass (sim untouched). Played in headless Chrome at 390x780: menu, start, drag deploy, info panel, pause menu; no console errors. Not tested on a real phone.
