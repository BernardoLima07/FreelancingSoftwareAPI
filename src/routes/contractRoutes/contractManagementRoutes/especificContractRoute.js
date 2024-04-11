import express from "express";

import { EspecificContractController } from "../../../controllers/contractController/contractManagement/especificContractController.js";

export const especificContractRouter = express.Router();
const contractReadController = new EspecificContractController();

especificContractRouter.get(
  "/contract/especificContracts",
  contractReadController.especificContract
);
