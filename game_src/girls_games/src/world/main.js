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
import { start as startParty, normalizeBag, addItem, FRIENDS } from '../party/main.js';

export const LEVELS = [
  { id: 'dress', folder: 'little_princess_dress', ar: 'ألبسي نور', en: 'Dress up Nour', emoji: '👗', start: startDress },
  { id: 'salon', folder: 'little_salon', ar: 'صالون الشعر', en: 'Hair salon', emoji: '💇‍♀️', start: startSalon },
  { id: 'pet', folder: 'baby_and_pet', ar: 'بيبي وصاحبها', en: 'Baby & pet', emoji: '🍼', start: startPet },
  { id: 'cupcake', folder: 'cupcake_shop', ar: 'محل الكب كيك', en: 'Cupcake shop', emoji: '🧁', start: startCupcake },
  { id: 'garden', folder: 'butterfly_garden', ar: 'حديقة الفراشات', en: 'Butterfly garden', emoji: '🦋', start: startGarden },
  { id: 'party', folder: 'girls_world', ar: 'الحفلة الكبيرة', en: 'The big party', emoji: '🎉', start: startParty },
];

/* Phase 2H — the SECOND LAYER behind each door. Every door's room gains one deeper
 * place the child reaches from inside the room (the world's own overlay; the sister
 * games are untouched): the dress room hides a runway party room, the salon a mirror
 * room, baby & pet a play corner, the cupcake shop a tea table, the garden its four
 * seasons, and the big party sails a Nile felucca at sunset (the plan's party
 * integrator). Each layer is a gentle find/grow/board game of five big spots: no
 * timers, no losing, nothing taken away. Finishing a layer gives ONE star for that
 * door (completion, like the rooms themselves) plus one bag gift where the theme
 * fits, so the layers feed the big party exactly like the first rooms do. */
