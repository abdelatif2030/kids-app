import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/parent_screens.dart';
import 'package:kids_app/permissions_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget app(Widget home) => MaterialApp(key: UniqueKey(), home: home);

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  group('permission texts', () {
    for (final lang in ['ar', 'en']) {
      test('every entry has all four explanations in $lang', () async {
        await AppLocale.instance.set(lang);
        expect(appPermissions.map((p) => p.id), ['microphone', 'storage']);
        for (final p in appPermissions) {
          for (final text in [p.name(), p.usedFor(), p.whenAsked(), p.ifRefused(), p.never()]) {
            expect(text.trim(), isNotEmpty, reason: p.id);
          }
        }
      });
    }
    test('English and Arabic differ (no entry is left untranslated)', () async {
      await AppLocale.instance.set('ar');
      final ar = appPermissions.map((p) => p.usedFor()).toList();
      await AppLocale.instance.set('en');
      final en = appPermissions.map((p) => p.usedFor()).toList();
      for (var i = 0; i < ar.length; i++) {
        expect(en[i], isNot(ar[i]));
      }
    });
  });

  group('matches what the Android manifest really declares', () {
    final manifest = File('android/app/src/main/AndroidManifest.xml').readAsStringSync();
    test('the microphone is declared and listed; the camera is neither declared nor listed in the offline Release 1', () {
      expect(manifest, contains('android.permission.RECORD_AUDIO'));
      expect(manifest, isNot(contains('android.permission.CAMERA')));
      expect(manifest, isNot(contains('android.hardware.camera')));
      expect(manifest, isNot(contains('CHANGE_NETWORK_STATE')));
      expect(appPermissions.map((p) => p.id), isNot(contains('camera')));
    });
    test('no location, contacts, storage, SMS, calendar or notification permission is declared', () {
      for (final bad in [
        'ACCESS_FINE_LOCATION',
        'ACCESS_COARSE_LOCATION',
        'READ_CONTACTS',
        'READ_EXTERNAL_STORAGE',
        'WRITE_EXTERNAL_STORAGE',
        'READ_MEDIA_IMAGES',
        'READ_SMS',
        'READ_CALENDAR',
        'POST_NOTIFICATIONS',
      ]) {
        expect(manifest, isNot(contains(bad)), reason: bad);
      }
    });
  });

  group('screen', () {
    for (final lang in ['ar', 'en']) {
      for (final w in [320.0, 390.0, 1024.0]) {
        testWidgets('shows the three permissions at width $w in $lang with big text and no overflow', (t) async {
          await t.runAsync(() => AppLocale.instance.set(lang));
          t.view.physicalSize = Size(w, 900);
          t.view.devicePixelRatio = 1;
          addTearDown(t.view.reset);
          await t.pumpWidget(MediaQuery(
            data: const MediaQueryData(textScaler: TextScaler.linear(1.6)),
            child: Directionality(
              textDirection: lang == 'ar' ? TextDirection.rtl : TextDirection.ltr,
              child: app(const PermissionsScreen()),
            ),
          ));
          await t.pump();
          expect(t.takeException(), isNull);
          expect(find.byKey(const ValueKey('permission_microphone')), findsOneWidget);
          await t.scrollUntilVisible(find.byKey(const ValueKey('permission_storage')), 300);
          expect(find.byKey(const ValueKey('permission_storage')), findsOneWidget);
          expect(t.takeException(), isNull);
        });
      }
    }

    testWidgets('says why, when, what if refused and what is never done for each entry', (t) async {
      await t.runAsync(() => AppLocale.instance.set('en'));
      t.view.physicalSize = const Size(900, 3000);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(app(const PermissionsScreen()));
      await t.pump();
      expect(find.textContaining('Why: '), findsNWidgets(2));
      expect(find.textContaining('When it is asked: '), findsNWidgets(2));
      expect(find.textContaining('If you refuse: '), findsNWidgets(2));
      expect(find.textContaining('What we never do: '), findsNWidgets(2));
    });
  });

  testWidgets('Parent settings has a Permissions tile that opens the screen', (t) async {
    await t.runAsync(() => AppLocale.instance.set('en'));
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.pumpWidget(app(const SettingsScreen()));
    await t.pump(const Duration(milliseconds: 200));
    final tile = find.byKey(const ValueKey('permissions_tile'));
    await t.scrollUntilVisible(tile, 300);
    await t.ensureVisible(tile);
    await t.pumpAndSettle();
    await t.tap(tile);
    await t.pumpAndSettle();
    expect(find.byType(PermissionsScreen), findsOneWidget);
  });
}
