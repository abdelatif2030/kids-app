# Firebase / backend setup guide (for the owner; nothing here has been done)

Everything in this guide needs YOUR Google account, billing and approval. I did not create a project, log in, deploy, publish rules or buy anything, and I did not invent any key or identifier. Commands are examples for you to run on your own computer; **replace the placeholders and read each step first**. Check prices and quotas on Google's official pages on the day: they change.

## 0. Decide first
1. Release 1 with the online gate **closed** (recommended): skip this guide until you are ready; nothing here is needed to publish the offline app.
2. Release 1 with online features: do sections 1-9 in order. The gate (`docs/ONLINE_RELEASE_GATE.md`) opens only when its three conditions are true with evidence.
3. Decisions you must make (write them down): region (permanent), whether teachers are listed after your approval (S2), the policy for bookings/reviews when an account is deleted (anonymise or delete), TURN provider, who receives abuse reports and how quickly.

## 1. Services and what each is for
| Service | Used for | Billing |
|---|---|---|
| Firebase project (Google Cloud project behind it) | everything below | the project itself is free; billing account needed for functions |
| **Authentication** (Email/Password) | accounts for parents, teachers, relatives | free tier for e-mail/password (check limits) |
| **Cloud Firestore** (Native mode) | all online data; rules in `firestore.rules` | free daily quotas; beyond that pay-as-you-go (reads, writes, deletes, storage, network) |
| **Cloud Functions 2nd gen** + Artifact Registry + Cloud Build | `deleteMyAccount`, `purgeFamilyData`, later `getIceServers` | **requires the Blaze (pay-as-you-go) plan with a billing account/card**; free monthly quotas exist but usage beyond them is charged |
| **Cloud Scheduler** | triggers `purgeFamilyData` hourly | part of the scheduled-function setup on Blaze; a small number of jobs is free-tier in many accounts (verify) |
| **App Check** | rejects calls from apps that are not yours (Play Integrity, App Attest/DeviceCheck) | free; needs Play/Apple developer setup |
| **TURN relay** (outside Firebase) | calls over restrictive networks (S7) | paid per use or a server you run; the largest uncertain cost |
| Secret Manager (only if your TURN provider gives a shared secret) | stores that secret for the function | small per-secret and per-access fees |
| Cloud Storage | **not used** (recordings and files are small Firestore documents) | none |
| Cloud Messaging / push | **not used** | none |
| Analytics / Crashlytics | **not used** (no analytics SDK by project rule) | none |
**Billing implication:** moving to Blaze means a card is attached and usage over the free quotas is charged. Before deploying anything: create a **budget with alerts** (for example at small fixed amounts you choose) in Google Cloud Billing; alerts do not stop spending by themselves. Voice messages are stored as documents (up to about 420 KB each) so storage and reads grow with use; the 14-day purge limits it.

## 2. Create the project (you)
1. https://console.firebase.google.com -> Add project (name it yourself). Turn **off** Google Analytics for the project (not used).
2. Project settings -> add an **Android** app with package name `com.rehlaty.app` and an **iOS** app with bundle id `com.rehlaty.app`. Add the SHA-1/SHA-256 of your upload and app-signing keys later (needed for App Check Play Integrity and any Google sign-in).
3. Build -> **Firestore Database** -> Create database in **Native mode**. **Choose the region carefully: it cannot be changed.** Pick one close to your users and acceptable for children's data (for Egypt/Gulf users a European or Middle-East region is typical); this is your decision.
4. Build -> **Authentication** -> Sign-in method: enable **Email/Password** only. Settings: turn on **e-mail enumeration protection**; edit the e-mail templates (verification and password reset) in Arabic and English; set the sender name; add authorized domains only for what you own.
5. Install tools on your computer: Node.js 20, `npm i -g firebase-tools`, FlutterFire CLI (`dart pub global activate flutterfire_cli`).
6. `firebase login` (browser, your account). Then in the project folder:
   ```
   flutterfire configure --project=<your-project-id> --platforms=android,ios --android-package-name=com.rehlaty.app --ios-bundle-id=com.rehlaty.app
   ```
   This overwrites `lib/firebase_options.dart` with your real (public) client config and adds platform files. Public client keys are not secrets, but never commit service-account JSON files or private keys. After this the first gate condition (`firebaseConfigured`) is satisfied.

