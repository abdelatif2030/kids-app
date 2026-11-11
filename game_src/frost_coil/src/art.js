// Everything drawn for «طريق التنين الجليدي» with the 2D canvas, painted in code like the owner's video: a snowy
// night forest (violet sky, snowy hills, pine trees with snow, two cabins with warm windows, falling snow), the wooden
// board with snow lumps on its corners, wooden plank tiles with snow caps, light-blue ice tubes (they glow brighter
// where the ice already reaches from the dragon), the gold star, the portal (a wooden arch with a snowy roof, two
// lanterns and a turning white-blue swirl) and the little coiled ice dragon on a snow cloud.
import { N, E, S, W } from './sim.js';

const rr = (g, x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

function pine(g, x, y, h) {
  const w = h * 0.5;
  for (let k = 0; k < 4; k++) {
    const yy = y - h * (0.2 + k * 0.22);
    const ww = w * (1 - k * 0.2);
    g.fillStyle = k % 2 ? '#2c3e6a' : '#34487a';
    g.beginPath(); g.moveTo(x, yy - h * 0.3); g.lineTo(x + ww / 2, yy + h * 0.05); g.lineTo(x - ww / 2, yy + h * 0.05); g.closePath(); g.fill();
    // snow on each tier
    g.fillStyle = '#f2f0fa';
    g.beginPath(); g.moveTo(x, yy - h * 0.3); g.lineTo(x + ww * 0.3, yy - h * 0.1); g.quadraticCurveTo(x, yy - h * 0.06, x - ww * 0.3, yy - h * 0.1); g.closePath(); g.fill();
  }
  g.fillStyle = '#4a3a3a';
  g.fillRect(x - w * 0.06, y - h * 0.08, w * 0.12, h * 0.1);
}

function cabin(g, x, y, s) {
  g.fillStyle = '#7a4a3a'; g.fillRect(x - s, y - s * 0.9, s * 2, s * 0.9);
  g.fillStyle = '#5a3428';
  for (let i = 1; i < 5; i++) g.fillRect(x - s, y - s * 0.9 + i * s * 0.18, s * 2, s * 0.03);
  // a snowy roof
  g.fillStyle = '#f4f2fc'; g.beginPath(); g.moveTo(x - s * 1.3, y - s * 0.85); g.lineTo(x, y - s * 1.75); g.lineTo(x + s * 1.3, y - s * 0.85); g.quadraticCurveTo(x, y - s * 0.7, x - s * 1.3, y - s * 0.85); g.fill();
  // warm windows
  for (const wx of [-0.55, 0.25]) {
    const gl = g.createRadialGradient(x + wx * s + s * 0.15, y - s * 0.45, 0, x + wx * s + s * 0.15, y - s * 0.45, s * 0.6);
    gl.addColorStop(0, 'rgba(255,200,110,0.55)'); gl.addColorStop(1, 'rgba(255,200,110,0)');
    g.fillStyle = gl; g.fillRect(x + wx * s - s * 0.5, y - s, s * 1.3, s);
    g.fillStyle = '#ffcf6a'; g.fillRect(x + wx * s, y - s * 0.62, s * 0.3, s * 0.3);
    g.fillStyle = '#5a3428'; g.fillRect(x + wx * s + s * 0.135, y - s * 0.62, s * 0.03, s * 0.3);
  }
}

/** The background, painted once per screen size. */
export function paintBackground(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  const sky = g.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, '#3a3a78'); sky.addColorStop(0.35, '#7a74b8'); sky.addColorStop(0.6, '#b8acd8'); sky.addColorStop(1, '#e8e2f4');
  g.fillStyle = sky; g.fillRect(0, 0, w, h);
  const r = rng(7);
  // far snowy hills
  for (const [base, col] of [[0.3, '#a49ccc'], [0.38, '#c4bce0'], [0.5, '#dcd6ee']]) {
    g.fillStyle = col; g.beginPath(); g.moveTo(0, h);
    for (let x = 0; x <= w; x += 8) g.lineTo(x, h * base + Math.sin(x * 0.012 + base * 20) * h * 0.03 + Math.sin(x * 0.03) * h * 0.01);
    g.lineTo(w, h); g.fill();
  }
  // cabins on the hill (top right, like the video) and one on the left
  cabin(g, w * 0.82, h * 0.27, w * 0.08);
  cabin(g, w * 0.14, h * 0.2, w * 0.05);
  // pine trees around the edges, darker and bigger near the bottom
  for (let i = 0; i < 26; i++) {
    const side = i % 2 ? 1 : -1;
    const x = side > 0 ? w * (0.86 + r() * 0.2) : w * (-0.06 + r() * 0.2);
    const y = h * (0.25 + r() * 0.75);
    pine(g, x, y, h * (0.08 + (y / h) * 0.1));
  }
  // soft snow mounds at the bottom
  g.fillStyle = '#efeaf8';
  for (let i = 0; i < 8; i++) { g.beginPath(); g.ellipse(r() * w, h * (0.86 + r() * 0.12), w * (0.2 + r() * 0.2), h * 0.05, 0, 0, Math.PI * 2); g.fill(); }
  // a gentle vignette
  const v = g.createRadialGradient(w / 2, h * 0.45, Math.min(w, h) * 0.3, w / 2, h * 0.45, Math.max(w, h) * 0.75);
  v.addColorStop(0, 'rgba(40,30,90,0)'); v.addColorStop(1, 'rgba(40,30,90,0.35)');
  g.fillStyle = v; g.fillRect(0, 0, w, h);
  return c;
}

