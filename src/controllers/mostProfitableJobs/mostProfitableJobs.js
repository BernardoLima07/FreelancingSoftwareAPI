import { JobsService } from '../../services/jobs/jobsServices.js'

const jobsServices = new JobsService()
export class MostProfitableJobsController {
  async mostProfitableJobsReport (_, res) {
    try {
      const mostProfitableJob = await jobsServices.listJobs({
        attributes: ['title', 'description', 'status', 'payment_amount'],
        orde: [['payment_amount', 'DESC']]
      })

      res
        .status(200)
        .json({
          msg: 'Most Profitable Jobs read successfully.',
          mostProfitableJob
        })
    } catch (err) {
      console.log(err)
      res.status(500).json({ msg: 'Unable to read the Most Profitable Jobs.' })
    }
  }
}
