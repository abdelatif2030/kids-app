import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/offline/capabilities.dart';
import 'package:kids_app/offline/connectivity.dart';
import 'package:kids_app/offline/offline_ui.dart';

ConnectivityMonitor monitor(List<bool> results, {Duration interval = const Duration(milliseconds: 50)}) {
  var i = 0;
  return ConnectivityMonitor(probe: () async => results[i < results.length ? i++ : results.length - 1], interval: interval);
}

Widget app(Widget w) => MaterialApp(home: Scaffold(body: w));

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    AppLocale.instance.set('ar');
  });

  group('capability model', () {
    test('ids are unique and every entry has a note and evidence', () {
      final ids = kCapabilities.map((c) => c.id).toList();
      expect(ids.toSet().length, ids.length);
      for (final c in kCapabilities) {
        expect(c.title(), isNotEmpty);
        expect(c.note(), isNotEmpty);
        expect(c.evidence, isNotEmpty);
      }
    });
    test('the four states are all used honestly: videos and family features need internet, games do not', () {
      expect(capabilityById('games')!.availability, Availability.offline);
      expect(capabilityById('videos')!.availability, Availability.online);
      for (final id in ['chat', 'calls']) {
        expect(capabilityById(id)!.availability, Availability.online);
      }
      expect(capabilityById('web')!.availability, Availability.unverified);
      expect(kCapabilities.any((c) => c.availability == Availability.partial), isTrue);
    });
    test('usableNow: offline blocks only features that need internet', () {
      expect(usableNow(capabilityById('games')!, offline: true), isTrue);
      expect(usableNow(capabilityById('letters')!, offline: true), isTrue);
      expect(usableNow(capabilityById('calls')!, offline: true), isFalse);
      expect(usableNow(capabilityById('calls')!, offline: false), isTrue);
    });
  });

  group('monitor', () {
    test('starts unknown, reports offline then recovers', () async {
      final m = monitor([false, true]);
      expect(m.status, NetStatus.unknown);
      await m.check();
      expect(m.status, NetStatus.offline);
      await m.check();
      expect(m.status, NetStatus.online);
      m.dispose();
    });
    test('a probe that throws counts as offline, never as online', () async {
      final m = ConnectivityMonitor(probe: () async => throw Exception('x'));
      await m.check();
      expect(m.status, NetStatus.offline);
      m.dispose();
    });
    test('while started and offline it re-checks by itself and notices recovery', () async {
      final m = monitor([false, true], interval: const Duration(milliseconds: 20));
      m.start();
      await Future<void>.delayed(const Duration(milliseconds: 150));
      expect(m.status, NetStatus.online);
      m.dispose();
    });
    test('overlapping checks share one probe', () async {
      var calls = 0;
      final m = ConnectivityMonitor(probe: () async {
        calls++;
        await Future<void>.delayed(const Duration(milliseconds: 10));
        return true;
      });
      await Future.wait([m.check(), m.check(), m.check()]);
      expect(calls, 1);
      m.dispose();
    });
  });

  group('banner and guide', () {
    testWidgets('hidden while unknown or online, shown with a live-region label when offline (Arabic)', (t) async {
      final m = monitor([true, false]);
      await t.pumpWidget(app(OfflineBanner(monitor: m)));
      expect(find.byIcon(Icons.cloud_off_rounded), findsNothing);
      await t.runAsync(m.check);
      await t.pump();
      expect(find.byIcon(Icons.cloud_off_rounded), findsNothing); // online
      await t.runAsync(m.check);
      await t.pump();
      expect(find.byIcon(Icons.cloud_off_rounded), findsOneWidget);
      expect(find.textContaining('لا يوجد إنترنت'), findsOneWidget);
      expect(find.text('حاول مرة أخرى'), findsOneWidget);
      m.dispose();
    });
    testWidgets('English text and retry button recovers', (t) async {
      AppLocale.instance.set('en');
      final m = monitor([false, true]);
      await t.pumpWidget(app(OfflineBanner(monitor: m)));
      await t.runAsync(m.check);
      await t.pump();
      expect(find.textContaining('No internet'), findsOneWidget);
      await t.tap(find.text('Try again'));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 20)));
      await t.pump();
      expect(find.byIcon(Icons.cloud_off_rounded), findsNothing);
      m.dispose();
    });
    testWidgets('explainNeedsInternet: try again returns true only when the check says online', (t) async {
      final m = monitor([true]);
      bool? result;
      await t.pumpWidget(app(Builder(
        builder: (c) => TextButton(onPressed: () async => result = await explainNeedsInternet(c, 'calls', monitor: m), child: const Text('go')),
      )));
      await t.tap(find.text('go'));
      await t.pump();
      await t.pump(const Duration(milliseconds: 400));
      expect(find.byIcon(Icons.cloud_off_rounded), findsOneWidget);
      await t.tap(find.byType(FilledButton));
      await t.pump();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 20)));
      await t.pump();
      await t.pump(const Duration(milliseconds: 400));
      expect(result, isTrue);
      m.dispose();
    });
    testWidgets('the guide lists every capability with its state in text, in both languages', (t) async {
      t.view.physicalSize = const Size(800, 3000);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      final m = monitor([false]);
      for (final lang in ['ar', 'en']) {
        AppLocale.instance.set(lang);
        await t.pumpWidget(app(OfflineGuideScreen(monitor: m)));
        for (final c in kCapabilities) {
          expect(find.text(c.title()), findsOneWidget, reason: '$lang ${c.id}');
        }
        expect(find.textContaining(OfflineGuideScreen.label(Availability.online)), findsWidgets);
      }
      m.dispose();
    });
  });
}
