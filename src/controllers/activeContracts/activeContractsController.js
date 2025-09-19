import { ContractModel } from '../../models/contractModel.js'

export class ActiveContractController {
  async activeContract (req, res) {
    const clientId = req.params.client_id

    try {
      const activeContracts = await ContractModel.findAll({
        where: {
          client_id: clientId,
          status: 'In progress'
        }
      })

      if (!activeContracts.length) {
        return res.status(404).json({
          msg: 'No active contracts found for the client.'
        })
      }

      res.status(200).json({
        msg: 'Active contracts read successfully.',
        contracts: activeContracts
      })
    } catch (err) {
      console.error(err)
      res.status(500).json({ msg: 'Unable to read the active contracts.' })
    }
  }
}
