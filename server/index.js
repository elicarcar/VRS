const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

const PORT = process.env.PORT || 3000

app.use(cors)
app.use(express.json())

// add visitor
app.post('/visitor', async (req, res) => {
  try {
    console.log(req.body)
  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`)
})
