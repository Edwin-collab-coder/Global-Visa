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