import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../design/focusable_tap.dart';
import '../../design/picture_stage.dart';
import '../../family_time/family_time_screen.dart';
import '../../games/game_catalog.dart';
import '../../l10n/app_locale.dart';
import '../../l10n/strings.dart';
import '../../parent_screens.dart';
import '../../world/world_screen.dart';
import '../avatars.dart';
import '../lands.dart';
import '../models.dart';
import '../my_day.dart';
import '../progress.dart';
import '../repository.dart';
import '../reward_totals.dart';
import '../stickers.dart';
import 'home_hubs.dart';
import 'my_day_cards.dart';
import 'picture_screens.dart' show ComingSoonScreen;

/// «ملفي الشخصي» (2026-11-07): the owner's picture of the child's own page. The painted numbers of the design were erased
/// and are drawn live from what the child really did; every island and button opens a real page (the pet is the only one
/// that is not built yet and says so). Nothing is bought here: the counters are stars and stickers earned by finishing
/// things, and nothing is ever taken away.
const String kProfilePicture = 'assets/home/me_scene.webp';
const double kProfileAspect = 1672 / 941;

const _ink = Color(0xFF4B2E9B);

/// The stage of the tree is the garden's stage; the bar shows how far the next stage is.
({int n, int target}) treeProgress(int n) {
  const steps = [1, 4, 10, 20, 40];
  final target = steps.firstWhere((s) => s > n, orElse: () => 40);
  return (n: n, target: target);
}

class _Data {
  final RewardTotals totals;
  final Garden garden;
  final int stickers;
  const _Data(this.totals, this.garden, this.stickers);
}

class ProfileScreen extends StatefulWidget {
  final ChildProfile child;
  final VoidCallback? onBack;
  const ProfileScreen({super.key, required this.child, this.onBack});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  late Future<_Data> _future = _load();

  Future<_Data> _load() async {
    final id = widget.child.id;
    final totals = await RewardTotals.of(id);
    final garden = await loadGarden(id);
    return _Data(totals, garden, stickersUnlocked(garden.flowers));
  }

  void _refresh() => setState(() {
        _future = _load();
      });

  Future<void> _go(Widget page) async {
    await Navigator.push<void>(context, MaterialPageRoute<void>(builder: (_) => page));
    if (mounted) _refresh();
  }

