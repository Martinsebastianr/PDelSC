// servidor.js
const http = require('http');   // módulo HTTP
const fs = require('fs');       // módulo File System
const path = require('path');   // para rutas de archivos

const PORT = 3000;

// Creamos el servidor
const server = http.createServer((req, res) => {
    // Le decimos que siempre servimos index.html
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error al leer el archivo HTML');
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

// Escuchamos en el puerto
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});