import { JobModel } from '../../database/models/jobModel.js'
import { ContractModel } from '../../database/models/contractModel.js'

export class UpdateStatusController {
  async updateStatus (req, res) {
    const jobId = req.params.job_id
    const contractId = req.params.contract_id

    try {
      await JobModel.update(
        { status: 'Terminated' },
        { where: { jobId } }
      )

      await ContractModel.update(
        { status: 'Terminated' },
        { where: { contractId } }
      )

      res.status(200).json({ msg: 'Status updated successfully.' })
    } catch (err) {
      console.error(err)
      res.status(400).json({ msg: 'Unable to updated Status.' })
    }
  }
}
