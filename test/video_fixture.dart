import 'dart:io';

import 'package:flutter/services.dart' show rootBundle;
import 'package:kids_app/content_flags.dart';
import 'package:kids_app/main.dart' show videosAssetLoader;

/// The app has no YouTube content (lib/content_flags.dart) and assets/videos.json is empty. These tests exercise the
/// DORMANT video machinery (review states, per-child hiding, lesson flow...), so they switch the content flag on and feed
/// it the archived list from test/fixtures/videos_archive.json (the 157 videos that were bundled before 2026-11-06).
void useArchivedVideos() {
  YoutubeContent.overrideForTest(true);
  videosAssetLoader = (_) async => File('test/fixtures/videos_archive.json').readAsStringSync(); // sync read: works inside fake-async tests
}

void resetVideos() {
  YoutubeContent.overrideForTest(null);
  videosAssetLoader = rootBundle.loadString;
}
