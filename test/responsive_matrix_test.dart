import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/web_games/web_game.dart';
import 'package:kids_app/design/layout.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/child_shell.dart';
import 'package:kids_app/journey/ui/day_settings_screen.dart';
import 'package:kids_app/journey/ui/library_screen.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/main.dart' show AppScrollBehavior;
import 'package:kids_app/parent_screens.dart';
import 'package:kids_app/parent_settings_screen.dart';
import 'package:kids_app/print/printables_screen.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_parent.dart';
import 'package:kids_app/teachers_portfolio.dart';
import 'package:kids_app/teachers_portfolio_screens.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_teacher_repository.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);
const _widths = {'compact': 360.0, 'medium': 768.0, 'expanded': 1280.0};

Future<void> _setup() async {
  SharedPreferences.setMockInitialValues({});
  FlutterSecureStorage.setMockInitialValues({});
  final store = JourneyStore(LocalJourneyRepository());
  await store.load();
  await store.addProfile(_kid);
  JourneyStore.instance = store;
}

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      scrollBehavior: const AppScrollBehavior(),
      builder: (context, child) => Directionality(textDirection: AppLocale.instance.direction, child: child!),
      home: home,
    );

Future<void> _settle(WidgetTester t) async {
  await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
  await t.pump(const Duration(milliseconds: 300));
}

Future<FakeTeacherRepository> _teacherRepo() async {
  final repo = FakeTeacherRepository();
  await repo.register(email: 't@x.com', password: '123456', name: 'T', role: UserRole.teacher);
  final uid = repo.currentUser!.uid;
  await repo.saveTeacherProfile(TeacherProfile(uid: uid, name: 'مدرسة', bio: 'نبذة', subjects: const ['arabic'], languages: const ['العربية'], priceNote: '')); repo.approveForTest(repo.currentUser!.uid); // the owner approves in the console
  for (var i = 0; i < 3; i++) {
    await repo.savePortfolioItem(PortfolioItem(id: '', teacherUid: '', type: 'worksheet', title: 'عمل $i', description: 'وصف', status: portfolioPublished));
  }
  return repo;
}

void main() {
  for (final lang in ['ar', 'en']) {
    for (final e in _widths.entries) {
      final label = '${e.key} (${e.value.toInt()} px) $lang';
      group(label, () {
        setUp(() async {
          await _setup();
          await AppLocale.instance.set(lang);
          addTearDown(() => AppLocale.instance.set('ar'));
        });

        Future<void> show(WidgetTester t, Widget w, {double height = 900}) async {
          t.view.physicalSize = Size(e.value, height);
          t.view.devicePixelRatio = 1;
          addTearDown(t.view.reset);
          await t.pumpWidget(_app(w));
          await _settle(t);
        }

        testWidgets('the child shell has no bar: the home picture leads everywhere and fits the width', (t) async {
          await show(t, const ChildShell(child: _kid));
          expect(t.takeException(), isNull);
          // owner request 2026-11-12: no bottom bar or side rail
          expect(find.byIcon(Icons.apps_rounded), findsNothing);
          expect(find.byKey(const ValueKey('picture_home')).evaluate(), isNotEmpty);
          for (final k in ['island_games', 'island_create', 'home_avatar']) {
            expect(find.byKey(ValueKey(k)), findsOneWidget, reason: k);
            final r = t.getRect(find.byKey(ValueKey(k)));
            expect(r.left >= -1 && r.right <= e.value + 1, isTrue, reason: '$k inside the window');
          }
        });

        testWidgets('parent settings, day settings, library and printables', (t) async {
          for (final w in <Widget>[const SettingsScreen(), const DaySettingsScreen(), const MyLibraryScreen(child: _kid), const PrintablesScreen(previewBuilder: _noPreview)]) {
            await show(t, w, height: 1100);
            expect(t.takeException(), isNull, reason: '${w.runtimeType}');
          }
        });

        testWidgets('every learning game fits', (t) async {
          for (final g in kEducationalGames) {
            if (kLearnWebGames.containsKey(g.id)) continue; // rebuilt as a web game (test/learn_web_games_test.dart)
            await show(t, g.build('k1', 5, lang), height: 800);
            expect(t.takeException(), isNull, reason: g.id);
          }
        });

        testWidgets('a game stays centred and does not stretch across a wide window', (t) async {
          await show(t, OddOneOutGame(childId: 'k1', age: 5), height: 800);
          final box = t.getRect(find.byKey(const ValueKey('opt0')));
          expect(box.width <= 320, true);
          final all = [for (var i = 0; i < 4; i++) t.getRect(find.byKey(ValueKey('opt$i')))];
          final left = all.map((r) => r.left).reduce((a, b) => a < b ? a : b);
          final right = all.map((r) => r.right).reduce((a, b) => a > b ? a : b);
          // Centred in the space left of the side instruction card (300 dp) when the window is wide and landscape.
          final mid = (left + right) / 2;
          final wide = e.value >= 900;
          final ok = wide
              ? ((mid - (e.value / 2 + 150)).abs() < 40 || (mid - (e.value / 2 - 150)).abs() < 40)
              : (mid - e.value / 2).abs() < 40;
          expect(ok, true, reason: 'centre $mid in a ${e.value} px window');
        });

        testWidgets('teacher page and portfolio: grid on wide windows, one column on a phone', (t) async {
          final repo = await _teacherRepo();
          final teacher = (await repo.myTeacherProfile())!;
          await show(t, TeacherDetailScreen(repo: repo, teacher: teacher, preview: true), height: 1600);
          expect(t.takeException(), isNull);
          await t.scrollUntilVisible(find.text('عمل 0'), 300, scrollable: find.byType(Scrollable).first);
          final first = t.getTopLeft(find.text('عمل 0')), second = t.getTopLeft(find.text('عمل 1'));
          if (e.value >= 768) {
            expect((first.dy - second.dy).abs() < 4, true, reason: 'two columns: same row');
          } else {
            expect(second.dy > first.dy, true, reason: 'one column');
          }
          await show(t, TeacherPortfolioScreen(repo: repo), height: 900);
          expect(t.takeException(), isNull);
        });
      });
    }
  }

  test('window classes come from the width only', () {
    expect(windowClassOf(359), WindowClass.compact);
    expect(windowClassOf(599), WindowClass.compact);
    expect(windowClassOf(600), WindowClass.medium);
    expect(windowClassOf(1023), WindowClass.medium);
    expect(windowClassOf(1024), WindowClass.expanded);
    expect(columnsFor(300), 1);
    expect(columnsFor(700, minTileWidth: 300), 2);
    expect(columnsFor(5000, minTileWidth: 300, maxColumns: 3), 3);
  });
}

Widget _noPreview(BuildContext c, dynamic spec) => const SizedBox();
