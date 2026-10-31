import 'package:flutter/foundation.dart' show kIsWeb;
// webview_flutter is already installed as a dependency of youtube_player_iframe (same locked version); it is imported only for its
// NavigationDelegate type. No new package is added to pubspec.yaml.
// ignore: depend_on_referenced_packages
import 'package:webview_flutter/webview_flutter.dart' show NavigationDecision, NavigationDelegate;
import 'package:youtube_player_iframe/youtube_player_iframe.dart';

/// Keeps a child inside the approved video.
///
/// The `youtube_player_iframe` package's own navigation rules do two things this app must never do for a child:
///  1. when the player's end screen, a suggestion or "Watch on YouTube" is tapped, it LOADS that other video into the player
///     (`emb_rel_pause` / `emb_rel_end` / `emb_info`), which would play a video that no parent approved;
///  2. when the YouTube title or logo is tapped, it OPENS the link outside the app (`launchUrl`), and on iOS it lets other pages
///     load inside the player.
/// [decideEmbedNavigation] replaces those rules: the player page itself and the player's own frames load normally (so the video,
/// its controls, its advertisements and YouTube's branding are all kept, nothing is removed), but every attempt to go to another
/// YouTube page, a channel, a search, a social site, an account page or any other site is refused, and nothing is ever launched.
///
/// This was written without a device and without access to YouTube. It MUST be checked on a real phone (`docs/REAL_DEVICE_TEST_GUIDE.md`,
/// round E): the video must still start, and tapping the title, logo or an end-screen suggestion must do nothing.
const bool kRestrictPlayerNavigation = true;

const _blockedHosts = {
  'youtu.be', 'm.youtube.com', 'music.youtube.com', 'studio.youtube.com', 'accounts.google.com', 'accounts.youtube.com',
  'www.facebook.com', 'facebook.com', 'm.facebook.com', 'twitter.com', 'x.com', 'www.twitter.com', 'www.instagram.com', 'wa.me',
};
const _blockedPathStarts = ['/watch', '/@', '/channel', '/c/', '/user/', '/playlist', '/shorts', '/results', '/feed', '/live', '/hashtag', '/premium', '/gaming', '/kids'];

bool _isYoutubeHost(String h) => h == 'youtube.com' || h.endsWith('.youtube.com') || h == 'youtube-nocookie.com' || h.endsWith('.youtube-nocookie.com');

/// [isMainFrame]: the whole page is being replaced (a link followed or a window opened) instead of a frame inside the player.
NavigationDecision decideEmbedNavigation(Uri? uri, {required bool isMainFrame}) {
  if (uri == null) return NavigationDecision.prevent;
  final scheme = uri.scheme.toLowerCase();
  if (scheme == 'about' || scheme == 'data' || scheme == 'blob') return NavigationDecision.navigate; // the player's own page
  if (scheme != 'https' && scheme != 'http') return NavigationDecision.prevent; // intent:, market:, mailto:, tel:, javascript:, file:
  final host = uri.host.toLowerCase();
  final path = uri.path;
  if (uri.queryParameters.containsKey('feature') && !path.startsWith('/embed/')) return NavigationDecision.prevent; // title, logo, related, social
  if (_blockedHosts.contains(host)) return NavigationDecision.prevent;
  if (_isYoutubeHost(host)) {
    for (final b in _blockedPathStarts) {
      if (path == b || path.startsWith(b)) return NavigationDecision.prevent;
    }
    // the page that hosts the player (the base address with no path) and the player's embed frames
    if (isMainFrame) return (path.isEmpty || path == '/') ? NavigationDecision.navigate : NavigationDecision.prevent;
    return NavigationDecision.navigate;
  }
  // any other site: only the player's sub-frames (advertisement and media frames) may load; the page is never replaced
  return isMainFrame ? NavigationDecision.prevent : NavigationDecision.navigate;
}

/// Installs the rules on a player controller. Skipped on the web build (the browser's iframe has no navigation hook) and ignored
/// if the platform does not support it, so a failure here can never stop a video from being shown.
Future<void> applyChildSafeNavigation(YoutubePlayerController controller) async {
  if (!kRestrictPlayerNavigation || kIsWeb) return;
  try {
    await controller.webViewController.setNavigationDelegate(
      NavigationDelegate(
        onNavigationRequest: (r) => decideEmbedNavigation(Uri.tryParse(r.url), isMainFrame: r.isMainFrame),
      ),
    );
  } catch (_) {
    // keep the package defaults rather than showing no player; the real-device test must confirm which rules are active
  }
}
