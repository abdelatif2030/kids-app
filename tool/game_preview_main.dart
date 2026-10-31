// Developer preview only (not part of the app): opens one game from a URL, e.g. ?game=maze&lang=ar&age=5
// Build: flutter build web -t tool/game_preview_main.dart --no-web-resources-cdn -o /tmp/game_preview
import 'package:flutter/material.dart';
import 'package:kids_app/design/tokens.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/l10n/app_locale.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final q = Uri.base.queryParameters;
  final lang = q['lang'] ?? 'en';
  await AppLocale.instance.set(lang);
  final age = int.tryParse(q['age'] ?? '') ?? 5;
  final id = q['game'] ?? 'maze';
  final game = kEducationalGames.firstWhere((g) => g.id == id);
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    theme: ThemeData(useMaterial3: true, colorSchemeSeed: DS.primary, fontFamily: 'Tajawal'),
    builder: (c, w) => Directionality(textDirection: AppLocale.instance.direction, child: w!),
    home: game.build('preview_child', age, lang),
  ));
}
