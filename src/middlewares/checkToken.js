import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()

export const checkToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    res.status(401).json({ msg: 'Access denied.' })
  }

  try {
    const SECRET_KEY = process.env.SECRET_KEY

    const decoded = jwt.verify(token, SECRET_KEY)
    req.client_id = decoded.client_id

    next()
  } catch (err) {
    res.status(400).json({ msg: 'Invalid token.' })
  }
}
