# Family chat and calling: design and safety

Decision (owner, 2026-10-29): the child may talk to **relatives the parent approved**, using Firebase. This replaces the
earlier "no chat" rule for the child app, but only inside the limits below. Everything is OFF until the owner connects
Firebase (`kFirebaseEnabled`) and the parent switches it on per child.

## Who is who
- **Parent**: signed-in account (role `parent`). The family id is the parent's uid. Inside Parent settings (PIN).
- **Relative**: own account (role `relative`) on their own phone, via «أنا من العائلة» on the first screen.
- **Child**: NO account, no e-mail, no profile on the server. The child writes on the parent's device; the message is
  stored as sent "from the child" by the parent's account. Only the child's nickname is stored.

## How a relative gets in
1. The parent makes an invite: relation + which children. An 8-character one-time code.
2. The relative creates a relative account, enters the code, and is **pending**.
3. The parent **approves**. Until then nobody can send or read anything.
4. The parent can pause, resume or remove at any time, and change nothing else without the PIN area.

## What can be sent
- Child: ready phrases (7) and stickers (12) by tapping. **Typing is a second switch**, off by default.
- Relative: short text (<= 200 characters) and stickers.
- Not possible: photos, files, voice notes, video, links, web addresses, e-mail addresses, calls (see below). Text with
  a link/address pattern is refused on the device AND by the server rules.

## What the parent sees
Every conversation, with a delete button (parent-only delete). The child cannot delete or edit; neither can relatives.

## Existing child protections still apply
Chat sits inside the child shell, so the daily limit, quiet hours and the rest screen apply. The parent PIN is needed to
leave. No notifications are sent (no notification package). A child sees messages only when they open «عائلتي».

## Data stored on the server (Firestore)
`invites/{code}` (family id, parent name, relation, children id->nickname), `families/{parent}/relatives/{uid}` (name,
relation, status, children), `families/{parent}/messages/{id}` (child id/nickname, relative uid, from, kind, body, time),
`users/{uid}/families/{family}` (pointer). Per-child switches (`family_prefs`) stay on the device. Deleting a child on
the device removes the local switches; **server messages are removed with "Delete conversation"** (parent).

## Rules (firestore.rules, emulator-tested: 10 new tests)
Only a parent makes invites; a code works once and cannot be listed; a relative joins only as pending; only the parent
changes status/children; messages need an ACTIVE relative linked to that child; nobody writes as someone else; content
limits; a relative reads only their own thread; only the parent reads all and deletes.

## Voice calls (built 2026-10-29, owner request)
Package: `flutter_webrtc` (approved by the owner for calling; well known and maintained; works on Android and web).
Audio only: the camera is never requested. The audio goes straight between the two devices; the server only carries
the "who is calling" and connection details (Firestore `families/{parent}/calls`). Nothing is recorded or stored.

Rules of the design:
- OFF by default. The parent switches **«السماح بالمكالمات الصوتية»** on for each approved relative.
- Calls are between the **parent's device** (the child is next to the parent) and the relative. The parent starts a call
  from the family screen («اتصل»), or the relative starts one and it rings **only in the parent area**, never on the
  child's screen. Only the person being called can answer. No notification package, so a call is seen only while that
  screen is open.
- A call that rings 45 s is "missed"; old ringing calls are ignored. Either side can hang up; leaving the screen hangs up
  and releases the microphone.
- The server rules (emulator-tested, 7 tests) require: relative active, calls on, child linked, the right caller, only
  `status`/`answer` can change, only the callee can answer.
- **Network:** only public STUN servers are configured (`kStunServers`). Calls work on many networks, but behind some
  mobile carriers or strict firewalls a **TURN relay** is needed; there is none yet. If the call says it could not
  connect, that is the likely reason. Adding one is a decision for you (cost, provider); the password must never be
  committed.
- Not built: video, group calls, ringing when the app is closed (needs push notifications), call history, recording.
- Microphone: asked by the browser or Android only when a call starts (`RECORD_AUDIO` in the manifest). Play Data safety:
  declare voice as "transmitted in real time, not stored".

## Before turning it on (release checklist)
1. Create the Firebase project, set `kFirebaseEnabled = true`, publish `firestore.rules`.
2. Update `docs/PRIVACY_POLICY_DRAFT.md` (accounts, relative names, messages) and the Play Data safety form: the app
   then collects e-mail, names and messages; and re-check the Families policy for children's apps with user-to-user
   communication (Google restricts this; read the current text before publishing).
3. Test with two real phones (parent + relative). No test against real Firebase has been run.

## Try it without Firebase (demo mode)
```powershell
flutter run -d web-server --web-port 8080 --dart-define=FAMILY_DEMO=true
```
One in-memory server holds a demo parent and a demo relative («Nana»). No sign-in, nothing saved or sent; it resets on
restart (the per-child switches are saved locally as usual). Steps: Parent settings -> «عائلتي: المحادثات» -> invite ->
copy the code -> back to the first screen -> «أنا من العائلة» -> enter the code -> back as parent -> Approve -> switch
chat on for the child -> open the child -> More -> «عائلتي» -> send. Then «أنا من العائلة» to answer as Nana.

## Home button and related ideas (2026-10-29)
- **Family button on the child home**: a round gradient speech bubble with a heart (drawn in code; our own mark, not a
  copy of another app's logo) in the home header, with a red count of new messages. Shown only when the parent switched
  chat on for that child and the service is connected. It checks for new messages every 20 s while the home is open
  (reads only; there are no notifications).
- **Contacts list** («عائلتي»): a card per approved relative with an avatar, the last message, a new-message badge and
  the next-call note. Conversations with something new come first. What the child has seen is stored on the device
  only (`family_seen`); it is removed with the child's data.
- **Phrases follow the time of day**: «صباح الخير» in the morning, «تصبح على خير» at night, plus new phrases (how are
  you, tell me a story, sorry, a hug).
- **Share a win**: «أنهيت درساً اليوم! ⭐» is offered ONLY when the child really finished a lesson or a game today. It is a
  choice, never a reminder and never a reward.
- **Next call note** («مكالمة قادمة»): the parent writes a short note such as "Friday 6 pm" for each relative; the child and
  the relative see it. It is only a note: nothing rings and no reminder is sent.
- Ideas not built (and why): message reactions and read receipts (more server rules and more pressure to answer),
  voice messages (would record a child's voice), photo sharing (moderation risk), push notifications (needs a package
  and a privacy decision), a daily "ask Nana" prompt (could feel like an obligation).
