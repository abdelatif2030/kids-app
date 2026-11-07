import 'package:flutter/material.dart';

import 'family/family_repository.dart';
import 'firebase_config.dart' show familyRepository;
import 'journey/models.dart';
import 'teachers_models.dart';

// These parts of the app are downloaded only when they are first opened (Dart "deferred" libraries), so the first screen of
// the web app does not have to download them: the family chat and calls, and the teachers section. Nothing about how they
// work changes; the first time takes a moment longer, the next times they are already there.
import 'family/family_bubble.dart' deferred as bubble_lib;
import 'family/family_entry.dart' deferred as family_lib;
import 'teachers_screens.dart' deferred as teachers_lib;

/// Opens the family chat (loads it first when needed).
Future<void> openFamily(
  BuildContext context, {
  required bool asRelative,
  required TeacherRepository? auth,
  required FamilyRepository? family,
}) async {
  await family_lib.loadLibrary();
  if (!context.mounted) return;
  family_lib.openFamily(context, asRelative: asRelative, auth: auth, family: family);
}

/// The teachers section's first page, loaded when the page is opened.
class LazyTeachersEntry extends StatelessWidget {
  const LazyTeachersEntry({super.key});

  @override
  Widget build(BuildContext context) => FutureBuilder<void>(
        future: teachers_lib.loadLibrary(),
        builder: (context, snap) {
          if (snap.connectionState == ConnectionState.done && !snap.hasError) return teachers_lib.TeachersEntryScreen();
          return Scaffold(
            appBar: AppBar(backgroundColor: Colors.transparent, elevation: 0),
            body: Center(child: snap.hasError ? const Icon(Icons.wifi_off_rounded, size: 48) : const CircularProgressIndicator()),
          );
        },
      );
}

/// The round family bubble of the child's home (only built when the parent switched family chat on).
class LazyFamilyBubble extends StatelessWidget {
  final ChildProfile child;
  const LazyFamilyBubble({super.key, required this.child});

  @override
  Widget build(BuildContext context) => familyRepository == null
      ? const SizedBox.shrink() // no family service: nothing to show, so nothing is downloaded
      : FutureBuilder<void>(
        future: bubble_lib.loadLibrary(),
        builder: (context, snap) => snap.connectionState == ConnectionState.done && !snap.hasError ? bubble_lib.FamilyBubbleButton(child: child) : const SizedBox.shrink(),
      );
}
