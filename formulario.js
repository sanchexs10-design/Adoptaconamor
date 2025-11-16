// --- Menú móvil ---
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// --- Botones "Quiero conocerlo/la" ---
const interesButtons = document.querySelectorAll(".btn-interes");

interesButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const petName = btn.dataset.pet || "";

    // Guardamos el nombre de la mascota en el navegador
    sessionStorage.setItem("mascotaInteres", petName);

    // Redirigimos a la página de contacto
    window.location.href = "contacto.html";
  });
});

// --- Formulario de contacto ---
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const mensajeField = contactForm.elements["mensaje"];
  const mascotaGuardada = sessionStorage.getItem("mascotaInteres");

  // Si venimos de un botón "Quiero conocerlo", prellenamos el mensaje
  if (mascotaGuardada && mensajeField) {
    mensajeField.value = `Estoy interesado en adoptar a ${mascotaGuardada}. `;
  }

  // Manejar el envío del formulario
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por escribirnos. Nos pondremos en contacto contigo pronto.");
    contactForm.reset();
    sessionStorage.removeItem("mascotaInteres");
  });
}
