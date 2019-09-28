const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const db = require('./queries')

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

app.listen(port, () => {
    console.log(`App corriendo en el puerto: ${ port } `)
})