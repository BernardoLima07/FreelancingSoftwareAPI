import { ClientModel } from "../database/models/clientModel.js";
import { ContractorModel } from "../database/models/contractorModel.js";
import { JobModel } from "../database/models/jobModel.js";
import { ContractModel } from "../database/models/contractModel.js";
import { sequelize } from "../database/config.js";

export async function seed() {
  try {
    await sequelize.sync({ force: true });

    const clients = [
      { name: "João", email: "joao@example.com", password: "123456" },
      { name: "Maria", email: "maria@example.com", password: "abcdef" },
    ];

    await Promise.all(clients.map((client) => ClientModel.create(client)));

    const contractors = [
      { name: "Pedro", email: "pedro@example.com", password: "789012" },
      { name: "Ana", email: "ana@example.com", password: "uvwxyz" },
    ];

    await Promise.all(
      contractors.map((contractor) => ContractorModel.create(contractor))
    );

    const jobs = [
      {
        contractor_id: 1,
        title: "Desenvolvedor Web",
        description: "Desenvolvimento de sites e aplicativos web",
        payment_amount: 5000,
      },
      {
        contractor_id: 2,
        title: "Designer Gráfico",
        description: "Criação de logotipos e identidade visual",
        payment_amount: 3000,
      },
    ];

    await Promise.all(jobs.map((job) => JobModel.create(job)));

    const contracts = [
      { client_id: 1, contractor_id: 1, job_id: 1, start_date: new Date(), end_date: "2024-05-12"},
      { client_id: 2, contractor_id: 2, job_id: 2, start_date: new Date(), end_date: "2024-06-25"},
    ];

    await Promise.all(
      contracts.map((contract) => ContractModel.create(contract))
    );

    console.log("Seed created successfully.");
  } catch (error) {
    console.error("Unable to create a seed:", error);
  }
}

seed();
