/* ====================================================
   PRELOADER
   ==================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 800);
    }
});

/* ====================================================
   AOS INIT
   ==================================================== */
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic',
        disable: window.innerWidth < 768 ? true : false,
    });
}

/* ====================================================
   TYPED.JS
   ==================================================== */
if (typeof Typed !== 'undefined') {
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        new Typed('#typed-text', {
            strings: [
                'Software Developer',
                'Full Stack Developer',
                'Networking Enthusiast',
                'Cybersecurity Student',
                'AI Explorer',
            ],
            typeSpeed: 55,
            backSpeed: 35,
            backDelay: 1800,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
        });
    }
}

/* ====================================================
   MATRIX RAIN BACKGROUND - Multiple Canvases (ALL SECTIONS)
   ==================================================== */
(function initMatrixRain() {
    const canvases = document.querySelectorAll('.matrix-background');
    if (!canvases.length) return;

    canvases.forEach((canvas) => {
        const ctx = canvas.getContext('2d');
        let width, height;
        let columns;
        let drops = [];
        let matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>?/{}[]|!@#$%^&*()_+';

        function resizeCanvas() {
            const rect = canvas.parentElement.getBoundingClientRect();
            width = canvas.width = rect.width;
            height = canvas.height = rect.height;
            columns = Math.floor(width / 18);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -height;
            }
        }

        resizeCanvas();

        function drawMatrix() {
            ctx.fillStyle = 'rgba(10, 15, 26, 0.05)';
            ctx.fillRect(0, 0, width, height);
            ctx.font = '18px "Courier New", monospace';

            for (let i = 0; i < drops.length; i++) {
                const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                const x = i * 18;
                const y = drops[i] * 18;
                const brightness = Math.random() * 0.6 + 0.2;
                ctx.fillStyle = `rgba(37, 99, 235, ${brightness})`;
                ctx.fillText(char, x, y);

                if (Math.random() < 0.05) {
                    ctx.fillStyle = `rgba(37, 99, 235, 0.9)`;
                    ctx.fillText(char, x, y);
                }

                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += 0.5 + Math.random() * 0.5;
            }

            requestAnimationFrame(drawMatrix);
        }

        drawMatrix();

        window.addEventListener('resize', resizeCanvas);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isVisible = true;
                } else {
                    isVisible = false;
                }
            });
        }, { threshold: 0 });
        observer.observe(canvas);
    });
})();

/* ====================================================
   CUSTOM CURSOR (Desktop)
   ==================================================== */
(function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('customCursorDot');

    if (!cursor || !cursorDot) return;
    if (window.innerWidth < 1024) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    const interactiveElements = document.querySelectorAll(
        'a, button, .btn, .project-card, .skill-item, .contact-card, .certificate-card, .timeline-content'
    );

    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorDot.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorDot.classList.remove('active');
        });
    });
})();

/* ====================================================
   DARK / LIGHT MODE
   ==================================================== */
(function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle?.querySelector('i');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
        if (typeof AOS !== 'undefined') AOS.refresh();
    });

    function updateIcon(theme) {
        if (!icon) return;
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
})();

/* ====================================================
   MOBILE NAV
   ==================================================== */
(function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    function toggleMenu() {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
        overlay.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    hamburger?.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    navLinks?.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) toggleMenu();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks?.classList.contains('open')) {
            toggleMenu();
        }
    });
})();

/* ====================================================
   NAVBAR SCROLL & ACTIVE LINK
   ==================================================== */
(function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinkElements = document.querySelectorAll('.nav-links a');

    function updateNavbar() {
        if (window.scrollY > 50) navbar?.classList.add('scrolled');
        else navbar?.classList.remove('scrolled');

        let current = '';
        sections.forEach((section) => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) current = section.getAttribute('id');
        });

        navLinkElements.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    window.addEventListener('load', updateNavbar);
})();

/* ====================================================
   SCROLL PROGRESS
   ==================================================== */
(function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = Math.min(progress, 100) + '%';
    }, { passive: true });
})();

/* ====================================================
   BACK TO TOP
   ==================================================== */
(function initBackToTop() {
    const button = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) button.classList.add('visible');
        else button.classList.remove('visible');
    }, { passive: true });
    button?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

/* ====================================================
   STATS COUNTERS
   ==================================================== */
