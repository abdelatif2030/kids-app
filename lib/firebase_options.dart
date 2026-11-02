// PLACEHOLDER by default. Running `flutterfire configure` (docs/teachers-setup.md) replaces this file with your real
// project settings. While these values are REPLACE_ME the release gate (online_gate.dart) stays closed and nothing
// connects to Firebase.
//
// The web demo-login build supplies the PUBLIC web identifiers at build time instead of committing them:
//   --dart-define=FIREBASE_API_KEY=... --dart-define=FIREBASE_APP_ID=... --dart-define=FIREBASE_SENDER_ID=...
//   --dart-define=FIREBASE_PROJECT_ID=... --dart-define=FIREBASE_AUTH_DOMAIN=...
// See docs/DEMO_LOGIN.md. No analytics measurement id is ever set.
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;

class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform => const FirebaseOptions(
        apiKey: String.fromEnvironment('FIREBASE_API_KEY', defaultValue: 'REPLACE_ME'),
        appId: String.fromEnvironment('FIREBASE_APP_ID', defaultValue: 'REPLACE_ME'),
        messagingSenderId: String.fromEnvironment('FIREBASE_SENDER_ID', defaultValue: 'REPLACE_ME'),
        projectId: String.fromEnvironment('FIREBASE_PROJECT_ID', defaultValue: 'REPLACE_ME'),
        authDomain: String.fromEnvironment('FIREBASE_AUTH_DOMAIN'),
      );
}
