// Crowd formation (pure): the followers pack into rows along the captain's trail, as wide as the corridor allows.
// `packCrowd` returns target points; the renderer eases the real followers towards them.
export class Trail {
  constructor() { this.pts = []; this.len = []; }
  push(x, y) {
    const p = this.pts; const n = p.length;
    if (n && Math.hypot(x - p[n - 1].x, y - p[n - 1].y) < 0.25) return;
    p.push({ x, y }); // newest last
    if (p.length > 500) p.shift();
  }
  /** point at distance d behind the newest point, with the unit direction of travel there */
  at(d) {
    const p = this.pts; let i = p.length - 1;
    if (i < 1) return p[0] ? { x: p[0].x, y: p[0].y, dx: 0, dy: -1 } : { x: 0, y: 0, dx: 0, dy: -1 };
    let rem = d;
    while (i > 0) {
      const a = p[i]; const b = p[i - 1]; const seg = Math.hypot(a.x - b.x, a.y - b.y);
      if (rem <= seg) { const k = seg < 1e-6 ? 0 : rem / seg; return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k, dx: seg < 1e-6 ? 0 : (a.x - b.x) / seg, dy: seg < 1e-6 ? -1 : (a.y - b.y) / seg }; }
      rem -= seg; i--;
    }
    const a = p[1]; const b = p[0]; const seg = Math.hypot(a.x - b.x, a.y - b.y) || 1;
    return { x: b.x, y: b.y, dx: (a.x - b.x) / seg, dy: (a.y - b.y) / seg };
  }
}

/** n target points (the captain himself is not included). free(x,y) tells whether a point is walkable. */
export function packCrowd(n, trail, cap, free) {
  const out = [];
  const spacing = n > 150 ? 0.42 : n > 40 ? 0.5 : 0.62;
  const maxRow = Math.max(2, Math.min(16, Math.round(Math.sqrt(n) * 1.1)));
  let d = 1.1; let guard = 0;
  while (out.length < n && guard++ < 1200) {
    const t = trail.at(d);
    // free lateral extent either side of the trail point
    const px = -t.dy; const py = t.dx;
    let left = 0; let right = 0;
    for (let s = spacing; s <= spacing * maxRow / 2 + 0.01; s += spacing / 2) { if (free(t.x + px * s, t.y + py * s)) left = s; else break; }
    for (let s = spacing; s <= spacing * maxRow / 2 + 0.01; s += spacing / 2) { if (free(t.x - px * s, t.y - py * s)) right = s; else break; }
    const width = left + right; const k = Math.max(1, Math.min(maxRow, Math.floor(width / spacing) + 1));
    for (let i = 0; i < k && out.length < n; i++) {
      const u = k === 1 ? (left - right) / 2 : -right + (width * i) / (k - 1);
      const jitter = ((out.length * 7919) % 13) / 13 - 0.5; const jx = jitter * 0.12;
      let x = t.x + px * u + t.dx * jx; let y = t.y + py * u + t.dy * jx;
      if (!free(x, y)) { x = t.x; y = t.y; }
      out.push({ x, y });
    }
    d += spacing * 0.9;
  }
  while (out.length < n) out.push({ x: cap.x, y: cap.y });
  return out;
}
