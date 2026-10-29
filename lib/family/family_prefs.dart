import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../safe_json.dart';
import 'family_models.dart';

/// Per-child chat settings chosen by the parent. Stored on this device only (`family_prefs`).
/// Default for every child: chat OFF, typing OFF.
class FamilyPrefs {
  static const _key = 'family_prefs';

  static Future<Map<String, dynamic>> _all() async {
    final p = await SharedPreferences.getInstance();
    return decodeMap(p, _key);
  }

  static Future<ChildChatPrefs> of(String childId) async => ChildChatPrefs.fromJson((await _all())[childId]);

  static Future<void> save(String childId, ChildChatPrefs prefs) async {
    final all = await _all();
    all[childId] = prefs.toJson();
    final p = await SharedPreferences.getInstance();
    await p.setString(_key, jsonEncode(all));
  }

  static Future<void> forget(String childId) async {
    final all = await _all();
    if (all.remove(childId) == null) return;
    final p = await SharedPreferences.getInstance();
    await p.setString(_key, jsonEncode(all));
  }
}
