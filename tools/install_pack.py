# Installs the owner's standard picture pack of one game (01 key art, 02 UI skin 4x2, 03 pills 3x2, 06.. backdrops, win, icons)
#   python -X utf8 tools/install_pack.py <game> <zipdir> <panelRGB> <win#> <icons#> <backdrop#,#,...>
# -> assets/games/<game>/{card.webp, poster.webp, skin/*.webp, art/win.webp, art/icon_coin.webp, art/icon_star.webp, art/pano1..N.webp}
import sys, os, subprocess, glob
from PIL import Image
game, zd, panel, win, icons, bgs = sys.argv[1:7]
D = f'assets/games/{game}/'
def f(n):
    m = glob.glob(os.path.join(zd, '**', f'{game}-{int(n):02d}*.png'), recursive=True)
    assert m, (game, n); return m[0]
py = [sys.executable, '-X', 'utf8']
os.makedirs(D + 'skin', exist_ok=True); os.makedirs(D + 'art', exist_ok=True)
subprocess.check_call(py + ['tools/cut_sheet.py', f(2), '4', '2', D + 'skin', 'panel,play,lv_open,lv_lock,lv_done,lv_sel,ribbon,sound', '768'])
subprocess.check_call(py + ['tools/cut_sheet.py', f(3), '3', '2', D + 'skin', 'pill_orange,pill_blue,pill_green,pill_gold,pill_purple,pill_grey', '512'])
subprocess.check_call(py + ['tools/fix_checker.py', D + 'skin/panel.webp', panel])
k = Image.open(f(1)).convert('RGB')
p = k.copy(); p.thumbnail((1600, 900)); p.save(D + 'poster.webp', quality=86, method=6)
w, h = k.size; cw = int(h * 480 / 385); x0 = (w - cw) // 2
c = k.crop((x0, 0, x0 + cw, h)).resize((768, 616), Image.LANCZOS); c.save(D + 'card.webp', quality=86, method=6)
wn = Image.open(f(win)).convert('RGB'); wn.thumbnail((1400, 800)); wn.save(D + 'art/win.webp', quality=82, method=6)
subprocess.check_call(py + ['tools/cut_sheet.py', f(icons), '4', '3', D + 'art', 'icon_coin,icon_star,icon_gem,icon_shield,icon_magnet,icon_heart,icon_boost,icon_key,icon_chest,icon_medal,icon_crown,icon_gift', '256'])
for i, n in enumerate(b for b in bgs.split(',') if b):
    im = Image.open(f(n)).convert('RGB'); im.thumbnail((1600, 700)); im.save(D + f'art/pano{i+1}.webp', quality=80, method=6)
print('installed', game)
