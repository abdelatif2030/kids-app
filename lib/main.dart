import 'dart:convert';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'curriculum.dart';
import 'drawing_screen.dart';
import 'games_screen.dart';
import 'home_screen.dart';
import 'parent_screens.dart';
import 'player_screen.dart';
import 'rest_screen.dart';
import 'session_manager.dart';
import 'subjects_screen.dart';
import 'ui.dart';

void main() => runApp(const KidsApp());

class KidsApp extends StatelessWidget {
  const KidsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'تطبيق الأطفال',
      theme: ThemeData(
        colorSchemeSeed: Colors.orange,
        useMaterial3: true,
        scaffoldBackgroundColor: kBackground,
        filledButtonTheme: FilledButtonThemeData(
          style: FilledButton.styleFrom(
            minimumSize: const Size(64, 56),
            textStyle: const TextStyle(fontSize: 20),
          ),
        ),
      ),
      // Arabic-first: the whole app is right-to-left.
      builder: (context, child) =>
          Directionality(textDirection: TextDirection.rtl, child: child!),
      home: const AgeScreen(),
    );
  }
}

class Video {
  final String youtubeId;
  final String title;
  final String category;
  final int minAge;
  final int maxAge;
  final String language;
  final String subject;
  const Video({
    required this.youtubeId,
    required this.title,
    required this.category,
    required this.minAge,
    required this.maxAge,
    required this.language,
    this.subject = 'discover',
  });

  factory Video.fromJson(Map<String, dynamic> json) => Video(
        youtubeId: json['youtubeId'] as String,
        title: json['title'] as String,
        category: json['category'] as String,
        minAge: json['minAge'] as int,
        maxAge: json['maxAge'] as int,
        language: json['language'] as String,
        subject: json['subject'] as String? ?? 'discover',
      );
}

Future<List<Video>> loadVideos() async {
  final raw = await rootBundle.loadString('assets/videos.json');
  final list = jsonDecode(raw) as List<dynamic>;
  return [for (final e in list) Video.fromJson(e as Map<String, dynamic>)];
}

class AgeScreen extends StatelessWidget {
  const AgeScreen({super.key});

