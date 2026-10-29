import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/focusable_tap.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  testWidgets('FocusableTap: a tap, Enter and Space all activate it; Tab reaches it', (tester) async {
    var n = 0;
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(body: Center(child: FocusableTap(onTap: () => n++, child: const SizedBox(width: 80, height: 80, child: Text('x'))))),
    ));
    await tester.tap(find.text('x'));
    expect(n, 1);
    await tester.sendKeyEvent(LogicalKeyboardKey.tab); // focus moves to the tile
    await tester.pump();
    await tester.sendKeyEvent(LogicalKeyboardKey.enter);
    expect(n, 2);
    await tester.sendKeyEvent(LogicalKeyboardKey.space);
    expect(n, 3);
  });

  testWidgets('FocusableTap: disabled when there is no action, and it is exposed as a button', (tester) async {
    final handle = tester.ensureSemantics();
    await tester.pumpWidget(const MaterialApp(home: Scaffold(body: Center(child: FocusableTap(onTap: null, semanticLabel: 'Pick', child: SizedBox(width: 60, height: 60))))));
    final node = tester.getSemantics(find.byType(FocusableTap));
    expect(node.label, contains('Pick'));
    expect(node.flagsCollection.isButton, true);
    handle.dispose();
  });

  testWidgets('a game can be played with the keyboard alone: Tab to the answer, Enter to choose', (tester) async {
    tester.view.physicalSize = const Size(900, 1600);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    final rounds = makePatterns(5, Random(3));
    await tester.pumpWidget(MaterialApp(home: PatternGame(childId: 'kb', age: 5, random: Random(3))));
    await tester.pump();
    // Tab until the correct answer has focus, then press Enter: the round advances.
    final correct = find.byKey(ValueKey('opt${rounds[0].correct}'));
    expect(correct, findsOneWidget);
    var guard = 0;
    while (guard++ < 12) {
      await tester.sendKeyEvent(LogicalKeyboardKey.tab);
      await tester.pump();
      final focused = FocusManager.instance.primaryFocus;
      if (focused != null && find.descendant(of: correct, matching: find.byType(Focus)).evaluate().any((e) => (e.widget as Focus).focusNode == focused)) break;
      // also accept focus on any ancestor-focus inside the tile
      final ctx = focused?.context;
      if (ctx != null && correct.evaluate().isNotEmpty) {
        var inside = false;
        ctx.visitAncestorElements((a) {
          if (a == correct.evaluate().first) inside = true;
          return !inside;
        });
        if (inside) break;
      }
    }
    await tester.sendKeyEvent(LogicalKeyboardKey.enter);
    await tester.pump(const Duration(milliseconds: 700));
    expect(find.text('2 / 5'), findsOneWidget);
  });
}
