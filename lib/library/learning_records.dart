import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// What the app knows about a moment of learning. The three levels are kept
/// apart on purpose: listening to a story is exposure, trying an exercise is
/// practice, and only a right answer on the first try shows understanding.
enum Evidence { exposure, practice, demonstrated }

/// What kind of thing was learned.
enum RecordType { letter, word, story, lesson, activity, creative }

class LearningRecord {
  final String childId;
  final String day; // yyyy-mm-dd
  final RecordType type;
  final String ref; // letter, vocabulary id, story id, activity id...
  final Evidence evidence;
  final int seconds; // listened seconds for a story, else 0
  const LearningRecord(this.childId, this.day, this.type, this.ref, this.evidence, [this.seconds = 0]);

  Map<String, dynamic> toJson() =>
      {'c': childId, 'd': day, 't': type.name, 'r': ref, 'e': evidence.name, 's': seconds};

  factory LearningRecord.fromJson(Map<String, dynamic> j) => LearningRecord(
        j['c'] as String,
        j['d'] as String,
        RecordType.values.byName(j['t'] as String),
        j['r'] as String,
        Evidence.values.byName(j['e'] as String),
        j['s'] as int? ?? 0,
      );
}

String dayOf(DateTime d) =>
    '${d.year.toString().padLeft(4, '0')}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';

/// Local only (shared_preferences `learning_records`, last 90 days, 2500 rows).
class LearningRecords {
  static const prefsKey = 'learning_records';
  static const keepDays = 90;
  static const maxRows = 2500;

  static Future<List<LearningRecord>> all() async {
    final raw = (await SharedPreferences.getInstance()).getString(prefsKey);
    if (raw == null) return [];
    return [for (final e in jsonDecode(raw) as List<dynamic>) LearningRecord.fromJson(e as Map<String, dynamic>)];
  }

  static Future<List<LearningRecord>> forChild(String childId, {int days = 7, DateTime? now}) async {
    final end = now ?? DateTime.now();
    final from = dayOf(DateTime(end.year, end.month, end.day).subtract(Duration(days: days - 1)));
    return [
      for (final r in await all())
        if (r.childId == childId && r.day.compareTo(from) >= 0) r,
    ];
  }

  static Future<void> addAll(List<LearningRecord> add) async {
    if (add.isEmpty) return;
    final cutoff = dayOf(DateTime.now().subtract(const Duration(days: keepDays)));
    var list = [for (final r in await all()) if (r.day.compareTo(cutoff) >= 0) r, ...add];
    if (list.length > maxRows) list = list.sublist(list.length - maxRows);
    await (await SharedPreferences.getInstance())
        .setString(prefsKey, jsonEncode([for (final r in list) r.toJson()]));
  }

  static Future<void> add(String childId, RecordType type, String ref, Evidence evidence,
          {int seconds = 0, DateTime? now}) =>
      addAll([LearningRecord(childId, dayOf(now ?? DateTime.now()), type, ref, evidence, seconds)]);
}
