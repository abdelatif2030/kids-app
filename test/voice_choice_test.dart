import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/ui/voice_picker.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/media/voice_choice.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_audio.dart';

void main() {
  const offlineStd = VoiceInfo('ar-sa-x-std-local', 'ar-SA');
  const offlineGood = VoiceInfo('ar-xa-wavenet-local', 'ar-XA');
  const onlineNeural = VoiceInfo('ar-neural-net', 'ar-XA', needsNetwork: true);
  const compact = VoiceInfo('ar-compact', 'ar-EG', quality: 'compact');
  const english = VoiceInfo('en-us-x-sfg-local', 'en-US');

  group('ranking', () {
    test('only voices of the language are listed, best first: an offline high-quality voice beats an online one', () {
      final r = rankVoices([english, compact, onlineNeural, offlineStd, offlineGood], 'ar');
      expect(r.first, offlineGood);
      expect(r.contains(english), isFalse);
      expect(r.indexOf(offlineStd) < r.indexOf(compact), isTrue);
      expect(r.last == onlineNeural || r.indexOf(onlineNeural) > r.indexOf(offlineStd), isTrue);
    });
    test('the engine\'s own quality label counts', () {
      final r = rankVoices([const VoiceInfo('a', 'en-US'), const VoiceInfo('b', 'en-US', quality: 'premium')], 'en');
      expect(r.first.name, 'b');
    });
    test('ties keep the engine order (stable)', () {
      final r = rankVoices([const VoiceInfo('x', 'en-US'), const VoiceInfo('y', 'en-US')], 'en');
      expect(r.map((v) => v.name), ['x', 'y']);
    });
    test('no voice for a language gives null, a wrong language scores very low', () {
      expect(chooseVoice([english], 'ar'), isNull);
      expect(scoreVoice(english, 'ar'), lessThan(-100));
    });
    test('a parent\'s choice wins while the phone still has it, otherwise the best one', () {
      expect(chooseVoice([offlineStd, offlineGood], 'ar', preferredName: 'ar-sa-x-std-local'), offlineStd);
      expect(chooseVoice([offlineGood], 'ar', preferredName: 'removed-voice'), offlineGood);
    });
    test('engine maps are read safely', () {
      final v = VoiceInfo.fromMap({'name': 'n', 'locale': 'ar_SA', 'network_required': '1'});
      expect(v.locale, 'ar-SA');
      expect(v.needsNetwork, isTrue);
      expect(VoiceInfo.fromMap({}).name, '');
    });
    test('child speech is a little slower than adult speed', () {
      expect(kChildSpeechRate, lessThan(0.5));
      expect(kChildSpeechPitch, inInclusiveRange(1.0, 1.15));
    });
  });

  group('picker', () {
    late FakeSpeech speech;
    setUp(() {
      SharedPreferences.setMockInitialValues({});
      AppLocale.instance.set('en');
      speech = FakeSpeech()..offered['ar'] = [offlineGood, offlineStd];
      AppAudio.speech = speech;
    });

    testWidgets('lists the phone\'s voices, previews one, and saves the choice; automatic goes back', (t) async {
      t.view.physicalSize = const Size(600, 1200);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: const Scaffold(body: VoicePickerTile(lang: 'ar'))));
      await t.tap(find.byKey(const ValueKey('voice_picker_ar')));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('voice_ar-sa-x-std-local')), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('voice_ar-sa-x-std-local')));
      await t.pumpAndSettle();
      expect(AudioPrefs.instance.voiceNameAr, 'ar-sa-x-std-local');
      expect(speech.preferred['ar'], 'ar-sa-x-std-local');
      await t.tap(find.byKey(const ValueKey('voice_auto')));
      await t.pumpAndSettle();
      expect(AudioPrefs.instance.voiceNameAr, isNull);
    });

    testWidgets('a phone with no voice for the language says how to install one', (t) async {
      speech.offered.clear();
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: const Scaffold(body: VoicePickerTile(lang: 'ar'))));
      await t.tap(find.byKey(const ValueKey('voice_picker_ar')));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('no_voices')), findsOneWidget);
    });
  });
}
