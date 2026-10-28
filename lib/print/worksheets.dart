import 'dart:math';

import 'package:flutter/services.dart' show rootBundle;
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

import '../library/vocab.dart';
import '../literacy/letters_data.dart';

/// The kinds of printable sheets. Every sheet is original: text and shapes drawn in code
/// (no emoji, no pictures from other works), black-and-white friendly, with an optional answer page.
enum WorksheetKind { letterTracing, letterFind, wordMatch, counting, shapes, pattern, reading }

class WorksheetSpec {
  final WorksheetKind kind;

  /// The language of the instructions ('ar' right-to-left or 'en' left-to-right).
  final String lang;
  final String? letter; // for letter sheets
  final int age; // 3-12: chooses the amount and difficulty
  final int seed; // the same seed gives the same sheet
  final bool withAnswers;
  const WorksheetSpec({
    required this.kind,
    this.lang = 'ar',
    this.letter,
    this.age = 5,
    this.seed = 1,
    this.withAnswers = true,
  });

  bool get rtl => lang == 'ar';
}

/// What the parent or teacher sees before printing: title, skill and ages.
class WorksheetInfo {
  final String title;
  final String skill;
  final int minAge;
  final int maxAge;
  const WorksheetInfo(this.title, this.skill, this.minAge, this.maxAge);
}

String _t(WorksheetSpec s, String ar, String en) => s.lang == 'ar' ? ar : en;

WorksheetInfo worksheetInfo(WorksheetSpec s) => switch (s.kind) {
      WorksheetKind.letterTracing => WorksheetInfo(_t(s, 'تتبّع الحرف', 'Trace the letter'), _t(s, 'الكتابة المبكرة', 'Early writing'), 4, 7),
      WorksheetKind.letterFind => WorksheetInfo(_t(s, 'أين الحرف؟', 'Find the letter'), _t(s, 'تمييز الحروف', 'Letter recognition'), 4, 7),
      WorksheetKind.wordMatch => WorksheetInfo(_t(s, 'وصّل الكلمات', 'Match the words'), _t(s, 'المفردات', 'Vocabulary'), 6, 10),
      WorksheetKind.counting => WorksheetInfo(_t(s, 'نعدّ معاً', 'Let us count'), _t(s, 'العدّ', 'Counting'), 3, 7),
      WorksheetKind.shapes => WorksheetInfo(_t(s, 'الأشكال', 'Shapes'), _t(s, 'الأشكال', 'Shapes'), 3, 7),
      WorksheetKind.pattern => WorksheetInfo(_t(s, 'ما الشكل التالي؟', 'What comes next?'), _t(s, 'الأنماط والمنطق', 'Patterns and logic'), 4, 9),
      WorksheetKind.reading => WorksheetInfo(_t(s, 'نقرأ معاً', 'Let us read'), _t(s, 'القراءة', 'Reading practice'), 5, 9),
    };

const _grey = PdfColor(0.62, 0.62, 0.62);
const _light = PdfColor(0.7, 0.7, 0.7);

