import { JobModel } from "../../database/models/jobModel.js";
import { ContractModel } from "../../database/models/contractModel.js";

export class UpdateStatusController {
  async updateStatus(req, res) {
    const job_id = req.params.job_id;
    const contract_id = req.params.contract_id;

    try {
      await JobModel.update(
        { status: "Terminated" },
        { where: { job_id: job_id } }
      );

      await ContractModel.update(
        { status: "Terminated" },
        { where: { contract_id: contract_id } }
      );

      res.status(200).json({ msg: "Status updated successfully." });
    } catch (err) {
      console.error(err);
      res.status(400).json({ msg: "Unable to updated Status." });
    }
  }
}
