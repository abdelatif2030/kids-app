// A minimal, panel-less HUD (white text with soft shadows), frosted dark glass for the menus and the victory card.
// Sizes come from the container: one unit = 1% of its shorter side.
export const CSS = `
.ja-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#2c4a3a}
.ja-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.ja-layer{position:absolute;inset:0;pointer-events:none}
.ja-layer button,.ja-layer .ja-glass{pointer-events:auto}
.ja-shadow{text-shadow:0 calc(var(--u)*.35) calc(var(--u)*.9) rgba(0,0,0,.55),0 0 calc(var(--u)*.3) rgba(0,0,0,.6)}
.ja-hud{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));inset-inline:calc(var(--u)*3);display:flex;align-items:center;justify-content:space-between;font-weight:900;font-size:calc(var(--u)*4.6)}
.ja-hud .grp{display:flex;align-items:center;gap:calc(var(--u)*1.8)}
.ja-heart{font-size:calc(var(--u)*4.6);filter:drop-shadow(0 calc(var(--u)*.3) calc(var(--u)*.5) rgba(0,0,0,.5))}
.ja-heart.off{opacity:.25;filter:grayscale(1)}
.ja-coin{display:inline-block;width:calc(var(--u)*4.4);height:calc(var(--u)*4.4);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.45) solid #2a1a10;box-sizing:border-box}
.ja-gem{display:inline-block;width:calc(var(--u)*3.4);height:calc(var(--u)*4.2);clip-path:polygon(50% 0,100% 30%,85% 100%,15% 100%,0 30%);background:rgba(255,255,255,.28)}
.ja-gem.on{background:linear-gradient(160deg,#7dffb0,#2fbf71 55%,#1e8f53)}
.ja-clock.low{color:#ffd166;animation:jaPulse .5s infinite alternate}
@keyframes jaPulse{to{transform:scale(1.12)}}
.ja-prog{position:absolute;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*8);inset-inline:calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*2);font-size:calc(var(--u)*2.8);font-weight:900;letter-spacing:.05em;opacity:.95}
.ja-bar{flex:1;height:calc(var(--u)*.9);background:rgba(255,255,255,.35);border-radius:9px;position:relative}
.ja-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(90deg,#ffd166,#f5a524);border-radius:9px}
.ja-bar b{position:absolute;top:50%;width:calc(var(--u)*2.4);height:calc(var(--u)*2.4);margin-top:calc(var(--u)*-1.2);margin-inline-start:calc(var(--u)*-1.2);border-radius:50%;background:#fff;box-shadow:0 0 calc(var(--u)*1) rgba(0,0,0,.4)}
.ja-bar .end{position:absolute;inset-inline-end:calc(var(--u)*-1);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.4)}
.ja-round{position:absolute;width:calc(var(--u)*10);height:calc(var(--u)*10);border-radius:50%;border:none;background:rgba(20,26,24,.35);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);color:#fff;font-size:calc(var(--u)*4.6);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit}
.ja-round:focus-visible,.ja-btn:focus-visible,.ja-card:focus-visible{outline:calc(var(--u)*.6) solid #ffd166;outline-offset:calc(var(--u)*.5)}
.ja-toast{position:absolute;left:50%;top:34%;transform:translate(-50%,-50%);font-size:calc(var(--u)*8.5);font-weight:900;letter-spacing:.02em;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none}
.ja-toast.show{opacity:1;animation:jaPop .35s ease-out}
.ja-toast small{display:block;text-align:center;font-size:.45em;opacity:.9}
@keyframes jaPop{from{transform:translate(-50%,-50%) scale(.5)}to{transform:translate(-50%,-50%) scale(1)}}
.ja-hint{position:absolute;left:50%;top:22%;transform:translateX(-50%);font-size:calc(var(--u)*4.4);font-weight:900;white-space:nowrap;opacity:0;transition:opacity .3s;pointer-events:none}
.ja-hint.show{opacity:1}
.ja-dim{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(10,14,12,.25)}
.ja-glass{background:rgba(22,26,30,.62);backdrop-filter:blur(16px) saturate(1.2);-webkit-backdrop-filter:blur(16px) saturate(1.2);border:1px solid rgba(255,255,255,.16);border-radius:calc(var(--u)*5);box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.45);padding:calc(var(--u)*4) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2.4);max-width:calc(100% - var(--u)*6);box-sizing:border-box}
.ja-title{font-size:calc(var(--u)*7);font-weight:900;text-align:center;line-height:1.1}
.ja-sub{font-size:calc(var(--u)*3.6);opacity:.85;text-align:center}
.ja-stats{display:flex;gap:calc(var(--u)*2)}
.ja-stat{background:rgba(255,255,255,.1);border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.6) calc(var(--u)*2.6);min-width:calc(var(--u)*14);text-align:center}
.ja-stat b{display:block;font-size:calc(var(--u)*6);font-weight:900}
.ja-stat span{font-size:calc(var(--u)*2.8);opacity:.8}
.ja-reward{color:#ffd166;font-weight:900;font-size:calc(var(--u)*3.8)}
.ja-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);border-radius:999px;padding:calc(var(--u)*2.2) calc(var(--u)*7);min-height:calc(var(--u)*11);min-width:calc(var(--u)*46);cursor:pointer;border:none;background:#fff;color:#1f2a24;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.3)}
.ja-btn.ghost{background:transparent;color:#fff;border:calc(var(--u)*.4) solid rgba(255,255,255,.75);box-shadow:none}
.ja-btn:active{transform:scale(.97)}
.ja-portrait{width:calc(var(--u)*22);height:calc(var(--u)*22)}
.ja-logo{font-size:calc(var(--u)*10);font-weight:900;color:#ffd166;text-align:center;line-height:1.05;-webkit-text-stroke:calc(var(--u)*.5) #2a1a10;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #2a1a10,0 calc(var(--u)*1.6) calc(var(--u)*2.4) rgba(0,0,0,.4)}
.ja-cards{display:flex;gap:calc(var(--u)*2.4);flex-wrap:wrap;justify-content:center}
.ja-card{font-family:inherit;color:#fff;cursor:pointer;width:calc(var(--u)*27);min-height:calc(var(--u)*30);border-radius:calc(var(--u)*4);border:1px solid rgba(255,255,255,.2);background:rgba(22,26,30,.55);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:calc(var(--u)*2.4) calc(var(--u)*1.6);box-sizing:border-box;position:relative}
.ja-card .ic{font-size:calc(var(--u)*10);line-height:1}
.ja-card .nm{font-size:calc(var(--u)*4);font-weight:900;text-align:center}
.ja-card .gems{display:flex;gap:calc(var(--u)*1)}
.ja-card.locked{opacity:.55}
.ja-card .lock{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*12)}
.ja-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*3);pointer-events:none}
.ja-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;background:linear-gradient(180deg,#79c2d6,#f7cf98)}
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

export const LEVEL_ICON = { trail: '🌿', ruins: '🏛️', temple: '☀️' };
