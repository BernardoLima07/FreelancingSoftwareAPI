import { JobsService } from '../../services/jobs/jobsServices.js'

const jobsServices = new JobsService()

export class JobPostController {
  async jobPost (req, res) {
    try {
      const newJob = await jobsServices.createJob(req.body)

      res.status(201).json({ msg: 'Job created successfully.', newJob })
    } catch (err) {
      console.debug(err)
      res.status(500).json({ msg: 'Unable to create a Job.' })
    }
  }
}