  /// Picking an age is the parent starting child mode.
  Future<void> _startSession(BuildContext context, int age) async {
    final session = SessionManager.instance;
    final blocked = await session.check();
    if (!context.mounted) return;
    if (blocked != null) {
      session.currentAge = age;
      goToRest(context, blocked);
      return;
    }
    await session.start(age);
    if (!context.mounted) return;
    Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => HomeScreen(age: age)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        actions: [
          IconButton(
            iconSize: 32,
            icon: const Icon(Icons.settings),
            tooltip: 'إعدادات الوالدين',
            onPressed: () => openParentArea(context),
          ),
        ],
      ),
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Mascot(size: 160),
              const SizedBox(height: 16),
              const Text(
                'كم عمر طفلك؟',
                style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 24),
              Wrap(
                spacing: 16,
                runSpacing: 16,
                alignment: WrapAlignment.center,
                children: [
                  for (var age = 1; age <= 12; age++)
                    SizedBox(
                      width: 104,
                      height: 104,
                      child: FilledButton(
                        style: FilledButton.styleFrom(
                          backgroundColor: kBright[(age - 1) % kBright.length],
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(28),
                          ),
                        ),
                        onPressed: () => _startSession(context, age),
                        child: Text(
                          '$age',
                          style: const TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/// Opens one of the child's home sections.
void openSection(BuildContext context, int age, String section) {
  final Widget screen = switch (section) {
    'subjects' => SubjectsScreen(age: age),
    'games' => GamesScreen(age: age),
    'draw' => const DrawingScreen(),
    _ => VideoListScreen(age: age),
  };
  Navigator.push(context, MaterialPageRoute(builder: (_) => screen));
}

class _VideoCard extends StatelessWidget {
  final Video video;
  final VoidCallback onTap;
  const _VideoCard({required this.video, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final color = categoryColor(video.category);
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 8),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
      clipBehavior: Clip.antiAlias,
      child: InkWell(
        onTap: onTap,
        child: ConstrainedBox(
          constraints: const BoxConstraints(minHeight: 96),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: SizedBox(
                    width: 128,
                    height: 72,
                    child: Stack(
                      fit: StackFit.expand,
                      children: [
                        Image.network(
                          'https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg',
                          fit: BoxFit.cover,
                          errorBuilder: (_, _, _) => ColoredBox(color: color.withAlpha(60)),
                          loadingBuilder: (_, child, progress) => progress == null
                              ? child
                              : ColoredBox(color: color.withAlpha(60)),
                        ),
                        Center(
                          child: Icon(Icons.play_circle_fill,
                              size: 40, color: Colors.white.withAlpha(230)),
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        video.title,
                        style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(height: 6),
                      Text(
                        categoryLabel(video.category),
                        style: TextStyle(fontSize: 16, color: color),
                      ),
                    ],
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

class VideoListScreen extends StatefulWidget {
  final int age;

  /// A subject id from curriculum.dart, or null for all videos (with "today's plan").
  final String? subject;
  const VideoListScreen({super.key, required this.age, this.subject});

  @override
  State<VideoListScreen> createState() => _VideoListScreenState();
}

/// "Today's plan" order: learning, then a story, then something fun.
const _planOrder = ['Learning', 'Story', 'Fun'];

class _VideoListScreenState extends State<VideoListScreen> {
  final _session = SessionManager.instance;

  int get age => widget.age;
  String? get subject => widget.subject;

  @override
  void initState() {
    super.initState();
    _session.reason.addListener(_checkRest);
    // A parent who resumes with the time already used up goes straight back to rest.
    WidgetsBinding.instance.addPostFrameCallback((_) => _checkRest());
  }

  @override
  void dispose() {
    _session.reason.removeListener(_checkRest);
    super.dispose();
  }

  /// Only acts while this list is the visible screen, so a video that is
  /// playing is always allowed to finish first.
  void _checkRest() {
    final reason = _session.reason.value;
    if (reason == null || !mounted) return;
    if (ModalRoute.of(context)?.isCurrent != true) return;
    goToRest(context, reason);
  }

  /// One random video per category, in a balanced order. Categories with no
  /// video for this age are skipped.
  List<Video> _buildPlan(List<Video> forAge) {
    final random = Random();
    return [
      for (final category in _planOrder)
        if (forAge.any((v) => v.category == category))
          (forAge.where((v) => v.category == category).toList()..shuffle(random)).first,
    ];
  }

  Future<void> _runPlan(List<Video> plan) async {
    var stars = 0;
    for (final video in plan) {
      final finished = await Navigator.push<bool>(
        context,
        MaterialPageRoute(builder: (_) => PlayerScreen(video: video)),
      );
      if (!mounted) return;
      if (finished != true) {
        _checkRest();
        return;
      }
      stars++;
      final reason = _session.reason.value;
      if (reason != null) {
        goToRest(context, reason);
        return;
      }
    }
    goToPlanDone(context, stars);
  }

  Future<void> _play(Video video) async {
    await Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => PlayerScreen(video: video)),
    );
    if (mounted) _checkRest();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text(subjectById(subject ?? '')?.label ?? 'فيديوهات لعمر $age',
            style: const TextStyle(fontSize: 26)),
      ),
      bottomNavigationBar: ValueListenableBuilder<int?>(
        valueListenable: _session.remainingSeconds,
        builder: (context, left, _) {
          if (left == null || left <= 0 || left > 120) {
            return const SizedBox.shrink();
          }
          return const SafeArea(
            child: Padding(
              padding: EdgeInsets.all(12),
              child: Text(
                'سينتهي الوقت قريباً',
                textAlign: TextAlign.center,
                textDirection: TextDirection.rtl,
                style: TextStyle(fontSize: 20),
              ),
            ),
          );
        },
      ),
      body: FutureBuilder<List<Video>>(
        future: loadVideos(),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return const Center(
              child: Text('تعذر تحميل الفيديوهات', style: TextStyle(fontSize: 24)),
            );
          }
          if (!snapshot.hasData) {
            return const Center(child: CircularProgressIndicator());
          }
          final list = snapshot.data!
              .where((v) =>
                  age >= v.minAge && age <= v.maxAge && (subject == null || v.subject == subject))
              .toList();
          if (list.isEmpty) {
            return Center(
              child: Text(
                subject == null ? 'لا توجد فيديوهات لهذا العمر' : 'لا توجد دروس بعد لهذه المادة',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 24),
              ),
            );
          }
          final plan = _buildPlan(list);
          // "Today's plan" is the first row, only on the all-videos list.
          final offset = subject == null ? 1 : 0;
          return ListView.builder(
            padding: const EdgeInsets.all(12),
            itemCount: list.length + offset,
            itemBuilder: (_, i) {
              if (offset == 1 && i == 0) {
                return Padding(
                  padding: const EdgeInsets.symmetric(vertical: 8),
                  child: FilledButton.icon(
                    style: FilledButton.styleFrom(
                      minimumSize: const Size.fromHeight(72),
                      backgroundColor: kBright[2],
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(24),
                      ),
                    ),
                    onPressed: plan.isEmpty ? null : () => _runPlan(plan),
                    icon: const Icon(Icons.star_rounded, size: 36),
                    label: const Text(
                      'خطة اليوم',
                      style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold),
                    ),
                  ),
                );
              }
              final video = list[i - offset];
              return _VideoCard(video: video, onTap: () => _play(video));
            },
          );
        },
      ),
    );
  }
}
