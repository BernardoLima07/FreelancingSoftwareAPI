import { ClientModel } from '../../models/clientModel.js'

export class HighestPayingClientController {
  async highestPayingClientsReport (req, res) {
    const { updatedAt } = req.body
    try {
      const highestPayingClients = await ClientModel.findAll({
        where: {
          updatedAt
        },
        attributes: ['name', 'email', 'balance'],
        order: [['balance', 'DESC']],
        limit: 10
      })

      res.status(200).json({
        msg: 'Highest Paying Clients read successfully.',
        highestPayingClients
      })
    } catch (err) {
      console.log(err)
      res
        .status(400)
        .json({ msg: 'Unable to read the Highest Paying Clients.' })
    }
  }
}
