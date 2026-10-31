import 'package:flutter/material.dart';
import 'package:kids_app/design/rehlaty_heart.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/library/learning_records.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/stories/story_data.dart';
import 'package:kids_app/stories/story_player.dart';
import 'package:kids_app/stories/story_screens.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_audio.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);

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

void main() {
  late FakeSpeech speech;
  late List<FakePlayer> players;

  StoryPlayerController controller(String id) => StoryPlayerController(
        storyById(id)!,
        childId: 'k1',
        speech: speech,
        newPlayer: () {
          final p = FakePlayer();
          players.add(p);
          return p;
        },
      );

  void tall(WidgetTester tester) {
    tester.view.physicalSize = const Size(900, 2200);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
  }

  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    (rootBundle as CachingAssetBundle).clear();
    speech = FakeSpeech()..manual = true;
    players = [];
    AppAudio.speech = speech;
    await AudioPrefs.instance.update(voiceOn: true, ambient: 'none', speechRate: 1.0);
  });

  group('the story library', () {
    testWidgets('shows stories for the child\'s age, filters by category and by favourites', (tester) async {
      tall(tester);
      await tester.pumpWidget(_app(const StoriesHomeScreen(child: _kid)));
      await _settle(tester);
      expect(find.text('القمر والنجمة النعسانة'), findsOneWidget);
      expect(find.text('جزيرة الاختيارات'), findsNothing); // 8-12 only
      await tester.tap(find.byType(CheckboxListTile));
      await tester.pump();
      expect(find.text('جزيرة الاختيارات'), findsOneWidget);
      await tester.tap(find.text('🧭 قصص تفاعلية'));
      await tester.pump();
      expect(find.text('جزيرة الاختيارات'), findsOneWidget);
      expect(find.text('القمر والنجمة النعسانة'), findsNothing);
      // Favourites: empty state, then add one.
      await tester.tap(find.text('❤️ المفضلة'));
      await tester.pump();
      expect(find.textContaining('لا توجد قصص مفضلة'), findsOneWidget);
      await tester.tap(find.text('الكل'));
      await tester.pump();
      await tester.tap(find.byTooltip('إضافة إلى المفضلة').first);
      await _settle(tester);
      expect(await tester.runAsync(() => StoryStore.favorites('k1')), isNotEmpty);
      await tester.tap(find.text('❤️ المفضلة'));
      await tester.pump();
      expect(find.byWidgetPredicate((w) => w is RehlatyHeart && w.filled), findsOneWidget);
    });

    testWidgets('a story that was stopped appears under "continue" and opens the player', (tester) async {
      tall(tester);
      await StoryStore.savePosition('k1', 'three_apples', 12, 0);
      await tester.pumpWidget(_app(const StoriesHomeScreen(child: _kid)));
      await _settle(tester);
      expect(find.text('تابع من حيث توقفت'), findsOneWidget);
      await tester.tap(find.bySemanticsLabel('تابع ثلاث تفاحات').first);
      await _settle(tester);
      expect(find.text('النص'), findsOneWidget);
    });
  });

  group('the player screen', () {
    testWidgets('shows the transcript and the demo-voice notice, plays and pauses with real controls', (tester) async {
      tall(tester);
      final c = controller('moon_star');
      await tester.pumpWidget(_app(StoryPlayerScreen(story: storyById('moon_star')!, child: _kid, controller: c)));
      await _settle(tester);
      expect(find.textContaining('تُقرأ القصة بصوت الجهاز الآلي كنسخة تجريبية'), findsOneWidget);
      expect(find.textContaining('أضاء القمر مصباحه'), findsOneWidget);
      await tester.tap(find.byTooltip('تشغيل'));
      await tester.pump(const Duration(milliseconds: 50));
      expect(c.playing, isTrue);
      expect(speech.spoken, isNotEmpty);
      await tester.pump(const Duration(seconds: 3));
      expect(find.text('00:03'), findsOneWidget);
      await tester.tap(find.byTooltip('إيقاف مؤقت'));
      await tester.pump(const Duration(milliseconds: 50));
      expect(c.state, PlayState.paused);
      expect(find.byTooltip('تشغيل'), findsOneWidget);
    });

    testWidgets('speed menu, skip buttons and the seek slider act on the controller', (tester) async {
      tall(tester);
      final c = controller('three_apples');
      await tester.pumpWidget(_app(StoryPlayerScreen(story: storyById('three_apples')!, child: _kid, controller: c)));
      await _settle(tester);
      await tester.tap(find.text('السرعة 1.0x'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('0.75x'));
      await tester.pumpAndSettle();
      expect(c.speed, 0.75);
      await tester.tap(find.byTooltip('تقدّم 15 ثانية'));
      await tester.pump();
      expect(c.positionSec, greaterThan(0));
      await tester.tap(find.byTooltip('رجوع 15 ثانية'));
      await tester.pump();
      expect(c.positionSec, 0);
      final slider = tester.widget<Slider>(find.byType(Slider));
      expect(slider.onChanged, isNotNull);
      slider.onChanged!(slider.max);
      await tester.pump();
      expect(c.positionSec, greaterThan(0));
    });

    testWidgets('the sleep timer menu starts a countdown that stops the story', (tester) async {
      tall(tester);
      final c = controller('moon_star');
      await tester.pumpWidget(_app(StoryPlayerScreen(story: storyById('moon_star')!, child: _kid, controller: c)));
      await _settle(tester);
      await tester.tap(find.byTooltip('تشغيل'));
      await tester.pump(const Duration(milliseconds: 50));
      await tester.tap(find.text('مؤقّت النوم'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('بعد 5 دقيقة'));
      await tester.pumpAndSettle();
      expect(find.textContaining('⏳'), findsOneWidget);
      await tester.pump(const Duration(minutes: 5, seconds: 1));
      expect(c.sleepEnded, isTrue);
      expect(c.state, PlayState.paused);
      expect(find.text('مؤقّت النوم'), findsOneWidget);
    });

    testWidgets('voice-only mode dims the screen, keeps working controls, and can be left', (tester) async {
      tall(tester);
      final c = controller('moon_star');
      await tester.pumpWidget(_app(StoryPlayerScreen(story: storyById('moon_star')!, child: _kid, controller: c)));
      await _settle(tester);
      await tester.tap(find.text('وضع الصوت فقط'));
      await tester.pump();
      expect(find.text('عرض النص'), findsOneWidget);
      expect(find.textContaining('أضاء القمر'), findsNothing); // no bright text
      await tester.tap(find.byTooltip('تشغيل'));
      await tester.pump(const Duration(milliseconds: 50));
      expect(c.playing, isTrue);
      await tester.tap(find.text('عرض النص'));
      await tester.pump();
      expect(find.textContaining('أضاء القمر'), findsOneWidget);
      await tester.tap(find.byTooltip('إيقاف مؤقت'));
      await tester.pump(const Duration(milliseconds: 50));
    });

    testWidgets('ambient sound is chosen from a menu and plays with the story', (tester) async {
      tall(tester);
      final c = controller('moon_star');
      await tester.pumpWidget(_app(StoryPlayerScreen(story: storyById('moon_star')!, child: _kid, controller: c)));
      await _settle(tester);
      await tester.tap(find.text('صوت الطبيعة'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('مطر هادئ'));
      await tester.pumpAndSettle();
      await tester.pump(const Duration(milliseconds: 100));
      expect(c.ambient, 'rain');
      expect((players.last.loaded as AssetAudio).path, 'assets/audio/rain.mp3');
      expect(find.text('مطر هادئ'), findsOneWidget);
      await tester.tap(find.byTooltip('تشغيل'));
      await tester.pump(const Duration(milliseconds: 50));
      expect(players.last.playing, isTrue);
      await tester.tap(find.byTooltip('إيقاف مؤقت'));
      await tester.pump(const Duration(milliseconds: 50));
    });

    testWidgets('when the voice is missing the controls are disabled and it says why, text stays readable',
        (tester) async {
      tall(tester);
      speech.available = false;
      final c = controller('moon_star');
      await tester.pumpWidget(_app(StoryPlayerScreen(story: storyById('moon_star')!, child: _kid, controller: c)));
      await _settle(tester);
      expect(find.textContaining('لا يوجد صوت عربي'), findsOneWidget);
      expect(tester.widget<IconButton>(find.widgetWithIcon(IconButton, Icons.play_arrow_rounded)).onPressed, isNull);
      expect(tester.widget<Slider>(find.byType(Slider)).onChanged, isNull);
      expect(find.textContaining('أضاء القمر'), findsOneWidget);
    });

    testWidgets('a real audio file story shows no demo-voice notice and plays the file', (tester) async {
      tall(tester);
      final c = controller('music_box');
      await tester.pumpWidget(_app(StoryPlayerScreen(story: storyById('music_box')!, child: _kid, controller: c)));
      await _settle(tester);
      expect(find.textContaining('نسخة تجريبية'), findsNothing);
      await tester.tap(find.byTooltip('تشغيل'));
      await tester.pump(const Duration(milliseconds: 50));
      expect(players.first.playing, isTrue);
      players.first.advance(const Duration(seconds: 7));
      await tester.pump(const Duration(milliseconds: 50));
      expect(find.text('00:07'), findsOneWidget);
      await tester.tap(find.byTooltip('إيقاف مؤقت'));
      await tester.pump(const Duration(milliseconds: 50));
    });

    testWidgets('an interactive story asks for a choice and the buttons work', (tester) async {
      tall(tester);
      final c = controller('choice_island');
      await tester.pumpWidget(_app(StoryPlayerScreen(story: storyById('choice_island')!, child: _kid, controller: c)));
      await _settle(tester);
      expect(tester.widget<Slider>(find.byType(Slider)).onChanged, isNull); // no seeking in a branching story
      await tester.tap(find.byTooltip('تشغيل'));
      for (var i = 0; i < 10 && c.state != PlayState.waitingChoice; i++) {
        speech.finish();
        await tester.pump(const Duration(milliseconds: 20));
      }
      await tester.pump();
      expect(find.text('ماذا تختار؟'), findsOneWidget);
      await tester.tap(find.text('أمشي في الغابة'));
      await tester.pump(const Duration(milliseconds: 50));
      expect(c.chapterIndex, 1);
      expect(find.text('في الغابة'), findsWidgets);
      await tester.tap(find.byTooltip('إيقاف مؤقت'));
      await tester.pump(const Duration(milliseconds: 50));
    });

    testWidgets('after the story the questions record demonstrated understanding; listening alone does not',
        (tester) async {
      tall(tester);
      final c = controller('three_apples');
      await tester.pumpWidget(_app(StoryPlayerScreen(story: storyById('three_apples')!, child: _kid, controller: c)));
      await _settle(tester);
      await tester.tap(find.byTooltip('تشغيل'));
      for (var i = 0; i < 40 && c.state != PlayState.completed; i++) {
        speech.finish();
        await tester.pump(const Duration(milliseconds: 20));
      }
      await tester.pump();
      expect(c.state, PlayState.completed);
      expect(find.text('انتهت القصة 🌙'), findsOneWidget);
      expect(find.textContaining('لن تبدأ قصة أخرى تلقائياً'), findsOneWidget);
      var records = await tester.runAsync(LearningRecords.all);
      expect(records!.any((r) => r.evidence == Evidence.demonstrated), isFalse);
      await tester.tap(find.text('أسئلة عن القصة'));
      await _settle(tester);
      // Q1: the right answer is "ثلاث".
      await tester.tap(find.text('ثلاث'));
      await tester.pump(const Duration(milliseconds: 1300));
      await tester.tap(find.text('لأنه نسي طعامه وكان محتاجاً'));
      await tester.pump(const Duration(milliseconds: 1300));
      await _settle(tester);
      expect(find.text('أحسنت! أنهيت الدرس'), findsOneWidget);
      records = await tester.runAsync(LearningRecords.all);
      expect(
        records!.where((r) => r.type == RecordType.story && r.evidence == Evidence.demonstrated).length,
        2,
      );
    });
  });
}
