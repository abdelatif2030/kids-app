# Online features: inventory and release decision (Release 1)

Owner decision 2026-10-31: online features are **ON** for release 1. Engineering rule: a feature is exposed only if its backend, authentication, authorization and security can be verified. The result of the inventory is below. **Nothing was tested against a real Firebase backend** (no Firebase project exists); the only backend evidence is the LOCAL Firestore emulator running `firestore.rules` (`rules_test/`, 67 tests pass).

Legend: **Impl** = client code exists. **Backend** = a working backend exists (a real Firebase project + published rules). **Real test** = tested against that backend with real devices. **Ship** = may ship in release 1 today.

| # | Feature | Impl | Backend | Real test | Data sent / received | Auth and authorization | Ship in release 1 now? |
|---|---|---|---|---|---|---|---|
| 1 | Accounts (parent, teacher, relative) | yes | **no project** | no | e-mail, password (to Firebase Auth), display name, role | Firebase e-mail/password; role is chosen at sign-up and fixed by rules (`users/{uid}`); no e-mail verification flow, no App Check | **No** (no backend; account deletion missing) |
| 2 | Family chat and trusted contacts | yes | **no project** | no | messages (phrase id, sticker id, text <= 200 chars without links, voice id), child nickname (<= 40), relation, user name of the relative | parent = family owner; relatives join only by a parent's request to their username and stay revocable; parent reads everything | **No** (blocked by 1) |
| 3 | Voice messages | yes | **no project** | no | audio <= 30 s as base64 in Firestore (about 24 kbit/s), 14-day clean-up by the parent's app | only the parent and that relative; parent-set per-relative switch (off by default) | **No** (blocked by 1; retention is client-driven only) |
| 4 | Voice and video calls | yes | **no project** | no | call signalling (SDP offers/answers and ICE candidates, which contain network addresses) in Firestore; the media itself goes device-to-device (WebRTC, encrypted by WebRTC) | only the parent and an active relative with the call switch on; STUN only (Google STUN), **no TURN**: calls may fail on mobile networks | **No** (blocked by 1; two-device and network tests missing) |
| 5 | Teacher marketplace: profiles, portfolio, CV | yes | **no project** | no | teacher name, photo (<= 100 KB), bio, qualifications, CV file (<= 500 KB, base64), portfolio pictures | any signed-in user may read an approved profile and CV (privacy risk, see the security review); teachers register themselves, unvetted | **No** (blocked by 1; unvetted teachers; owner moderation only in the console) |
| 6 | Teacher marketplace: slots, bookings, booking messages, lesson reports, reviews, requests and proposals | yes | **no project** | no | parent name, optional child age, lesson notes, free text, review text/rating | only the two people of a booking; rules emulator-tested; no payments | **No** (blocked by 1) |
| 7 | Reports about a teacher or review | yes | **no project** | no | reason text | write-only; read in the Firebase console by the owner | **No** (needs a moderation process) |
| 8 | Cloud sync of child data / progress | **not implemented** | n/a | n/a | none: progress, profiles, stars and lessons stay on the device | n/a | n/a |
| 9 | Push notifications | **not implemented** | n/a | n/a | none | n/a | n/a |
| 10 | Google / Apple sign-in | **not implemented** (disabled buttons) | n/a | n/a | none | n/a | n/a |
| 11 | Plan assistant AI (optional) | yes | **no endpoint** | no | an anonymised summary only, never the child's name, ids or photos; off by default | needs `REHLATY_AI_ENDPOINT` at build time | **No** (no endpoint; stays off) |
| 12 | YouTube playback and thumbnails | yes | YouTube (third party) | **no** (needs device) | video id and the viewer's IP to YouTube/Google | none; parent approval controls which videos are reachable | **Yes, with device verification** (not an account feature) |
| 13 | Speech dictation for parent notes | yes | none | no | audio stays on the device (`onDevice: true`) | none | Yes (device check) |

## Result
- Items 1 to 7 cannot ship until a Firebase project exists, rules are published by the owner, account deletion works and the flows are tested on real devices. The code now enforces this as a **release gate** (`lib/online_gate.dart`, documented in `docs/ONLINE_RELEASE_GATE.md`): with the gate closed the app never contacts Firebase and the screens say "Not available in this version yet", with the reasons.
- The owner's decision "ON" is honoured by design: nothing was removed, the code is complete enough to be switched on, and the switch is a single gate with explicit evidence requirements. It is **not** switched on, because that would expose people to an unverified backend.
- Items 8, 9 and 10 do not exist; no store text may claim them.

## Update 2026-10-31
No feature changed state: all online features remain behind the closed gate. New since the first inventory: password reset and verification e-mail (client, untested against Firebase), server-side deletion and retention logic (drafts, local tests), proposed rules for teacher approval, CV access and booking-message links (not published), an ICE-server hook. See `docs/SECURITY_REMEDIATION_MATRIX.md`.
