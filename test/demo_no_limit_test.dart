import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/demo/demo_mode.dart';
import 'package:kids_app/session_manager.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  tearDown(() => DemoMode.overrideForTest(null));

  Future<RestReason?> reasonAfter({required bool demo}) async {
    final day = DateTime.now();
    final key = 'used_${day.year}-${day.month.toString().padLeft(2, '0')}-${day.day.toString().padLeft(2, '0')}';
    SharedPreferences.setMockInitialValues({key: 99999, 'quiet_enabled': true, 'quiet_start_min': 0, 'quiet_end_min': 1439});
    DemoMode.overrideForTest(demo);
    final m = SessionManager.instance;
    final r = await m.check();
    return r;
  }

  test('the hosted demo never says «time to rest» (testers play for hours); the real app still does', () async {
    expect(await reasonAfter(demo: true), isNull);
    expect(await reasonAfter(demo: false), isNotNull);
  });
}
