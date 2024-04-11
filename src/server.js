import { setupRoutes } from "./routes/setupRoutes/setupRoutes.js";
import { seed } from "./seed/seed.js";
import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

app.use(express.json());

import { sequelize } from "./database/config.js";
sequelize
  .sync()
  .then(() => {
    console.log("Database listening on...");
    return seed();
  })
  .then(() => {
    const PORT = process.env.API_PORT;
    app.listen(PORT, () => {
      console.log("API listening on...");
    });

    setupRoutes(app);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
