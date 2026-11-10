// Painted parallax backdrops, made once per screen size: a warm sky with the low sun and light rays, misty far
// mountains with waterfalls, a mid layer (jungle canopy / ruined towers / temple pyramids) and near foliage.
// Each layer repeats seamlessly sideways and scrolls at its own speed.

const SKIES = {
  jungle: { top: '#79c2d6', mid: '#cfe3c8', low: '#f7cf98', sun: '#fff1c4', far: '#8fb7ae', farMist: '#d8e8d6', mid1: '#3f7a52', mid2: '#2f6343', near: '#1f4a2e', vine: '#2c5e36' },
  ruins: { top: '#6aa79a', mid: '#c9d9b4', low: '#f3c47f', sun: '#ffe7b0', far: '#86a397', farMist: '#d6e2c8', mid1: '#5f7a5c', mid2: '#46604a', near: '#22432c', vine: '#2f5a34' },
  temple: { top: '#e7895a', mid: '#f7b973', low: '#ffd98a', sun: '#fff4cc', far: '#c58a6a', farMist: '#f6caa0', mid1: '#a26a45', mid2: '#7c4f33', near: '#3b4a26', vine: '#4a5a2a' },
};

function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(w));
  c.height = Math.max(1, Math.round(h));
  return c;
}

/** A smooth, repeating ridge line: sum of sines whose periods divide the layer width. */
function ridge(x, W, seed, amp) {
  const r = rng(seed);
  let y = 0;
  for (let k = 1; k <= 5; k++) {
    const ph = r() * Math.PI * 2;
    const a = amp / (k * 0.9) * (0.6 + r() * 0.5);
    y += Math.sin((x / W) * Math.PI * 2 * (k + (k > 2 ? 1 : 0)) + ph) * a;
  }
  return y;
}

export class Backdrop {
  constructor(theme) {
    this.theme = theme;
    this.c = SKIES[theme] ?? SKIES.jungle;
  }

  /** (Re)paints the layers for a screen of w x h device pixels. */
  build(w, h) {
    this.w = w;
    this.h = h;
    const c = this.c;
    // sky with the low sun, painted at screen size
    const sky = canvas(w, h);
    let g = sky.getContext('2d');
    const grd = g.createLinearGradient(0, 0, 0, h);
    grd.addColorStop(0, c.top);
    grd.addColorStop(0.55, c.mid);
    grd.addColorStop(1, c.low);
    g.fillStyle = grd;
    g.fillRect(0, 0, w, h);
    const sx = w * 0.78;
    const sy = h * 0.42;
    const glow = g.createRadialGradient(sx, sy, 0, sx, sy, Math.max(w, h) * 0.6);
    glow.addColorStop(0, 'rgba(255,240,200,0.95)');
    glow.addColorStop(0.08, 'rgba(255,230,170,0.6)');
    glow.addColorStop(0.4, 'rgba(255,200,140,0.15)');
    glow.addColorStop(1, 'rgba(255,200,140,0)');
    g.fillStyle = glow;
    g.fillRect(0, 0, w, h);
    g.fillStyle = c.sun;
    g.beginPath();
    g.arc(sx, sy, Math.min(w, h) * 0.06, 0, Math.PI * 2);
    g.fill();
    // soft light rays from the sun
    g.save();
    g.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 9; i++) {
      const a = -Math.PI * 0.95 + i * 0.22;
      g.fillStyle = 'rgba(255,235,190,0.06)';
      g.beginPath();
      g.moveTo(sx, sy);
      g.lineTo(sx + Math.cos(a - 0.05) * w * 2, sy + Math.sin(a - 0.05) * w * 2);
      g.lineTo(sx + Math.cos(a + 0.05) * w * 2, sy + Math.sin(a + 0.05) * w * 2);
      g.fill();
    }
    g.restore();
    // a few soft clouds
    const r0 = rng(3);
    for (let i = 0; i < 6; i++) {
      const cx = r0() * w;
      const cy = h * (0.08 + r0() * 0.25);
      g.fillStyle = 'rgba(255,255,255,0.35)';
      for (let k = 0; k < 4; k++) {
        g.beginPath();
        g.ellipse(cx + (k - 1.5) * h * 0.035, cy + (k % 2) * h * 0.01, h * 0.05, h * 0.025, 0, 0, Math.PI * 2);
        g.fill();
      }
    }
    this.sky = sky;

