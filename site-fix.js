/* Dagg12 Portfolio — FINAL SECTION + DESIGN RELIABILITY LAYER */
(() => {
  'use strict';

  const DESIGN_FILES = [
    'DV01.png', 'DV02.png', 'DV03.png', 'DV04.png', 'DaggWorld....png',
    'V2.jpg', 'Veracity (1).png', 'Veracity.png', 'er (1).png', 'v1.jpg'
  ];

  const sectionIds = ['home','about','skills','projects','design','experience','education','certificates','contact'];

  const reveal = () => {
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.transform = 'none';
    });
    document.querySelectorAll('main > section, .section, .hero-section').forEach(el => {
      el.style.visibility = 'visible';
      el.style.opacity = '1';
    });
  };

  const injectStyles = () => {
    if (document.getElementById('d12-final-fix-style')) return;
    const s = document.createElement('style');
    s.id = 'd12-final-fix-style';
    s.textContent = `
      #design{display:block!important;visibility:visible!important;opacity:1!important;position:relative;z-index:2;padding-top:110px;padding-bottom:110px}
      #design .d12-final-shell{display:block!important;visibility:visible!important;opacity:1!important}
      .d12-final-gallery{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:18px;margin-top:32px}
      .d12-final-card{grid-column:span 4;min-height:260px;position:relative;overflow:hidden;border:1px solid rgba(97,243,255,.18);border-radius:22px;background:#050b14;box-shadow:0 24px 70px rgba(0,0,0,.38);cursor:pointer;transition:transform .4s ease,border-color .4s ease,box-shadow .4s ease}
      .d12-final-card:nth-child(1),.d12-final-card:nth-child(5){grid-column:span 6;min-height:390px}
      .d12-final-card:hover{transform:translateY(-8px);border-color:rgba(97,243,255,.55);box-shadow:0 30px 90px rgba(0,0,0,.6),0 0 40px rgba(97,243,255,.1)}
      .d12-final-card img{width:100%;height:100%;min-height:inherit;display:block;object-fit:cover;transition:transform .8s ease,filter .5s ease}
      .d12-final-card:hover img{transform:scale(1.06);filter:saturate(1.1) contrast(1.05)}
      .d12-final-card:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 42%,rgba(0,3,10,.94));pointer-events:none}
      .d12-final-meta{position:absolute;z-index:2;left:20px;right:20px;bottom:17px;color:#fff}
      .d12-final-meta small{display:block;color:#61f3ff;font:700 10px ui-monospace,SFMono-Regular,monospace;letter-spacing:.15em;text-transform:uppercase;margin-bottom:5px}
      .d12-final-meta strong{font-size:18px;letter-spacing:-.02em}
      .d12-final-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid rgba(97,243,255,.18);border-radius:999px;background:rgba(1,7,15,.6);color:#61f3ff;font:700 10px ui-monospace,monospace;letter-spacing:.08em}
      .d12-final-empty{padding:35px;border:1px dashed rgba(97,243,255,.25);border-radius:20px;text-align:center;color:rgba(255,255,255,.6)}
      .d12-lightbox{position:fixed;inset:0;z-index:10000;display:none;place-items:center;padding:24px;background:rgba(0,0,0,.9);backdrop-filter:blur(18px)}
      .d12-lightbox.open{display:grid}
      .d12-lightbox figure{margin:0;width:min(1200px,94vw);max-height:94vh;position:relative;border:1px solid rgba(97,243,255,.3);border-radius:22px;overflow:hidden;background:#02060d;box-shadow:0 50px 160px rgba(0,0,0,.85)}
      .d12-lightbox img{display:block;width:100%;height:auto;max-height:82vh;object-fit:contain}
      .d12-lightbox figcaption{padding:12px 16px;color:rgba(255,255,255,.7);font:700 11px ui-monospace,monospace}
      .d12-lightbox button{position:absolute;right:12px;top:12px;width:42px;height:42px;border:1px solid rgba(255,255,255,.18);border-radius:50%;background:rgba(0,0,0,.7);color:#fff;font-size:18px;cursor:pointer}
      #experience .timeline-title{font-size:1.25rem!important}
      .d12-final-experience-note{margin-top:12px;padding:14px 16px;border-left:2px solid #61f3ff;background:rgba(97,243,255,.045);color:rgba(255,255,255,.62);line-height:1.7;font-size:.9rem}
      @media(max-width:900px){.d12-final-card,.d12-final-card:nth-child(1),.d12-final-card:nth-child(5){grid-column:span 6;min-height:300px}}
      @media(max-width:620px){.d12-final-gallery{grid-template-columns:1fr}.d12-final-card,.d12-final-card:nth-child(1),.d12-final-card:nth-child(5){grid-column:span 1;min-height:340px}}
      body.light-mode .d12-final-card{background:#f7fbfe;border-color:rgba(20,120,150,.18)}
      body.light-mode .d12-final-meta{color:#07121e}
    `;
    document.head.appendChild(s);
  };

  const makeDesign = () => {
    let section = document.getElementById('design');
    if (section) section.remove();

    const projects = document.getElementById('projects');
    if (!projects?.parentNode) return;

    section = document.createElement('section');
    section.id = 'design';
    section.className = 'section design-section';
    section.setAttribute('aria-label', 'Design Studio');
    section.innerHTML = `
      <div class="container d12-final-shell">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Design Studio</span>
          <h2 class="section-title">Visual <span class="highlight">Work</span></h2>
          <div class="section-divider"></div>
          <p style="max-width:760px;margin:16px auto 0;color:var(--text-secondary,#8fa1b5);line-height:1.8">Visual work, not just code. Explore posters, branding, creative campaigns and digital design created by Dagg12.</p>
          <div style="margin-top:18px"><span class="d12-final-badge"><i class="fas fa-layer-group"></i> 10 ORIGINAL WORKS FROM THE DESIGN ARCHIVE</span></div>
        </div>
        <div class="d12-final-gallery" id="d12FinalGallery"></div>
      </div>`;
    projects.parentNode.insertBefore(section, projects);

    const gallery = section.querySelector('#d12FinalGallery');
    DESIGN_FILES.forEach((file, index) => {
      const card = document.createElement('article');
      card.className = 'd12-final-card';
      const src = 'assets/images/designs/' + file.split('/').map(encodeURIComponent).join('/');
      card.innerHTML = `<img src="${src}" alt="${file.replace(/\.[^.]+$/, '')} — design work" loading="lazy"><div class="d12-final-meta"><small>Design Studio · ${String(index + 1).padStart(2,'0')}</small><strong>${file.replace(/\.[^.]+$/, '')}</strong></div>`;
      card.addEventListener('click', () => openLightbox(src, file));
      gallery.appendChild(card);
    });

    setTimeout(() => {
      gallery.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
          img.closest('.d12-final-card')?.remove();
        });
      });
      reveal();
    }, 50);
  };

  const openLightbox = (src, title) => {
    let box = document.getElementById('d12Lightbox');
    if (!box) {
      box = document.createElement('div');
      box.id = 'd12Lightbox';
      box.className = 'd12-lightbox';
      box.innerHTML = '<figure><button type="button" aria-label="Close design preview">×</button><img alt=""><figcaption></figcaption></figure>';
      document.body.appendChild(box);
      box.querySelector('button').addEventListener('click', () => box.classList.remove('open'));
      box.addEventListener('click', e => { if (e.target === box) box.classList.remove('open'); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') box.classList.remove('open'); });
    }
    box.querySelector('img').src = src;
    box.querySelector('img').alt = title;
    box.querySelector('figcaption').textContent = title;
    box.classList.add('open');
  };

  const ensureDesignNav = () => {
    const nav = document.querySelector('.nav-links');
    if (!nav) return;
    let link = nav.querySelector('a[href="#design"]');
    if (!link) {
      const li = document.createElement('li');
      li.setAttribute('role','none');
      li.innerHTML = '<a href="#design" role="menuitem">Design</a>';
      const experience = nav.querySelector('a[href="#experience"]')?.parentElement;
      experience ? nav.insertBefore(li, experience) : nav.appendChild(li);
      link = li.querySelector('a');
    }
  };

  const fixExperience = () => {
    // Remove the extra generated experience card that used the wrong title.
    document.querySelectorAll('*').forEach(el => {
      if (el.children.length === 0 && el.textContent.trim() === 'Freelance Full-Stack Developer & Designer') {
        const removable = el.closest('.experience-upgrade-card');
        if (removable) removable.remove();
        else el.textContent = 'Freelance IT Technician';
      }
    });

    const title = document.querySelector('#experience .timeline-title');
    if (title) title.textContent = 'Freelance IT Technician';

    const timeline = document.querySelector('#experience .timeline-content');
    if (timeline && !timeline.querySelector('.d12-final-experience-note')) {
      const note = document.createElement('div');
      note.className = 'd12-final-experience-note';
      note.innerHTML = '<strong>Freelance IT Technician</strong> — providing practical IT support, computer repair and troubleshooting, Wi-Fi/network installation and configuration, website development and hosting, CCTV configuration, and technical consulting.';
      timeline.appendChild(note);
    }
  };

  const navigation = () => {
    const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    links.forEach(link => {
      link.addEventListener('click', event => {
        const target = document.getElementById(link.getAttribute('href').slice(1));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        history.replaceState(null,'',link.getAttribute('href'));
        document.getElementById('navLinks')?.classList.remove('active');
        document.getElementById('hamburger')?.setAttribute('aria-expanded','false');
      });
    });
  };

  const boot = () => {
    injectStyles();
    makeDesign();
    ensureDesignNav();
    fixExperience();
    reveal();
    navigation();

    if (window.AOS?.init) {
      window.AOS.init({duration:850,easing:'ease-out-cubic',once:true,offset:70});
      setTimeout(reveal, 1000);
    }

    const loader = document.getElementById('preloader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => loader.classList.add('hidden'), 1500);
    }

    // Final visibility guard for slow CDN/network conditions.
    setTimeout(reveal, 2500);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();
