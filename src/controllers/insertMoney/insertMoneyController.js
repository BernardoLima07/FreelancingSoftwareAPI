import { ClientModel } from '../../models/clientModel.js'

export class InsertMoneyController {
  async insertMoney (req, res) {
    const { balance } = req.body
    const { clientId } = req.params
    try {
      const client = await ClientModel.findByPk(clientId)

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
      console.log(err)
      res.status(401).json({ msg: 'Unable to insert money into balance.' })
    }
  }
}
