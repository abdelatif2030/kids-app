import 'package:flutter/material.dart';

import '../../design/focusable_tap.dart';
import '../../design/picture_stage.dart';
import '../../drawing_screen.dart';
import '../../games/games_hub.dart' show CategoryGamesScreen, kGameCategories;
import '../../l10n/app_locale.dart';
import '../../l10n/strings.dart';
import '../../main.dart' show VideoListScreen;
import '../../notifications/notification_store.dart';
import '../../notifications/notification_ui.dart';
import '../../parent_screens.dart';
import '../../stories/story_screens.dart';
import '../avatars.dart';
import '../models.dart';
import 'home_hubs.dart';

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

/// «الكرتون والحكايات»: the owner's picture with two islands. Cartoons opens the videos picked for the child's age
/// (parent-approved, played with the official player); stories opens the story library.
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
            PictureSpot('cartoons', const Offset(0.299, 0.66), 0.40, 0.62, tr2('الكرتون', 'Cartoons'), () => push(VideoListScreen(age: child.age)), key: const ValueKey('hub_cartoons')),
            PictureSpot('stories', const Offset(0.718, 0.66), 0.40, 0.62, tr2('القصص', 'Stories'), () => push(StoriesHomeScreen(child: child)), key: const ValueKey('hub_stories')),
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

Widget _videos(ChildProfile c, String subject) => VideoListScreen(age: c.age, subject: subject);

final List<_LessonTile> _lessonTiles = [
  _LessonTile('stories', const Offset(0.163, 0.475), const Offset(0.163, 0.553), () => tr2('قصص', 'Stories'), (_, c) => _videos(c, 'stories')),
  _LessonTile('quran', const Offset(0.329, 0.475), const Offset(0.329, 0.553), () => tr2('قرآن', 'Quran'), (_, c) => _videos(c, 'quran')),
  _LessonTile('deen', const Offset(0.493, 0.475), const Offset(0.493, 0.553), () => tr2('دين', 'Religion'), (_, c) => _videos(c, 'deen')),
  _LessonTile('math', const Offset(0.667, 0.475), const Offset(0.667, 0.553), () => tr2('رياضيات', 'Maths'), (_, c) => _videos(c, 'math')),
  _LessonTile('english', const Offset(0.843, 0.475), const Offset(0.843, 0.553), () => tr2('إنجليزي', 'English'), (_, c) => _videos(c, 'english')),
  _LessonTile('calm', const Offset(0.164, 0.76), const Offset(0.164, 0.82), () => tr2('هدوء ونوم', 'Calm & sleep'), (_, c) => _videos(c, 'calm')),
  // Songs are the videos of the «Fun» category (nursery songs and counting songs), across every subject.
  _LessonTile('songs', const Offset(0.332, 0.76), const Offset(0.332, 0.82), () => tr2('أناشيد', 'Songs'), (_, c) => VideoListScreen(age: c.age, initialCategory: 'Fun')),
  _LessonTile('art', const Offset(0.505, 0.76), const Offset(0.505, 0.82), () => tr2('فني', 'Art'), (_, c) => _videos(c, 'drawing')),
  // Puzzles are the thinking games of the games hub.
  _LessonTile('puzzles', const Offset(0.676, 0.76), const Offset(0.676, 0.82), () => tr2('ألغاز', 'Puzzles'), (_, c) => CategoryGamesScreen(category: kGameCategories.firstWhere((g) => g.id == 'brain'), child: c)),
  _LessonTile('drawing', const Offset(0.849, 0.76), const Offset(0.849, 0.82), () => tr2('رسم', 'Drawing'), (_, c) => DrawingScreen(child: c)),
];

/// «دروسي»: the owner's picture with ten tiles. «كل الدروس والمزيد» (a small real button, not in the picture) opens the
/// older hub with every other subject, the letters, the learning lands and the words, so nothing becomes unreachable.
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
          labels: [for (final t in _lessonTiles) PictureNameLabel(t.name, 0.14, 0.075, t.title())],
          spots: [
            _back(context),
            for (final t in _lessonTiles)
              PictureSpot(t.id, t.center, 0.15, 0.27, t.title(), () => Navigator.push(context, MaterialPageRoute<void>(builder: (c) => t.open(c, child))), key: ValueKey('lesson_${t.id}')),
          ],
          overlays: (w, h) => [
            Positioned(
              left: 0,
              right: 0,
              bottom: h * 0.012,
              child: Center(
                child: FocusableTap(
                  key: const ValueKey('lessons_more'),
                  radius: 22,
                  semanticLabel: tr2('كل الدروس والمزيد', 'All lessons and more'),
                  onTap: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => LearnHubScreen(child: child))),
                  child: Container(
                    padding: EdgeInsets.symmetric(horizontal: w * 0.02, vertical: h * 0.012),
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(colors: [Color(0xFF8A52E8), Color(0xFF5B2BB8)]),
                      borderRadius: BorderRadius.circular(40),
                      border: Border.all(color: Colors.white, width: 2),
                      boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 4, offset: Offset(0, 2))],
                    ),
                    child: Text(tr2('كل الدروس والمزيد', 'All lessons and more'), style: TextStyle(fontFamily: 'Tajawal', fontSize: (w * 0.019).clamp(12.0, 18.0), fontWeight: FontWeight.w900, color: Colors.white)),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
