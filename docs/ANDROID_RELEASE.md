# Android release: step by step (run these on your Windows machine)

Nothing here has been run yet: the cloud session has no Android SDK. The Gradle files were edited but NOT built.

## 0. Decide once, before the first upload
- **Application ID** is now `com.rehlaty.app` (`android/app/build.gradle.kts`, and the package of `MainActivity.kt`).
  It can never change after the first Google Play upload. Edit both places if you want another id.
- **App name** on the phone: «رحلتي» (AndroidManifest label).
- **Launcher icon** is still Flutter's default. Replace it before release (needs your design; adding the
  `flutter_launcher_icons` package needs your approval).

## 1. Check the toolchain
```powershell
flutter doctor -v
```
Android toolchain must show a tick (Android Studio + SDK + licenses: `flutter doctor --android-licenses`).

## 2. First run on a real phone (debug)
Enable Developer options + USB debugging, connect the phone, then:
```powershell
flutter devices
flutter run -d <device id>
```
Then go through the "Device test" list in `docs/MANUAL_TESTS.md` and the quick list below.

## 3. Create the upload key (once; keep it safe and backed up)
```powershell
keytool -genkey -v -keystore $HOME\rehlaty-upload.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```
Create `android\key.properties` (it is git-ignored; never commit it or the .jks):
```
storePassword=<the password>
keyPassword=<the password>
keyAlias=upload
storeFile=C:\\Users\\<you>\\rehlaty-upload.jks
```
If `key.properties` is missing the release build is signed with the debug key and Google Play will refuse it.

## 4. Build the release bundle
```powershell
flutter build appbundle --release
```
Output: `build\app\outputs\bundle\release\app-release.aab`. For a quick install on your own phone use
`flutter build apk --release` instead.

## 5. Google Play Console
- Create the app, category Education, **target audience: children** (declare the real age bands). This applies the
  Families policy: no ads, no tracking, content suitable for the age.
- Data safety form: see `docs/PLAY_STORE_CHECKLIST.md`.
- Privacy policy URL: publish `docs/PRIVACY_POLICY_DRAFT.md` on a web page you control (needs your name/contact and
  a lawyer's check) and put the link in the console.
- Start with an **internal test** track, then a closed test with real parents, before production.
  (New personal developer accounts must run a closed test with testers for a minimum period before production access;
  check Google's current rule in the console.)

## Quick device checks (first 30 minutes)
1. Install, open, pick Arabic, create a child profile with a PIN. Close and reopen: profile is still there.
2. Play one video (internet on). Turn the internet off: the app must not crash.
3. Letters lesson and one story with the device voice. If no Arabic voice is installed, the message is clear.
4. Rotate the phone in a game; change the phone's font size to the largest: nothing is cut off.
5. Parent area: PIN, daily limit, quiet hours; let the timer run out: gentle rest screen, no cut-off mid-video.
6. Print/share a worksheet (PDF) from Printables.
7. Press the phone's Back button in a half-played game: the "Leave the game?" question appears.
