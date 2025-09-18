import express from "express";

import { PaymentController } from "../../../../controllers/profilesController/clientController/processPayment/processPaymentController.js";

export const paymentRouter = express.Router();

const paymentController = new PaymentController();

paymentRouter.post(
  "/client/payment/:client_id/job/:job_id",
  paymentController.processPayment
);
