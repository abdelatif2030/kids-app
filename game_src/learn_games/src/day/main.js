// «رتّب يومي» — Arrange My Day (rebuilt learning game, docs/LEARNING_GAMES_REBUILD.md #4).
// A cosy room with a big window. Picture cards of the day wait on the shelf below; the child taps them in the order
// they happen and each one flies up to its wooden peg on the clothesline across the window. The sky in the window
// follows the day — pink dawn, blue morning, golden afternoon, orange sunset, starry night — and the room's lamp comes
// on in the evening. Each card's words are said by the app's voice. A wrong card only wiggles. Five rounds.
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { DayPlay, stepById } from './sim.js';

const TEXT = {
  title: ['رتّب يومي', 'Arrange My Day'],
  intro: ['رتّب يومك! إيه اللي بيحصل الأول؟', 'Arrange your day! What happens first?'],
  first: ['إيه أول حاجة؟', 'What comes first?'],
  next: ['وبعدين؟', 'And then?'],
  notYet: ['لسه بدري عليها!', 'Not yet!'],
  dayDone_m: ['يوم جميل! رتّبته صح', 'A lovely day, in the right order!'],
  dayDone_f: ['يوم جميل! رتّبتيه صح', 'A lovely day, in the right order!'],
};

const THEME_DAY = {
  ...THEME_GARDEN,
  tempo: 96,
  lead: 'bell',
  shaker: false,
  chords: [[48, [64, 67, 72]], [53, [65, 69, 72]], [55, [62, 67, 71]], [48, [64, 67, 72]], [45, [64, 69, 72]], [53, [65, 69, 72]], [55, [62, 65, 71]], [48, [64, 67, 72]]],
  melody: [[0, 0, 76], [0, 4, 79], [1, 0, 81], [1, 4, 77], [2, 0, 79], [2, 4, 74], [3, 0, 76], [4, 0, 72], [4, 4, 76], [5, 0, 77], [5, 4, 81], [6, 0, 79], [6, 4, 83], [7, 0, 84]],
};

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_DAY });
    const sh = this.sh;
    this.en = sh.T.lang === 'en';
    this.cv = h('canvas');
    sh.root.prepend(this.cv);
    this.g = this.cv.getContext('2d');
    this.hung = h('div', { class: 'ldy-hung' });
    this.tray = h('div', { class: 'ldy-tray' });
    this.sky = 0.05;
    this.skyWant = 0.05;
    sh.onResize = () => this._resize();
    this._resize();
    this.t0 = performance.now();
    this.stars = Array.from({ length: 40 }, () => [Math.random(), Math.random() * 0.8, Math.random() * 6]);
    sh.fonts().then(() => sh.titleCard(sh.t('title'), '🌅🥣🎒🛁😴', () => this._start()));
    this._loop();
  }

  _resize() {
    const sh = this.sh;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(sh.w * dpr);
    this.cv.height = Math.round(sh.h * dpr);
    this.dpr = dpr;
    // the window takes the upper part; the shelf with the cards the lower part
    const W = sh.w, H = sh.h;
    const ww = Math.min(W * 0.84, H * 1.35);
    this.win = { x: (W - ww) / 2, y: H * 0.15, w: ww, h: H * 0.42 };
    if (this.play) this._placeHung();
  }

  // ---- flow ---------------------------------------------------------------------------------------------------------

  _start() {
    this.play = new DayPlay(this.sh.age, Math.floor(Math.random() * 1e9));
    this.sh.clear();
    this.lightDots = this.sh.topBar(5, '☀️');
    this.lightDots(0);
    this.sh.layer.append(this.hung, this.tray);
    this.sh.sound.setMode('play');
    this.sh.say(this.sh.t('intro'), true, 3);
    this._round();
  }

  _round() {
    const r = this.play.current;
    this.hung.replaceChildren();
    this.tray.replaceChildren();
    this.slots = r.order.length;
    this.skyWant = Math.max(0, stepById(r.order[0]).t - 0.04);
    this.cards = new Map();
    r.shuffled.forEach((id, i) => {
      const s = stepById(id);
      const c = h('button', { class: 'ldy-card', 'aria-label': this.en ? s.en : s.ar, style: `--d:${i * 70}ms`, onclick: (e) => { e.stopPropagation(); this._tap(id, c); } },
        h('span', { class: 'ldy-pic' }, s.emoji), h('span', { class: 'ldy-txt' }, this.en ? s.en : s.ar));
      this.tray.append(c);
      this.cards.set(id, c);
    });
    // empty pegs to fill
    this.pegs = Array.from({ length: this.slots }, (_, i) => {
      const p = h('div', { class: 'ldy-slot' }, h('i', { class: 'ldy-peg' }), h('b', {}, this.sh.T.num(i + 1)));
      this.hung.append(p);
      return p;
    });
    this._placeHung();
    this.idle = 0;
  }

  /** The pegs sit on the clothesline across the window (right to left in Arabic). */
  _placeHung() {
    if (!this.pegs) return;
    const { x, y, w } = this.win;
    const n = this.slots;
    const cw = Math.min(w / (n + 0.6), this.win.h * 0.62);
    this.pegs.forEach((p, i) => {
      const k = (i + 0.5) / n;
      const px = this.en ? x + w * (0.06 + 0.88 * k) : x + w * (0.94 - 0.88 * k);
      const sag = Math.sin(k * Math.PI) * this.win.h * 0.06;
      p.style.cssText = `left:${px - cw / 2}px;top:${y + this.win.h * 0.12 + sag}px;width:${cw}px;height:${cw * 1.15}px`;
    });
  }

  _tap(id, card) {
    if (this.busy || card.classList.contains('used')) return;
    const ev = this.play.tap(id);
    if (!ev) return;
    if (!ev.ok) {
      card.classList.remove('no');
      void card.offsetWidth;
      card.classList.add('no');
      this.sh.sound.play('bump');
      this.sh.say(this.sh.t('notYet'), false, 1.4);
      const hint = this.play.hint;
      if (hint) this.cards.get(hint).classList.add('hint');
      return;
    }
    const s = stepById(id);
    for (const c of this.cards.values()) c.classList.remove('hint');
    // fly the card from the shelf to its peg
    const from = card.getBoundingClientRect();
    const slot = this.pegs[ev.slot];
    const to = slot.getBoundingClientRect();
    const root = this.sh.root.getBoundingClientRect();
    const fly = card.cloneNode(true);
    fly.className = 'ldy-card ldy-fly';
    fly.style.cssText = `left:${from.left - root.left}px;top:${from.top - root.top}px;width:${from.width}px;height:${from.height}px`;
    this.sh.layer.append(fly);
    card.classList.add('used');
    this.busy = true;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fly.style.cssText = `left:${to.left - root.left}px;top:${to.top - root.top}px;width:${to.width}px;height:${to.height}px`;
    }));
    this.sh.sound.play('whoosh');
    setTimeout(() => {
      fly.remove();
      const hungCard = h('div', { class: 'ldy-card ldy-on' }, h('span', { class: 'ldy-pic' }, s.emoji), h('span', { class: 'ldy-txt' }, this.en ? s.en : s.ar));
      slot.append(hungCard);
      slot.classList.add('full');
      this.sh.sound.play('drop');
      this.sh.sound.play('right');
      this.sh.speak(this.en ? s.en : s.ar, 1.6);
      this.skyWant = s.t;
      this.busy = false;
      if (ev.roundDone) this._roundDone(ev);
    }, 520);
  }

  _roundDone(ev) {
    this.busy = true;
    this.sh.round('sequence', ev.first, this.play.rounds[this.play.round - 1].order.join(','));
    this.lightDots(this.play.round);
    setTimeout(() => {
      this.sh.sound.play('roundWin');
      this.sh.sound.play('cheer');
      for (const p of this.pegs) p.classList.add('dance');
      this.sh.say(this.sh.t('dayDone'), true, 2.2);
    }, 700);
    setTimeout(() => {
      this.busy = false;
      if (ev.finished) {
        this.sh.sound.setMode('calm');
        this.sh.finishCard(this.sh.t('title'), '🌙', () => this._start());
        return;
      }
      this._round();
      this.sh.say(this.sh.t('first'), false, 1.6);
    }, 3200);
  }

  // ---- drawing ------------------------------------------------------------------------------------------------------

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const time = (performance.now() - this.t0) / 1000;
    this.sky += (this.skyWant - this.sky) * 0.04;
    const g = this.g;
    const { w: W, h: H } = this.sh;
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const t = this.sky;
    const night = smooth(0.7, 0.95, t);
    // the room: warm wallpaper with little hearts, darker at night (the lamp keeps it cosy)
    g.fillStyle = mix('#fff1d6', '#c8b8e8', night * 0.6);
    g.fillRect(0, 0, W, H);
    g.fillStyle = mix('rgba(255,190,150,.35)', 'rgba(150,130,220,.3)', night);
    const u = Math.min(W, H) / 100;
    for (let y = 0; y < H; y += u * 9) for (let x = (y / (u * 9)) % 2 ? u * 4.5 : 0; x < W; x += u * 9) { g.beginPath(); g.arc(x, y, u * 0.8, 0, Math.PI * 2); g.fill(); }
    // the window: sky by time of day
    const { x, y, w, h: wh } = this.win;
    const sk = skyColors(t);
    const gr = g.createLinearGradient(0, y, 0, y + wh);
    gr.addColorStop(0, sk[0]);
    gr.addColorStop(1, sk[1]);
    g.save();
    roundRect(g, x, y, w, wh, u * 3);
    g.clip();
    g.fillStyle = gr;
    g.fillRect(x, y, w, wh);
    // stars at night
    if (night > 0.05) {
      g.fillStyle = `rgba(255,255,230,${night})`;
      for (const [sx, sy, ph] of this.stars) { const r = u * (0.25 + 0.2 * Math.sin(time * 2 + ph)); g.beginPath(); g.arc(x + sx * w, y + sy * wh, r, 0, Math.PI * 2); g.fill(); }
    }
    // the sun by day, the moon at night, along an arc
    const a = Math.PI * (1 - Math.min(1, t / 0.82));
    const cx = x + w / 2 + Math.cos(a) * w * 0.42 * (this.en ? 1 : -1);
    const cy = y + wh * 0.85 - Math.sin(a) * wh * 0.62;
    if (night < 0.95) {
      g.fillStyle = `rgba(255,214,90,${1 - night})`;
      g.shadowColor = 'rgba(255,200,80,.9)';
      g.shadowBlur = u * 6;
      g.beginPath(); g.arc(cx, cy, u * 4.2, 0, Math.PI * 2); g.fill();
      g.shadowBlur = 0;
    }
    if (night > 0.05) {
      const mx = x + w * (this.en ? 0.8 : 0.2), my = y + wh * 0.28;
      g.fillStyle = `rgba(255,250,220,${night})`;
      g.beginPath(); g.arc(mx, my, u * 3.6, 0, Math.PI * 2); g.fill();
      g.fillStyle = mix(sk[0], sk[0], 0);
      g.beginPath(); g.arc(mx + u * 1.6, my - u * 1, u * 3.2, 0, Math.PI * 2); g.fill();
    }
    // drifting clouds by day; far hills and a little house
    g.fillStyle = `rgba(255,255,255,${0.85 * (1 - night)})`;
    for (let i = 0; i < 3; i++) {
      const cxx = x + ((time * 0.012 * (i + 1) + i * 0.37) % 1.2 - 0.1) * w;
      const cyy = y + wh * (0.2 + i * 0.12);
      for (const [dx, dy, r] of [[0, 0, 3], [3, -1, 3.6], [6, 0, 2.8]]) { g.beginPath(); g.arc(cxx + dx * u, cyy + dy * u, r * u, 0, Math.PI * 2); g.fill(); }
    }
    g.fillStyle = mix('#7ad06a', '#2a4a5a', night);
    g.beginPath();
    g.moveTo(x, y + wh);
    for (let i = 0; i <= 20; i++) g.lineTo(x + (i / 20) * w, y + wh * (0.8 - 0.08 * Math.sin(i * 0.9)));
    g.lineTo(x + w, y + wh);
    g.fill();
    g.restore();
    // wooden frame and cross bars
    g.strokeStyle = '#c8864a';
    g.lineWidth = u * 2.2;
    roundRect(g, x, y, w, wh, u * 3);
    g.stroke();
    g.lineWidth = u * 1;
    g.beginPath(); g.moveTo(x + w / 2, y); g.lineTo(x + w / 2, y + wh); g.stroke();
    // curtains
    for (const side of [0, 1]) {
      const cx0 = side ? x + w : x;
      g.fillStyle = '#ff8ab0';
      g.beginPath();
      g.moveTo(cx0 - (side ? 0 : u * 6), y - u * 2);
      g.lineTo(cx0 + (side ? u * 6 : 0), y - u * 2);
      g.quadraticCurveTo(cx0 + (side ? -u * 3 : u * 3), y + wh * 0.5, cx0 + (side ? u * 4 : -u * 4), y + wh + u * 2);
      g.lineTo(cx0 + (side ? u * 7 : -u * 7), y + wh + u * 2);
      g.quadraticCurveTo(cx0 + (side ? u * 3 : -u * 3), y + wh * 0.5, cx0 + (side ? u * 6 : -u * 6), y - u * 2);
      g.fill();
    }
    g.fillStyle = '#a86a3a';
    g.fillRect(x - u * 8, y - u * 3, w + u * 16, u * 1.4); // the rod
    // the clothesline
    g.strokeStyle = '#f4f0e8';
    g.lineWidth = u * 0.6;
    g.beginPath();
    g.moveTo(x + u * 1, y + wh * 0.12);
    g.quadraticCurveTo(x + w / 2, y + wh * 0.26, x + w - u * 1, y + wh * 0.12);
    g.stroke();
    // the shelf the cards wait on
    const sy = H * 0.66;
    g.fillStyle = '#d89a5a';
    g.fillRect(0, sy + (H - sy) * 0.78, W, u * 2);
    g.fillStyle = 'rgba(0,0,0,.08)';
    g.fillRect(0, sy + (H - sy) * 0.78 + u * 2, W, u * 1.2);
    // a little lamp glows in the evening
    if (night > 0.1) {
      const lx = this.en ? W * 0.06 : W * 0.94, ly = H * 0.58;
      const rg = g.createRadialGradient(lx, ly, 0, lx, ly, u * 22);
      rg.addColorStop(0, `rgba(255,220,140,${0.55 * night})`);
      rg.addColorStop(1, 'rgba(255,220,140,0)');
      g.fillStyle = rg;
      g.fillRect(lx - u * 22, ly - u * 22, u * 44, u * 44);
      g.fillStyle = '#ffd88a';
      g.beginPath(); g.moveTo(lx - u * 4, ly); g.lineTo(lx + u * 4, ly); g.lineTo(lx + u * 2.4, ly - u * 5); g.lineTo(lx - u * 2.4, ly - u * 5); g.fill();
    }
  }

  pause() { this.sh.pause(); }

  dispose() {
    cancelAnimationFrame(this._raf);
    this.sh.dispose();
  }
}

