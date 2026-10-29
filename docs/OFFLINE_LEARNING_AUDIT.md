# Offline learning audit (2026-10-29)

Findings are verified against the code (grep for network calls, bundled assets, storage). Source of truth in code: `lib/offline/capabilities.dart` (each entry carries its `evidence`).

| Feature | Offline? | Evidence |
|---|---|---|
| Learning games, creative studio, parent area, printables | Yes | no network calls; data in shared_preferences / bundled assets |
| Letters, vocabulary, stories (device voice) | Partly | text and pictures are local; spoken audio uses the phone's voice, which may need the language voice installed (not verified on a device); bundled nature sounds are local |
| Videos | No | YouTube IFrame; thumbnails from img.youtube.com |
| Family chat, voice messages, calls, teachers | No | Firebase / WebRTC |
| Web version after first load | Not verified | no service-worker test |

Implemented: `ConnectivityMonitor` (approximate check; no package, nothing sent about the child), `OfflineBanner` in the child shell (only when offline; says what still works), `OfflineGuideScreen` in Parent settings, call start explains "needs internet". Tests: `test/offline_test.dart` (11).
No cloud sync exists, so none is claimed: learning progress and creations live only on the device. No download manager exists, so optional downloads were not built. Unverified: what Firestore does with a chat message sent while offline (stated in the UI text). Not tested in real airplane mode.
