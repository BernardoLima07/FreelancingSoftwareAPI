import express from "express";

import { UpdateStatusController } from "../../controllers/updateStatus/updateStatusController.js";

export const updateStatusRouter = express.Router();

const updateStatusController = new UpdateStatusController();

updateStatusRouter.put(
  "/finished/contract/:contract_id/job/:job_id",
  updateStatusController.updateStatus,
);
