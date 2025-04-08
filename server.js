const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// Omogućavanje statičkih resursa
app.use(express.static('public'));

// Ruta za početnu stranicu
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta za galeriju slika
app.get('/images', (req, res) => {
    const dataPath = path.join(__dirname, 'images.json');
    const images = JSON.parse(fs.readFileSync(dataPath));
    res.render('slike', { images });
});

// Pokretanje servera
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

