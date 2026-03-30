
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.dropdown-submenu > a').forEach((el) => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const submenu = this.nextElementSibling;
      if (!submenu || !submenu.classList.contains('dropdown-menu')) return;

      const isOpen = submenu.classList.contains('show');

      if (!isOpen) {
        submenu.classList.add('show');
        this.setAttribute('aria-expanded', 'true');
      } else {
        submenu.classList.remove('show');
        this.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.querySelectorAll('.navbar-nav .dropdownone > a').forEach((el) => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const menu = this.nextElementSibling;
      if (!menu || !menu.classList.contains('dropdown-menu')) return;

      const isOpen = menu.classList.contains('show');

      if (isOpen) {
        menu.classList.remove('show');
        this.setAttribute('aria-expanded', 'false');
      } else {
        menu.classList.add('show');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

    const carousel = document.querySelector('.carousel');

  if (!carousel) return;

  carousel.addEventListener('slide.bs.carousel', function () {
    const active = this.querySelector('.carousel-item.active');

    if (!active) return;

    active.querySelectorAll('.animate-left').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(-40px)';
    });
  });

  carousel.addEventListener('slid.bs.carousel', function () {
    const active = this.querySelector('.carousel-item.active');

    if (!active) return;

    active.querySelectorAll('.animate-left').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateX(0)';
    });
  });

  const collapseElement = document.getElementById('collapseExample');

collapseElement.addEventListener('shown.bs.collapse', function () {
  document.body.classList.add('no-scroll');
});

collapseElement.addEventListener('hidden.bs.collapse', function () {
  document.body.classList.remove('no-scroll');
});

const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', function () {
  const bsCollapse = bootstrap.Collapse.getInstance(collapseElement);
  bsCollapse.hide(); // esto quita automáticamente la clase "show"
});

let lastScroll = 0;
const topbar = document.querySelector('.containertopBar');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset;
  let windowWidth = window.innerWidth;

  if (currentScroll > 50) {
    topbar.classList.add('hide-topbar');
    navbar.style.top = "0";
  } else {
    topbar.classList.remove('hide-topbar');
    // Aplica solo si el ancho >= 1024px
    if (windowWidth >= 1024) {
      navbar.style.top = "39px";
    } else {
      navbar.style.top = ""; // o el valor que tenga por defecto en pantallas pequeñas
    }
  }
});

// const btnHome = document.querySelector('.btnHome');

// window.addEventListener('scroll', () => {
//     const scrollTop = window.scrollY;
//     const docHeight = document.body.scrollHeight - window.innerHeight;
//     const scrollPercent = (scrollTop / docHeight) * 100;

//     // Mostrar el botón solo al hacer scroll
//     if (scrollTop > 50) {
//         btnHome.classList.add('show');
//     } else {
//         btnHome.classList.remove('show');
//     }

//     // Llenar borde según scroll
//     btnHome.style.setProperty('--scroll-fill', scrollPercent + '%');
// });

const btnHome = document.querySelector('.btnHome');
const circle = btnHome.querySelector('.progress-ring__circle');

const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  // Mostrar el botón solo al hacer scroll
  if (scrollTop > 50) {
    btnHome.classList.add('show');
  } else {
    btnHome.classList.remove('show');
  }

  setProgress(scrollPercent);
});

});