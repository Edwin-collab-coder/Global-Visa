
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

});