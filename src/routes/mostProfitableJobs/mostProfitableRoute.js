import express from 'express'

import { MostProfitableJobsController } from '../../controllers/mostProfitableJobs/mostProfitableJobs.js'

export const mostProfitableJobs = express.Router()

const mostProfitableJobsController = new MostProfitableJobsController()

mostProfitableJobs.get(
  '/contractor/job/mostProfitableJobsReport',
  mostProfitableJobsController.mostProfitableJobsReport
)
