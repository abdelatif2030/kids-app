# Family calls: what is built, what is missing, how to try them

**Status:** the call code (signalling in Firestore, WebRTC audio/video, controller, screens) exists and passes tests against fakes. It has never been tried between two real devices, and there is no TURN relay yet. Calls stay behind the online release gate (Release 1 is offline).

## What you need
1. A Firebase project with Auth (e-mail and Google), Firestore and the published `firestore.rules`.
2. Two devices or browsers, one signed in as the parent (approves the relative, switches calls on for that relative), one as the relative.
3. For calls across different networks (mobile data to home Wi-Fi) a **TURN relay**. Without it only some networks connect (STUN only).

## Try it in development (never in a release build)
```powershell
flutter run -d chrome --profile --dart-define=ONLINE_DEV=true
```
To add a TURN relay for the test only (values are never committed, and the app ignores them in a release build):
```powershell
flutter run -d chrome --profile --dart-define=ONLINE_DEV=true --dart-define=TURN_URL=turn:YOUR_HOST:3478 --dart-define=TURN_USERNAME=USER --dart-define=TURN_CREDENTIAL=SECRET
```

## TURN options (you choose and own the account; none is set up)
- A hosted TURN service with a free tier (create an account, copy the URL/username/credential).
- Cloudflare Calls TURN or Twilio Network Traversal (paid, short-lived credentials from an API).
- Your own `coturn` server on a small VM (cheapest at scale, you maintain it).

## For a shipped app
A fixed TURN password inside the app can be extracted and abused. A release must fetch **short-lived credentials from a backend** (Cloud Function) at call time and install them with `iceServersLoader`. That needs `cloud_functions` and `firebase_app_check`, deferred until the online phase.

## Honest limits
Not tested with real microphones/cameras, not tested across carriers, no push notification (a call rings only while the relative's or parent's screen is open).
