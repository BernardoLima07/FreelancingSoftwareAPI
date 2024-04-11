import { ContractorModel } from "../../../../database/models/contractorModel.js";
import { JobModel } from "../../../../database/models/jobModel.js";
import { ClientModel } from "../../../../database/models/clientModel.js";

export class PaymentController {
  async processPayment(req, res) {
    const client_id = req.params.client_id;
    const job_id = req.params.job_id;
    try {
      const job = await JobModel.findByPk(job_id);
      if (!job) {
        return res.status(404).json({ msg: "Job not found." });
      }

      if (job.status === "Terminated") {
        const contractor = await ContractorModel.findByPk(job.contractor_id);

        const client = await ClientModel.findByPk(client_id);
        if (!client) {
          return res.status(404).json({ msg: "Client not found." });
        }

        contractor.balance += job.payment_amount;
        client.balance -= job.payment_amount;

        await contractor.save();
        await client.save();

        res.status(200).json({ msg: "Payment processed successfully." });
      } else {
        res.status(400).json({ msg: "Payment cannot be processed. Job is not completed." });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Error processing payment." });
    }
  }
}
