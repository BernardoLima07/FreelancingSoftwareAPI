import { JobsService } from "../../services/jobs/jobsServices.js";
import { ContractsService } from "../../services/contracts/contractsServices.js";

const jobService = new JobsService();
const contractService = new ContractsService();

export class UpdateStatusController {
  async updateStatus(req, res) {
    const jobId = req.params.job_id;
    const contractId = req.params.contract_id;

    try {
      await jobService.update({
        jobId,
        updatedData: {
          status: "Terminated",
        },
      });

      await contractService.update({
        contractId,
        status: "Terminated",
      });

      res.status(200).json({ msg: "Status updated successfully." });
    } catch (err) {
      console.error(err);
      res.status(400).json({ msg: "Unable to updated status." });
    }
  }
}
