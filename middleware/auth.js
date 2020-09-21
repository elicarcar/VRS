const axios = require('axios')
const pool = require('../db/db')

module.exports = async function (req, res, next) {
  // Verify token
  try {
    const token = req.header('Authorization')
    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied.' })
    }

    const resp = await axios.get('https://api.heroku.com/account/', {
      headers: {
        Authorization: token,
        Accept: 'application/vnd.heroku+json; version=3',
      },
    })

    const purifyToken = token.replace('Bearer', '').trim().toString()

    const row = await pool.query(
      'select uid from users where token::text = $1',
      [purifyToken]
    )

    const user_id = row.rows[0].uid

    if (!user_id) {
      res.status(401).json({ msg: 'Unauthorized user. Access denied' })
    }
    const {
      data: { id },
    } = resp

    id == user_id
      ? next()
      : res.status(401).json({ msg: 'Unauthorized user. Access denied' })
  } catch (error) {
    console.log(error)
    res.status(401).json({ msg: 'Token is not valid' })
  }
}
