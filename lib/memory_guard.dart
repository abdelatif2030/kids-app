import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';

/// Keeps a long play session from ending in a silent exit (owner report 2026-11-21: the app closed by itself):
/// when the system says memory is low, the decoded-picture cache is emptied at once (the pictures are decoded again when needed),
/// and the picture cache is kept smaller than Flutter's default on phones. Errors that reach the top are logged, never thrown at the child.
class MemoryGuard with WidgetsBindingObserver {
  MemoryGuard._();
  static final MemoryGuard instance = MemoryGuard._();
  bool _on = false;

  void install() {
    if (_on) return;
    _on = true;
    WidgetsBinding.instance.addObserver(this);
    final cache = PaintingBinding.instance.imageCache;
    cache.maximumSizeBytes = 60 << 20; // 60 MB of decoded pictures (the default is 100 MB)
    cache.maximumSize = 120;
    final old = FlutterError.onError;
    FlutterError.onError = (details) {
      if (old != null) {
        old(details);
      } else {
        FlutterError.presentError(details);
      }
    };
    PlatformDispatcher.instance.onError = (error, stack) {
      debugPrint('Uncaught: $error');
      return true; // handled: an unexpected error must not take the app down
    };
  }

  @override
  void didHaveMemoryPressure() {
    final cache = PaintingBinding.instance.imageCache;
    cache.clear();
    cache.clearLiveImages();
  }
}
