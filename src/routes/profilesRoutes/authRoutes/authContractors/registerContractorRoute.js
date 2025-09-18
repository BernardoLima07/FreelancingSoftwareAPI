import express from 'express'

import { ContractorRegisterController } from '../../../../controllers/profilesController/authController/authContractors/contractorRegisterController.js'

export const registerContractorRouter = express.Router()

const contractorRegisterController = new ContractorRegisterController()
registerContractorRouter.post('/contractor/registerContractor', contractorRegisterController.register)
