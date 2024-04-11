import express from "express";

import { ContractPostController } from "../../controllers/contractController/contractPostController.js";

export const contractRouter = express.Router();

const contractPostController = new ContractPostController();

contractRouter.post("/contract/postContract", contractPostController.contractPost);
