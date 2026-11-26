import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const src = (p) => fs.readFileSync(new URL(p, import.meta.url), 'utf8');

test('desert race: the painted backdrop shows the WHOLE picture (no cropped rock arch = no flat blue wedge) and the trucks are smaller', () => {
  const s = src('../src/main.js');
  assert.ok(s.includes('tex.repeat.set(3, 1)') && s.includes('tex.offset.set(0, 0)'));
  assert.ok(s.includes('CylinderGeometry(780, 780, 305, 48, 1, true)'));
  assert.ok(s.includes('length: 3.8'));
  assert.ok(!s.includes('length: 4.6'));
});

test('rain race: the raindrops are small round dots of a fixed size, never big squares near the camera', () => {
  const s = src('../../rain_circuit/src/main.js');
  const i = s.indexOf('this.rain = new THREE.Points');
  const line = s.slice(i, s.indexOf('\n', i));
  assert.ok(line.includes('sizeAttenuation: false') && line.includes('map: dotTexture()'), line);
});
