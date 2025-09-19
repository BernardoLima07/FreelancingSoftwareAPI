import { ContractsRepository } from "../../repository/contracts/contractsRepository.js";

export class ContractsService {
  constructor() {
    this.contractsRepository = new ContractsRepository();
  }

  async listContracts({
    limit = 10,
    attributes = ["id", "title", "status", "payment_amount"],
    whereType = {},
  }) {
    return this.contractsRepository.findAll({
      limit: limit,
      attributes: attributes,
      whereType: whereType,
    });
  }

  async getContractById(contractId) {
    const contract = await this.contractsRepository.findById(contractId);

    if (!contract) throw new Error(`Contract with ID ${contractId} not found`);

    return contract;
  }

  async createContract(contractData) {
    if (!contractData.title || !contractData.payment_amount) {
      throw new Error("Title and payment_amount are required");
    }

    return this.contractsRepository.create(contractData);
  }

  async update({ contractId, updatedData }) {
    return await this.contractsRepository.update({
      contract_id: contractId,
      updatedData: updatedData,
    });
  }

  async findOne(whereType) {
    return this.contractsRepository.findOne(whereType);
  }
}
