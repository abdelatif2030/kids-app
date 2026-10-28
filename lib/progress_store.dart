import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'watch_history.dart';

/// One game round: which skill, and whether the child got it right on the
/// first try. Stored only on this device, for the parent dashboard. No names,
/// no audio, nothing is sent anywhere.
class SkillEvent {
  final String day; // yyyy-mm-dd
  final String skill;
  final bool ok;

  /// What was asked (a letter, a color name), to show what needs practice.
  final String? detail;

  /// The child profile it belongs to (null for events from before profiles existed).
  final String? childId;
  const SkillEvent(
      {required this.day, required this.skill, required this.ok, this.detail, this.childId});

  factory SkillEvent.fromJson(Map<String, dynamic> j) => SkillEvent(
        day: j['d'] as String,
        skill: j['k'] as String,
        ok: (j['o'] as int) == 1,
        detail: j['x'] as String?,
        childId: j['c'] as String?,
      );

  Map<String, dynamic> toJson() => {'d': day, 'k': skill, 'o': ok ? 1 : 0, 'x': ?detail, 'c': ?childId};
}

class ProgressStore {
  static const _key = 'skill_events';
  static const _keepDays = 60;
  static const _maxEvents = 3000;

  static Future<List<SkillEvent>> load() async {
    final raw = (await SharedPreferences.getInstance()).getString(_key);
    if (raw == null) return [];
    return [
      for (final e in jsonDecode(raw) as List<dynamic>)
        SkillEvent.fromJson(e as Map<String, dynamic>),
    ];
  }

  static Future<void> record(String skill, bool ok, {String? detail, String? childId}) async {
    final now = DateTime.now();
    final oldest = WatchHistory.dayKey(now.subtract(const Duration(days: _keepDays)));
    var events = (await load()).where((e) => e.day.compareTo(oldest) >= 0).toList()
      ..add(SkillEvent(
          day: WatchHistory.dayKey(now), skill: skill, ok: ok, detail: detail, childId: childId));
    if (events.length > _maxEvents) events = events.sublist(events.length - _maxEvents);
    await (await SharedPreferences.getInstance())
        .setString(_key, jsonEncode([for (final e in events) e.toJson()]));
  }

  /// Seconds the child spent in child mode, per day (kept by SessionManager).
  static Future<Map<String, int>> usedSecondsByDay() async {
    final prefs = await SharedPreferences.getInstance();
    return {
      for (final k in prefs.getKeys())
        if (k.startsWith('used_')) k.substring(5): prefs.getInt(k) ?? 0,
    };
  }

  static Future<int> lastAge() async =>
      (await SharedPreferences.getInstance()).getInt('last_age') ?? 6;
}
