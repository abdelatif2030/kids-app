import 'dart:convert';
import 'dart:io';

/// Test helper: the preferences a parent would have after reviewing and approving every bundled lesson (children see nothing otherwise).
Map<String, Object> approvedLessonPrefs([Map<String, Object> more = const {}]) => {'video_reviews': approvedReviewsJson(ids: bundledIds()), ...more};

List<String> bundledIds() => [for (final e in jsonDecode(File('assets/videos.json').readAsStringSync()) as List<dynamic>) (e as Map<String, dynamic>)['youtubeId'] as String];

/// A `video_reviews` value approving [ids] with a complete checklist (what the review sheet writes).
String approvedReviewsJson({required Iterable<String> ids, String at = '2026-10-31T10:00:00.000'}) =>
    jsonEncode({for (final id in ids) id: {'s': 'approved', 'at': at, 'c': [true, true, true, true, true]}});
