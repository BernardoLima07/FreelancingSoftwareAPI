import { setupRoutes } from './routes/setupRoutes/setupRoutes.js'
import { seed } from './seed/seed.js'
import express from 'express'

import dotenv from 'dotenv'

import { sequelize } from './config/dbConfig.js'

const app = express()
dotenv.config()

app.use(express.json())
sequelize
  .sync()
  .then(() => {
    console.log('Database listening on...')
    return seed()
  })
  .then(() => {
    const PORT = process.env.API_PORT
    app.listen(PORT, () => {
      console.log('API listening on...', PORT)
    })

    setupRoutes(app)
  })
  .catch((err) => {
    console.error('Error:', err)
  })
