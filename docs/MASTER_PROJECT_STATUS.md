# Rehlaty — master project status (checkpoint)

Branch `feature/rehlaty`. All work is uncommitted by the owner's instruction. Nothing is pushed.

## Feature 1: Evolving Magical World — IMPLEMENTED (tested, not VERIFIED)
- `lib/world/world_progress.dart`: six places (first island, garden of discovery, learning village, story kingdom, creative island, world of exploration) that open at 0/3/8/15/25/40 real finished things (the same count as the garden and sticker album). Time never counts. Nothing is lost or bought. `WorldStore` (`world_seen`, per child) makes each opening celebrate once.
- `lib/world/world_art.dart`: code-drawn islands. `lib/world/world_screen.dart`: `WorldScreen` + `WorldCard` on the Me tab.
- Removed by `deleteOneChild` and the global reset. Tests: `test/world_test.dart` (4).
- Not done: buildings, decorations, personalisation, collectibles; the art is simple vectors, not premium art.

## Feature 2: Virtual Companion — IMPLEMENTED (tested, not VERIFIED)
- 28 approved lines (14 moments x Adam and Nour, ar/en) added to `kDialogue` (`cp_*`, feature `companion`); the catalogue tests (length, forbidden words) cover them. No free text: `lib/companion/companion_logic.dart` only returns ids that exist in the catalogue.
- Age band (1-2, 3-4, 5-6) moved by at most one step by demonstrated ability (first-try rate over the last 30 rounds, at least 8 rounds, else unknown). A challenge offer only for confident 5-6 year olds.
- `CompanionService.react` speaks through the shared `RehlatyAudioEngine.say` (parent switches, voice, volume, gate, repeat guard all apply); the bubble always shows the words. Reward moments are claimed once per child (`companion_state`): game first finish, world place opened, story completed (never aloud when sleeping), weekly adventure.
- UI: `CompanionCard` on the Me tab (tap to talk, pick Adam or Nour), `CompanionBubble` on the game finish panel and world screen. Parent switch in Sound settings.
- Art: the existing `assets/characters/adam.png` / `nour.png`. Voices are the phone's demo text-to-speech; no recordings exist; pitch/pace tuning has not been listened to.
- Tests: `test/companion_test.dart`, `test/companion_integration_test.dart`.

## Feature 3: Weekly Educational Adventures — IMPLEMENTED (tested, not VERIFIED)
- `lib/adventures/`: six themes rotating by week (Monday to Sunday); steps are age-fitting games (2/3/4 by age, +-1 by ability) plus one age-fitting story. A step is done only when `GameRewards` / story history shows it finished inside the week. Completion is recorded once per child per week (`adventures`), notified, and celebrated by the companion once. A missed week costs nothing and gives no nudge.
- UI: «مغامرة الأسبوع» card on the Me tab, `AdventureScreen`. Tests: `test/adventures_test.dart`.
- Not done: parent-chosen themes, a toddler-specific (1-2) adventure with family activities (few games fit ages 1-2).

## Features 4-7 — IMPLEMENTED (tested, not VERIFIED)
- F4 Guides: the speaker button of every `GameScaffold` shows the child's chosen companion and reads the instruction in that voice (`GuideSpeakButton`, `CompanionStore.currentChildId` set by the child shell). A first attempt to put the head beside the text changed game layouts (7 tests failed) and was replaced by the button.
- F5 Everyday Life (`lib/everyday/`): 16 tasks for ages 1-6 with a supervision level on each, parent confirmation (grown-up question), once per day, no stars.
- F6 Family Time (`lib/family_time/`): idea of the day from existing activities, a planned weekday and length, a parent notification on the planned day, a confirmed-session record. No chat or call.
- F7 Achievement Museum (`lib/museum/`): six rooms built only from real stores.
- Also: data export now includes the new records; `AlertDialog` of the parent question scrolls (it overflowed in small landscape).

