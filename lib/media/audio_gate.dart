import 'package:flutter/foundation.dart';

/// A family call has priority over every lesson sound. While a call is on, lessons, stories and ambient sounds
/// are stopped and cannot start; when the call ends nothing resumes by itself (a sudden story voice after a
/// call would be a surprise). The call audio itself is WebRTC and never goes through the lesson audio service.
class AudioGate extends ChangeNotifier {
  AudioGate._();
  static final AudioGate instance = AudioGate._();

  /// For tests that need a fresh gate.
  @visibleForTesting
  AudioGate.forTest();

  int _calls = 0;

  /// True while at least one call is open on this device.
  bool get inCall => _calls > 0;

  void enterCall() {
    _calls++;
    if (_calls == 1) notifyListeners();
  }

  void leaveCall() {
    if (_calls == 0) return;
    _calls--;
    if (_calls == 0) notifyListeners();
  }
}
