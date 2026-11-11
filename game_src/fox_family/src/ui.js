// Screens on top of the 3D farm: HUD, farm map, tool shed, results. Warm wood-and-cream style; one unit = 1% of the
// shorter side of the container, so phones, tablets and big screens all look right.
export const CSS = `
.fx-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.fx-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.fx-layer{position:absolute;inset:0;pointer-events:none}
.fx-layer button,.fx-layer .fx-card{pointer-events:auto}
.fx-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.fx-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.fx-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.fx-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.fx-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.fx-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.fx-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.fx-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.fx-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.fx-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.fx-label.full{background:#ffd75e;animation:fxPulse .5s infinite alternate}
@keyframes fxPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.fx-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.fx-toast.show{opacity:1}
.fx-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.fx-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.fx-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:fxUp 1s ease-out forwards}
@keyframes fxUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.fx-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.fx-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.fx-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.fx-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.fx-btn.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.fx-btn[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.fx-btn:active{transform:translateY(calc(var(--u)*.5))}
.fx-btn:focus-visible,.fx-node:focus-visible,.fx-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.fx-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.fx-land .fx-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.fx-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.fx-card .ic{font-size:calc(var(--u)*8)}
.fx-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.fx-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.fx-card .pips{display:flex;gap:calc(var(--u)*.6)}
.fx-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.fx-card .pip.on{background:#f2a51e}
.fx-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.fx-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.fx-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.fx-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.fx-node.next{animation:fxPulse2 .8s infinite alternate}
@keyframes fxPulse2{to{transform:scale(1.08)}}
.fx-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.fx-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.fx-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.fx-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.fx-stars .off{filter:grayscale(1);opacity:.4}
.fx-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.fx-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.fx-made b{display:block;font-size:calc(var(--u)*5.4)}
.fx-made span{font-size:calc(var(--u)*2.8)}
.fx-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
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
export const CSS2 = `
.fx-bar{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));left:50%;transform:translateX(-50%);display:flex;gap:calc(var(--u)*1.4);pointer-events:none;width:auto;max-width:none;height:auto;background:none;border:none;border-radius:0;overflow:visible;box-shadow:none}
.fx-chip{background:#fff;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.2);font-weight:900;font-size:calc(var(--u)*3.6);color:#2a2a3a;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.2) rgba(0,0,0,.25);white-space:nowrap}
.fx-goal{position:absolute;top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*8.5);left:50%;transform:translateX(-50%);font-weight:900;font-size:calc(var(--u)*3.4);color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.6);pointer-events:none;white-space:nowrap}
.fx-arrows{position:absolute;left:50%;bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;gap:calc(var(--u)*2.4);direction:ltr}
.fx-arrow{width:calc(var(--u)*15);height:calc(var(--u)*15);border-radius:calc(var(--u)*3.4);border:none;background:#fff;color:#2a2a3a;font-size:calc(var(--u)*7);font-weight:900;display:flex;align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.9) 0 #b8c0cc,0 calc(var(--u)*1.4) calc(var(--u)*2) rgba(0,0,0,.25);cursor:pointer;padding:0;touch-action:none;user-select:none;-webkit-user-select:none;pointer-events:auto}
.fx-arrow.up{background:#5ae0a0;color:#0a4a2a;box-shadow:0 calc(var(--u)*.9) 0 #2aa86a,0 calc(var(--u)*1.4) calc(var(--u)*2) rgba(0,0,0,.25)}
.fx-arrow:active{transform:translateY(calc(var(--u)*.6))}
.fx-pop{position:absolute;font-weight:900;font-size:calc(var(--u)*5.4);color:#fff;-webkit-text-stroke:calc(var(--u)*.4) #2a5a9a;paint-order:stroke fill;transform:translate(-50%,-100%);pointer-events:none;animation:fxPop2 1s ease-out forwards;white-space:nowrap}
@keyframes fxPop2{from{transform:translate(-50%,-100%) scale(1.4)}to{transform:translate(-50%,-220%) scale(1);opacity:0}}
.fx-card{background:#fff;border-radius:calc(var(--u)*4);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.6);box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.35);pointer-events:auto;max-width:92%;color:#2a2a3a}
.fx-card h2{margin:0;font-size:calc(var(--u)*5.4);font-weight:900}
.fx-row3{display:flex;gap:calc(var(--u)*3)}
.fx-row3 div{display:flex;flex-direction:column;align-items:center;font-weight:700;font-size:calc(var(--u)*2.8);width:calc(var(--u)*17);text-align:center}
.fx-row3 b{font-size:calc(var(--u)*9)}
.fx-row3 .off b{filter:grayscale(1);opacity:.35}
.fx-cbtn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.2);border:none;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.6) calc(var(--u)*5);cursor:pointer;background:#5ae0a0;color:#0a4a2a;box-shadow:0 calc(var(--u)*.8) 0 #2aa86a}
.fx-cbtn.alt{background:#eef2f6;color:#2a2a3a;box-shadow:0 calc(var(--u)*.8) 0 #b8c0cc}

.fx-root{background:#bfe8ff;color:#2a2a3a}
.fx-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.fx-padlbl .ic{font-size:calc(var(--u)*6)}
.fx-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.fx-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.fx-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.fx-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.fx-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.fx-chefs{display:flex;gap:calc(var(--u)*3)}
.fx-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.fx-chef .f{font-size:calc(var(--u)*9)}
.fx-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.fx-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.fx-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`;
