# Installs the owner's world pictures of one language (CARD, MAP, ICONS, WIN; the GUIDE sheet is not used: the guide in the game is the owl)
#   python -X utf8 tools/install_italian_art.py <dir with IT-*.png or FR-*.png> [it|fr]   (default it)
# -> assets/games/learn_lang/it.webp           (language card, 343x400, transparent, the tall card centred)
#    assets/games/learn_letters/art/it_map.webp (the sea map WITHOUT the baked UI bar at the bottom)
#    assets/games/learn_letters/art/it_win.webp
#    assets/games/learn_letters/art/it_i0..it_i15.webp (16 level badges, order of docs/ITALIAN_IMAGE_PROMPTS.md)
import os, subprocess, sys
sys.path.insert(0, 'tools')
from PIL import Image
from cut_sprite import cut_white

src = sys.argv[1]
L = (sys.argv[2] if len(sys.argv) > 2 else 'it').lower()
U = L.upper()
ART = 'assets/games/learn_letters/art/'


def find(n):
    for r, _, fs in os.walk(src):
        if n in fs:
            return os.path.join(r, n)
    raise SystemExit('missing ' + n)


# card: cut the white away, trim, centre on the same canvas the other cards use
card = cut_white(Image.open(find(U + '-CARD.png')).convert('RGB'))
bb = card.getchannel('A').point(lambda v: 255 if v > 24 else 0).getbbox()
card = card.crop(bb)
H = 400
card = card.resize((round(card.size[0] * H / card.size[1]), H), Image.LANCZOS)
canvas = Image.new('RGBA', (343, 400), (0, 0, 0, 0))
canvas.paste(card, ((343 - card.size[0]) // 2, 0), card)
canvas.save(f'assets/games/learn_lang/{L}.webp', quality=88, method=6)

# map: the picture has a cream UI bar (pause / star / settings) baked in along the bottom: keep only the landscape above it
m = Image.open(find(U + '-MAP.png')).convert('RGB')
W, Hm = m.size
# find the first row from the top that is the cream band (average colour close to the band colour) below 60% of the height
band = None
for y in range(int(Hm * 0.6), Hm):
    row = m.crop((0, y, W, y + 1)).resize((1, 1), Image.BOX).getpixel((0, 0))
    if row[0] > 235 and row[1] > 220 and row[2] > 190:
        band = y
        break
if band:
    m = m.crop((0, 0, W, band - 6))   # no band (clean map): keep everything
m.thumbnail((1600, 900), Image.LANCZOS)
m.save(ART + f'{L}_map.webp', quality=82, method=6)

w = Image.open(find(U + '-WIN.png')).convert('RGB')
w.thumbnail((1600, 900), Image.LANCZOS)
w.save(ART + f'{L}_win.webp', quality=82, method=6)

subprocess.check_call([sys.executable, '-X', 'utf8', 'tools/cut_sheet.py', find(U + '-ICONS.png'), '4', '4', ART.rstrip('/'),
                       ','.join(L + '_i%d' % i for i in range(16)), '256'])
print('installed', L, 'art; map band row', band)
