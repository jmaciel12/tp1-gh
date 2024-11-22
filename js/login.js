// Seleccionar los elementos del formulario
const form = document.querySelector(".form-contact");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const terms = document.querySelector("#terms");
const buttonSubmit = document.querySelector(".button-submit");

// Agregar eventos de mouseover y mouseout al botón de submit
buttonSubmit.addEventListener("mouseenter", function() {
  this.style.backgroundColor = "#0056b3";
});

buttonSubmit.addEventListener("mouseleave", function() {
  this.style.backgroundColor = "";
});

// Listener para el evento submit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Detener el envío del formulario

  let errors = false;

  // Validar campo de correo
  if (email.value === "") {
    alert("Por favor complete el campo email");
    errors = true;
  }

  // Validar campo de contraseña
  if (password.value === "") {
    alert("Por favor complete el campo contraseña");
    errors = true;
  }

  // Redirigir si no hay errores
  if (!errors) {
    location.href = "index.html"; // Redirigir al formulario de login
  }
});