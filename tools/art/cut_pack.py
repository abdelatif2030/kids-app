# Cuts one picture pack (a 4 x 3 sheet drawn from docs/IMAGE_SCRIPTS_NEXT.md) into assets/games/art/<prefix>_<name>.webp.
#   PYTHONUTF8=1 python tools/art/cut_pack.py <pack name> <sheet number> "<images folder>"
# Appends the grid lines to tools/art/cut_art.sh and runs tools/art/recut.mjs. Then run:
#   PYTHONUTF8=1 python tools/game_voice/make_more_words.py && node tools/game_voice/lines.mjs && PYTHONUTF8=1 python tools/game_voice/make_tashkeel.py
#   cd game_src/learn_games && npm run build:letters && npm test
# Check the cut by eye (an item wider than its cell needs an override line in cut_art.sh, see the notes there).
import io, json, os, subprocess, sys

here = os.path.dirname(os.path.abspath(__file__))
root = os.path.join(here, '..', '..')
pack, sheet, images = sys.argv[1], sys.argv[2], sys.argv[3]
data = json.load(io.open(os.path.join(root, 'tools', 'game_voice', 'packs', pack + '.json'), encoding='utf-8'))
cols, rows, m = data['cols'], data['rows'], 15
cw, ch = 1536 // cols, 1024 // rows
lines, names = [], []
for i, it in enumerate(data['items']):
    r, c = divmod(i, cols)
    x, y = max(0, c * cw - m), max(0, r * ch - m)
    w, h = min(cw + 2 * m, 1536 - x), min(ch + 2 * m, 1024 - y)
    lines.append(f"cutw {sheet} {w} {h} {x} {y} {it['thing']}")
    names.append(it['thing'])
with io.open(os.path.join(here, 'cut_art.sh'), 'a', encoding='utf-8', newline='\n') as f:
    f.write(f"\n# pack {pack} (sheet {sheet})\n" + '; '.join(lines) + '\n')
subprocess.run(['node', os.path.join(here, 'recut.mjs'), images] + names, check=True)
