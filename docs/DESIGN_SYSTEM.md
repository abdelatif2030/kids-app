# Rehlaty design system (what exists today)

Two looks live side by side on purpose. They are not merged yet: unifying them is a visual decision for the owner.

| Role | Used for | Tokens | Look |
|---|---|---|---|
| Child | child shell, journey, games, stories, stickers | `RC` in `lib/journey/ui/kit.dart` | pastel, big rounded tiles, outline ink, scene background |
| Adult | onboarding, parent settings, dashboard, teachers, printables | `DS` in `lib/design/tokens.dart` | calm, white cards, one primary color, 56 dp tap targets |

## Shared building blocks
- `lib/design/layout.dart` - `WindowClass` (compact < 600, medium < 1024, expanded), `ResponsiveBody`, `CenteredList`
  (a ListView capped at 720 dp), `columnsFor`.
- `lib/design/focusable_tap.dart` - tap + Tab/Enter/Space + hover + focus ring + click cursor. Use it instead of a bare
  `GestureDetector` for anything a person can choose. Pan gestures (drawing, tracing) cannot be keyboard-only.
- `lib/design/components.dart` - `SectionHeader` (semantic heading used to group settings), `showToast` (the one
  "saved" confirmation), plus the older form/card components.
- `GameScaffold` (`lib/games/game_common.dart`) - every learning game: title, one-line instruction, and
  `confirmLeave` (a half-played game asks before leaving; Escape and "Keep playing" stay).

## Rules for new screens
1. Pick the role first (child or adult) and use that role's tokens only.
2. Every choice is a `FocusableTap` / Material button; every icon-only control has a tooltip or Semantics label.
3. Text through `tr2(ar, en)` or the dictionary; never hard-code one language.
4. Lists use `CenteredList`; tests must pass at 320 x 1.6 text, plus 360 / 768 / 1280 in `responsive_matrix_test`.
5. "Saved" is shown only after the write finished (`showToast` after `await`).
6. Rewards: one star only for a first finished activity; no loss, no streak, no random draw.
7. Empty states say what is missing and what to do; error states offer "Try again".

## Decisions taken (2026-10-29, owner said "do the recommended")
- Palettes: RC and DS are now one family. DS uses RC's ink (#2D3A5C), a blue primary (#3F5FB8) from the same hue as the
  RC outline, a pale blue soft tone and blue-grey borders; the child side stays pastel and rounded. The parent area
  stays calm and plain (not a child look). Corner radii were left as they are (20 / 28 dp); change only after a visual review.
- Tablet/desktop landscape games: on a window >= 900 dp wide and clearly landscape, `GameScaffold` moves the
  instruction into a 300 dp side card and centres the board in the rest.
- Router / deep links: NOT built, on purpose. Child mode must be started by the parent, so a URL must not open child
  screens directly. Refresh restarts at the picker; saved progress is kept. Revisit only for parent/teacher pages.
