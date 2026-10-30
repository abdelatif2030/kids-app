import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/focusable_tap.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/studio/creations.dart';
import 'package:kids_app/studio/studio_screens.dart';
import 'package:kids_app/studio/word_builder.dart';
import 'package:shared_preferences/shared_preferences.dart';

const kid = ChildProfile(id: 'k1', nickname: 'ليلى', age: 5);

Creation make(String id, CreationKind kind, {String child = 'k1', Map<String, dynamic>? data, String day = '2026-10-30'}) =>
    Creation(id, child, kind, day, data ?? (kind == CreationKind.word ? {'w': 'قطة', 'v': 'cat', 'e': '🐱', 'lang': 'ar'} : kind == CreationKind.story ? {'pics': ['🐱']} : kind == CreationKind.drawing ? {'s': []} : {'bg': 'sea', 'items': []}));

Future<void> seed(List<Creation> items) async {
  for (final c in items) {
    await FamilyGallery.save(c);
  }
}

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    AppLocale.instance.set('en');
  });

  group('tab rules', () {
    final all = [
      make('d', CreationKind.drawing),
      make('w', CreationKind.word),
      make('s', CreationKind.story),
      make('sc', CreationKind.scene),
      make('ch', CreationKind.character),
    ];
    test('each tab shows only its kind; All shows everything; scenes and characters are only under All', () {
      expect(inTab(all, GalleryTab.all).length, 5);
      expect(inTab(all, GalleryTab.drawings).map((c) => c.id), ['d']);
      expect(inTab(all, GalleryTab.words).map((c) => c.id), ['w']);
      expect(inTab(all, GalleryTab.stories).map((c) => c.id), ['s']);
    });
    test('an unknown stored kind does not break the gallery (the old data format still loads)', () async {
      SharedPreferences.setMockInitialValues({'family_gallery': '[{"i":"x","c":"k1","k":"hologram","d":"2026-10-30","x":{}}]'});
      expect(await FamilyGallery.forChild('k1'), isEmpty);
    });
  });

  group('words in the gallery', () {
    test('words have their own limit, so many words never push drawings out', () async {
      for (var i = 0; i < FamilyGallery.perChild; i++) {
        await FamilyGallery.save(make('d$i', CreationKind.drawing));
      }
      for (var i = 0; i < FamilyGallery.maxWordsPerChild + 5; i++) {
        await FamilyGallery.save(make('w$i', CreationKind.word, data: {'w': 'w$i', 'v': 'cat', 'e': '🐱', 'lang': 'ar'}));
      }
      final mine = await FamilyGallery.forChild('k1');
      expect(mine.where((c) => c.kind == CreationKind.drawing).length, FamilyGallery.perChild);
      expect(mine.where((c) => c.kind == CreationKind.word).length, FamilyGallery.maxWordsPerChild);
      expect(mine.any((c) => c.id == 'w0'), isFalse); // the oldest word made room
      expect(mine.any((c) => c.id == 'd0'), isTrue);
    });
    test('children are kept apart', () async {
      await seed([make('a', CreationKind.word), make('b', CreationKind.word, child: 'k2')]);
      expect((await FamilyGallery.forChild('k1')).map((c) => c.id), ['a']);
    });
  });

  group('screen', () {
    Future<void> open(WidgetTester t, {Size size = const Size(420, 900)}) async {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: const ChildGalleryScreen(child: kid)));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
      await t.pump(const Duration(milliseconds: 700));
    }

    Future<void> tab(WidgetTester t, GalleryTab g) async {
      await t.tap(find.byKey(ValueKey('tab_${g.name}')));
      await t.pump();
      await t.pump(const Duration(milliseconds: 700));
    }

    testWidgets('four tabs; each lists only its own items and the empty ones say so', (t) async {
      await t.runAsync(() => seed([make('d', CreationKind.drawing), make('w', CreationKind.word), make('s', CreationKind.story)]));
      await open(t);
      for (final g in GalleryTab.values) {
        expect(find.byKey(ValueKey('tab_${g.name}')), findsOneWidget);
      }
      expect(find.byType(CreationThumb), findsNWidgets(3)); // All
      await tab(t, GalleryTab.words);
      expect(find.byType(CreationThumb), findsOneWidget);
      expect(find.text('قطة'), findsOneWidget);
      await tab(t, GalleryTab.drawings);
      expect(find.byType(CreationThumb), findsOneWidget);
      await tab(t, GalleryTab.stories);
      expect(find.byType(CreationThumb), findsOneWidget);
    });

    testWidgets('an empty tab shows a gentle message, an empty gallery shows the general one', (t) async {
      await t.runAsync(() => seed([make('d', CreationKind.drawing)]));
      await open(t);
      await tab(t, GalleryTab.words);
      expect(find.byKey(const ValueKey('gallery_empty')), findsOneWidget);
      expect(find.textContaining('No words yet'), findsOneWidget);
      await tab(t, GalleryTab.stories);
      expect(find.textContaining('No stories yet'), findsOneWidget);
    });

    testWidgets('rename still works from a tab and the new name shows in that tab and in All', (t) async {
      await t.runAsync(() => seed([make('w', CreationKind.word), make('d', CreationKind.drawing)]));
      await open(t);
      await tab(t, GalleryTab.words);
      await t.tap(find.byTooltip('Rename'));
      await t.pumpAndSettle();
      await t.enterText(find.byType(TextField), 'My cat');
      await t.tap(find.text('Save'));
      await t.pump();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
      await t.pump(const Duration(milliseconds: 700));
      expect(find.textContaining('My cat'), findsOneWidget);
      await tab(t, GalleryTab.all);
      expect(find.textContaining('My cat'), findsOneWidget);
      final stored = (await t.runAsync(() => FamilyGallery.forChild('k1')))!.firstWhere((c) => c.id == 'w');
      expect(stored.name, 'My cat');
    });

    testWidgets('only this child\'s items appear', (t) async {
      await t.runAsync(() => seed([make('mine', CreationKind.word), make('theirs', CreationKind.word, child: 'k2')]));
      await open(t);
      expect(find.byType(CreationThumb), findsOneWidget);
    });

    for (final size in [const Size(320, 700), const Size(768, 1024), const Size(1280, 800)]) {
      testWidgets('tabs fit at ${size.width.toInt()} px in Arabic and English without overflow', (t) async {
        await t.runAsync(() => seed([make('d', CreationKind.drawing), make('w', CreationKind.word)]));
        for (final lang in ['ar', 'en']) {
          AppLocale.instance.set(lang);
          await open(t, size: size);
          expect(find.byKey(const ValueKey('gallery_tabs')), findsOneWidget);
          await tab(t, GalleryTab.stories);
        }
      });
    }
  });

  testWidgets('finishing a word in the word builder saves it to the gallery once, with no reward and per child', (t) async {
    await t.pumpWidget(MaterialApp(home: WordBuilderScreen(child: kid, english: false, startVocabId: 'cat')));
    await t.pump(const Duration(milliseconds: 300));
    // Solve the word: tap each tile in the right order.
    final word = 'قطة';
    final tiles = wordTiles(word);
    for (final l in tiles) {
      await t.tap(find.descendant(of: find.byType(FocusableTap), matching: find.text(l)).first);
      await t.pump();
    }
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
    final mine = (await t.runAsync(() => FamilyGallery.forChild('k1')))!;
    expect(mine.where((c) => c.kind == CreationKind.word).length, 1);
    expect(mine.single.id, 'w_cat_ar');
    expect(mine.single.data['w'], 'قطة');
  });
}
