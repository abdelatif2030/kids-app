import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// The points and stars a child earns in the learning world: one finished level = 1 to 3 stars and some points
/// (the more answers right at the first try, the more). Earned only by finishing, never for time spent; kept per child on
/// this device only and erased with the child's data. The game keeps the same numbers in its own save; this copy is what
/// the child's profile shows.
class LearnPoints {
  static const key = 'learn_points';

  static Future<Map<String, dynamic>> _all(SharedPreferences prefs) async {
    try {
      final v = jsonDecode(prefs.getString(key) ?? '{}');
      return v is Map<String, dynamic> ? v : <String, dynamic>{};
    } catch (_) {
      return <String, dynamic>{}; // damaged data: start again
    }
  }

  /// Adds one finished level. [stars] 1..3, [points] 0..100 (anything else is ignored).
  static Future<void> add(String childId, {required int points, required int stars, String? level}) async {
    if (points < 0 || points > 100 || stars < 1 || stars > 3) return;
    final prefs = await SharedPreferences.getInstance();
    final all = await _all(prefs);
    final cur = all[childId] is Map ? (all[childId] as Map).cast<String, dynamic>() : <String, dynamic>{};
    final best = cur['best'] is Map ? (cur['best'] as Map).cast<String, dynamic>() : <String, dynamic>{};
    if (level != null && level.length <= 24) {
      final old = (best[level] as num?)?.toInt() ?? 0;
      if (stars > old) best[level] = stars;
    }
    cur['total'] = ((cur['total'] as num?)?.toInt() ?? 0) + points;
    cur['plays'] = ((cur['plays'] as num?)?.toInt() ?? 0) + 1;
    cur['stars'] = ((cur['stars'] as num?)?.toInt() ?? 0) + stars;
    cur['best'] = best;
    all[childId] = cur;
    await prefs.setString(key, jsonEncode(all));
  }

  /// (points, finished levels, stars) of one child.
  static Future<({int points, int plays, int stars})> of(String childId) async {
    final prefs = await SharedPreferences.getInstance();
    final m = (await _all(prefs))[childId];
    if (m is! Map) return (points: 0, plays: 0, stars: 0);
    int n(String k) => (m[k] as num?)?.toInt() ?? 0;
    return (points: n('total'), plays: n('plays'), stars: n('stars'));
  }

  static Future<void> forget(String childId) async {
    final prefs = await SharedPreferences.getInstance();
    final all = await _all(prefs)
      ..remove(childId);
    await prefs.setString(key, jsonEncode(all));
  }
}
