# Release 1: authoritative configuration summary

Owner decisions of 2026-10-31 (they supersede earlier release-1 instructions). Everything below is checked by tests (`test/release_config_test.dart`, `test/online_release_gate_test.dart`, `test/lessons_test.dart`) unless it says "not verified".

| Item | Decision / state |
|---|---|
| App name | Rehlaty (display name on both platforms; Arabic label «رحلتي» on Android) |
| Android application id | **`com.rehlaty.app`** (gradle `applicationId` and `namespace`, Kotlin package) |
| iOS bundle identifier | **`com.rehlaty.app`** (Runner target x3 build configurations; tests `com.rehlaty.app.RunnerTests`). Set in the project file; **not opened in Xcode** |
| Target platforms | Android and iOS |
| Publisher | individual (details are entered by the owner in the stores; see `STORE_ACCOUNTS_INDIVIDUAL.md`) |
| Age | 1-6 |
| Languages | Arabic and English, RTL/LTR, landscape, offline except videos |
| Camera and microphone permissions | **kept** (Android manifest and iOS usage strings); asked only when a call, voice message or dictation starts |
| Online features | **OFF in Release 1 (`kOnlineFeaturesIntended = false`); gate CLOSED** (no Firebase project, no account deletion, backend unverified). The app does not contact Firebase; online screens say "Not available in this version yet" |
| Starting video library | **empty until a parent reviews**: 157 unverified candidates; 0 reviewed, 0 approved, 0 rejected |
| Video approval | parent previews, ticks 5 checks, approves; reject, withdraw, disable, reopen; stored with date on the device; child sees only approved and enabled lessons |
| Player | official YouTube iframe; `safe_player.dart` blocks other videos and links out (device verification pending) |
| Privacy manifest | `ios/Runner/PrivacyInfo.xcprivacy` added to the Runner target in the project file (not opened in Xcode) |
| Export compliance | pending (`EXPORT_COMPLIANCE.md`); not set |
| Sign in with Google / Apple | not implemented |
| Push notifications | not implemented |
| Signing | none created; Android upload key and Apple signing are the owner's |
| Commit / push / publish / submit | not done, forbidden |

## Separation of what is done and what is not
| Category | Items |
|---|---|
| **Code changes completed** | identifiers, privacy manifest in project, online gate + unavailable screens, auth-failure handling, video review workflow (reject/checklist/records), player navigation restrictions, cleartext off, release checks, new tests |
| **Automated tests passed** | see `MASTER_PROJECT_STATUS.md` (final run) |
| **Static checks** | secret patterns, absent Firebase config, manifest/plist facts, document consistency (`release_config_test`, `tool/release_check.sh`) |
| **Backend implementation and security verified** | local emulator only: 67 rules tests. **Not** verified against a real project |
| **Backend work needing credentials or approval** | Firebase project, publish rules, account-deletion function, TTL/App Check/TURN, rules changes S3-S4 |
| **Native builds not yet verified** | Android APK/AAB, iOS archive: not run |
| **Physical-device testing required** | everything in `REAL_DEVICE_TEST_GUIDE.md`; especially the player restrictions and permission prompts |
| **Video candidates actually reviewed** | 0 of 157 (`VIDEO_REVIEW_STATUS.md`) |
| **User decisions/information required** | `RELEASE_READINESS.md` list |
| **Store and legal review required** | `STORE_PRIVACY_DISCLOSURES.md`, `EXPORT_COMPLIANCE.md`, Kids Category, YouTube API terms for child-directed use, DSA trader status, privacy policy text |

## Security phase update (2026-10-31)
| Item | State |
|---|---|
| Online gate | still **closed** (`kOnlineFeaturesIntended = true`, `kAccountDeletionReady = false`, `kBackendVerified = false`, Firebase options = placeholders). Every door to the online features was re-checked by test (`online_entry_points_test`): the teacher and family entries end on "Not available in this version yet"; Parent-settings tiles say so too |
| Published Firestore rules | **unchanged, unpublished** (no project exists). Proposed changes: `rules_proposed/` (S2, S3, S4) |
| Teacher approval switch | `kTeachersNeedOwnerApproval = false` (matches today's rules); flip only together with publishing the proposed rules |
| Account deletion | logic drafted and emulator-tested (`functions/`); no client; not deployed; `kAccountDeletionReady` stays false |
| Retention (voice 14 days, calls 24 h) | logic drafted and emulator-tested; not deployed |
| App Check | not implemented |
| Calls | STUN only; `iceServersLoader` hook ready for a TURN service; `kTurnConfigured = false` |
| Sign-in extras | password reset and verification e-mail in the client (untested against Firebase) |
| Booking messages | links, addresses and contact details refused by the app (client + repository) |
| Videos | 157 unverified candidates; 0 reviewed/approved/rejected; the player containment code is **not verified on a device** |
| Family demo | cannot run in a product build (`kFamilyDemo` requires a non-product build) |
| Backend setup | `docs/FIREBASE_BACKEND_SETUP_GUIDE.md`; device plan `docs/REAL_DEVICE_TEST_PLAN_BY_DEVICE.md`; matrix `docs/SECURITY_REMEDIATION_MATRIX.md` |
