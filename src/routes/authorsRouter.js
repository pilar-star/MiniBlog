import { Router } from "express";
import pool from "../db/config.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM authors ORDER BY name");
        res.json(result.rows);
    } catch (error) {
        console.log("Error al obtener autores:", error);
        res.status(500).json({ error: "Error al obtener autores" });
    }
});

export default router;