export const DEEP_LAYERS = [
  { id: 'dress', ar: 'ممر العرض', en: 'The runway', emoji: '🎀', cover: '🎁', sky: ['#ff9ac8', '#ffd8ec'], gift: 'look', decor: ['✨', '🎀', '🪩', '🎀', '✨'], floor: ['👠', '👗', '👑', '👗', '👠'], spots: [
    { e: '🎈', ar: 'بالونة', en: 'Balloon' }, { e: '🧸', ar: 'دبدوب', en: 'Teddy' }, { e: '🎉', ar: 'زينة', en: 'Confetti' }, { e: '🍰', ar: 'تورتة', en: 'Cake' }, { e: '👯', ar: 'صاحبات نور', en: "Nour's friends" }] },
  { id: 'salon', ar: 'غرفة المرايات', en: 'The mirror room', emoji: '🪞', cover: '✨', sky: ['#c8a0ff', '#ffe8f8'], gift: 'hairdo', decor: ['🪞', '✨', '🪞', '✨', '🪞'], floor: ['💄', '🪮', '✂️', '🪮', '💄'], spots: [
    { e: '🎀', ar: 'فيونكة', en: 'Bow' }, { e: '🌸', ar: 'وردة', en: 'Flower' }, { e: '👑', ar: 'تاج', en: 'Crown' }, { e: '💐', ar: 'بوكيه', en: 'Bouquet' }, { e: '🦋', ar: 'فراشة', en: 'Butterfly' }] },
  { id: 'pet', ar: 'ركن اللعب', en: 'The play corner', emoji: '🧸', cover: '🎁', sky: ['#6ac8e8', '#e8fff4'], gift: 'friend', decor: ['🧸', '⚽', '🧸', '⚽', '🧸'], floor: ['🐾', '🪁', '🧩', '🪁', '🐾'], spots: [
    { e: '⚽', ar: 'كورة', en: 'Ball' }, { e: '🪁', ar: 'طيارة ورق', en: 'Kite' }, { e: '🎈', ar: 'بالونة', en: 'Balloon' }, { e: '🧩', ar: 'بازل', en: 'Puzzle' }, { e: '🐾', ar: 'آثار رجلين', en: 'Paw prints' }] },
  { id: 'cupcake', ar: 'طاولة الشاي', en: 'The tea table', emoji: '🫖', cover: '🎁', sky: ['#ffca7a', '#fff6da'], gift: 'cupcake', decor: ['🫖', '☕', '🫖', '☕', '🫖'], floor: ['🧁', '🍓', '🥛', '🍓', '🧁'], spots: [
    { e: '🫖', ar: 'براد الشاي', en: 'Teapot' }, { e: '☕', ar: 'فنجان', en: 'Cup' }, { e: '🍰', ar: 'حته كيك', en: 'Cake slice' }, { e: '🍓', ar: 'فراولة', en: 'Strawberry' }, { e: '🥛', ar: 'لبن', en: 'Milk' }] },
  { id: 'garden', ar: 'مواسم الجنينة', en: 'Garden seasons', emoji: '🌷', cover: '🌱', sky: ['#8ad8a8', '#e8ffd8'], gift: 'flower', decor: ['🌷', '🌻', '🌹', '🌼', '🪷'], floor: ['🦋', '🌱', '🦋', '🌱', '🦋'], spots: [
    { e: '🌷', ar: 'توليب', en: 'Tulip', taps: 2 }, { e: '🌻', ar: 'عباد الشمس', en: 'Sunflower', taps: 2 }, { e: '🌹', ar: 'وردة بلدي', en: 'Rose', taps: 2 }, { e: '🌼', ar: 'أقحوان', en: 'Daisy', taps: 2 }, { e: '🪷', ar: 'لوتس النيل', en: 'Nile lotus', taps: 2 }] },
  { id: 'party', ar: 'فلوكة النيل', en: 'The Nile felucca', emoji: '⛵', cover: '🌅', sky: ['#ff9a5a', '#ffd8a8'], gift: null, decor: ['🌅', '⛵', '🌅', '⛵', '🌅'], floor: ['🌊', '🐚', '🌊', '🐚', '🌊'], spots: [
    { e: '👧', ar: 'نور', en: 'Nour' }, { e: '🐱', ar: 'القطة', en: 'Kitten' }, { e: '🐰', ar: 'الأرنوبة', en: 'Bunny' }, { e: '🐶', ar: 'الكلب', en: 'Puppy' }, { e: '👶', ar: 'البيبي', en: 'Baby' }] },
];
export const deepFor = (id) => DEEP_LAYERS.find((d) => d.id === id) || null;

/** The pure rules of one second-layer visit (no browser): tap a spot to reveal it;
 * garden spots need a second tap to bloom (seed -> flower). A spot counts once;
 * the layer is complete when every spot is found. Nothing can be lost. */
export class DeepRoom {
  constructor(def) { this.def = def; this.taps = def.spots.map(() => 0); this.awarded = false; }
  tap(i) {
    const s = this.def.spots[i]; if (!s) return 'no';
    const need = s.taps || 1;
    if (this.taps[i] >= need) return 'no';
    this.taps[i] += 1;
    if (this.taps[i] < need) return 'grew';
    return this.complete ? 'done' : 'found';
  }
  found(i) { return this.taps[i] >= (this.def.spots[i].taps || 1); }
  get foundCount() { return this.def.spots.reduce((n, _s, i) => n + (this.found(i) ? 1 : 0), 0); }
  get complete() { return this.foundCount >= this.def.spots.length; }
}

