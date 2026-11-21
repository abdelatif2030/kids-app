// Recorded voice for the learning games (owner 2026-11-12: the device's reading voice is not good enough).
// Every sentence a game says has an id (a hash of its language and words). When a recorded clip for that id is bundled
// (assets/games/learn_voice/<lang>/<id>.mp3, listed in manifest.js), the game plays the recording; only when there is
// none does it fall back to the app's device voice. Clips are made with tools/game_voice (a neural voice or a person's
// own recordings). One clip at a time; several sentences are said one after the other.

/** The words as they are said: no emoji or symbols, single spaces. Used for the id and for the fallback voice. */
export function spoken(text) {
  return String(text)
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2190}-\u{21FF}\u{25A0}-\u{25FF}⭐]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Stable id of a sentence: FNV-1a over "<lang>|<spoken text>", 8 hex digits. */
export function clipId(text, lang) {
  const s = `${lang === 'en' ? 'en' : 'ar'}|${spoken(text)}`;
  let h = 0x811c9dc5;
  for (const ch of new TextEncoder().encode(s)) { h ^= ch; h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
}

// A tiny silent clip: played once inside a tap so that phones let this page start sounds later without a tap.
const SILENT = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';

export class Voice {
  /** [base] is the game's folder URL; [fallback](text, lang) speaks with the device voice; [onTalk](secs) ducks the music. */
  constructor(base, lang, fallback, onTalk) {
    this.dir = `${base}../learn_voice/`;
    this.lang = lang === 'en' ? 'en' : 'ar';
    this.fallback = fallback;
    this.onTalk = onTalk || (() => {});
    this.queue = [];
    this.audio = null;
    this.muted = false;
    // ONE audio element for every clip (not a new one each time): phones only let a page start sound without a tap on an
    // element that a tap already "unlocked", so a sentence said between two levels (no tap for several seconds) used to be
    // refused and the first question of the next level stayed silent. A refused clip waits and is said at the next tap.
    this.el = null;
    this.tok = 0;
    this.pending = null;
    this.unlocked = false;
    if (typeof document !== 'undefined' && document.addEventListener) {
      const go = () => this._gesture();
      for (const ev of ['pointerdown', 'touchend', 'click', 'keydown']) document.addEventListener(ev, go, { capture: true, passive: true });
    }
    // the list of bundled clips, as a script (works from a bundled page too)
    if (typeof document !== 'undefined' && !window.__learnVoice && !document.getElementById('learn-voice-manifest')) {
      const sc = document.createElement('script');
      sc.id = 'learn-voice-manifest';
      sc.src = `${this.dir}manifest.js`;
      sc.onerror = () => { window.__learnVoice = window.__learnVoice || { ar: [], en: [] }; };
      document.head.append(sc);
    }
  }

  _element() {
    if (!this.el) { this.el = new Audio(); this.el.preload = 'auto'; }
    return this.el;
  }

  /** Called inside a tap or key press: unlocks the shared element and says what the phone refused a moment ago. */
  _gesture() {
    const el = this._element();
    if (!this.unlocked && !this.audio) {
      this.unlocked = true;
      try { el.src = SILENT; const p = el.play(); if (p && p.catch) p.catch(() => { this.unlocked = false; }); } catch (_) { this.unlocked = false; }
    }
    const pend = this.pending;
    if (pend && pend.run === this.run && !this.audio) { this.pending = null; this._play(pend.text); }
  }

  has(text) {
    const m = typeof window !== 'undefined' && window.__learnVoice;
    return !!(m && m[this.lang] && m[this.lang].includes(clipId(text, this.lang)));
  }

  /**
   * Says one sentence or several in order. A new call replaces whatever was being said.
   * [onEach](i) is called as sentence i starts (a game lights the matching thing up); [onDone]() when the last one ends.
   */
  say(texts, onEach, onDone) {
    this.stop();
    this.queue = (Array.isArray(texts) ? texts : [texts]).map(spoken).filter(Boolean);
    this.i = 0;
    this.onEach = typeof onEach === 'function' ? onEach : null; // a game passing anything else (a number) must never break the voice
    this.onDone = typeof onDone === 'function' ? onDone : null;
    this.run = (this.run || 0) + 1;
    if (!this.queue.length && this.onDone) this.onDone();
    else this._next();
  }

  _finish() {
    const d = this.onDone;
    this.onDone = null;
    if (d) d();
  }

  _start(i) { if (this.onEach) this.onEach(i); }

  _next(tries = 0) {
    if (this.muted) { this._finish(); return; }
    if (!this.queue.length) { this._finish(); return; }
    // the list of clips is still loading: wait a moment (at most a second) before choosing clip or device voice
    if (typeof window !== 'undefined' && !window.__learnVoice && tries < 8) {
      const mine = this.queue;
      setTimeout(() => { if (this.queue === mine) this._next(tries + 1); }, 130);
      return;
    }
    const text = this.queue.shift();
    if (!this.has(text)) {
      // no recording: the device voice says this one and whatever is left, as one sentence
      const all = [text, ...this.queue];
      const rest = all.join(this.lang === 'en' ? ', ' : '، ');
      this.queue = [];
      this.onTalk(Math.min(8, 1.2 + rest.length * 0.09));
      this.fallback(rest, this.lang);
      // the device voice speaks it as one sentence: the things light up at an even pace meanwhile, then it is done
      const per = Math.max(600, Math.min(1100, (rest.length * 90) / all.length));
      const run = this.run;
      all.forEach((_, k) => setTimeout(() => { if (run === this.run) this._start(this.i + k); }, k * per));
      setTimeout(() => { if (run === this.run) this._finish(); }, all.length * per + 300);
      return;
    }
    this._start(this.i++);
    this._play(text);
  }

  /** Plays the recording of one sentence on the shared element; when the phone refuses it, it waits for the next tap. */
  _play(text) {
    const a = this._element();
    const token = ++this.tok;
    this.pending = null;
    this.audio = a;
    a.onloadedmetadata = () => { if (this.tok === token) this.onTalk((a.duration || 2) + 0.3); };
    a.onended = () => { if (this.tok === token && this.audio === a) { this.audio = null; this._next(); } };
    a.onerror = () => { if (this.tok === token && this.audio === a) { this.audio = null; this.onTalk(Math.min(6, 1.2 + text.length * 0.09)); this.fallback(text, this.lang); this._next(); } };
    this.onTalk(2.5);
    try { a.src = `${this.dir}${this.lang}/${clipId(text, this.lang)}.mp3`; } catch (_) { /* fine */ }
    const run = this.run;
    const p = a.play();
    if (p && p.catch) {
      p.catch((e) => {
        if (this.tok !== token || (e && e.name === 'AbortError')) return; // replaced or stopped on purpose
        // refused (no tap for a while): keep the sentence and say it at the next tap; the text is on screen meanwhile
        this.audio = null;
        this.pending = { text, run };
      });
    }
  }

  stop() {
    this.run = (this.run || 0) + 1; // anything still waiting from the last call is dropped
    this.queue = [];
    this.onDone = null;
    this.tok++;
    this.pending = null;
    if (this.audio) { try { this.audio.pause(); } catch (_) { /* fine */ } this.audio = null; }
  }
}
