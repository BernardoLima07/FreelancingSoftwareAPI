import { JobRepository } from "../../repository/jobs/jobsRepository.js";

export class JobsService {
  constructor() {
    this.jobRepository = new JobRepository();
  }

  async listJobs({ limit = 10, attributes, order, whereType }) {
    return await this.jobRepository.findAll({
      limit,
      attributes,
      order,
      whereType,
    });
  }

  async createJob(jobData) {
    if (!jobData.title || !jobData.payment_amount) {
      throw new Error("Title and payment amount are required");
    }
    return await this.jobRepository.create(jobData);
  }

  async update({ jobId, updatedData }) {
    return await this.jobRepository.update({
      jobId,
      updateData: updatedData,
    });
  }
}
