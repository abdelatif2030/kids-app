// Screens and HUD like the owner's video: dark slate panels, orange gradient buttons, bold italic capitals; hearts top
// left, the coin pill and pause top right, the "Near misses 0/12" panel with an orange bar, a round speedometer bottom
// left and a round nitro button bottom right; a big orange "3, 2, 1, GO!" and "Near miss +1" / "Combo x2" pops.
export const CSS = `
.cd-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#1c1f26}
.cd-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.cd-layer{position:absolute;inset:0;pointer-events:none}
.cd-layer button,.cd-layer .cd-panel{pointer-events:auto}
.cd-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#ff9a2a;background:#1c1f26}
.cd-i{font-style:italic;font-weight:900;letter-spacing:.02em}
.cd-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.4);background:rgba(20,22,28,.85);border-radius:999px;padding:calc(var(--u)*.8) calc(var(--u)*2.6);font-weight:900;font-style:italic;font-size:calc(var(--u)*4);direction:ltr}
.cd-coin{display:inline-block;width:calc(var(--u)*4);height:calc(var(--u)*4);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#b8780a);box-shadow:inset 0 0 0 calc(var(--u)*.4) #c98a14}
.cd-sq{position:absolute;width:calc(var(--u)*10);height:calc(var(--u)*10);border-radius:50%;border:none;background:rgba(20,22,28,.85);color:#fff;font-size:calc(var(--u)*4.4);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit}
.cd-hearts{position:absolute;top:max(calc(var(--u)*3),env(safe-area-inset-top));left:calc(var(--u)*3.4);display:flex;gap:calc(var(--u)*1.4);font-size:calc(var(--u)*5.6);direction:ltr}
.cd-hearts b{color:#e8202a;filter:drop-shadow(0 calc(var(--u)*.3) 0 #5a0a0a)}
.cd-hearts b.off{color:#1a1a1e;filter:none;opacity:.8}
.cd-topr{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));right:calc(var(--u)*3);display:flex;gap:calc(var(--u)*1.6);align-items:center;direction:ltr}
.cd-topr .cd-sq{position:static}
.cd-near{position:absolute;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*12);left:50%;transform:translateX(-50%);width:calc(var(--u)*50);background:rgba(20,22,28,.88);border-radius:calc(var(--u)*2);padding:calc(var(--u)*1.4) calc(var(--u)*2.6);box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.35)}
.cd-near .row{display:flex;justify-content:space-between;align-items:center;font-size:calc(var(--u)*3);font-weight:700}
.cd-near .row b{font-size:calc(var(--u)*4.2);font-style:italic;direction:ltr}
.cd-near .bar{height:calc(var(--u)*1.1);border-radius:9px;background:#3a3e48;margin-top:calc(var(--u)*1);overflow:hidden}
.cd-near .bar i{display:block;height:100%;background:linear-gradient(90deg,#ff7a1a,#ffb347);transition:width .2s}
.cd-near .km{font-size:calc(var(--u)*2.6);opacity:.75;margin-top:calc(var(--u)*.6);text-align:center;direction:ltr}
.cd-gauge{position:absolute;width:calc(var(--u)*22);height:calc(var(--u)*22);border-radius:50%;background:radial-gradient(circle,#24272f 0 60%,#14161b 61%);display:flex;flex-direction:column;align-items:center;justify-content:center;direction:ltr}
.cd-gauge svg{position:absolute;inset:0;width:100%;height:100%}
.cd-speed{left:calc(var(--u)*3);bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom))}
.cd-speed b{font-size:calc(var(--u)*7.6);font-style:italic;line-height:1}
.cd-speed span{font-size:calc(var(--u)*2.2);opacity:.75;font-weight:700}
.cd-nitro{right:calc(var(--u)*3);bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));border:none;padding:0;color:#fff;font-family:inherit;cursor:pointer;pointer-events:auto}
.cd-nitro i{font-style:normal;font-size:calc(var(--u)*6.6);line-height:1;transform:rotate(-35deg)}
.cd-nitro span{font-size:calc(var(--u)*2.6);font-style:italic;font-weight:900;margin-top:calc(var(--u)*.6)}
.cd-nitro.ready{animation:cdPulse .9s ease-in-out infinite}
.cd-nitro.on{background:radial-gradient(circle,#1a6ad8 0 60%,#14161b 61%)}
@keyframes cdPulse{50%{transform:scale(1.07)}}
.cd-count{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%);font-size:calc(var(--u)*26);font-style:italic;font-weight:900;color:#ffb347;-webkit-text-stroke:calc(var(--u)*.6) #7a2a00;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) calc(var(--u)*2) rgba(0,0,0,.5);pointer-events:none}
.cd-count.white{color:#fff;-webkit-text-stroke:calc(var(--u)*.4) #1c1f26}
.cd-count.pop{animation:cdCount .9s ease-out forwards}
@keyframes cdCount{from{transform:translate(-50%,-50%) scale(1.6);opacity:0}20%{opacity:1;transform:translate(-50%,-50%) scale(1)}80%{opacity:1}to{opacity:0;transform:translate(-50%,-50%) scale(.9)}}
.cd-pop{position:absolute;left:50%;transform:translateX(-50%);font-style:italic;font-weight:900;white-space:nowrap;pointer-events:none;animation:cdPop 1s ease-out forwards;text-shadow:0 calc(var(--u)*.4) calc(var(--u)*1) rgba(0,0,0,.6)}
.cd-pop.near{top:31%;font-size:calc(var(--u)*5.4);color:#fff}
.cd-pop.combo{top:25%;font-size:calc(var(--u)*5);color:#ffb347}
.cd-pop.coin{font-size:calc(var(--u)*4);color:#ffd23a}
@keyframes cdPop{from{transform:translateX(-50%) scale(1.4);opacity:0}15%{transform:translateX(-50%) scale(1);opacity:1}75%{opacity:1}to{transform:translate(-50%,calc(var(--u)*-6));opacity:0}}
.cd-toast{position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);background:rgba(20,22,28,.9);border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.6) calc(var(--u)*3.4);font-weight:900;font-size:calc(var(--u)*3.8);text-align:center;max-width:calc(var(--u)*80);opacity:0;transition:opacity .3s;pointer-events:none}
.cd-toast.show{opacity:1}
.cd-dim{position:absolute;inset:0;background:rgba(10,12,16,.6);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box;pointer-events:auto}
.cd-panel{background:linear-gradient(180deg,#262a33,#1a1d24);border:calc(var(--u)*.3) solid #343844;border-radius:calc(var(--u)*3.6);box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.5);padding:calc(var(--u)*3.6);display:flex;flex-direction:column;align-items:stretch;gap:calc(var(--u)*2);width:calc(var(--u)*80);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box}
.cd-panel h2{margin:0;text-align:center;font-size:calc(var(--u)*7);font-style:italic;font-weight:900;text-transform:uppercase}
.cd-panel h2.red{color:#ff5a5a}
.cd-panel h2.orange{color:#ffb347}
.cd-sub{text-align:center;font-weight:900;font-size:calc(var(--u)*3.4);opacity:.8;font-style:italic}
.cd-btn{font-family:inherit;font-weight:900;font-style:italic;font-size:calc(var(--u)*5);color:#fff;border:none;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1.8) calc(var(--u)*4);min-height:calc(var(--u)*12);cursor:pointer;background:linear-gradient(180deg,#ffb347,#ff7a1a);box-shadow:0 calc(var(--u)*.7) 0 #b84a00,0 calc(var(--u)*1.2) calc(var(--u)*3) rgba(255,122,26,.35);text-transform:uppercase;letter-spacing:.03em}
.cd-btn.dark{background:linear-gradient(180deg,#2e323c,#1e2128);box-shadow:0 calc(var(--u)*.6) 0 #0e1014;border:calc(var(--u)*.25) solid #3a3e48;font-size:calc(var(--u)*4)}
.cd-btn.brown{background:linear-gradient(180deg,#4a3018,#2e1c0e);color:#ffb347;box-shadow:none;border:calc(var(--u)*.25) solid #5a3a1a;font-size:calc(var(--u)*4)}
.cd-btn[disabled]{filter:grayscale(1);opacity:.6}
.cd-btn:active{transform:translateY(calc(var(--u)*.5))}
.cd-btn:focus-visible,.cd-sq:focus-visible,.cd-level:focus-visible,.cd-nitro:focus-visible{outline:calc(var(--u)*.6) solid #ffb347;outline-offset:calc(var(--u)*.5)}
.cd-stars3{display:flex;justify-content:space-around;text-align:center}
.cd-stars3 div{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);font-size:calc(var(--u)*2.6);font-weight:900;opacity:.85;text-transform:uppercase}
.cd-stars3 b{font-size:calc(var(--u)*9);color:#ffc21a;filter:drop-shadow(0 0 calc(var(--u)*1) rgba(255,194,26,.6))}
.cd-stars3 b.off{color:#3a3e48;filter:none}
.cd-rows{display:flex;flex-direction:column}
.cd-rows div{display:flex;justify-content:space-between;align-items:center;padding:calc(var(--u)*1.3) calc(var(--u)*.6);border-bottom:calc(var(--u)*.2) solid #2e323c;font-size:calc(var(--u)*3.4);font-weight:700}
.cd-rows b{font-style:italic;font-size:calc(var(--u)*4.2);direction:ltr}
.cd-rows .tot b{color:#ffb347;font-size:calc(var(--u)*5)}
.cd-note{font-size:calc(var(--u)*2.8);text-align:center;opacity:.75;line-height:1.4}
.cd-menu{position:absolute;left:0;right:0;bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2)}
.cd-menu .cd-btn{width:calc(var(--u)*62)}
.cd-logo{position:absolute;top:calc(var(--u)*14);left:50%;transform:translateX(-50%);text-align:center;white-space:nowrap}
.cd-logo .a{display:block;font-size:calc(var(--u)*9);font-style:italic;font-weight:900;line-height:1;background:linear-gradient(180deg,#fff2c8,#ffb347 45%,#ff6a1a);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 calc(var(--u)*.6) 0 #6a2a00) drop-shadow(0 calc(var(--u)*1) calc(var(--u)*2) rgba(0,0,0,.5))}
.cd-logo .tag{display:inline-block;margin-top:calc(var(--u)*2.4);background:rgba(20,22,28,.85);border-radius:999px;padding:calc(var(--u)*.7) calc(var(--u)*3);font-size:calc(var(--u)*2.8);font-weight:900;font-style:italic;color:#ffd38a;letter-spacing:.06em;text-transform:uppercase}
.cd-carname{text-align:center}
.cd-carname b{display:block;font-size:calc(var(--u)*6);font-style:italic;font-weight:900;text-transform:uppercase}
.cd-carname span{font-size:calc(var(--u)*2.8);opacity:.75;font-weight:900;font-style:italic}
.cd-head{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*2.4);direction:ltr}
.cd-head .cd-sq{position:static}
.cd-head h3{margin:0;flex:1;font-size:calc(var(--u)*5);font-style:italic;font-weight:900;text-transform:uppercase}
.cd-sheet{position:absolute;left:0;right:0;bottom:0;max-height:62%;overflow:auto;background:linear-gradient(180deg,rgba(34,37,45,.97),#16181e);border-radius:calc(var(--u)*4) calc(var(--u)*4) 0 0;padding:calc(var(--u)*3) calc(var(--u)*4) max(calc(var(--u)*3),env(safe-area-inset-bottom));box-sizing:border-box;display:flex;flex-direction:column;gap:calc(var(--u)*1.6);pointer-events:auto}
.cd-stat{display:grid;grid-template-columns:calc(var(--u)*22) 1fr;align-items:center;gap:calc(var(--u)*2);font-size:calc(var(--u)*2.8);font-weight:900;text-transform:uppercase;opacity:.9}
.cd-stat i{display:block;height:calc(var(--u)*1.2);border-radius:9px;background:#343844;position:relative;overflow:hidden}
.cd-stat i::after{content:'';position:absolute;inset:0;width:var(--w);background:linear-gradient(90deg,#ff7a1a,#ffb347);border-radius:9px}
.cd-up{display:flex;align-items:center;gap:calc(var(--u)*2.4);padding:calc(var(--u)*1) 0;border-top:calc(var(--u)*.2) solid #2e323c}
.cd-up .ic{width:calc(var(--u)*8);height:calc(var(--u)*8);border-radius:50%;background:#2e323c;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*4.4);flex:none}
.cd-up .nm{flex:1}
.cd-up .nm b{display:block;font-size:calc(var(--u)*3.6);font-style:italic;text-transform:uppercase}
.cd-up .nm span{font-size:calc(var(--u)*2.6);opacity:.7}
.cd-up .pips{display:flex;gap:calc(var(--u)*.6);margin-top:calc(var(--u)*.6)}
.cd-up .pips i{width:calc(var(--u)*4);height:calc(var(--u)*.8);border-radius:9px;background:#3a3e48}
.cd-up .pips i.on{background:#ffb347}
.cd-up .cd-btn{font-size:calc(var(--u)*3.4);min-height:calc(var(--u)*9);padding:calc(var(--u)*1) calc(var(--u)*2.6);min-width:calc(var(--u)*16)}
.cd-arrow{position:absolute;top:34%;width:calc(var(--u)*9);height:calc(var(--u)*9);border-radius:50%;border:none;background:rgba(20,22,28,.85);color:#fff;font-size:calc(var(--u)*4.6);font-weight:900;cursor:pointer;pointer-events:auto;font-family:inherit}
.cd-worlds{display:flex;flex-direction:column;gap:calc(var(--u)*1.4)}
.cd-world{border-radius:calc(var(--u)*2);padding:calc(var(--u)*2) calc(var(--u)*3);display:flex;justify-content:space-between;align-items:center;font-size:calc(var(--u)*4);font-style:italic;font-weight:900;text-transform:uppercase;text-shadow:0 calc(var(--u)*.3) calc(var(--u)*.8) rgba(0,0,0,.6);min-height:calc(var(--u)*9)}
.cd-world.azure{background:linear-gradient(90deg,rgba(26,28,34,.2),rgba(26,28,34,0)),linear-gradient(180deg,#8ac8f0 0 45%,#3a9ac8 46% 60%,#e8d4a0 61%)}
.cd-world.canyon{background:linear-gradient(180deg,#ff9a5a 0 40%,#c8503a 41% 75%,#8a3a2a 76%)}
.cd-world.neon{background:linear-gradient(180deg,#2a1a5a 0 50%,#6a2aa8 51% 70%,#ff4ab8 71% 74%,#1a1030 75%)}
.cd-world small{font-size:calc(var(--u)*2.8);opacity:.9}
.cd-level{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);background:#22252d;border:calc(var(--u)*.3) solid #2e323c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1.4);color:#fff;font-family:inherit;cursor:pointer}
.cd-level b{font-size:calc(var(--u)*6);font-style:italic;line-height:1}
.cd-level span{font-size:calc(var(--u)*2.6);font-weight:900;text-transform:uppercase;opacity:.75}
.cd-level small{font-size:calc(var(--u)*2.6);color:#ffc21a}
.cd-level.on{border-color:#ffb347;background:linear-gradient(180deg,#3a2a18,#22252d)}
.cd-level.lock{opacity:.45}
.cd-lvrow{display:grid;grid-template-columns:1fr 1fr;gap:calc(var(--u)*1.4)}
.cd-detail{background:#22252d;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*2.4);display:flex;flex-direction:column;gap:calc(var(--u)*1.2)}
.cd-detail b{font-size:calc(var(--u)*4.4);font-style:italic;text-transform:uppercase}
.cd-detail .g{font-size:calc(var(--u)*3);opacity:.8}
.cd-detail .r{display:flex;justify-content:space-between;align-items:center}
.cd-detail .rw{font-weight:900;font-style:italic;color:#ffd23a;font-size:calc(var(--u)*4);direction:ltr}
.cd-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*30);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
.cd-land .cd-panel{width:calc(var(--u)*100)}
.cd-land .cd-sheet{left:auto;right:calc(var(--u)*3);top:calc(var(--u)*16);width:calc(var(--u)*80);max-height:none;border-radius:calc(var(--u)*4)}
.cd-land .cd-logo{top:calc(var(--u)*8)}
.cd-land .cd-menu .cd-btn{width:calc(var(--u)*56)}
`;

export function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k === 'text') e.textContent = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'style') e.style.cssText = v;
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) if (k !== null && k !== undefined && k !== false) e.append(k.nodeType ? k : document.createTextNode(String(k)));
  return e;
}

/** An arc gauge as SVG: value 0..1, colour. */
export function arc(color, value) {
  const r = 44;
  const c = 2 * Math.PI * r;
  const len = c * 0.75;
  return `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="${r}" fill="none" stroke="#2e323c" stroke-width="6" stroke-dasharray="${len} ${c}" transform="rotate(135 50 50)" stroke-linecap="round"/><circle cx="50" cy="50" r="${r}" fill="none" stroke="${color}" stroke-width="6" stroke-dasharray="${len * Math.max(0, Math.min(1, value))} ${c}" transform="rotate(135 50 50)" stroke-linecap="round"/></svg>`;
}
