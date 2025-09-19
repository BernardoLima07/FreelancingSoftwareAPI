import { ContractorModel } from '../../models/contractorModel.js'
import { JobModel } from '../../models/jobModel.js'
import { ClientModel } from '../../models/clientModel.js'

export class PaymentController {
  async processPayment (req, res) {
    const clientId = req.params.clientId
    const jobId = req.params.jobId
    try {
      const job = await JobModel.findByPk(jobId)
      if (!job) {
        return res.status(404).json({ msg: 'Job not found.' })
      }

      if (job.status === 'Terminated') {
        const contractor = await ContractorModel.findByPk(job.contractor_id)

        const client = await ClientModel.findByPk(clientId)
        if (!client) {
          return res.status(404).json({ msg: 'Client not found.' })
        }

        contractor.balance += job.payment_amount
        client.balance -= job.payment_amount

        await contractor.save()
        await client.save()

        res.status(200).json({ msg: 'Payment processed successfully.' })
      } else {
        res.status(400).json({ msg: 'Payment cannot be processed. Job is not completed.' })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({ msg: 'Error processing payment.' })
    }
  }
}
