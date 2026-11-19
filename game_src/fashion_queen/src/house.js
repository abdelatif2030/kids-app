// Dream House: six rooms on a grid. Pick furniture and tap a cell to place it; tap a placed piece to move, flip, recolour or remove it.
import { h } from '../../cozy_kit/ui.js';
import * as L from './logic.js';
import { ROOMS, WALLS, FLOORS } from './data.js';
import { drawFurn } from './art.js';

export function houseView(g) {
  const sv = g.save;
  let sel = null; let picked = -1; let hover = null;
  const room = () => sv.rooms[sv.room];
  const def = () => ROOMS.find((r) => r.id === sv.room);
  const tabs = h('div', { class: 'fq-tabs' });
  const body = h('div', { class: 'fq-scroll', style: 'display:flex;flex-direction:column;gap:1.2em' });
  const panel = h('div', { class: 'fq-wrap' }, tabs, body);
  const geo = () => { const r = g.stage; const cell = Math.min((r.w * 0.96) / L.GRID.cols, (r.h * 0.94) / L.GRID.rows); const ox = r.x + (r.w - cell * L.GRID.cols) / 2; const oy = r.y + (r.h - cell * L.GRID.rows) / 2; return { cell, ox, oy }; };
  const cellAt = (x, y) => { const G = geo(); const cx = Math.floor((x - G.ox) / G.cell); const cy = Math.floor((y - G.oy) / G.cell); return cx >= 0 && cy >= 0 && cx < L.GRID.cols && cy < L.GRID.rows ? [cx, cy] : null; };

  const swatches = (kind, list, cur, set) => h('div', { class: 'fq-sws' }, list.map((col, i) => {
    const id = `${kind}:${i}`; const owned = L.isOwned(sv, 'deco', id);
    return h('button', { class: `fq-sw${cur === i ? ' on' : ''}`, style: `background:${col}`, 'aria-label': col, onclick: () => {
      const go = () => { set(i); g.sound.play('place'); g.commit(); render(); };
      if (owned) go(); else g.buyDialog('deco', id, { icon: kind === 'w' ? '🖼️' : '🪵', title: g.t(kind === 'w' ? 'wallpaper' : 'floor'), after: go });
    } }, owned ? null : h('span', { class: 'lk' }, '🔒'));
  }));

  function render() {
    for (const b of tabs.children) b.classList.toggle('on', b.dataset.r === sv.room);
    body.replaceChildren();
    const r = room(); const d = def();
    body.append(h('div', { class: 'fq-hd' }, picked >= 0 ? g.t('hint_picked') : sel ? g.t('hint_place') : g.t('hint_house')));
    const pal = h('div', { class: 'fq-chips' }, d.furn.map((e, i) => {
      const id = `m:${d.id}:${i}`; const owned = L.isOwned(sv, 'deco', id);
      return h('button', { class: `fq-chip${sel === e ? ' on' : ''}`, style: 'font-size:calc(var(--u)*6.4);position:relative', 'aria-label': e, onclick: () => {
        const pickIt = () => { sel = sel === e ? null : e; picked = -1; g.sound.play('tap'); render(); };
        if (owned) pickIt(); else g.buyDialog('deco', id, { icon: e, title: g.t('furniture'), after: () => { sel = e; render(); } });
      } }, e, owned ? null : h('span', { class: 'fq-badge', style: 'font-size:calc(var(--u)*2.2)' }, `🔒${g.num(L.priceOf('deco', id).coins)}`));
    }));
    const act = h('div', { class: 'fq-row c', style: 'flex-wrap:wrap' },
      h('button', { class: 'fq-btn sm alt', disabled: picked < 0, onclick: () => { L.flipFurn(r, picked); g.sound.play('tap'); g.commit(); } }, '↔ ', g.t('flip')),
      h('button', { class: 'fq-btn sm alt', disabled: picked < 0, onclick: () => { L.recolorFurn(r, picked); g.sound.play('paint'); g.commit(); } }, '🎨 ', g.t('recolor')),
      h('button', { class: 'fq-btn sm alt', disabled: picked < 0, onclick: () => { L.removeFurn(r, picked); picked = -1; g.sound.play('remove'); g.commit(); render(); } }, '🗑 ', g.t('remove')),
      h('button', { class: 'fq-btn sm gold', onclick: () => {
        if (L.saveRoom(sv, sv.room)) { g.afterEvent(); g.sound.play('reward'); g.toast(g.t('roomSaved')); g.burst(g.cw / 2, g.ch * 0.35, ['💖', '✨', '🏠'], 8); g.reward({ coins: 15 }); } else { g.toast(g.t('roomSame')); g.sound.play('tap'); }
        g.commit();
      } }, '💾 ', g.t('saveRoom')));
    body.append(pal, act, h('div', { class: 'fq-hd' }, g.t('wallpaper')), swatches('w', WALLS, r.wall, (i) => { r.wall = i; r.dirty = true; }), h('div', { class: 'fq-hd' }, g.t('floor')), swatches('f', FLOORS, r.floor, (i) => { r.floor = i; r.dirty = true; }));
  }
  for (const ro of ROOMS) tabs.append(h('button', { class: 'fq-tab sm', 'data-r': ro.id, onclick: () => { sv.room = ro.id; sel = null; picked = -1; g.sound.play('tap'); g.commit(); render(); } }, ro.furn[0], ' ', g.nameOf([ro.ar, ro.en])));
  render();

  return {
    layout: 'split', music: 'calm', panel, panelH: 0.5,
    back() { g.go('menu'); },
    ptr: {
      move(x, y) { hover = cellAt(x, y); },
      down(x, y) {
        const cl = cellAt(x, y); hover = cl; if (!cl) return;
        const r = room(); const at = L.furnAt(r, cl[0], cl[1]);
        if (sel) {
          if (at >= 0) { picked = at; sel = null; g.sound.play('tap'); render(); return; }
          if (L.placeFurn(r, cl[0], cl[1], sel)) { g.event('place'); g.sound.play('place'); const G = geo(); g.burst(G.ox + (cl[0] + 0.5) * G.cell, G.oy + (cl[1] + 0.5) * G.cell, ['✨'], 4, { speed: 60 }); g.commit(); }
        } else if (at >= 0) { picked = at; g.sound.play('tap'); render(); }
        else if (picked >= 0 && L.moveFurn(r, picked, cl[0], cl[1])) { g.sound.play('place'); g.commit(); }
      },
    },
    draw(c, dt, t) {
      g.bg('house');
      const G = geo(); const r = room(); const W = G.cell * L.GRID.cols; const H = G.cell * L.GRID.rows; const fl = G.oy + G.cell * 2.4;
      c.fillStyle = WALLS[r.wall]; c.fillRect(G.ox, G.oy, W, fl - G.oy);
      c.fillStyle = FLOORS[r.floor]; c.fillRect(G.ox, fl, W, G.oy + H - fl);
      c.strokeStyle = 'rgba(0,0,0,.08)'; c.lineWidth = 2; for (let i = 1; i < 10; i++) { c.beginPath(); c.moveTo(G.ox, fl + ((G.oy + H - fl) * i) / 10); c.lineTo(G.ox + W, fl + ((G.oy + H - fl) * i) / 10); c.stroke(); }
      c.fillStyle = 'rgba(255,255,255,.7)'; c.fillRect(G.ox, fl - G.cell * 0.12, W, G.cell * 0.14);
      c.strokeStyle = '#fff'; c.lineWidth = 6; c.strokeRect(G.ox, G.oy, W, H);
      if (hover) { c.fillStyle = sel ? 'rgba(255,90,170,.28)' : 'rgba(255,255,255,.2)'; c.fillRect(G.ox + hover[0] * G.cell, G.oy + hover[1] * G.cell, G.cell, G.cell); }
      const order = r.items.map((it, i) => [it, i]).sort((a, b) => a[0].y - b[0].y);
      for (const [it, i] of order) {
        const x = G.ox + (it.x + 0.5) * G.cell; const y = G.oy + (it.y + 0.5) * G.cell;
        if (i === picked) { c.strokeStyle = '#ffb81a'; c.lineWidth = 4; c.setLineDash([8, 6]); c.strokeRect(x - G.cell / 2 + 2, y - G.cell / 2 + 2, G.cell - 4, G.cell - 4); c.setLineDash([]); }
        drawFurn(c, x, y + (i === picked ? Math.sin(t * 6) * 3 : 0), G.cell, it.e, it.c, it.f);
      }
      c.textBaseline = 'alphabetic';
    },
  };
}
