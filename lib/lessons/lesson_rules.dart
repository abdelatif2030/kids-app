/// Rules for lessons a parent adds by link. Pure, so they are easy to test.
///
/// Only an exact link to ONE video on YouTube's own hosts is accepted. A playlist, a channel, a search page, a short,
/// a link to another site or a link with extra paths is refused. The app keeps only the 11-character video id and always
/// plays it through the official YouTube player; the link itself is never opened.
final RegExp _idPattern = RegExp(r'^[A-Za-z0-9_-]{11}$');

const _watchHosts = {'youtube.com', 'www.youtube.com', 'm.youtube.com', 'music.youtube.com'};

/// The video id of an exact YouTube video link, or null when the text is not one.
String? parseYoutubeUrl(String input) {
  final text = input.trim();
  if (text.isEmpty || text.length > 200 || text.contains(RegExp(r'\s'))) return null;
  final uri = Uri.tryParse(text.startsWith('http') ? text : 'https://$text');
  if (uri == null || uri.scheme != 'https' || uri.host.isEmpty || uri.hasPort || uri.userInfo.isNotEmpty) return null;
  final host = uri.host.toLowerCase();
  String? id;
  if (_watchHosts.contains(host)) {
    if (uri.path == '/watch') {
      id = uri.queryParameters['v'];
    } else if (uri.pathSegments.length == 2 && uri.pathSegments.first == 'embed') {
      id = uri.pathSegments[1];
    }
  } else if (host == 'www.youtube-nocookie.com' && uri.pathSegments.length == 2 && uri.pathSegments.first == 'embed') {
    id = uri.pathSegments[1];
  } else if (host == 'youtu.be' && uri.pathSegments.length == 1) {
    id = uri.pathSegments.first;
  }
  return id != null && _idPattern.hasMatch(id) ? id : null;
}

/// The three age bands of the product: 1-2, 3-4 and 5-6.
enum LessonBand { toddler, preschool, early }

LessonBand bandOfAge(int age) => age <= 2 ? LessonBand.toddler : (age <= 4 ? LessonBand.preschool : LessonBand.early);

/// The ages 1-6 covered by a band.
List<int> agesOfBand(LessonBand b) => switch (b) { LessonBand.toddler => [1, 2], LessonBand.preschool => [3, 4], LessonBand.early => [5, 6] };

/// True when a lesson with ages [minAge]..[maxAge] suits at least one age of [b].
bool lessonInBand(int minAge, int maxAge, LessonBand b) => agesOfBand(b).any((a) => a >= minAge && a <= maxAge);

const kLessonCategories = ['Learning', 'Story', 'Fun', 'Calm'];

/// Why a parent-added lesson cannot be saved, or null when it is fine. [knownIds] are ids already in the list.
String? validateNewLesson({required String? id, required String title, required int minAge, required int maxAge, required String language, required String category, required Set<String> knownIds}) {
  if (id == null) return 'link';
  if (knownIds.contains(id)) return 'duplicate';
  final t = title.trim();
  if (t.isEmpty || t.length > 80) return 'title';
  if (minAge < 1 || maxAge > 6 || minAge > maxAge) return 'ages';
  if (language != 'ar' && language != 'en') return 'language';
  if (!kLessonCategories.contains(category)) return 'category';
  return null;
}
