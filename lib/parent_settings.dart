import 'dart:convert';
import 'dart:math';

import 'package:crypto/crypto.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Parent PIN (secure storage) and parent settings (shared preferences).
/// Only a salted hash of the PIN is stored, never the PIN itself.
class ParentSettings {
  ParentSettings._();
  static final instance = ParentSettings._();

  static const _maxAttempts = 5;
  static const _lockout = Duration(seconds: 30);

  final _secure = const FlutterSecureStorage();

  Future<bool> hasPin() async => await _secure.read(key: 'pin_hash') != null;

  Future<void> setPin(String pin) async {
    final salt = base64Encode(List.generate(16, (_) => Random.secure().nextInt(256)));
    await _secure.write(key: 'pin_salt', value: salt);
    await _secure.write(key: 'pin_hash', value: _hash(salt, pin));
    await _secure.delete(key: 'pin_failed');
    await _secure.delete(key: 'pin_locked_until');
  }

  /// Seconds left on a lockout after too many wrong tries, or 0.
  Future<int> lockedSecondsLeft() async {
    final until = int.tryParse(await _secure.read(key: 'pin_locked_until') ?? '');
    if (until == null) return 0;
    final left = until - DateTime.now().millisecondsSinceEpoch;
    return left > 0 ? (left / 1000).ceil() : 0;
  }

  Future<bool> verifyPin(String pin) async {
    if (await lockedSecondsLeft() > 0) return false;
    final salt = await _secure.read(key: 'pin_salt');
    final hash = await _secure.read(key: 'pin_hash');
    if (salt != null && hash == _hash(salt, pin)) {
      await _secure.delete(key: 'pin_failed');
      return true;
    }
    final failed = (int.tryParse(await _secure.read(key: 'pin_failed') ?? '') ?? 0) + 1;
    if (failed >= _maxAttempts) {
      await _secure.delete(key: 'pin_failed');
      final until = DateTime.now().add(_lockout).millisecondsSinceEpoch;
      await _secure.write(key: 'pin_locked_until', value: '$until');
    } else {
      await _secure.write(key: 'pin_failed', value: '$failed');
    }
    return false;
  }

  String _hash(String salt, String pin) =>
      sha256.convert(utf8.encode('$salt:$pin')).toString();

  // --- Non-secret settings ---

  Future<int> dailyLimitMinutes() async =>
      (await SharedPreferences.getInstance()).getInt('daily_limit_min') ?? 60;

  Future<void> setDailyLimitMinutes(int minutes) async =>
      (await SharedPreferences.getInstance()).setInt('daily_limit_min', minutes);

  Future<bool> quietEnabled() async =>
      (await SharedPreferences.getInstance()).getBool('quiet_enabled') ?? false;

  Future<void> setQuietEnabled(bool v) async =>
      (await SharedPreferences.getInstance()).setBool('quiet_enabled', v);

  /// Quiet hours default to 19:00-07:00.
  Future<TimeOfDay> quietStart() => _time('quiet_start_min', 19 * 60);
  Future<TimeOfDay> quietEnd() => _time('quiet_end_min', 7 * 60);

  Future<void> setQuietStart(TimeOfDay t) => _setTime('quiet_start_min', t);
  Future<void> setQuietEnd(TimeOfDay t) => _setTime('quiet_end_min', t);

  Future<TimeOfDay> _time(String key, int fallback) async {
    final m = (await SharedPreferences.getInstance()).getInt(key) ?? fallback;
    return TimeOfDay(hour: m ~/ 60, minute: m % 60);
  }

  Future<void> _setTime(String key, TimeOfDay t) async =>
      (await SharedPreferences.getInstance()).setInt(key, t.hour * 60 + t.minute);
}
