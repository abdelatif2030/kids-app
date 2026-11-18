// «استوديو الأميرات» — Dress-up Studio. Entry: window.DressStudio.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A dress-up and makeup game for girls: dress a bride or a princess (gowns, hair, makeup, veil, crown, jewellery, shoes, a
// background), follow 10 missions for stars, save your looks. Paper-doll art drawn in code; sound made in code. No network, no
// photos of anyone, nothing leaves the device.
import { SynthBase, hz } from '../../cozy_kit/audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['استوديو الأميرات', 'Princess Studio'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], play: ['يلا نلبّس', 'Dress up'], missions: ['المهمات', 'Missions'],
  free: ['لعب حر', 'Free play'], done: ['تم! ✨', 'Done! ✨'], save: ['احفظ الإطلالة', 'Save look'], saved: ['اتحفظت 💖', 'Saved 💖'], random: ['مفاجأة', 'Surprise'],
  stars: ['نجوم', 'stars'], goal: ['المطلوب', 'Needed'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], none: ['من غير', 'None'], looks: ['إطلالاتي', 'My looks'],
  cat_dress: ['فستان', 'Dress'], cat_hair: ['شعر', 'Hair'], cat_lips: ['روج', 'Lips'], cat_eyes: ['عيون', 'Eyes'], cat_cheeks: ['خدود', 'Blush'], cat_top: ['إكسسوار', 'Extras'], cat_shoes: ['حذاء', 'Shoes'], cat_bg: ['خلفية', 'Scene'], cat_skin: ['البشرة', 'Skin'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'],
};
const I = makeI18n(S);

