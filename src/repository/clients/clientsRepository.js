import { ClientModel } from "../../models/clientModel.js";

export class ClientsRepository {
  async findAll({ limit = 10, attributes, whereType }) {
    return await ClientModel.findAll({
      where: whereType,
      attributes: attributes,
      limit,
    });
  }

  async findById(clientId) {
    return await ClientModel.findByPk(clientId);
  }

  async register({ name, email, passwordHash, balance }) {
    return await ClientModel.create({
      name,
      email,
      password: passwordHash,
      balance,
    });
  }

  async findOne(whereType) {
    return await ClientModel.findOne({
      where: whereType,
    });
  }

  async update({ clientId, updatedData }) {
    return await ClientModel.update(updatedData, { where: clientId });
  }
}
