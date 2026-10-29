import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import '../curriculum.dart' show kSubjects;
import '../l10n/strings.dart';
import '../main.dart' show Video;
import 'planner.dart';

/// OPTIONAL AI suggestions for the plan assistant. OFF by default. When the parent turns it on (after reading exactly what
/// is sent), the typed summary below is sent to a server the owner sets up, and the answer is checked against the app's real
/// content before anything is shown: the AI can only choose among real learning areas, real subjects and the reviewed
/// videos. If it is off, not set up, offline or answers badly, the rule-based plans are used and the parent is told.
///
/// NEVER sent: the child's name or nickname, ids, photos, voice, progress, family or account details. The parent's note is
/// cleaned first (e-mails, links, phone-like numbers and the child's name are removed).
class AiConsent {
  static const _key = 'ai_assistant_enabled';

  static Future<bool> isOn() async => (await SharedPreferences.getInstance()).getBool(_key) ?? false;

  static Future<void> set(bool on) async {
    final p = await SharedPreferences.getInstance();
    if (on) {
      await p.setBool(_key, true);
    } else {
      await p.remove(_key);
    }
  }
}

/// What leaves the phone. Plain data, built only by [buildAiRequest].
class AiRequest {
  final String ageBand;
  final List<String> loves;
  final List<String> needsHelp;
  final List<String> traits;
  final int minutesPerDay;
  final String learnLang;
  final String note;
  const AiRequest(this.ageBand, this.loves, this.needsHelp, this.traits, this.minutesPerDay, this.learnLang, this.note);

  Map<String, dynamic> toJson() => {
        'ageBand': ageBand,
        'loves': loves,
        'needsHelp': needsHelp,
        'traits': traits,
        'minutesPerDay': minutesPerDay,
        'learnLang': learnLang,
        'note': note,
        // The contract the answer must follow (the app validates it anyway).
        'allowedLands': landsForAge(_bandAge(ageBand), learnLang),
        'allowedSubjects': [for (final s in kSubjects) s.id],
      };
}

int _bandAge(String band) => int.tryParse(band.split('-').first) ?? 6;

String ageBandOf(int age) => age <= 2 ? '1-2' : (age <= 4 ? '3-4' : (age <= 6 ? '5-6' : (age <= 9 ? '7-9' : '10-12')));

const kAiNoteMax = 400;

/// Removes what could identify a person from the note: e-mails, links, @handles, phone-like digit runs and the child's name.
String cleanNoteForAi(String note, {String childName = ''}) {
  var t = note;
  t = t.replaceAll(RegExp(r'[\w.+-]+@[\w-]+(\.[\w-]+)+'), ' ');
  t = t.replaceAll(RegExp(r'(https?://|www\.)\S+', caseSensitive: false), ' ');
  t = t.replaceAll(RegExp(r'@\w+'), ' ');
  t = t.replaceAll(RegExp(r'[+()\d][\d\s().-]{5,}\d'), ' ');
  t = t.replaceAll(RegExp(r'[٠-٩]{4,}'), ' '); // Arabic-Indic digit runs
  final n = childName.trim();
  if (n.length >= 2) t = t.replaceAll(RegExp(RegExp.escape(n), caseSensitive: false), ' ');
  t = t.replaceAll(RegExp(r'\s+'), ' ').trim();
  return t.runes.length <= kAiNoteMax ? t : String.fromCharCodes(t.runes.take(kAiNoteMax));
}

/// The only way an AI request is made: age band instead of age, chosen areas, minutes, a cleaned note.
AiRequest buildAiRequest(ParentIntake i) => AiRequest(
      ageBandOf(i.age),
      i.loves.toList()..sort(),
      i.needsHelp.toList()..sort(),
      i.traits.toList()..sort(),
      i.minutesPerDay,
      i.learnLang,
      cleanNoteForAi(i.note, childName: i.nickname),
    );

enum AiProblem { notEnabled, notConfigured, offline, badAnswer }

class AiException implements Exception {
  final AiProblem problem;
  const AiException(this.problem);
  @override
  String toString() => 'AiException(${problem.name})';
}

String aiProblemText(AiProblem p) => switch (p) {
      AiProblem.notEnabled => tr2('اقتراحات الذكاء الاصطناعي مغلقة.', 'AI suggestions are off.'),
      AiProblem.notConfigured => tr2('خدمة الذكاء الاصطناعي لم تُجهَّز بعد، فعرضنا الخطط العادية.', 'The AI service is not set up yet, so we show the normal plans.'),
      AiProblem.offline => tr2('تعذّر الوصول للخدمة، فعرضنا الخطط العادية.', 'The service could not be reached, so we show the normal plans.'),
      AiProblem.badAnswer => tr2('جاء رد غير صالح فتجاهلناه وعرضنا الخطط العادية.', 'The answer was not valid, so we ignored it and show the normal plans.'),
    };

/// Sends a request and returns the raw answer text (JSON). The real one posts to the owner's server over HTTPS.
abstract class AiTransport {
  bool get configured;
  Future<String> complete(AiRequest request);
}

