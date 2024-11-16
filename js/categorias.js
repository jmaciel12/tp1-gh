let url = 'https://dummyjson.com/recipes/tags';  // URL de los tags

// Realizar la solicitud a la API
fetch(url)
    .then(function(res) {
        return res.json();  
    })
    .then(function(tags) {
        console.log(tags);  

        // Capturar el contenedor donde se agregarán los tags
        let seccion = document.querySelector('.container-tags');
        let allTagsHTML = "";  // Inicializar cadena vacía para agregar los tags

        // Recorrer el array de tags y crear los artículos
        for (let i = 0; i < tags.length; i++) {
            allTagsHTML += `<article class="tag-card">
                                        <div class="tag-details">   
                                            <h2 class="tag-name"><a href="detallecategoria.html?tag=${tags[i]}">${tags[i]}</a></h2>
                                            <p>Descubre recetas relacionadas con esta categoría.</p>
                                        </div>
                                    </article>`;
        }

        // Insertar los artículos de tags en el contenedor
        seccion.innerHTML = allTagsHTML;  // Reemplazar el contenido de la sección con los tags
    })
    .catch(function(e) {
        console.log("Error:", e);  // Manejo de errores
    });
