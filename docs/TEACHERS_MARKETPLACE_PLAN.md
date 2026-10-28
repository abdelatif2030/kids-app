# Teacher marketplace: audit, what stage 1 delivered, and what needs your decision

## 1. What existed before this work
| Piece | Where | State |
|---|---|---|
| Accounts: parent / teacher (email + password, Firebase Auth) | `teachers_screens.dart`, `firebase_repository.dart` | works against a fake in tests; **never run against a real Firebase project** |
| Teacher profile: name, bio, subjects, languages, price note, photo, CV | `teachers_teacher.dart`, `teachers_models.dart` | working; visible at once (owner decision), owner can suspend |
| Parent list with one subject filter | `teachers_parent.dart` | replaced in stage 1 |
| Lesson request (free-text time, optional child age, note) → teacher accepts with an https link / declines → parent cancels | `teachers_bookings.dart` | working with a fake; no calendar |
| Report a teacher | `reports` collection (console only) | working |
| Rules | `firestore.rules` | not tested with the emulator |
Not present: availability, calendar, double-booking protection, reviews, requests/proposals, messaging, reminders, payments, packages, admin tools, analytics, attendance, lesson reports.

## 2. Security and privacy findings
- Rules are sound in shape (roles immutable, parents/teachers only see their own bookings, teachers cannot lift a suspension), but they have **never been run** (no emulator tests).
- A parent's *display name* is copied into every booking and is visible to the teacher. It is whatever the parent typed at registration (can be a full name). Consider a "name shown to teachers" field.
- Any signed-in user (including another parent) can read an approved teacher's CV, by the owner's earlier choice.
- No rate limiting or App Check on registration, reports or booking requests (needs Firebase App Check; free but needs setup).
- There is no audit log of the owner's console actions (suspending, verifying).
- Booking "server-side validation" cannot be stronger than the rules on the free (Spark) plan; real business logic (slot locking, review eligibility, payouts) would need Cloud Functions, which require the paid Blaze plan.

## 3. Stage 1 (done, tested)
- **Professional profile**: headline, teaching style, ages, specialties, curricula, dialects, formats (online / in person), class type, lesson length, numeric price, experience, qualifications, cancellation policy. All optional; old profiles still load.
- **Verification badges, separate and owner-only**: «الهوية تم التحقق منها» and «المؤهل تم التحقق منه». The teacher can never write them (rules + repository + tests). A complete profile never earns one; unverified teachers show *no* badge, and their qualifications are labelled "written by the teacher, not verified".
- **Directory**: text search (Arabic spelling variants), combinable filters (subject, child age, language, dialect, format, curriculum, max price, verified identity/qualification), sort (completeness-based default, price both ways, experience), pages of 10, favourites (saved on the device), comparison of up to 3, clear empty state with reset.
- **Transparent ranking**: default order = more complete profile first, then name. There is no paid placement. No rating sort and no "soonest availability" sort exist because there are no ratings and no calendar yet.
- **Honest profile page**: facts marked as the teacher's own words, "no ratings yet", cancellation terms shown on the page *and* in the booking dialog before sending.
- **Teacher side**: completeness checklist, verification status (read-only), preview of the parent's view.
- Tests: `test/teachers_marketplace_test.dart` (23 tests) plus the existing teacher tests.
**You must re-publish `firestore.rules`** (see `docs/teachers-setup.md`).

## 4. Not built (and why)
| Item | Status |
|---|---|
| Availability calendar, weekly hours, blocks, double-booking protection, time zones, reminders, rescheduling, attendance, no-show | **Not built.** Needs a slot model and rules (possible on Spark with one document per slot) plus notifications (a package and, for push, a server). |
| Requests and proposals (Upwork style) | **Not built.** Feasible on Spark with rules; see decision 3. |
| Verified reviews | **Not built.** Needs "completed" booking state set by both sides and rules that allow one review per completed booking. |
| Messaging | **Not built, and it conflicts with the approved safe design** ("no chat or messaging"). See decision 1. |
| Payments, packages, commission, receipts, refunds, payouts | **Not built.** No payment code until a provider is chosen and reviewed. |
| Lesson reports and assignments, "teacher + Rehlaty plan" link | **Not built.** Natural stage 3. |
| Teacher dashboard analytics (views, conversion), admin panel with audit log, marketplace metrics | **Not built.** Real numbers need a backend and consent. None are shown or invented. |
| Virtual classroom, recorded lessons | **Not built** (safeguarding review first). |
| Verification *application* flow (upload documents, status) | **Not built.** Today the owner verifies by hand in the console. Uploading ID documents to Firestore is risky (sensitive data); needs a safer channel. |

## 5. Proposed sequence
1. (done) Profiles + badges + directory.
2. Availability slots + booking with one-document-per-slot (prevents double booking via rules), booking states (requested → confirmed → completed / cancelled / no-show), cancellation terms shown before confirmation.
3. Lesson report after each completed lesson (what was covered, what needs review, a home activity) shown to the parent and, if the parent wants, linked to Rehlaty lessons.
4. Verified reviews tied to completed bookings (one per booking, reportable, owner-moderated in the console).
5. Requests and proposals.
6. Reminders (needs a notification package).
7. Payments (after provider review) and analytics (after consent design).

## 6. Decisions needed from you
1. **Messaging.** Parent ↔ teacher messages inside the app would break the earlier "no chat" safe design. Options: keep no messaging (the booking note and the lesson report carry what is needed), or allow short booking-linked messages between parent and teacher only (never the child), moderated by report buttons.
2. **Hosting.** Stay on the free Spark plan (rules only; simpler, weaker guarantees) or move to Blaze for Cloud Functions (strong server-side booking/review/payment logic; costs money, needs a card).
3. **Requests and proposals.** Build them now (stage 5) or after bookings and reviews are reliable.
4. **Payments.** Which country/provider (e.g. Paymob, Fawry, Stripe where available)? Nothing will be built before the provider is chosen.

## Stage 2 (built): slots, booking, reviews, reports, messages, requests/proposals
- Rules-only on the free Spark plan; `firestore.rules` proven against the real emulator (`cd rules_test && npm test`, 21 tests incl. a double-booking race). **Re-publish `firestore.rules` in the console.**
- Slots (`${teacherUid}_${startMs}`), atomic booking (booking + slot in one batch), cancel/decline reopens the slot, completion only after the start time, one immutable review per completed booking, lesson reports (teacher writes; that parent + teacher read), text-only messages inside a booking (no phone/email/links, closed after cancel), requests (no child identity) and proposals.
- Not built: payments (no payment in app, shown to parents), reminders (need a server), video classroom, AI matching, analytics, admin panel (owner uses the console).
- Tests: `test/teachers_marketplace_test.dart`, `test/marketplace_flow_test.dart` (fake mirrors the rules). Not tested against real Firebase from the app.
