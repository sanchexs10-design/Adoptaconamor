# AdoptaConAmor

**AdoptaConAmor** es un portal web dedicado a promover la adopción responsable de mascotas.  
Fue desarrollado como parte de un proyecto académico siguiendo el **Proceso Personal de Software (PSP)**.

El sitio permite a los usuarios explorar mascotas en adopción, conocer cómo funciona el proceso y contactar a los encargados para iniciar una posible adopción.

---

## Funcionalidades principales

- **Sección Inicio (Hero)**  
  - Mensaje principal: *“Una nueva oportunidad para ellos. Una nueva historia para ti”*.  
  - Botones de acción para:
    - **Explorar mascotas**
    - **Ver cómo funciona el proceso**

- **Catálogo de Mascotas**  
  - Tarjetas con:
    - Nombre  
    - Tipo (perro/gato, etc.)  
    - Edad  
    - Raza  
  - Botón de interés: *“Quiero conocerlo/la”*.

- **Sección “Cómo funciona”**  
  - Explicación en 3 pasos del proceso de adopción:
    1. Explora
    2. Conecta
    3. Adopta

- **Reseñas / Testimonios**  
  - Historias breves de adoptantes para dar confianza y contexto.

- **Formulario de Contacto / Adopción**  
  - Campos:
    - Nombre completo  
    - Correo electrónico  
    - Mensaje  
  - Simulación de envío con mensaje emergente (alert).

- **Datos de Contacto**  
  - Correo de contacto  
  - WhatsApp  
  - Ciudad  
  - Nota aclarando que es un proyecto académico.

- **Diseño**  
  - Interfaz limpia y moderna  
  - Tipografía elegante (**Poppins**)  
  - Colores suaves y amigables  
  - Diseño adaptable a móviles (responsive).

---

## Estructura del proyecto

```text
adoptaconamor/
├── index.html   # Página principal del portal
├── style.css    # Estilos globales (diseño, colores, layout)
└── main.js      # Lógica básica para menú móvil y formulario
