import express from 'express';
import router from "./routes/index.js";
import authorsRouter from "./routes/authorsRouter.js";
import postsRouter from "./routes/postsRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
const app = express();
const Router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(errorHandler);
app.use(Router);

app.get("/", (req, res) => {
    res.json({ message: "Bienvenido al MiniBlog API", version: "1.0"});
});

app.use("/authors", authorsRouter);
app.use("/posts", postsRouter);

app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
export default app;