import 'package:flutter/foundation.dart' show kReleaseMode;

/// The release gate for the online features (accounts, family chat, calls, voice/video messages, teacher service).
///
/// Owner decision (latest, supersedes 2026-10-31): Release 1 is the OFFLINE/local app. All online features stay gated OFF;
/// their code and data are kept for a later online-activation phase. Flip this to true only for that phase, and a feature is
/// then only exposed when it can be safely backed. Every condition below must be true at the same time; each is a plain constant or a check on real configuration,
/// and each starts FALSE/unsatisfied because the evidence does not exist yet. Nothing here fakes a backend and nothing turns
/// a feature on just because its screen exists. A condition is flipped only by the developer/owner WITH the evidence listed
/// in `docs/ONLINE_RELEASE_GATE.md`.
const bool kOnlineFeaturesIntended = false;

/// True only when in-app deletion of an online account and its records exists, works and has been tested (Apple 5.1.1(v),
/// Google Play account-deletion policy). It does not exist yet: see `docs/ACCOUNT_DELETION_DESIGN.md`.
const bool kAccountDeletionReady = false;

/// True only after `firestore.rules` were reviewed, published by the owner to the real project and the family/teacher flows
/// were tested against that real backend with real devices. The rules pass the LOCAL emulator tests only so far.
const bool kBackendVerified = false;

/// DEVELOPMENT ONLY. `flutter run --dart-define=ONLINE_DEV=true` opens the gate in debug and profile builds so the
/// owner can try sign-up, login, the teacher service and family chat against their own Firebase project. It does
/// nothing in a release build (`kReleaseMode`), never changes the shipped constants above, and the real Firebase
/// options are still required. Release 1 stays offline.
const bool kOnlineDevOverride = bool.fromEnvironment('ONLINE_DEV');

enum OnlineGateReason {
  notIntended,
  firebaseNotConfigured,
  accountDeletionMissing,
  backendUnverified,
}

class OnlineGateStatus {
  final List<OnlineGateReason> reasons;
  const OnlineGateStatus(this.reasons);
  bool get open => reasons.isEmpty;
}

/// [firebaseConfigured] is true when `lib/firebase_options.dart` holds a real project's values (not `REPLACE_ME`).
OnlineGateStatus evaluateOnlineGate({
  required bool firebaseConfigured,
  bool intended = kOnlineFeaturesIntended,
  bool accountDeletion = kAccountDeletionReady,
  bool backendVerified = kBackendVerified,
  bool devOverride = kOnlineDevOverride && !kReleaseMode,
}) => devOverride
    ? OnlineGateStatus([
        if (!firebaseConfigured) OnlineGateReason.firebaseNotConfigured,
      ])
    : OnlineGateStatus([
        if (!intended) OnlineGateReason.notIntended,
        if (!firebaseConfigured) OnlineGateReason.firebaseNotConfigured,
        if (!accountDeletion) OnlineGateReason.accountDeletionMissing,
        if (!backendVerified) OnlineGateReason.backendUnverified,
      ]);

/// What the last start-up decided (read by the "not available" screens).
OnlineGateStatus lastOnlineGate = const OnlineGateStatus([
  OnlineGateReason.notIntended,
  OnlineGateReason.firebaseNotConfigured,
  OnlineGateReason.accountDeletionMissing,
  OnlineGateReason.backendUnverified,
]);
