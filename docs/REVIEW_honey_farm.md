# REVIEW — honey_farm («مزرعة العسل» / Honey Farm)

Phase 1, item 1.3 of docs/GAMES_ROLLOUT_PLAN.md. Commit 28f2956e on ai/moss-work.
(Appended-format note: this game had no pre-existing REVIEW doc; this file starts with the Phase 1 review.)

## What was wrong

1. **Progress was never saved.** The farm — cash, earnings toward the 1500 goal, and every
   purchase (extra hives, bigger bag, conveyor, second machine) — lived only in the
   in-memory `Farm`. The save carried just wins/best/muted and was posted only on a win, so
   leaving mid-game lost the whole farm.
2. Money rendered with **$** in two places (the sale pop and the cash-pile label) in an
   Egyptian-pounds game.

## What changed and why

- `Farm.snapshot()` / `Farm.applySnapshot()` capture the durable farm: cash, earned,
  served/left counts, bag size, which hives are open, second machine, conveyor, cash pile.
  Jars in flight, waiting customers and timers are one morning's work and restart fresh.
- `normalizeSave` validates the snapshot: the two starter hives are forced open, bag is
  restricted to the reachable sizes (4/6/8/10), and **earned is capped at GOAL − 1** — a
  restored farm can never re-trigger the win on its first step. Winning clears the
  snapshot, so the next game starts a genuinely fresh farm.
- The shell persists on every sale, on every purchase, and when leaving to the menu
  (`_persistFarm()`, which only ever snapshots a live session farm — the menu's demo farm
  cannot overwrite the player's). `start()` restores the snapshot before play.
- $ → ج.م / EGP in both money renders, via one CUR() helper.

## What was actually tested

- `npm test`: **6/6 pass** (2 new: snapshot round-trip restores cash/earned/purchases
  exactly; validation — negative cash → 0, earned 99999 → GOAL − 1, bag 7 → 4, starter
  hives forced open).
- Browser, real shell entry + real mouse clicks (~/tools/recorder/phase1_verify.mjs):
  seeded farm restored through the Play click — cash 275, earned 640, 4 of 6 hives open,
  second machine and conveyor owned, bag 8, goal bar at 42.7%; clicking back to the menu
  posted a save carrying the same farm; zero page errors.
- fps: **42.9 fps** rAF under CDP 4× CPU throttling, headless SwiftShader, 1024×768
  (phase1_fps.mjs) — a comparable lower bound from a software-GL environment, not a
  device measurement.

## What was NOT verified

- A full earn-to-GOAL win played across two browser sessions (the win-clears-snapshot
  path is covered by the validation tests and code path, not by a second live session).
- No real-device or iOS WebView test exists in this environment.
- VoiceCoach is wired, but no owner-generated clips are installed for this game yet;
  the lines are on the owner's "add to instinct" list.
