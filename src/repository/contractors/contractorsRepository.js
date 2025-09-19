import { ContractorModel } from '../../models/contractorModel.js'

export class ContractorsRepository {
  async findAll({ limit = 10, attributes, whereType }) {
    return await ContractorModel.findAll({
      where: whereType,
      attributes,
      limit,
    })
  }

  async findById(contractorId) {
    return await ContractorModel.findByPk(contractorId)
  }

  async register({ name, email, passwordHash, balance }) {
    return await ContractorModel.create({
      name,
      email,
      password: passwordHash,
      balance,
    })
  }

  async findOne(whereType) {
    return await ContractorModel.findOne({
      where: whereType,
    })
  }

  async update({ contractorId, updatedData }) {
    return await ContractorModel.update({
      updatedData,
      where: contractorId,
    })
  }
}
