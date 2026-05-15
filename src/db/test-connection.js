import "dotenv/config";
import pool from "./config.js";

async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Conexión exitosa");
        console.log("Hora actual en el servidor:", result.rows[0].now);
        await pool.end();
    } catch (error) {
        console.error("Error conectando:", error.message);
    }
}

testConnection();