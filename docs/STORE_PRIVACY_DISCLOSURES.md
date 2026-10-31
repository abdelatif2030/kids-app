# Store privacy disclosures and child-safety requirements (Google Play and Apple)

Draft answers. Latest owner decision: **Release 1 is offline; every online feature is gated OFF** (earlier 2026-10-31 text saying "intended ON" is superseded; see `docs/RELEASE_1_DECISIONS.md`). Camera and microphone permissions are still declared pending the decision in `docs/OFFLINE_RELEASE_AUDIT.md` section 3. **The online release gate is closed**, so these answers describe the build as it behaves now; section 6 lists what changes when the gate opens. They are based on the code, not on legal advice; the owner must read each question in the console as worded on the day and have the final text checked. Nothing has been submitted.

## 1. What the default build does with data
| Data | Where | Leaves the device? |
|---|---|---|
| Child nickname, age, progress, drawings, notes, settings | `shared_preferences` on the device (Android backup disabled) | No |
| Parent PIN (hashed with salt) | Keychain / Keystore via secure storage | No |
| Optional child photo | device only, parent consent switch | No |
| Videos | YouTube's official player loads the video; thumbnails come from `img.youtube.com` | Yes: requests to YouTube/Google when a child watches an approved video or sees its thumbnail (IP address and the video id). No account, no app identifier is sent by the app. |
| Speech dictation (parent notes) | on-device recognizer requested | No (if the on-device pack is missing the feature says it is unavailable) |
| Plan assistant AI | OFF by default; no endpoint in the build | No |
| Analytics, advertising, crash reporting SDKs | none | No |
| Account, e-mail, chat, calls | online features OFF | No |

## 2. Google Play Data safety (default build)
- Data collected: **none** by the app. Data shared: **none** by the app (YouTube playback is the user's connection to YouTube; mention it in the policy and the description).
- Encrypted in transit: yes (HTTPS). Deletion: the parent can delete a child or all data inside the app.
- Permissions declared (Release 1, offline): INTERNET, RECORD_AUDIO (parent dictation only, requested when the dictation button is pressed), MODIFY_AUDIO_SETTINGS, ACCESS_NETWORK_STATE. **CAMERA and CHANGE_NETWORK_STATE were removed** (owner decision after the offline audit; nothing offline uses them). Re-add CAMERA when video calls are enabled in the online phase.
- **Families / target audience:** declare ages 5 and under and 6-8 as applicable (the product is 1-6; Play may offer "5 and under" and "6-8"). No ads; no SDK that is not approved for children; YouTube embedded player: follow the YouTube API Services terms and the Families policy on embedded content.
- Content rating questionnaire: no violence, no purchases, no user-to-user content in the default build.
- Privacy policy URL: required; text in `docs/PRIVACY_POLICY_DRAFT.md` (needs publisher name, contact, legal review, and a hosted page).
- Account deletion section: not applicable while no account can be created. **Becomes mandatory if the online features are enabled** (see `docs/FIREBASE_AND_ACCOUNTS.md`).

## 3. Apple App Privacy ("nutrition label") and review (default build)
- Data collection: **Data Not Collected** is the honest answer for the default build; tracking: **No**. Add `PrivacyInfo.xcprivacy` to the Xcode project (`docs/IOS_RELEASE.md`).
- Usage strings present: camera, microphone, speech recognition. Explain them in the review notes ("optional, off in this release").
- Age rating: the questionnaire will give 4+; choosing the **Kids Category** (5 and under / 6-8) adds rules: no third-party analytics/ads, no links out without a parental gate, no external purchase. The YouTube web player is third-party web content; this is the main risk for Kids Category review. Decision for the owner (A8).
- Parental gate: the parent area uses a PIN (and a multiplication question before the PIN is set). Apple's parental-gate expectation applies to links out and purchases; the app has neither.
- Export compliance (encryption): owner's decision (A9); not set in `Info.plist`.
- Sign in with Apple: not required (no third-party login).

## 4. Child-safety requirements checked in the product
| Requirement | How it is met | Evidence |
|---|---|---|
| No ads, no tracking | none present | `pubspec.yaml`, tests, manifests |
| No unrestricted content | a child sees only parent-approved videos; no search | `test/lessons_test.dart` |
| No external links from child screens | none; added lesson links are parsed to an id and never opened | tests |
| Parent area protected | PIN, 5 tries then 30 s lock | earlier tests |
| Minimal data | only nickname and age; no real name, location or contacts | privacy review |
| Time control | daily limit, quiet hours, gentle rest screen | tests |
| Data deletion/export | per child and all | `test/new_features_privacy_test.dart` |
| No chat or contact for children | default build has none; family chat (adults approve relatives, no media/links) only if enabled | `docs/FAMILY_CHAT_DESIGN.md` |

## 5. Privacy-policy points still to confirm
Publisher identity and contact; hosting URL; the YouTube/Google statement; retention (device only); children's rights and the parent's controls; changes when online features or push notifications are added.

## 6. When the online gate opens (answers CHANGE)
| Data | Collected | Purpose | Linked to user | Notes |
|---|---|---|---|---|
| E-mail address | yes (accounts) | App functionality | yes | Firebase Authentication |
| Name (display name of the adult) | yes | App functionality | yes | |
| User content: messages, voice messages (audio), child nickname inside the family | yes | App functionality | yes | audio kept up to 14 days (client-driven; TTL proposal in the security review) |
| Audio/video during calls | transmitted device-to-device, not stored by the app | App functionality | n/a | STUN servers see network addresses; no TURN |
| Teacher profile data, CV, photo | yes (teachers only) | App functionality | yes | visible to other signed-in users |
| Identifiers, usage, location, contacts, purchases | no | | | |
| Tracking | no | | | |
Required before opening: privacy-policy update, **account deletion in the app**, App Privacy / Data safety answers redone, privacy manifest `NSPrivacyCollectedDataTypes` updated, review of the Families policy for communication features.

## 7. Camera and microphone (kept by decision)
**Offline Release 1 facts (verified in code):** the camera is used ONLY by video calls (`lib/family/call_engine.dart`), which are unreachable while the gate is off; photo choosing uses the gallery only. The microphone is used by parent dictation (speech recognition), which does work offline-release. Only the dictation text below applies in Release 1; the call/voice-message wording applies when online features are enabled.
Release 1: the Android CAMERA permission, its two camera uses-feature lines and the iOS `NSCameraUsageDescription` are removed; the camera is not used. Declared: Android RECORD_AUDIO; iOS `NSMicrophoneUsageDescription` and `NSSpeechRecognitionUsageDescription`, both for parent dictation on the device (nothing recorded, stored or sent). Requested only when the dictation button is pressed. Denial: dictation reports it is unavailable and the parent can type; the rest of the app and the narration are unaffected. Voice messages and calls (online, gate closed) would need the permissions and strings re-added. **iOS caveat (unverified, needs a Mac build):** `flutter_webrtc` is still linked and contains camera APIs; if App Store Connect rejects the upload with ITMS-90683 (missing purpose string), restore `NSCameraUsageDescription` with the accurate text "The camera is used only for video calls with a relative the parent approved. Nothing is recorded or stored." or remove the unused package in a later, approved change.
