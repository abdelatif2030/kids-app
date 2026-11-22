# Installs the downloaded Gemini art: moves originals out of assets/ (to build/gemini_art), makes poster.webp from each background and adds the menu backdrop script.
import glob, os, shutil
from PIL import Image
os.makedirs('build/gemini_art', exist_ok=True)
def cover(im, W=1280, H=720):
    w, h = im.size; r = W / H
    if w / h > r: nw = int(h * r); im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    elif w / h < r: nh = int(w / r); im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))
    return im.resize((W, H), Image.LANCZOS)
for f in sorted(glob.glob('assets/games/*/art/*_gemini.jpg')):
    parts = f.replace(os.sep, '/').split('/'); g = parts[2]; name = parts[-1]
    keep = f'build/gemini_art/{g}__{name}'; shutil.move(f, keep)
    if name.startswith('bg_wide'):
        cover(Image.open(keep).convert('RGB')).save(f'assets/games/{g}/poster.webp', 'WEBP', quality=82, method=6)
        h = f'assets/games/{g}/index.html'; t = open(h, encoding='utf8').read()
        if 'menubg.js' not in t and '<script src="boot.js"></script>' in t:
            open(h, 'w', encoding='utf8').write(t.replace('<script src="boot.js"></script>', '<script src="../menubg.js"></script>\n<script src="boot.js"></script>', 1))
        print('poster', g)
