import 'package:flutter/material.dart';

import '../../design/focusable_tap.dart';
import '../../design/picture_stage.dart';
import '../../l10n/app_locale.dart';
import '../../l10n/strings.dart';
import '../../notifications/notification_store.dart';
import '../../notifications/notification_ui.dart';
import '../../parent_screens.dart';
import '../avatars.dart';
import '../models.dart';
import '../../lessons_own/own_lessons_screens.dart';

// The owner's own pictures, each used whole with invisible buttons on top (see PictureStage). The numbers below are
// where things sit on each 1672 x 941 picture, as fractions of its width and height.

const double kScreenPictureAspect = 1672 / 941;

/// The back arrow painted at the top left of the cartoons, games and lessons pictures.
const Offset kPictureBackSpot = Offset(0.067, 0.088);

PictureSpot _back(BuildContext context) => PictureSpot(
      'back',
      kPictureBackSpot,
      0.085,
      0.15,
      tr2('رجوع', 'Back'),
      () => Navigator.maybePop(context),
      radius: 44,
      key: const ValueKey('picture_back'),
    );

Widget _rotateHint() => Padding(
      key: const ValueKey('picture_rotate_hint'),
      padding: const EdgeInsets.only(top: 14, left: 16, right: 16),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        decoration: BoxDecoration(color: const Color(0xFF5B2BB8), borderRadius: BorderRadius.circular(20), border: Border.all(color: Colors.white, width: 1.5)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          const Icon(Icons.screen_rotation_rounded, color: Colors.white),
          const SizedBox(width: 8),
          Flexible(child: Text(tr2('أدِر الجهاز أفقياً للّعب بشكل أفضل', 'Turn your device sideways for a better game'), style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: Colors.white))),
        ]),
      ),
    );

/// The child's main home: the owner's picture with its four islands (games, cartoons and stories, learn and discover,
/// draw and create). The gear is the parent's way in (PIN), the sign at the bottom left opens the rewards, and the
/// bell and the avatar are real: the bell shows the child's own unread count and the avatar is the child's own.
class PictureHome extends StatelessWidget {
  final ChildProfile child;

  /// Switches the child shell's tab (1 games, 2 create, 3 rewards).
  final void Function(int tab)? onTab;

  /// Leaves child mode (the shell asks for the parent PIN when one is set).
  final VoidCallback? onExit;
  const PictureHome({super.key, required this.child, this.onTab, this.onExit});

  static const asset = 'assets/home/home_main.jpg';
  static const gear = Offset(0.054, 0.077);
  static const bell = Offset(0.852, 0.082);
  static const avatar = Offset(0.942, 0.083);

