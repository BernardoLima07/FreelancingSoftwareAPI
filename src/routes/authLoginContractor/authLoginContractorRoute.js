import express from 'express'

import { ContractorLoginController } from '../../controllers/authLoginContractor/contractorLoginController.js'

export const authLoginContractorRouter = express.Router()

const contractorLoginController = new ContractorLoginController()
authLoginContractorRouter.post(
  '/contractor/login',
  contractorLoginController.login
)
