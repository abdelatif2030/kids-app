import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Underwater sound, made live with Web Audio (no files): a warm, slowly breathing pad, a bubbly music-box arpeggio,
// soft bass, a muffled kick and brushes while defending, a darker progression for the octopus; little bubbles rise
// now and then. Effects: soft bloops for the stream, pops and chimes for beaten fish, a thud when the wall is hit, a
// sparkling level-up, shimmering powers, repair tones, shell "tinks", the whirlpool's swirl, the octopus's bubbly
// growl and ink, and win / try-again tunes. The iPhone/iPad keep-alive is shared with the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// D major-ish, dreamy: D - Bm - G - A ... [bass, chord]
const CHORDS = [[38, [62, 66, 69]], [35, [59, 62, 66]], [43, [59, 62, 67]], [45, [61, 64, 69]], [38, [62, 66, 69]], [43, [62, 67, 71]], [40, [59, 64, 67]], [45, [61, 64, 69]]];
const BOSS = [[38, [62, 65, 69]], [34, [58, 62, 65]], [36, [60, 64, 67]], [37, [61, 64, 69]]];

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
    this.tempo = mode === 'boss' ? 104 : mode === 'play' ? 96 : 80;
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
    g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  /** A soft underwater pad: two detuned triangles through a slowly moving low-pass. */
  _pad(m, t, len, vol) {
    const c = this.ctx;
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(500, t);
    lp.frequency.linearRampToValueAtTime(1100, t + len * 0.5);
    lp.frequency.linearRampToValueAtTime(500, t + len);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + len * 0.3);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    lp.connect(g).connect(this.music);
    for (const d of [-6, 6]) {
      const o = c.createOscillator();
      o.type = 'triangle';
      o.frequency.value = hz(m);
      o.detune.value = d;
      o.connect(lp);
      o.start(t);
      o.stop(t + len + 0.05);
    }
  }

  /** A bubbly music-box note. */
  _bell(m, t, vol = 0.06, dest = this.music) {
    this._tone('sine', hz(m), t, 0.9, vol, dest, 0.003);
    this._tone('sine', hz(m) * 2.98, t, 0.25, vol * 0.25, dest, 0.003);
  }

  setTension(x) { this.tension = x; }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.25;
    const boss = this.mode === 'boss';
    const play = this.mode === 'play' || boss;
    const eighth = 60 / this.tempo / 2;
    const prog = boss ? BOSS : CHORDS;
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64; // 8 bars of 8 eighths
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = prog[bar % prog.length];
      if (e === 0) {
        this._pad(chord[0], t, eighth * 8.2, play ? 0.035 : 0.045);
        this._pad(chord[1], t, eighth * 8.2, 0.03);
        this._pad(chord[2], t, eighth * 8.2, 0.025);
        this._tone('sine', hz(root), t, eighth * 3, boss ? 0.16 : 0.12, this.music, 0.02); // soft bass
      }
      if (boss && e === 4) this._tone('sine', hz(root), t, eighth * 2, 0.12, this.music, 0.02);
      // bubbly arpeggio
      const arp = chord[(e * 2 + bar) % 3] + 12 + (e >= 4 ? 12 : 0);
      if (play || e % 2 === 0) this._bell(arp, t + 0.01, play ? 0.035 : 0.03);
      if (play) {
        if (e === 0 || e === 4) this._slide('sine', 110, 45, t, 0.25, boss ? 0.28 : 0.2, this.music); // soft kick
        if (e === 2 || e === 6) this._noise(t, 0.12, 0.03, 'bandpass', 1800, 0.8, this.music); // brushed snare
        if (e % 2 === 1) this._noise(t, 0.03, 0.015, 'highpass', 7000, 0.8, this.music);
      }
      // a few rising bubbles now and then
      if (e === 5 && Math.random() < 0.35) for (let k = 0; k < 3; k++) this._slide('sine', 500 + Math.random() * 300, 1300 + Math.random() * 600, t + k * 0.06, 0.06, 0.018, this.music);
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
      case 'shoot': // a soft bloop (the stream is fast, so it is quiet)
        this._slide('sine', 380 + Math.random() * 60, 820, t, 0.06, 0.035);
        break;
      case 'hit':
        this._slide('sine', 900, 1500, t, 0.05, 0.05);
        break;
      case 'kill': // a pop and a little chime
        this._noise(t, 0.08, 0.1, 'bandpass', 1400, 1.4);
        this._slide('sine', 600, 1600, t, 0.09, 0.1);
        this._bell(84 + (arg ?? 0) % 5 * 2, t + 0.04, 0.05, S);
        break;
      case 'wallHit':
        this._tone('sine', 90, t, 0.3, 0.3);
        this._noise(t, 0.25, 0.14, 'lowpass', 700, 0.8);
        break;
      case 'levelUp':
        [72, 76, 79, 84, 88, 91].forEach((m, i) => this._bell(m, t + i * 0.06, 0.09, S));
        this._noise(t, 0.6, 0.05, 'highpass', 5000, 0.6);
        break;
      case 'power':
        [84, 91, 96].forEach((m, i) => this._bell(m, t + i * 0.08, 0.1, S));
        break;
      case 'repair':
        [60, 64, 67, 72].forEach((m, i) => this._tone('triangle', hz(m), t + i * 0.08, 0.3, 0.08));
        break;
      case 'bounce':
        this._tone('sine', 1800 + Math.random() * 300, t, 0.08, 0.05);
        break;
      case 'whirl':
        this._noise(t, 1.4, 0.12, 'bandpass', 300, 1.5, S, 1600);
        this._slide('sine', 200, 600, t, 1.2, 0.05);
        break;
      case 'boss': {
        // a deep bubbly growl
        const c = this.ctx;
        const o = c.createOscillator();
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(70, t);
        o.frequency.linearRampToValueAtTime(52, t + 1.4);
        const lfo = c.createOscillator();
        lfo.frequency.value = 12;
        const lg = c.createGain();
        lg.gain.value = 14;
        lfo.connect(lg).connect(o.frequency);
        const lp = c.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 520;
        const g = c.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.2, t + 0.2);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 1.5);
        o.connect(lp).connect(g).connect(S);
        o.start(t);
        lfo.start(t);
        o.stop(t + 1.6);
        lfo.stop(t + 1.6);
        for (let k = 0; k < 8; k++) this._slide('sine', 300, 900, t + 0.2 + k * 0.08, 0.08, 0.04);
        break;
      }
      case 'ink':
        this._noise(t, 0.2, 0.1, 'lowpass', 900, 1, S, 300);
        this._slide('sine', 300, 140, t, 0.2, 0.08);
        break;
      case 'bossHit':
        this._tone('sine', 160, t, 0.08, 0.1);
        break;
      case 'bossDown':
        this._noise(t, 1.2, 0.16, 'lowpass', 1500, 0.7, S, 200);
        [60, 64, 67, 72, 76, 79, 84].forEach((m, i) => this._bell(m, t + 0.3 + i * 0.1, 0.12, S));
        break;
      case 'wave':
        [67, 72, 79].forEach((m, i) => this._bell(m, t + i * 0.12, 0.08, S));
        break;
      case 'win':
        [[72, 0], [76, 0.15], [79, 0.3], [84, 0.45], [88, 0.7], [91, 0.85], [96, 1.05]].forEach(([m, d]) => this._bell(m, t + d, 0.13, S));
        break;
      case 'lose':
        [79, 75, 72, 67].forEach((m, i) => this._bell(m, t + i * 0.2, 0.1, S));
        break;
      case 'buy':
        [84, 88, 91, 96].forEach((m, i) => this._bell(m, t + i * 0.06, 0.1, S));
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
