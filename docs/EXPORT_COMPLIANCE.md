# Encryption and export compliance (Apple `ITSAppUsesNonExemptEncryption`, US export rules)

**Final answer: PENDING.** It cannot be established conclusively from the repository; it depends on legal interpretation and on the final plugin set. `ITSAppUsesNonExemptEncryption` is deliberately **not** set in `Info.plist`, so App Store Connect will ask at every upload. Do not guess; follow the steps at the end.

## Evidence from the code (what the app does)
| Use | Where | Kind |
|---|---|---|
| HTTPS to YouTube / `img.youtube.com`; HTTPS to Firebase/Google services if the online gate opens | OS networking (URLSession / Android networking), WebView, Firebase SDKs (gRPC over TLS; the Firebase iOS/Android SDKs ship their own TLS stack, BoringSSL) | standard TLS, not custom |
| WebRTC voice/video calls (only if the online gate opens) | `flutter_webrtc` bundles libwebrtc with BoringSSL: DTLS-SRTP, TLS to STUN | standard protocols, bundled implementation |
| Parent PIN | `crypto` package: **SHA-256 hash with a random salt** (`lib/parent_settings.dart`) | hashing, not encryption |
| PIN hash storage | `flutter_secure_storage` -> iOS Keychain / Android Keystore (OS-provided; the Android implementation encrypts with AES through OS APIs) | OS/standard library |
| App data | `shared_preferences` plain; no custom cipher, no key exchange, no encrypted file format of our own | none |
| Search in code for `encrypt`, `AES`, `cipher`, `RSA`, `HMAC` in `lib/` | none found except the SHA-256 PIN hash | no custom cryptography |

## What can be said and what cannot
- The app contains **no custom or proprietary cryptography** (found by reading and searching the code).
- It uses encryption through **standard OS APIs and bundled standard protocols** (TLS, DTLS-SRTP). Whether that is "exempt" under Apple's rule (encryption limited to standard protocols or OS-provided, used for authentication and secure communication) and under the US EAR is a legal determination. With the online gate closed, the only network use is HTTPS through the OS/WebView; with it open, bundled TLS/WebRTC stacks are added.
- Some countries (France, for example) have extra declarations for distribution; Apple's questionnaire covers them.

## What to do (owner)
1. Decide the first release's online state (gate closed or open); the answer can differ.
2. In App Store Connect answer the encryption questionnaire yourself. If you confirm exemption, you may then set `ITSAppUsesNonExemptEncryption` to `false` in `Info.plist` (a one-line change I can make once you confirm the answer).
3. Keep a copy of the answer and the date. If unsure, ask a person qualified in export compliance; I am not giving legal advice.
4. Re-answer when a plugin that adds cryptography is added or the online gate opens.
