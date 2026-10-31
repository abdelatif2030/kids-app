# Rehlaty — release readiness (not a release)

Last updated 2026-10-31 after the owner's release-1 decisions. **Nothing was published, submitted, signed, uploaded or committed.** The authoritative configuration is `docs/RELEASE_1_CONFIGURATION.md`.

## Release 1 decisions (owner)
Android id and iOS bundle id `com.rehlaty.app`; online features OFF in Release 1 (offline release; code kept gated for a later phase); camera and microphone permissions kept; starting video library only after parent review; individual publisher; Android and iOS; stay on `feature/rehlaty`; no commit/push/publish/submit.

## Status in one table
| Area | State | Evidence |
|---|---|---|
| Identifiers | done in the project files for both platforms; iOS never opened in Xcode | `release_config_test` |
| Permissions | camera + microphone kept; contextual only (3 entry points); denial handled | `online_release_gate_test` static + behaviour tests |
| Online features | OFF for Release 1, **gate CLOSED**: no Firebase project, account deletion not implemented, backend unverified; screens say "Not available in this version yet" | `ONLINE_FEATURES_INVENTORY.md`, `ONLINE_RELEASE_GATE.md` |
| Backend security | local emulator only: 67 rules tests pass (cross-family, teacher, outsider, signed-out); findings S1-S11 open; rules not changed/published | `ONLINE_SECURITY_REVIEW.md` |
| Account deletion | design only, **not implemented** | `ACCOUNT_DELETION_DESIGN.md` |
| Videos | review workflow done; **0 of 157 reviewed or approved**; child sees none by default; player navigation restrictions written but **not verified on a device** | `VIDEO_REVIEW_WORKFLOW.md`, `VIDEO_REVIEW_STATUS.md`, `safe_player.dart` |
| Android build | never run (no SDK; `dl.google.com` blocked); config checked statically | `ANDROID_SIGNING.md` |
| iOS build | never run (no macOS/Xcode) | `IOS_RELEASE.md` |
| Store text | drafts only; Kids Category not chosen (recommendation: Education first) | `STORE_LISTING_DRAFT.md` |
| Export compliance | answer PENDING | `EXPORT_COMPLIANCE.md` |
| Privacy | policy draft + store disclosures updated; legal review needed | `PRIVACY_POLICY_DRAFT.md`, `STORE_PRIVACY_DISCLOSURES.md` |

## Prioritized blockers
### P0 - cannot publish without it
| # | Blocker | Who |
|---|---|---|
| 1 | Real-device verification of the app and, above all, the YouTube player restrictions (`safe_player.dart`) on Android and iOS | you / a helper with devices |
| 2 | Android upload key and a signed `flutter build appbundle` (verifies the AAB builds) | you create the key; a computer with the Android SDK builds |
| 3 | Apple Developer account, Team, certificates/profiles, an Xcode archive of `com.rehlaty.app` (also confirms the project-file edits for the bundle id and privacy manifest) | you + a Mac |
| 4 | Parent review of the videos you want in the starting library (approval is yours; 0 of 157 done) | you |
| 5 | Privacy policy hosted at a URL, filled with your details and checked by a qualified person; store forms (Data safety / App Privacy / content rating / target audience) | you |
| 6 | Export-compliance answer (Apple) | you |
### P0 only if you want the online features in release 1 (the gate stays closed otherwise)
| # | Blocker |
|---|---|
| 7 | Create the Firebase project; run `flutterfire configure` (adds your keys); enable Authentication; review and publish `firestore.rules` yourself |
| 8 | Account deletion function and tests (needs your approval, Blaze plan) |
| 9 | Decisions on S2 (unvetted teachers), S3-S4 (rules tightening), S5 (server-side retention), S6 (App Check), S7 (TURN) and real two-phone tests |
| 10 | Updated privacy manifest, Data safety and App Privacy answers for the online data; policy update |
### P1 - before real families use it
Kids Category decision; YouTube API terms for child-directed use (counsel); EU "trader" status; true 1024 px icon, screenshots from a device; Arabic and English listing proofreading; voice recordings and sound effects (device voice only today); e-mail verification and password reset (S10); adaptive Android icon.
### P2
Unify palettes; replace emoji stickers; group the Me tab; link lessons to games.

## What I can do in code vs what needs you
| Category | Items |
|---|---|
| Done in code | identifiers; privacy manifest in the project; online gate and honest screens; auth-failure handling; video review workflow with records and checklist; player restrictions; cleartext off; manifest/plist pins; secret and config scans; rules isolation tests; store, privacy and compliance documents; release check script |
| Needs a decision | A-list in section "What I need from you" below |
| Needs physical devices | `REAL_DEVICE_TEST_GUIDE.md`, `TESTING_GUIDE.md` |
| Needs credentials, keys, accounts or external services | Android upload key; Apple account and signing; Play Console; Firebase project; hosting the privacy policy |

