// Fashion Studio (and the dress-up step of the runway): category tabs, item grid with buy-on-tap, rotating doll, favourite looks.
import { h } from '../../cozy_kit/ui.js';
import * as L from './logic.js';
import { SLOTS, CAT_ICON, CAT_NAME, ITEMS } from './data.js';
import { THEMES } from './data.js';

export function wearItem(g, it, onDone) {
  const r = L.toggleItem(g.save.look, it.id);
  const f = g.dollFit(g.stage);
  if (r === 'on') { g.event('equip'); g.sound.play('equip'); g.burst(f.cx, g.stage.y + g.stage.h * 0.4, ['✨', '💖'], 6, { speed: 90 }); } else g.sound.play('unequip');
  g.commit();
  if (onDone) onDone(r);
}

/** A grid of the items of one slot. Locked ones ask before buying. */
export function itemGrid(g, slot, onWear) {
  const grid = h('div', { class: 'fq-grid' });
  const node = h('div', { class: 'fq-scroll' }, grid);
  function refresh() {
    grid.replaceChildren();
    const items = ITEMS.filter((i) => i.slot === slot);
    items.sort((a, b) => (L.isOwned(g.save, 'item', b.id) - L.isOwned(g.save, 'item', a.id)));
    for (const it of items) {
      const owned = L.isOwned(g.save, 'item', it.id);
      const worn = g.save.look.outfit[slot] === it.id;
      const act = () => {
        if (!owned) { g.buyDialog('item', it.id, { img: g.thumb(it), title: g.itemName(it), after: () => { wearItem(g, it, () => { refresh(); if (onWear) onWear('on'); }); refresh(); } }); return; }
        wearItem(g, it, (r) => { refresh(); if (onWear) onWear(r); });
      };
      grid.append(h('button', { class: `fq-cell${worn ? ' on' : ''}${owned ? '' : ' lock'}`, 'aria-label': g.itemName(it), onclick: act },
        h('img', { src: g.thumb(it), alt: '' }), h('span', { class: 'nm' }, g.nameOf(g.styleNames[it.style])),
        worn ? h('span', { class: 'ck' }, '✓') : null, owned ? null : h('span', { class: 'pr' }, '🔒 ', g.priceStr({ coins: it.price, dia: it.diamonds }))));
    }
  }
  refresh();
  return { node, refresh };
}

export function looksModal(g, onLoad) {
  const draw = () => {
    const box = h('div', { class: 'fq-card fq-pop' }, h('div', { class: 'fq-h2' }, '📂 ', g.t('myLooks')));
    if (!g.save.favs.length) box.append(h('div', { class: 'fq-note' }, g.t('noLooks')));
    const grid = h('div', { class: 'fq-looks' });
    g.save.favs.forEach((f, i) => grid.append(h('div', { class: 'fq-look' }, h('img', { src: g.thumbs.look(f), alt: '' }), h('div', { class: 'fq-row' },
      h('button', { onclick: () => { L.loadFav(g.save, i); g.sound.play('equip'); g.commit(); dim.remove(); onLoad(); } }, g.t('wear')),
      h('button', { class: 'x', 'aria-label': g.t('delete'), onclick: () => { L.deleteFav(g.save, i); g.commit(); const n = draw(); dim.replaceChildren(n); } }, '🗑')))));
    box.append(grid, h('button', { class: 'fq-btn alt', onclick: () => dim.remove() }, g.t('close')));
    return box;
  };
  const dim = g.modal(draw());
}

