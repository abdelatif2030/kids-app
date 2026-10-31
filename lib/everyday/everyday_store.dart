import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../library/learning_records.dart' show dayOf;

/// Everyday tasks a parent confirmed with the child (`everyday_done`, this device only): childId -> taskId -> days.
/// A task counts once per day per child. Confirming gives no star: it is a family record, nothing more.
class EverydayStore {
  EverydayStore._();
  static const key = 'everyday_done';
  static const _maxDays = 60;

  static Future<Map<String, dynamic>> _all() async {
    try {
      final m = jsonDecode((await SharedPreferences.getInstance()).getString(key) ?? '{}');
      return m is Map<String, dynamic> ? m : {};
    } catch (_) {
      return {};
    }
  }

  static Map<String, List<String>> _mine(Map<String, dynamic> all, String childId) {
    final v = all[childId];
    if (v is! Map) return {};
    return {for (final e in v.entries) '${e.key}': [for (final d in (e.value is List ? e.value as List : const [])) '$d']};
  }

  static Future<Map<String, List<String>>> done(String childId) async => _mine(await _all(), childId);

  /// True when this confirmation was new today.
  static Future<bool> confirm(String childId, String taskId, {DateTime? now}) async {
    final day = dayOf(now ?? DateTime.now());
    final all = await _all();
    final mine = _mine(all, childId);
    final days = mine[taskId] ?? [];
    if (days.contains(day)) return false;
    days.add(day);
    mine[taskId] = days.length > _maxDays ? days.sublist(days.length - _maxDays) : days;
    all[childId] = mine;
    try {
      await (await SharedPreferences.getInstance()).setString(key, jsonEncode(all));
    } catch (_) {}
    return true;
  }

  static Future<bool> doneToday(String childId, String taskId, {DateTime? now}) async =>
      (await done(childId))[taskId]?.contains(dayOf(now ?? DateTime.now())) ?? false;

  static Future<void> forget(String childId) async {
    final all = await _all()
      ..remove(childId);
    try {
      await (await SharedPreferences.getInstance()).setString(key, jsonEncode(all));
    } catch (_) {}
  }
}
