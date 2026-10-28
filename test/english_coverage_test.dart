import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/color_game.dart';
import 'package:kids_app/dashboard_screen.dart';
import 'package:kids_app/drawing_screen.dart';
import 'package:kids_app/games_screen.dart';
import 'package:kids_app/journey/lands.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/activity_screen.dart';
import 'package:kids_app/journey/ui/admin_screen.dart';
import 'package:kids_app/journey/ui/audio_settings_screen.dart';
import 'package:kids_app/journey/ui/child_shell.dart';
import 'package:kids_app/journey/ui/home_tasks_screen.dart';
import 'package:kids_app/journey/ui/land_map_screen.dart';
import 'package:kids_app/journey/ui/onboarding.dart';
import 'package:kids_app/journey/ui/privacy_screen.dart';
import 'package:kids_app/journey/ui/profile_forms.dart';
import 'package:kids_app/journey/ui/report_screen.dart';
import 'package:kids_app/journey/ui/start_screen.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/letters_game.dart';
import 'package:kids_app/library/activity_screens.dart';
import 'package:kids_app/library/vocab_screens.dart';
import 'package:kids_app/literacy/letters_data.dart';
import 'package:kids_app/literacy/screens.dart';
import 'package:kids_app/math_game.dart';
import 'package:kids_app/memory_game.dart';
import 'package:kids_app/notes_screen.dart';
import 'package:kids_app/parent_screens.dart';
import 'package:kids_app/plan_screen.dart';
import 'package:kids_app/rest_screen.dart';
import 'package:kids_app/session_manager.dart';
import 'package:kids_app/stories/story_data.dart';
import 'package:kids_app/stories/story_screens.dart';
import 'package:kids_app/studio/character_creator.dart';
import 'package:kids_app/studio/scene_builder.dart';
import 'package:kids_app/studio/studio_screens.dart';
import 'package:kids_app/subjects_screen.dart';
import 'package:kids_app/summary_screen.dart';
import 'package:kids_app/teachers_availability.dart';
import 'package:kids_app/teachers_bookings.dart';
import 'package:kids_app/teachers_market.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_parent.dart';
import 'package:kids_app/teachers_requests.dart';
import 'package:kids_app/teachers_screens.dart';
import 'package:kids_app/where_animal_game.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_teacher_repository.dart';

/// The English interface must not leave Arabic interface text behind. Arabic that
/// is learning content (letters, Arabic words, story texts) is allowed on the
/// screens listed in [_contentScreens].
const _kid = ChildProfile(id: 'k1', nickname: 'Sam', age: 5);
final _arabic = RegExp(r'[؀-ۿ]');

const _contentScreens = {
  'letters home', 'letter lesson', 'vocab library', 'stories home', 'story player', 'letters game',
  'quiz arabic letters', 'activity library', 'subjects',
};

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) => Directionality(textDirection: AppLocale.instance.direction, child: child!),
      home: home,
    );

Future<void> _setup() async {
  final day = dayKeyOf(DateTime.now());
  SharedPreferences.setMockInitialValues({'used_$day': 600});
  FlutterSecureStorage.setMockInitialValues({});
  final store = JourneyStore(LocalJourneyRepository());
  await store.load();
  await store.addProfile(_kid);
  for (final id in ['letters_1', 'letters_2', 'numbers_1', 'colors_1', 'brain_1']) {
    await store.recordAttempt(Attempt(childId: 'k1', activityId: id, day: day, total: 5, firstTry: 4, seconds: 30, stars: 2));
  }
  JourneyStore.instance = store;
}

Future<void> _settle(WidgetTester tester) async {
  await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 250)));
  await tester.pump(const Duration(milliseconds: 400));
}