const COL = ['#ffffff', '#ff8ab8', '#ff4a7a', '#b86aff', '#5ab8ff', '#5af0a0', '#ffd23a', '#ff8a3a', '#2a2a3a', '#e8c8a0'];
const ITEMS = {
  skin: ['#ffe0c8', '#f0c8a0', '#d8a070', '#a87048', '#7a4a30'].map((c, i) => ({ id: `skin${i}`, c, tags: [], icon: '' })),
  dress: [
    { id: 'gown_w', ar: 'فستان زفاف أبيض', en: 'White wedding gown', style: 'gown', c: '#ffffff', tags: ['wedding', 'princess'] },
    { id: 'gown_p', ar: 'فستان أميرة وردي', en: 'Pink princess gown', style: 'gown', c: '#ff8ab8', tags: ['princess', 'party'] },
    { id: 'gown_b', ar: 'فستان أزرق ملكي', en: 'Royal blue gown', style: 'gown', c: '#5a8aff', tags: ['princess', 'party'] },
    { id: 'mermaid', ar: 'فستان حورية', en: 'Mermaid dress', style: 'mermaid', c: '#5af0d0', tags: ['beach', 'party'] },
    { id: 'mini_y', ar: 'فستان صيفي أصفر', en: 'Yellow summer dress', style: 'mini', c: '#ffd23a', tags: ['beach', 'school', 'picnic'] },
    { id: 'mini_r', ar: 'فستان أحمر', en: 'Red dress', style: 'mini', c: '#ff4a5a', tags: ['party', 'school'] },
    { id: 'a_line', ar: 'فستان بنفسجي', en: 'Purple dress', style: 'aline', c: '#b86aff', tags: ['party', 'school', 'picnic'] },
    { id: 'set_g', ar: 'طقم مدرسة', en: 'School outfit', style: 'aline', c: '#5ab8ff', tags: ['school'] },
    { id: 'gown_g', ar: 'فستان ذهبي', en: 'Golden gown', style: 'gown', c: '#ffd860', tags: ['wedding', 'princess', 'party'] },
    { id: 'gown_m', ar: 'فستان نعناعي', en: 'Mint gown', style: 'gown', c: '#8af0c8', tags: ['princess', 'picnic'] },
  ],
  hair: [
    { id: 'long_b', ar: 'شعر طويل بني', en: 'Long brown', style: 'long', c: '#7a4a2a', tags: ['wedding', 'school'] },
    { id: 'long_y', ar: 'شعر طويل أشقر', en: 'Long blonde', style: 'long', c: '#f0d060', tags: ['princess', 'party'] },
    { id: 'long_r', ar: 'شعر أحمر', en: 'Red hair', style: 'long', c: '#e8452a', tags: ['party'] },
    { id: 'bun_k', ar: 'كعكة أنيقة', en: 'Elegant bun', style: 'bun', c: '#2a1a1a', tags: ['wedding', 'school', 'party'] },
    { id: 'pony', ar: 'ذيل حصان', en: 'Ponytail', style: 'pony', c: '#7a4a2a', tags: ['school', 'picnic', 'beach'] },
    { id: 'braid', ar: 'ضفيرة', en: 'Braid', style: 'braid', c: '#c88a4a', tags: ['school', 'picnic'] },
    { id: 'curl_p', ar: 'شعر مجعّد وردي', en: 'Pink curls', style: 'curly', c: '#ff8ac8', tags: ['party', 'princess'] },
    { id: 'curl_b', ar: 'شعر مجعّد أسود', en: 'Black curls', style: 'curly', c: '#1a1a22', tags: ['wedding', 'princess', 'beach'] },
    { id: 'bob', ar: 'كاريه', en: 'Bob', style: 'bob', c: '#2a1a1a', tags: ['school', 'party'] },
  ],
  lips: ['#ff4a7a', '#e83a3a', '#ff8ab8', '#b8386a', '#ff7a5a', '#8a2a5a'].map((c, i) => ({ id: `lip${i}`, c, ar: 'روج', en: 'Lipstick', tags: ['makeup'] })),
  eyes: ['#b86aff', '#5ab8ff', '#ff8ab8', '#5af0a0', '#ffd23a', '#2a2a3a'].map((c, i) => ({ id: `eye${i}`, c, ar: 'ظل عيون', en: 'Eyeshadow', tags: ['makeup'] })),
  cheeks: ['#ff9ab8', '#ff7a8a', '#ffb88a', '#e86a9a'].map((c, i) => ({ id: `ch${i}`, c, ar: 'أحمر خدود', en: 'Blush', tags: ['makeup'] })),
  top: [
    { id: 'veil', ar: 'طرحة', en: 'Veil', kind: 'veil', tags: ['wedding'] }, { id: 'crown', ar: 'تاج', en: 'Crown', kind: 'crown', tags: ['princess', 'wedding'] },
    { id: 'tiara', ar: 'تاج صغير', en: 'Tiara', kind: 'tiara', tags: ['princess', 'party'] }, { id: 'flowers', ar: 'ورود', en: 'Flowers', kind: 'flowers', tags: ['wedding', 'picnic', 'beach'] },
    { id: 'necklace', ar: 'عقد لؤلؤ', en: 'Pearl necklace', kind: 'necklace', tags: ['wedding', 'party'] }, { id: 'earrings', ar: 'حلق', en: 'Earrings', kind: 'earrings', tags: ['party', 'wedding', 'princess'] },
    { id: 'bouquet', ar: 'بوكيه', en: 'Bouquet', kind: 'bouquet', tags: ['wedding'] }, { id: 'bow', ar: 'فيونكة', en: 'Bow', kind: 'bow', tags: ['school', 'picnic', 'party'] },
    { id: 'hat', ar: 'قبعة صيفية', en: 'Sun hat', kind: 'hat', tags: ['beach', 'picnic'] }, { id: 'bag', ar: 'شنطة', en: 'Bag', kind: 'bag', tags: ['school', 'picnic'] },
  ],
  shoes: [
    { id: 'heels_w', ar: 'كعب أبيض', en: 'White heels', c: '#ffffff', tags: ['wedding', 'party'] }, { id: 'heels_p', ar: 'كعب وردي', en: 'Pink heels', c: '#ff6a9a', tags: ['party', 'princess'] },
    { id: 'flats', ar: 'حذاء مسطح', en: 'Flats', c: '#b86aff', tags: ['school', 'picnic'] }, { id: 'sandals', ar: 'صندل', en: 'Sandals', c: '#ffd23a', tags: ['beach'] },
    { id: 'boots', ar: 'بوت', en: 'Boots', c: '#8a5a3a', tags: ['school'] }, { id: 'glass', ar: 'حذاء كريستال', en: 'Crystal shoes', c: '#bfefff', tags: ['princess', 'wedding'] },
  ],
  bg: [
    { id: 'church', ar: 'قاعة الفرح', en: 'Wedding hall', g: ['#fff0f8', '#ffd8ec'], tags: ['wedding'] }, { id: 'castle', ar: 'القصر', en: 'Castle', g: ['#d8c8ff', '#8a6ad8'], tags: ['princess'] },
    { id: 'beach', ar: 'الشاطئ', en: 'Beach', g: ['#9ae8ff', '#ffe8a0'], tags: ['beach'] }, { id: 'school', ar: 'المدرسة', en: 'School', g: ['#bfe8ff', '#a8e8a0'], tags: ['school'] },
    { id: 'party', ar: 'الحفلة', en: 'Party', g: ['#ff9ad8', '#6a3ad8'], tags: ['party'] }, { id: 'garden', ar: 'الحديقة', en: 'Picnic garden', g: ['#c8f0ff', '#8ad868'], tags: ['picnic'] },
  ],
};
const CATS = ['dress', 'hair', 'lips', 'eyes', 'cheeks', 'top', 'shoes', 'bg', 'skin'];
const CAT_ICON = { dress: '👗', hair: '💇‍♀️', lips: '💄', eyes: '👁️', cheeks: '🌸', top: '👑', shoes: '👠', bg: '🏰', skin: '🎨' };
const MISSIONS = [
  { ar: 'عروسة الفرح', en: 'The Bride', need: ['wedding', 'wedding', 'wedding'], cats: ['dress', 'top', 'bg'], tag: 'wedding' },
  { ar: 'أميرة القصر', en: 'Palace Princess', need: ['princess'], tag: 'princess' },
  { ar: 'يوم على الشاطئ', en: 'Beach Day', need: ['beach'], tag: 'beach' },
  { ar: 'يوم المدرسة', en: 'School Day', need: ['school'], tag: 'school' },
  { ar: 'حفلة الأميرات', en: 'Princess Party', need: ['party'], tag: 'party' },
  { ar: 'نزهة في الحديقة', en: 'Garden Picnic', need: ['picnic'], tag: 'picnic' },
  { ar: 'ميك آب كامل', en: 'Full Makeup', need: ['makeup'], tag: 'makeup', makeup: true },
  { ar: 'عروسة جميلة جدًا', en: 'Gorgeous Bride', need: ['wedding'], tag: 'wedding', makeup: true, strict: true },
  { ar: 'أميرة الحفلة الكبيرة', en: 'Grand Ball Princess', need: ['princess', 'party'], tag: 'princess', makeup: true },
  { ar: 'ملكة الموضة', en: 'Fashion Queen', need: [], tag: 'any', makeup: true, strict: true },
];

