import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/teachers_directory.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_portfolio.dart';
import 'package:kids_app/teachers_portfolio_screens.dart';
import 'package:kids_app/teachers_redesign.dart';
import 'package:shared_preferences/shared_preferences.dart';

TeacherProfile _t(String uid, String name, List<String> subjects, {bool idV = false, bool qualV = false}) => TeacherProfile(
      uid: uid,
      name: name,
      bio: 'bio $uid',
      subjects: subjects,
      languages: const ['العربية'],
      priceNote: '',
      identityVerified: idV,
      qualificationVerified: qualV,
    );

// a 1x1 transparent PNG
final _png = base64Decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=');

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('en');
  });
  tearDown(() => AppLocale.instance.set('ar'));

  test('categories come only from subjects teachers really teach, with real counts', () {
    final list = [_t('a', 'A', ['math', 'arabic']), _t('b', 'B', ['math'])];
    final c = SubjectCategories.counts(list);
    expect({for (final (s, n) in c) s.id: n}, {'math': 2, 'arabic': 1});
    expect(c.first.$1.id, 'math'); // most teachers first
    expect(SubjectCategories.counts(const []), isEmpty);
  });

  test('the verified strip lists only teachers the owner verified; nobody is "featured" by guess', () {
    final list = [_t('a', 'A', ['math']), _t('b', 'B', ['math'], idV: true), _t('c', 'C', ['math'], qualV: true)];
    expect(VerifiedTeachersStrip.pick(list).map((t) => t.uid), ['b', 'c']);
    expect(VerifiedTeachersStrip.pick([list.first]), isEmpty);
  });

  Widget host(List<TeacherProfile> teachers, void Function(TeacherProfile) open) => MaterialApp(
        home: Scaffold(body: TeacherDirectory(teachers: teachers, onOpen: open, onCompare: (_) {})),
      );

  testWidgets('hero, categories, cards with an open button; category filters; no verified section without verified teachers', (t) async {
    t.view.physicalSize = const Size(900, 1800);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    TeacherProfile? opened;
    await t.pumpWidget(host([_t('a', 'Alaa', ['math']), _t('b', 'Bassem', ['arabic'])], (x) => opened = x));
    await t.pump(const Duration(milliseconds: 100));
    expect(find.byKey(const ValueKey('teachers_hero')), findsOneWidget);
    expect(find.text('Discover great teachers!'), findsOneWidget);
    expect(find.byKey(const ValueKey('verified_teachers')), findsNothing);
    expect(find.byKey(const ValueKey('category_math')), findsOneWidget);
    expect(find.byKey(const ValueKey('category_arabic')), findsOneWidget);
    expect(find.byKey(const ValueKey('category_science')), findsNothing); // nobody teaches it

    await t.tap(find.byKey(const ValueKey('category_math')));
    await t.pump();
    expect(find.text('Alaa'), findsOneWidget);
    expect(find.text('Bassem'), findsNothing);
    expect(find.byKey(const ValueKey('teachers_hero')), findsNothing); // filtering hides the banner
    await t.tap(find.byKey(const ValueKey('category_math'))); // again: clears
    await t.pump();
    expect(find.text('Bassem'), findsOneWidget);

    await t.tap(find.byKey(const ValueKey('open_b')));
    expect(opened?.uid, 'b');
  });

  testWidgets('a verified teacher appears in the verified strip and opens', (t) async {
    t.view.physicalSize = const Size(900, 1800);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    TeacherProfile? opened;
    await t.pumpWidget(host([_t('a', 'Alaa', ['math'], idV: true), _t('b', 'Bassem', ['math'])], (x) => opened = x));
    await t.pump(const Duration(milliseconds: 100));
    expect(find.byKey(const ValueKey('verified_a')), findsOneWidget);
    expect(find.byKey(const ValueKey('verified_b')), findsNothing);
    await t.tap(find.byKey(const ValueKey('verified_a')));
    expect(opened?.uid, 'a');
  });

  testWidgets('gallery tile shows the teacher\'s picture and opens the preview; read-only', (t) async {
    final item = PortfolioItem(id: 'p1', teacherUid: 'a', type: kPortfolioTypes.first, title: 'My lesson', description: 'desc', imageB64: base64Encode(_png), status: 'published');
    var tapped = false;
    await t.pumpWidget(MaterialApp(home: Scaffold(body: SizedBox(width: 200, child: PortfolioTile(item: item, onTap: () => tapped = true)))));
    expect(find.text('My lesson'), findsOneWidget);
    expect(find.byType(Image), findsOneWidget);
    await t.tap(find.byKey(const ValueKey('tile_p1')));
    expect(tapped, isTrue);
  });
}
