# Sign in with Apple: what you do (the code is built)

The app shows «تسجيل الدخول بحساب أبل» under the Google button on the sign-in and register pages (web uses Apple's pop-up, iPhone the system sheet). Apple requires it whenever Google sign-in is offered (guideline 4.8). It only works after this setup:

1. **Apple Developer account -> Identifiers -> your App ID `com.rehlaty.app` -> enable "Sign in with Apple".**
2. **Xcode (on the Mac):** open `ios/Runner.xcworkspace` -> Runner target -> Signing & Capabilities -> **+ Capability -> Sign in with Apple** (this creates `Runner.entitlements`; commit it).
3. **Firebase console -> Authentication -> Sign-in method -> Apple -> Enable.** For the iPhone app nothing else is needed. For the **web** demo also create a *Services ID* (Identifiers -> Services IDs, enable Sign in with Apple, add your demo domain and the Firebase `…firebaseapp.com/__/auth/handler` return URL), a *Key* with Sign in with Apple, and paste the Services ID, Team ID, Key ID and the private key into the Firebase Apple provider.
4. Test on a real iPhone (the simulator cannot sign in with a real Apple ID reliably).

Not tested here: no Mac, no Apple account, no Firebase project in this environment. Apple's "Hide my e-mail" addresses end in `privaterelay.appleid.com`: the app never needs the real e-mail.
