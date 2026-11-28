# Review: Nutmeg Rush (سكة الكورة) against the owner's original video (brief #25)

Video: Recordings\20261118-2133-36.1231974.mp4 (104 s, portrait). Checked frame by frame with contact sheets.

## What the original does
- Portrait 3D football, camera high behind the ball (about 55 degrees), pitch fills the screen, stands only along the top edge, floodlit night.
- You ARE the ball. A floating stick (circle + white knob) appears where you touch. **The ball only moves while you drag**; released = stops (frames without the stick show a still world).
- HUD: round pause button, pill "LV 1 WARM UP", **three ball icons (lives)**, coin counter, and a **red-to-orange progress bar with a white knob** that travels to a little goal icon.
- Gold coin lines on the grass (the first line leads the way, text "LEVEL 1" on the pitch), **yellow training dummies**, red defenders crouching with arms out and a **yellow disc between their legs**, text "THROUGH THE LEGS!" then "NUTMEG!".
- Slide tackle: a red flashing lane with chevrons shows first; "STOLEN!" costs one ball; with no balls: card "FULL TIME - They took every ball. Again?" with TRY AGAIN / MENU.
- Level 2 "ONE-TWO": light-blue teammate with a cyan ring, text "PASS TO YOUR MATE!", "DODGE!".
- At the box the camera swings behind the ball, a coloured red/green band shows over the goal, text "TAP TO SHOOT!" with a hand. A tap that the keeper reaches: "SAVED!" then a white card "The keeper stopped it. Play the level again!" with TRY AGAIN / MENU (**a save ends the level**).
- Menu: dark stadium, big "NUTMEG RUSH" logo, red ribbon "YOU ARE THE BALL", "LEVEL 1 - WARM UP", big red PLAY, three tiles LEVELS / BALLS / SETTINGS, coin pill. Balls shop: Classic, Ember (120), Frost (200), Gold (320).

## Differences found (before)
1. The ball rolled forward by itself all the time (stick only steered). Original: moves only while dragging.
2. No lives: a steal cost nothing, a save sent you back to play. Original: 3 balls, "FULL TIME"; a save ends the level.
3. No coins on the pitch, no yellow dummies, no progress bar, no coin counter; the HUD showed score and heat.
4. Camera was low and wide (stands filled the left side); pitch was 100 m long.
5. Menu was a blue card with a green PLAY and a QUIT button; a tips screen came before every level; result cards were the old blue style.
6. Level names, 7 balls with different names and prices; level 1 had a teammate.
7. Lane was a plain red rectangle (no chevrons); no yellow disc between defender legs; no "TAP TO SHOOT!", "PASS TO YOUR MATE!", "THROUGH THE LEGS!", "BLOCKED!" texts.

## Changed
- `src/sim.js`: ball moves only with the stick (analog speed, rolls to a stop); pitch 78 long (box at 58); `LIVES = 3` (steal takes one, none left = `lost` / reason `lives`); a save = `lost` / reason `saved` (level ends); coin lines, yellow dummies (ball bounces, `blocked` event), `progress`, `mateHint` event; coins collected are kept even when you fail; level 1 "Warm Up" (no mate), level 2 "One-Two" (1 mate); 4 balls (Classic 0, Ember 120, Frost 200, Gold 320).
- `src/main.js`: new HUD (pause, LV pill, three balls, coin pill, red progress bar with knob and goal icon, thin heat bar), higher and closer camera, new menu (logo, ribbon, red PLAY, three tiles, coin pill), no tips screen (level starts at once with "LEVEL N" on the pitch and "DRAG TO MOVE"), coins and dummies in 3D, chevron lanes, yellow disc between defender legs, green safe band over the goal, white result cards (SAVED! / FULL TIME / GOAL), texts in the original's colours.
- Tests: `test/sim.test.js` updated and extended (15 tests incl. no input = no movement, 3 lives, coins, dummies, progress, mate hint).

## Verified
- `npm test`: all pass. Headless Chrome (390x780): menu, level 1 play (coins, defenders, dummy), nutmeg, shoot, goal card, saved card, level 5 steal + dodge + one-two + goal. No page errors (WebGL "context lost" lines only appear in the software renderer when the page is closed/screenshotted heavily).

## Still different
- The original's character models, crowd and ball art are nicer (our figures are drawn from shapes in code).
- I could not tell what exactly triggers the original's red "BLOCKED" text; we show it when the ball hits a yellow dummy.
- The original goal band is a coloured strip with the moving marker; ours is a ring marker over a green band with a red keeper-reach zone, plus the SHOOT/WAIT button (tapping anywhere works).
- No full-time (timer) rule: the only end conditions are goal, save, or losing all three balls.
- Sound not listened to by a person; not tested on a real phone.

---

## Phase 2D — Egypt anchor + Batch C fix: «كورة الحارة / Hara Football» (2026-11-27)

