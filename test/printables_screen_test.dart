import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/print/printables_screen.dart';
import 'package:kids_app/print/worksheets.dart';

void main() {
  testWidgets('printables screen changes the spec the preview receives', (tester) async {
    WorksheetSpec? last;
    await tester.pumpWidget(MaterialApp(
      key: UniqueKey(),
      home: PrintablesScreen(previewBuilder: (c, s) {
        last = s;
        return const SizedBox();
      }),
    ));
    await tester.pump();
    expect(last!.kind, WorksheetKind.letterTracing);
    expect(last!.lang, AppLocale.instance.code);
    await tester.tap(find.text(worksheetInfo(WorksheetSpec(kind: WorksheetKind.counting, lang: AppLocale.instance.code)).title));
    await tester.pump();
    expect(last!.kind, WorksheetKind.counting);
    await tester.tap(find.byIcon(Icons.shuffle_rounded));
    await tester.pump();
    expect(last!.seed, 2);
  });
}
