import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Shared sound for the rebuilt learning games, made live with Web Audio (no files, nothing downloaded).
// Every game gets: its own background tune (a "theme": tempo, chords, melody, instrument), a set of kind effects
// (tap, step, soft bump, right-answer chime, gentle "try again", pop, sparkle, win fanfare, star, whoosh, page, drop,
// splash, nibble, squeak, cheer) and a little "host voice" (cute chirps, never words). Real words are spoken by the
// app's own voice (bridge.speak); while a word is said the music ducks so the word is clear.
// Phone safeguards (unlock on tap, silent media kick, iPhone keep-alive) are the same as in the fun games.
export const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);

/** A bouncy marimba tune in F major (default theme). */
export const THEME_GARDEN = {
  tempo: 112,
  chords: [[41, [65, 69, 72]], [46, [65, 70, 74]], [48, [64, 67, 72]], [41, [65, 69, 72]], [38, [62, 65, 69]], [46, [62, 65, 70]], [48, [64, 67, 70]], [41, [65, 69, 72]]],
  // [bar, eighth (0-7), midi]
  melody: [[0, 0, 77], [0, 2, 81], [0, 4, 84], [0, 6, 81], [1, 0, 82], [1, 3, 79], [1, 4, 77], [2, 0, 79], [2, 2, 76], [2, 4, 72], [2, 6, 76],
    [3, 0, 77], [3, 4, 72], [4, 0, 74], [4, 2, 77], [4, 4, 81], [4, 6, 79], [5, 0, 77], [5, 2, 74], [5, 4, 70], [6, 0, 72], [6, 2, 76], [6, 4, 79], [6, 6, 82], [7, 0, 81], [7, 4, 77]],
  lead: 'marimba',
  shaker: true,
};

export class Sound {
  constructor(theme = THEME_GARDEN) {
    this.ctx = null;
    this.muted = false;
    this.mode = 'off';
    this.theme = theme;
  }

