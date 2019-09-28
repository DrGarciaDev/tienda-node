const Pool = require('pg').Pool

// Parámetros para la conección con postgres
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api-tienda-node',
  password: '1234',
  port: 5432,
})

const getProductos = (request, response) => {
    // Comprobando la conección 
    pool.connect((err) => {
        if (err) {
          return console.error('Error al conectarse', err.stack)
        }
        pool.query('SELECT * FROM public.productos ORDER BY codigo ASC', (error, results) => {
            if (error) {
            throw error
            }
            response.status(200).json(results.rows)
        })
    })
}

const getProductoByCodigo = (request, response) => {
    // Comprobando la conección 
    pool.connect((err) => {
        if (err) {
          return console.error('Error al conectarse', err.stack)
        }

        // cuando el campo es numérico se pasa a integer con parseInt
        // const codigo = parseInt(request.params.codigo)
        const codigo = request.params.codigo.toString();
        
        pool.query('SELECT * FROM public.productos WHERE codigo = $1', [codigo], (error, results) => {
            if (error) {
                throw error
            }
            if(results.rows){
                response.status(200).json(results.rows)
            }else{
                response.json({ info: 'No hay datos' })
            }
        })
    })
}

module.exports = {
  getProductos,
  getProductoByCodigo,
}