  void _push(BuildContext context, Widget w) => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => w));

  @override
  Widget build(BuildContext context) {
    return PictureStage(
      key: const ValueKey('picture_home'),
      asset: asset,
      aspect: kScreenPictureAspect,
      portraitHint: _rotateHint(),
      spots: [
        PictureSpot('games', const Offset(0.158, 0.605), 0.22, 0.35, tr2('الألعاب', 'Games'), () => onTab?.call(1), key: const ValueKey('island_games')),
        PictureSpot('stories', const Offset(0.388, 0.61), 0.22, 0.35, tr2('الكرتون والقصص', 'Cartoons & stories'), () => _push(context, CartoonsPictureScreen(child: child)), key: const ValueKey('island_stories')),
        PictureSpot('learn', const Offset(0.622, 0.625), 0.22, 0.35, tr2('التعلم والاكتشاف', 'Learn & discover'), () => _push(context, LessonsPictureScreen(child: child)), key: const ValueKey('island_learn')),
        PictureSpot('create', const Offset(0.857, 0.63), 0.22, 0.35, tr2('الرسم والإبداع', 'Draw & create'), () => onTab?.call(2), key: const ValueKey('island_create')),
        PictureSpot('gear', gear, 0.075, 0.13, tr2('منطقة الأهل', 'Parents'), () => openParentArea(context), radius: 40, key: const ValueKey('home_gear'), tooltip: context.tr('home.parent')),
        PictureSpot('rewards', const Offset(0.108, 0.865), 0.19, 0.13, tr2('مكافآتي', 'My rewards'), () => onTab?.call(3), key: const ValueKey('island_rewards')),
      ],
      overlays: (w, h) {
        Widget disk(Offset c, double d, Widget child) => Positioned(left: c.dx * w - d / 2, top: c.dy * h - d / 2, width: d, height: d, child: child);
        return [
          // The picture shows a bell with a count and a boy's face: both would be wrong for this child, so real ones sit on top.
          disk(bell, w * 0.094, _RealBell(child: child, onTab: onTab)),
          disk(avatar, w * 0.082, _RealAvatar(child: child, onTab: onTab)),
          // A dot on the gear when the parent has something unread (the gear itself is the invisible button below).
          disk(gear, w * 0.06, const IgnorePointer(child: UnreadDot(audience: NotificationAudience.parent, child: SizedBox.expand()))),
          // The way out of child mode stays on the home: a small lock under the gear (asks for the PIN when one is set).
          disk(
            const Offset(0.054, 0.2),
            w * 0.05,
            Tooltip(
              message: context.tr('home.exit'),
              child: FocusableTap(
                key: const ValueKey('home_exit'),
                radius: 40,
                semanticLabel: context.tr('home.exit'),
                onTap: () => onExit?.call(),
                child: Container(
                  decoration: BoxDecoration(shape: BoxShape.circle, gradient: const LinearGradient(colors: [Color(0xFF8A52E8), Color(0xFF5B2BB8)]), border: Border.all(color: Colors.white, width: 2)),
                  child: Icon(Icons.lock_outline_rounded, color: Colors.white, size: w * 0.026),
                ),
              ),
            ),
          ),
        ];
      },
    );
  }
}

class _RealBell extends StatelessWidget {
  final ChildProfile child;
  final void Function(int tab)? onTab;
  const _RealBell({required this.child, this.onTab});

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: NotificationStore.instance,
      builder: (context, _) {
        final n = NotificationStore.instance.unread(NotificationAudience.child, childId: child.id);
        return LayoutBuilder(builder: (context, box) {
          final d = box.maxWidth;
          return Semantics(
            button: true,
            label: n == 0 ? tr2('الإشعارات', 'Notifications') : tr2('الإشعارات، $n غير مقروء', 'Notifications, $n unread'),
            excludeSemantics: true,
            child: FocusableTap(
              key: const ValueKey('notification_bell'),
              radius: d / 2,
              onTap: () => Navigator.push(
                context,
                MaterialPageRoute<void>(
                  builder: (_) => NotificationCenterScreen(audience: NotificationAudience.child, childId: child.id, onRoute: childRouter(onTab: (i) => onTab?.call(i))),
                ),
              ),
              child: Stack(
                clipBehavior: Clip.none,
                alignment: Alignment.center,
                children: [
                  Container(
                    width: d * 0.8,
                    height: d * 0.8,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: const RadialGradient(colors: [Color(0xFF9B6CF2), Color(0xFF5B2BB8)]),
                      border: Border.all(color: Colors.white, width: 3),
                      boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 6, offset: Offset(0, 3))],
                    ),
                    child: Icon(Icons.notifications_rounded, color: Colors.white, size: d * 0.42),
                  ),
                  if (n > 0)
                    PositionedDirectional(
                      top: 0,
                      end: d * 0.02,
                      child: Container(
                        key: const ValueKey('notification_badge'),
                        constraints: BoxConstraints(minWidth: d * 0.3, minHeight: d * 0.3),
                        alignment: Alignment.center,
                        padding: const EdgeInsets.symmetric(horizontal: 4),
                        decoration: BoxDecoration(color: const Color(0xFFE53935), shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2)),
                        child: Text(n > 99 ? '99+' : '$n', style: TextStyle(color: Colors.white, fontSize: d * 0.18, fontWeight: FontWeight.w900)),
                      ),
                    ),
                ],
              ),
            ),
          );
        });
      },
    );
  }
}

