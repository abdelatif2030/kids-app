// Runway: pick one of 8 themes, dress up for it (closet), then the show: walk, spotlights, crowd, judges' stars and rewards.
import { h } from '../../cozy_kit/ui.js';
import * as L from './logic.js';
import { THEMES } from './data.js';

export function runwayPickView(g) {
  const grid = h('div', { class: 'fq-grid wide' });
  for (const th of THEMES) {
    const best = g.save.runway[th.id] || 0;
    grid.append(h('button', { class: 'fq-item', style: 'cursor:pointer;font-family:inherit;text-align:start', onclick: () => { g.sound.play('ok'); g.go('studio', { mode: 'runway', theme: th }); } },
      h('div', { class: 'ic' }, th.icon), h('div', { class: 'tx' }, h('div', { class: 'tt' }, g.nameOf([th.ar, th.en])), h('div', { class: 'fq-tags' }, th.need.map((x) => h('span', {}, g.t(`tag_${x}`)))), h('div', { class: 'ss' }, best ? '⭐'.repeat(best) + '☆'.repeat(3 - best) : '☆☆☆'))));
  }
  const panel = h('div', { class: 'fq-wrap' }, h('div', { class: 'fq-h2' }, '🌟 ', g.t('runwayTitle')), h('div', { class: 'fq-hd' }, g.t('runwayPick')), h('div', { class: 'fq-scroll' }, grid));
  return { layout: 'full', music: 'show', panel, draw() { g.bg('runway'); } };
}

