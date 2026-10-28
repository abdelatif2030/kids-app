import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Reading and motion comfort, set by the parent: text size and less motion.
/// Stored on the device (shared_preferences `text_scale`, `reduce_motion`).
class DisplayPrefs extends ChangeNotifier {
  DisplayPrefs._();
  static final DisplayPrefs instance = DisplayPrefs._();

  /// 1.0 normal, 1.2 large, 1.4 extra large.
  static final scales = <double, String>{1.0: 'عادي', 1.2: 'كبير', 1.4: 'كبير جدًا'};

  double textScale = 1.0;
  bool reduceMotion = false;

  Future<void> load() async {
    final p = await SharedPreferences.getInstance();
    final s = p.getDouble('text_scale') ?? 1.0;
    textScale = scales.containsKey(s) ? s : 1.0;
    reduceMotion = p.getBool('reduce_motion') ?? false;
    notifyListeners();
  }

  Future<void> setTextScale(double v) async {
    textScale = v;
    notifyListeners();
    await (await SharedPreferences.getInstance()).setDouble('text_scale', v);
  }

  Future<void> setReduceMotion(bool v) async {
    reduceMotion = v;
    notifyListeners();
    await (await SharedPreferences.getInstance()).setBool('reduce_motion', v);
  }
}
