# -*- coding: utf-8 -*-
# Diacritized readings of the number sentences of the numbers level (letters/numbers.js allNumberSentences):
# «فين رقم X؟» for 0-100, «فين الرقم اللي بعد/قبل X؟», and bigger / smaller. Sentences that already have a reading
# (1-20, recorded earlier) are NOT touched.
PLAIN = {1: 'واحد', 2: 'اتنين', 3: 'تلاتة', 4: 'أربعة', 5: 'خمسة', 6: 'ستة', 7: 'سبعة', 8: 'تمانية', 9: 'تسعة'}
UNIT = {1: 'وَاحِد', 2: 'اتْنِين', 3: 'تَلَاتَة', 4: 'أَرْبَعَة', 5: 'خَمْسَة', 6: 'سِتَّة', 7: 'سَبْعَة', 8: 'تَمَانْيَة', 9: 'تِسْعَة'}
TEEN_P = {10: 'عشرة', 11: 'حداشر', 12: 'اتناشر', 13: 'تلاتاشر', 14: 'أربعتاشر', 15: 'خمستاشر', 16: 'ستاشر', 17: 'سبعتاشر', 18: 'تمنتاشر', 19: 'تسعتاشر'}
TEEN = {10: 'عَشَرَة', 11: 'أَحَدَ عَشَر', 12: 'اتْنَاشَر', 13: 'تَلَاتَاشَر', 14: 'أَرْبَعْتَاشَر', 15: 'خَمَسْتَاشَر', 16: 'سِتَّاشَر', 17: 'سَبَعْتَاشَر', 18: 'تَمَنْتَاشَر', 19: 'تِسَعْتَاشَر'}
TENS_P = {2: 'عشرين', 3: 'تلاتين', 4: 'أربعين', 5: 'خمسين', 6: 'ستين', 7: 'سبعين', 8: 'تمانين', 9: 'تسعين'}
TENS = {2: 'عِشْرِين', 3: 'تَلَاتِين', 4: 'أَرْبَعِين', 5: 'خَمْسِين', 6: 'سِتِّين', 7: 'سَبْعِين', 8: 'تَمَانِين', 9: 'تِسْعِين'}


def word(n):
    """(plain, diacritized) of the number n in 0..100, spelled like numbers.js numberWord."""
    if n == 0: return 'صفر', 'صِفْر'
    if n == 100: return 'مية', 'مِيَّة'
    if n < 10: return PLAIN[n], UNIT[n]
    if n < 20: return TEEN_P[n], TEEN[n]
    t, u = divmod(n, 10)
    if not u: return TENS_P[t], TENS[t]
    w = 'وِ' if t in (2, 4) else 'وْ'   # «واحد وِعِشْرِين» but «تلاتة وْتلاتين»
    return '%s و%s' % (PLAIN[u], TENS_P[t]), '%s %s%s' % (UNIT[u], w, TENS[t])


def add(M):
    def put(plain, dia):
        if plain not in M:
            M[plain] = dia
    for n in range(0, 101):
        p, d = word(n)
        put('فين رقم %s؟' % p, 'فِين رَقَم %s؟' % d)
    for n in range(0, 20):
        p, d = word(n)
        put('فين الرقم اللي بعد %s؟' % p, 'فِين الرَّقَم اللِّي بَعْد %s؟' % d)
    for n in range(1, 21):
        p, d = word(n)
        put('فين الرقم اللي قبل %s؟' % p, 'فِين الرَّقَم اللِّي قَبْل %s؟' % d)
    put('فين الرقم الأكبر؟', 'فِين الرَّقَم الأَكْبَر؟')
    put('فين الرقم الأصغر؟', 'فِين الرَّقَم الأَصْغَر؟')
