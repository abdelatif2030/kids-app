import '../l10n/strings.dart';
import 'my_day.dart';

/// The sticker album: small pictures a child collects by finishing things. There is no purchase, no
/// random draw and no loss. Stickers unlock one by one in a fixed order, as many as the number of
/// real finished activities, games and completed stories (the same count as the garden).
class Sticker {
  final String emoji;
  final String Function() name;
  const Sticker(this.emoji, this.name);
}

final List<Sticker> kStickers = [
  Sticker('🦄', () => tr2('حصان سحري', 'Magic horse')),
  Sticker('🚀', () => tr2('صاروخ', 'Rocket')),
  Sticker('🌈', () => tr2('قوس قزح', 'Rainbow')),
  Sticker('🐢', () => tr2('سلحفاة', 'Turtle')),
  Sticker('🎈', () => tr2('بالون', 'Balloon')),
  Sticker('🐬', () => tr2('دلفين', 'Dolphin')),
  Sticker('🍉', () => tr2('بطيخة', 'Watermelon')),
  Sticker('🦋', () => tr2('فراشة', 'Butterfly')),
  Sticker('⭐', () => tr2('نجمة', 'Star')),
  Sticker('🐘', () => tr2('فيل', 'Elephant')),
  Sticker('🎨', () => tr2('ألوان', 'Paints')),
  Sticker('🚂', () => tr2('قطار', 'Train')),
  Sticker('🌻', () => tr2('عباد الشمس', 'Sunflower')),
  Sticker('🐝', () => tr2('نحلة', 'Bee')),
  Sticker('🍎', () => tr2('تفاحة', 'Apple')),
  Sticker('🎵', () => tr2('نغمة', 'Music note')),
  Sticker('🦁', () => tr2('أسد', 'Lion')),
  Sticker('🏰', () => tr2('قلعة', 'Castle')),
  Sticker('🐙', () => tr2('أخطبوط', 'Octopus')),
  Sticker('🌙', () => tr2('قمر', 'Moon')),
  Sticker('🧩', () => tr2('قطعة أحجية', 'Puzzle piece')),
  Sticker('🐧', () => tr2('بطريق', 'Penguin')),
  Sticker('🍓', () => tr2('فراولة', 'Strawberry')),
  Sticker('🚲', () => tr2('دراجة', 'Bicycle')),
];

/// How many stickers a child has: one per finished thing, up to the size of the album.
int stickersUnlocked(int finished) => finished.clamp(0, kStickers.length);

/// The sticker just earned when the child's finished-count reaches [finished], or null past the album.
Sticker? newestSticker(int finished) => finished >= 1 && finished <= kStickers.length ? kStickers[finished - 1] : null;

Future<int> finishedCount(String childId) async => (await loadGarden(childId)).flowers;
