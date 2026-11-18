// «مبدع الذكاء» — Creator Tycoon. Entry: window.CreatorTycoon.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Casual idle-clicker: tap PHOTO / VIDEO / GAME, stop the swinging needle in the green zone for a MASTERPIECE (cash and goal
// stars) or get funny AI SLOP that goes in the trash. Star goals promote you from intern to the board of directors; streaks
// multiply cash, client orders give bonus stars, events (trend, server lag) shake things up, and a shop sells upgrades.
// DOM only, art made from emoji and gradients, sound made in code. No network, no real brands, nothing lost for good.
import { Studio, RANKS, KINDS, SHOP, normalizeSave } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['مبدع الذكاء', 'AI Creator'], play: ['يلا نبدأ', 'Start'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], again: ['من الأول', 'Play again'],
  stop: ['وقّف!', 'STOP!'], make: ['اصنع', 'Make'], tapGreen: ['وقّف المؤشر في المنطقة الخضرا!', 'Stop the needle in the green zone!'],
  master: ['تحفة! 🌟', 'MASTERPIECE! 🌟'], ok: ['كويس', 'Not bad'], slop: ['زبالة ذكاء اصطناعي! 🗑️', 'AI SLOP! 🗑️'],
  promoted: ['ترقية من المدير!', 'Promoted by the CEO!'], shop: ['المتجر', 'Shop'], goal: ['هدف النجوم', 'Star goal'], streak: ['سلسلة', 'Streak'],
  order: ['طلب عميل', 'Client order'], trend: ['ترند! الكاش ×٢ 📈', 'Trending! Cash ×2 📈'], lag: ['السيرفر بطيء.. المؤشر أبطأ 🐢', 'Server lag.. the needle is slower 🐢'],
  won: ['وصلت لمجلس الإدارة! 🎉', 'You reached the board! 🎉'], wonText: ['بقيت أنجح مبدع في الشركة.', 'You are the top creator of the company.'],
  masters: ['تحف', 'Masterpieces'], trash: ['زبالة', 'Slop'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], max: ['أقصى', 'Max'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], busy: ['كمّل اللي بتعمله', 'Finish the one in progress'],
};
const I = makeI18n(S);
const OFFICE = ['🪑', '💺', '🖥️', '🏢', '🏙️', '👑'];