/// Builds a print-ready PDF (A4) for [spec]. Fonts are embedded from the bundled Tajawal files, so
/// connected Arabic letters and right-to-left layout are shaped by the PDF engine, not by a screenshot.
Future<pw.Document> buildWorksheet(WorksheetSpec spec) async {
  final regular = pw.Font.ttf(await rootBundle.load('assets/fonts/Tajawal-Regular.ttf'));
  final bold = pw.Font.ttf(await rootBundle.load('assets/fonts/Tajawal-Bold.ttf'));
  final info = worksheetInfo(spec);
  final rnd = Random(spec.seed);
  final dir = spec.rtl ? pw.TextDirection.rtl : pw.TextDirection.ltr;

  final body = switch (spec.kind) {
    WorksheetKind.letterTracing => _tracing(spec),
    WorksheetKind.letterFind => _find(spec, rnd),
    WorksheetKind.wordMatch => _match(spec, rnd),
    WorksheetKind.counting => _counting(spec, rnd),
    WorksheetKind.shapes => _shapes(spec, rnd),
    WorksheetKind.pattern => _patterns(spec, rnd),
    WorksheetKind.reading => _reading(spec, rnd),
  };

  final doc = pw.Document(
    title: info.title,
    author: 'Rehlaty',
    creator: 'Rehlaty worksheets',
    theme: pw.ThemeData.withFont(base: regular, bold: bold, fontFallback: [regular]),
  );

  pw.Widget header(pw.Context c) => pw.Column(crossAxisAlignment: pw.CrossAxisAlignment.start, children: [
        pw.Row(mainAxisAlignment: pw.MainAxisAlignment.spaceBetween, children: [
          pw.Text(info.title, style: pw.TextStyle(font: bold, fontSize: 24)),
          pw.Text(_t(spec, 'رحلتي', 'Rehlaty'), style: pw.TextStyle(font: bold, fontSize: 14, color: _grey)),
        ]),
        pw.SizedBox(height: 4),
        pw.Text(
          '${_t(spec, 'المهارة', 'Skill')}: ${info.skill}  ·  ${_t(spec, 'العمر', 'Ages')} ${info.minAge}–${info.maxAge}',
          style: const pw.TextStyle(fontSize: 11, color: _grey),
        ),
        pw.SizedBox(height: 10),
        pw.Row(children: [
          pw.Text('${_t(spec, 'الاسم', 'Name')}: '),
          pw.Expanded(child: _line()),
          pw.SizedBox(width: 18),
          pw.Text('${_t(spec, 'التاريخ', 'Date')}: '),
          pw.SizedBox(width: 90, child: _line()),
        ]),
        pw.SizedBox(height: 14),
      ]);

  pw.Widget footer(pw.Context c) => pw.Row(mainAxisAlignment: pw.MainAxisAlignment.spaceBetween, children: [
        pw.Text(_t(spec, 'محتوى أصلي من تطبيق رحلتي', 'Original content from the Rehlaty app'), style: const pw.TextStyle(fontSize: 9, color: _grey)),
        pw.Text('${c.pageNumber}/${c.pagesCount}', style: const pw.TextStyle(fontSize: 9, color: _grey)),
      ]);

  doc.addPage(pw.MultiPage(
    pageFormat: PdfPageFormat.a4,
    margin: const pw.EdgeInsets.fromLTRB(40, 36, 40, 34),
    textDirection: dir,
    header: header,
    footer: footer,
    build: (c) => body.questions,
  ));
  if (spec.withAnswers && body.answers.isNotEmpty) {
    doc.addPage(pw.MultiPage(
      pageFormat: PdfPageFormat.a4,
      margin: const pw.EdgeInsets.fromLTRB(40, 36, 40, 34),
      textDirection: dir,
      header: (c) => pw.Column(crossAxisAlignment: pw.CrossAxisAlignment.start, children: [
        pw.Text('${info.title} - ${_t(spec, 'ورقة الإجابات (للكبار)', 'Answer sheet (for adults)')}', style: pw.TextStyle(font: bold, fontSize: 18)),
        pw.SizedBox(height: 12),
      ]),
      footer: footer,
      build: (c) => body.answers,
    ));
  }
  return doc;
}

/// The bytes to print, save or share.
Future<List<int>> worksheetBytes(WorksheetSpec spec) async => (await buildWorksheet(spec)).save();

class _Body {
  final List<pw.Widget> questions;
  final List<pw.Widget> answers;
  _Body(this.questions, [this.answers = const []]);
}

pw.Widget _line() => pw.Container(height: 14, decoration: const pw.BoxDecoration(border: pw.Border(bottom: pw.BorderSide(width: 0.8))));

pw.Widget _instruction(String text) => pw.Padding(padding: const pw.EdgeInsets.only(bottom: 10), child: pw.Text(text, style: const pw.TextStyle(fontSize: 14)));

/// Three guide lines (top, middle dotted, base) for writing practice, with [children] on the base line.
pw.Widget _writingLine(List<pw.Widget> children, {double height = 64}) => pw.Container(
      height: height,
      margin: const pw.EdgeInsets.only(bottom: 10),
      child: pw.Stack(children: [
        pw.Positioned.fill(
          child: pw.CustomPaint(
            painter: (g, size) {
              g.setStrokeColor(_light);
              g.setLineWidth(0.8);
              g.drawLine(0, size.y - 1, size.x, size.y - 1);
              g.strokePath();
              g.setLineDashPattern([4, 4]);
              g.drawLine(0, size.y / 2, size.x, size.y / 2);
              g.strokePath();
              g.setLineDashPattern();
              g.drawLine(0, 1, size.x, 1);
              g.strokePath();
            },
          ),
        ),
        pw.Align(alignment: pw.Alignment.centerRight, child: pw.Row(mainAxisSize: pw.MainAxisSize.min, children: children)),
      ]),
    );