## Branching stories — IMPLEMENTED (tested, not VERIFIED)
- `lib/stories/branching.dart`: model, `validateBranching` (start exists, targets exist, 2-3 choices per page, no unreachable page, every page can reach an ending) and two original stories (boat, garden; 4+ paths each, all endings kind). `branching_screen.dart`: choose-your-path player with listen button (child's guide voice), go back, tell it another way; an ending is recorded once per day and celebrated once. Entry card at the top of the stories library for the fitting age (3-6).
- The stories are written text read by the phone voice; no recordings, no illustrations.

## Quality gates (latest run)
- `flutter test`: 1262 passed. `flutter build web --release` succeeded (main app). `flutter analyze`: 12 infos, no errors (old baseline).
- Web release build was last run before the latest changes. Android build impossible (no SDK).
- Nothing was tested on a real device. No human voice recordings exist.

## Not started
Video lessons/curriculum, WX items 2-6, parent/teacher/family completion pass. Docs written: MASTER_IMPLEMENTATION_ROADMAP, ARCHITECTURE, AUDIO_IMPLEMENTATION, GAME_IMPLEMENTATION, FEATURE_ACCEPTANCE_REPORT, SECURITY_AND_PRIVACY_REVIEW, RELEASE_READINESS.

## Blockers
iOS bundle id is still `com.example.kidsApp`; voice/SFX/music files; real-device tests; YouTube verification; Google/Apple sign-in; push service.

## Exact next action
The video library (lessons, verification), then WX items 2-6; browser screenshots of the new Me-tab cards and screens; real-device tests.

## Continuation checkpoint
Modified/new (all uncommitted, branch `feature/rehlaty`): `lib/world`, `lib/companion`, `lib/adventures`, `lib/everyday`, `lib/family_time`, `lib/museum`;
edited `lib/media/audio_catalog.dart` (+28 lines), `lib/games/game_common.dart`, `lib/journey/ui/{me_tab,child_shell}.dart`, `lib/stories/story_player.dart`,
`lib/media/engine_settings_screen.dart`, `lib/data_reset.dart`, `lib/parent_screens.dart`, `test/notifications_test.dart` (one assertion removed: the Me tab now starts with the companion card);
new tests: world, companion (+integration), guide, adventures, everyday, family_time, museum, new_features_privacy. Docs listed above.
Next exact action: video library lessons (age groups 1-6, approval states, lessons linked to existing activities) in `lib/video_controls.dart` and `assets/videos.json`; videos must stay unapproved until the owner verifies them.


---
# Update 2026-10-31: video lessons, world visuals, age scope, regression and release verification

## Implemented in this round (all uncommitted)
- **Video lesson library** (`lib/lessons/`, `lib/video_controls.dart`, `lib/player_screen.dart`, `lib/main.dart`; `docs/VIDEO_LIBRARY.md`): nothing is visible to a child until a parent approves it; approval needs the
  preview to have been opened; add by exact YouTube link (strict parser), approve, withdraw, disable/enable, remove (parent-added); age bands 1-2 / 3-4 / 5-6; category filter; player loading/error/offline states
  with retry and back; child list with category chips, offline notice and a friendly empty state. **Behaviour change:** a fresh install (and every existing install) shows children no videos until a parent approves lessons.
  The dashboard and plan screens read the whole catalogue (`loadVideos(all: true)`) so their progress maths is unchanged.
- **World visuals** (`lib/world/`; `docs/WORLD_FEATURE.md`): island scenes with buildings, 26 collectibles from real records, child-safe personalisation (theme, time of day, fixed island names). Still procedural vector art.
- **Age scope 1-6** (`lib/age_scope.dart`, `docs/AGE_SCOPE.md`): product text, pickers, filters; legacy data still loads.
- **Me-tab identity coverage restored and strengthened** (`test/notifications_test.dart`): scrolls to the profile card and checks the nickname and avatar.
- **Integration audit** (`docs/FEATURE_INTEGRATION_AUDIT.md`, `test/features_integration_test.dart`): one finished game moves each linked count once; a replay moves none; an adventure gives no extra star.
- Dev preview entry `tool/feature_preview_main.dart` (not part of the app) used for browser screenshots.

## Test and build results (actual)
- `flutter test`: **1291 passed, 0 failed** (final run after the last code change).
- `flutter analyze`: **10 issues, 0 errors** (1 warning `_round` in `where_animal_game.dart`, 9 infos), all pre-existing style items; this is below the earlier baseline of 12.
- `flutter build web --release`: **succeeded** (run after the last app-code change).
- Browser (Playwright/Chromium, preview build): 36 screenshots (9 screens x phone 360x640 / landscape 844x390 x ar/en), **0 console errors**; 10 kept in `docs/screens/feat_*.png`.
- Android build: **not possible** (no Android SDK or `ANDROID_HOME` in this environment). iOS: not attempted (no Xcode).
- Widget tests cover 320 px, 1.6x text, landscape 844x390 and tablet widths, Arabic and English, for the new screens.

## Unverified behaviour
- Everything on a real device: touch, audio, orientation, YouTube embedding/playback (YouTube was unreachable), permissions.
- The player error/offline states were tested only through the connectivity monitor and layout, not by a real failed YouTube load.
- Voices are the phone's demo text-to-speech; Adam/Nour tuning never listened to.

## Missing assets and content
- **No verified video content**: 157 bundled entries are unverified candidates; none is approved by default. A curated, licence-checked 1-6 list is needed.
- No human voice recordings (72+ lines), no sound-effect (19) or music (6) files.
- No illustrator-made art for islands, collectibles, companion scenes or the Me-tab cards.
- Stories: 2 branching stories (text only), 8 linear stories; no illustrations or recordings.

## Remaining release blockers
1. iOS bundle identifier is `com.example.kidsApp` (placeholder). **Do not invent one**; the owner must provide the real identifier.
2. No Android build or signing (no SDK here; `android/key.properties` absent by design).
3. Real-device testing, a human review of every video, voice recordings, Firebase rules publishing and real-Firebase tests, privacy policy and store listing review, Families-policy age rating.
4. Google/Apple sign-in and push notifications not built.

## Exact next actions
1. Owner: provide the iOS bundle id and Android signing; run the app on a real phone and tablet (checklist `docs/MANUAL_TESTS.md`).
2. Owner/parent: review the candidate videos in Parent settings -> Lesson library and approve only the ones watched; supply a vetted source list if more are wanted.
3. Commission or choose licensed art for the world and companion; record the voices.
4. Next engineering step: group the Me tab (eight cards in a list) and link lessons to matching games (lesson -> activity), then unify the RC and DS palettes.

---
# Final validation stage (2026-10-31, after the implementation milestones)

## What was done
1. **Video candidates**: all 157 bundled entries now carry `"verification": "unverified"` (`Video.verification`); the app never sets `verified`. The parent's Lesson library labels them "Unverified candidate", has status filters (Waiting / Approved / Disabled), and the Parent settings tile is renamed "Lesson library". Tests: with no parent action no child gets any video; approving unknown ids, or an id that is disabled, reveals nothing; no `verified`/pre-approved text in `assets/videos.json`. Workflow: `docs/VIDEO_REVIEW_WORKFLOW.md`; review sheet `docs/VIDEO_CANDIDATES.csv`. **No video is verified or approved.**
2. **Manual test checklist reviewed**: `docs/MANUAL_TESTS.md` had stale items (A1 language screen, A6/A8 permissions, C1/C2/C7 videos) — corrected with a header note. New non-developer guide `docs/TESTING_GUIDE.md` (13 sessions with steps and expected results) and report form `docs/TEST_REPORT_TEMPLATE.md`.
3. **Real-device guide**: `docs/REAL_DEVICE_TEST_GUIDE.md` (prerequisites, build/install, landscape, touch, audio, video, Arabic/English, large text, offline, child-data isolation, how to collect failures, when you may say "tested on a device"). Nothing in it has been run.
4. **Release blockers**: `docs/RELEASE_READINESS.md` rewritten as a prioritized list split into: owner decisions, physical devices, credentials/signing/services, and what I can do in code.
5. **Safe release improvements implemented and tested**: `docs/PRIVACY_POLICY_DRAFT.md` and `docs/PLAY_STORE_CHECKLIST.md` corrected (they wrongly claimed "a list we reviewed" and "no camera/microphone"); iOS display name "Rehlaty" and `NSCameraUsageDescription`; `lib/app_info.dart` + "App version" row in Parent settings (a test keeps it equal to `pubspec.yaml`); `test/release_config_test.dart` (application id, label, landscape, backup off, permission whitelist, no key material, icons, iOS strings, iOS bundle placeholder documented, Firebase off, version); `tool/release_check.sh` (analyze + tests + web build + repo checks); stale launcher-icon note fixed in `docs/ANDROID_RELEASE.md`.
6. **Not done on purpose**: no iOS bundle id invented (`com.example.kidsApp` remains the documented blocker), no signing credentials, no verified videos, no voice recordings, no claim of device testing.

## Results (actual, final run of `tool/release_check.sh`)
- `flutter analyze`: 0 errors, 10 infos/warnings. `flutter test`: **1307 passed**. `flutter build web --release`: **succeeded**. Android/iOS builds: not run (no SDK/Xcode). Real-device tests: none.

## Exact next actions (in order)
1. You: decide A1-A3 in `docs/RELEASE_READINESS.md` (iOS bundle id, confirm the Android id, the starting video list).
2. You or a helper: build the Android debug/release APK and run `docs/TESTING_GUIDE.md` plus `docs/REAL_DEVICE_TEST_GUIDE.md` on one small phone and one tablet; send back `docs/TEST_REPORT_TEMPLATE.md`.
3. You (parent): review and approve a few lessons using `docs/VIDEO_REVIEW_WORKFLOW.md`; report any that do not play inside the app.
4. You: create the Android upload key and the Play Console / App Store accounts (credentials only you hold); then a signed `flutter build appbundle` can be tested.
5. Me, after test reports arrive: fix reported failures; then (optionally) group the Me tab, link lessons to games, unify palettes.

---
# Release preparation for Android and iOS (2026-10-31)
Owner confirmed the target: **both platforms**. Nothing was published, uploaded, signed, built for a device, committed or pushed. No credentials, bundle id, API key or Firebase config was invented; no Firebase rules or backend settings were touched.

## Done
- Android: reviewed id/namespace/package, permissions, orientation, minSdk 24 / target 36; added a branded splash (logo on lavender, Android 12+ colour), `android/key.properties.example`, a Gradle warning when the key is missing, and `docs/ANDROID_SIGNING.md` (exact key requirements and steps).
- iOS: **found and fixed** Flutter's default app icons (whole AppIcon set) and the blank launch image -> Rehlaty logo; `CFBundleName` = Rehlaty; wrote `ios/Runner/PrivacyInfo.xcprivacy`; bundle id left as the placeholder; proposal and full Apple account/certificate/profile/archive steps in `docs/IOS_RELEASE.md`.
- Both: Firebase/sign-in/notification/dependency review in `docs/FIREBASE_AND_ACCOUNTS.md`; store privacy and child-safety answers in `docs/STORE_PRIVACY_DISCLOSURES.md`; secret-pattern scan, Firebase-config-absent, icon, splash, signing-template and privacy-manifest tests in `test/release_config_test.dart`.
- Arabic/English, RTL/LTR, landscape and offline behaviour untouched; the full suite still passes.

## Results (actual)
- `tool/release_check.sh`: `flutter analyze` 0 errors (10 infos/warnings), `flutter test` **1314 passed**, `flutter build web --release` **succeeded**.
- Android build: **not possible here** (no Android SDK; `dl.google.com` is blocked). iOS: no macOS/Xcode. So no APK/AAB/IPA was built and "can be built when signing is available" is **unverified**.
- Not done: real-device tests, signing, store submissions.

## Open items and exact next actions
See "What I need from you" in `docs/RELEASE_READINESS.md` (13 numbered items: iOS bundle id confirmation, Android id confirmation, publisher details, camera/microphone decision, Kids Category, export compliance, online features on/off and account deletion, video list, Apple and Google accounts, your own upload keystore, hosted privacy policy, a 1024 px icon and screenshots, Firebase project only if online features are enabled).
Order: 1) answer decisions 1-8; 2) a person with Android Studio builds the APK and runs the device guide; 3) a person with a Mac and Xcode adds `PrivacyInfo.xcprivacy`, sets the confirmed bundle id and team, archives and tests on TestFlight; 4) create keys/accounts yourself; 5) then store listings.

