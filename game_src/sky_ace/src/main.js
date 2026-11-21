// «طيار السحاب» — Sky Ace. Entry: window.SkyAce.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Casual vertical sky shooter: drag to move the little propeller plane, it fires by itself. Enemy shots are announced first.
// Collect coins and power-ups, drop the bomb, beat 8 stages and their bosses, buy plane upgrades. 2D canvas, art and sound in code.
import { Game, autoInput, STAGES, UPGRADES, SKINS, normalizeSave, buyUpgrade, buySkin, finishStage, upgradeCost, statsFor, W } from './sim.js';
import { Sound } from './audio.js';
import { drawBackground, drawPlane, drawUfo, drawBoss, makeScenery, star4, SKIN_COLORS, THEMES } from './art.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';

const S = {
  title: ['طيار السحاب', 'Sky Ace'], play: ['العب', 'PLAY'], stages: ['المراحل', 'STAGES'], hangar: ['الورشة', 'HANGAR'], settings: ['الإعدادات', 'SETTINGS'],
  exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], back: ['رجوع', 'Back'], resume: ['كمّل', 'Resume'], again: ['جرّب تاني', 'Try again'], next: ['المرحلة الجاية', 'Next stage'],
  demo: ['تجربة — دوس عشان القائمة', 'DEMO — TAP FOR MENU'], paused: ['وقفة', 'Paused'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  how: ['اسحب إصبعك لتحريك الطيارة — بتضرب لوحدها!', 'Drag to fly — it shoots by itself!'], bomb: ['قنبلة', 'FIRE'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], lose: ['الطيارة اتعبت، حاول تاني!', 'Your plane needs a rest. Try again!'],
  score: ['النقاط', 'Score'], coins: ['العملات', 'Coins'], best: ['أفضل', 'Best'], warn: ['تحذير! زعيم قادم', 'WARNING! Boss incoming'], phase: ['الزعيم غضبان!', 'The boss is angry!'],
  sndOn: ['الصوت: شغال', 'Sound: on'], sndOff: ['الصوت: مقفول', 'Sound: off'], lang: ['English', 'العربية'], stage: ['المرحلة', 'Stage'], locked: ['مقفولة', 'Locked'], max: ['أقصى', 'MAX'], owned: ['عندك', 'Owned'], use: ['استخدم', 'Use'],
  up_dmg: ['قوة النار', 'Fire power'], up_rate: ['سرعة النار', 'Fire rate'], up_hp: ['صحة الطيارة', 'Health'], up_magnet: ['مغناطيس العملات', 'Coin magnet'], up_bomb: ['القنبلة أسرع', 'Faster bomb'],
  skin: ['الألوان', 'Skins'], sk_sunny: ['شمس', 'Sunny'], sk_berry: ['توت', 'Berry'], sk_mint: ['نعناع', 'Mint'], sk_sky: ['سماء', 'Sky'], sk_gold: ['ذهب', 'Gold'],
  p_double: ['نار مزدوجة!', 'Double shot!'], p_shield: ['درع!', 'Shield!'], p_magnet: ['مغناطيس!', 'Magnet!'], p_bomb: ['القنبلة جاهزة!', 'Bomb ready!'], p_x2: ['نقاط ×٢!', 'Score X2!'], p_heal: ['صحة +٣٠', 'Health +30'],
  n1: ['المرج الأزرق', 'Blue Meadow'], n2: ['جزر الغيوم', 'Cloud Isles'], n3: ['غروب الشمس', 'Sunset Run'], n4: ['ليل النجوم', 'Starry Night'], n5: ['عاصفة وردية', 'Candy Storm'], n6: ['قمم الثلج', 'Snowy Peaks'], n7: ['بحر الذهب', 'Golden Sea'], n8: ['قلعة السماء', 'Sky Castle'],
};
const I = makeI18n(S);
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const ICON = { dmg: '🔥', rate: '⚡', hp: '❤️', magnet: '🧲', bomb: '💣' };
const PWR = { double: '⚡', shield: '🛡️', magnet: '🧲', bomb: '💣', x2: 'X2', heal: '❤️' };
const PWR_COL = { double: '#ffb020', shield: '#4ab8ff', magnet: '#e85a5a', bomb: '#555', x2: '#b84aff', heal: '#ff5a8a' };
const BOSS_TINT = [['#e8403a', '#fff0e0'], ['#a84aff', '#ff6ad0'], ['#7a8aa8', '#c8d4e8'], ['#e8803a', '#fff0b0'], ['#3ab8a8', '#a0ffe0'], ['#8a9ab8', '#e8f4ff'], ['#e8b030', '#fff4b0'], ['#6a4ac8', '#ff8ad0']];

