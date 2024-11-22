// Etraer el id de la receta de la URL
let querString = location.search;
let querStringObj = new URLSearchParams(querString);
let idReceta = querStringObj.get("id");
console.log(idReceta);

// Mostrar la información de la receta en el HTML

let url = `https://dummyjson.com/recipes/${idReceta}`;
fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data);

    // Acceder al objeto "character" dentro de los datos devueltos

    let characterNameElement = document.querySelector(".name-receta-detalle");
    let characterImageElement = document.querySelector(".img-receta-detalle");
    let characterPreparationElement = document.querySelector(".preparation");
    let characterCookTimeElement = document.querySelector(".cook-time");

    // Actualizar el contenido del HTML con los datos de la receta

    characterNameElement.textContent = data.name;
    characterImageElement.src = data.image;
    characterPreparationElement.innerHTML = `<b>Preparación:</b> ${data.instructions}`;
    characterCookTimeElement.innerHTML = `<b>Tiempo de preparación:</b> ${data.cookTimeMinutes}`;

    // Mostrar las categorías de la receta y linkearlas a sus respectivas URLs
    let categorias = data.tags;
    let categoriasElement = document.querySelector(".categorias");

    let categoriasHTML = "Categorias: ";
    for (let i = 0; i < categorias.length; i++) {
      categoriasHTML += `<a href="detallecategoria.html?tag=${categorias[i]}">${categorias[i]}</a> `;
    }
    categoriasElement.innerHTML = categoriasHTML;
  })
  .catch(function(error) {
    console.log(error);
  });