class _RealAvatar extends StatelessWidget {
  final ChildProfile child;
  final void Function(int tab)? onTab;
  const _RealAvatar({required this.child, this.onTab});

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, box) {
        final d = box.maxWidth;
        return FocusableTap(
          key: const ValueKey('home_avatar'),
          radius: d / 2,
          semanticLabel: child.nickname,
          onTap: () => onTab?.call(3),
          child: Container(
            decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white, border: Border.all(color: Colors.white, width: 4), boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 6, offset: Offset(0, 3))]),
            child: ClipOval(child: FittedBox(fit: BoxFit.cover, child: ChildAvatar(child: child, size: d))),
          ),
        );
      });
}

/// «الكرتون والحكايات»: the owner's picture with two islands. There are no cartoon episodes yet (a friendly message), and
/// the stories island opens an empty page on purpose: audio stories will be added there.
class CartoonsPictureScreen extends StatelessWidget {
  final ChildProfile child;
  const CartoonsPictureScreen({super.key, required this.child});

  static const asset = 'assets/home/cartoons_stories.jpg';

  @override
  Widget build(BuildContext context) {
    final ar = AppLocale.instance.isArabic;
    void push(Widget w) => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => w));
    return Scaffold(
      body: SafeArea(
        child: PictureStage(
          key: const ValueKey('cartoons_picture'),
          asset: asset,
          aspect: kScreenPictureAspect,
          portraitHint: _rotateHint(),
          showLabels: !ar,
          labels: [
            PictureNameLabel(const Offset(0.299, 0.672), 0.31, 0.155, tr2('الكرتون', 'Cartoons')),
            PictureNameLabel(const Offset(0.718, 0.672), 0.31, 0.155, tr2('القصص', 'Stories')),
          ],
          spots: [
            _back(context),
            PictureSpot('cartoons', const Offset(0.299, 0.66), 0.40, 0.62, tr2('الكرتون', 'Cartoons'), () => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(tr2('الحلقات الكرتونية قادمة قريباً!', 'Cartoon episodes are coming soon!')))), key: const ValueKey('hub_cartoons')),
            PictureSpot('stories', const Offset(0.718, 0.66), 0.40, 0.62, tr2('القصص', 'Stories'), () => push(ComingSoonScreen(title: tr2('القصص', 'Stories'), message: tr2('هنا ستظهر القصص الصوتية قريباً.', 'Audio stories will appear here soon.'), icon: Icons.headphones_rounded)), key: const ValueKey('hub_stories')),
          ],
        ),
      ),
    );
  }
}

/// One tile of «دروسي»: where it sits on the picture (centre of the tile and of its painted name) and what it opens.
class _LessonTile {
  final String id;
  final Offset center;
  final Offset name;
  final String Function() title;
  final Widget Function(BuildContext context, ChildProfile child) open;
  const _LessonTile(this.id, this.center, this.name, this.title, this.open);
}

/// Every slot of «دروسي» is an empty page for now (owner decision, 2026-11-06): educational videos will be added to each
/// slot later. Nothing else (no old lessons, no YouTube) opens from a slot.
Widget _slot(String title) => ComingSoonScreen(
      title: title,
      message: tr2('هنا ستظهر الفيديوهات التعليمية قريباً.', 'Educational videos will appear here soon.'),
      icon: Icons.play_circle_outline_rounded,
    );

