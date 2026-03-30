// Componente 1: alerta
const btnAlerta = document.getElementById('btn-alerta');
if (btnAlerta) {
    btnAlerta.addEventListener('click', () => {
        alert('¡Evento de Componente 1 funcionando!');
    });
}

// Componente 2: cambiar color H1
const btnColor = document.getElementById('btn-color');
const h1Color = document.getElementById('h1-color');
if (btnColor && h1Color) {
    btnColor.addEventListener('click', () => {
        const colores = ['red','blue','green','orange','purple'];
        h1Color.style.color = colores[Math.floor(Math.random() * colores.length)];
    });
}

// Componente 3: agregar imagen
const btnAgregarImg = document.getElementById('btn-agregar-img');
const contenedorImg = document.getElementById('contenedor-img');
if (btnAgregarImg && contenedorImg) {
    btnAgregarImg.addEventListener('click', () => {
        const img = document.createElement('img');
        img.src = '/images/descarga (1).jfif';
        img.alt = 'Imagen ejemplo';
        img.style.width = '200px';
        contenedorImg.appendChild(img);
    });
}

// Componente 4: cambiar tamaño imagen
const btnCambiarTamano = document.getElementById('btn-cambiar-tamano');
const imgTamano = document.getElementById('img-tamano');
if (btnCambiarTamano && imgTamano) {
    btnCambiarTamano.addEventListener('click', () => {
        const ancho = Math.floor(Math.random() * 300) + 100;
        imgTamano.style.width = ancho + 'px';
    });
}

// Mostrar mensaje en consola y en la página
const btnConsole = document.getElementById('btn-console');
if (btnConsole) {
    btnConsole.addEventListener('click', () => {
        console.log('¡Evento de Componente 5 funcionando!');
        
        let mensajeDiv = document.getElementById('mensaje');
        if(!mensajeDiv) {
            mensajeDiv = document.createElement('div');
            mensajeDiv.id = 'mensaje';
            document.body.appendChild(mensajeDiv);
        }
        mensajeDiv.textContent = '¡Evento de Componente 5 funcionando en la página!';
    });
}