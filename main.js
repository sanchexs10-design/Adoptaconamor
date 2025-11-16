// Toggle menú móvil
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// Manejo simple de envío de formulario
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por escribirnos. Nos pondremos en contacto contigo pronto.");
    contactForm.reset();
  });
}
