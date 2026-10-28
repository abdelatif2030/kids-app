import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/journey/day_prefs.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/my_day.dart';
import 'package:kids_app/journey/ui/day_settings_screen.dart';
import 'package:kids_app/journey/ui/my_day_cards.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'Lina', age: 5);

Future<void> _show(WidgetTester t, Widget w) async {
  t.view.physicalSize = const Size(900, 2600);
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
  await t.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: SingleChildScrollView(child: w))));
  await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
  await t.pump();
}

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  group('DayPrefs', () {
    test('default: all four stations and the surprise', () async {
      final p = await DayPrefs.load();
      expect(p.active, Station.values);
      expect(p.surprise, true);
    });

    test('saves a choice, keeps natural order, and never saves an empty set', () async {
      await DayPrefs.save(const DayPrefs(stations: {Station.tell, Station.learn}, surprise: false));
      final p = await DayPrefs.load();
      expect(p.active, [Station.learn, Station.tell]);
      expect(p.surprise, false);
      final fixed = await DayPrefs.save(const DayPrefs(stations: {}));
      expect(fixed.stations.length, 4);
      expect((await DayPrefs.load()).stations.length, 4);
    });

    test('damaged stored names are ignored', () async {
      SharedPreferences.setMockInitialValues({'day_stations': ['nonsense']});
      expect((await DayPrefs.load()).stations.length, 4);
    });
  });

  group('surprise', () {
    test('differs from the game of the day, suits the age, rerolls change it, and falls back to a family activity', () {
      final t = DateTime(2026, 11, 10, 9);
      final today = gameOfDay(t, 5)!;
      final s = surpriseOfDay(t, 5);
      expect(s.game, isNotNull);
      expect(s.game!.id, isNot(today.id));
      expect(s.game!.fitsAge(5), true);
      expect({for (var i = 0; i < 6; i++) surpriseOfDay(t, 5, reroll: i).game!.id}.length, greaterThan(1));
      expect(surpriseOfDay(t, 2).game, isNull); // only one game for age 2: a family activity instead
      expect(surpriseOfDay(t, 1).game, isNull);
    });
  });

  group('screens', () {
    testWidgets('the child sees only the stations the parent turned on', (tester) async {
      await tester.runAsync(() => DayPrefs.save(const DayPrefs(stations: {Station.play, Station.tell}, surprise: false)));
      await _show(tester, const MyDayCard(child: _kid, onLearn: _noop));
      expect(find.byKey(const ValueKey('station_play')), findsOneWidget);
      expect(find.byKey(const ValueKey('station_tell')), findsOneWidget);
      expect(find.byKey(const ValueKey('station_learn')), findsNothing);
      expect(find.byKey(const ValueKey('station_discover')), findsNothing);
      expect(find.byKey(const ValueKey('surprise')), findsNothing);
    });

    testWidgets('the surprise can be changed and skipped, and nothing is lost by skipping', (tester) async {
      await _show(tester, const MyDayCard(child: _kid, onLearn: _noop));
      expect(find.byKey(const ValueKey('surprise')), findsOneWidget);
      final before = tester.widget<Text>(find.descendant(of: find.byKey(const ValueKey('surprise')), matching: find.byType(Text)).at(2)).data;
      await tester.tap(find.byKey(const ValueKey('surprise_change')));
      await tester.pump();
      final after = tester.widget<Text>(find.descendant(of: find.byKey(const ValueKey('surprise')), matching: find.byType(Text)).at(2)).data;
      expect(after, isNot(before));
      await tester.tap(find.byKey(const ValueKey('surprise_skip')));
      await tester.pump();
      expect(find.byKey(const ValueKey('surprise')), findsNothing);
      for (final s in Station.values) {
        expect(find.byKey(ValueKey('station_${s.name}')), findsOneWidget); // the stations stay
      }
    });

    testWidgets('the parent screen toggles stations, keeps one on, and saves', (tester) async {
      await _show(tester, const SizedBox(height: 1400, child: DaySettingsScreen()));
      await tester.tap(find.byKey(const ValueKey('day_learn')));
      await tester.pump();
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
      await tester.tap(find.byKey(const ValueKey('day_play')));
      await tester.tap(find.byKey(const ValueKey('day_discover')));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
      await tester.pump();
      // only "tell" is left on: turning it off is refused with a message
      await tester.tap(find.byKey(const ValueKey('day_tell')));
      await tester.pump();
      expect(find.textContaining('محطة واحدة على الأقل'), findsNWidgets(2)); // the intro and the refusal note
      final saved = await tester.runAsync(DayPrefs.load);
      expect(saved!.active, [Station.tell]);
      await tester.tap(find.byKey(const ValueKey('day_surprise')));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
      expect((await tester.runAsync(DayPrefs.load))!.surprise, false);
    });
  });
}

void _noop() {}
