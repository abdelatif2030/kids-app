// Jungle adventure sound, made live with Web Audio (no files): an original tune (marimba lead, kalimba, flute,
// bongos, congas, shaker and a plucked bass) that speeds up a little on each level, soft footsteps, and an effect for
// every moment. Gentle volumes behind a limiter; one button mutes everything.

const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);

// [midi, beats] — 8 bars of 4/4 in a bright, adventurous D-major pentatonic. Original melody.
const MELODY = [
  [74, 0.5], [78, 0.5], [81, 0.5], [78, 0.5], [83, 0.5], [81, 0.5], [78, 1],
  [76, 0.5], [78, 0.5], [74, 0.5], [71, 0.5], [74, 2],
  [81, 0.5], [83, 0.5], [86, 0.5], [83, 0.5], [81, 0.5], [78, 0.5], [81, 1],
  [78, 0.5], [76, 0.5], [74, 0.5], [76, 0.5], [78, 2],
  [74, 0.5], [74, 0.5], [78, 0.5], [81, 0.5], [86, 1], [83, 0.5], [81, 0.5],
  [78, 0.5], [81, 0.5], [83, 0.5], [81, 0.5], [78, 2],
  [83, 0.5], [86, 0.5], [88, 0.5], [86, 0.5], [83, 0.5], [81, 0.5], [78, 1],
  [76, 0.5], [78, 0.5], [81, 0.5], [76, 0.5], [74, 2],
];
const CHORDS = [
  [38, [62, 66, 69]], [35, [59, 62, 66]], [43, [59, 62, 67]], [45, [61, 64, 69]],
  [38, [62, 66, 69]], [43, [59, 62, 67]], [40, [59, 64, 67]], [45, [61, 64, 69]],
];
const MENU_TEMPO = 96;
const LEVEL_TEMPO = [112, 118, 124];
const LEVEL_KEY = [0, -2, 3];

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.mode = 'off';
    this.level = 0;
    this._timer = null;
    this.streak = 0;
    this.streakT = 0;
  }

  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const c = (this.ctx = new AC());
      this.master = c.createGain();
      this.master.gain.value = this.muted ? 0 : 0.9;
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 6;
      comp.attack.value = 0.003;
      comp.release.value = 0.2;
      this.master.connect(comp).connect(c.destination);
      this.music = c.createGain();
      this.music.gain.value = 0.36;
      this.music.connect(this.master);
      this.sfx = c.createGain();
      this.sfx.gain.value = 0.8;
      this.sfx.connect(this.master);
      // a warm jungle "space": a short echo on the music
      const delay = c.createDelay(0.6);
      delay.delayTime.value = 0.27;
      const fb = c.createGain();
      fb.gain.value = 0.25;
      const wet = c.createGain();
      wet.gain.value = 0.2;
      const tone = c.createBiquadFilter();
      tone.type = 'lowpass';
      tone.frequency.value = 2600;
      this.music.connect(delay);
      delay.connect(tone).connect(fb).connect(delay);
      tone.connect(wet).connect(this.master);
      const b = c.createBuffer(1, c.sampleRate * 1.5, c.sampleRate);
      const d = b.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = b;
      this._timer = setInterval(() => this._schedule(), 30);
      if (this.mode !== 'off') this.setMode(this.mode, this.level, true);
    }
    if (this.ctx.state === 'suspended' && !this.held) this.ctx.resume();
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.05);
  }

  suspend() {
    this.held = true;
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend();
  }

  resume() {
    this.held = false;
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  /** mode: 'menu' | 'level' | 'off' */
  setMode(mode, level = 0, force = false) {
    if (this.mode === mode && this.level === level && !force) return;
    this.mode = mode;
    this.level = level;
    if (!this.ctx) return;
    this.tempo = mode === 'level' ? LEVEL_TEMPO[level] ?? 112 : MENU_TEMPO;
    this.key = mode === 'level' ? LEVEL_KEY[level] ?? 0 : 0;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
    this.mi = 0;
    this.mt = this.nextTime;
  }

  dispose() {
    clearInterval(this._timer);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
  }

  // ---- instruments ----------------------------------------------------------------------------------------------

  _tone(type, f, t, len, vol, dest, a = 0.004, curve = 'exp') {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + a);
    if (curve === 'exp') g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    else {
      g.gain.setValueAtTime(vol, t + len * 0.8);
      g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    }
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
    return o;
  }

  /** Marimba: a wooden bar — fundamental plus a bright 4th partial that dies fast. */
  marimba(m, t, vol = 0.16, dest = this.music) {
    const f = hz(m);
    this._tone('sine', f, t, 0.55, vol, dest, 0.003);
    this._tone('sine', f * 4, t, 0.09, vol * 0.4, dest, 0.002);
    this._tone('sine', f * 10, t, 0.025, vol * 0.12, dest, 0.001);
  }

  kalimba(m, t, vol = 0.08, dest = this.music) {
    const f = hz(m);
    this._tone('sine', f, t, 0.9, vol, dest, 0.002);
    this._tone('sine', f * 5.95, t, 0.06, vol * 0.25, dest, 0.001);
  }

  /** A breathy wooden flute for the long notes. */
  flute(m, t, len, vol = 0.05, dest = this.music) {
    const c = this.ctx;
    const f = hz(m);
    const o = c.createOscillator();
    o.type = 'triangle';
    o.frequency.value = f;
    const vib = c.createOscillator();
    vib.frequency.value = 5;
    const vg = c.createGain();
    vg.gain.value = f * 0.006;
    vib.connect(vg).connect(o.frequency);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.08);
    g.gain.setValueAtTime(vol, t + len * 0.75);
    g.gain.linearRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    vib.start(t);
    o.stop(t + len + 0.05);
    vib.stop(t + len + 0.05);
    this._noise(t, Math.min(0.15, len), vol * 0.25, 'bandpass', f * 2, 2, dest);
  }

  bass(m, t, len, vol = 0.18, dest = this.music) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = 'triangle';
    o.frequency.value = hz(m);
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(900, t);
    lp.frequency.exponentialRampToValueAtTime(220, t + len);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(lp).connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  /** Hand drums: a pitched thump that bends down (bongo high, conga low). */
  drum(f0, f1, t, len, vol, dest = this.music) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + len);
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.03);
    this._noise(t, 0.02, vol * 0.3, 'bandpass', f0 * 4, 1, dest);
  }

  _noise(t, len, vol, type, freq, q = 1, dest = this.sfx, freqEnd) {
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
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.008, len / 4));
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    s.connect(f).connect(g).connect(dest);
    s.start(t, Math.random() * 0.5);
    s.stop(t + len + 0.05);
  }

  _slide(type, f0, f1, t, len, vol, dest = this.sfx) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + len);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const beat = 60 / this.tempo;
    const lvl = this.mode === 'level';
    const k = this.key;
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 128; // 8 bars x 16 sixteenths
      const bar = Math.floor(step / 16);
      const s = step % 16;
      const [root, chord] = CHORDS[bar];
      if (lvl) {
        if (s === 0 || s === 10) this.bass(root + k, t, beat * 0.9);
        if (s === 6 || s === 12) this.bass(root + k + 7, t, beat * 0.5, 0.12);
        if (s === 0 || s === 8) this.drum(150, 70, t, 0.18, 0.32); // conga low
        if (s === 3 || s === 6 || s === 11 || s === 14) this.drum(420, 300, t, 0.08, 0.14); // bongo
        if (s === 12) this.drum(260, 180, t, 0.12, 0.2);
        this._noise(t, 0.035, s % 4 === 2 ? 0.05 : 0.025, 'highpass', 6500, 0.8, this.music); // shaker
        if (s % 4 === 0) this.kalimba(chord[(s / 4) % 3] + 12 + k, t, 0.045);
      } else {
        if (s === 0) this.bass(root + k, t, beat * 1.8, 0.1);
        if (s % 4 === 0) this.kalimba(chord[(s / 4) % 3] + 12 + k, t, 0.06);
        if (s === 0 || s === 8) this.drum(140, 80, t, 0.2, 0.12);
      }
      this.step++;
      this.nextTime += beat / 4;
    }
    while (this.mt < ahead) {
      const [n, len] = MELODY[this.mi % MELODY.length];
      if (lvl) {
        this.marimba(n + k, this.mt, 0.13);
        if (len >= 2) this.flute(n + k + 12, this.mt, len * beat * 0.9, 0.035);
      } else this.marimba(n + k, this.mt, 0.08);
      this.mt += len * beat;
      this.mi++;
    }
  }

  // ---- effects --------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const t = this.ctx.currentTime + 0.004;
    const S = this.sfx;
    switch (name) {
      case 'jump':
        this._slide('triangle', 330, 720, t, 0.16, 0.12);
        this._slide('sine', 660, 1300, t, 0.1, 0.04);
        break;
      case 'kick':
        this._noise(t, 0.05, 0.15, 'lowpass', 1500);
        this._slide('square', 400, 900, t, 0.12, 0.06);
        break;
      case 'land':
        this._noise(t, 0.06, arg ? 0.18 : 0.08, 'lowpass', 600);
        break;
      case 'step':
        this._noise(t, 0.03, 0.035, 'lowpass', 900);
        break;
      case 'coin': {
        // each coin in a quick run rings a little higher
        const now = this.ctx.currentTime;
        this.streak = now - this.streakT < 0.6 ? Math.min(this.streak + 1, 12) : 0;
        this.streakT = now;
        const m = 88 + [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 26, 28][this.streak];
        this._tone('sine', hz(m), t, 0.25, 0.1, S);
        this._tone('sine', hz(m + 12), t + 0.04, 0.2, 0.06, S);
        this._tone('square', hz(m + 7), t, 0.05, 0.015, S);
        break;
      }
      case 'relic':
        [81, 86, 90, 93, 98].forEach((m, i) => this.kalimba(m, t + i * 0.07, 0.12, S));
        this._noise(t, 1.2, 0.05, 'highpass', 6000, 0.7, S);
        this.flute(93, t + 0.35, 0.8, 0.06, S);
        break;
      case 'allRelics':
        [74, 78, 81, 86, 90, 93].forEach((m, i) => this.marimba(m, t + i * 0.08, 0.16, S));
        [62, 66, 69].forEach((m) => this.flute(m + 12, t + 0.5, 1.2, 0.05, S));
        break;
      case 'stomp':
        this._slide('sine', 500, 120, t, 0.18, 0.2);
        this._noise(t, 0.08, 0.15, 'lowpass', 1200);
        this._tone('sine', hz(84), t + 0.06, 0.15, 0.06, S);
        break;
      case 'hurt': {
        const c = this.ctx;
        const o = c.createOscillator();
        o.type = 'triangle';
        o.frequency.setValueAtTime(420, t);
        o.frequency.exponentialRampToValueAtTime(180, t + 0.35);
        const wob = c.createOscillator();
        wob.frequency.value = 14;
        const wg = c.createGain();
        wg.gain.value = 25;
        wob.connect(wg).connect(o.frequency);
        const g = c.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.16, t + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);
        o.connect(g).connect(S);
        o.start(t);
        wob.start(t);
        o.stop(t + 0.4);
        wob.stop(t + 0.4);
        break;
      }
      case 'fall':
        this._slide('sine', 900, 160, t, 0.7, 0.1);
        break;
      case 'respawn':
        [79, 83, 86, 91].forEach((m, i) => this.kalimba(m, t + i * 0.05, 0.08, S));
        break;
      case 'shield':
        [74, 81, 86, 93].forEach((m, i) => this.kalimba(m, t + i * 0.03, 0.08, S));
        this._slide('sine', 300, 900, t, 0.4, 0.06);
        break;
      case 'shieldPop':
        this._noise(t, 0.2, 0.2, 'highpass', 3000, 0.7);
        this._tone('sine', hz(98), t, 0.3, 0.07, S);
        break;
      case 'magnet':
        this._slide('sawtooth', 120, 420, t, 0.5, 0.04);
        this._slide('sine', 240, 840, t, 0.5, 0.06);
        break;
      case 'boots':
        this._noise(t, 0.5, 0.25, 'bandpass', 500, 1, S, 3000);
        this._slide('triangle', 300, 1200, t, 0.35, 0.07);
        break;
      case 'hourglass':
        this._tone('sine', hz(91), t, 0.4, 0.1, S);
        this._tone('sine', hz(96), t + 0.12, 0.5, 0.1, S);
        this._noise(t, 0.6, 0.04, 'highpass', 7000, 0.5);
        break;
      case 'checkpoint':
        this._noise(t, 0.25, 0.08, 'bandpass', 900, 0.8);
        this.marimba(86, t + 0.05, 0.14, S);
        this.marimba(93, t + 0.17, 0.14, S);
        break;
      case 'tick':
        this._tone('square', 1800, t, 0.03, 0.03, S);
        break;
      case 'bonk':
        this.drum(300, 200, t, 0.08, 0.15, S);
        break;
      case 'win':
        [[74, 0], [78, 0.13], [81, 0.26], [86, 0.39], [81, 0.6], [86, 0.73], [90, 0.86]].forEach(([m, d], i, a) => {
          this.marimba(m, t + d, 0.16, S);
          if (i === a.length - 1) this.flute(m, t + d, 1.4, 0.07, S);
        });
        [0, 0.39, 0.86].forEach((d) => this.drum(150, 70, t + d, 0.2, 0.3, S));
        this._noise(t + 0.86, 1.6, 0.06, 'bandpass', 1600, 0.5, S);
        break;
      case 'lose':
        [[81, 0], [78, 0.18], [76, 0.36], [74, 0.6]].forEach(([m, d]) => this.marimba(m, t + d, 0.12, S));
        break;
      case 'count':
        this._tone('sine', hz(96 + (arg ?? 0)), t, 0.06, 0.05, S);
        break;
      case 'tap':
        this._tone('sine', 880, t, 0.07, 0.06, S);
        break;
      default:
    }
  }
}