/// All the visible strings of the current screen that contain Arabic.
List<String> arabicOnScreen(WidgetTester tester) {
  final out = <String>{};
  void add(String? s) {
    if (s != null && _arabic.hasMatch(s)) out.add(s.replaceAll('\n', ' ⏎ '));
  }

  for (final w in tester.widgetList<Text>(find.byType(Text, skipOffstage: false))) {
    add(w.data ?? w.textSpan?.toPlainText());
  }
  for (final w in tester.widgetList<Tooltip>(find.byType(Tooltip, skipOffstage: false))) {
    add(w.message);
  }
  for (final w in tester.widgetList<Semantics>(find.byType(Semantics, skipOffstage: false))) {
    add(w.properties.label);
  }
  for (final w in tester.widgetList<TextField>(find.byType(TextField, skipOffstage: false))) {
    add(w.decoration?.labelText);
    add(w.decoration?.helperText);
    add(w.decoration?.hintText);
  }
  return out.toList()..sort();
}

class _Teachers {
  final repo = FakeTeacherRepository();
  late final String teacherUid;
  late final TeacherProfile profile;

  Future<void> setUp() async {
    await repo.register(email: 't@e.com', password: '123456', name: 'Teacher Sara', role: UserRole.teacher);
    teacherUid = repo.currentUser!.uid;
    profile = TeacherProfile(
      uid: teacherUid,
      name: 'Teacher Sara',
      bio: 'A teacher of reading foundations. ' * 4,
      subjects: const ['arabic', 'math'],
      languages: const ['العربية'],
      priceNote: '',
      priceEgp: 200,
      headline: 'Reading foundations through games',
      cancellationPolicy: 'Free cancellation 24h before',
      lessonMinutes: 45,
      experienceYears: 5,
      ageMin: 4,
      ageMax: 9,
      formats: const [formatOnline],
    );
    await repo.saveTeacherProfile(profile);
    await repo.addSlots([
      Slot(teacherUid: teacherUid, startMs: DateTime.now().add(const Duration(days: 2)).millisecondsSinceEpoch, minutes: 45),
    ]);
    await repo.register(email: 'p@e.com', password: '123456', name: 'Parent Ali', role: UserRole.parent);
  }
}

