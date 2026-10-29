import 'main.dart' show Video;

/// The next video to play after [current] ends: the next one in the whitelist for the same subject (then the
/// same category), in the same language, that is not in [played]. Only whitelisted videos for the child's age
/// are ever considered ([candidates] comes from assets/videos.json already filtered by age). Deterministic:
/// the first match after the current video, wrapping around. Returns null when nothing related is left.
Video? pickRelatedVideo(Video current, List<Video> candidates, Set<String> played) {
  final pool = [for (final v in candidates) if (v.youtubeId != current.youtubeId && !played.contains(v.youtubeId)) v];
  if (pool.isEmpty) return null;
  final at = candidates.indexWhere((v) => v.youtubeId == current.youtubeId);
  // Order the pool as it comes after the current video in the list, wrapping around.
  final ordered = [
    for (final v in pool)
      if (candidates.indexOf(v) > at) v,
    for (final v in pool)
      if (candidates.indexOf(v) <= at) v,
  ];
  bool sameLang(Video v) => v.language == current.language;
  for (final match in <bool Function(Video)>[
    (v) => v.subject == current.subject && v.subject != 'discover' && sameLang(v),
    (v) => v.subject == current.subject && v.category == current.category && sameLang(v),
    (v) => v.category == current.category && sameLang(v),
  ]) {
    for (final v in ordered) {
      if (match(v)) return v;
    }
  }
  return null;
}
