// Este js sirve para manejar las secciones y landing!----------------------

// seleccionar todos los links internos
const links = document.querySelectorAll('a[href^="#"]');

// seleccionar secciones
const sections = document.querySelectorAll("main section");

// body
const body = document.body;

// ocultar todas las secciones inicialmente
function hideSections() {
  sections.forEach(section => {
    section.classList.remove("active");
  });
}

// mostrar el landing al principio
document.querySelector("#landing").classList.add("active");

// navegación -> click en boton -> mostrar seccion
links.forEach(link => {

  link.addEventListener("click", function(event) {

    event.preventDefault();

    const targetId = this.getAttribute("href");

    // ocultar todas
    hideSections();

    // mostrar nueva seccion
    document.querySelector(targetId).classList.add("active");

    // si NO es landing -> mostrar layout normal
    // (aca remuevo la clase de 'landing mode' cuando se haya ingresado al sitio)
    if (targetId !== "#landing") {
      body.classList.remove("landing-mode");
    } else {
      body.classList.add("landing-mode");
    }

  });

});