/// The letter's shapes for a PDF: joined with the tatweel (ـ), not with a zero-width joiner, which
/// the bundled font has no glyph for.
({String alone, String start, String middle, String end}) _forms(ArabicLetter l) => (
      alone: l.letter,
      start: l.connectsNext ? '${l.letter}ـ' : l.letter,
      middle: l.connectsNext ? 'ـ${l.letter}ـ' : 'ـ${l.letter}',
      end: 'ـ${l.letter}',
    );

ArabicLetter _letter(WorksheetSpec s) => letterOf(s.letter ?? 'ب') ?? kArabicLetters.first;

// ---------------------------------------------------------------------------
// 1. Letter tracing

_Body _tracing(WorksheetSpec s) {
  final l = _letter(s);
  final word = l.placedWords.isEmpty ? l.words.first : l.placedWords.first.$1;
  pw.Widget faded(String text, double size) =>
      pw.Padding(padding: const pw.EdgeInsets.symmetric(horizontal: 6), child: pw.Text(text, textDirection: pw.TextDirection.rtl, style: pw.TextStyle(fontSize: size, color: _light)));
  final big = pw.Text(l.letter, textDirection: pw.TextDirection.rtl, style: const pw.TextStyle(fontSize: 110));
  return _Body([
    _instruction(_t(s, 'تتبّع الحرف بقلمك فوق الشكل الباهت، ثم اكتبه وحدك.', 'Trace the letter with your pencil over the faint shape, then write it on your own.')),
    pw.Row(mainAxisAlignment: pw.MainAxisAlignment.spaceEvenly, children: [
      pw.Column(children: [big, pw.Text('${_t(s, 'اسمه', 'Name')}: ${l.name}', style: const pw.TextStyle(fontSize: 13))]),
      pw.Column(children: [
        for (final (label, form) in [
          (_t(s, 'منفصل', 'Alone'), _forms(l).alone),
          (_t(s, 'في البداية', 'At the start'), _forms(l).start),
          (_t(s, 'في الوسط', 'In the middle'), _forms(l).middle),
          (_t(s, 'في النهاية', 'At the end'), _forms(l).end),
        ])
          pw.Padding(
            padding: const pw.EdgeInsets.symmetric(vertical: 2),
            child: pw.Row(mainAxisSize: pw.MainAxisSize.min, children: [
              pw.SizedBox(width: 70, child: pw.Text(label, style: const pw.TextStyle(fontSize: 10, color: _grey))),
              pw.Text(form, textDirection: pw.TextDirection.rtl, style: const pw.TextStyle(fontSize: 30)),
            ]),
          ),
      ]),
    ]),
    pw.SizedBox(height: 14),
    for (var i = 0; i < 4; i++)
      _writingLine([for (var k = 0; k < 7; k++) faded(l.letter, 44)]),
    pw.SizedBox(height: 6),
    _instruction('${_t(s, 'كلمة فيها الحرف', 'A word with the letter')}: ${word.word}'),
    _writingLine([faded(word.word, 40), faded(word.word, 40), faded(word.word, 40)]),
  ]);
}

// ---------------------------------------------------------------------------
// 2. Find the letter

_Body _find(WorksheetSpec s, Random r) {
  final l = _letter(s);
  final cols = 6, rows = s.age <= 5 ? 7 : 9;
  final others = [for (final o in kArabicLetters) if (o.letter != l.letter) o.letter];
  final hits = <int>{};
  final target = 8 + (s.age > 5 ? 2 : 0);
  while (hits.length < target) {
    hits.add(r.nextInt(cols * rows));
  }
  final cells = [for (var i = 0; i < cols * rows; i++) hits.contains(i) ? l.letter : others[r.nextInt(others.length)]];
  pw.Widget grid(bool answer) => pw.Table(
        children: [
          for (var y = 0; y < rows; y++)
            pw.TableRow(children: [
              for (var x = 0; x < cols; x++)
                pw.Container(
                  height: 54,
                  alignment: pw.Alignment.center,
                  decoration: pw.BoxDecoration(
                    border: pw.Border.all(color: _light, width: 0.6),
                    color: answer && cells[y * cols + x] == l.letter ? const PdfColor(0.85, 0.85, 0.85) : null,
                  ),
                  child: pw.Text(cells[y * cols + x], textDirection: pw.TextDirection.rtl, style: pw.TextStyle(fontSize: 30, fontWeight: answer && cells[y * cols + x] == l.letter ? pw.FontWeight.bold : null)),
                ),
            ]),
        ],
      );
  return _Body([
    _instruction(_t(s, 'ضع دائرة حول كل حرف ${l.letter} تجده.', 'Circle every ${l.letter} you can find.')),
    pw.Center(child: pw.Text(l.letter, textDirection: pw.TextDirection.rtl, style: const pw.TextStyle(fontSize: 64))),
    pw.SizedBox(height: 8),
    grid(false),
  ], [
    pw.Text('${_t(s, 'عدد الحرف', 'The letter appears')} ${l.letter}: ${hits.length}', style: const pw.TextStyle(fontSize: 14)),
    pw.SizedBox(height: 8),
    grid(true),
  ]);
}