export function closetView(g, arg = {}) {
  const runway = arg.mode === 'runway';
  const theme = arg.theme;
  let slot = SLOTS[0];
  let ang = 0; let target = 0; let drag = null;
  const tabs = h('div', { class: 'fq-tabs' });
  const holder = h('div', { style: 'display:flex;flex-direction:column;flex:1;min-height:0' });
  let grid = null;
  const meter = runway ? h('div', { class: 'fq-meter' }) : null;
  const barFill = h('b', { style: 'width:0' });
  const barTxt = h('span', { class: 'fq-prog-lb' }, '');

  function upd() {
    if (!runway) return;
    const sc = L.scoreOutfit(g.save.look, theme);
    barFill.style.width = `${sc.total}%`; barTxt.textContent = `${'⭐'.repeat(sc.stars)}`;
  }
  function showSlot(s) {
    slot = s;
    for (const b of tabs.children) b.classList.toggle('on', b.dataset.slot === s);
    grid = itemGrid(g, s, () => { upd(); });
    holder.replaceChildren(grid.node);
    g.sound.play('tap');
  }
  for (const s of SLOTS) tabs.append(h('button', { class: 'fq-tab', 'data-slot': s, onclick: () => showSlot(s) }, h('i', {}, CAT_ICON[s]), g.nameOf(CAT_NAME[s])));

  if (runway) {
    meter.append(h('div', { class: 'ic' }, theme.icon), h('div', { style: 'flex:1;display:flex;flex-direction:column;gap:.5em;min-width:0' },
      h('div', { class: 'fq-hd', style: 'text-align:start;font-weight:900' }, g.nameOf([theme.ar, theme.en])),
      h('div', { class: 'fq-tags' }, theme.need.map((x) => h('span', {}, g.t(`tag_${x}`)))), h('div', { class: 'fq-row' }, h('div', { class: 'fq-prog gold' }, barFill), barTxt)));
  }
  const panel = h('div', { class: 'fq-wrap' }, meter, tabs, holder);
  const mkBtn = (txt, label, fn, cls = 'fq-round') => h('button', { class: cls, 'aria-label': label, onclick: () => { g.sound.play('tap'); fn(); } }, txt);
  const tools = h('div', { style: 'display:contents' },
    mkBtn('◀', g.t('turn'), () => { target -= Math.PI; }), mkBtn('🔄', g.t('spin'), () => { target += Math.PI * 2; }), mkBtn('▶', g.t('turn'), () => { target += Math.PI; }),
    mkBtn('🧹', g.t('clearSlot'), () => { if (g.save.look.outfit[slot]) { delete g.save.look.outfit[slot]; g.sound.play('unequip'); g.commit(); grid.refresh(); upd(); } }),
    mkBtn('❤', g.t('saveLook'), () => { if (L.saveFav(g.save, g.save.look)) { g.sound.play('reward'); g.toast(g.t('lookSaved')); g.burst(g.cw / 2, g.stage.y + g.stage.h * 0.4, ['💖', '✨'], 8); g.afterEvent(); g.commit(); } else g.toast(g.t('looksFull')); }),
    mkBtn('📂', g.t('myLooks'), () => looksModal(g, () => { grid.refresh(); upd(); })),
    runway ? h('button', { class: 'fq-btn gold', onclick: () => { g.sound.play('ok'); g.go('show', { theme }); } }, '▶ ', g.t('go')) : null);

  showSlot(slot);
  upd();
  const inStage = (x, y) => x >= g.stage.x && x <= g.stage.x + g.stage.w && y >= g.stage.y && y <= g.stage.y + g.stage.h;
  return {
    layout: 'split', music: 'menu', panel, tools, panelH: 0.52,
    back() { g.go(runway ? 'runway' : 'menu'); },
    ptr: {
      down(x, y) { if (inStage(x, y)) drag = { x, a: target }; },
      move(x) { if (drag) { target = drag.a + ((x - drag.x) / (g.stage.w * 0.35)) * Math.PI; ang = target; } },
      up() { if (drag) { target = Math.round(target / Math.PI) * Math.PI; drag = null; } },
    },
    tick(dt) { if (!drag) ang += (target - ang) * Math.min(1, dt * 7); },
    draw(c, dt, t) {
      g.bg('studio');
      const f = g.dollFit(g.stage);
      g.floorShadow(c, f.cx, f.y0 + 212 * f.s, f.s);
      g.paintDoll(c, f.cx, f.y0, f.s, g.save.look, t, { angle: ang, smile: true });
    },
  };
}
void THEMES;
