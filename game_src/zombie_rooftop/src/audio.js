import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Rooftop sound, made live with Web Audio (no files): a bouncy cartoon "spooky-fun" tune in A minor (walking bass,
// marimba, pizzicato, kick, snare and claps while fighting; a faster beat with a brass stab for the zombie king).
// Effects: a soft "pew" for the blaster, a "thunk" for the bomb launcher, a whoosh for rockets, a whistle for
// fireworks, cartoon booms, a big clang-boom for the gas tanks, silly zombie groans and "bloop" pops, coin dings,
// a bonk when the hero is bumped, wave horns, level-up and new-weapon fanfares, the launch pad's rising chime, the
// boing-whoosh of the leap, a happy win tune and a wah-wah when knocked out. The iPhone/iPad keep-alive is shared.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// Am - F - G - E ... [bass root, chord]
const CHORDS = [[45, [69, 72, 76]], [41, [69, 72, 77]], [43, [67, 71, 74]], [40, [68, 71, 76]], [45, [69, 72, 76]], [41, [65, 69, 72]], [38, [65, 69, 74]], [40, [64, 68, 71]]];
const MELODY = [[0, 0, 81], [0, 2, 84], [0, 3, 83], [0, 4, 81], [0, 6, 76], [1, 0, 77], [1, 3, 81], [1, 6, 84], [2, 0, 83], [2, 2, 79], [2, 4, 74], [3, 0, 76], [3, 3, 80], [3, 6, 83],
  [4, 0, 81], [4, 2, 76], [4, 4, 72], [4, 6, 76], [5, 0, 77], [5, 4, 81], [6, 0, 74], [6, 2, 77], [6, 4, 81], [7, 0, 80], [7, 4, 76]];

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
    this.tempo = mode === 'king' ? 150 : mode === 'play' ? 138 : 108;
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

  /** a silly zombie "uuuh": a buzzy voice through a vowel filter, with a wobble */
  _groan(t, base, len, vol) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(base * 1.15, t);
    o.frequency.linearRampToValueAtTime(base, t + len * 0.4);
    o.frequency.linearRampToValueAtTime(base * 0.8, t + len);
    const wob = c.createOscillator();
    wob.frequency.value = 7;
    const wg = c.createGain();
    wg.gain.value = base * 0.05;
    wob.connect(wg).connect(o.frequency);
    const f1 = c.createBiquadFilter();
    f1.type = 'bandpass';
    f1.frequency.setValueAtTime(500, t);
    f1.frequency.linearRampToValueAtTime(350, t + len);
    f1.Q.value = 4;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(f1).connect(g).connect(this.sfx);
    o.start(t);
    wob.start(t);
    o.stop(t + len + 0.05);
    wob.stop(t + len + 0.05);
  }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / this.tempo / 2;
    const play = this.mode === 'play' || this.mode === 'king';
    const king = this.mode === 'king';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64;
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = CHORDS[bar];
      // walking bass (a tuba-like triangle): root, fifth, octave, fifth
      const walk = [0, 7, 12, 7];
      if (e % 2 === 0) this._tone('triangle', hz(root + walk[e / 2]), t, eighth * 1.7, 0.24, this.music, 0.01);
      // pizzicato chords on the off-beats
      if (e % 2 === 1) chord.forEach((m) => this._tone('triangle', hz(m - 12), t, 0.09, 0.04, this.music, 0.003));
      if (play || e % 4 === 0) for (const [b, ee, m] of MELODY) if (b === bar && ee === e) this.mar(m, t + 0.004, play ? 0.13 : 0.09);
      if (play) {
        if (e === 0 || e === 4 || (king && e === 6)) this._slide('sine', 140, 45, t, 0.18, 0.34, this.music); // kick
        if (e === 2 || e === 6) { this._noise(t, 0.1, 0.1, 'bandpass', 1900, 0.8, this.music); if (bar % 2) this._noise(t + 0.012, 0.07, 0.06, 'highpass', 2500, 1, this.music); } // snare + clap
        this._noise(t, 0.03, e % 2 ? 0.03 : 0.018, 'highpass', 8000, 1, this.music); // hats
        if (king && e === 0 && bar % 2 === 0) chord.forEach((m) => this._tone('sawtooth', hz(m - 12), t, 0.3, 0.035, this.music, 0.01)); // brass stab
      } else if (e === 0 && bar % 2 === 0) this._noise(t, 0.05, 0.02, 'highpass', 7000, 1, this.music);
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
      case 'blaster': // a soft "pew"
        this._slide('square', 1400, 520, t, 0.09, 0.035);
        this._slide('sine', 1800, 700, t, 0.07, 0.04);
        break;
      case 'bomb': // a launcher "thunk"
        this._slide('sine', 220, 90, t, 0.16, 0.25);
        this._noise(t, 0.08, 0.08, 'lowpass', 800, 1);
        break;
      case 'rocket': // whoosh
        this._noise(t, 0.4, 0.12, 'bandpass', 900, 1.2, S, 3200);
        this._slide('sawtooth', 160, 90, t, 0.25, 0.04);
        break;
      case 'fireworks': // a rising whistle
        this._slide('sine', 900, 2400, t, 0.45, 0.06);
        this._noise(t, 0.3, 0.05, 'highpass', 5000, 1);
        break;
      case 'boom': { // a cartoon explosion
        const big = arg === 'big';
        this._slide('sine', big ? 120 : 160, 38, t, big ? 0.7 : 0.45, big ? 0.6 : 0.42);
        this._noise(t, big ? 0.9 : 0.55, big ? 0.5 : 0.32, 'lowpass', big ? 2200 : 1800, 0.7, S, 140);
        this._noise(t + 0.02, 0.25, 0.1, 'bandpass', 3200, 1);
        break;
      }
      case 'sparkle': // fireworks crackle
        for (let i = 0; i < 6; i++) this._noise(t + i * 0.05 + Math.random() * 0.03, 0.04, 0.06, 'highpass', 6000, 1);
        [88, 91, 95].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.04, 0.2, 0.03));
        break;
      case 'tank': // a clang and a big boom
        this._tone('square', 520, t, 0.25, 0.05);
        this._tone('square', 780, t, 0.2, 0.03);
        this.play('boom', 'big');
        break;
      case 'clink':
        this._tone('triangle', 1300, t, 0.12, 0.06);
        break;
      case 'hit':
        this._noise(t, 0.05, 0.05, 'bandpass', 1400, 2);
        break;
      case 'pop': { // the zombie goes "bloop" and turns into a puff
        const f = 340 + Math.random() * 160;
        this._slide('sine', f, f * 2.6, t, 0.12, 0.13);
        this._noise(t + 0.04, 0.2, 0.06, 'bandpass', 1200, 1, S, 400);
        break;
      }
      case 'groan': // a silly "uuuh" (zombies are funny here)
        this._groan(t, arg === 'brute' || arg === 'king' ? 80 : arg === 'sprinter' ? 170 : 120, arg === 'king' ? 1.1 : 0.7, arg === 'king' ? 0.14 : 0.07);
        break;
      case 'coin':
        this._tone('square', hz(88), t, 0.07, 0.025);
        this._tone('square', hz(95), t + 0.06, 0.12, 0.025);
        break;
      case 'heal':
        [76, 81, 85, 88].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.06, 0.2, 0.06));
        break;
      case 'ouch': // a cartoon bonk
        this._slide('triangle', 420, 160, t, 0.16, 0.14);
        this._noise(t, 0.08, 0.08, 'lowpass', 600, 1);
        break;
      case 'wave': // a brassy horn
        [[57, 0], [64, 0], [69, 0], [72, 0.18]].forEach(([m, d]) => this._tone('sawtooth', hz(m), t + d, 0.4, 0.05, S, 0.02));
        this._slide('sine', 60, 40, t, 0.4, 0.3);
        break;
      case 'waveClear':
        [72, 76, 79, 84].forEach((m, i) => this.mar(m, t + i * 0.09, 0.16, S));
        break;
      case 'levelUp':
        [72, 76, 79, 84, 88].forEach((m, i) => this._tone('square', hz(m), t + i * 0.07, 0.18, 0.04));
        [84, 88, 91].forEach((m) => this._tone('sine', hz(m), t + 0.36, 0.6, 0.06));
        break;
      case 'perk':
        this._slide('sine', 500, 1400, t, 0.25, 0.1);
        [88, 91].forEach((m, i) => this._tone('triangle', hz(m), t + 0.15 + i * 0.06, 0.25, 0.05));
        break;
      case 'weapon': // power chord + sparkle
        [57, 64, 69].forEach((m) => this._tone('sawtooth', hz(m), t, 0.6, 0.05, S, 0.01));
        [84, 88, 91, 96].forEach((m, i) => this._tone('sine', hz(m), t + 0.1 + i * 0.06, 0.3, 0.06));
        break;
      case 'pad': // the launch pad lights up
        [69, 73, 76, 81, 85, 88].forEach((m, i) => this._tone('triangle', hz(m), t + i * 0.07, 0.3, 0.06));
        break;
      case 'leap': // boing + whoosh
        this._slide('sine', 180, 900, t, 0.35, 0.22);
        this._noise(t + 0.1, 1.0, 0.12, 'bandpass', 600, 0.8, S, 2400);
        break;
      case 'land':
        this._slide('sine', 120, 50, t, 0.2, 0.3);
        this._noise(t, 0.15, 0.1, 'lowpass', 700, 1);
        break;
      case 'king': // the zombie king arrives (a comic roar)
        this._groan(t, 60, 1.6, 0.2);
        this._slide('sawtooth', 110, 55, t, 1.2, 0.05);
        break;
      case 'win':
        [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [79, 0.56], [84, 0.68], [88, 0.8]].forEach(([m, d]) => this.mar(m, t + d, 0.2, S));
        this._noise(t + 0.1, 1.4, 0.04, 'highpass', 6000, 1);
        break;
      case 'knocked': // wah, wah, wah, waaah
        [[62, 0], [61, 0.32], [60, 0.64]].forEach(([m, d]) => this._slide('sawtooth', hz(m), hz(m) * 0.97, t + d, 0.3, 0.06));
        this._slide('sawtooth', hz(59), hz(56), t + 0.96, 0.9, 0.06);
        break;
      case 'star':
        this.mar(88 + (arg ?? 0) * 3, t, 0.2, S);
        break;
      case 'buy':
        [79, 84, 88].forEach((m, i) => this._tone('triangle', hz(m), t + i * 0.06, 0.2, 0.07));
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
