# Release 1 decisions (latest; supersede earlier conflicting ones)

1. **Scope: offline/local.** Every online feature (accounts, teacher service, family chat, calls, voice/video messages) stays gated OFF.
   `kOnlineFeaturesIntended = false` in `lib/online_gate.dart`. Code and data are kept for a later online phase. Online screens say
   "Not part of this version - planned for a later version" and offer no sign-in. Nothing leaves the device except YouTube playback
   and thumbnails for parent-approved videos.
2. **Deferred packages:** `cloud_functions` and `firebase_app_check` are NOT in `pubspec.yaml` (guarded by a test). They are required
   for the future online-activation phase (account deletion callable, App Check enforcement) and are added then, not before.
3. **Security rules S2-S4 applied to the local `firestore.rules` only (NOT published):**
   - S2: a new teacher profile must be created `pending`; a teacher can never change `status` (no self-approval, no lifting a suspension);
     slots and portfolio items need an approved teacher. Client mirror: `kTeachersNeedOwnerApproval`, `teacherStatusToWrite`.
   - S3: `teacherFiles` (CV) readable only by the owning teacher or a parent while the teacher is approved (relatives, other teachers: no).
   - S4: booking messages containing links, ".com/.net/.org", "@" or phone-like contact details are refused by rules and by the client.
   - Compatibility: already-approved teachers stay approved; old `pending` profiles are no longer promoted on re-save (owner approves in the
     console); innocent text containing ".com" is also refused. Rules must be reviewed and published by the owner together with the client,
     in the online phase.
4. **Not done / not claimed:** no rules published, no functions deployed, no production Firebase touched, no video approved (157 unreviewed),
   no commit/push, no store submission. Tests prove local behaviour and the local emulator only; no real device or backend was used.
5. **Camera:** the camera permission is declared (earlier owner decision) but unused while online features are off; microphone is used only
   for dictation if enabled. Reconsider before store submission (store forms must match actual use).

## Update (owner approvals after the offline audit)
- Package `google_sign_in` was added with the owner's approval (Google sign-in for parent/teacher accounts). It does nothing in Release 1: the sign-in screen is unreachable while the online gate is closed. Setup steps: `docs/FIREBASE_AND_ACCOUNTS.md`.
- `--dart-define=ONLINE_DEV=true` (debug/profile builds only) opens the online gate for development with the owner's own Firebase options; release builds ignore it.
- A development TURN relay can be passed with `TURN_URL`, `TURN_USERNAME`, `TURN_CREDENTIAL` (never committed, ignored in release): `docs/CALLS_SETUP.md`.
- Voice for Adam: no reusable voice exists (the video model made it). Candidate chosen for the owner to hear: ElevenLabs "Piku - Expressive Kid Character" (`EeQEodFZVtBkjtgK3HBc`). Nothing is generated, bundled or approved yet.
