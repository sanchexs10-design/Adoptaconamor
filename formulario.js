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

// --- Filtros del catálogo ---
const filtroTipo = document.getElementById("filtroTipo");
const filtroEdad = document.getElementById("filtroEdad");
const tarjetas = document.querySelectorAll(".catalog-grid .pet-card");

function aplicarFiltros() {
  if (!tarjetas.length) return;

  const tipo = filtroTipo ? filtroTipo.value : "todos";
  const edad = filtroEdad ? filtroEdad.value : "todas";

  tarjetas.forEach((card) => {
    const cardTipo = card.dataset.tipo;   // perro / gato
    const cardEdad = card.dataset.edad;   // cachorro / adulto

    const coincideTipo = tipo === "todos" || cardTipo === tipo;
    const coincideEdad = edad === "todas" || cardEdad === edad;

    if (coincideTipo && coincideEdad) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Solo agregamos eventos si existen los filtros (para que no falle en index/contacto)
if (filtroTipo && filtroEdad) {
  filtroTipo.addEventListener("change", aplicarFiltros);
  filtroEdad.addEventListener("change", aplicarFiltros);
}
