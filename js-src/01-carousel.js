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