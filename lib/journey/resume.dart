import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../safe_json.dart';

/// What a child opened last and has not finished: a game or a letter lesson. One entry per child,
/// local only. Finishing the thing clears it, so "continue" never points at something already done.
class ResumeEntry {
  final String kind; // 'game' or 'letter'
  final String ref; // a game id, or a letter
  final int atMs;
  const ResumeEntry(this.kind, this.ref, this.atMs);
}

class ResumeStore {
  static const _key = 'resume_state';
  static const maxAgeDays = 7;

  static Future<Map<String, dynamic>> _all() async => decodeMap(await SharedPreferences.getInstance(), _key);

  static Future<void> mark(String childId, String kind, String ref, {DateTime? now}) async {
    final all = await _all();
    all[childId] = {'k': kind, 'r': ref, 't': (now ?? DateTime.now()).millisecondsSinceEpoch};
    await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all));
  }

  /// Clears the entry only if it is this one (finishing a different thing leaves it alone).
  static Future<void> clear(String childId, String kind, String ref) async {
    final all = await _all();
    final e = all[childId];
    if (e is Map && e['k'] == kind && e['r'] == ref) {
      all.remove(childId);
      await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all));
    }
  }

  /// The child's unfinished entry, or null (none, damaged, or older than [maxAgeDays]).
  static Future<ResumeEntry?> last(String childId, {DateTime? now}) async {
    final e = (await _all())[childId];
    if (e is! Map) return null;
    final k = e['k'], r = e['r'], t = e['t'];
    if (k is! String || r is! String || t is! num) return null;
    final age = (now ?? DateTime.now()).millisecondsSinceEpoch - t.toInt();
    if (age > maxAgeDays * 24 * 3600 * 1000) return null;
    return ResumeEntry(k, r, t.toInt());
  }

  static Future<void> forget(String childId) async {
    final all = await _all()..remove(childId);
    await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all));
  }
}
