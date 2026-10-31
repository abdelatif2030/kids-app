import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:kids_app/design/layout.dart';
import 'package:kids_app/games/fun_games.dart';
import 'package:kids_app/games_screen.dart';
import 'package:kids_app/l10n/app_locale.dart';

Future<void> _show(WidgetTester t, Widget w, {Size size = const Size(900, 800)}) async {
  t.view.physicalSize = size;
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
  await t.pumpWidget(MaterialApp(key: UniqueKey(), home: w));
  await t.pump(const Duration(milliseconds: 100));
}

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    return AppLocale.instance.set('ar');
  });
  tearDown(() => AppLocale.instance.set('ar'));

  test('the fun games are listed by age: the youngest get the simplest', () {
    expect([for (final g in funGamesForAge(2)) g.id], ['whack', 'stars']);
    expect([for (final g in funGamesForAge(4)) g.id], ['whack', 'stars', 'xo']);
    expect([for (final g in funGamesForAge(5)) g.id], ['whack', 'stars', 'xo', 'snake']);
    expect(funGamesForAge(1), isEmpty);
  });

  testWidgets('the casual games sit with the learning games in one grid (the "Play with Rehlaty" tab is empty for now)', (t) async {
    await _show(t, const Scaffold(body: SizedBox(height: 520, child: GamesGrid(age: 5))), size: const Size(1300, 800));
    for (final g in funGamesForAge(5)) {
      expect(find.byKey(ValueKey('island_game_fun_${g.id}')), findsOneWidget, reason: g.id);
    }
    expect(find.byKey(const ValueKey('games_grid')), findsOneWidget);
  });

  testWidgets('tic-tac-toe: the child plays X and the computer answers with O; a finished game offers play again', (t) async {
    await _show(t, const TicTacToeGame());
    await t.tap(find.byKey(const ValueKey('cell_4')));
    await t.pump();
    expect(find.text('❌'), findsOneWidget);
    expect(find.text('⭕'), findsOneWidget);
    // keep playing the first free cell until the game ends
    for (var i = 0; i < 9 && find.byKey(const ValueKey('fun_again')).evaluate().isEmpty; i++) {
      await t.tap(find.byKey(ValueKey('cell_$i')), warnIfMissed: false);
      await t.pump();
    }
    expect(find.byKey(const ValueKey('fun_again')), findsOneWidget);
    await t.tap(find.byKey(const ValueKey('fun_again')));
    await t.pump();
    expect(find.text('❌'), findsNothing);
  });

  testWidgets('whack the mole: hitting the mole scores, missing costs nothing, and time ends the round gently', (t) async {
    await _show(t, const WhackMoleGame());
    final status = find.byKey(const ValueKey('fun_status'));
    expect(t.widget<Text>(status).data, contains('⏱ 30'));
    final mole = [for (var i = 0; i < 9; i++) if (find.descendant(of: find.byKey(ValueKey('hole_$i')), matching: find.text('🐹')).evaluate().isNotEmpty) i];
    expect(mole, hasLength(1));
    final miss = (mole.first + 1) % 9;
    await t.tap(find.byKey(ValueKey('hole_$miss')));
    await t.pump();
    expect(t.widget<Text>(status).data, contains('⭐ 0'));
    await t.tap(find.byKey(ValueKey('hole_${mole.first}')));
    await t.pump();
    expect(t.widget<Text>(status).data, contains('⭐ 1'));
    await t.pump(const Duration(seconds: 31));
    expect(find.byKey(const ValueKey('fun_again')), findsOneWidget);
    await t.pumpWidget(const SizedBox()); // stop the timers
  });

  testWidgets('catch the stars and snake open, run and end without errors', (t) async {
    await _show(t, const CatchStarsGame());
    await t.pump(const Duration(seconds: 31));
    expect(find.byKey(const ValueKey('fun_again')), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    await _show(t, const SnakeGame());
    await t.pump(const Duration(seconds: 6));
    expect(t.takeException(), isNull);
    await t.pumpWidget(const SizedBox());
  });

  testWidgets('FitHeight lays a tall game out for a short screen and scales it down: nothing overflows and taps still work', (t) async {
    var taps = 0;
    t.view.physicalSize = const Size(844, 330);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(
      home: Scaffold(
        body: FitHeight(
          child: Column(children: [
            const SizedBox(height: 480),
            ElevatedButton(key: const ValueKey('low_button'), onPressed: () => taps++, child: const Text('x')),
          ]),
        ),
      ),
    ));
    await t.pump();
    expect(t.takeException(), isNull);
    expect(t.getRect(find.byKey(const ValueKey('low_button'))).bottom, lessThanOrEqualTo(330));
    await t.tap(find.byKey(const ValueKey('low_button')));
    expect(taps, 1);
  });
}
