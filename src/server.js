import express from 'express'
import dotenv from 'dotenv'

import { setupRoutes } from './routes/setupRoutes/setupRoutes.js'
import { sequelize } from './config/dbConfig.js'

const app = express()
dotenv.config()

app.use(express.json())
sequelize
  .sync()
  .then(() => {
    console.debug('Database listening on...')

    const PORT = process.env.API_PORT

    app.listen(PORT, () => {
      console.debug('API listening on...', PORT)
    })

    setupRoutes(app)
  })
  .catch((err) => {
    console.error('Error:', err)
  })
