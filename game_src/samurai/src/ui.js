// Screens on top of the 3D farm: HUD, farm map, tool shed, results. Warm wood-and-cream style; one unit = 1% of the
// shorter side of the container, so phones, tablets and big screens all look right.
export const CSS = `
.sa-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.sa-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.sa-layer{position:absolute;inset:0;pointer-events:none}
.sa-layer button,.sa-layer .sa-card{pointer-events:auto}
.sa-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.sa-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.sa-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.sa-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.sa-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.sa-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.sa-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.sa-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.sa-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.sa-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.sa-label.full{background:#ffd75e;animation:saPulse .5s infinite alternate}
@keyframes saPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.sa-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.sa-toast.show{opacity:1}
.sa-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.sa-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.sa-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:saUp 1s ease-out forwards}
@keyframes saUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.sa-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.sa-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.sa-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.sa-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.sa-btn.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.sa-btn[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.sa-btn:active{transform:translateY(calc(var(--u)*.5))}
.sa-btn:focus-visible,.sa-node:focus-visible,.sa-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.sa-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.sa-land .sa-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.sa-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.sa-card .ic{font-size:calc(var(--u)*8)}
.sa-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.sa-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.sa-card .pips{display:flex;gap:calc(var(--u)*.6)}
.sa-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.sa-card .pip.on{background:#f2a51e}
.sa-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.sa-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.sa-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.sa-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.sa-node.next{animation:saPulse2 .8s infinite alternate}
@keyframes saPulse2{to{transform:scale(1.08)}}
.sa-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.sa-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.sa-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.sa-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.sa-stars .off{filter:grayscale(1);opacity:.4}
.sa-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.sa-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.sa-made b{display:block;font-size:calc(var(--u)*5.4)}
.sa-made span{font-size:calc(var(--u)*2.8)}
.sa-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
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
.sa-root{background:#2a1e30;color:#fff}
.sa-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.sa-padlbl .ic{font-size:calc(var(--u)*6)}
.sa-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.sa-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.sa-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.sa-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.sa-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.sa-chefs{display:flex;gap:calc(var(--u)*3)}
.sa-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.sa-chef .f{font-size:calc(var(--u)*9)}
.sa-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.sa-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.sa-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`;
export const CSS3 = `
.sa-hearts{position:absolute;top:max(calc(var(--u)*2.6),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*16);display:flex;gap:calc(var(--u)*.6);font-size:calc(var(--u)*5.2);background:rgba(30,20,40,.55);border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2);pointer-events:none}
.sa-hearts .off{filter:grayscale(1);opacity:.35}
.sa-kills{position:absolute;top:max(calc(var(--u)*2.6),env(safe-area-inset-top));inset-inline-end:calc(var(--u)*16);display:flex;align-items:center;gap:calc(var(--u)*1.2);font-weight:900;font-size:calc(var(--u)*5);color:#fff;background:rgba(30,20,40,.55);border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);pointer-events:none}
.sa-combo{position:absolute;inset-inline-end:calc(var(--u)*4);top:28%;text-align:center;pointer-events:none;transition:opacity .3s}
.sa-combo b{display:block;font-size:calc(var(--u)*14);line-height:1;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.6) #5a2a10;paint-order:stroke fill;font-weight:900}
.sa-combo span{font-size:calc(var(--u)*3.6);letter-spacing:calc(var(--u)*.8);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.3) #5a2a40;paint-order:stroke fill}
.sa-combo i{display:block;height:calc(var(--u)*1.2);margin-top:calc(var(--u)*.8);border-radius:9px;background:linear-gradient(90deg,#ff6a9a,#ffd23a)}
.sa-combo.pop b{animation:saBump .25s}
@keyframes saBump{from{transform:scale(1.5)}}
.sa-banner{position:absolute;left:50%;top:22%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*8);color:#fff;-webkit-text-stroke:calc(var(--u)*.6) #7a1a3a;paint-order:stroke fill;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .3s}
.sa-banner.show{opacity:1}
.sa-bossbar{position:absolute;left:50%;top:max(calc(var(--u)*13),env(safe-area-inset-top));transform:translateX(-50%);width:min(70%,calc(var(--u)*90));pointer-events:none;text-align:center;font-weight:900;font-size:calc(var(--u)*3.6);display:none}
.sa-bossbar div{height:calc(var(--u)*3.4);border-radius:999px;background:rgba(30,20,40,.7);border:calc(var(--u)*.4) solid #fff;overflow:hidden;margin-top:calc(var(--u)*.6)}
.sa-bossbar i{display:block;height:100%;background:linear-gradient(90deg,#ff4a3a,#ff9a3a);transition:width .2s}
.sa-dashbtn{position:absolute;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));inset-inline-start:calc(var(--u)*4);width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.7) solid #fff;background:radial-gradient(circle at 40% 35%,#ff8ab0,#d23a6a);color:#fff;font-size:calc(var(--u)*7);font-family:inherit;font-weight:900;box-shadow:0 calc(var(--u)*.8) 0 #8a1a40;pointer-events:auto;cursor:pointer;padding:0}
.sa-dashbtn.cd{filter:grayscale(.7) brightness(.8)}
.sa-slice{position:absolute;font-weight:900;font-size:calc(var(--u)*6);color:#fff;-webkit-text-stroke:calc(var(--u)*.45) #a01a4a;paint-order:stroke fill;pointer-events:none;animation:saSlice .8s ease-out forwards;white-space:nowrap}
@keyframes saSlice{from{transform:translate(-50%,-50%) scale(1.6) rotate(-8deg);opacity:1}to{transform:translate(-50%,-120%) scale(1) rotate(-8deg);opacity:0}}
.sa-flash{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}
.sa-flash.go{animation:saFlash .5s ease-out}
@keyframes saFlash{from{opacity:.85}to{opacity:0}}
.sa-bigcut{position:absolute;left:-10%;top:50%;width:120%;height:calc(var(--u)*2.4);background:linear-gradient(90deg,transparent,#fff 20%,#bfe6ff 50%,#fff 80%,transparent);box-shadow:0 0 calc(var(--u)*4) #9fd8ff;transform:rotate(-18deg) scaleX(0);transform-origin:left center;pointer-events:none;opacity:0}
.sa-bigcut.go{animation:saCut 1.1s ease-out}
@keyframes saCut{0%{opacity:1;transform:rotate(-18deg) scaleX(0)}30%{opacity:1;transform:rotate(-18deg) scaleX(1)}100%{opacity:0;transform:rotate(-18deg) scaleX(1)}}
.sa-root .sa-node{background:radial-gradient(circle at 40% 35%,#ff8ab0,#c23a6a);box-shadow:0 calc(var(--u)*.8) 0 #7a1a40}
.sa-root .sa-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.sa-root .sa-map{grid-template-columns:repeat(3,calc(var(--u)*17))}
.sa-root .sa-logo{-webkit-text-stroke-color:#7a1a3a;text-shadow:0 calc(var(--u)*.8) 0 #7a1a3a}
.sa-root .sa-panel{background:rgba(255,244,248,.95);border-color:#e05a8a;box-shadow:0 calc(var(--u)*1.2) 0 #9a2a5a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.4);color:#4a1a30}
.sa-root .sa-title{color:#c2255a}
.sa-root .sa-pill{color:#4a1a30}
`;
