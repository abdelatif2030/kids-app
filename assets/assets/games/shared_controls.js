// One look for the back / sound / pause buttons in EVERY fun game: the same glossy violet round buttons (pictures in ../ui/kit).
// It only changes how those buttons look (picture instead of an arrow/emoji); position, size class and behaviour stay the game's own.
(function () {
  var K = '../../ui/kit/'; // overridden below from this script's own url
  var me = document.currentScript; var base = me ? me.src.replace(/shared_controls\.js.*$/, '') : '';
  // Flutter serves games from assets/games/<g>/; the kit lives in assets/ui/kit (two levels up from the game page)
  var kit = base.replace(/games\/$/, 'ui/kit/'); if (kit === base) kit = base + 'ui/kit/';
  var st = document.createElement('style');
  st.textContent = '[data-sk]{background-color:transparent !important;background-repeat:no-repeat !important;background-position:center !important;background-size:contain !important;border:none !important;box-shadow:none !important;'
    + 'font-size:0 !important;color:transparent !important;text-shadow:none !important;padding:0 !important;min-width:0 !important;width:clamp(46px,13vmin,64px) !important;height:clamp(46px,13vmin,64px) !important;border-radius:50% !important;filter:drop-shadow(0 3px 3px rgba(0,0,0,.35));transition:transform .08s}'
    + '[data-sk]:active{transform:scale(.92)}[data-sk]>*{display:none !important}'
    + '[data-sk="back"]{background-image:url(' + kit + 'back.webp) !important}[data-sk="on"]{background-image:url(' + kit + 'sound_on.webp) !important}'
    + '[data-sk="off"]{background-image:url(' + kit + 'sound_off.webp) !important}[data-sk="pause"]{background-image:url(' + kit + 'pause.webp) !important}';
  st.textContent += '.rk-menu [data-sk="on"],.rk-menu [data-sk="off"]{position:fixed !important;top:10px !important;left:10px !important;bottom:auto !important;right:auto !important;transform:none !important;z-index:50}';
  document.head.appendChild(st);
  var BACK = /^(←|→|⬅|➡|⬅️|➡️|◀|▶️?|‹|›|خروج|رجوع|exit|back|✕|✖|✖️|❌)$/i, SND = /^(🔊|🔇|🔈|🔉|🔔|🔕)$/, PAU = /^(⏸|⏸️|II|❚❚|‖)$/;
  function kind(b) {
    var t = (b.getAttribute('data-sk-t') || b.textContent || '').trim(), a = (b.getAttribute('aria-label') || '').trim();
    if (b.hasAttribute('data-sk')) return null;
    var w = b.offsetWidth, h = b.offsetHeight; if (!w || w > 110 || h > 110) return null; // wide menu pills keep their own look
    if (SND.test(t) || /^(sound|mute|صوت)$/i.test(a)) return 'snd';
    if (PAU.test(t) || /^(pause|paused|إيقاف)$/i.test(a)) return 'pause';
    if (BACK.test(t) || /^(exit|back|رجوع|خروج)$/i.test(a)) return 'back';
    return null;
  }
  function snd(t) { return /🔇|🔕/.test(t) ? 'off' : 'on'; }
  var busy = false;
  function scan() {
    if (busy) return; busy = true;
    var bs = document.querySelectorAll('button');
    for (var i = 0; i < bs.length; i++) {
      var b = bs[i], k = kind(b);
      if (k) { b.setAttribute('data-sk-t', (b.textContent || '').trim()); b.setAttribute('data-sk', k === 'snd' ? snd(b.textContent) : k); b.setAttribute('data-sk-k', k); }
      else if (b.getAttribute('data-sk-k') === 'snd') { var t = (b.textContent || '').trim(); if (SND.test(t)) b.setAttribute('data-sk', snd(t)); }
    }
    var menu = document.querySelector('[class*="-panel"],[class*="-tracks"]'); document.documentElement.classList.toggle('rk-menu', !!(menu && menu.offsetParent));
    busy = false;
  }
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
  scan();
})();
