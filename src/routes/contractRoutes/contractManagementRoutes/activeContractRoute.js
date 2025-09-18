import express from 'express'
import { ActiveContractController } from '../../../controllers/contractController/contractManagement/activeContractController.js'

export const activeContractRouter = express.Router()
const activeContractController = new ActiveContractController()

activeContractRouter.get(
  '/contract/activesContracts/:client_id',
  activeContractController.activeContract
)
