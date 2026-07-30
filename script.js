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
    // Get all matrix canvas elements
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

        // Resize on load and window resize
        resizeCanvas();

        function drawMatrix() {
            // Semi-transparent to create trail effect
            ctx.fillStyle = 'rgba(10, 15, 26, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.font = '18px "Courier New", monospace';

            for (let i = 0; i < drops.length; i++) {
                const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                const x = i * 18;
                const y = drops[i] * 18;

                // Varying brightness for depth effect
                const brightness = Math.random() * 0.6 + 0.2;
                const color = `rgba(37, 99, 235, ${brightness})`;
                ctx.fillStyle = color;
                ctx.fillText(char, x, y);

                // Some characters are brighter (highlighted)
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

        // Handle resize for this canvas
        window.addEventListener('resize', () => {
            resizeCanvas();
        });

        // Pause animation when not visible for performance
        let isVisible = true;
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
   GITHUB REPOS FETCH (from Dagg12)
   ==================================================== */
(function initGitHubRepos() {
    const reposContainer = document.getElementById('githubRepos');
    if (!reposContainer) return;

    const username = 'Dagg12';

    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        .then((response) => {
            if (!response.ok) throw new Error('GitHub API error');
            return response.json();
        })
        .then((repos) => {
            reposContainer.innerHTML = '';
            if (!repos.length) {
                reposContainer.innerHTML = '<p class="repos-loading">No public repositories found.</p>';
                return;
            }
            repos.forEach((repo) => {
                const card = document.createElement('div');
                card.className = 'repo-card';
                card.innerHTML = `
                    <div class="repo-name"><i class="fab fa-github"></i> ${repo.name}</div>
                    ${repo.description ? `<p class="repo-desc">${repo.description}</p>` : ''}
                    <div class="repo-meta">
                        ${repo.language ? `<span class="repo-lang"><span class="lang-color" style="background: ${getLangColor(repo.language)}"></span> ${repo.language}</span>` : ''}
                        <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                        <span><i class="fas fa-code-fork"></i> ${repo.forks_count}</span>
                    </div>
                `;
                reposContainer.appendChild(card);
            });
        })
        .catch(() => {
            reposContainer.innerHTML = `
                <p class="repos-loading" style="color: #EF4444;">
                    <i class="fas fa-exclamation-circle"></i> Unable to load repositories.
                    <a href="https://github.com/${username}" target="_blank" style="color: var(--primary);">View on GitHub →</a>
                </p>
            `;
        });

    function getLangColor(lang) {
        const colors = {
            JavaScript: '#f1e05a', HTML: '#e34c26', CSS: '#563d7c', Python: '#3572A5',
            Java: '#b07219', C: '#555555', 'C++': '#f34b7d', 'C#': '#178600',
            PHP: '#4F5D95', TypeScript: '#2b7489', Go: '#00ADD8', Rust: '#dea584',
            Swift: '#ffac45', Kotlin: '#A97BFF', Ruby: '#701516', Shell: '#89e051',
            SQL: '#e38c00', SCSS: '#c6538c', Vue: '#41b883', React: '#61dafb',
            Angular: '#dd1b16',
        };
        return colors[lang] || '#6c757d';
    }
})();

/* ====================================================
   CONTACT FORM - Sends to Email
   ==================================================== */
(function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Reset errors
        form.querySelectorAll('.form-group').forEach((g) => g.classList.remove('error'));
        status.textContent = '';
        status.className = 'form-status';

        // Validate
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

        // Show sending status
        status.textContent = 'Opening your email client...';
        status.className = 'form-status';
        const btn = form.querySelector('.btn-submit');
        btn.disabled = true;

        setTimeout(() => {
            status.textContent = '✅ Email client opened! Please send your message.';
            status.className = 'form-status success';
            btn.disabled = false;
        }, 1000);

        setTimeout(() => {
            form.submit();
        }, 300);
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
console.log('%c🚀 Vhukhudo Kevin Thamaga - Portfolio', 'font-size: 24px; font-weight: bold; color: #2563EB;');
console.log('%cBuilt with ❤️ using HTML, CSS & JavaScript + Matrix Rain', 'font-size: 14px; color: #64748b;');
console.log('%chttps://github.com/Dagg12', 'font-size: 12px; color: #22C55E;');