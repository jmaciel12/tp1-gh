// Extraer el tag de la URL
let querString = location.search;
let querStringObj = new URLSearchParams(querString);
let selectedTag = querStringObj.get("tag");
console.log(selectedTag);

if (selectedTag) {
  // Mostrar el tag en el h1 de la página
  document.querySelector(".title-categorias").textContent = selectedTag;

  // Construir la URL con el tag seleccionado
  let url = `https://dummyjson.com/recipes/tag/${selectedTag}`;

  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data.recipes);

      // Acceder al array "recipes" dentro de los datos devueltos
      let arrayDeRecetas = data.recipes;

      // Capturar el elemento HTML donde se desean agregar las recetas
      let seccion = document.querySelector(".container-products");
      let allRecipesHTML = ""; // Inicializar como una cadena vacía para luego añadir recetas

      // Recorrer el array de recetas y organizar el HTML
      for (let i = 0; i < arrayDeRecetas.length; i++) {
        allRecipesHTML += `
          <article class="product-card">
            <div class="product-details">
              <img src="${arrayDeRecetas[i].image}" alt="${arrayDeRecetas[i].name}">
              <p class="receta-name">${arrayDeRecetas[i].name}</p>
              <p>Dificultad: ${arrayDeRecetas[i].difficulty}</p>
            </div>
            <div class="product-actions">
              <a href="detallereceta.html?id=${arrayDeRecetas[i].id}">Detalle</a>
            </div>
          </article>
        `;
      }

      // Añadir las nuevas recetas al DOM
      seccion.innerHTML = allRecipesHTML;
      const articles = document.querySelectorAll(".product-card");

      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        article.addEventListener("mouseover", function() {
          article.style.transform = "scale(1.1)";
        });
        article.addEventListener("mouseout", function() {
          article.style.transform = "scale(1)";
        });
      }
    })
    .catch(function(e) {
      console.log("Error:", e);
    });
} else {
  console.log("No se especificó un tag en la URL.");
}