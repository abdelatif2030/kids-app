import 'dart:async';

import 'package:flutter/material.dart';

import '../design/components.dart';
import '../design/tokens.dart';
import '../l10n/strings.dart';
import '../offline/connectivity.dart';
import '../offline/offline_ui.dart';
import 'call_controller.dart';
import 'call_engine.dart';
import 'call_models.dart';
import 'call_repository.dart';

/// Makes the audio engine for a new call. Tests replace it with a fake.
CallEngine Function() newCallEngine = () => WebRtcEngine();

String phaseText(CallPhase p) => switch (p) {
      CallPhase.starting => tr2('جارٍ التحضير…', 'Getting ready…'),
      CallPhase.ringing => tr2('جارٍ الاتصال…', 'Calling…'),
      CallPhase.connecting => tr2('جارٍ التوصيل…', 'Connecting…'),
      CallPhase.connected => tr2('متصل', 'Connected'),
      CallPhase.reconnecting => tr2('انقطع الاتصال… نحاول إعادته', 'Connection lost… trying to reconnect'),
      CallPhase.ended => tr2('انتهت المكالمة', 'The call ended'),
      CallPhase.declined => tr2('لم يُجب', 'Not answered'),
      CallPhase.missed => tr2('لم يرد أحد', 'No answer'),
      CallPhase.failed => tr2('تعذّر الاتصال', 'The call could not connect'),
    };

/// One voice call on screen. Audio only, never recorded. The microphone is released when it ends.
class CallScreen extends StatefulWidget {
  final CallController controller;
  final String title;
  const CallScreen({super.key, required this.controller, required this.title});

  @override
  State<CallScreen> createState() => _CallScreenState();
}

class _CallScreenState extends State<CallScreen> {
  CallController get c => widget.controller;

  @override
  void dispose() {
    c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // Back, swipe or the hang-up button all end the call (dispose hangs up and releases the microphone).
    return PopScope(
      canPop: true,
      onPopInvokedWithResult: (didPop, _) {
        if (didPop && !c.finished) c.hangUp();
      },
      child: Scaffold(
        appBar: AppBar(title: Text(widget.title), automaticallyImplyLeading: false),
        body: SafeArea(
          child: ListenableBuilder(
            listenable: c,
            builder: (context, _) => Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 520),
                child: Column(children: [
                  // 1. Who and what is happening: scrolls on a very small screen, so the controls below never move.
                  Expanded(
                    child: SingleChildScrollView(
                      padding: const EdgeInsets.fromLTRB(24, 12, 24, 8),
                      child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                        if (c.video && !c.finished)
                          _VideoStage(controller: c)
                        else
                          Container(
                            width: 132,
                            height: 132,
                            decoration: BoxDecoration(color: DS.primarySoft, shape: BoxShape.circle, border: Border.all(color: DS.primary, width: 3)),
                            child: Icon(c.video ? Icons.videocam_rounded : Icons.call_rounded, size: 64, color: DS.primary),
                          ),
                        const SizedBox(height: 16),
                        Text(widget.title, style: DS.title, textAlign: TextAlign.center),
                        const SizedBox(height: 8),
                        _PhaseChip(phase: c.phase),
                        if (!c.finished) _MediaIndicator(controller: c),
                        if (c.error != null) Padding(padding: const EdgeInsets.only(top: 8), child: Text(c.error!, key: const ValueKey('call_error'), style: DS.body.copyWith(color: DS.error), textAlign: TextAlign.center)),
                        if (c.finished) const SizedBox.shrink() else ?c.engine.audioSink,
                      ]),
                    ),
                  ),
                  // 2. The reassurance line, then the controls in a fixed bar at the bottom: easy to reach with a thumb.
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 24),
                    child: Text(
                      c.video ? tr2('مكالمة فيديو بين الجهازين فقط، ولا تُسجَّل ولا تُحفظ.', 'A video call between the two devices only. It is never recorded or saved.') : tr2('صوت فقط، ولا يُسجَّل ولا يُحفظ.', 'Voice only. It is never recorded or saved.'),
                      style: DS.caption,
                      textAlign: TextAlign.center,
                    ),
                  ),
                  Container(
                    key: const ValueKey('call_controls'),
                    width: double.infinity,
                    margin: const EdgeInsets.only(top: 12),
                    padding: const EdgeInsets.fromLTRB(16, 16, 16, 20),
                    decoration: const BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
                      boxShadow: [BoxShadow(color: Color(0x1F000000), blurRadius: 14, offset: Offset(0, -3))],
                    ),
                    child: c.finished
                        ? SizedBox(width: double.infinity, child: AppButton(key: const ValueKey('call_close'), label: tr2('إغلاق', 'Close'), onPressed: () => Navigator.of(context).pop()))
                        : Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, crossAxisAlignment: CrossAxisAlignment.start, children: [
                            Expanded(child: _CallControl(
                              buttonKey: const ValueKey('call_mute'),
                              icon: c.muted ? Icons.mic_off_rounded : Icons.mic_rounded,
                              label: c.muted ? tr2('إلغاء الكتم', 'Unmute') : tr2('كتم', 'Mute'),
                              active: c.muted,
                              onPressed: c.toggleMute,
                            )),
                            if (c.video)
                              Expanded(child: _CallControl(
                                buttonKey: const ValueKey('call_camera'),
                                icon: c.cameraOn ? Icons.videocam_rounded : Icons.videocam_off_rounded,
                                label: c.cameraOn ? tr2('إيقاف الكاميرا', 'Camera off') : tr2('تشغيل الكاميرا', 'Camera on'),
                                active: !c.cameraOn,
                                onPressed: c.toggleCamera,
                              )),
                            Expanded(child: _CallControl(
                              buttonKey: const ValueKey('call_hangup'),
                              icon: Icons.call_end_rounded,
                              label: tr2('إنهاء', 'End call'),
                              hangUp: true,
                              onPressed: () async {
                                await c.hangUp();
                                if (context.mounted) Navigator.of(context).pop();
                              },
                            )),
                          ]),
                  ),
                ]),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// The call state as a short pill: a colour dot and the words (never colour alone).
