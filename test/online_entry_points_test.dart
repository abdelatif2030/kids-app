import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/family/family_bubble.dart';
import 'package:kids_app/family/memory_family_repository.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/ui/start_screen.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/online_unavailable.dart';
import 'package:kids_app/parent/parent_widgets.dart' show ParentRow;
import 'package:kids_app/parent_screens.dart';
import 'package:kids_app/teachers_screens.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Every way into an online feature, checked while the online release gate is closed: each one must end on the honest
/// "not available" page (never a sign-in form that cannot work), and the code paths must stay inside the known entry points.
Iterable<File> dartFiles(String dir) => Directory(dir).listSync(recursive: true).whereType<File>().where((f) => f.path.endsWith('.dart'));
List<String> users(Pattern p, {Set<String> except = const {}}) => [for (final f in dartFiles('lib')) if (!except.contains(f.path) && f.readAsStringSync().contains(p)) f.path]..sort();

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('en');
  });
  tearDown(() => AppLocale.instance.set('ar'));

  group('static: the doors', () {
    test('only the known entry points open the teacher or family screens', () {
      expect(users('TeachersEntryScreen('), ['lib/journey/ui/start_screen.dart', 'lib/parent_screens.dart', 'lib/teachers_screens.dart']);
      expect(users('openFamily('), ['lib/family/family_entry.dart', 'lib/journey/ui/start_screen.dart', 'lib/parent_screens.dart']);
      expect(users('FamilyEntryScreen('), ['lib/family/family_entry.dart']);
      expect(users('RelativeHomeScreen('), ['lib/family/family_entry.dart', 'lib/family/family_screens.dart']); // family_screens.dart holds its class declaration
      expect(users('FamilyParentScreen('), ['lib/family/family_entry.dart', 'lib/family/family_screens.dart']);
      expect(users('ChildFamilyScreen('), ['lib/family/family_bubble.dart', 'lib/family/family_screens.dart']);
      expect(users('ParentTeachersScreen('), ['lib/teachers_parent.dart', 'lib/teachers_screens.dart']); // + its own declaration
      expect(users('TeacherHomeScreen('), ['lib/teachers_screens.dart', 'lib/teachers_teacher.dart']); // + its own declaration
      expect(users('AuthScreen('), ['lib/family/family_entry.dart', 'lib/teachers_screens.dart']);
      expect(users('startCallScreen('), ['lib/family/call_screens.dart', 'lib/family/family_screens.dart']);
    });

    test('Firebase is initialised in exactly one place, after the gate check, and the in-memory family demo cannot run in a release build', () {
      expect(users('Firebase.initializeApp'), ['lib/firebase_config.dart']);
      expect(users('FirebaseFirestore.instance'), ['lib/family/firebase_family_repository.dart', 'lib/firebase_repository.dart']);
      expect(users('FirebaseAuth.instance'), ['lib/family/firebase_family_repository.dart', 'lib/firebase_repository.dart']);
      expect(users('FirebaseTeacherRepository('), ['lib/firebase_config.dart']);
      expect(users('FirebaseFamilyRepository('), ['lib/firebase_config.dart']);
      expect(File('lib/family/memory_family_repository.dart').readAsStringSync(), contains("!bool.fromEnvironment('dart.vm.product')"));
    });

    test('the family bubble and the "I am family" doors appear only when a family repository exists', () {
      final bubble = File('lib/family/family_bubble.dart').readAsStringSync();
      expect(bubble, contains('familyRepository'));
      final start = File('lib/journey/ui/start_screen.dart').readAsStringSync();
      expect(RegExp(r'if \(familyRepository != null\)').allMatches(start).length, 2);
    });

    test('all network code stays in the known places', () {
      expect(users("package:http/http.dart"), ['lib/assistant/ai_advisor.dart']);
      expect(users('package:cloud_firestore'), ['lib/family/firebase_family_repository.dart', 'lib/firebase_repository.dart']);
      expect(users('package:firebase_auth'), ['lib/family/firebase_family_repository.dart', 'lib/firebase_repository.dart']);
      expect(users('package:flutter_webrtc'), ['lib/family/call_engine.dart']);
    });
  });

  group('behaviour: every door ends on the honest "not available" page', () {
    Future<void> show(WidgetTester t, Widget w, {String lang = 'en', Size size = const Size(900, 1400)}) async {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await AppLocale.instance.set(lang);
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: w));
      await t.pump();
    }

    testWidgets('teachers service and family chat, opened directly, say not available and offer no form', (t) async {
      for (final lang in ['ar', 'en']) {
        await show(t, const TeachersEntryScreen(), lang: lang);
        expect(find.byType(OnlineUnavailableView), findsOneWidget);
        expect(find.byType(TextField), findsNothing);
        await show(t, const SettingsScreen(), lang: lang);
        await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
        await t.pump(const Duration(milliseconds: 300));
        final row = find.ancestor(of: find.byIcon(Icons.school_rounded), matching: find.byType(ParentRow));
        await t.scrollUntilVisible(row.first, 200, scrollable: find.byType(Scrollable).first);
        expect(find.text(lang == 'ar' ? 'ليس جزءاً من هذا الإصدار — يأتي لاحقاً' : 'Not part of this version — planned for later'), findsWidgets); // the tile itself already says so
        t.widget<ParentRow>(row.first).onTap(); // the same call a tap makes (a tap near the screen edge can miss in a test)
        await t.pumpAndSettle();
        expect(find.byType(OnlineUnavailableView), findsOneWidget, reason: 'Parent settings -> teachers ($lang)');
        expect(find.byType(TextField), findsNothing);
      }
    });

    testWidgets('the first screen has no family door while no family repository exists', (t) async {
      expect(familyRepositoryIsNull(), isTrue);
      await show(t, const StartScreen());
      expect(find.byKey(const ValueKey('i_am_family_welcome')), findsNothing);
    });

    testWidgets('the child home has no family bubble without a family repository', (t) async {
      await show(t, const Scaffold(body: FamilyBubbleButton(child: ChildProfile(id: 'c', nickname: 'L', age: 4))));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await t.pump();
      expect(find.byType(InkWell), findsNothing);
    });
  });
}

bool familyRepositoryIsNull() => !kFamilyDemo; // the demo is the only other way to get a repository, and it is off here
