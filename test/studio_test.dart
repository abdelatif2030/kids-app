import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/drawing_screen.dart';
import 'package:kids_app/journey/home_tasks.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/library/activities.dart';
import 'package:kids_app/library/activity_screens.dart';
import 'package:kids_app/library/learning_records.dart';
import 'package:kids_app/literacy/mastery.dart';
import 'package:kids_app/progress_store.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:kids_app/studio/character_creator.dart';
import 'package:kids_app/studio/creations.dart';
import 'package:kids_app/studio/scene_builder.dart';
import 'package:kids_app/studio/story_pictures.dart';
import 'package:kids_app/studio/studio_screens.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_audio.dart';
import 'package:kids_app/media/audio.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);
const _other = ChildProfile(id: 'k2', nickname: 'نور', age: 3);

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) => Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

Future<void> _settle(WidgetTester tester) async {
  await tester.pump();
  await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 200)));
  await tester.pump(const Duration(milliseconds: 600));
}

void tall(WidgetTester tester) {
  tester.view.physicalSize = const Size(900, 1800);
  tester.view.devicePixelRatio = 1;
  addTearDown(tester.view.reset);
}

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    (rootBundle as CachingAssetBundle).clear();
    AppAudio.speech = FakeSpeech();
    final store = JourneyStore(LocalJourneyRepository());
    await store.load();
    await store.addProfile(_kid);
    await store.addProfile(_other);
    JourneyStore.instance = store;
  });

  group('family gallery', () {
    test('saves, replaces by id, keeps children apart and deletes', () async {
      await FamilyGallery.save(Creation('a', 'k1', CreationKind.scene, '2026-10-01', {'bg': 'sea', 'items': []}));
      await FamilyGallery.save(Creation('b', 'k2', CreationKind.drawing, '2026-10-01', {'s': []}));
      await FamilyGallery.save(Creation('a', 'k1', CreationKind.scene, '2026-10-02', {'bg': 'night', 'items': []}));
      expect((await FamilyGallery.all()).length, 2);
      expect((await FamilyGallery.forChild('k1')).single.data['bg'], 'night');
      await FamilyGallery.delete('a');
      expect((await FamilyGallery.all()).map((c) => c.id), ['b']);
      await FamilyGallery.deleteAllOf('k2');
      expect(await FamilyGallery.all(), isEmpty);
    });

    test('the oldest creation makes room after 25 per child', () async {
      for (var i = 0; i < FamilyGallery.perChild + 3; i++) {
        await FamilyGallery.save(Creation('c$i', 'k1', CreationKind.story, '2026-10-01', {'pics': ['🐱']}));
      }
      final mine = await FamilyGallery.forChild('k1');
      expect(mine.length, FamilyGallery.perChild);
      expect(mine.first.id, 'c3');
      expect(mine.last.id, 'c${FamilyGallery.perChild + 2}');
    });

    test('a huge creation is refused instead of filling the phone', () async {
      final huge = Creation('x', 'k1', CreationKind.drawing, '2026-10-01', {'junk': 'x' * 200000});
      expect(await FamilyGallery.save(huge), isFalse);
      expect(await FamilyGallery.all(), isEmpty);
    });

    test('drawing data round-trips and long drawings are thinned', () {
      final strokes = [
        DrawStroke(0xFFE53935, 14, [const Offset(10, 20), const Offset(500, 600), const Offset(990, 980)]),
        DrawStroke(0xFF1E88E5, 28, [for (var i = 0; i < 12000; i++) Offset((i % 1000).toDouble(), (i % 700).toDouble())]),
      ];
      final data = drawingData(strokes);
      final back = strokesOf(data);
      expect(back.length, 2);
      expect(back[0].points, [const Offset(10, 20), const Offset(500, 600), const Offset(990, 980)]);
      expect(back[0].color, 0xFFE53935);
      final total = back.fold<int>(0, (s, x) => s + x.points.length);
      expect(total, lessThan(6000));
      expect(back[1].points.last, strokes[1].points.last); // the end of a stroke is kept
    });

    test('character and scene specs survive saving', () {
      const spec = CharacterSpec(skin: 3, hairStyle: 2, hairColor: 4, eyes: 2, mouth: 1, shirt: 5, hat: 4);
      final back = CharacterSpec.fromJson(spec.toJson());
      expect(back.toJson(), spec.toJson());
      // Out-of-range values (from a damaged file) are clamped, never crash.
      expect(CharacterSpec.fromJson({'skin': 99, 'hs': -4}).skin, kSkinTones.length - 1);
      final items = sceneItemsOf(sceneData('sea', [const SceneItem('🐟', 0.2, 0.8, 1.5)]));
      expect(items.single.emoji, '🐟');
      expect(items.single.scale, 1.5);
    });
  });

  group('drawing autosave', () {
    testWidgets('a stroke is saved after a moment, reopened, and edited without making a copy', (tester) async {
      tall(tester);
      await tester.pumpWidget(_app(const DrawingScreen(child: _kid)));
      await tester.pump();
      final canvas = tester.getCenter(find.byType(CustomPaint).first);
      final g = await tester.startGesture(canvas);
      await g.moveBy(const Offset(80, 40));
      await g.moveBy(const Offset(60, -20));
      await g.up();
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
      await tester.pump();
      var saved = await tester.runAsync(() => FamilyGallery.forChild('k1'));
      expect(saved!.length, 1);
      expect(saved.single.kind, CreationKind.drawing);
      expect(strokesOf(saved.single.data).length, 1);
      expect(find.text('تم الحفظ ✓'), findsOneWidget);
      // Reopen from the gallery and add another stroke: same id, two strokes.
      await tester.pumpWidget(_app(DrawingScreen(child: _kid, initial: saved.single)));
      await tester.pump();
      final g2 = await tester.startGesture(tester.getCenter(find.byType(CustomPaint).first) + const Offset(0, 80));
      await g2.moveBy(const Offset(70, 0));
      await g2.moveBy(const Offset(70, 0));
      await g2.up();
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
      saved = await tester.runAsync(() => FamilyGallery.forChild('k1'));
      expect(saved!.length, 1);
      expect(strokesOf(saved.single.data).length, 2);
    });

    testWidgets('leaving at once still saves; without a child nothing is stored', (tester) async {
      tall(tester);
      await tester.pumpWidget(_app(const DrawingScreen(child: _kid)));
      await tester.pump();
      final g = await tester.startGesture(tester.getCenter(find.byType(CustomPaint).first));
      await g.moveBy(const Offset(90, 0));
      await g.moveBy(const Offset(90, 0));
      await g.up();
      await tester.pumpWidget(_app(const SizedBox())); // close before the debounce fires
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 150)));
      expect((await tester.runAsync(FamilyGallery.all))!.length, 1);
      await tester.runAsync(FamilyGallery.deleteEverything);
      await tester.pumpWidget(_app(const DrawingScreen()));
      await tester.pump();
      final g2 = await tester.startGesture(tester.getCenter(find.byType(CustomPaint).first));
      await g2.moveBy(const Offset(90, 0));
      await g2.up();
      await tester.pump(const Duration(seconds: 2));
      expect(await tester.runAsync(FamilyGallery.all), isEmpty);
    });
  });

  group('studio activities', () {
    testWidgets('scene builder adds, resizes and deletes items and autosaves the scene', (tester) async {
      tall(tester);
      await tester.pumpWidget(_app(const SceneBuilderScreen(child: _kid)));
      await tester.pump();
      expect(find.textContaining('اختر صورة من الأسفل'), findsOneWidget);
      await tester.tap(find.byTooltip('قطة'));
      await tester.pump();
      await tester.tap(find.byTooltip('كلب'));
      await tester.pump();
      await tester.tap(find.text('ليل'));
      await tester.pump();
      await tester.tap(find.byTooltip('تكبير'));
      await tester.pump();
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
      var saved = (await tester.runAsync(() => FamilyGallery.forChild('k1')))!.single;
      expect(saved.data['bg'], 'night');
      final items = sceneItemsOf(saved.data);
      expect(items.map((i) => i.emoji), ['🐱', '🐶']);
      expect(items.last.scale, greaterThan(1.4)); // the selected (last) one grew
      await tester.tap(find.byTooltip('حذف العنصر المحدد'));
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
      saved = (await tester.runAsync(() => FamilyGallery.forChild('k1')))!.single;
      expect(sceneItemsOf(saved.data).length, 1);
    });

    testWidgets('character creator saves the chosen look', (tester) async {
      tall(tester);
      await tester.pumpWidget(_app(const CharacterCreatorScreen(child: _kid)));
      await tester.pump();
      await tester.tap(find.text('طويل'));
      await tester.pump();
      await tester.tap(find.text('كبيرة'));
      await tester.pump();
      await tester.tap(find.byWidgetPredicate((w) => w is Semantics && w.properties.label == 'لون بشرة 4').first);
      await tester.pump();
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
      final saved = (await tester.runAsync(() => FamilyGallery.forChild('k1')))!.single;
      final spec = CharacterSpec.fromJson((saved.data['spec'] as Map).cast<String, dynamic>());
      expect(spec.hairStyle, 1);
      expect(spec.eyes, 2);
      expect(spec.skin, 3);
    });

    testWidgets('picture story: choose three pictures, then it prompts beginning, middle and end', (tester) async {
      tall(tester);
      await tester.pumpWidget(_app(const PictureStoryScreen(child: _kid)));
      await tester.pump();
      expect(find.text('اختر 3 صور لقصتك (0 من 3)'), findsOneWidget);
      await tester.tap(find.byTooltip('قطة'));
      await tester.pump();
      await tester.tap(find.byTooltip('كلب'));
      await tester.pump();
      await tester.tap(find.byTooltip('أسد'));
      await tester.pump();
      expect(find.textContaining('احكِ قصتك لماما أو بابا'), findsOneWidget);
      expect(find.text('البداية'), findsOneWidget);
      await tester.tap(find.text('التالي'));
      await tester.pump();
      expect(find.text('ثم ماذا حدث؟'), findsOneWidget);
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
      final saved = (await tester.runAsync(() => FamilyGallery.forChild('k1')))!.single;
      expect(saved.kind, CreationKind.story);
      expect(saved.data['pics'], ['🐱', '🐶', '🦁']);
    });

    testWidgets('the child can browse the gallery but there is no delete there', (tester) async {
      tall(tester);
      await FamilyGallery.save(Creation('s1', 'k1', CreationKind.story, '2026-10-01', {'pics': ['🐱', '🐶', '🦁']}));
      await FamilyGallery.save(Creation('s2', 'k2', CreationKind.story, '2026-10-01', {'pics': ['🐟']}));
      await tester.pumpWidget(_app(const ChildGalleryScreen(child: _kid)));
      await _settle(tester);
      expect(find.byType(CreationThumb), findsOneWidget); // only her own
      expect(find.byIcon(Icons.delete_outline_rounded), findsNothing);
      expect(find.byTooltip('حذف'), findsNothing);
    });

    testWidgets('an empty gallery explains itself', (tester) async {
      await tester.pumpWidget(_app(const ChildGalleryScreen(child: _kid)));
      await _settle(tester);
      expect(find.textContaining('لا توجد أعمال بعد'), findsOneWidget);
    });
  });

  group('parent gallery and deleting data', () {
    testWidgets('the parent deletes one item after confirming, or everything', (tester) async {
      tall(tester);
      await FamilyGallery.save(Creation('s1', 'k1', CreationKind.story, '2026-10-01', {'pics': ['🐱']}));
      await FamilyGallery.save(Creation('s2', 'k2', CreationKind.story, '2026-10-01', {'pics': ['🐟']}));
      await tester.pumpWidget(_app(const ParentGalleryScreen()));
      await _settle(tester);
      expect(find.textContaining('على هذا الجهاز فقط'), findsOneWidget);
      await tester.tap(find.byTooltip('حذف').first);
      await tester.pump();
      await tester.tap(find.text('إلغاء'));
      await tester.pump();
      expect((await tester.runAsync(FamilyGallery.all))!.length, 2); // cancel keeps it
      await tester.tap(find.byTooltip('حذف').first);
      await tester.pump();
      await tester.tap(find.text('حذف').last);
      await _settle(tester);
      expect((await tester.runAsync(FamilyGallery.all))!.length, 1);
      await tester.tap(find.byTooltip('حذف كل الأعمال'));
      await tester.pump();
      await tester.tap(find.text('حذف').last);
      await _settle(tester);
      expect(await tester.runAsync(FamilyGallery.all), isEmpty);
      expect(find.text('المعرض فارغ.'), findsOneWidget);
    });

    test('deleting one child removes their data everywhere and keeps the other child', () async {
      for (final id in ['k1', 'k2']) {
        await ProgressStore.record('vocab', true, childId: id);
        await LearningRecords.add(id, RecordType.word, 'cat', Evidence.practice);
        await HomeTasks.suggest(id, 'numbers');
        await StoryStore.toggleFavorite(id, 'moon_star');
        await StoryStore.savePosition(id, 'moon_star', 10, 0);
        await LiteracyStore.record(id, 'ب', true);
        await FamilyGallery.save(Creation('g$id', id, CreationKind.story, '2026-10-01', {'pics': ['🐱']}));
      }
      await deleteOneChild('k1');
      expect((await ProgressStore.load()).map((e) => e.childId), ['k2']);
      expect((await LearningRecords.all()).map((r) => r.childId), ['k2']);
      expect((await HomeTasks.all()).map((t) => t.childId), ['k2']);
      expect((await FamilyGallery.all()).map((c) => c.childId), ['k2']);
      expect(await StoryStore.favorites('k1'), isEmpty);
      expect(await StoryStore.resumePoint('k1', 'moon_star'), isNull);
      expect(await LiteracyStore.statesOf('k1'), isEmpty);
      expect(await StoryStore.favorites('k2'), {'moon_star'});
      expect((await LiteracyStore.statesOf('k2')).keys, ['ب']);
      expect(JourneyStore.instance.profileById('k1'), isNull);
      expect(JourneyStore.instance.profileById('k2'), isNotNull);
    });

    test('"delete all child data" clears the new stores too', () async {
      await LearningRecords.add('k1', RecordType.story, 's', Evidence.exposure);
      await StoryStore.toggleFavorite('k1', 'moon_star');
      await LiteracyStore.record('k1', 'ب', true);
      await FamilyGallery.save(Creation('g', 'k1', CreationKind.story, '2026-10-01', {'pics': ['🐱']}));
      await deleteChildData();
      final p = await SharedPreferences.getInstance();
      for (final k in ['learning_records', 'story_state', 'literacy_state', 'family_gallery', 'home_tasks']) {
        expect(p.containsKey(k), isFalse, reason: k);
      }
    });
  });

  group('real-life activities', () {
    test('every activity has instructions, a skill from the filter list and a sensible age', () {
      expect(kRealActivities.map((a) => a.id).toSet().length, kRealActivities.length);
      for (final a in kRealActivities) {
        expect(a.forChild, isNotEmpty);
        expect(a.forParent, isNotEmpty);
        expect(kSkillFilters, contains(a.skill), reason: a.id);
        expect(a.minAge <= a.maxAge, isTrue);
        expect(a.minutes, inInclusiveRange(5, 30));
      }
    });

    test('activities with water, knives or small things carry a safety note', () {
      for (final id in ['float_sink', 'fruit_salad', 'nature_walk', 'sort_color', 'plant_watch', 'letter_tray', 'play_dough']) {
        expect(activityById(id)!.safety, isNotEmpty, reason: id);
      }
      expect(activityById('float_sink')!.minAge, greaterThanOrEqualTo(4));
    });

    test('filters work by age and skill', () {
      expect(activitiesFor(age: 1).every((a) => a.minAge <= 1), isTrue);
      expect(activitiesFor(skill: 'المشاعر والحياة').length, greaterThanOrEqualTo(2));
      expect(activitiesFor(age: 1, skill: 'العلوم والطبيعة'), isEmpty);
    });

    testWidgets('a parent confirms one: it shows as done, with practice evidence only', (tester) async {
      tall(tester);
      await tester.pumpWidget(_app(const ActivityLibraryScreen(child: _kid)));
      await _settle(tester);
      await tester.tap(find.text('ثلاثة أشياء مستديرة'));
      await tester.pumpAndSettle();
      expect(find.text('للوالد'), findsOneWidget);
      await tester.tap(find.text('تمّ (يؤكدها الكبير)'));
      await _settle(tester);
      expect(find.text('تمّ هذا الأسبوع ✓'), findsOneWidget);
      final tasks = (await tester.runAsync(HomeTasks.all))!;
      expect(tasks.single.done, isTrue);
      expect(tasks.single.topic, 'activity');
      final records = (await tester.runAsync(LearningRecords.all))!;
      expect(records.single.type, RecordType.activity);
      expect(records.single.evidence, Evidence.practice);
    });

    testWidgets('safety notes are shown to the parent and the age filter has an empty state', (tester) async {
      tall(tester);
      await tester.pumpWidget(_app(const ActivityLibraryScreen(child: ChildProfile(id: 'k3', nickname: 'ن', age: 1))));
      await _settle(tester);
      await tester.tap(find.text('العلوم والطبيعة'));
      await tester.pump();
      expect(find.textContaining('لا توجد أنشطة لهذا الاختيار'), findsOneWidget);
      await tester.tap(find.byType(CheckboxListTile));
      await tester.pump();
      await tester.tap(find.text('يطفو أم يغرق؟'));
      await tester.pumpAndSettle();
      expect(find.textContaining('بإشراف مباشر دائماً'), findsOneWidget);
    });
  });
}
