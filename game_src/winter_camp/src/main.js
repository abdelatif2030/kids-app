// «معسكر الشتاء» — Winter Camp. Entry: window.WinterCamp.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A cozy idle-tycoon: a lone survivor walks a snowy pine forest from above, chops trees by walking up to them, carries logs
// on the back and drops them on the glowing building site. Camp builds in order: log cabin, workshop, sawmill and a supply
// sled that opens the frozen gate to new lands. Helpers (bought with coins) chop for you, the campfire keeps you warm and a
// blizzard comes now and then. 2D canvas, art and sound made in code. No network, no links, nothing is lost for good.
import { Camp, BUILDS, SITE, FIRE, SIZE, HELPER_COST, normalizeSave } from './sim.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num } from './i18n.js';
import { h, css } from '../../cozy_kit/ui.js';

const CSS = css('wc', '#5aa8e0', '#2a5a98', '#bfe8ff') + `
.wc-hp{position:absolute;left:50%;transform:translateX(-50%);top:calc(var(--u)*24);background:rgba(20,50,90,.7);border:calc(var(--u)*.4) solid #bfe8ff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*3.6);padding:calc(var(--u)*1) calc(var(--u)*3);display:flex;gap:calc(var(--u)*2);align-items:center;white-space:nowrap}
`;

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
    if (!document.getElementById('wc-style')) document.head.append(h('style', { id: 'wc-style' }, CSS));
    this.root = h('div', { class: 'wc-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'wc-layer' });
    this.root.append(this.layer);
    this.mode = 'menu';
    this.clock = 0;
    this.keys = new Set();
    this.joy = null;
    this.flakes = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), s: 0.5 + Math.random() }));
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this.cam = { x: FIRE.x, y: FIRE.y };
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() {
    try {
      const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' });
      await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 2500))]);
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
    this.pm = Math.min(this.cw, this.ch) / 20; // pixels per metre
    this.root.style.setProperty('--u', `${this.u}px`);
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play') return;
      this.cv.setPointerCapture(e.pointerId);
      this.joy = { id: e.pointerId, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY };
    });
    this.cv.addEventListener('pointermove', (e) => { if (this.joy && this.joy.id === e.pointerId) { this.joy.x = e.clientX; this.joy.y = e.clientY; } });
    const up = (e) => { if (this.joy && this.joy.id === e.pointerId) this.joy = null; };
    this.cv.addEventListener('pointerup', up);
    this.cv.addEventListener('pointercancel', up);
    this._onKey = (e) => { if (e.type === 'keydown') this.keys.add(e.key.toLowerCase()); else this.keys.delete(e.key.toLowerCase()); };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _input() {
    let dx = 0;
    let dy = 0;
    if (this.joy) {
      const R = this.u * 9;
      dx = (this.joy.x - this.joy.x0) / R;
      dy = (this.joy.y - this.joy.y0) / R;
      const l = Math.hypot(dx, dy);
      if (l > 1) { dx /= l; dy /= l; }
    }
    const k = this.keys;
    if (k.has('arrowleft') || k.has('a')) dx -= 1;
    if (k.has('arrowright') || k.has('d')) dx += 1;
    if (k.has('arrowup') || k.has('w')) dy -= 1;
    if (k.has('arrowdown') || k.has('s')) dy += 1;
    return { dx, dy };
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }

  _soundPill() {
    const pill = h('button', { class: 'wc-soundpill', onclick: () => this.sound.unlock() }, t('sound'));
    this.layer.append(pill);
    const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); };
    tick();
  }

  hint(text, ms = 3200) {
    if (!this.hintEl) return;
    this.hintEl.textContent = text;
    this.hintEl.classList.add('show');
    clearTimeout(this._ht);
    this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms);
  }

  showMenu() {
    this.mode = 'menu';
    this._clear();
    this.sound.setMode('menu');
    this.layer.append(h('div', { class: 'wc-dim' }, h('div', { class: 'wc-card' },
      h('div', { class: 'wc-logo' }, '🏕️ ', t('title')),
      h('div', { class: 'wc-small' }, t('how')),
      h('div', { class: 'wc-small' }, `🏆 ${t('logs')}: ${num(this.save.best)}`),
      h('button', { class: 'wc-btn', onclick: () => { this.sound.play('tap'); this.start(); } }, t('play')),
      h('button', { class: 'wc-btn dark', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
    this._soundPill();
  }

  start() {
    this.c = new Camp({ easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play';
    this.paused = false;
    this.fx = [];
    this._clear();
    this.sound.setMode('play');
    this.coinEl = h('span', {}, '🪙 0');
    this.bagEl = h('span', {}, '🪵 0/4');
    this.buildEl = h('span', {}, '');
    this.buildBar = h('b', { style: 'width:0%' });
    this.coldBar = h('b', { style: 'width:100%;background:linear-gradient(180deg,#ff9a5a,#e0502a)' });
    const back = h('button', { class: 'wc-round', 'aria-label': t('menu'), onclick: () => this.showMenu() }, '☰');
    const pause = h('button', { class: 'wc-round', 'aria-label': t('paused'), onclick: () => this.togglePause() }, '⏸');
    const top = h('div', { class: 'wc-top' }, back, h('div', { class: 'wc-pill' }, this.coinEl), h('div', { class: 'wc-pill' }, this.bagEl), pause);
    const top2 = h('div', { class: 'wc-top', style: 'top:calc(var(--u)*15)' }, h('div', { class: 'wc-pill', style: 'flex:1;gap:0' }, this.buildEl), h('div', { class: 'wc-bar', style: 'max-width:calc(var(--u)*26)' }, this.buildBar));
    const top3 = h('div', { class: 'wc-top', style: 'top:calc(var(--u)*23)' }, h('span', {}, '🔥'), h('div', { class: 'wc-bar' }, this.coldBar), h('span', {}, '❄️'));
    this.hintEl = h('div', { class: 'wc-hint', style: 'top:calc(var(--u)*31)' });
    this.hireBtn = h('button', { class: 'wc-bld', onclick: () => { if (this.c.hireHelper()) this.sound.play('hire'); else this.hint(t('need'), 1500); } }, h('i', {}, '🧑‍🚒'), h('span', {}, t('hire')), h('small', {}, ''));
    this.bagBtn = h('button', { class: 'wc-bld', onclick: () => { if (this.c.upgradeBag()) this.sound.play('hire'); else this.hint(t('need'), 1500); } }, h('i', {}, '🎒'), h('span', {}, t('bag')), h('small', {}, ''));
    this.layer.append(top, top2, top3, this.hintEl, h('div', { class: 'wc-bot' }, this.hireBtn, this.bagBtn));
    this._soundPill();
    this.hint(t('chopHint'), 4000);
    this.said = {};
  }

  togglePause() {
    if (this.mode !== 'play') return;
    this.paused = !this.paused;
    if (this.paused) {
      this.pauseEl = h('div', { class: 'wc-dim' }, h('div', { class: 'wc-card' },
        h('div', { class: 'wc-title' }, t('paused')),
        h('button', { class: 'wc-btn', onclick: () => this.togglePause() }, t('resume')),
        h('button', { class: 'wc-btn dark', onclick: () => this.showMenu() }, t('menu'))));
      this.layer.append(this.pauseEl);
    } else if (this.pauseEl) this.pauseEl.remove();
  }

  _result() {
    const c = this.c;
    this.save.best = Math.max(this.save.best, c.logsTotal);
    this.save.finished += 1;
    this.post({ type: 'save', save: this.save });
    this.sound.play('win');
    this.layer.append(h('div', { class: 'wc-dim' }, h('div', { class: 'wc-card' },
      h('div', { class: 'wc-title' }, '🚪 ', t('done')),
      h('div', { class: 'wc-small' }, t('doneText')),
      h('div', { class: 'wc-pill' }, `🪵 ${t('logs')}: ${num(c.logsTotal)}`),
      h('div', { class: 'wc-pill' }, `🧑‍🚒 ${t('helpers')}: ${num(c.helpers.length)}`),
      h('button', { class: 'wc-btn', onclick: () => { this._clear(); this.start(); } }, t('again')),
      h('button', { class: 'wc-btn dark', onclick: () => this.showMenu() }, t('menu')))));
  }

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
    const c = this.c;
    for (const e of c.step(dt, this._input())) {
      switch (e.type) {
        case 'chop': this.sound.play('chop'); this.puff(e.x, e.y, 3); break;
        case 'log': this.sound.play('log'); if (e.me) this.fx.push({ x: e.x, y: e.y - 1, text: '+🪵', t: 0, life: 1 }); break;
        case 'drop': this.sound.play('drop'); this.fx.push({ x: SITE.x, y: SITE.y - 1.5, text: `+${num(e.n)}`, t: 0, life: 1 }); break;
        case 'built': this.sound.play('built'); this.hint(`${t('built')}: ${t(e.id)}`, 3000); break;
        case 'storm': this.sound.play('storm'); this.hint(t('storm'), 4500); break;
        case 'stormEnd': this.sound.play('stormEnd'); this.hint(t('stormEnd'), 2500); break;
        case 'gate': this.sound.play('gate'); this.hint(t('gate'), 3500); break;
        case 'hire': break;
        case 'done': this._result(); break;
        default: break;
      }
    }
    const b = c.build;
    this.coinEl.textContent = `🪙 ${num(c.coins)}`;
    this.bagEl.textContent = `🪵 ${num(c.me.bag)}/${num(c.bagMax)}`;
    this.buildEl.textContent = b ? `${t(b.id)}  ${num(c.progress)}/${num(b.logs)}` : t('gate');
    this.buildBar.style.width = b ? `${Math.round((c.progress / b.logs) * 100)}%` : '100%';
    this.coldBar.style.width = `${Math.round(c.cold * 100)}%`;
    const hc = c.nextHelperCost;
    const bc = c.nextBagCost;
    this.hireBtn.querySelector('small').textContent = hc === null ? '✓' : `🪙 ${num(hc)}`;
    this.bagBtn.querySelector('small').textContent = bc === null ? '✓' : `🪙 ${num(bc)}`;
    this.hireBtn.classList.toggle('can', hc !== null && c.coins >= hc);
    this.bagBtn.classList.toggle('can', bc !== null && c.coins >= bc);
    this.hireBtn.classList.toggle('done', hc === null);
    this.bagBtn.classList.toggle('done', bc === null);
    if (c.me.bag >= c.bagMax && !this.said.bring) { this.said.bring = 1; this.hint(t('bring'), 4000); }
    if (c.cold < 0.4 && !this.said.warm) { this.said.warm = 1; this.hint(t('warm'), 3500); setTimeout(() => { this.said.warm = 0; }, 25000); }
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
    this.cam.x += (c.me.x - this.cam.x) * Math.min(1, dt * 5);
    this.cam.y += (c.me.y - this.cam.y) * Math.min(1, dt * 5);
  }

  puff(x, y, n) { for (let i = 0; i < n; i++) this.fx.push({ x: x + (Math.random() - 0.5), y: y - 0.5, text: '•', t: 0, life: 0.5 }); }

  // ---- drawing ------------------------------------------------------------------------------------------------------

  _sx(x) { return this.cw / 2 + (x - this.cam.x) * this.pm; }
  _sy(y) { return this.ch / 2 + (y - this.cam.y) * this.pm; }

  _draw() {
    const g = this.g;
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const W = this.cw;
    const H = this.ch;
    g.fillStyle = '#e8f2fb';
    g.fillRect(0, 0, W, H);
    if (this.mode === 'menu' || !this.c) { this._menuScene(g, W, H); return; }
    const c = this.c;
    const pm = this.pm;
    // snow ground with soft drifts and the forest border outside the field
    g.fillStyle = '#f6fbff';
    g.fillRect(this._sx(0), this._sy(0), SIZE * pm, SIZE * pm);
    g.fillStyle = 'rgba(180,210,235,.35)';
    for (let i = 0; i < 40; i++) { g.beginPath(); g.ellipse(this._sx((i * 17.3) % SIZE), this._sy((i * 29.1) % SIZE), pm * 2.4, pm * 0.9, 0, 0, 6.3); g.fill(); }
    g.fillStyle = '#9ac2e0';
    g.fillRect(0, 0, W, Math.max(0, this._sy(0)));
    g.fillRect(0, this._sy(SIZE), W, H);
    g.fillRect(0, 0, Math.max(0, this._sx(0)), H);
    g.fillRect(this._sx(SIZE), 0, W, H);
    this._gate(g, c);
    this._site(g, c);
    this._fire(g);
    // things sorted by y so pines overlap properly
    const things = [];
    for (const tr of c.trees) things.push({ y: tr.y, f: () => this._pine(g, tr) });
    for (const hp of c.helpers) things.push({ y: hp.y, f: () => this._person(g, hp.x, hp.y, hp, 0.8, '#e8863a') });
    things.push({ y: c.me.y, f: () => this._person(g, c.me.x, c.me.y, c.me, 1, '#d83a3a') });
    things.sort((a, b) => a.y - b.y);
    for (const th of things) th.f();
    // floating text
    g.textAlign = 'center';
    g.font = `900 ${this.u * 4}px Tajawal, system-ui, sans-serif`;
    for (const f of this.fx) {
      const k = f.t / f.life;
      g.globalAlpha = 1 - k * k;
      g.fillStyle = '#fff'; g.strokeStyle = 'rgba(20,50,90,.9)'; g.lineWidth = this.u * 0.8;
      const x = this._sx(f.x); const y = this._sy(f.y) - k * pm * 2;
      g.strokeText(f.text, x, y); g.fillText(f.text, x, y);
    }
    g.globalAlpha = 1;
    // snow, the blizzard, and the chill
    const st = c.storm;
    const amt = st.on ? 1 : 0.25;
    g.fillStyle = `rgba(255,255,255,${st.on ? 0.8 : 0.7})`;
    for (const f of this.flakes) {
      f.y = (f.y + (0.06 + f.s * 0.05 + (st.on ? 0.25 : 0)) * 0.016 * 60 * 0.016) % 1;
      f.x = (f.x + (st.on ? 0.0025 : 0.0003) * f.s + 1) % 1;
      if (Math.random() > amt && !st.on) continue;
      g.beginPath(); g.arc(f.x * W, f.y * H, this.u * (0.3 + f.s * 0.3), 0, 6.3); g.fill();
    }
    if (st.on) { g.fillStyle = 'rgba(235,245,255,.35)'; g.fillRect(0, 0, W, H); }
    if (c.cold < 0.5) { g.fillStyle = `rgba(60,110,200,${(0.5 - c.cold) * 0.5})`; g.fillRect(0, 0, W, H); }
    // joystick ring
    if (this.joy) {
      const r = this.cv.getBoundingClientRect();
      g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = this.u * 0.6;
      g.beginPath(); g.arc(this.joy.x0 - r.left, this.joy.y0 - r.top, this.u * 9, 0, 6.3); g.stroke();
      g.fillStyle = 'rgba(255,255,255,.5)';
      g.beginPath(); g.arc(this.joy.x - r.left, this.joy.y - r.top, this.u * 3.2, 0, 6.3); g.fill();
    }
  }

  _menuScene(g, W, H) {
    g.fillStyle = '#cfe6f8';
    g.fillRect(0, 0, W, H);
    for (let i = 0; i < 7; i++) this._pineAt(g, W * (0.1 + i * 0.13), H * (0.78 + (i % 2) * 0.06), this.u * 11);
    g.fillStyle = '#fff';
    g.fillRect(0, H * 0.9, W, H);
    this._fireAt(g, W * 0.5, H * 0.88, this.u * 2);
  }

  _pineAt(g, x, y, s) {
    g.fillStyle = '#6a4a2a'; g.fillRect(x - s * 0.08, y - s * 0.2, s * 0.16, s * 0.3);
    const cols = ['#2f7a4a', '#3a8a55', '#46a060'];
    for (let i = 0; i < 3; i++) {
      const w = s * (0.62 - i * 0.14);
      const yy = y - s * 0.2 - i * s * 0.34;
      g.fillStyle = cols[i];
      g.beginPath(); g.moveTo(x - w, yy); g.lineTo(x, yy - s * 0.55); g.lineTo(x + w, yy); g.closePath(); g.fill();
      g.fillStyle = '#fff';
      g.beginPath(); g.moveTo(x - w * 0.55, yy - s * 0.26); g.lineTo(x, yy - s * 0.55); g.lineTo(x + w * 0.55, yy - s * 0.26); g.quadraticCurveTo(x, yy - s * 0.12, x - w * 0.55, yy - s * 0.26); g.fill();
    }
  }

  _pine(g, tr) {
    const x = this._sx(tr.x);
    const y = this._sy(tr.y);
    if (x < -80 || y < -80 || x > this.cw + 80 || y > this.ch + 80) return;
    const s = this.pm * 2.6 * tr.size;
    g.fillStyle = 'rgba(40,70,110,.18)';
    g.beginPath(); g.ellipse(x, y + s * 0.05, s * 0.5, s * 0.16, 0, 0, 6.3); g.fill();
    if (!tr.alive) {
      g.fillStyle = '#b8864a'; g.fillRect(x - s * 0.12, y - s * 0.12, s * 0.24, s * 0.16);
      g.fillStyle = '#fff'; g.beginPath(); g.ellipse(x, y - s * 0.12, s * 0.14, s * 0.06, 0, 0, 6.3); g.fill();
      return;
    }
    const shake = tr.hit > 0 ? Math.sin(this.clock * 60) * s * 0.03 : 0;
    this._pineAt(g, x + shake, y, s * (0.5 + tr.hp * 0.17));
  }

  _person(g, wx, wy, p, scale, coat) {
    const x = this._sx(wx);
    const y = this._sy(wy);
    const s = this.pm * 1.0 * scale;
    const bob = Math.abs(Math.sin(this.clock * 10)) * (p.vx || p.vy ? s * 0.12 : 0);
    g.save();
    g.translate(x, y - bob);
    g.scale(p.face || 1, 1);
    g.fillStyle = 'rgba(40,70,110,.2)'; g.beginPath(); g.ellipse(0, bob, s * 0.55, s * 0.18, 0, 0, 6.3); g.fill();
    // logs on the back
    for (let i = 0; i < (p.bag || 0); i++) { g.fillStyle = i % 2 ? '#b8863f' : '#c8964f'; g.strokeStyle = '#6a4010'; g.lineWidth = s * 0.05; g.beginPath(); g.roundRect(-s * 0.75, -s * 0.9 - i * s * 0.16, s * 0.45, s * 0.14, s * 0.05); g.fill(); g.stroke(); }
    g.fillStyle = '#2a3a6a'; g.fillRect(-s * 0.3, -s * 0.3, s * 0.22, s * 0.35); g.fillRect(s * 0.08, -s * 0.3, s * 0.22, s * 0.35);
    g.fillStyle = coat; g.beginPath(); g.roundRect(-s * 0.45, -s * 1.0, s * 0.9, s * 0.8, s * 0.2); g.fill();
    g.fillStyle = '#f2c9a0'; g.beginPath(); g.arc(0, -s * 1.3, s * 0.38, 0, 6.3); g.fill();
    g.fillStyle = '#2a1a0a'; g.beginPath(); g.arc(s * 0.12, -s * 1.3, s * 0.05, 0, 6.3); g.fill();
    g.fillStyle = '#ffffff'; g.beginPath(); g.arc(0, -s * 1.5, s * 0.42, Math.PI, 0); g.fill();
    g.fillStyle = coat; g.fillRect(-s * 0.42, -s * 1.52, s * 0.84, s * 0.12);
    g.beginPath(); g.arc(0, -s * 1.95, s * 0.1, 0, 6.3); g.fillStyle = '#fff'; g.fill();
    // axe swing
    if (p.swing > 0) {
      const a = -1.2 + (1 - p.swing / 0.45) * 2.2;
      g.save(); g.translate(s * 0.4, -s * 0.8); g.rotate(a);
      g.fillStyle = '#7a5a2a'; g.fillRect(0, 0, s * 0.1, s * 0.8);
      g.fillStyle = '#c8ccd4'; g.fillRect(-s * 0.12, s * 0.6, s * 0.34, s * 0.18);
      g.restore();
    }
    g.restore();
  }

  _fireAt(g, x, y, s) {
    const fl = Math.sin(this.clock * 12) * 0.12;
    const glow = g.createRadialGradient(x, y, 0, x, y, s * 6);
    glow.addColorStop(0, 'rgba(255,170,60,.55)');
    glow.addColorStop(1, 'rgba(255,170,60,0)');
    g.fillStyle = glow;
    g.beginPath(); g.arc(x, y, s * 6, 0, 6.3); g.fill();
    g.strokeStyle = '#6a3e14'; g.lineWidth = s * 0.5; g.lineCap = 'round';
    g.beginPath(); g.moveTo(x - s * 1.2, y + s * 0.3); g.lineTo(x + s * 1.2, y - s * 0.2); g.moveTo(x - s * 1.2, y - s * 0.2); g.lineTo(x + s * 1.2, y + s * 0.3); g.stroke();
    g.fillStyle = '#ff8a2a';
    g.beginPath(); g.moveTo(x - s * 0.8, y); g.quadraticCurveTo(x - s * 0.4, y - s * (2 + fl * 4), x, y - s * (2.8 + fl * 4)); g.quadraticCurveTo(x + s * 0.5, y - s * 1.4, x + s * 0.8, y); g.closePath(); g.fill();
    g.fillStyle = '#ffd23a';
    g.beginPath(); g.moveTo(x - s * 0.4, y); g.quadraticCurveTo(x, y - s * (1.6 + fl * 3), x + s * 0.4, y); g.closePath(); g.fill();
  }

  _fire(g) { this._fireAt(g, this._sx(FIRE.x), this._sy(FIRE.y), this.pm * 0.7); }

  _site(g, c) {
    const x = this._sx(SITE.x);
    const y = this._sy(SITE.y);
    const pm = this.pm;
    // finished builds stand in a row behind the site
    const spots = [[-5.5, -2.2], [5.5, -2.2], [-5.5, 3.5], [5.5, 3.5], [-10, 0.6], [10, 0.6]];
    for (let i = 0; i < c.stage; i++) this._structure(g, BUILDS[i].id, x + spots[i][0] * pm, y + spots[i][1] * pm, pm, 1);
    if (c.build) {
      const b = c.build;
      const pulse = 0.5 + 0.5 * Math.sin(this.clock * 4);
      g.fillStyle = `rgba(255,230,120,${0.25 + pulse * 0.2})`;
      g.beginPath(); g.arc(x, y, SITE.r * pm, 0, 6.3); g.fill();
      g.setLineDash([pm * 0.5, pm * 0.4]); g.strokeStyle = '#ffd23a'; g.lineWidth = pm * 0.18;
      g.beginPath(); g.arc(x, y, SITE.r * pm, 0, 6.3); g.stroke(); g.setLineDash([]);
      this._structure(g, b.id, x, y - pm * 0.4, pm, 0.35 + 0.65 * (c.progress / b.logs), true);
    }
  }

  _structure(g, id, x, y, pm, k, ghost) {
    g.save();
    g.globalAlpha = ghost ? 0.55 + 0.4 * k : 1;
    g.translate(x, y);
    g.scale(k, k);
    if (id === 'cabin') {
      g.fillStyle = '#b8803a'; g.strokeStyle = '#6a3e14'; g.lineWidth = pm * 0.12;
      g.fillRect(-pm * 2, -pm * 1.2, pm * 4, pm * 2.2); g.strokeRect(-pm * 2, -pm * 1.2, pm * 4, pm * 2.2);
      for (let i = 1; i < 4; i++) { g.beginPath(); g.moveTo(-pm * 2, -pm * 1.2 + i * pm * 0.55); g.lineTo(pm * 2, -pm * 1.2 + i * pm * 0.55); g.stroke(); }
      g.fillStyle = '#c8453a'; g.beginPath(); g.moveTo(-pm * 2.5, -pm * 1.2); g.lineTo(0, -pm * 3.2); g.lineTo(pm * 2.5, -pm * 1.2); g.closePath(); g.fill(); g.stroke();
      g.fillStyle = '#fff'; g.beginPath(); g.moveTo(-pm * 1.6, -pm * 1.8); g.lineTo(0, -pm * 3.1); g.lineTo(pm * 1.6, -pm * 1.8); g.closePath(); g.fill();
      g.fillStyle = '#ffd23a'; g.fillRect(-pm * 0.35, -pm * 0.3, pm * 0.7, pm * 1.3);
    } else if (id === 'workshop') {
      g.fillStyle = '#a89a8a'; g.strokeStyle = '#5a4a3a'; g.lineWidth = pm * 0.12;
      g.fillRect(-pm * 1.8, -pm * 1.0, pm * 3.6, pm * 2); g.strokeRect(-pm * 1.8, -pm * 1.0, pm * 3.6, pm * 2);
      g.fillStyle = '#4a6a9a'; g.beginPath(); g.moveTo(-pm * 2.1, -pm * 1.0); g.lineTo(0, -pm * 2.4); g.lineTo(pm * 2.1, -pm * 1.0); g.closePath(); g.fill(); g.stroke();
      g.fillStyle = '#6a4a2a'; g.fillRect(-pm * 1.2, -pm * 0.2, pm * 1.2, pm * 0.9);
      g.fillStyle = '#c8ccd4'; g.fillRect(pm * 0.4, -pm * 0.4, pm * 1.0, pm * 0.2);
    } else if (id === 'sawmill') {
      g.fillStyle = '#c89a5a'; g.strokeStyle = '#6a4a1a'; g.lineWidth = pm * 0.12;
      g.fillRect(-pm * 2, -pm * 0.5, pm * 4, pm * 1.2); g.strokeRect(-pm * 2, -pm * 0.5, pm * 4, pm * 1.2);
      g.fillStyle = '#d8dce4'; g.beginPath(); g.arc(0, -pm * 0.5, pm * 0.9, 0, 6.3); g.fill(); g.stroke();
      g.strokeStyle = '#8a8e96'; for (let i = 0; i < 8; i++) { const a = this.clock * 4 + (i * Math.PI) / 4; g.beginPath(); g.moveTo(0, -pm * 0.5); g.lineTo(Math.cos(a) * pm * 0.9, -pm * 0.5 + Math.sin(a) * pm * 0.9); g.stroke(); }
      g.fillStyle = '#e8c27a'; g.fillRect(-pm * 2.4, pm * 0.7, pm * 1.4, pm * 0.35); g.fillRect(-pm * 2.4, pm * 1.1, pm * 1.4, pm * 0.35);
    } else if (id === 'greenhouse') {
      g.fillStyle = 'rgba(190,235,255,.75)'; g.strokeStyle = '#4a8aa8'; g.lineWidth = pm * 0.12;
      g.beginPath(); g.moveTo(-pm * 2, pm * 0.9); g.lineTo(-pm * 2, -pm * 0.5); g.lineTo(0, -pm * 1.9); g.lineTo(pm * 2, -pm * 0.5); g.lineTo(pm * 2, pm * 0.9); g.closePath(); g.fill(); g.stroke();
      g.beginPath(); g.moveTo(0, -pm * 1.9); g.lineTo(0, pm * 0.9); g.moveTo(-pm * 1, -pm * 1.2); g.lineTo(-pm * 1, pm * 0.9); g.moveTo(pm * 1, -pm * 1.2); g.lineTo(pm * 1, pm * 0.9); g.stroke();
      g.fillStyle = '#4ac05a'; for (let i = -1; i <= 1; i++) { g.beginPath(); g.arc(i * pm * 0.9, pm * 0.55, pm * 0.28, 0, 6.3); g.fill(); }
    } else if (id === 'tower') {
      g.fillStyle = '#9a7a4a'; g.strokeStyle = '#5a3e14'; g.lineWidth = pm * 0.12;
      g.fillRect(-pm * 0.9, -pm * 2.2, pm * 1.8, pm * 3.2); g.strokeRect(-pm * 0.9, -pm * 2.2, pm * 1.8, pm * 3.2);
      g.fillStyle = '#c8453a'; g.beginPath(); g.moveTo(-pm * 1.4, -pm * 2.2); g.lineTo(0, -pm * 3.5); g.lineTo(pm * 1.4, -pm * 2.2); g.closePath(); g.fill(); g.stroke();
      g.fillStyle = '#ffd23a'; g.fillRect(-pm * 0.35, -pm * 1.7, pm * 0.7, pm * 0.7);
      g.fillStyle = '#fff'; g.fillRect(-pm * 0.9, -pm * 2.4, pm * 1.8, pm * 0.25);
    } else {
      g.fillStyle = '#8a5a2a'; g.strokeStyle = '#4a2a0a'; g.lineWidth = pm * 0.12;
      g.beginPath(); g.roundRect(-pm * 1.8, -pm * 0.7, pm * 3.6, pm * 1.4, pm * 0.3); g.fill(); g.stroke();
      g.fillStyle = '#d8b86a'; g.fillRect(-pm * 1.2, -pm * 1.2, pm * 0.9, pm * 0.7); g.fillRect(pm * 0.2, -pm * 1.2, pm * 0.9, pm * 0.7);
      g.strokeStyle = '#c8ccd4'; g.lineWidth = pm * 0.18; g.beginPath(); g.moveTo(-pm * 2.2, pm * 1.0); g.lineTo(pm * 2.2, pm * 1.0); g.stroke();
    }
    g.restore();
  }

  _gate(g, c) {
    const x = this._sx(SIZE / 2);
    const y = this._sy(1.2);
    const pm = this.pm;
    const open = c.state !== 'play' ? Math.min(1, (c.gateT || 0) / 2) : 0;
    g.fillStyle = '#9ad0f0'; g.strokeStyle = '#5a98c8'; g.lineWidth = pm * 0.12;
    const wl = pm * 2.4 * (1 - open);
    g.fillRect(x - pm * 3.4, y - pm * 1.2, pm * 1.0, pm * 2.4); g.fillRect(x + pm * 2.4, y - pm * 1.2, pm * 1.0, pm * 2.4);
    g.fillRect(x - pm * 2.4, y - pm * 1.2, wl, pm * 2.4); g.fillRect(x + pm * 2.4 - wl, y - pm * 1.2, wl, pm * 2.4);
    g.strokeStyle = 'rgba(255,255,255,.8)'; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(x - pm * 2.4 + wl * (i / 3), y - pm * 1.2); g.lineTo(x - pm * 2.4 + wl * (i / 3), y + pm * 1.2); g.stroke(); }
    if (open > 0) { g.fillStyle = `rgba(255,230,140,${open * 0.5})`; g.beginPath(); g.arc(x, y, pm * 4, 0, 6.3); g.fill(); }
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }

  dispose() {
    cancelAnimationFrame(this.raf);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    window.removeEventListener('keydown', this._onKey);
    window.removeEventListener('keyup', this._onKey);
    this.root.remove();
  }
}

void HELPER_COST;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.WinterCamp = api;
export default api;
