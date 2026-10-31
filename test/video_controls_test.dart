import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/lessons/lesson_store.dart';
import 'package:kids_app/main.dart' show Video, loadVideos;
import 'package:kids_app/video_controls.dart';
import 'package:shared_preferences/shared_preferences.dart';

Video _v(String id, {String approval = 'approved'}) => Video(youtubeId: id, title: 'T $id', category: 'Learning', minAge: 1, maxAge: 6, language: 'ar', approval: approval);

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('en');
  });
  tearDown(() => AppLocale.instance.set('ar'));

  test('a video without an approval field is approved; pending and rejected are never shown', () {
    expect(Video.fromJson({'youtubeId': 'a', 'title': 't', 'category': 'Fun', 'minAge': 1, 'maxAge': 2, 'language': 'ar'}).approved, isTrue);
    expect(_v('p', approval: 'pending').approved, isFalse);
    expect(_v('r', approval: 'rejected').approved, isFalse);
  });

  testWidgets('a child sees nothing until a parent previews and approves; disabling removes it again', (t) async {
    final all = (await t.runAsync(() => loadVideos(all: true)))!;
    expect((await t.runAsync(loadVideos))!, isEmpty); // the safe default: nothing is visible
    final id = all.first.youtubeId;
    expect(await t.runAsync(() => LessonStore.setApproved(id, true, checklist: kAllChecked)), isFalse); // cannot approve without a preview
    expect((await t.runAsync(loadVideos))!, isEmpty);
    await t.runAsync(() => LessonStore.markPreviewed(id));
    expect(await t.runAsync(() => LessonStore.setApproved(id, true, checklist: const [true, true, true, true, false])), isFalse); // every check is needed
    expect(await t.runAsync(() => LessonStore.setApproved(id, true, checklist: kAllChecked)), isTrue);
    expect((await t.runAsync(loadVideos))!.map((v) => v.youtubeId), [id]);
    await t.runAsync(() => VideoControls.setHidden(id, true));
    expect((await t.runAsync(loadVideos))!, isEmpty);
    expect((await t.runAsync(() => loadVideos(all: true)))!.length, all.length); // still reviewable
    await t.runAsync(() => VideoControls.setHidden(id, false));
    await t.runAsync(() => LessonStore.setApproved(id, false));
    expect((await t.runAsync(loadVideos))!, isEmpty);
  });

  test('visibility labels: hidden by the parent, pending and rejected are not visible', () {
    expect(visibilityOf(_v('a'), {}), VideoVisibility.visible);
    expect(visibilityOf(_v('a'), {}, {}), VideoVisibility.awaitingApproval); // nothing is shown before the parent approves
    expect(visibilityOf(_v('a'), {}, {'a'}), VideoVisibility.visible);
    expect(visibilityOf(_v('a'), {'a'}), VideoVisibility.hiddenByParent);
    expect(visibilityOf(_v('p', approval: 'pending'), {}), VideoVisibility.pending);
    expect(visibilityOf(_v('p', approval: 'pending'), {'p'}), VideoVisibility.pending); // the parent list never overrides it
    expect(visibilityOf(_v('r', approval: 'rejected'), {}), VideoVisibility.rejected);
  });

  test('a damaged hidden list does not break loading', () async {
    SharedPreferences.setMockInitialValues({VideoControls.key: '{oops'});
    expect(await VideoControls.hidden(), isEmpty);
  });

  testWidgets('the review screen counts lessons, filters by age band, and approval needs the preview first', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: VideoReviewScreen()));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
    await t.pump();
    final all = (await t.runAsync(() => loadVideos(all: true)))!;
    expect(find.byKey(const ValueKey('video_counts')), findsOneWidget);
    expect(find.textContaining('${all.length} lessons · 0 visible to children'), findsOneWidget);
    final first = all.first;
    final tile = find.byKey(ValueKey('video_${first.youtubeId}'));
    await t.ensureVisible(tile);
    await t.pump();
    expect(find.descendant(of: tile, matching: find.textContaining('Waiting for your approval')), findsOneWidget);
    expect(t.widget<FilledButton>(find.byKey(ValueKey('approve_${first.youtubeId}'))).onPressed, isNull); // not previewed yet
    await t.runAsync(() => LessonStore.markPreviewed(first.youtubeId));
    await t.pumpWidget(MaterialApp(key: UniqueKey(), home: const VideoReviewScreen()));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
    await t.pump();
    await t.ensureVisible(find.byKey(ValueKey('approve_${first.youtubeId}')));
    await t.tap(find.byKey(ValueKey('approve_${first.youtubeId}')));
    await t.pumpAndSettle();
    expect(find.byKey(const ValueKey('review_sheet')), findsOneWidget);
    expect(t.widget<FilledButton>(find.byKey(const ValueKey('sheet_approve'))).onPressed, isNull); // nothing ticked
    for (var i = 0; i < 4; i++) {
      await t.tap(find.byKey(ValueKey('chk_$i')));
    }
    await t.pump();
    expect(t.widget<FilledButton>(find.byKey(const ValueKey('sheet_approve'))).onPressed, isNull); // four of five is not enough
    await t.tap(find.byKey(const ValueKey('chk_4')));
    await t.pump();
    await t.tap(find.byKey(const ValueKey('sheet_approve')));
    await t.pumpAndSettle();
    expect((await t.runAsync(LessonStore.approved))!, contains(first.youtubeId));
    await t.ensureVisible(find.byKey(ValueKey('video_${first.youtubeId}')));
    await t.pump();
    expect(find.byKey(ValueKey('reviewed_${first.youtubeId}')), findsOneWidget); // the date of the decision is shown
    await t.ensureVisible(find.byKey(ValueKey('toggle_${first.youtubeId}')));
    await t.tap(find.byKey(ValueKey('toggle_${first.youtubeId}')));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
    await t.pump();
    expect((await t.runAsync(VideoControls.hidden))!, contains(first.youtubeId));
    expect(find.descendant(of: find.byKey(ValueKey('video_${first.youtubeId}')), matching: find.textContaining('Disabled by you')), findsOneWidget);
  });

  testWidgets('the review screen labels bundled videos as unverified candidates and filters by status', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(key: UniqueKey(), home: const VideoReviewScreen()));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
    await t.pump();
    final first = (await t.runAsync(() => loadVideos(all: true)))!.first;
    expect(find.byKey(ValueKey('unverified_${first.youtubeId}')), findsOneWidget);
    await t.tap(find.byKey(const ValueKey('status_visible'))); // "Approved": nothing is approved yet
    await t.pump();
    expect(find.byKey(ValueKey('video_${first.youtubeId}')), findsNothing);
    expect(find.text('No matching lessons'), findsOneWidget);
    await t.tap(find.byKey(const ValueKey('status_awaitingApproval')));
    await t.pump();
    expect(find.byKey(ValueKey('video_${first.youtubeId}')), findsOneWidget);
  });
}
