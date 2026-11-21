// Boot for the app's built-in browser view (Android/iOS). The app calls window.crStart(config) when the page is
// ready and listens on the "RehlatyRace" channel. Opened on its own (for checking in a browser) it starts by itself.
(function () {
  var game = null;
  function post(msg) {
    var s = JSON.stringify(msg);
    if (window.RehlatyRace && window.RehlatyRace.postMessage) window.RehlatyRace.postMessage(s);
    else if (window.console) console.log('[creator]', s);
  }
  window.crStart = function (config) {
    if (game) game.dispose();
    config = config || {};
    config.base = config.base || './';
    game = window.CreatorTycoon.start(document.getElementById('game'), config, post);
  };
  window.crPause = function () { if (game) game.pause(); };
  window.crStop = function () { if (game) game.dispose(); game = null; };
  if (!window.RehlatyRace) {
    var q = new URLSearchParams(location.search);
    window.crStart({ lang: q.get('lang') || 'ar', age: Number(q.get('age') || 5), gender: q.get("g") || "boy", save: q.get("rich") ? { unlocked: 10, stars: { 1: 3, 2: 2 } } : null });
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
