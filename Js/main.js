let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-left, .nav-right');
const navLogo = document.querySelector('.nav-logo');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    navLinks.forEach(link => {
      link.style.opacity = '0';
      link.style.pointerEvents = 'none';
    });
    navLogo.style.height = '60px';
    navbar.style.padding = '5px 20px';
  } else {
    navLinks.forEach(link => {
      link.style.opacity = '1';
      link.style.pointerEvents = 'auto';
    });
    navLogo.style.height = '120px';
    navbar.style.padding = '10px 40px';
  }
  
  lastScrollTop = scrollTop;
});
