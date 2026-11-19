// Fashion Queen CSS: pink / purple / white / gold glossy UI. Sizes are written as "2.4u" = 2.4 units of the screen (--u).
import { css } from '../../cozy_kit/ui.js';

const RAW = `
.fq-root{background:#ffd8f0}
.fq-topbar{position:absolute;top:max(2u,env(safe-area-inset-top));left:2.5u;right:2.5u;display:flex;gap:1.1u;align-items:center;pointer-events:none;z-index:6}
.fq-topbar>*{pointer-events:auto}
.fq-topbar .sp{flex:1;pointer-events:none}
.fq-topbar .fq-round{width:8.6u;height:8.6u;font-size:4u;flex:none}
.fq-topbar .fq-pill{font-size:3.1u;padding:.4u 1.3u;border-width:.35u;gap:.5u;min-height:7u;box-sizing:border-box;flex:none}
.fq-pill.pop{animation:fqpop .4s}
@keyframes fqpop{40%{transform:scale(1.25)}}
.fq-badge{position:absolute;top:-.8u;right:-.8u;min-width:3.8u;height:3.8u;border-radius:99px;background:#ff3a5a;color:#fff;font-size:2.6u;font-weight:900;display:flex;align-items:center;justify-content:center;border:.3u solid #fff;padding:0 .6u;box-sizing:border-box}
.fq-panel{position:absolute;box-sizing:border-box;background:linear-gradient(180deg,#fff,#ffeaf6);color:#5a1f55;border:.7u solid #ff7ac0;border-bottom:none;border-radius:4u 4u 0 0;padding:1.6u 2u;display:flex;flex-direction:column;gap:1.2u;overflow:hidden;pointer-events:auto;box-shadow:0 -1u 3u rgba(120,20,90,.25);z-index:3}
.fq-land .fq-panel{border:.7u solid #ff7ac0;border-right:none;border-radius:4u 0 0 4u}
.fq-panel.full{border-radius:0;border-left:none;border-right:none;background:linear-gradient(180deg,rgba(255,255,255,.93),rgba(255,230,246,.95))}
.fq-wrap{width:100%;max-width:118u;margin:0 auto;display:flex;flex-direction:column;gap:1.4u;flex:1;min-height:0}
.fq-tools{position:absolute;display:flex;gap:1.1u;align-items:center;justify-content:center;pointer-events:none;z-index:4;direction:ltr}
.fq-tools>*{pointer-events:auto}
.fq-tools .fq-round{width:9.6u;height:9.6u;font-size:4.4u;flex:none}
.fq-tools .fq-btn{width:auto;min-width:22u;font-size:4u;min-height:9.6u;padding:.4u 3u}
.fq-h2{font-size:4.4u;font-weight:900;color:#c0187a;text-align:center;line-height:1.15}
.fq-hd{font-size:3.2u;font-weight:800;color:#8a3a85;text-align:center;line-height:1.25}
.fq-card .fq-h2{color:#c0187a}
.fq-card{background:linear-gradient(180deg,#fff,#ffe8f5);color:#5a1f55;border-color:#ffc21a;width:62u;gap:1.6u}
.fq-card .fq-small{color:#7a3a75}
.fq-card .fq-bigicon{font-size:12u;line-height:1}
.fq-card img.th{width:22u;height:22u;object-fit:contain;background:#fff;border-radius:3u;border:.4u solid #f5c0e0}
.fq-card .fq-price{font-size:5u;font-weight:900;color:#a8186a}
.fq-card .fq-row{display:flex;gap:1.4u;width:100%}
.fq-card .fq-row .fq-btn{flex:1;font-size:4.2u;padding:.8u 1u}
.fq-pop{animation:fqin .25s ease-out}
@keyframes fqin{from{transform:scale(.8);opacity:0}}
.fq-btn{background:linear-gradient(180deg,#ff8ad0,#e0409a);box-shadow:0 .8u 0 #902068,inset 0 .4u 0 rgba(255,255,255,.4)}
.fq-btn.alt{background:linear-gradient(180deg,#c9a0ff,#8a4ae0);box-shadow:0 .8u 0 #4a1a90}
.fq-btn.gold{background:linear-gradient(180deg,#ffe36a,#ffb81a);color:#6a3000;box-shadow:0 .8u 0 #b07800,inset 0 .4u 0 rgba(255,255,255,.5)}
.fq-btn.dark{background:linear-gradient(180deg,#b8a0e8,#8a6ad0);box-shadow:0 .8u 0 #4a2a90}
.fq-btn:disabled{filter:grayscale(.8);opacity:.55;cursor:default}
.fq-btn.sm{width:auto;min-height:8u;font-size:3.4u;padding:.5u 2.4u}
.fq-btn.big{font-size:6u;min-height:14u}
.fq-tabs{display:flex;gap:1u;overflow-x:auto;touch-action:pan-x;flex:none;padding:.2u .2u 1u;scrollbar-width:none;direction:inherit}
.fq-tabs::-webkit-scrollbar{display:none}
.fq-tab{flex:none;font-family:inherit;font-weight:900;border:.4u solid #fff;border-radius:2.4u;background:linear-gradient(#ffb0dc,#ff7ac0);color:#fff;padding:.7u 1.6u;font-size:2.9u;display:flex;flex-direction:column;align-items:center;min-width:11u;cursor:pointer;box-shadow:0 .5u 0 #c04a90;position:relative}
.fq-tab i{font-style:normal;font-size:5u;line-height:1.1}
.fq-tab.on{background:linear-gradient(#ffe36a,#ffb81a);color:#6a3000;box-shadow:0 .5u 0 #b07800}
.fq-tab.sm{min-width:0;padding:.5u 1.6u;font-size:3u;flex-direction:row;gap:.6u;box-shadow:0 .4u 0 #c04a90}
.fq-tab.sm.on{box-shadow:0 .4u 0 #b07800}
.fq-scroll{overflow-y:auto;touch-action:pan-y;flex:1;min-height:0;padding:.4u;overscroll-behavior:contain}
.fq-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(15u,1fr));gap:1.3u}
.fq-grid.wide{grid-template-columns:repeat(auto-fill,minmax(24u,1fr))}
.fq-cell{position:relative;font-family:inherit;border:.4u solid #f5c0e0;border-radius:2.4u;background:#fff;padding:.6u;color:#5a1f55;font-weight:800;font-size:2.7u;display:flex;flex-direction:column;align-items:center;gap:.3u;cursor:pointer;min-width:0}
.fq-cell img,.fq-cell canvas{width:100%;aspect-ratio:1;object-fit:contain;display:block}
.fq-cell .nm{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fq-cell.on{border-color:#ffb81a;background:#fff6c8;box-shadow:0 0 0 .5u #ffd23a}
.fq-cell.lock img{opacity:.75}
.fq-cell .pr{background:#5a1f55;color:#ffe36a;border-radius:99px;padding:.1u 1.2u;font-size:2.6u;white-space:nowrap}
.fq-cell .ck{position:absolute;top:.3u;right:.3u;width:4u;height:4u;border-radius:50%;background:#2fb86a;color:#fff;font-size:2.6u;display:flex;align-items:center;justify-content:center}
.fq-sw{width:8.4u;height:8.4u;border-radius:50%;border:.5u solid #fff;box-shadow:0 0 0 .35u #d890c0,0 .5u 1u rgba(0,0,0,.2);cursor:pointer;padding:0;position:relative;flex:none}
.fq-sw.on{box-shadow:0 0 0 .7u #ffb81a,0 .5u 1u rgba(0,0,0,.2);transform:scale(1.1)}
.fq-sw.none{background:repeating-linear-gradient(45deg,#fff,#fff .8u,#f0b0d0 .8u,#f0b0d0 1.2u)}
.fq-sw .lk{position:absolute;inset:0;border-radius:50%;background:rgba(60,20,70,.55);display:flex;align-items:center;justify-content:center;font-size:3.6u;color:#fff}
.fq-sws{display:flex;flex-wrap:wrap;gap:1.4u;justify-content:center;padding:.8u}
.fq-chip{font-family:inherit;font-weight:900;border:.4u solid #f5c0e0;border-radius:99px;background:#fff;color:#5a1f55;padding:.6u 1.8u;font-size:3u;cursor:pointer;display:inline-flex;align-items:center;gap:.6u;white-space:nowrap}
.fq-chip.on{border-color:#ffb81a;background:#fff0a8}
.fq-chips{display:flex;flex-wrap:wrap;gap:1u;justify-content:center}
.fq-prog{height:2.6u;border-radius:99px;background:#f5d0e8;overflow:hidden;border:.3u solid #fff;box-shadow:inset 0 .2u .4u rgba(0,0,0,.18);flex:1;min-width:8u}
.fq-prog b{display:block;height:100%;background:linear-gradient(180deg,#ffb0dc,#ff4aa8);border-radius:99px;transition:width .2s}
.fq-prog.gold b{background:linear-gradient(180deg,#ffe36a,#ffa81a)}
.fq-prog.green b{background:linear-gradient(180deg,#7af0a0,#2fb86a)}
.fq-row{display:flex;gap:1.2u;align-items:center}
.fq-row.c{justify-content:center}
.fq-list{display:flex;flex-direction:column;gap:1.3u}
.fq-item{background:#fff;border:.4u solid #f5c0e0;border-radius:3u;padding:1.2u 1.6u;display:flex;align-items:center;gap:1.4u;color:#5a1f55}
.fq-item .ic{font-size:7u;line-height:1;flex:none}
.fq-item .tx{flex:1;min-width:0;display:flex;flex-direction:column;gap:.5u}
.fq-item .tt{font-weight:900;font-size:3.5u;line-height:1.2}
.fq-item .ss{font-weight:700;font-size:2.8u;opacity:.85}
.fq-item.lock{background:#efe3ec;filter:grayscale(.5);opacity:.88}
.fq-item.done{background:#f0fff4;border-color:#8ae0a8}
.fq-item.ready{border-color:#ffb81a;background:#fff9dc;animation:fqglow 1.2s infinite}
@keyframes fqglow{50%{box-shadow:0 0 0 .8u rgba(255,200,40,.5)}}
.fq-dots{display:flex;gap:.7u}
.fq-dots i{width:2.6u;height:2.6u;border-radius:50%;background:#f0cfe4;border:.25u solid #fff}
.fq-dots i.on{background:linear-gradient(#ffe36a,#ffb81a)}
.fq-menu{display:grid;grid-template-columns:repeat(3,1fr);gap:1.3u}
.fq-mb{position:relative;font-family:inherit;font-weight:900;color:#fff;border:.45u solid #fff;border-radius:3u;background:linear-gradient(180deg,#ff9ad4,#d83a98);box-shadow:0 .7u 0 #902068;padding:1u .6u;font-size:3.1u;display:flex;flex-direction:column;align-items:center;gap:.3u;cursor:pointer;line-height:1.1;min-height:14.5u}
.fq-mb i{font-style:normal;font-size:6.6u;line-height:1.1}
.fq-mb:active{transform:translateY(.4u)}
.fq-mb.p2{background:linear-gradient(180deg,#c9a0ff,#8a4ae0);box-shadow:0 .7u 0 #4a1a90}
.fq-mb.p3{background:linear-gradient(180deg,#ffe36a,#ffb81a);color:#6a3000;box-shadow:0 .7u 0 #b07800}
.fq-mb.p4{background:linear-gradient(180deg,#8ae8d0,#2ab898);box-shadow:0 .7u 0 #0a6a58}
.fq-title-big{position:absolute;left:0;right:0;text-align:center;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;gap:.3u}
.fq-title-big .a{font-size:10.5u;font-weight:900;color:#ffd23a;-webkit-text-stroke:.9u #a8186a;paint-order:stroke fill;text-shadow:0 1u 0 #701050;line-height:1}
.fq-title-big .b{font-size:4.2u;font-weight:900;color:#fff;letter-spacing:.4u;-webkit-text-stroke:.5u #a8186a;paint-order:stroke fill}
.fq-toast{position:absolute;left:50%;top:15u;transform:translateX(-50%);z-index:20;background:linear-gradient(180deg,#a85ae8,#7a2ac0);border:.5u solid #fff;border-radius:99px;color:#fff;font-weight:900;font-size:3.6u;padding:1u 4u;max-width:92%;text-align:center;box-shadow:0 1u 2.5u rgba(60,0,80,.4);animation:fqtoast 2.4s forwards;pointer-events:none}
@keyframes fqtoast{0%{opacity:0;transform:translate(-50%,-1.5u)}10%,80%{opacity:1;transform:translate(-50%,0)}100%{opacity:0}}
.fq-slider{display:flex;align-items:center;gap:1.6u;background:#fff;border:.4u solid #f5c0e0;border-radius:3u;padding:1.4u 2u}
.fq-slider .lb{font-weight:900;font-size:3.6u;min-width:20u}
.fq-slider input{flex:1;min-width:0;height:5u;accent-color:#e0409a;touch-action:pan-x}
.fq-meter{display:flex;align-items:center;gap:1.2u;background:#fff;border:.4u solid #f5c0e0;border-radius:3u;padding:.8u 1.4u}
.fq-meter .ic{font-size:6u;line-height:1}
.fq-tags{display:flex;gap:.6u;flex-wrap:wrap}
.fq-tags span{background:#ffe0f2;border-radius:99px;padding:.1u 1.2u;font-size:2.7u;font-weight:800}
.fq-stars{font-size:11u;line-height:1.1;display:flex;gap:1u;justify-content:center}
.fq-stars span{display:inline-block;transform:scale(0);opacity:0}
.fq-stars span.in{animation:fqstar .5s forwards}
.fq-stars span.off.in{filter:grayscale(1);opacity:.35;animation:fqstar2 .4s forwards}
@keyframes fqstar{0%{transform:scale(0) rotate(-40deg);opacity:0}70%{transform:scale(1.3) rotate(8deg);opacity:1}100%{transform:scale(1);opacity:1}}
@keyframes fqstar2{from{transform:scale(0)}to{transform:scale(1)}}
.fq-note{font-size:3u;font-weight:700;color:#7a3a75;text-align:center;line-height:1.3}
.fq-looks{display:grid;grid-template-columns:repeat(auto-fill,minmax(19u,1fr));gap:1.2u;width:100%;max-height:52vh;overflow:auto;touch-action:pan-y}
.fq-look{background:#fff;border:.4u solid #f5c0e0;border-radius:2.4u;padding:.6u;display:flex;flex-direction:column;align-items:center;gap:.6u}
.fq-look img{width:100%;aspect-ratio:3/4;object-fit:contain}
.fq-look .fq-row{width:100%}
.fq-look button{flex:1;font-family:inherit;font-weight:900;border:none;border-radius:1.8u;padding:.6u;font-size:2.8u;cursor:pointer;background:#ff7ac0;color:#fff}
.fq-look button.x{background:#d8d0e0;color:#5a1f55;flex:none;padding:.6u 1.4u}
.fq-prog-lb{font-size:2.8u;font-weight:900;white-space:nowrap}
.fq-land .fq-title-big .a{font-size:8u}
@media (orientation:landscape){.fq-card{width:78u}}
`;

const sizeRe = /(-?\d*\.?\d+)u\b/g;
export const FQ_CSS = css('fq', '#ff7ac0', '#b04ae8', '#ffd23a') + RAW.replace(sizeRe, (_m, n) => `calc(var(--u)*${n})`);
