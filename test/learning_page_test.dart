import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/learning_page.dart';
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

Future<void> openLearning(WidgetTester t, Size size, {int age = 5}) async {
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
  await t.tap(find.byKey(const ValueKey('nav_tab.games')));
  await t.pump();
  await t.pump(const Duration(milliseconds: 50));
  await t.tap(find.byKey(const ValueKey('choice_educational')));
  await t.pump();
  await t.pump(const Duration(milliseconds: 50));
  await t.pump(const Duration(milliseconds: 400));
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  for (final (name, size) in kSizes) {
    testWidgets('$name: the learning page opens from the Games tab with cards and no overflow', (t) async {
      await openLearning(t, size);
      expect(find.byKey(const ValueKey('learning_page')), findsOneWidget);
      final first = learnEntries(_kid(5)).first.id;
      expect(find.byKey(ValueKey('learn_$first')), findsOneWidget);
      final card = t.getRect(find.byKey(ValueKey('learn_$first')));
      expect(card.width, greaterThanOrEqualTo(120), reason: 'a card is big enough for a small finger');
      expect(t.takeException(), isNull);
    });

    testWidgets('$name: the back arrow returns to the Games tab', (t) async {
      await openLearning(t, size);
      await t.tap(find.byKey(const ValueKey('learning_back')));
      await t.pump();
      await t.pump(const Duration(milliseconds: 400));
      expect(find.byKey(const ValueKey('learning_page')), findsNothing);
    });
  }

  test('every entry for every age has a card picture, and the casual games are not on the page', () {
    for (var age = 1; age <= 6; age++) {
      final ids = learnEntries(_kid(age)).map((e) => e.id).toList();
      expect(ids.toSet().length, ids.length, reason: 'no duplicates at age $age');
      for (final id in ids) {
        expect(kLearnCardIds, contains(id));
      }
      for (final casual in ['fun_xo', 'fun_snake', 'fun_whack', 'fun_stars']) {
        expect(ids, isNot(contains(casual)));
      }
      expect(ids, containsAll(['drawing', 'stories', 'adventures', 'feelings']));
    }
  });

  test('every card id has its picture file', () {
    for (final id in kLearnCardIds) {
      expect(File('assets/games/learn_cards/$id.webp').existsSync(), isTrue, reason: id);
    }
  });

  testWidgets('tapping a game card opens that game', (t) async {
    await openLearning(t, const Size(1024, 768));
    await t.tap(find.byKey(const ValueKey('learn_letters')));
    await t.pump();
    await t.pump(const Duration(milliseconds: 600));
    expect(find.byKey(const ValueKey('learning_page')).hitTestable(), findsNothing);
  });
}
