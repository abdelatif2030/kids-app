# Flutter testing patterns

## Where tests go
`test/<feature>_test.dart`, one file per feature or screen. Group with `group('rules', ...)`.

## Pure logic
```dart
test('a snake moves the piece down', () {
  final g = Game(seed: 1);
  expect(g.move(from: 16, dice: 1), 6);
});
```
Inject `Random(seed)` and a clock so results are repeatable.

## Widget test skeleton
```dart
testWidgets('shows the empty message', (t) async {
  SharedPreferences.setMockInitialValues({});
  await t.pumpWidget(MaterialApp(home: MyScreen(repo: FakeRepo())));
  await t.pump();
  expect(find.byKey(const ValueKey('empty')), findsOneWidget);
});
```
- Wrap in `MaterialApp(key: UniqueKey(), ...)` when a test pumps several different widgets.
- Use `t.view.physicalSize = Size(390, 800); t.view.devicePixelRatio = 1; addTearDown(t.view.reset);` for sizes.
- Large text: wrap in `MediaQuery(data: MediaQueryData(textScaler: TextScaler.linear(1.6)), ...)`.

## Fakes over mocks
Write a small in-memory class that implements the repository interface. Offer switches such as `offline = true` to simulate failure. Prefer this to mocking libraries (no dependency).

## Animations and timers
- Endless animations make `pumpAndSettle` hang: disable them under test (a flag) or pump fixed durations.
- Timers: `await t.pump(const Duration(seconds: 15))` advances fake time.

## What to assert for a game
- Initial state, one legal move, one illegal move, the win condition, restart, pause/resume, and that no reward is given for a loss or for waiting.

## Rules/back-end tests
Use the emulator with allowed/denied cases for owner, other user, signed-out, bad field, oversize value.

## Flakiness checklist
Seed randomness, inject time, reset singletons, avoid real network, never depend on test order.
