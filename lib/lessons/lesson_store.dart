import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../main.dart' show Video;

/// The five things a parent confirms before a lesson can be approved. Each must be ticked; the answers are stored with the date.
const kReviewChecklistSize = 5;
const kAllChecked = [true, true, true, true, true];

enum ReviewStatus { previewed, approved, rejected }

class LessonReview {
  final ReviewStatus status;
  final DateTime at;
  final List<bool> checklist;
  const LessonReview(this.status, this.at, this.checklist);
  bool get checklistComplete => checklist.length == kReviewChecklistSize && checklist.every((c) => c);
}

/// The parent's decisions about lessons on this device. Nothing here is per child: it is the family's curation.
///  - `video_reviews`: one record per lesson the parent opened in the preview: status (previewed / approved / rejected), the date
///    and the checklist answers. The reviewer is always "the parent of this device"; no name is stored.
///  - `video_added`: lessons the parent added by exact link; they start as unreviewed candidates.
/// (`video_hidden`, in video_controls.dart, still holds lessons the parent disabled.) The older `video_approved` list of earlier
/// builds is ignored: a lesson only reaches a child through a complete review record.
class LessonStore {
  LessonStore._();
  static const reviewsKey = 'video_reviews';
  static const addedKey = 'video_added';
  static const maxAdded = 60;

  static Future<Map<String, LessonReview>> reviews() async {
    try {
      final p = await SharedPreferences.getInstance();
      final v = jsonDecode(p.getString(reviewsKey) ?? '{}');
      if (v is! Map) return {};
      final out = <String, LessonReview>{};
      for (final e in v.entries) {
        final m = e.value;
        if (m is! Map) continue;
        final st = ReviewStatus.values.where((x) => x.name == '${m['s']}');
        final at = DateTime.tryParse('${m['at']}');
        if (st.isEmpty || at == null) continue;
        out['${e.key}'] = LessonReview(st.first, at, [for (final c in (m['c'] is List ? m['c'] as List : const [])) c == true]);
      }
      return out;
    } catch (_) {
      return {};
    }
  }

  static Future<void> _save(Map<String, LessonReview> r) async {
    try {
      await (await SharedPreferences.getInstance()).setString(
        reviewsKey,
        jsonEncode({for (final e in r.entries) e.key: {'s': e.value.status.name, 'at': e.value.at.toIso8601String(), 'c': e.value.checklist}}),
      );
    } catch (_) {}
  }

  /// Ids a child may see: approved with a COMPLETE checklist. A hand-edited status without the checklist does not count.
  static Future<Set<String>> approved() async => {for (final e in (await reviews()).entries) if (e.value.status == ReviewStatus.approved && e.value.checklistComplete) e.key};
  static Future<Set<String>> rejected() async => {for (final e in (await reviews()).entries) if (e.value.status == ReviewStatus.rejected) e.key};

  /// Every lesson the parent has opened in the preview (any status).
  static Future<Set<String>> previewed() async => (await reviews()).keys.toSet();

  static Future<void> markPreviewed(String id, {DateTime? now}) async {
    final r = await reviews();
    if (r.containsKey(id)) return; // never downgrade an approved or rejected lesson
    r[id] = LessonReview(ReviewStatus.previewed, now ?? DateTime.now(), const []);
    await _save(r);
  }

  /// Approve needs a preview first and a fully ticked [checklist]; returns false (and changes nothing) otherwise.
  /// `setApproved(id, false)` withdraws an approval at once (the lesson goes back to "previewed").
  static Future<bool> setApproved(String id, bool on, {List<bool>? checklist, DateTime? now}) async {
    final r = await reviews();
    if (on) {
      if (!r.containsKey(id)) return false;
      if (checklist == null || checklist.length != kReviewChecklistSize || !checklist.every((c) => c)) return false;
      r[id] = LessonReview(ReviewStatus.approved, now ?? DateTime.now(), List.of(checklist));
    } else {
      final cur = r[id];
      if (cur == null) return true;
      if (cur.status == ReviewStatus.approved) r[id] = LessonReview(ReviewStatus.previewed, now ?? DateTime.now(), const []);
    }
    await _save(r);
    return true;
  }

  /// The parent decides a lesson is not suitable. Works without a full checklist; an approved lesson is withdrawn at once.
  static Future<bool> reject(String id, {List<bool>? checklist, DateTime? now}) async {
    final r = await reviews();
    if (!r.containsKey(id)) return false; // preview first, like approval
    r[id] = LessonReview(ReviewStatus.rejected, now ?? DateTime.now(), checklist ?? const []);
    await _save(r);
    return true;
  }

  /// Puts a rejected lesson back to "previewed" so it can be reviewed again.
  static Future<void> reopen(String id, {DateTime? now}) async {
    final r = await reviews();
    if (r[id]?.status == ReviewStatus.rejected) {
      r[id] = LessonReview(ReviewStatus.previewed, now ?? DateTime.now(), const []);
      await _save(r);
    }
  }

  static Future<List<Video>> added() async {
    try {
      final p = await SharedPreferences.getInstance();
      final v = jsonDecode(p.getString(addedKey) ?? '[]');
      if (v is! List) return [];
      return [
        for (final e in v)
          if (e is Map<String, dynamic>)
            Video(
              youtubeId: '${e['id']}',
              title: '${e['t']}',
              category: '${e['c']}',
              minAge: (e['a'] as num).toInt(),
              maxAge: (e['b'] as num).toInt(),
              language: '${e['l']}',
              subject: '${e['s'] ?? 'discover'}',
              origin: 'parent',
            ),
      ];
    } catch (_) {
      return [];
    }
  }

  /// Saves a lesson the parent added. It is NOT approved. Returns false when the limit is reached.
  static Future<bool> add(Video v) async {
    final list = await added();
    if (list.length >= maxAdded || list.any((e) => e.youtubeId == v.youtubeId)) return false;
    list.add(v);
    try {
      await (await SharedPreferences.getInstance()).setString(
        addedKey,
        jsonEncode([for (final e in list) {'id': e.youtubeId, 't': e.title, 'c': e.category, 'a': e.minAge, 'b': e.maxAge, 'l': e.language, 's': e.subject}]),
      );
    } catch (_) {
      return false;
    }
    return true;
  }

  /// Removes a parent-added lesson and every decision about it. Bundled lessons cannot be removed (disable or reject them).
  static Future<void> remove(String id) async {
    final list = [for (final e in await added()) if (e.youtubeId != id) e];
    try {
      final p = await SharedPreferences.getInstance();
      await p.setString(addedKey, jsonEncode([for (final e in list) {'id': e.youtubeId, 't': e.title, 'c': e.category, 'a': e.minAge, 'b': e.maxAge, 'l': e.language, 's': e.subject}]));
      final r = await reviews()
        ..remove(id);
      await _save(r);
      final h = jsonDecode(p.getString('video_hidden') ?? '[]');
      if (h is List) await p.setString('video_hidden', jsonEncode([for (final e in h) if ('$e' != id) e]));
    } catch (_) {}
  }
}
