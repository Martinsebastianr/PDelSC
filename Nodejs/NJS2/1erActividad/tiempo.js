// tiempo.js
function obtenerHoraActual() {
    const ahora = new Date();
    return ahora.toLocaleTimeString();
}

function obtenerFechaActual() {
    const ahora = new Date();
    return ahora.toLocaleDateString();
}

// Exportamos las funciones
module.exports = {
    obtenerHoraActual,
    obtenerFechaActual
};