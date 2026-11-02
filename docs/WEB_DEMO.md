# Persistent interactive web demo

The demo is the **same app** built for the web with `--dart-define=DEMO=true`. It adds only a friendly entry (no PIN, no
account) and a way to erase the demo. Online features stay off (`kOnlineFeaturesIntended = false`, no Firebase, no
network calls for child data, no analytics).

```bash
flutter build web --release --no-web-resources-cdn --dart-define=DEMO=true
```
`--no-web-resources-cdn` bundles CanvasKit, so the page does not depend on a third-party CDN. Serve `build/web` over HTTPS
or `http://localhost` (a browser only exposes secure storage and some APIs to a secure context).

## What the audit found (existing architecture reused, nothing duplicated)
| Data | Where it lives | Browser storage key (localStorage) |
|---|---|---|
| Child profiles, selected child | `LocalJourneyRepository` | `flutter.rj_profiles`, `flutter.rj_active` |
| Journey attempts and stars | `JourneyStore` | `flutter.rj_attempts` |
| Game completions (first star) | `GameRewards` | `flutter.game_completions` |
| Skill results | `ProgressStore` | `flutter.skill_events` |
| Learning records, resume, companion, notifications, time used | various stores | `flutter.learning_records`, `flutter.resume_state`, `flutter.companion_state`, `flutter.notifications`, `flutter.used_<day>` … |

`shared_preferences` on the web is `localStorage`, so everything above already survives a refresh and a browser restart.
Per-child separation is by child id in every store. Damaged JSON is skipped or reset (`safe_json.dart`).

## What the demo adds
* `lib/demo/demo_mode.dart`: `DemoMode`, the demo notice, `DemoCreateChildScreen` (nickname ≤ 12 letters, age 1–6, cartoon
  avatar; no e-mail, password, birth date, photo or real name), `resetDemoData` and a two-step erase (grown-up question,
  then a plain warning that says it cannot be undone).
* The first screens show the demo notice; "Add child" opens the short form instead of the 5-step onboarding and its PIN.
* A short-screen layout so the "begin" button is on the first screen of a phone held sideways.
* Fixed an existing gap: the normal "delete child data" did not remove `game_completions` or `wordbook_seen`; both are now removed.

## What persists (verified in a real browser, see below)
Children, the selected child, each child's game completion history and first-completion stars, skill results, learning
records, resume points, the companion state and notifications. The chosen language persists too.
A second finish of the same game does not give a second first-completion star (unit tests, and after a restart).

## What does not persist or is not promised
* No cloud backup and no sync between devices or browsers. Clearing site data, "clear cookies and site data", or a private
  window erases the demo. Another browser, profile or device starts empty.
* `localStorage` is about 5 MB per site. Many drawings or photos could fill it; a failed save is not shown to the child.
  The demo asks for no photo.
* Not a production account system: there is no PIN in the demo and no security claim.

## Web compatibility
| Feature | Web status |
|---|---|
| Children, profiles, stars, games, hub, stories (text), adaptive learning | works (checked in Chromium) |
| Arabic and English, RTL/LTR | works (English welcome checked in Chromium at 852×393) |
| Games hub on phone-landscape and tablet sizes | works (Chromium viewports 852×393, 1000×640, 1024×768) |
| Page refresh | works, but the app has one route: it returns to the start screen, with the saved children. Deep links to a game are not supported |
| Device voice (speech synthesis) | depends on the browser and installed Arabic voice; not verified here |
| Videos (YouTube player) | needs internet and the YouTube iframe; NOT verified (the sandbox cannot reach YouTube) |
| Printing worksheets (`printing`) | not verified on web |
| Voice messages, calls, family chat, accounts, teachers | OFF on purpose (online features) |
| Photo of the child | not offered in the demo |

## Verification
**Automated (Flutter tests):** `test/demo_mode_test.dart` (17 tests), plus the responsive hub tests.
**Real browser (headless Chromium driven by Playwright against the production build, a persistent browser profile that was
closed and reopened):** created a child, played "More and fewer" to the end (5 skill events and one completion saved in
`localStorage`), closed the browser, reopened it: the child and the completion were still there; refreshed the page: still
there; added a second child: two profiles, completions only under the first child; erased the demo: confirmation, "no"
kept everything, "yes" removed every `rj_*`, `game_completions` and `skill_events` key; reopened: empty.
These browser checks were scripted for this review and are not part of `flutter test`.
**Not done:** real phones and tablets, Safari and Firefox, a real private window, many days of use.


## Final pre-deployment QA (2026-11-01)

### Browsers and sizes actually tested
Only **Chromium** (headless, Playwright) exists in this environment. **Safari and Firefox were NOT tested.** Nothing was tested on
a physical phone or tablet; "phone" and "tablet" below are Chromium viewport sizes.
| What | Sizes (CSS px) | Languages |
|---|---|---|
| Welcome, child form, home, Games Hub, category screen, a real game ("Find the shape") | 852×393 (phone landscape) | Arabic, English |
| Games Hub | 640×360, 932×430 (phone landscape), 1024×768, 1366×1024 (tablet landscape), 390×844 (phone portrait), 768×1024 (tablet portrait) | Arabic, English |
| Category screen and game | 1024×768 | Arabic, English |
| Persistence, refresh, two children, erase | 1000×640 and 1024×768 | Arabic |
All of these ran against the production build served with the real `web/_headers` (see below), with no JavaScript errors.

### Private / incognito behaviour (a fresh Chromium context with nothing written to disk)
Inside one private window the child survives a refresh. After the window is closed, a new private window starts **empty**.
So a visitor in a private window loses everything when they close it. This is expected browser behaviour; the demo says it.

