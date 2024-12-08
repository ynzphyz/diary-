// Navbar Fixed
 window.onscroll= function( ){
  const header= document.querySelector('header');
  const fixedNav= header.offsetTop;

  if(window.pageYOffset > fixedNav ){
    header.classList.add('navbar-fixed');
 } else{
  header.classList.remove('navbar-fixed');
 }
 };

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu=document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
const links = document.querySelectorAll('[data-scroll]');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
  });
});

window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const container = document.querySelector('.container');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    container.classList.add('transform', '-translate-y-10');
  } else {
    header.classList.remove('navbar-fixed');
    container.classList.remove('transform', '-translate-y-10');
  }
};
