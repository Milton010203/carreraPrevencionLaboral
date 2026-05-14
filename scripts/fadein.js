window.addEventListener("load", () => {
  const main = document.querySelector("main");
  if (main) {
    // Forzamos un reflow para que la transición se aplique correctamente
    void main.offsetWidth;
    // Mostramos el contenido del main con fade in
    main.style.opacity = 1;
  }
});
