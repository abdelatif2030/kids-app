import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// What a parent may add when creating an account: the child's gender, the child's age (1 to 6) and a city. All three are
/// optional and are kept ONLY on this device (never sent to the account service, never used to choose content). They
/// are removed with the rest of the local data.
class AccountExtras {
  final String? gender; // 'girl' | 'boy' | null
  final int? age; // 1..6 | null
  final String? city; // up to 40 characters | null
  const AccountExtras({this.gender, this.age, this.city});

  static const key = 'account_extras';
  static const minAge = 1;
  static const maxAge = 6;
  static const maxCity = 40;

  bool get isEmpty =>
      gender == null && age == null && (city == null || city!.isEmpty);

  /// A clean copy: gender must be one of the two ids, age is kept inside 1 to 6, the city is trimmed and shortened.
  factory AccountExtras.clean({String? gender, int? age, String? city}) {
    final c = city?.trim();
    return AccountExtras(
      gender: gender == 'girl' || gender == 'boy' ? gender : null,
      age: age?.clamp(minAge, maxAge),
      city: c == null || c.isEmpty
          ? null
          : (c.runes.length > maxCity
                ? String.fromCharCodes(c.runes.take(maxCity))
                : c),
    );
  }

  Map<String, Object?> toJson() => {'gender': gender, 'age': age, 'city': city};

  static AccountExtras fromJson(Object? raw) {
    if (raw is! Map) return const AccountExtras();
    final a = raw['age'];
    return AccountExtras.clean(
      gender: raw['gender'] as String?,
      age: a is int ? a : null,
      city: raw['city'] as String?,
    );
  }

  static Future<AccountExtras> load() async {
    try {
      final s = (await SharedPreferences.getInstance()).getString(key);
      return s == null ? const AccountExtras() : fromJson(jsonDecode(s));
    } catch (_) {
      return const AccountExtras();
    }
  }

  Future<void> save() async {
    try {
      final p = await SharedPreferences.getInstance();
      if (isEmpty) {
        await p.remove(key);
      } else {
        await p.setString(key, jsonEncode(toJson()));
      }
    } catch (_) {}
  }

  static Future<void> clear() async {
    try {
      await (await SharedPreferences.getInstance()).remove(key);
    } catch (_) {}
  }
}
