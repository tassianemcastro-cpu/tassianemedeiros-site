(function () {
  'use strict';

  /* ----------------------------------------------------------------------
     Header: add shadow/border once the page has scrolled a little
  ---------------------------------------------------------------------- */
  var header = document.getElementById('site-header');

  function onScrollHeader() {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  /* ----------------------------------------------------------------------
     Mobile nav toggle
  ---------------------------------------------------------------------- */
  var navToggle = document.getElementById('nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* ----------------------------------------------------------------------
     Fade-in on scroll (IntersectionObserver)
  ---------------------------------------------------------------------- */
  var fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ----------------------------------------------------------------------
     "Companies that trusted my work" — scroll-linked parallax.
     The text band slides from right to left as the section travels
     through the viewport (not an autoplaying loop).
  ---------------------------------------------------------------------- */
  var track = document.getElementById('marquee-track');
  var trustedSection = document.querySelector('.trusted');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ticking = false;

  function updateMarquee() {
    ticking = false;
    if (!track || !trustedSection || reduceMotion) return;

    var rect = trustedSection.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;

    // progress: 0 when section's top is at bottom of viewport,
    // 1 when section's bottom has reached the top of viewport.
    var total = rect.height + vh;
    var distanceTravelled = vh - rect.top;
    var progress = distanceTravelled / total;

    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    // Move the band from +18% (off to the right) to -55% (off to the left).
    var start = 18;
    var end = -55;
    var x = start + (end - start) * progress;

    track.style.transform = 'translateX(' + x.toFixed(2) + '%)';
  }

  function requestTick() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateMarquee);
    }
  }

  if (track && trustedSection && !reduceMotion) {
    updateMarquee();
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);
  }

  /* ----------------------------------------------------------------------
     Footer year
  ---------------------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
