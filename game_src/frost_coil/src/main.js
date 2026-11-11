// «طريق التنين الجليدي» — Frost Coil. Entry: window.FrostCoil.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A snowy-night puzzle (like the owner's video): tap wooden tiles to turn their ice tubes and build a path from the
// little ice dragon to the portal before the moves run out. The ice glows as far as it reaches; then the dragon slides
// along the path into the portal. Twelve levels. 2D canvas, all art and sound made in code. No network, no links.
import { Puzzle, LEVELS, trace, N, E, S, W, normalizeSave } from './sim.js';
import { paintBackground, drawBoard, drawTile, drawStar, drawPortal, drawDragon } from './art.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num } from './i18n.js';

const CSS = `
.fc-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#4a2a14;user-select:none;-webkit-user-select:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;background:#7a74b8}
.fc-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.fc-layer{position:absolute;inset:0;pointer-events:none}
.fc-layer button,.fc-layer .fc-card{pointer-events:auto}
.fc-wood{background:linear-gradient(180deg,#a8683a,#7a4626);border:calc(var(--u)*.5) solid #5a3018;border-radius:calc(var(--u)*3);box-shadow:inset 0 calc(var(--u)*.5) 0 rgba(255,220,170,.35),0 calc(var(--u)*.8) calc(var(--u)*1.6) rgba(30,20,60,.35);color:#fff4e0;position:relative}
.fc-wood::before{content:'';position:absolute;left:calc(var(--u)*1);right:calc(var(--u)*1);top:calc(var(--u)*-1.2);height:calc(var(--u)*2.4);background:#fff;border-radius:999px;box-shadow:0 0 0 calc(var(--u)*.2) #e8eaf6}
.fc-top{position:absolute;top:max(calc(var(--u)*3),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;gap:calc(var(--u)*1.6);direction:ltr}
.fc-top>div{display:flex;align-items:center;gap:calc(var(--u)*1.2);padding:calc(var(--u)*1.2) calc(var(--u)*2.2);font-weight:900;font-size:calc(var(--u)*4)}
.fc-lv{flex:1.3;flex-direction:column;align-items:flex-start !important;gap:calc(var(--u)*.6) !important}
.fc-lv i{display:block;width:100%;height:calc(var(--u)*1.2);border-radius:9px;background:rgba(0,0,0,.3);overflow:hidden}
.fc-lv i b{display:block;height:100%;background:#b86ae8}
.fc-moves{flex:1.4}
.fc-moves .bar{flex:1;height:calc(var(--u)*4);border-radius:999px;background:rgba(0,0,0,.35);position:relative;overflow:hidden}
.fc-moves .bar b{position:absolute;inset:0 auto 0 0;background:linear-gradient(180deg,#7af05a,#3fb82a);border-radius:999px;transition:width .2s,background .3s}
.fc-moves .bar b.low{background:linear-gradient(180deg,#ff8a8a,#e8323a)}
.fc-moves .bar span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*3.4);color:#fff;text-shadow:0 1px 2px #000}
.fc-cube{font-size:calc(var(--u)*4.6)}
.fc-coins{flex:0.9}
.fc-coin{display:inline-block;width:calc(var(--u)*5);height:calc(var(--u)*5);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);box-shadow:inset 0 0 0 calc(var(--u)*.4) #c98a14}
.fc-banner{position:absolute;top:calc(max(calc(var(--u)*3),env(safe-area-inset-top)) + var(--u)*15);left:50%;transform:translateX(-50%);background:#fff4dc;border:calc(var(--u)*.45) solid #c89a5a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4);white-space:nowrap;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(30,20,60,.3)}
.fc-round{position:absolute;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:calc(var(--u)*3.4);font-size:calc(var(--u)*6);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit}
.fc-hint{position:absolute;bottom:calc(max(calc(var(--u)*4),env(safe-area-inset-bottom)) + var(--u)*2);left:50%;transform:translateX(-50%);background:rgba(40,30,70,.6);color:#fff;border-radius:999px;padding:calc(var(--u)*1.4) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;opacity:0;transition:opacity .4s;pointer-events:none}
.fc-hint.show{opacity:1}
.fc-dim{position:absolute;inset:0;background:rgba(40,30,80,.4);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box;pointer-events:auto}
.fc-card{background:#fff8ec;border:calc(var(--u)*.7) solid #d8b07a;border-radius:calc(var(--u)*5);padding:calc(var(--u)*4) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2.2);width:calc(var(--u)*78);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(30,20,60,.4)}
.fc-logo{font-size:calc(var(--u)*11);font-weight:900;color:#dff4ff;-webkit-text-stroke:calc(var(--u)*.7) #3a5ab8;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) 0 #2a3a8a,0 0 calc(var(--u)*3) rgba(150,220,255,.8);text-align:center;line-height:1.1}
.fc-pill{background:#6a7aa8;color:#fff;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*5)}
.fc-small{font-size:calc(var(--u)*3.6);font-weight:700;color:#7a5a3a;text-align:center}
.fc-stars{font-size:calc(var(--u)*11);letter-spacing:calc(var(--u)*1)}
.fc-stars .off{filter:grayscale(1);opacity:.3}
.fc-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.4);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.8) calc(var(--u)*6);min-height:calc(var(--u)*13);cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.9) 0 #1a6a3a,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.fc-btn.wood{background:linear-gradient(180deg,#a8683a,#7a4626);box-shadow:0 calc(var(--u)*.9) 0 #4a2a14;font-size:calc(var(--u)*4.4)}
.fc-btn:active{transform:translateY(calc(var(--u)*.5))}
.fc-btn:focus-visible,.fc-round:focus-visible,.fc-lvbtn:focus-visible{outline:calc(var(--u)*.7) solid #3a8ae8;outline-offset:calc(var(--u)*.5)}
.fc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*2);width:100%}
.fc-lvbtn{aspect-ratio:1;border-radius:calc(var(--u)*3);border:none;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6);color:#fff;background:linear-gradient(180deg,#7ab8f0,#3a7ad8);box-shadow:0 calc(var(--u)*.7) 0 #2a4a9a;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}
.fc-lvbtn small{font-size:calc(var(--u)*2.6)}
.fc-lvbtn.lock{background:linear-gradient(180deg,#b8b8c8,#8a8a9a);box-shadow:0 calc(var(--u)*.7) 0 #6a6a7a}
.fc-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*22);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;

function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'style') e.style.cssText = v;
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) if (k !== null && k !== undefined && k !== false) e.append(k.nodeType ? k : document.createTextNode(String(k)));
  return e;
}

const SIDE_PT = { [N]: [0, -0.5], [S]: [0, 0.5], [E]: [0.5, 0], [W]: [-0.5, 0] };

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('fc-style')) document.head.append(h('style', { id: 'fc-style' }, CSS));
    this.root = h('div', { class: 'fc-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'fc-layer' });
    this.root.append(this.layer);
    this.flakes = Array.from({ length: 90 }, () => ({ x: Math.random(), y: Math.random(), s: 0.5 + Math.random() * 1.5, v: 0.02 + Math.random() * 0.04, d: Math.random() * 6 }));
    this.anim = new Map();
    this.mode = 'menu';
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.t0 = performance.now();
    this.last = this.t0;
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() {
    try {
      const faces = [new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }), new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-Bold.ttf)`, { weight: '700' })];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 2500))]);
    } catch (_) { /* system font */ }
  }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr);
    this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.bg = paintBackground(this.cv.width, this.cv.height);
  }

  /** Board layout: tile size and top-left corner, the portal above the top-right tile, the dragon below-left. */
  _layout() {
    const p = this.p;
    if (!p) return null;
    const { rows, cols } = p.level;
    const s = Math.min((this.cw * 0.62) / cols, (this.ch * 0.4) / rows, this.u * 26);
    const w = s * cols;
    const hh = s * rows;
    const x = (this.cw - w) / 2;
    const y = this.ch * 0.5 - hh / 2 + s * 0.2;
    return { s, x, y, w, h: hh, portal: [x + w - s / 2, y - s * 0.95], dragon: [x - s * 0.1, y + hh + s * 0.45] };
  }

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    root.addEventListener('pointerup', (e) => {
      if (e.target.closest('button') || e.target.closest('.fc-dim')) return;
      if (this.mode !== 'play' || !this.p || this.p.state !== 'play') return;
      const L = this._layout();
      const r = root.getBoundingClientRect();
      const px = e.clientX - r.left;
      const py = e.clientY - r.top;
      const c = Math.floor((px - L.x) / L.s);
      const rr2 = Math.floor((py - L.y) / L.s);
      if (c < 0 || rr2 < 0 || c >= this.p.level.cols || rr2 >= this.p.level.rows) return;
      this._tap(rr2, c);
    });
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'fc-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => { this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden ? 'block' : 'none'; }, 700);
  }

  _tap(r, c) {
    const p = this.p;
    const before = p.flow.cells.length;
    const ev = p.tap(r, c);
    if (!ev) return;
    if (ev.type === 'stuck') { this.sound.play('stuck'); this.anim.set(`${r},${c}`, { shake: 0.3 }); this._hint(t('frozen'), 1.6); return; }
    this.sound.play('turn');
    this.anim.set(`${r},${c}`, { a: -Math.PI / 2 }); // turns from the old angle to the new one
    this.taps = (this.taps ?? 0) + 1;
    if (ev.reach > before) setTimeout(() => this.sound.play('reach', ev.reach), 90);
    if (p.flow.cells.some((x) => p.level.tiles[x.r][x.c].star) && !this.starSaid) { this.starSaid = true; setTimeout(() => this.sound.play('star'), 200); }
    this._hud();
    if (ev.won) {
      this.mode = 'travel';
      this.travel = { t: 0, pts: this._pathPoints() };
      setTimeout(() => this.sound.play('whoosh'), 250);
    } else if (ev.out) setTimeout(() => { this.sound.play('out'); this._outCard(); }, 500);
  }

  /** Points along the ice from the dragon to the portal (for the dragon's slide). */
  _pathPoints() {
    const L = this._layout();
    const pts = [L.dragon];
    for (const cell of this.p.flow.cells) {
      const cx = L.x + (cell.c + 0.5) * L.s;
      const cy = L.y + (cell.r + 0.5) * L.s;
      const a = SIDE_PT[cell.inSide];
      const b = SIDE_PT[cell.out];
      for (let k = 0; k <= 6; k++) {
        const f = k / 6;
        // through the middle of the tile (a soft curve)
        const mx = (1 - f) * (1 - f) * a[0] + 2 * f * (1 - f) * 0 + f * f * b[0];
        const my = (1 - f) * (1 - f) * a[1] + 2 * f * (1 - f) * 0 + f * f * b[1];
        pts.push([cx + mx * L.s, cy + my * L.s]);
      }
    }
    pts.push(L.portal);
    return pts;
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _hint(text, secs = 2.5) {
    if (!this.hintEl) return;
    this.hintEl.textContent = text;
    this.hintEl.classList.add('show');
    clearTimeout(this._ht);
    this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), secs * 1000);
  }
  _soundBtn() {
    const b = h('button', { class: 'fc-round fc-wood', style: 'right:calc(var(--u)*4)', 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
    b.addEventListener('click', (e) => { e.stopPropagation(); this.sound.unlock(); this.sound.setMuted(!this.sound.muted); this.save.muted = this.sound.muted; this._saveNow(); b.textContent = this.sound.muted ? '🔇' : '🔊'; });
    return b;
  }

  showMenu() {
    this.mode = 'menu';
    this.p = null;
    this.sound.setMode('menu');
    this._clear();
    this.layer.append(
      h('button', { class: 'fc-round fc-wood', style: 'top:max(calc(var(--u)*3),env(safe-area-inset-top));bottom:auto;left:calc(var(--u)*4)', 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'fc-dim', style: 'background:none' }, h('div', { class: 'fc-card' },
        h('div', { class: 'fc-logo' }, t('title')),
        h('div', { class: 'fc-small' }, '❄️🐉❄️'),
        h('button', { class: 'fc-btn', onclick: () => this.startLevel(Math.min(this.save.unlocked, LEVELS.length) - 1) }, '▶ ', t('play')),
        h('div', { class: 'fc-grid' }, LEVELS.map((lv, i) => {
          const locked = lv.id > this.save.unlocked;
          const st = this.save.stars[lv.id] ?? 0;
          return h('button', { class: `fc-lvbtn${locked ? ' lock' : ''}`, 'aria-label': `${t('level')} ${lv.id}`, onclick: () => { if (locked) { this.sound.play('no'); return; } this.startLevel(i); } }, locked ? '🔒' : num(lv.id), h('small', {}, locked ? '' : '⭐'.repeat(st) || '·'));
        })))),
      this._soundBtn(),
    );
  }

  startLevel(i) {
    this.levelIndex = i;
    this.p = new Puzzle(i, this.age <= 4);
    this.mode = 'play';
    this.starSaid = false;
    this.anim.clear();
    this.travel = null;
    this.taps = 0;
    this.sound.setMode('play');
    this._clear();
    this.hud = {
      lv: h('b', { style: 'width:0%' }),
      lvT: h('span'),
      bar: h('b'),
      barT: h('span'),
      coins: h('span'),
    };
    this.hintEl = h('div', { class: 'fc-hint' });
    this.layer.append(
      h('div', { class: 'fc-top' },
        h('div', { class: 'fc-wood fc-lv' }, this.hud.lvT, h('i', {}, this.hud.lv)),
        h('div', { class: 'fc-wood fc-moves' }, h('span', { class: 'fc-cube' }, '🧊'), h('div', { class: 'bar' }, this.hud.bar, this.hud.barT)),
        h('div', { class: 'fc-wood fc-coins' }, h('i', { class: 'fc-coin' }), this.hud.coins)),
      h('div', { class: 'fc-banner' }, t('build')),
      h('button', { class: 'fc-round fc-wood', style: 'left:calc(var(--u)*4)', 'aria-label': t('again'), onclick: () => this.startLevel(this.levelIndex) }, '↻'),
      this._soundBtn(),
      this.hintEl,
    );
    this._hud();
    setTimeout(() => this.mode === 'play' && this.taps === 0 && this._hint(t('tapHint'), 3.5), 2500);
  }

  _hud() {
    const p = this.p;
    if (!p || !this.hud) return;
    this.hud.lvT.textContent = `${t('level').toUpperCase()} ${num(p.level.id)}/${num(LEVELS.length)}`;
    this.hud.lv.style.width = `${(p.level.id / LEVELS.length) * 100}%`;
    const f = Math.max(0, p.movesLeft / p.level.moves);
    this.hud.bar.style.width = `${f * 100}%`;
    this.hud.bar.classList.toggle('low', f < 0.4);
    this.hud.barT.textContent = num(p.movesLeft);
    this.hud.coins.textContent = num(this.save.coins);
  }

  _winCard() {
    const p = this.p;
    const r = p.result;
    const lv = p.level;
    this.save.stars[lv.id] = Math.max(this.save.stars[lv.id] ?? 0, r.stars);
    if (lv.id + 1 > this.save.unlocked && lv.id < LEVELS.length) this.save.unlocked = lv.id + 1;
    this.save.coins = Math.min(99999, this.save.coins + r.coins);
    this._saveNow();
    this._hud();
    this.sound.play('win');
    const last = this.levelIndex + 1 >= LEVELS.length;
    this.layer.append(h('div', { class: 'fc-dim' }, h('div', { class: 'fc-card' },
      h('div', { class: 'fc-logo', style: 'font-size:calc(var(--u)*8)' }, t('title')),
      h('div', { class: 'fc-pill', style: 'background:#3aa86a' }, t('winTitle')),
      h('div', { class: 'fc-small' }, `${t('level')} ${num(lv.id)}/${num(LEVELS.length)}`),
      h('div', { class: 'fc-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= r.stars ? '' : 'off' }, '⭐'))),
      h('div', { class: 'fc-small' }, `${t('reward')} +${num(r.coins)} `, h('i', { class: 'fc-coin', style: 'vertical-align:middle' })),
      h('div', { class: 'fc-small', style: 'color:#3a8a5a' }, last ? t('allDone') : t('win')),
      last ? h('button', { class: 'fc-btn', onclick: () => this.showMenu() }, t('levels')) : h('button', { class: 'fc-btn', onclick: () => this.startLevel(this.levelIndex + 1) }, t('next'), ' ▶'),
      h('button', { class: 'fc-btn wood', onclick: () => this.showMenu() }, t('levels')))));
  }

  _outCard() {
    this.layer.append(h('div', { class: 'fc-dim' }, h('div', { class: 'fc-card' },
      h('div', { class: 'fc-logo', style: 'font-size:calc(var(--u)*8)' }, t('title')),
      h('div', { class: 'fc-pill' }, t('outTitle')),
      h('div', { class: 'fc-small' }, `${t('level')} ${num(this.p.level.id)}/${num(LEVELS.length)}`),
      h('div', { class: 'fc-small', style: 'color:#4a2a14;font-size:calc(var(--u)*4.2)' }, t('outText')),
      h('div', { class: 'fc-small' }, `${t('reward')} ${num(0)} `, h('i', { class: 'fc-coin', style: 'vertical-align:middle' })),
      h('button', { class: 'fc-btn', onclick: () => this.startLevel(this.levelIndex) }, '↻ ', t('tryAgain')),
      h('button', { class: 'fc-btn wood', onclick: () => this.showMenu() }, t('levels')))));
  }

  // ---- drawing ------------------------------------------------------------------------------------------------------

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    const time = (now - this.t0) / 1000;
    const g = this.g;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.drawImage(this.bg, 0, 0);
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    if (this.p) this._drawPuzzle(g, dt, time);
    else this._drawMenuScene(g, time);
    // falling snow
    g.fillStyle = 'rgba(255,255,255,0.85)';
    for (const f of this.flakes) {
      f.y += f.v * dt * 6;
      f.x += Math.sin(time + f.d) * 0.0006;
      if (f.y > 1.02) { f.y = -0.02; f.x = Math.random(); }
      g.beginPath(); g.arc(f.x * this.cw, f.y * this.ch, f.s * this.u * 0.35, 0, Math.PI * 2); g.fill();
    }
  }

  _drawMenuScene(g, time) {
    const s = this.u * 30;
    drawPortal(g, this.cw * 0.68, this.ch * 0.2, s * 0.8, time);
    drawDragon(g, this.cw * 0.3, this.ch * 0.82, s * 0.9, time);
  }

  _drawPuzzle(g, dt, time) {
    const p = this.p;
    const L = this._layout();
    const { s } = L;
    drawBoard(g, L.x, L.y, L.w, L.h, s);
    // the stub of ice from the portal down into the top-right tile, and from the dragon into the bottom-left tile
    const lit = new Set(p.flow.cells.map((x) => `${x.r},${x.c}`));
    g.strokeStyle = '#bfe0f4'; g.lineWidth = s * 0.26; g.lineCap = 'butt';
    g.beginPath(); g.moveTo(L.portal[0], L.portal[1] + s * 0.4); g.lineTo(L.portal[0], L.y); g.stroke();
    drawPortal(g, L.portal[0], L.portal[1], s * 0.75, time, this.travel && this.travel.t > 1 ? Math.min(1, this.travel.t - 1) : 0);
    for (const row of p.level.tiles) {
      for (const tile of row) {
        const key = `${tile.r},${tile.c}`;
        const an = this.anim.get(key);
        let ang = 0;
        let ox = 0;
        if (an) {
          if (an.a !== undefined) { an.a = Math.min(0, an.a + dt * 14); ang = an.a; if (an.a >= 0) this.anim.delete(key); }
          if (an.shake !== undefined) { an.shake -= dt; ox = Math.sin(an.shake * 60) * s * 0.04; if (an.shake <= 0) this.anim.delete(key); }
        }
        const cx = L.x + (tile.c + 0.5) * s + ox;
        const cy = L.y + (tile.r + 0.5) * s;
        drawTile(g, cx, cy, s, tile, ang, lit.has(key), time);
        if (tile.star) drawStar(g, cx, cy, s * 0.16, time);
      }
    }
    // the dragon: waits on its cloud, then slides along the ice into the portal
    if (this.travel) {
      this.travel.t += dt * 0.9;
      const pts = this.travel.pts;
      const k = Math.min(1, this.travel.t);
      const head = Math.floor(k * (pts.length - 1));
      const trail = [];
      for (let i = head; i >= Math.max(0, head - 10); i--) trail.push(pts[i]);
      if (this.travel.t < 1.05) drawDragon(g, 0, 0, s * 1.1, time, trail);
      if (this.travel.t > 1 && !this.travel.portaled) { this.travel.portaled = true; this.sound.play('portal'); }
      if (this.travel.t > 2.1 && !this.travel.done) { this.travel.done = true; this.mode = 'won'; this._winCard(); }
    } else drawDragon(g, L.dragon[0], L.dragon[1], s * 1.1, time);
  }

  pause() { this.sound.suspend(); }

  dispose() {
    cancelAnimationFrame(this._raf);
    clearInterval(this._pill);
    clearTimeout(this._ht);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    this.root.remove();
  }
}

void trace;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.FrostCoil = api;
export default api;
