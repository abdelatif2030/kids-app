---
name: systematic-debugging
description: Use when something fails, crashes, behaves differently than expected, a test is flaky or red, or a fix did not work. Evidence-first debugging workflow (reproduce, isolate, hypothesize, test, fix, prevent) with Flutter and Dart tools and common causes.
---

# Systematic debugging

Do not guess and patch. Find the cause, prove it, then fix it once.

## Workflow
1. **Reproduce** the failure and write down the exact steps, inputs and environment. If you cannot reproduce it, say so and collect more evidence; do not "fix" it.
2. **Read the error** in full: message, stack trace, the first frame in your code. Note what changed recently (`git log`, `git diff`).
3. **Isolate**: shrink to the smallest case (a unit test, a minimal widget, one input). Bisect with `git bisect` or by disabling halves.
4. **Hypothesize**: write 2-3 candidate causes. For each, a cheap observation that would prove or kill it.
5. **Test the hypothesis** with a log, assertion, debugger breakpoint or a new failing test. Change one thing at a time.
6. **Fix the cause**, not the symptom. Then run the reproducer, the new test and the whole suite.
7. **Prevent**: keep the regression test; add an assertion or a clearer error where the bad state first appeared.
8. **Report** the cause, the evidence, the fix and what you did not verify.

## Rules
- Never claim a fix without re-running the reproducer.
- If two fixes in a row fail, stop and re-read the evidence; your model of the problem is wrong.
- Flaky tests have causes (time, randomness, order, shared state, async); find it, do not add retries or skips.
- Do not delete or skip a failing test to get green.

## Flutter and Dart specifics
- Read the red "EXCEPTION CAUGHT BY..." block: widget name, the failed assertion and the creator chain tell where.
- RenderFlex overflow: find the unbounded child; fix with `Expanded`/`Flexible`/scrolling or smaller content; test at 320 px and large text.
- "setState() called after dispose" / use of `context` after `await`: guard with `if (!mounted) return;`.
- "Null check operator used on a null value": find what was assumed non-null; prefer an explicit check.
- Tests hang: an endless animation or timer; `SharedPreferences` not mocked; a Future never completes.
- Async races: events arriving out of order; guard re-entrancy with a flag and make operations idempotent.
- Tools: `debugPrint`, DevTools (Inspector, Logging, Performance), `flutter run -v`, `flutter test --plain-name "..."`, `dart analyze`.

## When to read more
- Symptom table and a debugging log template: `references/playbook.md`.
