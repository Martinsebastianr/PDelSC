const titulo = document.getElementById('titulo');
const contenedorImagen = document.getElementById('contenedor-imagen');

let img = null;

// Agregar H1
document.getElementById('btn-agregar-h1').addEventListener('click', () => {
    titulo.textContent = '¡Hola DOM!';
});

// Cambiar color H1
document.getElementById('btn-cambiar-color').addEventListener('click', () => {
    const colores = ['red', 'blue', 'green', 'orange', 'purple'];
    const color = colores[Math.floor(Math.random() * colores.length)];
    titulo.style.color = color;
});

// Agregar Imagen
document.getElementById('btn-agregar-img').addEventListener('click', () => {
    if (!img) {
        img = document.createElement('img');
        img.src = '/images/descarga (1).jfif';   // ruta correcta dentro de public/images
        img.alt = 'Imagen de ejemplo';         // descripción de la imagen
        contenedorImagen.appendChild(img);
    }
});

// Cambiar Imagen
document.getElementById('btn-cambiar-img').addEventListener('click', () => {
    if (img) {
        img.src = '/images/descarga.jfif';
    }
});

// Cambiar tamaño Imagen
document.getElementById('btn-cambiar-tamano').addEventListener('click', () => {
    if (img) {
        const tamaño = Math.floor(Math.random() * 300) + 100;
        img.style.width = tamaño + 'px';
    }
});