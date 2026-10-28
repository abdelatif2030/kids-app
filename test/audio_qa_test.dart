import 'dart:convert';
import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/media/audio_manifest.dart';

String _csv(String v) => '"${v.replaceAll('"', '""')}"';

void main() {
  test('the evaluation set covers every required category and nothing in it is approved yet', () {
    final j = jsonDecode(File('assets/audio/eval_set.json').readAsStringSync()) as Map<String, dynamic>;
    final samples = (j['samples'] as List).cast<Map<String, dynamic>>();
    final cats = samples.map((s) => s['category']).toSet();
    for (final c in [
      'arabic_letter_name', 'arabic_letter_sound', 'arabic_short_vowels', 'difficult_consonant_word', 'similar_letters',
      'shadda', 'sukoon', 'tanween', 'long_vowels', 'arabic_instruction', 'arabic_number', 'english_letter_name',
      'english_phonics', 'english_vocabulary', 'story', 'long_sentence_punctuation', 'mixed_label',
    ]) {
      expect(cats, contains(c));
    }
    expect(samples.map((s) => s['id']).toSet().length, samples.length);
    for (final s in samples) {
      expect((s['text'] as String).trim(), isNotEmpty);
      expect(s['convention'], isNotEmpty);
      expect(s['review'], 'pending_native_review'); // human sign-off is required, code cannot grant it
    }
  });

  test('every content item of the evaluation set that names a letter, word or number exists in the manifest', () {
    final m = AudioManifest.builtIn();
    final j = jsonDecode(File('assets/audio/eval_set.json').readAsStringSync()) as Map<String, dynamic>;
    for (final s in (j['samples'] as List).cast<Map<String, dynamic>>()) {
      final ref = s['assetRef'] as String?;
      if (ref == null) continue;
      final lang = s['lang'] as String;
      final found = m.all.any((a) => a.lang == lang && a.ref == ref);
      expect(found, isTrue, reason: '${s['id']} ${s['text']} ($ref)');
    }
  });

  test('writes the recording sheet for the speaker (docs/AUDIO_RECORDING_SHEET.csv)', () {
    final m = AudioManifest.builtIn();
    final rows = <String>['id,language,kind,text,file_to_create,pronunciation_note,status'];
    for (final a in m.all) {
      rows.add([a.id, a.lang, a.kind.name, a.text, a.suggestedFile, a.note, a.approved ? 'approved' : 'needs recording'].map(_csv).join(','));
    }
    File('docs/AUDIO_RECORDING_SHEET.csv').writeAsStringSync('${rows.join('\n')}\n');
    expect(rows.length, m.total + 1);
    expect(File('docs/AUDIO_RECORDING_SHEET.csv').lengthSync(), greaterThan(10000));
  });
}