---
# Final release preparation, release 1 (2026-10-31, owner decisions applied)
Authoritative summary: `docs/RELEASE_1_CONFIGURATION.md`. No commit, push, publish or submission happened; no credentials, identifiers beyond the confirmed `com.rehlaty.app`, Firebase config or video approvals were invented; no Firebase rules or backend settings were changed or published.

## Code changes completed
- Identifiers: iOS bundle id `com.rehlaty.app` (Runner x3, tests `com.rehlaty.app.RunnerTests`); Android already `com.rehlaty.app`; no `com.example` left in project files. Privacy manifest added to the Runner target in `project.pbxproj`. `usesCleartextTraffic=false`.
- Online release gate (`lib/online_gate.dart`, `online_unavailable.dart`, `firebase_config.dart`): online ON as intent; closed until real config + account deletion + verified backend; honest "not available" screens; the in-memory family demo can never run in a release build; sign-in failures of any kind show a message (new generic catch).
- Video review workflow: review records (status, date, five checks) in `video_reviews`; Review-and-decide sheet; Reject / Reopen / Withdraw / Disable; filters (waiting, available now, disabled, rejected); counts; a child sees only approved + complete checklist + not disabled; hand-edited or older lists ignored.
- `lib/safe_player.dart`: refuses other videos, links out and non-player navigations in the YouTube player (the package would otherwise load suggested videos into the player and open title/logo links externally). **Not verified on a device.**
- Dashboard/plan screens read the catalogue (not the child list), unchanged behaviour.
- `tool/release_check.sh` now also runs the local emulator rules tests; new tests listed below.

