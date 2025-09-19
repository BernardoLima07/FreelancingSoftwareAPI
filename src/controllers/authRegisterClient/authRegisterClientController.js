import { ClientsService } from '../../services/clients/clientsServices.js'

const clientService = new ClientsService()

export class ClientRegisterController {
  async register (req, res) {
    const { name, email, password, balance } = req.body

    try {
      const newClient = await clientService.registerClient({
        name,
        email,
        password,
        balance
      })

      res
        .status(201)
        .json({ msg: 'Client created successfully.', client: newClient })
    } catch (err) {
      console.log(err)
      res.status(400).json({ msg: 'Unable to create a Client.' })
    }
  }
}
