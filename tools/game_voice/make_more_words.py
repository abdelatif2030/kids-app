# Writes game_src/learn_games/src/letters/more_words.json: extra pictures-with-words for the "words" and "first letter" levels.
# Every entry uses a picture the owner already gave (assets/games/art/<thing>.webp). Fields:
#   id, thing (art name), letter (id in letters/sim.js LETTERS), word / wd (word and its diacritized reading),
#   the / thed (with "the"), age (youngest age that gets it: 3 = easiest).
# Run: python tools/game_voice/make_more_words.py   (UTF-8 safe)
import json, io, os

ROWS = [
    # jungle
    ('monkey', 'j_monkey', 'qaaf', 'قرد', 'قِرْد', 'القرد', 'القِرْد', 3),
    ('lion', 'j_lion', 'alef', 'أسد', 'أَسَد', 'الأسد', 'الأَسَد', 3),
    ('elephant', 'j_elephant', 'faa', 'فيل', 'فِيل', 'الفيل', 'الفِيل', 3),
    ('zebra', 'j_zebra', 'haa', 'حمار وحشي', 'حِمَار وَحْشِي', 'الحمار الوحشي', 'الحِمَار الوَحْشِي', 5),
    ('parrot', 'j_parrot', 'baa', 'ببغاء', 'بَبَّغَاء', 'الببغاء', 'البَبَّغَاء', 4),
    ('tiger', 'j_tiger', 'noon', 'نمر', 'نِمِر', 'النمر', 'النِّمِر', 4),
    ('toucan', 'j_toucan', 'tah', 'طوقان', 'طُوقَان', 'الطوقان', 'الطُّوقَان', 6),
    ('gorilla', 'j_gorilla', 'ghayn', 'غوريلا', 'غُورِيلَّا', 'الغوريلا', 'الغُورِيلَّا', 5),
    ('chameleon', 'j_chameleon', 'haa', 'حرباء', 'حِرْبَاء', 'الحرباء', 'الحِرْبَاء', 6),
    ('snake', 'j_snake', 'thaa', 'ثعبان', 'ثُعْبَان', 'الثعبان', 'الثُّعْبَان', 5),
    # farm
    ('cow', 'f_cow', 'baa', 'بقرة', 'بَقَرَة', 'البقرة', 'البَقَرَة', 3),
    ('pig', 'f_pig', 'khaa', 'خنزير', 'خِنْزِير', 'الخنزير', 'الخِنْزِير', 4),
    ('goat', 'f_goat', 'meem', 'ماعز', 'مَاعِز', 'الماعز', 'المَاعِز', 5),
    ('donkey', 'f_donkey', 'haa', 'حمار', 'حِمَار', 'الحمار', 'الحِمَار', 4),
    ('rooster', 'f_rooster', 'dal', 'ديك', 'دِيك', 'الديك', 'الدِّيك', 3),
    # sea
    ('octopus', 'u_octopus', 'alef', 'أخطبوط', 'أُخْطُبُوط', 'الأخطبوط', 'الأُخْطُبُوط', 5),
    ('turtle', 'u_turtle', 'seen', 'سلحفاة', 'سُلَحْفَاة', 'السلحفاة', 'السُّلَحْفَاة', 4),
    ('dolphin', 'u_dolphin', 'dal', 'دولفين', 'دُولْفِين', 'الدولفين', 'الدُّولْفِين', 5),
    ('whale', 'u_whale', 'haa', 'حوت', 'حُوت', 'الحوت', 'الحُوت', 4),
    ('crab', 'u_crab', 'seen', 'سرطان', 'سَرَطَان', 'السرطان', 'السَّرَطَان', 5),
    ('starfish', 'u_star', 'noon', 'نجمة بحر', 'نَجْمَة بَحْر', 'نجمة البحر', 'نَجْمَةْ البَحْر', 5),
    ('jellyfish', 'u_jelly', 'qaaf', 'قنديل بحر', 'قِنْدِيل بَحْر', 'قنديل البحر', 'قِنْدِيل البَحْر', 6),
    ('seahorse', 'u_seahorse', 'haa', 'حصان بحر', 'حِصَان بَحْر', 'حصان البحر', 'حِصَان البَحْر', 6),
    # snow
    ('penguin', 'w_penguin', 'baa', 'بطريق', 'بِطْرِيق', 'البطريق', 'البِطْرِيق', 4),
    ('bear', 'w_bear', 'dal', 'دب', 'دُبّ', 'الدب', 'الدُّبّ', 3),
    ('owl', 'w_owl', 'baa', 'بومة', 'بُومَة', 'البومة', 'البُومَة', 4),
    ('reindeer', 'w_reindeer', 'raa', 'رنة', 'رَنَّة', 'الرنة', 'الرَّنَّة', 6),
    ('seal', 'w_seal', 'faa', 'فقمة', 'فُقْمَة', 'الفقمة', 'الفُقْمَة', 5),
    ('snowman', 'w_snowman', 'raa', 'رجل ثلج', 'رَجُل ثَلْج', 'رجل الثلج', 'رَجُل الثَّلْج', 5),
    # desert
    ('pyramid', 'd_pyramid', 'haa2', 'هرم', 'هَرَم', 'الهرم', 'الهَرَم', 4),
    ('tent', 'd_tent', 'khaa', 'خيمة', 'خَيْمَة', 'الخيمة', 'الخَيْمَة', 4),
    ('palm', 'd_palm', 'noon', 'نخلة', 'نَخْلَة', 'النخلة', 'النَّخْلَة', 4),
    ('cactus', 'd_cactus', 'sad', 'صبار', 'صَبَّار', 'الصبار', 'الصَّبَّار', 6),
    ('scorpion', 'd_scorpion', 'ayn', 'عقرب', 'عَقْرَب', 'العقرب', 'العَقْرَب', 5),
    ('lizard', 'd_lizard', 'seen', 'سحلية', 'سِحْلِيَّة', 'السحلية', 'السِّحْلِيَّة', 6),
    ('hawk', 'd_hawk', 'sad', 'صقر', 'صَقْر', 'الصقر', 'الصَّقْر', 5),
    ('hotballoon', 'd_balloon', 'meem', 'منطاد', 'مِنْطَاد', 'المنطاد', 'المِنْطَاد', 5),
    ('jeep', 'd_jeep', 'jeem', 'جيب', 'جِيب', 'الجيب', 'الجِيب', 4),
    # beach
    ('umbrella', 'b_umbrella', 'meem', 'مظلة', 'مِظَلَّة', 'المظلة', 'المِظَلَّة', 4),
    ('sandcastle', 'b_castle', 'qaaf', 'قلعة', 'قَلْعَة', 'القلعة', 'القَلْعَة', 4),
    ('shell', 'b_shell', 'sad', 'صدفة', 'صَدَفَة', 'الصدفة', 'الصَّدَفَة', 4),
    ('lighthouse', 'b_lighthouse', 'faa', 'فنار', 'فَنَار', 'الفنار', 'الفَنَار', 6),
    # home and garden
    ('bed', 'h_bed', 'seen', 'سرير', 'سَرِير', 'السرير', 'السَّرِير', 3),
    ('toothbrush', 'h_toothbrush', 'faa', 'فرشاة', 'فُرْشَاة', 'الفرشاة', 'الفُرْشَاة', 5),
    ('sink', 'h_sink', 'haa', 'حوض', 'حَوْض', 'الحوض', 'الحَوْض', 5),
    ('towel', 'h_towel', 'meem', 'منشفة', 'مِنْشَفَة', 'المنشفة', 'المِنْشَفَة', 5),
    ('backpack', 'h_backpack', 'sheen', 'شنطة', 'شَنْطَة', 'الشنطة', 'الشَّنْطَة', 3),
    ('shoes', 'h_shoes', 'jeem', 'جزمة', 'جَزْمَة', 'الجزمة', 'الجَزْمَة', 3),
    ('wardrobe', 'h_wardrobe', 'dal', 'دولاب', 'دُولَاب', 'الدولاب', 'الدُّولَاب', 5),
    ('table', 'h_table', 'taa', 'ترابيزة', 'تَرَابِيزَة', 'الترابيزة', 'التَّرَابِيزَة', 5),
    ('broom', 'h_broom', 'meem', 'مكنسة', 'مِكْنِسَة', 'المكنسة', 'المِكْنِسَة', 5),
    ('clock', 'h_clock', 'seen', 'ساعة', 'سَاعَة', 'الساعة', 'السَّاعَة', 4),
    ('swing', 'h_swing', 'alef', 'أرجوحة', 'أُرْجُوحَة', 'الأرجوحة', 'الأُرْجُوحَة', 4),
    ('bike', 'h_bike', 'ayn', 'عجلة', 'عَجَلَة', 'العجلة', 'العَجَلَة', 4),
    ('tree', 'h_tree', 'sheen', 'شجرة', 'شَجَرَة', 'الشجرة', 'الشَّجَرَة', 3),
    # city
    ('school', 'c_school', 'meem', 'مدرسة', 'مَدْرَسَة', 'المدرسة', 'المَدْرَسَة', 4),
    ('hospital', 'c_hospital', 'meem', 'مستشفى', 'مُسْتَشْفَى', 'المستشفى', 'المُسْتَشْفَى', 5),
    ('trafficlight', 'c_light', 'alef', 'إشارة', 'إِشَارَة', 'الإشارة', 'الإِشَارَة', 5),
    ('fountain', 'c_fountain', 'noon', 'نافورة', 'نَافُورَة', 'النافورة', 'النَّافُورَة', 5),
    ('building', 'c_skyscraper', 'ayn', 'عمارة', 'عِمَارَة', 'العمارة', 'العِمَارَة', 4),
    # castle
    ('king', 'k_king', 'meem', 'ملك', 'مَلِك', 'الملك', 'المَلِك', 4),
    ('queen', 'k_queen', 'meem', 'ملكة', 'مَلِكَة', 'الملكة', 'المَلِكَة', 5),
    ('dragon', 'k_dragon', 'taa', 'تنين', 'تِنِّين', 'التنين', 'التِّنِّين', 4),
    ('knight', 'k_knight', 'faa', 'فارس', 'فَارِس', 'الفارس', 'الفَارِس', 4),
    ('wizard', 'k_wizard', 'seen', 'ساحر', 'سَاحِر', 'الساحر', 'السَّاحِر', 5),
    ('treasure', 'k_chest', 'kaaf', 'كنز', 'كَنْز', 'الكنز', 'الكَنْز', 4),
    # space and rainbow
    ('alien', 's_alien', 'faa', 'فضائي', 'فَضَائِي', 'الفضائي', 'الفَضَائِي', 5),
    ('robot', 's_robot', 'raa', 'روبوت', 'رُوبُوت', 'الروبوت', 'الرُّوبُوت', 4),
    ('moon', 's_moon', 'qaaf', 'قمر', 'قَمَر', 'القمر', 'القَمَر', 3),
    ('star', 's_star', 'noon', 'نجمة', 'نَجْمَة', 'النجمة', 'النَّجْمَة', 3),
    ('planet', 's_ringplanet', 'kaaf', 'كوكب', 'كَوْكَب', 'الكوكب', 'الكَوْكَب', 5),
    ('balloon', 'r_balloons', 'baa', 'بالون', 'بَالُون', 'البالون', 'البَالُون', 3),
    ('cloud', 'r_cloud', 'seen', 'سحابة', 'سَحَابَة', 'السحابة', 'السَّحَابَة', 4),
    ('sweet', 'r_candy', 'haa', 'حلوى', 'حَلْوَى', 'الحلوى', 'الحَلْوَى', 4),
    ('cake', 'r_cupcake', 'kaaf', 'كعكة', 'كَعْكَة', 'الكعكة', 'الكَعْكَة', 4),
]
out = [dict(id=r[0], thing=r[1], letter=r[2], word=r[3], wd=r[4], the=r[5], thed=r[6], age=r[7]) for r in ROWS]
# picture packs drawn later (tools/game_voice/packs/*.json, made by make_packs.py): a pack is switched on once ALL its pictures exist
import glob
ART = os.path.join(os.path.dirname(__file__), '..', '..', 'assets', 'games', 'art')
for pf in sorted(glob.glob(os.path.join(os.path.dirname(__file__), 'packs', '*.json'))):
    pack = json.load(io.open(pf, encoding='utf-8'))
    if all(os.path.exists(os.path.join(ART, it['thing'] + '.webp')) for it in pack['items']):
        out += pack['items']
        print('pack on:', pack['pack'])
path = os.path.join(os.path.dirname(__file__), '..', '..', 'game_src', 'learn_games', 'src', 'letters', 'more_words.json')
with io.open(path, 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
print(len(out), 'words written')
