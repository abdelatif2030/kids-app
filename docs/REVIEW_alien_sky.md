# REVIEW — alien_sky («زومي في الفضا» / Zoomi in Space)

Date: 2026-11-27 · Branch: ai/moss-work · Source package: `game_src/course_race` (shared with rhino_summit; alien skin)
Fix class: Priority 1 — broken (dead content). Rollout plan item 1.1.

## What was wrong

Half the game was unreachable. ROUNDS defines 6 rounds and the menu renders
all 6 cards, but the progression chain was still written for the old 3-round
campaign and capped everything at round 3:

- `src/game.js` `_finish()`: `this.save.unlocked = Math.max(..., Math.min(3, this.round + 2))`
  — unlocked could never exceed 3, so rounds 4–6 stayed 🔒 forever.
- `src/game.js` `_finish()`: `const final = this.round === 2` — round 3 was
  treated as the final: no "Next round" button after it, trophy logic fired there.
- `src/sim.js`: `this.won = this.round === 2 && p.place === 1` — same cap in the sim.
- `src/sim.js` `normalizeSave()`: the stars loop ran `i <= 3`, silently
  dropping stars earned in rounds 4–6 on every save load.
- Rounds 3–6 all had `qualify: 1`, so even with the caps removed a child
  would have had to *win* three consecutive middle rounds to advance —
  a win-only wall for ages 4+, against the house rule that losing is gentle.
- Stale docs: headers said "Three rounds"; the Race opts comment said round (0..2).
- A stray no-op `setTimeout(() => {}, 0)` in the sim's bounce-pad case.

## What changed and why

- `_finish()`: `final = this.round === ROUNDS.length - 1`;
  unlock advance is now `Math.min(ROUNDS.length, this.round + 2)`.
- `sim.js`: `won = round === ROUNDS.length - 1 && place === 1` (the trophy
  belongs to the real final, round 6).
- `normalizeSave()`: stars loop runs to `ROUNDS.length` — rounds 4–6 stars
  survive a save round-trip.
- Qualify curve eased for the 6-round campaign: 4 / 3 / **2 / 2 / 2** / 1
  (rounds 1–2 unchanged; only the final demands the win). Designer decision
  within this fix, per the owner's kind-rules brief.
- Removed the no-op `setTimeout`; corrected the stale "three rounds" comments.
- The menu, backdrop pools (`round % 3`), and round names already covered 6
  rounds — no changes needed there.

## What was actually tested

- `npm test` (game_src/course_race): **6/6 pass**, including two new
  regression tests: (a) a robot campaign test that plays all 6 rounds of both
  themes through the real unlock rule — every round must be unlocked before
  it is played, the robot qualifies everywhere, `won` is true only at the
  final, and the campaign unlocks end to end; (b) stars for rounds 4–6
  survive `normalizeSave`, and a round-5 star implies round 6 unlocked.
  Robot places: 1st in all 12 races (alien rounds 18–31 s, rhino 20–42 s).
- `npm run build`: both bundles rebuilt (alien_sky/game.js 544,871 B —
  still a private three.js bundle; shared-engine conversion is rollout
  Phase 3, not this fix).
- **Real click-flow** (headless Chromium, harness `~/tools/recorder/course_flow.mjs`):
  menu shows 6 round cards (5 🔒 at a fresh save), a real mouse click on
  round 1 starts the race (mode=play, countdown) with **zero page errors**.
- **Unlock chain through the real shell `_finish`**: qualifying round 3 moved
  unlocked 3 → **4**, recorded stars {"3": 3}, and the finish card offered
  "Next round"; winning round 6 incremented `wins` 0 → **1**, showed the win
  title, and offered no Next button. (The in-page driver teleports the runner
  across the line in 1st place and skips the 3 s countdown — scaffolding
  around, not instead of, the real finish code; the sim-level campaign test
  above covers honest driving.)
- **Frames captured and eyeballed** at 844×390, 1024×768, 1366×1024
  (menu) + 1024×768 (gameplay): nothing off-screen, no covered buttons, no
  cut text; late-round stars render on the menu cards.
- **Performance**: renderer.info during play — **130 draw calls** (target
  ≤150 ✓), **~16k triangles** (ceiling 150k ✓). rAF fps under CDP 4× CPU
  throttling in this headless environment: **2.4 fps** — that number is
  SwiftShader software-GL bound (the same environment renders the approved
  Sunset Highway at ~1–4 fps) and is NOT a device measurement; the sim
  itself is cheap (the full 12-race robot campaign completes in ~2.2 s of
  Node time). Per-frame rebuild sweep: the render loop builds meshes only
  for course elements entering the visible window (pool pattern from the
  original build); no per-frame geometry construction was found in the
  changed code paths.

## Not verified

- No real-device (phone/tablet/iOS) test — none exists in this environment;
  audio unlock was exercised via the real click gesture in Chromium only.
- Voice: rhino_summit's owner clips are complete (38/38); alien_sky's clips
  are installed per batch records — clip *audibility* inside the WebView was
  not re-verified in this fix.
- The Batch D identity separation (jetpack vs head-charge) is a later phase;
  this fix deliberately changes progression only, not the shared chassis.

## Batch D3 — pair separation (2026-11-27)
- Alien keeps the **jetpack** as its exclusive special (3 bursts, recover a missed jump); it has no
  head-charge (`Race.charge()` returns false for the alien theme — asserted in tests and in the
  real-click harness). The keyboard special key (J/Shift) and the big button now dispatch through one
  `_special()` so each hero only ever fires its own move.
- Tests: course_race **7/7**. Harness 5/5, zero errors: menu «زومي في الفضا», race runs, jets = 3.

---

## Phase 2D — Egypt anchor: «زومي فوق الأهرامات / Zoomi over the Pyramids» (2026-11-27)

**What changed (names only, in the shared course_race engine's alien
config):** Zoomi the alien kid no longer races deep space — he visits
Egypt. Title «زومي في الفضا / Zoomi in Space» → **«زومي فوق الأهرامات /
Zoomi over the Pyramids»**; the six rounds are Nile Islands → Giza
Pyramids → Nile Flight → Cairo Tower → Alexandria Sky → Heart of
Cairo. The jetpack (kept in Phase 2C), the rocket finish, physics and
saves are untouched, and the rhino config is unchanged (its build was
regenerated by the shared build script and is content-identical).

**Tested:** course_race `npm test` 8/8 (+1 anchor test); both builds
green; click-flow: menu shows the new title and round names via the
harness; gameplay confirmed with a single-click check — round-1 race
HUD with position and jetpack charges, 0 page errors; menu frames at
3 sizes.

**Not done (Batch F):** pyramid/corniche course dressing (the floating
islands are not yet pyramid-topped) is not built. Not tested on a real
device.
