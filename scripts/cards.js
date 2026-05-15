function activarCardsMobile() {
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.cartaservicio-card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('activo');
      });
    });
  }
}

activarCardsMobile();

window.addEventListener('resize', () => {
  activarCardsMobile();
});
