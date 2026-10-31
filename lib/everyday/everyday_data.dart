import '../l10n/strings.dart';

/// How much a grown-up must do for the task to be safe. Shown on every task; never hidden.
enum Supervision { adultPresent, adultNear, checkAfter }

enum EverydayArea { selfCare, tidying, kitchen, nature, outings, safety }

/// A real-life learning moment done WITH a grown-up. No screen, no photo, no stars: the parent confirms it.
class EverydayTask {
  final String id;
  final EverydayArea area;
  final Supervision supervision;
  final int minAge;
  final int maxAge;
  final String Function() title;
  final String Function() forChild;
  final String Function() forParent;
  final String Function()? safety;
  const EverydayTask(this.id, this.area, this.supervision, this.minAge, this.maxAge, this.title, this.forChild, this.forParent, {this.safety});
  bool fitsAge(int age) => age >= minAge && age <= maxAge;
}

String supervisionLabel(Supervision s) => switch (s) {
      Supervision.adultPresent => tr2('مع شخص بالغ طوال الوقت', 'A grown-up with you the whole time'),
      Supervision.adultNear => tr2('شخص بالغ قريب منك', 'A grown-up close by'),
      Supervision.checkAfter => tr2('يراجعه شخص بالغ بعد ذلك', 'A grown-up checks afterwards'),
    };

String areaLabel(EverydayArea a) => switch (a) {
      EverydayArea.selfCare => tr2('العناية بنفسي', 'Looking after myself'),
      EverydayArea.tidying => tr2('الترتيب', 'Tidying up'),
      EverydayArea.kitchen => tr2('في المطبخ', 'In the kitchen'),
      EverydayArea.nature => tr2('الطبيعة', 'Nature'),
      EverydayArea.outings => tr2('في الخارج', 'Out and about'),
      EverydayArea.safety => tr2('الأمان', 'Staying safe'),
    };

