# Product acceptance report (2026-10-29)

## 1. Executive summary
Rehlaty's learning games, letters, vocabulary, stories, creative studio and local parent tools are implemented and covered by automated tests.
It is **not release-ready**: nothing has been tested on a real Android device, no human has reviewed the audio, calls have never run over a real
network in automation, and several planned items are only foundations (see matrix: B5, D1, E1). Details per requirement: `docs/PRODUCT_ACCEPTANCE_MATRIX.md`.

## 2. Overall status
PARTIAL. Verified by automation: logic, persistence, isolation, rules. Not verified: devices, audio quality, real Firebase, real calls, assistive technology.

## 3. Feature results
See the matrix (A1–H6). Summary: PASS (logic/static) for non-punitive feedback, child data isolation, no ads/analytics/external links, signalling rules, audio gate,
gallery isolation. PARTIAL for responsive/RTL coverage, adaptive learning, parent dashboard, offline, permissions, PIN strength. NOT VERIFIED: pronunciation, voice messages,
resource cleanup. BLOCKED: real calls/video, Android build.

## 4. Critical / high findings
1. **No pronunciation or recording approval**: 0 of 360 audio items approved; ~250 items rely on device voice. (Content, not code.)
2. **Real calls unverified; STUN only**: calls may fail on strict networks; no TURN server.
3. **No offline indicator / capability model**: videos and Firebase features fail without internet and the app does not explain it.
4. **Adaptive recommender UI, parent intelligence dashboard, offline UX, branching-story engine are not built** (only the pure skill-state + destinations foundation, `lib/adaptive/`).
5. Legacy invite-code Firestore rules still active (low–medium).
6. Parent PIN uses a fast hash (medium, mitigated by secure storage + lockout).

## 5. Fixes completed this session (with files)
- Skill events from listening / odd-one-out / pattern / compare games (previously recorded nothing): `lib/games/choice_games.dart`.
- Explainable skill state (not started / exploring / practising / building / demonstrated, with evidence thresholds) and real destinations: `lib/adaptive/skill_state.dart`, `lib/adaptive/destinations.dart`, `test/skill_state_test.dart`.
- Drawing: strokes in resolution-independent space (no distortion on resize), redo, bounded undo (50), clear confirmation (undoable), six colouring outlines, damaged data tolerated: `lib/studio/drawing_model.dart`, `lib/drawing_screen.dart`, `lib/studio/creations.dart`.
- Word builder (Arabic/English, undo/reset, hint, audio, records practice only): `lib/studio/word_builder.dart`, `lib/studio/studio_screens.dart`.
- Gallery rename (owner child only, sanitised): `lib/studio/creations.dart`, `lib/studio/studio_screens.dart`.
- Story graph validation test: `test/story_graph_test.dart`.
- Docs: `docs/CREATIVE_STUDIO_AUDIT.md`, `docs/PRODUCT_ACCEPTANCE_MATRIX.md`, this report.

## 6. Automated results (actual)
- `flutter test`: 808 passed, 0 failed (full run before the story test: 806; plus 2).
- `flutter analyze`: 8 issues, all pre-existing (4 `prefer_initializing_formals`, unused `_round`, 2 test infos).
- Firestore rules emulator (`rules_test`, `npm test`): 59/59 passed.
- `flutter build web --release`: succeeded (87 s). Android build: not run (no SDK here).

## 7. Manual / real-device tests still required
`docs/MANUAL_TESTS.md` (F1–F6, AU1–AU8, A1) remain unchecked. Human checklist:
1. Install on a real Android phone; create two children; confirm profiles are separate.
2. Finish a game; check the parent dashboard shows exactly that activity.
3. Play a letter/word audio, press Home, return; confirm it stops and nothing overlaps; receive a real phone call during audio.
4. Draw, rotate the phone, leave, reopen from the gallery; confirm the drawing is intact. Build a Arabic word and check the letters join and read right-to-left.
5. Turn on airplane mode: confirm games/letters/stories/studio open; note what fails (videos, chat).
6. With two real test accounts: send a message, a voice message, make and end a call, deny the microphone permission.
7. Turn on TalkBack and walk the child home and a game.
8. Native Arabic and English speakers review the text and the audio.

## 8. Security / privacy limitations
Local data is not encrypted (shared_preferences); Firebase rules are the only server-side protection and are emulator-tested, not pen-tested; STUN only; no claim of end-to-end encryption;
declared permissions include RECORD_AUDIO and CAMERA; child photos stay on the device only. A full security audit document was **not** produced in this session (queued).

## 9. Known defects / remaining work
`sort_groups` records no skill event; where_animal_game unused-field warning; `lib/adaptive` not yet shown in the UI; no offline indicator; only one branching story;
parent intelligence (domains, family activities, usage summary) not built; performance not profiled (no frame/memory measurements exist).

## 10. Release-readiness plan (priority)
1. Real-device pass of the manual checklist (blocks everything).
2. Native-speaker audio review and approve/replace the 360 items.
3. Offline capability model + indicator; explain video/chat need internet.
4. Adaptive recommendations on the child home + parent skill overview (use `lib/adaptive`).
5. Security audit document and legacy invite-rule removal; confirm manifest permissions.
6. TURN server decision for calls; real two-device call test.
7. Performance profile on a mid-range phone; widen the responsive matrix to 320/1024/1280.
