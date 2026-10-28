import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../../l10n/strings.dart';

/// Parent area: report wrong or inappropriate content, or a problem. The app
/// has no server, so this writes a short message the parent copies and sends
/// themselves. It never includes a child's name, age, progress or anything
/// else about the child.
class ReportProblemScreen extends StatefulWidget {
  const ReportProblemScreen({super.key});

  @override
  State<ReportProblemScreen> createState() => _ReportProblemScreenState();
}

const kReportTypes = ['محتوى غير مناسب', 'معلومة أو نطق خاطئ', 'مشكلة في الصوت', 'مشكلة تقنية', 'اقتراح'];
const kReportAreas = ['فيديو', 'قصة', 'حرف أو كلمة', 'لعبة أو درس', 'نشاط مع الأهل', 'أخرى'];

/// The text a parent copies. Pure, so it is easy to check what it contains.
String buildReportText({required String type, required String area, required String note, required String version}) =>
    tr2('تقرير من تطبيق رحلتي (النسخة $version)\n'
    'النوع: $type\n'
    'المكان: $area\n'
    'التفاصيل: ${note.trim().isEmpty ? '—' : note.trim()}\n', 'Report from the Rehlaty app (version $version)\nType: $type\nPlace: $area\nDetails: ${note.trim().isEmpty ? '—' : note.trim()}\n');

class _ReportProblemScreenState extends State<ReportProblemScreen> {
  String _type = kReportTypes.first;
  String _area = kReportAreas.first;
  final _note = TextEditingController();

  @override
  void dispose() {
    _note.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final text = buildReportText(type: _type, area: _area, note: _note.text, version: '1.0.0');
    return Scaffold(
      appBar: AppBar(title: Text(loc('الإبلاغ عن مشكلة'))),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text(
            loc('لا يرسل التطبيق شيئاً من تلقاء نفسه. اكتب ما لاحظته ثم انسخ الرسالة وأرسلها بنفسك إلى جهة الدعم التي يحددها ناشر التطبيق. '
            'لا تتضمن الرسالة اسم طفلك ولا عمره ولا تقدمه.'),
          ),
          const SizedBox(height: 12),
          Text(loc('نوع المشكلة'), style: TextStyle(fontWeight: FontWeight.bold)),
          Wrap(
            spacing: 8,
            children: [
              for (final t in kReportTypes)
                ChoiceChip(label: Text(loc(t)), selected: _type == t, onSelected: (_) => setState(() => _type = t)),
            ],
          ),
          const SizedBox(height: 8),
          Text(loc('أين؟'), style: TextStyle(fontWeight: FontWeight.bold)),
          Wrap(
            spacing: 8,
            children: [
              for (final a in kReportAreas)
                ChoiceChip(label: Text(loc(a)), selected: _area == a, onSelected: (_) => setState(() => _area = a)),
            ],
          ),
          const SizedBox(height: 8),
          TextField(
            controller: _note,
            maxLines: 4,
            maxLength: 400,
            decoration: InputDecoration(
              labelText: loc('ما الذي حدث؟ (مثلاً: اسم القصة أو الحرف)'),
              border: OutlineInputBorder(),
            ),
            onChanged: (_) => setState(() {}),
          ),
          Card(child: Padding(padding: const EdgeInsets.all(12), child: SelectableText(text))),
          const SizedBox(height: 8),
          FilledButton.icon(
            onPressed: () async {
              await Clipboard.setData(ClipboardData(text: text));
              if (context.mounted) {
                ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(loc('تم نسخ الرسالة'))));
              }
            },
            icon: const Icon(Icons.copy_rounded),
            label: Text(loc('نسخ الرسالة')),
          ),
        ],
      ),
    );
  }
}
