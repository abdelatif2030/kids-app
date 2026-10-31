# Rehlaty — feature acceptance report (F1-F7)

Criteria: works, uses real records, Arabic and English, small phone / large text / landscape, per-child isolation, once-only rewards, safety, docs.
"Tests" means automated Flutter tests. **No item was run on a real device and none of the new screens was screenshotted in a browser**, so none is VERIFIED.

| Feature | Works | Real data | ar/en | Responsive | Isolation | Once-only | Safety | Status |
|---|---|---|---|---|---|---|---|---|
| F1 World | tests | finished count | tests | 320x568, 844x390 tests | tests | celebration once | no loss, no time | IMPLEMENTED |
| F2 Companion | tests | events, first-try rate | tests | 320, 844x390, text 1.6 | tests | claim per event | approved lines only, off switch | IMPLEMENTED |
| F3 Adventures | tests | games finished in week, stories heard | tests | tests | tests | once per week | no nudge for missed weeks | IMPLEMENTED |
| F4 Guides | tests | chosen companion | tests | tests (games layout unchanged) | tests | n/a | n/a | IMPLEMENTED (games only) |
| F5 Everyday | tests | parent confirmation | tests | tests | tests | once per day | supervision on every task | IMPLEMENTED |
| F6 Family Time | tests | parent confirmation | tests | tests | tests | once per day | no new communication | IMPLEMENTED |
| F7 Museum | tests | all of the above | tests | tests | tests | n/a | no scores | IMPLEMENTED |

## Known gaps
- World: no buildings, decorations, collectibles or personalisation; islands are simple vector drawings.
- Companion: 28 lines, none recorded; no animation beyond the existing motion system; no companion in stories, lessons or the letters module.
- Adventures: ages 1-2 have few fitting games, so their path is short (documented, tested to never be empty of steps when a game fits).
- Museum shows the last day of a game and a finish count, not the first-finish date (not stored).
- Museum does not show drawings (the gallery is private and holds pictures).
- Branching stories: 2 stories, text only, validated by tests (see status doc).
- Not built from the directive: video lessons/curriculum, parent/teacher/family completion pass, performance profiling on a device.

## Update 2026-10-31
- F1 World: now has island buildings, 26 collectibles tied to real records, and personalisation (see `WORLD_FEATURE.md`). Art is still procedural vector drawing, not production art. IMPLEMENTED.
- Video lessons: infrastructure IMPLEMENTED; content UNVERIFIED (no lesson approved by default).
- All seven features: browser screenshots exist for the main screens (`docs/screens/feat_*.png`, 0 console errors); real-device checks still missing, so none is VERIFIED.
- Integration: `FEATURE_INTEGRATION_AUDIT.md`.
