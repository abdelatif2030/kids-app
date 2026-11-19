// Fashion Queen sound: cheerful tunes and every effect made live with Web Audio (no files). Two volumes: music and effects.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

const TUNES = {
  // bouncy pop tune in C major (melody + bass in one list)
  menu: { tempo: 116, beats: 16, wave: 'triangle', vol: 0.1, notes: [[0, 76, 1], [1, 79, 1], [2, 84, 1], [3, 79, 1], [4, 77, 1], [5, 81, 1], [6, 84, 1], [7, 81, 1], [8, 79, 1], [9, 83, 1], [10, 86, 1], [11, 83, 1], [12, 84, 2], [14, 79, 1], [15, 76, 1], [0, 48, 2], [4, 53, 2], [8, 55, 2], [12, 48, 2], [2, 60, 0.5], [6, 65, 0.5], [10, 67, 0.5], [14, 60, 0.5]] },
  // softer, slower tune for the salon, pets and house
  calm: { tempo: 84, beats: 16, wave: 'sine', vol: 0.12, notes: [[0, 72, 2], [2, 76, 2], [4, 79, 2], [6, 76, 2], [8, 74, 2], [10, 77, 2], [12, 81, 2], [14, 77, 2], [0, 48, 4], [4, 53, 4], [8, 55, 4], [12, 52, 4]] },
  // faster beat for the runway
  show: { tempo: 128, beats: 16, wave: 'square', vol: 0.05, notes: [[0, 72, 0.5], [1, 72, 0.5], [2, 76, 1], [3, 79, 1], [4, 77, 0.5], [5, 77, 0.5], [6, 81, 1], [7, 84, 1], [8, 79, 0.5], [9, 79, 0.5], [10, 83, 1], [11, 86, 1], [12, 84, 2], [14, 79, 1], [15, 76, 1], [0, 48, 1], [2, 48, 1], [4, 53, 1], [6, 53, 1], [8, 55, 1], [10, 55, 1], [12, 48, 1], [14, 55, 1]] },
};

export class Sound extends SynthBase {
  constructor() { super(); this.mv = 0.7; this.sv = 0.8; this.mode = null; }

  unlock() { super.unlock(); this.applyVol(); }
  setVol(m, s) { this.mv = m; this.sv = s; this.applyVol(); }
  applyVol() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.music.gain.setTargetAtTime(this.mv * 0.55, t, 0.04);
    this.sfx.gain.setTargetAtTime(this.sv, t, 0.04);
  }
  setMode(name) { if (this.mode === name) return; this.mode = name; this.setTune(name ? TUNES[name] : null); }

  play(n) {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted || this.sv <= 0) return;
    const t = c.currentTime;
    const arp = (notes, step, vol, wave = 'triangle', len = 0.25) => notes.forEach((m, i) => this.tone(wave, hz(m), t + i * step, len, vol));
    switch (n) {
      case 'tap': this.tone('sine', 700, t, 0.06, 0.1); break;
      case 'back': this.slide('sine', 600, 380, t, 0.1, 0.09); break;
      case 'equip': arp([84, 88, 91], 0.05, 0.1, 'sine', 0.2); this.noise(t, 0.12, 0.03, 'highpass', 5000); break;
      case 'unequip': this.slide('sine', 700, 420, t, 0.12, 0.09); break;
      case 'buy': case 'coin': arp([88, 95], 0.07, 0.12, 'triangle', 0.22); this.noise(t + 0.02, 0.06, 0.05, 'bandpass', 6000, 3); break;
      case 'reward': arp([72, 76, 79, 84, 88], 0.08, 0.12, 'triangle', 0.3); break;
      case 'star': arp([88, 95, 100], 0.09, 0.1, 'sine', 0.4); break;
      case 'sparkle': for (let i = 0; i < 5; i++) this.tone('sine', hz(90 + ((i * 5) % 12)), t + i * 0.04, 0.18, 0.06); break;
      case 'splash': this.noise(t, 0.35, 0.12, 'bandpass', 1400, 0.8, this.sfx, 600); break;
      case 'scrub': this.noise(t, 0.09, 0.06, 'highpass', 3500, 0.6); break;
      case 'dry': this.noise(t, 0.16, 0.07, 'bandpass', 2400, 0.5); break;
      case 'snip': this.noise(t, 0.04, 0.12, 'bandpass', 3800, 4); this.noise(t + 0.09, 0.04, 0.12, 'bandpass', 3800, 4); break;
      case 'brush': this.noise(t, 0.12, 0.05, 'bandpass', 2200, 1); break;
      case 'paint': this.slide('sine', 500, 900, t, 0.18, 0.07); this.noise(t, 0.14, 0.04, 'bandpass', 4000, 2); break;
      case 'place': this.tone('triangle', 520, t, 0.08, 0.12); this.tone('triangle', 780, t + 0.05, 0.1, 0.1); break;
      case 'remove': this.slide('triangle', 600, 200, t, 0.18, 0.1); break;
      case 'error': this.slide('sawtooth', 220, 120, t, 0.22, 0.07); break;
      case 'nom': this.tone('sine', 190, t, 0.1, 0.16); this.tone('sine', 170, t + 0.16, 0.1, 0.16); this.tone('sine', 190, t + 0.32, 0.1, 0.14); break;
      case 'bark': this.slide('sawtooth', 340, 180, t, 0.13, 0.1); this.slide('sawtooth', 380, 200, t + 0.2, 0.13, 0.1); this.noise(t, 0.1, 0.05, 'bandpass', 900, 2); break;
      case 'meow': this.slide('triangle', 520, 820, t, 0.18, 0.1); this.slide('triangle', 820, 480, t + 0.18, 0.28, 0.1); break;
      case 'squeak': this.slide('sine', 900, 1500, t, 0.1, 0.1); this.slide('sine', 1500, 1000, t + 0.1, 0.1, 0.08); break;
      case 'neigh': this.slide('sawtooth', 300, 700, t, 0.2, 0.07); this.slide('sawtooth', 700, 260, t + 0.2, 0.3, 0.07); break;
      case 'purr': for (let i = 0; i < 6; i++) this.tone('sawtooth', 70, t + i * 0.07, 0.07, 0.05); break;
      case 'step': this.noise(t, 0.04, 0.1, 'bandpass', 2500, 5); this.tone('sine', 140, t, 0.05, 0.1); break;
      case 'flash': this.noise(t, 0.05, 0.1, 'highpass', 6000); this.tone('sine', 1800, t, 0.06, 0.05); break;
      case 'applause': for (let i = 0; i < 16; i++) this.noise(t + i * 0.09 + Math.random() * 0.05, 0.1, 0.06, 'bandpass', 1800 + Math.random() * 2500, 0.8); break;
      case 'win': arp([72, 76, 79, 84], 0.12, 0.14, 'triangle', 0.5); this.tone('triangle', hz(84), t + 0.55, 0.9, 0.12); this.tone('triangle', hz(88), t + 0.55, 0.9, 0.1); this.tone('triangle', hz(91), t + 0.55, 0.9, 0.1); break;
      case 'ok': arp([72, 79], 0.1, 0.1, 'triangle', 0.35); break;
      default: break;
    }
  }
}
