import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/stories/branching.dart';
import 'package:kids_app/stories/branching_screen.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('en');
  });

  group('validator', () {
    BranchStory make(Map<String, BranchNode> n, {String start = 'a'}) => BranchStory('t', () => 't', 3, 6, start, n);
    const end = BranchNode('نهاية', 'end');

    test('shipped stories are valid, have several paths and every ending is reachable', () {
      for (final s in kBranchingStories) {
        expect(validateBranching(s), isEmpty, reason: s.id);
        expect(pathCount(s), greaterThanOrEqualTo(4), reason: s.id);
        expect(s.nodes.values.where((n) => n.isEnding).length, greaterThanOrEqualTo(2));
      }
      expect({for (final s in kBranchingStories) s.id}.length, kBranchingStories.length);
    });

    test('every shipped page and choice has Arabic and English text and nothing scary', () {
      for (final s in kBranchingStories) {
        for (final n in s.nodes.values) {
          expect(n.ar.trim(), isNotEmpty);
          expect(n.en.trim(), isNotEmpty);
          for (final w in ['dies', 'dead', 'blood', 'scary', 'monster', 'يموت', 'دم']) {
            expect(n.en.toLowerCase().contains(w) || n.ar.contains(w), isFalse, reason: w);
          }
        }
      }
    });

    test('it catches a missing target, an unreachable page, a page that cannot end, a single choice and a missing start', () {
      expect(validateBranching(make({'a': const BranchNode('a', 'a', [BranchChoice('x', 'x', 'zzz'), BranchChoice('y', 'y', 'e')]), 'e': end})), isNotEmpty);
      expect(validateBranching(make({'a': const BranchNode('a', 'a', [BranchChoice('x', 'x', 'e'), BranchChoice('y', 'y', 'e')]), 'e': end, 'orphan': end})), contains('orphan is never reached'));
      final loop = make({'a': const BranchNode('a', 'a', [BranchChoice('x', 'x', 'b'), BranchChoice('y', 'y', 'e')]), 'b': const BranchNode('b', 'b', [BranchChoice('x', 'x', 'c'), BranchChoice('y', 'y', 'c')]), 'c': const BranchNode('c', 'c', [BranchChoice('x', 'x', 'b'), BranchChoice('y', 'y', 'b')]), 'e': end});
      expect(validateBranching(loop), containsAll(['b cannot reach an ending', 'c cannot reach an ending']));
      expect(validateBranching(make({'a': const BranchNode('a', 'a', [BranchChoice('x', 'x', 'e')]), 'e': end})), contains('a has a single choice'));
      expect(validateBranching(make({'e': end}, start: 'nope')), isNotEmpty);
    });
  });

  group('screen', () {
    const kid = ChildProfile(id: 'k1', nickname: 'L', age: 4);
    Future<void> open(WidgetTester t, {Size size = const Size(360, 640), String lang = 'en', double text = 1}) async {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await AppLocale.instance.set(lang);
      await t.pumpWidget(MaterialApp(
        key: UniqueKey(),
        builder: (c, w) => MediaQuery(data: MediaQuery.of(c).copyWith(textScaler: TextScaler.linear(text)), child: w!),
        home: BranchingStoryScreen(story: kBranchingStories.first, child: kid),
      ));
      await t.pump();
    }

    testWidgets('every path can be walked to an ending; the first ending is recorded and celebrated once', (t) async {
      await open(t);
      expect(find.byKey(const ValueKey('branch_choice_0')), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('branch_choice_0')));
      await t.pump();
      await t.tap(find.byKey(const ValueKey('branch_choice_0')));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
      await t.pump();
      expect(find.byKey(const ValueKey('branch_again')), findsOneWidget);
      expect(find.byKey(const ValueKey('companion_bubble')), findsOneWidget);
      expect((await t.runAsync(() => StoryStore.history('k1')))!.where((e) => e.storyId == 'branch_boat' && e.completed), hasLength(1));
      // another way: a second ending does not celebrate again
      await t.ensureVisible(find.byKey(const ValueKey('branch_again')));
      await t.tap(find.byKey(const ValueKey('branch_again')));
      await t.pump();
      await t.tap(find.byKey(const ValueKey('branch_choice_1')));
      await t.pump();
      await t.tap(find.byKey(const ValueKey('branch_choice_1')));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
      await t.pump();
      expect(find.byKey(const ValueKey('branch_again')), findsOneWidget);
      expect(find.byKey(const ValueKey('companion_bubble')), findsNothing);
    });

    testWidgets('going back one step works; small phone, landscape, Arabic and large text fit', (t) async {
      for (final lang in ['ar', 'en']) {
        for (final size in [const Size(320, 568), const Size(844, 390)]) {
          await open(t, size: size, lang: lang, text: 1.6);
          await t.ensureVisible(find.byKey(const ValueKey('branch_choice_1')));
          await t.tap(find.byKey(const ValueKey('branch_choice_1')));
          await t.pump();
          expect(find.byKey(const ValueKey('branch_back')), findsOneWidget);
          await t.tap(find.byKey(const ValueKey('branch_back')));
          await t.pump();
          expect(find.byKey(const ValueKey('branch_back')), findsNothing);
          expect(t.takeException(), isNull);
        }
      }
    });

    testWidgets('the library card only offers stories that fit the age', (t) async {
      await t.pumpWidget(const MaterialApp(home: Scaffold(body: BranchingStoriesCard(child: ChildProfile(id: 'x', nickname: 'a', age: 2)))));
      expect(find.byKey(const ValueKey('branching_card')), findsNothing);
      await t.pumpWidget(const MaterialApp(home: Scaffold(body: BranchingStoriesCard(child: kid))));
      expect(find.byKey(const ValueKey('branch_boat')), findsOneWidget);
    });
  });
}
