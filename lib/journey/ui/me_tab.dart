import 'package:flutter/material.dart';

import '../../companion/companion_ui.dart';
import '../../design/picture_stage.dart';
import '../avatars.dart';
import '../models.dart';
import '../repository.dart';
import 'kit.dart';
import 'my_day_cards.dart';

/// «أنا» (2026-11-07, owner request: simple and professional): only the child's name and picture, «رفيقي» (the companion),
/// «حديقتي» (the garden that grows with real finished activities) and «ألبوم الملصقات» (the sticker album), on the owner's
/// scenery picture. Everything else that used to be here (level, goals, accessories, badges, lands, the extra cards) is gone.
class MeTab extends StatelessWidget {
  final ChildProfile child;
  const MeTab({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: JourneyStore.instance,
      builder: (context, _) {
        final profile = JourneyStore.instance.profileById(child.id) ?? child;
        return PictureBackdrop(
          child: Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 640),
              child: ListView(
                key: const ValueKey('me_list'),
                padding: const EdgeInsets.fromLTRB(16, 14, 16, 28),
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      ChildAvatar(child: profile, size: 64),
                      const SizedBox(width: 12),
                      Flexible(
                        child: Text(profile.nickname, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: RC.ink)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 14),
                  CompanionCard(child: profile),
                  const SizedBox(height: 14),
                  GardenCard(child: profile),
                  const SizedBox(height: 14),
                  StickerAlbumCard(child: profile),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
