import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/learning_page.dart';
import 'package:kids_app/games/web_games/web_game.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/child_shell.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Simulated logical window sizes (layout tests, not devices).
const kSizes = <(String, Size)>[
  ('compact phone landscape', Size(640, 360)),
  ('standard phone landscape', Size(852, 393)),
  ('small tablet landscape', Size(1024, 768)),
  ('phone upright', Size(390, 844)),
];

ChildProfile _kid(int age) => ChildProfile(id: 'kid$age', nickname: 'سلمى', age: age);

Future<void> openLearning(WidgetTester t, Size size, {int age = 5, bool chooseArabic = true}) async {
  SharedPreferences.setMockInitialValues({});
  FlutterSecureStorage.setMockInitialValues({});
  final kid = _kid(age);
  final store = JourneyStore(LocalJourneyRepository());
  await t.runAsync(() async {
    await store.load();
    await store.addProfile(kid);
  });
  JourneyStore.instance = store;
  await AppLocale.instance.set('ar');
  t.view.physicalSize = size;
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
  await t.pumpWidget(MaterialApp(
    key: UniqueKey(),
    builder: (c, w) => Directionality(textDirection: TextDirection.rtl, child: w!),
    home: ChildShell(child: kid),
  ));
  await t.pump();
  await t.tap(find.byKey(const ValueKey('island_games'))); // the home picture's games island (there is no bottom bar)
  await t.pump();
  await t.pump(const Duration(milliseconds: 50));
  await t.tap(find.byKey(const ValueKey('choice_educational')));
  await t.pump();
  await t.pump(const Duration(milliseconds: 50));
  await t.pump(const Duration(milliseconds: 400));
  // the first question of the learning games: what to learn (Arabic = the whole learning world as before)
  expect(find.byKey(const ValueKey('learn_language_gate')), findsOneWidget);
  expect(find.byKey(const ValueKey('learn_lang_en')), findsOneWidget);
  if (chooseArabic) {
    await t.tap(find.byKey(const ValueKey('learn_lang_ar')));
    await t.pump();
    await t.pump(const Duration(milliseconds: 400));
    // then the two options of a language: the levels (as before) or «اتعلّم»
    expect(find.byKey(const ValueKey('learn_mode_screen')), findsOneWidget);
    expect(find.byKey(const ValueKey('learn_mode_learn')), findsOneWidget);
    await t.tap(find.byKey(const ValueKey('learn_mode_levels')));
    await t.pump();
    await t.pump(const Duration(milliseconds: 400));
  }
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  for (final (name, size) in kSizes) {
    testWidgets('$name: the learning page is the owner\'s picture with a back button and the play card, no overflow', (t) async {
      await openLearning(t, size);
      expect(find.byKey(const ValueKey('learning_page')), findsOneWidget);
      expect(find.byKey(const ValueKey('learning_play')), findsOneWidget);
      expect(find.byKey(const ValueKey('learning_back')), findsOneWidget);
      expect(find.byKey(const ValueKey('learning_sound')), findsOneWidget);
      for (final (level, _, _) in kLearnSigns) {
        expect(find.byKey(ValueKey('learning_sign_$level')), findsOneWidget, reason: level);
      }
      // nothing else: no chips, no cards, no sections
      expect(find.byKey(const ValueKey('learn_shelves')), findsNothing);
      expect(find.byKey(const ValueKey('card_letter_fishing')), findsNothing);
      expect(t.takeException(), isNull);
    });
  }

  for (final (name, size) in kSizes) {
    testWidgets('$name: the language question shows Arabic and English cards that fit, and Arabic opens the learning page', (t) async {
      await openLearning(t, size, chooseArabic: false);
      expect(find.text('تحب تتعلم إيه النهارده؟'), findsOneWidget);
      expect(find.byKey(const ValueKey('learn_lang_ar')), findsOneWidget);
      expect(find.byKey(const ValueKey('learn_lang_en')), findsOneWidget);
      expect(find.byKey(const ValueKey('learning_page')), findsNothing);
      expect(t.takeException(), isNull);
      await t.tap(find.byKey(const ValueKey('learn_lang_ar')));
      await t.pump();
      await t.pump(const Duration(milliseconds: 400));
      expect(find.byKey(const ValueKey('learn_mode_screen')), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('learn_mode_levels')));
      await t.pump();
      await t.pump(const Duration(milliseconds: 400));
      expect(find.byKey(const ValueKey('learning_page')), findsOneWidget);
      expect(t.takeException(), isNull);
    });
  }

  test('English with Rehlaty is registered: its own store key, learning star id and bundled page', () {
    expect(kLearnEnglish.learnLang, 'en');
    expect(kLearnEnglish.learnId, 'english_world');
    expect(kLearnEnglish.storeKey, isNot(kLearnLetters.storeKey));
    expect(File('${kLearnEnglish.base}index.html').existsSync(), isTrue);
    expect(File('assets/games/learn_voice/en/manifest.js').existsSync() || File('assets/games/learn_voice/manifest.js').existsSync(), isTrue);
  });

  test('«اتعلّم» is registered for the four languages (own store key, learn mode, bundled page)', () {
    final all = {'ar': kLearnBasicsAr, 'en': kLearnBasicsEn, 'de': kLearnBasicsDe, 'fr': kLearnBasicsFr};
    for (final e in all.entries) {
      expect(e.value.learnLang, e.key);
      expect(e.value.learnMode, 'learn');
      expect(kLearnWebGames.values, contains(e.value));
      expect(File('${e.value.base}index.html').existsSync(), isTrue);
    }
    expect({for (final g in all.values) g.storeKey}.length, 4);
  });

  testWidgets('a language leads to two options: levels and «اتعلّم»; both are tappable', (t) async {
    debugDefaultTargetPlatformOverride = TargetPlatform.windows;
    for (final lang in ['en', 'de', 'fr']) {
      await openLearning(t, const Size(1024, 768), chooseArabic: false);
      await t.tap(find.byKey(ValueKey('learn_lang_$lang')));
      await t.pump();
      await t.pump(const Duration(milliseconds: 400));
      expect(find.byKey(const ValueKey('learn_mode_screen')), findsOneWidget, reason: lang);
      expect(find.byKey(const ValueKey('learn_mode_levels')), findsOneWidget);
      expect(find.byKey(const ValueKey('learn_mode_learn')), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('learn_mode_learn')));
      await t.pump();
      await t.pump(const Duration(milliseconds: 400));
      expect(find.byKey(ValueKey('web_learn_basics_$lang')), findsOneWidget, reason: lang);
      expect(t.takeException(), isNull);
    }
    debugDefaultTargetPlatformOverride = null;
  });

  for (final (name, size) in [('tablet', const Size(1024, 768)), ('phone landscape', const Size(844, 390)), ('desktop', const Size(1366, 768))]) {
    testWidgets('$name: the four language cards are side by side in ONE row and all the same size', (t) async {
      await openLearning(t, size, chooseArabic: false);
      final rects = [for (final l in ['ar', 'en', 'de', 'fr']) t.getRect(find.byKey(ValueKey('learn_lang_$l')))];
      for (final r in rects) {
        expect(r.width, closeTo(rects.first.width, 0.5), reason: '$name: same size');
        expect(r.height, closeTo(rects.first.height, 0.5), reason: '$name: same size');
        expect(r.top, closeTo(rects.first.top, 0.5), reason: '$name: same row');
        expect(r.left >= 0 && r.right <= size.width, isTrue, reason: '$name: inside the screen');
      }
      expect(find.byKey(const ValueKey('app_logo')), findsOneWidget);
      expect(find.byKey(const ValueKey('learn_language_speak')), findsOneWidget);
      expect(t.takeException(), isNull);
    });
  }

  testWidgets('phone portrait: the four cards are two and two, still the same size', (t) async {
    await openLearning(t, const Size(360, 700), chooseArabic: false);
    final rects = [for (final l in ['ar', 'en', 'de', 'fr']) t.getRect(find.byKey(ValueKey('learn_lang_$l')))];
    for (final r in rects) {
      expect(r.width, closeTo(rects.first.width, 0.5));
      expect(r.height, closeTo(rects.first.height, 0.5));
    }
    expect(rects[0].top, closeTo(rects[1].top, 0.5));
    expect(rects[2].top, closeTo(rects[3].top, 0.5));
    expect(t.takeException(), isNull);
  });

  test('the voices of the choice screens are named and their folder is bundled', () {
    expect(LearnPickVoice.gate, endsWith('learn_pick/gate.mp3'));
    for (final l in ['ar', 'en', 'de', 'fr']) { expect(LearnPickVoice.mode(l), endsWith('learn_pick/mode_$l.mp3')); }
    expect(File('assets/audio/voices/learn_pick/README.txt').existsSync(), isTrue);
    expect(File('pubspec.yaml').readAsStringSync(), contains('- assets/audio/voices/learn_pick/'));
  });

  test('the picture is bundled and has the size the page expects', () {
    final f = File(kLearnPagePicture);
    expect(f.existsSync(), isTrue);
    expect(f.lengthSync(), greaterThan(10000));
    expect(kLearnPageAspect, closeTo(1536 / 1024, 0.001));
  });

  testWidgets('tapping the card opens the learning world', (t) async {
    debugDefaultTargetPlatformOverride = TargetPlatform.windows; // no built-in browser view in tests
    await openLearning(t, const Size(1024, 768));
    await t.tap(find.byKey(const ValueKey('learning_play')));
    await t.pump();
    await t.pump(const Duration(milliseconds: 600));
    expect(find.byKey(const ValueKey('learning_page')).hitTestable(), findsNothing);
    debugDefaultTargetPlatformOverride = null;
  });
}
