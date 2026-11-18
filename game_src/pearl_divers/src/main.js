// «غوّاصو اللؤلؤ» — Pearl Divers. Entry: window.PearlDivers.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Idle management in a tropical lagoon: tap to send divers down to open clams, they carry pearls to the basket, a diving bell
// lifts them to your boat to be sold. Buy managers, more divers, pearl value, a faster bell and deeper areas; beat the rich
// rival on the yacht. 2D canvas (cut-away view of the lagoon), art and sound made in code. No network, nothing lost.
import { Lagoon, DEPTHS, UPGRADES, RIVAL_GOAL, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['غوّاصو اللؤلؤ', 'Pearl Divers'], play: ['يلا نغوص', 'Dive in'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], again: ['من الأول', 'Play again'],
  how: ['دوس على المياه عشان يغوصوا — اشتري مديرين عشان يشتغلوا لوحدهم', 'Tap the water to send divers — buy managers to automate'],
  you: ['أنت', 'You'], rival: ['المنافس', 'Rival'], manager: ['مدير', 'Manager'], open: ['افتح', 'Open'], max: ['أقصى', 'Max'], shop: ['المتجر', 'Shop'],
  won: ['عدّيت المنافس! 🏆', 'You overtook the rival! 🏆'], wonText: ['بقيت أغنى تاجر لؤلؤ في البحيرة.', 'You are the richest pearl trader in the lagoon.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
};
const I = makeI18n(S);

class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'tap': this.noise(t, 0.12, 0.06, 'lowpass', 900, 1, this.sfx, 300); break;
      case 'clam': this.tone('triangle', hz(84), t, 0.12, 0.07); this.tone('sine', hz(91), t + 0.05, 0.18, 0.06); break;
      case 'sold': [0, 7, 12].forEach((s, i) => this.tone('square', hz(79 + s), t + i * 0.06, 0.12, 0.05)); break;
      case 'buy': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.06, 0.25, 0.12)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setBed(null); this.setTune(null); return; } this.setBed('waves'); this.setTune({ tempo: 96, beats: 16, wave: 'sine', vol: 0.1, notes: [[0, 69, 2], [2, 72, 1], [3, 76, 1], [4, 74, 2], [6, 72, 1], [7, 69, 1], [8, 67, 2], [10, 71, 1], [11, 74, 1], [12, 72, 2], [14, 69, 2], [0, 45, 4], [8, 43, 4]] }); }
}

