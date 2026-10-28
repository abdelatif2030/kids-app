import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/stickers.dart';
import 'package:kids_app/journey/ui/my_day_cards.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:math';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  test('the album has distinct stickers and unlocks one per finished thing, never more than it holds', () {
    expect(kStickers.length, 24);
    expect({for (final s in kStickers) s.emoji}.length, 24);
    expect({for (final s in kStickers) s.name()}.length, 24);
    expect(stickersUnlocked(0), 0);
    expect(stickersUnlocked(5), 5);
    expect(stickersUnlocked(99), 24);
    expect(stickersUnlocked(-3), 0);
    expect(newestSticker(0), isNull);
    expect(newestSticker(1), kStickers[0]);
    expect(newestSticker(24), kStickers[23]);
    expect(newestSticker(25), isNull);
  });

  test('the count is the real number of finished things and does not fall', () async {
    expect(await finishedCount('k1'), 0);
    await GameRewards.complete('k1', 'a');
    await GameRewards.complete('k1', 'a'); // a repeat is not another sticker
    await GameRewards.complete('k1', 'b');
    expect(await finishedCount('k1'), 2);
    expect(await finishedCount('k2'), 0);
  });

  testWidgets('finishing a game for the first time reveals the next sticker; a repeat reveals none', (tester) async {
    tester.view.physicalSize = const Size(900, 2200);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    Future<void> playPattern() async {
      final rounds = makePatterns(5, Random(9));
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: PatternGame(childId: 'c1', age: 5, random: Random(9))));
      await tester.pump();
      for (final r in rounds) {
        await tester.tap(find.byKey(ValueKey('opt${r.correct}')));
        await tester.pump();
        await tester.pump(const Duration(milliseconds: 700));
      }
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await tester.pump();
    }

    await playPattern();
    expect(find.byKey(const ValueKey('new_sticker')), findsOneWidget);
    expect(find.text(kStickers[0].emoji), findsOneWidget);
    await playPattern(); // the same game again
    expect(find.byKey(const ValueKey('new_sticker')), findsNothing);
  });

  testWidgets('the album card shows earned stickers in colour and the rest as locked', (tester) async {
    await tester.runAsync(() async {
      await GameRewards.complete('k1', 'a');
      await GameRewards.complete('k1', 'b');
      await GameRewards.complete('k1', 'c');
    });
    await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: const Scaffold(body: SingleChildScrollView(child: StickerAlbumCard(child: ChildProfile(id: 'k1', nickname: 'L', age: 5))))));
    await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
    await tester.pump();
    expect(find.byKey(const ValueKey('sticker_0')), findsOneWidget);
    expect(find.byKey(const ValueKey('sticker_2')), findsOneWidget);
    expect(find.byKey(const ValueKey('locked_3')), findsOneWidget);
    expect(find.byKey(const ValueKey('locked_23')), findsOneWidget);
  });
}
