import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../everyday/everyday_data.dart';
import '../library/activities.dart';
import '../library/learning_records.dart' show dayOf;
import '../notifications/notification_store.dart';

/// One thing for the family to do together, taken from activities that already exist in the app.
class FamilyIdea {
  final String kind; // 'activity' or 'everyday'
  final String id;
  final String title;
  final int? minutes;
  const FamilyIdea(this.kind, this.id, this.title, this.minutes);
}

/// Ideas for [age]: parent-supervised real activities plus everyday tasks that need a grown-up present.
List<FamilyIdea> familyIdeasFor(int age) => [
      for (final a in kRealActivities)
        if (age >= a.minAge && age <= a.maxAge) FamilyIdea('activity', a.id, a.title, a.minutes),
      for (final t in kEverydayTasks)
        if (t.fitsAge(age) && t.supervision == Supervision.adultPresent) FamilyIdea('everyday', t.id, t.title(), null),
    ];

/// The idea for a given day: stable inside the day, different on other days, nothing random.
FamilyIdea? ideaOfDay(int age, DateTime day) {
  final ideas = familyIdeasFor(age);
  if (ideas.isEmpty) return null;
  return ideas[DateTime.utc(day.year, day.month, day.day).difference(DateTime.utc(2024, 1, 1)).inDays % ideas.length];
}

/// The family's planned time (a weekday and a length) and the sessions the parent confirmed. Per child, this device
/// only (`family_time`). Missing a planned day costs nothing: there are no streaks and no reminders about missing.
class FamilyTimeStore {
  FamilyTimeStore._();
  static const key = 'family_time';
  static const lengths = [15, 30, 45];
  static const _maxDays = 120;

  static Future<Map<String, dynamic>> _all() async {
    try {
      final m = jsonDecode((await SharedPreferences.getInstance()).getString(key) ?? '{}');
      return m is Map<String, dynamic> ? m : {};
    } catch (_) {
      return {};
    }
  }

  static Future<void> _write(Map<String, dynamic> all) async {
    try {
      await (await SharedPreferences.getInstance()).setString(key, jsonEncode(all));
    } catch (_) {}
  }

  static Map<String, dynamic> _of(Map<String, dynamic> all, String childId) {
    final v = all[childId];
    return v is Map<String, dynamic> ? v : <String, dynamic>{};
  }

  /// Weekday 1 (Monday) to 7 (Sunday), or null when nothing is planned.
  static Future<int?> weekday(String childId) async {
    final w = _of(await _all(), childId)['wd'];
    return w is int && w >= 1 && w <= 7 ? w : null;
  }

  static Future<int> minutes(String childId) async {
    final m = _of(await _all(), childId)['min'];
    return m is int && lengths.contains(m) ? m : 30;
  }

  static Future<void> plan(String childId, {required int? weekday, int? minutes}) async {
    final all = await _all();
    final c = {..._of(all, childId)};
    if (weekday == null) {
      c.remove('wd');
    } else {
      c['wd'] = weekday.clamp(1, 7);
    }
    if (minutes != null && lengths.contains(minutes)) c['min'] = minutes;
    all[childId] = c;
    await _write(all);
  }

  /// day -> idea id, for the days the parent confirmed a family time.
  static Future<Map<String, String>> sessions(String childId) async {
    final s = _of(await _all(), childId)['done'];
    return s is Map ? {for (final e in s.entries) '${e.key}': '${e.value}'} : {};
  }

  /// True when this confirmation is new for [now]'s day (one per day).
  static Future<bool> confirm(String childId, String ideaId, {DateTime? now}) async {
    final day = dayOf(now ?? DateTime.now());
    final all = await _all();
    final c = {..._of(all, childId)};
    final done = await sessions(childId);
    if (done.containsKey(day)) return false;
    done[day] = ideaId;
    final days = done.keys.toList()..sort();
    c['done'] = {for (final d in days.length > _maxDays ? days.sublist(days.length - _maxDays) : days) d: done[d]};
    all[childId] = c;
    await _write(all);
    return true;
  }

  /// Sessions confirmed in the 7 days ending on [now].
  static Future<int> thisWeek(String childId, {DateTime? now}) async {
    final end = now ?? DateTime.now();
    final from = dayOf(DateTime(end.year, end.month, end.day).subtract(const Duration(days: 6)));
    final to = dayOf(end);
    return (await sessions(childId)).keys.where((d) => d.compareTo(from) >= 0 && d.compareTo(to) <= 0).length;
  }

  /// A parent notification on the planned weekday, once per day. Nothing is sent about a missed day.
  static Future<void> remind(String childId, String nickname, {DateTime? now}) async {
    final at = now ?? DateTime.now();
    if (await weekday(childId) != at.weekday) return;
    if ((await sessions(childId)).containsKey(dayOf(at))) return;
    await NotificationStore.instance.add(AppNotification(
      id: 'ft_${childId}_${dayOf(at)}',
      audience: NotificationAudience.parent,
      childId: childId,
      kind: NotificationKind.daily,
      titleAr: 'وقت العائلة مع $nickname اليوم',
      titleEn: 'Family time with $nickname today',
      bodyAr: 'خططتم لوقت عائلي اليوم. اختاروا فكرة وابدؤوا.',
      bodyEn: 'You planned family time today. Pick an idea and start.',
      at: at,
    ));
  }

  static Future<void> forget(String childId) async {
    final all = await _all()
      ..remove(childId);
    await _write(all);
  }
}
