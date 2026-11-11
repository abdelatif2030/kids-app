// HTML overlay of «سباق القمة», styled after the owner's video: a round dark sound button and three red hearts top
// left, a thin white progress line with orange checkpoint ticks and the racers' dots, an orange clock ring top right,
// four tall rounded racer cards at the bottom (rank badge, portrait, score; the child's card outlined in orange),
// the icy "SUMMIT RUSH" logo, the dark "drag to run" pill with a hand, and the outlined words in the middle.
export function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'style') e.style.cssText = v;
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) if (k !== null && k !== undefined && k !== false) e.append(k.nodeType ? k : document.createTextNode(String(k)));
  return e;
}

/** The game logo: a snowy peak with a red flag over icy blue letters (like the video), and the tagline. */
export function logo(title, tagline, small) {
  const peak = h('div', { class: 'sr-peak' });
  peak.innerHTML = '<svg viewBox="0 0 120 60"><path d="M4 58 L44 14 L58 28 L72 8 L116 58 Z" fill="#3a6ad8"/><path d="M44 14 L34 26 L40 24 L46 30 L52 24 L58 28 Z M72 8 L62 22 L68 20 L74 26 L80 20 L86 24 Z" fill="#fff"/><path d="M72 8 L72 -4" stroke="#5a4a3a" stroke-width="2"/><path d="M72 -4 L86 0 L72 4 Z" fill="#e8402a"/><g fill="#bfe8ff"><circle cx="20" cy="18" r="2"/><circle cx="100" cy="22" r="1.6"/><circle cx="92" cy="10" r="1.2"/></g></svg>';
  return h('div', { class: `sr-logo${small ? ' small' : ''}` }, peak, h('div', { class: 'sr-tag' }, tagline), h('div', { class: 'sr-name' }, title));
}

