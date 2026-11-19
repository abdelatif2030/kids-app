# Review: «غوّاصو اللؤلؤ» (Pearl Divers) against the owner's video (brief 19)

Video: `20261118-2121-04.6754116.mp4` (77 s, portrait phone, the game is called "Lagoon Lift" in the recording). Frames checked on contact sheets and full-size frames.

## What the original does
- Portrait, side cut-away of a lagoon: sky and palm island on top, **your red stall boat** (awning, string lights, a crane) on the left and the **rival's pink yacht** with the rival man on deck on the right; below the water line the **ledges are stacked downward** (sandy/pink rock strata between them). The camera scrolls down as new ledges open.
- HUD: a big cash pill with a white pearl icon, a sound button, and a bar "YOU ... $1.50M [rival face]" with a coin marker that fills as your wealth approaches the rival's fortune.
- Per ledge: a diver, a basket of pearls, a big clam with a pearl on the right, a **diving bell on a rope + ladder** on the left. A tap (ring + hand, "TAP TO DIVE!") sends the diver to the clam, he carries the pearl to the basket, the bell lifts the basket to the boat, the boat sells it ("+$30K", coins fly into the cash pill).
- Buttons (contextual, on the ledge): **HIRE $** (another diver works by himself), **up-arrow x3 $** (that ledge's pearls worth x3, price keeps growing), **NEW LEDGE $** (purple, opens the next ledge), plus a grey round up arrow marker. "x3" pops up when you upgrade.
- Ends with the rival saying "ALL MINE!", then "YOU WIN!" with three stars and the cash, and a LAGOON LIFT card. (The green "PLAY NOW" button at the bottom is an ad button, not a game feature.)

## Differences found in the old build
1. A shop panel with 11 buttons at the bottom instead of buttons on the ledges; global upgrades (extra diver, pearl value, faster bell) and "managers" that do not exist in the video.
2. All four ledges were drawn at once in fixed rows; no camera scroll, no NEW LEDGE flow, ledges 2 to 4 visible but locked in a menu.
3. Two progress bars (you and a growing rival) with numbers instead of the single bar to a fixed $1.50M fortune; the rival grew over time.
4. No "TAP TO DIVE" prompt; a tap boosted the first ledge without the diver waiting for you.
5. Very small numbers ($3 per pearl) instead of the video's K and M scale; no flying coins, no "+$" at the boat, no "x3" pop, no "ALL MINE!" bubble, no win card with three stars.
6. Plain shapes for boat, yacht, bell, basket and clam; no palm island, no ladder/rope, no rock strata.

## What was changed (game_src/pearl_divers/src)
- `sim.js` rewritten: ledges (Shallows, Reef, Cave, Deep) opened with NEW LEDGE; per ledge HIRE (an extra diver who works alone, up to 4, price grows x2.2) and UPGRADE x3 (pearl value x3 per level, up to 4, price x4 each); your own diver waits for a tap (a tap = faster dive for 2.5 s); basket -> diving bell -> boat sale; fixed rival fortune of $1,500,000 (win when your earnings reach it). Nothing is lost.
- `main.js` rewritten: portrait play column with camera that follows the deepest ledge; HUD with cash pill, YOU bar to $1.50M with a coin marker and rival face, menu button; buttons placed on each ledge (HIRE orange, x3 yellow, NEW LEDGE purple with lock/unlock icon, greyed when you cannot pay); "TAP TO DIVE!" with a pulsing hand; rival bubble "ALL MINE!" at the start; coins fly from the boat to the cash pill with "+$..." text; "x3" pop on upgrade; palm island, stall boat with awning and lights, pink yacht with the rival, rope + ladder + bell, basket, clam that opens, orange divers with pearls, rock strata and light rays; "YOU WIN!" card with three stars and the cash. Space/Enter also taps. Arabic and English strings kept; contract `window.PearlDivers.start(el, config, post) -> {dispose, pause}` kept.
- `test/sim.test.js` rewritten (5 tests, `npm test` passes): no income without a tap, tap-to-sale chain, hire/upgrade/new ledge rules, and a robot owner that taps and buys wins in about 190 s of game time (between 60 and 900 s).
- Built with `npm run build` (50 kB).

## Checked in a browser (Edge headless, 430x860 and 844x390)
Menu, start (hint + bubble), real mouse tap, divers working, two and four ledges with camera scroll, win card: no console errors. Fixed along the way: RTL turning "+$300" into "$300+" on the canvas, tap hint overlapping the buttons, blank band below the last ledge.

## Still different
- It is a 2D canvas cut-away drawn in code (the video's art is richer 3D-style with fish, coral and lighting). No pictures were added.
- No grey round up-arrow marker, no rival yacht animation at the end (the rival only speaks "ALL MINE!" at the start), no fish.
- Landscape screens use the same portrait column, so the sky/boat area is cramped at 844x390.
- Prices and pearl values are our own (the video only shows 10K hire, 16K x3, 12K new ledge, 250K x3, goal $1.50M), tuned so a robot wins in ~3 minutes.
- Sound is synthesized, not the video's; not listened to by a person.
