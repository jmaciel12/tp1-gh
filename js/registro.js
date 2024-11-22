// Seleccionar los elementos del formulario
const form = document.querySelector(".form-contact");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const terms = document.querySelector("#terms");

// Elementos para mensajes de error
const invalidEmail = document.querySelector(".feedback-error.email");
const invalidPassword = document.querySelector(".feedback-error.password");

// Listener para el evento submit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Detener el envío del formulario

  let errors = false;

  // Validar campo de correo
  if (email.value === "") {
    invalidEmail.innerText = "Por favor complete el campo";
    invalidEmail.style.display = "block";
    errors = true;
  } else {
    invalidEmail.style.display = "none";
  }

  // Validar campo de contraseña
  if (password.value === "") {
    invalidPassword.innerText = "Por favor complete el campo";
    invalidPassword.style.display = "block";
    errors = true;
  } else {
    invalidPassword.style.display = "none";
  }

  // Redirigir si no hay errores
  if (!errors) {
    location.href = "login.html"; // Redirigir al formulario de login
  }
});