class _PhaseChip extends StatelessWidget {
  final CallPhase phase;
  const _PhaseChip({required this.phase});

  @override
  Widget build(BuildContext context) {
    final bad = phase == CallPhase.failed || phase == CallPhase.declined || phase == CallPhase.missed;
    final good = phase == CallPhase.connected;
    final color = good ? const Color(0xFF2E9E5B) : (bad ? DS.error : const Color(0xFFE0A100));
    final icon = good ? Icons.check_circle_rounded : (bad ? Icons.error_outline_rounded : Icons.hourglass_top_rounded);
    return Semantics(
      liveRegion: true,
      container: true,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
        decoration: BoxDecoration(color: color.withAlpha(30), borderRadius: BorderRadius.circular(24)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          Icon(icon, size: 20, color: color),
          const SizedBox(width: 8),
          Flexible(child: Text(phaseText(phase), key: const ValueKey('call_phase'), style: DS.heading, textAlign: TextAlign.center)),
        ]),
      ),
    );
  }
}

/// A big round control with its name under it (at least 72 px; the red end-call button is the biggest, 84 px).
class _CallControl extends StatelessWidget {
  final Key buttonKey;
  final IconData icon;
  final String label;
  final bool active;
  final bool hangUp;
  final VoidCallback onPressed;
  const _CallControl({required this.buttonKey, required this.icon, required this.label, required this.onPressed, this.active = false, this.hangUp = false});

  @override
  Widget build(BuildContext context) {
    final size = hangUp ? 84.0 : 72.0;
    final bg = hangUp ? DS.error : (active ? DS.primary : DS.primarySoft);
    final fg = hangUp || active ? Colors.white : DS.primary;
    return Semantics(
      button: true,
      toggled: hangUp ? null : active,
      label: label,
      excludeSemantics: true,
      onTap: onPressed,
      child: SizedBox(
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Material(
            key: buttonKey,
            color: bg,
            shape: const CircleBorder(),
            elevation: hangUp ? 3 : 0,
            child: InkWell(
              customBorder: const CircleBorder(),
              onTap: onPressed,
              child: SizedBox(width: size, height: size, child: Icon(icon, size: hangUp ? 40 : 34, color: fg)),
            ),
          ),
          const SizedBox(height: 8),
          Text(label, style: DS.body.copyWith(fontWeight: FontWeight.w700), textAlign: TextAlign.center, maxLines: 2),
        ]),
      ),
    );
  }
}

Future<void> startCallScreen(
  BuildContext context, {
  required CallRepository calls,
  required String familyId,
  required String childId,
  required String childName,
  required String relUid,
  required CallFrom from,
  required String title,
  bool video = false,
}) async {
  // No point asking for the microphone when there is no network: say so and let the person try again.
  if (ConnectivityMonitor.instance.isOffline) {
    final back = await explainNeedsInternet(context, 'calls');
    if (!back || !context.mounted) return;
  }
  final c = CallController(repo: calls, engine: newCallEngine(), familyId: familyId);
  c.startOutgoing(childId: childId, childName: childName, relUid: relUid, from: from, video: video);
  await Navigator.push(context, MaterialPageRoute(builder: (_) => CallScreen(controller: c, title: title)));
}

