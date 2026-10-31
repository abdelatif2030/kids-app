import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../l10n/strings.dart';

/// Child-safe personalisation of a child's world: every option is a fixed choice made from a short approved list.
/// There is no free text, no photo and nothing that identifies the child.
enum WorldTime { day, sunset, night }

class WorldTheme {
  final String id;
  final String Function() name;
  final Color sky, sea, grass;
  const WorldTheme(this.id, this.name, this.sky, this.sea, this.grass);
}

final List<WorldTheme> kWorldThemes = [
  WorldTheme('purple', () => tr2('بنفسجي سحري', 'Magic purple'), const Color(0xFFD9C8FF), const Color(0xFF8E7CF0), const Color(0xFF8FD694)),
  WorldTheme('teal', () => tr2('أخضر مائي', 'Sea green'), const Color(0xFFBFEFE8), const Color(0xFF3FB6A8), const Color(0xFFA6E08A)),
  WorldTheme('pink', () => tr2('وردي', 'Pink'), const Color(0xFFFFD3E4), const Color(0xFFE77BB0), const Color(0xFFB4E39A)),
  WorldTheme('gold', () => tr2('ذهبي', 'Golden'), const Color(0xFFFFE9B0), const Color(0xFFE9A94B), const Color(0xFFC7E58A)),
];

/// Names a child can give their island. A fixed list: names that do not identify anyone.
List<(String, String Function())> kIslandNames = [
  ('star', () => tr2('جزيرة النجوم', 'Star Island')),
  ('rainbow', () => tr2('جزيرة قوس قزح', 'Rainbow Island')),
  ('sunny', () => tr2('جزيرة الشمس', 'Sunny Island')),
  ('cloud', () => tr2('جزيرة السحاب', 'Cloud Island')),
  ('dream', () => tr2('جزيرة الأحلام', 'Dream Island')),
];

class WorldLook {
  final String theme, name;
  final WorldTime time;
  const WorldLook({this.theme = 'purple', this.name = 'star', this.time = WorldTime.day});

  WorldTheme get themeData => kWorldThemes.firstWhere((t) => t.id == theme, orElse: () => kWorldThemes.first);
  String get nameText => (kIslandNames.firstWhere((n) => n.$1 == name, orElse: () => kIslandNames.first)).$2();
  WorldLook copy({String? theme, String? name, WorldTime? time}) => WorldLook(theme: theme ?? this.theme, name: name ?? this.name, time: time ?? this.time);
}

/// Per child, on this device (`world_look`). Unknown or damaged values fall back to the defaults.
class WorldLookStore {
  WorldLookStore._();
  static const key = 'world_look';

  static Future<Map<String, dynamic>> _all() async {
    try {
      final m = jsonDecode((await SharedPreferences.getInstance()).getString(key) ?? '{}');
      return m is Map<String, dynamic> ? m : {};
    } catch (_) {
      return {};
    }
  }

  static Future<WorldLook> of(String childId) async {
    final v = (await _all())[childId];
    if (v is! Map) return const WorldLook();
    final t = '${v['th']}', n = '${v['n']}';
    return WorldLook(
      theme: kWorldThemes.any((x) => x.id == t) ? t : 'purple',
      name: kIslandNames.any((x) => x.$1 == n) ? n : 'star',
      time: WorldTime.values.firstWhere((x) => x.name == '${v['tm']}', orElse: () => WorldTime.day),
    );
  }

  static Future<void> save(String childId, WorldLook look) async {
    final all = await _all();
    all[childId] = {'th': look.theme, 'n': look.name, 'tm': look.time.name};
    try {
      await (await SharedPreferences.getInstance()).setString(key, jsonEncode(all));
    } catch (_) {}
  }

  static Future<void> forget(String childId) async {
    final all = await _all()
      ..remove(childId);
    try {
      await (await SharedPreferences.getInstance()).setString(key, jsonEncode(all));
    } catch (_) {}
  }
}
