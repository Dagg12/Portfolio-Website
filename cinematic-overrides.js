/* Dagg12 — cinematic interaction polish */
(()=>{
'use strict';
const start=()=>{
 if(document.getElementById('d12-cinematic-overrides'))return;
 const s=document.createElement('style');s.id='d12-cinematic-overrides';s.textContent=`
/* compact technology console */
#d12-skills-console{max-width:1040px!important;margin:36px auto!important;border-radius:28px!important}
#d12-skills-console .d12-keyboard{padding:14px!important;transform:perspective(1300px) rotateX(4deg)!important}
#d12-skills-console .d12-row{grid-template-columns:repeat(10,minmax(0,1fr))!important;gap:6px!important;margin-bottom:6px!important}
#d12-skills-console .d12-key{min-height:55px!important;padding:7px 4px!important;border-radius:10px!important}
#d12-skills-console .d12-key i{font-size:1.05rem!important}
#d12-skills-console .d12-key b{font-size:7px!important}
#d12-skills-console .d12-key small{font-size:6px!important}
#d12-skills-console .d12-inspector{min-height:55px!important}
/* cinematic section surfaces */
.section{isolation:isolate}.section-header,.about-grid,.skills-grid,.projects-grid,.timeline,.education-grid,.certificates-grid,.contact-section .container{position:relative;z-index:3}
.section-header .section-title{transition:transform .5s,text-shadow .5s}.section-header:hover .section-title{transform:translateX(7px);text-shadow:0 0 35px rgba(97,243,255,.18)}
/* floating project motion */
.d12-project-card{will-change:transform}.d12-project-card:nth-child(3n){animation:d12FloatA 6s ease-in-out infinite}.d12-project-card:nth-child(3n+1){animation:d12FloatB 7s ease-in-out infinite}.d12-project-card:nth-child(3n+2){animation:d12FloatC 8s ease-in-out infinite}@keyframes d12FloatA{50%{translate:0 -5px}}@keyframes d12FloatB{50%{translate:0 5px}}@keyframes d12FloatC{50%{translate:0 -3px}}
/* make about cockpit feel alive */
.d12-about-panel{cursor:default}.d12-about-chip{cursor:pointer}.d12-about-chip:hover i{animation:d12IconBounce .55s ease}@keyframes d12IconBounce{50%{transform:scale(1.35) rotate(-8deg)}}
/* network particle layer */
#d12-particle-network{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:.7;mix-blend-mode:screen}
/* content remains above the particle layer */
body>main,body>nav,body>footer,body>#preloader,body>#backToTop,body>#scrollProgress,body>#customCursor,body>#customCursorDot{position:relative;z-index:4}
@media(max-width:900px){#d12-skills-console .d12-row{grid-template-columns:repeat(5,minmax(0,1fr))!important}#d12-skills-console .d12-key{min-height:58px!important}}
@media(prefers-reduced-motion:reduce){.d12-project-card,.d12-about-panel{animation:none!important}}
`;
document.head.appendChild(s);
 const canvas=document.createElement('canvas');canvas.id='d12-particle-network';document.body.prepend(canvas);const ctx=canvas.getContext('2d');let w=0,h=0,dpr=1,nodes=[],mx=-9999,my=-9999,raf;
 const resize=()=>{dpr=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);const count=Math.min(55,Math.max(26,Math.floor(w/28)));nodes=Array.from({length:count},(_,i)=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,r:Math.random()*1.5+0.5,p:Math.random()*Math.PI*2}))};
 const frame=()=>{ctx.clearRect(0,0,w,h);for(const a of nodes){a.x+=a.vx;a.y+=a.vy;a.p+=.012;if(a.x<-20)a.x=w+20;if(a.x>w+20)a.x=-20;if(a.y<-20)a.y=h+20;if(a.y>h+20)a.y=-20;const glow=.45+.25*Math.sin(a.p);ctx.beginPath();ctx.arc(a.x,a.y,a.r+glow,0,Math.PI*2);ctx.fillStyle='rgba(97,243,255,.55)';ctx.fill()}for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){const a=nodes[i],b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,dist=Math.hypot(dx,dy);if(dist<145){const alpha=(1-dist/145)*.18;ctx.strokeStyle=`rgba(97,243,255,${alpha})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}if(mx>-1000){for(const a of nodes){const dist=Math.hypot(a.x-mx,a.y-my);if(dist<180){ctx.strokeStyle=`rgba(139,124,255,${(1-dist/180)*.24})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(mx,my);ctx.stroke()}}}raf=requestAnimationFrame(frame)};
 addEventListener('resize',resize,{passive:true});addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY},{passive:true});addEventListener('pointerleave',()=>{mx=my=-9999});resize();frame();
 // magnetic buttons
 document.querySelectorAll('.btn,.d12-project-link,.d12-contact-only').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();