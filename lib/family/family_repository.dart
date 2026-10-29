import 'family_models.dart';

class FamilyException implements Exception {
  final String message;
  const FamilyException(this.message);
  @override
  String toString() => message;
}

/// Everything the family chat needs from a server. The Firebase version is in firebase_family_repository.dart;
/// tests use an in-memory one. The signed-in account is the parent's (family id = parent uid) or a relative's.
abstract class FamilyRepository {
  String? get uid;

  /// The signed-in account's e-mail (lower case), used to find requests sent to this person.
  String? get email;

  // --- parent side -----------------------------------------------------------
  /// Creates a one-time invite for one relative. The parent gives the code to that person.
  Future<FamilyInvite> createInvite({required String parentName, required String relation, required Map<String, String> children});
  Future<List<Relative>> relatives();

  /// pending -> active, active <-> paused, any -> removed. Only the parent calls this.
  Future<void> setRelativeStatus(String relUid, String status);
  /// Turns voice calls with this relative on or off. Off by default.
  Future<void> setRelativeCalls(String relUid, bool on);

  /// A short note about the next planned call (<= 60 characters; empty clears it). Parent only.
  Future<void> setRelativeNextCall(String relUid, String text);
  Future<void> setRelativeChildren(String relUid, Map<String, String> children);

  // --- connection requests (replace invite codes) ------------------------------------------------
  /// The parent asks someone, by e-mail, to be able to talk with the chosen children.
  Future<ConnectRequest> sendConnectRequest({
    required String parentName,
    required String toEmail,
    required String relation,
    required Map<String, String> children,
  });

  /// The parent's requests that are still waiting.
  Future<List<ConnectRequest>> sentRequests();
  Future<void> cancelRequest(String requestId);

  /// Requests addressed to the signed-in person's e-mail that are still waiting. Updates live.
  Stream<List<ConnectRequest>> watchIncomingRequests();

  /// Accepting makes the person an active relative at once (the parent started it); declining changes nothing else.
  Future<void> respondToRequest(ConnectRequest request, {required bool accept, required String name});

  // --- relative side ---------------------------------------------------------
  /// Joins a family with a code. The relative stays `pending` until the parent approves.
  Future<void> joinWithCode(String code, {required String name});

  /// The families a relative belongs to (usually one): family id and the parent's name.
  Future<List<(String familyId, String parentName)>> myFamilies();

  /// The relative's own record in one family (what they may do). Empty if none.
  Future<List<Relative>> myLinks(String familyId);

  // --- messages (both sides) ---------------------------------------------------
  Future<void> send({
    required String familyId,
    required String childId,
    required String childName,
    required String relUid,
    required Side from,
    required String kind,
    required String body,
  });
  Stream<List<FamilyMessage>> watch({required String familyId, required String childId, required String relUid});

  /// Parent only: every message of the family, newest last (the parent can read all conversations).
  Future<List<FamilyMessage>> allMessages(String familyId);
  Future<void> clearThread({required String familyId, required String childId, required String relUid});
}