  Future<void> _pickAvatar(ChildProfile p) async {
    final id = await showModalBottomSheet<String>(
      context: context,
      builder: (c) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Wrap(
            alignment: WrapAlignment.center,
            spacing: 12,
            runSpacing: 12,
            children: [
              for (final a in kAvatars)
                FocusableTap(
                  key: ValueKey('profile_avatar_${a.id}'),
                  radius: 40,
                  semanticLabel: a.name(),
                  onTap: () => Navigator.pop(c, a.id),
                  child: AvatarFace(id: a.id, size: 72, selected: p.avatar == a.id),
                ),
            ],
          ),
        ),
      ),
    );
    if (id == null || !mounted) return;
    await JourneyStore.instance.updateProfile(p.copyWith(avatar: id));
    if (mounted) _refresh();
  }

  void _surprise(ChildProfile p) {
    final s = surpriseOfDay(DateTime.now(), p.age);
    final g = s.game;
    _go(g != null ? g.build(p.id, p.age, learnLangOf(p)) : FamilyTimeScreen(child: p));
  }

  @override
  Widget build(BuildContext context) {
    final ar = AppLocale.instance.isArabic;
    return ListenableBuilder(
      listenable: JourneyStore.instance,
      builder: (context, _) {
        final p = JourneyStore.instance.profileById(widget.child.id) ?? widget.child;
        return FutureBuilder<_Data>(
          future: _future,
          builder: (context, snap) {
            final d = snap.data;
            final totals = d?.totals ?? const RewardTotals(stars: 0, xp: 0, games: 0, videos: 0);
            final tp = treeProgress(d?.garden.flowers ?? 0);
            return PictureStage(
              key: const ValueKey('profile_picture'),
              asset: kProfilePicture,
              aspect: kProfileAspect,
              showLabels: !ar,
              labels: [
                PictureNameLabel(const Offset(0.499, 0.062), 0.2, 0.065, tr2('ملفي الشخصي', 'My profile')),
                PictureNameLabel(const Offset(0.215, 0.617), 0.17, 0.06, tr2('ألبوم ملصقاتي', 'My stickers')),
                PictureNameLabel(const Offset(0.496, 0.572), 0.16, 0.05, tr2('شجرة نجاحي', 'My success tree')),
                PictureNameLabel(const Offset(0.783, 0.62), 0.13, 0.06, tr2('حيواني الأليف', 'My pet')),
                PictureNameLabel(const Offset(0.19, 0.903), 0.15, 0.06, tr2('صندوق مفاجآتي', 'Surprise box')),
                PictureNameLabel(const Offset(0.452, 0.903), 0.15, 0.06, tr2('غرفتي السحرية', 'My magic room')),
                PictureNameLabel(const Offset(0.71, 0.903), 0.17, 0.06, tr2('رحلتي في التعلم', 'My learning')),
                PictureNameLabel(const Offset(0.939, 0.77), 0.085, 0.035, tr2('إنجازاتي', 'Awards')),
                PictureNameLabel(const Offset(0.939, 0.861), 0.085, 0.035, tr2('الإعدادات', 'Settings')),
                PictureNameLabel(const Offset(0.939, 0.945), 0.085, 0.035, tr2('إحصائياتي', 'My stats')),
              ],
              spots: [
                if (widget.onBack != null) PictureSpot('back', const Offset(0.051, 0.085), 0.08, 0.14, tr2('رجوع', 'Back'), widget.onBack!, radius: 44, key: const ValueKey('profile_back')),
                PictureSpot('edit', const Offset(0.624, 0.202), 0.04, 0.07, tr2('تغيير صورتي', 'Change my picture'), () => _pickAvatar(p), radius: 24, key: const ValueKey('profile_edit')),
                PictureSpot('stickers', const Offset(0.215, 0.553), 0.27, 0.25, tr2('ألبوم ملصقاتي', 'My sticker album'), () => _go(_CardPage(title: tr2('ألبوم الملصقات', 'Sticker album'), card: StickerAlbumCard(child: p))), radius: 28, key: const ValueKey('profile_stickers')),
                PictureSpot('tree', const Offset(0.498, 0.51), 0.28, 0.30, tr2('شجرة نجاحي', 'My success tree'), () => _go(_CardPage(title: tr2('حديقتي', 'My garden'), card: GardenCard(child: p))), radius: 28, key: const ValueKey('profile_tree')),
                PictureSpot('pet', const Offset(0.756, 0.515), 0.21, 0.31, tr2('حيواني الأليف', 'My pet'), () => _go(ComingSoonScreen(title: tr2('حيواني الأليف', 'My pet'), message: tr2('حيوانك الأليف جاي قريب!', 'Your pet is coming soon!'), icon: Icons.pets_rounded)), radius: 28, key: const ValueKey('profile_pet')),
                PictureSpot('surprise', const Offset(0.19, 0.818), 0.24, 0.27, tr2('صندوق مفاجآتي', 'My surprise box'), () => _surprise(p), radius: 28, key: const ValueKey('profile_surprise')),
                PictureSpot('room', const Offset(0.453, 0.818), 0.25, 0.27, tr2('غرفتي السحرية', 'My magic room'), () => _go(WorldScreen(child: p)), radius: 28, key: const ValueKey('profile_room')),
                PictureSpot('journey', const Offset(0.718, 0.818), 0.245, 0.27, tr2('رحلتي في التعلم', 'My learning journey'), () => _go(LearnHubScreen(child: p)), radius: 28, key: const ValueKey('profile_journey')),
                PictureSpot('awards', const Offset(0.939, 0.749), 0.09, 0.09, tr2('إنجازاتي', 'My awards'), () => _go(AchievementsScreen(child: p)), radius: 20, key: const ValueKey('profile_awards')),
                PictureSpot('settings', const Offset(0.939, 0.845), 0.09, 0.09, tr2('الإعدادات', 'Settings'), () => openParentArea(context), radius: 20, key: const ValueKey('profile_settings')),
                PictureSpot('stats', const Offset(0.939, 0.935), 0.09, 0.09, tr2('إحصائياتي', 'My stats'), () => _go(StatsScreen(child: p, totals: totals)), radius: 20, key: const ValueKey('profile_stats')),
              ],
              overlays: (w, h) {
                final k = w / 1672; // picture pixels -> screen
                Widget at(double cx, double cy, double pw, double ph, Widget c) => Positioned(left: (cx - pw / 2) * k, top: (cy - ph / 2) * (h / 941), width: pw * k, height: ph * (h / 941), child: c);
                Widget txt(String s, double size, Color color, {List<Shadow>? shadows}) => FittedBox(fit: BoxFit.scaleDown, child: Text(s, maxLines: 1, style: TextStyle(fontFamily: 'Tajawal', fontSize: size * k, fontWeight: FontWeight.w900, color: color, shadows: shadows)));
                Widget pill(String emoji, String value, double cy, double ph) => at(
                      1505,
                      cy,
                      172,
                      ph,
                      IgnorePointer(
                        child: Container(
                          decoration: BoxDecoration(color: const Color(0xFFE9E0F7), borderRadius: BorderRadius.circular(ph * k), border: Border.all(color: const Color(0xFFD7C8F0), width: 2)),
                          padding: EdgeInsets.symmetric(horizontal: 14 * k),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(emoji, style: TextStyle(fontSize: 34 * k)),
                              Flexible(child: txt(value, 36, _ink)),
                            ],
                          ),
                        ),
                      ),
                    );
                final frac = tp.target == 0 ? 0.0 : math.min(tp.n / tp.target, 1.0);
                return [
                  // the child's own picture inside the painted ring
                  at(725, 232, 206, 206, IgnorePointer(child: ClipOval(child: ChildAvatar(child: p, size: 206 * k)))),
                  at(945, 205, 150, 66, IgnorePointer(child: txt(p.nickname, 54, _ink))),
                  at(988, 273, 118, 34, IgnorePointer(child: txt(tr2('المستوى ${totals.level}', 'Level ${totals.level}'), 28, Colors.white))),
                  pill('⭐', '${totals.stars}', 76, 46),
                  pill('🎟️', '${d?.stickers ?? 0}', 139, 52),
                  // the tree bar: how far the next stage of the garden is (a stage comes from finished things only)
                  at(
                    840.5,
                    595.5,
                    251,
                    27,
                    IgnorePointer(
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(14 * k),
                        child: Stack(
                          fit: StackFit.expand,
                          children: [
                            const ColoredBox(color: Color(0xFF8A3E0B)),
                            FractionallySizedBox(
                              alignment: AlignmentDirectional.centerStart,
                              widthFactor: frac,
                              child: const DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF7BD33E), Color(0xFF3E9B1E)]))),
                            ),
                            Center(child: txt('${tp.n} / ${tp.target}', 22, Colors.white, shadows: const [Shadow(color: Color(0xFF3A2A6E), blurRadius: 3, offset: Offset(0, 1))])),
                          ],
                        ),
                      ),
                    ),
                  ),
                ];
              },
            );
          },
        );
      },
    );
  }
}

