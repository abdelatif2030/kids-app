# -*- coding: utf-8 -*-
# Diacritized readings of the newest question kinds (2026-11-18): the age question, the big / small shape, the forms of a letter,
# "who says ...?" and "... lives where?" (with the sentence said after the right answer). Sentences that already have a reading are NOT touched.
import tashkeel_more as TM

AGE = {
    'العب معانا تاني': 'اِلْعَب مَعَانَا تَانِي', 'يلا نلعب تاني!': 'يَلَّا نِلْعَب تَانِي!',
    'عندك كام سنة؟': 'عِنْدَك كَام سَنَة؟', 'عندك سنتين': 'عِنْدَك سَنَتِين', 'عندك تلات سنين': 'عِنْدَك تَلَات سِنِين',
    'عندك أربع سنين': 'عِنْدَك أَرْبَع سِنِين', 'عندك خمس سنين': 'عِنْدَك خَمْس سِنِين', 'عندك ست سنين': 'عِنْدَك سِتّ سِنِين',
}
SIZE = {'فين الشكل الكبير؟': 'فِين الشَّكْل الكَبِير؟', 'فين الشكل الصغير؟': 'فِين الشَّكْل الصَّغِير؟'}
CONNECT = ['baa', 'taa', 'thaa', 'jeem', 'haa', 'khaa', 'seen', 'sheen', 'sad', 'dad', 'tah', 'zah', 'ayn', 'ghayn', 'faa', 'qaaf', 'kaaf', 'laam', 'meem', 'noon', 'haa2', 'yaa']
FORMS = [('أول', 'أَوِّل'), ('نص', 'نُصّ'), ('آخر', 'آخِر')]
# what each animal says (plain -> diacritized)
SAY = {
    'موووو': 'مُوووو', 'مياو': 'مِيَاو', 'هو هو': 'هَو هَو', 'ماااع': 'مَاااع', 'كوكو كوكوكو': 'كُوكُو كُوكُوكُو', 'كاك كاك': 'كَاك كَاك',
    'بيو بيو': 'بِيو بِيو', 'واك واك': 'وَاك وَاك', 'هيييه': 'هِيييه', 'هيهيهيهي': 'هِيهِيهِيهِي', 'رووور': 'رُووور', 'نق نق': 'نَق نَق',
    'زززز': 'زْززز', 'إيك إيك': 'إِيك إِيك', 'بوووو': 'بُوووو', 'غوغو': 'غُوغُو', 'أوو أوو': 'أُوو أُوو',
}
SOUNDS = {'cow': 'موووو', 'cat': 'مياو', 'dog': 'هو هو', 'sheep': 'ماااع', 'rooster': 'كوكو كوكوكو', 'hen': 'كاك كاك', 'chick': 'بيو بيو', 'duck': 'واك واك',
          'donkey': 'هيييه', 'horse': 'هيهيهيهي', 'lion': 'رووور', 'frog': 'نق نق', 'bee': 'زززز', 'mouse': 'إيك إيك', 'elephant': 'بوووو', 'pigeon': 'غوغو', 'monkey': 'أوو أوو'}
PLACES = {'في المزرعة': 'فِي المَزْرَعَة', 'في الغابة': 'فِي الغَابَة', 'في البحر': 'فِي البَحْر', 'في الثلج': 'فِي الثَّلْج', 'في الصحرا': 'فِي الصَّحْرَا', 'في البيت': 'فِي البَيْت'}
# the animals of animals/sim.js: id -> (the, diacritized the, feminine) for the ones that are not in tashkeel_more.ANIMALS
BASE = {'rabbit': ('الأرنب', 'الأَرْنَب', False), 'cat': ('القطة', 'القِطَّة', True), 'dog': ('الكلب', 'الكَلْب', False), 'monkey': ('القرد', 'القِرْد', False),
        'cow': ('البقرة', 'البَقَرَة', True), 'bear': ('الدب', 'الدُّبّ', False), 'mouse': ('الفار', 'الفَار', False), 'chick': ('الكتكوت', 'الكُتْكُوت', False)}
