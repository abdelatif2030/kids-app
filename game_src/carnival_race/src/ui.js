// The game's screens on top of the 3D view: menu, garage, race HUD, pause and results. Plain DOM, sized from the
// container (one unit = 1% of its shorter side) so phones, tablets and big screens all look right.

export const CSS = `
.cr-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#1d1250}
.cr-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.cr-layer{position:absolute;inset:0;pointer-events:none}
.cr-layer *{pointer-events:auto}
.cr-safe{position:absolute;inset:0;padding:calc(var(--u)*2.2) calc(var(--u)*2.6);padding-top:max(calc(var(--u)*2.2), env(safe-area-inset-top));padding-bottom:max(calc(var(--u)*2.2), env(safe-area-inset-bottom));box-sizing:border-box;pointer-events:none}
.cr-btn{font-family:inherit;font-weight:900;border:none;cursor:pointer;color:#fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*2) calc(var(--u)*4.5);font-size:calc(var(--u)*4.4);background:linear-gradient(180deg,#ff5c8a,#d6336c);box-shadow:0 calc(var(--u)*.8) 0 #8f1d47,0 calc(var(--u)*1.4) calc(var(--u)*2.4) rgba(0,0,0,.35);transform:skewX(-6deg);transition:transform .08s;min-height:calc(var(--u)*11);display:inline-flex;align-items:center;justify-content:center;gap:calc(var(--u)*1.4);outline:none}
.cr-btn:active{transform:skewX(-6deg) translateY(calc(var(--u)*.6));box-shadow:0 calc(var(--u)*.2) 0 #8f1d47}
.cr-btn:focus-visible{outline:calc(var(--u)*.7) solid #ffe066;outline-offset:calc(var(--u)*.6)}
.cr-btn.blue{background:linear-gradient(180deg,#4dabf7,#1c7ed6);box-shadow:0 calc(var(--u)*.8) 0 #0b4a8a,0 calc(var(--u)*1.4) calc(var(--u)*2.4) rgba(0,0,0,.35)}
.cr-btn.gold{background:linear-gradient(180deg,#ffe066,#fab005);color:#5c2d00;box-shadow:0 calc(var(--u)*.8) 0 #a86400,0 calc(var(--u)*1.4) calc(var(--u)*2.4) rgba(0,0,0,.35)}
.cr-btn.small{font-size:calc(var(--u)*3.4);min-height:calc(var(--u)*8.5);padding:calc(var(--u)*1.2) calc(var(--u)*3)}
.cr-btn[disabled]{filter:grayscale(.8) brightness(.8);cursor:default}
.cr-round{width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:#6b3fcb;color:#fff;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.6) rgba(0,0,0,.4);font-family:inherit;padding:0}
.cr-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:rgba(29,18,80,.85);border:calc(var(--u)*.45) solid #ff5c8a;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.8) calc(var(--u)*2.6);font-size:calc(var(--u)*4.4);font-weight:900;transform:skewX(-8deg);box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.4) rgba(0,0,0,.35)}
.cr-pill .tk{display:inline-block;width:calc(var(--u)*6);height:calc(var(--u)*3.6);border-radius:calc(var(--u)*.7);background:#ffd43b;position:relative}
.cr-pill .tk:after{content:'★';position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#e8590c;font-size:calc(var(--u)*2.6)}
.cr-top{position:absolute;top:0;inset-inline:0;display:flex;justify-content:space-between;align-items:flex-start;gap:calc(var(--u)*2)}
.cr-title{font-size:calc(var(--u)*10);font-weight:900;text-align:center;line-height:1.05;color:#ffe066;text-shadow:0 calc(var(--u)*.6) 0 #c2255c,0 calc(var(--u)*1.2) calc(var(--u)*2.4) rgba(0,0,0,.5);transform:skewX(-6deg)}
.cr-sub{font-size:calc(var(--u)*4);font-weight:700;text-align:center;opacity:.95;text-shadow:0 2px 6px rgba(0,0,0,.6)}
.cr-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*2.5);pointer-events:none}
.cr-center>*{pointer-events:auto}
.cr-tracks{display:flex;gap:calc(var(--u)*3);flex-wrap:wrap;justify-content:center;max-width:100%}
.cr-track{width:calc(var(--u)*30);min-height:calc(var(--u)*36);border-radius:calc(var(--u)*4);border:calc(var(--u)*.7) solid #fff;padding:calc(var(--u)*2.4);box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:space-between;cursor:pointer;color:#fff;font-family:inherit;box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.45);position:relative;transition:transform .1s}
.cr-track:active{transform:scale(.96)}
.cr-track:focus-visible{outline:calc(var(--u)*.8) solid #ffe066;outline-offset:calc(var(--u)*.6)}
.cr-track .ic{font-size:calc(var(--u)*12);line-height:1}
.cr-track .nm{font-size:calc(var(--u)*4.4);font-weight:900;text-align:center}
.cr-track .bs{font-size:calc(var(--u)*3);font-weight:700;opacity:.95}
.cr-track.locked{filter:grayscale(.7) brightness(.75)}
.cr-track .lock{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*14)}
.cr-bottom{position:absolute;bottom:0;inset-inline:0;display:flex;justify-content:space-between;align-items:flex-end;gap:calc(var(--u)*2)}
.cr-place{margin-inline:calc(var(--u)*2.4);font-weight:900;color:#fff;background:linear-gradient(160deg,#364fc7,#1d1250);border:calc(var(--u)*.7) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*.6) calc(var(--u)*3);transform:skewX(-10deg);box-shadow:calc(var(--u)*-1) calc(var(--u)*.8) 0 #e03131;display:flex;align-items:baseline;gap:calc(var(--u)*.8)}
.cr-place b{font-size:calc(var(--u)*12);line-height:1}
.cr-place i{font-style:normal;font-size:calc(var(--u)*5);opacity:.9}
.cr-item{width:calc(var(--u)*20);height:calc(var(--u)*20);border-radius:50%;border:calc(var(--u)*.9) solid #fff;background:radial-gradient(circle at 40% 35%,#9775fa,#5f3dc4);display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*11);box-shadow:0 0 calc(var(--u)*4) rgba(255,224,102,.0);cursor:pointer;font-family:inherit;padding:0;color:#fff;position:relative}
.cr-item.full{box-shadow:0 0 calc(var(--u)*5) #ffe066;animation:crPulse .8s infinite alternate}
.cr-item .lbl{position:absolute;bottom:calc(var(--u)*-6);font-size:calc(var(--u)*3.4);font-weight:900;white-space:nowrap;text-shadow:0 2px 4px #000}
.cr-item:empty:after{content:'?';opacity:.35}
@keyframes crPulse{to{transform:scale(1.07)}}
.cr-prog{position:absolute;inset-inline-end:calc(var(--u)*2.6);top:calc(var(--u)*18);bottom:calc(var(--u)*30);width:calc(var(--u)*2);background:linear-gradient(180deg,#fff,#ff5c8a);border-radius:calc(var(--u)*1);border:calc(var(--u)*.4) solid #1d1250;pointer-events:none}
.cr-prog .dot{position:absolute;left:50%;width:calc(var(--u)*6.4);height:calc(var(--u)*6.4);margin-left:calc(var(--u)*-3.2);margin-top:calc(var(--u)*-3.2);border-radius:50%;background:#1d1250;border:calc(var(--u)*.45) solid #fff;font-size:calc(var(--u)*3.8);display:flex;align-items:center;justify-content:center;transition:top .2s linear}
.cr-prog .dot.me{width:calc(var(--u)*8.4);height:calc(var(--u)*8.4);margin-left:calc(var(--u)*-4.2);margin-top:calc(var(--u)*-4.2);border-color:#ffe066;z-index:2;font-size:calc(var(--u)*5)}
.cr-prog .flag{position:absolute;top:calc(var(--u)*-6);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*5)}
.cr-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%) skewX(-8deg);font-size:calc(var(--u)*9);font-weight:900;color:#fff;text-shadow:0 calc(var(--u)*.6) 0 #c2255c,0 0 calc(var(--u)*3) rgba(0,0,0,.6);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s}
.cr-toast.show{opacity:1;animation:crPop .35s ease-out}
.cr-count{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);font-size:calc(var(--u)*34);font-weight:900;color:#fff;text-shadow:calc(var(--u)*-1.2) calc(var(--u)*1.2) 0 #e03131,0 0 calc(var(--u)*4) rgba(0,0,0,.5);pointer-events:none}
.cr-count.word{font-size:calc(var(--u)*17);white-space:nowrap}
@keyframes crPop{from{transform:translate(-50%,-50%) skewX(-8deg) scale(.4)}to{transform:translate(-50%,-50%) skewX(-8deg) scale(1)}}
.cr-hint{position:absolute;left:50%;bottom:calc(var(--u)*30);transform:translateX(-50%);background:rgba(29,18,80,.85);border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.2) calc(var(--u)*3.4);font-size:calc(var(--u)*4.2);font-weight:900;white-space:nowrap;pointer-events:none;display:flex;align-items:center;gap:calc(var(--u)*1.5)}
.cr-hint .hand{font-size:calc(var(--u)*7);animation:crSwipe 1.2s ease-in-out infinite alternate}
@keyframes crSwipe{from{transform:translateX(calc(var(--u)*-5))}to{transform:translateX(calc(var(--u)*5))}}
.cr-lap{position:absolute;left:50%;top:0;transform:translateX(-50%) skewX(-8deg)}
.cr-panel{background:rgba(29,18,80,.88);border:calc(var(--u)*.7) solid #fff;border-radius:calc(var(--u)*4);padding:calc(var(--u)*3) calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.4) calc(var(--u)*4) rgba(0,0,0,.5);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2.4);max-width:calc(100% - var(--u)*4);box-sizing:border-box}
.cr-dim{position:absolute;inset:0;background:rgba(10,5,40,.55);display:flex;align-items:center;justify-content:center}
.cr-racers{display:flex;gap:calc(var(--u)*1.8);flex-wrap:wrap;justify-content:center}
.cr-racer{width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.6);background:#2b1a66;font-size:calc(var(--u)*7.4);display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;padding:0;font-family:inherit;color:#fff}
.cr-racer.sel{border-color:#ffe066;box-shadow:0 0 calc(var(--u)*3) #ffe066;transform:scale(1.08)}
.cr-racer .pr{position:absolute;bottom:calc(var(--u)*-3.2);font-size:calc(var(--u)*3);font-weight:900;background:#1d1250;border-radius:calc(var(--u)*1.4);padding:0 calc(var(--u)*1);white-space:nowrap}
.cr-racer.lock{filter:grayscale(1) brightness(.7)}
.cr-up{display:flex;align-items:center;gap:calc(var(--u)*2);background:rgba(54,79,199,.55);border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);width:calc(var(--u)*70);max-width:100%;box-sizing:border-box;justify-content:space-between}
.cr-up .nm{font-size:calc(var(--u)*4.2);font-weight:900;min-width:calc(var(--u)*20)}
.cr-up .pips{display:flex;gap:calc(var(--u)*.8)}
.cr-up .pip{width:calc(var(--u)*3.8);height:calc(var(--u)*3.8);border-radius:calc(var(--u)*.8);background:rgba(255,255,255,.2);border:calc(var(--u)*.3) solid rgba(255,255,255,.6)}
.cr-up .pip.on{background:#ffe066;border-color:#fff}
.cr-stars{display:flex;gap:calc(var(--u)*2);font-size:calc(var(--u)*12);line-height:1}
.cr-stars span{filter:drop-shadow(0 calc(var(--u)*.6) 0 #c2255c)}
.cr-stars span.off{filter:grayscale(1) brightness(.5)}
.cr-row{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center;align-items:center}
.cr-col{display:flex;flex-direction:column;gap:calc(var(--u)*2);align-items:center}
.cr-garage{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:calc(var(--u)*2.4);padding-bottom:calc(var(--u)*3);box-sizing:border-box;pointer-events:none}
.cr-garage>*{pointer-events:auto}
.cr-name{font-size:calc(var(--u)*7);font-weight:900;color:#fff;text-shadow:0 calc(var(--u)*.5) 0 #c2255c}
.cr-trait{font-size:calc(var(--u)*3.4);font-weight:900;background:#fff;color:#1d1250;border-radius:calc(var(--u)*1.4);padding:calc(var(--u)*.3) calc(var(--u)*2);transform:skewX(-8deg)}
.cr-land .cr-garage{flex-direction:row;align-items:flex-end;justify-content:space-between;padding:calc(var(--u)*3) calc(var(--u)*4)}
.cr-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;background:linear-gradient(180deg,#1d1250,#7b2f8f 60%,#ff9a6b)}
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

export const ANIMAL_EMOJI = { raccoon: '🦝', bunny: '🐰', cat: '🐱', bear: '🐻', fox: '🦊', panda: '🐼' };
export const ITEM_EMOJI = { rocket: '🚀', shield: '🛡️', blast: '💥' };
export const TRACK_EMOJI = { pier: '🎡', lanterns: '🏮', stars: '🎢' };
export const TRACK_BG = {
  pier: 'linear-gradient(160deg,#ff922b,#c2255c)',
  lanterns: 'linear-gradient(160deg,#be4bdb,#5f3dc4)',
  stars: 'linear-gradient(160deg,#4dabf7,#364fc7)',
};
