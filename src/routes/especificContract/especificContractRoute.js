import express from 'express'

import { EspecificContractController } from '../../controllers/especificContract/especificContractController.js'

export const especificContractRouter = express.Router()
const contractReadController = new EspecificContractController()

especificContractRouter.get(
  '/contract/especificContracts',
  contractReadController.especificContract
)
