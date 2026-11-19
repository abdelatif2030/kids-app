# Review: «مبدع الذكاء» (Creator Tycoon) against the owner's video (brief 18)

Video: `20261118-2118-34.7699322.mp4` (81 s, portrait phone recording). Frames checked on contact sheets.

## What the original does
- Portrait phone screen. Top: a Windows-95 style **CAREER.EXE** window (level badge + rank, cash, **GOAL** row of stars with n/N, a client-order row).
- Middle: a 3D office with the young creator, a desk with a monitor and a **trash can**. Office changes with level (dark office with sticky notes, then a bright office with a city window, then a bigger desk with two and three screens). A woman boss (CEO) walks in on promotion and when a client leaves.
- Bottom: **GENERATOR.EXE** window with SHOP and INSTALL buttons, three buttons PHOTO / VIDEO / GAME (locked: "LEVEL 2", "LEVEL 3"), and a **QUALITY** bar (red, yellow, green, yellow, red) with a needle that **always swings**. There is no separate STOP button: the tap on PHOTO/VIDEO/GAME is judged where the needle is.
- A picture card pops out ("GENERATING..."), then says MASTERPIECE (+N STARS) or SLOP, and a slop card is thrown in the trash with "BAD TIMING". Also "OK" and "PERFECT!".
- The green zone **jumps** after a masterpiece.
- Star goals per level: 5, 10, 16, 22. VIDEO is +2 stars and unlocks at level 2, GAME is +3 stars and unlocks at level 3. Promotion window "PROMOTED!" with "NEW: ..." lines and SHOP / NEXT LEVEL buttons, then a big "LEVEL 2 JUNIOR CREATOR" banner.
- Client orders from level 2 ("CLIENT: 3 VIDEO", a timer bar, "ORDER DONE! +3 STARS", "CLIENT LEFT" when the bar runs out). HOT x2 streak from level 3. At level 4 a "GAME TREND: x2 stars for 8 s" event.
- In the original at level 4+ a slop can "go viral: -4 stars" and "make masterpieces to win the CEO back". This was NOT copied: nothing is ever lost for good in this app (kid-safe rule).

## Differences found in the old build
1. Needle only moved after tapping a button, then a separate STOP button: wrong (original: needle always swings, the button tap is the judgement).
2. Layout was a scrolling glass page; the original is one fixed portrait screen with two windows and a scene.
3. All three buttons open from the start; original locks VIDEO (level 2) and GAME (level 3).
4. Goals 8/20/45/90/160 instead of 5/10/16/22 per level; stars were not shown as a row.
5. No picture card, no GENERATING step, no trash animation, no BAD TIMING / PERFECT / OK pop-ups.
6. Green zone did not jump after a masterpiece.
7. Orders and events were random from the start; original: orders from level 2, hot streak from level 3, trend event from level 4. No order timer bar, no "client left".
8. No promotion window with unlock list, no LEVEL banner, no office change with level.

## What was changed (game_src/creator_tycoon/src)
- `sim.js` rewritten: always-swinging needle, `tap(kind)` judged at the needle (perfect / master / ok / slop), zone jumps after a masterpiece, goals 5/10/16/22/30, unlock levels, orders from level 2 with a 20 s bar, hot streak x2 from level 3 (3 masterpieces in a row), trend (x2 stars for one kind, 8 s) and server-lag from level 4, promotion pauses the game until "next level". Slop never costs stars or cash.
- `main.js` rewritten: CAREER.EXE and GENERATOR.EXE windows, star-row goal, order row with timer, scene that changes with level (five looks), desk with more screens, creator, trash can, boss pop-in on "client left", picture card with GENERATING then result and trash throw, pop-up words, promotion window with NEW lines, SHOP window, LEVEL banner, TREND banner, locked buttons with "LEVEL N", quality bar with red/yellow/green/yellow/red segments and "HOT x2". Keys 1/2/3 or space also tap. Arabic and English strings kept; contract `window.CreatorTycoon.start(el, config, post) -> {dispose, pause}` kept.
- `test/sim.test.js` rewritten (9 tests, `npm test` passes): needle swings, judging, zone jump, unlocks, promotion wait, no loss on slop, shop, orders/hot/trend, robot reaches the board in ~21 s of game time.
- Built with `npm run build` (53 kB).

## Checked in a browser (Edge headless, 430x860 and 844x390)
Menu, start, real mouse click on PHOTO, generating card, result card, promotion window, levels 1 to 6 with a bot, the win window, English at landscape: no console errors. Fixed along the way: class-name clashes with the shared kit CSS (`ct-card`, `ct-hint`, `ct-lv`), the win window opening together with a promotion window.

## Still different
- The 3D office, the 3D character and the CEO are emoji and gradients (no art). Picture jobs were not added (no image service called).
- No INSTALL button (its purpose in the video is not clear), no "slop goes viral -4 stars" (kept out on purpose), no coin shower or confetti.
- The shop is our own (GPU, wider zone, slower needle, richer clients; the video's shop was not shown).
- Sound is synthesized, not the video's; not listened to by a person.