/// A calm page holding one card of the profile (the sticker album, the garden).
class _CardPage extends StatelessWidget {
  final String title;
  final Widget card;
  const _CardPage({required this.title, required this.card});

  @override
  Widget build(BuildContext context) => Scaffold(
        extendBodyBehindAppBar: true,
        appBar: AppBar(backgroundColor: Colors.transparent, elevation: 0, foregroundColor: _ink, centerTitle: true, title: Text(title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 24, color: _ink))),
        body: PictureBackdrop(
          child: SafeArea(
            child: Center(child: ConstrainedBox(constraints: const BoxConstraints(maxWidth: 560), child: SingleChildScrollView(padding: const EdgeInsets.all(16), child: card))),
          ),
        ),
      );
}

/// «إنجازاتي»: the badges, earned ones lit and the others shown with what they need (nothing is hidden or taken away).
class AchievementsScreen extends StatelessWidget {
  final ChildProfile child;
  const AchievementsScreen({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    final store = JourneyStore.instance;
    final earned = store.progressOf(child.id).badges.map((b) => b.id).toSet();
    return _CardPage(
      title: tr2('إنجازاتي', 'My awards'),
      card: Wrap(
        key: const ValueKey('achievements'),
        alignment: WrapAlignment.center,
        spacing: 12,
        runSpacing: 12,
        children: [
          for (final b in kBadges)
            Container(
              key: ValueKey('badge_${b.id}'),
              width: 150,
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(color: earned.contains(b.id) ? const Color(0xFFFFF1D6) : Colors.white70, borderRadius: BorderRadius.circular(22), border: Border.all(color: earned.contains(b.id) ? const Color(0xFFFFB347) : const Color(0xFFCDBDF0), width: 3)),
              child: Column(children: [
                Opacity(opacity: earned.contains(b.id) ? 1 : 0.35, child: Text(b.emoji, style: const TextStyle(fontSize: 44))),
                const SizedBox(height: 4),
                Text(b.title, textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.w900, color: _ink)),
                Text(b.description, textAlign: TextAlign.center, style: const TextStyle(fontSize: 12, color: _ink)),
              ]),
            ),
        ],
      ),
    );
  }
}