export function runwayShowView(g, arg) {
  const theme = arg.theme;
  const look = JSON.parse(JSON.stringify(g.save.look));
  const sc = L.scoreOutfit(look, theme);
  let time = 0; let phase = 'walk'; let stepPh = 0; const flashes = [];
  const WALK = 5; const POSE = 2.2;
  const crowd = Array.from({ length: 14 }, (_, i) => ({ side: i % 2 ? 1 : -1, row: Math.floor(i / 2), e: ['😀', '😍', '🤩', '👏', '🥳', '😊', '💖'][i % 7], ph: Math.random() * 6 }));

  function result() {
    phase = 'result';
    const r = L.finishRunway(g.save, theme.id, sc.stars);
    g.refreshBar(); g.afterEvent(); g.commit();
    g.sound.play(sc.stars === 3 ? 'win' : 'ok'); g.sound.play('applause');
    g.voice.say(sc.stars === 3 ? 'win' : 'charge');
    if (sc.stars >= 2) g.confetti();
    const st = h('div', { class: 'fq-stars' }, [0, 1, 2].map((i) => h('span', { class: i < sc.stars ? '' : 'off' }, '⭐')));
    const spans = [...st.children];
    spans.forEach((sp, i) => setTimeout(() => { sp.classList.add('in'); if (i < sc.stars) g.sound.play('star'); }, 500 + i * 450));
    const parts = [r.coins ? `+${g.num(r.coins)} 🪙` : '', r.dia ? `+${g.num(r.dia)} 💎` : '', r.stars ? `+${g.num(r.stars)} ⭐` : ''].filter(Boolean).join('   ');
    g.modal(h('div', { class: 'fq-card fq-pop' }, h('div', { class: 'fq-bigicon' }, sc.stars === 3 ? '👑' : theme.icon), h('div', { class: 'fq-h2' }, g.t(`judge${sc.stars}`)), st,
      h('div', { class: 'fq-price' }, `${g.num(sc.total)} / ${g.num(100)}`), h('div', { class: 'fq-small' }, g.t(sc.parts.style < 25 ? 'tipStyle' : sc.parts.basics < 30 ? 'tipBasics' : sc.parts.makeup < 6 ? 'tipMakeup' : 'tipGreat')),
      h('div', { class: 'fq-price', style: 'font-size:calc(var(--u)*4.4)' }, parts),
      h('div', { class: 'fq-row' }, h('button', { class: 'fq-btn alt', onclick: () => g.go('runway') }, g.t('themes')), h('button', { class: 'fq-btn', onclick: () => g.go('studio', { mode: 'runway', theme }) }, g.t('again'))),
      h('button', { class: 'fq-btn dark', onclick: () => g.go('menu') }, g.t('menu'))), { dismiss: false });
  }

  return {
    layout: 'stage', music: 'show', back() { g.go('runway'); },
    tick(dt) {
      time += dt;
      if (phase === 'walk') {
        const w = Math.sin(time * 8); if (w * stepPh <= 0 && w !== 0) g.sound.play('step'); stepPh = w;
        if (time >= WALK) { phase = 'pose'; g.sound.play('applause'); }
      } else if (phase === 'pose') {
        if (Math.random() < 0.25) { flashes.push({ x: Math.random(), y: 0.3 + Math.random() * 0.6, t: 0 }); if (Math.random() < 0.5) g.sound.play('flash'); }
        if (time >= WALK + POSE) result();
      }
      for (const f of flashes) f.t += dt;
      while (flashes.length && flashes[0].t > 0.25) flashes.shift();
    },
    draw(c, dt, t) {
      const W = g.cw; const H = g.ch;
      g.bg('runway');
      // crowd along both sides of the runway
      c.textBaseline = 'middle';
      for (const p of crowd) {
        const y = H * (0.42 + p.row * 0.075); const x = W * (p.side < 0 ? 0.08 + (p.row % 3) * 0.05 : 0.92 - (p.row % 3) * 0.05);
        c.font = `${H * (0.042 + p.row * 0.004)}px system-ui`; c.fillText(p.e, x, y + Math.sin(t * 4 + p.ph) * H * 0.008);
      }
      const k = phase === 'walk' ? Math.min(1, time / WALK) : 1; const e = k * k * (3 - 2 * k);
      const feet = H * (0.4 + 0.5 * e); const s = (H * (0.26 + 0.42 * e)) / 228;
      const cx = W / 2 + (phase === 'walk' ? Math.sin(time * 4) * W * 0.012 * e : 0);
      // spotlight
      const gr = c.createRadialGradient(cx, feet - 100 * s, 10, cx, feet - 100 * s, H * 0.55);
      gr.addColorStop(0, 'rgba(255,255,230,.5)'); gr.addColorStop(1, 'rgba(255,255,230,0)'); c.fillStyle = gr; c.fillRect(0, 0, W, H);
      c.save(); c.globalAlpha = 0.18; c.fillStyle = '#fff';
      for (const sd of [-1, 1]) { c.beginPath(); c.moveTo(W / 2 + sd * W * 0.45, 0); c.lineTo(cx + Math.sin(t * 1.5 + sd) * W * 0.12 - s * 20, feet); c.lineTo(cx + Math.sin(t * 1.5 + sd) * W * 0.12 + s * 20, feet); c.closePath(); c.fill(); }
      c.restore();
      g.floorShadow(c, cx, feet, s);
      const winning = phase !== 'walk';
      g.paintDoll(c, cx, feet - 212 * s, s, look, t, { walk: phase === 'walk', wave: winning && sc.stars >= 2, smile: true, angle: 0 });
      for (const f of flashes) { c.fillStyle = `rgba(255,255,255,${0.9 - f.t * 3.6})`; c.beginPath(); c.arc(f.x * W, f.y * H, H * 0.04, 0, 6.3); c.fill(); }
      c.font = `900 ${H * 0.045}px Tajawal,system-ui`; c.fillStyle = '#ffd23a'; c.strokeStyle = '#7a1a60'; c.lineWidth = H * 0.01;
      const lbl = `${theme.icon} ${g.nameOf([theme.ar, theme.en])}`; c.textBaseline = 'middle'; c.strokeText(lbl, W / 2, H * 0.17); c.fillText(lbl, W / 2, H * 0.17);
    },
  };
}
