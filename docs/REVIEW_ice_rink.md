# Review: Ice Rink Brawl (brief 24) against the original video

Video: 20261118-2131-15 (338x584 portrait, 87 s). Source `game_src/ice_rink`, bundle `assets/games/ice_rink/game.js`.

## What the original does
- Bright daytime snowy winter-market scene around a wooden-rimmed rink (not night).
- Top HUD: pause (left), pill "LEVEL 1 - TURN 1 / Your move" or "Goblins move", goblin portrait with "x 2" remaining (right).
- Three arctic heroes at the bottom (penguin Tuck, husky Fenna, owl Olwen); goblins at the top with a pink ring, heroes with cyan ring; a health bar over every body.
- Slingshot: pull a hero back, dotted aim line, release; bounce off walls, crystals and teammates for chain hits. Then the goblins take their turn (a pink arrow shows where one will go).
- ONE shared special meter "Gala Spirit" above the hero cards; hero cards show portrait, name, HP bar and "120 / 120".
- Each hero has a passive shown in a tooltip: Shield Wall (takes 30% less damage), Ricochet (each wall bounce before a hit adds +40% damage), Mending Glow (heals every ally she touches).

## Already matching
Turn-based slingshot physics, wall/crystal/teammate bounces, goblin turn, win by knocking out all goblins, tougher levels, bosses, special attacks.

## Differences found and fixed
1. Night sky and dark scenery -> bright daytime snowy colours.
2. One special meter per hero -> one shared "Gala Spirit" bar above the cards (sim: `state.gala`; filled by damage dealt/taken, hero chains and each round; any hero can use it once full; tap the bar to arm/disarm).
3. No passives -> Shield Wall (penguin, damage x0.7), Ricochet (fox, +40% per wall/block bounce before the hit, max 4 bounces), Mending Glow (bear heals an ally it touches by 10). Tooltip shown when a hero card is tapped.
4. HUD: top pill now "LEVEL n - TURN t / Your move | Goblins move", goblin counter "x N" at the right, hero cards show "hp / max". Tests updated and 4 new tests added (15 pass).

## Still different
- Third hero is a polar bear, not an owl (art is drawn in code; no owl art), so Mending Glow sits on the bear. Goblins are green goblins, not dark hooded figures. Hero HP numbers differ from the video (80/64/120).
- Flat top-down canvas instead of the video's slightly tilted 3D rink; no market stall scenery.
- No pink telegraph arrow for the goblins' next move.
- Not tested on a real phone.

## Checks
`npm test` 15 pass. Played in headless Chrome at 390x780: start, tooltip, slingshot drag/release, goblin turn, shared meter; no console errors.
