import { Router } from "express";
import pool from "../db/config.js";

const router = Router();

let authors = [
    {
        id: 1,
        name: 'Ana García',
        email: 'ana@example.com',
        bio: 'Desarrolladora full-stack apasionada por Node.js'
    },
    {
        id: 2,
        name: 'Carlos Ruiz',
        email: 'carlos@example.com',
        bio: 'Escritor técnico especializado en bases de datos'
    },
    {
        id: 3,
        name: 'María López',
        email: 'maria@example.com',
        bio: 'Ingeniera de software con foco en APIs REST'
    }
];

router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM authors ORDER BY name");
        res.json(result.rows);
    } catch (error) {
        console.log("Error al obtener autores:", error);
        res.status(500).json({ error: "Error al obtener autores" });
    }
});

router.get ("/:id", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM authors WHERE id = $1", [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Autor no encontrado" });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error al obtener autor:", error);
        res.status(500).json({ error: "Error al obtener autor" });
    }
});

router.post("/", async (req, res) => {
    const { name, email,bio } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Nombre y Email son requeridos" });
    }

    try {
        const result = await pool.query(
            "INSERT INTO authors (name, email, bio) VALUES ($1, $2, $3) RETURNING *",
            [name, email, bio || null],
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log("Error al crear autor:", error);

        if (error.code === "23505") {
            return res.status(409).json({ error: "El email ya está en uso" });
        }
        res.status(500).json({ error: "Error al crear autor" });
    }
});

router.put("/:id", async (req, res) => {
    const { name, email, bio } = req.body;

    try {
        const result = await pool.query(
            "UPDATE authors SET name = COALESCE($1, name), email = COALESCE($2, email), bio = COALESCE($3, bio) WHERE id = $4 RETURNING *",
            [name, email, bio, req.params.id],
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Autor no encontrado" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error al actualizar autor:", error);
        if (error.code === "23505") {
            return res.status(409).json({ error: "El email ya está en uso" });
        }
        res.status(500).json({ error: "Error al actualizar autor" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const result = await pool.query("DELETE FROM authors WHERE id = $1", [req.params.id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Autor no encontrado" });
        }

        res.json({ message: "Autor eliminado exitosamente" });
    } catch (error) {
        console.log("Error al eliminar autor:", error);
        res.status(500).json({ error: "Error al eliminar autor" });
    }
});

export default router;