**What was wrong:** (1) stars were still `1 + tricks + (time ≤ par)` — par
time graded the result, the exact thing Batch C item 2.11 said to remove;
(2) a generic "Nutmeg Rush" with seven levels named for nowhere.

**What changed:**
- **Par grading removed.** Stars = the goal + the trick goal + a clean run
  (no ball stolen). `par` stays in the data, unused; the clock counts up
  and never closes the game.
- Title → **«كورة الحارة / Hara Football»** (including the hard-coded
  English title-art text).
- Levels are now a venue ladder: Hara Pitch → Hara Challenge → School
  Pitch → Schools Cup → Local Club → Cup Semi-Final → Cairo International
  Stadium. ids/tuning unchanged.
- The shipped game has the child play the ball itself ("YOU ARE THE
  BALL") — the owner's design, kept; the plan's "Kooro #7" line did not
  match the shipped game.

**Scope note:** the 3-balls rule (steal costs a ball; zero = full time,
gentle retry) was kept — the master plan mandates only the par conversion
for this game. Logged as an owner question in AI_WORK_LOG_P2D.md.

**Tested:** `npm test` 18/18 (+2: venue anchor; star-rule test — slow
clean goal 2★ vs fast goal with a stolen ball 1★; one older name
assertion updated). Build green. Real click-flow verify PASS — menu shows
the new title and "Level 1 – Hara Pitch", Play reaches the pitch HUD,
3 sizes, 0 page errors.

**Not done (Batch F):** 12 levels across the 4 venues with named kid
teams (≈30 min) not built. Not tested on a real device.

---

## Phase 2E — Batch F: 12 levels, 4 venues, named kid teams (2026-11-27)

**What changed:**
- **LEVELS 7 → 12 = 4 venues × 3** (new `VENUES` export + a `venue` index and
  a `team: {ar, en}` on every level). The original 7 tunings are kept verbatim
  at slots 1, 2, 4, 6, 8, 10, 12 — the old Cairo Stadium final is now the
  **Cup Final** (level 12, vs «فريق الأحلام / Dream Team»); the 5 new levels
  (Hara Final, School Big Match, Club Trials, Club Cup Run, Cairo International
  Stadium) interpolate the same curves, so every difficulty field is monotonic
  across the ladder and the final keeps the old final's exact tuning.
- **Named kid teams shown in the UI:** the menu's current-level line now reads
  "LEVEL N – <name> • VS <team>", and every level-select card carries a
  "⚔ <team>" line (ar/en by language). Teams: Hara Kids, Hara Falcons,
  Hara Stars, School Champs, School Lions, School Knights, Club Talents,
  Local Stars, Club Wolves, Cup Stars, Stadium Champs, Dream Team.
- **Unlock-chain caps fixed (latent bug):** main.js capped PLAY at level 5
  (`unlocked - 1, 4`), unlocks at 5 (`Math.min(5, i + 2)`), the result card's
  Next button at level 4, and `normalizeSave` truncated `best` to 5 entries —
  with 12 levels the campaign could never have reached the final in-session.
  All now scale to `LEVELS.length`.
- **Migration-safe:** growing LEVELS is safe by construction (normalizeSave
  slices/pads stars to LEVELS.length and clamps unlocked to it) — pinned by a
  test: a 7-level save keeps its stars at the same indices, pads to 12, and
  its star-derived unlock never regresses.
- **Trick book: SKIPPED, deliberately.** The save persists only aggregate
  totals (`tricks`, `goals`) — there is no per-trick-type history to list, and
  inventing a new persistence system was out of scope. The result card already
  shows the per-match trick breakdown (nutmegs / one-twos / dodges). Logged as
  an owner question in the Batch F fragment.
- Kind rules untouched: stars still = goal + trick goal + clean run (the
  slow-clean-goal regression test still passes), the clock counts up and never
  closes the game, the 3-balls gentle retry stays as-is (open owner question).

**Beatability proof:** the test robot was upgraded to a reasonable child-like
policy (flee telegraphed lanes diagonally, one-two with clear mates, nutmeg an
isolated defender to build comet heat, sprint through tackles while the comet
burns, otherwise run the most open lane; shoot only when the target is safe).
Measured over 10 seeds per level it wins 3–10 of 10 on every level (Cup Final
4/10) — challenging but fair, and age ≤4 still gets easy mode. The suite's
robot test requires a goal on all 12 levels, and a campaign test plays
level-by-level through the real save bookkeeping until the Cup Final unlocks
and is beaten.

**Playtime estimate:** robot win-time sum 65 s (old 7) → 112 s (new 12) of
near-perfect play. Child estimate (intermittent dragging — the ball only moves
while you drag — coin detours, ~1.5 attempts/level at the measured win rates,
plus menus/celebrations): ≈13–15 min before → ≈25–30 min after, matching the
master plan's ≈30 min target. Estimate, not a measurement of a real child.

**Tested:** `npm test` 21/21 (was 18; +3: 4-venue/team structure, 7→12 save
migration, full campaign unlock chain; robot test extended to all 12 levels).
Build green — game.js 151.3 KB. Real click-flow verify
(phase2e_verify.mjs) PASS, 0 page errors, 3 sizes; screenshots show the pitch
HUD («م ١ ملعب الحارة», 3 balls, coins) behind the pause card, and the harness
DOM text confirms the menu line "المرحلة ١ - ملعب الحارة • ضد أولاد الحارة".

**Not tested:** the level-select grid was not screenshotted by the harness
(it goes menu → PLAY → pause); team lines there are code-reviewed and the
menu vs-line is harness-confirmed. Not played by a human child; not tested on
a real device.

---

## Owner decision executed — the 3-balls rule: running out of balls never ends the match (2026-11-27)

**What the code did before:** `Match._steal()` decremented `lives`; at zero it
set `reason = 'lives'`, switched the sim to mode `lost` and emitted `lost` —
main.js showed the "FULL TIME — They took every ball. Again?" card with
TRY AGAIN / MENU. A fail state, exactly what the owner was asked about; he
answered "do the right thing", and the house kind rules say no fail state on
a resource running out.

**What changed (ball-rule logic only):**
- `src/sim.js` — `_steal()`: when the last ball is taken, the sim now refills
  instead of losing: `lives` goes back to `LIVES` (3), a `refills` counter
  increments, and a new `refill` event fires. The match stays in mode `play`;
  mode `lost` is now reachable only from a keeper save (the owner's original
  design, untouched). The `LIVES` comment was updated to say so.
- `src/sim.js` — `result()`: the clean-run star now reads `stats.stolen === 0`
  instead of `lives >= LIVES`. With refills, lives alone can no longer tell a
  clean run from a refilled one; a goal after a refill earns no clean star.
- `src/main.js` — new `refill` event case: cyan banner «العيال جابوا كور
  تانية! كمّل لعب ⚽ / The kids fetched more balls! Play on! ⚽», a coin chime,
  a blue burst, and the existing VoiceCoach `pickup` cheer. The HUD ball icons
  (driven from `m.lives` every frame) fill back up on their own — the refill
  is visible, kindly, and play never stops. The old FULL TIME card path is
  now unreachable and was left in place (harmless dead branch).

**Voice note:** the refill moment reuses the existing `pickup` clips. A
dedicated line is logged as **add to instinct** in docs/AI_WORK_LOG.md
("Owner decisions executed") — no voice was generated.

**Tested:** `npm test` 21/21 (was 21 with the old pin; the "three balls"
test was rewritten as the regression test for the new rule: steals take
lives 3→2→1, the third steal refills to 3 with exactly one `refill` event,
no `lost`/`end` events ever, a second refill cycle works, and a goal after
a refill earns 1★ not 2★; the par/star test now simulates a stolen ball via
`stats.stolen`). Build green — game.js 151.7 KB. Real click-flow verify
(phase2d_verify.mjs, real menu clicks, audio unlocked): PASS, 0 page errors
at 844×390 / 1024×768 / 1366×1024; frame eyeballed — pitch HUD with the
three ball icons lit.

**Not tested:** the refill banner itself was not screenshotted live (it
needs three steals in the harness's short play window); it is covered by
the sim regression test + the main.js event case being a clone of the
existing `stolen` banner path. Not tested on a real device.

## Refill voice line wired (2026-11-27, add-to-instinct delivery)

The dedicated refill clips arrived from the owner's voice pipeline
(`voice/ar/refill_1.mp3` + `voice/en/refill_1.mp3`, Puck) and are now
wired exactly as the owner-decisions entry in AI_WORK_LOG prescribed:
`refill: 1` added to `NUTMEG_CLIPS`, the sim `refill` case in main.js
now calls `voice.say('refill')` instead of the `pickup` placeholder
cheer (banner, chime and burst unchanged), and the shared VoiceCoach
phrase bank gained the matching `refill` phrase in both languages (the
recorded line's exact text, which doubles as the TTS fallback if a clip
is ever missing).

- Tests: `npm test` 24/24 — new `test/voice.test.js` pins that
  `say('refill')` resolves to `voice/<lang>/refill_1.mp3` for ar and
  en (stubbed Audio), that both installed clips exist, and that the
  main.js manifest + case stay wired (and don't regress to `pickup`).
- Build green (game.js 152.3 KB). Click-flow verify
  (~/tools/recorder/voice_wire_verify.mjs): PASS, 0 page errors at
  844×390 / 1024×768 / 1366×1024.
- Not tested: a live in-play refill moment (needs 3 steals inside the
  harness window) — the event→clip mapping is pinned by the unit test
  instead. Not tested on a real device.
