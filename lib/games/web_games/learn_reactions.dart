import 'dart:async';

/// What happened inside a learning web game that a Flutter screen may want to react to (the character on the learning page).
/// Fired from LearnBridge, i.e. from REAL gameplay events (a first-try right answer, a wrong first try, a finished game).
enum LearnEvent { correct, wrong, complete }

class LearnReactions {
  LearnReactions._();
  static final StreamController<LearnEvent> _c = StreamController<LearnEvent>.broadcast();
  static Stream<LearnEvent> get stream => _c.stream;
  static int _pendingComplete = 0;

  static void emit(LearnEvent e) {
    if (e == LearnEvent.complete) _pendingComplete++;
    if (!_c.isClosed) _c.add(e);
  }

  /// True once if a game was completed since the last call (the page that opened the game celebrates when it is back).
  static bool takePendingComplete() {
    final had = _pendingComplete > 0;
    _pendingComplete = 0;
    return had;
  }
}
