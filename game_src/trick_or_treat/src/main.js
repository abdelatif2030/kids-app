// «حلاوة ولا مقلب» — Trick or Treat Crowd. Entry: window.TrickOrTreat.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A cosy Halloween side-scrolling runner: tap = jump, hold = higher. Ring friendly doorbells to add kids, skip grumpy ones,
// hop hazards, push through hedges with a big crowd, beat the giant inflatable spider. Art and sound are made in code.
import { Sim, buildLevel, normalizeSave, applyResult, buyCostume, kidSlot, hazardBox, sprinklerPhase, easyFor, COSTUMES, NUM_LEVELS, MAX_KIDS } from './sim.js';
import { loadArt } from '../../cozy_kit/art.js';
import { setPics, THEMES, sprite, drawKid, drawPorch, drawPit, drawSprinkler, drawDog, drawJack, drawHedge, drawSpider, buildTile, buildSky, drawMoon, drawLeaf, drawHero } from './art.js';
import { Sound } from './audio.js';
import { h, css, makeI18n, rng } from '../../cozy_kit/ui.js';
import { VoiceCoach } from '../../cozy_kit/voice.js';

const TT_CLIPS = { go: 2, pickup: 2, charge: 2, trick: 3, bump: 3, near: 2, win: 2 };

const NAMES = [['زقاق اليقطين', 'Pumpkin Lane'], ['الحديقة الضبابية', 'Foggy Park'], ['القصر الودود', 'Friendly Mansion'], ['مزرعة القش', 'Haystack Farm'], ['تلّة حلوى الذرة', 'Candy-Corn Hill'], ['جسر الفوانيس', 'Lantern Bridge'], ['موكب منتصف الليل', 'Midnight Parade']];
const CNAMES = { ghost: ['شبح الملاية', 'Sheet ghost'], pumpkin: ['بدلة يقطينة', 'Pumpkin suit'], witch: ['ساحرة صغيرة', 'Little witch'], robot: ['روبوت كرتون', 'Cardboard robot'], cat: ['قطة', 'Kitty'], mummy: ['مومياء لطيفة', 'Friendly mummy'], dino: ['ديناصور', 'Dino'], bat: ['خفّاش', 'Bat'] };
const S = {
  title: ['حلاوة ولا مقلب', 'Trick or Treat'], sub: ['قُد شلّة الأطفال في شارع الهالوين!', 'Lead the trick-or-treat crowd!'],
  play: ['يلا نلعب', 'PLAY'], levels: ['الشوارع', 'STREETS'], costumes: ['الأزياء', 'COSTUMES'], settings: ['الإعدادات', 'SETTINGS'], exit: ['خروج', 'Exit'], back: ['رجوع', 'Back'],
  resume: ['كمّل', 'Resume'], restart: ['من الأول', 'Restart'], menu: ['القائمة', 'Menu'], next: ['الشارع التالي', 'Next street'], again: ['العب تاني', 'Play again'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], soundOn: ['الصوت', 'Sound'], lang: ['اللغة', 'Language'], on: ['شغّال', 'On'], off: ['مقفول', 'Off'],
  paused: ['استراحة', 'Paused'], won: ['خلّصنا الشارع! 🎃', 'Street done! 🎃'], kids: ['الأطفال', 'Kids'], candy: ['حلاوة', 'Candy'], earned: ['كسبت', 'Earned'],
  hintJump: ['دوس للنط، وكمّل دوس لنطّة أعلى', 'Tap to jump, hold to jump higher'],
  hintHedge: ['السور محتاج أطفال كتير!', 'The hedge needs a big crowd!'],
  hintBoss: ['العنكبوت المنفوخ! استنى التحذير وانط', 'The inflatable spider! Watch the warning'],
  tRoll: ['انط فوق اليقطينة!', 'Hop the pumpkin!'], tStomp: ['انط عالي وكمّل دوس!', 'Jump high and hold!'], tSwat: ['استنى على الأرض!', 'Stay on the ground!'],
  hintBell: ['اجري قدّام الأبواب الدافية عشان الجرس يرنّ: أطفال أكتر!', 'Run past doors to ring the bell: more kids!'],
  hintGrumpy: ['البيت الزعلان؟ انط من فوقه!', 'Grumpy house? Jump over it!'],
  hintHold: ['كمّل دوس لنطّة أعلى', 'Hold for a bigger jump'], hintFloat: ['كمّل دوس وطير من الأبواب الطايرة', 'Hold to fly through floating doors'],
  hintPit: ['انط في نص الحفرة عشان تاخد «ممتاز!»', 'Jump in the middle of a pit for a Perfect'], perfect: ['ممتاز!', 'Perfect!'],
  buy: ['اشتري', 'Buy'], wear: ['البس', 'Wear'], worn: ['لابسه ✓', 'Wearing ✓'], locked: ['مقفول', 'Locked'], street: ['شارع', 'Street'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], sizeMsg: ['أنت قدت', 'You led'], hold: ['اضغط مطوّلاً', 'hold'],
};
const I = makeI18n(S);

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {}); this.base = config.base || './';
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.easy = easyFor(config.age);
    this.save = normalizeSave(config.save);
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    this.voice = new VoiceCoach({ base: this.base, lang: I.getLang(), girl: config.gender === 'girl', clips: TT_CLIPS });
    this.voice.setMuted(this.sound.muted);
    this._voiceArm = () => this.voice.unlock();
    document.addEventListener('pointerdown', this._voiceArm, true);
    if (!document.getElementById('tt-style')) document.head.append(h('style', { id: 'tt-style' }, css('tt', '#ff9a3a', '#7a2a8a', '#ffd24a') + CSS));
    this.root = h('div', { class: 'tt-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas'); this.root.append(this.cv); this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'tt-layer' }); this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.fx = []; this.parts = []; this.held = false; this.menuLevel = 1; this.hinted = {};
    this.leaves = Array.from({ length: 22 }, (_, i) => ({ x: (i * 0.137) % 1, y: (i * 0.291) % 1, s: 0.5 + (i % 5) * 0.2, r: i, v: 0.05 + (i % 4) * 0.03 }));
    this.kidStamp = new Map();
    this._resize(); this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this.pics = {}; loadArt(this.base, [...THEMES.map((t) => 'houses_' + t.id), 'dog']).then((a) => { this.pics = a; setPics(a); });
    this._bind(); this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.ch / 9.6, this.cw / 17.5);
    this.gy = this.ch > this.cw ? this.ch * 0.77 : this.ch * 0.5 + 9.6 * this.u * 0.3;
    this.hx = this.cw * 0.26;
    this.root.style.setProperty('--u', `${Math.min(Math.min(this.cw, this.ch) / 100, 6.2)}px`);
    this.tiles = null; this.skyKey = '';
    clearTimeout(this._rt);
  }

  _ensureArt() {
    const th = THEMES[this.themeIdx || 0]; const key = `${this.themeIdx}|${this.cw}|${this.ch}`;
    if (this.tiles && this.tilesKey === key) return;
    const u = this.u; const d = this.dpr;
    this.tiles = { far: buildTile(th, 'far', u, d, this.themeIdx), mid: buildTile(th, 'mid', u, d, this.themeIdx), lane: buildTile(th, 'lane', u, d, this.themeIdx) };
    this.sky = buildSky(th, this.cw, this.ch, d); this.tilesKey = key;
    this.fog = this._fogSprite(th);
  }
  _fogSprite(th) {
    if (!th.fog) return null;
    const c = document.createElement('canvas'); c.width = 512; c.height = 128; const g = c.getContext('2d');
    for (let i = 0; i < 9; i++) { const gr = g.createRadialGradient(40 + i * 54, 64, 0, 40 + i * 54, 64, 70); gr.addColorStop(0, `rgba(235,240,255,${th.fog * 0.45})`); gr.addColorStop(1, 'rgba(235,240,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 512, 128); }
    return c;
  }

  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => { e.preventDefault(); this.held = true; this.pid = e.pointerId; try { this.cv.setPointerCapture(e.pointerId); } catch (_) { /* ok */ } });
    const up = () => { this.held = false; };
    this.cv.addEventListener('pointerup', up); this.cv.addEventListener('pointercancel', up); this.cv.addEventListener('lostpointercapture', up);
    this._onKey = (e) => {
      const k = e.key;
      if (k === ' ' || k === 'ArrowUp' || k === 'w' || k === 'W') { if (this.mode === 'play') e.preventDefault(); this.held = e.type === 'keydown'; }
      if (e.type === 'keydown' && (k === 'Escape' || k === 'p') && this.mode === 'play') this.pauseGame();
    };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play') this.pauseGame(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _soundPill() { const pill = h('button', { class: 'tt-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }

  // ---- screens ----------------------------------------------------------------------------------------------------------
  btn(label, fn, cls = '') { return h('button', { class: `tt-btn ${cls}`, onclick: () => { this.sound.play('tap'); fn(); } }, label); }
  card(...kids) { return h('div', { class: 'tt-dim' }, h('div', { class: 'tt-card' }, ...kids)); }
  _attract(n) {
    this.menuLevel = n; this.themeIdx = n - 1;
    const d = buildLevel(n); d.hazards = []; d.hedges = [];
    this.sim = new Sim({ level: n, data: d, startKids: 7 }); this.sim.hero.x = 6;
  }
  showMenu() {
    this.mode = 'menu'; this.layer.replaceChildren(); this.sound.setMode(false);
    if (!this.sim || this.sim.state !== 'run') this._attract(this.menuLevel);
    const next = Math.min(this.save.unlocked, NUM_LEVELS);
    this.layer.append(this.card(
      h('div', { class: 'tt-logo' }, '🎃 ', I.t('title')), h('div', { class: 'tt-small' }, I.t('sub')),
      this.btn(`${I.t('play')} · ${I.t('street')} ${I.num(next)}`, () => this.startLevel(next)),
      this.btn(I.t('levels'), () => this.showLevels(), 'dark'), this.btn(`${I.t('costumes')} 👻`, () => this.showShop(), 'dark'),
      this.btn(I.t('settings'), () => this.showSettings(), 'dark'), this.btn(I.t('exit'), () => this.post({ type: 'exit' }), 'alt')));
    this._soundPill();
  }
  showLevels() {
    this.layer.replaceChildren();
    const grid = h('div', { class: 'tt-lvs' });
    for (let i = 1; i <= NUM_LEVELS; i++) {
      const open = i <= this.save.unlocked; const st = this.save.stars[i] || 0;
      grid.append(h('button', { class: `tt-lv ${open ? '' : 'lock'}`, onclick: () => { if (open) { this.sound.play('tap'); this.startLevel(i); } } }, h('i', {}, open ? ['🎃', '🌫️', '🏰', '🌾', '🍬', '🏮', '🎆'][i - 1] : '🔒'), h('span', {}, I.num(i)), h('b', {}, '★'.repeat(st) + '☆'.repeat(open ? 3 - st : 0))));
    }
    this.layer.append(this.card(h('div', { class: 'tt-title' }, I.t('levels')), grid, h('div', { class: 'tt-small' }, NAMES.map((n, i) => `${I.num(i + 1)} ${n[I.getLang() === 'en' ? 1 : 0]}`).join(' · ')), this.btn(I.t('back'), () => this.showMenu(), 'dark')));
    this._soundPill();
  }
  showShop() {
    this.layer.replaceChildren();
    const grid = h('div', { class: 'tt-shop' });
    for (const c of COSTUMES) {
      const owned = this.save.owned.includes(c.id); const worn = this.save.equipped === c.id;
      const cv = h('canvas', { width: 100, height: 135 }); cv.getContext('2d').drawImage(sprite(c.id, 0, 0), 0, 0, 100, 135);
      const can = this.save.candy >= c.price;
      const b = h('button', { class: `tt-item ${worn ? 'worn' : ''} ${!owned && can ? 'can' : ''}`, onclick: () => this._shopTap(c) }, cv, h('span', {}, CNAMES[c.id][I.getLang() === 'en' ? 1 : 0]), h('small', {}, worn ? I.t('worn') : owned ? I.t('wear') : `🍬 ${I.num(c.price)}`));
      grid.append(b);
    }
    this.layer.append(this.card(h('div', { class: 'tt-title' }, I.t('costumes')), h('div', { class: 'tt-pill' }, `🍬 ${I.num(this.save.candy)}`), grid, this.btn(I.t('back'), () => this.showMenu(), 'dark')));
    this._soundPill();
  }
  _shopTap(c) {
    if (this.save.owned.includes(c.id)) { this.save.equipped = c.id; this.sound.play('tap'); }
    else { const s = buyCostume(this.save, c.id); if (!s) { this.sound.play('oops'); return; } this.save = s; this.sound.play('buy'); }
    this.post({ type: 'save', save: this.save }); this.showShop();
  }
  showSettings() {
    this.layer.replaceChildren();
    const en = I.getLang() === 'en';
    this.layer.append(this.card(h('div', { class: 'tt-title' }, I.t('settings')),
      this.btn(`${I.t('soundOn')}: ${this.save.muted ? I.t('off') : I.t('on')}`, () => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); this.voice.setMuted(this.save.muted); this.post({ type: 'save', save: this.save }); this.showSettings(); }),
      this.btn(`${I.t('lang')}: ${en ? 'English' : 'العربية'}`, () => { I.setLang(en ? 'ar' : 'en'); this.root.setAttribute('dir', en ? 'rtl' : 'ltr'); this.showSettings(); }),
      this.btn(I.t('back'), () => this.showMenu(), 'dark')));
  }

  // ---- play ----------------------------------------------------------------------------------------------------------------
  startLevel(n) {
    this.voice.say('go');
    this.level = n; this.themeIdx = n - 1; this.sim = new Sim({ level: n, easy: this.easy, seed: (Date.now() & 0xfff) + 1 });
    this.mode = 'play'; this.fx = []; this.parts = []; this.held = false; this.sound.setMode('play'); this.won = false;
    this.layer.replaceChildren();
    this.crowdEl = h('span', {}, ''); this.candyEl = h('span', {}, ''); this.barEl = h('b', { style: 'width:0%' }); this.hintEl = h('div', { class: 'tt-hint' }, '');
    // the video's HUD: torn-paper tags (kids in orange, candy in purple), a round pause button, and a progress strip kid -> house
    this.crowdEl.className = 'tt-num'; this.candyEl.className = 'tt-num';
    this.kidMark = h('i', { class: 'tt-mark' }, '🧒');
    this.layer.append(h('div', { class: 'tt-hud' },
      h('div', { class: 'tt-row' }, h('div', { class: 'tt-paper tt-kids' }, h('i', { class: 'tt-ico o' }, '👤'), this.crowdEl), h('div', { class: 'tt-paper tt-cand' }, h('i', { class: 'tt-ico p' }, '🍬'), this.candyEl), h('button', { class: 'tt-pause', 'aria-label': I.t('paused'), onclick: () => this.pauseGame() }, '❚❚')),
      h('div', { class: 'tt-paper tt-prog' }, h('div', { class: 'tt-track' }, this.barEl, this.kidMark), h('i', { class: 'tt-ico d' }, '🏠'))), this.hintEl);
    this._soundPill();
    this.hint(I.t('hintJump'), 4.5);
    this.hinted = {};
  }
  hint(text, sec = 3) { this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl.classList.remove('show'), sec * 1000); }
  pauseGame() {
    if (this.mode !== 'play') return; this.mode = 'paused'; this.held = false; this.sound.suspend();
    this.layer.append(this.card(h('div', { class: 'tt-title' }, I.t('paused')), this.btn(I.t('resume'), () => { this.mode = 'play'; this.sound.resume(); this.layer.querySelector('.tt-dim').remove(); }), this.btn(I.t('restart'), () => { this.sound.resume(); this.startLevel(this.level); }, 'dark'), this.btn(I.t('menu'), () => { this.sound.resume(); this.showMenu(); }, 'alt')));
  }
  pause() { this.sound.suspend(); if (this.mode === 'play') this.pauseGame(); }

  _events(evs) {
    const s = this.sim; const u = this.u;
    for (const e of evs) {
      switch (e.type) {
        case 'jump': this.sound.play('jump'); break;
        case 'land': this.sound.play('land'); break;
        case 'candy': this.sound.play('candy', s.candy); this.voice.say('pickup'); this._pop(e.x, e.y, ['#ffd24a', '#ff6a9a'], 4); break;
        case 'ring':
          if (e.kind === 'friendly') { this.sound.play('bell'); this.sound.play('join'); this.voice.say('charge'); this.fx.push({ x: e.x, y: e.high ? 3.6 : 2.4, t: 0, text: `+${e.n}`, col: '#7aff9a' }); this._pop(e.x, e.high ? 2.8 : 1.6, ['#ffd24a', '#7aff9a', '#fff'], 14); }
          else { this.sound.play('bell'); this.sound.play('scare'); this.voice.say('bump'); this.fx.push({ x: e.x, y: 3.6, t: 0, text: `-${e.lost}`, col: '#ff7a7a' }); this._pop(e.x, 2.5, ['#ff7a7a'], 8); }
          break;
        case 'hit': this.sound.play('hit'); this.voice.say('bump'); this.fx.push({ x: s.hero.x, y: 2.4, t: 0, text: e.lost ? `-${e.lost}` : '!', col: '#ff9a7a' }); break;
        case 'float': this.sound.play('bell'); this.sound.play('join'); this.voice.say('charge'); this.fx.push({ x: e.x, y: e.y + 0.6, t: 0, text: `+${e.n}`, col: '#7aff9a' }); this._pop(e.x, e.y, ['#ff7ab0', '#ffd24a', '#fff'], 16); break;
        case 'perfect': this.sound.play('cheer'); this.voice.say('trick'); this.fx.push({ x: e.x, y: e.y + 1, t: 0, text: I.t('perfect'), col: '#ffd24a', big: true }); this._pop(e.x, e.y, ['#ffd24a', '#fff'], 14); break;
        case 'recollect': this.sound.play('recollect'); this.fx.push({ x: e.x, y: 2, t: 0, text: '+1', col: '#7aff9a' }); break;
        case 'return': this.sound.play('recollect'); break;
        case 'hedgePush': this.sound.play('push'); break;
        case 'hedgeBreak': this.sound.play('break'); this.voice.say('trick'); this._pop(e.x + 0.8, 1.5, ['#38a046', '#2a7a34', '#ff6a8a'], 26); break;
        case 'wake': this.sound.play('wake'); break;
        case 'bossStart': this.sound.setMode('boss'); this.voice.say('near'); this.hint(I.t('hintBoss'), 3.5); break;
        case 'bossTele': this.sound.play('warn'); this.voice.say('near'); this.hint(I.t(e.attack === 'roll' ? 'tRoll' : e.attack === 'stomp' ? 'tStomp' : 'tSwat'), e.tele + 0.6); break;
        case 'bossHit': this.sound.play('boing'); this.sound.play('cheer'); this.voice.say('trick'); this._pop(s.boss.x - 1, 3.5, ['#ffd24a', '#ff6a9a', '#7ad0ff'], 24); break;
        case 'bossDown': this.sound.play('deflate'); this.voice.say('win'); break;
        case 'won': this._won(e); break;
        default: break;
      }
    }
  }
  _pop(x, y, cols, n) { for (let i = 0; i < n && this.parts.length < 160; i++) { const a = Math.random() * 6.28; const v = 2 + Math.random() * 4; this.parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v + 2, t: 0, life: 0.8 + Math.random() * 0.5, col: cols[i % cols.length], s: 0.12 + Math.random() * 0.12 }); } }

  _won(res) {
    if (this.won) return; this.won = true; this.mode = 'result'; this.sound.setMode(false); this.sound.play('win'); this.voice.say('win');
    this.save = applyResult(this.save, this.level, res); this.post({ type: 'save', save: this.save });
    this.layer.replaceChildren();
    const nextOk = this.level < NUM_LEVELS;
    this.layer.append(this.card(h('div', { class: 'tt-title' }, I.t('won')), h('div', { class: 'tt-stars' }, ...[1, 2, 3].map((i) => h('span', { class: i <= res.stars ? '' : 'off' }, '⭐'))),
      h('div', { class: 'tt-small' }, I.t('win_' + (I.t('win_f') === I.t('win_m') ? 'm' : 'm'))),
      h('div', { class: 'tt-pill' }, `👻 ${I.num(res.kids)}`), h('div', { class: 'tt-pill' }, `${I.t('earned')} 🍬 ${I.num(res.earned)}`),
      nextOk ? this.btn(I.t('next'), () => this.startLevel(this.level + 1)) : null, this.btn(I.t('again'), () => this.startLevel(this.level), nextOk ? 'dark' : ''), this.btn(I.t('menu'), () => this.showMenu(), 'dark')));
    this._soundPill();
  }

  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt;
      try { this._tick(dt); this._draw(); } catch (err) { if (!this._err) { this._err = true; console.error(err); } }
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _tick(dt) {
    const s = this.sim; if (!s) return;
    if (this.mode === 'play' || this.mode === 'result') {
      const ev = s.step(dt, { held: this.held && this.mode === 'play' });
      if (ev.length) this._events(ev);
      if (this.mode === 'play') this._hud();
    } else if (this.mode === 'menu') {
      s.step(dt, {});
      if (s.state !== 'run' || s.hero.x > s.L.len - 40) this._attract((this.menuLevel % NUM_LEVELS) + 1);
    }
    for (const f of this.fx) f.t += dt; this.fx = this.fx.filter((f) => f.t < 1.1);
    for (const p of this.parts) { p.t += dt; p.vy -= 12 * dt; p.x += p.vx * dt; p.y += p.vy * dt; } this.parts = this.parts.filter((p) => p.t < p.life);
  }

  _hud() {
    const s = this.sim;
    this.crowdEl.textContent = I.num(s.kids.length); this.candyEl.textContent = I.num(s.candy);
    const pct = s.boss ? (s.boss.hp / s.boss.hpMax) * 100 : s.progress() * 100;
    this.barEl.style.width = `${pct}%`; this.barEl.style.background = s.boss ? 'linear-gradient(180deg,#ff9a6a,#e0502a)' : '';
    if (this.kidMark) this.kidMark.style.left = `${pct}%`;
    const hx = s.hero.x;
    if (!this.hinted.bell && s.L.porches.some((p) => p.kind === 'friendly' && !p.rung && p.x - hx > 3 && p.x - hx < 9)) { this.hinted.bell = 1; this.hint(I.t('hintBell'), 3.5); }
    else if (!this.hinted.grumpy && s.L.porches.some((p) => p.kind === 'grumpy' && !p.rung && p.x - hx > 3 && p.x - hx < 9)) { this.hinted.grumpy = 1; this.hint(I.t('hintGrumpy'), 3.5); }
    else if (!this.hinted.pit && s.L.hazards.some((z) => z.type === 'pit' && z.w > 1 && !z.passed && z.x - hx > 3 && z.x - hx < 10)) { this.hinted.pit = 1; this.hint(I.t('hintPit'), 3.5); }
    else if (!this.hinted.float && (s.L.floats || []).some((f) => !f.got && f.x - hx > 3 && f.x - hx < 10)) { this.hinted.float = 1; this.hint(I.t('hintFloat'), 3.5); }
    else if (!this.hinted.hold && s.stats.rings + s.stats.dodged >= 1 && s.L.hazards.some((z) => (z.type === 'dog' || z.type === 'jack' || (z.type === 'pit' && z.w > 2)) && !z.passed && z.x - hx > 3 && z.x - hx < 12)) { this.hinted.hold = 1; this.hint(I.t('hintHold'), 3.5); }
    else if (!this.hinted.hedge &&s.L.hedges.some((p) => !p.broken && p.x - hx > 2 && p.x - hx < 10)) { this.hinted.hedge = 1; this.hint(I.t('hintHedge'), 3.5); }
  }

  // ---- drawing -------------------------------------------------------------------------------------------------------------
  _tile(g, t, p, heroX, y) {
    const w = t.w * this.u; const off = ((heroX * p * this.u) % w + w) % w;
    for (let x = -off; x < this.cw; x += w) g.drawImage(t.canvas, x, y, w, t.h * this.u);
  }
  _costumeFor(kid) { const o = this.save.owned; return o[kid.c % o.length]; }

  _draw() {
    const g = this.g; const s = this.sim; if (!s) return;
    this._ensureArt();
    const u = this.u; const gy = this.gy; const W = this.cw; const H = this.ch; const th = THEMES[this.themeIdx || 0]; const hero = s.hero;
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0); g.direction = 'ltr';
    g.drawImage(this.sky, 0, 0, W, H);
    const hxw = hero.x; const X = (wx) => this.hx + (wx - hxw) * u;
    const bgp = this.pics && this.pics['houses_' + th.id];
    if (bgp) {
      // painted street picture (moon, houses, trees), bottom edge hidden behind the fence; its top fades into the sky.
      // Drawn mirrored side by side so it repeats without a seam. The faded copy is built once per picture and screen size.
      const ph = Math.round(gy * 0.68 + 0.6 * u); const sh = bgp.naturalHeight * 0.8; const pw = Math.round(ph * bgp.naturalWidth / sh);
      const bk = `${th.id}|${pw}|${ph}`;
      if (this.bgKey !== bk) {
        const c = document.createElement('canvas'); c.width = pw; c.height = ph; const q = c.getContext('2d');
        q.drawImage(bgp, 0, 0, bgp.naturalWidth, sh, 0, 0, pw, ph);
        q.globalCompositeOperation = 'destination-out'; const fg = q.createLinearGradient(0, 0, 0, ph * 0.38); fg.addColorStop(0, 'rgba(0,0,0,1)'); fg.addColorStop(1, 'rgba(0,0,0,0)'); q.fillStyle = fg; q.fillRect(0, 0, pw, ph * 0.38);
        this.bgCv = c; this.bgKey = bk;
      }
      const top = gy + 0.6 * u - ph; const sc = ((hxw * u * 0.2) % (pw * 2) + pw * 2) % (pw * 2);
      for (let k = 0; k * pw - sc < W; k++) { const x = k * pw - sc; if (x + pw < 0) continue; if (k % 2) { g.save(); g.translate(x + pw, top); g.scale(-1, 1); g.drawImage(this.bgCv, 0, 0); g.restore(); } else g.drawImage(this.bgCv, x, top); }    } else {
      drawMoon(g, W * 0.78 - hxw * u * 0.01 % W, gy - 7.4 * u, u * 0.9, th);
      this._tile(g, this.tiles.far, 0.12, hxw, gy - 12 * u); this._tile(g, this.tiles.mid, 0.38, hxw, gy - 12 * u);
    }
    // ground under everything
    g.fillStyle = th.ground; g.fillRect(0, gy - 1.2 * u, W, H - gy + 1.2 * u);
    this._tile(g, this.tiles.lane, 1.0, hxw, gy - 12 * u);
    // porches
    for (const p of s.L.porches) { const x = X(p.x); if (x < -5 * u || x > W + 5 * u) continue; drawPorch(g, p, x, gy, u, th, this.clock, p.x - hxw < 8 && p.x - hxw > 0); }
    // floating doors: small doors with balloons hanging in the air (hold the jump to fly through)
    for (const f of s.L.floats || []) { if (f.got) continue; const x = X(f.x); if (x < -3 * u || x > W + 3 * u) continue; this._floatDoor(g, x, gy - f.y * u + Math.sin(this.clock * 2 + f.x) * u * 0.12, u); }
    // sidewalk and street
    g.fillStyle = th.walk; g.fillRect(0, gy - 0.25 * u, W, 1.2 * u);
    g.fillStyle = 'rgba(0,0,0,.15)'; const slab = 2.6 * u; for (let x = -((hxw * u) % slab); x < W; x += slab) g.fillRect(x, gy - 0.25 * u, u * 0.06, 1.2 * u);
    g.fillStyle = '#6a6a7a'; g.fillRect(0, gy + 0.95 * u, W, 0.3 * u);
    const sg = g.createLinearGradient(0, gy + 1.25 * u, 0, H); sg.addColorStop(0, '#2c2640'); sg.addColorStop(1, '#1c1830'); g.fillStyle = sg; g.fillRect(0, gy + 1.25 * u, W, H);
    g.fillStyle = 'rgba(255,230,160,.55)'; const dash = 4 * u; for (let x = -((hxw * u) % (dash * 2)); x < W; x += dash * 2) g.fillRect(x, gy + 2.6 * u, dash, u * 0.18);
    // lane objects
    for (const c of s.L.candies) { if (c.got) continue; const x = X(c.x); if (x < -u || x > W + u) continue; const y = gy - c.y * u + Math.sin(this.clock * 4 + c.x) * u * 0.05; this._candy(g, x, y, u, c.x); }
    for (const hd of s.L.hedges) { if (hd.broken) continue; const x = X(hd.x); if (x > -3 * u && x < W + 3 * u) drawHedge(g, hd, x, gy, u, s.kids.length, this.clock); }
    for (const z of s.L.hazards) {
      const x = X(z.x); if (x < -4 * u || x > W + 4 * u) continue;
      if (z.type === 'pit') drawPit(g, x, gy, u, z.w, this.clock, th);
      else if (z.type === 'sprinkler') drawSprinkler(g, x, gy, u, sprinklerPhase(z, s.t), this.clock);
    }
    for (const st of s.strays) drawKid(g, this._costumeFor({ c: st.c }), st.c, Math.floor(this.clock * 6) % 2, X(st.x), gy, 1.5 * u, true, Math.sin(this.clock * 8) * 0.1);
    // crowd + hero
    this._crowd(g, s, X, u, gy);
    for (const z of s.L.hazards) { const x = X(z.x); if (x < -4 * u || x > W + 4 * u) continue; if (z.type === 'dog') drawDog(g, x, gy, u, this.clock, z.on); else if (z.type === 'jack') drawJack(g, x, gy, u, this.clock, z.w); }
    // boss
    if (s.boss) this._boss(g, s, X, u, gy);
    // fx
    g.textAlign = 'center'; g.font = `900 ${u * 0.9}px Tajawal, system-ui`; g.lineJoin = 'round';
    for (const f of this.fx) { g.globalAlpha = Math.min(1, 1.1 - f.t); g.fillStyle = f.col; g.strokeStyle = 'rgba(30,10,50,.9)'; g.lineWidth = u * 0.18; const x = X(f.x); const y = gy - (f.y + f.t * 1.2) * u; const lab = f.big ? f.text : f.text + ' 👻'; if (f.big) g.font = `900 ${u * 1.3}px Tajawal, system-ui`; g.strokeText(lab, x, y); g.fillText(lab, x, y); g.font = `900 ${u * 0.9}px Tajawal, system-ui`; }
    g.globalAlpha = 1;
    for (const p of this.parts) { g.globalAlpha = Math.max(0, 1 - p.t / p.life); g.fillStyle = p.col; g.fillRect(X(p.x), gy - p.y * u, p.s * u, p.s * u); } g.globalAlpha = 1;
    // foreground: fog + leaves + vignette
    if (this.fog) { const fw = 512 * (u / 30); for (let k = 0; k < 2; k++) { const off = ((this.clock * 14 * (k + 1) + hxw * u * 0.5) % fw); g.globalAlpha = 0.7 - k * 0.25; for (let x = -off; x < W; x += fw) g.drawImage(this.fog, x, gy - (2.2 + k * 1.3) * u, fw, fw / 4); } g.globalAlpha = 1; }
    for (const l of this.leaves) { const x = (((l.x * W - this.clock * l.v * W * 0.4 - hxw * u * 0.9 * l.s) % W) + W) % W; const y = ((l.y + this.clock * l.v) % 1) * H; drawLeaf(g, x, y, u * 0.22 * l.s * 1.6, l.r + this.clock * l.s, th.leaf[(l.r | 0) % 3]); }
    if (!this.vig || this.vigKey !== `${W}x${H}`) { const c = document.createElement('canvas'); c.width = Math.ceil(W / 2); c.height = Math.ceil(H / 2); const q = c.getContext('2d'); const vg = q.createRadialGradient(c.width / 2, c.height / 2, Math.min(c.width, c.height) * 0.4, c.width / 2, c.height / 2, Math.max(c.width, c.height) * 0.75); vg.addColorStop(0, 'rgba(10,0,30,0)'); vg.addColorStop(1, 'rgba(10,0,30,.5)'); q.fillStyle = vg; q.fillRect(0, 0, c.width, c.height); this.vig = c; this.vigKey = `${W}x${H}`; }
    g.drawImage(this.vig, 0, 0, W, H);
  }

  _floatDoor(g, x, y, u) {
    g.save(); g.translate(x, y); g.lineJoin = 'round'; g.strokeStyle = '#2a1a3a'; g.lineWidth = u * 0.07;
    for (const [bx, c] of [[-0.55, '#ff7ab0'], [0, '#ffd24a'], [0.55, '#7ad0ff']]) { g.beginPath(); g.moveTo(bx * u, -0.2 * u); g.lineTo(bx * 0.5 * u, -1.1 * u); g.stroke(); g.fillStyle = c; g.beginPath(); g.ellipse(bx * u, -1.45 * u, 0.3 * u, 0.38 * u, 0, 0, 6.3); g.fill(); g.stroke(); }
    g.fillStyle = '#e04a7a'; g.beginPath(); g.roundRect(-0.5 * u, -0.5 * u, 1.0 * u, 1.5 * u, 0.12 * u); g.fill(); g.stroke();
    g.fillStyle = '#ffe9a0'; g.beginPath(); g.roundRect(-0.32 * u, -0.34 * u, 0.64 * u, 0.5 * u, 0.1 * u); g.fill();
    g.fillStyle = '#ffd24a'; g.beginPath(); g.arc(0.28 * u, 0.5 * u, 0.09 * u, 0, 6.3); g.fill(); g.stroke();
    g.restore();
  }

  _candy(g, x, y, u, seed) {
    const col = ['#ff4a8a', '#4ad0ff', '#ffd24a', '#7aff8a'][Math.abs(Math.floor(seed * 3)) % 4];
    g.save(); g.translate(x, y); g.rotate(Math.sin(this.clock * 3 + seed) * 0.4);
    g.fillStyle = col; g.strokeStyle = '#2a1a3a'; g.lineWidth = u * 0.06;
    g.beginPath(); g.moveTo(-0.33 * u, 0); g.lineTo(-0.52 * u, -0.2 * u); g.lineTo(-0.52 * u, 0.2 * u); g.closePath(); g.fill(); g.stroke();
    g.beginPath(); g.moveTo(0.33 * u, 0); g.lineTo(0.52 * u, -0.2 * u); g.lineTo(0.52 * u, 0.2 * u); g.closePath(); g.fill(); g.stroke();
    g.beginPath(); g.arc(0, 0, 0.3 * u, 0, 6.3); g.fill(); g.stroke(); g.strokeStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.arc(0, 0, 0.18 * u, 3.6, 5); g.stroke();
    g.restore();
  }

  _crowd(g, s, X, u, gy) {
    const n = s.kids.length; const hero = s.hero; const list = [];
    for (let i = 0; i < n; i++) list.push(i);
    list.sort((a, b) => kidSlot(b, n).lane - kidSlot(a, n).lane || b - a);
    const heroSpr = this.save.equipped;
    for (const i of list) {
      const k = s.kids[i]; const slot = kidSlot(i, n);
      let wx = hero.x - slot.dx; let wy = s.kidY(i, n);
      const age = s.t - k.born;
      if (age < 0.7) { const p = age / 0.7; wx = k.from + (wx - k.from) * p; wy = Math.sin(p * Math.PI) * 1.4; }
      const sc = 1 - slot.lane * 0.06; const ph = wy > 0.05 ? 2 : Math.floor(this.clock * 11 + i) % 2;
      drawKid(g, this._costumeFor(k), k.c, ph, X(wx) , gy - wy * u - slot.lane * 0.2 * u, 1.55 * u * sc, false, wy > 0.05 ? -0.08 : 0);
    }
    const blink = hero.invuln > 0 && Math.floor(this.clock * 14) % 2 === 0;
    if (!blink) {
      const wy = hero.y; const ph = wy > 0.05 ? 2 : Math.floor(this.clock * 12) % 2;
      const squash = wy > 0.05 ? 1 + Math.min(0.1, Math.abs(hero.vy) * 0.01) : 1;
      g.save(); g.translate(X(hero.x), gy - wy * u); g.scale(1 / squash, squash); g.translate(-X(hero.x), -(gy - wy * u));
      drawHero(g, X(hero.x), gy - wy * u, u, heroSpr, 0, ph, wy > 0.05 ? -0.05 : 0, true, this.clock);
      g.restore();
    }
    // the crowd-size tag floating over the leader (as in the video)
    { const cx = X(hero.x - 0.8); const cy = gy - 2.35 * u; const txt = I.num(n); g.save(); g.font = `900 ${u * 0.85}px Tajawal, system-ui`; g.textAlign = 'left'; const tw = g.measureText(txt).width + u * 1.5;
      g.fillStyle = 'rgba(40,16,70,.92)'; g.strokeStyle = '#ffb040'; g.lineWidth = u * 0.1; g.beginPath(); g.roundRect(cx - tw / 2, cy - u * 0.55, tw, u * 1.1, u * 0.55); g.fill(); g.stroke();
      g.fillStyle = '#fff'; g.textBaseline = 'middle'; g.fillText('👤', cx - tw / 2 + u * 0.3, cy); g.fillText(txt, cx - tw / 2 + u * 1.2, cy + u * 0.02); g.restore(); }
    // shadow
    g.fillStyle = 'rgba(0,0,0,.25)'; g.beginPath(); g.ellipse(X(hero.x), gy + 0.05 * u, 0.7 * u * (1 - Math.min(0.5, hero.y * 0.15)), 0.14 * u, 0, 0, 6.3); g.fill();
  }

  _boss(g, s, X, u, gy) {
    const b = s.boss; const a = b.attack; const hero = s.hero;
    drawSpider(g, b, X(b.x), gy, u, this.clock, a, X(hero.x));
    if (!a) return;
    if (a.type === 'roll' && a.t >= a.tele) drawJack(g, X(a.px) - 0.5 * u, gy, u, this.clock, 1.1);
    if (a.type === 'stomp') {
      const p = Math.min(1, a.t / a.tele); const act = a.t >= a.tele;
      g.fillStyle = act ? 'rgba(255,60,60,.5)' : `rgba(255,90,90,${0.15 + 0.35 * p})`; g.beginPath(); g.ellipse(X(hero.x), gy + 0.1 * u, (1.0 + (act ? 0.4 : 0.9 * (1 - p))) * u, 0.3 * u, 0, 0, 6.3); g.fill();
      if (!act) { g.fillStyle = '#ffd24a'; g.font = `900 ${1.4 * u}px system-ui`; g.textAlign = 'center'; g.fillText('⚠', X(hero.x), gy - 4.4 * u + Math.sin(this.clock * 20) * 0.1 * u); }
    }
    if (a.type === 'swat' && a.t < a.tele) { g.fillStyle = '#ffd24a'; g.font = `900 ${1.4 * u}px system-ui`; g.textAlign = 'center'; g.fillText('⚠', X(hero.x), gy - 4.4 * u + Math.sin(this.clock * 20) * 0.1 * u); }
    if (a.type === 'roll' && a.t < a.tele) { g.fillStyle = '#ffd24a'; g.font = `900 ${1.4 * u}px system-ui`; g.textAlign = 'center'; g.fillText('⚠', X(hero.x) + 3 * u, gy - 1.6 * u + Math.sin(this.clock * 20) * 0.1 * u); }
  }

  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); this.voice.dispose(); document.removeEventListener('pointerdown', this._voiceArm, true); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey); this.root.remove(); }
}

