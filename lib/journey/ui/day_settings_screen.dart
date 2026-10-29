import '../../design/layout.dart';
import 'package:flutter/material.dart';

import '../../design/components.dart' show showToast;
import '../../l10n/strings.dart';
import '../day_prefs.dart';
import '../my_day.dart';

/// Parent: which stations of «يومي» the child sees, and whether the daily surprise is offered.
class DaySettingsScreen extends StatefulWidget {
  const DaySettingsScreen({super.key});

  @override
  State<DaySettingsScreen> createState() => _DaySettingsScreenState();
}

class _DaySettingsScreenState extends State<DaySettingsScreen> {
  DayPrefs? _prefs;
  String? _note;

  @override
  void initState() {
    super.initState();
    DayPrefs.load().then((p) {
      if (mounted) setState(() => _prefs = p);
    });
  }

  /// Shows the choice at once, then saves it (so quick taps never act on an old state).
  void _set(DayPrefs next) {
    setState(() => _prefs = next);
    DayPrefs.save(next).then((_) {
      if (mounted) showToast(context, tr2('تم الحفظ', 'Saved'));
    });
  }

  @override
  Widget build(BuildContext context) {
    final p = _prefs;
    return Scaffold(
      appBar: AppBar(title: Text(tr2('محطات «يومي»', 'My day stations'))),
      body: p == null
          ? const Center(child: CircularProgressIndicator())
          : CenteredList(
              children: [
                Padding(
                  padding: const EdgeInsets.all(16),
                  child: Text(
                    tr2('اختر المحطات التي تظهر لطفلك على الشاشة الرئيسية. تبقى محطة واحدة على الأقل. لا توجد عقوبة إن لم ينهِ الطفل شيئاً.',
                        'Choose the stations your child sees on the home screen. At least one stays on. There is no penalty if the child does nothing.'),
                  ),
                ),
                for (final s in Station.values)
                  SwitchListTile(
                    key: ValueKey('day_${s.name}'),
                    title: Text(stationTitle(s)),
                    subtitle: Text(stationSubtitle(s)),
                    value: p.stations.contains(s),
                    onChanged: (on) {
                      final cur = _prefs ?? p;
                      final next = {...cur.stations};
                      on ? next.add(s) : next.remove(s);
                      if (next.isEmpty) {
                        setState(() => _note = tr2('تبقى محطة واحدة على الأقل.', 'At least one station must stay on.'));
                        return;
                      }
                      setState(() => _note = null);
                      _set(cur.copyWith(stations: next));
                    },
                  ),
                const Divider(),
                SwitchListTile(
                  key: const ValueKey('day_surprise'),
                  title: Text(tr2('مفاجأة اليوم', 'Today\'s surprise')),
                  subtitle: Text(tr2('لعبة أو نشاط مختلف يمكن للطفل تغييره أو تخطيه.', 'A different game or activity the child can change or skip.')),
                  value: p.surprise,
                  onChanged: (v) => _set((_prefs ?? p).copyWith(surprise: v)),
                ),
                if (_note != null) Padding(padding: const EdgeInsets.all(16), child: Text(_note!, style: const TextStyle(color: Colors.red))),
              ],
            ),
    );
  }
}
