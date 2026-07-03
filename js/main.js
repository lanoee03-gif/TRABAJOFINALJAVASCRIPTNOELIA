document.addEventListener('DOMContentLoaded', function() {
    // Cargar noticias desde el archivo JSON
    
        fetch("./js/data/noticias.json")
        .then(response => response.json())
        .then(data => {
            const noticiasContainer = document.getElementById('noticias-container');
            data.noticias.forEach(noticia => {
                const noticiaElement = document.createElement('div');
                noticiaElement.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p><strong>${noticia.fecha}</strong></p>
                    <img src="${noticia.imagen}" alt="${noticia.titulo}">
                    <p>${noticia.descripcion}</p>
                    <a href="${noticia.link}" target="_blank">Leer más</a>
                `;
                noticiasContainer.appendChild(noticiaElement);
            });
        })
        .catch(error => console.error('Error al cargar las noticias:', error))
    // Cargar galería (puedes implementar aquí la lógica para cargar imágenes)
    const galleryContainer = document.getElementById('gallery-container');

    if (galleryContainer) {
        const images = ['./images/wnsjordan.png'];

        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = 'Imagen de la galería';
            galleryContainer.appendChild(imgElement);
        });
}
});