### Privacy and network review
* Collected: a nickname (≤ 12 letters), an age 1–6, a cartoon avatar. No e-mail, password, birth date, photo, location,
  contact or real name. Stored only in the browser's `localStorage`.
* No request ever carried child data: across a full session (create child, play, hub) there were **0 non-GET requests**.
* External contacts seen at run time: (1) `fonts.gstatic.com`: Flutter downloads fallback fonts (emoji, Arabic symbols); the request
  contains no child data but the visitor's address is visible to Google. (2) `accounts.google.com/gsi/client`: the Google
  sign-in plugin tries to load a script at start-up even though sign-in is off in the demo. **Blocked** by the Content Security
  Policy in `web/_headers` (the browser logs the refusal).
* Only if a visitor opens a **video lesson**: the YouTube player and thumbnails contact YouTube. Not verified here (no access to
  YouTube from the sandbox). If the owner wants a demo with zero third-party contact, hide the video lessons in the demo.
* `web/_headers` (Cloudflare Pages reads it from the build output): a strict CSP (own origin only, plus fonts and YouTube),
  `Referrer-Policy: no-referrer`, and `Permissions-Policy` that turns the microphone and camera off (the browser speech
  service used by the parent assistant's dictation would otherwise send audio to a third party). `test/demo_mode_test.dart` checks
  the header file.
* To remove the font request too, the Noto emoji font would have to be bundled (about 10 MB); not done.

### Defects found by this QA and fixed
1. On a short phone held sideways the "Start the demo" button was below the fold; it is now fixed at the bottom of the form (tested at 640×360 to 1024×768).
2. A third-party Google script was requested at start-up; blocked by `web/_headers` (see above).
3. Upright phone: the Games Hub picture sat in a big empty area; it now shows a friendly "turn the device sideways" hint.
4. Upright tablet: the featured strip floated far below the picture; it now sits right under it.

### Analyzer: the 5 existing issues (none affects the demo)
| Issue | Where | Effect |
|---|---|---|
| `prefer_initializing_formals` (info) | `lib/library/activities.dart:27` | style only |
| `prefer_initializing_formals` ×3 (info) | `lib/media/audio_service.dart:81-83` | style only |
| `unused_field` `_round` (warning) | `lib/where_animal_game.dart:26` | a counter in the age 1–2 "where is the animal" game that nothing reads; harmless |
They were left alone on purpose (no behaviour change).

### Known limitations
* One web route only: a refresh returns to the start screen (saved children are kept). No deep links.
* English mode still shows Arabic in a few places that are content, not interface (the painted title in the hub picture,
  shape names read aloud/captioned in Arabic, story texts).
* The upright phone layout is functional but small; the app is landscape-first.
* Emoji and some symbol glyphs come from a downloaded font; offline first load with no cache would show boxes for them.
* Device voice and videos: not verified.


## Videos and parent control in the demo (2026-11-01)
* The video library is fully present: Parent settings → «مكتبة الدروس والفيديوهات» / "Lesson library" (preview, review with the five
  checks, approve, reject, reopen, withdraw approval, disable/enable, add by exact link, remove your own).
* **Only a parent's approval shows a video to a child.** In the demo build the owner's pre-review flag (`ownerReviewed` in
  `assets/videos.json`) is ignored (`DemoMode.applyPolicies()` sets `Video.honourOwnerReview = false`), so a fresh demo shows a
  child no video at all ("No lessons for this subject yet. Ask a grown-up to choose some."). The normal app keeps the owner's earlier decision.
  A lesson cannot be approved before it was opened in the preview.
* **Per child:** approvals are the parent's judgement of the video on this browser. New: with two or more children an approved lesson has
  «Who sees it?» («من يراه؟») with one switch per child. Turning a child off hides that lesson from that child only; the lesson stays
  visible to the others. Hiding can only remove videos: it never approves anything. The existing «Disable» still hides a lesson from everyone.
  The data is `video_hidden_child` (child id → video ids); deleting a child or erasing the demo removes it.
* The YouTube player restrictions and the external-navigation protection (`lib/safe_player.dart`) are untouched.

## External requests, honestly
* The app itself never sends child data. Contacts with third parties that DO happen: fonts from `fonts.gstatic.com` (emoji and
  fallback glyphs), and **YouTube** when a child opens an approved lesson (the player and the thumbnails load from YouTube
  and Google). Videos are streamed, not offline, and YouTube sees the visitor's address and the video requested. This was not
  exercised here because the sandbox cannot reach YouTube.
* The Google sign-in script is blocked by the Content Security Policy (`web/_headers`). The CSP and security headers are unchanged.
* The thumbnails domain (`img.youtube.com`) is only contacted on the video list screens.

## What was tested for this change
Automated (`test/demo_videos_test.dart`, 12 tests): demo policy ignores the owner flag; approve → child sees it; withdraw → gone;
reject → never; approvals and per-child hiding survive a restart; per-child hiding leaves the other child's list alone; shared hiding
hides from everybody; the playing child's list is used; hiding can't approve; deleting a child forgets its hidden list; damaged storage;
the parent screen's «Who sees it?» dialog (two children) and its absence with one child; Arabic default and saved language; the
demo notice's switch changes language and direction of the whole app (`KidsApp`) and persists.
Real Chromium (production demo build, headless): Arabic default; English via the notice; the choice survives closing and reopening the
browser; creating a child in English; a child in the demo sees "No lessons … Ask a grown-up" before any approval; the parent area
opens through the grown-up question and PIN creation and shows the language switch and the lesson-library tile.
**Not tested in the browser:** the preview → approve → withdraw clicks of the parent screen (the screen's semantic tree was too
brittle to script reliably; those flows are covered by widget tests, including the existing `test/video_controls_test.dart` and
`test/lessons_test.dart`), YouTube playback, Safari, Firefox, real devices.
