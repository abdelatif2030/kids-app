# Firebase, sign-in, notifications and platform dependencies (release review)

Reviewed by reading the project files. Nothing was configured, published or contacted; **no Firebase rules, project settings or backend were touched**.

## 1. Firebase today
| Item | State |
|---|---|
| Online release gate (`lib/online_gate.dart`, `docs/ONLINE_RELEASE_GATE.md`) | owner decision: online ON; gate **CLOSED** (no real Firebase configuration, account deletion missing, backend unverified): the app never contacts Firebase; teacher and family screens say "Not available in this version yet" |
| `lib/firebase_options.dart` | placeholders `REPLACE_ME` (test checks no real key is present) |
| Android `google-services.json` / Google Services Gradle plugin | absent / not applied |
| iOS `GoogleService-Info.plist` | absent |
| `firestore.rules` and `rules_test/` | in the repository, emulator-tested earlier; **never published by me**; publishing is your action |
| Cloud Storage | not used (free plan) |

### To switch the online features ON (needs YOUR Firebase project and approval; not done)
1. Create a Firebase project (the free Spark plan is what the code was designed for); add an Android app with application id `com.rehlaty.app` and an iOS app with the **confirmed** bundle identifier.
2. Run `flutterfire configure` (writes `lib/firebase_options.dart`; the Dart-only setup works without `google-services.json` / `GoogleService-Info.plist`, but you may also add them).
3. Enable **Authentication -> Email/Password**. Add **App Check** (Play Integrity / App Attest / DeviceCheck) before opening the service to the public (recommended; not coded).
4. Review and **publish `firestore.rules` yourself** in the console or with the Firebase CLI; run `rules_test` against the emulator first. I will not change or publish them without your approval.
5. Make the gate conditions true with evidence (`docs/ONLINE_RELEASE_GATE.md`): the options file is real after `flutterfire configure`; `kAccountDeletionReady` after the deletion function exists and is tested; `kBackendVerified` after your rules review and the two-phone test; then rebuild and re-do the privacy answers (`docs/STORE_PRIVACY_DISCLOSURES.md`).
6. **Account deletion (blocker for enabling):** Apple (guideline 5.1.1(v)) and Google Play both require that people who create an account in the app can delete that account and its data from inside the app. The rules intentionally forbid most deletes (bookings, messages, reviews are immutable), and there is no delete-account code. A real solution needs a backend design (for example a Cloud Function that erases or anonymises a user's records) and a rules decision. This needs your approval and a Firebase project; not built.
7. Childhood data: children have no accounts; the only account holders are parents, teachers and invited relatives (adults).

## 2. Google and Apple sign-in
- **Not implemented.** The sign-in screen shows "Continue with Google" and "Continue with Apple" **disabled** with an honest note. No `google_sign_in` or `sign_in_with_apple` package is in `pubspec.yaml`.
- To add Google sign-in you would need: the OAuth client ids from your Firebase/Google Cloud project (Android needs the SHA-1/SHA-256 of the signing keys; iOS needs the reversed client id URL scheme), the packages (your approval), and **Sign in with Apple as well** (Apple requires it whenever another third-party sign-in is offered).
- To add Sign in with Apple you would need: an Apple Developer account, the "Sign in with Apple" capability on the App ID, a Services ID and key for the Firebase side, and the capability added in Xcode.
- Neither is required for the first release: e-mail/password is enough, and Apple's rule does not apply while no third-party login exists.

## 3. Notifications
- **No push notifications.** There is no `firebase_messaging` or local-notification package, no notification permission and no APNs/FCM setup. The "notification center" is inside the app and is built from real events on the device.
- Adding push later would need: FCM/APNs keys, the Push Notifications capability (iOS) and the `POST_NOTIFICATIONS` permission (Android 13+), a consent design for children's apps, and updated store privacy answers.
- The planned-day Family Time reminder is an in-app notification only; it does not wake the device.

## 4. Platform-specific dependencies (what each needs per platform)
| Package | Android | iOS | Note |
|---|---|---|---|
| `youtube_player_iframe` | WebView, INTERNET | WKWebView | official player; needs real-device test |
| `flutter_tts` | uses the installed TTS engine | AVSpeech | Arabic voice must be installed on the phone |
| `just_audio` | ExoPlayer | AVPlayer | bundled nature sounds only |
| `speech_to_text` | RecognitionService (queries block in manifest), RECORD_AUDIO | Speech + microphone strings (present) | called with `onDevice: true`; if no on-device pack exists dictation reports it is unavailable instead of sending audio away |
| `record` | RECORD_AUDIO | microphone string (present) | only for voice messages when online features are on |
| `flutter_webrtc` | needs CAMERA (video calls) and RECORD_AUDIO when online features are enabled; the plugin itself declares none (verified in its manifest). CAMERA and CHANGE_NETWORK_STATE were removed from Release 1 and must be re-added with the camera strings for the online phase | iOS `NSCameraUsageDescription` removed for Release 1 (re-add for calls; see STORE_PRIVACY_DISCLOSURES section 7 for the ITMS-90683 caveat); may show a local-network prompt on some networks (test) | calls need online features and STUN/TURN |
| `image_picker`, `file_picker` | system pickers | PHPicker (no photo permission for picking) | |
| `printing`, `pdf` | print service | AirPrint | |
| `flutter_secure_storage` | Keystore (`allowBackup=false` so keys are not restored on another phone) | Keychain | the parent PIN hash lives here |
| `firebase_*` | needs minSdk 23+ (project 24) | iOS 13+ (project 15) | inactive while Firebase is off, but still compiled in |
| `http` | INTERNET | ATS (HTTPS only) | used only by the optional plan-assistant, off by default and inert without a `REHLATY_AI_ENDPOINT` build define |
Because the Firebase and WebRTC plugins are compiled into the app even when the features are off, the **store privacy forms still have to describe what the code CAN do** if it is switched on in a later update, and the declared permissions (camera, microphone) will be visible to reviewers. See decision A4 in `docs/RELEASE_READINESS.md`.

## 5. Languages, direction, landscape, offline (kept)
Arabic and English with RTL/LTR, landscape lock, and offline use were not changed by release preparation; they are covered by automated tests (`responsive_matrix_test`, localization tests, offline tests) and need the device rounds in `docs/REAL_DEVICE_TEST_GUIDE.md`.

## Release 1 update (2026-10-31)
The owner wants online features ON in release 1. The full inventory is `docs/ONLINE_FEATURES_INVENTORY.md`, the security review `docs/ONLINE_SECURITY_REVIEW.md` (67 local emulator rules tests pass, including cross-family and teacher-access isolation; nothing was tested on a real project), the deletion design `docs/ACCOUNT_DELETION_DESIGN.md` (not implemented), the gate `docs/ONLINE_RELEASE_GATE.md`. Rules were **not** changed or published. Authentication failures (wrong password, no network, unexpected errors) show a message and never crash (tests). With the gate closed, no sign-in screen is offered.

## Update 2026-10-31 (security phase)
The exact services, configuration, rules, Cloud Functions, billing implications and verification steps are in `docs/FIREBASE_BACKEND_SETUP_GUIDE.md`. Draft rules for S2-S4: `rules_proposed/`. Draft functions: `functions/`. Password reset and a verification e-mail now exist in the client (not run against Firebase). The relay-server hook for calls is `iceServersLoader` (STUN only today).


## Google sign-in (added)
Package `google_sign_in` (approved by the owner). The button on the sign-in screen works once you set up, in your own Firebase project:
1. Firebase console -> Authentication -> Sign-in method -> **Google** -> enable, choose a support e-mail.
2. **Android:** add your debug and release SHA-1 and SHA-256 fingerprints in Project settings, download the new `google-services.json` (it must contain an OAuth client).
3. **iOS:** download `GoogleService-Info.plist` and add its `REVERSED_CLIENT_ID` as a URL scheme in the Xcode project (needs a Mac).
4. **Web:** add your domain (for example `localhost` for testing) under Authentication -> Settings -> Authorized domains. The web build uses Firebase's own Google pop-up.
A new Google account gets the role chosen under "New account" (parent or teacher); an existing account keeps its role. Teachers still start `pending` and are approved by you in the console. Not tested against a real Google account or project.
