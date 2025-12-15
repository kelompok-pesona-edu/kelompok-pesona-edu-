// Navbar toggle
const btnMenu=document.getElementById('btnMenu');
const menu=document.getElementById('menu');
btnMenu.addEventListener('click',()=>menu.classList.toggle('show'));

// Active link on scroll
const sections=document.querySelectorAll('section');
const links=document.querySelectorAll('.nav-link');
window.addEventListener('scroll',()=>{
let current='';
sections.forEach(sec=>{
if(window.scrollY>=sec.offsetTop-120){current=sec.id;}
});
links.forEach(link=>{
link.classList.remove('active');
if(link.getAttribute('href')=='#'+current){link.classList.add('active');}
});
});

// Animated numbers
document.querySelectorAll('.num').forEach(el=>{
const target=+el.dataset.target;let c=0;
const step=Math.ceil(target/40);
const i=setInterval(()=>{
c+=step;el.textContent=c>=target?target:c;
if(c>=target)clearInterval(i);
},40);
});
