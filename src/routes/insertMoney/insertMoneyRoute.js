import express from 'express'

import { InsertMoneyController } from '../../controllers/insertMoney/insertMoneyController.js'

export const insertMoneyRouter = express.Router()

const insertMoneyController = new InsertMoneyController()

insertMoneyRouter.put('/client/insertMoney', insertMoneyController.insertMoney)
