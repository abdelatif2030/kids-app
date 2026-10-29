# Product acceptance matrix (2026-10-29, branch feature/rehlaty)

Evidence rules: PASS needs automated evidence *and* no required manual/real-device step outstanding. Everything that needs a phone,
a microphone, a screen reader, a real Firebase project or a human listener is **NOT PASS**.
Automated evidence on this run: `flutter test` 808 pass (after adding `story_graph_test`), `flutter analyze` 8 issues (all pre-existing: 4 `prefer_initializing_formals`,
unused `_round`, 2 test infos), Firestore rules emulator 59/59, `flutter build web --release` succeeded (87 s). Android build: **not run** (no Android SDK in the cloud session).

| ID | Requirement | Evidence (files / tests) | Status | Severity if wrong | Remediation |
|---|---|---|---|---|---|
| A1 | Design system, tokens, components | `lib/design/`, `docs/DESIGN_SYSTEM.md`, `test/ux_pass_test.dart` | PARTIAL | Low | RC (child) and DS (adult) palettes are aligned, not unified (documented). |
| A2 | Backgrounds / worlds, readable over decoration | `lib/design/worlds.dart`, `test/worlds_test.dart`, `docs/screens/bg_*.png` (test-renderer images) | PARTIAL | Low | Contrast over worlds checked only by eye in test renders, not by a human on devices. |
| A3 | Responsive child home / games / library / studio / parent | `test/responsive_matrix_test.dart` (3 widths × ar/en), `focusable_tap_test.dart` | PARTIAL | Medium | Matrix covers 3 widths, not 320/1024/1280; creative studio, family and dashboard not all in matrix. |
| A4 | Arabic RTL / English LTR | `loc()/tr2`, `test/dictionary_test.dart`, matrix tests | PARTIAL | Medium | Stories/letters content stays Arabic by design; no native-speaker review of the English dictionary. |
| A5 | Keyboard / mouse / focus | `FocusableTap`, `focusable_tap_test.dart` | PARTIAL | Medium | Drawing canvas is pointer-only (no keyboard drawing). Browser Back/Forward/refresh not verified. |
| A6 | Reduced motion, text size | `lib/display_prefs.dart`, `accessibility_test.dart` (320 px, ×1.6) | PARTIAL | Low | No assistive technology test performed. |
| B1 | Audio inventory honest | `docs/AUDIO_AUDIT.md`, `AUDIO_COVERAGE.md` (generated from manifest) | PASS (inventory only) | — | Real result: 0 human recordings, 0 of 360 approved, 4 original synthesized ambient files. |
| B2 | Pronunciation quality | none | NOT VERIFIED | High (educational) | Needs native-speaker review; device TTS used for ~250 items. |
| B3 | No overlapping narration, call-aware | `AudioService`, `AudioGate`, `audio_gate_test.dart` | PASS (logic, fakes) | Medium | Real device interruption (phone call, headset) not tested. |
| B4 | Learning games record attempts vs mastery correctly | `ProgressStore`, `LearningRecords`, `adaptive/skill_state.dart` + `skill_state_test.dart` (new), `choice_games_test.dart` | PARTIAL | Medium | Listening/ChoiceGame games now record first-try events (fixed this run). `sort_groups` still records nothing. |
| B5 | Adaptive recommendations, learning companion | `lib/adaptive/skill_state.dart`, `destinations.dart` (real screens), letters `adaptive.dart` | PARTIAL | Medium | Recommender + home card + companion + parent view **not built yet** (foundation only). Letters adaptive plan exists. |
| C1 | Story reader, branching | `stories/*`, `story_player.dart`; **1** branching story (3 choice points) | PARTIAL | Medium | New `story_graph_test` verifies destinations, reachability and endings for it. Engine/authoring for more adventures not built. |
| C2 | Narration sync | device voice has no word timing | PARTIAL | Low | Passage-level only, by design; no read-along claim. |
| C3 | Drawing: colours, eraser, undo/redo, save/reopen | `drawing_model.dart`, `creative_studio_test.dart` (14), `studio_test.dart` | PASS (logic) / NOT VERIFIED (touch on device) | Medium | Fixed this run: pixel strokes distorted on resize; unbounded undo; clear had no confirm. |
| C4 | Word builder, Arabic order/joining | `word_builder.dart`, tests incl. harakat and all vocab solvable | PARTIAL | Medium | Joined rendering verified by logic only (one string, RTL), not visually on a device. |
| C5 | Picture story, gallery isolation, rename, delete | `studio/*`, tests; child gallery has no delete by design | PASS (logic) | Medium | Delete is parent-only (PIN). |
| D1 | Dashboard aggregation, ranges, empty history | `progress_report.dart` (pure), `dashboard_test`s | PARTIAL | Medium | Intelligence phase (domains, family activities, usage) **not built**; existing dashboard counts only recorded events. |
| D2 | No fabricated stats; child isolation | `ProgressStore` events carry childId; `skill_state_test` per-child | PASS (logic) | High | — |
| E1 | Offline behaviour | games, letters, stories (device voice), studio use local data | PARTIAL | Medium | Videos, thumbnails and Firebase features need internet. **No offline indicator or capability model exists** (gap). Not tested in airplane mode. |
| E2 | Cloud sync of child progress | none exists | N/A (not implemented) | — | Progress is local only; must not be advertised as synced. |
| F1 | Family chat (text/stickers), approvals | `lib/family/*`, `firestore.rules`, 59 emulator tests, fake-repo widget tests | PARTIAL | High | Never run against real Firebase by automation; user tested manually earlier (screenshots), no record in repo. |
| F2 | Voice messages | `record` package, rules, fake tests | NOT VERIFIED | Medium | Real microphone not tested here. |
| F3 | Voice / video calls | WebRTC engine, signalling in Firestore, controller tests with fake engine | BLOCKED (real audio/video path) | High | STUN only (no TURN): calls can fail across strict NATs. Video untested. No encryption claim made beyond WebRTC's own DTLS-SRTP, not verified here. |
| F4 | Signalling authorization | rules: only active relative with `calls` switch, child in relative's children, only callee answers | PASS (emulator) | High | Residual risks in SECURITY notes below. |
| G1 | Tests / analyze / build | see top | PARTIAL | — | Android build BLOCKED (no SDK); web build passes. |
| G2 | Resource disposal | `CallController._disposed`, audio gate, autosave dispose | NOT VERIFIED | Medium | Reviewed in code only; no leak test. |
| H1 | No ads / analytics / external links / public sharing | pubspec has no analytics/ads/url_launcher (grep) | PASS (static) | High | — |
| H2 | Permissions | manifest: INTERNET, RECORD_AUDIO, CAMERA, MODIFY_AUDIO_SETTINGS, ACCESS_NETWORK_STATE, CHANGE_NETWORK_STATE | PARTIAL | Medium | RECORD_AUDIO/CAMERA are declared but requested at use only for voice/calls (not verified on a device). CHANGE_NETWORK_STATE/MODIFY_AUDIO_SETTINGS likely come from WebRTC: confirm and consider removing. |
| H3 | Parent PIN | salted SHA-256, 5 tries then 30 s lockout, secure storage | PARTIAL | Medium | Fast hash on a 4–6 digit PIN is weak if storage is extracted; acceptable only as a child speed bump. |
| H4 | Non-punitive feedback | wrong answers fade only; stars on completion only | PASS (code review + tests) | Medium | — |
| H5 | Secrets in repo | `firebase_options.dart` is a placeholder; no key files tracked | PASS (static grep) | High | A real project's `firebase_options.dart` is public-by-design config, but rules are the real protection. |
| H6 | Legacy invite-code rules | `firestore.rules` still allows invite create/redeem though the UI no longer uses it | PARTIAL | Low–Medium | Remove after the owner confirms no old invites are needed (needs owner decision; emulator tests must be updated). |
