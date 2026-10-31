# Account deletion: design (NOT implemented, NOT deployed)

Store requirement: if people can create an account in the app, they must be able to start deleting that account and its data inside the app (Apple App Review 5.1.1(v); Google Play account-deletion policy). Today **no account deletion exists**, and `firestore.rules` forbid most deletes. Nothing here has been built, deployed or tested. Child profiles are local and already deletable in the app (export/delete tested).

## What exists for an account (by role)
| Data | Location | Owner field | Current delete rule |
|---|---|---|---|
| Sign-in identity (e-mail, password hash) | Firebase Authentication | uid | client `currentUser.delete()` possible (needs recent login) |
| `users/{uid}` (role, name, user name pointer) | Firestore | uid | denied |
| `users/{uid}/families/{fid}` (relative's pointer) | Firestore | uid | allowed (own) |
| `usernames/{name}` (relative) | Firestore | uid field | denied |
| `teachers/{uid}`, `teacherFiles/{uid}` | Firestore | uid | denied |
| `portfolio/*` | Firestore | teacherUid | owner may delete |
| `slots/*` | Firestore | teacherUid | owner may delete when not booked |
| `bookings/*` (+ `messages`), `lessonReports`, `reviews`, `requests`, `proposals` | Firestore | parentUid / teacherUid | denied (immutable history) |
| `reports`, `reviewReports` | Firestore | reporter | denied (write-only) |
| `families/{parentUid}/relatives|messages|voices|calls|candidates` | Firestore | parent = family id | parent may delete messages, voices, calls, candidates; relatives' records not deletable |
| `connectRequests/*` | Firestore | familyId / toUid | denied |
| Cloud Storage | not used | | |

## What can be deleted automatically from the client (with current rules)
Own `users/{uid}/families/*`, own portfolio items, own free slots, a parent's messages/voices/calls/candidates, then the Authentication user. That leaves the profile, usernames, bookings, reviews, relatives, requests, proposals and CV behind, so the client alone is **not a complete deletion**.

## What needs a backend function (needs your approval)
A callable Cloud Function `deleteMyAccount` (Firebase Blaze plan) run with admin rights, after re-authentication, in this order:
1. Verify the caller (`request.auth.uid`) and a recent sign-in; write an audit stub (uid hash, date) with no personal data, if you decide you need one.
2. **Parent:** delete `families/{uid}/**` (messages, voices, calls + candidates, relatives), `connectRequests` where `familyId == uid`, `requests` and `proposals` where `parentUid == uid` (or anonymise), then decide the history of **bookings/reviews/lesson reports** (these contain the teacher's work and the parent's name): delete or anonymise `parentName`/`parentUid`.
3. **Relative:** delete `usernames/{name}`, `users/{uid}/families/*`, the `families/*/relatives/{uid}` records (this removes access at once), `connectRequests` addressed to them; leave messages in the parent's family (the parent owns them) but replace the relative's display name with "deleted account".
4. **Teacher:** delete `teachers/{uid}`, `teacherFiles/{uid}`, `portfolio` and open `slots`; cancel open bookings; anonymise completed bookings/reviews/reports; delete proposals.
5. Delete `users/{uid}` last, then the Authentication user.
6. Return a result; the app signs out and clears the local session. Local child data (on the device) is separate and removed by the app's own delete.
Retention to decide: legal/financial records (none today: no payments), abuse reports (`reports`: keep for a stated period or delete with the account).

## Order and dependencies
Relatives and requests must go before the family; access-granting records (`relatives`, `connectRequests`) before data; `users/{uid}` last because rules read it for the role; Authentication last.

## Tests that must exist before the gate can open
Emulator tests of the function (Firebase Functions emulator): each role leaves nothing readable by others; another user's data is untouched; partial failure is safe to retry; a signed-out or stale-session call is refused. Then a real-project test with throw-away accounts. **None exists.**

## Code written in this repository (2026-10-31; draft, not deployed)
- `functions/src/deletion.js` implements the order above for the three roles, with anonymisation of bookings/reviews/reports (`deleted` / `Deleted account`), freeing of slots, deletion of booking messages and lesson reports, and idempotent retry. `functions/index.js` wraps it in a callable that requires a sign-in within the last 5 minutes and App Check, then deletes the Authentication user (that last line has never run).
- Tested on the local Firestore emulator (`rules_test/functions_logic.test.mjs`): each role leaves nothing readable by others, other people's data is untouched, a second run is safe, an unknown or empty uid is handled.
- Not done: the Admin-SDK adapter on a real project; the Functions/Auth emulators; the client screen and the `cloud_functions` package (needs your approval); the deployment; the real-account test.

## Status
Design only. `kAccountDeletionReady` stays `false`. Do not claim that accounts can be deleted. Approvals needed from you: Blaze plan, function deployment, the anonymise-or-delete policy for bookings/reviews, retention of abuse reports.
