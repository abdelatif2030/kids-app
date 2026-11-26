import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Nutmeg Rush sound: everything is synthesised live with Web Audio (no files). A stadium crowd bed that swells with excitement,
// kick, whistle, goal roar, comet whoosh, nutmeg "ole", warning blip, UI clicks.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

export class Sound extends SynthBase {
  /** Starts the crowd (a murmur of filtered noise with a slow swell). level 0..1 is the excitement. */
  crowd(on) {
    const c = this.ctx;
    this.crowdWanted = on;
    if (!c) return;
    if (this.cr) { const o = this.cr; o.g.gain.setTargetAtTime(0.0001, c.currentTime, 0.2); setTimeout(() => { try { o.s.stop(); o.l.stop(); } catch (_) { /* fine */ } }, 900); this.cr = null; }
    if (!on) return;
    const s = c.createBufferSource(); s.buffer = this.noiseBuf; s.loop = true;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 700; f.Q.value = 0.5;
    const g = c.createGain(); g.gain.value = 0.0001;
    const l = c.createOscillator(); l.frequency.value = 0.23; const lg = c.createGain(); lg.gain.value = 0.015;
    l.connect(lg).connect(g.gain);
    s.connect(f).connect(g).connect(this.sfx); s.start(); l.start();
    g.gain.setTargetAtTime(0.075, c.currentTime, 0.6);
    this.cr = { s, g, l, f };
  }
  unlock() { super.unlock(); if (this.crowdWanted && !this.cr) this.crowd(true); }
  excite(v) { if (this.cr && this.ctx) { this.cr.g.gain.setTargetAtTime(0.06 + 0.1 * v, this.ctx.currentTime, 0.4); this.cr.f.frequency.setTargetAtTime(600 + 700 * v, this.ctx.currentTime, 0.4); } }
  dispose() { this.crowd(false); super.dispose(); }

  play(n) {
    if (typeof window !== 'undefined' && window.__cheerSfx) window.__cheerSfx(n);
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'kick': this.slide('sine', 220, 70, t, 0.14, 0.35); this.noise(t, 0.05, 0.12, 'highpass', 2000); break;
      case 'whistle': for (let i = 0; i < 2; i++) { const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = 2900; const v = c.createOscillator(); v.frequency.value = 38; const vg = c.createGain(); vg.gain.value = 90; v.connect(vg).connect(o.frequency); const g = c.createGain(); const s0 = t + i * 0.28; g.gain.setValueAtTime(0.0001, s0); g.gain.exponentialRampToValueAtTime(0.1, s0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, s0 + 0.22); o.connect(g).connect(this.sfx); o.start(s0); v.start(s0); o.stop(s0 + 0.25); v.stop(s0 + 0.25); } break;
      case 'warn': this.tone('square', 880, t, 0.07, 0.05); this.tone('square', 880, t + 0.1, 0.07, 0.05); break;
      case 'slide': this.noise(t, 0.4, 0.14, 'bandpass', 900, 1, this.sfx, 300); break;
      case 'nutmeg': this.slide('triangle', 330, 520, t, 0.18, 0.14); this.slide('triangle', 520, 392, t + 0.2, 0.3, 0.14); this.noise(t, 0.5, 0.08, 'bandpass', 1200, 0.8); break; // "o-le!"
      case 'onetwo': this.tone('triangle', hz(76), t, 0.1, 0.12); this.tone('triangle', hz(83), t + 0.12, 0.2, 0.12); break;
      case 'dodge': this.noise(t, 0.25, 0.1, 'highpass', 1500, 1, this.sfx, 5000); break;
      case 'stolen': this.slide('sawtooth', 400, 90, t, 0.45, 0.12); break;
      case 'comet': this.noise(t, 0.9, 0.18, 'highpass', 500, 1, this.sfx, 5000); [0, 7, 12, 19].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.06, 0.4, 0.1)); break;
      case 'burn': this.noise(t, 0.35, 0.16, 'lowpass', 3000, 1, this.sfx, 400); this.tone('square', hz(60), t, 0.2, 0.08); break;
      case 'shot': this.slide('sine', 260, 60, t, 0.2, 0.45); this.noise(t, 0.08, 0.18, 'highpass', 1500); break;
      case 'save': this.noise(t, 0.12, 0.2, 'lowpass', 600); this.slide('sine', 160, 70, t, 0.2, 0.3); break;
      case 'goal': this.noise(t, 2.6, 0.32, 'bandpass', 900, 0.4, this.sfx, 2200); [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('sawtooth', hz(60 + s), t + i * 0.09, 0.6, 0.06)); this.excite(1); setTimeout(() => this.excite(0.3), 2800); break;
      case 'win': [0, 4, 7, 12, 16].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.5, 0.13)); break;
      case 'coin': this.tone('square', hz(88), t, 0.05, 0.05); this.tone('square', hz(95), t + 0.05, 0.1, 0.05); break;
      case 'tap': this.tone('sine', 700, t, 0.06, 0.08); break;
      default: break;
    }
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
