import { ClientsService } from '../../services/clients/clientsServices.js'

const clientsServices = new ClientsService()

export class InsertMoneyController {
  async insertMoney (req, res) {
    const { balance, clientId } = req.body

    try {
      const client = await clientsServices.getClientById(clientId)

      if (!client) {
        return res.status(404).json({ msg: 'Client not found.' })
      }

      const updatedBalance = balance + client.balance
      const updatedClient = await client.update({ balance: updatedBalance })

      res.status(200).json({
        msg: 'Money inserted successfully.',
        actualMoney: updatedClient
      })
    } catch (err) {
      console.debug(err)
      res.status(401).json({ msg: 'Unable to insert money into balance.' })
    }
  }
}
