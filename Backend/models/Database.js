const { Pool } = require('pg')

// Parámetros para la conección con postgres
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api-tienda-node',
  password: '1234',
  port: 5432,
})

module.exports = {
  pool,
}