// ---------------------------------------------------------------------------
// 3. Match words (Arabic word <-> English word, from the reviewed vocabulary)

_Body _match(WorksheetSpec s, Random r) {
  final pool = [for (final v in kVocab) if (v.en != null && v.minAge <= s.age + 2 && v.maxAge >= s.age) v]..shuffle(r);
  final items = pool.take(s.age <= 6 ? 5 : 7).toList();
  final shuffled = [...items]..shuffle(r);
  pw.Widget dot() => pw.Container(width: 9, height: 9, decoration: pw.BoxDecoration(shape: pw.BoxShape.circle, border: pw.Border.all(width: 1)));
  return _Body([
    _instruction(_t(s, 'وصّل كل كلمة عربية بمعناها بالإنجليزية.', 'Draw a line from each Arabic word to its English meaning.')),
    pw.SizedBox(height: 6),
    for (var i = 0; i < items.length; i++)
      pw.Container(
        height: 44,
        child: pw.Row(children: [
          pw.SizedBox(width: 120, child: pw.Text(items[i].ar, textDirection: pw.TextDirection.rtl, style: const pw.TextStyle(fontSize: 24))),
          dot(),
          pw.Expanded(child: pw.SizedBox()),
          dot(),
          pw.SizedBox(width: 120, child: pw.Align(alignment: pw.Alignment.centerRight, child: pw.Text(shuffled[i].en!, textDirection: pw.TextDirection.ltr, style: const pw.TextStyle(fontSize: 22)))),
        ]),
      ),
  ], [
    for (final v in items) pw.Text('${v.ar}  =  ${v.en}', style: const pw.TextStyle(fontSize: 16)),
  ]);
}

// ---------------------------------------------------------------------------
// Shapes drawn in code (original vector art)

enum _Shape { circle, square, triangle, star, heart, rectangle }

String _shapeName(WorksheetSpec s, _Shape sh) => switch (sh) {
      _Shape.circle => _t(s, 'دائرة', 'circle'),
      _Shape.square => _t(s, 'مربع', 'square'),
      _Shape.triangle => _t(s, 'مثلث', 'triangle'),
      _Shape.star => _t(s, 'نجمة', 'star'),
      _Shape.heart => _t(s, 'قلب', 'heart'),
      _Shape.rectangle => _t(s, 'مستطيل', 'rectangle'),
    };

void _drawShape(PdfGraphics g, _Shape sh, double cx, double cy, double r, {bool fill = false, bool dashed = false, PdfColor color = PdfColors.black}) {
  g.setStrokeColor(color);
  g.setFillColor(color);
  g.setLineWidth(1.6);
  if (dashed) g.setLineDashPattern([3, 3]);
  switch (sh) {
    case _Shape.circle:
      g.drawEllipse(cx, cy, r, r);
    case _Shape.square:
      g.drawRect(cx - r, cy - r, 2 * r, 2 * r);
    case _Shape.rectangle:
      g.drawRect(cx - r * 1.3, cy - r * 0.7, 2.6 * r, 1.4 * r);
    case _Shape.triangle:
      g.moveTo(cx, cy + r);
      g.lineTo(cx - r, cy - r * 0.8);
      g.lineTo(cx + r, cy - r * 0.8);
      g.closePath();
    case _Shape.star:
      for (var i = 0; i < 10; i++) {
        final rad = i.isEven ? r : r * 0.42;
        final a = pi / 2 + i * pi / 5;
        final x = cx + rad * cos(a), y = cy + rad * sin(a);
        i == 0 ? g.moveTo(x, y) : g.lineTo(x, y);
      }
      g.closePath();
    case _Shape.heart:
      g.moveTo(cx, cy - r);
      g.curveTo(cx - 1.6 * r, cy, cx - r * 0.9, cy + r * 1.2, cx, cy + r * 0.4);
      g.curveTo(cx + r * 0.9, cy + r * 1.2, cx + 1.6 * r, cy, cx, cy - r);
  }
  fill ? g.fillPath() : g.strokePath();
  if (dashed) g.setLineDashPattern();
}

