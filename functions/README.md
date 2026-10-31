# Draft Cloud Functions (NOT deployed)

- `src/deletion.js` - account deletion (S1/S11): `deleteAccountData(store, uid)` for parents, relatives and teachers.
- `src/retention.js` - server-enforced retention (S5): voice recordings 14 days, call records 24 hours.
- `index.js` - wiring with the Admin SDK: callable `deleteMyAccount` (App Check enforced, recent sign-in required) and scheduled `purgeFamilyData`.
Only `src/*.js` are tested (local Firestore emulator, `cd rules_test && npm run test:functions`, 5 tests). `index.js` and the Admin-SDK adapter have **never run**: `npm install` here, the Functions emulator, Blaze billing, deployment and a test with throw-away accounts are still to do (`docs/FIREBASE_BACKEND_SETUP_GUIDE.md`). The app has no client code that calls `deleteMyAccount` yet: it needs the `cloud_functions` package (needs your approval to add).