## 3. Rules (you review, then publish)
1. Read `docs/ONLINE_SECURITY_REVIEW.md` and `docs/SECURITY_REMEDIATION_MATRIX.md`.
2. Decide about S2-S4. If you accept them: `diff firestore.rules rules_proposed/firestore.rules.proposed`, copy the proposed file over `firestore.rules`, set `kTeachersNeedOwnerApproval = true` in `lib/teachers_models.dart`, update the two expectations in `rules_test/rules.test.mjs`, and re-run `cd rules_test && npm run test:all` until everything passes.
3. Publish yourself: `firebase deploy --only firestore:rules --project <id>` (or paste into Console -> Firestore -> Rules). Keep the previous version noted for rollback.
4. Indexes: the app's queries (per-thread messages, bookings by teacher/parent, requests) may ask for composite indexes; Firestore prints a console link the first time a query needs one. Create them from those links and record them in `firestore.indexes.json` (`firebase firestore:indexes`).
5. **Verification:** with two real accounts of each role (use throw-away e-mail addresses), repeat `docs/ONLINE_FEATURES_INVENTORY.md` scenarios: a parent cannot read another family; a teacher cannot read any family document; a stranger cannot join a call; a pending teacher is invisible to parents; a CV is not readable by a relative.

## 4. Cloud Functions (S1 account deletion, S5 retention)
Files: `functions/` (`src/deletion.js`, `src/retention.js` tested on the local emulator; `index.js` never run).
1. `cd functions && npm install` (needs network). Read `index.js` once: it deletes data with administrator rights.
2. Upgrade to **Blaze** in the console; set the budget alert (section 1).
3. Local rehearsal with the emulators: `firebase emulators:start --only functions,firestore,auth` and call `deleteMyAccount` from a test script with a throw-away user. Fix anything the real Admin SDK does differently from the test adapter (the adapter in `index.js` is the untested part).
4. Deploy: `firebase deploy --only functions --project <id>`. Note the functions region and set the app's callable to the same region.
5. Add the client side: approve adding the `cloud_functions` package to `pubspec.yaml`, then a "Delete my account" screen (parent area and relative/teacher home) that asks for the password again, calls `deleteMyAccount`, signs out and clears local session data. (The child's local data is deleted separately by the existing delete controls.) I will write it once you approve the package.
6. **Verification:** delete a throw-away parent, relative and teacher on the real project and check in the console that their documents are gone, other families' documents are untouched, and the Authentication user is gone. Only then set `kAccountDeletionReady = true`.
7. Retention: `purgeFamilyData` runs hourly; check the logs after a day with a seeded old voice document. Alternative (instead of the function): Firestore **TTL policy** on an `expireAt` field (needs client and rules changes; ask me).

## 5. App Check (S6)
1. Approve adding `firebase_app_check`. Register the Android app with **Play Integrity** (needs the app on Google Play, at least in internal testing, and the signing SHA-256) and the iOS app with **App Attest** (with DeviceCheck fallback; needs the Apple Team and the capability enabled in Xcode).
2. Use **debug tokens** (Console -> App Check -> Apps -> Manage debug tokens) on your own test devices; never ship debug tokens.
3. Turn on **monitoring** first, look at the unverified-request percentage for a few days, then **Enforce** for Firestore and Authentication; the draft callable already enforces it.
4. Verification: a request from a script with your public config but no token is rejected after enforcement; the app on a real device still works.

## 6. TURN (S7)
1. Choose: a managed TURN service (several providers sell per-minute/GB relay with credential APIs) or run your own `coturn` server on a small VM (you then maintain security, certificates and costs).
2. Write a callable `getIceServers` that returns short-lived credentials (never put a shared secret or long-lived password in the app); store any secret in Secret Manager.
3. In the app, replace `iceServersLoader` (`lib/family/call_models.dart`) with a function that calls it and set `kTurnConfigured = true`.
4. Verification: a call between a phone on Wi-Fi and a phone on mobile data (and one behind a strict network) connects; check the provider's bill after a day.

## 7. Moderation and operations (you)
- A routine to read the `reports` and `reviewReports` collections (console only) and to approve or suspend teachers (`teachers/{uid}.status` and the two verification badges).
- Monitoring: Firestore usage, Functions errors, budget alerts, Authentication abuse (create/delete spikes).
- Backups: enable Firestore scheduled backups if you want a recovery option (billing applies); note that restoring would bring back deleted accounts, so keep a deletion log (no personal data) to re-apply.
- Privacy: update the policy and store forms (`docs/STORE_PRIVACY_DISCLOSURES.md`), including Google as a processor and the region.

## 8. Open the gate
Only after sections 2, 3, 4 (deletion verified), 5 and the two-phone test of calls and messages:
1. `lib/online_gate.dart`: `kAccountDeletionReady = true`, `kBackendVerified = true` (and write the evidence in `docs/ONLINE_RELEASE_GATE.md`).
2. Update `ios/Runner/PrivacyInfo.xcprivacy` (`NSPrivacyCollectedDataTypes`), the Data safety form and the App Privacy answers.
3. Run `tool/release_check.sh`; the tests that pin the gate constants will fail on purpose: update them in the same change so the review shows the decision.
4. Run `docs/REAL_DEVICE_TEST_PLAN_BY_DEVICE.md` section "Online features" on every device type.

## 9. What stays out of scope
Payments, push notifications, Google/Apple sign-in, analytics, Cloud Storage. Each would add its own review.
