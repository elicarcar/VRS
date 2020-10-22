const { OAuth2Client } = require('google-auth-library')

const client = new OAuth2Client(process.env.CLIENT_ID)
module.exports = async function (req, res, next) {
  try {
    let token
    const bearer = req.header('Authorization')

    if (!bearer) {
      return res.status(401).json({ msg: 'No token, authorization denied.' })
    }

    if (typeof bearer !== undefined) {
      token = bearer.split(' ')[1]
      req.token = token
      await client.verifyIdToken(
        {
          idToken: token,
          audience: token.aud,
        },
        (err, login) => {
          if (err) {
            res.status(401).json({ msg: 'Unauthorized user.' })
          } else {
            const payload = login.getPayload()
            const isWirelabAccount = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@wirelab([\.])nl/g
            if (isWirelabAccount.test(payload.email)) {
              req.user = {
                full_name: payload.name,
                email: payload.email,
                id: payload.sub,
              }
              next()
            } else {
              throw new Error('Invalid email.')
            }
          }
        }
      )
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' })
  }
}
