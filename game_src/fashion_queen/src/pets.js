// Pet World: 7 pets, four stats that slowly go down, and care activities (feed, wash, brush, play, outfits, bed).
import { h } from '../../cozy_kit/ui.js';
import * as L from './logic.js';
import { PETS, FOODS, PET_OUTFITS, PET_BEDS } from './data.js';
import { drawPet } from './art.js';

const OUT_ICON = { none: '❌', bow: '🎀', hat: '🎩', scarf: '🧣', crown: '👑', glasses: '🕶️' };
const VOICE = { puppy: 'bark', babydog: 'bark', kitten: 'meow', fluffy: 'meow', rabbit: 'squeak', panda: 'squeak', pony: 'neigh' };
const ACTS = [['feed', '🍖'], ['wash', '🛁'], ['brush', '🪮'], ['play', '🎾'], ['outfit', '👒'], ['bed', '🛏️']];
const STATS = [['hunger', '🍖'], ['clean', '🛁'], ['fur', '🪮'], ['fun', '🎾']];

export function petsView(g) {
  const sv = g.save;
  let act = 'feed'; let progress = 0; let happy = 0; let jump = 0; let flying = null; let toy = null; let taps = 0; let rub = false; let lastPt = null; let lastSnd = 0; let chew = 0;
  const pet = () => PETS.find((p) => p.id === sv.activePet);
  const st = () => sv.pets[sv.activePet];
  const chips = h('div', { class: 'fq-tabs' });
  const stats = h('div', { class: 'fq-row', style: 'gap:.8em' });
  const bars = {};
  for (const [k, ic] of STATS) { const b = h('b', { style: 'width:50%' }); bars[k] = b; stats.append(h('div', { class: 'fq-row', style: 'flex:1;gap:.4em' }, h('span', { style: 'font-size:calc(var(--u)*4)' }, ic), h('div', { class: 'fq-prog green' }, b))); }
  const acts = h('div', { class: 'fq-tabs' });
  const body = h('div', { style: 'display:flex;flex-direction:column;gap:1.2em;flex:1;min-height:0' });
  const panel = h('div', { class: 'fq-wrap' }, chips, stats, acts, body);
  const geo = () => { const r = g.stage; const s = Math.min(r.h / 2.6, r.w / 1.9); return { s, cx: r.x + r.w / 2, cy: r.y + r.h * 0.52 }; };

  function cared() {
    g.event('petcare'); const G = geo();
    g.reward({ coins: 12 }, G.cx, G.cy - G.s);
    g.burst(G.cx, G.cy - G.s * 0.4, ['💖', '✨', '💕'], 10); happy = 2.4; jump = 0.5;
    g.sound.play(VOICE[sv.activePet]);
  }
  function drawChips() {
    chips.replaceChildren();
    for (const p of PETS) {
      const owned = L.isOwned(sv, 'pet', p.id);
      chips.append(h('button', { class: `fq-tab${sv.activePet === p.id ? ' on' : ''}`, onclick: () => {
        const sel = () => { sv.activePet = p.id; g.commit(); progress = 0; toy = null; drawChips(); renderBody(); };
        if (owned) { g.sound.play(VOICE[p.id]); sel(); } else g.buyDialog('pet', p.id, { img: g.thumbs.pet(p.id), title: g.nameOf([p.ar, p.en]), after: sel });
      } }, h('img', { src: g.thumbs.pet(p.id), alt: '', style: 'width:calc(var(--u)*11);height:calc(var(--u)*11)' }), g.nameOf([p.ar, p.en]), owned ? null : h('span', { class: 'fq-badge', style: 'right:auto;left:-.5em;padding:0 .5em' }, '🔒')));
    }
  }
  function renderBody() {
    for (const b of acts.children) b.classList.toggle('on', b.dataset.a === act);
    body.replaceChildren();
    if (act === 'feed') {
      body.append(h('div', { class: 'fq-hd' }, g.t('hint_feed')), h('div', { class: 'fq-chips' }, FOODS.map(([e]) => h('button', { class: 'fq-chip', style: 'font-size:calc(var(--u)*8)', 'aria-label': e, onclick: () => {
        if (flying) return;
        if (!L.feedPet(st())) { g.toast(g.t('petFull')); g.sound.play('error'); return; }
        flying = { e, t: 0 }; g.sound.play('tap');
      } }, e))));
    } else if (act === 'wash' || act === 'brush') {
      body.append(h('div', { class: 'fq-h2' }, g.t(`act_pet_${act}`)), h('div', { class: 'fq-hd' }, g.t(`hint_pet_${act}`)), h('div', { class: 'fq-prog' }, h('b', { id: 'fqpp', style: `width:${progress * 100}%` })));
    } else if (act === 'play') {
      taps = 0; toy = null;
      body.append(h('div', { class: 'fq-hd' }, g.t('hint_play')), h('button', { class: 'fq-btn', onclick: () => { taps = 0; spawnToy(); g.sound.play('tap'); } }, '🎾 ', g.t('startPlay')));
    } else if (act === 'outfit') {
      body.append(h('div', { class: 'fq-chips' }, PET_OUTFITS.map((o) => h('button', { class: `fq-chip${st().outfit === o ? ' on' : ''}`, style: 'font-size:calc(var(--u)*7)', 'aria-label': o, onclick: () => { st().outfit = o; g.sound.play('equip'); happy = 1.2; g.commit(); renderBody(); } }, OUT_ICON[o]))));
    } else {
      body.append(h('div', { class: 'fq-sws' }, PET_BEDS.map((col, i) => h('button', { class: `fq-sw${st().bed === i ? ' on' : ''}`, style: `background:${col}`, 'aria-label': col, onclick: () => { st().bed = i; g.sound.play('place'); g.commit(); renderBody(); } }))));
    }
  }
  function spawnToy() { const G = geo(); const r = g.stage; toy = { x: r.x + r.w * (0.15 + Math.random() * 0.7), y: r.y + r.h * (0.15 + Math.random() * 0.25), vy: 0, e: ['🎾', '🧸', '🦴', '🪀'][Math.floor(Math.random() * 4)] }; void G; }
  for (const [k, ic] of ACTS) acts.append(h('button', { class: 'fq-tab sm', 'data-a': k, onclick: () => { act = k; progress = 0; toy = null; g.sound.play('tap'); renderBody(); } }, ic, ' ', g.t(`pact_${k}`)));
  drawChips(); renderBody();

  function rubMove(x, y) {
    if (!rub || !(act === 'wash' || act === 'brush')) return;
    const G = geo();
    if (lastPt && Math.hypot(x - G.cx, y - G.cy) < G.s * 0.9) {
      const d = Math.min(60, Math.hypot(x - lastPt.x, y - lastPt.y));
      progress = Math.min(1, progress + d / (G.s * 7));
      if (Math.random() < 0.3) g.burst(x, y, act === 'wash' ? ['🫧'] : ['💕'], 1, { speed: 50, up: 40, size: 0.035, life: 0.8 });
      const now = performance.now(); if (now - lastSnd > 130) { lastSnd = now; g.sound.play(act === 'wash' ? 'scrub' : 'brush'); }
      const bar = document.getElementById('fqpp'); if (bar) bar.style.width = `${progress * 100}%`;
      if (progress >= 1) {
        progress = 0; L.carePet(st(), act === 'wash' ? 'clean' : 'fur', 100);
        g.sound.play(act === 'wash' ? 'splash' : 'purr'); cared();
        if (bar) bar.style.width = '0%';
      }
    }
    lastPt = { x, y };
  }

  return {
    layout: 'split', music: 'calm', panel, panelH: 0.52,
    ptr: {
      down(x, y) {
        rub = true; lastPt = { x, y };
        if (toy && Math.hypot(x - toy.x, y - toy.y) < geo().s * 0.5) {
          taps++; L.carePet(st(), 'fun', 14); jump = 0.5; g.sound.play(VOICE[sv.activePet]); g.burst(toy.x, toy.y, ['⭐', '✨'], 5);
          if (taps >= 5) { toy = null; cared(); } else spawnToy();
        }
      },
      move: rubMove,
      up() { rub = false; lastPt = null; },
    },
    tick(dt) {
      for (const [k] of STATS) bars[k].style.width = `${Math.round(st()[k])}%`;
      happy = Math.max(0, happy - dt); jump = Math.max(0, jump - dt); chew = Math.max(0, chew - dt);
      if (flying) {
        flying.t += dt;
        if (flying.t >= 0.8) { flying = null; chew = 1; g.sound.play('nom'); g.burst(geo().cx, geo().cy - geo().s * 0.2, ['😋', '💖'], 4); cared(); }
      }
    },
    draw(c, dt, t) {
      g.bg('pets');
      const G = geo(); const r = g.stage;
      c.fillStyle = 'rgba(90,170,90,.45)'; c.beginPath(); c.ellipse(G.cx, r.y + r.h * 0.9, r.w * 0.5, r.h * 0.18, 0, 0, 6.3); c.fill();
      c.fillStyle = PET_BEDS[st().bed]; c.strokeStyle = '#fff'; c.lineWidth = G.s * 0.05;
      c.beginPath(); c.ellipse(G.cx, G.cy + G.s * 0.78, G.s * 0.95, G.s * 0.26, 0, 0, 6.3); c.fill(); c.stroke();
      const mood = L.petMood(st());
      const jy = jump > 0 ? -Math.abs(Math.sin((0.5 - jump) * 6.3)) * G.s * 0.4 : 0;
      drawPet(c, G.cx, G.cy + jy, G.s * 0.9, pet(), t + (chew > 0 ? chew * 8 : 0), { happy: happy > 0, sad: mood === 'sad' && happy <= 0, outfit: st().outfit });
      if (act === 'wash' && rub) { c.font = `${G.s * 0.4}px system-ui`; c.fillText('🧼', g.pointer.x, g.pointer.y); }
      if (act === 'brush' && rub) { c.font = `${G.s * 0.4}px system-ui`; c.fillText('🪮', g.pointer.x, g.pointer.y); }
      if (toy) { c.font = `${G.s * 0.55}px system-ui`; c.textBaseline = 'middle'; c.fillText(toy.e, toy.x, toy.y + Math.sin(t * 5) * 6); }
      if (flying) { const k = flying.t / 0.8; c.font = `${G.s * 0.5}px system-ui`; c.textBaseline = 'middle'; c.fillText(flying.e, G.cx + (1 - k) * G.s * 1.2, G.cy - G.s * 1.3 * (1 - k) + k * G.s * 0.05); }
      if (mood === 'sad') { c.font = `${G.s * 0.3}px system-ui`; c.textBaseline = 'middle'; c.fillText('💧', G.cx + G.s * 0.45, G.cy - G.s * 0.2 + Math.sin(t * 3) * 4); }
    },
  };
}
