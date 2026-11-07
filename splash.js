// The picture shown while the app loads is the app's whole intro on the web (the Flutter intro layer is not used there, so
// nothing flashes or jumps between two pictures and no Skip button appears). It is removed as soon as the app has drawn
// its first frame (or after 20 s at most): there is no fixed minimum, so the logo is only there while the app loads.
(function () {
  // Start the big downloads at once, in parallel (the app would start them one after another): the app code and the
  // drawing engine (the Chromium build for Chrome/Edge, the general one for Safari and Firefox).
  var chromium = !!(window.Intl && Intl.v8BreakIterator);
  function pre(href, as, cors) {
    var l = document.createElement('link');
    l.rel = 'preload';
    l.href = href;
    l.as = as;
    if (cors) l.crossOrigin = 'anonymous';
    document.head.appendChild(l);
  }
  pre('main.dart.js', 'script');
  pre(chromium ? 'canvaskit/chromium/canvaskit.js' : 'canvaskit/canvaskit.js', 'script', true);
  pre(chromium ? 'canvaskit/chromium/canvaskit.wasm' : 'canvaskit/canvaskit.wasm', 'fetch', true);

  var MIN_MS = 0;
  var t0 = Date.now();
  function hide() {
    var s = document.getElementById('splash');
    if (!s) return;
    s.style.opacity = '0';
    setTimeout(function () { if (s.parentNode) s.parentNode.removeChild(s); }, 350);
  }
  window.addEventListener('flutter-first-frame', function () {
    var wait = Math.max(0, MIN_MS - (Date.now() - t0));
    setTimeout(hide, wait);
  });
  setTimeout(hide, 20000);
})();
