// Main menu, world map, missions (daily tasks and achievements), shop and settings.
import { h } from '../../cozy_kit/ui.js';
import * as L from './logic.js';
import { WORLDS, ACHIEVEMENTS, DAILY, HAIRS, PETS, ROOMS, WALLS, FLOORS, SLOTS, CAT_ICON, CAT_NAME, ITEMS } from './data.js';
import { itemGrid } from './closet.js';

const GOTO = { equip: 'studio', fav: 'studio', buy: 'shop', salon: 'salon', makeup: 'salon', petcare: 'pets', petunlock: 'pets', place: 'house', room: 'house', runway: 'runway', runwayStars: 'runway', daily: 'missions', achieve: 'missions', coins: 'runway' };

const rewardStr = (g, r) => [r.coins ? `+${g.num(r.coins)} 🪙` : '', r.dia ? `+${g.num(r.dia)} 💎` : '', r.stars ? `+${g.num(r.stars)} ⭐` : ''].filter(Boolean).join(' ');
const badge = (n) => (n > 0 ? h('span', { class: 'fq-badge' }, n) : null);

export function menuView(g) {
  const mb = (cls, ic, label, fn, n) => h('button', { class: `fq-mb ${cls}`, onclick: () => { g.sound.play('tap'); fn(); } }, h('i', {}, ic), label, badge(n));
  const play = h('button', { class: 'fq-btn gold big', style: 'position:relative', onclick: () => { g.sound.play('ok'); g.go('map'); } }, '▶ ', g.t('play'), badge(L.levelsReady(g.save)));
  const grid = h('div', { class: 'fq-menu' },
    mb('', '👗', g.t('m_studio'), () => g.go('studio')), mb('p2', '💄', g.t('m_salon'), () => g.go('salon')), mb('p4', '🐶', g.t('m_pets'), () => g.go('pets')),
    mb('p3', '🏠', g.t('m_house'), () => g.go('house')), mb('', '🌟', g.t('m_runway'), () => g.go('runway')), mb('p4', '🎯', g.t('m_missions'), () => g.go('missions'), L.claimableCount(g.save)));
  const panel = h('div', { class: 'fq-wrap', style: 'justify-content:center' }, play, grid);
  const overlay = h('div', { class: 'fq-title-big', style: 'top:calc(var(--u)*13.5)' }, h('div', { class: 'a' }, '👑 ', g.t('title')), h('div', { class: 'b' }, g.t('subtitle')));
  return {
    layout: 'split', music: 'menu', panel, overlay, panelH: 0.5,
    draw(c, dt, t) {
      g.bg('palace');
      const r = g.stage; const rect = { x: r.x, y: r.y + g.u * 14, w: r.w, h: r.h - g.u * 14 };
      const f = g.dollFit(rect);
      g.floorShadow(c, f.cx, f.y0 + 212 * f.s, f.s);
      g.paintDoll(c, f.cx, f.y0, f.s, g.save.look, t, { wave: true, smile: true, angle: Math.sin(t * 0.7) * 0.35 });
    },
  };
}

