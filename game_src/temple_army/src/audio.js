import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Temple Army sound: everything is synthesised live (Web Audio). Jungle ambience + tribal drums + effects. No files.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

const FLUTE = [null, 69, null, 72, null, 74, 72, null, 69, null, 67, null, 64, null, null, 67]; // A minor pentatonic phrase
const FLUTE_BOSS = [57, null, null, 60, null, 63, null, null, 57, null, 56, null, 60, null, 59, null];

export class Sound extends SynthBase {
  constructor() { super(); this.mode = null; this.step = 0; this.nextT = 0; this.birdAt = 0; }

  setMode(m) { // 'menu' | 'play' | 'boss' | null
    if (m === this.mode) return;
    this.mode = m; this.nextT = 0; this.step = 0;
    if (!m) { this.setBed(null); return; }
    this.setBed('wind');
  }

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted || !this.mode) return;
    const tempo = this.mode === 'boss' ? 138 : this.mode === 'play' ? 112 : 94;
    const sp = 60 / tempo / 2; // eighth note
    if (!this.nextT || this.nextT < c.currentTime - 0.4) this.nextT = c.currentTime + 0.08;
    while (this.nextT < c.currentTime + 0.25) {
      const t = this.nextT; const s = this.step % 16; const boss = this.mode === 'boss';
      // drums: low tom on 0, 3, 6, 8, 11, 14, and a high tom answer
      if ([0, 3, 6, 8, 11, 14].includes(s)) this.slide('sine', 170, 62, t, 0.2, boss ? 0.5 : 0.38, this.music);
      if ([4, 12].includes(s)) this.slide('triangle', 260, 130, t, 0.12, 0.22, this.music);
      if (boss && s % 2 === 0) this.slide('sine', 110, 55, t, 0.12, 0.18, this.music);
      if (s % 2 === 1) this.noise(t, 0.05, 0.05, 'highpass', 6000, 1, this.music);
      if (s === 0) this.tone('triangle', hz(33), t, sp * 12, 0.16, this.music, 0.05); // drone
      const fl = (boss ? FLUTE_BOSS : FLUTE)[s];
      if (fl && this.mode !== 'menu' || (fl && this.mode === 'menu' && s % 4 === 1)) this.tone('sine', hz(fl + 12), t, sp * 2.2, boss ? 0.07 : 0.06, this.music, 0.03);
      this.nextT += sp; this.step++;
    }
    // birds in the canopy
    if (c.currentTime > this.birdAt && this.mode !== 'boss') {
      this.birdAt = c.currentTime + 2.5 + Math.random() * 5;
      const f = 1800 + Math.random() * 1400; const t = c.currentTime + 0.05;
      for (let i = 0; i < 3; i++) this.slide('sine', f, f * (1.2 + Math.random() * 0.3), t + i * 0.11, 0.09, 0.05, this.sfx);
    }
  }

  play(n, arg = 0) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      case 'gateGood': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.06, 0.35, 0.13)); this.tone('sine', hz(84), t + 0.2, 0.5, 0.06); break;
      case 'gateBad': this.slide('sawtooth', 330, 110, t, 0.4, 0.1); this.tone('square', hz(46), t + 0.05, 0.3, 0.06); break;
      case 'cheer': // a crowd "hooray": band-passed noise swell with a few rising voices
        this.noise(t, 0.9, 0.16, 'bandpass', 1300, 1.2, this.sfx, 1900);
        [0, 0.05, 0.1].forEach((d, i) => this.slide('sawtooth', 300 + i * 70, 520 + i * 90, t + d, 0.5, 0.025));
        break;
      case 'coin': this.tone('square', hz(88), t, 0.05, 0.05); this.tone('square', hz(95), t + 0.05, 0.1, 0.05); break;
      case 'trapWarn': this.noise(t, 0.04, 0.08, 'highpass', 3000); this.tone('square', 1400, t, 0.04, 0.05); break;
      case 'trapUp': this.noise(t, 0.12, 0.14, 'bandpass', 2400, 2); this.tone('triangle', 180, t, 0.1, 0.1); break;
      case 'lever': this.tone('sine', 90, t, 0.25, 0.3); this.noise(t, 0.12, 0.12, 'lowpass', 600); this.tone('square', 520, t + 0.08, 0.05, 0.05); break;
      case 'saw': this.slide('sawtooth', 200, 900, t, 0.3, 0.05); this.noise(t, 0.3, 0.05, 'bandpass', 3000, 3); break;
      case 'sawBreak': this.noise(t, 0.6, 0.22, 'lowpass', 1500); this.slide('sawtooth', 800, 60, t, 0.6, 0.1); [0, 5, 9].forEach((s, i) => this.tone('square', hz(90 + s), t + 0.1 + i * 0.05, 0.1, 0.04)); break;
      case 'hit': this.noise(t, 0.2, 0.2, 'lowpass', 700); this.slide('sine', 200, 50, t, 0.25, 0.3); break;
      case 'cage': this.noise(t, 0.18, 0.2, 'bandpass', 900, 1.5); this.tone('triangle', hz(60), t, 0.1, 0.1); [0, 4, 7].forEach((s, i) => this.tone('triangle', hz(76 + s), t + 0.1 + i * 0.06, 0.3, 0.1)); break;
      case 'fight': this.slide('sawtooth', 120, 90, t, 0.5, 0.1); this.noise(t, 0.4, 0.1, 'bandpass', 1100, 1); break;
      case 'clash': this.noise(t, 0.08, 0.07, 'bandpass', 2200 + Math.random() * 1500, 3); break;
      case 'roar': this.slide('sawtooth', 160, 55, t, 1.0, 0.18); this.slide('square', 90, 40, t, 1.0, 0.1); this.noise(t, 1.0, 0.12, 'lowpass', 500); break;
      case 'tele': this.tone('triangle', hz(52), t, 0.5, 0.1); this.slide('sine', 300, 600, t, 0.7, 0.05); break;
      case 'slam': this.slide('sine', 120, 30, t, 0.5, 0.5); this.noise(t, 0.5, 0.28, 'lowpass', 500); break;
      case 'crumble': this.noise(t, 1.4, 0.3, 'lowpass', 900, 1, this.sfx, 120); this.slide('sine', 80, 25, t, 1.2, 0.4); break;
      case 'open': [0, 7, 12, 19].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.08, 0.5, 0.12)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); this.slide('sine', 160, 70, t, 0.3, 0.3); break;
      case 'over': [0, -3, -7, -12].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.2, 0.5, 0.12)); break;
      case 'buy': [0, 7, 12].forEach((s, i) => this.tone('triangle', hz(80 + s), t + i * 0.06, 0.2, 0.1)); break;
      case 'poof': this.tone('sine', 900 + arg * 40, t, 0.05, 0.03); break;
      default: break;
    }
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
