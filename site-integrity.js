/* Dagg12 Portfolio — final content + interaction restoration */
(() => {
  'use strict';

  const TECH_GROUPS = [
    ['Frontend', ['HTML5','CSS3','JavaScript','React','Responsive UI/UX','AOS / Typed.js']],
    ['Backend & Application', ['Node.js','Java','C#','C++','Python','ASP.NET']],
    ['Databases', ['MySQL','Oracle Database','Firebase / Firestore','SQL','MySQL Workbench']],
    ['Networking', ['Cisco Packet Tracer','Computer Networks','DHCP / DNS','Routing & Switching','Network Configuration','Network Troubleshooting']],
    ['Infrastructure & DevOps', ['Git','GitHub','Linux','Bash','GitHub Pages','Firebase Hosting']],
    ['Security', ['Kali Linux','Ethical Hacking Fundamentals','Security Testing','Network Security','System Hardening']],
    ['Tools & AI', ['VS Code','Visual Studio','Generative AI','Automation','Intelligent Application Exploration']],
    ['Design & Creative', ['Poster Design','Logo Design','Brand Identity','Visual Design','Creative Direction','Clothing Brand Design']]
  ];

  const PROJECTS = [
    {name:'DaggWorld Business OS', desc:'Business management platform built for real small businesses, with client management, quotations, invoices, expenses, products and business workflows.', exp:'Full-stack product development — UI/UX, frontend engineering, Firebase integration, business workflow design and deployment.', tech:'React / JavaScript / Firebase', repo:'https://github.com/Dagg12/daggworld-business-os', live:'https://daggworld-business-toolkit.web.app/', image:'assets/images/Daggworld.png'},
    {name:'Nare & Philippine Fragrance House', desc:'Premium fragrance-house website with luxury product presentation, filtering, search, quick-view interactions, favourites and WhatsApp conversion.', exp:'Freelance web design and development — luxury UI direction, responsive frontend, product presentation, interaction design and client-focused conversion flow.', tech:'HTML / CSS / JavaScript / SVG', repo:'https://github.com/Dagg12/Philippine-website', live:'https://dagg12.github.io/Philippine-website/', image:'assets/website-preview.svg'},
    {name:'Centalytics', desc:'Hospital management platform covering patients, doctors, appointments, medical records, authentication and centralized administration.', exp:'Full-stack system development — architecture, dashboard UI, Firebase backend, authentication, data modelling and deployment.', tech:'JavaScript / Firebase / Web', repo:'https://github.com/Dagg12/Centalytics', live:'https://centalytics-cef6c.web.app/'},
    {name:'Ranger Management System', desc:'Management system project focused on structured operational data, workflows and administration.', exp:'Software development — system design, database-driven workflows, interface development and problem solving.', tech:'Application Development / Database', repo:'https://github.com/Dagg12/Ranger-Management-Sytem'},
    {name:'Naledi Portfolio', desc:'Professional portfolio website designed to present a client profile, work and personal brand in a polished responsive experience.', exp:'Client website delivery — visual direction, responsive layout, frontend implementation, interaction and GitHub Pages deployment.', tech:'HTML / CSS / JavaScript', repo:'https://github.com/Dagg12/Naledi-Portfolio-', live:'https://dagg12.github.io/Naledi-Portfolio-/'},
    {name:'Clinical Blood Bank', desc:'Clinical blood-bank system project focused on structured records, blood inventory and operational workflows.', exp:'Application development — database thinking, system workflows, interface implementation and technical problem solving.', tech:'Software Development / Database', repo:'https://github.com/TeeCee07/ClinicalBloodBank'},
    {name:'THAMAS TECH WORLD Portfolio', desc:'Business-facing technology portfolio for development, IT support, networking and creative services.', exp:'Freelance IT and digital services — websites, computer support, networking, branding and client-facing technical solutions.', tech:'Web / IT Support / Design', repo:'https://github.com/Dagg12/Thamas-portfolio', live:'https://dagg12.github.io/Thamas-portfolio/'}
  ];

  const iconFor = (name) => {
    const n=name.toLowerCase();
    if(n.includes('html'))return'fab fa-html5'; if(n.includes('css'))return'fab fa-css3-alt'; if(n.includes('javascript'))return'fab fa-js';
    if(n.includes('react'))return'fab fa-react'; if(n.includes('node'))return'fab fa-node-js'; if(n.includes('python'))return'fab fa-python';
    if(n.includes('java'))return'fab fa-java'; if(n.includes('git'))return'fab fa-git-alt'; if(n.includes('github'))return'fab fa-github';
    if(n.includes('linux')||n.includes('bash'))return'fab fa-linux'; if(n.includes('network')||n.includes('cisco')||n.includes('routing')||n.includes('dhcp')||n.includes('dns'))return'fas fa-network-wired';
    if(n.includes('security')||n.includes('kali')||n.includes('hacking')||n.includes('hardening'))return'fas fa-shield-halved';
    if(n.includes('design')||n.includes('logo')||n.includes('poster')||n.includes('brand')||n.includes('creative'))return'fas fa-pen-nib';
    if(n.includes('ai')||n.includes('automation')||n.includes('intelligent'))return'fas fa-brain';
    if(n.includes('database')||n.includes('sql')||n.includes('mysql')||n.includes('oracle')||n.includes('firestore'))return'fas fa-database';
    return'fas fa-code';
  };

  const addStyle = () => {
    if(document.getElementById('d12-final-integrity-style'))return;
    const s=document.createElement('style'); s.id='d12-final-integrity-style'; s.textContent=`
      /* LARGE CONTACT VISUALS */
      #contact .contact-info{display:grid!important;gap:18px!important}
      #contact .contact-item{display:flex!important;align-items:center!important;gap:18px!important;padding:18px 20px!important;min-height:92px!important;border:1px solid rgba(97,243,255,.14)!important;border-radius:22px!important;background:linear-gradient(145deg,rgba(5,18,31,.76),rgba(1,7,15,.62))!important;box-shadow:0 20px 55px rgba(0,0,0,.2)!important;transition:.35s ease!important;visibility:visible!important;opacity:1!important}
      #contact .contact-item:hover{transform:translateY(-5px)!important;border-color:rgba(97,243,255,.4)!important;box-shadow:0 28px 75px rgba(0,0,0,.35),0 0 30px rgba(97,243,255,.08)!important}
      #contact .contact-item>i,#contact .contact-item>.contact-icon{display:grid!important;place-items:center!important;flex:0 0 70px!important;width:70px!important;height:70px!important;border-radius:20px!important;color:#61f3ff!important;font-size:1.75rem!important;background:radial-gradient(circle at 35% 30%,rgba(97,243,255,.22),rgba(52,140,255,.06) 60%,rgba(0,0,0,.08))!important;border:1px solid rgba(97,243,255,.3)!important;box-shadow:inset 0 0 22px rgba(97,243,255,.07),0 0 28px rgba(97,243,255,.08)!important;visibility:visible!important;opacity:1!important;transition:.35s ease!important}
      #contact .contact-item:hover>i{transform:scale(1.08) rotate(-4deg)!important;box-shadow:0 0 38px rgba(97,243,255,.2)!important}
      #contact .contact-item a{color:inherit!important;text-decoration:none!important;font-weight:700!important}
      /* HERO TEXT MOTION */
      #typed-text{display:inline-block;min-width:10px;border-right:2px solid #61f3ff;padding-right:7px;animation:d12Caret .75s step-end infinite;will-change:contents}
      @keyframes d12Caret{50%{border-color:transparent}}
      .d12-hero-motion{animation:d12HeroIn 1s cubic-bezier(.2,.8,.2,1) both}
      @keyframes d12HeroIn{from{opacity:0;transform:translateY(18px);filter:blur(5px)}to{opacity:1;transform:none;filter:none}}
      /* PROJECT EXPERIENCE UPDATE */
      .d12-project-update{margin-top:16px;padding:15px 16px;border-left:2px solid #61f3ff;background:rgba(97,243,255,.045);border-radius:0 14px 14px 0;color:#9aaabc;font-size:.82rem;line-height:1.7}
      .d12-project-update strong{display:block;color:#61f3ff;font:700 .62rem ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;margin-bottom:5px}
      .d12-project-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.d12-project-actions a{display:inline-flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid rgba(97,243,255,.16);border-radius:999px;color:#bcd4e3;font-size:.68rem;text-decoration:none}.d12-project-actions a:hover{border-color:#61f3ff;color:#61f3ff}
      /* COMPLETE STACK */
      .d12-complete-stack{margin-top:42px;padding:24px;border:1px solid rgba(97,243,255,.15);border-radius:28px;background:linear-gradient(145deg,rgba(7,18,31,.9),rgba(1,6,14,.82));box-shadow:0 30px 100px rgba(0,0,0,.35);position:relative;overflow:hidden}
      .d12-stack-heading{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:20px}.d12-stack-kicker{font:700 10px ui-monospace,monospace;letter-spacing:.16em;color:#61f3ff}.d12-stack-heading h3{margin:6px 0;font-size:clamp(1.6rem,3vw,2.5rem);letter-spacing:-.04em}.d12-stack-heading p{max-width:540px;margin:0;color:#8293a5;font:600 11px/1.7 ui-monospace,monospace}.d12-stack-groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.d12-stack-group{padding:17px;border:1px solid rgba(255,255,255,.08);border-radius:20px;background:rgba(0,4,10,.48);transition:.3s}.d12-stack-group:hover{transform:translateY(-3px);border-color:rgba(97,243,255,.28)}.d12-stack-group h4{display:flex;align-items:center;gap:9px;margin:0 0 13px;color:#fff}.d12-stack-group h4 i,.d12-stack-chip i{color:#61f3ff}.d12-stack-items{display:flex;flex-wrap:wrap;gap:8px}.d12-stack-chip{display:inline-flex;align-items:center;gap:7px;padding:8px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.035);color:#b9c5d1;font:600 10px ui-monospace,monospace}.d12-stack-chip:hover{border-color:rgba(97,243,255,.35);color:#fff}
      @media(max-width:760px){#contact .contact-item{min-height:78px;padding:14px!important}#contact .contact-item>i{flex-basis:58px!important;width:58px!important;height:58px!important;font-size:1.4rem!important}.d12-stack-groups{grid-template-columns:1fr}.d12-stack-heading{display:block}.d12-stack-heading p{margin-top:10px}}
    `; document.head.appendChild(s);
  };

  const restoreContact = () => {
    const icons=['fas fa-envelope','fas fa-phone-alt','fab fa-linkedin-in','fab fa-github'];
    document.querySelectorAll('#contact .contact-item').forEach((item,i)=>{
      let icon=item.querySelector(':scope>i, :scope>.contact-icon');
      if(!icon){icon=document.createElement('i');item.prepend(icon)}
      icon.className=icons[i]||'fas fa-address-card'; icon.style.display='grid'; icon.style.visibility='visible'; icon.style.opacity='1';
    });
  };

  const removeFakeCertificate = () => {
    document.querySelectorAll('#certificates .certificate-card,#certificates .certificate-item,#certificates .cert-card').forEach(card=>{
      if(!/Cisco Networking Certificate/i.test(card.textContent))card.remove();
    });
  };

  const typedHero = () => {
    const el=document.getElementById('typed-text'); if(!el||el.dataset.d12Typed)return; el.dataset.d12Typed='1';
    const words=['Software Developer','Full Stack Developer','Freelance IT Technician','Network Engineer','Designer','Creative Technologist'];
    let wi=0,ci=0,deleting=false;
    el.classList.add('d12-hero-motion');
    const tick=()=>{
      const word=words[wi];
      if(!deleting){ci++;el.textContent=word.slice(0,ci);if(ci===word.length){deleting=true;setTimeout(tick,1500);return}setTimeout(tick,75)}
      else{ci--;el.textContent=word.slice(0,ci);if(ci===0){deleting=false;wi=(wi+1)%words.length;setTimeout(tick,300);return}setTimeout(tick,38)}
    }; tick();
  };

  const projectCards = () => {
    const grid=document.querySelector('#projects .projects-grid'); if(!grid||grid.dataset.d12Projects)return; grid.dataset.d12Projects='1';
    const existing=[...grid.querySelectorAll('.project-card')];
    const existingNames=existing.map(c=>(c.querySelector('.project-title')?.textContent||'').toLowerCase());
    const makeCard=(p)=>{
      const c=document.createElement('article'); c.className='project-card d12-project-card'; c.setAttribute('data-aos','fade-up');
      const image=p.image?`<div class="project-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>`:`<div class="project-image d12-project-placeholder"><i class="fas fa-code"></i></div>`;
      c.innerHTML=`<div class="project-card-inner">${image}<div class="project-content"><h3 class="project-title">${p.name}</h3><p class="project-description">${p.desc}</p><div class="project-tech"><span>${p.tech}</span></div><div class="d12-project-update"><strong>Work / Experience</strong>${p.exp}</div><div class="d12-project-actions">${p.repo?`<a href="${p.repo}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Repository</a>`:''}${p.live?`<a href="${p.live}" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> Live Site</a>`:''}</div></div></div>`; return c;
    };
    PROJECTS.forEach(p=>{if(!existingNames.some(n=>n.includes(p.name.toLowerCase().split(' – ')[0].split(' ')[0])))grid.appendChild(makeCard(p))});
    existing.forEach(c=>{
      if(c.querySelector('.d12-project-update'))return;
      const title=(c.querySelector('.project-title')?.textContent||'').trim();
      const match=PROJECTS.find(p=>title.toLowerCase().includes(p.name.toLowerCase().split(' – ')[0].split(' ')[0]));
      if(match){const u=document.createElement('div');u.className='d12-project-update';u.innerHTML=`<strong>Work / Experience</strong>${match.exp}`;c.querySelector('.project-content')?.appendChild(u)}
    });
  };

  const completeStack = () => {
    if(document.getElementById('d12CompleteStack'))return;
    const container=document.querySelector('#skills .container'); if(!container)return;
    const box=document.createElement('div'); box.id='d12CompleteStack'; box.className='d12-complete-stack'; box.setAttribute('data-aos','fade-up');
    box.innerHTML='<div class="d12-stack-heading"><div><div class="d12-stack-kicker">D12 / TECHNOLOGY ARSENAL</div><h3>Complete Tech Stack</h3></div><p>My broader working stack across software development, databases, networking, infrastructure, security, AI and creative design.</p></div><div class="d12-stack-groups"></div>';
    const groups=box.querySelector('.d12-stack-groups');
    TECH_GROUPS.forEach(([title,items])=>{const card=document.createElement('article');card.className='d12-stack-group';card.innerHTML=`<h4><i class="${iconFor(title)}"></i>${title}</h4><div class="d12-stack-items"></div>`;items.forEach(x=>{const chip=document.createElement('span');chip.className='d12-stack-chip';chip.innerHTML=`<i class="${iconFor(x)}"></i>${x}`;card.querySelector('.d12-stack-items').appendChild(chip)});groups.appendChild(card)});
    container.appendChild(box);
  };

  const boot=()=>{addStyle();restoreContact();removeFakeCertificate();typedHero();projectCards();completeStack();window.AOS?.refresh?.();};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
