# -*- coding: utf-8 -*-
# Diacritized readings of the extra questions inside the twelve levels (2026-11-18): total fruit (adding), the letter before, mixing colours,
# fruit or vegetable, and where a vehicle goes. Sentences that already have a reading are NOT touched.
import tashkeel_more as TM

PLAIN = {
    'كام فاكهة بالكل؟': 'كَام فَاكْهَة بِالكُلّ؟',
    'فين الفاكهة؟': 'فِين الفَاكْهَة؟', 'فين الخضار؟': 'فِين الخُضَار؟',
    'فين اللي بيطير؟': 'فِين اللِّي بِيطِير؟', 'فين اللي بيمشي في البحر؟': 'فِين اللِّي بِيمْشِي فِي البَحْر؟',
    'فين اللي بيمشي في الشارع؟': 'فِين اللِّي بِيمْشِي فِي الشَّارِع؟', 'فين اللي بيمشي على القضبان؟': 'فِين اللِّي بِيمْشِي عَلَى القُضْبَان؟',
}
COLORS = {'الأحمر': 'الأَحْمَر', 'الأصفر': 'الأَصْفَر', 'الأزرق': 'الأَزْرَق', 'الأخضر': 'الأَخْضَر', 'البنفسجي': 'البَنَفْسَجِي',
          'البرتقالي': 'البُرْتُقَالِي', 'الأبيض': 'الأَبْيَض', 'الوردي': 'الوَرْدِي'}
# (a, b, result) as in extras.js MIXES, written with the colour names
MIXES = [('الأحمر', 'الأصفر', 'البرتقالي'), ('الأزرق', 'الأصفر', 'الأخضر'), ('الأحمر', 'الأزرق', 'البنفسجي'), ('الأحمر', 'الأبيض', 'الوردي')]


def add(M):
    def put(k, v):
        if k not in M:
            M[k] = v
    for k, v in PLAIN.items():
        put(k, v)
    for lid, (the, thed) in TM.LETTER_THE.items():
        put('إيه الحرف اللي قبل %s؟' % the, 'إِيه الحَرْف اللِّي قَبْل %s؟' % thed)
    for a, b, c in MIXES:
        put('لو خلطنا %s و%s، نطلع إيه؟' % (a, b), 'لَو خَلَطْنَا %s وَ%s، نِطَلَّع إِيه؟' % (COLORS[a], COLORS[b]))
        put('%s و%s بيعملوا اللون %s' % (a, b, c), '%s وَ%s بِيعْمِلُوا اللَّوْن %s' % (COLORS[a], COLORS[b], COLORS[c]))
