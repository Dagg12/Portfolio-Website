/* Dagg12 — dramatic cyber/network visual layer */
(()=>{
'use strict';
const boot=()=>{
 if(document.getElementById('d12-dramatic-style'))return;
 const s=document.createElement('style');s.id='d12-dramatic-style';s.textContent=`
 body:before{content:"";position:fixed;inset:0;z-index:-20;pointer-events:none;background:radial-gradient(circle at 15% 20%,rgba(0,210,255,.14),transparent 26%),radial-gradient(circle at 82% 18%,rgba(105,74,255,.16),transparent 25%),radial-gradient(circle at 52% 80%,rgba(0,255,196,.09),transparent 30%),linear-gradient(135deg,#01050d 0%,#020b17 48%,#030613 100%);animation:d12Aurora 14s ease-in-out infinite alternate}
 body:after{content:"";position:fixed;inset:0;z-index:-18;pointer-events:none;opacity:.34;background-image:linear-gradient(rgba(97,243,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(97,243,255,.045) 1px,transparent 1px);background-size:55px 55px;mask-image:linear-gradient(to bottom,transparent,#000 15%,#000 85%,transparent);animation:d12Grid 16s linear infinite}
 #d12-live-network{position:fixed;inset:0;z-index:-15;pointer-events:none;overflow:hidden;mix-blend-mode:screen}
 #d12-live-network .beam{position:absolute;width:1px;height:48vh;background:linear-gradient(transparent,rgba(97,243,255,.0),#61f3ff,rgba(125,95,255,.45),transparent);filter:drop-shadow(0 0 12px #61f3ff);opacity:.5;animation:d12Beam 5s linear infinite}
 #d12-live-network .beam:nth-child(1){left:8%;animation-delay:-1s;transform:rotate(13deg)}#d12-live-network .beam:nth-child(2){left:26%;animation-delay:-3.4s;transform:rotate(-8deg)}#d12-live-network .beam:nth-child(3){left:48%;animation-delay:-.8s;transform:rotate(7deg)}#d12-live-network .beam:nth-child(4){left:72%;animation-delay:-2.2s;transform:rotate(-11deg)}#d12-live-network .beam:nth-child(5){left:91%;animation-delay:-4s;transform:rotate(9deg)}
 #d12-live-network .pulse{position:absolute;width:7px;height:7px;border-radius:50%;background:#61f3ff;box-shadow:0 0 12px #61f3ff,0 0 35px #61f3ff;animation:d12Pulse 4s ease-in-out infinite}.pulse:nth-child(6){left:14%;top:32%;animation-delay:-1s}.pulse:nth-child(7){left:42%;top:67%;animation-delay:-2.4s}.pulse:nth-child(8){left:79%;top:39%;animation-delay:-.5s}.pulse:nth-child(9){left:61%;top:17%;animation-delay:-3s}
 #d12-live-network .scan{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#61f3ff,rgba(125,95,255,.8),transparent);box-shadow:0 0 18px #61f3ff;opacity:.18;animation:d12Scan 7s linear infinite}
 #d12-live-network .ring{position:absolute;width:38vw;height:38vw;max-width:650px;max-height:650px;border:1px solid rgba(97,243,255,.12);border-radius:50%;left:50%;top:50%;transform:translate(-50%,-50%);box-shadow:0 0 90px rgba(97,243,255,.04),inset 0 0 90px rgba(125,95,255,.035);animation:d12Spin 24s linear infinite}.ring:before,.ring:after{content:"";position:absolute;border-radius:50%;inset:12%;border:1px dashed rgba(125,95,255,.18);animation:d12Spin 13s linear infinite reverse}.ring:after{inset:27%;border-style:solid;border-color:rgba(97,243,255,.08)}
 #contact .contact-item>i,#contact .contact-item>.contact-icon{font-size:0!important;line-height:0!important;text-indent:-9999px!important;overflow:hidden!important;position:relative!important}
 #contact .contact-item>i:before,#contact .contact-item>.contact-icon:before{font-size:1.9rem!important;line-height:1!important;text-indent:0!important;display:block!important}
 @keyframes d12Aurora{to{filter:hue-rotate(22deg);transform:scale(1.025)}}@keyframes d12Grid{to{background-position:55px 55px}}@keyframes d12Beam{0%{top:-55%;opacity:0}12%{opacity:.55}75%{opacity:.28}100%{top:115%;opacity:0}}@keyframes d12Pulse{0%,100%{transform:scale(.65);opacity:.25}50%{transform:scale(1.7);opacity:1}}@keyframes d12Scan{0%{top:-3%}100%{top:103%}}@keyframes d12Spin{to{transform:translate(-50%,-50%) rotate(360deg)}}
 @media(max-width:700px){#d12-live-network .ring{width:80vw;height:80vw}body:after{background-size:38px 38px}}
 `;document.head.appendChild(s);
 const n=document.createElement('div');n.id='d12-live-network';n.innerHTML='<i class="beam"></i><i class="beam"></i><i class="beam"></i><i class="beam"></i><i class="beam"></i><i class="pulse"></i><i class="pulse"></i><i class="pulse"></i><i class="pulse"></i><i class="scan"></i><i class="ring"></i>';document.body.prepend(n);
 const icons=['fas fa-envelope','fas fa-phone-alt','fab fa-linkedin-in','fab fa-github'];document.querySelectorAll('#contact .contact-item').forEach((item,i)=>{const icon=item.querySelector(':scope>i, :scope>.contact-icon');if(icon){icon.className=icons[i]||'fas fa-address-card';icon.setAttribute('aria-hidden','true');}});
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
