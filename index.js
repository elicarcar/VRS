const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db/db')
const auth = require('./middleware/auth')
const jwt = require('jsonwebtoken')

require('dotenv').config()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.end('Hello')
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

    if (registeredVisitor.rows[0].exists) {
      pool.query(
        'UPDATE visitors SET current_appointment = $1, is_logged = $2 WHERE email = $3',
        [current_appointment, true, email],
        (err, result) => {
          if (err) {
            return console.error('Error executing query', err.stack)
          }
          res.json(result.rows)
        }
      )
    } else {
      const start = new Date()
      pool.query(
        'INSERT INTO visitors (first_name, last_name, email, company_name, current_appointment, start_time) VALUES($1, $2, $3, $4, $5, $6 ) RETURNING *',
        [
          first_name,
          last_name,
          email,
          company_name,
          current_appointment,
          start,
        ],
        (err, result) => {
          if (err) {
            return console.error('Error executing query', err.stack)
          }
          res.json(result.rows[0])
        }
      )
    }
  } catch (error) {
    console.log(error.stack)
    res.status(500).send('Server error')
  }
})

// GET all visitors

app.get('/visitors', auth, async (req, res) => {
  try {
    const allVisitors = await pool.query('SELECT * FROM visitors')

    res.json(allVisitors.rows)
  } catch (error) {
    console.log(error.stack)
    res.status(500).send('Server error')
  }
})

//GET a single visitor

app.get('/visitor/:id', auth, async (req, res) => {
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

//USER

app.get('/user', auth, async (req, res) => {
  try {
    res.send(req.user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Internal server error.' })
  }
})

app.post('/auth', async (req, res) => {
  const { data } = req.body
  if (!data) {
    return res.status(401).json({ msg: 'No token, authorization denied.' })
  }

  try {
    const { id_token } = data

    const user = {
      token: id_token,
    }

    jwt.sign({ user }, 'secretkey', { expiresIn: '10h' }, (err, token) => {
      if (err) {
        res.json({ err })
      } else {
        res.send(token)
      }
    })
  } catch (error) {
    console.log(error)
    if (error) {
      res.status(401).send(error.message)
    }
  }
})

//POST VISIT

app.post('/visitor/visits/:v_id', auth, async (req, res) => {
  try {
    const { v_id } = req.params
    await pool.query(
      'UPDATE visitors SET end_time = $1, is_logged = $2 WHERE id = $3',
      ['now()', false, v_id]
    )

    // query starting time and current_appointment
    const query = await pool.query(
      'SELECT start_time, current_appointment FROM visitors WHERE id = $1',
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

app.get('/visits', auth, async (req, res) => {
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
