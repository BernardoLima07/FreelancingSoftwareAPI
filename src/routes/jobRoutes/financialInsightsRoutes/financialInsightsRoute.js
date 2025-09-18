import express from 'express'

import { MostProfitableJobsController } from '../../../controllers/jobController/financialInsightsJobs/mostProfitableJobs.js'

export const mostLucrativeJobs = express.Router()

const mostProfitableJobsController = new MostProfitableJobsController()

mostLucrativeJobs.get('/contractor/job/mostProfitableJobsReport', mostProfitableJobsController.mostProfitableJobsReport)
