// «غوّاصو اللؤلؤ» — Pearl Divers. Entry: window.PearlDivers.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Built from the owner's video: a cut-away of a tropical lagoon with ledges stacked downward. Tap and the diver goes down, opens
// the clam, carries the pearl to the basket; the diving bell on its rope lifts the basket to your stall boat where it is sold and
// coins fly to your cash. Per ledge: HIRE (a diver who works alone) and an up-arrow x3 button; below the last ledge NEW LEDGE.
// A bar at the top races your wealth to the rival's fortune on the pink yacht. 2D canvas, art and sound made in code.
// No network, nothing lost for good.
import { Lagoon, LEDGES, RIVAL_GOAL, MAX_HIRE, MAX_UP, BELL_TIME, UP_MULT, recordBest, normalizeSave, recordZone, pearlAlbum, depthOf, ZONE_THEMES } from './sim.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { loadArt } from '../../cozy_kit/art.js';
import { VoiceCoach } from '../../cozy_kit/voice.js';

const PEARL_CLIPS = { go: 2, pickup: 2, charge: 2, win: 2 };

const S = {
  title: ['غوّاصو لؤلؤ البحر الأحمر', 'Red Sea Pearl Divers'], play: ['يلا نغوص', 'Dive in'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], again: ['من الأول', 'Play again'],
  how: ['دوس عشان الغوّاص ينزل — وظّف غوّاصين وافتح أعماق جديدة عشان تعدّي المنافس', 'Tap to dive — hire divers and open new ledges to beat the rival'],
  you: ['أنت', 'YOU'], hire: ['وظّف', 'HIRE'], ledge: ['عمق جديد', 'NEW LEDGE'], max: ['أقصى', 'MAX'], tapDive: ['دوس عشان يغوص!', 'TAP TO DIVE!'],
  allMine: ['كله بتاعي!', 'ALL MINE!'], youWin: ['كسبت!', 'YOU WIN!'], won: ['عدّيت المنافس! 🏆', 'You overtook the rival! 🏆'], wonText: ['بقيت أغنى تاجر لؤلؤ على ساحل البحر الأحمر.', 'You are the richest pearl trader on the Red Sea coast.'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
  album: ['ألبوم اللؤلؤ', 'Pearl album'], albumSub: ['كل عمق جديد ليه كنز وحكاية — افتح الأعماق عشان تجمعهم!', 'Every new depth hides a treasure and a tale — open the depths to collect them!'],
  lockedFact: ['لسه مقفول — اغوص أعمق عشان تفتحه!', 'Still locked — dive deeper to open it!'], back: ['رجوع', 'Back'],
  depth: ['متر', 'm deep'],
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

/** Money is Egyptian pounds, never dollars. */
const CUR = () => (I.getLang() === 'en' ? 'EGP' : 'ج.م');

const f = (n) => (n >= 1e6 ? `${(n / 1e6).toFixed(2)}M` : n >= 1e4 ? `${(n / 1e3).toFixed(1)}K` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}K` : String(Math.round(n)));
// Optional generated pictures (assets/games/pearl_divers/art/*.webp). Each one is optional: a missing picture is drawn in code as before.
const ART_NAMES = ['sky_lagoon', 'island', 'stall_boat', 'yacht', 'rival', 'diver', 'clam_open', 'clam_closed', 'bell', 'basket', 'coral', 'water_a', 'water_b'];
const ROCK = ['#e6c9a0', '#d8a0b8', '#a898c8', '#6a5a98', '#4a4a88', '#2e2a68'];
const WATER = [['#5ae0ee', '#2aa8d0'], ['#3ab8dc', '#1a80b8'], ['#2a88c0', '#14589a'], ['#1a60a0', '#0a3a78'], ['#124a8a', '#082a66'], ['#0c3670', '#051e4e']];

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.art = {};
    loadArt(this.base, ART_NAMES).then((a) => { this.art = a; this._rivalFace(); });
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.voice = new VoiceCoach({ base: this.base, lang: I.getLang(), girl: config.gender === 'girl', clips: PEARL_CLIPS });
    this.voice.setMuted(this.sound.muted);
    this._voiceArm = () => this.voice.unlock();
    document.addEventListener('pointerdown', this._voiceArm, true);
    if (!document.getElementById('pd-style')) document.head.append(h('style', { id: 'pd-style' }, css('pd', '#2ab8d8', '#1a5a98', '#ffe04a') + `
.pd-root{background:#1a6aa8;touch-action:manipulation}
.pd-hud{position:absolute;left:50%;transform:translateX(-50%);top:calc(var(--u)*1.2);width:min(94%,calc(var(--u)*62));display:flex;flex-direction:column;gap:calc(var(--u)*1.2);pointer-events:none;direction:ltr}
.pd-cashrow{display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*2);position:relative}
.pd-cash{display:flex;align-items:center;gap:calc(var(--u)*1.2);background:linear-gradient(180deg,#1a78a8,#0e4a78);border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*.4) calc(var(--u)*3.4) calc(var(--u)*.4) calc(var(--u)*.6);font-weight:900;font-size:calc(var(--u)*6);color:#ffe04a;-webkit-text-stroke:calc(var(--u)*.25) #5a3a00;min-width:calc(var(--u)*30);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4)}
.pd-cash i{width:calc(var(--u)*7);height:calc(var(--u)*7);border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#e6eaf4 60%,#aab4cc);box-shadow:inset 0 0 calc(var(--u)*.6) #7a88aa;display:block}
.pd-menu{position:absolute;right:0;top:0;pointer-events:auto;width:calc(var(--u)*8.6);height:calc(var(--u)*8.6);border-radius:50%;border:calc(var(--u)*.5) solid #fff;background:linear-gradient(180deg,#1a78a8,#0e4a78);color:#fff;font-size:calc(var(--u)*4.4);cursor:pointer;font-family:inherit;padding:0}
.pd-race{display:flex;align-items:center;gap:calc(var(--u)*1)}
.pd-you{background:#1ab8a8;border:calc(var(--u)*.4) solid #fff;border-radius:calc(var(--u)*1.2);color:#fff;font-weight:900;font-size:calc(var(--u)*2.8);padding:calc(var(--u)*.3) calc(var(--u)*1.4);-webkit-text-stroke:calc(var(--u)*.15) #0a4a50}
.pd-track{position:relative;flex:1;height:calc(var(--u)*4.4);border-radius:99px;background:linear-gradient(180deg,#0a3a5a,#10547a);border:calc(var(--u)*.45) solid #fff;overflow:visible}
.pd-track b{position:absolute;left:0;top:0;bottom:0;border-radius:99px;background:linear-gradient(180deg,#7af8e8,#1ac8c0)}
.pd-track span{position:absolute;right:calc(var(--u)*5.4);top:50%;transform:translateY(-50%);font-weight:900;font-size:calc(var(--u)*2.4);color:#fff}
.pd-track em{position:absolute;right:calc(var(--u)*-1.4);top:50%;transform:translateY(-50%);font-style:normal;font-size:calc(var(--u)*5);background:#2a3a5a;border:calc(var(--u)*.4) solid #fff;border-radius:50%;width:calc(var(--u)*7);height:calc(var(--u)*7);display:flex;align-items:center;justify-content:center}
.pd-track em img{width:100%;height:100%;border-radius:50%;object-fit:cover;object-position:50% 20%;display:block}
.pd-track u{position:absolute;top:50%;transform:translate(-50%,-50%);text-decoration:none;font-size:calc(var(--u)*4.4)}
.pd-btns{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.pd-shopb{position:absolute;pointer-events:auto;font-family:inherit;font-weight:900;border:calc(var(--u)*.5) solid #fff;border-radius:999px;color:#fff;cursor:pointer;display:flex;align-items:center;gap:calc(var(--u)*1.2);padding:calc(var(--u)*.5) calc(var(--u)*2) calc(var(--u)*.5) calc(var(--u)*1.2);font-size:calc(var(--u)*3.2);box-shadow:0 calc(var(--u)*.7) calc(var(--u)*1.4) rgba(0,20,40,.45);-webkit-text-stroke:calc(var(--u)*.15) rgba(0,0,0,.5);white-space:nowrap;min-height:calc(var(--u)*7.4)}
.pd-shopb i{font-style:normal;font-size:calc(var(--u)*4.4)}.pd-shopb b{background:rgba(0,0,0,.35);border-radius:999px;padding:calc(var(--u)*.4) calc(var(--u)*1.6);-webkit-text-stroke:0}
.pd-hire{background:linear-gradient(180deg,#ff8a5a,#e04a2a)}.pd-upb{background:linear-gradient(180deg,#ffd23a,#f0902a);color:#3a2000;-webkit-text-stroke:0}
.pd-led{background:linear-gradient(180deg,#a86aff,#6a38d0)}
.pd-shopb.off{filter:grayscale(.65) brightness(.8)}.pd-shopb.can{animation:pdpulse 1s infinite}.pd-shopb:active{transform:scale(.96)}
@keyframes pdpulse{50%{transform:scale(1.06)}}
.pd-win{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(5,30,60,.55);pointer-events:auto;padding:calc(var(--u)*3);box-sizing:border-box}
.pd-wcard{width:calc(var(--u)*60);max-width:100%;background:linear-gradient(180deg,#2ad0c0,#0e90a0);border:calc(var(--u)*.9) solid #fff;border-radius:calc(var(--u)*4);padding:calc(var(--u)*2.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);box-shadow:0 calc(var(--u)*1.4) calc(var(--u)*4) rgba(0,0,0,.5);color:#fff}
.pd-wt{font-size:calc(var(--u)*8.4);font-weight:900;color:#ffe04a;-webkit-text-stroke:calc(var(--u)*.7) #0a3a50;paint-order:stroke fill;text-align:center;line-height:1.05}
.pd-stars{font-size:calc(var(--u)*13);letter-spacing:calc(var(--u)*1)}.pd-stars span:nth-child(2){font-size:calc(var(--u)*17);vertical-align:calc(var(--u)*2)}
.pd-mon{display:flex;align-items:center;gap:calc(var(--u)*1.4);background:linear-gradient(180deg,#1a78a8,#0e4a78);border:calc(var(--u)*.5) solid #fff;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*6);color:#ffe04a}
.pd-album{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2);max-height:52vh;overflow-y:auto;width:100%}
.pd-acard{background:rgba(255,255,255,.14);border:calc(var(--u)*.4) solid rgba(255,255,255,.55);border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center;color:#fff}
.pd-acard .ic{font-size:calc(var(--u)*8);line-height:1}
.pd-acard .ic.shadow{filter:brightness(0);opacity:.55}
.pd-acard .nm{font-weight:900;font-size:calc(var(--u)*3.4)}
.pd-acard .alt{font-size:calc(var(--u)*2.6);opacity:.85}
.pd-acard .fact{font-size:calc(var(--u)*2.8);line-height:1.5}
.pd-acard .dep{font-size:calc(var(--u)*2.4);opacity:.8}
` ));
    this.root = h('div', { class: 'pd-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'pd-layer' });
    this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.fx = []; this.coins = []; this.cam = 0;
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.dpr = Math.min(window.devicePixelRatio || 1, 2); this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr); this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`); }

  /** The play column (like the phone in the video): world positions inside it. */
  _lay() {
    const Wc = Math.min(this.cw, this.ch * 0.64);
    const x0 = (this.cw - Wc) / 2;
    const surf = this.ch * 0.3;
    const rowH = Math.max(this.ch * 0.27, Wc * 0.46);
    return { Wc, x0, surf, rowH, u: Wc / 56 };
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play') return;
      const r = this.cv.getBoundingClientRect();
      const L = this._lay();
      const wy = e.clientY - r.top + this.cam;
      let id = null;
      this.l.areas.forEach((a, i) => { if (a.isOpen && wy >= L.surf + i * L.rowH && wy < L.surf + (i + 1) * L.rowH) id = a.id; });
      this._tap(id, e.clientX - r.left, e.clientY - r.top);
    });
    this._onKey = (e) => { if (this.mode === 'play' && (e.key === ' ' || e.key === 'Enter') && !(e.target && e.target.tagName === 'BUTTON')) { e.preventDefault(); this._tap(null); } };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _tap(id, x, y) { if (this.l.tap(id)) { this.sound.play('tap'); this.tappedOnce = true; if (x !== undefined) this.fx.push({ x, y, t: 0, text: '💦' }); } }

  _soundPill() { const pill = h('button', { class: 'pd-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  showMenu() {
    this.mode = 'menu';
    this.layer.replaceChildren();
    this.sound.setMode(false);
    this.l = new Lagoon({ seed: 1 }); this.cam = 0;
    this.layer.append(h('div', { class: 'pd-dim' }, h('div', { class: 'pd-card' },
      h('div', { class: 'pd-logo' }, '🦪 ', I.t('title')), h('div', { class: 'pd-small' }, I.t('how')),
      h('button', { class: 'pd-btn', onclick: () => { this.sound.play('buy'); this.start(); } }, I.t('play')),
      h('button', { class: 'pd-btn dark', onclick: () => this.showAlbum() }, '📖 ', I.t('album')),
      h('button', { class: 'pd-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  /** Pearl album: save-derived collection, one card per ladder zone.
   * Earned cards show icon + name + fact; locked cards are silhouettes and
   * the derivation (pearlAlbum) never hands their facts to this screen. */
  showAlbum() {
    this.mode = 'album';
    this.layer.replaceChildren();
    this.sound.setMode(false);
    const en = I.getLang() === 'en';
    const cards = pearlAlbum(this.save).map((e) => e.unlocked
      ? h('div', { class: 'pd-acard' },
        h('div', { class: 'ic' }, e.icon),
        h('div', { class: 'nm' }, en ? e.en : e.ar),
        h('div', { class: 'alt' }, en ? e.ar : e.en),
        h('div', { class: 'fact' }, en ? e.fact.en : e.fact.ar),
        h('div', { class: 'dep' }, `${e.depth} ${I.t('depth')}`))
      : h('div', { class: 'pd-acard' },
        h('div', { class: 'ic shadow' }, '🦪'),
        h('div', { class: 'nm' }, '🔒 ؟؟؟'),
        h('div', { class: 'fact' }, I.t('lockedFact')),
        h('div', { class: 'dep' }, `${e.depth} ${I.t('depth')}`)));
    this.layer.append(h('div', { class: 'pd-dim' }, h('div', { class: 'pd-card' },
      h('div', { class: 'pd-logo' }, '📖 ', I.t('album')), h('div', { class: 'pd-small' }, I.t('albumSub')),
      h('div', { class: 'pd-album' }, cards),
      h('button', { class: 'pd-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
    this._soundPill();
  }

  start() {
    this.voice.say('go');
    this.l = new Lagoon({ seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play'; this.fx = []; this.coins = []; this.cam = 0; this.tappedOnce = false; this.bubbleT = 3.2; this.winT = 0; this.idleT = 0;
    this.layer.replaceChildren();
    this.sound.setMode(true);
    this.cashEl = h('span', {}, '');
    this.cashBox = h('div', { class: 'pd-cash' }, h('i'), this.cashEl);
    this.fill = h('b', {}); this.goalTxt = h('span', {}, `${f(RIVAL_GOAL)} ${CUR()}`); this.coinMark = h('u', {}, '🪙');
    const menu = h('button', { class: 'pd-menu', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    this.layer.append(h('div', { class: 'pd-hud' }, h('div', { class: 'pd-cashrow' }, this.cashBox, menu),
      h('div', { class: 'pd-race' }, h('div', { class: 'pd-you' }, I.t('you')), h('div', { class: 'pd-track' }, this.fill, this.goalTxt, this.coinMark, this.rivalEm = h('em', {}, '🧔')))));
    this._rivalFace();
    this.btnLayer = h('div', { class: 'pd-btns' });
    this.layer.append(this.btnLayer);
    this.shopEls = [];
    const mk = (cls, icon, label) => { const cost = h('b', {}, ''); const lab = h('span', {}, label); const b = h('button', { class: `pd-shopb ${cls}` }, h('i', {}, icon), lab, cost); b.style.display = 'none'; this.btnLayer.append(b); return { b, cost, lab }; };
    this.l.areas.forEach((a) => { this.shopEls.push({ hire: mk('pd-hire', '📣', I.t('hire')), up: mk('pd-upb', '⬆️', `x${UP_MULT}`) }); });
    this.shopEls.forEach((s, i) => {
      const id = this.l.areas[i].id;
      s.hire.b.onclick = () => { if (this.l.buy('hire', id)) this.sound.play('buy'); };
      s.up.b.onclick = () => { if (this.l.buy('up', id)) this.sound.play('buy'); };
    });
    this.ledgeBtn = mk('pd-led', '🔒', I.t('ledge'));
    this.ledgeBtn.b.onclick = () => { const n = this.l.nextLedge; if (n && this.l.buy('area', n.id)) this.sound.play('buy'); };
    this._soundPill();
  }

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

  _rivalFace() { if (this.rivalEm && this.art.rival) this.rivalEm.replaceChildren(h('img', { src: this.art.rival.src, alt: '', draggable: 'false' })); }

  /** Draws picture [n] with its bottom-centre at (x, y), [w] wide. Returns false when the picture is not there (the caller draws it in code). */
  _pic(g, n, x, y, w, flip) {
    const im = this.art[n];
    if (!im) return false;
    const hh = w * im.naturalHeight / im.naturalWidth;
    if (flip) { g.save(); g.translate(x, 0); g.scale(-1, 1); g.drawImage(im, -w / 2, y - hh, w, hh); g.restore(); } else g.drawImage(im, x - w / 2, y - hh, w, hh);
    return true;
  }

  /** Fills the rectangle with picture [n], cropped to cover it. */
  _cover(g, n, x, y, w, hh, alpha) {
    const im = this.art[n];
    if (!im || hh <= 0) return false;
    const k = Math.max(w / im.naturalWidth, hh / im.naturalHeight);
    const sw = w / k; const sh = hh / k;
    g.save(); g.beginPath(); g.rect(x, y, w, hh); g.clip(); g.globalAlpha = alpha;
    g.drawImage(im, (im.naturalWidth - sw) / 2, (im.naturalHeight - sh) / 2, sw, sh, x, y, w, hh);
    g.restore();
    return true;
  }

  _boatPos() { const L = this._lay(); return { x: L.x0 + L.Wc * 0.27, y: L.surf - L.u * 7 - this.cam }; }
  _cashPos() { const r = this.cashBox.getBoundingClientRect(); const c = this.cv.getBoundingClientRect(); return { x: r.left - c.left + r.width * 0.2, y: r.top - c.top + r.height / 2 }; }

  _update(dt) {
    const l = this.l; const L = this._lay();
    l.step(dt);
    for (const e of l.drain()) {
      if (e.type === 'clam') this.voice.say('pickup');
      if (e.type === 'clam' && Math.random() < 0.4) this.sound.play('clam');
      if (e.type === 'buy') this.voice.say('charge');
      if (e.type === 'sold') {
        this.sound.play('sold');
        this.voice.say('charge');
        const b = this._boatPos();
        this.fx.push({ x: b.x, y: Math.max(b.y, this.u * 16), t: 0, text: `+${f(e.cash)} ${CUR()}`, big: true });
        const n = Math.min(6, 2 + Math.floor(Math.log10(Math.max(10, e.cash))));
        for (let i = 0; i < n; i++) this.coins.push({ x: b.x, y: Math.max(b.y, this.u * 16), t: -i * 0.07, dx: (Math.random() - 0.5) * this.u * 8 });
      }
      if (e.type === 'buy' && e.kind === 'up') { const i = l.areas.findIndex((a) => a.id === e.id); this.fx.push({ x: L.x0 + L.Wc * 0.82, y: L.surf + i * L.rowH - this.cam + L.rowH * 0.2, t: 0, text: `x${UP_MULT}`, big: true }); }
      if (e.type === 'buy' && e.kind === 'area') { // a new ladder rung opened: remember it in the save (feeds the pearl album)
        for (const a of l.areas) if (a.isOpen) this.save.zones = recordZone(this.save, a.id);
        this.post({ type: 'save', save: this.save });
      }
      if (e.type === 'won') this._won();
    }
    // camera follows the deepest open ledge, with room for the NEW LEDGE button
    const open = l.openCount;
    const want = Math.max(0, L.surf + open * L.rowH + L.rowH * 0.34 - this.ch);
    this.cam += (want - this.cam) * Math.min(1, dt * 2.5);
    this.cashEl.textContent = `${f(l.cash)} ${CUR()}`;
    const frac = Math.min(1, l.earned / RIVAL_GOAL);
    this.fill.style.width = `${Math.max(3, frac * 100)}%`;
    this.coinMark.style.left = `${Math.max(3, frac * 100)}%`;
    this.bubbleT -= dt;
    for (const x of this.fx) x.t += dt;
    this.fx = this.fx.filter((x) => x.t < 1.3);
    const cp = this._cashPos();
    for (const c of this.coins) { c.t += dt; if (c.t > 0) { const k = Math.min(1, c.t / 0.8); c.px = c.x + (cp.x - c.x) * k * k + c.dx * Math.sin(k * 3.14); c.py = c.y + (cp.y - c.y) * k * k - Math.sin(k * 3.14) * this.u * 6; } }
    this.coins = this.coins.filter((c) => c.t < 0.8);
    // shop buttons sit on their ledge (right side), the NEW LEDGE button under the last one
    this.shopEls.forEach((s, i) => {
      const a = l.areas[i];
      const y = L.surf + i * L.rowH - this.cam + L.rowH * 0.17;
      const vis = a.isOpen && y > this.u * 14 - L.rowH * 0.2 && y < this.ch;
      const hc = l.cost('hire', a.id); const uc = l.cost('up', a.id);
      this._place(s.hire, vis && hc !== null, L.x0 + L.Wc * 0.03, y, hc, l.cash, a.hired >= MAX_HIRE);
      // the x3 button sits AFTER the hire button's real width — never on top of its label.
      // On the narrow landscape column it may spill over the open water beside the column;
      // covering the hire label is worse. Only the screen edge caps it.
      let upX = L.x0 + L.Wc * 0.45;
      if (vis && hc !== null && uc !== null) { s.up.b.style.display = 'flex'; upX = Math.min(s.hire.b.offsetLeft + s.hire.b.offsetWidth + this.u * 1.2, this.cw - s.up.b.offsetWidth - this.u * 0.6); }
      this._place(s.up, vis && uc !== null, upX, y, uc, l.cash, a.upLvl >= MAX_UP);
      s.up.lab.textContent = `x${UP_MULT}`;
    });
    const nx = l.nextLedge;
    const ly = L.surf + open * L.rowH - this.cam - this.u * 1;
    if (nx) { this.ledgeBtn.b.style.display = 'flex'; this.ledgeBtn.b.style.left = `${L.x0 + L.Wc * 0.5 - this.ledgeBtn.b.offsetWidth / 2}px`; this.ledgeBtn.b.style.top = `${Math.min(ly, this.ch - this.u * 10)}px`; this.ledgeBtn.cost.textContent = `${f(nx.open)} ${CUR()}`; this.ledgeBtn.b.classList.toggle('off', l.cash < nx.open); this.ledgeBtn.b.classList.toggle('can', l.cash >= nx.open); this.ledgeBtn.b.querySelector('i').textContent = l.cash >= nx.open ? '🔓' : '🔒'; } else this.ledgeBtn.b.style.display = 'none';
    if (!this.tappedOnce || l.areas.every((a) => a.boost <= 0 && a.hired === 0)) this.idleT += dt; else this.idleT = 0;
  }

  _place(el, vis, x, y, cost, cash, maxed) {
    el.b.style.display = vis ? 'flex' : 'none';
    if (!vis) return;
    el.b.style.left = `${x}px`; el.b.style.top = `${y}px`;
    el.cost.textContent = `${f(cost)} ${CUR()}`;
    el.b.classList.toggle('off', cash < cost); el.b.classList.toggle('can', cash >= cost);
    void maxed;
  }

  _won() {
    this.save.wins += 1;
    for (const a of this.l.areas) if (a.isOpen) this.save.zones = recordZone(this.save, a.id);
    this.save.best = recordBest(this.save.best, this.l.time); // fastest dive is the best — never the slowest
    this.post({ type: 'save', save: this.save });
    this.sound.play('win');
    this.voice.say('win');
    this.winT = 0.001;
    setTimeout(() => {
      if (!this.root.isConnected || this.mode !== 'play') return;
      this.layer.append(h('div', { class: 'pd-win' }, h('div', { class: 'pd-wcard' },
        h('div', { class: 'pd-wt' }, I.t('youWin')), h('div', { class: 'pd-stars' }, h('span', {}, '⭐'), h('span', {}, '⭐'), h('span', {}, '⭐')),
        h('div', { class: 'pd-mon' }, h('span', {}, '🪙'), `${f(this.l.earned)} ${CUR()}`), h('div', { class: 'pd-small' }, I.t('wonText')),
        h('button', { class: 'pd-btn', onclick: () => this.start() }, I.t('again')),
        h('button', { class: 'pd-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
    }, 1800);
  }

  _draw() {
    const g = this.g;
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0); g.direction = 'inherit';
    const W = this.cw; const H = this.ch;
    const L = this._lay(); const { x0, Wc, surf, rowH } = L; const u = L.u;
    const cam = this.cam;
    const sy = surf - cam; // surface of the water on screen
    // sky
    const sky = g.createLinearGradient(0, 0, 0, Math.max(40, surf)); sky.addColorStop(0, '#78c8ff'); sky.addColorStop(1, '#e8f6ff');
    g.fillStyle = sky; g.fillRect(0, 0, W, H);
    const skyArt = this._cover(g, 'sky_lagoon', 0, 0, W, Math.max(1, sy + u), 1);
    g.fillStyle = 'rgba(255,255,255,.92)';
    if (!skyArt) for (const [cx, cy, s2] of [[0.15, 0.1, 1], [0.65, 0.07, 1.3], [0.9, 0.2, 0.8]]) { const x = x0 + ((cx * Wc + this.clock * 3 * s2) % (Wc + 80)) - 20; const y = cy * surf - cam * 0.3; g.beginPath(); g.ellipse(x, y, u * 6 * s2, u * 1.8 * s2, 0, 0, 6.3); g.ellipse(x + u * 3, y - u, u * 3.4 * s2, u * 2 * s2, 0, 0, 6.3); g.fill(); }
    // far island with palms
    if (!this._pic(g, 'island', x0 + Wc * 0.55, sy + u * 0.4, Wc * 0.62)) {
      g.fillStyle = '#f2dca0'; g.beginPath(); g.ellipse(x0 + Wc * 0.55, sy - u * 0.4, Wc * 0.4, u * 2.6, 0, Math.PI, 0); g.fill();
      for (const px of [0.45, 0.6, 0.72]) this._palm(g, x0 + Wc * px, sy - u * 2.2, u * (px === 0.6 ? 1.1 : 0.85));
    }
    // boats
    const bob = Math.sin(this.clock * 2) * u * 0.35;
    this._stall(g, x0 + Wc * 0.27, sy + bob, u);
    this._yacht(g, x0 + Wc * 0.76, sy - bob, u);
    if (this.bubbleT > 0 && this.mode === 'play') this._bubble(g, x0 + Wc * 0.62, sy - u * 17 + bob, I.t('allMine'), u);
    // sea body
    const l = this.l;
    const n = l.areas.length;
    for (let i = 0; i < n; i++) {
      const a = l.areas[i];
      const y0 = surf + i * rowH - cam; const y1 = y0 + rowH;
      if (y1 < 0 || y0 > H) continue;
      const top = i === 0 ? sy : y0;
      const wg = g.createLinearGradient(0, top, 0, y1); wg.addColorStop(0, WATER[i][0]); wg.addColorStop(1, WATER[i][1]);
      g.fillStyle = wg; g.fillRect(0, top, W, y1 - top);
      this._cover(g, i < 2 ? 'water_a' : 'water_b', 0, top, W, y1 - top, a.isOpen ? 0.7 : 0.55);
      if (!a.isOpen) { g.fillStyle = 'rgba(10,0,40,.62)'; g.fillRect(0, top, W, y1 - top); this._rock(g, 0, y1 - rowH * 0.2, W, rowH * 0.2, i, u); continue; }
      // per-zone background tint (Director Protocol: no two zones share a background)
      g.fillStyle = ZONE_THEMES[i].overlay; g.fillRect(0, top, W, y1 - top);
      // light rays — strong in the shallows, fading with depth, gone in the abyss
      if (i < 3) { g.fillStyle = `rgba(255,255,255,${0.09 - i * 0.03})`;
        for (let k = 0; k < 4; k++) { const rx = x0 + Wc * (0.15 + k * 0.25) + Math.sin(this.clock * 0.6 + k) * u * 2; g.beginPath(); g.moveTo(rx, top); g.lineTo(rx + u * 5, top); g.lineTo(rx + u * 12, y1); g.lineTo(rx - u * 3, y1); g.fill(); } }
      const floor = y1 - rowH * 0.2;
      this._rock(g, 0, floor, W, rowH * 0.2, i, u);
      // plants and corals only where they belong; every zone then gets its own motif
      if (i === 0 || i === 1 || i === 4) this._reef(g, x0, Wc, floor, u, i);
      this._zoneDress(g, i, x0, Wc, top, y1, floor, u);
      // ledge name
      g.fillStyle = 'rgba(255,255,255,.55)'; g.font = `900 ${u * 2.4}px Tajawal, system-ui`; g.textAlign = I.getLang() === 'en' ? 'left' : 'right';
      g.fillText(`${I.getLang() === 'en' ? a.en : a.ar} · ${depthOf(i)}${I.getLang() === 'en' ? 'm' : ' م'}`, I.getLang() === 'en' ? x0 + u * 2 : x0 + Wc - u * 2, top + u * 3.4);
      // rope + ladder + bell + basket
      const bx = x0 + Wc * 0.09;
      g.strokeStyle = '#d8b050'; g.lineWidth = u * 0.5; g.beginPath(); g.moveTo(bx - u * 1, top); g.lineTo(bx - u * 1, floor); g.moveTo(bx + u * 1, top); g.lineTo(bx + u * 1, floor); g.stroke();
      g.lineWidth = u * 0.3; for (let yy = top + u * 2; yy < floor; yy += u * 2.4) { g.beginPath(); g.moveTo(bx - u, yy); g.lineTo(bx + u, yy); g.stroke(); }
      const bellDown = floor - u * 3.6; const bellUp = i === 0 ? sy - u * 3 : top + u * 2;
      const bt = a.bellPhase === 'up' ? Math.min(1, a.bellT / BELL_TIME) : a.bellPhase === 'back' ? 1 - Math.min(1, a.bellT / (BELL_TIME * 0.6)) : 0;
      const by = bellDown + (bellUp - bellDown) * bt;
      this._bell(g, bx, by, u, a.bellLoad > 0);
      const kx = x0 + Wc * 0.2;
      this._basket(g, kx, floor, u, a.basket);
      // divers and the clam
      const cx = x0 + Wc * 0.84;
      const open = a.divers.some((d) => d.phase === 'down' && d.t >= a.clam * 0.9);
      this._clam(g, cx, floor, u, open || a.divers.some((d) => d.phase === 'down' && d.t > 0 && !d.auto), i);
      a.divers.forEach((d, k) => {
        const lane = (k % 3) * u * 0.8;
        const t = d.phase === 'down' ? d.t / a.clam : 1 - d.t / 1.1;
        const waiting = !d.auto && d.phase === 'down' && d.t === 0 && a.boost <= 0;
        const px = kx + u * 4 + (cx - u * 3 - (kx + u * 4)) * (waiting ? 0 : Math.max(0, Math.min(1, t)));
        const py = floor - u * 1.2 - Math.sin(Math.max(0, Math.min(1, t)) * Math.PI) * u * 3 - lane * 0.5;
        this._diver(g, px, py, u * 0.8, d.phase === 'up', k, d.phase === 'up' ? -1 : 1);
      });
      // tap to dive hint
      if (a.hired === 0 && a.boost <= 0 && (!this.tappedOnce || this.idleT > 3) && i === l.openCount - 1 && this.mode === 'play') {
        const pulse = 1 + Math.sin(this.clock * 6) * 0.06;
        g.save(); g.translate(x0 + Wc * 0.5, floor - rowH * 0.34); g.scale(pulse, pulse);
        g.textAlign = 'center'; g.font = `900 ${u * 4.6}px Tajawal, system-ui`; g.lineWidth = u * 1; g.strokeStyle = '#0a3a60'; g.fillStyle = '#fff';
        g.strokeText(I.t('tapDive'), 0, 0); g.fillText(I.t('tapDive'), 0, 0); g.font = `${u * 6}px system-ui`; g.fillText('👆', u * 9, u * 4); g.restore();
      }
    }
    { const yb = surf + n * rowH - cam; if (yb < H) { g.fillStyle = '#2a2058'; g.fillRect(0, yb, W, H - yb); } }
    // water line
    g.strokeStyle = 'rgba(255,255,255,.8)'; g.lineWidth = u * 0.4; g.beginPath();
    for (let x = 0; x <= W; x += 8) { const y = sy + Math.sin(x * 0.05 + this.clock * 2) * u * 0.35; if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); }
    g.stroke();
    // floating texts and flying coins
    g.textAlign = 'center'; g.direction = 'ltr';
    for (const x of this.fx) { g.globalAlpha = Math.max(0, 1 - x.t / 1.3); g.font = `900 ${u * (x.big ? 5.4 : 4)}px Tajawal, system-ui`; g.fillStyle = x.big ? '#ffe04a' : '#fff'; g.strokeStyle = 'rgba(40,20,0,.95)'; g.lineWidth = u * 0.9; const yy = x.y - x.t * u * 6; g.strokeText(x.text, x.x, yy); g.fillText(x.text, x.x, yy); }
    g.globalAlpha = 1;
    for (const c of this.coins) { if (c.t < 0 || c.px === undefined) continue; g.fillStyle = '#ffd23a'; g.strokeStyle = '#a87a0a'; g.lineWidth = u * 0.3; g.beginPath(); g.arc(c.px, c.py, u * 1.5, 0, 6.3); g.fill(); g.stroke(); g.fillStyle = '#fff2a0'; g.beginPath(); g.arc(c.px - u * 0.4, c.py - u * 0.4, u * 0.5, 0, 6.3); g.fill(); }
  }

  /** Director Protocol dressing: one unmistakable motif per zone, all code-drawn
   * (no new files). Deterministic positions; only sway/glow use the clock. */
  _zoneDress(g, i, x0, Wc, top, y1, floor, u) {
    const motif = ZONE_THEMES[i].motif; const mid = (top + floor) / 2;
    g.save();
    if (motif === 'sand_garden') { // 1 Shallows: bright sand, starfish, a little fish school
      g.fillStyle = 'rgba(246,222,160,.55)'; for (let k = 0; k < 4; k++) { g.beginPath(); g.ellipse(x0 + Wc * (0.18 + k * 0.2), floor - u * 0.4, u * 5, u * 1.1, 0, 0, 6.3); g.fill(); }
      g.fillStyle = '#ff9a3a'; for (const fx of [0.3, 0.62]) { const cx = x0 + Wc * fx; const cy = floor - u * 1.2; for (let p = 0; p < 5; p++) { const a = -Math.PI / 2 + p * 1.257; g.beginPath(); g.ellipse(cx + Math.cos(a) * u * 0.9, cy + Math.sin(a) * u * 0.9, u * 0.75, u * 0.38, a, 0, 6.3); g.fill(); } g.beginPath(); g.arc(cx, cy, u * 0.6, 0, 6.3); g.fill(); }
      g.fillStyle = 'rgba(255,140,60,.85)'; const off = (this.clock * u * 2.2) % (Wc * 0.5);
      for (let k = 0; k < 5; k++) { const fx = x0 + Wc * 0.12 + off + k * u * 3.2; const fy = top + u * 4 + Math.sin(this.clock * 2 + k) * u * 0.7 + (k % 2) * u * 1.6; g.beginPath(); g.ellipse(fx, fy, u * 1.3, u * 0.55, 0, 0, 6.3); g.fill(); g.beginPath(); g.moveTo(fx - u * 1.2, fy); g.lineTo(fx - u * 2.1, fy - u * 0.7); g.lineTo(fx - u * 2.1, fy + u * 0.7); g.closePath(); g.fill(); }
    } else if (motif === 'coral_branch') { // 2 Reef: tall branching staghorn coral + anemones
      g.strokeStyle = '#ff7a4a'; g.lineWidth = u * 0.65; g.lineCap = 'round';
      for (const bx of [0.22, 0.55, 0.72]) { const x = x0 + Wc * bx; g.beginPath(); g.moveTo(x, floor); g.lineTo(x, floor - u * 6); g.moveTo(x, floor - u * 3.4); g.lineTo(x - u * 2.4, floor - u * 6.4); g.moveTo(x, floor - u * 4.2); g.lineTo(x + u * 2.2, floor - u * 7); g.moveTo(x, floor - u * 5.4); g.lineTo(x - u * 1.4, floor - u * 8); g.stroke(); }
      for (const ax of [0.36, 0.66]) { g.fillStyle = '#c86aff'; for (let p = 0; p < 7; p++) { const a = p / 7 * 6.28; g.beginPath(); g.arc(x0 + Wc * ax + Math.cos(a) * u * 1.1, floor - u * 1 + Math.sin(a) * u * 0.5, u * 0.42, 0, 6.3); g.fill(); } g.fillStyle = '#ffd2f2'; g.beginPath(); g.arc(x0 + Wc * ax, floor - u * 1, u * 0.55, 0, 6.3); g.fill(); }
    } else if (motif === 'cave_arch') { // 3 Cave: rock arch + stalactites + a dark cave mouth + crystals
      g.fillStyle = '#3a2f58'; for (let k = 0; k < 7; k++) { const x = x0 + k * Wc / 6; g.beginPath(); g.moveTo(x - u * 2.4, top); g.lineTo(x + u * 2.4, top); g.lineTo(x, top + u * (3 + (k % 3) * 1.6)); g.closePath(); g.fill(); }
      g.fillStyle = 'rgba(4,2,18,.78)'; g.beginPath(); g.ellipse(x0 + Wc * 0.6, mid + u * 2, Wc * 0.2, (floor - top) * 0.34, 0, 0, 6.3); g.fill();
      g.fillStyle = '#8ae8ff'; for (const [cx, cs] of [[0.14, 1], [0.2, 0.6], [0.88, 0.8]]) { const x = x0 + Wc * cx; g.beginPath(); g.moveTo(x, floor); g.lineTo(x + u * cs, floor - u * 2.6 * cs); g.lineTo(x + u * 2 * cs, floor); g.closePath(); g.globalAlpha = 0.55 + Math.sin(this.clock * 2 + cx * 9) * 0.2; g.fill(); g.globalAlpha = 1; }
    } else if (motif === 'glow_deep') { // 4 Abyss: near-dark, glowing jellyfish + plankton dots (no coral, no rays)
      g.fillStyle = 'rgba(2,0,16,.35)'; g.fillRect(x0 - u * 4, top, Wc + u * 8, floor - top);
      for (let k = 0; k < 14; k++) { const px = x0 + Wc * ((k * 37 % 90) / 100 + 0.05); const py = top + ((k * 53 % 70) / 100) * (floor - top); g.fillStyle = `rgba(140,240,255,${0.35 + 0.3 * Math.sin(this.clock * 1.6 + k * 1.7)})`; g.beginPath(); g.arc(px, py, u * 0.32, 0, 6.3); g.fill(); }
      for (const jx of [0.3, 0.62]) { const x = x0 + Wc * jx + Math.sin(this.clock * 0.7 + jx * 8) * u * 1.4; const y = mid - u * 2 + Math.sin(this.clock + jx * 5) * u; g.fillStyle = 'rgba(255,150,220,.75)'; g.beginPath(); g.arc(x, y, u * 1.7, Math.PI, 0); g.fill(); g.strokeStyle = 'rgba(255,180,235,.6)'; g.lineWidth = u * 0.28; for (let t2 = -1; t2 <= 1; t2++) { g.beginPath(); g.moveTo(x + t2 * u, y); g.quadraticCurveTo(x + t2 * u + Math.sin(this.clock * 2 + t2) * u * 0.6, y + u * 2.2, x + t2 * u, y + u * 3.6); g.stroke(); } }
    } else if (motif === 'garden_fans') { // 5 Giftun: vivid sea fans, a turtle and a dolphin silhouette
      for (const [fx, col] of [[0.18, '#ff5aa8'], [0.4, '#b86aff'], [0.68, '#ff8a3a']]) { const x = x0 + Wc * fx; g.fillStyle = col; g.globalAlpha = 0.8; g.beginPath(); g.moveTo(x, floor); g.arc(x, floor, u * 4.2, Math.PI, 0); g.fill(); g.globalAlpha = 1; g.strokeStyle = 'rgba(255,255,255,.35)'; g.lineWidth = u * 0.2; for (let r = 1; r < 4; r++) { g.beginPath(); g.arc(x, floor, u * r * 1.3, Math.PI, 0); g.stroke(); } }
      const tx = x0 + Wc * (0.55 + 0.08 * Math.sin(this.clock * 0.35)); const ty = top + u * 5;
      g.fillStyle = '#1f8a70'; g.beginPath(); g.ellipse(tx, ty, u * 3.4, u * 1.7, 0, 0, 6.3); g.fill(); g.beginPath(); g.arc(tx + u * 3.8, ty - u * 0.4, u * 0.9, 0, 6.3); g.fill(); g.beginPath(); g.ellipse(tx - u * 2.6, ty + u * 1.2, u * 1.2, u * 0.5, 0.7, 0, 6.3); g.fill();
      const dx = x0 + Wc * (0.3 + 0.1 * Math.sin(this.clock * 0.22 + 2)); const dy = top + u * 2.6;
      g.fillStyle = 'rgba(30,90,140,.85)'; g.beginPath(); g.ellipse(dx, dy, u * 4.4, u * 1.15, -0.12, 0, 6.3); g.fill(); g.beginPath(); g.moveTo(dx - u * 4.2, dy); g.lineTo(dx - u * 6, dy - u * 1.4); g.lineTo(dx - u * 5.6, dy + u * 0.9); g.closePath(); g.fill(); g.beginPath(); g.moveTo(dx + u * 0.4, dy - u * 1); g.lineTo(dx + u * 1.6, dy - u * 2.4); g.lineTo(dx + u * 2.2, dy - u * 0.8); g.closePath(); g.fill();
    } else if (motif === 'temple_ruins') { // 6 Ras Mohammed: sunken columns, a fallen column, a pediment
      g.fillStyle = '#cbb27a'; g.strokeStyle = 'rgba(90,70,30,.55)'; g.lineWidth = u * 0.25;
      for (const cx of [0.16, 0.34]) { const x = x0 + Wc * cx; g.fillRect(x - u * 1.5, floor - u * 11, u * 3, u * 11); g.strokeRect(x - u * 1.5, floor - u * 11, u * 3, u * 11); g.fillRect(x - u * 2.1, floor - u * 12.2, u * 4.2, u * 1.2); g.fillRect(x - u * 2.1, floor - u * 1.1, u * 4.2, u * 1.1); for (let s2 = 1; s2 < 4; s2++) { g.beginPath(); g.moveTo(x - u * 1.5, floor - u * 11 + s2 * u * 2.7); g.lineTo(x + u * 1.5, floor - u * 11 + s2 * u * 2.7); g.stroke(); } }
      g.save(); g.translate(x0 + Wc * 0.58, floor - u * 1.6); g.rotate(-0.16); g.fillRect(-u * 5.4, -u * 1.3, u * 10.8, u * 2.6); g.strokeRect(-u * 5.4, -u * 1.3, u * 10.8, u * 2.6); g.restore();
      g.beginPath(); g.moveTo(x0 + Wc * 0.12, top + u * 1); g.lineTo(x0 + Wc * 0.38, top + u * 1); g.lineTo(x0 + Wc * 0.25, top + u * 5.4); g.closePath(); g.fillStyle = 'rgba(203,178,122,.9)'; g.fill(); g.stroke();
      g.fillStyle = 'rgba(90,70,30,.6)'; for (let k = 0; k < 5; k++) g.fillRect(x0 + Wc * (0.78 + (k % 2) * 0.05), floor - u * (2 + k * 1.5), u * (1.6 - (k % 2) * 0.6), u * 0.5);
    }
    g.restore();
  }

  _rock(g, x, y, w, hgt, i, u) {
    g.fillStyle = ROCK[i]; g.fillRect(x, y, w, hgt);
    g.fillStyle = 'rgba(255,255,255,.25)'; g.fillRect(x, y, w, u * 0.5);
    g.strokeStyle = 'rgba(80,40,60,.35)'; g.lineWidth = u * 0.25;
    for (let yy = y + hgt * 0.35, r = 0; yy < y + hgt; yy += hgt * 0.32, r++) { g.beginPath(); g.moveTo(x, yy); g.lineTo(x + w, yy); g.stroke(); for (let xx = x + (r % 2) * u * 3; xx < x + w; xx += u * 6) { g.beginPath(); g.moveTo(xx, yy); g.lineTo(xx, Math.min(y + hgt, yy + hgt * 0.32)); g.stroke(); } }
  }

  _reef(g, x0, Wc, floor, u, i) {
    const cols = ['#ff6a8a', '#ffa03a', '#b86aff', '#ff4a6a'];
    for (let k = 0; k < 7; k++) {
      const x = x0 + Wc * (0.3 + k * 0.08 + ((k * 37 + i * 11) % 5) * 0.004); const sw = Math.sin(this.clock * 1.5 + k) * u * 0.6;
      if (!(k % 2) && k % 4 === 0 && this._pic(g, 'coral', x, floor + u * 0.4, u * 5.6)) continue;
      if (k % 2) { g.strokeStyle = '#2ac85a'; g.lineWidth = u * 0.7; g.lineCap = 'round'; g.beginPath(); g.moveTo(x, floor); g.quadraticCurveTo(x + sw, floor - u * 3, x + sw * 1.5, floor - u * 5.5 - (k % 3) * u); g.stroke(); } else { g.fillStyle = cols[(k + i) % 4]; g.beginPath(); g.arc(x, floor - u * 0.6, u * 1.3, Math.PI, 0); g.arc(x + u * 1.1, floor - u * 0.6, u * 0.9, Math.PI, 0); g.fill(); }
    }
  }

  _palm(g, x, y, s) {
    g.strokeStyle = '#8a5a2a'; g.lineWidth = s * 1.1; g.lineCap = 'round'; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + s * 2, y - s * 5, x + s, y - s * 9); g.stroke();
    g.fillStyle = '#2ab85a'; for (let k = 0; k < 5; k++) { const a = -2.6 + k * 0.55; g.beginPath(); g.ellipse(x + s + Math.cos(a) * s * 2.2, y - s * 9 + Math.sin(a) * s * 1.4, s * 2.4, s * 0.8, a, 0, 6.3); g.fill(); }
  }

  _stall(g, x, y, u) {
    if (this._pic(g, 'stall_boat', x, y + u * 1.8, u * 24)) return;
    g.fillStyle = '#c8352a'; g.beginPath(); g.moveTo(x - u * 10, y - u * 3.4); g.lineTo(x + u * 10, y - u * 3.4); g.lineTo(x + u * 7, y + u * 1.6); g.lineTo(x - u * 7, y + u * 1.6); g.closePath(); g.fill();
    g.fillStyle = '#8a2218'; g.fillRect(x - u * 10, y - u * 3.4, u * 20, u * 0.9);
    g.fillStyle = '#7a4a2a'; g.fillRect(x - u * 4.4, y - u * 8, u * 8.8, u * 4.6);
    g.fillStyle = '#f4e8c8'; g.fillRect(x - u * 3.6, y - u * 6.6, u * 7.2, u * 2.6);
    g.fillStyle = '#fff'; for (let k = 0; k < 6; k++) { g.beginPath(); g.arc(x - u * 2.8 + k * u * 1.1, y - u * 5.2, u * 0.45, 0, 6.3); g.fill(); }
    for (let k = 0; k < 6; k++) { g.fillStyle = k % 2 ? '#fff' : '#2ab85a'; g.fillRect(x - u * 5.4 + k * u * 1.8, y - u * 9.4, u * 1.8, u * 1.6); }
    g.strokeStyle = '#5a3a1a'; g.lineWidth = u * 0.5; g.beginPath(); g.moveTo(x - u * 8, y - u * 3.4); g.lineTo(x - u * 8, y - u * 9); g.lineTo(x - u * 5, y - u * 9); g.stroke();
    const cols = ['#ff6a8a', '#ffe04a', '#6ae0ff', '#a8ff6a']; for (let k = 0; k < 7; k++) { g.fillStyle = cols[k % 4]; g.beginPath(); g.arc(x - u * 5.4 + k * u * 1.7, y - u * 10.4 + Math.sin(k * 1.6) * u * 0.4, u * 0.4, 0, 6.3); g.fill(); }
  }

  _yacht(g, x, y, u) {
    if (this._pic(g, 'yacht', x, y + u * 2, u * 25)) return;
    g.fillStyle = '#f8d8d8'; g.beginPath(); g.moveTo(x - u * 11, y - u * 2.4); g.lineTo(x + u * 11, y - u * 2.4); g.lineTo(x + u * 8, y + u * 1.8); g.lineTo(x - u * 9, y + u * 1.8); g.closePath(); g.fill();
    g.fillStyle = '#e8708a'; g.fillRect(x - u * 11, y - u * 2.4, u * 22, u * 1);
    g.fillStyle = '#fff0f0'; g.fillRect(x - u * 5, y - u * 5.6, u * 9, u * 3.2);
    g.fillStyle = '#4a7ab8'; for (let k = 0; k < 3; k++) g.fillRect(x - u * 4.2 + k * u * 2.8, y - u * 4.9, u * 1.8, u * 1.5);
    g.fillStyle = '#e03a3a'; g.beginPath(); g.arc(x + u * 10.4, y - u * 3.2, u * 0.7, 0, 6.3); g.fill();
    // the rival on deck
    g.fillStyle = '#2a2a3a'; g.fillRect(x - u * 7.6, y - u * 7.4, u * 1.6, u * 3.6); g.fillStyle = '#f2c9a0'; g.beginPath(); g.arc(x - u * 6.8, y - u * 8.4, u * 1, 0, 6.3); g.fill();
    g.fillStyle = '#e8c030'; g.fillRect(x - u * 7.8, y - u * 9.7, u * 2, u * 0.7);
  }

  _bubble(g, x, y, text, u) {
    g.font = `900 ${u * 3.6}px Tajawal, system-ui`; g.textAlign = 'center';
    const w = g.measureText(text).width + u * 4;
    g.fillStyle = '#fff'; g.strokeStyle = '#1a2a4a'; g.lineWidth = u * 0.4; g.beginPath(); g.roundRect(x - w / 2, y - u * 3.2, w, u * 6, u * 2); g.fill(); g.stroke();
    g.beginPath(); g.moveTo(x - u * 2, y + u * 2.8); g.lineTo(x - u * 4, y + u * 5.4); g.lineTo(x + u * 0.6, y + u * 2.8); g.fillStyle = '#fff'; g.fill();
    g.fillStyle = '#1a2a4a'; g.fillText(text, x, y + u * 1);
  }

  _bell(g, x, y, u, load) {
    g.strokeStyle = '#d8b050'; g.lineWidth = u * 0.3; g.beginPath(); g.moveTo(x, y - u * 5); g.lineTo(x, y - u * 1.7); g.stroke();
    if (!this._pic(g, 'bell', x, y + u * 1.8, u * 5.2)) {
      g.fillStyle = '#e8a830'; g.strokeStyle = '#7a4a0a'; g.lineWidth = u * 0.35; g.beginPath(); g.arc(x, y, u * 2.1, Math.PI, 0); g.lineTo(x + u * 2.1, y + u * 1.4); g.lineTo(x - u * 2.1, y + u * 1.4); g.closePath(); g.fill(); g.stroke();
      g.fillStyle = '#8ad8ff'; g.beginPath(); g.arc(x, y - u * 0.4, u * 0.8, 0, 6.3); g.fill(); g.stroke();
    }
    if (load) { g.fillStyle = '#fff'; for (let k = 0; k < 3; k++) { g.beginPath(); g.arc(x - u * 0.9 + k * u * 0.9, y + u * 0.9, u * 0.42, 0, 6.3); g.fill(); } }
  }

  _basket(g, x, floor, u, n) {
    if (!this._pic(g, 'basket', x, floor, u * 5.4)) { g.fillStyle = '#b8803a'; g.strokeStyle = '#6a4210'; g.lineWidth = u * 0.3; g.beginPath(); g.moveTo(x - u * 2.4, floor - u * 3); g.lineTo(x + u * 2.4, floor - u * 3); g.lineTo(x + u * 1.8, floor); g.lineTo(x - u * 1.8, floor); g.closePath(); g.fill(); g.stroke(); }
    g.fillStyle = '#fff'; for (let k = 0; k < Math.min(n, 6); k++) { g.beginPath(); g.arc(x - u * 1.5 + (k % 3) * u * 1.5, floor - u * 3.2 - Math.floor(k / 3) * u * 0.8, u * 0.62, 0, 6.3); g.fill(); g.strokeStyle = '#b8c0d0'; g.lineWidth = u * 0.15; g.stroke(); }
  }

  _clam(g, x, floor, u, open, i) {
    if (this._pic(g, open ? 'clam_open' : 'clam_closed', x, floor + u * 0.3, u * 8)) return;
    const col = ['#b87ad8', '#d86a9a', '#8a6ad8', '#6a8ad8', '#4ac8b8', '#c8a83a'][i];
    g.fillStyle = col; g.strokeStyle = 'rgba(40,0,60,.6)'; g.lineWidth = u * 0.3;
    g.beginPath(); g.ellipse(x, floor - u * 1, u * 3.4, u * 1.4, 0, 0, Math.PI); g.fill(); g.stroke();
    const lift = open ? u * 2.6 : u * 0.5;
    g.beginPath(); g.moveTo(x - u * 3.4, floor - u * 1); g.quadraticCurveTo(x, floor - u * 1 - lift * 2, x + u * 3.4, floor - u * 1); g.closePath(); g.fill(); g.stroke();
    if (open) { g.fillStyle = '#fff'; g.beginPath(); g.arc(x, floor - u * 1.6, u * 1, 0, 6.3); g.fill(); g.fillStyle = 'rgba(255,255,255,.9)'; g.beginPath(); g.arc(x - u * 0.3, floor - u * 1.9, u * 0.35, 0, 6.3); g.fill(); }
  }

  _diver(g, x, y, s, has, k, dir) {
    const sw = Math.sin(this.clock * 8 + k) * s * 0.4;
    if (this.art.diver) {
      const bob = Math.sin(this.clock * 6 + k) * s * 0.25;
      this._pic(g, 'diver', x, y + s * 3.4 + bob, s * 8.6, dir < 0);
      if (has) { g.fillStyle = '#fff'; g.strokeStyle = '#b8c0d0'; g.lineWidth = s * 0.2; g.beginPath(); g.arc(x + dir * s * 2.4, y + s * 0.6, s * 0.7, 0, 6.3); g.fill(); g.stroke(); }
      g.fillStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.arc(x + s, y - s * 3.8 - ((this.clock * 3 + k) % 1) * s * 2.4, s * 0.3, 0, 6.3); g.fill();
      return;
    }
    g.fillStyle = k % 2 ? '#e86a2a' : '#f0a020'; g.beginPath(); g.ellipse(x, y, s * 1.2, s * 1.7, 0, 0, 6.3); g.fill();
    g.fillStyle = '#6ad0ff'; g.strokeStyle = '#2a4a6a'; g.lineWidth = s * 0.25; g.beginPath(); g.arc(x, y - s * 2.1, s * 1.15, 0, 6.3); g.fill(); g.stroke();
    g.fillStyle = '#f2c9a0'; g.beginPath(); g.arc(x + dir * s * 0.1, y - s * 2.1, s * 0.6, 0, 6.3); g.fill();
    g.strokeStyle = '#3a3a5a'; g.lineWidth = s * 0.6; g.lineCap = 'round'; g.beginPath(); g.moveTo(x - s * 0.5, y + s * 1.5); g.lineTo(x - s * 1 + sw, y + s * 3); g.moveTo(x + s * 0.5, y + s * 1.5); g.lineTo(x + s * 1 - sw, y + s * 3); g.stroke();
    if (has) { g.fillStyle = '#fff'; g.strokeStyle = '#b8c0d0'; g.lineWidth = s * 0.2; g.beginPath(); g.arc(x + dir * s * 1.6, y + s * 0.2, s * 0.6, 0, 6.3); g.fill(); g.stroke(); }
    g.fillStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.arc(x + s, y - s * 3.8 - ((this.clock * 3 + k) % 1) * s * 2.4, s * 0.3, 0, 6.3); g.fill();
  }

  pause() { this.sound.suspend(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); this.voice.dispose(); document.removeEventListener('pointerdown', this._voiceArm, true); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.PearlDivers = api;
export default api;
