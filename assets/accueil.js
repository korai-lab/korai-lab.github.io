(() => {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length || !('IntersectionObserver' in window)) return;

  const page = document.documentElement;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      entry.target.classList.toggle('is-in-view', entry.isIntersecting);
    }
  }, { rootMargin: '-48px 0px -64px 0px' });

  let frame;

  function updateMotion() {
    window.cancelAnimationFrame(frame);
    observer.disconnect();
    if (preference.matches) {
      page.classList.remove('home-motion');
      return;
    }

    page.classList.add('home-motion');
    for (const target of targets) target.classList.remove('is-in-view');

    // Laisser le navigateur peindre l’état initial avant de révéler les blocs.
    frame = window.requestAnimationFrame(() => {
      frame = window.requestAnimationFrame(() => {
        for (const target of targets) observer.observe(target);
      });
    });
  }

  preference.addEventListener('change', updateMotion);
  updateMotion();
})();
