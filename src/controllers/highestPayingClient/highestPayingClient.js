import { ClientsService } from '../../services/clients/clientsServices.js'

const clientsServices = new ClientsService()

export class HighestPayingClientController {
  async highestPayingClientsReport(req, res) {
    const { updatedAt } = req.body
    try {
      const highestPayingClients = await clientsServices.listClients({
        whereType: {
          updatedAt,
        },
        attributes: ['name', 'email', 'balance'],
        order: [['balance', 'DESC']],
      })

      res.status(200).json({
        msg: 'Highest Paying Clients read successfully.',
        highestPayingClients,
      })
    } catch (err) {
      console.debug(err)
      res.status(400).json({ msg: 'Unable to read the Highest Paying Clients.' })
    }
  }
}
