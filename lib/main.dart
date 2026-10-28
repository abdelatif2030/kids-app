import 'dart:convert';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'curriculum.dart';
import 'design/tokens.dart';
import 'display_prefs.dart';
import 'l10n/app_locale.dart';
import 'media/audio.dart';
import 'firebase_config.dart';
import 'journey/repository.dart';
import 'journey/ui/kit.dart' show RC;
import 'journey/ui/lesson_flow.dart';
import 'journey/ui/start_screen.dart';
import 'player_screen.dart';
import 'rest_screen.dart';
import 'session_manager.dart';
import 'ui.dart';
import 'l10n/strings.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await initFirebase();
  await JourneyStore.instance.load();
  await DisplayPrefs.instance.load();
  await AppLocale.instance.load();
  await AudioPrefs.instance.load();
  await AppAudio.reloadManifest();
  runApp(const KidsApp());
}

class KidsApp extends StatelessWidget {
  const KidsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: loc('تطبيق الأطفال'),
      theme: ThemeData(
        colorSchemeSeed: DS.primary,
        useMaterial3: true,
        fontFamily: 'Tajawal',
        scaffoldBackgroundColor: RC.bg,
        appBarTheme: const AppBarTheme(
          centerTitle: true,
          backgroundColor: Colors.transparent,
          scrolledUnderElevation: 0,
        ),
        filledButtonTheme: FilledButtonThemeData(
          style: FilledButton.styleFrom(
            minimumSize: const Size(64, 56),
            textStyle: const TextStyle(fontSize: 20),
          ),
        ),
      ),
      // Arabic-first: right-to-left unless the parent chose English.
      builder: (context, child) => ListenableBuilder(
        listenable: Listenable.merge([DisplayPrefs.instance, AppLocale.instance]),
        builder: (context, _) {
          final prefs = DisplayPrefs.instance;
          final media = MediaQuery.of(context);
          return MediaQuery(
            data: media.copyWith(
              textScaler: prefs.textScale == 1.0 ? media.textScaler : TextScaler.linear(prefs.textScale),
              disableAnimations: media.disableAnimations || prefs.reduceMotion,
            ),
            child: Directionality(textDirection: AppLocale.instance.direction, child: child!),
          );
        },
      ),
      home: const StartScreen(),
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

  /// Start "today's plan" as soon as the list loads (the home "let's play" button).
  final bool autoPlan;
  const VideoListScreen({super.key, required this.age, this.subject, this.autoPlan = false});

  @override
  State<VideoListScreen> createState() => _VideoListScreenState();
}

/// "Today's plan" order: learning, then a story, then something fun.
const _planOrder = ['Learning', 'Story', 'Fun'];

class _VideoListScreenState extends State<VideoListScreen> {
  final _session = SessionManager.instance;
  bool _planStarted = false;

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
  List<Video> _buildPlan(List<Video> allForAge) {
    final random = Random();
    // Foreign-language lessons are opened from "دروسي", not picked at random.
    final forAge =
        allForAge.where((v) => v.subject != 'german' && v.subject != 'french').toList();
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
    final finished = await Navigator.push<bool>(
      context,
      MaterialPageRoute(builder: (_) => PlayerScreen(video: video)),
    );
    if (!mounted) return;
    // Watched to the end: watch -> try -> apply, unless time is up.
    final child = JourneyStore.instance.active;
    if (finished == true && child != null && _session.reason.value == null) {
      await Navigator.push(
        context,
        MaterialPageRoute(builder: (_) => LessonFlowScreen(video: video, child: child)),
      );
    }
    if (mounted) _checkRest();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text(subjectById(subject ?? '')?.label ?? tr2('فيديوهات لعمر $age', 'Videos for age $age'),
            style: const TextStyle(fontSize: 26)),
      ),
      bottomNavigationBar: ValueListenableBuilder<int?>(
        valueListenable: _session.remainingSeconds,
        builder: (context, left, _) {
          if (left == null || left <= 0 || left > 120) {
            return const SizedBox.shrink();
          }
          return SafeArea(
            child: Padding(
              padding: EdgeInsets.all(12),
              child: Text(
                loc('سينتهي الوقت قريباً'),
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
            return Center(
              child: Text(loc('تعذر تحميل الفيديوهات'), style: TextStyle(fontSize: 24)),
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
                subject == null ? loc('لا توجد فيديوهات لهذا العمر') : loc('لا توجد دروس بعد لهذه المادة'),
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 24),
              ),
            );
          }
          final plan = _buildPlan(list);
          // "Today's plan" is the first row, only on the all-videos list.
          final offset = subject == null ? 1 : 0;
          if (widget.autoPlan && !_planStarted && plan.isNotEmpty) {
            _planStarted = true;
            WidgetsBinding.instance.addPostFrameCallback((_) {
              if (mounted) _runPlan(plan);
            });
          }
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
                    label: Text(
                      loc('خطة اليوم'),
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
