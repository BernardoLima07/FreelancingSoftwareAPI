import { Sequelize } from 'sequelize'

import dotenv from 'dotenv'
dotenv.config()
const password = process.env.DB_PASSWORD

export const sequelize = new Sequelize('freelancingSoftwareDB', 'root', password, {
  dialect: 'sqlite',
  host: 'dev.sqlite'
})
