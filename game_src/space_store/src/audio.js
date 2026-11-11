import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Space-station shop sound, made live with Web Audio (no files): a bright space-lounge tune with a sparkly synth
// arpeggio, airy pads, a soft bass and electro drums. Effects: hover-basket bloops that climb with the stack, rack
// clacks, shuttle whooshes, the scanner beep at the till and a "ka-ching", star-coin chimes, pad ticks, a robot
// bleep-bloop, unlock and completion fanfares. The iPhone/iPad keep-alive is shared with the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
const CHORDS = [[45, [57, 60, 64, 67]], [41, [57, 60, 65, 69]], [43, [59, 62, 67, 71]], [40, [55, 59, 64, 67]]];

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
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.01, len / 4));
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
    g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  /** A soft synth pluck through a resonant low-pass (the arpeggio). */
  _synth(m, t, len, vol, cutoff = 2200) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = 'sawtooth';
    o.frequency.value = hz(m);
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.Q.value = 6;
    lp.frequency.setValueAtTime(cutoff, t);
    lp.frequency.exponentialRampToValueAtTime(400, t + len);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(lp).connect(g).connect(this.music);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  _padChord(chord, t, len, vol) {
    const c = this.ctx;
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 900;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + len * 0.3);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    lp.connect(g).connect(this.music);
    for (const m of chord) for (const d of [-7, 7]) {
      const o = c.createOscillator();
      o.type = 'triangle';
      o.frequency.value = hz(m);
      o.detune.value = d;
      o.connect(lp);
      o.start(t);
      o.stop(t + len + 0.05);
    }
  }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const play = this.mode === 'play';
    const sixteenth = 60 / this.tempo / 4;
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64; // 4 bars of 16ths
      const bar = Math.floor(step / 16);
      const e = step % 16;
      const [root, chord] = CHORDS[bar];
      if (e === 0) this._padChord(chord, t, sixteenth * 16, play ? 0.03 : 0.04);
      if (e % 4 === 0) this._slide('sine', 140, 48, t, 0.16, play ? 0.24 : 0.16, this.music);
      if (e === 4 || e === 12) this._noise(t, 0.12, 0.07, 'bandpass', 2200, 0.8, this.music);
      if (e % 2 === 1) this._noise(t, 0.03, 0.02, 'highpass', 8000, 0.8, this.music);
      if (e % 4 === 2) this._tone('sine', hz(root - 12), t, sixteenth * 2.5, 0.12, this.music, 0.01);
      // a sparkly arpeggio up and down the chord
      const arp = [0, 1, 2, 3, 2, 1][e % 6];
      this._synth(chord[arp % chord.length] + 12, t, sixteenth * 1.6, play ? 0.022 : 0.03, play ? 1800 : 2600);
      this.step++;
      this.nextTime += sixteenth;
    }
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    const S = this.sfx;
    switch (name) {
      case 'pick': // a bloop that climbs with the stack
        this._slide('sine', 400 + (arg ?? 1) * 40, 900 + (arg ?? 1) * 60, t, 0.1, 0.1);
        break;
      case 'rack':
        this._tone('square', 330, t, 0.05, 0.04);
        this._tone('sine', 200, t, 0.08, 0.1);
        break;
      case 'full':
        this._tone('sine', 660, t, 0.1, 0.06);
        this._tone('sine', 880, t + 0.1, 0.12, 0.06);
        break;
      case 'arrive': // a shuttle whoosh and a soft landing
        this._noise(t, 0.9, 0.06, 'bandpass', 500, 0.8, S, 2200);
        this._slide('sine', 600, 200, t + 0.6, 0.3, 0.05);
        break;
      case 'beep': // the scanner at the till
        this._tone('square', 1800, t, 0.09, 0.04);
        break;
      case 'sold':
        this._tone('square', 1800, t, 0.08, 0.04);
        this._tone('sine', hz(96), t + 0.1, 0.25, 0.08);
        this._tone('sine', hz(100), t + 0.16, 0.25, 0.06);
        break;
      case 'coin': {
        const m = 84 + Math.min(14, arg ?? 0);
        this._tone('sine', hz(m), t, 0.15, 0.07);
        this._tone('sine', hz(m + 7), t + 0.04, 0.12, 0.05);
        break;
      }
      case 'pay':
        this._tone('triangle', 500 + (arg ?? 0) * 800, t, 0.06, 0.05);
        break;
      case 'unlock':
        [72, 76, 79, 84, 88].forEach((m, i) => this._tone('square', hz(m), t + i * 0.06, 0.18, 0.04));
        this._noise(t + 0.3, 0.8, 0.05, 'highpass', 6000, 0.6);
        break;
      case 'robot': // bleep-bloop
        [88, 81, 91, 84].forEach((m, i) => this._tone('square', hz(m), t + i * 0.08, 0.07, 0.04));
        break;
      case 'complete':
        [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [88, 0.6], [91, 0.75], [96, 0.95]].forEach(([m, d]) => this._tone('square', hz(m), t + d, 0.3, 0.05));
        this._noise(t + 0.9, 1.5, 0.05, 'highpass', 5000, 0.6);
        break;
      case 'tap':
        this._tone('sine', 880, t, 0.06, 0.05);
        break;
      case 'no':
        this._tone('square', 220, t, 0.12, 0.04);
        break;
      default:
    }
  }
}
