# Rehlaty — real-device testing guide (Android phones and tablets)

**Status: nothing in this guide has been run.** The development environment has no Android SDK and no device, so the Android app has never been built or installed.
Everything below is a plan for you (or a helper). Do not report "tested on device" until someone has really done it.

## 1. What you need
| Item | Why |
|---|---|
| A Windows/Mac/Linux computer | to build the app (a helper can do this once and give you the APK) |
| Flutter (stable channel) and Android Studio with the Android SDK and licences | `flutter doctor -v` must show a tick for "Android toolchain" |
| 1 small phone (about 5-5.5") | tests small-screen layouts |
| 1 large phone or a tablet (7-11") | tests wide layouts and landscape |
| Optional: an older phone (Android 8-9) and a recent one (Android 13-15) | OS differences, permissions |
| Wi-Fi you can switch off, and a second device or a helper | offline and call tests |
| A USB cable (data, not charge-only) | install and logs |

## 2. Build and install (a helper can do this)
1. On the phone: Settings -> About phone -> tap "Build number" 7 times -> Developer options -> turn on **USB debugging**.
2. On the computer, in the project folder:
   ```
   flutter doctor -v
   flutter devices
   flutter run -d <device id>          # debug build, runs on the phone
   flutter build apk --release         # a release-style APK for your own phone
   ```
   The APK is at `build/app/outputs/flutter-apk/app-release.apk`. Install it with `adb install -r app-release.apk`, or copy it to the phone and open it (allow "install unknown apps" for the file manager once).
3. Without your own signing key the release build is signed with the **debug key**. That is fine for testing on your devices, **not** for Google Play (see `docs/ANDROID_RELEASE.md`).
4. Note the version: Parent settings -> last row "App version". Put it in every report.
5. Delete the app between test rounds if a session says "fresh install" (Settings -> Apps -> Rehlaty -> Storage -> Clear data also works).

## 3. What is special about this app
- It is **landscape only** on phones and tablets (the screen is locked to landscape). Check that it never shows portrait and that rotating the phone upside-down in landscape still works.
- It has **no ads, no accounts for children**. Online services (teachers, family chat) are switched OFF in this build; do not expect them.
- Voices are the phone's own text-to-speech (no recordings exist). Arabic needs an Arabic voice installed on the phone (Settings -> System -> Languages -> Text-to-speech).

## 4. The test rounds (use `docs/TESTING_GUIDE.md` for the exact steps and expected results)
### Round A - Install and first start (every device)
- Install, open, create "Test A" age 4 with a PIN, close the app from the recent-apps list, reopen: the child and PIN are still there.
- Check: no permission dialogs at start. The microphone/camera are asked for **only** when you start a voice message or call (those need the online service, which is off, so you should see none).
- Settings -> Apps -> Rehlaty -> Permissions: note what is listed. Expected declared permissions: Internet, microphone, camera (optional), audio settings, network state.

### Round B - Landscape and layout
- Small phone: every screen (child home, 3 games, Me tab, World, Stories, Parent settings, Lesson library) fits without text cut off or buttons off-screen. Scroll where needed.
- Tablet: content is centred/wide, not stretched awkwardly; side navigation or bottom bar is usable.
- Gesture bar and notch: nothing important is hidden behind them.
- Settings -> Display -> Font size **largest** and Display size **largest**: repeat the screens above. Also set the app's own text size to "extra large" (Parent settings -> Display).

### Round C - Touch
- Tap targets: a child-sized finger can hit every button first time. Two-finger or fast repeated taps do not double-award a star or crash.
- Drag games (puzzle, matching): dragging with a finger is smooth; lifting outside the board does not break it.
- Tracing game: draws under the finger.

### Round D - Audio
- Phone volume at medium: press the speaker button in 3 games, a letter and a word. Voices are clear, not clipped, and stop when you leave the screen.
- Put the phone on silent / lower media volume: nothing blasts. Plug in headphones: sound moves there.
- Receive a phone call or a notification sound while a story plays: the story must not keep talking over the call; it should not restart on its own afterwards.
- Lock the screen during a story: audio stops (there is no lock-screen player by design).

### Round E - Video (needs internet and parent approval)
- Follow Session 3 of the guide. On the real device also check: video fills the landscape screen, pause/resume work, the Back button returns to the list, a playing video can finish when the daily time ends.
- Turn Wi-Fi off mid-video: you should reach a clear problem message with Try again/Back (no frozen screen).
- Note any video that refuses to play inside the app ("not available") and any that shows ads or end-screen suggestions.

### Round F - Languages
- Arabic: right-to-left everywhere, Arabic digits/text not mirrored wrongly, letters not cut. English: left-to-right. Switch back and forth in Parent settings without restarting the app.

### Round G - Offline
- Airplane mode before opening the app: games, stories (phone voice), Me tab, parent area, printing preview work; only videos show the offline message.
- Turn the network on again: videos work without restarting.

### Round H - Child-data isolation and deletion
- Two children, activity for A only: B sees nothing of A's stars, gifts, museum, adventure.
- Export A's data; delete A; A's data is gone, B is intact; reset all data clears everything; the lesson approvals (family setting) remain unless you clear app data.
- App restart in the middle of a game: no crash; the game restarts; no extra star.

### Round I - Stability and battery
- Use the app for 20 minutes continuously: it stays smooth, the phone does not get hot, the time limit "time to rest" screen appears when set.
- Background the app for 5 minutes and come back: it is where you left it or at the home screen, never a white screen.

## 5. Collecting information when something fails
- Screenshot or screen recording (most phones: swipe down -> Screen recorder).
- Exact steps, device model, Android version, app version, language.
- If a helper can connect a computer: run `adb logcat -d > rehlaty-log.txt` right after the failure and attach the file. Do **not** attach it if it might contain personal data from your own child's profile.
- Use `docs/TEST_REPORT_TEMPLATE.md`.

## 6. When you may say "tested on a real device"
Only when: (a) the build was installed on at least one small phone and one tablet, (b) Rounds A-I were done and recorded, (c) failures are logged and fixed or accepted by you. Until then the project status must stay "not verified on devices".


## Release 1 additions (2026-10-31)
### Round E+ - the YouTube player must keep the child inside the approved video (NOT verified yet; this is the most important device check)
`lib/safe_player.dart` was written without a device. On each real device, with an approved lesson playing:
1. The video **starts and plays** (if it shows a blank player or "not available" for every video, report it at once: the restriction may be too strict; the developer can switch `kRestrictPlayerNavigation` off, but the underlying risk then returns).
2. Tap the **YouTube logo** and the **video title**: nothing should open (no browser, no YouTube app).
3. Let the video end and tap an **end-screen suggestion** or a "More videos" tile: no other video should load; the approved video stays or the end screen does nothing.
4. Tap "Watch on YouTube"/"Share" if shown: nothing opens.
5. If an advertisement appears, tapping it must not leave the app. Advertisements and YouTube branding are expected to remain (they are not removed on purpose).
Report any exception with the device model and a screen recording.
### Round J - permissions and online screens
- No camera/microphone dialog at start or during normal use; only when dictation (parent) is started.
- Refusing the microphone: a clear message, no crash, narration still plays.
- Family chat and teacher entry say "Not available in this version yet" (the online gate is closed in this build).
### iOS notes
Use the same rounds on an iPhone and an iPad (landscape; the iPad may rotate to portrait only if the app allows: it is locked to landscape at run time). After installing from TestFlight or Xcode, confirm the app name "Rehlaty", the icon, the launch screen and that the privacy manifest is in the build (Xcode archive report).
