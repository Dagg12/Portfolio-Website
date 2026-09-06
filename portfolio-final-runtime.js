/* Final runtime: loads the enhancement layer and enforces icon-only contact + working message composer. */
(()=>{
'use strict';
if(!window.__D12_FINAL_RUNTIME__){window.__D12_FINAL_RUNTIME__=true;
 const load=()=>{if(document.getElementById('d12-enhancement-loader'))return;const s=document.createElement('script');s.id='d12-enhancement-loader';s.src='portfolio-enhancements.js?v=20260906-final';s.onload=finalize;s.onerror=finalize;document.body.appendChild(s)};
 const finalize=()=>{setTimeout(()=>{
  document.querySelectorAll('#contact .contact-item').forEach((item,i)=>{
   const link=item.querySelector('a'); if(!link)return;
   const icons=['fas fa-envelope','fas fa-phone-alt','fab fa-linkedin-in','fab fa-github'];
   item.querySelectorAll('span,p,strong,label').forEach(x=>x.classList.add('d12-contact-hidden'));
   item.querySelectorAll('a').forEach(a=>{if(a!==link&&!a.classList.contains('d12-contact-only'))a.classList.add('d12-contact-hidden')});
   link.classList.add('d12-contact-only');
   const icon=link.querySelector('i')||document.createElement('i');icon.className=icons[i]||icons[0];if(!icon.parentNode)link.appendChild(icon);
  });
  const form=document.getElementById('d12-message-form');
  if(form&&!form.dataset.mailtoFixed){form.dataset.mailtoFixed='1';form.removeAttribute('action');form.addEventListener('submit',e=>{e.preventDefault();const q=id=>form.querySelector(id)?.value.trim()||'';const body=`Name: ${q('#d12-name')}\nEmail: ${q('#d12-email')}\n\n${q('#d12-message')}`;window.location.href=`mailto:thamagakevin12@gmail.com?subject=${encodeURIComponent(q('#d12-subject')||'Portfolio enquiry')}&body=${encodeURIComponent(body)}`})}
  document.querySelectorAll('#certificates .certificate-card,#certificates .certificate-item,#certificates .cert-card').forEach(card=>{if(!/Cisco Networking Certificate/i.test(card.textContent))card.remove()});
  const stats=document.querySelectorAll('.stat-number');stats.forEach((n,i)=>{if(i===0){n.dataset.count='10';n.textContent='10+'}});
  document.querySelectorAll('#projects .projects-grid,.d12-stack-groups').forEach(x=>x.style.maxWidth='100%');
 },300)};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',load);else load();
}
})();