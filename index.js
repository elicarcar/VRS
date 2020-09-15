const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db/db')

app.use(cors())
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
    } = req.body

    const newVisitor = await pool.query(
      'INSERT INTO visitors ( first_name, last_name, email, company_name, current_appointment) VALUES($1, $2, $3, $4, $5 ) RETURNING *',
      [first_name, last_name, email, company_name, current_appointment]
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

//POST VISIT

app.post('/visitor/visits/:v_id', async (req, res) => {
  try {
    const { v_id } = req.params
    const updatedUser = await pool.query(
      'UPDATE visitors SET end_time = $1, is_logged = $2 WHERE id = $3',
      ['now()', false, v_id]
    )

    // query starting time from currentAppointment
    const startTime = await pool.query(
      'SELECT start_time FROM visitors WHERE id = $1',
      [v_id]
    )
    const time = startTime.rows[0]['start_time']

    await pool.query(
      'INSERT INTO visits (v_id, start_time, end_time) VALUES( $1, $2, $3 ) RETURNING *',
      [v_id, time, 'now()']
    )

    await pool.query(
      'UPDATE visitors SET current_appointment = null WHERE id = $1',
      [v_id]
    )

    res.json(updatedUser)
  } catch (error) {
    console.log(error)
  }
})

// GET all visits

app.get('/visits', async (req, res) => {
  try {
    const visits = await pool.query('SELECT * FROM visits')
    res.json(visits.rows)
  } catch (error) {
    console.log(error)
  }
})
