import "dotenv/config.js";
import app from "./app.js";
import express from "express";
import router from "./routes/index.js";
import authorsRouter from "./routes/authorsRouter.js";
import postsRouter from "./routes/postsRouter.js";

const PORT = process.env.PORT || 3000;