/** The saved progress: stars per level (never negative, capped), and the sound switch. Damaged data becomes a clean start. */
export function normalizeSave(s) {
  const o = { stars: {}, deep: {}, muted: false, bag: normalizeBag(s && s.bag) };
  for (const l of LEVELS) { const v = s && s.stars ? Number(s.stars[l.id]) : 0; o.stars[l.id] = Number.isFinite(v) && v > 0 ? Math.min(999, Math.floor(v)) : 0; }
  // Phase 2H append-only: how many times each door's second layer was finished.
  // Old saves have no `deep` at all and migrate to zeros; the rooms are unchanged.
  for (const l of LEVELS) { const v = s && s.deep ? Number(s.deep[l.id]) : 0; o.deep[l.id] = Number.isFinite(v) && v > 0 ? Math.min(999, Math.floor(v)) : 0; }
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
.gw-bagnote{position:absolute;bottom:calc(var(--u)*2);right:calc(var(--u)*3);background:rgba(255,255,255,.9);border:calc(var(--u)*.5) solid #ffd86a;border-radius:99px;padding:calc(var(--u)*.8) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6);color:#a82a78;box-shadow:0 calc(var(--u)*.6) 0 rgba(160,40,120,.4)}
.gw-grow{position:absolute;left:calc(var(--u)*3);bottom:calc(var(--u)*2);z-index:6;display:flex;align-items:center;gap:calc(var(--u)*1.4);background:linear-gradient(180deg,#c8a0ff,#8a5ae0);border:calc(var(--u)*.6) solid #fff;border-radius:99px;padding:calc(var(--u)*1) calc(var(--u)*3);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #5a3aa8;min-height:48px}
.gw-grow i{font-style:normal;font-size:calc(var(--u)*5)}.gw-grow em{font-style:normal;background:#ffd23a;color:#6a3a00;border-radius:99px;padding:0 calc(var(--u)*1.6);font-size:calc(var(--u)*3)}
.gw-door.party{flex:1.35 1 0;max-width:calc(var(--u)*30);border-color:#ffd23a;box-shadow:0 calc(var(--u)*1.2) 0 #c07a10,0 0 calc(var(--u)*4) rgba(255,210,60,.8)}
.gw-deep-btn{position:absolute;left:calc(var(--u)*3);bottom:calc(var(--u)*2);z-index:20;display:flex;align-items:center;gap:calc(var(--u)*1.2);background:linear-gradient(180deg,#ff8ac0,#d84a9e);border:calc(var(--u)*.6) solid #fff;border-radius:99px;padding:calc(var(--u)*1) calc(var(--u)*3);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a2060;min-height:48px;animation:gwb 1.6s ease-in-out infinite alternate}
@keyframes gwb{from{transform:scale(1)}to{transform:scale(1.05)}}
.gw-deep{position:absolute;inset:0;z-index:30;font-family:Tajawal,system-ui,sans-serif;overflow:hidden;display:flex;flex-direction:column;align-items:center}
.gw-deep-title{margin-top:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*6.4);color:#fff;text-shadow:0 3px 0 rgba(140,30,100,.6);text-align:center;padding:0 calc(var(--u)*10)}
.gw-deep-sub{font-weight:900;font-size:calc(var(--u)*3.8);color:#fff;text-shadow:0 2px 0 rgba(140,30,100,.5);margin-top:calc(var(--u)*1)}
.gw-deep-spots{flex:1;display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*2.4);flex-wrap:wrap;padding:calc(var(--u)*2);direction:ltr;max-width:calc(var(--u)*96)}
.gw-spot{width:calc(var(--u)*17);height:calc(var(--u)*17);min-width:64px;min-height:64px;border-radius:calc(var(--u)*4);border:calc(var(--u)*.7) dashed #fff;background:rgba(255,255,255,.35);font-size:calc(var(--u)*8);cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*.4);font-family:inherit;padding:calc(var(--u)*.6)}
.gw-spot small{font-size:calc(var(--u)*2.6);line-height:1.15;font-weight:900;color:#a82a78;text-align:center}
.gw-spot.found{border-style:solid;background:rgba(255,255,255,.92);animation:gkb .5s}
.gw-deep-back{position:absolute;top:calc(var(--u)*2);right:calc(var(--u)*2);z-index:6}
.gw-deep-done{font-weight:900;font-size:calc(var(--u)*5.4);color:#fff;text-shadow:0 3px 0 rgba(140,30,100,.6);text-align:center;padding:0 calc(var(--u)*4) calc(var(--u)*3);min-height:calc(var(--u)*8)}
.gw-deep-decor{display:flex;justify-content:center;gap:calc(var(--u)*3.4);font-size:calc(var(--u)*6.4);line-height:1.2;pointer-events:none;padding:calc(var(--u)*.6) calc(var(--u)*2);text-shadow:0 2px 6px rgba(255,255,255,.65)}
.gw-deep-decor.floor{padding-bottom:calc(var(--u)*1.6);opacity:.95}
/* World-context presentation guard (world stylesheet only — sister games standalone
 * never load it, their behaviour is unchanged): a room's modal card (places picker /
 * finish card) may not grow taller than the screen; it scrolls inside instead of
 * clipping its title and OK button off-screen at 1024x768-class sizes. */
.gw-root .gk-card{max-height:96%;overflow-y:auto}
/* short landscape phones (844x390): shrink the layer so the completion banner stays on screen */
@media (max-height:520px){
.gw-deep-title{margin-top:calc(var(--u)*1.2);font-size:calc(var(--u)*5)}
.gw-deep-sub{font-size:calc(var(--u)*3.2);margin-top:0}
.gw-deep-decor{font-size:calc(var(--u)*4);padding:0 calc(var(--u)*2)}
.gw-deep-decor.floor{padding-bottom:calc(var(--u)*.4)}
.gw-deep-spots{gap:calc(var(--u)*1.6);padding:calc(var(--u)*.6)}
.gw-spot{width:calc(var(--u)*13.5);height:calc(var(--u)*13.5);min-width:52px;min-height:52px;font-size:calc(var(--u)*6)}
.gw-deep-done{font-size:calc(var(--u)*4.4);min-height:calc(var(--u)*5.6);padding-bottom:calc(var(--u)*1)}
}
@media (max-aspect-ratio:1/1){.gw-path{flex-wrap:wrap;top:calc(var(--u)*14);gap:calc(var(--u)*3)}.gw-door{flex:0 0 calc(var(--u)*28);max-width:none}}
@media (prefers-reduced-motion:reduce){.gw-fairy{animation:none}}
`;

class World {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {}); this.en = config.lang === 'en'; this.base = (config.base || './').replace(/\/?$/, '/'); this.config = config;
    this.save = normalizeSave(config.save); music.setMuted(this.save.muted);
    music.setBase(this.base);
    if (!document.getElementById('gw-style')) document.head.append(h('style', { id: 'gw-style' }, KIT_CSS + CSS));
    this.root = h('div', { class: 'gk-root gw-root', dir: this.en ? 'ltr' : 'rtl', style: 'background:none' });
    el.append(this.root);
    this.ro = new ResizeObserver(() => this._fit()); this.ro.observe(el); this._fit();
    this.disposed = false; this.game = null;
    // the app's back (system back / the game's own arrow handled by the app) steps back INSIDE the world first: level -> map -> out
    window.__gameBack = () => { if (this.deepEl) { this._closeDeep(); return true; } if (this.game) { this._close(); return true; } return false; };
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
    hub.append(h('div', { class: 'gw-title' }, this.en ? "Nour's world" : 'عالم نور'));
    hub.append(h('div', { class: 'gw-path' }, LEVELS.map((l, i) => {
      const card = `${this.base}../${l.folder}/card.webp`;
      return h('button', { class: `gw-door${l.id === 'party' ? ' party' : ''}`, 'data-level': l.id, 'aria-label': this.en ? l.en : l.ar, style: `background-image:url(${card})`, onclick: () => this._open(l) },
        h('div', { class: 'num' }, String(i + 1)), h('div', { class: 'nm' }, `${l.emoji} ${this.en ? l.en : l.ar}`), h('div', { class: 'st' }, starRow(this.save.stars[l.id])));
    })));
    const fairy = new Image(); fairy.src = `${this.base}../little_princess_dress/art/fairy_02.webp`;
    fairy.className = 'gw-fairy'; fairy.draggable = false; fairy.alt = '';
    fairy.onload = () => hub.append(fairy);
    // the gate for the older girls (owner 2026-11-22): "when you grow up: Fashion Queen" (ages 4+)
    hub.append(h('button', { class: 'gw-grow', 'aria-label': this.en ? 'When you grow up: Fashion Queen' : 'لما تكبري: ملكة الموضة', onclick: () => { music.tap(); this.post({ type: 'open_game', id: 'fashion_queen' }); } }, h('i', {}, '👑'), h('span', {}, this.en ? 'When you grow up: Fashion Queen' : 'لما تكبري: ملكة الموضة'), h('em', {}, this.en ? 'ages 4+' : '٤+ سنين')));
    hub.append(h('button', { class: 'gk-rb gw-back', 'aria-label': this.en ? 'Back' : 'رجوع', onclick: () => { music.stopAmbient(); this.post({ type: 'exit' }); } }, this.en ? '←' : '→'));
    const snd = h('button', { class: 'gk-rb p gw-snd', 'aria-label': 'sound', onclick: () => { this.save.muted = !this.save.muted; music.setMuted(this.save.muted); snd.textContent = this.save.muted ? '🔇' : '🔊'; this._save(); } }, this.save.muted ? '🔇' : '🔊');
    hub.append(snd);
    this.root.append(hub);
    this.hub = hub;
    const bg = this.save.bag; const have = bg.flowers.reduce((a, b) => a + b, 0) + bg.cupcakes + bg.looks + bg.hairdos + Object.values(bg.friends).reduce((a, b) => a + b, 0);
    if (have > 0) hub.append(h('div', { class: 'gw-bagnote' }, this.en ? `🎒 ${have} things for the party` : `🎒 ${have} حاجة للحفلة`));
    if (music.ctx) music.ambient('hub');
  }

  _save() { this.post({ type: 'save', save: this.save }); }

  _open(level) {
    music.unlock(); music.tap(); music.ambient('play'); music.mode = 'play';
    const box = h('div', { class: 'gw-game' });
    this.root.append(box);
    const cfg = { ...this.config, base: `${this.base}../${level.folder}/`, bag: this.save.bag };
    const post = (msg) => {
      if (!msg) return;
      if (msg.type === 'exit') { this._close(); return; }
      if (msg.type === 'star') { this.save.stars[level.id] = Math.min(999, (this.save.stars[level.id] || 0) + 1); this._save(); return; }
      if (msg.type === 'item') { addItem(this.save.bag, msg); this._save(); return; }
      if (msg.type === 'bag') { this.save.bag = normalizeBag(msg.bag); if (level.id === 'party' && msg.bag && msg.bag.parties > (this._parties || 0)) { this._parties = msg.bag.parties; this.save.stars.party = (this.save.stars.party || 0) + 1; } this._save(); return; }
      if (msg.type === 'goto') { const to = LEVELS[Number(msg.level)]; if (to) { this._close(); this._open(to); } return; }
      if (msg.type === 'speak') return; // no voice in this world
    };
    this.game = { level, box, api: level.start(box, cfg, post) };
    // Phase 2H: the door into the second layer, shown inside the room itself.
    const def = deepFor(level.id);
    if (def) {
      this.deepBtn = h('button', { class: 'gw-deep-btn', 'data-deep': level.id, 'aria-label': this.en ? def.en : def.ar, onclick: () => this._openDeep(level, def) },
        h('span', {}, '✨'), h('span', {}, this.en ? `More inside: ${def.en}` : `فيه أكتر جوه: ${def.ar}`));
      this.root.append(this.deepBtn);
      // Director Protocol fix: while the room's own modal card is open (places picker /
      // finish card, .gk-dim inside the room), the pill must not cover its buttons —
      // hide the pill until the card closes. World-side only; the room is untouched.
      const syncPill = () => { if (this.deepBtn) this.deepBtn.style.display = box.querySelector('.gk-dim') ? 'none' : ''; };
      this._pillObs = new MutationObserver(syncPill);
      this._pillObs.observe(box, { childList: true, subtree: true });
      syncPill();
    }
  }

  _openDeep(level, def) {
    if (this.deepEl) return;
    music.unlock(); music.tap();
    const room = new DeepRoom(def);
    const el = h('div', { class: 'gw-deep', 'data-deep-layer': level.id, style: `background:linear-gradient(180deg,${def.sky[0]},${def.sky[1]})` });
    const done = h('div', { class: 'gw-deep-done' });
    const sub = h('div', { class: 'gw-deep-sub' }, '');
    const paint = () => { sub.textContent = this.en ? `Found ${room.foundCount} of ${def.spots.length}` : `لقيتي ${room.foundCount} من ${def.spots.length}`; };
    const spots = h('div', { class: 'gw-deep-spots' }, def.spots.map((s, i) => {
      const b = h('button', { class: 'gw-spot', 'data-spot': String(i), 'aria-label': this.en ? s.en : s.ar, onclick: (e) => {
        const r = room.tap(i); if (r === 'no') return;
        music.tap();
        if (room.found(i)) { b.classList.add('found'); b.replaceChildren(h('span', {}, s.e), h('small', {}, this.en ? s.en : s.ar)); }
        else b.replaceChildren(h('span', {}, '🌱'), h('small', {}, this.en ? 'Tap again!' : 'دوسي كمان!'));
        paint();
        if (r === 'done' && !room.awarded) { room.awarded = true; this._deepDone(level, def, done); }
        e.currentTarget.blur();
      } }, h('span', {}, def.cover));
      return b;
    }));
    el.append(
      h('button', { class: 'gk-rb gw-deep-back', 'aria-label': this.en ? 'Back' : 'رجوع', onclick: () => this._closeDeep() }, this.en ? '←' : '→'),
      h('div', { class: 'gw-deep-title' }, `${def.emoji} ${this.en ? def.en : def.ar}`), sub,
      h('div', { class: 'gw-deep-decor', 'aria-hidden': 'true' }, (def.decor || []).join('')),
      spots,
      h('div', { class: 'gw-deep-decor floor', 'aria-hidden': 'true' }, (def.floor || []).join('')),
      done);
    paint();
    this.root.append(el);
    this.deepEl = el;
  }

  /** A finished second layer: ONE completion star for the door, the visit counted in
   * the save, and one bag gift where the theme fits (the party layer's gift is the sail itself). */
  _deepDone(level, def, doneEl) {
    this.save.stars[level.id] = Math.min(999, (this.save.stars[level.id] || 0) + 1);
    this.save.deep[level.id] = Math.min(999, (this.save.deep[level.id] || 0) + 1);
    if (def.gift === 'look') addItem(this.save.bag, { kind: 'look' });
    else if (def.gift === 'hairdo') addItem(this.save.bag, { kind: 'hairdo' });
    else if (def.gift === 'cupcake') addItem(this.save.bag, { kind: 'cupcake' });
    else if (def.gift === 'flower') addItem(this.save.bag, { kind: 'flower', color: this.save.deep[level.id] % 6 });
    else if (def.gift === 'friend') addItem(this.save.bag, { kind: 'friend', char: FRIENDS[this.save.deep[level.id] % FRIENDS.length] });
    this._save();
    if (doneEl) doneEl.textContent = level.id === 'party'
      ? (this.en ? '⭐ The felucca sails at sunset! ⭐' : '⭐ الفلوكة ماشية وقت الغروب! ⭐')
      : (this.en ? '⭐ You found everything! ⭐' : '⭐ لقيتي كل حاجة! ⭐');
  }

  _closeDeep() { if (this.deepEl) { this.deepEl.remove(); this.deepEl = null; } music.tap(); }

  _close() {
    if (!this.game) return;
    this._closeDeep();
    if (this._pillObs) { this._pillObs.disconnect(); this._pillObs = null; }
    if (this.deepBtn) { this.deepBtn.remove(); this.deepBtn = null; }
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
    window.__gameBack = null;
    if (this.game) { try { this.game.api.dispose(); } catch (_) { /* fine */ } }
    music.stopAmbient(); this.ro.disconnect(); this.root.remove();
  }
}

export function start(el, config, post) {
  const w = new World(el, config || {}, post);
  return { dispose: () => w.dispose(), pause: () => w.pause() };
}
