# iOS: preparing the App Store release

**State today (2026-10-31):** nothing was built or archived (no macOS/Xcode in the development environment). The owner confirmed the bundle identifier **`com.rehlaty.app`** (same as Android); it is set in `ios/Runner.xcodeproj/project.pbxproj` for the Runner target (Debug, Release, Profile) and `com.rehlaty.app.RunnerTests` for the test target. The privacy manifest `ios/Runner/PrivacyInfo.xcprivacy` is added to the Runner target by editing the project file (file reference, build file, group entry, Resources phase). **Neither change was opened in Xcode**: on the Mac, confirm that Signing & Capabilities shows `com.rehlaty.app`, and that `PrivacyInfo.xcprivacy` appears under Build Phases > Copy Bundle Resources (if Xcode reports the project file as damaged, restore it from your backup and re-add the file by hand: right-click Runner > Add Files). Bundle ids are first-come: the id must still be free in your Apple Developer account when you create the App ID.

## What you need (accounts, certificates, profiles)
1. **A Mac with Xcode** (current stable). iOS apps cannot be built on Windows or Linux. (A cloud Mac or a CI service with macOS runners also works; it needs your signing credentials uploaded, which only you can do.)
2. **Apple Developer Program membership** (paid, yearly) - as an individual or an organisation (an organisation needs a D-U-N-S number). Apps for children are published under the account holder's name.
3. In the developer portal (or let Xcode do it with "Automatically manage signing"):
   - an **App ID** with the confirmed bundle identifier (capabilities: none needed for this build; do not enable Push, Sign in with Apple or Associated Domains because they are not used);
   - a **development certificate** and a **distribution certificate** (Apple Distribution);
   - a **provisioning profile** (development for your test devices; App Store distribution for the upload).
4. In **App Store Connect**: create the app record (name, primary language, bundle id, SKU), choose the **Kids Category** if you want it (age bands "5 and under" / "6-8"; stricter rules, see below), fill the privacy answers.
5. **Team id**: in Xcode, Runner target -> Signing & Capabilities -> choose your Team. I did not set a team (there is none in the project).

## Project facts (checked in code; not built)
| Item | Value |
|---|---|
| Display name / bundle name | Rehlaty / Rehlaty |
| Deployment target | iOS 15.0 |
| Devices | iPhone and iPad (`TARGETED_DEVICE_FAMILY = 1,2`) |
| Orientation | iPhone: landscape only. iPad: all four listed (Apple expects this unless full screen is required); the app locks landscape at run time |
| Version | `FLUTTER_BUILD_NAME` / `FLUTTER_BUILD_NUMBER` from `pubspec.yaml` (`1.0.0+1`) |
| Signing style | Automatic, no team set |
| Icons | AppIcon set present (Rehlaty logo, 1024 marketing icon included) |
| Launch screen | `LaunchScreen.storyboard`: Rehlaty logo centred on `#EEE9FB` |
| Privacy strings | microphone, camera, speech recognition (all describe the optional features) |
| Privacy manifest | `ios/Runner/PrivacyInfo.xcprivacy` (no tracking, no collected data for the default build, UserDefaults reason CA92.1), added to the Runner target in the project file; confirm in Xcode. **Update `NSPrivacyCollectedDataTypes` before enabling the online features** |
| Podfile | not in the repository; `flutter build ios` creates it on the Mac (needs CocoaPods installed) |
| Firebase | no `GoogleService-Info.plist`; the online release gate is CLOSED (`docs/ONLINE_RELEASE_GATE.md`) |

## Steps on the Mac
1. `flutter doctor -v` (Xcode and CocoaPods ticks), `flutter pub get`, `cd ios && pod install --repo-update`.
2. Open `ios/Runner.xcworkspace` (not the `.xcodeproj`).
3. **Check the privacy manifest** is listed under Build Phases > Copy Bundle Resources (it was added by editing the project file). Review its contents against the final plugin list and the online gate state.
4. Check the bundle identifier is `com.rehlaty.app` and choose your Team (Signing & Capabilities). Keep "Automatically manage signing" on for the first archive.
5. `flutter build ipa --release` (or Xcode: Product -> Archive). Fix any signing message by following Xcode's prompt.
6. Upload with Xcode Organizer -> Distribute App -> App Store Connect, or `xcrun altool`/Transporter. **I have not uploaded anything.**
7. In App Store Connect: add the build to **TestFlight internal testing** first. Test on a real iPhone and iPad with `docs/REAL_DEVICE_TEST_GUIDE.md` (adapt the Android-specific lines).

## Questions Apple will ask that you must answer
- **Export compliance (encryption):** answer PENDING; evidence and steps in `docs/EXPORT_COMPLIANCE.md`. `ITSAppUsesNonExemptEncryption` is not set.
- **Privacy "nutrition label":** default build collects nothing (see `docs/STORE_PRIVACY_DISCLOSURES.md`). Enabling the online features changes the answers.
- **Age rating and Kids Category (not chosen; recommendation in `docs/STORE_LISTING_DRAFT.md`):** Kids Category apps may not include third-party analytics or advertising, must not link out without a parental gate, and are reviewed more strictly. The app embeds YouTube's player (third-party web content) - this is the main review risk for the Kids Category; ask Apple's review notes or choose the normal Education category with a 4+ rating. Decision for the owner.
- **Account deletion:** required by Apple if the app lets people create accounts. Child profiles are local (deleted inside the app). Parent/teacher/relative accounts exist only if the online features are enabled; see `docs/FIREBASE_AND_ACCOUNTS.md`.
- **Sign in with Apple:** required only if you offer other third-party/social sign-in (Google). The app offers e-mail/password only (online features), so it is not required while Google sign-in is absent.
- **Review notes:** the parent area is behind a PIN and a grown-up question; no ads; children cannot browse YouTube; videos need parent approval; online features are off.

## Not possible here
Building, signing, archiving, TestFlight and every device test on iOS.

## Release 1 additions (2026-10-31)
- No URL schemes, associated domains, background modes, push or Sign in with Apple capability are configured (a test checks this); there is no `.entitlements` file.
- Camera, microphone and speech-recognition strings are kept because the owner keeps the features; they are requested only when a call, a voice message or dictation starts.
- Online features: gate closed; if opened later, update the privacy manifest and App Privacy answers first and add account deletion (`docs/ACCOUNT_DELETION_DESIGN.md`).
- Individual account steps: `docs/STORE_ACCOUNTS_INDIVIDUAL.md`. Listing draft and Kids Category assessment: `docs/STORE_LISTING_DRAFT.md`.
