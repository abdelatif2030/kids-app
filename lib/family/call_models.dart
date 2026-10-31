import 'package:flutter/foundation.dart' show kReleaseMode;
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

  /// A video call (camera on). Needs the parent's separate video switch for that relative.
  final bool video;
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
    this.video = false,
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
        video: video,
      );
}

/// The state of one call as the screen shows it.
enum CallPhase { starting, ringing, connecting, connected, reconnecting, ended, declined, missed, failed }

/// How long a dropped connection is given to come back before the call ends.
const kReconnectSeconds = 15;

/// Public STUN only. Calls between two phones on the same Wi-Fi or on most home networks work; behind some
/// mobile carriers or strict firewalls a TURN relay is required. Add your own TURN server here when you have
/// one (never put its password in the repository: pass it at build time).
const kStunServers = ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'];

/// The relay (TURN) service for calls over networks that block direct connections. NONE exists yet (S7): calls use STUN only and
/// may fail on some mobile networks. When a TURN service is set up, its short-lived credentials must come from the backend at call
/// time (never from a constant in the app) and be installed with [iceServersLoader]; nothing else in the call code needs to change.
const bool kTurnConfigured = false;

typedef IceServersLoader = Future<List<Map<String, dynamic>>> Function();

Future<List<Map<String, dynamic>>> stunOnlyIceServers() async => [
      for (final s in kStunServers) {'urls': s},
    ];

/// DEVELOPMENT ONLY: a TURN relay passed at run time, so calls can be tried across two different networks:
/// `--dart-define=TURN_URL=turn:host:3478 --dart-define=TURN_USERNAME=... --dart-define=TURN_CREDENTIAL=...`.
/// The values are never in the repository, and this is ignored in a release build (a shipped app must get short-lived
/// credentials from the backend instead, see docs/CALLS_SETUP.md).
const String kDevTurnUrl = String.fromEnvironment('TURN_URL');
const String kDevTurnUsername = String.fromEnvironment('TURN_USERNAME');
const String kDevTurnCredential = String.fromEnvironment('TURN_CREDENTIAL');

/// STUN plus the development TURN relay when all three values were given. [url] may list several servers separated by commas.
List<Map<String, dynamic>> iceServersWithDevTurn({
  String url = kDevTurnUrl,
  String username = kDevTurnUsername,
  String credential = kDevTurnCredential,
  bool release = kReleaseMode,
}) {
  final servers = <Map<String, dynamic>>[
    for (final s in kStunServers) {'urls': s},
  ];
  if (release || url.isEmpty || username.isEmpty || credential.isEmpty) return servers;
  final urls = [for (final u in url.split(',')) if (u.trim().isNotEmpty) u.trim()];
  if (urls.isEmpty) return servers;
  return [...servers, {'urls': urls, 'username': username, 'credential': credential}];
}

Future<List<Map<String, dynamic>>> devIceServers() async => iceServersWithDevTurn();

/// Replaced (by the app start-up) once a backend that hands out TURN credentials exists. Default: STUN, plus a development
/// TURN relay only in a debug/profile run that was given one.
IceServersLoader iceServersLoader = devIceServers;
