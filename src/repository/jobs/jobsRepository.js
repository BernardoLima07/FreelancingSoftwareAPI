import { JobModel } from '../../models/jobModel.js'

export class JobRepository {
    async findAll({ limit = 10,
        attributes,
        order,
        whereType }
    ) {
        return JobModel.findAll({
            where: whereType,
            attributes: attributes,
            order: order,
            limit
        })
    }

    async findById(jobId) {
        return JobModel.findByPk(jobId)
    }

    async findOne(whereType) {
        return await ContractorModel.findOne({
            where: whereType
        })
    }

    create(jobData) {
        return JobModel.create(jobData)
    }

    async update({ jobId, updateData }) {
        return await JobModel.update(updateData, { where: { jobId } })
    }
}