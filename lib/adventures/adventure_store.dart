import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Finished weekly adventures per child (`adventures`, this device only): the week and the theme. A week can be
/// recorded once, so the celebration and the record cannot be claimed twice. Missing a week costs nothing.
class AdventureStore {
  AdventureStore._();
  static const key = 'adventures';
  static const _max = 80;

  static Future<Map<String, dynamic>> _all() async {
    try {
      final m = jsonDecode((await SharedPreferences.getInstance()).getString(key) ?? '{}');
      return m is Map<String, dynamic> ? m : {};
    } catch (_) {
      return {};
    }
  }

  static Future<void> _write(Map<String, dynamic> all) async {
    try {
      await (await SharedPreferences.getInstance()).setString(key, jsonEncode(all));
    } catch (_) {}
  }

  /// weekId -> themeId, oldest first.
  static Future<Map<String, String>> finished(String childId) async {
    final v = (await _all())[childId];
    return v is Map ? {for (final e in v.entries) '${e.key}': '${e.value}'} : {};
  }

  /// True the first time [weekId] is recorded for the child.
  static Future<bool> record(String childId, String weekId, String themeId) async {
    final all = await _all();
    final mine = await finished(childId);
    if (mine.containsKey(weekId)) return false;
    mine[weekId] = themeId;
    final keys = mine.keys.toList()..sort();
    all[childId] = {for (final k in keys.length > _max ? keys.sublist(keys.length - _max) : keys) k: mine[k]};
    await _write(all);
    return true;
  }

  static Future<void> forget(String childId) async {
    final all = await _all()
      ..remove(childId);
    await _write(all);
  }
}
