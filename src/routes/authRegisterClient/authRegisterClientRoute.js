import express from 'express'

import { ClientRegisterController } from '../../controllers/authRegisterClient/authRegisterClientController.js'

export const authRegisterClientRouter = express.Router()

const clientRegisterController = new ClientRegisterController()
authRegisterClientRouter.post(
  '/client/register',
  clientRegisterController.register
)
