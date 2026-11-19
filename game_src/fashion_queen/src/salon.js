// Beauty Salon: hair wash and dry (rub with the finger), hair style, hair colour, makeup, jewelry. Each finished activity pays coins.
import { h } from '../../cozy_kit/ui.js';
import * as L from './logic.js';
import { HAIRS, HAIR_COLORS, SKINS, LIPS, BLUSH, SHADOW, NAILS, LASHES, CAT_ICON, CAT_NAME } from './data.js';
import { itemGrid } from './closet.js';

const mix = (a, b, k) => {
  const pa = parseInt(a.slice(1), 16); const pb = parseInt(b.slice(1), 16);
  const ch = (sh) => Math.round(((pa >> sh) & 255) * (1 - k) + ((pb >> sh) & 255) * k).toString(16).padStart(2, '0');
  return `#${ch(16)}${ch(8)}${ch(0)}`;
};
const ACTS = [['wash', '🫧'], ['dry', '💨'], ['style', '✂️'], ['color', '🎨'], ['makeup', '💄'], ['jewel', '💍']];
const MK = [['shadow', '👁️'], ['lips', '💋'], ['blush', '🌸'], ['skin', '🧴'], ['lash', '✨'], ['nails', '💅']];

export function salonView(g) {
  let act = 'wash'; let mk = 'shadow'; let jw = 'neck';
  let progress = 0; let finished = false; let foam = []; let foamFade = 1; let wet = 0;
  let anim = null; let rub = null; let lastSnd = 0; let lastPt = null;
  const lastReward = {};
  const look = g.save.look;
  const tabs = h('div', { class: 'fq-tabs' });
  const body = h('div', { style: 'display:flex;flex-direction:column;gap:1.2em;flex:1;min-height:0' });
  const panel = h('div', { class: 'fq-wrap' }, tabs, body);
  const geo = () => { const r = g.stage; const s = (r.h * 0.97) / 138; return { r, s, cx: r.x + r.w / 2, y0: r.y + 10 * s }; };

  function done(kind, makeup) {
    g.event('salon'); if (makeup) g.event('makeup');
    const G = geo(); const now = performance.now();
    const coins = kind === 'wash' || kind === 'dry' ? 20 : 10;
    if (now - (lastReward[kind] || 0) > 20000 || coins >= 20) { lastReward[kind] = now; g.reward({ coins }, G.cx, G.y0 + 20 * G.s); } else g.sound.play('sparkle');
    g.burst(G.cx, G.y0 + 30 * G.s, ['✨', '💖', '⭐'], 10);
  }

  /** Move a tool over the face, then apply the change. */
  function apply(tool, tx, ty, change, kind, makeup, snd) {
    if (anim) return;
    const G = geo();
    anim = { e: tool, x0: G.cx + G.r.w * 0.3, y0: G.y0 + 60 * G.s, x1: G.cx + tx * G.s, y1: G.y0 + ty * G.s, t: 0, dur: 0.65, then: () => { change(); g.sound.play('sparkle'); done(kind, makeup); g.commit(); renderBody(); } };
    g.sound.play(snd || 'paint');
  }

  const sw = (list, cur, pick, o = {}) => {
    const wrap = h('div', { class: 'fq-sws' });
    if (o.none) wrap.append(h('button', { class: `fq-sw none${!cur ? ' on' : ''}`, 'aria-label': g.t('none'), onclick: () => pick(null) }));
    for (const col of list) wrap.append(h('button', { class: `fq-sw${cur === col ? ' on' : ''}`, style: `background:${col}`, 'aria-label': col, onclick: () => pick(col) }));
    return wrap;
  };

  function renderBody() {
    body.replaceChildren();
    for (const b of tabs.children) b.classList.toggle('on', b.dataset.a === act);
    if (act === 'wash' || act === 'dry') {
      body.append(h('div', { class: 'fq-h2' }, g.t(`act_${act}`)), h('div', { class: 'fq-hd' }, g.t(`hint_${act}`)),
        h('div', { class: 'fq-row' }, h('div', { class: 'fq-prog' }, h('b', { id: 'fqprog', style: `width:${progress * 100}%` }))), h('div', { class: 'fq-note', id: 'fqmsg' }, finished ? `✨ ${g.t('allDone')}` : ''));
    } else if (act === 'style') {
      const grid = h('div', { class: 'fq-grid' });
      for (const st of HAIRS) {
        const owned = L.isOwned(g.save, 'hair', st);
        const pick = () => {
          const go = () => { if (look.hairStyle === st) return; apply('✂️', 0, 12, () => { look.hairStyle = st; }, 'style', false, 'snip'); };
          if (!owned) g.buyDialog('hair', st, { img: g.thumbs.hair(st, look.hairColor), title: g.nameOf(g.hairNames[st]), after: () => { renderBody(); go(); } }); else go();
        };
        grid.append(h('button', { class: `fq-cell${look.hairStyle === st ? ' on' : ''}${owned ? '' : ' lock'}`, onclick: pick }, h('img', { src: g.thumbs.hair(st, look.hairColor), alt: '' }), h('span', { class: 'nm' }, g.nameOf(g.hairNames[st])),
          owned ? null : h('span', { class: 'pr' }, '🔒 ', g.priceStr(L.priceOf('hair', st)))));
      }
      body.append(h('div', { class: 'fq-h2' }, g.t('act_style')), h('div', { class: 'fq-scroll' }, grid));
    } else if (act === 'color') {
      body.append(h('div', { class: 'fq-h2' }, g.t('act_color')), sw(HAIR_COLORS, look.hairColor, (col) => { if (col !== look.hairColor) apply('🖌️', 0, 12, () => { look.hairColor = col; }, 'color'); }));
    } else if (act === 'makeup') {
      const mt = h('div', { class: 'fq-tabs' });
      for (const [k, ic] of MK) mt.append(h('button', { class: `fq-tab sm${mk === k ? ' on' : ''}`, onclick: () => { mk = k; g.sound.play('tap'); renderBody(); } }, ic, ' ', g.t(`mk_${k}`)));
      const set = (key, tool, tx, ty) => (col) => { if (col !== look[key]) apply(tool, tx, ty, () => { look[key] = col; }, 'makeup', true); };
      let s;
      if (mk === 'shadow') s = sw(SHADOW, look.shadow, set('shadow', '🖌️', 8, 27), { none: true });
      else if (mk === 'lips') s = sw(LIPS, look.lips, set('lips', '💄', 0, 45), { none: true });
      else if (mk === 'blush') s = sw(BLUSH, look.blush, set('blush', '🖌️', 12, 38), { none: true });
      else if (mk === 'skin') s = sw(SKINS, look.skin, set('skin', '🧽', 0, 36));
      else if (mk === 'nails') s = sw(NAILS, look.nails, set('nails', '💅', 24, 106), { none: true });
      else {
        s = h('div', { class: 'fq-chips' }, LASHES.map((l) => h('button', { class: `fq-chip${look.lash === l ? ' on' : ''}`, onclick: () => { if (l !== look.lash) apply('🪄', 8, 26, () => { look.lash = l; }, 'makeup', true); } }, g.t(`lash_${l}`))));
      }
      body.append(mt, h('div', { class: 'fq-scroll' }, s));
    } else {
      const jt = h('div', { class: 'fq-tabs' });
      for (const k of ['neck', 'ears', 'wrist', 'head']) jt.append(h('button', { class: `fq-tab sm${jw === k ? ' on' : ''}`, onclick: () => { jw = k; g.sound.play('tap'); renderBody(); } }, CAT_ICON[k], ' ', g.nameOf(CAT_NAME[k])));
      body.append(jt, itemGrid(g, jw, (r) => { if (r === 'on') done('jewel', false); }).node);
    }
  }
  for (const [k, ic] of ACTS) tabs.append(h('button', { class: 'fq-tab', 'data-a': k, onclick: () => { act = k; progress = 0; finished = false; foam = []; foamFade = 1; wet = k === 'dry' ? 1 : 0; g.sound.play('tap'); renderBody(); } }, h('i', {}, ic), g.t(`act_${k}`)));
  renderBody();

  const inHead = (x, y) => { const G = geo(); const dx = (x - G.cx) / (36 * G.s); const dy = (y - (G.y0 + 38 * G.s)) / (52 * G.s); return dx * dx + dy * dy <= 1; };
  function rubMove(x, y) {
    if (!(act === 'wash' || act === 'dry') || !rub) return;
    const G = geo();
    if (finished) return;
    if (lastPt && inHead(x, y)) {
      const d = Math.min(60, Math.hypot(x - lastPt.x, y - lastPt.y));
      progress = Math.min(1, progress + d / (G.s * 260));
      const now = performance.now();
      if (act === 'wash') { if (d > 3 && foam.length < 70 && Math.random() < 0.7) foam.push({ x: (Math.random() - 0.5) * 60, y: 8 + Math.random() * 56, r: 3 + Math.random() * 6 }); wet = progress; }
      else { wet = 1 - progress; if (Math.random() < 0.25) g.burst(x, y, ['💨'], 1, { speed: 60, up: 20, size: 0.03, life: 0.6 }); }
      if (now - lastSnd > 110) { lastSnd = now; g.sound.play(act === 'wash' ? 'scrub' : 'dry'); }
      const bar = document.getElementById('fqprog'); if (bar) bar.style.width = `${progress * 100}%`;
      if (progress >= 1) { finished = true; if (act === 'wash') { foamFade = 1; wet = 1; g.sound.play('splash'); } else wet = 0; done(act, false); const m = document.getElementById('fqmsg'); if (m) m.textContent = `✨ ${g.t('allDone')}`; }
    }
    lastPt = { x, y };
  }

  return {
    layout: 'split', music: 'calm', panel, panelH: 0.5,
    ptr: {
      down(x, y) { rub = true; lastPt = { x, y }; if ((act === 'wash' || act === 'dry') && finished) { progress = 0; finished = false; foam = []; wet = act === 'dry' ? 1 : 0; foamFade = 1; renderBody(); } },
      move(x, y) { rubMove(x, y); },
      up() { rub = null; lastPt = null; },
    },
    tick(dt) {
      if (anim) { anim.t += dt; if (anim.t >= anim.dur) { const a = anim; anim = null; a.then(); } }
      if (finished && act === 'wash' && foamFade > 0) foamFade = Math.max(0, foamFade - dt * 0.8);
    },
    draw(c, dt, t) {
      g.bg('salon');
      const G = geo();
      c.save(); c.beginPath(); c.rect(G.r.x, G.r.y, G.r.w, G.r.h); c.clip();
      const lk = { ...look, hairColor: wet > 0 ? mix(look.hairColor, '#303050', 0.45 * wet) : look.hairColor };
      g.paintDoll(c, G.cx, G.y0, G.s, lk, t, { smile: true, angle: 0 });
      if (act === 'wash') {
        const k = finished ? foamFade : 1;
        c.fillStyle = `rgba(255,255,255,${0.9 * k})`; c.strokeStyle = `rgba(150,200,255,${0.8 * k})`; c.lineWidth = 1.2;
        for (const b of foam) { c.beginPath(); c.arc(G.cx + b.x * G.s * 0.55, G.y0 + b.y * G.s * 0.55 - 4 * G.s + (finished ? (1 - k) * 30 * G.s : 0), b.r * G.s * 0.8, 0, 6.3); c.fill(); c.stroke(); }
      }
      if (act === 'dry' && g.pointer.down) { c.save(); c.translate(g.pointer.x, g.pointer.y); c.rotate(-0.5); c.fillStyle = '#ff6ab0'; c.strokeStyle = '#fff'; c.lineWidth = 3; c.beginPath(); c.roundRect(-G.s * 9, -G.s * 5, G.s * 18, G.s * 10, G.s * 3); c.fill(); c.stroke(); c.fillStyle = '#b04ae8'; c.fillRect(-G.s * 3, G.s * 4, G.s * 6, G.s * 10); c.restore(); }
      if (anim) {
        const k = anim.t / anim.dur; const e = k * k * (3 - 2 * k);
        const x = anim.x0 + (anim.x1 - anim.x0) * e + Math.sin(k * 24) * G.s * 1.5; const y = anim.y0 + (anim.y1 - anim.y0) * e + Math.cos(k * 20) * G.s;
        c.font = `${G.s * 14}px system-ui`; c.textBaseline = 'middle'; c.fillText(anim.e, x, y);
      }
      c.restore();
    },
  };
}
