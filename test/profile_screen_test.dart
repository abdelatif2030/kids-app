import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/reward_totals.dart';
import 'package:kids_app/journey/ui/profile_screen.dart';
import 'package:kids_app/lessons_own/video_rewards.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  const kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);
  const ids = ['stickers', 'tree', 'pet', 'surprise', 'room', 'journey', 'awards', 'settings', 'stats', 'edit', 'back'];

  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    FlutterSecureStorage.setMockInitialValues({});
    final st = JourneyStore.instance;
    await st.load();
    await st.addProfile(kid);
  });

  test('the picture is bundled and the tree bar follows the garden stages', () {
    expect(File(kProfilePicture).existsSync(), isTrue);
    expect(File('pubspec.yaml').readAsStringSync(), contains(kProfilePicture));
    expect(treeProgress(0), (n: 0, target: 1));
    expect(treeProgress(3), (n: 3, target: 4));
    expect(treeProgress(12), (n: 12, target: 20));
    expect(treeProgress(55), (n: 55, target: 40));
  });

  testWidgets('every button of the profile sits inside the picture and none overlap; the numbers are the real ones', (t) async {
    await t.runAsync(() async {
      await VideoRewards.complete('k1', 'lesson_01');
      await VideoRewards.complete('k1', 'lesson_02');
    });
    for (final size in const [Size(1672, 941), Size(844, 390)]) {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: ProfileScreen(child: kid, onBack: () {}))));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
      await t.pump(const Duration(milliseconds: 200));
      final box = t.getRect(find.byKey(const ValueKey('picture_stage_box')));
      final rects = {for (final id in ids) id: t.getRect(find.byKey(ValueKey('profile_$id')))};
      for (final e in rects.entries) {
        expect(box.contains(e.value.topLeft) && box.contains(e.value.bottomRight), isTrue, reason: '${e.key} at $size');
      }
      for (final a in ids) {
        for (final b in ids) {
          if (a.compareTo(b) < 0) expect(rects[a]!.overlaps(rects[b]!), isFalse, reason: '$a vs $b at $size');
        }
      }
      expect(find.text('سلمى'), findsOneWidget);
      expect(find.text('2'), findsWidgets, reason: 'two lesson videos watched = two stars');
      expect(find.text('المستوى 1'), findsOneWidget);
      expect(find.text('0 / 1'), findsOneWidget, reason: 'the tree: nothing finished yet');
    }
    addTearDown(t.view.reset);
  });

  testWidgets('the real pages open: stats, awards, pet says it is coming, the back arrow calls back', (t) async {
    t.view.physicalSize = const Size(1672, 941);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    var back = 0;
    await t.pumpWidget(MaterialApp(home: Scaffold(body: ProfileScreen(child: kid, onBack: () => back++))));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
    await t.pump(const Duration(milliseconds: 200));
    await t.tap(find.byKey(const ValueKey('profile_back')));
    expect(back, 1);
    Future<void> open(String id) async {
      await t.tap(find.byKey(ValueKey('profile_$id')));
      await t.pump(const Duration(milliseconds: 100));
      await t.pump(const Duration(milliseconds: 500));
    }

    await open('stats');
    expect(find.byKey(const ValueKey('stats')), findsOneWidget);
    await t.pageBack();
    await t.pump(const Duration(milliseconds: 600));
    await open('awards');
    expect(find.byKey(const ValueKey('achievements')), findsOneWidget);
    await t.pageBack();
    await t.pump(const Duration(milliseconds: 600));
    await open('pet');
    expect(find.byKey(const ValueKey('coming_soon')), findsOneWidget);
  });

  test('stars come from finished things only: videos and games add up with the journey', () async {
    await VideoRewards.complete('k1', 'a');
    final t = await RewardTotals.of('k1');
    expect(t.stars, 1);
    expect(t.level, 1);
  });
}
