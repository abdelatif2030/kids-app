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
import 'parent_settings_screen.dart' deferred as settings_lib;
import 'games/games_choice.dart' deferred as games_choice_lib;
import 'games/games_hub.dart' deferred as games_hub_lib;

/// Opens the family chat (loads it first when needed).
Future<void> openFamily(BuildContext context, {required bool asRelative, required TeacherRepository? auth, required FamilyRepository? family}) async {
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
          builder: (context, snap) =>
              snap.connectionState == ConnectionState.done && !snap.hasError ? bubble_lib.FamilyBubbleButton(child: child) : const SizedBox.shrink(),
        );
}

/// The parent settings (opened behind the PIN): a big part of the app that a child never needs, so it is downloaded only
/// when a parent opens it.
class LazySettings extends StatelessWidget {
  const LazySettings({super.key});

  @override
  Widget build(BuildContext context) => FutureBuilder<void>(
    future: settings_lib.loadLibrary(),
    builder: (context, snap) {
      if (snap.connectionState == ConnectionState.done && !snap.hasError) return settings_lib.SettingsScreen();
      return Scaffold(
        appBar: AppBar(backgroundColor: Colors.transparent, elevation: 0),
        body: Center(child: snap.hasError ? const Icon(Icons.wifi_off_rounded, size: 48) : const CircularProgressIndicator()),
      );
    },
  );
}

Widget _loading() => const Center(child: CircularProgressIndicator());

/// The Games tab's two-card page (learning / fun games). The games are downloaded when the tab is first opened.
class LazyGamesChoice extends StatelessWidget {
  final VoidCallback? onBack;
  final VoidCallback onEducational;
  final VoidCallback onFun;
  const LazyGamesChoice({super.key, this.onBack, required this.onEducational, required this.onFun});

  @override
  Widget build(BuildContext context) => FutureBuilder<void>(
    future: games_choice_lib.loadLibrary(),
    builder: (context, snap) => snap.connectionState == ConnectionState.done && !snap.hasError
        ? games_choice_lib.GamesChoiceScreen(key: const ValueKey('games_choice_page'), onBack: onBack, onEducational: onEducational, onFun: onFun)
        : _loading(),
  );
}

/// The page of fun games (opened from the Games tab).
class LazyFunGames extends StatelessWidget {
  final ChildProfile? child;
  const LazyFunGames({super.key, this.child});

  @override
  Widget build(BuildContext context) => FutureBuilder<void>(
    future: games_choice_lib.loadLibrary(),
    builder: (context, snap) =>
        snap.connectionState == ConnectionState.done && !snap.hasError ? games_choice_lib.FunGamesScreen(child: child) : Scaffold(body: _loading()),
  );
}

/// The ten-island learning games hub.
class LazyGamesHub extends StatelessWidget {
  final ChildProfile child;
  final VoidCallback? onBack;
  const LazyGamesHub({super.key, required this.child, this.onBack});

  @override
  Widget build(BuildContext context) => FutureBuilder<void>(
    future: games_hub_lib.loadLibrary(),
    builder: (context, snap) => snap.connectionState == ConnectionState.done && !snap.hasError
        ? games_hub_lib.LearningGamesScreen(key: const ValueKey('games_hub'), child: child, onBack: onBack) // every learning game on one page (owner request 2026-11-11)
        : _loading(),
  );
}
