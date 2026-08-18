import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { createHandler } from "graphql-http/lib/use/express";

import { connectDatabase } from "./config/database.js";
import { seedLoans } from "./services/seedLoans.js";

import loanRoutes from "./routes/loanRoutes.js";

import {
  schema,
  root
} from "./graphql/schema.js";

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

/*
 * Health check
 */
app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    service: "mortgage-loan-service"
  });
});

/*
 * REST API
 */
app.use("/api/loans", loanRoutes);

/*
 * GraphQL API
 *
 * graphql-http is the modern replacement
 * for the deprecated express-graphql package.
 */
app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue: root
  })
);

const PORT = process.env.PORT || 4000;

async function startServer() {
  await connectDatabase();

  await seedLoans();

  app.listen(PORT, () => {
    console.log(`
Mortgage Loan Service running.

REST:
http://localhost:${PORT}/api/loans

GraphQL:
http://localhost:${PORT}/graphql

Health:
http://localhost:${PORT}/health
    `);
  });
}

startServer();