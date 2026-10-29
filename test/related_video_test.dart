import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/main.dart' show Video, loadVideos;
import 'package:kids_app/related_video.dart';

Video v(String id, {String subject = 'math', String cat = 'Learning', String lang = 'ar', int min = 1, int max = 12}) =>
    Video(youtubeId: id, title: id, category: cat, minAge: min, maxAge: max, language: lang, subject: subject);

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('same subject first, next in list order after the current one, wrapping around', () {
    final list = [v('a'), v('b', subject: 'arabic'), v('c'), v('d')];
    expect(pickRelatedVideo(list[0], list, {})!.youtubeId, 'c');
    expect(pickRelatedVideo(list[3], list, {})!.youtubeId, 'a');
  });
  test('never repeats a played video or the current one', () {
    final list = [v('a'), v('c'), v('d')];
    expect(pickRelatedVideo(list[0], list, {'c'})!.youtubeId, 'd');
    expect(pickRelatedVideo(list[0], list, {'c', 'd'}), isNull);
  });
  test('falls back to the same category; keeps the language; nothing related -> null', () {
    final list = [v('a', subject: 'math'), v('b', subject: 'science', lang: 'en'), v('c', subject: 'science')];
    expect(pickRelatedVideo(list[0], list, {})!.youtubeId, 'c'); // same category, same language
    final only = [v('a', cat: 'Fun'), v('b', subject: 'arabic', cat: 'Story')];
    expect(pickRelatedVideo(only[0], only, {}), isNull);
  });
  test('"discover" is not a subject match on its own (it is the catch-all)', () {
    final list = [v('a', subject: 'discover', cat: 'Fun'), v('b', subject: 'discover', cat: 'Learning'), v('c', subject: 'discover', cat: 'Fun')];
    expect(pickRelatedVideo(list[0], list, {})!.youtubeId, 'c');
  });
  test('with the real whitelist, a chain from any video only ever uses whitelisted ids of the age and ends', () async {
    final all = await loadVideos();
    for (final age in [2, 5, 9]) {
      final cands = [for (final x in all) if (age >= x.minAge && age <= x.maxAge) x];
      for (final start in cands.take(20)) {
        final played = <String>{};
        var cur = start;
        for (var i = 0; i < cands.length + 1; i++) {
          final n = pickRelatedVideo(cur, cands, {...played, cur.youtubeId});
          if (n == null) break;
          expect(cands.any((x) => x.youtubeId == n.youtubeId), isTrue);
          expect(played.contains(n.youtubeId), isFalse);
          played.add(cur.youtubeId);
          cur = n;
        }
        expect(played.length, lessThanOrEqualTo(cands.length));
      }
    }
  });
}