class Sound extends SynthBase {
  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'pick': this.tone('triangle', hz(84), t, 0.08, 0.07); this.tone('sine', hz(91), t + 0.05, 0.12, 0.06); break;
      case 'sparkle': [0, 5, 9, 14, 17].forEach((s, i) => this.tone('sine', hz(84 + s), t + i * 0.05, 0.2, 0.07)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setTune(null); return; } this.setTune({ tempo: 100, beats: 16, wave: 'sine', vol: 0.09, notes: [[0, 72, 1], [1, 76, 1], [2, 79, 2], [4, 77, 1], [5, 74, 1], [6, 72, 2], [8, 71, 1], [9, 74, 1], [10, 79, 2], [12, 77, 1], [13, 76, 1], [14, 72, 2], [0, 48, 2], [4, 53, 2], [8, 55, 2], [12, 48, 2]] }); }
}

const DEFAULT_LOOK = { skin: 'skin0', dress: 'gown_p', hair: 'long_b', lips: 'lip0', eyes: 'eye0', cheeks: 'ch0', top: [], shoes: 'heels_p', bg: 'castle' };
const find = (cat, id) => (ITEMS[cat] || []).find((x) => x.id === id);

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(true);
    this.save = { stars: {}, looks: [], muted: false, ...(config.save && typeof config.save === 'object' ? config.save : {}) };
    if (!Array.isArray(this.save.looks)) this.save.looks = [];
    this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    if (!document.getElementById('ds-style')) document.head.append(h('style', { id: 'ds-style' }, css('ds', '#ff6aa8', '#a82a68', '#fff0a0') + `
.ds-root{background:#ffd8ec;touch-action:manipulation}
.ds-panel{position:absolute;left:0;right:0;bottom:0;height:38%;background:linear-gradient(180deg,rgba(255,255,255,.92),rgba(255,224,240,.97));border-radius:calc(var(--u)*4) calc(var(--u)*4) 0 0;display:flex;flex-direction:column;pointer-events:auto;box-shadow:0 calc(var(--u)*-1) calc(var(--u)*3) rgba(160,40,100,.25)}
.ds-tabs{display:flex;gap:calc(var(--u)*1);padding:calc(var(--u)*1.2);overflow-x:auto;flex:none}
.ds-tab{flex:none;font-family:inherit;font-weight:900;border:none;border-radius:calc(var(--u)*3);background:#fff;padding:calc(var(--u)*1) calc(var(--u)*2);font-size:calc(var(--u)*3);color:#a82a68;cursor:pointer;box-shadow:0 calc(var(--u)*.4) 0 #f0a8c8;display:flex;flex-direction:column;align-items:center}
.ds-tab.on{background:linear-gradient(180deg,#ff8ab8,#e83a88);color:#fff}.ds-tab i{font-style:normal;font-size:calc(var(--u)*5)}
.ds-grid{flex:1;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(calc(var(--u)*17),1fr));gap:calc(var(--u)*1.2);padding:calc(var(--u)*1.2);align-content:start}
.ds-item{font-family:inherit;font-weight:900;border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);background:#fff;padding:calc(var(--u)*.8);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.3);font-size:calc(var(--u)*2.4);color:#a82a68;box-shadow:0 calc(var(--u)*.4) 0 #f0a8c8}
.ds-item.on{border-color:#ff3a88;background:#ffe8f4}.ds-sw{width:calc(var(--u)*8);height:calc(var(--u)*8);border-radius:50%;border:calc(var(--u)*.4) solid rgba(0,0,0,.15);display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*4.4)}
.ds-goal{position:absolute;left:50%;bottom:calc(38% + var(--u)*1.5);transform:translateX(-50%);background:rgba(255,255,255,.88);border:calc(var(--u)*.4) solid #ff8ab8;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.4);color:#a82a68;max-width:92%;text-align:center;pointer-events:none}
` ));
    this.root = h('div', { class: 'ds-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas'); this.root.append(this.cv); this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'ds-layer' }); this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.look = { ...DEFAULT_LOOK, top: [] }; this.cat = 'dress'; this.sparkles = [];
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 2500))]); } catch (_) { /* system font */ } }
  _resize() { const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight; this.dpr = Math.min(window.devicePixelRatio || 1, 2); this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr); this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`); }
  _soundPill() { const pill = h('button', { class: 'ds-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  showMenu() {
    this.mode = 'menu'; this.layer.replaceChildren(); this.sound.setMode(false);
    const ar = I.getLang() !== 'en';
    const ms = h('div', { class: 'ds-lvs', style: 'grid-template-columns:1fr 1fr' }, MISSIONS.map((m, i) => h('button', { class: 'ds-lv', onclick: () => { this.sound.play('tap'); this.start(i); } }, h('i', {}, ['👰', '👸', '🏖️', '🎒', '🎉', '🧺', '💄', '💍', '✨', '👑'][i]), h('span', {}, ar ? m.ar : m.en), h('span', {}, '⭐'.repeat(this.save.stars[i] || 0) || '·'))));
    this.layer.append(h('div', { class: 'ds-dim' }, h('div', { class: 'ds-card' }, h('div', { class: 'ds-logo' }, '👸 ', I.t('title')), h('button', { class: 'ds-btn alt', onclick: () => { this.sound.play('tap'); this.start(-1); } }, I.t('free')), h('div', { class: 'ds-small' }, I.t('missions')), ms, h('button', { class: 'ds-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  start(mission) {
    this.mission = mission; this.mode = 'play';
    this.look = { ...DEFAULT_LOOK, top: [] };
    this.layer.replaceChildren(); this.sound.setMode(true);
    const ar = I.getLang() !== 'en';
    const back = h('button', { class: 'ds-round', 'aria-label': I.t('menu'), onclick: () => this.showMenu() }, '☰');
    this.starsEl = h('span', {}, '');
    const shuffle = h('button', { class: 'ds-round', 'aria-label': I.t('random'), onclick: () => this.surprise() }, '🎲');
    const saveB = h('button', { class: 'ds-round', 'aria-label': I.t('save'), onclick: () => this.saveLook() }, '💖');
    this.layer.append(h('div', { class: 'ds-top' }, back, h('div', { class: 'ds-pill' }, mission >= 0 ? (ar ? MISSIONS[mission].ar : MISSIONS[mission].en) : I.t('free')), h('div', { class: 'ds-pill' }, this.starsEl), h('div', { style: 'display:flex;gap:calc(var(--u)*1)' }, shuffle, saveB)));
    if (mission >= 0) this.layer.append(h('div', { class: 'ds-goal' }, this.goalText()));
    this.tabs = h('div', { class: 'ds-tabs' }, CATS.map((c) => h('button', { class: `ds-tab${c === this.cat ? ' on' : ''}`, 'data-c': c, onclick: () => { this.cat = c; this.sound.play('tap'); this._renderPanel(); } }, h('i', {}, CAT_ICON[c]), I.t(`cat_${c}`))));
    this.grid = h('div', { class: 'ds-grid' });
    this.layer.append(h('div', { class: 'ds-panel' }, this.tabs, this.grid));
    this._renderPanel(); this._soundPill(); this._score();
  }

  goalText() {
    const m = MISSIONS[this.mission]; const ar = I.getLang() !== 'en';
    const tagAr = { wedding: 'زفاف', princess: 'أميرة', beach: 'شاطئ', school: 'مدرسة', party: 'حفلة', picnic: 'نزهة', makeup: 'ميك آب', any: 'أي حاجة جميلة' };
    return `${I.t('goal')}: ${ar ? tagAr[m.tag] : m.tag}${m.makeup ? (ar ? ' + روج وظل وخدود' : ' + lips, eyes, blush') : ''}`;
  }

  _renderPanel() {
    const ar = I.getLang() !== 'en';
    for (const b of this.tabs.children) b.classList.toggle('on', b.dataset.c === this.cat);
    this.grid.replaceChildren();
    const cat = this.cat; const items = ITEMS[cat];
    if (cat === 'top') {
      for (const it of items) { const on = this.look.top.includes(it.id); this.grid.append(h('button', { class: `ds-item${on ? ' on' : ''}`, onclick: () => { this.look.top = on ? this.look.top.filter((x) => x !== it.id) : [...this.look.top, it.id]; this.sound.play('pick'); this._sparkle(); this._renderPanel(); this._score(); } }, h('div', { class: 'ds-sw', style: 'background:#fff' }, { veil: '🕊️', crown: '👑', tiara: '💎', flowers: '🌸', necklace: '📿', earrings: '✨', bouquet: '💐', bow: '🎀', hat: '👒', bag: '👜' }[it.kind]), ar ? it.ar : it.en)); }
      return;
    }
    if (cat === 'lips' || cat === 'eyes' || cat === 'cheeks' || cat === 'skin') this.grid.append(h('button', { class: `ds-item${!this.look[cat] ? ' on' : ''}`, onclick: () => { this.look[cat] = null; this.sound.play('pick'); this._renderPanel(); this._score(); } }, h('div', { class: 'ds-sw', style: 'background:#fff' }, '🚫'), I.t('none')));
    for (const it of items) {
      const on = this.look[cat] === it.id;
      this.grid.append(h('button', { class: `ds-item${on ? ' on' : ''}`, onclick: () => { this.look[cat] = it.id; this.sound.play('pick'); this._sparkle(); this._renderPanel(); this._score(); } },
        h('div', { class: 'ds-sw', style: `background:${it.c || (it.g ? `linear-gradient(180deg,${it.g[0]},${it.g[1]})` : '#fff')}` }, cat === 'dress' ? '👗' : cat === 'hair' ? '💇‍♀️' : cat === 'shoes' ? '👠' : cat === 'bg' ? '🏰' : ''), it.ar ? (ar ? it.ar : it.en) : ''));
    }
  }

  _tagsOf() {
    const tags = []; const L = this.look;
    for (const cat of ['dress', 'hair', 'shoes', 'bg']) { const it = find(cat, L[cat]); if (it) tags.push(...it.tags); }
    for (const id of L.top) { const it = find('top', id); if (it) tags.push(...it.tags); }
    return tags;
  }

  _score() {
    const L = this.look;
    if (this.mission < 0) { this.starsEl.textContent = '✨'; return 0; }
    const m = MISSIONS[this.mission];
    const tags = this._tagsOf();
    let got = 0; let need = 0;
    if (m.tag === 'any') { need = 3; got = Math.min(3, new Set(tags).size >= 5 ? 3 : new Set(tags).size >= 3 ? 2 : 1); }
    else {
      const count = tags.filter((t) => t === m.tag).length;
      need = m.strict ? 4 : 3; got = Math.min(3, Math.floor((count / need) * 3 + 0.0001));
      for (const nt of m.need) if (!tags.includes(nt)) got = Math.min(got, 1);
    }
    if (m.makeup) { const mk = [L.lips, L.eyes, L.cheeks].filter(Boolean).length; got = Math.min(got, mk === 3 ? 3 : mk === 2 ? 2 : 1); }
    this.stars = Math.max(0, got);
    this.starsEl.textContent = '⭐'.repeat(this.stars) + '☆'.repeat(3 - this.stars);
    if (this.stars === 3 && !this.won) { this.won = true; this.sound.play('win'); this.save.stars[this.mission] = 3; this.post({ type: 'save', save: this.save }); this.layer.append(h('div', { class: 'ds-goal', style: 'bottom:calc(38% + var(--u)*8);top:auto;background:#fff0a0' }, I.t('done'))); for (let i = 0; i < 40; i++) this._sparkle(); } else if (this.stars < 3) this.won = false;
    if (this.stars > (this.save.stars[this.mission] || 0) && this.stars < 3) { this.save.stars[this.mission] = this.stars; this.post({ type: 'save', save: this.save }); }
    return this.stars;
  }

  surprise() {
    const pick = (a) => a[Math.floor(Math.random() * a.length)].id;
    this.look = { skin: this.look.skin, dress: pick(ITEMS.dress), hair: pick(ITEMS.hair), lips: pick(ITEMS.lips), eyes: pick(ITEMS.eyes), cheeks: pick(ITEMS.cheeks), top: ITEMS.top.filter(() => Math.random() < 0.35).map((x) => x.id), shoes: pick(ITEMS.shoes), bg: pick(ITEMS.bg) };
    this.sound.play('sparkle'); for (let i = 0; i < 20; i++) this._sparkle(); this._renderPanel(); this._score();
  }

  saveLook() { this.save.looks = [{ ...this.look }, ...this.save.looks].slice(0, 6); this.post({ type: 'save', save: this.save }); this.sound.play('sparkle'); for (let i = 0; i < 20; i++) this._sparkle(); const t = h('div', { class: 'ds-goal', style: 'bottom:calc(38% + var(--u)*8);top:auto;background:#fff0a0' }, I.t('saved')); this.layer.append(t); setTimeout(() => t.remove(), 1600); }

  _sparkle() { this.sparkles.push({ x: this.cw * (0.25 + Math.random() * 0.5), y: this.ch * (0.1 + Math.random() * 0.4), t: 0, s: 0.5 + Math.random() }); }

  _loop() { const frame = (now) => { if (!this.root.isConnected) return; const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt; for (const s of this.sparkles) s.t += dt; this.sparkles = this.sparkles.filter((s) => s.t < 1); this._draw(); this.raf = requestAnimationFrame(frame); }; this.raf = requestAnimationFrame(frame); }

  _draw() {
    const c = this.g; c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const W = this.cw; const H = this.ch; const L = this.look;
    const bg = find('bg', L.bg) || ITEMS.bg[1];
    const gr = c.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, bg.g[0]); gr.addColorStop(1, bg.g[1]); c.fillStyle = gr; c.fillRect(0, 0, W, H);
    this._scene(c, W, H, bg.id);
    const avail = H * 0.5; const s = Math.min(avail / 215, W / 120);
    const cx = W / 2; const top = H * 0.1;
    this._doll(c, cx, top + 6 * s, s, L);
    for (const sp of this.sparkles) { c.globalAlpha = 1 - sp.t; c.fillStyle = '#fff6a0'; c.font = `${this.u * 5 * sp.s}px system-ui`; c.textAlign = 'center'; c.fillText('✨', sp.x, sp.y - sp.t * this.u * 8); }
    c.globalAlpha = 1;
  }

  _scene(c, W, H, id) {
    c.fillStyle = 'rgba(255,255,255,.5)';
    if (id === 'castle') { c.fillStyle = 'rgba(255,255,255,.4)'; for (const x of [0.1, 0.3, 0.75, 0.9]) { c.fillRect(W * x - 24, H * 0.18, 48, H * 0.4); c.beginPath(); c.moveTo(W * x - 30, H * 0.18); c.lineTo(W * x, H * 0.08); c.lineTo(W * x + 30, H * 0.18); c.fill(); } }
    else if (id === 'beach') { c.fillStyle = '#fff0a0'; c.fillRect(0, H * 0.55, W, H); c.fillStyle = 'rgba(255,255,255,.7)'; c.beginPath(); c.ellipse(W * 0.2, H * 0.1, 50, 18, 0, 0, 6.3); c.fill(); c.fillStyle = '#ffd23a'; c.beginPath(); c.arc(W * 0.85, H * 0.12, 30, 0, 6.3); c.fill(); }
    else if (id === 'school' || id === 'garden') { c.fillStyle = id === 'garden' ? '#7ad858' : '#8ad868'; c.fillRect(0, H * 0.55, W, H); c.font = '38px system-ui'; c.textAlign = 'center'; for (const x of [0.12, 0.88, 0.25, 0.75]) c.fillText(id === 'garden' ? '🌷' : '🌳', W * x, H * 0.55); }
    else if (id === 'party') { c.font = '34px system-ui'; c.textAlign = 'center'; for (let i = 0; i < 8; i++) c.fillText(['🎈', '✨', '🎉'][i % 3], W * (0.1 + i * 0.11), H * (0.1 + (i % 3) * 0.06 + Math.sin(this.clock * 2 + i) * 0.01)); }
    else { c.font = '30px system-ui'; c.textAlign = 'center'; for (let i = 0; i < 7; i++) c.fillText('💐', W * (0.08 + i * 0.14), H * 0.52); c.fillStyle = 'rgba(255,255,255,.6)'; c.fillRect(0, H * 0.56, W, H); }
  }

  _doll(c, cx, y0, s, L) {
    const skin = (find('skin', L.skin) || ITEMS.skin[0]).c;
    const dress = find('dress', L.dress); const hair = find('hair', L.hair);
    const sway = Math.sin(this.clock * 2) * s * 0.4;
    c.save(); c.translate(cx + sway * 0.2, y0);
    const px = (v) => v * s;
    // hair back
    if (hair) { c.fillStyle = hair.c; if (hair.style === 'long' || hair.style === 'curly') { c.beginPath(); c.ellipse(0, px(34), px(hair.style === 'curly' ? 27 : 23), px(40), 0, 0, 6.3); c.fill(); if (hair.style === 'curly') for (let k = 0; k < 8; k++) { c.beginPath(); c.arc(px(-24 + k * 7), px(66 + (k % 2) * 4), px(6), 0, 6.3); c.fill(); } } else if (hair.style === 'pony') { c.beginPath(); c.ellipse(px(24), px(50), px(9), px(26), 0.3, 0, 6.3); c.fill(); } else if (hair.style === 'braid') { for (let k = 0; k < 6; k++) { c.beginPath(); c.arc(px(-2 + (k % 2) * 3), px(60 + k * 6), px(5), 0, 6.3); c.fill(); } } }
    // body: arms, neck, legs
    c.fillStyle = skin;
    c.fillRect(px(-4), px(48), px(8), px(10)); // neck
    c.beginPath(); c.roundRect(px(-26), px(62), px(10), px(48), px(5)); c.fill(); c.beginPath(); c.roundRect(px(16), px(62), px(10), px(48), px(5)); c.fill(); // arms
    const shoe = find('shoes', L.shoes);
    c.fillRect(px(-10), px(150), px(8), px(52)); c.fillRect(px(2), px(150), px(8), px(52));
    // dress
    const dc = dress ? dress.c : '#ffffff'; c.fillStyle = dc; c.strokeStyle = 'rgba(0,0,0,.12)'; c.lineWidth = px(0.8);
    const st = dress ? dress.style : 'aline';
    c.beginPath();
    if (st === 'gown') { c.moveTo(px(-16), px(58)); c.lineTo(px(16), px(58)); c.lineTo(px(20), px(100)); c.lineTo(px(48), px(205)); c.quadraticCurveTo(0, px(220), px(-48), px(205)); c.lineTo(px(-20), px(100)); }
    else if (st === 'mermaid') { c.moveTo(px(-16), px(58)); c.lineTo(px(16), px(58)); c.lineTo(px(17), px(120)); c.quadraticCurveTo(px(20), px(165), px(38), px(205)); c.quadraticCurveTo(0, px(195), px(-38), px(205)); c.quadraticCurveTo(px(-20), px(165), px(-17), px(120)); }
    else if (st === 'mini') { c.moveTo(px(-16), px(58)); c.lineTo(px(16), px(58)); c.lineTo(px(18), px(100)); c.lineTo(px(30), px(135)); c.lineTo(px(-30), px(135)); c.lineTo(px(-18), px(100)); }
    else { c.moveTo(px(-16), px(58)); c.lineTo(px(16), px(58)); c.lineTo(px(18), px(100)); c.lineTo(px(38), px(172)); c.lineTo(px(-38), px(172)); c.lineTo(px(-18), px(100)); }
    c.closePath(); c.fill(); c.stroke();
    c.fillStyle = 'rgba(255,255,255,.35)'; c.beginPath(); c.arc(px(-6), px(80), px(10), 0, 6.3); c.fill();
    if (dress && dress.id === 'gown_w') { c.fillStyle = 'rgba(255,220,240,.5)'; c.fillRect(px(-16), px(96), px(32), px(5)); }
    // shoes
    if (shoe) { c.fillStyle = shoe.c; c.strokeStyle = 'rgba(0,0,0,.2)'; for (const x of [-14, 0]) { c.beginPath(); c.roundRect(px(x - 2), px(198), px(16), px(8), px(3)); c.fill(); c.stroke(); } }
    // head
    c.fillStyle = skin; c.beginPath(); c.ellipse(0, px(30), px(20), px(23), 0, 0, 6.3); c.fill();
    // blush, eyes, nose, lips
    const ch = find('cheeks', L.cheeks); if (ch) { c.fillStyle = ch.c; c.globalAlpha = 0.55; c.beginPath(); c.ellipse(px(-12), px(38), px(5), px(3.4), 0, 0, 6.3); c.ellipse(px(12), px(38), px(5), px(3.4), 0, 0, 6.3); c.fill(); c.globalAlpha = 1; }
    const ey = find('eyes', L.eyes); if (ey) { c.fillStyle = ey.c; c.globalAlpha = 0.75; c.beginPath(); c.ellipse(px(-8), px(27), px(6.4), px(3.6), 0, 0, 6.3); c.ellipse(px(8), px(27), px(6.4), px(3.6), 0, 0, 6.3); c.fill(); c.globalAlpha = 1; }
    c.fillStyle = '#fff'; c.beginPath(); c.ellipse(px(-8), px(30), px(4.6), px(4.2), 0, 0, 6.3); c.ellipse(px(8), px(30), px(4.6), px(4.2), 0, 0, 6.3); c.fill();
    const blink = Math.sin(this.clock * 1.3) > 0.985;
    c.fillStyle = '#3a2a3a'; c.beginPath(); c.arc(px(-8), px(30.5), px(blink ? 0.1 : 2.8), 0, 6.3); c.arc(px(8), px(30.5), px(blink ? 0.1 : 2.8), 0, 6.3); c.fill();
    c.fillStyle = '#fff'; c.beginPath(); c.arc(px(-7), px(29.5), px(0.9), 0, 6.3); c.arc(px(9), px(29.5), px(0.9), 0, 6.3); c.fill();
    c.strokeStyle = '#3a2a3a'; c.lineWidth = px(0.9); c.beginPath(); c.moveTo(px(-12.5), px(26)); c.lineTo(px(-14), px(24)); c.moveTo(px(12.5), px(26)); c.lineTo(px(14), px(24)); c.stroke();
    c.strokeStyle = 'rgba(120,70,50,.5)'; c.lineWidth = px(0.8); c.beginPath(); c.moveTo(px(0), px(34)); c.quadraticCurveTo(px(1.5), px(37), px(-0.5), px(37.5)); c.stroke();
    const lp = find('lips', L.lips); c.fillStyle = lp ? lp.c : '#d88a8a'; c.beginPath(); c.moveTo(px(-5), px(44)); c.quadraticCurveTo(0, px(41.5), px(5), px(44)); c.quadraticCurveTo(0, px(49), px(-5), px(44)); c.fill();
    // hair front
    if (hair) { c.fillStyle = hair.c; c.beginPath(); c.ellipse(0, px(15), px(22), px(13), 0, Math.PI, 0); c.fill(); c.beginPath(); c.ellipse(px(-19), px(26), px(5), px(13), 0.1, 0, 6.3); c.ellipse(px(19), px(26), px(5), px(13), -0.1, 0, 6.3); c.fill(); if (hair.style === 'bun') { c.beginPath(); c.arc(0, px(2), px(9), 0, 6.3); c.fill(); } if (hair.style === 'bob') { c.beginPath(); c.roundRect(px(-23), px(14), px(46), px(34), px(14)); c.globalCompositeOperation = 'destination-over'; c.fill(); c.globalCompositeOperation = 'source-over'; } }
    // extras
    for (const id of L.top) this._extra(c, find('top', id).kind, px, s);
    c.restore();
  }

  _extra(c, kind, px) {
    c.save();
    if (kind === 'veil') { c.fillStyle = 'rgba(255,255,255,.55)'; c.strokeStyle = 'rgba(200,200,220,.7)'; c.beginPath(); c.moveTo(px(-8), px(10)); c.quadraticCurveTo(px(-50), px(90), px(-44), px(190)); c.lineTo(px(44), px(190)); c.quadraticCurveTo(px(50), px(90), px(8), px(10)); c.closePath(); c.fill(); c.stroke(); }
    else if (kind === 'crown') { c.fillStyle = '#ffd23a'; c.strokeStyle = '#b88a0a'; c.lineWidth = px(0.8); c.beginPath(); c.moveTo(px(-14), px(12)); c.lineTo(px(-14), px(0)); c.lineTo(px(-7), px(7)); c.lineTo(px(0), px(-4)); c.lineTo(px(7), px(7)); c.lineTo(px(14), px(0)); c.lineTo(px(14), px(12)); c.closePath(); c.fill(); c.stroke(); c.fillStyle = '#ff4a7a'; c.beginPath(); c.arc(0, px(8), px(2.2), 0, 6.3); c.fill(); }
    else if (kind === 'tiara') { c.strokeStyle = '#ffd23a'; c.lineWidth = px(1.6); c.beginPath(); c.arc(0, px(14), px(14), Math.PI * 1.15, Math.PI * 1.85); c.stroke(); c.fillStyle = '#7ad8ff'; c.beginPath(); c.arc(0, px(0), px(2.4), 0, 6.3); c.fill(); }
    else if (kind === 'flowers') { c.font = `${px(9)}px system-ui`; c.textAlign = 'center'; for (const x of [-16, -8, 0, 8, 16]) c.fillText(['🌸', '🌷', '🌹', '🌷', '🌸'][(x + 16) / 8], px(x), px(14 + Math.abs(x) * 0.3)); }
    else if (kind === 'necklace') { c.fillStyle = '#fff6f8'; c.strokeStyle = '#d8c8d0'; for (let k = 0; k < 9; k++) { const a = Math.PI * (0.15 + k * 0.088); c.beginPath(); c.arc(px(Math.cos(a) * 11), px(54 + Math.sin(a) * 7), px(1.5), 0, 6.3); c.fill(); c.stroke(); } }
    else if (kind === 'earrings') { c.fillStyle = '#ffd23a'; c.beginPath(); c.arc(px(-20), px(40), px(2.2), 0, 6.3); c.arc(px(20), px(40), px(2.2), 0, 6.3); c.fill(); c.fillStyle = '#ff4a7a'; c.beginPath(); c.arc(px(-20), px(44), px(1.6), 0, 6.3); c.arc(px(20), px(44), px(1.6), 0, 6.3); c.fill(); }
    else if (kind === 'bouquet') { c.font = `${px(20)}px system-ui`; c.textAlign = 'center'; c.fillText('💐', px(0), px(112)); }
    else if (kind === 'bow') { c.fillStyle = '#ff4a8a'; c.beginPath(); c.moveTo(px(14), px(8)); c.lineTo(px(26), px(2)); c.lineTo(px(26), px(14)); c.closePath(); c.moveTo(px(14), px(8)); c.lineTo(px(2), px(2)); c.lineTo(px(2), px(14)); c.closePath(); c.fill(); }
    else if (kind === 'hat') { c.fillStyle = '#f0d890'; c.strokeStyle = '#b8984a'; c.beginPath(); c.ellipse(0, px(12), px(34), px(8), 0, 0, 6.3); c.fill(); c.stroke(); c.beginPath(); c.ellipse(0, px(6), px(16), px(10), 0, Math.PI, 0); c.fill(); c.stroke(); c.fillStyle = '#ff6a9a'; c.fillRect(px(-16), px(6), px(32), px(3)); }
    else if (kind === 'bag') { c.fillStyle = '#ff6a9a'; c.beginPath(); c.roundRect(px(26), px(100), px(18), px(16), px(3)); c.fill(); c.strokeStyle = '#a82a68'; c.lineWidth = px(1); c.beginPath(); c.arc(px(35), px(100), px(6), Math.PI, 0); c.stroke(); }
    c.restore();
  }

  pause() { this.sound.suspend(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); this.root.remove(); }
}

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.DressStudio = api;
export default api;
