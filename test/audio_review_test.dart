import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/media/audio_admin_screens.dart';
import 'package:kids_app/media/audio_manifest.dart';
import 'package:kids_app/media/audio_review.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_audio.dart';

/// A bundle that serves only the audio manifest, with one generated file listed.
class _Bundle extends CachingAssetBundle {
  final String manifest;
  _Bundle(this.manifest);
  @override
  Future<ByteData> load(String key) async => throw FlutterError('no $key');
  @override
  Future<String> loadString(String key, {bool cache = true}) async {
    if (key == 'assets/audio/manifest.json') return manifest;
    throw FlutterError('no $key');
  }
}

String _manifestJson({String? license = 'google-cloud-tts output, terms confirmed by the owner 2026-11-01', String id = 'ar.letter.0628.name', String source = 'generated'}) =>
    jsonEncode({
      'assets': {
        id: {
          'file': 'assets/audio/ar/letters/$id.mp3',
          'source': source,
          'provider': 'google-cloud-tts',
          'voice': 'ar-XA-Wavenet-B',
          'license': ?license,
        },
      },
    });

Future<AudioManifest> _load(String json) async {
  AppAudio.manifestBundle = _Bundle(json);
  await AppAudio.reloadManifest();
  return AppAudio.manifest;
}

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    AppAudio.speech = FakeSpeech();
    AppAudio.newPlayer = () => FakePlayer();
    AppAudio.service.resetPlayer();
  });
  tearDown(() {
    AppAudio.manifestBundle = null;
  });

  group('the approval states', () {
    test('today every item is missing and none is approved', () async {
      AppAudio.manifestBundle = null;
      final m = AudioManifest.builtIn();
      expect(m.approvedCount, 0);
      expect(m.byStatus[AssetStatus.missing], m.total);
    });

    test('a generated file moves through the review states and is approved only with BOTH named decisions', () async {
      var m = await _load(_manifestJson());
      const id = 'ar.letter.0628.name';
      expect(m.byId(id)!.status, AssetStatus.generated);
      await AudioReviewStore.decide(id, kind: 'audio', verdict: Verdict.approved, reviewer: 'Audio reviewer');
      expect(AppAudio.manifest.byId(id)!.status, AssetStatus.awaitingLanguageReview);
      expect(AppAudio.manifest.byId(id)!.approved, isFalse);
      await AudioReviewStore.decide(id, kind: 'language', verdict: Verdict.approved, reviewer: 'Arabic teacher');
      expect(AppAudio.manifest.byId(id)!.status, AssetStatus.approved);
      expect(AppAudio.manifest.approvedCount, 1);
      // Rejecting either decision removes the approval.
      await AudioReviewStore.decide(id, kind: 'language', verdict: Verdict.rejected, reviewer: 'Arabic teacher');
      expect(AppAudio.manifest.byId(id)!.status, AssetStatus.rejected);
      await AudioReviewStore.decide(id, kind: 'language', verdict: Verdict.pending, reviewer: '');
      expect(AppAudio.manifest.byId(id)!.status, AssetStatus.awaitingLanguageReview);
      m = AppAudio.manifest;
      expect(m.validate(), isEmpty);
    });

    test('language approval first gives "awaiting audio review"', () async {
      await _load(_manifestJson());
      await AudioReviewStore.decide('ar.letter.0628.name', kind: 'language', verdict: Verdict.approved, reviewer: 'Arabic teacher');
      expect(AppAudio.manifest.byId('ar.letter.0628.name')!.status, AssetStatus.awaitingAudioReview);
    });

    test('an unconfirmed license blocks approval, however good the reviews are', () async {
      await _load(_manifestJson(license: 'unconfirmed: provider terms still to be checked by the owner'));
      const id = 'ar.letter.0628.name';
      await AudioReviewStore.decide(id, kind: 'audio', verdict: Verdict.approved, reviewer: 'A');
      await AudioReviewStore.decide(id, kind: 'language', verdict: Verdict.approved, reviewer: 'B');
      expect(AppAudio.manifest.byId(id)!.approved, isFalse);
    });

    test('a file without a license is flagged by validate()', () async {
      final m = await _load(_manifestJson(license: null));
      expect(m.validate().any((p) => p.contains('without license')), isTrue);
    });

    test('a synthetic voice can never be approved as an isolated sound', () async {
      await _load(_manifestJson(id: 'ar.letter.0628.sound'));
      const id = 'ar.letter.0628.sound';
      await AudioReviewStore.decide(id, kind: 'audio', verdict: Verdict.approved, reviewer: 'A');
      await AudioReviewStore.decide(id, kind: 'language', verdict: Verdict.approved, reviewer: 'B');
      final a = AppAudio.manifest.byId(id)!;
      expect(a.approved, isFalse);
      expect(a.status, AssetStatus.rejected);
      // ...but a HUMAN recording of the same sound can.
      await _load(_manifestJson(id: id, source: 'recorded', license: 'original recording, owned by the app'));
      expect(AppAudio.manifest.byId(id)!.approved, isTrue);
    });

    test('an approved item flagged for re-check is not approved', () async {
      final j = jsonDecode(_manifestJson()) as Map<String, dynamic>;
      (j['assets'] as Map)['ar.letter.0628.name']['recheck'] = true;
      await _load(jsonEncode(j));
      const id = 'ar.letter.0628.name';
      await AudioReviewStore.decide(id, kind: 'audio', verdict: Verdict.approved, reviewer: 'A');
      await AudioReviewStore.decide(id, kind: 'language', verdict: Verdict.approved, reviewer: 'B');
      expect(AppAudio.manifest.byId(id)!.status, AssetStatus.needsRecheck);
    });

    test('decisions can be exported to merge into manifest.json', () async {
      await _load(_manifestJson());
      await AudioReviewStore.decide('ar.letter.0628.name', kind: 'audio', verdict: Verdict.approved, reviewer: 'Audio reviewer');
      final out = jsonDecode(await AudioReviewStore.exportJson()) as Map<String, dynamic>;
      expect(out['assets']['ar.letter.0628.name']['audioReview'], 'approved');
      expect(out['assets']['ar.letter.0628.name']['audioReviewer'], 'Audio reviewer');
    });
  });

  Widget app(Widget w) => MaterialApp(
        key: UniqueKey(),
        builder: (c, child) => Directionality(textDirection: AppLocale.instance.direction, child: child!),
        home: w,
      );

  group('the review screen', () {
    testWidgets('filters by status and shows the truthful counts', (tester) async {
      tester.view.physicalSize = const Size(900, 2000);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      AppAudio.manifestBundle = _Bundle(_manifestJson());
      await tester.runAsync(AppAudio.reloadManifest);
      await tester.pumpWidget(app(const AudioReviewScreen()));
      await tester.pump();
      expect(find.textContaining('معتمد: 0 من'), findsOneWidget);
      expect(find.textContaining('Generated (1)'), findsNothing); // Arabic interface
      expect(find.textContaining('مولَّد (1)'), findsOneWidget);
      await tester.tap(find.textContaining('مولَّد (1)'));
      await tester.pump();
      expect(find.text('باء'), findsOneWidget);
      expect(find.text('ألف'), findsNothing);
    });

    testWidgets('a reviewer name is required, then both decisions approve the item', (tester) async {
      tester.view.physicalSize = const Size(900, 2400);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      AppAudio.manifestBundle = _Bundle(_manifestJson());
      await tester.runAsync(AppAudio.reloadManifest);
      await tester.pumpWidget(app(const AudioItemReviewScreen(assetId: 'ar.letter.0628.name')));
      await tester.pump();
      expect(find.text('مولَّد'), findsOneWidget);
      await tester.tap(find.text('قبول').first);
      await tester.pump();
      expect(find.text('اكتب اسم المراجع أولاً'), findsOneWidget);
      await tester.enterText(find.byType(TextField), 'مراجع الصوت');
      await tester.tap(find.text('قبول').first);
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
      await tester.pump();
      expect(find.text('ينتظر مراجعة اللغة'), findsOneWidget);
      await tester.tap(find.text('قبول').last);
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
      await tester.pump();
      expect(find.text('معتمد'), findsOneWidget);
    });

    testWidgets('an item without a file cannot be reviewed and says how to get one', (tester) async {
      tester.view.physicalSize = const Size(900, 2400);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      AppAudio.manifestBundle = _Bundle('{}');
      await tester.runAsync(AppAudio.reloadManifest);
      await tester.pumpWidget(app(const AudioItemReviewScreen(assetId: 'ar.letter.0628.sound')));
      await tester.pump();
      expect(find.text('بلا ملف'), findsOneWidget);
      expect(tester.widget<FilledButton>(find.widgetWithText(FilledButton, 'قبول').first).onPressed, isNull);
      expect(find.textContaining('لا يوجد ملف'), findsOneWidget);
    });

    testWidgets('the file of an unapproved item can be previewed through the player', (tester) async {
      tester.view.physicalSize = const Size(900, 2400);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      final player = FakePlayer();
      AppAudio.newPlayer = () => player;
      AppAudio.service.resetPlayer();
      AppAudio.manifestBundle = _Bundle(_manifestJson());
      await tester.runAsync(AppAudio.reloadManifest);
      await tester.pumpWidget(app(const AudioItemReviewScreen(assetId: 'ar.letter.0628.name')));
      await tester.pump();
      await tester.tap(find.text('تشغيل الملف'));
      await tester.pump();
      await tester.pump();
      expect((player.loaded as AssetAudio).path, 'assets/audio/ar/letters/ar.letter.0628.name.mp3');
      expect(player.playing, isTrue);
    });
  });

  group('the voice comparison screen', () {
    testWidgets('no samples: it says so honestly, and still offers the real device voice as a temporary baseline', (tester) async {
      final speech = FakeSpeech();
      AppAudio.speech = speech;
      await tester.pumpWidget(app(VoiceComparisonScreen(loader: () async => [])));
      await tester.pump();
      expect(find.textContaining('لا توجد عيّنات مولَّدة بعد'), findsOneWidget);
      expect(find.text('صوت الجهاز (مؤقت)'), findsOneWidget);
      await tester.tap(find.byTooltip('تشغيل'));
      await tester.pump();
      await tester.pump();
      expect(speech.spoken, ['قَمَر']);
    });

    testWidgets('candidate samples play real files, show their voice id and locale, and keep verdicts and notes', (tester) async {
      tester.view.physicalSize = const Size(900, 2400);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      final player = FakePlayer();
      AppAudio.newPlayer = () => player;
      AppAudio.service.resetPlayer();
      final samples = [
        const VoiceSample('t1', 'words', 'ar', 'قَمَر', 'google-cloud-tts', 'ar-XA-Wavenet-B', 'ar-XA', 'assets/audio/comparison/a/t1.mp3', true),
        const VoiceSample('t1', 'words', 'ar', 'قَمَر', 'google-cloud-tts', 'ar-XA-Chirp3-HD-Achernar', 'ar-XA', 'assets/audio/comparison/b/t1.mp3', true),
        const VoiceSample('e1', 'words', 'en', 'moon', 'google-cloud-tts', 'en-US-Neural2-C', 'en-US', 'assets/audio/comparison/c/e1.mp3', true),
      ];
      await tester.pumpWidget(app(VoiceComparisonScreen(loader: () async => samples)));
      await tester.pump();
      expect(find.text('ar-XA-Wavenet-B'), findsOneWidget);
      expect(find.text('ar-XA-Chirp3-HD-Achernar'), findsOneWidget);
      expect(find.text('en-US-Neural2-C'), findsNothing); // the English sample is on the English tab
      expect(find.textContaining('· عيّنة اختبار مؤقتة'), findsNWidgets(2));
      await tester.tap(find.byTooltip('تشغيل').at(1)); // the first candidate (0 is the device voice)
      await tester.pump();
      await tester.pump();
      expect((player.loaded as AssetAudio).path, 'assets/audio/comparison/a/t1.mp3');
      expect(player.playing, isTrue);
      await tester.tap(find.text('مقبولة').at(1));
      await tester.pump();
      await tester.enterText(find.byType(TextFormField).at(1), 'الباء واضحة');
      await tester.pump();
      final prefs = await tester.runAsync(SharedPreferences.getInstance);
      final saved = jsonDecode(prefs!.getString('voice_compare')!) as Map<String, dynamic>;
      expect(saved['google-cloud-tts|ar-XA-Wavenet-B|t1']['verdict'], 'ok');
      expect(saved['google-cloud-tts|ar-XA-Wavenet-B|t1']['note'], 'الباء واضحة');
      await tester.tap(find.text('English'));
      await tester.pump();
      expect(find.text('en-US-Neural2-C'), findsOneWidget);
    });
  });

  test('the bundled comparison index is valid and has no fake samples yet', () async {
    final raw = await rootBundle.loadString('assets/audio/comparison/index.json');
    final j = jsonDecode(raw) as Map<String, dynamic>;
    expect(j['samples'], isA<List>());
    for (final s in (j['samples'] as List).cast<Map<String, dynamic>>()) {
      final data = await rootBundle.load(s['file'] as String);
      expect(data.lengthInBytes, greaterThan(1000), reason: s['file'] as String); // a sample must be a real file
      expect(s['temporary'], isTrue);
    }
    expect(Uint8List(0), isEmpty);
  });
}