class App {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    this.save = normalizeSave(config.save);
    I.setLang(this.save.lang || config.lang); I.setGirl(config.gender === 'girl'); this.girl = config.gender === 'girl';
    this.easy = Number(config.age || 5) <= 3;
    this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    if (!document.getElementById('sa-style')) document.head.append(h('style', { id: 'sa-style' }, css('sa', '#3a98f0', '#1a52b8', '#ffe14a') + `
.sa-root{background:#8fd0ff}
.sa-hud2{position:absolute;top:calc(var(--u)*15.5);left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;gap:calc(var(--u)*1.4);direction:ltr;align-items:center;pointer-events:none}
.sa-chip{background:rgba(10,30,70,.55);border:calc(var(--u)*.35) solid #fff;border-radius:999px;font-weight:900;font-size:calc(var(--u)*3.4);padding:calc(var(--u)*.5) calc(var(--u)*2.2);white-space:nowrap}
.sa-hp{flex:1;height:calc(var(--u)*4.4);border-radius:99px;background:rgba(0,0,0,.45);border:calc(var(--u)*.4) solid #fff;position:relative;overflow:hidden}
.sa-hp b{position:absolute;inset:0 auto 0 0;background:linear-gradient(180deg,#8af07a,#2ab84a);border-radius:99px}
.sa-hp span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:calc(var(--u)*3.2);text-shadow:0 0 3px #000,0 0 3px #000}
.sa-boss{position:absolute;top:calc(var(--u)*24);left:calc(var(--u)*8);right:calc(var(--u)*8);height:calc(var(--u)*2.6);border-radius:99px;background:rgba(0,0,0,.5);border:calc(var(--u)*.35) solid #fff;overflow:hidden;display:none}
.sa-boss b{display:block;height:100%;background:linear-gradient(180deg,#ff7a7a,#d02a2a)}
.sa-bomb{position:absolute;right:calc(var(--u)*4);bottom:max(calc(var(--u)*6),env(safe-area-inset-bottom));width:calc(var(--u)*21);height:calc(var(--u)*21);border-radius:50%;border:none;padding:0;cursor:pointer;pointer-events:auto;background:conic-gradient(#fff calc(var(--p,100)*1%),rgba(20,40,80,.6) 0);box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,20,40,.5);font-family:inherit;display:flex;align-items:center;justify-content:center}
.sa-bomb i{width:82%;height:82%;border-radius:50%;background:linear-gradient(180deg,#ff8a5a,#d83a1a);display:flex;flex-direction:column;align-items:center;justify-content:center;font-style:normal;font-size:calc(var(--u)*8);color:#fff;line-height:1;filter:saturate(.35) brightness(.8)}
.sa-bomb i small{font-size:calc(var(--u)*3);font-weight:900}
.sa-bomb.ready i{filter:none;animation:sapulse .9s infinite}
@keyframes sapulse{50%{transform:scale(1.08)}}
.sa-flash{position:absolute;inset:0;background:#f33;opacity:0;pointer-events:none;transition:opacity .25s}
.sa-banner{position:absolute;left:0;right:0;top:34%;text-align:center;font-weight:900;font-size:calc(var(--u)*7);color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #a01818;paint-order:stroke fill;opacity:0;pointer-events:none;transition:opacity .3s}
.sa-banner.show{opacity:1}
.sa-hand{position:absolute;left:50%;bottom:22%;font-size:calc(var(--u)*12);transform:translateX(-50%);animation:sahand 1.6s infinite;pointer-events:none}
@keyframes sahand{0%{transform:translate(-50%,0)}50%{transform:translate(-20%,-30%)}100%{transform:translate(-50%,0)}}
.sa-row{display:flex;align-items:center;gap:calc(var(--u)*2);width:100%;background:rgba(255,255,255,.14);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.2) calc(var(--u)*2);box-sizing:border-box;font-weight:900;font-size:calc(var(--u)*3.6)}
.sa-row .nm{flex:1}.sa-row .pips{letter-spacing:calc(var(--u)*.3);font-size:calc(var(--u)*3)}
.sa-row .sa-btn{width:auto;min-height:calc(var(--u)*8);font-size:calc(var(--u)*3.4);padding:calc(var(--u)*.6) calc(var(--u)*3)}
.sa-sk{display:flex;gap:calc(var(--u)*1.6);flex-wrap:wrap;justify-content:center}
.sa-sk button{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3);color:#fff;border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*.8) calc(var(--u)*2);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.3)}
.sa-sk button.on{outline:calc(var(--u)*.7) solid #ffe14a}
.sa-demo{position:absolute;left:50%;top:calc(var(--u)*3);transform:translateX(-50%);font-weight:900;font-size:calc(var(--u)*3.4);color:#fff;background:rgba(10,30,70,.5);border-radius:99px;padding:calc(var(--u)*.6) calc(var(--u)*3);animation:sapulse 1.4s infinite;white-space:nowrap;pointer-events:none}
.sa-card .sa-lvs{grid-template-columns:repeat(4,1fr)}
` ));
    this.root = h('div', { class: 'sa-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas'); this.root.append(this.cv); this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'sa-layer' }); this.root.append(this.layer);
    this.sc = makeScenery(11); this.scroll = 0; this.clock = 0; this.fx = []; this.keys = new Set();
    this.mode = 'menu'; this.seed = 5; this.shake = 0; this.tgt = { x: 50, y: 160 };
    this._resize(); this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind(); this._newDemo();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _resize() {
    const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2); this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr);
    this.s = Math.min(this.cw / W, this.ch / 150); this.H = clamp(this.ch / this.s, 150, 220); this.ox = (this.cw - W * this.s) / 2;
    this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`);
  }

  _newDemo() { this.seed++; this.demo = new Game({ stage: 1 + (this.seed % 4), seed: this.seed, H: this.H || 200 }); this.f = this.demo; }

  _bind() {
    const unlock = () => { this.sound.unlock(); if (this.sound.ctx && this.sound.mode && !this.sound.eng) this.sound.setMode(this.sound.mode); };
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play') return; this.cv.setPointerCapture(e.pointerId);
      this.drag = { id: e.pointerId, px: e.clientX, py: e.clientY, x0: this.f.p.x, y0: this.f.p.y }; this.tgt = { x: this.f.p.x, y: this.f.p.y }; this.moved = this.moved || 0;
    });
    this.cv.addEventListener('pointermove', (e) => { const d = this.drag; if (d && d.id === e.pointerId) { this.tgt = { x: d.x0 + ((e.clientX - d.px) / this.s) * 1.35, y: d.y0 + ((e.clientY - d.py) / this.s) * 1.35 }; this.moved = (this.moved || 0) + 1; } });
    const up = (e) => { if (this.drag && this.drag.id === e.pointerId) this.drag = null; };
    this.cv.addEventListener('pointerup', up); this.cv.addEventListener('pointercancel', up);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') { this.keys.add(k); if ((k === ' ' || k === 'b') && this.mode === 'play') { this._bomb(); e.preventDefault(); } if ((k === 'p' || k === 'escape') && (this.mode === 'play')) this.showPause(); }
      else this.keys.delete(k);
    };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play') this.showPause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  say(text, ms = 2200) { if (!this.hint) return; this.hint.textContent = text; this.hint.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hint && this.hint.classList.remove('show'), ms); }
  _soundPill() { const pill = h('button', { class: 'sa-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  _persist() { this.post({ type: 'save', save: this.save }); }
  _btn(txt, fn, cls = '') { return h('button', { class: `sa-btn ${cls}`, onclick: () => { this.sound.play('tap'); fn(); } }, txt); }
  _stageName(n) { return I.t(`n${n}`); }

  // ---------- screens ----------
  _screen(mode, ...kids) { this.mode = mode; this.layer.replaceChildren(); this.hint = null; this.layer.append(...kids); this._soundPill(); }
  _card(title, ...kids) { return h('div', { class: 'sa-dim' }, h('div', { class: 'sa-card' }, title ? h('div', { class: 'sa-title' }, title) : null, ...kids)); }

  showMenu() {
    this.sound.setMode('menu'); if (!this.demo || this.demo.state !== 'play') this._newDemo(); this.f = this.demo; this.preview = false;
    this._screen('menu', h('div', { class: 'sa-demo' }, I.t('demo')),
      this._card(null, h('div', { class: 'sa-logo' }, '✈️ ', I.t('title')),
        this._btn(`▶ ${I.t('play')}`, () => this.startStage(Math.min(this.save.unlocked, STAGES))),
        this._btn(I.t('stages'), () => this.showStages(), 'dark'), this._btn(I.t('hangar'), () => this.showHangar(), 'dark'),
        this._btn(I.t('settings'), () => this.showSettings(), 'dark'), this._btn(I.t('exit'), () => this.post({ type: 'exit' }), 'alt')));
  }

  showStages() {
    const g = h('div', { class: 'sa-lvs' });
    for (let n = 1; n <= STAGES; n++) {
      const ok = n <= this.save.unlocked; const st = this.save.stars[n];
      const b = h('button', { class: `sa-lv ${ok ? '' : 'lock'}`, disabled: !ok, onclick: () => { this.sound.play('tap'); this.startStage(n); } }, h('i', {}, ok ? I.num(n) : '🔒'), h('span', {}, ok ? '★'.repeat(st) + '☆'.repeat(3 - st) : I.t('locked')));
      g.append(b);
    }
    this._screen('menu', this._card(I.t('stages'), g, this._btn(I.t('back'), () => this.showMenu(), 'dark')));
  }

  showHangar() {
    this.preview = true; this.sound.setMode('menu');
    const rows = h('div', { style: 'display:flex;flex-direction:column;gap:calc(var(--u)*1.2);width:100%' });
    const coins = h('div', { class: 'sa-pill' }, `🪙 ${I.num(this.save.coins)}`);
    for (const k of Object.keys(UPGRADES)) {
      const c = upgradeCost(this.save, k); const l = this.save.up[k];
      const b = c === null ? h('span', {}, I.t('max')) : h('button', { class: 'sa-btn', disabled: this.save.coins < c, style: this.save.coins < c ? 'opacity:.5' : '', onclick: () => { const n = buyUpgrade(this.save, k); if (n) { this.save = n; this.sound.play('buy'); this._persist(); this.showHangar(); } } }, `🪙 ${I.num(c)}`);
      rows.append(h('div', { class: 'sa-row' }, h('span', {}, ICON[k]), h('span', { class: 'nm' }, I.t(`up_${k}`)), h('span', { class: 'pips' }, '●'.repeat(l) + '○'.repeat(UPGRADES[k].max - l)), b));
    }
    const sk = h('div', { class: 'sa-sk' });
    for (const s of SKINS) {
      const own = this.save.owned.includes(s.id); const col = SKIN_COLORS[s.id].body;
      sk.append(h('button', { class: this.save.skin === s.id ? 'on' : '', style: `background:linear-gradient(180deg,${col[0]},${col[1]});${!own && this.save.coins < s.cost ? 'opacity:.55' : ''}`, onclick: () => {
        if (own) { this.save = { ...this.save, skin: s.id }; this._persist(); this.sound.play('tap'); this.showHangar(); return; }
        const n = buySkin(this.save, s.id); if (n) { this.save = n; this.sound.play('buy'); this._persist(); this.showHangar(); }
      } }, I.t(`sk_${s.id}`), h('small', {}, own ? (this.save.skin === s.id ? '✓' : I.t('use')) : `🪙 ${I.num(s.cost)}`)));
    }
    this._screen('hangar', h('div', { class: 'sa-dim', style: 'align-items:flex-end' }, h('div', { class: 'sa-card', style: 'max-height:78%' }, h('div', { class: 'sa-title' }, I.t('hangar')), coins, rows, h('div', { class: 'sa-small' }, I.t('skin')), sk, this._btn(I.t('back'), () => { this.preview = false; this.showMenu(); }, 'dark'))));
  }

  showSettings() {
    const snd = this._btn(this.save.muted ? I.t('sndOff') : I.t('sndOn'), () => { this.save = { ...this.save, muted: !this.save.muted }; this.sound.setMuted(this.save.muted); this._persist(); this.showSettings(); }, 'dark');
    const lang = this._btn(I.t('lang'), () => { const l = I.getLang() === 'en' ? 'ar' : 'en'; I.setLang(l); this.save = { ...this.save, lang: l }; this.root.setAttribute('dir', l === 'en' ? 'ltr' : 'rtl'); this._persist(); this.showSettings(); }, 'dark');
    this._screen('menu', this._card(I.t('settings'), snd, lang, this._btn(I.t('back'), () => this.showMenu())));
  }

  startStage(n) {
    this.preview = false; this.stageN = n;
    this.f = new Game({ stage: n, seed: (this.seed += 3), save: this.save, H: this.H, easy: this.easy });
    this.tgt = { x: 50, y: this.f.p.y }; this.fx = []; this.moved = 0; this.mode = 'play'; this.t0 = this.clock; this.bossWarned = false;
    this.sound.setMode('play');
    this.hpEl = h('b', { style: 'width:100%' }); this.hpTx = h('span', { style: 'direction:ltr' }, '100%'); this.scEl = h('div', { class: 'sa-pill' }, '0'); this.coinEl = h('div', { class: 'sa-chip' }, '🪙 0');
    this.x2El = h('div', { class: 'sa-chip', style: 'display:none;background:#8a2ad0' }, 'X2'); this.pwEl = h('div', { class: 'sa-chip', style: 'display:none' }, '');
    this.bossEl = h('div', { class: 'sa-boss' }, h('b', { style: 'width:100%' }));
    this.bombEl = h('button', { class: 'sa-bomb', 'aria-label': I.t('bomb') }, h('i', {}, '💥', h('small', {}, I.t('bomb'))));
    this.bombEl.addEventListener('pointerdown', (e) => { e.stopPropagation(); this._bomb(); });
    this.flashEl = h('div', { class: 'sa-flash' }); this.banner = h('div', { class: 'sa-banner' });
    this.hint = h('div', { class: 'sa-hint', style: 'top:calc(var(--u)*30)' });
    const pause = h('button', { class: 'sa-round', 'aria-label': I.t('paused'), onclick: () => this.showPause() }, '❚❚');
    this.layer.replaceChildren(this.flashEl, h('div', { class: 'sa-top' }, pause, h('div', { class: 'sa-hp' }, this.hpEl, this.hpTx), this.scEl),
      h('div', { class: 'sa-hud2' }, this.coinEl, this.x2El, this.pwEl), this.bossEl, this.banner, this.hint, this.bombEl);
    if (!this.save.tutorial) { this.hand = h('div', { class: 'sa-hand' }, '👆'); this.layer.append(this.hand); this.say(I.t('how'), 6000); } else this.hand = null;
    this.say(`${I.t('stage')} ${I.num(n)} — ${this._stageName(n)}`, 2400);
    this._soundPill();
  }

  _bomb() { if (this.mode === 'play' && this.f.useBomb()) this._events([{ type: 'bomb', x: this.f.p.x, y: this.f.p.y }], true); }

  showPause() {
    if (this.mode !== 'play') return; this.mode = 'pause'; this.sound.setMode(null);
    this.layer.append(this._card(I.t('paused'), this._btn(I.t('resume'), () => { this.layer.lastChild.remove(); this.mode = 'play'; this.sound.setMode(this.f.boss ? 'boss' : 'play'); }),
      this._btn(I.t('again'), () => this.startStage(this.stageN), 'dark'), this._btn(I.t('menu'), () => this.showMenu(), 'alt')));
    this.layer.lastChild.id = 'sa-pause';
  }

  showResult(r) {
    this.mode = 'result'; this.sound.setMode(null); this.sound.play(r.won ? 'win' : 'lose');
    const before = this.save;
    this.save = finishStage({ ...this.save, tutorial: true }, this.stageN, r); this._persist();
    const stars = h('div', { class: 'sa-stars' }); for (let i = 0; i < 3; i++) stars.append(h('span', { class: i < r.stars ? '' : 'off' }, '⭐'));
    const next = r.won && this.stageN < STAGES ? this._btn(I.t('next'), () => this.startStage(this.stageN + 1)) : null;
    this.layer.append(this._card(r.won ? I.t('win') : I.t('lose'), r.won ? stars : null,
      h('div', { class: 'sa-pill' }, `${I.t('score')}: ${I.num(r.score)}`), h('div', { class: 'sa-pill' }, `🪙 +${I.num(r.coins)}`),
      r.won && r.score > before.best[this.stageN] ? h('div', { class: 'sa-small' }, `🏆 ${I.t('best')}!`) : null,
      next, this._btn(I.t('again'), () => this.startStage(this.stageN), next ? 'dark' : ''), this._btn(I.t('hangar'), () => this.showHangar(), 'dark'), this._btn(I.t('menu'), () => this.showMenu(), 'alt')));
  }

  // ---------- loop ----------
  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt;
      if (this.mode !== 'pause') this.scroll += dt * (this.mode === 'play' ? 34 : 22);
      if (this.mode === 'play') this._update(dt); else if (this.mode !== 'pause' && this.mode !== 'result' && !this.preview) this._updateDemo(dt);
      this._fxStep(this.mode === 'pause' ? 0 : dt);
      this._draw();
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _updateDemo(dt) {
    const d = this.demo; if (!d) return;
    if (d.state !== 'play' && d.state !== 'clearing') { this._newDemo(); return; }
    d.setH(this.H); const ev = d.step(dt, autoInput(d));
    for (const e of ev) this._fxEvent(e);
  }

  _update(dt) {
    const f = this.f; f.setH(this.H);
    const k = this.keys; const sp = 110 * dt;
    if (k.size) { let dx = 0; let dy = 0; if (k.has('arrowleft') || k.has('a')) dx -= 1; if (k.has('arrowright') || k.has('d')) dx += 1; if (k.has('arrowup') || k.has('w')) dy -= 1; if (k.has('arrowdown') || k.has('s')) dy += 1; if (dx || dy) { this.tgt = { x: clamp(f.p.x + dx * 30, 6, W - 6), y: clamp(f.p.y + dy * 30, f.H * 0.38, f.H - 12) }; this.moved = (this.moved || 0) + 1; } }
    void sp;
    const ev = f.step(dt, { tx: this.tgt.x, ty: this.tgt.y });
    this._events(ev);
    this._hud();
    if (this.hand && this.moved > 8) { this.hand.remove(); this.hand = null; this.save = { ...this.save, tutorial: true }; this._persist(); }
  }

  _events(ev, local) {
    for (const e of ev) {
      this._fxEvent(e);
      switch (e.type) {
        case 'shot': this.sound.play('shot'); break;
        case 'warn': this.sound.play('warn'); break;
        case 'fire': this.sound.play('efire'); break;
        case 'hit': this.sound.play('hit'); this.shake = 0.35; this.flashEl.style.opacity = '0.35'; setTimeout(() => { this.flashEl.style.opacity = '0'; }, 120); break;
        case 'shield': this.sound.play('shield'); break;
        case 'kill': this.sound.play('pop'); break;
        case 'coin': this.sound.play('coin'); break;
        case 'power': this.sound.play('power'); this.say(I.t(`p_${e.kind}`), 1400); break;
        case 'bomb': this.sound.play('bomb'); this.flashEl.style.background = '#fff'; this.flashEl.style.opacity = '0.8'; setTimeout(() => { this.flashEl.style.opacity = '0'; setTimeout(() => { this.flashEl.style.background = '#f33'; }, 300); }, 90); this.shake = 0.5; break;
        case 'bossHit': this.sound.play('bosshit'); break;
        case 'boss': this.sound.play('boss'); this.sound.setMode('boss'); this._banner(I.t('warn'), 2600); break;
        case 'bossPhase': this.sound.play('phase'); this._banner(I.t('phase'), 1800); break;
        case 'bossDown': this.sound.play('bomb'); this.shake = 0.6; break;
        case 'down': this.sound.play('hit'); break;
        case 'stageClear': case 'lose': this.showResult(e); break;
        default: break;
      }
    }
    void local;
  }
  _banner(t, ms) { this.banner.textContent = t; this.banner.classList.add('show'); setTimeout(() => this.banner.classList.remove('show'), ms); }

  _hud() {
    const f = this.f; const p = f.p; const pct = Math.max(0, Math.round((p.hp / p.maxHp) * 100));
    if (pct !== this._pct) { this._pct = pct; this.hpEl.style.width = `${pct}%`; this.hpEl.style.background = pct > 55 ? 'linear-gradient(180deg,#8af07a,#2ab84a)' : pct > 28 ? 'linear-gradient(180deg,#ffe05a,#e0a010)' : 'linear-gradient(180deg,#ff8a7a,#d02a2a)'; this.hpTx.textContent = `${I.num(pct)}%`; }
    if (f.score !== this._sc) { this._sc = f.score; this.scEl.textContent = `⭐ ${I.num(f.score)}`; }
    if (f.coinsGot !== this._co) { this._co = f.coinsGot; this.coinEl.textContent = `🪙 ${I.num(f.coinsGot)}`; }
    const x2 = p.x2 > 0; this.x2El.style.display = x2 ? '' : 'none'; if (x2) this.x2El.textContent = `X2 ${I.num(Math.ceil(p.x2))}`;
    const pw = [['double', p.double], ['shield', p.shield], ['magnet', p.magnet]].filter((q) => q[1] > 0).map((q) => `${PWR[q[0]]} ${I.num(Math.ceil(q[1]))}`).join('  ');
    this.pwEl.style.display = pw ? '' : 'none'; if (pw !== this._pw) { this._pw = pw; this.pwEl.textContent = pw; }
    const cd = this.f.st.bombCd; const ready = p.bombCd <= 0; const pr = ready ? 100 : Math.round((1 - p.bombCd / cd) * 100);
    this.bombEl.style.setProperty('--p', pr); this.bombEl.classList.toggle('ready', ready);
    const b = f.boss; if (b && b.hp > 0) { this.bossEl.style.display = 'block'; this.bossEl.firstChild.style.width = `${(b.hp / b.maxHp) * 100}%`; } else this.bossEl.style.display = 'none';
  }

  // ---------- effects ----------
  _fxEvent(e) {
    const fx = this.fx; if (fx.length > 260) return;
    const spark = (x, y, n, cols, sp = 30, life = 0.7) => { for (let i = 0; i < n; i++) { const a = Math.random() * 6.28; const v = (0.3 + Math.random()) * sp; fx.push({ k: 'spark', x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, t: 0, life: life * (0.6 + Math.random() * 0.6), c: cols[i % cols.length], r: 1 + Math.random() * 1.6 }); } };
    switch (e.type) {
      case 'kill': fx.push({ k: 'puff', x: e.x, y: e.y, t: 0, life: 0.5, r: e.kind === 'bomber' ? 12 : 7 }); spark(e.x, e.y, 12, ['#ffe14a', '#fff', '#ff9a3a', '#7ae0ff'], 38); fx.push({ k: 'text', x: e.x, y: e.y - 3, t: 0, life: 0.8, text: `+${e.score}`, c: '#fff' }); if (e.chute) fx.push({ k: 'chute', x: e.x, y: e.y, t: 0, life: 3.2, ph: e.x }); break;
      case 'hit': fx.push({ k: 'text', x: e.x, y: e.y - 6, t: 0, life: 0.8, text: `-${e.dmg}`, c: '#ff7a7a' }); spark(e.x, e.y, 8, ['#ff7a7a', '#fff'], 28, 0.5); break;
      case 'shield': fx.push({ k: 'ring', x: e.x, y: e.y, t: 0, life: 0.4, r: 14, c: '#7ad0ff' }); break;
      case 'coin': spark(e.x, e.y, 3, ['#ffe14a'], 16, 0.3); break;
      case 'power': fx.push({ k: 'ring', x: e.x, y: e.y, t: 0, life: 0.5, r: 18, c: PWR_COL[e.kind] }); fx.push({ k: 'text', x: e.x, y: e.y - 10, t: 0, life: 1.1, text: I.t(`p_${e.kind}`), c: '#fff', big: 1 }); spark(e.x, e.y, 14, ['#fff', PWR_COL[e.kind]], 34); break;
      case 'bomb': fx.push({ k: 'ring', x: e.x, y: e.y, t: 0, life: 0.8, r: 130, c: '#fff' }, { k: 'ring', x: e.x, y: e.y, t: 0, life: 0.6, r: 90, c: '#ffd23a' }); break;
      case 'bossHit': if (Math.random() < 0.4) spark(e.x + (Math.random() - 0.5) * 20, e.y + 8, 2, ['#fff', '#ffe14a'], 24, 0.3); break;
      case 'bossDown': for (let i = 0; i < 6; i++) { fx.push({ k: 'puff', x: e.x + (Math.random() - 0.5) * 30, y: e.y + (Math.random() - 0.5) * 14, t: -i * 0.15, life: 0.7, r: 12 }); } spark(e.x, e.y, 50, ['#ffe14a', '#fff', '#ff9a3a', '#7ae0ff', '#ff7ad0'], 60, 1.2); break;
      case 'down': fx.push({ k: 'puff', x: e.x, y: e.y, t: 0, life: 0.6, r: 9 }); spark(e.x, e.y, 16, ['#ffe14a', '#fff'], 36); fx.push({ k: 'chute', x: e.x, y: e.y, t: 0, life: 3, ph: 1 }); break;
      default: break;
    }
  }
  _fxStep(dt) { for (const q of this.fx) { q.t += dt; if (q.k === 'spark') { q.x += q.vx * dt; q.y += q.vy * dt; q.vy += 40 * dt; } } this.fx = this.fx.filter((q) => q.t < q.life); this.shake = Math.max(0, this.shake - dt); }

  // ---------- draw ----------
  _draw() {
    const g = this.g; const s = this.s; const d = this.dpr; const f = this.f;
    g.setTransform(d * s, 0, 0, d * s, d * this.ox, 0);
    const x0 = -this.ox / s; const x1 = W + this.ox / s;
    const theme = this.mode === 'menu' || this.mode === 'hangar' ? (this.demo ? this.demo.stage - 1 : 0) : (f ? f.stage - 1 : 0);
    drawBackground(g, this.sc, theme, this.scroll, x0, x1, this.ch / s);
    const sh = this.shake > 0 ? this.shake * 2.5 : 0;
    if (sh) g.translate((Math.random() - 0.5) * sh, (Math.random() - 0.5) * sh);
    const skin = SKIN_COLORS[this.save.skin] || SKIN_COLORS.sunny;
    if (this.preview) { drawPlane(g, { x: 50, y: this.H * 0.2, s: 3.2, ...skin, t: this.clock, tilt: Math.sin(this.clock * 1.4) * 0.12, girl: this.girl }); this._fxDraw(g); return; }
    if (!f) return;
    const t = this.clock; const isDemo = f === this.demo && this.mode !== 'play';
    // capsules, coins
    for (const c of f.caps) { g.fillStyle = PWR_COL[c.kind]; g.globalAlpha = 0.3; g.beginPath(); g.arc(c.x, c.y, 8 + Math.sin(t * 6) * 0.8, 0, 6.3); g.fill(); g.globalAlpha = 1; g.fillStyle = PWR_COL[c.kind]; g.strokeStyle = '#fff'; g.lineWidth = 0.8; g.beginPath(); g.arc(c.x, c.y, 5.2, 0, 6.3); g.fill(); g.stroke(); g.fillStyle = '#fff'; g.font = `900 ${c.kind === 'x2' ? 4.4 : 5}px Tajawal, system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(PWR[c.kind], c.x, c.y + 0.3); }
    for (const c of f.coins) { const w = Math.abs(Math.cos(t * 6 + c.x)); g.fillStyle = '#ffcf2a'; g.strokeStyle = '#a86a00'; g.lineWidth = 0.5; g.beginPath(); g.ellipse(c.x, c.y, 2.8 * Math.max(0.25, w), 2.8, 0, 0, 6.3); g.fill(); g.stroke(); g.fillStyle = '#fff2a0'; g.beginPath(); g.ellipse(c.x, c.y, 1.4 * Math.max(0.25, w), 1.4, 0, 0, 6.3); g.fill(); }
    // curtain safe-gap preview and aim lines
    const b = f.boss;
    if (b && b.hp > 0 && b.charge > 0 && b.pending === 'curtain') { for (let x = 4; x <= 96; x += 8) { const safe = Math.abs(x - b.gap) <= 15; g.fillStyle = safe ? 'rgba(80,255,120,.22)' : 'rgba(255,60,60,.16)'; g.fillRect(x - 4, b.y, 8, f.H); } }
    const aim = (o, x, y) => { const lk = o.lock; const tx = lk ? lk.x : f.p.x; const ty = lk ? lk.y : f.p.y; g.strokeStyle = lk ? 'rgba(255,60,60,.8)' : 'rgba(255,255,255,.4)'; g.lineWidth = lk ? 0.9 : 0.5; g.setLineDash([2, 2.4]); g.beginPath(); g.moveTo(x, y); g.lineTo(x + (tx - x) * 1.4, y + (ty - y) * 1.4); g.stroke(); g.setLineDash([]); };
    // enemies
    for (const e of f.enemies) {
      if (e.hp <= 0) continue;
      if (e.charge > 0) { aim(e, e.x, e.y + e.r); const k = 1 - e.charge / 0.67; g.fillStyle = `rgba(255,70,70,${0.25 + k * 0.5})`; g.beginPath(); g.arc(e.x, e.y + e.r, 3 + k * 5, 0, 6.3); g.fill(); g.fillStyle = '#ffdc3a'; g.strokeStyle = '#a01818'; g.lineWidth = 0.5; g.beginPath(); g.moveTo(e.x, e.y - e.r - 9); g.lineTo(e.x + 3.4, e.y - e.r - 3); g.lineTo(e.x - 3.4, e.y - e.r - 3); g.closePath(); g.fill(); g.stroke(); g.fillStyle = '#a01818'; g.font = '900 3px Tajawal, system-ui'; g.fillText('!', e.x, e.y - e.r - 5); }
      if (e.type === 'drone') drawUfo(g, e.x, e.y, 1, t + e.id, e.charge > 0, e.flash);
      else {
        const o = e.type === 'black' ? { body: ['#6a6a78', '#2a2a34'], wing: ['#5a5a68', '#22222c'], acc: '#ffcf3a', stripe: '#ffcf3a' } : { body: ['#ff7a6a', '#c82a2a'], wing: ['#ff6a5a', '#a81a1a'], acc: '#fff', stripe: '#fff' };
        drawPlane(g, { x: e.x, y: e.y, s: e.type === 'bomber' ? 1.7 : 0.85, rot: Math.PI, tilt: clamp(-e.vx / 120, -0.3, 0.3), enemy: true, t: t + e.id, twin: e.type === 'bomber', bigWing: e.type === 'bomber', ...(e.type === 'bomber' ? { body: ['#9ab07a', '#5a7a4a'], wing: ['#8aa070', '#4a6a3a'], acc: '#ffcf3a', stripe: '#e84a3a' } : o) });
        if (e.flash > 0) { g.fillStyle = 'rgba(255,255,255,.6)'; g.beginPath(); g.ellipse(e.x, e.y, e.r * 0.9, e.r, 0, 0, 6.3); g.fill(); }
      }
    }
    if (b && b.hp > 0) {
      if (b.charge > 0) { aim(b, b.x, b.y + b.r); const k = 1 - b.charge / 0.67; g.fillStyle = `rgba(255,70,70,${0.25 + Math.min(1, k) * 0.5})`; g.beginPath(); g.arc(b.x, b.y + b.r * 0.9, 4 + Math.min(1, k) * 7, 0, 6.3); g.fill(); g.fillStyle = '#ffdc3a'; g.strokeStyle = '#a01818'; g.lineWidth = 0.6; g.beginPath(); g.moveTo(b.x, b.y - b.r - 14); g.lineTo(b.x + 5, b.y - b.r - 5); g.lineTo(b.x - 5, b.y - b.r - 5); g.closePath(); g.fill(); g.stroke(); g.fillStyle = '#a01818'; g.font = '900 4.4px Tajawal, system-ui'; g.fillText('!', b.x, b.y - b.r - 8); }
      drawBoss(g, b, t, BOSS_TINT[(f.stage - 1) % 8]);
    }
    // bullets
    for (const q of f.pbul) { g.fillStyle = 'rgba(255,240,140,.45)'; g.fillRect(q.x - 1.4, q.y - 3.2, 2.8, 6.4); g.fillStyle = '#fff6c0'; g.beginPath(); g.roundRect(q.x - 0.8, q.y - 2.6, 1.6, 5.2, 0.8); g.fill(); }
    for (const q of f.ebul) { const pu = 1 + Math.sin(t * 14 + q.x) * 0.1; g.fillStyle = 'rgba(255,70,120,.35)'; g.beginPath(); g.arc(q.x, q.y, q.r * 1.7 * pu, 0, 6.3); g.fill(); g.fillStyle = '#ff4a7a'; g.strokeStyle = '#fff'; g.lineWidth = 0.45; g.beginPath(); g.arc(q.x, q.y, q.r * pu, 0, 6.3); g.fill(); g.stroke(); g.fillStyle = '#fff'; g.beginPath(); g.arc(q.x - 0.4, q.y - 0.4, q.r * 0.35, 0, 6.3); g.fill(); }
    // player
    const p = f.p;
    if (!isDemo || true) {
      if (f.state !== 'losing' && f.state !== 'lose') {
        const blink = p.inv > 0 && p.inv < 50 && Math.floor(t * 14) % 2 === 0;
        drawPlane(g, { x: p.x, y: p.y, s: 1, ...skin, t, tilt: clamp(p.vx / 140, -1, 1) * 0.28, alpha: blink ? 0.4 : 1, girl: this.girl });
        if (p.shield > 0) { g.strokeStyle = `rgba(120,210,255,${0.6 + Math.sin(t * 8) * 0.2})`; g.fillStyle = 'rgba(120,210,255,.18)'; g.lineWidth = 1; g.beginPath(); g.arc(p.x, p.y, 13, 0, 6.3); g.fill(); g.stroke(); }
        if (p.x2 > 0) { g.fillStyle = '#d88aff'; g.font = '900 4px Tajawal, system-ui'; g.textAlign = 'center'; g.fillText('X2', p.x, p.y + 14); }
      }
    }
    this._fxDraw(g);
  }

  _fxDraw(g) {
    g.textAlign = 'center'; g.textBaseline = 'middle';
    for (const q of this.fx) {
      if (q.t < 0) continue; const k = q.t / q.life;
      if (q.k === 'spark') { g.globalAlpha = 1 - k; g.fillStyle = q.c; star4(g, q.x, q.y, q.r * (1.4 - k * 0.6)); }
      else if (q.k === 'puff') { g.globalAlpha = (1 - k) * 0.8; g.fillStyle = '#fff'; g.beginPath(); g.arc(q.x, q.y, q.r * (0.5 + k), 0, 6.3); g.fill(); g.globalAlpha = (1 - k) * 0.6; g.fillStyle = '#ffd23a'; g.beginPath(); g.arc(q.x, q.y, q.r * (0.3 + k * 0.6), 0, 6.3); g.fill(); }
      else if (q.k === 'ring') { g.globalAlpha = 1 - k; g.strokeStyle = q.c; g.lineWidth = 2 * (1 - k) + 0.5; g.beginPath(); g.arc(q.x, q.y, q.r * (0.15 + k * 0.85), 0, 6.3); g.stroke(); }
      else if (q.k === 'text') { g.globalAlpha = 1 - k * k; g.font = `900 ${q.big ? 5.2 : 3.6}px Tajawal, system-ui`; g.lineWidth = 0.9; g.strokeStyle = 'rgba(30,20,60,.9)'; g.fillStyle = q.c; const y = q.y - k * 10; g.strokeText(q.text, q.x, y); g.fillText(q.text, q.x, y); }
      else if (q.k === 'chute') { const y = q.y + q.t * 14; const x = q.x + Math.sin(q.t * 2 + q.ph) * 5; g.globalAlpha = k > 0.8 ? (1 - k) * 5 : 1; g.fillStyle = '#ff7aa8'; g.beginPath(); g.arc(x, y - 6, 4.5, Math.PI, 0); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 0.3; g.beginPath(); g.moveTo(x - 4.5, y - 6); g.lineTo(x, y); g.moveTo(x + 4.5, y - 6); g.lineTo(x, y); g.stroke(); g.fillStyle = '#ffd2a8'; g.beginPath(); g.arc(x, y + 0.8, 1.2, 0, 6.3); g.fill(); g.fillStyle = '#4a8ae8'; g.fillRect(x - 0.9, y + 2, 1.8, 2); }
    }
    g.globalAlpha = 1;
  }

  pause() { this.sound.suspend(); if (this.mode === 'play') this.showPause(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey); this.root.remove(); }
}

void statsFor; void THEMES;
const api = { start(el, config, post) { const g = new App(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.SkyAce = api;
export default api;
