import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../library/learning_records.dart' show dayOf;
import '../safe_json.dart';

class ListenEntry {
  final String storyId;
  final String day;
  final int seconds; // seconds actually listened that day
  final bool completed;
  const ListenEntry(this.storyId, this.day, this.seconds, this.completed);

  Map<String, dynamic> toJson() => {'s': storyId, 'd': day, 't': seconds, 'c': completed};
  factory ListenEntry.fromJson(Map<String, dynamic> j) =>
      ListenEntry(j['s'] as String, j['d'] as String, j['t'] as int, j['c'] as bool);
}

/// Where the child stopped in a story: seconds for a recording, a chapter and
/// sentence for a device-voice story.
class ResumePoint {
  final int seconds;
  final int chapter;
  const ResumePoint(this.seconds, this.chapter);
}

/// Favourites, resume points and listening history, per child, on the device
/// only (shared_preferences `story_state`).
class StoryStore {
  static const _key = 'story_state';
  static const maxHistory = 300;

  static Future<Map<String, dynamic>> _all() async {
    return decodeMap(await SharedPreferences.getInstance(), _key);
  }

  static Future<void> _save(Map<String, dynamic> all) async =>
      (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all));

  static Map<String, dynamic> _mine(Map<String, dynamic> all, String childId) =>
      (all[childId] ??= <String, dynamic>{'fav': <dynamic>[], 'pos': <String, dynamic>{}, 'hist': <dynamic>[]})
          as Map<String, dynamic>;

  static Future<Set<String>> favorites(String childId) async {
    final m = (await _all())[childId] as Map<String, dynamic>?;
    return {for (final e in (m?['fav'] as List<dynamic>? ?? [])) e as String};
  }

  static Future<bool> toggleFavorite(String childId, String storyId) async {
    final all = await _all();
    final mine = _mine(all, childId);
    final fav = {for (final e in mine['fav'] as List<dynamic>) e as String};
    final added = fav.add(storyId);
    if (!added) fav.remove(storyId);
    mine['fav'] = fav.toList();
    await _save(all);
    return added;
  }

  static Future<ResumePoint?> resumePoint(String childId, String storyId) async {
    final m = (await _all())[childId] as Map<String, dynamic>?;
    final p = (m?['pos'] as Map<String, dynamic>?)?[storyId] as Map<String, dynamic>?;
    return p == null ? null : ResumePoint(p['s'] as int, p['c'] as int);
  }

  static Future<void> savePosition(String childId, String storyId, int seconds, int chapter) async {
    final all = await _all();
    ((_mine(all, childId)['pos'] as Map<String, dynamic>))[storyId] = {'s': seconds, 'c': chapter};
    await _save(all);
  }

  static Future<void> clearPosition(String childId, String storyId) async {
    final all = await _all();
    (_mine(all, childId)['pos'] as Map<String, dynamic>).remove(storyId);
    await _save(all);
  }

  static Future<List<ListenEntry>> history(String childId) async {
    final m = (await _all())[childId] as Map<String, dynamic>?;
    return [for (final e in (m?['hist'] as List<dynamic>? ?? [])) ListenEntry.fromJson(e as Map<String, dynamic>)];
  }

  /// Adds [seconds] to today's entry for the story (one row per story per day).
  static Future<void> addListening(String childId, String storyId, int seconds, {bool completed = false, DateTime? now}) async {
    if (seconds <= 0 && !completed) return;
    final day = dayOf(now ?? DateTime.now());
    final all = await _all();
    final hist = [for (final e in _mine(all, childId)['hist'] as List<dynamic>) ListenEntry.fromJson(e as Map<String, dynamic>)];
    final i = hist.indexWhere((e) => e.storyId == storyId && e.day == day);
    if (i >= 0) {
      hist[i] = ListenEntry(storyId, day, hist[i].seconds + seconds, hist[i].completed || completed);
    } else {
      hist.add(ListenEntry(storyId, day, seconds, completed));
    }
    final trimmed = hist.length > maxHistory ? hist.sublist(hist.length - maxHistory) : hist;
    _mine(all, childId)['hist'] = [for (final e in trimmed) e.toJson()];
    await _save(all);
  }
}
