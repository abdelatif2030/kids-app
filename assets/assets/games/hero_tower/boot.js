// Boot for the app's built-in browser view (Android/iOS). The app calls window.crStart(config) when the page is
// ready and listens on the "RehlatyRace" channel. Opened on its own (for checking in a browser) it starts by itself.
(function () {
  var game = null;
  function post(msg) {
    var s = JSON.stringify(msg);
    if (window.RehlatyRace && window.RehlatyRace.postMessage) window.RehlatyRace.postMessage(s);
    else if (window.console) console.log('[tower]', s);
  }
  window.crStart = function (config) {
    if (game) game.dispose();
    config = config || {};
    config.base = config.base || './';
    game = window.HeroTower.start(document.getElementById('game'), config, post);
  };
  window.crPause = function () { if (game) game.pause(); };
  window.crStop = function () { if (game) game.dispose(); game = null; };
  if (!window.RehlatyRace) {
    var q = new URLSearchParams(location.search);
    window.crStart({ lang: q.get('lang') || 'ar', age: Number(q.get('age') || 5), gender: q.get("g") || "boy", save: q.get("rich") ? { unlocked: 3, stars: { 1: 3, 2: 2 } } : null });
  } else {
    post({ type: 'loaded' });
  }
})();

// Tell the app as soon as the game's first button (its menu) is on the page, so the loading poster goes away at once (app only).
(function () {
  var n = 0;
  var iv = setInterval(function () {
    if (++n > 150) { clearInterval(iv); return; }
    if (window.RehlatyRace && document.querySelector('button')) {
      clearInterval(iv);
      try { window.RehlatyRace.postMessage(JSON.stringify({ type: 'ready' })); } catch (e) {}
    }
  }, 60);
})();

// In-game "back" (owner 2026-11-22): the app asks the page first. Returns true when the page stepped back INSIDE the game (closed a level into its
// menu, paused a running game, left the level list); false when the game is at its main menu so the app may leave it.
window.crBack = function () {
  try {
    if (window.__gameBack && window.__gameBack()) return true; // a game that has its own levels/menus (the girls world) handles back itself first
    var vis = function (e) { return e.offsetParent !== null && !e.disabled; };
    var bs = [].slice.call(document.querySelectorAll('button')).filter(vis);
    var txt = function (b) { return ((b.textContent || '') + ' ' + (b.getAttribute('aria-label') || '')).replace(/\s+/g, ' '); };
    var arrow = function (b) { return /^[\s←→↩⬅➡‹›<>]*$/.test(b.textContent || ''); };
    if (bs.some(function (b) { return !arrow(b) && /(خروج|اخرج|exit|quit)/i.test(txt(b)); })) return false; // the main menu offers Exit: leave
    var menuRe = /(القائمة|المنيو|menu|المراحل|مراحل|levels|الخريطة|خريطة|map|المستويات|الرئيسية|home)/i;
    var resume = bs.find(function (b) { return !arrow(b) && /(كمّل|كمل|متابعة|resume|continue|استمر)/i.test(txt(b)); });
    if (resume) { var m = bs.find(function (b) { return !arrow(b) && menuRe.test(txt(b)); }); if (m) { m.click(); return true; } }
    var pause = bs.find(function (b) { return /^\s*(⏸|❚❚|II)\s*$/.test(b.textContent || '') || /(pause|إيقاف|توقف)/i.test(b.getAttribute('aria-label') || ''); });
    if (pause) { pause.click(); return true; }
    var back = bs.find(function (b) { return !arrow(b) && !/(sound|صوت|🔊|🔇)/i.test(txt(b)) && /(القائمة|المنيو|menu|رجوع|back|الرئيسية|home|إغلاق|close)/i.test(txt(b)); });
    if (back) { back.click(); return true; }
  } catch (e) { /* leave */ }
  return false;
};
