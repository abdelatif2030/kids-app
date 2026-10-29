# Security & privacy audit (2026-10-29, branch feature/rehlaty)

Method: local code inspection, the Firestore rules emulator suite (`rules_test`, 59 tests) and the Flutter test suite. No production data, real
accounts, network attacks or penetration tests. Nothing here is a claim of legal compliance or of end-to-end encryption.

## Confirmed findings
| # | Severity | Finding (evidence) | Status |
|---|---|---|---|
| S1 | Medium | The parent PIN was stored as one round of salted SHA-256 (`lib/parent_settings.dart`). If the secure-storage value were extracted, a 4–6 digit PIN falls in milliseconds. | **Fixed**: PBKDF2-HMAC-SHA256, 20 000 iterations (reference vectors in `test/pin_security_test.dart`), constant-time compare; old PINs still work and are upgraded on the first correct entry. Short PINs remain a small space: the 5-tries/30 s lockout is the main defence. |
| S2 | Medium (privacy) | A voice message recording was written to the phone's temp folder and never deleted after sending (`lib/family/voice_io.dart`, `stop()`). | **Fixed**: the file is deleted as soon as its bytes are read. Not testable headlessly (needs the `record` plugin); manual check R1 below. |
| S3 | Low–Medium | **FIXED 2026-10-29 (owner approved):** legacy invite-code rules (`invites`, the `relatives` create-by-code branch) are still active in `firestore.rules`, and `createInvite`/redeem code still exists in `firebase_family_repository.dart`, although the UI uses e-mail requests. Any signed-in user who knows a code can read that invite. | **Fixed in the repo**: `invites` rules and the invite-code branch of `relatives` removed, `createInvite`/`joinWithCode` removed from the repositories, tests moved to the e-mail request flow, rules test checks codes no longer work (56/56). **The rules are not deployed: you must re-publish `firestore.rules`.** |
| S4 | Low | Call documents: either call party can set `accepted`/`declined`/`ended` in any order (rules `calls` update). No data exposure; the effect is a confusing call state. | Open (low). |
| S5 | Info | `firebase_options.dart` in the repo is a placeholder; no key files, keystores or `.env` are tracked (`git ls-files`). | OK |

## Verified OK (by tests or static check)
- No ads, analytics, crash-reporting or URL-launcher packages in `pubspec.yaml`; no `print`/`debugPrint` in `lib/` (grep), so message text is not logged by the app.
- Family data: rules require a signed-in user; messages/calls/voices are readable only by the parent (family id = uid) or the active relative named on the document; creation requires an active relative with the parent's switch on and the child in that relative's allowed children; only the callee may answer (emulator tests, 59/59).
- Chat text blocks links and e-mails in the rules (`chatBodyOk`), calls/voice/video are off by default per relative.
- Microphone/camera: camera is requested only for a video call; a denied microphone makes `CallController` leave the call with a failure state (`call_controller.dart` catch around `engine.init`) and `DeviceVoiceRecorder.start` returns false when permission is missing.
- Child photos stay in local storage and require the parent's consent switch; deletion flows remove them (`deleteOneChild`).

## Risks that cannot be verified from this code
- Firestore rules are the only server-side protection; they are emulator-tested, not reviewed by an independent party, and **have not been deployed by me**.
- WebRTC media uses the browser/native DTLS-SRTP defaults; signalling goes through Firestore; STUN only, no TURN. I make no end-to-end-encryption claim.
- Android manifest declares `RECORD_AUDIO`, `CAMERA`, `MODIFY_AUDIO_SETTINGS`, `CHANGE_NETWORK_STATE`, `ACCESS_NETWORK_STATE`, `INTERNET`. The last four are probably contributed by WebRTC; runtime prompts were not observed on a device.
- `android:allowBackup` is not set (Android default = backup allowed), so app data may be included in the user's Google backup. Fixed 2026-10-29 (owner approved): `android:allowBackup="false"` in the manifest (not built on Android here).
- Local data (shared_preferences) is not encrypted; only the PIN uses secure storage.
- Error messages from the teachers marketplace show `e.message` of the app's own exceptions, which are written in the app; raw Firebase errors are mapped in `firebase_repository.dart`. Not exhaustively checked.
- No block/report feature exists inside family chat (parent controls and removal exist). Proposal: a parent "pause this relative" switch already exists; a report button is not built.

## Manual checks still required
R1 After sending a voice message on a real phone, confirm no `rehlaty_voice_*.m4a` remains in the app cache. R2 Deny the microphone and the camera at the OS prompt and confirm the call ends politely. R3 Revoke the permission while in a call. R4 Two test accounts: confirm account B cannot read A's family documents (emulator tests cover rules; this checks the deployed rules). R5 Confirm the deployed rules equal the repo's.

## Actions needing your approval
Remove legacy invite-code rules and code (S3); set `allowBackup=false`; deploy rules; add TURN; any dependency change.
