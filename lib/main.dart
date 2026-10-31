import 'lessons/lesson_store.dart';
import 'video_controls.dart';
import 'dart:convert';
import 'dart:math';

import 'package:flutter/gestures.dart' show PointerDeviceKind;
import 'package:flutter/material.dart';

import 'design/worlds.dart';
import 'media/audio_gate.dart';
import 'web_lang.dart';

import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/services.dart';

import 'curriculum.dart';
import 'design/tokens.dart';
import 'display_prefs.dart';
import 'l10n/app_locale.dart';
import 'media/audio.dart';
import 'firebase_config.dart';
import 'journey/repository.dart';
import 'journey/ui/lesson_flow.dart';
import 'journey/ui/start_screen.dart';
import 'design/app_intro.dart';
import 'design/motion.dart';
import 'offline/connectivity.dart';
import 'player_screen.dart';
import 'rest_screen.dart';
import 'session_manager.dart';
import 'ui.dart';
import 'l10n/strings.dart';
import 'media/rehlaty_audio_engine.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await lockLandscape();
  await initFirebase();
  await JourneyStore.instance.load();
  await DisplayPrefs.instance.load();
  await AppLocale.instance.load();
  await AudioPrefs.instance.load();
  await EnginePrefs.instance.load();
  RehlatyAudioEngine.instance.attachGameCues();
  await AppAudio.reloadManifest();
  WidgetsBinding.instance.addObserver(_AudioLifecycle());
  ConnectivityMonitor.instance.start();
  runApp(const KidsApp());
}

/// The app opens and stays in landscape on phones and tablets (both landscape sides). Not applied on the web.
Future<void> lockLandscape() async {
  if (kIsWeb) return;
  await SystemChrome.setPreferredOrientations(kLandscapeOrientations);
}

const kLandscapeOrientations = [
  DeviceOrientation.landscapeLeft,
  DeviceOrientation.landscapeRight,
];

