import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import { connectDB } from "./database/Database.js";
import { connectGraphQL } from "./graphql/graphql.js";
import { expressMiddleware } from "@apollo/server/express4";
import morgan from "morgan";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";

config({
  path: "./.env",
});

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 4000;
const mongoURI = process.env.MONGO_URI!;

connectDB(mongoURI);

const graphqlServer = connectGraphQL();

await graphqlServer.start();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev"));

app.use("/graphql", expressMiddleware(graphqlServer));

app.get("/", (req, res) => {
  res.send("Backend Working...");
});

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page Not Found",
  });
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server Is Working on http://localhost:${port}`);
});
