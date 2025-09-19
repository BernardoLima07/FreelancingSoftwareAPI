import { ContractModel } from '../../models/contractModel.js'
import { ResponseManager } from '../../responses/responseManagement.js'

export class ActiveContractController {
  async activeContract (req, res) {
    const clientId = req.params.client_id

    try {
      const activeContracts = await ContractModel.findAll({
        where: {
          clientId,
          status: 'In progress'
        }
      })

      if (!activeContracts.length) {
        ResponseManager(res, activeContracts).returnResponse()
      }

      ResponseManager(res, activeContracts).returnResponse()
    } catch (err) {
      console.error(err)
      ResponseManager(res).returnResponse()
    }
  }
}
