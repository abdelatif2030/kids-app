import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Tickets, upgrades, racers and unlocked tracks of the race, one entry per child, on this device only
/// (shared_preferences `carnival_race`). Removed with the child's data.
class CarnivalRaceStore {
  static const key = 'carnival_race';
  static String _id(String? childId) => childId ?? '_guest';

  static Future<Map<String, dynamic>?> load(String? childId) async {
    final prefs = await SharedPreferences.getInstance();
    try {
      final all = jsonDecode(prefs.getString(key) ?? '{}') as Map<String, dynamic>;
      final v = all[_id(childId)];
      return v is Map<String, dynamic> ? v : null;
    } catch (_) {
      return null; // damaged data: the game starts fresh (it also checks every value itself)
    }
  }

  static Future<void> save(String? childId, Map<String, dynamic> save) async {
    final prefs = await SharedPreferences.getInstance();
    Map<String, dynamic> all;
    try {
      all = jsonDecode(prefs.getString(key) ?? '{}') as Map<String, dynamic>;
    } catch (_) {
      all = {};
    }
    all[_id(childId)] = save;
    await prefs.setString(key, jsonEncode(all));
  }

  static Future<void> forget(String childId) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(key);
    if (raw == null) return;
    try {
      final all = jsonDecode(raw) as Map<String, dynamic>..remove(childId);
      await prefs.setString(key, jsonEncode(all));
    } catch (_) {
      await prefs.remove(key);
    }
  }
}
