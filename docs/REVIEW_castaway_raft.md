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