final List<_LessonTile> _lessonTiles = [
  // The five tiles of the owner's picture (2026-11-07). Quran, songs and drawing are empty pages for now. «Learning to speak»
  // shows ALL the owner's lesson videos except the counting and numbers ones; «Maths» shows only those.
  _LessonTile('quran', const Offset(0.114, 0.65), const Offset(0.114, 0.707), () => tr2('القرآن الكريم', 'The Holy Quran'), (_, c) => _slot(tr2('القرآن الكريم', 'The Holy Quran'))),
  _LessonTile('speech', const Offset(0.311, 0.65), const Offset(0.311, 0.707), () => tr2('تعليم النطق', 'Learning to speak'), (_, c) => OwnLessonsScreen(child: c, exclude: const {'math'})),
  _LessonTile('songs', const Offset(0.502, 0.65), const Offset(0.502, 0.707), () => tr2('أناشيد', 'Songs'), (_, c) => _slot(tr2('أناشيد', 'Songs'))),
  _LessonTile('drawing', const Offset(0.697, 0.65), const Offset(0.697, 0.707), () => tr2('الرسم', 'Drawing'), (_, c) => _slot(tr2('الرسم', 'Drawing'))),
  _LessonTile('math', const Offset(0.891, 0.65), const Offset(0.891, 0.707), () => tr2('الرياضيات', 'Maths'), (_, c) => OwnLessonsScreen(child: c, only: const {'math'})),
];

/// «تعلم واكتشف»: the owner's picture with its five tiles and nothing else on it (owner decision, 2026-11-07).
class LessonsPictureScreen extends StatelessWidget {
  final ChildProfile child;
  const LessonsPictureScreen({super.key, required this.child});

  static const asset = 'assets/home/lessons_scene.jpg';

  @override
  Widget build(BuildContext context) {
    final ar = AppLocale.instance.isArabic;
    return Scaffold(
      body: SafeArea(
        child: PictureStage(
          key: const ValueKey('lessons_picture'),
          asset: asset,
          aspect: kScreenPictureAspect,
          portraitHint: _rotateHint(),
          showLabels: !ar,
          labels: [for (final t in _lessonTiles) PictureNameLabel(t.name, 0.17, 0.07, t.title())],
          spots: [
            // the round arrow painted in the picture
            PictureSpot('back', const Offset(0.057, 0.09), 0.085, 0.15, tr2('رجوع', 'Back'), () => Navigator.maybePop(context), radius: 44, key: const ValueKey('picture_back')),
            for (final t in _lessonTiles)
              PictureSpot(t.id, t.center, 0.19, 0.40, t.title(), () => Navigator.push(context, MaterialPageRoute<void>(builder: (c) => t.open(c, child))), radius: 36, key: ValueKey('lesson_${t.id}')),
          ],
        ),
      ),
    );
  }
}


/// A calm, empty page for a section that has no content yet (audio stories, cartoon episodes...). It sits on the unified
/// scenery picture and says plainly that content is coming; nothing is faked.
class ComingSoonScreen extends StatelessWidget {
  final String title;
  final String message;
  final IconData icon;
  const ComingSoonScreen({super.key, required this.title, required this.message, this.icon = Icons.hourglass_top_rounded});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(backgroundColor: Colors.transparent, elevation: 0, foregroundColor: Colors.white, title: Text(title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 24, color: Colors.white))),
      body: PictureBackdrop(
        child: SafeArea(
          child: Center(
            child: Container(
              key: const ValueKey('coming_soon'),
              margin: const EdgeInsets.all(24),
              padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 22),
              decoration: BoxDecoration(color: Colors.white.withAlpha(235), borderRadius: BorderRadius.circular(28), border: Border.all(color: const Color(0xFF8A52E8), width: 3)),
              child: Column(mainAxisSize: MainAxisSize.min, children: [
                Icon(icon, size: 56, color: const Color(0xFF5B2BB8)),
                const SizedBox(height: 10),
                Text(title, style: const TextStyle(fontSize: 26, fontWeight: FontWeight.w900, color: Color(0xFF3A2A6E))),
                const SizedBox(height: 6),
                Text(message, textAlign: TextAlign.center, style: const TextStyle(fontSize: 18, color: Color(0xFF3A2A6E))),
              ]),
            ),
          ),
        ),
      ),
    );
  }
}
