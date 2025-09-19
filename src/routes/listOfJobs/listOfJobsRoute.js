import express from 'express'

import { ListOfJobsController } from '../../controllers/listOfJobs/listOfJobsController.js'

export const listOfJobsRouter = express.Router()

const listOfJobsController = new ListOfJobsController()

listOfJobsRouter.get('/contractor/jobs', listOfJobsController.listJobs)
