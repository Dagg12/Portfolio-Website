/* Dagg12 Portfolio — navigation/content reliability layer */
(() => {
  'use strict';

  const TARGETS = ['home','about','skills','projects','design','experience','education','certificates','contact'];

  const revealEverything = () => {
    document.querySelectorAll('[data-aos]').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.visibility = 'visible';
    });
    document.querySelectorAll('.section, .hero-section').forEach((el) => {
      el.style.visibility = 'visible';
    });
  };

  const startAnimations = () => {
    if (window.AOS && typeof window.AOS.init === 'function') {
      window.AOS.init({
        duration: 850,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        disable: () => window.innerWidth < 1
      });
      setTimeout(revealEverything, 1200);
    } else {
      revealEverything();
    }
  };

  const setupPreloader = () => {
    const loader = document.getElementById('preloader');
    if (!loader) return;
    const hide = () => loader.classList.add('hidden');
    window.addEventListener('load', hide, { once: true });
    setTimeout(hide, 1800);
  };

  const setupNavigation = () => {
    const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const sections = TARGETS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!links.length || !sections.length) return;

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        const id = link.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `#${id}`);
        document.getElementById('navLinks')?.classList.remove('active');
        document.getElementById('hamburger')?.setAttribute('aria-expanded', 'false');
      });
    });

    const activate = (id) => {
      links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activate(entry.target.id);
      });
    }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  };

  const setupSkills = () => {
    document.querySelectorAll('.skill-progress[data-width]').forEach((bar) => {
      const width = bar.getAttribute('data-width');
      requestAnimationFrame(() => { bar.style.width = `${width}%`; });
    });
  };

  const setupTheme = () => {
    const button = document.getElementById('themeToggle');
    if (!button) return;
    const saved = localStorage.getItem('dagg-theme');
    if (saved === 'light') document.body.classList.add('light-mode');
    const sync = () => {
      const light = document.body.classList.contains('light-mode');
      button.innerHTML = light ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    };
    button.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      localStorage.setItem('dagg-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
      sync();
    });
    sync();
  };

  const setupMobileNav = () => {
    const button = document.getElementById('hamburger');
    const nav = document.getElementById('navLinks');
    if (!button || !nav) return;
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('active');
      button.setAttribute('aria-expanded', String(open));
    });
  };

  const setupScroll = () => {
    const progress = document.getElementById('scrollProgress');
    const top = document.getElementById('backToTop');
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
      if (top) top.classList.toggle('visible', window.scrollY > 500);
    };
    window.addEventListener('scroll', update, { passive: true });
    top?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    update();
  };

  const setupTypedFallback = () => {
    const el = document.getElementById('typed-text');
    if (!el || window.Typed) return;
    const roles = ['Software Developer','Full Stack Developer','Network Engineer','Designer','Creative Technologist'];
    let i = 0;
    const tick = () => { el.textContent = roles[i++ % roles.length]; };
    tick();
    setInterval(tick, 2200);
  };

  const ensureDesignSection = () => {
    if (document.getElementById('design')) return;
    const projects = document.getElementById('projects');
    if (!projects) return;
    const section = document.createElement('section');
    section.id = 'design';
    section.className = 'section';
    section.setAttribute('aria-label', 'Design portfolio');
    section.innerHTML = `
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Design Studio</span>
          <h2 class="section-title">Visual <span class="highlight">Work</span></h2>
          <div class="section-divider"></div>
          <p style="max-width:760px;margin:1rem auto 0;color:var(--text-secondary)">Posters, branding, visual identity and creative digital work by Dagg12.</p>
        </div>
        <div class="d12-archive">
          <div class="d12-gallery" id="d12FallbackGallery"></div>
        </div>
      </div>`;
    projects.parentNode.insertBefore(section, projects);

    const files = ['DV01.png','DV02.png','DV03.png','DV04.png','DaggWorld....png','V2.jpg','Veracity (1).png','Veracity.png','er (1).png','v1.jpg'];
    const gallery = section.querySelector('#d12FallbackGallery');
    files.forEach((file, index) => {
      const card = document.createElement('article');
      card.className = 'd12-art';
      card.innerHTML = `<img src="assets/images/designs/${encodeURIComponent(file)}" alt="Design work ${index + 1}" loading="lazy"><div class="d12-art-meta"><small>Design archive</small><strong>${file.replace(/\.[^.]+$/, '')}</strong></div>`;
      gallery.appendChild(card);
    });
  };

  const ensureDesignNav = () => {
    const nav = document.querySelector('.nav-links');
    if (!nav || nav.querySelector('a[href="#design"]')) return;
    const li = document.createElement('li');
    li.setAttribute('role', 'none');
    li.innerHTML = '<a href="#design" role="menuitem">Design</a>';
    const experience = nav.querySelector('a[href="#experience"]')?.parentElement;
    if (experience) nav.insertBefore(li, experience); else nav.appendChild(li);
  };

  const boot = () => {
    ensureDesignSection();
    ensureDesignNav();
    setupPreloader();
    setupNavigation();
    setupSkills();
    setupTheme();
    setupMobileNav();
    setupScroll();
    setupTypedFallback();
    startAnimations();
    revealEverything();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
