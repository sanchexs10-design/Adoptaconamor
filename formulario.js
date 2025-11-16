// --- Menú móvil ---
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
}

// Clave donde vamos a guardar el usuario en localStorage
const USER_KEY = "usuarioAdoptaConAmor";

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

// --- Registro e Inicio de sesión (simulados con localStorage) ---
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// Registro
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = registerForm.elements["nombre"].value.trim();
    const correo = registerForm.elements["correo"].value.trim();
    const password = registerForm.elements["password"].value.trim();

    if (!nombre || !correo || !password) {
      alert("Por favor completa todos los campos de registro.");
      return;
    }

    const usuario = { nombre, correo, password };

    // Guardamos el usuario en localStorage
    localStorage.setItem(USER_KEY, JSON.stringify(usuario));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    registerForm.reset();
  });
}

// Inicio de sesión
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const correo = loginForm.elements["correo"].value.trim();
    const password = loginForm.elements["password"].value.trim();

    const usuarioGuardado = localStorage.getItem(USER_KEY);

    if (!usuarioGuardado) {
      alert("No hay ningún usuario registrado. Regístrate primero.");
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);

    if (usuario.correo === correo && usuario.password === password) {
      alert(`¡Bienvenido, ${usuario.nombre}! Has iniciado sesión correctamente.`);
      loginForm.reset();
      sessionStorage.setItem("sesionActiva", "true");
      window.location.href = "index.html";
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  });
}

// --- Mostrar saludo si hay sesión activa (para index y demás páginas) ---
function actualizarEstadoUsuario() {
  const userBanner = document.getElementById("userBanner");
  const userGreeting = document.getElementById("userGreeting");
  const logoutButton = document.getElementById("logoutButton");

  const sesionActiva = sessionStorage.getItem("sesionActiva");
  const usuarioGuardado = localStorage.getItem(USER_KEY);

  if (!userBanner || !userGreeting || !logoutButton) {
    return; // esta página no tiene barra de usuario
  }

  if (sesionActiva === "true" && usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado);
    userGreeting.textContent = `Hola, ${usuario.nombre}, gracias por iniciar sesión.`;
    userBanner.style.display = "flex";

    logoutButton.addEventListener("click", () => {
      sessionStorage.removeItem("sesionActiva");
      userBanner.style.display = "none";
      alert("Has cerrado sesión.");
      window.location.href = "index.html";
    });
  } else {
    userBanner.style.display = "none";
  }
}

// Ejecutar al cargar la página
actualizarEstadoUsuario();
