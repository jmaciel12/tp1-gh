
// Obtner los tags
let url = "https://dummyjson.com/recipes/tags"; // URL de los tags

// Realizar la solicitud a la API
fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(tags) {
    console.log(tags);

    // Capturar el contenedor donde se agregarán los tags
    let seccion = document.querySelector(".container-tags");
    let allTagsHTML = ""; // Inicializar cadena vacía para agregar los tags

    // Recorrer el array de tags y crear los artículos
    for (let i = 0; i < tags.length; i++) {
      allTagsHTML += `
        <article class="tag-card">
          <div class="tag-details">
            <h2 class="tag-name"><a href="detallecategoria.html?tag=${tags[i]}">${tags[i]}</a></h2>
            <p>Descubre recetas relacionadas con esta categoría.</p>
          </div>
        </article>
      `;
    }

    // Insertar los artículos de tags en el contenedor
    seccion.innerHTML = allTagsHTML;

    let articleCategorias = document.querySelectorAll(".tag-card");
    for (let i = 0; i < articleCategorias.length; i++) {
      const article = articleCategorias[i];
      article.addEventListener("mouseover", function() {
        article.style.background = "linear-gradient(rgba(80, 200, 255, 0.5), rgba(80, 200, 255, 0.5))";
        article.style.transform = "scale(1.1)";
      });

      article.addEventListener("mouseout", function() {
        article.style.background = "";
        article.style.transform = "scale(1)";
      });
    }
  })
  .catch(function(e) {
    console.log("Error:", e);
  });