export function mapView(g) {
  const list = h('div', { class: 'fq-list' });
  const draw = () => {
    list.replaceChildren();
    for (const w of WORLDS) {
      const st = L.worldState(g.save, w);
      const dots = h('div', { class: 'fq-dots' }, w.levels.map((_, i) => h('i', { class: i < st.idx ? 'on' : '' })));
      let mid;
      if (!st.unlocked) mid = h('div', { class: 'ss' }, `🔒 ${g.t('needStars')} ${g.num(w.need)} ⭐ (${g.num(g.save.stars)})`);
      else if (st.done) mid = h('div', { class: 'ss' }, `🏆 ${g.t('worldDone')}`);
      else {
        const lv = st.cur; const rw = L.levelRewards(w, st.idx);
        mid = h('div', { style: 'display:flex;flex-direction:column;gap:.5em' },
          h('div', { class: 'ss', style: 'font-weight:900;opacity:1' }, `${g.t('level')} ${g.num(st.idx + 1)}: ${g.nameOf([lv.ar, lv.en])}`),
          h('div', { class: 'fq-row' }, h('div', { class: 'fq-prog gold' }, h('b', { style: `width:${(st.have / lv.n) * 100}%` })), h('span', { class: 'fq-prog-lb' }, `${g.num(st.have)}/${g.num(lv.n)}`)),
          h('div', { class: 'ss' }, `🎁 ${rewardStr(g, rw.level)}${rw.chest ? `  📦 ${rewardStr(g, rw.chest)}` : ''}`));
      }
      const btn = !st.unlocked || st.done ? null : st.ready
        ? h('button', { class: 'fq-btn gold sm', onclick: () => {
          const r = L.claimLevel(g.save, w.id);
          if (r.ok) { g.reward({ coins: r.level.coins + (r.chest ? r.chest.coins : 0), dia: r.chest ? r.chest.dia : 0, stars: r.level.stars }, g.cw / 2, g.ch * 0.4); g.save.coins -= 0; g.confetti(); if (r.chest) g.toast(`📦 ${g.t('chest')}!`); draw(); }
        } }, g.t('collect'))
        : h('button', { class: 'fq-btn sm', onclick: () => { g.sound.play('tap'); g.go(GOTO[st.cur.k]); } }, g.t('goDo'));
      list.append(h('div', { class: `fq-item${!st.unlocked ? ' lock' : st.done ? ' done' : st.ready ? ' ready' : ''}` }, h('div', { class: 'ic' }, w.icon),
        h('div', { class: 'tx' }, h('div', { class: 'tt' }, g.nameOf([w.ar, w.en])), dots, mid), btn));
    }
  };
  draw();
  const panel = h('div', { class: 'fq-wrap' }, h('div', { class: 'fq-h2' }, '🗺️ ', g.t('worlds')), h('div', { class: 'fq-scroll' }, list));
  return { layout: 'full', music: 'menu', panel, draw() { g.bg('map'); } };
}

export function missionsView(g) {
  let tab = 'daily';
  const tabs = h('div', { class: 'fq-tabs', style: 'justify-content:center' });
  const body = h('div', { class: 'fq-scroll' });
  const panel = h('div', { class: 'fq-wrap' }, h('div', { class: 'fq-h2' }, '🎯 ', g.t('m_missions')), tabs, body);
  const render = () => {
    for (const b of tabs.children) b.classList.toggle('on', b.dataset.t === tab);
    const list = h('div', { class: 'fq-list' });
    if (tab === 'daily') {
      L.ensureDaily(g.save);
      for (const i of g.save.daily.pick) {
        const d = DAILY[i]; const p = Math.min(d.n, L.dailyProgress(g.save, i)); const got = !!g.save.daily.claimed[i]; const rdy = L.dailyReady(g.save, i);
        list.append(h('div', { class: `fq-item${got ? ' done' : rdy ? ' ready' : ''}` }, h('div', { class: 'ic' }, got ? '✅' : '📋'), h('div', { class: 'tx' }, h('div', { class: 'tt' }, g.nameOf([d.ar, d.en])),
          h('div', { class: 'fq-row' }, h('div', { class: 'fq-prog' }, h('b', { style: `width:${(p / d.n) * 100}%` })), h('span', { class: 'fq-prog-lb' }, `${g.num(p)}/${g.num(d.n)}`)), h('div', { class: 'ss' }, `🎁 ${rewardStr(g, d.rw)}`)),
        got ? null : h('button', { class: 'fq-btn gold sm', disabled: !rdy, onclick: () => { const r = L.claimDaily(g.save, i); if (r) { g.reward({}, g.cw / 2, g.ch * 0.4); g.refreshBar(); g.floatText(g.cw / 2, g.ch * 0.4, rewardStr(g, r), '#ffd23a'); g.afterEvent(); g.commit(); render(); } } }, g.t('collect'))));
      }
      const all = L.dailyClaimedCount(g.save) >= g.save.daily.pick.length;
      list.append(h('div', { class: `fq-item${g.save.daily.chest ? ' done' : all ? ' ready' : ' lock'}` }, h('div', { class: 'ic' }, '📦'), h('div', { class: 'tx' }, h('div', { class: 'tt' }, g.t('dailyChest')), h('div', { class: 'ss' }, `🎁 ${rewardStr(g, L.CHEST_REWARD)}`)),
        g.save.daily.chest ? null : h('button', { class: 'fq-btn gold sm', disabled: !all, onclick: () => { const r = L.claimDailyChest(g.save); if (r) { g.reward({}); g.floatText(g.cw / 2, g.ch * 0.4, rewardStr(g, r), '#ffd23a'); g.confetti(); g.commit(); render(); } } }, g.t('open'))));
    } else {
      for (const a of ACHIEVEMENTS) {
        const have = Math.min(a.n, g.save.events[a.k]); const got = !!g.save.ach[a.id]; const rdy = L.achReady(g.save, a);
        list.append(h('div', { class: `fq-item${got ? ' done' : rdy ? ' ready' : ''}` }, h('div', { class: 'ic' }, got ? '🏅' : '🎖️'), h('div', { class: 'tx' }, h('div', { class: 'tt' }, g.nameOf([a.ar, a.en])),
          h('div', { class: 'fq-row' }, h('div', { class: 'fq-prog gold' }, h('b', { style: `width:${(have / a.n) * 100}%` })), h('span', { class: 'fq-prog-lb' }, `${g.num(have)}/${g.num(a.n)}`)), h('div', { class: 'ss' }, `🎁 ${rewardStr(g, a.rw)}`)),
        got ? null : h('button', { class: 'fq-btn gold sm', disabled: !rdy, onclick: () => { const r = L.claimAch(g.save, a.id); if (r) { g.reward({}); g.floatText(g.cw / 2, g.ch * 0.4, rewardStr(g, r), '#ffd23a'); g.confetti(); g.afterEvent(); g.commit(); render(); } } }, g.t('collect'))));
      }
    }
    body.replaceChildren(list);
  };
  for (const [k, ic] of [['daily', '📅'], ['ach', '🏅']]) tabs.append(h('button', { class: 'fq-tab sm', 'data-t': k, onclick: () => { tab = k; g.sound.play('tap'); render(); } }, ic, ' ', g.t(`tab_${k}`)));
  render();
  return { layout: 'full', music: 'menu', panel, draw() { g.bg('shop'); } };
}

