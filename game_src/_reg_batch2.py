import subprocess, os, re
os.chdir('C:/dev/rehlaty')
games = [
    ('ice_rink', 'IceRink', 'kIceRink', 'معركة حلبة الجليد', 'Ice Rink Brawl', 'FF4A8AC8', 'FFE8F4FF', 'action'),
    ('tomb_puzzle', 'TombPuzzle', 'kTombPuzzle', 'لغز المقبرة', 'Tomb Puzzle', 'FFC8782A', 'FFFFD88A', 'puzzle'),
    ('sweet_tray', 'SweetTray', 'kSweetTray', 'طبق الحلويات', 'Sweet Tray', 'FFFF9AC8', 'FFFFF0D8', 'puzzle'),
    ('barrel_knights', 'BarrelKnights', 'kBarrelKnights', 'فرسان البرميل', 'Barrel Knights', 'FFC8962A', 'FF7A9AE8', 'action'),
    ('gummy_squad', 'GummySquad', 'kGummySquad', 'فرقة الدببة الجيلي', 'Gummy Squad', 'FF5A3A8A', 'FFFF8AC8', 'action'),
    ('fashion_queen', 'FashionQueen', 'kFashionQueen', 'ملكة الموضة', 'Fashion Queen', 'FFFF6AA8', 'FFFFD8EC', 'girls'),
]
p = 'lib/games/fun_sections.dart'
s = open(p, encoding='utf8').read()
if "FunSection('girls'" not in s:
    s = s.replace("];\n\nWebGame? _byId", "  FunSection('girls', '🎀', () => tr2('عالم البنات', 'Girls World'), const Color(0xFFFF6AA8), const Color(0xFFFFD8EC), []),\n];\n\nWebGame? _byId", 1)
for gid, glob, kn, ar, en, c1, c2, sect in games:
    if not os.path.isdir('assets/games/' + gid):
        print('MISSING', gid); continue
    w = open('lib/games/web_games/web_game.dart', encoding='utf8').read()
    if "id: '%s'" % gid not in w:
        r = subprocess.run(['python', 'tools/register_game.py', gid, glob, kn, ar, en, c1, c2], capture_output=True, text=True)
        print(gid, r.stdout.strip(), r.stderr.strip()[:200])
    m = re.search(r"FunSection\('%s',.*?\[([^\]]*)\]\)" % sect, s, re.S)
    cur = m.group(1)
    if "'%s'" % gid not in cur:
        add = ("'%s'" % gid) if not cur.strip() else (", '%s'" % gid)
        s = s[:m.end(1)] + add + s[m.end(1):]
open(p, 'w', encoding='utf8').write(s)
print('ok')
