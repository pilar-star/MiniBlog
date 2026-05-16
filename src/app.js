import express from 'express';
const app = express();

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    res.json({ message: "Bienvenio al MiniBlog API", version: "1.0"});
});

app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).json({ error: "Error interno del servidor" });
});

export default app;