final List<EverydayTask> kEverydayTasks = [
  EverydayTask('wash_hands', EverydayArea.selfCare, Supervision.adultNear, 1, 6, () => tr2('نغسل أيدينا', 'Washing our hands'),
      () => tr2('بلّل يديك، ضع الصابون، وافرك حتى نغني أغنية قصيرة. ثم اشطف وجفّف.', 'Wet your hands, add soap and rub while we sing a short song. Rinse and dry.'),
      () => tr2('ثبّتوا خطوات ثابتة. عدّوا معاً حتى عشرين. تأكد أن الصنبور على ماء فاتر.', 'Keep the same steps every time. Count to twenty together. Check the water is lukewarm.')),
  EverydayTask('brush_teeth', EverydayArea.selfCare, Supervision.adultNear, 2, 6, () => tr2('نفرّش أسناننا', 'Brushing our teeth'),
      () => tr2('نفرّش الأسنان من فوق ومن تحت ومن الأمام. ثم نبتسم!', 'We brush the top, the bottom and the front. Then we smile!'),
      () => tr2('ضعوا كمية بحجم حبة البازلاء من المعجون وأكملوا التفريش بأنفسكم بعد محاولة الطفل.', 'Use a pea-sized amount of toothpaste and finish the brushing yourself after the child tries.')),
  EverydayTask('dress_self', EverydayArea.selfCare, Supervision.checkAfter, 3, 6, () => tr2('أرتدي ملابسي', 'Getting dressed'),
      () => tr2('اختر قميصك وحاول ارتداءه بنفسك. اطلب المساعدة في الأزرار.', 'Choose your shirt and try putting it on yourself. Ask for help with buttons.'),
      () => tr2('اتركوا وقتاً إضافياً بدون استعجال. امدحوا المحاولة لا النتيجة.', 'Leave extra time and do not rush. Praise the effort, not the result.')),
  EverydayTask('toys_basket', EverydayArea.tidying, Supervision.checkAfter, 1, 6, () => tr2('ألعابي في سلتها', 'Toys in their basket'),
      () => tr2('ضع كل لعبة في السلة. الكرات هنا، والمكعبات هناك.', 'Put each toy in the basket. Balls here, blocks there.'),
      () => tr2('ابدؤوا بتصنيف واحد فقط ثم أضيفوا آخر. شاركوا في الترتيب ولا تنتظروا أن يكمله وحده.', 'Start with one group, then add another. Tidy together; do not expect the child to finish alone.')),
  EverydayTask('sort_socks', EverydayArea.tidying, Supervision.adultNear, 3, 6, () => tr2('نجمع الجوارب', 'Matching socks'),
      () => tr2('ابحث عن جوربين متشابهين وضعهما معاً.', 'Find two socks that look the same and put them together.'),
      () => tr2('يبني المطابقة والملاحظة. ابدؤوا بثلاثة أزواج فقط.', 'This builds matching and noticing. Start with only three pairs.')),
  EverydayTask('set_table', EverydayArea.kitchen, Supervision.adultNear, 3, 6, () => tr2('نجهّز المائدة', 'Setting the table'),
      () => tr2('ضع طبقاً وملعقة أمام كل شخص. كم شخصاً نحن؟', 'Put a plate and a spoon in front of each person. How many of us are there?'),
      () => tr2('استخدموا أطباقاً غير قابلة للكسر. العد الفعلي يعلّم المقابلة واحد لواحد.', 'Use unbreakable plates. Real counting teaches one-to-one matching.'),
      safety: () => tr2('لا سكاكين حادة ولا أطباق ساخنة.', 'No sharp knives and no hot plates.')),
  EverydayTask('wash_fruit', EverydayArea.kitchen, Supervision.adultPresent, 2, 6, () => tr2('نغسل الفاكهة', 'Washing fruit'),
      () => tr2('ضع الفاكهة في الوعاء واغسلها بالماء. ما لونها؟ كم حبة عندنا؟', 'Put the fruit in the bowl and rinse it. What colour is it? How many do we have?'),
      () => tr2('يمكن تسمية الألوان والأشكال والعد. الطفل لا يستعمل أي أداة حادة.', 'Name colours and shapes and count. The child uses no sharp tools.'),
      safety: () => tr2('بالغ موجود دائماً قرب الماء. لا نأكل قبل أن يسمح البالغ.', 'A grown-up is always by the water. We do not eat until the grown-up says so.')),
  EverydayTask('stir_bowl', EverydayArea.kitchen, Supervision.adultPresent, 4, 6, () => tr2('نحرّك مع ماما أو بابا', 'Stirring together'),
      () => tr2('حرّك الخليط البارد في الوعاء ببطء. كم دورة؟', 'Stir the cold mixture in the bowl slowly. How many turns?'),
      () => tr2('للأشياء الباردة فقط (مثل الزبادي مع الفاكهة). كل ما فيه حرارة أو حدّة يتولاه البالغ.', 'Cold things only (such as yoghurt with fruit). A grown-up handles anything hot or sharp.'),
      safety: () => tr2('لا موقد ولا فرن ولا سكين للطفل أبداً.', 'Never the stove, the oven or a knife for the child.')),
  EverydayTask('water_plant', EverydayArea.nature, Supervision.adultNear, 2, 6, () => tr2('نسقي النبتة', 'Watering a plant'),
      () => tr2('اسكب قليلاً من الماء على النبتة. هل تراها تتغير بعد أيام؟', 'Pour a little water on the plant. Do you see it change after some days?'),
      () => tr2('كرّروها كل بضعة أيام. اسألوا: ماذا تحتاج النبتة لتكبر؟', 'Repeat it every few days. Ask: what does a plant need to grow?')),
  EverydayTask('look_sky', EverydayArea.nature, Supervision.adultNear, 1, 6, () => tr2('ننظر إلى السماء', 'Looking at the sky'),
      () => tr2('انظر إلى السماء. هل ترى سحابة؟ شمساً؟ طائراً؟', 'Look at the sky. Do you see a cloud? The sun? A bird?'),
      () => tr2('لا تنظروا إلى الشمس مباشرة أبداً. سمّوا ما تروه وصفوه بكلمات بسيطة.', 'Never look straight at the sun. Name what you see and describe it in simple words.'),
      safety: () => tr2('لا ننظر إلى الشمس مباشرة.', 'We never look straight at the sun.')),
  EverydayTask('leaf_hunt', EverydayArea.nature, Supervision.adultPresent, 3, 6, () => tr2('نبحث عن أوراق مختلفة', 'Hunting for different leaves'),
      () => tr2('ابحث عن ورقة كبيرة وورقة صغيرة وورقة بلون مختلف.', 'Find a big leaf, a small leaf and a leaf of another colour.'),
      () => tr2('قارنوا الحجم واللون والملمس. لا يضع الطفل شيئاً في فمه.', 'Compare size, colour and feel. The child puts nothing in the mouth.'),
      safety: () => tr2('لا نلمس نباتات مجهولة ولا نأكل شيئاً من الخارج.', 'We do not touch unknown plants or eat anything from outside.')),
  EverydayTask('count_steps', EverydayArea.outings, Supervision.adultPresent, 3, 6, () => tr2('نعدّ الدرجات', 'Counting the steps'),
      () => tr2('أمسك يد الكبير واصعد درجة درجة وعدّ بصوت عالٍ.', "Hold a grown-up's hand and go up one step at a time, counting aloud."),
      () => tr2('أمسكوا بيد الطفل طوال الوقت. العدّ مع الحركة يثبّت التسلسل.', "Hold the child's hand the whole time. Counting while moving fixes the sequence."),
      safety: () => tr2('نمسك يد بالغ على الدرج دائماً.', "We always hold a grown-up's hand on stairs.")),
  EverydayTask('shop_colours', EverydayArea.outings, Supervision.adultPresent, 3, 6, () => tr2('ألوان في المتجر', 'Colours in the shop'),
      () => tr2('ابحث عن شيء أحمر وشيء أخضر وشيء أصفر. ابق بجانب الكبير.', 'Find something red, something green and something yellow. Stay next to the grown-up.'),
      () => tr2('ابقوا ممسكين بيد الطفل أو العربة. لا تتركوه يبتعد.', 'Hold the hand or the trolley. Do not let the child wander off.'),
      safety: () => tr2('لا نبتعد عن الكبير أبداً.', 'We never move away from the grown-up.')),
  EverydayTask('cross_road', EverydayArea.safety, Supervision.adultPresent, 3, 6, () => tr2('نتعلّم عبور الطريق بأمان', 'Learning to cross the road safely'),
      () => tr2('نقف، ننظر يميناً ويساراً، ونمسك يد الكبير. لا نعبر وحدنا.', 'We stop, look right and left and hold a grown-up\'s hand. We never cross alone.'),
      () => tr2('تدرّبوا بالكلام والعدّ، ولا تتركوا الطفل يعبر وحده مهما تدرّب.', 'Practise with words and counting; never let the child cross alone, however well they practise.'),
      safety: () => tr2('لا يعبر الطفل وحده في أي حال.', 'The child never crosses alone, whatever happens.')),
  EverydayTask('my_name_address', EverydayArea.safety, Supervision.adultPresent, 4, 6, () => tr2('اسمي واسم ماما', 'My name and my mum\'s name'),
      () => tr2('قل لنا اسمك الأول واسم ماما أو بابا.', 'Tell us your first name and your mum or dad\'s name.'),
      () => tr2('تدرّبوا على الاسم الأول فقط في البيت. لا تتدرّبوا على العنوان أو الهاتف في التطبيق ولا تدخلوا أي معلومة فيه.', 'Practise first names only at home. Do not enter any address or phone number in the app.'),
      safety: () => tr2('لا نكتب ولا نقول معلومات شخصية للغرباء.', 'We never write or tell personal details to strangers.')),
  EverydayTask('sort_laundry', EverydayArea.tidying, Supervision.adultNear, 2, 6, () => tr2('نفرز الغسيل', 'Sorting the laundry'),
      () => tr2('ضع الملابس الفاتحة هنا والداكنة هناك.', 'Put the light clothes here and the dark ones there.'),
      () => tr2('يبني التصنيف والمقارنة. كمية صغيرة وسلة خفيفة.', 'This builds sorting and comparing. A small amount in a light basket.')),
  EverydayTask('feed_pet', EverydayArea.nature, Supervision.adultPresent, 3, 6, () => tr2('نساعد في إطعام حيوان أليف', 'Helping feed a pet'),
      () => tr2('ضع الطعام في الإناء مع الكبير. كم قطعة؟', 'Put the food in the bowl together with the grown-up. How many pieces?'),
      () => tr2('إذا لا يوجد حيوان في البيت فتجاوزوا هذه المهمة. اغسلوا الأيدي بعدها.', 'If there is no pet at home, skip this one. Wash hands afterwards.'),
      safety: () => tr2('لا نلمس طعام الحيوان بأفواهنا، ونغسل أيدينا.', 'We keep pet food away from our mouths and wash our hands.')),
];

/// A different suggestion each day for the age: the same for the same day, nothing random, nothing to catch up on.
EverydayTask? taskOfDay(int age, DateTime day) {
  final fit = [for (final t in kEverydayTasks) if (t.fitsAge(age)) t];
  if (fit.isEmpty) return null;
  final n = DateTime.utc(day.year, day.month, day.day).difference(DateTime.utc(2024, 1, 1)).inDays;
  return fit[n % fit.length];
}
