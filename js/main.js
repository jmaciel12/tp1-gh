let url = 'https://dummyjson.com/recipes';
let cantidadRecetas = 0; // Contador para las recetas cargadas

function obtenerRecetas() {
    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data.recipes); 

            // Acceder al array "recipes" dentro de los datos devueltos
            let arrayDeRecetas = data.recipes;

            // Capturar el elemento HTML donde se desean agregar las recetas
            let seccion = document.querySelector('.container-products');
            let allRecipesHTML = ""; // Inicializar como una cadena vacía para luego añadir recetas

            // Recorrer el array de recetas y organizar el HTML
            for (let i = cantidadRecetas; i < cantidadRecetas + 10 && i < arrayDeRecetas.length; i++) {
                allRecipesHTML += `<article class="product-card">
                                    <div class="product-details">
                                        <img src="${arrayDeRecetas[i].image}" alt="${arrayDeRecetas[i].name}">
                                        <p class="receta-name">${arrayDeRecetas[i].name}</p>
                                        <p>Difficulty: ${arrayDeRecetas[i].difficulty}</p>
                                    </div>
                                    <div class="product-actions">
                                        <a href="detallereceta.html?id=${arrayDeRecetas[i].id}">Detalle</a>
                                    </div>
                                  </article>`;
            }

            // Añadir las nuevas recetas al DOM sin borrar las existentes
            seccion.innerHTML += allRecipesHTML;

            // Incrementar el contador para la próxima tanda
            cantidadRecetas += 10;
        })
        .catch(function(e) {
            console.log("Error:", e);
        });
}

// Añadir el evento para el botón "Cargar más"
document.querySelector('.add-more').addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir que el enlace haga su acción predeterminada
    obtenerRecetas(); // Llamar a la función para cargar más recetas
});

// Cargar las primeras recetas al iniciar la página
obtenerRecetas();