/** The wooden board under the tiles, with snow lumps on its corners. */
export function drawBoard(g, x, y, w, h, s) {
  g.fillStyle = 'rgba(40,30,70,0.25)'; rr(g, x - s * 0.18, y - s * 0.1, w + s * 0.36, h + s * 0.36, s * 0.2); g.fill();
  g.fillStyle = '#6a3e22'; rr(g, x - s * 0.22, y - s * 0.22, w + s * 0.44, h + s * 0.44, s * 0.18); g.fill();
  g.fillStyle = '#8a5530'; rr(g, x - s * 0.16, y - s * 0.16, w + s * 0.32, h + s * 0.32, s * 0.14); g.fill();
  for (const [cx, cy] of [[x - s * 0.15, y - s * 0.15], [x + w + s * 0.15, y - s * 0.15], [x - s * 0.15, y + h + s * 0.15], [x + w + s * 0.15, y + h + s * 0.15]]) snowLump(g, cx, cy, s * 0.32);
}

function snowLump(g, x, y, s) {
  g.fillStyle = '#ffffff';
  for (const [dx, dy, r] of [[-0.4, 0.1, 0.5], [0.3, 0.15, 0.45], [0, -0.25, 0.55], [0.6, -0.1, 0.35], [-0.7, -0.1, 0.35]]) { g.beginPath(); g.arc(x + dx * s, y + dy * s, r * s, 0, Math.PI * 2); g.fill(); }
  g.fillStyle = 'rgba(150,160,220,0.35)';
  g.beginPath(); g.ellipse(x, y + s * 0.45, s * 0.9, s * 0.15, 0, 0, Math.PI * 2); g.fill();
}

/** One tile: wooden planks, a snow cap, the ice tube for its openings (mask), turned by `ang` while it animates. */
export function drawTile(g, cx, cy, s, t, ang, lit, time) {
  g.save();
  g.translate(cx, cy);
  const h = s / 2 - s * 0.03;
  g.fillStyle = t.locked ? '#b8c8e0' : '#c98b4c';
  rr(g, -h, -h, h * 2, h * 2, s * 0.08); g.fill();
  if (!t.locked) {
    g.fillStyle = '#b8783e';
    for (let i = 1; i < 3; i++) g.fillRect(-h, -h + (i * h * 2) / 3 - s * 0.012, h * 2, s * 0.024);
    g.fillStyle = 'rgba(255,230,180,0.25)';
    g.fillRect(-h + s * 0.05, -h + s * 0.06, h * 2 - s * 0.1, s * 0.04);
  } else {
    // a frozen tile: icy, with a little crack pattern
    g.strokeStyle = 'rgba(255,255,255,0.7)'; g.lineWidth = s * 0.015;
    g.beginPath(); g.moveTo(-h * 0.6, -h * 0.2); g.lineTo(-h * 0.1, h * 0.1); g.lineTo(h * 0.4, -h * 0.3); g.stroke();
  }
  // a snow cap along the top edge
  g.fillStyle = '#ffffff';
  g.beginPath(); g.moveTo(-h, -h + s * 0.06);
  for (let i = 0; i <= 6; i++) g.quadraticCurveTo(-h + (i - 0.5) * (h / 3), -h - s * 0.05, -h + i * (h / 3), -h + s * 0.04 + (i % 2) * s * 0.02);
  g.lineTo(h, -h + s * 0.02); g.lineTo(-h, -h + s * 0.02); g.fill();
  g.rotate(ang);
  drawIce(g, s, t.mask, lit, time);
  g.restore();
}

