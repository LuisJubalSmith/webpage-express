const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engieen
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Luis Smith',
        // anio: new Date().getFullYear()

    });
});

app.get('/link', (req, res) => {

    res.render('link', {
        // anio: new Date().getFullYear()
    });
});
app.get('/alquiler', (req, res) => {

    res.render('alquiler', {
        // anio: new Date().getFullYear()
    });
});

app.get('/venta', (req, res) => {

    res.render('venta', {
        // anio: new Date().getFullYear()
    });
});

app.get('/nosotros', (req, res) => {

    res.render('nosotros', {
        // anio: new Date().getFullYear()
    });
});



app.listen(port, () => {
    console.log(`Escuchando peticiones por el puerto ${port}`);
})