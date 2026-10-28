import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// The interface language (not the child's learning language, which is a
/// separate setting per child). Stored on the device only (`ui_lang`).
class AppLocale extends ChangeNotifier {
  AppLocale._();
  static final AppLocale instance = AppLocale._();

  static const supported = ['ar', 'en'];

  String code = 'ar';

  /// True only when `load()` found no saved choice: the first screen then asks.
  bool needsChoice = false;

  bool get isArabic => code == 'ar';
  TextDirection get direction => isArabic ? TextDirection.rtl : TextDirection.ltr;
  Locale get locale => Locale(code);

  /// Screens already on the navigation stack hold texts of the old language.
  /// Marking every element dirty rebuilds them all (the same thing a hot reload
  /// does), so no screen keeps the previous language.
  void _rebuildAll() {
    final root = WidgetsBinding.instance.rootElement;
    if (root == null) return;
    void visit(Element e) {
      e.markNeedsBuild();
      e.visitChildren(visit);
    }

    try {
      visit(root);
    } catch (_) {
      // Called while a frame is building: the listeners above already refresh the visible screen.
    }
  }

  Future<void> load() async {
    final saved = (await SharedPreferences.getInstance()).getString('ui_lang');
    if (saved != null && supported.contains(saved)) {
      code = saved;
      needsChoice = false;
    } else {
      needsChoice = true;
    }
    notifyListeners();
  }

  Future<void> set(String lang) async {
    if (!supported.contains(lang)) return;
    code = lang;
    needsChoice = false;
    notifyListeners();
    _rebuildAll();
    try {
      await (await SharedPreferences.getInstance()).setString('ui_lang', lang);
    } catch (_) {
      // The choice still applies for this run.
    }
  }
}
