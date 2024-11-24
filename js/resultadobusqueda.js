// Obtener la cadena de búsqueda de la URL
let querString = location.search;
let querStringObj = new URLSearchParams(querString);
let busqueda = querStringObj.get("search");

// Verificar si se proporcionó un término de búsqueda
if (busqueda === "") {
  alert("Por favor ingrese un término de búsqueda.");
}
// Verificar si el término  buscado tiene al menos 3 caracteres
if (busqueda.length < 3) {
  alert("El término de búsqueda debe tener al menos 3 caracteres.");
} else {
  // Construir la URL de búsqueda con el valor del campo de búsqueda
  let url = `https://dummyjson.com/recipes/search?q=${busqueda}`;

  // Realizar la petición GET a la API
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // Procesar los datos devueltos por la API
      console.log(data.recipes);

      // Acceder al array "recipes" dentro de los datos devueltos
      let arrayDeRecetas = data.recipes;

      // Capturar el elemento HTML donde se desean agregar las recetas
      let seccion = document.querySelector(".container-products");

      // Verificar si hay resultados
      if (arrayDeRecetas.length === 0) {
        // Mostrar mensaje de no resultados
        seccion.innerHTML = "No se encontraron resultados.";
      } else {
        // Inicializar la variable para almacenar el HTML de las recetas
        let allRecipesHTML = "";

        // Recorrer el array de recetas y organizar el HTML
        for (let i = 0; i < arrayDeRecetas.length; i++) {
          // Agregar el HTML de cada receta a la variable allRecipesHTML
          allRecipesHTML += `
          <article class="product-card">
            <div class="product-details">
              <img src="${arrayDeRecetas[i].image}" alt="${arrayDeRecetas[i].name}">
              <p class="receta-name">${arrayDeRecetas[i].name}</p>
              <p>${arrayDeRecetas[i].description}</p>
            </div>
            <div class="product-actions">
              <a href="detalle.html?id=${arrayDeRecetas[i].id}">Ver detalles</a>
            </div>
          </article>
        `;
        }

        // Añadir las nuevas recetas al DOM sin borrar las existentes
        seccion.innerHTML = allRecipesHTML;
      }
    })
    .catch(function (e) {
      // Mostrar mensaje de error
      console.log("Error:", e);
    });
}