class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'master': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.06, 0.3, 0.13)); break;
      case 'ok': this.tone('triangle', hz(72), t, 0.15, 0.1); break;
      case 'slop': this.slide('sawtooth', 300, 80, t, 0.4, 0.08); this.noise(t, 0.2, 0.06, 'lowpass', 400); break;
      case 'tap': this.tone('sine', 640, t, 0.05, 0.07); break;
      case 'coin': this.tone('square', hz(88), t, 0.08, 0.05); this.tone('square', hz(95), t + 0.07, 0.12, 0.05); break;
      case 'promote': [0, 4, 7, 12, 16, 19].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.09, 0.5, 0.13)); break;
      case 'event': this.tone('sine', hz(84), t, 0.2, 0.1); this.tone('sine', hz(79), t + 0.15, 0.25, 0.1); break;
      case 'tick': this.tone('sine', hz(96), t, 0.03, 0.03); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setTune(null); return; } this.setTune({ tempo: 108, beats: 16, wave: 'triangle', vol: 0.06, notes: [[0, 64, 1], [1, 67, 1], [2, 71, 1], [3, 67, 1], [4, 62, 1], [5, 66, 1], [6, 69, 1], [7, 66, 1], [8, 60, 1], [9, 64, 1], [10, 67, 2], [12, 62, 1], [13, 65, 1], [14, 69, 2], [0, 40, 2], [4, 38, 2], [8, 36, 2], [12, 38, 2]] }); }
}

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('ct-style')) document.head.append(h('style', { id: 'ct-style' }, css('ct', '#7a5ae8', '#3a2a98', '#ffe04a') + `
.ct-root{background:linear-gradient(180deg,#cfe0ff,#f4e8ff);color:#2a2060;touch-action:manipulation}
.ct-scroll{position:absolute;inset:0;overflow:auto;padding:calc(var(--u)*14) calc(var(--u)*3) calc(var(--u)*4);box-sizing:border-box;display:flex;flex-direction:column;gap:calc(var(--u)*2.4);align-items:center}
.ct-glass{background:rgba(255,255,255,.65);backdrop-filter:blur(6px);border:calc(var(--u)*.4) solid rgba(255,255,255,.9);border-radius:calc(var(--u)*4);padding:calc(var(--u)*2.4);width:100%;max-width:calc(var(--u)*110);box-sizing:border-box;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(60,40,140,.2);color:#2a2060}
.ct-row{display:flex;gap:calc(var(--u)*2);width:100%;align-items:center;justify-content:space-between}
.ct-make{flex:1;font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.6);color:#fff;border:none;border-radius:calc(var(--u)*3.4);padding:calc(var(--u)*2.4) calc(var(--u)*1);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);background:linear-gradient(180deg,#8a6af0,#5a3ad0);box-shadow:0 calc(var(--u)*.8) 0 #2a1a80}
.ct-make i{font-style:normal;font-size:calc(var(--u)*9)}.ct-make small{font-size:calc(var(--u)*2.6);opacity:.9}
.ct-make:active{transform:translateY(calc(var(--u)*.5))}.ct-make:disabled{opacity:.45}
.ct-meter{position:relative;height:calc(var(--u)*9);border-radius:99px;background:linear-gradient(90deg,#e8564a,#f0a02a 30%,#f0a02a 70%,#e8564a);border:calc(var(--u)*.5) solid #fff;overflow:hidden;width:100%}
.ct-zone{position:absolute;top:0;bottom:0;background:linear-gradient(180deg,#5af08a,#1aa84a);border-left:calc(var(--u)*.4) solid #fff;border-right:calc(var(--u)*.4) solid #fff}
.ct-needle{position:absolute;top:-8%;bottom:-8%;width:calc(var(--u)*1.2);background:#2a2060;border-radius:99px;box-shadow:0 0 calc(var(--u)*1) #fff}
.ct-stop{width:100%;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*2.2);cursor:pointer;background:linear-gradient(180deg,#ff6a8a,#e0204a);box-shadow:0 calc(var(--u)*1) 0 #901030}
.ct-stop:disabled{opacity:.4}
.ct-gbar{flex:1;height:calc(var(--u)*3);border-radius:99px;background:rgba(0,0,0,.15);overflow:hidden}.ct-gbar b{display:block;height:100%;background:linear-gradient(180deg,#ffe04a,#f0a02a);border-radius:99px}
.ct-feed{font-size:calc(var(--u)*4.2);font-weight:900;text-align:center;min-height:calc(var(--u)*8)}
.ct-big{font-size:calc(var(--u)*13);line-height:1}
.ct-shop{display:grid;grid-template-columns:1fr 1fr;gap:calc(var(--u)*1.6);width:100%}
.ct-item{font-family:inherit;border:none;border-radius:calc(var(--u)*3);background:#fff;padding:calc(var(--u)*1.6);cursor:pointer;display:flex;flex-direction:column;gap:calc(var(--u)*.3);align-items:flex-start;text-align:start;font-weight:900;font-size:calc(var(--u)*3);color:#2a2060;box-shadow:0 calc(var(--u)*.5) 0 #b8a8f0}
.ct-item.can{background:linear-gradient(180deg,#b8ffd0,#7af0a0)}.ct-item small{font-size:calc(var(--u)*2.5);font-weight:700;opacity:.8}
.ct-banner{width:100%;max-width:calc(var(--u)*110);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6);font-weight:900;font-size:calc(var(--u)*3.6);text-align:center;color:#fff}
@keyframes ctpop{0%{transform:scale(.4);opacity:0}60%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}}.ct-pop{animation:ctpop .35s}
@keyframes cttrash{to{transform:translateY(calc(var(--u)*14)) rotate(40deg) scale(.4);opacity:0}}.ct-trash{animation:cttrash .8s forwards}
` ));
    this.root = h('div', { class: 'ct-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'ct-layer' });
    this.mode = 'menu';
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 2500))]); } catch (_) { /* system font */ } }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`); }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this._onKey = (e) => { if (this.mode === 'play' && (e.key === ' ' || e.key === 'Enter') && this.s.cur) { e.preventDefault(); this._stop(); } };
    window.addEventListener('keydown', this._onKey);
  }

  _soundPill() { const pill = h('button', { class: 'ct-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  showMenu() {
    this.mode = 'menu';
    this.layer.replaceChildren();
    this.sound.setMode(false);
    this.layer.append(h('div', { class: 'ct-dim' }, h('div', { class: 'ct-card' },
      h('div', { class: 'ct-logo' }, '🎨 ', I.t('title')), h('div', { class: 'ct-small' }, I.t('tapGreen')),
      h('div', { class: 'ct-small' }, `🏆 ${I.t('masters')}: ${I.num(this.save.best)}`),
      h('button', { class: 'ct-btn', onclick: () => { this.sound.play('tap'); this.start(); } }, I.t('play')),
      h('button', { class: 'ct-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  start() {
    this.s = new Studio({ seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play';
    this.layer.replaceChildren();
    this.sound.setMode(true);
    const ar = I.getLang() !== 'en';
    this.el1 = {
      cash: h('span', {}, ''), rank: h('span', {}, ''), office: h('span', { class: 'ct-big' }, ''), gbar: h('b', { style: 'width:0%' }), gtxt: h('span', {}, ''), streak: h('span', {}, ''),
      feed: h('div', { class: 'ct-feed' }, I.t('tapGreen')), zone: h('div', { class: 'ct-zone' }), needle: h('div', { class: 'ct-needle', style: 'left:0%' }), banner: h('div', { class: 'ct-banner', style: 'display:none' }),
      order: h('div', { class: 'ct-banner', style: 'display:none;background:linear-gradient(180deg,#ff9a4a,#e0602a)' }), stats: h('span', { class: 'ct-small' }, ''),
    };
    this.makeBtns = Object.keys(KINDS).map((k) => h('button', { class: 'ct-make', onclick: () => this._make(k) }, h('i', {}, KINDS[k].icon), ar ? KINDS[k].ar : KINDS[k].en, h('small', {}, `+${KINDS[k].stars}⭐ · $${KINDS[k].cash}`)));
    this.stopBtn = h('button', { class: 'ct-stop', onclick: () => this._stop() }, I.t('stop'));
    this.shopEls = {};
    const shop = h('div', { class: 'ct-shop' }, SHOP.map((it) => {
      const lvl = h('span', {}, ''); const cost = h('small', {}, '');
      const b = h('button', { class: 'ct-item', onclick: () => { if (this.s.buy(it.id)) this.sound.play('promote'); } }, h('span', {}, ar ? it.ar : it.en), h('small', {}, ar ? it.desc[0] : it.desc[1]), lvl, cost);
      this.shopEls[it.id] = { b, lvl, cost };
      return b;
    }));
    const back = h('button', { class: 'ct-round', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    this.layer.append(h('div', { class: 'ct-top' }, back, h('div', { class: 'ct-pill' }, this.el1.cash), h('div', { class: 'ct-pill' }, this.el1.streak)),
      h('div', { class: 'ct-scroll' },
        h('div', { class: 'ct-glass' }, h('div', { class: 'ct-row' }, this.el1.office, h('div', { style: 'flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*1);padding:0 calc(var(--u)*2)' }, h('b', { style: 'font-size:calc(var(--u)*5)' }, this.el1.rank), h('div', { class: 'ct-row' }, h('div', { class: 'ct-gbar' }, this.el1.gbar), this.el1.gtxt)))),
        this.el1.order, this.el1.banner,
        h('div', { class: 'ct-glass' }, h('div', { class: 'ct-row' }, this.makeBtns), h('div', { style: 'height:calc(var(--u)*2)' }), h('div', { class: 'ct-meter' }, this.el1.zone, this.el1.needle), h('div', { style: 'height:calc(var(--u)*1.6)' }), this.stopBtn, this.el1.feed),
        h('div', { class: 'ct-glass' }, h('b', {}, I.t('shop')), h('div', { style: 'height:calc(var(--u)*1.4)' }), shop, h('div', { style: 'height:calc(var(--u)*1)' }), this.el1.stats)));
    this._soundPill();
  }

  _make(k) { if (this.s.cur) { this.el1.feed.textContent = I.t('busy'); return; } this.s.make(k); this.sound.play('tap'); this.el1.feed.textContent = I.t('tapGreen'); }
  _stop() { const r = this.s.stop(); if (!r) return; this.sound.play(r); this._show(r); }

  _show(r, kind) {
    const f = this.el1.feed;
    const k = kind || this.lastKind || 'photo';
    f.replaceChildren();
    if (r === 'slop') { f.append(h('div', { class: 'ct-big ct-trash' }, ['🤪', '🦄', '👽', '🐙'][Math.floor(Math.random() * 4)]), I.t('slop')); } else f.append(h('div', { class: 'ct-big ct-pop' }, r === 'master' ? '🌟' : '👍'), r === 'master' ? I.t('master') : I.t('ok'));
    void k;
  }

  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      if (this.mode === 'play') this._update(dt);
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _update(dt) {
    const s = this.s;
    const ar = I.getLang() !== 'en';
    for (const e of s.step(dt)) {
      switch (e.type) {
        case 'promote': this.sound.play('promote'); this.el1.feed.textContent = `🎉 ${I.t('promoted')} ${ar ? RANKS[e.rank].ar : RANKS[e.rank].en}`; break;
        case 'event': this.sound.play('event'); break;
        case 'order': this.sound.play('event'); break;
        case 'auto': this.sound.play('coin'); break;
        case 'won': this._won(); break;
        default: break;
      }
    }
    const el = this.el1;
    el.cash.textContent = `💵 ${I.num(Math.round(s.cash))}`;
    const r = RANKS[s.rank];
    el.rank.textContent = ar ? r.ar : r.en;
    el.office.textContent = OFFICE[s.rank];
    el.gbar.style.width = r.goal ? `${Math.min(100, Math.round((s.stars / r.goal) * 100))}%` : '100%';
    el.gtxt.textContent = r.goal ? `⭐ ${I.num(s.stars)}/${I.num(r.goal)}` : '👑';
    el.streak.textContent = `🔥 ${I.num(s.streak)} ×${s.mult.toFixed(1)}`;
    el.stats.textContent = `${I.t('masters')} ${I.num(s.masterpieces)} · ${I.t('trash')} ${I.num(s.slop)}`;
    const z = s.zone;
    el.zone.style.left = `${(z.c - z.w / 2) * 100}%`;
    el.zone.style.width = `${z.w * 100}%`;
    el.needle.style.left = s.cur ? `${s.cur.pos * 100}%` : '0%';
    el.needle.style.opacity = s.cur ? '1' : '0.25';
    this.stopBtn.disabled = !s.cur;
    for (const b of this.makeBtns) b.disabled = !!s.cur;
    el.banner.style.display = s.event ? 'block' : 'none';
    if (s.event) { el.banner.textContent = s.event.id === 'trend' ? I.t('trend') : I.t('lag'); el.banner.style.background = s.event.id === 'trend' ? 'linear-gradient(180deg,#3ac86a,#1a8a40)' : 'linear-gradient(180deg,#8a8aa0,#5a5a78)'; }
    el.order.style.display = s.order ? 'block' : 'none';
    if (s.order) el.order.textContent = `📦 ${I.t('order')}: ${KINDS[s.order.kind].icon} ×${I.num(s.order.left)} → +${I.num(s.order.bonus)}⭐ (${I.num(Math.ceil(s.order.time))}s)`;
    for (const it of SHOP) {
      const c = s.upgradeCost(it.id);
      const x = this.shopEls[it.id];
      x.lvl.textContent = `${I.num(s.up[it.id])}/${I.num(it.max)}`;
      x.cost.textContent = c === null ? I.t('max') : `💵 ${I.num(c)}`;
      x.b.classList.toggle('can', c !== null && s.cash >= c);
    }
  }

  _won() {
    const s = this.s;
    this.save.best = Math.max(this.save.best, s.masterpieces);
    this.save.wins += 1;
    this.post({ type: 'save', save: this.save });
    this.sound.play('promote');
    this.layer.append(h('div', { class: 'ct-dim' }, h('div', { class: 'ct-card' },
      h('div', { class: 'ct-title' }, '👑 ', I.t('won')), h('div', { class: 'ct-small' }, I.t('wonText')),
      h('div', { class: 'ct-pill' }, `${I.t('masters')} ${I.num(s.masterpieces)} · ${I.t('trash')} ${I.num(s.slop)}`),
      h('button', { class: 'ct-btn', onclick: () => this.start() }, I.t('again')),
      h('button', { class: 'ct-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  pause() { this.sound.suspend(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.CreatorTycoon = api;
export default api;
