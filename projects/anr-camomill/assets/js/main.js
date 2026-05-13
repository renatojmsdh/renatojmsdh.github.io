document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('.card,.timeline-item,.logo-card').forEach((el,i)=>{
   el.style.opacity='0';
   el.style.transform='translateY(18px)';
   setTimeout(()=>{el.style.transition='all .6s ease';el.style.opacity='1';el.style.transform='translateY(0)';},120*i);
 });
});
