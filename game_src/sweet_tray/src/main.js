// «طبق الحلويات» — Sweet Tray. Entry: window.SweetTray.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Triple-match puzzle: tap sweets that are not covered, they fly into a 7-slot tray, three of a kind vanish.
// Combos, a bonus meter with a magic wand, undo / shuffle / extra slot helpers, 36 levels. Canvas 2D, art and sound in code.
import { Game, makeLevel, normalizeSave, LEVELS, CHAPTERS, chapterOf, TRAY_CAP, COMBO_TIME, BONUS_MAX, MAX_CAP, solveState } from './sim.js';
import { Sound } from './audio.js';
import { buildSprites, drawBackground, SP, SPRITE_FILL } from './sprites.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { VoiceCoach } from '../../cozy_kit/voice.js';

const SWEET_CLIPS = { go: 2, pickup: 2, trick: 2, charge: 2, bump: 2, win: 2, lose: 2 };

const S = {
  title: ['صينية الكنافة', 'Kunafa Tray'], play: ['يلا نلعب', 'Play'], levels: ['المراحل', 'Levels'], exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'],
  how: ['دوس على الحلويات اللي مش مغطّاة، وكل ٣ زي بعض بيختفوا. لا تملّي الطبق الصغير!', 'Tap sweets that are not covered. Three of a kind vanish. Do not fill the little tray!'],
  level: ['المرحلة', 'LEVEL'], pause: ['وقفة', 'Paused'], resume: ['كمّل', 'Resume'], restart: ['من الأول', 'Restart'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  soundOn: ['🔊 الصوت شغال', '🔊 Sound on'], soundOff: ['🔇 الصوت واقف', '🔇 Sound off'],
  undo: ['رجوع', 'Undo'], shuffle: ['اخلط', 'Shuffle'], slot: ['مكان زيادة', 'Extra slot'],
  combo: ['كومبو', 'COMBO'], won: ['حلو أوي!', 'Sweet!'], wonText: ['فضّيت الطبق كله 🍰', 'You cleared the whole plate 🍰'],
  next: ['المرحلة الجاية', 'Next level'], replay: ['العب تاني', 'Play again'],
  full: ['مفيش مكان!', 'OUT OF SPACE!'], fullText: ['الطبق الصغير اتملى. جرّب تاني، من غير ما تخسر حاجة!', 'The tray is full. Try again, nothing is lost!'],
  stars: ['نجوم', 'Stars'], score: ['النقاط', 'Score'], wand: ['عصاية سحرية!', 'Magic wand!'], blocked: ['مغطّاة! شيل اللي فوقها الأول', 'Covered! Clear the ones on top first'],
  chapter: ['الفصل', 'Chapter'], chapDone: ['خلّصت فصل', 'Chapter complete'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], locked: ['مقفول', 'Locked'],
};
const I = makeI18n(S);
const chapName = (ch) => ch.name[I.getLang() === 'en' ? 1 : 0];
// one accent colour per chapter board, for map headers and the chapter banner
const CHAP_ACCENT = { shop: '#e8609a', ramadan: '#7a4fd0', mawled: '#e2483d', picnic: '#58a84a' };
const TAU = Math.PI * 2;
const PASTEL = ['#ff8fb8', '#8fe3c8', '#ffe08a', '#b7a0ff', '#8fd0ff', '#ffb38a'];
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

class UI {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.voice = new VoiceCoach({ base: this.base, lang: I.getLang(), girl: config.gender === 'girl', clips: SWEET_CLIPS });
    this.voice.setMuted(this.sound.muted);
    this._voiceArm = () => this.voice.unlock();
    document.addEventListener('pointerdown', this._voiceArm, true);
    if (!document.getElementById('st-style')) document.head.append(h('style', { id: 'st-style' }, css('st', '#ff9ec7', '#e8609a', '#fff2a8') + `
.st-root{background:#ffe9f1}
.st-badge{display:flex;flex-direction:column;align-items:center;line-height:1;background:linear-gradient(180deg,#ffb0d2,#ee6ca4);border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*3.4);padding:calc(var(--u)*.8) calc(var(--u)*4.5);box-shadow:0 calc(var(--u)*.7) calc(var(--u)*1.4) rgba(120,30,70,.4)}
.st-badge small{font-size:calc(var(--u)*2.5);font-weight:900;letter-spacing:.08em;color:#fff2f8}.st-badge b{font-size:calc(var(--u)*6.4);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.4) rgba(150,40,90,.8);paint-order:stroke fill}
.st-score{background:linear-gradient(180deg,#a8ecd6,#52c4a2);min-width:calc(var(--u)*24);justify-content:center}
.st-helpers{position:absolute;display:flex;gap:calc(var(--u)*1.6);justify-content:center;align-items:center;pointer-events:none;direction:ltr}
.st-helpers .st-bld{pointer-events:auto;min-width:calc(var(--u)*17);flex:1;max-width:calc(var(--u)*27);padding:calc(var(--u)*.9) calc(var(--u)*1)}
.st-helpers .st-bld i{font-size:calc(var(--u)*6.6)}.st-helpers .st-bld span{font-size:calc(var(--u)*3.1)}.st-helpers .st-bld small{font-size:calc(var(--u)*3.2);background:#fff;color:#c24a86;border-radius:99px;padding:0 calc(var(--u)*1.4);font-weight:900}
.st-bld.off{opacity:.45;filter:grayscale(.7);pointer-events:none}
.st-card{background:linear-gradient(180deg,#ffb4d4,#ee6ca4)}
.st-btn{background:linear-gradient(180deg,#8cebc4,#35b88a);box-shadow:0 calc(var(--u)*.9) 0 #1d7c5c}
.st-btn.alt{background:linear-gradient(180deg,#ffd27a,#f0a030);box-shadow:0 calc(var(--u)*.9) 0 #a86a10}
.st-btn.dark{background:linear-gradient(180deg,#c6a2ff,#8a62d8);box-shadow:0 calc(var(--u)*.9) 0 #4c2e8a}
.st-lv{background:linear-gradient(180deg,#ffd0e4,#f58cb8);box-shadow:0 calc(var(--u)*.6) 0 #b04a80;color:#7a2250}.st-lv.lock{background:linear-gradient(180deg,#e6dce2,#c4b4be);box-shadow:0 calc(var(--u)*.6) 0 #8e7e88;color:#fff}
.st-lvs{grid-template-columns:repeat(4,1fr)}@media (orientation:landscape){.st-lvs{grid-template-columns:repeat(9,1fr)}.st-lv{min-height:calc(var(--u)*17)}}
.st-title{color:#fff6a8}
.st-chaphead{width:100%;box-sizing:border-box;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.1) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*4.2);color:#fff;text-align:center;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1) rgba(60,10,40,.3)}
.st-chapbanner{position:absolute;left:50%;top:calc(var(--u)*15.5);transform:translateX(-50%);border:calc(var(--u)*.45) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*4.4);padding:calc(var(--u)*1.4) calc(var(--u)*5);white-space:nowrap;opacity:0;transition:opacity .35s;pointer-events:none;box-shadow:0 calc(var(--u)*.7) calc(var(--u)*1.6) rgba(60,10,40,.35);max-width:94%;overflow:hidden;text-overflow:ellipsis;z-index:5}
.st-chapbanner.show{opacity:1}
` ));
    this.root = h('div', { class: 'st-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'st-layer' });
    this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.fx = []; this.parts = []; this.spr = new Map(); this.ghosts = []; this.shake = new Map();
    this.boardId = 'shop'; this._lastChap = 0;
    this.sprites = buildSprites();
    this.dispScore = 0; this.idle = 0; this.hintId = -1; this.timers = [];
    this.game = new Game(makeLevel(Math.min(3, LEVELS)));
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  later(fn, ms) { const t = setTimeout(() => { this.timers = this.timers.filter((x) => x !== t); if (this.root.isConnected) fn(); }, ms); this.timers.push(t); }

  // ---------- layout ----------
  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`);
    this._layout();
  }

  _layout() {
    const { cw, ch } = this; const u = this.u; const cap = this.game ? this.game.cap : TRAY_CAP;
    const land = cw > ch * 1.2;
    const L = { land };
    if (!land) {
      const hud = 15 * u; const meter = 5 * u; const help = 17.5 * u;
      const slot = Math.min((cw * 0.95 - 3 * u) / cap, 15 * u); const tray = slot + 3.2 * u;
      const B = Math.min(cw * 0.76, ch - hud - meter - tray - help - 5 * u);
      const gap = Math.max(0.6 * u, (ch - hud - meter - B - tray - help) / 5);
      let y = hud + gap * 0.6;
      L.meterY = y; y += meter + gap; L.meterH = meter;
      L.bx = (cw - B) / 2; L.by = y; L.B = B; y += B + gap;
      L.trayY = y; L.trayH = tray; y += tray + gap;
      L.helpY = y; L.helpH = help; L.slot = slot;
      L.meterX = cw * 0.08; L.meterW = cw * 0.6;
      L.comboX = cw * 0.93; L.comboY = L.meterY + meter / 2;
      L.trayX = (cw - slot * cap) / 2;
      L.buntY = hud * 0.78;
    } else {
      const hud = 13 * u; const slot = Math.min(ch * 0.13, (cw * 0.5) / cap); const tray = slot + 3 * u; const g = 1.4 * u;
      const B = ch - hud - tray - 3 * g;
      L.bx = (cw - B) / 2; L.by = hud + g; L.B = B;
      L.trayY = L.by + B + g; L.trayH = tray; L.slot = slot; L.trayX = (cw - slot * cap) / 2;
      L.meterX = L.bx - 7 * u; L.meterY = L.by + B * 0.08; L.meterW = B * 0.84; L.meterH = 3.6 * u;
      L.helpX = L.bx + B + 2 * u; L.helpY = L.by + B * 0.12; L.helpH = B * 0.76;
      L.comboX = L.bx - 4 * u; L.comboY = L.by + B * 0.97;
      L.buntY = hud * 0.7;
    }
    this.L = L; this.layCap = cap;
    L.plate = { cx: L.bx + L.B / 2, cy: L.by + L.B / 2, r: L.B * 0.485 };
    if (this.helpBox) this._placeHelpers();
    this._bg();
  }

  _bg() {
    const c = document.createElement('canvas'); c.width = Math.round(this.cw * this.dpr); c.height = Math.round(this.ch * this.dpr);
    const g = c.getContext('2d'); g.scale(this.dpr, this.dpr);
    drawBackground(g, this.cw, this.ch, this.L.plate, this.L, this.boardId || 'shop');
    this.bg = c;
  }

  _placeHelpers() {
    const L = this.L; const s = this.helpBox.style;
    if (!L.land) { s.left = '0'; s.width = `${this.cw}px`; s.top = `${L.helpY}px`; s.height = `${L.helpH}px`; s.flexDirection = 'row'; s.padding = `0 ${this.u * 3}px`; s.boxSizing = 'border-box'; }
    else { s.left = `${L.helpX}px`; s.width = `${Math.min(this.u * 22, this.cw - L.helpX - this.u)}px`; s.top = `${L.helpY}px`; s.height = `${L.helpH}px`; s.flexDirection = 'column'; s.padding = '0'; }
  }

  // ---------- input ----------
  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => { if (this.mode !== 'play') return; const r = this.cv.getBoundingClientRect(); this._tapAt(e.clientX - r.left, e.clientY - r.top); });
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play') this.showPause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  itemPos(it) { const L = this.L; return { x: L.bx + (it.x / 100) * L.B, y: L.by + (it.y / 100) * L.B }; }
  itemSize() { return (this.game.level.size / 100) * this.L.B * 1.32; }

  _tapAt(px, py) {
    const g = this.game; const R = (this.game.level.size / 100) * this.L.B * 0.5;
    for (let i = g.items.length - 1; i >= 0; i--) {
      if (!g.alive[i]) continue;
      const p = this.itemPos(g.items[i]);
      if (Math.hypot(p.x - px, p.y - py) <= R * 1.05) { this.tapId(i); return; }
    }
  }

  /** Tap a sweet by id (used by the pointer and by tests). */
  tapId(id) {
    const g = this.game;
    if (this.mode !== 'play' || g.state !== 'play') return [];
    this.idle = 0; this.hintId = -1;
    const before = this.itemPos(g.items[id]);
    const ev = g.tap(id);
    this._handle(ev, before);
    return ev;
  }

  _handle(ev, before) {
    const g = this.game; const L = this.L;
    for (const e of ev) {
      switch (e.type) {
        case 'blocked': this.shake.set(e.id, 0.4); this.sound.play('blocked'); this.voice.say('bump'); if (!this.hinted) { this.hinted = true; this._hint(I.t('blocked')); } break;
        case 'pick': {
          this.sound.play('tap');
          this.spr.set(e.id, { x: before.x, y: before.y, s: this.itemSize(), kind: g.items[e.id].kind, t: 0, land: false });
          break;
        }
        case 'match': {
          this.sound.play('match', e.combo); if (e.combo > 1) this.sound.play('combo', e.combo);
          this.voice.say(e.combo > 1 ? 'trick' : 'pickup');
          for (const id of e.ids) { const s = this.spr.get(id); if (s) { const idx = this._lastTray ? e.ids.indexOf(id) : 0; void idx; this.ghosts.push({ id, t: 0, wand: false }); s.ghost = true; } }
          // freeze ghost targets at their slots before removal: the pick event carries the full tray order
          const pickEv = ev.find((x) => x.type === 'pick');
          if (pickEv) for (const id of e.ids) { const k = pickEv.tray.indexOf(id); const s = this.spr.get(id); if (s && k >= 0) s.slot = k; }
          const mid = this._slotXY(pickEv ? pickEv.tray.indexOf(e.ids[1]) : 0);
          this._float(e.combo > 1 ? `${I.t('combo')} ×${I.num(e.combo)}` : '', mid.x, L.trayY - this.u * 12, e.combo);
          this._float(`+${I.num(e.points)}`, mid.x, L.trayY - this.u * 4, 0);
          break;
        }
        case 'wand': {
          this.sound.play('wand'); this.voice.say('charge'); this._hint(I.t('wand'));
          for (const id of e.ids) {
            const it = g.items[id]; const fromTray = e.fromTray.includes(id);
            let s = this.spr.get(id);
            if (!s) { const p = this.itemPos(it); s = { x: p.x, y: p.y, s: this.itemSize(), kind: it.kind, t: 0 }; this.spr.set(id, s); }
            s.ghost = true; s.frozen = true; void fromTray;
            this.ghosts.push({ id, t: -0.15 * e.ids.indexOf(id), wand: true });
          }
          break;
        }
        case 'won': this.sound.play('win'); this.voice.say('win'); this._won(); break;
        case 'lost': this.sound.play('lose'); this.voice.say('lose'); this._lost(); break;
        default: break;
      }
    }
    if (this.layCap !== g.cap) this._layout();
  }

  _slotXY(i) { const L = this.L; return { x: L.trayX + (i + 0.5) * L.slot, y: L.trayY + L.trayH / 2 + this.u * 0.2 }; }

  _float(text, x, y, combo) { if (text) this.fx.push({ text, x, y, t: 0, life: combo > 1 ? 1.3 : 0.9, size: combo > 1 ? 6.4 + Math.min(combo, 5) * 0.5 : 4.4, color: combo > 1 ? '#fff27a' : '#fff', combo }); }
  _hint(text) { this.hintText = text; this.hintT = 2.2; }
  _burst(x, y, n = 12) { for (let i = 0; i < n; i++) { const a = Math.random() * TAU; const v = this.u * (14 + Math.random() * 22); this.parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - this.u * 8, t: 0, life: 0.6 + Math.random() * 0.4, c: PASTEL[i % PASTEL.length], r: this.u * (0.9 + Math.random() * 1.1) }); } }

  // ---------- screens ----------
  _soundPill() { const pill = h('button', { class: 'st-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  showMenu() {
    this.mode = 'menu'; this.layer.replaceChildren(); this.sound.setMode(false); this.helpBox = null;
    this.boardId = 'shop'; this._lastChap = 0;
    this.game = new Game(makeLevel(3)); this.spr.clear(); this.ghosts = []; this._layout();
    const cur = Math.min(this.save.unlocked, LEVELS);
    this.layer.append(h('div', { class: 'st-dim' }, h('div', { class: 'st-card' },
      h('div', { class: 'st-logo' }, '🍰 ', I.t('title')), h('div', { class: 'st-small' }, I.t('how')),
      h('button', { class: 'st-btn', onclick: () => { this.sound.play('ui'); this.startLevel(cur); } }, I.t('play')),
      h('button', { class: 'st-btn alt', onclick: () => { this.sound.play('ui'); this.showMap(); } }, I.t('levels')),
      h('button', { class: 'st-btn dark', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this._soundPill();
  }

  showMap() {
    this.mode = 'map'; this.layer.replaceChildren(); this.helpBox = null;
    const kids = [h('div', { class: 'st-title' }, I.t('levels'))];
    for (const ch of CHAPTERS) {
      kids.push(h('div', { class: 'st-chaphead', style: `background:${CHAP_ACCENT[ch.board]}` }, `${I.t('chapter')} ${I.num(ch.id)} · ${chapName(ch)}`));
      const grid = h('div', { class: 'st-lvs' });
      for (let n = ch.from; n <= ch.to; n++) {
        const open = n <= this.save.unlocked; const st = this.save.stars[n] || 0;
        grid.append(h('button', { class: `st-lv${open ? '' : ' lock'}`, 'aria-label': `${I.t('level')} ${n}`, onclick: () => { if (open) { this.sound.play('ui'); this.startLevel(n); } } },
          h('i', {}, open ? I.num(n) : '🔒'), h('span', {}, open ? '⭐'.repeat(st) + '☆'.repeat(3 - st) : I.t('locked'))));
      }
      kids.push(grid);
    }
    kids.push(h('button', { class: 'st-btn dark', onclick: () => this.showMenu() }, I.t('menu')));
    this.layer.append(h('div', { class: 'st-dim' }, h('div', { class: 'st-card', style: 'max-height:96%;width:calc(var(--u)*92)' }, ...kids)));
    this._soundPill();
  }

  startLevel(n) {
    this.voice.say('go');
    this.n = clamp(n, 1, LEVELS);
    const ch = chapterOf(this.n);
    this.boardId = ch.board;
    this.timers.forEach(clearTimeout); this.timers = [];
    this.game = new Game(makeLevel(this.n));
    this.spr.clear(); this.ghosts = []; this.fx = []; this.parts = []; this.shake.clear(); this.dispScore = 0; this.idle = 0; this.hintId = -1; this.hintText = ''; this.hinted = false;
    this.mode = 'play'; this.layer.replaceChildren(); this.sound.setMode(true);
    this.levelEl = h('b', {}, I.num(this.n)); this.scoreEl = h('span', {}, '0');
    this.layer.append(h('div', { class: 'st-top' },
      h('button', { class: 'st-round', 'aria-label': I.t('pause'), onclick: () => this.showPause() }, '⏸'),
      h('div', { class: 'st-badge' }, h('small', {}, I.t('level')), this.levelEl),
      h('div', { class: 'st-pill st-score' }, '⭐ ', this.scoreEl)));
    this.btns = {};
    const mk = (key, icon, name) => { const cnt = h('small', {}, ''); const b = h('button', { class: 'st-bld', onclick: () => this.helper(key) }, h('i', {}, icon), h('span', {}, name), cnt); this.btns[key] = { b, cnt }; return b; };
    this.helpBox = h('div', { class: 'st-helpers' }, mk('undo', '↩️', I.t('undo')), mk('shuffle', '🔀', I.t('shuffle')), mk('slot', '➕', I.t('slot')));
    this.layer.append(this.helpBox);
    this.hintEl = h('div', { class: 'st-hint' }); this.layer.append(this.hintEl);
    this._layout(); this._soundPill();
    // entering a new chapter: a short banner names it (the board behind already changed)
    if (ch.from === this.n || this._lastChap !== ch.id) {
      this._lastChap = ch.id;
      const banner = h('div', { class: 'st-chapbanner', style: `background:${CHAP_ACCENT[ch.board]}` }, `${I.t('chapter')} ${I.num(ch.id)} · ${chapName(ch)}`);
      this.layer.append(banner);
      this.later(() => banner.classList.add('show'), 40);
      this.later(() => banner.classList.remove('show'), 2500);
      this.later(() => banner.remove(), 2950);
    }
  }

  helper(key) {
    const g = this.game; if (this.mode !== 'play') return;
    if (g.state === 'lost' && key !== 'undo' && key !== 'slot') return;
    let ok = false;
    if (key === 'undo') { ok = g.undo(); if (ok) this._resetSprites(); }
    else if (key === 'shuffle') { ok = g.shuffle(); if (ok) { this.fxShuffle = 0.5; } }
    else if (key === 'slot') { ok = g.extraSlot(); if (ok) this._layout(); }
    if (ok) { this.sound.play('helper'); this.idle = 0; this.hintId = -1; }
  }

  _resetSprites() { this.spr.clear(); this.ghosts = []; this.shake.clear(); }

  showPause() {
    if (this.mode !== 'play') return;
    this.mode = 'pause'; this.sound.suspend();
    const snd = h('button', { class: 'st-btn alt', onclick: () => { this.sound.setMuted(!this.sound.muted); this.voice.setMuted(this.sound.muted); this.save.muted = this.sound.muted; this.post({ type: 'save', save: this.save }); snd.textContent = this.sound.muted ? I.t('soundOff') : I.t('soundOn'); } }, this.sound.muted ? I.t('soundOff') : I.t('soundOn'));
    this.pauseEl = h('div', { class: 'st-dim' }, h('div', { class: 'st-card' }, h('div', { class: 'st-title' }, I.t('pause')),
      h('button', { class: 'st-btn', onclick: () => { this.pauseEl.remove(); this.mode = 'play'; this.sound.resume(); } }, I.t('resume')),
      h('button', { class: 'st-btn alt', onclick: () => { this.pauseEl.remove(); this.startLevel(this.n); this.sound.resume(); } }, I.t('restart')),
      snd,
      h('button', { class: 'st-btn dark', onclick: () => { this.sound.resume(); this.showMap(); } }, I.t('levels'))));
    this.layer.append(this.pauseEl);
  }

  _won() {
    const g = this.game; const st = g.stars();
    const prev = this.save.stars[this.n] || 0;
    this.save.stars[this.n] = Math.max(prev, st);
    this.save.unlocked = Math.min(LEVELS, Math.max(this.save.unlocked, this.n + 1));
    this.post({ type: 'save', save: this.save });
    this.later(() => {
      this.mode = 'end';
      for (let i = 0; i < 5; i++) this._burst(this.cw * (0.15 + i * 0.17), this.ch * 0.4, 14);
      const chEnd = chapterOf(this.n).to === this.n;
      this.layer.append(h('div', { class: 'st-dim' }, h('div', { class: 'st-card' },
        h('div', { class: 'st-title' }, I.t('won')), h('div', { class: 'st-small' }, I.t('wonText')),
        chEnd ? h('div', { class: 'st-small', style: 'font-size:calc(var(--u)*4.8);font-weight:900' }, `🎉 ${I.t('chapDone')} «${chapName(chapterOf(this.n))}»!`) : null,
        h('div', { class: 'st-stars' }, [0, 1, 2].map((i) => h('span', { class: i < st ? '' : 'off' }, '⭐'))),
        h('div', { class: 'st-title', style: 'font-size:calc(var(--u)*6)' }, I.t('win')),
        h('div', { class: 'st-pill' }, `${I.t('score')}: ${I.num(g.score)}`),
        this.n < LEVELS ? h('button', { class: 'st-btn', onclick: () => this.startLevel(this.n + 1) }, I.t('next')) : null,
        h('button', { class: 'st-btn alt', onclick: () => this.startLevel(this.n) }, I.t('replay')),
        h('button', { class: 'st-btn dark', onclick: () => this.showMap() }, I.t('levels')))));
    }, 1000);
  }

  _lost() {
    this.later(() => {
      const g = this.game; if (g.state !== 'lost') return;
      this.mode = 'end';
      const close = () => { this.lostEl.remove(); this.mode = 'play'; };
      const kids = [h('div', { class: 'st-title' }, '😵 ', I.t('full')), h('div', { class: 'st-small' }, I.t('fullText'))];
      if (g.canUndo()) kids.push(h('button', { class: 'st-btn', onclick: () => { this.helper('undo'); close(); } }, `↩️ ${I.t('undo')}`));
      if (g.canSlot()) kids.push(h('button', { class: 'st-btn', onclick: () => { this.helper('slot'); close(); } }, `➕ ${I.t('slot')}`));
      kids.push(h('button', { class: 'st-btn alt', onclick: () => this.startLevel(this.n) }, I.t('replay')), h('button', { class: 'st-btn dark', onclick: () => this.showMap() }, I.t('levels')));
      this.lostEl = h('div', { class: 'st-dim' }, h('div', { class: 'st-card' }, ...kids));
      this.layer.append(this.lostEl);
    }, 700);
  }

  // ---------- loop ----------
  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now; this.clock += dt;
      if (this.mode === 'play' || this.mode === 'end') this._update(dt);
      this._draw();
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _update(dt) {
    const g = this.game; g.tick(dt);
    const k = 1 - Math.exp(-17 * dt);
    // tray sprites follow their slots
    g.tray.forEach((t, i) => {
      const s = this.spr.get(t.id); if (!s) return;
      const to = this._slotXY(i); s.x += (to.x - s.x) * k; s.y += (to.y - s.y) * k; s.s += (this.L.slot * 1.12 - s.s) * k; s.t += dt;
      if (!s.land && Math.hypot(to.x - s.x, to.y - s.y) < this.u * 2) { s.land = true; this.sound.play('land'); }
    });
    for (const gh of this.ghosts) {
      gh.t += dt; const s = this.spr.get(gh.id); if (!s) continue;
      if (!gh.wand && s.slot !== undefined) { const to = this._slotXY(s.slot); s.x += (to.x - s.x) * k; s.y += (to.y - s.y) * k; s.s += (this.L.slot * 1.12 - s.s) * k; }
      if (gh.wand && gh.t > 0) { s.y -= this.u * 14 * dt; }
      if (gh.t >= (gh.wand ? 0.3 : 0.2)) { gh.done = true; this._burst(s.x, s.y, gh.wand ? 10 : 6); this.fx.push({ pop: true, kind: s.kind, x: s.x, y: s.y, s: s.s, t: 0, life: 0.3 }); this.spr.delete(gh.id); }
    }
    this.ghosts = this.ghosts.filter((x) => !x.done);
    for (const [id, t] of this.shake) { if (t - dt <= 0) this.shake.delete(id); else this.shake.set(id, t - dt); }
    for (const p of this.parts) { p.t += dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vy += this.u * 60 * dt; }
    this.parts = this.parts.filter((p) => p.t < p.life);
    for (const f of this.fx) f.t += dt;
    this.fx = this.fx.filter((f) => f.t < f.life);
    if (this.hintT > 0) { this.hintT -= dt; if (this.hintEl) { this.hintEl.textContent = this.hintText; this.hintEl.classList.toggle('show', this.hintT > 0); } }
    if (this.fxShuffle > 0) this.fxShuffle -= dt;
    // idle help: a gentle pulse on a sweet that helps the tray
    if (this.mode === 'play' && g.state === 'play') {
      this.idle += dt;
      if (this.idle > 7 && this.hintId < 0) this.hintId = this._bestFree();
    }
    // HUD
    if (this.scoreEl) { this.dispScore += (g.score - this.dispScore) * Math.min(1, dt * 8); if (Math.abs(g.score - this.dispScore) < 1) this.dispScore = g.score; this.scoreEl.textContent = I.num(Math.round(this.dispScore)); }
    if (this.btns) {
      const info = { undo: [g.helpers.undo, g.canUndo()], shuffle: [g.helpers.shuffle, g.canShuffle()], slot: [g.helpers.slot, g.canSlot()] };
      for (const key of Object.keys(this.btns)) { const [n, can] = info[key]; this.btns[key].cnt.textContent = `×${I.num(n)}`; this.btns[key].b.classList.toggle('off', !can); }
    }
  }

  _bestFree() {
    const g = this.game; const free = g.freeIds(); if (!free.length) return -1;
    let best = -1; let bs = -1e9;
    for (const i of free) { const c = g.trayCount(g.items[i].kind); const s = (c === 2 ? 100 : c * 40) - (c === 0 ? g.tray.length * 6 : 0); if (s > bs) { bs = s; best = i; } }
    return best;
  }

  // ---------- drawing ----------
  _sprite(g, kind, x, y, size, dim, alpha = 1) {
    const img = (dim ? this.sprites.dim : this.sprites.bright)[kind]; if (!img) return;
    const d = size / SPRITE_FILL; g.globalAlpha = alpha; g.drawImage(img, x - d / 2, y - d / 2, d, d); g.globalAlpha = 1;
  }

  _text(g, str, x, y, sizeU, fill, stroke = 'rgba(120,30,80,.9)', align = 'center') {
    g.font = `900 ${this.u * sizeU}px Tajawal, system-ui`; g.direction = 'ltr'; g.textAlign = align; g.textBaseline = 'middle'; g.lineJoin = 'round';
    g.lineWidth = this.u * sizeU * 0.16; g.strokeStyle = stroke; g.strokeText(str, x, y); g.fillStyle = fill; g.fillText(str, x, y);
  }

  _draw() {
    const g = this.g; g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    if (this.bg) g.drawImage(this.bg, 0, 0, this.cw, this.ch); else { g.fillStyle = '#ffe9f1'; g.fillRect(0, 0, this.cw, this.ch); }
    const game = this.game; const L = this.L; if (!game || !L) return;
    // pile
    const size = this.itemSize();
    const wob = this.fxShuffle > 0 ? Math.sin(this.clock * 40) * this.u * 0.6 * (this.fxShuffle / 0.5) : 0;
    for (let i = 0; i < game.items.length; i++) {
      if (!game.alive[i]) continue;
      const it = game.items[i]; const p = this.itemPos(it); const free = this.mode === 'menu' || this.mode === 'map' || game.isFree(i);
      let x = p.x + wob * (i % 2 ? 1 : -1); let y = p.y; let sz = size;
      const sh = this.shake.get(i); if (sh) x += Math.sin(sh * 60) * this.u * 0.9 * (sh / 0.4);
      if (i === this.hintId) sz *= 1 + 0.07 * Math.sin(this.clock * 7);
      this._sprite(g, it.kind, x, y, sz, !free);
    }
    // tray
    this._drawTray(g);
    // ghosts and flying sprites (above everything)
    for (const [id, s] of this.spr) {
      const gh = this.ghosts.find((q) => q.id === id);
      const pulse = gh && gh.wand ? 1 + 0.15 * Math.sin(this.clock * 30) : 1;
      if (gh && gh.t < 0) { this._sprite(g, s.kind, s.x, s.y, s.s * pulse, false); continue; }
      this._sprite(g, s.kind, s.x, s.y, s.s * pulse, false);
    }
    // bonus meter + combo
    this._drawMeter(g);
    // fx
    for (const f of this.fx) {
      const a = 1 - f.t / f.life;
      if (f.pop) { g.globalAlpha = a; this._sprite(g, f.kind, f.x, f.y, f.s * (1 + (1 - a) * 0.9), false, a); g.globalAlpha = 1; continue; }
      const pop = f.combo > 1 ? 1 + 0.35 * Math.max(0, 1 - f.t * 6) : 1;
      g.globalAlpha = clamp(a * 1.6, 0, 1);
      this._text(g, f.text, f.x, f.y - f.t * this.u * 9, f.size * pop, f.color);
      g.globalAlpha = 1;
    }
    for (const p of this.parts) { const a = 1 - p.t / p.life; g.globalAlpha = a; g.fillStyle = p.c; this._star(g, p.x, p.y, p.r * (0.6 + a)); }
    g.globalAlpha = 1;
    if (this.hintId >= 0 && this.mode === 'play') { const p = this.itemPos(game.items[this.hintId]); g.strokeStyle = `rgba(255,255,255,${0.5 + 0.4 * Math.sin(this.clock * 7)})`; g.lineWidth = this.u * 0.7; g.beginPath(); g.arc(p.x, p.y, size * 0.55, 0, TAU); g.stroke(); }
  }

  _star(g, x, y, r) { g.beginPath(); for (let i = 0; i < 8; i++) { const a = (i * TAU) / 8; const rr = i % 2 ? r * 0.35 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); g.fill(); }

  _drawTray(g) {
    const L = this.L; const cap = this.game.cap; const slot = L.slot; const u = this.u;
    const x = L.trayX - u * 1.2; const y = L.trayY; const w = slot * cap + u * 2.4; const hgt = L.trayH;
    g.save(); g.shadowColor = 'rgba(90,50,20,.4)'; g.shadowBlur = u * 2; g.shadowOffsetY = u * 0.8;
    g.beginPath(); g.roundRect(x, y, w, hgt, u * 3); const gr = g.createLinearGradient(0, y, 0, y + hgt); gr.addColorStop(0, '#c68a52'); gr.addColorStop(1, '#9a6234'); g.fillStyle = gr; g.fill(); g.restore();
    g.beginPath(); g.roundRect(x, y, w, hgt, u * 3); g.lineWidth = u * 0.5; g.strokeStyle = '#fff4d8'; g.stroke();
    const full = this.game.tray.length >= cap - 1 && this.game.state === 'play';
    for (let i = 0; i < cap; i++) {
      const sx = L.trayX + i * slot + slot * 0.06; const sw = slot * 0.88;
      g.beginPath(); g.roundRect(sx, y + u * 1.1, sw, hgt - u * 2.2, u * 2); g.fillStyle = full && i >= this.game.tray.length ? 'rgba(255,120,120,.55)' : 'rgba(255,224,236,.78)'; g.fill();
      g.lineWidth = u * 0.3; g.strokeStyle = 'rgba(120,60,40,.45)'; g.stroke();
    }
  }

  _drawMeter(g) {
    const L = this.L; const u = this.u; const game = this.game; if (this.mode === 'menu' || this.mode === 'map') return;
    const p = Math.min(1, game.bonus / BONUS_MAX);
    if (!L.land) {
      const x = L.meterX; const y = L.meterY; const w = L.meterW; const hh = L.meterH * 0.62; const cy = y + L.meterH / 2;
      g.beginPath(); g.roundRect(x, cy - hh / 2, w, hh, hh / 2); g.fillStyle = 'rgba(255,255,255,.75)'; g.fill(); g.lineWidth = u * 0.5; g.strokeStyle = '#fff'; g.stroke();
      if (p > 0) { g.beginPath(); g.roundRect(x + u * 0.3, cy - hh / 2 + u * 0.3, Math.max(hh - u * 0.6, (w - u * 0.6) * p), hh - u * 0.6, hh / 2); const gr = g.createLinearGradient(x, 0, x + w, 0); gr.addColorStop(0, '#ff9ec7'); gr.addColorStop(1, '#ffd23a'); g.fillStyle = gr; g.fill(); }
      g.font = `${u * 5.4}px system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('🪄', x - u * 3.6, cy + u * 0.2);
      if (game.combo > 0) { const k = game.comboT / COMBO_TIME; this._text(g, `×${I.num(game.combo)}`, L.comboX - u * 2, cy - u * 0.3, 6 + Math.min(game.combo, 5) * 0.3, '#fff27a'); g.fillStyle = 'rgba(255,255,255,.85)'; g.fillRect(L.comboX - u * 10, cy + u * 3, u * 16 * k, u * 0.8); }
    } else {
      const x = L.meterX; const y = L.meterY; const hh = L.meterW; const w = L.meterH * 0.7;
      g.beginPath(); g.roundRect(x, y, w, hh, w / 2); g.fillStyle = 'rgba(255,255,255,.75)'; g.fill(); g.lineWidth = u * 0.4; g.strokeStyle = '#fff'; g.stroke();
      if (p > 0) { g.beginPath(); g.roundRect(x + u * 0.25, y + hh - Math.max(w, (hh) * p) + u * 0.25, w - u * 0.5, Math.max(w, hh * p) - u * 0.5, w / 2); g.fillStyle = '#ffb44a'; g.fill(); }
      g.font = `${u * 5}px system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('🪄', x + w / 2, y - u * 3);
      if (game.combo > 0) this._text(g, `×${I.num(game.combo)}`, x + w / 2, y + hh + u * 4, 5, '#fff27a');
    }
  }

  pause() { this.sound.suspend(); if (this.mode === 'play') this.showPause(); }
  dispose() { cancelAnimationFrame(this.raf); this.timers.forEach(clearTimeout); this.sound.dispose(); this.voice.dispose(); document.removeEventListener('pointerdown', this._voiceArm, true); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); this.root.remove(); }
}

void MAX_CAP; void solveState;
const api = { start(el, config, post) { const g = new UI(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.SweetTray = api;
export default api;
