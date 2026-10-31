import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart' show kReleaseMode;

import 'online_gate.dart';

import 'firebase_options.dart';
import 'firebase_repository.dart';
import 'family/family_repository.dart';
import 'family/memory_family_repository.dart';
import 'family/firebase_family_repository.dart';
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

Future<void> initFirebase() async {
  // The in-memory demo is a developer tool: it is ignored in release builds so a release can never show fake family data.
  if (kFamilyDemo && !kReleaseMode) familyRepository = demoParentRepo;
  lastOnlineGate = evaluateOnlineGate(firebaseConfigured: firebaseConfigured);
  if (!lastOnlineGate.open) return;
  try {
    await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
    _repository = FirebaseTeacherRepository();
    familyRepository = FirebaseFamilyRepository();
  } catch (_) {
    _repository = null;
  }
}
