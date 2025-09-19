import { ClientsRepository } from '../../repository/clients/clientsRepository.js'
import { ContractorsRepository } from '../../repository/contractors/contractorsRepository.js'
import { JobRepository } from '../../repository/jobs/jobsRepository.js'

export class ProcessPaymentService {
  constructor () {
    this.clientRepository = new ClientsRepository()
    this.contractorRepository = new ContractorsRepository()
    this.jobRepository = new JobRepository()
  }

  async processPayment ({ clientId, jobId }) {
    const job = await this.jobRepository.findById(jobId)
    if (!job) throw new Error('Job not found')

    if (job.status !== 'Terminated') {
      throw new Error('Payment cannot be processed. Job is not completed')
    }

    const contractor = await this.contractorRepository.findById(
      job.contractor_id
    )
    if (!contractor) throw new Error('Contractor not found')

    const client = await this.clientRepository.findById(clientId)
    if (!client) throw new Error('Client not found')

    if (client.balance < job.payment_amount) {
      throw new Error('Insufficient balance')
    }

    contractor.balance += job.payment_amount
    client.balance -= job.payment_amount

    await contractor.save()
    await client.save()

    return {
      msg: 'Payment processed successfully',
      contractor: {
        id: contractor.contractor_id,
        balance: contractor.balance
      },
      client: {
        id: client.client_id,
        balance: client.balance
      }
    }
  }
}
