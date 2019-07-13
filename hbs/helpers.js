const hbs = require('hbs');

//helpers

//helper del anio
hbs.registerHelper('anio', () => {
    return new Date().getFullYear();
});

//helper para el nombre con mayusculas

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');

});