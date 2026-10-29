# Parent Intelligence Dashboard (2026-10-29)

## Existing reporting (kept)
`lib/dashboard_screen.dart` (week navigator, learning time, lessons, game rounds, per-day chart, skills mastered / needing practice over 3 weeks,
lessons versus weekly goals, recommendations, copyable report), `lib/library/learning_records.dart` (exposure < practice < demonstrated),
`lib/progress_store.dart` (`skill_events`, 60 days), watch history, journey progress. Everything is local and per child.

## Added
- `lib/adaptive/insights.dart` (pure): learning areas (letters/reading, vocabulary, numbers, listening, story comprehension, problem solving, creativity) built from
  the recorded skills; per area: observed rounds, right on the first try, days; estimate wording only from the evidence rules in `skill_state.dart`
  ("Too few rounds", "More practice may help", "Making progress", "Showed mastery on several days"); "practised recently" flag; week-on-week round trend; records split into
  listened/seen only, practice, showed understanding. Areas with no data are not drawn, they are listed as "no data yet". Creativity only counts saved studio creations, as practice.
- `lib/adaptive/insights_ui.dart`: section on the dashboard with loading, error + retry, empty and populated states; each area has one spoken label (observed + estimate); the bar always has the numbers as text.
- Family activities: `suggestFamilyActivities` picks real, age-fit activities from the approved library (`kRealActivities`), for areas where more practice may help (with the recorded numbers as the reason), or labelled "a general idea for this age" when there is no data. Rotates by day; no randomness; tap opens the activity library.
- Tests: `test/insights_test.dart` (20): empty history, thresholds (too few / practice / one day vs several days), area grouping, week windows and future records, child isolation, evidence split, suggestions, widget states in ar/en at 320/768/1280, error + retry, accessibility label.

## Not done / limits
No trend chart over several weeks; no "estimated" language model; usage/screen-time controls were already in Parent settings and are unchanged; no new permissions or data collection. Not seen on a device.
