# Production notes and limits

This app is a working prototype. Everything below is NOT done and must be handled before a public release.

## What is real today
- All child data (profiles, attempts, skill events, watch history, notes) is stored on the device only (shared_preferences). The parent PIN is salted SHA-256 in secure storage.
- "Personalization" is rule based (`lib/journey/recommender.dart`); no AI or server is involved.
- The content admin screen edits local data on one device. It is not protected beyond the parent PIN and is a developer/owner tool.

## Before release
1. **Consent and law**: children's privacy rules (COPPA, GDPR-K, local law), a published privacy policy, and Google Play Families Policy declarations. Review the data safety form with a lawyer.
2. **Accounts and backend**: there is no sync or backup; uninstalling loses everything. A backend needs parent authentication, encrypted storage, deletion on request, and server-side admin roles.
3. **Admin**: move content management to a server with real roles and audit; do not ship the local admin to children's devices.
4. **Teachers (Firebase)**: profiles appear without vetting (owner decision). Add identity checks, report handling, and a moderation process; the security rules are untested against the emulator.
5. **Videos**: every ID in `assets/videos.json` came from web search and has not been watched or embed-checked. Review each one. YouTube's own player collects data under its terms; disclose that in the privacy policy.
6. **Content**: the built-in questions are a small seed set; have a teacher review the Arabic text, levels and ages.
7. **Android**: build, signing, screen pinning (lock mode) and voice commands are not done; the Android build was never run in this environment.
8. **Accessibility**: tested with text scale 1.6, 320 px width and keyboard focus in widget tests; not tested with a real screen reader.
9. **Backups and monitoring**: none. Do not add analytics for the child.
