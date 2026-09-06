/* Dagg12 — dramatic live cyber/network background */
(()=>{
'use strict';
const boot=()=>{
 if(document.getElementById('d12-dramatic-style'))return;
 const s=document.createElement('style');s.id='d12-dramatic-style';s.textContent=`
/* FORCE THE LIVE BACKGROUND ABOVE THE ORIGINAL BODY COLOR */
html,body{background:#020712!important}
body{position:relative;isolation:isolate;overflow-x:hidden}
body>*:not(#d12-live-network){position:relative;z-index:2}
#d12-live-network{position:fixed!important;inset:0!important;z-index:0!important;pointer-events:none!important;overflow:hidden!important;display:block!important;background:radial-gradient(circle at 50% 45%,rgba(0,212,255,.08),transparent 32%),linear-gradient(135deg,#01040b,#031322 45%,#050314)!important}
#d12-live-network:before{content:"";position:absolute;inset:-30%;background:conic-gradient(from 0deg,transparent 0deg,rgba(0,238,255,.08) 35deg,transparent 75deg,rgba(126,78,255,.08) 140deg,transparent 190deg,rgba(0,255,194,.06) 260deg,transparent 320deg);filter:blur(25px);animation:d12Aurora 18s linear infinite}
#d12-live-network:after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(97,243,255,.025) 0 1px,transparent 1px 5px);opacity:.45;animation:d12Scanlines 5s linear infinite}
#d12-live-network .beam{position:absolute;width:2px;height:65vh;background:linear-gradient(transparent,#61f3ff,rgba(126,78,255,.8),transparent);filter:drop-shadow(0 0 18px #61f3ff);opacity:.75;animation:d12Beam 4.5s linear infinite}
#d12-live-network .beam:nth-child(1){left:7%;animation-delay:-.7s;transform:rotate(16deg)}#d12-live-network .beam:nth-child(2){left:25%;animation-delay:-2.8s;transform:rotate(-10deg)}#d12-live-network .beam:nth-child(3){left:47%;animation-delay:-1.1s;transform:rotate(8deg)}#d12-live-network .beam:nth-child(4){left:70%;animation-delay:-3.4s;transform:rotate(-13deg)}#d12-live-network .beam:nth-child(5){left:91%;animation-delay:-1.8s;transform:rotate(11deg)}
#d12-live-network .pulse{position:absolute;width:8px;height:8px;border-radius:50%;background:#61f3ff;box-shadow:0 0 12px #61f3ff,0 0 40px #61f3ff,0 0 80px rgba(97,243,255,.6);animation:d12Pulse 2.8s ease-in-out infinite}
#d12-live-network .pulse:nth-child(6){left:12%;top:28%;animation-delay:-.8s}.pulse:nth-child(7){left:39%;top:72%;animation-delay:-1.9s}.pulse:nth-child(8){left:76%;top:38%;animation-delay:-.3s}.pulse:nth-child(9){left:62%;top:18%;animation-delay:-2.2s}
#d12-live-network .scan{position:absolute;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,#61f3ff,#8d68ff,#61f3ff,transparent);box-shadow:0 0 28px #61f3ff;opacity:.3;animation:d12Scan 5s linear infinite}
#d12-live-network .ring{position:absolute;width:min(70vw,900px);height:min(70vw,900px);left:50%;top:50%;margin:calc(min(70vw,900px)/-2) 0 0 calc(min(70vw,900px)/-2);border:1px solid rgba(97,243,255,.2);border-radius:50%;box-shadow:0 0 120px rgba(97,243,255,.08),inset 0 0 100px rgba(126,78,255,.05);animation:d12Ring 22s linear infinite}.ring:before,.ring:after{content:"";position:absolute;border-radius:50%;inset:10%;border:1px dashed rgba(126,78,255,.28);animation:d12Ring 13s linear infinite reverse}.ring:after{inset:25%;border-style:solid;border-color:rgba(97,243,255,.13)}
/* CONTACT: ICON ONLY — NO TEXT INSIDE ICON */
#contact .contact-item>i,#contact .contact-item>.contact-icon{font-size:1.9rem!important;line-height:1!important;text-indent:0!important;overflow:visible!important;display:grid!important;place-items:center!important;position:relative!important;width:70px!important;height:70px!important;flex:0 0 70px!important;color:#61f3ff!important}
#contact .contact-item>i:before,#contact .contact-item>.contact-icon:before{font-size:1.9rem!important;display:block!important;text-indent:0!important}
#contact .contact-item a{font-size:.95rem!important}
@keyframes d12Aurora{to{transform:rotate(360deg) scale(1.1)}}@keyframes d12Scanlines{to{background-position:0 20px}}@keyframes d12Beam{0%{top:-75%;opacity:0}12%{opacity:.8}70%{opacity:.35}100%{top:125%;opacity:0}}@keyframes d12Pulse{0%,100%{transform:scale(.45);opacity:.2}50%{transform:scale(2.1);opacity:1}}@keyframes d12Scan{0%{top:-3%}100%{top:103%}}@keyframes d12Ring{to{transform:rotate(360deg)}}
@media(max-width:700px){#d12-live-network .ring{width:90vw;height:90vw;margin:-45vw 0 0 -45vw}#contact .contact-item>i{width:58px!important;height:58px!important;flex-basis:58px!important;font-size:1.5rem!important}}
`;
document.head.appendChild(s);
let n=document.getElementById('d12-live-network');
if(!n){n=document.createElement('div');n.id='d12-live-network';n.innerHTML='<i class="beam"></i><i class="beam"></i><i class="beam"></i><i class="beam"></i><i class="beam"></i><i class="pulse"></i><i class="pulse"></i><i class="pulse"></i><i class="pulse"></i><i class="scan"></i><i class="ring"></i>';document.body.prepend(n)}
const icons=['fas fa-envelope','fas fa-phone-alt','fab fa-linkedin-in','fab fa-github'];
document.querySelectorAll('#contact .contact-item').forEach((item,i)=>{const icon=item.querySelector(':scope>i, :scope>.contact-icon');if(icon){icon.className=icons[i]||'fas fa-address-card';icon.textContent='';icon.setAttribute('aria-hidden','true')}});
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
