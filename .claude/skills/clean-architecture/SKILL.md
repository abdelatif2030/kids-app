---
name: clean-architecture
description: Use when designing or restructuring code, splitting a large file or widget, naming things, deciding where logic belongs, or reviewing structure. Covers clean code, SOLID, layering and dependency direction, with Flutter and Dart guidance. Not for style nitpicks or formatting.
---

# Clean code and software architecture

Goal: code a stranger can change safely. Prefer the smallest structure that keeps change cheap.

## Workflow
1. Read the surrounding code first. Match its names, layering and comment density; do not introduce a new pattern for one file.
2. Name the responsibility of the unit you are touching in one sentence. If it needs "and", split it.
3. Put logic where it can be tested without UI: pure functions and plain classes first, widgets last.
4. Keep dependencies pointing inward: UI -> state/controller -> domain -> data. Domain never imports Flutter or a storage package.
5. Make the change, then re-read the diff for needless indirection (a class or interface with one caller and no reason to vary).

## Rules of thumb
- Functions do one thing at one level of abstraction; if you need a comment to explain a block, extract it with a good name.
- Prefer composition over inheritance; prefer small immutable value classes; make illegal states unrepresentable (enums, sealed classes).
- No boolean flag parameters that switch behaviour; split the function or use an enum.
- Errors: throw or return typed failures at the boundary; never swallow; no `catch (_) {}` without a stated reason.
- Delete dead code, commented-out code and unused parameters instead of keeping them "just in case".
- Comments explain why, not what. Do not narrate the code.

## Flutter and Dart specifics
- A widget file holds one screen or one reusable widget. A `build` method over ~80 lines or with deep nesting: extract widgets (classes, not helper methods that return widgets) so they get their own rebuild boundary.
- Keep business rules out of `build`, `initState` and callbacks: move them to a plain Dart class and test that.
- Use `const` constructors and `final` fields; prefer `sealed class` plus exhaustive `switch` for states.
- State management: follow what the project already uses; do not add a package for one screen. Expose `ChangeNotifier`/`ValueNotifier` or streams from a controller, and rebuild only the listening subtree (`ListenableBuilder`, `ValueListenableBuilder`).
- Do not put `BuildContext` into controllers or domain code. Pass values in, return values or events out.
- One source of truth for design tokens (colors, text styles, spacing); widgets read tokens, never hard-code them.

## When to read more
- Structuring a feature or a new module: `references/layering.md`.
- Reviewing a diff for structure and maintainability: `references/review-checklist.md` (use together with the built-in `code-review`; this does not replace it).
