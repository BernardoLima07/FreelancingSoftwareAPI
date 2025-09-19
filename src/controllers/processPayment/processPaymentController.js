import { ProcessPaymentService } from "../../services/processPayment/processPaymentServices.js";

const processPaymentService = new ProcessPaymentService();

export class PaymentController {
  async processPayment(req, res) {
    const { clientId, jobId } = req.params;

    try {
      const result = await processPaymentService.processPayment({
        clientId,
        jobId,
      });
      return res.status(200).json(result);
    } catch (err) {
      console.error(err.message);

      let status = 500;

      if (err.message === "Job not found") status = 404;
      if (err.message === "Client not found") status = 404;
      if (err.message === "Contractor not found") status = 404;
      if (err.message === "Payment cannot be processed. Job is not completed")
        status = 400;
      if (err.message === "Insufficient balance") status = 422;

      return res.status(status).json({ msg: err.message });
    }
  }
}
