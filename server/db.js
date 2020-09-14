const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: '211eli745',
  host: 'localhost',
  port: 5432,
  database: 'visitor_registration_system_01',
})

module.exports = pool
