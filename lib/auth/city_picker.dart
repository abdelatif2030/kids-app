import 'package:flutter/material.dart';

import '../l10n/app_locale.dart';
import '../l10n/strings.dart';
import 'auth_shell.dart';

/// The cities offered on the sign-up page (owner request 2026-11-12: show every city in a clear scrolling list, and still
/// let the parent type one). Egypt's governorates and big cities first, then Arab capitals and big cities. [Arabic, English].
const List<(String, String)> kCities = [
  ('القاهرة', 'Cairo'), ('الجيزة', 'Giza'), ('الإسكندرية', 'Alexandria'), ('القليوبية', 'Qalyubia'), ('شبرا الخيمة', 'Shubra El Kheima'),
  ('بورسعيد', 'Port Said'), ('السويس', 'Suez'), ('الإسماعيلية', 'Ismailia'), ('دمياط', 'Damietta'), ('الدقهلية', 'Dakahlia'),
  ('المنصورة', 'Mansoura'), ('الشرقية', 'Sharqia'), ('الزقازيق', 'Zagazig'), ('العاشر من رمضان', '10th of Ramadan'), ('الغربية', 'Gharbia'),
  ('طنطا', 'Tanta'), ('المحلة الكبرى', 'El Mahalla El Kubra'), ('المنوفية', 'Monufia'), ('شبين الكوم', 'Shebin El Kom'), ('كفر الشيخ', 'Kafr El Sheikh'),
  ('البحيرة', 'Beheira'), ('دمنهور', 'Damanhour'), ('الفيوم', 'Faiyum'), ('بني سويف', 'Beni Suef'), ('المنيا', 'Minya'),
  ('أسيوط', 'Asyut'), ('سوهاج', 'Sohag'), ('قنا', 'Qena'), ('الأقصر', 'Luxor'), ('أسوان', 'Aswan'),
  ('البحر الأحمر', 'Red Sea'), ('الغردقة', 'Hurghada'), ('الوادي الجديد', 'New Valley'), ('مطروح', 'Matrouh'), ('شمال سيناء', 'North Sinai'),
  ('العريش', 'Arish'), ('جنوب سيناء', 'South Sinai'), ('شرم الشيخ', 'Sharm El Sheikh'), ('6 أكتوبر', '6th of October'), ('الشيخ زايد', 'Sheikh Zayed'),
  ('القاهرة الجديدة', 'New Cairo'), ('العاصمة الإدارية', 'New Capital'), ('العبور', 'Obour'), ('الشروق', 'Shorouk'), ('حلوان', 'Helwan'),
  ('الرياض', 'Riyadh'), ('جدة', 'Jeddah'), ('مكة المكرمة', 'Makkah'), ('المدينة المنورة', 'Madinah'), ('الدمام', 'Dammam'),
  ('دبي', 'Dubai'), ('أبوظبي', 'Abu Dhabi'), ('الشارقة', 'Sharjah'), ('الكويت', 'Kuwait City'), ('الدوحة', 'Doha'),
  ('المنامة', 'Manama'), ('مسقط', 'Muscat'), ('عمّان', 'Amman'), ('بيروت', 'Beirut'), ('دمشق', 'Damascus'),
  ('بغداد', 'Baghdad'), ('القدس', 'Jerusalem'), ('غزة', 'Gaza'), ('الخرطوم', 'Khartoum'), ('طرابلس', 'Tripoli'),
  ('تونس', 'Tunis'), ('الجزائر', 'Algiers'), ('الرباط', 'Rabat'), ('الدار البيضاء', 'Casablanca'), ('نواكشوط', 'Nouakchott'),
  ('صنعاء', "Sana'a"),
];

/// A clear «اختار» button for the end of the city field: opens the list.
class CityPickButton extends StatelessWidget {
  final TextEditingController controller;
  final int maxLength;
  const CityPickButton({super.key, required this.controller, this.maxLength = 60});

  @override
  Widget build(BuildContext context) => Material(
    key: const ValueKey('register_city_pick'),
    color: authPurple,
    shape: const StadiumBorder(),
    child: InkWell(
      customBorder: const StadiumBorder(),
      onTap: () async {
        final picked = await showCityPicker(context, controller.text, maxLength: maxLength);
        if (picked != null) controller.text = picked;
      },
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(tr2('اختار', 'Choose'), style: const TextStyle(fontFamily: 'Tajawal', fontSize: 17, fontWeight: FontWeight.w900, color: Colors.white)),
            const Icon(Icons.keyboard_arrow_down_rounded, color: Colors.white, size: 26),
          ],
        ),
      ),
    ),
  );
}