## What I need from you (short list)
1. Confirm you will review videos yourself in the Lesson library (I will not approve any); tell me when you have reviewed some and which counts to record.
2. Decide: online features in release 1 now (needs items 7-10) or ship with the gate closed and open it in an update. **Recommendation: ship closed.**
3. Decide: Education category first (recommended) or Kids Category.
4. Give me, only when you have them: the export-compliance answer (I will then set `ITSAppUsesNonExemptEncryption`), the publisher/support e-mail and privacy-policy URL for the listing and policy text (I will not invent them).
5. Run the device guides on one small phone, one tablet and one iPhone/iPad and send the report form.
6. Approve or reject the security proposals S3, S4 (rules edits), S5, S6, S7 and the account-deletion function (nothing will be changed or deployed without your approval).

## Security phase update (2026-10-31)
Remediation matrix: `docs/SECURITY_REMEDIATION_MATRIX.md`. Backend guide: `docs/FIREBASE_BACKEND_SETUP_GUIDE.md`. Device plans: `docs/REAL_DEVICE_TEST_PLAN_BY_DEVICE.md`.
### Prioritized remaining work
| Priority | Item | Needs |
|---|---|---|
| P0 (only if online ships) | S1 account deletion: deploy and test the drafted function, add the client screen (`cloud_functions` package) | Firebase project, Blaze billing, your package approval and data policy |
| P0 (only if online ships) | S2 teacher approval and S3, S4 rules: review, publish, flip `kTeachersNeedOwnerApproval`, define your approval routine | you |
| P0 (only if online ships) | S5 retention deployment (or TTL); S6 App Check | Blaze, Play/Apple accounts, package approval |
| P1 (only if online ships) | S7 TURN service and credential function; S8-S10 console settings (e-mail templates, enumeration protection) | provider, billing |
| P0 (always) | real-device rounds by device type, above all the **player containment** and permission prompts | devices |
| P0 (always) | Android signed AAB, Apple archive, accounts, privacy policy URL, export-compliance answer | you |
| P0 (always) | review of the videos you want in the starting list | you |
New findings this phase: the in-memory family demo could be enabled in a release build (fixed); the sign-in text and two Parent-settings subtitles were misleading (fixed); a failure other than a wrong password escaped the sign-in screen (fixed); iOS may keep the parent PIN hash in the Keychain after a reinstall (to be checked on a device, `MANUAL_TESTS.md`).
### What I can still do in code without you
Little: the remaining items need accounts, packages, billing, devices or your decisions. Next safe engineering steps would be a local "Delete my account" screen shell wired to the gate (needs the package approval to be useful) and unifying small UI debt.

## Final automatic results
See `docs/MASTER_PROJECT_STATUS.md` (final run of `tool/release_check.sh` after the last code change).

## Offline Release 1 audit result (verified locally; details in docs/OFFLINE_RELEASE_AUDIT.md)
**Verified by running them here:** `flutter test` 1365 passed; `flutter analyze` 0 errors, 5 info/warning left on purpose; rules emulator suites 67 + 6 + 5 passed; `tool/release_check.sh` passed. Online entry points: first-screen accounts door hidden while the gate is closed; remaining Parent-settings tiles lead to a "not part of this version" screen. 157 videos unverified, 0 audio items approved (250 device voice, 110 silent). `cloud_functions` / `firebase_app_check` absent.

**Needs real devices:** Android and iOS builds; video playback and `safe_player` containment (round E); dictation permission flow; device TTS quality in Arabic; layouts on phones/tablets; screen readers; printing.
**Needs your accounts:** Apple team and signing; Android upload key and `key.properties`; Play Console / App Store Connect forms and listings; (later) Firebase project, App Check, TURN, function deployment.
**Needs legal review:** privacy policy, Kids-category/COPPA/GDPR-K treatment, export compliance, store disclosures.
**Needs your approval:** each video (157); each audio item; decide whether to also drop MODIFY_AUDIO_SETTINGS; accept device TTS as the Release 1 voice; publishing S2-S4 rules (online phase only); commit and push.

## Final permission cleanup (Release 1, offline)
- **Removed:** Android `CAMERA`, the two `android.hardware.camera*` uses-feature lines, `CHANGE_NETWORK_STATE`; iOS `NSCameraUsageDescription`. Reason: the camera is used only by video calls (gated off) and gallery picking uses `ImageSource.gallery`; no plugin in `pubspec.yaml` declares either permission in its own manifest (checked in the pub cache), so nothing offline depends on them.
- **Kept:** `INTERNET` (YouTube player and thumbnails), `ACCESS_NETWORK_STATE`, `RECORD_AUDIO` + iOS `NSMicrophoneUsageDescription`/`NSSpeechRecognitionUsageDescription` (parent dictation, `speech_to_text`, on-device), `MODIFY_AUDIO_SETTINGS` (not asked to be removed; probably not needed offline, confirm on a build). Android 11+ speech recognizer `<queries>` entry is supplied by the plugin.
- **iOS risk (unverified):** `flutter_webrtc` is still linked and contains camera APIs. App Store Connect may report ITMS-90683 (missing purpose string). If so, restore `NSCameraUsageDescription` (text in STORE_PRIVACY_DISCLOSURES section 7) or remove the unused package in a later approved change.
- **Silent items (documented, unchanged):** 110 isolated sounds have no audio at all - Arabic letter sounds (84) and English phonics (26); the screen shows the text only. 250 items speak with the device voice; 0 of 360 approved.
- Dictation code (`lib/assistant/dictation.dart`) was not touched; its permission prompt is unchanged. Not verified on a device.
