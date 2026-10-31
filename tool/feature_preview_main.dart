// Developer preview only (not part of the app): opens one new screen from a URL, e.g. ?screen=world&lang=ar&age=5
// screens: world, me, adventure, everyday, familytime, museum, lessons (parent review), videos (child list), branching
// Seeds the browser's local storage with a few finished games so the screens show real (preview) data.
// Build: flutter build web -t tool/feature_preview_main.dart --no-web-resources-cdn -o /tmp/feature_preview
import 'package:flutter/material.dart';
import 'package:kids_app/adventures/adventure_screen.dart';
import 'package:kids_app/design/tokens.dart';
import 'package:kids_app/everyday/everyday_screen.dart';
import 'package:kids_app/family_time/family_time_screen.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/ui/me_tab.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/main.dart' show VideoListScreen;
import 'package:kids_app/museum/museum_screen.dart';
import 'package:kids_app/stories/branching.dart';
import 'package:kids_app/stories/branching_screen.dart';
import 'package:kids_app/video_controls.dart';
import 'package:kids_app/world/world_screen.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final q = Uri.base.queryParameters;
  final lang = q['lang'] ?? 'en';
  await AppLocale.instance.set(lang);
  final age = int.tryParse(q['age'] ?? '') ?? 5;
  final n = int.tryParse(q['done'] ?? '') ?? 9;
  final child = ChildProfile(id: 'preview_child', nickname: lang == 'ar' ? 'ليلى' : 'Lina', age: age);
  for (final g in kEducationalGames.take(n)) {
    await GameRewards.complete(child.id, g.id);
  }
  final Widget home = switch (q['screen'] ?? 'world') {
    'me' => Scaffold(body: MeTab(child: child)),
    'adventure' => AdventureScreen(child: child),
    'everyday' => EverydayScreen(child: child),
    'familytime' => FamilyTimeScreen(child: child),
    'museum' => MuseumScreen(child: child),
    'lessons' => const VideoReviewScreen(),
    'videos' => VideoListScreen(age: age),
    'branching' => BranchingStoryScreen(story: kBranchingStories.first, child: child),
    _ => WorldScreen(child: child),
  };
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    theme: ThemeData(useMaterial3: true, colorSchemeSeed: DS.primary, fontFamily: 'Tajawal'),
    builder: (c, w) => Directionality(textDirection: AppLocale.instance.direction, child: w!),
    home: home,
  ));
}