export function shopView(g) {
  let tab = 'clothes'; let slot = SLOTS[0];
  const tabs = h('div', { class: 'fq-tabs', style: 'justify-content:center' });
  const sub = h('div', { class: 'fq-tabs' });
  const body = h('div', { style: 'display:flex;flex-direction:column;flex:1;min-height:0;gap:1em' });
  const panel = h('div', { class: 'fq-wrap' }, tabs, sub, body);
  let grid = null;
  const cellOf = (img, name, owned, price, onclick, on) => h('button', { class: `fq-cell${on ? ' on' : ''}${owned ? '' : ' lock'}`, onclick }, img, h('span', { class: 'nm' }, name), owned ? h('span', { class: 'ck' }, '✓') : h('span', { class: 'pr' }, '🔒 ', g.priceStr(price)));
  const render = () => {
    for (const b of tabs.children) b.classList.toggle('on', b.dataset.t === tab);
    sub.style.display = tab === 'clothes' ? 'flex' : 'none';
    body.replaceChildren(); grid = null;
    if (tab === 'clothes') {
      for (const b of sub.children) b.classList.toggle('on', b.dataset.s === slot);
      grid = itemGrid(g, slot); body.append(grid.node);
    } else if (tab === 'hair') {
      const gr = h('div', { class: 'fq-grid' });
      for (const st of HAIRS) {
        const owned = L.isOwned(g.save, 'hair', st);
        gr.append(cellOf(h('img', { src: g.thumbs.hair(st, g.save.look.hairColor), alt: '' }), g.nameOf(g.hairNames[st]), owned, L.priceOf('hair', st), () => {
          if (owned) { g.save.look.hairStyle = st; g.sound.play('equip'); g.commit(); render(); } else g.buyDialog('hair', st, { img: g.thumbs.hair(st, g.save.look.hairColor), title: g.nameOf(g.hairNames[st]), after: () => { g.save.look.hairStyle = st; render(); } });
        }, g.save.look.hairStyle === st));
      }
      body.append(h('div', { class: 'fq-scroll' }, gr));
    } else if (tab === 'pets') {
      const gr = h('div', { class: 'fq-grid' });
      for (const p of PETS) {
        const owned = L.isOwned(g.save, 'pet', p.id);
        gr.append(cellOf(h('img', { src: g.thumbs.pet(p.id), alt: '' }), g.nameOf([p.ar, p.en]), owned, L.priceOf('pet', p.id), () => { if (owned) { g.sound.play('tap'); g.toast(g.t('petOwned')); } else g.buyDialog('pet', p.id, { img: g.thumbs.pet(p.id), title: g.nameOf([p.ar, p.en]), after: render }); }, false));
      }
      body.append(h('div', { class: 'fq-scroll' }, gr));
    } else {
      const gr = h('div', { class: 'fq-grid' });
      const addDeco = (id, face, name) => {
        const owned = L.isOwned(g.save, 'deco', id);
        gr.append(cellOf(face, name, owned, L.priceOf('deco', id), () => { if (owned) { g.sound.play('tap'); g.toast(g.t('have')); } else g.buyDialog('deco', id, { icon: '🏠', title: name, after: render }); }, false));
      };
      WALLS.forEach((col, i) => addDeco(`w:${i}`, h('div', { style: `background:${col};aspect-ratio:1;border-radius:.6em;width:100%` }), `${g.t('wallpaper')} ${g.num(i + 1)}`));
      FLOORS.forEach((col, i) => addDeco(`f:${i}`, h('div', { style: `background:${col};aspect-ratio:1;border-radius:.6em;width:100%` }), `${g.t('floor')} ${g.num(i + 1)}`));
      for (const ro of ROOMS) ro.furn.forEach((e, i) => { if (i >= 5) addDeco(`m:${ro.id}:${i}`, h('div', { style: 'aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*8)' }, e), `${e} ${g.nameOf([ro.ar, ro.en])}`); });
      body.append(h('div', { class: 'fq-scroll' }, gr));
    }
  };
  for (const [k, ic] of [['clothes', '👗'], ['hair', '💇'], ['pets', '🐾'], ['decor', '🏠']]) tabs.append(h('button', { class: 'fq-tab sm', 'data-t': k, onclick: () => { tab = k; g.sound.play('tap'); render(); } }, ic, ' ', g.t(`shop_${k}`)));
  for (const s of SLOTS) sub.append(h('button', { class: 'fq-tab sm', 'data-s': s, onclick: () => { slot = s; g.sound.play('tap'); render(); } }, CAT_ICON[s], ' ', g.nameOf(CAT_NAME[s])));
  render();
  return {
    layout: 'split', music: 'menu', panel, panelH: 0.56,
    draw(c, dt, t) { g.bg('shop'); const f = g.dollFit(g.stage); g.floorShadow(c, f.cx, f.y0 + 212 * f.s, f.s); g.paintDoll(c, f.cx, f.y0, f.s, g.save.look, t, { smile: true, angle: Math.sin(t * 0.8) * 0.3 }); },
  };
}

