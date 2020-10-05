const jwt = require('jsonwebtoken')

module.exports = async function (req, res, next) {
  try {
    const bearer = req.header('Authorization')
    if (!bearer) {
      return res.status(401).json({ msg: 'No token, authorization denied.' })
    }

    if (typeof bearer !== undefined) {
      const token = bearer.split(' ')[1]
      req.token = token
      jwt.verify(token, 'secretkey', (err, data) => {
        if (err) {
          res.status(401).json({ msg: 'Unauthorized user.' })
        } else {
          req.user = data.user
          next()
        }
      })
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' })
  }
}
