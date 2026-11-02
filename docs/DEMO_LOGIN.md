# Web demo with login (Google + e-mail)

A separate build of the web demo that shows the accounts door («تسجيل الدخول / حساب جديد»). Normal builds, the
Android/iOS release and the plain demo are unchanged: `kOnlineFeaturesIntended` stays `false`.

## What the login build does
* `--dart-define=DEMO_LOGIN=true` opens ONLY the accounts door (sign in / register as parent or teacher, Google popup
  or e-mail + password). Family chat, calls and voice messages stay off (`familyRepository` is not created).
* The Firebase web identifiers are passed at build time (`FIREBASE_*` defines), never committed
  (`test/release_config_test.dart` still guards the repository against keys).
* Children's progress still lives in the browser only. The account is a grown-up's, kept by Firebase Authentication
  (and a `users/{uid}` document in Firestore).
* `tool/headers_login` replaces `web/_headers` in the build output: the same strict policy plus only the hosts login needs
  (Google API loader, Identity Toolkit, Secure Token, Firestore, Installations, the project's auth handler,
  accounts.google.com). No analytics host. No COOP header (it breaks the Google popup).

## Owner steps in the Firebase console (the app cannot do these)
1. Authentication -> Sign-in method: enable **Google** and **Email/Password**.
2. Authentication -> Settings -> Authorized domains: add `demo-site-e3g.pages.dev` (and any custom domain).
3. Create the Firestore database.
4. Review and publish `firestore.rules` yourself (not published by the app or by Claude).
5. Google Cloud console -> APIs & Services -> Credentials: restrict the web API key by HTTP referrer
   (`https://demo-site-e3g.pages.dev/*`).

## Build
```bash
export FIREBASE_API_KEY=...        # from Project settings -> Your apps -> Web app
export FIREBASE_APP_ID=...
export FIREBASE_SENDER_ID=...
export FIREBASE_PROJECT_ID=kids-app-2361e
export FIREBASE_AUTH_DOMAIN=kids-app-2361e.firebaseapp.com
tool/build_demo_login.sh build/demo_login
```
Then upload `build/demo_login` the same way as the plain demo (docs/CLOUDFLARE_PAGES.md).

## Honest limits
* Real Google / e-mail sign-in was NOT tested here: the sandbox cannot reach Google or Firebase. Tested: gate logic,
  headers, fakes.
* There is no in-app account deletion (`kAccountDeletionReady` is false); delete users in the console.
* Teachers appear to parents once they save a profile (owner design decision); this makes real data public to demo visitors.
  Use the console to suspend a profile.
* The Android/iOS apps registered in Firebase use `com.example.*`; register `com.rehlaty.app` before the mobile release.
