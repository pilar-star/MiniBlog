import { describe, test, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("GET /authors", () => {
    test("devuelve todos los autores con datos válidos", async () => {
        const response = await request(app)
        .get("/authors");

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(3);
    });
});

describe("GET /authors/:id", () => {
    test("devuelve un autor por ID con datos válidos", async () => {
        const response = await request(app)
        .get("/authors/1");

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("id");
        expect(response.body.name).toBe("Juan Pérez");
        expect(response.body.email).toBe("juanperez@example.com");
    });
});

describe("POST /authors", () => {
    test("crea autor con datos válidos", async () => {
        const response = await request(app)
        .post("/authors")
        .send({ name: "Juan Pérez", email: "juanperez@example.com" });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body.name).toBe("Juan Pérez");
        expect(response.body.email).toBe("juanperez@example.com");
    });
    test("rechaza request sin nombre", async () => {
        const response = await request(app)
        .post("/authors")
        .send({ email: "juanperez@example.com" });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toContain("requerido");
    });
    test("rechaza request sin email", async () => {
        const response = await request(app)
        .post("/authors")
        .send({ name: "Juan Pérez" });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toContain("requerido");
    });
    test("rechaza request vacío", async () => {
        const response = await request(app)
        .post("/authors")
        .send({});

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toContain("requerido");
    });
});

describe("PUT /authors/:id", () => {
    test("actualiza un autor existente", async () => {
        const response = await request(app)
        .put("/authors/1")
        .send({ name: "Juan Pérez Actualizado", email: "juanperez.updated@example.com" });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("id");
        expect(response.body.name).toBe("Juan Pérez Actualizado");
        expect(response.body.email).toBe("juanperez.updated@example.com");
    });
    test("rechaza request sin nombre", async () => {
        const response = await request(app)
        .put("/authors/1")
        .send({ email: "juanperez@example.com" });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toContain("requerido");
    });
    test("rechaza request sin email", async () => {
        const response = await request(app)
        .put("/authors/1")
        .send({ name: "Juan Pérez" });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toContain("requerido");
    });
    test("rechaza request vacío", async () => {
        const response = await request(app)
        .put("/authors/1")
        .send({});

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toContain("requerido");
    });
});

describe("DELETE /authors/:id", () => {
    test("elimina un autor existente", async () => {
        const response = await request(app)
        .delete("/authors/1");

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Autor eliminado");
    });
});