export const CSS = `
.sr-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#d8dcf0}
.sr-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.sr-layer{position:absolute;inset:0;pointer-events:none}
.sr-layer button,.sr-layer .sr-dim,.sr-chips{pointer-events:auto}
.sr-top{position:absolute;top:max(calc(var(--u)*2.6),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;align-items:flex-start;gap:calc(var(--u)*2.4);direction:ltr}
.sr-left{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);align-items:flex-start}
.sr-round{width:max(44px,calc(var(--u)*10));height:max(44px,calc(var(--u)*10));border-radius:50%;border:calc(var(--u)*.5) solid rgba(255,255,255,.75);background:rgba(40,44,70,.55);color:#fff;font-size:calc(var(--u)*4.4);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.6) rgba(20,20,50,.3)}
.sr-round:focus-visible,.sr-btn:focus-visible,.sr-chip:focus-visible{outline:calc(var(--u)*.7) solid #3a8ae8;outline-offset:calc(var(--u)*.5)}
.sr-exit{position:absolute;bottom:calc(var(--u)*44);left:calc(var(--u)*3)}
.sr-hearts{display:flex;gap:calc(var(--u)*.8);font-size:calc(var(--u)*5.2);line-height:1;color:#ff3a5a;text-shadow:0 0 calc(var(--u)*.6) #fff,0 calc(var(--u)*.3) calc(var(--u)*.6) rgba(0,0,0,.25)}
.sr-hearts .off{color:rgba(255,255,255,.75)}
.sr-track{flex:1;padding-top:calc(var(--u)*4.4)}
.sr-line{position:relative;height:calc(var(--u)*.9);border-radius:999px;background:rgba(255,255,255,.85);box-shadow:0 calc(var(--u)*.3) calc(var(--u)*.8) rgba(20,20,60,.25)}
.sr-tick{position:absolute;top:calc(var(--u)*-.7);width:calc(var(--u)*1);height:calc(var(--u)*2.3);border-radius:3px;background:#ff8a2a;transform:translateX(-50%)}
.sr-flagend{position:absolute;right:calc(var(--u)*-1.4);top:calc(var(--u)*-3.2);font-size:calc(var(--u)*3.6);font-style:normal}
.sr-pdot{position:absolute;top:50%;width:calc(var(--u)*2.6);height:calc(var(--u)*2.6);border-radius:50%;border:calc(var(--u)*.45) solid #fff;transform:translate(-50%,-50%);box-shadow:0 0 calc(var(--u)*.6) rgba(0,0,0,.4);transition:left .15s linear,right .15s linear}
.sr-pdot.me{width:calc(var(--u)*3.4);height:calc(var(--u)*3.4);z-index:2;border-color:#fff;box-shadow:0 0 0 calc(var(--u)*.4) #ff8a2a}
[dir=rtl] .sr-pdot{transform:translate(50%,-50%)}
[dir=rtl] .sr-tick{transform:translateX(50%)}
[dir=rtl] .sr-flagend{right:auto;left:calc(var(--u)*-1.4)}
.sr-clock{position:relative;width:max(46px,calc(var(--u)*11));height:max(46px,calc(var(--u)*11));flex:none}
.sr-clock i,.sr-clock svg{position:absolute;inset:0;width:100%;height:100%;display:block}
.sr-clock span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:calc(var(--u)*4.4);text-shadow:0 1px 2px rgba(0,0,0,.4)}
.sr-clock.low span{color:#ffd23a;animation:sr-pulse .5s infinite alternate}
@keyframes sr-pulse{to{transform:scale(1.15)}}
.sr-cards{position:absolute;left:50%;bottom:max(calc(var(--u)*2.4),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;gap:calc(var(--u)*1.6);direction:ltr}
.sr-card{position:relative;width:calc(var(--u)*17);height:calc(var(--u)*25);border-radius:calc(var(--u)*8.5);border:calc(var(--u)*.6) solid rgba(255,255,255,.55);overflow:hidden;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(20,20,60,.35);transition:filter .3s,transform .3s}
.sr-card.me{border-color:#ff8a2a;box-shadow:0 0 0 calc(var(--u)*.5) #ffb05a,0 calc(var(--u)*.8) calc(var(--u)*2) rgba(20,20,60,.35)}
.sr-card.down{filter:grayscale(1) brightness(.55)}
.sr-card img{position:absolute;left:-10%;width:120%;bottom:calc(var(--u)*1);height:auto}
.sr-badge{position:absolute;top:calc(var(--u)*.6);left:50%;transform:translateX(-50%);z-index:2;background:#2a2a3a;color:#fff;font-weight:900;font-size:calc(var(--u)*2.5);border-radius:999px;padding:calc(var(--u)*.3) calc(var(--u)*1.4);white-space:nowrap}
.sr-badge.gold{background:linear-gradient(180deg,#ffe07a,#f5b72c);color:#5a3a00}
.sr-score{position:absolute;left:50%;bottom:calc(var(--u)*2.4);transform:translateX(-50%);z-index:2;min-width:calc(var(--u)*9);text-align:center;background:rgba(20,20,40,.75);border-radius:999px;font-weight:900;font-size:calc(var(--u)*3.4);padding:calc(var(--u)*.2) calc(var(--u)*1.2)}
.sr-you{position:absolute;left:0;right:0;bottom:calc(var(--u)*.3);text-align:center;font-size:calc(var(--u)*2.2);font-weight:900;color:#ffb05a;z-index:2}
.sr-logo-wrap{position:absolute;top:calc(var(--u)*16);left:calc(var(--u)*4)}
.sr-logo{display:flex;flex-direction:column;align-items:flex-start;position:relative;transform:rotate(-5deg)}
.sr-peak{width:calc(var(--u)*24);height:calc(var(--u)*12);margin-inline-start:calc(var(--u)*6)}
.sr-peak svg{width:100%;height:100%;overflow:visible}
.sr-tag{position:absolute;top:calc(var(--u)*2);inset-inline-start:calc(var(--u)*27);font-weight:900;font-size:calc(var(--u)*3);color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #2a3a6a;paint-order:stroke fill;white-space:nowrap;letter-spacing:.04em}
.sr-name{font-weight:900;font-size:calc(var(--u)*11);line-height:.95;color:#eaf8ff;font-style:italic;-webkit-text-stroke:calc(var(--u)*1) #1a3a8a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) 0 #ff6a2a,0 calc(var(--u)*1.6) 0 #1a3a8a,0 0 calc(var(--u)*3) rgba(150,220,255,.8);white-space:nowrap}
.sr-logo.small{transform:none;align-items:center}
.sr-logo.small .sr-name{font-size:calc(var(--u)*8)}
.sr-logo.small .sr-peak{margin:0;width:calc(var(--u)*18);height:calc(var(--u)*9)}
.sr-logo.small .sr-tag{position:static;-webkit-text-stroke:0;color:#4a5a9a}
.sr-chips{position:absolute;top:calc(var(--u)*46);left:calc(var(--u)*4);display:flex;flex-direction:column;gap:calc(var(--u)*1.4)}
.sr-chip{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.6);color:#2a3a6a;background:rgba(255,255,255,.82);border:calc(var(--u)*.5) solid #fff;border-radius:999px;padding:calc(var(--u)*1) calc(var(--u)*3);min-height:44px;cursor:pointer;text-align:start;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.2) rgba(20,20,60,.2)}
.sr-chip.on{background:linear-gradient(180deg,#ff9a4a,#e8582a);color:#fff;border-color:#ffd0a0}
.sr-chip.lock{opacity:.6}
.sr-easy{position:absolute;top:calc(var(--u)*40);left:calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*3.4);color:#2a3a6a}
.sr-drag{position:absolute;left:50%;top:58%;transform:translateX(-50%);background:rgba(40,46,80,.78);border:calc(var(--u)*.4) solid rgba(255,255,255,.4);color:#fff;font-weight:900;font-size:calc(var(--u)*3.6);border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);white-space:nowrap;display:flex;align-items:center;gap:calc(var(--u)*1.6);letter-spacing:.03em}
.sr-hand{font-size:calc(var(--u)*6);animation:sr-hand 1.4s ease-in-out infinite}
@keyframes sr-hand{0%,100%{transform:translateX(calc(var(--u)*-3))}50%{transform:translateX(calc(var(--u)*3))}}
.sr-big{position:absolute;left:50%;top:36%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*22);color:#fff;-webkit-text-stroke:calc(var(--u)*1.2) #1a1a2a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #1a1a2a;animation:sr-pop .9s ease-out forwards;white-space:nowrap}
.sr-big.go{color:#6ae84a;font-size:calc(var(--u)*18)}
@keyframes sr-pop{0%{transform:translate(-50%,-50%) scale(1.8);opacity:0}20%{transform:translate(-50%,-50%) scale(1);opacity:1}80%{opacity:1}100%{transform:translate(-50%,-50%) scale(.9);opacity:0}}
.sr-word{position:absolute;left:50%;top:24%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*7.4);color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #2a2a40;paint-order:stroke fill;letter-spacing:.04em;white-space:nowrap;animation:sr-word 1.3s ease-out forwards}
.sr-word.wind{color:#ffe07a;-webkit-text-stroke-color:#1a1a2a}
.sr-word.shield{color:#e8f4ff}
.sr-word.pill{-webkit-text-stroke:0;font-size:calc(var(--u)*4.6);background:rgba(255,255,255,.9);color:#c8cad8;border:calc(var(--u)*.5) solid #c8cad8;border-radius:999px;padding:calc(var(--u)*.8) calc(var(--u)*4);top:45%;color:#7a7a9a}
@keyframes sr-word{0%{transform:translate(-50%,-50%) scale(.4);opacity:0}15%{transform:translate(-50%,-50%) scale(1.1);opacity:1}25%{transform:translate(-50%,-50%) scale(1)}80%{opacity:1}100%{transform:translate(-50%,-70%);opacity:0}}
.sr-plus{position:absolute;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*4.6);color:#ff9a2a;-webkit-text-stroke:calc(var(--u)*.35) #fff;paint-order:stroke fill;pointer-events:none;white-space:nowrap}
.sr-dim{position:absolute;inset:0;background:rgba(30,34,70,.45);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box}
.sr-card-end{background:linear-gradient(180deg,#ffffff,#e8eefc);border:calc(var(--u)*.7) solid #fff;border-radius:calc(var(--u)*6);padding:calc(var(--u)*4) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.8);width:calc(var(--u)*82);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(20,20,60,.45);color:#2a3a6a;animation:sr-in .45s cubic-bezier(.2,1.4,.4,1)}
@keyframes sr-in{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
.sr-medal{font-size:calc(var(--u)*15);line-height:1}
.sr-endtitle{font-weight:900;font-size:calc(var(--u)*6);text-align:center}
.sr-endsub{font-weight:700;font-size:calc(var(--u)*4);text-align:center;color:#3a8a5a}
.sr-stats{display:flex;gap:calc(var(--u)*2);width:100%}
.sr-stats>div{flex:1;background:#fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4);display:flex;flex-direction:column;align-items:center;box-shadow:inset 0 0 0 calc(var(--u)*.4) #d8e0f4}
.sr-stats small{font-size:calc(var(--u)*3);color:#6a7aa8;font-weight:700}
.sr-stats b{font-size:calc(var(--u)*5);font-weight:900}
.sr-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.2);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:max(50px,calc(var(--u)*11.5));cursor:pointer;background:linear-gradient(180deg,#ff9a4a,#e8582a);box-shadow:0 calc(var(--u)*.9) 0 #a83a14,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.sr-btn.alt{background:linear-gradient(180deg,#5a8ae8,#2a5ac8);box-shadow:0 calc(var(--u)*.9) 0 #1a3a8a;font-size:calc(var(--u)*4.4)}
.sr-btn:active{transform:translateY(calc(var(--u)*.5))}
.sr-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*32);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}

.land .sr-cards{left:auto;right:calc(var(--u)*2.4);bottom:auto;top:calc(var(--u)*17);transform:none;flex-direction:column;gap:calc(var(--u)*1.2)}
.land .sr-card{width:calc(var(--u)*13);height:calc(var(--u)*17.5);border-radius:calc(var(--u)*4)}
.land .sr-card img{bottom:calc(var(--u)*-1)}
.land .sr-badge{font-size:calc(var(--u)*2.2)}
.land .sr-score{font-size:calc(var(--u)*2.8);bottom:calc(var(--u)*1.4)}
.land .sr-you{display:none}
.land .sr-card-end{width:calc(var(--u)*120);display:grid;grid-template-columns:1fr 1fr;align-items:center;column-gap:calc(var(--u)*4)}
.land .sr-card-end>*{grid-column:2}
.land .sr-card-end>.sr-logo,.land .sr-card-end>.sr-medal{grid-column:1}
.land .sr-card-end>.sr-logo{grid-row:1/3}
.land .sr-card-end>.sr-medal{grid-row:3/6;font-size:calc(var(--u)*24)}
.land .sr-exit{bottom:calc(var(--u)*4)}
.land .sr-drag{top:62%}
`;
