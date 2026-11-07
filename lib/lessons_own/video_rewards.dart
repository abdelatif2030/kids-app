import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../notifications/notification_events.dart';
import '../safe_json.dart';

/// Which of the owner's lesson videos a child watched through (local only, `video_completions`). A finished video earns ONE
/// star, the first time only; watching it again earns nothing more, and a star is never given for time spent or for skipping
/// to the end (see [videoWatchedEnough]). No streaks, nothing is ever taken away.
class VideoRewards {
  VideoRewards._();
  static const _key = 'video_completions';

  static Future<Map<String, dynamic>> _all() async => decodeMap(await SharedPreferences.getInstance(), _key);

  static Future<Set<String>> doneIds(String childId) async {
    final m = (await _all())[childId];
    return m is Map ? m.keys.map((k) => '$k').toSet() : <String>{};
  }

  /// How many different videos this child finished = stars earned from videos.
  static Future<int> count(String childId) async => (await doneIds(childId)).length;

  /// Records a finished video. Returns true when this finish earned the star (the first time).
  static Future<bool> complete(String childId, String lessonId, {DateTime? now}) async {
    final all = await _all();
    final mine = ((all[childId] as Map?)?.cast<String, dynamic>()) ?? <String, dynamic>{};
    final first = !mine.containsKey(lessonId);
    final at = now ?? DateTime.now();
    final old = (mine[lessonId] as Map?)?.cast<String, dynamic>();
    mine[lessonId] = {
      'd': '${at.year}-${at.month.toString().padLeft(2, '0')}-${at.day.toString().padLeft(2, '0')}',
      'n': ((old?['n'] as num?)?.toInt() ?? 0) + 1,
    };
    all[childId] = mine;
    await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all));
    if (first) await NotificationEvents.videoStarEarned(childId, lessonId, now: at);
    return first;
  }
}

/// A video counts as watched when the child really played at least 70% of its length (watching through, not dragging the
/// bar to the end) and it reached the end.
bool videoWatchedEnough({required Duration played, required Duration length}) =>
    length > Duration.zero && played.inMilliseconds >= length.inMilliseconds * 0.7;
