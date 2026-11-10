import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'web_game.dart';

/// A web game's progress (tickets, unlocked levels, relics...), one entry per child, on this device only
/// (shared_preferences key [WebGame.storeKey]). Erased with the child's data.
class WebGameStore {
  final WebGame game;
  const WebGameStore(this.game);

  static String _id(String? childId) => childId ?? '_guest';

  Future<Map<String, dynamic>?> load(String? childId) async {
    final prefs = await SharedPreferences.getInstance();
    try {
      final all = jsonDecode(prefs.getString(game.storeKey) ?? '{}') as Map<String, dynamic>;
      final v = all[_id(childId)];
      return v is Map<String, dynamic> ? v : null;
    } catch (_) {
      return null; // damaged data: the game starts fresh (it also checks every value itself)
    }
  }

  Future<void> save(String? childId, Map<String, dynamic> save) async {
    final prefs = await SharedPreferences.getInstance();
    Map<String, dynamic> all;
    try {
      all = jsonDecode(prefs.getString(game.storeKey) ?? '{}') as Map<String, dynamic>;
    } catch (_) {
      all = {};
    }
    all[_id(childId)] = save;
    await prefs.setString(game.storeKey, jsonEncode(all));
  }

  Future<void> forget(String childId) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(game.storeKey);
    if (raw == null) return;
    try {
      final all = jsonDecode(raw) as Map<String, dynamic>..remove(childId);
      await prefs.setString(game.storeKey, jsonEncode(all));
    } catch (_) {
      await prefs.remove(game.storeKey);
    }
  }

  /// Erases one child's progress in every web game.
  static Future<void> forgetChild(String childId) async {
    for (final g in kWebGames) {
      await WebGameStore(g).forget(childId);
    }
  }
}
