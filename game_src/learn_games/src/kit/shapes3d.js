// Chunky glossy 3D shapes (circle, square, triangle, star, heart) for the learning world.
import * as THREE from 'three';

export function shapeGeo(kind, depth = 0.34, bevel = 0.07) {
  if (kind === 'pyramid') { const g = new THREE.ConeGeometry(0.95, 1.35, 4); g.rotateY(Math.PI / 4); return g; } // a solid: four faces
  const s = new THREE.Shape();
  if (kind === 'circle') s.absarc(0, 0, 0.72, 0, Math.PI * 2);
  else if (kind === 'square') { const a = 0.62, r = 0.14; s.moveTo(-a + r, -a); s.lineTo(a - r, -a); s.quadraticCurveTo(a, -a, a, -a + r); s.lineTo(a, a - r); s.quadraticCurveTo(a, a, a - r, a); s.lineTo(-a + r, a); s.quadraticCurveTo(-a, a, -a, a - r); s.lineTo(-a, -a + r); s.quadraticCurveTo(-a, -a, -a + r, -a); }
  else if (kind === 'octagon') { for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + (i * Math.PI) / 4, x = Math.cos(a) * 0.8, y = Math.sin(a) * 0.8; if (i) s.lineTo(x, y); else s.moveTo(x, y); } s.closePath(); }
  else if (kind === 'plus') { const a = 0.26, b = 0.78; s.moveTo(-a, -b); s.lineTo(a, -b); s.lineTo(a, -a); s.lineTo(b, -a); s.lineTo(b, a); s.lineTo(a, a); s.lineTo(a, b); s.lineTo(-a, b); s.lineTo(-a, a); s.lineTo(-b, a); s.lineTo(-b, -a); s.lineTo(-a, -a); s.closePath(); }
  else if (kind === 'crescent') { s.absarc(0, 0, 0.82, Math.PI * 0.32, Math.PI * 1.68, false); s.absarc(0.34, 0, 0.66, Math.PI * 1.62, Math.PI * 0.38, true); s.closePath(); }
  else if (kind === 'semicircle') { s.absarc(0, -0.3, 0.85, 0, Math.PI, false); s.closePath(); }
  else if (kind === 'trapezoid') { s.moveTo(-0.9, -0.5); s.lineTo(0.9, -0.5); s.lineTo(0.5, 0.5); s.lineTo(-0.5, 0.5); s.closePath(); }
  else if (kind === 'parallelogram') { s.moveTo(-0.9, -0.5); s.lineTo(0.5, -0.5); s.lineTo(0.9, 0.5); s.lineTo(-0.5, 0.5); s.closePath(); }
  else if (kind === 'hexagram') { for (let i = 0; i < 12; i++) { const a = Math.PI / 2 + (i * Math.PI) / 6, r = i % 2 ? 0.5 : 0.95; const x = Math.cos(a) * r, y = Math.sin(a) * r; if (i) s.lineTo(x, y); else s.moveTo(x, y); } s.closePath(); }
  else if (kind === 'drop') { s.moveTo(0, 0.95); s.bezierCurveTo(0.2, 0.5, 0.75, 0.1, 0.75, -0.3); s.bezierCurveTo(0.75, -0.75, 0.4, -0.95, 0, -0.95); s.bezierCurveTo(-0.4, -0.95, -0.75, -0.75, -0.75, -0.3); s.bezierCurveTo(-0.75, 0.1, -0.2, 0.5, 0, 0.95); }
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
