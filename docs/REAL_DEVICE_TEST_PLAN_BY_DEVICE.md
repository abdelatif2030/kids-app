# Real-device test plan by device type

**Nothing in this plan has been run.** Use it together with `docs/TESTING_GUIDE.md` (what to do, step by step), `docs/REAL_DEVICE_TEST_GUIDE.md` (build and install, rounds A-J) and `docs/TEST_REPORT_TEMPLATE.md` (how to report). Record the result per cell as Pass / Fail / N/A with a screenshot for every Fail. A device type counts as **tested** only when every row marked REQUIRED has a recorded result.

## Common set (every device type): REQUIRED
| ID | What | Pass when |
|---|---|---|
| C1 | Install, first start, create a child, set a PIN, restart | profile and PIN survive a restart |
| C2 | Parent area opens only with the PIN; 5 wrong tries lock for 30 s | as described |
| C3 | Videos: none by default; preview, review sheet, approve, disable, reject, withdraw (TESTING_GUIDE session 3) | child sees only approved + enabled |
| C4 | **Player containment** (device guide round E+): logo, title, end-screen tiles, "Watch on YouTube", ads do not leave the approved video | nothing opens; the video itself still plays |
| C5 | Offline: airplane mode, games and stories work, videos show the offline message with Try again | as described |
| C6 | Arabic and English, right-to-left and left-to-right, switch without restart | nothing cut off |
| C7 | Largest system font and the app's extra-large text | readable, buttons reachable |
| C8 | Two children: no leakage of stars, gifts, museum, adventure; delete one child | isolation holds |
| C9 | Permissions: no camera/microphone prompt at launch or in normal use; dictation prompt only on tap; refusing it leaves the app working and narration audible | as described |
| C10 | Online screens say "Not available in this version yet", no sign-in form (gate closed build) | as described |
| C11 | Audio: speaker buttons, story, nature sound; voices stop when leaving the screen or locking the phone | as described |
| C12 | 20 minutes of use: smooth, no overheating, time-limit "rest" screen works | as described |

## 1. Android phone (small, about 5-6", Android 8-9 if possible) and a recent phone (Android 13-15)
Prerequisites: USB debugging, APK from `flutter build apk --release` (debug-signed is fine for testing), `adb`.
| ID | Check | REQUIRED |
|---|---|---|
| A1 | Both landscape directions work; portrait never appears (rotate the phone, lock/unlock) | yes |
| A2 | System Back and the Back gesture: from every screen they step back, never exit unexpectedly; in a game they ask "Leave the game?" | yes |
| A3 | Display cutout/notch and gesture bar: nothing hidden or untappable at the edges | yes |
| A4 | Android 13+: no notification permission prompt (the app has no push) | yes |
| A5 | Settings -> Apps -> Rehlaty -> Permissions lists only Camera and Microphone (and they are Not allowed until used); no location, contacts, storage | yes |
| A6 | Text-to-speech: with an Arabic voice installed and without one: clear message, no crash; English works | yes |
| A7 | Incoming call/alarm while a story plays: story stops; it does not restart by itself | yes |
| A8 | Data and "Clear storage": app returns to the first run; "Uninstall" removes everything (backup is off, so a reinstall starts empty) | yes |
| A9 | Battery saver and Do-not-disturb on: no crash | no |
| A10 | Android 7.0 (minSdk 24) device, if you have one: starts and plays | no |

## 2. Android tablet (7-11")
| ID | Check | REQUIRED |
|---|---|---|
| T1 | Landscape layout uses the width well (side navigation/two columns), no stretched or tiny content | yes |
| T2 | Portrait: the app stays landscape (or if the tablet forces portrait in split screen, nothing breaks) | yes |
| T3 | Multi-window / split screen: the app does not crash when resized; video player resizes | yes |
| T4 | A keyboard and mouse (if available): Tab/Enter work, focus rings visible | no |
| T5 | Touch targets are comfortable for a small child's whole hand | yes |
| T6 | Printing a worksheet through the Android print service (or Save as PDF) | no |

