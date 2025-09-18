import express from 'express'

import { ClientLoginController } from '../../../../controllers/profilesController/authController/authClients/clientLoginController.js'

export const loginClientRouter = express.Router()

const clientLoginController = new ClientLoginController()
loginClientRouter.post('/client/loginClient', clientLoginController.login)
