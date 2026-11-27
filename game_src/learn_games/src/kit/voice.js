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

/** The languages a clip can be in: Arabic (default), English, German. */
const L = (l) => (l === 'en' || l === 'de' || l === 'fr' || l === 'it' ? l : 'ar');

/** Stable id of a sentence: FNV-1a over "<lang>|<spoken text>", 8 hex digits. */
export function clipId(text, lang) {
  const s = `${L(lang)}|${spoken(text)}`;
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
    this.lang = L(lang);
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
      sc.onerror = () => { window.__learnVoice = window.__learnVoice || { ar: [], en: [], de: [], fr: [], it: [] }; };
      document.head.append(sc);
    }
    // the «Example» sentences of the words (a script too, so the game bundle stays small)
    if (typeof document !== 'undefined' && !window.__learnExamples && !document.getElementById('learn-examples')) {
      const ex = document.createElement('script');
      ex.id = 'learn-examples';
      ex.src = `${this.dir}examples.js`;
      ex.onerror = () => { window.__learnExamples = window.__learnExamples || {}; };
      document.head.append(ex);
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

  /** A queue item: {t: the words, lang, slow}. A game may pass a plain string (said in the game's language) or {t, lang:'en', slow:true}
   *  (English teaching words: the same word as a slower clip, `<id>_slow`). */
  _item(x) {
    if (typeof x === 'string') return { t: spoken(x), lang: this.lang, slow: false };
    return { t: spoken(x.t), lang: x.lang === 'en' || x.lang === 'de' || x.lang === 'fr' || x.lang === 'it' || x.lang === 'ar' ? x.lang : this.lang, slow: !!x.slow, optional: !!x.optional };
  }

  _clipName(it) { return clipId(it.t, it.lang) + (it.slow ? '_slow' : ''); }

  has(it) {
    if (typeof it === 'string') it = this._item(it);
    const m = typeof window !== 'undefined' && window.__learnVoice;
    return !!(m && m[it.lang] && m[it.lang].includes(this._clipName(it)));
  }

  /**
   * Says one sentence or several in order. A new call replaces whatever was being said.
   * [onEach](i) is called as sentence i starts (a game lights the matching thing up); [onDone]() when the last one ends.
   */
  say(texts, onEach, onDone) {
    this.stop();
    this.queue = (Array.isArray(texts) ? texts : [texts]).filter(Boolean).map((x) => this._item(x)).filter((x) => x.t);
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
    // an optional item (the Arabic word after the praise in English/German) is said only from a recording: the robotic device voice
    // would sound like another person and could run over the next clip
    if (text.optional && !this.has(text)) { this._next(); return; }
    if (!this.has(text)) {
      // no recording yet: SILENT (owner 2026-11-26: the device voice sounds like another person and he wants nothing that is not good).
      // The text is on screen, the thing lights up, and the queue moves on; the clip is on the owner's list to record.
      this._start(this.i++);
      const run = this.run;
      setTimeout(() => { if (run === this.run) this._next(); }, 700);
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
    a.onerror = () => { if (this.tok === token && this.audio === a) { this.audio = null; this._next(); } }; // a clip that cannot load: silent, never the device voice
    this.onTalk(2.5);
    try { a.src = `${window.__learnVoiceBase || this.dir}${text.lang}/${this._clipName(text)}.mp3`; } catch (_) { /* fine */ } // the hosted demo sets window.__learnVoiceBase (in manifest.js) to the R2 bucket
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
