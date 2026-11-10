// «مغامرة الأدغال» — Jungle Adventure. Entry: window.JungleAdventure.start(container, config, post).
//   config: { lang: 'ar'|'en', age: 1..6, save, base }
//   post(msg): { type: 'save', save } after every change, { type: 'exit' } when the child leaves.
// 2D canvas, art and sound made in code. No network, no links, no ads, no tracking.
import { LEVELS, ROWS } from './levels.js';
import { Sim, P } from './sim.js';
import { THEMES, drawSolid, drawLedge, drawSpikes, drawHero, drawBeetle, drawBat, drawCoin, drawRelic, drawPower, drawFlag, drawGoal, drawShield } from './art.js';
import { Backdrop } from './backdrop.js';
import { Sound } from './audio.js';
import { normalizeSave, applyLevel } from './save.js';
import { HEROES, CATS, SHOP, ITEM, owns, buy, wear, lookOf } from './shop.js';
import { setLang, getLang, setHero, t, num, name } from './i18n.js';
import { CSS, h, LEVEL_ICON } from './ui.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    this.age = Number(config.age) || 5;
    this.easy = config.easy ?? this.age <= 3;
    this.save = normalizeSave(config.save);
    // the first time, play as the child's own gender if the parent gave one
    if (!config.save && HEROES[config.gender]) this.save.hero = config.gender;
    setHero(this.save.hero);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;

    if (!document.getElementById('ja-style')) document.head.append(h('style', { id: 'ja-style', text: CSS }));
    this.root = h('div', { class: 'ja-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.canvas = h('canvas');
    this.root.append(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.layer = h('div', { class: 'ja-layer' });
    this.root.append(this.layer);
    this.loading = h('div', { class: 'ja-loading' }, t('loading'));
    this.root.append(this.loading);

    this.maxDpr = Math.min(window.devicePixelRatio || 1, lowEnd() ? 1.5 : 2);
    this.dpr = this.maxDpr;
    this.input = { down: false, pressed: false, pointer: null };
    this.mode = 'menu';
    this.paused = false;
    this.particles = [];
    this.sprites = new Map();
    this._bind();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this.last = performance.now();
    this._fonts().then(() => {
      this.loading.remove();
      this.showMenu();
      const loop = (now) => {
        this.raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - this.last) / 1000);
        this.last = now;
        this._frame(dt);
      };
      this.raf = requestAnimationFrame(loop);
    });
  }

  async _fonts() {
    try {
      const faces = [
        new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }),
        new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-Bold.ttf)`, { weight: '700' }),
      ];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 2500))]);
    } catch (_) { /* the system font is fine */ }
  }

  // ---- size -------------------------------------------------------------------------------------------------------

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.root.style.setProperty('--u', `${Math.min(this.cw, this.ch) / 100}px`);
    this.root.classList.toggle('ja-land', this.cw > this.ch * 1.15);
    this.canvas.width = Math.round(this.cw * this.dpr);
    this.canvas.height = Math.round(this.ch * this.dpr);
    // one tile: about 10.5 columns across a phone held upright, 9.5 rows on a wide screen
    this.tile = Math.min(this.cw / 10.5, this.ch / 9.5) * this.dpr;
    this.sprites.clear();
    if (this.backdrop) this.backdrop.build(this.canvas.width, this.canvas.height);
  }

  _setTheme(theme) {
    if (this.theme === theme && this.backdrop) return;
    this.theme = theme;
    this.backdrop = new Backdrop(theme);
    this.backdrop.build(this.canvas.width, this.canvas.height);
    this.sprites.clear();
  }

  // ---- input ------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;

    // Phones only allow sound to start from a finished tap (finger lifted) or a key press — not from the moment a
    // finger touches the screen. Try on every one of these until the sound is running.
    for (const ev of ['pointerup', 'touchend', 'click', 'keydown']) {
      root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    }
    root.addEventListener('pointerdown', (e) => {
      this.sound.unlock();
      if (e.target.closest('button')) return;
      if (this.mode !== 'play' || this.paused) return;
      this.input.pointer = e.pointerId;
      this.input.down = true;
      this.input.pressed = true;
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    }, true);
    const up = (e) => {
      if (e.pointerId === this.input.pointer) {
        this.input.pointer = null;
        this.input.down = false;
      }
    };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      this.sound.unlock();
      const k = e.key;
      const jumpKey = k === ' ' || k === 'ArrowUp' || k === 'w' || k === 'W';
      if (e.type === 'keydown') {
        if (this.mode === 'play' && (k === 'Escape' || k === 'p')) this.pause();
        if (jumpKey && this.mode === 'play' && !e.repeat) {
          this.input.down = true;
          this.input.pressed = true;
        }
      } else if (jumpKey) this.input.down = false;
      if (this.mode === 'play' && jumpKey) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => {
      if (document.hidden) {
        if (this.mode === 'play') this.pause();
        this.sound.suspend();
      } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
  }

  // ---- screens ----------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }

  _muteBtn(style) {
    const b = h('button', { class: 'ja-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      this.sound.unlock();
      this.sound.setMuted(!this.sound.muted);
      this.save.muted = this.sound.muted;
      this._saveNow();
      b.textContent = this.sound.muted ? '🔇' : '🔊';
    });
    return b;
  }

  _gems(n, total = 3) {
    return h('span', { class: 'gems', style: 'display:inline-flex;gap:calc(var(--u)*1)' }, Array.from({ length: total }, (_, i) => h('span', { class: `ja-gem${i < n ? ' on' : ''}` })));
  }

  showMenu() {
    this.mode = 'menu';
    this.paused = false;
    this.sim = null;
    this._setTheme('jungle');
    this.sound.setMode('menu');
    this.menuX = this.menuX ?? 0;
    this._clear();
    const back = h('button', { class: 'ja-round', style: 'top:max(calc(var(--u)*2.5),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)', 'aria-label': t('exit'), onclick: () => this.post({ type: 'exit' }) }, getLang() === 'en' ? '←' : '→');
    const cards = LEVELS.map((lv, i) => {
      const locked = i + 1 > this.save.unlocked;
      const best = this.save.best[lv.id];
      return h('button', {
        class: `ja-card${locked ? ' locked' : ''}`,
        'aria-label': name(lv),
        onclick: () => (locked ? this.toast(t('locked'), '', 1.6) : this.startLevel(i)),
      },
      h('div', { class: 'ic' }, LEVEL_ICON[lv.id]),
      h('div', { class: 'nm ja-shadow' }, name(lv)),
      this._gems(best?.relics ?? 0),
      locked ? h('div', { class: 'lock' }, '🔒') : null);
    });
    const total = h('div', { class: 'ja-shadow', style: 'display:flex;align-items:center;gap:calc(var(--u)*1.5);font-size:calc(var(--u)*4.6);font-weight:900' }, h('span', { class: 'ja-coin' }), num(this.save.coins));
    this.layer.append(
      h('div', { class: 'ja-center' },
        h('div', { class: 'ja-logo' }, t('title')),
        total,
        h('div', { class: 'ja-sub ja-shadow', style: 'opacity:1' }, t('pick')),
        h('div', { class: 'ja-cards' }, cards),
        h('div', { class: 'ja-sub ja-shadow', style: 'opacity:1' }, t('chooseHero')),
        h('div', { class: 'ja-heroes' }, Object.keys(HEROES).map((hero) => h('button', {
          class: `ja-hero${hero === this.save.hero ? ' sel' : ''}`,
          'aria-label': name(HEROES[hero]),
          onclick: () => { this.save.hero = hero; setHero(hero); this._saveNow(); this.showMenu(); },
        }, this._heroCanvas(hero, 13, 'ja-hero-pic'), h('span', {}, name(HEROES[hero])))),
        h('button', { class: 'ja-hero ja-shopbtn', 'aria-label': t('shop'), onclick: () => this.showShop() }, h('span', { class: 'ic' }, '🛍️'), h('span', {}, t('shop'))))),
      back,
      this._muteBtn('bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)'),
      this._toastEl(),
    );
  }

  showShop(cat = 'hat') {
    this.mode = 'shop';
    this.sim = null;
    this.sound.setMode('menu');
    this._clear();
    const hero = this.save.hero;
    const look = lookOf(this.save, hero);
    const coins = h('div', { class: 'ja-shadow', style: 'display:flex;align-items:center;gap:calc(var(--u)*1.5);font-size:calc(var(--u)*5);font-weight:900' }, h('span', { class: 'ja-coin' }), num(this.save.coins));
    const tabs = h('div', { class: 'ja-tabs' }, CATS.map((c) => h('button', { class: `ja-tab${c.id === cat ? ' sel' : ''}`, onclick: () => this.showShop(c.id) }, c.icon, ' ', name(c))));
    const items = SHOP.filter((i) => i.cat === cat).map((it) => {
      const have = owns(this.save, it.id);
      const on = look[cat] === it.id;
      const can = have || this.save.coins >= it.price;
      const swatch = h('div', { class: 'sw' });
      if (it.color) swatch.style.background = it.color;
      else swatch.textContent = it.id === 'hat_none' ? '🚫' : it.id === 'hat_flower' ? '🌸' : '';
      if (it.star) swatch.textContent = '⭐';
      if (it.bolt) swatch.textContent = '⚡';
      if (it.id === 'hat_crown') swatch.textContent = '👑';
      if (it.id === 'hat_helmet') swatch.textContent = '🪖';
      if (it.id === 'hat_cap') swatch.textContent = '🧢';
      return h('button', {
        class: `ja-item${on ? ' on' : ''}${can ? '' : ' poor'}`,
        'aria-label': name(it),
        onclick: () => {
          if (!have) {
            const r = buy(this.save, it.id);
            if (r === 'poor') { this.sound.play('bonk'); this.toast('🪙', t('needMore'), 1.8); return; }
            this.sound.play('relic');
            this.toast(t('bought'), '', 1);
          } else this.sound.play('tap');
          wear(this.save, hero, it.id);
          this._saveNow();
          this.showShop(cat);
        },
      }, swatch, h('div', { class: 'nm' }, name(it)),
      h('div', { class: 'pr' }, on ? t('wearing') : have ? (it.price ? t('wear') : t('free')) : h('span', { style: 'display:inline-flex;align-items:center;gap:calc(var(--u)*.8)' }, h('span', { class: 'ja-coin', style: 'width:calc(var(--u)*3.4);height:calc(var(--u)*3.4)' }), num(it.price))));
    });
    this.layer.append(
      h('button', { class: 'ja-round', style: 'top:max(calc(var(--u)*2.5),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)', 'aria-label': t('menu'), onclick: () => this.showMenu() }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'ja-shop' },
        h('div', { class: 'ja-shop-top' },
          h('div', { class: 'ja-logo', style: 'font-size:calc(var(--u)*8)' }, '🛍️ ', t('shop')),
          coins),
        h('div', { class: 'ja-shop-body' },
          h('div', { class: 'ja-glass ja-preview' },
            this._heroCanvas(hero, 30, 'ja-hero-big'),
            h('div', { class: 'ja-heroes' }, Object.keys(HEROES).map((k) => h('button', {
              class: `ja-tab${k === hero ? ' sel' : ''}`,
              onclick: () => { this.save.hero = k; setHero(k); this._saveNow(); this.showShop(cat); },
            }, name(HEROES[k]))))),
          h('div', { class: 'ja-glass ja-shelf' }, tabs, h('div', { class: 'ja-items' }, items)))),
      this._toastEl(),
    );
  }

  startLevel(i) {
    setHero(this.save.hero); // the words follow whoever is playing
    this.levelIndex = i;
    const lv = LEVELS[i];
    this.sim = new Sim(lv, { easy: this.easy });
    this._setTheme(lv.theme);
    this.mode = 'play';
    this.paused = false;
    this.particles = [];
    this.hintsShown = new Set();
    this.camX = null;
    this.stepT = 0;
    this.goalGlow = 0;
    this.sound.setMode('level', i);
    this._buildHud();
  }

  _buildHud() {
    this._clear();
    const sim = this.sim;
    this.hud = {
      hearts: h('span', { class: 'grp' }),
      coins: h('span', {}, num(0)),
      gems: h('span', { class: 'grp' }),
      clock: h('span', { class: 'ja-clock' }, ''),
      fill: h('i', { style: 'width:0%' }),
      dot: h('b', { style: 'inset-inline-start:0%' }),
    };
    this.layer.append(
      h('div', { class: 'ja-hud ja-shadow' },
        h('div', { class: 'grp' }, this.hud.hearts, h('span', { class: 'grp' }, h('span', { class: 'ja-coin' }), this.hud.coins)),
        h('div', { class: 'grp' }, this.hud.gems, h('span', {}, '⏱ ', this.hud.clock))),
      h('div', { class: 'ja-prog ja-shadow' }, `${t('level')} ${num(this.levelIndex + 1)}`, h('div', { class: 'ja-bar' }, this.hud.fill, this.hud.dot, h('span', { class: 'end' }, this.levelIndex === 2 ? '☀️' : '🗿'))),
      h('button', { class: 'ja-round', style: 'bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-start:calc(var(--u)*3)', 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'),
      this._muteBtn('bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)'),
      (this.hintEl = h('div', { class: 'ja-hint ja-shadow' })),
      this._toastEl(),
    );
    this._hc = {};
    void sim;
  }

  _toastEl() {
    this.toastEl = h('div', { class: 'ja-toast ja-shadow' });
    return this.toastEl;
  }

  toast(text, sub = '', secs = 1.1) {
    if (!this.toastEl) return;
    this.toastEl.replaceChildren(text, sub ? h('small', {}, sub) : '');
    this.toastEl.classList.remove('show');
    void this.toastEl.offsetWidth;
    this.toastEl.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }

  hint(text) {
    if (!this.hintEl) return;
    this.hintEl.textContent = text;
    this.hintEl.classList.add('show');
    clearTimeout(this._ht);
    this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), 2600);
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.input.down = false;
    this.input.pointer = null;
    this.sound.suspend();
    const dim = h('div', { class: 'ja-dim' }, h('div', { class: 'ja-glass' },
      h('div', { class: 'ja-title' }, t('paused')),
      h('button', { class: 'ja-btn', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('button', { class: 'ja-btn ghost', onclick: () => { this.sound.resume(); this.startLevel(this.levelIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'ja-btn ghost', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _drawHeroAt(g, x, y, s, hero = this.save.hero) {
    drawHero(g, x, y, s, hero, lookOf(this.save, hero));
  }

  /** A small canvas with a hero standing (or running, when `anim`) — for the menu, shop and end card. */
  _heroCanvas(hero, sizeU, cls = 'ja-portrait') {
    const c = h('canvas', { class: cls, style: `width:calc(var(--u)*${sizeU});height:calc(var(--u)*${sizeU})` });
    const px = Math.round((Math.min(this.cw, this.ch) * sizeU * this.dpr) / 100);
    c.width = c.height = px;
    const g = c.getContext('2d');
    g.scale(px / 2.2, px / 2.2);
    this._drawHeroAt(g, 1.1, 1.95, { phase: 0.4, air: false, vy: 0, wall: 0, dir: 1, blink: false }, hero);
    return c;
  }

  _portrait() {
    const c = h('canvas', { class: 'ja-portrait' });
    const px = Math.round(Math.min(this.cw, this.ch) * 0.22 * this.dpr);
    c.width = c.height = px;
    const g = c.getContext('2d');
    g.scale(px / 2.2, px / 2.2);
    this._drawHeroAt(g, 1.1, 1.95, { phase: 0.4, air: false, vy: 0, wall: 0, dir: 1, blink: false });
    return c;
  }

  showEnd(result) {
    this.mode = 'end';
    const i = this.levelIndex;
    const res = applyLevel(this.save, i, result);
    this._saveNow();
    const won = result.won;
    const last = i === LEVELS.length - 1;
    const allRelics = result.relics === result.relicTotal;
    this.sound.setMode('menu');
    const reward = h('span', {}, num(0));
    const hasNext = won && !last;
    const panel = h('div', { class: 'ja-glass' },
      h('div', { class: `ja-title${won ? ' ja-win' : ''}` }, won ? t('win') : t('almost')),
      won && last ? h('div', { class: 'ja-reward' }, t('winLast')) : null,
      this._portrait(),
      h('div', { class: 'ja-sub' }, won ? (allRelics ? t('relicsSub') : t('someRelics')) : t('almostSub')),
      h('div', { class: 'ja-stats' },
        h('div', { class: 'ja-stat' }, h('b', {}, num(result.coins)), h('span', {}, t('coins'))),
        h('div', { class: 'ja-stat' }, h('b', {}, `${num(result.relics)}/${num(result.relicTotal)}`), h('span', {}, t('relics'))),
        h('div', { class: 'ja-stat' }, h('b', {}, `${num(i + 1)}/${num(LEVELS.length)}`), h('span', {}, t('level')))),
      won && result.bonus ? h('div', { class: 'ja-sub' }, `${t('bonus')}: +${num(result.bonus)}`) : null,
      h('div', { class: 'ja-reward' }, `${t('reward')}: `, reward),
      res.unlockedNext ? h('div', { class: 'ja-reward' }, '🎉 ', t('newLevel')) : null,
      hasNext ? h('button', { class: 'ja-btn', onclick: () => this.startLevel(i + 1) }, t('next'), ' ▶') : h('button', { class: 'ja-btn', onclick: () => this.startLevel(i) }, '↻ ', t('retry')),
      hasNext ? h('button', { class: 'ja-btn ghost', onclick: () => this.startLevel(i) }, '↻ ', t('retry')) : null,
      h('button', { class: 'ja-btn ghost', onclick: () => this.showMenu() }, t('menu')));
    this.layer.append(h('div', { class: 'ja-dim' }, panel));
    let shown = 0;
    const tick = () => {
      if (this.mode !== 'end') return;
      shown = Math.min(res.total, shown + Math.max(1, Math.round(res.total / 30)));
      reward.textContent = num(shown);
      if (shown % 3 === 0) this.sound.play('count', (shown / 3) % 12);
      if (shown < res.total) setTimeout(tick, 35);
    };
    setTimeout(tick, 400);
  }

  // ---- per frame --------------------------------------------------------------------------------------------------

  _frame(dt) {
    if (this.mode === 'play' && !this.paused) this._update(dt);
    if (this.mode === 'menu') this.menuX = (this.menuX ?? 0) + dt * 2.2;
    this._render(dt);
  }

  _update(dt) {
    const sim = this.sim;
    const pressed = this.input.pressed;
    this.input.pressed = false;
    sim.step(dt, { down: this.input.down, pressed });
    for (const e of sim.events) this._event(e);
    // footsteps
    const p = sim.p;
    if (p.onGround) {
      this.stepT += dt;
      if (this.stepT > (p.boots > 0 ? 0.13 : 0.17)) {
        this.stepT = 0;
        this.sound.play('step');
        if (p.boots > 0) this._puff(p.x - p.dir * 0.3, p.y, '#ffd8a8', 2);
      }
    }
    // hints when she reaches them
    for (const hn of sim.level.hints) {
      if (!this.hintsShown.has(hn.x) && p.x >= hn.x) {
        this.hintsShown.add(hn.x);
        this.hint(t(`h_${hn.key}`));
      }
    }
    if (sim.phase === 'won') this.goalGlow = Math.min(1, this.goalGlow + dt * 1.5);
    if (this.endT !== undefined) {
      this.endT -= dt;
      if (this.endT <= 0) {
        const r = sim.result;
        this.endT = undefined;
        this.showEnd(r);
      }
    }
    this._updateHud();
    for (const q of this.particles) {
      q.life -= dt;
      q.x += q.vx * dt;
      q.y += q.vy * dt;
      q.vy += (q.g ?? 6) * dt;
    }
    this.particles = this.particles.filter((q) => q.life > 0);
  }

  _event(e) {
    const S = this.sound;
    const p = this.sim.p;
    switch (e.type) {
      case 'jump': S.play('jump'); this._puff(p.x, p.y, '#e9dcc0', 4); break;
      case 'kick': S.play('kick'); this._puff(p.x + p.dir * -0.4, p.y - 0.7, '#e9dcc0', 4); break;
      case 'land': S.play('land', e.hard); if (e.hard) this._puff(p.x, p.y, '#e9dcc0', 6); break;
      case 'coin': S.play('coin'); this._sparkle(e.x, e.y, '#ffe066', 4); break;
      case 'relic':
        S.play(e.all ? 'allRelics' : 'relic');
        this.toast(e.all ? t('allRelics') : t('relic'), e.all ? `+${num(10)}` : '', 1.4);
        this._sparkle(e.x, e.y, '#7dffb0', 14);
        if (e.all) this.sim.coins += 10;
        break;
      case 'stomp':
        S.play('stomp');
        setTimeout(() => S.play('coin'), 90);
        this._puff(e.x, e.y, '#ff8fb8', 8);
        this.particles.push({ x: e.x, y: e.y - 0.6, vx: 0, vy: -7, life: 0.7, max: 0.7, coin: true, g: 14 });
        break;
      case 'hurt': S.play('hurt'); this.toast(t('ouch'), '', 0.7); break;
      case 'fall': S.play('fall'); break;
      case 'respawn': S.play('respawn'); this._sparkle(p.x, p.y - 0.7, '#ffffff', 10); break;
      case 'shield': S.play('shield'); this.toast(t('shield')); break;
      case 'shieldPop': S.play('shieldPop'); break;
      case 'magnet': S.play('magnet'); this.toast(t('magnet')); break;
      case 'boots': S.play('boots'); this.toast(t('boots')); break;
      case 'hourglass': S.play('hourglass'); this.toast(t('hourglass')); break;
      case 'checkpoint': S.play('checkpoint'); this.toast(t('checkpoint'), '', 1); this._sparkle(e.x, e.y - 1.8, '#ff6b6b', 8); break;
      case 'tick': S.play('tick'); break;
      case 'bonk': S.play('bonk'); break;
      case 'win':
        S.play('win');
        if (e.bonus) this.toast(t('timeBonus'), `+${num(e.bonus)}`, 1.6);
        this._sparkle(this.sim.goal.x, this.sim.goal.y - 2, '#ffd166', 30);
        this.endT = 1.8;
        break;
      case 'lose': S.play('lose'); this.endT = 1.2; break;
      default:
    }
  }

  _puff(x, y, color, n) {
    for (let i = 0; i < n; i++) this.particles.push({ x, y, vx: (Math.random() - 0.5) * 3, vy: -Math.random() * 2, life: 0.4 + Math.random() * 0.2, max: 0.6, color, r: 0.12 + Math.random() * 0.1, g: 2 });
  }

  _sparkle(x, y, color, n) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 2 + Math.random() * 4;
      this.particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1, life: 0.5 + Math.random() * 0.3, max: 0.8, color, r: 0.07 + Math.random() * 0.07, g: 4, star: true });
    }
  }

  _updateHud() {
    const sim = this.sim;
    const hc = this._hc;
    const H = this.hud;
    const hearts = this.easy ? 3 : sim.hearts;
    if (hc.hearts !== hearts) {
      hc.hearts = hearts;
      H.hearts.replaceChildren(...[0, 1, 2].map((i) => h('span', { class: `ja-heart${i < hearts ? '' : ' off'}` }, '❤️')));
    }
    if (hc.coins !== sim.coins) { hc.coins = sim.coins; H.coins.textContent = num(sim.coins); }
    if (hc.relics !== sim.relics.length) {
      hc.relics = sim.relics.length;
      H.gems.replaceChildren(...Array.from({ length: sim.relicTotal }, (_, i) => h('span', { class: `ja-gem${i < sim.relics.length ? ' on' : ''}` })));
    }
    const left = Math.ceil(sim.timeLeft);
    if (hc.left !== left) {
      hc.left = left;
      H.clock.textContent = num(left);
      H.clock.classList.toggle('low', left <= 10);
    }
    const pr = Math.round(sim.progress * 1000) / 10;
    if (hc.pr !== pr) {
      hc.pr = pr;
      H.fill.style.width = `${pr}%`;
      H.dot.style.insetInlineStart = `${pr}%`;
    }
  }

  // ---- drawing ----------------------------------------------------------------------------------------------------

  /** A pre-drawn tile picture (by theme, neighbours and a variation), so the level costs one image per tile. */
  _sprite(key, draw) {
    let s = this.sprites.get(key);
    if (!s) {
      const T = this.tile;
      s = document.createElement('canvas');
      s.width = Math.ceil(T * 1.0) + 2;
      s.height = Math.ceil(T * 1.4) + 2;
      const g = s.getContext('2d');
      g.translate(1, 1);
      g.scale(T, T);
      draw(g);
      this.sprites.set(key, s);
    }
    return s;
  }

  _render(dt) {
    const ctx = this.ctx;
    const T = this.tile;
    const W = this.canvas.width;
    const Hh = this.canvas.height;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const sim = this.sim;
    const viewCols = W / T;
    const viewRows = Hh / T;
    // camera
    let camX;
    let camY;
    if (sim) {
      const p = sim.p;
      const wantX = clamp(p.x - viewCols * 0.3, 0, Math.max(0, sim.W - viewCols));
      let wantY = ROWS + 1 - viewRows;
      if (p.y - 3 < wantY) wantY = p.y - 3;
      if (this.camX === null || this.camX === undefined) { this.camX = wantX; this.camY = wantY; }
      this.camX += (wantX - this.camX) * Math.min(1, dt * 10);
      this.camY += (wantY - this.camY) * Math.min(1, dt * 4);
      camX = this.camX;
      camY = this.camY;
    } else {
      camX = this.menuX ?? 0;
      camY = ROWS + 1 - viewRows;
    }
    if (!this.backdrop) return;
    this.backdrop.draw(ctx, camX * T);
    if (!sim) {
      // the menu: a slowly scrolling glimpse of the first level
      this._drawWorld(ctx, LEVELS[0], camX % 150, camY, T, viewCols, null);
      return;
    }
    this._drawWorld(ctx, sim.level, camX, camY, T, viewCols, sim);
  }

  _drawWorld(ctx, level, camX, camY, T, viewCols, sim) {
    const th = THEMES[level.theme];
    const rows = level.rows;
    const solid = (x, y) => (y >= 0 && y < ROWS && x >= 0 && x < level.width ? rows[y][x] === '#' : x < 0);
    const x0 = Math.max(0, Math.floor(camX) - 1);
    const x1 = Math.min(level.width - 1, Math.ceil(camX + viewCols) + 1);
    const ox = -camX * T;
    const oy = -camY * T;
    for (let y = 0; y < ROWS; y++) {
      const row = rows[y];
      for (let x = x0; x <= x1; x++) {
        const c = row[x];
        if (c === '#') {
          const mask = (solid(x, y - 1) ? 1 : 0) | (solid(x, y + 1) ? 2 : 0) | (solid(x - 1, y) ? 4 : 0) | (solid(x + 1, y) ? 8 : 0);
          const v = (x * 7 + y * 13) % 4;
          const key = `${level.theme}#${mask}.${v}.${y % 2}`;
          const img = this._sprite(key, (g) => drawSolid(g, 0, 0.3, th, (dx, dy) => {
            const rx = Math.round(dx);
            const ry = Math.round(dy - 0.3);
            if (rx === 0 && ry === -1) return !!(mask & 1);
            if (rx === 0 && ry === 1) return !!(mask & 2);
            if (rx === -1 && ry === 0) return !!(mask & 4);
            if (rx === 1 && ry === 0) return !!(mask & 8);
            return true;
          }, v + 1, v * 2 + (y % 2)));
          ctx.drawImage(img, Math.round(ox + x * T - 1), Math.round(oy + (y - 0.3) * T - 1));
        } else if (c === '=') {
          const img = this._sprite(`${level.theme}=`, (g) => drawLedge(g, 0, 0.3, th));
          ctx.drawImage(img, Math.round(ox + x * T - 1), Math.round(oy + (y - 0.3) * T - 1));
        } else if (c === '^') {
          const img = this._sprite('^', (g) => drawSpikes(g, 0, 0.3));
          ctx.drawImage(img, Math.round(ox + x * T - 1), Math.round(oy + (y - 0.3) * T - 1));
        }
      }
    }
    if (!sim) return;
    const now = performance.now() / 1000;
    ctx.save();
    ctx.setTransform(T, 0, 0, T, ox, oy);
    const inView = (x) => x > camX - 2 && x < camX + viewCols + 2;
    for (const f of sim.flags) if (inView(f.x)) drawFlag(ctx, f, now);
    if (sim.goal && inView(sim.goal.x)) drawGoal(ctx, sim.goal, now, this.goalGlow);
    for (const it of sim.items) {
      if (!it.live || !inView(it.x)) continue;
      if (it.kind === 'coin') drawCoin(ctx, it.x, it.y, now);
      else if (it.kind === 'relic') drawRelic(ctx, it.x, it.y, now);
      else drawPower(ctx, it.kind, it.x, it.y, now);
    }
    for (const b of sim.beetles) if ((b.alive || b.squash < 0.7) && inView(b.x)) drawBeetle(ctx, b, now);
    for (const bat of sim.bats) if (inView(bat.x)) drawBat(ctx, bat, now);
    const p = sim.p;
    const blinkOut = p.invuln > 0 && Math.floor(now * 12) % 2 === 0;
    if (!blinkOut) {
      if (p.boots > 0) {
        ctx.globalAlpha = 0.25;
        this._drawHeroAt(ctx, p.x - p.dir * 0.35, p.y, { phase: p.run - 0.3, air: !p.onGround, vy: p.vy, wall: p.wall, dir: p.dir });
        ctx.globalAlpha = 1;
      }
      this._drawHeroAt(ctx, p.x, p.y, { phase: p.run, air: !p.onGround, vy: p.vy, wall: !p.onGround && p.wall !== 0 && p.vy > 0, dir: p.dir, blink: Math.floor(now * 0.7) % 5 === 0 && (now * 0.7) % 1 < 0.12 });
    }
    if (p.shield > 0) drawShield(ctx, p.x, p.y, now);
    if (p.magnet > 0) {
      ctx.strokeStyle = 'rgba(255,107,107,0.35)';
      ctx.lineWidth = 0.05;
      ctx.beginPath();
      ctx.arc(p.x, p.y - 0.7, 1.2 + (now % 0.6), 0, Math.PI * 2);
      ctx.stroke();
    }
    for (const q of this.particles) {
      if (q.coin) {
        ctx.globalAlpha = Math.min(1, (q.life / q.max) * 2);
        drawCoin(ctx, q.x, q.y, now * 3);
        continue;
      }
      ctx.globalAlpha = Math.max(0, q.life / q.max);
      ctx.fillStyle = q.color;
      ctx.beginPath();
      if (q.star) {
        ctx.moveTo(q.x, q.y - q.r * 2);
        ctx.lineTo(q.x + q.r * 0.6, q.y);
        ctx.lineTo(q.x, q.y + q.r * 2);
        ctx.lineTo(q.x - q.r * 0.6, q.y);
      } else ctx.arc(q.x, q.y, q.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.restore();
    // warm evening light over everything
    const g = ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
    g.addColorStop(0, 'rgba(255,190,120,0.10)');
    g.addColorStop(1, 'rgba(255,140,80,0.06)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  dispose() {
    cancelAnimationFrame(this.raf);
    this.sound.dispose();
    this.ro.disconnect();
    window.removeEventListener('keydown', this._onKey);
    window.removeEventListener('keyup', this._onKey);
    document.removeEventListener('visibilitychange', this._onVis);
    this.root.remove();
  }
}

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
api.drawHero = drawHero; // for checking the drawing from the browser console
window.JungleAdventure = api;
export default api;
void P;
