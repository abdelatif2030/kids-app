import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:kids_app/journey/ui/kit.dart' show RCard;
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/games/numerals_game.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games_screen.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/resume.dart';
import 'package:kids_app/journey/ui/home_tab.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'Lina', age: 5);

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  test('mark, read, clear only the matching entry, and expire after 7 days', () async {
    final t0 = DateTime(2026, 11, 1);
    await ResumeStore.mark('k1', 'game', 'numerals', now: t0);
    expect((await ResumeStore.last('k1', now: t0.add(const Duration(days: 2))))!.ref, 'numerals');
    await ResumeStore.clear('k1', 'game', 'other'); // a different thing finished: keep it
    expect(await ResumeStore.last('k1', now: t0), isNotNull);
    expect(await ResumeStore.last('k1', now: t0.add(const Duration(days: 8))), isNull);
    expect(await ResumeStore.last('nobody', now: t0), isNull);
    await ResumeStore.clear('k1', 'game', 'numerals');
    expect(await ResumeStore.last('k1', now: t0), isNull);
  });

  test('damaged data never crashes, and deleting a child or all data forgets it', () async {
    SharedPreferences.setMockInitialValues({'resume_state': '{{{'});
    expect(await ResumeStore.last('k1'), isNull);
    await ResumeStore.mark('k1', 'letter', 'ب');
    await ResumeStore.mark('k2', 'letter', 'ت');
    await ResumeStore.forget('k1');
    expect(await ResumeStore.last('k1'), isNull);
    expect(await ResumeStore.last('k2'), isNotNull);
    await deleteChildData();
    expect(await ResumeStore.last('k2'), isNull);
  });

  testWidgets('opening a game from the list marks it, and finishing it clears the mark', (tester) async {
    tester.view.physicalSize = const Size(900, 2400);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(MaterialApp(
      key: UniqueKey(),
      home: const Scaffold(body: SingleChildScrollView(child: GamesGrid(age: 5, child: _kid))),
    ));
    await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
    await tester.pump();
    debugDefaultTargetPlatformOverride = TargetPlatform.windows; // no built-in browser view in tests
    final world = find.text(kEducationalGames.firstWhere((g) => g.id == 'letter_fishing').title());
    await tester.ensureVisible(world);
    await tester.pump();
    await tester.tap(world);
    await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
    await tester.pump();
    final mark = await tester.runAsync(() => ResumeStore.last('k1'));
    expect((mark!.kind, mark.ref), ('game', 'letter_fishing'));
    // finishing the game clears the mark (the web game reports `complete`; see learn_web_games_test.dart)
    await tester.runAsync(() => ResumeStore.clear('k1', 'game', 'letter_fishing'));
    expect(await tester.runAsync(() => ResumeStore.last('k1')), isNull);
    debugDefaultTargetPlatformOverride = null;
  });


  testWidgets('the home screen offers the unfinished game, and nothing when there is none', (tester) async {
    tester.view.physicalSize = const Size(900, 2400);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    Future<void> show() async {
      await tester.pumpWidget(MaterialApp(
        key: UniqueKey(),
        home: Scaffold(body: HomeTab(more: true, child: _kid, onExit: () {})),
      ));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await tester.pump();
    }

    await show();
    expect(find.text('كمّل من حيث توقفت'), findsNothing);
    await tester.runAsync(() => ResumeStore.mark('k1', 'game', 'letter_fishing'));
    await show();
    expect(find.text('كمّل من حيث توقفت'), findsOneWidget);
    // The "My Day" station may offer the same game on some days, so check inside the resume card only.
    final resumeCard = find.ancestor(of: find.text('كمّل من حيث توقفت'), matching: find.byType(RCard));
    expect(find.descendant(of: resumeCard, matching: find.text(kEducationalGames.firstWhere((g) => g.id == 'letter_fishing').title())), findsOneWidget);
    // a game outside the child's age is not offered
    await tester.runAsync(() => ResumeStore.mark('k1', 'game', 'letter_fishing'));
    const young = ChildProfile(id: 'k1', nickname: 'Lina', age: 2);
    await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: HomeTab(more: true, child: young, onExit: () {}))));
    await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
    await tester.pump();
    expect(find.text('كمّل من حيث توقفت'), findsNothing);
  });
}
