import { ContractsService } from '../../services/contracts/contractsServices.js'

const contractService = new ContractsService()

export class ContractPostController {
  async contractPost (req, res) {
    try {
      const newContract = await contractService.createContract(req.body)
      res
        .status(201)
        .json({ msg: 'Contract created successfully.', contract: newContract })
    } catch (err) {
      console.debug(err)
      res.status(500).json({ msg: 'Unable to create a Contract.' })
    }
  }
}
