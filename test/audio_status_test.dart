import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/literacy/letters_data.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/media/audio_manifest.dart';
import 'package:kids_app/media/audio_service.dart';
import 'package:kids_app/media/audio_status.dart';
import 'package:kids_app/media/audio_status_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_audio.dart';

Map<String, dynamic> _file({bool approved = false, String source = 'recorded'}) => {
      'file': 'assets/audio/ar/letters/ba_name.mp3',
      'source': source,
      'voice': 'speaker-a',
      'license': 'original, owned by the app',
      if (approved) ...{
        'audioReview': 'approved',
        'languageReview': 'approved',
        'audioReviewer': 'Reviewer 1',
        'languageReviewer': 'Teacher 1',
      },
    };

AudioManifest _m(Map<String, dynamic> over) => AudioManifest.builtIn(overrides: {'assets': over});

final _ba = 'ar.letter.0628.name';
final _baSound = letterAudioId(letterOf('ب')!, 'sound');

void main() {
  test('with no files at all: words and names use the device voice, isolated sounds have none', () {
    final m = AudioManifest.builtIn();
    final all = statusesOf(m, deviceVoiceEnabled: true);
    final s = summarize(all);
    expect(s.total, m.total);
    expect(s.recorded, 0);
    expect(s.syntheticFile, 0);
    expect(s.filesExisting, 0);
    expect(s.approved, 0);
    expect(s.deviceVoice + s.none, s.total);
    expect(s.none, m.all.where((a) => !a.deviceVoiceAllowed).length);
    expect(s.deviceVoice, m.all.where((a) => a.deviceVoiceAllowed).length);
    expect(all.every((e) => !e.needsReview), true); // nothing to review without a file
  });

  test('device voice switched off: everything without an approved file is silent', () {
    final s = summarize(statusesOf(AudioManifest.builtIn(), deviceVoiceEnabled: false));
    expect(s.deviceVoice, 0);
    expect(s.none, s.total);
  });

  test('a file that is not approved needs review and is NOT what the child hears', () {
    final st = audioItemStatus(_m({_ba: _file()}).byId(_ba)!, deviceVoiceEnabled: true);
    expect(st.fileExists, true);
    expect(st.approved, false);
    expect(st.needsReview, true);
    expect(st.heard, HeardKind.deviceVoice); // stands in until approved
    final silent = audioItemStatus(_m({_ba: _file()}).byId(_ba)!, deviceVoiceEnabled: false);
    expect(silent.heard, HeardKind.none);
    expect(silent.playable, false);
  });

  test('only an approved file counts as recorded; a generated file is never called human', () {
    final rec = audioItemStatus(_m({_ba: _file(approved: true)}).byId(_ba)!, deviceVoiceEnabled: true);
    expect(rec.heard, HeardKind.recorded);
    expect(rec.approved, true);
    expect(rec.needsReview, false);
    final gen = audioItemStatus(_m({_ba: _file(approved: true, source: 'generated')}).byId(_ba)!, deviceVoiceEnabled: true);
    expect(gen.heard, HeardKind.syntheticFile);
  });

  test('a synthetic file for an isolated sound can never be approved', () {
    final a = _m({_baSound: {..._file(approved: true, source: 'generated')}}).byId(_baSound)!;
    final st = audioItemStatus(a, deviceVoiceEnabled: true);
    expect(st.approved, false);
    expect(st.heard, HeardKind.none);
    expect(st.needsReview, true);
  });

  test('the status matches what AudioService really plays', () async {
    SharedPreferences.setMockInitialValues({});
    await AudioPrefs.instance.update(voiceOn: true, allowDeviceVoice: true, speechRate: 1.0);
    final speech = FakeSpeech();
    final player = FakePlayer();
    for (final over in [<String, dynamic>{}, {_ba: _file()}, {_ba: _file(approved: true)}]) {
      final m = _m(over);
      final service = AudioService(speech: () => speech, newPlayer: () => player, manifest: () => m);
      speech.spoken.clear();
      player.loaded = null;
      await service.play(_ba);
      final heard = audioItemStatus(m.byId(_ba)!, deviceVoiceEnabled: true).heard;
      switch (heard) {
        case HeardKind.recorded:
          expect(player.loaded, isNotNull);
          expect(service.state.value.heard, AudioSource.recorded);
        case HeardKind.deviceVoice:
          expect(speech.spoken, isNotEmpty);
          expect(service.state.value.heard, AudioSource.deviceVoice);
        default:
          fail('unexpected $heard');
      }
    }
  });

  testWidgets('the parent screen shows real counts and filters', (tester) async {
    SharedPreferences.setMockInitialValues({});
    await AudioPrefs.instance.update(allowDeviceVoice: true);
    final saved = AppAudio.manifest;
    AppAudio.manifest = _m({_ba: _file()});
    addTearDown(() => AppAudio.manifest = saved);
    tester.view.physicalSize = const Size(800, 2400);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: const ParentAudioStatusScreen()));
    await tester.pump();
    final s = summarize(statusesOf(AppAudio.manifest, deviceVoiceEnabled: true));
    expect(s.filesExisting, 1);
    expect(s.needsReview, 1);
    await tester.tap(find.widgetWithText(FilterChip, heardLabel(HeardKind.none)));
    await tester.pump();
    expect(find.byType(Card), findsWidgets);
    await tester.tap(find.widgetWithText(FilterChip, AppLocale.instance.code == 'ar' ? 'يحتاج مراجعة' : 'Needs review'));
    await tester.pump();
    expect(find.text('باء'), findsNothing); // the none filter and needs-review together: ba name has device voice
  });
}
