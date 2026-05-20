import {  describe, test, expect, beforeEach, afterAll } from "vitest";
import request from "supertest";
import app from "../src/app.js";
import pool from "../src/db/config.js";

beforeEach(async () => {
    await pool.query("TRUNCATE TABLE authors RESTART IDENTITY CASCADE");
    await pool.query('INSERT INTO authors (name, email, bio) VALUES(\'Ana García\', \'ana@example.com\', \'Desarrolladora full-stack apasionada por Node.js\'),(\'Carlos Ruiz\', \'carlos@example.com\', \'Escritor técnico especializado en bases de datos\'),(\'María López\', \'maria@example.com\', \'Ingeniera de software con foco en APIs REST\');');
});

afterAll(async () => {
    await pool.end();
});

describe("GET /authors", () => {
    test("devuelve todos los autores", async () => {
        const response = await request(app).get("/authors");
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(3);
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("name");
        expect(response.body[0]).toHaveProperty("email");
        expect(response.body[0]).toHaveProperty("bio");
    });
});
describe("GET /authors/:id", () => {
    test("devuelve un autor por ID", async () => {
        const response = await request(app).get("/authors/1");
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("id", 1);
        expect(response.body).toHaveProperty("name", "Ana García");
        expect(response.body).toHaveProperty("email", "ana@example.com");
        expect(response.body).toHaveProperty("bio", "Desarrolladora full-stack apasionada por Node.js");
    });
});
describe("POST /authors", () => {
    test("crea un nuevo autor", async () => {
        const newAuthor = {
            name: "Laura Martínez",
            email: "laura@example.com",
            bio: "Ingeniera de software con experiencia en desarrollo web"
        };
        const response = await request(app).post("/authors").send(newAuthor);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("name", "Laura Martínez");
        expect(response.body).toHaveProperty("email", "laura@example.com");
        expect(response.body).toHaveProperty("bio", "Ingeniera de software con experiencia en desarrollo web");
    });
});
describe("PUT /authors/:id", () => {
    test("actualiza un autor existente", async () => {
        const updatedAuthor = {
            name: "Ana García Actualizada",
            email: "ana.updated@example.com",
            bio: "Desarrolladora full-stack apasionada por Node.js y React"
        };
        const response = await request(app).put("/authors/1").send(updatedAuthor);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("id", 1);
        expect(response.body).toHaveProperty("name", "Ana García Actualizada");
        expect(response.body).toHaveProperty("email", "ana.updated@example.com");
        expect(response.body).toHaveProperty("bio", "Desarrolladora full-stack apasionada por Node.js y React");
    });
});
describe("DELETE /authors/:id", () => {
    test("elimina un autor existente", async () => {
        const response = await request(app).delete("/authors/1");
        expect(response.statusCode).toBe(204);
    });
});