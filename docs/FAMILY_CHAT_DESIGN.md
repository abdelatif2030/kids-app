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

## NOT built: calling
Voice/video calls need WebRTC (a package such as `flutter_webrtc`), a signalling channel (Firestore can do it), and
**a TURN relay server** for most real networks (Firebase has none; paid or self-hosted). They also need microphone and
camera permissions, which changes the Play "Data safety" answers and the privacy policy, and a call can carry anything
the other person says or shows (no content filter is possible). Proposed safe design for later:
- Calls start only from the **parent's** Family screen or are approved by the parent first ("child asks to call" ->
  parent taps accept), never from an incoming ring on the child's screen.
- Audio only first; video as a later, separate parent switch.
- Parent-set call hours; calls end with the session timer; no recording; no call history beyond a local list.
- Needs your decisions: TURN provider and budget, and approval of the WebRTC package.

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
