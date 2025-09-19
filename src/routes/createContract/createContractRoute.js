import express from 'express'

import { ContractPostController } from '../../controllers/createContract/createContractController.js'

export const createContractRouter = express.Router()

const contractPostController = new ContractPostController()

createContractRouter.post('/contract/create', contractPostController.contractPost)
