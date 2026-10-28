import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'safe_json.dart';

/// One viewing of one video. Stored only on this device, for the parent summary.
class WatchEntry {
  final String day; // yyyy-mm-dd
  final String videoId;
  final String title;
  final int seconds;
  final bool completed;
  const WatchEntry({
    required this.day,
    required this.videoId,
    required this.title,
    required this.seconds,
    required this.completed,
  });

  factory WatchEntry.fromJson(Map<String, dynamic> j) => WatchEntry(
        day: j['d'] as String,
        videoId: j['id'] as String,
        title: j['t'] as String,
        seconds: j['s'] as int,
        completed: j['c'] as bool,
      );

  Map<String, dynamic> toJson() =>
      {'d': day, 'id': videoId, 't': title, 's': seconds, 'c': completed};
}

class WatchHistory {
  static const _key = 'watch_history';
  static const _keepDays = 30;

  static String dayKey(DateTime d) =>
      '${d.year}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';

  static Future<List<WatchEntry>> load() async {
    return decodeList(await SharedPreferences.getInstance(), _key, WatchEntry.fromJson);
  }

  /// Ignores views shorter than a few seconds (accidental taps).
  static Future<void> record({
    required String videoId,
    required String title,
    required int seconds,
    required bool completed,
  }) async {
    if (seconds < 5) return;
    final oldest = dayKey(DateTime.now().subtract(const Duration(days: _keepDays)));
    final entries = (await load()).where((e) => e.day.compareTo(oldest) >= 0).toList()
      ..add(WatchEntry(
        day: dayKey(DateTime.now()),
        videoId: videoId,
        title: title,
        seconds: seconds,
        completed: completed,
      ));
    await (await SharedPreferences.getInstance())
        .setString(_key, jsonEncode([for (final e in entries) e.toJson()]));
  }
}