## Automated tests and static checks (actual, final run of `tool/release_check.sh`, exit 0)
- `flutter analyze`: 0 errors, 10 infos/warnings (unchanged pre-existing style items).
- `flutter test`: **1338 passed, 0 failed** (automated: unit/widget tests; static: file-reading tests for identifiers, permissions, manifests, secrets, docs).
- `flutter build web --release`: **succeeded** (run after the last code change).
- Firestore rules, LOCAL emulator only (`rules_test`): **67 passed** (61 earlier + 6 new: teacher accounts and other families cannot read or write family data; outsiders cannot join, answer or end calls or add candidates; accounts, bookings and requests are private; signed-out users get nothing; documented limits).
- New/updated test files: `release_config_test`, `online_release_gate_test`, `safe_player_test`, `lessons_test` (candidates, review states, tamper), `video_controls_test`, `teachers_test`, `rules_test/rules.test.mjs`.

## Backend implementation and security
Not verified against any real backend (no Firebase project exists). Review: `docs/ONLINE_SECURITY_REVIEW.md` (S1 deletion missing = blocker; S2 unvetted teachers; S3-S4 rules proposals; S5 client-side retention; S6 App Check; S7 no TURN). Inventory: `docs/ONLINE_FEATURES_INVENTORY.md`. Account deletion: **design only, not implemented** (`docs/ACCOUNT_DELETION_DESIGN.md`).

