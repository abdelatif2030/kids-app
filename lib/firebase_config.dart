import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart' show ValueNotifier, kReleaseMode;

import 'online_gate.dart';

import 'firebase_options.dart';
import 'firebase_repository.dart';
import 'family/family_repository.dart';
import 'family/memory_family_repository.dart';
import 'family/firebase_family_repository.dart' deferred as family_firebase;
import 'teachers_models.dart';

/// The online features are INTENDED ON for release 1 (owner decision), but they start only when the release gate in
/// `online_gate.dart` is open: a real Firebase configuration, account deletion that works, and a verified backend. While it is
/// closed, the app never touches Firebase and the teacher/family screens say the service is not available yet.
bool get firebaseConfigured => DefaultFirebaseOptions.currentPlatform.apiKey != 'REPLACE_ME' && DefaultFirebaseOptions.currentPlatform.projectId != 'REPLACE_ME';

TeacherRepository? _repository;

/// The family chat service (parents, relatives). Null while Firebase is off. Set by the Firebase setup, or
/// by tests.
FamilyRepository? familyRepository;

/// The repository for accounts/teachers, or null when Firebase is off or failed
/// to start (the rest of the app works the same either way).
TeacherRepository? get teacherRepository => _repository;

/// How long start-up waits for Firebase before giving up and starting the app without it.
const Duration firebaseStartTimeout = Duration(seconds: 6);

/// False while Firebase is still starting in the background (the first screen is drawn without waiting for it; the page that
/// depends on it, sign-in or home, waits for this). True by default, so tests and offline builds never wait.
final ValueNotifier<bool> firebaseSettled = ValueNotifier<bool>(true);

/// Starts Firebase without making the caller wait: [firebaseSettled] says when it is done (or has given up).
void startFirebaseInBackground() {
  firebaseSettled.value = false;
  initFirebase().whenComplete(() => firebaseSettled.value = true);
}

Future<void> initFirebase() async {
  // The in-memory demo is a developer tool: it is ignored in release builds so a release can never show fake family data.
  if (kFamilyDemo && !kReleaseMode) familyRepository = demoParentRepo;
  lastOnlineGate = evaluateOnlineGate(firebaseConfigured: firebaseConfigured);
  if (!lastOnlineGate.open) return;
  try {
    // If the Firebase script cannot be downloaded (blocked network, ad blocker) this call can wait forever; the app must
    // still start, with the online features simply unavailable.
    await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform).timeout(firebaseStartTimeout);
    _repository = FirebaseTeacherRepository();
    // The hosted demo login opens accounts only: family chat, calls and voice messages stay off.
    if (!kDemoLogin) {
      await family_firebase.loadLibrary();
      familyRepository = family_firebase.FirebaseFamilyRepository();
    }
  } catch (_) {
    _repository = null;
  }
}
