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

  /// The PIN store. The phone's secure storage is used where it works. A browser page that is not served over HTTPS (for
  /// example a test over the local network, `http://192.168.x.x`) has no secure storage: the PIN is already salted and
  /// stretched, so it is kept in the page's ordinary local storage instead of failing silently.
  _PinStore _secure = _PinStore(const FlutterSecureStorage());

  /// Tests: replace the secure storage (for example with one that always fails).
  void useStorageForTest(FlutterSecureStorage storage) => _secure = _PinStore(storage);

  Future<bool> hasPin() async => await _secure.read(key: 'pin_hash') != null;

  Future<void> setPin(String pin) async {
    final salt = base64Encode(List.generate(16, (_) => Random.secure().nextInt(256)));
    await _secure.write(key: 'pin_salt', value: salt);
    await _secure.write(key: 'pin_hash', value: pinHashV2(salt, pin));
    await _secure.write(key: 'pin_v', value: '2');
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
    final v2 = await _secure.read(key: 'pin_v') == '2';
    if (salt != null && hash != null && constantTimeEquals(hash, v2 ? pinHashV2(salt, pin) : _hash(salt, pin))) {
      await _secure.delete(key: 'pin_failed');
      if (!v2) {
        // An older PIN (single SHA-256) is upgraded to the stretched hash the first time it is entered correctly.
        await _secure.write(key: 'pin_hash', value: pinHashV2(salt, pin));
        await _secure.write(key: 'pin_v', value: '2');
      }
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

  /// The first format (kept only to accept and upgrade PINs set by older versions).
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

const kPinIterations = 20000;

/// PBKDF2-HMAC-SHA256 (one 32-byte block) of the PIN with the salt. Stretching makes each guess cost
/// [kPinIterations] hashes. A 4-6 digit PIN still has a small space: this slows an attacker who has
/// extracted the stored value, it does not make a short PIN strong. The app's lockout is the main defence.
String pinHashV2(String salt, String pin, {int iterations = kPinIterations}) {
  final mac = Hmac(sha256, utf8.encode(pin));
  var u = mac.convert([...utf8.encode(salt), 0, 0, 0, 1]).bytes;
  final out = List<int>.of(u);
  for (var i = 1; i < iterations; i++) {
    u = mac.convert(u).bytes;
    for (var k = 0; k < out.length; k++) {
      out[k] ^= u[k];
    }
  }
  return base64Encode(out);
}

/// Compares two strings without stopping at the first difference.
bool constantTimeEquals(String a, String b) {
  if (a.length != b.length) return false;
  var d = 0;
  for (var i = 0; i < a.length; i++) {
    d |= a.codeUnitAt(i) ^ b.codeUnitAt(i);
  }
  return d == 0;
}

class _PinStore {
  final FlutterSecureStorage _storage;
  _PinStore(this._storage);
  bool _broken = false;

  static String _k(String key) => 'sec_$key';

  Future<String?> read({required String key}) async {
    if (!_broken) {
      try {
        return await _storage.read(key: key);
      } catch (_) {
        _broken = true;
      }
    }
    return (await SharedPreferences.getInstance()).getString(_k(key));
  }

  Future<void> write({required String key, required String value}) async {
    if (!_broken) {
      try {
        await _storage.write(key: key, value: value);
        return;
      } catch (_) {
        _broken = true;
      }
    }
    await (await SharedPreferences.getInstance()).setString(_k(key), value);
  }

  Future<void> delete({required String key}) async {
    if (!_broken) {
      try {
        await _storage.delete(key: key);
        return;
      } catch (_) {
        _broken = true;
      }
    }
    await (await SharedPreferences.getInstance()).remove(_k(key));
  }
}
