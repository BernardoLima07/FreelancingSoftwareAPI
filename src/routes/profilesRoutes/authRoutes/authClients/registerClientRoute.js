import express from "express";

import { ClientRegisterController } from "../../../../controllers/profilesController/authController/authClients/clientRegisterController.js";

export const registerClientRouter = express.Router();

const clientRegisterController = new ClientRegisterController();
registerClientRouter.post("/client/registerClient", clientRegisterController.register);