## Videos
Candidates: 157. Reviewed by a human: **0**. Approved: **0**. Rejected: **0**. Unreviewed: **157**. All stay `unverified`. Files: `VIDEO_REVIEW_WORKFLOW.md`, `VIDEO_CANDIDATES.csv`, `VIDEO_LIBRARY.md`, `VIDEO_REVIEW_STATUS.md`.

## Native builds
Android APK/AAB: **not built** (no Android SDK; `dl.google.com` blocked). iOS: **not built** (no macOS/Xcode). Bundle id and privacy-manifest edits to the Xcode project file are therefore unconfirmed in Xcode.

## Open items and exact next actions
See `docs/RELEASE_READINESS.md` (blockers by priority and the short list of what is needed from the owner). In order: (1) review videos in the Lesson library if you want a starting list; (2) device rounds on Android and iOS, especially the player restrictions; (3) Android upload key + signed AAB; (4) Apple account + Mac archive; (5) export-compliance answer; (6) decide online-in-release-1 (needs Firebase project, deletion function, rules review/publication, two-phone tests) or ship closed; (7) privacy policy URL and store accounts as an individual.
## Unresolved legal and store-policy risks
Kids Category versus YouTube embed; YouTube API terms for child-directed content (made-for-kids status of each video cannot be verified by the app); COPPA / GDPR-K treatment of the app and of online features; EU DSA trader status for an individual; account-deletion policies if accounts ship; export compliance; privacy policy wording. None of these is answered by this project; all need the owner and, where appropriate, a qualified adviser.

