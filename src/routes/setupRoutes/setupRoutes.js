import express from 'express'

import { checkToken } from '../../middlewares/checkToken.js'

import { mostProfitableJobs } from '../mostProfitableJobs/mostProfitableRoute.js'
import { processPaymentRouter } from '../processPayment/processPaymentRoute.js'
import { createJobRouter } from '../createJob/createJob.js'
import { createContractRouter } from '../createContract/createContractRoute.js'
import { authRegisterContractorRouter } from '../authRegisterContractor/authRegisterContractorRoute.js'
import { authRegisterClientRouter } from '../authRegisterClient/authRegisterClientRoute.js'
import { authLoginContractorRouter } from '../authLoginContractor/authLoginContractorRoute.js'
import { authLoginClientRouter } from '../authLoginClient/authLoginClientRoute.js'
import { insertMoneyRouter } from '../insertMoney/insertMoneyRoute.js'
import { highestPayingClient } from '../highestPayingClients/highestPayingClientsRoute.js'
import { activeContractRouter } from '../activeContract/activeContractRoute.js'
import { especificContractRouter } from '../especificContract/especificContractRoute.js'
import { updateStatusRouter } from '../updateStatus/updateStatusRoute.js'
import { listOfJobsRouter } from '../listOfJobs/listOfJobsRoute.js'

export const setupRoutes = (app) => {
  const router = express.Router()

  const commonRoutes = [
    especificContractRouter,
    activeContractRouter,
    createJobRouter,
    mostProfitableJobs,
    highestPayingClient,
    processPaymentRouter,
    updateStatusRouter,
    insertMoneyRouter,
    listOfJobsRouter,
    mostProfitableJobs,
    processPaymentRouter,
    listOfJobsRouter,
    insertMoneyRouter,
    highestPayingClient,
    especificContractRouter,
    createJobRouter,
    createContractRouter,
  ]

  const authRoutes = [
    authRegisterClientRouter,
    authLoginClientRouter,
    authRegisterContractorRouter,
    authLoginContractorRouter,
  ]

  commonRoutes.forEach((route) => {
    router.use('/api/routes', checkToken, route)
  })

  authRoutes.forEach((route) => {
    router.use('/api/auth', route)
  })

  app.use(router)
}
