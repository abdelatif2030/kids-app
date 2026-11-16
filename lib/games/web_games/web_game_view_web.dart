import 'dart:convert';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

import 'web_game.dart';

bool get webGameViewSupported => true;

int _viewCount = 0;

/// On the web a game runs right inside the page: a `<div>` platform view, the game's script loaded once from the
/// app's own files (allowed by the site's `script-src 'self'`), and messages back through a Dart callback.
class WebGameView extends StatefulWidget {
  final WebGame game;
  final Map<String, Object?> config;
  final void Function(String json) onMessage;
  const WebGameView({super.key, required this.game, required this.config, required this.onMessage});

  @override
  State<WebGameView> createState() => _WebGameViewState();
}

class _WebGameViewState extends State<WebGameView> {
  late final String _viewType = 'web-game-${widget.game.id}-${_viewCount++}';
  JSObject? _handle;
  bool _disposed = false;

  JSObject get _doc => globalContext.getProperty<JSObject>('document'.toJS);

  @override
  void initState() {
    super.initState();
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int id) {
      final div = _doc.callMethod<JSObject>('createElement'.toJS, 'div'.toJS);
      div.getProperty<JSObject>('style'.toJS).setProperty('cssText'.toJS, 'position:relative;width:100%;height:100%;overflow:hidden'.toJS);
      _whenLoaded(() => _start(div));
      return div;
    });
  }

  void _whenLoaded(void Function() then) {
    if (globalContext.has(widget.game.global)) {
      then();
      return;
    }
    final existing = _doc.callMethod<JSObject?>('getElementById'.toJS, '${widget.game.id}-js'.toJS);
    final script = existing ?? _doc.callMethod<JSObject>('createElement'.toJS, 'script'.toJS);
    script.callMethod<JSAny?>('addEventListener'.toJS, 'load'.toJS, (() => then()).toJS);
    if (existing == null) {
      script.setProperty('id'.toJS, '${widget.game.id}-js'.toJS);
      script.setProperty('src'.toJS, ui_web.assetManager.getAssetUrl(widget.game.bundle).toJS);
      _doc.getProperty<JSObject>('head'.toJS).callMethod<JSAny?>('append'.toJS, script);
    }
  }

  void _start(JSObject div) {
    if (_disposed) return;
    final api = globalContext.getProperty<JSObject>(widget.game.global.toJS);
    final base = ui_web.assetManager.getAssetUrl(widget.game.base);
    final config = {...widget.config, 'base': base}.jsify();
    final post = ((JSAny? msg) {
      final dart = msg.dartify();
      if (!_disposed) widget.onMessage(jsonEncode(dart));
    }).toJS;
    _handle = api.callMethod<JSObject>('start'.toJS, div, config, post);
  }

  @override
  void dispose() {
    _disposed = true;
    _handle?.callMethod<JSAny?>('dispose'.toJS);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => HtmlElementView(viewType: _viewType);
}
