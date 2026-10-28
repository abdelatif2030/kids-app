import 'dart:async';

import 'package:flutter/widgets.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'parent_settings.dart';

enum RestReason { limit, quiet }

/// Counts child screen time while a session is active and in the foreground,
/// and reports when the daily limit or quiet hours say it is time to rest.
/// It never interrupts anything itself: screens decide when to show the rest
/// screen (e.g. after the current video ends).
class SessionManager with WidgetsBindingObserver {
  SessionManager._();
  static final instance = SessionManager._();

  static const extendMinutes = 15;

  /// Non-null once the session should wind down.
  final reason = ValueNotifier<RestReason?>(null);

  /// Seconds left of today's allowance; null when no session is running.
  final remainingSeconds = ValueNotifier<int?>(null);

  /// The age of the running session, so a parent can resume after extending.
  int? currentAge;

  Timer? _timer;
  bool _foreground = true;
  int _ticks = 0;

  String _day = _dayKey(DateTime.now());
  int _used = 0;
  int _bonus = 0;
  int _limitSeconds = 0;
  bool _quietOn = false;
  int _quietStart = 0;
  int _quietEnd = 0;
  int _overrideUntilMs = 0;

  static String _dayKey(DateTime d) =>
      '${d.year}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';

  Future<void> _load() async {
    final settings = ParentSettings.instance;
    final prefs = await SharedPreferences.getInstance();
    _day = _dayKey(DateTime.now());
    _used = prefs.getInt('used_$_day') ?? 0;
    _bonus = prefs.getInt('bonus_$_day') ?? 0;
    _limitSeconds = await settings.dailyLimitMinutes() * 60;
    _quietOn = await settings.quietEnabled();
    final s = await settings.quietStart();
    final e = await settings.quietEnd();
    _quietStart = s.hour * 60 + s.minute;
    _quietEnd = e.hour * 60 + e.minute;
  }

  Future<void> _save() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt('used_$_day', _used);
    await prefs.setInt('bonus_$_day', _bonus);
  }

  bool _inQuiet(DateTime now) {
    if (!_quietOn || _quietStart == _quietEnd) return false;
    if (now.millisecondsSinceEpoch < _overrideUntilMs) return false;
    final m = now.hour * 60 + now.minute;
    return _quietStart < _quietEnd
        ? m >= _quietStart && m < _quietEnd
        : m >= _quietStart || m < _quietEnd;
  }

  RestReason? _evaluate() {
    if (_inQuiet(DateTime.now())) return RestReason.quiet;
    if (_used >= _limitSeconds + _bonus) return RestReason.limit;
    return null;
  }

  /// Reloads settings and says whether a child session may start right now.
  Future<RestReason?> check() async {
    await _load();
    return _evaluate();
  }

  /// Starts counting. Call [check] first.
  Future<void> start(int age) async {
    await _load();
    currentAge = age;
    reason.value = _evaluate();
    _publishRemaining();
    WidgetsBinding.instance.addObserver(this);
    _foreground = true;
    _timer?.cancel();
    _timer = Timer.periodic(const Duration(seconds: 1), (_) => _tick());
  }

  Future<void> stop() async {
    _timer?.cancel();
    _timer = null;
    WidgetsBinding.instance.removeObserver(this);
    remainingSeconds.value = null;
    await _save();
  }

  /// Parent extension (call only after the PIN was verified).
  Future<void> extend() async {
    _bonus += extendMinutes * 60;
    _overrideUntilMs = DateTime.now()
        .add(const Duration(minutes: extendMinutes))
        .millisecondsSinceEpoch;
    await _save();
    reason.value = _evaluate();
    _publishRemaining();
  }

  void _tick() {
    if (!_foreground) return;
    final today = _dayKey(DateTime.now());
    if (today != _day) {
      _save();
      _day = today;
      _used = 0;
      _bonus = 0;
    }
    _used++;
    if (++_ticks % 10 == 0) _save();
    reason.value = _evaluate();
    _publishRemaining();
  }

  void _publishRemaining() {
    final left = _limitSeconds + _bonus - _used;
    remainingSeconds.value = left < 0 ? 0 : left;
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    _foreground = state == AppLifecycleState.resumed;
    if (!_foreground) _save();
  }
}
