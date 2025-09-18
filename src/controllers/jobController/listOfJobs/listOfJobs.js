import { JobModel } from "../../../database/models/jobModel.js";

export class ListOfJobsController {
    async listJobs(req, res) {
        try {
            const listJobs = await JobModel.findAll({
                attributes: ["title", "description", "status", "payment_amount"],
                order: [["payment_amount", "DESC"]],
                limit: 10,
            });
            res.status(201).json({ msg: "Jobs listed successfully.", listJobs });
        } catch (err) {
            console.log(err)
            res.status(500).json({ msg: "Unable to list Jobs." });
        }
    }
}
