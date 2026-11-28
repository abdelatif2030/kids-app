// «معركة حلبة الجليد» — Ice Rink Brawl. Entry: window.IceRink.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Turn-based physics battle: pull a hero back and let go, chain-hit goblins off crystals and teammates, then the goblins move.
// Rules/physics live in sim.js (deterministic, tested). This file draws everything in code on a 2D canvas, no art files.
import {
  createState, fire, step, drain, previewPath, heroes, foes, teamHp, teamMax, LEVELS, HEROES, HERO_ORDER, W, H, DT, normalizeSave, upgradeCost,
} from './sim.js';
import { Sound } from './audio.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { loadArt } from '../../cozy_kit/art.js';
import { VoiceCoach } from '../../cozy_kit/voice.js';

const RINK_CLIPS = { trick: 3, charge: 2, bump: 3, pickup: 2, near: 1, win: 2, lose: 2, count: 1 };
// Pictures made for the game (assets/games/ice_rink/art/): when one is loaded it replaces the code-drawn hero or goblin.
let ART = {};
function pic(g, img, R) {
  const hh = R * 2.7, w = (hh * img.naturalWidth) / img.naturalHeight;
  g.drawImage(img, -w / 2, R * 1.0 - hh, w, hh);
}

const S = {
  title: ['حلبة شرم', 'Sharm Ice Rink'], play: ['يلا نلعب', 'Play'], levels: ['المراحل', 'Levels'], heroes: ['الأبطال', 'Heroes'],
  exit: ['خروج', 'Exit'], menu: ['القائمة', 'Menu'], resume: ['كمّل', 'Resume'], restart: ['من الأول', 'Restart'], next: ['المرحلة الجاية', 'Next level'],
  retry: ['جرّب تاني', 'Try again'], level: ['المرحلة', 'Level'], yourTurn: ['دورك!', 'Your turn!'], foeTurn: ['دور الفريق التاني!', 'The other team moves!'],
  won: ['كسبت!', 'You won!'], lost: ['الفريق التاني كسب', 'The other team won'], lostText: ['أبطالك محتاجين راحة. جرّب تاني!', 'Your heroes need a rest. Try again!'],
  coins: ['عملات', 'Coins'], howTo: ['اسحب البطل لورا وسيّبه', 'Drag a hero back and let go'], sound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'],
  penguin: ['لولو', 'Lulu'], fox: ['لهب', 'Ember'], bear: ['دبدوب', 'Bruno'],
  spin: ['دوّامة الجليد', 'Icy Spin'], flame: ['اندفاعة اللهب', 'Flame Dash'], slam: ['ضربة الدب', 'Bear Slam'],
  spin_d: ['موجة تدفع المنافسين بعيد', 'A wave that knocks rivals back'], flame_d: ['تعدّي بين المنافسين وتدوّخهم', 'Dashes through rivals and dazzles them'], slam_d: ['ضربة تدوّخ المنافسين اللي حواليه', 'Stuns rivals around it'],
  hp: ['صحة', 'Health'], pow: ['قوة', 'Power'], max: ['أقصى', 'Max'], ready: ['جاهز!', 'Ready!'], gala: ['روح المهرجان', 'Gala Spirit'], turnw: ['الدور', 'Turn'],
  p_shield: ['حائط الدرع', 'Shield Wall'], p_shield_d: ['بياخد ضرر أقل بنسبة ٣٠٪.', 'Takes 30% less damage.'], p_ricochet: ['الارتداد', 'Ricochet'], p_ricochet_d: ['كل ارتداد من الحيطة قبل الضربة بيزوّد الضرر ٤٠٪.', 'Every wall bounce before a hit adds +40% damage.'], p_mend: ['وهج الشفاء', 'Mending Glow'], p_mend_d: ['بتعالج كل صاحب بتلمسه.', 'Heals every ally she touches.'], team: ['الفريق', 'Team'], ko: ['نايم', 'KO'],
  ff: ['اضغط للتسريع', 'Tap to speed up'], pause: ['وقفة', 'Paused'], continue: ['كمّل اللعب', 'Continue'], upgrades: ['تقوية الأبطال', 'Upgrade heroes'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], boss: ['زعيم!', 'Boss!'], special: ['قدرة خاصة', 'Special'],
};
const NAMES = ['بداية في شرم', 'أصحاب الحلبة', 'ماتش كور الثلج', 'بركة الثلج الطري', 'حيطان مول مصر', 'كابتن فريق الثلج', 'الماتش الكبير', 'استراحة المعالج', 'العملاقين', 'سرب الصغيرين', 'معسكر فريق الجليد', 'نهائي سانت كاترين', 'حلبة كورنيش إسكندرية', 'حلبة مول جنينة', 'كأس أبطال كاترين', 'عرض شرم للتزلج'];
const NAMES_EN = ['Sharm Start', 'Rink Friends', 'Snowball Match', 'Slush Pool', 'Mall of Egypt Walls', 'Captain Snow', 'The Big Match', "Healers Rest", 'The Two Giants', 'The Little Swarm', 'Ice Team Camp', 'Catherine Final', 'Alexandria Corniche Rink', 'Genena Mall Rink', 'Catherine Champions Cup', 'Sharm Skating Show'];
const I = makeI18n(S);
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const TAU = Math.PI * 2;
const MAXPULL = 20;

// ------------------------------------------------------------------ drawing helpers
function ell(g, x, y, rx, ry, rot = 0) { g.beginPath(); g.ellipse(x, y, Math.max(0.01, rx), Math.max(0.01, ry), rot, 0, TAU); }
function eyes(g, R, lx, ly, y, gap, size, angry = 0) {
  for (const sx of [-1, 1]) {
    g.fillStyle = '#fff'; ell(g, sx * gap, y, size, size * 1.12); g.fill();
    g.fillStyle = '#1b1b2a'; g.beginPath(); g.arc(sx * gap + lx * size * 0.45, y + ly * size * 0.45, size * 0.55, 0, TAU); g.fill();
    g.fillStyle = '#fff'; g.beginPath(); g.arc(sx * gap + lx * size * 0.45 + size * 0.2, y + ly * size * 0.45 - size * 0.2, size * 0.2, 0, TAU); g.fill();
    if (angry) { g.strokeStyle = '#2a1a10'; g.lineWidth = R * 0.09; g.beginPath(); g.moveTo(sx * gap - sx * size * 1.1, y - size * (1.5 - angry * sx * -0.0)); g.lineTo(sx * gap + sx * size * 0.3 * -1, y - size * 1.0 + angry * size * 0.6); g.stroke(); }
  }
}

