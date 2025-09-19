import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { configDotenv } from 'dotenv'

import { ContractorsRepository } from '../../repository/contractors/contractorsRepository.js'

export class ContractorsService {
  constructor () {
    this.contractorsRepository = new ContractorsRepository()
  }

  async listContractors ({
    limit = 10,
    attributes = ['id', 'name', 'email', 'balance'],
    whereType = {}
  }) {
    return this.contractorsRepository.findAll({
      limit,
      attributes,
      whereType
    })
  }

  async getContractorById (contractorId) {
    const contractor = await this.contractorsRepository.findById(contractorId)

    if (!contractor) { throw new Error(`Contractor with ID ${contractorId} not found`) }

    return contractor
  }

  async registerContractor ({ name, email, password, balance = 0 }) {
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    if (!name || !email || !passwordHash) {
      throw new Error('Name, email and password are required')
    }

    const existingContractor = await this.contractorsRepository.findOne({
      email
    })

    if (existingContractor) throw new Error('Email already registered')

    return this.contractorsRepository.register({
      name,
      email,
      passwordHash,
      balance
    })
  }

  async loginContractor ({ email, password }) {
    if (!email || !password) {
      throw new Error('Name, email and password are required')
    }

    const user = await this.findOne({
      email
    })

    if (!user) {
      throw new Error('User not found')
    }

    const checkedPassword = await bcrypt.compare(password, user.password)

    if (!checkedPassword) {
      throw new Error('Invalid password')
    }

    try {
      configDotenv()

      const SECRET_KEY = process.env.SECRET_KEY

      const token = jwt.sign(
        {
          user_id: user.user_id
        },
        SECRET_KEY
      )

      return { user, token }
    } catch (err) {
      console.debug(err)

      throw new Error('Error generating token.')
    }
  }

  async updateContractor ({ contractorId, updatedData }) {
    return await this.contractorsRepository.update({
      contractor_id: contractorId,
      updatedData
    })
  }

  async findOne (whereType) {
    return this.contractorsRepository.findOne(whereType)
  }
}
