# Structure review checklist

Use on a diff, alongside the built-in `code-review` (which looks for bugs). This list looks for maintainability.

- [ ] Does each new class/function have one clear job that its name states?
- [ ] Does new logic live in a plain class that can be tested without widgets?
- [ ] Do dependencies still point inward (no UI import in domain, no data import in UI)?
- [ ] Is there an abstraction with one implementation and no reason to vary? Remove it.
- [ ] Duplicated rule or constant? Give it a single home.
- [ ] Are magic numbers and colors replaced by named tokens?
- [ ] Are errors surfaced at the right level, with no silent `catch`?
- [ ] Is any `BuildContext`, `Navigator` or `setState` used after an `await` without a `mounted` check?
- [ ] Any dead code, unused imports or commented-out blocks added?
- [ ] Are new public names consistent with the surrounding code?
- [ ] Is there a test for the new rule, including an edge case and a failure case?
