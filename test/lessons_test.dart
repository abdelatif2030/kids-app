import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/lessons/lesson_rules.dart';
import 'package:kids_app/lessons/lesson_store.dart';
import 'package:kids_app/main.dart' show Video, VideoListScreen, loadVideos;
import 'package:kids_app/offline/connectivity.dart';
import 'package:kids_app/video_controls.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'approve_all.dart';

void main() {
  candidateTests();
  reviewWorkflowTests();
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('en');
  });
  tearDown(() => AppLocale.instance.set('ar'));

  group('links', () {
    test('only an exact single YouTube video link is accepted', () {
      const id = 'dQw4w9WgXcQ';
      for (final ok in [
        'https://www.youtube.com/watch?v=$id',
        'https://youtube.com/watch?v=$id&t=5s',
        'https://m.youtube.com/watch?v=$id',
        'https://youtu.be/$id',
        'youtu.be/$id',
        'https://www.youtube.com/embed/$id',
        'https://www.youtube-nocookie.com/embed/$id',
        '  https://youtu.be/$id  ',
      ]) {
        expect(parseYoutubeUrl(ok), id, reason: ok);
      }
      for (final bad in [
        '',
        'hello',
        'https://www.youtube.com/playlist?list=PL123',
        'https://www.youtube.com/@channel',
        'https://www.youtube.com/results?search_query=kids',
        'https://www.youtube.com/shorts/$id',
        'https://www.youtube.com/watch?v=short',
        'https://www.youtube.com/watch',
        'http://evil.example/watch?v=$id',
        'https://evil.example/https://youtu.be/$id',
        'https://youtube.com.evil.example/watch?v=$id',
        'https://youtu.be/$id/extra',
        'https://user:pw@youtu.be/$id',
        'https://youtu.be:8080/$id',
        'https://vimeo.com/123456789',
        'javascript:alert(1)',
        'https://www.youtube.com/watch?v=$id https://x.example',
      ]) {
        expect(parseYoutubeUrl(bad), isNull, reason: bad);
      }
    });

    test('the new-lesson validator checks link, duplicates, title, ages, language and category', () {
      String? v({String? id = 'dQw4w9WgXcQ', String title = 'T', int a = 1, int b = 6, String l = 'ar', String c = 'Fun', Set<String> k = const {}}) =>
          validateNewLesson(id: id, title: title, minAge: a, maxAge: b, language: l, category: c, knownIds: k);
      expect(v(), isNull);
      expect(v(id: null), 'link');
      expect(v(k: {'dQw4w9WgXcQ'}), 'duplicate');
      expect(v(title: '  '), 'title');
      expect(v(title: 'x' * 81), 'title');
      expect(v(a: 0), 'ages');
      expect(v(b: 7), 'ages');
      expect(v(a: 5, b: 3), 'ages');
      expect(v(l: 'fr'), 'language');
      expect(v(c: 'Games'), 'category');
    });

    test('age bands cover exactly the ages 1-6', () {
      expect([for (var a = 1; a <= 6; a++) bandOfAge(a)], [LessonBand.toddler, LessonBand.toddler, LessonBand.preschool, LessonBand.preschool, LessonBand.early, LessonBand.early]);
      expect(lessonInBand(2, 3, LessonBand.toddler), isTrue);
      expect(lessonInBand(2, 3, LessonBand.early), isFalse);
      expect(lessonInBand(7, 12, LessonBand.early), isFalse);
    });
  });

  group('library', () {
    test('a lesson added by link starts unapproved, is hidden from children, and is removed completely', () async {
      expect(await LessonStore.add(const Video(youtubeId: 'dQw4w9WgXcQ', title: 'Mine', category: 'Fun', minAge: 3, maxAge: 4, language: 'en', origin: 'parent')), isTrue);
      expect(await LessonStore.add(const Video(youtubeId: 'dQw4w9WgXcQ', title: 'Again', category: 'Fun', minAge: 3, maxAge: 4, language: 'en', origin: 'parent')), isFalse); // no duplicate
      expect((await loadVideos(all: true)).where((v) => v.origin == 'parent'), hasLength(1));
      expect((await loadVideos()).where((v) => v.origin == 'parent'), isEmpty);
      await LessonStore.markPreviewed('dQw4w9WgXcQ');
      expect(await LessonStore.setApproved('dQw4w9WgXcQ', true, checklist: kAllChecked), isTrue);
      expect((await loadVideos()).map((v) => v.youtubeId), ['dQw4w9WgXcQ']);
      await VideoControls.setHidden('dQw4w9WgXcQ', true);
      await LessonStore.remove('dQw4w9WgXcQ');
      expect((await loadVideos(all: true)).where((v) => v.origin == 'parent'), isEmpty);
      expect(await LessonStore.approved(), isEmpty);
      expect(await LessonStore.previewed(), isEmpty);
      expect(await LessonStore.reviews(), isEmpty);
      expect(await VideoControls.hidden(), isEmpty);
    });

    test('a rejected or pending bundled lesson stays hidden even if its id is in the approved list', () async {
      final all = await loadVideos(all: true);
      SharedPreferences.setMockInitialValues({'video_reviews': approvedReviewsJson(ids: [all.first.youtubeId])});
      expect((await loadVideos()).map((v) => v.youtubeId), [all.first.youtubeId]);
      expect(const Video(youtubeId: 'p', title: 't', category: 'Fun', minAge: 1, maxAge: 2, language: 'ar', approval: 'pending').approved, isFalse);
    });

    test('damaged storage means no lessons for children, never a crash', () async {
      SharedPreferences.setMockInitialValues({'video_reviews': '{{', 'video_added': 'nope', 'video_previewed': '12'});
      expect(await loadVideos(), isEmpty);
      expect((await loadVideos(all: true)).isNotEmpty, isTrue);
    });

    test('the limit on added lessons is enforced', () async {
      for (var i = 0; i < LessonStore.maxAdded; i++) {
        expect(await LessonStore.add(Video(youtubeId: 'id${i.toString().padLeft(9, '0')}', title: 't', category: 'Fun', minAge: 1, maxAge: 6, language: 'ar', origin: 'parent')), isTrue);
      }
      expect(await LessonStore.add(const Video(youtubeId: 'overflow000', title: 't', category: 'Fun', minAge: 1, maxAge: 6, language: 'ar', origin: 'parent')), isFalse);
    });
  });

  group('child list states', () {
    Future<void> show(WidgetTester t, {int age = 4, Size size = const Size(360, 640), double text = 1, String lang = 'en'}) async {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await AppLocale.instance.set(lang);
      await t.pumpWidget(MaterialApp(
        key: UniqueKey(),
        builder: (c, w) => MediaQuery(data: MediaQuery.of(c).copyWith(textScaler: TextScaler.linear(text)), child: w!),
        home: VideoListScreen(age: age),
      ));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 150)));
      await t.pump();
    }

    testWidgets('empty: nothing is approved, so the child is told to ask a grown-up (no video, no link)', (t) async {
      for (final lang in ['ar', 'en']) {
        for (final size in [const Size(320, 568), const Size(844, 390)]) {
          await show(t, size: size, lang: lang, text: 1.6);
          expect(find.byKey(const ValueKey('video_empty')), findsOneWidget);
          expect(find.byType(Image), findsNothing); // no thumbnails of unapproved videos are even requested
          expect(t.takeException(), isNull);
        }
      }
    });

    testWidgets('approved lessons show with category chips; offline shows a notice and keeps the list', (t) async {
      SharedPreferences.setMockInitialValues(approvedLessonPrefs());
      await show(t);
      expect(find.byKey(const ValueKey('video_empty')), findsNothing);
      expect(find.byKey(const ValueKey('video_offline')), findsNothing);
      expect(find.byKey(const ValueKey('vcat_Learning')), findsOneWidget);
      final m = ConnectivityMonitor.instance;
      m.probe = () async => false;
      await t.runAsync(m.check);
      await t.pump();
      expect(find.byKey(const ValueKey('video_offline')), findsOneWidget);
      expect(find.byKey(const ValueKey('vcat_Learning')), findsOneWidget);
      m.probe = () async => true;
      await t.runAsync(m.check);
      await t.pump();
      expect(find.byKey(const ValueKey('video_offline')), findsNothing);
    });

    testWidgets('a category chip narrows the list', (t) async {
      SharedPreferences.setMockInitialValues(approvedLessonPrefs());
      await show(t, size: const Size(900, 1600));
      final before = find.byType(Card).evaluate().length;
      await t.tap(find.byKey(const ValueKey('vcat_Story')));
      await t.pump();
      expect(find.byType(Card).evaluate().length, lessThan(before));
    });
  });

  group('review screen', () {
    testWidgets('add by link: bad links are explained, a good one is saved as not approved', (t) async {
      t.view.physicalSize = const Size(900, 1600);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: VideoReviewScreen()));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await t.pump();
      await t.tap(find.byKey(const ValueKey('add_lesson')));
      await t.pumpAndSettle();
      await t.enterText(find.byKey(const ValueKey('lesson_link')), 'https://www.youtube.com/playlist?list=PL1');
      await t.enterText(find.byKey(const ValueKey('lesson_title')), 'Counting');
      await t.tap(find.byKey(const ValueKey('lesson_save')));
      await t.pump();
      expect(find.byKey(const ValueKey('lesson_problem')), findsOneWidget);
      await t.enterText(find.byKey(const ValueKey('lesson_link')), 'https://youtu.be/dQw4w9WgXcQ');
      await t.tap(find.byKey(const ValueKey('lesson_save')));
      await t.pumpAndSettle();
      final added = (await t.runAsync(() => loadVideos(all: true)))!.where((v) => v.origin == 'parent').toList();
      expect(added.single.title, 'Counting');
      expect((await t.runAsync(loadVideos))!, isEmpty);
      await t.enterText(find.byKey(const ValueKey('video_search')), 'Counting');
      await t.pump();
      final tile = find.byKey(const ValueKey('video_dQw4w9WgXcQ'));
      expect(find.descendant(of: tile, matching: find.textContaining('Waiting for your approval')), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('remove_dQw4w9WgXcQ')));
      await t.pumpAndSettle();
      await t.tap(find.byKey(const ValueKey('confirm_remove')));
      await t.pumpAndSettle();
      expect((await t.runAsync(() => loadVideos(all: true)))!.where((v) => v.origin == 'parent'), isEmpty);
    });
  });
}

