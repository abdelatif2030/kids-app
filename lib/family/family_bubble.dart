import 'dart:async';

import 'package:flutter/material.dart';

import '../design/rehlaty_heart.dart';
import '../firebase_config.dart';
import '../journey/models.dart';
import '../l10n/strings.dart';
import 'family_prefs.dart';
import 'family_screens.dart';
import 'family_seen.dart';

/// The family button on the child's home: a round gradient speech bubble with a heart (our own mark, not
/// another app's logo) and a red count of new messages. Shown only when the parent switched chat on for this
/// child and the service is connected; otherwise it takes no space.
class FamilyBubbleButton extends StatefulWidget {
  final ChildProfile child;
  const FamilyBubbleButton({super.key, required this.child});

  @override
  State<FamilyBubbleButton> createState() => _FamilyBubbleButtonState();
}

class _FamilyBubbleButtonState extends State<FamilyBubbleButton> {
  bool _on = false;
  int _unread = 0;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _refresh();
    // A gentle check for new messages while the home is open (once a minute, newest 80 messages only, to stay
    // inside the free database limits). Reads only; no notifications are sent.
    _timer = Timer.periodic(const Duration(seconds: 60), (_) => _refresh());
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  Future<void> _refresh() async {
    final repo = familyRepository;
    if (repo == null || repo.uid == null) return;
    try {
      final prefs = await FamilyPrefs.of(widget.child.id);
      if (!prefs.chatOn) {
        if (mounted && _on) setState(() => _on = false);
        return;
      }
      final o = await loadFamilyOverview(repo, widget.child.id);
      if (mounted) {
        setState(() {
          _on = true;
          _unread = o.unread;
        });
      }
    } catch (_) {
      // offline or not allowed: the button just stays as it was
    }
  }

  Future<void> _open() async {
    final repo = familyRepository!;
    await Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => ChildFamilyScreen(
          repo: repo,
          familyId: repo.uid!,
          childId: widget.child.id,
          childName: widget.child.nickname,
        ),
      ),
    );
    _refresh();
  }

  @override
  Widget build(BuildContext context) {
    if (!_on) return const SizedBox.shrink();
    final label = _unread > 0
        ? tr2(
            'عائلتي، $_unread رسائل جديدة',
            'My family, $_unread new messages',
          )
        : tr2('عائلتي', 'My family');
    return Semantics(
      button: true,
      label: label,
      excludeSemantics: true,
      child: Tooltip(
        message: tr2('عائلتي', 'My family'),
        child: InkResponse(
          key: const ValueKey('family_bubble'),
          onTap: _open,
          radius: 32,
          child: SizedBox(
            width: 52,
            height: 52,
            child: Stack(
              clipBehavior: Clip.none,
              children: [
                const Positioned.fill(
                  child: CustomPaint(painter: _BubblePainter()),
                ),
                if (_unread > 0)
                  PositionedDirectional(
                    top: -4,
                    end: -4,
                    child: Container(
                      key: const ValueKey('family_unread'),
                      constraints: const BoxConstraints(
                        minWidth: 22,
                        minHeight: 22,
                      ),
                      padding: const EdgeInsets.symmetric(horizontal: 5),
                      decoration: BoxDecoration(
                        color: const Color(0xFFE53935),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: Colors.white, width: 2),
                      ),
                      alignment: Alignment.center,
                      child: Text(
                        _unread > 9 ? '9+' : '$_unread',
                        style: const TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w900,
                          fontSize: 12,
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

/// A speech bubble with a heart on a pink-to-blue gradient.
class _BubblePainter extends CustomPainter {
  const _BubblePainter();

  @override
  void paint(Canvas canvas, Size size) {
    final r = Offset.zero & size;
    final circle = Path()..addOval(r);
    final paint = Paint()
      ..shader = const LinearGradient(
        begin: Alignment.bottomLeft,
        end: Alignment.topRight,
        colors: [Color(0xFFA855F7), Color(0xFF6A3BFF), Color(0xFF5BC0FF)],
      ).createShader(r);
    canvas.drawShadow(circle, const Color(0x55000000), 3, true);
    canvas.drawPath(circle, paint);

    // the white bubble
    final w = size.width, h = size.height;
    final bubble = RRect.fromRectAndRadius(
      Rect.fromLTWH(w * .2, h * .22, w * .6, h * .44),
      Radius.circular(w * .2),
    );
    final tail = Path()
      ..moveTo(w * .36, h * .64)
      ..lineTo(w * .30, h * .80)
      ..lineTo(w * .52, h * .66)
      ..close();
    final white = Paint()..color = Colors.white;
    canvas.drawRRect(bubble, white);
    canvas.drawPath(tail, white);

    // the heart inside (the same glossy heart as everywhere else, small)
    final hr = Rect.fromCenter(
      center: Offset(w * .5, h * .44),
      width: w * .30,
      height: w * .27,
    );
    final hp = heartPath(hr);
    canvas.drawPath(
      hp,
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFFFF9CC4), Color(0xFFFF6B9D), Color(0xFFA855F7)],
        ).createShader(hr),
    );
    canvas.drawPath(
      hp,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = w * .02
        ..color = const Color(0xFF6A3BFF),
    );
    canvas.drawCircle(
      Offset(hr.left + hr.width * .28, hr.top + hr.height * .3),
      w * .02,
      Paint()..color = Colors.white,
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => false;
}
