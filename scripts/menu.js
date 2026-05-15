// Seleccionamos el offcanvas por su ID
const offcanvasElement = document.getElementById('offcanvasDarkNavbar');

// Creamos la instancia de Bootstrap Offcanvas
const offcanvas = new bootstrap.Offcanvas(offcanvasElement);

// ✅ Cerrar el menú automáticamente al hacer clic en un link
document.querySelectorAll('.offcanvas-body a').forEach(link => {
  link.addEventListener('click', () => {
    offcanvas.hide();
  });
});

// ✅ Escuchar eventos de apertura y cierre para animaciones extra o debug
offcanvasElement.addEventListener('show.bs.offcanvas', () => {
  console.log('El menú se está abriendo...');
  // Podés agregar aquí clases extra para animaciones personalizadas
});

offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
  console.log('El menú se cerró.');
  // Podés limpiar clases o estados si lo necesitás
});
