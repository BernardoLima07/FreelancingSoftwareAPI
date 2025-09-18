import { JobModel } from '../../../database/models/jobModel.js'

export class MostProfitableJobsController {
  async mostProfitableJobsReport (req, res) {
    try {
      const mostProfitableJob = await JobModel.findAll({
        attributes: ['title', 'description', 'status', 'payment_amount'],
        order: [['payment_amount', 'DESC']],
        limit: 10
      })

      res.status(200).json({ msg: 'Most Profitable Jobs read successfully.', mostProfitableJob })
    } catch (err) {
      console.log(err)
      res.status(500).json({ msg: 'Unable to read the Most Profitable Jobs.' })
    }
  }
}
