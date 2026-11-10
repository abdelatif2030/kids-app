import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

import 'web_game.dart';

/// Android and iOS have a built-in browser view; desktop builds show a "phones, tablets and web" note instead.
bool get webGameViewSupported => !kIsWeb && (defaultTargetPlatform == TargetPlatform.android || defaultTargetPlatform == TargetPlatform.iOS);

/// Shows a bundled game page. It may only show that page: every other address (internet, links) is refused.
/// The page talks back on the `RehlatyRace` channel (save, exit).
class WebGameView extends StatefulWidget {
  final WebGame game;
  final Map<String, Object?> config;
  final void Function(String json) onMessage;
  const WebGameView({super.key, required this.game, required this.config, required this.onMessage});

  @override
  State<WebGameView> createState() => _WebGameViewState();
}

class _WebGameViewState extends State<WebGameView> with WidgetsBindingObserver {
  late final WebViewController _c;
  bool _started = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _c = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(const Color(0xFF1D1250))
      ..addJavaScriptChannel('RehlatyRace', onMessageReceived: (m) => _onPage(m.message))
      ..setNavigationDelegate(
        NavigationDelegate(
          // only the bundled page and its own files; never the internet
          onNavigationRequest: (req) => _isLocal(req.url) ? NavigationDecision.navigate : NavigationDecision.prevent,
        ),
      )
      ..loadFlutterAsset(widget.game.page);
  }

  static bool _isLocal(String url) => url.startsWith('file:') || url.startsWith('about:blank') || url.startsWith('data:');

  void _onPage(String raw) {
    if (raw.contains('"loaded"') && !_started) {
      _started = true;
      _c.runJavaScript('window.crStart(${jsonEncode(widget.config)});');
      return;
    }
    widget.onMessage(raw);
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    // the app went to the background: pause the game and its sound
    if (state != AppLifecycleState.resumed) _c.runJavaScript('window.crPause && window.crPause();');
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _c.runJavaScript('window.crStop && window.crStop();');
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => WebViewWidget(controller: _c);
}
