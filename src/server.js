import dotenv from "dotenv";
dotenv.config();

import express from "express";
import router from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    res.json({ message: "Bienvenio al MiniBlog API", version: "1.0"});
});

app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