pw.Widget _shapeBox(_Shape sh, {double size = 46, bool fill = false, bool dashed = false}) => pw.SizedBox(
      width: size,
      height: size,
      child: pw.CustomPaint(painter: (g, sz) => _drawShape(g, sh, sz.x / 2, sz.y / 2, sz.x / 2 - 4, fill: fill, dashed: dashed)),
    );

// ---------------------------------------------------------------------------
// 4. Counting

_Body _counting(WorksheetSpec s, Random r) {
  final max = s.age <= 4 ? 5 : (s.age <= 6 ? 10 : 20);
  final rows = 6;
  final counts = [for (var i = 0; i < rows; i++) 1 + r.nextInt(max)];
  final kinds = [_Shape.star, _Shape.circle, _Shape.square, _Shape.triangle, _Shape.heart, _Shape.star];
  return _Body([
    _instruction(_t(s, 'عُدّ الأشكال واكتب العدد في المربع.', 'Count the shapes and write the number in the box.')),
    for (var i = 0; i < rows; i++)
      pw.Container(
        margin: const pw.EdgeInsets.only(bottom: 14),
        child: pw.Row(crossAxisAlignment: pw.CrossAxisAlignment.center, children: [
          pw.Expanded(child: pw.Wrap(spacing: 4, runSpacing: 4, children: [for (var k = 0; k < counts[i]; k++) _shapeBox(kinds[i], size: 24, fill: false)])),
          pw.SizedBox(width: 12),
          pw.Container(width: 46, height: 46, decoration: pw.BoxDecoration(border: pw.Border.all(width: 1.4), borderRadius: pw.BorderRadius.circular(6))),
        ]),
      ),
  ], [
    for (var i = 0; i < rows; i++) pw.Text('${i + 1}.  ${counts[i]}', style: const pw.TextStyle(fontSize: 16)),
  ]);
}

// ---------------------------------------------------------------------------
// 5. Shapes: match the name to the shape, and trace

_Body _shapes(WorksheetSpec s, Random r) {
  final shapes = [..._Shape.values]..shuffle(r);
  final names = [...shapes]..shuffle(r);
  return _Body([
    _instruction(_t(s, 'وصّل اسم كل شكل بالشكل المناسب.', 'Draw a line from each name to the matching shape.')),
    for (var i = 0; i < shapes.length; i++)
      pw.Container(
        height: 56,
        child: pw.Row(children: [
          pw.SizedBox(width: 100, child: pw.Text(_shapeName(s, names[i]), style: const pw.TextStyle(fontSize: 20))),
          pw.Container(width: 9, height: 9, decoration: pw.BoxDecoration(shape: pw.BoxShape.circle, border: pw.Border.all(width: 1))),
          pw.Expanded(child: pw.SizedBox()),
          pw.Container(width: 9, height: 9, decoration: pw.BoxDecoration(shape: pw.BoxShape.circle, border: pw.Border.all(width: 1))),
          pw.SizedBox(width: 12),
          _shapeBox(shapes[i]),
        ]),
      ),
    pw.SizedBox(height: 10),
    _instruction(_t(s, 'تتبّع كل شكل بقلمك.', 'Trace each shape with your pencil.')),
    pw.Row(mainAxisAlignment: pw.MainAxisAlignment.spaceEvenly, children: [for (final sh in [_Shape.circle, _Shape.square, _Shape.triangle, _Shape.star]) _shapeBox(sh, size: 70, dashed: true)]),
  ], [
    for (var i = 0; i < names.length; i++)
      pw.Text('${i + 1}.  ${_shapeName(s, names[i])}  =  ${_t(s, 'الشكل في السطر', 'the shape on row')} ${shapes.indexOf(names[i]) + 1}', style: const pw.TextStyle(fontSize: 16)),
  ]);
}

// ---------------------------------------------------------------------------
// 6. Patterns and logic