function smooth(a, b, x) { const k = Math.max(0, Math.min(1, (x - a) / (b - a))); return k * k * (3 - 2 * k); }

/** Sky top and bottom colours along the day. */
function skyColors(t) {
  const keys = [[0, '#ffb8c8', '#ffe2b8'], [0.15, '#8ad0ff', '#d8f2ff'], [0.5, '#6ac0ff', '#c8ecff'], [0.68, '#ffa86a', '#ffd88a'], [0.8, '#8a6ad8', '#ff9a8a'], [0.92, '#1a2a6a', '#3a3a8a'], [1, '#101a4a', '#2a2a6a']];
  for (let i = 1; i < keys.length; i++) {
    if (t <= keys[i][0]) {
      const k = (t - keys[i - 1][0]) / (keys[i][0] - keys[i - 1][0]);
      return [mix(keys[i - 1][1], keys[i][1], k), mix(keys[i - 1][2], keys[i][2], k)];
    }
  }
  return [keys[keys.length - 1][1], keys[keys.length - 1][2]];
}

function mix(a, b, k) {
  if (a.startsWith('rgba')) return k < 0.5 ? a : b;
  const p = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
  const A = p(a), B = p(b);
  return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * k)).join(',')})`;
}

function roundRect(g, x, y, w, hh, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + hh, r);
  g.arcTo(x + w, y + hh, x, y + hh, r);
  g.arcTo(x, y + hh, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

const CSS = `
.ldy-hung{position:absolute;inset:0;pointer-events:none}
.ldy-slot{position:absolute;display:flex;align-items:flex-start;justify-content:center;transform-origin:50% 0}
.ldy-slot>b{position:absolute;top:28%;left:50%;transform:translateX(-50%);font-size:calc(var(--u)*6);font-weight:900;color:rgba(255,255,255,.75);text-shadow:0 1px 3px rgba(0,0,0,.25)}
.ldy-slot::before{content:'';position:absolute;inset:8% 4% 0;border:calc(var(--u)*.5) dashed rgba(255,255,255,.8);border-radius:calc(var(--u)*2.4)}
.ldy-slot.full::before,.ldy-slot.full>b{display:none}
.ldy-peg{position:absolute;top:-2%;left:50%;width:calc(var(--u)*2.2);height:calc(var(--u)*5);margin-left:calc(var(--u)*-1.1);background:linear-gradient(90deg,#c8864a,#e8b07a,#c8864a);border-radius:calc(var(--u)*.6);z-index:3;box-shadow:0 1px 2px rgba(0,0,0,.3)}
.ldy-slot.dance{animation:ldy-swing 1s ease-in-out 2}
@keyframes ldy-swing{0%,100%{transform:rotate(0)}25%{transform:rotate(7deg)}75%{transform:rotate(-7deg)}}
.ldy-tray{position:absolute;left:0;right:0;bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));top:64%;display:flex;align-items:flex-end;justify-content:center;gap:calc(var(--u)*2.4);padding:0 calc(var(--u)*3);pointer-events:none}
.ldy-card{pointer-events:auto;position:relative;width:min(calc(var(--u)*22),15vw);aspect-ratio:0.82;background:#fff;border:none;border-radius:calc(var(--u)*2.4);box-shadow:0 calc(var(--u)*.8) 0 #e0c8a8,0 calc(var(--u)*1.2) calc(var(--u)*2.4) rgba(80,50,20,.3);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*.6);padding:calc(var(--u)*1);font-family:inherit;cursor:pointer;animation:ldy-in .5s cubic-bezier(.2,1.5,.4,1) both;animation-delay:var(--d,0ms)}
.ldy-card::before{content:'';position:absolute;top:0;left:0;right:0;height:calc(var(--u)*1.6);border-radius:calc(var(--u)*2.4) calc(var(--u)*2.4) 0 0;background:linear-gradient(90deg,#ff8ab0,#ffd45a,#7ad0ff)}
@keyframes ldy-in{from{transform:translateY(40%) scale(.6);opacity:0}to{transform:none;opacity:1}}
.ldy-pic{font-size:calc(var(--u)*9);line-height:1}
.ldy-txt{font-size:max(14px,calc(var(--u)*3.3));font-weight:900;color:#4a3a2a;text-align:center;line-height:1.15}
.ldy-card.used{visibility:hidden}
.ldy-card.no{animation:ldy-no .45s}
@keyframes ldy-no{0%,100%{transform:none}20%{transform:translateX(-10%) rotate(-6deg)}50%{transform:translateX(9%) rotate(5deg)}80%{transform:translateX(-4%)}}
.ldy-card.hint{box-shadow:0 0 0 calc(var(--u)*.9) #ffd23a,0 0 calc(var(--u)*4) #ffd23a;animation:ldy-glow 1s infinite alternate}
@keyframes ldy-glow{to{transform:translateY(-6%)}}
.ldy-card:focus-visible{outline:calc(var(--u)*.8) solid #3a8ae8;outline-offset:calc(var(--u)*.4)}
.ldy-fly{position:absolute;z-index:20;transition:all .5s cubic-bezier(.3,1.2,.4,1);animation:none}
.ldy-on{width:100%;height:100%;animation:none;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*1.6) rgba(40,30,80,.3);transform-origin:50% 0;animation:ldy-swing 1.4s ease-in-out}
`;

const api = {
  start(el, config, post) {
    if (!document.getElementById('ldy-style')) document.head.append(h('style', { id: 'ldy-style' }, CSS));
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnDay = api;
export default api;
