import 'call_models.dart';

/// Signalling for calls (who is calling whom, and the connection details). The audio itself goes directly
/// between the two devices (WebRTC); nothing is recorded or stored by the server.
abstract class CallRepository {
  /// Starts a ringing call and returns its id. [offer] is the caller's session description.
  Future<String> startCall({
    required String familyId,
    required String childId,
    required String childName,
    required String relUid,
    required CallFrom from,
    required Map<String, String> offer,
  });

  /// Calls that are ringing for ME: a relative sees calls from the parent; the parent sees calls from relatives.
  Stream<List<CallInfo>> watchIncoming(String familyId);

  Stream<CallInfo?> watchCall(String familyId, String callId);

  /// The callee accepts with their answer.
  Future<void> answerCall(String familyId, String callId, Map<String, String> answer);

  /// declined / ended / missed.
  Future<void> setCallStatus(String familyId, String callId, String status);

  Future<void> addCandidate(String familyId, String callId, CallFrom from, Map<String, dynamic> candidate);

  /// New network candidates from the OTHER side.
  Stream<Map<String, dynamic>> watchCandidates(String familyId, String callId, CallFrom other);
}
