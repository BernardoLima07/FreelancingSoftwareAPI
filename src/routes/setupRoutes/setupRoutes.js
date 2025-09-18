import express from "express";

import { registerClientRouter } from "../profilesRoutes/authRoutes/authClients/registerClientRoute.js";
import { loginClientRouter } from "../profilesRoutes/authRoutes/authClients/loginClientRoute.js";

import { registerContractorRouter } from "../profilesRoutes/authRoutes/authContractors/registerContractorRoute.js";
import { loginContractorRouter } from "../profilesRoutes/authRoutes/authContractors/loginContractorRoute.js";

import { especificContractRouter } from "../contractRoutes/contractManagementRoutes/especificContractRoute.js";
import { activeContractRouter } from "../contractRoutes/contractManagementRoutes/activeContractRoute.js";

import { mostLucrativeJobs } from "../jobRoutes/financialInsightsRoutes/financialInsightsRoute.js";
import { highestPayingClient } from "../profilesRoutes/clientRoutes/highestPayingClientsRoutes/highestPayingClientsRoute.js";

import { contractRouter } from "../contractRoutes/contractRoute.js";
import { jobRouter } from "../jobRoutes/jobRoute.js";
import { paymentRouter } from "../profilesRoutes/clientRoutes/processPaymentRoute/processPaymentRoute.js";
import { updateStatusRouter } from "../updateStatusRoutes/updateStatusRoute.js";
import { checkToken } from "../../middlewares/checkToken.js";
import { insertMoneyRouter } from "../profilesRoutes/clientRoutes/insertMoneyRoutes/insertMoneyRoute.js";
import { listOfJobsRouter } from "../jobRoutes/listOfJobsRoutes/listOfJobsRoute.js";

export const setupRoutes = (app) => {
  const routes = [
    contractRouter,
    especificContractRouter,
    activeContractRouter,
    jobRouter,
    mostLucrativeJobs,
    highestPayingClient,
    paymentRouter,
    updateStatusRouter,
    insertMoneyRouter,
    listOfJobsRouter
  ];

  const router = express.Router();
  routes.forEach((route) => {
    router.use(
      "/api/auth",
      registerClientRouter,
      loginClientRouter,
      registerContractorRouter,
      loginContractorRouter,
    );
    router.use("/api/routes", checkToken, route);
  });

  app.use(router);
};
