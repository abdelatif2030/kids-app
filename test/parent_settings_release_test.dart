import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/app_info.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/parent_screens.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('en');
  });
  tearDown(() => AppLocale.instance.set('ar'));

  testWidgets('Parent settings names the Lesson library and shows the app version for bug reports', (t) async {
    t.view.physicalSize = const Size(900, 1400);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: SettingsScreen()));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
    await t.pump(const Duration(milliseconds: 300));
    final scroll = find.byType(Scrollable).first;
    await t.scrollUntilVisible(find.byKey(const ValueKey('video_review_tile')), 200, scrollable: scroll);
    expect(find.text('Lesson library'), findsOneWidget);
    expect(find.text('Your child sees no video until you approve it'), findsOneWidget);
    await t.scrollUntilVisible(find.byKey(const ValueKey('app_version_row')), 200, scrollable: scroll);
    expect(find.text(kAppVersion), findsOneWidget);
  });
}
