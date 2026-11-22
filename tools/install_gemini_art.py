# Installs the downloaded Gemini art: moves originals out of assets/ (to build/gemini_art), makes poster.webp from each background and adds the menu backdrop script.
import glob, os, shutil
from PIL import Image
os.makedirs('build/gemini_art', exist_ok=True)
for f in sorted(glob.glob('assets/games/*/art/*_gemini.jpg')):
    parts = f.replace(os.sep, '/').split('/'); g = parts[2]; name = parts[-1]
    keep = f'build/gemini_art/{g}__{name}'; shutil.move(f, keep)
    if name.startswith('bg_wide'):
        Image.open(keep).convert('RGB').resize((1280, 720), Image.LANCZOS).save(f'assets/games/{g}/poster.webp', 'WEBP', quality=82, method=6)
        h = f'assets/games/{g}/index.html'; t = open(h, encoding='utf8').read()
        if 'menubg.js' not in t and '<script src="boot.js"></script>' in t:
            open(h, 'w', encoding='utf8').write(t.replace('<script src="boot.js"></script>', '<script src="../menubg.js"></script>\n<script src="boot.js"></script>', 1))
        print('poster', g)
