import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Hero Tower sound, made live with Web Audio (no files): a brave little march (bass, plucked chords, a bright
// glockenspiel tune), and effects for every thing in the tower: a sword's metallic ring, a crystal's sparkle, a potion's
// bubbles, the key and the chest's fanfare, a defeated foe's "pop", a gentle bonk when a foe is stronger, the ladder
// climb, the roars of the troll, the sorcerer and the dragon (a soft growl, never scary), and the win tune.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// a march in C major, 4/4: C - Am - F - G, twice [bass, chord]
const CHORDS = [[48, [60, 64, 67]], [45, [57, 60, 64]], [41, [57, 60, 65]], [43, [59, 62, 67]], [48, [60, 64, 67]], [45, [57, 60, 64]], [41, [60, 65, 69]], [43, [59, 62, 67]]];
// [bar, eighth, midi]
const MELODY = [[0, 0, 72], [0, 3, 76], [0, 6, 79], [1, 0, 81], [1, 4, 79], [1, 6, 76], [2, 0, 77], [2, 3, 81], [2, 6, 84], [3, 0, 83], [3, 4, 79], [3, 6, 74],
  [4, 0, 76], [4, 3, 79], [4, 6, 84], [5, 0, 81], [5, 4, 84], [5, 6, 88], [6, 0, 86], [6, 3, 84], [6, 6, 81], [7, 0, 79], [7, 4, 76], [7, 6, 72]];

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.mode = 'off';
    this.plucks = new Map();
  }

  unlock() {
    iosKeepAlive();
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const c = (this.ctx = new AC());
      iosWatch(this.ctx, () => !!(this.held || this._held));
      this.master = c.createGain();
      this.master.gain.value = this.muted ? 0 : 0.9;
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 6;
      this.master.connect(comp).connect(c.destination);
      this.music = c.createGain();
      this.music.gain.value = 0.4;
      this.music.connect(this.master);
      this.sfx = c.createGain();
      this.sfx.gain.value = 0.8;
      this.sfx.connect(this.master);
      const delay = c.createDelay(0.8);
      delay.delayTime.value = 0.36;
      const fb = c.createGain();
      fb.gain.value = 0.22;
      const wet = c.createGain();
      wet.gain.value = 0.18;
      this.music.connect(delay);
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
      // a tiny silent wav: some phone browsers only open game sound after a normal audio element played once
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
  suspend() {
    iosPause(); this.held = true; if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() {
    iosKeepAlive(); this.held = false; if (this.ctx && this.ctx.state !== 'running') this.ctx.resume(); }

  setMode(mode, force) {
    if (this.mode === mode && !force) return;
    this.mode = mode;
    if (!this.ctx) return;
    this.tempo = mode === 'play' ? 112 : 100;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
  }

  dispose() {
    clearInterval(this._timer);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
  }

  // ---- instruments ----------------------------------------------------------------------------------------------

  _tone(type, f, t, len, vol, dest = this.sfx, a = 0.005) {
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
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.02, len / 4));
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
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  /** marimba: a sine with a fast-fading overtone */
  mar(m, t, vol, dest = this.music) {
    const f = hz(m);
    this._tone('sine', f, t, 0.35, vol, dest, 0.003);
    this._tone('sine', f * 4, t, 0.05, vol * 0.3, dest, 0.002);
  }

  // ---- music (a march: eight eighths a bar) ---------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / this.tempo / 2;
    const play = this.mode === 'play';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64;
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = CHORDS[bar];
      if (e === 0 || e === 4) this._tone('triangle', hz(root - 12), t, eighth * 3, 0.17, this.music, 0.008);
      if (e === 2 || e === 6) chord.forEach((m) => this._tone('triangle', hz(m - 12), t, 0.18, 0.03, this.music, 0.004));
      if (e === 0 && play) this._noise(t, 0.05, 0.03, 'lowpass', 900, 1, this.music); // a soft drum
      if (e === 4 && play) this._noise(t, 0.06, 0.025, 'highpass', 5000, 1, this.music);
      for (const [bb, ee, m] of MELODY) if (bb === bar && ee === e) { this._tone('sine', hz(m), t, 0.4, play ? 0.075 : 0.06, this.music, 0.003); this._tone('sine', hz(m) * 4, t, 0.1, 0.014, this.music, 0.002); }
      this.step++;
      this.nextTime += eighth;
    }
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    switch (name) {
      case 'tap': this._tone('sine', 880, t, 0.06, 0.05); break;
      case 'no': this._tone('square', 220, t, 0.1, 0.03); break;
      case 'hit': // a foe is defeated: a pop and a rising "plink" (the louder the more power)
        this._noise(t, 0.07, 0.07, 'highpass', 2500, 1);
        this._slide('triangle', 300, 900, t, 0.18, 0.08);
        this._tone('sine', hz(84 + Math.min(arg || 0, 10)), t + 0.08, 0.3, 0.05);
        break;
      case 'sword': [84, 91].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.05, 0.5, 0.06)); this._noise(t, 0.12, 0.05, 'highpass', 6500, 2); break;
      case 'potion': for (let i = 0; i < 4; i++) this._slide('sine', 400 + i * 120, 900 + i * 160, t + i * 0.06, 0.12, 0.05); break;
      case 'crystal': [88, 91, 95, 100].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.06, 0.45, 0.05)); break;
      case 'key': [91, 96].forEach((m, i) => this._tone('triangle', hz(m), t + i * 0.08, 0.3, 0.06)); break;
      case 'chest': [[72, 0], [76, 0.1], [79, 0.2], [84, 0.3]].forEach(([m, d]) => this._tone('triangle', hz(m), t + d, 0.4, 0.07)); this._noise(t + 0.3, 0.3, 0.04, 'highpass', 7000, 1); break;
      case 'lose': // gentle: a soft bonk and a falling two-note
        this._tone('sine', 180, t, 0.18, 0.12); this._noise(t, 0.08, 0.04, 'lowpass', 500, 1);
        [[71, 0.12], [64, 0.3]].forEach(([m, d]) => this._tone('triangle', hz(m), t + d, 0.4, 0.05));
        break;
      case 'climb': for (let i = 0; i < 5; i++) this._tone('square', 300 + i * 40, t + i * 0.11, 0.05, 0.02); break;
      case 'power': [76, 79, 83].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.07, 0.35, 0.05)); break;
      case 'roar': // a friendly growl
        this._slide('sawtooth', 130, 70, t, 0.6, 0.06); this._noise(t, 0.5, 0.05, 'lowpass', 500, 1);
        break;
      case 'fire': this._noise(t, 0.9, 0.09, 'bandpass', 700, 0.7, this.sfx, 2200); break;
      case 'win':
        [[72, 0], [76, 0.14], [79, 0.28], [84, 0.42], [79, 0.62], [84, 0.76], [88, 0.95]].forEach(([m, d]) => { this._tone('triangle', hz(m), t + d, 0.5, 0.08); this._tone('sine', hz(m) * 2, t + d, 0.2, 0.03); });
        for (let i = 0; i < 6; i++) this._noise(t + 0.2 + i * 0.07, 0.05, 0.025, 'highpass', 7500, 1);
        break;
      default:
    }
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
