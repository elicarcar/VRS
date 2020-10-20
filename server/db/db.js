const Pool = require('pg').Pool
require('dotenv').config()

const connectionString =
  'postgres://btpfbrtyhjuosv:62d4e651405143fc9f01930dbd79648bed962c7efa2d30fc8254c97a9b22ae20@ec2-52-21-0-111.compute-1.amazonaws.com:5432/dnhnk4vknrtr6'

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
