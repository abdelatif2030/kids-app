# Android: signing keys and building the release (exact steps)

**State today:** the Gradle project is ready to sign a release from `android/key.properties`, but **no key exists** and **no Android build has ever been run** (the development environment has no Android SDK and cannot download one). So "a release APK/AAB can be built" is **not verified**; what is verified is the configuration (see `test/release_config_test.dart`).

## What Google Play needs
1. **Application id `com.rehlaty.app` - confirmed by the owner 2026-10-31** (`android/app/build.gradle.kts` `applicationId` and `namespace`, and the Kotlin package). It is permanent after the first Google Play upload; do not change it.
2. An **upload key** (a Java keystore you create once) used to sign each `.aab` you upload. Use **Play App Signing** (Google holds the real app-signing key; you only keep the upload key). If you lose the upload key you can ask Google to reset it, but keep two backups anyway.
3. A signed **Android App Bundle** (`.aab`), not an APK, for Google Play.
4. Version: `version: 1.0.0+1` in `pubspec.yaml` (name 1.0.0, build number 1). Every upload needs a build number higher than the previous one (`+2`, `+3`, ...).

## Create the upload key (once; on your own computer, never in this repository)
Windows PowerShell (Android Studio installs `keytool`; or use the `keytool` in the JDK):
```
keytool -genkey -v -keystore $HOME\rehlaty-upload.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```
macOS/Linux:
```
keytool -genkey -v -keystore ~/rehlaty-upload.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```
You choose the passwords and answer the name/organisation questions. Write the passwords in a password manager and store the `.jks` file in two safe places. **Never** put them in chat, e-mail, the repository or this project folder.

## Tell the build about the key
1. Copy `android/key.properties.example` to `android/key.properties` (same folder).
2. Replace the four values: `storePassword`, `keyPassword`, `keyAlias` (use `upload`), `storeFile` (full path to the `.jks`; on Windows use `C:/Users/you/rehlaty-upload.jks` or double backslashes).
3. `android/key.properties` and `*.jks` are git-ignored. `key.properties.example` is only a template with placeholders.
If `key.properties` is missing, Gradle prints a warning and signs with the DEBUG key: that build **cannot** be uploaded to Google Play.

## Build
```
flutter doctor -v                       # Android toolchain must have a tick; accept licences: flutter doctor --android-licenses
flutter pub get
flutter build appbundle --release       # -> build/app/outputs/bundle/release/app-release.aab
flutter build apk --release             # -> build/app/outputs/flutter-apk/app-release.apk (for sideloading on your own devices)
```
## Check the result before uploading
```
keytool -printcert -jarfile build/app/outputs/flutter-apk/app-release.apk     # shows the signer; must NOT be "Android Debug"
```
Install the APK on a real phone and run `docs/REAL_DEVICE_TEST_GUIDE.md` first. Upload to the Play Console **Internal testing** track before any wider track.

## Facts about this project's Android configuration
| Item | Value | Source |
|---|---|---|
| minSdk / targetSdk / compileSdk | 24 (Android 7.0) / 36 / 36 | Flutter 3.47 defaults (`flutter.minSdkVersion` etc.) |
| Java/Kotlin | Java 17, Kotlin 2.4.0, Android Gradle Plugin 9.1.0, Gradle 9.3.1 | `android/` files |
| Orientation | `sensorLandscape` (both landscape directions) | manifest |
| Backup | `allowBackup=false` | manifest |
| Permissions | INTERNET, RECORD_AUDIO, MODIFY_AUDIO_SETTINGS, ACCESS_NETWORK_STATE (CAMERA and CHANGE_NETWORK_STATE removed for Release 1) | manifest |
| Icons | Rehlaty logo in all five densities (legacy PNG; no adaptive icon yet) | `res/mipmap-*` |
| Splash | logo on the brand lavender (`#EEE9FB`), Android 12+ splash colour set | `res/drawable*/launch_background.xml`, `values-v31` |
| Shrinking | R8/minify NOT enabled (not tested with the WebRTC/record plugins); optional later | `build.gradle.kts` |
| Firebase | No `google-services.json`, no Google Services Gradle plugin (not needed while Firebase is off; see `docs/FIREBASE_AND_ACCOUNTS.md`) | |

## Release 1 additions (2026-10-31)
- Manifest: `usesCleartextTraffic=false`, `allowBackup=false`, one launcher activity, **no deep links, no services, receivers or providers**; permissions are exactly INTERNET, RECORD_AUDIO, MODIFY_AUDIO_SETTINGS, ACCESS_NETWORK_STATE (a test pins the list). Camera and microphone are kept by decision and requested only at the moment a call, voice message or dictation starts.
- No `google-services.json` and no Google Services Gradle plugin: with the online gate closed nothing needs them. When the gate opens, see `docs/FIREBASE_AND_ACCOUNTS.md`.
- Play Console: the **Data safety** and **Families** answers are in `docs/STORE_PRIVACY_DISCLOSURES.md`; the listing draft in `docs/STORE_LISTING_DRAFT.md`; the individual-account steps in `docs/STORE_ACCOUNTS_INDIVIDUAL.md`.
- Still unverified: an Android build has never run (no SDK here); the signing configuration is checked statically only.
