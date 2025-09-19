import express from "express";

import { PaymentController } from "../../controllers/processPayment/processPaymentController.js";

export const processPaymentRouter = express.Router();

const paymentController = new PaymentController();

processPaymentRouter.post(
  "/client/payment/:client_id/job/:job_id",
  paymentController.processPayment,
);
