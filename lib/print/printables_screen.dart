import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:printing/printing.dart';

import '../design/tokens.dart';
import '../l10n/app_locale.dart';
import '../l10n/strings.dart';
import '../literacy/letters_data.dart';
import 'worksheets.dart';

/// Parent tool: choose a worksheet, see a real PDF preview, print it, or save/share the file.
/// Nothing is uploaded: the PDF is built on the device from the app's own content.
class PrintablesScreen extends StatefulWidget {
  /// Tests replace the PDF preview (it needs the platform); it receives the spec being previewed.
  final Widget Function(BuildContext, WorksheetSpec)? previewBuilder;
  final int initialAge;
  const PrintablesScreen({super.key, this.previewBuilder, this.initialAge = 5});

  @override
  State<PrintablesScreen> createState() => _PrintablesScreenState();
}

class _PrintablesScreenState extends State<PrintablesScreen> {
  WorksheetKind _kind = WorksheetKind.letterTracing;
  String _letter = 'ب';
  late int _age = widget.initialAge.clamp(3, 6);
  late String _lang = AppLocale.instance.code;
  bool _answers = true;
  int _seed = 1;

  bool get _needsLetter => _kind == WorksheetKind.letterTracing || _kind == WorksheetKind.letterFind;

  WorksheetSpec get _spec => WorksheetSpec(kind: _kind, lang: _lang, letter: _letter, age: _age, seed: _seed, withAnswers: _answers);

  String _kindLabel(WorksheetKind k) => worksheetInfo(WorksheetSpec(kind: k, lang: AppLocale.instance.code)).title;

  @override
  Widget build(BuildContext context) {
    final info = worksheetInfo(_spec);
    return Scaffold(
      appBar: AppBar(title: Text(tr2('أوراق للطباعة', 'Printable worksheets'))),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(DS.s12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Wrap(
                  spacing: DS.s8,
                  runSpacing: DS.s4,
                  children: [
                    for (final k in WorksheetKind.values)
                      ChoiceChip(label: Text(_kindLabel(k)), selected: _kind == k, onSelected: (_) => setState(() => _kind = k)),
                  ],
                ),
                const SizedBox(height: DS.s8),
                Wrap(
                  spacing: DS.s16,
                  runSpacing: DS.s8,
                  crossAxisAlignment: WrapCrossAlignment.center,
                  children: [
                    if (_needsLetter)
                      DropdownButton<String>(
                        value: _letter,
                        items: [for (final l in kArabicLetters) DropdownMenuItem(value: l.letter, child: Text('${l.letter}  ${l.name}', style: const TextStyle(fontSize: 18)))],
                        onChanged: (v) => setState(() => _letter = v ?? _letter),
                      ),
                    Row(mainAxisSize: MainAxisSize.min, children: [
                      Text(tr2('العمر', 'Age')),
                      SizedBox(
                        width: 160,
                        child: Slider(value: _age.toDouble(), min: 3, max: 6, divisions: 3, label: '$_age', onChanged: (v) => setState(() => _age = v.round())),
                      ),
                      Text('$_age'),
                    ]),
                    SegmentedButton<String>(
                      segments: const [ButtonSegment(value: 'ar', label: Text('العربية')), ButtonSegment(value: 'en', label: Text('English'))],
                      selected: {_lang},
                      onSelectionChanged: (s) => setState(() => _lang = s.first),
                    ),
                    FilterChip(label: Text(tr2('ورقة إجابات', 'Answer sheet')), selected: _answers, onSelected: (v) => setState(() => _answers = v)),
                    TextButton.icon(
                      onPressed: () => setState(() => _seed++),
                      icon: const Icon(Icons.shuffle_rounded),
                      label: Text(tr2('نسخة جديدة', 'New variation')),
                    ),
                  ],
                ),
                const SizedBox(height: DS.s4),
                Text('${info.skill} · ${tr2('الأعمار', 'Ages')} ${info.minAge}–${info.maxAge}', style: DS.caption),
              ],
            ),
          ),
          Expanded(
            child: widget.previewBuilder != null
                ? widget.previewBuilder!(context, _spec)
                : PdfPreview(
                    key: ValueKey('${_spec.kind}${_spec.lang}${_spec.letter}${_spec.age}${_spec.seed}${_spec.withAnswers}'),
                    build: (format) async => Uint8List.fromList(await worksheetBytes(_spec)),
                    pdfFileName: 'rehlaty-${_kind.name}.pdf',
                    canChangeOrientation: false,
                    canChangePageFormat: false,
                    canDebug: false,
                    allowSharing: true,
                    allowPrinting: true,
                  ),
          ),
        ],
      ),
    );
  }
}
