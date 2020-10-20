const Pool = require('pg').Pool
require('dotenv').config()

const connectionString = process.env.DATABASE_URL

let pool

if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString: connectionString,
  })
} else {
  pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB,
  })
}

module.exports = pool