    const LW = Math.max(w * 1.5, h * 1.6);
    this.layers = [
      { img: this._far(LW, h), speed: 0.06 },
      { img: this._mid(LW, h), speed: 0.2 },
      { img: this._near(LW, h), speed: 0.45 },
    ];
  }

  _far(W, h) {
    const c = this.c;
    const cv = canvas(W, h);
    const g = cv.getContext('2d');
    // two ranges of tall, misty mountains
    for (const [base, amp, col, seed, alpha] of [[0.5, 0.12, c.farMist, 11, 0.8], [0.6, 0.14, c.far, 17, 0.9]]) {
      g.beginPath();
      g.moveTo(0, h);
      for (let x = 0; x <= W; x += 6) {
        const peak = Math.abs(ridge(x, W, seed, 1)) ** 1.6;
        g.lineTo(x, h * base - peak * h * amp * 2.2 + ridge(x, W, seed + 1, h * 0.02));
      }
      g.lineTo(W, h);
      g.closePath();
      g.globalAlpha = alpha;
      g.fillStyle = col;
      g.fill();
      g.globalAlpha = 1;
    }
    if (this.theme === 'jungle' || this.theme === 'ruins') {
      // thin waterfalls
      const r = rng(5);
      for (let i = 0; i < 4; i++) {
        const x = r() * W;
        const top = h * (0.3 + r() * 0.15);
        g.fillStyle = 'rgba(255,255,255,0.55)';
        g.fillRect(x, top, Math.max(2, W * 0.003), h * 0.25);
      }
    }
    if (this.theme === 'temple') {
      // a distant stepped pyramid in the haze
      const r = rng(9);
      for (let i = 0; i < 2; i++) {
        const cx = W * (0.25 + i * 0.5) + r() * W * 0.1;
        const base = h * 0.62;
        g.fillStyle = 'rgba(160,100,70,0.55)';
        for (let s = 0; s < 6; s++) {
          const ww = h * (0.34 - s * 0.05);
          g.fillRect(cx - ww / 2, base - (s + 1) * h * 0.035, ww, h * 0.036);
        }
      }
    }
    // mist at the bottom
    const mist = g.createLinearGradient(0, h * 0.45, 0, h * 0.8);
    mist.addColorStop(0, 'rgba(255,245,225,0)');
    mist.addColorStop(1, 'rgba(255,245,225,0.6)');
    g.fillStyle = mist;
    g.fillRect(0, h * 0.45, W, h * 0.55);
    return cv;
  }

  _mid(W, h) {
    const c = this.c;
    const cv = canvas(W, h);
    const g = cv.getContext('2d');
    const r = rng(this.theme.length * 31);
    const ground = h * 0.72;
    if (this.theme === 'jungle') {
      // canopy of round trees and palms
      for (let i = 0; i < 26; i++) {
        const x = (i / 26) * W + r() * 30;
        const th = h * (0.18 + r() * 0.16);
        g.fillStyle = c.mid2;
        g.fillRect(x - 3, ground - th, 6, th);
        g.fillStyle = i % 2 ? c.mid1 : c.mid2;
        for (let k = 0; k < 4; k++) {
          g.beginPath();
          g.arc(x + (r() - 0.5) * h * 0.08, ground - th - r() * h * 0.05, h * (0.05 + r() * 0.04), 0, Math.PI * 2);
          g.fill();
        }
      }
    } else {
      // ruined towers, broken arches and pillars
      for (let i = 0; i < 9; i++) {
        const x = (i / 9) * W + r() * W * 0.05;
        const tw = h * (0.06 + r() * 0.06);
        const th = h * (0.2 + r() * 0.25);
        g.fillStyle = i % 2 ? c.mid1 : c.mid2;
        g.fillRect(x, ground - th, tw, th);
        // broken top
        g.beginPath();
        g.moveTo(x, ground - th);
        g.lineTo(x + tw * 0.3, ground - th - h * 0.03);
        g.lineTo(x + tw * 0.6, ground - th + h * 0.01);
        g.lineTo(x + tw, ground - th - h * 0.02);
        g.lineTo(x + tw, ground - th);
        g.fill();
        if (r() < 0.5) {
          // an arch to the next pillar
          g.fillRect(x + tw, ground - th * 0.75, tw * 1.4, h * 0.03);
          g.fillRect(x + tw * 2.4, ground - th * 0.75, tw * 0.6, th * 0.75);
        }
      }
      // trees between them
      for (let i = 0; i < 14; i++) {
        const x = r() * W;
        g.fillStyle = this.theme === 'temple' ? '#5d6d34' : '#3f6b45';
        g.beginPath();
        g.arc(x, ground - h * (0.1 + r() * 0.08), h * (0.05 + r() * 0.03), 0, Math.PI * 2);
        g.fill();
      }
    }
    g.fillStyle = c.mid2;
    g.fillRect(0, ground, W, h - ground);
    // haze over the mid layer
    g.fillStyle = 'rgba(255,235,200,0.18)';
    g.fillRect(0, 0, W, h);
    return cv;
  }

  _near(W, h) {
    const c = this.c;
    const cv = canvas(W, h);
    const g = cv.getContext('2d');
    const r = rng(this.theme.length * 77);
    // big leaves and ferns low on the screen
    const base = h * 0.82;
    for (let i = 0; i < 40; i++) {
      const x = r() * W;
      const len = h * (0.08 + r() * 0.1);
      const a = -Math.PI / 2 + (r() - 0.5) * 1.6;
      g.fillStyle = i % 3 ? c.near : c.mid2;
      g.beginPath();
      g.ellipse(x + Math.cos(a) * len * 0.5, base + Math.sin(a) * len * 0.5, len * 0.5, len * 0.16, a, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = c.near;
    g.fillRect(0, base, W, h - base);
    // hanging vines from the top
    g.strokeStyle = c.vine;
    g.lineWidth = Math.max(2, h * 0.006);
    for (let i = 0; i < 10; i++) {
      const x = r() * W;
      const len = h * (0.08 + r() * 0.18);
      g.beginPath();
      g.moveTo(x, 0);
      g.quadraticCurveTo(x + h * 0.03, len * 0.5, x, len);
      g.stroke();
      g.fillStyle = c.vine;
      for (let k = 0; k < 4; k++) {
        g.beginPath();
        g.ellipse(x + (k % 2 ? 6 : -6), (len * (k + 1)) / 5, h * 0.012, h * 0.006, k % 2 ? 0.5 : -0.5, 0, Math.PI * 2);
        g.fill();
      }
    }
    return cv;
  }

  /** Draws the backdrop for a camera at world-x `camX` (in device pixels of scroll). */
  draw(ctx, scrollPx) {
    ctx.drawImage(this.sky, 0, 0);
    for (const l of this.layers) {
      const W = l.img.width;
      let off = -((scrollPx * l.speed) % W);
      if (off > 0) off -= W;
      for (let x = off; x < this.w; x += W) ctx.drawImage(l.img, Math.floor(x), 0);
    }
  }
}
