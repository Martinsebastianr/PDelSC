// index.js

// Importamos nuestros módulos
const tiempo = require('./tiempo');
const calculo = require('./calculo');

// Usamos el módulo de tiempo
console.log("Hora actual:", tiempo.obtenerHoraActual());
console.log("Fecha actual:", tiempo.obtenerFechaActual());

// Usamos el módulo de cálculo
console.log("Suma 5 + 3 =", calculo.sumar(5, 3));
console.log("Resta 10 - 4 =", calculo.restar(10, 4));
console.log("Multiplicación 6 * 7 =", calculo.multiplicar(6, 7));
console.log("División 20 / 4 =", calculo.dividir(20, 4));