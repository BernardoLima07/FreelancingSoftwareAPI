import express from "express";

import { ContractorRegisterController } from "../../controllers/authRegisterContractor/contractorRegisterController.js";

export const authRegisterContractorRouter = express.Router();

const contractorRegisterController = new ContractorRegisterController();
authRegisterContractorRouter.post(
  "/contractor/register",
  contractorRegisterController.register,
);
