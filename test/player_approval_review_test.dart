import 'dart:convert';
import 'dart:io';

import 'package:flutter_test/flutter_test.dart';

/// Second review of the video path (static checks of the source plus facts about the data). Behaviour of the approval
/// workflow is tested in lessons_test.dart / video_controls_test.dart, the navigation rules in safe_player_test.dart.
List<String> usesOf(Pattern p) => [
      for (final f in Directory('lib').listSync(recursive: true).whereType<File>())
        if (f.path.endsWith('.dart') && f.readAsStringSync().contains(p)) f.path,
    ]..sort();

void main() {
  test('a video player is created only for a list the child may see, or for a parent preview', () {
    expect(usesOf('PlayerScreen(video'), ['lib/main.dart', 'lib/video_controls.dart']);
    final main = File('lib/main.dart').readAsStringSync();
    expect(main, contains('late final Future<List<Video>> _videos = loadVideos();')); // the child list: approved only
    expect(main.contains('loadVideos(all: true)'), isFalse); // no child screen reads the full catalogue
    final pv = File('lib/video_controls.dart').readAsStringSync();
    expect(pv, contains('PlayerScreen(video: v, preview: true)')); // the only other site, in the parent area
  });

  test('the full catalogue is read only by the parent review screen and by progress/plan counting, never to show or play a video', () {
    expect(usesOf('loadVideos(all: true)'), ['lib/dashboard_screen.dart', 'lib/plan_screen.dart', 'lib/video_controls.dart']);
    final dash = File('lib/dashboard_screen.dart').readAsStringSync();
    expect(dash.contains('PlayerScreen'), isFalse);
    expect(File('lib/plan_screen.dart').readAsStringSync().contains('PlayerScreen'), isFalse);
  });

  test('related videos come from the approved list only, and thumbnails are requested only for listed approved videos', () {
    final main = File('lib/main.dart').readAsStringSync();
    expect(main, contains('for (final v in await loadVideos())')); // the related list is the approved list for the age
    expect(usesOf('img.youtube.com'), ['lib/main.dart', 'lib/offline/capabilities.dart']); // capabilities.dart only documents it
    final card = main.substring(main.indexOf('class _VideoCard'));
    expect(card, contains('img.youtube.com'));
    expect(usesOf('loadVideoById'), ['lib/player_screen.dart']);
    final player = File('lib/player_screen.dart').readAsStringSync();
    expect(player, contains('pickRelatedVideo(')); // the next video is chosen from the approved list, by the app
    expect(player, contains('applyChildSafeNavigation(_controller)'));
  });

  test('parameters of the YouTube player: no related videos from other channels, no fullscreen button, no keyboard', () {
    final p = File('lib/player_screen.dart').readAsStringSync();
    expect(p, contains('strictRelatedVideos: true'));
    expect(p, contains('showFullscreenButton: false'));
    expect(p, contains('enableKeyboard: false'));
    expect(p, contains('loop: false'));
  });

  test('the shipped catalogue has no approval of any kind, and the status document says 0 of 157 reviewed', () {
    final list = jsonDecode(File('assets/videos.json').readAsStringSync()) as List<dynamic>;
    expect(list.length, 157);
    for (final e in list.cast<Map<String, dynamic>>()) {
      expect(e['verification'], 'unverified', reason: e['youtubeId'] as String);
      expect(e.containsKey('approval') && e['approval'] == 'approved' && e.containsKey('reviewedBy'), isFalse);
      expect(e.keys.where((k) => k.toLowerCase().contains('review') || k.toLowerCase().contains('approved')), isEmpty);
    }
    expect(File('docs/VIDEO_REVIEW_STATUS.md').readAsStringSync(), contains('0 of 157'));
    final csv = File('docs/VIDEO_CANDIDATES.csv').readAsLinesSync().skip(1);
    for (final line in csv) {
      expect(line.contains('unverified candidate, not approved'), isTrue);
    }
  });

  test('no screen offers a way to open an external link from a video, and the app has no url_launcher or browser dependency of its own', () {
    final pub = File('pubspec.yaml').readAsStringSync();
    expect(pub.contains('url_launcher'), isFalse);
    for (final f in Directory('lib').listSync(recursive: true).whereType<File>().where((f) => f.path.endsWith('.dart'))) {
      final code = f.readAsLinesSync().where((l) => !l.trimLeft().startsWith('//')).join('\n'); // comments may mention it
      expect(code.contains('launchUrl') || code.contains('canLaunchUrl'), isFalse, reason: f.path);
    }
  });
}
