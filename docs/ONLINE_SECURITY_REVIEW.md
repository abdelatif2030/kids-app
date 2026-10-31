# Online security review (static, plus local emulator tests)

**Scope:** `firestore.rules` (550 lines), the Firebase repositories and the call/voice code. **Method:** reading, plus 67 tests against the local Firestore emulator (`cd rules_test && npm test`; Java 17 + cached emulator, no network, no Firebase project involved). **Not done:** any test against a real project, App Check, penetration testing, load/abuse testing. **Rules were not changed or published.** Findings marked "proposal" need your approval.

## Status after the remediation phase (2026-10-31)
Full matrix with steps, tests and dependencies: `docs/SECURITY_REMEDIATION_MATRIX.md`. Production rules are **unchanged and unpublished**.
| # | Status now | Evidence (local only) |
|---|---|---|
| S1 | deletion logic written and emulator-tested for parent, relative and teacher; callable wrapper drafted; **no client, not deployed** | `functions_logic.test.mjs` (5) |
| S2 | proposed rules + client switch (`kTeachersNeedOwnerApproval`, off); **not published** | `rules_proposed.test.mjs` (4), `security_hardening_test` (3) |
| S3 | proposed rule (CV for its teacher and parents only); **not published** | `rules_proposed.test.mjs` (1) |
| S4 | **client fix live** (widened check + repository guard); server rule proposed, not published | `security_hardening_test` (3), `rules_proposed.test.mjs` (1) |
| S5 | retention logic written and emulator-tested; **not deployed** | `functions_logic.test.mjs` (1) |
| S6 | not implemented (needs a package, accounts, console) | none |
| S7 | hook for relay servers (`iceServersLoader`); **no TURN service** | `security_hardening_test` (2) |
| S8, S9 | open | none |
| S10 | password reset and verification e-mail implemented against the Firebase API; tested with a fake only | `security_hardening_test` (3) |
| S11 | part of the S1 draft | not tested (Auth emulator not run) |
Additional hole found and closed: the in-memory family demo could be switched on in a release build by a build flag (now impossible). Rules emulator results: current rules 67/67; proposed rules: the 6 new tests pass and the old suite gives 65/67 with exactly the 2 intended differences.

## What the rules do well (verified by emulator tests)
- Family data is under `families/{parentUid}`; only that parent, or a relative with an `active` record in that family, can read it. Tests: another parent, another family's active relative, a teacher account and signed-out users get nothing (messages, calls, call candidates, voice recordings, relatives, connect requests).
- A relative joins only by accepting a parent's request addressed to their user name, in one batch that marks the request accepted; nobody can add themselves. The parent alone pauses/removes a relative and switches calls, voice and video on per relative (all off by default); video needs calls.
- Calls: only an active relative with the switch on; only the callee can answer; outsiders cannot answer, end, add candidates or read.
- Messages: fixed kinds, size limits, no links/addresses in text, timestamps from the server, duplicates refused, never edited; only the parent deletes.
- Teacher/parent: bookings, booking messages, lesson reports, requests, proposals readable only by the people involved; teachers cannot lift a suspension or set verification badges; slots book atomically.
- Children have no accounts; the parent's device writes for the child.

## Findings and risks (not fixed: they need your decision)
| # | Severity | Finding | Proposal |
|---|---|---|---|
| S1 | **High (blocker)** | No way to delete an account or its records (rules forbid deletes of `users`, `teachers`, bookings, messages by their owners). Store policies require in-app deletion if accounts exist. | Backend design in `ACCOUNT_DELETION_DESIGN.md`; needs your approval, a Blaze-plan Cloud Function or a rules change. |
| S2 | High | Roles (`parent` / `teacher` / `relative`) are chosen by the user at sign-up and anyone can create unlimited accounts. A "teacher" is unvetted but becomes visible to all signed-in users immediately (owner decision 2026-10-28) and can reach parents through proposals and booking messages. | Keep the marketplace out of release 1 (the gate does), or add a manual approval step before listing. |
| S3 | Medium | Any signed-in user, including relatives, can read approved teacher profiles and the teacher's CV (name, phone/address if the teacher left them in it). | Restrict `teacherFiles` reads to parents/the teacher (`role() == 'parent'`). |
| S4 | Medium | Booking messages (parent-teacher) have no link filter (family chat does). A teacher could send a phishing link to a parent. | Add the same link pattern check to `bookings/{id}/messages`. |
| S5 | Medium | Voice recordings (base64 in Firestore) are cleaned after 14 days only by the parent's app when it runs; there is no server-side expiry. Call records and ICE candidates (network addresses) are cleaned after 24 hours the same way. | Add a Firestore TTL policy (needs your approval in the console) or a scheduled function. |
| S6 | Medium | No App Check: any client with the project's public config can call the API (rules still apply). | Enable App Check (Play Integrity, App Attest) before opening. |
| S7 | Medium | Calls use STUN only (Google STUN servers): the peers learn each other's IP address, and calls may fail on some mobile networks (no TURN). | Add a TURN service (costs money; needs your decision) and mention IP exposure in the privacy policy. |
| S8 | Low | `usernames/{name}` can be read by exact name by any signed-in user (existence probing; no list). No rate limit. | Accept, or add App Check and rate limiting. |
| S9 | Low | `reviews` and `slots` are readable by any signed-in user (reviews include `parentUid`). | Acceptable for a directory; consider removing `parentUid` from the public review. |
| S10 | Low | No e-mail verification flow, no password-reset UI was found in the audit. | Add both before opening. |
| S11 | Info | Account e-mails are stored by Firebase Authentication, outside `firestore.rules`; deletion there is a client call (`currentUser.delete()`, recent login required). | Part of the deletion design. |

## Child-data separation
No child data is stored online by the app: child profiles, progress, drawings, stars, lessons and approvals stay on the device. The online records contain only a child display name (nickname, <= 40) and a child id inside family messages/calls, an optional age on teacher requests/bookings, and phrases/stickers/voice created through the parent's device. Parent/child separation is by design: the parent account owns the family; relatives cannot see other children than those the parent linked to them (rule checks `childId in relative.children`).

## Conclusion
The authorization boundaries asked about (cross-family access, teacher access to families, outsiders joining calls or reading private messages) hold in the emulator tests. **That is not production verification.** Items S1 (blocker), S2, S5 and S6 must be decided before the gate can open.
