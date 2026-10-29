import 'dart:async';

import 'package:flutter/widgets.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';

import 'call_models.dart';

/// The audio side of a call. The real one uses WebRTC; tests use a fake.
abstract class CallEngine {
  /// Asks for the microphone (and the camera for a video call). Throws if the person says no.
  Future<void> init({bool video = false});
  Future<Map<String, String>> createOffer();
  Future<Map<String, String>> acceptOffer(Map<String, String> offer);
  Future<void> setAnswer(Map<String, String> answer);
  Future<void> addRemoteCandidate(Map<String, dynamic> candidate);
  Stream<Map<String, dynamic>> get localCandidates;

  /// connecting -> connected, reconnecting (a drop that may recover), or failed / ended.
  Stream<CallPhase> get phases;
  void setMuted(bool muted);

  /// Switches the camera on or off during a video call.
  void setCameraOn(bool on);
  Future<void> close();

  /// The other person's picture and my own small preview (video calls only; null otherwise).
  Widget? get remoteVideoView;
  Widget? get localVideoView;

  /// A tiny invisible widget the web needs so the other person's voice is played (null elsewhere).
  Widget? get audioSink;
}

class WebRtcEngine implements CallEngine {
  RTCPeerConnection? _pc;
  MediaStream? _local;
  final _renderer = RTCVideoRenderer();
  final _localRenderer = RTCVideoRenderer();
  bool _video = false;
  final _cands = StreamController<Map<String, dynamic>>.broadcast();
  final _phases = StreamController<CallPhase>.broadcast();
  bool _closed = false;

  @override
  Future<void> init({bool video = false}) async {
    _video = video;
    await _renderer.initialize();
    await _localRenderer.initialize();
    // The camera is requested only for a video call the parent allowed; a voice call never asks for it.
    _local = await navigator.mediaDevices.getUserMedia({
      'audio': true,
      'video': video ? {'facingMode': 'user', 'width': {'ideal': 640}, 'height': {'ideal': 480}, 'frameRate': {'ideal': 15}} : false,
    });
    if (video) _localRenderer.srcObject = _local;
    final pc = await createPeerConnection({
      'iceServers': [
        for (final s in kStunServers) {'urls': s},
      ],
      'sdpSemantics': 'unified-plan',
    });
    _pc = pc;
    for (final t in _local!.getTracks()) {
      await pc.addTrack(t, _local!);
    }
    pc.onIceCandidate = (c) {
      if (c.candidate != null && !_cands.isClosed) {
        _cands.add({'candidate': c.candidate, 'sdpMid': c.sdpMid, 'sdpMLineIndex': c.sdpMLineIndex});
      }
    };
    pc.onTrack = (e) {
      if (e.streams.isNotEmpty) _renderer.srcObject = e.streams.first;
    };
    pc.onConnectionState = (s) {
      if (_phases.isClosed) return;
      switch (s) {
        case RTCPeerConnectionState.RTCPeerConnectionStateConnected:
          _phases.add(CallPhase.connected);
        case RTCPeerConnectionState.RTCPeerConnectionStateFailed:
          _phases.add(CallPhase.failed);
        case RTCPeerConnectionState.RTCPeerConnectionStateDisconnected:
          _phases.add(CallPhase.reconnecting); // often a short network change: give it time to come back
        case RTCPeerConnectionState.RTCPeerConnectionStateClosed:
          _phases.add(CallPhase.ended);
        default:
          break;
      }
    };
  }

  Map<String, String> _desc(RTCSessionDescription d) => {'sdp': d.sdp ?? '', 'type': d.type ?? ''};

  @override
  Future<Map<String, String>> createOffer() async {
    final offer = await _pc!.createOffer({'offerToReceiveAudio': true, 'offerToReceiveVideo': _video});
    await _pc!.setLocalDescription(offer);
    return _desc(offer);
  }

  @override
  Future<Map<String, String>> acceptOffer(Map<String, String> offer) async {
    await _pc!.setRemoteDescription(RTCSessionDescription(offer['sdp'], offer['type']));
    final answer = await _pc!.createAnswer({'offerToReceiveAudio': true, 'offerToReceiveVideo': _video});
    await _pc!.setLocalDescription(answer);
    return _desc(answer);
  }

  @override
  Future<void> setAnswer(Map<String, String> answer) => _pc!.setRemoteDescription(RTCSessionDescription(answer['sdp'], answer['type']));

  @override
  Future<void> addRemoteCandidate(Map<String, dynamic> c) =>
      _pc!.addCandidate(RTCIceCandidate(c['candidate'] as String?, c['sdpMid'] as String?, c['sdpMLineIndex'] as int?));

  @override
  Stream<Map<String, dynamic>> get localCandidates => _cands.stream;

  @override
  Stream<CallPhase> get phases => _phases.stream;

  @override
  void setMuted(bool muted) {
    for (final t in _local?.getAudioTracks() ?? <MediaStreamTrack>[]) {
      t.enabled = !muted;
    }
  }

  @override
  void setCameraOn(bool on) {
    for (final t in _local?.getVideoTracks() ?? <MediaStreamTrack>[]) {
      t.enabled = on;
    }
  }

  @override
  Future<void> close() async {
    if (_closed) return;
    _closed = true;
    for (final t in _local?.getTracks() ?? <MediaStreamTrack>[]) {
      await t.stop(); // the microphone is released at once
    }
    await _local?.dispose();
    await _pc?.close();
    _renderer.srcObject = null;
    _localRenderer.srcObject = null;
    await _renderer.dispose();
    await _localRenderer.dispose();
    await _cands.close();
    await _phases.close();
  }

  @override
  Widget? get audioSink => _video ? null : SizedBox(width: 1, height: 1, child: RTCVideoView(_renderer));

  @override
  Widget? get remoteVideoView => _video ? RTCVideoView(_renderer, objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover) : null;

  @override
  Widget? get localVideoView => _video ? RTCVideoView(_localRenderer, mirror: true, objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover) : null;
}