_Body _patterns(WorksheetSpec s, Random r) {
  final all = [_Shape.circle, _Shape.square, _Shape.triangle, _Shape.star];
  final rows = s.age <= 5 ? 4 : 6;
  final seqs = <List<_Shape>>[];
  final answers = <_Shape>[];
  final choices = <List<_Shape>>[];
  for (var i = 0; i < rows; i++) {
    final a = all[r.nextInt(all.length)];
    var b = all[r.nextInt(all.length)];
    while (b == a) {
      b = all[r.nextInt(all.length)];
    }
    final c = all.firstWhere((x) => x != a && x != b);
    final long = s.age > 6 && i.isOdd; // A B C A B C
    final unit = long ? [a, b, c] : [a, b];
    final shown = [for (var k = 0; k < unit.length * 2 + 1; k++) unit[k % unit.length]];
    final ans = unit[shown.length % unit.length];
    seqs.add(shown);
    answers.add(ans);
    final ch = <_Shape>{ans, ...all}.take(3).toList()..shuffle(r);
    if (!ch.contains(ans)) ch[0] = ans;
    choices.add(ch);
  }
  return _Body([
    _instruction(_t(s, 'انظر إلى النمط ثم ضع دائرة حول الشكل الذي يكمله.', 'Look at the pattern and circle the shape that comes next.')),
    for (var i = 0; i < rows; i++)
      pw.Container(
        margin: const pw.EdgeInsets.only(bottom: 18),
        child: pw.Row(children: [
          for (final sh in seqs[i]) pw.Padding(padding: const pw.EdgeInsets.only(right: 6, left: 6), child: _shapeBox(sh, size: 40)),
          pw.Text('?', style: const pw.TextStyle(fontSize: 26)),
          pw.Spacer(),
          for (final sh in choices[i]) pw.Padding(padding: const pw.EdgeInsets.symmetric(horizontal: 6), child: _shapeBox(sh, size: 38)),
        ]),
      ),
  ], [
    for (var i = 0; i < rows; i++) pw.Text('${i + 1}.  ${_shapeName(s, answers[i])}', style: const pw.TextStyle(fontSize: 16)),
  ]);
}

// ---------------------------------------------------------------------------
// 7. Reading practice: vowelled syllable words and short sentences

_Body _reading(WorksheetSpec s, Random r) {
  final words = [...kSyllableWords]..shuffle(r);
  final take = words.take(s.age <= 6 ? 5 : 8).toList();
  final sentences = [...kReadingItems]..shuffle(r);
  return _Body([
    _instruction(_t(s, 'اقرأ المقاطع ثم الكلمة، ثم انسخ الكلمة على السطر.', 'Read the syllables, then the word, then copy the word on the line.')),
    for (final w in take)
      pw.Container(
        margin: const pw.EdgeInsets.only(bottom: 8),
        child: pw.Row(children: [
          pw.SizedBox(width: 150, child: pw.Text(w.syllables.reversed.join('  '), textDirection: pw.TextDirection.rtl, style: const pw.TextStyle(fontSize: 22, color: _grey))),
          pw.SizedBox(width: 90, child: pw.Text(w.word, textDirection: pw.TextDirection.rtl, style: const pw.TextStyle(fontSize: 28))),
          pw.Expanded(child: pw.Container(height: 30, decoration: const pw.BoxDecoration(border: pw.Border(bottom: pw.BorderSide(width: 0.8, color: _grey))))),
        ]),
      ),
    pw.SizedBox(height: 10),
    _instruction(_t(s, 'اقرأ الجمل مع أحد الكبار.', 'Read these sentences with a grown-up.')),
    for (final it in sentences.take(3))
      pw.Padding(padding: const pw.EdgeInsets.only(bottom: 10), child: pw.Text(it.sentence, textDirection: pw.TextDirection.rtl, style: const pw.TextStyle(fontSize: 26))),
  ], [
    for (final w in take) pw.Text('${w.word}  =  ${w.syllables.join(' + ')}', textDirection: pw.TextDirection.rtl, style: const pw.TextStyle(fontSize: 18)),
    pw.SizedBox(height: 8),
    pw.Text(_t(s, 'اطلب من الطفل أن يقرأ بصوت مسموع، وصحّح بلطف بإعادة النطق الصحيح.', 'Ask the child to read aloud and correct gently by saying the word again.'), style: const pw.TextStyle(fontSize: 12)),
  ]);
}
