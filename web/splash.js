// The picture shown while the app loads is the app's whole intro on the web (the Flutter intro layer is not used there, so
// nothing flashes or jumps between two pictures and no Skip button appears). It is removed when the app has drawn its first
// frame, but never earlier than one second after it appeared (or after 20 s at most), so a quick load still shows the logo for
// a second, then the sign-in or the home page is already underneath.
(function () {
  var MIN_MS = 1000;
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
