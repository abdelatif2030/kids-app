import 'dart:async';

import 'package:flutter/widgets.dart';

import 'net_probe.dart';

/// What the app believes about the network. `unknown` until the first check; it is never "online" without a probe saying so.
enum NetStatus { unknown, online, offline }

typedef NetProbe = Future<bool> Function();

/// Checks for a network at start, when the app comes back to the foreground, and every [interval] while it is
/// offline (to notice recovery). No package: see `net_probe_*.dart`. Nothing is uploaded.
class ConnectivityMonitor extends ChangeNotifier with WidgetsBindingObserver {
  ConnectivityMonitor({NetProbe? probe, this.interval = const Duration(seconds: 20)}) : probe = probe ?? defaultNetProbe;

  static final ConnectivityMonitor instance = ConnectivityMonitor();

  NetProbe probe;
  final Duration interval;
  NetStatus status = NetStatus.unknown;
  DateTime? lastChecked;
  bool checking = false;
  bool _started = false;
  Timer? _timer;

  bool get isOffline => status == NetStatus.offline;

  /// Starts watching (call once, from main). Safe to call twice.
  void start() {
    if (_started) return;
    _started = true;
    WidgetsBinding.instance.addObserver(this);
    check();
  }

  void stop() {
    if (!_started) return;
    _started = false;
    WidgetsBinding.instance.removeObserver(this);
    _timer?.cancel();
    _timer = null;
  }

  /// Runs the probe now. Several calls at once share one probe.
  Future<void> check() async {
    if (checking) return;
    checking = true;
    notifyListeners();
    bool ok;
    try {
      ok = await probe();
    } catch (_) {
      ok = false;
    }
    checking = false;
    lastChecked = DateTime.now();
    status = ok ? NetStatus.online : NetStatus.offline;
    _timer?.cancel();
    _timer = null;
    if (_started && status == NetStatus.offline) {
      _timer = Timer(interval, check);
    }
    notifyListeners();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) check();
  }

  @override
  void dispose() {
    stop();
    super.dispose();
  }
}
