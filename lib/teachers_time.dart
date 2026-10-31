import 'l10n/strings.dart';
const _weekdays = ['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'];

/// Weekday name for DateTime.monday..sunday.
String weekdayName(int weekday) => loc(_weekdays[weekday - 1]);

String _two(int n) => n.toString().padLeft(2, '0');

/// "السبت 31/10 · 16:30". Always the phone's local time.
String fmtDateTime(DateTime t) {
  final l = t.toLocal();
  return '${weekdayName(l.weekday)} ${l.day}/${l.month} · ${_two(l.hour)}:${_two(l.minute)}';
}

String fmtDay(DateTime t) {
  final l = t.toLocal();
  return '${weekdayName(l.weekday)} ${l.day}/${l.month}/${l.year}';
}

String fmtTime(DateTime t) => '${_two(t.toLocal().hour)}:${_two(t.toLocal().minute)}';

/// Phone numbers, e-mail addresses and links are not allowed in booking
/// messages: contact stays inside the app between adults.
///
/// The pattern in [kBookingMessageLinkPattern] is the SAME one the proposed Firestore rule uses (`rules_proposed/`), so a message this
/// check accepts is never refused by that rule for containing a link.
final RegExp kBookingMessageLinkPattern = RegExp(r'(https?:|www\.|://|\.com|\.net|\.org|@)', caseSensitive: false);

bool looksLikeContactDetails(String text) {
  if (kBookingMessageLinkPattern.hasMatch(text)) return true;
  final digits = text.replaceAll(RegExp(r'[\s\-().]'), '');
  final arabicIndic = digits.replaceAllMapped(RegExp('[٠-٩]'), (m) => (m.group(0)!.codeUnitAt(0) - 0x0660).toString());
  if (RegExp(r'\d{8,}').hasMatch(arabicIndic)) return true;
  if (RegExp(r'[\w.+-]+@[\w-]+\.[\w.]+').hasMatch(text)) return true;
  if (RegExp(r'(https?://|www\.)', caseSensitive: false).hasMatch(text)) return true;
  return false;
}
