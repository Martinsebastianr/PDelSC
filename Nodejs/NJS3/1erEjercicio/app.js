const express = require('express');
const path = require('path');
const app = express();

// Carpeta pública para CSS, JS e imágenes
app.use(express.static(path.join(__dirname, 'public')));

// Servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);
});
