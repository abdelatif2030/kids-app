// «عالم الأميرة» — the five girls' games for ages 2-4 as ONE game with five levels (owner 2026-11-22). A map of five big round doors:
// dress up, hair salon, baby and pet, cupcake shop, butterfly garden. Every door is open (no locks); each one has six places inside and
// gives ONE star when something is finished inside it. No spoken voice: the world plays interactive music (src/kit/music.js).
import { h } from '../../../cozy_kit/ui.js';
import { music } from '../kit/music.js';
import { CSS as KIT_CSS } from '../kit/kit.js';
import { start as startDress } from '../dress/main.js';
import { start as startSalon } from '../salon/main.js';
import { start as startPet } from '../pet/main.js';
import { start as startCupcake } from '../cupcake/main.js';
import { start as startGarden } from '../garden/main.js';

export const LEVELS = [
  { id: 'dress', folder: 'little_princess_dress', ar: 'ألبسي الأميرة', en: 'Dress up', emoji: '👗', start: startDress },
  { id: 'salon', folder: 'little_salon', ar: 'صالون الشعر', en: 'Hair salon', emoji: '💇‍♀️', start: startSalon },
  { id: 'pet', folder: 'baby_and_pet', ar: 'بيبي وصاحبها', en: 'Baby & pet', emoji: '🍼', start: startPet },
  { id: 'cupcake', folder: 'cupcake_shop', ar: 'محل الكب كيك', en: 'Cupcake shop', emoji: '🧁', start: startCupcake },
  { id: 'garden', folder: 'butterfly_garden', ar: 'حديقة الفراشات', en: 'Butterfly garden', emoji: '🦋', start: startGarden },
];

/** The saved progress: stars per level (never negative, capped), and the sound switch. Damaged data becomes a clean start. */
export function normalizeSave(s) {
  const o = { stars: {}, muted: false };
  for (const l of LEVELS) { const v = s && s.stars ? Number(s.stars[l.id]) : 0; o.stars[l.id] = Number.isFinite(v) && v > 0 ? Math.min(999, Math.floor(v)) : 0; }
  o.muted = !!(s && s.muted);
  return o;
}
export const totalStars = (save) => LEVELS.reduce((n, l) => n + (save.stars[l.id] || 0), 0);
export const starRow = (n) => '⭐'.repeat(Math.min(3, n)) + '☆'.repeat(3 - Math.min(3, n));

const CSS = `
.gw-hub{position:absolute;inset:0;background:linear-gradient(180deg,#ffd8ec,#e8d8ff) center/cover no-repeat;font-family:Tajawal,system-ui,sans-serif;overflow:hidden}
.gw-title{position:absolute;top:calc(var(--u)*2);left:0;right:0;text-align:center;font-weight:900;font-size:calc(var(--u)*7);color:#fff;text-shadow:0 3px 0 #b83a90,0 0 18px rgba(255,255,255,.7);pointer-events:none}
.gw-path{position:absolute;left:calc(var(--u)*3);right:calc(var(--u)*3);top:calc(var(--u)*15);bottom:calc(var(--u)*14);display:flex;align-items:center;justify-content:space-around;gap:calc(var(--u)*1.5);direction:ltr}
.gw-door{position:relative;flex:1 1 0;max-width:calc(var(--u)*24);aspect-ratio:3/4;border-radius:calc(var(--u)*5);border:calc(var(--u)*.9) solid #fff;background:#ffd8ec center/cover no-repeat;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding:0 0 calc(var(--u)*1);box-shadow:0 calc(var(--u)*1.2) 0 rgba(160,40,120,.55);font-family:inherit;overflow:hidden;color:#fff}
.gw-door:nth-child(odd){transform:translateY(calc(var(--u)*-2))}
.gw-door:nth-child(even){transform:translateY(calc(var(--u)*3))}
.gw-door:active{filter:brightness(1.1)}
.gw-door .num{position:absolute;top:calc(var(--u)*1);right:calc(var(--u)*1);width:calc(var(--u)*7);height:calc(var(--u)*7);min-width:30px;min-height:30px;border-radius:50%;background:linear-gradient(180deg,#ffe88a,#ffb030);border:calc(var(--u)*.5) solid #fff;color:#a85a00;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;align-items:center;justify-content:center}
.gw-door .nm{background:rgba(120,20,100,.7);width:100%;text-align:center;font-weight:900;font-size:calc(var(--u)*3.6);padding:calc(var(--u)*.8) 0}
.gw-door .st{background:rgba(120,20,100,.7);width:100%;text-align:center;font-size:calc(var(--u)*4);padding-bottom:calc(var(--u)*.6);letter-spacing:calc(var(--u)*.4)}
.gw-fairy{position:absolute;left:50%;margin-left:calc(var(--u)*-8);bottom:calc(var(--u)*0);height:calc(var(--u)*17);pointer-events:none;animation:gwf 3s ease-in-out infinite alternate}
@keyframes gwf{0%{transform:translateY(0)}100%{transform:translateY(calc(var(--u)*-2))}}
.gw-snd{position:absolute;top:calc(var(--u)*2);left:calc(var(--u)*2);z-index:6}
.gw-back{position:absolute;top:calc(var(--u)*2);right:calc(var(--u)*2);z-index:6}
.gw-game{position:absolute;inset:0;z-index:10}
@media (max-aspect-ratio:1/1){.gw-path{flex-wrap:wrap;top:calc(var(--u)*14);gap:calc(var(--u)*3)}.gw-door{flex:0 0 calc(var(--u)*28);max-width:none}}
@media (prefers-reduced-motion:reduce){.gw-fairy{animation:none}}
`;

