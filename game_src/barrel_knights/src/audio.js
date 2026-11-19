// Barrel Knights sound, all synthesised live (no files): march music, crowd bed, clangs, thuds, horns, creaks, rumbles.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

const MARCH = { tempo: 132, beats: 16, wave: 'square', vol: 0.045, notes: [
  [0, 62, 1], [1.5, 62, 0.5], [2, 65, 1], [3, 69, 1], [4, 67, 1.5], [5.5, 65, 0.5], [6, 62, 1], [7, 60, 1],
  [8, 62, 1], [9.5, 62, 0.5], [10, 65, 1], [11, 69, 1], [12, 72, 1.5], [13.5, 70, 0.5], [14, 69, 1], [15, 65, 1],
  [0, 38, 1], [2, 38, 1], [4, 43, 1], [6, 38, 1], [8, 38, 1], [10, 38, 1], [12, 41, 1], [14, 43, 1]] };
const CALM = { tempo: 90, beats: 16, wave: 'triangle', vol: 0.07, notes: [
  [0, 62, 2], [2, 65, 2], [4, 69, 2], [6, 67, 2], [8, 65, 2], [10, 62, 2], [12, 60, 2], [14, 62, 2], [0, 43, 4], [4, 41, 4], [8, 38, 4], [12, 43, 4]] };

export class Sound extends SynthBase {
  unlock() { super.unlock(); if (this.ctx && !this.crowdNode && this.wantCrowd) this._startCrowd(); }
  _startCrowd() {
    const c = this.ctx; if (!c) return;
    const s = c.createBufferSource(); s.buffer = this.noiseBuf; s.loop = true;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 650; f.Q.value = 0.5;
    const g = c.createGain(); g.gain.value = 0.02;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.3; const lg = c.createGain(); lg.gain.value = 0.008; lfo.connect(lg).connect(g.gain);
    s.connect(f).connect(g).connect(this.sfx); s.start(); lfo.start();
    this.crowdNode = { s, g, lfo };
  }
  crowd(on) {
    this.wantCrowd = on;
    if (!this.ctx) return;
    if (on && !this.crowdNode) this._startCrowd();
    if (this.crowdNode) this.crowdNode.g.gain.setTargetAtTime(on ? 0.02 : 0.0001, this.ctx.currentTime, 0.3);
  }
  swell(level = 0.09, secs = 2.2) {
    const c = this.ctx; if (!c || !this.crowdNode || this.muted) return;
    const g = this.crowdNode.g.gain; const t = c.currentTime;
    g.cancelScheduledValues(t); g.setTargetAtTime(level, t, 0.15); g.setTargetAtTime(0.02, t + secs, 0.6);
  }
  setMode(mode) { // 'menu' | 'play' | null
    if (!mode) { this.setTune(null); this.crowd(false); return; }
    this.setTune(mode === 'play' ? MARCH : CALM); this.crowd(mode === 'play');
  }
  play(n, p = 1) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'tap': this.tone('triangle', 640, t, 0.07, 0.09); break;
      case 'count': this.tone('square', 440, t, 0.18, 0.07); this.tone('triangle', 220, t, 0.18, 0.1); break;
      case 'go': [0, 4, 7, 12].forEach((s, i) => this.tone('square', hz(72 + s), t + i * 0.07, 0.35, 0.06)); this.noise(t, 0.25, 0.08, 'highpass', 3000); break;
      case 'dash': this.noise(t, 0.28, 0.12, 'bandpass', 1200, 1.2, this.sfx, 380); this.tone('triangle', 180, t, 0.2, 0.06); break;
      case 'clang': this.tone('square', 1320, t, 0.25, 0.07); this.tone('square', 1760, t, 0.18, 0.05); this.tone('triangle', 660, t, 0.35, 0.08); this.noise(t, 0.06, 0.1, 'highpass', 4000); break;
      case 'thud': this.slide('sine', 140, 48, t, 0.22, 0.28 * p + 0.1); this.noise(t, 0.12, 0.12 * p + 0.04, 'lowpass', 500); this.tone('triangle', 520, t, 0.06, 0.04 * p); break;
      case 'fence': this.noise(t, 0.12, 0.12 * p + 0.03, 'bandpass', 700, 1.5); this.tone('triangle', 200, t, 0.1, 0.07); break;
      case 'stun': this.slide('triangle', 700, 200, t, 0.25, 0.1); [0, 3, 7].forEach((s, i) => this.tone('sine', hz(84 + s), t + 0.25 + i * 0.08, 0.15, 0.05)); this.noise(t, 0.08, 0.1, 'highpass', 3000); break;
      case 'goal': [0, 4, 7, 12, 7, 12, 16, 19].forEach((s, i) => this.tone('sawtooth', hz(60 + s), t + i * 0.12, 0.5, 0.07)); [0, 7, 12].forEach((s) => this.tone('square', hz(48 + s), t, 1.1, 0.05)); this.swell(0.1, 2.4); this.noise(t, 1.6, 0.1, 'bandpass', 900, 0.5); break;
      case 'conceded': [0, -3, -5].forEach((s, i) => this.tone('triangle', hz(60 + s), t + i * 0.2, 0.5, 0.1)); break;
      case 'creak': this.slide('sawtooth', 120, 85, t, 0.5, 0.05); this.slide('sawtooth', 250, 160, t + 0.1, 0.4, 0.03); this.noise(t, 0.5, 0.04, 'bandpass', 500, 4); break;
      case 'dooropen': this.noise(t, 0.35, 0.16, 'lowpass', 400); this.slide('sawtooth', 160, 60, t, 0.35, 0.07); break;
      case 'doorfall': this.slide('sine', 600, 90, t, 0.6, 0.1); break;
      case 'rumble': this.noise(t, 0.5, 0.1, 'lowpass', 160, 1); this.slide('sine', 70, 45, t, 0.5, 0.16); break;
      case 'warn': this.tone('square', 520, t, 0.12, 0.05); this.tone('square', 390, t + 0.14, 0.12, 0.05); break;
      case 'mud': this.noise(t, 0.16, 0.06, 'lowpass', 300, 2); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.11, 0.6, 0.12)); this.swell(0.1, 3); break;
      case 'lose': [0, -3, -7, -12].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.22, 0.55, 0.1)); break;
      case 'coin': this.tone('square', hz(88), t, 0.05, 0.04); this.tone('square', hz(95), t + 0.05, 0.1, 0.04); break;
      case 'whistle': this.slide('sine', 2400, 2900, t, 0.35, 0.06); break;
      default: break;
    }
  }
}
