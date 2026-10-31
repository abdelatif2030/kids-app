import 'package:flutter_test/flutter_test.dart';
// ignore: depend_on_referenced_packages
import 'package:webview_flutter/webview_flutter.dart' show NavigationDecision;
import 'package:kids_app/safe_player.dart';

NavigationDecision d(String url, {bool main = true}) => decideEmbedNavigation(Uri.tryParse(url), isMainFrame: main);

void main() {
  const go = NavigationDecision.navigate, stop = NavigationDecision.prevent;

  test('the player page and its own frames load; the page is never replaced by anything else', () {
    expect(d('about:blank'), go);
    expect(d('data:text/html,<p>x</p>'), go);
    expect(d('https://www.youtube-nocookie.com'), go); // the base page of the player
    expect(d('https://www.youtube.com/'), go);
    expect(d('https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1', main: false), go); // the player frame
    expect(d('https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', main: false), go);
    expect(d('https://googleads.g.doubleclick.net/pagead/ads?x=1', main: false), go); // advertisements are not removed
    expect(d('https://googleads.g.doubleclick.net/pagead/ads?x=1'), stop); // but an ad cannot take over the page
    expect(d('https://www.youtube.com/embed/dQw4w9WgXcQ'), stop); // the embed as a whole page is not the base page
  });

  test('another video, a channel, a search, a playlist, shorts, accounts and social sites are refused in every frame', () {
    for (final u in [
      'https://www.youtube.com/watch?v=OTHERVIDEO1',
      'https://www.youtube.com/watch?v=OTHERVIDEO1&feature=emb_rel_end',
      'https://m.youtube.com/watch?v=x',
      'https://youtu.be/OTHERVIDEO1',
      'https://www.youtube.com/@somechannel',
      'https://www.youtube.com/channel/UC123',
      'https://www.youtube.com/c/name',
      'https://www.youtube.com/user/name',
      'https://www.youtube.com/playlist?list=PL1',
      'https://www.youtube.com/shorts/abc',
      'https://www.youtube.com/results?search_query=x',
      'https://www.youtube.com/feed/subscriptions',
      'https://www.youtube.com/premium',
      'https://accounts.google.com/ServiceLogin',
      'https://www.facebook.com/sharer.php?u=x',
      'https://twitter.com/intent/tweet',
      'https://www.youtube.com/anything?feature=emb_title',
      'https://www.youtube.com/anything?feature=emb_logo',
    ]) {
      expect(d(u), stop, reason: '$u main');
      expect(d(u, main: false), stop, reason: '$u frame');
    }
  });

  test('other schemes that could leave the app or run code are refused', () {
    for (final u in ['intent://scan/#Intent;scheme=zxing;end', 'market://details?id=x', 'mailto:a@b.c', 'tel:123', 'javascript:alert(1)', 'file:///etc/passwd', 'sms:1', 'itms-apps://x']) {
      expect(d(u), stop, reason: u);
      expect(d(u, main: false), stop, reason: u);
    }
    expect(decideEmbedNavigation(null, isMainFrame: true), stop);
  });

  test('an arbitrary site cannot replace the page (an advertiser click-through is not followed)', () {
    expect(d('https://example.com/landing'), stop);
    expect(d('http://ads.example.net/click?id=1'), stop);
  });

  test('the restriction is on in the shipped source', () {
    expect(kRestrictPlayerNavigation, isTrue);
  });
}