function drawHero(g, type, R, o) {
  const { lx, ly, t, ko } = o;
  g.save();
  g.fillStyle = 'rgba(20,50,90,.28)'; ell(g, 0, R * 0.9, R * 0.95, R * 0.3); g.fill();
  if (ko) { g.rotate(0.35); g.globalAlpha = 0.75; }
  if (ART['hero_' + type]) { pic(g, ART['hero_' + type], R); g.restore(); return; }
  if (type === 'penguin') {
    g.fillStyle = '#ff9a2a'; ell(g, -R * 0.42, R * 0.82, R * 0.32, R * 0.16); g.fill(); ell(g, R * 0.42, R * 0.82, R * 0.32, R * 0.16); g.fill();
    g.fillStyle = '#22385e'; ell(g, -R * 0.98, R * 0.15, R * 0.22, R * 0.5, 0.3); g.fill(); ell(g, R * 0.98, R * 0.15, R * 0.22, R * 0.5, -0.3); g.fill();
    g.fillStyle = '#2b4a7c'; ell(g, 0, 0, R * 0.92, R); g.fill();
    g.fillStyle = '#fff'; ell(g, 0, R * 0.22, R * 0.6, R * 0.7); g.fill();
    g.fillStyle = '#e8384f'; g.beginPath(); g.roundRect(-R * 0.8, -R * 0.52, R * 1.6, R * 0.3, R * 0.15); g.fill();
    g.fillRect(R * 0.35, -R * 0.4, R * 0.28, R * 0.6);
    eyes(g, R, lx, ly, -R * 0.1 - R * 0.28, R * 0.3, R * 0.23);
    g.fillStyle = '#ff9a2a'; g.beginPath(); g.moveTo(-R * 0.17, -R * 0.0); g.lineTo(R * 0.17, -R * 0.0); g.lineTo(0, R * 0.22); g.closePath(); g.fill();
    g.fillStyle = 'rgba(255,120,140,.5)'; g.beginPath(); g.arc(-R * 0.55, R * 0.02, R * 0.12, 0, TAU); g.fill(); g.beginPath(); g.arc(R * 0.55, R * 0.02, R * 0.12, 0, TAU); g.fill();
  } else if (type === 'fox') {
    g.save(); g.translate(R * 0.8, R * 0.45); g.rotate(-0.5 + Math.sin(t * 6) * 0.1);
    g.fillStyle = '#f0802a'; ell(g, R * 0.35, 0, R * 0.7, R * 0.3); g.fill(); g.fillStyle = '#fff'; ell(g, R * 0.85, 0, R * 0.25, R * 0.26); g.fill(); g.restore();
    g.fillStyle = '#f0802a'; g.beginPath(); g.moveTo(-R * 0.85, -R * 0.2); g.lineTo(-R * 0.7, -R * 1.2); g.lineTo(-R * 0.1, -R * 0.65); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(R * 0.85, -R * 0.2); g.lineTo(R * 0.7, -R * 1.2); g.lineTo(R * 0.1, -R * 0.65); g.closePath(); g.fill();
    g.fillStyle = '#4a2a1a'; g.beginPath(); g.moveTo(-R * 0.7, -R * 0.45); g.lineTo(-R * 0.65, -R * 0.98); g.lineTo(-R * 0.3, -R * 0.62); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(R * 0.7, -R * 0.45); g.lineTo(R * 0.65, -R * 0.98); g.lineTo(R * 0.3, -R * 0.62); g.closePath(); g.fill();
    g.fillStyle = '#f58c32'; ell(g, 0, 0, R * 0.98, R * 0.92); g.fill();
    g.fillStyle = '#fff6ea'; g.beginPath(); g.moveTo(-R * 0.9, R * 0.15); g.quadraticCurveTo(0, -R * 0.1, R * 0.9, R * 0.15); g.quadraticCurveTo(R * 0.5, R * 0.95, 0, R * 0.9); g.quadraticCurveTo(-R * 0.5, R * 0.95, -R * 0.9, R * 0.15); g.fill();
    g.fillStyle = '#ffd23a'; g.beginPath(); g.roundRect(-R * 0.6, R * 0.55, R * 1.2, R * 0.24, R * 0.12); g.fill();
    eyes(g, R, lx, ly, -R * 0.15, R * 0.32, R * 0.22);
    g.fillStyle = '#2a1a1a'; ell(g, 0, R * 0.2, R * 0.12, R * 0.09); g.fill();
    g.strokeStyle = '#2a1a1a'; g.lineWidth = R * 0.05; g.beginPath(); g.moveTo(0, R * 0.28); g.quadraticCurveTo(-R * 0.1, R * 0.4, -R * 0.2, R * 0.35); g.moveTo(0, R * 0.28); g.quadraticCurveTo(R * 0.1, R * 0.4, R * 0.2, R * 0.35); g.stroke();
  } else {
    g.fillStyle = '#f7f3ee'; g.beginPath(); g.arc(-R * 0.72, -R * 0.74, R * 0.34, 0, TAU); g.fill(); g.beginPath(); g.arc(R * 0.72, -R * 0.74, R * 0.34, 0, TAU); g.fill();
    g.fillStyle = '#f2a8b8'; g.beginPath(); g.arc(-R * 0.72, -R * 0.74, R * 0.18, 0, TAU); g.fill(); g.beginPath(); g.arc(R * 0.72, -R * 0.74, R * 0.18, 0, TAU); g.fill();
    g.fillStyle = '#fbf8f3'; ell(g, 0, 0, R, R * 0.95); g.fill();
    g.strokeStyle = '#3a8ae0'; g.lineWidth = R * 0.14; g.beginPath(); g.arc(0, -R * 0.1, R * 0.95, Math.PI * 1.12, Math.PI * 1.88); g.stroke();
    g.fillStyle = '#3a8ae0'; g.beginPath(); g.arc(-R * 0.93, -R * 0.12, R * 0.22, 0, TAU); g.fill(); g.beginPath(); g.arc(R * 0.93, -R * 0.12, R * 0.22, 0, TAU); g.fill();
    g.fillStyle = '#e8d2b0'; ell(g, 0, R * 0.3, R * 0.45, R * 0.34); g.fill();
    g.fillStyle = '#2a2230'; ell(g, 0, R * 0.17, R * 0.16, R * 0.1); g.fill();
    eyes(g, R, lx, ly, -R * 0.2, R * 0.36, R * 0.2);
    g.fillStyle = '#e8384f'; g.beginPath(); g.roundRect(-R * 0.7, R * 0.58, R * 1.4, R * 0.24, R * 0.12); g.fill();
  }
  g.restore();
}

const FOE_LOOK = {
  grunt: { skin: '#6cbf4a', tunic: '#9a6a3a', ears: 1 }, imp: { skin: '#9adf58', tunic: '#d8603a', ears: 1.3 }, thrower: { skin: '#62b84a', tunic: '#3a6ab8', ears: 1 },
  brute: { skin: '#4f9a3a', tunic: '#6a4a3a', ears: 0.9 }, shaman: { skin: '#7ac85a', tunic: '#7a3ab8', ears: 1.1 }, chief: { skin: '#58a83a', tunic: '#b83a3a', ears: 1 }, king: { skin: '#3f8a34', tunic: '#7a2ab8', ears: 1 },
};
function drawFoe(g, f, R, o) {
  const L = FOE_LOOK[f.type]; const { lx, ly, t } = o;
  g.save();
  g.fillStyle = 'rgba(20,50,90,.28)'; ell(g, 0, R * 0.9, R * 0.95, R * 0.3); g.fill();
  if (ART['goblin_' + f.type]) { pic(g, ART['goblin_' + f.type], R); g.restore(); return; }
  // body
  g.fillStyle = L.tunic; ell(g, 0, R * 0.5, R * 0.7, R * 0.52); g.fill();
  if (f.type === 'brute' || f.type === 'king' || f.type === 'chief') { g.fillStyle = '#3a2a1a'; g.fillRect(-R * 0.7, R * 0.45, R * 1.4, R * 0.16); g.fillStyle = '#ffd23a'; g.fillRect(-R * 0.1, R * 0.43, R * 0.2, R * 0.2); }
  // ears
  g.fillStyle = L.skin;
  for (const sx of [-1, 1]) { g.beginPath(); g.moveTo(sx * R * 0.7, -R * 0.3); g.lineTo(sx * R * (0.7 + 0.7 * L.ears), -R * 0.7); g.lineTo(sx * R * 0.78, R * 0.1); g.closePath(); g.fill(); }
  g.fillStyle = L.skin; ell(g, 0, -R * 0.15, R * 0.85, R * 0.78); g.fill();
  g.fillStyle = 'rgba(255,255,255,.18)'; ell(g, -R * 0.2, -R * 0.45, R * 0.4, R * 0.2, -0.4); g.fill();
  // eyes yellow
  for (const sx of [-1, 1]) {
    g.fillStyle = '#fff3a0'; ell(g, sx * R * 0.33, -R * 0.25, R * 0.23, R * 0.26); g.fill();
    g.fillStyle = '#1b1b2a'; g.beginPath(); g.arc(sx * R * 0.33 + lx * R * 0.09, -R * 0.25 + ly * R * 0.09, R * 0.12, 0, TAU); g.fill();
    g.strokeStyle = '#2a3a14'; g.lineWidth = R * 0.08; g.beginPath(); g.moveTo(sx * R * 0.6, -R * 0.62); g.lineTo(sx * R * 0.1, -R * 0.46); g.stroke();
  }
  g.fillStyle = '#4a8a30'; ell(g, 0, -R * 0.02, R * 0.12, R * 0.09); g.fill();
  g.strokeStyle = '#2a3a14'; g.lineWidth = R * 0.07; g.beginPath(); g.arc(0, R * 0.08, R * 0.3, 0.2, Math.PI - 0.2); g.stroke();
  g.fillStyle = '#fff'; g.beginPath(); g.moveTo(-R * 0.18, R * 0.3); g.lineTo(-R * 0.08, R * 0.3); g.lineTo(-R * 0.13, R * 0.18); g.fill(); g.beginPath(); g.moveTo(R * 0.18, R * 0.3); g.lineTo(R * 0.08, R * 0.3); g.lineTo(R * 0.13, R * 0.18); g.fill();
  // gear
  switch (f.type) {
    case 'grunt': g.fillStyle = '#7a4a1a'; g.beginPath(); g.moveTo(-R * 0.8, -R * 0.5); g.quadraticCurveTo(0, -R * 1.3, R * 0.8, -R * 0.5); g.closePath(); g.fill(); g.fillStyle = '#a06a2a'; g.fillRect(-R * 0.8, -R * 0.55, R * 1.6, R * 0.12); break;
    case 'imp': g.fillStyle = '#e8503a'; g.beginPath(); g.moveTo(-R * 0.5, -R * 0.8); g.lineTo(-R * 0.35, -R * 1.25); g.lineTo(-R * 0.15, -R * 0.85); g.fill(); g.beginPath(); g.moveTo(R * 0.5, -R * 0.8); g.lineTo(R * 0.35, -R * 1.25); g.lineTo(R * 0.15, -R * 0.85); g.fill(); break;
    case 'thrower': g.fillStyle = '#3a6ab8'; g.beginPath(); g.moveTo(-R * 0.75, -R * 0.55); g.lineTo(0, -R * 1.4); g.lineTo(R * 0.75, -R * 0.55); g.closePath(); g.fill(); g.fillStyle = '#fff'; g.beginPath(); g.arc(0, -R * 1.42, R * 0.15, 0, TAU); g.fill();
      g.fillStyle = '#fff'; g.strokeStyle = '#bcd'; g.lineWidth = R * 0.04; g.beginPath(); g.arc(R * 0.85, -R * 0.3 + Math.sin(t * 5) * R * 0.05, R * 0.3, 0, TAU); g.fill(); g.stroke(); break;
    case 'brute': g.fillStyle = '#8a8f9a'; g.beginPath(); g.moveTo(-R * 0.85, -R * 0.35); g.quadraticCurveTo(0, -R * 1.35, R * 0.85, -R * 0.35); g.closePath(); g.fill();
      g.fillStyle = '#f2ead0'; g.beginPath(); g.moveTo(-R * 0.8, -R * 0.55); g.lineTo(-R * 1.15, -R * 1.05); g.lineTo(-R * 0.5, -R * 0.8); g.fill(); g.beginPath(); g.moveTo(R * 0.8, -R * 0.55); g.lineTo(R * 1.15, -R * 1.05); g.lineTo(R * 0.5, -R * 0.8); g.fill(); break;
    case 'shaman': g.fillStyle = '#7a3ab8'; g.beginPath(); g.moveTo(-R * 0.9, R * 0.1); g.quadraticCurveTo(-R * 0.9, -R * 1.3, 0, -R * 1.2); g.quadraticCurveTo(R * 0.9, -R * 1.3, R * 0.9, R * 0.1); g.quadraticCurveTo(0, -R * 0.65, -R * 0.9, R * 0.1); g.fill();
      g.strokeStyle = '#7a4a1a'; g.lineWidth = R * 0.1; g.beginPath(); g.moveTo(R * 1.0, R * 0.8); g.lineTo(R * 1.0, -R * 0.9); g.stroke(); g.fillStyle = `rgba(120,255,160,${0.6 + 0.3 * Math.sin(t * 4)})`; g.beginPath(); g.arc(R * 1.0, -R * 1.0, R * 0.2, 0, TAU); g.fill(); break;
    case 'chief': case 'king': {
      g.fillStyle = f.type === 'king' ? '#ffd23a' : '#d8b04a'; g.beginPath(); g.moveTo(-R * 0.6, -R * 0.75); g.lineTo(-R * 0.62, -R * 1.25); g.lineTo(-R * 0.3, -R * 1.0); g.lineTo(0, -R * 1.35); g.lineTo(R * 0.3, -R * 1.0); g.lineTo(R * 0.62, -R * 1.25); g.lineTo(R * 0.6, -R * 0.75); g.closePath(); g.fill();
      g.fillStyle = '#e8384f'; g.beginPath(); g.arc(0, -R * 0.95, R * 0.09, 0, TAU); g.fill();
      g.fillStyle = '#f4f4f8'; ell(g, 0, R * 0.2, R * 0.85, R * 0.18); g.fill(); break; }
    default: break;
  }
  g.restore();
}