(function initStatsCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let observed = new Set();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !observed.has(entry.target)) {
                observed.add(entry.target);
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach((el) => observer.observe(el));

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'), 10);
        if (isNaN(target) || target <= 0) return;
        let current = 0;
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, stepTime);
    }
})();

/* ====================================================
   SKILL BARS
   ==================================================== */
(function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    let observed = new Set();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !observed.has(entry.target)) {
                observed.add(entry.target);
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                if (width) {
                    bar.style.width = '0%';
                    setTimeout(() => { bar.style.width = width + '%'; }, 200);
                }
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach((bar) => observer.observe(bar));
})();

/* ====================================================
   GITHUB REPOS FETCH - FIXED WITH FALLBACK
   ==================================================== */
(function initGitHubRepos() {
    const reposContainer = document.getElementById('githubRepos');
    if (!reposContainer) return;

    const username = 'Dagg12';
    
    // Show loading state
    reposContainer.innerHTML = `
        <div class="repos-loading" style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 2rem;">
            <i class="fas fa-spinner fa-spin"></i> Loading repositories...
        </div>
    `;

    // Try to fetch from GitHub API
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6&_=${Date.now()}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Portfolio-Website'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        return response.json();
    })
    .then(repos => {
        if (!repos || repos.length === 0) {
            throw new Error('No repositories found');
        }
        
        reposContainer.innerHTML = '';
        
        repos.forEach((repo, index) => {
            const card = document.createElement('div');
            card.className = 'repo-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            const langColor = getLangColor(repo.language);
            
            card.innerHTML = `
                <div class="repo-name">
                    <i class="fab fa-github"></i> 
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="color: var(--text-primary); text-decoration: none;">
                        ${repo.name}
                    </a>
                </div>
                ${repo.description ? `<p class="repo-desc">${repo.description.substring(0, 100)}${repo.description.length > 100 ? '...' : ''}</p>` : ''}
                <div class="repo-meta">
                    ${repo.language ? `
                        <span class="repo-lang">
                            <span class="lang-color" style="background: ${langColor}"></span>
                            ${repo.language}
                        </span>
                    ` : ''}
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fas fa-code-fork"></i> ${repo.forks_count}</span>
                    <span><i class="fas fa-clock"></i> ${new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
            `;
            reposContainer.appendChild(card);
        });
    })
    .catch((error) => {
        console.warn('GitHub API fetch failed, using fallback:', error);
        
        // FALLBACK: Display hardcoded repositories
        const fallbackRepos = [
            {
                name: 'Centalytics',
                description: 'Full‑stack hospital management system with Firebase backend. Patient management, doctor scheduling, appointments, authentication, medical records, and intuitive dashboard.',
                html_url: 'https://github.com/Dagg12/Centalytics',
                language: 'JavaScript',
                stargazers_count: 1,
                forks_count: 0,
                updated_at: new Date().toISOString()
            },
            {
                name: 'Portfolio-Website',
                description: 'Fully responsive, modern portfolio with glassmorphism, dark mode, matrix rain background, and professional design.',
                html_url: 'https://github.com/Dagg12/Portfolio-Website',
                language: 'HTML',
                stargazers_count: 2,
                forks_count: 0,
                updated_at: new Date().toISOString()
            },
            {
                name: 'Thamas-portfolio',
                description: 'Professional business portfolio for THAMAS TECH WORLD, an ICT and networking company. Services, case studies, technical reports, and customer reviews.',
                html_url: 'https://github.com/Dagg12/Thamas-portfolio',
                language: 'HTML',
                stargazers_count: 1,
                forks_count: 0,
                updated_at: new Date().toISOString()
            }
        ];
        
        reposContainer.innerHTML = '';
        
        fallbackRepos.forEach((repo, index) => {
            const card = document.createElement('div');
            card.className = 'repo-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            const langColor = getLangColor(repo.language);
            
            card.innerHTML = `
                <div class="repo-name">
                    <i class="fab fa-github"></i> 
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="color: var(--text-primary); text-decoration: none;">
                        ${repo.name}
                    </a>
                </div>
                <p class="repo-desc">${repo.description}</p>
                <div class="repo-meta">
                    ${repo.language ? `
                        <span class="repo-lang">
                            <span class="lang-color" style="background: ${langColor}"></span>
                            ${repo.language}
                        </span>
                    ` : ''}
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fas fa-code-fork"></i> ${repo.forks_count}</span>
                </div>
            `;
            reposContainer.appendChild(card);
        });
    });

    function getLangColor(lang) {
        const colors = {
            JavaScript: '#f1e05a',
            HTML: '#e34c26',
            CSS: '#563d7c',
            Python: '#3572A5',
            Java: '#b07219',
            C: '#555555',
            'C++': '#f34b7d',
            'C#': '#178600',
            PHP: '#4F5D95',
            TypeScript: '#2b7489',
            Go: '#00ADD8',
            Rust: '#dea584',
            Swift: '#ffac45',
            Kotlin: '#A97BFF',
            Ruby: '#701516',
            Shell: '#89e051',
            SQL: '#e38c00',
            SCSS: '#c6538c',
            Vue: '#41b883',
            React: '#61dafb',
            Angular: '#dd1b16',
            'Jupyter Notebook': '#DA5B0B',
            'Objective-C': '#438eff',
            Perl: '#0298c3',
            R: '#198CE7',
            Elixir: '#6e4a7e',
            Dart: '#00B4AB',
            Dockerfile: '#384d54',
            Groovy: '#4298b8',
            Lua: '#000080',
            MATLAB: '#e16737',
            PowerShell: '#012456',
            Scala: '#c22d40',
            Stylus: '#ff6347'
        };
        return colors[lang] || '#6c757d';
    }
})();

