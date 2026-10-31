import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/companion/companion_store.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/media/audio_catalog.dart';
import 'package:kids_app/world/world_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  testWidgets('finishing a game the first time shows the companion once; a replay does not', (t) async {
    t.view.physicalSize = const Size(900, 2200);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.runAsync(() => CompanionStore.setWho('c1', CharacterVoice.nour));
    await t.runAsync(() => CompanionStore.noteAge('c1', 5));
    Future<void> play() async {
      final rounds = makePatterns(5, Random(9));
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: PatternGame(childId: 'c1', age: 5, random: Random(9))));
      await t.pump();
      for (final r in rounds) {
        await t.tap(find.byKey(ValueKey('opt${r.correct}')));
        await t.pump();
        await t.pump(const Duration(milliseconds: 700));
      }
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
      await t.pump();
    }

    await play();
    expect(find.byKey(const ValueKey('companion_bubble')), findsOneWidget);
    expect(find.text('شغل رائع! استمريت للآخر!'), findsOneWidget); // Nour, age 5
    await play();
    expect(find.byKey(const ValueKey('companion_bubble')), findsNothing); // already celebrated
  });

  testWidgets('a newly opened world place is announced by the companion once', (t) async {
    for (final g in ['a', 'b', 'c']) {
      await GameRewards.complete('k1', g);
    }
    const kid = ChildProfile(id: 'k1', nickname: 'L', age: 5);
    Future<void> open() async {
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: const WorldScreen(child: kid)));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
      await t.pump();
    }

    await open();
    expect(find.byKey(const ValueKey('companion_bubble')), findsOneWidget);
    await open();
    expect(find.byKey(const ValueKey('companion_bubble')), findsNothing);
  });
}
