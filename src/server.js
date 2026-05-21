import "dotenv/config.js";
import app from "./app.js";
import express from "express";
import router from "./routes/index.js";
import authorsRouter from "./routes/authorsRouter.js";
import postsRouter from "./routes/postsRouter.js";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

const swaggerDocument = YAML.load("./openapi.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT || 3000;
