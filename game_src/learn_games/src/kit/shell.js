// The shared frame of every rebuilt learning game: a full-screen root with the game's canvas behind an HTML layer,
// a top bar (back, five round marks, sound), a host speech bubble, the title card, the end card with the learning
// star, the "tap here for sound" pill, the app bridge (save / exit / speak / round / complete), Arabic first with
// English when the app is in English and boy/girl wording. Nothing is downloaded except the app's own fonts.
import { Sound } from './sound.js';

export function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'style') e.style.cssText = v;
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) if (k !== null && k !== undefined && k !== false) e.append(k.nodeType ? k : document.createTextNode(String(k)));
  return e;
}

const KIT = {
  back: ['رجوع', 'Back'],
  sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  play: ['يلا نلعب', "Let's play"],
  again: ['العب تاني', 'Play again'],
  newStar_m: ['نجمة جديدة ليك! ⭐', 'A new star for you! ⭐'],
  newStar_f: ['نجمة جديدة ليكي! ⭐', 'A new star for you! ⭐'],
  doneAgain_m: ['خلصتها تاني! برافو عليك', 'You finished it again! Well done'],
  doneAgain_f: ['خلصتها تاني! برافو عليكي', 'You finished it again! Well done'],
  great_m: ['شطوووووور!', 'Well done!'],
  great_f: ['شطووووورة!', 'Well done!'],
  // what the voice says (stretched letters on screen are read badly by a speech voice)
  greatSay_m: ['شاطر أوي!', 'Well done!'],
  greatSay_f: ['شاطرة أوي!', 'Well done!'],
  newStarSay_m: ['خدت نجمة جديدة!', 'You got a new star!'],
  newStarSay_f: ['خدتي نجمة جديدة!', 'You got a new star!'],
};

/** Strings: { key: [ar, en] }, with `key_m` / `key_f` for boy/girl wording. */
export function makeText(table, cfg) {
  const lang = cfg.lang === 'en' ? 'en' : 'ar';
  const girl = cfg.gender === 'girl';
  const all = { ...KIT, ...table };
  const t = (k) => {
    const g = `${k}_${girl ? 'f' : 'm'}`;
    const key = all[g] ? g : k;
    return all[key] ? all[key][lang === 'en' ? 1 : 0] : k;
  };
  const num = (n) => (lang === 'en' ? String(n) : String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]));
  return { t, num, lang, girl };
}

