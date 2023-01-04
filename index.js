const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hola', (req, res) => {
    res.send('ruta Hola');
});

app.get('/adios', (req, res) => {
    res.send('ruta Adiós');
});

app.listen(3000, () => {
    console.log('Ejemplo app listener en el puerto 3000');
});