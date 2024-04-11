import express from "express";

import { JobPostController } from "../../controllers/jobController/jobPostController.js";

export const jobRouter = express.Router();

const jobPostController = new JobPostController();

jobRouter.post("/contractor/job/postJob", jobPostController.jobPost);