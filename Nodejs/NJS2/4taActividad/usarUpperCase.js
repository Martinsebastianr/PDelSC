// usarUpperCase.js

// Importamos el paquete upper-case
const upperCase = require('upper-case').upperCase;

const texto = 'hola mundo desde node.js';

const textoEnMayusculas = upperCase(texto);

console.log(textoEnMayusculas);  // HOLA MUNDO DESDE NODE.JS