/** The ice tube: straight, curve or cross (drawn in the tile's own turned frame). */
function drawIce(g, s, mask, lit, time) {
  const h = s / 2;
  const tw = s * 0.26;
  const edge = lit ? '#5ac8f0' : '#7aa8d0';
  const body = lit ? '#c8f4ff' : '#bfe0f4';
  const hi = 'rgba(255,255,255,0.85)';
  const paths = [];
  const opens = [N, E, S, W].filter((d) => mask & d);
  const pt = (d) => (d === N ? [0, -h] : d === S ? [0, h] : d === E ? [h, 0] : [-h, 0]);
  if (mask === 15) { paths.push([[0, -h], [0, h], false]); paths.push([[-h, 0], [h, 0], false]); } else if (opens.length === 2) {
    const [a, b] = opens;
    const pa = pt(a);
    const pb = pt(b);
    const straight = (a | b) === (N | S) || (a | b) === (E | W);
    paths.push([pa, pb, !straight]);
  }
  for (const [lw, col] of [[tw + s * 0.06, edge], [tw, body], [tw * 0.28, hi]]) {
    g.strokeStyle = col;
    g.lineWidth = lw;
    g.lineCap = 'butt';
    for (const [pa, pb, curve] of paths) {
      g.beginPath();
      if (curve) {
        // a quarter circle around the corner between the two openings
        const cx = pa[0] + pb[0];
        const cy = pa[1] + pb[1];
        const a0 = Math.atan2(pa[1] - cy, pa[0] - cx);
        const a1 = Math.atan2(pb[1] - cy, pb[0] - cx);
        let d = a1 - a0;
        if (d > Math.PI) d -= Math.PI * 2;
        if (d < -Math.PI) d += Math.PI * 2;
        g.arc(cx, cy, h, a0, a0 + d, d < 0);
        if (col === hi) { g.setLineDash([s * 0.1, s * 0.12]); g.lineDashOffset = -time * s * 0.3; }
      } else {
        g.moveTo(pa[0], pa[1]);
        g.lineTo(pb[0], pb[1]);
        if (col === hi) { g.setLineDash([s * 0.1, s * 0.12]); g.lineDashOffset = -time * s * 0.3; }
      }
      g.stroke();
      g.setLineDash([]);
    }
  }
  if (lit) {
    g.save();
    g.globalCompositeOperation = 'lighter';
    g.strokeStyle = 'rgba(120,220,255,0.25)';
    g.lineWidth = tw * 1.8;
    for (const [pa, pb, curve] of paths) {
      g.beginPath();
      if (curve) { const cx = pa[0] + pb[0]; const cy = pa[1] + pb[1]; const a0 = Math.atan2(pa[1] - cy, pa[0] - cx); const a1 = Math.atan2(pb[1] - cy, pb[0] - cx); let d = a1 - a0; if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; g.arc(cx, cy, h, a0, a0 + d, d < 0); } else { g.moveTo(pa[0], pa[1]); g.lineTo(pb[0], pb[1]); }
      g.stroke();
    }
    g.restore();
  }
}

export function drawStar(g, x, y, r, time) {
  g.save();
  g.translate(x, y);
  g.rotate(Math.sin(time * 2) * 0.12);
  const gl = g.createRadialGradient(0, 0, 0, 0, 0, r * 1.8);
  gl.addColorStop(0, 'rgba(255,220,90,0.55)'); gl.addColorStop(1, 'rgba(255,220,90,0)');
  g.fillStyle = gl; g.beginPath(); g.arc(0, 0, r * 1.8, 0, Math.PI * 2); g.fill();
  g.beginPath();
  for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5; const rr2 = i % 2 ? r * 0.45 : r; g.lineTo(Math.cos(a) * rr2, Math.sin(a) * rr2); }
  g.closePath();
  g.fillStyle = '#ffc83a'; g.fill();
  g.lineWidth = r * 0.15; g.strokeStyle = '#d88a10'; g.stroke();
  g.fillStyle = 'rgba(255,255,255,0.6)'; g.beginPath(); g.arc(-r * 0.2, -r * 0.25, r * 0.15, 0, Math.PI * 2); g.fill();
  g.restore();
}

