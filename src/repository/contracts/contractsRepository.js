import { ContractModel } from "../../models/contractModel.js"

export class ContractsRepository {
    async findAll({limit = 10, attributes, whereType}) {
        return await ContractModel.findAll({
            where: whereType,
            attributes: attributes,
            limit
        })
    }

    async findById(contractorId) {
        return await ContractModel.findByPk(contractorId);
    }

    async create(jobData) {
        return await ContractModel.create(jobData)
    }

    async findOne(whereType) {
        return await ContractModel.findOne({
            where: whereType
        })
    }

    async update(contractId, updatedData) {
        return await ContractModel.update(updatedData, { where: contractId })
    }
}