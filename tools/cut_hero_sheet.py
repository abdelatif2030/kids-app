# Cuts a Gemini character sheet (plain green/grey background) into transparent sprites with PIL only.
# python tools/cut_hero_sheet.py <sheet.jpg> <outdir> -> outdir/NN.webp (largest first order = top-left first) + prints bbox list
import sys, os
from collections import deque
from PIL import Image, ImageChops, ImageFilter
def cut(path, outdir, min_area=0.004, max_n=16, thr=44, dil=9):
    im = Image.open(path).convert('RGB'); W, H = im.size
    px = im.load(); pts = [(4, 4), (W - 5, 4), (4, H - 5), (W - 5, H - 5), (W // 2, 4), (W // 2, H - 5)]
    bg = tuple(sorted(px[x, y][c] for x, y in pts)[len(pts) // 2] for c in range(3))
    d = ImageChops.difference(im, Image.new('RGB', im.size, bg)); r, g, b = d.split()
    diff = ImageChops.lighter(ImageChops.lighter(r, g), b)
    mask = diff.point(lambda v: 255 if v > thr else 0).filter(ImageFilter.MaxFilter(dil))
    s = 4; sm = mask.resize((W // s, H // s), Image.NEAREST); w, h = sm.size; sp = sm.load()
    seen = [[False] * w for _ in range(h)]; blobs = []
    for y in range(h):
        for x in range(w):
            if sp[x, y] and not seen[y][x]:
                q = deque([(x, y)]); seen[y][x] = True; x0 = x1 = x; y0 = y1 = y; n = 0
                while q:
                    cx, cy = q.popleft(); n += 1; x0 = min(x0, cx); x1 = max(x1, cx); y0 = min(y0, cy); y1 = max(y1, cy)
                    for nx, ny in ((cx + 1, cy), (cx - 1, cy), (cx, cy + 1), (cx, cy - 1)):
                        if 0 <= nx < w and 0 <= ny < h and sp[nx, ny] and not seen[ny][nx]: seen[ny][nx] = True; q.append((nx, ny))
                if n > min_area * w * h: blobs.append((n, (x0 * s, y0 * s, (x1 + 1) * s, (y1 + 1) * s)))
    blobs.sort(key=lambda b: (b[1][1] // (H // 4), b[1][0]))  # rows top to bottom, left to right
    os.makedirs(outdir, exist_ok=True); alpha = diff.point(lambda v: max(0, min(255, (v - 22) * 9)))
    out = []
    for i, (n, bb) in enumerate(blobs[:max_n]):
        x0, y0, x1, y1 = max(0, bb[0] - 6), max(0, bb[1] - 6), min(W, bb[2] + 6), min(H, bb[3] + 6)
        c = im.crop((x0, y0, x1, y1)).convert('RGBA'); c.putalpha(alpha.crop((x0, y0, x1, y1)))
        p = os.path.join(outdir, '%02d.webp' % i); c.save(p, 'WEBP', quality=88); out.append((p, (x0, y0, x1, y1)))
    return out
if __name__ == '__main__':
    for p, bb in cut(sys.argv[1], sys.argv[2]): print(p, bb)