/** The portal: a wooden arch with a snowy roof and two lanterns; inside, a turning swirl. `burst` 0..1 after winning. */
export function drawPortal(g, x, y, s, time, burst = 0) {
  g.save();
  g.translate(x, y);
  const R = s * 0.62;
  // lantern glow
  for (const sx of [-1, 1]) {
    const gl = g.createRadialGradient(sx * R * 1.15, 0, 0, sx * R * 1.15, 0, R * 0.7);
    gl.addColorStop(0, 'rgba(255,200,110,0.6)'); gl.addColorStop(1, 'rgba(255,200,110,0)');
    g.fillStyle = gl; g.beginPath(); g.arc(sx * R * 1.15, 0, R * 0.7, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#5a3420'; g.fillRect(sx * R * 1.15 - R * 0.1, -R * 0.15, R * 0.2, R * 0.3);
    g.fillStyle = '#ffd27a'; g.fillRect(sx * R * 1.15 - R * 0.07, -R * 0.1, R * 0.14, R * 0.2);
  }
  // the wooden frame
  g.fillStyle = '#7a4626'; rr(g, -R * 1.25, -R * 1.25, R * 2.5, R * 2.5, R * 0.6); g.fill();
  g.fillStyle = '#9a5c32'; rr(g, -R * 1.1, -R * 1.1, R * 2.2, R * 2.2, R * 0.5); g.fill();
  // the swirl
  g.save();
  g.beginPath(); g.arc(0, 0, R * (1 + burst * 0.3), 0, Math.PI * 2); g.clip();
  const bg = g.createRadialGradient(0, 0, 0, 0, 0, R);
  bg.addColorStop(0, '#ffffff'); bg.addColorStop(0.6, '#cdeeff'); bg.addColorStop(1, '#7ab8e8');
  g.fillStyle = bg; g.fillRect(-R * 1.4, -R * 1.4, R * 2.8, R * 2.8);
  g.rotate(time * (1.6 + burst * 6));
  g.strokeStyle = 'rgba(255,255,255,0.9)';
  g.lineWidth = R * 0.12;
  for (let arm = 0; arm < 3; arm++) {
    g.beginPath();
    for (let i = 0; i < 40; i++) { const a = arm * (Math.PI * 2 / 3) + i * 0.12; const r2 = (i / 40) * R; i === 0 ? g.moveTo(Math.cos(a) * r2, Math.sin(a) * r2) : g.lineTo(Math.cos(a) * r2, Math.sin(a) * r2); }
    g.stroke();
  }
  g.restore();
  g.strokeStyle = '#5a3420'; g.lineWidth = R * 0.12; g.beginPath(); g.arc(0, 0, R, 0, Math.PI * 2); g.stroke();
  // a snowy roof on top
  g.fillStyle = '#ffffff';
  g.beginPath(); g.ellipse(0, -R * 1.2, R * 1.45, R * 0.38, 0, Math.PI, 0); g.fill();
  for (const dx of [-1.1, -0.4, 0.4, 1.1]) { g.beginPath(); g.arc(dx * R, -R * 1.15, R * 0.22, 0, Math.PI * 2); g.fill(); }
  if (burst > 0) {
    g.globalCompositeOperation = 'lighter';
    g.fillStyle = `rgba(200,240,255,${0.6 * (1 - burst)})`;
    g.beginPath(); g.arc(0, 0, R * (1.2 + burst * 2), 0, Math.PI * 2); g.fill();
  }
  g.restore();
}

/** The little ice dragon coiled on a snow cloud (or stretched along points when it travels). */
export function drawDragon(g, x, y, s, time, trail = null) {
  if (trail && trail.length > 1) {
    // travelling: a body of circles along the trail, the head first
    for (let i = trail.length - 1; i >= 0; i--) {
      const [px, py] = trail[i];
      const k = 1 - i / trail.length;
      g.fillStyle = i % 2 ? '#7ac8f0' : '#a8e0ff';
      g.beginPath(); g.arc(px, py, s * (0.1 + k * 0.08), 0, Math.PI * 2); g.fill();
    }
    const [hx, hy] = trail[0];
    head(g, hx, hy, s * 0.55, time);
    return;
  }
  // the snow cloud
  g.fillStyle = '#f4f8ff';
  for (const [dx, dy, r] of [[-0.35, 0.3, 0.32], [0.05, 0.38, 0.36], [0.4, 0.3, 0.3], [-0.1, 0.18, 0.3]]) { g.beginPath(); g.arc(x + dx * s, y + dy * s, r * s, 0, Math.PI * 2); g.fill(); }
  g.fillStyle = 'rgba(150,170,230,0.4)'; g.beginPath(); g.ellipse(x, y + s * 0.58, s * 0.62, s * 0.1, 0, 0, Math.PI * 2); g.fill();
  // the coiled body: two rings of scales, a curling tail
  const bob = Math.sin(time * 2.2) * s * 0.03;
  g.lineCap = 'round';
  g.strokeStyle = '#5aa8e0'; g.lineWidth = s * 0.2;
  g.beginPath(); g.arc(x, y + s * 0.05 + bob, s * 0.28, 0.2, Math.PI * 2.1); g.stroke();
  g.strokeStyle = '#9ad8ff'; g.lineWidth = s * 0.14;
  g.beginPath(); g.arc(x, y + s * 0.05 + bob, s * 0.28, 0.2, Math.PI * 2.1); g.stroke();
  g.strokeStyle = '#d8f4ff'; g.lineWidth = s * 0.04;
  g.beginPath(); g.arc(x, y + s * 0.05 + bob, s * 0.31, 0.6, Math.PI * 1.6); g.stroke();
  // belly plates
  g.fillStyle = '#f2e6b8';
  for (let i = 0; i < 6; i++) { const a = 0.9 + i * 0.35; g.beginPath(); g.arc(x + Math.cos(a) * s * 0.19, y + s * 0.05 + bob + Math.sin(a) * s * 0.19, s * 0.04, 0, Math.PI * 2); g.fill(); }
  // tail curl with an ice tuft
  g.strokeStyle = '#7ac0ec'; g.lineWidth = s * 0.08;
  g.beginPath(); g.moveTo(x + s * 0.28, y + s * 0.15 + bob); g.quadraticCurveTo(x + s * 0.55, y + s * 0.2, x + s * 0.48, y - s * 0.05 + Math.sin(time * 3) * s * 0.04); g.stroke();
  g.fillStyle = '#e8f8ff'; g.beginPath(); g.arc(x + s * 0.48, y - s * 0.06, s * 0.06, 0, Math.PI * 2); g.fill();
  head(g, x - s * 0.08, y - s * 0.32 + bob, s * 0.55, time);
}

function head(g, x, y, s, time) {
  // horns and spikes
  g.fillStyle = '#e8f6ff';
  for (const sx of [-1, 1]) { g.beginPath(); g.moveTo(x + sx * s * 0.18, y - s * 0.22); g.lineTo(x + sx * s * 0.34, y - s * 0.58); g.lineTo(x + sx * s * 0.06, y - s * 0.28); g.fill(); }
  g.fillStyle = '#6ab8e8';
  g.beginPath(); g.ellipse(x, y, s * 0.36, s * 0.3, 0, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#9ad8ff';
  g.beginPath(); g.ellipse(x - s * 0.05, y + s * 0.08, s * 0.26, s * 0.18, 0, 0, Math.PI * 2); g.fill();
  // big friendly eyes that blink
  const blink = (time % 3.2) < 0.12;
  for (const sx of [-1, 1]) {
    g.fillStyle = '#ffffff'; g.beginPath(); g.ellipse(x + sx * s * 0.14, y - s * 0.06, s * 0.1, blink ? s * 0.015 : s * 0.12, 0, 0, Math.PI * 2); g.fill();
    if (!blink) { g.fillStyle = '#2a2a5a'; g.beginPath(); g.arc(x + sx * s * 0.15, y - s * 0.04, s * 0.06, 0, Math.PI * 2); g.fill(); g.fillStyle = '#ffffff'; g.beginPath(); g.arc(x + sx * s * 0.17, y - s * 0.07, s * 0.02, 0, Math.PI * 2); g.fill(); }
  }
  // a little smile and nostrils
  g.strokeStyle = '#2a4a8a'; g.lineWidth = s * 0.025;
  g.beginPath(); g.arc(x, y + s * 0.1, s * 0.08, 0.2, Math.PI - 0.2); g.stroke();
  g.fillStyle = '#ffb8d8';
  for (const sx of [-1, 1]) { g.beginPath(); g.arc(x + sx * s * 0.24, y + s * 0.06, s * 0.04, 0, Math.PI * 2); g.fill(); }
}
