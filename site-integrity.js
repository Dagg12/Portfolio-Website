/* Dagg12 Portfolio — content integrity patch */
(() => {
  'use strict';

  const stackGroups = [
    ['Frontend', 'HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive UI/UX', 'AOS / Typed.js'],
    ['Backend & Application', 'Node.js', 'Java', 'C#', 'C++', 'Python', 'ASP.NET'],
    ['Databases', 'MySQL', 'Oracle Database', 'Firebase / Firestore', 'SQL', 'MySQL Workbench'],
    ['Networking', 'Cisco Packet Tracer', 'Computer Networks', 'DHCP / DNS', 'Routing & Switching', 'Network Configuration', 'Network Troubleshooting'],
    ['Infrastructure & DevOps', 'Git', 'GitHub', 'Linux', 'Bash', 'GitHub Pages', 'Firebase Hosting'],
    ['Security', 'Kali Linux', 'Ethical Hacking Fundamentals', 'Security Testing', 'Network Security', 'System Hardening'],
    ['Tools & AI', 'VS Code', 'Visual Studio', 'Generative AI', 'Automation', 'Intelligent Application Exploration'],
    ['Design & Creative', 'Poster Design', 'Logo Design', 'Brand Identity', 'Visual Design', 'Creative Direction', 'Clothing Brand Design']
  ];

  const iconFor = (name) => {
    const n = name.toLowerCase();
    if (n.includes('html')) return 'fab fa-html5';
    if (n.includes('css')) return 'fab fa-css3-alt';
    if (n.includes('javascript')) return 'fab fa-js';
    if (n.includes('react')) return 'fab fa-react';
    if (n.includes('node')) return 'fab fa-node-js';
    if (n.includes('python')) return 'fab fa-python';
    if (n.includes('java')) return 'fab fa-java';
    if (n.includes('git')) return 'fab fa-git-alt';
    if (n.includes('github')) return 'fab fa-github';
    if (n.includes('linux') || n.includes('bash')) return 'fab fa-linux';
    if (n.includes('database') || n.includes('sql') || n.includes('mysql') || n.includes('oracle') || n.includes('firestore')) return 'fas fa-database';
    if (n.includes('network') || n.includes('cisco') || n.includes('routing') || n.includes('dhcp') || n.includes('dns')) return 'fas fa-network-wired';
    if (n.includes('security') || n.includes('kali') || n.includes('hacking') || n.includes('hardening')) return 'fas fa-shield-halved';
    if (n.includes('design') || n.includes('logo') || n.includes('poster') || n.includes('brand') || n.includes('creative')) return 'fas fa-pen-nib';
    if (n.includes('ai') || n.includes('automation') || n.includes('intelligent')) return 'fas fa-brain';
    if (n.includes('visual studio')) return 'fas fa-window-maximize';
    return 'fas fa-code';
  };

  const css = () => {
    if (document.getElementById('d12-integrity-style')) return;
    const s = document.createElement('style');
    s.id = 'd12-integrity-style';
    s.textContent = `
      /* Contact icon restoration */
      #contact .contact-item > i,
      #contact .contact-item > .contact-icon,
      #contact .contact-icon i {
        display:grid!important;place-items:center!important;flex:0 0 54px!important;width:54px!important;height:54px!important;
        min-width:54px!important;border-radius:16px!important;color:#61f3ff!important;font-size:1.25rem!important;
        background:linear-gradient(145deg,rgba(97,243,255,.14),rgba(52,140,255,.07))!important;
        border:1px solid rgba(97,243,255,.25)!important;box-shadow:0 0 24px rgba(97,243,255,.08)!important;
        visibility:visible!important;opacity:1!important;
      }
      #contact .contact-item{display:flex!important;align-items:center!important;gap:16px!important;visibility:visible!important;opacity:1!important}
      #contact .contact-item a{color:inherit;text-decoration:none}
      #contact .contact-item:hover > i,#contact .contact-item:hover > .contact-icon{transform:translateY(-3px);box-shadow:0 0 30px rgba(97,243,255,.18)!important}

      /* Complete technology stack */
      .d12-complete-stack{margin-top:2.5rem;padding:1.35rem;border:1px solid rgba(97,243,255,.15);border-radius:28px;background:linear-gradient(145deg,rgba(7,18,31,.86),rgba(1,6,14,.78));box-shadow:0 30px 100px rgba(0,0,0,.35);position:relative;overflow:hidden}
      .d12-complete-stack:before{content:'';position:absolute;inset:-30%;background:radial-gradient(circle at 80% 20%,rgba(97,243,255,.09),transparent 28%),radial-gradient(circle at 20% 80%,rgba(155,124,255,.07),transparent 28%);animation:d12StackPulse 9s ease-in-out infinite alternate;pointer-events:none}
      @keyframes d12StackPulse{to{transform:scale(1.08) rotate(2deg);opacity:.7}}
      .d12-stack-heading{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:flex-end;gap:1rem;margin-bottom:1.2rem}
      .d12-stack-heading h3{margin:.3rem 0 0;font-size:clamp(1.5rem,3vw,2.4rem);letter-spacing:-.045em}
      .d12-stack-heading p{margin:0;color:rgba(255,255,255,.48);font:600 .62rem/1.6 ui-monospace,monospace;max-width:430px}
      .d12-stack-kicker{font:700 .6rem ui-monospace,monospace;letter-spacing:.16em;text-transform:uppercase;color:#61f3ff}
      .d12-stack-groups{position:relative;z-index:1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
      .d12-stack-group{padding:17px;border:1px solid rgba(255,255,255,.075);border-radius:20px;background:rgba(0,4,10,.46);transition:.35s ease}
      .d12-stack-group:hover{transform:translateY(-4px);border-color:rgba(97,243,255,.3);box-shadow:0 20px 55px rgba(0,0,0,.25)}
      .d12-stack-group h4{display:flex;align-items:center;gap:9px;margin:0 0 13px;color:#fff;font-size:.9rem}.d12-stack-group h4 i{color:#61f3ff}
      .d12-stack-items{display:flex;flex-wrap:wrap;gap:8px}
      .d12-stack-chip{display:inline-flex;align-items:center;gap:7px;padding:8px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.035);color:rgba(255,255,255,.75);font:600 .67rem ui-monospace,monospace;transition:.25s ease}
      .d12-stack-chip i{color:#61f3ff;font-size:.78rem}.d12-stack-chip:hover{color:#fff;border-color:rgba(97,243,255,.3);background:rgba(97,243,255,.06);transform:translateY(-2px)}
      body.light-mode .d12-complete-stack{background:rgba(255,255,255,.8);border-color:rgba(20,120,150,.18)}
      body.light-mode .d12-stack-group{background:rgba(240,247,250,.75)} body.light-mode .d12-stack-group h4{color:#07121e} body.light-mode .d12-stack-chip{color:#213142;border-color:rgba(20,60,80,.12)}
      @media(max-width:760px){.d12-stack-groups{grid-template-columns:1fr}.d12-stack-heading{display:block}.d12-stack-heading p{margin-top:10px}}
    `;
    document.head.appendChild(s);
  };

  const restoreContactIcons = () => {
    const items = document.querySelectorAll('#contact .contact-item');
    items.forEach((item, i) => {
      let icon = item.querySelector(':scope > i, :scope > .contact-icon');
      if (!icon) {
        icon = document.createElement('i');
        icon.className = ['fas fa-envelope','fas fa-phone-alt','fab fa-linkedin-in','fab fa-github'][i] || 'fas fa-address-card';
        item.prepend(icon);
      }
      icon.style.visibility = 'visible';
      icon.style.opacity = '1';
    });
  };

  const removeUnverifiedCertificate = () => {
    const section = document.getElementById('certificates');
    if (!section) return;
    section.querySelectorAll('h3').forEach(h => {
      const title = h.textContent.trim().toLowerCase();
      if (title.includes('information technology') && !title.includes('bachelor')) {
        const card = h.closest('.certificate-card, .certificate-item, .cert-card') || h.parentElement;
        card?.remove();
      }
    });
    // Keep the certificate section honest: only the Cisco certificate currently documented in the portfolio remains.
    const cards = section.querySelectorAll('.certificate-card, .certificate-item, .cert-card');
    cards.forEach(card => {
      if (!/Cisco Networking Certificate/i.test(card.textContent)) card.remove();
    });
  };

  const addCompleteStack = () => {
    const skills = document.getElementById('skills');
    if (!skills || document.getElementById('d12CompleteStack')) return;
    const container = skills.querySelector('.container');
    if (!container) return;
    const section = document.createElement('div');
    section.id = 'd12CompleteStack';
    section.className = 'd12-complete-stack';
    section.setAttribute('data-aos','fade-up');
    section.innerHTML = `<div class="d12-stack-heading"><div><div class="d12-stack-kicker">D12 / TECHNOLOGY ARSENAL</div><h3>Complete Tech Stack</h3></div><p>Everything I currently work with across software development, databases, networking, infrastructure, security, AI and creative design.</p></div><div class="d12-stack-groups"></div>`;
    const groups = section.querySelector('.d12-stack-groups');
    stackGroups.forEach(([title,...items]) => {
      const card = document.createElement('article');
      card.className = 'd12-stack-group';
      card.innerHTML = `<h4><i class="${iconFor(title)}"></i>${title}</h4><div class="d12-stack-items"></div>`;
      const list = card.querySelector('.d12-stack-items');
      items.forEach(name => {
        const chip = document.createElement('span');
        chip.className = 'd12-stack-chip';
        chip.innerHTML = `<i class="${iconFor(name)}"></i>${name}`;
        list.appendChild(chip);
      });
      groups.appendChild(card);
    });
    container.appendChild(section);
  };

  const boot = () => {
    css();
    restoreContactIcons();
    removeUnverifiedCertificate();
    addCompleteStack();
    if (window.AOS?.refresh) window.AOS.refresh();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();
