import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Reads stored JSON without ever crashing the app. If the whole value is
/// damaged (a half-written file, an old format) it is kept untouched under
/// `<key>__damaged` so it can be recovered, and an empty value is returned.
/// A single bad entry inside a good list is skipped, not fatal.
List<T> decodeList<T>(SharedPreferences p, String key, T Function(Map<String, dynamic>) fromJson) {
  final raw = p.getString(key);
  if (raw == null) return [];
  try {
    final out = <T>[];
    for (final e in jsonDecode(raw) as List<dynamic>) {
      try {
        out.add(fromJson(e as Map<String, dynamic>));
      } catch (_) {
        // skip one unreadable entry
      }
    }
    return out;
  } catch (_) {
    p.setString('${key}__damaged', raw);
    return [];
  }
}

Map<String, dynamic> decodeMap(SharedPreferences p, String key) {
  final raw = p.getString(key);
  if (raw == null) return {};
  try {
    return jsonDecode(raw) as Map<String, dynamic>;
  } catch (_) {
    p.setString('${key}__damaged', raw);
    return {};
  }
}
