import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import '../l10n/strings.dart';

/// The owner's OWN lesson videos (made by the owner's family), streamed from the owner's own storage. This is not YouTube
/// and not a third party: the only host the app ever contacts for them is [kLessonsBaseUrl], set at build time with
/// `--dart-define=LESSONS_BASE_URL=https://...` (see docs/OWN_VIDEOS.md). While it is empty nothing is requested.
const String kLessonsBaseUrl = String.fromEnvironment('LESSONS_BASE_URL');

/// The categories a lesson can be in, in the order the filter shows them.
const List<String> kLessonCategories = ['letters', 'numbers', 'words', 'animals', 'shapes', 'body', 'songs', 'general'];

String lessonCategoryLabel(String id) => switch (id) {
      'letters' => tr2('الحروف', 'Letters'),
      'numbers' => tr2('الأرقام', 'Numbers'),
      'words' => tr2('الكلمات', 'Words'),
      'animals' => tr2('الحيوانات', 'Animals'),
      'shapes' => tr2('الأشكال والألوان', 'Shapes & colours'),
      'body' => tr2('الجسم', 'Body'),
      'songs' => tr2('الأغاني', 'Songs'),
      _ => tr2('دروس أخرى', 'More lessons'),
    };

String lessonCategoryEmoji(String id) => switch (id) {
      'letters' => '🔤',
      'numbers' => '🔢',
      'words' => '💬',
      'animals' => '🦁',
      'shapes' => '🔷',
      'body' => '🖐️',
      'songs' => '🎵',
      _ => '⭐',
    };

class OwnLesson {
  final String id;
  final String title;
  final String category;
  final int minAge;
  final int maxAge;
  final int durationSec;
  final Uri video;
  final Uri poster;
  const OwnLesson({required this.id, required this.title, required this.category, required this.minAge, required this.maxAge, required this.durationSec, required this.video, required this.poster});

  bool fitsAge(int age) => age >= minAge && age <= maxAge;

  /// "3:05" (or "12:03:00" for a very long one).
  String get durationLabel {
    final m = durationSec ~/ 60, s = durationSec % 60;
    return '$m:${s.toString().padLeft(2, '0')}';
  }
}

/// Where the lessons come from. The app uses [HttpLessonsSource]; tests use a fake.
abstract class LessonsSource {
  /// The text of `lessons.json`, or throws.
  Future<String> manifest();
}

class HttpLessonsSource implements LessonsSource {
  final Uri url;
  final http.Client? client;
  const HttpLessonsSource(this.url, {this.client});

  @override
  Future<String> manifest() async {
    final c = client ?? http.Client();
    try {
      final r = await c.get(url).timeout(const Duration(seconds: 12));
      if (r.statusCode != 200) throw StateError('lessons.json: ${r.statusCode}');
      return utf8.decode(r.bodyBytes);
    } finally {
      if (client == null) c.close();
    }
  }
}

enum LessonsState { notConnected, ready, empty, failed }

class LessonsResult {
  final LessonsState state;
  final List<OwnLesson> lessons;

  /// True when the list came from the copy saved on this device because the service could not be reached.
  final bool fromCache;
  const LessonsResult(this.state, this.lessons, {this.fromCache = false});
}

class OwnLessons {
  OwnLessons._();

  static const cacheKey = 'own_lessons_manifest';

  /// Tests: a different base URL / source.
  static String baseUrl = kLessonsBaseUrl;
  static LessonsSource? sourceOverride;

  /// A base URL is accepted only when it is https (http only for a local test server). Anything else means "not connected".
  static Uri? get base {
    final b = baseUrl.trim();
    if (b.isEmpty) return null;
    final u = Uri.tryParse(b.endsWith('/') ? b : '$b/');
    if (u == null || !u.hasAuthority) return null;
    final local = u.host == 'localhost' || u.host == '127.0.0.1';
    if (u.scheme == 'https' || (u.scheme == 'http' && local)) return u;
    return null;
  }

  static final _idPattern = RegExp(r'^[a-z0-9][a-z0-9_-]{0,39}$');

  /// A relative path like `videos/lesson_01.mp4`: no scheme, no `..`, no leading slash, only safe characters.
  static bool safePath(Object? p) => p is String && p.length <= 120 && RegExp(r'^[A-Za-z0-9][A-Za-z0-9_./-]*$').hasMatch(p) && !p.contains('..') && !p.contains('//');

  /// Reads and validates the manifest text. A bad entry is skipped; the rest still load. Never throws for bad content.
  static List<OwnLesson> parse(String text, Uri base) {
    Object? raw;
    try {
      raw = jsonDecode(text);
    } catch (_) {
      return const [];
    }
    if (raw is! List) return const [];
    final seen = <String>{};
    final out = <OwnLesson>[];
    for (final e in raw) {
      if (e is! Map) continue;
      final id = e['id'];
      final title = e['title'];
      if (id is! String || !_idPattern.hasMatch(id) || !seen.add(id)) continue;
      if (title is! String || title.trim().isEmpty) continue;
      if (!safePath(e['video']) || !safePath(e['poster'])) continue;
      var minAge = e['minAge'] is int ? e['minAge'] as int : 1;
      var maxAge = e['maxAge'] is int ? e['maxAge'] as int : 6;
      minAge = minAge.clamp(1, 6);
      maxAge = maxAge.clamp(1, 6);
      if (maxAge < minAge) maxAge = minAge;
      final cat = e['category'];
      final dur = e['durationSec'];
      final t = title.trim();
      out.add(OwnLesson(
        id: id,
        title: t.runes.length > 120 ? String.fromCharCodes(t.runes.take(120)) : t,
        category: cat is String && kLessonCategories.contains(cat) ? cat : 'general',
        minAge: minAge,
        maxAge: maxAge,
        durationSec: dur is int && dur >= 0 ? dur : 0,
        video: base.resolve(e['video'] as String),
        poster: base.resolve(e['poster'] as String),
      ));
    }
    return out;
  }

  /// Loads the list: from the service when it can be reached (and saves a copy), else from the saved copy.
  static Future<LessonsResult> load() async {
    final b = base;
    if (b == null) return const LessonsResult(LessonsState.notConnected, []);
    final source = sourceOverride ?? HttpLessonsSource(b.resolve('lessons.json'));
    String? text;
    var cached = false;
    try {
      text = await source.manifest();
      try {
        await (await SharedPreferences.getInstance()).setString(cacheKey, text);
      } catch (_) {}
    } catch (e) {
      if (kDebugMode) debugPrint('lessons: $e');
      try {
        text = (await SharedPreferences.getInstance()).getString(cacheKey);
        cached = text != null;
      } catch (_) {}
    }
    if (text == null) return const LessonsResult(LessonsState.failed, []);
    final lessons = parse(text, b);
    return LessonsResult(lessons.isEmpty ? LessonsState.empty : LessonsState.ready, lessons, fromCache: cached);
  }
}
