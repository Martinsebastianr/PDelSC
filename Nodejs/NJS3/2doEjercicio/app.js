const express = require('express');
const path = require('path');
const app = express();

// Carpeta pública para CSS, JS e imágenes
app.use(express.static(path.join(__dirname, 'public')));

// Servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Servir otras páginas de ejemplo
app.get('/componente1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'componente1.html'));
});
app.get('/componente2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'componente2.html'));
});
app.get('/componente3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'componente3.html'));
});
app.get('/componente4', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'componente4.html'));
});
app.get('/componente5', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'componente5.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});