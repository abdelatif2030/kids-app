import 'dart:convert';
import 'dart:typed_data';

import 'l10n/strings.dart';

/// Kinds of work a teacher can show. Parents browse them before deciding to book.
const kPortfolioTypes = ['worksheet', 'lesson_plan', 'activity', 'story', 'other'];

String portfolioTypeLabel(String t) => switch (t) {
      'worksheet' => tr2('ورقة عمل', 'Worksheet'),
      'lesson_plan' => tr2('خطة حصة', 'Lesson plan'),
      'activity' => tr2('نشاط تعليمي', 'Learning activity'),
      'story' => tr2('قصة', 'Story'),
      _ => tr2('أخرى', 'Other'),
    };

/// draft = only the teacher sees it. published = parents see it.
/// hidden = set by the app owner in the console (the teacher cannot lift it).
const portfolioDraft = 'draft';
const portfolioPublished = 'published';
const portfolioHidden = 'hidden';

const kPortfolioTitleMax = 80;
const kPortfolioDescriptionMax = 600;
const kPortfolioImageMaxBytes = 100 * 1024;
const kPortfolioMaxItems = 20;
const kIntroVideoMax = 300;

/// One sample of a teacher's work: a title, a short description and an optional small picture.
/// There is no file download and no video upload here (the free plan has no file storage).
class PortfolioItem {
  final String id;
  final String teacherUid;
  final String type;
  final String title;
  final String description;
  final String? imageB64; // a small JPEG
  final String status;
  const PortfolioItem({
    required this.id,
    required this.teacherUid,
    required this.type,
    required this.title,
    this.description = '',
    this.imageB64,
    this.status = portfolioDraft,
  });

  Uint8List? get imageBytes => imageB64 == null ? null : base64Decode(imageB64!);
  bool get published => status == portfolioPublished;
  bool get hidden => status == portfolioHidden;

  PortfolioItem copyWith({String? id, String? teacherUid, String? type, String? title, String? description, Object? imageB64 = _keep, String? status}) =>
      PortfolioItem(
        id: id ?? this.id,
        teacherUid: teacherUid ?? this.teacherUid,
        type: type ?? this.type,
        title: title ?? this.title,
        description: description ?? this.description,
        imageB64: identical(imageB64, _keep) ? this.imageB64 : imageB64 as String?,
        status: status ?? this.status,
      );
  static const _keep = Object();

  /// What a teacher writes. The owner-only `hidden` status is never written from the app.
  Map<String, dynamic> toMap() => {
        'teacherUid': teacherUid,
        'type': type,
        'title': title,
        'description': description,
        'imageB64': ?imageB64,
        'status': status,
      };

  factory PortfolioItem.fromMap(String id, Map<String, dynamic> m) => PortfolioItem(
        id: id,
        teacherUid: (m['teacherUid'] as String?) ?? '',
        type: kPortfolioTypes.contains(m['type']) ? m['type'] as String : 'other',
        title: (m['title'] as String?) ?? '',
        description: (m['description'] as String?) ?? '',
        imageB64: m['imageB64'] as String?,
        status: const [portfolioDraft, portfolioPublished, portfolioHidden].contains(m['status']) ? m['status'] as String : portfolioDraft,
      );
}

/// A message for the teacher when the item cannot be saved, or null when it is fine.
String? validatePortfolioItem(PortfolioItem i) {
  if (i.title.trim().isEmpty) return tr2('اكتب عنواناً للعمل', 'Write a title for this work');
  if (i.title.trim().length > kPortfolioTitleMax) return tr2('العنوان طويل (الحد $kPortfolioTitleMax حرفاً)', 'The title is too long (max $kPortfolioTitleMax characters)');
  if (i.description.length > kPortfolioDescriptionMax) {
    return tr2('الوصف طويل (الحد $kPortfolioDescriptionMax حرفاً)', 'The description is too long (max $kPortfolioDescriptionMax characters)');
  }
  if (!kPortfolioTypes.contains(i.type)) return tr2('اختر نوع العمل', 'Choose the kind of work');
  if (i.status != portfolioDraft && i.status != portfolioPublished) return tr2('حالة غير صالحة', 'Invalid status');
  final img = i.imageB64;
  if (img != null && base64Decode(img).length > kPortfolioImageMaxBytes) return tr2('الصورة كبيرة، اختر صورة أصغر', 'The picture is too large, choose a smaller one');
  return null;
}

/// The intro video is only a link the parent can copy (no player, no upload, no autoplay):
/// it must be a plain https address. An empty string means no video.
bool introVideoLinkOk(String url) {
  final u = url.trim();
  if (u.isEmpty) return true;
  if (u.length > kIntroVideoMax) return false;
  final uri = Uri.tryParse(u);
  return uri != null && uri.scheme == 'https' && uri.host.contains('.') && !u.contains(' ');
}
