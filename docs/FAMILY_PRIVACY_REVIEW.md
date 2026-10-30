# Family communication: privacy and access review (2026-10-29)

Read from the code and the rules (`firestore.rules`, 59 emulator tests). Not a legal review, and not tested against a
real Firebase project. A hidden button is never the protection: the rules are.

## Who can contact a child
- Only a relative the **parent added by request** and who **accepted** (`connectRequests`), and who is still `active`.
  A pending, paused or removed relative cannot send, call or read (rules `isActiveRelative`).
- Children have no account and no address. Messages from the child are written by the parent's signed-in device.
- A relative can reach only the children the parent linked (`children` map). Calls, voice messages and video each need a
  separate parent switch per relative (all off by default).
- Strangers cannot find anyone: invite codes are gone from the UI; the old code path still exists in the rules but a code
  can only be created by a parent and used once.

## What each person can see
| Data | Parent | Linked relative | Others |
|---|---|---|---|
| Messages and voice recordings | all | only their own conversation | none |
| Call records | all | only their own calls | none |
| Who is online | not stored | not stored | none |
| Children's nicknames | yes | only the ones linked | none |
| Location, school, birthday, photo | never collected for chat | never | never |

## Revoking
- The parent can pause, resume or **remove** a relative at any time (effective on the next request) and delete any
  conversation. A removed relative loses read and write access at once.
- A request can be cancelled while waiting.

## What is stored on the server, and for how long
- Messages: until the parent deletes the conversation (kept small: newest 80 / 400 are read).
- Voice recordings: **14 days**, removed when the parent opens the family screen.
- **Call records** (they hold network addresses inside the connection details): removed by the parent's screen after
  **24 hours** (new in this pass), including the candidate documents. The audio and video of a call are never stored or
  recorded; they travel directly between the two devices.
- Request documents keep the relative's user name and account id, the parent's name and the children's nicknames until deleted; they are not
  purged automatically yet (gap, low volume).

## Gaps and risks (honest)
1. ~~E-mail ownership is not verified.~~ Closed on 2026-10-30: requests are addressed to a user name the relative chose,
   which is tied to their account id, so nobody else can see it. New, smaller risk: anyone who knows an exact user name
   can send that person a request (they must accept; nothing is shared before). There is no list or search of names.
2. **Block / report a relative** from the app is not built: removing is the control. The generic "report a problem" screen
   exists.
3. **No push notifications**: a call or request is seen only while the app is open.
4. The parent's device must be in the parent's hands for calls with the child: the app cannot check who is in front of
   the camera.
5. No TURN relay: on some mobile networks a call may fail to connect. This is a reliability gap, not a privacy one.
6. Real-device behaviour (permissions, audio routing, interruptions) is untested; see MANUAL_TESTS F2, F5, F6 and A-audio.
7. Ids and credentials are never written to the console by the code, and nothing sensitive is placed in a URL (the app has
   one route). WebRTC connection details are in Firestore only for the life of the call record (see above).