void main() {
  setUp(() async {
    await AppLocale.instance.set('en');
  });
  tearDown(() async => AppLocale.instance.set('ar'));

  final screens = <String, Widget Function()>{
    'start (welcome)': () => const StartScreen(),
    'onboarding': () => const OnboardingFlow(askForPin: false),
    'shell': () => const ChildShell(child: _kid),
    'land map': () => LandMapScreen(land: landById('letters'), child: _kid),
    'quiz': () => const ActivityScreen(activity: Activity('numbers', 2, ActivityKind.quiz), child: _kid),
    'quiz colors': () => const ActivityScreen(activity: Activity('colors', 2, ActivityKind.quiz), child: _kid),
    'quiz feelings': () => const ActivityScreen(activity: Activity('feelings', 2, ActivityKind.quiz), child: _kid),
    'memory': () => const ActivityScreen(activity: Activity('brain', 5, ActivityKind.memory), child: _kid),
    'sequence': () => const ActivityScreen(activity: Activity('brain', 4, ActivityKind.sequence), child: _kid),
    'dashboard': () => const DashboardScreen(),
    'children': () => const ChildrenScreen(),
    'child edit': () => const ChildEditScreen(child: _kid),
    'admin': () => const AdminScreen(),
    'privacy': () => const PrivacyScreen(),
    'letters home': () => const LettersHomeScreen(child: _kid),
    'letter lesson': () => LetterLessonScreen(child: _kid, letter: letterOf('ب')!),
    'vocab library': () => const VocabLibraryScreen(child: _kid),
    'stories home': () => const StoriesHomeScreen(child: _kid),
    'story player': () => StoryPlayerScreen(story: storyById('moon_star')!, child: _kid),
    'studio': () => const StudioScreen(child: _kid),
    'scene builder': () => const SceneBuilderScreen(child: _kid),
    'character creator': () => const CharacterCreatorScreen(child: _kid),
    'gallery (parent)': () => const ParentGalleryScreen(),
    'activity library': () => const ActivityLibraryScreen(child: _kid),
    'audio settings': () => const AudioSettingsScreen(),
    'data export': () => const DataExportScreen(),
    'report a problem': () => const ReportProblemScreen(),
    'home tasks (parent)': () => const ParentHomeTasksScreen(),
    'explore with parents': () => const ExploreScreen(child: _kid),
    'parent settings': () => const SettingsScreen(),
    'pin setup': () => const PinSetupScreen(),
    'pin entry': () => const PinEntryScreen(),
    'weekly plan': () => const PlanScreen(),
    'notes': () => const NotesScreen(),
    'watch summary': () => const WatchSummaryScreen(),
    'subjects': () => const SubjectsScreen(age: 5),
    'games': () => const GamesScreen(age: 5),
    'games 2': () => const GamesScreen(age: 2),
    'games 8': () => const GamesScreen(age: 8),
    'color game': () => const ColorGame(),
    'memory game': () => const MemoryGame(),
    'math game': () => const MathGame(age: 6),
    'letters game': () => const LettersGame(),
    'animal game': () => const WhereAnimalGame(),
    'balloons': () => const BalloonGame(),
    'drawing': () => const DrawingScreen(),
    'rest': () => const RestScreen(reason: RestReason.quiet),
    'rest (limit)': () => const RestScreen(reason: RestReason.limit),
    'teachers (not activated)': () => const TeachersEntryScreen(),
  };

  // Screens that need a teachers repository.
  final teacherScreens = <String, Widget Function(_Teachers)>{
    'teachers: sign in': (t) => AuthScreen(repo: FakeTeacherRepository(), onSignedIn: () {}),
    'teachers: directory (parent)': (t) => ParentTeachersScreen(repo: t.repo, onSignOut: () {}),
    'teachers: detail': (t) => TeacherDetailScreen(repo: t.repo, teacher: t.profile),
    'teachers: bookings': (t) => BookingsScreen(repo: t.repo),
    'teachers: my requests': (t) => MyRequestsScreen(repo: t.repo),
    'teachers: request form': (t) => RequestForm(repo: t.repo),
    'teachers: availability': (t) => TeacherAvailabilityScreen(repo: t.repo),
  };

  final failures = <String, List<String>>{};

  for (final e in screens.entries) {
    testWidgets('English: ${e.key}', (tester) async {
      tester.view.physicalSize = const Size(900, 2600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.runAsync(_setup);
      await tester.pumpWidget(_app(e.value()));
      await _settle(tester);
      await tester.pump(const Duration(seconds: 3));
      final left = arabicOnScreen(tester);
      if (_contentScreens.contains(e.key)) {
        // Arabic content mixed into an English label ("Letter باء") is fine; a purely
        // Arabic interface sentence is not.
        left.removeWhere((s) => RegExp(r'[A-Za-z]').hasMatch(s) || s.split(RegExp(r'\s+')).length < 3 || s.split(RegExp(r'\s+')).length >= 12); // 12+ words: a story paragraph
      }
      if (left.isNotEmpty) failures[e.key] = left;
      // ignore: avoid_print
      if (left.isNotEmpty) print('ARABIC LEFT in ${e.key}:\n  ${left.join('\n  ')}');
      expect(left, isEmpty, reason: e.key);
    });
  }

  for (final e in teacherScreens.entries) {
    testWidgets('English: ${e.key}', (tester) async {
      tester.view.physicalSize = const Size(900, 2600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.runAsync(_setup);
      final t = _Teachers();
      await tester.runAsync(t.setUp);
      await tester.pumpWidget(_app(e.value(t)));
      await _settle(tester);
      final left = arabicOnScreen(tester)..removeWhere((s) => s == 'العربية');
      // ignore: avoid_print
      if (left.isNotEmpty) print('ARABIC LEFT in ${e.key}:\n  ${left.join('\n  ')}');
      expect(left, isEmpty, reason: e.key);
    });
  }

  for (final tab in ['Games', 'Create', 'Me']) {
    testWidgets('English: child shell tab $tab', (tester) async {
      tester.view.physicalSize = const Size(900, 2600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.runAsync(_setup);
      await tester.pumpWidget(_app(const ChildShell(child: _kid)));
      await _settle(tester);
      await tester.tap(find.text(tab).last);
      await _settle(tester);
      await tester.pump(const Duration(seconds: 2));
      final left = arabicOnScreen(tester);
      // ignore: avoid_print
      if (left.isNotEmpty) print('ARABIC LEFT in tab $tab:\n  ${left.join('\n  ')}');
      expect(left, isEmpty, reason: tab);
    });
  }
}
