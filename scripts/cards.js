// cards.js
document.querySelectorAll('.cartaservicio-card').forEach(card => {
  const trigger = card.querySelector('.cartaservicio-header'); 
  // o usa un botón: card.querySelector('.cartaservicio-toggle')

  if (trigger) {
    trigger.addEventListener('pointerdown', (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault(); // evita destellos raros
        card.classList.toggle('activo');
      }
    });
  }
});