class KidsApp extends StatelessWidget {
  const KidsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: tr2('رحلتي', 'Rehlaty'),
      scrollBehavior: const AppScrollBehavior(),
      theme: ThemeData(
        colorSchemeSeed: DS.primary,
        useMaterial3: true,
        fontFamily: 'Tajawal',
        pageTransitionsTheme: kSoftPageTransitions,
        // Keyboard focus and mouse hover are visible everywhere, not only on the custom tiles.
        focusColor: DS.focusColor.withAlpha(40),
        hoverColor: DS.focusColor.withAlpha(20),
        visualDensity: VisualDensity.standard,
        scrollbarTheme: ScrollbarThemeData(
          thumbVisibility: WidgetStateProperty.resolveWith(
            (s) => s.contains(WidgetState.hovered),
          ),
          interactive: true,
        ),
        // The top of the journey sky, so an app bar over any screen blends into the world behind it.
        scaffoldBackgroundColor: kWorldPalettes[RWorld.journey]!.top,
        appBarTheme: const AppBarTheme(
          centerTitle: true,
          backgroundColor: Colors.transparent,
          scrolledUnderElevation: 0,
          surfaceTintColor: Colors.transparent,
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
        listenable: Listenable.merge([
          DisplayPrefs.instance,
          AppLocale.instance,
        ]),
        builder: (context, _) {
          final prefs = DisplayPrefs.instance;
          final media = MediaQuery.of(context);
          setDocumentLanguage(AppLocale.instance.code);
          return MediaQuery(
            data: media.copyWith(
              textScaler: prefs.textScale == 1.0
                  ? media.textScaler
                  : TextScaler.linear(prefs.textScale),
              disableAnimations: media.disableAnimations || prefs.reduceMotion,
            ),
            child: Directionality(
              textDirection: AppLocale.instance.direction,
              child: child!,
            ),
          );
        },
      ),
      home: const AppIntro(child: StartScreen()),
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

  /// `approved` (shown to children), `pending` (not yet reviewed: never shown) or `rejected` (never shown). Videos
  /// without the field are approved, as before.
  final String approval;

  /// What the app team knows about this video: always `unverified` for every bundled entry. NOTHING in the app marks a
  /// video `verified`; a parent's preview and approval are the family's decision, not a verification by the app.
  final String verification;

  /// `bundled` (listed in assets/videos.json) or `parent` (added by a parent by exact link on this device).
  final String origin;
  const Video({
    required this.youtubeId,
    required this.title,
    required this.category,
    required this.minAge,
    required this.maxAge,
    required this.language,
    this.subject = 'discover',
    this.approval = 'approved',
    this.origin = 'bundled',
    this.verification = 'unverified',
  });

  factory Video.fromJson(Map<String, dynamic> json) => Video(
    youtubeId: json['youtubeId'] as String,
    title: json['title'] as String,
    category: json['category'] as String,
    minAge: json['minAge'] as int,
    maxAge: json['maxAge'] as int,
    language: json['language'] as String,
    subject: json['subject'] as String? ?? 'discover',
    approval: json['approval'] as String? ?? 'approved',
    verification: json['verification'] as String? ?? 'unverified',
  );

  bool get approved => approval == 'approved';
}

/// The videos a child may see: listed (assets/videos.json or added by a parent by exact link), not rejected, APPROVED BY
/// THE PARENT on this device, and not disabled. Nothing is visible to a child until a parent approves it. [all] is only
/// for the parent's review screen. Never returns a video that is not in one of those two lists.
Future<List<Video>> loadVideos({bool all = false}) async {
  final raw = await rootBundle.loadString('assets/videos.json');
  final list = jsonDecode(raw) as List<dynamic>;
  final videos = [
    for (final e in list) Video.fromJson(e as Map<String, dynamic>),
    ...await LessonStore.added(),
  ];
  if (all) return videos;
  final hidden = await VideoControls.hidden();
  final approved = await LessonStore.approved();
  return [for (final v in videos) if (v.approved && approved.contains(v.youtubeId) && !hidden.contains(v.youtubeId)) v];
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
                          errorBuilder: (_, _, _) =>
                              ColoredBox(color: color.withAlpha(60)),
                          loadingBuilder: (_, child, progress) =>
                              progress == null
                              ? child
                              : ColoredBox(color: color.withAlpha(60)),
                        ),
                        Center(
                          child: Icon(
                            Icons.play_circle_fill,
                            size: 40,
                            color: Colors.white.withAlpha(230),
                          ),
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
                        style: const TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
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
  const VideoListScreen({
    super.key,
    required this.age,
    this.subject,
    this.autoPlan = false,
  });

  @override
  State<VideoListScreen> createState() => _VideoListScreenState();
}

/// "Today's plan" order: learning, then a story, then something fun.
const _planOrder = ['Learning', 'Story', 'Fun'];

class _VideoListScreenState extends State<VideoListScreen> {
  final _session = SessionManager.instance;
  bool _planStarted = false;
  String? _category;

  // Read once per screen: build runs on every rebuild and must not parse the whitelist again.
  late final Future<List<Video>> _videos = loadVideos();

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
    final forAge = allForAge
        .where((v) => v.subject != 'german' && v.subject != 'french')
        .toList();
    return [
      for (final category in _planOrder)
        if (forAge.any((v) => v.category == category))
          (forAge.where((v) => v.category == category).toList()
                ..shuffle(random))
              .first,
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
    // Videos that may follow this one: the whitelist for the child's age (nothing else is ever played).
    List<Video> related;
    try {
      related = [
        for (final v in await loadVideos())
          if (age >= v.minAge && age <= v.maxAge) v,
      ];
    } catch (_) {
      related = const [];
    }
    if (!mounted) return;
    final current = ValueNotifier<Video>(video);
    final finished = await Navigator.push<bool>(
      context,
      MaterialPageRoute(
        builder: (_) =>
            PlayerScreen(video: video, related: related, current: current),
      ),
    );
    if (!mounted) return;
    // Watched to the end: watch -> try -> apply, unless time is up. The lesson is about the last video played.
    final child = JourneyStore.instance.active;
    if (finished == true && child != null && _session.reason.value == null) {
      await Navigator.push(
        context,
        MaterialPageRoute(
          builder: (_) => LessonFlowScreen(video: current.value, child: child),
        ),
      );
    }
    if (mounted) _checkRest();
  }

