const { app } = require('./controllers/Routes');
const port = 3001;

app.listen( port, () => {
    console.log(`App corriendo en el puerto: ${ port }`)
})