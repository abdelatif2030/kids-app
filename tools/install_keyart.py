# python -X utf8 tools/install_keyart.py <game> <code>  -> build/gpt_art/<code>.png becomes assets/games/<game>/poster.webp (1600x900) and card.webp (left square crop, 768);
# the old hero.webp is moved to build/gpt_art/old_<game>_hero.webp (the hero is in the key art now).
import sys, os, shutil
from PIL import Image
g, code = sys.argv[1], sys.argv[2]
im = Image.open(f'build/gpt_art/{code}.png').convert('RGB'); W, H = im.size
im.resize((1600, int(1600 * H / W)), Image.LANCZOS).crop((0, 0, 1600, 900) if int(1600 * H / W) >= 900 else (0, 0, 1600, int(1600 * H / W))).save(f'assets/games/{g}/poster.webp', quality=82, method=6)
sq = min(H, W)
im.crop((0, 0, sq, sq)).resize((768, 768), Image.LANCZOS).save(f'assets/games/{g}/card.webp', quality=84, method=6)
h = f'assets/games/{g}/hero.webp'
if os.path.exists(h): shutil.move(h, f'build/gpt_art/old_{g}_hero.webp')
print('installed', g, im.size)
