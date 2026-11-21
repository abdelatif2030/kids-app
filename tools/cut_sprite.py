# Cuts one vehicle/character out of a generated picture that sits on a (nearly) white background.
#   cut(src, box, out, size)  -> transparent WebP: the white that touches the border of the box becomes transparent, then only the
#   biggest connected piece is kept (so a bit of another car at the edge of the box disappears). PIL only (no numpy needed).
import os
from PIL import Image, ImageDraw, ImageFilter


def cut(src, box, out, height=512, white=236, keep_main=True, sat=70, dark=115):
    im = Image.open(src).convert('RGB').crop(box)
    w, h = im.size
    # 1) mask: 255 = the object, 0 = background. An object pixel is colourful (saturation) or dark (tyres, glass); white, grey shadow and
    #    the white of the page are all background. Then small gaps are closed.
    hsv = im.convert('HSV')
    sch, vch = hsv.split()[1], hsv.split()[2]
    m1 = sch.point(lambda v: 255 if v > sat else 0)
    m2 = vch.point(lambda v: 255 if v < dark else 0)
    from PIL import ImageChops
    mask = ImageChops.lighter(m1, m2).filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.MinFilter(5))
    # 2) background = white connected to the border of the box
    bg = mask.copy()
    pad = Image.new('L', (w + 2, h + 2), 0)  # a frame of 0 so that the fill can walk around the whole border
    pad.paste(bg, (1, 1))
    ImageDraw.floodfill(pad, (0, 0), 128, thresh=0)
    filled = pad.crop((1, 1, w + 1, h + 1))
    obj = filled.point(lambda v: 255 if v == 255 else 0)  # object pixels not reachable from the border = object (and enclosed white holes stay opaque below)
    # enclosed white (windows, gaps) was never reached by the fill: it is 0 in `mask` but must stay opaque, so fill holes:
    holes = filled.point(lambda v: 255 if v == 0 else 0)  # pixels that are neither object (255) nor outside (128) => enclosed background
    alpha = Image.new('L', (w, h), 0)
    alpha.paste(255, mask=obj)
    alpha.paste(255, mask=holes)
    # 3) keep the biggest piece
    if keep_main:
        cx, cy = _densest(alpha)
        keep = alpha.copy()
        ImageDraw.floodfill(keep, (cx, cy), 200, thresh=0)
        alpha = keep.point(lambda v: 255 if v == 200 else 0)
    # 4) soft edge
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.8))
    rgba = im.convert('RGBA')
    rgba.putalpha(alpha)
    bbox = alpha.point(lambda v: 255 if v > 24 else 0).getbbox()
    if bbox: rgba = rgba.crop(bbox)
    r = height / rgba.size[1]
    rgba = rgba.resize((max(1, int(rgba.size[0] * r)), height), Image.LANCZOS)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    rgba.save(out, 'WEBP', quality=88, method=6)
    return rgba.size


def _densest(alpha):
    """A point inside the biggest blob: the middle of the box if it is object, else the first object pixel found around the middle."""
    w, h = alpha.size
    px = alpha.load()
    cx, cy = w // 2, int(h * 0.62)
    for r in range(0, max(w, h) // 2, 4):
        for dx in (-r, 0, r):
            for dy in (-r, 0, r):
                x, y = cx + dx, cy + dy
                if 0 <= x < w and 0 <= y < h and px[x, y] == 255: return x, y
    return cx, cy


def checker(rgba, out):
    w, h = rgba.size
    bg = Image.new('RGBA', (w, h), (90, 160, 90, 255))
    d = ImageDraw.Draw(bg)
    for y in range(0, h, 32):
        for x in range(0, w, 32):
            if (x // 32 + y // 32) % 2: d.rectangle([x, y, x + 31, y + 31], fill=(60, 120, 200, 255))
    bg.alpha_composite(rgba)
    bg.convert('RGB').save(out)


def cut_poly(src, poly, out, height=512, scale=1.0, feather=1.2):
    """Cuts the inside of a hand-drawn polygon (points in the picture's own pixels x scale) out of the picture."""
    from PIL import ImageDraw
    im = Image.open(src).convert('RGB')
    pts = [(x * scale, y * scale) for x, y in poly]
    mask = Image.new('L', im.size, 0)
    ImageDraw.Draw(mask).polygon(pts, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(feather))
    rgba = im.convert('RGBA')
    rgba.putalpha(mask)
    rgba = rgba.crop(mask.point(lambda v: 255 if v > 20 else 0).getbbox())
    r = height / rgba.size[1]
    rgba = rgba.resize((max(1, int(rgba.size[0] * r)), height), Image.LANCZOS)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    rgba.save(out, 'WEBP', quality=88, method=6)
    return rgba.size


def cut_white(im, white=238, height=512):
    """For pictures made on a PURE white background with no ground shadow (the sheet prompts ask for that): the white connected to the
    border becomes transparent, enclosed white (windows, teeth, plates) stays. Returns an RGBA image cropped to the object."""
    im = im.convert('RGB')
    w, h = im.size
    mask = im.convert('L').point(lambda v: 0 if v >= white else 255)
    pad = Image.new('L', (w + 2, h + 2), 0)
    pad.paste(mask, (1, 1))
    ImageDraw.floodfill(pad, (0, 0), 128, thresh=0)
    filled = pad.crop((1, 1, w + 1, h + 1))
    alpha = filled.point(lambda v: 0 if v == 128 else 255).filter(ImageFilter.GaussianBlur(0.7))
    rgba = im.convert('RGBA')
    rgba.putalpha(alpha)
    box = alpha.point(lambda v: 255 if v > 24 else 0).getbbox()
    if box: rgba = rgba.crop(box)
    r = height / rgba.size[1]
    return rgba.resize((max(1, int(rgba.size[0] * r)), height), Image.LANCZOS)


def cut_sheet(src, cols, rows, names, out_dir, height=512):
    """A sheet of cols x rows items, each in its own invisible cell on pure white (docs/INGAME_SPRITE_SHEETS.md). names go left to right,
    top to bottom; an empty name skips the cell. Writes <out_dir>/<name>.webp (transparent)."""
    sheet = Image.open(src).convert('RGB')
    W, H = sheet.size
    cw, ch = W / cols, H / rows
    done = []
    for i, n in enumerate(names):
        if not n: continue
        c, r = i % cols, i // cols
        cell = sheet.crop((int(c * cw), int(r * ch), int((c + 1) * cw), int((r + 1) * ch)))
        os.makedirs(out_dir, exist_ok=True)
        cut_white(cell, height=height).save(os.path.join(out_dir, n + '.webp'), 'WEBP', quality=88, method=6)
        done.append(n)
    return done


if __name__ == '__main__':
    import sys
    # python tools/cut_sprite.py sheet.png COLSxROWS name1,name2,... out_dir
    src, grid, names, out_dir = sys.argv[1:5]
    cols, rows = [int(x) for x in grid.lower().split('x')]
    print(cut_sheet(src, cols, rows, names.split(','), out_dir))