  unlock() {
    iosKeepAlive();
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const c = (this.ctx = new AC());
      iosWatch(this.ctx, () => !!this.held);
      this.master = c.createGain();
      this.master.gain.value = this.muted ? 0 : 0.9;
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 6;
      this.master.connect(comp).connect(c.destination);
      this.musicBus = c.createGain();
      this.musicBus.gain.value = 0.34;
      this.musicBus.connect(this.master);
      this.sfx = c.createGain();
      this.sfx.gain.value = 0.85;
      this.sfx.connect(this.master);
      const delay = c.createDelay(0.8);
      delay.delayTime.value = 0.3;
      const fb = c.createGain();
      fb.gain.value = 0.2;
      const wet = c.createGain();
      wet.gain.value = 0.14;
      this.musicBus.connect(delay);
      delay.connect(fb).connect(delay);
      delay.connect(wet).connect(this.master);
      const b = c.createBuffer(1, c.sampleRate * 1.5, c.sampleRate);
      const d = b.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = b;
      this._timer = setInterval(() => this._schedule(), 30);
      if (this.mode !== 'off') this.setMode(this.mode, true);
    }
    if (this.ctx.state !== 'running' && !this.held) {
      this._silentTick();
      this._mediaKick();
      this.ctx.resume();
    }
  }

  get on() { return !!this.ctx && this.ctx.state === 'running'; }

  _silentTick() {
    try {
      const c = this.ctx;
      const src = c.createBufferSource();
      src.buffer = c.createBuffer(1, 1, c.sampleRate);
      src.connect(c.destination);
      src.start(0);
    } catch (_) { /* fine */ }
  }

  _mediaKick() {
    if (this._kicked) return;
    try {
      const a = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA');
      a.volume = 0.01;
      const p = a.play();
      if (p && p.then) p.then(() => { this._kicked = true; }).catch(() => {});
    } catch (_) { /* fine */ }
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.05);
  }
  suspend() { iosPause(); this.held = true; if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { iosKeepAlive(); this.held = false; if (this.ctx && this.ctx.state !== 'running') this.ctx.resume(); }

  /** 'menu' (slower, softer), 'play', 'calm' (very soft) or 'off'. */
  setMode(mode, force) {
    if (this.mode === mode && !force) return;
    this.mode = mode;
    if (!this.ctx) return;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
    const base = this.musicOnly ? 1.6 : 1; // the music is the only sound: a little louder and clearer
    const v = (mode === 'calm' ? 0.18 : mode === 'menu' ? 0.28 : 0.34) * base;
    this.musicBus.gain.setTargetAtTime(v, this.ctx.currentTime, 0.3);
  }

  /** Lowers the music for [secs] while the app's voice says a word. */
  duck(secs = 2) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const v = this.mode === 'calm' ? 0.18 : 0.34;
    this.musicBus.gain.cancelScheduledValues(t);
    this.musicBus.gain.setTargetAtTime(0.035, t, 0.06);
    this.musicBus.gain.setTargetAtTime(v, t + secs, 0.4);
    // effects step back too while the word is said
    this.sfx.gain.cancelScheduledValues(t);
    this.sfx.gain.setTargetAtTime(0.45, t + 0.15, 0.08);
    this.sfx.gain.setTargetAtTime(0.85, t + secs, 0.3);
  }

  dispose() {
    clearInterval(this._timer);
    iosPause();
    if (this.ctx) this.ctx.close();
    this.ctx = null;
  }

  // ---- instruments ----------------------------------------------------------------------------------------------

  tone(type, f, t, len, vol, dest = this.sfx, a = 0.005) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
    return o;
  }

  noise(t, len, vol, type, freq, q = 1, dest = this.sfx, freqEnd) {
    const c = this.ctx;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (freqEnd) f.frequency.exponentialRampToValueAtTime(freqEnd, t + len);
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.02, len / 4));
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    s.connect(f).connect(g).connect(dest);
    s.start(t, Math.random() * 0.5);
    s.stop(t + len + 0.05);
  }

  slide(type, f0, f1, t, len, vol, dest = this.sfx) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + len);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  /** a played note on the theme's lead instrument */
  lead(m, t, vol, dest = this.musicBus) {
    const f = hz(m);
    switch (this.theme.lead) {
      case 'bell':
        this.tone('sine', f, t, 0.9, vol, dest, 0.002);
        this.tone('sine', f * 2.76, t, 0.25, vol * 0.25, dest, 0.002);
        break;
      case 'pluck':
        this.tone('triangle', f, t, 0.28, vol, dest, 0.002);
        this.tone('sine', f * 2, t, 0.12, vol * 0.3, dest, 0.002);
        break;
      case 'flute':
        this.tone('sine', f, t, 0.45, vol, dest, 0.05);
        this.tone('triangle', f * 2, t, 0.3, vol * 0.08, dest, 0.06);
        break;
      default: // marimba
        this.tone('sine', f, t, 0.35, vol, dest, 0.003);
        this.tone('sine', f * 4, t, 0.05, vol * 0.3, dest, 0.002);
    }
  }

  // ---- music: four-four, eight eighths a bar, eight bars ------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const th = this.theme;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / (this.mode === 'menu' ? th.tempo * 0.9 : th.tempo) / 2;
    const bars = th.chords.length;
    const play = this.mode === 'play';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % (bars * 8);
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = th.chords[bar];
      if (e === 0 || e === 4) this.tone('triangle', hz(root - (e === 4 ? 5 : 0)), t, eighth * 1.6, 0.14, this.musicBus, 0.01);
      if (e === 2 || e === 6) chord.forEach((m) => this.tone('sine', hz(m - 12), t, eighth * 1.2, 0.022, this.musicBus, 0.004));
      const en = this.energy || 0; // grows with every right answer: the music opens up
      if (this.suspense) {
        // waiting for the answer: the tune steps back and a playful tip-toe pizzicato with soft clock ticks takes over
        const walk = [0, 4, 7, 4, 9, 7, 4, 2];
        if (e % 2 === 0) this.tone('triangle', hz(root + 24 + walk[(this.step >> 1) % 8]), t, eighth * 0.55, 0.055, this.musicBus, 0.004);
        else this.noise(t, 0.02, 0.03, 'highpass', 6500, 1, this.musicBus);
        if (e === 6) this.tone('sine', hz(root + 31 + ((bar % 4) * 2)), t, eighth * 1.6, 0.03, this.musicBus, 0.01);
      } else
      for (const [bb, ee, m] of th.melody) if (bb === bar && ee === e) this.lead(m, t, (play ? 0.075 : 0.06) * (0.65 + 0.7 * en));
      if (en >= 0.4 && e % 2 === 0) this.lead(chord[(e / 2) % chord.length] + 12, t + eighth * 0.5, 0.03 * en);
      if (en >= 0.8 && (e === 3 || e === 7)) this.lead(chord[2] + 24, t, 0.025);
      if (th.shaker && play && e % 2 === 1) this.noise(t, 0.04, 0.012, 'highpass', 8000, 1, this.musicBus);
      this.step++;
      this.nextTime += eighth;
    }
  }

  /** The waiting-for-the-answer music (a playful, curious pulse) on or off. */
  setSuspense(on) { this.suspense = !!on; }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on || this.musicOnly) return; // music-only games: no effects at all
    const t = this.ctx.currentTime + 0.005;
    switch (name) {
      case 'note': // a pleasant note from the pentatonic scale (each right answer rings one)
        this.lead(arg || 79, t, 0.09, this.sfx);
        break;
      case 'applause': { // a crowd clapping: many filtered noise claps, dense at first, then thinning out
        const n = 130;
        for (let i = 0; i < n; i++) {
          const at = t + Math.pow(Math.random(), 1.5) * 2.5;
          this.noise(at, 0.02 + Math.random() * 0.025, 0.09 + Math.random() * 0.08, 'bandpass', 1300 + Math.random() * 3000, 1.3, this.sfx);
          if (i % 3 === 0) this.noise(at, 0.05, 0.05, 'lowpass', 900, 0.8, this.sfx); // the hollow body of a clap
        }
        break;
      }
      case 'crowd': { // children cheering "yaaay": five voices gliding up through the vowel "a"
        const c = this.ctx;
        for (let i = 0; i < 6; i++) {
          const st = t + i * 0.045 + Math.random() * 0.08;
          const o = c.createOscillator();
          o.type = 'sawtooth';
          o.frequency.setValueAtTime(250 + i * 28, st);
          o.frequency.exponentialRampToValueAtTime(430 + i * 36, st + 0.5);
          const f1 = c.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 850; f1.Q.value = 4;
          const f2 = c.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 1300; f2.Q.value = 5;
          const gn = c.createGain();
          gn.gain.setValueAtTime(0.0001, st);
          gn.gain.exponentialRampToValueAtTime(0.07, st + 0.07);
          gn.gain.exponentialRampToValueAtTime(0.0001, st + 0.75);
          o.connect(f1); o.connect(f2); f1.connect(gn); f2.connect(gn); gn.connect(this.sfx);
          o.start(st); o.stop(st + 0.8);
        }
        break;
      }
      case 'fanfare': // a bright little trumpet-and-bells arpeggio for every right answer
        [72, 76, 79, 84, 88].forEach((m, i) => { this.tone('triangle', hz(m), t + i * 0.075, 0.38, 0.085); this.tone('square', hz(m), t + i * 0.075, 0.18, 0.018); this.tone('sine', hz(m) * 2, t + i * 0.075, 0.3, 0.03); });
        break;
      case 'yay': // a happy rising "hooray" of bells
        [72, 76, 79, 84, 88, 91].forEach((m, i) => { this.tone('triangle', hz(m), t + i * 0.06, 0.4, 0.05); this.tone('sine', hz(m) * 2, t + i * 0.06, 0.2, 0.02); });
        break;
      case 'tap':
        this.tone('sine', 880, t, 0.06, 0.05);
        break;
      case 'step': // a tiny tip-tap; [arg] alternates the foot
        this.tone('sine', arg ? 1250 : 1100, t, 0.04, 0.035);
        this.noise(t, 0.03, 0.02, 'highpass', 5000, 1);
        break;
      case 'bump': // a soft rubbery boing (never a buzzer)
        this.slide('sine', 260, 150, t, 0.18, 0.13);
        this.slide('sine', 320, 200, t + 0.06, 0.14, 0.05);
        break;
      case 'right': // a bright two-note chime
        [[84, 0], [88, 0.09], [91, 0.18]].forEach(([m, d]) => { this.tone('sine', hz(m), t + d, 0.45, 0.08); this.tone('sine', hz(m) * 3, t + d, 0.08, 0.012); });
        break;
      case 'wrong': // gentle: "hmm, try again"
        this.tone('triangle', hz(67), t, 0.18, 0.06);
        this.tone('triangle', hz(64), t + 0.14, 0.26, 0.05);
        break;
      case 'pop':
        this.slide('sine', 900, 300, t, 0.08, 0.12);
        this.noise(t, 0.05, 0.06, 'bandpass', 2500, 2);
        break;
      case 'sparkle':
        for (let i = 0; i < 6; i++) this.tone('sine', hz(90 + ((i * 5) % 12)), t + i * 0.045, 0.25, 0.03);
        break;
      case 'star':
        [88, 91, 96, 100].forEach((m, i) => this.tone('sine', hz(m), t + i * 0.07, 0.5, 0.05));
        break;
      case 'whoosh':
        this.noise(t, 0.5, 0.09, 'bandpass', 500, 0.8, this.sfx, 2600);
        break;
      case 'page':
        this.noise(t, 0.25, 0.06, 'bandpass', 1800, 0.6, this.sfx, 900);
        break;
      case 'drop': // something lands in place
        this.tone('sine', 520, t, 0.08, 0.1);
        this.tone('sine', 780, t + 0.05, 0.12, 0.06);
        this.noise(t, 0.05, 0.04, 'lowpass', 900, 1);
        break;
      case 'splash':
        this.noise(t, 0.6, 0.12, 'lowpass', 3000, 0.7, this.sfx, 500);
        for (let i = 0; i < 4; i++) this.tone('sine', 900 + Math.random() * 900, t + 0.05 + i * 0.06, 0.08, 0.025);
        break;
      case 'nibble': // munch munch
        for (let i = 0; i < 5; i++) this.noise(t + i * 0.09, 0.05, 0.08, 'bandpass', 1200 + (i % 2) * 500, 2);
        break;
      case 'squeak': // a little mouse squeak
        this.slide('sine', 1800, 2600, t, 0.08, 0.05);
        this.slide('sine', 2600, 2000, t + 0.08, 0.07, 0.04);
        break;
      case 'cheer': // a happy little bell arpeggio (the old chirp "voice" sounded odd: owner feedback)
        [76, 79, 84, 88].forEach((m, i) => { this.tone('sine', hz(m), t + i * 0.07, 0.35, 0.05); this.tone('sine', hz(m) * 2, t + i * 0.07, 0.12, 0.012); });
        break;
      case 'hmm': // soft and kind: two low notes
        this.tone('sine', hz(67), t, 0.25, 0.05);
        this.tone('sine', hz(64), t + 0.15, 0.3, 0.045);
        break;
      case 'win': // the set is finished: a little fanfare
        [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [79, 0.56], [84, 0.68], [88, 0.9]].forEach(([m, d]) => { this.tone('triangle', hz(m), t + d, 0.5, 0.08); this.tone('sine', hz(m) * 2, t + d, 0.2, 0.02); });
        for (let i = 0; i < 10; i++) this.noise(t + 0.3 + i * 0.05, 0.05, 0.025, 'highpass', 7500, 1);
        break;
      case 'roundWin': // one round done
        [[79, 0], [84, 0.1], [88, 0.2], [91, 0.32]].forEach(([m, d]) => this.tone('sine', hz(m), t + d, 0.4, 0.07));
        break;
      default:
    }
  }

  /** A cute syllable voice: each note is a short vowel-like blip (formant-ish sine + square at low level). */
  voice(notes, t, vol) {
    notes.forEach((m, i) => {
      const s = t + i * 0.11;
      this.slide('sine', hz(m) * 0.94, hz(m), s, 0.12, vol);
      this.slide('square', hz(m) * 0.94, hz(m), s, 0.1, vol * 0.12);
    });
  }
}
