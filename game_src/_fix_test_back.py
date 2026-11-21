p = 'C:/dev/rehlaty/test/learn_web_games_test.dart'
s = open(p, encoding='utf8').read()
old = s[s.index("  testWidgets('no extra «رجوع» button over the games"):]
new = """  testWidgets('fun games have ONE small back button (top left); learning games keep their own and get none (owner 2026-11-20)', (t) async {
    debugDefaultTargetPlatformOverride = TargetPlatform.windows; // no built-in browser view in tests
    addTearDown(() => debugDefaultTargetPlatformOverride = null);
    for (final g in [...kWebGames, ...kLearnWebGames.values]) {
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: WebGameScreen(game: g, age: 5)));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('web_game_back')), g.isLearning ? findsNothing : findsOneWidget, reason: g.id);
    }
    debugDefaultTargetPlatformOverride = null;
  });
}
"""
s = s.replace(old, new)
open(p, 'w', encoding='utf8').write(s)
print('ok')
