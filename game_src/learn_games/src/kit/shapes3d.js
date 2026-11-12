// Chunky glossy 3D shapes (circle, square, triangle, star, heart) for the learning world.
import * as THREE from 'three';

export function shapeGeo(kind, depth = 0.34, bevel = 0.07) {
  const s = new THREE.Shape();
  if (kind === 'circle') s.absarc(0, 0, 0.72, 0, Math.PI * 2);
  else if (kind === 'square') { const a = 0.62, r = 0.14; s.moveTo(-a + r, -a); s.lineTo(a - r, -a); s.quadraticCurveTo(a, -a, a, -a + r); s.lineTo(a, a - r); s.quadraticCurveTo(a, a, a - r, a); s.lineTo(-a + r, a); s.quadraticCurveTo(-a, a, -a, a - r); s.lineTo(-a, -a + r); s.quadraticCurveTo(-a, -a, -a + r, -a); }
  else if (kind === 'triangle') { s.moveTo(-0.82, -0.6); s.lineTo(0.82, -0.6); s.lineTo(0, 0.82); s.closePath(); }
  else if (kind === 'star') {
    for (let i = 0; i < 10; i++) { const a = Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 0.42 : 0.92; const x = Math.cos(a) * r, y = Math.sin(a) * r; if (i) s.lineTo(x, y); else s.moveTo(x, y); }
    s.closePath();
  } else { // heart
    s.moveTo(0, -0.78);
    s.bezierCurveTo(-0.2, -0.55, -0.9, -0.2, -0.9, 0.28);
    s.bezierCurveTo(-0.9, 0.7, -0.35, 0.85, 0, 0.4);
    s.bezierCurveTo(0.35, 0.85, 0.9, 0.7, 0.9, 0.28);
    s.bezierCurveTo(0.9, -0.2, 0.2, -0.55, 0, -0.78);
  }
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 4, curveSegments: 20 });
  g.center();
  return g;
}