function star(g, x, y, r, rot) { g.beginPath(); for (let i = 0; i < 10; i++) { const a = rot + (i * Math.PI) / 5 - Math.PI / 2; const rr = i % 2 ? r * 0.45 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); g.fill(); }

// ------------------------------------------------------------------ game
class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    this.voice = new VoiceCoach({ base: this.base, lang: I.getLang(), girl: config.gender === 'girl', clips: RINK_CLIPS });
    this.voice.setMuted(this.sound.muted);
    this._voiceArm = () => this.voice.unlock();
    document.addEventListener('pointerdown', this._voiceArm, true);
    if (!document.getElementById('ir-style')) document.head.append(h('style', { id: 'ir-style' }, css('ir', '#4a8ad8', '#1f3e7a', '#ffe27a') + `
.ir-root{background:#d4e6f4}
.ir-gala{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);display:flex;align-items:center;gap:calc(var(--u)*1.6);background:rgba(255,255,255,.92);border-radius:99px;padding:calc(var(--u)*1.2) calc(var(--u)*2.4);pointer-events:auto;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.4) rgba(30,60,110,.3);color:#1f3e7a;font-weight:900;font-size:calc(var(--u)*3.2);direction:ltr}
.ir-gala .bar{flex:1;height:calc(var(--u)*2.4);border-radius:99px;background:#dbe6ef;overflow:hidden}.ir-gala .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#8ae8ff,#3aa8f0)}
.ir-gala.rdy .bar i{background:linear-gradient(90deg,#ffe27a,#f0a020);animation:irpulse .8s infinite}.ir-gala.off{opacity:.6}
.ir-tip{position:absolute;left:calc(var(--u)*6);right:calc(var(--u)*6);background:#fff;color:#1f3e7a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8) calc(var(--u)*2.6);font-size:calc(var(--u)*3.2);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*2) rgba(30,60,110,.35);display:none;pointer-events:none;text-align:center}.ir-tip.show{display:block}.ir-tip b{display:block;font-size:calc(var(--u)*3.6);color:#2a78c8}
.ir-hpn{font-size:calc(var(--u)*2.2);font-weight:900;text-align:center;direction:ltr;opacity:.9}
.ir-cards{position:absolute;left:0;right:0;bottom:0;display:flex;gap:calc(var(--u)*1.4);padding:calc(var(--u)*1.4) calc(var(--u)*1.6) max(calc(var(--u)*1.6),env(safe-area-inset-bottom));box-sizing:border-box;justify-content:center;pointer-events:none;direction:ltr}
.ir-land .ir-cards{left:auto;right:0;top:calc(var(--u)*13);bottom:0;width:calc(var(--u)*36);flex-direction:column;justify-content:center;padding:calc(var(--u)*1) calc(var(--u)*1.6)}
.ir-land .ir-hc{flex:none;max-width:none;width:100%}
.ir-land .ir-gala{right:calc(var(--u)*40)}
.ir-hc{pointer-events:auto;flex:1;max-width:calc(var(--u)*34);background:linear-gradient(180deg,#4a8ad8,#1f3e7a);border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1) calc(var(--u)*1.2);display:flex;gap:calc(var(--u)*1.2);align-items:center;cursor:pointer;font-family:inherit;color:#fff;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,10,30,.45);position:relative}
.ir-hc.sel{border-color:#ffe27a;box-shadow:0 0 0 calc(var(--u)*.5) rgba(255,226,122,.55),0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,10,30,.45)}
.ir-hc.ko{filter:grayscale(1);opacity:.55}
.ir-hc canvas{width:calc(var(--u)*9);height:calc(var(--u)*9);flex:none;background:rgba(255,255,255,.18);border-radius:50%}
.ir-hc .c{flex:1;min-width:0;display:flex;flex-direction:column;gap:calc(var(--u)*.5);align-items:stretch}
.ir-hc b{font-size:calc(var(--u)*2.9);font-weight:900;line-height:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}
.ir-mini{height:calc(var(--u)*1.6);border-radius:99px;background:rgba(0,0,0,.45);overflow:hidden;border:calc(var(--u)*.2) solid rgba(255,255,255,.8)}
.ir-mini i{display:block;height:100%;width:100%}
.ir-mini.hp i{background:linear-gradient(180deg,#8af08a,#2fa85a)}.ir-mini.sp i{background:linear-gradient(180deg,#ffe27a,#f0a020)}
.ir-hc.rdy .ir-mini.sp{animation:irpulse .8s infinite}.ir-hc.rdy.off .ir-mini.sp{animation:none;opacity:.6}
.ir-rdy{position:absolute;top:calc(var(--u)*-2.2);left:50%;transform:translateX(-50%);background:#ffe27a;color:#3a2a00;font-weight:900;font-size:calc(var(--u)*2.4);border-radius:99px;padding:0 calc(var(--u)*1.6);border:calc(var(--u)*.3) solid #fff;display:none;white-space:nowrap}
.ir-hc.rdy .ir-rdy{display:block}
@keyframes irpulse{50%{transform:scale(1.07)}}
.ir-banner{unicode-bidi:plaintext;position:absolute;left:50%;top:38%;transform:translate(-50%,-50%) scale(.6);opacity:0;pointer-events:none;font-weight:900;font-size:calc(var(--u)*10);color:#fff;-webkit-text-stroke:calc(var(--u)*.7) rgba(10,20,50,.9);paint-order:stroke fill;white-space:nowrap;text-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.5)}
.ir-banner.you{color:#ffe27a}.ir-banner.foe{color:#8af08a}
.ir-banner.go{animation:irban 1.5s ease-out}
@keyframes irban{0%{opacity:0;transform:translate(-50%,-50%) scale(.5)}15%{opacity:1;transform:translate(-50%,-50%) scale(1.1)}25%{transform:translate(-50%,-50%) scale(1)}80%{opacity:1}100%{opacity:0;transform:translate(-50%,-60%) scale(1)}}
.ir-turn{font-size:calc(var(--u)*3.6);unicode-bidi:plaintext}
.ir-ff{position:absolute;bottom:calc(var(--u)*24);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3.2);font-weight:900;background:rgba(10,30,60,.7);border:calc(var(--u)*.3) solid #fff;border-radius:99px;padding:calc(var(--u)*.6) calc(var(--u)*3);opacity:.9;pointer-events:none;white-space:nowrap}
.ir-hero{display:flex;gap:calc(var(--u)*1.6);align-items:center;width:100%;background:rgba(255,255,255,.12);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.2)}
.ir-hero canvas{width:calc(var(--u)*13);height:calc(var(--u)*13);flex:none}
.ir-hero .c{flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*.8)}
.ir-hero b{font-size:calc(var(--u)*4)}.ir-hero small{font-size:calc(var(--u)*2.8);opacity:.9;font-weight:700}
.ir-up{display:flex;gap:calc(var(--u)*1);flex-wrap:wrap}
.ir-upb{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3);border:none;border-radius:99px;padding:calc(var(--u)*1) calc(var(--u)*2.4);color:#fff;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.6) 0 #1a6a3a;cursor:pointer;min-height:calc(var(--u)*8)}
.ir-upb:disabled{background:#8a98a4;box-shadow:0 calc(var(--u)*.6) 0 #5a6a78;opacity:.7;cursor:default}
` ));
    this.root = h('div', { class: 'ir-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.bg = document.createElement('canvas');
    this.cv = h('canvas'); this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'ir-layer' }); this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.parts = []; this.texts = []; this.trails = []; this.glow = {}; this.hop = {}; this.shake = 0; this.flash = {};
    this.ff = false; this.aim = null; this.sel = 'penguin'; this.armed = {}; this.lastSq = 0;
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    Promise.all([this._fonts(), loadArt(this.base, ['hero_penguin', 'hero_fox', 'hero_bear', 'goblin_grunt', 'goblin_imp', 'goblin_thrower', 'goblin_brute', 'goblin_shaman', 'goblin_chief', 'goblin_king', 'bg_festival']).then((a) => { ART = a; })]).then(() => {
      if (ART.bg_festival) this.root.style.background = `#d4e6f4 url(${ART.bg_festival.src}) center/cover no-repeat`; // the painted winter festival behind every screen
      this.showMenu(); this._loop();
    });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _resize() {
    const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`);
    // wide screen (landscape phone): the three hero cards stand in a column on the right and the rink uses the full height
    this.land = this.cw > this.ch * 1.35; this.root.classList.toggle('ir-land', this.land);
    const uu = Math.min(this.u, 6.2);
    const topR = uu * 15; const botR = this.land ? uu * 9 : uu * 26; const colW = this.land ? uu * 36 : 0;
    this.sc = Math.max(2, Math.min((this.cw - colW) / (W + 9), (this.ch - topR - botR) / (H + 9)));
    this.ox = (this.cw - colW - W * this.sc) / 2; this.oy = topR + (this.ch - topR - botR - H * this.sc) / 2;
    this._buildBg();
  }
  X(x) { return this.ox + x * this.sc; }
  Y(y) { return this.oy + y * this.sc; }

  // ---- static background: night festival, crowd, wooden rink, ice with scratches and reflections, walls, pools
  _buildBg() {
    const bg = this.bg; bg.width = this.cv.width; bg.height = this.cv.height;
    const g = bg.getContext('2d'); g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const cw = this.cw; const ch = this.ch; const sc = this.sc; const ox = this.ox; const oy = this.oy;
    let sd = 7; const R = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
    const sky = g.createLinearGradient(0, 0, 0, ch); sky.addColorStop(0, '#cfe2f3'); sky.addColorStop(0.5, '#e6f1fa'); sky.addColorStop(1, '#d4e6f4');
    if (ART.bg_festival) g.clearRect(0, 0, cw, ch); // the painted festival (root background) shows through
    else { g.fillStyle = sky; g.fillRect(0, 0, cw, ch); }
    for (let i = 0; i < 60; i++) R();
    // snowy hills + trees in the margins
    g.fillStyle = '#e8f1fb'; g.beginPath(); g.moveTo(0, ch); for (let x = 0; x <= cw; x += 12) g.lineTo(x, ch - 12 - Math.sin(x * 0.02) * 8 - 8); g.lineTo(cw, ch); g.fill();
    for (const side of [-1, 1]) for (let k = 0; k < 3; k++) {
      const tx = side < 0 ? ox - sc * (3 + k * 0.6) : ox + W * sc + sc * (3 + k * 0.6); const ty = oy + sc * (20 + k * 30);
      if (tx < 6 || tx > cw - 6) continue;
      const th = sc * 8;
      g.fillStyle = '#1d5a44'; for (let l = 0; l < 3; l++) { g.beginPath(); g.moveTo(tx, ty - th + l * th * 0.3); g.lineTo(tx - th * (0.35 + l * 0.15), ty - th * 0.1 + l * th * 0.3 - th * 0.1); g.lineTo(tx + th * (0.35 + l * 0.15), ty - th * 0.1 + l * th * 0.3 - th * 0.1); g.fill(); }
      g.fillStyle = 'rgba(255,255,255,.85)'; g.beginPath(); g.arc(tx, ty - th, sc * 0.5, 0, TAU); g.fill();
    }
    // crowd peeking over the rim (top and sides)
    const crowd = (x, y) => {
      const c = ['#e8384f', '#ffd23a', '#3a8ae0', '#7a3ab8', '#ff8a3a', '#2fa85a'][(R() * 6) | 0];
      g.fillStyle = '#f2c9a0'; g.beginPath(); g.arc(x, y, sc * 1.3, 0, TAU); g.fill();
      g.fillStyle = c; g.beginPath(); g.arc(x, y - sc * 0.5, sc * 1.35, Math.PI, 0); g.fill(); g.fillStyle = '#fff'; g.beginPath(); g.arc(x, y - sc * 1.9, sc * 0.4, 0, TAU); g.fill();
      g.fillStyle = '#222'; g.beginPath(); g.arc(x - sc * 0.45, y + sc * 0.05, sc * 0.13, 0, TAU); g.fill(); g.beginPath(); g.arc(x + sc * 0.45, y + sc * 0.05, sc * 0.13, 0, TAU); g.fill();
      g.fillStyle = c; g.fillRect(x - sc * 1.0, y + sc * 1.0, sc * 2.0, sc * 1.4);
    };
    for (let x = ox - sc * 2; x < ox + W * sc + sc * 3; x += sc * 3.4) { crowd(x + R() * sc, oy - sc * 4.1 + R() * sc * 0.6); }
    for (let y = oy; y < oy + H * sc; y += sc * 5) { if (ox > sc * 5) { crowd(ox - sc * 3.4, y); crowd(ox + W * sc + sc * 3.4, y + sc * 2); } }
    // wooden rim
    const rim = sc * 3;
    const wood = g.createLinearGradient(0, oy - rim, 0, oy + H * sc + rim); wood.addColorStop(0, '#b87a3a'); wood.addColorStop(0.5, '#8a5222'); wood.addColorStop(1, '#6a3a16');
    g.fillStyle = 'rgba(0,0,0,.3)'; g.beginPath(); g.roundRect(ox - rim + 3, oy - rim + 6, W * sc + rim * 2, H * sc + rim * 2, sc * 3.5); g.fill();
    g.fillStyle = wood; g.beginPath(); g.roundRect(ox - rim, oy - rim, W * sc + rim * 2, H * sc + rim * 2, sc * 3.5); g.fill();
    g.strokeStyle = 'rgba(40,20,5,.35)'; g.lineWidth = 1; for (let i = 1; i < 3; i++) { g.beginPath(); g.roundRect(ox - rim + i * sc, oy - rim + i * sc, W * sc + rim * 2 - i * sc * 2, H * sc + rim * 2 - i * sc * 2, sc * 3); g.stroke(); }
    g.fillStyle = '#f4f9ff'; g.beginPath(); g.roundRect(ox - sc * 0.8, oy - sc * 0.8, W * sc + sc * 1.6, H * sc + sc * 1.6, sc * 1.8); g.fill();
    // ice
    g.save(); g.beginPath(); g.roundRect(ox, oy, W * sc, H * sc, sc * 1.2); g.clip();
    const ice = g.createLinearGradient(ox, oy, ox + W * sc * 0.4, oy + H * sc); ice.addColorStop(0, '#f2fbff'); ice.addColorStop(0.5, '#d2eefc'); ice.addColorStop(1, '#bde2f7');
    g.fillStyle = ice; g.fillRect(ox, oy, W * sc, H * sc);
    // rink markings
    g.strokeStyle = 'rgba(70,130,200,.35)'; g.lineWidth = sc * 0.5; g.beginPath(); g.moveTo(ox, oy + H * sc * 0.5); g.lineTo(ox + W * sc, oy + H * sc * 0.5); g.stroke();
    g.strokeStyle = 'rgba(220,70,90,.3)'; g.beginPath(); g.moveTo(ox, oy + H * sc * 0.2); g.lineTo(ox + W * sc, oy + H * sc * 0.2); g.moveTo(ox, oy + H * sc * 0.8); g.lineTo(ox + W * sc, oy + H * sc * 0.8); g.stroke();
    g.strokeStyle = 'rgba(70,130,200,.35)'; g.beginPath(); g.arc(ox + W * sc / 2, oy + H * sc / 2, sc * 9, 0, TAU); g.stroke();
    g.fillStyle = 'rgba(70,130,200,.3)'; g.font = `${sc * 7}px system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('❄', ox + W * sc / 2, oy + H * sc / 2);
    // reflections
    for (let i = 0; i < 4; i++) { const x = ox + (i * 0.3 + 0.1) * W * sc; g.fillStyle = `rgba(255,255,255,${0.1 + 0.05 * (i % 2)})`; g.beginPath(); g.moveTo(x, oy); g.lineTo(x + sc * 5, oy); g.lineTo(x - sc * 14, oy + H * sc); g.lineTo(x - sc * 19, oy + H * sc); g.fill(); }
    // scratches
    g.lineCap = 'round';
    for (let i = 0; i < 70; i++) { g.strokeStyle = `rgba(255,255,255,${0.35 + R() * 0.4})`; g.lineWidth = 0.6 + R() * 0.8; const x = ox + R() * W * sc; const y = oy + R() * H * sc; const a = R() * TAU; const l = sc * (2 + R() * 7); g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + Math.cos(a + 0.5) * l * 0.5, y + Math.sin(a + 0.5) * l * 0.5, x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke(); }
    for (let i = 0; i < 30; i++) { g.strokeStyle = `rgba(110,170,215,${0.12 + R() * 0.15})`; g.lineWidth = 0.7; const x = ox + R() * W * sc; const y = oy + R() * H * sc; const a = R() * TAU; const l = sc * (3 + R() * 8); g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke(); }
    // snow drift along the edge
    const edge = g.createLinearGradient(0, oy, 0, oy + sc * 2.2); edge.addColorStop(0, 'rgba(255,255,255,.95)'); edge.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = edge; g.fillRect(ox, oy, W * sc, sc * 2.2);
    g.restore();
    this.bgLevel = null;
  }

  _drawLevelStatic(g) {
    const s = this.sim; const sc = this.sc;
    for (const p of s.pools) {
      g.fillStyle = 'rgba(150,175,195,.75)'; ell(g, this.X(p.x), this.Y(p.y), p.r * sc, p.r * sc * 0.82); g.fill();
      g.fillStyle = 'rgba(235,245,252,.8)'; for (let i = 0; i < 14; i++) { const a = i * 2.4; const rr = p.r * sc * (0.2 + (i % 5) * 0.14); g.beginPath(); g.arc(this.X(p.x) + Math.cos(a) * rr, this.Y(p.y) + Math.sin(a) * rr * 0.8, sc * 0.5, 0, TAU); g.fill(); }
      g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = sc * 0.3; ell(g, this.X(p.x), this.Y(p.y), p.r * sc, p.r * sc * 0.82); g.stroke();
    }
    for (const b of s.blocks) {
      const x = this.X(b.x - b.hw); const y = this.Y(b.y - b.hh); const w = b.hw * 2 * sc; const hh = b.hh * 2 * sc;
      g.fillStyle = 'rgba(30,60,100,.28)'; g.beginPath(); g.roundRect(x + 2, y + sc * 0.7, w, hh, sc * 0.5); g.fill();
      const gr = g.createLinearGradient(0, y, 0, y + hh); gr.addColorStop(0, '#ffffff'); gr.addColorStop(1, '#a8d4ee');
      g.fillStyle = gr; g.beginPath(); g.roundRect(x, y - sc * 0.5, w, hh + sc * 0.5, sc * 0.6); g.fill();
      g.strokeStyle = '#6fa8d0'; g.lineWidth = 1.5; g.stroke();
      g.strokeStyle = 'rgba(100,160,210,.7)'; g.lineWidth = 1;
      if (w > hh) for (let k = sc * 4; k < w - 2; k += sc * 4) { g.beginPath(); g.moveTo(x + k, y - sc * 0.5); g.lineTo(x + k, y + hh); g.stroke(); }
      else for (let k = sc * 4; k < hh - 2; k += sc * 4) { g.beginPath(); g.moveTo(x, y + k); g.lineTo(x + w, y + k); g.stroke(); }
    }
  }

  // ---------------------------------------------------------------- input
  _wp(e) { const r = this.cv.getBoundingClientRect(); return { x: ((e.clientX - r.left) - this.ox) / this.sc, y: ((e.clientY - r.top) - this.oy) / this.sc }; }
  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.cv.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play') return;
      if (this.sim.phase !== 'aim') { this.ff = true; return; }
      const p = this._wp(e); const hs = heroes(this.sim);
      let hero = null; let bd = 1e9;
      for (const q of hs) { const d = Math.hypot(q.x - p.x, q.y - p.y); if (d < q.r + 3.5 && d < bd) { bd = d; hero = q; } }
      if (!hero) hero = hs.find((q) => q.type === this.sel) || hs[0];
      if (!hero) return;
      this.cv.setPointerCapture(e.pointerId);
      this.sel = hero.type; this.aim = { id: e.pointerId, hero: hero.type, x0: p.x, y0: p.y, x: p.x, y: p.y, path: null, tp: 0 };
      this.sound.play('select');
    });
    this.cv.addEventListener('pointermove', (e) => { if (this.aim && this.aim.id === e.pointerId) { const p = this._wp(e); this.aim.x = p.x; this.aim.y = p.y; } });
    const up = (e) => {
      if (!this.aim || this.aim.id !== e.pointerId) return;
      const a = this.aim; this.aim = null;
      const dx = a.x - a.x0; const dy = a.y - a.y0; const len = Math.hypot(dx, dy);
      if (len < 2.5 || this.sim.phase !== 'aim') return;
      this.fireHero(a.hero, Math.atan2(-dy, -dx), clamp(len / MAXPULL, 0, 1));
    };
    this.cv.addEventListener('pointerup', up);
    this.cv.addEventListener('pointercancel', () => { this.aim = null; });
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _tip(id) {
    const k = { penguin: 'shield', fox: 'ricochet', bear: 'mend' }[id];
    this.tipEl.replaceChildren(h('b', {}, I.t('p_' + k)), h('span', {}, I.t('p_' + k + '_d')));
    this.tipEl.classList.add('show'); clearTimeout(this._tipT); this._tipT = setTimeout(() => this.tipEl && this.tipEl.classList.remove('show'), 3200);
  }

  fireHero(type, ang, power) {
    const hero = this.sim.bodies.find((b) => b.type === type && b.alive);
    const useSp = hero && this.sim.gala >= 100 && !this.galaOff;
    if (fire(this.sim, type, ang, power, useSp)) { this.hintEl && this.hintEl.classList.remove('show'); this.ff = false; }
  }

  // ---------------------------------------------------------------- screens
  _soundPill() { const pill = h('button', { class: 'ir-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  _persist() { this.post({ type: 'save', save: this.save }); }
  lvName(i) { return (I.getLang() === 'en' ? NAMES_EN : NAMES)[i - 1]; }
  _muteBtn() { const b = h('button', { class: 'ir-round', 'aria-label': 'sound', onclick: () => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); this.voice.setMuted(this.save.muted); b.textContent = this.save.muted ? '🔇' : '🔊'; this._persist(); } }, this.save.muted ? '🔇' : '🔊'); return b; }

  showMenu() {
    this.mode = 'menu'; this.layer.replaceChildren(); this.sound.setMode(false); this.sound.setMode('player');
    this.sim = createState(1); this._buildBg();
    const next = Math.min(this.save.unlocked, LEVELS.length);
    this.layer.append(h('div', { class: 'ir-dim' }, h('div', { class: 'ir-card' },
      h('div', { class: 'ir-logo' }, '⛸️ ', I.t('title')),
      h('div', { class: 'ir-small' }, `🪙 ${I.num(this.save.coins)}`),
      h('button', { class: 'ir-btn', onclick: () => { this.sound.play('tap'); this.startLevel(next); } }, `${I.t('play')} (${I.t('level')} ${I.num(next)})`),
      h('button', { class: 'ir-btn dark', onclick: () => { this.sound.play('tap'); this.showLevels(); } }, I.t('levels')),
      h('button', { class: 'ir-btn dark', onclick: () => { this.sound.play('tap'); this.showHeroes(); } }, I.t('heroes')),
      h('button', { class: 'ir-btn alt', onclick: () => this.post({ type: 'exit' }) }, I.t('exit')))));
    this.layer.append(h('div', { class: 'ir-top' }, this._muteBtn()));
    this._soundPill();
  }

  showLevels() {
    this.layer.replaceChildren();
    const grid = h('div', { class: 'ir-lvs' });
    for (let i = 1; i <= LEVELS.length; i++) {
      const lock = i > this.save.unlocked; const st = this.save.stars[i] || 0;
      grid.append(h('button', { class: `ir-lv${lock ? ' lock' : ''}`, disabled: lock ? true : undefined, onclick: () => { this.sound.play('tap'); this.startLevel(i); } },
        h('i', {}, lock ? '🔒' : LEVELS[i - 1].boss ? '👑' : LEVELS[i - 1].show ? '🎉' : I.num(i)), h('span', {}, lock ? '' : '⭐'.repeat(st) + '☆'.repeat(3 - st))));
    }
    this.layer.append(h('div', { class: 'ir-dim' }, h('div', { class: 'ir-card' }, h('div', { class: 'ir-title' }, I.t('levels')), grid,
      h('button', { class: 'ir-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
  }

  _portrait(type, size = 64) {
    const c = h('canvas', { width: size, height: size }); const g = c.getContext('2d');
    g.translate(size / 2, size / 2 + size * 0.04); drawHero(g, type, size * 0.34, { lx: 0, ly: 0.2, t: 1, ko: false }); return c;
  }

  showHeroes() {
    this.layer.replaceChildren();
    const card = h('div', { class: 'ir-card' }, h('div', { class: 'ir-title' }, I.t('upgrades')), h('div', { class: 'ir-pill' }, `🪙 ${I.num(this.save.coins)}`));
    for (const id of HERO_ORDER) {
      const u = this.save.up[id]; const d = HEROES[id];
      const mk = (key, label) => { const lvl = u[key]; const cost = upgradeCost(lvl); const maxed = lvl >= 5; const b = h('button', { class: 'ir-upb', disabled: maxed || this.save.coins < cost ? true : undefined, onclick: () => { if (this.save.coins >= cost && !maxed) { this.save.coins -= cost; u[key]++; this.sound.play('coin'); this._persist(); this.showHeroes(); } } }, maxed ? `${label} ${I.t('max')}` : `${label} ${I.num(lvl)} → 🪙${I.num(cost)}`); return b; };
      card.append(h('div', { class: 'ir-hero' }, this._portrait(id), h('div', { class: 'c' }, h('b', {}, I.t(id)), h('small', {}, `${I.t(d.special)}: ${I.t(d.special + '_d')}`), h('div', { class: 'ir-up' }, mk('hp', '❤️'), mk('atk', '💥')))));
    }
    card.append(h('button', { class: 'ir-btn dark', onclick: () => this.showMenu() }, I.t('menu')));
    this.layer.append(h('div', { class: 'ir-dim' }, card));
  }

  startLevel(n) {
    this.voice.say('count');
    this.level = n; this.sim = createState(n, { seed: (Date.now() & 0xffff) + n, up: this.save.up });
    this.mode = 'play'; this.parts = []; this.texts = []; this.trails = []; this.glow = {}; this.hop = {}; this.ff = false; this.aim = null; this.armed = {}; this.galaOff = false; this.acc = 0; this.endTimer = 0; this.ended = false;
    this.sel = 'penguin'; this._buildBg(); this._levelBg = null;
    this.layer.replaceChildren(); this.sound.setMode(LEVELS[n - 1].boss ? 'boss' : 'player');
    this.coinEl = h('div', { class: 'ir-pill ir-turn' }, '');
    const pause = h('button', { class: 'ir-round', 'aria-label': I.t('pause'), onclick: () => this.showPause() }, '☰');
    this.hintEl = h('div', { class: 'ir-hint' }, I.t('howTo'));
    this.banner = h('div', { class: 'ir-banner' }, '');
    this.cards = {};
    const row = h('div', { class: 'ir-cards' }); this.rowEl = row;
    for (const id of HERO_ORDER) {
      const hp = h('i', {}); const hpn = h('div', { class: 'ir-hpn' }, '');
      const el = h('button', { class: 'ir-hc', onclick: () => { const hero = this.sim.bodies.find((b) => b.type === id); if (!hero || !hero.alive) return; this.sound.play('select'); this.sel = id; this._tip(id); } },
        this._portrait(id, 72), h('div', { class: 'c' }, h('b', {}, I.t(id)), h('div', { class: 'ir-mini hp' }, hp), hpn));
      this.cards[id] = { el, hp, hpn }; row.append(el);
    }
    this.tipEl = h('div', { class: 'ir-tip' });
    this.galaFill = h('i', {}); this.galaEl = h('div', { class: 'ir-gala', onclick: () => { if (this.sim.gala >= 100) { this.galaOff = !this.galaOff; this.sound.play('tap'); } } }, h('span', {}, '❄'), h('span', {}, I.t('gala')), h('div', { class: 'bar' }, this.galaFill));
    this.turnEl = h('div', { class: 'ir-pill ir-turn', style: 'flex-direction:column;line-height:1.15' }, '');
    this.layer.append(h('div', { class: 'ir-top' }, pause, this.turnEl, this.coinEl), this.hintEl, this.banner, this.tipEl, this.galaEl, row);
    if (n === 1) this.hintEl.classList.add('show');
    this.ffEl = h('div', { class: 'ir-ff' }, I.t('ff')); this.ffEl.style.display = 'none'; this.layer.append(this.ffEl);
    this._soundPill();
    this._banner('you');
  }

  showPause() {
    if (this.mode !== 'play') return;
    this.mode = 'pause';
    this.pauseEl = h('div', { class: 'ir-dim' }, h('div', { class: 'ir-card' }, h('div', { class: 'ir-title' }, I.t('pause')),
      h('button', { class: 'ir-btn', onclick: () => { this.pauseEl.remove(); this.mode = 'play'; this.last = performance.now(); } }, I.t('continue')),
      h('button', { class: 'ir-btn dark', onclick: () => this.startLevel(this.level) }, I.t('restart')),
      h('button', { class: 'ir-btn dark', onclick: () => this.showMenu() }, I.t('menu'))));
    this.layer.append(this.pauseEl);
  }

  _banner(kind) {
    const b = this.banner; if (!b) return;
    b.className = `ir-banner ${kind}`; b.textContent = kind === 'you' ? I.t('yourTurn') : I.t('foeTurn');
    void b.offsetWidth; b.classList.add('go');
    this.sound.play(kind === 'you' ? 'banner' : 'enemyBanner');
  }

  _result(won) {
    const s = this.sim; this.mode = 'result';
    const girl = false; void girl;
    if (won) {
      const n = this.level; this.save.stars[n] = Math.max(this.save.stars[n] || 0, s.stars);
      this.save.unlocked = Math.max(this.save.unlocked, Math.min(LEVELS.length, n + 1)); this.save.coins += s.coins; this._persist();
      this.sound.play('win');
      for (let i = 0; i < 40; i++) this._spark((Math.random()) * W, Math.random() * H * 0.6, '#ffe27a', 'star');
      this.layer.append(h('div', { class: 'ir-dim' }, h('div', { class: 'ir-card' },
        h('div', { class: 'ir-title' }, I.t('won')), h('div', { class: 'ir-small' }, I.t('win')),
        h('div', { class: 'ir-stars' }, ...[1, 2, 3].map((k) => h('span', { class: k <= s.stars ? '' : 'off' }, '⭐'))),
        h('div', { class: 'ir-pill' }, `🪙 +${I.num(s.coins)}`),
        n < LEVELS.length ? h('button', { class: 'ir-btn', onclick: () => this.startLevel(n + 1) }, I.t('next')) : null,
        h('button', { class: 'ir-btn dark', onclick: () => this.startLevel(n) }, I.t('retry')),
        h('button', { class: 'ir-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
    } else {
      this.sound.play('lose');
      this.layer.append(h('div', { class: 'ir-dim' }, h('div', { class: 'ir-card' },
        h('div', { class: 'ir-title' }, I.t('lost')), h('div', { class: 'ir-small' }, I.t('lostText')),
        h('button', { class: 'ir-btn', onclick: () => this.startLevel(this.level) }, I.t('retry')),
        h('button', { class: 'ir-btn dark', onclick: () => this.showMenu() }, I.t('menu')))));
    }
  }

  // ---------------------------------------------------------------- effects
  _spark(x, y, color, kind = 'snow', n = 1) { for (let i = 0; i < n; i++) { const a = Math.random() * TAU; const v = 4 + Math.random() * 14; this.parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 4, life: 0, max: 0.6 + Math.random() * 0.6, kind, color, size: 0.5 + Math.random() * 0.8, rot: Math.random() * 6 }); } }
  _text(x, y, text, color = '#fff', size = 1) { this.texts.push({ x, y, text, color, size, t: 0 }); }
  _ring(x, y, rad, color) { this.parts.push({ x, y, vx: 0, vy: 0, life: 0, max: 0.55, kind: 'ring', color, size: rad }); }

  _events(evs) {
    const sd = this.sound; const now = performance.now();
    for (const e of evs) {
      switch (e.t) {
        case 'launch': sd.play('whoosh', e.power); this._spark(e.x, e.y, '#fff', 'snow', 6); if (e.special) { sd.play('special'); this.voice.say('charge'); this._ring(e.x, e.y, 14, '#ffe27a'); } break;
        case 'hit': sd.play('hit'); this._ring(e.x, e.y, 4 + Math.min(6, e.v / 8), '#fff'); this._spark(e.x, e.y, '#ffe27a', 'star', 4); this.shake = Math.max(this.shake, Math.min(1, e.v / 45)); break;
        case 'crystal': sd.play('crystal', e.v / 40); this.voice.say('pickup'); this.glow[e.id] = 1; this._spark(e.x, e.y, '#9fe8ff', 'star', 3); break;
        case 'wall': sd.play('wall', e.v / 40); if (e.v > 22) this._spark(e.x, e.y, '#fff', 'snow', 5); break;
        case 'chain': sd.play('chain'); this.voice.say('trick'); this._spark(e.x, e.y, '#ffd23a', 'star', 6); this._text(e.x, e.y - 3, '✨', '#fff', 1.2); break;
        case 'bump': sd.play('bump'); break;
        case 'dmg': this._text(e.x, e.y, `-${e.v}`, e.side === 'foe' ? '#fff3a0' : '#ff7a7a', e.v > 14 ? 1.4 : 1); if (e.side === 'hero') { sd.play('hurt'); this.voice.say('bump'); } break;
        case 'puff': sd.play('squeak'); sd.play('puff'); this.voice.say('trick'); this._spark(e.x, e.y, '#ffe27a', 'star', e.boss ? 40 : 14); this._spark(e.x, e.y, '#fff', 'snow', 10); this._ring(e.x, e.y, e.r * 2.5, '#ffe27a'); this.shake = Math.max(this.shake, e.boss ? 1 : 0.4); break;
        case 'wave': sd.play(e.kind === 'stomp' ? 'stomp' : 'wave'); this._ring(e.x, e.y, e.rad, e.kind === 'flame' ? '#ff8a3a' : e.kind === 'slam' ? '#ffe27a' : e.kind === 'stomp' ? '#ff6a6a' : '#9fe8ff'); this._spark(e.x, e.y, '#fff', 'snow', 16); this.shake = Math.max(this.shake, 0.8); break;
        case 'special': this._ring(e.x, e.y, 10, '#ffe27a'); break;
        case 'throw': sd.play('throw'); break;
        case 'splat': sd.play('splat'); this._spark(e.x, e.y, '#fff', 'snow', 8); break;
        case 'heal': sd.play('heal'); this._text(e.x, e.y - 3, '+', '#8af08a', 1.4); this._spark(e.x, e.y, '#8af08a', 'star', 5); break;
        case 'foeMove': this.hop[e.id] = 0.35; if (now - this.lastSq > 120) { this.lastSq = now; sd.play('squeak'); } break;
        case 'telegraph': this._ring(e.x, e.y, 17, '#ff6a6a'); this._text(e.x, e.y - 8, '❗', '#fff', 1.6); break;
        case 'spawn': this._spark(e.x, e.y, '#fff', 'snow', 10); sd.play('puff'); break;
        case 'stunned': this._text(e.x, e.y - 3, '💫', '#fff', 1.4); break;
        case 'burn': this._text(e.x, e.y - 3, '🔥', '#fff', 1.2); break;
        case 'heroKO': this._text(e.x, e.y - 3, `💤 ${I.t('ko')}`, '#fff', 1.2); sd.play('lose'); this.voice.say('bump'); break;
        case 'phase': if (e.phase === 'enemy') { this._banner('foe'); this.voice.say('near'); sd.setMode('enemy'); } else { this._banner('you'); sd.setMode(LEVELS[this.level - 1].boss ? 'boss' : 'player'); this.ff = false; } break;
        case 'won': this.endTimer = 1.1; this.ended = 'won'; this.voice.say('win'); break;
        case 'lost': this.endTimer = 1.1; this.ended = 'lost'; this.voice.say('lose'); break;
        default: break;
      }
    }
  }

  // ---------------------------------------------------------------- loop
  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now;
      if (this.mode === 'play') this._update(dt);
      else if (this.mode !== 'pause') { this.clock += dt; this._fx(dt); }
      this._draw();
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _fx(dt) {
    for (const p of this.parts) { p.life += dt; p.x += p.vx * dt; p.y += p.vy * dt; if (p.kind !== 'ring') { p.vy += 10 * dt; p.vx *= 0.98; } }
    this.parts = this.parts.filter((p) => p.life < p.max);
    for (const x of this.texts) x.t += dt;
    this.texts = this.texts.filter((x) => x.t < 1.1);
    for (const k of Object.keys(this.glow)) { this.glow[k] -= dt * 3; if (this.glow[k] <= 0) delete this.glow[k]; }
    for (const k of Object.keys(this.hop)) { this.hop[k] -= dt; if (this.hop[k] <= 0) delete this.hop[k]; }
    this.shake = Math.max(0, this.shake - dt * 2.5);
    this.trails = this.trails.filter((t) => this.clock - t.c < 1.4);
  }

  _update(dt) {
    const s = this.sim; this.clock += dt;
    if (s.phase !== 'won' && s.phase !== 'lost') {
      this.acc += dt * (this.ff && s.phase !== 'aim' ? 2.6 : 1);
      let n = 0;
      while (this.acc >= DT && n++ < 40) { this.acc -= DT; step(s); if (s.phase === 'aim') { this.acc = 0; break; } }
    }
    this._events(drain(s));
    this._fx(dt);
    for (const b of s.bodies) if (b.alive && b.kind !== 'crystal' && (b.vx || b.vy) && Math.hypot(b.vx, b.vy) > 6 && b.kind === 'hero') this.trails.push({ x: b.x, y: b.y, c: this.clock, r: b.r });
    if (this.ended) { this.endTimer -= dt; if (this.endTimer <= 0) { const w = this.ended === 'won'; this.ended = false; this._result(w); } }
    // aim preview
    const a = this.aim;
    if (a && s.phase === 'aim') {
      const dx = a.x - a.x0; const dy = a.y - a.y0; const len = Math.hypot(dx, dy);
      if (len >= 2.5 && this.clock - a.tp > 0.04) {
        a.tp = this.clock; const hero = s.bodies.find((b) => b.type === a.hero && b.alive);
        if (hero) a.path = previewPath(s, a.hero, Math.atan2(-dy, -dx), clamp(len / MAXPULL, 0, 1), s.gala >= 100 && !this.galaOff);
      } else if (len < 2.5) a.path = null;
    }
    // HUD
    this.turnEl.replaceChildren(h('small', { style: 'font-size:.62em;opacity:.8;font-weight:700' }, `${I.t('level')} ${I.num(this.level)} · ${I.t('turnw')} ${I.num(s.turn)}`), h('span', {}, s.phase === 'enemy' ? `👺 ${I.t('foeTurn')}` : `⛸️ ${I.t('yourTurn')}`));
    this.coinEl.textContent = `👺 × ${I.num(foes(s).length)}`;
    { const rb = this.land ? 10 : (this.rowEl ? this.rowEl.offsetHeight : 90) + 8; this.galaEl.style.bottom = `${rb}px`; this.tipEl.style.bottom = `${rb + this.galaEl.offsetHeight + 8}px`; }
    { const rdy = s.gala >= 100; if (rdy && !this._galaWas) this.sound.play('ready'); this._galaWas = rdy; this.galaFill.style.width = `${Math.min(100, s.gala)}%`; this.galaEl.classList.toggle('rdy', rdy); this.galaEl.classList.toggle('off', rdy && this.galaOff); }
    this.ffEl.style.display = s.phase === 'shot' || s.phase === 'enemy' ? 'block' : 'none';
    for (const id of HERO_ORDER) {
      const c = this.cards[id]; const b = s.bodies.find((q) => q.type === id);
      c.hp.style.width = `${Math.max(0, (b.hp / b.maxHp) * 100)}%`; c.hpn.textContent = `${I.num(Math.max(0, Math.ceil(b.hp)))} / ${I.num(b.maxHp)}`;
      c.el.classList.toggle('sel', this.sel === id && b.alive); c.el.classList.toggle('ko', !b.alive);
    }
  }

  // ---------------------------------------------------------------- draw
  _draw() {
    const g = this.g; g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    g.drawImage(this.bg, 0, 0, this.cw, this.ch);
    const s = this.sim; if (!s) return;
    const sc = this.sc;
    g.save();
    if (this.shake > 0 && this.mode === 'play') g.translate((Math.random() - 0.5) * this.shake * 6, (Math.random() - 0.5) * this.shake * 6);
    // clip to ice for statics and trails
    g.save(); g.beginPath(); g.roundRect(this.ox, this.oy, W * sc, H * sc, sc * 1.2); g.clip();
    this._drawLevelStatic(g);
    for (const t of this.trails) { const k = 1 - (this.clock - t.c) / 1.4; g.fillStyle = `rgba(255,255,255,${0.55 * k})`; g.beginPath(); g.arc(this.X(t.x), this.Y(t.y) + t.r * sc * 0.6, t.r * sc * 0.45, 0, TAU); g.fill(); g.fillStyle = `rgba(120,170,215,${0.25 * k})`; g.beginPath(); g.arc(this.X(t.x), this.Y(t.y) + t.r * sc * 0.6, t.r * sc * 0.7, 0, TAU); g.fill(); }
    g.restore();
    // aim line
    if (this.aim && s.phase === 'aim') this._drawAim(g, s);
    // bodies sorted by y
    const list = s.bodies.filter((b) => b.alive).sort((a, b) => a.y - b.y);
    for (const b of list) {
      const x = this.X(b.x); const y = this.Y(b.y);
      if (b.kind === 'crystal') { this._crystal(g, b, x, y); continue; }
      const sp = Math.hypot(b.vx, b.vy);
      const lx = sp > 3 ? b.vx / sp : (b.kind === 'foe' ? 0 : 0); const ly = sp > 3 ? b.vy / sp : (b.kind === 'foe' ? 0.8 : -0.6);
      const hop = this.hop[b.id] ? Math.sin((1 - this.hop[b.id] / 0.35) * Math.PI) * sc * 1.1 : 0;
      const stretch = 1 + Math.min(0.12, sp / 600);
      g.save(); g.translate(x, y - hop - (b.kind === 'hero' ? 0 : 0));
      const R = b.r * sc * 1.15;
      g.rotate(Math.atan2(b.vx, -b.vy) * 0 + Math.sin(this.clock * 9 + b.id) * Math.min(0.15, sp / 400));
      g.scale(1 / stretch, stretch);
      if (b.kind === 'hero') drawHero(g, b.type, R, { lx, ly, t: this.clock, ko: false });
      else drawFoe(g, b, R, { lx, ly, t: this.clock });
      g.restore();
      if (b.kind === 'hero' && this.sel === b.type && s.phase === 'aim') { g.strokeStyle = 'rgba(255,226,122,.9)'; g.lineWidth = 2.5; g.setLineDash([5, 4]); g.lineDashOffset = -this.clock * 12; ell(g, x, y + R * 0.1, R * 1.25, R * 1.15); g.stroke(); g.setLineDash([]); if (s.gala >= 100 && !this.galaOff) { g.fillStyle = '#ffe27a'; star(g, x, y - R * 1.5 - Math.sin(this.clock * 5) * 2, R * 0.38, this.clock); } }
      if (b.kind === 'foe') {
        const bw = Math.max(R * 1.8, sc * 4); const by = y - R * 1.6 - hop; const k = clamp(b.hp / b.maxHp, 0, 1);
        g.fillStyle = 'rgba(0,0,0,.5)'; g.beginPath(); g.roundRect(x - bw / 2 - 1, by - 1, bw + 2, sc * 1.1 + 2, 4); g.fill();
        g.fillStyle = k > 0.5 ? '#6ae08a' : k > 0.25 ? '#f0c02a' : '#e8564a'; g.beginPath(); g.roundRect(x - bw / 2, by, bw * k, sc * 1.1, 3); g.fill();
        if (b.stun > 0) { g.font = `${sc * 2.2}px system-ui`; g.textAlign = 'center'; g.fillText('💫', x, by - 3); }
        if (b.burn > 0) { g.font = `${sc * 2.2}px system-ui`; g.textAlign = 'center'; g.fillText('🔥', x + bw / 2, by - 3); }
        if (b.ai === 'boss') { g.font = `900 ${sc * 2.2}px Tajawal, system-ui`; g.textAlign = 'center'; g.fillStyle = '#ffe27a'; g.strokeStyle = 'rgba(0,0,0,.7)'; g.lineWidth = 3; g.strokeText('👑', x, by - 4); g.fillText('👑', x, by - 4); }
      } else {
        const bw = R * 1.7; const by = y + R * 1.15; const k = clamp(b.hp / b.maxHp, 0, 1);
        g.fillStyle = 'rgba(0,0,0,.45)'; g.beginPath(); g.roundRect(x - bw / 2 - 1, by - 1, bw + 2, sc * 0.9 + 2, 3); g.fill();
        g.fillStyle = '#6ae08a'; g.beginPath(); g.roundRect(x - bw / 2, by, bw * k, sc * 0.9, 3); g.fill();
      }
    }
    // projectiles
    for (const p of s.proj) { g.fillStyle = '#fff'; g.strokeStyle = '#9fc4e0'; g.lineWidth = 2; g.beginPath(); g.arc(this.X(p.x), this.Y(p.y), sc * 1.0, 0, TAU); g.fill(); g.stroke(); }
    // particles
    for (const p of this.parts) {
      const k = p.life / p.max; const x = this.X(p.x); const y = this.Y(p.y);
      if (p.kind === 'ring') { g.strokeStyle = p.color; g.globalAlpha = 1 - k; g.lineWidth = sc * 0.7 * (1 - k); g.beginPath(); g.arc(x, y, p.size * sc * (0.2 + 0.8 * k), 0, TAU); g.stroke(); g.globalAlpha = 1; }
      else if (p.kind === 'star') { g.globalAlpha = 1 - k; g.fillStyle = p.color; star(g, x, y, sc * p.size * 1.1, p.rot + p.life * 6); g.globalAlpha = 1; }
      else { g.globalAlpha = 1 - k; g.fillStyle = p.color; g.beginPath(); g.arc(x, y, sc * p.size * 0.6, 0, TAU); g.fill(); g.globalAlpha = 1; }
    }
    g.restore();
    // string lights on the rim
    this._lights(g);
    // floating text
    g.textAlign = 'center'; g.textBaseline = 'alphabetic';
    for (const t of this.texts) { const k = t.t / 1.1; g.globalAlpha = 1 - k * k; g.font = `900 ${sc * 3.2 * t.size}px Tajawal, system-ui`; g.fillStyle = t.color; g.strokeStyle = 'rgba(20,30,70,.9)'; g.lineWidth = sc * 0.7; const x = this.X(t.x); const y = this.Y(t.y) - k * sc * 6; g.strokeText(t.text, x, y); g.fillText(t.text, x, y); }
    g.globalAlpha = 1;
  }

  _lights(g) {
    const sc = this.sc; const rim = sc * 3; const n = 22;
    for (let i = 0; i < n; i++) {
      const t = i / n; const x = this.ox - rim + t * (W * sc + rim * 2);
      for (const y of [this.oy - rim * 0.5, this.oy + H * sc + rim * 0.5]) {
        const on = Math.sin(this.clock * 3 + i * 1.3) > -0.3;
        g.fillStyle = on ? ['#ff5a6a', '#ffd23a', '#5ae0ff', '#8af08a'][i % 4] : 'rgba(255,255,255,.35)';
        g.beginPath(); g.arc(x, y, sc * 0.55, 0, TAU); g.fill();
        if (on) { g.globalAlpha = 0.25; g.beginPath(); g.arc(x, y, sc * 1.2, 0, TAU); g.fill(); g.globalAlpha = 1; }
      }
    }
  }

  _crystal(g, b, x, y) {
    const R = b.r * this.sc * 1.1; const gl = this.glow[b.id] || 0;
    g.fillStyle = 'rgba(20,50,90,.3)'; ell(g, x, y + R * 0.85, R * 0.95, R * 0.3); g.fill();
    if (gl > 0) { g.fillStyle = `rgba(160,240,255,${0.5 * gl})`; g.beginPath(); g.arc(x, y, R * (1.4 + 0.3 * (1 - gl)), 0, TAU); g.fill(); }
    const pts = []; for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU - Math.PI / 2; const rr = R * (i % 2 ? 0.85 : 1.1); pts.push([x + Math.cos(a) * rr * 0.85, y + Math.sin(a) * rr - R * 0.1]); }
    const gr = g.createLinearGradient(x - R, y - R, x + R, y + R); gr.addColorStop(0, '#e8fcff'); gr.addColorStop(0.5, '#6fd0f0'); gr.addColorStop(1, '#2a7ac0');
    g.fillStyle = gr; g.beginPath(); pts.forEach(([px, py], i) => (i ? g.lineTo(px, py) : g.moveTo(px, py))); g.closePath(); g.fill();
    g.strokeStyle = '#e8fcff'; g.lineWidth = 2; g.stroke();
    g.fillStyle = 'rgba(255,255,255,.45)'; g.beginPath(); g.moveTo(x, y - R * 1.0); g.lineTo(pts[1][0], pts[1][1]); g.lineTo(x, y - R * 0.1); g.closePath(); g.fill();
    g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 1.2; g.beginPath(); for (const p of pts) { g.moveTo(x, y - R * 0.1); g.lineTo(p[0], p[1]); } g.stroke();
  }

  _drawAim(g, s) {
    const a = this.aim; const hero = s.bodies.find((b) => b.type === a.hero && b.alive); if (!hero) return;
    const dx = a.x - a.x0; const dy = a.y - a.y0; let len = Math.hypot(dx, dy);
    const hx = this.X(hero.x); const hy = this.Y(hero.y); const sc = this.sc;
    if (len < 0.01) return;
    const cl = Math.min(len, MAXPULL); const ux = dx / len; const uy = dy / len;
    const px = hx + ux * cl * sc; const py = hy + uy * cl * sc; const pw = cl / MAXPULL;
    // elastic band
    g.strokeStyle = `hsl(${120 - pw * 120},90%,55%)`; g.lineWidth = sc * 0.9; g.lineCap = 'round'; g.beginPath(); g.moveTo(hx, hy); g.lineTo(px, py); g.stroke();
    g.fillStyle = '#fff'; g.beginPath(); g.arc(px, py, sc * 1.3, 0, TAU); g.fill();
    g.strokeStyle = `hsl(${120 - pw * 120},90%,45%)`; g.lineWidth = 3; g.stroke();
    // dotted trajectory
    if (a.path && a.path.length > 1) {
      g.fillStyle = 'rgba(30,70,130,.85)';
      let acc = 0; let prev = a.path[0];
      for (let i = 1; i < a.path.length; i++) {
        const p = a.path[i]; const d = Math.hypot(p.x - prev.x, p.y - prev.y); const steps = Math.max(1, Math.round(d / 2.4));
        for (let k = 1; k <= steps; k++) { const t = k / steps; const x = this.X(prev.x + (p.x - prev.x) * t); const y = this.Y(prev.y + (p.y - prev.y) * t); acc++; g.globalAlpha = Math.max(0.25, 1 - acc / 40); g.beginPath(); g.arc(x, y, sc * 0.5, 0, TAU); g.fill(); }
        if (p.bounce) { g.globalAlpha = 1; g.strokeStyle = '#ff8a3a'; g.lineWidth = 2; g.beginPath(); g.arc(this.X(p.x), this.Y(p.y), sc * 1.1, 0, TAU); g.stroke(); }
        prev = p;
      }
      g.globalAlpha = 1;
      g.strokeStyle = '#ff5a6a'; g.lineWidth = 3; g.beginPath(); g.arc(this.X(prev.x), this.Y(prev.y), sc * 1.3, 0, TAU); g.stroke();
    }
  }

  pause() { this.sound.suspend(); if (this.mode === 'play') this.showPause(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); this.voice.dispose(); document.removeEventListener('pointerdown', this._voiceArm, true); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); this.root.remove(); }
}

void teamHp; void teamMax; void foes;
const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.IceRink = api;
export default api;
