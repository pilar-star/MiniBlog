import { describe, test, expect } from "vitest";
import { validarId, validarNombre, validarEmail } from "../src/utils/validators.js";

describe("Validators", () => {
    describe("validarId", () => {
        test("rechaza ID nulo", () => {
            expect(validarId(null)).toBe("El campo de ID es obligatorio.");
        });
        test("rechaza ID negativo", () => {
            expect(validarId(-1)).toBe("El ID debe ser un número positivo.");
        });
        test("acepta ID valido", () => {
            expect(validarId(1)).toBe(null);
        });
        test("rechaza NaN", () => {
            expect(validarId("NaN")).toContain("número");
        });
    });
    
    describe("validarNombre", () => {
        test("acepta nombre valido", () => {
            expect(validarNombre("John")).toBe(null);
        });
        test("rechaza nombre undefined", () => {
            expect(validarNombre(undefined)).toContain("requerido");
        });
        test("rechaza nombre vacío", () => {
            expect(validarNombre("")).toContain("requerido");
        });
        test("rechaza nombre nulo", () => {
            expect(validarNombre(null)).toContain("requerido");
        });
        test("rechaza nombre de 1 carácter", () => {
            expect(validarNombre("J")).toContain("entre 2 y 100 caracteres");
        });
        test("rechaza nombre de más de 100 caracteres", () => {
            const longName = "A".repeat(101);
            expect(validarNombre(longName)).toContain("entre 2 y 100 caracteres");
        });
        test("rechaza nombre que no es string", () => {
            expect(validarNombre(123)).toContain("texto");
        });
    });

    describe("validarEmail", () => {
        test("rechaza correo electrónico nulo", () => {
            expect(validarEmail("")).toContain("requerido");
        });
        test("rechaza correo electrónico null", () => {
            expect(validarEmail(null)).toContain("requerido");
        });
        test("rechaza correo electrónico sin dominio", () => {
            expect(validarEmail("test@")).toContain("invalido");
        });
        test("rechaza correo electrónico sin @", () => {
            expect(validarEmail("testexample.com")).toContain("invalido");
        });
        test("acepta correo electrónico válido", () => {
            expect(validarEmail("john@example.com")).toBe(null);
        });
    });
});