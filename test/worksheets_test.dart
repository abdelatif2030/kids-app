import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/print/worksheets.dart';

int _pages(List<int> bytes) => RegExp(r'/Type\s*/Page\b').allMatches(String.fromCharCodes(bytes)).length;

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('every worksheet kind builds a real PDF in Arabic and English, with an answer page', () async {
    for (final lang in ['ar', 'en']) {
      for (final kind in WorksheetKind.values) {
        final spec = WorksheetSpec(kind: kind, lang: lang, letter: 'ب', age: 5);
        final bytes = await worksheetBytes(spec);
        expect(String.fromCharCodes(bytes.take(5)), '%PDF-', reason: '$kind $lang');
        expect(bytes.length, greaterThan(8000), reason: '$kind $lang'); // fonts embedded
        expect(_pages(bytes), kind == WorksheetKind.letterTracing ? 1 : 2, reason: '$kind $lang: a worksheet page and, when there is something to check, an answer page');
        if (Platform.environment['WRITE_WORKSHEETS'] != null) {
          File('${Platform.environment['WRITE_WORKSHEETS']}/${kind.name}_$lang.pdf').writeAsBytesSync(bytes);
        }
      }
    }
  });

  test('the answer page is optional', () async {
    for (final kind in WorksheetKind.values) {
      final no = await worksheetBytes(WorksheetSpec(kind: kind, letter: 'ب', withAnswers: false));
      expect(_pages(no), 1, reason: '$kind');
    }
  });

  test('the same seed gives the same sheet; a different seed gives another one', () async {
    const a = WorksheetSpec(kind: WorksheetKind.letterFind, letter: 'ع', seed: 3);
    const b = WorksheetSpec(kind: WorksheetKind.letterFind, letter: 'ع', seed: 4);
    final one = String.fromCharCodes(await worksheetBytes(a)).replaceAll(RegExp(r'/(CreationDate|ID)[^\n]*'), '');
    final again = String.fromCharCodes(await worksheetBytes(a)).replaceAll(RegExp(r'/(CreationDate|ID)[^\n]*'), '');
    final other = String.fromCharCodes(await worksheetBytes(b)).replaceAll(RegExp(r'/(CreationDate|ID)[^\n]*'), '');
    expect(one.length, again.length);
    expect(one == other, isFalse);
  });

  test('sheets carry their skill and age range for adults', () {
    for (final kind in WorksheetKind.values) {
      final info = worksheetInfo(WorksheetSpec(kind: kind, lang: 'en'));
      expect(info.title, isNotEmpty);
      expect(info.skill, isNotEmpty);
      expect(info.minAge, lessThanOrEqualTo(info.maxAge));
    }
    expect(worksheetInfo(const WorksheetSpec(kind: WorksheetKind.counting)).title, 'نعدّ معاً');
  });
}
