import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { configDotenv } from "dotenv";

import { ClientsRepository } from "../../repository/clients/clientsRepository.js";

export class ClientsService {
  constructor() {
    this.clientsRepository = new ClientsRepository();
  }

  async listClients({
    limit = 10,
    attributes = ["id", "name", "email", "balance"],
    whereType = {},
  }) {
    return this.clientsRepository.findAll({
      limit,
      attributes,
      whereType,
    });
  }

  async getClientById(clientId) {
    const client = await this.clientsRepository.findById(clientId);

    if (!client) throw new Error(`Client with ID ${clientId} not found`);

    return client;
  }

  async registerClient({ name, email, password, balance = 0 }) {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    if (!name || !email || !passwordHash) {
      throw new Error("Name, email and password are required");
    }

    const existingClient = await this.clientsRepository.findOne({
      email,
    });

    if (existingClient) throw new Error("Email already registered");

    return this.clientsRepository.register({
      name,
      email,
      passwordHash,
      balance,
    });
  }

  async loginClient({ email, password }) {
    if (!email || !password) {
      throw new Error("Name, email and password are required");
    }

    const user = await this.findOne({
      email,
    });

    if (!user) {
      throw new Error("User not found");
    }

    const checkedPassword = await bcrypt.compare(password, user.password);

    if (!checkedPassword) {
      throw new Error("Invalid password");
    }

    try {
      configDotenv();

      const SECRET_KEY = process.env.SECRET_KEY;

      const token = jwt.sign(
        {
          user_id: user.user_id,
        },
        SECRET_KEY,
      );

      return { user, token };
    } catch (err) {
      console.debug(err);

      throw new Error("Error generating token.");
    }
  }

  async updateClient({ clientId, updatedData }) {
    return await this.clientsRepository.update({
      client_id: clientId,
      updatedData,
    });
  }

  async findOne(whereType) {
    return this.clientsRepository.findOne(whereType);
  }
}
