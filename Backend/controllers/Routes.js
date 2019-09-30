const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const db = require('../models/Queries')

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use( function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/productos', db.getProductos)

app.get('/productos/:codigo', db.getProductoByCodigo) 

module.exports = {
    app,
}