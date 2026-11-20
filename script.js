(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.site-nav a');
  const closeMenu = () => {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation');
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav?.classList.toggle('open', open);
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));

  const sections = document.querySelectorAll('main section[id]');
  const pageLinks = document.querySelectorAll('.nav-link');
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      pageLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(section => activeObserver.observe(section));

  const revealTargets = document.querySelectorAll('.section-heading,.project-card,.about-grid,.skills-grid,.experience-list,.faq-list,.contact-inner,.hero-visual');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(target => {
      target.classList.add('reveal');
      revealObserver.observe(target);
    });
  }

  const tagline = document.querySelector('.word-reveal');
  if (tagline && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const words = tagline.textContent.trim().split(/\s+/);
    tagline.textContent = '';
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.textContent = word;
      tagline.append(span);
      if (index !== words.length - 1) tagline.append(document.createTextNode(' '));
    });
    const wordObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          wordObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.5 });
    tagline.querySelectorAll('.word').forEach(word => wordObserver.observe(word));
  }
})();