/// «إحصائياتي»: the child's own numbers, all real: level, stars by source, goals and the last seven days.
class StatsScreen extends StatelessWidget {
  final ChildProfile child;
  final RewardTotals totals;
  const StatsScreen({super.key, required this.child, required this.totals});

  @override
  Widget build(BuildContext context) {
    final store = JourneyStore.instance;
    final progress = store.progressOf(child.id);
    final week = weeklyCounts(store.attemptsOf(child.id), DateTime.now());
    final weeklyGoal = store.settings.badgeThresholds['weekly_hero'] ?? 10;
    Widget row(String a, String b) => Padding(padding: const EdgeInsets.symmetric(vertical: 5), child: Row(children: [Expanded(child: Text(a, style: const TextStyle(fontSize: 17, color: _ink, fontWeight: FontWeight.w700))), Text(b, style: const TextStyle(fontSize: 20, color: _ink, fontWeight: FontWeight.w900))]));
    return _CardPage(
      title: tr2('إحصائياتي', 'My stats'),
      card: Container(
        key: const ValueKey('stats'),
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(color: Colors.white.withAlpha(235), borderRadius: BorderRadius.circular(28), border: Border.all(color: const Color(0xFF8A52E8), width: 3)),
        child: Column(children: [
          row(tr2('المستوى', 'Level'), '${totals.level}'),
          LinearProgressIndicator(value: totals.xpIntoLevel / 100, minHeight: 10, borderRadius: BorderRadius.circular(8), color: const Color(0xFF7A3FE0), backgroundColor: const Color(0xFFE5D9F8)),
          const Divider(),
          row(tr2('النجوم', 'Stars'), '${totals.stars}'),
          row(tr2('أنشطة أنهيتها', 'Activities finished'), '${progress.completedTotal}'),
          row(tr2('ألعاب أنهيتها', 'Games finished'), '${totals.games}'),
          row(tr2('دروس شاهدتها', 'Lessons watched'), '${totals.videos}'),
          const Divider(),
          row(tr2('هدف اليوم', "Today's goal"), '${progress.todayDone.length}/${child.dailyCount}'),
          row(tr2('هدف الأسبوع', "This week's goal"), '${progress.weekCompleted}/$weeklyGoal'),
          const SizedBox(height: 10),
          Semantics(
            label: tr2('الأنشطة في آخر سبعة أيام', 'Activities in the last seven days'),
            child: Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
              for (var i = 0; i < 7; i++)
                Expanded(
                  child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
                    Text(week[i] > 0 ? '${week[i]}' : '', style: const TextStyle(fontSize: 12, color: _ink)),
                    Container(margin: const EdgeInsets.symmetric(horizontal: 5), height: 6 + week[i].clamp(0, 6) * 9.0, decoration: BoxDecoration(color: week[i] > 0 ? const Color(0xFF7A3FE0) : const Color(0x337A3FE0), borderRadius: BorderRadius.circular(8))),
                  ]),
                ),
            ]),
          ),
        ]),
      ),
    );
  }
}
