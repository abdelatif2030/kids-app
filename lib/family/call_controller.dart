import 'dart:async';

import 'package:flutter/foundation.dart';

import '../l10n/strings.dart';
import '../media/audio_gate.dart';
import 'call_engine.dart';
import 'call_models.dart';
import 'call_repository.dart';

/// Runs one voice call: ties the signalling (who is calling) to the audio engine. No recording, no storage.
class CallController extends ChangeNotifier {
  final CallRepository repo;
  final CallEngine engine;
  final String familyId;

  /// How long an outgoing call rings before it counts as missed.
  final int ringSeconds;
  CallController({required this.repo, required this.engine, required this.familyId, this.ringSeconds = kRingSeconds});

  CallPhase phase = CallPhase.starting;
  bool muted = false;
  bool cameraOn = true;
  bool video = false;
  String? error;
  String? _callId;
  CallFrom? _mySide;
  bool _remoteSet = false;
  bool _done = false;
  bool _disposed = false;
  final _pendingRemote = <Map<String, dynamic>>[];
  final _pendingLocal = <Map<String, dynamic>>[];
  final _subs = <StreamSubscription<dynamic>>[];
  Timer? _ringTimer;

  String? get callId => _callId;
  bool get finished => _done;

  void _set(CallPhase p) {
    if (_done && p != phase && (phase == CallPhase.ended || phase == CallPhase.declined || phase == CallPhase.missed || phase == CallPhase.failed)) return;
    phase = p;
    notifyListeners();
  }

  bool _gated = false;

  Future<bool> _prepare() async {
    // Lessons, stories and ambient sounds stop for the whole call (see AudioGate).
    if (!_gated) {
      _gated = true;
      AudioGate.instance.enterCall();
    }
    try {
      await engine.init(video: video);
    } catch (_) {
      error = video
          ? tr2('لا يمكن استخدام الكاميرا أو الميكروفون. اسمح بهما من إعدادات المتصفح أو الهاتف.', 'The camera or microphone cannot be used. Allow them in the browser or phone settings.')
          : tr2('لا يمكن استخدام الميكروفون. اسمح به من إعدادات المتصفح أو الهاتف.', 'The microphone cannot be used. Allow it in the browser or phone settings.');
      _finish(CallPhase.failed);
      return false;
    }
    _subs.add(engine.localCandidates.listen(_localCandidate));
    _subs.add(engine.phases.listen((p) {
      if (p == CallPhase.connected) {
        _ringTimer?.cancel();
        _set(CallPhase.connected);
      } else if (p == CallPhase.failed) {
        error = tr2('تعذّر الاتصال. قد تحتاج الشبكة إلى خادم TURN.', 'The connection failed. The network may need a TURN server.');
        hangUp(status: callEnded, as: CallPhase.failed);
      } else if (p == CallPhase.ended && phase == CallPhase.connected) {
        hangUp();
      }
    }));
    return true;
  }

  void _localCandidate(Map<String, dynamic> c) {
    final id = _callId;
    if (id == null) {
      _pendingLocal.add(c);
    } else {
      repo.addCandidate(familyId, id, _mySide!, c).catchError((Object _) {});
    }
  }

  Future<void> _remoteCandidate(Map<String, dynamic> c) async {
    if (!_remoteSet) {
      _pendingRemote.add(c);
      return;
    }
    try {
      await engine.addRemoteCandidate(c);
    } catch (_) {}
  }

  Future<void> _remoteReady() async {
    _remoteSet = true;
    for (final c in List.of(_pendingRemote)) {
      await _remoteCandidate(c);
    }
    _pendingRemote.clear();
  }

  void _watch(String id, CallFrom other) {
    _subs.add(repo.watchCandidates(familyId, id, other).listen(_remoteCandidate));
    _subs.add(repo.watchCall(familyId, id).listen((info) async {
      if (info == null || _done) return;
      if (info.answer != null && !_remoteSet && _mySide == info.from) {
        await engine.setAnswer(info.answer!);
        await _remoteReady();
        if (phase == CallPhase.ringing) _set(CallPhase.connecting);
      }
      switch (info.status) {
        case callDeclined:
          _finish(CallPhase.declined);
        case callMissed:
          _finish(CallPhase.missed);
        case callEnded:
          _finish(CallPhase.ended);
      }
    }));
  }

  /// I am calling.
  Future<void> startOutgoing({required String childId, required String childName, required String relUid, required CallFrom from, bool video = false}) async {
    _mySide = from;
    this.video = video;
    if (!await _prepare()) return;
    try {
      final offer = await engine.createOffer();
      final id = await repo.startCall(familyId: familyId, childId: childId, childName: childName, relUid: relUid, from: from, offer: offer, video: video);
      _callId = id;
      for (final c in List.of(_pendingLocal)) {
        await repo.addCandidate(familyId, id, from, c);
      }
      _pendingLocal.clear();
      _set(CallPhase.ringing);
      _watch(id, from == CallFrom.parent ? CallFrom.relative : CallFrom.parent);
      _ringTimer = Timer(Duration(seconds: ringSeconds), () {
        if (phase == CallPhase.ringing) {
          repo.setCallStatus(familyId, id, callMissed).catchError((Object _) {});
          _finish(CallPhase.missed);
        }
      });
    } catch (e) {
      error = tr2('تعذّر بدء المكالمة', 'The call could not be started');
      _finish(CallPhase.failed);
    }
  }

  /// Someone is calling me and I accept.
  Future<void> accept(CallInfo info) async {
    video = info.video;
    _mySide = info.from == CallFrom.parent ? CallFrom.relative : CallFrom.parent;
    _callId = info.id;
    if (!await _prepare()) {
      await repo.setCallStatus(familyId, info.id, callDeclined).catchError((Object _) {});
      return;
    }
    try {
      final answer = await engine.acceptOffer(info.offer);
      await _remoteReady();
      await repo.answerCall(familyId, info.id, answer);
      for (final c in List.of(_pendingLocal)) {
        await repo.addCandidate(familyId, info.id, _mySide!, c);
      }
      _pendingLocal.clear();
      _set(CallPhase.connecting);
      _watch(info.id, info.from);
    } catch (e) {
      error = tr2('تعذّر الرد على المكالمة', 'The call could not be answered');
      await repo.setCallStatus(familyId, info.id, callEnded).catchError((Object _) {});
      _finish(CallPhase.failed);
    }
  }

  void toggleCamera() {
    cameraOn = !cameraOn;
    engine.setCameraOn(cameraOn);
    notifyListeners();
  }

  void toggleMute() {
    muted = !muted;
    engine.setMuted(muted);
    notifyListeners();
  }

  /// Hang up (or cancel while ringing).
  Future<void> hangUp({String status = callEnded, CallPhase as = CallPhase.ended}) async {
    final id = _callId;
    if (id != null && !_done) {
      await repo.setCallStatus(familyId, id, status).catchError((Object _) {});
    }
    _finish(as);
  }

  void _finish(CallPhase p) {
    if (_done) return;
    _ringTimer?.cancel();
    phase = p;
    _done = true;
    for (final s in _subs) {
      s.cancel();
    }
    _subs.clear();
    engine.close();
    if (_gated) {
      _gated = false;
      AudioGate.instance.leaveCall();
    }
    notifyListeners();
  }

  @override
  void notifyListeners() {
    if (!_disposed) super.notifyListeners();
  }

  @override
  void dispose() {
    if (!_done) hangUp();
    _disposed = true;
    super.dispose();
  }
}
