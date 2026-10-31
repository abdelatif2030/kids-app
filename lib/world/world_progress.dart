import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../l10n/strings.dart';

/// One place in the child's world. It opens when the child has finished [needs] real things (activities, games or
/// stories: the same count as the garden and the sticker album). Nothing is bought, nothing is lost, time does not count.
class WorldLocation {
  final String id;
  final int needs;
  final String Function() title;
  final String Function() hint;
  const WorldLocation(this.id, this.needs, this.title, this.hint);
}

final List<WorldLocation> kWorldLocations = [
  WorldLocation('island', 0, () => tr2('جزيرتي الأولى', 'My first island'), () => tr2('بيتك في عالم رحلتي', 'Your home in the Rehlaty world')),
  WorldLocation('garden', 3, () => tr2('حديقة الاكتشاف', 'Garden of discovery'), () => tr2('كلمات وصور جديدة', 'New words and pictures')),
  WorldLocation('village', 8, () => tr2('قرية التعلّم', 'Learning village'), () => tr2('حروف وأرقام وألوان', 'Letters, numbers and colours')),
  WorldLocation('kingdom', 15, () => tr2('مملكة الحكايات', 'Story kingdom'), () => tr2('قصص وحكايات', 'Stories and tales')),
  WorldLocation('creative', 25, () => tr2('جزيرة الإبداع', 'Creative island'), () => tr2('ارسم وابتكر', 'Draw and create')),
  WorldLocation('explore', 40, () => tr2('عالم الاستكشاف', 'World of exploration'), () => tr2('اكتشف مع ماما وبابا', 'Discover with mum and dad')),
];

/// What a child's world looks like for [finished] real finished things. Pure: the same number always gives the same world.
class WorldProgress {
  final int finished;
  final List<WorldLocation> unlocked;
  final WorldLocation? next;

  /// How many more finished things open [next] (0 when everything is open).
  final int toNext;
  const WorldProgress(this.finished, this.unlocked, this.next, this.toNext);

  factory WorldProgress.of(int finished) {
    final f = finished < 0 ? 0 : finished;
    final open = [for (final l in kWorldLocations) if (f >= l.needs) l];
    final closed = [for (final l in kWorldLocations) if (f < l.needs) l];
    return WorldProgress(f, open, closed.isEmpty ? null : closed.first, closed.isEmpty ? 0 : closed.first.needs - f);
  }

  bool isOpen(String id) => unlocked.any((l) => l.id == id);
}

/// Which unlocked places the child has already been told about (so each opening is celebrated once). Per child, on this
/// device only (`world_seen`); removed with the child's data.
class WorldStore {
  WorldStore._();
  static const key = 'world_seen';

  static Future<Map<String, Set<String>>> _all() async {
    try {
      final p = await SharedPreferences.getInstance();
      final m = jsonDecode(p.getString(key) ?? '{}') as Map<String, dynamic>;
      return {for (final e in m.entries) e.key: {for (final v in e.value as List<dynamic>) '$v'}};
    } catch (_) {
      return {};
    }
  }

  static Future<Set<String>> seen(String childId) async => (await _all())[childId] ?? {};

  /// Unlocked places the child has not been celebrated for yet (the first island is never a surprise).
  static Future<List<WorldLocation>> fresh(String childId, WorldProgress w) async {
    final s = await seen(childId);
    return [for (final l in w.unlocked) if (l.needs > 0 && !s.contains(l.id)) l];
  }

  static Future<void> markSeen(String childId, Iterable<String> ids) async {
    final all = await _all();
    all[childId] = {...(all[childId] ?? {}), ...ids};
    try {
      await (await SharedPreferences.getInstance()).setString(key, jsonEncode({for (final e in all.entries) e.key: e.value.toList()..sort()}));
    } catch (_) {}
  }

  static Future<void> forget(String childId) async {
    final all = await _all()
      ..remove(childId);
    try {
      await (await SharedPreferences.getInstance()).setString(key, jsonEncode({for (final e in all.entries) e.key: e.value.toList()}));
    } catch (_) {}
  }
}
