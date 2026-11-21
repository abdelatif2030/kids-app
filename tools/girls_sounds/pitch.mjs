import fs from 'node:fs';
const f = process.argv[2];
const b = fs.readFileSync(f); const n = (b.length - 44) / 2; const x = new Float32Array(n);
for (let i = 0; i < n; i++) x[i] = b.readInt16LE(44 + i * 2) / 32768;
const sr = 22050; const start = Math.floor(0.05 * sr), len = Math.floor(0.4 * sr);
let best = 0, bl = 0;
for (let lag = Math.floor(sr / 1500); lag < Math.floor(sr / 100); lag++) { let s = 0, e1 = 0, e2 = 0; for (let i = 0; i < len; i++) { s += x[start + i] * x[start + i + lag]; e1 += x[start + i] ** 2; e2 += x[start + i + lag] ** 2; } const c = s / Math.sqrt(e1 * e2 + 1e-9); if (c > best) { best = c; bl = lag; } }
const hz = sr / bl; const midi = 69 + 12 * Math.log2(hz / 440);
let peak = 0; for (let i = 0; i < n; i++) peak = Math.max(peak, Math.abs(x[i]));
console.log(f, 'hz', hz.toFixed(1), 'midi', midi.toFixed(2), 'corr', best.toFixed(2), 'peak', peak.toFixed(2), 'dur', (n / sr).toFixed(2));
