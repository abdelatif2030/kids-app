import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../media/audio_catalog.dart';

/// Per-child companion state, on this device only (`companion_state`): which companion the child picked, the age the
/// app last saw, and the events already celebrated (so a reward moment can never be claimed twice). The parent's
/// on/off switch is device-wide (`companion_on`, default on).
class CompanionStore {
  CompanionStore._();
  static const key = 'companion_state';
  static const onKey = 'companion_on';
  static const _maxClaimed = 400;

  /// The child whose screens are open right now (set by the child home), so shared widgets such as the game frame
  /// can use that child's companion without every game passing it along. Memory only.
  static String? currentChildId;

  static Future<Map<String, dynamic>> _all() async {
    try {
      final p = await SharedPreferences.getInstance();
      final m = jsonDecode(p.getString(key) ?? '{}');
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

  static Future<bool> enabled() async {
    try {
      return (await SharedPreferences.getInstance()).getBool(onKey) ?? true;
    } catch (_) {
      return true;
    }
  }

  static Future<void> setEnabled(bool v) async {
    try {
      await (await SharedPreferences.getInstance()).setBool(onKey, v);
    } catch (_) {}
  }

  static Future<CharacterVoice> who(String childId) async {
    final w = _of(await _all(), childId)['who'];
    return w == 'nour' ? CharacterVoice.nour : CharacterVoice.adam;
  }

  static Future<void> setWho(String childId, CharacterVoice who) async {
    if (who == CharacterVoice.companion) return;
    final all = await _all();
    all[childId] = {..._of(all, childId), 'who': who.name};
    await _write(all);
  }

  static Future<int?> age(String childId) async {
    final a = _of(await _all(), childId)['age'];
    return a is int ? a : null;
  }

  static Future<void> noteAge(String childId, int age) async {
    final all = await _all();
    final c = _of(all, childId);
    if (c['age'] == age) return;
    all[childId] = {...c, 'age': age};
    await _write(all);
  }

  /// True the first time [eventId] is claimed for the child, false ever after.
  static Future<bool> claim(String childId, String eventId) async {
    final all = await _all();
    final c = _of(all, childId);
    final claimed = [for (final v in (c['claimed'] as List<dynamic>? ?? const [])) '$v'];
    if (claimed.contains(eventId)) return false;
    claimed.add(eventId);
    final kept = claimed.length > _maxClaimed ? claimed.sublist(claimed.length - _maxClaimed) : claimed;
    all[childId] = {...c, 'claimed': kept};
    await _write(all);
    return true;
  }

  static Future<void> forget(String childId) async {
    final all = await _all()
      ..remove(childId);
    await _write(all);
  }
}
