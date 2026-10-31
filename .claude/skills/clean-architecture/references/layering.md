# Layering a feature

Folder shape that scales without ceremony (adapt names to the project):

```
feature/
  domain/    pure Dart: models, rules, repositories (abstract). No Flutter, no I/O packages.
  data/      implementations of repositories (storage, network). Maps raw data to domain models.
  state/     controllers (ChangeNotifier / streams) that use domain and expose view state.
  ui/        screens and widgets. Read state, call controller methods. No business rules.
```

## Dependency rules
- ui -> state -> domain <- data. `data` and `ui` never import each other.
- Inject repositories through the constructor (a default argument is fine); tests pass fakes.
- A repository interface is justified when there are two implementations (real and fake) or a boundary you must stub. Otherwise use the concrete class.

## Boundaries and data
- Convert at the edge: JSON/Firestore maps become typed models in `data`; the rest of the app never sees raw maps.
- Validate input once, at the boundary, with a function that returns a reason or null (easy to test).
- Version stored data (a small `v` field) and read defensively: damaged storage must never crash the app.

## Splitting a big widget
1. Identify independent regions (header, list, footer, dialog).
2. Extract each as its own `StatelessWidget` taking only the data and callbacks it needs.
3. Move state that only one region uses into that region.
4. Add a widget test per extracted piece that renders it with plain arguments.

## Smells and the fix
- God class (>400 lines, many responsibilities): split by responsibility, not by line count.
- Shotgun surgery (one change touches many files): the rule is duplicated; give it one home.
- Primitive obsession (ids, ages, minutes as bare `int`/`String`): wrap in a small type or constants.
- Callback pyramids: use a controller with named methods.
