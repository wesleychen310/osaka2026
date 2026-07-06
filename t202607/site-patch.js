document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('a[href="theme-old-coffee-tea.html"],a[href="#"]').forEach(a=>{
  if((a.textContent||'').includes('老咖啡老茶舖'))a.href='theme-old-cafe-tea.html';
 });
});