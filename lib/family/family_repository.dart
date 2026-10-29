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

  // --- parent side -----------------------------------------------------------
  /// Creates a one-time invite for one relative. The parent gives the code to that person.
  Future<FamilyInvite> createInvite({required String parentName, required String relation, required Map<String, String> children});
  Future<List<Relative>> relatives();

  /// pending -> active, active <-> paused, any -> removed. Only the parent calls this.
  Future<void> setRelativeStatus(String relUid, String status);
  Future<void> setRelativeChildren(String relUid, Map<String, String> children);

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
