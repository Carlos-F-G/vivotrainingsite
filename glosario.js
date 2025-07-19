document.querySelectorAll(".acordeon-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const contenido = btn.nextElementSibling;
    const isOpen = contenido.style.display === "block";

    // Cierra todos los contenidos antes de abrir uno nuevo (opcional)
    document
      .querySelectorAll(".contenido")
      .forEach((c) => (c.style.display = "none"));
    document
      .querySelectorAll(".acordeon-btn")
      .forEach((b) => b.classList.remove("active"));

    // Abre solo el actual si no estaba abierto
    if (!isOpen) {
      contenido.style.display = "block";
      btn.classList.add("active");
    }
  });
});
