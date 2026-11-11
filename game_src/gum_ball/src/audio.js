import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Gum ball sound, made live with Web Audio (no files): a funky, bouncy city tune (slap bass, clavinet chords, a
// whistled melody, claps and shakers). The rolling is a soft rumble whose pitch drops and loudness grows with the ball.
// Effects: little pops for small things (higher for smaller), a squeaky toy for ducks and teddies, honks for cars,
// a horn for buses, a deep rumble for buildings, a bump when something is still too big, a soft nudge, the countdown,
// "go", a "BIGGER!" fanfare, ticks in the last ten seconds, the time-up whistle and star chimes. iPhone keep-alive shared.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// Em7 - A7 - Dmaj7 - Bm7 (a funky loop) [bass root, chord]
const CHORDS = [[40, [62, 67, 71, 74]], [45, [61, 64, 67, 71]], [38, [61, 66, 69, 73]], [47, [62, 66, 69, 74]], [40, [62, 67, 71, 74]], [45, [61, 64, 67, 71]], [43, [62, 66, 71, 74]], [45, [61, 64, 67, 73]]];
const MELODY = [[0, 0, 83], [0, 3, 86], [0, 6, 88], [1, 0, 85], [1, 4, 81], [2, 0, 78], [2, 2, 81], [2, 4, 85], [3, 0, 83], [3, 4, 78],
  [4, 0, 83], [4, 2, 86], [4, 4, 88], [4, 6, 90], [5, 0, 88], [5, 4, 85], [6, 0, 86], [6, 3, 83], [7, 0, 81], [7, 4, 85]];

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
    this.tempo = mode === 'play' ? 124 : 110;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
  }

  dispose() {
    clearInterval(this._timer);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
    this.rollN = null;
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

  // ---- the roll: a rumble that follows the ball ------------------------------------------------------------------

  roll(speed, size, on = true) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const c = this.ctx;
    if (!this.rollN) {
      const s = c.createBufferSource();
      s.buffer = this.noiseBuf;
      s.loop = true;
      const f = c.createBiquadFilter();
      f.type = 'lowpass';
      f.Q.value = 2;
      const g = c.createGain();
      g.gain.value = 0;
      s.connect(f).connect(g).connect(this.sfx);
      s.start();
      const o = c.createOscillator();
      o.type = 'sine';
      const og = c.createGain();
      og.gain.value = 0;
      o.connect(og).connect(this.sfx);
      o.start();
      this.rollN = { f, g, o, og };
    }
    const t = c.currentTime;
    const k = Math.min(1, speed / 12);
    const big = Math.min(1, Math.log10(1 + size) / 2);
    this.rollN.f.frequency.setTargetAtTime(900 - big * 700 + k * 300, t, 0.1);
    this.rollN.g.gain.setTargetAtTime(on ? k * (0.05 + big * 0.12) : 0, t, 0.12);
    this.rollN.o.frequency.setTargetAtTime(70 - big * 35 + k * 10, t, 0.2);
    this.rollN.og.gain.setTargetAtTime(on ? k * big * 0.12 : 0, t, 0.2);
  }

  // ---- music ----------------------------------------------------------------------------------------------------

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
      // slap bass: root, octave pops, a ghost note
      const bassPat = [0, null, 12, 0, null, 7, 12, 10];
      if (bassPat[e] !== null) this._tone(e % 3 === 2 ? 'square' : 'triangle', hz(root - 12 + bassPat[e]), t, eighth * 0.9, e % 3 === 2 ? 0.08 : 0.2, this.music, 0.004);
      // clavinet stabs on the off-beats
      if (e === 1 || e === 4 || e === 7) chord.forEach((m) => this._tone('square', hz(m - 12), t, 0.07, 0.018, this.music, 0.002));
      // a whistled melody
      for (const [bb, ee, m] of MELODY) if (bb === bar && ee === e) { const o = this._tone('sine', hz(m), t, eighth * 1.8, play ? 0.07 : 0.05, this.music, 0.02); if (o) o.detune.setValueAtTime(0, t); }
      if (play || e % 4 === 0) {
        if (e === 0 || e === 4) this._slide('sine', 130, 45, t, 0.16, 0.3, this.music); // kick
        if (e === 2 || e === 6) { this._noise(t, 0.08, 0.1, 'bandpass', 1500, 0.9, this.music); this._noise(t + 0.01, 0.05, 0.07, 'highpass', 2500, 1, this.music); } // clap
        this._noise(t, 0.04, e % 2 ? 0.035 : 0.02, 'highpass', 7000, 1, this.music); // shaker
      }
      this.step++;
      this.nextTime += eighth;
    }
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    const S = this.sfx;
    switch (name) {
      case 'pick': { // a pop: high for small things, low for big ones
        const rel = Math.max(0, Math.min(1, arg ?? 0.3));
        const f = 1400 - rel * 1000;
        this._slide('sine', f, f * 1.6, t, 0.08, 0.12);
        this._noise(t, 0.05, 0.05, 'bandpass', f * 2, 2);
        break;
      }
      case 'squeak':
        this._slide('square', 1200, 1800, t, 0.12, 0.03);
        this._slide('square', 1800, 1100, t + 0.12, 0.1, 0.025);
        break;
      case 'honk':
        [370, 466].forEach((f) => this._tone('square', f, t, 0.25, 0.03));
        break;
      case 'siren':
        this._slide('sawtooth', 700, 1000, t, 0.25, 0.025);
        this._slide('sawtooth', 1000, 700, t + 0.25, 0.25, 0.025);
        break;
      case 'horn': // a bus or a truck
        [147, 185].forEach((f) => this._tone('sawtooth', f, t, 0.5, 0.04));
        break;
      case 'rumble': // a building comes along
        this._slide('sine', 90, 35, t, 0.9, 0.4);
        this._noise(t, 1.0, 0.25, 'lowpass', 500, 0.8, S, 120);
        this._noise(t + 0.2, 0.6, 0.06, 'bandpass', 2500, 1); // glass tinkle
        break;
      case 'bump':
        this._slide('sine', 160, 60, t, 0.25, 0.3);
        this._slide('triangle', 500, 200, t, 0.2, 0.08); // boing
        break;
      case 'nudge':
        this._tone('triangle', 300, t, 0.06, 0.04);
        break;
      case 'count':
        this._tone('square', 660, t, 0.18, 0.06);
        this._tone('sine', 660, t, 0.25, 0.1);
        break;
      case 'go':
        this._tone('square', 990, t, 0.4, 0.06);
        this._tone('sine', 1320, t, 0.5, 0.1);
        break;
      case 'bigger':
        [72, 76, 79, 84, 88, 91].forEach((m, i) => this._tone('square', hz(m), t + i * 0.06, 0.18, 0.045));
        [84, 88, 91, 96].forEach((m) => this._tone('sine', hz(m), t + 0.4, 0.8, 0.05));
        break;
      case 'tick':
        this._tone('square', arg <= 3 ? 1320 : 990, t, 0.05, 0.04);
        break;
      case 'timeUp':
        this._slide('sine', 2200, 1800, t, 0.6, 0.12); // a whistle
        this._slide('sine', 2200, 1800, t + 0.7, 0.9, 0.12);
        break;
      case 'win':
        [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [79, 0.56], [84, 0.68], [88, 0.8]].forEach(([m, d]) => this.mar(m, t + d, 0.2, S));
        this._noise(t + 0.1, 1.6, 0.05, 'highpass', 6000, 1);
        break;
      case 'star':
        this.mar(88 + (arg ?? 0) * 3, t, 0.2, S);
        break;
      case 'tap':
        this._tone('sine', 880, t, 0.06, 0.05);
        break;
      case 'no':
        this._tone('square', 220, t, 0.1, 0.03);
        break;
      default:
    }
  }
}
