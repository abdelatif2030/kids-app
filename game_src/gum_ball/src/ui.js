// Screens and HUD like the owner's video: three dark navy pills at the top (ball diameter, next size goal with a
// little bar, time left), yellow "+Hot Dog" pops, a big yellow "BIGGER!" with a dark "Now roll up ..." pill under it,
// and a light-blue title card.
export const CSS = `
.gb-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9ad4f5}
.gb-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.gb-layer{position:absolute;inset:0;pointer-events:none}
.gb-layer button,.gb-layer .gb-card{pointer-events:auto}
.gb-loading{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*4);font-size:calc(var(--u)*9);font-weight:900;color:#fff;background:#9ad4f5;text-shadow:0 calc(var(--u)*.6) 0 #3a7ab8}
.gb-loading i{display:block;width:calc(var(--u)*50);height:calc(var(--u)*2.4);border-radius:999px;background:#d8eefc;overflow:hidden}
.gb-loading i::after{content:'';display:block;height:100%;width:40%;background:#4ad86a;border-radius:999px;animation:gbLoad 1.2s ease-in-out infinite}
@keyframes gbLoad{50%{width:90%}}
.gb-pills{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));left:calc(var(--u)*2);right:calc(var(--u)*2);display:flex;gap:calc(var(--u)*1.6);justify-content:center;direction:ltr}
.gb-pill{flex:1;max-width:calc(var(--u)*32);background:rgba(28,34,62,.9);border:calc(var(--u)*.35) solid rgba(255,255,255,.18);border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*.8) calc(var(--u)*1.6);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.3)}
.gb-pill small{font-size:calc(var(--u)*2.3);font-weight:700;opacity:.8;white-space:nowrap}
.gb-pill b{display:flex;align-items:center;gap:calc(var(--u)*1);font-size:calc(var(--u)*4.6);font-weight:900;white-space:nowrap}
.gb-pill b i{display:inline-block;width:calc(var(--u)*3.4);height:calc(var(--u)*3.4);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffb8dc,#ff3aa0)}
.gb-pill .bar{width:100%;height:calc(var(--u)*.8);background:rgba(255,255,255,.2);border-radius:9px;overflow:hidden}
.gb-pill .bar i{display:block;height:100%;background:#4ad86a;transition:width .2s}
.gb-pill.low b{color:#ff8a8a}
.gb-pause{position:absolute;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));left:calc(var(--u)*3);width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:50%;border:none;background:rgba(28,34,62,.85);color:#fff;font-size:calc(var(--u)*4.4);font-weight:900;cursor:pointer;font-family:inherit;padding:0}
.gb-mute{left:auto;right:calc(var(--u)*3)}
.gb-pop{position:absolute;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*5);white-space:nowrap;pointer-events:none;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.3) #7a3a00;paint-order:stroke fill;animation:gbPop 1.1s ease-out forwards}
@keyframes gbPop{from{transform:translate(-50%,-50%) scale(1.4);opacity:0}15%{transform:translate(-50%,-50%) scale(1);opacity:1}70%{opacity:1}to{transform:translate(-50%,-220%);opacity:0}}
.gb-bigger{position:absolute;left:50%;top:22%;transform:translate(-50%,-50%) scale(.5);text-align:center;opacity:0;transition:opacity .25s,transform .25s;pointer-events:none}
.gb-bigger.show{opacity:1;transform:translate(-50%,-50%) scale(1)}
.gb-bigger b{display:block;font-size:calc(var(--u)*15);font-weight:900;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.8) #a8421a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #6a2a0a;line-height:1}
.gb-bigger span{display:inline-block;margin-top:calc(var(--u)*1.4);background:rgba(28,34,62,.92);border-radius:999px;padding:calc(var(--u)*.8) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
.gb-count{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%);font-size:calc(var(--u)*24);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #ff3aa0;paint-order:stroke fill;pointer-events:none}
.gb-count.pop{animation:gbCount .9s ease-out forwards}
@keyframes gbCount{from{transform:translate(-50%,-50%) scale(1.6);opacity:0}20%{opacity:1;transform:translate(-50%,-50%) scale(1)}80%{opacity:1}to{opacity:0}}
.gb-toast{position:absolute;left:50%;top:60%;transform:translate(-50%,-50%);background:rgba(28,34,62,.9);border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.6) calc(var(--u)*3.4);font-weight:900;font-size:calc(var(--u)*3.8);text-align:center;opacity:0;transition:opacity .3s;pointer-events:none;max-width:calc(var(--u)*80)}
.gb-toast.show{opacity:1}
.gb-dim{position:absolute;inset:0;background:rgba(20,30,60,.45);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box;pointer-events:auto}
.gb-card{background:linear-gradient(180deg,#bfe6ff,#8acdf8);border:calc(var(--u)*.7) solid #fff;border-radius:calc(var(--u)*5);padding:calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2.4);width:calc(var(--u)*80);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3)}
.gb-card h2{margin:0;font-size:calc(var(--u)*9);font-weight:900;color:#fff;text-shadow:0 calc(var(--u)*.6) 0 #3a7ab8;text-align:center}
.gb-big{font-size:calc(var(--u)*13);font-weight:900;color:#ff3aa0;-webkit-text-stroke:calc(var(--u)*.5) #fff;paint-order:stroke fill;direction:ltr}
.gb-sub{font-weight:900;font-size:calc(var(--u)*4);color:#1c2a4a;text-align:center}
.gb-stars{font-size:calc(var(--u)*11);letter-spacing:calc(var(--u)*1)}
.gb-stars .off{filter:grayscale(1);opacity:.35}
.gb-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*6);color:#fff;border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*3.4);padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:calc(var(--u)*13);cursor:pointer;background:linear-gradient(180deg,#ff7ac0,#ff3aa0);box-shadow:0 calc(var(--u)*.9) 0 #b81a6a;width:100%}
.gb-btn.blue{background:linear-gradient(180deg,#5ab8f8,#2a7ad8);box-shadow:0 calc(var(--u)*.9) 0 #1a4a9a;font-size:calc(var(--u)*4.6)}
.gb-btn:active{transform:translateY(calc(var(--u)*.6))}
.gb-btn:focus-visible,.gb-pause:focus-visible{outline:calc(var(--u)*.7) solid #ffd23a;outline-offset:calc(var(--u)*.5)}
.gb-logo{position:absolute;top:calc(var(--u)*16);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*11);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #ff3aa0;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #b81a6a;white-space:nowrap;text-align:center}
.gb-menu{position:absolute;left:50%;bottom:max(calc(var(--u)*8),env(safe-area-inset-bottom));transform:translateX(-50%);width:calc(var(--u)*70);display:flex;flex-direction:column;gap:calc(var(--u)*2.4);align-items:center}
.gb-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*30);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
.gb-land .gb-card{width:calc(var(--u)*100)}
.gb-land .gb-logo{top:calc(var(--u)*8)}
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
