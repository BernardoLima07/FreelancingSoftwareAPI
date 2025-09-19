import { ContractModel } from '../../models/contractModel.js'

export class ContractPostController {
  async contractPost (req, res) {
    try {
      const newContract = await ContractModel.create(req.body)
      res
        .status(201)
        .json({ msg: 'Contract created successfully.', contract: newContract })
    } catch (err) {
      console.log(err)
      res.status(500).json({ msg: 'Unable to create a Contract.' })
    }
  }
}
