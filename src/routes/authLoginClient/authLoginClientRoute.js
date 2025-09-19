import express from 'express'

import { ClientLoginController } from '../../controllers/authLoginClient/authLoginClientController.js'

export const authLoginClientRouter = express.Router()

const clientLoginController = new ClientLoginController()
authLoginClientRouter.post('/client/login', clientLoginController.login)
