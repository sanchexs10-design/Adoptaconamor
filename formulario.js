// MENÚ MÓVIL (BOTÓN ☰)
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", function () {
    nav.classList.toggle("show"); // muestra / oculta el menú en móvil
  });
}

// =========================
// FORMULARIO DE CONTACTO
// =========================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // no enviamos realmente (proyecto académico)

    alert("¡Gracias por tu interés en adoptar! Hemos recibido tu solicitud.");
    contactForm.reset();
  });
}

// =========================
// BOTONES "QUIERO CONOCERLO/LA"
// =========================
const interesButtons = document.querySelectorAll(".btn-interes");

if (interesButtons.length > 0) {
  interesButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const petName = btn.dataset.pet || "esta mascota";
      const mensaje =
        "Gracias por tu interés en " +
        petName +
        ".\nPor favor diligencia el formulario de contacto para continuar con el proceso de adopción.";

      alert(mensaje);

      // Redirigir al formulario de contacto
      window.location.href = "contacto.html";
    });
  });
}

// =========================
// FILTROS DEL CATÁLOGO
// =========================
const catalogGrid = document.querySelector(".catalog-grid");

if (catalogGrid) {
  const petCards = catalogGrid.querySelectorAll(".pet-card");
  const filtroTipo = document.getElementById("filtroTipo");
  const filtroEdad = document.getElementById("filtroEdad");

  function aplicarFiltros() {
    const tipoSeleccionado = filtroTipo ? filtroTipo.value : "todos";
    const edadSeleccionada = filtroEdad ? filtroEdad.value : "todas";

    petCards.forEach((card) => {
      const tipoCard = card.dataset.tipo;  // "perro" / "gato"
      const edadCard = card.dataset.edad;  // "cachorro" / "adulto"

      let visible = true;

      if (filtroTipo && tipoSeleccionado !== "todos" && tipoCard !== tipoSeleccionado) {
        visible = false;
      }

      if (filtroEdad && edadSeleccionada !== "todas" && edadCard !== edadSeleccionada) {
        visible = false;
      }

      card.style.display = visible ? "" : "none";
    });
  }

  if (filtroTipo) {
    filtroTipo.addEventListener("change", aplicarFiltros);
  }
  if (filtroEdad) {
    filtroEdad.addEventListener("change", aplicarFiltros);
  }
}
