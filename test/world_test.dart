import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/world/world_progress.dart';
import 'package:kids_app/world/world_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  test('places open at fixed counts of real finished things and never close', () {
    expect(WorldProgress.of(0).unlocked.map((l) => l.id), ['island']);
    expect(WorldProgress.of(0).toNext, 3);
    expect(WorldProgress.of(3).isOpen('garden'), isTrue);
    expect(WorldProgress.of(14).isOpen('kingdom'), isFalse);
    expect(WorldProgress.of(40).next, isNull);
    expect(WorldProgress.of(-5).finished, 0);
    for (var i = 0; i < 60; i++) {
      expect(WorldProgress.of(i + 1).unlocked.length, greaterThanOrEqualTo(WorldProgress.of(i).unlocked.length));
    }
  });

  test('a celebration shows once and is kept per child', () async {
    final w = WorldProgress.of(8);
    expect((await WorldStore.fresh('a', w)).map((l) => l.id), ['garden', 'village']);
    await WorldStore.markSeen('a', ['garden', 'village']);
    expect(await WorldStore.fresh('a', w), isEmpty);
    expect(await WorldStore.fresh('b', w), hasLength(2));
    await WorldStore.forget('a');
    expect(await WorldStore.fresh('a', w), hasLength(2));
  });

  test('deleting a child removes only that child\'s world record', () async {
    await WorldStore.markSeen('a', ['garden']);
    await WorldStore.markSeen('b', ['garden']);
    await deleteOneChild('a');
    expect(await WorldStore.seen('a'), isEmpty);
    expect(await WorldStore.seen('b'), {'garden'});
  });

  testWidgets('the world screen shows open and locked places, then no repeat celebration', (tester) async {
    for (final g in ['g1', 'g2', 'g3']) {
      await GameRewards.complete('k1', g);
    }
    const child = ChildProfile(id: 'k1', nickname: 'L', age: 5);
    Future<void> open(String lang) async {
      await AppLocale.instance.set(lang);
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: const WorldScreen(child: child)));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await tester.pump();
    }

    await open('ar');
    expect(find.byKey(const ValueKey('world_garden')), findsOneWidget);
    expect(find.byKey(const ValueKey('world_locked_village')), findsOneWidget);
    expect(find.byKey(const ValueKey('world_new')), findsOneWidget);
    await open('en');
    expect(find.byKey(const ValueKey('world_new')), findsNothing);
    expect(find.text('Garden of discovery'), findsOneWidget);
    expect(find.textContaining('Finish 5 more'), findsOneWidget);
  });
}
