# UI audit against the 2026-10-29 concept sheet

Reference: the user's concept image (welcome, profile picker, home with a suggested-activity card, learning activity, interactive story, drawing studio,
word builder, gallery, parent dashboard, family chat, video call, offline state, permissions, language picker, tablet/desktop home). It is a visual
reference only: nothing was copied pixel-for-pixel, no artwork from the image is used, and no feature was added only because the image shows it.

## Already close to the reference (existing code)
| Reference screen | Existing implementation |
|---|---|
| Language picker (Arabic RTL / English LTR) | first-screen language choice (`AppLocale`, onboarding) |
| Profile picker with avatars | who-plays screen with `ChildAvatar` (9 code-drawn avatars) |
| Home with suggested-activity card + 4 section shortcuts | `HomeTab`: «يومي», **new** `RecommendationCard` (from real recorded rounds), shortcuts, wide two-column layout |
| Learning activity with picture + 3 choices + audio button | `ChoiceGame` / listening games (wrong answer only fades) |
| Drawing studio (tools, undo/redo, save) | `DrawingScreen` + `DrawingModel` |
| Word builder | `WordBuilderScreen` |
| Gallery (stories / drawings tabs) | `ChildGalleryScreen` (grid, rename; no tabs) |
| Offline state | **new** `OfflineBanner` + `OfflineGuideScreen` (honest capability list) |
| Tablet / desktop home | side rail + two columns from 900 px |

## Gaps (not done in this step)
1. **Welcome screen artwork**: the reference shows a character illustration. The app has only the code-drawn mascot/avatars; no approved illustration assets exist, so none were made up.
2. **Level and star counters** in the home header ("مستوى 2", ⭐ 2): not added. CLAUDE.md allows stars only for finishing activities and the app keeps no accumulating counter or levels. A real counter would need your decision.
3. Parent dashboard in the reference has a donut chart and skill bars; the current dashboard has text/bars for real data. A chart with a text equivalent is possible later.
4. Gallery tabs (stories | drawings), drawing-tool rail with a vertical layout on tablets, and a call screen with a large remote video and floating self-view: current screens are functional but plainer.
5. Permissions screen (microphone / camera / notifications rows): the app asks at the moment of use; a summary screen was not built and notifications do not exist.
6. Not visually verified in a browser or on a device in this step.

## Plan (small, reversible steps)
1. Home: tune `RecommendationCard` proportions on tablets; optional "level"-free greeting header polish (after your decision on counters).
2. Shared: one `ScreenHeader` component (title + back + optional avatar) used by games, studio, gallery.
3. Gallery tabs and drawing-tool rail.
4. Dashboard chart with textual equivalent (uses `skill_state`).
5. Call screen layout.
Each step needs widget tests at 320/768/1280 in ar/en (pattern in `test/recommendation_test.dart`).

## Done now
The suggested-activity card exists on the child home with real data (`lib/adaptive/recommendation_card.dart`, tests in `test/recommendation_test.dart`) and the offline indicator; no other visual change was made, to keep this step low-risk.
