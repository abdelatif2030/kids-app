# Installs the owner's 830-image batch (2026-11-27) for the learn world:
#   LNW-01..47  word cut-outs on white   -> assets/games/art/<picture_id>.webp (transparent, via tools/cut_sheet.py)
#   EXP-01..55  one scene per word       -> assets/games/art/ex_<word>.webp     (rounded tile, small)
#   EXE-001..214 one scene per example   -> assets/games/art/ex_<word>_<n>.webp
# The cell order and the grid come from the prompt docs (the same ones the sheets were made from).
#   python -X utf8 tools/install_learn_sheets.py <incoming dir with part3/ part4/ part5/> [lnw|exp|exe|all] [--workers N]
import io, os, re, subprocess, sys, glob, json
from concurrent.futures import ProcessPoolExecutor
from PIL import Image, ImageDraw, ImageChops

ART = 'assets/games/art/'
SCENE = 320          # px of the longest side of a scene picture
SCENE_Q = 74


def parse(doc, tag, grid_re):
    s = io.open(doc, encoding='utf-8').read()
    out = {}
    for m in re.finditer(r'\*\*(' + tag + r'-\d+)\*\*(.*?)(?=\n\*\*' + tag + r'-\d+\*\*|\Z)', s, re.S):
        body = m.group(2)
        g = re.search(grid_re, body)
        names = re.search(r'أسماء الملفات بالترتيب:\s*(.*)', body)
        assert g and names, m.group(1)
        out[m.group(1)] = (int(g.group(1)), int(g.group(2)), [n.strip() for n in names.group(1).strip().split(',')])
    return out


def find_sheet(root, sid):
    hits = glob.glob(os.path.join(root, '**', sid + '.png'), recursive=True)
    return hits[0] if hits else None


def cut_lnw(args):
    sheet, cols, rows, names = args
    r = subprocess.run([sys.executable, '-X', 'utf8', 'tools/cut_sheet.py', sheet, str(cols), str(rows), ART.rstrip('/'), ','.join(names), '640'],
                       capture_output=True, text=True)
    return sheet, r.returncode, (r.stderr or '')[-300:]


def tile_bbox(cell, tol=14):
    # the tile = everything that is not (nearly) white; crop to it
    diff = ImageChops.difference(cell.convert('RGB'), Image.new('RGB', cell.size, (255, 255, 255))).convert('L').point(lambda v: 255 if v > tol else 0)
    return diff.getbbox()


def cut_scenes(args):
    sheet, cols, rows, names = args
    im = Image.open(sheet).convert('RGB')
    W, H = im.size
    cw, ch = W / cols, H / rows
    made, bad = [], []
    for i, n in enumerate(names):
        if n == '-' or i >= cols * rows:
            continue
        c, r = i % cols, i // cols
        cell = im.crop((round(c * cw), round(r * ch), round((c + 1) * cw), round((r + 1) * ch)))
        bb = tile_bbox(cell)
        if not bb or (bb[2] - bb[0]) < cell.size[0] * 0.5 or (bb[3] - bb[1]) < cell.size[1] * 0.5:
            bad.append(n)
            continue
        t = cell.crop(bb)
        inset = max(2, round(min(t.size) * 0.012))      # drop the anti-aliased white rim of the tile
        t = t.crop((inset, inset, t.size[0] - inset, t.size[1] - inset))
        t.thumbnail((SCENE, SCENE), Image.LANCZOS)
        w, h = t.size
        k = 4                                           # rounded corners, drawn big then scaled down for a smooth edge
        m = Image.new('L', (w * k, h * k), 0)
        ImageDraw.Draw(m).rounded_rectangle((0, 0, w * k - 1, h * k - 1), radius=int(min(w, h) * k * 0.11), fill=255)
        a = m.resize((w, h), Image.LANCZOS)
        o = t.convert('RGBA')
        o.putalpha(a)
        o.save(ART + n + '.webp', quality=SCENE_Q, method=6)
        made.append(n)
    return sheet, made, bad


def main():
    root = sys.argv[1]
    what = sys.argv[2] if len(sys.argv) > 2 and not sys.argv[2].startswith('--') else 'all'
    workers = int(sys.argv[sys.argv.index('--workers') + 1]) if '--workers' in sys.argv else 4
    os.makedirs(ART, exist_ok=True)
    report = {'lnw': {}, 'exp': {}, 'exe': {}}
    jobs = []
    if what in ('lnw', 'all'):
        for sid, (c, r, names) in parse('docs/LEARN_NEW_IMAGE_PROMPTS.md', 'LNW', r'Grid of (\d+) columns x (\d+) rows').items():
            p = find_sheet(root, sid)
            assert p, sid
            jobs.append(('lnw', sid, (p, c, r, names)))
    for key, doc, tag in (('exp', 'docs/EXAMPLES_IMAGE_PROMPTS.md', 'EXP'), ('exe', 'docs/EXAMPLES_IMAGE_PROMPTS_PER_EXAMPLE.md', 'EXE')):
        if what in (key, 'all'):
            for sid, (c, r, names) in parse(doc, tag, r'grid of (\d+) columns x (\d+) rows').items():
                p = find_sheet(root, sid)
                assert p, sid
                jobs.append((key, sid, (p, c, r, names)))
    with ProcessPoolExecutor(workers) as ex:
        futs = [(k, sid, ex.submit(cut_lnw if k == 'lnw' else cut_scenes, a)) for k, sid, a in jobs]
        for k, sid, f in futs:
            res = f.result()
            report[k][sid] = res[1:] if k != 'lnw' else {'rc': res[1], 'err': res[2]}
            print(k, sid, 'ok' if (k == 'lnw' and res[1] == 0) or (k != 'lnw' and not res[2]) else 'CHECK', flush=True)
    io.open('build_install_learn_report.json', 'w', encoding='utf-8').write(json.dumps(report, ensure_ascii=False, indent=1))
    print('done', {k: len(v) for k, v in report.items()})


if __name__ == '__main__':
    main()