---
# Security and release-readiness phase (2026-10-31, second audit accepted)
No commit, push, publish or submission; production Firebase rules unchanged and unpublished; no credentials, test results, video approvals, legal conclusions or production verification invented.

## Done (all tested locally)
- **Findings S1-S11 reviewed**; remediation matrix with severity, impact, components, backend services, steps, tests and dependencies: `docs/SECURITY_REMEDIATION_MATRIX.md`; review status updated in `docs/ONLINE_SECURITY_REVIEW.md`.
- **Code fixes live in the app:** booking-message link/contact filter widened to the server pattern and repeated in the repository (S4); password reset and verification e-mail in the client (S10); relay-server hook for calls, STUN default, no credentials in code (S7); teacher-approval switch `kTeachersNeedOwnerApproval` (S2, off); sign-in failures of any kind handled; honest text on the sign-in screen and Parent-settings tiles; the in-memory family demo can no longer be enabled in a release build.
- **Drafts verified on the LOCAL emulator, not deployed:** `rules_proposed/firestore.rules.proposed` (S2 pending teachers, S3 CV access, S4 links) with 6 tests; `functions/` account deletion (S1/S11) and retention (S5) logic with 5 tests.
- **Re-review of the player and approval workflow** (`test/player_approval_review_test.dart`, `test/online_entry_points_test.dart`): every place a player is created or the catalogue is read is pinned; all online doors end on "Not available in this version yet". No candidate video was approved.
- Guides: `docs/FIREBASE_BACKEND_SETUP_GUIDE.md` (services, configuration, rules, functions, billing, verification, opening the gate) and `docs/REAL_DEVICE_TEST_PLAN_BY_DEVICE.md` (Android phone, Android tablet, iPhone, iPad, online section).

## Results (actual; final run of `tool/release_check.sh`, exit 0)
- `flutter analyze`: 0 errors, 10 infos/warnings (pre-existing style items).
- `flutter test`: **1363 passed, 0 failed**.
- `flutter build web --release`: **succeeded** (run after the last code change; only documents changed afterwards).
- Local Firestore emulator: current rules **67/67**; proposed rules **6/6** (and the old suite against them: 65/67, the 2 differences are the intended S2/S3 changes); backend-function logic **5/5**.
- Not run: Android and iOS builds, Functions emulator, Auth emulator, anything on a real Firebase project, any real device. YouTube player containment: written, unit-tested as a decision function only.

## Remaining, prioritized
1. (always) Device rounds per `REAL_DEVICE_TEST_PLAN_BY_DEVICE.md`, especially player containment (C4/I7/P7) and permission prompts; check the iOS Keychain PIN after reinstall.
2. (always) Android upload key + signed AAB; Apple account + archive; privacy policy URL; export-compliance answer; your video review (0 of 157).
3. (only if online ships) Firebase project; publish reviewed rules (S2-S4); deploy and test deletion and retention functions; add `cloud_functions` and `firebase_app_check` (package approvals); TURN service; e-mail templates and enumeration protection; set the two gate constants with evidence.
4. Legal and store-policy questions remain unanswered (Kids Category vs YouTube embed, YouTube API terms for child-directed use, COPPA/GDPR-K, EU trader status, account-deletion policies, export compliance).
## Exact next actions for the owner
Answer the short list in `docs/RELEASE_READINESS.md` ("What I need from you"), decide online-in-release-1 (recommendation: ship closed), and approve or reject the package additions and the rules proposals S2-S4. Tell me which of them you approve and I will continue (for example the delete-account screen, App Check wiring, or applying the proposed rules to `firestore.rules`) without publishing anything.
