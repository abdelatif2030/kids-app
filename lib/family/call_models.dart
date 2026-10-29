// Voice calls between the parent's device (the child is next to the parent) and an approved relative.
// Audio only, never recorded, never stored. See docs/FAMILY_CHAT_DESIGN.md.

const callRinging = 'ringing';
const callAccepted = 'accepted';
const callDeclined = 'declined';
const callEnded = 'ended';
const callMissed = 'missed';

/// A call that rings longer than this is treated as missed.
const kRingSeconds = 45;

enum CallFrom { parent, relative }

class CallInfo {
  final String id;
  final String familyId;
  final String childId;
  final String childName;
  final String relUid;
  final CallFrom from;
  final String status;
  final Map<String, String> offer;
  final Map<String, String>? answer;
  final DateTime createdAt;
  const CallInfo({
    required this.id,
    required this.familyId,
    required this.childId,
    required this.childName,
    required this.relUid,
    required this.from,
    required this.status,
    required this.offer,
    this.answer,
    required this.createdAt,
  });

  bool get ringing => status == callRinging;

  /// Still worth ringing for: an old "ringing" call (the caller gave up or closed the app) is ignored.
  bool freshAt(DateTime now) => now.difference(createdAt).inSeconds < kRingSeconds + 15;

  CallInfo copyWith({String? status, Map<String, String>? answer}) => CallInfo(
        id: id,
        familyId: familyId,
        childId: childId,
        childName: childName,
        relUid: relUid,
        from: from,
        status: status ?? this.status,
        offer: offer,
        answer: answer ?? this.answer,
        createdAt: createdAt,
      );
}

/// The state of one call as the screen shows it.
enum CallPhase { starting, ringing, connecting, connected, ended, declined, missed, failed }

/// Public STUN only. Calls between two phones on the same Wi-Fi or on most home networks work; behind some
/// mobile carriers or strict firewalls a TURN relay is required. Add your own TURN server here when you have
/// one (never put its password in the repository: pass it at build time).
const kStunServers = ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'];
