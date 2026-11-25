# Replaces the baked-in "transparent" checkerboard inside a skin panel by a clean soft colour.
#   python -X utf8 tools/fix_checker.py <panel.webp> <R,G,B>
# Flood-fills from the centre over the light, nearly colourless pixels (white and light-grey squares); the frame is saturated so the fill stops there.
import sys
from collections import deque
from PIL import Image

path, rgb = sys.argv[1], tuple(int(x) for x in sys.argv[2].split(','))
im = Image.open(path).convert('RGBA')
w, h = im.size
px = im.load()
def light(x, y):
    r, g, b, a = px[x, y]
    return a > 200 and min(r, g, b) >= 196 and max(r, g, b) - min(r, g, b) <= 24
seen = bytearray(w * h)
dq = deque([(w // 2, h // 2 + h // 10)])
n = 0
while dq:
    x, y = dq.popleft()
    if x < 0 or y < 0 or x >= w or y >= h or seen[y * w + x] or not light(x, y):
        continue
    seen[y * w + x] = 1
    px[x, y] = rgb + (255,)
    n += 1
    dq.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))
im.save(path, lossless=True)
print(path, 'filled', n, 'pixels')
