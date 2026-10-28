import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../library/learning_records.dart' show dayOf;
import 'letters_data.dart';

/// Spaced review for letters (a Leitner box per child and letter). A fully
/// right session moves a letter up a box and schedules it further away; any
/// mistake sends it back to box 0, due today. Box 3 or more counts as
/// "demonstrated" for the dashboard. This is a practice aid, never a diagnosis.
class LetterState {
  final int box; // 0..5
  final String due; // yyyy-mm-dd
  final int sessions;
  const LetterState(this.box, this.due, this.sessions);

  bool get mastered => box >= LiteracyStore.masteredBox;

  Map<String, dynamic> toJson() => {'b': box, 'd': due, 's': sessions};
  factory LetterState.fromJson(Map<String, dynamic> j) =>
      LetterState(j['b'] as int, j['d'] as String, j['s'] as int? ?? 0);
}

/// Parent-set progression.
class LiteracyConfig {
  final String order; // 'alphabet' or 'shapes'
  final int groupSize; // letters unlocked at a time
  final bool unlockAll;
  const LiteracyConfig({this.order = 'alphabet', this.groupSize = 4, this.unlockAll = false});

  Map<String, dynamic> toJson() => {'o': order, 'g': groupSize, 'u': unlockAll};
  factory LiteracyConfig.fromJson(Map<String, dynamic> j) => LiteracyConfig(
        order: j['o'] as String? ?? 'alphabet',
        groupSize: j['g'] as int? ?? 4,
        unlockAll: j['u'] as bool? ?? false,
      );
}

class LiteracyStore {
  static const masteredBox = 3;
  static const _intervals = [0, 1, 2, 4, 7, 14]; // days until the next review, by box
  static const _key = 'literacy_state';
  static const _cfgKey = 'literacy_config';

  static Future<Map<String, Map<String, LetterState>>> _load() async {
    final raw = (await SharedPreferences.getInstance()).getString(_key);
    if (raw == null) return {};
    final j = jsonDecode(raw) as Map<String, dynamic>;
    return {
      for (final c in j.entries)
        c.key: {
          for (final l in (c.value as Map<String, dynamic>).entries)
            l.key: LetterState.fromJson(l.value as Map<String, dynamic>),
        },
    };
  }

  static Future<Map<String, LetterState>> statesOf(String childId) async => (await _load())[childId] ?? {};

  /// Records one session on [letter]. [allRight]: every question about it was
  /// right on the first try.
  static Future<LetterState> record(String childId, String letter, bool allRight, {DateTime? now}) async {
    final all = await _load();
    final mine = all[childId] ??= {};
    final old = mine[letter] ?? const LetterState(0, '', 0);
    final box = allRight ? (old.box + 1).clamp(0, 5) : 0;
    final due = dayOf((now ?? DateTime.now()).add(Duration(days: _intervals[box])));
    final next = LetterState(box, due, old.sessions + 1);
    mine[letter] = next;
    await (await SharedPreferences.getInstance()).setString(
      _key,
      jsonEncode({
        for (final c in all.entries) c.key: {for (final l in c.value.entries) l.key: l.value.toJson()},
      }),
    );
    return next;
  }

  /// Letters practised before that are due for review today (or overdue),
  /// most overdue first.
  static Future<List<String>> due(String childId, {DateTime? now}) async {
    final today = dayOf(now ?? DateTime.now());
    final states = await statesOf(childId);
    final due = [for (final e in states.entries) if (e.value.due.compareTo(today) <= 0) e];
    due.sort((a, b) => a.value.due.compareTo(b.value.due));
    return [for (final e in due) e.key];
  }

  static Future<LiteracyConfig> config() async {
    final raw = (await SharedPreferences.getInstance()).getString(_cfgKey);
    return raw == null ? const LiteracyConfig() : LiteracyConfig.fromJson(jsonDecode(raw) as Map<String, dynamic>);
  }

  static Future<void> saveConfig(LiteracyConfig c) async =>
      (await SharedPreferences.getInstance()).setString(_cfgKey, jsonEncode(c.toJson()));

  /// The letters a child may open now: the first group, then each next group
  /// once at least half of the group before has been practised at all (box 1+).
  static List<ArabicLetter> unlocked(Map<String, LetterState> states, LiteracyConfig cfg) {
    final order = letterOrder(cfg.order);
    if (cfg.unlockAll) return order;
    var open = cfg.groupSize.clamp(1, 28);
    while (open < order.length) {
      final group = order.sublist(open - cfg.groupSize.clamp(1, 28), open);
      final started = group.where((l) => (states[l.letter]?.box ?? 0) >= 1).length;
      if (started * 2 >= group.length) {
        open += cfg.groupSize.clamp(1, 28);
      } else {
        break;
      }
    }
    return order.sublist(0, open.clamp(0, order.length));
  }
}
