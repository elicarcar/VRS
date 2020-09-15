const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

// app.use(cors)
app.use(express.json())

app.get('/', async (req, res) => {
  try {
    console.log('hello')
    res.end('okay')
  } catch (error) {
    console.log(error)
  }
})

// POST visitor
app.post('/visitor', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      company_name,
      current_appointment,
      is_logged,
    } = req.body

    const newVisitor = await pool.query(
      'INSERT INTO visitors ( first_name, last_name, email, company_name, current_appointment, is_logged ) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
      [
        first_name,
        last_name,
        email,
        company_name,
        current_appointment,
        is_logged,
      ]
    )
    res.json(newVisitor.rows[0])
  } catch (error) {
    console.log(error)
  }
})

// GET all visitors

app.get('/visitors', async (req, res) => {
  try {
    const allVisitors = await pool.query('SELECT * FROM visitors')

    res.json(allVisitors.rows)
  } catch (error) {
    console.log(error)
  }
})

app.listen(5000, () => {
  console.log(`App started on port 5000`)
})

//GET a single visitor

app.get('/visitor/:id', async (req, res) => {
  try {
    const { id } = req.params
    const visitor = await pool.query('SELECT * FROM VISITORS WHERE id = $1', [
      id,
    ])

    res.json(visitor.rows)
  } catch (error) {
    console.log(error)
  }
})