const f = (n) => (n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e4 ? `${(n / 1e3).toFixed(1)}K` : String(Math.round(n)));

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('pd-style')) document.head.append(h('style', { id: 'pd-style' }, css('pd', '#2ab8d8', '#1a5a98', '#ffe04a') + `
.pd-root{background:#2ab8d8;touch-action:manipulation}
.pd-panel{position:absolute;left:0;right:0;bottom:0;max-height:46%;overflow:auto;background:linear-gradient(180deg,rgba(255,255,255,.88),rgba(220,244,255,.95));border-radius:calc(var(--u)*4) calc(var(--u)*4) 0 0;padding:calc(var(--u)*2);box-sizing:border-box;display:grid;grid-template-columns:repeat(2,1fr);gap:calc(var(--u)*1.4);pointer-events:auto;color:#14406a}
@media (min-width:700px){.pd-panel{grid-template-columns:repeat(4,1fr)}}
.pd-item{font-family:inherit;border:none;border-radius:calc(var(--u)*3);background:#fff;padding:calc(var(--u)*1.4);cursor:pointer;font-weight:900;font-size:calc(var(--u)*3);color:#14406a;box-shadow:0 calc(var(--u)*.5) 0 #9acaea;display:flex;flex-direction:column;gap:calc(var(--u)*.3);text-align:start;align-items:flex-start}
.pd-item.can{background:linear-gradient(180deg,#b8ffd0,#7af0a0)}.pd-item small{font-size:calc(var(--u)*2.5);font-weight:700;opacity:.85}
.pd-race{position:absolute;left:calc(var(--u)*3);right:calc(var(--u)*3);top:calc(var(--u)*14);display:flex;flex-direction:column;gap:calc(var(--u)*.8);pointer-events:none}
.pd-race div{height:calc(var(--u)*2.6);border-radius:99px;background:rgba(0,0,0,.3);border:calc(var(--u)*.3) solid #fff;overflow:hidden}.pd-race b{display:block;height:100%;border-radius:99px}
` ));
    this.root = h('div', { class: 'pd-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'pd-layer' });
    this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.fx = [];
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 2500))]); } catch (_) { /* system font */ } }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.dpr = Math.min(window.devicePixelRatio || 1, 2); this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr); this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`); }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play') return;
      const r = this.cv.getBoundingClientRect();
      const y = e.clientY - r.top;
      const L = this._layout();
      let id = null;
      this.l.areas.forEach((a, i) => { if (a.open && y >= L.top + i * L.rowH && y < L.top + (i + 1) * L.rowH) id = a.id; });
      if (this.l.tap(id)) { this.sound.play('tap'); this.fx.push({ x: e.clientX - r.left, y, t: 0, text: '💦' }); }
    });
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _soundPill() { const pill = h('button', { class: 'pd-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  showMenu() {
    this.mode = 'menu';
    this.layer.replaceChildren();
    this.sound.setMode(false);
    this.l = new Lagoon({ seed: 1 });
    this.layer.append(h('div', { class: 'pd-dim' }, h('div', { class: 'pd-card' },
      h('div', { class: 'pd-logo' }, '🦪 ', I.t('title')), h('div', { class: 'pd-small' }, I.t('how')),
      h('button', { class: 'pd-btn', onclick: () => { this.sound.play('buy'); this.start(); } }, I.t('play')),
      h('button', { class: 'pd-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  start() {
    this.l = new Lagoon({ seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play'; this.fx = [];
    this.layer.replaceChildren();
    this.sound.setMode(true);
    const ar = I.getLang() !== 'en';
    this.cashEl = h('span', {}, '');
    this.youBar = h('b', { style: 'width:0%;background:linear-gradient(180deg,#5af08a,#1aa84a)' });
    this.rivalBar = h('b', { style: 'width:0%;background:linear-gradient(180deg,#ff8a6a,#e0502a)' });
    this.youTxt = h('span', {}, ''); this.rivalTxt = h('span', {}, '');
    const back = h('button', { class: 'pd-round', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    this.items = {};
    const mk = (kind, id, name) => {
      const sub = h('small', {}, ''); const cost = h('small', {}, '');
      const b = h('button', { class: 'pd-item', onclick: () => { if (this.l.buy(kind, id)) this.sound.play('buy'); } }, h('span', {}, name), sub, cost);
      this.items[`${kind}:${id}`] = { b, sub, cost, kind, id };
      return b;
    };
    const panel = h('div', { class: 'pd-panel' },
      DEPTHS.map((d) => mk('area', d.id, `🔓 ${ar ? d.ar : d.en}`)),
      DEPTHS.map((d) => mk('manager', d.id, `🧑‍💼 ${I.t('manager')} · ${ar ? d.ar : d.en}`)),
      UPGRADES.map((u) => mk('up', u.id, `⬆️ ${ar ? u.ar : u.en}`)));
    this.layer.append(h('div', { class: 'pd-top' }, back, h('div', { class: 'pd-pill' }, this.cashEl)),
      h('div', { class: 'pd-race' }, h('div', {}, this.youBar), h('div', {}, this.rivalBar)), panel);
    this.raceTxt = h('div', { class: 'pd-pill', style: 'position:absolute;left:50%;top:calc(var(--u)*23);transform:translateX(-50%);font-size:calc(var(--u)*3)' }, '');
    this.layer.append(this.raceTxt);
    this._soundPill();
  }

  _layout() { const top = this.ch * 0.2; const bottom = this.ch * 0.54; return { top, rowH: (bottom - top) / 4, bottom }; }

  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now; this.clock += dt;
      if (this.mode === 'play') this._update(dt);
      this._draw();
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _update(dt) {
    const l = this.l;
    const ar = I.getLang() !== 'en';
    for (const e of l.step(dt)) {
      if (e.type === 'clam' && Math.random() < 0.4) this.sound.play('clam');
      if (e.type === 'sold') { this.sound.play('sold'); const i = DEPTHS.findIndex((d) => d.id === e.id); const L = this._layout(); this.fx.push({ x: this.cw * 0.5, y: L.top + i * L.rowH - 10, t: 0, text: `+$${f(e.cash)}` }); }
      if (e.type === 'won') this._won();
    }
    this.cashEl.textContent = `💵 ${f(l.cash)}`;
    this.youBar.style.width = `${Math.min(100, (l.earned / Math.max(l.rival, RIVAL_GOAL)) * 100)}%`;
    this.rivalBar.style.width = `${Math.min(100, (l.rival / Math.max(l.rival, RIVAL_GOAL)) * 100)}%`;
    this.raceTxt.textContent = `🚤 ${I.t('you')} $${f(l.earned)}  ·  🛥️ ${I.t('rival')} $${f(l.rival)}  ·  🏁 $${f(RIVAL_GOAL)}`;
    for (const k of Object.keys(this.items)) {
      const it = this.items[k];
      const c = l.cost(it.kind, it.id);
      const a = l.areas.find((x) => x.id === it.id);
      let sub = '';
      if (it.kind === 'up') sub = `${I.num(l.up[it.id])}/${I.num(UPGRADES.find((u) => u.id === it.id).max)}`;
      else if (it.kind === 'manager') sub = a.manager ? '✓' : a.open ? '' : '🔒';
      else sub = a.open ? '✓' : '';
      it.sub.textContent = sub;
      it.cost.textContent = c === null ? (it.kind === 'up' ? I.t('max') : '') : `💵 ${f(c)}${it.kind === 'manager' && !a.open ? ' 🔒' : ''}`;
      it.b.classList.toggle('can', c !== null && l.cash >= c);
    }
    for (const x of this.fx) x.t += dt;
    this.fx = this.fx.filter((x) => x.t < 1.2);
    void ar;
  }

  _won() {
    this.save.wins += 1;
    this.post({ type: 'save', save: this.save });
    this.sound.play('win');
    this.layer.append(h('div', { class: 'pd-dim' }, h('div', { class: 'pd-card' },
      h('div', { class: 'pd-title' }, I.t('won')), h('div', { class: 'pd-small' }, I.t('wonText')),
      h('button', { class: 'pd-btn', onclick: () => this.start() }, I.t('again')),
      h('button', { class: 'pd-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  _draw() {
    const g = this.g;
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const W = this.cw; const H = this.ch; const u = this.u;
    const L = this._layout();
    const sky = g.createLinearGradient(0, 0, 0, L.top); sky.addColorStop(0, '#7ad8ff'); sky.addColorStop(1, '#d8f4ff');
    g.fillStyle = sky; g.fillRect(0, 0, W, L.top + 2);
    const sea = g.createLinearGradient(0, L.top, 0, H); sea.addColorStop(0, '#3ad8e8'); sea.addColorStop(0.5, '#1a8ac8'); sea.addColorStop(1, '#0a3a78');
    g.fillStyle = sea; g.fillRect(0, L.top, W, H - L.top);
    // sun and clouds
    g.fillStyle = '#fff0a0'; g.beginPath(); g.arc(W * 0.85, L.top * 0.4, u * 5, 0, 6.3); g.fill();
    g.fillStyle = 'rgba(255,255,255,.9)'; for (const [cx, cy] of [[0.2, 0.35], [0.55, 0.25]]) { const x = ((cx * W + this.clock * 4) % (W + 100)) - 50; g.beginPath(); g.ellipse(x, cy * L.top, u * 7, u * 2.4, 0, 0, 6.3); g.fill(); }
    // the player's boat and the rival's yacht
    const bob = Math.sin(this.clock * 2) * u * 0.5;
    this._boat(g, W * 0.3, L.top - u * 1 + bob, u * 1.0, '#e8564a');
    this._yacht(g, W * 0.78, L.top - u * 1.4 - bob, u * 1.0);
    if (this.mode !== 'play' && !this.l) return;
    const l = this.l;
    // waves line
    g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = u * 0.5; g.beginPath();
    for (let x = 0; x <= W; x += 8) { const y = L.top + Math.sin(x * 0.04 + this.clock * 2) * u * 0.5; if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); }
    g.stroke();
    // the areas as layers down the water
    l.areas.forEach((a, i) => {
      const y0 = L.top + i * L.rowH;
      const y1 = y0 + L.rowH;
      g.fillStyle = a.open ? `rgba(0,30,70,${0.05 + i * 0.1})` : 'rgba(0,0,0,.45)';
      g.fillRect(0, y0, W, L.rowH);
      g.fillStyle = 'rgba(255,255,255,.5)'; g.font = `900 ${u * 3}px Tajawal, system-ui`; g.textAlign = 'start';
      g.fillText(`${I.getLang() === 'en' ? a.en : a.ar}${a.manager ? ' 🧑‍💼' : ''}${a.open ? '' : ' 🔒'}`, u * 2, y0 + u * 3.6);
      if (!a.open) return;
      // seabed with clams, the basket and the diving bell cable
      g.fillStyle = ['#e8d098', '#c8a8d8', '#9a8aa8', '#4a4a6a'][i]; g.fillRect(0, y1 - u * 1.4, W, u * 1.4);
      const bx = W * 0.3;
      g.strokeStyle = '#d8d8e8'; g.lineWidth = u * 0.3; g.beginPath(); g.moveTo(bx, L.top); g.lineTo(bx, y1 - u * 2); g.stroke();
      // basket
      g.fillStyle = '#b8803a'; g.beginPath(); g.roundRect(bx + u * 1.4, y1 - u * 4.2, u * 4.6, u * 3.2, u * 0.6); g.fill();
      g.fillStyle = '#fff'; for (let k = 0; k < Math.min(a.basket, 6); k++) { g.beginPath(); g.arc(bx + u * 2.4 + k * u * 0.7, y1 - u * 4.4, u * 0.38, 0, 6.3); g.fill(); }
      // diving bell
      const bellY = a.bellPhase === 'up' ? y1 - u * 5 - (y1 - u * 5 - L.top) * Math.min(1, a.bellT / l.bellTime) : a.bellPhase === 'back' ? L.top + (y1 - u * 5 - L.top) * Math.min(1, a.bellT / (l.bellTime * 0.6)) : y1 - u * 5;
      g.fillStyle = '#ffd23a'; g.strokeStyle = '#a87a0a'; g.lineWidth = u * 0.3; g.beginPath(); g.arc(bx, bellY, u * 1.7, Math.PI, 0); g.lineTo(bx + u * 1.7, bellY + u * 1.2); g.lineTo(bx - u * 1.7, bellY + u * 1.2); g.closePath(); g.fill(); g.stroke();
      if (a.bellLoad) { g.fillStyle = '#fff'; g.beginPath(); g.arc(bx, bellY + u * 0.4, u * 0.8, 0, 6.3); g.fill(); }
      // clams and divers
      a.divers.forEach((d, k) => {
        const cx = W * (0.46 + (k % 6) * 0.08);
        const top = y0 + u * 4;
        const bottom = y1 - u * 3.4;
        const prog = d.phase === 'down' ? Math.min(1, d.t / a.clam) : 1 - Math.min(1, d.t / 1.1);
        const x = d.phase === 'down' ? cx : cx + (bx - cx) * Math.min(1, d.t / 1.1) * 0 + 0;
        const y = top + (bottom - top) * prog;
        g.fillStyle = '#fff4e8'; g.beginPath(); g.ellipse(cx, bottom + u * 1.2, u * 1.1, u * 0.7, 0, 0, 6.3); g.fill();
        g.strokeStyle = '#a8a0b8'; g.lineWidth = u * 0.2; g.stroke();
        if (d.phase === 'down' && d.t >= a.clam * 0.85) { g.fillStyle = '#fff'; g.beginPath(); g.arc(cx, bottom + u * 0.9, u * 0.35, 0, 6.3); g.fill(); }
        this._diver(g, x, y, u * 0.9, d.has, k);
      });
      void bx;
    });
    // floating text
    g.textAlign = 'center'; g.font = `900 ${u * 4}px Tajawal, system-ui`;
    for (const x of this.fx) { g.globalAlpha = 1 - x.t / 1.2; g.fillStyle = '#fff'; g.strokeStyle = 'rgba(0,40,80,.9)'; g.lineWidth = u * 0.8; g.strokeText(x.text, x.x, x.y - x.t * u * 6); g.fillText(x.text, x.x, x.y - x.t * u * 6); }
    g.globalAlpha = 1;
  }

  _boat(g, x, y, s, c) {
    g.fillStyle = c; g.beginPath(); g.moveTo(x - s * 9, y - s * 3); g.lineTo(x + s * 9, y - s * 3); g.lineTo(x + s * 6, y + s * 2); g.lineTo(x - s * 6, y + s * 2); g.closePath(); g.fill();
    g.fillStyle = '#f4f4f4'; g.fillRect(x - s * 3, y - s * 7, s * 6, s * 4);
    g.fillStyle = '#3a6ab8'; g.fillRect(x - s * 2, y - s * 6, s * 1.6, s * 1.6); g.fillRect(x + s * 0.4, y - s * 6, s * 1.6, s * 1.6);
  }

  _yacht(g, x, y, s) {
    g.fillStyle = '#f4f4f8'; g.beginPath(); g.moveTo(x - s * 12, y - s * 3); g.lineTo(x + s * 11, y - s * 3); g.lineTo(x + s * 14, y - s * 6); g.lineTo(x + s * 8, y + s * 2); g.lineTo(x - s * 10, y + s * 2); g.closePath(); g.fill();
    g.fillStyle = '#2a2f4a'; g.fillRect(x - s * 8, y - s * 8, s * 12, s * 5);
    g.fillStyle = '#ffd23a'; g.fillRect(x - s * 6, y - s * 7, s * 8, s * 1.4);
    g.fillStyle = '#e8564a'; g.fillRect(x + s * 2, y - s * 12, s * 0.7, s * 4); g.fillRect(x + s * 2.7, y - s * 12, s * 3, s * 1.6);
  }

  _diver(g, x, y, s, has, k) {
    const sw = Math.sin(this.clock * 8 + k) * s * 0.4;
    g.fillStyle = '#2a4a8a'; g.beginPath(); g.ellipse(x, y, s * 0.9, s * 1.4, 0, 0, 6.3); g.fill();
    g.fillStyle = '#f2c9a0'; g.beginPath(); g.arc(x, y - s * 1.5, s * 0.8, 0, 6.3); g.fill();
    g.fillStyle = '#ffd23a'; g.fillRect(x - s * 0.8, y - s * 1.9, s * 1.6, s * 0.4);
    g.strokeStyle = '#2a4a8a'; g.lineWidth = s * 0.5; g.lineCap = 'round'; g.beginPath(); g.moveTo(x - s * 0.4, y + s * 1.2); g.lineTo(x - s * 0.9 + sw, y + s * 2.4); g.moveTo(x + s * 0.4, y + s * 1.2); g.lineTo(x + s * 0.9 - sw, y + s * 2.4); g.stroke();
    if (has) { g.fillStyle = '#fff'; g.beginPath(); g.arc(x + s * 1.3, y, s * 0.5, 0, 6.3); g.fill(); }
    g.fillStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.arc(x + s * 0.8, y - s * 3 - ((this.clock * 3 + k) % 1) * s * 2, s * 0.25, 0, 6.3); g.fill();
  }

  pause() { this.sound.suspend(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.PearlDivers = api;
export default api;
