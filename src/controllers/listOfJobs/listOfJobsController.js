import { JobsService } from '../../services/jobs/jobsServices.js'

const jobsServices = new JobsService()

export class ListOfJobsController {
  async listJobs(_, res) {
    try {
      const listJobs = await jobsServices.listJobs({
        attributes: ['title', 'description', 'status', 'payment_amount'],
        order: [['payment_amount', 'DESC']],
        limit: 10,
      })

      res.status(200).json({ msg: 'Jobs listed successfully.', listJobs })
    } catch (err) {
      console.log(err)
      res.status(500).json({ msg: 'Unable to list Jobs.' })
    }
  }
}
