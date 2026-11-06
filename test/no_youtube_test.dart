import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/content_flags.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/child_shell.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/main.dart' show loadVideos;
import 'package:shared_preferences/shared_preferences.dart';

import 'video_fixture.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);

void main() {
  tearDown(resetVideos);

  group('the app has no YouTube content (owner decision, 2026-11-06)', () {
    test('the content switch is off by default and the bundled list is empty', () {
      expect(YoutubeContent.enabled, isFalse);
      expect(jsonDecode(File('assets/videos.json').readAsStringSync()), isEmpty);
    });

    test('loadVideos returns nothing, even if the list were present or a parent had added links', () async {
      SharedPreferences.setMockInitialValues({});
      expect(await loadVideos(), isEmpty);
      expect(await loadVideos(all: true), isEmpty);
      // with the old fixture loaded but the switch off, still nothing
      useArchivedVideos();
      YoutubeContent.overrideForTest(false);
      expect(await loadVideos(all: true), isEmpty);
    });

    test('no YouTube host is allowed by the page headers and no YouTube thumbnail is requested by the app screens', () {
      for (final f in ['web/_headers', 'tool/headers_login']) {
        final text = File(f).readAsStringSync();
        expect(text.contains('youtube'), isFalse, reason: f);
        expect(text.contains('ytimg'), isFalse, reason: f);
      }
    });

    testWidgets('the child create tab shows drawing and the studio only: no lessons, songs or stories videos', (t) async {
      t.view.physicalSize = const Size(900, 1400);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      SharedPreferences.setMockInitialValues({});
      FlutterSecureStorage.setMockInitialValues({});
      final store = JourneyStore(LocalJourneyRepository());
      await t.runAsync(() async {
        await store.load();
        await store.addProfile(_kid);
      });
      JourneyStore.instance = store;
      await AppLocale.instance.set('ar');
      await t.pumpWidget(MaterialApp(
        builder: (c, w) => Directionality(textDirection: TextDirection.rtl, child: w!),
        home: const ChildShell(child: _kid),
      ));
      await t.pump();
      await t.tap(find.text('إبداع').last);
      await t.pump(const Duration(milliseconds: 400));
      expect(find.text('استوديو الإبداع'), findsOneWidget);
      expect(find.text('رسم حر'), findsOneWidget);
      for (final gone in ['دروس الرسم', 'أناشيد']) {
        expect(find.text(gone), findsNothing, reason: gone);
      }
      expect(find.byKey(const ValueKey('picture_backdrop')), findsWidgets, reason: 'the unified scenery background');
    });
  });
}
