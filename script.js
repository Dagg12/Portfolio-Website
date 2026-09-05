/* Dagg12 Portfolio — immersive interactive layer */
(() => {
  'use strict';

  const PROJECTS = [
    {title:'DaggWorld Business OS',type:'Full Stack · Business Platform',image:'https://raw.githubusercontent.com/Dagg12/daggworld-business-os/main/ChatGPT%20Image%20Aug%2031%2C%202026%2C%2008_54_22%20AM.png',description:'A professional Business OS for clients, quotes, invoices, bookings, expenses, marketing and business growth.',tech:['React','Vite','Firebase','Node.js','JavaScript'],repo:'https://github.com/Dagg12/daggworld-business-os',live:'https://daggworld-business-toolkit.web.app/',liveLabel:'Live Platform'},
    {title:'THAMAS TECH WORLD — Business Portfolio',type:'Business · Technology Services',image:'https://raw.githubusercontent.com/Dagg12/Thamas-portfolio/main/assets/images/logo.png',description:'The business portfolio for technology services including systems, websites, networking, computer support, repairs and digital solutions.',tech:['Web Development','Networking','IT Support','Systems'],repo:'https://github.com/Dagg12/Thamas-portfolio',live:'https://dagg12.github.io/Thamas-portfolio/',liveLabel:'Business Portfolio'},
    {title:'Nare & Philippine — Fragrance House',type:'Client · Luxury Web Experience',image:'https://raw.githubusercontent.com/Dagg12/Philippine-website/main/assets/website-preview.svg',description:'A premium fragrance experience with curated products, interactive storytelling, WhatsApp ordering and responsive luxury visuals.',tech:['React','Vite','CSS','JavaScript'],repo:'https://github.com/Dagg12/Philippine-website',live:'https://dagg12.github.io/Philippine-website/',liveLabel:'Client Preview'},
    {title:'Centalytics — Hospital Management',type:'Full Stack · Healthcare',image:'assets/images/hospital.png',description:'Hospital management platform covering patients, doctors, appointments, authentication, records and dashboards.',tech:['HTML5','CSS3','JavaScript','Firebase'],repo:'https://github.com/Dagg12/Centalytics',live:'https://centalytics-cef6c.web.app',liveLabel:'Live Demo'},
    {title:'The Ranger — Safari Management',type:'Enterprise Web · Booking',image:'https://raw.githubusercontent.com/Dagg12/Ranger-Management-Sytem/master/The%20ranger%20images/landing%20page%20.png',description:'Safari management and online booking platform connecting guests with accommodation and guided game-drive experiences, plus an owner portal.',tech:['C#','ASP.NET','MySQL','Bootstrap'],repo:'https://github.com/Dagg12/Ranger-Management-Sytem'},
    {title:'Naledi Nail Studio',type:'Client · Service Website',image:'https://raw.githubusercontent.com/Dagg12/Naledi-Portfolio-/main/assets/images/Naledi%20profile.jpeg',description:'A polished nail studio portfolio and service website built around visual presentation, service discovery and client conversion.',tech:['HTML5','CSS3','JavaScript'],repo:'https://github.com/Dagg12/Naledi-Portfolio-',live:'https://dagg12.github.io/Naledi-Portfolio-/',liveLabel:'Live Website'},
    {title:'Clinical Blood Bank',type:'ASP.NET · Database',image:'assets/images/bloodbank.png',description:'Blood inventory and donor management application supporting hospital requests, stock tracking and structured records.',tech:['C#','ASP.NET','MySQL'],repo:'https://github.com/TeeCee07/ClinicalBloodBank'}
  ];

  const STACK = [
    {title:'Frontend',icon:'fa-laptop-code',items:[['React','fab fa-react'],['JavaScript','fab fa-js'],['HTML5','fab fa-html5'],['CSS3','fab fa-css3-alt'],['Tailwind CSS','fas fa-wind'],['Vite','fas fa-bolt']]},
    {title:'Backend & Frameworks',icon:'fa-server',items:[['Node.js','fab fa-node-js'],['Firebase','fas fa-fire'],['ASP.NET','fab fa-microsoft'],['REST APIs','fas fa-plug'],['MySQL','fas fa-database'],['Oracle','fas fa-database'],['SQL','fas fa-code']]},
    {title:'Programming Languages',icon:'fa-terminal',items:[['Java','fab fa-java'],['C#','fab fa-microsoft'],['C++','fas fa-code'],['Python','fab fa-python'],['JavaScript','fab fa-js']]},
    {title:'Networking & Infrastructure',icon:'fa-network-wired',items:[['Git','fab fa-git-alt'],['GitHub','fab fa-github'],['Linux','fab fa-linux'],['Bash','fas fa-terminal'],['Cisco Packet Tracer','fas fa-network-wired'],['Computer Networks','fas fa-wifi']]},
    {title:'Cybersecurity',icon:'fa-user-secret',items:[['Kali Linux','fas fa-user-secret'],['Ethical Hacking','fas fa-shield-halved'],['Security Testing','fas fa-lock'],['Network Security','fas fa-shield-halved'],['System Hardening','fas fa-key']]},
    {title:'Tools & Development',icon:'fa-screwdriver-wrench',items:[['VS Code','fas fa-code'],['Visual Studio','fab fa-microsoft'],['GitHub Pages','fab fa-github'],['Firebase Hosting','fas fa-cloud'],['AI Tools','fas fa-brain']]}
  ];

  const style=document.createElement('style');
  style.id='dagg12-immersive-upgrade';
  style.textContent=`
    :root{--dx-cyan:#00e5ff;--dx-blue:#4f8cff;--dx-green:#00ff9d;--dx-purple:#8b5cf6}
    body{overflow-x:hidden}
    #cyberBackground{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;opacity:.72}
    #cyberBackground svg{width:100%;height:100%;display:block}
    .cyber-vignette{position:absolute;inset:0;background:radial-gradient(circle at 50% 35%,transparent 0%,rgba(3,8,18,.08) 45%,rgba(3,8,18,.58) 100%)}
    .cyber-grid{stroke:rgba(0,229,255,.08);stroke-width:1}
    .cyber-path{fill:none;stroke:rgba(0,229,255,.42);stroke-width:1.2;stroke-dasharray:7 14;animation:cyberFlow 9s linear infinite}
    .cyber-path.fast{animation-duration:4.5s;stroke:rgba(0,255,157,.5)}
    .cyber-node{fill:#00e5ff;filter:drop-shadow(0 0 8px #00e5ff);animation:nodePulse 2.2s ease-in-out infinite}
    .cyber-node.green{fill:#00ff9d;filter:drop-shadow(0 0 8px #00ff9d)}
    .cyber-code{font-family:monospace;font-size:13px;fill:rgba(0,229,255,.4);animation:codeDrift 11s ease-in-out infinite}
    .cyber-code.green{fill:rgba(0,255,157,.34);animation-duration:14s}
    .cyber-terminal{fill:rgba(5,14,28,.42);stroke:rgba(0,229,255,.24);stroke-width:1}
    .cyber-terminal-line{stroke:rgba(0,229,255,.42);stroke-width:2;stroke-linecap:round;stroke-dasharray:70 190;animation:terminalScan 5s linear infinite}
    .cyber-lock{fill:rgba(0,229,255,.04);stroke:rgba(0,229,255,.4);stroke-width:1.4;animation:lockGlow 3s ease-in-out infinite}
    @keyframes cyberFlow{to{stroke-dashoffset:-210}}
    @keyframes nodePulse{0%,100%{opacity:.35;transform:scale(.8)}50%{opacity:1;transform:scale(1.25)}}
    @keyframes codeDrift{0%,100%{transform:translate(0,0);opacity:.18}50%{transform:translate(0,-18px);opacity:.55}}
    @keyframes terminalScan{to{stroke-dashoffset:-260}}
    @keyframes lockGlow{0%,100%{filter:drop-shadow(0 0 2px rgba(0,229,255,.15))}50%{filter:drop-shadow(0 0 14px rgba(0,229,255,.42))}}
    .project-card{transform-style:preserve-3d;will-change:transform;transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s ease,border-color .35s ease!important;overflow:hidden;position:relative}
    .project-card:after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 25%,rgba(0,229,255,.11),transparent 70%);transform:translateX(-120%);transition:transform .8s ease;pointer-events:none}
    .project-card:hover:after{transform:translateX(120%)}
    .project-image{overflow:hidden}.project-image img{transition:transform .8s cubic-bezier(.2,.8,.2,1),filter .5s ease!important}.project-card:hover .project-image img{transform:scale(1.07);filter:saturate(1.12) contrast(1.04)}
    .project-content{transform:translateZ(18px)}
    .project-tech{display:flex;flex-wrap:wrap;gap:.45rem}.project-tech span{border:1px solid rgba(0,229,255,.16);background:rgba(255,255,255,.035);padding:.3rem .58rem;border-radius:999px;font-size:.72rem;transition:all .3s ease}.project-tech span:hover{border-color:rgba(0,229,255,.55);transform:translateY(-2px)}
    .project-links{display:flex;gap:.6rem;flex-wrap:wrap}.project-link{transition:transform .25s ease,box-shadow .25s ease!important}.project-link:hover{transform:translateY(-3px)}
    .project-meta{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:.75rem;font-size:.72rem;letter-spacing:.11em;text-transform:uppercase;color:rgba(255,255,255,.58)}.project-status{display:inline-flex;align-items:center;gap:.4rem}.project-status:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--dx-green);box-shadow:0 0 12px var(--dx-green)}
    .project-filter-bar{display:flex;flex-wrap:wrap;gap:.55rem;justify-content:center;margin:0 auto 1.8rem}.project-filter{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.035);color:inherit;padding:.55rem .9rem;border-radius:999px;cursor:pointer;transition:all .25s ease}.project-filter.active,.project-filter:hover{border-color:rgba(0,229,255,.5);background:rgba(0,229,255,.08);transform:translateY(-2px)}
    .stack-universe{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;margin-top:2rem}.stack-orbit-card{padding:1.25rem;border:1px solid rgba(0,229,255,.12);border-radius:22px;background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018));backdrop-filter:blur(14px);box-shadow:0 18px 55px rgba(0,0,0,.18);transition:transform .35s ease,border-color .35s ease,box-shadow .35s ease}.stack-orbit-card:hover{transform:translateY(-8px);border-color:rgba(0,229,255,.4);box-shadow:0 22px 65px rgba(0,229,255,.08)}.stack-orbit-card h3{display:flex;align-items:center;gap:.6rem;margin:0 0 1rem}.stack-orbit-card h3 i{color:var(--dx-cyan)}.stack-pills{display:flex;flex-wrap:wrap;gap:.55rem}.stack-pill{display:inline-flex;align-items:center;gap:.45rem;padding:.48rem .65rem;border-radius:12px;background:rgba(0,0,0,.22);font-size:.76rem;color:rgba(255,255,255,.85);border:1px solid rgba(255,255,255,.06);transition:transform .25s ease,border-color .25s ease}.stack-pill:hover{transform:translateY(-3px);border-color:rgba(0,229,255,.4)}.stack-pill i{color:var(--dx-cyan)}
    .experience-upgrade-card{margin-top:1.5rem;padding:1.4rem 1.6rem;border:1px solid rgba(0,229,255,.16);border-radius:24px;background:linear-gradient(135deg,rgba(0,229,255,.055),rgba(139,92,246,.045),rgba(255,255,255,.02));backdrop-filter:blur(16px);display:flex;gap:1rem;align-items:flex-start;box-shadow:0 20px 70px rgba(0,0,0,.2);transition:transform .35s ease,border-color .35s ease}.experience-upgrade-card:hover{transform:translateY(-6px);border-color:rgba(0,229,255,.4)}.experience-upgrade-icon{width:48px;height:48px;min-width:48px;display:grid;place-items:center;border-radius:16px;background:rgba(0,229,255,.09);color:var(--dx-cyan);font-size:1.1rem}.experience-upgrade-card h3{margin:0 0 .35rem}.experience-upgrade-card p{margin:0;color:rgba(255,255,255,.68);line-height:1.7}
    .hero-image-container{animation:heroFloat 6s ease-in-out infinite}@keyframes heroFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    .section-tag:after{content:"";display:inline-block;width:24px;height:1px;background:var(--dx-cyan);vertical-align:middle;margin-left:10px;box-shadow:0 0 10px var(--dx-cyan)}
    .scroll-progress-glow{box-shadow:0 0 14px var(--dx-cyan),0 0 28px rgba(0,229,255,.35)}
    @media(max-width:1000px){.stack-universe{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:600px){.stack-universe{grid-template-columns:1fr}.project-meta{align-items:flex-start;flex-direction:column;gap:.35rem}.experience-upgrade-card{padding:1.1rem;flex-direction:column}}
    @media(prefers-reduced-motion:reduce){#cyberBackground{display:none}*,*:before,*:after{animation-duration:.001ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.001ms!important}}
  `;
  document.head.appendChild(style);

  function injectCyberBackground(){
    if(document.getElementById('cyberBackground'))return;
    const bg=document.createElement('div');bg.id='cyberBackground';
    bg.innerHTML=`
      <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="cyberGlow"><stop offset="0" stop-color="#00e5ff" stop-opacity=".18"/><stop offset="1" stop-color="#00e5ff" stop-opacity="0"/></radialGradient>
        </defs>
        <g class="cyber-grid">
          <path d="M0 120H1600M0 240H1600M0 360H1600M0 480H1600M0 600H1600M0 720H1600M0 840H1600"/>
          <path d="M160 0V1000M320 0V1000M480 0V1000M640 0V1000M800 0V1000M960 0V1000M1120 0V1000M1280 0V1000M1440 0V1000"/>
        </g>
        <circle cx="1210" cy="270" r="260" fill="url(#cyberGlow)"/><circle cx="390" cy="760" r="300" fill="url(#cyberGlow)"/>
        <path class="cyber-path" d="M-80 740 C180 620 260 820 480 680 S820 520 1010 650 S1320 860 1690 640"/>
        <path class="cyber-path fast" d="M-100 310 C180 430 300 210 520 340 S900 490 1100 300 S1390 140 1710 280"/>
        <path class="cyber-path" d="M180 0 C330 170 300 330 460 420 S700 540 760 740 S1030 920 1260 760"/>
        <circle class="cyber-node" cx="480" cy="680" r="4"/><circle class="cyber-node green" cx="1010" cy="650" r="4"/><circle class="cyber-node" cx="520" cy="340" r="4"/><circle class="cyber-node green" cx="1100" cy="300" r="4"/>
        <g transform="translate(1120 170)">
          <rect class="cyber-terminal" width="350" height="205" rx="18"/>
          <circle cx="25" cy="23" r="5" fill="#ff5f56"/><circle cx="43" cy="23" r="5" fill="#ffbd2e"/><circle cx="61" cy="23" r="5" fill="#27c93f"/>
          <text x="22" y="55" class="cyber-code">$ ./secure-build --production</text>
          <line x1="22" y1="82" x2="300" y2="82" class="cyber-terminal-line"/><line x1="22" y1="108" x2="275" y2="108" class="cyber-terminal-line"/><line x1="22" y1="134" x2="320" y2="134" class="cyber-terminal-line"/>
          <text x="22" y="173" class="cyber-code green">✓ system secured</text>
        </g>
        <g transform="translate(160 140)">
          <path class="cyber-lock" d="M65 78V55a38 38 0 0 1 76 0v23"/><rect class="cyber-lock" x="48" y="78" width="110" height="88" rx="15"/><circle cx="103" cy="120" r="11" fill="none" stroke="#00ff9d" stroke-width="2"/><path d="M103 131v17" stroke="#00ff9d" stroke-width="2"/>
          <text x="38" y="195" class="cyber-code green">&lt; ethical_security /&gt;</text>
        </g>
        <g transform="translate(930 720)">
          <rect class="cyber-terminal" width="440" height="155" rx="18"/>
          <text x="24" y="35" class="cyber-code">&lt;developer&gt;</text><text x="24" y="66" class="cyber-code green">const build = () =&gt; {'{'} quality: true {'}'};</text><text x="24" y="97" class="cyber-code">git commit -m "ship something useful"</text><text x="24" y="128" class="cyber-code green">&lt;/developer&gt;</text>
        </g>
        <text x="700" y="160" class="cyber-code">&lt;/&gt;</text><text x="760" y="880" class="cyber-code green">{'{'} AI · CODE · NETWORK · SECURITY {'}'}</text><text x="80" y="930" class="cyber-code">01 10 01 01 11 00 10 01 // BUILD · TEST · SECURE</text>
      </svg><div class="cyber-vignette"></div>`;
    document.body.prepend(bg);
  }

  function projectCard(p,index){
    const live=p.live?`<a href="${p.live}" target="_blank" rel="noopener noreferrer" class="project-link demo-link"><i class="fas fa-arrow-up-right-from-square"></i> ${p.liveLabel||'Live'}</a>`:'';
    return `<article class="project-card" data-project-type="${p.type.toLowerCase()}" data-aos="flip-up" data-aos-delay="${Math.min(index*60,360)}"><div class="project-card-inner"><div class="project-image"><img src="${p.image}" alt="${p.title}" loading="lazy"/><div class="project-overlay"><span class="project-type">${p.type.split(' · ')[0]}</span></div></div><div class="project-content"><div class="project-meta"><span class="project-status">Selected build</span><span>${String(index+1).padStart(2,'0')}</span></div><h3 class="project-title">${p.title}</h3><p class="project-description">${p.description}</p><div class="project-tech">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><div class="project-links"><a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="project-link github-link"><i class="fab fa-github"></i> Repository</a>${live}</div></div></div></article>`;
  }

  function renderProjects(){
    const grid=document.querySelector('#projects .projects-grid');if(!grid)return;
    const old=grid.parentNode.querySelector('.project-filter-bar');if(old)old.remove();
    const filters=['All','Full Stack','Client','Business','Enterprise','Web'];
    const wrap=document.createElement('div');wrap.className='project-filter-bar';wrap.innerHTML=filters.map((f,i)=>`<button type="button" class="project-filter${i===0?' active':''}" data-filter="${f.toLowerCase()}">${f}</button>`).join('');
    grid.parentNode.insertBefore(wrap,grid);grid.innerHTML=PROJECTS.map(projectCard).join('');
    wrap.addEventListener('click',e=>{const btn=e.target.closest('.project-filter');if(!btn)return;wrap.querySelectorAll('.project-filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;grid.querySelectorAll('.project-card').forEach(card=>{card.style.display=(filter==='all'||card.dataset.projectType.includes(filter))?'':'none'});refreshAOS();bindInteractions()});
  }

  function renderStack(){
    const section=document.querySelector('#skills .container');if(!section)return;
    const old=section.querySelector('.stack-universe');if(old)old.remove();const oldGrid=section.querySelector('.skills-grid');if(oldGrid)oldGrid.remove();
    const universe=document.createElement('div');universe.className='stack-universe';
    universe.innerHTML=STACK.map(group=>`<div class="stack-orbit-card" data-aos="fade-up"><h3><i class="fas ${group.icon}"></i>${group.title}</h3><div class="stack-pills">${group.items.map(([name,icon])=>`<span class="stack-pill"><i class="${icon}"></i>${name}</span>`).join('')}</div></div>`).join('');
    section.appendChild(universe);
    const header=section.querySelector('.section-header');if(header){const title=header.querySelector('.section-title');if(title)title.innerHTML='Technology <span class="highlight">Universe</span>';const tag=header.querySelector('.section-tag');if(tag)tag.textContent='Full Tech Stack'}
  }

  function addFreelanceExperience(){
    const section=document.querySelector('#experience')||[...document.querySelectorAll('section')].find(s=>(s.innerText||'').toLowerCase().includes('work experience'));if(!section||section.querySelector('.experience-upgrade-card'))return;
    const container=section.querySelector('.container')||section;const card=document.createElement('article');card.className='experience-upgrade-card';card.setAttribute('data-aos','fade-up');
    card.innerHTML='<div class="experience-upgrade-icon"><i class="fas fa-laptop-code"></i></div><div><h3>Freelance Full Stack Developer</h3><p>Independent developer delivering websites, business systems and digital solutions for clients — including frontend and backend development, database work, networking, computer troubleshooting, device support and professional visual design.</p></div>';
    container.appendChild(card);
  }

  function refreshAOS(){if(window.AOS)window.AOS.refreshHard()}
  function initAOS(){if(!window.AOS)return;AOS.init({duration:850,easing:'ease-out-cubic',once:true,offset:60,mirror:false});refreshAOS()}
  function initTheme(){const toggle=document.getElementById('themeToggle');if(!toggle)return;const saved=localStorage.getItem('dagg12-theme');if(saved==='light')document.body.classList.add('light-mode');const icon=()=>toggle.innerHTML=`<i class="fas fa-${document.body.classList.contains('light-mode')?'sun':'moon'}"></i>`;icon();toggle.addEventListener('click',()=>{const light=document.body.classList.toggle('light-mode');localStorage.setItem('dagg12-theme',light?'light':'dark');icon()})}
  function initNav(){const nav=document.getElementById('navbar'),hamburger=document.getElementById('hamburger'),links=document.getElementById('navLinks');if(hamburger&&links){hamburger.addEventListener('click',()=>{const open=links.classList.toggle('active');hamburger.setAttribute('aria-expanded',String(open))});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('active')))}const onScroll=()=>{if(nav)nav.classList.toggle('scrolled',window.scrollY>30);const p=document.getElementById('scrollProgress');if(p){const max=document.documentElement.scrollHeight-window.innerHeight;p.style.width=`${max>0?(window.scrollY/max)*100:0}%`;p.classList.add('scroll-progress-glow')}};window.addEventListener('scroll',onScroll,{passive:true});onScroll()}
  function initTyped(){const el=document.getElementById('typed-text');if(!el)return;const words=['Software Developer','Full Stack Builder','Freelance Developer','Network Engineer','Ethical Hacking Learner','AI Explorer'];let i=0,j=0,deleting=false;const tick=()=>{const word=words[i];el.textContent=deleting?word.slice(0,--j):word.slice(0,++j);if(!deleting&&j===word.length){deleting=true;setTimeout(tick,1300);return}if(deleting&&j===0){deleting=false;i=(i+1)%words.length}setTimeout(tick,deleting?45:80)};tick()}
  function initStats(){const stats=document.querySelectorAll('[data-count]');if(!stats.length||!('IntersectionObserver'in window))return;const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.count||0);let current=0;const step=Math.max(1,Math.ceil(target/30));const run=()=>{current=Math.min(target,current+step);el.textContent=current+(target>=10?'+':'');if(current<target)requestAnimationFrame(run)};run();observer.unobserve(el)}),{threshold:.5});stats.forEach(s=>observer.observe(s))}
  function initCursor(){if(window.matchMedia('(pointer: coarse)').matches)return;const cursor=document.getElementById('customCursor'),dot=document.getElementById('customCursorDot');if(!cursor||!dot)return;window.addEventListener('mousemove',e=>{cursor.style.transform=`translate3d(${e.clientX-16}px,${e.clientY-16}px,0)`;dot.style.transform=`translate3d(${e.clientX-3}px,${e.clientY-3}px,0)`},{passive:true});document.querySelectorAll('a,button,.project-card,.stack-orbit-card,.experience-upgrade-card').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('cursor-hover'));el.addEventListener('mouseleave',()=>cursor.classList.remove('cursor-hover'))})}
  function bindInteractions(){if(window.matchMedia('(pointer: coarse)').matches)return;document.querySelectorAll('.project-card,.stack-orbit-card,.experience-upgrade-card').forEach(card=>{if(card.dataset.bound==='1')return;card.dataset.bound='1';card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1000px) rotateX(${y*-4}deg) rotateY(${x*5}deg) translateY(-5px)`});card.addEventListener('mouseleave',()=>{card.style.transform=''})})}
  function initParallax(){const bg=document.getElementById('cyberBackground');if(!bg)return;window.addEventListener('mousemove',e=>{const x=(e.clientX/window.innerWidth-.5)*10,y=(e.clientY/window.innerHeight-.5)*7;bg.style.transform=`translate3d(${x}px,${y}px,0)`},{passive:true})}
  function initBackTop(){const btn=document.getElementById('backToTop');if(!btn)return;window.addEventListener('scroll',()=>btn.classList.toggle('show',window.scrollY>500),{passive:true});btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}))}
  function initPreloader(){const p=document.getElementById('preloader');if(p)window.addEventListener('load',()=>setTimeout(()=>p.classList.add('hidden'),450))}
  function init(){injectCyberBackground();renderProjects();renderStack();addFreelanceExperience();initAOS();initTheme();initNav();initTyped();initStats();initCursor();bindInteractions();initParallax();initBackTop();initPreloader();setTimeout(refreshAOS,300)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();