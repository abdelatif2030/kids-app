# Online release gate

`lib/online_gate.dart`: the online features start only when ALL conditions are true. Today none of the three is satisfied, so the gate is closed (`lastOnlineGate`) and the app never initialises Firebase (`initFirebase()` returns first; a test checks the order).

| Condition | Where | Today | Evidence needed to open it |
|---|---|---|---|
| Real Firebase configuration | `lib/firebase_options.dart` is no longer `REPLACE_ME` (`firebaseConfigured`) | closed | You create the Firebase project and run `flutterfire configure` (adds your keys; never invented) |
| `kAccountDeletionReady = true` | `online_gate.dart` | closed | In-app account deletion that erases the user's records exists and is tested end to end against the real project (design: `docs/ACCOUNT_DELETION_DESIGN.md`) |
| `kBackendVerified = true` | `online_gate.dart` | closed | You reviewed and published `firestore.rules`; `rules_test` passes; the family, call and teacher flows were tested on two real phones against the real project; App Check decision made; retention (14-day voice, 24-hour call records) enforced server-side or accepted in writing |

Step-by-step instructions for each condition: `docs/FIREBASE_BACKEND_SETUP_GUIDE.md`. Findings and their status: `docs/SECURITY_REMEDIATION_MATRIX.md`.

Also required by the store forms before opening: the privacy policy, Data-safety/App-privacy answers and the privacy manifest `NSPrivacyCollectedDataTypes` updated for the data of the enabled features (`docs/STORE_PRIVACY_DISCLOSURES.md`).

Flipping a constant without the evidence defeats the purpose of the gate. `test/release_config_test.dart` and `test/online_release_gate_test.dart` fail if the constants or the order of the checks in `initFirebase()` change, so a change must be deliberate and visible in review.
