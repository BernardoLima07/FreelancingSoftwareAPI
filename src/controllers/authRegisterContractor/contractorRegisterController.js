import bcrypt from 'bcryptjs'
import { ContractorModel } from '../../models/contractorModel.js'

export class ContractorRegisterController {
  async register (req, res) {
    const { name, email, password, balance } = req.body

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)
    const userExists = await ContractorModel.findOne({ email })

    if (userExists) {
      console.log('Exist')
    }

    try {
      const newContractor = await ContractorModel.create({
        name,
        email,
        password: passwordHash,
        balance
      })
      res
        .status(201)
        .json({ msg: 'Contractor created successfully.', contractor: newContractor })
    } catch (err) {
      console.log(err)
      res.status(400).json({ msg: 'Unable to create a Contractor.' })
    }
  }
}