/// Shows who is calling right now (only calls that are still ringing). The person chooses; nothing rings by itself
/// on a child's screen because this widget is only placed in the parent area and the relative's own screen.
class IncomingCalls extends StatelessWidget {
  final CallRepository calls;
  final String familyId;
  final String Function(CallInfo) titleOf;
  const IncomingCalls({super.key, required this.calls, required this.familyId, required this.titleOf});

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<List<CallInfo>>(
      stream: calls.watchIncoming(familyId),
      builder: (context, snap) {
        final ringing = [for (final c in snap.data ?? const <CallInfo>[]) if (c.ringing) c];
        if (ringing.isEmpty) return const SizedBox.shrink();
        return Column(children: [
          for (final info in ringing)
            Card(
              key: ValueKey('incoming_${info.id}'),
              color: DS.highlightSoft,
              child: ListTile(
                leading: const Icon(Icons.ring_volume_rounded, size: 36, color: DS.primary),
                title: Text(titleOf(info), style: DS.heading),
                subtitle: Text(info.video ? tr2('مكالمة فيديو واردة', 'Incoming video call') : tr2('مكالمة صوتية واردة', 'Incoming voice call')),
                trailing: Wrap(spacing: 4, children: [
                  IconButton.filled(
                    key: ValueKey('decline_${info.id}'),
                    style: IconButton.styleFrom(backgroundColor: DS.error),
                    tooltip: tr2('رفض', 'Decline'),
                    onPressed: () => calls.setCallStatus(familyId, info.id, callDeclined),
                    icon: const Icon(Icons.call_end_rounded),
                  ),
                  IconButton.filled(
                    key: ValueKey('accept_${info.id}'),
                    style: IconButton.styleFrom(backgroundColor: DS.success),
                    tooltip: tr2('رد', 'Answer'),
                    onPressed: () {
                      final c = CallController(repo: calls, engine: newCallEngine(), familyId: familyId);
                      c.accept(info);
                      Navigator.push(context, MaterialPageRoute(builder: (_) => CallScreen(controller: c, title: titleOf(info))));
                    },
                    icon: const Icon(Icons.call_rounded),
                  ),
                ]),
              ),
            ),
        ]);
      },
    );
  }
}


/// The other person's picture with my own small preview in a corner.
class _VideoStage extends StatelessWidget {
  final CallController controller;
  const _VideoStage({required this.controller});

  @override
  Widget build(BuildContext context) {
    final remote = controller.engine.remoteVideoView;
    final local = controller.engine.localVideoView;
    return ConstrainedBox(
      constraints: const BoxConstraints(maxWidth: 480, maxHeight: 360),
      child: AspectRatio(
        aspectRatio: 4 / 3,
        child: ClipRRect(
          borderRadius: BorderRadius.circular(DS.rMedium),
          child: Stack(fit: StackFit.expand, children: [
            Container(color: Colors.black87, child: remote),
            if (local != null)
              PositionedDirectional(
                end: 8,
                bottom: 8,
                width: 96,
                height: 72,
                child: ClipRRect(borderRadius: BorderRadius.circular(8), child: controller.cameraOn ? local : Container(color: Colors.black54, child: const Icon(Icons.videocam_off_rounded, color: Colors.white))),
              ),
          ]),
        ),
      ),
    );
  }
}


/// Tells plainly what is switched on while a call is open: the microphone, and the camera in a video call.
class _MediaIndicator extends StatelessWidget {
  final CallController controller;
  const _MediaIndicator({required this.controller});

  @override
  Widget build(BuildContext context) {
    final c = controller;
    final mic = c.muted ? tr2('الميكروفون مكتوم', 'Microphone muted') : tr2('الميكروفون يعمل', 'Microphone is on');
    final cam = !c.video ? null : (c.cameraOn ? tr2('الكاميرا تعمل', 'Camera is on') : tr2('الكاميرا متوقفة', 'Camera is off'));
    final text = cam == null ? mic : '$mic · $cam';
    final live = !c.muted || (c.video && c.cameraOn);
    return Padding(
      padding: const EdgeInsets.only(top: 8),
      child: Semantics(
        liveRegion: true,
        label: text,
        child: Container(
          key: const ValueKey('media_indicator'),
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
          decoration: BoxDecoration(color: live ? DS.highlightSoft : DS.border, borderRadius: BorderRadius.circular(20)),
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            Icon(live ? Icons.fiber_manual_record_rounded : Icons.mic_off_rounded, size: 16, color: live ? DS.error : DS.inkSoft),
            const SizedBox(width: 6),
            Flexible(child: Text(text, style: DS.caption, textAlign: TextAlign.center)),
          ]),
        ),
      ),
    );
  }
}
