import 'package:shared_preferences/shared_preferences.dart';

import 'my_day.dart';

/// What the parent chose for «يومي»: which of the four stations the child sees, and whether the daily
/// surprise is offered. At least one station is always on. Local, per device.
class DayPrefs {
  final Set<Station> stations;
  final bool surprise;
  const DayPrefs({this.stations = const {Station.learn, Station.play, Station.discover, Station.tell}, this.surprise = true});

  static const _stationsKey = 'day_stations';
  static const _surpriseKey = 'day_surprise';

  /// Stations in their natural order, only the enabled ones.
  List<Station> get active => [for (final s in Station.values) if (stations.contains(s)) s];

  DayPrefs copyWith({Set<Station>? stations, bool? surprise}) => DayPrefs(stations: stations ?? this.stations, surprise: surprise ?? this.surprise);

  static Future<DayPrefs> load() async {
    final p = await SharedPreferences.getInstance();
    final names = p.getStringList(_stationsKey);
    final chosen = {
      for (final n in names ?? const <String>[])
        for (final s in Station.values)
          if (s.name == n) s,
    };
    return DayPrefs(
      stations: chosen.isEmpty ? const {Station.learn, Station.play, Station.discover, Station.tell} : chosen,
      surprise: p.getBool(_surpriseKey) ?? true,
    );
  }

  /// Saves the choice. An empty set is refused (the child would see nothing), so all four stay on.
  static Future<DayPrefs> save(DayPrefs prefs) async {
    final fixed = prefs.stations.isEmpty ? const DayPrefs().stations : prefs.stations;
    final p = await SharedPreferences.getInstance();
    await p.setStringList(_stationsKey, [for (final s in fixed) s.name]);
    await p.setBool(_surpriseKey, prefs.surprise);
    return DayPrefs(stations: fixed, surprise: prefs.surprise);
  }
}
