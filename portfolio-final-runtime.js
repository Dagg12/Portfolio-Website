/* Final runtime: loads the enhancement and cinematic interaction layers. */
(()=>{
'use strict';
if(window.__D12_FINAL_RUNTIME__)return;
window.__D12_FINAL_RUNTIME__=true;
const load=(id,src,next)=>{if(document.getElementById(id)){next&&next();return}const s=document.createElement('script');s.id=id;s.src=src;s.onload=next;s.onerror=next;document.body.appendChild(s)};
const finalize=()=>{setTimeout(()=>{
 document.querySelectorAll('#contact .contact-item').forEach((item,i)=>{const link=item.querySelector('a');if(!link)return;const icons=['fas fa-envelope','fas fa-phone-alt','fab fa-linkedin-in','fab fa-github'];item.querySelectorAll('span,p,strong,label').forEach(x=>x.classList.add('d12-contact-hidden'));item.querySelectorAll('a').forEach(a=>{if(a!==link&&!a.classList.contains('d12-contact-only'))a.classList.add('d12-contact-hidden')});link.classList.add('d12-contact-only');const icon=link.querySelector('i')||document.createElement('i');icon.className=icons[i]||icons[0];icon.textContent='';if(!icon.parentNode)link.appendChild(icon)});
 document.querySelectorAll('#certificates .certificate-card,#certificates .certificate-item,#certificates .cert-card').forEach(card=>{if(!/Cisco Networking Certificate/i.test(card.textContent))card.remove()});
 const stats=document.querySelectorAll('.stat-number');if(stats[0]){stats[0].dataset.count='10';stats[0].textContent='10+'}
},250)};
const boot=()=>load('d12-enhancement-loader','portfolio-enhancements.js?v=20260906-cinematic',()=>load('d12-cinematic-loader','cinematic-overrides.js?v=20260906-cinematic',finalize));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();