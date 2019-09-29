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

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/productos', db.getProductos)

app.get('/productos/:codigo', db.getProductoByCodigo) 

module.exports = {
    app,
}