  @override
  Widget build(BuildContext context) {
    return WorldBackground(world: RWorld.journey, child: Scaffold(
      backgroundColor: Colors.transparent,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text(
          subjectById(subject ?? '')?.label ??
              tr2('فيديوهات لعمر $age', 'Videos for age $age'),
          style: const TextStyle(fontSize: 26),
        ),
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
        future: _videos,
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return Center(
              child: Text(
                loc('تعذر تحميل الفيديوهات'),
                style: TextStyle(fontSize: 24),
              ),
            );
          }
          if (!snapshot.hasData) {
            return const Center(child: CircularProgressIndicator());
          }
          final list = snapshot.data!
              .where(
                (v) =>
                    age >= v.minAge &&
                    age <= v.maxAge &&
                    (subject == null || v.subject == subject),
              )
              .toList();
          if (list.isEmpty) {
            return Center(
              child: SingleChildScrollView(
                key: const ValueKey('video_empty'),
                padding: const EdgeInsets.all(24),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Icon(Icons.video_library_outlined, size: 56, color: Colors.black45),
                    const SizedBox(height: 12),
                    Text(
                      subject == null
                          ? tr2('لا توجد فيديوهات لهذا العمر بعد. اطلب من شخص بالغ أن يختار الدروس من منطقة الوالدين.', 'No videos for this age yet. Ask a grown-up to choose lessons in the parent area.')
                          : tr2('لا توجد دروس بعد لهذه المادة. اطلب من شخص بالغ أن يختارها.', 'No lessons for this subject yet. Ask a grown-up to choose some.'),
                      textAlign: TextAlign.center,
                      style: const TextStyle(fontSize: 22),
                    ),
                  ],
                ),
              ),
            );
          }
          final categories = {for (final v in list) v.category}.toList()..sort();
          final shownList = _category == null ? list : [for (final v in list) if (v.category == _category) v];
          final plan = _buildPlan(list);
          // "Today's plan" is the first row, only on the all-videos list.
          final offset = subject == null ? 1 : 0;
          if (widget.autoPlan && !_planStarted && plan.isNotEmpty) {
            _planStarted = true;
            WidgetsBinding.instance.addPostFrameCallback((_) {
              if (mounted) _runPlan(plan);
            });
          }
          return Column(children: [
            AnimatedBuilder(
              animation: ConnectivityMonitor.instance,
              builder: (_, _) => ConnectivityMonitor.instance.isOffline
                  ? Container(
                      key: const ValueKey('video_offline'),
                      width: double.infinity,
                      color: const Color(0xFFFFF1D6),
                      padding: const EdgeInsets.all(10),
                      child: Text(tr2('لا يوجد إنترنت. الفيديوهات تحتاج إلى إنترنت.', 'No internet. Videos need internet.'), textAlign: TextAlign.center, style: const TextStyle(fontSize: 18)),
                    )
                  : const SizedBox.shrink(),
            ),
            if (categories.length > 1)
              SizedBox(
                height: 56,
                child: ListView(
                  scrollDirection: Axis.horizontal,
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                  children: [
                    Padding(padding: const EdgeInsetsDirectional.only(end: 8), child: ChoiceChip(label: Text(tr2('الكل', 'All')), selected: _category == null, onSelected: (_) => setState(() => _category = null))),
                    for (final c in categories)
                      Padding(padding: const EdgeInsetsDirectional.only(end: 8), child: ChoiceChip(key: ValueKey('vcat_$c'), label: Text(categoryLabel(c)), selected: _category == c, onSelected: (_) => setState(() => _category = _category == c ? null : c))),
                  ],
                ),
              ),
            Expanded(child: ListView.builder(
            padding: const EdgeInsets.all(12),
            itemCount: shownList.length + offset,
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
                      style: TextStyle(
                        fontSize: 26,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                );
              }
              final video = shownList[i - offset];
              return _VideoCard(video: video, onTap: () => _play(video));
            },
          )),
          ]);
        },
      ),
    ));
  }
}

/// Lists scroll with a finger, a mouse drag, a trackpad or a stylus (the default leaves out the mouse),
/// and desktop browsers show a scrollbar.
class AppScrollBehavior extends MaterialScrollBehavior {
  const AppScrollBehavior();

  @override
  Set<PointerDeviceKind> get dragDevices => {
    PointerDeviceKind.touch,
    PointerDeviceKind.mouse,
    PointerDeviceKind.trackpad,
    PointerDeviceKind.stylus,
    PointerDeviceKind.invertedStylus,
  };
}

/// Lesson and story sounds stop when the app leaves the screen (see AudioGate). They never restart by themselves.
class _AudioLifecycle with WidgetsBindingObserver {
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    AudioGate.instance.setBackground(
      state == AppLifecycleState.paused ||
          state == AppLifecycleState.hidden ||
          state == AppLifecycleState.detached,
    );
  }
}
