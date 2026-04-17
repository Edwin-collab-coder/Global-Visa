let lastScroll = 0;
const topbar = document.querySelector('.containertopBar');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset;
  let windowWidth = window.innerWidth;

  if (currentScroll > 50) {
    topbar.classList.add('hide-topbar');
    navbar.style.top = "0";
    navbar.style.position = "fixed";
    document.body.classList.add('navbar-active');
  } else {
    navbar.style.position = "unset";
    topbar.classList.remove('hide-topbar');
    document.body.classList.remove('navbar-active');
    // Aplica solo si el ancho >= 1024px
    if (windowWidth >= 1024) {
      navbar.style.top = "39px";
    } else {
      navbar.style.top = ""; 
    }
  }
});