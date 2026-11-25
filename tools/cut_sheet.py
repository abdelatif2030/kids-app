# python -X utf8 tools/cut_sheet.py <sheet.png> <cols> <rows> <outDir> <name1,name2,...> [maxSide=512] [--keep-bg]
# Cuts an exact grid sheet (subjects on flat white) into transparent WebP sprites: flood-fills the white from each cell's border (soft edge),
# crops to the subject, scales to maxSide. Names may be '-' to skip a cell.
import sys, os
from collections import deque
from PIL import Image, ImageFilter

sheet, cols, rows, outdir, names = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4], sys.argv[5].split(',')
maxside = int(sys.argv[6]) if len(sys.argv) > 6 and sys.argv[6].isdigit() else 512
os.makedirs(outdir, exist_ok=True)


def cut_white(im, tol=26):
    im = im.convert('RGB'); w, h = im.size; px = im.load()
    bg = bytearray(w * h); dq = deque()
    def near(x, y):
        r, g, b = px[x, y]; return r > 255 - tol and g > 255 - tol and b > 255 - tol
    for x in range(w):
        for y in (0, h - 1):
            if near(x, y) and not bg[y * w + x]: bg[y * w + x] = 1; dq.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if near(x, y) and not bg[y * w + x]: bg[y * w + x] = 1; dq.append((x, y))
    while dq:
        x, y = dq.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not bg[ny * w + nx] and near(nx, ny): bg[ny * w + nx] = 1; dq.append((nx, ny))
    a = Image.new('L', (w, h), 255); ap = a.load()
    for y in range(h):
        for x in range(w):
            if bg[y * w + x]: ap[x, y] = 0
    a = a.filter(ImageFilter.GaussianBlur(0.8))
    out = im.convert('RGBA'); out.putalpha(a); return out


im = Image.open(sheet).convert('RGB'); W, H = im.size; cw, ch = W / cols, H / rows
for i, n in enumerate(names):
    if n == '-' or i >= cols * rows: continue
    c, r = i % cols, i // cols
    mx, my = int(cw * 0.025), int(ch * 0.025)  # the sheets can have faint grid lines on the cell borders: stay inside them
    cell = im.crop((int(c * cw) + mx, int(r * ch) + my, int((c + 1) * cw) - mx, int((r + 1) * ch) - my))
    spr = cut_white(cell)
    bbox = spr.getchannel('A').point(lambda v: 255 if v > 40 else 0).getbbox()
    if bbox: spr = spr.crop(bbox)
    k = maxside / max(spr.size)
    if k < 1: spr = spr.resize((max(1, int(spr.width * k)), max(1, int(spr.height * k))), Image.LANCZOS)
    spr.save(os.path.join(outdir, n + '.webp'), quality=88, method=6)
    print(n, spr.size)