const CSS = `
.lk-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#3a2a5a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent}
.lk-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.lk-layer{position:absolute;inset:0;pointer-events:none}
.lk-layer button,.lk-layer .lk-card,.lk-layer .lk-pe{pointer-events:auto}
.lk-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));left:calc(var(--u)*2.4);right:calc(var(--u)*2.4);display:flex;align-items:center;justify-content:space-between;gap:calc(var(--u)*2)}
.lk-rbtn{width:calc(var(--u)*12);height:calc(var(--u)*12);min-width:48px;min-height:48px;border-radius:50%;border:calc(var(--u)*.7) solid #fff;background:linear-gradient(180deg,#9a6af0,#6a3ad0);color:#fff;font-size:calc(var(--u)*5.6);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #4a2a9a,0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(30,20,70,.35);padding:0;font-family:inherit}
.lk-rbtn:active{transform:translateY(calc(var(--u)*.5))}
.lk-rbtn.y{background:linear-gradient(180deg,#ffd45a,#f5a01a);box-shadow:0 calc(var(--u)*.8) 0 #b8700a,0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(30,20,70,.35)}
.lk-dots{display:flex;gap:calc(var(--u)*1.4);background:rgba(255,255,255,.82);border:calc(var(--u)*.5) solid #fff;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*2.6);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.6) rgba(30,20,70,.25)}
.lk-dots span{font-size:calc(var(--u)*5);filter:grayscale(1);opacity:.35;transition:all .3s;line-height:1}
.lk-dots span.on{filter:none;opacity:1;transform:scale(1.15)}
.lk-bubble{position:absolute;top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*15);left:50%;transform:translateX(-50%) scale(.9);max-width:86%;background:#fff;border:calc(var(--u)*.6) solid #ffd45a;border-radius:calc(var(--u)*5);padding:calc(var(--u)*1.6) calc(var(--u)*4.4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2.4) rgba(30,20,70,.25);opacity:0;transition:opacity .3s,transform .3s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lk-bubble.show{opacity:1;transform:translateX(-50%) scale(1)}
.lk-dim{position:absolute;inset:0;background:rgba(40,30,90,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box;pointer-events:auto}
.lk-card{background:#fffaf0;border:calc(var(--u)*.8) solid #ffd45a;border-radius:calc(var(--u)*6);padding:calc(var(--u)*4) calc(var(--u)*6);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.8);width:calc(var(--u)*80);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(30,20,70,.4);animation:lk-in .45s cubic-bezier(.2,1.4,.4,1)}
@keyframes lk-in{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
.lk-title{font-size:calc(var(--u)*10);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #6a3ad0;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) 0 #4a2a9a;text-align:center;line-height:1.15}
.lk-big{font-size:calc(var(--u)*14);line-height:1}
.lk-msg{font-size:calc(var(--u)*5);font-weight:900;color:#3aa86a;text-align:center}
.lk-small{font-size:calc(var(--u)*3.8);font-weight:700;color:#7a6a9a;text-align:center}
.lk-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.6);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.8) calc(var(--u)*6);min-height:max(52px,calc(var(--u)*11.5));cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.9) 0 #1a6a3a,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.lk-btn.p{background:linear-gradient(180deg,#9a6af0,#6a3ad0);box-shadow:0 calc(var(--u)*.9) 0 #4a2a9a}
.lk-btn:active{transform:translateY(calc(var(--u)*.5))}
.lk-btn:focus-visible,.lk-rbtn:focus-visible{outline:calc(var(--u)*.8) solid #3a8ae8;outline-offset:calc(var(--u)*.6)}
.lk-starburst{font-size:calc(var(--u)*11);line-height:1;animation:lk-spin 1.6s ease-out}
@keyframes lk-spin{from{transform:scale(0) rotate(-180deg)}to{transform:scale(1) rotate(0)}}
.lk-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*24);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;

export class Shell {
  /**
   * @param el the container. @param cfg the app's config ({lang, age, gender, save, done, base}).
   * @param post the app channel. @param opts {id, text, theme, mark (emoji for a round), rounds}
   */
  constructor(el, cfg, post, opts) {
    this.el = el;
    this.cfg = cfg || {};
    this.post = post || (() => {});
    this.opts = opts;
    this.T = makeText(opts.text || {}, this.cfg);
    this.age = Number(this.cfg.age) || 5;
    this.base = this.cfg.base || './';
    this.done = !!this.cfg.done;
    this.save = this.cfg.save && typeof this.cfg.save === 'object' ? { ...this.cfg.save } : {};
    this.sound = new Sound(opts.theme);
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('lk-style')) document.head.append(h('style', { id: 'lk-style' }, CSS));
    this.root = h('div', { class: 'lk-root', dir: this.T.lang === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'lk-layer' });
    this.root.append(this.layer);
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'lk-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, this.T.t('sound'));
    this.root.append(this.soundPill);
    this._tapped = false;
    this.root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => { this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden ? 'block' : 'none'; }, 700);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
  }

  t(k) { return this.T.t(k); }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.w = r.width || window.innerWidth;
    this.h = r.height || window.innerHeight;
    this.u = Math.min(this.w, this.h) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    if (this.onResize) this.onResize(this.w, this.h);
  }

  async fonts() {
    try {
      const faces = [new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }), new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-Bold.ttf)`, { weight: '700' })];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 2500))]);
    } catch (_) { /* system font */ }
  }

  // ---- the app bridge ---------------------------------------------------------------------------------------------

  /** Says [text] with the app's own voice (and ducks the music meanwhile). */
  speak(text, secs) {
    if (!text) return;
    this.sound.duck(secs ?? Math.min(5, 1.2 + text.length * 0.09)); // the slower child-like voice needs a little longer
    this.post({ type: 'speak', text, lang: this.T.lang });
  }
  /** One answer, for the parent dashboard (skill null = nothing recorded). */
  round(skill, correct, detail) { if (skill) this.post({ type: 'round', skill, correct: !!correct, detail: detail == null ? null : String(detail) }); }
  complete() { this.post({ type: 'complete' }); }
  saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  exit() { this.saveNow(); this.post({ type: 'exit' }); }

  // ---- screens ------------------------------------------------------------------------------------------------------

  clear() { this.layer.replaceChildren(); this.bubble = null; }

  backBtn() {
    return h('button', { class: 'lk-rbtn', 'aria-label': this.t('back'), onclick: (e) => { e.stopPropagation(); this.exit(); } }, this.T.lang === 'en' ? '←' : '→');
  }

  soundBtn() {
    const b = h('button', { class: 'lk-rbtn y', 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
    b.addEventListener('click', (e) => { e.stopPropagation(); this.sound.unlock(); this.sound.setMuted(!this.sound.muted); this.save.muted = this.sound.muted; this.saveNow(); b.textContent = this.sound.muted ? '🔇' : '🔊'; });
    return b;
  }

  /** The top bar with [n] round marks; returns a function that lights the first k marks. */
  topBar(n, mark) {
    const dots = h('div', { class: 'lk-dots', 'aria-hidden': 'true' }, Array.from({ length: n }, () => h('span', {}, mark)));
    this.layer.append(h('div', { class: 'lk-top' }, this.backBtn(), dots, this.soundBtn()));
    this.bubble = h('div', { class: 'lk-bubble', role: 'status' });
    this.layer.append(this.bubble);
    return (k) => [...dots.children].forEach((s, i) => s.classList.toggle('on', i < k));
  }

  /** Shows [text] in the host's bubble (and says [say] with the app's voice when given). */
  say(text, say, secs = 3.2) {
    if (!this.bubble) return;
    this.bubble.textContent = text;
    this.bubble.classList.add('show');
    clearTimeout(this._bt);
    if (secs > 0) this._bt = setTimeout(() => this.bubble && this.bubble.classList.remove('show'), secs * 1000);
    if (say) this.speak(say === true ? text : say);
  }

  /** The title card. [art] is an emoji row. */
  titleCard(title, art, onPlay) {
    this.clear();
    this.sound.setMode('menu');
    this.layer.append(h('div', { class: 'lk-top' }, this.backBtn(), h('span'), this.soundBtn()));
    const go = h('button', { class: 'lk-btn', onclick: () => { this.sound.unlock(); this.sound.play('tap'); onPlay(); } }, '▶ ', this.t('play'));
    this.layer.append(h('div', { class: 'lk-dim', style: 'background:none' }, h('div', { class: 'lk-card' }, h('div', { class: 'lk-title' }, title), h('div', { class: 'lk-big' }, art), go)));
    setTimeout(() => go.focus({ preventScroll: true }), 50);
  }

  /** The end card: tells the app the set is finished (the learning star the first time). */
  finishCard(title, art, onAgain) {
    this.complete();
    const first = !this.done;
    this.done = true;
    this.sound.play('win');
    setTimeout(() => this.sound.play('star'), 900);
    this.speak(first ? `${this.t('greatSay')} ${this.t('newStarSay')}` : this.t('doneAgain'));
    const again = h('button', { class: 'lk-btn', onclick: () => { this.sound.play('tap'); onAgain(); } }, '↻ ', this.t('again'));
    this.layer.append(h('div', { class: 'lk-dim' }, h('div', { class: 'lk-card' },
      h('div', { class: 'lk-title', style: 'font-size:calc(var(--u)*8)' }, title),
      h('div', { class: 'lk-starburst' }, first ? '⭐' : art),
      h('div', { class: 'lk-msg' }, this.t('great')),
      h('div', { class: 'lk-small', style: 'font-size:calc(var(--u)*4.6);color:#6a3ad0' }, first ? this.t('newStar') : this.t('doneAgain')),
      again,
      h('button', { class: 'lk-btn p', onclick: () => this.exit() }, this.t('back')))));
    setTimeout(() => again.focus({ preventScroll: true }), 50);
  }

  pause() { this.sound.suspend(); }

  dispose() {
    clearInterval(this._pill);
    clearTimeout(this._bt);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    this.root.remove();
  }
}
