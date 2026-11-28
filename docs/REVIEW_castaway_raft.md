# REVIEW — castaway_raft («الناجي» / Castaway Raft)

Phase 1, item 1.5 of docs/GAMES_ROLLOUT_PLAN.md. Commit 00feecf6 on ai/moss-work.
(This game had no pre-existing REVIEW doc; this file starts with the Phase 1 review.)

## What was wrong

`_girl()` — the check that picks the result card's win line — was
`return t('win_f') !== t('win_m') && false;`: hard-wired to false. Girl players always
got the masculine win line, even though the config gender was already being passed to
`setGirl()` and to VoiceCoach. The Game class simply never stored it.

## What changed and why

- The constructor stores `this.girl = config.gender === 'girl'`.
- `_girl()` returns `this.girl && t('win_f') !== t('win_m')` — the feminine line for a
  girl player, and only where the language actually has a distinct feminine form
  (where win_f and win_m read the same, the choice is moot and nothing changes).

## What was actually tested

- `npm test`: **6/6 pass** (sim untouched by this fix).
- Browser differential, real shell entry (~/tools/recorder/phase1_verify.mjs):
  `_girl()` is true for a girl instance and false for a boy instance; a scaffolded
  `_result()` card (a real verdict object, rendered by the real shell) differs between
  the two runs in exactly one line — girl: «شطووووورة! 🏝️», boy: «شطووووور! 🏝️».
  Zero page errors.
- fps: **34.9 fps** rAF under CDP 4× CPU throttling, headless SwiftShader, 1024×768
  (phase1_fps.mjs) — a comparable lower bound from a software-GL environment, not a
  device measurement.

## What was NOT verified

- German/French feminine forms were not eyeballed (the guard falls back to win_m
  wherever the two forms are identical).
- The result card was produced from a scaffolded verdict, not a full played level;
  the card code path itself is the real one.
- No real-device or iOS WebView test exists in this environment.
- VoiceCoach is wired (with the girl flag, as before); owner clips for this game are
  not installed yet — they are on the "add to instinct" list.

---

## Phase 2D — Egypt anchor: «فلوكة النيل / Nile Felucca» (2026-11-27)

**What changed (names/strings only):** the title «طوف الناجي / Castaway
Raft» → **«فلوكة النيل / Nile Felucca»** — the castaway premise becomes
a felucca trip down the Nile. The "hungry shark" is now honestly a
**Nile crocodile** (tap it and it swims off; it may take a log — same
mechanics, same ids), the sea is the Nile in the tutorial line, and the
destination is a Nile island. The levels already carried place names
(level 1 is Palm Island); sim, building and saves untouched. Phase 1's
girl-line fix stands.

**Tested:** `npm test` 7/7 (+1 anchor test); build green; click-flow:
menu title via the harness; gameplay confirmed with a single-click
check on the level-1 node — building HUD with the hook tutorial,
0 page errors; menu frames at 3 sizes.

**Honest note:** the crocodile is a rename of the shark's strings; the
code-drawn swimmer model was not re-shaped. **Not done (Batch F):** the
multi-island Nile journey (named islands with a fact each) is not
built. Not tested on a real device.

---

## Phase 2G — 12 stops: the felucca sails on to Aswan (2026-11-27)

**What changed (append-only; stops 1–8 ids/order/gameplay data frozen, test-pinned):**
the Nile journey grows from 8 to **12 stops**. The four new stops are real
Egyptian Nile islands in Aswan, reached in sailing order, each with a distinct
feel built only from existing fields (len/spawn/crocodile/bottles/build list/
island plate/storm):
- **9 «جزيرة النباتات / Kitchener's Island»** — the green breather after the
  Treasure Atoll: palm plate, len 84, 3 bottles, full build list.
- **10 «جزيرة الفنتين / Elephantine Island»** — rock plate, len 88, spawn 1.5:
  the busiest salvage water so far.
- **11 «جزيرة سهيل / Sehel Island»** — coral plate with a **storm** (faster
  drift, like stop 6), len 92, 4 golden bottles.
- **12 «جزيرة فيلة / Philae Island»** — the finale: gold plate, len 96,
  spawn 1.6, 4 bottles. Difficulty rises gently (len 40→96 across the game);
  kind rules untouched — no timers, no lives, stars only for landing / all
  bottles / no logs lost, never speed.

**Stops logbook «دفتر المحطات»** (the game had no collection screen; a
captain's logbook fits the felucca identity): every stop gained a `fact`
{ar, en} — one true, simple sentence. New pure export `logbookEntries(save)`
derives entries from the save's stars (a stop opens once landed on), so **old
saves migrate for free**: a finished 8-stop save shows stops 1–8 open with
their facts and stars, 9–12 secret. Menu gains a 📖 logbook button; locked
cards are greyed silhouettes with «لسه سر…». No new image files — island
artwork reuses the shipped code-drawn plates (palm/rock/coral/gold) by stop.

**Playtime (honest, stated method):** median robot win time per stop over 6
seeds (30 Hz sim, the test robot), summed; child estimate = robot ×3 + 20 s
per stop for menus/hints/logbook — the same labelled model deep_sea used in
2F. Before: robot sum **366.1 s** → child model ≈ **21.0 min**. After: stops
9–12 medians 59.1/61.5/58.5/66.5 s, robot sum **611.6 s (+67%)** → child
model ≈ **34.6 min**. No padding: the robot hooks optimally, so a real child
will be slower; no larger factor is claimed without evidence.

**Tested:** `npm test` **11/11** (was 7, +4: freeze of stops 1–8 gameplay
fields, 12-stop structure + Aswan names + gentle len curve + facts both
languages + no timer/lives/par fields, old-save migration + logbook
lock pattern, scripted campaign robot sailing stop 1→12 asserting the unlock
chain 1→12 and a complete logbook; the existing all-levels robot test now
clears all 12, 3 stars each). One existing assertion updated: damaged-save
unlocked cap 8→12 (LEVELS.length grew; logic unchanged). `npm run build`
green — **game.js 123,169 bytes** (was 115,253; ≤200 KB kept).
`node phase2g_verify.mjs castaway_raft` → **PASS, 0 page errors** (real menu
clicks, audio unlocked; frames at 844×390, 1024×768, 1366×1024 eyeballed:
12 stop buttons in two rows + logbook button, clean). Seeded captures via
`phase2g_castaway_captures.mjs` (save with stops 1–8 landed, all unlocked):
menu, logbook (open cards with names/facts/stars, scrollable) and stop 12
gameplay («١٢ جزيرة فيلة» pill, full build row, salvage drifting) — eyeballed
clean, 0 page errors.

**NOT tested:** real phone/tablet or iOS WebView; sound not heard by a
person; stops 9–12 click-played only into the opening seconds in the browser
(full clears are the sim robot's, same as previous batches); English logbook
not screenshotted (Arabic was; same i18n path).
