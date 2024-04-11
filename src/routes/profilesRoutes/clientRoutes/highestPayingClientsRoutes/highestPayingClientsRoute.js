import express from "express";

import { HighestPayingClientController } from "../../../../controllers/profilesController/clientController/financialInsightClient/highestPayingClient.js";

export const highestPayingClient = express.Router();

const highestPayingClientController = new HighestPayingClientController();

highestPayingClient.get(
  "/client/highestPayingClientReport",
  highestPayingClientController.highestPayingClientsReport
);
