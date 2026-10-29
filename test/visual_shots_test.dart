import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/worlds.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/games/letter_fishing_game.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/child_shell.dart';
import 'package:kids_app/journey/ui/land_map_screen.dart';
import 'package:kids_app/journey/lands.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/literacy/screens.dart';
import 'package:kids_app/stories/story_screens.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Renders representative screens to PNG files for a visual check. Only when SHOTS_DIR is set (never in a normal run).
const _kid = ChildProfile(id: 'k1', nickname: 'ليلى', age: 5);

Future<void> _loadFont() async {
  final l = FontLoader('Tajawal');
  for (final f in ['Tajawal-Regular.ttf', 'Tajawal-Medium.ttf', 'Tajawal-Bold.ttf', 'Tajawal-ExtraBold.ttf', 'Tajawal-Black.ttf']) {
    final file = File('assets/fonts/$f');
    if (file.existsSync()) l.addFont(Future.value(ByteData.sublistView(file.readAsBytesSync())));
  }
  await l.load();
}

void main() {
  final dir = Platform.environment['SHOTS_DIR'];
  if (dir == null) {
    test('visual shots are skipped unless SHOTS_DIR is set', () {});
    return;
  }
  final prefix = Platform.environment['SHOTS_PREFIX'] ?? 'shot';
  TestWidgetsFlutterBinding.ensureInitialized();

  final screens = <String, Widget Function()>{
    'home': () => const ChildShell(child: _kid),
    'map': () => LandMapScreen(land: landById('letters'), child: _kid),
    'game_odd': () => const OddOneOutGame(childId: 'k1', age: 5),
    'game_listen': () => const ListenPictureGame(childId: 'k1', age: 5),
    'game_fishing': () => const LetterFishingGame(childId: 'k1', age: 5, lang: 'ar'),
    'letters': () => const LettersHomeScreen(child: _kid),
    'stories': () => const StoriesHomeScreen(child: _kid),
  };

  for (final size in [const Size(390, 800), const Size(1280, 800)]) {
    for (final e in screens.entries) {
      testWidgets('${e.key} ${size.width.toInt()}', (t) async {
        await t.runAsync(_loadFont);
        SharedPreferences.setMockInitialValues({});
        FlutterSecureStorage.setMockInitialValues({});
        AppLocale.instance.set('ar');
        final store = JourneyStore(LocalJourneyRepository());
        await t.runAsync(store.load);
        await t.runAsync(() => store.addProfile(_kid));
        JourneyStore.instance = store;
        t.view.physicalSize = size;
        t.view.devicePixelRatio = 1;
        addTearDown(t.view.reset);
        final key = GlobalKey();
        await t.pumpWidget(RepaintBoundary(
          key: key,
          child: MaterialApp(
            debugShowCheckedModeBanner: false,
            theme: ThemeData(fontFamily: 'Tajawal', useMaterial3: true, scaffoldBackgroundColor: kWorldPalettes[RWorld.journey]!.top, appBarTheme: const AppBarTheme(centerTitle: true, backgroundColor: Colors.transparent, scrolledUnderElevation: 0, surfaceTintColor: Colors.transparent)),
            builder: (c, child) => Directionality(textDirection: TextDirection.rtl, child: child!),
            home: e.value(),
          ),
        ));
        await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 300)));
        await t.pump(const Duration(milliseconds: 500));
        final boundary = key.currentContext!.findRenderObject() as RenderRepaintBoundary;
        final image = await t.runAsync(() => boundary.toImage());
        final bytes = await t.runAsync(() => image!.toByteData(format: ui.ImageByteFormat.png));
        File('$dir/${prefix}_${e.key}_${size.width.toInt()}.png').writeAsBytesSync(bytes!.buffer.asUint8List());
      });
    }
  }
}
