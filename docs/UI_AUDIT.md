# Rehlaty UI/UX audit (Phase 1)

Baseline before any UI change: branch `feature/rehlaty`, 637 tests passing, `flutter analyze` shows only the
old lint/warnings (the unused `_round` field and a few info lints). Nothing was run on a real device or in a
real browser by a person yet. Where this audit uses screenshots, they come from a Flutter web build driven
by a headless browser in the cloud session, not from a phone.

## What already works (keep)
- Design tokens exist (`lib/design/tokens.dart`): colors, spacing, radii, type scale, focus color, a 560/960
  content width, breakpoints 600 / 1024, 56 dp tap target. Shared components (`AppButton`, `OptionCard`, empty /
  error / skeleton states, dialogs, toasts) exist in `lib/design/components.dart`.
- Arabic is the default and the whole interface switches to English (RTL <-> LTR) with a tested dictionary.
- Text size and reduced motion settings exist and are applied at the app root.
- The 320 px / 1.6x text accessibility test matrix passes for the main flows.
- The child home is a single centred column limited to 560 dp, so it never stretches on wide windows.

## Findings (by area)

### Inconsistent styles
1. Two palettes: the child area uses the pastel `RC` colors (`journey/ui/kit.dart`), onboarding and parent use `DS`.
   Corner radii (12 / 16 / 18 / 20 / 24 / 26 / 28) and shadow styles vary screen to screen.
2. Many screens build their own `Card` / `RCard` look; the child home stacks many cards (hero, feeling, My day
   tiles, surprise, achievement, path, shortcuts, wins, lands, more) so it reads dense on a phone.

### Mobile
3. Navigation is a hand-built bottom row (`child_shell.dart`) with fixed 56 x 52 icons; fine at 320 px, but it is
   not a standard `NavigationBar` (no built-in semantics for selected state beyond the custom Semantics).
4. Several screens use fixed-height boxes (`SizedBox(height: 120/220...)`) that depend on text size.
5. Back navigation relies on app bars; the child shell correctly asks for the parent PIN.

### Tablet / medium
6. Only 6 files read the window width (`LayoutBuilder` / `MediaQuery.sizeOf`). Everything else is one centred column
   or a plain `Wrap`; on a tablet the app looks like a stretched phone with empty side areas.
7. The child shell always uses a bottom bar, even on a 1000 px wide window.

### Desktop / web
8. Keyboard: of 21 `GestureDetector`s, only the shared `Tappable` handles focus. The ten educational games, the
   memory/colour/animal games, the avatar picker, the word-book tiles and the feeling faces cannot be reached with
   Tab or activated with Enter/Space. This is the biggest web-accessibility gap.
9. No visible hover state anywhere except default Material buttons; no `click` cursor on custom tiles.
10. No `ScrollBehavior`: on desktop browsers lists cannot be dragged with the mouse and show no scrollbar.
11. `web/index.html` still says title "kids_app" and description "A new Flutter project."; no `lang`.
12. Browser back/forward: the app uses `Navigator.push` with unnamed routes. Whether the browser Back button pops a
    page or leaves the site was NOT verified here; it needs a manual check in a real browser.
13. Parent, teacher and library screens are plain `ListView`s with no maximum width, so on a 1366 px window text
    lines and cards stretch across the whole window.

### RTL / LTR
14. Direction is handled at the app root. Directional icons use `chevron_left` in several RTL places; two games
    force `TextDirection.ltr` on purpose (numerals, board columns). Mixed Arabic/English strings were checked
    only through the dictionary tests, not visually in a browser.

### Accessibility
15. Contrast of the pastel palette against white backgrounds is mostly fine (dark ink text), but pastel borders
    (`RC.outline`) on pastel fills are low contrast for state indication in some tiles (selection is also shown by a
    thicker border or a check on the newer components, not on every old tile).
16. Touch targets: most are >= 48 dp; small exceptions are the heart button (48), tooltips on icon buttons, and the
    feeling faces (52).
17. Screen-reader labels exist on most custom tiles; the old games label their cards less consistently.

### Games
18. All ten learning games follow the same completion/reward rule and are tested at 320 px. Layout is a single
    centred column; on wide windows the answer buttons sit in a narrow strip with large empty margins.

### Parent and teacher
19. Parent settings is a long single list (about 25 entries) with no grouping headings; on desktop it would be easier
    as two columns or grouped sections.
20. Teacher detail and the portfolio are single-column; on wide windows the portfolio could be a grid.

## Prioritized plan
| # | Work | Effort | Risk |
|---|---|---|---|
| 1 | Layout primitives: window classes, `ResponsiveBody`, `AdaptiveNav` (bar / rail) | small | low |
| 2 | `FocusableTap` (focus, Enter/Space, hover, cursor) and use it in all games and pickers | medium | low (tests tap by key) |
| 3 | App theme: focus/hover colors, scrollbars, mouse-drag scroll behaviour, web title/description | small | low |
| 4 | Child shell: rail on medium/expanded; child home two columns on expanded | medium | medium |
| 5 | Width limits and grouped sections for parent settings, teacher detail, portfolio grid, library | medium | low |
| 6 | Responsive test matrix (3 widths x Arabic/English) for the main screens | medium | none |
| 7 | Palette/radius unification between RC and DS | large | medium (not planned now) |

Items 1-6 are done in the following phases. Item 7 is left as a recommendation: it touches almost every child
screen and needs your visual review first.

## Not verifiable here (needs a person)
Real phone and tablet behaviour, browser Back/Forward, refresh behaviour, screen readers (TalkBack / VoiceOver /
NVDA), real keyboard use, print and file dialogs, and a visual review of the new layouts.
