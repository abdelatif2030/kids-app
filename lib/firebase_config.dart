import 'package:firebase_core/firebase_core.dart';

import 'firebase_options.dart';
import 'firebase_repository.dart';
import 'teachers_models.dart';

/// Set to true after you created your Firebase project and ran
/// `flutterfire configure` (see docs/teachers-setup.md). While false, the app
/// never touches Firebase and the teacher area says it is not activated.
const kFirebaseEnabled = false;

TeacherRepository? _repository;

/// The repository for accounts/teachers, or null when Firebase is off or failed
/// to start (the rest of the app works the same either way).
TeacherRepository? get teacherRepository => _repository;

Future<void> initFirebase() async {
  if (!kFirebaseEnabled) return;
  try {
    await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
    _repository = FirebaseTeacherRepository();
  } catch (_) {
    _repository = null;
  }
}
