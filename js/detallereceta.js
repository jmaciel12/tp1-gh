// Etraer el id de la receta de la URL
let querString = location.search;
let querStringObj = new URLSearchParams(querString);
let idReceta = querStringObj.get('id');
console.log(idReceta);

// Mostrar la información de la receta en el HTML

let url = `https://dummyjson.com/recipes/${idReceta}`;
fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);

        let characterNameElement = document.querySelector('.name-receta-detalle');
        let characterImageElement = document.querySelector('.img-receta-detalle');
        let characterPreparationElement = document.querySelector('.preparation');
        let characterCookTimeElement = document.querySelector('.cook-time');

        characterNameElement.textContent += data.name;
        characterImageElement.src = data.image;
        characterPreparationElement.innerHTML = `<b>Preparación:</b> ${data.instructions}`;
        characterCookTimeElement.innerHTML = `<b>Tiempo de preparación:</b> ${data.cookTimeMinutes}`;

        // Mostrar las categorías de la receta y linkearlas a sus respectivas URLs
        let categorias = data.tags;
        let categoriasElement = document.querySelector('.categorias');
        for (let i = 0; i < categorias.length; i++) {
            let linkElement = document.createElement('a');
            linkElement.href = `detallecategoria.html?categoria=${categorias[i]}`;
            linkElement.textContent = categorias[i];
            categoriasElement.appendChild(linkElement);
            if (i < categorias.length - 1) {
                categoriasElement.innerHTML += ' ';
            }
        }
    })
    .catch(function(error) {
        console.log(error);
    });

