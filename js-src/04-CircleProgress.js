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