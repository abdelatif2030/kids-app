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

---

## Phase 1 fix review — Moss, 2026-11-27 (commit 2f6d8b97)

**What was wrong.** (1) The career was never persisted: rank, cash, stars and shop upgrades lived only in the in-memory Studio; the save carried just best/wins/muted and was posted only on a win — closing the game reset the player to intern. (2) ART_NAMES requested `office_dark` and `office_bright`, which do not exist in the game's art folder (only `office_sunset.webp` of the three): ranks 0–3 always fell back to flat gradients and every session fired two doomed image loads.

**What changed and why.** `Studio.career()`/`applyCareer()` snapshot and restore exactly the durable state (cash, stars, rank, total, slop, masterpieces, streak, four upgrade levels); session-ephemeral state (needle, zone, order/event, timers) is deliberately not saved. `normalizeSave` validates the career (rank clamped to the six ranks, upgrades clamped to shop maxima, money floored at 0). The shell persists through one seam, `_persist()`: on every successful purchase, on promotion, on the win, and when returning to the menu; `start()` restores before the first frame. Offices: the two missing names removed from the request list; `_dressScene` uses the owner's existing office_sunset for every rank with a per-rank mood tint (deep blue → lighter → clear sunset), so ranks still feel like different offices. No owner art deleted or altered.

**Tested.** npm test 11/11 (2 new: snapshot round-trip; garbage-career clamping). Browser via the real shell entry with real mouse clicks (~/tools/recorder/phase1_verify.mjs): seeded career {rank 2, cash 432, gpu 2} restored through the Play click (cash 440 after ~3 s — the restored GPU upgrade auto-earns, so the restore is live); scene background = office_sunset with the rank-2 tint; zero requests for the two missing backgrounds; a real shop purchase (المتجر button → item click) posted a save whose career upgrade total rose 7 → 8; zero page errors. fps 57.5 rAF under CDP 4× CPU throttling, headless SwiftShader, 1024×768 (phase1_fps.mjs) — a software-GL lower bound, not a device measurement.

**Not verified.** A full intern→board career across two separate browser sessions (unit robot reaches the board in one session; cross-session restore verified at rank 2). No real-device/iOS WebView test exists here. VoiceCoach is wired but no owner clips are installed for this game yet (expected go_1.mp3 404 in the standalone page); clips arrive via the owner's generator.

---

## Phase 2D — Egypt anchor: «استوديو النيل / Nile Studio» (2026-11-27)

**What changed (names only):** the title «مبدع الذكاء / AI Creator» →
**«استوديو النيل / Nile Studio»** — the corporate ladder is now a kids'
media studio on the Nile: the last two ranks are Studio Manager and
**Studio Owner** (was VP / Board of Directors), and the win line reads
"You own the studio now… the top creator at Nile Studio". Rank ids,
goals, shop, unlocks and the Phase 1 saved-progress fix are untouched.

**Tested:** `npm test` 12/12 (+1 anchor test: ladder ids/goals
unchanged, new top rank). Build green. Click-flow: menu title via the
harness; gameplay confirmed with a single-click check — career HUD with
rank, goal stars and the generator/shop row, 0 page errors; menu frames
at 3 sizes.

**Not done (Batch F):** studio-room dressing (a Nile-view window, a
team wall) and a second ladder (music studio) are not built. Not tested
on a real device.