/// The list of cities in a sheet: a search box on top (typing filters the list), every city below in a scrolling
/// list, and «استخدم ...» to keep exactly what was typed when the city is not in the list.
Future<String?> showCityPicker(BuildContext context, String current, {int maxLength = 60}) => showModalBottomSheet<String>(
  context: context,
  isScrollControlled: true,
  backgroundColor: Colors.white,
  shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
  builder: (c) => _CitySheet(initial: current, maxLength: maxLength),
);

class _CitySheet extends StatefulWidget {
  final String initial;
  final int maxLength;
  const _CitySheet({required this.initial, required this.maxLength});

  @override
  State<_CitySheet> createState() => _CitySheetState();
}

class _CitySheetState extends State<_CitySheet> {
  late final TextEditingController _q = TextEditingController(text: widget.initial);

  @override
  void dispose() {
    _q.dispose();
    super.dispose();
  }

  String _norm(String s) => s.trim().toLowerCase().replaceAll(RegExp('[أإآ]'), 'ا').replaceAll('ة', 'ه').replaceAll('ى', 'ي');

  @override
  Widget build(BuildContext context) {
    final ar = AppLocale.instance.isArabic;
    final q = _norm(_q.text);
    final list = [for (final c in kCities) if (q.isEmpty || _norm(c.$1).contains(q) || _norm(c.$2).contains(q)) c];
    final typed = _q.text.trim();
    final exact = kCities.any((c) => _norm(c.$1) == q || _norm(c.$2) == q);
    final h = MediaQuery.sizeOf(context).height;
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
      child: SizedBox(
        height: h * 0.85,
        child: Column(
          children: [
            const SizedBox(height: 10),
            Container(width: 48, height: 5, decoration: BoxDecoration(color: const Color(0xFFD8CCF0), borderRadius: BorderRadius.circular(4))),
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 8),
              child: Text(tr2('اختار مدينتك', 'Choose your city'), style: const TextStyle(fontFamily: 'Tajawal', fontSize: 22, fontWeight: FontWeight.w900, color: authInk)),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: TextField(
                key: const ValueKey('city_search'),
                controller: _q,
                maxLength: widget.maxLength,
                onChanged: (_) => setState(() {}),
                style: const TextStyle(fontFamily: 'Tajawal', fontSize: 19, fontWeight: FontWeight.w800, color: authInk),
                decoration: InputDecoration(
                  counterText: '',
                  hintText: tr2('دوّر أو اكتب مدينتك', 'Search or type your city'),
                  prefixIcon: const Icon(Icons.search_rounded, color: authPurple),
                  filled: true,
                  fillColor: const Color(0xFFF4F0FC),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(30), borderSide: BorderSide.none),
                ),
              ),
            ),
            if (typed.isNotEmpty && !exact)
              ListTile(
                key: const ValueKey('city_use_typed'),
                leading: const Icon(Icons.edit_location_alt_rounded, color: authPurple),
                title: Text(tr2('استخدم «$typed»', 'Use "$typed"'), style: const TextStyle(fontFamily: 'Tajawal', fontSize: 18, fontWeight: FontWeight.w900, color: authPurple)),
                onTap: () => Navigator.pop(context, typed),
              ),
            const SizedBox(height: 4),
            Expanded(
              child: Scrollbar(
                thumbVisibility: true,
                child: ListView.separated(
                  key: const ValueKey('city_list'),
                  padding: const EdgeInsets.fromLTRB(12, 0, 12, 16),
                  itemCount: list.length,
                  separatorBuilder: (_, _) => const Divider(height: 1, color: Color(0xFFEDE6FA)),
                  itemBuilder: (context, i) {
                    final c = list[i];
                    final name = ar ? c.$1 : c.$2;
                    return ListTile(
                      key: ValueKey('city_${c.$2}'),
                      minTileHeight: 56,
                      leading: const Icon(Icons.location_on_rounded, color: authPurple),
                      title: Text(name, style: const TextStyle(fontFamily: 'Tajawal', fontSize: 19, fontWeight: FontWeight.w800, color: authInk)),
                      onTap: () => Navigator.pop(context, name),
                    );
                  },
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
