// analizarUrl.js

const url = require('url');

const urlAAnalizar = 'https://www.ejemplo.com:8080/ruta/pagina?param1=valor1&param2=valor2#seccion';

const parsedUrl = new url.URL(urlAAnalizar);

console.log('Host:', parsedUrl.host);
console.log('Hostname:', parsedUrl.hostname);
console.log('Pathname:', parsedUrl.pathname);
console.log('Protocol:', parsedUrl.protocol);
console.log('Port:', parsedUrl.port);
console.log('Search Params:', parsedUrl.search);
console.log('Hash:', parsedUrl.hash);

console.log('Parámetros:');
for (const [key, value] of parsedUrl.searchParams) {
  console.log(`  ${key}: ${value}`);
}