class World {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {}); this.en = config.lang === 'en'; this.base = (config.base || './').replace(/\/?$/, '/'); this.config = config;
    this.save = normalizeSave(config.save); music.setMuted(this.save.muted);
    if (!document.getElementById('gw-style')) document.head.append(h('style', { id: 'gw-style' }, KIT_CSS + CSS));
    this.root = h('div', { class: 'gk-root gw-root', dir: this.en ? 'ltr' : 'rtl', style: 'background:none' });
    el.append(this.root);
    this.ro = new ResizeObserver(() => this._fit()); this.ro.observe(el); this._fit();
    this.disposed = false; this.game = null;
    // the first tap anywhere starts the sound (phones need a tap) and the background tune
    this._gest = () => { music.unlock(); music.ambient(this.game ? 'play' : 'hub'); };
    document.addEventListener('pointerdown', this._gest, true);
    this._hub();
  }

  _fit() { const w = this.el.clientWidth || innerWidth; const hh = this.el.clientHeight || innerHeight; this.root.style.setProperty('--u', `${Math.min(w, hh * 1.6) / 100}px`); }

  _hub() {
    this.root.replaceChildren();
    const img = new Image(); img.src = `${this.base}art/bg_world.webp`;
    const hub = h('div', { class: 'gw-hub' });
    img.onload = () => { if (img.naturalWidth > 0) hub.style.backgroundImage = `url(${img.src})`; };
    hub.append(h('div', { class: 'gw-title' }, this.en ? "Princess world" : 'عالم الأميرة'));
    hub.append(h('div', { class: 'gw-path' }, LEVELS.map((l, i) => {
      const card = `${this.base}../${l.folder}/card.webp`;
      return h('button', { class: 'gw-door', 'data-level': l.id, 'aria-label': this.en ? l.en : l.ar, style: `background-image:url(${card})`, onclick: () => this._open(l) },
        h('div', { class: 'num' }, String(i + 1)), h('div', { class: 'nm' }, `${l.emoji} ${this.en ? l.en : l.ar}`), h('div', { class: 'st' }, starRow(this.save.stars[l.id])));
    })));
    const fairy = new Image(); fairy.src = `${this.base}../little_princess_dress/art/fairy_02.webp`;
    fairy.className = 'gw-fairy'; fairy.draggable = false; fairy.alt = '';
    fairy.onload = () => hub.append(fairy);
    hub.append(h('button', { class: 'gk-rb gw-back', 'aria-label': this.en ? 'Back' : 'رجوع', onclick: () => { music.stopAmbient(); this.post({ type: 'exit' }); } }, this.en ? '←' : '→'));
    const snd = h('button', { class: 'gk-rb p gw-snd', 'aria-label': 'sound', onclick: () => { this.save.muted = !this.save.muted; music.setMuted(this.save.muted); snd.textContent = this.save.muted ? '🔇' : '🔊'; this._save(); } }, this.save.muted ? '🔇' : '🔊');
    hub.append(snd);
    this.root.append(hub);
    this.hub = hub;
    if (music.ctx) music.ambient('hub');
  }

  _save() { this.post({ type: 'save', save: this.save }); }

  _open(level) {
    music.unlock(); music.tap(); music.ambient('play'); music.mode = 'play';
    const box = h('div', { class: 'gw-game' });
    this.root.append(box);
    const cfg = { ...this.config, base: `${this.base}../${level.folder}/` };
    const post = (msg) => {
      if (!msg) return;
      if (msg.type === 'exit') { this._close(); return; }
      if (msg.type === 'star') { this.save.stars[level.id] = Math.min(999, (this.save.stars[level.id] || 0) + 1); this._save(); return; }
      if (msg.type === 'speak') return; // no voice in this world
    };
    this.game = { level, box, api: level.start(box, cfg, post) };
  }

  _close() {
    if (!this.game) return;
    try { this.game.api.dispose(); } catch (_) { /* fine */ }
    this.game.box.remove(); this.game = null;
    music.mode = 'hub';
    this._hub();
    music.tap();
  }

  pause() { music.pauseAmbient(); }
  dispose() {
    this.disposed = true;
    document.removeEventListener('pointerdown', this._gest, true);
    if (this.game) { try { this.game.api.dispose(); } catch (_) { /* fine */ } }
    music.stopAmbient(); this.ro.disconnect(); this.root.remove();
  }
}

export function start(el, config, post) {
  const w = new World(el, config || {}, post);
  return { dispose: () => w.dispose(), pause: () => w.pause() };
}
