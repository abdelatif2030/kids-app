// Screens on top of the 3D farm: HUD, farm map, tool shed, results. Warm wood-and-cream style; one unit = 1% of the
// shorter side of the container, so phones, tablets and big screens all look right.
export const CSS = `
.gt-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.gt-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.gt-layer{position:absolute;inset:0;pointer-events:none}
.gt-layer button,.gt-layer .gt-card{pointer-events:auto}
.gt-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.gt-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.gt-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.gt-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.gt-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.gt-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.gt-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.gt-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.gt-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.gt-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.gt-label.full{background:#ffd75e;animation:gtPulse .5s infinite alternate}
@keyframes gtPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.gt-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.gt-toast.show{opacity:1}
.gt-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.gt-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.gt-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:gtUp 1s ease-out forwards}
@keyframes gtUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.gt-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.gt-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.gt-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.gt-btn2{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.gt-btn2.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.gt-btn2[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.gt-btn2:active{transform:translateY(calc(var(--u)*.5))}
.gt-btn2:focus-visible,.gt-node:focus-visible,.gt-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.gt-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.gt-land .gt-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.gt-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.gt-card .ic{font-size:calc(var(--u)*8)}
.gt-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.gt-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.gt-card .pips{display:flex;gap:calc(var(--u)*.6)}
.gt-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.gt-card .pip.on{background:#f2a51e}
.gt-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.gt-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.gt-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.gt-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.gt-node.next{animation:gtPulse2 .8s infinite alternate}
@keyframes gtPulse2{to{transform:scale(1.08)}}
.gt-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.gt-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.gt-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.gt-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.gt-stars .off{filter:grayscale(1);opacity:.4}
.gt-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.gt-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.gt-made b{display:block;font-size:calc(var(--u)*5.4)}
.gt-made span{font-size:calc(var(--u)*2.8)}
.gt-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
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
.gt-root{background:#7cc8f0;color:#2a3a1a}
.gt-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.gt-padlbl .ic{font-size:calc(var(--u)*6)}
.gt-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.gt-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.gt-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.gt-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.gt-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.gt-chefs{display:flex;gap:calc(var(--u)*3)}
.gt-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.gt-chef .f{font-size:calc(var(--u)*9)}
.gt-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.gt-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.gt-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`;
export const CSS3 = `
.gt-root .gt-panel{background:rgba(250,255,240,.95);border-color:#2f8a3a;box-shadow:0 calc(var(--u)*1.2) 0 #1f6a2a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.35);color:#1f3a1a}
.gt-root .gt-title{color:#1f7a2a}
.gt-root .gt-logo{-webkit-text-stroke-color:#1f6a2a;text-shadow:0 calc(var(--u)*.8) 0 #1f6a2a;color:#ffd23a}
.gt-root .gt-node{background:radial-gradient(circle at 40% 35%,#3fae4a,#1f6a2a);box-shadow:0 calc(var(--u)*.8) 0 #0f4a1a;border-color:#ffd23a}
.gt-root .gt-node.lock{background:radial-gradient(circle at 40% 35%,#9ab89a,#5a7a5a);border-color:#fff}
.gt-root .gt-map{grid-template-columns:repeat(3,calc(var(--u)*17))}
.gt-timer{position:absolute;left:50%;top:max(calc(var(--u)*2),env(safe-area-inset-top));transform:translateX(-50%);width:calc(var(--u)*19);height:calc(var(--u)*19);border-radius:50%;background:radial-gradient(circle at 40% 35%,#2f9a3a,#14561e);border:calc(var(--u)*.9) solid #ffd23a;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:calc(var(--u)*6.2);color:#fff;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.35);pointer-events:none}
.gt-timer.hot{background:radial-gradient(circle at 40% 35%,#ff5a4a,#a01a14);animation:gtBeat .5s infinite alternate}
@keyframes gtBeat{to{transform:translateX(-50%) scale(1.08)}}
.gt-holder{position:absolute;left:50%;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*21);transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*1.4);background:linear-gradient(90deg,#1f6a2a,#2f9a3a);border:calc(var(--u)*.45) solid #ffd23a;border-radius:999px;padding:calc(var(--u)*.4) calc(var(--u)*3) calc(var(--u)*.4) calc(var(--u)*.6);color:#fff;font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none}
.gt-holder .f{width:calc(var(--u)*7.4);height:calc(var(--u)*7.4);border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5)}
.gt-holder.me{background:linear-gradient(90deg,#e0a010,#ffc21a);color:#3a2a00}
.gt-you{position:absolute;transform:translate(-50%,-100%);font-weight:900;font-size:calc(var(--u)*3.6);color:#fff;-webkit-text-stroke:calc(var(--u)*.35) #1f6a2a;paint-order:stroke fill;pointer-events:none;text-align:center;line-height:1}
.gt-pointer{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);margin:calc(var(--u)*-5.5) 0 0 calc(var(--u)*-5.5);border-radius:50%;background:rgba(31,106,42,.85);border:calc(var(--u)*.5) solid #ffd23a;display:none;align-items:center;justify-content:center;flex-direction:column;font-size:calc(var(--u)*4.6);color:#fff;font-weight:900;pointer-events:none}
.gt-pointer small{font-size:calc(var(--u)*2.6)}
.gt-btn{position:absolute;border-radius:50%;border:calc(var(--u)*.7) solid rgba(255,255,255,.95);color:#fff;font-family:inherit;font-weight:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;padding:0;cursor:pointer;pointer-events:auto;box-shadow:0 calc(var(--u)*.9) 0 rgba(0,0,0,.3)}
.gt-btn b{font-size:calc(var(--u)*7);line-height:1}
.gt-btn span{font-size:calc(var(--u)*3)}
.gt-grab{width:calc(var(--u)*21);height:calc(var(--u)*21);background:radial-gradient(circle at 40% 35%,#ffcf3a,#e08a10)}
.gt-grab.near{animation:gtBeat2 .4s infinite alternate}
@keyframes gtBeat2{to{transform:scale(1.12)}}
.gt-jump{width:calc(var(--u)*16);height:calc(var(--u)*16);background:radial-gradient(circle at 40% 35%,#5ac8ff,#1f7ac8)}
.gt-btn:active{transform:scale(.92)}
.gt-count{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*3);pointer-events:none}
.gt-count .n{width:calc(var(--u)*30);height:calc(var(--u)*30);border-radius:50%;background:radial-gradient(circle at 40% 35%,#2f9a3a,#14561e);border:calc(var(--u)*1.2) solid #ffd23a;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*16);font-weight:900;color:#fff;animation:gtPop .9s ease-out infinite}
@keyframes gtPop{from{transform:scale(1.3)}to{transform:scale(1)}}
.gt-count .r{background:#1f6a2a;color:#fff;font-weight:900;font-size:calc(var(--u)*7);padding:calc(var(--u)*1) calc(var(--u)*8);transform:rotate(-4deg);border-top:calc(var(--u)*.6) solid #ffd23a;border-bottom:calc(var(--u)*.6) solid #ffd23a}
.gt-count .s{font-weight:900;font-size:calc(var(--u)*4.2);color:#fff;-webkit-text-stroke:calc(var(--u)*.35) #1f3a1a;paint-order:stroke fill;text-align:center;max-width:90%}
.gt-banner{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*8);color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.6) #6a3a00;paint-order:stroke fill;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .25s}
.gt-banner.show{opacity:1}
`;