/* ====================================================
   CONTACT FORM - Formspree Integration
   ==================================================== */
(function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        form.querySelectorAll('.form-group').forEach((g) => g.classList.remove('error'));
        status.textContent = '';
        status.className = 'form-status';

        let isValid = true;
        const name = document.getElementById('formName');
        const email = document.getElementById('formEmail');
        const message = document.getElementById('formMessage');

        if (!name.value.trim()) {
            name.closest('.form-group').classList.add('error');
            isValid = false;
        }
        if (!email.value.trim() || !isValidEmail(email.value)) {
            email.closest('.form-group').classList.add('error');
            isValid = false;
        }
        if (!message.value.trim()) {
            message.closest('.form-group').classList.add('error');
            isValid = false;
        }

        if (!isValid) return;

        status.textContent = 'Sending message...';
        status.className = 'form-status';
        const btn = form.querySelector('.btn-submit');
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        try {
            const formData = new FormData(form);
            const response = await fetch('https://formspree.io/f/maqrzbgd', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
                status.className = 'form-status success';
                form.reset();
            } else {
                const data = await response.json();
                status.textContent = '❌ ' + (data.error || 'Something went wrong. Please try again.');
                status.className = 'form-status error';
            }
        } catch (error) {
            status.textContent = '❌ Network error. Please check your connection and try again.';
            status.className = 'form-status error';
        }

        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
})();

/* ====================================================
   SMOOTH SCROLL (fallback)
   ==================================================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

/* ====================================================
   CURRENT YEAR
   ==================================================== */
document.getElementById('currentYear').textContent = new Date().getFullYear();

/* ====================================================
   KEYBOARD: ESCAPE
   ==================================================== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const nav = document.getElementById('navLinks');
        if (nav?.classList.contains('open')) {
            document.getElementById('hamburger')?.click();
        }
    }
});

/* ====================================================
   PREVENT DOUBLE SUBMIT
   ==================================================== */
document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', function() {
        const btn = this.querySelector('button[type="submit"]');
        if (btn) {
            btn.disabled = true;
            setTimeout(() => { btn.disabled = false; }, 5000);
        }
    });
});

/* ====================================================
   CONSOLE WELCOME
   ==================================================== */
console.log('%c🚀 Vhukhudo Kevin Thamaga - Portfolio v3.0', 'font-size: 24px; font-weight: bold; color: #2563EB;');
console.log('%c┌─────────────────────────────────────────────┐', 'font-size: 12px; color: #64748b;');
console.log('%c│  Software Developer  │  Cybersecurity       │', 'font-size: 12px; color: #64748b;');
console.log('%c│  Full Stack          │  Networking           │', 'font-size: 12px; color: #64748b;');
console.log('%c└─────────────────────────────────────────────┘', 'font-size: 12px; color: #64748b;');
console.log('%cBuilt with ❤️ using HTML, CSS & JavaScript + Matrix Rain', 'font-size: 14px; color: #22C55E;');
console.log('%chttps://github.com/Dagg12', 'font-size: 12px; color: #06B6D4;');
console.log('%c💡 Messages are sent via Formspree', 'font-size: 12px; color: #94A3B8;');