## 3. iPhone (a current model, and an older one if you have it)
Prerequisites: a Mac with Xcode, your Apple developer team, the bundle id `com.rehlaty.app`, a development build (`flutter run -d <iphone>`) and later a TestFlight build. **First confirm in Xcode that the bundle id and the privacy manifest are in the target** (docs/IOS_RELEASE.md).
| ID | Check | REQUIRED |
|---|---|---|
| I1 | The app name, icon and launch screen are Rehlaty's (not Flutter's) | yes |
| I2 | Landscape left and right; portrait never offered | yes |
| I3 | Safe areas: Dynamic Island/notch and the home indicator never cover content | yes |
| I4 | Edge-swipe back gesture works and does not trigger accidentally in games | yes |
| I5 | First use of dictation shows the microphone **and** speech-recognition prompts with the app's texts; denying either leaves the app working | yes |
| I6 | The silent switch and Bluetooth/AirPods: sound routing is sensible (YouTube and speech) | yes |
| I7 | The YouTube player: tapping the logo or title does not open Safari or the YouTube app; the video continues | yes |
| I8 | Dynamic Type at the largest accessibility size | yes |
| I9 | Low Power Mode, and an incoming call during a story | no |
| I10 | The archive's privacy report includes `PrivacyInfo.xcprivacy` with no tracking | yes |
| I11 | Delete the app: Keychain entry for the PIN (iOS may keep it across reinstall); check that a fresh install asks to create a PIN (record what actually happens) | yes |

## 4. iPad
| ID | Check | REQUIRED |
|---|---|---|
| P1 | Layout in landscape: wide layout, readable, nothing stretched; the app stays landscape although the iPad Info.plist lists portrait | yes |
| P2 | Split View and Slide Over: no crash; if it cannot run, it fails gracefully | yes |
| P3 | Stage Manager/resizable window (recent iPadOS): resizing does not break layouts | no |
| P4 | Apple Pencil/finger drawing in the drawing and tracing games | yes |
| P5 | External keyboard: Tab focus, Enter activates | no |
| P6 | AirPrint a worksheet | no |
| P7 | The same player containment checks as I7 | yes |

## Online features (ONLY if the online gate is open in the build; otherwise N/A)
Needs two accounts per role on two devices of different type (for example an Android phone and an iPhone), a real Firebase project and `docs/FIREBASE_BACKEND_SETUP_GUIDE.md` completed.
| ID | Check |
|---|---|
| O1 | Register a parent and a relative with throw-away e-mail addresses; verification and password-reset e-mails arrive in the chosen language |
| O2 | The parent adds the relative by user name; the relative accepts; a different relative cannot see the family; the parent can pause and remove the relative |
| O3 | Messages: phrases, stickers, text without links; the parent reads all of them; a message with a link is refused |
| O4 | Voice message: record and play on the other device; refuse the microphone: a clear message; after 14 days (or the function run on seeded data) it is gone |
| O5 | Voice and video calls: parent -> relative and relative -> parent on Wi-Fi/Wi-Fi, Wi-Fi/mobile data and mobile/mobile; microphone/camera prompts only at call start; declining the permission ends the call cleanly |
| O6 | Teacher: pending teacher invisible to parents until you approve; approved teacher's CV not readable by a relative |
| O7 | Delete account for each role: records disappear, others' data remains, sign-in no longer works |
| O8 | A signed-out device and an App Check-less script get nothing |

## Result sheet
| Device (model, OS) | Type | Date | Common set C1-C12 | Specific rows | Fails (link to report) | Tested? |
|---|---|---|---|---|---|---|
| | Android phone | | | | | |
| | Android tablet | | | | | |
| | iPhone | | | | | |
| | iPad | | | | | |
