import '../l10n/strings.dart';

class BranchChoice {
  final String ar, en, to;
  const BranchChoice(this.ar, this.en, this.to);
  String text(String lang) => lang == 'ar' ? ar : en;
}

/// One page of a choose-your-path story. A page with no choices is an ending.
class BranchNode {
  final String ar, en;
  final List<BranchChoice> choices;
  const BranchNode(this.ar, this.en, [this.choices = const []]);
  bool get isEnding => choices.isEmpty;
  String text(String lang) => lang == 'ar' ? ar : en;
}

class BranchStory {
  final String id;
  final String Function() title;
  final int minAge, maxAge;
  final String start;
  final Map<String, BranchNode> nodes;
  const BranchStory(this.id, this.title, this.minAge, this.maxAge, this.start, this.nodes);
  bool fitsAge(int age) => age >= minAge && age <= maxAge;
}

/// Everything wrong with a branching story; an empty list means every path is valid: the start exists, every choice leads
/// to a real page, every page can be reached, and from every page the child can still reach an ending (no dead ends or loops
/// without an exit). Endings in these stories are all kind: no choice is a "wrong" one.
List<String> validateBranching(BranchStory s) {
  final problems = <String>[];
  if (!s.nodes.containsKey(s.start)) return ['start "${s.start}" does not exist'];
  for (final e in s.nodes.entries) {
    if (e.value.choices.length > 3) problems.add('${e.key} has more than 3 choices');
    if (e.value.choices.length == 1) problems.add('${e.key} has a single choice');
    for (final c in e.value.choices) {
      if (!s.nodes.containsKey(c.to)) problems.add('${e.key} -> ${c.to} does not exist');
    }
    if (e.value.ar.trim().isEmpty || e.value.en.trim().isEmpty) problems.add('${e.key} has an empty text');
    for (final c in e.value.choices) {
      if (c.ar.trim().isEmpty || c.en.trim().isEmpty) problems.add('${e.key} has an empty choice');
    }
  }
  if (problems.isNotEmpty) return problems;
  final reach = <String>{};
  void walk(String id) {
    if (!reach.add(id)) return;
    for (final c in s.nodes[id]!.choices) {
      walk(c.to);
    }
  }
  walk(s.start);
  for (final id in s.nodes.keys) {
    if (!reach.contains(id)) problems.add('$id is never reached');
  }
  if (!reach.any((id) => s.nodes[id]!.isEnding)) problems.add('there is no ending');
  // every node can reach an ending: iterate to a fixed point
  final canEnd = {for (final e in s.nodes.entries) if (e.value.isEnding) e.key};
  var changed = true;
  while (changed) {
    changed = false;
    for (final e in s.nodes.entries) {
      if (!canEnd.contains(e.key) && e.value.choices.any((c) => canEnd.contains(c.to))) {
        canEnd.add(e.key);
        changed = true;
      }
    }
  }
  for (final id in s.nodes.keys) {
    if (!canEnd.contains(id)) problems.add('$id cannot reach an ending');
  }
  return problems;
}

/// Number of different complete paths (loops are not followed twice), to show how rich a story is.
int pathCount(BranchStory s) {
  int go(String id, Set<String> seen) {
    final n = s.nodes[id]!;
    if (n.isEnding) return 1;
    var total = 0;
    for (final c in n.choices) {
      if (!seen.contains(c.to)) total += go(c.to, {...seen, c.to});
    }
    return total;
  }
  return go(s.start, {s.start});
}

