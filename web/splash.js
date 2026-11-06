// Removes the picture shown while the app loads, as soon as the app has drawn its first frame (or after 20 s at most).
(function () {
  function hide() {
    var s = document.getElementById('splash');
    if (!s) return;
    s.style.opacity = '0';
    setTimeout(function () { if (s.parentNode) s.parentNode.removeChild(s); }, 350);
  }
  window.addEventListener('flutter-first-frame', hide);
  setTimeout(hide, 20000);
})();
