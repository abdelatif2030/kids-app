import 'dart:async';

import 'package:flutter/material.dart';

import '../design/components.dart';
import '../design/tokens.dart';
import '../l10n/strings.dart';
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
        body: ListenableBuilder(
          listenable: c,
          builder: (context, _) => Center(
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: Column(mainAxisSize: MainAxisSize.min, children: [
                if (c.video && !c.finished)
                  _VideoStage(controller: c)
                else
                  Icon(c.video ? Icons.videocam_rounded : Icons.call_rounded, size: 72, color: DS.primary),
                const SizedBox(height: 12),
                Text(widget.title, style: DS.title, textAlign: TextAlign.center),
                const SizedBox(height: 8),
                Text(phaseText(c.phase), key: const ValueKey('call_phase'), style: DS.heading),
                if (c.error != null) Padding(padding: const EdgeInsets.only(top: 8), child: Text(c.error!, key: const ValueKey('call_error'), style: DS.body.copyWith(color: DS.error), textAlign: TextAlign.center)),
                if (c.finished) const SizedBox.shrink() else ?c.engine.audioSink,
                const SizedBox(height: 24),
                if (!c.finished)
                  Wrap(spacing: 16, children: [
                    IconButton.filledTonal(
                      key: const ValueKey('call_mute'),
                      iconSize: 36,
                      tooltip: c.muted ? tr2('إلغاء الكتم', 'Unmute') : tr2('كتم', 'Mute'),
                      onPressed: c.toggleMute,
                      icon: Icon(c.muted ? Icons.mic_off_rounded : Icons.mic_rounded),
                    ),
                    if (c.video)
                      IconButton.filledTonal(
                        key: const ValueKey('call_camera'),
                        iconSize: 36,
                        tooltip: c.cameraOn ? tr2('إيقاف الكاميرا', 'Camera off') : tr2('تشغيل الكاميرا', 'Camera on'),
                        onPressed: c.toggleCamera,
                        icon: Icon(c.cameraOn ? Icons.videocam_rounded : Icons.videocam_off_rounded),
                      ),
                    IconButton.filled(
                      key: const ValueKey('call_hangup'),
                      iconSize: 36,
                      style: IconButton.styleFrom(backgroundColor: DS.error),
                      tooltip: tr2('إنهاء', 'Hang up'),
                      onPressed: () async {
                        await c.hangUp();
                        if (context.mounted) Navigator.of(context).pop();
                      },
                      icon: const Icon(Icons.call_end_rounded),
                    ),
                  ])
                else
                  AppButton(key: const ValueKey('call_close'), label: tr2('إغلاق', 'Close'), onPressed: () => Navigator.of(context).pop()),
                const SizedBox(height: 16),
                Text(c.video ? tr2('مكالمة فيديو بين الجهازين فقط، ولا تُسجَّل ولا تُحفظ.', 'A video call between the two devices only. It is never recorded or saved.') : tr2('صوت فقط، ولا يُسجَّل ولا يُحفظ.', 'Voice only. It is never recorded or saved.'), style: DS.caption, textAlign: TextAlign.center),
              ]),
            ),
          ),
        ),
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
}) {
  final c = CallController(repo: calls, engine: newCallEngine(), familyId: familyId);
  c.startOutgoing(childId: childId, childName: childName, relUid: relUid, from: from, video: video);
  return Navigator.push(context, MaterialPageRoute(builder: (_) => CallScreen(controller: c, title: title)));
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
