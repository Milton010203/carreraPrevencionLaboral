window.addEventListener("load", () => {
  // Ocultamos el body al inicio
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.5s ease";

  // Forzamos un reflow para que la transición se aplique correctamente
  void document.body.offsetWidth;

  // Mostramos el body con fade in
  document.body.style.opacity = 1;
});

