import { JobModel } from "../../database/models/jobModel.js";

export class JobPostController {
  async jobPost(req, res) {
    try {
      const newJob = await JobModel.create(req.body);
      res.status(201).json({ msg: "Job created successfully.", newJob });
    } catch (err) {
      console.log(err)
      res.status(500).json({ msg: "Unable to create a Job."});
    }
  }
}
