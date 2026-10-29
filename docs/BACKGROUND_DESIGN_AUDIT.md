# Background and visual world: audit and decisions (2026-10-29)

Screenshots in `docs/screens/bg_before_*.png` and `bg_after_*.png` come from the Flutter test renderer
(`test/visual_shots_test.dart`, run only when `SHOTS_DIR` is set). They show the real widgets and the real Tajawal font,
but the renderer has **no emoji font and no Material icon font**, so emoji and icons appear as empty squares/boxes. They
are not browser or phone screenshots. A browser/device visual check is still to be done by a person.

## 1. What existed (audit)
- **Assets:** none for pictures. `assets/` holds audio, fonts (Tajawal), curriculum JSON and `videos.json`. No image
  files, so nothing to reuse and nothing to download.
- **Two competing backgrounds:** `PastelBackground` (`lib/journey/ui/kit.dart`, ~25 screens) drew three flat translucent
  circles sized by the **window width**; `SceneBackground` (`lib/ui.dart`, older screens: «دروسي», games list) drew a
  separate code-drawn meadow. Two styles, one app.
- **Desktop stretching:** the circles scaled with the window: at 1280 px the lavender circle covered a third of the
  page (see `bg_before_game_odd_1280.png`). The artwork was not restrained on wide windows.
- **No identity per area:** letters, listening, numbers and stories all looked the same, so nothing told a child where they
  were.
- **Seam under the app bar:** `Scaffold` background (`RC.bg`, #E6F1FF) differed from the artwork below it; on screens whose
  background changes a visible strip appears at the top.
- **Contrast:** text sat on very light flat colours (fine), but there was no check that any future artwork stays readable.
- **Overflow/performance:** painters were simple and did not overflow; no animation. No problems found there.
- **Inconsistent card radii/shadows** (RC 20-28, DS 12-28) were noted but NOT changed: this task is backgrounds only.

## 2. The system created (`lib/design/worlds.dart`, no new asset, no package)
`WorldBackground(world, quiet)` draws a soft sky/ground gradient and one layer of decoration, all in code:
| World | Look | Used by |
|---|---|---|
| journey | sky, sun, clouds, hills, flowers, a gentle path | home, map, subjects, games list, odd-one-out, sort, match, four in a row, activities, most screens (default) |
| forest | trees, leaves, grass | letters (3 screens + guided lesson), tracing, letter fishing, word book |
| ocean | water, bubbles, a little fish, seaweed | listening games, vocabulary library |
| space | a LIGHT sky with friendly planets and stars | numerals, patterns, compare (numbers) |
| story | warm corner: lamp glow, books, cushion | story library and player |
| calm | almost nothing | long text, forms |
`quiet: true` keeps only the ground line (used for the story library/player, lesson instructions and onboarding).

Rules built into the component (each has a test in `test/worlds_test.dart`):
- Decoration is behind the content, in `IgnorePointer` + `ExcludeSemantics` + `RepaintBoundary`: it cannot take taps,
  mouse, keyboard focus or screen-reader attention, and it repaints only when the world changes.
- **No animation** at all, so reduced motion needs no special case and nothing moves behind text or controls.
- Artwork size is capped by `min(shortest side, 520)`: on a desktop window it stays the same size at the edges instead
  of stretching; the sky gradient fills the window.
- **Not mirrored** for right-to-left (a test proves LTR and RTL give the same picture): the sun is always in the same corner.
- Dark ink on every world's sky keeps a contrast of 8.3-10.7:1 (required: at least 7:1, tested).
- Content stays on its own white cards; the decoration never sits behind a question, board or button text.

Also: the app theme's scaffold colour is now the top of the journey sky and app bars have no surface tint, so the app bar
blends into the artwork. `SceneBackground` now delegates to the journey world (the old 100-line painter was removed).
`PastelBackground` keeps its API (new optional `world` and `quiet`), so ~25 screens changed look without edits.

## 3. Screens changed (representative set; the rest inherit the journey world)
Child home and learning map (journey), Games tab and subjects, all six learning games and the three listening games,
letters screens (forest), vocabulary (ocean), story library and player (story, quiet), lesson instructions and onboarding
(quiet). Old `SceneScaffold` screens (subjects, games list) now share the journey look.

## 4. Assets
No new image files. The only new files are code (`lib/design/worlds.dart`) and 12 documentation screenshots
(`docs/screens/bg_*.png`, 36-86 KB each, 744 KB in total; they are documentation, not bundled into the app).

## 5. Checks performed
- Widget tests (`test/worlds_test.dart`, 27 tests): contrast, no tap interception, no extra semantics, no scheduled
  frames (no animation), repaint rule, painting at 9 sizes including 0x0, all six worlds in a scrolling list at 320, 360,
  390, 768, 1024 and 1280 wide in RTL and LTR at 1.6x text (no exception, the world fills the window, scrolling works),
  LTR/RTL identical artwork, the right world on the right screens.
- All older suites (responsive matrix, accessibility at 320 px, games, stories) pass unchanged.
- NOT done: a browser or phone visual check, real-device performance, TalkBack/VoiceOver.

## 6. Visual states
Normal, hover, focus, pressed, disabled, loading, empty, error and completed states belong to the foreground widgets
(cards, buttons, `FocusableTap`, `EmptyState`, `ErrorState`, `GameFinishPanel`), which are unchanged and sit on opaque or
very light surfaces. The background never changes with state, so it cannot imply failure; the finish panel's star
is still the only celebration and is brief. Optional extra celebration was not added.

## 7. Decisions still needed from you (visual)
1. Do you like the ocean/space/forest/story looks, or should some worlds be calmer or removed? (Fewer worlds = more consistency.)
2. Should the **story library** also have the warm lamp/books corner (now quiet to keep the long list clear)?
3. Real illustrated artwork (a designer) could replace the code-drawn shapes later: the component is the one place to change.
   Needed assets if you go that way: one 2x PNG/WebP per world, about 1600x1000, under 150 KB each, for the bottom and top
   decoration layers (transparent), for the six worlds.
4. Palette and radius unification between the child (RC) and adult (DS) looks is still a separate decision.
