const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db/db')
const csurf = require('csurf')
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(express.json())

const csrfMiddleware = csurf({
  cookie: true,
})

app.use(cookieParser())
app.use(csrfMiddleware)

app.get('/', async (req, res) => {
  res.end('Hello')
  console.log(req.csrfToken())
})

app.get('/auth', async (req, res) => {
  try {
    res.redirect(
      `https://id.heroku.com/oauth/authorize?client_id=68b3b7e3-0aea-417c-bbd0-6f97df91b03e&response_type=code&scope=identity&state=${req.csrfToken()}`
    )
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})

//SEE IF HEROKU GETS REDIRECTED

app.get('/callback', function (req, res) {
  var code = req.query.code || null
  var state = req.query.state || null
  console.log(code + state)
  res.send('hello')
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
    const registeredVisitor = await pool.query(
      'SELECT EXISTS(SELECT * FROM visitors where email=$1)',
      [email]
    )
    if (registeredVisitor) {
      const updateVisitor = await pool.query(
        'UPDATE visitors SET current_appointment = $1, is_logged = $2 WHERE email = $3',
        [current_appointment, true, email]
      )
      res.json(updateVisitor.rows)
    } else {
      const newVisitor = await pool.query(
        'INSERT INTO visitors ( first_name, last_name, email, company_name, current_appointment) VALUES($1, $2, $3, $4, $5 ) RETURNING *',
        [first_name, last_name, email, company_name, current_appointment]
      )
      res.json(newVisitor.rows[0])
    }
  } catch (error) {
    console.log(error.stack)
    res.status(500).send('Server error')
  }
})

// GET all visitors

app.get('/visitors', async (req, res) => {
  try {
    const allVisitors = await pool.query('SELECT * FROM visitors')

    res.json(allVisitors.rows)
  } catch (error) {
    console.log(error.stack)
    res.status(500).send('Server error')
  }
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
    console.log(error.stack)
    res.status(500).send('Server error')
  }
})

//POST VISIT

app.post('/visitor/visits/:v_id', async (req, res) => {
  try {
    const { v_id } = req.params
    await pool.query(
      'UPDATE visitors SET end_time = $1, is_logged = $2 WHERE id = $3',
      ['now()', false, v_id]
    )

    // query starting time and current_appointment
    const query = await pool.query(
      'SELECT start_time, current_appointment  FROM visitors WHERE id = $1',
      [v_id]
    )
    const start_time = query.rows[0]['start_time']
    const appointment = query.rows[0]['current_appointment']

    await pool.query(
      'INSERT INTO visits (v_id, person, start_time, end_time) VALUES( $1, $2, $3, $4 ) RETURNING *',
      [v_id, appointment, start_time, 'now()']
    )

    await pool.query(
      'UPDATE visitors SET current_appointment = null WHERE id = $1',
      [v_id]
    )

    const currentVisitors = await pool.query(
      'SELECT * FROM visitors WHERE is_logged = true'
    )
    res.json(currentVisitors.rows)
  } catch (error) {
    console.log(error.stack)
    res.status(500).send('Server error')
  }
})

// GET all visits

app.get('/visits', async (req, res) => {
  try {
    const visits = await pool.query('SELECT * FROM visits')
    res.json(visits.rows)
  } catch (error) {
    console.log(error.stack)
    res.status(500).send('Server error')
  }
})

app.listen(5000, () => {
  console.log('server runs successfully')
})
