---
name: tdd-workflow
description: Use when implementing a feature or fixing a bug where behaviour can be specified by tests, or when asked for test-driven development. Red-green-refactor workflow with Flutter and Dart test patterns (unit, widget, golden-free layout checks). Not for exploratory spikes.
---

# Test-driven development

## Cycle (repeat in small steps)
1. **Red**: write one failing test for one behaviour. Run it and see it fail for the right reason.
2. **Green**: write the least code that passes. No extra features.
3. **Refactor**: clean up with the tests green. Run all tests.
4. Commit-sized steps: one behaviour per cycle.

## Rules
- Test behaviour through the public interface, not private details.
- One reason to fail per test; name it as a sentence ("a wrong tap fades the choice and gives no star").
- Cover the happy path, the edge (empty, one, max, boundary) and the failure (invalid input, refusal).
- A bug fix starts with a test that reproduces the bug.
- Never change a test to make it pass unless the requirement changed; say so when it did.
- Do not claim something is tested unless you ran the test.

## Flutter and Dart specifics
- Put rules in plain Dart classes and unit-test them with `test(...)`; they are the fastest tests.
- Widget tests: `testWidgets`, pump the widget inside `MaterialApp`, find by `Key` or text, `tester.tap`, then `pump`/`pumpAndSettle`. Use `ensureVisible`/`scrollUntilVisible` before tapping things below the fold.
- Time and randomness: inject a clock and a seeded `Random`; no `DateTime.now()` assertions that depend on the day.
- Async: `await tester.runAsync(...)` for real I/O; use fakes (in-memory repositories, fake audio/speech) instead of platform channels.
- Storage: `SharedPreferences.setMockInitialValues({})` in `setUp`; reset singletons that cache storage.
- Layout: run the screen at narrow (320 px), normal and wide sizes and with a large text scale; assert no exception (overflow) and that key widgets exist.
- Accessibility: enable semantics before pumping and assert labels for tap targets.
- Run `flutter analyze` and the full `flutter test` before saying done; report counts honestly.

## When to read more
- Patterns, fakes and test structure: `references/flutter-testing.md`.