IDS = {'horse': 'الحصان', 'hen': 'الفرخة', 'donkey': 'الحمار', 'goat': 'الماعز', 'parrot': 'الببغاء', 'sheep': 'الخروف', 'rooster': 'الديك', 'lion': 'الأسد',
       'tiger': 'النمر', 'elephant': 'الفيل', 'giraffe': 'الزرافة', 'zebra': 'الحمار الوحشي', 'gorilla': 'الغوريلا', 'chameleon': 'الحرباية', 'frog': 'الضفدع',
       'toucan': 'التوكان', 'penguin': 'البطريق', 'seal': 'الفقمة', 'reindeer': 'الرنة', 'fox': 'الثعلب', 'camel': 'الجمل', 'dolphin': 'الدلفين', 'turtle': 'السلحفاة',
       'goose': 'الوزة', 'duck': 'البطة', 'pigeon': 'الحمامة', 'shark': 'القرش', 'cheetah': 'الفهد', 'croc': 'التمساح', 'iguana': 'السحلية الكبيرة', 'bee': 'النحلة'}
HOMES = {'cow': 'في المزرعة', 'chick': 'في المزرعة', 'horse': 'في المزرعة', 'hen': 'في المزرعة', 'donkey': 'في المزرعة', 'goat': 'في المزرعة', 'sheep': 'في المزرعة',
         'rooster': 'في المزرعة', 'goose': 'في المزرعة', 'duck': 'في المزرعة', 'monkey': 'في الغابة', 'lion': 'في الغابة', 'tiger': 'في الغابة', 'elephant': 'في الغابة',
         'giraffe': 'في الغابة', 'zebra': 'في الغابة', 'gorilla': 'في الغابة', 'chameleon': 'في الغابة', 'parrot': 'في الغابة', 'toucan': 'في الغابة', 'cheetah': 'في الغابة',
         'iguana': 'في الغابة', 'frog': 'في الغابة', 'croc': 'في الغابة', 'bear': 'في الثلج', 'penguin': 'في الثلج', 'seal': 'في الثلج', 'reindeer': 'في الثلج', 'fox': 'في الثلج',
         'camel': 'في الصحرا', 'dolphin': 'في البحر', 'shark': 'في البحر', 'turtle': 'في البحر', 'cat': 'في البيت', 'dog': 'في البيت', 'rabbit': 'في البيت', 'mouse': 'في البيت'}


def animal(aid):
    """(the, diacritized the, feminine) of an animal id; the diacritized forms of the newer animals come from tashkeel_more.ANIMALS."""
    if aid in BASE:
        return BASE[aid]
    the = IDS[aid]
    for t in TM.ANIMALS:
        if t[0] == the:
            return t[0], t[1], t[2]
    raise KeyError(aid)


def add(M):
    def put(k, v):
        if k not in M:
            M[k] = v
    for k, v in list(AGE.items()) + list(SIZE.items()):
        put(k, v)
    for lid in CONNECT:
        the, thed = TM.LETTER_THE[lid]
        for w, d in FORMS:
            put('فين %s اللي في %s الكلمة؟' % (the, w), 'فِين %s اللِّي فِي %s الكَلِمَة؟' % (thed, d))
    for aid, say in SOUNDS.items():
        the, thed, fem = animal(aid)
        put('مين بيقول %s؟' % say, 'مِين بِيقُول %s؟' % SAY[say])
        put('%s %s %s' % (the, 'بتقول' if fem else 'بيقول', say), '%s %s %s' % (thed, 'بِتْقُول' if fem else 'بِيقُول', SAY[say]))
    for aid, place in HOMES.items():
        the, thed, fem = animal(aid)
        v, vd = ('بتعيش', 'بِتْعِيش') if fem else ('بيعيش', 'بِيعِيش')
        put('%s %s فين؟' % (the, v), '%s %s فِين؟' % (thed, vd))
        put('%s %s %s' % (the, v, place), '%s %s %s' % (thed, vd, PLACES[place]))