const CSS = `
.tt-root{background:#1b1030;touch-action:none}
.tt-btn{border-radius:calc(var(--u)*2.4) calc(var(--u)*3.4) calc(var(--u)*2.2) calc(var(--u)*3.6)!important;background:linear-gradient(180deg,#ffb04a,#ec7a1c)!important;box-shadow:calc(var(--u)*.5) calc(var(--u)*.8) 0 #7a3a0a!important;border:calc(var(--u)*.3) dashed rgba(255,255,255,.75)!important;transform:rotate(-.6deg)}
.tt-btn:nth-child(even){transform:rotate(.7deg)}.tt-btn:active{transform:translateY(calc(var(--u)*.5)) rotate(0)}
.tt-btn.dark{background:linear-gradient(180deg,#8a5ac8,#5a3098)!important;box-shadow:calc(var(--u)*.5) calc(var(--u)*.8) 0 #2a1058!important}
.tt-btn.alt{background:linear-gradient(180deg,#e8605a,#b02a3a)!important;box-shadow:calc(var(--u)*.5) calc(var(--u)*.8) 0 #5a0a1a!important}
.tt-card{border-radius:calc(var(--u)*3) calc(var(--u)*5) calc(var(--u)*3.4) calc(var(--u)*4.6);background:linear-gradient(180deg,#4a2878,#241048);box-shadow:calc(var(--u)*1) calc(var(--u)*1.4) 0 rgba(0,0,0,.4),inset 0 0 0 calc(var(--u)*.35) rgba(255,255,255,.14)}
.tt-dim{background:rgba(15,5,35,.6)}
.tt-hud{position:absolute;top:max(calc(var(--u)*1.6),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;flex-direction:column;gap:calc(var(--u)*2.6);direction:ltr;pointer-events:none}
.tt-row{display:flex;gap:calc(var(--u)*2);align-items:center}
.tt-paper{background:#f3ecdc;color:#2a1a3a;font-weight:900;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.2) rgba(0,0,0,.4);clip-path:polygon(0 8%,4% 0,10% 6%,17% 0,26% 5%,35% 0,45% 6%,55% 0,65% 5%,76% 0,86% 6%,94% 0,100% 7%,98% 40%,100% 62%,97% 100%,90% 94%,80% 100%,70% 95%,60% 100%,50% 94%,40% 100%,30% 95%,20% 100%,10% 94%,3% 100%,0 70%,2% 40%);display:flex;align-items:center}
.tt-kids,.tt-cand{padding:calc(var(--u)*1.2) calc(var(--u)*3) calc(var(--u)*1.2) calc(var(--u)*1.6);gap:calc(var(--u)*1.6);font-size:calc(var(--u)*6.4);min-width:calc(var(--u)*22)}
.tt-kids{min-width:calc(var(--u)*30)}.tt-cand{min-width:calc(var(--u)*22);opacity:.96}
.tt-num{line-height:1}
.tt-ico{width:calc(var(--u)*8.6);height:calc(var(--u)*8.6);border-radius:50%;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:calc(var(--u)*4.4);flex:none}
.tt-ico.o{background:#ee7a1c;color:#2a1a3a}.tt-ico.p{background:#9a4ab8}.tt-ico.d{background:#2a1a30;color:#ee9a3a}
.tt-pause{margin-left:auto;pointer-events:auto;width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:50%;background:#22182a;color:#fff;border:calc(var(--u)*.9) solid #ee7a1c;font-size:calc(var(--u)*5);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit}
.tt-prog{padding:calc(var(--u)*2.2) calc(var(--u)*2.4);gap:calc(var(--u)*2)}
.tt-track{flex:1;height:calc(var(--u)*3);background:#2a1f33;border-radius:99px;position:relative}
.tt-track b{display:block;height:100%;border-radius:99px;background:#ee7a1c!important}
.tt-mark{position:absolute;top:50%;width:calc(var(--u)*8);height:calc(var(--u)*8);margin:calc(var(--u)*-4) 0 0 calc(var(--u)*-4);border-radius:50%;background:#7a3a98;border:calc(var(--u)*.5) solid #f3ecdc;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:calc(var(--u)*4.4)}
.tt-hint{top:calc(var(--u)*34)!important;background:#f3ecdc!important;color:#2a1a3a!important;border:0!important;border-radius:calc(var(--u)*1)!important;white-space:normal!important;text-align:center;font-size:calc(var(--u)*5.6)!important;line-height:1.25;width:78%;padding:calc(var(--u)*3) calc(var(--u)*4)!important;clip-path:polygon(0 4%,6% 0,15% 3%,30% 0,45% 3%,60% 0,75% 3%,90% 0,100% 4%,98% 50%,100% 96%,88% 100%,70% 97%,50% 100%,30% 97%,12% 100%,0 96%,2% 50%);box-shadow:none}
.tt-card .tt-btn{font-size:calc(var(--u)*4.4);min-height:calc(var(--u)*10.4)}
.tt-shop{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.4);width:100%}
.tt-item{font-family:inherit;border:calc(var(--u)*.3) dashed rgba(255,255,255,.6);border-radius:calc(var(--u)*2.4);background:rgba(255,255,255,.1);color:#fff;font-weight:900;padding:calc(var(--u)*.8);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.2);font-size:calc(var(--u)*2.6)}
.tt-item canvas{position:static!important;inset:auto!important;width:auto!important;height:calc(var(--u)*14)!important}.tt-item small{font-size:calc(var(--u)*2.6)}
.tt-item.can{background:rgba(106,224,138,.28)}.tt-item.worn{background:rgba(255,210,74,.3);border-style:solid}
.tt-item:focus-visible{outline:calc(var(--u)*.7) solid #ffd24a}
@media (orientation:portrait){.tt-shop{grid-template-columns:repeat(2,1fr)}.tt-lvs{grid-template-columns:repeat(3,1fr)!important}}
`;

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.TrickOrTreat = api;
export default api;
void MAX_KIDS; void hazardBox; void rng; void h;
