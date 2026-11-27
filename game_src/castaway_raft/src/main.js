// «طوف الناجي» — Castaway Raft. Entry: window.CastawayRaft.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A little castaway on a raft throws a hook to grab floating planks, barrels, crates and golden bottles, then builds a
// bigger raft, a sail, a fishing spot and a hut, scares off a hungry shark, and lands on an island with treasure.
// Eight levels. 2D canvas; all art and sound made in code. No network, no links, nothing is lost for good.
import { Voyage, LEVELS, COST, MAX_TILES, RAFT, normalizeSave } from './sim.js';
import { Sound } from './audio.js';
import { View3D } from './view3d.js';
import { setLang, setGirl, getLang, t, num } from './i18n.js';
import { h, css } from '../../cozy_kit/ui.js';

const CSS = css('cr', '#3aa8d8', '#1a6a98', '#ffd23a');
const ICON = { wood: '🪵', crate: '📦', barrel: '🛢️', bottle: '🍾' };
const CELLS = [[1, 1], [0, 1], [1, 2], [0, 2], [1, 0], [0, 0], [2, 1], [2, 2], [2, 0]];
const BUILD_ICON = { tile: '🟫', sail: '⛵', fish: '🎣', hut: '🛖' };

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
    if (!document.getElementById('cr-style')) document.head.append(h('style', { id: 'cr-style' }, CSS));
    this.root = h('div', { class: 'cr-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.view = new View3D(); this.root.append(this.view.dom);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'cr-layer' });
    this.root.append(this.layer);
    this.mode = 'menu';
    this.fx = [];
    this.clock = 0;
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() {
    try {
      const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' });
      await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]);
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
    this.view.setSize(this.cw, this.ch, this.u);
    this.root.style.setProperty('--u', `${this.u}px`);
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play' || this.paused) return;
      const r = this.cv.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      if (this.v.throwHook(x, y)) this.sound.play('throw');
    });
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); this.hud = null; }

  _soundPill() {
    const pill = h('button', { class: 'cr-soundpill', onclick: () => this.sound.unlock() }, t('sound'));
    this.layer.append(pill);
    const tick = () => {
      if (!this.root.isConnected) return;
      pill.style.display = this.sound.on || this.sound.muted || !this.sound.ctx ? 'none' : 'block';
      if (!this.sound.ctx) pill.style.display = 'none';
      setTimeout(tick, 600);
    };
    tick();
  }

  showMenu() {
    this.mode = 'menu';
    this.paused = false;
    this._clear();
    this.sound.setMode('menu');
    const lvs = h('div', { class: 'cr-lvs' }, LEVELS.map((l, i) => {
      const lock = l.id > this.save.unlocked;
      const st = this.save.stars[l.id] || 0;
      return h('button', { class: `cr-lv${lock ? ' lock' : ''}`, 'aria-label': `${t('level')} ${l.id}`, onclick: () => { if (lock) { this.hint(t('locked')); return; } this.sound.play('tap'); this.start(i); } },
        h('i', {}, lock ? '🔒' : ['🌴', '🪵', '🦈', '🪨', '🪸', '⛈️', '🐋', '💎'][i]),
        h('span', {}, num(l.id)),
        h('span', {}, '⭐'.repeat(st) || '·'));
    }));
    this.layer.append(h('div', { class: 'cr-dim' },
      h('div', { class: 'cr-card' },
        h('div', { class: 'cr-logo' }, t('title')),
        h('div', { class: 'cr-small' }, t('tapSea')),
        lvs,
        h('button', { class: 'cr-btn dark', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
    this.hintEl = h('div', { class: 'cr-hint' });
    this.layer.append(this.hintEl);
    this._soundPill();
  }

  hint(text, ms = 2600) {
    if (!this.hintEl) return;
    this.hintEl.textContent = text;
    this.hintEl.classList.add('show');
    clearTimeout(this._ht);
    this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms);
  }

  start(i) {
    this.levelIndex = i;
    this.v = new Voyage({ level: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play';
    this.paused = false;
    this.fx = [];
    this._clear();
    this.sound.setMode('play');
    const L = this.v.level;
    const pill = h('div', { class: 'cr-pill' }, `${num(L.id)}  `, getLang() === 'en' ? L.en : L.ar);
    this.coinEl = h('span', {}, '🪙 0');
    const coins = h('div', { class: 'cr-pill' }, this.coinEl);
    const back = h('button', { class: 'cr-round', 'aria-label': t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: 'cr-round', 'aria-label': t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.barEl = h('b', { style: 'width:0%' });
    const bar = h('div', { class: 'cr-bar' }, this.barEl);
    const top = h('div', { class: 'cr-top' }, back, pill, coins, pause);
    const top2 = h('div', { class: 'cr-top', style: 'top:calc(var(--u)*15)' }, h('span', {}, '🪵'), bar, h('span', {}, '🏝️'));
    this.hintEl = h('div', { class: 'cr-hint', style: 'top:calc(var(--u)*24)' });
    // resources and build buttons
    this.resEl = {
      wood: h('span', {}, '0'), crate: h('span', {}, '0'), bottle: h('span', {}, `0/${L.bottles}`),
    };
    const res = h('div', { class: 'cr-bot', style: 'bottom:calc(var(--u)*22)' },
      h('div', { class: 'cr-pill' }, ICON.wood, this.resEl.wood),
      h('div', { class: 'cr-pill' }, ICON.crate, this.resEl.crate),
      h('div', { class: 'cr-pill' }, ICON.bottle, this.resEl.bottle));
    this.bldEl = {};
    const kinds = ['tile', ...['sail', 'fish', 'hut'].filter((k) => L.need[k])];
    const names = { tile: t('raftTile'), sail: t('sail'), fish: t('fish'), hut: t('hut') };
    const bot = h('div', { class: 'cr-bot' }, kinds.map((k) => {
      const c = COST[k];
      const cost = Object.keys(c).filter((r) => c[r] > 0).map((r) => `${c[r]}${ICON[r]}`).join(' ');
      const b = h('button', { class: 'cr-bld', 'aria-label': names[k], onclick: () => { if (this.v.build(k)) this._afterBuild(k); else this.hint(t('noWood')); } },
        h('i', {}, BUILD_ICON[k]), h('span', {}, names[k]), h('small', {}, cost));
      this.bldEl[k] = b;
      return b;
    }));
    this.layer.append(top, top2, this.hintEl, res, bot);
    this._soundPill();
    this.hint(L.need.tile || true ? t('hookWood') : '', 4000);
    this.coinShown = 0;
  }

  _afterBuild(kind) {
    this.sound.play('build');
    const n = { tile: t('raftTile'), sail: t('sail'), fish: t('fish'), hut: t('hut') }[kind];
    this.fx.push({ x: RAFT.x, y: RAFT.y - 0.12, text: `${t('built')}: ${n}`, t: 0, life: 1.6 });
  }

  togglePause() {
    if (this.mode !== 'play') return;
    this.paused = !this.paused;
    if (this.paused) {
      this.pauseEl = h('div', { class: 'cr-dim' }, h('div', { class: 'cr-card' },
        h('div', { class: 'cr-title' }, t('paused')),
        h('button', { class: 'cr-btn', onclick: () => this.togglePause() }, t('resume')),
        h('button', { class: 'cr-btn dark', onclick: () => this.start(this.levelIndex) }, t('restart')),
        h('button', { class: 'cr-btn dark', onclick: () => this.showMenu() }, t('menu'))));
      this.layer.append(this.pauseEl);
    } else if (this.pauseEl) this.pauseEl.remove();
  }

  _result() {
    const v = this.v;
    const L = v.level;
    const prevStars = this.save.stars[L.id] || 0;
    if (v.stars > prevStars) this.save.stars[L.id] = v.stars;
    this.save.unlocked = Math.max(this.save.unlocked, Math.min(LEVELS.length, L.id + 1));
    this.save.coins += v.reward;
    this.post({ type: 'save', save: this.save });
    this.sound.play('win');
    const row = (ok, text) => h('div', { class: 'cr-small', style: 'width:100%;text-align:start' }, ok ? '✅ ' : '▫️ ', text);
    const last = L.id >= LEVELS.length;
    this.layer.append(h('div', { class: 'cr-dim' }, h('div', { class: 'cr-card' },
      h('div', { class: 'cr-title' }, t('islandReached')),
      h('div', { class: 'cr-stars' }, [1, 2, 3].map((s) => h('span', { class: s <= v.stars ? '' : 'off' }, '⭐'))),
      row(true, `${t('landed')}: ${getLang() === 'en' ? L.en : L.ar}`),
      row(v.bottles >= L.bottles, `${t('bottles')} ${num(v.bottles)}/${num(L.bottles)}`),
      row(v.lost === 0, t('noLogs')),
      h('div', { class: 'cr-pill' }, `🪙 +${num(v.reward)}`),
      h('div', { class: 'cr-small' }, last ? t('treasure') : t(this._girl() ? 'win_f' : 'win_m')),
      last ? null : h('button', { class: 'cr-btn', onclick: () => this.start(this.levelIndex + 1) }, t('next')),
      h('button', { class: 'cr-btn alt', onclick: () => this.start(this.levelIndex) }, t('again')),
      h('button', { class: 'cr-btn dark', onclick: () => this.showMenu() }, t('menu')))));
  }

  _girl() { return t('win_f') !== t('win_m') && false; }

  // ---- loop ---------------------------------------------------------------------------------------------------------

  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      this.clock += dt;
      if (this.mode === 'play' && !this.paused) this._update(dt);
      this._draw();
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _update(dt) {
    const v = this.v;
    const was = v.state;
    for (const e of v.step(dt)) {
      switch (e.type) {
        case 'hooked': this.sound.play('splash'); this.sound.play('hook'); break;
        case 'miss': this.sound.play('splash'); break;
        case 'got': {
          this.sound.play(e.what === 'bottle' ? 'bottle' : 'got');
          this.fx.push({ x: RAFT.x, y: RAFT.y - 0.1, text: e.what === 'bottle' ? '+🍾' : `+${e.n} ${t(e.what)}`, t: 0, life: 1.1 });
          break;
        }
        case 'needBuild': this.hint(t('needBuild'), 5000); break;
        case 'sharkIn': this.sound.play('sharkIn'); this.hint(t('shark'), 4000); break;
        case 'sharkWarn': this.sound.play('sharkIn'); break;
        case 'bitten': this.sound.play('bite'); this.fx.push({ x: RAFT.x + 0.1, y: RAFT.y, text: e.wood ? `-1 ${t('wood')}` : '', t: 0, life: 1.2 }); this.hint(t('bitten'), 1800); break;
        case 'scare': this.sound.play('scare'); this.hint(t('scared'), 2200); break;
        case 'fish': this.sound.play('fish'); this.fx.push({ x: RAFT.x + 0.22, y: RAFT.y - 0.05, text: `+${num(e.n)} 🐟`, t: 0, life: 1.1 }); break;
        case 'landing': this.sound.play('land'); break;
        case 'done': this._result(); break;
        default: break;
      }
    }
    void was;
    this.barEl.style.width = `${Math.round(v.progress * 100)}%`;
    this.resEl.wood.textContent = num(v.res.wood);
    this.resEl.crate.textContent = num(v.res.crate);
    this.resEl.bottle.textContent = `${num(v.bottles)}/${num(v.level.bottles)}`;
    const cs = v.coins;
    if (cs !== this.coinShown) { this.coinShown = cs; this.coinEl.textContent = `🪙 ${num(cs)}`; }
    for (const k of Object.keys(this.bldEl)) {
      const b = this.bldEl[k];
      const done = k === 'tile' ? v.extra.tile >= (v.level.need.tile || 0) && v.built.tile >= MAX_TILES : v.built[k];
      b.classList.toggle('can', v.canBuild(k) && (k === 'tile' ? v.extra.tile < (v.level.need.tile || 99) || true : true));
      b.classList.toggle('done', !!done);
    }
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
  }

  // ---- drawing ------------------------------------------------------------------------------------------------------

  _draw() {
    const g = this.g;
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const W = this.cw;
    const H = this.ch;
    const v = this.mode === 'play' ? this.v : null;
    const tm = this.clock;
    g.clearRect(0, 0, W, H);
    const lift = v && v.state === 'landing' ? Math.min(1, v.landT / 2) : 0;
    const fake = v || { built: { tile: 6, sail: true, fish: false, hut: false }, hook: { phase: 'idle' }, shark: { state: 'none' }, state: 'sail', time: tm, items: [], progress: 0, level: { isl: 'palm' } };
    const rs = v ? Math.min(W, H) * 0.19 / this.u : 14;
    this.view.render({ v: fake, tm, raftFy: (v ? RAFT.y - 0.07 : 0.8) - lift * 0.45, rs, drift: v ? v.time * 0.05 : tm * 0.03 });
    if (v && v.shark.state === 'bite') { const [bx, by] = this.view.project(this.view.X(v.shark.x) + 3, 8, this.view.Z(v.shark.y)); const s = this.u; g.fillStyle = '#fff'; g.strokeStyle = '#d83a2a'; g.lineWidth = s * 0.6; g.beginPath(); g.arc(bx, by, s * 2.6, 0, 6.3); g.fill(); g.stroke(); g.fillStyle = '#d83a2a'; g.font = `900 ${s * 4}px system-ui`; g.textAlign = 'center'; g.fillText('!', bx, by + s * 1.4); }
    if (!v) return;
    // floating text
    g.textAlign = 'center';
    g.font = `900 ${this.u * 4.4}px Tajawal, system-ui, sans-serif`;
    for (const f of this.fx) {
      const k = f.t / f.life;
      g.globalAlpha = 1 - k * k;
      g.fillStyle = '#fff';
      g.strokeStyle = 'rgba(0,40,70,.9)';
      g.lineWidth = this.u * 0.9;
      const x = f.x * W;
      const y = f.y * H - k * this.u * 10;
      g.strokeText(f.text, x, y);
      g.fillText(f.text, x, y);
    }
    g.globalAlpha = 1;
  }

  _drawMenuRaft(g, W, H, tm) {
    const s = Math.min(W, H) * 0.14;
    const v = { built: { tile: 6, sail: true, fish: false, hut: false }, hook: { phase: 'idle' }, shark: { state: 'none' }, state: 'sail', time: tm };
    this._raft(g, W * 0.5, H * 0.8, v, tm, s);
  }

  _island(g, W, H, approach, lift, kind) {
    if (approach <= 0) return;
    const base = H * (0.62 * approach + lift * 0.25);
    const sand = kind === 'rock' ? '#a89a8a' : kind === 'gold' ? '#ffe08a' : '#f0d08a';
    // shallow water
    g.fillStyle = 'rgba(80,220,220,.55)';
    g.beginPath();
    g.moveTo(0, 0);
    g.lineTo(W, 0);
    for (let x = W; x >= 0; x -= W / 16) g.lineTo(x, base + this.u * 6 + Math.sin(x * 0.02 + this.clock) * this.u * 1.2);
    g.fill();
    g.fillStyle = sand;
    g.beginPath();
    g.moveTo(0, 0);
    g.lineTo(W, 0);
    for (let x = W; x >= 0; x -= W / 16) g.lineTo(x, base + Math.sin(x * 0.03) * this.u * 2.5);
    g.fill();
    g.fillStyle = 'rgba(255,255,255,.7)';
    for (let x = 0; x < W; x += W / 16) {
      g.beginPath();
      g.ellipse(x + W / 32, base + this.u * 3 + Math.sin(x * 0.03) * this.u * 2.5, W / 34, this.u * 1.1, 0, 0, 6.3);
      g.fill();
    }
    // X marks the spot, palm, rocks, starfish
    g.strokeStyle = '#d83a2a';
    g.lineWidth = this.u * 1.2;
    const cx = W * 0.5;
    const cy = base * 0.45;
    g.beginPath();
    g.moveTo(cx - this.u * 3, cy - this.u * 3); g.lineTo(cx + this.u * 3, cy + this.u * 3);
    g.moveTo(cx + this.u * 3, cy - this.u * 3); g.lineTo(cx - this.u * 3, cy + this.u * 3);
    g.stroke();
    if (kind === 'palm' || kind === 'sand') {
      const px = W * 0.2;
      const py = base * 0.5;
      g.strokeStyle = '#8a5a2a';
      g.lineWidth = this.u * 1.6;
      g.beginPath(); g.moveTo(px, py + this.u * 6); g.quadraticCurveTo(px + this.u * 2, py, px + this.u, py - this.u * 6); g.stroke();
      g.fillStyle = '#3aa84a';
      for (let i = 0; i < 6; i++) { g.beginPath(); g.ellipse(px + this.u + Math.cos(i) * this.u * 3, py - this.u * 6 + Math.sin(i) * this.u * 1.4, this.u * 3.4, this.u * 1.1, i * 0.6, 0, 6.3); g.fill(); }
    } else {
      g.fillStyle = '#7a7a82';
      for (const [rx, ry, r] of [[0.15, 0.3, 4], [0.82, 0.4, 5], [0.7, 0.2, 3]]) { g.beginPath(); g.ellipse(W * rx, base * ry * 1.4, this.u * r, this.u * r * 0.7, 0, 0, 6.3); g.fill(); }
    }
    if (kind === 'gold' && lift > 0.4) { g.font = `${this.u * 9}px system-ui`; g.textAlign = 'center'; g.fillText('💎', cx + this.u * 12, cy); }
  }

  _item(g, W, H, it, tm) {
    const x = it.x * W;
    const y = it.y * H + Math.sin(tm * 2 + it.ph) * this.u * 0.8;
    const s = this.u;
    g.save();
    g.translate(x, y);
    g.rotate(Math.sin(tm * 1.3 + it.ph) * 0.15);
    // foam ring
    g.strokeStyle = 'rgba(255,255,255,.75)';
    g.lineWidth = s * 0.6;
    g.beginPath(); g.ellipse(0, s * 0.6, s * 5.4, s * 3.4, 0, 0, 6.3); g.stroke();
    if (it.kind === 'plank') {
      g.fillStyle = '#c8924a'; g.strokeStyle = '#7a4a1a'; g.lineWidth = s * 0.5;
      g.beginPath(); g.roundRect(-s * 4.4, -s * 1, s * 8.8, s * 2, s * 0.5); g.fill(); g.stroke();
      g.strokeStyle = 'rgba(90,50,10,.5)'; g.beginPath(); g.moveTo(-s * 3, 0); g.lineTo(s * 3, 0); g.stroke();
    } else if (it.kind === 'barrel') {
      g.fillStyle = '#9a5a2a'; g.strokeStyle = '#4a2a0a'; g.lineWidth = s * 0.5;
      g.beginPath(); g.ellipse(0, 0, s * 3.2, s * 3.6, 0, 0, 6.3); g.fill(); g.stroke();
      g.fillStyle = '#6a3a1a'; g.fillRect(-s * 3.2, -s * 1.8, s * 6.4, s * 0.8); g.fillRect(-s * 3.2, s * 1, s * 6.4, s * 0.8);
      g.fillStyle = '#c88a4a'; g.beginPath(); g.ellipse(0, -s * 3, s * 2.6, s * 1, 0, 0, 6.3); g.fill();
    } else if (it.kind === 'crate') {
      g.fillStyle = '#b8803a'; g.strokeStyle = '#5a3a0a'; g.lineWidth = s * 0.5;
      g.fillRect(-s * 3, -s * 3, s * 6, s * 6); g.strokeRect(-s * 3, -s * 3, s * 6, s * 6);
      g.beginPath(); g.moveTo(-s * 3, -s * 3); g.lineTo(s * 3, s * 3); g.moveTo(s * 3, -s * 3); g.lineTo(-s * 3, s * 3); g.stroke();
    } else {
      g.shadowColor = '#ffe04a'; g.shadowBlur = s * 3 + Math.sin(tm * 4) * s;
      g.fillStyle = '#ffd23a'; g.strokeStyle = '#a87a0a'; g.lineWidth = s * 0.4;
      g.beginPath(); g.ellipse(0, s * 0.8, s * 1.7, s * 2.4, 0, 0, 6.3); g.fill(); g.stroke();
      g.fillRect(-s * 0.6, -s * 3, s * 1.2, s * 2); g.fillStyle = '#c8924a'; g.fillRect(-s * 0.8, -s * 3.6, s * 1.6, s * 0.8);
      g.shadowBlur = 0;
    }
    g.restore();
  }

  _shark(g, W, H, sh, tm) {
    const x = sh.x * W;
    const y = sh.y * H;
    const s = this.u;
    g.save();
    g.translate(x, y);
    g.strokeStyle = 'rgba(255,255,255,.7)';
    g.lineWidth = s * 0.6;
    g.beginPath(); g.ellipse(0, s * 1.2, s * 7 + Math.sin(tm * 3) * s * 0.6, s * 3, 0, 0, 6.3); g.stroke();
    g.fillStyle = '#3a4a6a';
    g.beginPath(); g.moveTo(-s * 2.2, s * 1); g.quadraticCurveTo(-s * 0.8, -s * 6, s * 2, s * 1); g.closePath(); g.fill();
    g.fillStyle = '#4a5a7a';
    g.beginPath(); g.ellipse(0, s * 1.2, s * 5, s * 1.6, 0, 0, 6.3); g.fill();
    if (sh.state === 'bite') {
      g.fillStyle = '#fff'; g.strokeStyle = '#d83a2a'; g.lineWidth = s * 0.6;
      g.beginPath(); g.arc(s * 4, -s * 6, s * 2.6, 0, 6.3); g.fill(); g.stroke();
      g.fillStyle = '#d83a2a'; g.font = `900 ${s * 4}px system-ui`; g.textAlign = 'center'; g.fillText('!', s * 4, -s * 4.6);
    }
    g.restore();
  }

  _raft(g, rx, ry, v, tm, sizeOverride) {
    const s = sizeOverride || Math.min(this.cw, this.ch) * 0.145;
    const bob = Math.sin(tm * 1.6) * this.u * 0.5;
    g.save();
    g.translate(rx, ry + bob);
    g.rotate(Math.sin(tm * 1.1) * 0.02);
    const n = v.built.tile;
    // foam
    g.fillStyle = 'rgba(255,255,255,.35)';
    g.beginPath(); g.ellipse(0, s * 0.3, s * 2.1, s * 2.0, 0, 0, 6.3); g.fill();
    for (let i = 0; i < n; i++) {
      const [cx, cy] = CELLS[i];
      const x = (cx - 1) * s - s / 2;
      const y = (cy - 1) * s - s / 2;
      g.fillStyle = '#c48a46'; g.strokeStyle = '#6a3e14'; g.lineWidth = this.u * 0.5;
      g.beginPath(); g.roundRect(x, y, s * 0.99, s * 0.99, this.u * 0.8); g.fill(); g.stroke();
      g.strokeStyle = 'rgba(100,60,20,.55)';
      for (let k = 1; k < 4; k++) { g.beginPath(); g.moveTo(x + (s * k) / 4, y + this.u * 0.5); g.lineTo(x + (s * k) / 4, y + s - this.u * 0.5); g.stroke(); }
      g.fillStyle = '#e8d8a0';
      g.fillRect(x, y + s * 0.3, s, this.u * 0.8);
      g.fillRect(x, y + s * 0.66, s, this.u * 0.8);
    }
    // sail
    if (v.built.sail) {
      g.strokeStyle = '#5a3a1a'; g.lineWidth = this.u * 1.1;
      g.beginPath(); g.moveTo(-s * 0.9, s * 0.2); g.lineTo(-s * 0.9, -s * 1.7); g.stroke();
      g.fillStyle = '#f4e8d0'; g.strokeStyle = '#a8845a'; g.lineWidth = this.u * 0.4;
      g.beginPath(); g.moveTo(-s * 0.9, -s * 1.6); g.quadraticCurveTo(-s * 0.1 + Math.sin(tm * 2) * this.u * 0.6, -s * 1.1, -s * 0.2, -s * 0.2); g.lineTo(-s * 0.9, -s * 0.1); g.closePath(); g.fill(); g.stroke();
      g.fillStyle = '#e86a5a'; g.fillRect(-s * 0.8, -s * 1.1, s * 0.4, s * 0.5);
    }
    // fishing spot: a rod over the right edge
    if (v.built.fish) {
      g.strokeStyle = '#6a4a2a'; g.lineWidth = this.u * 0.6;
      g.beginPath(); g.moveTo(s * 1.0, s * 0.3); g.lineTo(s * 2.2, -s * 0.6); g.stroke();
      g.strokeStyle = 'rgba(255,255,255,.8)'; g.lineWidth = this.u * 0.2;
      g.beginPath(); g.moveTo(s * 2.2, -s * 0.6); g.lineTo(s * 2.2, s * 0.5 + Math.sin(tm * 3) * this.u * 0.5); g.stroke();
      g.fillStyle = '#d83a2a'; g.beginPath(); g.arc(s * 2.2, s * 0.5 + Math.sin(tm * 3) * this.u * 0.5, this.u * 0.8, 0, 6.3); g.fill();
    }
    // hut
    if (v.built.hut) {
      g.fillStyle = '#d8b878'; g.strokeStyle = '#6a4a1a'; g.lineWidth = this.u * 0.5;
      g.fillRect(-s * 0.3, -s * 1.3, s * 1.2, s * 0.9); g.strokeRect(-s * 0.3, -s * 1.3, s * 1.2, s * 0.9);
      g.fillStyle = '#b8453a';
      g.beginPath(); g.moveTo(-s * 0.5, -s * 1.3); g.lineTo(s * 0.3, -s * 1.9); g.lineTo(s * 1.1, -s * 1.3); g.closePath(); g.fill(); g.stroke();
      g.fillStyle = '#5a3a1a'; g.fillRect(s * 0.1, -s * 0.9, s * 0.4, s * 0.5);
    }
    this._hero(g, s * 0.1, s * 0.6, s, v, tm);
    g.restore();
  }

  _hero(g, x, y, s, v, tm) {
    const u = s * 0.14;
    const throwing = v.hook && v.hook.phase === 'out';
    const hop = Math.abs(Math.sin(tm * 3)) * u * 0.4;
    g.save();
    g.translate(x, y - hop);
    // legs
    g.fillStyle = '#2a4a8a';
    g.fillRect(-u * 1.5, u * 1.8, u * 1.2, u * 2.2);
    g.fillRect(u * 0.3, u * 1.8, u * 1.2, u * 2.2);
    // body (striped shirt)
    g.fillStyle = '#f4f4f4';
    g.beginPath(); g.roundRect(-u * 2.4, -u * 1.2, u * 4.8, u * 3.4, u); g.fill();
    g.fillStyle = '#d83a2a';
    for (let i = 0; i < 3; i++) g.fillRect(-u * 2.4, -u * 0.4 + i * u * 1, u * 4.8, u * 0.45);
    // arms
    g.strokeStyle = '#f2c9a0'; g.lineWidth = u * 1.1; g.lineCap = 'round';
    g.beginPath(); g.moveTo(-u * 2.2, -u * 0.4); g.lineTo(-u * 3, u * 1.2 + Math.sin(tm * 2) * u * 0.3); g.stroke();
    g.beginPath(); g.moveTo(u * 2.2, -u * 0.4); g.lineTo(throwing ? u * 4.4 : u * 3, throwing ? -u * 1.8 : u * 1.2); g.stroke();
    // head
    g.fillStyle = '#f2c9a0';
    g.beginPath(); g.arc(0, -u * 2.7, u * 2, 0, 6.3); g.fill();
    g.fillStyle = '#2a1a0a';
    g.beginPath(); g.arc(-u * 0.7, -u * 2.7, u * 0.3, 0, 6.3); g.arc(u * 0.7, -u * 2.7, u * 0.3, 0, 6.3); g.fill();
    g.strokeStyle = '#a8503a'; g.lineWidth = u * 0.25;
    g.beginPath(); g.arc(0, -u * 2.1, u * 0.6, 0.2, 2.9); g.stroke();
    // straw hat
    g.fillStyle = '#e8c868'; g.strokeStyle = '#a8883a'; g.lineWidth = u * 0.3;
    g.beginPath(); g.ellipse(0, -u * 3.9, u * 3.4, u * 1, 0, 0, 6.3); g.fill(); g.stroke();
    g.beginPath(); g.ellipse(0, -u * 4.4, u * 1.7, u * 1.2, 0, Math.PI, 0); g.fill(); g.stroke();
    g.fillStyle = '#d83a2a'; g.fillRect(-u * 1.7, -u * 4.3, u * 3.4, u * 0.5);
    g.restore();
  }

  _hook(g, rx, ry, v, W, H, tm) {
    const hk = v.hook;
    if (hk.phase === 'idle') return;
    const hx = hk.hx * W;
    const hy = hk.hy * H - (ry - RAFT.y * H) * 0;
    const sx = rx + this.u * 2;
    const sy = ry - this.u * 3;
    g.strokeStyle = '#f4e8c8';
    g.lineWidth = this.u * 0.45;
    g.beginPath();
    g.moveTo(sx, sy);
    g.quadraticCurveTo((sx + hx) / 2, (sy + hy) / 2 + this.u * 3 + Math.sin(tm * 12) * this.u * 0.4, hx, hy);
    g.stroke();
    if (hk.item) {
      this._item(g, W, H, { ...hk.item, x: hk.hx, y: hk.hy, ph: 0 }, tm);
    }
    g.strokeStyle = '#c8ccd4'; g.lineWidth = this.u * 0.7;
    g.beginPath(); g.arc(hx, hy + this.u * 0.8, this.u * 1.1, -0.5, 3.6); g.stroke();
    if (hk.phase === 'out' || (hk.phase === 'back' && hk.t < 0.1)) {
      g.strokeStyle = 'rgba(255,255,255,.7)';
      g.beginPath(); g.ellipse(hx, hy, this.u * 3 * (1 + hk.t * 2), this.u * 1.6 * (1 + hk.t * 2), 0, 0, 6.3); g.stroke();
    }
  }

  // ---- control ------------------------------------------------------------------------------------------------------

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }

  dispose() {
    cancelAnimationFrame(this.raf);
    this.view.dispose();
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    this.root.remove();
  }
}

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.CastawayRaft = api;
export default api;
