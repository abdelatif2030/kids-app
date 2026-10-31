import 'dart:typed_data';

import 'family_models.dart';

class FamilyException implements Exception {
  final String message;

  /// True when the server could not be reached (no internet). The message can be tried again later; any other
  /// failure is a refusal that retrying will not fix.
  final bool offline;
  const FamilyException(this.message, {this.offline = false});
  @override
  String toString() => message;
}

/// Everything the family chat needs from a server. The Firebase version is in firebase_family_repository.dart;
/// tests use an in-memory one. The signed-in account is the parent's (family id = parent uid) or a relative's.
abstract class FamilyRepository {
  String? get uid;

  // --- user name (relatives) ----------------------------------------------------
  /// The user name the signed-in relative chose, or null if they have not chosen one yet.
  Future<String?> myUsername();

  /// Reserves a unique user name for the signed-in relative. Throws [FamilyException] if it is taken or invalid.
  Future<void> claimUsername(String username);

  // --- parent side -----------------------------------------------------------
  Future<List<Relative>> relatives();

  /// pending -> active, active <-> paused, any -> removed. Only the parent calls this.
  Future<void> setRelativeStatus(String relUid, String status);

  /// Turns voice calls with this relative on or off. Off by default.
  Future<void> setRelativeCalls(String relUid, bool on);

  /// Turns video calls with this relative on or off. Off by default.
  Future<void> setRelativeVideo(String relUid, bool on);

  /// Turns voice messages with this relative on or off. Off by default.
  Future<void> setRelativeVoice(String relUid, bool on);

  /// A short note about the next planned call (<= 60 characters; empty clears it). Parent only.
  Future<void> setRelativeNextCall(String relUid, String text);
  Future<void> setRelativeChildren(String relUid, Map<String, String> children);

  // --- connection requests ------------------------------------------------
  /// The parent asks someone, by the user name that person chose, to be able to talk with the chosen children.
  /// Only an exact user name works (there is no search and no list of people). Throws if nobody has that name.
  Future<ConnectRequest> sendConnectRequest({
    required String parentName,
    required String toName,
    required String relation,
    required Map<String, String> children,
  });

  /// The parent's requests that are still waiting.
  Future<List<ConnectRequest>> sentRequests();
  Future<void> cancelRequest(String requestId);

  /// Every request the parent sent, newest first (pending, accepted, declined, cancelled), at most [limit].
  Future<List<ConnectRequest>> requestHistory({int limit = 30});

  /// Requests addressed to the signed-in person that are still waiting. Updates live.
  Stream<List<ConnectRequest>> watchIncomingRequests();

  /// Accepting makes the person an active relative at once (the parent started it); declining changes nothing else.
  Future<void> respondToRequest(
    ConnectRequest request, {
    required bool accept,
    required String name,
  });

  // --- relative side ---------------------------------------------------------
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

    /// The message's own id. Sending the same [clientId] again never makes a second message (used by the offline queue).
    String? clientId,
  });

  /// Sends a recorded voice message (<= 30 s, <= 300 KB). The sound is stored in a small separate document.
  Future<void> sendVoice({
    required String familyId,
    required String childId,
    required String childName,
    required String relUid,
    required Side from,
    required Uint8List bytes,
    required String mime,
    required int secs,
  });

  /// The sound of one voice message, or null if it was removed (they are removed after 14 days).
  Future<VoiceClip?> loadVoice(
    String familyId,
    String voiceId, {
    required String relUid,
  });

  /// Parent only: removes voice recordings older than [days]. Returns how many were removed.
  Future<int> purgeOldVoices(String familyId, {int days = kVoiceKeepDays});

  Stream<List<FamilyMessage>> watch({
    required String familyId,
    required String childId,
    required String relUid,
  });

  /// Parent only: every message of the family, newest last (the parent can read all conversations).
  Future<List<FamilyMessage>> allMessages(String familyId);

  /// The newest [limit] messages of the whole family, oldest first. Used for the new-message count so that a busy
  /// family does not use up the free database reads.
  Future<List<FamilyMessage>> recentMessages(String familyId, {int limit = 80});
  Future<void> clearThread({
    required String familyId,
    required String childId,
    required String relUid,
  });
}
