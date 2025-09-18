import express from 'express'

import { ContractorLoginController } from '../../../../controllers/profilesController/authController/authContractors/contractorLoginController.js'

export const loginContractorRouter = express.Router()

const contractorLoginController = new ContractorLoginController()
loginContractorRouter.post('/contractor/loginContractor', contractorLoginController.login)