export function settingsView(g) {
  const slider = (label, key, apply) => {
    const inp = h('input', { type: 'range', min: '0', max: '100', value: String(Math.round(g.save[key] * 100)), 'aria-label': label });
    inp.addEventListener('input', () => { g.save[key] = Number(inp.value) / 100; apply(); });
    inp.addEventListener('change', () => { g.sound.unlock(); g.sound.play(key === 'sfx' ? 'reward' : 'tap'); g.commit(); });
    return h('div', { class: 'fq-slider' }, h('span', { class: 'lb' }, label), inp);
  };
  const apply = () => g.sound.setVol(g.save.music, g.save.sfx);
  const lang = h('div', { class: 'fq-row c' }, ['ar', 'en'].map((l) => h('button', { class: `fq-chip${g.lang === l ? ' on' : ''}`, style: 'font-size:calc(var(--u)*4.2)', onclick: () => g.setLang(l) }, l === 'ar' ? 'العربية' : 'English')));
  const panel = h('div', { class: 'fq-wrap' }, h('div', { class: 'fq-h2' }, '⚙️ ', g.t('m_settings')), slider(`🎵 ${g.t('music')}`, 'music', apply), slider(`🔔 ${g.t('sfx')}`, 'sfx', apply),
    h('div', { class: 'fq-row c' }, h('button', { class: 'fq-btn alt sm', onclick: () => { g.setMuted(!g.sound.muted); } }, g.sound.muted ? `🔇 ${g.t('soundOff')}` : `🔊 ${g.t('soundOn')}`)),
    h('div', { class: 'fq-hd' }, g.t('language')), lang, h('div', { class: 'fq-note' }, g.t('privacy')));
  void ITEMS;
  return { layout: 'full', music: 'menu', panel, draw() { g.bg('palace'); } };
}
