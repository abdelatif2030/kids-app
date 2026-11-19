import subprocess, os, re
os.chdir('C:/dev/rehlaty')
games = [
    ('hot_spring', 'HotSpring', 'kHotSpring', 'ينابيع القرية', 'Hot Spring Village', 'FF7AC8E8', 'FFFFE8C8', 'build'),
    ('hop_world', 'HopWorld', 'kHopWorld', 'عالم القفز', 'Hop World', 'FF5AA8E8', 'FFFFD23A', 'runners'),
    ('mars_farm', 'MarsFarm', 'kMarsFarm', 'مزرعة المريخ', 'Mars Farm Colony', 'FFC8452A', 'FFFFB88A', 'build'),
    ('pin_puzzle', 'PinPuzzle', 'kPinPuzzle', 'اسحب الدبوس', 'Pull the Pin', 'FF5AE8B8', 'FFFFB8D8', 'puzzle'),
    ('gem_quarry', 'GemQuarry', 'kGemQuarry', 'محجر الجواهر', 'Gemlode Quarry', 'FF8A5AE8', 'FFE8C88A', 'build'),
    ('sky_ace', 'SkyAce', 'kSkyAce', 'طيار السحاب', 'Sky Ace', 'FF6AB8FF', 'FFFFFFFF', 'action'),
    ('nutmeg_rush', 'NutmegRush', 'kNutmegRush', 'سكة الكورة', 'Nutmeg Rush', 'FF2A8A3A', 'FF9AF0A0', 'action'),
    ('trick_or_treat', 'TrickOrTreat', 'kTrickOrTreat', 'حلاوة ولا مقلب', 'Trick or Treat Crowd', 'FF5A2A8A', 'FFFFA82A', 'runners'),
    ('viking_sling', 'VikingSling', 'kVikingSling', 'مقلاع الفايكنج', 'Viking Slingshot', 'FF8A5A2A', 'FF7AC8FF', 'action'),
    ('card_battle', 'CardBattle', 'kCardBattle', 'معركة الكروت النيون', 'Neon Card Battle', 'FF3A1A8A', 'FF2AE8FF', 'action'),
    ('dino_grow', 'DinoGrow', 'kDinoGrow', 'ديناصور صغير يكبر', 'Dino Grow', 'FF3A8A2A', 'FFFF8A2A', 'action'),
]
sec = {}
for gid, glob, kn, ar, en, c1, c2, sect in games:
    if not os.path.isdir('assets/games/' + gid):
        print('MISSING assets', gid)
        continue
    s = open('lib/games/web_games/web_game.dart', encoding='utf8').read()
    if "id: '%s'" % gid in s:
        print('already', gid)
    else:
        r = subprocess.run(['python', 'tools/register_game.py', gid, glob, kn, ar, en, c1, c2], capture_output=True, text=True)
        print(gid, r.stdout.strip(), r.stderr.strip()[:200])
    sec.setdefault(sect, []).append(gid)
p = 'lib/games/fun_sections.dart'
s = open(p, encoding='utf8').read()
for sect, ids in sec.items():
    m = re.search(r"FunSection\('%s',.*?\[([^\]]*)\]\)" % sect, s, re.S)
    cur = m.group(1)
    add = ''.join(", '%s'" % i for i in ids if "'%s'" % i not in cur)
    s = s[:m.end(1)] + add + s[m.end(1):]
open(p, 'w', encoding='utf8').write(s)
print('sections updated')
