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
      expect(find.text('عايز تتعلم إيه؟'), findsOneWidget);
      expect(find.byKey(const ValueKey('learn_lang_ar')), findsOneWidget);
      expect(find.byKey(const ValueKey('learn_lang_en')), findsOneWidget);
      expect(find.byKey(const ValueKey('learning_page')), findsNothing);
      expect(t.takeException(), isNull);
      await t.tap(find.byKey(const ValueKey('learn_lang_ar')));
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
