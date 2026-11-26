import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Dino Grow sound: everything is synthesised live (Web Audio), no files. Per-level ambience beds (jungle birds and insects,
// swamp bubbles and frogs, volcano rumble), per-level music, stomps that get deeper with size, chomp, evolve fanfare, roars.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

const TUNES = {
  jungle: { tempo: 112, beats: 16, wave: 'triangle', vol: 0.07, notes: [[0, 62, 1], [1, 65, 1], [2, 69, 1], [3, 65, 1], [4, 60, 1], [5, 64, 1], [6, 67, 1], [7, 64, 1], [8, 62, 1], [9, 65, 1], [10, 69, 1], [11, 72, 1], [12, 71, 2], [14, 67, 2], [0, 38, 2], [4, 36, 2], [8, 38, 2], [12, 43, 2]] },
  swamp: { tempo: 84, beats: 16, wave: 'sine', vol: 0.11, notes: [[0, 57, 2], [2, 60, 1], [3, 63, 1], [4, 57, 2], [6, 56, 2], [8, 55, 2], [10, 58, 1], [11, 62, 1], [12, 60, 3], [0, 33, 4], [8, 31, 4]] },
  volcano: { tempo: 128, beats: 16, wave: 'sawtooth', vol: 0.045, notes: [[0, 45, 1], [1, 45, 1], [2, 48, 1], [3, 45, 1], [4, 51, 1], [5, 50, 1], [6, 48, 1], [7, 45, 1], [8, 45, 1], [9, 45, 1], [10, 52, 1], [11, 50, 1], [12, 48, 1], [13, 46, 1], [14, 45, 2], [0, 33, 2], [4, 33, 2], [8, 31, 2], [12, 28, 2]] },
};

export class Sound extends SynthBase {
  setMode(level) {
    this.level = level;
    clearInterval(this._amb);
    if (level === null || level === undefined) { this.setBed(null); this.setTune(null); return; }
    const id = ['jungle', 'swamp', 'volcano'][level];
    this.setBed(id === 'volcano' ? 'wind' : id === 'swamp' ? 'waves' : 'wind');
    this.setTune(TUNES[id]);
    this._amb = setInterval(() => this._ambience(id), 650);
  }

  _ambience(id) {
    const c = this.ctx; if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime; const r = Math.random();
    if (id === 'jungle') {
      if (r < 0.45) { const f = 1800 + Math.random() * 1400; this.slide('sine', f, f * 1.4, t, 0.09, 0.035); this.slide('sine', f * 1.3, f, t + 0.12, 0.09, 0.03); }
      else if (r < 0.7) for (let i = 0; i < 6; i++) this.tone('square', 3200, t + i * 0.035, 0.02, 0.012);
    } else if (id === 'swamp') {
      if (r < 0.55) { const f = 200 + Math.random() * 300; this.slide('sine', f, f * 2.2, t, 0.12, 0.05); }
      else if (r < 0.75) { this.slide('square', 140, 90, t, 0.18, 0.025); this.slide('square', 150, 80, t + 0.2, 0.15, 0.02); }
    } else if (r < 0.5) { this.noise(t, 0.9, 0.12, 'lowpass', 160, 1, this.sfx, 60); if (r < 0.15) this.noise(t + 0.3, 0.05, 0.05, 'highpass', 3000); }
  }

  play(n, a = 1) {
    if (typeof window !== 'undefined' && window.__cheerSfx) window.__cheerSfx(n);
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'stomp': { const s = Math.min(1, a); this.slide('sine', 120 - s * 60, 40, t, 0.12 + s * 0.12, 0.08 + s * 0.2); this.noise(t, 0.08 + s * 0.1, 0.03 + s * 0.08, 'lowpass', 300 - s * 150); break; }
      case 'chomp': this.noise(t, 0.09, 0.14, 'bandpass', 1200, 2); this.slide('square', 400, 120, t, 0.1, 0.07); this.tone('triangle', hz(84), t + 0.08, 0.1, 0.07); break;
      case 'pounce': this.noise(t, 0.28, 0.12, 'bandpass', 700, 1, this.sfx, 2200); this.slide('triangle', 200, 520, t, 0.2, 0.08); break;
      case 'bump': this.noise(t, 0.25, 0.2, 'lowpass', 900, 1, this.sfx, 200); this.slide('sawtooth', 220, 70, t, 0.25, 0.1); break;
      case 'evolve': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(60 + s), t + i * 0.09, 0.5, 0.15)); this.slide('sawtooth', 90, 45, t, 0.5, 0.12); this.noise(t + 0.6, 0.4, 0.1, 'highpass', 4000); break;
      case 'roar': this.slide('sawtooth', 140, 55, t, 0.9, 0.2); this.slide('square', 100, 40, t, 0.9, 0.1); this.noise(t, 0.9, 0.16, 'bandpass', 500, 1.5, this.sfx, 150); break;
      case 'growl': this.slide('sawtooth', 110, 70, t, 0.35, 0.09); this.noise(t, 0.3, 0.06, 'bandpass', 400, 2); break;
      case 'alert': this.tone('square', 520, t, 0.08, 0.06); this.tone('square', 410, t + 0.1, 0.1, 0.06); break;
      case 'telegraph': this.slide('triangle', 200, 420, t, 0.5, 0.09); break;
      case 'fire': this.noise(t, 0.5, 0.18, 'bandpass', 900, 1, this.sfx, 300); this.slide('sawtooth', 300, 100, t, 0.4, 0.08); break;
      case 'bossHit': this.noise(t, 0.4, 0.2, 'lowpass', 1400); [0, 5, 9].forEach((s, i) => this.tone('square', hz(72 + s), t + i * 0.06, 0.2, 0.09)); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24, 28].forEach((s, i) => this.tone('triangle', hz(66 + s), t + i * 0.11, 0.6, 0.14)); break;
      case 'star': this.tone('triangle', hz(84), t, 0.3, 0.12); this.tone('sine', hz(96), t + 0.04, 0.3, 0.08); break;
      case 'lose': [0, -3, -7].forEach((s, i) => this.tone('triangle', hz(64 + s), t + i * 0.18, 0.4, 0.1)); break;
      case 'tap': this.tone('sine', 700, t, 0.06, 0.08); break;
      default: break;
    }
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
