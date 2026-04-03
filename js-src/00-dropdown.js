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