void candidateTests() {
  group('unverified candidates', () {
    test('every bundled video is an unverified candidate; none is marked verified or pre-approved', () async {
      final all = await loadVideos(all: true);
      final bundled = all.where((v) => v.origin == 'bundled').toList();
      expect(bundled.length, greaterThan(100));
      expect(bundled.every((v) => v.verification == 'unverified'), isTrue);
      final raw = File('assets/videos.json').readAsStringSync();
      expect(raw.contains('"verification": "verified"'), isFalse);
      expect(raw.contains('"approved": true'), isFalse);
    });

    test('with no parent action, children get no video, whatever age, subject or category', () async {
      expect(await loadVideos(), isEmpty);
      final all = await loadVideos(all: true);
      for (final v in all) {
        expect((await loadVideos()).any((x) => x.youtubeId == v.youtubeId), isFalse);
      }
    });

    test('approving by id cannot unlock a rejected or pending entry, nor an id that is not in a list', () async {
      SharedPreferences.setMockInitialValues({'video_reviews': approvedReviewsJson(ids: ['notInAnyList1', 'dQw4w9WgXcQ'])});
      expect(await loadVideos(), isEmpty);
    });

    test('a hand-edited approved list cannot reveal a disabled lesson', () async {
      final first = (await loadVideos(all: true)).first.youtubeId;
      SharedPreferences.setMockInitialValues({'video_reviews': approvedReviewsJson(ids: [first]), 'video_hidden': '["$first"]'});
      expect(await loadVideos(), isEmpty);
    });
  });
}

