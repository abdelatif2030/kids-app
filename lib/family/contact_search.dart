import 'package:flutter/material.dart';

import '../design/tokens.dart';
import '../l10n/strings.dart';
import 'family_models.dart';

/// Lower case, no Arabic diacritics or tatweel, and the common letter variants folded together, so that
/// «أحمد», «احمد» and «احمَد» all match.
String normalizeSearch(String s) {
  var t = s.trim().toLowerCase();
  t = t.replaceAll(RegExp('[ً-ٰٟـ]'), '');
  t = t
      .replaceAll(RegExp('[أإآ]'), 'ا')
      .replaceAll('ى', 'ي')
      .replaceAll('ة', 'ه');
  return t.replaceAll(RegExp(r'\s+'), ' ');
}

/// True when every word of [query] appears in the person's name or in the relation word (grandma, uncle...).
/// An empty query matches everybody. Only people the parent already approved are ever passed in.
bool relativeMatches(Relative r, String query) {
  final q = normalizeSearch(query);
  if (q.isEmpty) return true;
  final hay = normalizeSearch(
    '${r.name} ${relationLabel(r.relation)} ${r.relation}',
  );
  return q.split(' ').every(hay.contains);
}

/// Rounded purple search field with a clear button. Filters as the person types.
class ContactSearchBar extends StatelessWidget {
  final TextEditingController controller;
  final ValueChanged<String> onChanged;
  const ContactSearchBar({
    super.key,
    required this.controller,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(28),
        boxShadow: DS.softShadow,
      ),
      child: TextField(
        key: const ValueKey('contact_search'),
        controller: controller,
        onChanged: onChanged,
        textInputAction: TextInputAction.search,
        decoration: InputDecoration(
          hintText: tr2('ابحث بالاسم', 'Search by name'),
          filled: true,
          fillColor: Colors.white,
          prefixIcon: const Icon(Icons.search_rounded, color: DS.primary),
          suffixIcon: ValueListenableBuilder<TextEditingValue>(
            valueListenable: controller,
            builder: (_, v, _) => v.text.isEmpty
                ? const SizedBox.shrink()
                : IconButton(
                    key: const ValueKey('contact_search_clear'),
                    tooltip: tr2('مسح', 'Clear'),
                    icon: const Icon(Icons.close_rounded),
                    onPressed: () {
                      controller.clear();
                      onChanged('');
                    },
                  ),
          ),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(28),
            borderSide: const BorderSide(color: DS.border),
          ),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(28),
            borderSide: const BorderSide(color: DS.border),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(28),
            borderSide: const BorderSide(color: DS.primary, width: 2),
          ),
        ),
      ),
    );
  }
}

/// Coloured chip for a request status: Pending / Accepted / Declined (or Cancelled).
class RequestStatusChip extends StatelessWidget {
  final String status;
  const RequestStatusChip(this.status, {super.key});

  @override
  Widget build(BuildContext context) {
    final (label, color, icon) = switch (status) {
      kRequestAccepted => (
        tr2('مقبول', 'Accepted'),
        const Color(0xFF2E9E5B),
        Icons.check_circle_rounded,
      ),
      kRequestDeclined => (
        tr2('مرفوض', 'Declined'),
        const Color(0xFFD64545),
        Icons.cancel_rounded,
      ),
      kRequestCancelled => (
        tr2('أُلغي', 'Cancelled'),
        const Color(0xFF7A7A8C),
        Icons.block_rounded,
      ),
      _ => (
        tr2('بانتظار الرد', 'Pending'),
        const Color(0xFFE59A0B),
        Icons.hourglass_top_rounded,
      ),
    };
    return Container(
      key: ValueKey('status_$status'),
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: color.withAlpha(30),
        borderRadius: BorderRadius.circular(14),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 16, color: color),
          const SizedBox(width: 4),
          Text(
            label,
            style: TextStyle(
              fontSize: 13,
              fontWeight: FontWeight.w800,
              color: color,
            ),
          ),
        ],
      ),
    );
  }
}
