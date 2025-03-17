const express = require('express')
const products_routes = require('./routes/products.js')
const slugify = require('slugify');


//Server instantiation
const app = express()

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

app.get('/api', (req, res) => {
    const message = 'Bienvenido a nuestra API';
    const slugMessage = slugify(message, { replacement: '*' });
    res.send(`<h1>${slugMessage}</h1>`);
});


//Midleware
app.use(express.json())
app.use('/', products_routes)

//Server startup
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})