void reviewWorkflowTests() {
  group('review records and states', () {
    test('states: candidate -> previewed -> approved -> withdrawn / rejected -> reopened; each is kept with its date', () async {
      const id = 'dQw4w9WgXcQ';
      final t0 = DateTime(2026, 10, 31, 9);
      expect(await LessonStore.reviews(), isEmpty);
      expect(await LessonStore.reject(id), isFalse); // cannot decide before previewing
      expect(await LessonStore.setApproved(id, true, checklist: kAllChecked), isFalse);
      await LessonStore.markPreviewed(id, now: t0);
      expect((await LessonStore.reviews())[id]!.status, ReviewStatus.previewed);
      expect(await LessonStore.approved(), isEmpty);
      expect(await LessonStore.setApproved(id, true, checklist: [true, true, true, true, false]), isFalse);
      expect(await LessonStore.setApproved(id, true, checklist: [true, true, true]), isFalse);
      expect(await LessonStore.setApproved(id, true, checklist: kAllChecked, now: t0), isTrue);
      expect(await LessonStore.approved(), {id});
      expect((await LessonStore.reviews())[id]!.at, t0);
      await LessonStore.markPreviewed(id); // previewing again never downgrades an approval
      expect(await LessonStore.approved(), {id});
      await LessonStore.setApproved(id, false); // withdraw: unavailable at once
      expect(await LessonStore.approved(), isEmpty);
      expect((await LessonStore.reviews())[id]!.status, ReviewStatus.previewed);
      expect(await LessonStore.reject(id, now: t0), isTrue);
      expect(await LessonStore.rejected(), {id});
      expect(await LessonStore.approved(), isEmpty);
      await LessonStore.reopen(id);
      expect(await LessonStore.rejected(), isEmpty);
      expect((await LessonStore.reviews())[id]!.status, ReviewStatus.previewed);
    });

    test('rejecting an approved lesson removes it from children immediately', () async {
      final v = (await loadVideos(all: true)).first.youtubeId;
      await LessonStore.markPreviewed(v);
      await LessonStore.setApproved(v, true, checklist: kAllChecked);
      expect((await loadVideos()).map((x) => x.youtubeId), [v]);
      await LessonStore.reject(v);
      expect(await loadVideos(), isEmpty);
    });

    test('a hand-edited record without a complete checklist, or with an unknown status, never reaches a child', () async {
      final v = (await loadVideos(all: true)).first.youtubeId;
      SharedPreferences.setMockInitialValues({'video_reviews': '{"$v":{"s":"approved","at":"2026-10-31T10:00:00","c":[true,true]}}'});
      expect(await loadVideos(), isEmpty);
      SharedPreferences.setMockInitialValues({'video_reviews': '{"$v":{"s":"approved","at":"2026-10-31T10:00:00"}}'});
      expect(await loadVideos(), isEmpty);
      SharedPreferences.setMockInitialValues({'video_reviews': '{"$v":{"s":"verified","at":"2026-10-31T10:00:00","c":[true,true,true,true,true]}}'});
      expect(await loadVideos(), isEmpty);
      SharedPreferences.setMockInitialValues({'video_reviews': '{"$v":{"s":"approved","at":"not a date","c":[true,true,true,true,true]}}'});
      expect(await loadVideos(), isEmpty);
      SharedPreferences.setMockInitialValues({'video_approved': '["$v"]'}); // the older list is ignored
      expect(await loadVideos(), isEmpty);
    });

    test('disabling is separate from approval and also takes effect at once; enabling restores it', () async {
      final v = (await loadVideos(all: true)).first.youtubeId;
      await LessonStore.markPreviewed(v);
      await LessonStore.setApproved(v, true, checklist: kAllChecked);
      await VideoControls.setHidden(v, true);
      expect(await loadVideos(), isEmpty);
      expect(await LessonStore.approved(), {v}); // still approved, just disabled
      await VideoControls.setHidden(v, false);
      expect((await loadVideos()).length, 1);
    });

    test('the child list never contains a candidate, a previewed-only, a rejected or a disabled lesson', () async {
      final all = (await loadVideos(all: true)).take(5).map((v) => v.youtubeId).toList();
      for (final id in all) {
        await LessonStore.markPreviewed(id);
      }
      await LessonStore.setApproved(all[0], true, checklist: kAllChecked);
      await LessonStore.setApproved(all[1], true, checklist: kAllChecked);
      await VideoControls.setHidden(all[1], true);
      await LessonStore.reject(all[2]);
      final shown = (await loadVideos()).map((v) => v.youtubeId).toSet();
      expect(shown, {all[0]});
    });

    test('the lesson library documents list every candidate and keep the unreviewed count honest', () {
      final csv = File('docs/VIDEO_CANDIDATES.csv').readAsLinesSync();
      expect(csv.length - 1, 157);
      final json = File('assets/videos.json').readAsStringSync();
      expect(RegExp('"verification": "unverified"').allMatches(json).length, 157);
      expect(File('docs/VIDEO_REVIEW_STATUS.md').readAsStringSync(), contains('0 of 157'));
    });
  });
}