/// The server address comes from the build (`--dart-define=REHLATY_AI_ENDPOINT=https://...`), never from the app's code, and
/// only HTTPS is accepted. No API key is ever in the app: the server holds it.
const String kAiEndpoint = String.fromEnvironment('REHLATY_AI_ENDPOINT');

class HttpAiTransport implements AiTransport {
  final Uri? endpoint;
  final http.Client Function() client;
  HttpAiTransport({String endpointUrl = kAiEndpoint, http.Client Function()? client})
      : endpoint = _httpsOrNull(endpointUrl),
        client = client ?? http.Client.new;

  static Uri? _httpsOrNull(String s) {
    final u = Uri.tryParse(s.trim());
    return u != null && u.scheme == 'https' && u.host.contains('.') ? u : null;
  }

  @override
  bool get configured => endpoint != null;

  @override
  Future<String> complete(AiRequest request) async {
    final e = endpoint;
    if (e == null) throw const AiException(AiProblem.notConfigured);
    final c = client();
    try {
      final r = await c
          .post(e, headers: {'content-type': 'application/json'}, body: jsonEncode(request.toJson()))
          .timeout(const Duration(seconds: 25));
      if (r.statusCode != 200) throw const AiException(AiProblem.offline);
      return utf8.decode(r.bodyBytes);
    } on AiException {
      rethrow;
    } catch (_) {
      throw const AiException(AiProblem.offline);
    } finally {
      c.close();
    }
  }
}

/// Reads the server's JSON answer and keeps only what is valid. Anything that is not a real land, subject or whitelisted
/// video is dropped; numbers are clamped; text is shortened. Returns an empty list when nothing usable remains.
///
/// Expected: `{"plans":[{"title":"..","summary":"..","reasons":["..",".."],"lands":["letters",..],"dailyCount":3,"bias":0,"subjects":{"math":3}}]}`
List<LearningPlan> parseAiPlans(String raw, ParentIntake intake, List<Video> videos) {
  Object? data;
  try {
    data = jsonDecode(raw);
  } catch (_) {
    return const [];
  }
  final list = data is Map ? data['plans'] : null;
  if (list is! List) return const [];
  final allowedLands = landsForAge(intake.age, intake.learnLang);
  final subjectIds = {for (final s in kSubjects) s.id};
  String shorten(Object? v, int n) {
    final t = '${v ?? ''}'.replaceAll(RegExp(r'\s+'), ' ').trim();
    return t.runes.length <= n ? t : String.fromCharCodes(t.runes.take(n));
  }

  final out = <LearningPlan>[];
  for (final p in list.take(3)) {
    if (p is! Map) continue;
    final lands = <String>[
      for (final l in (p['lands'] is List ? p['lands'] as List : const []))
        if (l is String && allowedLands.contains(l) && true) l,
    ];
    final order = <String>[];
    for (final l in lands) {
      if (!order.contains(l)) order.add(l);
    }
    if (order.isEmpty) continue;
    final title = shorten(p['title'], 60);
    if (title.isEmpty) continue;
    final targets = <String, int>{};
    if (p['subjects'] is Map) {
      (p['subjects'] as Map).forEach((k, v) {
        if (k is String && subjectIds.contains(k) && v is num) targets[k] = v.round().clamp(0, 7);
      });
    }
    final reasons = [
      for (final r in (p['reasons'] is List ? p['reasons'] as List : const []).take(5))
        if (shorten(r, 160).isNotEmpty) shorten(r, 160),
    ];
    final daily = ((p['dailyCount'] is num) ? (p['dailyCount'] as num).round() : 3).clamp(2, 5);
    final bias = ((p['bias'] is num) ? (p['bias'] as num).round() : 0).clamp(-1, 1);
    out.add(LearningPlan(
      id: 'ai${out.length + 1}',
      title: '${tr2('اقتراح ذكي', 'AI suggestion')}: $title',
      summary: shorten(p['summary'], 220),
      reasons: reasons,
      lands: order,
      dailyCount: daily,
      bias: bias,
      interests: intake.loves.where(order.contains).toList(),
      goals: const [],
      weeklyTargets: targets,
      videos: pickVideos(order, intake.age, intake.learnLang, videos),
      minutesPerDay: intake.minutesPerDay,
      fromAi: true,
    ));
  }
  return out;
}

/// Runs the optional AI step. Returns validated AI plans, or throws [AiException] with the reason so the screen can say
/// why it is showing the normal plans.
Future<List<LearningPlan>> suggestWithAi(ParentIntake intake, List<Video> videos, {required AiTransport transport, bool? enabled}) async {
  if (!(enabled ?? await AiConsent.isOn())) throw const AiException(AiProblem.notEnabled);
  if (!transport.configured) throw const AiException(AiProblem.notConfigured);
  final raw = await transport.complete(buildAiRequest(intake.withNote()));
  final plans = parseAiPlans(raw, intake.withNote(), videos);
  if (plans.isEmpty) throw const AiException(AiProblem.badAnswer);
  return plans;
}
