import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../safe_json.dart';

/// «مكتبتي»: things a child marked with a heart. Words and games are kept here; favourite stories
/// stay in StoryStore. Local only, per child.
class FavoritesStore {
  static const _key = 'favorites';
  static const kinds = ['word', 'game'];

  static Future<Map<String, dynamic>> _all() async => decodeMap(await SharedPreferences.getInstance(), _key);

  static Future<Set<String>> of(String childId, String kind) async {
    final mine = (await _all())[childId];
    if (mine is! Map) return {};
    return {for (final e in (mine[kind] as List? ?? const [])) '$e'};
  }

  /// Flips the heart; returns true when [ref] is now a favourite.
  static Future<bool> toggle(String childId, String kind, String ref) async {
    final all = await _all();
    final mine = <String, dynamic>{...((all[childId] as Map?)?.cast<String, dynamic>() ?? {})};
    final set = {for (final e in (mine[kind] as List? ?? const [])) '$e'};
    final added = set.add(ref);
    if (!added) set.remove(ref);
    mine[kind] = set.toList();
    all[childId] = mine;
    await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all));
    return added;
  }

  static Future<void> forget(String childId) async {
    final all = await _all()..remove(childId);
    await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all));
  }
}