final List<BranchStory> kBranchingStories = [
  BranchStory('boat', () => tr2('القارب الصغير', 'The little boat'), 3, 6, 'start', const {
    'start': BranchNode('قارب صغير اسمه «بحر» يقف على الشاطئ. الشمس جميلة. هل يذهب يمينًا أم يسارًا؟', 'A little boat called Sea waits on the shore. The sun is lovely. Does it go right or left?', [
      BranchChoice('يمينًا إلى الجزيرة', 'Right, to the island', 'island'),
      BranchChoice('يسارًا إلى الصخور', 'Left, to the rocks', 'rocks'),
    ]),
    'island': BranchNode('على الجزيرة يرى القارب سلحفاة صغيرة تبحث عن بيتها. ماذا يفعل؟', 'On the island the boat sees a small turtle looking for her home. What does it do?', [
      BranchChoice('يساعد السلحفاة', 'Helps the turtle', 'help'),
      BranchChoice('يسأل صديقًا', 'Asks a friend', 'friend'),
    ]),
    'rocks': BranchNode('بين الصخور يسمع القارب صوتًا خافتًا. إنه طائر صغير. ماذا يفعل؟', 'Between the rocks the boat hears a soft sound. It is a little bird. What does it do?', [
      BranchChoice('يغني للطائر', 'Sings to the bird', 'sing'),
      BranchChoice('يحمل الطائر', 'Carries the bird', 'carry'),
    ]),
    'help': BranchNode('يحمل القارب السلحفاة بلطف إلى شاطئ هادئ، فتجد بيتها. تقول: شكرًا! ويبتسم القارب. النهاية.', 'The boat gently carries the turtle to a quiet beach, and she finds her home. "Thank you!" she says, and the boat smiles. The end.'),
    'friend': BranchNode('يسأل القارب النورس. النورس يعرف الطريق ويقود الجميع إلى بيت السلحفاة. يغنون معًا. النهاية.', 'The boat asks the seagull. The seagull knows the way and leads everyone to the turtle\'s home. They sing together. The end.'),
    'sing': BranchNode('يغني القارب أغنية هادئة، فيهدأ الطائر وتأتي أمه تبحث عنه. يعودان معًا إلى العش. النهاية.', 'The boat sings a quiet song, the bird calms down and his mother comes looking for him. They go back to the nest together. The end.'),
    'carry': BranchNode('يحمل القارب الطائر فوق ظهره حتى العش. الطائر يرفرف فرحًا، والقارب يشعر بالسعادة. النهاية.', 'The boat carries the bird on its back up to the nest. The bird flaps with joy, and the boat feels happy. The end.'),
  }),
  BranchStory('garden', () => tr2('مفاجأة الحديقة', 'The garden surprise'), 3, 6, 'start', const {
    'start': BranchNode('تجد ليلى بذرة صغيرة في الحديقة. هل تزرعها أم تريها لجدتها؟', 'Laila finds a tiny seed in the garden. Does she plant it or show it to her grandmother?', [
      BranchChoice('تزرعها', 'Plants it', 'plant'),
      BranchChoice('تريها لجدتها', 'Shows her grandmother', 'grandma'),
    ]),
    'plant': BranchNode('تضع ليلى البذرة في التراب. ماذا تفعل بعد ذلك؟', 'Laila puts the seed in the soil. What does she do next?', [
      BranchChoice('تسقيها', 'Waters it', 'water'),
      BranchChoice('تنتظر الشمس', 'Waits for the sun', 'sun'),
    ]),
    'grandma': BranchNode('تبتسم الجدة وتقول: هيا نزرعها معًا! ماذا يحتاجون أولًا؟', 'Grandma smiles and says, "Let us plant it together!" What do they need first?', [
      BranchChoice('وعاء صغير', 'A small pot', 'pot'),
      BranchChoice('مكان مشمس', 'A sunny spot', 'sun'),
    ]),
    'water': BranchNode('تسقي ليلى البذرة قليلًا كل يوم. وبعد أيام تظهر ورقة خضراء صغيرة! النهاية.', 'Laila waters the seed a little each day. After some days a tiny green leaf appears! The end.'),
    'sun': BranchNode('الشمس الدافئة والماء يجعلان البذرة تنمو. تظهر زهرة صفراء جميلة! النهاية.', 'The warm sun and a little water help the seed grow. A beautiful yellow flower appears! The end.'),
    'pot': BranchNode('تملأ ليلى وجدتها الوعاء بالتراب وتزرعان البذرة معًا، ثم تضعانه عند النافذة. النهاية.', 'Laila and her grandmother fill the pot with soil and plant the seed together, then put it by the window. The end.'),
  }),
];
