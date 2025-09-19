import express from "express";

import { JobPostController } from "../../controllers/createJob/createJobPostController.js";

export const createJobRouter = express.Router();

const jobPostController = new JobPostController();

createJobRouter.post("/contractor/job/postJob", jobPostController.jobPost);
