/// The app has NO YouTube content (owner decision, 2026-11-06): no bundled videos, no video lists, no thumbnails from
/// YouTube, no parent-added YouTube links reaching a child. The old video machinery (player, parent review, lesson flow)
/// is kept only as dormant code behind this switch; with it off nothing in the app can reach it.
///
/// A build can switch it back on with `--dart-define=YOUTUBE_CONTENT=true`; tests that exercise the old machinery set it
/// through [overrideForTest].
class YoutubeContent {
  YoutubeContent._();

  static const bool _compile = bool.fromEnvironment('YOUTUBE_CONTENT');
  static bool? _override;

  static bool get enabled => _override ?? _compile;

  /// Tests only.
  static void overrideForTest(bool? value) => _override = value;
}
