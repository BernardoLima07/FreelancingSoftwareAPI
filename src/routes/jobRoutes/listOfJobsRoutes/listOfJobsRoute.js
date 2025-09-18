import express from 'express';

import { ListOfJobsController } from "../../../controllers/jobController/listOfJobs/listOfJobs.js";

export const listOfJobsRouter = express.Router();

const listOfJobsController = new ListOfJobsController()

listOfJobsRouter.get("/contractor/jobs", listOfJobsController.listJobs);
